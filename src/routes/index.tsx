import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Award, Globe2, Layers, Truck } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { Gallery } from "@/components/site/Gallery";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";
import { whatsappUrl } from "@/lib/contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CARLUKZ | Luxury Car Spare Parts Worldwide & Premium Pre-Owned Cars in India" },
      {
        name: "description",
        content:
          "CARLUKZ specializes in worldwide luxury car spare parts trading, international spare parts import and export, and premium pre-owned luxury and sports car buying and selling across India.",
      },
      {
        property: "og:title",
        content: "CARLUKZ | Luxury Car Spare Parts Worldwide & Premium Pre-Owned Cars in India",
      },
      {
        property: "og:description",
        content: "Premium Auto Parts • Luxury Cars • Global Spare Parts Trade — Delhi, India.",
      },
      { property: "og:url", content: "https://carlukzprince.com/" },
      {
        property: "og:image",
        content: "https://carlukzprince.com/images/gallery/about-carlukz.jpg",
      },
      {
        name: "twitter:title",
        content: "CARLUKZ | Luxury Car Spare Parts Worldwide & Premium Pre-Owned Cars in India",
      },
      {
        name: "twitter:description",
        content: "Premium Auto Parts • Luxury Cars • Global Spare Parts Trade — Delhi, India.",
      },
      {
        name: "twitter:image",
        content: "https://carlukzprince.com/images/gallery/about-carlukz.jpg",
      },
    ],
    links: [{ rel: "canonical", href: "https://carlukzprince.com/" }],
  }),
  component: Home,
});

const BRANDS = [
  "BMW",
  "Mercedes-Benz",
  "Audi",
  "Porsche",
  "Jaguar",
  "Land Rover",
  "Bentley",
  "Maybach",
  "Rolls-Royce",
  "Maserati",
];

const SERVICES = [
  {
    n: "01",
    title: "Ultra-Luxury & Sports Car Spare Parts",
    img: "/images/gallery/spare-parts.jpg",
    desc: "Sourcing, purchasing and supplying premium multi-brand spare parts and automotive components for luxury and high-performance vehicles across international markets.",
    points: [
      "Multi-brand luxury car spare parts",
      "Premium automotive components",
      "Worldwide spare parts trading",
      "International sourcing and supply",
      "Customer-specific requirements",
    ],
    msg: "Hello CARLUKZ, I would like to enquire about ultra-luxury & sports car spare parts.",
  },
  {
    n: "02",
    title: "Pre-Owned Luxury & Sports Cars",
    img: "/images/gallery/preowned-luxury.jpg",
    desc: "Connecting buyers and sellers of premium pre-owned luxury, ultra-luxury and sports cars within the Indian automotive market.",
    points: [
      "Pre-owned luxury cars",
      "Ultra-luxury vehicles",
      "Premium sports cars",
      "Vehicle buying within India",
      "Vehicle selling within India",
    ],
    msg: "Hello CARLUKZ, I would like to enquire about pre-owned luxury & sports cars.",
  },
  {
    n: "03",
    title: "Global Automotive Spare Parts Import & Export",
    img: "/images/gallery/export-port.jpg",
    desc: "International buying, sourcing and selling of premium luxury and sports car spare parts. CARLUKZ connects with customers and business partners across global markets for automotive spare parts trading.",
    points: [
      "International spare parts import",
      "International spare parts export",
      "Global luxury car parts sourcing",
      "Multi-brand automotive components",
      "B2B spare parts trading",
    ],
    msg: "Hello CARLUKZ, I would like to enquire about global automotive spare parts import & export.",
  },
  {
    n: "04",
    title: "Vehicle Shipping & Support",
    img: "/images/gallery/vehicle-shipping.jpg",
    desc: "Vehicle sourcing, transportation assistance and related support for customers across India.",
    points: [
      "All-India vehicle transportation",
      "Interstate vehicle shipping support",
      "NOC and documentation assistance",
      "Vehicle quality checking",
      "Customer enquiry support",
    ],
    msg: "Hello CARLUKZ, I would like to enquire about vehicle shipping & support.",
  },
];

