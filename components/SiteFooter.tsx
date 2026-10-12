import Link from "next/link";
import Logo from "./Logo";

const columns: { title: string; links: { href: string; label: string }[] }[] = [
  {
    title: "Explore",
    links: [
      { href: "/about", label: "About PMCTC" },
      { href: "/programmes", label: "Our Programmes" },
      { href: "/impact", label: "Our Impact & Stories" },
      { href: "/gallery", label: "Gallery" },
      { href: "/team", label: "Our Team" },
    ],
  },
  {
    title: "Programmes",
    links: [
      { href: "/programmes/catering", label: "Catering & Culinary Arts" },
      { href: "/programmes/fashion", label: "Fashion & Dressmaking" },
      { href: "/programmes/hairdressing", label: "Hairdressing & Beauty" },
      { href: "/programmes/cosmetology", label: "Cosmetology & Makeup" },
      { href: "/programmes/emotional-support", label: "Emotional Support" },
      { href: "/programmes/childcare", label: "Childcare & Nursery" },
    ],
  },
  {
    title: "Get Involved",
    links: [
      { href: "/donate", label: "Donate" },
      { href: "/get-involved", label: "Volunteer" },
      { href: "/get-involved#partnership", label: "Partner With Us" },
      { href: "/contact", label: "Contact" },
    ],
  },
];

export default function SiteFooter() {
  return (
    <footer className="bg-forest text-ivory">
      <div className="mx-auto max-w-content px-5 py-16 sm:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="flex items-center gap-3" aria-label="PMCTC home">
              <Logo className="h-11 w-11 text-goldsoft" />
              <span className="flex flex-col leading-none">
                <span className="font-serif text-2xl font-semibold tracking-[0.08em]">PMCTC</span>
                <span className="mt-1 text-[0.6rem] uppercase tracking-[0.2em] text-ivory/60">
                  Passion for Mother and Child Training Centre
                </span>
              </span>
            </Link>
            <p className="mt-6 max-w-sm font-serif text-xl leading-relaxed text-ivory/85">
              Equipping single mothers with skills, courage and community — so their
              children inherit a brighter future.
            </p>
            <p className="mt-6 text-[0.7rem] uppercase tracking-[0.22em] text-goldsoft/80">
              Together we bring a transformation
            </p>
          </div>

          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h2 className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-goldsoft">
                {col.title}
              </h2>
              <ul className="mt-5 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-ivory/75 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-14 grid gap-10 border-t border-ivory/15 pt-10 md:grid-cols-2">
          <div>
            <h2 className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-goldsoft">
              Contact Us
            </h2>
            <ul className="mt-5 space-y-2 text-sm text-ivory/80">
              <li>
                <a href="tel:0277710881" className="transition-colors hover:text-white">
                  027 771 0881
                </a>
                <span className="mx-2 text-ivory/40">·</span>
                <a href="tel:0264710881" className="transition-colors hover:text-white">
                  026 471 0881
                </a>
                <span className="mx-2 text-ivory/40">·</span>
                <a href="tel:0244847850" className="transition-colors hover:text-white">
                  024 484 7850
                </a>
              </li>
              <li>
                <a href="mailto:sika.addo@yahoo.com" className="transition-colors hover:text-white">
                  sika.addo@yahoo.com
                </a>
                <span className="mx-2 text-ivory/40">·</span>
                <a href="mailto:asabea8394@gmail.com" className="transition-colors hover:text-white">
                  asabea8394@gmail.com
                </a>
              </li>
              <li>Klagon, behind Breaking Yoke Ministry, Ghana</li>
            </ul>
          </div>
          <div className="md:text-right">
            <h2 className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-goldsoft">
              Legal
            </h2>
            <ul className="mt-5 space-y-2 text-sm">
              <li>
                <a href="/privacy" className="text-ivory/75 transition-colors hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="text-ivory/75 transition-colors hover:text-white">
                  Terms of Use
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-ivory/15 pt-6 text-xs text-ivory/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Passion for Mother and Child Training Centre (PMCTC).
            All rights reserved.
          </p>
          <p>Website placeholder photography pending approval — see our content notice.</p>
        </div>
      </div>
    </footer>
  );
}
