import Image from "next/image";
import Link from "next/link";
import type { Programme } from "@/lib/programmes";

export default function ProgrammeCard({
  programme,
  index,
}: {
  programme: Programme;
  index: number;
}) {
  return (
    <Link
      href={`/programmes/${programme.slug}`}
      className={`group block ${index % 2 === 1 ? "lg:mt-16" : ""}`}
    >
      <article>
        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-forest/5">
          <Image
            src={programme.image}
            alt={programme.imageAlt}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          <span className="absolute bottom-5 left-5 translate-y-2 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-ivory opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
            Explore the Programme →
          </span>
        </div>
        <div className="mt-6 flex items-start gap-4">
          <span className="font-serif text-xl text-gold">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div>
            <h3 className="font-serif text-2xl font-medium leading-snug text-forest transition-colors group-hover:text-terracotta">
              {programme.title}
            </h3>
            <p className="mt-2 text-[0.95rem] leading-relaxed text-charcoal/70">
              {programme.short}
            </p>
          </div>
        </div>
      </article>
    </Link>
  );
}
