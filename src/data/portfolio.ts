export type PortfolioCategory = "Kitchens" | "Bedrooms" | "Living" | "Office" | "Full Home" | "Dining";

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
    id: "modern-kitchen-bar",
    title: "Modern Kitchen & Bar",
    location: "Hyderabad",
    category: "Kitchens",
    image: "/WhatsApp Image 2026-05-17 at 11.08.33 AM.jpeg",
    height: "medium",
    area: "350 sq ft",
    duration: "5 weeks",
    style: "Modern Luxe",
    story: "A high-function kitchen with bar counter, planned around concealed storage, warm task lighting and premium finishes."
  },
  {
    id: "warm-luxury-living",
    title: "Warm Luxury Living",
    location: "Gachibowli, Hyderabad",
    category: "Living",
    image: "/WhatsApp Image 2026-05-17 at 11.08.34 AM (1).jpeg",
    height: "tall",
    area: "520 sq ft",
    duration: "6 weeks",
    style: "Warm Minimal",
    story: "A clean media wall, generous sectional seating and natural wood details created a bright but grounded living room."
  },
  {
    id: "open-plan-living",
    title: "Open Plan Living Space",
    location: "Kondapur, Hyderabad",
    category: "Full Home",
    image: "/WhatsApp Image 2026-05-17 at 11.08.34 AM (2).jpeg",
    height: "wide",
    area: "1,850 sq ft",
    duration: "9 weeks",
    style: "Smart Modern",
    story: "Integrated automation, layered lighting and custom storage turned a compact apartment into an efficient premium home."
  },
  {
    id: "elegant-dining",
    title: "Elegant Dining Interior",
    location: "Hyderabad",
    category: "Dining",
    image: "/WhatsApp Image 2026-05-17 at 11.08.35 AM.jpeg",
    height: "medium",
    area: "280 sq ft",
    duration: "4 weeks",
    style: "Classic Modern",
    story: "A refined dining space with statement lighting, warm wood tones and elegant seating for family gatherings."
  },
  {
    id: "display-unit-showcase",
    title: "Custom Display Unit",
    location: "Gachibowli",
    category: "Living",
    image: "/WhatsApp Image 2026-05-17 at 11.08.33 AM (1).jpeg",
    height: "tall",
    area: "180 sq ft",
    duration: "3 weeks",
    style: "Premium Modular",
    story: "A tall display cabinet with integrated lighting showcasing craftsmanship and attention to detail."
  },
  {
    id: "living-room-beige",
    title: "Beige Luxury Living",
    location: "Hyderabad",
    category: "Living",
    image: "/WhatsApp Image 2026-05-17 at 11.08.32 AM.jpeg",
    height: "medium",
    area: "480 sq ft",
    duration: "6 weeks",
    style: "Luxury Contemporary",
    story: "Marble flooring, neutral tones and layered lighting create a sophisticated living space with timeless appeal."
  }
];

export const portfolioFilters = ["All", "Kitchens", "Living", "Full Home", "Dining"] as const;
