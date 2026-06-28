import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";
import { PROCESS } from "@/data/content";

export function Process() {
  return (
    <section id="process" className="bg-ink py-20 text-white sm:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          light
          kicker="Quy trình du học"
          title="7 bước tại Việt Nam đến ngày bay"
          lead="Toàn bộ quy trình tại Việt Nam tối thiểu 4 tháng (trường không yêu cầu TOPIK) và 4 – 6 tháng với trường yêu cầu TOPIK."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-gold/40 hover:bg-gold/5">
                <div className="font-heading text-4xl font-extrabold leading-none text-gold">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h4 className="mt-3 text-lg font-bold">{s.title}</h4>
                <p className="mt-1.5 text-sm text-white/65">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
