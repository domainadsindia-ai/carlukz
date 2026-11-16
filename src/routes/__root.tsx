import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  type ErrorComponentProps,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

const structuredData = {
  "@context": "https://schema.org",
  "@type": "AutoPartsStore",
  name: "CARLUKZ – The Group of Companies",
  alternateName: ["PJ CARLUKZ", "FPS CARLUKZ", "CARLUKZ"],
  url: "https://carlukzprince.com",
  logo: "https://carlukzprince.com/images/brand/carlukz-logos.png",
  image: "https://carlukzprince.com/images/gallery/about-carlukz.jpg",
  description:
    "CARLUKZ specializes in worldwide luxury car spare parts trading, international spare parts import and export, and premium pre-owned luxury and sports car buying and selling across India.",
  telephone: "+919400690081",
  address: {
    "@type": "PostalAddress",
    streetAddress: "K. Gate 110006, Lakshmi Nagar 110092",
    addressLocality: "Delhi",
    addressCountry: "IN",
  },
  founder: {
    "@type": "Person",
    name: "Prince Johnson",
  },
};

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        name: "google-site-verification",
        content: "pp8DO_bU-59EY79IaBMetDmFrz5bb3t6wV9iDGQSQGI",
      },
      { title: "CARLUKZ | Luxury Car Spare Parts Worldwide & Premium Pre-Owned Cars in India" },
      {
        name: "description",
        content:
          "CARLUKZ specializes in worldwide luxury car spare parts trading, international spare parts import and export, and premium pre-owned luxury and sports car buying and selling across India.",
      },
      { name: "author", content: "CARLUKZ" },
      { property: "og:site_name", content: "CARLUKZ" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://carlukzprince.com" },
      {
        property: "og:title",
        content: "CARLUKZ | Luxury Car Spare Parts Worldwide & Premium Pre-Owned Cars in India",
      },
      {
        property: "og:description",
        content:
          "CARLUKZ specializes in worldwide luxury car spare parts trading, international spare parts import and export, and premium pre-owned luxury and sports car buying and selling across India.",
      },
      {
        property: "og:image",
        content: "https://carlukzprince.com/images/gallery/about-carlukz.jpg",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:domain", content: "carlukzprince.com" },
      {
        name: "twitter:title",
        content: "CARLUKZ | Luxury Car Spare Parts Worldwide & Premium Pre-Owned Cars in India",
      },
      {
        name: "twitter:description",
        content:
          "CARLUKZ specializes in worldwide luxury car spare parts trading, international spare parts import and export, and premium pre-owned luxury and sports car buying and selling across India.",
      },
      {
        name: "twitter:image",
        content: "https://carlukzprince.com/images/gallery/about-carlukz.jpg",
      },
    ],
    links: [
      { rel: "canonical", href: "https://carlukzprince.com" },
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;500;600;700&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(structuredData),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <SiteHeader />
      <main>
        <Outlet />
      </main>
      <SiteFooter />
      <WhatsAppFloat />
    </QueryClientProvider>
  );
}