"use client";

import React, { useEffect, useRef } from "react";
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
        // Subtle skew text according to scroll velocity
        ScrollTrigger.create({
          onUpdate: (self) => {
            const velocity = self.getVelocity();
            const skew = gsap.utils.clamp(-8, 8, velocity / 180);

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
      className="py-5 sm:py-6 bg-[#07080E] border-y border-slate-800/80 relative overflow-hidden select-none z-10 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
    >
      <div
        ref={itemsRef}
        className="animate-marquee whitespace-nowrap flex items-center gap-10 sm:gap-14 transform-gpu"
      >
        {[...items, ...items, ...items, ...items].map((item, idx) => (
          <div key={idx} className="flex items-center gap-10 sm:gap-14 inline-flex group cursor-default">
            <span className="font-bebas text-3xl sm:text-5xl tracking-wider text-slate-100 group-hover:text-[#EE1C25] transition-colors duration-200">
              {item}
            </span>
            <span className="text-[#EE1C25] text-xl sm:text-2xl font-mono select-none">
              ✦
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
