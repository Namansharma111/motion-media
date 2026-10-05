"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, Send, CheckCircle2, ShieldCheck, Film, Camera, Video } from "lucide-react";

interface ProjectBriefModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialDetails?: string;
}

export const ProjectBriefModal: React.FC<ProjectBriefModalProps> = ({
  isOpen,
  onClose,
  initialDetails = "",
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    brand: "",
    service: "video",
    budget: "$1k - $3k",
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialDetails) {
      setFormData((prev) => ({ ...prev, notes: initialDetails }));
    }
  }, [initialDetails]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl bg-[#0F1322] border border-slate-700 rounded-3xl overflow-hidden shadow-2xl p-6 sm:p-8"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-[#EE1C25] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-20 h-20 bg-[#CCFF00] rounded-full flex items-center justify-center mx-auto shadow-2xl animate-bounce">
                <CheckCircle2 className="w-12 h-12 text-black" />
              </div>
              <h3 className="font-bebas text-4xl text-white tracking-wide">
                PROJECT BRIEF SUBMITTED SUCCESSFULLY!
              </h3>
              <p className="text-slate-300 text-sm max-w-md mx-auto">
                Our Creative Director will review your specifications and email you a full storyboard & timeline proposal within 2 hours.
              </p>
            </div>
          ) : (
            <div>
              <div className="mb-6">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#161B2E] border border-slate-700 text-[#CCFF00] text-xs font-semibold uppercase tracking-wider mb-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  START YOUR MOTION PROJECT
                </div>
                <h3 className="font-bebas text-4xl text-white tracking-wide uppercase">
                  TELL US ABOUT YOUR <span className="text-[#EE1C25]">VISION</span>
                </h3>
                <p className="text-xs text-slate-400">
                  Fill in your project brief details below for an instant producer response.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-400 mb-1">YOUR NAME</label>
                    <input
                      required
                      type="text"
                      placeholder="Alex Rivera"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-[#08090E] border border-slate-800 rounded-xl text-white text-sm focus:border-[#EE1C25] outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-400 mb-1">WORK EMAIL</label>
                    <input
                      required
                      type="email"
                      placeholder="alex@brand.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-[#08090E] border border-slate-800 rounded-xl text-white text-sm focus:border-[#EE1C25] outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-400 mb-1">PRIMARY SERVICE</label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 bg-[#08090E] border border-slate-800 rounded-xl text-white text-sm focus:border-[#EE1C25] outline-none"
                    >
                      <option value="video">Video Production</option>
                      <option value="photoshoot">Product Photography</option>
                      <option value="podcast">Podcast Production</option>
                      <option value="youtube">YouTube Content</option>
                      <option value="corporate">Brand & Corporate Films</option>
                      <option value="creative">Creative Direction</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-400 mb-1">BUDGET RANGE</label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-3 bg-[#08090E] border border-slate-800 rounded-xl text-white text-sm focus:border-[#EE1C25] outline-none"
                    >
                      <option value="$500 - $1k">$500 - $1,000</option>
                      <option value="$1k - $3k">$1,000 - $3,000</option>
                      <option value="$3k - $8k">$3,000 - $8,000</option>
                      <option value="$8k+">$8,000+ Full Campaign</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-400 mb-1">PROJECT DETAILS / REFERENCE LINKS</label>
                  <textarea
                    rows={3}
                    placeholder="Describe your product, target audience, style preferences or paste reference video links..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-4 py-3 bg-[#08090E] border border-slate-800 rounded-xl text-white text-sm focus:border-[#EE1C25] outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#EE1C25] hover:bg-[#ff2535] text-white font-bebas text-2xl uppercase tracking-wider rounded-xl transition-all shadow-xl flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  <span>SUBMIT BRIEF & RECEIVE PROPOSAL</span>
                </button>

                <div className="text-[11px] text-center text-slate-400 flex items-center justify-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#CCFF00]" />
                  <span>Strict NDA Protected • Fast 2-Hour Response</span>
                </div>
              </form>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
