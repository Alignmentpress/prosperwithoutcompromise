"use client";

import { useState } from "react";

type LogoSize = "sm" | "md";

const sizeClasses = {
  sm: "h-8 w-auto",
  md: "h-10 w-auto",
};

const fallbackSizes = {
  sm: "w-8 h-8 text-sm",
  md: "w-10 h-10 text-lg",
};

export default function Logo({ size = "sm" }: { size?: LogoSize }) {
  const [imageError, setImageError] = useState(false);

  if (imageError) {
    return (
      <div
        className={`rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center flex-shrink-0 ${fallbackSizes[size]}`}
        aria-hidden
      >
        <span className="text-navy-950 font-serif font-bold">A</span>
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/images/Alignment%20-Press%20Logo.jpeg"
      alt="Alignment Press"
      className={sizeClasses[size]}
      onError={() => setImageError(true)}
    />
  );
}
