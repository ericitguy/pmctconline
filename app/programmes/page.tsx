import type { Metadata } from "next";
import Image from "next/image";
import { Container, Eyebrow, Reveal, SectionHeading, ButtonLink } from "@/components/ui";
import ProgrammeCard from "@/components/ProgrammeCard";
import FooterCTA from "@/components/FooterCTA";
import { programmes } from "@/lib/programmes";

export const metadata: Metadata = {
  title: "Our Programmes",
  description:
    "Vocational training for single mothers in Ghana: catering, fashion and dressmaking, hairdressing, cosmetology, emotional support and childcare.",
};

export default function ProgrammesPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-forest">
        <div className="absolute inset-0 opacity-25">
          <Image src="/photos/pmctc-07.jpg" alt="" fill priority sizes="100vw" className="object-cover" />
        </div>
        <Container className="relative pb-20 pt-40 lg:pb-28 lg:pt-48">
          <Eyebrow tone="light">Our Programmes</Eyebrow>
          <h1 className="mt-5 max-w-3xl font-serif text-5xl font-medium leading-[1.05] text-ivory sm:text-6xl">
            Skills That Transform.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ivory/80">
            Four vocational departments, emotional support, and a nursery —
            every programme exists to remove a barrier between a mother and her
            independence.
          </p>
        </Container>
      </section>

      <section className="bg-ivory">
        <Container className="py-24">
          <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {programmes.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 100}>
                <ProgrammeCard programme={p} index={i} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white">
        <Container className="py-20 text-center">
          <SectionHeading
            align="center"
            title="Are You Ready to Learn a Vocation?"
            intro="Help is here for you. Enquire about training at PMCTC — or refer a mother who needs a place to begin again."
          />
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <ButtonLink href="/contact" variant="primary">
              Enquire About Training
            </ButtonLink>
            <ButtonLink href="/get-involved" variant="outline">
              Teach or Volunteer
            </ButtonLink>
          </div>
        </Container>
      </section>

      <FooterCTA />
    </>
  );
}
