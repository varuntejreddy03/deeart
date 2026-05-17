import { motion } from "framer-motion";
import { ArrowUpRight, Award, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/Button";
import { CountUp } from "@/components/animations/CountUp";
import { MagneticButton } from "@/components/animations/MagneticButton";
import { TextReveal } from "@/components/animations/TextReveal";
import { images, site, stats } from "@/data/site";

export function HeroSection() {
  return (
    <section className="hero-section grain relative isolate min-h-[92vh] overflow-hidden bg-[#0F0E0C] pt-28">
      <div className="hero-decorator absolute inset-0 -z-20 bg-[radial-gradient(circle_at_8%_20%,rgba(200,169,110,.16),transparent_28rem),radial-gradient(circle_at_80%_12%,rgba(130,146,114,.13),transparent_26rem)]" />
      {[12, 26, 44, 66, 82].map((left, index) => (
        <span
          key={left}
          className="particle hero-particle"
          style={{
            left: `${left}%`,
            top: `${18 + index * 14}%`,
            animationDelay: `${index * 0.8}s`
          }}
        />
      ))}

      <div className="hero-grid container-lux grid min-h-[calc(92svh-72px)] items-center gap-12 pb-16 lg:grid-cols-[1.08fr_.92fr]">
        <div className="relative z-10">
          <motion.p
            className="eyebrow mb-5"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            Premium Interiors · Hyderabad
          </motion.p>

          <h1 className="heading-xl hidden text-balance text-[#FDFCFA] md:block">
            <TextReveal lines={["Spaces That Tell", "Your Story."]} />
          </h1>
          <h1 className="mobile-hero-title font-serif text-[#FDFCFA] md:hidden">
            <TextReveal lines={["Spaces That", "Tell Your", "Story."]} />
          </h1>

          <motion.p
            className="mt-7 max-w-2xl text-lg leading-8 text-[#D8D1C7]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.75 }}
          >
            Transforming homes, villas and offices in Hyderabad with 20+ years of design excellence. Modern interiors. Modular precision. Your vision.
          </motion.p>

          <motion.div
            className="hero-cta-row mt-9 flex flex-col gap-4 sm:flex-row"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.3, duration: 0.6 }}
          >
            <MagneticButton>
              <Button asChild size="lg">
                <Link to="/portfolio">
                  Explore Our Work <ArrowUpRight className="h-5 w-5" />
                </Link>
              </Button>
            </MagneticButton>
          </motion.div>

          <motion.div
            className="hero-stats mt-10 grid grid-cols-2 gap-3 rounded-lg border border-primary/14 bg-white/[0.045] p-3 backdrop-blur md:grid-cols-4"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.65 }}
          >
            {stats.map((stat) => (
              <div key={stat.label} className="border-white/8 px-3 py-2 md:border-r md:last:border-r-0">
                <CountUp value={stat.value} suffix={stat.suffix} className="hero-stat-number block font-serif leading-none text-primary" />
                <span className="mt-1 block max-w-full break-words text-[0.66rem] uppercase tracking-[.12em] text-[#C4C2BA] sm:text-xs sm:tracking-[.16em]">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="hero-image-wrap relative min-h-[520px] lg:min-h-[690px]"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.7, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="hero-main-image gold-border absolute inset-x-6 top-0 h-[78%] overflow-hidden rounded-[0_1.5rem_1.5rem_1.5rem] lg:inset-x-0">
            <img src={images.hero} alt="Luxury living room interior by Dee-ART Hyderabad" className="h-full w-full object-cover" loading="eager" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F0E0C]/72 via-transparent to-transparent" />
          </div>
          <motion.div
            className="hero-award-badge glass-card absolute right-0 top-[12%] flex max-w-[18rem] items-center gap-3 rounded-full px-[14px] py-2"
            initial={{ opacity: 0, scale: 0.8, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 2, type: "spring", stiffness: 180, damping: 15 }}
          >
            <Award className="h-5 w-5 text-primary" />
            <span className="text-xs font-medium">Award-Winning Design Team</span>
          </motion.div>
          <div className="hero-secondary-image absolute bottom-0 left-0 w-[58%] overflow-hidden rounded-lg border border-primary/40 shadow-2xl shadow-black/40">
            <img src={images.heroAlt} alt="Warm luxury living room by Dee-ART Hyderabad" className="aspect-[4/3] w-full object-cover" loading="lazy" />
          </div>
          <div className="hero-experience-badge glass-card absolute bottom-8 right-2 rounded-lg px-5 py-4">
            <div className="flex items-center gap-2 text-primary">
              <Sparkles className="h-4 w-4" />
              <span className="font-mono text-xs uppercase tracking-[.16em]">Since 2006</span>
            </div>
            <p className="mt-1 font-serif text-3xl">{site.experience} Years</p>
          </div>
        </motion.div>
      </div>
      <div className="absolute bottom-16 right-4 hidden rotate-90 items-center gap-3 text-xs uppercase tracking-[.34em] text-[#C4C2BA] xl:flex">
        <span className="h-px w-12 bg-primary" /> Scroll
      </div>
    </section>
  );
}
