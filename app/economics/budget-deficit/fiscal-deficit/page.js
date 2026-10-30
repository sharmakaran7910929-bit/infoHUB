
import Link from "next/link";
import {
  Calculator,
  Landmark,
  TrendingUp,
  IndianRupee,
  Wallet,
  Building2,
  Scale,
  ArrowDownUp,
  ChartNoAxesCombined,
  Coins,
  AlertTriangle,
  CheckCircle2,
  Info,
  BookOpen,
  PiggyBank,
  Activity,
  Receipt,
  CreditCard,
  CircleDollarSign,
  BadgeIndianRupee,
  HandCoins,
  BriefcaseBusiness,
  Gauge,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

import AdSlot from "../../../../components/AdSlot";

export const metadata = {
  title:
    "Fiscal Deficit: Meaning, Formula, Causes & Effects in India | PriceTag HUB",
  description:
    "Understand fiscal deficit, its calculation, causes, economic effects, differences from budget, primary and revenue deficits, and India's latest official fiscal deficit figures.",
  alternates: {
    canonical:
      "https://www.pricetag.co.in/economics/fiscal-deficit/what-is-fiscal-deficit",
  },
  openGraph: {
    title: "What Is Fiscal Deficit? Meaning, Calculation & India",
    description:
      "Learn how fiscal deficit is calculated, why it occurs, its economic effects and the latest official figures from India.",
    url: "https://www.pricetag.co.in/economics/fiscal-deficit/what-is-fiscal-deficit",
    type: "article",
  },
};

const causes = [
  {
    icon: TrendingUp,
    title: "Higher Government Expenditure",
    description:
      "Large spending on infrastructure, defence, public services, administration and development programmes can increase expenditure beyond available receipts.",
  },
  {
    icon: Receipt,
    title: "Lower Tax Revenue",
    description:
      "Weak economic activity, lower consumption, declining business profits or poor tax collection can reduce government tax receipts.",
  },
  {
    icon: Coins,
    title: "Subsidies and Welfare Spending",
    description:
      "Higher spending on food, fertilisers, fuel support, pensions and welfare programmes can increase government expenditure.",
  },
  {
    icon: Building2,
    title: "Economic Slowdown",
    description:
      "When economic growth slows, income, consumption, corporate profits and tax collections may decline while welfare requirements can increase.",
  },
  {
    icon: Landmark,
    title: "Interest Payments on Public Debt",
    description:
      "The government must pay interest on previously borrowed money. A higher interest burden increases expenditure and can widen the fiscal deficit.",
  },
  {
    icon: AlertTriangle,
    title: "Unexpected Events",
    description:
      "Natural disasters, economic crises, emergencies and unexpected security requirements may force the government to increase spending.",
  },
];

const effects = [
  {
    icon: ChartNoAxesCombined,
    title: "Economic Growth",
    type: "Potential Benefit",
    positive: true,
    description:
      "Borrowing can finance roads, railways, power infrastructure, hospitals and other productive investments. These projects can improve productivity and support long-term economic growth.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Employment Generation",
    type: "Potential Benefit",
    positive: true,
    description:
      "Government investment in infrastructure and development projects can create employment directly and indirectly through businesses and supporting industries.",
  },
  {
    icon: Landmark,
    title: "Public Debt",
    type: "Potential Risk",
    positive: false,
    description:
      "A persistent fiscal deficit generally increases government borrowing and public debt. More future revenue may be required to repay debt and meet interest obligations.",
  },
  {
    icon: TrendingUp,
    title: "Inflation",
    type: "Potential Risk",
    positive: false,
    description:
      "A large deficit can increase aggregate demand. If production cannot respond adequately, additional demand may put upward pressure on prices.",
  },
  {
    icon: Wallet,
    title: "Private Investment",
    type: "Potential Risk",
    positive: false,
    description:
      "Heavy government borrowing can increase demand for available funds and put upward pressure on interest rates, potentially reducing private-sector investment. This is called crowding out.",
  },
  {
    icon: IndianRupee,
    title: "Future Tax Burden",
    type: "Potential Risk",
    positive: false,
    description:
      "A growing debt burden may require future governments to raise revenue, reduce expenditure or borrow again to meet financial obligations.",
  },
];

const factors = [
  {
    title: "Tax Collection",
    impact: "Higher tax collection can reduce the deficit by increasing government revenue.",
    icon: Receipt,
  },
  {
    title: "Economic Growth",
    impact:
      "Higher economic activity can improve tax collections and strengthen government receipts.",
    icon: TrendingUp,
  },
  {
    title: "Government Subsidies",
    impact:
      "Higher subsidy expenditure can increase government spending and widen the deficit.",
    icon: Coins,
  },
  {
    title: "Infrastructure Investment",
    impact:
      "Higher capital expenditure can increase short-term spending but support long-term economic growth.",
    icon: Building2,
  },
  {
    title: "Interest Rates",
    impact:
      "Higher borrowing costs can increase government interest expenditure over time.",
    icon: Gauge,
  },
  {
    title: "Disinvestment Receipts",
    impact:
      "Proceeds from selling government investments can increase non-debt capital receipts.",
    icon: BadgeIndianRupee,
  },
  {
    title: "Natural Disasters",
    impact:
      "Emergency relief, reconstruction and recovery expenditure can increase the deficit.",
    icon: AlertTriangle,
  },
  {
    title: "Tax Administration",
    impact:
      "Better tax compliance and reduced evasion can improve government revenue.",
    icon: ShieldCheck,
  },
];

const faqs = [
  {
    q: "What is fiscal deficit in simple words?",
    a: "Fiscal deficit is the amount by which a government's total expenditure exceeds its receipts excluding borrowings. It represents the government's borrowing requirement during a financial year.",
  },
  {
    q: "What is the formula for fiscal deficit?",
    a: "Fiscal Deficit = Total Expenditure − Total Non-Debt Receipts. Non-debt receipts include revenue receipts and non-debt capital receipts.",
  },
  {
    q: "Why does fiscal deficit occur?",
    a: "Fiscal deficit occurs when government expenditure exceeds available non-debt receipts. Higher spending, lower tax collections, subsidies, interest payments and economic slowdowns can contribute to it.",
  },
  {
    q: "Is fiscal deficit always bad for the economy?",
    a: "No. Borrowing to finance productive infrastructure and development can support long-term growth. However, persistent high deficits can increase public debt, interest payments and financial risks.",
  },
  {
    q: "What was India's fiscal deficit in August 2026?",
    a: "The Controller General of Accounts reported a monthly fiscal deficit of ₹2,55,105 crore for August 2026. The cumulative fiscal deficit from April to August 2026 was ₹7,10,249 crore.",
  },
  {
    q: "What is the difference between fiscal deficit and budget deficit?",
    a: "Fiscal deficit measures the overall borrowing requirement. Traditional budget deficit in Indian public finance referred to the portion financed through short-term borrowings. The traditional measure lost significance after the discontinuation of ad-hoc Treasury Bills in 1997.",
  },
  {
    q: "What is fiscal deficit as a percentage of GDP?",
    a: "It is the fiscal deficit divided by the country's nominal GDP, multiplied by 100. It helps compare the government's borrowing requirement with the size of the economy.",
  },
];

function SectionHeading({ icon: Icon, eyebrow, title, description }) {
  return (
    <div className="mb-7">
      <div className="flex items-center gap-2 text-sm font-bold text-blue-700 mb-2">
        <Icon size={17} />
        {eyebrow}
      </div>

      <h2 className="text-2xl md:text-3xl font-bold text-gray-950">
        {title}
      </h2>

      {description && (
        <p className="mt-3 text-gray-600 leading-7 max-w-3xl">
          {description}
        </p>
      )}
    </div>
  );
}

function InfoCard({ icon: Icon, title, children }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5">
      <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center mb-4">
        <Icon size={21} />
      </div>

      <h3 className="font-bold text-gray-900 mb-2">{title}</h3>

      <p className="text-sm text-gray-600 leading-6">{children}</p>
    </div>
  );
}

