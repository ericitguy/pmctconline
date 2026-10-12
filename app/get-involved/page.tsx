import type { Metadata } from "next";
import { Container, Eyebrow, Reveal, SectionHeading } from "@/components/ui";
import FooterCTA from "@/components/FooterCTA";
import EnquiryForm from "@/components/EnquiryForm";

export const metadata: Metadata = {
  title: "Get Involved",
  description:
    "Volunteer as a vocational instructor, mentor, counsellor or childcare helper — or partner with PMCTC through CSR, funding and strategic support.",
};

const ways = [
  "Vocational instruction",
  "Mentoring and entrepreneurship support",
  "Professional counselling and wellbeing support",
  "Childcare support",
  "Training materials and equipment",
  "Corporate social responsibility programmes",
  "Funding and strategic partnerships",
];

export default function GetInvolvedPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-forest">
        <div className="absolute inset-0 bg-gradient-to-br from-forest-deep via-forest to-forest-deep" />
        <Container className="relative pb-20 pt-40 lg:pb-28 lg:pt-48">
          <Eyebrow tone="light">Get Involved</Eyebrow>
          <h1 className="mt-5 max-w-3xl font-serif text-5xl font-medium leading-[1.05] text-ivory sm:text-6xl">
            Your Skills Can Make a Difference.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ivory/80">
            Whether you teach, mentor, counsel, care for children, or bring
            resources and partnerships — there is a place for you at PMCTC.
          </p>
        </Container>
      </section>

      <section className="bg-ivory">
        <Container className="py-24">
          <div className="grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
            <Reveal>
              <SectionHeading
                eyebrow="Ways to Help"
                title="Give Your Time, Talent or Treasure."
                intro="Every contribution, however it arrives, becomes part of a mother's turn towards independence."
              />
              <ul className="mt-10 space-y-4">
                {ways.map((w, i) => (
                  <li
                    key={w}
                    className="flex items-center gap-5 rounded-xl border border-forest/10 bg-white px-6 py-4"
                  >
                    <span className="font-serif text-xl text-gold">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-medium text-charcoal/80">{w}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={120}>
              <div id="enquiry" className="rounded-2xl border border-forest/10 bg-white p-8 shadow-card sm:p-10">
                <SectionHeading eyebrow="Enquire" title="Tell Us How You'd Like to Help." />
                <EnquiryForm kind="volunteer" className="mt-8" />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section id="partnership" className="bg-forest text-ivory">
        <Container className="py-24">
          <div className="grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
            <Reveal>
              <SectionHeading
                tone="light"
                eyebrow="For Organisations"
                title="Partner With Us to Create Lasting Change."
                intro="Foundations, companies, educational institutions and healthcare professionals all have a role to play in a single mother's journey to self-reliance."
              />
            </Reveal>
            <Reveal delay={120}>
              <div className="rounded-2xl border border-ivory/20 bg-ivory/5 p-8 sm:p-10">
                <SectionHeading tone="light" title="Start a Partnership." />
                <EnquiryForm kind="partnership" className="mt-8" />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <FooterCTA />
    </>
  );
}
