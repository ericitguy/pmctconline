import type { Metadata } from "next";
import { Container, Eyebrow, Reveal, SectionHeading, ButtonLink } from "@/components/ui";
import FooterCTA from "@/components/FooterCTA";

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Your support can open a new door. Give towards vocational training, materials and equipment, childcare, counselling, or general programme support at PMCTC.",
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

          <Reveal delay={100}>
            <div className="mx-auto mt-16 max-w-3xl rounded-2xl border border-gold/40 bg-goldsoft/20 p-8 text-center sm:p-10">
              <h3 className="font-serif text-3xl font-medium text-forest">
                Online Giving — Coming Soon
              </h3>
              <p className="mt-4 leading-relaxed text-charcoal/70">
                We are completing the setup of a secure payment provider for
                mobile money and card donations. Until then, please contact us
                directly and our team will arrange your gift and an official
                receipt.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <ButtonLink href="tel:0277710881" variant="primary">
                  Call 027 771 0881
                </ButtonLink>
                <ButtonLink href="mailto:sika.addo@yahoo.com?subject=Donation%20to%20PMCTC" variant="outline">
                  Email About Giving
                </ButtonLink>
              </div>
              <p className="mt-6 text-xs text-charcoal/50">
                No payment is taken on this page. Online donation processing
                activates only once a verified payment provider is configured.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      <FooterCTA />
    </>
  );
}