function ComparisonCard({
  icon: Icon,
  number,
  title,
  description,
  fiscalMeaning,
  otherMeaning,
  keyDifference,
  importance,
  link,
  linkLabel,
}) {
  return (
    <div className="rounded-2xl border border-gray-200 overflow-hidden">
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-5 md:p-7">
        <div className="flex flex-wrap items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-white text-blue-700 flex items-center justify-center shadow-sm">
            <Icon size={25} />
          </div>

          <div>
            <p className="text-xs font-bold text-blue-700">
              COMPARISON {number}
            </p>
            <h3 className="text-xl md:text-2xl font-bold text-gray-950">
              {title}
            </h3>
          </div>
        </div>

        <p className="text-sm text-gray-600 leading-7 mt-4">
          {description}
        </p>
      </div>

      <div className="p-5 md:p-7">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="rounded-xl border border-blue-200 bg-blue-50/60 p-4">
            <div className="flex items-center gap-2 text-blue-800 mb-3">
              <Landmark size={19} />
              <h4 className="font-bold text-sm">Fiscal Deficit</h4>
            </div>

            <p className="text-sm text-gray-700 leading-6">
              {fiscalMeaning}
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
            <div className="flex items-center gap-2 text-gray-700 mb-3">
              <Icon size={19} />
              <h4 className="font-bold text-sm">{title.split(" vs ")[1]}</h4>
            </div>

            <p className="text-sm text-gray-700 leading-6">
              {otherMeaning}
            </p>
          </div>
        </div>

        <div className="mt-5 rounded-xl border border-green-200 bg-green-50 p-5">
          <div className="flex items-center gap-2 text-green-800 mb-2">
            <CheckCircle2 size={19} />
            <h4 className="font-bold text-sm">Key Difference</h4>
          </div>

          <p className="text-sm text-gray-700 leading-7">
            {keyDifference}
          </p>
        </div>

        <div className="mt-5">
          <h4 className="font-bold text-gray-900 mb-2">
            Why Is This Comparison Important?
          </h4>

          <p className="text-sm text-gray-600 leading-7">
            {importance}
          </p>
        </div>

        {link && (
          <Link
            href={link}
            className="inline-flex items-center gap-2 mt-5 text-sm font-bold text-blue-700 hover:text-blue-900"
          >
            {linkLabel || "Explore This Topic"}
            <ArrowRight size={16} />
          </Link>
        )}
      </div>
    </div>
  );
}

