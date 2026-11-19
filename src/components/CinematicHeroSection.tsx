"use client";

import React from "react";
import { ArrowRight, Play } from "lucide-react";
import { motion } from "framer-motion";

interface CinematicHeroSectionProps {
  onOpenBrief?: () => void;
  onOpenReel?: () => void;
}

export const CinematicHeroSection: React.FC<CinematicHeroSectionProps> = ({
  onOpenBrief,
  onOpenReel,
}) => {
  return (
    <section
      id="home"
      className="relative w-full min-h-[90vh] lg:min-h-[94vh] lg:h-[96vh] max-h-[1050px] overflow-hidden bg-[#060810] flex flex-col justify-between select-none"
    >
      {/* 1. Cinematic Background Image Container */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        <motion.img
          src="/images/motion-hero.png"
          alt="Motion Media Cinematic Production"
          initial={{ scale: 1.06, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="w-full h-full object-cover object-[80%_center] sm:object-[78%_center] lg:object-right filter contrast-[1.04] brightness-[0.96]"
          loading="eager"
        />

        {/* Left Dark Navy-to-Transparent Scrim (ensures text readability while keeping camera rig & 3D play button visible on right) */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#060810] via-[#060810]/90 via-50% md:via-42% to-transparent/10 sm:to-transparent pointer-events-none" />

        {/* Mobile Contrast Scrim Layer */}
        <div className="absolute inset-0 bg-[#060810]/40 sm:hidden pointer-events-none" />

        {/* Top Scrim for Navbar Contrast */}
        <div className="absolute top-0 inset-x-0 h-36 bg-gradient-to-b from-[#060810]/85 via-[#060810]/30 to-transparent pointer-events-none" />

        {/* Bottom Scrim for Seamless Page Transition to Obsidian Black */}
        <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#08090E] via-[#08090E]/60 to-transparent pointer-events-none" />
      </div>

      {/* 2. Main Hero Foreground Content (Restricted to ~45% width on Left) */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full flex flex-col justify-between pt-32 sm:pt-40 lg:pt-36 pb-10 sm:pb-14 flex-1">
        
        {/* Left Content Column */}
        <div className="w-full lg:w-[50%] xl:w-[46%] my-auto">
          
          {/* Small Top Label */}
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/10 backdrop-blur-md mb-6 sm:mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-[#F01419] animate-pulse shrink-0" />
            <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.2em] text-neutral-300 font-semibold">
              VIDEO PRODUCTION • PERSONAL BRANDING • CREATIVE STORYTELLING
            </span>
          </motion.div>

          {/* Main Headline with Highlighted "MOVE" */}
          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="font-bebas text-5xl sm:text-7xl md:text-8xl lg:text-[6.5rem] xl:text-[7.25rem] text-white uppercase tracking-tight leading-[0.91] drop-shadow-md"
          >
            WE CREATE <br />
            VISUALS THAT <br />
            <span className="text-[#F01419]">MOVE</span> PEOPLE.
          </motion.h1>

          {/* Supporting Text */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.35, ease: "easeOut" }}
            className="mt-6 sm:mt-8 text-neutral-300 font-sans text-base sm:text-lg lg:text-xl font-normal leading-relaxed max-w-lg"
          >
            From powerful brand films to personal branding for doctors, we turn expertise and ideas into compelling visual stories.
          </motion.p>

          {/* CTA Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
            className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4"
          >
            {/* Primary CTA: Start a Project */}
            <button
              onClick={onOpenBrief}
              className="relative group overflow-hidden px-8 py-4 bg-[#F01419] text-white font-bebas text-xl sm:text-2xl tracking-wider uppercase rounded-xl shadow-xl shadow-red-950/40 active:scale-95 transition-all flex items-center justify-center gap-2.5 cursor-pointer"
            >
              <span className="absolute inset-0 bg-[#465199] -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
              <span className="relative z-10 flex items-center gap-2 font-medium">
                <span>Start a Project</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </span>
            </button>

            {/* Secondary CTA: Explore Our Work */}
            <button
              onClick={onOpenReel}
              className="relative group overflow-hidden px-8 py-4 bg-white/[0.08] hover:bg-white text-white hover:text-slate-950 border border-white/20 hover:border-white font-bebas text-xl sm:text-2xl tracking-wider uppercase rounded-xl backdrop-blur-md active:scale-95 transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer"
            >
              <Play className="w-4 h-4 text-[#F01419] group-hover:text-slate-950 fill-current transition-colors" />
              <span>Explore Our Work</span>
            </button>
          </motion.div>

        </div>

        {/* 3. Bottom Row: Small Label & Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="w-full flex items-center justify-between pt-8 sm:pt-10 border-t border-white/10"
        >
          {/* Small Bottom Label */}
          <div className="flex items-center gap-2.5 sm:gap-3 text-[10px] sm:text-xs font-mono uppercase tracking-[0.25em] text-neutral-400 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F01419] shrink-0" />
            <span>CREATIVE PRODUCTION STUDIO</span>
            <span className="text-neutral-600">|</span>
            <span className="text-neutral-200">INDIA</span>
          </div>

          {/* Small Animated Scroll Indicator */}
          <a
            href="#services"
            className="hidden sm:inline-flex items-center gap-3 text-neutral-400 hover:text-white transition-colors group cursor-pointer"
          >
            <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-neutral-500 group-hover:text-neutral-300">
              Scroll To Explore
            </span>
            <div className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1 group-hover:border-white/50 transition-colors">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                className="w-1.5 h-1.5 rounded-full bg-[#F01419]"
              />
            </div>
          </a>
        </motion.div>

      </div>
    </section>
  );
};

