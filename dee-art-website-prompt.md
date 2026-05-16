# 🏠 Dee Art Modulars and Interiors — Complete Website Development Prompt

## Project Overview

Build a **stunning, conversion-optimised, full-stack-ready** website for **Dee Art Modulars and Interiors** — a premium interior design & modular furniture company based in Hyderabad. The website must be **significantly more impressive** than competitor sites like RA Interio, with world-class UI/UX, immersive interactions, and strong business conversion triggers.

**Tech Stack:**
- **Vite + React 18** (with TypeScript)
- **Tailwind CSS v4** (utility-first styling)
- **Framer Motion** (animations & scroll effects)
- **GSAP + ScrollTrigger** (complex scroll animations)
- **React Router v6** (multi-page routing)
- **Shadcn/ui** (accessible base components)
- **Embla Carousel** (touch-native sliders)
- **Lucide React** (icon library)
- **React Hook Form + Zod** (form validation)
- **React Intersection Observer** (scroll reveal)
- **Lenis** (smooth scrolling)
- **@fontsource** (self-hosted fonts)

---

## Brand Identity

| Property | Value |
|---|---|
| **Business Name** | Dee Art Modulars and Interiors |
| **Tagline** | *"Where Creativity Meets Functionality"* |
| **Location** | JSM Towers, 6th Floor, Gachibowli, Hyderabad - 889 |
| **Email** | deeartmodularsandinteriors2026@gmail.com |
| **Phone** | To be added |
| **Hours** | Mon–Sun: 10 AM – 7 PM |
| **Facebook** | https://www.facebook.com/profile.php?id=61589454552364 |
| **Instagram** | https://www.instagram.com/deeartmodularsandinteriors/ |
| **Experience** | 20+ Years |

---

## Design Language & Aesthetic Direction

### Color Palette
```css
:root {
  /* Primary Palette */
  --color-primary: #C8A96E;       /* Warm Gold — premium accent */
  --color-primary-dark: #A88540;  /* Deep Gold */
  --color-primary-light: #E8D5A8; /* Pale Gold */

  /* Neutral Base */
  --color-dark: #0F0E0C;          /* Near Black — backgrounds */
  --color-charcoal: #1C1A16;      /* Rich dark — sections */
  --color-warm-grey: #2C2A24;     /* Card backgrounds */
  --color-mid-grey: #5C5A52;      /* Subtle borders */
  --color-light-grey: #C4C2BA;    /* Body text */
  --color-cream: #F5F0E8;         /* Light section backgrounds */
  --color-white: #FDFCFA;         /* Headings on dark */

  /* Semantic */
  --color-success: #6B9E6B;
  --color-surface: rgba(255,255,255,0.04);
  --color-glass: rgba(200,169,110,0.08);
}
```

### Typography
```
Display / Headings : "Cormorant Garamond" — serif, elegant, editorial (Google Fonts)
Sub-headings       : "DM Serif Display" — refined contrast serif
Body Text          : "Outfit" — geometric sans, highly readable
Labels / UI        : "DM Mono" — technical precision feel
Accent / Script    : "Playfair Display" italic — luxury quotes & taglines
```

### Visual Aesthetic
- **Dark luxury meets warm gold** — deep charcoal backgrounds with gold accents
- Full-bleed cinematic imagery with overlay gradients
- Glassmorphism cards (`backdrop-filter: blur()`)
- Grain/noise texture overlay (CSS `::before` pseudo-element)
- Floating geometric elements (SVG decorators)
- Asymmetric section layouts — content offset from center
- Horizontal scroll sections for portfolio
- Magnetic hover effects on CTAs
- Split-screen hero with animated text reveal
- Smooth page transitions (Framer Motion `AnimatePresence`)

---

## Site Architecture — Pages & Routes

