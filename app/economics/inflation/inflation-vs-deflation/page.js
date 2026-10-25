
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  ArrowUp,
  CheckCircle2,
  CircleHelp,
  IndianRupee,
  Lightbulb,
  ShoppingBasket,
  TrendingDown,
  TrendingUp,
  Wallet,
} from "lucide-react";
import AdSlot from "../../../../components/AdSlot";

export const metadata = {
  title: "Inflation vs Deflation: Meaning, Differences & Real Examples",
  description:
    "Understand inflation vs deflation with real-life examples, Indian household budgets, price comparisons, causes, effects, and why falling prices are not always good.",
  alternates: {
    canonical:
      "https://www.pricetag.co.in/economics/inflation/inflation-vs-deflation",
  },
};

const comparisons = [
  ["Meaning", "General price level rises", "General price level falls"],
  ["Price movement", "Goods and services become more expensive overall", "Goods and services become cheaper overall"],
  ["Purchasing power", "Usually decreases if income does not keep pace", "May increase when prices fall, if income remains stable"],
  ["Consumer behaviour", "People may buy sooner before expected price rises", "People may delay purchases if they expect further price falls"],
  ["Business impact", "Costs may rise; pricing and wages become harder to plan", "Sales and profits may weaken if falling prices reflect low demand"],
  ["Employment risk", "High or unpredictable inflation can hurt businesses and households", "Prolonged deflation can lead to lower production and job cuts"],
];

const faqs = [
  {
    q: "What is the main difference between inflation and deflation?",
    a: "Inflation is a sustained rise in the general price level. Deflation is a sustained fall in the general price level across the economy.",
  },
  {
    q: "Is deflation good for consumers?",
    a: "It can help consumers when prices fall because production becomes more efficient. But economy-wide, persistent deflation can be harmful if it reflects weak demand, falling incomes, and job losses.",
  },
  {
    q: "Does a lower inflation rate mean prices are falling?",
    a: "No. If inflation falls from 6% to 3%, prices are generally still rising, just more slowly. This is called disinflation. Deflation occurs when the overall price level falls.",
  },
  {
    q: "Can inflation and deflation happen at the same time?",
    a: "Some individual prices can fall while others rise. Economists use overall price measures, such as a consumer price index, to determine whether the general price level is rising or falling.",
  },
  {
    q: "What is a real historical example of deflation?",
    a: "The Great Depression in the 1930s involved widespread falling prices and severe economic contraction. It illustrates how deflation can accompany falling demand, business failures, and unemployment.",
  },
];

function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="mb-8 max-w-3xl">
      <p className="mb-2 text-sm font-bold uppercase tracking-wider text-blue-700">
        {eyebrow}
      </p>
      <h2 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 leading-7 text-slate-600">{description}</p>
      )}
    </div>
  );
}

