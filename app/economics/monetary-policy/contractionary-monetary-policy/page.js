
import Link from "next/link";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Banknote,
  BarChart3,
  Building2,
  CheckCircle2,
  CircleHelp,
  Coins,
  Factory,
  Gauge,
  HandCoins,
  Landmark,
  Lightbulb,
  LineChart,
  PiggyBank,
  ShieldAlert,
  ShoppingCart,
  TrendingDown,
  TrendingUp,
  Wallet,
  Waves,
  XCircle,BookOpen 
} from "lucide-react";
import AdSlot from "../../../../components/AdSlot";

export const metadata = {
  title:
    "Contractionary Monetary Policy: Meaning, Tools, Examples & Effects | PriceTag HUB",
  description:
    "Learn contractionary monetary policy with Indian examples, RBI tools, interest rates, inflation control, effects on loans, savings, businesses, economic growth, and diagrams.",
  alternates: {
    canonical:
      "https://www.pricetag.co.in/economics/monetary-policy/contractionary-monetary-policy",
  },
};

const tools = [
  {
    title: "Increase The Repo Rate",
    icon: TrendingUp,
    color: "blue",
    meaning:
      "The repo rate is the rate at which the RBI lends short-term funds to eligible banks against eligible securities under the repo framework.",
    purpose:
      "The RBI may increase the policy repo rate when tighter monetary conditions are needed to bring inflation under control. Higher policy rates can influence short-term funding costs and other interest rates across the financial system.",
    impact:
      "Banks may face higher marginal funding costs. Depending on loan benchmarks and transmission, borrowing rates for some households and businesses may rise, making certain purchases and investments less attractive.",
    example:
      "Suppose the RBI increases the repo rate by 0.25 percentage points. A bank may subsequently increase the applicable interest rate on some floating-rate loans, potentially raising the EMI or extending the repayment period if the EMI remains unchanged.",
  },
  {
    title: "Increase The Cash Reserve Ratio",
    icon: Wallet,
    color: "violet",
    meaning:
      "The Cash Reserve Ratio (CRR) is the proportion of a bank's Net Demand and Time Liabilities that it must maintain as cash balances with the RBI.",
    purpose:
      "An increase in CRR raises the amount of eligible liabilities that banks must hold as required reserve balances. This can reduce the funds available for other uses and absorb liquidity from the banking system.",
    impact:
      "Banks may have less liquidity available for lending or other transactions, depending on their existing liquidity position and the broader operating framework.",
    example:
      "Suppose a bank has ₹1,000 crore of relevant liabilities. At an illustrative CRR of 4%, its required reserve balance is ₹40 crore. If the CRR rises to 4.5%, the requirement becomes ₹45 crore, an increase of ₹5 crore.",
  },
  {
    title: "Sell Government Securities",
    icon: Landmark,
    color: "emerald",
    meaning:
      "Through Open Market Operations (OMOs), the RBI can sell government securities to eligible market participants.",
    purpose:
      "When the RBI sells securities, buyers pay for them, generally transferring liquidity out of the banking system. This can help absorb surplus liquidity and influence market interest rates.",
    impact:
      "Reduced liquidity may put upward pressure on some market rates. Bond prices may also come under pressure when yields rise, although the actual result depends on market expectations and other conditions.",
    example:
      "If the RBI sells government securities worth ₹1,000 crore, settlement generally transfers ₹1,000 crore to the RBI from buyers' banking balances, absorbing that amount of liquidity before accounting for other operations.",
  },
  {
    title: "Absorb Surplus Liquidity",
    icon: Waves,
    color: "amber",
    meaning:
      "The RBI can use liquidity-management operations, including eligible variable-rate reverse repo auctions and other applicable facilities, to absorb funds from the banking system.",
    purpose:
      "Liquidity absorption can help prevent excessive surplus funds from placing persistent downward pressure on short-term money-market rates.",
    impact:
      "Banks may have fewer immediately available funds for other uses, while the return offered on eligible liquidity-absorption operations influences their decisions about where to place surplus funds.",
    example:
      "Suppose the banking system has more short-term liquidity than banks need. An RBI absorption operation can temporarily draw eligible funds out of circulation under the operation's specified terms.",
  },
];

