import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Reveal } from "./reveal";
import { WHY, SITE } from "@/data/content";

export function About() {
  return (
    <section id="about" className="py-20 sm:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 lg:grid-cols-2">
        <Reveal className="relative">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
            <Image
              src="/img/cta.jpg"
              alt="Du học Hàn Quốc cùng Dongil Edu"
              fill
              sizes="(max-width:1024px) 100vw, 540px"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-5 right-2 rounded-2xl bg-brand px-6 py-4 text-center text-white shadow-xl">
            <b className="block text-xl">{SITE.kr}</b>
            <span className="text-xs tracking-wide text-white/80">Dongil Edu</span>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <span className="mb-3 inline-block text-xs font-bold uppercase tracking-[0.2em] text-brand">
            Về chúng tôi
          </span>
          <h2 className="font-heading text-3xl font-extrabold leading-tight sm:text-[2.4rem]">
            {SITE.name}
          </h2>
          <p className="mt-4 text-ink-soft">
            Dongil Edu đồng hành cùng học sinh – sinh viên Việt Nam trên hành
            trình chinh phục giấc mơ du học Hàn Quốc. Chúng tôi kết nối trực tiếp
            với hơn 40 trường đại học, cao đẳng uy tín, từ các trường TOP đầu tại
            Seoul, Busan đến những trường có chính sách học bổng và việc làm hấp
            dẫn.
          </p>
          <div className="my-7 grid gap-5 sm:grid-cols-2">
            {WHY.map((w) => (
              <div key={w.title} className="border-l-[3px] border-brand pl-4">
                <b className="block">{w.title}</b>
                <span className="text-sm text-muted-foreground">{w.desc}</span>
              </div>
            ))}
          </div>
          <Button render={<a href="#contact" />} size="lg" className="rounded-full">
            Liên hệ với chúng tôi
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
