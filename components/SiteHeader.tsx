"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/programmes", label: "Our Programmes" },
  { href: "/impact", label: "Our Impact" },
  { href: "/stories", label: "Stories" },
  { href: "/get-involved", label: "Get Involved" },
  { href: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "bg-ivory/95 shadow-[0_1px_0_rgba(24,61,50,0.08)] backdrop-blur"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-content items-center justify-between px-5 sm:h-[4.5rem] sm:px-8">
        <Link
          href="/"
          className={`group flex items-center gap-3 transition-colors ${
            scrolled || open ? "text-forest" : "text-ivory"
          }`}
          aria-label="PMCTC — Passion for Mother and Child Training Centre, home"
        >
          <Logo className="h-9 w-9 shrink-0 transition-transform duration-500 group-hover:scale-105" />
          <span className="flex flex-col leading-none">
            <span className="font-serif text-[1.35rem] font-semibold tracking-[0.08em]">
              PMCTC
            </span>
            <span
              className={`mt-0.5 hidden text-[0.58rem] uppercase tracking-[0.22em] sm:block ${
                scrolled || open ? "text-charcoal/60" : "text-ivory/75"
              }`}
            >
              Passion for Mother and Child Training Centre
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {NAV.map((item) => {
            const active =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-[0.8rem] font-medium uppercase tracking-[0.14em] transition-colors ${
                  scrolled
                    ? active
                      ? "text-terracotta"
                      : "text-charcoal/80 hover:text-forest"
                    : active
                      ? "text-goldsoft"
                      : "text-ivory/85 hover:text-white"
                }`}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/donate"
            className={`rounded-full border px-5 py-2 text-[0.8rem] font-semibold uppercase tracking-[0.14em] transition-all ${
              scrolled
                ? "border-forest bg-forest text-ivory hover:bg-forest-deep"
                : "border-ivory/70 bg-ivory/10 text-ivory hover:bg-ivory hover:text-forest"
            }`}
          >
            Donate
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className={`relative z-50 flex h-11 w-11 items-center justify-center rounded-full border transition-colors lg:hidden ${
            scrolled || open ? "border-forest/20 text-forest" : "border-ivory/40 text-ivory"
          }`}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <svg width="20" height="14" viewBox="0 0 20 14" fill="none" aria-hidden="true">
            {open ? (
              <path d="M2 2l16 10M18 2L2 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            ) : (
              <path d="M0 1h20M0 7h20M0 13h20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      <div
        id="mobile-nav"
        className={`fixed inset-0 top-16 z-40 bg-ivory transition-all duration-300 lg:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <nav className="flex h-full flex-col gap-1 overflow-y-auto px-8 py-8" aria-label="Mobile">
          {NAV.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              className="border-b border-forest/10 py-4 font-serif text-2xl text-forest"
              style={{ transitionDelay: `${i * 30}ms` }}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/donate"
            className="mt-6 rounded-full bg-forest py-4 text-center text-sm font-semibold uppercase tracking-[0.16em] text-ivory"
          >
            Donate
          </Link>
          <p className="mt-8 text-sm text-charcoal/60">
            Klagon, behind Breaking Yoke Ministry, Ghana
          </p>
        </nav>
      </div>
    </header>
  );
}
