
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  CircleHelp,
  Coffee,
  Gift,
  Lightbulb,
  ShoppingBag,
  Smile,
  TrendingDown,
} from "lucide-react";
import AdSlot from "../../../../components/AdSlot";

export const metadata = {
  title: "Law of Diminishing Marginal Utility | Meaning & Examples",
  description:
    "Understand the law of diminishing marginal utility with its definition, assumptions, utility schedule, graph, numerical examples, limitations, and everyday applications.",
  alternates: {
    canonical:
      "https://www.pricetag.co.in/economics/basics/law-of-diminishing-marginal-utility",
  },
};

const utilityData = [
  { units: 0, total: 0, marginal: null },
  { units: 1, total: 20, marginal: 20 },
  { units: 2, total: 36, marginal: 16 },
  { units: 3, total: 48, marginal: 12 },
  { units: 4, total: 56, marginal: 8 },
  { units: 5, total: 60, marginal: 4 },
  { units: 6, total: 60, marginal: 0 },
  { units: 7, total: 56, marginal: -4 },
];

const examples = [
  {
    title: "Drinking Cups of Chai",
    icon: Coffee,
    color: "orange",
    situation:
      "Imagine someone who is thirsty and begins drinking cups of chai one after another.",
    steps: [
      "The first cup provides substantial satisfaction.",
      "The second cup is enjoyable, but may add less satisfaction than the first.",
      "After several cups, another cup may provide little extra satisfaction or even cause discomfort.",
    ],
    takeaway:
      "As consumption increases, the additional satisfaction from each cup may decline.",
  },
  {
    title: "Eating Slices of Pizza",
    icon: ShoppingBag,
    color: "blue",
    situation:
      "A hungry customer orders several slices of pizza for a meal.",
    steps: [
      "The first slice satisfies strong hunger.",
      "The next slices continue to provide satisfaction, but the extra benefit may become smaller.",
      "When the customer is full, another slice may add almost no satisfaction.",
    ],
    takeaway:
      "The usefulness of an additional slice depends on how much the customer has already eaten.",
  },
  {
    title: "Buying Festival Gifts",
    icon: Gift,
    color: "violet",
    situation:
      "A customer buys several similar decorative items for a festival.",
    steps: [
      "The first item may meet an important need.",
      "The second item may be useful for another room or family member.",
      "Many more identical items may add progressively less satisfaction.",
    ],
    takeaway:
      "The extra benefit of similar items can decline as a person's need is increasingly satisfied.",
  },
];

