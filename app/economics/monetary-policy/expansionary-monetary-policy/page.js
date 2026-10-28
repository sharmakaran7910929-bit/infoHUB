
import Link from "next/link";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Banknote,
  BarChart3,
  BookOpen,
  Building2,
  CheckCircle2,
  CircleHelp,
  Coins,
  Factory,
  Gauge,
  HandCoins,
  Lightbulb,
  Landmark,
  LineChart,
  PiggyBank,
  ShoppingCart,
  TrendingUp,
  Wallet,
  Waves,
  XCircle,
} from "lucide-react";
import AdSlot from "../../../../components/AdSlot";

export const metadata = {
  title: "Expansionary Monetary Policy | Meaning, Tools, Examples & Effects | PriceTag HUB",
  description:
    "Understand expansionary monetary policy with Indian examples, RBI tools, interest rates, money supply, economic growth, inflation, advantages, limitations, and diagrams.",
  alternates: {
    canonical:
      "https://www.pricetag.co.in/economics/monetary-policy/expansionary-monetary-policy",
  },
};

const tools = [
  {
    title: "Reduce The Repo Rate",
    icon: TrendingUp,
    color: "blue",
    meaning:
      "The repo rate is the rate at which the RBI lends short-term funds to eligible banks against eligible securities under the repo framework.",
    impact:
      "A lower repo rate can reduce banks' marginal funding costs and encourage lower lending rates over time. The effect on actual loan rates depends on the bank, loan benchmark, credit risk, and transmission conditions.",
    example:
      "Suppose the RBI reduces its repo rate by 0.25 percentage points. A bank may subsequently reduce the interest rate on some eligible floating-rate loans, making borrowing more affordable for households and businesses.",
  },
  {
    title: "Reduce The Cash Reserve Ratio",
    icon: Wallet,
    color: "violet",
    meaning:
      "The Cash Reserve Ratio (CRR) is the proportion of a bank's Net Demand and Time Liabilities that it must maintain as cash balances with the RBI.",
    impact:
      "A lower CRR reduces the amount of funds banks must hold as required reserves and may release liquidity for other uses. It does not guarantee that every released rupee will become a new loan.",
    example:
      "If a bank has ₹1,000 crore of relevant liabilities and the required CRR falls from an illustrative 4% to 3.5%, its required reserve balance falls from ₹40 crore to ₹35 crore, freeing ₹5 crore relative to the previous requirement.",
  },
  {
    title: "Purchase Government Securities",
    icon: Landmark,
    color: "emerald",
    meaning:
      "Through Open Market Operations (OMOs), the RBI can purchase government securities from market participants.",
    impact:
      "An RBI purchase generally adds liquidity to the banking system. Depending on market conditions, it can also support bond prices and influence yields, financing conditions, and interest rates more broadly.",
    example:
      "If the RBI purchases government securities worth ₹1,000 crore, payment for those securities generally adds ₹1,000 crore of liquidity to the banking system, subject to settlement and other liquidity operations.",
  },
  {
    title: "Inject Liquidity Through Repo Operations",
    icon: Waves,
    color: "amber",
    meaning:
      "The RBI can provide funds to eligible banks through liquidity operations, including repo operations and variable-rate repo auctions.",
    impact:
      "These operations can help banks meet short-term funding needs and reduce temporary liquidity shortages that might otherwise put upward pressure on money-market rates.",
    example:
      "If banks face a temporary shortage of funds near a large tax-payment date, an RBI liquidity injection may help keep short-term market rates from rising sharply.",
  },
];

const channels = [
  {
    number: "01",
    title: "Lower Financing Costs",
    description:
      "Policy easing may reduce short-term funding costs and, over time, influence borrowing rates across parts of the financial system.",
    icon: Banknote,
  },
  {
    number: "02",
    title: "More Borrowing And Spending",
    description:
      "Some households may purchase homes or durable goods, while businesses may borrow for equipment, stock, and expansion.",
    icon: ShoppingCart,
  },
  {
    number: "03",
    title: "Higher Investment And Demand",
    description:
      "If businesses expect sufficient demand, they may expand production, hire workers, or postpone fewer investment projects.",
    icon: Factory,
  },
  {
    number: "04",
    title: "Higher Output And Employment",
    description:
      "Stronger demand can encourage businesses to produce more and employ additional workers when spare capacity is available.",
    icon: BarChart3,
  },
];

