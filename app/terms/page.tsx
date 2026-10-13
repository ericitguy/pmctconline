import type { Metadata } from "next";
import { Container, Eyebrow } from "@/components/ui";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms governing the use of the PMCTC website.",
  alternates: { canonical: "/terms" },
};

const sections = [
  {
    h: "Acceptance of Terms",
    p: "By accessing this website you agree to these Terms of Use. If you do not agree, please discontinue use of the site.",
  },
  {
    h: "Content and Purpose",
    p: "This website provides information about Passion for Mother and Child Training Centre (PMCTC), its programmes and how to support them. Content is provided for general information and does not constitute professional, medical or legal advice.",
  },
  {
    h: "Photography and Stories",
    p: "All photographs and stories on this site belong to PMCTC or are used with the consent of the individuals depicted. They may not be reproduced, redistributed or used to train AI systems without written permission from PMCTC.",
  },
  {
    h: "Donations",
    p: "Donations are voluntary and, where the applicable law permits, non-refundable. Until online payment processing is activated, no financial transaction takes place through this website.",
  },
  {
    h: "Limitation of Liability",
    p: "PMCTC accepts no liability for any loss arising from the use of, or inability to use, this website or the information it contains, to the fullest extent permitted by law.",
  },
  {
    h: "Governing Law",
    p: "These terms are governed by the laws of the Republic of Ghana.",
  },
];

export default function TermsPage() {
  return (
    <>
      <section className="bg-forest">
        <Container className="pb-16 pt-40 lg:pt-48">
          <Eyebrow tone="light">Legal</Eyebrow>
          <h1 className="mt-5 max-w-3xl font-serif text-5xl font-medium leading-[1.05] text-ivory sm:text-6xl">
            Terms of Use
          </h1>
        </Container>
      </section>
      <section className="bg-ivory">
        <Container className="max-w-3xl py-20">
          <div className="space-y-10">
            {sections.map((s) => (
              <article key={s.h}>
                <h2 className="font-serif text-2xl font-medium text-forest">{s.h}</h2>
                <p className="mt-3 leading-relaxed text-charcoal/70">{s.p}</p>
              </article>
            ))}
          </div>
          <p className="mt-14 border-t border-forest/10 pt-8 text-sm italic text-charcoal/50">
            Draft for PMCTC review before publication.
          </p>
        </Container>
      </section>
    </>
  );
}
