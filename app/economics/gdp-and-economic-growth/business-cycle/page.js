
import Link from "next/link";
import {
  Activity,
  ArrowDown,
  ArrowDownRight,
  ArrowRight,
  ArrowUp,
  ArrowUpRight,
  BarChart3,
  BookOpen,
  Building2,
  CheckCircle2,
  CircleHelp,
  Factory,
  Gauge,
  HandCoins,
  Lightbulb,
  ShieldAlert,
  ShoppingCart,
  TrendingDown,
  TrendingUp,
  Users,
} from "lucide-react";
import AdSlot from "../../../../components/AdSlot";

export const metadata = {
  title: "Business Cycle Explained: 4 Phases, Causes & Examples",
  description:
    "Learn what the business cycle means, its four phases, causes, recession indicators, real-world examples, and the difference between business cycles and economic growth.",
  alternates: {
    canonical:
      "https://www.pricetag.co.in/economics/gdp-and-economic-growth/business-cycle",
  },
};

const phases = [
  {
    number: "01",
    title: "Expansion",
    subtitle: "Economic Activity Increases",
    description:
      "Businesses increase production as demand improves. Employment, household income, investment, and sales often rise during this phase.",
    example:
      "A furniture manufacturer receives more orders, increases production, and hires additional workers.",
    signals: [
      "Production and sales generally increase",
      "Businesses may invest and hire more workers",
      "Consumer and business confidence may improve",
    ],
    icon: TrendingUp,
    accent: "blue",
  },
  {
    number: "02",
    title: "Peak",
    subtitle: "A Turning Point",
    description:
      "The peak is the turning point at which an expansion ends and a contraction begins. It is usually identified after examining economic data.",
    example:
      "Orders stop growing, production reaches a high point, and demand begins to weaken.",
    signals: [
      "Economic activity reaches a cyclical high",
      "Growth may slow before activity declines",
      "Capacity constraints or rising costs may appear",
    ],
    icon: Gauge,
    accent: "sky",
  },
  {
    number: "03",
    title: "Contraction",
    subtitle: "Economic Activity Weakens",
    description:
      "Production, sales, and spending weaken across parts of the economy. Businesses may delay investment or reduce hiring. A sufficiently broad and significant contraction may be classified as a recession.",
    example:
      "The furniture manufacturer receives fewer orders, reduces shifts, and postpones buying new equipment.",
    signals: [
      "Production and sales may decline",
      "Hiring can slow and unemployment may rise",
      "Households and businesses may reduce spending",
    ],
    icon: TrendingDown,
    accent: "indigo",
  },
  {
    number: "04",
    title: "Trough",
    subtitle: "The Lowest Turning Point",
    description:
      "The trough is the low point of a contraction. Economic activity begins to turn upward afterward, although employment and household incomes may take longer to recover.",
    example:
      "Orders stop falling, customers gradually return, and the manufacturer begins increasing production again.",
    signals: [
      "Economic activity reaches a cyclical low",
      "The pace of decline begins to ease",
      "A recovery and new expansion may follow",
    ],
    icon: ArrowUpRight,
    accent: "blue",
  },
];

const drivers = [
  {
    title: "Consumer Spending",
    description:
      "When households feel confident about their income and jobs, they may spend more. Weaker confidence can lead them to postpone purchases.",
    example:
      "More families buying appliances can increase retail sales and factory orders.",
    icon: ShoppingCart,
  },
  {
    title: "Business Investment",
    description:
      "Companies adjust spending on factories, machinery, technology, and expansion according to demand, costs, and expectations.",
    example:
      "A business may delay opening a new branch when customer demand weakens.",
    icon: Building2,
  },
  {
    title: "Interest Rates And Credit",
    description:
      "Borrowing costs and access to credit influence household purchases and business investment. Their effects depend on the wider economic situation.",
    example:
      "More expensive business loans can make a proposed factory expansion less attractive.",
    icon: HandCoins,
  },
  {
    title: "External Shocks",
    description:
      "Pandemics, wars, natural disasters, supply disruptions, and sudden changes in global demand can affect production and spending.",
    example:
      "A shortage of essential components can force a manufacturer to reduce output.",
    icon: Activity,
  },
  {
    title: "Government And Central Bank Policies",
    description:
      "Fiscal and monetary policy can influence demand, borrowing conditions, employment, and inflation, although their effects are not immediate or guaranteed.",
    example:
      "Public infrastructure spending can support demand for construction materials and labour.",
    icon: Gauge,
  },
  {
    title: "Expectations And Confidence",
    description:
      "Expectations about future sales, jobs, prices, and profits can influence decisions today, sometimes reinforcing an upswing or downturn.",
    example:
      "Retailers may order less stock if they expect customers to spend less next month.",
    icon: Lightbulb,
  },
];

