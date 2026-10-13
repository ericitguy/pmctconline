import { Container, ButtonLink } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="bg-ivory">
      <Container className="flex min-h-[80vh] flex-col items-center justify-center py-32 text-center">
        <p className="font-serif text-7xl text-gold-dark sm:text-8xl">404</p>
        <h1 className="mt-6 max-w-xl font-serif text-4xl font-medium leading-tight text-forest sm:text-5xl">
          This Page Has Taken a Different Path.
        </h1>
        <p className="mt-5 max-w-md leading-relaxed text-charcoal/70">
          The page you're looking for doesn't exist — but every mother's
          journey at PMCTC continues. Let us guide you back.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <ButtonLink href="/">Back to Home</ButtonLink>
          <ButtonLink href="/programmes" variant="outline">
            Explore Programmes
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
