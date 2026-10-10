"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ChevronDown,
  BrainCircuit,
  BookOpen,
  Sparkles,
  Network,
  House,
} from "lucide-react";

const navItems = [
  {
    title: "Home",
    href: "/",
    icon: House,
  },
  {
    title: "AI",
    href: "/ai",
    icon: BrainCircuit,
    children: [
      {
        title: "AI Basics",
        href: "/ai/basics",
        icon: BookOpen,
      },
      {
        title: "Generative AI",
        href: "/ai/generative-ai",
        icon: Sparkles,
      },
      {
        title: "Machine Learning",
        href: "/ai/machine-learning",
        icon: Network,
      },
    ],
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(null);

  function closeMobileMenu() {
    setMobileOpen(false);
    setMobileExpanded(null);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-6">
        {/* Main Navbar */}
        <div className="flex h-16 items-center justify-between">
          {/* Brand */}
          <Link
            href="/"
            onClick={closeMobileMenu}
            className="flex items-center gap-3"
            aria-label="PriceTag HUB home"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-sm font-semibold text-white shadow-lg shadow-blue-600/20">
              PH
            </div>

            <div>
              <div className="text-lg font-semibold tracking-tight text-slate-950">
                PriceTag HUB
              </div>

              <div className="hidden text-[10px] font-medium uppercase tracking-[0.2em] text-slate-400 sm:block">
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
              <DesktopNavItem key={item.title} item={item} />
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-600 transition hover:border-blue-300 hover:text-blue-600 lg:hidden"
            aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
          >
            {mobileOpen ? (
              <span className="text-2xl leading-none">×</span>
            ) : (
              <span className="text-xl leading-none">☰</span>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileOpen && (
          <div
            id="mobile-navigation"
            className="border-t border-slate-100 py-3 lg:hidden"
          >
            <nav aria-label="Mobile navigation" className="space-y-1">
              {navItems.map((item) => (
                <MobileNavItem
                  key={item.title}
                  item={item}
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
          </div>
        )}
      </div>
    </header>
  );
}

/* Desktop Navigation Item */

function DesktopNavItem({ item }) {
  const hasChildren = Boolean(item.children?.length);
  const Icon = item.icon;

  if (!hasChildren) {
    return (
      <Link
        href={item.href}
        className="flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-50 hover:text-blue-600"
      >
        {Icon && <Icon size={16} />}
        {item.title}
      </Link>
    );
  }

  return (
    <div className="group relative">
      <Link
        href={item.href}
        className="flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-50 hover:text-blue-600"
      >
        {Icon && <Icon size={17} />}
        {item.title}
        <ChevronDown
          size={14}
          className="text-slate-400 transition-transform group-hover:rotate-180"
        />
      </Link>

      {/* Dropdown */}
      <div className="invisible absolute left-0 top-full z-50 w-64 pt-2 opacity-0 transition duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
        <div className="rounded-2xl border border-slate-200 bg-white p-2 shadow-xl shadow-slate-900/10">
          <Link
            href={item.href}
            className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold text-slate-900 transition hover:bg-blue-50 hover:text-blue-600"
          >
            <BrainCircuit size={17} />
            All AI Topics
          </Link>

          <div className="my-1 border-t border-slate-100" />

          {item.children.map((child) => {
            const ChildIcon = child.icon;

            return (
              <Link
                key={child.href}
                href={child.href}
                className="flex items-center gap-3 rounded-xl px-4 py-2.5 text-sm text-slate-600 transition hover:bg-slate-50 hover:text-blue-600"
              >
                <ChildIcon size={17} className="text-slate-400" />
                {child.title}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* Mobile Navigation Item */

function MobileNavItem({
  item,
  expanded,
  onToggle,
  onNavigate,
}) {
  const hasChildren = Boolean(item.children?.length);
  const Icon = item.icon;

  if (!hasChildren) {
    return (
      <Link
        href={item.href}
        onClick={onNavigate}
        className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-blue-600"
      >
        {Icon && <Icon size={18} className="text-slate-400" />}
        {item.title}
      </Link>
    );
  }

  return (
    <div>
      <div className="flex items-center">
        <Link
          href={item.href}
          onClick={onNavigate}
          className="flex flex-1 items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-blue-600"
        >
          {Icon && <Icon size={18} className="text-slate-400" />}
          {item.title}
        </Link>

        <button
          type="button"
          onClick={onToggle}
          className="mr-1 flex h-10 w-10 items-center justify-center rounded-xl text-slate-400 transition hover:bg-slate-50 hover:text-blue-600"
          aria-label={`${expanded ? "Collapse" : "Expand"} ${item.title} topics`}
          aria-expanded={expanded}
        >
          <ChevronDown
            size={17}
            className={`transition-transform ${
              expanded ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>

      {/* Subtopics */}
      {expanded && (
        <div className="ml-5 border-l border-slate-200 py-1 pl-3">
          {item.children.map((child) => {
            const ChildIcon = child.icon;

            return (
              <Link
                key={child.href}
                href={child.href}
                onClick={onNavigate}
                className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-slate-600 transition hover:bg-slate-50 hover:text-blue-600"
              >
                <ChildIcon size={17} className="text-slate-400" />
                {child.title}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
