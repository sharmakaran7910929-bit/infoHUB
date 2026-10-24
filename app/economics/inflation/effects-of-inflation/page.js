
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  ArrowUp,
  Banknote,
  BarChart3,
  Building2,
  CheckCircle2,
  Factory,
  HandCoins,
  IndianRupee,
  Landmark,
  PiggyBank,
  ShoppingBasket,
  ShoppingCart,
  TrendingDown,
  TrendingUp,
  Users,
  Wallet,
  Wheat,
  BriefcaseBusiness,
  Scale,
  ShieldCheck,
  Truck,
  CircleHelp,
} from "lucide-react";
import AdSlot from "../../../../components/AdSlot";

export const metadata = {
  title: "Effects of Inflation and Measures to Control It",
  description:
    "Learn the major effects of inflation on consumers, savings, wages, businesses, borrowers and the economy, with practical examples and measures to control inflation in India.",
  keywords: [
    "effects of inflation",
    "impact of inflation on economy",
    "measures to control inflation",
    "how to control inflation in India",
    "inflation effects on consumers",
    "RBI monetary policy",
    "fiscal policy to control inflation",
  ],
  alternates: {
    canonical: "/economics/inflation/effects-of-inflation",
  },
  openGraph: {
    title: "Effects of Inflation and Measures to Control It",
    description:
      "Understand how inflation affects daily life and how monetary policy, fiscal policy and supply-side measures can help control rising prices.",
    url: "/economics/inflation/effects-of-inflation",
    type: "article",
  },
};

const impacts = [
  {
    number: "01",
    title: "Reduced Purchasing Power",
    icon: ShoppingBasket,
    color: "blue",
    description:
      "When prices rise, the same amount of money buys fewer goods and services. This is one of the most direct effects of inflation.",
    example:
      "If a family spends ₹5,000 on a particular basket of groceries and the same basket later costs ₹5,500, the family needs ₹500 more to buy the same items.",
    visualTitle: "The same money buys less",
    before: "₹5,000",
    after: "₹5,000",
    beforeText: "More groceries",
    afterText: "Fewer groceries",
    result: "Purchasing power falls",
  },
  {
    number: "02",
    title: "Higher Cost of Living",
    icon: Users,
    color: "orange",
    description:
      "Inflation can increase household expenses such as food, rent, transport, electricity, education and healthcare.",
    example:
      "A household may have to spend more on cooking oil, vegetables, school transport and electricity, leaving less money for entertainment or other needs.",
    visualTitle: "A larger share of income goes to essentials",
    before: "₹20,000",
    after: "₹23,000",
    beforeText: "Earlier monthly expenses",
    afterText: "Higher monthly expenses",
    result: "Less money left over",
  },
  {
    number: "03",
    title: "Impact on Savings",
    icon: PiggyBank,
    color: "purple",
    description:
      "If inflation is higher than the return earned on savings, the real purchasing power of those savings declines.",
    example:
      "If savings earn 5% interest while inflation is 6%, the purchasing power of the money generally declines by about 1% a year before tax, using a simple approximation.",
    visualTitle: "Compare savings returns with inflation",
    before: "5%",
    after: "6%",
    beforeText: "Savings interest",
    afterText: "Inflation rate",
    result: "Real return is approximately −1%",
  },
  {
    number: "04",
    title: "Impact on Fixed-Income Earners",
    icon: Wallet,
    color: "rose",
    description:
      "People receiving fixed pensions, fixed salaries or other income that does not keep pace with prices may find it harder to maintain their standard of living.",
    example:
      "If monthly income remains ₹25,000 but essential expenses rise, the household may need to reduce discretionary spending or use more of its savings.",
    visualTitle: "Income stays fixed while expenses rise",
    before: "₹25,000",
    after: "₹28,000",
    beforeText: "Income stays the same",
    afterText: "Illustrative monthly expenses",
    result: "Budget pressure increases",
  },
  {
    number: "05",
    title: "Impact on Businesses",
    icon: Factory,
    color: "amber",
    description:
      "Businesses may face higher costs for raw materials, wages, electricity, fuel, transport and packaging. Their profit margins can shrink if they cannot pass these costs to customers.",
    example:
      "A small bakery may pay more for flour, cooking gas, electricity and delivery. It must decide whether to absorb the extra cost, improve efficiency or increase prices.",
    visualTitle: "Higher input costs put pressure on profit",
    before: "₹100",
    after: "₹115",
    beforeText: "Earlier unit cost",
    afterText: "Illustrative new unit cost",
    result: "Profit margin may shrink",
  },
  {
    number: "06",
    title: "Impact on Borrowers and Lenders",
    icon: Banknote,
    color: "teal",
    description:
      "Unexpected inflation can reduce the real value of fixed repayments. However, borrowers may face higher loan interest rates when monetary policy tightens, and lenders may lose purchasing power if returns do not keep pace with inflation.",
    example:
      "A person with a fixed-rate loan may benefit from repaying in money that has less purchasing power, but a person taking a new or floating-rate loan could face higher interest costs.",
    visualTitle: "The effect depends on the loan",
    before: "Fixed rate",
    after: "Floating rate",
    beforeText: "Payment may stay stable",
    afterText: "Payment may rise",
    result: "Impact differs by loan terms",
  },
  {
    number: "07",
    title: "Impact on Income Inequality",
    icon: Scale,
    color: "indigo",
    description:
      "Inflation can affect people differently. Households that spend a large share of their income on essential goods may be hit harder when food, fuel and housing costs rise quickly.",
    example:
      "A lower-income household may have less flexibility to reduce essential purchases, while a household with more disposable income may have more options to adjust its spending.",
    visualTitle: "Essential expenses take a larger share",
    before: "60%",
    after: "75%",
    beforeText: "Illustrative essential spending share",
    afterText: "Illustrative higher share",
    result: "Less room for other spending",
  },
  {
    number: "08",
    title: "Impact on Economic Growth",
    icon: TrendingUp,
    color: "emerald",
    description:
      "High or unpredictable inflation can make planning difficult for businesses and households. It may discourage some investment, weaken confidence and create uncertainty about future costs and returns.",
    example:
      "A manufacturer uncertain about future material and borrowing costs may postpone expanding its factory until prices and demand become more predictable.",
    visualTitle: "Uncertainty can delay investment",
    before: "Plan expansion",
    after: "Delay decision",
    beforeText: "Expected stable costs",
    afterText: "Uncertain future costs",
    result: "Investment may slow",
  },
];