const impacts = [
  {
    title: "Economic Growth",
    icon: TrendingUp,
    color: "emerald",
    effect:
      "May increase consumption, investment, and aggregate demand, supporting real GDP growth when the economy has unused capacity.",
  },
  {
    title: "Employment",
    icon: Building2,
    color: "blue",
    effect:
      "Businesses experiencing stronger demand may increase working hours, recruit employees, or restart delayed projects.",
  },
  {
    title: "Borrowing Costs",
    icon: HandCoins,
    color: "violet",
    effect:
      "Some floating-rate loans and new credit products may become cheaper, but retail interest rates do not necessarily fall immediately or equally.",
  },
  {
    title: "Inflation",
    icon: Gauge,
    color: "amber",
    effect:
      "Stronger demand can push prices upward. The inflationary effect is more concerning when production capacity is already stretched or supply is constrained.",
  },
  {
    title: "Savings Returns",
    icon: PiggyBank,
    color: "rose",
    effect:
      "Returns on some new deposits and short-term savings products may decline if market interest rates fall. Existing deposits follow their contract terms.",
  },
  {
    title: "Exchange Rate",
    icon: LineChart,
    color: "cyan",
    effect:
      "Lower domestic interest rates relative to foreign rates may put downward pressure on the currency in some circumstances, but exchange rates depend on many factors.",
  },
];

const faqs = [
  {
    question: "What Is Expansionary Monetary Policy?",
    answer:
      "Expansionary monetary policy is a central bank approach that makes monetary and financial conditions easier to support borrowing, spending, investment, and economic activity. It may involve lower policy rates, liquidity injections, or asset purchases.",
  },
  {
    question: "Who Implements Monetary Policy In India?",
    answer:
      "The Reserve Bank of India (RBI) conducts monetary policy in India. Its Monetary Policy Committee (MPC) determines the policy repo rate within India's monetary policy framework, while the RBI implements policy and manages liquidity.",
  },
  {
    question: "Does A Repo Rate Cut Immediately Reduce Every Loan EMI?",
    answer:
      "No. The impact depends on the loan's interest-rate benchmark, reset schedule, lender, and loan terms. Floating-rate loans linked to an external benchmark may transmit changes differently from fixed-rate loans.",
  },
  {
    question: "Is Expansionary Monetary Policy Always Good?",
    answer:
      "No. It can support demand during an economic slowdown, but excessive easing may contribute to inflation, encourage risky borrowing, or create financial imbalances. Its effectiveness also depends on whether households and businesses want and qualify to borrow.",
  },
  {
    question: "What Is The Difference Between Monetary And Fiscal Policy?",
    answer:
      "Monetary policy is conducted by the central bank through policy rates, liquidity management, and related measures. Fiscal policy is conducted by the government through taxation, public spending, borrowing, and transfers.",
  },
  {
    question: "What Is The Opposite Of Expansionary Monetary Policy?",
    answer:
      "Contractionary monetary policy. It tightens financial conditions to help restrain excessive demand and inflation, often through higher policy rates or liquidity-absorbing measures.",
  },
];

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mb-7 max-w-3xl">
      {eyebrow && (
        <p className="mb-2 text-sm font-bold uppercase tracking-wide text-blue-700">
          {eyebrow}
        </p>
      )}
      <h2 className="text-2xl font-bold tracking-tight text-gray-950 sm:text-3xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 leading-7 text-gray-700">{description}</p>
      )}
    </div>
  );
}

