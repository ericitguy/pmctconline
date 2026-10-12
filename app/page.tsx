import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ButtonLink, Container, Eyebrow, Reveal, SectionHeading } from "@/components/ui";
import ProgrammeCard from "@/components/ProgrammeCard";
import FooterCTA from "@/components/FooterCTA";
import { programmes } from "@/lib/programmes";

export const metadata: Metadata = {
  title:
    "PMCTC — Empowering Mothers. Nurturing Futures. | Passion for Mother and Child Training Centre",
  description:
    "Since 2014, PMCTC has equipped single mothers in Ghana with vocational training, emotional counselling, childcare and faith-based guidance. Every mother deserves the opportunity to build an independent future.",
};

const pillars = [
  {
    number: "01",
    title: "Emotional Wellbeing",
    body: "Support women as they navigate personal challenges and rebuild confidence.",
  },
  {
    number: "02",
    title: "Skills and Education",
    body: "Practical vocational training that can help participants pursue livelihoods.",
  },
  {
    number: "03",
    title: "Faith and Values",
    body: "Moral and biblical guidance consistent with our Christian foundation.",
  },
  {
    number: "04",
    title: "Advocacy and Awareness",
    body: "Raising attention to the challenges single mothers face, encouraging wider community support.",
  },
];

const milestones = [
  {
    year: "2014",
    title: "A calling becomes a centre",
    body: "PMCTC was founded by Mrs. Alberta Eku-Sika Addo on 17 February to support single mothers.",
  },
  {
    year: "2017–2018",
    title: "Training takes root",
    body: "Programme photographs from these years document the growth of vocational training and the first graduation activities.",
  },
  {
    year: "2022",
    title: "A nursery for the littlest learners",
    body: "The nursery development was documented in the organisation's overview — care for children while mothers train.",
  },
  {
    year: "2025",
    title: "A growing community",
    body: "Recent photographs showcase ongoing training activities and the PMCTC community across every department.",
  },
];

const people = [
  {
    name: "Mrs. Alberta Eku-Sika Addo",
    role: "Founder & Director",
    note: "Counsellor, caterer and CEO of Aldans Catering School and Services.",
  },
  {
    name: "Mr. Daniel W. Addo",
    role: "Board Chairman",
    note: "Banker and businessman; a steadfast advocate for women and children.",
  },
  {
    name: "Mrs. Barbara B. Spins",
    role: "Social Care Adviser",
    note: "Social care practitioner with over 15 years' UK practice; regular family-matters resource person on Starr FM.",
  },
  {
    name: "Dr. Kojo Cobba Essel",
    role: "Medical Adviser",
    note: "Medical doctor, MBA, ISSA-certified in exercise therapy and nutrition; cares for the medical needs of our ladies.",
  },
  {
    name: "Miss Linda Asante",
    role: "Administrator & Programmes Director",
    note: "Once a single mother herself, she understands the challenges the ladies face.",
  },
];

const partners = ["Health Essentials", "Fafa Foundation", "Aldans Catering School and Services"];

