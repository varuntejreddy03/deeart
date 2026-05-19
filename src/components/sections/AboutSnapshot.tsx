import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/Button";
import { images } from "@/data/site";

const highlights = [
  "Experienced Architects & Interior Professionals",
  "End-to-End Interior Solutions",
  "Modern Design + Smart Functionality",
  "Tailored to Every Budget & Lifestyle"
];

export function AboutSnapshot() {
  return (
    <section className="cream-section section-padding overflow-hidden">
      <div className="container-lux grid items-center gap-12 lg:grid-cols-[.9fr_1fr]">
        <div className="about-collage relative min-h-[520px]" data-reveal>
          <div className="absolute left-0 top-0 w-[72%] overflow-hidden rounded-lg border border-[#C8A96E]/50">
            <img src="/WhatsApp Image 2026-05-17 at 11.08.33 AM (1).jpeg" alt="Custom display unit by Dee-ART Hyderabad" className="aspect-[4/5] h-full w-full object-cover" loading="lazy" />
          </div>
          <div className="absolute bottom-0 right-0 w-[58%] overflow-hidden rounded-lg border-8 border-[#F5F0E8] shadow-2xl">
            <img src="/WhatsApp Image 2026-05-17 at 11.08.33 AM (2).jpeg" alt="Modern living room interior by Dee-ART Hyderabad" className="aspect-[4/5] h-full w-full object-cover" loading="lazy" />
          </div>
        </div>

        <div className="relative" data-reveal>
          <span className="about-watermark absolute -right-8 -top-20 font-serif text-[14rem] leading-none text-[#C8A96E]/10">12</span>
          <p className="eyebrow relative mb-4 text-[#A88540]">Who We Are</p>
          <h2 className="heading-md relative max-w-3xl text-[#0F0E0C]" data-word-reveal>
            Crafting Interiors With 12+ Years of Expertise
          </h2>
          <div className="relative mt-6 space-y-5 text-base leading-8 text-[#4B463D]">
            <p>
              Dee-ART Modulars and Interiors creates residential and commercial interiors that feel refined, functional and deeply personal. From the first layout to the final handle, every detail is shaped for real life.
            </p>
            <p>
              Our Hyderabad team blends architectural thinking, modular precision and site execution discipline to deliver spaces that stay beautiful long after handover.
            </p>
          </div>
          <div className="about-bullets relative mt-7 grid gap-3 sm:grid-cols-2">
            {highlights.map((item) => (
              <div key={item} className="flex gap-3 rounded-lg border border-[#0F0E0C]/10 bg-white/45 p-4">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#A88540]" />
                <span className="text-base font-medium leading-6 text-[#252019]">{item}</span>
              </div>
            ))}
          </div>
          <Button asChild variant="dark" className="about-story-button relative mt-8 border border-[#0F0E0C] bg-[#0F0E0C] !text-[#FDFCFA] hover:bg-black hover:!text-[#FDFCFA]">
            <Link to="/about">
              Discover Our Story <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
