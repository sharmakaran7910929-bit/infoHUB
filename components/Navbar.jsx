"use client";

import { useState } from "react";

const navItems = [
  {
    title: "Home",
    href: "/",
  },

  {
    title: "AI",
    href: "/ai",
    children: [
      {
        title: "AI Basics",
        href: "/ai/basics",
      },
      {
        title: "Generative AI",
        href: "/ai/generative-ai",
      },
      {
        title: "Machine Learning",
        href: "/ai/machine-learning",
      },
      {
        title: "AI Tools",
        href: "/ai/ai-tools",
      },
    ],
  },

  {
    title: "Technology",
    href: "/technology",
    children: [
      {
        title: "Software",
        href: "/technology/software",
      },
      {
        title: "Internet",
        href: "/technology/internet",
      },
      {
        title: "Gadgets",
        href: "/technology/gadgets",
      },
    ],
  },

  {
    title: "Business",
    href: "/business",
    children: [
      {
        title: "Business Basics",
        href: "/business/basics",
      },
      {
        title: "Marketing",
        href: "/business/marketing",
      },
      {
        title: "Entrepreneurship",
        href: "/business/entrepreneurship",
      },
    ],
  },

  {
    title: "Education",
    href: "/education",
    children: [
      {
        title: "Learning",
        href: "/education/learning",
      },
      {
        title: "Courses",
        href: "/education/courses",
      },
      {
        title: "Study",
        href: "/education/study",
      },
    ],
  },

  {
    title: "Health",
    href: "/health",
    children: [
      {
        title: "Health Basics",
        href: "/health/basics",
      },
      {
        title: "Fitness",
        href: "/health/fitness",
      },
      {
        title: "Nutrition",
        href: "/health/nutrition",
      },
    ],
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(null);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-xl">

      <div className="mx-auto max-w-7xl px-6">

        {/* Main Navbar */}
        <div className="flex h-16 items-center justify-between">

          {/* Brand */}
          <a
            href="/"
            className="flex items-center gap-3"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-sm font-medium text-white shadow-lg shadow-blue-600/20">
              IH
            </div>

            <div>
              <div className="text-lg font-medium tracking-tight text-slate-950">
                PriceTag HUB
              </div>

              <div className="hidden text-[10px] font-medium uppercase tracking-[0.2em] text-slate-400 sm:block">
                Knowledge, organized.
              </div>
            </div>
          </a>


          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 lg:flex">

            {navItems.map((item) => (
              <DesktopNavItem
                key={item.title}
                item={item}
              />
            ))}

          </nav>


          {/* Right Side */}
          <div className="flex items-center gap-2">

            


            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-600 transition hover:border-blue-300 hover:text-blue-600 lg:hidden"
              aria-label="Toggle navigation"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? "×" : "☰"}
            </button>

          </div>

        </div>


        {/* Mobile Navigation */}
        {mobileOpen && (
          <div className="border-t border-slate-100 py-3 lg:hidden">

            <nav className="space-y-1">

              {navItems.map((item) => (
                <MobileNavItem
                  key={item.title}
                  item={item}
                  expanded={mobileExpanded === item.title}
                  onToggle={() =>
                    setMobileExpanded(
                      mobileExpanded === item.title
                        ? null
                        : item.title
                    )
                  }
                  onNavigate={() => setMobileOpen(false)}
                />
              ))}

            </nav>

          </div>
        )}

      </div>

    </header>
  );
}


/* -------------------------------- */
/* Desktop Navigation Item */
/* -------------------------------- */

function DesktopNavItem({ item }) {
  const hasChildren = item.children?.length > 0;

  if (!hasChildren) {
    return (
      <a
        href={item.href}
        className="rounded-xl px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-50 hover:text-blue-600"
      >
        {item.title}
      </a>
    );
  }

  return (
    <div className="group relative">

      <a
        href={item.href}
        className="flex items-center gap-1 rounded-xl px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-50 hover:text-blue-600"
      >
        {item.title}

        <span className="text-[10px] text-slate-400">
          ▾
        </span>
      </a>


      {/* Dropdown */}
      <div className="invisible absolute left-0 top-full z-50 w-60 pt-2 opacity-0 transition duration-150 group-hover:visible group-hover:opacity-100">

        <div className="rounded-2xl border border-slate-200 bg-white p-2 shadow-xl shadow-slate-900/10">

          {/* Main category */}
          <a
            href={item.href}
            className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-900 transition hover:bg-blue-50 hover:text-blue-600"
          >
            All {item.title}
          </a>


          <div className="my-1 border-t border-slate-100" />


          {/* Sub items */}
          {item.children.map((child) => (
            <a
              key={child.title}
              href={child.href}
              className="block rounded-xl px-4 py-2.5 text-sm text-slate-500 transition hover:bg-slate-50 hover:text-blue-600"
            >
              {child.title}
            </a>
          ))}

        </div>

      </div>

    </div>
  );
}


/* -------------------------------- */
/* Mobile Navigation Item */
/* -------------------------------- */

function MobileNavItem({
  item,
  expanded,
  onToggle,
  onNavigate,
}) {
  const hasChildren = item.children?.length > 0;

  if (!hasChildren) {
    return (
      <a
        href={item.href}
        onClick={onNavigate}
        className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-blue-600"
      >
        {item.title}
      </a>
    );
  }

  return (
    <div>

      {/* Category */}
      <div className="flex items-center">

        <a
          href={item.href}
          onClick={onNavigate}
          className="flex-1 rounded-xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-blue-600"
        >
          {item.title}
        </a>

        <button
          type="button"
          onClick={onToggle}
          className="mr-1 flex h-10 w-10 items-center justify-center rounded-xl text-slate-400 transition hover:bg-slate-50 hover:text-blue-600"
          aria-label={`Expand ${item.title}`}
          aria-expanded={expanded}
        >
          <span
            className={`transition-transform ${
              expanded ? "rotate-180" : ""
            }`}
          >
            ▾
          </span>
        </button>

      </div>


      {/* Sub Items */}
      {expanded && (
        <div className="ml-4 border-l border-slate-200 pl-3">

          {item.children.map((child) => (
            <a
              key={child.title}
              href={child.href}
              onClick={onNavigate}
              className="block rounded-xl px-4 py-2.5 text-sm text-slate-500 transition hover:bg-slate-50 hover:text-blue-600"
            >
              {child.title}
            </a>
          ))}

        </div>
      )}

    </div>
  );
}