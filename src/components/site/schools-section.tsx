"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { Search, MapPin, CalendarDays, ArrowRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";
import {
  SCHOOLS,
  REGIONS,
  GROUPS,
  type School,
  type RegionKey,
  type GroupKey,
} from "@/data/schools";
import { cn } from "@/lib/utils";

const TIER_STYLES: Record<GroupKey, string> = {
  top1: "bg-gold text-[#3a2a00]",
  top2: "bg-[#e7eaf0] text-[#2a3550]",
  top3: "bg-[#e9f5ec] text-[#1f6b39]",
  expand: "bg-[#fde2e2] text-brand-dark",
};

function placeholderText(s: School) {
  return s.en.split(" ").slice(0, 2).join(" ");
}

function SchoolImage({ s, rounded }: { s: School; rounded?: boolean }) {
  if (s.img) {
    return (
      <Image
        src={`/img/schools/${s.img}.jpg`}
        alt={s.name}
        fill
        sizes="(max-width:768px) 100vw, 320px"
        className="object-cover transition duration-500 group-hover:scale-[1.06]"
      />
    );
  }
  return (
    <div
      className={cn(
        "absolute inset-0 grid place-items-center bg-gradient-to-br from-brand to-ink p-3 text-center font-heading text-2xl font-extrabold text-white/95",
        rounded && "text-3xl"
      )}
    >
      {placeholderText(s)}
    </div>
  );
}

function SchoolCard({ s, onOpen }: { s: School; onOpen: (s: School) => void }) {
  return (
    <button
      onClick={() => onOpen(s)}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card text-left transition duration-300 hover:-translate-y-1.5 hover:border-transparent hover:shadow-xl"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-ink">
        <SchoolImage s={s} />
        <span
          className={cn(
            "absolute left-3 top-3 rounded-md px-2 py-1 text-[0.72rem] font-bold",
            TIER_STYLES[s.group]
          )}
        >
          {GROUPS[s.group]}
        </span>
        <span className="absolute right-3 top-3 rounded-md bg-ink/75 px-2 py-1 text-[0.7rem] font-semibold text-white backdrop-blur-sm">
          {s.type}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="text-[1.05rem] font-bold leading-snug">{s.name}</div>
        <div className="mt-0.5 text-xs text-muted-foreground">{s.en}</div>
        <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-[0.82rem] text-ink-soft">
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="size-4 text-brand" /> {s.city}
          </span>
          {s.founded && (
            <span className="inline-flex items-center gap-1.5">
              <CalendarDays className="size-4 text-brand" /> {s.founded}
            </span>
          )}
        </div>
        <div className="mt-3.5 flex flex-wrap gap-1.5">
          {s.majors.slice(0, 3).map((m) => (
            <span
              key={m}
              className="rounded-md border border-border bg-cream px-2 py-1 text-[0.72rem] font-medium text-ink-soft"
            >
              {m}
            </span>
          ))}
        </div>
        <div className="mt-auto flex items-center gap-1.5 pt-4 text-sm font-semibold text-brand">
          Xem chi tiết
          <ArrowRight className="size-4 transition group-hover:translate-x-1" />
        </div>
      </div>
    </button>
  );
}

function Chip({
  active,
  onClick,
  children,
  dark,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "rounded-full border px-4 py-2 text-[0.88rem] font-medium transition",
        active
          ? dark
            ? "border-ink bg-ink text-white"
            : "border-brand bg-brand text-white"
          : "border-border bg-white text-ink-soft hover:border-brand hover:text-brand"
      )}
    >
      {children}
    </button>
  );
}

export function SchoolsSection() {
  const [region, setRegion] = useState<RegionKey | "all">("all");
  const [group, setGroup] = useState<GroupKey | "all">("all");
  const [q, setQ] = useState("");
  const [selected, setSelected] = useState<School | null>(null);

  const list = useMemo(() => {
    const query = q.trim().toLowerCase();
    return SCHOOLS.filter((s) => {
      if (region !== "all" && s.region !== region) return false;
      if (group !== "all" && s.group !== group) return false;
      if (query) {
        const hay = `${s.name} ${s.en} ${s.kr ?? ""} ${s.city} ${s.majors.join(" ")}`.toLowerCase();
        if (!hay.includes(query)) return false;
      }
      return true;
    });
  }, [region, group, q]);

  return (
    <section id="schools" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          kicker="Trường liên kết"
          title="Hơn 40 trường đại học & cao đẳng Hàn Quốc"
          lead="Lọc theo khu vực, xếp hạng hoặc tìm kiếm tên trường. Nhấn vào từng trường để xem chi tiết ngành học, điều kiện và chi phí."
        />

        {/* filters */}
        <div className="mb-4 flex flex-wrap items-center justify-between gap-4">
          <div className="relative w-full max-w-md flex-1">
            <Search className="absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Tìm tên trường (VD: Chung-Ang, Busan, Hanyang…)"
              className="h-11 rounded-full pl-10"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            <Chip active={region === "all"} onClick={() => setRegion("all")}>
              Tất cả khu vực
            </Chip>
            {(Object.keys(REGIONS) as RegionKey[]).map((k) => (
              <Chip key={k} active={region === k} onClick={() => setRegion(k)}>
                {REGIONS[k]}
              </Chip>
            ))}
          </div>
        </div>

        <div className="mb-8 flex flex-wrap gap-2">
          <Chip dark active={group === "all"} onClick={() => setGroup("all")}>
            Tất cả xếp hạng
          </Chip>
          {(Object.keys(GROUPS) as GroupKey[]).map((k) => (
            <Chip key={k} dark active={group === k} onClick={() => setGroup(k)}>
              {GROUPS[k]}
            </Chip>
          ))}
        </div>

        {/* grid */}
        {list.length > 0 ? (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((s) => (
              <SchoolCard key={s.slug} s={s} onOpen={setSelected} />
            ))}
          </div>
        ) : (
          <p className="py-16 text-center text-muted-foreground">
            Không tìm thấy trường phù hợp. Hãy thử từ khóa khác.
          </p>
        )}

        <p className="mt-6 text-center text-sm text-muted-foreground">
          Đang hiển thị <b className="text-ink">{list.length}</b> / {SCHOOLS.length} trường
        </p>
      </div>

      <SchoolDialog school={selected} onClose={() => setSelected(null)} />
    </section>
  );
}

