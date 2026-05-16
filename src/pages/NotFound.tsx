import { Home, SearchX } from "lucide-react";
import { Link } from "react-router-dom";
import { Seo } from "@/components/layout/Seo";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <>
      <Seo title="Page Not Found | Dee-ART Modulars and Interiors" description="The page you are looking for could not be found." path="/404" />
      <section className="grid min-h-screen place-items-center bg-[#0F0E0C] px-4 pt-24 text-center">
        <div className="max-w-2xl" data-reveal>
          <div className="mx-auto grid h-20 w-20 place-items-center rounded-full border border-primary/35 bg-primary/10 text-primary">
            <SearchX className="h-9 w-9" />
          </div>
          <p className="mt-8 font-mono text-sm uppercase tracking-[.18em] text-primary">404</p>
          <h1 className="heading-lg mt-4 text-[#FDFCFA]">This Space Is Still Being Designed</h1>
          <p className="mx-auto mt-5 max-w-xl leading-8 text-[#C4C2BA]">The page may have moved, or the address may be incorrect. Return home to continue exploring Dee-ART interiors.</p>
          <Button asChild className="mt-8" size="lg">
            <Link to="/">
              <Home className="h-5 w-5" />
              Back To Home
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
