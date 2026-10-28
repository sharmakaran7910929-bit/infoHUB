
import Link from "next/link";
import {
  Wallet,
  Landmark,
  TrendingUp,
  TrendingDown,
  IndianRupee,
  Calculator,
  BookOpen,
  AlertTriangle,
  CheckCircle2,
  Building2,
  GraduationCap,
  HeartPulse,
  BriefcaseBusiness,
  ArrowRight,
  BarChart3,
  PiggyBank,
  CircleDollarSign,
  Lightbulb,
  HandCoins,
  ReceiptText,
  Info,
  CalendarDays,
  ExternalLink,
  Scale,
  Factory,
  ShieldCheck,
} from "lucide-react";
import AdSlot from "../../../components/AdSlot";

export const metadata = {
  title: "Budget Deficit: Meaning, Types, Effects & India Data | PriceTag HUB",
  description:
    "Understand budget deficit, its meaning, formula, types, importance and effects with practical examples. Explore the latest available official Union Government deficit figures for India.",
  alternates: {
    canonical: "https://www.pricetag.co.in/economics/budget-deficit",
  },
};

const relatedTopics = [
  {
    title: "Fiscal Deficit",
    description:
      "Understand government borrowing needs, the formula and its economic implications.",
    href: "/economics/budget-deficit/fiscal-deficit",
    icon: TrendingUp,
    color: "blue",
  },
  {
    title: "Revenue Deficit",
    description:
      "Learn what happens when regular government expenditure exceeds revenue receipts.",
    href: "/economics/budget-deficit/revenue-deficit",
    icon: ReceiptText,
    color: "orange",
  },
  {
    title: "Budget Deficit Vs Fiscal Deficit",
    description:
      "Understand the difference between these terms, particularly in the Indian context.",
    href: "/economics/budget-deficit/budget-deficit-vs-fiscal-deficit",
    icon: Scale,
    color: "violet",
  },
  {
    title: "Fiscal Deficit Vs Revenue Deficit",
    description:
      "Compare the formulas, meanings and implications of the two major deficit measures.",
    href: "/economics/budget-deficit/fiscal-deficit-vs-revenue-deficit",
    icon: BarChart3,
    color: "emerald",
  },
  {
    title: "Primary Deficit",
    description:
      "See how the fiscal deficit changes when interest payments on existing debt are excluded.",
    href: "/economics/budget-deficit/primary-deficit",
    icon: Calculator,
    color: "cyan",
  },
];

const deficitTypes = [
  {
    number: "01",
    title: "Fiscal Deficit",
    color: "blue",
    icon: Landmark,
    formula:
      "Total Expenditure − Total Non-Debt Receipts",
    description:
      "Shows how much the government needs to finance through borrowing and other financing sources when non-debt receipts do not cover total expenditure.",
    href: "/economics/budget-deficit/fiscal-deficit",
  },
  {
    number: "02",
    title: "Revenue Deficit",
    color: "orange",
    icon: ReceiptText,
    formula: "Revenue Expenditure − Revenue Receipts",
    description:
      "Occurs when the government's regular revenue expenditure exceeds its revenue receipts.",
    href: "/economics/budget-deficit/revenue-deficit",
  },
  {
    number: "03",
    title: "Primary Deficit",
    color: "violet",
    icon: Calculator,
    formula: "Fiscal Deficit − Interest Payments",
    description:
      "Indicates the current year's fiscal gap after excluding interest payments on accumulated government debt.",
    href: "/economics/budget-deficit/primary-deficit",
  },
  {
    number: "04",
    title: "Effective Revenue Deficit",
    color: "emerald",
    icon: Building2,
    formula:
      "Revenue Deficit − Grants for Creation of Capital Assets",
    description:
      "Adjusts the revenue deficit for grants provided to create capital assets, as defined in India's budget documents.",
    href: "https://www.indiabudget.gov.in/",
    external: true,
  },
];

