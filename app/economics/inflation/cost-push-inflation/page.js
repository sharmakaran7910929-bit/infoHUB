
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  ArrowUp,
  BarChart3,
  Building2,
  CheckCircle2,
  Factory,
  Fuel,
  IndianRupee,
  Lightbulb,
  Package,
  ShoppingCart,
  TrendingUp,
  Truck,
  Users,
  Wheat,
  Zap,
} from "lucide-react";
import AdSlot from "../../../../components/AdSlot";

export const metadata = {
  title:
    "Cost-Push Inflation: Meaning, Causes, Examples and Effects in India",
  description:
    "Learn what cost-push inflation means, its causes, real-life examples, effects on consumers and businesses, and how it differs from demand-pull inflation.",
  keywords: [
    "cost push inflation",
    "what is cost push inflation",
    "cost push inflation examples",
    "causes of cost push inflation",
    "cost push inflation in India",
    "cost push vs demand pull inflation",
    "effects of cost push inflation",
  ],
  alternates: {
    canonical: "/economics/inflation/cost-push-inflation",
  },
  openGraph: {
    title: "Cost-Push Inflation: Meaning, Causes and Examples",
    description:
      "Understand how rising production costs can push prices up, with simple examples relevant to India.",
    url: "/economics/inflation/cost-push-inflation",
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
    <div className="h-full rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
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
    icon: Fuel,
    title: "Higher Fuel and Energy Costs",
    color: "amber",
    text: "More expensive fuel or electricity can increase the cost of transport, manufacturing, refrigeration, and other business activities.",
  },
  {
    icon: Wheat,
    title: "Costlier Raw Materials",
    color: "emerald",
    text: "When materials such as metals, agricultural commodities, or chemicals become more expensive, producers may face higher costs.",
  },
  {
    icon: Truck,
    title: "Transport and Logistics Costs",
    color: "blue",
    text: "Higher freight charges, shipping expenses, or delivery costs can make it more expensive to move products through supply chains.",
  },
  {
    icon: Users,
    title: "Higher Labour Costs",
    color: "violet",
    text: "Rising wages can increase production costs, particularly when productivity does not rise enough to offset the increase.",
  },
  {
    icon: Package,
    title: "Supply Disruptions",
    color: "rose",
    text: "Natural disasters, shortages, or interrupted supply chains can reduce the availability of essential inputs and raise their prices.",
  },
  {
    icon: IndianRupee,
    title: "Imported Input Costs",
    color: "amber",
    text: "A weaker domestic currency can make imported fuel, machinery, components, and raw materials more expensive in rupee terms.",
  },
];

