
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  ArrowUp,
  Banknote,
  BookOpen,
  Calculator,
  CheckCircle2,
  CircleHelp,
  Clock,
  Lightbulb,
  PiggyBank,
  ShoppingBasket,
  TrendingDown,
  TrendingUp,
  Wallet,
  XCircle,
} from "lucide-react";
import AdSlot from "../../../../components/AdSlot";

export const metadata = {
  title:
    "Purchasing Power and Inflation: Formula, Examples & How Money Loses Value",
  description:
    "Discover how inflation affects purchasing power with Indian household examples, ₹1,000 shopping calculations, salary growth, savings, real returns, and practical formulas.",
  alternates: {
    canonical:
      "https://www.pricetag.co.in/economics/inflation/purchasing-power-and-inflation",
  },
  openGraph: {
    title: "Purchasing Power and Inflation Explained | PriceTag HUB",
    description:
      "Why does ₹1,000 buy less over time? Learn purchasing power, inflation formulas, salary comparisons, savings calculations, and practical examples.",
    url: "https://www.pricetag.co.in/economics/inflation/purchasing-power-and-inflation",
    type: "article",
  },
};

const contents = [
  { id: "meaning", label: "What Is Purchasing Power?" },
  { id: "shopping-example", label: "The ₹1,000 Shopping Example" },
  { id: "long-term", label: "How Inflation Compounds Over Time" },
  { id: "formula", label: "Purchasing Power Formula" },
  { id: "salary", label: "Salary Growth vs Inflation" },
  { id: "household", label: "Real-Life Household Examples" },
  { id: "savings", label: "Savings and Real Returns" },
  { id: "causes", label: "Why Purchasing Power Changes" },
  { id: "protect", label: "How to Manage Rising Costs" },
  { id: "faq", label: "Frequently Asked Questions" },
];

const faqs = [
  {
    q: "What is purchasing power in simple words?",
    a: "Purchasing power is how much you can buy with a certain amount of money. If ₹1,000 buys ten items today but only eight of the same items later, its purchasing power for those items has declined.",
  },
  {
    q: "Why does inflation reduce purchasing power?",
    a: "When the general price level increases, the same amount of money buys a smaller quantity of goods and services. If income does not increase enough to keep pace with relevant prices, people may need to reduce their spending.",
  },
  {
    q: "What is the formula for purchasing power?",
    a: "A simple index-based measure is base-period price index divided by current price index. If the base index is 100 and the current index is 125, purchasing power relative to the base period is 100 ÷ 125 = 0.80, or 80%.",
  },
  {
    q: "How much purchasing power does ₹1,000 lose with 5% inflation?",
    a: "If the overall price level rises by 5%, a basket that previously cost ₹1,000 would cost ₹1,050. The original ₹1,000 would buy about 95.24% of that basket, assuming the same goods and prices represented by the index.",
  },
  {
    q: "Does 5% inflation mean I lose exactly 5% of my purchasing power?",
    a: "Not exactly. If prices rise by 5%, purchasing power changes by the reciprocal: 1 ÷ 1.05, or about 95.24% of its earlier level. That is a decline of approximately 4.76%, assuming the same price index.",
  },
  {
    q: "Can my salary increase while my purchasing power falls?",
    a: "Yes. If your salary increases by 4% but the prices relevant to your spending rise by 7%, your purchasing power declines. What matters is salary growth compared with price growth.",
  },
  {
    q: "Does inflation affect every product equally?",
    a: "No. Food, rent, fuel, education, healthcare, and electronics can experience different price changes. A published inflation rate represents a defined basket and may not match every household's personal spending pattern.",
  },
  {
    q: "Can money in a savings account lose purchasing power?",
    a: "Yes. If the interest earned after applicable taxes is lower than inflation, the account balance may increase in rupees while buying less in real terms.",
  },
  {
    q: "What is the difference between purchasing power and inflation?",
    a: "Inflation describes a rise in the general price level over time. Purchasing power describes how much money can buy. Inflation generally reduces the purchasing power of a fixed amount of money.",
  },
  {
    q: "Is purchasing power the same as the value of the rupee against the US dollar?",
    a: "No. Domestic purchasing power concerns the goods and services money can buy within an economy. The rupee-dollar exchange rate concerns how much one currency exchanges for another. The two can influence each other, but they are not the same measure.",
  },
];

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mb-8 max-w-3xl">
      <p className="mb-2 text-sm font-bold uppercase tracking-wider text-blue-700">
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

