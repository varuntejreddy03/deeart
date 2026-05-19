import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { LogoText } from "@/components/ui/LogoText";
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
          isScrolled ? "border-b border-primary/15 bg-[#000000] shadow-2xl shadow-black/20" : "bg-[#000000]"
        )}
      >
        <nav className="container-lux flex h-full items-center justify-between gap-6">
          <Link
            to="/"
            className="logo-badge group relative flex items-center gap-3 rounded-md border border-[rgba(212,175,55,0.2)] bg-[rgba(0,0,0,0.55)] px-3.5 py-2 backdrop-blur-md transition-all duration-500 hover:-translate-y-0.5 hover:border-[rgba(212,175,55,0.4)] hover:shadow-[0_4px_20px_rgba(212,175,55,0.08)]"
            aria-label="Dee-ART home"
          >
            <span className="pointer-events-none absolute -top-6 left-1/2 -z-10 h-12 w-24 -translate-x-1/2 rounded-full bg-[rgba(212,175,55,0.12)] blur-xl" />
            <span className="pointer-events-none absolute inset-0 -z-10 rounded-md bg-[radial-gradient(circle_at_50%_0%,rgba(212,175,55,0.1),transparent_60%)]" />
            <LogoText size="sm" />
          </Link>

          <div className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                end={link.href === "/"}
                className={({ isActive }) =>
                  cn("group relative py-2 font-sans text-[16px] font-semibold text-[#F5F0E8] transition-colors duration-300 ease-in-out hover:text-[#D4AF37]", isActive && "active text-[#D4AF37]")
                }
              >
                {link.label}
                <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-[#D4AF37] transition-transform duration-300 ease-in-out group-hover:scale-x-100" />
                <span className="absolute left-1/2 top-full mt-1 hidden h-1 w-1 -translate-x-1/2 rounded-full bg-[#D4AF37] group-[.active]:block" />
              </NavLink>
            ))}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <Button asChild variant="ghost" size="icon" aria-label="Call Dee-ART">
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
                <Link
                  to="/"
                  className="logo-badge flex items-center gap-3 rounded-md border border-[rgba(212,175,55,0.2)] bg-[rgba(0,0,0,0.55)] px-3 py-1.5 backdrop-blur-md"
                >
                  <LogoText size="sm" />
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
