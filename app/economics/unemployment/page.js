
import Link from "next/link";
import {
  BriefcaseBusiness,
  Users,
  TrendingDown,
  Layers,
  Search,
  Activity,
  CloudRain,
  CalendarDays,
  GraduationCap,
  ChartNoAxesCombined,
  ArrowRight,
  Info,
  Target,
  BookOpen,
} from "lucide-react";

const topics = [
  {
    title: "What Is Unemployment?",
    description:
      "Understand the meaning of unemployment, who is considered unemployed, and how unemployment affects an economy.",
    href: "/economics/unemployment/what-is-unemployment",
    icon: Info,
    color: "blue",
  },
  {
    title: "Types of Unemployment",
    description:
      "Explore the different forms of unemployment and understand how they arise under different economic conditions.",
    href: "/economics/unemployment/types-of-unemployment",
    icon: Layers,
    color: "indigo",
  },
  {
    title: "Causes of Unemployment",
    description:
      "Learn about the major factors behind unemployment, including slow economic growth, population growth, and skill gaps.",
    href: "/economics/unemployment/causes-of-unemployment",
    icon: Search,
    color: "violet",
  },
  {
    title: "Unemployment Rate",
    description:
      "Understand how the unemployment rate is calculated, its formula, and what it reveals about labour market conditions.",
    href: "/economics/unemployment/unemployment-rate",
    icon: ChartNoAxesCombined,
    color: "cyan",
  },
  {
    title: "Labour Force Participation Rate",
    description:
      "Discover what LFPR measures, how it is calculated, and why labour force participation matters for economic growth.",
    href: "/economics/unemployment/labour-force-participation-rate",
    icon: Users,
    color: "emerald",
  },
  {
    title: "Effects of Unemployment",
    description:
      "Examine the economic and social consequences of unemployment on individuals, businesses, households, and society.",
    href: "/economics/unemployment/effects-of-unemployment",
    icon: TrendingDown,
    color: "orange",
  },
  {
    title: "Frictional Unemployment",
    description:
      "Understand temporary unemployment that occurs when people move between jobs or enter the labour market.",
    href: "/economics/unemployment/frictional-unemployment",
    icon: BriefcaseBusiness,
    color: "blue",
  },
  {
    title: "Structural Unemployment",
    description:
      "Learn how changes in technology, industries, and required skills can create a mismatch between workers and available jobs.",
    href: "/economics/unemployment/structural-unemployment",
    icon: GraduationCap,
    color: "violet",
  },
  {
    title: "Cyclical Unemployment",
    description:
      "Explore unemployment caused by economic downturns, recessions, and declining demand for goods and services.",
    href: "/economics/unemployment/cyclical-unemployment",
    icon: Activity,
    color: "rose",
  },
  {
    title: "Seasonal Unemployment",
    description:
      "Understand joblessness that occurs during particular seasons due to changes in agricultural, tourism, and other seasonal activities.",
    href: "/economics/unemployment/seasonal-unemployment",
    icon: CalendarDays,
    color: "amber",
  },
];

const colorStyles = {
  blue: "bg-blue-50 text-blue-600 ring-blue-100",
  indigo: "bg-indigo-50 text-indigo-600 ring-indigo-100",
  violet: "bg-violet-50 text-violet-600 ring-violet-100",
  cyan: "bg-cyan-50 text-cyan-600 ring-cyan-100",
  emerald: "bg-emerald-50 text-emerald-600 ring-emerald-100",
  orange: "bg-orange-50 text-orange-600 ring-orange-100",
  rose: "bg-rose-50 text-rose-600 ring-rose-100",
  amber: "bg-amber-50 text-amber-600 ring-amber-100",
};

export const metadata = {
  title: "Unemployment: Meaning, Types, Causes & Effects | PriceTag HUB",
  description:
    "Explore unemployment, its meaning, types, causes, unemployment rate, labour force participation, and economic effects with practical explanations.",
  alternates: {
    canonical: "/economics/unemployment",
  },
};

