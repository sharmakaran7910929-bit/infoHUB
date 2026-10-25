
import Link from "next/link";
import {
  Activity,
  ArrowDownRight,
  ArrowRight,
  BarChart3,
  CheckCircle2,
  CircleDollarSign,
  CookingPot,
  Fuel,
  Gauge,
  Lightbulb,
  ShoppingBasket,
  TrendingUp,
  Wallet,
  Wheat,
  XCircle,
} from "lucide-react";
import AdSlot from '../../../../components/AdSlot'
export const metadata = {
  title:
    "Core Inflation vs Headline Inflation: Differences & Examples | PriceTag HUB",
  description:
    "Understand core inflation vs headline inflation with simple examples, visual comparisons, India's CPI, food and fuel prices, and how the RBI uses inflation data.",
  alternates: {
    canonical:
      "https://www.pricetag.co.in/economics/inflation/core-vs-headline-inflation",
  },
  openGraph: {
    title: "Core Inflation vs Headline Inflation Explained",
    description:
      "Learn why food and fuel prices affect headline inflation, how core inflation is measured, and what both indicators mean for India's economy.",
    url: "https://www.pricetag.co.in/economics/inflation/core-vs-headline-inflation",
    type: "article",
  },
};

const comparison = [
  {
    label: "What it measures",
    headline: "Price changes across the full consumer basket",
    core: "Price changes after excluding food and fuel",
  },
  {
    label: "Food prices",
    headline: "Included",
    core: "Excluded",
  },
  {
    label: "Fuel prices",
    headline: "Included",
    core: "Excluded",
  },
  {
    label: "Short-term volatility",
    headline: "Can be more volatile",
    core: "Often more stable",
  },
  {
    label: "Main purpose",
    headline: "Shows overall consumer inflation",
    core: "Helps assess underlying price pressures",
  },
];

const topics = [
  {
    title: "CPI vs WPI",
    description: "Understand consumer prices versus wholesale prices.",
    href: "/economics/inflation/cpi-vs-wpi",
    icon: BarChart3,
  },
  {
    title: "Inflation Rate Formula",
    description: "Learn how inflation is calculated step by step.",
    href: "/economics/inflation/inflation-rate-formula",
    icon: Gauge,
  },
  {
    title: "Effects of Inflation",
    description: "Explore how rising prices affect household budgets.",
    href: "/economics/inflation/effects-of-inflation",
    icon: Wallet,
  },
];

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mb-8 max-w-3xl">
      <p className="mb-2 text-sm font-bold uppercase tracking-[0.16em] text-blue-700">
        {eyebrow}
      </p>
      <h2 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-base leading-7 text-slate-600">
          {description}
        </p>
      )}
    </div>
  );
}

function InflationCard({
  type,
  subtitle,
  icon: Icon,
  color,
  children,
}) {
  return (
    <div className={`rounded-2xl border ${color.border} bg-white p-5 shadow-sm sm:p-6`}>
      <div className="flex items-start gap-3">
        <div className={`rounded-xl p-3 ${color.iconBg}`}>
          <Icon className={`h-6 w-6 ${color.icon}`} />
        </div>
        <div>
          <h3 className="text-xl font-bold text-slate-950">{type}</h3>
          <p className="mt-1 text-sm text-slate-500">{subtitle}</p>
        </div>
      </div>
      <div className="mt-5">{children}</div>
    </div>
  );
}

export default function CoreVsHeadlineInflationPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* HERO */}
      <section className="overflow-hidden border-b border-blue-100 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-3 py-1.5 text-sm font-semibold text-blue-800">
                <Activity className="h-4 w-4" />
                Economics · Inflation · India
              </div>

              <h1 className="max-w-2xl text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl">
                Core Inflation vs Headline Inflation
              </h1>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
                Why can food prices rise sharply while underlying inflation
                remains relatively stable? Discover what the two inflation
                measures reveal about India's economy, your household expenses,
                and the Reserve Bank of India's policy decisions.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="#difference"
                  className="inline-flex items-center gap-2 rounded-xl bg-blue-700 px-5 py-3 font-bold text-white transition hover:bg-blue-800"
                >
                  Compare Both Measures
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#example"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 font-bold text-slate-800 transition hover:bg-slate-50"
                >
                  See a Real-Life Example
                </a>
              </div>

              <p className="mt-5 text-sm text-slate-500">
                A practical guide to understanding inflation indicators.
              </p>
            </div>

            {/* VISUAL: TWO INFLATION MEASURES */}
            <div className="rounded-3xl border border-blue-100 bg-white p-5 shadow-xl shadow-blue-100/50 sm:p-7">
              <div className="mb-5 flex items-center justify-between">
                <p className="font-bold text-slate-900">
                  Two ways to read inflation
                </p>
                <BarChart3 className="h-5 w-5 text-blue-700" />
              </div>

              <div className="space-y-4">
                <div className="rounded-2xl bg-orange-50 p-4">
                  <div className="flex items-center gap-3">
                    <div className="rounded-xl bg-orange-100 p-3">
                      <ShoppingBasket className="h-6 w-6 text-orange-700" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-950">
                        Headline Inflation
                      </p>
                      <p className="text-sm text-slate-600">
                        Food + fuel + other items
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold">
                    <span className="rounded-full bg-white px-3 py-1.5 text-orange-800">
                      Vegetables
                    </span>
                    <span className="rounded-full bg-white px-3 py-1.5 text-orange-800">
                      Petrol
                    </span>
                    <span className="rounded-full bg-white px-3 py-1.5 text-orange-800">
                      Clothing
                    </span>
                  </div>
                </div>

                <div className="flex justify-center">
                  <ArrowDownRight className="h-6 w-6 text-slate-400" />
                </div>

                <div className="rounded-2xl bg-blue-50 p-4">
                  <div className="flex items-center gap-3">
                    <div className="rounded-xl bg-blue-100 p-3">
                      <TrendingUp className="h-6 w-6 text-blue-700" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-950">
                        Core Inflation
                      </p>
                      <p className="text-sm text-slate-600">
                        Other consumer items and services
                      </p>
                    </div>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    Commonly measured by excluding food and fuel from the CPI
                    basket.
                  </p>
                </div>
              </div>

              <p className="mt-4 text-xs leading-5 text-slate-500">
                Conceptual illustration, not actual inflation data. Both
                measures describe price changes, not the price level itself.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK ANSWER */}
      <section className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
          <div className="flex items-start gap-4">
            <div className="rounded-xl bg-blue-100 p-3">
              <Lightbulb className="h-6 w-6 text-blue-800" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-950">
                The difference in one minute
              </h2>
              <p className="mt-3 leading-7 text-slate-700">
                <strong>Headline inflation</strong> measures price changes
                across the entire consumer basket.{" "}
                <strong>Core inflation</strong> commonly measures price changes
                after removing food and fuel, which can fluctuate sharply.
                Headline inflation shows the overall change consumers face,
                while core inflation helps economists assess more persistent
                price pressures.
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Important: core inflation is not the inflation that consumers
                actually pay. It is an analytical measure, and the exact
                definition can differ between countries and methodologies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DEFINITIONS */}
      <section className="mx-auto max-w-6xl px-5 py-10 sm:px-8">
        <SectionHeading
          eyebrow="01 · Understand the basics"
          title="What Are Core and Headline Inflation?"
          description="Both measure how prices change over time. The key difference is which goods and services are included."
        />

        <div className="grid gap-5 md:grid-cols-2">
          <InflationCard
            type="Headline Inflation"
            subtitle="The overall consumer price picture"
            icon={ShoppingBasket}
            color={{
              border: "border-orange-200",
              iconBg: "bg-orange-100",
              icon: "text-orange-700",
            }}
          >
            <p className="leading-7 text-slate-600">
              Headline inflation reflects changes in prices across the full
              consumer basket. It includes food, fuel, clothing, housing-related
              expenses, and other included goods and services.
            </p>
            <div className="mt-5 space-y-3">
              {[
                ["Food", "Vegetables, milk, cereals"],
                ["Fuel", "Relevant fuel and energy items"],
                ["Other items", "Clothing, healthcare and services"],
              ].map(([name, detail]) => (
                <div
                  key={name}
                  className="flex items-start gap-3 rounded-xl bg-orange-50 p-3"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-orange-700" />
                  <div>
                    <p className="font-bold text-slate-900">{name}</p>
                    <p className="text-sm text-slate-600">{detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </InflationCard>

          <InflationCard
            type="Core Inflation"
            subtitle="A view of underlying price pressures"
            icon={Gauge}
            color={{
              border: "border-blue-200",
              iconBg: "bg-blue-100",
              icon: "text-blue-700",
            }}
          >
            <p className="leading-7 text-slate-600">
              A commonly used core CPI measure excludes food and fuel. Because
              these prices can be volatile, excluding them can make the
              underlying trend easier to assess.
            </p>
            <div className="mt-5 space-y-3">
              {[
                ["Food", "Excluded in this measure"],
                ["Fuel", "Excluded in this measure"],
                ["Other items", "Remain in the calculation"],
              ].map(([name, detail], index) => (
                <div
                  key={name}
                  className="flex items-start gap-3 rounded-xl bg-blue-50 p-3"
                >
                  {index < 2 ? (
                    <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-blue-700" />
                  ) : (
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-700" />
                  )}
                  <div>
                    <p className="font-bold text-slate-900">{name}</p>
                    <p className="text-sm text-slate-600">{detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </InflationCard>
        </div>
      </section>
<AdSlot />
      {/* COMPARISON */}
      <section
        id="difference"
        className="border-y border-slate-200 bg-slate-50"
      >
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
          <SectionHeading
            eyebrow="02 · Side-by-side comparison"
            title="Core Inflation vs Headline Inflation: Key Differences"
            description="Use this comparison to quickly understand which measure answers which economic question."
          />

          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full min-w-[620px] border-collapse text-left text-sm">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="p-4 font-bold">Basis</th>
                  <th className="p-4 font-bold">Headline Inflation</th>
                  <th className="p-4 font-bold">Core Inflation</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((item, index) => (
                  <tr
                    key={item.label}
                    className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}
                  >
                    <td className="p-4 font-bold text-slate-900">
                      {item.label}
                    </td>
                    <td className="p-4 leading-6 text-slate-600">
                      {item.headline}
                    </td>
                    <td className="p-4 leading-6 text-slate-600">
                      {item.core}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-sm leading-6 text-slate-500">
            Core inflation is not always lower than headline inflation. It can
            be higher when prices outside food and fuel rise faster.
          </p>
        </div>
      </section>

      {/* HOUSEHOLD EXAMPLE */}
      <section id="example" className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <SectionHeading
          eyebrow="03 · A household example"
          title="How Can Headline Inflation Rise While Core Inflation Stays Lower?"
          description="Imagine food and fuel prices rise sharply in one year, while the prices of many other items increase more moderately."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-orange-200 bg-orange-50 p-5 sm:p-7">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-white p-3">
                <CookingPot className="h-6 w-6 text-orange-700" />
              </div>
              <div>
                <p className="font-bold text-orange-900">
                  Scenario A · Food and fuel surge
                </p>
                <p className="text-sm text-orange-800">
                  Headline inflation faces extra pressure
                </p>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              <div className="flex items-center justify-between rounded-xl bg-white p-4">
                <div className="flex items-center gap-3">
                  <Wheat className="h-5 w-5 text-orange-700" />
                  <span className="font-semibold">Food prices</span>
                </div>
                <span className="font-bold text-orange-800">Rise sharply</span>
              </div>
              <div className="flex items-center justify-between rounded-xl bg-white p-4">
                <div className="flex items-center gap-3">
                  <Fuel className="h-5 w-5 text-orange-700" />
                  <span className="font-semibold">Fuel prices</span>
                </div>
                <span className="font-bold text-orange-800">Rise sharply</span>
              </div>
              <div className="rounded-xl border border-orange-200 bg-white p-4">
                <p className="font-bold text-slate-950">
                  Likely result
                </p>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  Headline inflation can rise substantially, even if prices in
                  other parts of the basket increase only moderately.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-blue-200 bg-blue-50 p-5 sm:p-7">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-white p-3">
                <CircleDollarSign className="h-6 w-6 text-blue-700" />
              </div>
              <div>
                <p className="font-bold text-blue-900">
                  Scenario B · Other prices rise moderately
                </p>
                <p className="text-sm text-blue-800">
                  Core inflation captures this pressure
                </p>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              <div className="flex items-center justify-between rounded-xl bg-white p-4">
                <span className="font-semibold">Clothing and services</span>
                <span className="font-bold text-blue-800">Rise moderately</span>
              </div>
              <div className="flex items-center justify-between rounded-xl bg-white p-4">
                <span className="font-semibold">Food and fuel</span>
                <span className="font-bold text-slate-500">Excluded</span>
              </div>
              <div className="rounded-xl border border-blue-200 bg-white p-4">
                <p className="font-bold text-slate-950">
                  Likely result
                </p>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  Core inflation may remain lower than headline inflation,
                  helping economists distinguish food and fuel shocks from
                  broader price increases.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-2xl bg-slate-900 p-6 text-white sm:p-8">
          <p className="text-sm font-bold uppercase tracking-widest text-blue-300">
            Remember
          </p>
          <p className="mt-3 text-xl font-bold leading-8 sm:text-2xl">
            A temporary rise in vegetable prices can push headline inflation
            higher. If higher costs spread into wages, transport, and services,
            inflationary pressure may become more persistent.
          </p>
        </div>
      </section>

      {/* WHY RBI WATCHES BOTH */}
      <section className="border-y border-blue-100 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
          <SectionHeading
            eyebrow="04 · Monetary policy"
            title="Why Does the RBI Monitor Inflation?"
            description="Inflation indicators help policymakers understand price pressures and make decisions about interest rates and monetary policy."
          />

          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                number: "01",
                title: "Check overall price pressure",
                text: "Headline CPI captures price changes across the consumer basket, including essentials such as food and fuel.",
              },
              {
                number: "02",
                title: "Assess persistent inflation",
                text: "Core inflation helps policymakers assess whether price increases extend beyond volatile food and fuel components.",
              },
              {
                number: "03",
                title: "Make policy decisions",
                text: "The RBI considers headline inflation, core inflation, expectations, growth, and other economic conditions when setting monetary policy.",
              },
            ].map((item) => (
              <div
                key={item.number}
                className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm"
              >
                <p className="text-sm font-bold text-blue-700">
                  {item.number}
                </p>
                <h3 className="mt-3 text-lg font-bold text-slate-950">
                  {item.title}
                </h3>
                <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>

          <p className="mt-6 text-sm leading-6 text-slate-600">
            Core inflation does not replace headline inflation as a measure of
            the overall cost of living. Food and energy shocks still matter
            enormously to households, especially those with tight budgets.
          </p>
        </div>
      </section>
<AdSlot />
      {/* MISCONCEPTIONS */}
      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <SectionHeading
          eyebrow="05 · Common misconceptions"
          title="Three Things You Should Not Confuse"
          description="These distinctions help prevent common mistakes when reading economic news."
        />

        <div className="space-y-4">
          {[
            {
              title: "Lower inflation does not mean prices are falling.",
              text: "If inflation drops from 8% to 4%, prices are generally still rising, just more slowly. Prices fall when the relevant price index declines.",
            },
            {
              title: "Core inflation is not what families pay at the checkout.",
              text: "Households still pay for food and fuel. Core inflation excludes those categories for analytical purposes, not because they are unimportant.",
            },
            {
              title: "Core inflation is not always lower.",
              text: "If food and fuel inflation is low while housing-related costs, clothing, or services rise faster, core inflation can exceed headline inflation.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-200 p-5 sm:p-6"
            >
              <h3 className="font-bold text-slate-950">{item.title}</h3>
              <p className="mt-2 leading-7 text-slate-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>


      {/* SOURCE NOTE */}
      <section className="mx-auto max-w-6xl px-5 py-8 sm:px-8">
        <h2 className="text-lg font-bold text-slate-950">
          Sources and further reading
        </h2>
        <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
          <li>
            <a
              href="https://www.rbi.org.in/"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-blue-700 underline underline-offset-4"
            >
              Reserve Bank of India (RBI)
            </a>{" "}
            — monetary policy and inflation analysis.
          </li>
          <li>
            <a
              href="https://ies.gov.in/arthapedia/concept/core-inflation"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-blue-700 underline underline-offset-4"
            >
              Indian Economic Service — Core Inflation
            </a>{" "}
            — definition and economic significance.
          </li>
          <li>
            <a
              href="https://mospi.gov.in/"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-blue-700 underline underline-offset-4"
            >
              Ministry of Statistics and Programme Implementation
            </a>{" "}
            — consumer price index information.
          </li>
        </ul>

        <p className="mt-6 border-t border-slate-200 pt-5 text-xs leading-6 text-slate-500">
          PriceTag HUB · Knowledge, organized. This article is for general
          educational purposes and does not represent an official inflation
          forecast or investment recommendation.
        </p>
      </section>
    </main>
  );
}
