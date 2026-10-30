
import {
  ArrowDown,
  ArrowRight,
  BarChart3,
  BookOpen,
  Calculator,
  CheckCircle2,
  CircleHelp,
  FileText,
  IndianRupee,
  Landmark,
  Lightbulb,
  Scale,
  Target,
  TrendingUp,
  Wallet,
  AlertCircle,
} from "lucide-react";

import AdSlot from "../../../../components/AdSlot";

export const metadata = {
  title: "Fiscal Deficit vs Revenue Deficit: Meaning, Formula & Examples",
  description:
    "Understand the difference between fiscal deficit and revenue deficit with simple definitions, formulas, numerical examples, comparison tables, and Indian budget context.",
  alternates: {
    canonical:
      "https://www.pricetag.co.in/economics/fiscal-deficit-vs-revenue-deficit",
  },
};

function SectionHeading({ number, title, subtitle }) {
  return (
    <div className="mb-6">
      <div className="mb-2 flex items-center gap-2">
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100 text-sm font-bold text-blue-700">
          {number}
        </span>
        <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
          Economics Explained
        </span>
      </div>
      <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
          {subtitle}
        </p>
      )}
    </div>
  );
}

function InfoCard({ icon: Icon, title, children, color = "blue" }) {
  const styles = {
    blue: "border-blue-200 bg-blue-50/70 text-blue-700",
    indigo: "border-indigo-200 bg-indigo-50/70 text-indigo-700",
    sky: "border-sky-200 bg-sky-50/70 text-sky-700",
    amber: "border-amber-200 bg-amber-50/70 text-amber-700",
    green: "border-green-200 bg-green-50/70 text-green-700",
  };

  return (
    <div className={`rounded-2xl border p-5 ${styles[color]}`}>
      <div className="mb-3 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-sm">
          <Icon size={20} />
        </div>
        <h3 className="font-bold text-slate-900">{title}</h3>
      </div>
      <div className="text-sm leading-7 text-slate-700">{children}</div>
    </div>
  );
}

function FormulaCard({ title, formula, explanation, color = "blue" }) {
  const styles = {
    blue: "from-blue-600 to-indigo-600",
    indigo: "from-indigo-600 to-violet-600",
  };

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className={`bg-gradient-to-r ${styles[color]} p-5 text-white`}>
        <p className="text-sm font-semibold text-white/80">{title}</p>
        <div className="mt-3 text-lg font-bold leading-relaxed sm:text-xl">
          {formula}
        </div>
      </div>
      <div className="p-5">
        <p className="text-sm leading-7 text-slate-600">{explanation}</p>
      </div>
    </div>
  );
}

function ComparisonRow({ label, fiscal, revenue }) {
  return (
    <tr className="border-b border-slate-100 last:border-0">
      <td className="px-4 py-4 text-sm font-semibold text-slate-800">
        {label}
      </td>
      <td className="px-4 py-4 text-sm leading-6 text-slate-600">{fiscal}</td>
      <td className="px-4 py-4 text-sm leading-6 text-slate-600">{revenue}</td>
    </tr>
  );
}

function ExampleItem({ label, amount, highlight = false }) {
  return (
    <div
      className={`flex items-center justify-between gap-4 rounded-xl px-4 py-3 ${
        highlight ? "bg-blue-50" : "bg-slate-50"
      }`}
    >
      <span className="text-sm text-slate-700">{label}</span>
      <span
        className={`whitespace-nowrap text-sm font-bold ${
          highlight ? "text-blue-700" : "text-slate-900"
        }`}
      >
        {amount}
      </span>
    </div>
  );
}

