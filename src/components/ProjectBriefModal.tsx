"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, Send, CheckCircle2, ShieldCheck, Phone, MessageSquare } from "lucide-react";

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
    phone: "",
    brand: "",
    service: "video",
    budget: "₹25,000 – ₹50,000",
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

    const serviceLabels: Record<string, string> = {
      video: "Video Production",
      photoshoot: "Product Photography",
      podcast: "Podcast Production",
      youtube: "YouTube Content",
      corporate: "Brand & Corporate Films",
      creative: "Creative Direction",
    };

    const selectedService = serviceLabels[formData.service] || formData.service;
    const msg =
      `*NEW PROJECT BRIEF — MOTION MEDIA*%0A%0A` +
      `👤 *Name:* ${encodeURIComponent(formData.name)}%0A` +
      `📧 *Email:* ${encodeURIComponent(formData.email)}%0A` +
      `📱 *Phone:* ${encodeURIComponent(formData.phone || "Not provided")}%0A` +
      `🎬 *Service:* ${encodeURIComponent(selectedService)}%0A` +
      `💰 *Budget Range:* ${encodeURIComponent(formData.budget)}%0A` +
      `📝 *Project Details:* ${encodeURIComponent(formData.notes || "Discuss on call")}`;

    const waUrl = `https://wa.me/919358997828?text=${msg}`;
    if (typeof window !== "undefined") {
      window.open(waUrl, "_blank");
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl bg-neutral-950 border border-neutral-800 rounded-3xl overflow-hidden shadow-2xl p-6 sm:p-8 max-h-[92vh] overflow-y-auto"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white hover:bg-[#EE1C25] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {submitted ? (
            <div className="py-10 text-center space-y-5">
              <div className="w-20 h-20 bg-[#EE1C25] rounded-full flex items-center justify-center mx-auto shadow-2xl animate-bounce">
                <CheckCircle2 className="w-12 h-12 text-white" />
              </div>
              <h3 className="font-bebas text-4xl sm:text-5xl text-white tracking-wide">
                PROJECT BRIEF SUBMITTED!
              </h3>
              <p className="text-neutral-300 text-sm max-w-md mx-auto leading-relaxed">
                WhatsApp chat has been opened with your details. Our director will also review your brief and call or message you back directly.
              </p>

              {/* Direct Quick Action Buttons */}
              <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href="https://wa.me/919358997828"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bebas text-xl tracking-wider uppercase flex items-center justify-center gap-2 transition-all shadow-lg"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>Chat on WhatsApp (9358997828)</span>
                </a>

                <a
                  href="tel:+919358997828"
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 text-white font-bebas text-xl tracking-wider uppercase flex items-center justify-center gap-2 transition-all shadow-lg"
                >
                  <Phone className="w-4 h-4 text-[#EE1C25]" />
                  <span>Call: +91 93589 97828</span>
                </a>
              </div>

              <div className="pt-2">
                <button
                  onClick={onClose}
                  className="text-xs text-neutral-400 hover:text-white underline uppercase tracking-wider cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <div>
              <div className="mb-6">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-[#EE1C25] text-xs font-semibold uppercase tracking-wider mb-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  START YOUR MOTION PROJECT
                </div>
                <h3 className="font-bebas text-3xl sm:text-4xl text-white tracking-wide uppercase">
                  TELL US ABOUT YOUR <span className="text-[#EE1C25]">VISION</span>
                </h3>
                <p className="text-xs text-neutral-400">
                  Fill in your project brief details below. We reply directly on WhatsApp & Call.
                </p>

                {/* Instant Helpline Bar */}
                <div className="mt-3.5 flex flex-wrap items-center gap-3 p-2.5 rounded-xl bg-neutral-900/90 border border-neutral-800 text-xs font-mono">
                  <span className="text-neutral-400">Direct Helpline:</span>
                  <a
                    href="tel:+919358997828"
                    className="text-white hover:text-[#EE1C25] font-bold flex items-center gap-1 transition-colors"
                  >
                    <Phone className="w-3 h-3 text-[#EE1C25]" />
                    +91 93589 97828 (Call)
                  </a>
                  <span className="text-neutral-600">|</span>
                  <a
                    href="https://wa.me/919358997828"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#25D366] hover:underline font-bold flex items-center gap-1"
                  >
                    <MessageSquare className="w-3 h-3" />
                    WhatsApp
                  </a>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-400 mb-1">
                      YOUR NAME *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Dr. Aryan Mehta / Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-black border border-neutral-800 rounded-xl text-white text-sm focus:border-[#EE1C25] outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-400 mb-1">
                      PHONE / WHATSAPP NUMBER *
                    </label>
                    <input
                      required
                      type="tel"
                      placeholder="e.g. +91 93589 97828"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-black border border-neutral-800 rounded-xl text-white text-sm focus:border-[#EE1C25] outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-400 mb-1">
                      WORK EMAIL *
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="alex@brand.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-black border border-neutral-800 rounded-xl text-white text-sm focus:border-[#EE1C25] outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-400 mb-1">
                      PRIMARY SERVICE
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 bg-black border border-neutral-800 rounded-xl text-white text-sm focus:border-[#EE1C25] outline-none"
                    >
                      <option value="video">Video Production</option>
                      <option value="doctors">Doctors Personal Branding</option>
                      <option value="photoshoot">Product Photography</option>
                      <option value="podcast">Podcast Production</option>
                      <option value="youtube">YouTube Content</option>
                      <option value="corporate">Brand & Corporate Films</option>
                      <option value="creative">Creative Direction</option>
                    </select>
                  </div>
                </div>

                {/* Budget Range in Rupees from ₹10,000 to ₹5,00,000+ */}
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-400 mb-1">
                    BUDGET RANGE (IN RUPEES ₹)
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-4 py-3 bg-black border border-neutral-800 rounded-xl text-white text-sm focus:border-[#EE1C25] outline-none"
                  >
                    <option value="₹10,000 – ₹25,000">₹10,000 – ₹25,000 (Starter / Social Reels)</option>
                    <option value="₹25,000 – ₹50,000">₹25,000 – ₹50,000 (Social Ads & Podcasts)</option>
                    <option value="₹50,000 – ₹1,00,000">₹50,000 – ₹1,00,000 (Commercial & Brand Film)</option>
                    <option value="₹1,00,000 – ₹2,50,000">₹1,00,000 – ₹2,50,000 (Clinical Authority & Multi-Cam)</option>
                    <option value="₹2,50,000 – ₹5,00,000">₹2,50,000 – ₹5,00,000 (Full-Scale Production)</option>
                    <option value="₹5,00,000+">₹5,00,000+ (360° Studio Campaign / Retainer)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-400 mb-1">
                    PROJECT DETAILS / REFERENCE LINKS
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Describe your goals, doctor specialization, style preferences or paste reference video links..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-4 py-3 bg-black border border-neutral-800 rounded-xl text-white text-sm focus:border-[#EE1C25] outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="relative group overflow-hidden w-full py-4 bg-[#EE1C25] text-white font-bebas text-2xl uppercase tracking-wider rounded-xl transition-all shadow-xl flex items-center justify-center gap-2 active:scale-95 cursor-pointer"
                >
                  <span className="absolute inset-0 bg-[#465199] -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
                  <span className="relative z-10 flex items-center gap-2">
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                    <span>SUBMIT BRIEF & CONNECT ON WHATSAPP</span>
                  </span>
                </button>

                <div className="text-[11px] text-center text-slate-400 flex items-center justify-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#EE1C25]" />
                  <span>Direct Hotline: +91 93589 97828 • Fast 15-Min Response</span>
                </div>
              </form>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