```
/                    → Home Page
/about               → About Us
/services            → All Services
/services/modular-kitchens
/services/wardrobes
/services/living-room
/services/bedroom
/services/false-ceiling
/services/tv-units
/services/office-interiors
/services/turnkey
/services/home-automation
/portfolio           → Portfolio Gallery
/portfolio/:id       → Project Detail
/contact             → Contact Page
/blog                → Blog Listing (placeholder)
```

---

## Page-by-Page Detailed Specification

---

### PAGE 1: HOME (`/`)

#### Section 1.1 — Sticky Navigation
```
Layout: Fixed top, full-width, height 70px
Behaviour: Transparent on hero, transitions to dark/blurred on scroll
          (backdrop-filter: blur(20px) + dark bg at scroll > 80px)

Left: Logo SVG (art deco diamond + "DEE ART" wordmark in Cormorant Garamond)
Center: Nav links — Home | About | Services | Portfolio | Blog | Contact
Right: "Get a Quote" CTA button (gold outlined → gold filled on hover) + Phone icon

Mobile: Hamburger menu → full-screen overlay with staggered link animation
Nav links: animated underline on hover (gold, slides in from left)
Active page: gold dot indicator below link
```

#### Section 1.2 — Hero Section (Full Viewport)
```
Layout: Full-viewport height (100svh), split layout
Left 55%: Text content
Right 45%: Cinematic interior image with parallax

Background: Dark charcoal with subtle grain texture overlay
Animated elements:
  - Small floating gold particles (CSS keyframes)
  - Geometric diamond shape SVG top-right corner
  - Vertical "SCROLL" text on right edge (rotated)

Content:
  Eyebrow label: "Premium Interiors · Hyderabad" (DM Mono, gold, letter-spaced)
  H1: "Spaces That Tell  
       Your Story."
  (Line 1 slides in from left, Line 2 from right — staggered 0.3s)
  
  Body: "Transforming homes, villas & offices in Hyderabad with 20+ years of 
         design excellence. Modern interiors. Modular precision. Your vision."
  
  CTA Row:
    Primary: "Explore Our Work" (gold bg, dark text, arrow →)
    Secondary: "Book Free Consultation" (outlined, ghost)
  
  Stats Bar (below CTAs):
    20+ Years | 500+ Projects | 100% Satisfaction | Hyderabad Based
    (each stat: large number in Cormorant, small label in Outfit)

Right panel:
  - Large interior photo (bedroom/living room) with rounded corner (top-left: 0, others: 24px)
  - Gold border accent top-right
  - Floating badge: "⭐ Award-Winning Design Team" (glassmorphism pill)
  - Second smaller photo overlapping bottom-left of main image (offset composition)
```

#### Section 1.3 — Marquee / Ticker Strip
```
Full-width dark strip between hero and next section
Scrolling text (infinite loop, left to right):
"MODULAR KITCHENS  ✦  WARDROBES  ✦  LIVING ROOM  ✦  BEDROOM INTERIORS  
 ✦  FALSE CEILING  ✦  TURNKEY PROJECTS  ✦  HOME AUTOMATION  ✦  OFFICE INTERIORS  ✦"

Style: Cormorant Garamond italic, cream color, 18px
Background: gold (#C8A96E) strip — creates visual rhythm break
```

#### Section 1.4 — About Snapshot (cream bg section)
```
Layout: Asymmetric two-column
Left: Image collage (2 images stacked with offset + gold border frame)
Right: Text

Eyebrow: "WHO WE ARE"
H2: "Crafting Interiors With 20+ Years of Expertise"
Body: Full about text (2 paragraphs from business brief)
Bullet highlights (icon + text):
  ✦ Experienced Architects & Interior Professionals
  ✦ End-to-End Interior Solutions
  ✦ Modern Design + Smart Functionality
  ✦ Tailored to Every Budget & Lifestyle

CTA: "Discover Our Story →" (text link with animated arrow)

Right side decoration: large numeral "20" in 200px Cormorant, 5% opacity gold — watermark style
```

