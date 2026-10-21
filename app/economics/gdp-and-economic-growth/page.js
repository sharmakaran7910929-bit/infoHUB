import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  TrendingUp,
  Globe2,
  Users,
  Activity,
  Calculator,
  Lightbulb,
  BookOpen,
  Target,
  LineChart,
  Landmark,
} from "lucide-react";

const topics = [
  {
    title: "What Is GDP?",
    description:
      "Understand Gross Domestic Product, how it measures economic activity, and why it matters to a country's economy.",
    href: "/economics/gdp-and-economic-growth/what-is-gdp",
    icon: BarChart3,
    color: "blue",
    tag: "Start Here",
  },
  {
    title: "GDP Of India",
    description:
      "Explore India's GDP, the sectors contributing to national output, and how economic performance is measured.",
    href: "/economics/gdp-and-economic-growth/gdp-of-india",
    icon: Landmark,
    color: "orange",
    tag: "India Focus",
  },
  {
    title: "GDP Per Capita",
    description:
      "Learn how GDP per capita is calculated and what it can reveal about average economic output per person.",
    href: "/economics/gdp-and-economic-growth/gdp-per-capita",
    icon: Users,
    color: "purple",
    tag: "Key Indicator",
  },
  {
    title: "GDP Vs GNP",
    description:
      "Compare Gross Domestic Product and Gross National Product with simple examples to understand the difference.",
    href: "/economics/gdp-and-economic-growth/gdp-vs-gnp",
    icon: Globe2,
    color: "cyan",
    tag: "Comparison",
  },
  {
    title: "Real Vs Nominal GDP",
    description:
      "Discover how inflation affects GDP figures and why economists distinguish current-price output from inflation-adjusted output.",
    href: "/economics/gdp-and-economic-growth/real-vs-nominal-gdp",
    icon: Calculator,
    color: "emerald",
    tag: "Important Concept",
  },
  {
    title: "Economic Growth",
    description:
      "Understand how an economy expands its productive capacity and which factors can support sustainable long-term growth.",
    href: "/economics/gdp-and-economic-growth/economic-growth",
    icon: TrendingUp,
    color: "rose",
    tag: "Growth Basics",
  },
  {
    title: "Business Cycle",
    description:
      "Learn about expansion, peak, contraction, and recovery—and why economic activity does not grow at the same rate every year.",
    href: "/economics/gdp-and-economic-growth/business-cycle",
    icon: Activity,
    color: "amber",
    tag: "Economic Trends",
  },
];

const colorStyles = {
  blue: {
    icon: "bg-blue-100 text-blue-700",
    border: "hover:border-blue-300",
    tag: "bg-blue-50 text-blue-700",
  },
  orange: {
    icon: "bg-orange-100 text-orange-700",
    border: "hover:border-orange-300",
    tag: "bg-orange-50 text-orange-700",
  },
  purple: {
    icon: "bg-purple-100 text-purple-700",
    border: "hover:border-purple-300",
    tag: "bg-purple-50 text-purple-700",
  },
  cyan: {
    icon: "bg-cyan-100 text-cyan-700",
    border: "hover:border-cyan-300",
    tag: "bg-cyan-50 text-cyan-700",
  },
  emerald: {
    icon: "bg-emerald-100 text-emerald-700",
    border: "hover:border-emerald-300",
    tag: "bg-emerald-50 text-emerald-700",
  },
  rose: {
    icon: "bg-rose-100 text-rose-700",
    border: "hover:border-rose-300",
    tag: "bg-rose-50 text-rose-700",
  },
  amber: {
    icon: "bg-amber-100 text-amber-700",
    border: "hover:border-amber-300",
    tag: "bg-amber-50 text-amber-700",
  },
};

const learningSteps = [
  {
    number: "01",
    title: "Understand GDP",
    description: "Start with the meaning and purpose of Gross Domestic Product.",
    href: "/economics/gdp-and-economic-growth/what-is-gdp",
  },
  {
    number: "02",
    title: "Learn GDP Measurements",
    description: "Compare GDP per capita, GNP, real GDP, and nominal GDP.",
    href: "/economics/gdp-and-economic-growth/gdp-per-capita",
  },
  {
    number: "03",
    title: "Explore India's Economy",
    description: "Connect economic indicators with India's economic performance.",
    href: "/economics/gdp-and-economic-growth/gdp-of-india",
  },
  {
    number: "04",
    title: "Study Growth And Cycles",
    description: "Discover long-term growth and short-term economic fluctuations.",
    href: "/economics/gdp-and-economic-growth/economic-growth",
  },
];

export default function GDPAndEconomicGrowthPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-800 to-indigo-700 text-white">
        <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-cyan-400/15 blur-3xl" />
        <div className="absolute -bottom-28 -left-16 h-72 w-72 rounded-full bg-indigo-300/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-bold text-blue-100">
            <BookOpen size={16} />
            Economics Learning Hub
          </div>

          <div className="grid items-center gap-10 lg:grid-cols-[1.3fr_0.7fr]">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
                National Output · Economic Performance · Growth
              </p>

              <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                GDP And Economic Growth Explained
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-blue-100 sm:text-lg">
                Understand how countries measure economic output, why GDP
                changes over time, how inflation affects economic statistics,
                and what economic growth means for people and businesses.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/economics/gdp-and-economic-growth/what-is-gdp"
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-bold text-blue-900 transition hover:bg-blue-50"
                >
                  Start Learning <ArrowRight size={18} />
                </Link>

                <a
                  href="#explore-topics"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-5 py-3 font-bold text-white transition hover:bg-white/10"
                >
                  Explore All Topics
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-white/15 bg-white/10 p-6 shadow-2xl backdrop-blur-sm sm:p-8">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-300 text-blue-950">
                <LineChart size={30} />
              </div>

              <h2 className="text-2xl font-bold">
                What Does GDP Tell Us?
              </h2>

              <p className="mt-3 leading-7 text-blue-100">
                GDP measures the value of final goods and services produced
                within a country's borders during a specified period.
              </p>

              <div className="mt-6 space-y-3">
                {[
                  "The size of economic production",
                  "Changes in output over time",
                  "How inflation affects reported growth",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-cyan-300" />
                    <p className="text-sm leading-6 text-blue-50">{item}</p>
                  </div>
                ))}
              </div>

              <p className="mt-5 border-t border-white/15 pt-4 text-sm leading-6 text-blue-200">
                Remember: GDP is an important economic indicator, but it does
                not measure every aspect of people's well-being.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          <div>
            <p className="mb-2 text-sm font-bold uppercase tracking-widest text-blue-700">
              The Basics
            </p>

            <h2 className="text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
              Why GDP And Economic Growth Matter
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Imagine that a country's factories produce more goods, its
              businesses provide more services, and its farms increase their
              output. GDP helps measure the value of this production. Comparing
              GDP over time helps economists study whether economic activity is
              expanding or contracting.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              However, a higher GDP figure does not automatically mean that
              every household is better off. Population growth, inflation,
              income distribution, employment, and environmental conditions
              also matter when assessing economic progress.
            </p>
          </div>

          <div className="rounded-3xl border border-blue-100 bg-gradient-to-br from-white to-blue-50 p-6 sm:p-8">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                <Lightbulb size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                A Simple Example
              </h3>
            </div>

            <p className="leading-7 text-slate-600">
              Suppose an economy produces final goods and services worth
              ₹100 lakh crore in one year and ₹105 lakh crore in the next year,
              measured at comparable prices.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-slate-200 bg-white p-4">
                <p className="text-sm font-bold text-slate-500">Year One</p>
                <p className="mt-2 text-2xl font-bold text-slate-900">
                  ₹100 Lakh Cr
                </p>
              </div>
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
                <p className="text-sm font-bold text-emerald-700">
                  Year Two
                </p>
                <p className="mt-2 text-2xl font-bold text-emerald-800">
                  ₹105 Lakh Cr
                </p>
              </div>
            </div>

            <div className="mt-4 rounded-xl bg-blue-900 p-4 text-white">
              <p className="text-sm font-bold text-blue-200">
                Illustrative Real GDP Growth
              </p>
              <p className="mt-1 text-3xl font-bold">5%</p>
              <p className="mt-2 text-sm leading-6 text-blue-100">
                This example assumes both figures use comparable prices.
                Growth calculated from nominal GDP can differ because of
                inflation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Topic Cards */}
      <section
        id="explore-topics"
        className="border-y border-slate-200 bg-white py-16 sm:py-20"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-blue-700">
              Explore The Knowledge Hub
            </p>

            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Explore GDP And Economic Growth Topics
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Start with the fundamentals or choose a specific topic to
              understand economic indicators, national output, and business
              cycles.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {topics.map((topic) => {
              const Icon = topic.icon;
              const styles = colorStyles[topic.color];

              return (
                <article
                  key={topic.href}
                  className={`group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg ${styles.border}`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-xl ${styles.icon}`}
                    >
                      <Icon size={24} />
                    </div>

                    <span
                      className={`rounded-full px-3 py-1 text-xs font-bold ${styles.tag}`}
                    >
                      {topic.tag}
                    </span>
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-slate-900">
                    {topic.title}
                  </h3>

                  <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">
                    {topic.description}
                  </p>

                  <Link
                    href={topic.href}
                    className="mt-5 inline-flex w-fit items-center gap-2 font-bold text-blue-700 transition group-hover:gap-3"
                  >
                    Read Topic <ArrowRight size={17} />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Learning Path */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-700">
              <Target size={28} />
            </div>

            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Follow A Simple Learning Path
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              New to economics? Follow these steps to build your understanding
              gradually, from basic definitions to the bigger picture of
              economic performance.
            </p>

            <Link
              href="/economics/basics"
              className="mt-6 inline-flex items-center gap-2 font-bold text-blue-700 hover:text-blue-900"
            >
              Explore Economics Basics <ArrowRight size={18} />
            </Link>
          </div>

          <div className="space-y-4">
            {learningSteps.map((step) => (
              <Link
                key={step.number}
                href={step.href}
                className="group flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-blue-300 hover:shadow-md sm:gap-5 sm:p-6"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 font-bold text-blue-700">
                  {step.number}
                </div>

                <div className="flex-1">
                  <h3 className="font-bold text-slate-900">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {step.description}
                  </p>
                </div>

                <ArrowRight
                  size={20}
                  className="mt-1 shrink-0 text-slate-400 transition group-hover:translate-x-1 group-hover:text-blue-700"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-100 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <div className="mb-9 text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-blue-700">
              Common Questions
            </p>

            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            <details className="group rounded-2xl border border-slate-200 bg-white p-5 open:border-blue-200 sm:p-6">
              <summary className="cursor-pointer list-none font-bold text-slate-900">
                What Is GDP In Simple Words?
                <span className="float-right text-blue-700">+</span>
              </summary>
              <p className="mt-4 leading-7 text-slate-600">
                GDP is the total market value of final goods and services
                produced within a country's borders during a given period,
                usually a quarter or a year.
              </p>
            </details>

            <details className="group rounded-2xl border border-slate-200 bg-white p-5 open:border-blue-200 sm:p-6">
              <summary className="cursor-pointer list-none font-bold text-slate-900">
                What Is The Difference Between GDP And Economic Growth?
                <span className="float-right text-blue-700">+</span>
              </summary>
              <p className="mt-4 leading-7 text-slate-600">
                GDP measures economic output, while economic growth generally
                refers to an increase in real output over time. Real GDP growth
                is a common way to measure that increase.
              </p>
            </details>

            <details className="group rounded-2xl border border-slate-200 bg-white p-5 open:border-blue-200 sm:p-6">
              <summary className="cursor-pointer list-none font-bold text-slate-900">
                Does Higher GDP Always Mean A Better Standard Of Living?
                <span className="float-right text-blue-700">+</span>
              </summary>
              <p className="mt-4 leading-7 text-slate-600">
                No. GDP can increase without equal improvements for everyone.
                GDP per capita, income distribution, employment, public
                services, and environmental quality provide additional context.
              </p>
            </details>

            <details className="group rounded-2xl border border-slate-200 bg-white p-5 open:border-blue-200 sm:p-6">
              <summary className="cursor-pointer list-none font-bold text-slate-900">
                Why Are Real GDP And Nominal GDP Different?
                <span className="float-right text-blue-700">+</span>
              </summary>
              <p className="mt-4 leading-7 text-slate-600">
                Nominal GDP uses the prices of the period being measured.
                Real GDP adjusts for price changes to make comparisons of
                production over time more meaningful.
              </p>
            </details>

            <details className="group rounded-2xl border border-slate-200 bg-white p-5 open:border-blue-200 sm:p-6">
              <summary className="cursor-pointer list-none font-bold text-slate-900">
                What Causes Economic Growth?
                <span className="float-right text-blue-700">+</span>
              </summary>
              <p className="mt-4 leading-7 text-slate-600">
                Long-term growth can be supported by improvements in
                productivity, education and skills, technology, infrastructure,
                investment, institutions, and the effective use of resources.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="px-5 py-14 sm:px-8 sm:py-16">
        <div className="mx-auto max-w-5xl rounded-3xl bg-gradient-to-r from-blue-900 to-indigo-800 px-6 py-10 text-center text-white sm:px-12 sm:py-14">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Build Your Understanding Of Economics
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-blue-100">
            Learn the concepts behind national income, inflation-adjusted
            output, economic growth, and changing business conditions.
          </p>

          <Link
            href="/economics/gdp-and-economic-growth/what-is-gdp"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-bold text-blue-900 transition hover:bg-blue-50"
          >
            Begin With GDP <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}