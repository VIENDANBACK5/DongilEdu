import Image from "next/image";
import { SITE, NAV } from "@/data/content";

const PROGRAMS = [
  "Hệ tiếng D4-1",
  "Hệ Đại học D2-2",
  "Hệ Thạc sĩ E-Visa",
  "Hệ Trao đổi D2-6",
];

export function Footer() {
  return (
    <footer className="bg-[#0f1115] text-[#c4c7d0]">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 lg:grid-cols-[1.1fr_2fr]">
        <div className="flex items-start gap-4">
          <Image
            src="/img/logo-new.png"
            alt={SITE.short}
            width={60}
            height={60}
            className="size-[60px] rounded-full border-2 border-brand object-cover"
          />
          <div>
            <strong className="block text-[0.98rem] leading-snug text-white">
              {SITE.name.toUpperCase()}
            </strong>
            <p className="mt-2 text-sm text-[#9aa0ad]">
              {SITE.kr} — Đồng hành cùng bạn trên hành trình du học Hàn Quốc.
            </p>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          <FooterCol title="Liên kết">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} className="block py-1 transition hover:text-gold">
                {n.label}
              </a>
            ))}
          </FooterCol>
          <FooterCol title="Hệ du học">
            {PROGRAMS.map((p) => (
              <a key={p} href="#programs" className="block py-1 transition hover:text-gold">
                {p}
              </a>
            ))}
          </FooterCol>
          <FooterCol title="Liên hệ">
            <span className="block py-1">Hotline: {SITE.hotline}</span>
            <span className="block py-1">{SITE.email}</span>
            <span className="block py-1">{SITE.address}</span>
          </FooterCol>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-center text-sm text-[#777e8b]">
        © {new Date().getFullYear()} {SITE.short}. Thiết kế website dựa trên hồ sơ
        giới thiệu trường của công ty.
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="text-sm text-[#9aa0ad]">
      <h4 className="mb-3 text-[0.95rem] font-semibold text-white">{title}</h4>
      {children}
    </div>
  );
}