const indicators = [
  {
    title: "Real GDP",
    description:
      "Measures inflation-adjusted output. Falling real GDP can signal weakening production, but it is not the only measure used to assess a recession.",
    icon: BarChart3,
  },
  {
    title: "Employment And Unemployment",
    description:
      "Hiring may weaken during a downturn. Unemployment can rise during contractions and sometimes continues rising after activity begins recovering.",
    icon: Users,
  },
  {
    title: "Retail Sales And Consumption",
    description:
      "Changes in household purchases can reveal shifts in demand for goods and services.",
    icon: ShoppingCart,
  },
  {
    title: "Industrial Production",
    description:
      "Changes in factory, mining, and utility output can help reveal shifts in production activity.",
    icon: Factory,
  },
];

const faqs = [
  {
    question: "What Is A Business Cycle In Simple Words?",
    answer:
      "A business cycle describes the ups and downs in overall economic activity. The economy expands when activity increases and contracts when activity decreases significantly across the economy.",
  },
  {
    question: "What Are The Four Phases Of A Business Cycle?",
    answer:
      "The four commonly taught phases are expansion, peak, contraction, and trough. The peak marks the end of an expansion, while the trough marks the end of a contraction.",
  },
  {
    question: "Is A Business Cycle Regular Or Predictable?",
    answer:
      "No. Business cycles vary in length, depth, and causes. The word cycle does not mean the economy follows a fixed timetable, and economists cannot predict every turning point accurately.",
  },
  {
    question: "Is Two Consecutive Quarters Of Negative GDP Growth Always A Recession?",
    answer:
      "No. It is a common rule of thumb, but not a universal definition. In the United States, the NBER considers the depth, spread, and duration of declines across multiple economic indicators. Other countries may use different official approaches.",
  },
  {
    question: "What Is The Difference Between A Recession And A Depression?",
    answer:
      "A recession is a significant and broad decline in economic activity. Depression is an informal term commonly used for an especially severe or prolonged economic downturn; there is no single universal numerical threshold separating the two.",
  },
  {
    question: "What Happens After A Trough?",
    answer:
      "Economic activity may enter a recovery and then an expansion. However, the recovery can be uneven, and employment or household income may take longer to improve than production.",
  },
  {
    question: "Is A Business Cycle The Same As Economic Growth?",
    answer:
      "No. A business cycle describes short- to medium-term fluctuations in economic activity. Long-term economic growth refers to a sustained increase in productive capacity and real output over time.",
  },
];

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mx-auto mb-8 max-w-3xl text-center">
      {eyebrow && (
        <p className="mb-3 text-sm font-bold uppercase tracking-wider text-blue-700">
          {eyebrow}
        </p>
      )}
      <h2 className="text-2xl font-bold tracking-tight text-blue-950 sm:text-3xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 leading-7 text-slate-600">{description}</p>
      )}
    </div>
  );
}

