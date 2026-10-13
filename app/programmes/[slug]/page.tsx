import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ButtonLink, Container, Eyebrow, Reveal, SectionHeading } from "@/components/ui";
import FooterCTA from "@/components/FooterCTA";
import { programmes, getProgramme } from "@/lib/programmes";

export function generateStaticParams() {
  return programmes.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const programme = getProgramme(slug);
  if (!programme) return {};
  return {
    title: programme.title,
    description: programme.lead,
    alternates: { canonical: `/programmes/${programme.slug}` },
  };
}

export default async function ProgrammePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const programme = getProgramme(slug);
  if (!programme) notFound();

  const related = programmes.filter((p) => p.slug !== programme.slug).slice(0, 3);

  return (
    <>
      <section className="relative overflow-hidden bg-forest">
        <div className="absolute inset-0 opacity-40">
          <Image
            src={programme.image}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-forest-deep via-forest-deep/80 to-forest-deep/30" />
        </div>
        <Container className="relative pb-20 pt-40 lg:pb-28 lg:pt-48">
          <Eyebrow tone="light">Our Programmes</Eyebrow>
          <h1 className="mt-5 max-w-3xl font-serif text-5xl font-medium leading-[1.05] text-ivory sm:text-6xl">
            {programme.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ivory/80">
            {programme.lead}
          </p>
        </Container>
      </section>

      <section className="bg-ivory">
        <Container className="grid items-start gap-14 py-24 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
              <Image
                src={programme.image}
                alt={programme.imageAlt}
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <SectionHeading
              eyebrow="What You'll Learn"
              title="Practical. Hands-On. Real-World Ready."
            />
            <ul className="mt-10 space-y-4">
              {programme.skills.map((skill) => (
                <li key={skill} className="flex items-start gap-4">
                  <span
                    aria-hidden="true"
                    className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-gold"
                  />
                  <span className="text-lg leading-relaxed text-charcoal/80">{skill}</span>
                </li>
              ))}
            </ul>
            {programme.headLed && (
              <p className="mt-8 border-l-2 border-gold pl-5 text-sm leading-relaxed text-charcoal/60">
                Led by {programme.headLed}.
              </p>
            )}
            <div className="mt-6 space-y-5 text-charcoal/75">
              {programme.detail.map((d, i) => (
                <p key={i} className="leading-relaxed">
                  {d}
                </p>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap gap-4">
              <ButtonLink href="/contact">Enquire About Training</ButtonLink>
              <ButtonLink href="/donate" variant="outline">
                Support This Programme
              </ButtonLink>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="bg-white">
        <Container className="py-20">
          <Eyebrow>Explore More</Eyebrow>
          <div className="mt-8 grid gap-8 sm:grid-cols-3">
            {related.map((p) => (
              <Link
                key={p.slug}
                href={`/programmes/${p.slug}`}
                className="group rounded-2xl border border-forest/10 p-8 transition-all hover:-translate-y-1 hover:border-forest/30 hover:shadow-card"
              >
                <h3 className="font-serif text-2xl font-medium text-forest group-hover:text-terracotta-dark">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal/70">{p.short}</p>
                <p className="mt-5 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-gold-dark">
                  Explore →
                </p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <FooterCTA />
    </>
  );
}
