import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useGsapReveals() {
  const location = useLocation();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((element) => {
        gsap.fromTo(
          element,
          { autoAlpha: 0, y: 34 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 82%",
              once: true
            }
          }
        );
      });

      gsap.utils.toArray<HTMLElement>("[data-word-reveal]").forEach((element) => {
        const words = element.textContent?.trim().split(/\s+/) ?? [];
        if (!words.length || element.dataset.splitDone === "true") return;
        element.dataset.splitDone = "true";
        element.innerHTML = words
          .map((word) => `<span class="inline-block overflow-hidden"><span class="word inline-block">${word}</span></span>`)
          .join(" ");

        gsap.fromTo(
          element.querySelectorAll(".word"),
          { yPercent: 110, opacity: 0 },
          {
            yPercent: 0,
            opacity: 1,
            duration: 0.75,
            stagger: 0.045,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 84%",
              once: true
            }
          }
        );
      });
    });

    const refresh = window.setTimeout(() => ScrollTrigger.refresh(), 80);

    return () => {
      window.clearTimeout(refresh);
      ctx.revert();
    };
  }, [location.pathname]);
}
