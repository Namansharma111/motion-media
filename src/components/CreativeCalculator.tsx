"use client";

import React, { useState, useEffect, useRef } from "react";
import { CheckCircle2, Sparkles, Clock, ShieldCheck, ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface CreativeCalculatorProps {
  onOpenBriefWithDetails: (details: string) => void;
}

export const CreativeCalculator: React.FC<CreativeCalculatorProps> = ({
  onOpenBriefWithDetails,
}) => {
  const [serviceType, setServiceType] = useState("commercial");
  const [duration, setDuration] = useState("30s");
  const [rushOrder, setRushOrder] = useState(false);
  const [formatCount, setFormatCount] = useState("all");

  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const calcCardRef = useRef<HTMLDivElement>(null);

  const servicePrices: Record<string, { base: number; name: string }> = {
    photoshoot: { base: 450, name: "Product Photoshoot & 3D Renders" },
    commercial: { base: 850, name: "Commercial & Ad Video Production" },
    youtube: { base: 600, name: "YouTube Video Production & Growth Edit" },
    motion3d: { base: 1100, name: "3D Motion Graphics & VFX Opener" },
  };

  const durationMultipliers: Record<string, number> = {
    "15s": 1.0,
    "30s": 1.4,
    "60s": 1.9,
    "yt5m": 2.2,
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { opacity: 0, y: 35 },
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

      if (calcCardRef.current) {
        gsap.fromTo(
          calcCardRef.current,
          { opacity: 0, y: 50, scale: 0.96 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: calcCardRef.current,
              start: "top 80%",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const calculatePrice = () => {
    const base = servicePrices[serviceType].base;
    const mult = durationMultipliers[duration] || 1.0;
    let total = base * mult;
    if (rushOrder) total += 350;
    if (formatCount === "all") total += 150;
    return Math.round(total);
  };

  const getEstimatedDays = () => {
    if (rushOrder) return "2 Business Days (Express Rush)";
    if (serviceType === "photoshoot") return "3-4 Business Days";
    if (serviceType === "motion3d") return "5-6 Business Days";
    return "4-5 Business Days";
  };

  const handleBookQuote = () => {
    const quoteSummary = `${servicePrices[serviceType].name} (${duration}) - Est. $${calculatePrice()} [${getEstimatedDays()}]`;
    onOpenBriefWithDetails(quoteSummary);
  };

  return (
    <section
      ref={sectionRef}
      id="calculator"
      className="py-24 bg-[#FAFAFC] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-bebas text-5xl sm:text-7xl text-slate-950 uppercase tracking-tight">
            CALCULATE YOUR <span className="text-[#EE1C25]">MOTION PROJECT COST</span>
          </h2>
          <p className="mt-3 text-slate-600 font-sans text-base sm:text-lg font-normal">
            No hidden agency fees. Select your requirements below to get instant pricing and delivery timelines.
          </p>
        </div>

        {/* Calculator Grid */}
        <div
          ref={calcCardRef}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-10 shadow-xl"
        >
          
          {/* Controls Column */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* 1. Service Selection */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-slate-500 mb-3 font-semibold">
                1. SELECT SERVICE TYPE
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {Object.entries(servicePrices).map(([key, val]) => (
                  <button
                    key={key}
                    onClick={() => setServiceType(key)}
                    className={`p-4 rounded-xl border text-left font-bebas text-lg tracking-wide transition-all ${
                      serviceType === key
                        ? "bg-[#EE1C25] border-[#EE1C25] text-white shadow-md"
                        : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100 hover:border-slate-300"
                    }`}
                  >
                    {val.name}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Duration */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-slate-500 mb-3 font-semibold">
                2. PROJECT DURATION / ASSET COUNT
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { id: "15s", label: "15s Reel / Short" },
                  { id: "30s", label: "30s Commercial" },
                  { id: "60s", label: "60s Full Ad" },
                  { id: "yt5m", label: "YouTube 5-10m" },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setDuration(item.id)}
                    className={`py-3 px-3 rounded-xl border text-center font-bebas text-base tracking-wide transition-all ${
                      duration === item.id
                        ? "bg-[#2B388F] border-[#2B388F] text-white shadow-md"
                        : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100 hover:border-slate-300"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Add-on Toggles */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-slate-500 mb-3 font-semibold">
                3. DELIVERABLE SPECIFICATIONS & SPEED
              </label>
              <div className="space-y-3">
                <button
                  onClick={() => setFormatCount(formatCount === "all" ? "single" : "all")}
                  className="w-full p-4 rounded-xl border border-slate-200 bg-slate-50 flex items-center justify-between text-left hover:border-slate-300 transition-all"
                >
                  <div>
                    <div className="text-slate-900 font-semibold text-sm">Multi-Aspect Ratio Bundle (9:16 + 16:9 + 1:1)</div>
                    <div className="text-xs text-slate-500 font-light">Exported for Instagram, YouTube, TikTok & Web</div>
                  </div>
                  <div
                    className={`w-6 h-6 rounded-md flex items-center justify-center border ${
                      formatCount === "all"
                        ? "bg-[#EE1C25] border-[#EE1C25] text-white"
                        : "border-slate-300 bg-white"
                    }`}
                  >
                    {formatCount === "all" && <CheckCircle2 className="w-4 h-4" />}
                  </div>
                </button>

                <button
                  onClick={() => setRushOrder(!rushOrder)}
                  className="w-full p-4 rounded-xl border border-slate-200 bg-slate-50 flex items-center justify-between text-left hover:border-slate-300 transition-all"
                >
                  <div>
                    <div className="text-slate-900 font-semibold text-sm flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-[#EE1C25]" />
                      Express 48-Hour Priority Rush Delivery
                    </div>
                    <div className="text-xs text-slate-500 font-light">Skip the standard queue and start within 2 hours</div>
                  </div>
                  <div
                    className={`w-6 h-6 rounded-md flex items-center justify-center border ${
                      rushOrder ? "bg-[#2B388F] border-[#2B388F] text-white" : "border-slate-300 bg-white"
                    }`}
                  >
                    {rushOrder && <CheckCircle2 className="w-4 h-4" />}
                  </div>
                </button>
              </div>
            </div>

          </div>

          {/* Result Output Column */}
          <div className="lg:col-span-5 bg-[#08090E] rounded-2xl border border-slate-800 p-6 flex flex-col justify-between shadow-inner">
            <div>
              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400">ESTIMATED INVESTMENT</span>
                <span className="px-2.5 py-1 rounded bg-[#EE1C25]/20 text-[#EE1C25] font-mono text-xs font-bold">
                  TRANSPARENT QUOTE
                </span>
              </div>

              <div className="text-center py-4">
                <div className="text-xs text-slate-400 font-sans uppercase tracking-widest mb-1">Total Estimated Project Fee</div>
                <div className="font-bebas text-7xl sm:text-8xl text-white tracking-tight text-glow-gradient">
                  ${calculatePrice()}
                </div>
                <div className="text-xs text-[#CCFF00] font-mono mt-1 flex items-center justify-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  Estimated Delivery: {getEstimatedDays()}
                </div>
              </div>

              {/* Included Deliverables List */}
              <div className="mt-6 space-y-2 border-t border-slate-800/80 pt-6">
                <div className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">INCLUDED DELIVERABLES:</div>
                {[
                  "Full 4K Ultra HD Master Video Render",
                  "Custom Kinetic Motion Graphic Overlays",
                  "Pro Sound Design & Licensed Audio Tracks",
                  "2 Rounds of Revision Cycles",
                  "Raw Project Source Files Included",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#CCFF00] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Book CTA */}
            <div className="mt-8 pt-4">
              <button
                onClick={handleBookQuote}
                className="w-full py-4 bg-[#EE1C25] hover:bg-[#ff2535] text-white font-bebas text-2xl uppercase tracking-wider rounded-xl transition-all shadow-xl shadow-red-950/50 flex items-center justify-center gap-2 hover:scale-[1.02]"
              >
                <span>LOCK IN THIS QUOTE</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <div className="text-[11px] text-center text-slate-400 mt-2 flex items-center justify-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-slate-400" />
                <span>100% Satisfaction Guarantee • Money-Back Protection</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
