export default function Logo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      {/* Laurel wreath */}
      <path
        d="M14 50c-5-4-8-10-8-18C6 18 18 6 32 6s26 12 26 26c0 8-3 14-8 18"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        opacity="0.55"
      />
      <path
        d="M11 44c-2-2-2-6-1-9M9 38c-1.8 1-3 4-2.4 7M53 44c2-2 2-6 1-9M55 38c1.8 1 3 4 2.4 7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.55"
      />
      {/* Mother cradling child */}
      <path
        d="M26 18c0-3.3 2.7-6 6-6s6 2.7 6 6-2.7 6-6 6-6-2.7-6-6Z"
        fill="currentColor"
      />
      <path
        d="M22 44c0-9 4-15 10.5-15S43 35 43 44v1H22v-1Z"
        fill="currentColor"
      />
      {/* Child */}
      <path
        d="M37 28c2.8-2.2 6-2.4 8-1 1.8 1.3 2 3.8.6 5.6-1.6 2.1-4.8 2.8-7.4 1.8"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      <circle cx="46" cy="26" r="3.4" fill="currentColor" />
    </svg>
  );
}
