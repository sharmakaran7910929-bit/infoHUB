
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Calculator,
  CheckCircle2,
  CircleHelp,
  IndianRupee,
  Lightbulb,
  Package,
  ShoppingBag,
  Store,
  TrendingUp,
  Wallet,
} from "lucide-react";
import AdSlot from "../../../../components/AdSlot";
import RelatedTopics from "../../../../components/ContinueReading";
export const metadata = {
  title: "Marginal Cost | Formula, Calculation & Examples",
  description:
    "Learn marginal cost, its formula, step-by-step calculations, real-world business examples, and how businesses use marginal cost to make production decisions.",
  alternates: {
    canonical: "https://www.pricetag.co.in/economics/basics/marginal-cost",
  },
};

const examples = [
  {
    title: "Bakery: Producing One More Cake",
    icon: Store,
    color: "orange",
    description:
      "A bakery increases production from 20 cakes to 21 cakes in one day.",
    before: 4000,
    after: 4180,
    beforeUnits: 20,
    afterUnits: 21,
    extraCost: 180,
    details: [
      ["Additional ingredients", "₹100"],
      ["Extra electricity and gas", "₹30"],
      ["Additional packaging", "₹50"],
    ],
    conclusion:
      "The 21st cake adds ₹180 to total production cost. Its marginal cost is ₹180.",
  },
  {
    title: "T-Shirt Printing: Extra Order",
    icon: ShoppingBag,
    color: "blue",
    description:
      "A printing business increases an order from 100 shirts to 120 shirts.",
    before: 12000,
    after: 14600,
    beforeUnits: 100,
    afterUnits: 120,
    extraCost: 2600,
    details: [
      ["Additional blank shirts", "₹1,800"],
      ["Printing materials", "₹500"],
      ["Extra packaging and power", "₹300"],
    ],
    conclusion:
      "The additional 20 shirts cost ₹2,600, giving an average marginal cost of ₹130 per extra shirt.",
  },
  {
    title: "Furniture Workshop: More Racks",
    icon: Package,
    color: "violet",
    description:
      "A workshop increases its daily production from 30 metal racks to 40.",
    before: 18000,
    after: 22500,
    beforeUnits: 30,
    afterUnits: 40,
    extraCost: 4500,
    details: [
      ["Additional metal", "₹3,000"],
      ["Welding materials and power", "₹900"],
      ["Extra finishing materials", "₹600"],
    ],
    conclusion:
      "The extra 10 racks cost ₹4,500, so the average marginal cost is ₹450 per additional rack.",
  },
];

