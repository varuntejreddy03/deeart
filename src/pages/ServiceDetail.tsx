import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";
import { PageHero } from "@/components/layout/PageHero";
import { Seo } from "@/components/layout/Seo";
import { ServiceIcon } from "@/components/sections/ServiceIcon";
import { CTABanner } from "@/components/sections/CTABanner";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/Accordion";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { services } from "@/data/services";

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = services.find((item) => item.slug === slug);

  if (!service) return <Navigate to="/services" replace />;

  const related = services.filter((item) => item.slug !== service.slug).slice(0, 3);

  return (
    <>
      <Seo
        title={`${service.name} in Hyderabad | Dee-ART Modulars and Interiors`}
        description={`${service.longDescription} Dee-ART Modulars and Interiors provides premium ${service.name.toLowerCase()} in Hyderabad.`}
        path={`/services/${service.slug}`}
      />
      <PageHero eyebrow="Service Detail" title={service.name} description={service.longDescription} image={service.image} />

      <section className="section-padding bg-[#0F0E0C]">
        <div className="container-lux grid gap-10 lg:grid-cols-[.85fr_1.15fr]">
          <div data-reveal>
            <Badge>{service.shortName}</Badge>
            <h2 className="heading-md mt-5 text-[#FDFCFA]" data-word-reveal>
              What We Offer
            </h2>
            <p className="mt-5 leading-8 text-[#C4C2BA]">{service.description}</p>
            <Button asChild className="mt-8">
              <Link to="/contact">
                Plan This Service <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {service.features.map((feature) => (
              <Card key={feature} className="glass-card rounded-lg p-5" data-reveal>
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <p className="mt-4 text-base leading-7 text-[#F5F0E8]">{feature}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="cream-section section-padding">
        <div className="container-lux">
          <div className="max-w-3xl" data-reveal>
            <p className="eyebrow text-[#A88540]">Gallery</p>
            <h2 className="heading-md mt-4 text-[#0F0E0C]" data-word-reveal>
              Finishes, Forms And Lighting Ideas
            </h2>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {service.gallery.map((image, index) => (
              <div key={image} className="overflow-hidden rounded-lg border border-[#0F0E0C]/10" data-reveal>
                <img src={image} alt={`${service.name} inspiration ${index + 1}`} className="h-80 w-full object-cover transition-transform duration-700 hover:scale-105" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProcessTimeline detailed />

      <section className="section-padding bg-[#1C1A16]">
        <div className="container-lux grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
          <div data-reveal>
            <div className="grid h-16 w-16 place-items-center rounded-lg border border-primary/35 bg-primary/10 text-primary">
              <ServiceIcon icon={service.icon} className="h-7 w-7" />
            </div>
            <h2 className="heading-md mt-6 text-[#FDFCFA]" data-word-reveal>
              Service FAQs
            </h2>
          </div>
          <Accordion type="single" collapsible defaultValue="item-0" data-reveal>
            {service.faqs.map((faq, index) => (
              <AccordionItem key={faq.question} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="section-padding bg-[#0F0E0C]">
        <div className="container-lux">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between" data-reveal>
            <div>
              <p className="eyebrow">Related Services</p>
              <h2 className="heading-md mt-4 text-[#FDFCFA]">Complete The Interior</h2>
            </div>
            <Button asChild variant="outline">
              <Link to="/services">All Services</Link>
            </Button>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {related.map((item) => (
              <Link key={item.slug} to={`/services/${item.slug}`} data-reveal>
                <Card className="glass-card group rounded-lg p-6 transition-transform hover:-translate-y-2">
                  <ServiceIcon icon={item.icon} className="h-6 w-6 text-primary" />
                  <h3 className="mt-5 font-serif text-3xl text-[#FDFCFA]">{item.name}</h3>
                  <p className="mt-3 text-base leading-7 text-[#C4C2BA]">{item.description}</p>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner title={`Plan Your ${service.shortName} With Dee-ART`} subtitle="Book a focused consultation and get a clear direction for layout, finishes, budget and timeline." />
    </>
  );
}
