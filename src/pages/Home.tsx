import { AboutSnapshot } from "@/components/sections/AboutSnapshot";
import { ContactStrip } from "@/components/sections/ContactStrip";
import { CTABanner } from "@/components/sections/CTABanner";
import { HeroSection } from "@/components/sections/HeroSection";
import { MarqueeBanner } from "@/components/sections/MarqueeBanner";
import { PortfolioShowcase } from "@/components/sections/PortfolioShowcase";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { TestimonialCarousel } from "@/components/sections/TestimonialCarousel";
import { Seo } from "@/components/layout/Seo";

export default function Home() {
  return (
    <>
      <Seo
        title="Interior Designers in Hyderabad | Dee Art Modulars and Interiors"
        description="Premium modular kitchens, wardrobes, and full home interiors in Hyderabad. 20+ years of expertise. Book your free consultation today."
      />
      <HeroSection />
      <MarqueeBanner />
      <AboutSnapshot />
      <ServicesGrid />
      <ProcessTimeline />
      <PortfolioShowcase />
      <TestimonialCarousel />
      <CTABanner />
      <ContactStrip />
    </>
  );
}
