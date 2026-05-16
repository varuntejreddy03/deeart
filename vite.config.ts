import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": "/src"
    }
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          "vendor-react": ["react", "react-dom", "react-router-dom"],
          "vendor-animation": ["framer-motion", "gsap", "@gsap/react", "lenis"],
          "vendor-forms": ["react-hook-form", "@hookform/resolvers", "zod"],
          "vendor-gallery": ["embla-carousel-react", "embla-carousel-autoplay", "yet-another-react-lightbox", "react-masonry-css"],
          "vendor-ui": ["lucide-react", "sonner", "@radix-ui/react-slot", "@radix-ui/react-accordion"]
        }
      }
    }
  }
});
