import type { Metadata } from "next";
import { Container, Eyebrow, Reveal, SectionHeading } from "@/components/ui";
import FooterCTA from "@/components/FooterCTA";
import EnquiryForm from "@/components/EnquiryForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact PMCTC — Klagon, behind Breaking Yoke Ministry, Ghana. Find us on the map, call 027 771 0881 or email sika.addo@yahoo.com.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-forest">
        <div className="absolute inset-0 bg-gradient-to-br from-forest-deep via-forest to-forest-deep" />
        <Container className="relative pb-20 pt-40 lg:pb-28 lg:pt-48">
          <Eyebrow tone="light">Contact</Eyebrow>
          <h1 className="mt-5 max-w-3xl font-serif text-5xl font-medium leading-[1.05] text-ivory sm:text-6xl">
            Let's Start a Conversation.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ivory/80">
            enquiries about training, giving, partnership or volunteering —
            we would love to hear from you.
          </p>
        </Container>
      </section>

      <section className="bg-ivory">
        <Container className="py-24">
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <SectionHeading eyebrow="Reach Us" title="We're Nearby and Ready to Listen." />
              <ul className="mt-10 space-y-6">
                <li>
                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-gold-dark">
                    Telephone
                  </p>
                  <p className="mt-2 text-lg">
                    <a href="tel:0277710881" className="text-forest hover:text-terracotta-dark">
                      027 771 0881
                    </a>
                    {" · "}
                    <a href="tel:0264710881" className="text-forest hover:text-terracotta-dark">
                      026 471 0881
                    </a>
                    {" · "}
                    <a href="tel:0244847850" className="text-forest hover:text-terracotta-dark">
                      024 484 7850
                    </a>
                  </p>
                </li>
                <li>
                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-gold-dark">
                    Email
                  </p>
                  <p className="mt-2 text-lg">
                    <a href="mailto:sika.addo@yahoo.com" className="text-forest hover:text-terracotta-dark">
                      sika.addo@yahoo.com
                    </a>
                    {" · "}
                    <a href="mailto:asabea8394@gmail.com" className="text-forest hover:text-terracotta-dark">
                      asabea8394@gmail.com
                    </a>
                  </p>
                </li>
                <li>
                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-gold-dark">
                    Location
                  </p>
                  <p className="mt-2 text-lg text-charcoal/80">
                    Klagon, behind Breaking Yoke Ministry, Ghana
                  </p>
                  <p className="mt-2 text-lg">
                    <a
                      href="https://maps.app.goo.gl/kPgDwpxYNieu4pMf7"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-forest underline decoration-forest/30 underline-offset-4 hover:text-terracotta-dark"
                    >
                      Open in Google Maps ↗
                    </a>
                  </p>
                </li>
              </ul>
              <div className="mt-10 overflow-hidden rounded-2xl border border-forest/10 bg-forest/5">
                <iframe
                  title="Map showing PMCTC's location in Klagon, Ghana"
                  src="https://maps.google.com/maps?q=5.6585178,-0.0447543&z=16&hl=en&output=embed"
                  className="h-72 w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
                <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-4">
                  <p className="text-sm text-charcoal/60">
                    Klagon · 5.65852, −0.04475
                  </p>
                  <a
                    href="https://maps.app.goo.gl/kPgDwpxYNieu4pMf7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-terracotta-dark underline-offset-4 hover:underline"
                  >
                    Get Directions
                  </a>
                </div>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="rounded-2xl border border-forest/10 bg-white p-8 shadow-card sm:p-10">
                <SectionHeading eyebrow="Send a Message" title="How Can We Help?" />
                <EnquiryForm kind="general" className="mt-8" />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <FooterCTA />
    </>
  );
}