const impacts = [
  {
    title: "Inflation",
    icon: Gauge,
    color: "emerald",
    effect:
      "Weaker growth in aggregate demand can reduce pressure on prices over time. However, monetary tightening cannot directly resolve supply shortages, crop failures, or international commodity shocks.",
  },
  {
    title: "Loans And EMIs",
    icon: HandCoins,
    color: "blue",
    effect:
      "Some floating-rate loan rates and new borrowing rates may increase. The effect depends on the loan benchmark, reset date, lender, risk premium, and contract terms.",
  },
  {
    title: "Household Spending",
    icon: ShoppingCart,
    color: "violet",
    effect:
      "Higher borrowing costs can encourage households to postpone some purchases, particularly expensive items commonly financed through loans.",
  },
  {
    title: "Business Investment",
    icon: Factory,
    color: "amber",
    effect:
      "More expensive financing can make certain new factories, machinery purchases, and expansion projects less attractive, especially when expected demand is weak.",
  },
  {
    title: "Savings Returns",
    icon: PiggyBank,
    color: "cyan",
    effect:
      "Some new deposits and market-linked savings products may offer higher rates as market conditions change. Returns on existing deposits depend on their terms.",
  },
  {
    title: "Employment And Growth",
    icon: Building2,
    color: "rose",
    effect:
      "Slower spending and investment can reduce hiring and economic growth in the short run. This is one reason central banks must balance inflation control against economic activity.",
  },
  {
    title: "Currency And Imports",
    icon: LineChart,
    color: "blue",
    effect:
      "Higher domestic interest rates relative to foreign rates may support the currency in some circumstances, potentially lowering the domestic cost of imports. Exchange rates are influenced by many factors.",
  },
  {
    title: "Financial Stability",
    icon: ShieldAlert,
    color: "violet",
    effect:
      "Tighter credit conditions may discourage excessive borrowing, but they can also increase debt-servicing pressure on households and firms that already have large loans.",
  },
];

