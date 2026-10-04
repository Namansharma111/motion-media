"use client";

import React, { useState, useEffect, useRef } from "react";
import { Sparkles, Film, Camera, Video, Flame, ChevronRight, Play, Zap } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface HeroSectionProps {
  onOpenReel: () => void;
  onOpenBrief: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenReel,
  onOpenBrief,
}) => {
  const [activeCategory, setActiveCategory] = useState("all");
  
  const heroRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const title1Ref = useRef<HTMLHeadingElement>(null);
  const title2Ref = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const pillsRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  
  // Parallax floating HUD badges refs
  const floatCard1Ref = useRef<HTMLDivElement>(null);
  const floatCard2Ref = useRef<HTMLDivElement>(null);
  const orb1Ref = useRef<HTMLDivElement>(null);
  const orb2Ref = useRef<HTMLDivElement>(null);

  const categories = [
    { id: "all", label: "All Works", icon: Flame },
    { id: "product", label: "Product Photoshoot", icon: Camera },
    { id: "video", label: "Commercial Video", icon: Film },
    { id: "youtube", label: "YouTube Growth", icon: Video },
    { id: "motion", label: "3D Motion Graphic", icon: Sparkles },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Sleek professional entrance timeline
      const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1.0 } });

      if (badgeRef.current) {
        tl.fromTo(
          badgeRef.current,
          { opacity: 0, y: -20, scale: 0.9 },
          { opacity: 1, y: 0, scale: 1, duration: 0.7 }
        );
      }

      tl.fromTo(
        title1Ref.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.9 },
        "-=0.4"
      )
        .fromTo(
          title2Ref.current,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.9 },
          "-=0.7"
        )
        .fromTo(
          subtitleRef.current,
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.7 },
          "-=0.5"
        )
        .fromTo(
          pillsRef.current ? pillsRef.current.children : [],
          { opacity: 0, y: 20, scale: 0.9 },
          { opacity: 1, y: 0, scale: 1, stagger: 0.06, duration: 0.5 },
          "-=0.4"
        )
        .fromTo(
          buttonsRef.current ? buttonsRef.current.children : [],
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, stagger: 0.1, duration: 0.6 },
          "-=0.3"
        );

      // Subtle Parallax Scroll on Orbs and Side Badges
      if (heroRef.current) {
        if (orb1Ref.current) {
          gsap.to(orb1Ref.current, {
            y: 160,
            scrollTrigger: {
              trigger: heroRef.current,
              start: "top top",
              end: "bottom top",
              scrub: 1,
            },
          });
        }

        if (floatCard1Ref.current) {
          gsap.to(floatCard1Ref.current, {
            y: 100,
            scrollTrigger: {
              trigger: heroRef.current,
              start: "top top",
              end: "bottom top",
              scrub: 1,
            },
          });
        }

        if (floatCard2Ref.current) {
          gsap.to(floatCard2Ref.current, {
            y: 120,
            scrollTrigger: {
              trigger: heroRef.current,
              start: "top top",
              end: "bottom top",
              scrub: 1,
            },
          });
        }
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-[92vh] pt-28 pb-16 overflow-hidden flex flex-col justify-center bg-[#F7F8FC] bg-noise select-none"
    >
      {/* Dynamic Studio Ambient Glow */}
      <div
        ref={orb1Ref}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[650px] h-[320px] bg-gradient-to-r from-[#EE1C25]/12 via-[#2B388F]/15 to-[#CCFF00]/15 blur-[120px] pointer-events-none rounded-full"
      />
      <div
        ref={orb2Ref}
        className="absolute top-10 right-10 w-[350px] h-[350px] bg-[#2B388F]/10 blur-[100px] pointer-events-none rounded-full"
      />

      {/* Sleek Floating HUD Side Card Left */}
      <div
        ref={floatCard1Ref}
        className="hidden xl:flex absolute top-36 left-12 z-20 bg-slate-950/90 text-white p-3.5 rounded-xl border border-slate-800 shadow-xl backdrop-blur-md flex-col gap-0.5 hover:border-[#CCFF00] transition-colors cursor-pointer"
      >
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#CCFF00] animate-ping" />
          <span className="text-[10px] font-mono font-bold text-[#CCFF00] uppercase tracking-wider">
            CINEMATIC 3D RENDER
          </span>
        </div>
        <div className="font-bebas text-xl text-white tracking-wide">60 FPS KINETIC RAYS</div>
        <div className="text-[11px] text-slate-400 font-sans">Photorealistic Studio Lighting</div>
      </div>

      {/* Sleek Floating HUD Side Card Right */}
      <div
        ref={floatCard2Ref}
        onClick={onOpenReel}
        className="hidden xl:flex absolute top-44 right-12 z-20 bg-white text-slate-900 p-3.5 rounded-xl border border-slate-200 shadow-xl flex-col gap-0.5 hover:border-[#EE1C25] transition-all cursor-pointer group hover:scale-105"
      >
        <div className="flex items-center justify-between gap-4">
          <div className="w-7 h-7 rounded-full bg-[#EE1C25] text-white flex items-center justify-center group-hover:scale-110 transition-transform">
            <Play className="w-3.5 h-3.5 fill-current translate-x-0.5" />
          </div>
          <span className="px-2 py-0.5 rounded bg-red-100 text-[#EE1C25] font-mono text-[9px] font-bold">
            2026 REEL
          </span>
        </div>
        <div className="font-bebas text-xl tracking-wide text-slate-950 mt-1">WATCH SHOWREEL</div>
        <div className="text-[11px] text-slate-500 font-sans">120M+ Views Crafted</div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 text-center">

        {/* Professional Studio Eyebrow Tag */}
        <div
          ref={badgeRef}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-xs mb-5 backdrop-blur-md"
        >
          <Zap className="w-3.5 h-3.5 text-[#EE1C25]" />
          <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-slate-700">
            NEXT-GEN MOTION & VIDEO PRODUCTION STUDIO
          </span>
        </div>

        {/* Clean, Well-Proportioned Professional Headline */}
        <div className="max-w-4xl mx-auto">
          <h1
            ref={title1Ref}
            className="font-bebas text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-slate-950 uppercase leading-[0.92] drop-shadow-xs"
          >
            IT'S NO WONDER BRANDS
          </h1>
          <h1
            ref={title2Ref}
            className="font-bebas text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-[#EE1C25] uppercase leading-[0.92] drop-shadow-xs relative inline-block mt-1"
          >
            WANT MOTION & VIDEO
            
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
                  stroke="url(#motion-underline-grad-main)"
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
                  <linearGradient id="motion-underline-grad-main" x1="0%" y1="0%" x2="100%" y2="0%">
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
          </h1>

          <p
            ref={subtitleRef}
            className="mt-6 text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto font-sans font-normal leading-relaxed"
          >
            We transform products, YouTube channels, and brand campaigns into{" "}
            <strong className="text-slate-900 font-semibold">hyper-engaging motion art</strong>. 
            Product Photoshoots, Commercial Videos, Kinetic Motion Graphics & High-Converting Edits.
          </p>
        </div>

        {/* Filter Pills */}
        <div
          ref={pillsRef}
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 py-6"
        >
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? "bg-[#2B388F] text-white shadow-md scale-105"
                    : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300 shadow-xs"
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? "text-[#CCFF00]" : "text-[#EE1C25]"}`} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Clean Action CTA Buttons */}
        <div
          ref={buttonsRef}
          className="mt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5"
        >
          <button
            onClick={onOpenBrief}
            className="w-full sm:w-auto px-7 py-3.5 bg-[#EE1C25] hover:bg-[#ff2535] text-white font-bebas text-xl tracking-wider uppercase rounded-xl shadow-lg shadow-red-900/20 transition-all hover:scale-105 flex items-center justify-center gap-2.5"
          >
            <span>BOOK A MOTION PROJECT</span>
            <ChevronRight className="w-5 h-5" />
          </button>

          <a
            href="#calculator"
            className="w-full sm:w-auto px-7 py-3.5 bg-white hover:bg-slate-50 border border-slate-300 text-slate-900 font-bebas text-xl tracking-wider uppercase rounded-xl shadow-sm transition-all hover:scale-105 flex items-center justify-center gap-2.5"
          >
            <span>CALCULATE INSTANT COST</span>
            <Sparkles className="w-4 h-4 text-[#EE1C25]" />
          </a>
        </div>

      </div>
    </section>
  );
};
