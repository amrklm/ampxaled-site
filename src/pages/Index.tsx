
import { lazy, Suspense, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HumanoidSection from "@/components/HumanoidSection";

const SpecsSection = lazy(() => import("@/components/SpecsSection"));
const DetailsSection = lazy(() => import("@/components/DetailsSection"));
const ImageShowcaseSection = lazy(() => import("@/components/ImageShowcaseSection"));
const Features = lazy(() => import("@/components/Features"));
const Testimonials = lazy(() => import("@/components/Testimonials"));
// const ImageKitDisplay = lazy(() => import("@/components/ImageKitDisplay"));

// import Newsletter from "@/components/Newsletter";
// import MadeByHumans from "@/components/MadeByHumans";
import Footer from "@/components/Footer";
import ImageKitDisplay from "@/components/ImageKitDisplay";
// import Pricing from "@/components/Pricing";
// import Imagallery from "@/components/ImageGallery";

const Index = () => {

  // Initialize intersection observer to detect when elements enter viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  useEffect(() => {
    // This helps ensure smooth scrolling for the anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href')?.substring(1);
        if (!targetId) return;

        const targetElement = document.getElementById(targetId);
        if (!targetElement) return;

        // Increased offset to account for mobile nav
        const offset = window.innerWidth < 768 ? 100 : 80;

        window.scrollTo({
          top: targetElement.offsetTop - offset,
          behavior: 'smooth'
        });
      });
    });
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="space-y-4 sm:space-y-8"> {/* Reduced space on mobile */}
        <Hero />
        <HumanoidSection />

        <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
          <SpecsSection />
        </Suspense>

        <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
          <DetailsSection />
        </Suspense>

        <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
          <ImageShowcaseSection />
        </Suspense>

        <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
          <Features />
        </Suspense>

        <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
          <Testimonials />
        </Suspense>
        {/* <Imagallery/> */}
        {/* <Pricing /> */}
        {/* <Testimonials /> */}
        {/*  <Newsletter /> */}
        {/*  <MadeByHumans /> */}
        {/* <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
          <ImageKitDisplay />
        </Suspense> */}
          <ImageKitDisplay/>
      <div id="bottom"></div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
