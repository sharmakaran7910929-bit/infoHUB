
import Link from "next/link";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  CheckCircle2,
  CircleHelp,
  Factory,
  Fuel,
  Home,
  IndianRupee,
  Lightbulb,
  Package,
  Scale,
  ShoppingBasket,
  Store,
  Wheat,
  XCircle,
} from "lucide-react";
import AdSlot from "../../../../components/AdSlot";

export const metadata = {
  title:
    "CPI vs WPI: Difference Between Consumer Price Index and Wholesale Price Index",
  description:
    "Understand CPI vs WPI in India with a simple comparison table, real-life examples, calculation methods, uses, and differences between consumer and wholesale inflation.",
  keywords: [
    "CPI vs WPI",
    "difference between CPI and WPI",
    "consumer price index vs wholesale price index",
    "CPI and WPI difference in India",
    "consumer inflation vs wholesale inflation",
    "CPI vs WPI example",
  ],
  alternates: {
    canonical: "/economics/inflation/cpi-vs-wpi",
  },
  openGraph: {
    title: "CPI vs WPI: What Is the Difference?",
    description:
      "Compare CPI and WPI in India through everyday examples, a simple table, and practical explanations.",
    url: "/economics/inflation/cpi-vs-wpi",
    type: "article",
  },
};

const comparisonRows = [
  {
    feature: "Full Form",
    cpi: "Consumer Price Index",
    wpi: "Wholesale Price Index",
  },
  {
    feature: "Price Level",
    cpi: "Prices paid by consumers",
    wpi: "Prices at the wholesale level",
  },
  {
    feature: "Main Perspective",
    cpi: "Household cost of living",
    wpi: "Wholesale prices of goods",
  },
  {
    feature: "Basket Includes",
    cpi: "Goods and services",
    wpi: "Goods covered by the WPI basket",
  },
  {
    feature: "Example Items",
    cpi: "Food, clothing, housing, transport, services",
    wpi: "Food articles, fuel, manufactured products",
  },
  {
    feature: "Common Uses",
    cpi: "Consumer inflation and monetary policy",
    wpi: "Wholesale price trends and business analysis",
  },
  {
    feature: "Services",
    cpi: "Includes services",
    wpi: "Does not directly cover services like CPI",
  },
  {
    feature: "India's Monetary Policy",
    cpi: "Headline CPI inflation is central to the RBI's inflation-targeting framework",
    wpi: "Useful for analysis, but not the target measure",
  },
];

const contents = [
  ["What Is CPI?", "what-is-cpi"],
  ["What Is WPI?", "what-is-wpi"],
  ["CPI vs WPI Comparison", "cpi-vs-wpi-comparison"],
  ["Real-Life Example", "real-life-example"],
  ["How CPI and WPI Are Calculated", "calculation"],
  ["Why Their Inflation Rates Differ", "why-rates-differ"],
  ["Which Index Is More Important?", "which-is-more-important"],
  ["FAQs", "faqs"],
];

function SectionHeading({ number, eyebrow, title, description }) {
  return (
    <div className="mb-8 max-w-3xl">
      <div className="mb-3 flex items-center gap-3">
        {number && (
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-sm font-bold text-white">
            {number}
          </span>
        )}
        {eyebrow && (
          <p className="text-sm font-bold uppercase tracking-wide text-blue-700">
            {eyebrow}
          </p>
        )}
      </div>
      <h2 className="text-2xl font-bold tracking-tight text-gray-950 sm:text-3xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-base leading-7 text-gray-700">
          {description}
        </p>
      )}
    </div>
  );
}

