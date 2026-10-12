import Image from "next/image";
import type { Metadata } from "next";
import { Container, Eyebrow, Reveal } from "@/components/ui";
import FooterCTA from "@/components/FooterCTA";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Scenes from PMCTC — training sessions, graduation ceremonies, the nursery and community moments with our mothers and children.",
};

const photos: { src: string; alt: string; span?: boolean }[] = [
  { src: "/photos/pmctc-01.jpg", alt: "A PMCTC mother with her child", span: true },
  { src: "/photos/pmctc-02.jpg", alt: "A quiet moment between mother and child" },
  { src: "/photos/pmctc-03.jpg", alt: "Trainees working on pastry together" },
  { src: "/photos/pmctc-04.jpg", alt: "A focused trainee at her workstation" },
  { src: "/photos/pmctc-05.jpg", alt: "Fashion trainee cutting fabric" },
  { src: "/photos/pmctc-06.jpg", alt: "Trainee studying course material" },
  { src: "/photos/pmctc-07.jpg", alt: "Instructor guiding a trainee through a task" },
  { src: "/photos/pmctc-08.jpg", alt: "Smiles during a practical class" },
  { src: "/photos/pmctc-09.jpg", alt: "Manicure table prepared for practice" },
  { src: "/photos/pmctc-10.jpg", alt: "Hairdressing training in the salon" },
  { src: "/photos/pmctc-11.jpg", alt: "The hairdressing salon interior" },
  { src: "/photos/pmctc-12.jpg", alt: "Trainees in the cosmetology room" },
  { src: "/photos/pmctc-13.jpg", alt: "The nursery room set up for learning" },
  { src: "/photos/pmctc-14.jpg", alt: "Children playing on the nursery mat" },
  { src: "/photos/pmctc-15.jpg", alt: "Trainees gathered around their instructor" },
  { src: "/photos/pmctc-16.jpg", alt: "Students and their children with PMCTC staff" },
  { src: "/photos/pmctc-17.jpg", alt: "Group of students and the Founder at PMCTC", span: true },
  { src: "/photos/pmctc-20.jpg", alt: "Mothers carrying their children at a gathering", span: true },
  { src: "/photos/pmctc-21.jpg", alt: "Leaders and staff gathered at a community outreach" },
  { src: "/photos/pmctc-22.jpg", alt: "PMCTC staff in front of the organisation banner" },
  { src: "/photos/pmctc-23.jpg", alt: "Support packages donated for the mothers" },
  { src: "/photos/pmctc-24.jpg", alt: "Staff and volunteers with donated supplies" },
  { src: "/photos/pmctc-25.jpg", alt: "An emotional moment of prayer and support" },
  { src: "/photos/pmctc-26.jpg", alt: "Children playing in the nursery" },
  { src: "/photos/pmctc-27.jpg", alt: "Students in uniform gathered in the nursery" },
  { src: "/photos/pmctc-28.jpg", alt: "A young mother watching her child" },
  { src: "/photos/pmctc-29.jpg", alt: "Mothers listening attentively" },
  { src: "/photos/pmctc-30.jpg", alt: "The pink-walled PMCTC centre from outside" },
  { src: "/photos/pmctc-31.jpg", alt: "The founding face of the centre and its sign" },
  { src: "/photos/pmctc-32.jpg", alt: "A mother and other trainees work together" },
  { src: "/photos/pmctc-33.jpg", alt: "Group of students with the Founder" },
  { src: "/photos/pmctc-34.jpg", alt: "PMCTC branded backdrop at an event" },
  { src: "/photos/pmctc-35.jpg", alt: "PMCTC trainees on a walkway" },
  { src: "/photos/pmctc-36.jpg", alt: "Staff member touring the facility" },
  { src: "/photos/pmctc-37.jpg", alt: "A community outreach at the centre" },
  { src: "/photos/pmctc-38.jpg", alt: "Group photo at a PMCTC outreach" },
  { src: "/photos/pmctc-39.jpg", alt: "PMCTC students in a class session" },
  { src: "/photos/pmctc-40.jpg", alt: "A pantomime moment at PMCTC" },
  { src: "/photos/pmctc-41.jpg", alt: "Students and their children, staff and founder" },
  { src: "/photos/pmctc-42.jpg", alt: "Graduation ceremony moment" },
  { src: "/photos/pmctc-43.jpg", alt: "Founding story artefacts on display" },
  { src: "/photos/pmctc-44.jpg", alt: "Students during a class" },
  { src: "/photos/pmctc-45.jpg", alt: "A man of faith addressing the gathering" },
  { src: "/photos/pmctc-46.jpg", alt: "Students and children at a ceremony" },
  { src: "/photos/pmctc-47.jpg", alt: "Trainees gathered at an event" },
  { src: "/photos/pmctc-48.jpg", alt: "A graduate celebrating with the centre" },
  { src: "/photos/pmctc-49.jpg", alt: "Mothers and children walking together" },
  { src: "/photos/pmctc-50.jpg", alt: "PMCTC trainees with a trainer" },
  { src: "/photos/pmctc-51.jpg", alt: "Young mothers seated during an event" },
  { src: "/photos/pmctc-52.jpg", alt: "Staff posing together at the centre" },
  { src: "/photos/pmctc-53.jpg", alt: "Group of women enjoying the class" },
  { src: "/photos/pmctc-54.jpg", alt: "Trainees attend an outdoor session" },
  { src: "/photos/pmctc-55.jpg", alt: "A mother smiling beside her child" },
  { src: "/photos/pmctc-56.jpg", alt: "Trainees listen to a speaker" },
  { src: "/photos/pmctc-57.jpg", alt: "Mothers and the founder at a celebration" },
  { src: "/photos/pmctc-58.jpg", alt: "Trainees and staff stand together" },
  { src: "/photos/pmctc-59.jpg", alt: "PMCTC trainees during an activity" },
  { src: "/photos/pmctc-60.jpg", alt: "The PMCTC team in the training room" },
  { src: "/photos/pmctc-61.jpg", alt: "Mothers listening to a word of encouragement" },
  { src: "/photos/pmctc-62.jpg", alt: "Guests at a PMCTC function" },
  { src: "/photos/pmctc-63.jpg", alt: "Smiling mothers in class" },
  { src: "/photos/pmctc-64.jpg", alt: "A specialist sharing with our trainees" },
  { src: "/photos/pmctc-65.jpg", alt: "Children at play in the nursery" },
  { src: "/photos/pmctc-66.jpg", alt: "A mother holds her child close" },
];

export default function GalleryPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-forest">
        <div className="absolute inset-0 opacity-25">
          <Image src="/photos/pmctc-17.jpg" alt="" fill priority sizes="100vw" className="object-cover" />
        </div>
        <Container className="relative pb-20 pt-40 lg:pb-28 lg:pt-48">
          <Eyebrow tone="light">Gallery</Eyebrow>
          <h1 className="mt-5 max-w-3xl font-serif text-5xl font-medium leading-[1.05] text-ivory sm:text-6xl">
            Life at the Centre.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ivory/80">
            Training, graduation, the nursery and the everyday courage of our
            mothers. All images captured with the knowledge of participants;
            consent for publication of identifiable faces is reviewed before
            use.
          </p>
        </Container>
      </section>

      <section className="bg-ivory">
        <Container className="py-20">
          <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
            {photos.map((p, i) => (
              <Reveal key={p.src} delay={(i % 3) * 60} className="mb-5 break-inside-avoid">
                <figure
                  className={`group relative overflow-hidden rounded-2xl bg-forest/5 ${
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
                </figure>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <FooterCTA />
    </>
  );
}
