
import Link from "next/link";
import {
  AlertTriangle,
  ArrowDown,
  ArrowRight,
  Banknote,
  BookOpen,
  ChartNoAxesCombined,
  CircleDollarSign,
  Factory,
  Gauge,
  Landmark,
  Lightbulb,
  Package,
  ShieldCheck,
  ShoppingCart,
  TrendingDown,
  Wallet,
} from "lucide-react";
import AdSlot from "../../../../components/AdSlot";

export const metadata = {
  title: "Hyperinflation: Meaning, Causes, Effects & Examples | PriceTag HUB",
  description:
    "Learn what hyperinflation means, its causes, formula, warning signs, historical examples from Germany and Zimbabwe, effects on savings and businesses, and how governments control it.",
  alternates: {
    canonical: "https://www.pricetag.co.in/economics/inflation/hyperinflation",
  },
  openGraph: {
    title: "Hyperinflation Explained: Causes, Effects and Real Examples",
    description:
      "Understand how money loses purchasing power during hyperinflation, why it happens, its effects on ordinary families, and how economies recover.",
    url: "https://www.pricetag.co.in/economics/inflation/hyperinflation",
    type: "article",
  },
};

const causes = [
  {
    icon: Banknote,
    title: "Excessive money creation",
    description:
      "When governments rely heavily on newly created money to finance spending, while the supply of goods and services cannot keep up, inflation can accelerate.",
  },
  {
    icon: Landmark,
    title: "Government fiscal crisis",
    description:
      "Large budget deficits, falling tax revenue, and an inability to borrow sustainably can make it harder for a government to finance its obligations.",
  },
  {
    icon: Factory,
    title: "Collapse in production",
    description:
      "War, political instability, disrupted supply chains, or declining agricultural and industrial output can leave too few goods available.",
  },
  {
    icon: TrendingDown,
    title: "Loss of confidence in money",
    description:
      "When people expect the currency to lose value rapidly, they may spend it immediately or demand foreign currency and tangible assets instead.",
  },
];

const consequences = [
  {
    icon: ShoppingCart,
    title: "Everyday essentials become unaffordable",
    description:
      "Food, cooking fuel, transport, medicines, and rent may become much more expensive in a short period.",
  },
  {
    icon: Wallet,
    title: "Cash savings lose purchasing power",
    description:
      "Money kept in a bank account or at home may buy far fewer goods, particularly if interest rates fail to keep pace with inflation.",
  },
  {
    icon: Factory,
    title: "Businesses struggle to operate",
    description:
      "Companies cannot reliably estimate replacement costs, set prices, pay suppliers, or plan future investment.",
  },
  {
    icon: Package,
    title: "Shortages and supply disruptions",
    description:
      "Businesses may stop selling at prices that do not cover replacement costs. Consumers may stockpile goods, worsening shortages.",
  },
  {
    icon: CircleDollarSign,
    title: "The currency loses credibility",
    description:
      "People and businesses may increasingly prefer stable foreign currencies or other ways of preserving purchasing power.",
  },
  {
    icon: AlertTriangle,
    title: "Poverty and social instability",
    description:
      "People on fixed incomes, pensioners, and households with limited financial resources can be hit especially hard.",
  },
];

const recoverySteps = [
  {
    number: "01",
    title: "Restore credible government finances",
    description:
      "Create a sustainable plan for public spending, taxation, debt, and government obligations.",
  },
  {
    number: "02",
    title: "Stop uncontrolled monetary financing",
    description:
      "Establish credible monetary policy and prevent persistent deficits from being financed through excessive money creation.",
  },
  {
    number: "03",
    title: "Restore confidence in the currency",
    description:
      "Use a credible monetary framework, improve transparency, and establish clear rules for monetary and exchange-rate policy.",
  },
  {
    number: "04",
    title: "Rebuild production and supply",
    description:
      "Restore agriculture, manufacturing, imports, logistics, and access to essential goods so the supply of products can recover.",
  },
];

