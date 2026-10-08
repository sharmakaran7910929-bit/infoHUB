"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function formatLabel(segment) {
  return segment
    .replace(/-/g, " ")
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export default function Breadcrumbs() {
  const pathname = usePathname();

  const segments = pathname.split("/").filter(Boolean);

  const breadcrumbItems = ["Home", ...segments];

  return (
    <div className="mx-auto max-w-7xl px-6 pt-8">
      <nav aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-2 text-sm">
          {breadcrumbItems.map((item, index) => {
            const isLast = index === breadcrumbItems.length - 1;

            const href =
              index === 0
                ? "/"
                : "/" + segments.slice(0, index).join("/");

            return (
              <li
                key={href}
                className="flex items-center gap-2"
              >
                {index !== 0 && (
                  <span className="text-slate-300">/</span>
                )}

                {isLast ? (
                  <span className="text-slate-600">
                    {formatLabel(item)}
                  </span>
                ) : (
                  <Link
                    href={href}
                    className="text-slate-400 transition hover:text-blue-600"
                  >
                    {formatLabel(item)}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </div>
  );
}