#### Section 1.5 — Services Grid
```
Background: Dark charcoal (#1C1A16)
Header: "Our Services" centered, with thin gold line under
Sub: "Everything your space needs — under one roof"

Grid: 3 columns × 3 rows on desktop, 2 col tablet, 1 col mobile
Each card (glassmorphism dark card with gold border on hover):
  - Icon (custom SVG or Lucide)
  - Service Name (Cormorant, 22px)
  - 1-line description
  - "Learn More →" link (appears on hover with slide animation)

Hover: Card lifts (translateY -8px), gold border appears, icon animates

Services:
  1. Modular Kitchens        — UtensilsCrossed icon
  2. Wardrobes & Storage     — LayoutGrid icon
  3. Living Room Interiors   — Sofa icon
  4. Bedroom Interiors       — Bed icon
  5. False Ceiling & Lighting— Lightbulb icon
  6. TV Units & Furniture    — Monitor icon
  7. Office & Commercial     — Building2 icon
  8. Turnkey Projects        — CheckCircle icon
  9. Home Automation         — Wifi icon

Bottom CTA: "View All Services" button (centered)
```

#### Section 1.6 — Process Timeline (Interactive)
```
Background: #0F0E0C (near black)
Title: "Our Process" — left aligned with vertical gold bar

Horizontal step-by-step (desktop) / Vertical (mobile):
Step 1: BRIEFING
  Icon: clipboard SVG
  Title: "Initial Consultation"
  Desc: "We begin with a detailed understanding of your needs, lifestyle, vision, and budget."

Step 2: CONCEPT & DESIGN
  Icon: pencil-ruler SVG
  Title: "Design & Mood Boards"
  Desc: "Our architects craft mood boards, 3D layouts, and material palettes for your approval."

Step 3: EXECUTION
  Icon: hammer SVG
  Title: "Precision Execution"
  Desc: "Our skilled team brings every detail to life with premium materials and quality control."

Step 4: HANDOVER
  Icon: key SVG
  Title: "Final Handover"
  Desc: "Your dream space, delivered on time — polished, styled, and move-in ready."

Animation: Steps animate in sequence on scroll (GSAP ScrollTrigger)
Connector: Animated gold line draws between steps on scroll
```

#### Section 1.7 — Portfolio Showcase (Horizontal Scroll)
```
Background: cream (#F5F0E8)
Title: "Featured Projects" (dark, left)
Sub: "Every space we design tells a story."

Horizontal scroll container (Embla Carousel or CSS scroll-snap):
  Cards: 400px wide × 520px tall, slight rotation (-1deg alternate)
  Each card:
    - Full bleed interior photo
    - Bottom overlay gradient
    - Project name
    - Category tag
    - "View Project →" on hover

Projects shown: 6-8 placeholder projects
  (Modular Kitchen - Gachibowli, Master Bedroom - Kondapur, etc.)

"See All Projects →" button at end of carousel
```

#### Section 1.8 — Testimonials
```
Background: Dark charcoal
Title: "What Our Clients Say" (centered, gold)

Layout: 3-column grid, glassmorphism cards
Each card:
  - 5 gold stars
  - Quote text (italic Playfair Display)
  - Client name (bold)
  - Project type badge

Rotate through 6 testimonials with Embla Carousel on mobile

Sample testimonials (adapt from business brief, write fresh):
  "The team at Dee Art transformed our apartment in Gachibowli beyond our expectations."
  "Incredible attention to detail — from the modular kitchen to the ceiling lights."
  "Delivered on time, within budget, and the quality exceeded what we imagined."
```

#### Section 1.9 — CTA Banner (Full-bleed)
```
Background: Full-bleed interior image with dark overlay (0.75 opacity)
Centered content:
  H2: "Ready to Transform Your Space?"
  Sub: "Book a free consultation with our design team today."
  CTA 1: "Get Free Quote" (gold filled)
  CTA 2: "Call Us Now" (outlined)

Floating particles animation in background (CSS)
```

