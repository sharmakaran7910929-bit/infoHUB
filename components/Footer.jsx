
import Link from "next/link";
import {
  ArrowUpRight,
  ExternalLink,
  BookOpen,
  Layers3,
  BrainCircuit,
  ChartNoAxesCombined,
  Network,
  Target,
  Camera,
  Smartphone,
  TrendingUp,
  Sparkles,
  Compass,
  Lightbulb,
} from "lucide-react";

const exploreLinks = [
  {
    label: "Artificial Intelligence",
    href: "/ai",
    icon: BrainCircuit,
  },
  {
    label: "Economics",
    href: "/economics",
    icon: ChartNoAxesCombined,
  },
  {
    label: "Networking",
    href: "/networking",
    icon: Network,
  },
  {
    label: "Psychology",
    href: "/psychology",
    icon: BrainCircuit,
  },
  {
    label: "Strategic Management",
    href: "/strategic-management",
    icon: Target,
  },
];

const practicalGuides = [
  {
    label: "CCTV & Security",
    href: "/cctv-problem",
    icon: Camera,
  },
  {
    label: "Share Market",
    href: "/share-market",
    icon: TrendingUp,
  },
  {
    label: "Smartphones",
    href: "/smartphone",
    icon: Smartphone,
  },
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

function CategoryLink({ item }) {
  const Icon = item.icon;

  return (
    <Link
      href={item.href}
      className="group flex items-center gap-3 rounded-xl px-3 py-2.5 transition duration-200 hover:bg-blue-50"
    >
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-500 transition duration-200 group-hover:bg-blue-100 group-hover:text-blue-700">
        <Icon size={17} />
      </div>

      <span className="flex-1 text-sm text-slate-600 transition group-hover:text-blue-700">
        {item.label}
      </span>

      <ArrowUpRight
        size={14}
        className="text-slate-300 opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100"
      />
    </Link>
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-slate-200 bg-slate-50">

      {/* Top Accent */}
      <div className="h-1 w-full bg-gradient-to-r from-blue-700 via-indigo-500 to-cyan-400" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Main Footer */}
        <div className="grid gap-12 py-14 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:gap-10 lg:py-16">

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
              Knowledge, organized. Discover clear explanations,
              practical guides, and useful insights across technology,
              economics, psychology, business, and more.
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
                <CategoryLink key={item.href} item={item} />
              ))}
            </nav>

          </div>

          {/* More Categories */}
          <div>

            <div className="mb-5 flex items-center gap-2">
              <Compass size={17} className="text-blue-700" />

              <h2 className="text-sm font-bold text-slate-950">
                More Categories
              </h2>
            </div>

            <nav aria-label="More categories" className="flex flex-col">
              {practicalGuides.map((item) => (
                <CategoryLink key={item.href} item={item} />
              ))}
            </nav>

            <div className="mt-6 rounded-xl border border-slate-200 bg-white p-4">
              <div className="flex items-center gap-2 text-blue-700">
                <Lightbulb size={16} />

                <p className="text-xs font-bold uppercase tracking-wider">
                  Keep Exploring
                </p>
              </div>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Discover new concepts, understand complex ideas,
                and expand your knowledge one topic at a time.
              </p>
            </div>

          </div>

          {/* Our Network */}
          <div>

            <div className="mb-5 flex items-center gap-2">
              <Sparkles size={17} className="text-blue-700" />

              <h2 className="text-sm font-bold text-slate-950">
                Our Network
              </h2>
            </div>

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
                Making useful knowledge easier to discover,
                understand, and apply.
              </p>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col gap-4 border-t border-slate-200 py-6 sm:flex-row sm:items-center sm:justify-between">

          <p className="text-xs leading-5 text-slate-500">
            © 2026 PriceTag HUB. All rights reserved.
          </p>

         
        </div>

      </div>
    </footer>
  );
}
