import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { navLinks, site } from "@/data/site";
import { cn } from "@/utils/cn";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setIsOpen(false), [location.pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.65, ease: "easeOut", delay: 0.2 }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 h-[72px] transition-all duration-300 ease-in-out",
          isScrolled ? "border-b border-primary/15 bg-[rgba(15,14,12,0.85)] shadow-2xl shadow-black/20 backdrop-blur-[16px]" : "bg-transparent"
        )}
      >
        <nav className="container-lux flex h-full items-center justify-between gap-6">
          <Link to="/" className="group flex max-w-[140px] items-center gap-3 md:max-w-none" aria-label="Dee Art home">
            <img src="/logo.svg" alt="" className="h-10 w-10 shrink-0" />
            <span className="leading-none">
              <span className="block font-serif text-[18px] font-bold text-[#FDFCFA]">DEE ART</span>
              <span className="hidden font-mono text-[9px] uppercase tracking-[0.2em] text-[#C8A96E] sm:block">Modulars & Interiors</span>
            </span>
          </Link>

          <div className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                end={link.href === "/"}
                className={({ isActive }) =>
                  cn("group relative py-2 font-sans text-[14px] font-normal text-[#C4C2BA] transition-colors duration-300 ease-in-out hover:text-[#C8A96E]", isActive && "active text-[#C8A96E]")
                }
              >
                {link.label}
                <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-[#C8A96E] transition-transform duration-300 ease-in-out group-hover:scale-x-100" />
                <span className="absolute left-1/2 top-full mt-1 hidden h-1 w-1 -translate-x-1/2 rounded-full bg-[#C8A96E] group-[.active]:block" />
              </NavLink>
            ))}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <Button asChild variant="ghost" size="icon" aria-label="Call Dee Art">
              <a href={`mailto:${site.email}`}>
                <Phone className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="outline" className="h-auto min-h-0 rounded-md px-[22px] py-2.5 font-sans text-[13px] font-medium uppercase tracking-[0.08em]">
              <Link to="/contact">
                Get a Quote <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          <Button variant="secondary" size="icon" className="h-11 w-11 border-primary/40 text-[#C8A96E] lg:hidden" onClick={() => setIsOpen(true)} aria-label="Open navigation menu">
            <Menu className="h-6 w-6" />
          </Button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            className="fixed inset-0 z-[9999] bg-[#0F0E0C] lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="container-lux flex h-full flex-col py-6">
              <div className="flex items-center justify-between">
                <Link to="/" className="flex max-w-[140px] items-center gap-3">
                  <img src="/logo.svg" alt="" className="h-10 w-10" />
                  <span className="font-serif text-[18px] font-bold">DEE ART</span>
                </Link>
                <Button variant="secondary" size="icon" className="text-[#C8A96E]" onClick={() => setIsOpen(false)} aria-label="Close navigation menu">
                  <X className="h-6 w-6" />
                </Button>
              </div>
              <div className="flex flex-1 flex-col items-center justify-center gap-6 text-center">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ y: 18, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 * index, duration: 0.35, ease: "easeOut" }}
                  >
                    <Link to={link.href} className="block min-h-11 py-1 font-serif text-[32px] leading-tight text-[#FDFCFA]">
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
              <div className="mt-auto grid gap-3 pb-4">
                <Button asChild size="lg" className="w-full">
                  <Link to="/contact">Get a Quote</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