const colorStyles = {
  orange: {
    bg: "bg-orange-50",
    border: "border-orange-200",
    icon: "bg-orange-100 text-orange-700",
    accent: "text-orange-700",
    bar: "bg-orange-500",
  },
  blue: {
    bg: "bg-blue-50",
    border: "border-blue-200",
    icon: "bg-blue-100 text-blue-700",
    accent: "text-blue-700",
    bar: "bg-blue-500",
  },
  violet: {
    bg: "bg-violet-50",
    border: "border-violet-200",
    icon: "bg-violet-100 text-violet-700",
    accent: "text-violet-700",
    bar: "bg-violet-500",
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

function CostExample({ example }) {
  const Icon = example.icon;
  const style = colorStyles[example.color];
  const extraUnits = example.afterUnits - example.beforeUnits;
  const marginalCostPerUnit = example.extraCost / extraUnits;

  return (
    <article className={`overflow-hidden rounded-2xl border ${style.border} bg-white`}>
      <div className={`flex items-start gap-4 p-5 ${style.bg}`}>
        <div className={`rounded-xl p-3 ${style.icon}`}>
          <Icon size={25} />
        </div>
        <div>
          <h3 className="text-lg font-bold text-slate-950">{example.title}</h3>
          <p className="mt-1 text-sm leading-6 text-slate-600">
            {example.description}
          </p>
        </div>
      </div>

      <div className="space-y-5 p-5">
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-xl border border-slate-200 p-3">
            <p className="text-sm text-slate-500">
              Original total cost
            </p>
            <p className="mt-1 text-xl font-bold text-slate-900">
              ₹{example.before.toLocaleString("en-IN")}
            </p>
            <p className="mt-1 text-xs text-slate-500">
              {example.beforeUnits} units
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 p-3">
            <p className="text-sm text-slate-500">
              New total cost
            </p>
            <p className="mt-1 text-xl font-bold text-slate-900">
              ₹{example.after.toLocaleString("en-IN")}
            </p>
            <p className="mt-1 text-xs text-slate-500">
              {example.afterUnits} units
            </p>
          </div>
        </div>

        <div className="rounded-xl bg-slate-50 p-4">
          <p className="text-sm text-slate-600">
            Change in total cost
          </p>
          <p className={`mt-1 text-2xl font-bold ${style.accent}`}>
            ₹{example.extraCost.toLocaleString("en-IN")}
          </p>
          <p className="mt-1 text-sm text-slate-600">
            Change in output: {extraUnits}{" "}
            {extraUnits === 1 ? "unit" : "units"}
          </p>
          <div className="my-3 border-t border-slate-200" />
          <p className="text-sm text-slate-500">
            Calculation
          </p>
          <p className="mt-1 text-base text-slate-900">
            ₹{example.extraCost.toLocaleString("en-IN")} ÷ {extraUnits} ={" "}
            <span className="font-bold">
              ₹{marginalCostPerUnit.toLocaleString("en-IN", {
                maximumFractionDigits: 2,
              })}
            </span>{" "}
            per additional unit
          </p>
        </div>

        <div>
          <p className="mb-3 text-sm font-bold text-slate-900">
            Where the extra cost comes from
          </p>
          <div className="space-y-3">
            {example.details.map(([label, amount]) => (
              <div
                key={label}
                className="flex items-center justify-between gap-4 text-sm"
              >
                <span className="text-slate-600">{label}</span>
                <span className="text-slate-900">{amount}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={`rounded-xl border ${style.border} ${style.bg} p-4`}>
          <div className="flex items-start gap-2">
            <CheckCircle2 className={`mt-0.5 shrink-0 ${style.accent}`} size={19} />
            <p className="text-sm leading-6 text-slate-700">
              {example.conclusion}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

function MarginalCostDiagram() {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 sm:p-6">
      <div className="mb-4">
        <h3 className="text-lg font-bold text-slate-900">
          How marginal cost can change with output
        </h3>
        <p className="mt-1 text-sm leading-6 text-slate-600">
          This illustrative curve shows marginal cost falling at first and then
          rising as production expands. Actual business cost patterns vary.
        </p>
      </div>

      <div className="overflow-x-auto">
        <svg
          viewBox="0 0 640 360"
          role="img"
          aria-label="Illustrative U-shaped marginal cost curve. Marginal cost falls as production increases, reaches a low point, and then rises."
          className="mx-auto block w-full min-w-[320px] max-w-2xl"
        >
          <defs>
            <linearGradient id="mcArea" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#818cf8" stopOpacity="0.32" />
              <stop offset="100%" stopColor="#818cf8" stopOpacity="0.03" />
            </linearGradient>
          </defs>

          {[65, 115, 165, 215, 265].map((y) => (
            <line
              key={y}
              x1="78"
              y1={y}
              x2="590"
              y2={y}
              stroke="#e2e8f0"
              strokeDasharray="5 5"
            />
          ))}

          {[150, 250, 350, 450, 550].map((x) => (
            <line
              key={x}
              x1={x}
              y1="40"
              x2={x}
              y2="285"
              stroke="#f1f5f9"
            />
          ))}

          <path
            d="M78 40 V285 H590"
            fill="none"
            stroke="#64748b"
            strokeWidth="1.8"
          />

          <path
            d="M100 85 C155 145 205 220 300 230 C390 238 445 175 565 70 L565 285 L100 285 Z"
            fill="url(#mcArea)"
          />

          <path
            d="M100 85 C155 145 205 220 300 230 C390 238 445 175 565 70"
            fill="none"
            stroke="#4f46e5"
            strokeWidth="4"
            strokeLinecap="round"
          />

          <circle cx="300" cy="230" r="7" fill="#4f46e5" stroke="white" strokeWidth="3" />

          <text x="88" y="24" fontSize="13" fill="#334155">
            Marginal cost (₹)
          </text>
          <text x="330" y="330" fontSize="13" fill="#334155" textAnchor="middle">
            Quantity produced
          </text>

          <text x="116" y="65" fontSize="12" fill="#4338ca">
            Falling cost
          </text>
          <text x="300" y="255" fontSize="12" fill="#4338ca" textAnchor="middle">
            Lowest point
          </text>
          <text x="455" y="115" fontSize="12" fill="#4338ca">
            Rising cost
          </text>

          <text x="63" y="289" fontSize="11" fill="#64748b" textAnchor="end">
            Low
          </text>
          <text x="63" y="70" fontSize="11" fill="#64748b" textAnchor="end">
            High
          </text>
          <text x="100" y="305" fontSize="11" fill="#64748b" textAnchor="middle">
            Low
          </text>
          <text x="565" y="305" fontSize="11" fill="#64748b" textAnchor="middle">
            High
          </text>
        </svg>
      </div>

      <div className="mt-3 grid gap-3 sm:grid-cols-3">
        <div className="rounded-xl bg-blue-50 p-3">
          <p className="font-bold text-blue-800">1. Falling</p>
          <p className="mt-1 text-sm leading-6 text-slate-600">
            Better use of equipment or workers may reduce the extra cost.
          </p>
        </div>
        <div className="rounded-xl bg-violet-50 p-3">
          <p className="font-bold text-violet-800">2. Lowest point</p>
          <p className="mt-1 text-sm leading-6 text-slate-600">
            Production may be operating efficiently at this output level.
          </p>
        </div>
        <div className="rounded-xl bg-orange-50 p-3">
          <p className="font-bold text-orange-800">3. Rising</p>
          <p className="mt-1 text-sm leading-6 text-slate-600">
            Overtime, congestion, or limited capacity may increase extra costs.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function MarginalCostPage() {
  return (
    <main className="min-h-screen bg-white text-slate-800 p-5">
      <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-br from-blue-50 via-white to-violet-50">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-3 py-1.5 text-sm text-blue-800">
                <Calculator size={16} />
                Economics · Business Costs
              </div>

              <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Marginal Cost
                <span className="mt-2 block bg-gradient-to-r from-blue-700 via-indigo-700 to-violet-700 bg-clip-text text-transparent">
                  The Cost Of Producing One More Unit
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                Marginal cost tells a business how much its total production
                cost changes when it makes additional products. It helps
                businesses evaluate extra orders, production levels, and pricing
                decisions.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="#formula"
                  className="inline-flex items-center gap-2 rounded-xl bg-blue-700 px-5 py-3 text-white transition hover:bg-blue-800"
                >
                  Learn the formula <ArrowRight size={17} />
                </a>
                <a
                  href="#examples"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-slate-800 transition hover:bg-slate-50"
                >
                  See examples
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-blue-100 bg-white p-5 shadow-sm sm:p-7">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-indigo-100 p-3 text-indigo-700">
                  <BarChart3 size={27} />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Core idea</p>
                  <p className="text-xl font-bold text-slate-950">
                    Additional cost
                  </p>
                </div>
              </div>

              <div className="my-6 rounded-2xl bg-gradient-to-br from-blue-50 to-violet-50 p-5">
                <p className="text-sm text-slate-600">
                  Example: total cost increases from ₹1,000 to ₹1,120 when
                  output increases from 10 to 11 units.
                </p>
                <div className="mt-5 grid grid-cols-2 gap-3">
                  <div className="rounded-xl bg-white p-3">
                    <p className="text-sm text-slate-500">Extra cost</p>
                    <p className="mt-1 text-2xl font-bold text-blue-700">₹120</p>
                  </div>
                  <div className="rounded-xl bg-white p-3">
                    <p className="text-sm text-slate-500">Extra units</p>
                    <p className="mt-1 text-2xl font-bold text-violet-700">1</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Lightbulb className="mt-0.5 shrink-0 text-amber-500" size={21} />
                <p className="text-sm leading-6 text-slate-600">
                  In this example, the marginal cost of the 11th unit is ₹120.
                  The figures are illustrative.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        

        <section className="mb-12">
          <SectionHeading
            eyebrow="The concept"
            title="What Is Marginal Cost?"
            description="Marginal cost is the change in total production cost caused by producing additional output. It can be calculated for one extra unit or as an average across several additional units."
            id="meaning"
          />

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-blue-200 bg-blue-50 p-5">
              <div className="mb-4 inline-flex rounded-xl bg-blue-100 p-3 text-blue-700">
                <IndianRupee size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-950">
                Additional cost
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Measures the extra production cost associated with more output.
              </p>
            </div>

            <div className="rounded-2xl border border-violet-200 bg-violet-50 p-5">
              <div className="mb-4 inline-flex rounded-xl bg-violet-100 p-3 text-violet-700">
                <Package size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-950">
                Output matters
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Compare costs at two different production levels to calculate
                the change.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
              <div className="mb-4 inline-flex rounded-xl bg-emerald-100 p-3 text-emerald-700">
                <TrendingUp size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-950">
                Supports decisions
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Helps assess whether producing more units is financially
                worthwhile.
              </p>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <p className="leading-7 text-slate-700">
              <span className="font-bold text-slate-950">Important:</span>{" "}
              marginal cost is not necessarily the selling price of a product.
              It is a production-cost measure. A business also considers demand,
              revenue, available capacity, and other costs when deciding whether
              to expand output.
            </p>
          </div>
        </section>

        <AdSlot />

        <section className="my-12">
          <SectionHeading
            eyebrow="Calculation"
            title="Marginal Cost Formula"
            description="The formula compares the change in total cost with the change in quantity produced."
            id="formula"
          />

          <div className="overflow-hidden rounded-2xl border border-indigo-200">
            <div className="bg-gradient-to-r from-blue-700 to-violet-700 p-6 text-white sm:p-8">
              <p className="text-sm text-blue-100">The formula</p>
              <div className="mt-3 flex flex-wrap items-center gap-3 text-2xl font-bold sm:text-3xl">
                <span>MC =</span>
                <span className="inline-flex flex-col items-center text-center">
                  <span className="border-b-2 border-white/80 px-3 pb-2">
                    Change in total cost
                  </span>
                  <span className="px-3 pt-2">Change in quantity</span>
                </span>
              </div>
            </div>

            <div className="grid gap-0 bg-white sm:grid-cols-2">
              <div className="border-b border-slate-200 p-5 sm:border-b-0 sm:border-r">
                <h3 className="font-bold text-slate-950">Step 1: Find the cost change</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Subtract the original total cost from the new total cost.
                </p>
                <div className="mt-3 rounded-xl bg-blue-50 p-3 text-blue-900">
                  ₹1,120 − ₹1,000 = ₹120
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-slate-950">Step 2: Find the output change</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Subtract the original quantity from the new quantity.
                </p>
                <div className="mt-3 rounded-xl bg-violet-50 p-3 text-violet-900">
                  11 − 10 = 1 unit
                </div>
              </div>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 shrink-0 text-emerald-700" size={22} />
              <div>
                <h3 className="font-bold text-slate-950">Final calculation</h3>
                <p className="mt-1 leading-7 text-slate-700">
                  MC = ₹120 ÷ 1 ={" "}
                  <span className="font-bold text-emerald-800">₹120 per unit</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="my-12">
          <SectionHeading
            eyebrow="Worked examples"
            title="Marginal Cost Examples in Business"
            description="These illustrative examples show how businesses can calculate marginal cost using changes in total cost and output. The figures are examples, not reported market prices."
            id="examples"
          />

          <div className="grid gap-6 lg:grid-cols-2">
            {examples.map((example) => (
              <CostExample key={example.title} example={example} />
            ))}
          </div>
        </section>

        <AdSlot />

        <section className="my-12">
          <SectionHeading
            eyebrow="Visual explanation"
            title="Why Marginal Cost May Rise or Fall"
            description="Marginal cost can change as production expands. A business may initially use its existing equipment more efficiently, but later face overtime, capacity limits, or bottlenecks."
            id="diagram"
          />
          <MarginalCostDiagram />
        </section>

        <section className="my-12">
          <SectionHeading
            eyebrow="Comparison"
            title="Marginal Cost vs Average Cost"
            description="Both measures help businesses understand production costs, but they answer different questions."
            id="comparison"
          />

          <div className="overflow-x-auto rounded-2xl border border-slate-200">
            <table className="w-full min-w-[600px] border-collapse text-left text-sm">
              <thead>
                <tr className="bg-slate-100 text-slate-900">
                  <th className="p-4 font-bold">Basis</th>
                  <th className="p-4 font-bold">Marginal cost</th>
                  <th className="p-4 font-bold">Average cost</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-200">
                  <td className="p-4 text-slate-900">Meaning</td>
                  <td className="p-4 text-slate-600">
                    Change in total cost divided by change in output.
                  </td>
                  <td className="p-4 text-slate-600">
                    Total cost divided by total output.
                  </td>
                </tr>
                <tr className="border-t border-slate-200 bg-slate-50">
                  <td className="p-4 text-slate-900">Main question</td>
                  <td className="p-4 text-slate-600">
                    How much does additional production cost?
                  </td>
                  <td className="p-4 text-slate-600">
                    What is the cost per unit across all units?
                  </td>
                </tr>
                <tr className="border-t border-slate-200">
                  <td className="p-4 text-slate-900">Formula</td>
                  <td className="p-4 text-slate-600">
                    Change in total cost ÷ change in quantity
                  </td>
                  <td className="p-4 text-slate-600">
                    Total cost ÷ total quantity
                  </td>
                </tr>
                <tr className="border-t border-slate-200 bg-slate-50">
                  <td className="p-4 text-slate-900">Example use</td>
                  <td className="p-4 text-slate-600">
                    Evaluating an additional order.
                  </td>
                  <td className="p-4 text-slate-600">
                    Calculating the overall production cost per unit.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-blue-200 bg-blue-50 p-5">
              <p className="text-sm text-blue-800">Average cost example</p>
              <p className="mt-2 text-2xl font-bold text-slate-950">
                ₹1,000 ÷ 10 = ₹100
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                If producing 10 units costs ₹1,000 in total, average cost is
                ₹100 per unit.
              </p>
            </div>
            <div className="rounded-2xl border border-violet-200 bg-violet-50 p-5">
              <p className="text-sm text-violet-800">Marginal cost example</p>
              <p className="mt-2 text-2xl font-bold text-slate-950">
                ₹120 ÷ 1 = ₹120
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                If the 11th unit increases total cost by ₹120, its marginal
                cost is ₹120.
              </p>
            </div>
          </div>
        </section>

        <section className="my-12">
          <SectionHeading
            eyebrow="Business decisions"
            title="How Businesses Use Marginal Cost"
            description="Marginal cost is useful when comparing the extra cost of production with the expected additional revenue and other practical constraints."
            id="uses"
          />

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 p-5">
              <div className="mb-3 inline-flex rounded-xl bg-emerald-100 p-3 text-emerald-700">
                <Wallet size={23} />
              </div>
              <h3 className="text-lg font-bold text-slate-950">
                Assessing an extra order
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                A business can estimate the additional production cost before
                accepting an order. It should also check the offered price,
                delivery expenses, available capacity, and any extra fixed
                costs.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-5">
              <div className="mb-3 inline-flex rounded-xl bg-blue-100 p-3 text-blue-700">
                <BarChart3 size={23} />
              </div>
              <h3 className="text-lg font-bold text-slate-950">
                Planning output
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Tracking marginal cost across different output levels can help
                a business identify when production is becoming more expensive.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-5">
              <div className="mb-3 inline-flex rounded-xl bg-orange-100 p-3 text-orange-700">
                <IndianRupee size={23} />
              </div>
              <h3 className="text-lg font-bold text-slate-950">
                Evaluating a special price
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                A manufacturer may compare an additional order's revenue with
                its extra costs. The decision must also account for other
                expenses and the effect on existing customers.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-5">
              <div className="mb-3 inline-flex rounded-xl bg-violet-100 p-3 text-violet-700">
                <TrendingUp size={23} />
              </div>
              <h3 className="text-lg font-bold text-slate-950">
                Understanding capacity limits
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                If overtime or extra machinery is needed, marginal cost may
                rise. A business can compare these extra costs with the
                expected benefit of higher output.
              </p>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-amber-200 bg-amber-50 p-5">
            <h3 className="font-bold text-slate-950">
              A simple decision example
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              Suppose an additional unit costs ₹120 to produce and can be sold
              for ₹170. The difference is ₹50 before considering other
              additional expenses, taxes, capacity costs, and any impact on
              other sales. This does not automatically mean the unit will
              generate ₹50 in final profit.
            </p>
          </div>
        </section>
<AdSlot />
        <section className="my-12">
          <SectionHeading
            eyebrow="Common errors"
            title="Mistakes to Avoid"
            description="Use consistent cost and output figures when calculating marginal cost."
            id="mistakes"
          />

          <div className="space-y-3">
            {[
              [
                "Using total cost instead of the change in cost",
                "Subtract the original total cost from the new total cost before applying the formula.",
              ],
              [
                "Dividing by total output instead of the output change",
                "Marginal cost uses the change in quantity. Dividing total cost by total quantity calculates average cost.",
              ],
              [
                "Assuming marginal cost never changes",
                "Extra production may become cheaper or more expensive depending on efficiency, input prices, and capacity.",
              ],
              [
                "Treating marginal cost as the selling price",
                "Marginal cost measures production cost, while selling price is the amount charged to the customer.",
              ],
            ].map(([title, description]) => (
              <div
                key={title}
                className="flex items-start gap-3 rounded-xl border border-slate-200 p-4"
              >
                <CircleHelp className="mt-0.5 shrink-0 text-blue-700" size={21} />
                <div>
                  <h3 className="font-bold text-slate-950">{title}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="my-12">
          <SectionHeading
            eyebrow="Frequently asked questions"
            title="Marginal Cost FAQs"
            id="faqs"
          />

          <div className="space-y-4">
            {[
              [
                "What is marginal cost in simple words?",
                "Marginal cost is the additional cost of increasing production. It shows how much total cost changes when a business produces more units.",
              ],
              [
                "What is the formula for marginal cost?",
                "Marginal cost equals the change in total cost divided by the change in quantity produced.",
              ],
              [
                "Can marginal cost be zero?",
                "It can be zero in particular situations if additional output does not change measured total cost. In practice, businesses should check whether any extra materials, energy, labour, or other costs have been omitted.",
              ],
              [
                "Is marginal cost the same as average cost?",
                "No. Marginal cost measures the cost change associated with additional output. Average cost is total cost divided by total output.",
              ],
              [
                "Why can marginal cost increase?",
                "Marginal cost may rise when a business reaches capacity limits, needs overtime, experiences bottlenecks, or pays more for additional inputs.",
              ],
              [
                "How does marginal cost help a business?",
                "It helps businesses evaluate additional production, compare extra costs with expected revenue, and plan output. It is one factor in a decision, not a guarantee of profit.",
              ],
            ].map(([question, answer]) => (
              <details
                key={question}
                className="group rounded-xl border border-slate-200 bg-white p-5"
              >
                <summary className="cursor-pointer list-none pr-6 text-base font-bold text-slate-950 marker:hidden">
                  <span className="flex items-center justify-between gap-4">
                    {question}
                    <span className="text-xl text-blue-700 transition group-open:rotate-45">
                      +
                    </span>
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {answer}
                </p>
              </details>
            ))}
          </div>
        </section>

        <section className="my-12 rounded-3xl border border-blue-200 bg-gradient-to-br from-blue-50 via-white to-violet-50 p-6 sm:p-8">
          <div className="flex items-start gap-4">
            <div className="rounded-2xl bg-blue-100 p-3 text-blue-700">
              <CheckCircle2 size={27} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-950">
                Key Takeaway
              </h2>
              <p className="mt-3 leading-7 text-slate-700">
                Marginal cost measures the change in total production cost
                relative to the change in output. Calculate it by comparing two
                production levels, then use the result alongside expected
                revenue, other expenses, and capacity constraints to make
                better business decisions.
              </p>
            </div>
          </div>
        </section>

     
              </div>
    </main>
  );
}
