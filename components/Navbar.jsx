
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  ArrowUpRight,
  BrainCircuit,
  BookOpen,
  Sparkles,
  Network,
  House,
  Router,
  ShieldCheck,
  Terminal,
  Wifi,
  Globe,
  ChartNoAxesCombined,
  Wallet,
  TrendingUp,
  Landmark,
  BriefcaseBusiness,
  Camera,
  Smartphone,
  Menu,
  X,
  Brain,
  Lightbulb,
  Target,
  Search,
  Cpu,
  Activity,
  BarChart3,
  Scale,
  Flame,
  Users,
} from "lucide-react";

const navItems = [
  {
    title: "Home",
    href: "/",
    icon: House,
  },

  {
    title: "Artificial Intelligence",
    shortTitle: "AI",
    href: "/ai",
    icon: BrainCircuit,
    children: [
      {
        title: "What Is Artificial Intelligence?",
        href: "/ai/basics/what-is-artificial-intelligence",
        icon: BrainCircuit,
        description: "Understand the fundamentals of AI",
      },
      {
        title: "Types of Artificial Intelligence",
        href: "/ai/basics/types-of-artificial-intelligence",
        icon: Network,
        description: "Explore different types of AI",
      },
      {
        title: "Generative AI",
        href: "/ai/generative-ai/what-is-generative-ai",
        icon: Sparkles,
        description: "How AI creates new content",
      },
      {
        title: "Machine Learning",
        href: "/ai/machine-learning/what-is-machine-learning",
        icon: Cpu,
        description: "How machines learn from data",
      },
      {
        title: "Types of Machine Learning",
        href: "/ai/machine-learning/types-of-machine-learning",
        icon: WorkflowIcon,
        description: "Supervised, unsupervised and more",
      },
    ],
  },

  {
    title: "Networking",
    href: "/networking",
    icon: Network,
    children: [
      {
        title: "Network Architecture",
        href: "/networking/fundamentals/network-architecture",
        icon: WorkflowIcon,
        description: "How computer networks are structured",
      },
      {
        title: "Network Topology",
        href: "/networking/fundamentals/network-topology",
        icon: Network,
        description: "Different network layouts",
      },
      {
        title: "Network Devices",
        href: "/networking/network-devices",
        icon: Router,
        description: "Routers, switches and other devices",
      },
      {
        title: "IP Address Basics",
        href: "/networking/ip-addressing/ip-address-basics",
        icon: Globe,
        description: "Understand IP addressing",
      },
      {
        title: "Subnetting",
        href: "/networking/ip-addressing/subnetting",
        icon: Terminal,
        description: "Divide networks into subnets",
      },
      {
        title: "Network Security",
        href: "/networking/network-security/firewalls-and-ips",
        icon: ShieldCheck,
        description: "Firewalls and intrusion prevention",
      },
      {
        title: "Wi-Fi Troubleshooting",
        href: "/networking/wifi-and-routers/wifi-troubleshooting",
        icon: Wifi,
        description: "Understand and fix Wi-Fi issues",
      },
    ],
  },

  {
    title: "Economics",
    href: "/economics",
    icon: ChartNoAxesCombined,
    children: [
      {
        title: "What Is Economics?",
        href: "/economics/basics/what-is-economics",
        icon: BookOpen,
        description: "Understand the foundations of economics",
      },
      {
        title: "Law of Demand",
        href: "/economics/basics/law-of-demand",
        icon: TrendingUp,
        description: "How price affects demand",
      },
      {
        title: "What Is GDP?",
        href: "/economics/gdp-and-economic-growth/what-is-gdp",
        icon: BarChart3,
        description: "Measure economic output",
      },
      {
        title: "What Is Inflation?",
        href: "/economics/inflation/what-is-inflation",
        icon: Wallet,
        description: "Why the general price level rises",
      },
      {
        title: "Fiscal Policy",
        href: "/economics/fiscal-policy/what-is-fiscal-policy",
        icon: Landmark,
        description: "Government spending and taxation",
      },
      {
        title: "Monetary Policy",
        href: "/economics/monetary-policy/what-is-monetary-policy",
        icon: BriefcaseBusiness,
        description: "Central banks and money supply",
      },
      {
        title: "Unemployment",
        href: "/economics/unemployment/what-is-unemployment",
        icon: Users,
        description: "Employment and labour markets",
      },
      {
        title: "Budget Deficit",
        href: "/economics/budget-deficit",
        icon: Scale,
        description: "Understanding government deficits",
      },
    ],
  },

  {
    title: "More",
    href: null,
    icon: BookOpen,
    children: [
      {
        title: "Psychology",
        href: "/psychology",
        icon: Brain,
        description: "Explore the human mind and behaviour",
      },
      {
        title: "Strategic Management",
        href: "/strategic-management",
        icon: Target,
        description: "Business strategy and decision-making",
      },
      {
        title: "CCTV & Security",
        href: "/cctv-problem",
        icon: Camera,
        description: "Security cameras and solutions",
      },
      {
        title: "Share Market",
        href: "/share-market",
        icon: TrendingUp,
        description: "Stocks and market insights",
      },
      {
        title: "Smartphones",
        href: "/smartphone",
        icon: Smartphone,
        description: "Smartphone guides and comparisons",
      },
    ],
  },
];

