
import Link from "next/link";
import {
  Calculator,
  Landmark,
  TrendingDown,
  TrendingUp,
  Wallet,
  Receipt,
  Percent,
  Lightbulb,
  AlertTriangle,
  CheckCircle2,
  ArrowRight,
  Scale,
  BarChart3,
  IndianRupee,
  PiggyBank,
  BookOpen,
  Info,
  Target,
  CircleHelp,  Building2,
  Banknote,
  Factory,
  Truck,
  ShoppingCart,
  Construction,
  ShieldCheck,
} from "lucide-react";

import AdSlot from "../../../../components/AdSlot";
import RelatedTopics from "../../../../components/ContinueReading";

export const metadata = {
  title: "What Is Primary Deficit? Meaning, Formula, Calculation & India",
  description:
    "Understand primary deficit, its formula and calculation with examples. Learn why interest payments are excluded and explore India's latest primary deficit figures.",
  alternates: {
    canonical:
      "https://www.pricetag.co.in/economics/fiscal-deficit/what-is-primary-deficit",
  },
  openGraph: {
    title: "What Is Primary Deficit? Meaning, Formula & Examples",
    description:
      "Learn how primary deficit is calculated, what it reveals about government borrowing and how to interpret India's latest figures.",
    url: "https://www.pricetag.co.in/economics/fiscal-deficit/what-is-primary-deficit",
    type: "article",
  },
};

function SectionHeading({ icon: Icon, title, subtitle }) {
  return (
    <div className="mb-6">
      <div className="flex items-center gap-3 mb-2">
        <div className="rounded-xl bg-blue-100 p-2.5 text-blue-700">
          <Icon size={22} />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          {title}
        </h2>
      </div>
      {subtitle && (
        <p className="text-gray-600 leading-7 md:ml-14">{subtitle}</p>
      )}
    </div>
  );
}

function InfoCard({ icon: Icon, title, children, color = "blue" }) {
  const colors = {
    blue: "bg-blue-50 border-blue-200 text-blue-700",
    green: "bg-green-50 border-green-200 text-green-700",
    orange: "bg-orange-50 border-orange-200 text-orange-700",
    purple: "bg-purple-50 border-purple-200 text-purple-700",
    red: "bg-red-50 border-red-200 text-red-700",
  };

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
      <div
        className={`mb-3 inline-flex rounded-xl border p-2 ${colors[color]}`}
      >
        <Icon size={21} />
      </div>
      <h3 className="mb-2 text-lg font-bold text-gray-900">{title}</h3>
      <div className="text-sm leading-7 text-gray-700">{children}</div>
    </div>
  );
}

function FormulaBox({ children }) {
  return (
    <div className="rounded-2xl border border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50 p-5 md:p-7">
      <div className="mb-2 text-sm font-bold uppercase tracking-wide text-blue-700">
        Primary Deficit Formula
      </div>
      <div className="text-xl md:text-3xl font-bold leading-relaxed text-gray-900">
        {children}
      </div>
    </div>
  );
}

function DataRow({ label, value, highlight = false }) {
  return (
    <div
      className={`flex items-center justify-between gap-4 border-b border-gray-200 px-4 py-3 last:border-0 ${
        highlight ? "bg-blue-50" : "bg-white"
      }`}
    >
      <span className="text-sm text-gray-700">{label}</span>
      <span className="text-sm font-bold text-gray-900 tabular-nums">
        {value}
      </span>
    </div>
  );
}

export default function WhatIsPrimaryDeficitPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-8 md:py-12">
      {/* Introduction */}
      <section className="mb-10">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-bold text-blue-800">
          <Landmark size={16} />
          Government Finance
        </div>

        <h1 className="mb-5 text-3xl md:text-5xl font-bold leading-tight text-gray-950">
          What Is Primary Deficit? Meaning, Formula, Calculation and Examples
        </h1>

        <p className="mb-4 text-lg leading-8 text-gray-700">
          Primary deficit is an important measure used to understand the
          financial position of a government. It shows how much the government
          needs to borrow to meet its expenditure, after excluding the interest
          payments on loans taken in previous years.
        </p>

        <p className="leading-8 text-gray-700">
          This measure helps economists and policymakers examine whether a
          government&apos;s current spending and receipts are balanced, without
          allowing the cost of servicing old debt to dominate the picture.
        </p>
      </section>

      <AdSlot />

      {/* Meaning */}
      <section className="my-12">
        <SectionHeading
          icon={BookOpen}
          title="Meaning of Primary Deficit"
          subtitle="The measure focuses on the government's current fiscal position before accounting for interest costs."
        />

        <div className="rounded-2xl border border-gray-200 bg-white p-5 md:p-7">
          <p className="leading-8 text-gray-700">
            Primary deficit is the amount by which a government&apos;s fiscal
            deficit exceeds its interest payments. In simpler terms, it
            represents the gap between the government&apos;s non-interest
            expenditure and its non-debt receipts.
          </p>

          <p className="mt-4 leading-8 text-gray-700">
            Governments borrow money to finance spending when their receipts
            are insufficient. Borrowing also creates interest obligations.
            Primary deficit separates these existing interest obligations from
            the remaining fiscal gap to help assess the government&apos;s
            current-year budgetary position.
          </p>

          <div className="mt-5 rounded-xl bg-indigo-50 p-4">
            <div className="flex items-start gap-3">
              <Lightbulb className="mt-1 shrink-0 text-indigo-700" size={21} />
              <p className="text-sm leading-7 text-indigo-950">
                <strong>Simple idea:</strong> Primary deficit tells us about
                the borrowing gap after removing interest payments on
                accumulated government debt.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Formula */}
      <section className="my-12">
        <SectionHeading
          icon={Calculator}
          title="Primary Deficit Formula"
          subtitle="The calculation starts with the fiscal deficit and subtracts interest payments."
        />

        <FormulaBox>
          Primary Deficit = Fiscal Deficit − Interest Payments
        </FormulaBox>

        <div className="mt-5 grid gap-4 md:grid-cols-2">
          <InfoCard icon={Wallet} title="Fiscal Deficit">
            The overall gap between total government expenditure and
            non-debt receipts.
          </InfoCard>

          <InfoCard icon={Percent} title="Interest Payments">
            The amount paid by the government as interest on its outstanding
            debt.
          </InfoCard>
        </div>

        <div className="mt-5 rounded-xl border border-gray-200 bg-gray-50 p-5">
          <h3 className="mb-2 font-bold text-gray-900">
            Another way to understand the formula
          </h3>
          <p className="leading-7 text-gray-700">
            Since fiscal deficit includes interest payments, subtracting those
            payments leaves the remaining deficit associated with
            non-interest expenditure.
          </p>
        </div>
      </section>

      {/* Calculation example */}
      <section className="my-12">
        <SectionHeading
          icon={IndianRupee}
          title="How to Calculate Primary Deficit: Example"
          subtitle="Consider a hypothetical government budget to understand the calculation."
        />

        <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
          <div className="bg-gray-900 p-5 text-white">
            <h3 className="text-xl font-bold">Example Government Budget</h3>
            <p className="mt-1 text-sm text-gray-300">
              All figures are illustrative and shown in ₹ crore.
            </p>
          </div>

          <DataRow label="Total Government Expenditure" value="₹10,00,000 crore" />
          <DataRow label="Non-Debt Receipts" value="₹7,00,000 crore" />
          <DataRow label="Fiscal Deficit" value="₹3,00,000 crore" highlight />
          <DataRow label="Interest Payments" value="₹1,00,000 crore" />

          <div className="bg-green-50 p-5">
            <div className="mb-2 text-sm font-bold text-green-800">
              Primary Deficit Calculation
            </div>
            <div className="text-lg font-bold text-gray-950 md:text-2xl">
              ₹3,00,000 − ₹1,00,000
            </div>
            <div className="mt-2 text-2xl font-bold text-green-800">
              ₹2,00,000 crore
            </div>
            <p className="mt-2 text-sm leading-6 text-gray-700">
              The primary deficit in this example is ₹2 lakh crore.
            </p>
          </div>
        </div>

        <div className="mt-5 rounded-xl border border-blue-200 bg-blue-50 p-5">
          <h3 className="mb-2 font-bold text-blue-950">
            What does this result tell us?
          </h3>
          <p className="text-sm leading-7 text-gray-800">
            The government has a fiscal deficit of ₹3 lakh crore. Out of this,
            ₹1 lakh crore represents interest payments. The remaining
            ₹2 lakh crore is the primary deficit, showing the gap before
            accounting for those interest costs.
          </p>
        </div>
      </section>

      <AdSlot />

      {/* Why exclude interest */}
      <section className="my-12">
        <SectionHeading
          icon={Target}
          title="Why Are Interest Payments Excluded?"
          subtitle="Interest payments reflect borrowing decisions made in the past, not only the government's current spending decisions."
        />

        <div className="grid gap-4 md:grid-cols-2">
          <InfoCard
            icon={TrendingDown}
            title="Separates Past Debt Costs"
            color="purple"
          >
            A government may have to pay substantial interest because of loans
            accumulated over several years. Excluding interest helps separate
            this historical burden from the current fiscal gap.
          </InfoCard>

          <InfoCard
            icon={BarChart3}
            title="Measures Current Fiscal Effort"
            color="blue"
          >
            It helps assess whether current government receipts are sufficient
            to cover expenditure other than interest payments.
          </InfoCard>

          <InfoCard
            icon={Scale}
            title="Supports Fiscal Analysis"
            color="green"
          >
            Economists can use the primary deficit to examine the direction of
            current fiscal policy without treating all interest costs as
            current spending decisions.
          </InfoCard>

          <InfoCard
            icon={PiggyBank}
            title="Tracks Debt Management"
            color="orange"
          >
            Changes in the primary deficit help analysts understand whether
            the government is improving or worsening its underlying fiscal
            position.
          </InfoCard>
        </div>
      </section>

      {/* Positive, zero, negative */}
      <section className="my-12">
        <SectionHeading
          icon={TrendingUp}
          title="What Does a Positive, Zero or Negative Primary Deficit Mean?"
          subtitle="The sign of the primary balance gives a useful indication of the government's non-interest fiscal position."
        />

        <div className="space-y-4">
          <div className="rounded-2xl border border-orange-200 bg-orange-50 p-5">
            <div className="mb-2 flex items-center gap-3">
              <TrendingUp className="text-orange-700" size={23} />
              <h3 className="text-lg font-bold text-gray-950">
                Positive Primary Deficit
              </h3>
            </div>
            <p className="leading-7 text-gray-700">
              A positive primary deficit means the government&apos;s
              non-interest expenditure is greater than its non-debt receipts.
              It indicates a borrowing gap even after interest payments are
              excluded.
            </p>
          </div>

          <div className="rounded-2xl border border-blue-200 bg-blue-50 p-5">
            <div className="mb-2 flex items-center gap-3">
              <Scale className="text-blue-700" size={23} />
              <h3 className="text-lg font-bold text-gray-950">
                Zero Primary Deficit
              </h3>
            </div>
            <p className="leading-7 text-gray-700">
              A zero primary deficit means non-interest expenditure is equal
              to non-debt receipts. The government still has to meet its
              interest payments, which may require borrowing.
            </p>
          </div>

          <div className="rounded-2xl border border-green-200 bg-green-50 p-5">
            <div className="mb-2 flex items-center gap-3">
              <CheckCircle2 className="text-green-700" size={23} />
              <h3 className="text-lg font-bold text-gray-950">
                Negative Primary Deficit (Primary Surplus)
              </h3>
            </div>
            <p className="leading-7 text-gray-700">
              A negative primary deficit means non-debt receipts exceed
              non-interest expenditure. This is called a primary surplus.
              The surplus can help the government meet part of its interest
              obligations.
            </p>
          </div>
        </div>

        <div className="mt-5 flex items-start gap-3 rounded-xl border border-gray-200 bg-white p-4">
          <Info className="mt-1 shrink-0 text-blue-700" size={20} />
          <p className="text-sm leading-7 text-gray-700">
            A primary surplus does not automatically mean that total
            government borrowing has stopped. The government may still have
            a fiscal deficit because it must pay interest on existing debt.
          </p>
        </div>
      </section>

      {/* Causes */}
      <section className="my-12">
        <SectionHeading
          icon={AlertTriangle}
          title="Causes of Primary Deficit"
          subtitle="A primary deficit can arise when government expenditure excluding interest is higher than its non-debt receipts."
        />

        <div className="grid gap-4 md:grid-cols-2">
          <InfoCard icon={Wallet} title="High Government Spending">
            Large expenditure on administration, public services, welfare
            programmes, infrastructure and other government activities can
            increase the primary deficit when receipts do not keep pace.
          </InfoCard>

          <InfoCard icon={Receipt} title="Lower Tax Collections">
            Weak tax collection, slower economic activity or changes in tax
            revenue can reduce the money available to finance government
            expenditure.
          </InfoCard>

          <InfoCard icon={IndianRupee} title="Higher Subsidy Expenditure">
            Increased spending on food, fertilisers, fuel-related support and
            other subsidies can put pressure on the government's non-interest
            budget.
          </InfoCard>

          <InfoCard icon={Landmark} title="Economic Slowdown">
            Slower economic growth can affect tax and other receipts, while
            government spending may remain high to support economic activity.
          </InfoCard>

          <InfoCard icon={Target} title="Expansionary Fiscal Policy">
            A government may deliberately increase spending or reduce taxes
            to support demand, investment and employment. If receipts do not
            cover the additional non-interest spending, the primary deficit
            may rise.
          </InfoCard>

          <InfoCard icon={TrendingDown} title="Lower Non-Debt Receipts">
            Lower dividends, disinvestment proceeds or recoveries of loans
            can reduce non-debt receipts and widen the primary deficit.
          </InfoCard>
        </div>
      </section>

      <AdSlot />

    
{/* Effects */}
<section className="my-14">
  <SectionHeading
    icon={BarChart3}
    title="Effects of Primary Deficit on the Economy"
    subtitle="A sustained primary deficit can influence government borrowing, private investment, interest rates, economic growth, inflation and public debt. The actual impact depends on how the deficit is financed and how borrowed funds are used."
  />

  <div className="mb-8 rounded-2xl border border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50 p-5 md:p-6">
    <div className="flex items-start gap-3">
      <div className="rounded-xl bg-blue-100 p-3 text-blue-700">
        <Lightbulb size={24} />
      </div>
      <div>
        <h3 className="mb-2 text-lg font-bold text-gray-900">
          First, Understand the Economic Connection
        </h3>
        <p className="text-sm leading-7 text-gray-700">
          When non-interest government expenditure exceeds non-debt receipts,
          the government has a primary deficit. If this gap is financed through
          borrowing, it can affect the availability of funds, government debt
          and overall economic activity.
        </p>
      </div>
    </div>

    <div className="mt-6 grid gap-3 sm:grid-cols-3">
      <div className="rounded-xl border border-blue-100 bg-white p-4 text-center">
        <Wallet className="mx-auto mb-2 text-blue-700" size={26} />
        <p className="text-sm font-bold text-gray-900">Higher Expenditure</p>
        <p className="mt-1 text-xs text-gray-600">Beyond non-debt receipts</p>
      </div>

      <div className="flex items-center justify-center text-blue-600">
        <ArrowRight size={25} />
      </div>

      <div className="rounded-xl border border-blue-100 bg-white p-4 text-center">
        <Landmark className="mx-auto mb-2 text-indigo-700" size={26} />
        <p className="text-sm font-bold text-gray-900">Borrowing Requirement</p>
        <p className="mt-1 text-xs text-gray-600">To finance the gap</p>
      </div>
    </div>
  </div>

  <div className="space-y-7">

    {/* Effect 1 */}
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
      <div className="flex items-center gap-3 border-b border-gray-100 p-5">
        <div className="rounded-xl bg-blue-100 p-3 text-blue-700">
          <Landmark size={25} />
        </div>
        <div>
          <span className="text-xs font-bold uppercase tracking-wide text-blue-700">
            Effect 01
          </span>
          <h3 className="text-lg font-bold text-gray-900">
            Higher Government Borrowing
          </h3>
        </div>
      </div>

      <div className="p-5">
        <p className="text-sm leading-7 text-gray-700">
          When government expenditure excluding interest payments exceeds
          non-debt receipts, the government needs additional financing.
          A persistent primary deficit can therefore increase borrowing
          requirements and add to outstanding public debt.
        </p>

        <div className="my-5 rounded-xl bg-blue-50 p-4">
          <p className="mb-3 text-xs font-bold uppercase tracking-wide text-blue-800">
            How the effect develops
          </p>
          <div className="grid grid-cols-1 items-center gap-2 sm:grid-cols-3">
            <div className="rounded-lg bg-white p-3 text-center">
              <Wallet className="mx-auto mb-2 text-blue-700" size={23} />
              <p className="text-sm font-bold text-gray-900">Spending exceeds receipts</p>
            </div>
            <div className="flex justify-center text-blue-700">
              <ArrowRight className="rotate-90 sm:rotate-0" />
            </div>
            <div className="rounded-lg bg-white p-3 text-center">
              <IndianRupee className="mx-auto mb-2 text-blue-700" size={23} />
              <p className="text-sm font-bold text-gray-900">More borrowing</p>
            </div>
            <div className="flex justify-center text-blue-700 sm:col-span-3">
              <ArrowRight className="rotate-90 sm:rotate-90" />
            </div>
            <div className="rounded-lg bg-white p-3 text-center sm:col-span-3">
              <TrendingUp className="mx-auto mb-2 text-blue-700" size={23} />
              <p className="text-sm font-bold text-gray-900">
                Outstanding government debt may increase
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-blue-200 p-4">
          <p className="mb-2 text-sm font-bold text-blue-900">
            Practical Example
          </p>
          <p className="text-sm leading-7 text-gray-700">
            Suppose a government collects ₹8 lakh crore in non-debt receipts
            but spends ₹10 lakh crore excluding interest. It faces a primary
            deficit of ₹2 lakh crore. If it finances this gap through
            borrowing, its outstanding debt can increase.
          </p>
        </div>
      </div>
    </div>

    {/* Effect 2 */}
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
      <div className="flex items-center gap-3 border-b border-gray-100 p-5">
        <div className="rounded-xl bg-orange-100 p-3 text-orange-700">
          <Percent size={25} />
        </div>
        <div>
          <span className="text-xs font-bold uppercase tracking-wide text-orange-700">
            Effect 02
          </span>
          <h3 className="text-lg font-bold text-gray-900">
            Possible Pressure on Interest Rates
          </h3>
        </div>
      </div>

      <div className="p-5">
        <p className="text-sm leading-7 text-gray-700">
          When government borrowing increases substantially, it may compete
          with businesses and households for available funds. Depending on
          banking liquidity, savings, monetary policy and market conditions,
          this can put upward pressure on borrowing costs.
        </p>

        <div className="my-5 rounded-xl bg-orange-50 p-4">
          <p className="mb-3 text-xs font-bold uppercase tracking-wide text-orange-800">
            Possible market impact
          </p>
          <div className="grid gap-3 sm:grid-cols-3">
            <div className="rounded-lg bg-white p-3 text-center">
              <Landmark className="mx-auto mb-2 text-orange-700" size={24} />
              <p className="text-sm font-bold text-gray-900">Government borrows more</p>
            </div>
            <div className="flex items-center justify-center">
              <ArrowRight className="rotate-90 text-orange-700 sm:rotate-0" />
            </div>
            <div className="rounded-lg bg-white p-3 text-center">
              <Scale className="mx-auto mb-2 text-orange-700" size={24} />
              <p className="text-sm font-bold text-gray-900">Competition for funds</p>
            </div>
            <div className="flex items-center justify-center sm:col-span-3">
              <ArrowRight className="rotate-90 text-orange-700" />
            </div>
            <div className="rounded-lg bg-white p-3 text-center sm:col-span-3">
              <TrendingUp className="mx-auto mb-2 text-orange-700" size={24} />
              <p className="text-sm font-bold text-gray-900">
                Market interest rates may rise
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-orange-200 p-4">
          <p className="mb-2 text-sm font-bold text-orange-900">
            Practical Example
          </p>
          <p className="text-sm leading-7 text-gray-700">
            If the government issues more bonds to finance its borrowing,
            banks and investors may allocate more of their funds to government
            securities. Under conditions of limited available savings, private
            companies may face higher borrowing costs when raising money for
            expansion.
          </p>
        </div>
      </div>
    </div>

    {/* Effect 3 */}
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
      <div className="flex items-center gap-3 border-b border-gray-100 p-5">
        <div className="rounded-xl bg-purple-100 p-3 text-purple-700">
          <Building2 size={25} />
        </div>
        <div>
          <span className="text-xs font-bold uppercase tracking-wide text-purple-700">
            Effect 03
          </span>
          <h3 className="text-lg font-bold text-gray-900">
            Crowding Out of Private Investment
          </h3>
        </div>
      </div>

      <div className="p-5">
        <p className="text-sm leading-7 text-gray-700">
          If increased government borrowing absorbs a significant share of
          available financial resources, less funding may be available for
          private businesses. Higher borrowing costs can discourage companies
          from investing in factories, machinery and expansion. This is known
          as the crowding-out effect.
        </p>

        <div className="my-5 rounded-xl bg-purple-50 p-4">
          <p className="mb-3 text-xs font-bold uppercase tracking-wide text-purple-800">
            Crowding-out process
          </p>
          <div className="space-y-2">
            <div className="rounded-lg bg-white p-3 text-center">
              <Landmark className="mx-auto mb-1 text-purple-700" size={23} />
              <p className="text-sm font-bold text-gray-900">
                Government borrowing rises
              </p>
            </div>
            <div className="flex justify-center text-purple-700">
              <ArrowRight className="rotate-90" />
            </div>
            <div className="rounded-lg bg-white p-3 text-center">
              <Banknote className="mx-auto mb-1 text-purple-700" size={23} />
              <p className="text-sm font-bold text-gray-900">
                Greater demand for available funds
              </p>
            </div>
            <div className="flex justify-center text-purple-700">
              <ArrowRight className="rotate-90" />
            </div>
            <div className="grid gap-2 sm:grid-cols-2">
              <div className="rounded-lg bg-white p-3 text-center">
                <Percent className="mx-auto mb-1 text-purple-700" size={23} />
                <p className="text-sm font-bold text-gray-900">
                  Higher borrowing costs
                </p>
              </div>
              <div className="rounded-lg bg-white p-3 text-center">
                <Factory className="mx-auto mb-1 text-purple-700" size={23} />
                <p className="text-sm font-bold text-gray-900">
                  Private investment may fall
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-purple-200 p-4">
          <p className="mb-2 text-sm font-bold text-purple-900">
            Practical Example
          </p>
          <p className="text-sm leading-7 text-gray-700">
            A manufacturing company plans to borrow ₹50 crore to build a new
            factory. If borrowing costs increase, the project may become less
            profitable. The company might postpone expansion, reducing
            potential investment and job creation.
          </p>
        </div>
      </div>
    </div>

    {/* Effect 4 */}
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
      <div className="flex items-center gap-3 border-b border-gray-100 p-5">
        <div className="rounded-xl bg-green-100 p-3 text-green-700">
          <Construction size={25} />
        </div>
        <div>
          <span className="text-xs font-bold uppercase tracking-wide text-green-700">
            Effect 04
          </span>
          <h3 className="text-lg font-bold text-gray-900">
            Economic Growth Through Productive Spending
          </h3>
        </div>
      </div>

      <div className="p-5">
        <p className="text-sm leading-7 text-gray-700">
          A primary deficit is not necessarily harmful when additional
          expenditure supports productive investment. Spending on roads,
          railways, electricity, education and healthcare can improve
          productivity and strengthen the economy&apos;s capacity over time.
        </p>

        <div className="my-5 rounded-xl bg-green-50 p-4">
          <p className="mb-3 text-xs font-bold uppercase tracking-wide text-green-800">
            How productive expenditure can support growth
          </p>
          <div className="grid gap-2 sm:grid-cols-3">
            <div className="rounded-lg bg-white p-3 text-center">
              <Landmark className="mx-auto mb-2 text-green-700" size={24} />
              <p className="text-sm font-bold text-gray-900">Public investment</p>
              <p className="mt-1 text-xs text-gray-600">Infrastructure projects</p>
            </div>
            <div className="flex items-center justify-center">
              <ArrowRight className="rotate-90 text-green-700 sm:rotate-0" />
            </div>
            <div className="rounded-lg bg-white p-3 text-center">
              <Truck className="mx-auto mb-2 text-green-700" size={24} />
              <p className="text-sm font-bold text-gray-900">Better facilities</p>
              <p className="mt-1 text-xs text-gray-600">Transport and logistics</p>
            </div>
          </div>
          <div className="flex justify-center py-2 text-green-700">
            <ArrowRight className="rotate-90" />
          </div>
          <div className="rounded-lg bg-white p-3 text-center">
            <TrendingUp className="mx-auto mb-2 text-green-700" size={24} />
            <p className="text-sm font-bold text-gray-900">
              Higher productivity and growth potential
            </p>
          </div>
        </div>

        <div className="rounded-xl border border-green-200 p-4">
          <p className="mb-2 text-sm font-bold text-green-900">
            Practical Example
          </p>
          <p className="text-sm leading-7 text-gray-700">
            Suppose the government borrows to construct a highway connecting
            industrial areas with a major port. Better connectivity can reduce
            transportation time and logistics costs, helping businesses
            transport goods more efficiently and potentially expand production.
          </p>
        </div>
      </div>
    </div>

    {/* Effect 5 */}
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
      <div className="flex items-center gap-3 border-b border-gray-100 p-5">
        <div className="rounded-xl bg-red-100 p-3 text-red-700">
          <TrendingUp size={25} />
        </div>
        <div>
          <span className="text-xs font-bold uppercase tracking-wide text-red-700">
            Effect 05
          </span>
          <h3 className="text-lg font-bold text-gray-900">
            Inflationary Pressure
          </h3>
        </div>
      </div>

      <div className="p-5">
        <p className="text-sm leading-7 text-gray-700">
          If government spending increases demand faster than the economy can
          increase its production of goods and services, it may contribute to
          inflationary pressure. The impact depends on spare production
          capacity, supply conditions, monetary policy and the type of
          expenditure.
        </p>

        <div className="my-5 rounded-xl bg-red-50 p-4">
          <p className="mb-3 text-xs font-bold uppercase tracking-wide text-red-800">
            Demand-side inflation pathway
          </p>
          <div className="space-y-2">
            <div className="rounded-lg bg-white p-3 text-center">
              <Wallet className="mx-auto mb-1 text-red-700" size={23} />
              <p className="text-sm font-bold text-gray-900">
                Government spending increases
              </p>
            </div>
            <div className="flex justify-center text-red-700">
              <ArrowRight className="rotate-90" />
            </div>
            <div className="rounded-lg bg-white p-3 text-center">
              <ShoppingCart className="mx-auto mb-1 text-red-700" size={23} />
              <p className="text-sm font-bold text-gray-900">
                Overall demand may rise
              </p>
            </div>
            <div className="flex justify-center text-red-700">
              <ArrowRight className="rotate-90" />
            </div>
            <div className="rounded-lg bg-white p-3 text-center">
              <TrendingUp className="mx-auto mb-1 text-red-700" size={23} />
              <p className="text-sm font-bold text-gray-900">
                Prices may increase if supply cannot keep up
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-red-200 p-4">
          <p className="mb-2 text-sm font-bold text-red-900">
            Practical Example
          </p>
          <p className="text-sm leading-7 text-gray-700">
            Suppose the government increases household transfers and public
            purchases when factories are already operating near full capacity.
            If demand for goods rises faster than production, businesses may
            increase prices. This is one possible route through which fiscal
            expansion can add to inflation.
          </p>
        </div>
      </div>
    </div>

    {/* Effect 6 */}
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
      <div className="flex items-center gap-3 border-b border-gray-100 p-5">
        <div className="rounded-xl bg-indigo-100 p-3 text-indigo-700">
          <Scale size={25} />
        </div>
        <div>
          <span className="text-xs font-bold uppercase tracking-wide text-indigo-700">
            Effect 06
          </span>
          <h3 className="text-lg font-bold text-gray-900">
            Pressure on Fiscal Sustainability
          </h3>
        </div>
      </div>

      <div className="p-5">
        <p className="text-sm leading-7 text-gray-700">
          When a primary deficit continues for several years, the government
          may need repeated borrowing to finance the gap. If debt grows faster
          than the economy&apos;s capacity to support it, managing public
          finances can become more difficult.
        </p>

        <div className="my-5 rounded-xl bg-indigo-50 p-4">
          <p className="mb-3 text-xs font-bold uppercase tracking-wide text-indigo-800">
            Long-term debt pressure
          </p>
          <div className="grid gap-2 sm:grid-cols-2">
            <div className="rounded-lg bg-white p-3 text-center">
              <TrendingUp className="mx-auto mb-2 text-indigo-700" size={24} />
              <p className="text-sm font-bold text-gray-900">
                Persistent primary deficit
              </p>
            </div>
            <div className="rounded-lg bg-white p-3 text-center">
              <Landmark className="mx-auto mb-2 text-indigo-700" size={24} />
              <p className="text-sm font-bold text-gray-900">
                Repeated borrowing
              </p>
            </div>
          </div>
          <div className="flex justify-center py-2 text-indigo-700">
            <ArrowRight className="rotate-90" />
          </div>
          <div className="rounded-lg bg-white p-3 text-center">
            <Wallet className="mx-auto mb-2 text-indigo-700" size={24} />
            <p className="text-sm font-bold text-gray-900">
              Accumulation of public debt
            </p>
          </div>
          <div className="flex justify-center py-2 text-indigo-700">
            <ArrowRight className="rotate-90" />
          </div>
          <div className="rounded-lg bg-white p-3 text-center">
            <AlertTriangle className="mx-auto mb-2 text-indigo-700" size={24} />
            <p className="text-sm font-bold text-gray-900">
              Greater debt-management challenges
            </p>
          </div>
        </div>

        <div className="rounded-xl border border-indigo-200 p-4">
          <p className="mb-2 text-sm font-bold text-indigo-900">
            Practical Example
          </p>
          <p className="text-sm leading-7 text-gray-700">
            Imagine a government that runs a primary deficit year after year.
            It continues borrowing to finance its spending. As the debt stock
            grows, future budgets may have less flexibility to fund new
            development projects or respond to emergencies.
          </p>
        </div>
      </div>
    </div>

    {/* Effect 7 */}
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
      <div className="flex items-center gap-3 border-b border-gray-100 p-5">
        <div className="rounded-xl bg-teal-100 p-3 text-teal-700">
          <Banknote size={25} />
        </div>
        <div>
          <span className="text-xs font-bold uppercase tracking-wide text-teal-700">
            Effect 07
          </span>
          <h3 className="text-lg font-bold text-gray-900">
            Increased Future Interest Burden
          </h3>
        </div>
      </div>

      <div className="p-5">
        <p className="text-sm leading-7 text-gray-700">
          When a government borrows more to finance a primary deficit, its
          debt stock may increase. New borrowing can create additional
          interest obligations in future budgets. This can reduce the funds
          available for other public services and development expenditure.
        </p>

        <div className="my-5 rounded-xl bg-teal-50 p-4">
          <p className="mb-3 text-xs font-bold uppercase tracking-wide text-teal-800">
            How today's borrowing can affect tomorrow's budget
          </p>
          <div className="space-y-2">
            <div className="rounded-lg bg-white p-3 text-center">
              <IndianRupee className="mx-auto mb-1 text-teal-700" size={23} />
              <p className="text-sm font-bold text-gray-900">
                Additional borrowing today
              </p>
            </div>
            <div className="flex justify-center text-teal-700">
              <ArrowRight className="rotate-90" />
            </div>
            <div className="rounded-lg bg-white p-3 text-center">
              <Percent className="mx-auto mb-1 text-teal-700" size={23} />
              <p className="text-sm font-bold text-gray-900">
                Interest obligations in future years
              </p>
            </div>
            <div className="flex justify-center text-teal-700">
              <ArrowRight className="rotate-90" />
            </div>
            <div className="rounded-lg bg-white p-3 text-center">
              <Wallet className="mx-auto mb-1 text-teal-700" size={23} />
              <p className="text-sm font-bold text-gray-900">
                More budget resources needed for debt servicing
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-teal-200 p-4">
          <p className="mb-2 text-sm font-bold text-teal-900">
            Practical Example
          </p>
          <p className="text-sm leading-7 text-gray-700">
            If the government raises an additional ₹1 lakh crore through
            borrowing, it must service that debt according to the applicable
            interest rate and repayment terms. Future budgets will need to
            account for the additional interest cost.
          </p>
        </div>
      </div>
    </div>

    {/* Effect 8 */}
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
      <div className="flex items-center gap-3 border-b border-gray-100 p-5">
        <div className="rounded-xl bg-yellow-100 p-3 text-yellow-700">
          <ShieldCheck size={25} />
        </div>
        <div>
          <span className="text-xs font-bold uppercase tracking-wide text-yellow-700">
            Effect 08
          </span>
          <h3 className="text-lg font-bold text-gray-900">
            Reduced Budget Flexibility
          </h3>
        </div>
      </div>

      <div className="p-5">
        <p className="text-sm leading-7 text-gray-700">
          A government facing persistent borrowing and debt obligations may
          have less flexibility to respond to unexpected situations. It may
          need to balance new development spending against existing financial
          commitments.
        </p>

        <div className="my-5 rounded-xl bg-yellow-50 p-4">
          <p className="mb-3 text-xs font-bold uppercase tracking-wide text-yellow-800">
            Budget flexibility can become constrained
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-lg bg-white p-3">
              <h4 className="mb-2 text-sm font-bold text-gray-900">
                Existing commitments
              </h4>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex items-center gap-2">
                  <Percent size={16} className="text-yellow-700" />
                  Interest payments
                </div>
                <div className="flex items-center gap-2">
                  <Wallet size={16} className="text-yellow-700" />
                  Essential expenditure
                </div>
                <div className="flex items-center gap-2">
                  <Landmark size={16} className="text-yellow-700" />
                  Debt obligations
                </div>
              </div>
            </div>
            <div className="rounded-lg bg-white p-3">
              <h4 className="mb-2 text-sm font-bold text-gray-900">
                New requirements
              </h4>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex items-center gap-2">
                  <ShieldCheck size={16} className="text-yellow-700" />
                  Emergency relief
                </div>
                <div className="flex items-center gap-2">
                  <Construction size={16} className="text-yellow-700" />
                  New infrastructure
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen size={16} className="text-yellow-700" />
                  Public services
                </div>
              </div>
            </div>
          </div>
          <div className="mt-3 rounded-lg bg-white p-3 text-center">
            <Scale className="mx-auto mb-1 text-yellow-700" size={23} />
            <p className="text-sm font-bold text-gray-900">
              Greater pressure to allocate limited budget resources
            </p>
          </div>
        </div>

        <div className="rounded-xl border border-yellow-200 p-4">
          <p className="mb-2 text-sm font-bold text-yellow-900">
            Practical Example
          </p>
          <p className="text-sm leading-7 text-gray-700">
            Suppose a government already has substantial debt-servicing
            commitments when a natural disaster occurs. It may need to
            rearrange spending, raise additional funds or borrow more to
            finance emergency relief and reconstruction.
          </p>
        </div>
      </div>
    </div>
  </div>

  {/* Important qualification */}
  <div className="mt-8 rounded-2xl border border-gray-300 bg-gray-50 p-5 md:p-6">
    <div className="flex items-start gap-3">
      <Info className="mt-1 shrink-0 text-blue-700" size={23} />
      <div>
        <h3 className="mb-2 font-bold text-gray-900">
          Is a Primary Deficit Always Harmful?
        </h3>
        <p className="text-sm leading-7 text-gray-700">
          No. A primary deficit does not automatically indicate poor economic
          management. Borrowing to finance productive infrastructure,
          essential public services or temporary economic support can be
          justified. The concern is a persistently high deficit that does not
          generate sufficient economic benefits or remain manageable relative
          to government revenue, debt and economic growth.
        </p>
      </div>
    </div>
  </div>
