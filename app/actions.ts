"use server";

type EnquiryInput = {
  name: string;
  email: string;
  phone?: string;
  topic?: string;
  message: string;
  kind: "volunteer" | "partnership" | "general";
  // Anti-spam fields (hidden from real users):
  /** Honeypot field — must stay empty; bots autofill it. */
  company?: string;
  /** Millisecond epoch captured when the form was rendered in the browser. */
  started?: string;
};

type EnquiryResult = { ok: true } | { ok: false; error: string };

const enquiries: {
  id: number;
  receivedAt: string;
  kind: string;
  name: string;
  email: string;
  phone: string;
  topic: string;
  message: string;
  delivered: boolean;
}[] = [];

let seq = 0;

/** Staff recipients, configurable without code changes. */
const STAFF_INBOXES = (process.env.ENQUIRY_EMAIL_TO ?? "sika.addo@yahoo.com,asabea8394@gmail.com")
  .split(",")
  .map((v) => v.trim())
  .filter(Boolean);

const EMAIL_FROM = process.env.ENQUIRY_EMAIL_FROM ?? "PMCTC Website <onboarding@resend.dev>";

const emailOk = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

const escapeHtml = (v: string) =>
  v
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

// ------------------------------------------------------------------
// Spam protection
// ------------------------------------------------------------------

/** 1. Honeypot — real browsers never render this visibly, so a filled value
 *     means a bot. Silently swallow the submission ( Pretend success) so bots
 *     do not learn the trap. */
const honeypotTrapped = (input: EnquiryInput) =>
  String(input.company ?? "").trim().length > 0;

/** 2. Elapsed-time check — the `started` token is written by the form's
 *     React hydration, so absent or instantly-echoed values indicate a bot
 *     posting directly without a browser. */
const HUMAN_MIN_MS = 2_500;
const startedTokenValid = (started: string | undefined) => {
  if (!started) return false;
  const t = Number(started);
  if (!Number.isFinite(t)) return false;
  const elapsed = Date.now() - t;
  return elapsed >= HUMAN_MIN_MS && elapsed < 12 * 60 * 60 * 1000;
};

/** 3. Rate limiting — per submitter email (IPs are not stable in serverless). */
const RATE_WINDOW_MS = 15 * 60 * 1000;
const RATE_MAX_PER_WINDOW = 3;
const rateLimits = new Map<string, number[]>();

const rateLimited = (email: string) => {
  const now = Date.now();
  const hits = (rateLimits.get(email) ?? []).filter((t) => now - t < RATE_WINDOW_MS);
  if (hits.length >= RATE_MAX_PER_WINDOW) {
    rateLimits.set(email, hits);
    return true;
  }
  hits.push(now);
  rateLimits.set(email, hits);
  return false;
};

