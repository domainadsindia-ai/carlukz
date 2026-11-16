import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Users, Layers, ShieldCheck, Headphones, Globe2 } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About CARLUKZ | Luxury Car Spare Parts Worldwide & Pre-Owned Cars in India" },
      {
        name: "description",
        content:
          "CARLUKZ – The Group of Companies, founded by Prince Johnson in Delhi: worldwide luxury car spare parts trading and premium pre-owned cars across India.",
      },
      {
        property: "og:title",
        content: "About CARLUKZ | Luxury Car Spare Parts Worldwide & Pre-Owned Cars in India",
      },
      { property: "og:description", content: "Driving Excellence in Luxury Automotive Solutions." },
      { property: "og:url", content: "https://carlukzprince.com/about" },
      {
        property: "og:image",
        content: "https://carlukzprince.com/images/gallery/about-carlukz.jpg",
      },
      {
        name: "twitter:title",
        content: "About CARLUKZ | Luxury Car Spare Parts Worldwide & Pre-Owned Cars in India",
      },
      {
        name: "twitter:description",
        content: "Driving Excellence in Luxury Automotive Solutions.",
      },
      {
        name: "twitter:image",
        content: "https://carlukzprince.com/images/gallery/about-carlukz.jpg",
      },
    ],
    links: [{ rel: "canonical", href: "https://carlukzprince.com/about" }],
  }),
  component: About,
});

const EXPERTISE = [
  {
    n: "01",
    title: "Ultra-Luxury & Sports Car Spare Parts",
    img: "/images/gallery/spare-parts.jpg",
    text: "Sourcing, purchasing and supplying premium multi-brand spare parts and automotive components for luxury and high-performance vehicles across international markets.",
  },
  {
    n: "02",
    title: "Pre-Owned Luxury & Sports Cars",
    img: "/images/gallery/preowned-luxury.jpg",
    text: "Connecting buyers and sellers of premium pre-owned luxury, ultra-luxury and sports cars within the Indian automotive market.",
  },
  {
    n: "03",
    title: "Global Automotive Spare Parts Import & Export",
    img: "/images/gallery/export-port.jpg",
    text: "International buying, sourcing and selling of premium luxury and sports car spare parts for customers and business partners across global markets.",
  },
  {
    n: "04",
    title: "Vehicle Shipping & Support",
    img: "/images/gallery/vehicle-shipping.jpg",
    text: "Vehicle sourcing, transportation assistance, NOC and documentation support for customers across India.",
  },
];

const APPROACH = [
  { icon: Users, label: "Customer-focused solutions" },
  { icon: Layers, label: "Multi-brand automotive expertise" },
  { icon: ShieldCheck, label: "Quality-oriented sourcing" },
  { icon: Headphones, label: "Reliable enquiry and service support" },
  { icon: Globe2, label: "Global spare parts trading capabilities" },
];

function About() {
  return (
    <>
      <PageHero
        image="/images/gallery/preowned-luxury.jpg"
        eyebrow="Who We Are"
        title="About CARLUKZ"
        subtitle="Driving Excellence in Luxury Automotive Solutions."
      />

      <section className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-28 lg:grid-cols-2">
        <div>
          <Reveal>
            <h2 className="text-section">
              CARLUKZ – The Group of <span className="text-primary">Companies</span>
            </h2>
          </Reveal>
          <Reveal delay={150} className="mt-8 space-y-5 text-lg text-muted-foreground">
            <p className="text-foreground">
              CARLUKZ – The Group of Companies is a premium automotive business founded by Prince
              Johnson and headquartered in Delhi, India.
            </p>
            <p>
              We specialize in multi-brand ultra-luxury car spare parts traded across international
              markets, pre-owned luxury and sports cars bought and sold within India, and
              international spare parts import and export services.
            </p>
            <p>
              Our focus is to connect customers with premium automotive products and dependable
              solutions through professional sourcing, trading, purchasing and customer support.
            </p>
            <p>
              We work across German, British, European and Asian automotive brands, offering
              solutions for luxury car owners, automotive enthusiasts and businesses.
            </p>
          </Reveal>
        </div>
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
      </section>

      <section className="bg-surface py-28">
        <div className="mx-auto max-w-7xl px-5">
          <Reveal>
            <p className="eyebrow">Business Expertise</p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="text-section mt-5">Our Automotive Expertise</h2>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {EXPERTISE.map((e, i) => (
              <Reveal
                key={e.n}
                delay={(i % 2) * 120}
                className="group relative min-h-[420px] overflow-hidden"
              >
                <img
                  src={e.img}
                  alt={e.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-8">
                  <span className="font-display text-5xl text-primary">{e.n}</span>
                  <h3 className="mt-2 text-4xl">{e.title}</h3>
                  <p className="mt-3 max-w-md text-sm text-muted-foreground">{e.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-32">
        <div className="mx-auto max-w-5xl px-5 text-center">
          <Reveal>
            <p className="eyebrow justify-center">Our Vision</p>
          </Reveal>
          <Reveal delay={150}>
            <p className="mt-8 font-display text-4xl leading-tight md:text-6xl">
              To build a trusted presence in the luxury automotive sector by connecting customers
              with premium pre-owned vehicles in India, high-performance automotive components and
              global <span className="text-primary">spare parts trading solutions.</span>
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-border bg-surface py-28">
        <div className="mx-auto max-w-7xl px-5">
          <Reveal>
            <h2 className="text-section">
              Our <span className="text-brand-cyan">Approach</span>
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {APPROACH.map((a, i) => (
              <Reveal
                key={a.label}
                delay={i * 100}
                className="group border border-border bg-card p-6 transition-all duration-500 hover:-translate-y-2 hover:border-primary"
              >
                <a.icon className="h-8 w-8 text-primary" strokeWidth={1.5} />
                <p className="mt-6 font-display text-2xl leading-tight">{a.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-28 lg:grid-cols-2">
        <Reveal variant="reveal-img" className="aspect-[16/11] overflow-hidden">
          <img
            src="/images/gallery/hero-supercars.jpg"
            alt="Luxury sports cars at night"
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </Reveal>
        <div>
          <Reveal>
            <p className="eyebrow">Founder</p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="text-section mt-5">
              Founded by <span className="text-primary">Prince Johnson</span>
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 text-lg text-muted-foreground">
              CARLUKZ was founded by Prince Johnson with a focus on worldwide luxury car spare parts
              trading alongside premium pre-owned luxury and sports car solutions across India.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <p className="mt-6 text-sm tracking-[0.25em] uppercase">
              <span className="text-muted-foreground">Headquarters — </span>Delhi, India
            </p>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden py-32">
        <img
          src="/images/gallery/supercar-detail.jpg"
          alt=""
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="overlay-hero absolute inset-0" />
        <div className="relative mx-auto max-w-7xl px-5">
          <Reveal>
            <h2 className="text-section">
              Let's Connect with <span className="text-primary">CARLUKZ</span>
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <p className="mt-5 max-w-xl text-lg text-muted-foreground">
              Connect with our team for international luxury car spare parts trading or pre-owned
              luxury vehicle enquiries across India.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <Link to="/contact" className="btn btn-primary mt-10">
              Contact Us <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
