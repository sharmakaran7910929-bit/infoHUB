import AdSlot from "../../../../components/AdSlot";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Building2,
  Calculator,
  Factory,
  Globe2,
  GraduationCap,
  Landmark,
  Lightbulb,
  ShoppingCart,
  TrendingUp,
  Users,
  Wallet,
  BriefcaseBusiness,
  CircleHelp,
} from "lucide-react";

const components = [
  {
    letter: "C",
    title: "Consumption",
    subtitle: "Household Spending",
    description:
      "Spending by households on final goods and services, such as food, clothing, transport, and healthcare.",
    example: "A family pays for groceries or a haircut.",
    icon: ShoppingCart,
    color: "blue",
  },
  {
    letter: "I",
    title: "Investment",
    subtitle: "Capital Formation",
    description:
      "Spending on newly produced capital goods, such as machinery, equipment, and buildings, along with inventory changes. It is not the same as buying existing shares.",
    example: "A factory purchases a new production machine.",
    icon: Factory,
    color: "indigo",
  },
  {
    letter: "G",
    title: "Government Spending",
    subtitle: "Public Purchases",
    description:
      "Government purchases of currently produced goods and services, including public infrastructure and government-provided services. Transfer payments are not directly counted as GDP expenditure.",
    example: "The government pays a contractor to build a road.",
    icon: Landmark,
    color: "cyan",
  },
  {
    letter: "NX",
    title: "Net Exports",
    subtitle: "Exports Minus Imports",
    description:
      "The value of exports minus imports. Exports add to domestic production; imports are subtracted to remove foreign-produced goods already included in spending.",
    example: "Exported machinery adds to exports, while imported phones count as imports.",
    icon: Globe2,
    color: "emerald",
  },
];

const colorStyles = {
  blue: {
    icon: "bg-blue-100 text-blue-700",
    border: "border-blue-200",
    label: "text-blue-700",
  },
  indigo: {
    icon: "bg-indigo-100 text-indigo-700",
    border: "border-indigo-200",
    label: "text-indigo-700",
  },
  cyan: {
    icon: "bg-cyan-100 text-cyan-700",
    border: "border-cyan-200",
    label: "text-cyan-700",
  },
  emerald: {
    icon: "bg-emerald-100 text-emerald-700",
    border: "border-emerald-200",
    label: "text-emerald-700",
  },
};

const relatedTopics = [
  {
    title: "GDP Of India",
    description:
      "Explore India's national output, the sectors that contribute to it, and how official GDP estimates are reported.",
    href: "/economics/gdp-and-economic-growth/gdp-of-india",
    icon: Landmark,
  },
  {
    title: "GDP Per Capita",
    description:
      "Understand average GDP per person, how it is calculated, and why it is not the same as average income.",
    href: "/economics/gdp-and-economic-growth/gdp-per-capita",
    icon: Users,
  },
  {
    title: "Real Vs Nominal GDP",
    description:
      "Learn how price changes affect GDP figures and how economists compare output across different years.",
    href: "/economics/gdp-and-economic-growth/real-vs-nominal-gdp",
    icon: Calculator,
  },
  {
    title: "GDP Vs GNP",
    description:
      "Compare domestic production with national income measures based on residency and economic activity.",
    href: "/economics/gdp-and-economic-growth/gdp-vs-gnp",
    icon: Globe2,
  },
  {
    title: "Economic Growth",
    description:
      "Discover how increases in real output and productive capacity are used to understand economic growth.",
    href: "/economics/gdp-and-economic-growth/economic-growth",
    icon: TrendingUp,
  },
  {
    title: "Business Cycle",
    description:
      "Understand economic expansions, peaks, contractions, and recoveries.",
    href: "/economics/gdp-and-economic-growth/business-cycle",
    icon: BarChart3,
  },
];