#### Section 1.10 — Contact Quick Strip
```
3-column layout:
  📍 Visit Us — JSM Towers, Gachibowli, Hyderabad
  ✉️ Email Us — deeartmodularsandinteriors2026@gmail.com
  🕐 Open Daily — 10 AM to 7 PM, Monday to Sunday
```

#### Section 1.11 — Footer
```
Background: #0F0E0C
4-column layout:
  Col 1: Logo + tagline + social icons (FB, IG, LinkedIn)
  Col 2: Quick Links (Home, About, Services, Portfolio, Contact)
  Col 3: Services (list all 9)
  Col 4: Contact Info + Google Maps embed (small)

Bottom bar: "© 2026 Dee Art Modulars and Interiors. All rights reserved."
```

---

### PAGE 2: ABOUT (`/about`)

#### Sections:
```
1. Page Hero — "About Us" with background interior photo, overlay, breadcrumb
2. Story Section — "Who We Are" with founder photo/team photo, full about text
3. Mission & Vision — Two-column cards (dark bg)
4. Why Choose Us — 6 differentiators (icon + title + desc)
   ✦ 20+ Years Expertise
   ✦ Certified Architects & Designers
   ✦ End-to-End Turnkey Solutions
   ✦ On-Time Delivery Guarantee
   ✦ Budget-Transparent Pricing
   ✦ Post-Handover Support
5. Numbers That Speak — Animated counter section
   500+ Projects | 20+ Years | 200+ Happy Families | 9 Service Categories
6. Process (same as homepage, detailed)
7. CTA Banner
```

---

### PAGE 3: SERVICES (`/services`)

```
1. Page Hero — "Our Services" 
2. Services Overview — grid of all 9 service cards (larger, with description)
3. Each service links to individual service sub-page

Individual Service Page Template (/services/modular-kitchens etc.):
  - Hero with service name and interior photo
  - What We Offer (bullet list)
  - Why Choose Us For This
  - Process specific to service
  - Gallery (4-6 project photos)
  - FAQ Accordion
  - Related Services
  - CTA

Services to build individual pages for:
  /services/modular-kitchens
  /services/wardrobes
  /services/living-room
  /services/bedroom
  /services/false-ceiling
  /services/tv-units
  /services/office-interiors
  /services/turnkey
  /services/home-automation
```

---

### PAGE 4: PORTFOLIO (`/portfolio`)

```
1. Hero — "Our Portfolio" with filter tabs
2. Filter Bar — All | Kitchens | Bedrooms | Living Rooms | Offices | Full Home
3. Masonry Grid (CSS columns or react-masonry-css)
   - On hover: zoom in + overlay with project name + category
   - On click: open lightbox modal with project details
4. Project Detail Modal / Page:
   - Full image gallery (Embla slider)
   - Project Overview (client type, area, duration, style)
   - Design story paragraph
   - Back to portfolio
5. "Start Your Project" CTA at bottom
```

---

### PAGE 5: CONTACT (`/contact`)

```
Layout: Two-column
Left:
  - "Let's Create Something Beautiful Together"
  - Address with Google Maps link
  - Email
  - Phone
  - Business Hours
  - Social Media icons
  - Embedded Google Map (iframe, styled dark)

Right: Contact Form (React Hook Form + Zod validation)
  Fields:
  - Full Name *
  - Email Address *
  - Phone Number *
  - Property Type (Radio: Apartment | Villa | Office | Commercial)
  - BHK (Radio: 1BHK | 2BHK | 3BHK | 4BHK | 5BHK | Villa)
  - Services Interested In (Multi-checkbox: all 9 services)
  - Budget Range (Select: Under ₹5L | ₹5L–10L | ₹10L–20L | ₹20L+)
  - How did you hear about us? (Select)
  - Your Message (Textarea)
  - Submit Button (gold, full-width, with loading spinner on submit)

On submit: Show success toast notification
Form validation: Real-time Zod validation with error messages
```

---

## Component Library Specification

### Reusable Components to Build