function InfoCard({ icon: Icon, title, children, color = "blue" }) {
  const styles = {
    blue: "border-blue-200 bg-blue-50 text-blue-700",
    violet: "border-violet-200 bg-violet-50 text-violet-700",
    emerald: "border-emerald-200 bg-emerald-50 text-emerald-700",
    amber: "border-amber-200 bg-amber-50 text-amber-800",
    rose: "border-rose-200 bg-rose-50 text-rose-700",
    cyan: "border-cyan-200 bg-cyan-50 text-cyan-700",
  };

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
      <div
        className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl border ${styles[color] || styles.blue}`}
      >
        <Icon size={22} />
      </div>
      <h3 className="text-lg font-bold text-gray-950">{title}</h3>
      <div className="mt-2 text-sm leading-6 text-gray-700">{children}</div>
    </div>
  );
}

function FlowStep({ icon: Icon, number, title, description }) {
  return (
    <div className="relative rounded-2xl border border-blue-200 bg-white p-4 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-800">
          <Icon size={20} />
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-wide text-blue-700">
            Step {number}
          </p>
          <h3 className="font-bold text-gray-950">{title}</h3>
        </div>
      </div>
      <p className="mt-3 text-sm leading-6 text-gray-700">{description}</p>
    </div>
  );
}

export default function ExpansionaryMonetaryPolicyPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <article className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
    

        <header className="overflow-hidden rounded-3xl border border-blue-200 bg-gradient-to-br from-blue-50 via-white to-cyan-50 p-6 sm:p-10">
          <div className="grid items-center gap-8 md:grid-cols-[1.5fr_0.8fr]">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-widest text-blue-700">
                Economics · Monetary Policy · India
              </p>
              <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-950 sm:text-5xl">
                Expansionary Monetary Policy
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-gray-700 sm:text-lg">
                How A Central Bank Can Encourage Borrowing, Spending,
                Investment, And Economic Growth
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="rounded-full border border-blue-200 bg-white px-3 py-1.5 text-sm font-bold text-blue-800">
                  RBI
                </span>
                <span className="rounded-full border border-emerald-200 bg-white px-3 py-1.5 text-sm font-bold text-emerald-800">
                  Economic Growth
                </span>
                <span className="rounded-full border border-violet-200 bg-white px-3 py-1.5 text-sm font-bold text-violet-800">
                  Interest Rates
                </span>
              </div>
            </div>

            <div className="rounded-2xl border border-blue-200 bg-white p-5 shadow-sm sm:p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-xl bg-blue-100 p-3 text-blue-800">
                  <Landmark size={28} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Central Bank</p>
                  <p className="text-xl font-bold text-gray-950">
                    Reserve Bank Of India
                  </p>
                </div>
              </div>
              <div className="rounded-xl bg-emerald-50 p-4">
                <div className="flex items-center gap-2 text-emerald-800">
                  <ArrowDownRight size={22} />
                  <p className="font-bold">Easier Monetary Conditions</p>
                </div>
                <p className="mt-2 text-sm leading-6 text-gray-700">
                  The objective is to support economic activity by improving
                  liquidity and borrowing conditions when appropriate.
                </p>
              </div>
              <p className="mt-4 text-xs leading-5 text-gray-500">
                Policy easing does not guarantee lower rates for every borrower
                or immediate economic growth.
              </p>
            </div>
          </div>
        </header>

        <section className="mt-12">
          <SectionHeading
            eyebrow="Start With The Basics"
            title="What Is Expansionary Monetary Policy?"
            description="Expansionary monetary policy is a set of central bank measures intended to make monetary and financial conditions easier, particularly when economic activity is weak or demand is insufficient."
          />

          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-blue-200 bg-blue-50 p-6">
              <div className="mb-3 flex items-center gap-3">
                <div className="rounded-xl bg-white p-3 text-blue-700">
                  <BookOpen size={24} />
                </div>
                <h3 className="text-lg font-bold text-gray-950">
                  Simple Meaning
                </h3>
              </div>
              <p className="leading-7 text-gray-800">
                When an economy slows down, a central bank may lower its policy
                rate or inject liquidity into the financial system. These
                measures can make funding easier for banks and may encourage
                households and businesses to borrow, spend, and invest.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
              <div className="mb-3 flex items-center gap-3">
                <div className="rounded-xl bg-white p-3 text-emerald-700">
                  <Lightbulb size={24} />
                </div>
                <h3 className="text-lg font-bold text-gray-950">
                  Why It Matters
                </h3>
              </div>
              <p className="leading-7 text-gray-800">
                If consumers postpone purchases and businesses delay
                investment, total demand may weaken. Monetary easing can help
                improve financing conditions and encourage economic activity,
                provided that credit demand and the supply side respond.
              </p>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-gray-200 bg-white p-5">
            <h3 className="font-bold text-gray-950">
              The Main Objective
            </h3>
            <p className="mt-2 leading-7 text-gray-700">
              Support economic activity while maintaining price stability over
              time. Expansionary policy is not simply a decision to increase
              money in circulation without limits; the central bank must
              consider inflation, financial stability, liquidity, and the
              broader economic outlook.
            </p>
          </div>
        </section>
<AdSlot />
        <section className="mt-14">
          <SectionHeading
            eyebrow="Understand The Transmission"
            title="How Expansionary Monetary Policy Works"
            description="The policy decision is only the first step. Its effect travels through financial markets, bank lending, household spending, and business investment before influencing total output and prices."
          />

          <div className="rounded-3xl border border-blue-200 bg-gradient-to-br from-blue-50 to-white p-5 sm:p-7">
            <div className="grid gap-3 md:grid-cols-2">
              {channels.map((step, index) => (
                <div key={step.number} className="contents">
                  <FlowStep {...step} />
                  {index === 0 && (
                    <div className="flex items-center justify-center text-blue-700 md:col-span-2">
                      <ArrowDownRight size={25} />
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-2xl border border-amber-200 bg-amber-50 p-4">
              <div className="flex items-start gap-3">
                <Gauge className="mt-1 shrink-0 text-amber-800" size={22} />
                <div>
                  <h3 className="font-bold text-gray-950">
                    An Important Condition
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-gray-700">
                    If inflation is already high, or businesses cannot increase
                    production because of supply constraints, extra demand may
                    raise prices more than real output. Policy transmission can
                    also be weak when borrowers lack confidence or banks are
                    reluctant to lend.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-14">
          <SectionHeading
            eyebrow="Policy Instruments"
            title="Main Tools Of Expansionary Monetary Policy"
            description="The RBI can use different instruments to influence funding costs and liquidity. The appropriate combination depends on economic conditions and the RBI's policy framework."
          />

          <div className="space-y-5">
            {tools.map((tool, index) => {
              const Icon = tool.icon;
              const colorStyles = {
                blue: "bg-blue-100 text-blue-800 border-blue-200",
                violet: "bg-violet-100 text-violet-800 border-violet-200",
                emerald: "bg-emerald-100 text-emerald-800 border-emerald-200",
                amber: "bg-amber-100 text-amber-800 border-amber-200",
              };
              const accent =
                colorStyles[tool.color] || colorStyles.blue;

              return (
                <div
                  key={tool.title}
                  className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm"
                >
                  <div className="flex flex-wrap items-center gap-4 border-b border-gray-100 p-5 sm:p-6">
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border ${accent}`}
                    >
                      <Icon size={24} />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs font-bold uppercase tracking-wide text-gray-500">
                        Tool {index + 1}
                      </p>
                      <h3 className="text-xl font-bold text-gray-950">
                        {tool.title}
                      </h3>
                    </div>
                  </div>

                  <div className="grid gap-5 p-5 sm:p-6 md:grid-cols-3">
                    <div>
                      <h4 className="font-bold text-gray-950">Meaning</h4>
                      <p className="mt-2 text-sm leading-6 text-gray-700">
                        {tool.meaning}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-950">
                        Economic Impact
                      </h4>
                      <p className="mt-2 text-sm leading-6 text-gray-700">
                        {tool.impact}
                      </p>
                    </div>
                    <div className="rounded-xl border border-blue-100 bg-blue-50 p-4">
                      <div className="flex items-center gap-2">
                        <Lightbulb
                          size={18}
                          className="shrink-0 text-blue-800"
                        />
                        <h4 className="font-bold text-gray-950">
                          Illustrative Example
                        </h4>
                      </div>
                      <p className="mt-2 text-sm leading-6 text-gray-700">
                        {tool.example}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <p className="mt-4 text-sm leading-6 text-gray-600">
            Note: The figures above are hypothetical examples for learning,
            not current RBI rates or a prediction of the RBI's next decision.
            Actual operations and effects depend on the applicable rules and
            market conditions.
          </p>
        </section>
