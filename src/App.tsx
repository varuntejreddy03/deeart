import { Suspense, lazy } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Toaster } from "sonner";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingActions } from "@/components/layout/FloatingActions";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import { SkeletonPage } from "@/components/ui/Skeleton";
import { useLenis } from "@/hooks/useLenis";
import { useGsapReveals } from "@/hooks/useGsapReveals";

const Home = lazy(() => import("@/pages/Home"));
const About = lazy(() => import("@/pages/About"));
const Services = lazy(() => import("@/pages/Services"));
const ServiceDetail = lazy(() => import("@/pages/ServiceDetail"));
const Portfolio = lazy(() => import("@/pages/Portfolio"));
const Contact = lazy(() => import("@/pages/Contact"));
const NotFound = lazy(() => import("@/pages/NotFound"));

function AnimatedRoutes() {
  const location = useLocation();
  useGsapReveals();

  return (
    <AnimatePresence mode="wait">
      <motion.main
        key={location.pathname}
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -18 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        <Suspense fallback={<SkeletonPage />}>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:slug" element={<ServiceDetail />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/portfolio/:id" element={<Navigate to="/portfolio" replace />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </motion.main>
    </AnimatePresence>
  );
}

export default function App() {
  useLenis();

  return (
    <div className="site-shell">
      <ScrollToTop />
      <Navbar />
      <AnimatedRoutes />
      <Footer />
      <FloatingActions />
      <Toaster richColors position="top-right" theme="dark" toastOptions={{ style: { background: "#1C1A16", borderColor: "rgba(200,169,110,.28)" } }} />
    </div>
  );
}