```
/src/components/
  ui/
    Button.tsx          — variants: primary, secondary, ghost, outlined
    Badge.tsx           — service category tags
    Card.tsx            — base card with variants
    Toast.tsx           — success/error notifications
    Modal.tsx           — lightbox & project details
    Accordion.tsx       — FAQ sections
    Skeleton.tsx        — loading states
    
  layout/
    Navbar.tsx          — sticky navigation
    Footer.tsx          — full footer
    PageHero.tsx        — reusable page hero with breadcrumb
    
  sections/
    HeroSection.tsx
    AboutSnapshot.tsx
    ServicesGrid.tsx
    ProcessTimeline.tsx
    PortfolioGrid.tsx
    TestimonialCarousel.tsx
    CTABanner.tsx
    ContactStrip.tsx
    StatsCounter.tsx
    MarqueeBanner.tsx
    
  animations/
    FadeInView.tsx      — scroll-triggered fade in (Framer Motion)
    StaggerChildren.tsx — staggered child animations
    CountUp.tsx         — animated number counter
    ParallaxImage.tsx   — parallax scroll image
    MagneticButton.tsx  — magnetic hover effect CTA
    TextReveal.tsx      — word-by-word text reveal
    
  forms/
    ContactForm.tsx
    QuoteForm.tsx       — popup quote request form
```

---

## Animation & Interaction Specification

### Page Load Sequence (Home)
```
0.0s — Background fades in
0.2s — Navbar slides down
0.4s — Hero eyebrow label fades + slides up
0.6s — H1 Line 1 slides from left
0.9s — H1 Line 2 slides from right
1.1s — Body paragraph fades in
1.3s — CTA buttons appear with scale effect
1.5s — Stats bar fades in
1.7s — Hero image slides from right with slight rotation → settles straight
2.0s — Floating badge bounces in
```

### Scroll Animations (GSAP ScrollTrigger)
```
- Section headings: splitText word-by-word reveal
- Service cards: staggered fade-up (0.1s delay each)
- Process timeline: line draws left to right as you scroll
- Stats counters: count up when in view
- Portfolio cards: scale from 0.9 → 1.0 + fade in
- Testimonial cards: alternating slide from left/right
- Images: subtle parallax (move at 0.7x scroll speed)
```

### Hover Interactions
```
- Nav links: gold underline slides in from left
- Service cards: translateY(-8px) + gold border + shadow
- Portfolio items: image zoom (scale 1.05) + overlay appear
- CTA buttons: magnetic pull effect (mouse tracking)
- Social icons: scale + color rotate
- Footer links: gold color transition
```

### Smooth Scrolling
```
Use Lenis for buttery smooth scrolling:
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smooth: true
  })
```

---

## Performance & Technical Requirements

```
1. Lazy load all images (loading="lazy" + Intersection Observer)
2. WebP image format with fallbacks
3. Code splitting per route (React.lazy + Suspense)
4. Skeleton loaders for all async content
5. SEO: React Helmet Async — unique title/description per page
6. Mobile-first responsive (320px → 1920px)
7. ARIA labels on all interactive elements
8. Keyboard navigation support
9. WhatsApp floating button (bottom right, above fold)
10. Scroll to top button (appears after 500px scroll)
11. Preload LCP image (hero image)
12. Google Fonts preconnect links
13. Environment variable for API endpoints
14. 404 Not Found page (styled, with back to home CTA)
```

---

## Responsive Breakpoints

```
Mobile:  320px – 767px   (1 column layouts, stacked nav)
Tablet:  768px – 1023px  (2 column grids, condensed nav)
Desktop: 1024px – 1439px (full layouts)
Wide:    1440px+          (max-width 1400px container centered)
```

---

## SEO & Meta Configuration

