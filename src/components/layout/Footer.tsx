import { Link } from "react-router-dom";
import { ChevronDown, Facebook, Instagram, Mail, MapPin, MoveUpRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { LogoText } from "@/components/ui/LogoText";
import { navLinks, site } from "@/data/site";
import { services } from "@/data/services";

export function Footer() {
  return (
    <footer className="border-t border-primary/15 bg-[#0A0908]">
      <div className="container-lux grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-[1.2fr_.7fr_1fr_1.1fr]">
        <div data-reveal>
          <Link to="/" className="flex items-center gap-3">
            <LogoText size="lg" />
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-7 text-[#C4C2BA]">{site.tagline}. Premium modular interiors for homes, villas and commercial spaces in Hyderabad.</p>
          <div className="mt-6 flex gap-3">
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
        </div>

        <div className="hidden md:block" data-reveal>
          <h3 className="mb-5 font-serif text-2xl text-primary">Quick Links</h3>
          <ul className="grid gap-3 text-sm text-[#C4C2BA]">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link className="transition-colors hover:text-primary" to={link.href}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <details className="footer-accordion md:hidden" data-reveal>
          <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between border-b border-primary/18 py-3 font-serif text-2xl text-primary">
            Quick Links
            <ChevronDown className="h-4 w-4 transition-transform duration-300" />
          </summary>
          <ul className="grid gap-3 py-4 text-sm text-[#C4C2BA]">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link className="block min-h-11 transition-colors hover:text-primary" to={link.href}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </details>

        <div className="hidden md:block" data-reveal>
          <h3 className="mb-5 font-serif text-2xl text-primary">Services</h3>
          <ul className="grid gap-3 text-sm text-[#C4C2BA]">
            {services.map((service) => (
              <li key={service.slug}>
                <Link className="transition-colors hover:text-primary" to={`/services/${service.slug}`}>
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <details className="footer-accordion md:hidden" data-reveal>
          <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between border-b border-primary/18 py-3 font-serif text-2xl text-primary">
            Services
            <ChevronDown className="h-4 w-4 transition-transform duration-300" />
          </summary>
          <ul className="grid gap-3 py-4 text-sm text-[#C4C2BA]">
            {services.map((service) => (
              <li key={service.slug}>
                <Link className="block min-h-11 transition-colors hover:text-primary" to={`/services/${service.slug}`}>
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </details>

        <div data-reveal>
          <h3 className="mb-5 font-serif text-2xl text-primary">Contact</h3>
          <div className="space-y-4 text-sm leading-7 text-[#C4C2BA]">
            <p className="flex gap-3">
              <MapPin className="mt-1 h-4 w-4 shrink-0 text-primary" />
              {site.address}
            </p>
            <a className="flex gap-3 transition-colors hover:text-primary" href={`mailto:${site.email}`}>
              <Mail className="mt-1 h-4 w-4 shrink-0 text-primary" />
              {site.email}
            </a>
            <p>{site.hours}</p>
          </div>
          <Button asChild className="mt-6" variant="outline">
            <Link to="/contact">
              Start a Project <MoveUpRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
      <div className="border-t border-white/8 py-5">
        <div className="container-lux flex flex-col gap-2 text-xs text-[#8B877E] sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Dee-ART Modulars and Interiors. All rights reserved.</p>
          <p>Designed for premium residential and commercial interiors.</p>
        </div>
      </div>
    </footer>
  );
}
