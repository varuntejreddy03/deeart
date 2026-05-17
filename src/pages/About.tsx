import { Award, BadgeCheck, Clock3, Handshake, IndianRupee, ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { Seo } from "@/components/layout/Seo";
import { CTABanner } from "@/components/sections/CTABanner";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { StatsCounter } from "@/components/sections/StatsCounter";
import { Card } from "@/components/ui/Card";
import { images } from "@/data/site";

const differentiators = [
  { icon: Award, title: "20+ Years Expertise", desc: "Long-running site and design experience across Hyderabad homes and commercial spaces." },
  { icon: BadgeCheck, title: "Architects & Designers", desc: "A practical team that can think through layouts, finishes, lighting and execution details." },
  { icon: Handshake, title: "Turnkey Solutions", desc: "One accountable team for concept, materials, execution, styling and handover." },
  { icon: Clock3, title: "On-Time Delivery", desc: "Milestone-led planning keeps decisions, procurement and site work moving." },
  { icon: IndianRupee, title: "Transparent Budgets", desc: "Clear scopes and material options help you make informed decisions without guesswork." },
  { icon: ShieldCheck, title: "Post-Handover Support", desc: "We stay available after delivery for guidance, adjustments and care recommendations." }
];

export default function About() {
  return (
    <>
      <Seo
        title="About Dee-ART Modulars and Interiors | Hyderabad Interior Designers"
        description="Meet Dee-ART Modulars and Interiors, a Hyderabad interior design company with 20+ years of experience in modular and turnkey interiors."
        path="/about"
      />
      <PageHero
        eyebrow="About Us"
        title="Design Intelligence, Modular Precision And Human Warmth"
        description="We design homes, villas and commercial interiors that feel premium without losing everyday practicality."
        image={images.bedroom}
      />

      <section className="cream-section section-padding">
        <div className="container-lux grid items-center gap-12 lg:grid-cols-[.9fr_1fr]">
          <div className="overflow-hidden rounded-lg border border-[#C8A96E]/45 shadow-2xl" data-reveal>
            <img src={images.lobby} alt="Interior design by Dee-ART Hyderabad" className="aspect-[4/5] h-full w-full object-cover" loading="lazy" />
          </div>
          <div data-reveal>
            <p className="eyebrow text-[#A88540]">Who We Are</p>
            <h2 className="heading-md mt-4 text-[#0F0E0C]" data-word-reveal>
              Interiors That Respect How People Actually Live
            </h2>
            <div className="mt-6 space-y-5 leading-8 text-[#4B463D]">
              <p>
                Dee-ART Modulars and Interiors is a premium interior design company based in Gachibowli, Hyderabad. We bring together creative design, modular engineering and detail-oriented execution for spaces that feel composed and functional.
              </p>
              <p>
                Our work spans modular kitchens, wardrobes, living rooms, bedrooms, commercial interiors, automation and complete turnkey projects. Every project begins with a clear brief and ends with a polished handover.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#1C1A16]">
        <div className="container-lux grid gap-5 lg:grid-cols-2">
          {["Mission", "Vision"].map((title, index) => (
            <Card key={title} className="glass-card rounded-lg p-8" data-reveal>
              <p className="font-mono text-xs uppercase tracking-[.18em] text-primary">{title}</p>
              <h3 className="mt-4 font-serif text-4xl text-[#FDFCFA]">{index === 0 ? "Design spaces with purpose." : "Set a higher standard for Hyderabad interiors."}</h3>
              <p className="mt-4 leading-8 text-[#C4C2BA]">
                {index === 0
                  ? "We create interiors that balance beauty, comfort, budget and long-term usability."
                  : "We aim to make premium design more precise, transparent and dependable from brief to handover."}
              </p>
            </Card>
          ))}
        </div>
      </section>

      <section className="section-padding bg-[#0F0E0C]">
        <div className="container-lux">
          <div className="mx-auto max-w-3xl text-center" data-reveal>
            <p className="eyebrow justify-center">Why Choose Us</p>
            <h2 className="heading-md mt-4 text-[#FDFCFA]" data-word-reveal>
              Calm Process. Premium Finish. Practical Details.
            </h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {differentiators.map((item) => {
              const Icon = item.icon;
              return (
                <Card key={item.title} className="glass-card rounded-lg p-6" data-reveal>
                  <Icon className="h-7 w-7 text-primary" />
                  <h3 className="mt-5 font-serif text-3xl text-[#FDFCFA]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#C4C2BA]">{item.desc}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <StatsCounter />
      <ProcessTimeline detailed />
      <CTABanner title="Let Your Space Work Harder And Look Better" subtitle="Speak with Dee-ART about a modular, turnkey or commercial interior project in Hyderabad." />
    </>
  );
}