const colorStyles = {
  orange: {
    bg: "bg-orange-50",
    border: "border-orange-200",
    icon: "bg-orange-100 text-orange-700",
    accent: "text-orange-700",
  },
  blue: {
    bg: "bg-blue-50",
    border: "border-blue-200",
    icon: "bg-blue-100 text-blue-700",
    accent: "text-blue-700",
  },
  violet: {
    bg: "bg-violet-50",
    border: "border-violet-200",
    icon: "bg-violet-100 text-violet-700",
    accent: "text-violet-700",
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

function UtilityGraph() {
  const chart = [
    { units: 1, total: 20, marginal: 20 },
    { units: 2, total: 36, marginal: 16 },
    { units: 3, total: 48, marginal: 12 },
    { units: 4, total: 56, marginal: 8 },
    { units: 5, total: 60, marginal: 4 },
    { units: 6, total: 60, marginal: 0 },
    { units: 7, total: 56, marginal: -4 },
  ];

  const x = (units) => 85 + ((units - 1) / 6) * 460;
  const yTotal = (total) => 250 - (total / 70) * 190;
  const yMarginal = (marginal) => 250 - ((marginal + 5) / 30) * 190;

  const totalPoints = chart
    .map((item) => `${x(item.units)},${yTotal(item.total)}`)
    .join(" ");

  const marginalPoints = chart
    .map((item) => `${x(item.units)},${yMarginal(item.marginal)}`)
    .join(" ");

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-6">
      <div className="mb-4">
        <h3 className="text-lg font-bold text-slate-950">
          How total and marginal utility change
        </h3>
        <p className="mt-1 text-sm leading-6 text-slate-600">
          This illustrative graph uses the utility schedule below. Total
          utility eventually reaches a maximum, while marginal utility falls
          as more units are consumed.
        </p>
      </div>

      <div className="mb-4 flex flex-wrap gap-4 text-sm">
        <span className="inline-flex items-center gap-2 text-blue-800">
          <span className="h-3 w-3 rounded-full bg-blue-600" />
          Total utility
        </span>
        <span className="inline-flex items-center gap-2 text-violet-800">
          <span className="h-3 w-3 rounded-full bg-violet-600" />
          Marginal utility
        </span>
      </div>

      <div className="overflow-x-auto">
        <svg
          viewBox="0 0 620 330"
          role="img"
          aria-label="Illustrative graph of total utility rising before reaching a maximum and declining, while marginal utility steadily decreases and becomes negative."
          className="mx-auto block w-full min-w-[320px] max-w-2xl"
        >
          {[60, 105, 150, 195, 240].map((gridY) => (
            <line
              key={gridY}
              x1="70"
              y1={gridY}
              x2="570"
              y2={gridY}
              stroke="#e2e8f0"
              strokeDasharray="5 5"
            />
          ))}

          {[85, 162, 238, 315, 392, 468, 545].map((gridX) => (
            <line
              key={gridX}
              x1={gridX}
              y1="45"
              x2={gridX}
              y2="250"
              stroke="#f1f5f9"
            />
          ))}

          <path
            d="M70 45 V250 H570"
            fill="none"
            stroke="#64748b"
            strokeWidth="1.7"
          />

          <polyline
            points={totalPoints}
            fill="none"
            stroke="#2563eb"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          <polyline
            points={marginalPoints}
            fill="none"
            stroke="#7c3aed"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {chart.map((item) => (
            <g key={item.units}>
              <circle
                cx={x(item.units)}
                cy={yTotal(item.total)}
                r="4.5"
                fill="#2563eb"
                stroke="white"
                strokeWidth="1.5"
              />
              <circle
                cx={x(item.units)}
                cy={yMarginal(item.marginal)}
                r="4.5"
                fill="#7c3aed"
                stroke="white"
                strokeWidth="1.5"
              />
              <text
                x={x(item.units)}
                y="270"
                fontSize="11"
                textAnchor="middle"
                fill="#64748b"
              >
                {item.units}
              </text>
            </g>
          ))}

          <text x="72" y="25" fontSize="12" fill="#334155">
            Utility (illustrative units)
          </text>
          <text x="320" y="305" fontSize="12" fill="#334155" textAnchor="middle">
            Units consumed
          </text>

          <text x="61" y="254" fontSize="10" fill="#64748b" textAnchor="end">
            0
          </text>
          <text x="61" y="199" fontSize="10" fill="#64748b" textAnchor="end">
            20
          </text>
          <text x="61" y="154" fontSize="10" fill="#64748b" textAnchor="end">
            40
          </text>
          <text x="61" y="109" fontSize="10" fill="#64748b" textAnchor="end">
            60
          </text>

          <text x="478" y="85" fontSize="11" fill="#1d4ed8">
            Total utility
          </text>
          <text x="410" y="220" fontSize="11" fill="#6d28d9">
            Marginal utility
          </text>
        </svg>
      </div>

      <div className="mt-3 grid gap-3 sm:grid-cols-3">
        <div className="rounded-xl bg-blue-50 p-3">
          <p className="font-bold text-blue-800">Total utility rises</p>
          <p className="mt-1 text-sm leading-6 text-slate-600">
            Additional units can continue to add satisfaction, but at a
            diminishing rate.
          </p>
        </div>
        <div className="rounded-xl bg-emerald-50 p-3">
          <p className="font-bold text-emerald-800">Marginal utility is zero</p>
          <p className="mt-1 text-sm leading-6 text-slate-600">
            In this example, the sixth unit adds no extra utility and total
            utility reaches its maximum.
          </p>
        </div>
        <div className="rounded-xl bg-violet-50 p-3">
          <p className="font-bold text-violet-800">Marginal utility is negative</p>
          <p className="mt-1 text-sm leading-6 text-slate-600">
            The seventh unit reduces total utility in this illustrative
            schedule.
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
        <p className="text-sm leading-6 text-slate-600">
          {example.situation}
        </p>

        <div>
          <p className="mb-3 text-sm font-bold text-slate-900">
            How satisfaction may change
          </p>
          <ol className="space-y-3">
            {example.steps.map((step, index) => (
              <li key={step} className="flex items-start gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-sm text-slate-700 ring-1 ring-slate-200">
                  {index + 1}
                </span>
                <p className="text-sm leading-6 text-slate-600">{step}</p>
              </li>
            ))}
          </ol>
        </div>

        <div className={`rounded-xl border ${style.border} ${style.bg} p-4`}>
          <div className="flex items-start gap-2">
            <CheckCircle2
              size={19}
              className={`mt-0.5 shrink-0 ${style.accent}`}
            />
            <p className="text-sm leading-6 text-slate-700">
              {example.takeaway}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function LawOfDiminishingMarginalUtilityPage() {
  return (
    <main className="min-h-screen bg-white text-slate-800">
      <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-br from-violet-50 via-white to-blue-50">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white px-3 py-1.5 text-sm text-violet-800">
                <TrendingDown size={16} />
                Economics · Consumer Behaviour
              </div>

              <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Law of Diminishing Marginal Utility
                <span className="mt-3 block bg-gradient-to-r from-violet-700 via-blue-700 to-cyan-700 bg-clip-text text-3xl text-transparent sm:text-4xl lg:text-5xl">
                  Why Extra Satisfaction Declines
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                The law explains why each additional unit of the same product
                may provide less extra satisfaction than the previous one,
                when a person consumes more of it over a period of time.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="#definition"
                  className="inline-flex items-center gap-2 rounded-xl bg-violet-700 px-5 py-3 text-white transition hover:bg-violet-800"
                >
                  Learn the concept <ArrowRight size={17} />
                </a>
                <a
                  href="#utility-schedule"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-slate-800 transition hover:bg-slate-50"
                >
                  See the table
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-violet-100 bg-white p-5 shadow-sm sm:p-7">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-violet-100 p-3 text-violet-700">
                  <Smile size={27} />
                </div>
                <div>
                  <p className="text-sm text-slate-500">The main idea</p>
                  <p className="text-xl font-bold text-slate-950">
                    Less extra satisfaction
                  </p>
                </div>
              </div>

              <div className="my-6 rounded-2xl bg-slate-50 p-5">
                <p className="text-sm leading-6 text-slate-600">
                  Imagine eating slices of pizza when you are hungry. Each
                  additional slice may satisfy you less than the previous one.
                </p>

                <div className="mt-5 space-y-3">
                  {[
                    { label: "First slice", width: "100%", color: "bg-blue-500" },
                    { label: "Second slice", width: "75%", color: "bg-violet-500" },
                    { label: "Third slice", width: "50%", color: "bg-orange-500" },
                    { label: "Fourth slice", width: "25%", color: "bg-rose-500" },
                  ].map((item) => (
                    <div key={item.label}>
                      <div className="mb-1 flex justify-between gap-3 text-sm">
                        <span className="text-slate-600">{item.label}</span>
                        <span className="text-slate-500">
                          Extra satisfaction
                        </span>
                      </div>
                      <div className="h-3 overflow-hidden rounded-full bg-slate-200">
                        <div
                          className={`h-full rounded-full ${item.color}`}
                          style={{ width: item.width }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <p className="mt-3 text-xs leading-5 text-slate-500">
                  Conceptual illustration only. Satisfaction is subjective and
                  these bars are not measured consumer data.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <Lightbulb className="mt-0.5 shrink-0 text-amber-500" size={21} />
                <p className="text-sm leading-6 text-slate-600">
                  The law concerns marginal utility—the additional satisfaction
                  from one more unit—not necessarily the total satisfaction
                  from all units combined.
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
            title="What Is the Law of Diminishing Marginal Utility?"
            description="The law of diminishing marginal utility states that, as a consumer consumes more successive units of the same good during a given period, the additional satisfaction from each extra unit tends to decrease, assuming relevant conditions remain unchanged."
            id="definition"
          />

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-blue-200 bg-blue-50 p-5">
              <div className="mb-4 inline-flex rounded-xl bg-blue-100 p-3 text-blue-700">
                <ShoppingBag size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-950">
                More consumption
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                A consumer uses or consumes additional units of the same good.
              </p>
            </div>

            <div className="rounded-2xl border border-violet-200 bg-violet-50 p-5">
              <div className="mb-4 inline-flex rounded-xl bg-violet-100 p-3 text-violet-700">
                <TrendingDown size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-950">
                Extra utility declines
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Each successive unit generally adds less satisfaction than
                the previous one.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
              <div className="mb-4 inline-flex rounded-xl bg-emerald-100 p-3 text-emerald-700">
                <CheckCircle2 size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-950">
                Total utility can rise
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Total satisfaction may keep increasing even while each extra
                unit adds less than the previous one.
              </p>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <p className="leading-7 text-slate-700">
              <span className="font-bold text-slate-950">In simple words:</span>{" "}
              the first unit may satisfy a strong need, while the next unit
              satisfies a smaller remaining need. This is a general economic
              principle, not a claim that every person experiences exactly the
              same level of satisfaction.
            </p>
          </div>
        </section>

        <AdSlot />

        <section className="my-12">
          <SectionHeading
            eyebrow="Key terms"
            title="Total Utility vs Marginal Utility"
            description="Understanding the difference between total utility and marginal utility is essential for learning this law."
            id="utility-types"
          />

          <div className="grid gap-5 md:grid-cols-2">
            <div className="overflow-hidden rounded-2xl border border-blue-200">
              <div className="bg-blue-50 p-5">
                <h3 className="text-xl font-bold text-slate-950">
                  Total Utility (TU)
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  The total satisfaction a consumer receives from consuming
                  all the units of a good.
                </p>
              </div>
              <div className="p-5">
                <p className="text-sm text-slate-500">Illustrative example</p>
                <p className="mt-2 text-2xl font-bold text-blue-700">
                  20 + 16 + 12 = 48
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  If the first three units provide 20, 16, and 12 utility
                  units respectively, total utility is 48 utility units.
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-violet-200">
              <div className="bg-violet-50 p-5">
                <h3 className="text-xl font-bold text-slate-950">
                  Marginal Utility (MU)
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  The change in total utility resulting from consuming one
                  additional unit.
                </p>
              </div>
              <div className="p-5">
                <p className="text-sm text-slate-500">Formula</p>
                <p className="mt-2 text-2xl font-bold text-violet-700">
                  MU = Change in TU
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  When one extra unit increases total utility from 36 to 48,
                  its marginal utility is 12 utility units.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-amber-200 bg-amber-50 p-5">
            <h3 className="font-bold text-slate-950">
              Remember the difference
            </h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              Total utility measures overall satisfaction, while marginal
              utility measures the additional satisfaction from the next unit.
              Diminishing marginal utility does not mean total utility must
              immediately fall.
            </p>
          </div>
        </section>

        <section className="my-12">
          <SectionHeading
            eyebrow="Numerical example"
            title="Utility Schedule: A Worked Example"
            description="The following hypothetical schedule shows how satisfaction changes as a person consumes successive units of a product."
            id="utility-schedule"
          />

          <div className="overflow-hidden rounded-2xl border border-slate-200">
            <div className="bg-gradient-to-r from-blue-700 to-violet-700 p-5 text-white">
              <h3 className="text-lg font-bold">
                Utility from consuming units of a good
              </h3>
              <p className="mt-1 text-sm text-blue-100">
                Utility values are illustrative units, not rupee amounts.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] border-collapse text-left text-sm">
                <thead>
                  <tr className="bg-slate-100 text-slate-900">
                    <th className="p-4 font-bold">Units consumed</th>
                    <th className="p-4 font-bold">Total utility (TU)</th>
                    <th className="p-4 font-bold">Marginal utility (MU)</th>
                    <th className="p-4 font-bold">Interpretation</th>
                  </tr>
                </thead>
                <tbody>
                  {utilityData.map((item, index) => (
                    <tr
                      key={item.units}
                      className={`border-t border-slate-200 ${
                        index % 2 === 0 ? "bg-white" : "bg-slate-50"
                      }`}
                    >
                      <td className="p-4 text-slate-800">{item.units}</td>
                      <td className="p-4 text-slate-800">{item.total}</td>
                      <td className="p-4">
                        {item.marginal === null ? (
                          <span className="text-slate-400">—</span>
                        ) : (
                          <span
                            className={
                              item.marginal > 0
                                ? "text-blue-700"
                                : item.marginal === 0
                                  ? "text-emerald-700"
                                  : "text-rose-700"
                            }
                          >
                            {item.marginal}
                          </span>
                        )}
                      </td>
                      <td className="p-4 text-slate-600">
                        {item.units === 0
                          ? "No consumption"
                          : item.marginal > 0
                            ? "Extra satisfaction"
                            : item.marginal === 0
                              ? "No extra satisfaction"
                              : "Total utility falls"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-5 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-blue-200 bg-blue-50 p-5">
              <p className="text-sm text-blue-800">Third unit</p>
              <p className="mt-2 text-2xl font-bold text-slate-950">
                MU = 12
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Total utility rises from 36 to 48.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
              <p className="text-sm text-emerald-800">Sixth unit</p>
              <p className="mt-2 text-2xl font-bold text-slate-950">
                MU = 0
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Total utility remains at 60 in this example.
              </p>
            </div>

            <div className="rounded-2xl border border-rose-200 bg-rose-50 p-5">
              <p className="text-sm text-rose-800">Seventh unit</p>
              <p className="mt-2 text-2xl font-bold text-slate-950">
                MU = −4
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Total utility falls from 60 to 56.
              </p>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-slate-200 bg-white p-5">
            <h3 className="font-bold text-slate-950">
              Step-by-step calculation
            </h3>
            <p className="mt-2 leading-7 text-slate-600">
              Marginal utility of the third unit = total utility after three
              units − total utility after two units.
            </p>
            <div className="mt-3 rounded-xl bg-violet-50 p-4 text-lg text-violet-900">
              MU = 48 − 36 = 12 utility units
            </div>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              The extra satisfaction from the third unit is 12 units, lower
              than the 16 units added by the second unit. This illustrates
              diminishing marginal utility.
            </p>
          </div>
        </section>

        <AdSlot />

        <section className="my-12">
          <SectionHeading
            eyebrow="Visual explanation"
            title="Graph of Diminishing Marginal Utility"
            description="The graph illustrates the relationship between consumption, total utility, and marginal utility using the same hypothetical schedule."
            id="utility-graph"
          />
          <UtilityGraph />
        </section>

        <section className="my-12">
          <SectionHeading
            eyebrow="Everyday applications"
            title="Examples of Diminishing Marginal Utility"
            description="The law can help explain common consumption choices, although individual preferences and circumstances vary."
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
            eyebrow="Conditions"
            title="Assumptions of the Law"
            description="Economics textbooks commonly explain this law under a set of simplifying assumptions."
            id="assumptions"
          />

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                title: "Same type of good",
                description:
                  "The units consumed are treated as similar in quality and size.",
                color: "bg-blue-50",
              },
              {
                title: "Consumption over a relevant period",
                description:
                  "Units are consumed within a period where preferences and needs have not fundamentally changed.",
                color: "bg-violet-50",
              },
              {
                title: "Preferences remain stable",
                description:
                  "The consumer's tastes and preferences are assumed not to change during the comparison.",
                color: "bg-emerald-50",
              },
              {
                title: "Successive consumption",
                description:
                  "The units are consumed in succession rather than after a major change in the consumer's circumstances.",
                color: "bg-orange-50",
              },
              {
                title: "Rational choice",
                description:
                  "The consumer is assumed to make choices that broadly reflect their preferences and perceived satisfaction.",
                color: "bg-cyan-50",
              },
              {
                title: "Other factors remain stable",
                description:
                  "The example assumes that factors affecting satisfaction, such as context and the person's condition, remain broadly unchanged.",
                color: "bg-rose-50",
              },
            ].map((item) => (
              <div
                key={item.title}
                className={`rounded-2xl border border-slate-200 ${item.color} p-5`}
              >
                <h3 className="font-bold text-slate-950">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>
<AdSlot/>
        <section className="my-12">
          <SectionHeading
            eyebrow="Understanding the limits"
            title="Limitations and Exceptions"
            description="The law is a useful model of consumer behaviour, but the amount of satisfaction people experience cannot always be predicted precisely."
            id="limitations"
          />

          <div className="space-y-4">
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="font-bold text-slate-950">
                Individual preferences differ
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                One person may enjoy several cups of tea, while another may
                prefer only one. The pattern and speed of diminishing
                satisfaction can vary.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="font-bold text-slate-950">
                Units may not be identical
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                A second item that is different in quality, size, or usefulness
                may provide more satisfaction than the first. This makes it
                important to compare similar units.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="font-bold text-slate-950">
                Some goods are collected or used as sets
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Additional items can become more useful when they complete a
                collection or pair with other items. Such situations may not
                follow a simple diminishing pattern at every step.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="font-bold text-slate-950">
                Utility is subjective
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Satisfaction is personal and cannot usually be measured
                directly in exact numerical units. Utility schedules are
                teaching models that help explain the concept.
              </p>
            </div>
          </div>
        </section>

        <section className="my-12">
          <SectionHeading
            eyebrow="Frequently asked questions"
            title="Law of Diminishing Marginal Utility FAQs"
            id="faqs"
          />

          <div className="space-y-4">
            {[
              [
                "What is the law of diminishing marginal utility in simple words?",
                "It means that consuming more units of the same good generally gives a person less additional satisfaction from each successive unit, assuming relevant conditions remain unchanged.",
              ],
              [
                "Who is associated with the law of diminishing marginal utility?",
                "The law is a standard principle in consumer behaviour in economics and is associated with the development of marginal utility analysis by economists including Hermann Heinrich Gossen.",
              ],
              [
                "What is marginal utility?",
                "Marginal utility is the change in total utility resulting from consuming one additional unit of a good.",
              ],
              [
                "Can total utility increase when marginal utility decreases?",
                "Yes. Total utility can continue to increase as long as marginal utility remains positive, even if each extra unit adds less satisfaction than the previous one.",
              ],
              [
                "When does total utility reach its maximum in the usual model?",
                "In the standard numerical model, total utility reaches a maximum when marginal utility is zero. If marginal utility becomes negative, total utility decreases.",
              ],
              [
                "What is an example of diminishing marginal utility?",
                "A hungry person may receive high satisfaction from the first slice of pizza and progressively less additional satisfaction from later slices as hunger is reduced.",
              ],
              [
                "Is marginal utility measured in rupees?",
                "Not necessarily. In basic utility schedules, marginal utility is often represented in hypothetical utility units. It should not automatically be interpreted as a monetary amount.",
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
                      className="shrink-0 text-violet-700"
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

        <section className="my-12 rounded-3xl border border-violet-200 bg-gradient-to-br from-violet-50 via-white to-blue-50 p-6 sm:p-8">
          <div className="flex items-start gap-4">
            <div className="rounded-2xl bg-violet-100 p-3 text-violet-700">
              <CheckCircle2 size={27} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-950">
                Key Takeaway
              </h2>
              <p className="mt-3 leading-7 text-slate-700">
                The law of diminishing marginal utility explains why each
                additional unit of a good generally adds less satisfaction
                than the previous unit. Total utility may still rise while
                marginal utility is positive, reaches a maximum when marginal
                utility is zero in the standard model, and falls when marginal
                utility becomes negative.
              </p>
            </div>
          </div>
        </section>
       
      </div>
    </main>
  );
}