```
Home:
  Title: "Interior Designers in Hyderabad | Dee Art Modulars and Interiors"
  Desc:  "Premium modular kitchens, wardrobes, and full home interiors in Hyderabad.
          20+ years of expertise. Book your free consultation today."

Services:
  Title: "[Service Name] in Hyderabad | Dee Art Modulars and Interiors"

Portfolio:
  Title: "Interior Design Portfolio | Dee Art Modulars and Interiors Hyderabad"

Contact:
  Title: "Contact Us | Dee Art Modulars and Interiors Hyderabad"

Schema.org JSON-LD:
  LocalBusiness schema with:
  - name, address, telephone, email, openingHours
  - geo coordinates (Gachibowli, Hyderabad)
  - serviceArea: Hyderabad, Telangana
```

---

## WhatsApp Integration

```tsx
// Floating WhatsApp button — bottom right
const WHATSAPP_NUMBER = "91XXXXXXXXXX"; // add actual number
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hi! I'm interested in interior design services. Can you please share more details?"
);
const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

// Button style: green circle, pulse animation, fixed position
// z-index: 9999, bottom: 24px, right: 24px
```

---

## File Structure

```
dee-art-interiors/
├── public/
│   ├── favicon.ico
│   ├── logo.svg
│   └── og-image.jpg
├── src/
│   ├── assets/
│   │   ├── images/         (placeholder images)
│   │   ├── icons/          (custom SVG icons)
│   │   └── fonts/          (if self-hosting)
│   ├── components/
│   │   ├── ui/
│   │   ├── layout/
│   │   ├── sections/
│   │   ├── animations/
│   │   └── forms/
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── ServiceDetail.tsx
│   │   ├── Portfolio.tsx
│   │   ├── Contact.tsx
│   │   ├── Blog.tsx
│   │   └── NotFound.tsx
│   ├── data/
│   │   ├── services.ts      (service definitions)
│   │   ├── portfolio.ts     (project data)
│   │   └── testimonials.ts  (client reviews)
│   ├── hooks/
│   │   ├── useScrollTrigger.ts
│   │   ├── useInView.ts
│   │   └── useLenis.ts
│   ├── utils/
│   │   ├── cn.ts           (clsx + tailwind-merge)
│   │   └── constants.ts
│   ├── styles/
│   │   └── globals.css     (CSS variables + base styles)
│   ├── App.tsx
│   ├── main.tsx
│   └── router.tsx
├── index.html
├── vite.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## Package.json Dependencies

```json
{
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-router-dom": "^6.27.0",
    "framer-motion": "^11.11.0",
    "gsap": "^3.12.5",
    "@gsap/react": "^2.1.1",
    "lenis": "^1.1.13",
    "embla-carousel-react": "^8.3.0",
    "embla-carousel-autoplay": "^8.3.0",
    "react-hook-form": "^7.53.2",
    "@hookform/resolvers": "^3.9.1",
    "zod": "^3.23.8",
    "react-intersection-observer": "^9.13.1",
    "react-helmet-async": "^2.0.5",
    "clsx": "^2.1.1",
    "tailwind-merge": "^2.5.4",
    "lucide-react": "^0.460.0",
    "@radix-ui/react-accordion": "^1.2.1",
    "@radix-ui/react-dialog": "^1.1.2",
    "@radix-ui/react-toast": "^1.2.2",
    "@radix-ui/react-tabs": "^1.1.1",
    "@radix-ui/react-radio-group": "^1.2.1",
    "@radix-ui/react-checkbox": "^1.1.2",
    "react-masonry-css": "^1.0.16",
    "yet-another-react-lightbox": "^3.21.4",
    "sonner": "^1.7.0"
  },
  "devDependencies": {
    "@types/react": "^18.3.12",
    "@types/react-dom": "^18.3.1",
    "@vitejs/plugin-react": "^4.3.3",
    "typescript": "^5.6.3",
    "tailwindcss": "^4.0.0",
    "@tailwindcss/vite": "^4.0.0",
    "autoprefixer": "^10.4.20"
  }
}
```

---

## Key Differentiators From RA Interio Website

| Feature | RA Interio (Competitor) | Dee Art (This Build) |
|---|---|---|
| Design Theme | Light, minimal, simple | **Dark luxury gold — immersive** |
| Animations | Static, basic | **GSAP + Framer Motion scroll magic** |
| Navigation | Basic top nav | **Morphing sticky nav + mobile overlay** |
| Hero | Simple text + image | **Split screen cinematic + particle FX** |
| Typography | Generic web fonts | **Cormorant + Outfit — editorial luxury** |
| Services | Simple grid | **Interactive hover cards + sub-pages** |
| Portfolio | Static image grid | **Masonry + lightbox + horizontal scroll** |
| Contact Form | Basic HTML form | **Multi-step form + Zod validation** |
| Performance | N/A | **Lazy load + code split + Skeletons** |
| Mobile UX | Basic responsive | **Mobile-first + touch gestures** |
| WhatsApp | None | **Floating pulse button** |
| SEO | Basic | **JSON-LD Schema + React Helmet** |

---

## Development Sequence (Recommended Build Order)

```
Phase 1 — Foundation (Day 1–2)
  ✓ Vite + React + TypeScript setup
  ✓ Tailwind v4 config + CSS variables
  ✓ Router setup (all routes)
  ✓ Global styles + fonts
  ✓ Lenis smooth scroll setup
  ✓ Base layout (Navbar + Footer)

