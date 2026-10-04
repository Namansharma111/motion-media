"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ScrollExpandVideo } from "@/components/ScrollExpandVideo";
import { MarqueeTicker } from "@/components/MarqueeTicker";
import { ServicesGrid } from "@/components/ServicesGrid";
import { BeforeAfterVideoSlider } from "@/components/BeforeAfterVideoSlider";
import { CreativeCalculator } from "@/components/CreativeCalculator";
import { SelectedWorks } from "@/components/SelectedWorks";
import { FAQSection } from "@/components/FAQSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { ShowreelModal } from "@/components/ShowreelModal";
import { ProjectBriefModal } from "@/components/ProjectBriefModal";
import { SmoothScroll } from "@/components/SmoothScroll";

export default function Home() {
  const [reelOpen, setReelOpen] = useState(false);
  const [briefOpen, setBriefOpen] = useState(false);
  const [briefDetails, setBriefDetails] = useState("");
  const [isMuted, setIsMuted] = useState(false);

  const handleOpenBriefWithDetails = (details: string) => {
    setBriefDetails(details);
    setBriefOpen(true);
  };

  return (
    <SmoothScroll>
      <main className="min-h-screen bg-[#08090E] text-slate-100 selection:bg-[#EE1C25] selection:text-white relative font-sans overflow-x-hidden">
        {/* Top Navbar */}
        <Navbar
          onOpenBrief={() => {
            setBriefDetails("");
            setBriefOpen(true);
          }}
          onOpenReel={() => setReelOpen(true)}
          isMuted={isMuted}
          onToggleMute={() => setIsMuted(!isMuted)}
        />

        {/* Hero Section */}
        <HeroSection
          onOpenReel={() => setReelOpen(true)}
          onOpenBrief={() => {
            setBriefDetails("");
            setBriefOpen(true);
          }}
        />

        {/* Scroll-Expanding Fullscreen Cinematic Video */}
        <ScrollExpandVideo />

        {/* Infinite Kinetic Text Ticker */}
        <MarqueeTicker />

        {/* Expertise & Services Grid */}
        <ServicesGrid
          onOpenBrief={() => {
            setBriefDetails("");
            setBriefOpen(true);
          }}
        />

        {/* Interactive Before vs After Motion Polish Slider */}
        <BeforeAfterVideoSlider />

        {/* Portfolio Selected Works Grid */}
        <SelectedWorks onOpenReel={() => setReelOpen(true)} />

        {/* Instant Project Cost & Turnaround Calculator */}
        <CreativeCalculator onOpenBriefWithDetails={handleOpenBriefWithDetails} />

        {/* FAQ Section */}
        <FAQSection />

        {/* Bottom Call To Action */}
        <CTASection
          onOpenBrief={() => {
            setBriefDetails("");
            setBriefOpen(true);
          }}
          onOpenReel={() => setReelOpen(true)}
        />

        {/* Footer */}
        <Footer />

        {/* Interactive Modals */}
        <ShowreelModal isOpen={reelOpen} onClose={() => setReelOpen(false)} />
        
        <ProjectBriefModal
          isOpen={briefOpen}
          onClose={() => setBriefOpen(false)}
          initialDetails={briefDetails}
        />
      </main>
    </SmoothScroll>
  );
}
