import Image from "next/image";
import type { Metadata } from "next";
import { Container, Eyebrow, Reveal, SectionHeading, ButtonLink } from "@/components/ui";
import FooterCTA from "@/components/FooterCTA";

export const metadata: Metadata = {
  title: "Stories",
  description:
    "Real journeys of PMCTC mothers — told with consent, dignity and hope. From learning a skill to building a future.",
  alternates: { canonical: "/stories" },
};

export default function StoriesPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-forest">
        <div className="absolute inset-0 opacity-30">
          <Image src="/photos/pmctc-19.jpg" alt="" fill priority sizes="100vw" className="object-cover" />
        </div>
        <Container className="relative pb-20 pt-40 lg:pb-28 lg:pt-48">
          <Eyebrow tone="light">Stories</Eyebrow>
          <h1 className="mt-5 max-w-3xl font-serif text-5xl font-medium leading-[1.05] text-ivory sm:text-6xl">
            Every Graduate Has a Story Worth Telling.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ivory/80">
            We publish only verified stories with documented consent. Where
            requested, a participant is named by first name only — or remains
            anonymous. Dignity first, always.
          </p>
        </Container>
      </section>

      <section className="bg-ivory">
        <Container className="py-24">
          <SectionHeading
            eyebrow="Image-Led Storytelling"
            title="From Learning a Skill to Building a Future."
            intro="The story of PMCTC's graduates begins in our classrooms — and continues in kitchens, salons and studios across Ghana. This space holds a curated narrative for approved participant stories and photographs; stories appear here once consent is documented and reviews are complete."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {[
              { img: "/photos/pmctc-06.jpg", alt: "A trainee focused on her practical work" },
              { img: "/photos/pmctc-09.jpg", alt: "Training equipment waiting for the next class" },
            ].map((item, i) => (
              <Reveal key={item.img} delay={i * 100}>
                <figure className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                  <Image src={item.img} alt={item.alt} fill sizes="50vw" className="object-cover" />
                  <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-forest-deep/80 to-transparent p-6 text-sm text-ivory/90">
                    Documentary photo caption pending consent review.
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <div className="mt-14">
            <ButtonLink href="/impact" variant="outline">
              See Our Impact Numbers
            </ButtonLink>
          </div>
        </Container>
      </section>

      <FooterCTA />
    </>
  );
}
