"use client";

import React, { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const faqs = [
    {
      q: "What is the typical turnaround time for a 3D Motion Graphic or Product Video?",
      a: "Our standard delivery timeframe is 3 to 5 business days for commercial videos and 3D product renders. Express 48-hour priority rush is available for tight launch deadlines.",
    },
    {
      q: "Do you handle Product Photoshoots directly or require shipped physical samples?",
      a: "Both! You can ship your physical product to our studio, OR send us 2D photos/CAD files which our 3D artists turn into hyper-realistic 3D renders and macro motion videos.",
    },
    {
      q: "How do you optimize YouTube Videos for high retention and views?",
      a: "We engineer video pacing with retention hooks in the first 5 seconds, custom kinetic lower thirds, animated sound effect callouts, visual zooms, and high CTR custom thumbnail design.",
    },
    {
      q: "What video formats and aspect ratios do you deliver?",
      a: "We export in crisp 4K Ultra HD in 16:9 (YouTube & Web), 9:16 (Instagram Reels, TikTok & Shorts), and 1:1 square format. All master files and project source assets are included.",
    },
    {
      q: "What is your revision policy?",
      a: "Every project includes 2 full rounds of free revisions for timing, color grading, sound design, and motion graphic adjustments.",
    },
  ];

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

      if (listRef.current) {
        gsap.fromTo(
          listRef.current.children,
          { opacity: 0, x: -30 },
          {
            opacity: 1,
            x: 0,
            stagger: 0.1,
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: {
              trigger: listRef.current,
              start: "top 80%",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="faq"
      className="py-24 bg-[#FFFFFF] relative border-t border-slate-200"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headerRef} className="text-center mb-12">
          <h2 className="font-bebas text-5xl sm:text-7xl text-slate-950 uppercase tracking-tight">
            EVERYTHING YOU NEED TO <span className="text-[#EE1C25]">KNOW</span>
          </h2>
        </div>

        <div ref={listRef} className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-[#F8FAFC] border border-slate-200 rounded-2xl overflow-hidden transition-all shadow-xs hover:border-slate-300"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-bebas text-2xl text-slate-900 tracking-wide hover:text-[#EE1C25] transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-6 h-6 shrink-0 transition-transform ${
                      isOpen ? "rotate-180 text-[#EE1C25]" : "text-slate-400"
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-slate-600 font-sans text-sm leading-relaxed border-t border-slate-200/80 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
