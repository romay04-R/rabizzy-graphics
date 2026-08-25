import { services } from "@/lib/data";
import Reveal from "./Reveal";

export default function Services() {
  return (
    <section id="services" className="py-32 bg-offwhite text-black">
      <div className="max-w-[1240px] mx-auto px-[6vw]">
        <Reveal>
          <div className="flex items-center gap-3 mb-6">
            <span className="w-2.5 h-2.5 bg-burgundy-light" />
            <span className="font-mono text-[0.72rem] uppercase tracking-[0.14em] text-black/55">
              What I do
            </span>
          </div>
          <h2 className="font-display text-[clamp(2.4rem,5vw,4.4rem)] leading-[0.92] uppercase mb-4">
            Services Offered
          </h2>
        </Reveal>

        <div className="mt-8">
          {services.map((s, i) => (
            <Reveal key={s.code}>
              <div
                className={`grid grid-cols-[60px_1fr] md:grid-cols-[110px_1fr_1fr] gap-6 md:gap-10 items-start py-11 border-t border-black/10 ${
                  i === services.length - 1 ? "border-b" : ""
                }`}
              >
                <span className="font-display text-4xl text-burgundy">
                  {s.code}
                </span>
                <span className="font-display text-2xl md:text-3xl uppercase tracking-wide">
                  {s.name}
                </span>
                <p className="col-span-2 md:col-span-1 text-black/60 leading-relaxed text-base">
                  {s.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
