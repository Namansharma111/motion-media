"use client";

import React, { useEffect, useRef } from "react";
import { Star, Zap } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const MarqueeTicker: React.FC = () => {
  const tickerRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement>(null);

  const items = [
    "VIDEO PRODUCTION",
    "PRODUCT PHOTOGRAPHY",
    "PODCAST PRODUCTION",
    "YOUTUBE CONTENT",
    "BRAND & CORPORATE FILMS",
    "CREATIVE DIRECTION",
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (itemsRef.current) {
        // Skew text according to scroll velocity
        ScrollTrigger.create({
          onUpdate: (self) => {
            const velocity = self.getVelocity();
            const skew = gsap.utils.clamp(-12, 12, velocity / 150);

            gsap.to(itemsRef.current, {
              skewX: skew,
              duration: 0.3,
              ease: "power2.out",
              overwrite: "auto",
            });
          },
        });
      }
    }, tickerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={tickerRef}
      className="py-6 bg-gradient-to-r from-[#EE1C25] via-[#2B388F] to-[#08090E] overflow-hidden border-t border-b border-slate-700/60 shadow-2xl relative select-none z-10"
    >
      <div
        ref={itemsRef}
        className="animate-marquee whitespace-nowrap flex items-center gap-8 transform-gpu"
      >
        {[...items, ...items, ...items].map((item, idx) => (
          <div key={idx} className="flex items-center gap-8 inline-flex">
            <span className="font-bebas text-3xl sm:text-5xl tracking-wider text-white uppercase drop-shadow-md">
              {item}
            </span>
            <Star className="w-6 h-6 text-[#CCFF00] fill-current animate-spin-slow shrink-0" />
          </div>
        ))}
      </div>
    </div>
  );
};
