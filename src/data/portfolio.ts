import { images } from "./site";

export type PortfolioCategory = "Kitchens" | "Bedrooms" | "Living" | "Office" | "Full Home";

export type PortfolioProject = {
  id: string;
  title: string;
  location: string;
  category: PortfolioCategory;
  image: string;
  height: "tall" | "medium" | "wide";
  area: string;
  duration: string;
  style: string;
  story: string;
};

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "gachibowli-marble-kitchen",
    title: "Marble Island Kitchen",
    location: "Gachibowli",
    category: "Kitchens",
    image: images.kitchen,
    height: "medium",
    area: "320 sq ft",
    duration: "5 weeks",
    style: "Modern Luxe",
    story: "A high-function kitchen planned around concealed storage, warm task lighting and a marble island for everyday hosting."
  },
  {
    id: "kondapur-master-suite",
    title: "Layered Master Suite",
    location: "Kondapur",
    category: "Bedrooms",
    image: images.bedroom,
    height: "tall",
    area: "410 sq ft",
    duration: "4 weeks",
    style: "Hotel Calm",
    story: "Soft upholstery, warm lighting and custom wardrobes shaped a private retreat with a quiet luxury mood."
  },
  {
    id: "financial-district-office",
    title: "Executive Office Lounge",
    location: "Financial District",
    category: "Office",
    image: images.office,
    height: "wide",
    area: "2,200 sq ft",
    duration: "8 weeks",
    style: "Contemporary Commercial",
    story: "Glass partitions, efficient workstations and hospitality-led lounge zones gave this office a polished client-facing presence."
  },
  {
    id: "jubilee-hills-living",
    title: "Warm Minimal Living",
    location: "Jubilee Hills",
    category: "Living",
    image: images.living,
    height: "medium",
    area: "520 sq ft",
    duration: "6 weeks",
    style: "Warm Minimal",
    story: "A clean media wall, generous sectional seating and natural wood details created a bright but grounded living room."
  },
  {
    id: "kokapet-full-home",
    title: "Turnkey Villa Interior",
    location: "Kokapet",
    category: "Full Home",
    image: images.lobby,
    height: "tall",
    area: "4,800 sq ft",
    duration: "14 weeks",
    style: "Luxury Turnkey",
    story: "A complete villa interior with coordinated kitchen, ceiling, bedrooms, wardrobes and final styling."
  },
  {
    id: "hitech-city-smart-home",
    title: "Smart Apartment Interior",
    location: "HITEC City",
    category: "Full Home",
    image: images.hero,
    height: "medium",
    area: "1,850 sq ft",
    duration: "9 weeks",
    style: "Smart Modern",
    story: "Integrated automation, layered lighting and custom storage turned a compact apartment into an efficient premium home."
  },
  {
    id: "madhapur-dining-kitchen",
    title: "Dining Kitchen Extension",
    location: "Madhapur",
    category: "Kitchens",
    image: images.kitchenWarm,
    height: "wide",
    area: "460 sq ft",
    duration: "6 weeks",
    style: "Warm Contemporary",
    story: "A dining-linked kitchen with black cabinetry, brass hardware and a warm island arrangement for family gatherings."
  },
  {
    id: "nanakramguda-bedroom",
    title: "Soft Gold Bedroom",
    location: "Nanakramguda",
    category: "Bedrooms",
    image: images.heroAlt,
    height: "medium",
    area: "360 sq ft",
    duration: "4 weeks",
    style: "Classic Modern",
    story: "A layered bedroom composition with decorative mirrors, statement lighting and a highly usable wardrobe wall."
  }
];

export const portfolioFilters = ["All", "Kitchens", "Bedrooms", "Living", "Office", "Full Home"] as const;
