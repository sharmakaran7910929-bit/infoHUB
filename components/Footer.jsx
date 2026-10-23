
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const navigation = [
  { label: "Home", href: "/" },
  { label: "Artificial Intelligence", href: "/ai" },
  { label: "Networking", href: "/networking" },
  { label: "Economics", href: "/economics" },
  { label: "Share Market", href: "/share-market" },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Main Footer */}
        <div className="grid gap-10 py-12 md:grid-cols-[1.4fr_1fr] md:gap-16 md:py-14">

          {/* Brand */}
          <div className="max-w-lg">
            <Link
              href="/"
              className="inline-flex items-center gap-3"
              aria-label="PriceTag HUB home"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-700 text-sm font-bold tracking-wide text-white">
                PH
              </div>

              <div>
                <p className="text-lg font-bold tracking-tight text-slate-950">
                  PriceTag HUB
                </p>
                <p className="mt-0.5 text-xs text-slate-500">
                  by K2S INFOTECH
                </p>
              </div>
            </Link>

            <p className="mt-5 max-w-md text-sm leading-7 text-slate-600">
              Knowledge, organized. Explore practical guides on technology,
              artificial intelligence, networking, economics, business,
              and the ideas shaping our world.
            </p>

            <p className="mt-4 text-sm font-medium text-blue-700">
              Knowledge for everyday decisions.
            </p>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer navigation">
            <h2 className="text-sm font-bold text-slate-950">
              Explore PriceTag HUB
            </h2>

            <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-1 sm:grid-cols-2">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group flex min-h-11 items-center justify-between gap-3 border-b border-slate-100 py-2 text-sm text-slate-600 transition hover:border-blue-200 hover:text-blue-700"
                >
                  <span>{item.label}</span>
                  <ArrowUpRight
                    size={15}
                    aria-hidden="true"
                    className="shrink-0 text-slate-400 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue-700"
                  />
                </Link>
              ))}
            </div>
          </nav>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col gap-3 border-t border-slate-200 py-5 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © 2026 PriceTag HUB. All rights reserved.
          </p>

          <p className="font-medium tracking-wide text-slate-600">
            Knowledge, organized.
          </p>
        </div>
      </div>
    </footer>
  );
}
