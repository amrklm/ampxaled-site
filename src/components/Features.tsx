
import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import {ClockArrowUp, Workflow,MonitorCog,ChartNoAxesCombined,Map,MonitorSmartphone} from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const FeatureCard = ({ icon, title, description, index }: FeatureCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
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
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);
  
  return (
    <div 
      ref={cardRef}
      className={cn(
        "feature-card glass-card opacity-0 p-4 sm:p-6",
        "lg:hover:bg-gradient-to-br lg:hover:from-white lg:hover:to-pulse-50",
        "transition-all duration-300"
      )}
      style={{ animationDelay: `${0.1 * index}s` }}
    >
      <div className="rounded-full bg-pulse-50 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-pulse-500 mb-4 sm:mb-5">
        {icon}
      </div>
      <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">{title}</h3>
      <p className="text-gray-600 text-sm sm:text-base">{description}</p>
    </div>
  );
};

const Features = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll(".fade-in-element");
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add("animate-fade-in");
              }, index * 100);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  return (
    <section className="py-12 sm:py-16 md:py-20 pb-0 relative bg-gray-50" id="features" ref={sectionRef}>
      <div className="section-container">
        <div className="text-center mb-10 sm:mb-16">
          <div className="pulse-chip mx-auto mb-3 sm:mb-4 opacity-0 fade-in-element">
            <span>Features</span>
          </div>
          <h2 className="section-title mb-3 sm:mb-4 opacity-0 fade-in-element">
            At Ampxaled Studio, <br className="hidden sm:block" />we blend real-time 3D technology 
          </h2>
          <p className="section-subtitle mx-auto opacity-0 fade-in-element">
            To design and build immersive interactive tools that let customers experience your products like never before.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
         <FeatureCard
  icon={<ClockArrowUp className="w-6 h-6" />}
  title="Real-Time 3D Interaction"
  description="Let customers explore products from every angle, in real-time."
  index={0}
/>
<FeatureCard
  icon={<Workflow className="w-6 h-6" />}
  title="Seamless Web Integration"
  description="Embed interactive 3D models directly into your site or e-commerce platform."
  index={1}
/>
<FeatureCard
  icon={<MonitorCog className="w-6 h-6" />}
  title="Custom Configurators"
  description="Let users personalize colors, sizes, or features interactively."
  index={2}
/>
<FeatureCard
  icon={<ChartNoAxesCombined className="w-6 h-6" />}
  title="Analytics & Insights"
  description="Track user engagement and interaction to optimize conversions."
  index={3}
/>
<FeatureCard
  icon={<Map className="w-6 h-6" />}
  title="Custom Map"
  description="Explore projects through a fully customized satellite map featuring rich detail, live updates, and location-specific insights."
  index={4}
/>
<FeatureCard
  icon={<MonitorSmartphone className="w-6 h-6" />}
  title="Mobile & Touch Optimized"
  description="Smooth experiences on all devices, including smartphones and tablets."
  index={5}
/>

        </div>
      </div>
    </section>
  );
};

export default Features;
