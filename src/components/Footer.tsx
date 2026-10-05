"use client";

import React, { useState, useEffect } from "react";
import { BrandLogo } from "./BrandLogo";
import { ArrowUp, Camera, Video, Share2, Globe, Mail, MapPin, Clock } from "lucide-react";

export const Footer: React.FC = () => {
  const [timeStr, setTimeStr] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeStr(
        now.toLocaleTimeString("en-US", {
          hour12: true,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#05060A] text-slate-400 border-t border-slate-800/80 pt-16 pb-12 relative overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <BrandLogo size={52} />
            <p className="text-slate-400 text-sm max-w-sm font-light leading-relaxed">
              MOTION MEDIA is a premier visual agency specializing in Video Production, Product Photography, Podcast Production, YouTube Content, Brand & Corporate Films, and Creative Direction.
            </p>

            <div className="flex items-center gap-2 text-xs font-mono text-slate-300 pt-2">
              <Clock className="w-4 h-4 text-[#CCFF00]" />
              <span>STUDIO LOCAL TIME: {timeStr || "11:30:00 PM"} IST (UTC+5:30)</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3">
            <h4 className="font-bebas text-xl text-white tracking-wider mb-4 uppercase">
              STUDIO NAVIGATION
            </h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#work" className="hover:text-[#EE1C25] transition-colors">Selected Work Showcase</a></li>
              <li><a href="#services" className="hover:text-[#EE1C25] transition-colors">Our Services</a></li>
              <li><a href="#compare" className="hover:text-[#EE1C25] transition-colors">Raw vs Motion Comparison</a></li>
              <li><a href="#calculator" className="hover:text-[#EE1C25] transition-colors">Instant Project Calculator</a></li>
              <li><a href="#faq" className="hover:text-[#EE1C25] transition-colors">Frequently Asked Questions</a></li>
            </ul>
          </div>

          {/* Contact & Socials */}
          <div className="md:col-span-4">
            <h4 className="font-bebas text-xl text-white tracking-wider mb-4 uppercase">
              CONNECT & INQUIRE
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#EE1C25]" />
                <a href="mailto:hello@motionmedia.studio" className="hover:text-white transition-colors">hello@motionmedia.studio</a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#2B388F]" />
                <span>Motion Media Studios • Global Remote & On-Site</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-6">
              {[
                { icon: Video, href: "#", color: "hover:text-red-500" },
                { icon: Camera, href: "#", color: "hover:text-pink-500" },
                { icon: Share2, href: "#", color: "hover:text-cyan-400" },
                { icon: Globe, href: "#", color: "hover:text-blue-500" },
              ].map((s, idx) => {
                const Icon = s.icon;
                return (
                  <a
                    key={idx}
                    href={s.href}
                    className={`w-10 h-10 rounded-xl bg-[#0F1322] border border-slate-800 flex items-center justify-center text-slate-400 ${s.color} hover:border-slate-600 transition-all`}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} MOTION MEDIA STUDIO. ALL RIGHTS RESERVED. CRAFTED WITH KINETIC MOTION VIBE.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 bg-[#0F1322] border border-slate-800 rounded-full text-slate-300 hover:text-white hover:border-[#EE1C25] transition-all"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-4 h-4 text-[#EE1C25]" />
          </button>
        </div>

      </div>
    </footer>
  );
};
