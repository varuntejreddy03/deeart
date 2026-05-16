import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ClipboardList, Hammer, KeyRound, PencilRuler } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    label: "Briefing",
    title: "Initial Consultation",
    desc: "We begin with a detailed understanding of your needs, lifestyle, vision and budget.",
    icon: ClipboardList
  },
  {
    label: "Design",
    title: "Design & Mood Boards",
    desc: "Our architects craft mood boards, 3D layouts and material palettes for your approval.",
    icon: PencilRuler
  },
  {
    label: "Execution",
    title: "Precision Execution",
    desc: "Our skilled team brings every detail to life with premium materials and quality control.",
    icon: Hammer
  },
  {
    label: "Handover",
    title: "Final Handover",
    desc: "Your dream space is delivered on time, polished, styled and move-in ready.",
    icon: KeyRound
  }
];

export function ProcessTimeline({ detailed = false }: { detailed?: boolean }) {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const verticalLineRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        lineRef.current,
        { scaleX: 0, transformOrigin: "left center" },
        {
          scaleX: 1,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 58%",
            end: "bottom 70%",
            scrub: true
          }
        }
      );
      gsap.fromTo(
        verticalLineRef.current,
        { scaleY: 0, transformOrigin: "top center" },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 62%",
            end: "bottom 75%",
            scrub: true
          }
        }
      );
      gsap.fromTo(
        ".timeline-step",
        { autoAlpha: 0, y: 36 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.75,
          stagger: 0.16,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 65%",
            once: true
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding overflow-hidden bg-[#0F0E0C]">
      <div className="container-lux">
        <div className="border-l-2 border-primary pl-6" data-reveal>
          <p className="eyebrow">Our Process</p>
          <h2 className="heading-md mt-4 max-w-3xl text-[#FDFCFA]" data-word-reveal>
            From First Brief To Final Handover
          </h2>
        </div>

        <div className="relative mt-16">
          <div className="absolute left-[12.5%] right-[12.5%] top-10 hidden h-px bg-white/10 lg:block">
            <div ref={lineRef} className="h-full bg-primary" />
          </div>
          <div className="absolute bottom-8 left-7 top-0 w-px bg-white/10 lg:hidden">
            <div ref={verticalLineRef} className="h-full w-full bg-primary" />
          </div>

          <div className="process-steps grid gap-8 lg:grid-cols-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <article key={step.label} className="timeline-step relative flex gap-5 pl-20 lg:block lg:pl-0">
                  <div className="timeline-icon absolute left-0 top-0 z-10 grid h-14 w-14 place-items-center rounded-full border border-primary/45 bg-[#0F0E0C] text-primary lg:relative lg:mx-auto">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="timeline-card glass-card rounded-lg p-6 lg:mt-8">
                    <span className="font-mono text-xs uppercase tracking-[.18em] text-primary">0{index + 1} · {step.label}</span>
                    <h3 className="mt-4 font-serif text-3xl text-[#FDFCFA]">{step.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-[#C4C2BA]">{step.desc}</p>
                    {detailed ? <p className="mt-4 text-xs uppercase tracking-[.16em] text-[#8F8A80]">Milestone tracked with clear approvals</p> : null}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
