import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { gallery } from "@/data/gallery.js";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

type Item = { src: string; title: string; category: string; alt: string; size?: string };
const items = gallery as Item[];

const CATEGORIES = [
  "All",
  "Automotive Spare Parts",
  "Luxury Cars",
  "Sports Cars",
  "Premium Automotive Interiors",
] as const;

export function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [index, setIndex] = useState<number | null>(null);
  const touchX = useRef<number | null>(null);

  const filteredItems = useMemo(() => {
    if (selectedCategory === "All") return items;
    return items.filter((it) => it.category === selectedCategory);
  }, [selectedCategory]);

  const close = () => setIndex(null);
  const next = useCallback(
    () => setIndex((i) => (i === null ? i : (i + 1) % filteredItems.length)),
    [filteredItems.length],
  );
  const prev = useCallback(
    () => setIndex((i) => (i === null ? i : (i - 1 + filteredItems.length) % filteredItems.length)),
    [filteredItems.length],
  );

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [index, next, prev]);

  return (
    <>
      {/* Category Tabs */}
      <div
        className="mb-10 flex flex-wrap items-center gap-2 md:gap-3"
        role="tablist"
        aria-label="Gallery category filters"
      >
        {CATEGORIES.map((cat) => {
          const count =
            cat === "All" ? items.length : items.filter((it) => it.category === cat).length;
          const isActive = selectedCategory === cat;
          return (
            <button
              key={cat}
              role="tab"
              aria-selected={isActive}
              onClick={() => {
                setSelectedCategory(cat);
                setIndex(null);
              }}
              className={cn(
                "rounded-sm border px-3.5 py-2 text-xs font-semibold tracking-wider uppercase transition-all duration-300",
                isActive
                  ? "border-primary bg-primary text-primary-foreground shadow-sm"
                  : "border-border bg-card text-muted-foreground hover:border-primary/50 hover:text-foreground",
              )}
            >
              {cat}
              <span className="ml-1.5 text-[0.68rem] opacity-70">({count})</span>
            </button>
          );
        })}
      </div>

      {/* Masonry Grid */}
      <div className="grid auto-rows-[220px] grid-cols-2 gap-3 md:auto-rows-[260px] md:grid-cols-4">
        {filteredItems.map((it, i) => (
          <Reveal
            key={it.src}
            delay={(i % 4) * 80}
            className={cn(it.size === "wide" && "col-span-2", it.size === "tall" && "row-span-2")}
          >
            <button
              onClick={() => setIndex(i)}
              className="group relative h-full w-full overflow-hidden border border-border/40 bg-card text-left focus:outline-none focus:ring-1 focus:ring-primary"
              aria-label={`Open photo of ${it.title}`}
            >
              <img
                src={it.src}
                alt={it.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="overlay-bottom absolute inset-0 opacity-80 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute inset-x-0 bottom-0 p-4 transition-transform duration-500 group-hover:-translate-y-1">
                <p className="text-[0.65rem] font-semibold tracking-[0.25em] text-primary uppercase">
                  {it.category}
                </p>
                <p className="mt-1 font-display text-xl leading-tight text-foreground md:text-2xl line-clamp-2">
                  {it.title}
                </p>
              </div>
            </button>
          </Reveal>
        ))}
      </div>

      {/* Lightbox Modal */}
      {index !== null && filteredItems[index] && (
        <div
          role="dialog"
          aria-modal="true"
          className="animate-in fade-in fixed inset-0 z-[60] flex items-center justify-center bg-background/95 p-4 backdrop-blur-md duration-300"
          onClick={close}
          onTouchStart={(e) => (touchX.current = e.touches[0]!.clientX)}
          onTouchEnd={(e) => {
            if (touchX.current === null) return;
            const d = e.changedTouches[0]!.clientX - touchX.current;
            if (Math.abs(d) > 50) (d < 0 ? next : prev)();
            touchX.current = null;
          }}
        >
          <button
            onClick={close}
            className="absolute top-5 right-5 z-10 p-2 text-foreground/80 transition-colors hover:text-primary"
            aria-label="Close image viewer"
          >
            <X className="h-8 w-8" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="absolute left-3 z-10 p-3 text-foreground/80 transition-colors hover:text-primary md:left-8"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-10 w-10" />
          </button>
          <figure
            key={filteredItems[index].src}
            className="animate-in zoom-in-95 fade-in max-h-[90vh] max-w-5xl duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filteredItems[index].src}
              alt={filteredItems[index].alt}
              className="max-h-[75vh] w-auto max-w-full rounded-sm object-contain mx-auto shadow-2xl"
            />
            <figcaption className="mt-4 flex flex-wrap items-baseline justify-between gap-4 px-2">
              <span className="font-display text-2xl md:text-3xl text-foreground">
                {filteredItems[index].title}
              </span>
              <span className="text-xs tracking-[0.25em] text-primary uppercase">
                {filteredItems[index].category} · {index + 1}/{filteredItems.length}
              </span>
            </figcaption>
          </figure>
          <button
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute right-3 z-10 p-3 text-foreground/80 transition-colors hover:text-primary md:right-8"
            aria-label="Next image"
          >
            <ChevronRight className="h-10 w-10" />
          </button>
        </div>
      )}
    </>
  );
}
