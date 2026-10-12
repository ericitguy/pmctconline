"use server";

type EnquiryInput = {
  name: string;
  email: string;
  phone?: string;
  topic?: string;
  message: string;
  kind: "volunteer" | "partnership" | "general";
};

type EnquiryResult = { ok: true } | { ok: false; error: string };

// Internal drop-in storage used until the verified inbox / SMS routing
// destination is configured. See helpdesk TODOs in submitEnquiry.
const enquiries: {
  id: number;
  receivedAt: string;
  kind: string;
  name: string;
  email: string;
  phone: string;
  topic: string;
  message: string;
}[] = [];

let seq = 0;

const emailOk = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

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

  enquiries.push({
    id: ++seq,
    receivedAt: new Date().toISOString(),
    kind,
    name: name.trim().slice(0, 200),
    email: email.trim().slice(0, 200),
    phone: phone.trim().slice(0, 40),
    topic: topic.trim().slice(0, 80),
    message: message.trim(),
  });

  // TODO: Route enquiries to the verified PMCTC inbox / SMS gateway
  // TODO: Add rate limiting + reCAPTCHA or equivalent spam protection
  console.log(
    `[pmctc-enquiry] #${seq} (${kind}) from ${email.trim()} — topic: ${topic || "n/a"}`
  );

  return { ok: true };
}

export async function getStoredEnquiries() {
  return enquiries;
}
