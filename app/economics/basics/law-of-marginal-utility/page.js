
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  CircleHelp,
  Coffee,
  Droplets,
  Gamepad2,
  Lightbulb,
  ShoppingCart,
  Smartphone,
  TrendingDown,
  Wallet,
  Waves,
} from "lucide-react";
import AdSlot from "../../../../components/AdSlot";

export const metadata = {
  title: "Law of Marginal Utility | Meaning, Formula & Real-Life Examples",
  description:
    "Understand marginal utility with clear explanations, real-life examples, worked calculations, a utility schedule, graph, assumptions, limitations, and consumer decisions.",
  alternates: {
    canonical:
      "https://www.pricetag.co.in/economics/basics/law-of-marginal-utility",
  },
};

const schedule = [
  { unit: 0, total: 0, marginal: null },
  { unit: 1, total: 30, marginal: 30 },
  { unit: 2, total: 54, marginal: 24 },
  { unit: 3, total: 72, marginal: 18 },
  { unit: 4, total: 84, marginal: 12 },
  { unit: 5, total: 90, marginal: 6 },
  { unit: 6, total: 90, marginal: 0 },
  { unit: 7, total: 84, marginal: -6 },
];

const faqs = [
  {
    question: "What is marginal utility in simple words?",
    answer:
      "Marginal utility is the extra satisfaction a person gets from consuming one more unit of something. For example, if eating one more slice of pizza makes you happier or more satisfied, that extra satisfaction is its marginal utility.",
  },
  {
    question: "What is the formula for marginal utility?",
    answer:
      "Marginal utility equals the change in total utility divided by the change in quantity consumed. If total utility rises from 54 to 72 utils when consumption increases from two slices to three, marginal utility is 18 utils per slice.",
  },
  {
    question: "Can marginal utility be negative?",
    answer:
      "Yes. In an economic model, marginal utility is negative when another unit reduces total satisfaction. For example, eating beyond the point of comfort may make a person feel unwell rather than more satisfied.",
  },
  {
    question: "Is marginal utility the same as diminishing marginal utility?",
    answer:
      "They are related but not identical terms. Marginal utility measures the extra satisfaction from an additional unit. The law of diminishing marginal utility describes the tendency for that extra satisfaction to decrease as more units of the same good are consumed, other relevant conditions remaining unchanged.",
  },
  {
    question: "Is utility measured in rupees?",
    answer:
      "Not in the usual introductory utility schedule. Textbooks often use hypothetical units called utils to explain satisfaction. These are teaching units, not actual money or a scientifically precise measurement of happiness.",
  },
  {
    question: "Does marginal utility always decline?",
    answer:
      "No, not in every real situation. The law is a useful economic tendency under stated assumptions. Preferences, timing, variety, collection interests, and the nature of a product can change how much satisfaction an additional unit provides.",
  },
];