function SchoolDialog({
  school,
  onClose,
}: {
  school: School | null;
  onClose: () => void;
}) {
  return (
    <Dialog open={!!school} onOpenChange={(o) => !o && onClose()}>
      <DialogContent
        showCloseButton
        className="nice-scroll max-h-[90vh] gap-0 overflow-y-auto p-0 sm:max-w-2xl"
      >
        {school && (
          <>
            <div className="relative aspect-[16/7] overflow-hidden bg-ink">
              <SchoolImage s={school} rounded />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/85 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                <span className="rounded-md bg-gold px-2 py-1 text-[0.72rem] font-bold text-[#3a2a00]">
                  {GROUPS[school.group]} · {school.type}
                </span>
                <DialogTitle className="mt-2 font-heading text-2xl font-extrabold text-white">
                  {school.name}
                </DialogTitle>
                <div className="text-sm text-white/80">
                  {school.en}
                  {school.kr ? ` · ${school.kr}` : ""}
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-7">
              <div className="mb-5 flex flex-wrap gap-2">
                <Fact label="Khu vực" value={REGIONS[school.region]} />
                <Fact label="Vị trí" value={school.city} />
                {school.founded && (
                  <Fact label="Thành lập" value={String(school.founded)} />
                )}
                {school.badge && (
                  <span className="rounded-lg border border-[#f4d77a] bg-gold-soft px-3 py-2 text-sm font-medium">
                    ★ {school.badge}
                  </span>
                )}
              </div>

              <Block title="Chuyên ngành nổi bật">
                <div className="flex flex-wrap gap-2">
                  {school.majors.map((m) => (
                    <span
                      key={m}
                      className="rounded-full bg-brand-soft px-3 py-1.5 text-sm text-brand-dark"
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </Block>

              <Block title="Kỳ tuyển sinh">
                <p className="font-semibold text-ink-soft">{school.intakes}</p>
              </Block>

              <Block title="Điều kiện tuyển sinh">
                <ul className="flex flex-col gap-2">
                  {school.reqs.map((r) => (
                    <li key={r} className="flex gap-2 text-sm text-ink-soft">
                      <span className="font-bold text-brand">✓</span> {r}
                    </li>
                  ))}
                </ul>
              </Block>

              {school.costs.length > 0 && (
                <Block title="Chi phí tham khảo">
                  <table className="w-full border-collapse">
                    <tbody>
                      {school.costs.map((c) => (
                        <tr key={c[0]} className="border-b border-border">
                          <td className="py-2.5 text-sm text-muted-foreground">{c[0]}</td>
                          <td className="py-2.5 text-right text-sm font-semibold">{c[1]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </Block>
              )}

              <div className="mt-4 flex flex-wrap items-center justify-between gap-3 rounded-xl bg-ink px-5 py-4 text-white">
                <span className="text-xs text-white/70">Tổng / ghi chú</span>
                <b className="text-[1.05rem] text-gold">{school.total}</b>
              </div>

              <div className="mt-5 flex flex-wrap gap-3">
                <Button
                  render={<a href="#contact" onClick={onClose} />}
                  className="rounded-full"
                >
                  Đăng ký trường này
                </Button>
                <Button
                  render={<a href="#contact" onClick={onClose} />}
                  variant="outline"
                  className="rounded-full border-brand text-brand hover:bg-brand-soft"
                >
                  Tư vấn thêm
                </Button>
              </div>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <span className="rounded-lg border border-border bg-cream px-3 py-2 text-sm font-medium">
      <b className="text-brand">{label}:</b> {value}
    </span>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-5">
      <h4 className="mb-3 text-[0.78rem] font-bold uppercase tracking-[0.12em] text-brand">
        {title}
      </h4>
      {children}
    </div>
  );
}
