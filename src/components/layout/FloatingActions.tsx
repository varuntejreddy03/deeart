import { useEffect, useMemo, useState } from "react";
import { ArrowUp, MessageCircle } from "lucide-react";
import { site } from "@/data/site";
import { cn } from "@/utils/cn";

export function FloatingActions() {
  const [showTop, setShowTop] = useState(false);
  const whatsappUrl = useMemo(() => {
    const message = encodeURIComponent("Hi! I'm interested in interior design services. Can you please share more details?");
    return `https://wa.me/${site.whatsappNumber}?text=${message}`;
  }, []);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="floating-actions fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      <button
        type="button"
        aria-label="Scroll to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={cn(
          "scroll-top-button grid h-11 w-11 place-items-center rounded-full border border-primary/35 bg-[#0F0E0C]/85 text-primary shadow-2xl backdrop-blur transition-all duration-300",
          showTop ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
        )}
      >
        <ArrowUp className="h-4 w-4" />
      </button>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Message Dee-ART on WhatsApp"
        className="whatsapp-button whatsapp-pulse grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-2xl shadow-black/40 transition-transform hover:scale-105"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </div>
  );
}
