
import Link from "next/link";
import {
  ArrowRight,
  TrendingUp,
  ShoppingBasket,
  Calculator,
  ChartNoAxesCombined,
  Wallet,
  Factory,
  Scale,
  CircleHelp,
  BookOpen,
} from "lucide-react";

export const metadata = {
  title: "Inflation: Meaning, Causes, Effects & Calculation | PriceTag HUB",
  description:
    "Explore inflation guides covering its meaning, causes, calculation, CPI, WPI, purchasing power, effects, and different types of inflation.",
  alternates: {
    canonical: "https://www.pricetag.co.in/economics/inflation",
  },
};

const topics = [
  {
    title: "What Is Inflation?",
    description:
      "Discover what inflation means and why everyday goods and services can become more expensive.",
    href: "/economics/inflation/what-is-inflation",
    icon: BookOpen,
    color: "blue",
  },
  {
    title: "Inflation Rate Formula",
    description:
      "Learn how to calculate the inflation rate with a simple, step-by-step example.",
    href: "/economics/inflation/inflation-rate-formula",
    icon: Calculator,
    color: "sky",
  },
  {
    title: "Consumer Price Index (CPI)",
    description:
      "Explore how changes in consumer prices are measured in India.",
    href: "/economics/inflation/consumer-price-index",
    icon: ShoppingBasket,
    color: "indigo",
  },
  {
    title: "CPI Vs WPI",
    description:
      "Understand the difference between consumer price and wholesale price indexes.",
    href: "/economics/inflation/cpi-vs-wpi",
    icon: Scale,
    color: "violet",
  },
  {
    title: "Wholesale Price Index In India",
    description:
      "Learn how wholesale price changes are tracked and interpreted.",
    href: "/economics/inflation/wholesale-price-index-india",
    icon: Factory,
    color: "cyan",
  },
  {
    title: "Demand-Pull Inflation",
    description:
      "Explore how strong demand relative to supply can push prices upward.",
    href: "/economics/inflation/demand-pull-inflation",
    icon: TrendingUp,
    color: "blue",
  },
  {
    title: "Cost-Push Inflation",
    description:
      "Understand how rising production, fuel, and transport costs can affect prices.",
    href: "/economics/inflation/cost-push-inflation",
    icon: Factory,
    color: "orange",
  },
  {
    title: "Core Vs Headline Inflation",
    description:
      "Compare overall inflation with measures designed to show underlying price pressures.",
    href: "/economics/inflation/core-vs-headline-inflation",
    icon: ChartNoAxesCombined,
    color: "indigo",
  },
  {
    title: "Types Of Inflation",
    description:
      "Explore the different ways economists classify inflation.",
    href: "/economics/inflation/types-of-inflation",
    icon: BookOpen,
    color: "sky",
  },
  {
    title: "Effects Of Inflation",
    description:
      "Discover how inflation can affect households, savings, businesses, and borrowers.",
    href: "/economics/inflation/effects-of-inflation",
    icon: Wallet,
    color: "violet",
  },
  {
    title: "Purchasing Power And Inflation",
    description:
      "Understand how rising prices affect what your money can buy.",
    href: "/economics/inflation/purchasing-power-and-inflation",
    icon: ShoppingBasket,
    color: "blue",
  },
  {
    title: "Inflation Vs Deflation",
    description:
      "Compare a sustained rise in the general price level with a sustained fall.",
    href: "/economics/inflation/inflation-vs-deflation",
    icon: Scale,
    color: "cyan",
  },
  {
    title: "Hyperinflation",
    description:
      "Learn about extremely rapid price increases and their economic consequences.",
    href: "/economics/inflation/hyperinflation",
    icon: TrendingUp,
    color: "orange",
  },
  {
    title: "Stagflation",
    description:
      "Explore the difficult combination of high inflation and weak economic activity.",
    href: "/economics/inflation/stagflation",
    icon: CircleHelp,
    color: "indigo",
  },
];

const colorStyles = {
  blue: {
    icon: "bg-blue-100 text-blue-700",
    link: "text-blue-700 group-hover:text-blue-950",
  },
  sky: {
    icon: "bg-sky-100 text-sky-700",
    link: "text-sky-700 group-hover:text-sky-950",
  },
  indigo: {
    icon: "bg-indigo-100 text-indigo-700",
    link: "text-indigo-700 group-hover:text-indigo-950",
  },
  violet: {
    icon: "bg-violet-100 text-violet-700",
    link: "text-violet-700 group-hover:text-violet-950",
  },
  cyan: {
    icon: "bg-cyan-100 text-cyan-700",
    link: "text-cyan-700 group-hover:text-cyan-950",
  },
  orange: {
    icon: "bg-orange-100 text-orange-700",
    link: "text-orange-700 group-hover:text-orange-950",
  },
};

