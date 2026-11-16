import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone, Globe, Instagram, Facebook } from "lucide-react";
import { ThreadsIcon } from "@/components/site/ThreadsIcon";
import { CONTACT, SOCIAL_LINKS } from "@/lib/contact";

const FOOTER_SOCIAL = [
  { ...SOCIAL_LINKS[0], icon: Instagram },
  { ...SOCIAL_LINKS[1], icon: Facebook },
  { ...SOCIAL_LINKS[2], icon: ThreadsIcon },
];

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border bg-surface">
      <div className="brand-stripe h-1 w-full" />
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-[1.4fr_0.8fr_1.2fr]">
        <div>
          <img
            src="/images/brand/carlukz-logos.png"
            alt="PJ CARLUKZ and FPS CARLUKZ logos"
            width={1832}
            height={858}
            loading="lazy"
            className="h-20 w-auto"
          />
          <h3 className="mt-6 text-3xl">CARLUKZ – The Group of Companies</h3>
          <p className="mt-2 text-sm tracking-widest text-primary uppercase">
            Premium Auto Parts • Luxury Cars • Global Spare Parts Trade
          </p>
          <div className="mt-6">
            <p className="text-xs font-semibold tracking-[0.25em] text-muted-foreground uppercase">
              FOLLOW US
            </p>
            <div className="mt-3 flex items-center gap-3">
              {FOOTER_SOCIAL.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="group flex h-10 w-10 items-center justify-center rounded-xs border border-border bg-card text-muted-foreground transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  <s.icon className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div>
          <h4 className="text-2xl text-muted-foreground">Navigate</h4>
          <ul className="mt-5 space-y-3">
            <li>
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="nav-link">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="nav-link">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-2xl text-muted-foreground">Contact</h4>
          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <a href="tel:+919400690081" className="flex items-center gap-3 hover:text-primary">
                <Phone className="h-4 w-4 text-primary" /> Phone: {CONTACT.phonePrimaryDisplay}
              </a>
            </li>
            <li>
              <a href="tel:+918086580081" className="flex items-center gap-3 hover:text-primary">
                <Phone className="h-4 w-4 text-brand-red" /> Alternate: {CONTACT.phoneAltDisplay}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${CONTACT.email}`}
                className="flex items-center gap-3 break-all hover:text-primary"
              >
                <Mail className="h-4 w-4 shrink-0 text-brand-cyan" /> {CONTACT.email}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="h-4 w-4 text-primary" /> {CONTACT.office}
            </li>
            <li>
              <a
                href={CONTACT.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-primary"
              >
                <Globe className="h-4 w-4 text-brand-cyan" /> {CONTACT.websiteDisplay}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border px-5 py-6 text-center text-xs tracking-wider text-muted-foreground">
        <p className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
          <span>© {currentYear} CARLUKZ. All Rights Reserved.</span>
          <span className="hidden sm:inline text-muted-foreground/60" aria-hidden="true">
            |
          </span>
          <span>
            Powered by{" "}
            <a
              href="https://www.domainads.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground transition-colors hover:text-primary underline-offset-4 hover:underline"
            >
              Domain Ads
            </a>
          </span>
        </p>
      </div>
    </footer>
  );
}
