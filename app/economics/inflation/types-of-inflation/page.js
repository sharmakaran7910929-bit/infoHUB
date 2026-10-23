
import Link from "next/link";
import {
  ArrowRight,
  TrendingUp,
  ShoppingBasket,
  Fuel,
  Users,
  Wallet,
  ChartNoAxesCombined,
  AlertTriangle,
  CheckCircle2,
  Scale,
  Building2,
  CircleHelp,
  CircleDollarSign,
  Home,
  Store,
  Receipt,
  CarFront,
  Banknote,
} from "lucide-react";
import AdSlot from "../../../../components/AdSlot";

export const metadata = {
  title: "Types of Inflation: Causes, Examples & Differences | PriceTag HUB",
  description:
    "Understand types of inflation with practical rupee-based examples, including demand-pull, cost-push, built-in, creeping, walking, galloping, hyperinflation, and balanced versus unbalanced inflation.",
  alternates: {
    canonical:
      "https://www.pricetag.co.in/economics/inflation/types-of-inflation",
  },
  openGraph: {
    title: "Types of Inflation Explained With Practical Money Examples",
    description:
      "Learn how demand, production costs, rapid inflation and uneven price increases affect household budgets through practical rupee-based examples.",
    url: "https://www.pricetag.co.in/economics/inflation/types-of-inflation",
    type: "article",
  },
};

const causes = [
  {
    icon: ShoppingBasket,
    title: "Demand-Pull Inflation",
    label: "Demand grows faster than supply",
    color: "blue",
    example:
      "Imagine more people want to buy homes, restaurant meals or electronics, but businesses cannot increase supply quickly enough. Sellers may raise prices because more buyers compete for the available products.",
    mechanism:
      "Stronger demand puts upward pressure on prices when supply cannot keep pace.",
  },
  {
    icon: Fuel,
    title: "Cost-Push Inflation",
    label: "Production costs increase",
    color: "orange",
    example:
      "Suppose crude oil becomes more expensive after a supply disruption. Transport companies may pay more for fuel, manufacturers may face higher delivery costs, and some businesses may pass part of those extra costs to customers.",
    mechanism:
      "More expensive fuel, raw materials, wages or transport can increase the cost of supplying goods and services.",
  },
  {
    icon: Users,
    title: "Built-In Inflation",
    label: "Wages and prices reinforce each other",
    color: "violet",
    example:
      "If living costs keep rising, workers may negotiate higher wages. Businesses may then raise prices to cover higher wage bills. If prices rise again, workers may seek further increases.",
    mechanism:
      "Inflation expectations, wage negotiations and business pricing decisions can reinforce one another.",
  },
];

const speedTypes = [
  {
    title: "Creeping Inflation",
    range: "Slow and gradual",
    color: "emerald",
    text:
      "Prices rise relatively slowly. Modest and predictable inflation is generally easier for households and businesses to plan around.",
    example:
      "A monthly grocery basket costing ₹5,000 rises to ₹5,150 over a year. The increase is ₹150, or 3%.",
  },
  {
    title: "Walking Inflation",
    range: "More noticeable",
    color: "blue",
    text:
      "Prices rise at a pace that becomes more noticeable in everyday budgets. The exact numerical boundary for walking inflation varies between textbooks.",
    example:
      "A household's monthly grocery bill rises from ₹5,000 to ₹5,500. That is an increase of ₹500, or 10%.",
  },
  {
    title: "Galloping Inflation",
    range: "Very rapid",
    color: "orange",
    text:
      "Prices increase at a very high rate, making it difficult to plan spending, maintain savings and set long-term prices.",
    example:
      "If a product's price rises from ₹100 to ₹200 over a year, it has doubled. This is a hypothetical 100% annual increase, illustrating the impact of very high inflation.",
  },
  {
    title: "Hyperinflation",
    range: "Extreme inflation",
    color: "rose",
    text:
      "Prices rise extraordinarily quickly and money can lose purchasing power rapidly. A commonly cited academic benchmark is inflation exceeding 50% in one month.",
    example:
      "If a basket costing ₹10,000 rises by 50% in a month, the same basket costs ₹15,000. If the same monthly rate continues, it costs ₹22,500 the following month.",
  },
];

