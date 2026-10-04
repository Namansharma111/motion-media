"use client";

import React, { useState, useEffect } from "react";
import { BrandLogo } from "./BrandLogo";
import { Volume2, VolumeX, Sparkles, ArrowUpRight, Menu, X, Play } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  onOpenBrief: () => void;
  onOpenReel: () => void;
  isMuted: boolean;
  onToggleMute: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenBrief,
  onOpenReel,
  isMuted,
  onToggleMute,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Selected Work", href: "#work" },
    { label: "Expertise", href: "#services" },
    { label: "Raw vs Final", href: "#compare" },
    { label: "Estimate", href: "#calculator" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md border-b border-slate-200/80 py-3 shadow-md"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#">
          <BrandLogo darkText={true} />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-900/90 p-1.5 rounded-full border border-slate-800 shadow-md backdrop-blur-md">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-4 py-2 text-sm font-medium text-slate-200 hover:text-white hover:bg-white/15 rounded-full transition-all duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          {/* Audio Sound FX Toggle */}
          <button
            onClick={onToggleMute}
            className="flex items-center gap-2 px-3 py-2 text-xs font-semibold rounded-full bg-[#161B2E] border border-slate-700/60 text-slate-300 hover:text-white hover:border-[#2B388F] transition-all"
            title={isMuted ? "Enable Motion Sound FX" : "Mute Sound FX"}
          >
            {isMuted ? (
              <>
                <VolumeX className="w-4 h-4 text-slate-400" />
                <span className="hidden lg:inline text-[11px] uppercase tracking-wider">Sound Off</span>
              </>
            ) : (
              <>
                <Volume2 className="w-4 h-4 text-[#CCFF00] animate-pulse" />
                <span className="hidden lg:inline text-[11px] uppercase tracking-wider text-[#CCFF00]">Sound On</span>
              </>
            )}
          </button>

          {/* Quick Reel Button */}
          <button
            onClick={onOpenReel}
            className="flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-full bg-slate-900 border border-slate-700/80 text-white hover:bg-[#2B388F] hover:border-[#2B388F] transition-all"
          >
            <Play className="w-3.5 h-3.5 text-[#EE1C25] fill-current" />
            <span className="tracking-wide">2026 Showreel</span>
          </button>

          {/* Start Project CTA */}
          <button
            onClick={onOpenBrief}
            className="relative group overflow-hidden rounded-full p-[1px] font-semibold text-xs tracking-wider uppercase"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-[#EE1C25] via-[#2B388F] to-[#CCFF00] rounded-full group-hover:opacity-100 opacity-70 transition-opacity animate-pulse" />
            <div className="relative px-5 py-2.5 rounded-full bg-[#0B0E17] group-hover:bg-transparent text-white transition-all flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#CCFF00]" />
              <span>Start Project</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </button>
        </div>

        {/* Mobile Hamburger Menu button */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={onOpenReel}
            className="p-2 bg-[#161B2E] border border-slate-700 rounded-full text-[#EE1C25]"
          >
            <Play className="w-4 h-4 fill-current" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-300 hover:text-white bg-[#121626] border border-slate-800 rounded-lg"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0B0E1A] border-b border-slate-800 px-6 py-6"
          >
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-bebas tracking-wide text-slate-200 hover:text-[#EE1C25] transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4 border-t border-slate-800 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBrief();
                  }}
                  className="w-full py-3 bg-[#EE1C25] text-white font-bebas text-lg tracking-wider rounded-xl hover:bg-red-600 transition-colors flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-[#CCFF00]" />
                  <span>START A PROJECT NOW</span>
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
