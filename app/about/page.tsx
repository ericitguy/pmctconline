import Image from "next/image";
import type { Metadata } from "next";
import { Container, Eyebrow, SectionHeading, Reveal, ButtonLink } from "@/components/ui";
import FooterCTA from "@/components/FooterCTA";

export const metadata: Metadata = {
  title: "About PMCTC",
  description:
    "Founded on 17 February 2014 by Mrs. Alberta Eku-Sika Addo, Passion for Mother and Child Training Centre (PMCTC) supports single mothers in Ghana through vocational training, counselling and childcare.",
  alternates: { canonical: "/about" },
};

const pillars = [
    {
    number: "01",
    title: "Emotional Wellbeing",
    body: "We help women address the root causes of emotional trauma, working with health personnel and Christian counsellors so they can rebuild confidence.",
  },
  {
    number: "02",
    title: "Skills and Education",
    body: "We provide the practical vocational skills women need to earn a livelihood and take control of their lives.",
  },
  {
    number: "03",
    title: "Faith and Values",
    body: "We offer firm moral education founded on biblical principles, consistent with our Christian foundation.",
  },
  {
    number: "04",
    title: "Advocacy and Awareness",
    body: "We highlight the plight and challenges of this social grouping to the relevant authorities and society at large, including through seminars on the issues single mothers face.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-forest">
        <div className="absolute inset-0 opacity-25">
          <Image
            src="/photos/pmctc-16.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <Container className="relative pb-20 pt-40 lg:pb-28 lg:pt-48">
          <Eyebrow tone="light">About PMCTC</Eyebrow>
          <h1 className="mt-5 max-w-3xl font-serif text-5xl font-medium leading-[1.05] text-ivory sm:text-6xl">
            A Home for Second Chances.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ivory/80">
            Passion for Mother and Child Training Centre (PMCTC) was started on
            the 17th of February 2014 by Mrs. Alberta Addo to support single
            parents. Through PMCTC, single mothers receive practical training,
            emotional support and biblical counselling on the journey to
            self-sufficiency.
          </p>
        </Container>
      </section>

      <section className="bg-ivory">
        <Container className="grid items-start gap-14 py-24 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
              <Image
                src="/photos/pmctc-33.jpg"
                alt="PMCTC trainees gathered with the Founder, Mrs. Alberta Addo"
                fill
                sizes="(min-width: 1024px) 44vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={120} className="space-y-10">
            <SectionHeading
              eyebrow="Our Beginning"
              title="Born From a Passion for Mothers."
              intro="What began as one woman's calling has grown into a training centre where single mothers — many of them scarred by divorce, spousal loss or abandonment — find a community that believes in their future."
            />
            <p className="leading-relaxed text-charcoal/70">
              We believe no mother should have to choose between feeding her
              child today and building a livelihood for tomorrow. PMCTC exists
              so that she never has to. While mothers train, their children
              learn and play in our nursery; while hearts heal through
              counselling, hands learn a trade that can put food on the table
              for a lifetime.
            </p>
            <p className="leading-relaxed text-charcoal/70">
              Every department, every class and every meal of support is rooted
              in one conviction: when a mother rises, her children rise with
              her.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="bg-white">
        <Container className="py-24">
          <SectionHeading
            align="center"
            eyebrow="Our Approach"
            title="Support, Skills, and a Voice."
            intro="We provide single mothers with the kind of education that builds self-confidence and prepares them to deal with social challenges — and we raise awareness of the realities they face."
          />
          <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-forest/10 bg-forest/10 sm:grid-cols-2">
            {pillars.map((p, i) => (
              <Reveal key={p.number} delay={i * 80} className="bg-white">
                <div className="h-full p-10">
                  <span className="font-serif text-3xl text-gold-dark">{p.number}</span>
                  <h3 className="mt-4 font-serif text-2xl font-medium text-forest">{p.title}</h3>
                  <p className="mt-3 leading-relaxed text-charcoal/70">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <FooterCTA image="/photos/pmctc-25.jpg" alt="PMCTC mothers at a community event" />
    </>
  );
}
