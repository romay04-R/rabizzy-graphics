import { projects } from "@/lib/data";
import Reveal from "./Reveal";
import Image from "next/image";

export default function Work() {
  return (
    <section id="work" className="relative py-32 bg-black">
      <div className="max-w-[1240px] mx-auto px-[6vw] h-full flex flex-col justify-center">
        <Reveal>
          <div className="flex justify-between items-end gap-6 flex-wrap mb-14">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-2.5 h-2.5 bg-burgundy-light" />
                <span className="font-mono text-[0.72rem] uppercase tracking-[0.14em] text-white/60">
                  Selected work
                </span>
              </div>
              <h2 className="font-display text-[clamp(2.4rem,5vw,4.4rem)] leading-[0.92] uppercase">
                The Portfolio
              </h2>
            </div>
            <p className="max-w-[500px] text-white/60 text-base leading-relaxed">
              A working record — flyers, brand systems, interfaces, and full
              builds. Replace these with your own project images and case
              studies.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[2px] bg-white/10">
          {projects.map((p, i) => (
            <article
              key={i}
              className="group relative aspect-[4/5] bg-ink overflow-hidden cursor-pointer"
            >
              <Image
                src={p.image}
                alt={p.name}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/90" />
              <span className="absolute top-4 right-4 z-10 font-mono text-[0.58rem] text-white/60">
                {p.code}
              </span>
              <div className="relative z-10 p-6 h-full flex flex-col justify-end">
                <span className="inline-block bg-burgundy text-white px-2.5 py-1 font-mono text-[0.62rem] uppercase tracking-[0.1em] mb-2.5 w-fit">
                  {p.tag}
                </span>
                <div className="font-display text-xl tracking-wide">
                  {p.name}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
