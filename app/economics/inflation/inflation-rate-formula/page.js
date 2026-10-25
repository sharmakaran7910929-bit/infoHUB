
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  Calculator,
  CheckCircle2,
  CircleHelp,
  ClipboardList,
  Lightbulb,
  Percent,
  TrendingUp,
  Wallet,
  XCircle,BookOpen 
} from "lucide-react";
import AdSlot from "../../../../components/AdSlot";

export const metadata = {
  title:
    "Inflation Rate Formula: How to Calculate Inflation Using CPI | PriceTag HUB",
  description:
    "Learn the inflation rate formula with step-by-step calculations, CPI examples, year-on-year versus monthly inflation, and practical explanations for India.",
  alternates: {
    canonical:
      "https://www.pricetag.co.in/economics/inflation/inflation-rate-formula",
  },
  openGraph: {
    title: "Inflation Rate Formula: Calculate Inflation Step by Step",
    description:
      "Calculate inflation using CPI values, understand percentage changes, compare monthly and annual inflation, and avoid common calculation mistakes.",
    url: "https://www.pricetag.co.in/economics/inflation/inflation-rate-formula",
    type: "article",
  },
};

const relatedTopics = [
  {
    title: "What Is Inflation?",
    description:
      "Understand the meaning of inflation and how rising prices affect household purchasing power.",
    href: "/economics/inflation/what-is-inflation",
  },
  {
    title: "CPI vs WPI",
    description:
      "Compare consumer price inflation with wholesale price inflation.",
    href: "/economics/inflation/cpi-vs-wpi",
  },
  {
    title: "Core vs Headline Inflation",
    description:
      "Understand the difference between overall inflation and underlying price pressures.",
    href: "/economics/inflation/core-vs-headline-inflation",
  },
  {
    title: "Effects of Inflation",
    description:
      "Learn how rising prices affect savings, budgets, businesses, and purchasing power.",
    href: "/economics/inflation/effects-of-inflation",
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

function FormulaCard({ title, formula, description, color = "blue" }) {
  const colors = {
    blue: "border-blue-200 bg-blue-50 text-blue-900",
    orange: "border-orange-200 bg-orange-50 text-orange-900",
    green: "border-emerald-200 bg-emerald-50 text-emerald-900",
  };

  return (
    <div className={`rounded-2xl border p-5 sm:p-6 ${colors[color]}`}>
      <h3 className="font-bold">{title}</h3>
      <div className="my-5 rounded-xl border border-white/80 bg-white p-4 text-center">
        <p className="text-base font-bold leading-8 sm:text-lg">
          {formula}
        </p>
      </div>
      <p className="text-sm leading-6 text-slate-600">{description}</p>
    </div>
  );
}

function ExampleStep({ number, title, children }) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-sm font-bold text-blue-800">
        {number}
      </div>
      <div className="min-w-0 flex-1">
        <h3 className="font-bold text-slate-950">{title}</h3>
        <div className="mt-2 text-sm leading-7 text-slate-600">
          {children}
        </div>
      </div>
    </div>
  );
}

