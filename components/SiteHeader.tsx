"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";

const EXPLORE = [
  { href: "/stories", label: "Stories" },
  { href: "/gallery", label: "Gallery" },
  { href: "/team", label: "Our Team" },
];

const NAV = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/programmes", label: "Our Programmes" },
  { href: "/impact", label: "Our Impact" },
  { href: "/get-involved", label: "Get Involved" },
  { href: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [exploreOpen, setExploreOpen] = useState(false);
  const exploreRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const exploreActive = EXPLORE.some((item) => pathname.startsWith(item.href));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setExploreOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!exploreOpen) return;
    const onClick = (e: MouseEvent) => {
      if (exploreRef.current && !exploreRef.current.contains(e.target as Node)) {
        setExploreOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setExploreOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [exploreOpen]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
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
          <Logo className="h-10 w-10 transition-transform duration-500 group-hover:scale-105" />
          <span className="flex flex-col leading-none">
            <span className="font-serif text-[1.35rem] font-semibold tracking-[0.08em]">
              PMCTC
            </span>
            <span
              className={`mt-0.5 hidden text-[0.58rem] uppercase tracking-[0.22em] xl:block ${
                scrolled || open ? "text-charcoal/60" : "text-ivory/75"
              }`}
            >
              Passion for Mother and Child Training Centre
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-5 xl:gap-7 lg:flex" aria-label="Primary">
          {NAV.map((item) => {
            const active =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`whitespace-nowrap text-[0.72rem] font-medium uppercase tracking-[0.1em] transition-colors xl:tracking-[0.14em] xl:text-[0.8rem] ${
                  scrolled
                    ? active
                      ? "text-terracotta-dark"
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
          <div ref={exploreRef} className="relative">
            <button
              type="button"
              onClick={() => setExploreOpen(!exploreOpen)}
              aria-expanded={exploreOpen}
              aria-haspopup="true"
              className={`flex items-center gap-1 xl:gap-1.5 whitespace-nowrap text-[0.72rem] font-medium uppercase tracking-[0.1em] transition-colors xl:tracking-[0.14em] xl:text-[0.8rem] ${
                scrolled
                  ? exploreActive || exploreOpen
                    ? "text-terracotta-dark"
                    : "text-charcoal/80 hover:text-forest"
                  : exploreActive || exploreOpen
                    ? "text-goldsoft"
                    : "text-ivory/85 hover:text-white"
              }`}
            >
              Explore
              <svg
                width="9"
                height="6"
                viewBox="0 0 9 6"
                fill="none"
                aria-hidden="true"
                className={`transition-transform duration-200 ${exploreOpen ? "rotate-180" : ""}`}
              >
                <path d="M1 1l3.5 3.5L8 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <div
              className={`absolute left-1/2 top-full mt-3 w-48 -translate-x-1/2 rounded-xl border border-forest/10 bg-ivory p-2 shadow-lift transition-all duration-200 ${
                exploreOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-1 opacity-0"
              }`}
            >
              {EXPLORE.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setExploreOpen(false)}
                  className={`block rounded-lg px-4 py-2.5 text-sm transition-colors ${
                    pathname.startsWith(item.href)
                      ? "bg-goldsoft/40 text-terracotta-dark"
                      : "text-charcoal/80 hover:bg-forest/5 hover:text-forest"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <Link
            href="/donate"
            className={`whitespace-nowrap rounded-full border px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.1em] transition-all xl:px-5 xl:text-[0.8rem] xl:tracking-[0.14em] ${
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
          className={`relative z-50 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border transition-colors lg:hidden ${
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
      </header>

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
          <p className="mt-4 text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-gold-dark">
            Explore
          </p>
          <div className="-mt-1 flex flex-wrap gap-x-6 gap-y-2 pb-3">
            {EXPLORE.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`font-serif text-xl ${
                  pathname.startsWith(item.href) ? "text-terracotta-dark" : "text-charcoal/80"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
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
    </>
  );
}
