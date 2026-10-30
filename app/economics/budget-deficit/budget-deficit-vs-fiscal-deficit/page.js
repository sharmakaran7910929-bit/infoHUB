
import {
  ArrowDown,
  BarChart3,
  Building2,
  Calculator,
  CheckCircle2,
  CircleHelp,
  FileText,
  History,
  IndianRupee,
  Info,
  Landmark,
  Scale,
  Target,
  TrendingUp,
  Wallet,
} from "lucide-react";

import AdSlot from "../../../../components/AdSlot";

export const metadata = {
  title: "Budget Deficit vs Fiscal Deficit: Meaning, Formula and Examples",
  description:
    "Understand the difference between budget deficit and fiscal deficit with simple explanations, formulas, numerical examples and Indian economy context.",
  alternates: {
    canonical: "/economics/budget-deficit-vs-fiscal-deficit",
  },
};

const SectionHeading = ({ eyebrow, title, description }) => (
  <div className="mb-7">
    {eyebrow && (
      <p className="mb-2 text-sm font-bold uppercase tracking-wider text-blue-700">
        {eyebrow}
      </p>
    )}
    <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
      {title}
    </h2>
    {description && (
      <p className="mt-3 max-w-3xl leading-7 text-slate-600">
        {description}
      </p>
    )}
  </div>
);

const InfoCard = ({ icon: Icon, title, children }) => (
  <div className="rounded-2xl border border-blue-100 bg-gradient-to-br from-white to-blue-50 p-5 shadow-sm">
    <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
      <Icon size={21} />
    </div>
    <h3 className="mb-2 font-bold text-slate-900">{title}</h3>
    <div className="text-sm leading-6 text-slate-600">{children}</div>
  </div>
);

const FormulaCard = ({ title, formula, note, color = "blue" }) => (
  <div
    className={`rounded-2xl border p-5 ${
      color === "indigo"
        ? "border-indigo-200 bg-gradient-to-br from-white to-indigo-50"
        : "border-blue-200 bg-gradient-to-br from-white to-blue-50"
    }`}
  >
    <h3 className="mb-3 font-bold text-slate-900">{title}</h3>
    <div className="rounded-xl border border-blue-100 bg-white p-4 text-center">
      <p className="text-base font-bold leading-7 text-blue-800 md:text-lg">
        {formula}
      </p>
    </div>
    {note && (
      <p className="mt-3 text-sm leading-6 text-slate-600">{note}</p>
    )}
  </div>
);

const ComparisonRow = ({ heading, budget, fiscal }) => (
  <tr className="border-b border-blue-100 last:border-0">
    <th className="w-[22%] bg-blue-50/70 px-4 py-4 text-left text-sm font-bold text-slate-800">
      {heading}
    </th>
    <td className="px-4 py-4 text-sm leading-6 text-slate-600">
      {budget}
    </td>
    <td className="bg-indigo-50/40 px-4 py-4 text-sm leading-6 text-slate-600">
      {fiscal}
    </td>
  </tr>
);

