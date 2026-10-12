import Link from "next/link";
import type { ReactNode } from "react";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto max-w-content px-5 sm:px-8 ${className}`}>{children}</div>;
}

export function Eyebrow({ children, tone = "gold" }: { children: ReactNode; tone?: "gold" | "forest" | "light" }) {
  const tones = {
    gold: "text-gold",
    forest: "text-forest",
    light: "text-goldsoft",
  };
  return (
    <p
      className={`text-[0.7rem] font-semibold uppercase tracking-[0.28em] ${tones[tone]}`}
    >
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  tone = "dark",
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow && <Eyebrow tone={tone === "light" ? "light" : "gold"}>{eyebrow}</Eyebrow>}
      <h2
        className={`mt-4 font-serif text-4xl font-medium leading-[1.08] sm:text-5xl ${
          tone === "light" ? "text-ivory" : "text-forest"
        }`}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={`mt-5 text-lg leading-relaxed ${
            tone === "light" ? "text-ivory/80" : "text-charcoal/70"
          }`}
        >
          {intro}
        </p>
      )}
    </div>
  );
}

const buttonBase =
  "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.12em] transition-all duration-300";

const variants = {
  primary:
    "bg-forest text-ivory shadow-card hover:-translate-y-0.5 hover:bg-forest-deep hover:shadow-lift",
  gold: "bg-gold text-forest hover:-translate-y-0.5 hover:bg-[#d3b57f]",
  outline:
    "border border-forest/30 text-forest hover:-translate-y-0.5 hover:border-forest hover:bg-forest hover:text-ivory",
  light:
    "border border-ivory/60 bg-ivory/10 text-ivory hover:-translate-y-0.5 hover:bg-ivory hover:text-forest",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: keyof typeof variants;
  className?: string;
}) {
  const external = href.startsWith("#") || href.startsWith("http") || href.startsWith("tel") || href.startsWith("mailto");
  const cls = `${buttonBase} ${variants[variant]} ${className}`;
  if (external) {
    return (
      <a href={href} className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <div
      className={`animate-fadeup ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
