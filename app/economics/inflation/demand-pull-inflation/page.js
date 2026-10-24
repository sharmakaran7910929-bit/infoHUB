
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  ArrowUp,
  BarChart3,
  Building2,
  CheckCircle2,
  Factory,
  IndianRupee,
  Lightbulb,
  ShoppingCart,
  Store,
  TrendingUp,
  Users,
  Wallet,
  Wheat,
} from "lucide-react";
import AdSlot from "../../../../components/AdSlot";

export const metadata = {
  title:
    "Demand-Pull Inflation: Meaning, Causes, Examples and Effects in India",
  description:
    "Learn what demand-pull inflation means, why it happens, and how excess demand can push prices up. Explore real-life examples, causes, effects, and solutions in India.",
  keywords: [
    "demand pull inflation",
    "what is demand pull inflation",
    "demand pull inflation examples",
    "causes of demand pull inflation",
    "demand pull inflation in India",
    "demand pull vs cost push inflation",
  ],
  alternates: {
    canonical: "/economics/inflation/demand-pull-inflation",
  },
  openGraph: {
    title: "Demand-Pull Inflation: Meaning, Causes and Examples",
    description:
      "Understand how excess demand can push prices up, with simple examples and explanations relevant to India.",
    url: "/economics/inflation/demand-pull-inflation",
    type: "article",
  },
};

function SectionHeading({ number, eyebrow, title, description }) {
  return (
    <div className="mb-8 max-w-3xl">
      <div className="mb-3 flex items-center gap-3">
        {number && (
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-700 text-sm font-bold text-white">
            {number}
          </span>
        )}
        {eyebrow && (
          <p className="text-sm font-bold uppercase tracking-wide text-blue-700">
            {eyebrow}
          </p>
        )}
      </div>
      <h2 className="text-2xl font-bold tracking-tight text-gray-950 sm:text-3xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-base leading-7 text-gray-700">
          {description}
        </p>
      )}
    </div>
  );
}

