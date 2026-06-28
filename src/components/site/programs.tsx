import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";
import { VISAS } from "@/data/content";

export function Programs() {
  return (
    <section id="programs" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          kicker="Các hình thức du học"
          title="Chọn lộ trình phù hợp với bạn"
          lead="5 hệ du học Hàn Quốc theo từng loại visa — khác nhau về thời gian học, điều kiện đầu vào và quy định làm thêm."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {VISAS.map((v, i) => (
            <Reveal key={v.tag} delay={i * 0.06}>
              <Card className="group relative h-full overflow-hidden border-border p-6 transition duration-300 hover:-translate-y-1.5 hover:shadow-xl">
                <span className="absolute inset-x-0 top-0 h-1 bg-brand" />
                <Badge className="bg-brand-soft text-brand hover:bg-brand-soft">
                  {v.tag}
                </Badge>
                <h3 className="mt-3 text-xl font-bold">{v.name}</h3>
                <ul className="mt-4 flex flex-col gap-2.5">
                  {v.rows.map((r) => (
                    <li key={r[0]} className="flex gap-2.5 text-sm text-ink-soft">
                      <b className="w-[78px] shrink-0 font-semibold text-muted-foreground">
                        {r[0]}
                      </b>
                      <span>{r[1]}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </Reveal>
          ))}
        </div>

        <p className="mx-auto mt-7 max-w-3xl text-center text-sm text-muted-foreground">
          * Hệ “Đại đô thị” (D2-1) cho phép làm thêm tới 30h/tuần và hệ Cao đẳng
          E7-M tới 35h/tuần. Liên hệ để được tư vấn chi tiết theo từng địa phương.
        </p>
      </div>
    </section>
  );
}
