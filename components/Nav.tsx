"use client";

import { useState } from "react";

const links = [
  { href: "#work", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "Background" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-[6vw] py-5 bg-black/70 backdrop-blur-md border-b border-white/10">
      <a href="#top" className="font-display text-xl tracking-wide">
        RABIZZY<span className="text-burgundy-light">.</span>
      </a>

      <div className="hidden md:flex items-center gap-9">
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="font-mono text-[0.72rem] uppercase tracking-[0.1em] text-white/60 hover:text-white transition-colors"
          >
            {l.label}
          </a>
        ))}
        <a
          href="#contact"
          className="font-mono text-[0.72rem] uppercase tracking-[0.1em] bg-burgundy border border-burgundy px-5 py-2.5 hover:bg-transparent hover:border-white transition-colors"
        >
          Start a project
        </a>
      </div>

      <button
        aria-label="menu"
        onClick={() => setOpen((v) => !v)}
        className="md:hidden flex flex-col gap-1.5"
      >
        <span className="w-6 h-[2px] bg-white" />
        <span className="w-6 h-[2px] bg-white" />
        <span className="w-6 h-[2px] bg-white" />
      </button>

      {open && (
        <div className="md:hidden fixed top-[68px] left-0 right-0 bg-black/95 border-b border-white/10 flex flex-col gap-5 px-[6vw] py-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-mono text-xs uppercase tracking-[0.1em] text-white/70"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="font-mono text-xs uppercase tracking-[0.1em] bg-burgundy px-5 py-3 text-center"
          >
            Start a project
          </a>
        </div>
      )}
    </nav>
  );
}
