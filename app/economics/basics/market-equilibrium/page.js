
import Link from "next/link";
import {
  Activity,
  AlertTriangle,
  ArrowDown,
  ArrowRight,
  ArrowUp,
  BarChart3,
  BookOpen,
  CheckCircle2,
  CircleHelp,
  IndianRupee,
  Lightbulb,
  Package,
  Scale,
  ShoppingBasket,
  Store,
  Target,
  TrendingDown,
  TrendingUp,
  Users,
} from "lucide-react";
import AdSlot from "../../../../components/AdSlot";
import RelatedTopics from "../../../../components/ContinueReading";
export const metadata = {
  title: "Market Equilibrium | Meaning, Price, Graph & Examples",
  description:
    "Learn market equilibrium, equilibrium price and quantity, demand and supply, shortages, surpluses, and how markets adjust with practical Indian examples and calculations.",
  alternates: {
    canonical:
      "https://www.pricetag.co.in/economics/basics/market-equilibrium",
  },
};

const comparison = [
  {
    title: "Price Below Equilibrium",
    subtitle: "Shortage",
    icon: TrendingUp,
    color: "rose",
    explanation:
      "Buyers want more units than sellers are willing to supply. Some customers may not find the product, creating pressure for the price to rise.",
    example: "At ₹40, buyers want 120 units, but sellers offer only 60.",
  },
  {
    title: "Price At Equilibrium",
    subtitle: "Market Balance",
    icon: Scale,
    color: "emerald",
    explanation:
      "The quantity demanded equals the quantity supplied. There is no shortage or surplus at that price in this simplified model.",
    example: "At ₹60, buyers want 80 units and sellers offer 80.",
  },
  {
    title: "Price Above Equilibrium",
    subtitle: "Surplus",
    icon: TrendingDown,
    color: "amber",
    explanation:
      "Sellers offer more units than buyers want. Unsold stock may encourage sellers to reduce prices or production.",
    example: "At ₹80, buyers want 40 units, but sellers offer 100.",
  },
];

const demandSchedule = [
  { price: 20, demand: 140, supply: 20 },
  { price: 40, demand: 120, supply: 60 },
  { price: 60, demand: 80, supply: 80 },
  { price: 80, demand: 40, supply: 100 },
  { price: 100, demand: 20, supply: 140 },
];

const marketCases = [
  {
    number: "01",
    title: "The Ludhiana Vegetable Market",
    concept: "How demand and supply determine price",
    color: "blue",
    scenario:
      "Imagine a local vegetable market selling tomatoes. The figures below are fictional and are used only to demonstrate how a market can move toward equilibrium.",
    product: "Tomatoes",
    unit: "kilograms per day",
    rows: [
      { price: "₹20/kg", demand: "140 kg", supply: "20 kg", result: "Shortage of 120 kg", type: "shortage" },
      { price: "₹40/kg", demand: "120 kg", supply: "60 kg", result: "Shortage of 60 kg", type: "shortage" },
      { price: "₹60/kg", demand: "80 kg", supply: "80 kg", result: "Equilibrium", type: "balanced" },
      { price: "₹80/kg", demand: "40 kg", supply: "100 kg", result: "Surplus of 60 kg", type: "surplus" },
      { price: "₹100/kg", demand: "20 kg", supply: "140 kg", result: "Surplus of 120 kg", type: "surplus" },
    ],
    calculationTitle: "Finding the Equilibrium",
    calculations: [
      "At ₹20/kg: 140 − 20 = 120 kg shortage.",
      "At ₹40/kg: 120 − 60 = 60 kg shortage.",
      "At ₹60/kg: 80 − 80 = 0 kg imbalance.",
      "At ₹80/kg: 100 − 40 = 60 kg surplus.",
    ],
    lesson:
      "In this example, ₹60 per kilogram is the equilibrium price, and 80 kilograms per day is the equilibrium quantity. A real market may have changing prices, different product quality, and many buyers and sellers.",
    takeaway:
      "Equilibrium occurs where quantity demanded equals quantity supplied—not simply where the price is cheap or expensive.",
  },
  {
    number: "02",
    title: "What Happens When Demand Suddenly Rises?",
    concept: "A shift in demand",
    color: "violet",
    scenario:
      "Suppose a college festival in Ludhiana increases demand for lemonade from nearby stalls. For simplicity, assume sellers can supply the same quantities at each price initially, while buyers now want more lemonade.",
    product: "Cups of lemonade",
    unit: "cups per day",
    rows: [
      { price: "₹20/cup", demand: "180 cups", supply: "40 cups", result: "Shortage of 140 cups", type: "shortage" },
      { price: "₹30/cup", demand: "140 cups", supply: "80 cups", result: "Shortage of 60 cups", type: "shortage" },
      { price: "₹40/cup", demand: "100 cups", supply: "100 cups", result: "New equilibrium", type: "balanced" },
      { price: "₹50/cup", demand: "70 cups", supply: "120 cups", result: "Surplus of 50 cups", type: "surplus" },
    ],
    calculationTitle: "Understanding the Change",
    calculations: [
      "Before the festival, suppose the market balanced at ₹30 per cup and 80 cups.",
      "The festival brings more customers at each possible price.",
      "At ₹30, buyers now want 140 cups while sellers supply 80: shortage = 60 cups.",
      "In this illustrative schedule, the new balance is ₹40 and 100 cups.",
    ],
    lesson:
      "When demand increases while supply conditions remain unchanged, equilibrium price and quantity generally rise. Sellers may respond by preparing more lemonade, but their ability to do so depends on ingredients, equipment, and time.",
    takeaway:
      "More demand can raise both equilibrium price and equilibrium quantity when supply is upward-sloping.",
  },
  {
    number: "03",
    title: "When a Good Harvest Increases Supply",
    concept: "A shift in supply",
    color: "emerald",
    scenario:
      "Imagine farmers bring a larger-than-usual harvest of potatoes to a local wholesale market. Assume demand remains unchanged and the extra supply is available for sale. The numbers below are hypothetical.",
    product: "Potatoes",
    unit: "quintals per day",
    rows: [
      { price: "₹10/kg", demand: "140 quintals", supply: "40 quintals", result: "Shortage", type: "shortage" },
      { price: "₹15/kg", demand: "110 quintals", supply: "80 quintals", result: "Shortage", type: "shortage" },
      { price: "₹20/kg", demand: "80 quintals", supply: "80 quintals", result: "Initial balance", type: "balanced" },
      { price: "₹15/kg", demand: "110 quintals", supply: "110 quintals", result: "New balance after supply shift", type: "balanced" },
    ],
    calculationTitle: "How the Market Adjusts",
    calculations: [
      "Initially, suppose the market balances at ₹20/kg and 80 quintals.",
      "A larger harvest shifts the supply curve to the right.",
      "At the old price, sellers may offer more than buyers wish to purchase.",
      "As the price adjusts downward, buyers generally demand more while sellers offer less.",
    ],
    lesson:
      "When supply increases and demand stays the same, equilibrium price generally falls and equilibrium quantity rises. Actual farm-gate prices also depend on storage, transport, quality, market access, and government policies.",
    takeaway:
      "An increase in supply usually lowers equilibrium price, while allowing more of the product to be traded.",
  },
];