export default function InflationRateFormulaPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* HERO */}
      <section className="overflow-hidden border-b border-blue-100 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-3 py-1.5 text-sm font-bold text-blue-800">
                <Calculator className="h-4 w-4" />
                Economics · Inflation · Formula Guide
              </div>

              <h1 className="max-w-2xl text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl">
                Inflation Rate Formula: How to Calculate Inflation
              </h1>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
                Learn how to calculate inflation using price index values,
                understand CPI-based calculations, and work out monthly and
                annual inflation rates with clear, step-by-step examples.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="#formula"
                  className="inline-flex items-center gap-2 rounded-xl bg-blue-700 px-5 py-3 font-bold text-white transition hover:bg-blue-800"
                >
                  See the Formula
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#examples"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 font-bold text-slate-800 transition hover:bg-slate-50"
                >
                  Worked Examples
                </a>
              </div>

              <p className="mt-5 text-sm leading-6 text-slate-500">
                Practical calculations for students, everyday readers, and
                anyone learning economics.
              </p>
            </div>

            {/* HERO VISUAL */}
            <div className="rounded-3xl border border-blue-100 bg-white p-5 shadow-xl shadow-blue-100/50 sm:p-7">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-blue-100 p-3 text-blue-800">
                  <Percent className="h-7 w-7" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">
                    Calculate the percentage change
                  </p>
                  <h2 className="text-xl font-bold text-slate-950">
                    Inflation Rate
                  </h2>
                </div>
              </div>

              <div className="mt-6 rounded-2xl bg-slate-900 p-5 text-center text-white sm:p-6">
                <p className="text-sm font-bold uppercase tracking-wider text-blue-300">
                  The essential formula
                </p>
                <p className="mt-4 text-lg font-bold leading-8 sm:text-xl">
                  (Current CPI − Previous CPI)
                </p>
                <div className="mx-auto my-2 h-px max-w-xs bg-slate-500" />
                <p className="text-lg font-bold">Previous CPI</p>
                <p className="mt-3 text-2xl font-bold text-blue-300">× 100</p>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-blue-50 p-4">
                  <p className="text-xs font-bold uppercase text-blue-800">
                    Previous CPI
                  </p>
                  <p className="mt-2 text-2xl font-bold text-slate-950">
                    180
                  </p>
                </div>
                <div className="rounded-xl bg-emerald-50 p-4">
                  <p className="text-xs font-bold uppercase text-emerald-800">
                    Current CPI
                  </p>
                  <p className="mt-2 text-2xl font-bold text-slate-950">
                    189
                  </p>
                </div>
              </div>

              <div className="mt-3 flex items-center justify-between rounded-xl border border-emerald-200 bg-emerald-50 p-4">
                <span className="text-sm font-semibold text-slate-700">
                  Inflation in this example
                </span>
                <span className="text-2xl font-bold text-emerald-800">
                  5%
                </span>
              </div>

              <p className="mt-3 text-xs leading-5 text-slate-500">
                Illustrative CPI values, not actual Indian inflation data.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK ANSWER */}
      <section className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
        <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
          <div className="rounded-xl bg-white p-3 text-blue-700">
            <Lightbulb className="h-6 w-6" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-950">
              The formula in simple words
            </h2>
            <p className="mt-3 leading-7 text-slate-700">
              Subtract the previous period&apos;s price index from the current
              period&apos;s index. Divide the difference by the previous index,
              then multiply by 100 to express the change as a percentage.
            </p>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              The result tells you how much the measured price index has
              increased or decreased over the chosen period.
            </p>
          </div>
        </div>
      </section>

      {/* FORMULA */}
      <section id="formula" className="mx-auto max-w-6xl px-5 py-10 sm:px-8">
        <SectionHeading
          eyebrow="01 · The calculation"
          title="What Is the Inflation Rate Formula?"
          description="The formula works with comparable price index readings or with the prices of the same item or basket measured consistently over time."
        />

        <FormulaCard
          title="Standard inflation rate formula"
          formula="Inflation Rate (%) = [(Current Index − Previous Index) ÷ Previous Index] × 100"
          description="For CPI-based inflation, use the current Consumer Price Index and the appropriate comparison-period CPI. The choice of comparison period determines whether you calculate monthly or annual inflation."
        />

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[
            {
              title: "Current index",
              description:
                "The CPI value for the period you want to measure.",
              icon: TrendingUp,
            },
            {
              title: "Previous index",
              description:
                "The CPI value for the correct comparison period.",
              icon: ClipboardList,
            },
            {
              title: "Multiply by 100",
              description:
                "Converts the ratio into a percentage change.",
              icon: Percent,
            },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 p-5"
              >
                <div className="mb-4 inline-flex rounded-xl bg-blue-50 p-3 text-blue-700">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-bold text-slate-950">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>
<AdSlot />
      {/* CPI EXAMPLE */}
      <section
        id="examples"
        className="border-y border-slate-200 bg-slate-50"
      >
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
          <SectionHeading
            eyebrow="02 · Worked example"
            title="How to Calculate Inflation Using CPI"
            description="Follow the calculation using two hypothetical Consumer Price Index values."
          />

          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-7">
              <h3 className="font-bold text-slate-950">
                Example CPI readings
              </h3>

              <div className="mt-5 space-y-3">
                <div className="flex items-center justify-between rounded-xl bg-blue-50 p-4">
                  <div>
                    <p className="text-sm text-slate-600">Previous period</p>
                    <p className="font-bold text-slate-950">CPI = 180</p>
                  </div>
                  <span className="rounded-lg bg-white px-3 py-2 font-bold text-blue-800">
                    180
                  </span>
                </div>

                <div className="flex items-center justify-between rounded-xl bg-emerald-50 p-4">
                  <div>
                    <p className="text-sm text-slate-600">Current period</p>
                    <p className="font-bold text-slate-950">CPI = 189</p>
                  </div>
                  <span className="rounded-lg bg-white px-3 py-2 font-bold text-emerald-800">
                    189
                  </span>
                </div>
              </div>

              <p className="mt-5 text-sm leading-6 text-slate-500">
                The values are hypothetical and are provided solely to
                demonstrate the calculation.
              </p>
            </div>

            <div className="rounded-2xl border border-blue-200 bg-white p-5 sm:p-7">
              <h3 className="text-lg font-bold text-slate-950">
                Calculate it step by step
              </h3>

              <div className="mt-6 space-y-6">
                <ExampleStep number="01" title="Find the change in CPI">
                  189 − 180 = <strong>9 index points</strong>
                </ExampleStep>

                <ExampleStep number="02" title="Divide by the previous CPI">
                  9 ÷ 180 = <strong>0.05</strong>
                </ExampleStep>

                <ExampleStep number="03" title="Convert into a percentage">
                  0.05 × 100 = <strong>5%</strong>
                </ExampleStep>
              </div>

              <div className="mt-7 rounded-2xl bg-emerald-50 p-5">
                <p className="text-sm font-bold uppercase tracking-wider text-emerald-800">
                  Final answer
                </p>
                <p className="mt-2 text-3xl font-bold text-slate-950">
                  5% inflation
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  The CPI increased by 5% over the period represented by these
                  two readings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MONTHLY VS ANNUAL */}
      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <SectionHeading
          eyebrow="03 · Choose the right period"
          title="Monthly Inflation vs Year-on-Year Inflation"
          description="The formula stays the same, but the comparison period changes. This is one of the most important details in inflation calculations."
        />

        <div className="grid gap-5 md:grid-cols-2">
          <FormulaCard
            title="Month-on-month inflation"
            formula="[(Current month's CPI − Previous month's CPI) ÷ Previous month's CPI] × 100"
            description="Compares a month with the immediately preceding month. It helps identify recent price movements but can be affected by seasonal patterns."
            color="blue"
          />

          <FormulaCard
            title="Year-on-year inflation"
            formula="[(Current month's CPI − Same month's CPI last year) ÷ Same month's CPI last year] × 100"
            description="Compares a month with the corresponding month one year earlier. This is a commonly reported measure of consumer inflation in India."
            color="green"
          />
        </div>

        <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5 sm:p-6">
          <div className="flex items-start gap-3">
            <CircleHelp className="mt-1 h-5 w-5 shrink-0 text-amber-800" />
            <div>
              <h3 className="font-bold text-slate-950">
                Why does the comparison period matter?
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-700">
                If a news report says inflation is 4%, check whether it means
                year-on-year or month-on-month inflation. A 4% increase over
                one month means something very different from a 4% increase
                over twelve months.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INTERPRETATION */}
      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
          <SectionHeading
            eyebrow="04 · Understand the result"
            title="Can the Inflation Rate Be Zero or Negative?"
            description="The calculation measures the direction and size of the change, not simply whether prices are high."
          />

          <div className="grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl border border-emerald-200 bg-white p-5">
              <div className="mb-4 inline-flex rounded-xl bg-emerald-50 p-3 text-emerald-800">
                <TrendingUp className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-slate-950">
                Positive inflation
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                The index has increased. For example, a change from 180 to 189
                produces 5% inflation.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <div className="mb-4 inline-flex rounded-xl bg-slate-100 p-3 text-slate-700">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-slate-950">
                Zero inflation
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                The index is unchanged between the two comparison periods.
                The calculated inflation rate is 0%.
              </p>
            </div>

            <div className="rounded-2xl border border-orange-200 bg-white p-5">
              <div className="mb-4 inline-flex rounded-xl bg-orange-50 p-3 text-orange-800">
                <TrendingUp className="h-6 w-6 rotate-180" />
              </div>
              <h3 className="font-bold text-slate-950">
                Negative inflation
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                The index has decreased. This is called deflation when it
                reflects a decline in the general price level.
              </p>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
            <h3 className="font-bold text-slate-950">
              A lower inflation rate does not necessarily mean cheaper goods
            </h3>
            <p className="mt-3 leading-7 text-slate-600">
              If inflation falls from 8% to 4%, prices can still be increasing.
              They are rising more slowly. To determine whether the overall
              price level has fallen, you need to examine whether the relevant
              price index itself has decreased.
            </p>
          </div>
        </div>
      </section>
