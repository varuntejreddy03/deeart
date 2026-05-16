import { PageHero } from "@/components/layout/PageHero";
import { Seo } from "@/components/layout/Seo";
import { CTABanner } from "@/components/sections/CTABanner";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { images } from "@/data/site";

export default function Services() {
  return (
    <>
      <Seo
        title="Interior Design Services in Hyderabad | Dee Art Modulars and Interiors"
        description="Explore modular kitchens, wardrobes, living room interiors, bedroom interiors, office interiors, turnkey projects and home automation in Hyderabad."
        path="/services"
      />
      <PageHero
        eyebrow="Our Services"
        title="Nine Ways To Shape A Better Interior"
        description="From modular furniture to turnkey delivery, Dee Art brings every critical interior service under one premium design process."
        image={images.hero}
      />
      <ServicesGrid compact />
      <CTABanner title="Need A Complete Interior Plan?" subtitle="Tell us your space type, budget and timeline. We will map the right service mix for your project." />
    </>
  );
}
