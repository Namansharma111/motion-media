"use client";

import React, { useEffect, useRef } from "react";
import { Check, ArrowRight, Stethoscope, Video, TrendingUp } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const GoogleIcon: React.FC<{ className?: string }> = ({ className = "w-3.5 h-3.5" }) => (
  <svg className={`${className} shrink-0`} viewBox="0 0 24 24" fill="none">
    <path
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      fill="#4285F4"
    />
    <path
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      fill="#34A853"
    />
    <path
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
      fill="#FBBC05"
    />
    <path
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
      fill="#EA4335"
    />
  </svg>
);

interface ServicesGridProps {
  onOpenBrief: () => void;
}

export const ServicesGrid: React.FC<ServicesGridProps> = ({ onOpenBrief }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top 90%",
              once: true,
            },
          }
        );
      }

      if (cardsRef.current) {
        gsap.fromTo(
          cardsRef.current.children,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.08,
            duration: 0.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 95%",
              once: true,
            },
          }
        );
      }
    }, sectionRef);

    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 150);

    return () => {
      clearTimeout(timer);
      ctx.revert();
    };
  }, []);

  const practices = [
    {
      id: "doctors-branding",
      title: "DOCTORS PERSONAL BRANDING",
      subtitle: "Clinical Authority · Medical Reels · High Patient Trust",
      tag: "HEALTHCARE & DOCTORS",
      metric: "4.2x Patient Inquiries",
      googleRating: "4.9/5",
      reviewCount: "Google Reviews",
      bgImage: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=1200&q=80",
      features: [
        "4.2x Patient Inquiries",
        "Authority Video Shoots",
        "Doctor Podcasts & Q&As",
        "Patient Case Story Films",
      ],
      icon: Stethoscope,
      badgeColor: "bg-[#EE1C25] text-white",
      buttonText: "BOOK DOCTOR BRANDING BRIEF",
      btnBase: "bg-[#EE1C25]",
      btnFill: "bg-[#465199]",
      accentColor: "#EE1C25",
      hoverBorder: "hover:border-[#EE1C25]/80 hover:shadow-red-950/40",
    },
    {
      id: "media-production",
      title: "MEDIA PRODUCTION",
      subtitle: "Cinema 4K Commercials · Product Shoots · Viral Ads",
      tag: "COMMERCIAL PRODUCTION",
      metric: "120M+ Views Delivered",
      googleRating: "4.9/5",
      reviewCount: "Google Reviews",
      bgImage: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1200&q=80",
      features: [
        "120M+ Views Delivered",
        "Cinema 4K Commercial Ads",
        "Macro Product Photography",
        "Viral YouTube & Social Edits",
      ],
      icon: Video,
      badgeColor: "bg-[#465199] text-white",
      buttonText: "EXPLORE MEDIA PRODUCTION",
      btnBase: "bg-[#465199]",
      btnFill: "bg-[#EE1C25]",
      accentColor: "#465199",
      hoverBorder: "hover:border-[#465199]/80 hover:shadow-[#465199]/25",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="services"
      className="py-20 bg-[#08090E] relative overflow-hidden select-none"
    >
      {/* Background Soft Studio Ambient Glows */}
      <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] bg-[#EE1C25]/8 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-[#465199]/12 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-2 mb-2.5">
            <span className="w-5 h-[2px] bg-[#EE1C25]" />
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#EE1C25]">
              OUR CORE PRACTICES
            </span>
            <span className="w-5 h-[2px] bg-[#EE1C25]" />
          </div>
          <h2 className="font-bebas text-4xl sm:text-6xl lg:text-7xl text-white uppercase tracking-tight">
            CREATIVE SOLUTIONS <span className="text-[#EE1C25]">FOR EVERY STORY</span>
          </h2>
          <p className="mt-3 text-neutral-400 font-sans text-sm sm:text-base font-light leading-relaxed max-w-2xl mx-auto">
            From clinical authority & doctor personal branding to full-scale commercial media production — we engineer high-impact visuals that build authority and drive growth.
          </p>
        </div>

        {/* 2 Focused Cards with High-Visibility Background Images */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto"
        >
          {practices.map((practice) => {
            const Icon = practice.icon;
            return (
              <div
                key={practice.id}
                className={`group relative rounded-3xl overflow-hidden border border-neutral-800 ${practice.hoverBorder} transition-all duration-500 shadow-2xl min-h-[440px] sm:min-h-[470px] flex flex-col justify-between p-6 sm:p-7`}
              >
                {/* Background Image - High Opacity & Crisp Visibility */}
                <img
                  src={practice.bgImage}
                  alt={practice.title}
                  className="absolute inset-0 w-full h-full object-cover filter brightness-[0.82] contrast-[1.05] group-hover:scale-105 group-hover:brightness-90 transition-transform duration-700 ease-out z-0"
                />

                {/* Subtle Top & Bottom Gradient Vignette for Razor-Sharp Text Contrast */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-transparent to-transparent h-28 z-0 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/85 via-42% to-transparent z-0 pointer-events-none" />

                {/* Top Badge Row */}
                <div className="relative z-10 flex items-center justify-between gap-3">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/65 border border-white/20 backdrop-blur-md text-[11px] font-mono font-bold tracking-wider uppercase text-white shadow-lg">
                    <Icon className="w-3.5 h-3.5 text-white" />
                    <span>{practice.tag}</span>
                  </div>

                  {/* Google Verified Review Badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/75 border border-white/20 backdrop-blur-md text-xs font-sans text-white shadow-lg">
                    <GoogleIcon className="w-3.5 h-3.5" />
                    <div className="flex items-center gap-1.5">
                      <span className="text-[#FBBC04] text-xs tracking-tighter">★★★★★</span>
                      <span className="font-bold text-white text-[11px]">{practice.googleRating}</span>
                      <span className="text-neutral-300 text-[10px] hidden sm:inline">{practice.reviewCount}</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Content Block - Compact & Focused */}
                <div className="relative z-10 mt-auto pt-6">
                  {/* Title & Subtitle */}
                  <div>
                    <h3 className="font-bebas text-3xl sm:text-4xl lg:text-5xl text-white uppercase tracking-tight leading-none drop-shadow-md">
                      {practice.title}
                    </h3>
                    <p className="mt-1 text-xs sm:text-sm font-semibold text-white/95 font-sans tracking-wide drop-shadow-sm">
                      {practice.subtitle}
                    </p>
                  </div>

                  {/* Compact Feature Tags */}
                  <div className="flex flex-wrap items-center gap-2 mt-3.5 mb-5">
                    {practice.features.map((feat, idx) => (
                      <div
                        key={feat}
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg backdrop-blur-md border text-[11px] font-medium text-white shadow-sm ${
                          idx === 0
                            ? "bg-black/80 border-white/25 text-white font-semibold"
                            : "bg-black/65 border-white/15"
                        }`}
                      >
                        {idx === 0 ? (
                          <span className="relative flex h-2 w-2">
                            <span
                              className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                              style={{ backgroundColor: practice.accentColor }}
                            />
                            <span
                              className="relative inline-flex rounded-full h-2 w-2"
                              style={{ backgroundColor: practice.accentColor }}
                            />
                          </span>
                        ) : (
                          <div
                            className="w-3.5 h-3.5 rounded-full flex items-center justify-center shrink-0 text-white"
                            style={{ backgroundColor: practice.accentColor }}
                          >
                            <Check className="w-2 h-2 stroke-[3]" />
                          </div>
                        )}
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* High-Converting CTA Action Button */}
                  <button
                    onClick={onOpenBrief}
                    className={`relative group/btn overflow-hidden w-full py-3.5 ${practice.btnBase} text-white font-bebas text-xl tracking-wider uppercase rounded-xl shadow-xl active:scale-95 transition-all flex items-center justify-center gap-2`}
                  >
                    {/* Smooth Left-to-Right Single Color Fill on Hover */}
                    <span
                      className={`absolute inset-0 ${practice.btnFill} -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-300 ease-out`}
                    />
                    <span className="relative z-10 flex items-center gap-2">
                      <span>{practice.buttonText}</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                    </span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
