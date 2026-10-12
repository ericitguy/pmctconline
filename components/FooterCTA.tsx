import Image from "next/image";
import { ButtonLink, Container, Eyebrow } from "./ui";

export default function FooterCTA({
  image = "/photos/pmctc-01.jpg",
  alt = "A PMCTC mother holding her smiling child",
}: {
  image?: string;
  alt?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-forest-deep">
      <div className="absolute inset-0">
        <Image
          src={image}
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-deep/95 via-forest-deep/80 to-forest-deep/40" />
      </div>
      <Container className="relative py-20 lg:py-28">
        <div className="max-w-2xl">
          <Eyebrow tone="light">Join the Journey</Eyebrow>
          <h2 className="mt-4 font-serif text-4xl font-medium leading-[1.05] text-ivory sm:text-6xl">
            Every Mother Deserves the Chance to Thrive.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ivory/80">
            Together, we can help mothers build their skills, strengthen their
            confidence, and create brighter possibilities for their children.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <ButtonLink href="/donate" variant="gold">
              Donate to PMCTC
            </ButtonLink>
            <ButtonLink href="/get-involved" variant="light">
              Get Involved
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
