"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { heroPanels } from "@/lib/data";
import HeroArt from "./HeroArt";

const tickerItems = [
  "GRAPHIC DESIGN",
  "BRAND IDENTITY",
  "UI/UX DESIGN",
  "WEB DEVELOPMENT",
];

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const headlineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = headlineRef.current;
    if (!el) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `translate3d(${x * 18}px, ${y * 14}px, 0)`;
  }

  function handleMouseLeave() {
    const el = headlineRef.current;
    if (el) el.style.transform = "translate3d(0,0,0)";
  }

  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col overflow-hidden bg-black"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* eyebrow */}
      <div className="absolute top-[104px] left-0 right-0 z-30 flex flex-col items-center gap-4 px-[6vw] text-center pointer-events-none">
        <span className="font-mono text-[0.72rem] uppercase tracking-[0.14em] text-white/80 mix-blend-difference">
          Graphic Design Studio
        </span>
      </div>

      {/* tri-panel photographic background */}
      <div className="relative flex-1 flex min-h-screen">
        {heroPanels.map((panel, i) => (
          <div
            key={panel.key}
            className={`relative flex-1 origin-top overflow-hidden ${
              mounted ? "animate-panelIn" : "scale-y-0"
            }`}
            style={{ animationDelay: `${i * 120}ms` }}
          >
            <Image
              src={panel.src}
              alt={panel.alt}
              fill
              priority={i === 0}
              sizes="34vw"
              className="object-cover"
            />
            {/* brand color wash so each panel still reads as
                black / burgundy / white at a glance */}
            <div
              className="absolute inset-0"
              style={{ background: panel.wash }}
            />
          </div>
        ))}

        {/* custom abstract line-art layer, spanning all three panels */}
        <div className="absolute inset-0 z-10 pointer-events-none mix-blend-overlay opacity-70">
          <HeroArt />
        </div>

        {/* grain texture over the whole hero */}
        <div className="grain absolute inset-0 z-10 pointer-events-none" />

        {/* per-panel hex captions */}
        <div className="absolute bottom-[86px] left-0 right-0 flex z-20 pointer-events-none">
          {heroPanels.map((panel) => (
            <span
              key={panel.key}
              className="flex-1 text-center font-mono text-[0.66rem] tracking-[0.08em] text-white/70 mix-blend-difference"
            >
              {panel.hex}
            </span>
          ))}
        </div>

        {/* oversized headline, blends across all three panels */}
        <div
          ref={headlineRef}
          className="absolute inset-0 z-30 flex flex-col items-center justify-center px-[4vw] transition-transform duration-300 ease-out"
          style={{ mixBlendMode: "difference" }}
        >
          <h1 className="font-display text-white text-center leading-[0.86] tracking-[0.01em] text-[16vw] md:text-[10vw]">
            RABIZZY
          </h1>
          <h1 className="font-display text-white text-center leading-[0.86] tracking-[0.01em] text-[16vw] md:text-[10vw]">
            GRAPHICS
          </h1>
          <p className="font-body font-semibold text-white text-center max-w-[560px] text-base md:text-lg mt-4">
            Design that holds attention — from flyer to full brand.
          </p>
        </div>

        {/* scroll cue */}
        <div className="absolute bottom-9 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2">
          <span className="font-mono text-[0.66rem] tracking-[0.12em] text-white/70 mix-blend-difference">
            SCROLL
          </span>
          <span className="w-px h-9 bg-white/50 animate-pulseBar" />
        </div>
      </div>

      {/* service ticker strip */}
      <div className="relative z-30 overflow-hidden border-t border-white/10 bg-black py-4">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...tickerItems, ...tickerItems, ...tickerItems].map((item, i) => (
            <span
              key={i}
              className="font-mono text-xs tracking-[0.14em] text-white/55 mx-6 flex items-center gap-6"
            >
              {item}
              <span className="w-1.5 h-1.5 bg-burgundy-light inline-block" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
