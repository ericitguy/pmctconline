import type { Metadata } from "next";
import { Container, Eyebrow, Reveal, SectionHeading, ButtonLink } from "@/components/ui";
import FooterCTA from "@/components/FooterCTA";

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Your support can open a new door. Give towards vocational training, materials and equipment, childcare, counselling, or general programme support at PMCTC.",
  alternates: { canonical: "/donate" },
};

const options = [
  {
    title: "Vocational Training",
    body: "Sponsor a mother's place in catering, fashion, hairdressing or cosmetology.",
  },
  {
    title: "Training Materials & Equipment",
    body: "Sewing machines, salon tools, kitchen equipment and classroom supplies.",
  },
  {
    title: "Childcare & Nursery",
    body: "Keep the nursery safe, staffed and equipped while mothers train.",
  },
  {
    title: "Emotional Wellbeing",
    body: "Counselling and health support through our partner professionals.",
  },
  {
    title: "General Programme Support",
    body: "Where the need is greatest — flexible gifts that keep PMCTC running.",
  },
];

export default function DonatePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-forest-deep">
        <div className="absolute inset-0 bg-gradient-to-br from-forest-deep via-forest to-forest-deep" />
        <Container className="relative pb-20 pt-40 text-center lg:pb-28 lg:pt-48">
          <Eyebrow tone="light">Give Today</Eyebrow>
          <h1 className="mt-5 font-serif text-5xl font-medium leading-[1.05] text-ivory sm:text-6xl">
            Your Support Can Open a New Door.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ivory/80">
            Help us strengthen vocational training, support mothers during
            their learning journey, improve access to childcare, and create
            opportunities for families to build more secure futures.
          </p>
        </Container>
      </section>

      <section className="bg-ivory">
        <Container className="py-24">
          <SectionHeading
            align="center"
            eyebrow="Where Your Gift Goes"
            title="Choose What Moves You."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {options.map((o, i) => (
              <Reveal key={o.title} delay={(i % 3) * 80}>
                <article className="h-full rounded-2xl border border-forest/10 bg-white p-8">
                  <h3 className="font-serif text-2xl font-medium text-forest">{o.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-charcoal/70">{o.body}</p>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="mt-20">
            <SectionHeading
              align="center"
              eyebrow="How to Give"
              title="Mobile Money & Bank Transfer."
              intro="Send your gift directly to PMCTC using either option below, then let us know so we can confirm it and issue an official receipt."
            />

            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              <Reveal>
                <article className="h-full rounded-2xl border border-gold/40 bg-goldsoft/20 p-8">
                  <Eyebrow>Mobile Money</Eyebrow>
                  <h3 className="mt-4 font-serif text-2xl font-medium text-forest">
                    MTN Mobile Money
                  </h3>
                  <dl className="mt-6 space-y-4 text-sm">
                    <div>
                      <dt className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-charcoal/50">
                        Number
                      </dt>
                      <dd className="mt-1 text-lg text-forest">
                        <a href="tel:0596314019" className="hover:text-terracotta-dark">
                          059 631 4019
                        </a>
                      </dd>
                    </div>
                    <div>
                      <dt className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-charcoal/50">
                        Account Name
                      </dt>
                      <dd className="mt-1 font-semibold uppercase tracking-wide text-charcoal/80">
                        Passion for Mother and Child
                      </dd>
                    </div>
                  </dl>
                </article>
              </Reveal>

              <Reveal delay={80}>
                <article className="h-full rounded-2xl border border-forest/10 bg-white p-8">
                  <Eyebrow>Bank Transfer</Eyebrow>
                  <h3 className="mt-4 font-serif text-2xl font-medium text-forest">
                    First Atlantic Bank
                  </h3>
                  <dl className="mt-6 space-y-4 text-sm">
                    <div>
                      <dt className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-charcoal/50">
                        Account Number
                      </dt>
                      <dd className="mt-1 text-lg tracking-wide text-forest">
                        0142011101018
                      </dd>
                    </div>
                    <div>
                      <dt className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-charcoal/50">
                        Account Name
                      </dt>
                      <dd className="mt-1 font-semibold uppercase tracking-wide text-charcoal/80">
                        Passion for Mother and Child
                      </dd>
                    </div>
                    <div>
                      <dt className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-charcoal/50">
                        Branch
                      </dt>
                      <dd className="mt-1 text-charcoal/80">Spintex Branch</dd>
                    </div>
                  </dl>
                </article>
              </Reveal>
            </div>

            <Reveal delay={140}>
              <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-forest/10 bg-white p-8 text-center">
                <p className="leading-relaxed text-charcoal/70">
                  After giving, email us the amount and the reference so our team
                  can confirm your gift and send an official receipt.
                </p>
                <div className="mt-7 flex flex-wrap justify-center gap-4">
                  <ButtonLink
                    href="mailto:sika.addo@yahoo.com?subject=Donation%20to%20PMCTC"
                    variant="primary"
                  >
                    Email About Giving
                  </ButtonLink>
                  <ButtonLink href="tel:0277710881" variant="outline">
                    Call 027 771 0881
                  </ButtonLink>
                </div>
                <p className="mt-6 text-xs text-charcoal/50">
                  No payment is taken on this page. These details are for direct
                  transfers arranged with PMCTC.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <FooterCTA />
    </>
  );
}