export default function WhatIsFiscalDeficitPage() {
  return (
    <main className="bg-white text-gray-900">

      {/* INTRODUCTION */}

      <section className="max-w-6xl mx-auto px-4 pt-8 pb-12">
        

        <div className="grid md:grid-cols-[1.5fr_0.8fr] gap-8 items-center">
          <div>
            <span className="inline-flex items-center gap-2 text-sm font-bold text-blue-700 bg-blue-50 px-3 py-2 rounded-full mb-5">
              <Landmark size={16} />
              Economics · Government Finance · India
            </span>

            <h1 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight">
              What Is Fiscal Deficit? Meaning, Calculation, Causes & Effects
            </h1>

            <p className="text-gray-600 text-base md:text-lg leading-8 mt-6">
              Governments spend money on infrastructure, education,
              healthcare, defence, salaries, subsidies and development.
              But what happens when their total expenditure is greater
              than the money they receive?
            </p>

            <p className="text-gray-600 leading-7 mt-3">
              This financial gap is known as the{" "}
              <strong>fiscal deficit</strong>. It helps explain how much
              a government needs to borrow to meet its financial
              requirements and manage the economy.
            </p>
          </div>

          <div className="rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-100 p-6 md:p-8">
            <div className="flex justify-between items-center mb-6">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-blue-700">
                <Calculator size={25} />
              </div>

              <span className="text-xs font-bold text-blue-800">
                KEY ECONOMIC INDICATOR
              </span>
            </div>

            <p className="text-sm text-gray-600 mb-2">
              Fiscal Deficit
            </p>

            <p className="text-2xl md:text-3xl font-bold text-gray-950">
              Expenditure − Receipts
            </p>

            <div className="border-t border-blue-200 mt-6 pt-5">
              <p className="text-sm text-gray-700 leading-6">
                A fiscal deficit indicates how much money the
                government needs to arrange through borrowing
                and other financing sources.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4">
        <AdSlot />
      </div>

      {/* MEANING */}

      <section className="max-w-6xl mx-auto px-4 py-14">
        <SectionHeading
          icon={BookOpen}
          eyebrow="01 · BASIC CONCEPT"
          title="What Is Fiscal Deficit?"
          description="Fiscal deficit is the difference between a government's total expenditure and its total receipts excluding borrowings during a financial year."
        />

        <div className="rounded-2xl border border-blue-200 bg-blue-50 p-6 md:p-8">
          <p className="text-sm font-bold text-blue-800 mb-3">
            FISCAL DEFICIT FORMULA
          </p>

          <div className="text-xl md:text-2xl font-bold text-gray-950 leading-relaxed">
            Fiscal Deficit = Total Expenditure − Total Non-Debt Receipts
          </div>

          <p className="text-sm text-gray-600 mt-4 leading-6">
            Borrowings are excluded from receipts because borrowing
            is the method of financing the deficit, not income
            generated by the government.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5 mt-7">
          <InfoCard icon={IndianRupee} title="Government Receipts">
            Money collected through taxes, fees, dividends, interest,
            disinvestment and recovery of loans, among other sources.
          </InfoCard>

          <InfoCard icon={Building2} title="Government Expenditure">
            Money spent on salaries, pensions, subsidies, defence,
            infrastructure, interest payments and public services.
          </InfoCard>
        </div>

        <div className="mt-7 rounded-xl border border-gray-200 p-5">
          <h3 className="font-bold mb-4">
            Understanding the Fiscal Gap
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 items-center text-center">
            <div className="rounded-xl bg-blue-50 p-4">
              <Wallet className="mx-auto text-blue-700 mb-2" size={25} />
              <p className="font-bold">Government Receipts</p>
              <p className="text-xs text-gray-600 mt-1">
                Taxes and other non-debt receipts
              </p>
            </div>

            <div className="rounded-xl bg-orange-50 p-4">
              <ArrowDownUp className="mx-auto text-orange-600 mb-2" size={25} />
              <p className="font-bold">Fiscal Gap</p>
              <p className="text-xs text-gray-600 mt-1">
                Amount requiring financing
              </p>
            </div>

            <div className="rounded-xl bg-indigo-50 p-4">
              <Landmark className="mx-auto text-indigo-700 mb-2" size={25} />
              <p className="font-bold">Total Expenditure</p>
              <p className="text-xs text-gray-600 mt-1">
                Revenue and capital spending
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CALCULATION */}

      <section className="max-w-6xl mx-auto px-4 py-12">
        <SectionHeading
          icon={Calculator}
          eyebrow="02 · WORKED EXAMPLE"
          title="How Is Fiscal Deficit Calculated?"
          description="Let's understand the calculation using a simple example of a hypothetical government budget."
        />

        <div className="overflow-x-auto rounded-xl border border-gray-200">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left p-4">Government Budget Item</th>
                <th className="text-right p-4">Amount</th>
              </tr>
            </thead>

            <tbody>
              {[
                ["Revenue Receipts", "₹800 crore"],
                ["Non-Debt Capital Receipts", "₹50 crore"],
                ["Revenue Expenditure", "₹850 crore"],
                ["Capital Expenditure", "₹150 crore"],
              ].map((row) => (
                <tr key={row[0]} className="border-t">
                  <td className="p-4">{row[0]}</td>
                  <td className="p-4 text-right">{row[1]}</td>
                </tr>
              ))}

              <tr className="border-t bg-blue-50 font-bold">
                <td className="p-4">Total Receipts Excluding Borrowings</td>
                <td className="p-4 text-right">₹850 crore</td>
              </tr>

              <tr className="border-t bg-blue-50 font-bold">
                <td className="p-4">Total Expenditure</td>
                <td className="p-4 text-right">₹1,000 crore</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-6 rounded-xl bg-gray-950 text-white p-6 md:p-8">
          <p className="text-sm text-blue-300 font-bold mb-3">
            STEP-BY-STEP CALCULATION
          </p>

          <p className="text-gray-300 text-sm mb-2">
            Total Expenditure
          </p>

          <p className="text-lg font-bold">
            ₹850 + ₹150 = ₹1,000 crore
          </p>

          <p className="text-gray-300 text-sm mt-5 mb-2">
            Total Non-Debt Receipts
          </p>

          <p className="text-lg font-bold">
            ₹800 + ₹50 = ₹850 crore
          </p>

          <div className="border-t border-gray-700 mt-6 pt-6">
            <p className="text-gray-300 text-sm mb-2">
              Fiscal Deficit
            </p>

            <p className="text-3xl md:text-4xl font-bold text-blue-300">
              ₹150 crore
            </p>

            <p className="text-gray-300 text-sm mt-3">
              ₹1,000 crore − ₹850 crore = ₹150 crore
            </p>
          </div>
        </div>

        <div className="mt-6 rounded-xl border border-green-200 bg-green-50 p-5">
          <div className="flex gap-3">
            <CheckCircle2 className="text-green-700 shrink-0" size={22} />

            <div>
              <h3 className="font-bold text-gray-900">
                What Does This Calculation Mean?
              </h3>

              <p className="text-sm text-gray-700 leading-6 mt-2">
                The government has a financial gap of ₹150 crore.
                It must arrange financing for this amount, generally
                through borrowings and other financing sources.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CAUSES */}

      <section className="max-w-6xl mx-auto px-4 py-14">
        <SectionHeading
          icon={AlertTriangle}
          eyebrow="03 · CAUSES"
          title="Why Does Fiscal Deficit Occur?"
          description="Fiscal deficit occurs when government spending exceeds its non-debt receipts. Several economic and administrative factors can create this situation."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {causes.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="border border-gray-200 rounded-xl p-5 hover:border-blue-300 transition-colors"
              >
                <div className="w-11 h-11 bg-orange-50 text-orange-700 rounded-lg flex items-center justify-center mb-4">
                  <Icon size={22} />
                </div>

                <h3 className="font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-600 leading-6">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4">
        <AdSlot />
      </div>

      {/* ECONOMIC EFFECTS */}

      <section className="max-w-6xl mx-auto px-4 py-14">
        <SectionHeading
          icon={ChartNoAxesCombined}
          eyebrow="04 · ECONOMIC IMPACT"
          title="Effects of Fiscal Deficit on the Economy"
          description="Fiscal deficit can support economic development when borrowing finances productive activities. However, a continuously high deficit can create financial pressure."
        />

        <div className="grid md:grid-cols-2 gap-5">
          {effects.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="border border-gray-200 rounded-xl p-5"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-blue-50 text-blue-700 rounded-lg flex items-center justify-center">
                    <Icon size={21} />
                  </div>

                  <div>
                    <h3 className="font-bold">{item.title}</h3>
                    <span
                      className={`text-xs font-bold ${
                        item.positive
                          ? "text-green-700"
                          : "text-orange-700"
                      }`}
                    >
                      {item.type}
                    </span>
                  </div>
                </div>

                <p className="text-sm text-gray-600 leading-6">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-8 rounded-xl bg-blue-50 border border-blue-200 p-6">
          <h3 className="font-bold text-gray-900 mb-3">
            What Is Crowding Out?
          </h3>

          <p className="text-sm text-gray-700 leading-7">
            When the government borrows heavily from financial
            markets, demand for available funds can increase.
            This may push interest rates upward and make borrowing
            more expensive for private businesses.
          </p>

          <div className="grid sm:grid-cols-3 gap-3 mt-5 text-center">
            {[
              "Higher Government Borrowing",
              "Possible Rise in Interest Rates",
              "Potential Reduction in Private Investment",
            ].map((step, index) => (
              <div key={step} className="bg-white rounded-lg p-4">
                <div className="text-blue-700 font-bold text-sm mb-2">
                  STEP {index + 1}
                </div>
                <p className="text-sm font-semibold">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON 1 */}

      <section className="max-w-6xl mx-auto px-4 py-12">
        <SectionHeading
          icon={Scale}
          eyebrow="05 · UNDERSTANDING THE DIFFERENCE"
          title="Fiscal Deficit vs Budget Deficit"
          description="Both terms relate to a government's financial shortfall, but their traditional technical meanings in Indian public finance are different."
        />

        <ComparisonCard
          number="01"
          icon={Calculator}
          title="Fiscal Deficit vs Budget Deficit"
          description="The main difference is the scope of the financial gap and the way it is measured or financed."
          fiscalMeaning="Measures the overall gap between total government expenditure and total non-debt receipts. It indicates the government's overall borrowing requirement."
          otherMeaning="In traditional Indian public finance, budget deficit referred to the portion of the deficit financed through short-term borrowings, including the historical use of Treasury Bills."
          keyDifference="Fiscal deficit is a broad measure of the government's total borrowing requirement, whereas traditional budget deficit was a narrower financing-based measure."
          importance="Fiscal deficit is now the more relevant indicator for understanding the Union Government's borrowing needs. The traditional budget deficit lost significance after the discontinuation of ad-hoc Treasury Bills in 1997."
        />

        <div className="mt-5 rounded-xl bg-gray-50 border border-gray-200 p-5">
          <div className="flex items-center gap-3 mb-3">
            <Info size={21} className="text-blue-700" />
            <h3 className="font-bold">Important Historical Context</h3>
          </div>

          <p className="text-sm text-gray-600 leading-7">
            The traditional budget deficit measure was closely
            associated with automatic monetisation through ad-hoc
            Treasury Bills. After this system was discontinued
            in 1997, fiscal deficit became the more important
            measure in India's budget reporting.
          </p>
        </div>
      </section>

      {/* COMPARISON 2 */}

      <section className="max-w-6xl mx-auto px-4 py-12">
        <SectionHeading
          icon={PiggyBank}
          eyebrow="06 · UNDERSTANDING THE DIFFERENCE"
          title="Fiscal Deficit vs Primary Deficit"
          description="These two indicators are closely related, but they measure the government's financial gap from different perspectives."
        />

        <ComparisonCard
          number="02"
          icon={PiggyBank}
          title="Fiscal Deficit vs Primary Deficit"
          description="The distinction is based on whether interest payments on previously accumulated government debt are included."
          fiscalMeaning="Includes the entire expenditure-receipt gap, including interest payments on existing government debt."
          otherMeaning="Excludes interest payments from the fiscal deficit calculation, allowing the remaining fiscal gap to be examined separately."
          keyDifference="Fiscal deficit includes interest payments, while primary deficit removes those payments. Therefore, primary deficit helps identify the current fiscal gap without the burden of past interest costs."
          importance="This comparison helps economists and policymakers understand how much of the government's borrowing requirement is associated with existing debt obligations and how much relates to other fiscal operations."
          link="/economics/fiscal-deficit/what-is-primary-deficit"
          linkLabel="Explore Primary Deficit"
        />

        <div className="mt-5 rounded-xl bg-blue-50 border border-blue-200 p-5">
          <h3 className="font-bold mb-2">
            The Relationship Between These Indicators
          </h3>

          <div className="bg-white rounded-xl p-5 text-center">
            <p className="text-sm text-gray-500 mb-2">
              Calculation relationship
            </p>

            <p className="text-lg md:text-xl font-bold text-blue-800">
              Fiscal Deficit − Interest Payments
            </p>

            <div className="flex justify-center my-3">
              <ArrowDownUp className="text-blue-700" size={22} />
            </div>

            <p className="text-xl font-bold text-gray-950">
              Primary Deficit
            </p>
          </div>
        </div>
      </section>

      {/* COMPARISON 3 */}

      <section className="max-w-6xl mx-auto px-4 py-12">
        <SectionHeading
          icon={Wallet}
          eyebrow="07 · UNDERSTANDING THE DIFFERENCE"
          title="Fiscal Deficit vs Revenue Deficit"
          description="These measures differ mainly in the scope of government receipts and expenditure considered in their calculation."
        />

        <ComparisonCard
          number="03"
          icon={Wallet}
          title="Fiscal Deficit vs Revenue Deficit"
          description="The comparison helps distinguish the government's overall borrowing requirement from the shortfall associated with its revenue account."
          fiscalMeaning="Considers total government expenditure, including revenue and capital expenditure, against all non-debt receipts."
          otherMeaning="Considers only revenue expenditure and revenue receipts, rather than the government's entire expenditure and receipt position."
          keyDifference="Fiscal deficit covers the overall financial gap, including capital expenditure and non-debt capital receipts. Revenue deficit is restricted to the revenue account."
          importance="This distinction helps evaluate whether the government's financial shortfall is connected to its overall spending or specifically to regular revenue-related operations."
          link="/economics/fiscal-deficit/what-is-revenue-deficit"
          linkLabel="Explore Revenue Deficit"
        />

        <div className="mt-5 rounded-xl bg-indigo-50 border border-indigo-200 p-5">
          <h3 className="font-bold mb-3">
            How Are the Two Measures Connected?
          </h3>

          <p className="text-sm text-gray-700 leading-7">
            Fiscal deficit includes the revenue account as well
            as capital expenditure and non-debt capital receipts.
            Revenue deficit is only one component of the broader
            fiscal position.
          </p>

          <div className="mt-4 bg-white rounded-xl p-5">
            <p className="text-xs text-gray-500 font-bold mb-3">
              FISCAL DEFICIT COMPONENTS
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-center">
              <div className="bg-indigo-50 rounded-lg p-3">
                <Receipt className="mx-auto text-indigo-700 mb-2" size={22} />
                <p className="text-sm font-bold">Revenue Account Gap</p>
              </div>

              <div className="bg-blue-50 rounded-lg p-3">
                <Building2 className="mx-auto text-blue-700 mb-2" size={22} />
                <p className="text-sm font-bold">Capital Expenditure</p>
              </div>

              <div className="bg-orange-50 rounded-lg p-3">
                <Coins className="mx-auto text-orange-700 mb-2" size={22} />
                <p className="text-sm font-bold">Non-Debt Capital Receipts</p>
              </div>
            </div>

            <p className="text-xs text-gray-500 mt-3">
              These components combine to determine the overall
              fiscal deficit.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4">
        <AdSlot />
      </div>

      {/* FACTORS */}

      <section className="max-w-6xl mx-auto px-4 py-14">
        <SectionHeading
          icon={ArrowDownUp}
          eyebrow="08 · ECONOMIC FACTORS"
          title="Factors That Affect Fiscal Deficit"
          description="The fiscal deficit changes when government revenue, expenditure and economic conditions change."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {factors.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="border border-gray-200 rounded-xl p-5"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center mb-4">
                  <Icon size={21} />
                </div>

                <h3 className="font-bold mb-2">{item.title}</h3>

                <p className="text-sm text-gray-600 leading-6">
                  {item.impact}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* INDIA DATA */}

      <section className="max-w-6xl mx-auto px-4 py-14">
        <SectionHeading
          icon={Landmark}
          eyebrow="09 · INDIA ECONOMY"
          title="Fiscal Deficit of India: Latest Official Figures"
          description="The Controller General of Accounts (CGA), under the Ministry of Finance, publishes monthly accounts of the Union Government. These accounts show revenue, expenditure and deficit figures."
        />

        <div className="rounded-2xl bg-gradient-to-br from-blue-950 to-indigo-900 text-white p-6 md:p-8">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-sm text-blue-200">
                India's cumulative fiscal deficit
              </p>

              <h3 className="text-3xl md:text-4xl font-bold mt-2">
                ₹7,10,249 crore
              </h3>

              <p className="text-sm text-blue-200 mt-2">
                April–August 2026 · FY 2026–27
              </p>
            </div>

            <div className="rounded-xl bg-white/10 p-4 min-w-[125px]">
              <p className="text-xs text-blue-200">
                Annual BE achieved
              </p>

              <p className="text-3xl font-bold mt-1">41.9%</p>
            </div>
          </div>

          <div className="mt-7">
            <div className="flex justify-between text-xs text-blue-200 mb-2">
              <span>Progress against annual budget estimate</span>
              <span>41.9%</span>
            </div>

            <div className="h-3 rounded-full bg-white/20 overflow-hidden">
              <div className="h-full bg-sky-400 rounded-full w-[41.9%]" />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 mt-7">
            <div className="bg-white/10 rounded-xl p-4">
              <p className="text-xs text-blue-200">
                FY 2026–27 Fiscal Deficit Budget Estimate
              </p>

              <p className="text-xl font-bold mt-2">
                ₹16,95,768 crore
              </p>
            </div>

            <div className="bg-white/10 rounded-xl p-4">
              <p className="text-xs text-blue-200">
                August 2026 Monthly Fiscal Deficit
              </p>

              <p className="text-xl font-bold mt-2">
                ₹2,55,105 crore
              </p>
            </div>
          </div>
        </div>

        <div className="mt-7">
          <h3 className="font-bold text-xl mb-4">
            India's Fiscal Position: April to August 2026
          </h3>

          <div className="overflow-x-auto border border-gray-200 rounded-xl">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left p-4">Fiscal Indicator</th>
                  <th className="text-right p-4">Amount (₹ Crore)</th>
                </tr>
              </thead>

              <tbody>
                {[
                  ["Fiscal Deficit", "7,10,249"],
                  ["Revenue Deficit", "2,75,539"],
                  ["Primary Deficit", "1,95,439"],
                  ["Total Expenditure", "20,77,958"],
                  ["Total Receipts Excluding Borrowings", "13,67,709"],
                  ["Interest Payments", "5,14,810"],
                ].map((row) => (
                  <tr key={row[0]} className="border-t">
                    <td className="p-4 text-gray-700">{row[0]}</td>
                    <td className="p-4 text-right font-bold">{row[1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-7 rounded-xl border border-blue-200 bg-blue-50 p-6">
          <h3 className="font-bold text-gray-900 mb-4">
            What Do These Indian Figures Tell Us?
          </h3>

          <div className="space-y-4">
            <div>
              <h4 className="font-bold text-sm">
                1. Overall Fiscal Position
              </h4>

              <p className="text-sm text-gray-600 leading-6 mt-1">
                India's cumulative fiscal deficit was ₹7,10,249 crore,
                equal to 41.9% of the annual budget estimate.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-sm">
                2. Government Receipts
              </h4>

              <p className="text-sm text-gray-600 leading-6 mt-1">
                Total receipts excluding borrowings were
                ₹13,67,709 crore during April–August 2026.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-sm">
                3. Government Expenditure
              </h4>

              <p className="text-sm text-gray-600 leading-6 mt-1">
                Total expenditure reached ₹20,77,958 crore
                during the same period.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-5">
          <div className="flex gap-3">
            <Info className="text-amber-700 shrink-0" size={22} />

            <div>
              <h3 className="font-bold text-gray-900">
                Important: Monthly vs Cumulative Deficit
              </h3>

              <p className="text-sm text-gray-700 leading-7 mt-2">
                ₹2,55,105 crore is the fiscal deficit recorded
                during August 2026. ₹7,10,249 crore is the
                cumulative deficit from April through August.
                Monthly accounts are provisional and can be
                affected by the timing of receipts and expenditure.
              </p>

              <p className="text-sm text-gray-700 leading-7 mt-2">
                The latest official monthly account available
                for this data cutoff is August 2026. September
                figures should be added only after their official
                publication.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-xl border border-gray-200 p-5">
          <h3 className="font-bold mb-3">
            Official Government Sources
          </h3>

          <ul className="space-y-4 text-sm">
            <li>
              <a
                href="https://cga.nic.in/writereaddata/MonthAccount/82026/DATA2627.htm"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 underline font-semibold"
              >
                CGA – Union Government Accounts at a Glance (August 2026)
              </a>

              <p className="text-gray-500 mt-1">
                Official fiscal, revenue and primary deficit figures.
              </p>
            </li>

            <li>
              <a
                href="https://cga.nic.in/writereaddata/MonthAccount/82026/DTL12627.HTM"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 underline font-semibold"
              >
                CGA – Monthly Trend of Fiscal Deficit
              </a>

              <p className="text-gray-500 mt-1">
                Monthly and cumulative deficit data.
              </p>
            </li>

            <li>
              <a
                href="https://ies.gov.in/arthapedia/concept/deficit-measurement-india"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 underline font-semibold"
              >
                Indian Economic Service – Deficit Measurement in India
              </a>

              <p className="text-gray-500 mt-1">
                Definitions and significance of different deficit measures.
              </p>
            </li>

            <li>
              <a
                href="https://www.indiabudget.gov.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 underline font-semibold"
              >
                Government of India – Union Budget
              </a>

              <p className="text-gray-500 mt-1">
                Budget estimates and fiscal policy documents.
              </p>
            </li>
          </ul>
        </div>
      </section>

      {/* CONTROL MEASURES */}

      <section className="max-w-6xl mx-auto px-4 py-12">
        <SectionHeading
          icon={CheckCircle2}
          eyebrow="10 · FISCAL MANAGEMENT"
          title="How Can the Government Control Fiscal Deficit?"
          description="Fiscal consolidation involves improving government finances by increasing sustainable receipts, managing expenditure and controlling debt."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <InfoCard icon={IndianRupee} title="Improve Tax Collection">
            Better tax administration, compliance, a wider tax base
            and reduced tax evasion can increase government revenue.
          </InfoCard>

          <InfoCard icon={Wallet} title="Manage Expenditure">
            Reviewing unnecessary administrative costs and improving
            expenditure efficiency can reduce financial pressure.
          </InfoCard>

          <InfoCard icon={Building2} title="Promote Economic Growth">
            Higher productive activity can expand income, consumption,
            corporate profits and tax revenue.
          </InfoCard>

          <InfoCard icon={TrendingUp} title="Improve Public Investment">
            Prioritising projects with long-term economic benefits can
            improve the quality of government spending.
          </InfoCard>

          <InfoCard icon={Coins} title="Rationalise Subsidies">
            Better targeting and reduced leakage can improve the
            efficiency of welfare spending.
          </InfoCard>

          <InfoCard icon={Scale} title="Manage Public Debt">
            Prudent borrowing, debt management and lower interest
            costs can support long-term fiscal sustainability.
          </InfoCard>
        </div>
      </section>

      {/* FAQ */}

      <section className="max-w-6xl mx-auto px-4 py-14">
        <SectionHeading
          icon={Info}
          eyebrow="11 · COMMON QUESTIONS"
          title="Frequently Asked Questions About Fiscal Deficit"
        />

        <div className="space-y-3">
          {faqs.map((item) => (
            <details
              key={item.q}
              className="group border border-gray-200 rounded-xl p-5"
            >
              <summary className="cursor-pointer list-none flex items-center justify-between gap-4 font-bold text-gray-900">
                <span>{item.q}</span>

                <span className="text-blue-700 text-xl group-open:rotate-45 transition-transform">
                  +
                </span>
              </summary>

              <p className="text-sm text-gray-600 leading-7 mt-4">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </section>

     

    </main>
  )
}
