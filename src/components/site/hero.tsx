import Image from "next/image";
import { Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./reveal";
import { SITE } from "@/data/content";

const STATS = [
  { n: "40+", l: "Trường liên kết" },
  { n: "5", l: "Hệ du học" },
  { n: "4", l: "Kỳ nhập học / năm" },
];

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden text-white">
      <Image
        src="/img/hero.jpg"
        alt="Khuôn viên trường đại học Hàn Quốc"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="hero-overlay absolute inset-0" />

      <div className="relative mx-auto max-w-6xl px-5 py-20 sm:py-28">
        <Reveal className="max-w-2xl">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-gold/50 bg-gold/15 px-4 py-1.5 text-sm font-semibold text-gold">
            <Star className="size-3.5 fill-gold" /> Đối tác chính thức của hơn 40 trường tại Hàn Quốc
          </span>
          <h1 className="font-heading text-[clamp(2.4rem,5.4vw,4rem)] font-extrabold leading-[1.05]">
            Du học Hàn Quốc
            <br />
            <span className="text-gold">cùng Dongil Edu</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg text-white/85">
            “{SITE.slogan}” Lộ trình rõ ràng — chi phí minh bạch — đồng hành đến khi bay.
          </p>
          <div className="mt-8 flex flex-wrap gap-3.5">
            <Button
              render={<a href="#contact" />}
              size="lg"
              className="rounded-full"
            >
              Đăng ký tư vấn miễn phí <ArrowRight className="size-4" />
            </Button>
            <Button
              render={<a href="#schools" />}
              size="lg"
              variant="outline"
              className="rounded-full border-white/60 bg-transparent text-white hover:bg-white hover:text-ink"
            >
              Xem trường liên kết
            </Button>
          </div>

          <div className="mt-12 flex flex-wrap gap-9">
            {STATS.map((s) => (
              <div key={s.l} className="flex flex-col">
                <b className="font-heading text-3xl font-extrabold">{s.n}</b>
                <span className="text-sm text-white/70">{s.l}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