const colorStyles = {
  blue: {
    card: "border-blue-100 bg-blue-50/70",
    icon: "bg-blue-100 text-blue-700",
    label: "bg-blue-100 text-blue-800",
  },
  violet: {
    card: "border-violet-100 bg-violet-50/70",
    icon: "bg-violet-100 text-violet-700",
    label: "bg-violet-100 text-violet-800",
  },
  emerald: {
    card: "border-emerald-100 bg-emerald-50/70",
    icon: "bg-emerald-100 text-emerald-700",
    label: "bg-emerald-100 text-emerald-800",
  },
  amber: {
    card: "border-amber-100 bg-amber-50/70",
    icon: "bg-amber-100 text-amber-700",
    label: "bg-amber-100 text-amber-800",
  },
  rose: {
    card: "border-rose-100 bg-rose-50/70",
    icon: "bg-rose-100 text-rose-700",
    label: "bg-rose-100 text-rose-800",
  },
};

function SectionHeading({ number, eyebrow, title, description }) {
  return (
    <div className="mb-7 max-w-3xl">
      <div className="mb-3 flex items-center gap-3">
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-100 text-sm font-bold text-blue-800">
          {number}
        </span>
        <span className="text-xs font-bold uppercase tracking-[0.16em] text-blue-700">
          {eyebrow}
        </span>
      </div>
      <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-base leading-7 text-slate-600">{description}</p>
      )}
    </div>
  );
}

function ConceptCard({ item }) {
  const Icon = item.icon;
  const styles = colorStyles[item.color];

  return (
    <div className={`rounded-2xl border p-5 ${styles.card}`}>
      <div className="flex items-start gap-3">
        <div className={`rounded-xl p-3 ${styles.icon}`}>
          <Icon size={23} />
        </div>
        <div>
          <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
          <p className="mt-1 text-sm font-semibold text-slate-600">
            {item.subtitle}
          </p>
        </div>
      </div>
      <p className="mt-4 text-sm leading-6 text-slate-700">
        {item.explanation}
      </p>
      <div className="mt-4 rounded-xl border border-white/80 bg-white/80 p-3">
        <p className="text-sm leading-6 text-slate-700">{item.example}</p>
      </div>
    </div>
  );
}

