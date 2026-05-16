import { Link, useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { images } from "@/data/site";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
  image?: string;
};

export function PageHero({ eyebrow, title, description, image = images.pageHero }: PageHeroProps) {
  const navigate = useNavigate();

  const goBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
      return;
    }
    navigate("/");
  };

  return (
    <section className="relative isolate min-h-[64vh] overflow-hidden bg-[#0F0E0C] pt-28">
      <img src={image} alt="" className="absolute inset-0 -z-20 h-full w-full object-cover opacity-42" loading="eager" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(15,14,12,.95),rgba(15,14,12,.72),rgba(15,14,12,.45))]" />
      <div className="container-lux flex min-h-[calc(64vh-7rem)] flex-col justify-end pb-16">
        <button
          type="button"
          onClick={goBack}
          className="mb-8 inline-flex min-h-11 w-fit items-center gap-2 rounded-full border border-primary/35 bg-[#0F0E0C]/55 px-4 py-2 text-sm font-medium text-primary backdrop-blur transition-colors hover:border-primary hover:bg-primary/10 md:hidden"
          aria-label="Go back"
          data-reveal
        >
          <ChevronLeft className="h-4 w-4" />
          Back
        </button>
        <div className="mb-8 hidden items-center gap-2 text-sm text-[#C4C2BA] md:flex" data-reveal>
          <Link to="/" className="transition-colors hover:text-primary">
            Home
          </Link>
          <ChevronRight className="h-4 w-4 text-primary" />
          <span>{title}</span>
        </div>
        {eyebrow ? (
          <p className="eyebrow mb-4" data-reveal>
            {eyebrow}
          </p>
        ) : null}
        <h1 className="heading-lg max-w-4xl text-[#FDFCFA]" data-word-reveal>
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-[#D8D1C7]" data-reveal>
          {description}
        </p>
      </div>
    </section>
  );
}
