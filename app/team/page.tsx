import Image from "next/image";
import type { Metadata } from "next";
import { Container, Eyebrow, Reveal, SectionHeading } from "@/components/ui";
import FooterCTA from "@/components/FooterCTA";

export const metadata: Metadata = {
  title: "Our Team & Advisory Board",
  description:
    "Meet the leadership, staff and advisory board of Passion for Mother and Child Training Centre — founded and led by Mrs. Alberta Eku-Sika Addo.",
};

const board = [
  {
    name: "Mrs. Alberta Eku-Sika Addo",
    role: "Founder, President & Director",
    bio: "Founder and president of Passion for Mother and Child, and CEO of Aldans Catering School and Services. She is a counselor by calling, a graduate of Glory Leadership Institute, and holds a Diploma in Catering and a certificate in NGO management from the Ghana Institute of Management and Public Administration (GIMPA). She is married with three children and two adopted daughters, and has a great passion for single mothers and children.",
  },
  {
    name: "Mr. Daniel W. Addo",
    role: "Board Chairman",
    bio: "A banker by profession and businessman as well. A very compassionate and kind man who will stop at nothing to be of help to women and children.",
  },
  {
    name: "Mrs. Barbara B. Spins",
    role: "Adviser — Social Care",
    bio: "A social care practitioner with over 15 years' practice in the UK. In Ghana, she is a regular resource person on family matters on Starr FM. She also works with the street kids' empowerment foundation (SCEF) as a volunteer and consultant, supporting parents and guardians of children rescued from the street. She has a passion for the youth and single mothers and believes that they can rise above what society thinks.",
  },
  {
    name: "Dr. Kojo Cobba Essel",
    role: "Adviser — Health",
    bio: "A medical doctor who holds an MBA and is ISSA certified in exercise therapy and nutrition. He is married with two children and takes care of the medical needs of our ladies.",
  },
  {
    name: "Miss Linda Asante",
    role: "Administrator & Programmes Director",
    bio: "Personal assistant to the director and administrator for PMCTC. Once a single mother, she understands the challenges the ladies face and encourages them to work hard to rise against the odds.",
  },
];

const staff = [
  { name: "Mrs. Grace Wilson", role: "Head of Catering Department" },
  { name: "Miss Gloria Ayulum", role: "Catering Instructor" },
  { name: "Miss Francisca Oppong", role: "Head of Fashion Department" },
  { name: "Mrs. Beatrice Ocansey", role: "Head of Hairdressing Department" },
  { name: "Miss Anna Tondo", role: "Head of Cosmetology Department" },
  { name: "Miss Victoria Effina Williams", role: "Receptionist" },
];

export default function TeamPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-forest">
        <div className="absolute inset-0 opacity-25">
          <Image src="/photos/pmctc-22.jpg" alt="" fill priority sizes="100vw" className="object-cover" />
        </div>
        <Container className="relative pb-20 pt-40 lg:pb-28 lg:pt-48">
          <Eyebrow tone="light">Our Team</Eyebrow>
          <h1 className="mt-5 max-w-3xl font-serif text-5xl font-medium leading-[1.05] text-ivory sm:text-6xl">
            The People Behind PMCTC.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ivory/80">
            Counsellors, bankers, doctors, administrators and trainers —
            professionals united by one passion: seeing single mothers and
            their children thrive.
          </p>
        </Container>
      </section>

      <section className="bg-ivory">
        <Container className="py-24">
          <SectionHeading eyebrow="Leadership & Advisory Board" title="Guided by Experience." />
          <div className="mt-14 space-y-10">
            {board.map((person, i) => (
              <Reveal key={person.name} delay={i * 60}>
                <article className="grid gap-6 border-b border-forest/10 pb-10 sm:grid-cols-[240px_1fr] lg:grid-cols-[280px_1fr]">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-forest/5">
                    <div className="flex h-full flex-col items-center justify-center gap-3 p-6 text-center">
                      <span
                        aria-hidden="true"
                        className="flex h-16 w-16 items-center justify-center rounded-full bg-forest font-serif text-2xl text-goldsoft"
                      >
                        {person.name.split(" ").slice(-2)[0][0]}
                        {person.name.split(" ").slice(-1)[0][0]}
                      </span>
                      <p className="text-[0.65rem] uppercase tracking-[0.2em] text-charcoal/40">
                        Official portrait to come
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-gold">
                      {person.role}
                    </p>
                    <h3 className="mt-2 font-serif text-3xl font-medium text-forest">
                      {person.name}
                    </h3>
                    <p className="mt-4 max-w-2xl leading-relaxed text-charcoal/70">
                      {person.bio}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white">
        <Container className="py-24">
          <SectionHeading eyebrow="Our Staff" title="The Hands That Build." />
          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {staff.map((s, i) => (
              <Reveal key={s.name} delay={(i % 3) * 80}>
                <li className="flex h-full flex-col justify-between rounded-2xl border border-forest/10 p-7">
                  <div>
                    <h3 className="font-serif text-xl font-medium text-forest">{s.name}</h3>
                    <p className="mt-2 text-sm text-charcoal/60">{s.role}</p>
                  </div>
                  <span aria-hidden="true" className="mt-6 h-px w-12 bg-gold" />
                </li>
              </Reveal>
            ))}
          </ul>
          <p className="mt-10 text-sm italic text-charcoal/50">
            Roles are recorded from PMCTC's organisational overview; current
            titles are verified before publication.
          </p>
        </Container>
      </section>

      <FooterCTA />
    </>
  );
}
