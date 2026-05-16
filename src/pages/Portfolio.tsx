import { useMemo, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Masonry from "react-masonry-css";
import { ArrowUpRight, Maximize2 } from "lucide-react";
import { Link } from "react-router-dom";
import { PageHero } from "@/components/layout/PageHero";
import { Seo } from "@/components/layout/Seo";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { CTABanner } from "@/components/sections/CTABanner";
import { images } from "@/data/site";
import { portfolioFilters, portfolioProjects, type PortfolioCategory } from "@/data/portfolio";
import { cn } from "@/utils/cn";

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<(typeof portfolioFilters)[number]>("All");
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return portfolioProjects;
    return portfolioProjects.filter((project) => project.category === (activeFilter as PortfolioCategory));
  }, [activeFilter]);

  const slides = filteredProjects.map((project) => ({ src: project.image, title: project.title, description: project.story }));

  return (
    <>
      <Seo
        title="Interior Design Portfolio | Dee Art Modulars and Interiors Hyderabad"
        description="Browse Dee Art Modulars and Interiors portfolio across kitchens, bedrooms, living rooms, offices and full home interiors in Hyderabad."
        path="/portfolio"
      />
      <PageHero
        eyebrow="Portfolio"
        title="Interior Work Shaped Around Real Homes"
        description="Explore a curated gallery of modular kitchens, bedroom suites, living rooms, office interiors and turnkey transformations."
        image={images.living}
      />

      <section className="section-padding cream-section">
        <div className="container-lux">
          <div className="sticky top-24 z-20 mb-10 flex flex-wrap gap-3 rounded-lg border border-[#0F0E0C]/10 bg-[#F5F0E8]/86 p-3 backdrop-blur" data-reveal>
            {portfolioFilters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={cn(
                  "rounded-md px-4 py-2 text-sm font-semibold transition-colors",
                  activeFilter === filter ? "bg-[#0F0E0C] text-[#F5F0E8]" : "text-[#2C2A24] hover:bg-[#0F0E0C]/8"
                )}
              >
                {filter}
              </button>
            ))}
          </div>

          <Masonry breakpointCols={{ default: 3, 1100: 2, 700: 1 }} className="masonry-grid" columnClassName="masonry-grid_column">
            {filteredProjects.map((project, index) => (
              <article
                key={project.id}
                className="group relative cursor-pointer overflow-hidden rounded-lg border border-[#0F0E0C]/10 bg-white shadow-xl shadow-[#0F0E0C]/8"
                onClick={() => setLightboxIndex(index)}
                data-reveal
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className={cn(
                    "w-full object-cover transition-transform duration-700 group-hover:scale-105",
                    project.height === "tall" && "h-[560px]",
                    project.height === "medium" && "h-[430px]",
                    project.height === "wide" && "h-[360px]"
                  )}
                  loading="lazy"
                />
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-[#0F0E0C]/88 via-[#0F0E0C]/24 to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <Badge>{project.category}</Badge>
                  <h3 className="mt-4 font-serif text-4xl text-white">{project.title}</h3>
                  <p className="mt-1 text-sm text-[#D8D1C7]">{project.location} · {project.area} · {project.duration}</p>
                  <p className="mt-3 line-clamp-2 text-sm leading-6 text-[#F5F0E8]">{project.story}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                    Open Gallery <Maximize2 className="h-4 w-4" />
                  </span>
                </div>
              </article>
            ))}
          </Masonry>

          <div className="mt-12 text-center" data-reveal>
            <Button asChild size="lg" variant="dark">
              <Link to="/contact">
                Start Your Project <ArrowUpRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Lightbox open={lightboxIndex >= 0} close={() => setLightboxIndex(-1)} slides={slides} index={lightboxIndex < 0 ? 0 : lightboxIndex} />
      <CTABanner title="Your Project Deserves A Portfolio-Level Finish" subtitle="Share your requirements and Dee Art will help shape the right design direction." />
    </>
  );
}
