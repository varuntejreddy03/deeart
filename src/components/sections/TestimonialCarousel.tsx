import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Star } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { testimonials } from "@/data/testimonials";

export function TestimonialCarousel() {
  const [emblaRef] = useEmblaCarousel({ align: "start", loop: true }, [Autoplay({ delay: 5000, stopOnInteraction: true })]);

  return (
    <section className="section-padding bg-[#1C1A16]">
      <div className="container-lux">
        <div className="mx-auto max-w-3xl text-center" data-reveal>
          <p className="eyebrow justify-center">Client Words</p>
          <h2 className="heading-md mt-4 text-primary" data-word-reveal>
            What Our Clients Say
          </h2>
        </div>

        <div className="testimonials-embla mt-12 overflow-hidden" ref={emblaRef}>
          <div className="testimonials-track flex gap-5 lg:grid lg:grid-cols-3">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <article
                key={testimonial.name}
                className="testimonial-card glass-card min-w-[86vw] rounded-lg p-7 sm:min-w-[420px] lg:min-w-0"
                data-reveal
                style={{ transform: index === 1 ? "translateY(24px)" : undefined }}
              >
                <div className="flex gap-1 text-primary">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star key={starIndex} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="testimonial-quote mt-6 font-display text-2xl italic leading-9 text-[#F5F0E8]">"{testimonial.quote}"</p>
                <div className="mt-8 flex items-center justify-between gap-4">
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-sm text-[#C4C2BA]">{testimonial.project}</p>
                  </div>
                  <Badge>Verified</Badge>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
