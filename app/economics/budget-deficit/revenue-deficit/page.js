
import {
  BookOpen,
  Calculator,
  Landmark,
  TrendingUp,
  TrendingDown,
  Wallet,
  Receipt,
  IndianRupee,
  Lightbulb,
  AlertTriangle,
  CheckCircle2,
  ArrowRight,
  ArrowDown,
  Scale,
  BarChart3,
  Percent,
  PiggyBank,
  Building2,
  Factory,
  GraduationCap,
  HeartPulse,
  Users,
  ShoppingCart,
  Banknote,
  Target,
  CircleHelp,
  Info,
  Construction,
  ShieldCheck,
  Coins,
  BriefcaseBusiness,
  ChartNoAxesCombined,
  HandCoins,
  FileText,
  RefreshCw,
  Activity,
} from "lucide-react";

import AdSlot from "../../../../components/AdSlot";
import RelatedTopics from "../../../../components/ContinueReading";

export const metadata = {
  title: "What Is Revenue Deficit? Meaning, Formula, Causes & Examples",
  description:
    "Understand revenue deficit with its meaning, formula, calculation and practical examples. Explore its causes, economic effects and latest official figures in India.",
  alternates: {
    canonical:
      "https://www.pricetag.co.in/economics/fiscal-deficit/what-is-revenue-deficit",
  },
  openGraph: {
    title: "What Is Revenue Deficit? Formula, Meaning & Examples",
    description:
      "Learn how revenue deficit is calculated, why it occurs, its economic effects and India's latest official figures.",
    url: "https://www.pricetag.co.in/economics/fiscal-deficit/what-is-revenue-deficit",
    type: "article",
  },
};

function SectionHeading({ icon: Icon, title, subtitle }) {
  return (
    <div className="mb-6">
      <div className="flex items-center gap-3">
        <div className="rounded-xl border border-blue-200 bg-gradient-to-br from-white to-blue-100 p-3 text-blue-700 shadow-sm">
          <Icon size={23} />
        </div>
        <h2 className="text-2xl font-bold text-gray-950 md:text-3xl">
          {title}
        </h2>
      </div>
      {subtitle && (
        <p className="mt-3 leading-7 text-gray-600 md:ml-14">
          {subtitle}
        </p>
      )}
    </div>
  );
}

function BlueCard({ icon: Icon, title, children, className = "" }) {
  return (
    <div
      className={`rounded-2xl border border-blue-100 bg-gradient-to-br from-white via-white to-blue-50 p-5 shadow-sm ${className}`}
    >
      {Icon && (
        <div className="mb-3 inline-flex rounded-xl border border-blue-100 bg-gradient-to-br from-white to-blue-100 p-3 text-blue-700">
          <Icon size={22} />
        </div>
      )}
      {title && (
        <h3 className="mb-2 text-lg font-bold text-gray-950">{title}</h3>
      )}
      <div className="text-sm leading-7 text-gray-700">{children}</div>
    </div>
  );
}

function DataRow({ label, value, highlight = false }) {
  return (
    <div
      className={`flex items-center justify-between gap-4 border-b border-blue-100 px-4 py-3 last:border-0 ${
        highlight
          ? "bg-gradient-to-r from-blue-100 to-indigo-50"
          : "bg-white"
      }`}
    >
      <span className="text-sm text-gray-700">{label}</span>
      <span className="text-right text-sm font-bold tabular-nums text-gray-950">
        {value}
      </span>
    </div>
  );
}

function FlowNode({ icon: Icon, title, description }) {
  return (
    <div className="rounded-xl border border-blue-100 bg-gradient-to-br from-white to-blue-50 p-4 text-center shadow-sm">
      {Icon && <Icon className="mx-auto mb-2 text-blue-700" size={25} />}
      <p className="text-sm font-bold text-gray-900">{title}</p>
      {description && (
        <p className="mt-1 text-xs leading-5 text-gray-600">
          {description}
        </p>
      )}
    </div>
  );
}

function DownConnector() {
  return (
    <div className="flex justify-center py-2 text-blue-600">
      <ArrowDown size={23} strokeWidth={2.5} />
    </div>
  );
}

function CauseCard({ icon: Icon, title, description, example }) {
  return (
    <div className="rounded-2xl border border-blue-100 bg-gradient-to-br from-white via-white to-blue-50 p-5 shadow-sm">
      <div className="mb-3 flex items-center gap-3">
        <div className="rounded-xl border border-blue-100 bg-blue-100/70 p-3 text-blue-700">
          <Icon size={22} />
        </div>
        <h3 className="font-bold text-gray-950">{title}</h3>
      </div>
      <p className="text-sm leading-7 text-gray-700">{description}</p>
      {example && (
        <div className="mt-4 rounded-xl border border-blue-100 bg-white p-3">
          <p className="mb-1 text-xs font-bold uppercase tracking-wide text-blue-700">
            Example
          </p>
          <p className="text-sm leading-6 text-gray-700">{example}</p>
        </div>
      )}
    </div>
  );
}

