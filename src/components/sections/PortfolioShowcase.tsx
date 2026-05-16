import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { portfolioProjects } from "@/data/portfolio";

export function PortfolioShowcase() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", loop: true, dragFree: true }, [Autoplay({ delay: 4200, stopOnInteraction: true })]);

  return (
    <section className="cream-section section-padding overflow-hidden">
      <div className="container-lux">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between" data-reveal>
          <div>
            <p className="eyebrow text-[#A88540]">Featured Projects</p>
            <h2 className="heading-md mt-4 max-w-2xl text-[#0F0E0C]" data-word-reveal>
              Every Space We Design Tells A Story
            </h2>
          </div>
          <div className="hidden items-center gap-3 md:flex">
            <Button variant="dark" size="icon" onClick={() => emblaApi?.scrollPrev()} aria-label="Previous project">
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <Button variant="dark" size="icon" onClick={() => emblaApi?.scrollNext()} aria-label="Next project">
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="portfolio-embla mt-12 overflow-hidden pl-[max(1rem,calc((100vw-1400px)/2))]" ref={emblaRef}>
        <div className="portfolio-track flex gap-6 pr-6">
          {portfolioProjects.slice(0, 6).map((project, index) => (
            <Link
              key={project.id}
              to="/portfolio"
              className="portfolio-card group relative min-w-[82vw] overflow-hidden rounded-lg shadow-2xl shadow-[#0F0E0C]/12 sm:min-w-[420px]"
              style={{ transform: `rotate(${index % 2 === 0 ? "-1deg" : "1deg"})` }}
              data-reveal
            >
              <img src={project.image} alt={project.title} className="portfolio-card-image h-[520px] w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F0E0C]/86 via-[#0F0E0C]/12 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <Badge>{project.category}</Badge>
                <h3 className="mt-4 font-serif text-4xl">{project.title}</h3>
                <p className="mt-2 text-sm text-[#D8D1C7]">{project.location}, Hyderabad</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary opacity-0 transition-opacity group-hover:opacity-100">
                  View Project <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
          <div className="flex min-w-[76vw] items-center justify-center rounded-lg border border-[#0F0E0C]/10 bg-[#0F0E0C] p-8 text-center sm:min-w-[360px]">
            <div>
              <p className="font-serif text-4xl text-[#F5F0E8]">More transformations</p>
              <Button asChild className="mt-6" variant="outline">
                <Link to="/portfolio">
                  See All Projects <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 flex justify-center gap-3 md:hidden">
        <Button variant="dark" size="icon" onClick={() => emblaApi?.scrollPrev()} aria-label="Previous project">
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <Button variant="dark" size="icon" onClick={() => emblaApi?.scrollNext()} aria-label="Next project">
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </section>
  );
}