<AdSlot />
        <section className="mt-14">
          <SectionHeading
            eyebrow="Indian Economy"
            title="A Practical Example Of Expansionary Monetary Policy"
            description="Consider a hypothetical slowdown in India. Households postpone major purchases, and businesses delay investment because they expect weaker sales."
          />

          <div className="overflow-hidden rounded-3xl border border-gray-200">
            <div className="grid md:grid-cols-3">
              <div className="border-b border-gray-200 bg-rose-50 p-6 md:border-b-0 md:border-r">
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-white text-rose-700">
                  <ArrowDownRight size={24} />
                </div>
                <h3 className="font-bold text-gray-950">
                  1. Economic Slowdown
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-700">
                  Consumer purchases weaken, businesses delay projects, and
                  production may slow.
                </p>
              </div>

              <div className="border-b border-gray-200 bg-blue-50 p-6 md:border-b-0 md:border-r">
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-white text-blue-700">
                  <Landmark size={24} />
                </div>
                <h3 className="font-bold text-gray-950">
                  2. RBI Eases Conditions
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-700">
                  If consistent with its inflation outlook, the RBI may reduce
                  the policy rate or provide liquidity.
                </p>
              </div>

              <div className="bg-emerald-50 p-6">
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-white text-emerald-700">
                  <TrendingUp size={24} />
                </div>
                <h3 className="font-bold text-gray-950">
                  3. Demand May Recover
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-700">
                  Easier credit conditions may encourage some purchases,
                  business investment, production, and hiring.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-blue-200 bg-blue-50 p-5 sm:p-6">
            <h3 className="flex items-center gap-2 font-bold text-gray-950">
              <Coins size={21} className="text-blue-800" />
              Example For A Household
            </h3>
            <p className="mt-3 leading-7 text-gray-700">
              Suppose a household is considering a floating-rate home loan.
              After monetary easing, its lender may reduce the applicable rate
              at a later reset date. Depending on the loan terms, the EMI may
              fall or the loan may be repaid sooner if the EMI stays unchanged.
              This can leave the household with more room in its budget.
            </p>
            <p className="mt-3 text-sm leading-6 text-gray-600">
              The result is not automatic: the lender's benchmark, reset date,
              spread, and loan contract determine how the change is passed on.
            </p>
          </div>

          <div className="mt-5 rounded-2xl border border-violet-200 bg-violet-50 p-5 sm:p-6">
            <h3 className="flex items-center gap-2 font-bold text-gray-950">
              <Factory size={21} className="text-violet-800" />
              Example For A Business
            </h3>
            <p className="mt-3 leading-7 text-gray-700">
              Imagine a small manufacturer planning to buy machinery. If its
              borrowing cost falls and it expects sufficient customer demand,
              the investment may become financially worthwhile. The business
              may purchase equipment, increase output, and recruit workers.
            </p>
            <p className="mt-3 text-sm leading-6 text-gray-600">
              However, a lower interest rate alone may not be enough if the
              business expects weak sales or cannot access credit.
            </p>
          </div>
        </section>

        <section className="mt-14">
          <SectionHeading
            eyebrow="Effects On The Economy"
            title="Positive And Negative Impacts"
            description="Expansionary policy can support recovery, but its overall effect depends on the economic situation, the strength of the policy response, and how households and businesses behave."
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {impacts.map((item) => (
              <InfoCard
                key={item.title}
                icon={item.icon}
                title={item.title}
                color={item.color}
              >
                {item.effect}
              </InfoCard>
            ))}
          </div>
        </section>

        <section className="mt-14">
          <SectionHeading
            eyebrow="When Is It Useful?"
            title="When Might A Central Bank Use Expansionary Policy?"
            description="Monetary easing is more likely to be considered when the economy needs support and the inflation outlook allows room for it."
          />

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
              <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-gray-950">
                <CheckCircle2 className="text-emerald-700" size={22} />
                Conditions That May Support Easing
              </h3>
              <ul className="space-y-3 text-sm leading-6 text-gray-700">
                <li>• Economic growth is slowing significantly.</li>
                <li>• Consumer and business demand is weak.</li>
                <li>• Inflation is low or the inflation outlook permits easing.</li>
                <li>• Businesses have spare capacity to increase production.</li>
                <li>• Financial conditions are restricting otherwise viable borrowing.</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-rose-200 bg-rose-50 p-5">
              <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-gray-950">
                <XCircle className="text-rose-700" size={22} />
                Conditions That Require Caution
              </h3>
              <ul className="space-y-3 text-sm leading-6 text-gray-700">
                <li>• Inflation is persistently above the desired path.</li>
                <li>• Demand is already growing faster than supply.</li>
                <li>• Credit growth is contributing to financial imbalances.</li>
                <li>• Currency or capital-flow pressures complicate policy choices.</li>
                <li>• Lower rates are unlikely to generate much additional borrowing.</li>
              </ul>
            </div>
          </div>
        </section>
