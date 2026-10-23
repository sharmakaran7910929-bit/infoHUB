
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  AlertTriangle,
  BarChart3,
  BookOpen,
  Boxes,
  CheckCircle2,
  CircleDollarSign,
  Fuel,
  House,
  Package,
  Ship,
  ShoppingBasket,
  TrendingDown,
  TrendingUp,
  Truck,
  Wallet,
  Wheat,
  Factory,
} from "lucide-react";
import AdSlot from "../../../../components/AdSlot";

export const metadata = {
  title:
    "What Is Inflation? How The Hormuz Conflict Can Raise Prices | PriceTag HUB",
  description:
    "Understand inflation through the Strait of Hormuz oil disruption. Explore official 2026 Brent crude prices and how fuel, freight and everyday expenses can affect middle-class households in India.",
  alternates: {
    canonical:
      "https://www.pricetag.co.in/economics/inflation/what-is-inflation",
  },
  openGraph: {
    title: "What Is Inflation? How The Hormuz Conflict Can Raise Prices",
    description:
      "Follow the connection between oil supply disruptions, transportation costs, product prices and the Indian household budget.",
    url: "https://www.pricetag.co.in/economics/inflation/what-is-inflation",
    type: "article",
  },
};

const oilPrices = [
  { month: "April", price: 117.29 },
  { month: "May", price: 107.14 },
  { month: "June", price: 85.4 },
  { month: "July", price: 83.76 },
  { month: "August", price: 91.08 },
  { month: "September", price: 114.16 },
];

const beforeFactors = [
  {
    icon: ShoppingBasket,
    title: "Demand And Supply",
    text: "When demand grows faster than the available supply of goods, sellers may raise prices. When supply improves or demand weakens, price pressure can ease.",
    color: "blue",
  },
  {
    icon: Fuel,
    title: "Fuel And Energy Costs",
    text: "Oil, gas and electricity are inputs for transportation, agriculture and industry. Changes in these costs can affect the cost of producing and delivering goods.",
    color: "amber",
  },
  {
    icon: Wheat,
    title: "Food And Weather",
    text: "Poor harvests, disrupted supply chains, seasonal demand or higher agricultural input costs can push food prices upward even without an oil shock.",
    color: "emerald",
  },
  {
    icon: CircleDollarSign,
    title: "Currency And Global Markets",
    text: "A weaker rupee can make imported crude and other goods more expensive in rupee terms, even if their dollar prices remain unchanged.",
    color: "violet",
  },
];

const impactCards = [
  {
    icon: Fuel,
    title: "1. Fuel And Energy",
    color: "amber",
    explanation:
      "If imported crude becomes more expensive, refiners may face higher input costs. The eventual effect on Indian petrol, diesel and other fuel prices depends on domestic pricing decisions, taxes, refining costs and government policy.",
    household: "A family may spend more on commuting or running a vehicle if the fuel cost it pays rises.",
  },
  {
    icon: Truck,
    title: "2. Transportation And Freight",
    color: "blue",
    explanation:
      "Trucks move vegetables, groceries, construction materials, clothing and appliances. Buses, ships and aircraft also consume fuel. If operators face higher costs, freight or passenger charges may eventually increase.",
    household: "A shop may pay more to receive stock, while a family may face higher travel or delivery charges.",
  },
  {
    icon: Wheat,
    title: "3. Food And Groceries",
    color: "emerald",
    explanation:
      "Food moves from farms to collection centres, storage facilities, wholesale markets and shops. Higher transport, refrigeration, fertiliser or packaging costs can add pressure, although harvests and local supply also matter.",
    household: "The cost of delivering vegetables or packaged food may rise, but the final retail price does not have to increase by the same amount.",
  },
  {
    icon: Package,
    title: "4. Packaging And Household Goods",
    color: "violet",
    explanation:
      "Crude oil is a feedstock for many petrochemicals used in plastics and synthetic materials. Higher input or freight costs may affect selected packaging, containers, synthetic textiles and manufactured products.",
    household: "Some packaged household products could become more expensive if manufacturers pass on higher production costs.",
  },
  {
    icon: Factory,
    title: "5. Manufacturing And Construction",
    color: "rose",
    explanation:
      "Factories pay for energy, materials and transport. Construction and infrastructure projects also depend on the costs of moving cement, steel, equipment and other heavy materials.",
    household: "If several input costs rise, a business may increase prices, reduce its margins or delay spending.",
  },
  {
    icon: House,
    title: "6. Household Services",
    color: "orange",
    explanation:
      "Businesses such as delivery services, repair providers and other local operators may face higher travel or operating expenses. Whether they increase their charges depends on their costs and competition.",
    household: "A household may pay more for selected services even if its own direct fuel use has not changed.",
  },
];

