import { Award, ShieldCheck, GraduationCap, CheckCircle2 } from "lucide-react";

const ITEMS = [
  { icon: Award, title: "Trường TOP đầu", desc: "Chung-Ang, Hanyang, Sookmyung…" },
  { icon: ShieldCheck, title: "Hồ sơ minh bạch", desc: "Cam kết chi phí, không phát sinh" },
  { icon: GraduationCap, title: "Đào tạo tiếng Hàn", desc: "Học tại Dongil Edu 3–6 tháng" },
  { icon: CheckCircle2, title: "Hỗ trợ A–Z", desc: "Từ tư vấn đến khi nhập học" },
];

export function TrustStrip() {
  return (
    <section className="bg-ink text-white">
      <div className="mx-auto grid max-w-6xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {ITEMS.map((it, i) => (
          <div
            key={it.title}
            className="flex items-center gap-4 px-6 py-7 border-white/10 [&:not(:last-child)]:border-b sm:[&:not(:last-child)]:border-b lg:border-b-0 lg:[&:not(:last-child)]:border-r"
            style={{ animationDelay: `${i * 60}ms` }}
          >
            <it.icon className="size-8 shrink-0 text-gold" />
            <div>
              <b className="block text-base">{it.title}</b>
              <span className="text-sm text-white/60">{it.desc}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