export default function HomePage() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative flex min-h-[100svh] items-end overflow-hidden bg-forest-deep">
        <div className="absolute inset-0">
          <Image
            src="/photos/pmctc-01.jpg"
            alt="A PMCTC mother smiling while holding her young child"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[50%_30%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-forest-deep/55 to-forest-deep/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-forest-deep/70 via-transparent to-transparent" />
        </div>
        <Container className="relative pb-20 pt-40 lg:pb-28">
          <div className="max-w-3xl">
            <Eyebrow tone="light">
              Passion for Mother and Child Training Centre · Ghana
            </Eyebrow>
            <h1 className="mt-6 font-serif text-5xl font-medium leading-[1.02] text-ivory sm:text-7xl lg:text-[5.4rem]">
              Empowering Mothers.
              <br />
              <span className="text-goldsoft">Nurturing Futures.</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-ivory/85">
              Every mother deserves the opportunity to build an independent
              future. At PMCTC, we equip single mothers with practical skills,
              emotional support, and opportunities to create better lives for
              themselves and their children.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <ButtonLink href="/donate" variant="gold">
                Support Our Mission
              </ButtonLink>
              <ButtonLink href="/programmes" variant="light">
                Discover Our Programmes
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      {/* ============ IMPACT INTRO ============ */}
      <section className="bg-ivory">
        <Container className="grid items-center gap-14 py-24 lg:grid-cols-2 lg:gap-20 lg:py-32">
          <Reveal>
            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                <Image
                  src="/photos/pmctc-06.jpg"
                  alt="A trainee concentrating on her coursework at PMCTC"
                  fill
                  sizes="(min-width: 1024px) 44vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-4 hidden w-48 overflow-hidden rounded-xl border-4 border-ivory shadow-lift sm:block lg:-right-10 lg:w-64">
                <div className="relative aspect-square">
                  <Image
                    src="/photos/pmctc-02.jpg"
                    alt="A moment of pride during a PMCTC training session"
                    fill
                    sizes="260px"
                    className="object-cover"
                  />
                </div>
              </div>
              <span
                aria-hidden="true"
                className="absolute -left-6 -top-6 h-24 w-24 rounded-full border border-gold/50"
              />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <SectionHeading
              eyebrow="Since 17 February 2014"
              title="Opportunity Changes Everything."
              intro="Since 17 February 2014, Passion for Mother and Child Training Centre has worked to support single mothers through practical vocational education, emotional counselling, faith-based guidance, and initiatives that help families move towards greater self-reliance."
            />
            <div className="mt-8">
              <ButtonLink href="/about" variant="outline">
                Our Story
              </ButtonLink>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ============ MISSION & VISION ============ */}
      <section className="bg-forest text-ivory">
        <Container className="py-24 lg:py-32">
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <div className="border-l-2 border-gold/60 pl-8">
                <Eyebrow tone="light">Our Vision</Eyebrow>
                <p className="mt-5 font-serif text-2xl leading-relaxed text-ivory/95 sm:text-3xl">
                  &ldquo;To help single mothers become spiritually, socially,
                  economically, and emotionally self-reliant so that they can
                  better support the development of their children.&rdquo;
                </p>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="border-l-2 border-terracotta/60 pl-8">
                <Eyebrow tone="light">Our Mission</Eyebrow>
                <p className="mt-5 font-serif text-2xl leading-relaxed text-ivory/95 sm:text-3xl">
                  &ldquo;To help single mothers create innovative solutions and
                  make informed choices to improve their lives. We motivate and
                  encourage them to achieve personal and professional
                  fulfilment.&rdquo;
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ============ PROGRAMMES ============ */}
      <section className="bg-white">
        <Container className="py-24 lg:py-32">
          <div className="flex flex-wrap items-end justify-between gap-8">
            <SectionHeading
              eyebrow="What We Do"
              title="Programmes Built Around Real Lives."
              intro="Six connected programmes — vocational training, emotional support and childcare — each led by experienced department heads who know every trainee by name."
            />
            <ButtonLink href="/programmes" variant="outline" className="shrink-0">
              All Programmes
            </ButtonLink>
          </div>
          <div className="mt-16 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {programmes.slice(0, 6).map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 100}>
                <ProgrammeCard programme={p} index={i} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ============ PMCTC DIFFERENCE / PILLARS ============ */}
      <section className="bg-ivory">
        <Container className="py-24 lg:py-32">
          <SectionHeading
            align="center"
            eyebrow="The PMCTC Difference"
            title="One Journey. Four Pillars."
            intro="Every woman's path moves through support, skills, confidence and community — an integrated approach rather than a single class."
          />
          <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-forest/10 bg-forest/10 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((pillar, i) => (
              <Reveal key={pillar.number} delay={i * 90} className="bg-ivory">
                <div className="flex h-full flex-col p-8">
                  <span className="font-serif text-3xl text-gold">{pillar.number}</span>
                  <h3 className="mt-5 font-serif text-2xl font-medium text-forest">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-charcoal/70">
                    {pillar.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mx-auto mt-10 max-w-2xl text-center text-sm italic text-charcoal/50">
            PMCTC walks alongside each woman at her own pace — we do not promise
            guaranteed outcomes, we provide the tools, the care and the chance.
          </p>
        </Container>
      </section>

      {/* ============ STORIES ============ */}
      <section className="bg-white">
        <Container className="grid items-center gap-14 py-24 lg:grid-cols-2 lg:gap-20 lg:py-32">
          <Reveal>
            <SectionHeading
              eyebrow="Impact & Stories"
              title="From Learning a Skill to Building a Future."
              intro="Across our catering, fashion, hairdressing and cosmetology departments, women who arrived carrying heavy burdens are now running businesses of their own — and their children are growing up watching it happen."
            />
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div className="rounded-xl border border-forest/10 bg-ivory p-6">
                <p className="font-serif text-4xl text-forest">Four</p>
                <p className="mt-2 text-sm text-charcoal/70">
                  vocational departments, each led by a dedicated head.
                </p>
              </div>
              <div className="rounded-xl border border-forest/10 bg-ivory p-6">
                <p className="font-serif text-4xl text-forest">2014</p>
                <p className="mt-2 text-sm text-charcoal/70">
                  founded and still walking with mothers every day.
                </p>
              </div>
            </div>
            <div className="mt-9">
              <ButtonLink href="/impact">Read Our Impact</ButtonLink>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
                <Image
                  src="/photos/pmctc-22.jpg"
                  alt="PMCTC staff members with the founder"
                  fill
                  sizes="(min-width: 1024px) 22vw, 45vw"
                  className="object-cover"
                />
              </div>
              <div className="relative mt-10 aspect-[3/4] overflow-hidden rounded-2xl">
                <Image
                  src="/photos/pmctc-25.jpg"
                  alt="A joyful moment at a PMCTC community gathering"
                  fill
                  sizes="(min-width: 1024px) 22vw, 45vw"
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ============ TIMELINE ============ */}
      <section className="bg-ivory">
        <Container className="py-24 lg:py-32">
          <SectionHeading
            eyebrow="Our Journey"
            title="A Decade of Walking Together."
          />
          <ol className="mt-16 grid gap-10 md:grid-cols-4">
            {milestones.map((m, i) => (
              <Reveal key={m.year} delay={i * 90}>
                <li className="relative border-t-2 border-forest/15 pt-6">
                  <span
                    aria-hidden="true"
                    className="absolute -top-[5px] left-0 h-2 w-2 rounded-full bg-gold"
                  />
                  <p className="font-serif text-xl text-terracotta">{m.year}</p>
                  <h3 className="mt-2 font-serif text-xl font-medium text-forest">{m.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-charcoal/70">{m.body}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      {/* ============ OUR PEOPLE ============ */}
      <section className="bg-white">
        <Container className="py-24 lg:py-32">
          <div className="flex flex-wrap items-end justify-between gap-8">
            <SectionHeading
              eyebrow="Our People"
              title="Led by Experience. Driven by Compassion."
              intro="Counsellors, bankers, doctors, administrators and trainers — every member of the PMCTC family brings professional excellence and personal passion."
            />
            <ButtonLink href="/team" variant="outline" className="shrink-0">
              Meet the Team
            </ButtonLink>
          </div>
          <ul className="mt-14 divide-y divide-forest/10 border-y border-forest/10">
            {people.map((person, i) => (
              <Reveal key={person.name} delay={i * 60}>
                <li className="grid gap-2 py-6 sm:grid-cols-[1fr_auto] sm:items-baseline sm:gap-8">
                  <div>
                    <h3 className="font-serif text-2xl font-medium text-forest">
                      {person.name}
                    </h3>
                    <p className="mt-1 text-sm text-charcoal/70">{person.note}</p>
                  </div>
                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-gold sm:text-right">
                    {person.role}
                  </p>
                </li>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      {/* ============ PARTNERS ============ */}
      <section className="border-y border-forest/10 bg-ivory">
        <Container className="py-20 text-center">
          <Eyebrow>Our Partners</Eyebrow>
          <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-14 gap-y-6">
            {partners.map((p) => (
              <li
                key={p}
                className="font-serif text-xl tracking-wide text-forest/70 sm:text-2xl"
              >
                {p}
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <Link
              href="/get-involved#partnership"
              className="text-sm font-semibold uppercase tracking-[0.16em] text-terracotta underline-offset-4 hover:underline"
            >
              Partner With Us to Create Lasting Change →
            </Link>
          </div>
        </Container>
      </section>

      {/* ============ DONATION PREVIEW ============ */}
      <section className="bg-forest text-ivory">
        <Container className="grid items-center gap-14 py-24 lg:grid-cols-2 lg:gap-20 lg:py-32">
          <Reveal>
            <SectionHeading
              tone="light"
              eyebrow="Give"
              title="Your Support Can Open a New Door."
              intro="Help us strengthen vocational training, support mothers during their learning journey, improve access to childcare, and create opportunities for families to build more secure futures."
            />
            <div className="mt-9">
              <ButtonLink href="/donate" variant="gold">
                Give Today
              </ButtonLink>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <ul className="grid gap-4 sm:grid-cols-2">
              {[
                ["Vocational training", "Sponsor a mother's place in a department."],
                ["Materials & equipment", "Sewing machines, salon tools, kitchen kit."],
                ["Childcare & nursery", "Safe early-years care while mothers learn."],
                ["Wellbeing support", "Counselling and emotional care services."],
              ].map(([t, d]) => (
                <li
                  key={t}
                  className="rounded-xl border border-ivory/15 bg-ivory/5 p-6"
                >
                  <h3 className="font-serif text-xl text-goldsoft">{t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ivory/70">{d}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      <FooterCTA />
    </>
  );
}