function WorkflowIcon(props) {
  return <Activity {...props} />;
}

export default function Navbar() {
  const pathname = usePathname();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(null);

  function closeMobileMenu() {
    setMobileOpen(false);
    setMobileExpanded(null);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Main Navigation */}
        <div className="flex h-[72px] items-center justify-between">

          {/* Brand */}
          <Link
            href="/"
            onClick={closeMobileMenu}
            className="flex shrink-0 items-center gap-3"
            aria-label="PriceTag HUB home"
          >
            <Image
              src="/main.png"
              alt="PriceTag HUB"
              width={44}
              height={44}
              priority
              className="h-11 w-11 rounded-xl object-contain"
            />

            <div>
              <div className="text-lg font-bold leading-tight tracking-tight text-slate-950">
                PriceTag HUB
              </div>

              <div className="mt-1 text-[10px] font-normal uppercase tracking-[0.16em] text-slate-400">
                Knowledge, organized.
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-1 lg:flex"
          >
            {navItems.map((item) => (
              <DesktopNavItem
                key={item.title}
                item={item}
                pathname={pathname}
              />
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-600 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 lg:hidden"
            aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
          >
            {mobileOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileOpen && (
          <div
            id="mobile-navigation"
            className="border-t border-slate-100 py-4 lg:hidden"
          >
            <nav aria-label="Mobile navigation" className="space-y-1">
              {navItems.map((item) => (
                <MobileNavItem
                  key={item.title}
                  item={item}
                  pathname={pathname}
                  expanded={mobileExpanded === item.title}
                  onToggle={() =>
                    setMobileExpanded((current) =>
                      current === item.title ? null : item.title
                    )
                  }
                  onNavigate={closeMobileMenu}
                />
              ))}
            </nav>

            <div className="mt-4 rounded-xl border border-blue-100 bg-blue-50/70 p-4">
              <p className="text-sm font-bold text-slate-900">
                Knowledge, organized.
              </p>

              <p className="mt-1 text-xs leading-5 text-slate-600">
                Explore practical guides and ideas across multiple fields.
              </p>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

/* Desktop Navigation Item */

function DesktopNavItem({ item, pathname }) {
  const hasChildren = Boolean(item.children?.length);
  const Icon = item.icon;

  const isActive = item.href
    ? item.href === "/"
      ? pathname === "/"
      : pathname === item.href || pathname.startsWith(`${item.href}/`)
    : item.children?.some(
        (child) =>
          pathname === child.href ||
          pathname.startsWith(`${child.href}/`)
      );

  if (!hasChildren) {
    return (
      <Link
        href={item.href}
        aria-current={isActive ? "page" : undefined}
        className={`flex items-center gap-2 rounded-lg px-3.5 py-2.5 text-sm transition ${
          isActive
            ? "bg-blue-50 text-blue-700"
            : "text-slate-600 hover:bg-slate-50 hover:text-blue-700"
        }`}
      >
        <Icon size={16} />
        {item.title}
      </Link>
    );
  }

  return (
    <div className="group relative">
      <button
        type="button"
        className={`flex items-center gap-2 rounded-lg px-3.5 py-2.5 text-sm transition ${
          isActive
            ? "bg-blue-50 text-blue-700"
            : "text-slate-600 hover:bg-slate-50 hover:text-blue-700"
        }`}
        aria-haspopup="true"
      >
        <Icon size={16} />
        {item.shortTitle || item.title}

        <ChevronDown
          size={14}
          className="text-slate-400 transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180"
        />
      </button>

      {/* Dropdown */}
      <div className="invisible absolute left-0 top-full z-50 w-[340px] translate-y-2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-xl shadow-slate-900/10">

          {/* Dropdown Heading */}
          <div className="flex items-center gap-3 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 px-4 py-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-blue-700 shadow-sm">
              <Icon size={19} />
            </div>

            <div>
              <p className="text-sm font-bold text-slate-900">
                {item.title}
              </p>

              <p className="mt-0.5 text-xs text-slate-500">
                Explore this subject
              </p>
            </div>
          </div>

          {/* All Topics */}
          {item.href && (
            <Link
              href={item.href}
              className="mt-2 flex items-center justify-between rounded-lg px-4 py-3 text-sm text-blue-700 transition hover:bg-blue-50"
            >
              All {item.title} Topics
              <ArrowUpRight size={15} />
            </Link>
          )}

          <div className="my-1 border-t border-slate-100" />

          {/* Subtopics */}
          <div className="max-h-[65vh] overflow-y-auto">
            {item.children.map((child) => {
              const ChildIcon = child.icon;

              const childActive =
                pathname === child.href ||
                pathname.startsWith(`${child.href}/`);

              return (
                <Link
                  key={child.href}
                  href={child.href}
                  className={`flex items-center gap-3 rounded-xl px-3 py-3 transition ${
                    childActive ? "bg-blue-50" : "hover:bg-slate-50"
                  }`}
                >
                  <div
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${
                      childActive
                        ? "bg-blue-100 text-blue-700"
                        : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    <ChildIcon size={17} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p
                      className={`text-sm ${
                        childActive
                          ? "font-bold text-blue-700"
                          : "text-slate-700"
                      }`}
                    >
                      {child.title}
                    </p>

                    <p className="mt-0.5 text-xs text-slate-500">
                      {child.description}
                    </p>
                  </div>

                  <ArrowUpRight
                    size={14}
                    className="shrink-0 text-slate-300"
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

/* Mobile Navigation Item */

function MobileNavItem({
  item,
  pathname,
  expanded,
  onToggle,
  onNavigate,
}) {
  const hasChildren = Boolean(item.children?.length);
  const Icon = item.icon;

  const isActive = item.href
    ? item.href === "/"
      ? pathname === "/"
      : pathname === item.href || pathname.startsWith(`${item.href}/`)
    : item.children?.some(
        (child) =>
          pathname === child.href ||
          pathname.startsWith(`${child.href}/`)
      );

  if (!hasChildren) {
    return (
      <Link
        href={item.href}
        onClick={onNavigate}
        aria-current={isActive ? "page" : undefined}
        className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm transition ${
          isActive
            ? "bg-blue-50 text-blue-700"
            : "text-slate-700 hover:bg-slate-50 hover:text-blue-700"
        }`}
      >
        <Icon size={18} className="text-slate-400" />
        {item.title}
      </Link>
    );
  }

  return (
    <div>
      <div className="flex items-center gap-1">

        {item.href ? (
          <Link
            href={item.href}
            onClick={onNavigate}
            className={`flex flex-1 items-center gap-3 rounded-xl px-4 py-3 text-sm transition ${
              isActive
                ? "bg-blue-50 text-blue-700"
                : "text-slate-700 hover:bg-slate-50 hover:text-blue-700"
            }`}
          >
            <Icon size={18} className="text-slate-400" />
            {item.title}
          </Link>
        ) : (
          <div
            className={`flex flex-1 items-center gap-3 rounded-xl px-4 py-3 text-sm ${
              isActive ? "text-blue-700" : "text-slate-700"
            }`}
          >
            <Icon size={18} className="text-slate-400" />
            {item.title}
          </div>
        )}

        <button
          type="button"
          onClick={onToggle}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-slate-500 transition hover:bg-slate-100 hover:text-blue-700"
          aria-label={`${expanded ? "Collapse" : "Expand"} ${item.title} topics`}
          aria-expanded={expanded}
        >
          <ChevronDown
            size={18}
            className={`transition-transform duration-200 ${
              expanded ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>

      {/* Subtopics */}
      {expanded && (
        <div className="ml-5 mt-1 space-y-1 border-l-2 border-blue-100 py-1 pl-3">

          {item.href && (
            <Link
              href={item.href}
              onClick={onNavigate}
              className="flex items-center gap-2 rounded-lg px-3 py-2.5 text-xs text-blue-700 hover:bg-blue-50"
            >
              All {item.title} Topics
              <ArrowUpRight size={13} />
            </Link>
          )}

          {item.children.map((child) => {
            const ChildIcon = child.icon;

            const childActive =
              pathname === child.href ||
              pathname.startsWith(`${child.href}/`);

            return (
              <Link
                key={child.href}
                href={child.href}
                onClick={onNavigate}
                className={`flex items-center gap-3 rounded-xl px-3 py-3 transition ${
                  childActive
                    ? "bg-blue-50 text-blue-700"
                    : "text-slate-600 hover:bg-slate-50 hover:text-blue-700"
                }`}
              >
                <ChildIcon size={17} className="shrink-0" />

                <div>
                  <p className="text-sm">
                    {child.title}
                  </p>

                  <p className="mt-0.5 text-xs text-slate-400">
                    {child.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
