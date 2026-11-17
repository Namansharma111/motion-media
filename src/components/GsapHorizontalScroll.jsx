"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Play, ArrowRight, Stethoscope, Video, Flame, Mic, Sparkles, Check } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const projectPreviews = [
    {
        name: "Apex Cyber Commercial",
        src: "https://images.unsplash.com/photo-1759182538720-64f2ef06c662?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    },
    {
        name: "Doctor Authority Reel Series",
        src: "https://images.unsplash.com/photo-1781127444759-c7641b9ec337?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    },
];

const motionProjects = [
    {
        id: "doctor-branding",
        title: "CLINICAL AUTHORITY & MEDICAL REELS",
        client: "Dr. Aryan Mehta · Ortho Clinic",
        category: "DOCTORS BRANDING",
        categoryIcon: Stethoscope,
        metric: "4.2x Inquiries",
        reach: "18M+ Reach",
        description:
            "Authority reel series breaking down surgeries and doctor Q&As into high-trust stories that convert viewers into clinic consultations.",
        image:
            "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=1200&q=85",
        tags: ["Clinical Q&A", "Patient Trust"],
        accentColor: "#EE1C25",
        hoverBorder: "hover:border-[#EE1C25]/80 hover:shadow-[0_0_25px_rgba(238,28,37,0.25)]",
        btnColor: "bg-[#EE1C25]",
        btnHoverColor: "bg-[#465199]",
    },
    {
        id: "commercial-audio",
        title: "APEX CYBER-AUDIO 4K COMMERCIAL",
        client: "Apex Audio Labs · OTT Spot",
        category: "COMMERCIAL VIDEO",
        categoryIcon: Video,
        metric: "3.8M Views",
        reach: "+320% Sales",
        description:
            "Cinema commercial captured with high-speed macro lenses and custom sound architecture for nationwide OTT and digital ad campaigns.",
        image:
            "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&q=85",
        tags: ["Cinema 4K", "Macro Lighting"],
        accentColor: "#465199",
        hoverBorder: "hover:border-[#465199]/80 hover:shadow-[0_0_25px_rgba(70,81,153,0.3)]",
        btnColor: "bg-[#465199]",
        btnHoverColor: "bg-[#EE1C25]",
    },
    {
        id: "viral-beverage",
        title: "NEO-ENERGY BEVERAGE MOTION REEL",
        client: "Neo-Fuel · Viral Campaign",
        category: "VIRAL REELS",
        categoryIcon: Flame,
        metric: "1.2M Reach",
        reach: "14.5% CTR",
        description:
            "High-octane social reel combining speed ramps, dynamic liquid physics, and rhythmic sound design engineered for viral replay.",
        image:
            "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=1200&q=85",
        tags: ["Liquid FX", "Viral 9:16"],
        accentColor: "#EE1C25",
        hoverBorder: "hover:border-[#EE1C25]/80 hover:shadow-[0_0_25px_rgba(238,28,37,0.25)]",
        btnColor: "bg-[#EE1C25]",
        btnHoverColor: "bg-[#465199]",
    },
    {
        id: "podcast-studio",
        title: "FOUNDERS UNCUT 4K PODCAST",
        client: "Founders Network · Multi-Cam",
        category: "PODCAST PRODUCTION",
        categoryIcon: Mic,
        metric: "Top 5 Spotify",
        reach: "12+ Episodes",
        description:
            "Broadcast-grade 3-camera podcast production, acoustic mastering, and high-retention viral YouTube Shorts cutdown pipeline.",
        image:
            "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=1200&q=85",
        tags: ["3-Cam 4K", "Viral Shorts"],
        accentColor: "#465199",
        hoverBorder: "hover:border-[#465199]/80 hover:shadow-[0_0_25px_rgba(70,81,153,0.3)]",
        btnColor: "bg-[#465199]",
        btnHoverColor: "bg-[#EE1C25]",
    },
    {
        id: "luxury-watch",
        title: "AERO CHRONO LUXURY PRODUCT SHOOT",
        client: "Aero Horology Geneva · E-Comm",
        category: "PRODUCT CINEMA",
        categoryIcon: Sparkles,
        metric: "+410% Amazon CTR",
        reach: "Macro 4K",
        description:
            "Ultra-crisp macro cinematography highlighting micro-mechanical movement precision and sapphire crystal reflections.",
        image:
            "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=85",
        tags: ["Macro Cinema", "Precision Lighting"],
        accentColor: "#EE1C25",
        hoverBorder: "hover:border-[#EE1C25]/80 hover:shadow-[0_0_25px_rgba(238,28,37,0.25)]",
        btnColor: "bg-[#EE1C25]",
        btnHoverColor: "bg-[#465199]",
    },
];

const GsapHorizontalScroll = ({ onOpenReel, onOpenBrief }) => {
    const sectionRef = useRef(null);
    const trackRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const section = sectionRef.current;
        const track = trackRef.current;
        if (!section || !track) return;

        const matchMediaContext = gsap.matchMedia();

        matchMediaContext.add("(min-width: 768px)", () => {
            const getScrollAmount = () => {
                return -(track.scrollWidth - window.innerWidth + 80);
            };

            const horizontalTween = gsap.to(track, {
                x: getScrollAmount,
                ease: "none",
                scrollTrigger: {
                    trigger: section,
                    start: "top top",
                    end: () => `+=${Math.abs(getScrollAmount())}`,
                    pin: true,
                    scrub: 1,
                    anticipatePin: 1,
                    invalidateOnRefresh: true,
                    onUpdate: (self) => {
                        const hint = section.querySelector(".hscroll-scroll-hint");
                        if (hint) {
                            hint.style.opacity = self.progress > 0.03 ? "0" : "1";
                        }
                    },
                },
            });

            // Subtle parallax & reveal for each project card
            const cards = track.querySelectorAll(".motion-project-card");
            cards.forEach((card) => {
                gsap.fromTo(
                    card,
                    { opacity: 0.82, scale: 0.96 },
                    {
                        opacity: 1,
                        scale: 1,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: card,
                            containerAnimation: horizontalTween,
                            start: "left 90%",
                            end: "left 40%",
                            scrub: 0.5,
                        },
                    }
                );
            });
        });

        return () => matchMediaContext.revert();
    }, []);

    return (
        <section
            id="featured-showcase"
            ref={sectionRef}
            className="relative w-full overflow-hidden bg-[#08090E] select-none py-14 md:py-0 md:h-[100svh] flex flex-col justify-center"
        >
            {/* Background Soft Studio Ambient Glows */}
            <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] bg-[#EE1C25]/8 blur-[140px] rounded-full pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-[#465199]/12 blur-[140px] rounded-full pointer-events-none" />

            {/* Top subtle border */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />

            {/* Main Track: horizontal on md+, centered vertically with ample clearance */}
            <div
                ref={trackRef}
                className="flex flex-col md:flex-row md:items-center h-full w-full md:w-max px-4 sm:px-8 md:px-12 pt-20 md:pt-16 pb-8 gap-5 sm:gap-6 md:gap-7"
            >
                {/* Intro Anchor Block - Compact & Focused */}
                <div className="relative z-10 shrink-0 w-full md:w-[320px] lg:w-[350px] my-auto pr-0 md:pr-4">
                    {/* Eyebrow Pill */}
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 border border-white/15 backdrop-blur-md mb-3.5 shadow-lg">
                        <span className="w-2 h-2 rounded-full bg-[#EE1C25] animate-ping" />
                        <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#EE1C25] font-bold">
                            Motion Media Showcase
                        </span>
                    </div>

                    <h2 className="font-bebas text-4xl sm:text-5xl lg:text-6xl text-white uppercase tracking-tight leading-[0.92]">
                        CRAFTED FOR <br />
                        <span className="text-[#EE1C25]">MAXIMUM IMPACT.</span>
                    </h2>

                    <p className="mt-3 text-neutral-300 font-sans text-xs sm:text-sm font-light leading-relaxed max-w-xs sm:max-w-sm">
                        Signature commercial films, doctor authority reels, and viral video campaigns engineered for high retention and quantifiable conversion.
                    </p>

                    {/* Quick Studio Proof Badges */}
                    <div className="flex flex-wrap items-center gap-2 mt-5">
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/[0.05] border border-white/10 text-[11px] font-sans text-neutral-200">
                            <span className="text-[#FBBC04]">★★★★★</span>
                            <span className="font-bold text-white">4.9/5</span>
                            <span className="text-neutral-400 text-[10px]">Google</span>
                        </div>

                        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/[0.05] border border-white/10 text-[11px] font-sans text-neutral-200">
                            <span className="font-bold text-white">120M+</span>
                            <span className="text-neutral-400 text-[10px]">Views</span>
                        </div>
                    </div>

                    {/* Reel Modal Trigger Button */}
                    {onOpenReel && (
                        <button
                            onClick={onOpenReel}
                            className="group/reel mt-5 inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-[#EE1C25] text-white border border-white/15 hover:border-[#EE1C25] font-bebas text-base tracking-wider uppercase transition-all duration-300 shadow-xl"
                        >
                            <div className="w-5 h-5 rounded-full bg-[#EE1C25] group-hover/reel:bg-white text-white group-hover/reel:text-[#EE1C25] flex items-center justify-center transition-colors">
                                <Play className="w-2.5 h-2.5 fill-current translate-x-0.5" />
                            </div>
                            <span>WATCH STUDIO SHOWREEL</span>
                        </button>
                    )}
                </div>

                {/* 5 Sleek Cinematic Motion Media Project Cards */}
                {motionProjects.map((project) => {
                    return (
                        <div
                            key={project.id}
                            className={`motion-project-card group relative rounded-2xl overflow-hidden border border-neutral-800 ${project.hoverBorder} transition-all duration-500 shadow-2xl w-full sm:w-[320px] md:w-[350px] lg:w-[370px] h-[430px] sm:h-[450px] md:h-[460px] max-h-[470px] shrink-0 flex flex-col justify-end p-5 select-none`}
                        >
                            {/* Background Image - High-Definition Cinema Still (Full Vibrant Clarity) */}
                            <img
                                src={project.image}
                                alt={project.title}
                                className="absolute inset-0 w-full h-full object-cover filter brightness-[1.0] contrast-[1.06] group-hover:scale-105 transition-transform duration-700 ease-out z-0"
                            />

                            {/* Bottom Scrim Only (Top 70% Uncovered & Crystal Clear) */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 via-32% to-transparent z-0 pointer-events-none" />

                            {/* Center Play Button on Hover */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
                                <div className="w-13 h-13 rounded-full bg-black/60 backdrop-blur-md border border-white/40 text-white flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform duration-300">
                                    <Play className="w-5 h-5 fill-white translate-x-0.5 text-white" />
                                </div>
                            </div>

                            {/* Bottom Content Block */}
                            <div className="relative z-10 pt-2">
                                {/* Client / Context */}
                                <p className="text-[10px] font-mono uppercase tracking-wider text-neutral-300 mb-1 truncate">
                                    {project.client} · <span className="text-white font-bold">{project.reach}</span>
                                </p>

                                {/* Project Title */}
                                <h3 className="font-bebas text-2xl sm:text-3xl text-white uppercase tracking-tight leading-tight drop-shadow-md truncate">
                                    {project.title}
                                </h3>

                                {/* Description */}
                                <p className="mt-1 text-xs text-neutral-300 font-sans line-clamp-2 leading-relaxed">
                                    {project.description}
                                </p>

                                {/* Feature Tags */}
                                <div className="flex flex-wrap items-center gap-1.5 mt-2.5 mb-3">
                                    {project.tags.map((tag) => (
                                        <div
                                            key={tag}
                                            className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-black/70 backdrop-blur-md border border-white/15 text-[10px] font-medium text-white shadow-sm"
                                        >
                                            <div
                                                className="w-3 h-3 rounded-full flex items-center justify-center shrink-0 text-white"
                                                style={{ backgroundColor: project.accentColor }}
                                            >
                                                <Check className="w-1.5 h-1.5 stroke-[3]" />
                                            </div>
                                            <span>{tag}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Card Action Button */}
                                {/* <button
                                    onClick={onOpenReel || onOpenBrief}
                                    className={`relative group/btn overflow-hidden w-full py-2.5 ${project.btnColor} text-white font-bebas text-base tracking-wider uppercase rounded-xl shadow-lg active:scale-95 transition-all flex items-center justify-center gap-1.5`}
                                >
                                    <span
                                        className={`absolute inset-0 ${project.btnHoverColor} -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-300 ease-out`}
                                    />
                                    <span className="relative z-10 flex items-center gap-1.5">
                                        <Play className="w-3 h-3 fill-current" />
                                        <span>WATCH CASE STUDY REEL</span>
                                    </span>
                                </button> */}
                            </div>
                        </div>
                    );
                })}

                {/* Closing Card: Studio Action & Next Project Brief */}
                <div className="relative z-10 shrink-0 w-full sm:w-[320px] md:w-[350px] lg:w-[370px] h-[430px] sm:h-[450px] md:h-[460px] max-h-[470px] rounded-2xl overflow-hidden border border-[#465199]/40 bg-gradient-to-br from-[#0c0e18] via-[#08090e] to-black p-5 flex flex-col justify-between shadow-2xl">
                    <div>
                        {/* Studio Badge */}
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#465199]/20 border border-[#465199]/40 text-[#465199] text-[10px] font-mono font-bold uppercase tracking-wider mb-2.5">
                            <Sparkles className="w-3 h-3 text-white" />
                            <span className="text-white">YOUR VISION, DIRECTED</span>
                        </div>

                        <h3 className="font-bebas text-3xl sm:text-4xl text-white uppercase tracking-tight leading-[0.95]">
                            READY FOR YOUR <br />
                            <span className="text-[#EE1C25]">NEXT COMMERCIAL?</span>
                        </h3>

                        <p className="mt-1.5 text-neutral-300 font-sans text-xs leading-relaxed line-clamp-2">
                            From scriptwriting and casting to high-speed 4K cinematography, sound design, and viral social cutdowns.
                        </p>

                        {/* Configured Project Previews Grid */}
                        <div className="grid grid-cols-2 gap-2 mt-3 mb-3">
                            {projectPreviews.map(({ name, src }) => (
                                <div
                                    key={name}
                                    className="group/thumb relative rounded-lg overflow-hidden border border-white/15 bg-black/60 aspect-[16/10]"
                                >
                                    <Image
                                        src={src}
                                        alt={name}
                                        fill
                                        sizes="(max-width: 768px) 45vw, 180px"
                                        className="object-cover group-hover/thumb:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex items-end p-1.5">
                                        <p className="text-[10px] font-sans font-semibold text-white drop-shadow-sm line-clamp-1">
                                            {name}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Action CTAs */}
                    <div className="mt-auto flex flex-col gap-2">
                        {onOpenBrief && (
                            <button
                                onClick={onOpenBrief}
                                className="relative group/btn overflow-hidden w-full py-2.5 bg-[#EE1C25] text-white font-bebas text-lg tracking-wider uppercase rounded-xl shadow-lg active:scale-95 transition-all flex items-center justify-center gap-1.5"
                            >
                                <span className="absolute inset-0 bg-[#465199] -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-300 ease-out" />
                                <span className="relative z-10 flex items-center gap-1.5">
                                    <span>BOOK CREATIVE BRIEF</span>
                                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                                </span>
                            </button>
                        )}

                        <a
                            href="#work"
                            className="w-full py-2 px-3 rounded-xl border border-white/20 hover:border-white/50 text-white font-bebas text-sm tracking-wider uppercase transition-colors text-center"
                        >
                            EXPLORE ALL WORK ↗
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom border line */}
            <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />

            {/* Floating Horizontal Scroll Hint (Desktop) */}
            <div
                className="hscroll-scroll-hint hidden md:flex pointer-events-none transition-opacity duration-300 absolute bottom-5 right-8 z-20 items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/60 border border-white/10 backdrop-blur-md text-[10px] font-mono tracking-widest uppercase text-neutral-300"
            >
                <span>SCROLL HORIZONTALLY</span>
                <svg
                    className="w-3.5 h-3.5 animate-bounce text-[#EE1C25]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                </svg>
            </div>
        </section>
    );
};

export default GsapHorizontalScroll;
