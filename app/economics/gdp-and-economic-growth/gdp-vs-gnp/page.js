
import Link from "next/link";
import {
  ArrowDown,
  ArrowLeftRight,
  ArrowRight,
  Building2,
  CheckCircle2,
  Factory,
  Globe2,
  HelpCircle,
  Landmark,
  Lightbulb,
  Scale,
  TrendingUp,
  Wallet,
  XCircle,
} from "lucide-react";
import AdSlot from "../../../../components/AdSlot";

export const metadata = {
  title: "GDP vs GNP Explained: Formula, Examples & Differences",
  description:
    "Understand GDP vs GNP with formulas, worked calculations, Indian business examples, colorful diagrams, importance, limitations, and the difference between GDP and GNI.",
  alternates: {
    canonical:
      "https://www.pricetag.co.in/economics/gdp-and-economic-growth/gdp-vs-gnp",
  },
};

const comparisons = [
  {
    label: "GDP",
    full: "Gross Domestic Product",
    color: "blue",
    meaning: "Value of final production within a country's economic territory.",
    question: "Where did the production take place?",
  },
  {
    label: "GNP / GNI",
    full: "Gross National Product / Gross National Income",
    color: "emerald",
    meaning:
      "GDP adjusted for net primary income received from the rest of the world.",
    question: "How much primary income accrues to resident units?",
  },
];

