
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  BarChart3,
  CheckCircle2,
  CircleDollarSign,
  Factory,
  Lightbulb,
  Scale,
  TrendingUp,
  Wallet,
  XCircle,
} from "lucide-react";
import AdSlot from "../../../../components/AdSlot";

export const metadata = {
  title: "Real GDP vs Nominal GDP: Formula, Examples & Differences",
  description:
    "Learn real GDP vs nominal GDP with simple formulas, a worked rupee example, GDP deflator, colorful diagrams, importance, limitations, and FAQs.",
  alternates: {
    canonical:
      "https://www.pricetag.co.in/economics/gdp-and-economic-growth/real-vs-nominal-gdp",
  },
};

export default function RealVsNominalGDPPage() {
  return (
    <main className="min-h-screen bg-white text-slate-800">
      {/* Hero */}
      <section className="overflow-hidden bg-gradient-to-br from-blue-950 via-indigo-900 to-violet-900 text-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-bold text-blue-100">
            <BarChart3 className="h-4 w-4" />
            Economics Fundamentals
          </div>

          <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-tight sm:text-5xl">
            Real GDP vs Nominal GDP: What Is The Difference?
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-blue-100">
            GDP can increase because an economy produces more goods and
            services, because prices rise, or because both happen. Learn
            how real GDP and nominal GDP separate these effects with simple
            formulas, calculations, and practical examples.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#calculation"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-bold text-blue-950 transition hover:bg-blue-50"
            >
              See The Calculation <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#comparison"
              className="rounded-xl border border-white/30 bg-white/10 px-5 py-3 font-bold text-white transition hover:bg-white/15"
            >
              Compare Both Measures
            </a>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            <div className="rounded-3xl border border-blue-300/30 bg-blue-400/15 p-6">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-blue-300/20 p-3">
                  <CircleDollarSign className="h-7 w-7 text-blue-100" />
                </div>
                <div>
                  <p className="text-sm font-bold text-blue-200">Nominal GDP</p>
                  <h2 className="text-xl font-bold">Current Prices</h2>
                </div>
              </div>
              <p className="mt-4 leading-7 text-blue-100">
                Measures the value of final goods and services using the
                prices applicable during the period being measured.
              </p>
            </div>

            <div className="rounded-3xl border border-emerald-300/30 bg-emerald-400/15 p-6">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-emerald-300/20 p-3">
                  <TrendingUp className="h-7 w-7 text-emerald-100" />
                </div>
                <div>
                  <p className="text-sm font-bold text-emerald-200">Real GDP</p>
                  <h2 className="text-xl font-bold">Constant Prices</h2>
                </div>
              </div>
              <p className="mt-4 leading-7 text-emerald-100">
                Measures output using prices from a reference year, helping
                economists assess changes in production volume over time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Definitions */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <h2 className="text-2xl font-bold text-slate-950 sm:text-3xl">
          What Is Nominal GDP?
        </h2>

        <p className="mt-4 max-w-3xl leading-8 text-slate-600">
          Nominal GDP is the total market value of final goods and services
          produced within a country's economic territory during a specific
          period, calculated using the prices of that same period. It is
          also called GDP at current prices.
        </p>

        <div className="mt-6 grid gap-5 md:grid-cols-2">
          <article className="rounded-3xl border border-blue-200 bg-gradient-to-br from-blue-50 to-white p-6 sm:p-8">
            <div className="inline-flex rounded-2xl bg-blue-100 p-3 text-blue-800">
              <Wallet className="h-7 w-7" />
            </div>
            <h3 className="mt-4 text-xl font-bold text-slate-950">
              Nominal GDP
            </h3>
            <p className="mt-3 leading-7 text-slate-600">
              Suppose a country produces 100 chairs at ₹1,000 each. The
              total value of this production is ₹1,00,000. If the same
              chairs cost ₹1,200 each next year, the value could increase
              even if the number of chairs produced remains unchanged.
            </p>
            <div className="mt-5 rounded-2xl bg-white p-4">
              <p className="text-sm font-bold text-blue-800">
                Main Question
              </p>
              <p className="mt-2 font-bold text-slate-950">
                What is the production worth at current prices?
              </p>
            </div>
          </article>

          <article className="rounded-3xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-white p-6 sm:p-8">
            <div className="inline-flex rounded-2xl bg-emerald-100 p-3 text-emerald-800">
              <Factory className="h-7 w-7" />
            </div>
            <h3 className="mt-4 text-xl font-bold text-slate-950">
              Real GDP
            </h3>
            <p className="mt-3 leading-7 text-slate-600">
              Real GDP values production using prices from a chosen
              reference year. This reduces the effect of price changes
              and makes it easier to compare the volume of output across
              different years.
            </p>
            <div className="mt-5 rounded-2xl bg-white p-4">
              <p className="text-sm font-bold text-emerald-800">
                Main Question
              </p>
              <p className="mt-2 font-bold text-slate-950">
                How has production volume changed?
              </p>
            </div>
          </article>
        </div>

        <div className="mt-7 rounded-2xl border border-amber-200 bg-amber-50 p-5">
          <div className="flex items-start gap-3">
            <Lightbulb className="mt-1 h-5 w-5 shrink-0 text-amber-700" />
            <div>
              <p className="font-bold text-amber-950">
                Remember This Difference
              </p>
              <p className="mt-2 leading-7 text-amber-950">
                Nominal GDP can rise even when production does not increase.
                Real GDP is designed to remove the effect of price changes
                so that changes in output can be assessed more clearly.
              </p>
            </div>
          </div>
        </div>
      </section>
<AdSlot />
      {/* Diagram */}
      <section className="border-y border-indigo-100 bg-gradient-to-br from-indigo-50 via-white to-blue-50 py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-950 sm:text-3xl">
            Real GDP vs Nominal GDP: Visual Explanation
          </h2>
          <p className="mt-4 max-w-3xl leading-8 text-slate-600">
            Both measures start with the value of final goods and services
            produced. The key difference is which prices are used to value
            that production.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-[1fr_auto_1fr] md:items-center">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-sm">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-100 text-violet-800">
                <Factory className="h-7 w-7" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-slate-950">
                Goods And Services Produced
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Count the final goods and services produced in the period.
              </p>
            </div>

            <div className="flex justify-center text-indigo-600">
              <ArrowRight className="hidden h-8 w-8 md:block" />
              <ArrowDown className="h-8 w-8 md:hidden" />
            </div>

            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-1">
              <div className="rounded-2xl border border-blue-200 bg-blue-50 p-5">
                <p className="font-bold text-blue-950">Current-Year Prices</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Value output using prices for the period being measured.
                </p>
                <div className="mt-3 rounded-xl bg-white p-3 font-bold text-blue-900">
                  Nominal GDP
                </div>
              </div>
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
                <p className="font-bold text-emerald-950">
                  Reference-Year Prices
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Value output using prices from the selected reference year.
                </p>
                <div className="mt-3 rounded-xl bg-white p-3 font-bold text-emerald-900">
                  Real GDP
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formulas */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <h2 className="text-2xl font-bold text-slate-950 sm:text-3xl">
          Real GDP And Nominal GDP Formulas
        </h2>

        <div className="mt-7 grid gap-5 md:grid-cols-2">
          <div className="rounded-3xl border border-blue-200 bg-blue-50 p-6">
            <h3 className="text-xl font-bold text-blue-950">
              Nominal GDP Formula
            </h3>
            <div className="mt-4 rounded-2xl bg-white p-5">
              <p className="text-lg font-bold text-slate-950">
                Nominal GDP = Σ (Current Quantity × Current Price)
              </p>
            </div>
            <p className="mt-4 leading-7 text-slate-600">
              For every final good or service, multiply the quantity
              produced by its current-period price and add the values
              together.
            </p>
          </div>

          <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6">
            <h3 className="text-xl font-bold text-emerald-950">
              Real GDP Formula
            </h3>
            <div className="mt-4 rounded-2xl bg-white p-5">
              <p className="text-lg font-bold text-slate-950">
                Real GDP = Σ (Current Quantity × Reference-Year Price)
              </p>
            </div>
            <p className="mt-4 leading-7 text-slate-600">
              Use the quantities produced in the current period but value
              them at prices from the selected reference year.
            </p>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-violet-200 bg-violet-50 p-5">
          <p className="font-bold text-violet-950">What Does Σ Mean?</p>
          <p className="mt-2 leading-7 text-violet-950">
            The symbol Σ means to add the values for all included goods and
            services. Real-world national accounts use detailed statistical
            methods, product classifications, and price indices; these
            simple formulas illustrate the basic idea.
          </p>
        </div>
      </section>

      {/* Worked calculation */}
      <section
        id="calculation"
        className="scroll-mt-8 border-y border-slate-200 bg-slate-50 py-14 sm:py-16"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-950 sm:text-3xl">
            Real GDP vs Nominal GDP: Step-By-Step Calculation
          </h2>
          <p className="mt-4 max-w-3xl leading-8 text-slate-600">
            Consider a fictional economy that produces only rice and chairs.
            We will compare Year 1 and Year 2 to see how production and prices
            affect GDP. These are illustrative rupee figures, not official
            Indian data.
          </p>

          <div className="mt-8 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
            <table className="w-full min-w-[650px] text-left text-sm">
              <thead className="bg-indigo-950 text-white">
                <tr>
                  <th className="px-5 py-4 font-bold">Product</th>
                  <th className="px-5 py-4 font-bold">Year 1 Quantity</th>
                  <th className="px-5 py-4 font-bold">Year 1 Price</th>
                  <th className="px-5 py-4 font-bold">Year 2 Quantity</th>
                  <th className="px-5 py-4 font-bold">Year 2 Price</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-100">
                  <td className="px-5 py-4 font-bold text-slate-900">Rice</td>
                  <td className="px-5 py-4">100 kg</td>
                  <td className="px-5 py-4">₹20/kg</td>
                  <td className="px-5 py-4">120 kg</td>
                  <td className="px-5 py-4">₹25/kg</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="px-5 py-4 font-bold text-slate-900">Chairs</td>
                  <td className="px-5 py-4">10</td>
                  <td className="px-5 py-4">₹1,000 each</td>
                  <td className="px-5 py-4">12</td>
                  <td className="px-5 py-4">₹1,200 each</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <article className="rounded-3xl border border-blue-200 bg-white p-6 sm:p-8">
              <div className="inline-flex rounded-2xl bg-blue-100 p-3 text-blue-800">
                <CircleDollarSign className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-xl font-bold text-slate-950">
                Step 1: Calculate Nominal GDP
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Nominal GDP uses the prices and quantities from each
                respective year.
              </p>

              <div className="mt-5 rounded-2xl bg-blue-50 p-4">
                <p className="font-bold text-blue-950">Year 1</p>
                <p className="mt-2 leading-7 text-slate-700">
                  Rice: 100 × ₹20 = ₹2,000
                </p>
                <p className="leading-7 text-slate-700">
                  Chairs: 10 × ₹1,000 = ₹10,000
                </p>
                <p className="mt-3 border-t border-blue-200 pt-3 text-lg font-bold text-blue-950">
                  Nominal GDP = ₹12,000
                </p>
              </div>

              <div className="mt-4 rounded-2xl bg-indigo-50 p-4">
                <p className="font-bold text-indigo-950">Year 2</p>
                <p className="mt-2 leading-7 text-slate-700">
                  Rice: 120 × ₹25 = ₹3,000
                </p>
                <p className="leading-7 text-slate-700">
                  Chairs: 12 × ₹1,200 = ₹14,400
                </p>
                <p className="mt-3 border-t border-indigo-200 pt-3 text-lg font-bold text-indigo-950">
                  Nominal GDP = ₹17,400
                </p>
              </div>
            </article>

            <article className="rounded-3xl border border-emerald-200 bg-white p-6 sm:p-8">
              <div className="inline-flex rounded-2xl bg-emerald-100 p-3 text-emerald-800">
                <Factory className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-xl font-bold text-slate-950">
                Step 2: Calculate Real GDP
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Choose Year 1 as the reference year. Value Year 2 quantities
                using Year 1 prices.
              </p>

              <div className="mt-5 rounded-2xl bg-emerald-50 p-4">
                <p className="font-bold text-emerald-950">Year 1 Real GDP</p>
                <p className="mt-2 leading-7 text-slate-700">
                  100 × ₹20 + 10 × ₹1,000
                </p>
                <p className="mt-2 text-lg font-bold text-emerald-950">
                  ₹12,000
                </p>
              </div>

              <div className="mt-4 rounded-2xl bg-teal-50 p-4">
                <p className="font-bold text-teal-950">Year 2 Real GDP</p>
                <p className="mt-2 leading-7 text-slate-700">
                  Rice: 120 × ₹20 = ₹2,400
                </p>
                <p className="leading-7 text-slate-700">
                  Chairs: 12 × ₹1,000 = ₹12,000
                </p>
                <p className="mt-3 border-t border-teal-200 pt-3 text-lg font-bold text-teal-950">
                  Real GDP = ₹14,400
                </p>
              </div>
            </article>
          </div>

          <div className="mt-8 rounded-3xl border border-violet-200 bg-gradient-to-r from-violet-50 via-white to-blue-50 p-6 sm:p-8">
            <h3 className="text-xl font-bold text-slate-950">
              Step 3: Compare GDP Growth
            </h3>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-blue-200 bg-white p-5">
                <p className="font-bold text-blue-900">
                  Nominal GDP Growth
                </p>
                <p className="mt-3 text-3xl font-bold text-blue-950">45%</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  (₹17,400 − ₹12,000) ÷ ₹12,000 × 100
                </p>
              </div>
              <div className="rounded-2xl border border-emerald-200 bg-white p-5">
                <p className="font-bold text-emerald-900">Real GDP Growth</p>
                <p className="mt-3 text-3xl font-bold text-emerald-950">
                  20%
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  (₹14,400 − ₹12,000) ÷ ₹12,000 × 100
                </p>
              </div>
            </div>
            <p className="mt-5 leading-7 text-slate-700">
              Nominal GDP grew by 45%, but real GDP grew by 20%. The
              difference arises because the economy produced more goods
              and the prices used to value those goods also increased.
              The two growth rates should not be treated as directly
              additive components.
            </p>
          </div>
        </div>
      </section>
<AdSlot />
      {/* GDP deflator */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <h2 className="text-2xl font-bold text-slate-950 sm:text-3xl">
          What Is The GDP Deflator?
        </h2>

        <p className="mt-4 max-w-3xl leading-8 text-slate-600">
          The GDP deflator is a price index that compares nominal GDP with
          real GDP. It helps show how the prices of domestically produced
          final goods and services have changed relative to the chosen
          reference-year price basis.
        </p>

        <div className="mt-7 grid gap-5 md:grid-cols-[1fr_0.8fr]">
          <div className="rounded-3xl border border-violet-200 bg-violet-50 p-6 sm:p-8">
            <p className="font-bold text-violet-950">Formula</p>
            <div className="mt-4 rounded-2xl bg-white p-5">
              <p className="text-lg font-bold text-slate-950">
                GDP Deflator = (Nominal GDP ÷ Real GDP) × 100
              </p>
            </div>
            <p className="mt-4 leading-7 text-slate-600">
              In the simplified example, Year 2 nominal GDP is ₹17,400 and
              real GDP is ₹14,400 when Year 1 is the reference year.
            </p>
            <p className="mt-3 font-bold text-violet-950">
              (₹17,400 ÷ ₹14,400) × 100 ≈ 120.8
            </p>
          </div>

          <div className="rounded-3xl border border-indigo-200 bg-gradient-to-br from-indigo-50 to-white p-6 sm:p-8">
            <div className="inline-flex rounded-2xl bg-indigo-100 p-3 text-indigo-800">
              <Scale className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-xl font-bold text-slate-950">
              How To Interpret It
            </h3>
            <p className="mt-3 leading-7 text-slate-600">
              The reference-year index is 100. An index of about 120.8
              means the GDP price index is approximately 20.8% higher than
              the reference-year level in this example.
            </p>
            <p className="mt-3 text-sm leading-6 text-slate-500">
              This is a simplified GDP deflator calculation, not a measure
              of consumer inflation or the cost of living for a household.
            </p>
          </div>
        </div>
      </section>

      {/* Importance */}
      <section className="border-y border-emerald-100 bg-gradient-to-br from-emerald-50 via-white to-blue-50 py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-950 sm:text-3xl">
            Why Are Real GDP And Nominal GDP Important?
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <article className="rounded-3xl border border-blue-200 bg-white p-6">
              <h3 className="text-xl font-bold text-blue-950">
                Importance Of Nominal GDP
              </h3>
              <ul className="mt-5 space-y-4">
                {[
                  "Measures the current-price value of domestic production.",
                  "Helps describe the size of the economy in current rupees.",
                  "Provides context for comparing current GDP with government debt and tax revenue, while accounting for inflation and other factors.",
                  "Helps businesses and policymakers understand the current monetary scale of economic activity.",
                ].map((item) => (
                  <li key={item} className="flex gap-3 leading-7 text-slate-600">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-blue-700" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-3xl border border-emerald-200 bg-white p-6">
              <h3 className="text-xl font-bold text-emerald-950">
                Importance Of Real GDP
              </h3>
              <ul className="mt-5 space-y-4">
                {[
                  "Helps measure economic growth after accounting for price changes.",
                  "Makes comparisons across years more meaningful.",
                  "Helps economists assess whether production volume is expanding or contracting.",
                  "Supports analysis of recessions, recoveries, and long-term economic performance.",
                ].map((item) => (
                  <li key={item} className="flex gap-3 leading-7 text-slate-600">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-emerald-700" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* Why nominal alone is not enough */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <h2 className="text-2xl font-bold text-slate-950 sm:text-3xl">
          Why Nominal GDP Alone Is Not Enough
        </h2>

        <p className="mt-4 max-w-3xl leading-8 text-slate-600">
          Nominal GDP combines changes in output and prices. If prices rise
          sharply, nominal GDP can increase even when the volume of goods
          and services grows slowly or does not grow at all.
        </p>

        <div className="mt-7 grid gap-5 md:grid-cols-2">
          <article className="rounded-3xl border border-rose-200 bg-gradient-to-br from-rose-50 to-white p-6">
            <div className="inline-flex rounded-2xl bg-rose-100 p-3 text-rose-800">
              <XCircle className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-xl font-bold text-slate-950">
              The Problem
            </h3>
            <p className="mt-3 leading-7 text-slate-600">
              Imagine a country produces exactly the same number of goods
              this year as last year, but their prices increase by 10%.
              Nominal GDP may rise even though production volume has not
              increased.
            </p>
          </article>

          <article className="rounded-3xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-white p-6">
            <div className="inline-flex rounded-2xl bg-emerald-100 p-3 text-emerald-800">
              <CheckCircle2 className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-xl font-bold text-slate-950">
              The Solution
            </h3>
            <p className="mt-3 leading-7 text-slate-600">
              Real GDP uses a reference-year price basis to reduce the
              effect of price changes. It therefore gives a clearer
              indication of whether the quantity of output has grown.
            </p>
          </article>
        </div>
<AdSlot />
        <h2 className="mt-12 text-2xl font-bold text-slate-950 sm:text-3xl">
          Why Real GDP Alone Is Not Enough
        </h2>

        <div className="mt-6 rounded-3xl border border-amber-200 bg-amber-50 p-6 sm:p-8">
          <p className="leading-8 text-amber-950">
            Real GDP is useful for tracking output growth, but it does not
            tell us the current-price value of all production. It also does
            not directly measure inflation faced by households, income
            inequality, unpaid work, environmental damage, or how much
            income an average person receives. Nominal GDP and other
            economic indicators are needed to answer these different
            questions.
          </p>
        </div>
      </section>

      {/* Comparison table */}
      <section
        id="comparison"
        className="border-y border-slate-200 bg-slate-50 py-14 sm:py-16"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-950 sm:text-3xl">
            Real GDP vs Nominal GDP: Key Differences
          </h2>

          <div className="mt-7 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
            <table className="w-full min-w-[650px] text-left text-sm">
              <thead className="bg-indigo-950 text-white">
                <tr>
                  <th className="px-5 py-4 font-bold">Basis</th>
                  <th className="px-5 py-4 font-bold">Nominal GDP</th>
                  <th className="px-5 py-4 font-bold">Real GDP</th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    "Prices used",
                    "Current-period prices",
                    "Reference-year prices or an equivalent volume measure",
                  ],
                  [
                    "Price changes",
                    "Reflects price and output changes",
                    "Designed to remove the effect of price changes",
                  ],
                  [
                    "Main purpose",
                    "Measures production value at current prices",
                    "Measures changes in production volume",
                  ],
                  [
                    "Growth interpretation",
                    "Can rise because prices rise",
                    "Growth more directly reflects changes in output volume",
                  ],
                  [
                    "Common use",
                    "Current economic scale and nominal ratios",
                    "Economic growth comparisons over time",
                  ],
                  [
                    "Household cost of living",
                    "Does not directly measure it",
                    "Does not directly measure it",
                  ],
                ].map(([basis, nominal, real]) => (
                  <tr key={basis} className="border-t border-slate-100">
                    <td className="px-5 py-4 font-bold text-slate-900">
                      {basis}
                    </td>
                    <td className="px-5 py-4 leading-6 text-slate-600">
                      {nominal}
                    </td>
                    <td className="px-5 py-4 leading-6 text-slate-600">
                      {real}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* India context */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <h2 className="text-2xl font-bold text-slate-950 sm:text-3xl">
          Real GDP vs Nominal GDP In India
        </h2>

        <p className="mt-4 max-w-3xl leading-8 text-slate-600">
          India's national accounts publish GDP at current prices and at
          constant prices. Current-price GDP reflects both changes in
          production and prices, while constant-price GDP is used to assess
          changes in the volume of economic activity.
        </p>

        <div className="mt-7 grid gap-5 md:grid-cols-2">
          <div className="rounded-3xl border border-blue-200 bg-blue-50 p-6">
            <h3 className="text-xl font-bold text-blue-950">
              GDP At Current Prices
            </h3>
            <p className="mt-3 leading-7 text-slate-600">
              Useful when discussing the current rupee value of India's
              economic output or comparing nominal economic totals.
            </p>
          </div>
          <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6">
            <h3 className="text-xl font-bold text-emerald-950">
              GDP At Constant Prices
            </h3>
            <p className="mt-3 leading-7 text-slate-600">
              Useful when discussing India's real economic growth after
              accounting for changes in prices.
            </p>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5">
          <p className="font-bold text-amber-950">
            Important When Using Indian GDP Figures
          </p>
          <p className="mt-2 leading-7 text-amber-950">
            Always state the financial year, whether the figure is at
            current or constant prices, the reference-year basis, and
            whether the estimate is provisional or revised. Official GDP
            estimates can change when statistical authorities release
            updated data.
          </p>
        </div>

        <p className="mt-5 leading-7 text-slate-600">
          For the latest official figures, consult the{" "}
          <a
            href="https://www.mospi.gov.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-blue-800 underline decoration-blue-300 underline-offset-4 hover:text-blue-950"
          >
            Ministry of Statistics and Programme Implementation (MoSPI)
          </a>
          , which publishes India's national accounts statistics.
        </p>
      </section>

      {/* FAQ */}
      <section className="border-y border-blue-100 bg-gradient-to-br from-blue-50 via-white to-violet-50 py-14 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-950 sm:text-3xl">
            Frequently Asked Questions
          </h2>

          <div className="mt-8 space-y-4">
            {[
              {
                q: "What is the main difference between real GDP and nominal GDP?",
                a: "Nominal GDP uses current-period prices, while real GDP uses a reference-year price basis or an equivalent volume measure to reduce the effect of price changes.",
              },
              {
                q: "Can nominal GDP rise while real GDP stays unchanged?",
                a: "Yes. If production volume stays the same but prices increase, nominal GDP can rise while real GDP remains approximately unchanged.",
              },
              {
                q: "Which is better for measuring economic growth?",
                a: "Real GDP is generally more useful for measuring changes in production volume because it accounts for price changes. Nominal GDP is still useful for understanding the current-price size of the economy.",
              },
              {
                q: "Does real GDP measure inflation?",
                a: "Real GDP is adjusted for price changes; it is not itself an inflation rate. The GDP deflator is a price index derived from nominal and real GDP. Consumer price inflation is measured using a different index.",
              },
              {
                q: "What is the GDP deflator formula?",
                a: "GDP deflator = (Nominal GDP ÷ Real GDP) × 100, when both figures are expressed on a compatible basis.",
              },
              {
                q: "Does higher real GDP mean everyone is better off?",
                a: "No. Real GDP growth can indicate that total production is increasing, but it does not show how income is distributed or directly measure health, education, environmental quality, or individual well-being.",
              },
              {
                q: "What does GDP at constant prices mean in India?",
                a: "It is India's real GDP measure, valued using the relevant reference-year price basis published in the national accounts, to help assess changes in output volume.",
              },
            ].map((item) => (
              <details
                key={item.q}
                className="group rounded-2xl border border-slate-200 bg-white p-5 open:border-blue-200 open:bg-blue-50/50"
              >
                <summary className="cursor-pointer list-none font-bold text-slate-950">
                  <span className="flex items-center justify-between gap-4">
                    {item.q}
                    <span className="text-xl text-blue-700 transition group-open:rotate-45">
                      +
                    </span>
                  </span>
                </summary>
                <p className="mt-4 leading-7 text-slate-600">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      
    </main>
  );
}