const colorStyles = {
  blue: {
    icon: "bg-blue-100 text-blue-700",
    border: "border-blue-200",
    light: "bg-blue-50",
  },
  amber: {
    icon: "bg-amber-100 text-amber-700",
    border: "border-amber-200",
    light: "bg-amber-50",
  },
  emerald: {
    icon: "bg-emerald-100 text-emerald-700",
    border: "border-emerald-200",
    light: "bg-emerald-50",
  },
  violet: {
    icon: "bg-violet-100 text-violet-700",
    border: "border-violet-200",
    light: "bg-violet-50",
  },
  rose: {
    icon: "bg-rose-100 text-rose-700",
    border: "border-rose-200",
    light: "bg-rose-50",
  },
  orange: {
    icon: "bg-orange-100 text-orange-700",
    border: "border-orange-200",
    light: "bg-orange-50",
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

function FlowStep({ icon: Icon, number, title, description, color }) {
  return (
    <div className="relative rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between gap-3">
        <span className="text-xs font-bold tracking-wider text-slate-400">
          STEP {number}
        </span>
        <div
          className={`flex h-10 w-10 items-center justify-center rounded-xl ${color}`}
        >
          <Icon size={21} />
        </div>
      </div>
      <h3 className="mt-4 text-lg font-bold text-slate-950">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
    </div>
  );
}

function SourceLink({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-2 text-sm font-bold text-blue-700 hover:text-blue-900"
    >
      {children}
      <ArrowRight size={16} />
    </a>
  );
}

export default function WhatIsInflationPage() {
  const maxPrice = Math.max(...oilPrices.map((item) => item.price));

  return (
    <main className="min-h-screen bg-white text-slate-800">
      {/* HERO: Start with the story */}
      <section className="border-b border-blue-100 bg-gradient-to-br from-blue-50 via-white to-sky-100">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-bold text-blue-800">
                <BookOpen size={16} />
                Economics Explained With A Real-World Example
              </div>

              <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                What Is Inflation?
                <span className="mt-2 block text-blue-700">
                  How A War Can Raise Everyday Prices
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                Imagine a conflict disrupts oil shipments near the Strait of
                Hormuz. Crude oil becomes more expensive. Transport operators
                face higher costs. Shops may pay more to receive their goods.
                Eventually, your family could pay more for some everyday needs.
              </p>

              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-700">
                This is one way inflationary pressure can spread through an
                economy. Let us follow the same example from the oil market
                right through to the middle-class household budget.
              </p>

              <a
                href="#hormuz-story"
                className="mt-7 inline-flex items-center gap-2 rounded-xl bg-blue-700 px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-700/20 transition hover:bg-blue-800"
              >
                Follow The Price Journey
                <ArrowRight size={17} />
              </a>
            </div>

            <div className="rounded-3xl border border-blue-100 bg-white p-5 shadow-xl shadow-blue-900/5 sm:p-7">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-100 text-orange-700">
                  <Ship size={26} />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-950">
                    One Connected Story
                  </p>
                  <p className="text-xs text-slate-500">
                    From a global event to household spending
                  </p>
                </div>
              </div>

              <div className="mt-6 space-y-2">
                {[
                  {
                    title: "Strait of Hormuz",
                    text: "Oil shipment disruption",
                    icon: Ship,
                    style: "bg-rose-100 text-rose-700",
                  },
                  {
                    title: "Crude Oil",
                    text: "Supply risk and price volatility",
                    icon: Fuel,
                    style: "bg-amber-100 text-amber-700",
                  },
                  {
                    title: "Transport Costs",
                    text: "Fuel and freight expenses",
                    icon: Truck,
                    style: "bg-blue-100 text-blue-700",
                  },
                  {
                    title: "Shop Prices",
                    text: "Some goods may cost more",
                    icon: ShoppingBasket,
                    style: "bg-violet-100 text-violet-700",
                  },
                  {
                    title: "Family Budget",
                    text: "Money may buy less",
                    icon: Wallet,
                    style: "bg-emerald-100 text-emerald-700",
                  },
                ].map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div key={item.title}>
                      <div className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 p-3">
                        <div
                          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${item.style}`}
                        >
                          <Icon size={20} />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-sm font-bold text-slate-900">
                            {item.title}
                          </p>
                          <p className="mt-0.5 text-xs leading-5 text-slate-500">
                            {item.text}
                          </p>
                        </div>
                        {index === 4 && (
                          <CheckCircle2
                            size={19}
                            className="shrink-0 text-emerald-600"
                          />
                        )}
                      </div>
                      {index < 4 && (
                        <div className="flex justify-center py-1">
                          <ArrowDown size={17} className="text-slate-400" />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              <p className="mt-4 text-xs leading-5 text-slate-500">
                This is a possible chain of effects, not a guarantee that every
                step will occur or that all consumer prices will rise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 1. Explain inflation in the context of the story */}
      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16">
        <SectionHeading
          number="01"
          eyebrow="First, Understand The Meaning"
          title="What Does Inflation Actually Mean?"
          description="Inflation is a sustained rise in the general level of prices for goods and services. It means the same amount of money may buy fewer things than before."
        />

        <div className="grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50 to-white p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                <ShoppingBasket size={23} />
              </div>
              <h3 className="text-lg font-bold text-slate-950">
                Before Prices Rise
              </h3>
            </div>
            <div className="mt-6 rounded-xl bg-white p-5">
              <p className="text-sm text-slate-500">
                Example monthly shopping basket
              </p>
              <p className="mt-2 text-4xl font-bold text-slate-950">₹5,000</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                A household spends ₹5,000 on a selected group of groceries and
                household essentials.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-orange-200 bg-gradient-to-br from-orange-50 to-white p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-100 text-orange-700">
                <TrendingUp size={23} />
              </div>
              <h3 className="text-lg font-bold text-slate-950">
                After Prices Rise
              </h3>
            </div>
            <div className="mt-6 rounded-xl bg-white p-5">
              <p className="text-sm text-slate-500">
                Same basket, hypothetical example
              </p>
              <p className="mt-2 text-4xl font-bold text-slate-950">₹5,250</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                If the same basket costs ₹250 more, the increase is 5%.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-5 rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-100 text-violet-700">
              <BarChart3 size={21} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-950">
                How Is The Increase Calculated?
              </h3>
              <p className="mt-3 rounded-xl bg-slate-50 p-4 text-center text-base font-bold text-blue-800 sm:text-lg">
                (New Price − Old Price) ÷ Old Price × 100
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                (₹5,250 − ₹5,000) ÷ ₹5,000 × 100 = 5%.
              </p>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                This is an illustrative basket calculation, not an official
                inflation statistic. Official measures track a representative
                basket of goods and services. The price of one item rising
                alone does not prove that overall inflation has increased.
              </p>
            </div>
          </div>
        </div>
      </section>
<AdSlot />
      {/* 2. What affects prices before a war */}
      <section className="border-y border-blue-100 bg-gradient-to-br from-sky-50 via-white to-blue-50">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16">
          <SectionHeading
            number="02"
            eyebrow="Before The Oil Shock"
            title="What Can Cause Inflation Even Without A War?"
            description="An economy already has many influences on prices. A conflict can add another shock to these existing conditions; it does not explain every price change."
          />

          <div className="grid gap-4 sm:grid-cols-2">
            {beforeFactors.map((item) => {
              const Icon = item.icon;
              const styles = colorStyles[item.color];

              return (
                <article
                  key={item.title}
                  className={`rounded-2xl border ${styles.border} bg-white p-5 sm:p-6`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${styles.icon}`}
                    >
                      <Icon size={23} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-950">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-slate-600">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-6 rounded-2xl border border-blue-200 bg-white p-5 sm:p-6">
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                <BookOpen size={21} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-950">
                  Then A Major Oil-Supply Disruption Occurs
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  Suppose food prices were already affected by weather and
                  transport was already expensive. If crude oil then becomes
                  more costly, businesses may face an additional expense on
                  top of the pressures they were already experiencing. The
                  final effect depends on how much each cost changes and how
                  businesses respond.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Hormuz and war context */}
      <section id="hormuz-story" className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16">
        <SectionHeading
          number="03"
          eyebrow="The Real-World Event"
          title="How The Strait Of Hormuz Conflict Can Put Pressure On Oil Prices"
          description="The Strait of Hormuz is a narrow shipping passage connecting the Persian Gulf with the Gulf of Oman and the Arabian Sea. Large volumes of oil move through it to international buyers, including Asian markets."
        />

        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50 to-white p-6">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-700 text-white">
              <Ship size={29} />
            </div>
            <h3 className="mt-5 text-xl font-bold text-slate-950">
              Why This Narrow Route Matters
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              The International Energy Agency reports that about 20 million
              barrels per day of crude oil and oil products passed through
              Hormuz in 2025, representing roughly one-quarter of global
              seaborne oil trade.
            </p>
            <div className="mt-5 rounded-2xl bg-white p-5 shadow-sm">
              <p className="text-3xl font-bold text-blue-800">
                ~20 million
              </p>
              <p className="mt-1 text-sm font-medium text-slate-700">
                Barrels per day in 2025
              </p>
              <p className="mt-2 text-xs leading-5 text-slate-500">
                Historical flow estimate, not a measurement of today's traffic.
              </p>
            </div>
            <div className="mt-5">
              <SourceLink href="https://www.iea.org/about/oil-security-and-emergency-response/Strait-of-hormuz">
                Read The IEA Factsheet
              </SourceLink>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="text-xl font-bold text-slate-950">
              Follow The Possible Chain Of Events
            </h3>
            <div className="mt-6 space-y-3">
              <FlowStep
                number="01"
                icon={AlertTriangle}
                title="Conflict Creates Supply Risk"
                description="Military action, damage to infrastructure or shipping disruption can make oil deliveries more difficult or uncertain."
                color="bg-rose-100 text-rose-700"
              />
              <div className="flex justify-center">
                <ArrowDown size={20} className="text-slate-400" />
              </div>
              <FlowStep
                number="02"
                icon={TrendingUp}
                title="Oil Prices Become Volatile"
                description="Buyers may worry that fewer shipments will arrive. Prices can rise because of actual supply losses or expectations of future shortages."
                color="bg-amber-100 text-amber-700"
              />
              <div className="flex justify-center">
                <ArrowDown size={20} className="text-slate-400" />
              </div>
              <FlowStep
                number="03"
                icon={Fuel}
                title="Import And Fuel Costs May Rise"
                description="Refiners and fuel suppliers may face higher costs. Currency movements and domestic pricing decisions influence how much is passed on."
                color="bg-blue-100 text-blue-700"
              />
              <div className="flex justify-center">
                <ArrowDown size={20} className="text-slate-400" />
              </div>
              <FlowStep
                number="04"
                icon={Truck}
                title="The Cost Of Moving Goods May Increase"
                description="Transport operators can face higher fuel and operating expenses, which may put pressure on freight and delivery charges."
                color="bg-violet-100 text-violet-700"
              />
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5">
          <div className="flex items-start gap-3">
            <AlertTriangle
              size={22}
              className="mt-0.5 shrink-0 text-amber-700"
            />
            <p className="text-sm leading-7 text-amber-950">
              <strong>Important:</strong> This article discusses the
              inflationary mechanism of the 2026 Hormuz oil disruption. A
              higher crude oil price does not automatically mean every petrol
              pump, shop or service provider immediately raises prices. Some
              effects can be delayed, limited or offset by other factors.
            </p>
          </div>
          <div className="mt-4">
            <SourceLink href="https://www.eia.gov/TodayinEnergy/detail.php?id=67865">
              Read EIA's Analysis Of 2026 Oil-Market Disruptions
            </SourceLink>
          </div>
        </div>
      </section>

      {/* 4. Official oil price data */}
      <section className="border-y border-blue-100 bg-gradient-to-br from-blue-50 via-white to-sky-50">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16">
          <SectionHeading
            number="04"
            eyebrow="Check The Numbers"
            title="What Happened To Brent Crude Oil Prices In 2026?"
            description="The U.S. Energy Information Administration (EIA) publishes monthly average Brent crude oil spot prices. This six-month series shows how oil prices changed during the period."
          />

          <div className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm sm:p-7">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm text-slate-500">
                  Brent crude spot price
                </p>
                <p className="mt-1 text-3xl font-bold text-slate-950">
                  USD per barrel
                </p>
                <p className="mt-2 max-w-lg text-sm leading-6 text-slate-600">
                  Monthly averages for April to September 2026.
                </p>
              </div>
              <div className="rounded-xl bg-blue-50 px-4 py-3">
                <p className="text-xs font-bold uppercase tracking-wide text-blue-700">
                  September average
                </p>
                <p className="mt-1 text-2xl font-bold text-blue-900">
                  $114.16
                </p>
              </div>
            </div>

            <div className="mt-8 space-y-5">
              {oilPrices.map((item) => (
                <div
                  key={item.month}
                  className="grid grid-cols-[76px_minmax(0,1fr)_75px] items-center gap-3 sm:grid-cols-[100px_minmax(0,1fr)_90px] sm:gap-4"
                >
                  <span className="text-sm font-medium text-slate-600">
                    {item.month}
                  </span>
                  <div className="h-8 overflow-hidden rounded-lg bg-slate-100">
                    <div
                      className={`flex h-full items-center rounded-lg ${
                        item.month === "April" || item.month === "September"
                          ? "bg-blue-700"
                          : "bg-sky-500"
                      }`}
                      style={{
                        width: `${(item.price / maxPrice) * 100}%`,
                      }}
                    />
                  </div>
                  <span className="text-right text-sm font-bold tabular-nums text-slate-900">
                    ${item.price.toFixed(2)}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <div className="rounded-xl border border-blue-100 bg-blue-50 p-4">
                <p className="text-sm text-slate-600">April 2026</p>
                <p className="mt-1 text-2xl font-bold text-slate-950">
                  $117.29
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  Monthly average
                </p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm text-slate-600">July 2026</p>
                <p className="mt-1 text-2xl font-bold text-slate-950">
                  $83.76
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  Lowest month in this series
                </p>
              </div>
              <div className="rounded-xl border border-orange-200 bg-orange-50 p-4">
                <p className="text-sm text-slate-600">September 2026</p>
                <p className="mt-1 text-2xl font-bold text-slate-950">
                  $114.16
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  Monthly average
                </p>
              </div>
            </div>

            <div className="mt-5 rounded-xl border border-orange-200 bg-orange-50 p-4">
              <div className="flex items-start gap-3">
                <TrendingUp
                  size={22}
                  className="mt-0.5 shrink-0 text-orange-700"
                />
                <div>
                  <p className="font-bold text-slate-950">
                    What Does The Comparison Show?
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-700">
                    Brent's monthly average fell from $117.29 in April to
                    $83.76 in July, then climbed to $114.16 in September.
                    September was about 36.2% higher than July.
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-700">
                    This illustrates that oil prices can move both down and up
                    during a period of disruption. The 36.2% change is the
                    change in Brent's monthly average, not the increase in
                    Indian petrol prices, freight rates or overall inflation.
                  </p>
                </div>
              </div>
            </div>

            <p className="mt-5 text-xs leading-6 text-slate-500">
              Source: U.S. Energy Information Administration, Europe Brent
              Spot Price FOB, monthly series RBRTE. Values are in U.S. dollars
              per barrel. Monthly average spot prices are not the same as
              futures prices, India's crude oil basket, or Indian retail fuel
              prices.
            </p>
            <div className="mt-3">
              <SourceLink href="https://www.eia.gov/opendata/browser/petroleum/pri/spt">
                View EIA Official Oil-Price Data
              </SourceLink>
            </div>
          </div>
        </div>
      </section>
<AdSlot />
      {/* 5. From oil prices to products */}
      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16">
        <SectionHeading
          number="05"
          eyebrow="Where The Money Goes"
          title="How Higher Oil Costs Can Affect The Prices Of Other Products"
          description="Now return to the same example. If oil or fuel becomes more expensive, businesses that depend on fuel, freight or petrochemical inputs may face higher expenses. Here is how the pressure can spread."
        />

        <div className="grid gap-4 md:grid-cols-2">
          {impactCards.map((item) => {
            const Icon = item.icon;
            const styles = colorStyles[item.color];

            return (
              <article
                key={item.title}
                className={`rounded-2xl border ${styles.border} bg-white p-5 sm:p-6`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${styles.icon}`}
                  >
                    <Icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-950">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {item.explanation}
                    </p>
                  </div>
                </div>
                <div className={`mt-5 rounded-xl ${styles.light} p-4`}>
                  <p className="text-xs font-bold uppercase tracking-wide text-slate-600">
                    Possible Household Impact
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-800">
                    {item.household}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-6">
          <div className="flex items-start gap-3">
            <Boxes size={22} className="mt-1 shrink-0 text-blue-700" />
            <div>
              <h3 className="text-lg font-bold text-slate-950">
                Why Do Shop Prices Not Rise Immediately?
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                A shop may have stock purchased at an earlier price. A transport
                contract may have a fixed rate. A business may absorb some
                additional costs to remain competitive. Prices can therefore
                change at different times, and some may not change at all.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Middle-class household impact */}
      <section className="border-y border-blue-100 bg-gradient-to-br from-violet-50 via-white to-blue-50">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16">
          <SectionHeading
            number="06"
            eyebrow="The Final Impact"
            title="How Could This Affect A Middle-Class Family In India?"
            description="The family may never buy crude oil directly, but it purchases fuel, food, transport and manufactured goods. If several of these expenses rise, the household budget can come under pressure."
          />

          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="bg-gradient-to-r from-blue-800 to-indigo-700 p-5 text-white sm:p-7">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/15">
                  <Wallet size={26} />
                </div>
                <div>
                  <p className="text-sm text-blue-100">
                    Hypothetical household example
                  </p>
                  <h3 className="text-xl font-bold">
                    A Monthly Budget Under Pressure
                  </h3>
                </div>
              </div>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-blue-50">
                Imagine a family has a fixed monthly income and spends money
                on groceries, commuting, deliveries and household essentials.
                The following example shows what happens if its total monthly
                expenses increase by ₹1,000.
              </p>
            </div>

            <div className="grid gap-0 md:grid-cols-2">
              <div className="p-5 sm:p-7">
                <div className="flex items-center justify-between gap-3">
                  <p className="font-bold text-slate-950">
                    Before The Cost Increase
                  </p>
                  <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-700">
                    Original Budget
                  </span>
                </div>

                <div className="mt-5 rounded-xl bg-slate-50 p-5">
                  <p className="text-sm text-slate-500">Monthly income</p>
                  <p className="mt-1 text-3xl font-bold text-slate-950">
                    ₹40,000
                  </p>
                  <div className="my-4 border-t border-slate-200" />
                  <p className="text-sm text-slate-500">
                    Monthly household expenses
                  </p>
                  <p className="mt-1 text-2xl font-bold text-slate-950">
                    ₹32,000
                  </p>
                  <div className="my-4 border-t border-slate-200" />
                  <p className="text-sm text-slate-500">
                    Money remaining
                  </p>
                  <p className="mt-1 text-2xl font-bold text-emerald-700">
                    ₹8,000
                  </p>
                </div>
              </div>

              <div className="border-t border-slate-200 p-5 md:border-l md:border-t-0 sm:p-7">
                <div className="flex items-center justify-between gap-3">
                  <p className="font-bold text-slate-950">
                    After Expenses Increase
                  </p>
                  <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-bold text-orange-700">
                    Illustrative
                  </span>
                </div>

                <div className="mt-5 rounded-xl bg-orange-50 p-5">
                  <p className="text-sm text-slate-500">Monthly income</p>
                  <p className="mt-1 text-3xl font-bold text-slate-950">
                    ₹40,000
                  </p>
                  <div className="my-4 border-t border-orange-200" />
                  <p className="text-sm text-slate-500">
                    Monthly household expenses
                  </p>
                  <p className="mt-1 text-2xl font-bold text-slate-950">
                    ₹33,000
                  </p>
                  <div className="my-4 border-t border-orange-200" />
                  <p className="text-sm text-slate-500">
                    Money remaining
                  </p>
                  <p className="mt-1 text-2xl font-bold text-orange-700">
                    ₹7,000
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-slate-200 bg-slate-50 p-5 sm:p-7">
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-xl border border-slate-200 bg-white p-4">
                  <p className="text-sm text-slate-500">
                    Additional expenses
                  </p>
                  <p className="mt-1 text-2xl font-bold text-orange-700">
                    +₹1,000
                  </p>
                </div>
                <div className="rounded-xl border border-slate-200 bg-white p-4">
                  <p className="text-sm text-slate-500">
                    Monthly savings capacity
                  </p>
                  <p className="mt-1 text-2xl font-bold text-slate-950">
                    −12.5%
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    From ₹8,000 to ₹7,000
                  </p>
                </div>
                <div className="rounded-xl border border-slate-200 bg-white p-4">
                  <p className="text-sm text-slate-500">
                    Extra spending over 12 months
                  </p>
                  <p className="mt-1 text-2xl font-bold text-slate-950">
                    ₹12,000
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    If the extra cost persists every month
                  </p>
                </div>
              </div>

              <p className="mt-5 text-sm leading-7 text-slate-600">
                This is a made-up illustration, not a measured estimate of
                the cost of the Hormuz conflict. The ₹1,000 increase is assumed
                for demonstration. It shows how higher everyday expenses can
                reduce the money available for savings, education, healthcare,
                emergencies or other goals.
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-blue-200 bg-white p-5">
              <Truck className="text-blue-700" size={25} />
              <h3 className="mt-3 font-bold text-slate-950">
                Higher Travel Costs
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Commuting, public transport or delivery expenses may take up a
                larger share of income.
              </p>
            </div>
            <div className="rounded-2xl border border-emerald-200 bg-white p-5">
              <ShoppingBasket className="text-emerald-700" size={25} />
              <h3 className="mt-3 font-bold text-slate-950">
                More Expensive Essentials
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                If food and household necessities become costlier, the same
                shopping budget may buy less.
              </p>
            </div>
            <div className="rounded-2xl border border-violet-200 bg-white p-5">
              <Wallet className="text-violet-700" size={25} />
              <h3 className="mt-3 font-bold text-slate-950">
                Less Money To Save
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                When income does not keep pace with expenses, savings and
                discretionary spending may shrink.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Why prices do not move one-to-one */}
      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16">
        <SectionHeading
          number="07"
          eyebrow="A Necessary Distinction"
          title="Does Every Oil Price Increase Cause Inflation?"
          description="No. A rise in oil prices can create inflationary pressure, but the size and duration of its impact depend on the wider economy."
        />

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-rose-200 bg-rose-50 p-6">
            <div className="flex items-center gap-3">
              <TrendingUp size={23} className="text-rose-700" />
              <h3 className="text-lg font-bold text-slate-950">
                Factors That Can Increase Pressure
              </h3>
            </div>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-700">
              <li>• A sustained disruption to oil supplies.</li>
              <li>• Higher fuel or freight costs for businesses.</li>
              <li>• A weaker rupee making imported oil more expensive.</li>
              <li>• Businesses passing some extra costs to customers.</li>
              <li>• Other shortages occurring at the same time.</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
            <div className="flex items-center gap-3">
              <TrendingDown size={23} className="text-emerald-700" />
              <h3 className="text-lg font-bold text-slate-950">
                Factors That Can Limit The Impact
              </h3>
            </div>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-700">
              <li>• Oil shipments resume or alternative supplies arrive.</li>
              <li>• Businesses absorb some higher costs.</li>
              <li>• Lower taxes or other policy changes offset costs.</li>
              <li>• Competition limits how much sellers can charge.</li>
              <li>• Other goods become cheaper or supply improves.</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-5 sm:p-6">
          <h3 className="text-lg font-bold text-slate-950">
            What Is The Difference Between A Price Shock And Inflation?
          </h3>
          <p className="mt-3 text-sm leading-7 text-slate-700">
            A sudden rise in crude oil is a change in one important input price.
            If it pushes up the costs of many goods and services, it can
            contribute to broader inflation. But if the oil-price increase is
            temporary, or other prices fall at the same time, the effect on
            overall inflation may be limited. If the general price level rises
            and stays higher, households may continue to feel the loss of
            purchasing power even after the inflation rate slows.
          </p>
        </div>
      </section>
<AdSlot />
      {/* 8. Official India data */}
      <section className="border-y border-blue-100 bg-gradient-to-br from-sky-50 via-white to-blue-50">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16">
          <SectionHeading
            number="08"
            eyebrow="How India Measures Inflation"
            title="How Can We Check Whether Consumer Inflation Actually Increased?"
            description="Crude oil prices show pressure in an important global market. To determine what happened to Indian consumer prices, look at official Indian inflation statistics."
          />

          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-blue-200 bg-white p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                <BarChart3 size={25} />
              </div>
              <h3 className="mt-4 text-xl font-bold text-slate-950">
                Consumer Price Index (CPI)
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                India's Ministry of Statistics and Programme Implementation
                publishes the CPI, which measures changes in prices for a
                representative basket of goods and services. Year-on-year CPI
                change is commonly used to express consumer inflation.
              </p>
              <div className="mt-5">
                <SourceLink href="https://mospi.gov.in/web/mospi/cpi">
                  View Official CPI Releases
                </SourceLink>
              </div>
            </div>

            <div className="rounded-2xl border border-violet-200 bg-white p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-100 text-violet-700">
                <Fuel size={25} />
              </div>
              <h3 className="mt-4 text-xl font-bold text-slate-950">
                Petroleum Price Data
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                India's Petroleum Planning and Analysis Cell publishes
                information about international crude prices and the Indian
                petroleum sector. These figures help explain the input-price
                side, which is different from the final CPI inflation rate.
              </p>
              <div className="mt-5">
                <SourceLink href="https://ppac.gov.in/">
                  Visit India's PPAC Website
                </SourceLink>
              </div>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5">
            <h3 className="font-bold text-slate-950">
              The Right Way To Read The Evidence
            </h3>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              <div className="rounded-xl bg-slate-50 p-4">
                <p className="text-sm font-bold text-blue-800">
                  Global Oil Data
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Shows whether the international crude benchmark rose or fell.
                </p>
              </div>
              <div className="rounded-xl bg-slate-50 p-4">
                <p className="text-sm font-bold text-violet-800">
                  Domestic Fuel Data
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Shows how local petroleum prices changed in India.
                </p>
              </div>
              <div className="rounded-xl bg-slate-50 p-4">
                <p className="text-sm font-bold text-emerald-800">
                  CPI Inflation Data
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Shows the broader change in consumer prices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Summary and next steps */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16">
          <SectionHeading
            number="09"
            eyebrow="The Complete Picture"
            title="How A Conflict Can Reach Your Household Budget"
            description="The key lesson is not that every conflict causes every price to rise. It is that a disruption to an important input can spread through interconnected supply chains."
          />

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Ship,
                title: "Global Disruption",
                text: "Oil shipments become uncertain.",
                color: "bg-rose-100 text-rose-700",
              },
              {
                icon: Fuel,
                title: "Input Costs",
                text: "Oil and fuel costs may rise.",
                color: "bg-amber-100 text-amber-700",
              },
              {
                icon: Truck,
                title: "Supply Chain",
                text: "Freight and delivery costs may rise.",
                color: "bg-blue-100 text-blue-700",
              },
              {
                icon: Wallet,
                title: "Family Budget",
                text: "Some everyday expenses may increase.",
                color: "bg-emerald-100 text-emerald-700",
              },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <div key={item.title} className="relative">
                  <div className="h-full rounded-2xl border border-slate-200 bg-white p-5">
                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-xl ${item.color}`}
                    >
                      <Icon size={23} />
                    </div>
                    <h3 className="mt-4 font-bold text-slate-950">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {item.text}
                    </p>
                  </div>
                  {index < 3 && (
                    <ArrowRight
                      size={19}
                      className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 text-blue-600 lg:block"
                    />
                  )}
                </div>
              );
            })}
          </div>

        

          <div className="mt-8 border-t border-slate-200 pt-5">
            <h3 className="text-sm font-bold text-slate-800">
              Sources And Data Notes
            </h3>
            <ul className="mt-3 space-y-2 text-xs leading-6 text-slate-500">
              <li>
                • U.S. Energy Information Administration: monthly Brent crude
                oil spot prices and its analysis of 2026 petroleum-market
                disruptions.
              </li>
              <li>
                • International Energy Agency: Strait of Hormuz oil-flow
                estimates and analysis of supply disruption.
              </li>
              <li>
                • India's Ministry of Statistics and Programme Implementation:
                official CPI releases and inflation methodology.
              </li>
              <li>
                • The household budget and product-price examples are
                illustrations, not estimates of the measured financial impact
                of the conflict.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
