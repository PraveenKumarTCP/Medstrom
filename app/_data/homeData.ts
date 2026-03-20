/* ─── Home Page Data ──────────────────────────────────────────── */

/** Top utility bar links (dark navy bar) */
export const topNavLinks = [
  { label: "Medstrom Select", href: "#" },
  { label: "The Medstrom Academy", href: "#" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Videos", href: "#" },
  { label: "Careers", href: "#" },
  { label: "News", href: "#" },
  { label: "Events", href: "#" },
  { label: "i-Tracker Login", href: "#" },
];

/** Main navigation links (white bar) */
export const mainNavLinks = [
  { label: "Why Medstrom?", href: "#", highlight: true },
  { label: "Clinical Solutions", href: "#" },
  { label: "Products", href: "/products" },
  { label: "Services", href: "#services" },
  { label: "Contact Us", href: "#contact" },
];

/** @deprecated use topNavLinks / mainNavLinks instead */
export const navLinks = mainNavLinks;

export const heroSlides = [
  {
    id: 1,
    heading: "Welcome to Medstrom",
    subheading:
      "Every patient deserves the highest level of care. We deliver clinically led hospital bed solutions that transform patient outcomes.",
    cta: { label: "Discover Our Solutions", href: "#solutions" },
    /** Replace src with the real image path when available */
    bgImage: null,
    bgGradient: "linear-gradient(135deg, #1C2D4A 0%, #1B61A6 60%, #00AEEF 100%)",
  },
  {
    id: 2,
    heading: "Advanced Patient Care Technology",
    subheading:
      "Our specialist teams work alongside clinicians to configure, maintain and deliver the safest patient environments.",
    cta: { label: "View Clinical Solutions", href: "#key-drivers" },
    bgImage: null,
    bgGradient: "linear-gradient(135deg, #134880 0%, #1B61A6 55%, #00AEEF 100%)",
  },
  {
    id: 3,
    heading: "Trusted by Leading Hospitals",
    subheading:
      "From acute care to critical environments, Medstrom's portfolio supports every step of the patient journey.",
    cta: { label: "Our Services", href: "#services" },
    bgImage: null,
    bgGradient: "linear-gradient(135deg, #0D1E33 0%, #1B61A6 50%, #0090D0 100%)",
  },
];

export const aboutData = {
  badge: "About Medstrom",
  heading: ["Precision-Driven Hospital", " Bed ", "Solutions for Better Outcomes"],
  /** Index 1 is the highlighted word */
  highlightIndex: 1,
  paragraphs: [
    "Medstrom is a leading provider of specialist hospital bed and patient care solutions, working in partnership with NHS trusts, private hospitals and care providers across the UK.",
    "Our integrated approach brings together cutting-edge equipment, expert clinical knowledge and dedicated managed services to deliver measurably better outcomes for patients and care teams alike.",
  ],
  bullets: [
    "Clinically led, evidence-based solutions tailored to your environment",
    "Full lifecycle management from procurement to maintenance",
    "Specialist teams embedded with your clinical staff",
    "24/7 support and rapid response nationwide",
  ],
  cta: { label: "Read More", href: "#" },
  stat: { value: "25+", label: "Years of clinical excellence" },
  /** Replace with real image paths */
  images: {
    primary: null,
    secondary: null,
  },
};

export const keyDriversData = {
  badge: "Key Drivers",
  heading: ["Clinically Led Solutions for", " Better ", "Outcomes"],
  highlightIndex: 1,
  cta: { label: "View All Hospital Solutions", href: "#" },
  cards: [
    {
      id: 1,
      title: "Acute Care",
      description:
        "Specialist beds and surfaces designed to deliver superior acute care outcomes across general wards and high-dependency settings.",
      href: "#",
      image: null,
      gradient: "linear-gradient(180deg, rgba(27,97,166,0.15) 0%, rgba(27,97,166,0.75) 100%)",
    },
    {
      id: 2,
      title: "ICU & Critical Care",
      description:
        "Purpose-built intensive care solutions that support life-critical environments with precision engineering and clinical functionality.",
      href: "#",
      image: null,
      gradient: "linear-gradient(180deg, rgba(0,174,239,0.1) 0%, rgba(28,45,74,0.85) 100%)",
    },
    {
      id: 3,
      title: "Specialised Care",
      description:
        "Tailored solutions for complex patient needs including bariatrics, pressure injury prevention and rehabilitation environments.",
      href: "#",
      image: null,
      gradient: "linear-gradient(180deg, rgba(19,72,128,0.1) 0%, rgba(19,72,128,0.8) 100%)",
    },
  ],
};

export const servicesData = {
  badge: "Our Services",
  heading: ["Advanced Clinical Solutions for", " Safer ", "Patient Care"],
  highlightIndex: 1,
  cards: [
    {
      id: 1,
      icon: "bed",
      title: "Total Bed Management",
      description:
        "A fully managed bed fleet service that ensures the right bed is in the right place at the right time — reducing pressure on clinical staff and improving patient flow across the entire hospital.",
      href: "#",
    },
    {
      id: 2,
      icon: "maintenance",
      title: "Planned Preventative Maintenance",
      description:
        "Proactive, scheduled maintenance programmes that keep your entire equipment fleet compliant, safe and operational — minimising unplanned downtime and protecting patient safety.",
      href: "#",
    },
    {
      id: 3,
      icon: "decontamination",
      title: "Decontamination Services",
      description:
        "Rigorous, validated decontamination processes that remove infection risk from patient beds and equipment — safeguarding your patients, staff and clinical reputation.",
      href: "#",
    },
  ],
};

export const footerData = {
  description:
    "Medstrom delivers clinically led hospital bed and patient care solutions that improve outcomes, support clinical teams and drive operational excellence.",
  columns: [
    {
      heading: "Quick Links",
      links: [
        { label: "About Medstrom", href: "#" },
        { label: "Hey Patient", href: "#" },
        { label: "The Medstrom Solutions", href: "#" },
        { label: "Testimonials", href: "#" },
        { label: "Careers", href: "#" },
        { label: "News", href: "#" },
      ],
    },
    {
      heading: "Our Services",
      links: [
        { label: "Total Bed Management", href: "#" },
        { label: "Planned Preventative Maintenance", href: "#" },
        { label: "Decontamination Services", href: "#" },
        { label: "Acute Care", href: "#" },
        { label: "ICU & Critical Care", href: "#" },
        { label: "Specialised Care", href: "#" },
      ],
    },
    {
      heading: "Contact Us",
      address: [
        "Medstrom Limited",
        "Castle Donington",
        "Derbyshire, DE74 2NP",
        "United Kingdom",
      ],
      phone: "+44 (0)1332 811 950",
      email: "info@medstrom.co.uk",
    },
  ],
  copyright: `© ${new Date().getFullYear()} Medstrom Limited. All rights reserved.`,
};
