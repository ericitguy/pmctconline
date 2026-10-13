import Image from "next/image";
import type { Metadata } from "next";
import { Container, Eyebrow, Reveal, SectionHeading, ButtonLink } from "@/components/ui";
import FooterCTA from "@/components/FooterCTA";

export const metadata: Metadata = {
  title: "Our Impact & Success Stories",
  description:
    "From learning a skill to building a future: measurable and human stories of progress across PMCTC's catering, fashion, hairdressing and cosmetology departments.",
  alternates: { canonical: "/impact" },
};

const departments = [
  {
    dept: "Catering",
    current: "7",
    graduated: "10",
    outcome: "Graduates have established their own businesses.",
  },
  {
    dept: "Fashion & Dressmaking",
    current: "12",
    graduated: "2",
    outcome: "Graduates have started their own businesses.",
  },
  {
    dept: "Hairdressing",
    current: "8",
    graduated: "—",
    outcome: "First batch of students yet to graduate.",
  },
];

export default function ImpactPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-forest">
        <div className="absolute inset-0 opacity-30">
          <Image src="/photos/pmctc-18.jpg" alt="" fill priority sizes="100vw" className="object-cover" />
        </div>
        <Container className="relative pb-20 pt-40 lg:pb-28 lg:pt-48">
          <Eyebrow tone="light">Our Impact</Eyebrow>
          <h1 className="mt-5 max-w-3xl font-serif text-5xl font-medium leading-[1.05] text-ivory sm:text-6xl">
            Progress You Can Point To.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ivory/80">
            Every figure here comes directly from PMCTC's records. But the
            truest measure is not on this page — it is in homes where mothers
            now provide for their children with pride.
          </p>
        </Container>
      </section>

      <section className="bg-ivory">
        <Container className="py-24">
          <SectionHeading
            eyebrow="Department Records"
            title="Small Numbers. Enormous Lives."
            intro="We publish only what we can verify. Each woman behind these numbers has a name, a child, and a story that continues long after graduation."
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {departments.map((d, i) => (
              <Reveal key={d.dept} delay={i * 90}>
                <article className="h-full rounded-2xl border border-forest/10 bg-white p-9">
                  <h3 className="font-serif text-2xl font-medium text-forest">{d.dept}</h3>
                  <div className="mt-6 flex gap-10">
                    <div>
                      <p className="font-serif text-5xl text-gold-dark">{d.current}</p>
                      <p className="mt-1 text-xs uppercase tracking-[0.18em] text-charcoal/50">
                        On role
                      </p>
                    </div>
                    <div>
                      <p className="font-serif text-5xl text-forest">{d.graduated}</p>
                      <p className="mt-1 text-xs uppercase tracking-[0.18em] text-charcoal/50">
                        Graduated
                      </p>
                    </div>
                  </div>
                  <p className="mt-6 border-t border-forest/10 pt-5 text-sm leading-relaxed text-charcoal/70">
                    {d.outcome}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
          <p className="mt-8 max-w-2xl text-sm italic text-charcoal/50">
            Historical figures from PMCTC's organisational overview. They do not
            represent current total enrolment across all intakes and years.
          </p>
        </Container>
      </section>

      <section className="bg-white">
        <Container className="grid items-center gap-14 py-24 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="/photos/pmctc-21.jpg"
                alt="PMCTC graduates and staff celebrating together"
                fill
                sizes="(min-width: 1024px) 44vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <SectionHeading
              eyebrow="Stories"
              title="From Learning a Skill to Building a Future."
              intro="Across every department, women who arrived carrying heavy burdens now run businesses of their own — bakeries, dressmaking studios, salons. Their children grow up watching what courage looks like."
            />
            <p className="mt-6 leading-relaxed text-charcoal/70">
              We tell only verified stories, with the consent of the women they
              belong to. Participants may be identified by first name only or
              remain entirely anonymous — their dignity comes first, always.
            </p>
            <p className="mt-4 rounded-xl border border-goldsoft bg-goldsoft/20 p-5 text-sm text-charcoal/70">
              <strong className="text-forest">Space for real stories.</strong>{" "}
              This section holds a place for approved participant stories and
              photographs. Stories are added once consent is documented and
              reviews are complete.
            </p>
            <div className="mt-8">
              <ButtonLink href="/contact" variant="outline">
                Share Your Story
              </ButtonLink>
            </div>
          </Reveal>
        </Container>
      </section>

      <FooterCTA />
    </>
  );
}