Phase 2 — Core Components (Day 2–4)
  ✓ Animation wrappers (FadeInView, StaggerChildren, TextReveal)
  ✓ Button, Card, Badge UI components
  ✓ PageHero reusable component
  ✓ MarqueeBanner component

Phase 3 — Home Page (Day 4–7)
  ✓ HeroSection with all animations
  ✓ ServicesGrid
  ✓ ProcessTimeline with GSAP
  ✓ PortfolioShowcase (horizontal scroll)
  ✓ TestimonialCarousel
  ✓ StatsCounter
  ✓ CTABanner

Phase 4 — Inner Pages (Day 7–12)
  ✓ About page all sections
  ✓ Services overview + 9 service pages
  ✓ Portfolio masonry + lightbox
  ✓ Contact form (full validation)

Phase 5 — Polish (Day 12–14)
  ✓ WhatsApp float button
  ✓ Scroll to top button
  ✓ Page transitions (AnimatePresence)
  ✓ SEO + meta tags
  ✓ Loading skeletons
  ✓ 404 page
  ✓ Performance audit
  ✓ Mobile QA all breakpoints
```

---

## Business Content Reference

### Services Content

**Modular Kitchens**
Precision-crafted modular kitchens that balance beauty and utility. From L-shaped to parallel and island kitchens — we design for the way you live.

**Wardrobes & Storage Solutions**
Custom wardrobes with smart storage engineering — sliding, hinged, walk-in. Maximum space. Minimum clutter.

**Living Room Interiors**
Your living room is your statement. We design feature walls, entertainment units, seating arrangements and lighting that create the perfect first impression.

**Bedroom Interiors**
Restful, personal, elegant. We design master and guest bedrooms with custom beds, wardrobes, vanities, and mood lighting.

**False Ceiling & Lighting**
Architectural ceilings with layered warm lighting — cove lights, recessed LEDs, and chandeliers that transform any space.

**TV Units & Custom Furniture**
Statement TV walls and bespoke furniture pieces, designed to integrate seamlessly with your interiors.

**Office & Commercial Interiors**
Productive, professional environments for offices, clinics, showrooms, and retail spaces. We create workspaces that inspire.

**Turnkey Interior Projects**
Full end-to-end project management — from concept and design to material procurement, execution, styling, and handover.

**Home Automation Services**
Smart living solutions — automated lighting, climate control, security, and entertainment integrated seamlessly into your interior design.

---

*This prompt contains everything needed to build a world-class interior design website for Dee Art Modulars and Interiors that significantly surpasses the RA Interio reference. Use this as a complete specification document for development.*