const relatedTopics = [
  {
    title: "Core vs Headline Inflation",
    description:
      "Learn why food and fuel prices can push overall inflation above underlying inflation.",
    href: "/economics/inflation/core-vs-headline-inflation",
  },
  {
    title: "Inflation Rate Formula",
    description:
      "Calculate inflation using price index values and understand the percentage change.",
    href: "/economics/inflation/inflation-rate-formula",
  },
  {
    title: "Effects of Inflation",
    description:
      "Explore how inflation affects purchasing power, savings, businesses, and the economy.",
    href: "/economics/inflation/effects-of-inflation",
  },
  {
    title: "CPI vs WPI",
    description:
      "Understand the difference between consumer prices and wholesale prices in India.",
    href: "/economics/inflation/cpi-vs-wpi",
  },
];

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mb-8 max-w-3xl">
      <p className="mb-2 text-sm font-bold uppercase tracking-[0.16em] text-blue-700">
        {eyebrow}
      </p>
      <h2 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
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

function InfoCard({ icon: Icon, title, description }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
      <div className="mb-4 inline-flex rounded-xl bg-blue-50 p-3 text-blue-700">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-lg font-bold text-slate-950">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
    </div>
  );
}

export default function HyperinflationPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* HERO */}
      <section className="overflow-hidden border-b border-red-100 bg-gradient-to-br from-red-50 via-white to-orange-50">
        <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-red-200 bg-white px-3 py-1.5 text-sm font-bold text-red-800">
                <ChartNoAxesCombined className="h-4 w-4" />
                Economics · Inflation · India & World
              </div>

              <h1 className="max-w-2xl text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl">
                Hyperinflation: When Money Loses Its Value
              </h1>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
                What happens when prices rise so rapidly that salaries cannot
                keep up, savings lose purchasing power, and people struggle to
                afford everyday essentials? Understand hyperinflation, why it
                happens, and how countries can recover.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="#meaning"
                  className="inline-flex items-center gap-2 rounded-xl bg-red-700 px-5 py-3 font-bold text-white transition hover:bg-red-800"
                >
                  Understand Hyperinflation
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#examples"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 font-bold text-slate-800 transition hover:bg-slate-50"
                >
                  Historical Examples
                </a>
              </div>

              <p className="mt-5 text-sm leading-6 text-slate-500">
                A complete guide to the extreme end of inflation, with practical
                examples and an India-focused explanation.
              </p>
            </div>

            {/* VISUAL: PURCHASING POWER */}
            <div className="rounded-3xl border border-red-100 bg-white p-5 shadow-xl shadow-red-100/50 sm:p-7">
              <p className="font-bold text-slate-950">
                What happens to the value of money?
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                Imagine the same banknote buying fewer and fewer essentials.
              </p>

              <div className="mt-6 grid grid-cols-3 gap-3">
                {[
                  { period: "Earlier", items: 5, label: "More goods" },
                  { period: "Later", items: 3, label: "Fewer goods" },
                  { period: "Extreme", items: 1, label: "Very little" },
                ].map((stage, index) => (
                  <div
                    key={stage.period}
                    className={`rounded-2xl p-3 text-center ${
                      index === 0
                        ? "bg-emerald-50"
                        : index === 1
                          ? "bg-amber-50"
                          : "bg-red-50"
                    }`}
                  >
                    <p className="text-xs font-bold text-slate-700">
                      {stage.period}
                    </p>
                    <div className="my-4 flex min-h-20 flex-wrap content-center justify-center gap-1">
                      {Array.from({ length: stage.items }).map((_, i) => (
                        <span
                          key={i}
                          className={`inline-flex h-7 w-7 items-center justify-center rounded-lg ${
                            index === 0
                              ? "bg-emerald-200 text-emerald-900"
                              : index === 1
                                ? "bg-amber-200 text-amber-900"
                                : "bg-red-200 text-red-900"
                          }`}
                        >
                          <ShoppingCart className="h-4 w-4" />
                        </span>
                      ))}
                    </div>
                    <p className="text-xs font-bold text-slate-700">
                      {stage.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-5 flex items-start gap-3 rounded-xl bg-slate-50 p-4">
                <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-red-700" />
                <p className="text-sm leading-6 text-slate-600">
                  Conceptual illustration, not actual historical data. During
                  hyperinflation, prices can change so rapidly that holding cash
                  becomes a serious financial risk.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK ANSWER */}
      <section className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
        <div className="rounded-2xl border border-red-200 bg-red-50 p-6 sm:p-8">
          <div className="flex items-start gap-4">
            <div className="rounded-xl bg-white p-3 text-red-700">
              <Lightbulb className="h-6 w-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-950">
                Hyperinflation in simple words
              </h2>
              <p className="mt-3 leading-7 text-slate-700">
                Hyperinflation is an extreme and generally accelerating rise in
                prices that severely damages a currency&apos;s purchasing power.
                A widely used academic definition identifies its onset when
                monthly inflation exceeds 50%.
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                There is no single universal definition used by every
                institution. The 50% monthly threshold is a traditional
                benchmark, not a prediction that any country approaching
                ordinary inflation levels will experience hyperinflation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MEANING */}
      <section id="meaning" className="mx-auto max-w-6xl px-5 py-10 sm:px-8">
        <SectionHeading
          eyebrow="01 · Definition"
          title="What Is Hyperinflation?"
          description="Hyperinflation is far more severe than the ordinary price increases experienced in most economies."
        />

        <div className="grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 p-6">
            <h3 className="text-xl font-bold text-slate-950">
              Ordinary inflation
            </h3>
            <p className="mt-3 leading-7 text-slate-600">
              Prices rise over time. For example, a product that costs ₹100 may
              cost ₹105 after a year if its price rises by 5%.
            </p>
            <div className="mt-5 rounded-xl bg-blue-50 p-4">
              <p className="text-sm font-bold text-blue-800">
                Example · 5% annual inflation
              </p>
              <p className="mt-2 text-2xl font-bold text-slate-950">₹100 → ₹105</p>
            </div>
          </div>

          <div className="rounded-2xl border border-red-200 bg-red-50/60 p-6">
            <h3 className="text-xl font-bold text-slate-950">
              Hyperinflation
            </h3>
            <p className="mt-3 leading-7 text-slate-600">
              Prices rise at an extraordinarily rapid rate, often alongside a
              collapse in confidence in the currency. Businesses and households
              struggle to keep up.
            </p>
            <div className="mt-5 rounded-xl bg-white p-4">
              <p className="text-sm font-bold text-red-800">
                Example · 50% monthly inflation
              </p>
              <p className="mt-2 text-2xl font-bold text-slate-950">
                ₹100 → ₹150
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                If the same monthly rate continued for 12 months, the original
                ₹100 item would cost about ₹1,297. This is a mathematical
                illustration, not a forecast.
              </p>
            </div>
          </div>
        </div>

        <p className="mt-5 text-sm leading-6 text-slate-500">
          At 50% monthly inflation, prices do not merely rise by 600% over a
          year. Monthly increases compound, producing a much larger cumulative
          change.
        </p>
      </section>
<AdSlot />
      {/* FORMULA */}
      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
          <SectionHeading
            eyebrow="02 · Calculation"
            title="How Is Inflation Calculated?"
            description="The standard inflation formula measures the percentage change in a price index over a period."
          />

          <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
            <div className="rounded-xl bg-slate-900 p-5 text-center text-white sm:p-7">
              <p className="mb-3 text-sm font-bold uppercase tracking-widest text-blue-300">
                Inflation Rate Formula
              </p>
              <p className="text-lg font-bold leading-8 sm:text-2xl">
                Inflation (%) = ((New CPI − Old CPI) ÷ Old CPI) × 100
              </p>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {[
                {
                  title: "Old CPI",
                  value: "100",
                  description: "Starting consumer price index.",
                },
                {
                  title: "New CPI",
                  value: "150",
                  description: "Index after a hypothetical price increase.",
                },
                {
                  title: "Inflation",
                  value: "50%",
                  description: "Increase over the selected period.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl bg-blue-50 p-4 text-center"
                >
                  <p className="text-sm font-semibold text-slate-600">
                    {item.title}
                  </p>
                  <p className="mt-2 text-2xl font-bold text-blue-800">
                    {item.value}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-5 text-sm leading-6 text-slate-600">
              The example shows a 50% increase in one month if the two index
              readings are exactly one month apart. Hyperinflation is assessed
              using the actual rate and duration of price increases, not simply
              a high price level.
            </p>
          </div>
        </div>
      </section>

      {/* CAUSES */}
      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <SectionHeading
          eyebrow="03 · Why it happens"
          title="What Causes Hyperinflation?"
          description="Hyperinflation generally develops when serious economic disruptions interact with monetary and fiscal problems."
        />

        <div className="grid gap-5 sm:grid-cols-2">
          {causes.map((item) => (
            <InfoCard key={item.title} {...item} />
          ))}
        </div>

        <div className="mt-7 rounded-2xl border border-amber-200 bg-amber-50 p-6">
          <h3 className="font-bold text-slate-950">
            Does printing money always cause hyperinflation?
          </h3>
          <p className="mt-3 leading-7 text-slate-700">
            No. Money creation alone does not automatically produce
            hyperinflation. The risk depends on economic conditions, production,
            public confidence, government finances, and monetary policy.
            Historically, extreme episodes have often involved uncontrolled
            monetary financing combined with severe fiscal or economic crises.
          </p>
        </div>
      </section>

      {/* SPIRAL DIAGRAM */}
      <section className="border-y border-red-100 bg-gradient-to-br from-red-50 via-white to-orange-50">
        <div className="mx-auto max-w-5xl px-5 py-14 sm:px-8">
          <SectionHeading
            eyebrow="04 · The inflation spiral"
            title="How Can Hyperinflation Become a Vicious Cycle?"
            description="One dangerous pattern is a loss of confidence that reinforces itself. This is not inevitable, but it can make an existing crisis much harder to stop."
          />

          <div className="mx-auto max-w-3xl space-y-2">
            {[
              {
                number: "01",
                title: "Government struggles to finance spending",
                detail: "Tax revenue and borrowing are insufficient.",
              },
              {
                number: "02",
                title: "Excessive monetary financing",
                detail: "More money is created without matching growth in output.",
              },
              {
                number: "03",
                title: "Prices and expectations rise",
                detail: "Households and businesses expect further price increases.",
              },
              {
                number: "04",
                title: "People rush to spend their money",
                detail: "Demand for goods and foreign currency increases.",
              },
              {
                number: "05",
                title: "Confidence in the currency weakens",
                detail: "The government faces greater difficulty stabilizing prices.",
              },
            ].map((item, index) => (
              <div key={item.number}>
                <div className="flex items-start gap-4 rounded-2xl border border-red-100 bg-white p-4 shadow-sm sm:p-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-100 font-bold text-red-800">
                    {item.number}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-950">{item.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      {item.detail}
                    </p>
                  </div>
                </div>
                {index < 4 && (
                  <div className="flex justify-center py-1">
                    <ArrowDown className="h-5 w-5 text-red-500" />
                  </div>
                )}
              </div>
            ))}

            <div className="mt-4 rounded-2xl bg-slate-900 p-5 text-white">
              <p className="font-bold">The cycle may repeat</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Breaking this cycle requires credible policy changes and
                restoring confidence, not merely printing larger banknotes or
                changing the numbers printed on them.
              </p>
            </div>
          </div>
        </div>
      </section>
<AdSlot />
      {/* HISTORICAL EXAMPLES */}
      <section id="examples" className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <SectionHeading
          eyebrow="05 · Historical examples"
          title="Countries That Experienced Hyperinflation"
          description="These episodes show how extreme inflation can emerge under different circumstances. The figures below are approximate historical illustrations, not directly comparable modern inflation statistics."
        />

        <div className="grid gap-5 md:grid-cols-2">
          <div className="overflow-hidden rounded-2xl border border-slate-200">
            <div className="bg-gradient-to-br from-amber-100 to-orange-50 p-5">
              <p className="text-sm font-bold text-orange-800">
                EUROPE · 1923
              </p>
              <h3 className="mt-2 text-2xl font-bold text-slate-950">
                Weimar Germany
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Germany's postwar fiscal crisis, reparations obligations,
                economic disruption, and monetary expansion contributed to a
                historic collapse in the value of the paper mark.
              </p>
            </div>
            <div className="p-5">
              <h4 className="font-bold text-slate-950">What people faced</h4>
              <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-600">
                <li>• Prices changed extraordinarily quickly.</li>
                <li>• Cash wages could lose value before they were spent.</li>
                <li>• Monetary reform was central to stabilization.</li>
              </ul>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-slate-200">
            <div className="bg-gradient-to-br from-emerald-100 to-green-50 p-5">
              <p className="text-sm font-bold text-emerald-800">
                AFRICA · 2000s
              </p>
              <h3 className="mt-2 text-2xl font-bold text-slate-950">
                Zimbabwe
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Severe economic contraction, falling production, fiscal
                problems, and rapid monetary expansion accompanied an extreme
                collapse in the purchasing power of the Zimbabwean dollar.
              </p>
            </div>
            <div className="p-5">
              <h4 className="font-bold text-slate-950">What people faced</h4>
              <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-600">
                <li>• Rapidly changing prices and severe shortages.</li>
                <li>• Wages and savings lost purchasing power.</li>
                <li>• Foreign currencies became important in everyday trade.</li>
              </ul>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-slate-200">
            <div className="bg-gradient-to-br from-blue-100 to-indigo-50 p-5">
              <p className="text-sm font-bold text-blue-800">
                LATIN AMERICA · FROM 2010s
              </p>
              <h3 className="mt-2 text-2xl font-bold text-slate-950">
                Venezuela
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                A prolonged economic and political crisis, falling production,
                fiscal and monetary problems, and a collapse in confidence
                contributed to hyperinflation.
              </p>
            </div>
            <div className="p-5">
              <h4 className="font-bold text-slate-950">Key lesson</h4>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Dependence on a major export does not guarantee economic
                stability when production, institutions, and public finances
                deteriorate.
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-slate-200">
            <div className="bg-gradient-to-br from-purple-100 to-violet-50 p-5">
              <p className="text-sm font-bold text-purple-800">
                CENTRAL EUROPE · 1946
              </p>
              <h3 className="mt-2 text-2xl font-bold text-slate-950">
                Postwar Hungary
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Hungary experienced one of the most extreme recorded
                hyperinflation episodes in history after World War II, amid
                severe postwar economic disruption.
              </p>
            </div>
            <div className="p-5">
              <h4 className="font-bold text-slate-950">Key lesson</h4>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                When prices rise at an extraordinary rate, ordinary currency
                denominations and familiar ways of paying can become
                impractical.
              </p>
            </div>
          </div>
        </div>

        <p className="mt-5 text-sm leading-6 text-slate-500">
          Historical references: IMF research on hyperinflation and the
          Cleveland Fed's educational guide to extreme inflation.
        </p>
      </section>

      {/* EFFECTS */}
      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
          <SectionHeading
            eyebrow="06 · Economic consequences"
            title="What Are the Effects of Hyperinflation?"
            description="Hyperinflation affects much more than the price printed on a product. It disrupts how households save, businesses operate, and governments provide services."
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {consequences.map((item) => (
              <InfoCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* EXAMPLE */}
      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <SectionHeading
          eyebrow="07 · Household example"
          title="How Does Hyperinflation Affect an Ordinary Family?"
          description="Imagine a family whose income does not increase as fast as the prices of essential goods."
        />

        <div className="grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 p-6">
            <p className="text-sm font-bold uppercase tracking-wider text-slate-500">
              Before the crisis
            </p>
            <h3 className="mt-3 text-3xl font-bold text-slate-950">
              ₹30,000
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Illustrative monthly household income
            </p>
            <div className="mt-5 space-y-3">
              {[
                ["Food", "₹8,000"],
                ["Rent and utilities", "₹8,000"],
                ["Transport", "₹4,000"],
                ["Other expenses", "₹6,000"],
                ["Remaining", "₹4,000"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="flex justify-between gap-3 border-b border-slate-100 pb-2 text-sm"
                >
                  <span className="text-slate-600">{label}</span>
                  <span className="font-bold text-slate-900">{value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-red-200 bg-red-50/60 p-6">
            <p className="text-sm font-bold uppercase tracking-wider text-red-800">
              During extreme inflation
            </p>
            <h3 className="mt-3 text-3xl font-bold text-slate-950">
              ₹30,000
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              The same income, assuming it has not increased
            </p>
            <div className="mt-5 rounded-xl bg-white p-4">
              <p className="font-bold text-slate-950">
                The problem is purchasing power
              </p>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                If essential prices increase dramatically, ₹30,000 buys fewer
                goods and services. The family may have to cut spending, use
                savings, or struggle to pay for necessities.
              </p>
            </div>
            <p className="mt-4 text-sm leading-6 text-red-900">
              These are illustrative amounts, not actual household or
              historical inflation data.
            </p>
          </div>
        </div>
      </section>
<AdSlot />
      {/* INDIA */}
      <section className="border-y border-blue-100 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
          <SectionHeading
            eyebrow="08 · India"
            title="Could Hyperinflation Happen in India?"
            description="India experiences inflation, but ordinary inflation and hyperinflation are very different economic conditions."
          />

          <div className="rounded-2xl border border-blue-100 bg-white p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-blue-100 p-3 text-blue-800">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-950">
                  What helps protect an economy?
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  Credible monetary policy, sustainable government finances,
                  effective institutions, reliable production, and public
                  confidence can help prevent extreme inflation. No country
                  should assume that stability is automatic, but high ordinary
                  inflation does not by itself mean hyperinflation is imminent.
                </p>
              </div>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: "RBI monetary policy",
                  description:
                    "The Reserve Bank of India uses monetary policy to pursue price stability while considering economic growth.",
                },
                {
                  title: "Government finances",
                  description:
                    "Sustainable public finances and credible financing arrangements help reduce the risk of a destabilizing fiscal crisis.",
                },
                {
                  title: "Domestic production",
                  description:
                    "Reliable food supplies, manufacturing, logistics, and imports help the economy meet demand.",
                },
                {
                  title: "Economic resilience",
                  description:
                    "Diversified industries, functioning financial institutions, and credible policies support stability during shocks.",
                },
              ].map((item) => (
                <div key={item.title} className="rounded-xl bg-slate-50 p-4">
                  <h4 className="font-bold text-slate-950">{item.title}</h4>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* RECOVERY */}
      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <SectionHeading
          eyebrow="09 · Economic recovery"
          title="How Can a Country Stop Hyperinflation?"
          description="There is no instant solution. Successful stabilization generally requires coordinated economic reforms and a credible plan."
        />

        <div className="space-y-4">
          {recoverySteps.map((item) => (
            <div
              key={item.number}
              className="flex items-start gap-4 rounded-2xl border border-slate-200 p-5 sm:p-6"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-100 font-bold text-emerald-800">
                {item.number}
              </div>
              <div>
                <h3 className="font-bold text-slate-950">{item.title}</h3>
                <p className="mt-2 leading-7 text-slate-600">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-2xl bg-slate-900 p-6 text-white sm:p-8">
          <h3 className="text-xl font-bold">
            Does introducing a new currency solve the problem?
          </h3>
          <p className="mt-3 leading-7 text-slate-300">
            Replacing a currency or removing zeros from banknotes can simplify
            transactions, but it does not independently stop inflation. Lasting
            stabilization requires credible economic policies and restored
            confidence in the currency.
          </p>
        </div>
      </section>

      {/* MISCONCEPTIONS */}
      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
          <SectionHeading
            eyebrow="10 · Common misconceptions"
            title="What Hyperinflation Does Not Mean"
            description="These distinctions matter when interpreting economic news."
          />

          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <h3 className="font-bold text-slate-950">
                High inflation is not always hyperinflation
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Even a substantial annual inflation rate is different from the
                extraordinary monthly rates associated with traditional
                definitions of hyperinflation.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <h3 className="font-bold text-slate-950">
                A large banknote does not mean an economy is richer
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                The number printed on a banknote tells you its face value, not
                how many goods and services it can buy.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <h3 className="font-bold text-slate-950">
                A new currency is not a complete cure
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Monetary reform must be supported by sustainable finances,
                credible monetary policy, and a functioning productive economy.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <h3 className="font-bold text-slate-950">
                Recovery is possible, but not effortless
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Stabilization can restore confidence, but lost savings,
                disrupted businesses, and damaged institutions may take years
                to recover.
              </p>
            </div>
          </div>
        </div>
      </section>
<AdSlot />
      {/* FAQ */}
      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <SectionHeading
          eyebrow="11 · Frequently asked questions"
          title="Hyperinflation FAQs"
          description="Quick answers to common questions about extreme inflation."
        />

        <div className="space-y-4">
          {[
            {
              question: "What is the usual definition of hyperinflation?",
              answer:
                "A widely used academic definition identifies hyperinflation when monthly inflation exceeds 50%. Other institutions may use different thresholds for extreme inflation.",
            },
            {
              question: "Can hyperinflation happen overnight?",
              answer:
                "It can accelerate very rapidly, but major hyperinflation episodes usually involve underlying economic, fiscal, monetary, or political problems. Warning signs and timelines vary.",
            },
            {
              question: "What happens to savings during hyperinflation?",
              answer:
                "Cash savings lose purchasing power rapidly when interest earned is far below inflation. The effect on deposits and other assets depends on their terms, currency, and applicable policies.",
            },
            {
              question: "Can a country recover from hyperinflation?",
              answer:
                "Yes. Credible stabilization policies, sustainable public finances, monetary reform, and recovery in production can help restore confidence. The social and economic damage may persist much longer.",
            },
            {
              question: "Does hyperinflation mean all money becomes worthless?",
              answer:
                "Not necessarily in a literal sense, but the domestic currency may lose much of its purchasing power and become unreliable for saving and pricing goods.",
            },
          ].map((item) => (
            <details
              key={item.question}
              className="group rounded-2xl border border-slate-200 bg-white p-5"
            >
              <summary className="cursor-pointer list-none pr-6 font-bold text-slate-950 marker:hidden">
                <span className="flex items-center justify-between gap-4">
                  {item.question}
                  <ArrowDown className="h-5 w-5 shrink-0 text-blue-700 transition group-open:rotate-180" />
                </span>
              </summary>
              <p className="mt-4 leading-7 text-slate-600">{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

     

      {/* SOURCES */}
      <section className="mx-auto max-w-6xl px-5 py-8 sm:px-8">
        <h2 className="text-lg font-bold text-slate-950">
          Sources and further reading
        </h2>

        <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
          <li>
            <a
              href="https://www.imf.org/en/publications/fandd/issues/series/back-to-basics/inflation"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-blue-700 underline underline-offset-4"
            >
              International Monetary Fund — Inflation
            </a>{" "}
            — inflation concepts, causes, and extreme price increases.
          </li>
          <li>
            <a
              href="https://www.clevelandfed.org/center-for-inflation-research/inflation-explained-your-guide-to-inflation-basics/inflation-resources/inflation-videos/video-20230206-what-is-hyperflation"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-blue-700 underline underline-offset-4"
            >
              Federal Reserve Bank of Cleveland — What Is Hyperinflation?
            </a>{" "}
            — definition and historical examples.
          </li>
          <li>
            <a
              href="https://www.imf.org/en/publications/wp/issues/2018/12/07/the-modern-hyperinflation-cycle-46368"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-blue-700 underline underline-offset-4"
            >
              IMF Working Paper — The Modern Hyperinflation Cycle
            </a>{" "}
            — research on conditions associated with hyperinflation and
            stabilization.
          </li>
        </ul>

        <p className="mt-6 border-t border-slate-200 pt-5 text-xs leading-6 text-slate-500">
          PriceTag HUB · Knowledge, organized. This article is for educational
          purposes and does not constitute financial or investment advice.
        </p>
      </section>
    </main>
  );
}