export default function UnemploymentPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50/80 via-white to-white p-5">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">

        {/* Hero Section */}
        <section className="relative overflow-hidden rounded-3xl border border-blue-100 bg-gradient-to-br from-white via-blue-50 to-indigo-100 px-6 py-10 shadow-sm sm:px-10 sm:py-14">
          <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-blue-200/30 blur-3xl" />
          <div className="absolute -bottom-20 left-1/2 h-56 w-56 rounded-full bg-indigo-200/30 blur-3xl" />

          <div className="relative max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-sm font-bold text-blue-700">
              <BriefcaseBusiness size={16} />
              Economics / Labour Market
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Understanding Unemployment
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              Unemployment is one of the most important indicators of an
              economy's health. Explore why people remain without work,
              how unemployment is measured, its different types, and its
              impact on economic growth and society.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#unemployment-topics"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-bold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
              >
                Explore Topics
                <ArrowRight size={18} />
              </a>
            </div>
          </div>

          <div className="relative mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-white bg-white/80 p-4 shadow-sm backdrop-blur">
              <BookOpen className="mb-3 text-blue-600" size={23} />
              <p className="text-2xl font-bold text-slate-900">10</p>
              <p className="mt-1 text-sm text-slate-500">Learning Topics</p>
            </div>
            <div className="rounded-2xl border border-white bg-white/80 p-4 shadow-sm backdrop-blur">
              <Users className="mb-3 text-indigo-600" size={23} />
              <p className="text-2xl font-bold text-slate-900">Labour</p>
              <p className="mt-1 text-sm text-slate-500">Market Concepts</p>
            </div>
            <div className="col-span-2 rounded-2xl border border-white bg-white/80 p-4 shadow-sm backdrop-blur sm:col-span-1">
              <Target className="mb-3 text-emerald-600" size={23} />
              <p className="text-2xl font-bold text-slate-900">Practical</p>
              <p className="mt-1 text-sm text-slate-500">Economic Understanding</p>
            </div>
          </div>
        </section>

        {/* Topics */}
        <section id="unemployment-topics" className="scroll-mt-24 pt-14">
          <div className="mb-8">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Explore the subject
            </p>
            <h2 className="mt-2 text-3xl font-bold text-slate-900">
              Unemployment Topics
            </h2>
            <p className="mt-3 max-w-2xl leading-7 text-slate-600">
              Build your understanding of unemployment through these
              interconnected concepts, from basic definitions to
              different forms of joblessness.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {topics.map((topic, index) => {
              const Icon = topic.icon;

              return (
                <Link
                  key={topic.href}
                  href={topic.href}
                  className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/60"
                >
                  <div className="flex items-start justify-between">
                    <div
                      className={`rounded-xl p-3 ring-1 ${colorStyles[topic.color]}`}
                    >
                      <Icon size={23} />
                    </div>
                    <span className="text-sm font-bold text-slate-300">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-slate-900 transition group-hover:text-blue-700">
                    {topic.title}
                  </h3>

                  <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">
                    {topic.description}
                  </p>

                  <div className="mt-5 flex items-center gap-2 border-t border-slate-100 pt-4 text-sm font-bold text-blue-600">
                    Explore Topic
                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Closing Section */}
        <section className="mt-14 rounded-2xl border border-blue-100 bg-gradient-to-r from-blue-50 to-indigo-50 p-7 sm:p-9">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white text-blue-600 shadow-sm">
              <CloudRain size={28} />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900">
                Why Understanding Unemployment Matters
              </h2>
              <p className="mt-2 max-w-3xl leading-7 text-slate-600">
                Unemployment affects income, living standards, productivity,
                and economic stability. Understanding its causes and
                measurement helps explain labour market challenges and
                the economic policies used to address them.
              </p>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