const controlMeasures = [
  {
    number: "01",
    title: "Monetary Policy by the RBI",
    icon: Landmark,
    color: "blue",
    summary:
      "The Reserve Bank of India can use monetary policy to reduce excessive demand and help bring inflation towards its target.",
    measures: [
      {
        title: "Increase the policy interest rate",
        text: "Higher borrowing costs can discourage some loans and interest-sensitive spending, reducing demand pressures over time.",
      },
      {
        title: "Manage liquidity",
        text: "RBI liquidity operations can influence the amount and cost of short-term funds available in the banking system.",
      },
      {
        title: "Communicate policy clearly",
        text: "Credible policy signals can help shape inflation expectations and improve price stability.",
      },
    ],
    flow: ["Policy tightening", "Costlier borrowing", "Demand moderates", "Inflation pressure may ease"],
    note:
      "Monetary policy usually works with a time lag. Higher rates cannot directly produce more vegetables, oil or fuel when supply is disrupted.",
  },
  {
    number: "02",
    title: "Fiscal Policy by the Government",
    icon: Building2,
    color: "orange",
    summary:
      "The government can influence overall demand through taxation, public spending and its budget decisions.",
    measures: [
      {
        title: "Reduce excessive demand where appropriate",
        text: "Carefully targeted spending or tax changes can moderate demand when the economy is overheating.",
      },
      {
        title: "Use taxes on essential commodities carefully",
        text: "Reducing certain taxes or duties may lower prices paid by consumers, depending on how much of the reduction is passed through.",
      },
      {
        title: "Improve the quality of public spending",
        text: "Efficient spending on logistics, storage and productive infrastructure can improve supply over time.",
      },
    ],
    flow: ["Budget and tax choices", "Demand or costs change", "Market adjustment", "Inflation pressure may ease"],
    note:
      "Broad tax cuts or extra spending can also increase demand. The effect depends on the measure, funding, market conditions and whether supply can respond.",
  },
  {
    number: "03",
    title: "Increase Production and Supply",
    icon: Wheat,
    color: "emerald",
    summary:
      "Supply-side measures are especially important when inflation comes from shortages or higher production costs.",
    measures: [
      {
        title: "Improve agricultural supply",
        text: "Better irrigation, storage, transport and timely market arrivals can reduce avoidable food shortages and wastage.",
      },
      {
        title: "Remove supply bottlenecks",
        text: "Smoother freight movement, adequate warehousing and reliable energy can help businesses deliver goods at lower cost.",
      },
      {
        title: "Facilitate imports when needed",
        text: "Appropriate import or trade measures can help fill temporary domestic shortages, subject to global prices and availability.",
      },
    ],
    flow: ["Supply improves", "Shortages ease", "Availability increases", "Price pressure may fall"],
    note:
      "Supply-side measures can be more direct than interest-rate changes for specific shortages, but new production capacity can take time to develop.",
  },
  {
    number: "04",
    title: "Reduce Unnecessary Costs and Bottlenecks",
    icon: Truck,
    color: "purple",
    summary:
      "Improving distribution and reducing avoidable costs can help goods reach consumers more efficiently.",
    measures: [
      {
        title: "Improve storage and cold chains",
        text: "Better facilities can reduce spoilage of vegetables, fruit, dairy products and other perishable goods.",
      },
      {
        title: "Strengthen transport and distribution",
        text: "Efficient logistics can reduce delays, wastage and some transport costs.",
      },
      {
        title: "Monitor hoarding and market disruption",
        text: "Enforcing applicable rules against illegal hoarding or collusion can help markets function fairly, although enforcement alone cannot solve a genuine shortage.",
      },
    ],
    flow: ["Lower avoidable costs", "Smoother distribution", "Better availability", "Less cost pressure"],
    note:
      "Price controls alone may cause shortages if prices are held below sustainable market levels without addressing supply.",
  },
];

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      {eyebrow && (
        <p className="mb-3 text-sm font-bold uppercase tracking-widest text-blue-700">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}

function MiniFlow({ items, color = "blue" }) {
  const themes = {
    blue: "border-blue-200 bg-blue-50 text-blue-950",
    orange: "border-orange-200 bg-orange-50 text-orange-950",
    emerald: "border-emerald-200 bg-emerald-50 text-emerald-950",
    purple: "border-purple-200 bg-purple-50 text-purple-950",
  };

  return (
    <div className="mt-6 grid grid-cols-1 items-stretch gap-2 sm:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr]">
      {items.map((item, index) => (
        <div key={item} className="contents">
          <div
            className={`flex min-h-14 items-center justify-center rounded-xl border px-3 py-3 text-center text-sm font-bold ${themes[color]}`}
          >
            {item}
          </div>
          {index < items.length - 1 && (
            <div className="flex items-center justify-center text-slate-400">
              <ArrowRight className="h-4 w-4 rotate-90 sm:rotate-0" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function ImpactVisual({ item }) {
  const colors = {
    blue: {
      panel: "from-blue-50 to-sky-100",
      border: "border-blue-200",
      text: "text-blue-800",
      bar: "bg-blue-600",
      soft: "bg-blue-200",
    },
    orange: {
      panel: "from-orange-50 to-amber-100",
      border: "border-orange-200",
      text: "text-orange-800",
      bar: "bg-orange-500",
      soft: "bg-orange-200",
    },
    purple: {
      panel: "from-purple-50 to-violet-100",
      border: "border-purple-200",
      text: "text-purple-800",
      bar: "bg-purple-600",
      soft: "bg-purple-200",
    },
    rose: {
      panel: "from-rose-50 to-pink-100",
      border: "border-rose-200",
      text: "text-rose-800",
      bar: "bg-rose-600",
      soft: "bg-rose-200",
    },
    amber: {
      panel: "from-amber-50 to-yellow-100",
      border: "border-amber-200",
      text: "text-amber-800",
      bar: "bg-amber-600",
      soft: "bg-amber-200",
    },
    teal: {
      panel: "from-teal-50 to-cyan-100",
      border: "border-teal-200",
      text: "text-teal-800",
      bar: "bg-teal-600",
      soft: "bg-teal-200",
    },
    indigo: {
      panel: "from-indigo-50 to-blue-100",
      border: "border-indigo-200",
      text: "text-indigo-800",
      bar: "bg-indigo-600",
      soft: "bg-indigo-200",
    },
    emerald: {
      panel: "from-emerald-50 to-green-100",
      border: "border-emerald-200",
      text: "text-emerald-800",
      bar: "bg-emerald-600",
      soft: "bg-emerald-200",
    },
  };

  const c = colors[item.color];
  const Icon = item.icon;

  return (
    <div
      className={`rounded-2xl border ${c.border} bg-gradient-to-br ${c.panel} p-5`}
    >
      <div className="flex items-center gap-2">
        <div className={`rounded-xl bg-white p-2 ${c.text}`}>
          <Icon className="h-5 w-5" />
        </div>
        <p className={`text-sm font-bold ${c.text}`}>{item.visualTitle}</p>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-3">
        <div className="rounded-xl border border-white/80 bg-white/90 p-4">
          <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
            Before / comparison
          </p>
          <p className="mt-2 break-words text-xl font-bold text-slate-950 sm:text-2xl">
            {item.before}
          </p>
          <p className="mt-1 text-xs leading-5 text-slate-600">
            {item.beforeText}
          </p>
        </div>
        <div className="rounded-xl border border-white/80 bg-white/90 p-4">
          <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
            After / contrast
          </p>
          <p className="mt-2 break-words text-xl font-bold text-slate-950 sm:text-2xl">
            {item.after}
          </p>
          <p className="mt-1 text-xs leading-5 text-slate-600">
            {item.afterText}
          </p>
        </div>
      </div>

      <div className="mt-4 flex items-start gap-3 rounded-xl bg-white/90 p-3">
        <TrendingDown className={`mt-0.5 h-5 w-5 shrink-0 ${c.text}`} />
        <div>
          <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
            Main takeaway
          </p>
          <p className="mt-1 text-sm font-bold text-slate-900">
            {item.result}
          </p>
        </div>
      </div>
    </div>
  );
}

function ControlCard({ measure }) {
  const Icon = measure.icon;
  const themes = {
    blue: "border-blue-200 bg-blue-50 text-blue-800",
    orange: "border-orange-200 bg-orange-50 text-orange-800",
    emerald: "border-emerald-200 bg-emerald-50 text-emerald-800",
    purple: "border-purple-200 bg-purple-50 text-purple-800",
  };

  return (
    <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      <div className={`border-b border-slate-200 p-6 sm:p-7`}>
        <div className="flex items-start gap-4">
          <div className={`rounded-2xl p-3 ${themes[measure.color]}`}>
            <Icon className="h-7 w-7" />
          </div>
          <div>
            <p className="text-sm font-bold text-slate-500">
              MEASURE {measure.number}
            </p>
            <h3 className="mt-1 text-xl font-bold text-slate-950 sm:text-2xl">
              {measure.title}
            </h3>
            <p className="mt-3 leading-7 text-slate-600">
              {measure.summary}
            </p>
          </div>
        </div>
      </div>

      <div className="p-6 sm:p-7">
        <div className="space-y-5">
          {measure.measures.map((point) => (
            <div key={point.title} className="flex gap-3">
              <CheckCircle2
                className={`mt-1 h-5 w-5 shrink-0 ${themes[measure.color].split(" ").at(-1)}`}
              />
              <div>
                <h4 className="font-bold text-slate-900">{point.title}</h4>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  {point.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-7 rounded-2xl bg-slate-50 p-4 sm:p-5">
          <p className="text-sm font-bold text-slate-800">
            How the measure may work
          </p>
          <MiniFlow items={measure.flow} color={measure.color} />
        </div>

        <div className="mt-5 flex gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4">
          <CircleHelp className="mt-0.5 h-5 w-5 shrink-0 text-amber-700" />
          <p className="text-sm leading-6 text-amber-950">{measure.note}</p>
        </div>
      </div>
    </article>
  );
}

export default function EffectsOfInflationPage() {
  return (
    <main className="min-h-screen bg-white text-slate-800">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-blue-100 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2 lg:items-center lg:py-24">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-bold text-blue-800">
              <BarChart3 className="h-4 w-4" />
              Economics · Inflation
            </p>
            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Effects of Inflation and Measures to Control It
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
              Inflation affects more than the price of groceries. It can change
              household budgets, savings, business costs, loan payments and
              economic growth. Learn its major effects and the measures that
              can help control rising prices.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#effects"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-700 px-5 py-3 font-bold text-white transition hover:bg-blue-800"
              >
                Explore the effects
                <ArrowDown className="h-4 w-4" />
              </a>
              <a
                href="#control-measures"
                className="inline-flex items-center gap-2 rounded-xl border border-blue-300 bg-white px-5 py-3 font-bold text-blue-900 transition hover:bg-blue-50"
              >
                How to control inflation
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-white bg-white/90 p-5 shadow-xl sm:p-7">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-sm font-bold uppercase tracking-widest text-slate-500">
                  Simple illustration
                </p>
                <h2 className="mt-2 text-2xl font-bold text-slate-950">
                  When prices rise
                </h2>
              </div>
              <div className="rounded-2xl bg-orange-100 p-3 text-orange-700">
                <TrendingUp className="h-8 w-8" />
              </div>
            </div>

            <div className="mt-7 space-y-5">
              <div className="rounded-2xl bg-blue-50 p-4">
                <div className="flex items-center justify-between gap-3">
                  <span className="font-bold text-slate-800">
                    Monthly income
                  </span>
                  <span className="text-lg font-bold text-blue-800">
                    ₹30,000
                  </span>
                </div>
                <div className="mt-3 h-3 overflow-hidden rounded-full bg-blue-200">
                  <div className="h-full w-3/4 rounded-full bg-blue-600" />
                </div>
              </div>

              <div className="rounded-2xl bg-orange-50 p-4">
                <div className="flex items-center justify-between gap-3">
                  <span className="font-bold text-slate-800">
                    Essential expenses
                  </span>
                  <span className="text-lg font-bold text-orange-800">
                    Rise
                  </span>
                </div>
                <div className="mt-3 flex items-center gap-3">
                  <div className="h-3 flex-1 overflow-hidden rounded-full bg-orange-200">
                    <div className="h-full w-2/3 rounded-full bg-orange-500" />
                  </div>
                  <ArrowUp className="h-5 w-5 text-orange-700" />
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-2xl border border-rose-200 bg-rose-50 p-4">
                <Wallet className="h-7 w-7 shrink-0 text-rose-700" />
                <div>
                  <p className="font-bold text-rose-900">
                    Less money for other needs
                  </p>
                  <p className="mt-1 text-sm leading-6 text-rose-800">
                    If income does not keep pace with prices, purchasing power
                    falls.
                  </p>
                </div>
              </div>
            </div>
            <p className="mt-4 text-xs leading-5 text-slate-500">
              Conceptual illustration, not actual household survey data.
            </p>
          </div>
        </div>
      </section>

      {/* DEFINITION */}
      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-blue-100 p-3 text-blue-800">
                <IndianRupee className="h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold text-slate-950">
                What Are the Effects of Inflation?
              </h2>
            </div>
            <p className="mt-5 leading-8 text-slate-600">
              The effects of inflation are the changes that rising general
              prices bring to the purchasing power of money, household
              spending, savings, production costs and economic decisions.
              Moderate and predictable inflation is different from inflation
              that is high, persistent or unexpected.
            </p>
          </div>

          <div className="rounded-3xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-teal-50 p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-white p-3 text-emerald-800">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold text-slate-950">
                Can Inflation Have Any Benefits?
              </h2>
            </div>
            <p className="mt-5 leading-8 text-slate-700">
              Not every price increase has the same effect. Predictable,
              moderate inflation can coexist with economic growth and gives
              businesses flexibility to adjust relative prices. Unexpected
              inflation, however, can create uncertainty and redistribute
              purchasing power between borrowers and lenders.
            </p>
          </div>
        </div>
      </section>
<AdSlot />
      {/* EFFECTS */}
      <section id="effects" className="scroll-mt-8 bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Part 1 · Economic Impact"
            title="8 Major Effects of Inflation"
            description="Each effect works differently. Explore the visual explanation, then see how it can appear in everyday life."
          />

          <div className="space-y-7">
            {impacts.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.number}
                  className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
                >
                  <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
                    <div className="p-6 sm:p-8 lg:p-9">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-sm font-bold text-slate-700">
                          {item.number}
                        </div>
                        <div className="rounded-xl bg-blue-50 p-2.5 text-blue-800">
                          <Icon className="h-5 w-5" />
                        </div>
                      </div>

                      <h3 className="mt-5 text-2xl font-bold text-slate-950">
                        {item.title}
                      </h3>
                      <p className="mt-4 leading-7 text-slate-600">
                        {item.description}
                      </p>

                      <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                        <p className="text-sm font-bold text-slate-900">
                          Practical Example
                        </p>
                        <p className="mt-2 text-sm leading-6 text-slate-600">
                          {item.example}
                        </p>
                      </div>
                    </div>

                    <div className="border-t border-slate-200 p-5 sm:p-7 lg:border-l lg:border-t-0 lg:p-8">
                      <ImpactVisual item={item} />
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-8 rounded-2xl border border-blue-200 bg-blue-50 p-5 sm:p-6">
            <div className="flex items-start gap-3">
              <CircleHelp className="mt-1 h-6 w-6 shrink-0 text-blue-800" />
              <div>
                <h3 className="font-bold text-blue-950">
                  Important: These numbers are illustrations
                </h3>
                <p className="mt-2 text-sm leading-6 text-blue-900">
                  The rupee amounts and percentages shown in the impact
                  diagrams are hypothetical examples to explain economic
                  concepts. Actual effects depend on the inflation rate,
                  income growth, household spending patterns, interest rates
                  and the source of inflation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
<AdSlot />
      {/* HOW TO CONTROL */}
      <section id="control-measures" className="scroll-mt-8 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Part 2 · Price Stability"
            title="Measures to Control Inflation"
            description="Controlling inflation requires matching the solution to its cause. Excess demand, supply shortages and rising production costs may require different responses."
          />

          <div className="mb-10 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-blue-200 bg-blue-50 p-5">
              <Landmark className="h-7 w-7 text-blue-800" />
              <h3 className="mt-3 font-bold text-slate-950">
                Monetary Policy
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                RBI policy rates and liquidity management influence credit,
                spending and inflation expectations.
              </p>
            </div>
            <div className="rounded-2xl border border-orange-200 bg-orange-50 p-5">
              <Building2 className="h-7 w-7 text-orange-800" />
              <h3 className="mt-3 font-bold text-slate-950">
                Fiscal Policy
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Government spending and taxation influence aggregate demand
                and can affect some consumer prices.
              </p>
            </div>
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
              <Wheat className="h-7 w-7 text-emerald-800" />
              <h3 className="mt-3 font-bold text-slate-950">
                Supply-Side Measures
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                More production, better logistics and fewer shortages can
                relieve pressure on prices.
              </p>
            </div>
          </div>

          <div className="space-y-7">
            {controlMeasures.map((measure) => (
              <ControlCard key={measure.number} measure={measure} />
            ))}
          </div>
        </div>
      </section>
<AdSlot />
      {/* MATCH THE CAUSE */}
      <section className="border-y border-slate-200 bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Choose the Right Response"
            title="Different Causes Need Different Measures"
            description="An effective inflation response considers whether prices are rising because demand is too strong, supply is constrained or production costs have increased."
          />

          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white">
            <div className="grid md:grid-cols-3">
              <div className="border-b border-slate-200 p-6 md:border-b-0 md:border-r">
                <div className="inline-flex rounded-xl bg-blue-100 p-3 text-blue-800">
                  <ShoppingCart className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-xl font-bold text-slate-950">
                  Demand-Pull Inflation
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Overall demand grows faster than the economy can supply
                  goods and services.
                </p>
                <div className="mt-5 rounded-xl bg-blue-50 p-4 text-sm font-bold text-blue-950">
                  Possible response: moderate excessive demand through
                  monetary and fiscal policy.
                </div>
                <Link
                  href="/economics/inflation/demand-pull-inflation"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-blue-800 hover:underline"
                >
                  Learn about demand-pull inflation
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="border-b border-slate-200 p-6 md:border-b-0 md:border-r">
                <div className="inline-flex rounded-xl bg-orange-100 p-3 text-orange-800">
                  <Factory className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-xl font-bold text-slate-950">
                  Cost-Push Inflation
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Production becomes more expensive because of higher input
                  prices, energy costs or supply disruptions.
                </p>
                <div className="mt-5 rounded-xl bg-orange-50 p-4 text-sm font-bold text-orange-950">
                  Possible response: improve supply, logistics and production
                  efficiency while monitoring demand.
                </div>
                <Link
                  href="/economics/inflation/cost-push-inflation"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-orange-800 hover:underline"
                >
                  Learn about cost-push inflation
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="p-6">
                <div className="inline-flex rounded-xl bg-emerald-100 p-3 text-emerald-800">
                  <Wheat className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-xl font-bold text-slate-950">
                  Supply Shortages
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Poor harvests, transport problems or limited availability
                  push up prices for particular goods.
                </p>
                <div className="mt-5 rounded-xl bg-emerald-50 p-4 text-sm font-bold text-emerald-950">
                  Possible response: improve availability, storage,
                  distribution and, where appropriate, imports.
                </div>
                <Link
                  href="/economics/inflation/wholesale-price-index-india"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-emerald-800 hover:underline"
                >
                  Understand wholesale prices
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTROL FLOW */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Putting It Together"
            title="How Inflation Control Can Work"
            description="A coordinated approach uses the right tools, monitors results and adjusts as conditions change."
          />

          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
            <div className="grid gap-3 md:grid-cols-4">
              <div className="rounded-2xl border border-violet-200 bg-violet-50 p-5 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-violet-100 text-violet-800">
                  <BarChart3 className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-bold text-slate-950">
                  1. Measure Inflation
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Track price trends and identify which goods are driving
                  increases.
                </p>
              </div>

              <div className="rounded-2xl border border-blue-200 bg-blue-50 p-5 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-800">
                  <CircleHelp className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-bold text-slate-950">
                  2. Identify the Cause
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Assess demand, production costs, shortages and expectations.
                </p>
              </div>

              <div className="rounded-2xl border border-orange-200 bg-orange-50 p-5 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 text-orange-800">
                  <Scale className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-bold text-slate-950">
                  3. Apply Measures
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Combine appropriate monetary, fiscal and supply-side tools.
                </p>
              </div>

              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-800">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-bold text-slate-950">
                  4. Review Results
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Monitor inflation, growth, employment and household impact.
                </p>
              </div>
            </div>

            <div className="mt-6 rounded-2xl bg-slate-900 p-5 text-center text-white sm:p-6">
              <p className="text-lg font-bold">
                Goal: More stable prices and sustainable economic activity
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Inflation control is not simply about making every price fall.
                It is about reducing excessive or persistent price increases
                while limiting unnecessary damage to jobs and production.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOUSEHOLD ACTIONS */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-blue-800">
              A Practical Distinction
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              What Can Individuals Do During Inflation?
            </h2>
            <p className="mt-5 leading-7 text-slate-600">
              Individuals cannot control the overall inflation rate on their
              own, but they can reduce some of its effect on their household
              finances.
            </p>

            <div className="mt-7 space-y-4">
              {[
                [
                  "Review the household budget",
                  "Track food, transport, housing and other essential expenses.",
                ],
                [
                  "Compare prices and reduce waste",
                  "Plan purchases, compare alternatives and avoid unnecessary spending.",
                ],
                [
                  "Protect emergency savings",
                  "Keep accessible funds for unexpected bills and emergencies.",
                ],
                [
                  "Review savings and debt",
                  "Compare after-tax returns with inflation and understand loan interest terms before making financial decisions.",
                ],
              ].map(([title, text]) => (
                <div key={title} className="flex gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-blue-700" />
                  <div>
                    <h3 className="font-bold text-slate-900">{title}</h3>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      {text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-blue-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-blue-100 p-3 text-blue-800">
                <HandCoins className="h-7 w-7" />
              </div>
              <h3 className="text-2xl font-bold text-slate-950">
                Inflation and Real Returns
              </h3>
            </div>

            <p className="mt-4 leading-7 text-slate-600">
              A savings account or deposit may pay interest, but the return
              after inflation shows how purchasing power changes.
            </p>

            <div className="mt-6 rounded-2xl bg-slate-50 p-5">
              <p className="text-sm font-bold text-slate-500">
                Hypothetical Example
              </p>
              <div className="mt-4 space-y-4">
                <div>
                  <div className="mb-2 flex justify-between gap-3 text-sm">
                    <span className="font-bold text-slate-700">
                      Annual savings return
                    </span>
                    <span className="font-bold text-emerald-700">6%</span>
                  </div>
                  <div className="h-3 rounded-full bg-slate-200">
                    <div className="h-3 w-3/5 rounded-full bg-emerald-500" />
                  </div>
                </div>
                <div>
                  <div className="mb-2 flex justify-between gap-3 text-sm">
                    <span className="font-bold text-slate-700">
                      Annual inflation
                    </span>
                    <span className="font-bold text-orange-700">5%</span>
                  </div>
                  <div className="h-3 rounded-full bg-slate-200">
                    <div className="h-3 w-1/2 rounded-full bg-orange-500" />
                  </div>
                </div>
              </div>
              <div className="mt-5 rounded-xl border border-emerald-200 bg-emerald-50 p-4">
                <p className="font-bold text-emerald-950">
                  Approximate real return: 1%
                </p>
                <p className="mt-1 text-sm leading-6 text-emerald-900">
                  Simple approximation before tax. The exact real return is
                  calculated as (1 + nominal return) ÷ (1 + inflation) − 1.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Common Questions"
            title="FAQs About Inflation"
            description="Quick answers to common questions about inflation's effects and how it can be controlled."
          />

          <div className="space-y-4">
            {[
              {
                q: "What is the biggest effect of inflation?",
                a: "One of the main effects is reduced purchasing power: the same amount of money buys fewer goods and services. The severity depends on the rate of inflation, income growth and what a household buys.",
              },
              {
                q: "How does inflation affect poor and middle-class families?",
                a: "When essential costs rise faster than income, families have less money available for other needs. The effect varies with household income, spending patterns, subsidies and wage adjustments.",
              },
              {
                q: "What is the main measure used by the RBI to control inflation?",
                a: "The RBI uses monetary policy tools, including the policy repo rate and liquidity management, to influence financial conditions and demand. The effect takes time and may be limited when inflation is driven by supply shortages.",
              },
              {
                q: "Can the government control inflation?",
                a: "Government measures can influence demand through taxation and spending and can address shortages through production, imports, storage and distribution policies. Results depend on the cause of inflation and the design of the measures.",
              },
              {
                q: "Does increasing interest rates always reduce inflation?",
                a: "No. Higher rates can moderate demand and inflation expectations, but they do not directly fix a crop failure or a global energy supply shock. They can also increase borrowing costs and slow economic activity.",
              },
              {
                q: "Is zero inflation the ideal goal?",
                a: "Not necessarily. Many central banks aim for low and stable inflation rather than permanently falling prices. Sustained deflation can also create problems by encouraging people to delay spending and increasing the real burden of some debts.",
              },
              {
                q: "What is the difference between controlling inflation and reducing prices?",
                a: "Lower inflation means prices are rising more slowly. It does not necessarily mean prices are falling. A fall in the overall price level is called deflation.",
              },
            ].map((faq) => (
              <details
                key={faq.q}
                className="group rounded-2xl border border-slate-200 bg-white p-5 open:border-blue-200 open:bg-blue-50/40 sm:p-6"
              >
                <summary className="cursor-pointer list-none pr-7 font-bold text-slate-950 marker:hidden">
                  <span className="flex items-start justify-between gap-4">
                    {faq.q}
                    <ArrowDown className="mt-0.5 h-5 w-5 shrink-0 text-blue-700 transition group-open:rotate-180" />
                  </span>
                </summary>
                <p className="mt-4 leading-7 text-slate-600">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      

      {/* KEY TAKEAWAY */}
      <section className="bg-slate-950 py-14 text-white sm:py-16">
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/20 text-blue-300">
            <CheckCircle2 className="h-8 w-8" />
          </div>
          <h2 className="mt-5 text-3xl font-bold sm:text-4xl">
            Key Takeaway
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Inflation can reduce purchasing power, put pressure on household
            budgets, affect savings and raise business costs. Controlling it
            requires identifying the cause and using an appropriate mix of
            monetary policy, fiscal policy and measures that improve supply.
            The goal is price stability without causing unnecessary harm to
            jobs and economic growth.
          </p>
        </div>
      </section>
    </main>
  );
}