export default function LawOfMarginalUtilityPage() {
  return (
    <main className="space-y-12 text-gray-800">
      <section className="overflow-hidden rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-violet-50 p-6 sm:p-10">
        <div className="grid items-center gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-3 py-1 text-sm font-bold text-blue-800">
              <BookOpen size={16} />
              Economics Basics
            </span>

            <h1 className="mt-5 text-3xl font-bold leading-tight text-gray-950 sm:text-4xl">
              Law of Marginal Utility
            </h1>

            <p className="mt-4 text-lg leading-8 text-gray-700">
              Why can the first glass of cold water after a hot day feel
              wonderful, while another glass just a few minutes later feels
              much less exciting? The answer helps explain how people
              experience satisfaction, make choices, and decide when they
              have had enough.
            </p>

            <p className="mt-3 leading-7 text-gray-600">
              In economics, <strong>marginal utility</strong> means the extra
              satisfaction from consuming one additional unit of a good or
              service. It helps us look beyond how much we consume and ask:
              how much additional benefit does the next unit provide?
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#meaning"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-bold text-white transition hover:bg-blue-700"
              >
                Understand the concept <ArrowRight size={18} />
              </a>
              <a
                href="#calculations"
                className="inline-flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-5 py-3 font-bold text-gray-800 transition hover:bg-gray-50"
              >
                Try the calculation
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm sm:p-6">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-cyan-100 p-3 text-cyan-800">
                <Droplets size={28} />
              </div>
              <div>
                <h2 className="font-bold text-gray-900">
                  The cold-water example
                </h2>
                <p className="text-sm text-gray-600">
                  Imagine you are very thirsty
                </p>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-4 gap-2">
              {[
                { glass: "1st", height: "h-16", color: "bg-cyan-500" },
                { glass: "2nd", height: "h-12", color: "bg-cyan-400" },
                { glass: "3rd", height: "h-8", color: "bg-cyan-300" },
                { glass: "4th", height: "h-4", color: "bg-cyan-200" },
              ].map((item) => (
                <div key={item.glass} className="flex flex-col items-center">
                  <div className="flex h-20 w-full items-end justify-center rounded-xl bg-cyan-50 p-2">
                    <div
                      className={`w-8 rounded-t-md ${item.height} ${item.color}`}
                    />
                  </div>
                  <span className="mt-2 text-sm font-bold text-gray-700">
                    {item.glass}
                  </span>
                </div>
              ))}
            </div>

            <p className="mt-4 text-sm leading-6 text-gray-600">
              The bars are a conceptual illustration of declining additional
              satisfaction, not measurements of actual thirst or happiness.
            </p>
          </div>
        </div>
      </section>

      <section id="meaning" className="scroll-mt-6">
        <h2 className="text-2xl font-bold text-gray-950">
          1. What Is Marginal Utility?
        </h2>

        <p className="mt-4 leading-8">
          Utility is the satisfaction or benefit a consumer receives from
          using a product or service. It does not mean that a product must be
          useful in a practical sense. A song, a cup of tea, a video game, a
          new shirt, or a holiday can all provide utility because people value
          the experience.
        </p>

        <p className="mt-3 leading-8">
          The word <strong>marginal</strong> means additional or extra. So,
          marginal utility focuses on the change that occurs when consumption
          increases. If you have already eaten two slices of pizza, the
          marginal utility of a third slice is the extra satisfaction you
          receive from that third slice—not the satisfaction from all three
          slices combined.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <article className="rounded-2xl border border-blue-200 bg-blue-50 p-5">
            <h3 className="text-lg font-bold text-blue-950">
              Total utility (TU)
            </h3>
            <p className="mt-2 leading-7 text-gray-700">
              The total satisfaction from all the units consumed.
            </p>
            <div className="mt-4 rounded-xl bg-white p-4">
              <p className="text-sm text-gray-500">Example: 3 pizza slices</p>
              <p className="mt-1 text-2xl font-bold text-blue-800">
                72 utils
              </p>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                The combined satisfaction from all three slices in our
                hypothetical example.
              </p>
            </div>
          </article>

          <article className="rounded-2xl border border-violet-200 bg-violet-50 p-5">
            <h3 className="text-lg font-bold text-violet-950">
              Marginal utility (MU)
            </h3>
            <p className="mt-2 leading-7 text-gray-700">
              The additional satisfaction from one more unit.
            </p>
            <div className="mt-4 rounded-xl bg-white p-4">
              <p className="text-sm text-gray-500">Example: the 3rd slice</p>
              <p className="mt-1 text-2xl font-bold text-violet-800">
                18 utils
              </p>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                The third slice adds 18 utils to the satisfaction from the
                first two slices.
              </p>
            </div>
          </article>
        </div>

        <div className="mt-5 rounded-2xl border border-amber-200 bg-amber-50 p-5">
          <p className="font-bold text-amber-950">
            Remember the difference
          </p>
          <p className="mt-2 leading-7 text-gray-700">
            Total utility answers, “How much satisfaction have I received
            altogether?” Marginal utility answers, “How much extra
            satisfaction will I get from one more unit?”
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-950">
          2. Why Does Marginal Utility Change?
        </h2>

        <p className="mt-4 leading-8">
          Human needs and desires are not unlimited in the same moment.
          When you begin an activity, your most immediate need may be
          unsatisfied. As that need is met, the next unit often becomes less
          important. This is one reason the additional satisfaction from
          repeated consumption can fall.
        </p>

        <div className="mt-5 grid gap-4 md:grid-cols-3">
          <article className="rounded-2xl border border-cyan-200 bg-cyan-50 p-5">
            <div className="inline-flex rounded-xl bg-cyan-100 p-3 text-cyan-800">
              <Droplets size={24} />
            </div>
            <h3 className="mt-4 font-bold text-gray-950">
              Your need is being satisfied
            </h3>
            <p className="mt-2 text-sm leading-7 text-gray-700">
              The first glass of water may be extremely valuable when you are
              thirsty. Once your thirst decreases, another glass may matter
              less.
            </p>
          </article>

          <article className="rounded-2xl border border-orange-200 bg-orange-50 p-5">
            <div className="inline-flex rounded-xl bg-orange-100 p-3 text-orange-800">
              <Coffee size={24} />
            </div>
            <h3 className="mt-4 font-bold text-gray-950">
              Repetition can reduce novelty
            </h3>
            <p className="mt-2 text-sm leading-7 text-gray-700">
              Your first cup of tea during a break may feel refreshing.
              Several cups in a short period may not give you the same extra
              enjoyment.
            </p>
          </article>

          <article className="rounded-2xl border border-violet-200 bg-violet-50 p-5">
            <div className="inline-flex rounded-xl bg-violet-100 p-3 text-violet-800">
              <Gamepad2 size={24} />
            </div>
            <h3 className="mt-4 font-bold text-gray-950">
              Time and circumstances matter
            </h3>
            <p className="mt-2 text-sm leading-7 text-gray-700">
              The first hour of gaming may be exciting, while a fifth
              uninterrupted hour may feel tiring. A tournament or a great
              match could change that experience.
            </p>
          </article>
        </div>

        <p className="mt-4 leading-8">
          These examples describe a common tendency, not a rule that every
          person experiences in exactly the same way. Marginal utility depends
          on preferences, timing, circumstances, and the good being consumed.
        </p>
      </section>

      <AdSlot />

      <section id="calculations" className="scroll-mt-6">
        <h2 className="text-2xl font-bold text-gray-950">
          3. Formula of Marginal Utility
        </h2>

        <p className="mt-4 leading-8">
          Economists can calculate marginal utility in a hypothetical utility
          schedule by comparing total utility before and after consumption
          increases. The formula is:
        </p>

        <div className="mt-5 rounded-2xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-white p-6">
          <p className="text-center text-xl font-bold text-emerald-950 sm:text-2xl">
            MU = Change in TU ÷ Change in Quantity
          </p>
          <p className="mt-3 text-center text-sm leading-6 text-emerald-900">
            In symbols: MU = (TU₂ − TU₁) ÷ (Q₂ − Q₁)
          </p>
        </div>

        <div className="mt-5 grid gap-4 md:grid-cols-3">
          <div className="rounded-xl border border-gray-200 p-4">
            <p className="font-bold text-gray-950">TU</p>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Total utility: the combined satisfaction at a given quantity.
            </p>
          </div>
          <div className="rounded-xl border border-gray-200 p-4">
            <p className="font-bold text-gray-950">Q</p>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Quantity: how many units have been consumed.
            </p>
          </div>
          <div className="rounded-xl border border-gray-200 p-4">
            <p className="font-bold text-gray-950">MU</p>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Marginal utility: the change in total utility per additional unit.
            </p>
          </div>
        </div>

        <h3 className="mt-8 text-xl font-bold text-gray-950">
          Worked example: calculating the third slice of pizza
        </h3>

        <p className="mt-3 leading-8">
          Suppose two slices provide 54 utils of total utility. After eating a
          third slice, total utility increases to 72 utils. The third slice
          adds the difference between those totals.
        </p>

        <div className="mt-4 rounded-2xl border border-blue-200 bg-blue-50 p-5">
          <div className="space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="text-gray-700">Total utility after 2 slices</span>
              <span className="font-bold text-gray-950">54 utils</span>
            </div>
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="text-gray-700">Total utility after 3 slices</span>
              <span className="font-bold text-gray-950">72 utils</span>
            </div>
            <div className="border-t border-blue-200 pt-3">
              <p className="text-sm font-bold text-blue-900">
                Calculation
              </p>
              <p className="mt-2 text-lg font-bold text-blue-950">
                MU = (72 − 54) ÷ (3 − 2) = 18 utils
              </p>
            </div>
          </div>
        </div>

        <p className="mt-3 leading-7 text-gray-700">
          The result is 18 utils per additional slice in this example. It does
          not mean the third slice costs ₹18 or that satisfaction can be
          precisely measured in real life. Utils are hypothetical teaching
          units used to make the calculation understandable.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-950">
          4. Marginal Utility Schedule Explained
        </h2>

        <p className="mt-4 leading-8">
          Consider a person eating pizza while hungry. The schedule below
          assumes that total satisfaction increases at first, but each
          additional slice adds less satisfaction than the previous one.
          After a certain point, another slice adds no satisfaction; one more
          may reduce it.
        </p>

        <div className="mt-5 overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full min-w-[520px] border-collapse text-left text-sm">
            <thead className="bg-gray-100 text-gray-800">
              <tr>
                <th className="p-4 font-bold">Slices consumed</th>
                <th className="p-4 font-bold">Total utility</th>
                <th className="p-4 font-bold">Marginal utility</th>
                <th className="p-4 font-bold">Interpretation</th>
              </tr>
            </thead>
            <tbody>
              {schedule.map((item) => {
                let interpretation = "No consumption";
                if (item.unit === 1) interpretation = "Very high extra benefit";
                if (item.unit === 2) interpretation = "Extra benefit falls";
                if (item.unit === 3) interpretation = "Extra benefit falls";
                if (item.unit === 4) interpretation = "Extra benefit falls";
                if (item.unit === 5) interpretation = "Small extra benefit";
                if (item.unit === 6) interpretation = "No extra benefit";
                if (item.unit === 7) interpretation = "Total satisfaction falls";

                return (
                  <tr
                    key={item.unit}
                    className="border-t border-gray-200 odd:bg-white even:bg-gray-50"
                  >
                    <td className="p-4">{item.unit}</td>
                    <td className="p-4 font-bold text-blue-800">
                      {item.total}
                    </td>
                    <td className="p-4">
                      {item.marginal === null ? (
                        <span className="text-gray-500">—</span>
                      ) : (
                        <span
                          className={
                            item.marginal > 0
                              ? "font-bold text-emerald-700"
                              : item.marginal === 0
                                ? "font-bold text-amber-700"
                                : "font-bold text-rose-700"
                          }
                        >
                          {item.marginal}
                        </span>
                      )}
                    </td>
                    <td className="p-4 text-gray-600">{interpretation}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <p className="mt-3 text-sm leading-6 text-gray-500">
          All figures are hypothetical utils for teaching purposes. The table
          illustrates one possible pattern, not a prediction of how every
          person responds to pizza.
        </p>

        <div className="mt-5 grid gap-4 md:grid-cols-3">
          <article className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
            <h3 className="font-bold text-emerald-950">
              Positive marginal utility
            </h3>
            <p className="mt-2 text-sm leading-7 text-gray-700">
              The next unit adds satisfaction. Total utility increases, even
              if the extra benefit is smaller than before.
            </p>
          </article>
          <article className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
            <h3 className="font-bold text-amber-950">
              Zero marginal utility
            </h3>
            <p className="mt-2 text-sm leading-7 text-gray-700">
              The next unit adds no extra satisfaction in the model. Total
              utility stays unchanged at that point.
            </p>
          </article>
          <article className="rounded-2xl border border-rose-200 bg-rose-50 p-5">
            <h3 className="font-bold text-rose-950">
              Negative marginal utility
            </h3>
            <p className="mt-2 text-sm leading-7 text-gray-700">
              The next unit makes the consumer worse off in the model. Total
              utility falls rather than rises.
            </p>
          </article>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-950">
          5. Understand the Marginal Utility Graph
        </h2>

        <p className="mt-4 leading-8">
          A typical marginal utility curve slopes downward as quantity
          consumed increases. In this simplified illustration, the first
          units have higher marginal utility, later units have less, and the
          curve reaches zero before entering negative territory.
        </p>

        <div className="mt-5 rounded-2xl border border-gray-200 bg-white p-4 sm:p-6">
          <div className="flex flex-wrap gap-4 text-sm">
            <span className="inline-flex items-center gap-2 font-bold text-blue-700">
              <span className="h-3 w-3 rounded-full bg-blue-600" />
              Marginal utility
            </span>
            <span className="inline-flex items-center gap-2 text-gray-600">
              <span className="h-0.5 w-5 bg-gray-500" />
              Zero marginal utility
            </span>
          </div>

          <svg
            viewBox="0 0 640 350"
            role="img"
            aria-label="Illustrative marginal utility curve showing additional satisfaction declining as quantity consumed increases"
            className="mt-4 h-auto w-full"
          >
            <rect x="65" y="28" width="540" height="260" rx="8" fill="#f8fafc" />
            {[65, 115, 165, 215, 265].map((y) => (
              <line
                key={y}
                x1="65"
                y1={y}
                x2="605"
                y2={y}
                stroke="#e2e8f0"
                strokeWidth="1"
              />
            ))}
            <line
              x1="65"
              y1="215"
              x2="605"
              y2="215"
              stroke="#64748b"
              strokeDasharray="6 5"
              strokeWidth="2"
            />
            <line x1="65" y1="28" x2="65" y2="288" stroke="#475569" strokeWidth="2" />
            <line x1="65" y1="288" x2="605" y2="288" stroke="#475569" strokeWidth="2" />

            <path
              d="M 105 65 L 175 100 L 245 135 L 315 170 L 385 195 L 455 215 L 525 245 L 575 265"
              fill="none"
              stroke="#2563eb"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {[
              [105, 65],
              [175, 100],
              [245, 135],
              [315, 170],
              [385, 195],
              [455, 215],
              [525, 245],
              [575, 265],
            ].map(([x, y]) => (
              <circle key={`${x}-${y}`} cx={x} cy={y} r="5" fill="#2563eb" />
            ))}

            <text x="24" y="43" fontSize="12" fill="#334155">High</text>
            <text x="18" y="281" fontSize="12" fill="#334155">Low</text>
            <text x="72" y="207" fontSize="12" fill="#475569">MU = 0</text>
            <text x="65" y="310" fontSize="12" fill="#475569">Few units</text>
            <text x="520" y="310" fontSize="12" fill="#475569">More units</text>
            <text x="330" y="339" textAnchor="middle" fontSize="13" fill="#334155">
              Quantity consumed →
            </text>
            <text
              x="15"
              y="160"
              textAnchor="middle"
              transform="rotate(-90 15 160)"
              fontSize="13"
              fill="#334155"
            >
              Marginal utility
            </text>
          </svg>

          <p className="mt-3 text-sm leading-6 text-gray-500">
            This is a conceptual illustration, not measured data. The curve
            shows a general tendency and should not be read as a universal
            numerical relationship.
          </p>
        </div>

        <div className="mt-5 rounded-2xl border border-violet-200 bg-violet-50 p-5">
          <h3 className="font-bold text-violet-950">
            What should you notice?
          </h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 leading-7 text-gray-700">
            <li>The curve starts high because early units can satisfy an important need.</li>
            <li>It slopes downward as the extra benefit from each unit declines.</li>
            <li>At the zero line, another unit adds no extra utility in the model.</li>
            <li>Below the zero line, an additional unit reduces total utility.</li>
          </ul>
        </div>
      </section>

      <AdSlot />

      <section>
        <h2 className="text-2xl font-bold text-gray-950">
          6. Real-Life Examples That Make the Concept Clear
        </h2>

        <p className="mt-4 leading-8">
          The best way to understand marginal utility is to compare the
          benefit from the next unit with the benefit from earlier units.
          These everyday situations illustrate the idea; the actual
          experience can vary from person to person.
        </p>

        <div className="mt-6 space-y-5">
          <article className="overflow-hidden rounded-2xl border border-cyan-200">
            <div className="flex items-center gap-3 bg-cyan-50 p-5">
              <div className="rounded-xl bg-white p-3 text-cyan-800">
                <Droplets size={26} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-950">
                  Example 1: Water after walking in the summer heat
                </h3>
                <p className="text-sm text-gray-600">
                  A need becomes less urgent as it is satisfied
                </p>
              </div>
            </div>
            <div className="p-5">
              <p className="leading-8">
                Imagine walking outside in Ludhiana on a hot summer afternoon.
                You return home feeling very thirsty. The first glass of cool
                water may provide tremendous relief. A second glass may still
                be welcome, but your thirst is already lower. A third glass
                may provide much less additional satisfaction.
              </p>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                <div className="rounded-xl bg-cyan-50 p-4">
                  <p className="font-bold text-cyan-950">First glass</p>
                  <p className="mt-1 text-sm leading-6 text-gray-700">
                    Strong relief from thirst.
                  </p>
                </div>
                <div className="rounded-xl bg-cyan-50 p-4">
                  <p className="font-bold text-cyan-950">Second glass</p>
                  <p className="mt-1 text-sm leading-6 text-gray-700">
                    More relief, but often less than before.
                  </p>
                </div>
                <div className="rounded-xl bg-cyan-50 p-4">
                  <p className="font-bold text-cyan-950">Another glass</p>
                  <p className="mt-1 text-sm leading-6 text-gray-700">
                    May add little once you are no longer thirsty.
                  </p>
                </div>
              </div>
              <p className="mt-4 leading-7 text-gray-700">
                <strong>Economic lesson:</strong> The value of an additional
                unit depends partly on how much of the need remains unsatisfied.
              </p>
            </div>
          </article>

          <article className="overflow-hidden rounded-2xl border border-orange-200">
            <div className="flex items-center gap-3 bg-orange-50 p-5">
              <div className="rounded-xl bg-white p-3 text-orange-800">
                <Coffee size={26} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-950">
                  Example 2: The first cup of tea during a work break
                </h3>
                <p className="text-sm text-gray-600">
                  Satisfaction can decline with repeated consumption
                </p>
              </div>
            </div>
            <div className="p-5">
              <p className="leading-8">
                After several hours of work, you take a break and make a cup
                of tea. It feels refreshing and helps you relax. You make
                another cup soon afterwards. It may still be enjoyable, but
                the extra satisfaction may be smaller because the break has
                already met much of your immediate desire.
              </p>
              <p className="mt-3 leading-7 text-gray-700">
                This does not mean the second cup must be less enjoyable.
                If friends arrive, the weather turns cold, or you particularly
                enjoy tea, the additional satisfaction may be different.
              </p>
              <div className="mt-4 rounded-xl bg-orange-50 p-4">
                <p className="font-bold text-orange-950">
                  Economic lesson
                </p>
                <p className="mt-1 leading-7 text-gray-700">
                  Marginal utility is about the extra benefit of the next
                  unit under the current circumstances—not a fixed rating
                  attached permanently to tea.
                </p>
              </div>
            </div>
          </article>

          <article className="overflow-hidden rounded-2xl border border-rose-200">
            <div className="flex items-center gap-3 bg-rose-50 p-5">
              <div className="rounded-xl bg-white p-3 text-rose-800">
                <ShoppingCart size={26} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-950">
                  Example 3: Eating pizza at a party
                </h3>
                <p className="text-sm text-gray-600">
                  More consumption can eventually become uncomfortable
                </p>
              </div>
            </div>
            <div className="p-5">
              <p className="leading-8">
                At the beginning of a party, you are hungry and enjoy your
                first slice of pizza. The second slice is also satisfying.
                By the fourth or fifth slice, you may be close to feeling
                full. Another slice may offer very little extra enjoyment,
                and eating too much may leave you uncomfortable.
              </p>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
                  <p className="font-bold text-emerald-950">Hungry</p>
                  <p className="mt-1 text-sm leading-6 text-gray-700">
                    An extra slice can be highly satisfying.
                  </p>
                </div>
                <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
                  <p className="font-bold text-amber-950">Nearly full</p>
                  <p className="mt-1 text-sm leading-6 text-gray-700">
                    Another slice may add little benefit.
                  </p>
                </div>
                <div className="rounded-xl border border-rose-200 bg-rose-50 p-4">
                  <p className="font-bold text-rose-950">Overfull</p>
                  <p className="mt-1 text-sm leading-6 text-gray-700">
                    More food may reduce comfort and satisfaction.
                  </p>
                </div>
              </div>
              <p className="mt-4 leading-7 text-gray-700">
                <strong>Economic lesson:</strong> Positive marginal utility
                can become zero and, in some cases, negative. More of a good
                is not always better at every level of consumption.
              </p>
            </div>
          </article>

          <article className="overflow-hidden rounded-2xl border border-violet-200">
            <div className="flex items-center gap-3 bg-violet-50 p-5">
              <div className="rounded-xl bg-white p-3 text-violet-800">
                <Gamepad2 size={26} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-950">
                  Example 4: Playing a video game for several hours
                </h3>
                <p className="text-sm text-gray-600">
                  Extra entertainment can change with time and fatigue
                </p>
              </div>
            </div>
            <div className="p-5">
              <p className="leading-8">
                Suppose you start playing a game after finishing your work.
                The first hour is exciting because you are fresh and enjoy
                the challenge. After several hours, you may become tired,
                repeat the same missions, or want to do something else. The
                next hour may add less enjoyment than the first.
              </p>
              <p className="mt-3 leading-7">
                But imagine you reach a final match with friends or unlock a
                level you have been trying to complete. The next hour could
                become exciting again. This illustrates why economic laws
                describe general patterns under assumptions rather than
                guaranteeing identical reactions in every situation.
              </p>
            </div>
          </article>

          <article className="overflow-hidden rounded-2xl border border-blue-200">
            <div className="flex items-center gap-3 bg-blue-50 p-5">
              <div className="rounded-xl bg-white p-3 text-blue-800">
                <Smartphone size={26} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-950">
                  Example 5: Buying mobile data or another subscription
                </h3>
                <p className="text-sm text-gray-600">
                  The next unit should be judged by its additional benefit
                </p>
              </div>
            </div>
            <div className="p-5">
              <p className="leading-8">
                Imagine you already have enough mobile data for your daily
                browsing, messages, and videos. Buying a small extra data pack
                may provide limited additional benefit if your current pack
                is almost unused. If your data has run out and you need to
                attend an online class or submit important work, the same
                extra data may be far more valuable.
              </p>
              <p className="mt-3 leading-7">
                The product has not necessarily changed. Your existing supply
                and immediate need have changed the benefit of the next unit.
                This is a useful way to think about marginal utility, although
                real telecom plans also depend on prices, validity, speed,
                and package restrictions.
              </p>
            </div>
          </article>

          <article className="overflow-hidden rounded-2xl border border-emerald-200">
            <div className="flex items-center gap-3 bg-emerald-50 p-5">
              <div className="rounded-xl bg-white p-3 text-emerald-800">
                <Wallet size={26} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-950">
                  Example 6: Shopping during a sale
                </h3>
                <p className="text-sm text-gray-600">
                  A lower price does not make every extra item equally valuable
                </p>
              </div>
            </div>
            <div className="p-5">
              <p className="leading-8">
                A shop advertises T-shirts at a discount. You need one
                everyday T-shirt, so the first purchase may provide a high
                benefit. A second can be useful as a spare. But if you
                already own several similar shirts, a sixth or seventh may
                add little to your wardrobe—even when the sale price looks
                attractive.
              </p>
              <div className="mt-4 rounded-xl bg-emerald-50 p-4">
                <p className="font-bold text-emerald-950">
                  Ask yourself one question
                </p>
                <p className="mt-1 leading-7 text-gray-700">
                  “If I already own five, how much extra benefit will this
                  sixth item really provide?”
                </p>
              </div>
              <p className="mt-4 leading-7 text-gray-700">
                <strong>Economic lesson:</strong> A discount reduces the
                amount paid, but it does not automatically increase the
                personal benefit of owning another identical item. Price and
                marginal utility are related to a buying decision, but they
                are different concepts.
              </p>
            </div>
          </article>
        </div>
      </section>
<AdSlot />
      <section>
        <h2 className="text-2xl font-bold text-gray-950">
          7. Marginal Utility and Consumer Decisions
        </h2>

        <p className="mt-4 leading-8">
          Consumers have limited income, time, and resources. Marginal utility
          helps explain why people consider the extra benefit of the next
          purchase instead of simply trying to buy the greatest possible
          quantity of one item.
        </p>

        <div className="mt-5 rounded-2xl border border-indigo-200 bg-indigo-50 p-5 sm:p-6">
          <h3 className="text-lg font-bold text-indigo-950">
            A simple decision: snacks or a drink?
          </h3>
          <p className="mt-3 leading-8 text-gray-700">
            Suppose you have a limited amount of pocket money. You have
            already bought one snack, and you are deciding between another
            snack and a drink. The question is not only which item you like
            more in general. It is also which purchase gives you the greater
            additional benefit right now, compared with what you give up.
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-indigo-100 bg-white p-4">
              <p className="font-bold text-gray-950">Another snack</p>
              <p className="mt-2 text-sm leading-6 text-gray-700">
                It may be less appealing if you are already full.
              </p>
            </div>
            <div className="rounded-xl border border-indigo-100 bg-white p-4">
              <p className="font-bold text-gray-950">A drink</p>
              <p className="mt-2 text-sm leading-6 text-gray-700">
                It may be more appealing if you are thirsty.
              </p>
            </div>
          </div>
          <p className="mt-4 leading-7 text-gray-700">
            This is an intuitive example, not a complete mathematical model of
            consumer equilibrium. Formal consumer-choice analysis also
            considers prices, budget constraints, and the marginal utility
            received per unit of money spent.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-950">
          8. Assumptions of the Law
        </h2>

        <p className="mt-4 leading-8">
          In introductory economics, the law of diminishing marginal utility
          is often explained using a simplified set of conditions. These
          assumptions help isolate the relationship between the quantity
          consumed and the additional satisfaction received.
        </p>

        <div className="mt-5 space-y-3">
          {[
            {
              title: "Similar units",
              detail:
                "Each unit is assumed to be broadly comparable in size, quality, or nature. Comparing a small cup with a large cup would make the pattern harder to interpret.",
            },
            {
              title: "Preferences remain stable",
              detail:
                "The consumer's tastes and preferences are assumed not to change substantially during the period being studied.",
            },
            {
              title: "Reasonably continuous consumption",
              detail:
                "Units are consumed close enough together that a major change in circumstances does not distort the comparison.",
            },
            {
              title: "Other relevant conditions remain unchanged",
              detail:
                "Factors such as income, the availability of other goods, and the circumstances of consumption are treated as stable for the simple analysis.",
            },
            {
              title: "A consistent consumer and purpose",
              detail:
                "The units are considered in relation to the same consumer and a comparable purpose, rather than combining unrelated needs or people.",
            },
          ].map((item) => (
            <article
              key={item.title}
              className="rounded-xl border border-gray-200 bg-white p-4 sm:p-5"
            >
              <div className="flex items-start gap-3">
                <CheckCircle2
                  size={21}
                  className="mt-1 shrink-0 text-emerald-600"
                />
                <div>
                  <h3 className="font-bold text-gray-950">{item.title}</h3>
                  <p className="mt-1 leading-7 text-gray-700">
                    {item.detail}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-950">
          9. Limitations: When Might the Pattern Differ?
        </h2>

        <p className="mt-4 leading-8">
          Marginal utility is a model of consumer behaviour, not a precise
          rule that predicts every person's feelings. Real situations can
          depart from the simplified pattern for several reasons.
        </p>

        <div className="mt-5 grid gap-4 md:grid-cols-2">
          <article className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
            <h3 className="font-bold text-amber-950">
              Collecting and hobbies
            </h3>
            <p className="mt-2 leading-7 text-gray-700">
              A collector might value the next rare coin more than an earlier
              one because it completes a set. The units are not necessarily
              interchangeable or equally desirable.
            </p>
          </article>

          <article className="rounded-2xl border border-blue-200 bg-blue-50 p-5">
            <h3 className="font-bold text-blue-950">
              A change in circumstances
            </h3>
            <p className="mt-2 leading-7 text-gray-700">
              Water may provide little extra satisfaction when you are not
              thirsty, but become much more valuable after strenuous exercise.
              The circumstances are different.
            </p>
          </article>

          <article className="rounded-2xl border border-violet-200 bg-violet-50 p-5">
            <h3 className="font-bold text-violet-950">
              Different preferences
            </h3>
            <p className="mt-2 leading-7 text-gray-700">
              One person may tire of a song after repeated listening, while
              another may enjoy hearing it many times. Utility is subjective.
            </p>
          </article>

          <article className="rounded-2xl border border-rose-200 bg-rose-50 p-5">
            <h3 className="font-bold text-rose-950">
              Satisfaction is hard to measure
            </h3>
            <p className="mt-2 leading-7 text-gray-700">
              Economists generally cannot directly measure happiness in
              precise utils. Utility schedules are useful teaching models,
              not laboratory readings of satisfaction.
            </p>
          </article>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-950">
          10. Marginal Utility vs. Diminishing Marginal Utility
        </h2>

        <p className="mt-4 leading-8">
          These terms are closely connected, but they describe different
          things. Marginal utility is the measure of extra satisfaction from
          an additional unit. The law of diminishing marginal utility is the
          principle that this extra satisfaction tends to decrease as
          consumption of comparable units increases, other relevant
          conditions remaining unchanged.
        </p>

        <div className="mt-5 overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full min-w-[480px] border-collapse text-left text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-4 font-bold">Point of comparison</th>
                <th className="p-4 font-bold">Marginal utility</th>
                <th className="p-4 font-bold">Diminishing marginal utility</th>
              </tr>
            </thead>
            <tbody>
              {[
                [
                  "Meaning",
                  "Extra satisfaction from another unit.",
                  "A tendency for that extra satisfaction to fall.",
                ],
                [
                  "Role",
                  "A concept or quantity being analysed.",
                  "A law describing a pattern in that quantity.",
                ],
                [
                  "Example",
                  "The extra satisfaction from the third slice.",
                  "The third slice adds less satisfaction than the second.",
                ],
              ].map((row) => (
                <tr key={row[0]} className="border-t border-gray-200">
                  {row.map((cell, index) => (
                    <td
                      key={cell}
                      className={`p-4 leading-6 ${
                        index === 0
                          ? "font-bold text-gray-950"
                          : "text-gray-700"
                      }`}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-4 leading-7 text-gray-700">
          Some textbooks use “law of marginal utility” informally when
          discussing diminishing marginal utility. Check the terminology
          used in your course or textbook, but keep the distinction between
          the measure and the pattern clear.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-950">
          Frequently Asked Questions
        </h2>

        <div className="mt-5 space-y-4">
          {faqs.map((faq, index) => (
            <article
              key={faq.question}
              className="rounded-2xl border border-gray-200 bg-white p-5"
            >
              <h3 className="flex items-start gap-3 font-bold text-gray-950">
                <CircleHelp
                  size={20}
                  className="mt-1 shrink-0 text-blue-600"
                />
                <span>
                  {index + 1}. {faq.question}
                </span>
              </h3>
              <p className="mt-3 leading-7 text-gray-700">{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6 sm:p-7">
        <div className="flex items-start gap-3">
          <div className="rounded-xl bg-white p-3 text-emerald-700">
            <Lightbulb size={25} />
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-950">
              Key Takeaway
            </h2>
            <p className="mt-3 leading-8 text-gray-700">
              Marginal utility is the additional satisfaction from one more
              unit of a good or service. When an important need is being
              satisfied, later units often provide less additional benefit.
              This helps explain why people stop consuming some goods, change
              what they buy, or reconsider a purchase. The pattern is useful
              for understanding decisions, but actual preferences and
              circumstances can make individual experiences different.
            </p>
          </div>
        </div>
      </section>

    
    </main>
  );
}
