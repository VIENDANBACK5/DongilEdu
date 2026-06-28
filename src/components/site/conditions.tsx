import { Check, FileText, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Reveal } from "./reveal";
import { CONDITIONS, DOCS } from "@/data/content";

export function Conditions() {
  return (
    <section id="conditions" className="bg-cream py-20 sm:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-2">
        <Reveal>
          <span className="mb-3 inline-block text-xs font-bold uppercase tracking-[0.2em] text-brand">
            Điều kiện & hồ sơ
          </span>
          <h2 className="font-heading text-3xl font-extrabold leading-tight sm:text-[2.4rem]">
            Bạn có đủ điều kiện du học?
          </h2>
          <p className="mt-3 text-muted-foreground">
            Chương trình dành cho các bạn trong độ tuổi <b>18 – 30</b>, mong muốn
            vừa học vừa trải nghiệm và làm việc tại Hàn Quốc.
          </p>
          <ul className="mt-6 flex flex-col gap-3">
            {CONDITIONS.map((c) => (
              <li key={c} className="flex items-start gap-3">
                <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-brand text-white">
                  <Check className="size-3" strokeWidth={3} />
                </span>
                <span className="text-ink-soft">{c}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1}>
          <Card className="border-border p-8 shadow-sm">
            <h3 className="text-xl font-bold">Giấy tờ cần chuẩn bị</h3>
            <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {DOCS.map((d) => (
                <span
                  key={d}
                  className="flex items-center gap-2 rounded-lg border border-border bg-cream px-3.5 py-3 text-sm font-medium"
                >
                  <FileText className="size-4 shrink-0 text-brand" /> {d}
                </span>
              ))}
            </div>
            <Button
              render={<a href="#contact" />}
              className="mt-6 w-full rounded-full"
            >
              Nhận tư vấn hồ sơ chi tiết <ArrowRight className="size-4" />
            </Button>
          </Card>
        </Reveal>
      </div>
    </section>
  );
}
