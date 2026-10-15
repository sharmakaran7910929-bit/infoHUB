
import Image from "next/image";
import {
  ArrowUpRight,
  CheckCircle2,
  ShoppingBag,
} from "lucide-react";

export default function ProductCard({
  categoryHeading = "",
  title,
  description,
  image,
  imageAlt,
  features = [],
  price,
  originalPrice,
  link,
  linkLabel = "View Product",
  badge = "Recommended",
  disclosure = true,
}) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-blue-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg">
      {/* Product image */}
 
      {/* Product image */}
      <div className="relative flex aspect-[5/4] items-center justify-center overflow-hidden bg-gradient-to-br from-white via-sky-50 to-blue-100 p-5">
        {badge && (
          <span className="absolute left-3 top-3 z-10 rounded-full border border-blue-100 bg-white/95 px-3 py-1 text-xs font-semibold text-blue-700 shadow-sm">
            {badge}
          </span>
        )}

        {image ? (
          <div className="relative h-[75%] w-[75%] transition duration-300 group-hover:scale-105">
            <Image
              src={image}
              alt={imageAlt || title}
              fill
              sizes="(max-width: 640px) 70vw, 220px"
              className="object-contain"
            />
          </div>
        ) : (
          <div className="flex flex-col items-center gap-2 text-blue-300">
            <ShoppingBag size={40} strokeWidth={1.3} />
            <span className="text-xs font-medium text-blue-500">
              Product image
            </span>
          </div>
        )}
      </div>


      {/* Product information */}
      <div className="flex flex-1 flex-col p-5">
        {/* Custom category heading */}
        {categoryHeading && (
          <div className="mb-3">
            <span className="inline-flex max-w-full items-center rounded-lg border border-blue-100 bg-gradient-to-r from-blue-50 to-sky-100 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-blue-800">
              {categoryHeading}
            </span>
          </div>
        )}

        {/* Product title */}
        <h3 className="text-lg font-bold leading-snug text-blue-950">
          {title}
        </h3>

        {/* Description */}
        {description && (
          <p className="mt-2 text-sm leading-6 text-slate-600">
            {description}
          </p>
        )}

        {/* Features */}
        {features.length > 0 && (
          <ul className="mt-4 space-y-2">
            {features.map((feature, index) => (
              <li
                key={`${title}-feature-${index}`}
                className="flex items-start gap-2 text-sm leading-6 text-slate-700"
              >
                <CheckCircle2
                  size={17}
                  className="mt-1 shrink-0 text-blue-600"
                />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Price */}
        {(price || originalPrice) && (
          <div className="mt-4 flex flex-wrap items-baseline gap-2">
            {price && (
              <span className="text-xl font-bold text-blue-950">
                {price}
              </span>
            )}

            {originalPrice && (
              <span className="text-sm text-slate-400 line-through">
                {originalPrice}
              </span>
            )}
          </div>
        )}

        {/* Product link */}
        <div className="mt-auto pt-5">
          {link ? (
            <a
              href={link}
              target="_blank"
              rel="sponsored nofollow noopener noreferrer"
              className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-sky-500 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:from-blue-700 hover:to-sky-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
            >
              {linkLabel}
              <ArrowUpRight size={17} />
            </a>
          ) : (
            <span className="inline-flex min-h-11 w-full items-center justify-center rounded-xl bg-slate-100 px-4 py-3 text-sm text-slate-500">
              Link not available
            </span>
          )}

          
        </div>
      </div>
    </article>
  );
}