function CycleDiagram() {
  return (
    <div className="rounded-3xl border border-blue-200 bg-gradient-to-br from-white via-blue-50 to-blue-100/70 p-5 shadow-sm sm:p-8">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-sm font-bold uppercase tracking-wider text-blue-700">
            The Four Phases
          </p>
          <h3 className="mt-1 text-xl font-bold text-blue-950">
            How The Business Cycle Moves
          </h3>
        </div>
        <div className="rounded-xl border border-blue-100 bg-white p-3 text-blue-700">
          <Activity size={24} />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <div className="rounded-2xl border border-blue-200 bg-white p-4 sm:order-1">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-blue-100 p-3 text-blue-800">
              <TrendingUp size={23} />
            </div>
            <div>
              <p className="font-bold text-blue-950">1. Expansion</p>
              <p className="text-sm text-slate-600">Output increases</p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-sky-200 bg-white p-4 sm:order-2">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-sky-100 p-3 text-sky-800">
              <Gauge size={23} />
            </div>
            <div>
              <p className="font-bold text-blue-950">2. Peak</p>
              <p className="text-sm text-slate-600">Expansion ends</p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-indigo-200 bg-white p-4 sm:order-4">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-indigo-100 p-3 text-indigo-800">
              <TrendingDown size={23} />
            </div>
            <div>
              <p className="font-bold text-blue-950">3. Contraction</p>
              <p className="text-sm text-slate-600">Activity declines</p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-blue-200 bg-white p-4 sm:order-3">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-blue-100 p-3 text-blue-800">
              <ArrowUpRight size={23} />
            </div>
            <div>
              <p className="font-bold text-blue-950">4. Trough</p>
              <p className="text-sm text-slate-600">Contraction ends</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5 rounded-2xl border border-blue-200 bg-white p-4">
        <p className="text-sm leading-7 text-slate-700">
          <span className="font-bold text-blue-900">Remember:</span> the
          sequence is a useful teaching model, not a timetable. Actual
          business cycles can be irregular, and turning points are often
          recognised only after examining data.
        </p>
      </div>
    </div>
  );
}