const effects = [
  {
    icon: Factory,
    title: "Infrastructure And Economic Growth",
    color: "blue",
    text: "Borrowing can help finance roads, railways, power systems and other productive infrastructure that supports future economic activity.",
  },
  {
    icon: TrendingUp,
    title: "Demand And Employment",
    color: "emerald",
    text: "Higher public spending can increase demand for goods and services, supporting business activity and employment when spare capacity exists.",
  },
  {
    icon: CircleDollarSign,
    title: "Interest Costs And Public Debt",
    color: "violet",
    text: "Persistent borrowing can increase outstanding debt and future interest obligations, leaving less room for other public services.",
  },
  {
    icon: AlertTriangle,
    title: "Inflationary Pressure",
    color: "orange",
    text: "If additional spending pushes demand beyond the economy's ability to supply goods and services, it may add to inflationary pressure.",
  },
  {
    icon: PiggyBank,
    title: "Private Investment",
    color: "cyan",
    text: "In some circumstances, government borrowing can push up interest rates and make private borrowing more expensive. This is known as the crowding-out effect.",
  },
  {
    icon: ShieldCheck,
    title: "Financial Confidence",
    color: "rose",
    text: "A credible medium-term fiscal plan can support confidence in public finances. Risks depend on the size, financing, purpose and sustainability of borrowing.",
  },
];

const colors = {
  blue: {
    icon: "bg-blue-100 text-blue-700",
    border: "border-blue-200",
    number: "bg-blue-600",
    soft: "bg-blue-50",
    text: "text-blue-700",
  },
  orange: {
    icon: "bg-orange-100 text-orange-700",
    border: "border-orange-200",
    number: "bg-orange-500",
    soft: "bg-orange-50",
    text: "text-orange-700",
  },
  violet: {
    icon: "bg-violet-100 text-violet-700",
    border: "border-violet-200",
    number: "bg-violet-600",
    soft: "bg-violet-50",
    text: "text-violet-700",
  },
  emerald: {
    icon: "bg-emerald-100 text-emerald-700",
    border: "border-emerald-200",
    number: "bg-emerald-600",
    soft: "bg-emerald-50",
    text: "text-emerald-700",
  },
  cyan: {
    icon: "bg-cyan-100 text-cyan-700",
    border: "border-cyan-200",
    number: "bg-cyan-600",
    soft: "bg-cyan-50",
    text: "text-cyan-700",
  },
  rose: {
    icon: "bg-rose-100 text-rose-700",
    border: "border-rose-200",
    number: "bg-rose-600",
    soft: "bg-rose-50",
    text: "text-rose-700",
  },
};

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mb-8 max-w-3xl">
      {eyebrow && (
        <p className="mb-2 text-sm font-bold uppercase tracking-wider text-blue-700">
          {eyebrow}
        </p>
      )}
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

function TopicLink({ href, children, external = false }) {
  const content = (
    <span className="inline-flex items-center gap-1 font-bold text-blue-700 hover:text-blue-900">
      {children}
      {external ? (
        <ExternalLink className="h-4 w-4" />
      ) : (
        <ArrowRight className="h-4 w-4" />
      )}
    </span>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer">
        {content}
      </a>
    );
  }

  return <Link href={href}>{content}</Link>;
}