const colorStyles = {
  blue: {
    border: "border-blue-200",
    icon: "bg-blue-100 text-blue-700",
    light: "bg-blue-50",
    heading: "text-blue-800",
  },
  orange: {
    border: "border-orange-200",
    icon: "bg-orange-100 text-orange-700",
    light: "bg-orange-50",
    heading: "text-orange-800",
  },
  violet: {
    border: "border-violet-200",
    icon: "bg-violet-100 text-violet-700",
    light: "bg-violet-50",
    heading: "text-violet-800",
  },
  emerald: {
    border: "border-emerald-200",
    icon: "bg-emerald-100 text-emerald-700",
    light: "bg-emerald-50",
    heading: "text-emerald-800",
  },
  rose: {
    border: "border-rose-200",
    icon: "bg-rose-100 text-rose-700",
    light: "bg-rose-50",
    heading: "text-rose-800",
  },
};

function SectionHeading({ number, eyebrow, title, description }) {
  return (
    <div className="mb-8 max-w-3xl">
      <div className="mb-3 flex items-center gap-3">
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-700 text-sm font-bold text-white">
          {number}
        </span>
        <p className="text-sm font-bold uppercase tracking-wider text-blue-700">
          {eyebrow}
        </p>
      </div>

      <h2 className="text-2xl font-bold leading-tight tracking-tight text-slate-950 sm:text-3xl">
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

function MoneyComparison({ before, after, beforeLabel = "Before", afterLabel = "After" }) {
  return (
    <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3">
      <div className="rounded-xl bg-blue-50 p-3 sm:p-4">
        <p className="text-xs font-bold text-slate-500">{beforeLabel}</p>
        <p className="mt-1 text-xl font-bold text-blue-700 sm:text-2xl">
          {before}
        </p>
      </div>

      <ArrowRight size={20} className="text-slate-400" />

      <div className="rounded-xl bg-orange-50 p-3 sm:p-4">
        <p className="text-xs font-bold text-slate-500">{afterLabel}</p>
        <p className="mt-1 text-xl font-bold text-orange-700 sm:text-2xl">
          {after}
        </p>
      </div>
    </div>
  );
}

function PracticalExample({ number, title, icon: Icon, children, color = "blue" }) {
  const styles = colorStyles[color];

  return (
    <article className={`overflow-hidden rounded-2xl border ${styles.border} bg-white`}>
      <div className={`${styles.light} flex items-center gap-3 border-b ${styles.border} p-4 sm:p-5`}>
        <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${styles.icon}`}>
          <Icon size={23} />
        </div>

        <div>
          <p className={`text-xs font-bold uppercase tracking-wider ${styles.heading}`}>
            Practical Example {number}
          </p>
          <h4 className="mt-1 text-lg font-bold text-slate-950">{title}</h4>
        </div>
      </div>

      <div className="space-y-4 p-4 sm:p-5">{children}</div>
    </article>
  );
}

function Calculation({ label, children }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
      <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
        {label}
      </p>
      <p className="mt-1 text-sm font-bold leading-6 text-slate-800">
        {children}
      </p>
    </div>
  );
}

export default function TypesOfInflationPage() {
  return (
    <main className="min-h-screen bg-white text-slate-800">
      {/* HERO */}
      <section className="border-b border-blue-100 bg-gradient-to-br from-blue-50 via-white to-sky-100">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-bold text-blue-800">
                <ChartNoAxesCombined size={16} />
                Inflation Explained
              </div>

              <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Types Of Inflation
                <span className="mt-2 block text-blue-700">
                  Why Do Prices Rise?
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                Why can a house become more expensive when more people want it?
                Why can an oil-price shock increase delivery costs? And what
                happens to a family's budget when prices double or rise every
                month?
              </p>

              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-700">
                Explore inflation by its cause, speed and price pattern, with
                practical rupee-based examples that show the difference
                between a small increase and a severe loss of purchasing power.
              </p>

              <a
                href="#main-types"
                className="mt-7 inline-flex items-center gap-2 rounded-xl bg-blue-700 px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-700/20 transition hover:bg-blue-800"
              >
                Explore The Types
                <ArrowRight size={17} />
              </a>
            </div>

            <div className="rounded-3xl border border-blue-100 bg-white p-6 shadow-xl shadow-blue-900/5 sm:p-7">
              <h2 className="text-lg font-bold text-slate-950">
                Three Ways Inflation Can Begin
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Follow the chain to understand how price pressure develops.
              </p>

              <div className="mt-6 space-y-3">
                {[
                  {
                    icon: ShoppingBasket,
                    title: "Demand Increases",
                    text: "More buyers compete for limited goods.",
                    color: "bg-blue-100 text-blue-700",
                  },
                  {
                    icon: Fuel,
                    title: "Business Costs Increase",
                    text: "Fuel, materials or transport become costlier.",
                    color: "bg-orange-100 text-orange-700",
                  },
                  {
                    icon: Users,
                    title: "Wages And Prices Interact",
                    text: "Expectations can keep price pressure going.",
                    color: "bg-violet-100 text-violet-700",
                  },
                ].map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div key={item.title}>
                      <div className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-slate-50 p-4">
                        <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${item.color}`}>
                          <Icon size={22} />
                        </div>

                        <div>
                          <h3 className="font-bold text-slate-950">{item.title}</h3>
                          <p className="mt-1 text-sm leading-6 text-slate-600">
                            {item.text}
                          </p>
                        </div>
                      </div>

                      {index < 2 && (
                        <div className="flex justify-center py-1">
                          <ArrowRight size={17} className="rotate-90 text-slate-400" />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLASSIFICATIONS */}
      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <SectionHeading
          number="01"
          eyebrow="Start With The Basics"
          title="Inflation Can Be Classified In Three Ways"
          description="The same price increase can be examined from different angles. Economists can ask what caused it, how quickly prices are rising, and whether the increases are spread across many products or concentrated in a few."
        />

        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-blue-200 bg-blue-50 p-5">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
              <CircleDollarSign size={23} />
            </div>
            <h3 className="mt-4 font-bold text-slate-950">By Cause</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              What starts the price pressure? Demand-pull, cost-push or
              built-in inflation.
            </p>
          </div>

          <div className="rounded-2xl border border-violet-200 bg-violet-50 p-5">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-100 text-violet-700">
              <TrendingUp size={23} />
            </div>
            <h3 className="mt-4 font-bold text-slate-950">By Speed</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              How quickly do prices rise? Creeping, walking, galloping or
              hyperinflation.
            </p>
          </div>

          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
              <Scale size={23} />
            </div>
            <h3 className="mt-4 font-bold text-slate-950">By Price Pattern</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Are prices rising at similar rates across categories, or are
              some products becoming much more expensive than others?
            </p>
          </div>
        </div>

        <div className="mt-5 rounded-xl border border-blue-100 bg-white p-4">
          <p className="text-sm leading-7 text-slate-600">
            <strong className="text-slate-950">Important:</strong> These are
            different ways to describe inflation, not mutually exclusive
            categories. For example, a fuel-supply shock can cause cost-push
            pressure, and its effect may be concentrated in some categories
            before spreading to other prices.
          </p>
        </div>
      </section>
<AdSlot />
      {/* TYPES BY CAUSE */}
      <section
        id="main-types"
        className="border-y border-blue-100 bg-gradient-to-br from-sky-50 via-white to-blue-50"
      >
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16">
          <SectionHeading
            number="02"
            eyebrow="Types By Cause"
            title="Three Important Causes Of Inflation"
            description="First identify what changed: demand, the cost of supplying goods and services, or the interaction between wages and prices."
          />

          <div className="space-y-5">
            {causes.map((item, index) => {
              const Icon = item.icon;
              const styles = colorStyles[item.color];

              return (
                <article
                  key={item.title}
                  className={`overflow-hidden rounded-2xl border ${styles.border} bg-white`}
                >
                  <div className="grid md:grid-cols-[0.8fr_1.2fr]">
                    <div className={`${styles.light} p-5 sm:p-6`}>
                      <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${styles.icon}`}>
                        <Icon size={25} />
                      </div>

                      <p className={`mt-5 text-xs font-bold uppercase tracking-wider ${styles.heading}`}>
                        TYPE {index + 1}
                      </p>

                      <h3 className="mt-2 text-xl font-bold text-slate-950 sm:text-2xl">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-sm font-bold text-slate-600">
                        {item.label}
                      </p>

                      <p className="mt-4 text-sm leading-7 text-slate-700">
                        {item.mechanism}
                      </p>
                    </div>

                    <div className="p-5 sm:p-6">
                      <h4 className="flex items-center gap-2 font-bold text-slate-950">
                        <CheckCircle2 size={19} className="text-emerald-600" />
                        Practical Example
                      </h4>

                      <p className="mt-3 text-sm leading-7 text-slate-600">
                        {item.example}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* DEMAND-PULL MONEY EXAMPLES */}
          <div className="mt-12">
            <SectionHeading
              number="A"
              eyebrow="Demand-Pull In Practice"
              title="Three Examples Using Actual Money Figures"
              description="The following are hypothetical examples. They show the arithmetic of a price increase, not measured inflation in India."
            />

            <div className="grid gap-5 lg:grid-cols-3">
              <PracticalExample
                number="1"
                title="Higher Demand For Rental Homes"
                icon={Home}
                color="blue"
              >
                <p className="text-sm leading-7 text-slate-600">
                  More workers move to a city, but the number of available
                  rental homes cannot increase quickly enough. Landlords may
                  receive more applications and raise rents.
                </p>

                <MoneyComparison before="₹15,000" after="₹18,000" beforeLabel="Old monthly rent" afterLabel="New monthly rent" />

                <Calculation label="Monthly increase">
                  ₹18,000 − ₹15,000 = ₹3,000
                </Calculation>

                <Calculation label="Percentage increase">
                  ₹3,000 ÷ ₹15,000 × 100 = 20%
                </Calculation>

                <p className="text-sm leading-6 text-slate-600">
                  At the new rate, the renter pays ₹36,000 more over 12 months
                  than at the old rate, if both rates remain unchanged.
                </p>
              </PracticalExample>

              <PracticalExample
                number="2"
                title="Festival Demand For A Television"
                icon={Store}
                color="violet"
              >
                <p className="text-sm leading-7 text-slate-600">
                  Imagine festival demand rises while a retailer has limited
                  stock. The retailer reduces discounts or raises the selling
                  price.
                </p>

                <MoneyComparison before="₹30,000" after="₹33,000" beforeLabel="Earlier price" afterLabel="New price" />

                <Calculation label="Extra cost per television">
                  ₹33,000 − ₹30,000 = ₹3,000
                </Calculation>

                <Calculation label="Percentage increase">
                  ₹3,000 ÷ ₹30,000 × 100 = 10%
                </Calculation>

                <p className="text-sm leading-6 text-slate-600">
                  A customer buying two televisions at the new price pays
                  ₹6,000 more than they would have at the earlier price.
                </p>
              </PracticalExample>

              <PracticalExample
                number="3"
                title="More Customers At Restaurants"
                icon={Receipt}
                color="emerald"
              >
                <p className="text-sm leading-7 text-slate-600">
                  Suppose restaurant demand rises sharply while available
                  seating and kitchen capacity remain limited.
                </p>

                <MoneyComparison before="₹200" after="₹230" beforeLabel="Old meal price" afterLabel="New meal price" />

                <Calculation label="Increase per meal">
                  ₹230 − ₹200 = ₹30, or 15%
                </Calculation>

                <Calculation label="Twenty meals per month">
                  Old total: ₹4,000. New total: ₹4,600. Extra spending: ₹600.
                </Calculation>

                <p className="text-sm leading-6 text-slate-600">
                  This illustrates how a price change can increase household
                  expenses. A rise in restaurant prices alone does not prove
                  economy-wide inflation.
                </p>
              </PracticalExample>
            </div>
          </div>

          {/* COST-PUSH CHAIN */}
          <div className="mt-8 rounded-2xl border border-orange-200 bg-orange-50 p-5 sm:p-6">
            <div className="flex items-start gap-3">
              <Fuel size={23} className="mt-1 shrink-0 text-orange-700" />
              <div>
                <h3 className="text-lg font-bold text-slate-950">
                  How An Oil-Supply Shock Can Affect Household Prices
                </h3>

                <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
                  {[
                    ["1. Oil supply", "A disruption puts upward pressure on crude prices."],
                    ["2. Fuel and freight", "Transport and delivery become more expensive."],
                    ["3. Business costs", "Some manufacturers and retailers face higher costs."],
                    ["4. Household budget", "Some final prices may rise if costs are passed on."],
                  ].map(([title, text], index) => (
                    <div key={title} className="rounded-xl border border-orange-200 bg-white p-3">
                      <p className="font-bold text-slate-950">{title}</p>
                      <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
                      {index < 3 && (
                        <ArrowRight size={16} className="mt-2 hidden text-orange-600 lg:block" />
                      )}
                    </div>
                  ))}
                </div>

                <p className="mt-4 text-sm leading-7 text-slate-700">
                  This is a possible cost-push pathway, not a guarantee that
                  every price will rise. The outcome depends on the size and
                  duration of the disruption, taxes, exchange rates, business
                  margins and how much of the additional cost reaches consumers.
                </p>

                <Link
                  href="/economics/inflation/what-is-inflation"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-orange-800 hover:text-orange-950"
                >
                  Read What Is Inflation?
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
<AdSlot />
      {/* TYPES BY SPEED */}
      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16">
        <SectionHeading
          number="03"
          eyebrow="Types By Speed"
          title="How Fast Are Prices Rising?"
          description="The traditional textbook labels describe different paces of inflation. Numerical boundaries for creeping, walking and galloping inflation are not universally standardised."
        />

        <div className="grid gap-4 sm:grid-cols-2">
          {speedTypes.map((item) => {
            const styles = colorStyles[item.color];

            return (
              <article
                key={item.title}
                className={`rounded-2xl border ${styles.border} bg-white p-5 sm:p-6`}
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <h3 className="text-xl font-bold text-slate-950">
                    {item.title}
                  </h3>

                  <span className={`rounded-full px-3 py-1 text-xs font-bold ${styles.light} ${styles.heading}`}>
                    {item.range}
                  </span>
                </div>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {item.text}
                </p>

                <div className={`mt-4 rounded-xl ${styles.light} p-4`}>
                  <p className="text-xs font-bold uppercase tracking-wide text-slate-600">
                    Example
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-700">
                    {item.example}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        {/* GALLOPING INFLATION */}
        <div className="mt-12">
          <SectionHeading
            number="B"
            eyebrow="Galloping Inflation In Practice"
            title="Three Examples Of Very Rapid Price Increases"
            description="These hypothetical calculations use a 100% annual price increase to show what happens when prices double. This is an illustration, not a universal definition of galloping inflation."
          />

          <div className="grid gap-5 lg:grid-cols-3">
            <PracticalExample
              number="1"
              title="A Household's Grocery Bill"
              icon={ShoppingBasket}
              color="orange"
            >
              <MoneyComparison before="₹8,000" after="₹16,000" beforeLabel="Original monthly bill" afterLabel="After prices double" />

              <Calculation label="Additional monthly spending">
                ₹16,000 − ₹8,000 = ₹8,000
              </Calculation>

              <Calculation label="Extra cost over 12 months at the new rate">
                ₹8,000 × 12 = ₹96,000 more than the original monthly cost.
              </Calculation>

              <p className="text-sm leading-6 text-slate-600">
                If income remains unchanged, the family has less money for
                savings, education, rent or emergencies.
              </p>
            </PracticalExample>

            <PracticalExample
              number="2"
              title="A Family's Essential Budget"
              icon={Wallet}
              color="rose"
            >
              <p className="text-sm leading-7 text-slate-600">
                A family earns ₹40,000 per month and initially spends ₹30,000
                on essential goods and services.
              </p>

              <MoneyComparison before="₹30,000" after="₹60,000" beforeLabel="Original essentials" afterLabel="After doubling" />

              <Calculation label="Salary available">
                ₹40,000 per month
              </Calculation>

              <Calculation label="Monthly shortfall">
                ₹60,000 − ₹40,000 = ₹20,000
              </Calculation>

              <p className="text-sm leading-6 text-slate-600">
                The family cannot afford the same basket from its salary alone.
                It may have to cut purchases, use savings or borrow.
              </p>
            </PracticalExample>

            <PracticalExample
              number="3"
              title="Saving For A Motorcycle"
              icon={CarFront}
              color="blue"
            >
              <MoneyComparison before="₹1,00,000" after="₹2,00,000" beforeLabel="Original price" afterLabel="Price after doubling" />

              <Calculation label="Months needed at ₹10,000 saved monthly">
                Original target: 10 months. New target: 20 months.
              </Calculation>

              <Calculation label="Additional savings required">
                ₹2,00,000 − ₹1,00,000 = ₹1,00,000
              </Calculation>

              <p className="text-sm leading-6 text-slate-600">
                A person saving at the same pace needs twice as much money
                to buy the motorcycle, assuming its price doubles and ignoring
                interest or changes in income.
              </p>
            </PracticalExample>
          </div>
        </div>

        {/* HYPERINFLATION */}
        <div className="mt-12">
          <SectionHeading
            number="C"
            eyebrow="Hyperinflation In Practice"
            title="Three Examples Of Money Losing Purchasing Power"
            description="The following examples assume 50% inflation per month, the commonly cited benchmark for hyperinflation. They are illustrative calculations, not historical observations."
          />

          <div className="grid gap-5 lg:grid-cols-3">
            <PracticalExample
              number="1"
              title="The Price Of Bread"
              icon={ShoppingBasket}
              color="rose"
            >
              <div className="space-y-3">
                {[
                  ["Starting price", "₹50"],
                  ["After one month", "₹75"],
                  ["After two months", "₹112.50"],
                  ["After three months", "₹168.75"],
                ].map(([label, value], index) => (
                  <div key={label} className={`flex items-center justify-between gap-3 rounded-lg p-3 ${index === 3 ? "bg-rose-50" : "bg-slate-50"}`}>
                    <span className="text-sm text-slate-600">{label}</span>
                    <span className={`font-bold ${index === 3 ? "text-rose-700" : "text-slate-950"}`}>{value}</span>
                  </div>
                ))}
              </div>

              <Calculation label="After three months">
                ₹50 × 1.5 × 1.5 × 1.5 = ₹168.75
              </Calculation>

              <p className="text-sm leading-6 text-slate-600">
                Prices compound. Three consecutive monthly increases of 50%
                produce a total increase of 237.5%, not 150%.
              </p>
            </PracticalExample>

            <PracticalExample
              number="2"
              title="What Happens To ₹10,000 Cash?"
              icon={Banknote}
              color="orange"
            >
              <MoneyComparison before="₹10,000" after="₹15,000" beforeLabel="Cash available" afterLabel="Basket cost after one month" />

              <p className="text-sm leading-7 text-slate-600">
                Suppose a fixed basket costs ₹10,000 today. After a 50% price
                increase, the same basket costs ₹15,000.
              </p>

              <Calculation label="Share of the basket affordable">
                ₹10,000 ÷ ₹15,000 × 100 = 66.7%
              </Calculation>

              <Calculation label="Loss of purchasing power">
                100% − 66.7% = approximately 33.3%
              </Calculation>

              <p className="text-sm leading-6 text-slate-600">
                The cash balance is still ₹10,000, but it buys less of the
                same goods. This calculation assumes the entire basket rises
                by 50%.
              </p>
            </PracticalExample>

            <PracticalExample
              number="3"
              title="A Salary That Cannot Keep Up"
              icon={Wallet}
              color="violet"
            >
              <MoneyComparison before="₹30,000" after="₹45,000" beforeLabel="Monthly salary" afterLabel="Cost of the same basket" />

              <Calculation label="Monthly budget gap">
                ₹45,000 − ₹30,000 = ₹15,000
              </Calculation>

              <p className="text-sm leading-7 text-slate-600">
                An employee earning ₹30,000 cannot buy the same basket if it
                costs ₹45,000 and income has not changed.
              </p>

              <p className="text-sm leading-7 text-slate-600">
                When prices change rapidly, workers may seek frequent pay
                increases, businesses may revise prices often, and people may
                become reluctant to hold cash for long periods.
              </p>
            </PracticalExample>
          </div>
        </div>

        <div className="mt-8 rounded-2xl border border-rose-200 bg-rose-50 p-5 sm:p-6">
          <div className="flex items-start gap-3">
            <AlertTriangle size={23} className="mt-1 shrink-0 text-rose-700" />
            <div>
              <h3 className="text-lg font-bold text-slate-950">
                Why Hyperinflation Is Different
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-700">
                Hyperinflation is much more severe than an ordinary increase
                in petrol or grocery prices. It involves extraordinarily rapid
                price increases and a severe loss of confidence in money.
                The commonly cited threshold of more than 50% per month is
                very different from a 50% annual increase.
              </p>
            </div>
          </div>
        </div>
      </section>
<AdSlot />
      {/* TYPES BY PRICE PATTERN */}
      <section className="border-y border-emerald-100 bg-gradient-to-br from-emerald-50 via-white to-blue-50">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16">
          <SectionHeading
            number="04"
            eyebrow="Types By Price Pattern"
            title="Balanced Vs Unbalanced Inflation"
            description="Inflation does not affect every product equally. Some prices may rise at similar rates, while other times food, fuel or housing prices rise much faster than the rest."
          />

          <div className="grid gap-5 lg:grid-cols-2">
            <article className="overflow-hidden rounded-2xl border border-blue-200 bg-white">
              <div className="border-b border-blue-200 bg-blue-50 p-5 sm:p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                  <Scale size={25} />
                </div>

                <h3 className="mt-4 text-xl font-bold text-slate-950">
                  Balanced Inflation
                </h3>

                <p className="mt-2 text-sm leading-7 text-slate-600">
                  Different categories rise at roughly similar rates. This
                  is a simplified example; real-world prices rarely move
                  perfectly together.
                </p>
              </div>

              <div className="space-y-4 p-5 sm:p-6">
                <p className="text-sm font-bold text-slate-950">
                  Example: Each category rises by 10%
                </p>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm">
                    <thead>
                      <tr className="border-b border-slate-200 text-slate-500">
                        <th className="py-3 pr-2 font-bold">Item</th>
                        <th className="py-3 px-2 font-bold">Before</th>
                        <th className="py-3 pl-2 font-bold">After</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["Groceries", "₹5,000", "₹5,500"],
                        ["Transport", "₹1,000", "₹1,100"],
                        ["Clothing", "₹2,000", "₹2,200"],
                      ].map(([item, before, after]) => (
                        <tr key={item} className="border-b border-slate-100">
                          <td className="py-3 pr-2 font-bold text-slate-700">{item}</td>
                          <td className="px-2 py-3 text-slate-600">{before}</td>
                          <td className="py-3 pl-2 font-bold text-blue-700">{after}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="rounded-xl bg-blue-50 p-4">
                  <p className="text-sm font-bold text-slate-950">
                    Total monthly spending
                  </p>
                  <div className="mt-2 flex flex-wrap items-center gap-2">
                    <span className="text-lg font-bold text-slate-600">₹8,000</span>
                    <ArrowRight size={17} className="text-blue-600" />
                    <span className="text-lg font-bold text-blue-700">₹8,800</span>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Increase: ₹800, or 10% of the original total.
                  </p>
                </div>
              </div>
            </article>

            <article className="overflow-hidden rounded-2xl border border-orange-200 bg-white">
              <div className="border-b border-orange-200 bg-orange-50 p-5 sm:p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-orange-700">
                  <TrendingUp size={25} />
                </div>

                <h3 className="mt-4 text-xl font-bold text-slate-950">
                  Unbalanced Inflation
                </h3>

                <p className="mt-2 text-sm leading-7 text-slate-600">
                  Prices rise at different rates. Essentials may become much
                  more expensive even when some other products barely change.
                </p>
              </div>

              <div className="space-y-4 p-5 sm:p-6">
                <p className="text-sm font-bold text-slate-950">
                  Example: Food and transport rise faster
                </p>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm">
                    <thead>
                      <tr className="border-b border-slate-200 text-slate-500">
                        <th className="py-3 pr-2 font-bold">Item</th>
                        <th className="py-3 px-2 font-bold">Before</th>
                        <th className="py-3 pl-2 font-bold">After</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["Groceries (+20%)", "₹5,000", "₹6,000"],
                        ["Transport (+30%)", "₹2,000", "₹2,600"],
                        ["Clothing (+2%)", "₹2,000", "₹2,040"],
                      ].map(([item, before, after]) => (
                        <tr key={item} className="border-b border-slate-100">
                          <td className="py-3 pr-2 font-bold text-slate-700">{item}</td>
                          <td className="px-2 py-3 text-slate-600">{before}</td>
                          <td className="py-3 pl-2 font-bold text-orange-700">{after}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="rounded-xl bg-orange-50 p-4">
                  <p className="text-sm font-bold text-slate-950">
                    Total monthly spending
                  </p>
                  <div className="mt-2 flex flex-wrap items-center gap-2">
                    <span className="text-lg font-bold text-slate-600">₹9,000</span>
                    <ArrowRight size={17} className="text-orange-600" />
                    <span className="text-lg font-bold text-orange-700">₹10,640</span>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Increase: ₹1,640, or approximately 18.2% of the original
                    total. The overall increase depends on how much the
                    household spends in each category.
                  </p>
                </div>
              </div>
            </article>
          </div>

          <div className="mt-6 rounded-2xl border border-emerald-200 bg-white p-5 sm:p-6">
            <h3 className="text-lg font-bold text-slate-950">
              Why Does The Price Pattern Matter?
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              Imagine two households facing the same overall inflation rate.
              One spends a large share of its income on food and transport;
              the other spends more on products whose prices have barely
              changed. Their personal experience of inflation can be very
              different. The published inflation rate measures a defined
              basket, while each household has its own spending pattern.
            </p>

            <Link
              href="/economics/inflation/consumer-price-index"
              className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-emerald-800 hover:text-emerald-950"
            >
              Learn How Consumer Prices Are Measured
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="border-b border-blue-100 bg-gradient-to-br from-blue-50 via-white to-sky-50">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16">
          <SectionHeading
            number="05"
            eyebrow="Quick Comparison"
            title="Demand-Pull Vs Cost-Push Inflation"
            description="These two concepts are especially useful when analysing why a product becomes more expensive."
          />

          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <div className="grid grid-cols-2 bg-slate-100">
              <div className="p-4 sm:p-5">
                <h3 className="font-bold text-blue-800">Demand-Pull</h3>
              </div>
              <div className="border-l border-slate-200 p-4 sm:p-5">
                <h3 className="font-bold text-orange-800">Cost-Push</h3>
              </div>
            </div>

            {[
              [
                "Demand rises relative to available supply.",
                "Production or delivery costs rise.",
              ],
              [
                "Buyers compete for available products.",
                "Businesses face more expensive inputs.",
              ],
              [
                "Example: rents rise when more people seek homes.",
                "Example: higher fuel costs increase delivery expenses.",
              ],
              [
                "The pressure starts on the demand side.",
                "The pressure starts on the cost side.",
              ],
            ].map((row, index) => (
              <div key={index} className="grid grid-cols-2 border-t border-slate-200">
                <div className="p-4 text-sm leading-6 text-slate-700 sm:p-5">
                  {row[0]}
                </div>
                <div className="border-l border-slate-200 p-4 text-sm leading-6 text-slate-700 sm:p-5">
                  {row[1]}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOUSEHOLD IMPACT */}
      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16">
        <SectionHeading
          number="06"
          eyebrow="Why It Matters"
          title="How Inflation Affects Families And Businesses"
          description="The cause and pattern matter, but households ultimately feel inflation through the prices they pay and the purchasing power of their income."
        />

        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-blue-200 bg-white p-5">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
              <ShoppingBasket size={24} />
            </div>
            <h3 className="mt-4 font-bold text-slate-950">Everyday Essentials</h3>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              When food, transport and other essentials become more expensive,
              a family may have to spend more to maintain the same lifestyle.
            </p>
          </div>

          <div className="rounded-2xl border border-violet-200 bg-white p-5">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-100 text-violet-700">
              <Wallet size={24} />
            </div>
            <h3 className="mt-4 font-bold text-slate-950">Savings And Income</h3>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              If income does not keep pace with prices, the amount available
              for savings, education or emergencies can shrink.
            </p>
          </div>

          <div className="rounded-2xl border border-orange-200 bg-white p-5">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-orange-700">
              <Building2 size={24} />
            </div>
            <h3 className="mt-4 font-bold text-slate-950">Businesses And Jobs</h3>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              Rapid or unpredictable cost increases can make budgeting,
              investment and hiring more difficult for businesses.
            </p>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-blue-200 bg-gradient-to-r from-blue-50 to-white p-5 sm:p-6">
          <h3 className="text-lg font-bold text-slate-950">
            One Product's Price Is Not The Whole Inflation Story
          </h3>

          <p className="mt-3 text-sm leading-7 text-slate-600">
            One product becoming more expensive is not enough to establish
            overall inflation. Economists use price indices, such as India's
            Consumer Price Index (CPI), to track changes across a representative
            basket of goods and services.
          </p>

          <Link
            href="/economics/inflation/consumer-price-index"
            className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-blue-700 hover:text-blue-900"
          >
            Understand The Consumer Price Index
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
<AdSlot />
      {/* SUMMARY */}
      <section className="border-t border-blue-100 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16">
          <SectionHeading
            number="07"
            eyebrow="Key Takeaways"
            title="Which Type Of Inflation Are You Looking At?"
            description="Identify what changed first, how quickly prices rose, and whether the increase affected many categories or only a few."
          />

          <div className="space-y-3">
            {[
              [
                "Demand-pull",
                "Spending grows faster than available supply.",
              ],
              [
                "Cost-push",
                "Inputs such as fuel, materials or transport become more expensive.",
              ],
              [
                "Built-in",
                "Wage and price expectations can reinforce one another.",
              ],
              [
                "Creeping and walking",
                "Describe relatively gradual or more noticeable price increases; exact boundaries vary.",
              ],
              [
                "Galloping",
                "Describes very rapid price increases; the label's numerical boundaries are not universal.",
              ],
              [
                "Hyperinflation",
                "An extreme pace of price increases commonly associated with more than 50% inflation per month.",
              ],
              [
                "Balanced price pattern",
                "Different categories increase at roughly similar rates.",
              ],
              [
                "Unbalanced price pattern",
                "Some categories rise much faster than others.",
              ],
            ].map(([title, text]) => (
              <div key={title} className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4">
                <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-emerald-600" />
                <p className="text-sm leading-6 text-slate-700">
                  <strong className="text-slate-950">{title}:</strong> {text}
                </p>
              </div>
            ))}
          </div>

          
        </div>
      </section>
    </main>
  );
}
