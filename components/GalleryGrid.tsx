"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { Reveal } from "@/components/ui";

type Photo = { src: string; alt: string; span?: boolean };

export default function GalleryGrid({ photos }: { photos: Photo[] }) {
  const [index, setIndex] = useState<number | null>(null);

  const close = useCallback(() => setIndex(null), []);
  const prev = useCallback(
    () => setIndex((i) => (i === null ? null : (i - 1 + photos.length) % photos.length)),
    [photos.length],
  );
  const next = useCallback(
    () => setIndex((i) => (i === null ? null : (i + 1) % photos.length)),
    [photos.length],
  );

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [index, close, prev, next]);

  return (
    <>
      <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
        {photos.map((p, i) => (
          <Reveal key={p.src} delay={(i % 3) * 60} className="mb-5 break-inside-avoid">
            <button
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Open photo: ${p.alt}`}
              className={`group relative block w-full cursor-zoom-in overflow-hidden rounded-2xl bg-forest/5 text-left ${
                p.span ? "aspect-[4/3]" : "aspect-[4/5]"
              }`}
            >
              <Image
                src={p.src}
                alt={p.alt}
                fill
                sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
              <figcaption className="absolute inset-x-0 bottom-0 translate-y-3 bg-gradient-to-t from-forest-deep/85 to-transparent p-5 text-[0.8rem] text-ivory opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                {p.alt}
              </figcaption>
            </button>
          </Reveal>
        ))}
      </div>

      {index !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={photos[index].alt}
          className="fixed inset-0 z-[90] flex items-center justify-center bg-forest-deep/95 backdrop-blur-sm"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close photo viewer"
            className="absolute right-5 top-5 flex h-11 items-center gap-2 rounded-full border border-ivory/25 px-4 text-sm text-ivory/90 transition-colors hover:border-ivory/60 hover:text-ivory"
          >
            Close
            <span aria-hidden="true" className="text-base leading-none">✕</span>
          </button>

          {photos.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  prev();
                }}
                aria-label="Previous photo"
                className="absolute left-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-ivory/25 text-ivory/90 transition-colors hover:border-ivory/60 hover:text-ivory sm:left-6"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path d="M12.5 4L6.5 10l6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  next();
                }}
                aria-label="Next photo"
                className="absolute right-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-ivory/25 text-ivory/90 transition-colors hover:border-ivory/60 hover:text-ivory sm:right-6"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path d="M7.5 4l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </>
          )}

          <figure
            className="relative mx-14 w-full max-w-4xl sm:mx-20"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-[70vh] w-full">
              <Image
                src={photos[index].src}
                alt={photos[index].alt}
                fill
                sizes="(min-width: 1024px) 60vw, 90vw"
                className="object-contain"
                priority
              />
            </div>
            <figcaption className="mt-4 text-center text-sm text-ivory/85">
              {photos[index].alt} <span className="text-ivory/50">({index + 1}/{photos.length})</span>
            </figcaption>
          </figure>
        </div>
      )}
    </>
  );
}
