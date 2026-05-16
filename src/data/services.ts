import { images } from "./site";

export type ServiceIcon =
  | "kitchen"
  | "storage"
  | "living"
  | "bedroom"
  | "lighting"
  | "tv"
  | "office"
  | "turnkey"
  | "automation";

export type Service = {
  slug: string;
  name: string;
  shortName: string;
  icon: ServiceIcon;
  description: string;
  longDescription: string;
  image: string;
  gallery: string[];
  features: string[];
  faqs: { question: string; answer: string }[];
};

export const services: Service[] = [
  {
    slug: "modular-kitchens",
    name: "Modular Kitchens",
    shortName: "Kitchens",
    icon: "kitchen",
    description: "Precision-crafted kitchens that balance beauty, workflow and daily utility.",
    longDescription:
      "From L-shaped and parallel kitchens to island layouts with premium finishes, we engineer kitchens around how you cook, host and store.",
    image: images.kitchen,
    gallery: [images.kitchen, images.kitchenWarm, images.hero, images.living],
    features: ["Island, L-shaped, U-shaped and parallel layouts", "Soft-close hardware and high-durability shutters", "Stone, quartz and solid surface counter options", "Appliance, lighting and storage planning"],
    faqs: [
      { question: "Can you remodel an existing kitchen?", answer: "Yes. We can retain workable civil elements and redesign cabinetry, surfaces, lighting and storage." },
      { question: "Do you help choose materials?", answer: "Yes. We create a finish palette with shutters, counters, hardware, lighting and backsplash options." }
    ]
  },
  {
    slug: "wardrobes",
    name: "Wardrobes & Storage",
    shortName: "Wardrobes",
    icon: "storage",
    description: "Custom wardrobes and storage systems designed for maximum capacity and calm.",
    longDescription:
      "Sliding, hinged and walk-in wardrobes with carefully planned hanging, drawer, accessory and seasonal storage zones.",
    image: images.bedroom,
    gallery: [images.bedroom, images.lobby, images.heroAlt, images.kitchenWarm],
    features: ["Sliding, hinged and walk-in formats", "Loft, dresser and vanity integrations", "Drawer organizers and accessory systems", "Moisture-aware material selection"],
    faqs: [
      { question: "Can wardrobes be matched to existing decor?", answer: "Yes. We match laminates, veneer tones, handles and lighting to your room language." },
      { question: "Do you design compact storage?", answer: "Yes. We specialize in storage planning for apartments where every inch matters." }
    ]
  },
  {
    slug: "living-room",
    name: "Living Room Interiors",
    shortName: "Living",
    icon: "living",
    description: "Feature walls, seating, lighting and focal points that make a first impression.",
    longDescription:
      "We compose living rooms around hospitality, comfort and visual balance, from TV walls to statement surfaces and layered lighting.",
    image: images.living,
    gallery: [images.living, images.hero, images.lobby, images.office],
    features: ["TV wall and console planning", "Sofa, rug and circulation layouts", "Accent walls and paneling", "Warm ambient and task lighting"],
    faqs: [
      { question: "Can you work with existing furniture?", answer: "Yes. We can retain important pieces and design built-ins, surfaces and lighting around them." },
      { question: "Do you provide styling support?", answer: "Yes. Final styling can include art, decor, cushions, rugs and accessories." }
    ]
  },
  {
    slug: "bedroom",
    name: "Bedroom Interiors",
    shortName: "Bedrooms",
    icon: "bedroom",
    description: "Personal, restful suites with beds, wardrobes, vanities and mood lighting.",
    longDescription:
      "Bedrooms are planned for quiet luxury, storage clarity and comfort, with custom headboards, nightstands, wardrobes and lighting scenes.",
    image: images.bedroom,
    gallery: [images.bedroom, images.heroAlt, images.living, images.lobby],
    features: ["Custom bed backs and side tables", "Wardrobes, dressers and vanities", "Mood lighting and cove lighting", "Material palettes tuned for calm"],
    faqs: [
      { question: "Can you design children's bedrooms?", answer: "Yes. We design flexible rooms that adapt as children grow." },
      { question: "Do you handle loose furniture?", answer: "Yes. We can specify and source loose furniture as part of a full room plan." }
    ]
  },
  {
    slug: "false-ceiling",
    name: "False Ceiling & Lighting",
    shortName: "Ceilings",
    icon: "lighting",
    description: "Architectural ceilings with cove, recessed and statement lighting layers.",
    longDescription:
      "We design ceiling planes and lighting scenes that improve scale, mood and usability without overwhelming the room.",
    image: images.hero,
    gallery: [images.hero, images.kitchenWarm, images.bedroom, images.office],
    features: ["POP and gypsum ceiling concepts", "Cove, recessed and chandelier planning", "Layered warm lighting design", "Concealed wiring coordination"],
    faqs: [
      { question: "Will a false ceiling reduce height too much?", answer: "We plan drops carefully and use selective ceiling treatments for lower-height spaces." },
      { question: "Can lighting be automated?", answer: "Yes. We can integrate dimmers, scenes and smart switches with automation plans." }
    ]
  },
  {
    slug: "tv-units",
    name: "TV Units & Custom Furniture",
    shortName: "TV Units",
    icon: "tv",
    description: "Statement media walls and bespoke furniture with seamless storage.",
    longDescription:
      "Every unit is designed to integrate cable management, display storage, acoustics, lighting and the visual language of the room.",
    image: images.living,
    gallery: [images.living, images.office, images.hero, images.kitchen],
    features: ["Floating and full-height TV units", "Cable and device concealment", "Custom consoles, tables and shelves", "Integrated lighting and display niches"],
    faqs: [
      { question: "Can you hide wires and devices?", answer: "Yes. Cable management and device access are planned from the first layout." },
      { question: "Do you build custom furniture?", answer: "Yes. We design and execute bespoke furniture as part of the interior package." }
    ]
  },
  {
    slug: "office-interiors",
    name: "Office & Commercial Interiors",
    shortName: "Office",
    icon: "office",
    description: "Productive offices, clinics, showrooms and retail environments with presence.",
    longDescription:
      "We build commercial interiors that support workflow, brand perception and long-term durability across client-facing and team zones.",
    image: images.office,
    gallery: [images.office, images.lobby, images.living, images.kitchenWarm],
    features: ["Reception and workstation layouts", "Cabins, meeting rooms and collaboration zones", "Retail, clinic and showroom planning", "Durable materials for high traffic"],
    faqs: [
      { question: "Can work happen in phases?", answer: "Yes. We can sequence commercial execution to reduce disruption." },
      { question: "Do you handle brand integration?", answer: "Yes. Materials, signage zones, lighting and color can be aligned with your brand." }
    ]
  },
  {
    slug: "turnkey",
    name: "Turnkey Projects",
    shortName: "Turnkey",
    icon: "turnkey",
    description: "End-to-end design, procurement, execution, styling and final handover.",
    longDescription:
      "For clients who want one accountable team, we manage the complete journey from first brief to a styled, move-in-ready space.",
    image: images.lobby,
    gallery: [images.lobby, images.hero, images.kitchen, images.bedroom],
    features: ["Concept, design and drawings", "Material procurement and vendor coordination", "Site execution and quality checks", "Final styling and handover"],
    faqs: [
      { question: "Who coordinates vendors?", answer: "Our team manages vendors, scheduling, procurement and quality control." },
      { question: "Do you provide timelines?", answer: "Yes. Every turnkey project starts with a clear scope, timeline and milestone plan." }
    ]
  },
  {
    slug: "home-automation",
    name: "Home Automation",
    shortName: "Automation",
    icon: "automation",
    description: "Smart lighting, climate, security and entertainment integrated into design.",
    longDescription:
      "Automation is planned as part of the interior, so switches, sensors and scenes feel natural rather than added later.",
    image: images.hero,
    gallery: [images.hero, images.office, images.living, images.kitchenWarm],
    features: ["Lighting scenes and smart switches", "Climate and curtain control", "Security and access integrations", "Entertainment and voice assistant planning"],
    faqs: [
      { question: "Can automation be added later?", answer: "Yes, but planning it during interiors produces cleaner wiring, better switch placement and smoother use." },
      { question: "Do you support app-based controls?", answer: "Yes. We can specify app, voice and wall-control options based on your comfort level." }
    ]
  }
];

export const serviceNames = services.map((service) => service.name);
