"use client";

import React from "react";

interface BrandLogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
  darkText?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = "",
  size = 44,
  showText = true,
  darkText = false,
}) => {
  return (
    <div className={`flex items-center gap-3 group cursor-pointer ${className}`}>
      {/* Clean PNG logo image from public/mm.png without any shadow or background effects */}
      <img
        src="/mm.png"
        alt="MOTION MEDIA Logo"
        style={{ width: size, height: size }}
        className="object-contain shrink-0"
      />

      {showText && (
        <div className="flex flex-col">
          <span className={`font-bebas text-2xl tracking-wider leading-none group-hover:text-[#EE1C25] transition-colors ${
            darkText ? "text-slate-900" : "text-white"
          }`}>
            MOTION <span className="text-[#EE1C25]">MEDIA</span>
          </span>
          <span className={`text-[10px] tracking-[0.25em] font-semibold uppercase -mt-1 ${
            darkText ? "text-slate-500" : "text-slate-400"
          }`}>
            Visual Studio & VFX
          </span>
        </div>
      )}
    </div>
  );
};