<AdSlot />
      {/* COMMON MISTAKES */}
      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <SectionHeading
          eyebrow="05 · Avoid mistakes"
          title="Common Mistakes When Calculating Inflation"
          description="Small calculation errors can produce misleading results."
        />

        <div className="space-y-4">
          {[
            {
              title: "Dividing by the current CPI",
              text: "The standard percentage-change formula uses the previous period's CPI as the denominator.",
            },
            {
              title: "Comparing different time periods",
              text: "For year-on-year inflation, compare with the same month of the previous year, not automatically with the previous month.",
            },
            {
              title: "Confusing CPI points with percentages",
              text: "An increase of 9 index points from 180 to 189 represents 5% inflation, not 9%.",
            },
            {
              title: "Treating one product's price change as overall inflation",
              text: "A single product's price change does not measure the change in a representative basket of consumer goods and services.",
            },
            {
              title: "Using index figures from incompatible series",
              text: "Ensure the CPI readings use a consistent index series, population coverage, and methodology.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="flex items-start gap-3 rounded-2xl border border-slate-200 p-5"
            >
              <XCircle className="mt-1 h-5 w-5 shrink-0 text-red-600" />
              <div>
                <h3 className="font-bold text-slate-950">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* INDIA */}
      <section className="border-y border-blue-100 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
          <SectionHeading
            eyebrow="06 · India"
            title="Where Can You Find India's Official Inflation Data?"
            description="Use official price index releases when you want to calculate or verify India's inflation rate."
          />

          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-blue-100 bg-white p-6">
              <h3 className="text-lg font-bold text-slate-950">
                Consumer Price Index (CPI)
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                CPI tracks changes in the prices of a representative basket of
                consumer goods and services. India's official CPI releases are
                published by the Ministry of Statistics and Programme
                Implementation.
              </p>
              <a
                href="https://mospi.gov.in/"
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-2 font-bold text-blue-700 underline underline-offset-4"
              >
                Visit MoSPI
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="rounded-2xl border border-blue-100 bg-white p-6">
              <h3 className="text-lg font-bold text-slate-950">
                Wholesale Price Index (WPI)
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                WPI tracks price changes at the wholesale level. It can help
                explain price pressures earlier in the supply chain, but it is
                not the same as consumer inflation measured by CPI.
              </p>
              <a
                href="https://eaindustry.nic.in/"
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-2 font-bold text-blue-700 underline underline-offset-4"
              >
                Visit the Office of Economic Adviser
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          <p className="mt-6 text-sm leading-6 text-slate-600">
            For a valid calculation, select the appropriate published index
            readings and use the same series for both comparison periods.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <SectionHeading
          eyebrow="07 · Frequently asked questions"
          title="Inflation Rate Formula FAQs"
          description="Quick answers to common calculation questions."
        />

        <div className="space-y-4">
          {[
            {
              question: "What is the formula for the inflation rate?",
              answer:
                "Inflation rate (%) = [(current price index − previous price index) ÷ previous price index] × 100.",
            },
            {
              question: "How do I calculate inflation from CPI?",
              answer:
                "Subtract the comparison-period CPI from the current CPI, divide the result by the comparison-period CPI, and multiply by 100. Select the appropriate period, such as month-on-month or year-on-year.",
            },
            {
              question: "How do I calculate annual inflation?",
              answer:
                "For year-on-year inflation, compare the current month's CPI with the CPI for the same month one year earlier, divide their difference by the earlier CPI, and multiply by 100.",
            },
            {
              question: "Can inflation be negative?",
              answer:
                "Yes. A negative percentage change means the index has declined over the selected period. A sustained decline in the general price level is called deflation.",
            },
            {
              question: "Is the inflation rate the same as the cost of living?",
              answer:
                "No. Inflation measures the rate of change in a price index. The cost of living also depends on household spending patterns, income, location, and the specific goods and services a family purchases.",
            },
          ].map((item) => (
            <details
              key={item.question}
              className="group rounded-2xl border border-slate-200 bg-white p-5"
            >
              <summary className="cursor-pointer list-none font-bold text-slate-950">
                <span className="flex items-center justify-between gap-4">
                  {item.question}
                  <ArrowDown className="h-5 w-5 shrink-0 text-blue-700 transition group-open:rotate-180" />
                </span>
              </summary>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </section>

      <AdSlot />

      {/* SOURCES */}
      <section className="mx-auto max-w-6xl px-5 py-8 sm:px-8">
        <h2 className="text-lg font-bold text-slate-950">
          Sources and further reading
        </h2>
        <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
          <li>
            <a
              href="https://mospi.gov.in/"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-blue-700 underline underline-offset-4"
            >
              Ministry of Statistics and Programme Implementation
            </a>{" "}
            — official Indian CPI data and methodology.
          </li>
          <li>
            <a
              href="https://eaindustry.nic.in/"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-blue-700 underline underline-offset-4"
            >
              Office of the Economic Adviser
            </a>{" "}
            — India's wholesale price index information.
          </li>
          <li>
            <a
              href="https://www.rbi.org.in/"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-blue-700 underline underline-offset-4"
            >
              Reserve Bank of India
            </a>{" "}
            — inflation, monetary policy, and economic publications.
          </li>
        </ul>

        <p className="mt-6 border-t border-slate-200 pt-5 text-xs leading-6 text-slate-500">
          PriceTag HUB · Knowledge, organized. This article is for educational
          purposes and does not constitute financial or investment advice.
        </p>
      </section>
    </main>
  );
}