const faqs = [
  {
    question: "What Is GDP In Simple Words?",
    answer:
      "GDP is the market value of final goods and services produced within a country's borders during a specific period. It provides a broad measure of domestic economic production.",
  },
  {
    question: "What Does GDP Stand For?",
    answer:
      "GDP stands for Gross Domestic Product. Gross refers to the total before deducting depreciation of fixed assets, domestic refers to production within the country's economic territory, and product refers to goods and services produced.",
  },
  {
    question: "Does GDP Include All Goods And Services?",
    answer:
      "GDP covers qualifying final production within the relevant accounting framework. Some non-market services and imputed housing services are included using appropriate valuation methods. Purely financial transactions, transfers, and most unpaid household services are not counted as ordinary market production.",
  },
  {
    question: "Are Imports Included In GDP?",
    answer:
      "Imports are subtracted in the expenditure formula because they are produced abroad. This prevents foreign-produced goods from being counted as domestic production, even when they were purchased by domestic households or businesses.",
  },
  {
    question: "Does Higher GDP Mean Everyone Is Richer?",
    answer:
      "No. GDP measures production, not how income is distributed. Total GDP can rise because the population grows, and average output per person can increase without everyone receiving equal benefits.",
  },
  {
    question: "What Is The Difference Between GDP And Profit?",
    answer:
      "Profit is a business's revenue minus its costs under the applicable accounting rules. GDP measures the value of domestic final production across the economy, so it is much broader than the profit earned by any one company.",
  },
];