function InfoCard({ icon: Icon, title, children, color = "blue" }) {
  const colors = {
    blue: "bg-blue-50 text-blue-700 ring-blue-100",
    violet: "bg-violet-50 text-violet-700 ring-violet-100",
    amber: "bg-amber-50 text-amber-700 ring-amber-100",
    emerald: "bg-emerald-50 text-emerald-700 ring-emerald-100",
    rose: "bg-rose-50 text-rose-700 ring-rose-100",
  };

  return (
    <div className="h-full rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
      <div
        className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl ring-1 ${colors[color]}`}
      >
        <Icon size={22} />
      </div>
      <h3 className="text-lg font-bold text-gray-950">{title}</h3>
      <div className="mt-2 text-sm leading-6 text-gray-700">{children}</div>
    </div>
  );
}

function ExampleStep({ number, title, children }) {
  return (
    <div className="relative flex gap-4">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
        {number}
      </div>
      <div className="pb-6">
        <h3 className="font-bold text-gray-950">{title}</h3>
        <p className="mt-1 text-sm leading-6 text-gray-700">{children}</p>
      </div>
    </div>
  );
}

function FAQ({ question, children }) {
  return (
    <details className="group rounded-xl border border-gray-200 bg-white p-5">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-gray-950">
        {question}
        <span className="shrink-0 text-blue-700 transition-transform group-open:rotate-180">
          <ArrowDownRight size={19} />
        </span>
      </summary>
      <div className="mt-3 text-sm leading-7 text-gray-700">{children}</div>
    </details>
  );
}

export default function CPIvsWPIPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* HERO */}
      <section className="overflow-hidden border-b border-blue-100 bg-gradient-to-br from-blue-50 via-white to-violet-50">
        <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-3 py-1.5 text-sm font-bold text-blue-800">
                <Scale size={16} />
                Economics · Inflation · India
              </div>

              <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-950 sm:text-4xl lg:text-5xl">
                CPI vs WPI: What Is the Difference?
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-8 text-gray-700 sm:text-lg">
                Why can grocery prices keep rising even when wholesale prices
                fall? Learn how the Consumer Price Index (CPI) and Wholesale
                Price Index (WPI) measure different stages of price changes in
                the Indian economy.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#cpi-vs-wpi-comparison"
                  className="inline-flex items-center gap-2 rounded-xl bg-blue-700 px-5 py-3 font-bold text-white transition hover:bg-blue-800"
                >
                  Compare CPI and WPI
                  <ArrowRight size={18} />
                </a>
                <a
                  href="#real-life-example"
                  className="inline-flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-5 py-3 font-bold text-gray-800 transition hover:bg-gray-50"
                >
                  See a Real Example
                </a>
              </div>
            </div>

            {/* Compact CPI vs WPI Visual */}
            <div className="rounded-3xl border border-gray-200 bg-white p-5 shadow-xl sm:p-6">
              <div className="mb-5 flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-bold text-gray-500">
                    TWO PRICE PERSPECTIVES
                  </p>
                  <h2 className="mt-1 text-xl font-bold text-gray-950">
                    From Wholesale to Consumer
                  </h2>
                </div>
                <div className="rounded-xl bg-indigo-50 p-3 text-indigo-700">
                  <BarChart3 size={25} />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-amber-800">
                    <Factory size={22} />
                  </div>
                  <p className="text-lg font-bold text-amber-950">WPI</p>
                  <p className="mt-1 text-sm font-bold text-amber-900">
                    Wholesale Level
                  </p>
                  <p className="mt-2 text-xs leading-5 text-amber-950">
                    Goods prices before the final consumer stage
                  </p>
                </div>

                <div className="rounded-2xl border border-blue-200 bg-blue-50 p-4">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-800">
                    <ShoppingBasket size={22} />
                  </div>
                  <p className="text-lg font-bold text-blue-950">CPI</p>
                  <p className="mt-1 text-sm font-bold text-blue-900">
                    Consumer Level
                  </p>
                  <p className="mt-2 text-xs leading-5 text-blue-950">
                    Prices households pay for goods and services
                  </p>
                </div>
              </div>

              <div className="my-4 flex items-center justify-center gap-2 text-sm font-bold text-gray-600">
                <span className="h-px flex-1 bg-gray-200" />
                Different baskets, different weights
                <span className="h-px flex-1 bg-gray-200" />
              </div>

              <div className="rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 p-4 text-white">
                <div className="flex items-center gap-3">
                  <Scale size={24} />
                  <div>
                    <p className="font-bold">Both Measure Price Changes</p>
                    <p className="mt-1 text-sm leading-5 text-blue-50">
                      But they answer different economic questions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-blue-100 bg-white p-4">
              <ShoppingBasket className="mb-3 text-blue-700" size={23} />
              <p className="font-bold text-gray-950">CPI</p>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                Helps explain changes in household living costs.
              </p>
            </div>
            <div className="rounded-2xl border border-amber-100 bg-white p-4">
              <Factory className="mb-3 text-amber-700" size={23} />
              <p className="font-bold text-gray-950">WPI</p>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                Helps track wholesale prices of goods.
              </p>
            </div>
            <div className="rounded-2xl border border-violet-100 bg-white p-4">
              <BarChart3 className="mb-3 text-violet-700" size={23} />
              <p className="font-bold text-gray-950">Inflation</p>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                Each index can show a different inflation rate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-blue-700">
              Start Here
            </p>
            <h2 className="mt-2 text-2xl font-bold text-gray-950">
              Why Do We Need Two Price Indices?
            </h2>
          </div>
          <div className="space-y-4 text-base leading-8 text-gray-700">
            <p>
              Imagine a wheat trader sells grain to a flour mill. The mill
              processes it, and flour eventually reaches a shop where a family
              buys it. Prices at these different stages may not change by the
              same amount.
            </p>
            <p>
              <strong className="text-gray-950">WPI</strong> helps track
              wholesale price movements for goods.{" "}
              <strong className="text-gray-950">CPI</strong> tracks price
              changes in the basket of goods and services consumed by
              households.
            </p>
            <p>
              This is why economists, policymakers, businesses, and consumers
              use these indices for different purposes.
            </p>
          </div>
        </div>
      </section>

      {/* TABLE OF CONTENTS */}
      <section className="border-y border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-6xl px-5 py-8 sm:px-8">
          <h2 className="mb-4 text-lg font-bold text-gray-950">
            On This Page
          </h2>
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
            {contents.map(([label, id]) => (
              <a
                key={id}
                href={`#${id}`}
                className="rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm font-bold text-gray-700 transition hover:border-blue-300 hover:text-blue-800"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT IS CPI */}
      <section
        id="what-is-cpi"
        className="scroll-mt-8 mx-auto max-w-6xl px-5 py-14 sm:px-8"
      >
        <SectionHeading
          number="01"
          eyebrow="Consumer Price Index"
          title="What Is CPI?"
          description="CPI measures changes over time in the prices of a representative basket of goods and services consumed by households."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-blue-200 bg-gradient-to-br from-blue-50 to-white p-6 sm:p-8">
            <div className="flex items-center gap-4">
              <div className="rounded-2xl bg-blue-100 p-4 text-blue-800">
                <ShoppingBasket size={30} />
              </div>
              <div>
                <p className="text-sm font-bold text-blue-700">
                  Consumer Perspective
                </p>
                <h3 className="text-xl font-bold text-gray-950">
                  What Does a Family Pay?
                </h3>
              </div>
            </div>

            <p className="mt-5 leading-7 text-gray-700">
              CPI reflects price changes in household consumption categories.
              These can include food, clothing, housing-related expenses,
              transport, health, education, and other services, according to
              the index's basket and methodology.
            </p>

            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="rounded-xl bg-white p-4 ring-1 ring-blue-100">
                <Wheat className="mb-2 text-amber-700" size={22} />
                <p className="font-bold text-gray-950">Food</p>
                <p className="mt-1 text-sm text-gray-600">
                  Milk, rice, vegetables
                </p>
              </div>
              <div className="rounded-xl bg-white p-4 ring-1 ring-blue-100">
                <Home className="mb-2 text-blue-700" size={22} />
                <p className="font-bold text-gray-950">Living Costs</p>
                <p className="mt-1 text-sm text-gray-600">
                  Housing and household needs
                </p>
              </div>
              <div className="rounded-xl bg-white p-4 ring-1 ring-blue-100">
                <Fuel className="mb-2 text-orange-700" size={22} />
                <p className="font-bold text-gray-950">Transport</p>
                <p className="mt-1 text-sm text-gray-600">
                  Transport-related spending
                </p>
              </div>
              <div className="rounded-xl bg-white p-4 ring-1 ring-blue-100">
                <IndianRupee className="mb-2 text-emerald-700" size={22} />
                <p className="font-bold text-gray-950">Services</p>
                <p className="mt-1 text-sm text-gray-600">
                  Health and education
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center rounded-3xl border border-gray-200 bg-white p-6 sm:p-8">
            <h3 className="text-xl font-bold text-gray-950">
              Simple CPI Example
            </h3>
            <p className="mt-3 leading-7 text-gray-700">
              Suppose a representative household basket costs ₹5,000 in a base
              period and the same basket costs ₹5,300 in a later period.
            </p>

            <div className="my-6 rounded-2xl bg-blue-50 p-5">
              <p className="text-sm font-bold text-blue-800">
                Illustrative Price Change
              </p>
              <div className="mt-3 flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm text-gray-600">Earlier Cost</p>
                  <p className="text-2xl font-bold text-gray-950">₹5,000</p>
                </div>
                <ArrowRight className="text-blue-700" size={25} />
                <div>
                  <p className="text-sm text-gray-600">Later Cost</p>
                  <p className="text-2xl font-bold text-blue-800">₹5,300</p>
                </div>
              </div>
              <div className="mt-4 border-t border-blue-200 pt-4">
                <p className="text-sm text-gray-700">
                  The basket's cost increased by ₹300, or 6%.
                </p>
              </div>
            </div>

            <p className="text-sm leading-6 text-gray-600">
              This is a simplified basket-cost example, not an official CPI
              calculation. The published CPI uses a defined basket, weights,
              price observations, and an official methodology.
            </p>

            <Link
              href="/economics/inflation/consumer-price-index"
              className="mt-5 inline-flex items-center gap-2 font-bold text-blue-700 hover:text-blue-900"
            >
              Read the Complete CPI Guide
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* WHAT IS WPI */}
      <section
        id="what-is-wpi"
        className="scroll-mt-8 border-y border-amber-100 bg-amber-50/50"
      >
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
          <SectionHeading
            number="02"
            eyebrow="Wholesale Price Index"
            title="What Is WPI?"
            description="WPI measures changes in the prices of goods at the wholesale level. India's WPI covers selected primary articles, fuel and power, and manufactured products."
          />

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-amber-200 bg-white p-6 sm:p-8">
              <div className="flex items-center gap-4">
                <div className="rounded-2xl bg-amber-100 p-4 text-amber-800">
                  <Factory size={30} />
                </div>
                <div>
                  <p className="text-sm font-bold text-amber-800">
                    Wholesale Perspective
                  </p>
                  <h3 className="text-xl font-bold text-gray-950">
                    What Do Goods Cost at Wholesale?
                  </h3>
                </div>
              </div>

              <p className="mt-5 leading-7 text-gray-700">
                WPI helps show how prices of goods change before they reach
                their final consumer stage. It is useful for examining price
                movements in commodities, industrial goods, fuel, and other
                covered items.
              </p>

              <div className="mt-5 space-y-3">
                <div className="flex items-start gap-3 rounded-xl bg-amber-50 p-4">
                  <Wheat className="mt-1 shrink-0 text-amber-800" size={22} />
                  <div>
                    <p className="font-bold text-gray-950">Primary Articles</p>
                    <p className="mt-1 text-sm leading-6 text-gray-700">
                      Examples include food articles and other covered
                      agricultural or mineral commodities.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-xl bg-amber-50 p-4">
                  <Fuel className="mt-1 shrink-0 text-orange-800" size={22} />
                  <div>
                    <p className="font-bold text-gray-950">Fuel and Power</p>
                    <p className="mt-1 text-sm leading-6 text-gray-700">
                      Covered fuel and power items can influence wholesale
                      price movements.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-xl bg-amber-50 p-4">
                  <Package className="mt-1 shrink-0 text-blue-800" size={22} />
                  <div>
                    <p className="font-bold text-gray-950">
                      Manufactured Products
                    </p>
                    <p className="mt-1 text-sm leading-6 text-gray-700">
                      Examples include selected manufactured goods and
                      industrial products.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center rounded-3xl border border-amber-200 bg-gradient-to-br from-amber-100 via-white to-orange-50 p-6 sm:p-8">
              <h3 className="text-xl font-bold text-gray-950">
                Simple WPI Example
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                Imagine a mill buys wheat from a wholesaler. The wholesale
                price of wheat falls from ₹2,500 to ₹2,300 per quintal.
              </p>

              <div className="my-6 rounded-2xl border border-amber-200 bg-white p-5">
                <p className="text-sm font-bold text-amber-800">
                  Illustrative Wholesale Price
                </p>
                <div className="mt-4 flex items-center justify-between gap-3">
                  <div>
                    <p className="text-sm text-gray-600">Earlier</p>
                    <p className="text-2xl font-bold text-gray-950">₹2,500</p>
                  </div>
                  <ArrowDownRight className="text-emerald-700" size={26} />
                  <div>
                    <p className="text-sm text-gray-600">Later</p>
                    <p className="text-2xl font-bold text-emerald-800">
                      ₹2,300
                    </p>
                  </div>
                </div>
                <div className="mt-4 rounded-lg bg-emerald-50 p-3 text-sm font-bold text-emerald-900">
                  The example wholesale price falls by 8%.
                </div>
              </div>

              <p className="text-sm leading-6 text-gray-600">
                This example illustrates a change in one price. It does not
                mean the overall WPI must fall by 8%, because the official
                index combines many items using their assigned weights.
              </p>

              <Link
                href="/economics/inflation/wholesale-price-index-india"
                className="mt-5 inline-flex items-center gap-2 font-bold text-amber-800 hover:text-amber-950"
              >
                Read the Complete WPI Guide
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>
<AdSlot />
      {/* COMPARISON TABLE */}
      <section
        id="cpi-vs-wpi-comparison"
        className="scroll-mt-8 mx-auto max-w-6xl px-5 py-14 sm:px-8"
      >
        <SectionHeading
          number="03"
          eyebrow="Quick Comparison"
          title="CPI vs WPI: Key Differences"
          description="Use this table to understand the main differences between consumer price changes and wholesale price changes in India."
        />

        <div className="overflow-hidden rounded-2xl border border-gray-200">
          <div className="grid grid-cols-[0.8fr_1fr_1fr] bg-gray-950 text-white">
            <div className="p-3 text-sm font-bold sm:p-4">Feature</div>
            <div className="border-l border-white/10 bg-blue-800 p-3 text-sm font-bold sm:p-4">
              CPI
            </div>
            <div className="border-l border-white/10 bg-amber-700 p-3 text-sm font-bold sm:p-4">
              WPI
            </div>
          </div>

          {comparisonRows.map((row, index) => (
            <div
              key={row.feature}
              className={`grid grid-cols-[0.8fr_1fr_1fr] ${
                index % 2 === 0 ? "bg-white" : "bg-gray-50"
              }`}
            >
              <div className="p-3 text-xs font-bold text-gray-900 sm:p-4 sm:text-sm">
                {row.feature}
              </div>
              <div className="border-l border-gray-200 p-3 text-xs leading-5 text-gray-700 sm:p-4 sm:text-sm sm:leading-6">
                {row.cpi}
              </div>
              <div className="border-l border-gray-200 p-3 text-xs leading-5 text-gray-700 sm:p-4 sm:text-sm sm:leading-6">
                {row.wpi}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-4 text-sm leading-6 text-gray-600">
          Note: This is a high-level comparison. Exact item coverage, weights,
          and calculation procedures depend on each index's official
          methodology and series.
        </p>
      </section>

      {/* REAL-LIFE EXAMPLE */}
      <section
        id="real-life-example"
        className="scroll-mt-8 border-y border-violet-100 bg-gradient-to-br from-violet-50 via-white to-blue-50"
      >
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
          <SectionHeading
            number="04"
            eyebrow="Understand With an Example"
            title="Why Can WPI Fall While CPI Remains High?"
            description="A change in wholesale prices does not automatically produce the same change in the prices households pay."
          />

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="rounded-xl bg-amber-100 p-3 text-amber-800">
                  <Wheat size={25} />
                </div>
                <h3 className="text-xl font-bold text-gray-950">
                  Follow the Wheat Supply Chain
                </h3>
              </div>

              <ExampleStep number="1" title="Wholesale Wheat Price Falls">
                A trader sells wheat to a mill at a lower price than before.
              </ExampleStep>
              <ExampleStep number="2" title="Processing and Distribution Continue">
                Milling, packaging, transport, storage, and other expenses may
                still affect the final price.
              </ExampleStep>
              <ExampleStep number="3" title="Retail Prices May Respond Differently">
                A shop may still face other costs, delayed stock turnover, or
                changes in demand and supply.
              </ExampleStep>
              <ExampleStep number="4" title="CPI and WPI Can Move Differently">
                Wholesale prices may decline while consumer prices decline
                more slowly, remain high, or rise for other reasons.
              </ExampleStep>
            </div>

            <div className="space-y-5">
              <div className="rounded-2xl border border-amber-200 bg-white p-5">
                <div className="flex items-center gap-3">
                  <ArrowDownRight className="text-amber-700" size={24} />
                  <h3 className="font-bold text-gray-950">
                    Possible WPI Movement
                  </h3>
                </div>
                <p className="mt-3 text-sm leading-7 text-gray-700">
                  A fall in wholesale prices for some goods can pull down
                  relevant parts of WPI. The overall effect depends on the
                  movement and weights of all covered items.
                </p>
              </div>

              <div className="rounded-2xl border border-blue-200 bg-white p-5">
                <div className="flex items-center gap-3">
                  <ArrowUpRight className="text-blue-700" size={24} />
                  <h3 className="font-bold text-gray-950">
                    Possible CPI Movement
                  </h3>
                </div>
                <p className="mt-3 text-sm leading-7 text-gray-700">
                  Retail prices can be affected by food supply, transport,
                  processing, retail costs, taxes, services, and other
                  components of the consumer basket.
                </p>
              </div>

              <div className="rounded-2xl bg-violet-100 p-5">
                <div className="flex items-start gap-3">
                  <Lightbulb className="mt-1 shrink-0 text-violet-800" size={23} />
                  <div>
                    <p className="font-bold text-violet-950">
                      The Main Lesson
                    </p>
                    <p className="mt-1 text-sm leading-6 text-violet-950">
                      Wholesale price changes can influence consumer prices,
                      but the relationship is neither immediate nor
                      one-to-one.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CALCULATION */}
      <section
        id="calculation"
        className="scroll-mt-8 mx-auto max-w-6xl px-5 py-14 sm:px-8"
      >
        <SectionHeading
          number="05"
          eyebrow="Calculation"
          title="How Are CPI and WPI Calculated?"
          description="Both indices compare prices across periods, but they use different baskets, item weights, and official procedures."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-blue-200 bg-blue-50/70 p-6 sm:p-8">
            <div className="mb-4 flex items-center gap-3">
              <ShoppingBasket className="text-blue-800" size={27} />
              <h3 className="text-xl font-bold text-gray-950">CPI</h3>
            </div>
            <p className="leading-7 text-gray-700">
              CPI uses price information for a representative basket of
              consumer goods and services. The basket's components have
              assigned weights based on the index methodology.
            </p>
            <div className="mt-5 rounded-2xl border border-blue-200 bg-white p-5">
              <p className="text-sm font-bold text-blue-800">
                Simplified Index Formula
              </p>
              <p className="mt-3 text-center text-lg font-bold text-gray-950">
                Price Index = (Current Basket Cost ÷ Base Basket Cost) × 100
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-amber-200 bg-amber-50/70 p-6 sm:p-8">
            <div className="mb-4 flex items-center gap-3">
              <Factory className="text-amber-800" size={27} />
              <h3 className="text-xl font-bold text-gray-950">WPI</h3>
            </div>
            <p className="leading-7 text-gray-700">
              WPI combines prices for covered wholesale goods using the
              official basket and weights. In practice, its calculation follows
              the methodology of the relevant WPI series.
            </p>
            <div className="mt-5 rounded-2xl border border-amber-200 bg-white p-5">
              <p className="text-sm font-bold text-amber-800">
                Simplified Weighted Index Concept
              </p>
              <p className="mt-3 text-center text-lg font-bold text-gray-950">
                Overall Index = Weighted Combination of Item Price Indices
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-gray-200 bg-gray-50 p-5 sm:p-6">
          <div className="flex items-start gap-3">
            <CircleHelp className="mt-1 shrink-0 text-blue-700" size={23} />
            <div>
              <h3 className="font-bold text-gray-950">
                What Is the Difference Between an Index and Inflation?
              </h3>
              <p className="mt-2 text-sm leading-7 text-gray-700">
                An index represents a price level relative to a reference
                period. Inflation generally refers to the percentage change in
                that index over a specified period, commonly year over year
                when reporting annual inflation.
              </p>
              <p className="mt-3 text-sm leading-7 text-gray-700">
                For example, a CPI index value of 150 is not the same as 150%
                inflation. The inflation rate depends on how that index compares
                with its value in the comparison period.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-5">
          <Link
            href="/economics/inflation/inflation-rate-formula"
            className="inline-flex items-center gap-2 font-bold text-blue-700 hover:text-blue-900"
          >
            Learn How to Calculate Inflation
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>
<AdSlot />
      {/* WHY RATES DIFFER */}
      <section
        id="why-rates-differ"
        className="scroll-mt-8 border-y border-gray-200 bg-gray-50"
      >
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
          <SectionHeading
            number="06"
            eyebrow="Understanding Inflation"
            title="Why Do CPI and WPI Inflation Rates Differ?"
            description="Different baskets and different stages of the supply chain mean the two indices can report different inflation rates."
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <InfoCard icon={Scale} title="Different Weights" color="blue">
              Items have different importance in each index. A price change
              affects each index according to its basket and assigned weight.
            </InfoCard>
            <InfoCard icon={Store} title="Retail and Distribution Costs" color="amber">
              Retail handling, storage, distribution, and other costs can
              influence consumer prices differently from wholesale prices.
            </InfoCard>
            <InfoCard icon={Home} title="Services in CPI" color="violet">
              CPI includes services, while WPI focuses on covered goods. Changes
              in service prices can therefore affect CPI differently.
            </InfoCard>
            <InfoCard icon={Fuel} title="Commodity Price Changes" color="rose">
              Fuel and other commodity prices can change sharply and affect
              wholesale and consumer baskets differently.
            </InfoCard>
            <InfoCard icon={Wheat} title="Food Supply Conditions" color="emerald">
              Weather, harvests, transport disruptions, and availability can
              affect prices at different stages of the supply chain.
            </InfoCard>
            <InfoCard icon={BarChart3} title="Timing and Price Movements" color="blue">
              Wholesale and consumer prices may respond at different times.
              The relationship also varies by product and economic conditions.
            </InfoCard>
          </div>
        </div>
      </section>

      {/* WHICH IS MORE IMPORTANT */}
      <section
        id="which-is-more-important"
        className="scroll-mt-8 mx-auto max-w-6xl px-5 py-14 sm:px-8"
      >
        <SectionHeading
          number="07"
          eyebrow="Practical Uses"
          title="Which Is More Important: CPI or WPI?"
          description="Neither index is universally more important. The right choice depends on the question you want to answer."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-blue-200 bg-white p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-blue-100 p-3 text-blue-800">
                <ShoppingBasket size={25} />
              </div>
              <h3 className="text-xl font-bold text-gray-950">
                When CPI Is More Relevant
              </h3>
            </div>
            <ul className="mt-5 space-y-3">
              {[
                "Understanding changes in consumer living costs",
                "Tracking retail inflation for households",
                "Examining inflation in goods and services consumed by households",
                "Assessing the inflation measure central to India's monetary-policy framework",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-6 text-gray-700">
                  <CheckCircle2 className="mt-0.5 shrink-0 text-blue-700" size={19} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-amber-200 bg-white p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-amber-100 p-3 text-amber-800">
                <Factory size={25} />
              </div>
              <h3 className="text-xl font-bold text-gray-950">
                When WPI Is More Relevant
              </h3>
            </div>
            <ul className="mt-5 space-y-3">
              {[
                "Monitoring wholesale prices of goods",
                "Studying commodity and manufactured-product price movements",
                "Understanding potential changes in business input costs",
                "Comparing wholesale inflation trends across periods",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-6 text-gray-700">
                  <CheckCircle2 className="mt-0.5 shrink-0 text-amber-700" size={19} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-6 rounded-2xl bg-gradient-to-r from-blue-700 to-indigo-700 p-6 text-white sm:p-8">
          <h3 className="text-xl font-bold">
            Remember This Simple Rule
          </h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl bg-white/10 p-4">
              <p className="text-sm font-bold text-blue-100">
                Want to understand household inflation?
              </p>
              <p className="mt-1 text-lg font-bold">Look at CPI.</p>
            </div>
            <div className="rounded-xl bg-white/10 p-4">
              <p className="text-sm font-bold text-blue-100">
                Want to understand wholesale goods prices?
              </p>
              <p className="mt-1 text-lg font-bold">Look at WPI.</p>
            </div>
          </div>
        </div>
      </section>

      {/* LIMITATIONS */}
      <section className="border-y border-rose-100 bg-rose-50/50">
        <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
          <div className="grid gap-6 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-rose-100 text-rose-800">
                <XCircle size={24} />
              </div>
              <h2 className="text-2xl font-bold text-gray-950">
                Why Neither Index Tells the Whole Story
              </h2>
            </div>
            <div className="space-y-4 text-sm leading-7 text-gray-700">
              <p>
                A published index represents a defined basket and methodology.
                It cannot perfectly describe the spending pattern of every
                family, business, or region.
              </p>
              <p>
                A household that spends a large share of its income on food may
                experience inflation differently from a household that spends
                more on rent, education, healthcare, or transport.
              </p>
              <p>
                Similarly, a manufacturer using energy-intensive processes may
                face cost pressures that differ from those of a business with a
                different cost structure. Use CPI and WPI as economic indicators,
                not as exact measures of every person's or business's costs.
              </p>
            </div>
          </div>
        </div>
      </section>
<AdSlot />
      {/* FAQ */}
      <section
        id="faqs"
        className="scroll-mt-8 mx-auto max-w-4xl px-5 py-14 sm:px-8"
      >
        <SectionHeading
          number="08"
          eyebrow="Frequently Asked Questions"
          title="CPI vs WPI FAQs"
          description="Quick answers to common questions about India's consumer and wholesale price indices."
        />

        <div className="space-y-3">
          <FAQ question="What is the main difference between CPI and WPI?">
            CPI measures price changes in a representative basket of consumer
            goods and services. WPI measures price changes at the wholesale
            level for goods covered by its basket.
          </FAQ>

          <FAQ question="Is CPI always higher than WPI?">
            No. CPI inflation can be higher or lower than WPI inflation,
            depending on the period, price movements, basket composition, and
            weights of the two indices.
          </FAQ>

          <FAQ question="Can WPI fall while CPI rises?">
            Yes. Wholesale prices for some goods can fall while consumer prices
            rise because of differences in retail costs, services, food supply,
            taxes, demand, and the composition of the two baskets.
          </FAQ>

          <FAQ question="Which index measures retail inflation in India?">
            The Consumer Price Index (CPI) is the principal measure used to
            track consumer-level inflation in India. CPI inflation is central
            to the Reserve Bank of India's inflation-targeting framework.
          </FAQ>

          <FAQ question="Does WPI include services?">
            India's WPI focuses on goods in its defined basket and does not
            directly cover services in the same way that CPI does.
          </FAQ>

          <FAQ question="Why is WPI useful if CPI is important for consumers?">
            WPI provides information about wholesale prices for goods. This
            helps analysts and businesses understand commodity and manufactured
            product price trends that may influence costs elsewhere in the
            economy.
          </FAQ>

          <FAQ question="Are CPI and WPI index values the same as inflation rates?">
            No. An index value represents a price level relative to a reference
            period. An inflation rate measures the percentage change in that
            index over a specified period.
          </FAQ>

          <FAQ question="Where can I read more about CPI and WPI in India?">
            Read the dedicated{" "}
            <Link
              href="/economics/inflation/consumer-price-index"
              className="font-bold text-blue-700 underline"
            >
              CPI guide
            </Link>{" "}
            and{" "}
            <Link
              href="/economics/inflation/wholesale-price-index-india"
              className="font-bold text-blue-700 underline"
            >
              WPI guide
            </Link>{" "}
            for more detail about each index.
          </FAQ>
        </div>
      </section>

      
    </main>
  );
}
