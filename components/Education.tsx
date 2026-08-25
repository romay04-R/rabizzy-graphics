import { education } from "@/lib/data";
import Reveal from "./Reveal";

export default function Education() {
  return (
    <section id="about" className="py-32">
      <div className="max-w-[1240px] mx-auto px-[6vw]">
        <Reveal>
          <div className="flex items-center gap-3 mb-6">
            <span className="w-2.5 h-2.5 bg-burgundy-light" />
            <span className="font-mono text-[0.72rem] uppercase tracking-[0.14em] text-white/60">
              Background
            </span>
          </div>
          <h2 className="font-display text-[clamp(2.4rem,5vw,4.4rem)] leading-[0.92] uppercase mb-12">
            Education &amp; Training
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16">
          {education.map((e, i) => (
            <Reveal key={i}>
              <div className="border-l-2 border-burgundy-light pl-6 py-6 mb-2">
                <div className="font-display text-lg uppercase mb-1.5">
                  {e.role}
                </div>
                <div className="font-mono text-[0.68rem] tracking-[0.08em] text-white/50 mb-2.5">
                  {e.meta}
                </div>
                <p className="text-white/60 text-sm leading-relaxed">
                  {e.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