export default function BudgetDeficitVsFiscalDeficitPage() {
  return (
    <main className="min-h-screen bg-white text-slate-800">
      {/* Introduction */}
      <section className="relative overflow-hidden border-b border-blue-100 bg-gradient-to-br from-white via-blue-50 to-indigo-100">
        <div className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-sm font-bold text-blue-800">
                <Scale size={16} />
                Government Finance
              </div>

              <h1 className="max-w-3xl text-3xl font-bold leading-tight tracking-tight text-slate-950 md:text-5xl">
                Budget Deficit vs Fiscal Deficit
                <span className="mt-2 block text-blue-700">
                  Meaning, Formulas and Examples
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
                Both terms describe a gap in government finances, but
                they treat borrowings differently. Budget deficit uses
                total receipts, including debt receipts, while fiscal
                deficit considers only non-debt receipts.
              </p>
            </div>

            <div className="rounded-3xl border border-blue-200 bg-white/90 p-6 shadow-xl shadow-blue-900/5">
              <h2 className="mb-5 text-center text-lg font-bold text-slate-900">
                The Central Difference
              </h2>

              <div className="space-y-4">
                <div className="rounded-xl border border-blue-200 bg-blue-50 p-4 text-center">
                  <p className="font-bold text-blue-900">
                    Budget Deficit
                  </p>
                  <p className="mt-1 text-sm text-slate-600">
                    Borrowings are included in total receipts.
                  </p>
                </div>

                <div className="flex justify-center">
                  <ArrowDown className="text-blue-600" size={22} />
                </div>

                <div className="rounded-xl border border-indigo-200 bg-indigo-50 p-4 text-center">
                  <p className="font-bold text-indigo-900">
                    Fiscal Deficit
                  </p>
                  <p className="mt-1 text-sm text-slate-600">
                    Borrowings are excluded from non-debt receipts.
                  </p>
                </div>
              </div>

              <p className="mt-5 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 p-4 text-center text-sm font-bold leading-6 text-slate-800">
                The treatment of borrowing is the key difference.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-5 py-12 md:px-8">
        {/* Simple explanation */}
        <section className="mb-14">
          <SectionHeading
            eyebrow="At a Glance"
            title="What Is the Actual Difference?"
            description="The main difference is which receipts are deducted from total government expenditure."
          />

          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-blue-200 bg-gradient-to-br from-white to-blue-50 p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-xl bg-blue-100 p-3 text-blue-700">
                  <Wallet size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  Budget Deficit
                </h3>
              </div>

              <p className="leading-7 text-slate-600">
                Budget deficit, in the simplified total-receipts
                comparison used here, is the difference between total
                expenditure and total receipts. Total receipts include
                both non-debt receipts and debt receipts, such as
                borrowings.
              </p>

              <div className="mt-5 rounded-xl bg-white p-4">
                <p className="font-bold text-blue-900">Remember</p>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  Borrowings are included in total receipts.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-indigo-200 bg-gradient-to-br from-white to-indigo-50 p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-xl bg-indigo-100 p-3 text-indigo-700">
                  <Landmark size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  Fiscal Deficit
                </h3>
              </div>

              <p className="leading-7 text-slate-600">
                Fiscal deficit is the difference between total
                expenditure and total non-debt receipts. Borrowings
                are excluded because they create a repayment obligation
                for the government.
              </p>

              <div className="mt-5 rounded-xl bg-white p-4">
                <p className="font-bold text-indigo-900">Remember</p>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  Borrowings are not deducted from expenditure when
                  calculating fiscal deficit.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Formulas */}
        <section className="mb-14">
          <SectionHeading
            eyebrow="Important Formulas"
            title="Formulas for Budget Deficit and Fiscal Deficit"
            description="Remember these two formulas. The same numerical example below shows how they produce different results."
          />

          <div className="grid gap-5 md:grid-cols-2">
            <FormulaCard
              title="Budget Deficit Formula"
              formula="Total Expenditure − Total Receipts"
              note="Total receipts include non-debt receipts and debt receipts, including borrowings."
            />

            <FormulaCard
              title="Fiscal Deficit Formula"
              formula="Total Expenditure − Total Non-Debt Receipts"
              note="Non-debt receipts include revenue receipts and non-debt capital receipts. Borrowings are excluded."
              color="indigo"
            />
          </div>

          <div className="mt-5 rounded-2xl border border-blue-200 bg-blue-50 p-5">
            <div className="flex items-start gap-3">
              <Info className="mt-1 shrink-0 text-blue-700" size={21} />
              <p className="text-sm leading-7 text-slate-700">
                <strong>Why are borrowings treated differently?</strong>{" "}
                Borrowing provides money to the government, but it also
                creates a liability that must be repaid. Therefore,
                borrowings are included in total receipts for this
                comparison but excluded from non-debt receipts used
                to calculate fiscal deficit.
              </p>
            </div>
          </div>
        </section>

        {/* Numerical example */}
        <section className="mb-14">
          <SectionHeading
            eyebrow="Numerical Example"
            title="Understand Both Deficits With One Example"
            description="Suppose a government spends ₹100 crore and receives money through taxes, other non-debt sources and borrowings."
          />

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-blue-200 bg-gradient-to-br from-white to-blue-50 p-6">
              <h3 className="mb-5 text-lg font-bold text-slate-900">
                Government Financial Details
              </h3>

              <div className="space-y-3">
                <div className="flex items-center justify-between rounded-xl bg-white p-4">
                  <span className="text-sm text-slate-600">
                    Total Expenditure
                  </span>
                  <span className="font-bold text-slate-900">
                    ₹100 crore
                  </span>
                </div>

                <div className="flex items-center justify-between rounded-xl bg-white p-4">
                  <span className="text-sm text-slate-600">
                    Revenue Receipts
                  </span>
                  <span className="font-bold text-slate-900">
                    ₹70 crore
                  </span>
                </div>

                <div className="flex items-center justify-between rounded-xl bg-white p-4">
                  <span className="text-sm text-slate-600">
                    Non-Debt Capital Receipts
                  </span>
                  <span className="font-bold text-slate-900">
                    ₹10 crore
                  </span>
                </div>

                <div className="flex items-center justify-between rounded-xl border border-indigo-200 bg-indigo-50 p-4">
                  <span className="text-sm text-indigo-900">
                    Debt Receipts / Borrowings
                  </span>
                  <span className="font-bold text-indigo-900">
                    ₹15 crore
                  </span>
                </div>
              </div>

              <div className="mt-5 rounded-xl border border-blue-200 bg-white p-4">
                <p className="font-bold text-blue-900">
                  Total Non-Debt Receipts
                </p>
                <p className="mt-1 text-sm text-slate-600">
                  ₹70 crore + ₹10 crore = ₹80 crore
                </p>
              </div>

              <div className="mt-3 rounded-xl border border-indigo-200 bg-white p-4">
                <p className="font-bold text-indigo-900">
                  Total Receipts Including Borrowings
                </p>
                <p className="mt-1 text-sm text-slate-600">
                  ₹80 crore + ₹15 crore = ₹95 crore
                </p>
              </div>
            </div>

            <div className="space-y-5">
              <div className="rounded-2xl border border-blue-200 bg-white p-6 shadow-sm">
                <div className="mb-3 flex items-center gap-2">
                  <Wallet className="text-blue-700" size={22} />
                  <h3 className="text-lg font-bold text-blue-900">
                    Budget Deficit Calculation
                  </h3>
                </div>

                <p className="text-sm leading-6 text-slate-600">
                  Subtract total receipts, including borrowings, from
                  total expenditure.
                </p>

                <div className="mt-4 rounded-xl bg-blue-50 p-4">
                  <p className="font-bold text-slate-800">
                    ₹100 crore − ₹95 crore
                  </p>
                  <p className="mt-2 text-2xl font-bold text-blue-800">
                    ₹5 crore
                  </p>
                  <p className="mt-1 text-sm text-slate-600">
                    Budget Deficit
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-indigo-200 bg-white p-6 shadow-sm">
                <div className="mb-3 flex items-center gap-2">
                  <Landmark className="text-indigo-700" size={22} />
                  <h3 className="text-lg font-bold text-indigo-900">
                    Fiscal Deficit Calculation
                  </h3>
                </div>

                <p className="text-sm leading-6 text-slate-600">
                  Subtract only non-debt receipts. Do not include
                  borrowings in this calculation.
                </p>

                <div className="mt-4 rounded-xl bg-indigo-50 p-4">
                  <p className="font-bold text-slate-800">
                    ₹100 crore − ₹80 crore
                  </p>
                  <p className="mt-2 text-2xl font-bold text-indigo-800">
                    ₹20 crore
                  </p>
                  <p className="mt-1 text-sm text-slate-600">
                    Fiscal Deficit
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50 p-6 md:p-8">
            <h3 className="text-xl font-bold text-slate-900">
              Notice the Actual Difference
            </h3>

            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-blue-200 bg-white p-5">
                <p className="text-sm font-bold text-blue-800">
                  Budget Deficit
                </p>
                <p className="mt-2 text-3xl font-bold text-blue-900">
                  ₹5 crore
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  The ₹15 crore borrowing is included in total receipts,
                  reducing the remaining gap.
                </p>
              </div>

              <div className="rounded-xl border border-indigo-200 bg-white p-5">
                <p className="text-sm font-bold text-indigo-800">
                  Fiscal Deficit
                </p>
                <p className="mt-2 text-3xl font-bold text-indigo-900">
                  ₹20 crore
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  The ₹15 crore borrowing is excluded, so the full
                  financing gap before borrowing remains visible.
                </p>
              </div>
            </div>

            <p className="mt-5 text-sm leading-7 text-slate-700">
              <strong>In simple words:</strong> Counting borrowing as
              a receipt reduces the remaining budget gap. Excluding
              borrowing shows how much the government needs to finance
              after using its non-debt receipts.
            </p>
          </div>
        </section>

        <AdSlot />

        {/* Comparison table */}
        <section className="mb-14">
          <SectionHeading
            eyebrow="Detailed Comparison"
            title="Budget Deficit vs Fiscal Deficit: Key Differences"
            description="Compare the two concepts based on their formulas, treatment of borrowing and economic purpose."
          />

          <div className="overflow-hidden rounded-2xl border border-blue-200 shadow-sm">
            <div className="grid grid-cols-[22%_39%_39%] bg-gradient-to-r from-blue-700 to-indigo-700 text-white">
              <div className="p-4 text-sm font-bold">Basis</div>
              <div className="border-l border-white/20 p-4 text-sm font-bold">
                Budget Deficit
              </div>
              <div className="border-l border-white/20 p-4 text-sm font-bold">
                Fiscal Deficit
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[720px] border-collapse">
                <tbody>
                  <ComparisonRow
                    heading="Formula"
                    budget="Total Expenditure − Total Receipts"
                    fiscal="Total Expenditure − Total Non-Debt Receipts"
                  />
                  <ComparisonRow
                    heading="Debt Receipts"
                    budget="Included in total receipts."
                    fiscal="Excluded from non-debt receipts."
                  />
                  <ComparisonRow
                    heading="Main Focus"
                    budget="The remaining difference after counting total receipts."
                    fiscal="The government's financing gap before borrowing is counted."
                  />
                  <ComparisonRow
                    heading="Borrowing"
                    budget="Borrowings reduce the calculated gap because they are included in receipts."
                    fiscal="Borrowings do not reduce the calculated deficit."
                  />
                  <ComparisonRow
                    heading="Purpose"
                    budget="Shows the difference between expenditure and total receipts."
                    fiscal="Shows the government's financing requirement."
                  />
                  <ComparisonRow
                    heading="Nature"
                    budget="The total-receipts comparison is a simplified accounting presentation."
                    fiscal="A specifically defined fiscal indicator."
                  />
                  <ComparisonRow
                    heading="Current Relevance in India"
                    budget="The traditional Indian budget-deficit measure is mainly relevant for historical understanding."
                    fiscal="A major indicator reported in current Union Budget documents."
                  />
                  <ComparisonRow
                    heading="GDP Comparison"
                    budget="Not generally used as the main current Indian deficit target."
                    fiscal="Frequently expressed as a percentage of GDP."
                  />
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Financing distinction */}
        <section className="mb-14">
          <SectionHeading
            eyebrow="Government Financing"
            title="Why Are Borrowings Excluded From Fiscal Deficit?"
            description="Borrowing helps the government finance a shortfall, but it is not the same as earning revenue."
          />

          <div className="rounded-2xl border border-blue-200 bg-gradient-to-br from-white to-blue-50 p-6 md:p-8">
            <div className="grid gap-5 md:grid-cols-2">
              <div className="rounded-xl border border-blue-100 bg-white p-5">
                <div className="mb-3 flex items-center gap-3">
                  <IndianRupee className="text-blue-700" size={23} />
                  <h3 className="font-bold text-slate-900">
                    Non-Debt Receipts
                  </h3>
                </div>
                <p className="text-sm leading-6 text-slate-600">
                  These receipts do not create a repayment liability
                  for the government.
                </p>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-600">
                  <li>Tax revenue</li>
                  <li>Non-tax revenue</li>
                  <li>Recovery of loans</li>
                  <li>Disinvestment proceeds</li>
                </ul>
              </div>

              <div className="rounded-xl border border-indigo-100 bg-white p-5">
                <div className="mb-3 flex items-center gap-3">
                  <Landmark className="text-indigo-700" size={23} />
                  <h3 className="font-bold text-slate-900">
                    Debt Receipts
                  </h3>
                </div>
                <p className="text-sm leading-6 text-slate-600">
                  These receipts create a repayment obligation or
                  increase government liabilities.
                </p>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-600">
                  <li>Market borrowings</li>
                  <li>Treasury Bills</li>
                  <li>Small savings liabilities</li>
                  <li>Other debt-creating receipts</li>
                </ul>
              </div>
            </div>

            <div className="mt-5 rounded-xl border border-blue-200 bg-white p-5">
              <p className="font-bold text-blue-900">
                Why does this matter?
              </p>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                If the government borrows ₹15 crore, it receives money
                today but must repay that amount in the future.
                Fiscal deficit therefore excludes this borrowing when
                measuring the gap between expenditure and non-debt
                receipts.
              </p>
            </div>
          </div>
        </section>

        <AdSlot />

        {/* Economic significance */}
        <section className="mb-14">
          <SectionHeading
            eyebrow="Economic Significance"
            title="Why Is Fiscal Deficit Important?"
            description="Fiscal deficit helps policymakers understand the government's financing requirement and the role of borrowing in public finances."
          />

          <div className="grid gap-5 md:grid-cols-2">
            <InfoCard icon={BarChart3} title="Government Borrowing">
              It helps estimate how much financing the government needs
              to arrange through borrowing and other financing sources.
            </InfoCard>

            <InfoCard icon={TrendingUp} title="Public Debt">
              Persistent fiscal deficits financed through borrowing
              can increase government debt and future interest payments.
            </InfoCard>

            <InfoCard icon={Target} title="Fiscal Responsibility">
              Fiscal deficit as a percentage of GDP helps monitor
              fiscal targets and progress towards fiscal consolidation.
            </InfoCard>

            <InfoCard icon={Building2} title="Economic Planning">
              Policymakers use the measure while planning expenditure,
              revenue, borrowing and public investment.
            </InfoCard>
          </div>

          <div className="mt-6 rounded-2xl border border-indigo-200 bg-gradient-to-r from-blue-50 to-indigo-50 p-6">
            <h3 className="mb-2 font-bold text-indigo-900">
              Does a Higher Fiscal Deficit Always Mean a Bad Economy?
            </h3>
            <p className="text-sm leading-7 text-slate-700">
              No. Its impact depends on the size of the deficit,
              borrowing costs, economic conditions and how the borrowed
              money is used. Productive investment in infrastructure
              can support future growth, while persistent unsustainable
              borrowing can increase debt and interest burdens.
            </p>
          </div>
        </section>

        {/* Indian context */}
        <section className="mb-14">
          <SectionHeading
            eyebrow="Indian Economy"
            title="Why Is Fiscal Deficit More Relevant in India's Current Budget?"
            description="India's traditional budget-deficit terminology is linked to an earlier system of short-term government financing."
          />

          <div className="rounded-2xl border border-blue-200 bg-gradient-to-br from-white via-blue-50 to-indigo-50 p-6 md:p-8">
            <div className="space-y-5">
              <div className="grid gap-4 md:grid-cols-[150px_1fr] md:items-center">
                <div className="rounded-xl bg-blue-100 p-4 text-center font-bold text-blue-900">
                  Earlier System
                </div>
                <div className="rounded-xl border border-blue-100 bg-white p-4">
                  <h3 className="font-bold text-slate-900">
                    Traditional Budget Deficit
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    In traditional Indian public-finance terminology,
                    budget deficit referred to the part of the deficit
                    financed through short-term borrowings, particularly
                    ad-hoc Treasury Bills.
                  </p>
                </div>
              </div>

              <div className="flex justify-center">
                <ArrowDown className="text-blue-600" size={24} />
              </div>

              <div className="grid gap-4 md:grid-cols-[150px_1fr] md:items-center">
                <div className="rounded-xl bg-indigo-100 p-4 text-center font-bold text-indigo-900">
                  1997 Reform
                </div>
                <div className="rounded-xl border border-indigo-100 bg-white p-4">
                  <h3 className="font-bold text-slate-900">
                    Discontinuation of Ad-Hoc Treasury Bills
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    The government discontinued ad-hoc and tap Treasury
                    Bills from April 1997, changing the earlier
                    arrangement for automatic short-term financing.
                  </p>
                </div>
              </div>

              <div className="flex justify-center">
                <ArrowDown className="text-indigo-600" size={24} />
              </div>

              <div className="grid gap-4 md:grid-cols-[150px_1fr] md:items-center">
                <div className="rounded-xl bg-blue-700 p-4 text-center font-bold text-white">
                  Current Practice
                </div>
                <div className="rounded-xl border border-blue-200 bg-white p-4">
                  <h3 className="font-bold text-slate-900">
                    Fiscal Deficit as a Key Indicator
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    Fiscal deficit is now a major measure used to
                    understand the government's overall financing
                    requirement and is reported in Union Budget documents.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-5 flex items-start gap-3 rounded-xl border border-blue-200 bg-blue-50 p-4">
            <History className="mt-1 shrink-0 text-blue-700" size={21} />
            <p className="text-sm leading-6 text-slate-600">
              <strong>Historical note:</strong> The traditional Indian
              budget-deficit measure lost its relevance after the 1997
              reforms. The total-receipts formula explained earlier is
              a simplified accounting comparison; it should not be
              confused with the historical technical definition of
              budget deficit used in India.
            </p>
          </div>
        </section>

        {/* Common mistakes */}
        <section className="mb-14">
          <SectionHeading
            eyebrow="Avoid Confusion"
            title="Common Mistakes"
            description="Keep these points in mind when studying budget deficit and fiscal deficit."
          />

          <div className="space-y-4">
            {[
              {
                title: "Including borrowings in non-debt receipts",
                text: "Borrowings are debt receipts. They must not be included while calculating fiscal deficit.",
              },
              {
                title: "Ignoring borrowings in total receipts",
                text: "In the simplified total-receipts comparison, debt receipts are included when calculating the remaining budget gap.",
              },
              {
                title: "Treating borrowing as government income",
                text: "Borrowing provides funds but creates a repayment obligation. It is different from tax revenue or other non-debt receipts.",
              },
              {
                title: "Confusing the simplified formula with India's historical definition",
                text: "The traditional Indian budget-deficit measure had a specific short-term financing meaning and is no longer a key current Union Budget indicator.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex gap-4 rounded-xl border border-blue-100 bg-white p-5 shadow-sm"
              >
                <div className="mt-1 shrink-0 text-blue-700">
                  <Info size={21} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">{item.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQs */}
        <section className="mb-14">
          <SectionHeading
            eyebrow="Frequently Asked Questions"
            title="Budget Deficit vs Fiscal Deficit FAQs"
            description="Quick answers to common questions about the two concepts."
          />

          <div className="space-y-4">
            {[
              {
                q: "What is the formula for budget deficit?",
                a: "In the simplified total-receipts comparison used here: Budget Deficit = Total Expenditure − Total Receipts. Total receipts include both non-debt receipts and debt receipts.",
              },
              {
                q: "What is the formula for fiscal deficit?",
                a: "Fiscal Deficit = Total Expenditure − Total Non-Debt Receipts. Borrowings and other debt-creating receipts are excluded.",
              },
              {
                q: "Why are borrowings excluded from fiscal deficit?",
                a: "Borrowings create a repayment obligation. Fiscal deficit measures the gap after non-debt receipts, so borrowing is not treated as a receipt that reduces that gap.",
              },
              {
                q: "Can budget deficit and fiscal deficit have different values?",
                a: "Yes. In the simplified comparison, they differ because budget deficit uses total receipts, including debt receipts, while fiscal deficit uses only non-debt receipts.",
              },
              {
                q: "Which deficit is important in India's current Union Budget?",
                a: "Fiscal deficit is a major indicator reported in current Union Budget documents. The traditional Indian budget-deficit measure lost its relevance after the 1997 reforms.",
              },
              {
                q: "Is fiscal deficit always harmful?",
                a: "No. Its impact depends on the amount, financing conditions and how the government uses the funds. Productive investment can support growth, while unsustainable borrowing can increase debt pressure.",
              },
              {
                q: "What is the difference between fiscal deficit and revenue deficit?",
                a: "Fiscal deficit compares total expenditure with total non-debt receipts. Revenue deficit compares revenue expenditure with revenue receipts.",
              },
            ].map((item) => (
              <details
                key={item.q}
                className="group rounded-xl border border-blue-100 bg-white p-5 open:border-blue-300 open:bg-gradient-to-r open:from-white open:to-blue-50"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-slate-900">
                  <span>{item.q}</span>
                  <CircleHelp
                    size={19}
                    className="shrink-0 text-blue-700 transition-transform group-open:rotate-12"
                  />
                </summary>

                <p className="mt-4 border-t border-blue-100 pt-4 text-sm leading-7 text-slate-600">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </section>
<AdSlot />
        {/* Conclusion */}
        <section className="mb-12 rounded-3xl border border-blue-200 bg-gradient-to-br from-blue-50 via-white to-indigo-100 p-7 md:p-10">
          <div className="flex items-start gap-4">
            <div className="rounded-xl bg-blue-100 p-3 text-blue-800">
              <CheckCircle2 size={26} />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-950">
                Key Takeaway
              </h2>

              <p className="mt-4 leading-8 text-slate-700">
                Budget deficit, in the simplified total-receipts
                comparison, subtracts all receipts including borrowings
                from total expenditure. Fiscal deficit subtracts only
                non-debt receipts and excludes borrowings. Therefore,
                borrowing reduces the remaining gap in the first
                calculation but does not reduce fiscal deficit.
                Fiscal deficit is the key current indicator used to
                understand the government's financing requirement in India.
              </p>
            </div>
          </div>
        </section>

        {/* References */}
        <section className="mb-12 rounded-2xl border border-slate-200 bg-slate-50 p-6">
          <div className="mb-4 flex items-center gap-3">
            <FileText className="text-blue-700" size={22} />
            <h2 className="text-lg font-bold text-slate-900">
              References and Further Reading
            </h2>
          </div>

          <ul className="space-y-3 text-sm leading-6 text-slate-600">
            <li>
              <a
                href="https://ies.gov.in/arthapedia/concept/deficit-measurement-india"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-blue-700 hover:underline"
              >
                Indian Economic Service – Deficit Measurement in India
              </a>
              <p>
                Explains fiscal deficit and the traditional Indian
                budget-deficit measure.
              </p>
            </li>

            <li>
              <a
                href="https://www.indiabudget.gov.in/budget2023-24/doc/bspeech/bs199798.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-blue-700 hover:underline"
              >
                Union Budget 1997–98 – Budget Speech
              </a>
              <p>
                Historical reference for the discontinuation of ad-hoc
                and tap Treasury Bills.
              </p>
            </li>

            <li>
              <a
                href="https://dea.gov.in/brief-description-budget-documents"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-blue-700 hover:underline"
              >
                Department of Economic Affairs – Budget Documents
              </a>
              <p>
                Explains important documents and measures used in
                government budget reporting.
              </p>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
