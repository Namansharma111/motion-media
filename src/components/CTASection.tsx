"use client";

import React, { useEffect, useRef } from "react";
import { ArrowRight, Play, Zap, ShieldCheck, Star, Award } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface CTASectionProps {
  onOpenBrief: () => void;
  onOpenReel: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onOpenBrief, onOpenReel }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const pillsRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const orbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (titleRef.current) {
        gsap.fromTo(
          titleRef.current,
          { opacity: 0, y: 50, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.0,
            ease: "power3.out",
            scrollTrigger: {
              trigger: titleRef.current,
              start: "top 80%",
            },
          }
        );
      }

      if (pillsRef.current) {
        gsap.fromTo(
          pillsRef.current.children,
          { opacity: 0, y: 20, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            stagger: 0.1,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: pillsRef.current,
              start: "top 85%",
            },
          }
        );
      }

      if (buttonsRef.current) {
        gsap.fromTo(
          buttonsRef.current.children,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.15,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: buttonsRef.current,
              start: "top 85%",
            },
          }
        );
      }

      if (orbRef.current && sectionRef.current) {
        gsap.to(orbRef.current, {
          scale: 1.3,
          y: -50,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 sm:py-36 bg-[#F4F5FA] bg-noise relative overflow-hidden border-t border-slate-200 select-none"
    >
      {/* Studio Soft Glow Orbs */}
      <div
        ref={orbRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-gradient-to-r from-[#EE1C25]/15 via-[#2B388F]/15 to-[#82C400]/20 blur-[140px] pointer-events-none rounded-full"
      />
      <div className="absolute top-10 right-10 w-96 h-96 bg-[#2B388F]/10 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Open Studio Typography */}
        <div ref={titleRef} className="max-w-5xl mx-auto">
          <h2 className="font-bebas text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-slate-950 uppercase tracking-tight leading-[0.88] drop-shadow-xs">
            READY TO DOMINATE YOUR MARKET WITH{" "}
            <span className="text-[#EE1C25] relative inline-block">
              MOTION & KINETIC VIDEO?
              
              {/* Ultra Smooth GPU-Accelerated SVG Underline Motion */}
              <span className="absolute -bottom-3 left-0 right-0 h-5 pointer-events-none overflow-visible">
                <svg
                  viewBox="0 0 520 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full preserve-3d filter drop-shadow-[0_4px_10px_rgba(238,28,37,0.35)]"
                >
                  {/* Main Vibrant Gradient Line (Self-Drawing Animation) */}
                  <path
                    className="animate-draw-line"
                    d="M6 14 C100 2, 180 24, 260 12 C340 0, 420 22, 514 8"
                    stroke="url(#cta-motion-underline-grad-main)"
                    strokeWidth="6"
                    strokeLinecap="round"
                  />
                  {/* Secondary Kinetic Dashed Flow Line */}
                  <path
                    className="animate-dashed-flow"
                    d="M25 19 C120 9, 200 25, 290 14 C380 3, 450 18, 505 12"
                    stroke="#CCFF00"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    opacity="0.9"
                    strokeDasharray="8 5"
                  />
                  
                  <defs>
                    <linearGradient id="cta-motion-underline-grad-main" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#EE1C25" />
                      <stop offset="35%" stopColor="#2B388F" />
                      <stop offset="75%" stopColor="#CCFF00" />
                      <stop offset="100%" stopColor="#EE1C25" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Smooth Gliding Neon Sparkle Dot */}
                <span className="absolute -top-1.5 left-2 w-3.5 h-3.5 rounded-full bg-[#CCFF00] shadow-[0_0_14px_#CCFF00] animate-spark-glide" />

                {/* Endpoint Accents */}
                <span className="absolute -top-2 -left-2 text-[#EE1C25] text-xs animate-pulse font-mono">
                  ✦
                </span>
                <span className="absolute -top-2 -right-2 text-[#CCFF00] text-xs animate-pulse font-mono">
                  ✦
                </span>
              </span>
            </span>
          </h2>

          <p className="mt-8 text-slate-600 font-sans text-lg sm:text-2xl max-w-3xl mx-auto font-normal leading-relaxed">
            Elevate your products, YouTube channel, and brand ad campaigns into{" "}
            <strong className="text-slate-900 font-semibold">hyper-engaging motion art</strong>. 
            Product Photoshoots, Commercial Videos & 3D Visual Effects.
          </p>
        </div>

        {/* Clean Studio Trust Pills */}
        <div
          ref={pillsRef}
          className="mt-10 flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm font-medium text-slate-700"
        >
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-md">
            <Zap className="w-4 h-4 text-[#EE1C25]" />
            <span className="font-bold text-slate-800">48-HR EXPRESS DELIVERY</span>
          </div>

          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-md">
            <Award className="w-4 h-4 text-[#2B388F]" />
            <span className="font-bold text-slate-800">120M+ VIEWS GENERATED</span>
          </div>

          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-md">
            <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
            <span className="font-bold text-slate-800">4.9/5 RATED BY 200+ BRANDS</span>
          </div>
        </div>

        {/* Studio High-Converting Action Buttons */}
        <div
          ref={buttonsRef}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={onOpenBrief}
            className="w-full sm:w-auto px-10 py-5 bg-[#EE1C25] hover:bg-[#ff2535] text-white font-bebas text-3xl tracking-wider uppercase rounded-2xl shadow-xl shadow-red-900/20 transition-all hover:scale-105 flex items-center justify-center gap-3 group"
          >
            <span>START A MOTION PROJECT</span>
            <ArrowRight className="w-7 h-7 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={onOpenReel}
            className="w-full sm:w-auto px-10 py-5 bg-white hover:bg-slate-50 border border-slate-300 text-slate-900 font-bebas text-3xl tracking-wider uppercase rounded-2xl shadow-md transition-all hover:scale-105 flex items-center justify-center gap-3"
          >
            <Play className="w-6 h-6 text-[#EE1C25] fill-current" />
            <span>WATCH 2026 SHOWREEL</span>
          </button>
        </div>

        {/* Bottom Security Guarantee */}
        <div className="mt-10 flex items-center justify-center gap-2 text-slate-500 text-xs sm:text-sm font-sans font-medium">
          <ShieldCheck className="w-4 h-4 text-[#649900]" />
          <span>100% Satisfaction Guarantee • No Obligation Free Quote in 15 Minutes</span>
        </div>

      </div>
    </section>
  );
};
