"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play, Pause, Volume2, VolumeX, Sparkles, CheckCircle2, ShieldAlert } from "lucide-react";

interface ShowreelModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ShowreelModal: React.FC<ShowreelModalProps> = ({ isOpen, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [fps, setFps] = useState("60 FPS");

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-5xl bg-[#090C16] border border-slate-700 rounded-3xl overflow-hidden shadow-2xl flex flex-col"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between p-4 sm:p-6 border-b border-slate-800 bg-[#0E1220]">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-[#EE1C25] animate-ping" />
              <div>
                <h3 className="font-bebas text-2xl text-white tracking-wider">
                  MOTION MEDIA • 2026 OFFICIAL CINEMATIC SHOWREEL
                </h3>
                <p className="text-xs text-slate-400 font-mono">
                  4K ULTRA HD • COLOUR GRADED • KINETIC SOUND MIX
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2.5 rounded-full bg-slate-800/80 hover:bg-[#EE1C25] text-slate-300 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Video Player Canvas */}
          <div className="relative aspect-[16/9] w-full bg-black overflow-hidden group">
            <video
              autoPlay
              loop
              muted={isMuted}
              playsInline
              controls
              className="w-full h-full object-cover"
              src="https://www.pexels.com/download/video/15705885/"
            />

            {/* Glowing Graphic overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70 pointer-events-none" />

            {/* Kinetic Graphic HUD overlay */}
            <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-700 text-xs font-mono text-[#CCFF00] flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>VIDEO ENGINE: CINEMA 4K PRO</span>
            </div>

            <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-700 text-xs font-mono text-slate-300">
              {fps}
            </div>

            {/* Play/Pause Button Overlay in Center */}
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-[#EE1C25] text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-transform"
            >
              {isPlaying ? (
                <Pause className="w-8 h-8 fill-current" />
              ) : (
                <Play className="w-8 h-8 fill-current translate-x-0.5" />
              )}
            </button>

            {/* Bottom Controls Bar */}
            <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-md p-3 rounded-2xl border border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="text-white hover:text-[#CCFF00]"
                >
                  {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                </button>
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="text-white hover:text-[#CCFF00]"
                >
                  {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                </button>
                <span className="text-xs font-mono text-slate-300">01:42 / 03:00</span>
              </div>

              <div className="flex items-center gap-2">
                {["60 FPS", "120 FPS HIGH SLOW-MO"].map((rate) => (
                  <button
                    key={rate}
                    onClick={() => setFps(rate)}
                    className={`px-2.5 py-1 rounded text-[10px] font-mono font-bold ${
                      fps === rate
                        ? "bg-[#CCFF00] text-black"
                        : "bg-slate-800 text-slate-400 hover:text-white"
                    }`}
                  >
                    {rate}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Details */}
          <div className="p-4 sm:p-6 bg-[#0E1220] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-[#CCFF00]" />
              <span>Includes Product Shoots, Brand Comms, YouTube Shorts & Creative Direction</span>
            </div>

            <button
              onClick={onClose}
              className="w-full sm:w-auto px-6 py-2.5 bg-[#EE1C25] hover:bg-red-600 text-white font-bebas text-lg tracking-wider rounded-xl transition-colors"
            >
              CLOSE REEL & BOOK PROJECT
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