</section>


      {/* India data */}
      <section className="my-12">
        <SectionHeading
          icon={Landmark}
          title="Primary Deficit in India: Latest Government Figures"
          subtitle="Official Union Government accounts for financial year 2026–27, up to August 2026."
        />

        <div className="mb-5 rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50 p-5 md:p-7">
          <div className="mb-2 text-sm font-bold text-blue-800">
            Primary Deficit Recorded up to August 2026
          </div>
          <div className="text-3xl md:text-4xl font-bold text-gray-950">
            ₹1,95,439 crore
          </div>
          <p className="mt-2 text-sm leading-6 text-gray-700">
            This represents 67.0% of the FY 2026–27 Budget Estimate for primary
            deficit.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-gray-200">
          <div className="grid grid-cols-2 bg-gray-900 p-4 text-sm font-bold text-white">
            <span>Fiscal Indicator</span>
            <span className="text-right">Amount</span>
          </div>

          <DataRow
            label="FY 2026–27 Primary Deficit Budget Estimate"
            value="₹2,91,796 crore"
          />
          <DataRow
            label="Primary Deficit up to August 2026"
            value="₹1,95,439 crore"
            highlight
          />
          <DataRow
            label="Fiscal Deficit up to August 2026"
            value="₹7,10,249 crore"
          />
          <DataRow
            label="Interest Payments up to August 2026"
            value="₹5,14,810 crore"
          />
          <DataRow
            label="Primary Deficit as % of Budget Estimate"
            value="67.0%"
          />
        </div>

        <div className="mt-5 rounded-2xl border border-gray-200 bg-white p-5">
          <h3 className="mb-3 font-bold text-gray-900">
            Verify the calculation
          </h3>

          <div className="rounded-xl bg-gray-50 p-4">
            <div className="text-sm text-gray-600">
              Fiscal Deficit − Interest Payments
            </div>
            <div className="my-2 text-lg font-bold text-gray-950">
              ₹7,10,249 crore − ₹5,14,810 crore
            </div>
            <div className="text-2xl font-bold text-green-700">
              ₹1,95,439 crore
            </div>
          </div>

          <p className="mt-4 text-sm leading-7 text-gray-700">
            The calculation matches the primary deficit reported in the
            Controller General of Accounts' monthly accounts.
          </p>
        </div>

        <div className="mt-5 rounded-xl border border-orange-200 bg-orange-50 p-5">
          <div className="mb-2 flex items-center gap-2 font-bold text-orange-900">
            <AlertTriangle size={19} />
            Important Note About Monthly Figures
          </div>
          <p className="text-sm leading-7 text-gray-800">
            These figures are provisional cumulative accounts up to August
            2026, not the final deficit for the entire financial year. Monthly
            receipts and expenditure can be uneven, so the percentage of the
            Budget Estimate recorded at a particular point in the year should
            not be treated as a final-year forecast.
          </p>
        </div>

        <div className="mt-5 rounded-xl border border-gray-200 bg-gray-50 p-5">
          <h3 className="mb-3 font-bold text-gray-900">
            Official Sources
          </h3>
          <ul className="space-y-3 text-sm">
            <li>
              <a
                href="https://cga.nic.in/writereaddata/MonthAccount/82026/DATA2627.htm"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-blue-700 hover:underline"
              >
                Controller General of Accounts – August 2026 Accounts
                <ArrowRight className="ml-1 inline" size={14} />
              </a>
            </li>
            <li>
              <a
                href="https://www.pib.gov.in/PressReleasePage.aspx?PRID=2317034&lang=1&reg=6"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-blue-700 hover:underline"
              >
                Ministry of Finance – Monthly Review of Accounts
                <ArrowRight className="ml-1 inline" size={14} />
              </a>
            </li>
            <li>
              <a
                href="https://ies.gov.in/arthapedia/concept/deficit-measurement-india"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-blue-700 hover:underline"
              >
                Indian Economic Service – Deficit Measurement in India
                <ArrowRight className="ml-1 inline" size={14} />
              </a>
            </li>
          </ul>
        </div>
      </section>

      {/* Interpretation */}
      <section className="my-12">
        <SectionHeading
          icon={Lightbulb}
          title="How Should You Interpret Primary Deficit?"
          subtitle="A single primary deficit figure cannot explain the complete financial health of a government."
        />

        <div className="rounded-2xl border border-gray-200 bg-white p-5 md:p-7">
          <p className="leading-8 text-gray-700">
            A rising primary deficit may indicate that non-interest government
            expenditure is increasing faster than non-debt receipts. However,
            it does not automatically mean that government finances are
            deteriorating.
          </p>

          <p className="mt-4 leading-8 text-gray-700">
            For example, an increase in infrastructure investment may raise
            the primary deficit in the short term while supporting economic
            growth over a longer period. On the other hand, a persistent
            deficit without adequate revenue growth or productive returns can
            increase debt-related risks.
          </p>

          <p className="mt-4 leading-8 text-gray-700">
            Analysts therefore examine the primary deficit alongside economic
            growth, interest costs, government debt, revenue collection and
            the composition of expenditure.
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section className="my-12">
        <SectionHeading
          icon={CircleHelp}
          title="Frequently Asked Questions"
          subtitle="Common questions about primary deficit and its calculation."
        />

        <div className="space-y-4">
          <details className="group rounded-xl border border-gray-200 bg-white p-5">
            <summary className="cursor-pointer list-none font-bold text-gray-900">
              What is the formula for primary deficit?
              <span className="float-right text-blue-700">+</span>
            </summary>
            <p className="mt-3 text-sm leading-7 text-gray-700">
              Primary Deficit = Fiscal Deficit − Interest Payments.
            </p>
          </details>

          <details className="group rounded-xl border border-gray-200 bg-white p-5">
            <summary className="cursor-pointer list-none font-bold text-gray-900">
              Why is primary deficit calculated?
              <span className="float-right text-blue-700">+</span>
            </summary>
            <p className="mt-3 text-sm leading-7 text-gray-700">
              It helps measure the government's current non-interest fiscal
              gap and separates that gap from interest obligations arising
              from accumulated debt.
            </p>
          </details>

          <details className="group rounded-xl border border-gray-200 bg-white p-5">
            <summary className="cursor-pointer list-none font-bold text-gray-900">
              Can primary deficit be negative?
              <span className="float-right text-blue-700">+</span>
            </summary>
            <p className="mt-3 text-sm leading-7 text-gray-700">
              Yes. A negative primary deficit is called a primary surplus. It
              means non-debt receipts exceed non-interest expenditure.
            </p>
          </details>

          <details className="group rounded-xl border border-gray-200 bg-white p-5">
            <summary className="cursor-pointer list-none font-bold text-gray-900">
              Does zero primary deficit mean the government has no debt?
              <span className="float-right text-blue-700">+</span>
            </summary>
            <p className="mt-3 text-sm leading-7 text-gray-700">
              No. Zero primary deficit only means non-interest expenditure
              equals non-debt receipts. The government may still have
              outstanding debt and interest payments.
            </p>
          </details>

          <details className="group rounded-xl border border-gray-200 bg-white p-5">
            <summary className="cursor-pointer list-none font-bold text-gray-900">
              What is the difference between primary deficit and fiscal deficit?
              <span className="float-right text-blue-700">+</span>
            </summary>
            <p className="mt-3 text-sm leading-7 text-gray-700">
              Fiscal deficit includes the overall borrowing gap, including
              interest payments. Primary deficit is calculated after
              subtracting interest payments from fiscal deficit.
            </p>
          </details>
        </div>
      </section>

      {/* Conclusion */}
      <section className="my-12 rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50 p-6 md:p-8">
        <h2 className="mb-3 text-2xl font-bold text-gray-950">
          Key Takeaway
        </h2>
        <p className="leading-8 text-gray-800">
          Primary deficit helps explain the government's current fiscal gap
          after excluding interest payments on accumulated debt. It is useful
          for analysing fiscal discipline, borrowing requirements and the
          sustainability of public finances. However, it should always be
          considered alongside economic growth, government debt and the
          quality of public expenditure.
        </p>
      </section>

      
    </main>
  );
}