export default function WhatIsGDPPage() {
  return (
    <main className="min-h-screen bg-white text-slate-800">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50 to-indigo-100">
        <div className="pointer-events-none absolute -right-20 -top-24 h-80 w-80 rounded-full bg-blue-200/40 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-28 -left-20 h-80 w-80 rounded-full bg-indigo-200/40 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.2fr_0.8fr] lg:px-10 lg:py-24">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-sm font-bold text-blue-800">
              <GraduationCap size={17} />
              Economics Fundamentals
            </div>

            <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              What Is GDP? Meaning, Formula, Components, And Examples
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              Gross Domestic Product (GDP) measures the value of final goods
              and services produced within a country's economic territory
              during a specified period. Learn how GDP works, how it is
              calculated, what it includes, and what it cannot tell us about
              an economy.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#gdp-formula"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-700 px-5 py-3 font-bold text-white transition hover:bg-blue-800"
              >
                Learn The GDP Formula <ArrowRight size={18} />
              </a>

              <a
                href="#gdp-example"
                className="inline-flex items-center gap-2 rounded-xl border border-blue-200 bg-white px-5 py-3 font-bold text-blue-800 transition hover:bg-blue-50"
              >
                See A Simple Example
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-blue-200 bg-white/90 p-6 shadow-xl shadow-blue-900/5 sm:p-8">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
              <BarChart3 size={29} />
            </div>

            <p className="mt-6 text-sm font-bold uppercase tracking-widest text-blue-700">
              The Core Idea
            </p>

            <h2 className="mt-2 text-2xl font-bold text-slate-950">
              Measure Production, Not Just Money
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              GDP is not the amount of money a country owns, the government's
              bank balance, or the combined stock-market value of its
              companies. It measures the value of production over a period.
            </p>

            <div className="mt-6 space-y-3">
              {[
                "A measure of domestic economic output",
                "Calculated for a period, such as a quarter or year",
                "Used to study the size and performance of an economy",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-600" />
                  <p className="text-sm leading-6 text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Definition And Scope */}
      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.75fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-blue-700">
              Definition And Meaning
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-950 sm:text-4xl">
              What Does Gross Domestic Product Mean?
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Gross Domestic Product is the monetary value of final goods and
              services produced within a country's economic territory during
              a particular period. It is one of the main indicators used to
              assess economic activity.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {[
                {
                  title: "Gross",
                  text: "Production is measured before deducting depreciation of fixed assets.",
                },
                {
                  title: "Domestic",
                  text: "Production within the country's economic territory is the focus.",
                },
                {
                  title: "Product",
                  text: "The measure covers qualifying goods and services produced during the period.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-blue-100 bg-gradient-to-br from-white to-blue-50 p-5"
                >
                  <h3 className="text-lg font-bold text-blue-800">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <aside className="rounded-3xl border border-indigo-100 bg-gradient-to-br from-indigo-50 via-white to-blue-50 p-6 sm:p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100 text-indigo-700">
              <Lightbulb size={25} />
            </div>

            <h3 className="mt-5 text-xl font-bold text-slate-950">
              Why Does GDP Matter?
            </h3>

            <p className="mt-3 leading-7 text-slate-600">
              It helps economists and policymakers understand the scale of
              production, compare output across periods, and assess whether
              economic activity is expanding or contracting.
            </p>

            <p className="mt-4 leading-7 text-slate-600">
              GDP is informative, but it is not a complete measure of living
              standards, wealth, happiness, or economic equality.
            </p>
          </aside>
        </div>
      </section>
<AdSlot />
      {/* What Is Counted */}
      <section className="border-y border-blue-100 bg-gradient-to-b from-blue-50/70 to-white py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-700">
              GDP Coverage
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-950 sm:text-4xl">
              What Is Included In GDP?
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              GDP includes qualifying final production by businesses,
              governments, and other producers within the economy. The key
              questions are where the production takes place, when it takes
              place, and whether the activity falls within GDP accounting
              rules.
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: ShoppingCart,
                title: "Consumer Goods And Services",
                text: "Newly produced food, clothing, transport, healthcare, and other qualifying household purchases.",
              },
              {
                icon: Factory,
                title: "Business Production",
                text: "New machinery, business equipment, buildings, and qualifying changes in inventories.",
              },
              {
                icon: Landmark,
                title: "Government Services",
                text: "Government-provided services and purchases, with non-market output valued using appropriate accounting methods.",
              },
              {
                icon: Globe2,
                title: "Exports",
                text: "Goods and services produced domestically and sold to buyers in other countries.",
              },
              {
                icon: Building2,
                title: "New Construction",
                text: "New residential and commercial construction and other qualifying capital formation.",
              },
              {
                icon: Wallet,
                title: "Some Imputed Production",
                text: "Certain non-market activities, such as the estimated housing services of owner-occupied homes, are included under national accounting rules.",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="rounded-2xl border border-blue-100 bg-white p-5 transition hover:border-blue-300 hover:shadow-md sm:p-6"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                    <Icon size={22} />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-slate-950">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    {item.text}
                  </p>
                </article>
              );
            })}
          </div>

          <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5">
            <h3 className="font-bold text-amber-900">
              Important: Not Every Transaction Creates GDP
            </h3>
            <p className="mt-2 text-sm leading-7 text-amber-900/90">
              Buying an existing house or share does not itself count as new
              production. The value of a newly produced good is generally
              counted once, not repeatedly each time it is resold. Brokerage
              and other newly provided transaction services can count as
              production.
            </p>
          </div>
        </div>
      </section>

      {/* GDP Formula */}
      <section
        id="gdp-formula"
        className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-16 lg:px-10"
      >
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-blue-700">
              Calculation Method
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-950 sm:text-4xl">
              How Is GDP Calculated?
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              GDP can be estimated using production, income, or expenditure
              approaches. In the expenditure approach, economists add
              expenditure on final domestic output, adjusting for imports
              because imported goods and services were produced abroad.
            </p>

            <div className="mt-6 rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50 to-white p-5">
              <p className="text-sm font-bold text-blue-800">
                Expenditure Approach
              </p>
              <p className="mt-3 text-xl font-bold leading-relaxed text-slate-950 sm:text-2xl">
                GDP = C + I + G + (X − M)
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                This is a standard expenditure identity. Statistical agencies
                use detailed national accounting methods to estimate the
                components.
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {components.map((item) => {
              const Icon = item.icon;
              const styles = colorStyles[item.color];

              return (
                <article
                  key={item.letter}
                  className={`rounded-2xl border ${styles.border} bg-white p-5 shadow-sm`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-xl ${styles.icon}`}
                    >
                      <Icon size={22} />
                    </div>
                    <span
                      className={`text-2xl font-bold ${styles.label}`}
                    >
                      {item.letter}
                    </span>
                  </div>

                  <h3 className="mt-4 text-lg font-bold text-slate-950">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-xs font-bold uppercase tracking-wider text-slate-500">
                    {item.subtitle}
                  </p>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>

                  <div className="mt-4 rounded-xl bg-slate-50 p-3">
                    <p className="text-xs font-bold text-slate-500">
                      Example
                    </p>
                    <p className="mt-1 text-sm leading-6 text-slate-700">
                      {item.example}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
<AdSlot />
{/* Worked Examples: Three GDP Calculation Methods */}
<section
  id="gdp-example"
  className="border-y border-blue-100 bg-gradient-to-br from-white via-blue-50 to-indigo-50 py-14 sm:py-16"
>
  <div className="mx-auto max-w-6xl px-5 sm:px-8">
    <div className="text-center">
      <p className="text-sm font-bold uppercase tracking-widest text-blue-700">
        Worked Examples
      </p>

      <h2 className="mt-3 text-3xl font-bold text-slate-950 sm:text-4xl">
        Three Methods Of Calculating GDP
      </h2>

      <p className="mx-auto mt-4 max-w-3xl leading-7 text-slate-600">
        GDP can be estimated through expenditure, production, and income.
        Each method examines the same economic activity from a different
        perspective. The following figures are illustrative and use
        consistent accounting assumptions.
      </p>
    </div>

    {/* Method 1: Expenditure */}
    <article className="mt-10 overflow-hidden rounded-3xl border border-blue-200 bg-white shadow-lg shadow-blue-900/5">
      <div className="bg-gradient-to-r from-blue-700 to-indigo-700 p-5 text-white sm:p-7">
        <p className="text-sm font-bold uppercase tracking-widest text-blue-100">
          Method 01
        </p>
        <h3 className="mt-2 text-2xl font-bold">
          Expenditure Method
        </h3>
        <p className="mt-2 leading-7 text-blue-100">
          Calculates GDP by adding expenditure on final domestic output.
        </p>
      </div>

      <div className="p-5 sm:p-7">
        <div className="rounded-2xl border border-blue-100 bg-blue-50 p-5">
          <p className="text-sm font-bold text-blue-800">
            Formula
          </p>
          <p className="mt-2 text-xl font-bold text-slate-950 sm:text-2xl">
            GDP = C + I + G + (X − M)
          </p>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            C = Consumption, I = Investment, G = Government Purchases,
            X = Exports, M = Imports.
          </p>
        </div>

        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[300px] text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200 text-slate-500">
                <th className="py-3 pr-4 font-bold">Component</th>
                <th className="py-3 text-right font-bold">Value</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Consumption (C)", "500"],
                ["Investment (I)", "150"],
                ["Government Purchases (G)", "200"],
                ["Exports (X)", "100"],
                ["Imports (M)", "80"],
              ].map(([label, value]) => (
                <tr key={label} className="border-b border-slate-100">
                  <td className="py-3 pr-4 text-slate-700">{label}</td>
                  <td className="py-3 text-right font-bold tabular-nums text-slate-900">
                    {value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-5 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 p-5">
          <p className="text-sm font-bold text-blue-800">
            Step-By-Step Calculation
          </p>
          <p className="mt-3 break-words text-base font-bold leading-8 text-slate-950 sm:text-xl">
            GDP = 500 + 150 + 200 + (100 − 80)
          </p>
          <p className="mt-2 text-slate-600">
            GDP = 500 + 150 + 200 + 20
          </p>

          <div className="mt-4 border-t border-blue-200 pt-4">
            <p className="text-sm text-slate-600">Calculated GDP</p>
            <p className="mt-1 text-3xl font-bold text-blue-800">
              870 Units
            </p>
          </div>
        </div>

        <p className="mt-4 text-sm leading-7 text-slate-600">
          Imports are deducted because they represent production outside
          the domestic economy. This prevents imported goods already included
          in consumption, investment, or government purchases from being
          counted as domestic production.
        </p>
      </div>
    </article>

    {/* Method 2: Production */}
    <article className="mt-8 overflow-hidden rounded-3xl border border-emerald-200 bg-white shadow-lg shadow-emerald-900/5">
      <div className="bg-gradient-to-r from-emerald-700 to-teal-700 p-5 text-white sm:p-7">
        <p className="text-sm font-bold uppercase tracking-widest text-emerald-100">
          Method 02
        </p>
        <h3 className="mt-2 text-2xl font-bold">
          Production Method
        </h3>
        <p className="mt-2 leading-7 text-emerald-100">
          Also called the Value-Added Method. It measures the value created
          at each stage of production.
        </p>
      </div>

      <div className="p-5 sm:p-7">
        <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-5">
          <p className="text-sm font-bold text-emerald-800">
            Formula
          </p>
          <p className="mt-2 text-xl font-bold text-slate-950 sm:text-2xl">
            GDP = Total Value Added + Product Taxes − Product Subsidies
          </p>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            When value added is measured at basic prices, product taxes
            less product subsidies are added to obtain GDP at market prices.
          </p>
        </div>

        <p className="mt-6 leading-7 text-slate-600">
          Imagine that three domestic businesses contribute to the economy:
          a farmer sells wheat to a mill, the mill sells flour to a bakery,
          and the bakery sells bread to customers.
        </p>

        <div className="mt-5 space-y-4">
          {[
            {
              name: "Stage 1: Farmer",
              output: 100,
              intermediate: 0,
              added: 100,
              note: "Produces and sells wheat.",
            },
            {
              name: "Stage 2: Flour Mill",
              output: 160,
              intermediate: 100,
              added: 60,
              note: "Uses wheat worth 100 to produce flour worth 160.",
            },
            {
              name: "Stage 3: Bakery",
              output: 240,
              intermediate: 160,
              added: 80,
              note: "Uses flour worth 160 to produce bread worth 240.",
            },
          ].map((stage) => (
            <div
              key={stage.name}
              className="rounded-2xl border border-emerald-100 p-4 sm:p-5"
            >
              <h4 className="font-bold text-slate-950">{stage.name}</h4>
              <p className="mt-1 text-sm text-slate-500">{stage.note}</p>

              <div className="mt-4 grid grid-cols-3 gap-2 sm:gap-4">
                <div>
                  <p className="text-xs leading-5 text-slate-500">
                    Output Value
                  </p>
                  <p className="mt-1 font-bold tabular-nums text-slate-900">
                    {stage.output}
                  </p>
                </div>
                <div>
                  <p className="text-xs leading-5 text-slate-500">
                    Intermediate Inputs
                  </p>
                  <p className="mt-1 font-bold tabular-nums text-slate-900">
                    {stage.intermediate}
                  </p>
                </div>
                <div>
                  <p className="text-xs leading-5 text-emerald-700">
                    Value Added
                  </p>
                  <p className="mt-1 font-bold tabular-nums text-emerald-800">
                    {stage.added}
                  </p>
                </div>
              </div>

              <div className="mt-3 h-2 overflow-hidden rounded-full bg-emerald-50">
                <div
                  className="h-full rounded-full bg-emerald-500"
                  style={{ width: `${(stage.added / 100) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5 rounded-2xl bg-gradient-to-r from-emerald-50 to-teal-50 p-5">
          <p className="text-sm font-bold text-emerald-800">
            Step-By-Step Calculation
          </p>
          <p className="mt-3 break-words font-bold leading-8 text-slate-950 sm:text-xl">
            Total Value Added = 100 + 60 + 80 = 240
          </p>

          <p className="mt-3 text-sm leading-7 text-slate-600">
            Assume the economy has 630 units of additional value added from
            other domestic producers, bringing total value added to 870.
            For this simplified example, assume product taxes less product
            subsidies are zero.
          </p>

          <div className="mt-4 border-t border-emerald-200 pt-4">
            <p className="text-sm text-slate-600">Calculated GDP</p>
            <p className="mt-1 text-3xl font-bold text-emerald-800">
              870 Units
            </p>
          </div>
        </div>

        <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-4">
          <p className="text-sm leading-7 text-amber-900">
            <strong>Important:</strong> The farmer's wheat and the mill's
            flour are intermediate goods in this example. Adding all three
            businesses' full sales values (100 + 160 + 240) would count
            some production more than once. Adding value added avoids this
            double counting.
          </p>
        </div>
      </div>
    </article>

    {/* Method 3: Income */}
    <article className="mt-8 overflow-hidden rounded-3xl border border-indigo-200 bg-white shadow-lg shadow-indigo-900/5">
      <div className="bg-gradient-to-r from-indigo-700 to-blue-800 p-5 text-white sm:p-7">
        <p className="text-sm font-bold uppercase tracking-widest text-indigo-100">
          Method 03
        </p>
        <h3 className="mt-2 text-2xl font-bold">
          Income Method
        </h3>
        <p className="mt-2 leading-7 text-indigo-100">
          Measures the incomes generated through domestic production.
        </p>
      </div>

      <div className="p-5 sm:p-7">
        <div className="rounded-2xl border border-indigo-100 bg-indigo-50 p-5">
          <p className="text-sm font-bold text-indigo-800">
            Simplified Formula
          </p>
          <p className="mt-2 text-xl font-bold leading-8 text-slate-950 sm:text-2xl">
            GDP = Compensation + Gross Operating Surplus + Gross Mixed Income
            + Taxes Less Subsidies On Production And Imports
          </p>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            The exact presentation varies with the national accounting
            framework and whether income components are recorded at basic
            prices or market prices.
          </p>
        </div>

        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[300px] text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200 text-slate-500">
                <th className="py-3 pr-4 font-bold">Income Component</th>
                <th className="py-3 text-right font-bold">Value</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Employee Compensation", "400"],
                ["Gross Operating Surplus", "250"],
                ["Gross Mixed Income", "120"],
                ["Taxes Less Subsidies", "100"],
              ].map(([label, value]) => (
                <tr key={label} className="border-b border-slate-100">
                  <td className="py-3 pr-4 text-slate-700">{label}</td>
                  <td className="py-3 text-right font-bold tabular-nums text-slate-900">
                    {value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-5 rounded-2xl bg-gradient-to-r from-indigo-50 to-blue-50 p-5">
          <p className="text-sm font-bold text-indigo-800">
            Step-By-Step Calculation
          </p>
          <p className="mt-3 break-words text-base font-bold leading-8 text-slate-950 sm:text-xl">
            GDP = 400 + 250 + 120 + 100
          </p>
          <p className="mt-2 text-slate-600">
            GDP = 650 + 120 + 100
          </p>

          <div className="mt-4 border-t border-indigo-200 pt-4">
            <p className="text-sm text-slate-600">Calculated GDP</p>
            <p className="mt-1 text-3xl font-bold text-indigo-800">
              870 Units
            </p>
          </div>
        </div>

        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-indigo-100 bg-white p-4">
            <h4 className="font-bold text-slate-950">
              Compensation Of Employees
            </h4>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Wages, salaries, and relevant employer social contributions
              paid for labour.
            </p>
          </div>

          <div className="rounded-xl border border-indigo-100 bg-white p-4">
            <h4 className="font-bold text-slate-950">
              Gross Operating Surplus
            </h4>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              The gross operating surplus generated by production, before
              deducting consumption of fixed capital.
            </p>
          </div>

          <div className="rounded-xl border border-indigo-100 bg-white p-4">
            <h4 className="font-bold text-slate-950">
              Gross Mixed Income
            </h4>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Income of unincorporated businesses where the returns to
              labour and capital are not separately identified.
            </p>
          </div>

          <div className="rounded-xl border border-indigo-100 bg-white p-4">
            <h4 className="font-bold text-slate-950">
              Taxes Less Subsidies
            </h4>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Relevant production and import taxes minus applicable
              subsidies reconcile the income components to GDP at market
              prices.
            </p>
          </div>
        </div>
      </div>
    </article>

    {/* Final Comparison */}
    <div className="mt-10 rounded-3xl border border-blue-200 bg-gradient-to-r from-blue-50 via-white to-indigo-50 p-6 sm:p-8">
      <h3 className="text-2xl font-bold text-slate-950">
        Why Do All Three Methods Measure The Same GDP?
      </h3>

      <p className="mt-4 leading-8 text-slate-600">
        Expenditure records who purchases final output, production records
        the value added as goods and services are created, and income records
        the incomes generated by that production. In a consistent national
        accounting system, these are three views of the same economic
        activity.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        {[
          {
            title: "Expenditure",
            result: "870 Units",
            color: "text-blue-800",
            bg: "bg-blue-100",
          },
          {
            title: "Production",
            result: "870 Units",
            color: "text-emerald-800",
            bg: "bg-emerald-100",
          },
          {
            title: "Income",
            result: "870 Units",
            color: "text-indigo-800",
            bg: "bg-indigo-100",
          },
        ].map((method) => (
          <div
            key={method.title}
            className="rounded-2xl border border-slate-200 bg-white p-5 text-center"
          >
            <p className="font-bold text-slate-700">{method.title}</p>
            <p className={`mt-3 text-2xl font-bold ${method.color}`}>
              {method.result}
            </p>
            <span
              className={`mt-3 inline-block rounded-full px-3 py-1 text-xs font-bold ${method.bg} ${method.color}`}
            >
              Same GDP Concept
            </span>
          </div>
        ))}
      </div>

      <p className="mt-5 text-sm leading-7 text-slate-600">
        In actual national accounts, estimates can differ temporarily because
        the three approaches use different data sources and may be subject to
        statistical discrepancies, revisions, and measurement limitations.
      </p>
    </div>
  </div>
</section>
<AdSlot />

      {/* Three GDP Approaches */}
      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-16 lg:px-10">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-widest text-blue-700">
            National Accounting
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-950 sm:text-4xl">
            Three Approaches To Measuring GDP
          </h2>

          <p className="mt-4 leading-8 text-slate-600">
            GDP can be measured from different sides of the same economic
            activity. In principle, the production, income, and expenditure
            approaches describe the same output. In practice, estimates can
            differ because data sources and measurement methods are not
            perfect.
          </p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {[
            {
              number: "01",
              title: "Production Approach",
              icon: Factory,
              description:
                "Measures value added by producers across industries. Value added is output value minus the value of intermediate goods and services used in production.",
              example:
                "A bakery's contribution is measured after subtracting the value of purchased flour and other intermediate inputs from its output.",
            },
            {
              number: "02",
              title: "Income Approach",
              icon: Wallet,
              description:
                "Measures incomes generated through production, including compensation of employees, operating surplus, mixed income, and relevant production taxes less subsidies.",
              example:
                "Wages earned by workers and operating surplus generated by businesses contribute to income generated through production.",
            },
            {
              number: "03",
              title: "Expenditure Approach",
              icon: Calculator,
              description:
                "Measures spending on final domestic output by households, businesses, government, and foreign buyers, with imports deducted.",
              example:
                "Household purchases, new machinery, public construction, and exports are combined with the appropriate import adjustment.",
            },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.number}
                className="rounded-2xl border border-blue-100 bg-gradient-to-b from-white to-blue-50/70 p-6"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                    <Icon size={24} />
                  </div>
                  <span className="text-xl font-bold text-blue-200">
                    {item.number}
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-bold text-slate-950">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>

                <div className="mt-5 rounded-xl border border-blue-100 bg-white p-4">
                  <p className="text-xs font-bold uppercase tracking-wider text-blue-700">
                    Example
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {item.example}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Why GDP Is Used */}
      <section className="border-y border-blue-100 bg-gradient-to-b from-blue-50 to-white py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-700">
              Practical Importance
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-950 sm:text-4xl">
              Why Do Economists And Governments Track GDP?
            </h2>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: TrendingUp,
                title: "Track Economic Activity",
                text: "Compare output over time to assess whether production is increasing or decreasing.",
              },
              {
                icon: Landmark,
                title: "Inform Public Policy",
                text: "Use output estimates alongside other indicators when evaluating budgets and economic conditions.",
              },
              {
                icon: Globe2,
                title: "Compare Economies",
                text: "Compare economic size, while accounting for differences in population, prices, exchange rates, and methods where relevant.",
              },
              {
                icon: BriefcaseBusiness,
                title: "Support Business Decisions",
                text: "Businesses can use GDP trends as one input when assessing demand, investment, and market conditions.",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="rounded-2xl border border-blue-100 bg-white p-5"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                    <Icon size={22} />
                  </div>

                  <h3 className="mt-4 font-bold text-slate-950">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    {item.text}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Limitations */}
      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-16 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100 text-indigo-700">
              <CircleHelp size={25} />
            </div>

            <h2 className="mt-5 text-3xl font-bold text-slate-950 sm:text-4xl">
              What GDP Cannot Tell Us
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              GDP is a measure of production, not a complete scorecard for
              society. To understand how people are doing, it must be
              considered alongside other economic and social indicators.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                title: "Income Distribution",
                text: "GDP does not show how income is shared among households or whether gains are concentrated among a small group.",
              },
              {
                title: "Population And Living Standards",
                text: "Total GDP can grow as population grows. GDP per capita adds population context but still does not reveal the distribution of income.",
              },
              {
                title: "Unpaid Household Work",
                text: "Many unpaid services performed within households are outside conventional GDP production boundaries, although some imputed services are included.",
              },
              {
                title: "Environmental Costs",
                text: "GDP does not automatically deduct environmental damage or depletion of natural resources in the way a comprehensive sustainability measure would.",
              },
              {
                title: "Quality Of Life",
                text: "Health, education, leisure, safety, personal well-being, and access to public services require additional measures.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-5"
              >
                <h3 className="font-bold text-slate-950">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    

      {/* FAQs */}
      <section className="mx-auto max-w-4xl px-5 py-14 sm:px-8 sm:py-16">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-blue-700">
            Common Questions
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-950 sm:text-4xl">
            Frequently Asked Questions About GDP
          </h2>
        </div>

        <div className="mt-8 space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-2xl border border-blue-100 bg-white p-5 open:border-blue-300 open:bg-blue-50/40 sm:p-6"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-slate-950">
                {faq.question}
                <span className="shrink-0 text-xl font-bold text-blue-700 group-open:hidden">
                  +
                </span>
                <span className="hidden shrink-0 text-xl font-bold text-blue-700 group-open:inline">
                  −
                </span>
              </summary>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </section>
<AdSlot />
      {/* Closing CTA */}
      <section className="px-5 pb-14 sm:px-8 sm:pb-16">
        <div className="mx-auto max-w-5xl rounded-3xl border border-blue-200 bg-gradient-to-r from-blue-50 via-white to-indigo-100 px-6 py-10 text-center sm:px-12 sm:py-14">
          <h2 className="text-3xl font-bold text-slate-950 sm:text-4xl">
            Understand How GDP Reflects India's Economy
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
            Move from the basic definition to India's GDP estimates, economic
            indicators, and the factors that influence national output.
          </p>

          <Link
            href="/economics/gdp-and-economic-growth/gdp-of-india"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-blue-700 px-6 py-3 font-bold text-white transition hover:bg-blue-800"
          >
            Explore GDP Of India <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
