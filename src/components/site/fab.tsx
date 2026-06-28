import { MessageCircle } from "lucide-react";

export function Fab() {
  return (
    <a
      href="#contact"
      aria-label="Tư vấn ngay"
      className="animate-bob fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-brand px-5 py-3.5 text-sm font-semibold text-white shadow-[0_12px_30px_-8px_rgba(193,18,31,0.7)] transition hover:bg-brand-dark"
    >
      <MessageCircle className="size-5" />
      <span className="hidden sm:inline">Tư vấn ngay</span>
    </a>
  );
}
