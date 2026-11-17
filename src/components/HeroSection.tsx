"use client";

import React, { useState, useEffect, useRef } from "react";
import { Zap, Play, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface HeroSectionProps {
  onOpenReel?: () => void;
  onOpenBrief?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const title1Ref = useRef<HTMLHeadingElement>(null);
  const title2Ref = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const metaRef = useRef<HTMLDivElement>(null);

  // Parallax floating ambient orbs refs
  const orb1Ref = useRef<HTMLDivElement>(null);
  const orb2Ref = useRef<HTMLDivElement>(null);

  // Auto-rotating dynamic single words (consistent 5-6 letter width for smooth swaps)
  const rotatingWords = [
    "MOTION",
    "VIDEOS",
    "REELS",
    "IMPACT",
    "GROWTH",
  ];
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2600);
    return () => clearInterval(timer);
  }, [rotatingWords.length]);

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
        );

      if (metaRef.current) {
        tl.fromTo(
          metaRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6 },
          "-=0.3"
        );
      }

      // Subtle Parallax Scroll on Orbs
      if (heroRef.current && orb1Ref.current) {
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
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex flex-col justify-center items-center pt-24 pb-20 overflow-hidden bg-[#F7F8FC] bg-noise select-none"
    >
      {/* Clean Studio Ambient Glow - Soft & Light, No Over-Shadow */}
      <div
        ref={orb1Ref}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[650px] h-[320px] bg-gradient-to-r from-[#EE1C25]/7 via-[#465199]/8 to-[#465199]/8 blur-[90px] pointer-events-none rounded-full"
      />
      <div
        ref={orb2Ref}
        className="absolute top-10 right-10 w-[350px] h-[350px] bg-[#465199]/5 blur-[80px] pointer-events-none rounded-full"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 text-center my-auto">

        {/* Professional Studio Eyebrow Tag */}
        <div
          ref={badgeRef}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border border-slate-200/90 shadow-xs mb-6 backdrop-blur-md"
        >
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#EE1C25] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#EE1C25]" />
          </span>
          <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-slate-800">
            NEXT-GEN MOTION & VIDEO PRODUCTION STUDIO
          </span>
        </div>

        {/* Clean, Sharp Professional Headline with Auto-Rotating Single Words */}
        <div className="max-w-4xl mx-auto">
          <h1
            ref={title1Ref}
            className="font-bebas text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-slate-950 uppercase leading-[0.92]"
          >
            IT'S NO WONDER BRANDS
          </h1>

          <h1
            ref={title2Ref}
            className="font-bebas text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight uppercase leading-[0.95] mt-1 sm:mt-2 flex items-center justify-center flex-wrap gap-x-3.5 gap-y-1"
          >
            <span className="text-slate-950">WANT</span>

            <span className="relative inline-flex items-center justify-center text-[#EE1C25] min-h-[1.12em]">
              <AnimatePresence mode="wait">
                <motion.span
                  key={rotatingWords[wordIndex]}
                  initial={{ y: 28, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -28, opacity: 0 }}
                  transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
                  className="inline-block"
                >
                  {rotatingWords[wordIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
          </h1>

          <p
            ref={subtitleRef}
            className="mt-5 text-base sm:text-lg md:text-xl text-slate-600 max-w-xl mx-auto font-sans font-normal leading-relaxed"
          >
            We transform ambitious brands into{" "}
            <strong className="text-slate-900 font-semibold">hyper-engaging motion art</strong> & high-converting commercial video.
          </p>
        </div>

        {/* Minimal High-End Studio Credentials & Social Proof with Authentic Icons */}
        <div
          ref={metaRef}
          className="mt-8 flex flex-col items-center justify-center gap-6"
        >
          {/* Proof Badges Strip */}
          <div className="inline-flex flex-wrap items-center justify-center gap-3 sm:gap-6 px-5 py-2 rounded-full bg-white border border-slate-200/90 shadow-sm text-xs font-sans">
            {/* Google Verified Rating */}
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
              </svg>
              <div className="flex items-center gap-1.5">
                <span className="text-[#FBBC04] text-xs tracking-tighter">★★★★★</span>
                <span className="font-bold text-slate-800">4.9/5</span>
                <span className="text-slate-500 text-[11px] font-medium hidden sm:inline">Google Rating</span>
              </div>
            </div>

            <span className="hidden sm:inline text-slate-200">|</span>

            {/* Views Crafted */}
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-sm bg-[#EE1C25] text-white flex items-center justify-center shrink-0">
                <Play className="w-2.5 h-2.5 fill-current translate-x-0.2" />
              </div>
              <div className="flex items-center gap-1">
                <span className="font-bold text-slate-800">120M+</span>
                <span className="text-slate-500 text-[11px] font-medium">Views Delivered</span>
              </div>
            </div>

            <span className="hidden sm:inline text-slate-200">|</span>

            {/* Fast Turnaround */}
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-[#465199]/10 text-[#465199] flex items-center justify-center shrink-0">
                <ShieldCheck className="w-3.5 h-3.5 text-[#465199]" />
              </div>
              <div className="flex items-center gap-1">
                <span className="font-bold text-slate-800">48-Hr</span>
                <span className="text-slate-500 text-[11px] font-medium">Initial Preview</span>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Minimalist Scroll Cue - Centered at the bottom */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center gap-1.5 opacity-60 hover:opacity-100 transition-opacity z-10 pointer-events-none">
        <span className="text-[10px] font-mono tracking-[0.25em] text-slate-400 uppercase">
          SCROLL TO EXPLORE
        </span>
        <div className="w-3.5 h-6 rounded-full border border-slate-300 flex items-start justify-center p-0.5">
          <div className="w-1 h-1.5 rounded-full bg-[#EE1C25] animate-bounce" />
        </div>
      </div>
    </section>
  );
};
