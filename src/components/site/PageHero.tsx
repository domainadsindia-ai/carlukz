import type { ReactNode } from "react";

export function PageHero({
  image,
  eyebrow,
  title,
  subtitle,
  children,
}: {
  image: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative flex min-h-[75vh] items-end overflow-hidden pt-32 pb-20">
      <img
        src={image}
        alt=""
        className="animate-hero-zoom absolute inset-0 h-full w-full object-cover"
      />
      <div className="overlay-hero absolute inset-0" />
      <div className="overlay-bottom absolute inset-0" />
      <div className="relative mx-auto w-full max-w-7xl px-5">
        <p className="eyebrow animate-rise">{eyebrow}</p>
        <h1 className="text-hero animate-rise mt-5 max-w-4xl" style={{ animationDelay: "150ms" }}>
          {title}
        </h1>
        <p
          className="animate-rise mt-6 max-w-2xl text-lg text-muted-foreground"
          style={{ animationDelay: "300ms" }}
        >
          {subtitle}
        </p>
        {children}
      </div>
    </section>
  );
}
