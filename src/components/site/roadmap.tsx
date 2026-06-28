import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";
import { ROADMAP } from "@/data/content";

export function Roadmap() {
  return (
    <section id="roadmap" className="bg-cream py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          kicker="Lộ trình học tập"
          title="Từ hệ tiếng đến cơ hội việc làm"
        />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {ROADMAP.map((r, i) => (
            <Reveal key={r.no} delay={i * 0.06} className="relative">
              {/* connector line on desktop */}
              {i !== 0 && (
                <span className="absolute left-0 top-7 hidden h-0.5 w-1/2 -translate-x-1/2 bg-gradient-to-r from-brand to-gold lg:block" />
              )}
              <div className="relative text-center">
                <div className="mx-auto grid size-14 place-items-center rounded-full bg-brand font-heading text-xl font-extrabold text-white shadow-[0_8px_18px_-8px_rgba(193,18,31,0.7)]">
                  {r.no}
                </div>
                <h4 className="mt-4 text-lg font-bold">{r.title}</h4>
                <span className="mt-1 block text-sm font-semibold text-brand">
                  {r.time}
                </span>
                <p className="mt-2 text-sm text-muted-foreground">{r.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
