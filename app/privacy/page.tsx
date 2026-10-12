import type { Metadata } from "next";
import { Container, Eyebrow } from "@/components/ui";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How PMCTC handles personal information submitted through this website.",
};

const sections = [
  {
    h: "Information We Collect",
    p: "When you contact us through a form, email or telephone, we collect the details you choose to give us — typically your name, email address, phone number and the content of your message. If you are a programme participant, we collect additional information only where it is needed to deliver that programme and only with your informed consent.",
  },
  {
    h: "How We Use Information",
    p: "We use your information to respond to enquiries, process donations, run training programmes, and — where you have explicitly agreed — to share your story or photographs. We do not sell, rent or trade personal information to anyone.",
  },
  {
    h: "Photographs and Stories",
    p: "Images and stories of participants, staff and especially children are published only with documented consent. Consent can be withdrawn at any time by contacting us, and we will remove the material as soon as reasonably possible.",
  },
  {
    h: "Donations",
    p: "When online giving is enabled, payments are processed by a verified, PCI-compliant payment provider. We do not store your card or mobile money credentials on our servers. Receipts are issued where the payment provider supports them.",
  },
  {
    h: "Cookies and Analytics",
    p: "This website currently runs no third-party advertising cookies. If analytics are added later, they will be implemented on a consent-aware basis and this policy will be updated.",
  },
  {
    h: "Your Rights",
    p: "You may ask us at any time to access, correct or delete the personal information we hold about you. Written requests can be sent to sika.addo@yahoo.com or asabea8394@gmail.com.",
  },
  {
    h: "Children's Privacy",
    p: "We take special care with information about children. Images or details of children connected with PMCTC are never published without verified guardian consent.",
  },
];

export default function PrivacyPage() {
  return (
    <>
      <section className="bg-forest">
        <Container className="pb-16 pt-40 lg:pt-48">
          <Eyebrow tone="light">Legal</Eyebrow>
          <h1 className="mt-5 max-w-3xl font-serif text-5xl font-medium leading-[1.05] text-ivory sm:text-6xl">
            Privacy Policy
          </h1>
          <p className="mt-5 max-w-2xl text-ivory/70">
            How Passion for Mother and Child Training Centre handles your
            personal information.
          </p>
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
            This policy is a working draft for review by PMCTC before publication
            under Ghana's Data Protection Act, 2012 (Act 843).
          </p>
        </Container>
      </section>
    </>
  );
}
