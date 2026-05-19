import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { services } from "@/data/services";
import { ServiceIcon } from "./ServiceIcon";

type ServicesGridProps = {
  compact?: boolean;
};

export function ServicesGrid({ compact = false }: ServicesGridProps) {
  return (
    <section className="section-padding bg-[#1C1A16]">
      <div className="container-lux">
        <div className="mx-auto max-w-3xl text-center" data-reveal>
          <p className="eyebrow justify-center">Our Services</p>
          <h2 className="heading-md mt-4 text-[#FDFCFA]" data-word-reveal>
            Everything Your Space Needs Under One Roof
          </h2>
          <p className="mt-5 text-[#C4C2BA]">Modular precision, interior styling and turnkey execution across homes, villas and commercial spaces.</p>
        </div>

        <div className="services-grid mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <Link key={service.slug} to={`/services/${service.slug}`} data-reveal>
              <Card className="service-card group h-full overflow-hidden rounded-[2px] border border-[rgba(200,169,110,0.12)] bg-[#1C1A16] p-9 shadow-none backdrop-blur-none transition-all duration-[350ms] ease-in-out hover:-translate-y-1 hover:border-[rgba(200,169,110,0.4)] hover:bg-[#221F19] hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
                <div className="service-icon mb-6 grid h-12 w-12 place-items-center rounded bg-[rgba(200,169,110,0.1)] text-[#C8A96E] transition-transform duration-[350ms] ease-in-out group-hover:scale-105">
                  <ServiceIcon icon={service.icon} className="h-6 w-6" />
                </div>
                <h3 className="service-title font-serif text-[24px] font-semibold leading-tight text-[#FDFCFA]">{service.name}</h3>
                <p className="service-description mt-3 min-h-14 text-[16px] leading-[1.7] text-[#8A8880]">{compact ? service.description : service.longDescription}</p>
                <span className="mt-6 inline-flex translate-x-[-6px] items-center gap-2 text-sm font-semibold text-[#C8A96E] opacity-90 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                  Learn More <ArrowUpRight className="h-4 w-4" />
                </span>
              </Card>
            </Link>
          ))}
        </div>

        {!compact ? (
          <div className="mt-12 text-center" data-reveal>
            <Button asChild variant="outline" size="lg" className="view-all-services-button">
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        ) : null}
      </div>
    </section>
  );
}
