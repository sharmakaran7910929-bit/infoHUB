
import Link from "next/link";

export default function RelatedTopics({
  eyebrow = "Continue Learning",
  title = "Explore Related Topics",
  description = "Continue exploring related guides to build your understanding step by step.",
  links = [],
}) {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 pb-12 sm:px-6 sm:pb-16 lg:px-8 lg:pb-20">
      <div className="overflow-hidden rounded-2xl bg-blue-600 px-5 py-7 text-white sm:rounded-3xl sm:px-8 sm:py-9 lg:px-10 lg:py-10">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-100 sm:text-sm sm:tracking-widest">
            {eyebrow}
          </p>

          <h2 className="mt-3 text-2xl font-semibold leading-tight tracking-tight sm:text-3xl lg:text-4xl">
            {title}
          </h2>

          <p className="mt-4 text-sm leading-6 text-blue-100 sm:text-base sm:leading-7">
            {description}
          </p>
        </div>

        {links.length > 0 && (
          <div className="mt-6 grid grid-cols-1 gap-3 sm:mt-7 sm:flex sm:flex-wrap">
            {links.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                className={`flex min-h-12 w-full items-center justify-center rounded-xl px-4 py-3 text-center text-sm font-medium leading-5 transition-colors sm:w-auto sm:max-w-full sm:px-5 ${
                  index === 0
                    ? "bg-white text-blue-700 hover:bg-blue-50"
                    : "border border-blue-300 text-white hover:bg-blue-500"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