const WHY = [
  {
    icon: Layers,
    title: "Multi-Brand Expertise",
    text: "Specialized in German, British, European and Asian luxury automotive brands.",
    color: "text-primary",
  },
  {
    icon: Truck,
    title: "Nationwide Vehicle Support",
    text: "Providing vehicle sourcing, purchasing assistance and transportation support across India.",
    color: "text-brand-red",
  },
  {
    icon: Award,
    title: "Quality Focused",
    text: "Focused on quality checking, reliability and dependable automotive solutions.",
    color: "text-brand-cyan",
  },
  {
    icon: Globe2,
    title: "Global Spare Parts Trade",
    text: "International buying, selling, sourcing and trading of premium luxury and sports car spare parts across worldwide markets.",
    color: "text-primary",
  },
];

function Home() {
  const headline = ["Ultra-Luxury Car", "Spare Parts &", "Premium Pre-Owned Cars"];
  return (
    <>
      {/* HERO */}
      <section className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16">
        <img
          src="/images/gallery/hero-supercars.jpg"
          alt="Black Porsche and yellow Lamborghini at night"
          width={1920}
          height={1088}
          className="animate-hero-zoom absolute inset-0 h-full w-full object-cover object-[70%_center]"
        />
        <div className="overlay-hero absolute inset-0" />
        <div className="overlay-bottom absolute inset-0" />
        <div className="relative mx-auto w-full max-w-7xl px-5">
          <p className="eyebrow animate-rise">Premium Automotive Solutions</p>
          <h1 className="text-hero mt-6 max-w-5xl">
            {headline.map((l, i) => (
              <span key={l} className="block overflow-hidden">
                <span
                  className={`animate-rise block ${i === 1 ? "text-primary" : ""}`}
                  style={{ animationDelay: `${200 + i * 150}ms` }}
                >
                  {l}
                </span>
              </span>
            ))}
          </h1>
          <p
            className="animate-rise mt-8 max-w-xl text-lg text-muted-foreground"
            style={{ animationDelay: "700ms" }}
          >
            Premium multi-brand luxury car spare parts traded across global markets, alongside
            trusted pre-owned luxury and sports car buying and selling services across India.
          </p>
          <div
            className="animate-rise mt-10 flex flex-wrap gap-4"
            style={{ animationDelay: "900ms" }}
          >
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <WhatsAppIcon className="h-4 w-4" /> Send Your Requirement
            </a>
            <a href="#services" className="btn btn-outline">
              Explore Our Services <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="border-y border-border bg-surface py-8" aria-label="Brands we work with">
        <div className="overflow-hidden">
          <div className="animate-marquee flex w-max">
            {[...BRANDS, ...BRANDS].map((b, i) => (
              <span
                key={i}
                className="flex items-center gap-12 px-6 font-display text-4xl tracking-[0.12em] whitespace-nowrap text-foreground/60 transition-colors hover:text-foreground"
              >
                {b}
                <span className="h-2 w-2 rotate-45 bg-primary" />
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-24 lg:grid-cols-2 lg:gap-16">
        <Reveal
          variant="reveal-img"
          className="group relative mx-auto w-full max-w-lg overflow-hidden rounded-xs border border-border/60 bg-surface shadow-2xl transition-all duration-500 hover:border-primary/40 lg:max-w-none"
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden">
            <img
              src="/images/gallery/about-carlukz.jpg"
              alt="CARLUKZ luxury automotive fleet and premium spare parts"
              width={819}
              height={1024}
              decoding="async"
              className="h-full w-full object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
            <div className="brand-stripe absolute bottom-0 left-0 h-1.5 w-full" />
          </div>
        </Reveal>
        <div>
          <Reveal>
            <p className="eyebrow">About Us</p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="text-section mt-5">CARLUKZ – The Group of Companies</h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-4 font-display text-2xl text-primary">
              Driving Excellence in Luxury Automotive Solutions.
            </p>
          </Reveal>
          <Reveal delay={300} className="mt-6 space-y-4 text-muted-foreground">
            <p>
              CARLUKZ is a premium automotive business specializing in multi-brand ultra-luxury car
              spare parts traded across international markets and pre-owned luxury and sports cars
              bought and sold within India.
            </p>
            <p>
              Founded by Prince Johnson and headquartered in Delhi, India, CARLUKZ serves
              spare-parts customers and business partners worldwide while providing premium vehicle
              trading solutions to customers across India.
            </p>
            <p>
              With a focus on quality, reliability and customer satisfaction, we deal in German,
              British, European and Asian luxury automotive brands, bringing together premium
              automotive products and services under one name.
            </p>
          </Reveal>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {[
              "Ultra-Luxury & Sports Car Spare Parts – Worldwide Trading",
              "Premium Pre-Owned Luxury & Sports Cars – India",
              "International Import & Export of Automotive Spare Parts",
              "All-India Vehicle Sourcing & Shipping Support",
            ].map((h, i) => (
              <Reveal
                as="li"
                key={h}
                delay={350 + i * 80}
                className="flex items-start gap-3 border-l-2 border-primary bg-card px-4 py-3 text-sm font-medium"
              >
                {h}
              </Reveal>
            ))}
          </ul>
          <Reveal delay={700}>
            <Link to="/about" className="btn btn-outline mt-10">
              Discover More <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="scroll-mt-20 bg-surface py-28">
        <div className="mx-auto max-w-7xl px-5">
          <Reveal>
            <p className="eyebrow">What We Do</p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="text-section mt-5 max-w-3xl">Our Premium Automotive Services</h2>
          </Reveal>
          <div className="mt-16 space-y-6">
            {SERVICES.map((s, i) => (
              <Reveal
                key={s.n}
                delay={80}
                className={`group grid overflow-hidden border border-border bg-card lg:grid-cols-2 ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}
              >
                <div className="relative min-h-[280px] overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.title}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <span className="absolute top-4 left-5 font-display text-8xl text-foreground/90 drop-shadow-lg">
                    {s.n}
                  </span>
                </div>
                <div className="flex flex-col justify-center p-8 md:p-12">
                  <h3 className="text-4xl md:text-5xl">{s.title}</h3>
                  <p className="mt-4 text-muted-foreground">{s.desc}</p>
                  <ul className="mt-6 grid gap-2 text-sm sm:grid-cols-2">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 shrink-0 bg-primary" />
                        {p}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={whatsappUrl(s.msg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary mt-8 self-start"
                  >
                    <WhatsAppIcon className="h-4 w-4" /> Enquire Now
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="mx-auto max-w-7xl px-5 py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Reveal>
              <p className="eyebrow">Gallery</p>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="text-section mt-5 max-w-3xl">The World of Luxury Automobiles</h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-4 max-w-xl text-muted-foreground">
                Explore premium automotive spare parts, luxury vehicle components and selected
                pre-owned luxury and sports car highlights.
              </p>
            </Reveal>
          </div>
          <a
            href={whatsappUrl(
              "Hello CARLUKZ, I saw your gallery and would like to enquire about a vehicle.",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            Enquire About a Vehicle
          </a>
        </div>
        <div className="mt-14">
          <Gallery />
        </div>
      </section>

      {/* WHY */}
      <section className="border-t border-border bg-surface py-28">
        <div className="mx-auto max-w-7xl px-5">
          <Reveal>
            <h2 className="text-section">
              Why Choose <span className="text-primary">CARLUKZ?</span>
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
            {WHY.map((w, i) => (
              <Reveal
                key={w.title}
                delay={i * 120}
                className="group relative bg-surface p-8 transition-colors duration-500 hover:bg-card"
              >
                <span className="font-display text-6xl text-foreground/10">0{i + 1}</span>
                <w.icon
                  className={`mt-4 h-8 w-8 ${w.color} transition-transform duration-500 group-hover:-translate-y-1`}
                  strokeWidth={1.5}
                />
                <h3 className="mt-6 text-3xl">{w.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{w.text}</p>
                <span className="brand-stripe absolute bottom-0 left-0 h-0.5 w-0 transition-all duration-500 group-hover:w-full" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-36">
        <img
          src="/images/gallery/supercar-detail.jpg"
          alt=""
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-background/60" />
        <div className="overlay-hero absolute inset-0" />
        <div className="relative mx-auto max-w-7xl px-5">
          <Reveal>
            <h2 className="text-section max-w-4xl">
              Looking for Premium <span className="text-primary">Luxury Car Spare Parts?</span>
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              Share your automotive requirements with CARLUKZ. Our team is ready to assist with
              premium luxury car spare parts for international markets and pre-owned luxury vehicle
              buying and selling services across India.
            </p>
          </Reveal>
          <Reveal delay={300} className="mt-10 flex flex-wrap gap-4">
            <a
              href={whatsappUrl("Hello CARLUKZ, I would like to send my automotive requirement.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Send Your Requirement
            </a>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-red"
            >
              <WhatsAppIcon className="h-4 w-4" /> Chat on WhatsApp
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