function ExampleCard({ icon: Icon, title, children, tone = "blue" }) {
  const tones = {
    blue: "border-blue-200 bg-blue-50 text-blue-700",
    red: "border-red-200 bg-red-50 text-red-700",
    green: "border-emerald-200 bg-emerald-50 text-emerald-700",
    amber: "border-amber-200 bg-amber-50 text-amber-700",
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl border ${tones[tone]}`}>
        <Icon size={22} />
      </div>
      <h3 className="text-lg font-bold text-slate-950">{title}</h3>
      <div className="mt-2 text-sm leading-6 text-slate-600">{children}</div>
    </div>
  );
}

export default function InflationVsDeflationPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* HERO */}
      <section className="overflow-hidden border-b border-blue-100 bg-gradient-to-br from-blue-50 via-white to-sky-50">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-3 py-1.5 text-sm font-bold text-blue-800">
              <IndianRupee size={16} />
              Economics · Inflation
            </p>
            <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl">
              Inflation vs Deflation: What Happens to Your Money?
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              Why does your monthly shopping bill rise? And why can falling
              prices sometimes be a warning sign for the economy? Understand
              both with practical examples from everyday life.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#real-examples"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-700 px-5 py-3 font-bold text-white transition hover:bg-blue-800"
              >
                See Real Examples <ArrowRight size={18} />
              </a>
              <a
                href="#comparison"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 font-bold text-slate-800 hover:bg-slate-50"
              >
                Compare Both
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-xl sm:p-7">
            <p className="text-sm font-bold uppercase tracking-wider text-slate-500">
              Two opposite price movements
            </p>
            <div className="mt-5 grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-red-200 bg-red-50 p-4">
                <div className="flex items-center gap-2 text-red-700">
                  <TrendingUp size={22} />
                  <span className="font-bold">Inflation</span>
                </div>
                <p className="mt-4 text-3xl font-bold text-slate-950">₹100 ↑</p>
                <p className="mt-2 text-sm leading-5 text-slate-600">
                  A product that cost ₹100 now costs ₹110.
                </p>
                <div className="mt-4 h-2 rounded-full bg-red-100">
                  <div className="h-2 w-4/5 rounded-full bg-red-500" />
                </div>
                <p className="mt-2 text-xs font-bold text-red-700">
                  Illustrative increase: 10%
                </p>
              </div>
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
                <div className="flex items-center gap-2 text-emerald-700">
                  <TrendingDown size={22} />
                  <span className="font-bold">Deflation</span>
                </div>
                <p className="mt-4 text-3xl font-bold text-slate-950">₹100 ↓</p>
                <p className="mt-2 text-sm leading-5 text-slate-600">
                  A product that cost ₹100 now costs ₹90.
                </p>
                <div className="mt-4 h-2 rounded-full bg-emerald-100">
                  <div className="h-2 w-2/5 rounded-full bg-emerald-500" />
                </div>
                <p className="mt-2 text-xs font-bold text-emerald-700">
                  Illustrative decrease: 10%
                </p>
              </div>
            </div>
            <p className="mt-4 text-xs leading-5 text-slate-500">
              These are simplified examples of price changes, not actual
              current market prices. Inflation and deflation refer to the
              general price level, not just one product.
            </p>
          </div>
        </div>
      </section>

      {/* DEFINITION */}
      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16">
        <SectionTitle
          eyebrow="Start With The Basics"
          title="What Do Inflation and Deflation Mean?"
          description="Economists look at the overall price level of a basket of goods and services. A price change in just one product is not enough to establish economy-wide inflation or deflation."
        />
        <div className="grid gap-5 md:grid-cols-2">
          <ExampleCard icon={ArrowUp} title="Inflation: Prices Rise" tone="red">
            Inflation occurs when the general price level rises over time.
            If the same household basket costs more than before, money buys
            less of that basket.
            <p className="mt-3 font-bold text-red-700">
              Example: ₹1,000 → ₹1,060 = 6% increase
            </p>
          </ExampleCard>
          <ExampleCard icon={ArrowDown} title="Deflation: Prices Fall" tone="green">
            Deflation occurs when the general price level falls over time.
            If the same basket costs less, the same amount of money can buy
            more of it, provided income and availability remain unchanged.
            <p className="mt-3 font-bold text-emerald-700">
              Example: ₹1,000 → ₹960 = 4% decrease
            </p>
          </ExampleCard>
        </div>
      </section>
<AdSlot />
      {/* COMPARISON */}
      <section id="comparison" className="border-y border-slate-200 bg-slate-50 py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionTitle
            eyebrow="Side-By-Side Difference"
            title="Inflation vs Deflation"
            description="Both change the value of money, but their causes and effects can be very different."
          />
          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full min-w-[680px] border-collapse text-left text-sm">
              <thead>
                <tr>
                  <th className="w-1/5 bg-slate-100 p-4 font-bold text-slate-800">Basis</th>
                  <th className="bg-red-50 p-4 font-bold text-red-800">Inflation</th>
                  <th className="bg-emerald-50 p-4 font-bold text-emerald-800">Deflation</th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map(([basis, inflation, deflation]) => (
                  <tr key={basis} className="border-t border-slate-200">
                    <td className="p-4 font-bold text-slate-900">{basis}</td>
                    <td className="p-4 leading-6 text-slate-600">{inflation}</td>
                    <td className="p-4 leading-6 text-slate-600">{deflation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* REAL EXAMPLES */}
      <section id="real-examples" className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16">
        <SectionTitle
          eyebrow="Everyday Economics"
          title="Real-Life Examples of Inflation and Deflation"
          description="These practical scenarios show how price movements can affect families, shoppers, and businesses. The rupee amounts below are illustrative, not official historical price data."
        />
        <div className="grid gap-5 md:grid-cols-2">
          <ExampleCard icon={ShoppingBasket} title="Example 1: Monthly Grocery Bill" tone="red">
            A family buys the same basket of groceries every month.
            <div className="my-4 space-y-3 rounded-xl bg-slate-50 p-4">
              <div className="flex items-center justify-between gap-4">
                <span className="text-slate-600">Last year</span>
                <strong className="text-slate-900">₹5,000</strong>
              </div>
              <div className="flex items-center justify-between gap-4">
                <span className="text-slate-600">This year</span>
                <strong className="text-red-700">₹5,300</strong>
              </div>
              <div className="h-2 rounded-full bg-slate-200">
                <div className="h-2 w-[85%] rounded-full bg-red-500" />
              </div>
              <p className="text-sm font-bold text-red-700">
                The same basket costs ₹300 more, a 6% increase.
              </p>
            </div>
            If the family budget stays the same, it may need to reduce other
            spending or buy fewer items.
          </ExampleCard>

          <ExampleCard icon={ShoppingBasket} title="Example 2: A Basket Gets Cheaper" tone="green">
            Imagine that the general price level falls and the same basket
            becomes cheaper.
            <div className="my-4 space-y-3 rounded-xl bg-slate-50 p-4">
              <div className="flex items-center justify-between gap-4">
                <span className="text-slate-600">Earlier basket cost</span>
                <strong className="text-slate-900">₹5,000</strong>
              </div>
              <div className="flex items-center justify-between gap-4">
                <span className="text-slate-600">Later basket cost</span>
                <strong className="text-emerald-700">₹4,800</strong>
              </div>
              <div className="h-2 rounded-full bg-slate-200">
                <div className="h-2 w-[65%] rounded-full bg-emerald-500" />
              </div>
              <p className="text-sm font-bold text-emerald-700">
                The basket costs ₹200 less, a 4% decrease.
              </p>
            </div>
            This helps the family if its income remains steady. But if prices
            are falling because the economy is weakening, incomes may also fall.
          </ExampleCard>

          <ExampleCard icon={Wallet} title="Example 3: Salary vs Prices" tone="amber">
            Suppose a worker earns ₹25,000 per month and their salary does
            not change. If the overall price level rises by 6%, that salary
            buys less than it did before.
            <p className="mt-3">
              If prices fall by 4% while the salary stays the same, its
              purchasing power can increase. But this benefit is less certain
              if the worker faces reduced hours or job loss.
            </p>
          </ExampleCard>

          <ExampleCard icon={TrendingDown} title="Example 4: A Business During Deflation" tone="blue">
            Imagine a shop selling appliances. Customers expect prices to
            fall further, so some delay buying. Sales drop, stock stays
            unsold, and the shop may discount products to attract customers.
            <p className="mt-3">
              If the pattern spreads across the economy, weaker sales may
              cause businesses to cut production, wages, or jobs.
            </p>
          </ExampleCard>
        </div>
      </section>
<AdSlot />
      {/* HISTORICAL EXAMPLE */}
      <section className="border-y border-blue-100 bg-gradient-to-br from-blue-50 via-white to-white py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-center">
            <div>
              <p className="mb-2 text-sm font-bold uppercase tracking-wider text-blue-700">
                Historical Example
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-slate-950">
                The Great Depression
              </h2>
              <p className="mt-4 leading-7 text-slate-600">
                During the Great Depression of the 1930s, the United States
                experienced widespread economic contraction and falling prices.
                Weak demand, business distress, and unemployment reinforced
                one another. It is an important historical example of why
                persistent deflation can be dangerous.
              </p>
              <a
                href="https://www.federalreserveeducation.org/teaching-resources/economics/inflation/inflation-deflation-and-disinflation"
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-2 font-bold text-blue-700 hover:text-blue-900"
              >
                Read the Federal Reserve Education explanation
                <ArrowRight size={17} />
              </a>
            </div>
            <div className="rounded-2xl border border-blue-200 bg-white p-5 shadow-sm sm:p-7">
              <h3 className="font-bold text-slate-950">
                How a deflationary cycle can develop
              </h3>
              <div className="mt-5 space-y-3">
                {[
                  ["1", "People delay purchases", "They expect lower prices later."],
                  ["2", "Business sales weaken", "Revenue and profits may fall."],
                  ["3", "Production and jobs decline", "Businesses reduce costs."],
                  ["4", "Household incomes weaken", "Spending can fall further."],
                ].map(([number, title, description]) => (
                  <div key={number} className="flex gap-3 rounded-xl bg-slate-50 p-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-700 text-sm font-bold text-white">
                      {number}
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">{title}</p>
                      <p className="mt-1 text-sm text-slate-600">{description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-xs leading-5 text-slate-500">
                This is a possible feedback loop, not an inevitable result of
                every price decline.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CAUSES */}
      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16">
        <SectionTitle
          eyebrow="Why Do Prices Change?"
          title="Common Causes of Inflation and Deflation"
          description="Price movements can come from changes in demand, supply, production costs, and wider economic conditions."
        />
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-red-200 bg-white p-6">
            <h3 className="flex items-center gap-2 text-xl font-bold text-red-800">
              <TrendingUp size={22} /> Causes of Inflation
            </h3>
            <ul className="mt-5 space-y-4">
              {[
                ["Demand grows faster than supply", "Many buyers compete for limited goods."],
                ["Production costs increase", "Fuel, transport, raw materials, or wages become more expensive."],
                ["Supply disruptions", "Weather events or transport problems reduce availability."],
              ].map(([title, detail]) => (
                <li key={title} className="flex gap-3">
                  <CheckCircle2 className="mt-1 shrink-0 text-red-600" size={18} />
                  <div>
                    <p className="font-bold text-slate-900">{title}</p>
                    <p className="mt-1 text-sm leading-6 text-slate-600">{detail}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-emerald-200 bg-white p-6">
            <h3 className="flex items-center gap-2 text-xl font-bold text-emerald-800">
              <TrendingDown size={22} /> Causes of Deflation
            </h3>
            <ul className="mt-5 space-y-4">
              {[
                ["Demand falls", "Households and businesses cut spending."],
                ["Credit and spending contract", "Borrowing and investment can weaken."],
                ["Supply increases relative to demand", "More goods are available than buyers want at prevailing prices."],
              ].map(([title, detail]) => (
                <li key={title} className="flex gap-3">
                  <CheckCircle2 className="mt-1 shrink-0 text-emerald-600" size={18} />
                  <div>
                    <p className="font-bold text-slate-900">{title}</p>
                    <p className="mt-1 text-sm leading-6 text-slate-600">{detail}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* DISINFLATION */}
      <section className="bg-amber-50 py-14">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <div className="flex items-start gap-4 rounded-2xl border border-amber-200 bg-white p-5 sm:p-7">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-800">
              <Lightbulb size={24} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-950">
                Important: Falling Inflation Is Not Always Deflation
              </h2>
              <p className="mt-3 leading-7 text-slate-600">
                Suppose the inflation rate falls from 8% to 3%. Prices are
                still rising, just more slowly. This is called{" "}
                <strong className="text-slate-900">disinflation</strong>.
                Deflation occurs when the overall price level actually falls.
              </p>
              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                <div className="rounded-xl bg-red-50 p-4">
                  <p className="text-sm font-bold text-red-700">Year 1</p>
                  <p className="mt-1 text-lg font-bold text-slate-950">₹100</p>
                  <p className="text-sm text-slate-600">Starting price</p>
                </div>
                <div className="rounded-xl bg-amber-50 p-4">
                  <p className="text-sm font-bold text-amber-800">Inflation slows</p>
                  <p className="mt-1 text-lg font-bold text-slate-950">₹108 → ₹111.24</p>
                  <p className="text-sm text-slate-600">Prices still rise</p>
                </div>
                <div className="rounded-xl bg-emerald-50 p-4">
                  <p className="text-sm font-bold text-emerald-800">Deflation</p>
                  <p className="mt-1 text-lg font-bold text-slate-950">₹100 → ₹97</p>
                  <p className="text-sm text-slate-600">Price level falls by 3%</p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-6 text-slate-500">
                The numbers illustrate the concepts. The first two years show
                positive inflation at 8% and then 3%; the final example shows
                a 3% price decline from a separate starting point.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TAKEAWAY */}
      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16">
        <SectionTitle
          eyebrow="What Should You Remember?"
          title="Is Inflation or Deflation Worse?"
          description="Neither label tells the whole story. The scale, duration, and cause of the price movement matter."
        />
        <div className="grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl border border-red-200 bg-red-50 p-6">
            <h3 className="text-xl font-bold text-red-900">Why high inflation hurts</h3>
            <p className="mt-3 leading-7 text-slate-700">
              Essentials may become harder to afford, savings may lose
              purchasing power, and businesses may struggle to plan costs.
            </p>
          </div>
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
            <h3 className="text-xl font-bold text-emerald-900">Why persistent deflation worries economists</h3>
            <p className="mt-3 leading-7 text-slate-700">
              Consumers may postpone spending, businesses may earn less, and
              falling wages or job losses can worsen weak demand.
            </p>
          </div>
        </div>
        <div className="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-6">
          <p className="font-bold text-blue-950">
            The practical takeaway
          </p>
          <p className="mt-2 leading-7 text-slate-700">
            Stable, predictable prices are generally easier for households and
            businesses to manage than either very high inflation or persistent
            economy-wide deflation.
          </p>
        </div>
      </section>
<AdSlot />
      {/* FAQ */}
      <section className="border-t border-slate-200 bg-slate-50 py-14 sm:py-16">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <SectionTitle
            eyebrow="Common Questions"
            title="Inflation vs Deflation FAQs"
          />
          <div className="space-y-3">
            {faqs.map((faq) => (
              <details key={faq.q} className="group rounded-xl border border-slate-200 bg-white p-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-slate-900">
                  {faq.q}
                  <CircleHelp size={19} className="shrink-0 text-blue-700" />
                </summary>
                <p className="mt-3 leading-7 text-slate-600">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED TOPICS */}
      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <SectionTitle
          eyebrow="Continue Learning"
          title="Explore Related Inflation Topics"
          description="Build a connected understanding of how prices are measured and why they change."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "What Is Inflation?",
              description: "Understand the meaning and everyday effects of inflation.",
              href: "/economics/inflation/what-is-inflation",
            },
            {
              title: "Inflation Rate Formula",
              description: "Learn to calculate percentage changes in prices.",
              href: "/economics/inflation/inflation-rate-formula",
            },
            {
              title: "CPI vs WPI",
              description: "Compare consumer and wholesale price indices.",
              href: "/economics/inflation/cpi-vs-wpi",
            },
            {
              title: "Demand-Pull Inflation",
              description: "See how strong demand can push prices upward.",
              href: "/economics/inflation/demand-pull-inflation",
            },
            {
              title: "Cost-Push Inflation",
              description: "Learn how rising production costs affect prices.",
              href: "/economics/inflation/cost-push-inflation",
            },
            {
              title: "Effects of Inflation",
              description: "Explore the impact on families, savings, and business.",
              href: "/economics/inflation/effects-of-inflation",
            },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-md"
            >
              <h3 className="font-bold text-slate-950 group-hover:text-blue-700">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {item.description}
              </p>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-blue-700">
                Read Topic <ArrowRight size={16} />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