export default function BudgetDeficitPage() {
  return (
    <main className="min-h-screen bg-white text-slate-800 p-5">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-blue-100 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.2fr_0.8fr] md:py-20 lg:px-8">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-3 py-1.5 text-sm font-bold text-blue-800 shadow-sm">
              <BookOpen className="h-4 w-4" />
              Economics · Public Finance · India
            </div>

            <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl">
              Budget Deficit: Meaning, Types, Importance And Effects
            </h1>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              What happens when a government spends more than it receives?
              Learn how budget deficits work, why governments borrow, how
              deficits affect the economy, and what India's latest official
              accounts tell us.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#meaning"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-700 px-5 py-3 font-bold text-white transition hover:bg-blue-800"
              >
                Understand Budget Deficit
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#india-data"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 font-bold text-slate-800 transition hover:border-blue-400"
              >
                India's Latest Data
                <IndianRupee className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className="rounded-3xl border border-blue-100 bg-white p-6 shadow-xl shadow-blue-100/60 sm:p-8">
              <div className="flex items-center justify-between">
                <div className="rounded-2xl bg-blue-100 p-3 text-blue-700">
                  <Landmark className="h-8 w-8" />
                </div>
                <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-800">
                  Simple Example
                </span>
              </div>
              <h2 className="mt-5 text-xl font-bold text-slate-950">
                A Government Budget
              </h2>
              <div className="mt-5 space-y-4">
                <div>
                  <div className="mb-1 flex items-center justify-between text-sm">
                    <span className="font-semibold text-slate-600">
                      Receipts
                    </span>
                    <span className="font-bold text-emerald-700">₹900 Cr</span>
                  </div>
                  <div className="h-3 overflow-hidden rounded-full bg-slate-100">
                    <div className="h-full w-[75%] rounded-full bg-emerald-500" />
                  </div>
                </div>
                <div>
                  <div className="mb-1 flex items-center justify-between text-sm">
                    <span className="font-semibold text-slate-600">
                      Expenditure
                    </span>
                    <span className="font-bold text-blue-700">₹1,200 Cr</span>
                  </div>
                  <div className="h-3 overflow-hidden rounded-full bg-slate-100">
                    <div className="h-full w-full rounded-full bg-blue-600" />
                  </div>
                </div>
              </div>
              <div className="mt-6 rounded-2xl border border-rose-200 bg-rose-50 p-4">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-rose-100 p-2 text-rose-700">
                    <Wallet className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-rose-800">
                      Spending Gap
                    </p>
                    <p className="text-2xl font-bold text-rose-900">
                      ₹300 Crore
                    </p>
                  </div>
                </div>
              </div>
              <p className="mt-4 text-xs leading-5 text-slate-500">
                Illustrative figures for learning, not actual government data.
              </p>
            </div>
            <div className="absolute -right-3 -top-4 -z-10 h-28 w-28 rounded-full bg-indigo-200/70 blur-2xl" />
            <div className="absolute -bottom-5 -left-5 -z-10 h-32 w-32 rounded-full bg-cyan-200/60 blur-2xl" />
          </div>
        </div>
      </section>

      {/* Quick definition */}
      <section id="meaning" className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="The Basic Idea"
          title="What Is A Budget Deficit?"
          description="A budget deficit occurs when expenditure is greater than the receipts counted under the relevant budget measure during a particular period."
        />

        <div className="grid gap-5 md:grid-cols-3">
          <div className="rounded-2xl border border-blue-200 bg-blue-50 p-6">
            <div className="mb-4 inline-flex rounded-xl bg-blue-100 p-3 text-blue-700">
              <Landmark className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-950">
              Government Spending
            </h3>
            <p className="mt-2 leading-7 text-slate-600">
              Money used for public services, infrastructure, administration,
              welfare programmes and interest payments.
            </p>
          </div>

          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
            <div className="mb-4 inline-flex rounded-xl bg-emerald-100 p-3 text-emerald-700">
              <HandCoins className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-950">
              Government Receipts
            </h3>
            <p className="mt-2 leading-7 text-slate-600">
              Tax revenue, fees, dividends and other receipts. For fiscal
              deficit calculations, debt receipts are excluded from non-debt
              receipts.
            </p>
          </div>

          <div className="rounded-2xl border border-rose-200 bg-rose-50 p-6">
            <div className="mb-4 inline-flex rounded-xl bg-rose-100 p-3 text-rose-700">
              <TrendingDown className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-950">
              The Deficit
            </h3>
            <p className="mt-2 leading-7 text-slate-600">
              The shortfall that must be managed through borrowing or other
              financing arrangements, depending on the measure used.
            </p>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5">
          <div className="flex items-start gap-3">
            <Info className="mt-1 h-5 w-5 shrink-0 text-amber-700" />
            <p className="leading-7 text-amber-950">
              <strong>Important for India:</strong> In everyday discussion,
              “budget deficit” is sometimes used broadly. India's official
              Union Budget prominently reports measures such as fiscal
              deficit, revenue deficit and primary deficit. These measures
              have different definitions, so they should not automatically
              be treated as interchangeable.
            </p>
          </div>
        </div>
      </section>
<AdSlot />
      {/* Formula and example */}
      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Formula And Calculation"
            title="How Is A Budget Deficit Calculated?"
            description="The exact formula depends on which deficit measure is being discussed. Start with a simple illustrative budget, then distinguish it from India's official fiscal deficit formula."
          />

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-indigo-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-indigo-100 p-3 text-indigo-700">
                  <Calculator className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-950">
                  Simple Budget Example
                </h3>
              </div>

              <div className="mt-6 space-y-3">
                <div className="flex items-center justify-between rounded-xl bg-slate-50 p-4">
                  <span className="font-semibold text-slate-700">
                    Total receipts
                  </span>
                  <span className="font-bold text-emerald-700">₹900 crore</span>
                </div>
                <div className="flex items-center justify-between rounded-xl bg-slate-50 p-4">
                  <span className="font-semibold text-slate-700">
                    Total expenditure
                  </span>
                  <span className="font-bold text-blue-700">₹1,200 crore</span>
                </div>
                <div className="rounded-xl border border-rose-200 bg-rose-50 p-4">
                  <p className="text-sm font-bold uppercase tracking-wide text-rose-800">
                    Illustrative Spending Gap
                  </p>
                  <p className="mt-1 text-2xl font-bold text-rose-900">
                    ₹1,200 − ₹900 = ₹300 crore
                  </p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-6 text-slate-500">
                This simplified example assumes the same receipt definition
                throughout. It is not a substitute for the formal fiscal
                deficit calculation.
              </p>
            </div>

            <div className="rounded-2xl border border-blue-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-blue-100 p-3 text-blue-700">
                  <BookOpen className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-950">
                  India's Fiscal Deficit Formula
                </h3>
              </div>

              <div className="mt-6 rounded-xl bg-blue-50 p-5">
                <p className="text-sm font-bold uppercase tracking-wide text-blue-800">
                  Official Budget Measure
                </p>
                <p className="mt-3 text-lg font-bold leading-8 text-blue-950">
                  Fiscal Deficit = Total Expenditure − Total Non-Debt Receipts
                </p>
              </div>

              <p className="mt-4 leading-7 text-slate-600">
                Non-debt receipts include revenue receipts and non-debt
                capital receipts. Borrowings are not counted as non-debt
                receipts, because borrowing is a way to finance the gap rather
                than income that avoids increasing liabilities.
              </p>

              <TopicLink href="/economics/budget-deficit/fiscal-deficit">
                Explore Fiscal Deficit
              </TopicLink>
            </div>
          </div>
        </div>
      </section>

      {/* Types */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Know The Different Measures"
          title="Types Of Budget Deficit"
          description="Economists and government budget documents use different deficit measures to answer different questions about public finances."
        />

        <div className="grid gap-5 sm:grid-cols-2">
          {deficitTypes.map((item) => {
            const Icon = item.icon;
            const theme = colors[item.color];

            return (
              <article
                key={item.title}
                className={`rounded-2xl border ${theme.border} bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md`}
              >
                <div className="flex items-start gap-4">
                  <div className={`rounded-xl p-3 ${theme.icon}`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span
                        className={`rounded-full px-2.5 py-1 text-xs font-bold text-white ${theme.number}`}
                      >
                        {item.number}
                      </span>
                      <h3 className="text-lg font-bold text-slate-950">
                        {item.title}
                      </h3>
                    </div>
                    <p className="mt-3 leading-7 text-slate-600">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className={`mt-5 rounded-xl p-4 ${theme.soft}`}>
                  <p className={`text-xs font-bold uppercase tracking-wide ${theme.text}`}>
                    Formula
                  </p>
                  <p className="mt-2 font-bold leading-6 text-slate-900">
                    {item.formula}
                  </p>
                </div>

                <div className="mt-4">
                  <TopicLink href={item.href} external={item.external}>
                    Learn About {item.title}
                  </TopicLink>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5">
          <p className="leading-7 text-slate-600">
            <strong className="text-slate-900">Terminology note:</strong>{" "}
            “Traditional budget deficit” has a specific historical meaning in
            India's public finance system. It is not simply another name for
            the current fiscal deficit measure. Read the comparison below to
            understand the distinction.
          </p>
          <div className="mt-3">
            <TopicLink href="/economics/budget-deficit/budget-deficit-vs-fiscal-deficit">
              Budget Deficit Vs Fiscal Deficit
            </TopicLink>
          </div>
        </div>
      </section>

      {/* India data */}
      <section id="india-data" className="border-y border-slate-200 bg-gradient-to-br from-slate-50 to-blue-50/60">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Official Indian Government Data"
            title="India's Latest Available Deficit Figures"
            description="The Controller General of Accounts publishes monthly Union Government accounts. The latest available report identified here covers the period up to August 2026."
          />

          <div className="mb-6 flex flex-wrap items-center gap-3 rounded-2xl border border-blue-200 bg-white p-4">
            <div className="rounded-xl bg-blue-100 p-3 text-blue-700">
              <CalendarDays className="h-6 w-6" />
            </div>
            <div className="flex-1">
              <p className="font-bold text-slate-950">
                Reporting Period: April–August 2026
              </p>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                Financial year 2026–27 · Figures are provisional actuals
                published by the CGA, not the full-year final outcome.
              </p>
            </div>
            <a
              href="https://cga.nic.in/writereaddata/MonthAccount/82026/DATA2627.htm"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-blue-200 px-3 py-2 text-sm font-bold text-blue-800 hover:bg-blue-50"
            >
              Official CGA Report
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            <article className="rounded-2xl border border-blue-200 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between gap-3">
                <div className="rounded-xl bg-blue-100 p-3 text-blue-700">
                  <Landmark className="h-6 w-6" />
                </div>
                <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-800">
                  41.9% Of Estimate
                </span>
              </div>
              <p className="mt-5 text-sm font-bold uppercase tracking-wide text-slate-500">
                Fiscal Deficit
              </p>
              <p className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
                ₹7.10 Lakh Cr
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Cumulative fiscal deficit up to August 2026.
              </p>
              <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-100">
                <div className="h-full w-[41.9%] rounded-full bg-blue-600" />
              </div>
              <p className="mt-2 text-xs text-slate-500">
                Annual budget estimate: ₹16.96 lakh crore
              </p>
            </article>

            <article className="rounded-2xl border border-orange-200 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between gap-3">
                <div className="rounded-xl bg-orange-100 p-3 text-orange-700">
                  <ReceiptText className="h-6 w-6" />
                </div>
                <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-bold text-orange-800">
                  46.5% Of Estimate
                </span>
              </div>
              <p className="mt-5 text-sm font-bold uppercase tracking-wide text-slate-500">
                Revenue Deficit
              </p>
              <p className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
                ₹2.76 Lakh Cr
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Revenue expenditure exceeded revenue receipts by this
                cumulative amount.
              </p>
              <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-100">
                <div className="h-full w-[46.5%] rounded-full bg-orange-500" />
              </div>
              <p className="mt-2 text-xs text-slate-500">
                Annual budget estimate: ₹5.92 lakh crore
              </p>
            </article>

            <article className="rounded-2xl border border-violet-200 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between gap-3">
                <div className="rounded-xl bg-violet-100 p-3 text-violet-700">
                  <Calculator className="h-6 w-6" />
                </div>
                <span className="rounded-full bg-violet-50 px-3 py-1 text-xs font-bold text-violet-800">
                  67.0% Of Estimate
                </span>
              </div>
              <p className="mt-5 text-sm font-bold uppercase tracking-wide text-slate-500">
                Primary Deficit
              </p>
              <p className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
                ₹1.95 Lakh Cr
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Fiscal deficit after subtracting interest payments.
              </p>
              <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-100">
                <div className="h-full w-[67%] rounded-full bg-violet-600" />
              </div>
              <p className="mt-2 text-xs text-slate-500">
                Annual budget estimate: ₹2.92 lakh crore
              </p>
            </article>
          </div>

          <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5">
            <div className="flex items-start gap-3">
              <AlertTriangle className="mt-1 h-5 w-5 shrink-0 text-amber-700" />
              <div>
                <h3 className="font-bold text-amber-950">
                  Does This Mean India Spent ₹7.10 Lakh Crore In August?
                </h3>
                <p className="mt-2 leading-7 text-amber-950">
                  No. The ₹7.10 lakh crore figure is the cumulative fiscal
                  deficit from April through August 2026. It is not the
                  deficit for August alone, nor is it the full-year deficit.
                  Monthly cash flows can move unevenly, so a single month's
                  deficit should not be used by itself to predict the final
                  annual result.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5">
            <h3 className="text-lg font-bold text-slate-950">
              How To Read The Figures
            </h3>
            <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-600">
              <li>
                <strong className="text-slate-900">Fiscal deficit:</strong>{" "}
                the government's financing gap after accounting for
                non-debt receipts.
              </li>
              <li>
                <strong className="text-slate-900">Revenue deficit:</strong>{" "}
                the excess of revenue expenditure over revenue receipts.
              </li>
              <li>
                <strong className="text-slate-900">Primary deficit:</strong>{" "}
                fiscal deficit minus interest payments.
              </li>
            </ul>
            <p className="mt-4 text-sm leading-6 text-slate-500">
              Source: Government of India, Controller General of Accounts,
              Union Government Accounts at a Glance, as at the end of August
              2026. Monthly figures are provisional and may be revised.
            </p>
            <a
              href="https://cga.nic.in/MonthDashboardReport/Published/list.aspx"
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-2 font-bold text-blue-700 hover:text-blue-900"
            >
              View CGA Monthly Accounts Dashboard
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
<AdSlot />
      {/* Importance */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why It Matters"
          title="Importance Of Understanding A Budget Deficit"
          description="A deficit is not automatically good or bad. Its importance depends on why the government is borrowing, how the money is used and whether public finances remain sustainable."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50/70 p-6">
            <div className="mb-4 inline-flex rounded-xl bg-emerald-100 p-3 text-emerald-700">
              <Building2 className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-950">
              Measures Public Investment
            </h3>
            <p className="mt-2 leading-7 text-slate-600">
              Helps readers assess how government spending and borrowing may
              support roads, transport, energy and other public infrastructure.
            </p>
          </div>

          <div className="rounded-2xl border border-blue-200 bg-blue-50/70 p-6">
            <div className="mb-4 inline-flex rounded-xl bg-blue-100 p-3 text-blue-700">
              <BarChart3 className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-950">
              Helps Evaluate Fiscal Policy
            </h3>
            <p className="mt-2 leading-7 text-slate-600">
              Shows how the government balances revenue, expenditure,
              borrowing and its planned fiscal path.
            </p>
          </div>

          <div className="rounded-2xl border border-violet-200 bg-violet-50/70 p-6">
            <div className="mb-4 inline-flex rounded-xl bg-violet-100 p-3 text-violet-700">
              <CircleDollarSign className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-950">
              Tracks Debt Pressure
            </h3>
            <p className="mt-2 leading-7 text-slate-600">
              Persistent deficits can add to public debt and future interest
              payments, which may constrain later budgets.
            </p>
          </div>

          <div className="rounded-2xl border border-orange-200 bg-orange-50/70 p-6">
            <div className="mb-4 inline-flex rounded-xl bg-orange-100 p-3 text-orange-700">
              <IndianRupee className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-950">
              Informs Investors And Businesses
            </h3>
            <p className="mt-2 leading-7 text-slate-600">
              Fiscal plans can influence expectations about government
              borrowing, interest rates, taxation and public-sector demand.
            </p>
          </div>

          <div className="rounded-2xl border border-cyan-200 bg-cyan-50/70 p-6">
            <div className="mb-4 inline-flex rounded-xl bg-cyan-100 p-3 text-cyan-700">
              <GraduationCap className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-950">
              Useful For Exams And Research
            </h3>
            <p className="mt-2 leading-7 text-slate-600">
              Fiscal deficit, revenue deficit and primary deficit are
              important concepts in economics, public finance and government
              budget analysis.
            </p>
          </div>

          <div className="rounded-2xl border border-rose-200 bg-rose-50/70 p-6">
            <div className="mb-4 inline-flex rounded-xl bg-rose-100 p-3 text-rose-700">
              <HeartPulse className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-950">
              Connects Budgets To Daily Life
            </h3>
            <p className="mt-2 leading-7 text-slate-600">
              Public spending and financing choices can affect infrastructure,
              employment opportunities, public services and the wider economy.
            </p>
          </div>
        </div>
      </section>

      {/* Effects */}
      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Economic Consequences"
            title="Effects Of A Budget Deficit On The Economy"
            description="The effects depend on economic conditions, the scale of the deficit, the source of financing and whether spending creates lasting economic value."
          />

          <div className="grid gap-5 md:grid-cols-2">
            {effects.map((item) => {
              const Icon = item.icon;
              const theme = colors[item.color];

              return (
                <article
                  key={item.title}
                  className={`rounded-2xl border ${theme.border} bg-white p-5 sm:p-6`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`shrink-0 rounded-xl p-3 ${theme.icon}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-950">
                        {item.title}
                      </h3>
                      <p className="mt-2 leading-7 text-slate-600">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-6 rounded-2xl border border-indigo-200 bg-indigo-50 p-5 sm:p-6">
            <div className="flex items-start gap-3">
              <Lightbulb className="mt-1 h-6 w-6 shrink-0 text-indigo-700" />
              <div>
                <h3 className="text-lg font-bold text-indigo-950">
                  Example: Borrowing For A Highway
                </h3>
                <p className="mt-2 leading-7 text-indigo-950">
                  Suppose a government borrows to build a highway that reduces
                  transport time and helps businesses move goods. The initial
                  borrowing increases the financing requirement, but the
                  highway may support productivity and economic activity over
                  many years. Whether the project is worthwhile depends on its
                  cost, benefits, financing and execution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
<AdSlot />
      {/* Real-world examples */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Examples"
          title="Budget Deficit Examples From Everyday Economics"
          description="These simplified examples show why governments may run deficits and why the result depends on how spending is financed and used."
        />

        <div className="grid gap-5 md:grid-cols-3">
          <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-5 text-white">
              <Building2 className="h-8 w-8" />
              <h3 className="mt-4 text-xl font-bold">
                Infrastructure Investment
              </h3>
            </div>
            <div className="p-5">
              <p className="leading-7 text-slate-600">
                The government builds a railway line or highway and finances
                part of the expenditure through borrowing because current
                non-debt receipts are insufficient.
              </p>
              <div className="mt-4 rounded-xl bg-blue-50 p-3 text-sm leading-6 text-blue-950">
                <strong>Possible benefit:</strong> Better connectivity and
                lower transport costs over time.
              </div>
            </div>
          </article>

          <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="bg-gradient-to-r from-emerald-600 to-teal-600 p-5 text-white">
              <HeartPulse className="h-8 w-8" />
              <h3 className="mt-4 text-xl font-bold">
                Emergency Relief
              </h3>
            </div>
            <div className="p-5">
              <p className="leading-7 text-slate-600">
                After severe flooding, the government increases relief,
                rehabilitation and repair spending before additional revenue
                is collected.
              </p>
              <div className="mt-4 rounded-xl bg-emerald-50 p-3 text-sm leading-6 text-emerald-950">
                <strong>Possible benefit:</strong> Faster relief and restoration
                of essential services.
              </div>
            </div>
          </article>

          <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="bg-gradient-to-r from-orange-500 to-rose-500 p-5 text-white">
              <Wallet className="h-8 w-8" />
              <h3 className="mt-4 text-xl font-bold">
                Recurring Spending Gap
              </h3>
            </div>
            <div className="p-5">
              <p className="leading-7 text-slate-600">
                A government repeatedly spends more on routine expenses and
                interest than its receipts can cover, leading to continued
                borrowing.
              </p>
              <div className="mt-4 rounded-xl bg-orange-50 p-3 text-sm leading-6 text-orange-950">
                <strong>Potential concern:</strong> Rising interest costs and
                reduced flexibility in future budgets.
              </div>
            </div>
          </article>
        </div>

        <p className="mt-5 text-sm leading-6 text-slate-500">
          These are illustrative scenarios, not claims that a specific
          government programme was financed entirely through borrowing.
        </p>
      </section>

      {/* Managing the deficit */}
      <section className="border-y border-slate-200 bg-gradient-to-br from-emerald-50 via-white to-blue-50">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Fiscal Management"
            title="How Can A Government Manage Its Budget Deficit?"
            description="Reducing a deficit does not always mean cutting every programme. Governments can combine revenue measures, spending choices and stronger economic growth."
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Improve Revenue Collection",
                icon: HandCoins,
                color: "blue",
                text: "Improve compliance, reduce leakages and strengthen tax administration.",
              },
              {
                title: "Review Expenditure",
                icon: ReceiptText,
                color: "orange",
                text: "Evaluate programmes and target subsidies more effectively.",
              },
              {
                title: "Support Productive Investment",
                icon: Factory,
                color: "emerald",
                text: "Prioritise projects that offer credible long-term economic benefits.",
              },
              {
                title: "Manage Debt Costs",
                icon: ShieldCheck,
                color: "violet",
                text: "Maintain a credible borrowing plan and monitor interest obligations.",
              },
            ].map((item) => {
              const Icon = item.icon;
              const theme = colors[item.color];

              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-white p-5"
                >
                  <div className={`mb-4 inline-flex rounded-xl p-3 ${theme.icon}`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-bold text-slate-950">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-6 flex items-start gap-3 rounded-2xl border border-emerald-200 bg-white p-5">
            <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-emerald-700" />
            <p className="leading-7 text-slate-600">
              <strong className="text-slate-950">The goal is sustainability.</strong>{" "}
              A government must weigh the benefits of public spending against
              borrowing costs, future obligations and the needs of the economy.
              A lower deficit is not automatically better if achieved by
              damaging essential services or high-value investment.
            </p>
          </div>
        </div>
      </section>

      

      {/* FAQs */}
      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Common Questions"
            title="Frequently Asked Questions About Budget Deficit"
            description="Quick answers to common questions about government budget deficits."
          />

          <div className="space-y-4">
            {[
              {
                q: "What is a budget deficit in simple words?",
                a: "A budget deficit means expenditure exceeds receipts under the relevant budget definition during a particular period. The government must arrange financing for the gap.",
              },
              {
                q: "Is a budget deficit always bad?",
                a: "No. A deficit can support public investment, economic stabilisation or emergency relief. Persistent or poorly managed deficits can, however, increase debt and interest burdens.",
              },
              {
                q: "What is the difference between a budget deficit and a fiscal deficit?",
                a: "The terms are sometimes used loosely as synonyms, but India's traditional budget-deficit measure has a specific historical meaning. The current fiscal deficit measures the gap between total expenditure and total non-debt receipts.",
              },
              {
                q: "What was India's latest available fiscal deficit figure?",
                a: "In the CGA accounts available for this page, the cumulative Union Government fiscal deficit up to August 2026 was approximately ₹7.10 lakh crore, equal to 41.9% of the full-year budget estimate.",
              },
              {
                q: "What is the difference between fiscal deficit and revenue deficit?",
                a: "Fiscal deficit measures the overall financing gap after non-debt receipts. Revenue deficit measures the excess of revenue expenditure over revenue receipts. They describe different aspects of government finances.",
              },
              {
                q: "How is a budget deficit financed?",
                a: "Financing can involve domestic market borrowings, small-savings-related sources and other permitted financing arrangements. The mix depends on the government's accounts and financing plan.",
              },
            ].map((item) => (
              <details
                key={item.q}
                className="group rounded-2xl border border-slate-200 bg-white p-5 open:border-blue-200 open:shadow-sm"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-slate-950">
                  {item.q}
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-700">
                    <span className="group-open:hidden">+</span>
                    <span className="hidden group-open:inline">−</span>
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
      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-slate-100 p-3 text-slate-700">
              <BookOpen className="h-6 w-6" />
            </div>
            <h2 className="text-xl font-bold text-slate-950">
              Official Sources And Further Reading
            </h2>
          </div>

          <p className="mt-3 leading-7 text-slate-600">
            For current government figures, use official publications rather
            than relying solely on news summaries. Monthly accounts are
            provisional and can be updated.
          </p>

          <ul className="mt-5 space-y-4">
            <li>
              <a
                href="https://cga.nic.in/writereaddata/MonthAccount/82026/DATA2627.htm"
                target="_blank"
                rel="noreferrer"
                className="group flex items-start gap-3"
              >
                <Landmark className="mt-1 h-5 w-5 shrink-0 text-blue-700" />
                <span>
                  <span className="font-bold text-blue-800 group-hover:underline">
                    Controller General of Accounts — Union Government Accounts
                  </span>
                  <span className="mt-1 block text-sm leading-6 text-slate-600">
                    Official monthly accounts through August 2026, including
                    fiscal, revenue and primary deficit figures.
                  </span>
                </span>
              </a>
            </li>
            <li>
              <a
                href="https://cga.nic.in/MonthDashboardReport/Published/list.aspx"
                target="_blank"
                rel="noreferrer"
                className="group flex items-start gap-3"
              >
                <BarChart3 className="mt-1 h-5 w-5 shrink-0 text-emerald-700" />
                <span>
                  <span className="font-bold text-blue-800 group-hover:underline">
                    CGA — Monthly Accounts Dashboard
                  </span>
                  <span className="mt-1 block text-sm leading-6 text-slate-600">
                    Official dashboard for monthly Union Government accounts
                    and historical comparisons.
                  </span>
                </span>
              </a>
            </li>
            <li>
              <a
                href="https://www.indiabudget.gov.in/"
                target="_blank"
                rel="noreferrer"
                className="group flex items-start gap-3"
              >
                <BriefcaseBusiness className="mt-1 h-5 w-5 shrink-0 text-violet-700" />
                <span>
                  <span className="font-bold text-blue-800 group-hover:underline">
                    India Union Budget — Ministry Of Finance
                  </span>
                  <span className="mt-1 block text-sm leading-6 text-slate-600">
                    Budget at a Glance, deficit statistics, receipts,
                    expenditure and financing documents.
                  </span>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