export default function FiscalDeficitVsRevenueDeficitPage() {
  const faqs = [
    {
      question: "What is the main difference between fiscal deficit and revenue deficit?",
      answer:
        "Fiscal deficit measures the gap between total government expenditure and total non-debt receipts. Revenue deficit measures the gap between revenue expenditure and revenue receipts. Fiscal deficit covers the government's overall finances, while revenue deficit focuses only on its revenue account.",
    },
    {
      question: "What is the formula for fiscal deficit?",
      answer:
        "Fiscal Deficit = Total Expenditure − Total Non-Debt Receipts. Total non-debt receipts include revenue receipts and non-debt capital receipts such as recovery of loans and disinvestment proceeds.",
    },
    {
      question: "What is the formula for revenue deficit?",
      answer:
        "Revenue Deficit = Revenue Expenditure − Revenue Receipts. It occurs when the government's revenue expenditure is greater than its revenue receipts.",
    },
    {
      question: "Can fiscal deficit exist without revenue deficit?",
      answer:
        "Yes. A government can have a revenue surplus or balanced revenue account and still have a fiscal deficit if its total expenditure exceeds its total non-debt receipts. This can happen when the government spends on capital projects such as roads, railways, and infrastructure.",
    },
    {
      question: "Is revenue deficit always lower than fiscal deficit?",
      answer:
        "Not necessarily. Revenue deficit is one part of the government's overall financial position. The relationship also depends on capital expenditure and non-debt capital receipts. Fiscal deficit is higher than revenue deficit in the numerical example on this page, but this is not a universal rule.",
    },
    {
      question: "Does revenue deficit indicate government borrowing?",
      answer:
        "Revenue deficit indicates that revenue receipts are insufficient to meet revenue expenditure. It does not directly measure total borrowing. Fiscal deficit is the broader measure used to assess the government's overall financing gap.",
    },
    {
      question: "What is the difference between revenue deficit and primary deficit?",
      answer:
        "Revenue deficit compares revenue expenditure with revenue receipts. Primary deficit is fiscal deficit minus interest payments. They measure different aspects of government finances.",
    },
    {
      question: "Why is revenue deficit a concern?",
      answer:
        "A persistent revenue deficit means the government is not collecting enough revenue to meet its regular expenditure. It can reduce the resources available for capital investment and may increase dependence on borrowing.",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-slate-800">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-blue-100 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl" />
        <div className="absolute -bottom-28 left-0 h-72 w-72 rounded-full bg-indigo-200/30 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-wider text-blue-700 shadow-sm">
            <Landmark size={15} />
            Public Finance & Government Budget
          </div>

          <h1 className="max-w-4xl text-3xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl">
            Fiscal Deficit vs Revenue Deficit
            <span className="mt-2 block bg-gradient-to-r from-blue-700 to-indigo-600 bg-clip-text text-transparent">
              Meaning, Formula and Examples
            </span>
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
            Both fiscal deficit and revenue deficit measure gaps in government
            finances, but they answer different questions. Learn how they are
            calculated, why they matter, and how to distinguish them using a
            simple example.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#formulas"
              className="inline-flex items-center gap-2 rounded-xl bg-blue-700 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-blue-700/20 transition hover:bg-blue-800"
            >
              Understand the Formulas
              <ArrowRight size={16} />
            </a>
            <a
              href="#example"
              className="inline-flex items-center gap-2 rounded-xl border border-blue-200 bg-white px-5 py-3 text-sm font-bold text-blue-700 transition hover:bg-blue-50"
            >
              See Numerical Example
            </a>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-blue-200 bg-white/90 p-5 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-blue-100 p-3 text-blue-700">
                  <TrendingUp size={22} />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">
                    Fiscal Deficit
                  </p>
                  <p className="text-xs text-slate-500">
                    Overall financing gap
                  </p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-6 text-slate-600">
                Compares total expenditure with total non-debt receipts.
              </p>
            </div>

            <div className="rounded-2xl border border-indigo-200 bg-white/90 p-5 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-indigo-100 p-3 text-indigo-700">
                  <Wallet size={22} />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">
                    Revenue Deficit
                  </p>
                  <p className="text-xs text-slate-500">
                    Revenue account shortfall
                  </p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-6 text-slate-600">
                Compares revenue expenditure with revenue receipts.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        {/* Quick Difference */}
        <section className="mb-16">
          <SectionHeading
            number="01"
            title="Fiscal Deficit vs Revenue Deficit: The Basic Difference"
            subtitle="The easiest way to understand these terms is to look at what each deficit includes."
          />

          <div className="grid gap-5 md:grid-cols-2">
            <InfoCard
              icon={BarChart3}
              title="Fiscal Deficit"
              color="blue"
            >
              Fiscal deficit occurs when the government's total expenditure
              exceeds its total non-debt receipts. It indicates how much
              financing the government needs to cover the gap.
            </InfoCard>

            <InfoCard
              icon={Wallet}
              title="Revenue Deficit"
              color="indigo"
            >
              Revenue deficit occurs when the government's revenue expenditure
              exceeds its revenue receipts. It indicates that regular income
              is insufficient to meet regular expenditure.
            </InfoCard>
          </div>

          <div className="mt-6 rounded-2xl border border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50 p-5 sm:p-6">
            <div className="flex items-start gap-3">
              <Lightbulb className="mt-1 shrink-0 text-blue-700" size={22} />
              <div>
                <h3 className="font-bold text-slate-900">
                  Remember the difference
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-700">
                  Revenue deficit looks only at regular government income and
                  expenditure. Fiscal deficit looks at the government's entire
                  expenditure and all receipts that do not create debt.
                </p>
              </div>
            </div>
          </div>
        </section>

        <AdSlot />

        {/* Fiscal Deficit */}
        <section className="mb-16">
          <SectionHeading
            number="02"
            title="What Is Fiscal Deficit?"
            subtitle="Fiscal deficit measures the gap between the government's total expenditure and its total non-debt receipts."
          />

          <div className="grid gap-6 lg:grid-cols-5">
            <div className="space-y-4 lg:col-span-3">
              <p className="text-sm leading-8 text-slate-600 sm:text-base">
                A government receives money through taxes, fees, dividends,
                recovery of loans, disinvestment and other sources. It also
                spends money on salaries, pensions, subsidies, interest
                payments, infrastructure and public services.
              </p>

              <p className="text-sm leading-8 text-slate-600 sm:text-base">
                When total government expenditure is greater than total
                receipts excluding borrowings and other debt-creating
                receipts, the difference is called the <strong>fiscal deficit</strong>.
              </p>

              <p className="text-sm leading-8 text-slate-600 sm:text-base">
                The fiscal deficit indicates the government's overall
                financing gap. Borrowing is one of the main ways governments
                finance this gap.
              </p>
            </div>

            <div className="rounded-2xl border border-blue-200 bg-blue-50/70 p-5 lg:col-span-2">
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-white text-blue-700 shadow-sm">
                <IndianRupee size={22} />
              </div>
              <h3 className="font-bold text-slate-900">
                Simple Illustration
              </h3>
              <div className="mt-4 space-y-3">
                <ExampleItem label="Total expenditure" amount="₹130 crore" />
                <ExampleItem
                  label="Total non-debt receipts"
                  amount="₹90 crore"
                />
                <div className="border-t border-blue-200 pt-3">
                  <ExampleItem
                    label="Fiscal deficit"
                    amount="₹40 crore"
                    highlight
                  />
                </div>
              </div>
              <p className="mt-3 text-xs leading-6 text-slate-500">
                The government needs financing for the ₹40 crore gap.
              </p>
            </div>
          </div>
        </section>

        {/* Revenue Deficit */}
        <section className="mb-16">
          <SectionHeading
            number="03"
            title="What Is Revenue Deficit?"
            subtitle="Revenue deficit measures whether the government's regular income is enough to cover its regular expenditure."
          />

          <div className="grid gap-6 lg:grid-cols-5">
            <div className="rounded-2xl border border-indigo-200 bg-indigo-50/70 p-5 lg:col-span-2">
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-white text-indigo-700 shadow-sm">
                <Wallet size={22} />
              </div>
              <h3 className="font-bold text-slate-900">
                Simple Illustration
              </h3>
              <div className="mt-4 space-y-3">
                <ExampleItem
                  label="Revenue expenditure"
                  amount="₹100 crore"
                />
                <ExampleItem label="Revenue receipts" amount="₹80 crore" />
                <div className="border-t border-indigo-200 pt-3">
                  <ExampleItem
                    label="Revenue deficit"
                    amount="₹20 crore"
                    highlight
                  />
                </div>
              </div>
              <p className="mt-3 text-xs leading-6 text-slate-500">
                Regular government income falls short by ₹20 crore.
              </p>
            </div>

            <div className="space-y-4 lg:col-span-3">
              <p className="text-sm leading-8 text-slate-600 sm:text-base">
                Revenue deficit occurs when the government's revenue
                expenditure is greater than its revenue receipts. It focuses
                only on the revenue account, rather than the entire government
                budget.
              </p>

              <p className="text-sm leading-8 text-slate-600 sm:text-base">
                Revenue receipts include tax revenue and non-tax revenue.
                Revenue expenditure includes regular spending such as
                salaries, pensions, subsidies, administrative expenses and
                interest payments.
              </p>

              <p className="text-sm leading-8 text-slate-600 sm:text-base">
                A revenue deficit suggests that the government is not
                generating enough regular income to meet its regular
                expenditure. This can leave fewer resources available for
                investment in long-term assets and development projects.
              </p>
            </div>
          </div>
        </section>

        {/* Formulas */}
        <section id="formulas" className="mb-16 scroll-mt-8">
          <SectionHeading
            number="04"
            title="Fiscal Deficit vs Revenue Deficit: Formulas"
            subtitle="Both formulas are simple, but the types of receipts and expenditure included in each calculation are different."
          />

          <div className="grid gap-5 md:grid-cols-2">
            <FormulaCard
              title="Fiscal Deficit Formula"
              formula="Total Expenditure − Total Non-Debt Receipts"
              explanation="Total non-debt receipts consist of revenue receipts and non-debt capital receipts. Borrowings are excluded because they create a repayment obligation."
              color="blue"
            />

            <FormulaCard
              title="Revenue Deficit Formula"
              formula="Revenue Expenditure − Revenue Receipts"
              explanation="Revenue receipts include tax and non-tax revenue. Revenue expenditure includes regular government expenses such as salaries, pensions and subsidies."
              color="indigo"
            />
          </div>

          <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5">
            <h3 className="mb-4 flex items-center gap-2 font-bold text-slate-900">
              <BookOpen size={19} className="text-blue-700" />
              Understand the important terms
            </h3>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl bg-slate-50 p-4">
                <h4 className="font-bold text-blue-800">Revenue Receipts</h4>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  Income that generally does not create a liability or reduce
                  government assets. Examples include income tax, GST,
                  customs duty and dividends.
                </p>
              </div>

              <div className="rounded-xl bg-slate-50 p-4">
                <h4 className="font-bold text-blue-800">
                  Non-Debt Capital Receipts
                </h4>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  Capital receipts that do not create a new debt liability.
                  Examples include recovery of loans and disinvestment
                  proceeds.
                </p>
              </div>

              <div className="rounded-xl bg-slate-50 p-4">
                <h4 className="font-bold text-indigo-800">
                  Revenue Expenditure
                </h4>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  Spending that generally does not create a government asset.
                  Examples include salaries, pensions, subsidies and interest
                  payments.
                </p>
              </div>

              <div className="rounded-xl bg-slate-50 p-4">
                <h4 className="font-bold text-indigo-800">
                  Capital Expenditure
                </h4>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  Spending that creates assets or reduces liabilities.
                  Examples include building highways, bridges, railway
                  infrastructure and public facilities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Numerical Example */}
        <section id="example" className="mb-16 scroll-mt-8">
          <SectionHeading
            number="05"
            title="Numerical Example: Calculate Both Deficits"
            subtitle="Use the same government budget figures to calculate fiscal deficit and revenue deficit separately."
          />

          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="bg-gradient-to-r from-blue-700 to-indigo-700 p-5 text-white sm:p-6">
              <div className="flex items-center gap-3">
                <Calculator size={23} />
                <div>
                  <h3 className="font-bold">Government Budget Example</h3>
                  <p className="mt-1 text-sm text-blue-100">
                    All figures are hypothetical and expressed in crore rupees.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 sm:p-6">
              <h4 className="mb-4 font-bold text-slate-900">
                Step 1: Identify the budget figures
              </h4>

              <div className="grid gap-3 sm:grid-cols-2">
                <ExampleItem label="Revenue receipts" amount="₹80 crore" />
                <ExampleItem
                  label="Non-debt capital receipts"
                  amount="₹10 crore"
                />
                <ExampleItem
                  label="Revenue expenditure"
                  amount="₹100 crore"
                />
                <ExampleItem
                  label="Capital expenditure"
                  amount="₹30 crore"
                />
              </div>

              <div className="mt-5 rounded-xl border border-blue-100 bg-blue-50/70 p-4">
                <p className="text-sm font-bold text-blue-900">
                  Calculate total expenditure
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-700">
                  Revenue expenditure + Capital expenditure
                </p>
                <p className="mt-1 text-lg font-bold text-blue-800">
                  ₹100 crore + ₹30 crore = ₹130 crore
                </p>
              </div>

              <div className="mt-5 rounded-xl border border-indigo-100 bg-indigo-50/70 p-4">
                <p className="text-sm font-bold text-indigo-900">
                  Calculate total non-debt receipts
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-700">
                  Revenue receipts + Non-debt capital receipts
                </p>
                <p className="mt-1 text-lg font-bold text-indigo-800">
                  ₹80 crore + ₹10 crore = ₹90 crore
                </p>
              </div>

              <div className="my-6 border-t border-slate-200" />

              <h4 className="mb-4 font-bold text-slate-900">
                Step 2: Calculate Revenue Deficit
              </h4>

              <div className="rounded-xl border border-indigo-200 bg-indigo-50 p-5">
                <p className="text-sm text-indigo-800">
                  Revenue Deficit = Revenue Expenditure − Revenue Receipts
                </p>
                <p className="mt-3 text-xl font-bold text-indigo-900">
                  ₹100 crore − ₹80 crore
                </p>
                <div className="mt-4 flex items-center justify-between rounded-xl bg-white p-4">
                  <span className="text-sm font-semibold text-slate-700">
                    Revenue Deficit
                  </span>
                  <span className="text-2xl font-bold text-indigo-700">
                    ₹20 crore
                  </span>
                </div>
              </div>

              <div className="my-6 border-t border-slate-200" />

              <h4 className="mb-4 font-bold text-slate-900">
                Step 3: Calculate Fiscal Deficit
              </h4>

              <div className="rounded-xl border border-blue-200 bg-blue-50 p-5">
                <p className="text-sm text-blue-800">
                  Fiscal Deficit = Total Expenditure − Total Non-Debt Receipts
                </p>
                <p className="mt-3 text-xl font-bold text-blue-900">
                  ₹130 crore − ₹90 crore
                </p>
                <div className="mt-4 flex items-center justify-between rounded-xl bg-white p-4">
                  <span className="text-sm font-semibold text-slate-700">
                    Fiscal Deficit
                  </span>
                  <span className="text-2xl font-bold text-blue-700">
                    ₹40 crore
                  </span>
                </div>
              </div>

              <div className="mt-6 rounded-xl border border-green-200 bg-green-50 p-5">
                <div className="flex items-start gap-3">
                  <CheckCircle2
                    className="mt-0.5 shrink-0 text-green-700"
                    size={22}
                  />
                  <div>
                    <h4 className="font-bold text-green-900">
                      Final Answer
                    </h4>
                    <p className="mt-2 text-sm leading-7 text-slate-700">
                      The revenue deficit is ₹20 crore, while the fiscal
                      deficit is ₹40 crore. The revenue deficit measures the
                      shortfall in regular income, whereas the fiscal deficit
                      measures the overall financing gap.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Visual comparison */}
        <section className="mb-16">
          <SectionHeading
            number="06"
            title="Why Are the Two Deficits Different?"
            subtitle="The difference becomes clearer when you understand the two parts of government spending."
          />

          <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-blue-50/60 p-5 sm:p-7">
            <div className="mx-auto max-w-3xl">
              <div className="rounded-xl border border-blue-200 bg-white p-4 text-center shadow-sm">
                <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
                  Government Expenditure
                </p>
                <p className="mt-1 text-lg font-bold text-slate-900">
                  Total Expenditure
                </p>
              </div>

              <div className="flex justify-center py-3">
                <ArrowDown className="text-blue-600" size={24} />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-indigo-200 bg-white p-4 text-center">
                  <div className="mb-2 flex justify-center">
                    <Wallet className="text-indigo-700" size={24} />
                  </div>
                  <p className="font-bold text-indigo-800">
                    Revenue Expenditure
                  </p>
                  <p className="mt-2 text-xs leading-6 text-slate-600">
                    Salaries, pensions, subsidies and interest payments
                  </p>
                  <div className="mt-3 rounded-lg bg-indigo-50 p-2 text-xs font-bold text-indigo-800">
                    Used for Revenue Deficit
                  </div>
                </div>

                <div className="rounded-xl border border-blue-200 bg-white p-4 text-center">
                  <div className="mb-2 flex justify-center">
                    <Landmark className="text-blue-700" size={24} />
                  </div>
                  <p className="font-bold text-blue-800">
                    Capital Expenditure
                  </p>
                  <p className="mt-2 text-xs leading-6 text-slate-600">
                    Roads, bridges, railway infrastructure and other assets
                  </p>
                  <div className="mt-3 rounded-lg bg-blue-50 p-2 text-xs font-bold text-blue-800">
                    Included in Fiscal Deficit
                  </div>
                </div>
              </div>

              <div className="mt-5 rounded-xl border border-slate-200 bg-white p-4 text-center">
                <p className="font-bold text-slate-900">
                  Two Different Measurements
                </p>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-lg bg-indigo-50 p-3">
                    <p className="text-sm font-bold text-indigo-800">
                      Revenue Deficit
                    </p>
                    <p className="mt-1 text-xs text-slate-600">
                      Revenue expenditure − Revenue receipts
                    </p>
                  </div>
                  <div className="rounded-lg bg-blue-50 p-3">
                    <p className="text-sm font-bold text-blue-800">
                      Fiscal Deficit
                    </p>
                    <p className="mt-1 text-xs text-slate-600">
                      Total expenditure − Non-debt receipts
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="mt-4 text-sm leading-7 text-slate-600">
            Capital expenditure is included in fiscal deficit but not in
            revenue deficit. This is one important reason why the two
            measurements can be different.
          </p>
        </section>

        <AdSlot />

        {/* Comparison Table */}
        <section className="mb-16">
          <SectionHeading
            number="07"
            title="Fiscal Deficit vs Revenue Deficit: Comparison Table"
            subtitle="Compare their meaning, formulas, scope and economic significance."
          />

          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[680px] border-collapse text-left">
                <thead>
                  <tr className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white">
                    <th className="px-4 py-4 text-sm font-bold">
                      Basis of Comparison
                    </th>
                    <th className="px-4 py-4 text-sm font-bold">
                      Fiscal Deficit
                    </th>
                    <th className="px-4 py-4 text-sm font-bold">
                      Revenue Deficit
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <ComparisonRow
                    label="Meaning"
                    fiscal="Excess of total expenditure over total non-debt receipts."
                    revenue="Excess of revenue expenditure over revenue receipts."
                  />
                  <ComparisonRow
                    label="Formula"
                    fiscal="Total expenditure − Total non-debt receipts."
                    revenue="Revenue expenditure − Revenue receipts."
                  />
                  <ComparisonRow
                    label="Scope"
                    fiscal="Covers the overall government budget."
                    revenue="Covers only the revenue account."
                  />
                  <ComparisonRow
                    label="Expenditure included"
                    fiscal="Revenue expenditure and capital expenditure."
                    revenue="Only revenue expenditure."
                  />
                  <ComparisonRow
                    label="Receipts included"
                    fiscal="Revenue receipts and non-debt capital receipts."
                    revenue="Revenue receipts only."
                  />
                  <ComparisonRow
                    label="Borrowing"
                    fiscal="Indicates the overall financing gap that is generally financed through borrowing and other financing sources."
                    revenue="Does not directly measure total government borrowing."
                  />
                  <ComparisonRow
                    label="Main concern"
                    fiscal="Shows the government's overall financing requirement."
                    revenue="Shows whether regular income can cover regular expenditure."
                  />
                  <ComparisonRow
                    label="Capital investment"
                    fiscal="Includes capital expenditure."
                    revenue="Does not include capital expenditure."
                  />
                  <ComparisonRow
                    label="Example"
                    fiscal="₹40 crore in the example above."
                    revenue="₹20 crore in the example above."
                  />
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Why revenue deficit matters */}
        <section className="mb-16">
          <SectionHeading
            number="08"
            title="Why Is Revenue Deficit a Concern?"
            subtitle="A persistent revenue deficit can create challenges for government spending and long-term development."
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <InfoCard
              icon={Wallet}
              title="Insufficient Regular Income"
              color="indigo"
            >
              The government may not collect enough regular revenue to cover
              its salaries, pensions, subsidies and other operating expenses.
            </InfoCard>

            <InfoCard
              icon={Target}
              title="Less Room for Investment"
              color="blue"
            >
              More resources may be required to meet routine expenditure,
              leaving less flexibility for infrastructure and development
              projects.
            </InfoCard>

            <InfoCard
              icon={TrendingUp}
              title="Pressure on Public Finances"
              color="amber"
            >
              A persistent revenue deficit can increase the pressure to
              finance regular expenditure through borrowing or other
              adjustments.
            </InfoCard>
          </div>

          <div className="mt-5 rounded-2xl border border-amber-200 bg-amber-50 p-5">
            <div className="flex items-start gap-3">
              <AlertCircle
                size={22}
                className="mt-0.5 shrink-0 text-amber-700"
              />
              <div>
                <h3 className="font-bold text-slate-900">
                  Important Economic Point
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-700">
                  Not all government borrowing is necessarily harmful.
                  Borrowing to create productive assets can support future
                  economic growth. However, persistent borrowing to meet
                  routine expenditure can create long-term fiscal pressure.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Fiscal deficit significance */}
        <section className="mb-16">
          <SectionHeading
            number="09"
            title="Why Is Fiscal Deficit Important?"
            subtitle="Fiscal deficit is an important indicator of the government's overall financial position."
          />

          <div className="grid gap-4 md:grid-cols-2">
            <InfoCard
              icon={IndianRupee}
              title="Measures Financing Needs"
              color="blue"
            >
              It indicates the amount of expenditure that cannot be covered
              through non-debt receipts and therefore needs financing.
            </InfoCard>

            <InfoCard
              icon={BarChart3}
              title="Helps Assess Fiscal Policy"
              color="indigo"
            >
              Economists and policymakers use fiscal deficit to understand
              government spending, revenue collection and borrowing
              requirements.
            </InfoCard>

            <InfoCard
              icon={TrendingUp}
              title="Can Influence the Economy"
              color="sky"
            >
              Government borrowing and spending can influence aggregate
              demand, investment, interest rates and economic growth.
            </InfoCard>

            <InfoCard
              icon={Scale}
              title="Supports Fiscal Planning"
              color="green"
            >
              It helps the government plan its borrowing programme and assess
              the sustainability of public finances.
            </InfoCard>
          </div>
        </section>

        {/* Indian Context */}
        <section className="mb-16">
          <SectionHeading
            number="10"
            title="Fiscal Deficit and Revenue Deficit in India"
            subtitle="Both indicators are important parts of India's Union Budget and government fiscal management."
          />

          <div className="rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-5 sm:p-7">
            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-white p-3 text-blue-700 shadow-sm">
                <Landmark size={25} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  Role in the Union Budget
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  The Government of India presents estimates of receipts and
                  expenditure in its annual Union Budget. Fiscal deficit and
                  revenue deficit help explain different aspects of these
                  estimates.
                </p>
              </div>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-blue-100 bg-white p-5">
                <h4 className="font-bold text-blue-800">
                  Fiscal Deficit in India
                </h4>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  It is calculated by subtracting total non-debt receipts from
                  total expenditure. It helps indicate the Union Government's
                  overall financing requirement.
                </p>
              </div>

              <div className="rounded-xl border border-indigo-100 bg-white p-5">
                <h4 className="font-bold text-indigo-800">
                  Revenue Deficit in India
                </h4>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  It is calculated by subtracting revenue receipts from
                  revenue expenditure. It indicates whether regular government
                  income is sufficient to meet regular spending.
                </p>
              </div>
            </div>

            <div className="mt-5 rounded-xl border border-slate-200 bg-white p-5">
              <h4 className="font-bold text-slate-900">
                Where Can You Find These Figures?
              </h4>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                These figures are published in official budget documents,
                including the Budget at a Glance and the Receipts Budget of
                the Government of India.
              </p>
              <a
                href="https://www.indiabudget.gov.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-blue-700 hover:text-blue-900"
              >
                Visit the Official Union Budget Website
                <ArrowRight size={15} />
              </a>
            </div>
          </div>
        </section>

        {/* Common mistakes */}
        <section className="mb-16">
          <SectionHeading
            number="11"
            title="Common Mistakes to Avoid"
            subtitle="Remember these points to avoid confusing the two deficit measurements."
          />

          <div className="space-y-4">
            <div className="flex gap-4 rounded-xl border border-slate-200 bg-white p-4">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-red-50 text-red-600">
                <CircleHelp size={19} />
              </div>
              <div>
                <h3 className="font-bold text-slate-900">
                  Mistake: Using revenue expenditure in the fiscal deficit formula
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  Fiscal deficit uses total expenditure, which includes both
                  revenue expenditure and capital expenditure.
                </p>
              </div>
            </div>

            <div className="flex gap-4 rounded-xl border border-slate-200 bg-white p-4">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-red-50 text-red-600">
                <CircleHelp size={19} />
              </div>
              <div>
                <h3 className="font-bold text-slate-900">
                  Mistake: Including capital receipts in revenue receipts
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  Revenue receipts and non-debt capital receipts are different
                  categories. Both are included in total non-debt receipts for
                  calculating fiscal deficit.
                </p>
              </div>
            </div>

            <div className="flex gap-4 rounded-xl border border-slate-200 bg-white p-4">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-red-50 text-red-600">
                <CircleHelp size={19} />
              </div>
              <div>
                <h3 className="font-bold text-slate-900">
                  Mistake: Assuming fiscal deficit and revenue deficit are the same
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  Fiscal deficit measures the overall financing gap, whereas
                  revenue deficit measures the shortfall in the revenue
                  account.
                </p>
              </div>
            </div>

            <div className="flex gap-4 rounded-xl border border-slate-200 bg-white p-4">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-red-50 text-red-600">
                <CircleHelp size={19} />
              </div>
              <div>
                <h3 className="font-bold text-slate-900">
                  Mistake: Assuming fiscal deficit must always be higher
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  Their relationship depends on capital expenditure and
                  non-debt capital receipts. Do not assume one must always be
                  greater than the other.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="mb-16">
          <SectionHeading
            number="12"
            title="Frequently Asked Questions"
            subtitle="Quick answers to common questions about fiscal deficit and revenue deficit."
          />

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group rounded-xl border border-slate-200 bg-white p-5 transition hover:border-blue-200 hover:shadow-sm"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-slate-900">
                  <span className="text-sm sm:text-base">
                    {faq.question}
                  </span>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-700 transition group-open:rotate-180">
                    <ArrowDown size={17} />
                  </span>
                </summary>
                <p className="mt-4 border-t border-slate-100 pt-4 text-sm leading-7 text-slate-600">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* Conclusion */}
        <section className="mb-12 overflow-hidden rounded-2xl bg-gradient-to-br from-blue-700 via-blue-700 to-indigo-800 p-6 text-white sm:p-9">
          <div className="max-w-3xl">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/15">
              <CheckCircle2 size={25} />
            </div>
            <h2 className="text-2xl font-bold sm:text-3xl">
              Final Takeaway
            </h2>
            <p className="mt-4 text-sm leading-8 text-blue-100 sm:text-base">
              Fiscal deficit and revenue deficit measure two different
              financial gaps in government accounts. Fiscal deficit shows the
              overall gap between total expenditure and non-debt receipts.
              Revenue deficit shows whether revenue receipts are sufficient to
              cover revenue expenditure.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-white/20 bg-white/10 p-4">
                <p className="text-sm font-bold text-white">
                  Fiscal Deficit
                </p>
                <p className="mt-2 text-sm text-blue-100">
                  Overall government financing gap.
                </p>
              </div>
              <div className="rounded-xl border border-white/20 bg-white/10 p-4">
                <p className="text-sm font-bold text-white">
                  Revenue Deficit
                </p>
                <p className="mt-2 text-sm text-blue-100">
                  Shortfall in regular government income.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Related Topics */}
        <section className="mb-12">
          <div className="mb-5">
            <h2 className="text-2xl font-bold text-slate-900">
              Explore Related Economics Topics
            </h2>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              Continue learning about government budgets, fiscal policy and
              public finance.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "What Is Fiscal Deficit?",
                href: "/economics/fiscal-deficit/what-is-fiscal-deficit",
              },
              {
                title: "Budget Deficit vs Fiscal Deficit",
                href: "/economics/budget-deficit-vs-fiscal-deficit",
              },
              {
                title: "What Is Fiscal Policy?",
                href: "/economics/fiscal-policy/what-is-fiscal-policy",
              },
              {
                title: "Tools of Fiscal Policy",
                href: "/economics/fiscal-policy/tools-of-fiscal-policy",
              },
              {
                title: "Expansionary Fiscal Policy",
                href: "/economics/fiscal-policy/expansionary-fiscal-policy",
              },
              {
                title: "Government Budget",
                href: "/economics/government-budget",
              },
            ].map((topic) => (
              <a
                key={topic.href}
                href={topic.href}
                className="group flex items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white p-4 transition hover:border-blue-300 hover:bg-blue-50/50"
              >
                <span className="text-sm font-bold text-slate-800 group-hover:text-blue-700">
                  {topic.title}
                </span>
                <ArrowRight
                  size={17}
                  className="shrink-0 text-blue-600 transition group-hover:translate-x-1"
                />
              </a>
            ))}
          </div>
        </section>

        {/* References */}
        <section className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
          <div className="flex items-center gap-2">
            <FileText size={19} className="text-blue-700" />
            <h2 className="font-bold text-slate-900">
              References and Further Reading
            </h2>
          </div>
          <p className="mt-2 text-sm leading-7 text-slate-600">
            For official definitions and government budget information, refer
            to these resources:
          </p>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a
                href="https://www.indiabudget.gov.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-blue-700 hover:underline"
              >
                Union Budget of India – Official Website
              </a>
              <p className="mt-1 text-xs leading-6 text-slate-500">
                Official budget documents, receipts and expenditure estimates.
              </p>
            </li>
            <li>
              <a
                href="https://dea.gov.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-blue-700 hover:underline"
              >
                Department of Economic Affairs
              </a>
              <p className="mt-1 text-xs leading-6 text-slate-500">
                Government information on economic and fiscal matters.
              </p>
            </li>
            <li>
              <a
                href="https://www.indiabudget.gov.in/budget2025-26/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-blue-700 hover:underline"
              >
                Union Budget 2025–26
              </a>
              <p className="mt-1 text-xs leading-6 text-slate-500">
                Budget documents and fiscal estimates for reference.
              </p>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