function TopicCard({ topic }) {
  const Icon = topic.icon;
  const styles = colorStyles[topic.color];

  return (
    <Link
      href={topic.href}
      className="group flex h-full flex-col rounded-2xl border border-blue-100 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-blue-300 hover:shadow-md sm:p-6"
    >
      <div
        className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${styles.icon}`}
      >
        <Icon size={24} strokeWidth={1.8} aria-hidden="true" />
      </div>

      <h3 className="text-lg font-bold text-slate-950 group-hover:text-blue-800">
        {topic.title}
      </h3>

      <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">
        {topic.description}
      </p>

      <span
        className={`mt-5 inline-flex items-center gap-2 text-sm font-bold ${styles.link}`}
      >
        Explore Topic
        <ArrowRight
          size={16}
          className="transition-transform group-hover:translate-x-1"
          aria-hidden="true"
        />
      </span>
    </Link>
  );
}

export default function InflationPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Hero */}
      <section className="border-b border-blue-100 bg-gradient-to-br from-blue-50 via-white to-sky-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-bold text-blue-800">
                <ChartNoAxesCombined size={17} aria-hidden="true" />
                Economics Explained Simply
              </div>

              <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl">
                Inflation: Understand Why Prices Rise
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
                Why does your money sometimes buy less than before?
                What causes prices to rise, and how is inflation measured?
                Explore clear, practical guides to understand inflation
                and its role in the economy.
              </p>

              <Link
                href="/economics/inflation/what-is-inflation"
                className="mt-7 inline-flex items-center gap-2 rounded-xl bg-blue-700 px-5 py-3 font-bold text-white transition hover:bg-blue-800"
              >
                Start Exploring
                <ArrowRight size={18} aria-hidden="true" />
              </Link>

              <p className="mt-4 text-sm text-slate-500">
                Simple explanations · Practical examples · Indian economy
              </p>
            </div>

            {/* Visual introduction */}
            <div className="rounded-3xl border border-blue-100 bg-white p-6 shadow-lg shadow-blue-100/40 sm:p-8">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-800">
                  <ShoppingBasket size={25} aria-hidden="true" />
                </div>

                <div>
                  <h2 className="text-lg font-bold text-slate-950">
                    A Familiar Question
                  </h2>
                  <p className="text-sm text-slate-500">
                    The price of everyday items
                  </p>
                </div>
              </div>

              <div className="mt-7 rounded-2xl bg-blue-50 p-5">
                <p className="text-sm font-bold text-slate-600">
                  Earlier
                </p>
                <p className="mt-1 text-3xl font-bold text-slate-900">
                  ₹100
                </p>
                <div className="mt-3 h-3 rounded-full bg-blue-200">
                  <div className="h-3 w-1/2 rounded-full bg-blue-500" />
                </div>
              </div>

              <div className="mt-4 rounded-2xl bg-sky-50 p-5">
                <p className="text-sm font-bold text-slate-600">
                  Later
                </p>
                <p className="mt-1 text-3xl font-bold text-blue-800">
                  ₹110
                </p>
                <div className="mt-3 h-3 rounded-full bg-sky-200">
                  <div className="h-3 w-[55%] rounded-full bg-blue-700" />
                </div>
              </div>

              <p className="mt-5 text-sm leading-6 text-slate-600">
                One item's price has increased by 10% in this illustration.
                Inflation, however, measures changes in the general price
                level across a basket of goods and services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Topic directory */}
      <section className="bg-gradient-to-b from-white to-blue-50/50 py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-9 max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-wider text-blue-700">
              Explore The Guides
            </p>

            <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
              Explore Inflation Topics
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Start with the meaning of inflation, explore how it is
              calculated, or dive into its causes, measurements, and effects.
              Choose a guide below to learn more about the concept that
              interests you.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {topics.map((topic) => (
              <TopicCard key={topic.href} topic={topic} />
            ))}
          </div>
        </div>
      </section>

      {/* Closing pitch */}
      <section className="border-t border-blue-100 bg-white">
        <div className="mx-auto max-w-4xl px-4 py-12 text-center sm:px-6 sm:py-14">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-800">
            <BookOpen size={25} aria-hidden="true" />
          </div>

          <h2 className="mt-5 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
            Understand Inflation One Concept At A Time
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
            From price indexes and inflation calculations to purchasing
            power and economic conditions, explore individual guides at
            your own pace.
          </p>

          <Link
            href="/economics/inflation/what-is-inflation"
            className="mt-6 inline-flex items-center gap-2 font-bold text-blue-700 hover:text-blue-950"
          >
            Begin With The Basics
            <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
}

