
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  CircleHelp,
  Factory,
  IndianRupee,
  Lightbulb,
  Package,
  ShoppingBasket,
  TrendingUp,
  Truck,
} from "lucide-react";
import AdSlot from "../../../../components/AdSlot";

export const metadata = {
  title: "Law of Supply | Definition, Schedule, Curve & Examples",
  description:
    "Learn the law of supply in economics with its definition, assumptions, supply schedule, upward-sloping curve, Indian market examples, exceptions, and factors affecting supply.",
  alternates: {
    canonical: "https://www.pricetag.co.in/economics/basics/law-of-supply",
  },
};

const supplyData = [
  { price: 10, quantity: 20 },
  { price: 20, quantity: 40 },
  { price: 30, quantity: 60 },
  { price: 40, quantity: 80 },
  { price: 50, quantity: 100 },
];

const examples = [
  {
    title: "Vegetable Farming",
    icon: ShoppingBasket,
    color: "green",
    situation:
      "Suppose the market price of tomatoes rises while other conditions remain unchanged.",
    response:
      "Farmers may find it more worthwhile to harvest, sort, and bring additional tomatoes to market.",
    note: "The quantity supplied may increase at the higher price.",
  },
  {
    title: "Clothing Production",
    icon: Factory,
    color: "blue",
    situation:
      "A garment manufacturer receives a higher selling price for a particular type of shirt.",
    response:
      "If the higher price makes extra production profitable, the manufacturer may schedule more shifts or use available production capacity.",
    note: "The response depends on labour, materials, capacity, and production time.",
  },
  {
    title: "Packaged Food",
    icon: Package,
    color: "orange",
    situation:
      "The market price of a packaged snack increases, but input costs and production technology stay the same.",
    response:
      "Manufacturers may choose to produce and offer more packets because the return from supplying them has increased.",
    note: "A higher price creates an incentive to supply more, other things being equal.",
  },
];

const colorStyles = {
  green: {
    bg: "bg-emerald-50",
    border: "border-emerald-200",
    icon: "bg-emerald-100 text-emerald-700",
    accent: "text-emerald-700",
  },
  blue: {
    bg: "bg-blue-50",
    border: "border-blue-200",
    icon: "bg-blue-100 text-blue-700",
    accent: "text-blue-700",
  },
  orange: {
    bg: "bg-orange-50",
    border: "border-orange-200",
    icon: "bg-orange-100 text-orange-700",
    accent: "text-orange-700",
  },
};

function SectionHeading({ eyebrow, title, description, id }) {
  return (
    <div id={id} className="mb-6 scroll-mt-24">
      {eyebrow && (
        <p className="mb-2 text-sm font-bold uppercase tracking-wider text-blue-700">
          {eyebrow}
        </p>
      )}
      <h2 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 max-w-3xl leading-7 text-slate-600">
          {description}
        </p>
      )}
    </div>
  );
}

