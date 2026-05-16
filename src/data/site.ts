export const site = {
  name: "Dee Art Modulars and Interiors",
  shortName: "Dee Art",
  tagline: "Where Creativity Meets Functionality",
  address: "JSM Towers, 6th Floor, Gachibowli, Hyderabad",
  email: "deeartmodularsandinteriors2026@gmail.com",
  hours: "Mon-Sun 10AM-7PM",
  instagram: "https://www.instagram.com/deeartmodularsandinteriors/",
  instagramHandle: "deeartmodularsandinteriors",
  facebook: "https://www.facebook.com/profile.php?id=61589454552364",
  experience: "20+",
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
  { value: 20, suffix: "+", label: "Years" },
  { value: 500, suffix: "+", label: "Projects" },
  { value: 100, suffix: "%", label: "Satisfaction" },
  { value: 9, suffix: "", label: "Service Categories" }
];

export const images = {
  hero: "https://images.unsplash.com/photo-1758448755927-e5c5ae14790c?auto=format&fit=crop&w=1400&q=82",
  heroAlt: "https://images.unsplash.com/photo-1758448755969-8791367cf5c5?auto=format&fit=crop&w=900&q=82",
  kitchen: "https://images.unsplash.com/photo-1772567733061-f7b44c0587b0?auto=format&fit=crop&w=1100&q=80",
  kitchenWarm: "https://images.unsplash.com/photo-1699852676054-a55370ac4c7a?auto=format&fit=crop&w=1100&q=80",
  living: "https://images.unsplash.com/photo-1772475329856-7c7de908b44e?auto=format&fit=crop&w=1200&q=80",
  bedroom: "https://images.unsplash.com/photo-1758448755969-8791367cf5c5?auto=format&fit=crop&w=1200&q=80",
  office: "https://images.unsplash.com/photo-1774953037913-af0cf688491a?auto=format&fit=crop&w=1200&q=80",
  lobby: "https://images.unsplash.com/photo-1758448755927-e5c5ae14790c?auto=format&fit=crop&w=1200&q=80",
  pageHero: "https://images.unsplash.com/photo-1772567733061-f7b44c0587b0?auto=format&fit=crop&w=1600&q=78"
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
