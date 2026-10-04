"use client";

import React, { useRef, useState, useEffect } from "react";
import { Volume2, VolumeX, Play, Pause } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface ScrollExpandVideoProps {
  videoSrc?: string;
}

export const ScrollExpandVideo: React.FC<ScrollExpandVideoProps> = ({
  videoSrc = "https://www.pexels.com/download/video/15705885/",
}) => {
  const pinSectionRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const videoWrapperRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (pinSectionRef.current && cardRef.current) {
        // Pinned ScrollTrigger scrub timeline
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: pinSectionRef.current,
            start: "top top",
            end: "+=120%", // Pin section for smooth scrubbing
            scrub: 1.2,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        // 1. Expand Card from 75% width to 100% full screen
        tl.fromTo(
          cardRef.current,
          {
            width: "75%",
            height: "58vh",
            borderRadius: "32px",
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
          },
          {
            width: "100%",
            height: "100vh",
            borderRadius: "0px",
            boxShadow: "0 0 0 0 rgba(0, 0, 0, 0)",
            ease: "none",
          }
        );

        // 2. Parallax scale inner video
        if (videoWrapperRef.current) {
          tl.fromTo(
            videoWrapperRef.current,
            { scale: 1.2 },
            { scale: 1.0, ease: "none" },
            0
          );
        }
      }
    }, pinSectionRef);

    return () => ctx.revert();
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div
      ref={pinSectionRef}
      className="relative w-full h-screen bg-[#F7F8FC] bg-noise flex items-center justify-center overflow-hidden z-20 select-none"
    >
      {/* Ambient Studio Glow behind video */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[380px] bg-gradient-to-r from-[#EE1C25]/10 via-[#2B388F]/12 to-[#CCFF00]/15 blur-[130px] pointer-events-none rounded-full" />

      {/* Pure Expanding Cinematic Video Container */}
      <div
        ref={cardRef}
        className="relative overflow-hidden flex items-center justify-center bg-black border border-slate-200/80 shadow-2xl transition-all max-w-[100vw]"
      >
        <div
          ref={videoWrapperRef}
          className="w-full h-full relative flex items-center justify-center"
        >
          <video
            ref={videoRef}
            autoPlay
            loop
            muted={isMuted}
            playsInline
            className="w-full h-full object-cover pointer-events-auto"
            src={videoSrc}
          >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Minimal Play/Pause & Sound Controls */}
        <div className="absolute bottom-6 right-6 z-30 flex items-center gap-3 pointer-events-auto">
          <button
            onClick={togglePlay}
            className="p-3.5 rounded-full bg-black/70 backdrop-blur-xl border border-white/30 text-white hover:bg-[#EE1C25] transition-all hover:scale-110 shadow-2xl"
            title={isPlaying ? "Pause Video" : "Play Video"}
          >
            {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 fill-current translate-x-0.5" />}
          </button>

          <button
            onClick={toggleMute}
            className="p-3.5 rounded-full bg-black/70 backdrop-blur-xl border border-white/30 text-white hover:bg-[#2B388F] transition-all hover:scale-110 shadow-2xl flex items-center gap-2"
            title={isMuted ? "Unmute Sound" : "Mute Sound"}
          >
            {isMuted ? <VolumeX className="w-5 h-5 text-red-400" /> : <Volume2 className="w-5 h-5 text-[#CCFF00]" />}
            <span className="text-xs font-mono font-bold hidden sm:inline text-slate-200 pr-1">
              {isMuted ? "MUTED" : "SOUND ON"}
            </span>
          </button>
        </div>

      </div>
    </div>
  );
};