function EffectCard({
  number,
  icon: Icon,
  title,
  description,
  steps,
  example,
}) {
  return (
    <article className="overflow-hidden rounded-2xl border border-blue-100 bg-white shadow-sm">
      <div className="flex items-center gap-3 border-b border-blue-100 bg-gradient-to-r from-white to-blue-100/80 p-5">
        <div className="rounded-xl border border-blue-200 bg-white p-3 text-blue-700 shadow-sm">
          <Icon size={24} />
        </div>
        <div>
          <span className="text-xs font-bold uppercase tracking-wide text-blue-700">
            Economic Effect {number}
          </span>
          <h3 className="text-lg font-bold text-gray-950">{title}</h3>
        </div>
      </div>

      <div className="p-5">
        <p className="text-sm leading-7 text-gray-700">{description}</p>

        <div className="my-5 rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-4">
          <p className="mb-3 text-xs font-bold uppercase tracking-wide text-blue-800">
            How this effect develops
          </p>

          <div className="space-y-2">
            {steps.map((step, index) => (
              <div key={step.title}>
                <FlowNode
                  icon={step.icon}
                  title={step.title}
                  description={step.description}
                />
                {index !== steps.length - 1 && <DownConnector />}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-blue-200 bg-gradient-to-r from-white to-blue-50 p-4">
          <p className="mb-2 text-sm font-bold text-blue-900">
            Practical Example
          </p>
          <p className="text-sm leading-7 text-gray-700">{example}</p>
        </div>
      </div>
    </article>
  );
}

function MetricCard({ label, value, description }) {
  return (
    <div className="rounded-2xl border border-blue-200 bg-gradient-to-br from-white to-blue-100/70 p-5 shadow-sm">
      <p className="text-xs font-bold uppercase tracking-wide text-blue-700">
        {label}
      </p>
      <p className="mt-2 text-2xl font-bold tabular-nums text-gray-950 md:text-3xl">
        {value}
      </p>
      {description && (
        <p className="mt-2 text-xs leading-5 text-gray-600">
          {description}
        </p>
      )}
    </div>
  );
}

function BarComparison({ label, value, width, amount }) {
  return (
    <div className="rounded-xl border border-blue-100 bg-white p-4">
      <div className="mb-2 flex items-center justify-between gap-3">
        <span className="text-sm font-bold text-gray-800">{label}</span>
        <span className="text-sm font-bold tabular-nums text-blue-800">
          {amount}
        </span>
      </div>
      <div className="h-3 overflow-hidden rounded-full bg-blue-100">
        <div
          className="h-full rounded-full bg-gradient-to-r from-blue-500 to-indigo-600"
          style={{ width: `${width}%` }}
        />
      </div>
      <p className="mt-2 text-xs text-gray-500">{value}</p>
    </div>
  );
}

export default function WhatIsRevenueDeficitPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-8 md:py-12">

      {/* INTRODUCTION */}
      <section className="mb-10 overflow-hidden rounded-3xl border border-blue-100 bg-gradient-to-br from-white via-white to-blue-100/70 p-6 shadow-sm md:p-9">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-bold text-blue-800 shadow-sm">
          <Landmark size={17} />
          Government Finance
        </div>

        <h1 className="mb-5 text-3xl font-bold leading-tight text-gray-950 md:text-5xl">
          What Is Revenue Deficit? Meaning, Formula, Calculation and Examples
        </h1>

        <p className="mb-4 text-lg leading-8 text-gray-700">
          Revenue deficit occurs when a government's revenue expenditure is
          greater than its revenue receipts. It indicates that the government
          is not collecting enough regular income to meet its recurring
          expenditure.
        </p>

        <p className="leading-8 text-gray-700">
          In simple terms, the government is spending more on its regular
          operations and services than it receives through taxes and other
          revenue sources. The resulting gap has to be financed through
          borrowing or other available financial resources.
        </p>

        <div className="mt-7 grid gap-3 sm:grid-cols-3">
          <div className="rounded-xl border border-blue-100 bg-white/90 p-4">
            <Receipt className="mb-2 text-blue-700" size={23} />
            <p className="text-xs font-bold uppercase text-blue-700">
              Regular Income
            </p>
            <p className="mt-1 text-sm font-bold text-gray-900">
              Revenue Receipts
            </p>
          </div>
          <div className="rounded-xl border border-blue-100 bg-white/90 p-4">
            <Wallet className="mb-2 text-blue-700" size={23} />
            <p className="text-xs font-bold uppercase text-blue-700">
              Regular Spending
            </p>
            <p className="mt-1 text-sm font-bold text-gray-900">
              Revenue Expenditure
            </p>
          </div>
          <div className="rounded-xl border border-blue-100 bg-white/90 p-4">
            <Activity className="mb-2 text-blue-700" size={23} />
            <p className="text-xs font-bold uppercase text-blue-700">
              Financial Gap
            </p>
            <p className="mt-1 text-sm font-bold text-gray-900">
              Revenue Deficit
            </p>
          </div>
        </div>
      </section>

      <AdSlot />

      {/* MEANING */}
      <section className="my-12">
        <SectionHeading
          icon={BookOpen}
          title="Meaning of Revenue Deficit"
          subtitle="Understand the gap between a government's regular income and its recurring expenditure."
        />

        <div className="rounded-2xl border border-blue-100 bg-gradient-to-br from-white to-blue-50 p-5 shadow-sm md:p-7">
          <p className="leading-8 text-gray-700">
            Revenue deficit is the excess of revenue expenditure over revenue
            receipts during a financial year. It shows that the government's
            income from regular sources is insufficient to cover its recurring
            expenses.
          </p>

          <p className="mt-4 leading-8 text-gray-700">
            Revenue receipts generally include tax revenue, such as income tax
            and GST, and non-tax revenue, such as fees, dividends and interest
            received by the government. Revenue expenditure includes expenses
            such as salaries, pensions, subsidies, interest payments and
            routine administration.
          </p>

          <div className="mt-6 rounded-xl border border-blue-200 bg-white p-4">
            <div className="flex items-start gap-3">
              <Lightbulb className="mt-1 shrink-0 text-blue-700" size={22} />
              <div>
                <p className="font-bold text-blue-900">Simple Example</p>
                <p className="mt-1 text-sm leading-7 text-gray-700">
                  If a government receives ₹100 crore as regular revenue but
                  spends ₹120 crore on recurring expenses, it has a revenue
                  deficit of ₹20 crore.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TWO COMPONENTS */}
      <section className="my-12">
        <SectionHeading
          icon={Scale}
          title="Revenue Receipts vs Revenue Expenditure"
          subtitle="Revenue deficit is calculated by comparing these two components of the government budget."
        />

        <div className="grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl border border-blue-200 bg-gradient-to-br from-white to-blue-50 p-5 shadow-sm">
            <div className="mb-4 flex items-center gap-3">
              <div className="rounded-xl bg-blue-100 p-3 text-blue-700">
                <Receipt size={24} />
              </div>
              <h3 className="text-lg font-bold text-gray-950">
                Revenue Receipts
              </h3>
            </div>

            <p className="mb-4 text-sm leading-7 text-gray-700">
              Income received by the government through regular sources that
              generally does not create a liability or reduce government
              assets.
            </p>

            <div className="space-y-3">
              <div className="rounded-xl border border-blue-100 bg-white p-4">
                <div className="flex items-center gap-2 font-bold text-blue-900">
                  <Coins size={19} />
                  Tax Revenue
                </div>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Income tax, GST, customs duty and corporation tax.
                </p>
              </div>
              <div className="rounded-xl border border-blue-100 bg-white p-4">
                <div className="flex items-center gap-2 font-bold text-blue-900">
                  <Banknote size={19} />
                  Non-Tax Revenue
                </div>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Fees, fines, dividends, interest receipts and service charges.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-blue-200 bg-gradient-to-br from-white to-indigo-50 p-5 shadow-sm">
            <div className="mb-4 flex items-center gap-3">
              <div className="rounded-xl bg-indigo-100 p-3 text-indigo-700">
                <Wallet size={24} />
              </div>
              <h3 className="text-lg font-bold text-gray-950">
                Revenue Expenditure
              </h3>
            </div>

            <p className="mb-4 text-sm leading-7 text-gray-700">
              Government expenditure on routine operations, services and
              obligations that generally does not directly create a
              long-lasting asset.
            </p>

            <div className="space-y-3">
              <div className="rounded-xl border border-blue-100 bg-white p-4">
                <div className="flex items-center gap-2 font-bold text-blue-900">
                  <Users size={19} />
                  Salaries and Pensions
                </div>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Payments to government employees and pensioners.
                </p>
              </div>
              <div className="rounded-xl border border-blue-100 bg-white p-4">
                <div className="flex items-center gap-2 font-bold text-blue-900">
                  <HeartPulse size={19} />
                  Subsidies and Services
                </div>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Welfare support, routine healthcare and public services.
                </p>
              </div>
              <div className="rounded-xl border border-blue-100 bg-white p-4">
                <div className="flex items-center gap-2 font-bold text-blue-900">
                  <Percent size={19} />
                  Interest Payments
                </div>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Interest paid on outstanding government debt.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* COMPONENT DIAGRAM */}
        <div className="mt-6 rounded-2xl border border-blue-200 bg-gradient-to-br from-white via-blue-50 to-indigo-50 p-5 md:p-6">
          <h3 className="mb-4 font-bold text-gray-950">
            How the Two Components Determine Revenue Deficit
          </h3>

          <div className="grid gap-3 sm:grid-cols-2">
            <FlowNode
              icon={Receipt}
              title="Revenue Receipts"
              description="Taxes, fees, dividends and other regular income"
            />
            <FlowNode
              icon={Wallet}
              title="Revenue Expenditure"
              description="Salaries, pensions, subsidies and interest"
            />
          </div>

          <DownConnector />

          <FlowNode
            icon={Calculator}
            title="Compare Income and Expenditure"
            description="Check whether regular expenditure is higher than regular receipts"
          />

          <DownConnector />

          <div className="rounded-xl border border-blue-200 bg-gradient-to-r from-blue-100 to-indigo-100 p-4 text-center">
            <AlertTriangle className="mx-auto mb-2 text-blue-800" size={25} />
            <p className="font-bold text-blue-950">
              Revenue Expenditure Exceeds Revenue Receipts
            </p>
            <p className="mt-1 text-sm font-bold text-blue-800">
              Revenue Deficit
            </p>
          </div>
        </div>

        <div className="mt-5 rounded-xl border border-blue-100 bg-white p-5">
          <h3 className="mb-2 font-bold text-gray-950">
            Important Distinction
          </h3>
          <p className="text-sm leading-7 text-gray-700">
            Government expenditure is classified into revenue and capital
            expenditure. For example, routine maintenance of a government
            building is generally revenue expenditure, while constructing a
            new government building is generally capital expenditure. The
            precise accounting classification depends on the nature of the
            transaction and applicable government accounting rules.
          </p>
        </div>
      </section>

      {/* FORMULA */}
      <section className="my-12">
        <SectionHeading
          icon={Calculator}
          title="Revenue Deficit Formula"
          subtitle="Subtract revenue receipts from revenue expenditure to calculate the revenue deficit."
        />

        <div className="overflow-hidden rounded-2xl border border-blue-200 bg-gradient-to-br from-white via-blue-50 to-indigo-100 shadow-sm">
          <div className="border-b border-blue-100 bg-white/70 px-5 py-3">
            <p className="text-xs font-bold uppercase tracking-wide text-blue-700">
              Revenue Deficit Formula
            </p>
          </div>
          <div className="p-5 text-center md:p-8">
            <p className="text-xl font-bold leading-relaxed text-gray-950 md:text-3xl">
              Revenue Deficit = Revenue Expenditure − Revenue Receipts
            </p>
          </div>
        </div>

        <div className="mt-5 grid gap-4 md:grid-cols-2">
          <BlueCard icon={Wallet} title="Revenue Expenditure">
            Total expenditure on recurring government operations and
            obligations during the financial year.
          </BlueCard>
          <BlueCard icon={Receipt} title="Revenue Receipts">
            Total regular receipts from tax and non-tax sources during the
            financial year.
          </BlueCard>
        </div>

        <div className="mt-5 rounded-2xl border border-blue-100 bg-gradient-to-br from-white to-blue-50 p-5">
          <h3 className="mb-4 font-bold text-gray-950">
            Understanding the Formula
          </h3>
          <div className="grid gap-3 sm:grid-cols-[1fr_auto_1fr] sm:items-center">
            <div className="rounded-xl border border-blue-100 bg-white p-4 text-center">
              <Wallet className="mx-auto mb-2 text-blue-700" size={24} />
              <p className="text-sm font-bold text-gray-900">
                Revenue Expenditure
              </p>
              <p className="mt-1 text-xs text-gray-500">
                Government's regular spending
              </p>
            </div>
            <div className="flex justify-center text-blue-700">
              <ArrowRight className="rotate-90 sm:rotate-0" size={25} />
            </div>
            <div className="rounded-xl border border-blue-100 bg-white p-4 text-center">
              <Receipt className="mx-auto mb-2 text-blue-700" size={24} />
              <p className="text-sm font-bold text-gray-900">
                Revenue Receipts
              </p>
              <p className="mt-1 text-xs text-gray-500">
                Government's regular income
              </p>
            </div>
          </div>
          <DownConnector />
          <div className="rounded-xl border border-blue-200 bg-gradient-to-r from-blue-100 to-indigo-100 p-4 text-center">
            <Calculator className="mx-auto mb-2 text-blue-800" size={24} />
            <p className="font-bold text-blue-950">
              Difference = Revenue Deficit
            </p>
          </div>
        </div>
      </section>

      {/* CALCULATION */}
      <section className="my-12">
        <SectionHeading
          icon={IndianRupee}
          title="How to Calculate Revenue Deficit: Example"
          subtitle="Consider a hypothetical government budget to see how the formula works."
        />

        <div className="overflow-hidden rounded-2xl border border-blue-200 shadow-sm">
          <div className="bg-gradient-to-r from-blue-800 to-indigo-800 p-5 text-white">
            <h3 className="text-xl font-bold">Example Government Budget</h3>
            <p className="mt-1 text-sm text-blue-100">
              All figures are illustrative and shown in ₹ crore.
            </p>
          </div>

          <DataRow label="Tax Revenue" value="₹80 crore" />
          <DataRow label="Non-Tax Revenue" value="₹20 crore" />
          <DataRow
            label="Total Revenue Receipts"
            value="₹100 crore"
            highlight
          />
          <DataRow label="Total Revenue Expenditure" value="₹120 crore" />

          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-5 md:p-7">
            <p className="mb-2 text-xs font-bold uppercase tracking-wide text-blue-800">
              Revenue Deficit Calculation
            </p>
            <p className="text-xl font-bold text-gray-950 md:text-2xl">
              ₹120 crore − ₹100 crore
            </p>
            <p className="mt-2 text-3xl font-bold text-blue-800">
              ₹20 crore
            </p>
            <p className="mt-2 text-sm leading-6 text-gray-700">
              The government has a revenue deficit of ₹20 crore.
            </p>
          </div>
        </div>

        {/* CALCULATION VISUAL */}
        <div className="mt-6 rounded-2xl border border-blue-200 bg-gradient-to-br from-white via-blue-50 to-indigo-50 p-5 md:p-6">
          <h3 className="mb-4 font-bold text-gray-950">
            Visual Explanation: Income vs Spending
          </h3>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-blue-100 bg-white p-4">
              <Receipt className="mb-2 text-blue-700" size={26} />
              <p className="text-xs font-bold uppercase tracking-wide text-blue-700">
                Government Income
              </p>
              <p className="mt-1 text-2xl font-bold text-gray-950">
                ₹100 crore
              </p>
              <p className="text-xs text-gray-500">Revenue receipts</p>
              <div className="mt-3 h-3 overflow-hidden rounded-full bg-blue-100">
                <div className="h-full w-[83.33%] rounded-full bg-gradient-to-r from-blue-500 to-blue-700" />
              </div>
            </div>

            <div className="rounded-xl border border-blue-100 bg-white p-4">
              <Wallet className="mb-2 text-indigo-700" size={26} />
              <p className="text-xs font-bold uppercase tracking-wide text-blue-700">
                Government Spending
              </p>
              <p className="mt-1 text-2xl font-bold text-gray-950">
                ₹120 crore
              </p>
              <p className="text-xs text-gray-500">Revenue expenditure</p>
              <div className="mt-3 h-3 overflow-hidden rounded-full bg-blue-100">
                <div className="h-full w-full rounded-full bg-gradient-to-r from-blue-600 to-indigo-700" />
              </div>
            </div>
          </div>

          <DownConnector />

          <div className="rounded-xl border border-blue-200 bg-gradient-to-r from-blue-100 to-indigo-100 p-5 text-center">
            <AlertTriangle className="mx-auto mb-2 text-blue-800" size={27} />
            <p className="font-bold text-gray-950">
              Spending Exceeds Regular Income
            </p>
            <p className="mt-1 text-2xl font-bold text-blue-800">
              ₹20 crore deficit
            </p>
            <p className="mt-1 text-xs text-gray-600">
              The difference between ₹120 crore and ₹100 crore
            </p>
          </div>
        </div>
      </section>

      <AdSlot />

      {/* CAUSES */}
      <section className="my-12">
        <SectionHeading
          icon={AlertTriangle}
          title="Causes of Revenue Deficit"
          subtitle="A revenue deficit can occur when recurring government expenses increase or regular revenue collection is insufficient."
        />

        <div className="grid gap-4 md:grid-cols-2">
          <CauseCard
            icon={Users}
            title="High Salary and Pension Payments"
            description="A large public workforce, salary revisions and pension obligations can increase recurring government expenditure."
            example="If government employee salaries and pension payments rise faster than tax collections, the gap between revenue receipts and expenditure can widen."
          />

          <CauseCard
            icon={HeartPulse}
            title="Higher Subsidy Spending"
            description="Increased spending on food, fertilisers, energy support and other welfare programmes can widen the gap when receipts do not grow proportionately."
            example="A government may increase food or fertiliser subsidies to support households and farmers, raising its regular expenditure."
          />

          <CauseCard
            icon={Percent}
            title="Rising Interest Payments"
            description="Interest payments on accumulated public debt are generally included in revenue expenditure. Higher interest costs can therefore contribute to a revenue deficit."
            example="A government with a large outstanding debt may need to allocate more of its annual budget to interest payments."
          />

          <CauseCard
            icon={TrendingDown}
            title="Weak Tax Collection"
            description="Slow economic activity, lower taxable income or weaker consumption can affect tax receipts and reduce the government's regular income."
            example="If business activity slows and taxable transactions decline, GST and other tax collections may grow more slowly."
          />

          <CauseCard
            icon={Landmark}
            title="Higher Administrative Costs"
            description="Spending on government departments, offices, routine operations and public administration can increase recurring expenses."
            example="Higher operating costs across government departments can raise the amount needed to maintain regular public services."
          />

          <CauseCard
            icon={Building2}
            title="Insufficient Non-Tax Revenue"
            description="Lower dividends, fees, interest receipts and other non-tax income can reduce the government's regular revenue resources."
            example="If dividends received from public-sector enterprises are lower than expected, non-tax revenue may fall short of the budget target."
          />
        </div>

        {/* CAUSES DIAGRAM */}
        <div className="mt-6 rounded-2xl border border-blue-200 bg-gradient-to-br from-white via-blue-50 to-indigo-50 p-5 md:p-7">
          <h3 className="mb-5 font-bold text-gray-950">
            How Different Causes Create a Revenue Deficit
          </h3>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-blue-100 bg-white p-4">
              <div className="mb-3 flex items-center gap-2 font-bold text-blue-900">
                <TrendingUp size={20} />
                Expenditure Increases
              </div>
              <div className="space-y-2">
                {[
                  "Higher subsidies",
                  "Salary and pension costs",
                  "Interest obligations",
                  "Administrative expenses",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-lg border border-blue-100 bg-gradient-to-r from-white to-blue-50 p-3 text-sm text-gray-700"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-blue-100 bg-white p-4">
              <div className="mb-3 flex items-center gap-2 font-bold text-blue-900">
                <TrendingDown size={20} />
                Revenue Decreases
              </div>
              <div className="space-y-2">
                {[
                  "Lower tax collections",
                  "Lower fees and dividends",
                  "Weak economic activity",
                  "Insufficient regular income",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-lg border border-blue-100 bg-gradient-to-r from-white to-blue-50 p-3 text-sm text-gray-700"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <DownConnector />

          <div className="rounded-xl border border-blue-200 bg-gradient-to-r from-blue-100 to-indigo-100 p-5 text-center">
            <Calculator className="mx-auto mb-2 text-blue-800" size={25} />
            <p className="font-bold text-blue-950">
              Revenue Expenditure Exceeds Revenue Receipts
            </p>
            <p className="mt-1 text-sm font-bold text-blue-800">
              Revenue Deficit
            </p>
          </div>
        </div>
      </section>

      {/* EFFECTS */}
      <section className="my-14">
        <SectionHeading
          icon={BarChart3}
          title="Effects of Revenue Deficit on the Economy"
          subtitle="A persistent revenue deficit can affect public borrowing, debt, investment, fiscal flexibility and the quality of government spending."
        />

        {/* OVERALL EFFECT FLOW */}
        <div className="mb-7 rounded-2xl border border-blue-200 bg-gradient-to-br from-white via-blue-50 to-indigo-100 p-5 md:p-7">
          <h3 className="mb-4 font-bold text-gray-950">
            The Basic Economic Connection
          </h3>

          <div className="grid gap-3 md:grid-cols-3">
            <FlowNode
              icon={Wallet}
              title="Recurring Spending"
              description="Regular expenses exceed regular income"
            />
            <FlowNode
              icon={Calculator}
              title="Financing Gap"
              description="The government needs additional resources"
            />
            <FlowNode
              icon={Landmark}
              title="Financial Pressure"
              description="Borrowing and budget priorities may be affected"
            />
          </div>

          <div className="mt-4 rounded-xl border border-blue-200 bg-white p-4 text-center">
            <p className="text-sm font-bold text-blue-900">
              Possible consequences depend on how the government finances the
              gap and manages its expenditure.
            </p>
          </div>
        </div>

        <div className="space-y-6">

          <EffectCard
            number="01"
            icon={Landmark}
            title="Higher Government Borrowing"
            description="When regular government income is insufficient to meet recurring expenditure, the government needs to find additional resources. If it finances this gap through borrowing, public debt may increase."
            steps={[
              {
                icon: Wallet,
                title: "Revenue Expenditure Exceeds Receipts",
                description: "Regular government income is insufficient",
              },
              {
                icon: Calculator,
                title: "Additional Financing Required",
                description: "The shortfall needs to be funded",
              },
              {
                icon: Landmark,
                title: "Government May Borrow",
                description: "Borrowing can be one source of finance",
              },
              {
                icon: TrendingUp,
                title: "Public Debt May Increase",
                description: "If borrowing adds to outstanding debt",
              },
            ]}
            example="A government collects ₹100 crore in revenue receipts but spends ₹130 crore on salaries, pensions, subsidies and other recurring expenses. The ₹30 crore gap needs financing. If borrowing is used, government debt can increase."
          />

          <EffectCard
            number="02"
            icon={Construction}
            title="Less Money Available for Capital Investment"
            description="If a large part of government resources is used to cover recurring expenses, fewer internally generated resources may remain available for infrastructure and other capital investment. This can limit the government's ability to create new assets unless it raises additional funds."
            steps={[
              {
                icon: Wallet,
                title: "High Recurring Expenses",
                description: "Salaries, pensions, subsidies and interest",
              },
              {
                icon: TrendingDown,
                title: "Less Uncommitted Revenue",
                description: "A smaller portion of regular income remains available",
              },
              {
                icon: Construction,
                title: "Capital Projects Face Pressure",
                description: "Infrastructure needs additional funding",
              },
            ]}
            example="Suppose a government has limited funds after paying salaries, pensions and subsidies. It may have less money available from its own regular resources to build a new hospital or road. It may need additional borrowing or other financing to proceed with the project."
          />

          <EffectCard
            number="03"
            icon={Percent}
            title="Higher Future Interest Burden"
            description="If a revenue deficit is financed through borrowing, the additional debt can create interest obligations in future years. Interest payments are themselves part of revenue expenditure, so a growing interest burden can put further pressure on regular government finances."
            steps={[
              {
                icon: Wallet,
                title: "Revenue Deficit",
                description: "Regular expenditure exceeds regular receipts",
              },
              {
                icon: Landmark,
                title: "Additional Borrowing",
                description: "The government raises funds",
              },
              {
                icon: Percent,
                title: "More Interest Obligations",
                description: "Borrowed funds carry interest costs",
              },
              {
                icon: RefreshCw,
                title: "Recurring Cost Increases",
                description: "Interest becomes part of future revenue expenditure",
              },
            ]}
            example="If a government borrows ₹1,000 crore to meet its financing needs, it must pay interest on that borrowing according to its terms. The additional interest cost will have to be included in future budgets, increasing recurring expenditure."
          />

          <EffectCard
            number="04"
            icon={Scale}
            title="Reduced Fiscal Flexibility"
            description="A government with persistent revenue deficits and increasing debt obligations may have less flexibility to respond to emergencies or introduce new development programmes. More resources may be committed to existing recurring expenses and debt servicing."
            steps={[
              {
                icon: Users,
                title: "Existing Commitments",
                description: "Salaries, pensions and subsidies",
              },
              {
                icon: Percent,
                title: "Debt Servicing",
                description: "Interest payments take up budget resources",
              },
              {
                icon: ShieldCheck,
                title: "New Needs Emerge",
                description: "Disaster relief or new development programmes",
              },
              {
                icon: Scale,
                title: "Difficult Budget Choices",
                description: "Limited flexibility in allocating resources",
              },
            ]}
            example="If a government already spends a large amount on pensions, subsidies and interest payments, it may find it harder to fund unexpected disaster relief or launch a new public infrastructure programme without raising additional funds."
          />

          <EffectCard
            number="05"
            icon={ShoppingCart}
            title="Possible Inflationary Pressure"
            description="If the government finances additional recurring spending through borrowing and this spending raises overall demand beyond the economy's production capacity, it may contribute to inflationary pressure. The impact is not automatic and depends on supply conditions and monetary policy."
            steps={[
              {
                icon: Wallet,
                title: "Government Spending Increases",
                description: "Additional spending reaches households or businesses",
              },
              {
                icon: ShoppingCart,
                title: "Demand May Rise",
                description: "Purchases of goods and services increase",
              },
              {
                icon: TrendingUp,
                title: "Prices May Increase",
                description: "If supply cannot respond sufficiently",
              },
            ]}
            example="Suppose government transfers increase household spending when the supply of essential goods is already constrained. If producers cannot increase output quickly enough, stronger demand may put upward pressure on prices."
          />

          <EffectCard
            number="06"
            icon={Factory}
            title="Lower Public Investment Capacity"
            description="When regular income is heavily used to meet recurring expenses, the government may have to depend more on borrowing or other financing to support capital projects. If financing is constrained, investment in infrastructure and productive assets may be delayed or reduced."
            steps={[
              {
                icon: Wallet,
                title: "High Recurring Expenses",
                description: "More regular income is committed",
              },
              {
                icon: TrendingDown,
                title: "Limited Internal Resources",
                description: "Less room for capital allocation",
              },
              {
                icon: Construction,
                title: "Capital Projects Need Funding",
                description: "Roads, bridges and public infrastructure",
              },
              {
                icon: Factory,
                title: "Investment May Be Delayed",
                description: "If additional financing is unavailable",
              },
            ]}
            example="A state government may have planned a new bridge but faces rising salary and subsidy expenses. It may need to arrange additional funds or postpone the project if its available resources are insufficient."
          />

          <EffectCard
            number="07"
            icon={Target}
            title="Greater Pressure for Revenue Mobilisation"
            description="A persistent revenue deficit can encourage governments to improve tax collection, widen the tax base, rationalise expenditure or increase certain fees and charges. These measures may help improve regular finances, although their effects on households and businesses need consideration."
            steps={[
              {
                icon: Receipt,
                title: "Improve Tax Compliance",
                description: "Reduce tax evasion and improve collection",
              },
              {
                icon: Building2,
                title: "Increase Non-Tax Receipts",
                description: "Fees, dividends and service income",
              },
              {
                icon: Scale,
                title: "Review Expenditure",
                description: "Improve spending efficiency",
              },
              {
                icon: Target,
                title: "Widen the Tax Base",
                description: "Bring more economic activity into the tax system",
              },
            ]}
            example="If a government faces a persistent revenue deficit, it may improve GST compliance and digital tax administration to increase collections without necessarily raising tax rates."
          />
        </div>

        {/* IMPORTANT NUANCE */}
        <div className="mt-7 rounded-2xl border border-blue-200 bg-gradient-to-br from-white to-blue-100/70 p-5 md:p-6">
          <div className="flex items-start gap-3">
            <Info className="mt-1 shrink-0 text-blue-700" size={24} />
            <div>
              <h3 className="mb-2 font-bold text-gray-950">
                Is Revenue Deficit Always Harmful?
              </h3>
              <p className="text-sm leading-7 text-gray-700">
                A revenue deficit is generally a concern because it means
                regular receipts are insufficient to cover recurring
                expenditure. However, its economic consequences depend on the
                reasons behind it, the quality of public services being
                funded, the government's debt position and its ability to
                improve revenue collection. Essential expenditure on
                healthcare, education and social protection can provide
                important long-term benefits.
              </p>
            </div>
          </div>
        </div>
      </section>

      <AdSlot />

      {/* INDIA DATA */}
      <section className="my-12">
        <SectionHeading
          icon={Landmark}
          title="Revenue Deficit in India: Latest Government Figures"
          subtitle="Official Union Government accounts for FY 2026–27, up to August 2026."
        />

        <div className="grid gap-4 sm:grid-cols-2">
          <MetricCard
            label="Revenue Deficit"
            value="₹2,75,539 Cr"
            description="Cumulative revenue deficit up to August 2026"
          />
          <MetricCard
            label="Percentage of Budget Estimate"
            value="46.5%"
            description="Share of the FY 2026–27 revenue deficit budget estimate"
          />
        </div>

        <div className="mt-5 overflow-hidden rounded-2xl border border-blue-200 shadow-sm">
          <div className="bg-gradient-to-r from-blue-800 to-indigo-800 p-5 text-white">
            <h3 className="text-lg font-bold">
              Union Government Accounts: August 2026
            </h3>
            <p className="mt-1 text-sm text-blue-100">
              Amounts in ₹ crore
            </p>
          </div>

          <div className="grid grid-cols-2 bg-blue-50 px-4 py-3 text-xs font-bold uppercase tracking-wide text-blue-900">
            <span>Fiscal Indicator</span>
            <span className="text-right">Amount</span>
          </div>

          <DataRow
            label="FY 2026–27 Revenue Deficit Budget Estimate"
            value="₹5,92,344 crore"
          />
          <DataRow
            label="Revenue Deficit up to August 2026"
            value="₹2,75,539 crore"
            highlight
          />
          <DataRow
            label="Revenue Receipts up to August 2026"
            value="₹12,92,470 crore"
          />
          <DataRow
            label="Revenue Expenditure up to August 2026"
            value="₹15,68,009 crore"
          />
          <DataRow
            label="Revenue Deficit as % of Budget Estimate"
            value="46.5%"
          />
        </div>

        {/* INDIA DATA VISUAL */}
        <div className="mt-6 rounded-2xl border border-blue-200 bg-gradient-to-br from-white via-blue-50 to-indigo-50 p-5 md:p-7">
          <h3 className="mb-2 font-bold text-gray-950">
            Visualising India's Revenue Deficit
          </h3>
          <p className="mb-5 text-sm leading-6 text-gray-600">
            Compare the cumulative revenue receipts and revenue expenditure
            reported up to August 2026.
          </p>

          <div className="space-y-4">
            <BarComparison
              label="Revenue Receipts"
              amount="₹12,92,470 Cr"
              value="Regular income received by the Union Government"
              width={82.43}
            />
            <BarComparison
              label="Revenue Expenditure"
              amount="₹15,68,009 Cr"
              value="Spending on revenue account"
              width={100}
            />
          </div>

          <DownConnector />

          <div className="rounded-xl border border-blue-200 bg-gradient-to-r from-blue-100 to-indigo-100 p-5 text-center">
            <Calculator className="mx-auto mb-2 text-blue-800" size={25} />
            <p className="text-xs font-bold uppercase tracking-wide text-blue-800">
              Difference
            </p>
            <p className="mt-1 text-2xl font-bold text-blue-950">
              ₹2,75,539 crore
            </p>
            <p className="mt-1 text-sm text-blue-900">
              Revenue Deficit up to August 2026
            </p>
          </div>
        </div>

        {/* VERIFY CALCULATION */}
        <div className="mt-5 rounded-2xl border border-blue-100 bg-white p-5">
          <h3 className="mb-3 font-bold text-gray-950">
            Verify the Calculation
          </h3>

          <div className="rounded-xl border border-blue-100 bg-gradient-to-br from-white to-blue-50 p-4">
            <p className="text-sm text-gray-600">
              Revenue Expenditure − Revenue Receipts
            </p>
            <p className="my-2 text-lg font-bold text-gray-950">
              ₹15,68,009 crore − ₹12,92,470 crore
            </p>
            <p className="text-2xl font-bold text-blue-800">
              ₹2,75,539 crore
            </p>
          </div>

          <p className="mt-4 text-sm leading-7 text-gray-700">
            The result matches the revenue deficit reported in the Controller
            General of Accounts' monthly accounts.
          </p>
        </div>

        <div className="mt-5 rounded-xl border border-blue-200 bg-gradient-to-r from-white to-blue-50 p-5">
          <div className="mb-2 flex items-center gap-2 font-bold text-blue-900">
            <AlertTriangle size={19} />
            Important Note About Monthly Figures
          </div>
          <p className="text-sm leading-7 text-gray-700">
            These are provisional cumulative figures up to August 2026, not
            the final full-year result. Government receipts and expenditure
            can vary significantly from month to month because of the timing
            of tax collections, transfers and spending. The percentage
            recorded at this stage should not be treated as a full-year
            forecast.
          </p>
        </div>

        {/* OFFICIAL SOURCES */}
        <div className="mt-5 rounded-xl border border-blue-100 bg-gradient-to-br from-white to-blue-50 p-5">
          <h3 className="mb-3 flex items-center gap-2 font-bold text-gray-950">
            <FileText size={20} className="text-blue-700" />
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
                href="https://cga.gov.in/writereaddata/MonthAccount/82026/dtl12627.htm"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-blue-700 hover:underline"
              >
                CGA – Monthly Trend of Revenue Deficit
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
          </ul>
        </div>
      </section>

      {/* INTERPRETATION */}
      <section className="my-12">
        <SectionHeading
          icon={Lightbulb}
          title="How to Interpret Revenue Deficit"
          subtitle="A revenue deficit figure should be analysed with the government's receipts, expenditure and overall fiscal position."
        />

        <div className="grid gap-4 md:grid-cols-3">
          <BlueCard icon={TrendingUp} title="High Revenue Deficit">
            A high and persistent revenue deficit can indicate that regular
            government income is not keeping pace with recurring expenses.
            It may increase financing pressure.
          </BlueCard>

          <BlueCard icon={TrendingDown} title="Declining Revenue Deficit">
            A declining deficit may indicate improving revenue collection,
            better expenditure management or a combination of both.
          </BlueCard>

          <BlueCard icon={CheckCircle2} title="Revenue Surplus">
            When revenue receipts exceed revenue expenditure, the government
            has a revenue surplus. Regular income is sufficient to cover
            recurring expenses.
          </BlueCard>
        </div>

        {/* THREE POSSIBLE POSITIONS */}
        <div className="mt-6 rounded-2xl border border-blue-200 bg-gradient-to-br from-white via-blue-50 to-indigo-50 p-5 md:p-6">
          <h3 className="mb-4 font-bold text-gray-950">
            Three Possible Budget Positions
          </h3>

          <div className="grid gap-3 md:grid-cols-3">
            <div className="rounded-xl border border-blue-100 bg-white p-4">
              <p className="text-xs font-bold uppercase tracking-wide text-blue-700">
                Position 1
              </p>
              <h4 className="mt-2 font-bold text-gray-950">
                Revenue Deficit
              </h4>
              <p className="mt-2 text-sm text-gray-600">
                Revenue expenditure is greater than revenue receipts.
              </p>
              <div className="mt-3 rounded-lg bg-blue-50 p-3 text-center text-sm font-bold text-blue-900">
                Expenditure &gt; Receipts
              </div>
            </div>

            <div className="rounded-xl border border-blue-100 bg-white p-4">
              <p className="text-xs font-bold uppercase tracking-wide text-blue-700">
                Position 2
              </p>
              <h4 className="mt-2 font-bold text-gray-950">
                Revenue Balance
              </h4>
              <p className="mt-2 text-sm text-gray-600">
                Revenue expenditure is exactly equal to revenue receipts.
              </p>
              <div className="mt-3 rounded-lg bg-blue-50 p-3 text-center text-sm font-bold text-blue-900">
                Expenditure = Receipts
              </div>
            </div>

            <div className="rounded-xl border border-blue-100 bg-white p-4">
              <p className="text-xs font-bold uppercase tracking-wide text-blue-700">
                Position 3
              </p>
              <h4 className="mt-2 font-bold text-gray-950">
                Revenue Surplus
              </h4>
              <p className="mt-2 text-sm text-gray-600">
                Revenue receipts are greater than revenue expenditure.
              </p>
              <div className="mt-3 rounded-lg bg-blue-50 p-3 text-center text-sm font-bold text-blue-900">
                Receipts &gt; Expenditure
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="my-12">
        <SectionHeading
          icon={CircleHelp}
          title="Frequently Asked Questions"
          subtitle="Common questions about revenue deficit and its calculation."
        />

        <div className="space-y-4">
          <details className="group rounded-xl border border-blue-100 bg-gradient-to-r from-white to-blue-50 p-5">
            <summary className="cursor-pointer font-bold text-gray-950">
              What is the formula for revenue deficit?
            </summary>
            <p className="mt-3 text-sm leading-7 text-gray-700">
              Revenue Deficit = Revenue Expenditure − Revenue Receipts. It
              measures the excess of recurring government expenditure over
              regular government income.
            </p>
          </details>

          <details className="group rounded-xl border border-blue-100 bg-gradient-to-r from-white to-blue-50 p-5">
            <summary className="cursor-pointer font-bold text-gray-950">
              What does a revenue deficit indicate?
            </summary>
            <p className="mt-3 text-sm leading-7 text-gray-700">
              It indicates that the government's regular income from revenue
              sources is insufficient to meet its recurring expenditure.
            </p>
          </details>

          <details className="group rounded-xl border border-blue-100 bg-gradient-to-r from-white to-blue-50 p-5">
            <summary className="cursor-pointer font-bold text-gray-950">
              Can revenue deficit be zero?
            </summary>
            <p className="mt-3 text-sm leading-7 text-gray-700">
              Yes. Zero revenue deficit means revenue receipts are exactly
              equal to revenue expenditure.
            </p>
          </details>

          <details className="group rounded-xl border border-blue-100 bg-gradient-to-r from-white to-blue-50 p-5">
            <summary className="cursor-pointer font-bold text-gray-950">
              What happens when revenue deficit becomes negative?
            </summary>
            <p className="mt-3 text-sm leading-7 text-gray-700">
              A negative revenue deficit means revenue receipts exceed revenue
              expenditure. This situation is called a revenue surplus.
            </p>
          </details>

          <details className="group rounded-xl border border-blue-100 bg-gradient-to-r from-white to-blue-50 p-5">
            <summary className="cursor-pointer font-bold text-gray-950">
              Does revenue deficit mean the government is borrowing?
            </summary>
            <p className="mt-3 text-sm leading-7 text-gray-700">
              A revenue deficit indicates a shortfall in regular receipts
              relative to recurring expenditure. It may be financed through
              borrowing or other available resources, but the revenue deficit
              figure alone does not specify the exact financing method.
            </p>
          </details>

          <details className="group rounded-xl border border-blue-100 bg-gradient-to-r from-white to-blue-50 p-5">
            <summary className="cursor-pointer font-bold text-gray-950">
              Is revenue deficit always bad for economic growth?
            </summary>
            <p className="mt-3 text-sm leading-7 text-gray-700">
              Not necessarily. Spending on healthcare, education and social
              protection can support human development. However, a persistent
              revenue deficit can create financing pressure and reduce budget
              flexibility.
            </p>
          </details>

          <details className="group rounded-xl border border-blue-100 bg-gradient-to-r from-white to-blue-50 p-5">
            <summary className="cursor-pointer font-bold text-gray-950">
              What is the difference between revenue deficit and fiscal deficit?
            </summary>
            <p className="mt-3 text-sm leading-7 text-gray-700">
              Revenue deficit measures the excess of revenue expenditure over
              revenue receipts. Fiscal deficit measures the gap between total
              government expenditure and total receipts excluding borrowings.
              Fiscal deficit therefore includes the broader budget financing
              requirement.
            </p>
          </details>
        </div>
      </section>

      {/* CONCLUSION */}
      <section className="my-12 overflow-hidden rounded-2xl border border-blue-200 bg-gradient-to-br from-white via-blue-50 to-indigo-100 p-6 shadow-sm md:p-8">
        <div className="mb-3 inline-flex rounded-xl border border-blue-200 bg-white p-3 text-blue-700">
          <CheckCircle2 size={25} />
        </div>

        <h2 className="mb-3 text-2xl font-bold text-gray-950">
          Key Takeaway
        </h2>

        <p className="leading-8 text-gray-800">
          Revenue deficit measures the gap between regular government income
          and recurring expenditure. A persistent gap can increase financing
          requirements, create future interest obligations and limit budget
          flexibility. Improving revenue collection and managing expenditure
          efficiently are important for strengthening government finances.
        </p>

        <div className="mt-5 rounded-xl border border-blue-200 bg-white p-4">
          <p className="text-sm font-bold text-blue-900">
            Remember the formula:
          </p>
          <p className="mt-2 text-lg font-bold text-gray-950">
            Revenue Deficit = Revenue Expenditure − Revenue Receipts
          </p>
        </div>
      </section>

     
    </main>
  );
}