export default function CostPushInflationPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* HERO */}
      <section className="overflow-hidden border-b border-orange-100 bg-gradient-to-br from-orange-50 via-white to-rose-50">
        <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white px-3 py-1.5 text-sm font-bold text-orange-800">
                <TrendingUp size={16} />
                Economics · Inflation
              </div>

              <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-950 sm:text-4xl lg:text-5xl">
                Cost-Push Inflation: Meaning, Causes and Examples
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-8 text-gray-700 sm:text-lg">
                Why can the price of bread, clothing, transport, and other
                products rise when fuel, raw materials, or production costs
                become more expensive? Discover how rising business costs can
                create inflationary pressure.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#how-it-works"
                  className="inline-flex items-center gap-2 rounded-xl bg-orange-700 px-5 py-3 font-bold text-white transition hover:bg-orange-800"
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

            {/* Cost-Push Illustration */}
            <div className="rounded-3xl border border-gray-200 bg-white p-5 shadow-xl sm:p-6">
              <div className="mb-5 flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-bold text-orange-800">
                    HOW IT WORKS
                  </p>
                  <h2 className="mt-1 text-xl font-bold text-gray-950">
                    Higher Costs, Higher Prices
                  </h2>
                </div>
                <div className="rounded-xl bg-orange-50 p-3 text-orange-800">
                  <Factory size={25} />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-orange-200 bg-orange-50 p-4">
                  <Fuel className="mb-3 text-orange-800" size={27} />
                  <p className="font-bold text-orange-950">Input Costs Rise</p>
                  <p className="mt-2 text-sm leading-5 text-orange-900">
                    Fuel, materials, wages, or transport become costlier.
                  </p>
                  <div className="mt-3 flex items-center gap-2 text-sm font-bold text-orange-800">
                    <ArrowUp size={17} />
                    Production costs
                  </div>
                </div>

                <div className="rounded-2xl border border-rose-200 bg-rose-50 p-4">
                  <Factory className="mb-3 text-rose-800" size={27} />
                  <p className="font-bold text-rose-950">Business Costs Rise</p>
                  <p className="mt-2 text-sm leading-5 text-rose-900">
                    Making and delivering products costs more.
                  </p>
                  <div className="mt-3 flex items-center gap-2 text-sm font-bold text-rose-800">
                    <ArrowUp size={17} />
                    Cost pressure
                  </div>
                </div>
              </div>

              <div className="my-4 flex justify-center">
                <ArrowDown className="text-gray-500" size={24} />
              </div>

              <div className="rounded-2xl bg-gradient-to-r from-orange-700 to-rose-700 p-5 text-white">
                <div className="flex items-center gap-3">
                  <TrendingUp size={28} />
                  <div>
                    <p className="text-lg font-bold">Upward Price Pressure</p>
                    <p className="mt-1 text-sm leading-5 text-orange-50">
                      Businesses may raise selling prices to recover some of
                      their higher costs.
                    </p>
                  </div>
                </div>
              </div>

              <p className="mt-3 text-xs leading-5 text-gray-500">
                Conceptual illustration. Businesses may also absorb some
                costs, reduce margins, or change production.
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-orange-100 bg-white p-4">
              <Fuel className="mb-3 text-orange-700" size={23} />
              <p className="font-bold text-gray-950">Input Costs</p>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                Energy, materials, and wages can become more expensive.
              </p>
            </div>
            <div className="rounded-2xl border border-rose-100 bg-white p-4">
              <Factory className="mb-3 text-rose-700" size={23} />
              <p className="font-bold text-gray-950">Production</p>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                Higher costs can squeeze business margins.
              </p>
            </div>
            <div className="rounded-2xl border border-amber-100 bg-white p-4">
              <TrendingUp className="mb-3 text-amber-700" size={23} />
              <p className="font-bold text-gray-950">Prices</p>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                Selling prices may rise across affected markets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-orange-800">
              Start Here
            </p>
            <h2 className="mt-2 text-2xl font-bold text-gray-950">
              What Is Cost-Push Inflation?
            </h2>
          </div>
          <div className="space-y-4 text-base leading-8 text-gray-700">
            <p>
              <strong className="text-gray-950">
                Cost-push inflation
              </strong>{" "}
              is inflationary pressure that begins when the cost of producing
              goods or providing services increases. Businesses may respond by
              raising their selling prices.
            </p>
            <p>
              For example, a bakery needs flour, electricity, fuel, packaging,
              and labour. If several of these costs increase, producing bread
              becomes more expensive. The bakery may raise its prices, reduce
              its profit margin, or try to lower other expenses.
            </p>
            <p>
              When higher costs affect many industries and spread through the
              economy, they can contribute to a broader rise in the general
              price level.
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
            title="How Does Cost-Push Inflation Work?"
            description="Follow the path from higher input costs to possible increases in consumer prices."
          />

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-gray-200 bg-white p-6 sm:p-8">
              <Step number="1" title="An Input Becomes More Expensive">
                Fuel, electricity, raw materials, wages, or transport costs
                increase.
              </Step>
              <Step number="2" title="Production Costs Rise">
                Businesses pay more to manufacture, package, store, or deliver
                their goods and services.
              </Step>
              <Step number="3" title="Businesses Adjust">
                Firms may raise selling prices, accept lower profit margins,
                improve efficiency, or reduce output.
              </Step>
              <Step number="4" title="Inflationary Pressure Spreads">
                If price increases affect many goods and services, they can
                contribute to an increase in the overall price level.
              </Step>
            </div>

            <div className="flex flex-col justify-center rounded-3xl border border-orange-200 bg-gradient-to-br from-orange-50 to-white p-6 sm:p-8">
              <div className="mb-5 flex items-center gap-3">
                <div className="rounded-xl bg-orange-100 p-3 text-orange-800">
                  <Lightbulb size={25} />
                </div>
                <h3 className="text-xl font-bold text-gray-950">
                  A Simple Bakery Example
                </h3>
              </div>

              <p className="leading-7 text-gray-700">
                Imagine a bakery spends more on flour, electricity, and
                deliveries. Its cost of making and selling bread increases.
                The bakery may raise the price of a loaf to recover some of the
                additional cost.
              </p>

              <div className="my-6 space-y-3">
                <div className="flex items-center gap-3 rounded-xl border border-orange-200 bg-white p-4">
                  <Wheat className="shrink-0 text-amber-800" size={23} />
                  <div>
                    <p className="font-bold text-gray-950">Flour Costs Rise</p>
                    <p className="text-sm text-gray-600">
                      One of the bakery's main ingredients becomes costlier.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-xl border border-orange-200 bg-white p-4">
                  <Zap className="shrink-0 text-orange-800" size={23} />
                  <div>
                    <p className="font-bold text-gray-950">
                      Electricity Costs Rise
                    </p>
                    <p className="text-sm text-gray-600">
                      Running ovens and equipment costs more.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-xl border border-rose-200 bg-white p-4">
                  <TrendingUp className="shrink-0 text-rose-800" size={23} />
                  <div>
                    <p className="font-bold text-gray-950">
                      Bread Prices May Rise
                    </p>
                    <p className="text-sm text-gray-600">
                      The bakery adjusts its prices or absorbs the higher cost.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-sm leading-6 text-gray-600">
                This is an illustrative example, not a claim about actual
                bakery prices in India.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CAUSES */}
      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <SectionHeading
          number="02"
          eyebrow="Main Causes"
          title="What Causes Cost-Push Inflation?"
          description="Production costs can rise for many reasons. Their effect on the overall price level depends on how widespread and persistent those increases are."
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
        className="scroll-mt-8 border-y border-orange-100 bg-gradient-to-br from-orange-50 via-white to-rose-50"
      >
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
          <SectionHeading
            number="03"
            eyebrow="Everyday Situations"
            title="Examples of Cost-Push Inflation"
            description="These examples show how higher costs can put upward pressure on the prices of products and services."
          />

          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-gray-200 bg-white p-5">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-orange-800">
                <Fuel size={25} />
              </div>
              <h3 className="text-lg font-bold text-gray-950">
                1. Higher Fuel Prices
              </h3>
              <p className="mt-2 text-sm leading-7 text-gray-700">
                If fuel becomes more expensive, transport companies may face
                higher operating costs. Those costs can affect the delivery of
                food, clothing, construction materials, and other products.
              </p>
              <p className="mt-3 rounded-lg bg-orange-50 p-3 text-sm leading-6 text-orange-950">
                <strong>Cost-push link:</strong> Higher energy and transport
                costs can feed into other prices.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-5">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-amber-800">
                <Wheat size={25} />
              </div>
              <h3 className="text-lg font-bold text-gray-950">
                2. Costlier Food Inputs
              </h3>
              <p className="mt-2 text-sm leading-7 text-gray-700">
                A food processor may pay more for ingredients, packaging,
                electricity, or transport. The company may increase the price
                of its finished products if it passes those costs on.
              </p>
              <p className="mt-3 rounded-lg bg-amber-50 p-3 text-sm leading-6 text-amber-950">
                <strong>Cost-push link:</strong> More expensive inputs increase
                the cost of producing food products.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-5">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-800">
                <Truck size={25} />
              </div>
              <h3 className="text-lg font-bold text-gray-950">
                3. Supply Chain Disruptions
              </h3>
              <p className="mt-2 text-sm leading-7 text-gray-700">
                Floods, shipping delays, or shortages can make materials harder
                to obtain and more expensive to transport. Producers may face
                higher costs or need to find alternative suppliers.
              </p>
              <p className="mt-3 rounded-lg bg-blue-50 p-3 text-sm leading-6 text-blue-950">
                <strong>Cost-push link:</strong> Disruptions can raise input
                costs or restrict available supply.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-5">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-violet-100 text-violet-800">
                <Building2 size={25} />
              </div>
              <h3 className="text-lg font-bold text-gray-950">
                4. Higher Construction Costs
              </h3>
              <p className="mt-2 text-sm leading-7 text-gray-700">
                If steel, cement, equipment, and labour become more expensive,
                builders may face higher costs for housing and infrastructure
                projects.
              </p>
              <p className="mt-3 rounded-lg bg-violet-50 p-3 text-sm leading-6 text-violet-950">
                <strong>Cost-push link:</strong> Cost increases can affect
                construction budgets and project prices.
              </p>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-5 sm:p-6">
            <div className="flex items-start gap-3">
              <Lightbulb className="mt-1 shrink-0 text-orange-800" size={24} />
              <div>
                <h3 className="font-bold text-gray-950">
                  A Price Increase Is Not Always Economy-Wide Inflation
                </h3>
                <p className="mt-2 text-sm leading-7 text-gray-700">
                  One business raising its price does not automatically mean
                  the whole economy is experiencing cost-push inflation. The
                  concept is most relevant when rising costs create wider
                  pressure on the general price level.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COST EXAMPLE */}
      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <SectionHeading
          number="04"
          eyebrow="Worked Example"
          title="How Higher Costs Can Affect a Product's Price"
          description="Consider a hypothetical small manufacturer. The example illustrates cost changes; it is not an official price or inflation statistic."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-gray-200 bg-white p-6 sm:p-8">
            <h3 className="text-xl font-bold text-gray-950">
              Cost of Producing 100 Units
            </h3>
            <p className="mt-2 text-sm leading-6 text-gray-600">
              Illustrative costs before and after input prices rise.
            </p>

            <div className="mt-6 space-y-4">
              {[
                { label: "Raw Materials", before: "₹4,000", after: "₹4,600" },
                { label: "Energy", before: "₹1,000", after: "₹1,250" },
                { label: "Transport", before: "₹500", after: "₹650" },
                { label: "Other Costs", before: "₹1,500", after: "₹1,500" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-gray-200 p-4"
                >
                  <p className="font-bold text-gray-950">{item.label}</p>
                  <div className="mt-2 flex items-center justify-between gap-3 text-sm">
                    <span className="text-gray-600">
                      Before: {item.before}
                    </span>
                    <ArrowRight size={16} className="text-gray-400" />
                    <span className="font-bold text-orange-800">
                      After: {item.after}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-2xl bg-orange-50 p-5">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-bold text-orange-900">
                    Total Production Cost
                  </p>
                  <p className="mt-1 text-sm text-gray-700">
                    Before: ₹7,000
                  </p>
                  <p className="text-sm text-gray-700">After: ₹8,000</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-orange-800">+14.3%</p>
                  <p className="text-xs text-orange-900">Total cost increase</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center rounded-3xl border border-orange-200 bg-gradient-to-br from-orange-50 to-white p-6 sm:p-8">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-orange-800">
              <IndianRupee size={26} />
            </div>
            <h3 className="text-xl font-bold text-gray-950">
              What Happens Next?
            </h3>
            <p className="mt-4 leading-7 text-gray-700">
              The manufacturer now spends ₹1,000 more to produce the same 100
              units. It has several options.
            </p>

            <div className="mt-5 space-y-3">
              <div className="rounded-xl border border-gray-200 bg-white p-4">
                <p className="font-bold text-gray-950">
                  Option 1: Raise Selling Prices
                </p>
                <p className="mt-1 text-sm leading-6 text-gray-600">
                  Pass some of the extra cost on to buyers.
                </p>
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-4">
                <p className="font-bold text-gray-950">
                  Option 2: Accept Lower Profit
                </p>
                <p className="mt-1 text-sm leading-6 text-gray-600">
                  Keep prices unchanged and absorb some or all of the increase.
                </p>
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-4">
                <p className="font-bold text-gray-950">
                  Option 3: Improve Efficiency
                </p>
                <p className="mt-1 text-sm leading-6 text-gray-600">
                  Reduce waste, change suppliers, or improve production methods.
                </p>
              </div>
            </div>

            <p className="mt-5 text-sm leading-6 text-gray-600">
              A 14.3% increase in this example's production cost does not imply
              a 14.3% increase in its selling price or the overall inflation
              rate.
            </p>
          </div>
        </div>
      </section>

      {/* EFFECTS */}
      <section className="border-y border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
          <SectionHeading
            number="05"
            eyebrow="Economic Effects"
            title="What Are the Effects of Cost-Push Inflation?"
            description="Higher production costs can affect businesses, households, workers, and economic growth in different ways."
          />

          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-rose-200 bg-white p-6">
              <h3 className="text-lg font-bold text-gray-950">
                Effects on Consumers
              </h3>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-gray-700">
                <li>
                  <strong>Higher living costs:</strong> Some goods and services
                  may become more expensive.
                </li>
                <li>
                  <strong>Lower purchasing power:</strong> If incomes do not
                  keep pace with prices, households can buy less.
                </li>
                <li>
                  <strong>Budget pressure:</strong> Families may need to reduce
                  discretionary spending when essential expenses rise.
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-amber-200 bg-white p-6">
              <h3 className="text-lg font-bold text-gray-950">
                Effects on Businesses
              </h3>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-gray-700">
                <li>
                  <strong>Lower margins:</strong> Businesses may be unable to
                  pass all cost increases to customers.
                </li>
                <li>
                  <strong>Price adjustments:</strong> Firms may increase prices
                  or change product sizes and offerings.
                </li>
                <li>
                  <strong>Reduced output:</strong> Some firms may scale back
                  production if costs become difficult to manage.
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-blue-200 bg-blue-50 p-5 sm:p-6">
            <div className="flex items-start gap-3">
              <Lightbulb className="mt-1 shrink-0 text-blue-800" size={23} />
              <div>
                <h3 className="font-bold text-gray-950">
                  A Difficult Policy Challenge
                </h3>
                <p className="mt-2 text-sm leading-7 text-gray-700">
                  When inflation is driven by supply costs, reducing demand
                  alone may not solve the original shortage. Policymakers must
                  weigh inflation control against the possible effects on
                  output, employment, and investment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
<AdSlot />
      {/* CONTROL */}
      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <SectionHeading
          number="06"
          eyebrow="Possible Responses"
          title="How Can Cost-Push Inflation Be Controlled?"
          description="The most suitable response depends on the cause. Some measures reduce the original cost pressure; others help prevent temporary price increases from becoming persistent."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <InfoCard icon={Factory} title="Improve Productivity" color="blue">
            Better equipment, technology, and production processes can help
            businesses produce more efficiently and reduce unit costs.
          </InfoCard>
          <InfoCard icon={Truck} title="Strengthen Logistics" color="emerald">
            Better transport, warehousing, and distribution can reduce delays,
            waste, and some supply-chain expenses.
          </InfoCard>
          <InfoCard icon={Package} title="Diversify Suppliers" color="violet">
            Multiple reliable sources of important inputs can reduce exposure
            to individual shortages and disruptions.
          </InfoCard>
          <InfoCard icon={Zap} title="Improve Energy Efficiency" color="amber">
            Energy-efficient equipment and processes can reduce how strongly
            businesses are affected by energy-cost increases.
          </InfoCard>
          <InfoCard icon={Wheat} title="Address Supply Bottlenecks" color="rose">
            Depending on the cause, better storage, supply availability, or
            carefully designed temporary measures may ease specific shortages.
          </InfoCard>
          <InfoCard icon={BarChart3} title="Use Monetary Policy Carefully" color="blue">
            Central banks may act to contain persistent inflation expectations,
            while recognising that interest rates cannot directly produce
            missing fuel, food, or raw materials.
          </InfoCard>
        </div>

        <p className="mt-5 text-sm leading-6 text-gray-600">
          No single measure can eliminate every form of cost-push inflation.
          Responses need to match the source of the pressure and account for
          their possible side effects.
        </p>
      </section>

      {/* COMPARISON */}
      <section className="border-y border-blue-100 bg-blue-50/50">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
          <SectionHeading
            number="07"
            eyebrow="Compare the Concepts"
            title="Cost-Push vs Demand-Pull Inflation"
            description="Both can increase the general price level, but they begin with different economic pressures."
          />

          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
            <div className="grid grid-cols-2">
              <div className="bg-orange-700 p-4 text-white sm:p-5">
                <h3 className="font-bold">Cost-Push Inflation</h3>
                <p className="mt-2 text-sm leading-6 text-orange-50">
                  Production costs increase.
                </p>
              </div>
              <div className="bg-blue-700 p-4 text-white sm:p-5">
                <h3 className="font-bold">Demand-Pull Inflation</h3>
                <p className="mt-2 text-sm leading-6 text-blue-50">
                  Aggregate demand grows faster than available supply.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 border-t border-gray-200">
              <div className="border-r border-gray-200 p-4 sm:p-5">
                <p className="font-bold text-gray-950">Main Trigger</p>
                <p className="mt-2 text-sm leading-6 text-gray-700">
                  Higher fuel, labour, raw-material, or transport costs.
                </p>
              </div>
              <div className="p-4 sm:p-5">
                <p className="font-bold text-gray-950">Main Trigger</p>
                <p className="mt-2 text-sm leading-6 text-gray-700">
                  Stronger spending by households, businesses, government, or
                  overseas buyers.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 border-t border-gray-200">
              <div className="border-r border-gray-200 p-4 sm:p-5">
                <p className="font-bold text-gray-950">Example</p>
                <p className="mt-2 text-sm leading-6 text-gray-700">
                  Higher freight and ingredient costs raise a bakery's
                  production expenses.
                </p>
              </div>
              <div className="p-4 sm:p-5">
                <p className="font-bold text-gray-950">Example</p>
                <p className="mt-2 text-sm leading-6 text-gray-700">
                  Many buyers compete for limited available housing, pushing
                  rents upward.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-5">
            <Link
              href="/economics/inflation/demand-pull-inflation"
              className="inline-flex items-center gap-2 font-bold text-blue-800 hover:text-blue-950"
            >
              Read the Demand-Pull Inflation Guide
              <ArrowRight size={17} />
            </Link>
          </div>

          <p className="mt-5 text-sm leading-6 text-gray-600">
            Real-world inflation can involve demand pressures and rising
            production costs at the same time.
          </p>
        </div>
      </section>

      {/* CPI AND WPI CONNECTION */}
      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <SectionHeading
          eyebrow="Related Concepts"
          title="How CPI and WPI Help Track Price Changes"
          description="Price indices help economists monitor price movements, but neither index alone proves the cause of inflation."
        />

        <div className="grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl border border-blue-200 bg-white p-6">
            <h3 className="text-xl font-bold text-gray-950">
              Consumer Price Index (CPI)
            </h3>
            <p className="mt-3 text-sm leading-7 text-gray-700">
              CPI tracks changes in prices for a representative basket of
              consumer goods and services. It helps show how consumer-level
              prices are changing.
            </p>
            <Link
              href="/economics/inflation/consumer-price-index"
              className="mt-4 inline-flex items-center gap-2 font-bold text-blue-700 hover:text-blue-900"
            >
              Read the CPI Guide
              <ArrowRight size={17} />
            </Link>
          </div>

          <div className="rounded-2xl border border-amber-200 bg-white p-6">
            <h3 className="text-xl font-bold text-gray-950">
              Wholesale Price Index (WPI)
            </h3>
            <p className="mt-3 text-sm leading-7 text-gray-700">
              WPI tracks changes in wholesale prices for covered goods. It can
              help analysts study movements in commodity and manufactured
              product prices.
            </p>
            <Link
              href="/economics/inflation/wholesale-price-index-india"
              className="mt-4 inline-flex items-center gap-2 font-bold text-amber-800 hover:text-amber-950"
            >
              Read the WPI Guide
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>

        <div className="mt-5 rounded-2xl border border-gray-200 bg-gray-50 p-5">
          <p className="text-sm leading-7 text-gray-700">
            If production costs rise, wholesale prices for some goods may
            increase. Consumer prices may also rise, but the timing and size of
            changes can differ because of distribution costs, services, taxes,
            demand, contracts, and the composition of each index. CPI or WPI
            data by themselves do not establish that inflation is exclusively
            cost-push.
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
          title="Cost-Push Inflation FAQs"
          description="Quick answers to common questions about rising production costs and inflation."
        />

        <div className="space-y-3">
          <FAQ question="What is cost-push inflation in simple words?">
            Cost-push inflation occurs when rising production costs create
            upward pressure on prices. Businesses may raise their selling
            prices when inputs such as fuel, materials, transport, or labour
            become more expensive.
          </FAQ>

          <FAQ question="What are the main causes of cost-push inflation?">
            Common causes include higher energy prices, more expensive raw
            materials, increased labour or transport costs, imported input
            costs, and supply disruptions.
          </FAQ>

          <FAQ question="What is an example of cost-push inflation?">
            If a bakery pays more for flour, electricity, and transport, its
            cost of producing bread rises. It may increase bread prices, accept
            lower margins, or seek efficiency improvements.
          </FAQ>

          <FAQ question="Can fuel prices cause cost-push inflation?">
            Yes. Fuel can affect transport, manufacturing, agriculture, and
            distribution costs. The wider inflation effect depends on how
            strongly these cost changes pass through to other prices.
          </FAQ>

          <FAQ question="What is the difference between cost-push and demand-pull inflation?">
            Cost-push inflation begins with higher production costs or supply
            disruptions. Demand-pull inflation begins when aggregate demand
            grows faster than available supply. Both pressures can occur
            together.
          </FAQ>

          <FAQ question="Can cost-push inflation occur when demand is weak?">
            Yes. A supply disruption or sharp increase in production costs can
            push prices upward even when consumer demand is not particularly
            strong. Businesses may also absorb costs, so the final effect on
            prices varies.
          </FAQ>

          <FAQ question="How can cost-push inflation be reduced?">
            Depending on the cause, responses may include improving
            productivity, easing supply bottlenecks, strengthening logistics,
            diversifying suppliers, improving energy efficiency, and using
            monetary policy to limit persistent inflation pressures.
          </FAQ>

          <FAQ question="Does cost-push inflation always increase CPI and WPI?">
            No. The indices cover different baskets and price levels. A cost
            increase may affect some wholesale goods, some consumer items, or
            both, and the overall index movements depend on the breadth and
            weight of the affected items.
          </FAQ>
        </div>
      </section>

  
    </main>
  );
}
