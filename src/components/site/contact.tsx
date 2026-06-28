"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Reveal } from "./reveal";
import { SITE } from "@/data/content";

const PROGRAM_OPTIONS = [
  "Hệ tiếng (D4-1)",
  "Hệ Cao đẳng (D2-1)",
  "Hệ Đại học (D2-2)",
  "Hệ Thạc sĩ (D2-3 / E-Visa)",
  "Hệ Trao đổi (D2-6)",
  "Chưa rõ — cần tư vấn",
];

type Status = "idle" | "loading" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errMsg, setErrMsg] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const f = new FormData(form);
    setStatus("loading");
    setErrMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: f.get("name"),
          phone: f.get("phone"),
          email: f.get("email"),
          program: f.get("program"),
          message: f.get("message"),
        }),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error ?? "Lỗi không xác định");
      }
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrMsg(err instanceof Error ? err.message : "Gửi thất bại, vui lòng thử lại.");
    }
  }

  return (
    <section id="contact" className="bg-cream py-20 sm:py-24">
      <div className="mx-auto grid max-w-6xl items-start gap-12 px-5 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <span className="mb-3 inline-block text-xs font-bold uppercase tracking-[0.2em] text-brand">
            Liên hệ
          </span>
          <h2 className="font-heading text-3xl font-extrabold leading-tight sm:text-[2.4rem]">
            Đăng ký tư vấn miễn phí
          </h2>
          <p className="mt-3 text-ink-soft">
            Để lại thông tin, chuyên viên Dongil Edu sẽ liên hệ tư vấn lộ trình và
            chi phí phù hợp nhất với bạn.
          </p>
          <ul className="mt-7 flex flex-col gap-5">
            <ContactItem icon={MapPin} title="Văn phòng" value={SITE.address} />
            <ContactItem
              icon={Phone}
              title="Hotline"
              value={SITE.hotline}
              href={SITE.hotlineHref}
            />
            <ContactItem
              icon={Mail}
              title="Email"
              value={SITE.email}
              href={`mailto:${SITE.email}`}
            />
          </ul>
        </Reveal>

        <Reveal delay={0.1}>
          <Card className="p-7 shadow-sm">
            <form onSubmit={onSubmit} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Field label="Họ và tên *">
                <Input name="name" required placeholder="Nguyễn Văn A" />
              </Field>
              <Field label="Số điện thoại *">
                <Input name="phone" required placeholder="09xx xxx xxx" />
              </Field>
              <Field label="Email">
                <Input name="email" type="email" placeholder="email@gmail.com" />
              </Field>
              <Field label="Hệ du học quan tâm">
                <select
                  name="program"
                  defaultValue={PROGRAM_OPTIONS[0]}
                  className="h-9 w-full rounded-lg border border-input bg-transparent px-3 text-sm shadow-xs outline-none transition focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50"
                >
                  {PROGRAM_OPTIONS.map((p) => (
                    <option key={p}>{p}</option>
                  ))}
                </select>
              </Field>
              <Field label="Lời nhắn" full>
                <Textarea
                  name="message"
                  rows={3}
                  placeholder="Trường/ngành quan tâm, học lực, thời điểm dự kiến đi…"
                />
              </Field>
              <Button
                type="submit"
                disabled={status === "loading"}
                className="rounded-full sm:col-span-2"
              >
                {status === "loading" ? "Đang gửi…" : "Gửi đăng ký"}
              </Button>
              {status === "success" && (
                <p className="flex items-center justify-center gap-2 rounded-lg border border-[#bfe3c9] bg-[#e9f5ec] p-3 text-center text-sm font-semibold text-[#1f6b39] sm:col-span-2">
                  <CheckCircle2 className="size-4" />
                  Cảm ơn bạn! Dongil Edu sẽ liên hệ trong thời gian sớm nhất.
                </p>
              )}
              {status === "error" && (
                <p className="flex items-center justify-center gap-2 rounded-lg border border-red-200 bg-red-50 p-3 text-center text-sm font-semibold text-red-700 sm:col-span-2">
                  ⚠ {errMsg}
                </p>
              )}
            </form>
          </Card>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  label,
  children,
  full,
}: {
  label: string;
  children: React.ReactNode;
  full?: boolean;
}) {
  return (
    <div className={`flex flex-col gap-1.5 ${full ? "sm:col-span-2" : ""}`}>
      <Label className="text-sm">{label}</Label>
      {children}
    </div>
  );
}

function ContactItem({
  icon: Icon,
  title,
  value,
  href,
}: {
  icon: React.ElementType;
  title: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <>
      <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-brand text-white">
        <Icon className="size-5" />
      </span>
      <span>
        <b className="block text-[0.95rem]">{title}</b>
        <span className="text-sm text-muted-foreground">{value}</span>
      </span>
    </>
  );
  return (
    <li>
      {href ? (
        <a href={href} className="flex items-center gap-4 transition hover:opacity-80">
          {inner}
        </a>
      ) : (
        <div className="flex items-center gap-4">{inner}</div>
      )}
    </li>
  );
}
