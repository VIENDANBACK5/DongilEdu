"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NAV, SITE } from "@/data/content";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* top utility bar */}
      <div className="hidden bg-ink text-[13px] text-white/75 md:block">
        <div className="mx-auto flex h-9 max-w-6xl items-center justify-between px-5">
          <div className="flex items-center gap-6">
            <a href={SITE.hotlineHref} className="flex items-center gap-1.5 transition hover:text-white">
              <Phone className="size-3.5" /> Hotline: {SITE.hotline}
            </a>
            <a href={`mailto:${SITE.email}`} className="flex items-center gap-1.5 transition hover:text-white">
              <Mail className="size-3.5" /> {SITE.email}
            </a>
          </div>
          <span className="font-semibold tracking-wide text-gold">
            {SITE.kr} · Du học Hàn Quốc
          </span>
        </div>
      </div>

      {/* main header */}
      <header
        className={cn(
          "sticky top-0 z-50 border-b border-border/70 backdrop-blur-md transition",
          scrolled ? "bg-white/90 shadow-[0_6px_24px_-16px_rgba(0,0,0,0.35)]" : "bg-white/80"
        )}
      >
        <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between gap-3 px-5">
          <a href="#home" className="flex items-center gap-3">
            <Image
              src="/img/logo.png"
              alt={SITE.short}
              width={46}
              height={46}
              className="size-[46px] rounded-full border-2 border-brand object-cover"
              priority
            />
            <span className="flex flex-col leading-tight">
              <strong className="text-[1.1rem] tracking-wider text-brand">DONGIL EDU</strong>
              <small className="text-[0.72rem] tracking-wide text-muted-foreground">
                Tư Vấn Du Học Hàn Quốc
              </small>
            </span>
          </a>

          {/* desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="rounded-full px-3.5 py-2 text-[0.95rem] font-medium text-ink-soft transition hover:bg-brand-soft hover:text-brand"
              >
                {n.label}
              </a>
            ))}
            <Button render={<a href="#contact" />} className="ml-2 rounded-full">
              Tư vấn miễn phí
            </Button>
          </nav>

          {/* mobile toggle */}
          <button
            className="grid size-10 place-items-center rounded-lg lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Mở menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {/* mobile menu */}
        {open && (
          <nav className="mx-4 mb-4 flex flex-col gap-1 rounded-2xl border border-border bg-white p-2 shadow-lg lg:hidden">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 font-medium text-ink-soft transition hover:bg-brand-soft hover:text-brand"
              >
                {n.label}
              </a>
            ))}
            <Button
              render={<a href="#contact" onClick={() => setOpen(false)} />}
              className="mt-1 rounded-xl"
            >
              Tư vấn miễn phí
            </Button>
          </nav>
        )}
      </header>
    </>
  );
}
