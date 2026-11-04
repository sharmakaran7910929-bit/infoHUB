import Link from "next/link";
import {
  ArrowUpRight,
  ExternalLink,
  BookOpen,
  Layers3,
} from "lucide-react";

const exploreLinks = [
  { label: "Artificial Intelligence", href: "/ai" },
  { label: "Economics", href: "/economics" },
  { label: "Networking", href: "/networking" },
  { label: "Share Market", href: "/share-market" },
];

const practicalGuides = [
  { label: "CCTV & Security", href: "/cctv-problem" },
  { label: "Smartphones", href: "/smartphone" },
];

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "All Topics", href: "/#topics" },
];

function FooterLink({ href, children, external = false }) {
  const className =
    "group inline-flex items-center gap-2 py-1.5 text-sm text-slate-600 transition-colors duration-200 hover:text-blue-700";

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        <span>{children}</span>
        <ExternalLink
          size={13}
          className="text-slate-400 transition-colors group-hover:text-blue-700"
          aria-hidden="true"
        />
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      <span>{children}</span>
      <ArrowUpRight
        size={14}
        className="opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:opacity-100"
        aria-hidden="true"
      />
    </Link>
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-slate-200 bg-slate-50">
      {/* Subtle top accent */}
      <div className="h-1 w-full bg-gradient-to-r from-blue-700 via-indigo-500 to-cyan-400" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Main Footer */}
        <div className="grid gap-12 py-14 lg:grid-cols-[1.5fr_1fr_1fr_1fr] lg:gap-10 lg:py-16">

          {/* Brand Section */}
          <div className="max-w-sm">
            <Link
              href="/"
              aria-label="PriceTag HUB home"
              className="inline-flex items-center gap-3"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-700 to-indigo-700 text-sm font-bold tracking-wide text-white shadow-lg shadow-blue-200">
                PH
              </div>

              <div>
                <p className="text-xl font-bold tracking-tight text-slate-950">
                  PriceTag HUB
                </p>
                <p className="mt-0.5 text-xs font-medium tracking-wide text-slate-500">
                  by K2S INFOTECH
                </p>
              </div>
            </Link>

            <p className="mt-6 text-sm leading-7 text-slate-600">
              Knowledge, organized. Discover practical explanations,
              useful guides, and insights across technology, economics,
              business, and the ideas shaping our world.
            </p>

            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3.5 py-2 text-xs font-bold text-blue-700">
              <BookOpen size={14} />
              Knowledge for everyday decisions
            </div>
          </div>

          {/* Explore Topics */}
          <div>
            <div className="mb-5 flex items-center gap-2">
              <Layers3 size={17} className="text-blue-700" />
              <h2 className="text-sm font-bold text-slate-950">
                Explore Topics
              </h2>
            </div>

            <nav aria-label="Explore topics" className="flex flex-col">
              {exploreLinks.map((item) => (
                <FooterLink key={item.href} href={item.href}>
                  {item.label}
                </FooterLink>
              ))}
            </nav>
          </div>

          {/* More Categories */}
          <div>
            <h2 className="mb-5 text-sm font-bold text-slate-950">
              More Categories
            </h2>

            <nav aria-label="More categories" className="flex flex-col">
              {practicalGuides.map((item) => (
                <FooterLink key={item.href} href={item.href}>
                  {item.label}
                </FooterLink>
              ))}
            </nav>

            <p className="mt-6 text-xs leading-6 text-slate-500">
              Explore practical information and guides for everyday needs.
            </p>
          </div>

          {/* Our Network */}
          <div>
            <h2 className="mb-5 text-sm font-bold text-slate-950">
              Our Network
            </h2>

            <nav aria-label="Our network" className="flex flex-col">
              <FooterLink
                href="https://k2sinfotech.pricetag.co.in/"
                external
              >
                K2S INFOTECH
              </FooterLink>

              <FooterLink href="/">
                PriceTag HUB
              </FooterLink>
            </nav>

            <div className="mt-7 rounded-2xl border border-slate-200 bg-white p-4">
              <p className="text-xs font-bold uppercase tracking-wider text-blue-700">
                Our Purpose
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Making useful knowledge easier to discover and understand.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col gap-4 border-t border-slate-200 py-6 sm:flex-row sm:items-center sm:justify-between">

          <p className="text-xs leading-5 text-slate-500">
            © 2026 PriceTag HUB. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {quickLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-xs font-bold text-slate-600 transition hover:text-blue-700"
              >
                {item.label}
              </Link>
            ))}

            <a
              href="https://k2sinfotech.pricetag.co.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-bold text-blue-700 transition hover:text-blue-900"
            >
              Built by K2S INFOTECH
              <ExternalLink size={12} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}