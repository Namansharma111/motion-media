"use client";

import React, { useState, useEffect } from "react";
import { BrandLogo } from "./BrandLogo";
import { Sparkles, ArrowUpRight, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  onOpenBrief: () => void;
  onOpenReel?: () => void;
  isMuted?: boolean;
  onToggleMute?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenBrief,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 20);

      if (mobileMenuOpen) {
        setVisible(true);
        return;
      }

      // Always show when near the very top of the page
      if (currentScrollY <= 50) {
        setVisible(true);
        lastScrollY = currentScrollY;
        return;
      }

      const diff = currentScrollY - lastScrollY;
      // Threshold to prevent micro-jitter
      if (Math.abs(diff) > 8) {
        if (diff > 0) {
          // Scrolling down -> hide navbar
          setVisible(false);
        } else {
          // Scrolling up -> show navbar
          setVisible(true);
        }
        lastScrollY = currentScrollY;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 transform ${
        visible ? "translate-y-0" : "-translate-y-full"
      } ${
        scrolled
          ? "bg-white/90 backdrop-blur-md border-b border-slate-200/80 py-3 shadow-md"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#">
          <BrandLogo darkText={scrolled} />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-neutral-950/90 p-1.5 rounded-full border border-neutral-800/80 shadow-md backdrop-blur-md">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-4 py-2 text-sm font-medium text-neutral-200 hover:text-white hover:bg-white/10 rounded-full transition-all duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Action CTA Button */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={onOpenBrief}
            className="relative group overflow-hidden rounded-full px-6 py-2.5 bg-[#EE1C25] text-white font-semibold text-xs tracking-wider uppercase shadow-md active:scale-95 transition-all"
          >
            {/* Smooth Left-to-Right Single Color Fill on Hover */}
            <span className="absolute inset-0 bg-[#465199] -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
            <span className="relative z-10 flex items-center gap-1.5 font-medium">
              <Sparkles className="w-3.5 h-3.5 text-white" />
              <span>Start Project</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </span>
          </button>
        </div>

        {/* Mobile Hamburger Menu button */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-neutral-300 hover:text-white bg-neutral-900 border border-neutral-800 rounded-lg"
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
            className="md:hidden bg-black border-b border-neutral-800 px-6 py-6"
          >
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-bebas tracking-wide text-neutral-200 hover:text-[#EE1C25] transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4 border-t border-neutral-800 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBrief();
                  }}
                  className="relative group overflow-hidden w-full py-3 bg-[#EE1C25] text-white font-bebas text-lg tracking-wider rounded-xl transition-all flex items-center justify-center gap-2"
                >
                  <span className="absolute inset-0 bg-[#465199] -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
                  <span className="relative z-10 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-white" />
                    <span>START A PROJECT NOW</span>
                  </span>
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
