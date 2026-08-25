import Reveal from "./Reveal";

export default function CTA() {
  return (
    <section id="contact" className="bg-burgundy py-36 px-[6vw] text-center">
      <Reveal className="flex flex-col items-center">
        <h2 className="font-display text-white text-[clamp(2.6rem,7vw,5.6rem)] leading-[0.92] uppercase max-w-[900px] mb-7">
          Let&apos;s build your brand.
        </h2>
        <p className="text-white/80 max-w-[480px] mb-11 text-base md:text-lg">
          Have a project in mind — a flyer, a full identity, or a website?
          Tell me about it.
        </p>
        <a
          href="mailto:hello@rabizzygraphics.com"
          className="inline-block bg-white text-black px-11 py-[18px] font-mono text-[0.78rem] uppercase tracking-[0.12em] border border-white hover:bg-transparent hover:text-white transition-colors"
        >
          Start a project
        </a>
      </Reveal>
    </section>
  );
}