function SupplyCurve() {
  const x = (quantity) => 90 + (quantity / 110) * 470;
  const y = (price) => 280 - (price / 60) * 220;

  const curvePoints = supplyData
    .map((point) => `${x(point.quantity)},${y(point.price)}`)
    .join(" ");

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-6">
      <div className="mb-4">
        <h3 className="text-lg font-bold text-slate-950">
          The upward-sloping supply curve
        </h3>
        <p className="mt-1 text-sm leading-6 text-slate-600">
          This illustrative curve shows a positive relationship between price
          and quantity supplied, assuming other factors remain unchanged.
        </p>
      </div>

      <div className="overflow-x-auto">
        <svg
          viewBox="0 0 640 350"
          role="img"
          aria-label="An upward-sloping supply curve. Price is on the vertical axis and quantity supplied is on the horizontal axis. Higher prices correspond to larger quantities supplied."
          className="mx-auto block w-full min-w-[320px] max-w-2xl"
        >
          <defs>
            <linearGradient id="supplyArea" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="0.24" />
            </linearGradient>
          </defs>

          {[60, 100, 140, 180, 220, 260].map((gridY) => (
            <line
              key={gridY}
              x1="80"
              y1={gridY}
              x2="580"
              y2={gridY}
              stroke="#e2e8f0"
              strokeDasharray="5 5"
            />
          ))}

          {[150, 240, 330, 420, 510].map((gridX) => (
            <line
              key={gridX}
              x1={gridX}
              y1="40"
              x2={gridX}
              y2="280"
              stroke="#f1f5f9"
            />
          ))}

          <path
            d={`M80 40 V280 H580`}
            fill="none"
            stroke="#64748b"
            strokeWidth="1.8"
          />

          <path
            d={`M${x(20)} ${y(10)} ${supplyData
              .slice(1)
              .map((point) => `L${x(point.quantity)} ${y(point.price)}`)
              .join(" ")} L${x(100)} 280 L${x(20)} 280 Z`}
            fill="url(#supplyArea)"
          />

          <polyline
            points={curvePoints}
            fill="none"
            stroke="#059669"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {supplyData.map((point) => (
            <g key={point.price}>
              <circle
                cx={x(point.quantity)}
                cy={y(point.price)}
                r="5.5"
                fill="#059669"
                stroke="#ffffff"
                strokeWidth="2"
              />
              <text
                x={x(point.quantity)}
                y={y(point.price) - 12}
                fontSize="11"
                fill="#047857"
                textAnchor="middle"
              >
                {`₹${point.price}`}
              </text>
            </g>
          ))}

          <text x="80" y="23" fontSize="13" fill="#334155">
            Price (₹)
          </text>
          <text
            x="330"
            y="326"
            fontSize="13"
            fill="#334155"
            textAnchor="middle"
          >
            Quantity supplied (units)
          </text>

          <text x="80" y="298" fontSize="11" fill="#64748b" textAnchor="middle">
            0
          </text>
          <text x="175" y="298" fontSize="11" fill="#64748b" textAnchor="middle">
            20
          </text>
          <text x="260" y="298" fontSize="11" fill="#64748b" textAnchor="middle">
            40
          </text>
          <text x="345" y="298" fontSize="11" fill="#64748b" textAnchor="middle">
            60
          </text>
          <text x="430" y="298" fontSize="11" fill="#64748b" textAnchor="middle">
            80
          </text>
          <text x="515" y="298" fontSize="11" fill="#64748b" textAnchor="middle">
            100
          </text>

          <text x="67" y="284" fontSize="11" fill="#64748b" textAnchor="end">
            0
          </text>
          <text x="67" y="210" fontSize="11" fill="#64748b" textAnchor="end">
            20
          </text>
          <text x="67" y="137" fontSize="11" fill="#64748b" textAnchor="end">
            40
          </text>
          <text x="67" y="63" fontSize="11" fill="#64748b" textAnchor="end">
            60
          </text>
        </svg>
      </div>

      <div className="mt-3 grid gap-3 sm:grid-cols-3">
        <div className="rounded-xl bg-blue-50 p-3">
          <p className="font-bold text-blue-800">Lower price</p>
          <p className="mt-1 text-sm leading-6 text-slate-600">
            Producers generally have less incentive to supply additional units.
          </p>
        </div>
        <div className="rounded-xl bg-emerald-50 p-3">
          <p className="font-bold text-emerald-800">Higher price</p>
          <p className="mt-1 text-sm leading-6 text-slate-600">
            Producers generally have more incentive to supply additional units.
          </p>
        </div>
        <div className="rounded-xl bg-violet-50 p-3">
          <p className="font-bold text-violet-800">Other things equal</p>
          <p className="mt-1 text-sm leading-6 text-slate-600">
            The relationship assumes other supply conditions have not changed.
          </p>
        </div>
      </div>
    </div>
  );
}