<AdSlot />
        <section className="mt-14">
          <SectionHeading
            eyebrow="Compare The Two Approaches"
            title="Expansionary Vs Contractionary Monetary Policy"
            description="The direction of policy differs, but the central bank must consider the same broad objectives: price stability, economic conditions, and financial stability."
          />

          <div className="overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full min-w-[640px] border-collapse text-left text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-4 font-bold text-gray-950">Feature</th>
                  <th className="p-4 font-bold text-emerald-800">
                    Expansionary Policy
                  </th>
                  <th className="p-4 font-bold text-rose-800">
                    Contractionary Policy
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    "Main Direction",
                    "Makes monetary conditions easier",
                    "Makes monetary conditions tighter",
                  ],
                  [
                    "Policy Rate Direction",
                    "May reduce policy rates",
                    "May increase policy rates",
                  ],
                  [
                    "Liquidity",
                    "May inject or add liquidity",
                    "May absorb or restrain liquidity",
                  ],
                  [
                    "Borrowing Conditions",
                    "May become more favourable",
                    "May become less favourable",
                  ],
                  [
                    "Aggregate Demand",
                    "Aims to support demand",
                    "Aims to moderate demand",
                  ],
                  [
                    "Typical Concern",
                    "Weak growth and insufficient demand",
                    "Excessive demand and persistent inflation",
                  ],
                ].map(([feature, expansionary, contractionary]) => (
                  <tr key={feature} className="border-t border-gray-200">
                    <th className="p-4 font-bold text-gray-900">{feature}</th>
                    <td className="p-4 leading-6 text-gray-700">
                      {expansionary}
                    </td>
                    <td className="p-4 leading-6 text-gray-700">
                      {contractionary}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-14">
          <SectionHeading
            eyebrow="Limits And Risks"
            title="Limitations Of Expansionary Monetary Policy"
            description="Lower policy rates and additional liquidity cannot solve every economic problem. Monetary policy influences demand and financial conditions, but its impact is neither immediate nor guaranteed."
          />

          <div className="grid gap-4 md:grid-cols-2">
            <InfoCard icon={Gauge} title="Inflation Risk" color="amber">
              If demand increases faster than the economy's ability to supply
              goods and services, inflationary pressure can intensify.
            </InfoCard>
            <InfoCard icon={Building2} title="Weak Credit Demand" color="blue">
              Households may avoid new loans and businesses may delay
              investment even when borrowing becomes cheaper.
            </InfoCard>
            <InfoCard icon={Banknote} title="Uneven Transmission" color="violet">
              Banks may not pass on lower funding costs fully or immediately.
              Borrowers with higher credit risk may still face expensive loans.
            </InfoCard>
            <InfoCard icon={LineChart} title="Financial Imbalances" color="rose">
              Prolonged easy credit can contribute to excessive leverage,
              speculative asset prices, or risk-taking if not managed carefully.
            </InfoCard>
          </div>
        </section>

        <section className="mt-14">
          <SectionHeading
            eyebrow="Important Distinction"
            title="Monetary Policy Is Not Fiscal Policy"
            description="Both can influence economic activity, but they work through different institutions and instruments."
          />

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-blue-200 bg-blue-50 p-5">
              <div className="mb-3 flex items-center gap-3">
                <Landmark className="text-blue-800" size={24} />
                <h3 className="text-lg font-bold text-gray-950">
                  Monetary Policy
                </h3>
              </div>
              <p className="leading-7 text-gray-700">
                Conducted by the central bank through instruments such as
                policy interest rates, liquidity operations, and purchases or
                sales of securities.
              </p>
              <p className="mt-3 text-sm font-bold text-blue-800">
                India: Reserve Bank Of India
              </p>
            </div>

            <div className="rounded-2xl border border-violet-200 bg-violet-50 p-5">
              <div className="mb-3 flex items-center gap-3">
                <Banknote className="text-violet-800" size={24} />
                <h3 className="text-lg font-bold text-gray-950">
                  Fiscal Policy
                </h3>
              </div>
              <p className="leading-7 text-gray-700">
                Conducted by the government through public spending, taxes,
                transfers, and borrowing. For example, a government may
                increase infrastructure expenditure to support demand.
              </p>
              <p className="mt-3 text-sm font-bold text-violet-800">
                India: Central Government And State Governments
              </p>
            </div>
          </div>
        </section>
<AdSlot />
        <section className="mt-14">
          <SectionHeading
            eyebrow="Revision Notes"
            title="Important Points To Remember"
            description="Use these points to revise the topic for school, college, competitive exams, or general economic understanding."
          />

          <div className="space-y-3">
            {[
              "Expansionary monetary policy aims to make monetary and financial conditions easier.",
              "The RBI may reduce the repo rate or use liquidity operations when appropriate.",
              "A lower repo rate does not automatically reduce every retail loan rate.",
              "A lower CRR can reduce banks' required reserve balances, subject to the applicable rules.",
              "RBI purchases of government securities through OMOs generally inject liquidity.",
              "Higher demand can support output and employment, but may also increase inflation.",
              "Monetary policy works with delays and depends on credit demand and policy transmission.",
              "Expansionary monetary policy is different from expansionary fiscal policy.",
            ].map((point, index) => (
              <div
                key={point}
                className="flex items-start gap-3 rounded-xl border border-gray-200 bg-white p-4"
              >
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-800">
                  {index + 1}
                </div>
                <p className="leading-6 text-gray-700">{point}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-14">
          <SectionHeading
            eyebrow="Frequently Asked Questions"
            title="Expansionary Monetary Policy FAQs"
            description="Quick answers to common questions about monetary easing and its effects."
          />

          <div className="space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-gray-200 bg-white p-5 open:border-blue-200 open:bg-blue-50/40"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-gray-950">
                  <span>{faq.question}</span>
                  <CircleHelp
                    size={20}
                    className="shrink-0 text-blue-700 transition-transform group-open:rotate-12"
                  />
                </summary>
                <p className="mt-3 pr-2 text-sm leading-7 text-gray-700">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </section>

        

        <section className="mt-10 rounded-2xl border border-gray-200 bg-gray-50 p-5">
          <h2 className="font-bold text-gray-950">Official Reference</h2>
          <p className="mt-2 text-sm leading-6 text-gray-700">
            For official monetary policy statements, policy rates, and
            liquidity announcements, consult the Reserve Bank of India.
          </p>
          <a
            href="https://www.rbi.org.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-2 font-bold text-blue-700 underline decoration-blue-300 underline-offset-4 hover:text-blue-900"
          >
            Reserve Bank Of India Official Website
            <ArrowRight size={16} />
          </a>
          <p className="mt-4 text-xs leading-5 text-gray-500">
            Educational content only. Examples are illustrative and do not
            represent current RBI policy rates or financial advice.
          </p>
        </section>
      </article>
    </main>
  );
}
