import { CountUp } from "@/components/animations/CountUp";
import { stats } from "@/data/site";

export function StatsCounter() {
  return (
    <section className="section-padding bg-[#0F0E0C]">
      <div className="container-lux">
        <div className="grid gap-4 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="glass-card rounded-lg p-8 text-center" data-reveal>
              <CountUp value={stat.value} suffix={stat.suffix} className="font-serif text-6xl leading-none text-primary" />
              <p className="mt-3 text-sm uppercase tracking-[.16em] text-[#C4C2BA]">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