function ExampleCard({ example }) {
  const Icon = example.icon;
  const style = colorStyles[example.color];

  return (
    <article className={`overflow-hidden rounded-2xl border ${style.border} bg-white`}>
      <div className={`flex items-start gap-4 p-5 ${style.bg}`}>
        <div className={`rounded-xl p-3 ${style.icon}`}>
          <Icon size={25} />
        </div>
        <h3 className="pt-1 text-lg font-bold text-slate-950">
          {example.title}
        </h3>
      </div>

      <div className="space-y-4 p-5">
        <div>
          <p className="text-sm font-bold text-slate-900">Situation</p>
          <p className="mt-1 text-sm leading-6 text-slate-600">
            {example.situation}
          </p>
        </div>

        <div>
          <p className="text-sm font-bold text-slate-900">Possible response</p>
          <p className="mt-1 text-sm leading-6 text-slate-600">
            {example.response}
          </p>
        </div>

        <div className={`rounded-xl border ${style.border} ${style.bg} p-4`}>
          <div className="flex items-start gap-2">
            <CheckCircle2
              size={19}
              className={`mt-0.5 shrink-0 ${style.accent}`}
            />
            <p className="text-sm leading-6 text-slate-700">{example.note}</p>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function LawOfSupplyPage() {
  return (
    <main className="min-h-screen bg-white text-slate-800 p-5">
      <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-br from-emerald-50 via-white to-blue-50">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-3 py-1.5 text-sm text-emerald-800">
                <TrendingUp size={16} />
                Economics · Market Behaviour
              </div>

              <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Law of Supply
                <span className="mt-2 block bg-gradient-to-r from-emerald-700 via-teal-700 to-blue-700 bg-clip-text text-transparent">
                  Price and Quantity Supplied
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                The law of supply explains why producers generally offer more
                of a product for sale when its price rises and less when its
                price falls, assuming other factors remain unchanged.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="#definition"
                  className="inline-flex items-center gap-2 rounded-xl bg-emerald-700 px-5 py-3 text-white transition hover:bg-emerald-800"
                >
                  Learn the concept <ArrowRight size={17} />
                </a>
                <a
                  href="#supply-curve"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-slate-800 transition hover:bg-slate-50"
                >
                  View supply curve
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-emerald-100 bg-white p-5 shadow-sm sm:p-7">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-emerald-100 p-3 text-emerald-700">
                  <BarChart3 size={27} />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Core idea</p>
                  <p className="text-xl font-bold text-slate-950">
                    Higher price, more supplied
                  </p>
                </div>
              </div>

              <div className="my-6 space-y-4 rounded-2xl bg-slate-50 p-5">
                <div>
                  <div className="mb-2 flex items-center justify-between gap-3">
                    <span className="text-sm text-slate-600">Price: ₹20</span>
                    <span className="text-sm font-bold text-blue-700">
                      40 units
                    </span>
                  </div>
                  <div className="h-3 overflow-hidden rounded-full bg-blue-100">
                    <div className="h-full w-[40%] rounded-full bg-blue-500" />
                  </div>
                </div>

                <div>
                  <div className="mb-2 flex items-center justify-between gap-3">
                    <span className="text-sm text-slate-600">Price: ₹40</span>
                    <span className="text-sm font-bold text-emerald-700">
                      80 units
                    </span>
                  </div>
                  <div className="h-3 overflow-hidden rounded-full bg-emerald-100">
                    <div className="h-full w-[80%] rounded-full bg-emerald-500" />
                  </div>
                </div>

                <p className="text-xs leading-5 text-slate-500">
                  Illustrative quantities, assuming other supply conditions
                  remain unchanged.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <Lightbulb className="mt-0.5 shrink-0 text-amber-500" size={21} />
                <p className="text-sm leading-6 text-slate-600">
                  A higher market price can make additional production more
                  attractive to sellers, but their response depends on costs
                  and production capacity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        

        <section className="mb-12">
          <SectionHeading
            eyebrow="Definition"
            title="What Is the Law of Supply?"
            description="The law of supply states that, other things being equal, the quantity supplied of a goods generally increases when its price increases and decreases when its price decreases."
            id="definition"
          />

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
              <div className="mb-4 inline-flex rounded-xl bg-emerald-100 p-3 text-emerald-700">
                <TrendingUp size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-950">
                Positive relationship
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Price and quantity supplied generally move in the same
                direction along a supply curve.
              </p>
            </div>

            <div className="rounded-2xl border border-blue-200 bg-blue-50 p-5">
              <div className="mb-4 inline-flex rounded-xl bg-blue-100 p-3 text-blue-700">
                <IndianRupee size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-950">
                Producer incentive
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                A higher selling price can make supplying extra units more
                worthwhile for producers.
              </p>
            </div>

            <div className="rounded-2xl border border-violet-200 bg-violet-50 p-5">
              <div className="mb-4 inline-flex rounded-xl bg-violet-100 p-3 text-violet-700">
                <Factory size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-950">
                Other factors unchanged
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                The basic law assumes costs, technology, taxes, and other
                supply conditions remain the same.
              </p>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <p className="leading-7 text-slate-700">
              <span className="font-bold text-slate-950">In simple words:</span>{" "}
              if the price of a product rises and production conditions do not
              change, sellers generally have an incentive to supply more of it.
              The law describes a general relationship, not a guarantee that
              every seller can immediately increase production.
            </p>
          </div>
        </section>

        <AdSlot />

        <section className="my-12">
          <SectionHeading
            eyebrow="Illustrative data"
            title="Law of Supply Schedule"
            description="A supply schedule is a table showing how much of a product sellers are willing and able to supply at different prices during a specified period."
            id="supply-schedule"
          />

          <div className="overflow-hidden rounded-2xl border border-slate-200">
            <div className="bg-gradient-to-r from-emerald-700 to-teal-700 p-5 text-white">
              <h3 className="text-lg font-bold">Example: Supply of a product</h3>
              <p className="mt-1 text-sm text-emerald-50">
                Quantities are hypothetical and represent units supplied per day.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[420px] border-collapse text-left text-sm">
                <thead>
                  <tr className="bg-slate-100 text-slate-900">
                    <th className="p-4 font-bold">Price per unit</th>
                    <th className="p-4 font-bold">Quantity supplied per day</th>
                    <th className="p-4 font-bold">Observation</th>
                  </tr>
                </thead>
                <tbody>
                  {supplyData.map((item, index) => (
                    <tr
                      key={item.price}
                      className={`border-t border-slate-200 ${
                        index % 2 === 1 ? "bg-slate-50" : "bg-white"
                      }`}
                    >
                      <td className="p-4 text-slate-800">₹{item.price}</td>
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <span className="w-8 text-slate-800">
                            {item.quantity}
                          </span>
                          <div className="h-2.5 w-28 overflow-hidden rounded-full bg-emerald-100">
                            <div
                              className="h-full rounded-full bg-emerald-500"
                              style={{ width: `${item.quantity}%` }}
                            />
                          </div>
                        </div>
                      </td>
                      <td className="p-4 text-slate-600">
                        {index === 0
                          ? "Lowest listed price"
                          : index === supplyData.length - 1
                            ? "Highest listed price"
                            : "Higher price, more supplied"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-blue-200 bg-blue-50 p-5">
              <p className="text-sm text-blue-800">At ₹20</p>
              <p className="mt-2 text-2xl font-bold text-slate-950">
                40 units
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Sellers are willing and able to supply 40 units per day in
                this example.
              </p>
            </div>
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
              <p className="text-sm text-emerald-800">At ₹40</p>
              <p className="mt-2 text-2xl font-bold text-slate-950">
                80 units
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                At the higher price, the quantity supplied increases to 80
                units per day, with other factors unchanged.
              </p>
            </div>
          </div>
        </section>

        <section className="my-12">
          <SectionHeading
            eyebrow="Graphical explanation"
            title="Law of Supply Curve"
            description="The supply curve usually slopes upward from left to right. Price is shown on the vertical axis, while quantity supplied is shown on the horizontal axis."
            id="supply-curve"
          />

          <SupplyCurve />

          <div className="mt-5 rounded-2xl border border-amber-200 bg-amber-50 p-5">
            <h3 className="font-bold text-slate-950">
              How to read the graph
            </h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              Moving upward and to the right along the same supply curve
              represents a higher price and a larger quantity supplied. This
              is a movement along the curve, assuming the other determinants
              of supply have not changed.
            </p>
          </div>
        </section>

        <AdSlot />

        <section className="my-12">
          <SectionHeading
            eyebrow="Everyday examples"
            title="Examples of the Law of Supply"
            description="These examples show how a change in selling price can affect a producer's willingness to supply, assuming other relevant conditions remain unchanged."
            id="examples"
          />

          <div className="grid gap-6 lg:grid-cols-2">
            {examples.map((example) => (
              <ExampleCard key={example.title} example={example} />
            ))}
          </div>
        </section>

        <section className="my-12">
          <SectionHeading
            eyebrow="Important distinction"
            title="Movement Along the Curve vs Shift in Supply"
            description="A change in the product's own price usually causes movement along the existing supply curve. A change in another determinant of supply can shift the entire curve."
            id="movement-vs-shift"
          />

          <div className="grid gap-5 md:grid-cols-2">
            <div className="overflow-hidden rounded-2xl border border-blue-200">
              <div className="bg-blue-50 p-5">
                <div className="mb-3 inline-flex rounded-xl bg-blue-100 p-3 text-blue-700">
                  <TrendingUp size={24} />
                </div>
                <h3 className="text-lg font-bold text-slate-950">
                  Movement along the curve
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Caused by a change in the product's own price, with other
                  factors held constant.
                </p>
              </div>
              <div className="p-5">
                <p className="text-sm font-bold text-slate-900">Example</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  If the price of a shirt rises from ₹200 to ₹250 and other
                  conditions remain unchanged, the quantity supplied may
                  increase along the same supply curve.
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-violet-200">
              <div className="bg-violet-50 p-5">
                <div className="mb-3 inline-flex rounded-xl bg-violet-100 p-3 text-violet-700">
                  <ArrowRight size={24} />
                </div>
                <h3 className="text-lg font-bold text-slate-950">
                  Shift in the supply curve
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Caused by a change in another factor affecting production
                  or sellers' willingness to supply.
                </p>
              </div>
              <div className="p-5">
                <p className="text-sm font-bold text-slate-900">Example</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  If fabric becomes cheaper, clothing manufacturers may be
                  willing to supply more shirts at each given price. This can
                  shift the supply curve to the right.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-5 overflow-hidden rounded-2xl border border-slate-200">
            <div className="bg-slate-100 p-4">
              <h3 className="font-bold text-slate-950">
                Factors that can shift supply
              </h3>
            </div>
            <div className="grid gap-px bg-slate-200 sm:grid-cols-2">
              {[
                {
                  title: "Input prices",
                  description:
                    "Cheaper raw materials may increase supply; more expensive inputs may reduce it.",
                  color: "bg-blue-50",
                },
                {
                  title: "Technology",
                  description:
                    "More efficient production methods can enable firms to supply more.",
                  color: "bg-emerald-50",
                },
                {
                  title: "Taxes and subsidies",
                  description:
                    "Taxes can raise production costs, while subsidies can lower some costs.",
                  color: "bg-orange-50",
                },
                {
                  title: "Number of sellers",
                  description:
                    "More sellers in a market can increase total market supply.",
                  color: "bg-violet-50",
                },
                {
                  title: "Expectations",
                  description:
                    "Expectations about future prices can influence when producers sell or stock products.",
                  color: "bg-amber-50",
                },
                {
                  title: "Weather and disruptions",
                  description:
                    "Weather, transport problems, or shortages can affect how much can reach the market.",
                  color: "bg-cyan-50",
                },
              ].map((factor) => (
                <div key={factor.title} className={`${factor.color} p-4`}>
                  <h4 className="font-bold text-slate-950">{factor.title}</h4>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    {factor.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="my-12">
          <SectionHeading
            eyebrow="Assumptions"
            title="Assumptions Behind the Law of Supply"
            description="The standard law describes the usual relationship between price and quantity supplied under specified conditions."
            id="assumptions"
          />

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                title: "Production costs remain unchanged",
                description:
                  "Raw material, labour, and other input costs are assumed not to change.",
              },
              {
                title: "Technology stays the same",
                description:
                  "The production process and available technology are assumed to remain unchanged.",
              },
              {
                title: "Other market conditions remain stable",
                description:
                  "The basic relationship is examined without unrelated changes that would shift supply.",
              },
              {
                title: "Producers respond to incentives",
                description:
                  "Sellers generally seek to make production and sales decisions that suit their economic interests.",
              },
            ].map((item, index) => (
              <div
                key={item.title}
                className="flex items-start gap-3 rounded-2xl border border-slate-200 p-5"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-sm font-bold text-emerald-800">
                  {index + 1}
                </div>
                <div>
                  <h3 className="font-bold text-slate-950">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
<AdSlot />
        <section className="my-12">
          <SectionHeading
            eyebrow="Limits of the rule"
            title="Can Supply Always Increase When Price Rises?"
            description="The law of supply describes a general tendency, but real production decisions can be affected by time, capacity, and unusual circumstances."
            id="limitations"
          />

          <div className="space-y-4">
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="font-bold text-slate-950">
                Limited production capacity
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                A factory already operating at full capacity may be unable to
                increase output immediately, even when the market price rises.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="font-bold text-slate-950">
                Time needed to increase production
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Farmers cannot instantly grow more crops after a price
                increase. Some goods require time to manufacture, grow, or
                transport.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="font-bold text-slate-950">
                Perishable or fixed-supply goods
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                The quantity available for sale may be difficult to change in
                the short term for goods such as fresh produce already
                harvested, or items with a fixed immediate supply.
              </p>
            </div>
          </div>

          <p className="mt-4 text-sm leading-6 text-slate-600">
            These situations do not automatically disprove the basic law.
            They show why the time period, capacity, and assumptions matter
            when applying it to a real market.
          </p>
        </section>

        <section className="my-12">
          <SectionHeading
            eyebrow="Frequently asked questions"
            title="Law of Supply FAQs"
            id="faqs"
          />

          <div className="space-y-4">
            {[
              [
                "What is the law of supply in simple words?",
                "It states that sellers generally supply more of a product when its price rises and less when its price falls, assuming other relevant conditions remain unchanged.",
              ],
              [
                "Why does the supply curve slope upward?",
                "A higher price can make additional production more worthwhile. Therefore, producers are generally willing to supply a larger quantity at higher prices, other things being equal.",
              ],
              [
                "What is a supply schedule?",
                "A supply schedule is a table showing the quantities producers are willing and able to supply at different prices during a particular period.",
              ],
              [
                "What is the difference between supply and quantity supplied?",
                "Supply describes the relationship between prices and quantities offered for sale. Quantity supplied is the specific amount offered at one particular price.",
              ],
              [
                "What causes a shift in supply?",
                "Factors such as input prices, technology, taxes, subsidies, the number of sellers, and production conditions can shift the supply curve.",
              ],
              [
                "What does ceteris paribus mean in the law of supply?",
                "It means other things being equal. The law examines the effect of a price change while other relevant factors are assumed to remain unchanged.",
              ],
              [
                "Is the law of supply always true in every situation?",
                "It describes a general economic relationship. Capacity limits, time delays, fixed short-run availability, and other conditions can affect how quickly or strongly supply responds.",
              ],
            ].map(([question, answer]) => (
              <details
                key={question}
                className="group rounded-xl border border-slate-200 bg-white p-5"
              >
                <summary className="cursor-pointer list-none pr-6 text-base font-bold text-slate-950 marker:hidden">
                  <span className="flex items-center justify-between gap-4">
                    {question}
                    <CircleHelp
                      size={19}
                      className="shrink-0 text-blue-700 transition group-open:rotate-12"
                    />
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {answer}
                </p>
              </details>
            ))}
          </div>
        </section>

        <section className="my-12 rounded-3xl border border-emerald-200 bg-gradient-to-br from-emerald-50 via-white to-blue-50 p-6 sm:p-8">
          <div className="flex items-start gap-4">
            <div className="rounded-2xl bg-emerald-100 p-3 text-emerald-700">
              <CheckCircle2 size={27} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-950">
                Key Takeaway
              </h2>
              <p className="mt-3 leading-7 text-slate-700">
                The law of supply explains the general positive relationship
                between a product's price and the quantity supplied. A higher
                price usually encourages producers to supply more, provided
                other conditions remain unchanged. Supply schedules and supply
                curves help illustrate this relationship.
              </p>
            </div>
          </div>
        </section>

       
      </div>
    </main>
  );
}
