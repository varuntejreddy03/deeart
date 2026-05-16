import { Facebook, Instagram, Mail, MapPin, Clock } from "lucide-react";
import { ContactForm } from "@/components/forms/ContactForm";
import { PageHero } from "@/components/layout/PageHero";
import { Seo } from "@/components/layout/Seo";
import { Button } from "@/components/ui/Button";
import { images, site } from "@/data/site";

export default function Contact() {
  return (
    <>
      <Seo
        title="Contact Us | Dee-ART Modulars and Interiors Hyderabad"
        description="Contact Dee-ART Modulars and Interiors for premium interior design, modular kitchens, wardrobes and turnkey interiors in Hyderabad."
        path="/contact"
      />
      <PageHero
        eyebrow="Contact"
        title="Let's Create Something Beautiful Together"
        description="Tell us about your home, villa or office. We will help turn the brief into a clear, practical interior plan."
        image={images.office}
      />

      <section className="section-padding bg-[#0F0E0C]">
        <div className="container-lux grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
          <aside className="space-y-6" data-reveal>
            <div>
              <p className="eyebrow">Reach Dee-ART</p>
              <h2 className="heading-md mt-4 text-[#FDFCFA]" data-word-reveal>
                Visit, Email Or Send A Project Brief
              </h2>
              <p className="mt-5 leading-8 text-[#C4C2BA]">Our studio works with homeowners, villa owners and commercial teams across Hyderabad.</p>
            </div>

            <div className="grid gap-4">
              <div className="glass-card rounded-lg p-5">
                <MapPin className="h-5 w-5 text-primary" />
                <p className="mt-3 font-medium text-[#F5F0E8]">Address</p>
                <p className="mt-1 text-sm leading-7 text-[#C4C2BA]">{site.address}</p>
              </div>
              <a href={`mailto:${site.email}`} className="glass-card block rounded-lg p-5 transition-colors hover:border-primary/50">
                <Mail className="h-5 w-5 text-primary" />
                <p className="mt-3 font-medium text-[#F5F0E8]">Email</p>
                <p className="mt-1 break-words text-sm leading-7 text-[#C4C2BA]">{site.email}</p>
              </a>
              <div className="glass-card rounded-lg p-5">
                <Clock className="h-5 w-5 text-primary" />
                <p className="mt-3 font-medium text-[#F5F0E8]">Hours</p>
                <p className="mt-1 text-sm leading-7 text-[#C4C2BA]">{site.hours}</p>
              </div>
            </div>

            <div className="flex gap-3">
              <Button asChild variant="secondary" size="icon" aria-label="Instagram">
                <a href={site.instagram} target="_blank" rel="noreferrer">
                  <Instagram className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="secondary" size="icon" aria-label="Facebook">
                <a href={site.facebook} target="_blank" rel="noreferrer">
                  <Facebook className="h-4 w-4" />
                </a>
              </Button>
            </div>

            <div className="overflow-hidden rounded-lg border border-primary/18">
              <iframe
                title="Dee-ART Modulars and Interiors location map"
                src="https://www.google.com/maps?q=JSM%20Towers%20Gachibowli%20Hyderabad&output=embed"
                className="h-80 w-full grayscale invert-[.85]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </aside>

          <ContactForm />
        </div>
      </section>
    </>
  );
}
