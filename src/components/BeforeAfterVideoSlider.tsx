"use client";

import React, { useState, useRef, useEffect } from "react";
import { Sparkles, SlidersHorizontal, Flame } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const BeforeAfterVideoSlider: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(65);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top 85%",
            },
          }
        );
      }

      if (containerRef.current) {
        // Animate slider position automatically when scrolling into view
        const obj = { val: 80 };
        gsap.to(obj, {
          val: 35,
          duration: 1.8,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
          },
          onUpdate: () => {
            setSliderPosition(obj.val);
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  return (
    <section
      ref={sectionRef}
      id="compare"
      className="py-24 bg-[#F4F5FA] relative overflow-hidden border-t border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-bebas text-5xl sm:text-7xl text-slate-950 uppercase tracking-tight">
            SEE THE <span className="text-[#EE1C25]">MOTION MAGIC</span> DIFFERENCE
          </h2>
          <p className="mt-3 text-slate-600 font-sans text-base sm:text-lg font-normal">
            Drag the slider across to see raw unedited camera footage upgraded with our custom 3D motion graphics, kinetic typography & color grading.
          </p>
        </div>

        {/* Interactive Comparison Container */}
        <div
          ref={containerRef}
          onMouseDown={() => setIsDragging(true)}
          onMouseUp={() => setIsDragging(false)}
          onMouseLeave={() => setIsDragging(false)}
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
          className="relative w-full max-w-5xl mx-auto aspect-[16/9] rounded-3xl overflow-hidden border-2 border-slate-700 shadow-2xl select-none cursor-ew-resize bg-black"
        >
          {/* AFTER SIDE (Full Width Layer on bottom): Polished Motion Graphics */}
          <div className="absolute inset-0 w-full h-full bg-[#0E1220]">
            <img
              src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1600&q=80"
              alt="Final Motion Edit"
              className="w-full h-full object-cover filter brightness-110 contrast-125 saturate-150"
            />
            
            {/* Glowing Motion Graphics Overlays on After Side */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#EE1C25]/30 via-transparent to-[#CCFF00]/20 mix-blend-screen" />
            
            <div className="absolute bottom-12 right-12 bg-[#08090E]/90 border border-[#CCFF00] text-white p-4 rounded-2xl shadow-2xl backdrop-blur-md">
              <div className="text-[#CCFF00] text-xs font-mono font-bold uppercase">✦ 3D MOTION GRADED</div>
              <div className="font-bebas text-xl">KINETIC SOUND + VFX ADDED</div>
            </div>

            {/* Label for After Side */}
            <div className="absolute top-6 right-6 bg-[#EE1C25] text-white font-bebas text-lg tracking-wider px-4 py-1.5 rounded-lg shadow-xl z-20">
              AFTER: MOTION MEDIA EDIT
            </div>
          </div>

          {/* BEFORE SIDE (Clipped Layer on top): Raw Unedited Footage */}
          <div
            className="absolute inset-0 w-full h-full overflow-hidden bg-slate-900"
            style={{ width: `${sliderPosition}%` }}
          >
            <img
              src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1600&q=80"
              alt="Raw Footage"
              className="absolute top-0 left-0 max-w-none h-full object-cover filter grayscale contrast-75 brightness-75"
              style={{ width: containerRef.current ? containerRef.current.clientWidth : "100%" }}
            />
            {/* Label for Before Side */}
            <div className="absolute top-6 left-6 bg-slate-900/90 border border-slate-700 text-slate-300 font-bebas text-lg tracking-wider px-4 py-1.5 rounded-lg shadow-xl z-20">
              BEFORE: RAW CAMERA CLIP
            </div>
          </div>

          {/* Vertical Slider Separator Line */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-gradient-to-b from-[#EE1C25] via-white to-[#CCFF00] shadow-[0_0_15px_rgba(238,28,37,1)] z-30 pointer-events-none"
            style={{ left: `${sliderPosition}%` }}
          >
            {/* Handle Button in middle */}
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-[#08090E] border-2 border-white shadow-2xl flex items-center justify-center text-white">
              <SlidersHorizontal className="w-5 h-5 text-[#CCFF00]" />
            </div>
          </div>
        </div>

        {/* Footer info under comparison */}
        <div className="mt-8 flex items-center justify-center gap-6 text-slate-600 text-xs sm:text-sm font-medium">
          <span className="flex items-center gap-1.5">
            <Flame className="w-4 h-4 text-[#EE1C25]" />
            Real 4K Render Comparison
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-[#2B388F]" />
            Drag left & right to inspect details
          </span>
        </div>

      </div>
    </section>
  );
};