function InfoCard({ icon: Icon, title, children, tone = "blue" }) {
  const tones = {
    blue: "bg-blue-50 text-blue-700",
    red: "bg-red-50 text-red-700",
    green: "bg-emerald-50 text-emerald-700",
    amber: "bg-amber-50 text-amber-800",
    violet: "bg-violet-50 text-violet-700",
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
      <div
        className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl ${tones[tone]}`}
      >
        <Icon size={22} />
      </div>
      <h3 className="text-lg font-bold text-slate-950">{title}</h3>
      <div className="mt-3 text-sm leading-7 text-slate-600">{children}</div>
    </div>
  );
}

function ExampleRow({ label, value, color = "blue" }) {
  const colors = {
    blue: "bg-blue-600",
    red: "bg-red-500",
    green: "bg-emerald-500",
    amber: "bg-amber-500",
  };

  return (
    <div>
      <div className="mb-2 flex items-center justify-between gap-3 text-sm">
        <span className="text-slate-600">{label}</span>
        <span className="font-bold text-slate-900">{value}%</span>
      </div>
      <div className="h-2.5 overflow-hidden rounded-full bg-slate-100">
        <div
          className={`h-full rounded-full ${colors[color]}`}
          style={{ width: `${Math.min(Number(value), 100)}%` }}
        />
      </div>
    </div>
  );
}

export default function PurchasingPowerAndInflationPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* HERO */}
      <section className="overflow-hidden border-b border-blue-100 bg-gradient-to-br from-blue-50 via-white to-sky-50">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <div>
            <div className="mb-5 flex flex-wrap items-center gap-3 text-sm">
              <span className="rounded-full border border-blue-200 bg-white px-3 py-1.5 font-bold text-blue-800">
                Economics · Inflation
              </span>
              <span className="inline-flex items-center gap-1.5 text-slate-500">
                <Clock size={15} />
                8–10 min read
              </span>
            </div>

            <h1 className="text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl">
              Purchasing Power and Inflation: Why Your Money Buys Less
            </h1>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              Your salary arrives. Your bank balance looks normal. But groceries,
              transport, bills, and everyday essentials seem more expensive.
              Discover why the number of rupees you own is not the same as the
              amount of things you can afford.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#shopping-example"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-700 px-5 py-3 font-bold text-white transition hover:bg-blue-800"
              >
                Explore the ₹1,000 Example
                <ArrowRight size={18} />
              </a>
              <a
                href="#formula"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 font-bold text-slate-800 transition hover:bg-slate-50"
              >
                Learn the Formula
              </a>
            </div>

            <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-600">
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 size={16} className="text-emerald-600" />
                Everyday examples
              </span>
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 size={16} className="text-emerald-600" />
                Step-by-step calculations
              </span>
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 size={16} className="text-emerald-600" />
                Salary and savings
              </span>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-xl sm:p-7">
            <p className="text-sm font-bold uppercase tracking-wider text-slate-500">
              The same ₹1,000
            </p>
            <h2 className="mt-2 text-2xl font-bold text-slate-950">
              Same money. Different buying power.
            </h2>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-blue-200 bg-blue-50 p-4">
                <Banknote size={25} className="text-blue-700" />
                <p className="mt-4 text-3xl font-bold text-slate-950">₹1,000</p>
                <p className="mt-2 text-sm leading-5 text-slate-600">
                  Your fixed amount of money
                </p>
              </div>

              <div className="rounded-2xl border border-red-200 bg-red-50 p-4">
                <ShoppingBasket size={25} className="text-red-700" />
                <p className="mt-4 text-3xl font-bold text-slate-950">Less</p>
                <p className="mt-2 text-sm leading-5 text-slate-600">
                  The quantity it buys after prices rise
                </p>
              </div>
            </div>

            <div className="mt-5 rounded-xl bg-slate-50 p-4">
              <p className="font-bold text-slate-900">
                The important question
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Not just “How much money do I have?” but “How much can that
                money actually buy?”
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK ANSWER */}
      <section className="mx-auto max-w-6xl px-5 py-10 sm:px-8">
        <div className="rounded-2xl border border-blue-200 bg-blue-50 p-5 sm:p-7">
          <h2 className="text-xl font-bold text-slate-950">
            The simple answer
          </h2>
          <p className="mt-3 leading-7 text-slate-700">
            <strong>Purchasing power</strong> means how much goods and services
            your money can buy. <strong>Inflation</strong> is a rise in the
            general price level over time. When prices rise and your money
            stays the same, its purchasing power generally falls.
          </p>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            Example: if a representative shopping basket rises from ₹1,000
            to ₹1,100, the same ₹1,000 no longer buys the full basket.
          </p>
        </div>
      </section>

      {/* TABLE OF CONTENTS */}
      <section className="mx-auto max-w-6xl px-5 pb-12 sm:px-8">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-7">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
              <BookOpen size={21} />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-950">
                What You’ll Learn
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Jump to the explanation that matters to you.
              </p>
            </div>
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {contents.map((item, index) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="flex items-center gap-3 rounded-xl border border-slate-200 p-3 transition hover:border-blue-300 hover:bg-blue-50"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-sm font-bold text-slate-700">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-sm font-bold text-slate-800">
                  {item.label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* MEANING */}
      <section id="meaning" className="scroll-mt-8 mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
        <SectionHeading
          eyebrow="01 · Understand the Concept"
          title="What Is Purchasing Power?"
          description="Purchasing power measures the quantity of goods and services that a given amount of money can buy. It connects the value of money to the actual cost of living."
        />

        <div className="grid gap-5 md:grid-cols-2">
          <InfoCard icon={ShoppingBasket} title="When Purchasing Power Is High" tone="green">
            Your money buys a relatively large quantity of groceries, clothing,
            transport, or household essentials. Your income stretches further
            across the basket of goods you need.
            <p className="mt-3 font-bold text-emerald-700">
              One budget → more goods and services
            </p>
          </InfoCard>

          <InfoCard icon={TrendingDown} title="When Purchasing Power Falls" tone="red">
            The same money buys a smaller quantity because prices have risen.
            You may need to spend more, reduce other expenses, or change what
            you purchase.
            <p className="mt-3 font-bold text-red-700">
              One budget → fewer goods and services
            </p>
          </InfoCard>
        </div>

        <div className="mt-6 grid gap-5 lg:grid-cols-[1fr_0.8fr]">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
            <h3 className="text-lg font-bold text-slate-950">
              Purchasing power is about real life
            </h3>
            <p className="mt-3 leading-7 text-slate-600">
              Imagine that you have ₹5,000 for monthly groceries. If prices
              rise, you may need ₹5,300 for the same basket. Your account still
              shows the same amount available for groceries, but that amount
              does not cover the same quantity.
            </p>
            <p className="mt-3 leading-7 text-slate-600">
              This is why economists distinguish between the number of rupees
              you have and the goods and services those rupees can purchase.
            </p>
          </div>

          <div className="rounded-2xl border border-blue-200 bg-blue-50 p-5 sm:p-6">
            <p className="text-sm font-bold uppercase tracking-wider text-blue-700">
              Remember
            </p>
            <p className="mt-3 text-xl font-bold leading-8 text-slate-950">
              Money is measured in rupees. Purchasing power is measured by what
              those rupees can buy.
            </p>
          </div>
        </div>
      </section>
<AdSlot />
      {/* SHOPPING EXAMPLE */}
      <section
        id="shopping-example"
        className="scroll-mt-8 border-y border-slate-200 bg-slate-50 py-12 sm:py-16"
      >
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="02 · An Indian Household Example"
            title="What Happens to Your ₹1,000 Shopping Budget?"
            description="Let's follow a hypothetical household shopping basket. The figures are illustrative and are not actual market-price observations."
          />

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-bold uppercase tracking-wider text-blue-700">
                    Earlier
                  </p>
                  <h3 className="mt-2 text-3xl font-bold text-slate-950">
                    ₹1,000
                  </h3>
                  <p className="mt-1 text-sm text-slate-600">
                    Total basket cost
                  </p>
                </div>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                  <ShoppingBasket size={28} />
                </div>
              </div>

              <div className="mt-6 space-y-3">
                {[
                  ["Food and groceries", "₹500", "50%"],
                  ["Household essentials", "₹300", "30%"],
                  ["Other items", "₹200", "20%"],
                ].map(([label, amount, share]) => (
                  <div key={label} className="rounded-xl bg-slate-50 p-3">
                    <div className="flex justify-between gap-3 text-sm">
                      <span className="text-slate-700">{label}</span>
                      <strong className="text-slate-950">{amount}</strong>
                    </div>
                    <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-200">
                      <div
                        className="h-full rounded-full bg-blue-600"
                        style={{ width: share }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <p className="mt-4 text-sm leading-6 text-slate-500">
                Imagine these are the quantities your family normally buys.
              </p>
            </div>

            <div className="rounded-2xl border border-red-200 bg-white p-5 shadow-sm sm:p-7">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-bold uppercase tracking-wider text-red-700">
                    After a 25% price increase
                  </p>
                  <h3 className="mt-2 text-3xl font-bold text-slate-950">
                    ₹1,250
                  </h3>
                  <p className="mt-1 text-sm text-slate-600">
                    Cost of the same basket
                  </p>
                </div>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50 text-red-700">
                  <TrendingUp size={28} />
                </div>
              </div>

              <div className="mt-6 space-y-3">
                {[
                  ["Food and groceries", "₹625", "50%"],
                  ["Household essentials", "₹375", "30%"],
                  ["Other items", "₹250", "20%"],
                ].map(([label, amount, share]) => (
                  <div key={label} className="rounded-xl bg-red-50/60 p-3">
                    <div className="flex justify-between gap-3 text-sm">
                      <span className="text-slate-700">{label}</span>
                      <strong className="text-slate-950">{amount}</strong>
                    </div>
                    <div className="mt-2 h-2 overflow-hidden rounded-full bg-red-100">
                      <div
                        className="h-full rounded-full bg-red-500"
                        style={{ width: share }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <p className="mt-4 text-sm leading-6 text-slate-500">
                The basket quantities are unchanged; only the prices have
                increased in this example.
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <p className="text-sm text-slate-500">Your available budget</p>
              <p className="mt-2 text-2xl font-bold text-slate-950">₹1,000</p>
              <p className="mt-2 text-sm text-slate-600">
                Unchanged in this example
              </p>
            </div>
            <div className="rounded-2xl border border-red-200 bg-white p-5">
              <p className="text-sm text-slate-500">Cost of the same basket</p>
              <p className="mt-2 text-2xl font-bold text-red-700">₹1,250</p>
              <p className="mt-2 text-sm text-slate-600">
                ₹250 more than before
              </p>
            </div>
            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
              <p className="text-sm text-slate-600">Purchasing power lost</p>
              <p className="mt-2 text-2xl font-bold text-amber-900">20%</p>
              <p className="mt-2 text-sm text-slate-600">
                The fixed ₹1,000 buys 80% of the original basket
              </p>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-5 sm:p-6">
            <h3 className="text-lg font-bold text-slate-950">
              Why is the purchasing power loss 20%, not 25%?
            </h3>
            <p className="mt-3 leading-7 text-slate-700">
              Prices rose by 25%, so the original basket now costs 1.25 times
              as much. Your ₹1,000 buys ₹1,000 ÷ ₹1,250 = 0.80 of the original
              basket. That means you can buy 80% of it, a 20% reduction in
              quantity at the new prices.
            </p>
          </div>
        </div>
      </section>

      {/* LONG TERM */}
      <section id="long-term" className="scroll-mt-8 mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
        <SectionHeading
          eyebrow="03 · The Effect Over Time"
          title="How Inflation Gradually Reduces Purchasing Power"
          description="Inflation compounds: each year's price increase applies to the already increased price level. Even moderate annual inflation can make a noticeable difference over many years."
        />

        <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
          <table className="w-full min-w-[580px] border-collapse text-left text-sm">
            <thead>
              <tr className="bg-slate-100">
                <th className="p-4 font-bold text-slate-800">Time elapsed</th>
                <th className="p-4 font-bold text-slate-800">Cost of today's ₹1,000 basket</th>
                <th className="p-4 font-bold text-slate-800">What ₹1,000 buys in today's terms</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Today", "₹1,000", "₹1,000"],
                ["After 5 years", "About ₹1,276", "About ₹784"],
                ["After 10 years", "About ₹1,629", "About ₹614"],
                ["After 20 years", "About ₹2,653", "About ₹377"],
              ].map(([time, cost, buyingPower]) => (
                <tr key={time} className="border-t border-slate-200">
                  <td className="p-4 font-bold text-slate-900">{time}</td>
                  <td className="p-4 text-slate-700">{cost}</td>
                  <td className="p-4 font-bold text-blue-800">{buyingPower}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-5 rounded-2xl border border-amber-200 bg-amber-50 p-5">
          <p className="font-bold text-amber-950">
            Important assumption: 5% inflation every year
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700">
            These figures are mathematical illustrations using a constant
            5% annual increase in the price level. They are not forecasts of
            India's future inflation. Actual inflation changes from year to
            year, and your personal expenses may rise at a different rate.
          </p>
        </div>

        <div className="mt-6 grid gap-5 md:grid-cols-2">
          <InfoCard icon={TrendingUp} title="The cost of the basket increases" tone="red">
            At 5% annual inflation, a basket costing ₹1,000 today would cost
            approximately ₹1,629 after ten years if the same inflation rate
            continued.
          </InfoCard>
          <InfoCard icon={Wallet} title="The value of fixed cash decreases" tone="blue">
            If you keep ₹1,000 without earning any return, it would buy
            approximately the same quantity as ₹614 buys today after ten
            years under that same assumption.
          </InfoCard>
        </div>
      </section>

      {/* FORMULA */}
      <section id="formula" className="scroll-mt-8 border-y border-slate-200 bg-slate-50 py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="04 · Calculation Guide"
            title="Purchasing Power Formula: Step by Step"
            description="There are two useful ways to understand the calculation: using a price index, or estimating the future cost of a basket when inflation compounds over time."
          />

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-blue-200 bg-white p-5 shadow-sm sm:p-7">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                  <Calculator size={23} />
                </div>
                <h3 className="text-xl font-bold text-slate-950">
                  Formula 1: Price Index
                </h3>
              </div>

              <div className="mt-5 rounded-xl bg-blue-50 p-5">
                <p className="text-sm font-bold uppercase tracking-wider text-blue-700">
                  Relative purchasing power
                </p>
                <p className="mt-3 text-lg font-bold leading-8 text-slate-950">
                  Base-period price index ÷ Current price index
                </p>
              </div>

              <h4 className="mt-6 font-bold text-slate-950">
                Example: The index rises from 100 to 125
              </h4>
              <ol className="mt-3 space-y-3 text-sm leading-6 text-slate-600">
                <li>1. Base-period index = 100.</li>
                <li>2. Current index = 125.</li>
                <li>3. Calculate 100 ÷ 125 = 0.80.</li>
                <li>4. Convert to a percentage: 0.80 × 100 = 80%.</li>
              </ol>

              <div className="mt-5 rounded-xl border border-emerald-200 bg-emerald-50 p-4">
                <p className="font-bold text-emerald-900">
                  Result: 80% of base-period purchasing power
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  The index is 25% higher, but the purchasing power of a fixed
                  amount of money is 20% lower.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-50 text-violet-700">
                  <TrendingDown size={23} />
                </div>
                <h3 className="text-xl font-bold text-slate-950">
                  Formula 2: Future Purchasing Power
                </h3>
              </div>

              <div className="mt-5 rounded-xl bg-violet-50 p-5">
                <p className="text-sm font-bold uppercase tracking-wider text-violet-700">
                  After repeated annual inflation
                </p>
                <p className="mt-3 text-lg font-bold leading-8 text-slate-950">
                  Current amount ÷ (1 + inflation rate)<sup>years</sup>
                </p>
              </div>

              <h4 className="mt-6 font-bold text-slate-950">
                Example: ₹10,000 after 5 years at 5%
              </h4>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Convert 5% to 0.05, then calculate:
              </p>
              <p className="rounded-xl bg-slate-50 p-4 font-bold leading-7 text-slate-900">
                ₹10,000 ÷ (1.05)<sup>5</sup> ≈ ₹7,835
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                This means ₹10,000 in five years would have approximately the
                same buying power as ₹7,835 today if prices rose by 5% every
                year and the basket represented by the inflation rate stayed
                comparable.
              </p>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
            <h3 className="text-lg font-bold text-slate-950">
              What does each symbol mean?
            </h3>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {[
                ["Current amount", "The money you want to evaluate."],
                ["Inflation rate", "The annual price increase expressed as a decimal."],
                ["Years", "How long the price changes compound."],
              ].map(([title, description]) => (
                <div key={title} className="rounded-xl bg-slate-50 p-4">
                  <p className="font-bold text-slate-900">{title}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
<AdSlot />
      {/* SALARY */}
      <section id="salary" className="scroll-mt-8 mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
        <SectionHeading
          eyebrow="05 · Income and Cost of Living"
          title="Why a Salary Increase May Still Feel Like a Pay Cut"
          description="Your salary is measured in rupees, but your real financial progress depends on what those rupees can buy. Compare income growth with the prices relevant to your household."
        />

        <div className="grid gap-5 md:grid-cols-3">
          <InfoCard icon={TrendingUp} title="Salary grows faster" tone="green">
            Salary rises by 8% and prices rise by 5%. Real purchasing power
            generally improves because income grows faster than the price level.
          </InfoCard>
          <InfoCard icon={Banknote} title="Salary matches inflation" tone="blue">
            Salary and the relevant price level both rise by 5%. Purchasing
            power is approximately unchanged, assuming the same basket.
          </InfoCard>
          <InfoCard icon={TrendingDown} title="Prices grow faster" tone="red">
            Salary rises by 3% while relevant prices rise by 7%. Purchasing
            power generally falls even though your salary is higher.
          </InfoCard>
        </div>

        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
          <h3 className="text-xl font-bold text-slate-950">
            Compare three salary scenarios
          </h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            The following chart compares the percentage growth in salary with
            a hypothetical 5% rise in prices.
          </p>

          <div className="mt-6 space-y-5">
            <div>
              <div className="mb-3 flex justify-between gap-3">
                <span className="font-bold text-slate-800">Salary growth: 3%</span>
                <span className="text-sm text-red-700">Below inflation</span>
              </div>
              <ExampleRow label="Salary increase" value={3} color="blue" />
              <div className="mt-3">
                <ExampleRow label="Price increase" value={5} color="red" />
              </div>
            </div>

            <div className="border-t border-slate-100 pt-5">
              <div className="mb-3 flex justify-between gap-3">
                <span className="font-bold text-slate-800">Salary growth: 5%</span>
                <span className="text-sm text-blue-700">Matches inflation</span>
              </div>
              <ExampleRow label="Salary increase" value={5} color="blue" />
              <div className="mt-3">
                <ExampleRow label="Price increase" value={5} color="red" />
              </div>
            </div>

            <div className="border-t border-slate-100 pt-5">
              <div className="mb-3 flex justify-between gap-3">
                <span className="font-bold text-slate-800">Salary growth: 8%</span>
                <span className="text-sm text-emerald-700">Above inflation</span>
              </div>
              <ExampleRow label="Salary increase" value={8} color="blue" />
              <div className="mt-3">
                <ExampleRow label="Price increase" value={5} color="red" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-5 sm:p-6">
          <h3 className="text-lg font-bold text-slate-950">
            Formula: Real Salary Growth
          </h3>
          <p className="mt-3 rounded-xl bg-white p-4 font-bold leading-7 text-slate-900">
            Real growth = (1 + salary growth) ÷ (1 + inflation) − 1
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            For a salary increase of 3% and inflation of 5%, the calculation
            is 1.03 ÷ 1.05 − 1 ≈ −1.90%. Your salary is higher in rupees, but
            its purchasing power is about 1.90% lower for the same basket.
          </p>
        </div>
      </section>

      {/* HOUSEHOLD EXAMPLES */}
      <section id="household" className="scroll-mt-8 border-y border-slate-200 bg-slate-50 py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="06 · Everyday Situations"
            title="Four Ways Inflation Can Affect Your Daily Life"
            description="Inflation becomes easier to understand when you connect it with the purchases and financial decisions households make regularly."
          />

          <div className="grid gap-5 md:grid-cols-2">
            <InfoCard icon={ShoppingBasket} title="1. Buying groceries" tone="red">
              A household spends ₹6,000 a month on a regular grocery basket.
              If that same basket costs 5% more, its cost becomes ₹6,300.
              The family needs another ₹300 each month to maintain the same
              purchases.
              <div className="mt-4 rounded-xl bg-red-50 p-4">
                <p className="font-bold text-red-800">
                  Extra cost: ₹300 per month
                </p>
                <p className="mt-1 text-sm text-slate-600">
                  Equivalent to ₹3,600 over 12 months if the monthly difference
                  remains unchanged.
                </p>
              </div>
            </InfoCard>

            <InfoCard icon={Wallet} title="2. Paying household bills" tone="amber">
              If electricity, transport, cooking fuel, or maintenance costs
              rise, a larger part of the same monthly income may be needed for
              essential expenses. The household then has less money available
              for optional purchases.
              <p className="mt-3">
                The actual effect depends on the price changes and how much
                that household spends on each item.
              </p>
            </InfoCard>

            <InfoCard icon={PiggyBank} title="3. Planning a future purchase" tone="blue">
              Imagine a household wants to buy furniture that costs ₹20,000
              today. If the relevant price rises by 5% a year for three years,
              it could cost around ₹23,153 after three years.
              <p className="mt-3">
                A savings target based only on today's price may need updating
                when the purchase is several years away.
              </p>
            </InfoCard>

            <InfoCard icon={Banknote} title="4. Helping family with a fixed amount" tone="violet">
              Suppose you regularly send ₹5,000 to a family member. If their
              cost of living rises but the amount remains unchanged, the
              transfer may cover fewer essentials than before.
              <p className="mt-3">
                The amount of money has not changed, but what it can pay for
                may have.
              </p>
            </InfoCard>
          </div>

          <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
            <h3 className="text-lg font-bold text-slate-950">
              Why your personal experience may differ from official inflation
            </h3>
            <p className="mt-3 leading-7 text-slate-600">
              Two households can experience different changes in living costs.
              One may spend a large share of income on rent, another on food,
              fuel, or education. If those prices rise at different rates, their
              personal purchasing power will change differently, even during
              the same period.
            </p>
          </div>
        </div>
      </section>

      {/* SAVINGS */}
      <section id="savings" className="scroll-mt-8 mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
        <SectionHeading
          eyebrow="07 · Savings and Returns"
          title="Can Your Savings Grow While Your Purchasing Power Falls?"
          description="Yes. Your bank balance can increase in rupees and still lose purchasing power if the return you earn does not keep pace with inflation."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
            <h3 className="text-xl font-bold text-slate-950">
              A simple ₹10,000 example
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Suppose you put ₹10,000 into an account that earns 4% over one
              year, while the relevant price level rises by 6%. Ignore taxes
              and fees for this simplified example.
            </p>

            <div className="mt-5 space-y-3">
              <div className="flex justify-between gap-4 rounded-xl bg-slate-50 p-4">
                <span className="text-slate-600">Starting balance</span>
                <span className="font-bold text-slate-950">₹10,000</span>
              </div>
              <div className="flex justify-between gap-4 rounded-xl bg-slate-50 p-4">
                <span className="text-slate-600">Balance after 4% return</span>
                <span className="font-bold text-slate-950">₹10,400</span>
              </div>
              <div className="flex justify-between gap-4 rounded-xl bg-red-50 p-4">
                <span className="text-slate-700">Approximate real return</span>
                <span className="font-bold text-red-700">−1.89%</span>
              </div>
            </div>

            <p className="mt-4 text-sm leading-7 text-slate-600">
              The balance grew by 4%, but prices grew by 6%. The exact real
              return is 1.04 ÷ 1.06 − 1 ≈ −1.89%.
            </p>
          </div>

          <div className="rounded-2xl border border-blue-200 bg-blue-50 p-5 sm:p-7">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-blue-700">
              <Calculator size={24} />
            </div>
            <h3 className="mt-4 text-xl font-bold text-slate-950">
              Nominal Return vs Real Return
            </h3>
            <p className="mt-3 leading-7 text-slate-600">
              A nominal return is the percentage your money earns before
              adjusting for inflation. A real return estimates how your
              purchasing power changes after accounting for price growth.
            </p>
            <div className="mt-5 rounded-xl bg-white p-4">
              <p className="text-sm font-bold text-blue-700">Exact formula</p>
              <p className="mt-2 font-bold leading-7 text-slate-950">
                Real return = (1 + nominal return) ÷ (1 + inflation) − 1
              </p>
            </div>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              When comparing financial products, also consider tax, fees,
              access to your money, risk, and the time period involved.
            </p>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5 sm:p-6">
          <h3 className="font-bold text-amber-950">
            A useful distinction for savers
          </h3>
          <p className="mt-2 leading-7 text-slate-700">
            A falling real return does not mean the number in your account
            has fallen. It means the balance buys less than it would have
            bought if prices had stayed unchanged.
          </p>
        </div>
      </section>
<AdSlot />
      {/* CAUSES */}
      <section id="causes" className="scroll-mt-8 border-y border-slate-200 bg-slate-50 py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="08 · What Changes Buying Power?"
            title="Why Does Purchasing Power Change?"
            description="Purchasing power depends on both money available to spend and the prices of the goods and services people need."
          />

          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-red-200 bg-white p-5 sm:p-6">
              <h3 className="flex items-center gap-2 text-xl font-bold text-red-800">
                <TrendingUp size={22} />
                Factors That Can Reduce It
              </h3>
              <ul className="mt-5 space-y-4">
                {[
                  ["Rising prices", "The same goods and services cost more."],
                  ["Slow salary growth", "Income does not keep pace with the prices a household faces."],
                  ["Higher essential costs", "Food, housing, fuel, or medical expenses take up a larger share of the budget."],
                  ["Low returns on cash savings", "Interest earned may be lower than the rise in prices."],
                ].map(([title, description]) => (
                  <li key={title} className="flex gap-3">
                    <XCircle size={19} className="mt-1 shrink-0 text-red-600" />
                    <div>
                      <p className="font-bold text-slate-900">{title}</p>
                      <p className="mt-1 text-sm leading-6 text-slate-600">
                        {description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-emerald-200 bg-white p-5 sm:p-6">
              <h3 className="flex items-center gap-2 text-xl font-bold text-emerald-800">
                <TrendingUp size={22} />
                Factors That Can Improve It
              </h3>
              <ul className="mt-5 space-y-4">
                {[
                  ["Income grows faster than prices", "Salary growth exceeds the relevant increase in living costs."],
                  ["Lower prices for some essentials", "A household may spend less on particular goods or services."],
                  ["Better productivity", "More efficient production can help increase supply or reduce costs."],
                  ["Interest or investment returns", "Returns may help maintain or grow purchasing power, depending on inflation and risk."],
                ].map(([title, description]) => (
                  <li key={title} className="flex gap-3">
                    <CheckCircle2 size={19} className="mt-1 shrink-0 text-emerald-600" />
                    <div>
                      <p className="font-bold text-slate-900">{title}</p>
                      <p className="mt-1 text-sm leading-6 text-slate-600">
                        {description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PRACTICAL STEPS */}
      <section id="protect" className="scroll-mt-8 mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
        <SectionHeading
          eyebrow="09 · Practical Household Steps"
          title="How Can You Manage the Impact of Inflation?"
          description="No household can control the overall inflation rate, but it can review its spending, income, and financial goals to respond more deliberately."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <InfoCard icon={ShoppingBasket} title="Track essential expenses" tone="blue">
            Compare monthly spending on groceries, transport, utilities, rent,
            and other essentials. This helps you identify which categories are
            driving changes in your own budget.
          </InfoCard>

          <InfoCard icon={Calculator} title="Update your budget" tone="violet">
            Review recurring costs and adjust future savings targets when
            essential expenses increase. Avoid assuming that last year's
            budget will cover next year's needs.
          </InfoCard>

          <InfoCard icon={TrendingUp} title="Review income growth" tone="green">
            When evaluating a raise or a new job, compare the change in take-home
            income with the change in your likely living costs.
          </InfoCard>

          <InfoCard icon={PiggyBank} title="Compare real returns" tone="amber">
            When assessing savings options, consider returns after inflation,
            taxes, fees, and relevant risks rather than focusing only on the
            advertised interest rate.
          </InfoCard>

          <InfoCard icon={Wallet} title="Plan ahead for major goals" tone="blue">
            If you expect to pay for education, housing, or another major
            purchase in several years, account for possible changes in its cost.
          </InfoCard>

          <InfoCard icon={Lightbulb} title="Avoid rushed decisions" tone="red">
            Inflation alone does not make every investment suitable. Consider
            your goals, emergency needs, time horizon, and ability to handle
            losses before making financial decisions.
          </InfoCard>
        </div>

        <div className="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-5 sm:p-6">
          <h3 className="text-lg font-bold text-slate-950">
            Use inflation data carefully
          </h3>
          <p className="mt-3 leading-7 text-slate-700">
            In India, the Consumer Price Index (CPI) is a commonly used measure
            of consumer price changes. It is useful for understanding the
            broad trend, but it does not guarantee that every household's
            expenses rise at the same rate.
          </p>
          <a
            href="https://www.mospi.gov.in/"
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center gap-2 font-bold text-blue-700 hover:text-blue-900"
          >
            Visit India's Ministry of Statistics and Programme Implementation
            <ArrowRight size={17} />
          </a>
        </div>
      </section>

      {/* COMMON MISUNDERSTANDINGS */}
      <section className="border-y border-slate-200 bg-slate-50 py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Before You Go"
            title="Four Common Misunderstandings About Purchasing Power"
            description="These distinctions help prevent mistakes when interpreting inflation statistics and personal finances."
          />

          <div className="space-y-4">
            {[
              {
                wrong: "If my salary rises, I must be financially better off.",
                right: "Not necessarily. If the prices you pay rise faster than your take-home salary, purchasing power may fall.",
              },
              {
                wrong: "If inflation falls, prices must be falling.",
                right: "A lower positive inflation rate means prices are rising more slowly. A sustained decline in the general price level is deflation.",
              },
              {
                wrong: "Every household experiences the official inflation rate equally.",
                right: "Spending patterns differ. The official measure tracks a defined basket, while a household's own costs depend on what it buys.",
              },
              {
                wrong: "If my savings balance increases, I have gained purchasing power.",
                right: "Only if the increase in your balance is enough to offset the rise in the prices relevant to what you want to buy, after applicable taxes and costs.",
              },
            ].map((item) => (
              <div
                key={item.wrong}
                className="grid gap-3 rounded-2xl border border-slate-200 bg-white p-5 md:grid-cols-2"
              >
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-red-700">
                    Misunderstanding
                  </p>
                  <p className="mt-2 font-bold text-slate-900">{item.wrong}</p>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                    What to know
                  </p>
                  <p className="mt-2 leading-7 text-slate-600">{item.right}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
<AdSlot />
      {/* SUMMARY */}
      <section className="bg-gradient-to-br from-blue-700 to-indigo-800 py-14 text-white sm:py-16">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <p className="text-sm font-bold uppercase tracking-wider text-blue-100">
            The Big Picture
          </p>
          <h2 className="mt-3 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
            Your Money's Real Value Is What It Can Buy
          </h2>
          <p className="mt-5 max-w-3xl leading-8 text-blue-50">
            Inflation can affect grocery budgets, salaries, savings, and future
            goals. Understanding purchasing power helps you distinguish between
            earning more rupees and actually being able to afford more goods
            and services.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              ["Prices rise", "A fixed amount of money generally buys less."],
              ["Income beats inflation", "Purchasing power can improve."],
              ["Returns trail inflation", "Savings may lose real value."],
            ].map(([title, description]) => (
              <div
                key={title}
                className="rounded-xl border border-white/20 bg-white/10 p-4"
              >
                <p className="font-bold">{title}</p>
                <p className="mt-2 text-sm leading-6 text-blue-50">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="scroll-mt-8 border-b border-slate-200 bg-slate-50 py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="10 · Frequently Asked Questions"
            title="Purchasing Power and Inflation FAQs"
            description="Quick answers to common questions about the value of money, prices, income, and savings."
          />

          <div className="space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group rounded-xl border border-slate-200 bg-white p-5"
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-bold text-slate-900">
                  <span>{faq.q}</span>
                  <CircleHelp
                    size={19}
                    className="mt-0.5 shrink-0 text-blue-700"
                  />
                </summary>
                <p className="mt-3 border-t border-slate-100 pt-3 leading-7 text-slate-600">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      
    </main>
  );
}