/** 4. Content heuristics — link stuffing and classic bbcode/HTML spam. */
const contentLooksSpammy = (message: string) => {
  const linkCount = (message.match(/https?:\/\//gi) ?? []).length;
  if (linkCount > 3) return true;
  if (/\[url=|<a\s+href|viagra|casino|crypto\s*giveaway|seo\s*services/i.test(message)) return true;
  if (/\u{FE0F}|\u{200D}/gu.test(message) && message.length < 60) return true; // emoji-only spam
  return false;
};

// ------------------------------------------------------------------
// Staff delivery (Resend REST API — activated by RESEND_API_KEY)
// ------------------------------------------------------------------

async function deliverToStaff(entry: {
  id: number;
  receivedAt: string;
  kind: string;
  name: string;
  email: string;
  phone: string;
  topic: string;
  message: string;
}): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    // Key not configured yet — delivery stays dormant until it is added
    // (Vercel → Settings → Environment Variables). Enquiries are still
    // validated, rate-limited and stored server-side meanwhile.
    return false;
  }

  const kindLabel = entry.kind.charAt(0).toUpperCase() + entry.kind.slice(1);
  const subject = `New ${kindLabel} enquiry #${entry.id} — ${entry.topic || "no topic"} (PMCTC website)`;

  const rows: [string, string][] = [
    ["Name", entry.name],
    ["Email", entry.email],
    ["Phone", entry.phone || "—"],
    ["Topic", entry.topic || "—"],
    ["Submitted", entry.receivedAt],
  ];
  const html = `
    <div style="font-family:Georgia,serif;color:#252825;max-width:640px">
      <h2 style="color:#183D32;margin:0 0 4px">New website enquiry</h2>
      <p style="color:#8A6E3E;font-size:12px;letter-spacing:1px;margin:0 0 20px">${kindLabel.toUpperCase()} FORM · PMCTC-ONLINE.COM</p>
      <table style="border-collapse:collapse;font-family:Helvetica,Arial,sans-serif;font-size:14px">
        ${rows
          .map(
            ([k, v]) =>
              `<tr><td style="padding:6px 16px 6px 0;color:#8A6E3E;white-space:nowrap;vertical-align:top">${k}</td><td style="padding:6px 0;font-weight:bold">${escapeHtml(v)}</td></tr>`,
          )
          .join("")}
      </table>
      <h3 style="color:#183D32;margin:24px 0 8px">Message</h3>
      <p style="white-space:pre-wrap;font-family:Helvetica,Arial,sans-serif;font-size:14px;line-height:1.6">${escapeHtml(entry.message)}</p>
      <p style="color:#999;font-size:12px;margin-top:28px">Reply directly to this email to answer ${escapeHtml(entry.name)}.</p>
    </div>`;

  const text = `New ${kindLabel} enquiry #${entry.id} — PMCTC website
Name: ${entry.name}
Email: ${entry.email}
Phone: ${entry.phone || "—"}
Topic: ${entry.topic || "—"}
Submitted: ${entry.receivedAt}

Message:
${entry.message}`;

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: EMAIL_FROM,
        to: STAFF_INBOXES,
        reply_to: entry.email,
        subject,
        html,
        text,
      }),
    });
    if (!res.ok) {
      const body = await res.text().catch(() => "");
      console.error(`[pmctc-enquiry] delivery failed (${res.status}): ${body}`);
      return false;
    }
    return true;
  } catch (err) {
    console.error("[pmctc-enquiry] delivery error:", err);
    return false;
  }
}

// ------------------------------------------------------------------

export async function submitEnquiry(input: EnquiryInput): Promise<EnquiryResult> {
  const { name, email, phone = "", topic = "", message, kind } = input;

  if (!name.trim() || !email.trim() || !message.trim()) {
    return { ok: false, error: "Please complete all required fields." };
  }

  if (!emailOk(email)) {
    return { ok: false, error: "That email address does not look right." };
  }

  if (message.length > 5000) {
    return { ok: false, error: "Message is too long (5,000 characters maximum)." };
  }

  if (!["volunteer", "partnership", "general"].includes(kind)) {
    return { ok: false, error: "Something went wrong. Please try again." };
  }

  // ---- Spam gate -----------------------------------------------
  // Honeypot and elapsed-time failures swallow silently: the sender sees
  // success, no mail is sent, nothing is stored.
  if (honeypotTrapped(input) || !startedTokenValid(input.started)) {
    console.log(`[pmctc-enquiry] blocked candidate submission (${kind}) — bot pattern`);
    return { ok: true };
  }

  const cleanEmail = email.trim().toLowerCase();

  if (rateLimited(cleanEmail)) {
    return {
      ok: false,
      error: "You've sent several messages recently. Please wait a little while before trying again.",
    };
  }

  if (contentLooksSpammy(message.trim())) {
    console.log(`[pmctc-enquiry] rejected submission (${kind}) from ${cleanEmail} — content pattern`);
    return { ok: false, error: "Your message could not be sent. Please rephrase it and try again." };
  }

  // ---- Store ----------------------------------------------------
  const entry = {
    id: ++seq,
    receivedAt: new Date().toISOString(),
    kind,
    name: name.trim().slice(0, 200),
    email: cleanEmail.slice(0, 200),
    phone: phone.trim().slice(0, 40),
    topic: topic.trim().slice(0, 80),
    message: message.trim(),
    delivered: false,
  };
  enquiries.push(entry);

  // ---- Deliver to staff ------------------------------------------
  entry.delivered = await deliverToStaff(entry);

  console.log(
    `[pmctc-enquiry] #${entry.id} (${kind}) from ${entry.email} — topic: ${entry.topic || "n/a"} — ${
      entry.delivered ? "delivered to staff" : "stored (delivery inactive/failed)"
    }`,
  );

  return { ok: true };
}

export async function getStoredEnquiries() {
  return enquiries;
}