const faqs = [
  {
    question: "What Is Contractionary Monetary Policy?",
    answer:
      "Contractionary monetary policy is a central bank approach that tightens monetary and financial conditions to help restrain excessive demand and inflation. Measures may include increasing policy interest rates, absorbing liquidity, or selling government securities.",
  },
  {
    question: "Why Does The RBI Increase The Repo Rate?",
    answer:
      "The RBI may increase the policy repo rate when it judges that tighter monetary conditions are needed to address inflation risks. Higher rates can influence borrowing, spending, investment, and inflation over time.",
  },
  {
    question: "Does A Repo Rate Increase Immediately Raise Every EMI?",
    answer:
      "No. The effect depends on whether the loan is fixed or floating, the benchmark used, the reset date, the lender's spread, and the loan agreement. Some borrowers may experience a change later, while others may not see an immediate change.",
  },
  {
    question: "How Does Contractionary Policy Reduce Inflation?",
    answer:
      "Higher interest rates and tighter financial conditions can discourage interest-sensitive borrowing and spending. If aggregate demand grows more slowly, businesses may face less pressure to raise prices. The effects generally occur with a delay and vary by the cause of inflation.",
  },
  {
    question: "Is Contractionary Monetary Policy Always Effective?",
    answer:
      "No. It is generally more effective against demand-driven inflation than against a pure supply shock. Its impact depends on credit conditions, expectations, the exchange rate, economic structure, and how strongly interest rates influence spending.",
  },
  {
    question: "What Is The Difference Between Monetary And Fiscal Policy?",
    answer:
      "Monetary policy is conducted by the central bank through policy rates and liquidity management. Fiscal policy is conducted by the government through public spending, taxes, transfers, and borrowing.",
  },
  {
    question: "What Is The Opposite Of Contractionary Monetary Policy?",
    answer:
      "Expansionary monetary policy. It makes monetary and financial conditions easier to support borrowing, spending, investment, and economic activity when appropriate.",
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
        className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl border ${
          styles[color] || styles.blue
        }`}
      >
        <Icon size={22} />
      </div>
      <h3 className="text-lg font-bold text-gray-950">{title}</h3>
      <div className="mt-2 text-sm leading-6 text-gray-700">{children}</div>
    </div>
  );
}

function FlowStep({ number, title, description, icon: Icon }) {
  return (
    <div className="rounded-2xl border border-blue-200 bg-white p-4 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-800">
          <Icon size={21} />
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

export default function ContractionaryMonetaryPolicyPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <article className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        

        <header className="overflow-hidden rounded-3xl border border-rose-200 bg-gradient-to-br from-rose-50 via-white to-orange-50 p-6 sm:p-10">
          <div className="grid items-center gap-8 md:grid-cols-[1.5fr_0.8fr]">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-widest text-rose-700">
                Economics · Monetary Policy · India
              </p>
              <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-950 sm:text-5xl">
                Contractionary Monetary Policy
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-gray-700 sm:text-lg">
                How A Central Bank Tightens Financial Conditions To Control
                Inflation And Moderate Excessive Demand
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="rounded-full border border-rose-200 bg-white px-3 py-1.5 text-sm font-bold text-rose-800">
                  Inflation Control
                </span>
                <span className="rounded-full border border-blue-200 bg-white px-3 py-1.5 text-sm font-bold text-blue-800">
                  RBI Policy
                </span>
                <span className="rounded-full border border-orange-200 bg-white px-3 py-1.5 text-sm font-bold text-orange-800">
                  Interest Rates
                </span>
              </div>
            </div>

            <div className="rounded-2xl border border-rose-200 bg-white p-5 shadow-sm sm:p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-xl bg-rose-100 p-3 text-rose-800">
                  <Landmark size={28} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Central Bank</p>
                  <p className="text-xl font-bold text-gray-950">
                    Reserve Bank Of India
                  </p>
                </div>
              </div>
              <div className="rounded-xl bg-rose-50 p-4">
                <div className="flex items-center gap-2 text-rose-800">
                  <ArrowUpRight size={22} />
                  <p className="font-bold">Tighter Monetary Conditions</p>
                </div>
                <p className="mt-2 text-sm leading-6 text-gray-700">
                  The aim is to moderate excessive demand and reduce persistent
                  inflationary pressure when monetary tightening is appropriate.
                </p>
              </div>
              <p className="mt-4 text-xs leading-5 text-gray-500">
                Tighter policy can also slow borrowing, investment, and
                economic growth, especially in the short run.
              </p>
            </div>
          </div>
        </header>

        <section className="mt-12">
          <SectionHeading
            eyebrow="Start With The Basics"
            title="What Is Contractionary Monetary Policy?"
            description="Contractionary monetary policy is a central bank strategy that tightens monetary and financial conditions to help slow excessive growth in demand and control inflation."
          />

          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-rose-200 bg-rose-50 p-6">
              <div className="mb-3 flex items-center gap-3">
                <div className="rounded-xl bg-white p-3 text-rose-700">
                  <BookOpen size={24} />
                </div>
                <h3 className="text-lg font-bold text-gray-950">
                  Simple Meaning
                </h3>
              </div>
              <p className="leading-7 text-gray-800">
                When prices are rising too quickly because demand is too strong,
                a central bank may increase its policy interest rate or absorb
                liquidity. Borrowing can become more expensive, encouraging
                households and businesses to reconsider some spending and
                investment decisions.
              </p>
            </div>

            <div className="rounded-2xl border border-blue-200 bg-blue-50 p-6">
              <div className="mb-3 flex items-center gap-3">
                <div className="rounded-xl bg-white p-3 text-blue-700">
                  <Lightbulb size={24} />
                </div>
                <h3 className="text-lg font-bold text-gray-950">
                  Why It Matters
                </h3>
              </div>
              <p className="leading-7 text-gray-800">
                If demand consistently grows faster than the economy's ability
                to supply goods and services, businesses may raise prices.
                Tighter monetary conditions can moderate demand and help bring
                inflation back towards the central bank's objective over time.
              </p>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-gray-200 bg-white p-5">
            <h3 className="font-bold text-gray-950">The Main Objective</h3>
            <p className="mt-2 leading-7 text-gray-700">
              Help contain persistent inflation and preserve price stability.
              The central bank must also consider economic growth, employment,
              financial stability, and the source of the inflation pressure.
              Raising interest rates is not a direct solution to every supply
              shortage.
            </p>
          </div>
        </section>
<AdSlot />
        <section className="mt-14">
          <SectionHeading
            eyebrow="Understand The Transmission"
            title="How Contractionary Monetary Policy Works"
            description="The policy decision affects financial conditions first. Its effects can then pass through bank lending, household budgets, business investment, aggregate demand, and ultimately inflation."
          />

          <div className="rounded-3xl border border-rose-200 bg-gradient-to-br from-rose-50 to-white p-5 sm:p-7">
            <div className="grid gap-3 md:grid-cols-2">
              <FlowStep
                number="01"
                title="Tighten Monetary Conditions"
                description="The central bank may increase its policy rate or absorb liquidity through appropriate operations."
                icon={Landmark}
              />
              <FlowStep
                number="02"
                title="Borrowing May Become Costlier"
                description="Market rates and some bank lending rates may rise as policy changes pass through the financial system."
                icon={Banknote}
              />
              <FlowStep
                number="03"
                title="Spending And Investment Moderate"
                description="Some households and businesses may delay purchases, reduce borrowing, or postpone investment projects."
                icon={ShoppingCart}
              />
              <FlowStep
                number="04"
                title="Demand And Price Pressure May Ease"
                description="Slower aggregate demand can reduce inflationary pressure, although the effects take time and are not guaranteed."
                icon={TrendingDown}
              />
            </div>

            <div className="mt-5 rounded-2xl border border-amber-200 bg-amber-50 p-4">
              <div className="flex items-start gap-3">
                <Gauge className="mt-1 shrink-0 text-amber-800" size={22} />
                <div>
                  <h3 className="font-bold text-gray-950">
                    Why The Effect Takes Time
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-gray-700">
                    Loan rates may reset on different dates, businesses may
                    already have projects underway, and consumers do not change
                    spending immediately. Inflation also reflects past costs,
                    expectations, supply conditions, and global prices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-14">
          <SectionHeading
            eyebrow="Policy Instruments"
            title="Main Tools Of Contractionary Monetary Policy"
            description="The RBI has several instruments for influencing interest rates and liquidity. Their use depends on the monetary policy framework, inflation outlook, and conditions in financial markets."
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
              const accent = colorStyles[tool.color] || colorStyles.blue;

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

                  <div className="grid gap-5 p-5 sm:p-6 md:grid-cols-2">
                    <div>
                      <h4 className="font-bold text-gray-950">Meaning</h4>
                      <p className="mt-2 text-sm leading-6 text-gray-700">
                        {tool.meaning}
                      </p>
                      <h4 className="mt-5 font-bold text-gray-950">
                        Purpose
                      </h4>
                      <p className="mt-2 text-sm leading-6 text-gray-700">
                        {tool.purpose}
                      </p>
                    </div>

                    <div>
                      <div className="rounded-xl border border-blue-100 bg-blue-50 p-4">
                        <h4 className="font-bold text-gray-950">
                          Economic Impact
                        </h4>
                        <p className="mt-2 text-sm leading-6 text-gray-700">
                          {tool.impact}
                        </p>
                      </div>
                      <div className="mt-4 rounded-xl border border-emerald-100 bg-emerald-50 p-4">
                        <div className="flex items-center gap-2">
                          <Lightbulb
                            size={18}
                            className="shrink-0 text-emerald-800"
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
                </div>
              );
            })}
          </div>

          <div className="mt-5 rounded-2xl border border-amber-200 bg-amber-50 p-5">
            <h3 className="font-bold text-gray-950">
              Important Note About RBI Tools
            </h3>
            <p className="mt-2 text-sm leading-6 text-gray-700">
              The RBI does not have to use every tool at once. The repo rate is
              a key policy rate, while CRR changes and open market operations
              are separate instruments. The RBI's liquidity framework also
              includes the Standing Deposit Facility (SDF), which serves as
              the floor of the Liquidity Adjustment Facility corridor. Actual
              operations depend on the RBI's framework and prevailing conditions.
            </p>
            <p className="mt-2 text-sm leading-6 text-gray-700">
              All numerical figures on this page are hypothetical learning
              examples, not current RBI rates or a prediction of future policy.
            </p>
          </div>
        </section>
<AdSlot />
        <section className="mt-14">
          <SectionHeading
            eyebrow="A Practical Indian Example"
            title="How Monetary Tightening Could Reduce Inflation"
            description="Imagine that household spending and business demand are growing strongly while the economy is struggling to expand supply quickly enough. Price increases begin to spread across many goods and services."
          />

          <div className="overflow-hidden rounded-3xl border border-gray-200">
            <div className="grid md:grid-cols-3">
              <div className="border-b border-gray-200 bg-orange-50 p-6 md:border-b-0 md:border-r">
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-white text-orange-700">
                  <TrendingUp size={24} />
                </div>
                <h3 className="font-bold text-gray-950">
                  1. Inflationary Pressure Rises
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-700">
                  Strong demand and limited spare capacity allow prices to rise
                  faster than desired.
                </p>
              </div>

              <div className="border-b border-gray-200 bg-rose-50 p-6 md:border-b-0 md:border-r">
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-white text-rose-700">
                  <Landmark size={24} />
                </div>
                <h3 className="font-bold text-gray-950">
                  2. The RBI Tightens Policy
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-700">
                  If warranted by the inflation outlook, the RBI may raise the
                  policy rate or use other appropriate measures to tighten
                  financial conditions.
                </p>
              </div>

              <div className="bg-blue-50 p-6">
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-white text-blue-700">
                  <BarChart3 size={24} />
                </div>
                <h3 className="font-bold text-gray-950">
                  3. Demand Growth Moderates
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-700">
                  Costlier borrowing may slow some spending and investment,
                  helping ease demand-related pressure on prices over time.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-5 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-blue-200 bg-blue-50 p-5 sm:p-6">
              <h3 className="flex items-center gap-2 font-bold text-gray-950">
                <Wallet size={21} className="text-blue-800" />
                Example For A Household
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                A family plans to take a floating-rate home loan. If its lender
                passes on a policy-rate increase at the applicable reset date,
                the loan's interest rate may rise. The family may decide to
                postpone a new car purchase or reduce other discretionary
                spending to manage its budget.
              </p>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                This is an illustrative possibility, not a guaranteed outcome
                for every borrower.
              </p>
            </div>

            <div className="rounded-2xl border border-violet-200 bg-violet-50 p-5 sm:p-6">
              <h3 className="flex items-center gap-2 font-bold text-gray-950">
                <Factory size={21} className="text-violet-800" />
                Example For A Business
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                A manufacturer considers borrowing to buy new machinery. If
                financing becomes more expensive and expected sales weaken, it
                may delay the purchase. This can moderate investment demand,
                though it may also slow production expansion and hiring.
              </p>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                The same mechanism that moderates inflation can also weaken
                economic growth in the short run.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-14">
          <SectionHeading
            eyebrow="Effects On The Economy"
            title="Positive And Negative Impacts"
            description="The benefits and costs of contractionary policy depend on why inflation is rising, how strong the policy response is, and how the economy reacts."
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
            eyebrow="Know The Difference"
            title="Demand-Pull Inflation Vs Cost-Push Inflation"
            description="Contractionary monetary policy can reduce excessive demand, but it is less direct when inflation originates from rising production costs or shortages."
          />

          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-orange-200 bg-orange-50 p-5 sm:p-6">
              <div className="mb-3 flex items-center gap-3">
                <div className="rounded-xl bg-white p-3 text-orange-800">
                  <ShoppingCart size={23} />
                </div>
                <h3 className="text-lg font-bold text-gray-950">
                  Demand-Pull Inflation
                </h3>
              </div>
              <p className="leading-7 text-gray-700">
                Demand-pull inflation occurs when aggregate demand grows faster
                than the economy can supply goods and services.
              </p>
              <p className="mt-3 text-sm leading-6 text-gray-700">
                <strong>Example:</strong> Strong consumer spending and credit
                growth increase demand for homes, vehicles, and services.
              </p>
              <div className="mt-4 rounded-xl border border-orange-200 bg-white p-4">
                <p className="font-bold text-orange-800">
                  Why Tightening May Help
                </p>
                <p className="mt-2 text-sm leading-6 text-gray-700">
                  Higher borrowing costs can moderate interest-sensitive
                  spending and reduce demand pressure over time.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-violet-200 bg-violet-50 p-5 sm:p-6">
              <div className="mb-3 flex items-center gap-3">
                <div className="rounded-xl bg-white p-3 text-violet-800">
                  <Factory size={23} />
                </div>
                <h3 className="text-lg font-bold text-gray-950">
                  Cost-Push Inflation
                </h3>
              </div>
              <p className="leading-7 text-gray-700">
                Cost-push inflation occurs when higher production or input costs
                push businesses to raise prices.
              </p>
              <p className="mt-3 text-sm leading-6 text-gray-700">
                <strong>Example:</strong> A sharp increase in global crude oil
                prices raises transport and manufacturing costs.
              </p>
              <div className="mt-4 rounded-xl border border-violet-200 bg-white p-4">
                <p className="font-bold text-violet-800">
                  Why Tightening Is More Difficult
                </p>
                <p className="mt-2 text-sm leading-6 text-gray-700">
                  Higher interest rates cannot produce more oil or immediately
                  repair supply chains. They may restrain broader demand and
                  expectations, but can also weaken output.
                </p>
              </div>
            </div>
          </div>
        </section>
<AdSlot />
        <section className="mt-14">
          <SectionHeading
            eyebrow="Compare The Two Approaches"
            title="Contractionary Vs Expansionary Monetary Policy"
            description="These approaches move monetary conditions in opposite directions, depending on the central bank's assessment of inflation and economic activity."
          />

          <div className="overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full min-w-[640px] border-collapse text-left text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-4 font-bold text-gray-950">Feature</th>
                  <th className="p-4 font-bold text-rose-800">
                    Contractionary Policy
                  </th>
                  <th className="p-4 font-bold text-emerald-800">
                    Expansionary Policy
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    "Main Direction",
                    "Tightens monetary conditions",
                    "Eases monetary conditions",
                  ],
                  [
                    "Policy Rate",
                    "May increase",
                    "May decrease",
                  ],
                  [
                    "Liquidity",
                    "May absorb liquidity",
                    "May inject liquidity",
                  ],
                  [
                    "Borrowing Conditions",
                    "May become less favourable",
                    "May become more favourable",
                  ],
                  [
                    "Aggregate Demand",
                    "Aims to moderate excessive demand",
                    "Aims to support weak demand",
                  ],
                  [
                    "Typical Concern",
                    "Persistent or excessive inflation",
                    "Weak economic activity or insufficient demand",
                  ],
                  [
                    "Short-Term Trade-Off",
                    "May slow output and employment",
                    "May increase inflationary pressure",
                  ],
                ].map(([feature, contractionary, expansionary]) => (
                  <tr key={feature} className="border-t border-gray-200">
                    <th className="p-4 font-bold text-gray-900">{feature}</th>
                    <td className="p-4 leading-6 text-gray-700">
                      {contractionary}
                    </td>
                    <td className="p-4 leading-6 text-gray-700">
                      {expansionary}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4">
            <Link
              href="/economics/monetary-policy/expansionary-monetary-policy"
              className="inline-flex items-center gap-2 font-bold text-blue-700 underline decoration-blue-300 underline-offset-4 hover:text-blue-900"
            >
              Read Expansionary Monetary Policy
              <ArrowRight size={17} />
            </Link>
          </div>
        </section>

        <section className="mt-14">
          <SectionHeading
            eyebrow="Limitations And Risks"
            title="Limitations Of Contractionary Monetary Policy"
            description="Tightening can help control inflation, but using it too aggressively or without considering the source of rising prices can create additional economic challenges."
          />

          <div className="grid gap-4 md:grid-cols-2">
            <InfoCard icon={TrendingDown} title="Slower Economic Growth" color="rose">
              Higher borrowing costs can reduce consumption and investment.
              If demand falls too sharply, production and economic growth may
              weaken.
            </InfoCard>
            <InfoCard icon={Building2} title="Lower Hiring" color="blue">
              Businesses facing slower sales or higher financing costs may
              postpone expansion, reduce recruitment, or limit new projects.
            </InfoCard>
            <InfoCard icon={ShieldAlert} title="Debt Repayment Pressure" color="violet">
              Borrowers with large floating-rate loans may face higher
              repayments or longer loan tenures, depending on the contract.
            </InfoCard>
            <InfoCard icon={Waves} title="Supply Shocks Remain" color="amber">
              Interest-rate increases cannot directly resolve shortages of
              food, energy, raw materials, or transport capacity.
            </InfoCard>
          </div>
        </section>

        <section className="mt-14">
          <SectionHeading
            eyebrow="When Is It Appropriate?"
            title="When Might A Central Bank Tighten Monetary Policy?"
            description="The decision depends on the inflation outlook and the balance of risks, not merely on whether prices have risen in one month."
          />

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-rose-200 bg-rose-50 p-5">
              <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-gray-950">
                <CheckCircle2 className="text-rose-700" size={22} />
                Conditions That May Support Tightening
              </h3>
              <ul className="space-y-3 text-sm leading-6 text-gray-700">
                <li>• Inflation remains persistently elevated.</li>
                <li>• Demand is growing faster than productive capacity.</li>
                <li>• Price increases are becoming broad-based.</li>
                <li>• Inflation expectations risk becoming entrenched.</li>
                <li>• Credit growth and spending are adding to demand pressure.</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
              <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-gray-950">
                <XCircle className="text-emerald-700" size={22} />
                Conditions That Require Caution
              </h3>
              <ul className="space-y-3 text-sm leading-6 text-gray-700">
                <li>• Economic activity is already weakening sharply.</li>
                <li>• Inflation mainly reflects temporary supply disruptions.</li>
                <li>• Employment and business investment are falling.</li>
                <li>• Higher rates could create significant debt-servicing stress.</li>
                <li>• Existing monetary tightening has not yet fully affected demand.</li>
              </ul>
            </div>
          </div>
        </section>
<AdSlot />
        <section className="mt-14">
          <SectionHeading
            eyebrow="Important Distinction"
            title="Monetary Policy Is Not Fiscal Policy"
            description="The central bank and the government influence the economy through different tools, even though their policies can interact."
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
                Conducted by the central bank through policy interest rates,
                liquidity operations, and related monetary instruments.
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
                Conducted by the government through taxation, public spending,
                transfers, and borrowing. Fiscal decisions may also influence
                demand and inflation.
              </p>
              <p className="mt-3 text-sm font-bold text-violet-800">
                India: Central Government And State Governments
              </p>
            </div>
          </div>
        </section>

        <section className="mt-14">
          <SectionHeading
            eyebrow="Revision Notes"
            title="Important Points To Remember"
            description="Review these key points for school, college, competitive examinations, and general economic understanding."
          />

          <div className="space-y-3">
            {[
              "Contractionary monetary policy aims to tighten monetary and financial conditions.",
              "The RBI may increase the policy repo rate when appropriate to address inflation risks.",
              "Higher interest rates can moderate borrowing, consumption, and investment.",
              "An increase in CRR raises banks' required reserve balances, all else equal.",
              "RBI sales of government securities through OMOs generally absorb liquidity.",
              "Lower aggregate demand can reduce demand-driven inflation over time.",
              "Tighter policy can also slow economic growth and employment in the short run.",
              "Interest-rate changes do not directly eliminate supply shortages.",
              "Monetary policy works with delays and depends on how financial conditions transmit.",
              "Contractionary monetary policy is different from contractionary fiscal policy.",
            ].map((point, index) => (
              <div
                key={point}
                className="flex items-start gap-3 rounded-xl border border-gray-200 bg-white p-4"
              >
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-rose-100 text-sm font-bold text-rose-800">
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
            title="Contractionary Monetary Policy FAQs"
            description="Quick answers to common questions about monetary tightening, inflation, borrowing costs, and economic growth."
          />

          <div className="space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-gray-200 bg-white p-5 open:border-rose-200 open:bg-rose-50/40"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-gray-950">
                  <span>{faq.question}</span>
                  <CircleHelp
                    size={20}
                    className="shrink-0 text-rose-700 transition-transform group-open:rotate-12"
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
