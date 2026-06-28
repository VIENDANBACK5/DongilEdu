import { Reveal } from "./reveal";
import { cn } from "@/lib/utils";

interface Props {
  kicker: string;
  title: string;
  lead?: string;
  light?: boolean;
  className?: string;
}

export function SectionHeading({ kicker, title, lead, light, className }: Props) {
  return (
    <Reveal className={cn("mx-auto mb-12 max-w-2xl text-center", className)}>
      <span
        className={cn(
          "mb-3 inline-block text-xs font-bold uppercase tracking-[0.2em]",
          light ? "text-gold" : "text-brand"
        )}
      >
        {kicker}
      </span>
      <h2 className="font-heading text-3xl font-extrabold leading-tight sm:text-4xl">
        {title}
      </h2>
      {lead && (
        <p
          className={cn(
            "mt-4 text-base sm:text-lg",
            light ? "text-white/70" : "text-muted-foreground"
          )}
        >
          {lead}
        </p>
      )}
    </Reveal>
  );
}
