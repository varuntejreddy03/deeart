import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/Button";
import { MagneticButton } from "@/components/animations/MagneticButton";
import { images } from "@/data/site";

type CTABannerProps = {
  title?: string;
  subtitle?: string;
};

export function CTABanner({ title = "Ready to Transform Your Space?", subtitle = "Book a consultation with our design team today." }: CTABannerProps) {
  return (
    <section className="cta-banner relative isolate overflow-hidden py-24">
      <img src={images.office} alt="" className="absolute inset-0 -z-20 h-full w-full object-cover" loading="lazy" />
      <div className="absolute inset-0 -z-10 bg-[#0F0E0C]/78" />
      {[18, 41, 64, 83].map((left, index) => (
        <span key={left} className="particle" style={{ left: `${left}%`, top: `${28 + index * 12}%`, animationDelay: `${index * 0.7}s` }} />
      ))}
      <div className="container-lux text-center" data-reveal>
        <p className="eyebrow justify-center">Start With Dee-ART</p>
        <h2 className="heading-md mx-auto mt-4 max-w-4xl text-[#FDFCFA]" data-word-reveal>
          {title}
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#D8D1C7]">{subtitle}</p>
        <div className="cta-actions mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <MagneticButton>
            <Button asChild size="lg">
              <Link to="/contact">
                Get a Quote <ArrowUpRight className="h-5 w-5" />
              </Link>
            </Button>
          </MagneticButton>
          <MagneticButton>
            <Button asChild variant="secondary" size="lg">
              <a href="mailto:deeartmodularsandinteriors2026@gmail.com">Email Us Now</a>
            </Button>
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
