import Image from "next/image";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Image
      src="/brand/pmctc-logo.png"
      alt=""
      width={677}
      height={677}
      className={`shrink-0 ${className}`}
      priority={false}
    />
  );
}