function MarketCaseStudy({ item }) {
  const styles = colorStyles[item.color];

  return (
    <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      <div className={`border-b p-5 sm:p-7 ${styles.card}`}>
        <div className="flex flex-wrap items-center gap-3">
          <span className={`rounded-lg px-3 py-1 text-xs font-bold ${styles.label}`}>
            CASE STUDY {item.number}
          </span>
          <span className="text-sm font-medium text-slate-600">
            {item.concept}
          </span>
        </div>
        <h3 className="mt-4 text-xl font-bold text-slate-900 sm:text-2xl">
          {item.title}
        </h3>
        <p className="mt-3 leading-7 text-slate-700">{item.scenario}</p>
      </div>

      <div className="space-y-6 p-5 sm:p-7">
        <div>
          <div className="mb-3 flex items-center gap-2">
            <BarChart3 size={19} className="text-blue-700" />
            <h4 className="font-bold text-slate-900">
              Illustrative Market Schedule
            </h4>
          </div>
          <p className="mb-3 text-sm text-slate-500">
            {item.product} · Quantities are measured in {item.unit}.
          </p>

          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full min-w-[580px] border-collapse text-left text-sm">
              <thead className="bg-slate-100 text-slate-700">
                <tr>
                  <th className="px-4 py-3 font-semibold">Price</th>
                  <th className="px-4 py-3 font-semibold">Quantity Demanded</th>
                  <th className="px-4 py-3 font-semibold">Quantity Supplied</th>
                  <th className="px-4 py-3 font-semibold">Market Condition</th>
                </tr>
              </thead>
              <tbody>
                {item.rows.map((row, index) => (
                  <tr
                    key={`${row.price}-${index}`}
                    className="border-t border-slate-100"
                  >
                    <td className="px-4 py-3 font-semibold text-slate-900">
                      {row.price}
                    </td>
                    <td className="px-4 py-3 text-slate-700">{row.demand}</td>
                    <td className="px-4 py-3 text-slate-700">{row.supply}</td>
                    <td className="px-4 py-3">
                      <span
                        className={`inline-block rounded-full px-2.5 py-1 text-xs font-semibold ${
                          row.type === "balanced"
                            ? "bg-emerald-100 text-emerald-800"
                            : row.type === "shortage"
                              ? "bg-rose-100 text-rose-800"
                              : "bg-amber-100 text-amber-800"
                        }`}
                      >
                        {row.result}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="rounded-2xl border border-blue-100 bg-blue-50/70 p-5">
          <div className="mb-3 flex items-center gap-2">
            <IndianRupee size={19} className="text-blue-700" />
            <h4 className="font-bold text-slate-900">{item.calculationTitle}</h4>
          </div>
          <ul className="space-y-3">
            {item.calculations.map((calculation) => (
              <li
                key={calculation}
                className="flex items-start gap-2 text-sm leading-6 text-slate-700"
              >
                <CheckCircle2
                  size={17}
                  className="mt-1 shrink-0 text-blue-700"
                />
                <span>{calculation}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 p-4">
            <div className="mb-2 flex items-center gap-2">
              <BookOpen size={18} className="text-violet-700" />
              <h4 className="font-bold text-slate-900">What This Shows</h4>
            </div>
            <p className="text-sm leading-6 text-slate-600">{item.lesson}</p>
          </div>
          <div className={`rounded-2xl border p-4 ${styles.card}`}>
            <div className="mb-2 flex items-center gap-2">
              <Lightbulb size={18} className="text-amber-700" />
              <h4 className="font-bold text-slate-900">Key Takeaway</h4>
            </div>
            <p className="text-sm leading-6 text-slate-700">{item.takeaway}</p>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function MarketEquilibriumPage() {
  return (
    <main className="min-h-screen bg-white text-slate-800">
      {/* Hero */}
      <section className="relative isolate overflow-hidden border-b border-blue-100 bg-gradient-to-br from-white via-blue-50 to-indigo-100">
        <div className="absolute -right-20 -top-20 -z-10 h-72 w-72 rounded-full bg-blue-200/40 blur-3xl" />
        <div className="absolute -bottom-24 left-1/4 -z-10 h-64 w-64 rounded-full bg-violet-200/40 blur-3xl" />

        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-sm font-semibold text-blue-800 shadow-sm">
              <Scale size={16} />
              Economics Basics
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Market Equilibrium
              <span className="mt-2 block bg-gradient-to-r from-blue-700 via-indigo-700 to-violet-700 bg-clip-text text-transparent">
                How Demand And Supply Set Prices
              </span>
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
              Why do vegetable prices change? What happens when a product is
              scarce or sellers have too much stock? Market equilibrium helps
              explain how buyers and sellers interact to determine a market
              price and the quantity traded.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#meaning"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-700 px-5 py-3 font-semibold text-white shadow-md transition hover:bg-blue-800"
              >
                Learn The Concept <ArrowRight size={18} />
              </a>
              <a
                href="#examples"
                className="inline-flex items-center gap-2 rounded-xl border border-blue-200 bg-white px-5 py-3 font-semibold text-blue-800 transition hover:bg-blue-50"
              >
                Explore Indian Examples
              </a>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {[
                {
                  icon: ShoppingBasket,
                  title: "Demand",
                  text: "What buyers are willing and able to purchase",
                  color: "text-blue-700 bg-blue-100",
                },
                {
                  icon: Store,
                  title: "Supply",
                  text: "What sellers are willing and able to offer",
                  color: "text-emerald-700 bg-emerald-100",
                },
                {
                  icon: Scale,
                  title: "Equilibrium",
                  text: "Where quantity demanded equals quantity supplied",
                  color: "text-violet-700 bg-violet-100",
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-white/90 bg-white/85 p-4 shadow-sm backdrop-blur"
                  >
                    <div className={`mb-3 inline-flex rounded-xl p-2.5 ${item.color}`}>
                      <Icon size={21} />
                    </div>
                    <h2 className="font-bold text-slate-900">{item.title}</h2>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl space-y-16 px-5 py-12 sm:px-8 sm:py-16">
        {/* Definition */}
        <section id="meaning" className="scroll-mt-8">
          <SectionHeading
            number="01"
            eyebrow="The Core Concept"
            title="What Is Market Equilibrium?"
            description="Market equilibrium is the point at which the quantity of a good or service that buyers want to purchase equals the quantity sellers want to sell at a particular price."
          />

          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-blue-100 bg-blue-50/70 p-6">
              <div className="mb-4 inline-flex rounded-xl bg-blue-100 p-3 text-blue-700">
                <ShoppingBasket size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Quantity Demanded
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                The amount consumers are willing and able to buy at a given
                price, during a particular period, assuming other relevant
                conditions remain unchanged.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-100 bg-emerald-50/70 p-6">
              <div className="mb-4 inline-flex rounded-xl bg-emerald-100 p-3 text-emerald-700">
                <Store size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Quantity Supplied
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                The amount producers or sellers are willing and able to offer
                at a given price, during that same period.
              </p>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-indigo-200 bg-gradient-to-r from-indigo-50 to-blue-50 p-6 text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-indigo-700">
              The Equilibrium Condition
            </p>
            <p className="mt-3 text-2xl font-bold text-slate-950 sm:text-3xl">
              Quantity Demanded = Quantity Supplied
            </p>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-600">
              In a basic competitive-market model, this is the price and
              quantity at which planned purchases and planned sales match.
            </p>
          </div>
        </section>

        <AdSlot />

    
{/* Graph */}
<section id="graph" className="scroll-mt-8">
  <SectionHeading
    number="02"
    eyebrow="Visual Explanation"
    title="Understanding The Demand And Supply Graph"
    description="See how price affects quantity demanded and quantity supplied, and how the two curves intersect to determine market equilibrium. All figures are hypothetical and are used for learning."
  />

  <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm sm:p-7">
    <div className="grid gap-5 md:grid-cols-2">
      <div className="rounded-2xl border border-blue-100 bg-blue-50 p-5">
        <div className="flex items-center gap-2">
          <TrendingDown size={22} className="text-blue-700" />
          <h3 className="font-bold text-slate-900">Demand Curve (D)</h3>
        </div>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          As price falls, consumers generally want to buy more. In this example,
          at ₹100 buyers demand 20 units, while at ₹20 they demand 140 units.
        </p>
      </div>

      <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-5">
        <div className="flex items-center gap-2">
          <TrendingUp size={22} className="text-emerald-700" />
          <h3 className="font-bold text-slate-900">Supply Curve (S)</h3>
        </div>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          As price rises, sellers generally offer more. In this example, at ₹20
          sellers supply 20 units, while at ₹100 they supply 140 units.
        </p>
      </div>
    </div>

    <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:p-6">
      <div className="mb-5">
        <h3 className="text-lg font-bold text-slate-900">
          Demand And Supply Schedule
        </h3>
        <p className="mt-1 text-sm leading-6 text-slate-600">
          The market has an equilibrium price of ₹60 per unit and an equilibrium
          quantity of 80 units per period.
        </p>
      </div>

      {/* Graph and axes */}
      <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white p-2 sm:p-4">
        <svg
          viewBox="0 0 680 450"
          role="img"
          aria-labelledby="equilibrium-graph-title equilibrium-graph-desc"
          className="mx-auto block w-full min-w-[510px] max-w-3xl"
        >
          <title id="equilibrium-graph-title">
            Market Equilibrium: Demand And Supply
          </title>
          <desc id="equilibrium-graph-desc">
            Price is on the vertical axis from 0 to 100 rupees. Quantity is on
            the horizontal axis from 0 to 160 units. The downward-sloping demand
            curve and upward-sloping supply curve intersect at price 60 rupees
            and quantity 80 units.
          </desc>

          {/* Plot area: x=80..620, y=35..365 */}
          <rect
            x="80"
            y="35"
            width="540"
            height="330"
            rx="4"
            fill="#ffffff"
          />

          {/* Horizontal gridlines and price labels */}
          {[0, 20, 40, 60, 80, 100].map((price) => {
            const y = 365 - price * 3.3;
            return (
              <g key={`price-${price}`}>
                <line
                  x1="80"
                  y1={y}
                  x2="620"
                  y2={y}
                  stroke="#e2e8f0"
                  strokeDasharray={price === 0 ? "0" : "4 5"}
                />
                <text
                  x="66"
                  y={y + 5}
                  textAnchor="end"
                  fontSize="13"
                  fill="#475569"
                >
                  ₹{price}
                </text>
              </g>
            );
          })}

          {/* Vertical gridlines and quantity labels */}
          {[0, 20, 40, 60, 80, 100, 120, 140, 160].map((quantity) => {
            const x = 80 + quantity * 3.375;
            return (
              <g key={`quantity-${quantity}`}>
                <line
                  x1={x}
                  y1="35"
                  x2={x}
                  y2="365"
                  stroke="#e2e8f0"
                  strokeDasharray={quantity === 0 ? "0" : "4 5"}
                />
                <text
                  x={x}
                  y="387"
                  textAnchor="middle"
                  fontSize="12"
                  fill="#475569"
                >
                  {quantity}
                </text>
              </g>
            );
          })}

          {/* Axes */}
          <line
            x1="80"
            y1="35"
            x2="80"
            y2="365"
            stroke="#334155"
            strokeWidth="2"
          />
          <line
            x1="80"
            y1="365"
            x2="620"
            y2="365"
            stroke="#334155"
            strokeWidth="2"
          />

          {/* Demand: (Q=20,P=100) to (Q=140,P=20) */}
          <path
            d="M 147.5 35 L 552.5 299"
            fill="none"
            stroke="#2563eb"
            strokeWidth="4"
            strokeLinecap="round"
          />

          {/* Supply: (Q=20,P=20) to (Q=140,P=100) */}
          <path
            d="M 147.5 299 L 552.5 35"
            fill="none"
            stroke="#059669"
            strokeWidth="4"
            strokeLinecap="round"
          />

          {/* Equilibrium guides: Q=80, P=60 */}
          <line
            x1="350"
            y1="167"
            x2="350"
            y2="365"
            stroke="#7c3aed"
            strokeWidth="1.8"
            strokeDasharray="6 5"
          />
          <line
            x1="80"
            y1="167"
            x2="350"
            y2="167"
            stroke="#7c3aed"
            strokeWidth="1.8"
            strokeDasharray="6 5"
          />

          {/* Equilibrium point */}
          <circle
            cx="350"
            cy="167"
            r="8"
            fill="#7c3aed"
            stroke="#ffffff"
            strokeWidth="3"
          />

          {/* Equilibrium label */}
          <rect
            x="363"
            y="126"
            width="165"
            height="30"
            rx="7"
            fill="#ede9fe"
          />
          <text
            x="445"
            y="145"
            textAnchor="middle"
            fontSize="13"
            fontWeight="700"
            fill="#5b21b6"
          >
            E: ₹60, 80 units
          </text>

          {/* Curve labels */}
          <rect x="498" y="260" width="105" height="27" rx="6" fill="#dbeafe" />
          <text
            x="550"
            y="278"
            textAnchor="middle"
            fontSize="13"
            fontWeight="700"
            fill="#1d4ed8"
          >
            Demand (D)
          </text>

          <rect x="498" y="50" width="105" height="27" rx="6" fill="#d1fae5" />
          <text
            x="550"
            y="68"
            textAnchor="middle"
            fontSize="13"
            fontWeight="700"
            fill="#047857"
          >
            Supply (S)
          </text>

          {/* Axis titles */}
          <text
            x="350"
            y="428"
            textAnchor="middle"
            fontSize="15"
            fontWeight="700"
            fill="#334155"
          >
            Quantity (Units)
          </text>
          <text
            x="20"
            y="200"
            textAnchor="middle"
            fontSize="15"
            fontWeight="700"
            fill="#334155"
            transform="rotate(-90 20 200)"
          >
            Price (₹ Per Unit)
          </text>
        </svg>
      </div>

      {/* Legend */}
      <div className="mt-4 flex flex-wrap justify-center gap-x-5 gap-y-3 text-sm">
        <span className="flex items-center gap-2 text-slate-600">
          <span className="h-1 w-6 rounded bg-blue-600" />
          Demand Curve
        </span>
        <span className="flex items-center gap-2 text-slate-600">
          <span className="h-1 w-6 rounded bg-emerald-600" />
          Supply Curve
        </span>
        <span className="flex items-center gap-2 text-slate-600">
          <span className="h-3 w-3 rounded-full bg-violet-700" />
          Equilibrium Point
        </span>
        <span className="flex items-center gap-2 text-slate-600">
          <span className="h-0 w-6 border-t-2 border-dashed border-violet-500" />
          Equilibrium Guides
        </span>
      </div>
    </div>

    {/* Equilibrium figures */}
    <div className="mt-6 grid gap-4 sm:grid-cols-3">
      <div className="rounded-2xl border border-violet-100 bg-violet-50 p-5">
        <p className="text-sm font-medium text-violet-800">Equilibrium Price</p>
        <p className="mt-2 text-3xl font-bold text-slate-950">₹60</p>
        <p className="mt-2 text-sm leading-5 text-slate-600">
          The price at which buyers' and sellers' plans match.
        </p>
      </div>

      <div className="rounded-2xl border border-blue-100 bg-blue-50 p-5">
        <p className="text-sm font-medium text-blue-800">
          Equilibrium Quantity
        </p>
        <p className="mt-2 text-3xl font-bold text-slate-950">80 Units</p>
        <p className="mt-2 text-sm leading-5 text-slate-600">
          The quantity demanded and supplied at ₹60.
        </p>
      </div>

      <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-5">
        <p className="text-sm font-medium text-emerald-800">
          Market Difference
        </p>
        <p className="mt-2 text-3xl font-bold text-slate-950">0 Units</p>
        <p className="mt-2 text-sm leading-5 text-slate-600">
          Quantity demanded (80) minus quantity supplied (80).
        </p>
      </div>
    </div>

    {/* Descriptive interpretation */}
    <div className="mt-7">
      <h3 className="text-lg font-bold text-slate-900">
        How To Read This Graph
      </h3>

      <div className="mt-4 grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-rose-100 bg-rose-50/70 p-4">
          <p className="font-bold text-rose-800">Below ₹60: Shortage</p>
          <p className="mt-2 text-sm leading-6 text-slate-700">
            At ₹40, quantity demanded is 120 units and quantity supplied is
            60 units. Shortage = 120 − 60 = 60 units. This can put upward
            pressure on price.
          </p>
        </div>

        <div className="rounded-2xl border border-violet-100 bg-violet-50/70 p-4">
          <p className="font-bold text-violet-800">At ₹60: Equilibrium</p>
          <p className="mt-2 text-sm leading-6 text-slate-700">
            Buyers demand 80 units and sellers supply 80 units. Since both
            quantities are equal, there is no shortage or surplus in this
            simplified schedule.
          </p>
        </div>

        <div className="rounded-2xl border border-amber-100 bg-amber-50/70 p-4">
          <p className="font-bold text-amber-800">Above ₹60: Surplus</p>
          <p className="mt-2 text-sm leading-6 text-slate-700">
            At ₹80, sellers supply 100 units but buyers demand only 40 units.
            Surplus = 100 − 40 = 60 units. This can put downward pressure on
            price.
          </p>
        </div>
      </div>
    </div>

    <div className="mt-6 rounded-xl border border-amber-100 bg-amber-50 p-4 text-sm leading-6 text-amber-900">
      <strong>Important:</strong> These are hypothetical teaching figures, not
      actual market data. The graph connects the illustrative demand and supply
      schedules to show why their intersection represents equilibrium.
    </div>
  </div>
</section>


        {/* Shortage and surplus */}
        <section id="shortage-surplus" className="scroll-mt-8">
          <SectionHeading
            number="03"
            eyebrow="Price Adjustment"
            title="Shortage Vs. Surplus"
            description="If the market price is different from the equilibrium price, the quantity buyers want may not match the quantity sellers offer."
          />

          <div className="grid gap-5 lg:grid-cols-3">
            {comparison.map((item) => (
              <ConceptCard key={item.title} item={item} />
            ))}
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-rose-100 bg-rose-50/70 p-5">
              <div className="flex items-center gap-2">
                <ArrowUp size={20} className="text-rose-700" />
                <h3 className="font-bold text-slate-900">Shortage Calculation</h3>
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-700">
                If customers want 120 units and sellers offer 60 units at the
                current price:
              </p>
              <p className="mt-3 rounded-xl bg-white p-3 font-bold text-rose-800">
                120 − 60 = 60 Units Short
              </p>
            </div>
            <div className="rounded-2xl border border-amber-100 bg-amber-50/70 p-5">
              <div className="flex items-center gap-2">
                <ArrowDown size={20} className="text-amber-700" />
                <h3 className="font-bold text-slate-900">Surplus Calculation</h3>
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-700">
                If sellers offer 100 units but customers want only 40 units:
              </p>
              <p className="mt-3 rounded-xl bg-white p-3 font-bold text-amber-800">
                100 − 40 = 60 Units Surplus
              </p>
            </div>
          </div>

          <p className="mt-5 text-sm leading-6 text-slate-600">
            In a flexible-price market, a shortage can put upward pressure on
            prices, while a surplus can put downward pressure on prices. These
            are tendencies, not guarantees: price controls, contracts,
            inventory, competition, and other market conditions can change the
            adjustment process.
          </p>
        </section>
<AdSlot />
        {/* Schedule */}
        <section id="schedule" className="scroll-mt-8">
          <SectionHeading
            number="04"
            eyebrow="Read The Numbers"
            title="A Simple Demand And Supply Schedule"
            description="This hypothetical schedule shows how quantity demanded and quantity supplied can change at different prices for the same product."
          />

          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
            <table className="w-full min-w-[520px] border-collapse text-left text-sm">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="px-5 py-4 font-semibold">Price Per Unit</th>
                  <th className="px-5 py-4 font-semibold">Quantity Demanded</th>
                  <th className="px-5 py-4 font-semibold">Quantity Supplied</th>
                  <th className="px-5 py-4 font-semibold">Market Condition</th>
                </tr>
              </thead>
              <tbody>
                {demandSchedule.map((item) => {
                  const balanced = item.demand === item.supply;
                  const shortage = item.demand > item.supply;
                  return (
                    <tr
                      key={item.price}
                      className={`border-t border-slate-100 ${
                        balanced ? "bg-emerald-50" : "bg-white"
                      }`}
                    >
                      <td className="px-5 py-4 font-bold text-slate-900">
                        ₹{item.price}
                      </td>
                      <td className="px-5 py-4 text-slate-700">{item.demand}</td>
                      <td className="px-5 py-4 text-slate-700">{item.supply}</td>
                      <td className="px-5 py-4">
                        <span
                          className={`rounded-full px-3 py-1 text-xs font-semibold ${
                            balanced
                              ? "bg-emerald-100 text-emerald-800"
                              : shortage
                                ? "bg-rose-100 text-rose-800"
                                : "bg-amber-100 text-amber-800"
                          }`}
                        >
                          {balanced
                            ? "Equilibrium"
                            : shortage
                              ? "Shortage"
                              : "Surplus"}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-blue-100 bg-blue-50 p-4">
              <p className="text-sm font-medium text-blue-800">
                Equilibrium Price
              </p>
              <p className="mt-2 text-2xl font-bold text-slate-950">₹60</p>
            </div>
            <div className="rounded-2xl border border-violet-100 bg-violet-50 p-4">
              <p className="text-sm font-medium text-violet-800">
                Equilibrium Quantity
              </p>
              <p className="mt-2 text-2xl font-bold text-slate-950">80 Units</p>
            </div>
            <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-4">
              <p className="text-sm font-medium text-emerald-800">
                Difference At Equilibrium
              </p>
              <p className="mt-2 text-2xl font-bold text-slate-950">0 Units</p>
            </div>
          </div>

          <p className="mt-4 text-sm leading-6 text-slate-500">
            The schedule is illustrative. The figures are designed to explain
            the concept and are not observed market prices or official data.
          </p>
        </section>


        {/* Case studies */}
        <section id="examples" className="scroll-mt-8">
          <SectionHeading
            number="05"
            eyebrow="Practical Indian Examples"
            title="Market Equilibrium In Everyday Life"
            description="Explore how demand and supply can interact in local markets. Every figure in these case studies is hypothetical and intended for learning, not a report of actual market conditions."
          />

          <div className="space-y-7">
            {marketCases.map((item) => (
              <MarketCaseStudy key={item.number} item={item} />
            ))}
          </div>
        </section>
<AdSlot />
        {/* Shifts */}
        <section id="shifts" className="scroll-mt-8">
          <SectionHeading
            number="06"
            eyebrow="Changes In The Market"
            title="What Can Change Market Equilibrium?"
            description="Equilibrium can change when factors other than the product's own price affect demand or supply."
          />

          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-blue-100 bg-blue-50/70 p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-xl bg-blue-100 p-3 text-blue-700">
                  <Users size={23} />
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  Factors That Increase Demand
                </h3>
              </div>
              <ul className="space-y-3 text-sm leading-6 text-slate-700">
                <li className="flex gap-2">
                  <CheckCircle2 size={17} className="mt-1 shrink-0 text-blue-700" />
                  More consumers enter the market.
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 size={17} className="mt-1 shrink-0 text-blue-700" />
                  Consumer incomes rise for normal goods.
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 size={17} className="mt-1 shrink-0 text-blue-700" />
                  A product becomes more popular or its season begins.
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 size={17} className="mt-1 shrink-0 text-blue-700" />
                  The price of a substitute rises, making this product more attractive.
                </li>
              </ul>
              <div className="mt-5 rounded-xl bg-white p-4">
                <p className="text-sm font-semibold text-blue-800">
                  Typical result when supply slopes upward
                </p>
                <p className="mt-1 text-sm text-slate-600">
                  Equilibrium price rises and quantity rises.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-emerald-100 bg-emerald-50/70 p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-xl bg-emerald-100 p-3 text-emerald-700">
                  <Package size={23} />
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  Factors That Increase Supply
                </h3>
              </div>
              <ul className="space-y-3 text-sm leading-6 text-slate-700">
                <li className="flex gap-2">
                  <CheckCircle2 size={17} className="mt-1 shrink-0 text-emerald-700" />
                  Better technology improves production.
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 size={17} className="mt-1 shrink-0 text-emerald-700" />
                  Input costs fall, making production cheaper.
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 size={17} className="mt-1 shrink-0 text-emerald-700" />
                  More producers enter the market.
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 size={17} className="mt-1 shrink-0 text-emerald-700" />
                  A favourable harvest increases available produce.
                </li>
              </ul>
              <div className="mt-5 rounded-xl bg-white p-4">
                <p className="text-sm font-semibold text-emerald-800">
                  Typical result when demand slopes downward
                </p>
                <p className="mt-1 text-sm text-slate-600">
                  Equilibrium price falls and quantity rises.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5">
            <div className="flex items-start gap-3">
              <AlertTriangle size={21} className="mt-0.5 shrink-0 text-amber-700" />
              <div>
                <h3 className="font-bold text-slate-900">
                  A Useful Distinction
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  A change in the product's own price usually causes a movement
                  along its demand or supply curve. A change in income,
                  preferences, input costs, technology, or the number of
                  participants can shift the entire demand or supply curve.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Importance */}
        <section id="importance" className="scroll-mt-8">
          <SectionHeading
            number="07"
            eyebrow="Why It Matters"
            title="Why Is Market Equilibrium Important?"
            description="The concept helps students, consumers, business owners, and policymakers understand price signals and market outcomes."
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: IndianRupee,
                title: "Price Decisions",
                text: "Businesses can consider customer demand and competing supply when setting prices.",
                color: "blue",
              },
              {
                icon: BarChart3,
                title: "Production Planning",
                text: "Producers can use demand estimates to reduce the risk of unsold stock or unmet demand.",
                color: "violet",
              },
              {
                icon: ShoppingBasket,
                title: "Consumer Choices",
                text: "Buyers can better understand why scarcity or abundant supply can affect prices.",
                color: "emerald",
              },
              {
                icon: Target,
                title: "Market Analysis",
                text: "Economists can study how taxes, subsidies, regulations, or changing costs affect market outcomes.",
                color: "amber",
              },
            ].map((item) => {
              const Icon = item.icon;
              const styles = colorStyles[item.color];
              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div className={`mb-4 inline-flex rounded-xl p-3 ${styles.icon}`}>
                    <Icon size={22} />
                  </div>
                  <h3 className="font-bold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Limits */}
        <section id="limitations" className="scroll-mt-8">
          <SectionHeading
            number="08"
            eyebrow="Real-World Context"
            title="Does Every Market Reach Equilibrium?"
            description="The model is useful, but actual markets can be more complicated than a simple demand-and-supply diagram."
          />

          <div className="grid gap-4 md:grid-cols-2">
            {[
              {
                title: "Prices May Not Adjust Immediately",
                text: "Contracts, government price controls, menu costs, and other rules can slow or prevent price changes.",
              },
              {
                title: "Information May Be Incomplete",
                text: "Buyers and sellers may not know all available prices, product qualities, or market conditions.",
              },
              {
                title: "Supply Can Take Time To Respond",
                text: "Farmers cannot instantly grow a new crop, and factories may need time to increase production.",
              },
              {
                title: "Other Factors Affect Outcomes",
                text: "Transport costs, product quality, market power, taxes, and external shocks can affect actual prices and quantities.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
              >
                <h3 className="font-bold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="scroll-mt-8">
          <SectionHeading
            number="09"
            eyebrow="Quick Revision"
            title="Frequently Asked Questions"
            description="Review the key definitions and rules of market equilibrium."
          />

          <div className="space-y-3">
            {[
              {
                q: "What is market equilibrium in simple words?",
                a: "Market equilibrium is the situation where the quantity buyers want to purchase equals the quantity sellers want to sell at a particular price.",
              },
              {
                q: "What is equilibrium price?",
                a: "Equilibrium price is the price at which quantity demanded equals quantity supplied under the given market conditions.",
              },
              {
                q: "What is equilibrium quantity?",
                a: "Equilibrium quantity is the amount bought and sold at the equilibrium price during the specified period.",
              },
              {
                q: "What happens when market price is below equilibrium?",
                a: "Quantity demanded generally exceeds quantity supplied, creating a shortage. In a flexible-price market, this can put upward pressure on price.",
              },
              {
                q: "What happens when market price is above equilibrium?",
                a: "Quantity supplied generally exceeds quantity demanded, creating a surplus. In a flexible-price market, this can put downward pressure on price.",
              },
              {
                q: "What happens when demand increases?",
                a: "If supply slopes upward and other conditions remain unchanged, an increase in demand generally raises both equilibrium price and equilibrium quantity.",
              },
              {
                q: "What happens when supply increases?",
                a: "If demand slopes downward and other conditions remain unchanged, an increase in supply generally lowers equilibrium price and raises equilibrium quantity.",
              },
              {
                q: "Is market equilibrium always fair?",
                a: "Not necessarily. Equilibrium describes where planned demand and supply match under given conditions. It does not by itself tell us whether the outcome is fair, affordable, or socially desirable.",
              },
            ].map((item) => (
              <details
                key={item.q}
                className="group rounded-2xl border border-slate-200 bg-white p-5 open:border-blue-200 open:bg-blue-50/40"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-slate-900">
                  <span>{item.q}</span>
                  <CircleHelp
                    size={19}
                    className="shrink-0 text-blue-700 transition group-open:rotate-12"
                  />
                </summary>
                <p className="mt-3 pr-7 text-sm leading-7 text-slate-600">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* Summary */}
        <section className="overflow-hidden rounded-3xl bg-gradient-to-br from-blue-700 via-indigo-700 to-violet-800 p-6 text-white sm:p-9">
          <div className="flex items-start gap-4">
            <div className="rounded-2xl bg-white/15 p-3">
              <Activity size={28} />
            </div>
            <div>
              <h2 className="text-2xl font-bold sm:text-3xl">
                The Main Idea To Remember
              </h2>
              <p className="mt-4 max-w-3xl leading-7 text-blue-50">
                Market equilibrium occurs where quantity demanded equals
                quantity supplied. A shortage can create upward price pressure,
                while a surplus can create downward pressure. Changes in demand
                or supply can establish a new equilibrium.
              </p>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-white/20 bg-white/10 p-5">
            <p className="text-sm font-bold uppercase tracking-wider text-blue-100">
              Remember This Formula
            </p>
            <p className="mt-2 text-xl font-bold sm:text-2xl">
              Equilibrium: Qd = Qs
            </p>
            <p className="mt-2 text-sm text-blue-100">
              Qd = Quantity Demanded · Qs = Quantity Supplied
            </p>
          </div>
        </section>

         
      </div>
    </main>
  );
}
