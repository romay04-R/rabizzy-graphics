export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 px-[6vw] pt-14 pb-8">
      <div className="flex justify-between items-end flex-wrap gap-8">
        <div>
          <div className="font-display text-xl mb-2.5">
            RABIZZY<span className="text-burgundy-light">.</span>
          </div>
          <div className="text-white/55 text-sm">
            Graphic Design · Brand Identity · UI/UX · Web Development
          </div>
        </div>

        <div className="flex gap-6 flex-wrap">
          <a
            href="#work"
            className="font-mono text-[0.7rem] uppercase tracking-[0.1em] text-white/55 hover:text-white transition-colors"
          >
            Work
          </a>
          <a
            href="#services"
            className="font-mono text-[0.7rem] uppercase tracking-[0.1em] text-white/55 hover:text-white transition-colors"
          >
            Services
          </a>
          <a
            href="#about"
            className="font-mono text-[0.7rem] uppercase tracking-[0.1em] text-white/55 hover:text-white transition-colors"
          >
            Background
          </a>
          <a
            href="mailto:hello@rabizzygraphics.com"
            className="font-mono text-[0.7rem] uppercase tracking-[0.1em] text-white/55 hover:text-white transition-colors"
          >
            Email
          </a>
          <a
            href="#"
            className="font-mono text-[0.7rem] uppercase tracking-[0.1em] text-white/55 hover:text-white transition-colors"
          >
            Instagram
          </a>
        </div>
      </div>

      <div className="text-center mt-9 text-white/30 text-xs font-mono tracking-wide">
        © Rabizzy Graphics — All Rights Reserved
      </div>
    </footer>
  );
}
