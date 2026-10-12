export type Programme = {
  slug: string;
  title: string;
  short: string;
  lead: string;
  image: string;
  imageAlt: string;
  skills: string[];
  headLed?: string;
  detail: string[];
};

export const programmes: Programme[] = [
  {
    slug: "catering",
    title: "Catering and Culinary Arts",
    short:
      "Cooking, baking, cake decoration, pastry making, juice preparation and continental dishes.",
    lead:
      "Led by Mrs Grace Wilson, assisted by Miss Gloria Ayulum, the catering department teaches the complete foundations of a professional kitchen — from baking and pastry to continental dishes and client-ready service.",
    image: "/photos/pmctc-03.jpg",
    imageAlt: "PMCTC trainees practising pastry preparation",
    skills: [
      "Cooking and continental dishes",
      "Baking and pastry making",
      "Cake decoration",
      "Juice preparation",
      "Fundamentals of catering service",
    ],
    headLed: "Mrs Grace Wilson, assisted by Miss Gloria Ayulum",
    detail: [
      "Trainees learn through supervised, hands-on kitchen practice with equipment used in real catering work.",
      "The programme builds both craft and confidence — food safety, presentation, costing and the discipline of professional service.",
    ],
  },
  {
    slug: "fashion",
    title: "Fashion and Dressmaking",
    short:
      "Garment cutting, design, sewing, and accessories made with African fabrics.",
    lead:
      "Led by Miss Francisca Oppong, the fashion department trains women to cut, design and sew clothing — and to create bags, wallets, purses, headbands and earrings using vibrant African fabrics.",
    image: "/photos/pmctc-07.jpg",
    imageAlt: "A fashion trainee cutting fabric at PMCTC",
    skills: [
      "Garment cutting and design",
      "Sewing and finishing",
      "Bags, wallets and purses",
      "Headbands and earrings",
      "Working with African fabrics",
    ],
    headLed: "Miss Francisca Oppong",
    detail: [
      "From measurement to final stitch, participants develop techniques that translate directly to dressmaking work and small-scale production.",
      "Fabric accessory-making opens additional income pathways using readily available materials.",
    ],
  },
  {
    slug: "hairdressing",
    title: "Hairdressing and Beauty",
    short:
      "Hair washing and setting, braiding, wig installation, manicures and pedicures.",
    lead:
      "Led by Mrs Beatrice Ocansey, the hairdressing department covers everything from hair washing, setting and touch-ups to braiding, wig and weave installation, styling, manicures and pedicures.",
    image: "/photos/pmctc-11.jpg",
    imageAlt: "The PMCTC hairdressing training salon",
    skills: [
      "Hair washing, setting and touch-ups",
      "Braiding and styling",
      "Wig and weave installation",
      "Manicures and pedicures",
      "Salon hygiene and client care",
    ],
    headLed: "Mrs Beatrice Ocansey",
    detail: [
      "Training takes place in a fully equipped salon environment mirror-to-mirror, so graduates arrive ready for professional salon floors.",
      "Nail technology andwig craftsmanship give participants complementary service skills in high client demand.",
    ],
  },
  {
    slug: "cosmetology",
    title: "Cosmetology and Makeup",
    short:
      "Working with all skin types and tones, makeup artistry and occasion styling.",
    lead:
      "Led by Miss Anna Tondo, the cosmetology department trains women to recognise and work confidently with every skin type and tone — and to apply makeup for all events, from everyday wear to weddings.",
    image: "/photos/pmctc-12.jpg",
    imageAlt: "Cosmetology training at PMCTC",
    skills: [
      "Skin analysis across all tones",
      "Makeup artistry",
      "Occasion and bridal styling",
      "Product knowledge",
      "Client consultation",
    ],
    headLed: "Miss Anna Tondo",
    detail: [
      "Cosmetology graduates carry beauty-industry skills that can serve from home studios to professional salons.",
      "The curriculum emphasises inclusive practice — every client's skin type and tone.",
    ],
  },
  {
    slug: "emotional-support",
    title: "Emotional Support and Counselling",
    short:
      "Christian counselling and health partnerships for healing and confidence.",
    lead:
      "Many of the single mothers PMCTC walks with carry deep emotional wounds. Working with health personnel and Christian counsellors, we help women address personal challenges, rebuild confidence and look to the future with hope.",
    image: "/photos/pmctc-25.jpg",
    imageAlt: "A moment of support between women at a PMCTC gathering",
    skills: [
      "One-to-one counselling",
      "Biblical and moral guidance",
      "Health referrals through partners",
      "Community and peer support",
      "Confidence rebuilding",
    ],
    detail: [
      "Emotional support is the quiet foundation beneath every other programme — a woman cannot train while carrying unaddressed trauma.",
      "Counselling is provided with utmost confidentiality and dignity.",
    ],
  },
  {
    slug: "childcare",
    title: "Childcare and Early Care Support",
    short:
      "A safe nursery where children learn and grow while their mothers train.",
    lead:
      "PMCTC runs a nursery and creche where trained staff care for participants' children while mothers attend classes — removing the single greatest barrier between a mother and her training.",
    image: "/photos/pmctc-35.jpg",
    imageAlt: "Children learning in the PMCTC nursery",
    skills: [
      "Trained childcare staff",
      "Early childhood learning",
      "Safe, equipped rooms",
      "Structured play and rest",
      "Parent partnership",
    ],
    detail: [
      "The nursery was purpose-developed in 2022 and continues to serve families of trainees.",
      "Children learn, play and rest under supervision while their mothers build their futures nearby.",
    ],
  },
];

export function getProgramme(slug: string) {
  return programmes.find((p) => p.slug === slug);
}