export default function BusinessCyclePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-gradient-to-b from-white via-blue-50/50 to-white text-slate-800">
      {/* Hero */}
      <section className="relative border-b border-blue-100 bg-gradient-to-br from-white via-blue-50 to-blue-100/80">
        <div className="pointer-events-none absolute -right-24 -top-20 h-72 w-72 rounded-full bg-blue-200/40 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-sky-200/40 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-2 lg:px-8 lg:py-24">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/90 px-4 py-2 text-sm font-bold text-blue-800 shadow-sm">
              <BookOpen size={16} />
              Economics Made Understandable
            </div>

            <h1 className="max-w-2xl text-3xl font-bold leading-tight tracking-tight text-blue-950 sm:text-4xl lg:text-5xl">
              Business Cycle: Meaning, Four Phases And Examples
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-700 sm:text-lg">
              Economies do not expand at the same pace forever. Learn how
              expansion, peak, contraction, and trough describe changes in
              economic activity, why these changes happen, and how they affect
              businesses, workers, and households.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#four-phases"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-700 to-blue-500 px-5 py-3 font-bold text-white shadow-md shadow-blue-200 transition hover:from-blue-800 hover:to-blue-600"
              >
                Explore The Phases <ArrowRight size={18} />
              </a>
              <a
                href="#worked-example"
                className="inline-flex items-center gap-2 rounded-xl border border-blue-200 bg-white px-5 py-3 font-bold text-blue-800 transition hover:bg-blue-50"
              >
                See A Practical Example
              </a>
            </div>

            <div className="mt-7 flex flex-wrap gap-3 text-sm text-slate-600">
              <span className="rounded-lg border border-blue-100 bg-white/80 px-3 py-2">
                <span className="font-bold text-blue-900">01.</span> Phases
              </span>
              <span className="rounded-lg border border-blue-100 bg-white/80 px-3 py-2">
                <span className="font-bold text-blue-900">02.</span> Causes
              </span>
              <span className="rounded-lg border border-blue-100 bg-white/80 px-3 py-2">
                <span className="font-bold text-blue-900">03.</span> Indicators
              </span>
            </div>
          </div>

          <CycleDiagram />
        </div>
      </section>

      {/* Definition */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <SectionHeading
          eyebrow="Start With The Basics"
          title="What Is A Business Cycle?"
          description="A business cycle refers to fluctuations in overall economic activity over time, including periods of expansion and contraction."
        />

        <div className="grid gap-5 md:grid-cols-3">
          <article className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md hover:shadow-blue-100">
            <div className="mb-4 inline-flex rounded-xl bg-blue-100 p-3 text-blue-800">
              <TrendingUp size={24} />
            </div>
            <h3 className="text-lg font-bold text-blue-950">
              Periods Of Expansion
            </h3>
            <p className="mt-3 leading-7 text-slate-600">
              Production, sales, and employment often increase as households
              and businesses spend more.
            </p>
          </article>

          <article className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md hover:shadow-blue-100">
            <div className="mb-4 inline-flex rounded-xl bg-sky-100 p-3 text-sky-800">
              <Activity size={24} />
            </div>
            <h3 className="text-lg font-bold text-blue-950">
              Turning Points
            </h3>
            <p className="mt-3 leading-7 text-slate-600">
              Peaks and troughs mark transitions between an expansion and a
              contraction.
            </p>
          </article>

          <article className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md hover:shadow-blue-100">
            <div className="mb-4 inline-flex rounded-xl bg-indigo-100 p-3 text-indigo-800">
              <TrendingDown size={24} />
            </div>
            <h3 className="text-lg font-bold text-blue-950">
              Periods Of Contraction
            </h3>
            <p className="mt-3 leading-7 text-slate-600">
              Economic activity weakens, and businesses may reduce production,
              investment, or hiring.
            </p>
          </article>
        </div>

        <div className="mt-6 rounded-2xl border border-blue-200 bg-gradient-to-r from-blue-50 to-white p-5 sm:p-6">
          <div className="flex items-start gap-3">
            <div className="rounded-xl bg-white p-3 text-blue-700 shadow-sm">
              <CircleHelp size={23} />
            </div>
            <div>
              <h3 className="font-bold text-blue-950">
                Does The Business Cycle Follow A Fixed Schedule?
              </h3>
              <p className="mt-2 leading-7 text-slate-700">
                No. The duration and severity of business cycles vary.
                Economists study many indicators to understand turning points,
                but they cannot reliably predict every expansion or
                contraction in advance.
              </p>
            </div>
          </div>
        </div>
      </section>
<AdSlot />
      {/* Four phases */}
      <section
        id="four-phases"
        className="border-y border-blue-100 bg-gradient-to-b from-blue-50/80 via-white to-blue-50/60"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
          <SectionHeading
            eyebrow="Understand Each Stage"
            title="The Four Phases Of The Business Cycle"
            description="Each phase describes a different point in the movement of overall economic activity. The examples below use a fictional furniture manufacturer."
          />

          <div className="grid gap-5 md:grid-cols-2">
            {phases.map((phase) => {
              const Icon = phase.icon;

              return (
                <article
                  key={phase.title}
                  className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-md hover:shadow-blue-100/70 sm:p-6"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-3">
                      <div className="rounded-xl bg-gradient-to-br from-blue-100 to-sky-50 p-3 text-blue-800">
                        <Icon size={25} />
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-blue-700">
                          Phase {phase.number}
                        </p>
                        <h3 className="mt-1 text-xl font-bold text-blue-950">
                          {phase.title}
                        </h3>
                        <p className="mt-1 text-sm font-bold text-slate-500">
                          {phase.subtitle}
                        </p>
                      </div>
                    </div>
                  </div>

                  <p className="mt-5 leading-7 text-slate-700">
                    {phase.description}
                  </p>

                  <div className="mt-4 rounded-xl border border-blue-100 bg-gradient-to-r from-blue-50 to-white p-4">
                    <p className="text-xs font-bold uppercase tracking-wider text-blue-700">
                      Practical Example
                    </p>
                    <p className="mt-2 leading-7 text-slate-700">
                      {phase.example}
                    </p>
                  </div>

                  <div className="mt-5">
                    <h4 className="font-bold text-blue-950">
                      Common Signals
                    </h4>
                    <ul className="mt-3 space-y-2">
                      {phase.signals.map((signal) => (
                        <li
                          key={signal}
                          className="flex items-start gap-2 text-sm leading-6 text-slate-600"
                        >
                          <CheckCircle2
                            size={17}
                            className="mt-1 shrink-0 text-blue-600"
                          />
                          <span>{signal}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Worked example */}
      <section
        id="worked-example"
        className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8"
      >
        <SectionHeading
          eyebrow="A Fictional Business Example"
          title="How A Business Cycle Affects A Furniture Factory"
          description="Imagine a furniture manufacturer whose sales rise, peak, fall, and eventually recover. This simplified example shows how changing demand can affect production and jobs."
        />

        <div className="overflow-hidden rounded-3xl border border-blue-200 bg-white shadow-sm">
          <div className="grid md:grid-cols-2">
            <div className="bg-gradient-to-br from-white via-blue-50 to-blue-100/80 p-5 sm:p-8">
              <div className="mb-5 inline-flex rounded-xl bg-white p-3 text-blue-800 shadow-sm">
                <Factory size={27} />
              </div>
              <h3 className="text-xl font-bold text-blue-950">
                The Factory&apos;s Journey
              </h3>
              <p className="mt-3 leading-7 text-slate-700">
                The business sells furniture to households and retailers.
                Changes in customer demand influence its orders, production
                plans, and staffing decisions.
              </p>

              <div className="mt-6 space-y-3">
                <div className="flex items-start gap-3 rounded-xl border border-blue-100 bg-white p-4">
                  <ArrowUp
                    className="mt-1 shrink-0 text-blue-700"
                    size={20}
                  />
                  <div>
                    <p className="font-bold text-blue-950">
                      Demand Rises
                    </p>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      The factory receives more orders and expands production.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-xl border border-blue-100 bg-white p-4">
                  <Gauge
                    className="mt-1 shrink-0 text-sky-700"
                    size={20}
                  />
                  <div>
                    <p className="font-bold text-blue-950">
                      Demand Stops Growing
                    </p>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      Sales level off and the factory becomes cautious about
                      new investments.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-xl border border-blue-100 bg-white p-4">
                  <ArrowDownRight
                    className="mt-1 shrink-0 text-indigo-700"
                    size={20}
                  />
                  <div>
                    <p className="font-bold text-blue-950">
                      Demand Weakens
                    </p>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      The factory cuts shifts and postpones equipment
                      purchases.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-xl border border-blue-100 bg-white p-4">
                  <ArrowUpRight
                    className="mt-1 shrink-0 text-blue-700"
                    size={20}
                  />
                  <div>
                    <p className="font-bold text-blue-950">
                      Orders Recover
                    </p>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      Customers gradually return and the factory starts
                      producing more again.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-5 sm:p-8">
              <h3 className="text-xl font-bold text-blue-950">
                Illustrative Sales Index
              </h3>
              <p className="mt-2 leading-7 text-slate-600">
                The values below are invented to explain the concept. They
                are not measured company sales or national economic data.
              </p>

              <div className="mt-6 space-y-5">
                {[
                  { label: "Expansion", value: 85, number: "85", color: "bg-blue-600" },
                  { label: "Peak", value: 100, number: "100", color: "bg-sky-500" },
                  { label: "Contraction", value: 55, number: "55", color: "bg-indigo-500" },
                  { label: "Recovery", value: 70, number: "70", color: "bg-blue-400" },
                ].map((item) => (
                  <div key={item.label}>
                    <div className="mb-2 flex items-center justify-between gap-3">
                      <span className="text-sm font-bold text-slate-700">
                        {item.label}
                      </span>
                      <span className="text-sm font-bold text-blue-900">
                        {item.number}
                      </span>
                    </div>
                    <div className="h-3 overflow-hidden rounded-full bg-blue-50">
                      <div
                        className={`h-full rounded-full ${item.color}`}
                        style={{ width: `${item.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-7 rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50 to-white p-5">
                <p className="font-bold text-blue-950">
                  What Does This Tell Us?
                </p>
                <p className="mt-2 leading-7 text-slate-700">
                  Businesses often adjust output, hiring, and investment as
                  demand changes. However, one company&apos;s sales pattern
                  does not prove that the whole economy is in a particular
                  phase. Economists look for broader patterns across the
                  economy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
<AdSlot />
      {/* Causes */}
      <section className="border-y border-blue-100 bg-gradient-to-b from-blue-50/70 via-white to-blue-50/60">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
          <SectionHeading
            eyebrow="Why Activity Changes"
            title="What Causes Business Cycles?"
            description="Business cycles can result from several interacting forces. No single factor explains every expansion or downturn."
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {drivers.map((driver) => {
              const Icon = driver.icon;

              return (
                <article
                  key={driver.title}
                  className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-md hover:shadow-blue-100/70 sm:p-6"
                >
                  <div className="mb-4 inline-flex rounded-xl bg-gradient-to-br from-blue-100 to-sky-50 p-3 text-blue-800">
                    <Icon size={25} />
                  </div>
                  <h3 className="text-lg font-bold text-blue-950">
                    {driver.title}
                  </h3>
                  <p className="mt-3 leading-7 text-slate-600">
                    {driver.description}
                  </p>
                  <div className="mt-4 rounded-xl border border-blue-100 bg-gradient-to-r from-blue-50 to-white p-3">
                    <p className="text-xs font-bold uppercase tracking-wider text-blue-700">
                      Example
                    </p>
                    <p className="mt-1 text-sm leading-6 text-slate-700">
                      {driver.example}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Recession distinction */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
        <SectionHeading
          eyebrow="Important Difference"
          title="Business Cycle Vs Recession"
          description="These terms are connected, but they do not mean the same thing."
        />

        <div className="grid gap-5 md:grid-cols-2">
          <article className="rounded-2xl border border-blue-200 bg-white p-5 shadow-sm sm:p-7">
            <div className="mb-4 inline-flex rounded-xl bg-blue-100 p-3 text-blue-800">
              <Activity size={25} />
            </div>
            <h3 className="text-xl font-bold text-blue-950">
              Business Cycle
            </h3>
            <p className="mt-3 leading-7 text-slate-700">
              The broader pattern of fluctuations in economic activity,
              including expansions, peaks, contractions, and troughs.
            </p>
          </article>

          <article className="rounded-2xl border border-indigo-200 bg-white p-5 shadow-sm sm:p-7">
            <div className="mb-4 inline-flex rounded-xl bg-indigo-100 p-3 text-indigo-800">
              <ShieldAlert size={25} />
            </div>
            <h3 className="text-xl font-bold text-blue-950">
              Recession
            </h3>
            <p className="mt-3 leading-7 text-slate-700">
              A significant decline in economic activity spread across the
              economy and lasting more than a brief period, according to the
              commonly used U.S. NBER definition.
            </p>
          </article>
        </div>

        <div className="mt-6 rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50 to-white p-5 sm:p-6">
          <h3 className="font-bold text-blue-950">
            Is Two Consecutive Quarters Of Falling GDP The Official Rule
            Everywhere?
          </h3>
          <p className="mt-3 leading-7 text-slate-700">
            No. Two consecutive quarters of declining real GDP is a widely
            used rule of thumb, but it is not a universal definition of
            recession. For example, the U.S. NBER considers the depth, spread,
            and duration of economic weakness using multiple indicators.
            Different countries can use different official methods.
          </p>
          <a
            href="https://www.nber.org/research/business-cycle-dating/business-cycle-dating-procedure-frequently-asked-questions"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-2 font-bold text-blue-700 hover:text-blue-900"
          >
            Read The NBER Explanation <ArrowRight size={16} />
          </a>
        </div>
      </section>

      {/* Indicators */}
      <section className="border-y border-blue-100 bg-gradient-to-b from-blue-50/80 via-white to-blue-50/60">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
          <SectionHeading
            eyebrow="Reading The Economy"
            title="How Do Economists Track The Business Cycle?"
            description="Economists examine several indicators together because each one captures a different part of economic activity."
          />

          <div className="grid gap-5 sm:grid-cols-2">
            {indicators.map((indicator) => {
              const Icon = indicator.icon;

              return (
                <article
                  key={indicator.title}
                  className="flex items-start gap-4 rounded-2xl border border-blue-100 bg-white p-5 shadow-sm sm:p-6"
                >
                  <div className="shrink-0 rounded-xl bg-blue-100 p-3 text-blue-800">
                    <Icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-blue-950">
                      {indicator.title}
                    </h3>
                    <p className="mt-2 leading-7 text-slate-600">
                      {indicator.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-6 rounded-2xl border border-blue-200 bg-white p-5 sm:p-6">
            <h3 className="font-bold text-blue-950">
              Why Use Multiple Indicators?
            </h3>
            <p className="mt-2 leading-7 text-slate-700">
              Economic data are released at different times and can be
              revised. Employment may lag behind production, while sales and
              industrial output may change earlier. Looking at multiple
              indicators helps provide a more complete assessment.
            </p>
          </div>
        </div>
      </section>
<AdSlot />
      {/* Cycle vs growth */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
        <SectionHeading
          eyebrow="Connect The Concepts"
          title="Business Cycle Vs Long-Term Economic Growth"
          description="The business cycle describes fluctuations, while long-term growth concerns the economy's ability to produce more over time."
        />

        <div className="overflow-hidden rounded-2xl border border-blue-200 bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[540px] border-collapse text-left">
              <thead>
                <tr className="bg-gradient-to-r from-blue-100 to-sky-50">
                  <th className="border-b border-blue-200 p-4 font-bold text-blue-950">
                    Point
                  </th>
                  <th className="border-b border-blue-200 p-4 font-bold text-blue-950">
                    Business Cycle
                  </th>
                  <th className="border-b border-blue-200 p-4 font-bold text-blue-950">
                    Long-Term Economic Growth
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-blue-100">
                  <td className="p-4 font-bold text-slate-800">Focus</td>
                  <td className="p-4 leading-6 text-slate-600">
                    Ups and downs in economic activity.
                  </td>
                  <td className="p-4 leading-6 text-slate-600">
                    Sustained increase in productive capacity and real output.
                  </td>
                </tr>
                <tr className="border-b border-blue-100 bg-blue-50/40">
                  <td className="p-4 font-bold text-slate-800">Pattern</td>
                  <td className="p-4 leading-6 text-slate-600">
                    Irregular fluctuations.
                  </td>
                  <td className="p-4 leading-6 text-slate-600">
                    A longer-term upward trend may develop.
                  </td>
                </tr>
                <tr className="border-b border-blue-100">
                  <td className="p-4 font-bold text-slate-800">
                    Main Drivers
                  </td>
                  <td className="p-4 leading-6 text-slate-600">
                    Demand shifts, financial conditions, expectations, and
                    shocks.
                  </td>
                  <td className="p-4 leading-6 text-slate-600">
                    Productivity, skills, technology, investment, and
                    resources.
                  </td>
                </tr>
                <tr className="bg-blue-50/40">
                  <td className="p-4 font-bold text-slate-800">Example</td>
                  <td className="p-4 leading-6 text-slate-600">
                    Production falls during a downturn and later recovers.
                  </td>
                  <td className="p-4 leading-6 text-slate-600">
                    Improved technology allows the economy to produce more
                    over many years.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-5 rounded-2xl border border-blue-200 bg-gradient-to-r from-blue-50 to-white p-5">
          <p className="leading-7 text-slate-700">
            <span className="font-bold text-blue-950">Key Insight:</span> an
            economy can experience a contraction even while its long-term
            productive capacity continues to improve. Short-term fluctuations
            and long-term growth are related, but they are not identical.
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section className="border-y border-blue-100 bg-gradient-to-b from-blue-50/70 via-white to-blue-50/70">
        <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 sm:py-16">
          <SectionHeading
            eyebrow="Quick Answers"
            title="Frequently Asked Questions About The Business Cycle"
            description="Review the most important definitions and common misunderstandings."
          />

          <div className="space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-blue-100 bg-white p-5 shadow-sm open:border-blue-200 open:bg-gradient-to-r open:from-white open:to-blue-50/70"
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-bold text-blue-950 marker:hidden">
                  <span>{faq.question}</span>
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-800 transition group-open:rotate-45">
                    <span className="text-xl leading-none">+</span>
                  </span>
                </summary>
                <p className="mt-4 border-t border-blue-100 pt-4 leading-7 text-slate-700">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      

      {/* Sources */}
      <section className="border-t border-blue-100 bg-gradient-to-b from-blue-50/80 to-white">
        <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
          <h2 className="text-lg font-bold text-blue-950">
            Sources And Further Reading
          </h2>
          <p className="mt-2 leading-7 text-slate-600">
            These sources explain business-cycle phases, recession definitions,
            and the indicators economists use. The factory and sales examples
            on this page are fictional illustrations.
          </p>

          <ul className="mt-4 space-y-3">
            <li>
              <a
                href="https://www.stlouisfed.org/publications/page-one-economics/2023/03/01/all-about-the-business-cycle-where-do-recessions-come-from"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-bold text-blue-700 underline decoration-blue-200 underline-offset-4 hover:text-blue-900"
              >
                Federal Reserve Bank Of St. Louis: All About The Business Cycle
                <ArrowRight size={15} />
              </a>
            </li>
            <li>
              <a
                href="https://www.nber.org/research/business-cycle-dating/business-cycle-dating-procedure-frequently-asked-questions"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-bold text-blue-700 underline decoration-blue-200 underline-offset-4 hover:text-blue-900"
              >
                NBER: Business Cycle Dating FAQs <ArrowRight size={15} />
              </a>
            </li>
            <li>
              <a
                href="https://www.federalreserve.gov/faqs/what-is-macroeconomics.htm"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-bold text-blue-700 underline decoration-blue-200 underline-offset-4 hover:text-blue-900"
              >
                Federal Reserve: What Is Macroeconomics?{" "}
                <ArrowRight size={15} />
              </a>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
