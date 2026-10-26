
import Link from "next/link";
import {
  ArrowRight,
  Landmark,
  TrendingUp,
  TrendingDown,
  Wallet,
} from "lucide-react";

export const metadata = {
  title: "Fiscal Policy: Government Spending, Taxes & Economic Impact | PriceTag HUB",
  description:
    "Understand how government spending and taxation influence economic growth, inflation and employment. Explore fiscal policy concepts and practical examples.",
  alternates: {
    canonical: "https://www.pricetag.co.in/economics/fiscal-policy",
  },
};

const topics = [
  {
    title: "What Is Fiscal Policy?",
    description:
      "Understand how government spending and taxation influence the economy.",
    href: "/economics/fiscal-policy/what-is-fiscal-policy",
    icon: Landmark,
    color: "bg-blue-100 text-blue-700",
  },
  {
    title: "Expansionary Fiscal Policy",
    description:
      "Explore how governments can support demand and economic activity during a slowdown.",
    href: "/economics/fiscal-policy/expansionary-fiscal-policy",
    icon: TrendingUp,
    color: "bg-emerald-100 text-emerald-700",
  },
  {
    title: "Contractionary Fiscal Policy",
    description:
      "Learn how governments may moderate excessive demand and inflationary pressure.",
    href: "/economics/fiscal-policy/contractionary-fiscal-policy",
    icon: TrendingDown,
    color: "bg-amber-100 text-amber-800",
  },
  {
    title: "Tools of Fiscal Policy",
    description:
      "Explore taxation, public expenditure and other ways governments influence economic outcomes.",
    href: "/economics/fiscal-policy/tools-of-fiscal-policy",
    icon: Wallet,
    color: "bg-violet-100 text-violet-700",
  },
];

export default function FiscalPolicyPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 p-5">
      <section className="border-b border-slate-200 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-3 py-1.5 text-sm font-bold text-blue-800">
              <Landmark size={16} />
              Economics · Government Policy
            </div>

            <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">
              Fiscal Policy
            </h1>

            <p className="mt-5 text-base leading-8 text-slate-700 sm:text-lg">
              How do government decisions affect your taxes, jobs, prices and
              the wider economy? Explore fiscal policy through practical
              explanations of public spending, taxation and the choices
              governments make during economic booms and slowdowns.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
        <div className="mb-8">
          <p className="text-sm font-bold uppercase tracking-widest text-blue-700">
            Explore fiscal policy
          </p>
          <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
            What Do You Want To Understand?
          </h2>
          <p className="mt-3 max-w-2xl leading-7 text-slate-600">
            Choose the question closest to what you are looking for.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {topics.map((topic) => {
            const Icon = topic.icon;

            return (
              <Link
                key={topic.href}
                href={topic.href}
                className="group rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg sm:p-6"
              >
                <div className="flex items-start gap-4">
                  <div className={`rounded-xl p-3 ${topic.color}`}>
                    <Icon size={25} />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-lg font-bold sm:text-xl">
                      {topic.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      {topic.description}
                    </p>

                    <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-blue-700">
                      Explore topic
                      <ArrowRight
                        size={17}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
}