function InfoCard({ icon: Icon, title, children, color = "blue" }) {
  const colors = {
    blue: "bg-blue-50 text-blue-800",
    amber: "bg-amber-50 text-amber-800",
    violet: "bg-violet-50 text-violet-800",
    emerald: "bg-emerald-50 text-emerald-800",
    rose: "bg-rose-50 text-rose-800",
  };

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
      <div
        className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl ${colors[color]}`}
      >
        <Icon size={23} />
      </div>
      <h3 className="text-lg font-bold text-gray-950">{title}</h3>
      <div className="mt-2 text-sm leading-6 text-gray-700">{children}</div>
    </div>
  );
}

function Step({ number, title, children }) {
  return (
    <div className="flex gap-4">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-700 text-sm font-bold text-white">
        {number}
      </div>
      <div className="pb-6">
        <h3 className="font-bold text-gray-950">{title}</h3>
        <p className="mt-1 text-sm leading-6 text-gray-700">{children}</p>
      </div>
    </div>
  );
}

function FAQ({ question, children }) {
  return (
    <details className="group rounded-xl border border-gray-200 bg-white p-5">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-gray-950">
        {question}
        <span className="text-blue-700 transition-transform group-open:rotate-90">
          <ArrowRight size={18} />
        </span>
      </summary>
      <div className="mt-3 text-sm leading-7 text-gray-700">{children}</div>
    </details>
  );
}

const causes = [
  {
    icon: Wallet,
    title: "Higher Household Spending",
    color: "blue",
    text: "When households have more income or greater willingness to spend, demand for goods and services can rise.",
  },
  {
    icon: Building2,
    title: "Higher Government Spending",
    color: "violet",
    text: "Government spending can increase demand for construction, equipment, labour, and other resources.",
  },
  {
    icon: IndianRupee,
    title: "Easier Credit",
    color: "emerald",
    text: "When borrowing becomes easier or cheaper, households and businesses may increase their spending.",
  },
  {
    icon: Factory,
    title: "Business Investment",
    color: "amber",
    text: "Higher business investment increases demand for machinery, materials, construction, and related services.",
  },
  {
    icon: TrendingUp,
    title: "Strong Export Demand",
    color: "rose",
    text: "Growing demand from overseas buyers can increase demand for domestic products and production capacity.",
  },
  {
    icon: ShoppingCart,
    title: "Supply Cannot Keep Up",
    color: "blue",
    text: "If production capacity, labour, transport, or available stock cannot expand quickly enough, price pressures may build.",
  },
];

export default function DemandPullInflationPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* HERO */}
      <section className="overflow-hidden border-b border-blue-100 bg-gradient-to-br from-blue-50 via-white to-violet-50">
        <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-3 py-1.5 text-sm font-bold text-blue-800">
                <TrendingUp size={16} />
                Economics · Inflation
              </div>

              <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-950 sm:text-4xl lg:text-5xl">
                Demand-Pull Inflation: Meaning, Causes and Examples
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-8 text-gray-700 sm:text-lg">
                Why do prices sometimes rise when people want to buy more
                goods than businesses can supply? Learn how strong demand can
                push prices up, with everyday examples and an explanation of
                how it works in the economy.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#how-it-works"
                  className="inline-flex items-center gap-2 rounded-xl bg-blue-700 px-5 py-3 font-bold text-white transition hover:bg-blue-800"
                >
                  Understand the Process
                  <ArrowRight size={18} />
                </a>
                <a
                  href="#examples"
                  className="inline-flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-5 py-3 font-bold text-gray-800 transition hover:bg-gray-50"
                >
                  See Examples
                </a>
              </div>
            </div>

            {/* Demand and supply illustration */}
            <div className="rounded-3xl border border-gray-200 bg-white p-5 shadow-xl sm:p-6">
              <div className="mb-5 flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-bold text-blue-700">
                    HOW IT WORKS
                  </p>
                  <h2 className="mt-1 text-xl font-bold text-gray-950">
                    More Buyers, Limited Supply
                  </h2>
                </div>
                <div className="rounded-xl bg-blue-50 p-3 text-blue-800">
                  <BarChart3 size={25} />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-blue-200 bg-blue-50 p-4">
                  <Users className="mb-3 text-blue-800" size={27} />
                  <p className="font-bold text-blue-950">Demand Rises</p>
                  <p className="mt-2 text-sm leading-5 text-blue-900">
                    More people want to buy the product.
                  </p>
                  <div className="mt-3 flex items-center gap-2 text-sm font-bold text-blue-800">
                    <ArrowUp size={17} />
                    Buying pressure
                  </div>
                </div>

                <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4">
                  <Factory className="mb-3 text-amber-800" size={27} />
                  <p className="font-bold text-amber-950">Supply Is Limited</p>
                  <p className="mt-2 text-sm leading-5 text-amber-900">
                    Businesses cannot increase output quickly enough.
                  </p>
                  <div className="mt-3 flex items-center gap-2 text-sm font-bold text-amber-800">
                    <ArrowDown size={17} />
                    Stock pressure
                  </div>
                </div>
              </div>

              <div className="my-4 flex justify-center">
                <ArrowDown className="text-gray-500" size={24} />
              </div>

              <div className="rounded-2xl bg-gradient-to-r from-blue-700 to-violet-700 p-5 text-white">
                <div className="flex items-center gap-3">
                  <TrendingUp size={28} />
                  <div>
                    <p className="text-lg font-bold">Upward Price Pressure</p>
                    <p className="mt-1 text-sm leading-5 text-blue-50">
                      Sellers may raise prices when demand exceeds available
                      supply at current prices.
                    </p>
                  </div>
                </div>
              </div>

              <p className="mt-3 text-xs leading-5 text-gray-500">
                Conceptual illustration. Actual price movements depend on
                market conditions and how supply responds.
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-blue-100 bg-white p-4">
              <Users className="mb-3 text-blue-700" size={23} />
              <p className="font-bold text-gray-950">Demand</p>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                More purchasing activity in the economy.
              </p>
            </div>
            <div className="rounded-2xl border border-amber-100 bg-white p-4">
              <Factory className="mb-3 text-amber-700" size={23} />
              <p className="font-bold text-gray-950">Supply</p>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                Production may struggle to keep pace.
              </p>
            </div>
            <div className="rounded-2xl border border-violet-100 bg-white p-4">
              <TrendingUp className="mb-3 text-violet-700" size={23} />
              <p className="font-bold text-gray-950">Prices</p>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                Strong demand can create inflationary pressure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-blue-700">
              Start Here
            </p>
            <h2 className="mt-2 text-2xl font-bold text-gray-950">
              What Is Demand-Pull Inflation?
            </h2>
          </div>
          <div className="space-y-4 text-base leading-8 text-gray-700">
            <p>
              <strong className="text-gray-950">
                Demand-pull inflation
              </strong>{" "}
              is a rise in the general price level that occurs when overall
              demand for goods and services grows faster than the economy's
              ability to supply them at existing prices.
            </p>
            <p>
              In simple words, too much spending is chasing a limited amount of
              available output. Businesses may respond to strong demand by
              increasing prices, particularly when they cannot expand
              production quickly.
            </p>
            <p>
              It does not mean that every product becomes more expensive at
              once. The size and spread of price increases depend on which
              goods are in demand and how easily businesses can increase supply.
            </p>
          </div>
        </div>
      </section>
<AdSlot />
      {/* HOW IT WORKS */}
      <section
        id="how-it-works"
        className="scroll-mt-8 border-y border-gray-200 bg-gray-50"
      >
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
          <SectionHeading
            number="01"
            eyebrow="Step-by-Step"
            title="How Does Demand-Pull Inflation Work?"
            description="Follow the process from increased spending to possible increases in prices."
          />

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-gray-200 bg-white p-6 sm:p-8">
              <Step number="1" title="Demand Increases">
                Consumers, businesses, the government, or overseas buyers
                increase spending on goods and services.
              </Step>
              <Step number="2" title="Available Supply Faces Pressure">
                Businesses may have limited stock, factory capacity, workers,
                raw materials, or time to respond.
              </Step>
              <Step number="3" title="Buyers Compete for Available Goods">
                When more buyers seek the available output, sellers may gain
                the ability to charge higher prices.
              </Step>
              <Step number="4" title="Price Levels May Rise">
                If demand pressure is broad and persistent, it can contribute
                to inflation across the economy.
              </Step>
            </div>

            <div className="flex flex-col justify-center rounded-3xl border border-blue-200 bg-gradient-to-br from-blue-50 to-white p-6 sm:p-8">
              <div className="mb-5 flex items-center gap-3">
                <div className="rounded-xl bg-blue-100 p-3 text-blue-800">
                  <Lightbulb size={25} />
                </div>
                <h3 className="text-xl font-bold text-gray-950">
                  A Simple Market Example
                </h3>
              </div>

              <p className="leading-7 text-gray-700">
                Imagine a town has 100 air conditioners available during a
                heatwave, but 180 households want to buy one immediately.
                Retailers may run out of stock, and prices may rise if supply
                cannot respond quickly.
              </p>

              <div className="my-6 grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-blue-200 bg-white p-4 text-center">
                  <p className="text-sm font-bold text-gray-600">
                    Available Units
                  </p>
                  <p className="mt-2 text-3xl font-bold text-blue-800">100</p>
                </div>
                <div className="rounded-2xl border border-amber-200 bg-white p-4 text-center">
                  <p className="text-sm font-bold text-gray-600">
                    Interested Buyers
                  </p>
                  <p className="mt-2 text-3xl font-bold text-amber-800">180</p>
                </div>
              </div>

              <div className="rounded-xl bg-blue-700 p-4 text-white">
                <p className="font-bold">Demand exceeds available stock.</p>
                <p className="mt-1 text-sm leading-6 text-blue-50">
                  This can create upward price pressure, although the final
                  outcome depends on competition, stock, and new supply.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CAUSES */}
      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <SectionHeading
          number="02"
          eyebrow="Main Causes"
          title="What Causes Demand-Pull Inflation?"
          description="Several forces can increase overall demand. Inflationary pressure is more likely when production cannot expand enough to meet that demand."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {causes.map(({ icon: Icon, title, text, color }) => (
            <InfoCard key={title} icon={Icon} title={title} color={color}>
              {text}
            </InfoCard>
          ))}
        </div>
      </section>
<AdSlot />
      {/* EXAMPLES */}
      <section
        id="examples"
        className="scroll-mt-8 border-y border-violet-100 bg-gradient-to-br from-violet-50 via-white to-blue-50"
      >
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
          <SectionHeading
            number="03"
            eyebrow="Everyday Situations"
            title="Examples of Demand-Pull Inflation"
            description="These examples show how increased demand can put upward pressure on prices when supply is slow to respond."
          />

          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-gray-200 bg-white p-5">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-amber-800">
                <Wheat size={25} />
              </div>
              <h3 className="text-lg font-bold text-gray-950">
                1. Festival Shopping
              </h3>
              <p className="mt-2 text-sm leading-7 text-gray-700">
                During a major festival, demand for sweets, clothing, gifts,
                and decorations may increase. If certain goods are in short
                supply, sellers may raise prices.
              </p>
              <p className="mt-3 rounded-lg bg-amber-50 p-3 text-sm leading-6 text-amber-950">
                <strong>Why it fits:</strong> Demand rises faster than the
                available supply of some products.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-5">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-800">
                <Building2 size={25} />
              </div>
              <h3 className="text-lg font-bold text-gray-950">
                2. Housing Demand
              </h3>
              <p className="mt-2 text-sm leading-7 text-gray-700">
                If many people move to a city for jobs while new housing
                construction remains limited, competition for available homes
                can push rents upward.
              </p>
              <p className="mt-3 rounded-lg bg-blue-50 p-3 text-sm leading-6 text-blue-950">
                <strong>Why it fits:</strong> Demand for housing exceeds the
                supply available in a location.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-5">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-violet-100 text-violet-800">
                <Wallet size={25} />
              </div>
              <h3 className="text-lg font-bold text-gray-950">
                3. Strong Consumer Spending
              </h3>
              <p className="mt-2 text-sm leading-7 text-gray-700">
                When households feel confident about their income and spend
                more on cars, appliances, travel, and other purchases, demand
                can rise across several sectors.
              </p>
              <p className="mt-3 rounded-lg bg-violet-50 p-3 text-sm leading-6 text-violet-950">
                <strong>Why it fits:</strong> Higher total spending can put
                pressure on productive capacity.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-5">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-800">
                <Factory size={25} />
              </div>
              <h3 className="text-lg font-bold text-gray-950">
                4. Rapid Infrastructure Spending
              </h3>
              <p className="mt-2 text-sm leading-7 text-gray-700">
                A surge in construction projects can increase demand for
                cement, steel, machinery, and skilled labour. If supply is
                constrained, prices or wages may rise.
              </p>
              <p className="mt-3 rounded-lg bg-emerald-50 p-3 text-sm leading-6 text-emerald-950">
                <strong>Why it fits:</strong> Additional investment spending
                increases demand for resources.
              </p>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-5 sm:p-6">
            <div className="flex items-start gap-3">
              <Lightbulb className="mt-1 shrink-0 text-violet-700" size={24} />
              <div>
                <h3 className="font-bold text-gray-950">
                  Important Distinction
                </h3>
                <p className="mt-2 text-sm leading-7 text-gray-700">
                  A temporary price increase for one product is not necessarily
                  economy-wide inflation. Demand-pull inflation refers to
                  broader price pressure caused by aggregate demand growing
                  faster than the economy's ability to supply output.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AGGREGATE DEMAND */}
      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <SectionHeading
          number="04"
          eyebrow="Macroeconomics"
          title="How Aggregate Demand Creates Price Pressure"
          description="Economists use aggregate demand to describe total planned spending on domestically produced goods and services at different price levels."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-blue-200 bg-blue-50/60 p-6 sm:p-8">
            <h3 className="text-xl font-bold text-gray-950">
              The Aggregate Demand Components
            </h3>
            <p className="mt-3 text-sm leading-7 text-gray-700">
              Aggregate demand is commonly expressed as:
            </p>
            <div className="my-5 rounded-2xl bg-white p-5 text-center ring-1 ring-blue-200">
              <p className="text-xl font-bold text-blue-900 sm:text-2xl">
                AD = C + I + G + (X − M)
              </p>
            </div>
            <div className="space-y-3">
              {[
                ["C", "Consumption", "Household spending"],
                ["I", "Investment", "Business investment"],
                ["G", "Government Spending", "Public purchases and investment"],
                ["X − M", "Net Exports", "Exports minus imports"],
              ].map(([symbol, title, description]) => (
                <div
                  key={symbol}
                  className="flex items-center gap-3 rounded-xl bg-white p-3 ring-1 ring-blue-100"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-100 font-bold text-blue-900">
                    {symbol}
                  </div>
                  <div>
                    <p className="font-bold text-gray-950">{title}</p>
                    <p className="text-sm text-gray-600">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-center rounded-3xl border border-gray-200 bg-white p-6 sm:p-8">
            <h3 className="text-xl font-bold text-gray-950">
              When Does More Demand Become Inflationary?
            </h3>
            <p className="mt-4 leading-7 text-gray-700">
              An increase in demand does not always cause inflation. If
              factories have spare capacity, workers are available, and supply
              chains operate smoothly, businesses may produce more without
              increasing prices substantially.
            </p>
            <p className="mt-4 leading-7 text-gray-700">
              Demand-pull pressure becomes more likely when the economy is
              close to its productive limits or when supply cannot adjust
              quickly enough.
            </p>
            <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-4">
              <p className="font-bold text-amber-950">
                Remember
              </p>
              <p className="mt-1 text-sm leading-6 text-amber-950">
                Higher demand can increase output, prices, or both. The result
                depends partly on the economy's capacity to produce more.
              </p>
            </div>
          </div>
        </div>
      </section>
<AdSlot />
      {/* EFFECTS */}
      <section className="border-y border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
          <SectionHeading
            number="05"
            eyebrow="Economic Effects"
            title="What Are the Effects of Demand-Pull Inflation?"
            description="Its effects depend on how quickly prices rise, whether incomes keep pace, and how businesses and policymakers respond."
          />

          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-emerald-200 bg-white p-6">
              <h3 className="flex items-center gap-2 text-lg font-bold text-gray-950">
                <CheckCircle2 className="text-emerald-700" size={22} />
                Possible Benefits
              </h3>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-gray-700">
                <li>
                  <strong>Higher production:</strong> Businesses may expand
                  output to meet stronger demand.
                </li>
                <li>
                  <strong>More hiring:</strong> Growing sales can encourage
                  firms to employ additional workers.
                </li>
                <li>
                  <strong>Stronger investment:</strong> Firms may invest in
                  capacity when demand is expected to remain strong.
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-rose-200 bg-white p-6">
              <h3 className="flex items-center gap-2 text-lg font-bold text-gray-950">
                <TrendingUp className="text-rose-700" size={22} />
                Possible Risks
              </h3>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-gray-700">
                <li>
                  <strong>Reduced purchasing power:</strong> Prices can rise
                  faster than household incomes.
                </li>
                <li>
                  <strong>Higher business costs:</strong> Competition for
                  materials, labour, and capacity can raise costs.
                </li>
                <li>
                  <strong>Policy tightening:</strong> Persistent inflation may
                  lead monetary authorities to take steps to moderate demand.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <SectionHeading
          number="06"
          eyebrow="Possible Responses"
          title="How Can Demand-Pull Inflation Be Controlled?"
          description="Policymakers may seek to moderate excessive demand while addressing supply constraints. The appropriate response depends on the source and persistence of inflation."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <InfoCard icon={IndianRupee} title="Monetary Policy" color="blue">
            A central bank may raise policy interest rates to make borrowing
            more expensive and moderate credit growth and spending over time.
          </InfoCard>
          <InfoCard icon={Wallet} title="Fiscal Policy" color="violet">
            Governments may adjust spending, taxation, or the timing of public
            expenditure to manage aggregate demand.
          </InfoCard>
          <InfoCard icon={Factory} title="Increase Productive Capacity" color="emerald">
            Investment in production, transport, storage, and infrastructure
            can help supply respond to demand over time.
          </InfoCard>
          <InfoCard icon={Wheat} title="Improve Supply Chains" color="amber">
            Better storage, distribution, and logistics can help reduce
            bottlenecks in selected markets.
          </InfoCard>
          <InfoCard icon={BarChart3} title="Monitor Inflation Trends" color="rose">
            Policymakers examine CPI, WPI, output, employment, and other
            indicators before deciding how to respond.
          </InfoCard>
          <InfoCard icon={Users} title="Avoid Excessive Demand Pressure" color="blue">
            Sustainable growth in spending and productive capacity can reduce
            the risk of demand persistently outpacing supply.
          </InfoCard>
        </div>

        <p className="mt-5 text-sm leading-6 text-gray-600">
          These measures can have time lags and trade-offs. Interest-rate
          changes, for example, cannot directly resolve every supply shortage,
          and policies must consider employment and economic growth as well as
          inflation.
        </p>
      </section>

      {/* DIFFERENCE FROM COST-PUSH */}
      <section className="border-y border-blue-100 bg-blue-50/50">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
          <SectionHeading
            number="07"
            eyebrow="Compare the Concepts"
            title="Demand-Pull Inflation vs Cost-Push Inflation"
            description="Both can raise the general price level, but they begin with different pressures."
          />

          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
            <div className="grid grid-cols-2">
              <div className="bg-blue-700 p-4 text-white sm:p-5">
                <h3 className="font-bold">Demand-Pull Inflation</h3>
                <p className="mt-2 text-sm leading-6 text-blue-50">
                  Demand grows faster than available supply.
                </p>
              </div>
              <div className="bg-amber-700 p-4 text-white sm:p-5">
                <h3 className="font-bold">Cost-Push Inflation</h3>
                <p className="mt-2 text-sm leading-6 text-amber-50">
                  Production costs or supply disruptions push prices upward.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 border-t border-gray-200">
              <div className="border-r border-gray-200 p-4 sm:p-5">
                <p className="font-bold text-gray-950">Example</p>
                <p className="mt-2 text-sm leading-6 text-gray-700">
                  More buyers want to purchase homes while available housing
                  supply is limited.
                </p>
              </div>
              <div className="p-4 sm:p-5">
                <p className="font-bold text-gray-950">Example</p>
                <p className="mt-2 text-sm leading-6 text-gray-700">
                  A sharp increase in fuel or raw-material costs raises the
                  cost of producing and transporting goods.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 border-t border-gray-200">
              <div className="border-r border-gray-200 p-4 sm:p-5">
                <p className="font-bold text-gray-950">Main Pressure</p>
                <p className="mt-2 text-sm leading-6 text-gray-700">
                  Strong aggregate demand relative to supply.
                </p>
              </div>
              <div className="p-4 sm:p-5">
                <p className="font-bold text-gray-950">Main Pressure</p>
                <p className="mt-2 text-sm leading-6 text-gray-700">
                  Higher input costs or reduced supply.
                </p>
              </div>
            </div>
          </div>

          <p className="mt-5 text-sm leading-6 text-gray-600">
            Real-world inflation can involve both demand-side and supply-side
            pressures at the same time.
          </p>
        </div>
      </section>
<AdSlot />
      {/* FAQ */}
      <section
        id="faqs"
        className="scroll-mt-8 mx-auto max-w-4xl px-5 py-14 sm:px-8"
      >
        <SectionHeading
          number="08"
          eyebrow="Frequently Asked Questions"
          title="Demand-Pull Inflation FAQs"
          description="Quick answers to common questions about excess demand and rising prices."
        />

        <div className="space-y-3">
          <FAQ question="What is demand-pull inflation in simple words?">
            Demand-pull inflation occurs when demand for goods and services
            grows faster than the economy can supply them at existing prices,
            creating upward pressure on the general price level.
          </FAQ>

          <FAQ question="What is the main cause of demand-pull inflation?">
            There is no single cause. Strong consumer spending, government
            expenditure, business investment, easier credit, and export demand
            can all increase aggregate demand.
          </FAQ>

          <FAQ question="Can demand-pull inflation occur in India?">
            Yes. The concept applies to India as it does to other economies.
            For example, strong demand for particular goods or services can
            create price pressure when supply cannot adjust quickly enough.
            Whether inflation at a particular time is mainly demand-driven
            requires evidence from economic data.
          </FAQ>

          <FAQ question="Is demand-pull inflation always bad?">
            Not necessarily. Strong demand can support output, employment, and
            investment when the economy has room to expand. Persistent demand
            that exceeds productive capacity, however, can create sustained
            inflationary pressure.
          </FAQ>

          <FAQ question="What is the difference between demand-pull and cost-push inflation?">
            Demand-pull inflation begins with strong demand relative to
            available supply. Cost-push inflation begins with higher production
            costs or supply disruptions. Both can occur together.
          </FAQ>

          <FAQ question="How can demand-pull inflation be controlled?">
            Depending on the circumstances, policymakers may moderate demand
            through monetary or fiscal policy and help supply respond through
            improvements in production capacity and distribution.
          </FAQ>

          <FAQ question="Does higher demand always cause inflation?">
            No. If businesses can increase production to meet demand, output
            may grow without a large increase in prices. Inflationary pressure
            is more likely when supply is constrained or slow to respond.
          </FAQ>
        </div>
      </section>

      
    </main>
  );
}