export default function GDPVsGNPPage() {
  return (
    <main className="min-h-screen bg-white text-slate-800">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-indigo-900 to-violet-900 text-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-bold text-blue-100">
              <Scale className="h-4 w-4" />
              Economics Fundamentals
            </div>

            <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl">
              GDP vs GNP: What Is the Difference?
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-blue-100">
              GDP measures economic production within a country's territory.
              GNP, traditionally called Gross National Product, focuses on
              production income associated with its resident economy. Learn
              how they differ, how to calculate them, and why economists
              use both measures.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#formula"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-bold text-blue-950 transition hover:bg-blue-50"
              >
                Learn The Formula <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#calculation"
                className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-5 py-3 font-bold text-white transition hover:bg-white/15"
              >
                See Worked Examples
              </a>
            </div>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-blue-300/30 bg-blue-500/15 p-6">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-blue-300/20 p-3">
                  <Factory className="h-7 w-7 text-blue-100" />
                </div>
                <div>
                  <p className="text-sm font-bold text-blue-200">
                    GDP Focus
                  </p>
                  <p className="text-xl font-bold">Domestic Production</p>
                </div>
              </div>
              <p className="mt-4 leading-7 text-blue-100">
                Production taking place within India's economic territory
                contributes to India's GDP, subject to national accounting
                rules.
              </p>
            </div>

            <div className="rounded-3xl border border-emerald-300/30 bg-emerald-500/15 p-6">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-emerald-300/20 p-3">
                  <Globe2 className="h-7 w-7 text-emerald-100" />
                </div>
                <div>
                  <p className="text-sm font-bold text-emerald-200">
                    GNP / GNI Focus
                  </p>
                  <p className="text-xl font-bold">Net Primary Income</p>
                </div>
              </div>
              <p className="mt-4 leading-7 text-emerald-100">
                Adds primary income received from abroad and subtracts
                primary income paid abroad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Definitions */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <h2 className="text-2xl font-bold text-slate-950 sm:text-3xl">
          What Are GDP And GNP?
        </h2>
        <p className="mt-4 max-w-3xl leading-8 text-slate-600">
          GDP and GNP are related measures of economic activity, but they
          answer different questions. One focuses on the location of
          production; the other adjusts GDP for primary income flows between
          the domestic economy and the rest of the world.
        </p>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <article className="rounded-3xl border border-blue-200 bg-gradient-to-br from-blue-50 to-white p-6 sm:p-8">
            <div className="inline-flex rounded-2xl bg-blue-100 p-3 text-blue-800">
              <Factory className="h-7 w-7" />
            </div>
            <h3 className="mt-4 text-2xl font-bold text-slate-950">
              GDP
            </h3>
            <p className="mt-1 font-bold text-blue-800">
              Gross Domestic Product
            </p>
            <p className="mt-4 leading-7 text-slate-600">
              GDP is the value of final goods and services produced within
              a country's economic territory during a specified period,
              usually a quarter or a year.
            </p>
            <div className="mt-5 rounded-2xl bg-white p-4">
              <p className="text-sm font-bold text-slate-500">
                Main Question
              </p>
              <p className="mt-2 font-bold text-blue-900">
                Where was the production carried out?
              </p>
            </div>
            <p className="mt-4 leading-7 text-slate-600">
              A foreign-owned factory operating in India contributes to
              India's GDP because its production takes place in India.
            </p>
          </article>

          <article className="rounded-3xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-white p-6 sm:p-8">
            <div className="inline-flex rounded-2xl bg-emerald-100 p-3 text-emerald-800">
              <Globe2 className="h-7 w-7" />
            </div>
            <h3 className="mt-4 text-2xl font-bold text-slate-950">
              GNP / GNI
            </h3>
            <p className="mt-1 font-bold text-emerald-800">
              Gross National Product / Gross National Income
            </p>
            <p className="mt-4 leading-7 text-slate-600">
              GNP is the traditional term for a closely related gross
              national measure. Modern national accounts commonly use
              GNI, which adjusts GDP for net primary income from abroad.
            </p>
            <div className="mt-5 rounded-2xl bg-white p-4">
              <p className="text-sm font-bold text-slate-500">
                Main Question
              </p>
              <p className="mt-2 font-bold text-emerald-900">
                What primary income accrues to resident units?
              </p>
            </div>
            <p className="mt-4 leading-7 text-slate-600">
              Income received by Indian residents from foreign investments
              can increase India's GNI, while primary income payable to
              non-residents can reduce it relative to GDP.
            </p>
          </article>
        </div>

        <div className="mt-7 rounded-2xl border border-amber-200 bg-amber-50 p-5">
          <div className="flex items-start gap-3">
            <Lightbulb className="mt-1 h-5 w-5 shrink-0 text-amber-700" />
            <div>
              <p className="font-bold text-amber-950">
                Important Terminology
              </p>
              <p className="mt-2 leading-7 text-amber-950">
                GNP is often taught in textbooks, while GNI is commonly used
                in modern national accounts. The formula below uses GNI,
                the modern national-income measure corresponding to the
                traditional GNP concept. National accounts use residence
                rules, not simply citizenship or a company's brand name.
              </p>
            </div>
          </div>
        </div>
      </section>
<AdSlot />
      {/* Colorful diagram */}
      <section className="border-y border-indigo-100 bg-gradient-to-br from-indigo-50 via-white to-blue-50 py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-950 sm:text-3xl">
            GDP vs GNP: Visual Explanation
          </h2>
          <p className="mt-4 max-w-3xl leading-8 text-slate-600">
            Imagine an economy connected to the rest of the world through
            wages, interest, dividends, and other primary income flows.
            GDP measures domestic production first; GNI then adjusts that
            figure for net primary income flows.
          </p>

          <div className="mt-8 grid items-stretch gap-4 md:grid-cols-[1fr_auto_1fr_auto_1fr] md:items-center">
            <div className="rounded-3xl border border-blue-200 bg-white p-5 text-center shadow-sm">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-800">
                <Factory className="h-7 w-7" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-slate-950">
                Domestic Production
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Goods and services produced within India's economic territory.
              </p>
              <div className="mt-4 rounded-xl bg-blue-50 px-3 py-2 font-bold text-blue-900">
                GDP
              </div>
            </div>

            <div className="flex justify-center text-indigo-500">
              <ArrowRight className="hidden h-8 w-8 md:block" />
              <ArrowDown className="h-8 w-8 md:hidden" />
            </div>

            <div className="rounded-3xl border border-violet-200 bg-white p-5 text-center shadow-sm">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-100 text-violet-800">
                <ArrowLeftRight className="h-7 w-7" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-slate-950">
                Cross-Border Primary Income
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Income received from abroad minus income payable abroad.
              </p>
              <div className="mt-4 rounded-xl bg-violet-50 px-3 py-2 font-bold text-violet-900">
                Net Primary Income
              </div>
            </div>

            <div className="flex justify-center text-emerald-600">
              <ArrowRight className="hidden h-8 w-8 md:block" />
              <ArrowDown className="h-8 w-8 md:hidden" />
            </div>

            <div className="rounded-3xl border border-emerald-200 bg-white p-5 text-center shadow-sm">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-800">
                <Globe2 className="h-7 w-7" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-slate-950">
                National Income Measure
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                GDP adjusted for the net primary income flow.
              </p>
              <div className="mt-4 rounded-xl bg-emerald-50 px-3 py-2 font-bold text-emerald-900">
                GNI / Traditional GNP
              </div>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-indigo-200 bg-white p-5">
            <p className="text-center text-lg font-bold text-indigo-950">
              GNI = GDP + Primary Income Received From Abroad
              − Primary Income Paid Abroad
            </p>
            <p className="mt-2 text-center text-sm leading-6 text-slate-600">
              If receipts exceed payments, GNI is higher than GDP. If
              payments exceed receipts, GNI is lower than GDP.
            </p>
          </div>
        </div>
      </section>

      {/* Formula */}
      <section
        id="formula"
        className="mx-auto max-w-6xl scroll-mt-8 px-4 py-14 sm:px-6 sm:py-16 lg:px-8"
      >
        <h2 className="text-2xl font-bold text-slate-950 sm:text-3xl">
          GDP vs GNP Formula
        </h2>
        <p className="mt-4 max-w-3xl leading-8 text-slate-600">
          To calculate the national gross measure, start with GDP and adjust
          it for primary income transactions between residents and the rest
          of the world.
        </p>

        <div className="mt-7 grid gap-5 md:grid-cols-2">
          <div className="rounded-3xl border border-blue-200 bg-blue-50 p-6">
            <p className="font-bold text-blue-900">GDP Formula</p>
            <p className="mt-3 text-xl font-bold text-slate-950">
              GDP = Domestic Production Value
            </p>
            <p className="mt-3 leading-7 text-slate-600">
              In practice, national statisticians calculate GDP through
              production, expenditure, and income approaches, using national
              accounting rules to avoid double counting.
            </p>
          </div>

          <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6">
            <p className="font-bold text-emerald-900">GNI / Traditional GNP Formula</p>
            <p className="mt-3 text-xl font-bold text-slate-950">
              GNI = GDP + Net Primary Income From Abroad
            </p>
            <p className="mt-3 leading-7 text-slate-600">
              Net primary income includes relevant cross-border compensation
              of employees and property income, such as interest and
              dividends, under national accounting rules.
            </p>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5">
          <p className="font-bold text-amber-950">
            Do Not Confuse Income With Remittances
          </p>
          <p className="mt-2 leading-7 text-amber-950">
            Money sent home by a relative working abroad is not automatically
            primary income. Personal remittances are generally classified as
            transfers, not primary income, and therefore are not simply added
            to GNI. The classification depends on the nature of the payment
            and the relevant residence rules.
          </p>
        </div>
      </section>

      {/* Worked calculations */}
      <section
        id="calculation"
        className="border-y border-slate-200 bg-slate-50 py-14 sm:py-16"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-950 sm:text-3xl">
            GDP vs GNP: Worked Calculations
          </h2>
          <p className="mt-4 max-w-3xl leading-8 text-slate-600">
            These fictional examples use realistic types of economic
            transactions to demonstrate the calculation. The figures are
            illustrative and are not official Indian statistics.
          </p>

          <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
            <div className="flex items-start gap-3">
              <div className="rounded-2xl bg-blue-100 p-3 text-blue-800">
                <Landmark className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-950">
                  Example 1: A Country With Net Income Payments Abroad
                </h3>
                <p className="mt-2 leading-7 text-slate-600">
                  Suppose a fictional country has domestic production worth
                  ₹100 lakh crore. Residents receive ₹4 lakh crore of primary
                  income from abroad, while ₹9 lakh crore of primary income
                  is payable to non-residents.
                </p>
              </div>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl bg-blue-50 p-5">
                <p className="text-sm font-bold text-blue-800">GDP</p>
                <p className="mt-2 text-2xl font-bold text-slate-950">
                  ₹100 lakh crore
                </p>
              </div>
              <div className="rounded-2xl bg-emerald-50 p-5">
                <p className="text-sm font-bold text-emerald-800">
                  Income Received
                </p>
                <p className="mt-2 text-2xl font-bold text-slate-950">
                  ₹4 lakh crore
                </p>
              </div>
              <div className="rounded-2xl bg-rose-50 p-5">
                <p className="text-sm font-bold text-rose-800">
                  Income Payable
                </p>
                <p className="mt-2 text-2xl font-bold text-slate-950">
                  ₹9 lakh crore
                </p>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-indigo-200 bg-indigo-50 p-5 sm:p-6">
              <p className="font-bold text-indigo-950">Step-By-Step Calculation</p>
              <div className="mt-4 space-y-2 text-slate-700">
                <p>Net primary income from abroad = ₹4 − ₹9 lakh crore</p>
                <p className="font-bold text-rose-800">
                  Net primary income = −₹5 lakh crore
                </p>
                <p>GNI = GDP + Net primary income from abroad</p>
                <p className="text-xl font-bold text-indigo-950">
                  GNI = ₹100 − ₹5 = ₹95 lakh crore
                </p>
              </div>
            </div>

            <p className="mt-5 leading-7 text-slate-600">
              In this example, GDP is higher than GNI because more primary
              income is payable abroad than received from abroad.
            </p>
          </div>

          <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
            <div className="flex items-start gap-3">
              <div className="rounded-2xl bg-emerald-100 p-3 text-emerald-800">
                <TrendingUp className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-950">
                  Example 2: A Country Receiving More Primary Income
                </h3>
                <p className="mt-2 leading-7 text-slate-600">
                  Now suppose another fictional country has GDP of ₹80 lakh
                  crore. Its residents receive ₹7 lakh crore in primary
                  income from abroad and pay ₹3 lakh crore to non-residents.
                </p>
              </div>
            </div>

            <div className="mt-6 rounded-2xl bg-gradient-to-r from-blue-50 via-violet-50 to-emerald-50 p-5 sm:p-6">
              <p className="font-bold text-slate-950">Calculation</p>
              <div className="mt-3 space-y-2 leading-7 text-slate-700">
                <p>Net primary income = ₹7 − ₹3 = ₹4 lakh crore</p>
                <p>GNI = ₹80 + ₹4 lakh crore</p>
                <p className="text-2xl font-bold text-emerald-800">
                  GNI = ₹84 lakh crore
                </p>
              </div>
            </div>

            <p className="mt-5 leading-7 text-slate-600">
              Here, GNI is higher than GDP because the country receives more
              primary income from abroad than it pays to non-residents.
            </p>
          </div>
        </div>
      </section>
<AdSlot />
      {/* Real-world examples */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <h2 className="text-2xl font-bold text-slate-950 sm:text-3xl">
          Real-World Examples: India And Other Countries
        </h2>
        <p className="mt-4 max-w-3xl leading-8 text-slate-600">
          The following examples explain how the concepts apply in the real
          world. They describe the direction of the accounting effect, not
          the actual value of a particular company's contribution.
        </p>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <article className="rounded-3xl border border-blue-200 bg-gradient-to-br from-blue-50 to-white p-6">
            <div className="inline-flex rounded-2xl bg-blue-100 p-3 text-blue-800">
              <Building2 className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-xl font-bold text-slate-950">
              1. A Foreign-Owned Factory In India
            </h3>
            <p className="mt-3 leading-7 text-slate-600">
              Imagine a foreign company operating a factory in India. The
              factory's production contributes to India's GDP because the
              production takes place in India.
            </p>
            <div className="mt-4 rounded-2xl bg-white p-4">
              <p className="font-bold text-blue-900">GDP Effect</p>
              <p className="mt-1 leading-7 text-slate-600">
                Production in India is included in India's GDP.
              </p>
              <p className="mt-3 font-bold text-emerald-900">GNI Effect</p>
              <p className="mt-1 leading-7 text-slate-600">
                Primary income payable to non-resident owners can make India's
                GNI lower relative to GDP, all else equal.
              </p>
            </div>
          </article>

          <article className="rounded-3xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-white p-6">
            <div className="inline-flex rounded-2xl bg-emerald-100 p-3 text-emerald-800">
              <Globe2 className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-xl font-bold text-slate-950">
              2. An Indian Resident Earns Investment Income Abroad
            </h3>
            <p className="mt-3 leading-7 text-slate-600">
              Suppose an Indian resident receives interest or dividends from
              an eligible overseas investment. The income may count as primary
              income received from abroad under national accounting rules.
            </p>
            <div className="mt-4 rounded-2xl bg-white p-4">
              <p className="font-bold text-blue-900">GDP Effect</p>
              <p className="mt-1 leading-7 text-slate-600">
                The overseas production itself is not added to India's GDP
                merely because an Indian resident receives investment income.
              </p>
              <p className="mt-3 font-bold text-emerald-900">GNI Effect</p>
              <p className="mt-1 leading-7 text-slate-600">
                The eligible primary income received can increase India's GNI
                relative to GDP, all else equal.
              </p>
            </div>
          </article>

          <article className="rounded-3xl border border-violet-200 bg-gradient-to-br from-violet-50 to-white p-6">
            <div className="inline-flex rounded-2xl bg-violet-100 p-3 text-violet-800">
              <Wallet className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-xl font-bold text-slate-950">
              3. Money Sent Home By An Overseas Worker
            </h3>
            <p className="mt-3 leading-7 text-slate-600">
              A worker living abroad may send money to family in India. Such
              remittances are generally classified as transfers rather than
              primary income.
            </p>
            <div className="mt-4 rounded-2xl bg-white p-4">
              <p className="font-bold text-violet-900">Key Lesson</p>
              <p className="mt-1 leading-7 text-slate-600">
                Do not automatically add all remittances to GNI. The worker's
                residence status and the nature of the payment matter.
              </p>
            </div>
          </article>

          <article className="rounded-3xl border border-amber-200 bg-gradient-to-br from-amber-50 to-white p-6">
            <div className="inline-flex rounded-2xl bg-amber-100 p-3 text-amber-800">
              <Factory className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-xl font-bold text-slate-950">
              4. An Indian Business Operates Overseas
            </h3>
            <p className="mt-3 leading-7 text-slate-600">
              An Indian-headquartered group may own a subsidiary producing
              goods in another country. The subsidiary's production generally
              contributes to that country's GDP, because the subsidiary is
              usually a resident producer there.
            </p>
            <div className="mt-4 rounded-2xl bg-white p-4">
              <p className="font-bold text-amber-900">Key Lesson</p>
              <p className="mt-1 leading-7 text-slate-600">
                The overseas subsidiary's output is not automatically part
                of India's GDP. Certain primary income accruing to Indian
                residents may affect India's GNI.
              </p>
            </div>
          </article>
        </div>

        <p className="mt-6 text-sm leading-6 text-slate-500">
          Note: International accounting distinguishes resident units from
          non-resident units. Ownership, incorporation, tax status, and
          residence can interact in complex ways; the examples above are
          simplified explanations.
        </p>
      </section>

      {/* Importance */}
      <section className="border-y border-emerald-100 bg-gradient-to-br from-emerald-50 via-white to-blue-50 py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-950 sm:text-3xl">
            Why Are GDP And GNP Both Important?
          </h2>
          <p className="mt-4 max-w-3xl leading-8 text-slate-600">
            Neither measure answers every economic question. GDP is central
            to understanding domestic production, while GNI helps show how
            cross-border primary income changes the income associated with
            the resident economy.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <div className="rounded-3xl border border-blue-200 bg-white p-6">
              <h3 className="text-xl font-bold text-blue-950">
                Why GDP Is Important
              </h3>
              <ul className="mt-5 space-y-4">
                {[
                  "Measures the size of domestic economic activity.",
                  "Helps track economic growth over time.",
                  "Shows which industries contribute to domestic production.",
                  "Supports decisions about infrastructure, jobs, and economic policy.",
                  "Helps businesses assess market conditions and domestic demand.",
                ].map((item) => (
                  <li key={item} className="flex gap-3 leading-7 text-slate-600">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-blue-700" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-emerald-200 bg-white p-6">
              <h3 className="text-xl font-bold text-emerald-950">
                Why GNI / Traditional GNP Is Important
              </h3>
              <ul className="mt-5 space-y-4">
                {[
                  "Shows how net primary income from abroad affects national income.",
                  "Helps compare domestic production with income accruing to resident units.",
                  "Highlights the impact of cross-border investment income and employee compensation.",
                  "Can be useful when net income flows across borders are substantial.",
                  "Complements GDP when studying a country's links with the global economy.",
                ].map((item) => (
                  <li key={item} className="flex gap-3 leading-7 text-slate-600">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-emerald-700" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
<AdSlot />
      {/* Why not GDP alone or GNP alone */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <h2 className="text-2xl font-bold text-slate-950 sm:text-3xl">
          Why GDP Alone Is Not Enough — And Why GNP Alone Is Not Enough
        </h2>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <article className="rounded-3xl border border-rose-200 bg-gradient-to-br from-rose-50 to-white p-6">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-rose-100 p-3 text-rose-800">
                <XCircle className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-950">
                If We Look At GDP Only
              </h3>
            </div>
            <ul className="mt-5 space-y-3 leading-7 text-slate-600">
              <li>
                GDP does not directly show how much primary income residents
                receive from overseas investments and work.
              </li>
              <li>
                It does not subtract primary income payable to non-residents
                to calculate GNI.
              </li>
              <li>
                Two countries with similar GDP can have different net primary
                income flows from abroad.
              </li>
            </ul>
            <div className="mt-5 rounded-2xl bg-white p-4">
              <p className="font-bold text-rose-900">Example</p>
              <p className="mt-2 leading-7 text-slate-600">
                A country with large payments of investment income to
                non-residents may have GNI below GDP. GDP alone does not show
                that difference.
              </p>
            </div>
          </article>

          <article className="rounded-3xl border border-amber-200 bg-gradient-to-br from-amber-50 to-white p-6">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-amber-100 p-3 text-amber-800">
                <HelpCircle className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-950">
                If We Look At GNP / GNI Only
              </h3>
            </div>
            <ul className="mt-5 space-y-3 leading-7 text-slate-600">
              <li>
                GNI does not replace the need to measure where domestic
                production actually takes place.
              </li>
              <li>
                It may not reveal which domestic industries are growing,
                shrinking, or creating output.
              </li>
              <li>
                It does not by itself show income inequality, typical wages,
                household living standards, or job quality.
              </li>
            </ul>
            <div className="mt-5 rounded-2xl bg-white p-4">
              <p className="font-bold text-amber-900">Example</p>
              <p className="mt-2 leading-7 text-slate-600">
                A country can receive substantial primary income from abroad,
                but policymakers still need GDP and sector data to understand
                production and employment inside the country.
              </p>
            </div>
          </article>
        </div>

        <div className="mt-7 rounded-3xl border border-indigo-200 bg-gradient-to-r from-indigo-50 via-white to-blue-50 p-6 sm:p-8">
          <div className="flex items-start gap-3">
            <Scale className="mt-1 h-6 w-6 shrink-0 text-indigo-800" />
            <div>
              <h3 className="text-xl font-bold text-slate-950">
                The Best Approach: Use Both
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                GDP helps explain domestic production; GNI helps explain the
                effect of net primary income flows on national income. Using
                both gives a fuller picture than relying on either indicator
                alone. For living standards, also examine real per-capita
                income, inequality, employment, and other social indicators.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="border-y border-slate-200 bg-slate-50 py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-950 sm:text-3xl">
            GDP vs GNP: Key Differences
          </h2>

          <div className="mt-7 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
            <table className="w-full min-w-[650px] text-left text-sm">
              <thead className="bg-indigo-950 text-white">
                <tr>
                  <th className="px-5 py-4 font-bold">Basis</th>
                  <th className="px-5 py-4 font-bold">GDP</th>
                  <th className="px-5 py-4 font-bold">GNP / GNI</th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    "Main focus",
                    "Domestic production",
                    "GDP adjusted for net primary income from abroad",
                  ],
                  [
                    "Core question",
                    "Where did production occur?",
                    "What primary income accrues to resident units?",
                  ],
                  [
                    "Starting point",
                    "Value of domestic production",
                    "GDP plus net primary income from abroad",
                  ],
                  [
                    "Foreign-owned factory in India",
                    "Its Indian production contributes to GDP",
                    "Income payable to non-resident owners can affect GNI",
                  ],
                  [
                    "Primary income received from abroad",
                    "Not added to GDP just because it is received",
                    "Added, subject to national accounting rules",
                  ],
                  [
                    "Primary income paid abroad",
                    "Not directly subtracted from GDP",
                    "Subtracted in calculating GNI",
                  ],
                  [
                    "Best use",
                    "Domestic output and economic growth",
                    "National income and cross-border primary income flows",
                  ],
                ].map(([basis, gdp, gni]) => (
                  <tr key={basis} className="border-t border-slate-100">
                    <td className="px-5 py-4 font-bold text-slate-900">
                      {basis}
                    </td>
                    <td className="px-5 py-4 leading-6 text-slate-600">
                      {gdp}
                    </td>
                    <td className="px-5 py-4 leading-6 text-slate-600">
                      {gni}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Limitations */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <h2 className="text-2xl font-bold text-slate-950 sm:text-3xl">
          Limitations Of GDP And GNP
        </h2>
        <p className="mt-4 max-w-3xl leading-8 text-slate-600">
          Both measures are useful, but neither tells the complete story of
          a country's economic well-being.
        </p>

        <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Income Inequality",
              text: "A high GDP or GNI does not mean income is shared equally among residents.",
              color: "blue",
            },
            {
              title: "Population Size",
              text: "A large total figure does not reveal average output or income per person.",
              color: "violet",
            },
            {
              title: "Unpaid Work",
              text: "Many unpaid household activities are not included in GDP in the same way as market production.",
              color: "emerald",
            },
            {
              title: "Environmental Costs",
              text: "Economic production can rise even when pollution or environmental damage also increases.",
              color: "amber",
            },
            {
              title: "Price Changes",
              text: "Nominal figures can rise because prices rise, so real measures are important for growth comparisons.",
              color: "rose",
            },
            {
              title: "Living Standards",
              text: "Neither indicator directly measures health, education, leisure, personal wealth, or quality of life.",
              color: "indigo",
            },
          ].map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-white p-5"
            >
              <h3 className="text-lg font-bold text-slate-950">
                {item.title}
              </h3>
              <p className="mt-2 leading-7 text-slate-600">{item.text}</p>
            </article>
          ))}
        </div>
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
                q: "Is GNP the same as GNI?",
                a: "GNP is the traditional term for a gross national product measure. Modern national accounts commonly use GNI, which is GDP adjusted for net primary income from abroad. Terminology and presentation can vary by statistical framework.",
              },
              {
                q: "Can GNP be higher than GDP?",
                a: "Yes. If primary income received from abroad exceeds primary income payable to non-residents, GNI can be higher than GDP.",
              },
              {
                q: "Can GDP be higher than GNP?",
                a: "Yes. If primary income payable abroad exceeds primary income received from abroad, GNI can be lower than GDP.",
              },
              {
                q: "Does money sent home by Indians working abroad count toward GNP?",
                a: "Not automatically. Remittances are generally classified as transfers rather than primary income. Whether a payment affects GNI depends on its nature and the residence status of the people or units involved.",
              },
              {
                q: "Which is more important, GDP or GNP?",
                a: "Neither is universally more important. GDP is essential for measuring domestic production; GNI helps explain net primary income flows. Economists choose the measure that fits the question.",
              },
              {
                q: "Does a higher GDP mean people are richer?",
                a: "Not necessarily. Total GDP can rise because the population grows or because prices rise. Real GDP per capita, income distribution, wages, and other indicators help provide a fuller picture.",
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

     
<AdSlot />
      {/* Sources */}
      <section className="border-t border-slate-200 bg-slate-50 py-10 text-center">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl font-bold text-slate-950">
            Official Sources For Further Reading
          </h2>
          <p className="mt-3  leading-7 text-slate-600 text-center">
            For formal definitions and national accounting methodology, refer
            to India's Ministry of Statistics and Programme Implementation
            (MoSPI) and the Government of India's published national accounts
            explanations.
          </p>
          <ul className="mt-4 space-y-3">
            <li>
              <a
                href="https://www.mospi.gov.in/publication/national-accounts-statistics-sources-and-methods-"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-blue-800 underline decoration-blue-300 underline-offset-4 hover:text-blue-950"
              >
                MoSPI — National Accounts Statistics: Sources And Methods
              </a>
            </li>
            <li>
              <a
                href="https://www.pib.gov.in/PressReleasePage.aspx?PRID=2233691"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-blue-800 underline decoration-blue-300 underline-offset-4 hover:text-blue-950"
              >
                Press Information Bureau — National Accounts Formulae
              </a>
            </li>
          </ul>
          <p className="mt-5 text-sm leading-6 text-slate-500">
            Educational content. Worked calculation figures are fictional
            examples and should not be interpreted as official national data.
          </p>
        </div>
      </section>
    </main>
  );
}
