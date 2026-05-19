export const site = {
  name: "Dee-ART Modulars and Interiors",
  shortName: "Dee-ART",
  tagline: "Where Creativity Meets Functionality",
  address: "JSM Towers, 6th Floor, Gachibowli, Hyderabad",
  email: "deeartmodularsandinteriors2026@gmail.com",
  hours: "Mon-Sun 10AM-7PM",
  instagram: "https://www.instagram.com/deeartmodularsandinteriors/",
  instagramHandle: "deeartmodularsandinteriors",
  facebook: "https://www.facebook.com/profile.php?id=61589454552364",
  experience: "12+",
  whatsappNumber: "91XXXXXXXXXX",
  coordinates: {
    latitude: 17.4401,
    longitude: 78.3489
  }
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" }
];

export const stats = [
  { value: 12, suffix: "+", label: "Years" },
  { value: 200, suffix: "+", label: "Projects" },
  { value: 100, suffix: "%", label: "Happy Clients" },
  { value: 9, suffix: "", label: "Services" }
];

export const images = {
  hero: "/WhatsApp Image 2026-05-17 at 11.08.32 AM.jpeg",
  heroAlt: "/WhatsApp Image 2026-05-17 at 11.08.34 AM (1).jpeg",
  kitchen: "/WhatsApp Image 2026-05-17 at 11.08.33 AM.jpeg",
  kitchenWarm: "/WhatsApp Image 2026-05-17 at 11.08.33 AM (1).jpeg",
  living: "/WhatsApp Image 2026-05-17 at 11.08.34 AM (1).jpeg",
  bedroom: "/WhatsApp Image 2026-05-17 at 11.08.34 AM (2).jpeg",
  office: "/WhatsApp Image 2026-05-17 at 11.08.34 AM.jpeg",
  lobby: "/WhatsApp Image 2026-05-17 at 11.08.34 AM (2).jpeg",
  pageHero: "/WhatsApp Image 2026-05-17 at 11.08.32 AM.jpeg"
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: site.name,
  description:
    "Premium modular kitchens, wardrobes, full home interiors, office interiors, turnkey projects and home automation in Hyderabad.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "JSM Towers, 6th Floor, Gachibowli",
    addressLocality: "Hyderabad",
    addressRegion: "Telangana",
    addressCountry: "IN"
  },
  email: site.email,
  openingHours: "Mo-Su 10:00-19:00",
  geo: {
    "@type": "GeoCoordinates",
    latitude: site.coordinates.latitude,
    longitude: site.coordinates.longitude
  },
  areaServed: "Hyderabad, Telangana",
  sameAs: [site.instagram, site.facebook]
};
