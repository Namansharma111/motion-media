"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Sparkles } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface SelectedWorksProps {
  onOpenReel: () => void;
}

export const SelectedWorks: React.FC<SelectedWorksProps> = ({ onOpenReel }) => {
  const [filter, setFilter] = useState("all");
  
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      id: 1,
      title: "APEX CYBER-PODS PRODUCT COMMERCIAL",
      category: "product",
      categoryName: "Product Photography",
      client: "Apex Audio Global",
      metrics: "3.8M Views • +320% Conversion",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
      accent: "#EE1C25",
    },
    {
      id: 2,
      title: "NEO-ENERGY BEVERAGE MOTION REEL",
      category: "commercial",
      categoryName: "Commercial Video Ad",
      client: "Neo-Fuel Energy",
      metrics: "1.2M Instagram Reel Reach",
      image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=800&q=80",
      accent: "#2B388F",
    },
    {
      id: 3,
      title: "TECH UNBOXED YOUTUBE RETENTION MASTER",
      category: "youtube",
      categoryName: "YouTube Video Production",
      client: "Marques Tech World",
      metrics: "85% Avg Watch Retention",
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=800&q=80",
      accent: "#CCFF00",
    },
    {
      id: 4,
      title: "CYBERPUNK KINETIC TITLE STING",
      category: "creative",
      categoryName: "Creative Direction",
      client: "Future Gaming Fest",
      metrics: "4K Render • 60 FPS",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80",
      accent: "#EE1C25",
    },
    {
      id: 5,
      title: "LUXURY SMARTWATCH PRODUCT SHOOT",
      category: "product",
      categoryName: "Product Photography & Lighting",
      client: "Aero Watchmaker Paris",
      metrics: "+410% Amazon CTR",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
      accent: "#2B388F",
    },
    {
      id: 6,
      title: "ALGO-TRADING APP VIRAL AD CAMPAIGN",
      category: "commercial",
      categoryName: "Commercial Motion Ad",
      client: "Quantum Pay",
      metrics: "5.4M Impressions",
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80",
      accent: "#CCFF00",
    },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { opacity: 0, y: 40 },
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

      if (gridRef.current) {
        gsap.fromTo(
          gridRef.current.children,
          { opacity: 0, y: 60, scale: 0.92 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            stagger: 0.12,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: gridRef.current,
              start: "top 80%",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section
      ref={sectionRef}
      id="work"
      className="py-24 bg-[#08090E] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div ref={headerRef} className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="font-bebas text-5xl sm:text-7xl text-white uppercase tracking-tight">
              SELECTED <span className="text-[#EE1C25]">FEATURED WORKS</span>
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 mt-6 md:mt-0">
            {[
              { id: "all", label: "All Projects" },
              { id: "product", label: "Product Shoots" },
              { id: "commercial", label: "Commercial Ads" },
              { id: "youtube", label: "YouTube Production" },
              { id: "creative", label: "Creative Direction" },
            ].map((btn) => (
              <button
                key={btn.id}
                data-cursor="FILTER"
                onClick={() => setFilter(btn.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                  filter === btn.id
                    ? "bg-[#EE1C25] text-white shadow-lg shadow-red-900/50 scale-105"
                    : "bg-[#121626] text-slate-300 hover:text-white border border-slate-800"
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((proj) => (
              <motion.div
                key={proj.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                data-cursor="PLAY"
                onClick={onOpenReel}
                className="group relative rounded-3xl bg-[#0F1322] border border-slate-800 overflow-hidden cursor-pointer hover:border-[#EE1C25] transition-all duration-500 shadow-xl hover:-translate-y-2 hover:shadow-2xl hover:shadow-red-950/30"
              >
                {/* Image Container */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover group-hover:scale-115 transition-transform duration-700 filter brightness-90 contrast-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F1322] via-transparent to-transparent opacity-80" />

                  {/* Play Button overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black/40 backdrop-blur-xs">
                    <div className="w-16 h-16 rounded-full bg-[#EE1C25] text-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                      <Play className="w-7 h-7 fill-current translate-x-0.5" />
                    </div>
                  </div>

                  {/* Category Pill */}
                  <div className="absolute top-4 left-4 bg-[#08090E]/80 backdrop-blur-md px-3 py-1 rounded-full border border-slate-700 text-[11px] font-semibold text-slate-200">
                    {proj.categoryName}
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-6">
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-2 font-mono">
                    <span>CLIENT: {proj.client}</span>
                    <span className="text-[#CCFF00] font-bold">{proj.metrics}</span>
                  </div>

                  <h3 className="font-bebas text-2xl text-white tracking-wide group-hover:text-[#EE1C25] transition-colors line-clamp-1">
                    {proj.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
