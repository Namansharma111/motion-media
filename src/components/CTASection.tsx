"use client";

import React, { useEffect, useRef } from "react";
import { ArrowRight, Play, Zap, ShieldCheck, Award } from "lucide-react";
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

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (titleRef.current) {
        gsap.fromTo(
          titleRef.current,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: titleRef.current,
              start: "top 85%",
            },
          }
        );
      }

      if (pillsRef.current) {
        gsap.fromTo(
          pillsRef.current,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            delay: 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: pillsRef.current,
              start: "top 88%",
            },
          }
        );
      }

      if (buttonsRef.current) {
        gsap.fromTo(
          buttonsRef.current.children,
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.12,
            duration: 0.8,
            delay: 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: buttonsRef.current,
              start: "top 88%",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 sm:py-28 bg-[#F4F5FA] relative overflow-hidden border-t border-slate-200/80 select-none"
    >
      {/* Studio Soft Ambient Glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[550px] h-[350px] bg-[#EE1C25]/8 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[550px] h-[350px] bg-[#465199]/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Luxury Framed Studio Card */}
        <div className="relative rounded-3xl bg-white/90 border border-slate-200/90 shadow-2xl shadow-slate-900/5 p-8 sm:p-14 lg:p-16 text-center backdrop-blur-md overflow-hidden">
          
          {/* Top Subtle Red Accent Line */}
          <div className="absolute top-0 left-1/4 right-1/4 h-[2px] bg-gradient-to-r from-transparent via-[#EE1C25] to-transparent pointer-events-none" />

          {/* Eyebrow Studio Tag */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200/90 shadow-xs mb-6">
            <span className="w-2 h-2 rounded-full bg-[#EE1C25] animate-ping" />
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#EE1C25] font-bold">
              Start Your Production
            </span>
          </div>

          {/* Proportional Editorial Typography */}
          <div ref={titleRef} className="max-w-4xl mx-auto">
            <h2 className="font-bebas text-4xl sm:text-6xl md:text-7xl lg:text-[5rem] text-slate-950 uppercase tracking-tight leading-[0.93]">
              READY TO DOMINATE YOUR MARKET <br className="hidden sm:block" />
              <span className="text-slate-950">WITH </span>
              <span className="text-[#EE1C25]">MOTION & VIDEO?</span>
            </h2>

            <p className="mt-4 text-slate-600 font-sans text-sm sm:text-base md:text-lg max-w-2xl mx-auto font-normal leading-relaxed">
              From high-converting commercial video ads & doctor authority reels to product cinema shoots — we engineer visual stories that turn viewers into clients.
            </p>
          </div>

          {/* Clean Studio Trust Proof Strip */}
          <div
            ref={pillsRef}
            className="mt-8 inline-flex flex-wrap items-center justify-center gap-3 sm:gap-6 px-5 py-2.5 rounded-full bg-slate-50 border border-slate-200/90 shadow-xs text-xs font-sans"
          >
            {/* 48-Hr Preview */}
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-[#EE1C25]/10 text-[#EE1C25] flex items-center justify-center shrink-0">
                <Zap className="w-3 h-3 text-[#EE1C25]" />
              </div>
              <span className="font-bold text-slate-800">48-Hr Initial Preview</span>
            </div>

            <span className="text-slate-300 hidden sm:inline">|</span>

            {/* Views Delivered */}
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-[#465199]/10 text-[#465199] flex items-center justify-center shrink-0">
                <Award className="w-3 h-3 text-[#465199]" />
              </div>
              <span className="font-bold text-slate-800">120M+ Views Delivered</span>
            </div>

            <span className="text-slate-300 hidden sm:inline">|</span>

            {/* Google Verified Rating */}
            <div className="flex items-center gap-1.5">
              <span className="text-[#FBBC04] text-xs tracking-tighter">★★★★★</span>
              <span className="font-bold text-slate-800">4.9/5</span>
              <span className="text-slate-500 text-[11px] font-medium hidden sm:inline">Google Rating</span>
            </div>
          </div>

          {/* Studio Action Buttons with Left-to-Right Single Color Fill on Hover */}
          <div
            ref={buttonsRef}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            {/* Primary CTA: Red base with Blue left-to-right fill */}
            <button
              onClick={onOpenBrief}
              className="relative group overflow-hidden w-full sm:w-auto px-8 py-3.5 bg-[#EE1C25] text-white font-bebas text-xl sm:text-2xl tracking-wider uppercase rounded-xl shadow-lg shadow-red-900/15 active:scale-95 transition-all flex items-center justify-center gap-2.5"
            >
              <span className="absolute inset-0 bg-[#465199] -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
              <span className="relative z-10 flex items-center gap-2">
                <span>START A PROJECT BRIEF</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </span>
            </button>

            {/* Secondary CTA: White base with Blue left-to-right fill */}
            <button
              onClick={onOpenReel}
              className="relative group overflow-hidden w-full sm:w-auto px-8 py-3.5 bg-white border border-slate-300 text-slate-900 font-bebas text-xl sm:text-2xl tracking-wider uppercase rounded-xl shadow-xs active:scale-95 transition-all flex items-center justify-center gap-2.5"
            >
              <span className="absolute inset-0 bg-[#465199] -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
              <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors duration-200">
                <Play className="w-4 h-4 text-[#EE1C25] group-hover:text-white fill-current transition-colors duration-200" />
                <span>WATCH SHOWREEL</span>
              </span>
            </button>
          </div>

          {/* Bottom Security Guarantee */}
          <div className="mt-8 flex items-center justify-center gap-2 text-slate-500 text-xs sm:text-sm font-sans font-medium">
            <ShieldCheck className="w-4 h-4 text-[#465199]" />
            <span>100% Custom Production • Free Concept Strategy Session in 15 Minutes</span>
          </div>

        </div>

      </div>
    </section>
  );
};
