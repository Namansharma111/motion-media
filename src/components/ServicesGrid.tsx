"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, Film, Video, Sparkles, Check, ArrowRight, Play, Eye, Layers } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface ServicesGridProps {
  onOpenBrief: () => void;
}

export const ServicesGrid: React.FC<ServicesGridProps> = ({ onOpenBrief }) => {
  const [activeTab, setActiveTab] = useState(0);

  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);
  const showcaseCardRef = useRef<HTMLDivElement>(null);

  const services = [
    {
      id: "photoshoot",
      title: "Product Photoshoots & 3D Renders",
      subtitle: "High-End E-Commerce & Advertising Imagery",
      icon: Camera,
      tag: "COMMERCIAL & E-COM",
      badgeColor: "bg-[#EE1C25]",
      bgImage: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1000&q=80",
      description:
        "Hyper-realistic 3D product renders, macro studio photography, shadow plays, and dynamic product liquid/motion setups designed for high Amazon, Shopify, and social conversion rates.",
      features: [
        "360° Interactive Studio Render",
        "Macro Liquid & Texture Close-ups",
        "E-commerce Ready White & Lifestyle BG",
        "AI Enhanced Color Grading",
      ],
      metric: "3.4x CTR Boost",
    },
    {
      id: "commercial",
      title: "Commercial & Teaser Video Production",
      subtitle: "Cinematic Motion Ads & Brand Films",
      icon: Film,
      tag: "BRAND ADS & CAMPAIGNS",
      badgeColor: "bg-[#2B388F]",
      bgImage: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1000&q=80",
      description:
        "High-energy video commercials with custom sound design, color grading, visual effects, and kinetic speed ramps that hook viewers in the first 3 seconds.",
      features: [
        "Scriptwriting & Storyboard Concept",
        "4K Cinema Camera Production",
        "Kinetic Sound FX & Audio Mix",
        "Multi-Ratio Export (9:16, 16:9, 1:1)",
      ],
      metric: "120M+ Views",
    },
    {
      id: "youtube",
      title: "YouTube Production & Channel Growth",
      subtitle: "Retention-Engineered Editing & Thumbnails",
      icon: Video,
      tag: "VIRAL YOUTUBE EDITING",
      badgeColor: "bg-red-600",
      bgImage: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=1000&q=80",
      description:
        "Turn raw vlogs and tech reviews into viral youtube hits. We handle retention graphics, animated lower thirds, sound design, sound effects, and high-CTR custom thumbnails.",
      features: [
        "Pacing & Storyline Retention Cut",
        "Custom Kinetic Motion Callouts",
        "Custom Click-Bait High CTR Thumbnails",
        "Chaptering, End-screens & Shorts Cut",
      ],
      metric: "82% Avg Retention",
    },
    {
      id: "motion3d",
      title: "3D Motion Graphics & VFX",
      subtitle: "Futuristic Kinetic Visuals & Title Sequences",
      icon: Sparkles,
      tag: "KINETIC ANIMATION",
      badgeColor: "bg-[#CCFF00] text-black",
      bgImage: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1000&q=80",
      description:
        "Elevate your brand with 3D logo stings, HUD motion graphics, animated UI product walkthroughs, fluid particle simulation, and cinematic intro openers.",
      features: [
        "Unreal Engine / Cinema 4D 3D Anim",
        "Kinetic Typography & Title Stings",
        "Logo Animation & Identity Packages",
        "Seamless Loop Visualizers",
      ],
      metric: "100% Original Motion",
    },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top 85%",
            },
          }
        );
      }

      if (tabsRef.current) {
        gsap.fromTo(
          tabsRef.current.children,
          { opacity: 0, y: 35, scale: 0.92 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            stagger: 0.1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: tabsRef.current,
              start: "top 85%",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // 3D Perspective Tilt Effect on Card Hover
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!showcaseCardRef.current) return;
    const card = showcaseCardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;

    gsap.to(card, {
      rotateX: rotateX,
      rotateY: rotateY,
      duration: 0.4,
      ease: "power2.out",
      transformPerspective: 1000,
    });
  };

  const handleMouseLeave = () => {
    if (!showcaseCardRef.current) return;
    gsap.to(showcaseCardRef.current, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.6,
      ease: "power3.out",
    });
  };

  const currentService = services[activeTab];

  return (
    <section
      ref={sectionRef}
      id="services"
      className="py-24 bg-[#0B0E19] relative overflow-hidden"
    >
      {/* Background radial highlight */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#2B388F]/15 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-bebas text-5xl sm:text-7xl text-white uppercase tracking-tight">
            WHAT WE <span className="text-[#EE1C25]">CREATE & ANIMATE</span>
          </h2>
          <p className="mt-3 text-slate-400 font-sans text-base sm:text-lg font-light">
            Tailored visual storytelling built for maximum aesthetic appeal, click-through rate, and brand dominance.
          </p>
        </div>

        {/* Tab Navigation Pill Bar */}
        <div ref={tabsRef} className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isSelected = activeTab === index;
            return (
              <button
                key={service.id}
                data-cursor="SELECT"
                onClick={() => setActiveTab(index)}
                className={`p-4 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between ${
                  isSelected
                    ? "bg-[#161C33] border-[#EE1C25] shadow-lg shadow-red-950/40 ring-1 ring-[#EE1C25] scale-102"
                    : "bg-[#0F1322] border-slate-800/80 hover:bg-[#141A2D] hover:border-slate-700"
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      isSelected ? "bg-[#EE1C25] text-white" : "bg-slate-800/60 text-slate-300"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className={`text-[10px] font-bebas tracking-wider px-2 py-0.5 rounded ${service.badgeColor}`}>
                    {service.tag}
                  </span>
                </div>
                <div>
                  <h3 className="font-bebas text-xl sm:text-2xl text-white tracking-wide">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-400 font-sans line-clamp-1 mt-1">
                    {service.subtitle}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Service Detailed Showcase Card with 3D Tilt */}
        <div
          ref={showcaseCardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="transform-gpu transition-transform duration-200"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentService.id}
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -30, scale: 0.98 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-[#121628] rounded-3xl border border-slate-700/80 p-6 sm:p-10 shadow-2xl items-center relative overflow-hidden"
            >
              {/* Glowing Ambient Corner Accent */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-[#EE1C25]/20 to-transparent blur-3xl pointer-events-none" />

              {/* Left Column: Description & Feature Bullets */}
              <div className="lg:col-span-7 flex flex-col justify-between z-10">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-[#EE1C25]/20 border border-[#EE1C25]/40 text-[#EE1C25] text-xs font-semibold rounded-full uppercase tracking-wider">
                      {currentService.tag}
                    </span>
                    <span className="text-xs text-[#CCFF00] font-mono font-bold flex items-center gap-1">
                      <Eye className="w-3.5 h-3.5" />
                      {currentService.metric}
                    </span>
                  </div>

                  <h3 className="font-bebas text-4xl sm:text-6xl text-white tracking-tight uppercase leading-none">
                    {currentService.title}
                  </h3>
                  <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed font-sans font-light">
                    {currentService.description}
                  </p>

                  {/* Feature Checklist */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-8">
                    {currentService.features.map((feat) => (
                      <div
                        key={feat}
                        className="flex items-center gap-2.5 bg-[#090C16] p-3 rounded-xl border border-slate-800/80 text-xs sm:text-sm font-medium text-slate-200"
                      >
                        <div className="w-5 h-5 rounded-full bg-[#EE1C25]/20 text-[#EE1C25] flex items-center justify-center shrink-0">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-10 flex flex-wrap items-center gap-4">
                  <button
                    data-cursor="BRIEF"
                    onClick={onOpenBrief}
                    className="px-6 py-3.5 bg-[#EE1C25] hover:bg-[#ff2234] text-white font-bebas text-xl uppercase tracking-wider rounded-xl transition-all flex items-center gap-2 shadow-lg shadow-red-900/30 hover:scale-105"
                  >
                    <span>REQUEST BRIEF</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>

                  <a
                    href="#work"
                    data-cursor="SHOWCASE"
                    className="px-6 py-3.5 bg-[#090C16] hover:bg-slate-900 border border-slate-700 text-slate-300 font-bebas text-xl uppercase tracking-wider rounded-xl transition-all flex items-center gap-2 hover:scale-105"
                  >
                    <span>SEE SAMPLE SHOWCASE</span>
                    <Layers className="w-4 h-4 text-[#CCFF00]" />
                  </a>
                </div>
              </div>

              {/* Right Column: Visual Preview Card */}
              <div
                data-cursor="PREVIEW"
                className="lg:col-span-5 relative group overflow-hidden rounded-2xl border border-slate-700/80 aspect-[4/3] bg-slate-900 z-10"
              >
                <img
                  src={currentService.bgImage}
                  alt={currentService.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-90 contrast-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090C16] via-transparent to-transparent opacity-80" />

                {/* Overlay Badge */}
                <div className="absolute top-4 right-4 bg-[#08090E]/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-700 text-xs font-mono text-[#CCFF00] flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#CCFF00] animate-ping" />
                  <span>4K RENDERING ACTIVE</span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#08090E]/85 backdrop-blur-md border border-slate-800 flex items-center justify-between">
                  <div>
                    <div className="text-xs text-slate-400 font-medium">ESTIMATED TURNAROUND</div>
                    <div className="font-bebas text-xl text-white tracking-wide">3 - 5 BUSINESS DAYS</div>
                  </div>
                  <button
                    onClick={onOpenBrief}
                    className="w-10 h-10 rounded-full bg-[#EE1C25] text-white flex items-center justify-center hover:scale-110 transition-transform"
                  >
                    <Play className="w-5 h-5 fill-current translate-x-0.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
