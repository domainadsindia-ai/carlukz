import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { whatsappUrl } from "@/lib/contact";
import { WhatsAppIcon } from "./WhatsAppIcon";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/contact", label: "Contact Us" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled || open ? "border-b border-border bg-background/95 py-3 backdrop-blur-md" : "py-5",
      )}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 md:flex md:justify-between">
        <Link to="/" className="flex min-w-0 items-center" aria-label="CARLUKZ home">
          <img
            src="/images/brand/carlukz-logos.png"
            alt="PJ CARLUKZ and FPS CARLUKZ logos"
            width={1832}
            height={858}
            className={cn("w-auto transition-all duration-500", scrolled ? "h-11" : "h-14")}
          />
        </Link>
        <nav className="hidden items-center gap-10 md:flex">
          {NAV.map((n) => (
            <Link key={n.to} to={n.to} className="nav-link" activeOptions={{ exact: true }}>
              {n.label}
            </Link>
          ))}
        </nav>
        <a
          href={whatsappUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary hidden md:inline-flex"
        >
          <WhatsAppIcon className="h-4 w-4" /> Enquire
        </a>
        <button
          className="shrink-0 p-2 md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>
      <div
        className={cn(
          "grid overflow-hidden transition-all duration-500 md:hidden",
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        )}
      >
        <nav className="flex min-h-0 flex-col gap-6 px-5 pt-6 pb-4">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              onClick={() => setOpen(false)}
              className="font-display text-4xl tracking-wide data-[status=active]:text-primary"
              activeOptions={{ exact: true }}
            >
              {n.label}
            </Link>
          ))}
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            <WhatsAppIcon className="h-4 w-4" /> Enquire on WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
