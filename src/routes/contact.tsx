import { createFileRoute } from "@tanstack/react-router";
import { Globe, Mail, MapPin, Phone, User, Building2, Instagram, Facebook } from "lucide-react";
import type { ReactNode } from "react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { ThreadsIcon } from "@/components/site/ThreadsIcon";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";
import { CONTACT, SOCIAL_LINKS, whatsappUrl } from "@/lib/contact";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact CARLUKZ | WhatsApp, Phone & Email" },
      {
        name: "description",
        content:
          "Contact CARLUKZ in Delhi for worldwide luxury car spare parts trading and pre-owned luxury car solutions across India. WhatsApp +91 9400 690081.",
      },
      { property: "og:title", content: "Contact CARLUKZ | WhatsApp, Phone & Email" },
      {
        property: "og:description",
        content: "Get in touch with CARLUKZ for your luxury automotive requirements.",
      },
      { property: "og:url", content: "https://carlukzprince.com/contact" },
      {
        property: "og:image",
        content: "https://carlukzprince.com/images/gallery/about-carlukz.jpg",
      },
      { name: "twitter:title", content: "Contact CARLUKZ | WhatsApp, Phone & Email" },
      {
        name: "twitter:description",
        content: "Get in touch with CARLUKZ for your luxury automotive requirements.",
      },
      {
        name: "twitter:image",
        content: "https://carlukzprince.com/images/gallery/about-carlukz.jpg",
      },
    ],
    links: [{ rel: "canonical", href: "https://carlukzprince.com/contact" }],
  }),
  component: Contact,
});

function Card({
  icon,
  label,
  children,
  href,
  accent = "text-primary",
}: {
  icon: ReactNode;
  label: string;
  children: ReactNode;
  href?: string | undefined;
  accent?: string | undefined;
}) {
  accent = accent ?? "text-primary";
  const inner = (
    <>
      <span className={`${accent}`}>{icon}</span>
      <p className="mt-5 text-xs font-semibold tracking-[0.3em] text-muted-foreground uppercase">
        {label}
      </p>
      <div className="mt-2 text-lg font-medium break-words">{children}</div>
    </>
  );
  const cls =
    "group block h-full border border-border bg-card p-7 transition-all duration-500 hover:-translate-y-1 hover:border-primary";
  return href ? (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noopener noreferrer"
      className={cls}
    >
      {inner}
    </a>
  ) : (
    <div className={cls}>{inner}</div>
  );
}

function Contact() {
  const cards = [
    { icon: <User className="h-7 w-7" />, label: "Proprietor", value: CONTACT.proprietor },
    {
      icon: <Phone className="h-7 w-7" />,
      label: "Phone",
      accent: "text-brand-red",
      content: (
        <div className="flex flex-col gap-1.5">
          <a
            href="tel:+918086580081"
            className="inline-block w-fit transition-colors hover:text-primary hover:underline underline-offset-4"
          >
            +91 80865 80081
          </a>
          <a
            href="tel:+919400690081"
            className="inline-block w-fit transition-colors hover:text-primary hover:underline underline-offset-4"
          >
            +91 9400 690081
          </a>
        </div>
      ),
    },
    {
      icon: <WhatsAppIcon className="h-7 w-7" />,
      label: "WhatsApp",
      accent: "text-whatsapp",
      content: (
        <div className="flex flex-col gap-1.5">
          <a
            href="https://wa.me/918086580081"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-fit transition-colors hover:text-primary hover:underline underline-offset-4"
          >
            +91 80865 80081
          </a>
          <a
            href="https://wa.me/919400690081"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-fit transition-colors hover:text-primary hover:underline underline-offset-4"
          >
            +91 9400 690081
          </a>
        </div>
      ),
    },
    {
      icon: <Mail className="h-7 w-7" />,
      label: "Email",
      value: CONTACT.email,
      href: `mailto:${CONTACT.email}`,
      accent: "text-brand-cyan",
    },
    { icon: <Building2 className="h-7 w-7" />, label: "Office", value: CONTACT.office },
    {
      icon: <MapPin className="h-7 w-7" />,
      label: "Address",
      value: CONTACT.address,
      accent: "text-brand-red",
    },
    {
      icon: <Globe className="h-7 w-7" />,
      label: "Website",
      value: CONTACT.websiteDisplay,
      href: CONTACT.website,
      accent: "text-brand-cyan",
    },
  ];
  return (
    <>
      <PageHero
        image="/images/gallery/supercar-detail.jpg"
        eyebrow="Get In Touch"
        title="Get in Touch with CARLUKZ"
        subtitle="Have a requirement for worldwide luxury car spare parts trading or pre-owned luxury vehicles in India? Contact us today."
      >
        <div
          className="animate-rise mt-10 flex flex-wrap gap-4"
          style={{ animationDelay: "450ms" }}
        >
          <a href={CONTACT.tel} className="btn btn-primary">
            <Phone className="h-4 w-4" /> Call Now
          </a>
          <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="btn btn-red">
            <WhatsAppIcon className="h-4 w-4" /> Chat on WhatsApp
          </a>
          <a href={`mailto:${CONTACT.email}`} className="btn btn-outline">
            <Mail className="h-4 w-4" /> Send Email
          </a>
        </div>
      </PageHero>

      <section className="mx-auto max-w-7xl px-5 py-24">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c, i) => (
            <Reveal
              key={c.label}
              delay={(i % 4) * 100}
              className={c.label === "Address" ? "sm:col-span-2" : ""}
            >
              <Card
                icon={c.icon}
                label={c.label}
                href={"href" in c ? c.href : undefined}
                accent={c.accent}
              >
                {"content" in c ? c.content : c.value}
              </Card>
            </Reveal>
          ))}
        </div>

        {/* CONNECT WITH US */}
        <Reveal delay={200} className="mt-14 border border-border bg-card p-8 md:p-12">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="eyebrow">CONNECT WITH US</p>
              <p className="mt-4 text-base text-muted-foreground md:text-lg">
                Follow CARLUKZ on social media for the latest automotive updates, luxury car spare
                parts, premium vehicle listings and business highlights.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              {[
                { ...SOCIAL_LINKS[0], icon: Instagram },
                { ...SOCIAL_LINKS[1], icon: Facebook },
                { ...SOCIAL_LINKS[2], icon: ThreadsIcon },
              ].map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="group flex items-center gap-3.5 border border-border bg-surface px-5 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:bg-surface/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xs bg-card text-foreground transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                    <s.icon className="h-5 w-5" />
                  </span>
                  <div className="text-left">
                    <p className="text-sm font-semibold tracking-wider uppercase text-foreground transition-colors duration-300 group-hover:text-primary">
                      {s.name}
                    </p>
                    <p className="text-xs text-muted-foreground">{s.handle}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
