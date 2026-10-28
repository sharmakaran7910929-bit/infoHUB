
import Link from "next/link";
import {
  Activity,
  ArrowDown,
  ArrowDownRight,
  ArrowRight,
  ArrowUp,
  Banknote,
  BarChart3,
  Building2,
  CheckCircle2,
  CircleHelp,
  Coins,
  Factory,
  Gauge,
  Home,
  IndianRupee,
  Landmark,
  Lightbulb,
  LineChart,
  PiggyBank,
  ShieldCheck,
  ShoppingCart,
  TrendingDown,
  TrendingUp,
  Wallet,
  Wheat,
} from "lucide-react";
import AdSlot from "../../../../components/AdSlot";

export const metadata = {
  title:
    "What Is Repo Rate? Meaning, Factors, Effects & Examples | PriceTag HUB",
  description:
    "Understand the repo rate in India, how the RBI decides it, factors affecting repo rate, and its impact on home loan EMIs, savings, inflation, businesses, jobs and economic growth.",
  alternates: {
    canonical: "https://www.pricetag.co.in/economics/monetary-policy/repo-rate",
  },
};

const factors = [
  {
    icon: TrendingUp,
    title: "Inflation And Price Trends",
    color: "rose",
    text: "When inflation stays high or is expected to rise, the RBI may consider a higher repo rate to moderate demand. When inflation pressures ease, a rate reduction may become possible.",
  },
  {
    icon: BarChart3,
    title: "Economic Growth",
    color: "blue",
    text: "If spending, investment and economic activity weaken, lower interest rates may support borrowing and demand, provided inflation risks allow it.",
  },
  {
    icon: Wheat,
    title: "Food And Fuel Prices",
    color: "amber",
    text: "Poor harvests, supply disruptions, or rising oil prices can push up costs. The RBI assesses whether these increases are temporary or likely to spread into broader inflation.",
  },
  {
    icon: Gauge,
    title: "Liquidity And Credit Conditions",
    color: "violet",
    text: "The availability of funds in the banking system, credit growth and money-market conditions influence how monetary policy operates and reaches borrowers.",
  },
  {
    icon: Landmark,
    title: "Global Interest Rates",
    color: "indigo",
    text: "Interest-rate decisions by major central banks, global financial conditions and capital flows can influence India's policy choices, although the RBI considers domestic conditions too.",
  },
  {
    icon: Activity,
    title: "Rupee And External Risks",
    color: "emerald",
    text: "Currency movements, imported inflation and external economic uncertainty are among the factors considered when assessing the overall inflation and growth outlook.",
  },
];

const impacts = [
  {
    icon: Home,
    title: "Home Loans And EMIs",
    text: "A repo rate cut can reduce borrowing costs when banks pass it through to eligible floating-rate loans. A hike can increase costs, depending on the loan's benchmark and reset schedule.",
    color: "blue",
  },
  {
    icon: Wallet,
    title: "Personal And Vehicle Loans",
    text: "Changes in funding costs may influence personal loans, vehicle finance and other borrowing rates. The final effect depends on the lender, product and borrower profile.",
    color: "violet",
  },
  {
    icon: PiggyBank,
    title: "Savings And Fixed Deposits",
    text: "Deposit rates may rise or fall as banks adjust their funding needs. Changes are not always immediate, uniform or equal to the repo rate change.",
    color: "emerald",
  },
  {
    icon: ShoppingCart,
    title: "Consumer Spending",
    text: "Lower borrowing costs may encourage purchases of homes, vehicles and other goods. Higher borrowing costs may encourage households to postpone some spending.",
    color: "amber",
  },
  {
    icon: Building2,
    title: "Businesses And Investment",
    text: "Financing costs can affect expansion plans, working capital, equipment purchases and the willingness of firms to borrow and invest.",
    color: "indigo",
  },
  {
    icon: Factory,
    title: "Jobs And Economic Growth",
    text: "Changes in spending and investment can affect production and hiring. The outcome depends on demand, business confidence, supply conditions and other economic forces.",
    color: "rose",
  },
];

const faqs = [
  {
    q: "What Is The Repo Rate In Simple Words?",
    a: "The repo rate is the RBI's policy interest rate for providing short-term liquidity to eligible financial institutions under its liquidity adjustment framework against eligible collateral. It is an important signal for interest rates across the economy.",
  },
  {
    q: "Who Decides The Repo Rate In India?",
    a: "The Reserve Bank of India's Monetary Policy Committee (MPC) decides the policy repo rate under India's monetary policy framework.",
  },
  {
    q: "Does A Repo Rate Cut Automatically Reduce My EMI?",
    a: "No. The change must pass through to your loan's applicable interest rate. The timing and amount depend on the loan benchmark, reset date, lender's policies and loan terms. Fixed-rate loans may not change during the fixed-rate period.",
  },
  {
    q: "Does A Higher Repo Rate Always Reduce Inflation?",
    a: "Not immediately and not in every situation. Higher rates can moderate demand and inflationary pressures over time, but supply shocks such as a sudden rise in food or fuel prices may not respond quickly to interest-rate changes.",
  },
  {
    q: "Why Does The RBI Cut The Repo Rate?",
    a: "A rate cut may be considered when inflation conditions allow and policymakers want to support borrowing, consumption, investment or economic activity. A cut is not guaranteed whenever growth slows.",
  },
  {
    q: "Why Does The RBI Increase The Repo Rate?",
    a: "A rate increase can help moderate demand and contain persistent inflationary pressures. The decision depends on the inflation outlook, growth, risks and other relevant economic conditions.",
  },
  {
    q: "Is The Repo Rate The Same As The Bank Lending Rate?",
    a: "No. The repo rate is an RBI policy rate. A bank's lending rate also reflects its funding costs, applicable benchmark, operating costs, credit risk, competition and loan terms.",
  },
  {
    q: "What Is The Difference Between Repo Rate And Reverse Repo Rate?",
    a: "The policy repo rate is associated with RBI providing liquidity against eligible collateral. Reverse repo operations work in the opposite direction, with RBI absorbing liquidity against eligible securities. The Standing Deposit Facility is now the floor of the liquidity adjustment facility corridor; the fixed reverse repo rate is not the corridor floor.",
  },
  {
    q: "Can A Repo Rate Cut Cause Inflation?",
    a: "It can add to inflationary pressure if easier credit stimulates demand beyond what the economy can supply. The actual outcome depends on production capacity, supply conditions, expectations and other factors.",
  },
  {
    q: "Where Can I Check The Latest Repo Rate?",
    a: "Check the Reserve Bank of India's official website and monetary policy announcements for the current policy repo rate. Always verify the announcement date rather than relying on an undated figure.",
  },
];

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mx-auto mb-8 max-w-3xl text-center">
      {eyebrow && (
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-blue-700">
          {eyebrow}
        </p>
      )}
      <h2 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-base leading-7 text-slate-600">{description}</p>
      )}
    </div>
  );
}

function InfoCard({ icon: Icon, title, text, color = "blue" }) {
  const colors = {
    blue: "bg-blue-50 text-blue-700 ring-blue-100",
    violet: "bg-violet-50 text-violet-700 ring-violet-100",
    emerald: "bg-emerald-50 text-emerald-700 ring-emerald-100",
    amber: "bg-amber-50 text-amber-700 ring-amber-100",
    indigo: "bg-indigo-50 text-indigo-700 ring-indigo-100",
    rose: "bg-rose-50 text-rose-700 ring-rose-100",
  };

  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div
        className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl ring-1 ${colors[color] || colors.blue}`}
      >
        <Icon size={22} />
      </div>
      <h3 className="text-lg font-bold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
    </article>
  );
}

function FlowStep({ number, title, text, color = "blue" }) {
  const colors = {
    blue: "bg-blue-600",
    violet: "bg-violet-600",
    amber: "bg-amber-500",
    emerald: "bg-emerald-600",
  };

  return (
    <div className="flex flex-1 flex-col items-center rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-sm">
      <div
        className={`mb-3 flex h-10 w-10 items-center justify-center rounded-full text-lg font-bold text-white ${colors[color]}`}
      >
        {number}
      </div>
      <h3 className="font-bold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
    </div>
  );
}

export default function RepoRatePage() {
  return (
    <main className="min-h-screen bg-white text-slate-800">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-blue-100 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-3 py-1.5 text-sm font-bold text-blue-800 shadow-sm">
                <Landmark size={16} />
                Economics · Monetary Policy · India
              </div>
              <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                What Is Repo Rate?
                <span className="mt-2 block text-blue-700">
                  Meaning, Factors, Effects And Examples
                </span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                Discover how the RBI's policy rate influences bank funding,
                loan interest rates, EMIs, savings, inflation, business
                investment and India's economic growth.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="#how-repo-rate-works"
                  className="inline-flex items-center gap-2 rounded-xl bg-blue-700 px-5 py-3 font-bold text-white shadow-sm transition hover:bg-blue-800"
                >
                  Understand The Process <ArrowRight size={18} />
                </a>
                <a
                  href="#impact-on-emi"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 font-bold text-slate-800 transition hover:bg-slate-50"
                >
                  See Real-Life Impacts
                </a>
              </div>
              <p className="mt-5 text-sm text-slate-500">
                For students, borrowers, savers, business owners and anyone
                following the Indian economy.
              </p>
            </div>

            {/* Visual: RBI-to-economy */}
            <div className="rounded-3xl border border-blue-100 bg-white p-5 shadow-xl shadow-blue-100/60 sm:p-7">
              <div className="mb-5 flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-bold uppercase tracking-wider text-blue-700">
                    The Big Picture
                  </p>
                  <h2 className="mt-1 text-xl font-bold text-slate-950">
                    From RBI To Everyday Life
                  </h2>
                </div>
                <div className="rounded-2xl bg-blue-50 p-3 text-blue-700">
                  <IndianRupee size={27} />
                </div>
              </div>
              <div className="space-y-3">
                <div className="rounded-xl border border-blue-200 bg-blue-50 p-4 text-center">
                  <Landmark className="mx-auto mb-2 text-blue-700" size={26} />
                  <p className="font-bold text-slate-900">Reserve Bank Of India</p>
                  <p className="mt-1 text-sm text-slate-600">
                    Monetary Policy Committee Sets The Policy Repo Rate
                  </p>
                </div>
                <div className="flex justify-center text-blue-600">
                  <ArrowDown size={25} />
                </div>
                <div className="rounded-xl border border-violet-200 bg-violet-50 p-4 text-center">
                  <Building2 className="mx-auto mb-2 text-violet-700" size={25} />
                  <p className="font-bold text-slate-900">Banks And Financial Markets</p>
                  <p className="mt-1 text-sm text-slate-600">
                    Funding Costs, Liquidity And Interest-Rate Expectations
                  </p>
                </div>
                <div className="flex justify-center text-violet-600">
                  <ArrowDown size={25} />
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { icon: Home, label: "Loan EMIs", color: "text-blue-700" },
                    { icon: PiggyBank, label: "Savings", color: "text-emerald-700" },
                    { icon: Factory, label: "Businesses", color: "text-amber-700" },
                  ].map((item) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={item.label}
                        className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-center"
                      >
                        <Icon className={`mx-auto mb-2 ${item.color}`} size={23} />
                        <p className="text-xs font-bold text-slate-800 sm:text-sm">
                          {item.label}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
              <p className="mt-4 text-xs leading-5 text-slate-500">
                The effects are indirect and may take time. A policy-rate
                change does not automatically change every bank rate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Definition */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="The Basic Concept"
          title="Repo Rate Meaning In Simple Words"
          description="The repo rate is a key interest rate used by the RBI to implement monetary policy and influence short-term interest rates and liquidity."
        />
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-blue-200 bg-blue-50 p-6 sm:p-7">
            <div className="mb-4 inline-flex rounded-xl bg-white p-3 text-blue-700 shadow-sm">
              <Landmark size={28} />
            </div>
            <h3 className="text-xl font-bold text-slate-950">
              What Does It Actually Mean?
            </h3>
            <p className="mt-3 leading-7 text-slate-700">
              Under the RBI's liquidity adjustment framework, the policy repo
              rate is the rate associated with short-term liquidity provided
              by the RBI to eligible participants against eligible collateral.
              It is the main policy-rate signal used to influence monetary and
              financial conditions.
            </p>
          </div>
          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6 sm:p-7">
            <div className="mb-4 inline-flex rounded-xl bg-white p-3 text-amber-700 shadow-sm">
              <Lightbulb size={28} />
            </div>
            <h3 className="text-xl font-bold text-slate-950">
              Why Should Ordinary People Care?
            </h3>
            <p className="mt-3 leading-7 text-slate-700">
              A repo rate change can influence the rates banks offer on loans
              and deposits. That may affect how much a family pays on a
              floating-rate home loan, how attractive saving becomes, and how
              much businesses are willing to invest.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-6 max-w-5xl rounded-2xl border border-slate-200 bg-white p-5">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="mt-1 shrink-0 text-emerald-600" size={22} />
            <p className="leading-7 text-slate-700">
              <strong>Remember:</strong> The repo rate is not the rate at which
              every customer borrows from a bank. Retail loan rates also depend
              on the loan benchmark, lender, credit risk, product terms and
              applicable reset rules.
            </p>
          </div>
        </div>
      </section>
<AdSlot />
      {/* How it works */}
      <section
        id="how-repo-rate-works"
        className="border-y border-slate-200 bg-slate-50 py-14 sm:py-16"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Visual Explanation"
            title="How Does The Repo Rate Work?"
            description="A policy decision moves through financial markets and banks before it may affect households and businesses."
          />
          <div className="flex flex-col items-stretch gap-3 lg:flex-row lg:items-stretch">
            <FlowStep
              number="1"
              title="RBI Assesses The Economy"
              text="It evaluates inflation, growth, forecasts, risks and financial conditions."
              color="blue"
            />
            <div className="flex justify-center py-1 text-blue-600 lg:items-center">
              <ArrowRight size={25} className="hidden lg:block" />
              <ArrowDown size={25} className="lg:hidden" />
            </div>
            <FlowStep
              number="2"
              title="MPC Decides"
              text="The Monetary Policy Committee decides the policy repo rate."
              color="violet"
            />
            <div className="flex justify-center py-1 text-blue-600 lg:items-center">
              <ArrowRight size={25} className="hidden lg:block" />
              <ArrowDown size={25} className="lg:hidden" />
            </div>
            <FlowStep
              number="3"
              title="Markets And Banks Respond"
              text="Money-market rates, funding conditions and lending benchmarks may adjust."
              color="amber"
            />
            <div className="flex justify-center py-1 text-blue-600 lg:items-center">
              <ArrowRight size={25} className="hidden lg:block" />
              <ArrowDown size={25} className="lg:hidden" />
            </div>
            <FlowStep
              number="4"
              title="Spending And Prices Respond"
              text="Borrowing, saving, demand, investment and inflation may change over time."
              color="emerald"
            />
          </div>
          <div className="mx-auto mt-7 max-w-4xl rounded-2xl border border-blue-200 bg-white p-5">
            <p className="text-sm leading-6 text-slate-600">
              <strong className="text-slate-900">Important:</strong> This
              transmission is not automatic. Banks may change lending and
              deposit rates by different amounts and at different times.
              Economic conditions also influence the final outcome.
            </p>
          </div>
        </div>
      </section>

      {/* Repo rate up vs down */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Two Directions"
          title="What Happens When The Repo Rate Changes?"
          description="The broad effects often run in opposite directions, but the final result depends on how the change passes through the financial system."
        />
        <div className="grid gap-6 md:grid-cols-2">
          <div className="overflow-hidden rounded-2xl border border-rose-200 bg-white shadow-sm">
            <div className="flex items-center gap-3 bg-rose-50 p-5">
              <div className="rounded-xl bg-white p-3 text-rose-700">
                <ArrowUp size={25} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-950">
                  When Repo Rate Increases
                </h3>
                <p className="text-sm text-rose-800">Monetary Tightening</p>
              </div>
            </div>
            <div className="space-y-3 p-5">
              {[
                "Borrowing may become more expensive.",
                "Some households may delay large purchases.",
                "Businesses may reconsider debt-funded expansion.",
                "Demand and inflationary pressure may ease over time.",
              ].map((text) => (
                <div key={text} className="flex gap-3">
                  <TrendingUp className="mt-0.5 shrink-0 text-rose-600" size={19} />
                  <p className="text-sm leading-6 text-slate-700">{text}</p>
                </div>
              ))}
              <div className="mt-4 rounded-xl bg-rose-50 p-4 text-sm leading-6 text-rose-950">
                <strong>Possible downside:</strong> Higher financing costs can
                slow investment, consumption and economic activity.
              </div>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl border border-emerald-200 bg-white shadow-sm">
            <div className="flex items-center gap-3 bg-emerald-50 p-5">
              <div className="rounded-xl bg-white p-3 text-emerald-700">
                <ArrowDown size={25} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-950">
                  When Repo Rate Decreases
                </h3>
                <p className="text-sm text-emerald-800">Monetary Easing</p>
              </div>
            </div>
            <div className="space-y-3 p-5">
              {[
                "Borrowing costs may fall as banks pass on the change.",
                "Households may have more room for spending.",
                "Businesses may find some investments more affordable.",
                "Demand and economic activity may receive support.",
              ].map((text) => (
                <div key={text} className="flex gap-3">
                  <TrendingDown className="mt-0.5 shrink-0 text-emerald-600" size={19} />
                  <p className="text-sm leading-6 text-slate-700">{text}</p>
                </div>
              ))}
              <div className="mt-4 rounded-xl bg-emerald-50 p-4 text-sm leading-6 text-emerald-950">
                <strong>Possible downside:</strong> If demand grows faster than
                supply, easier credit can add to inflationary pressure.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Factors */}
      <section className="border-y border-slate-200 bg-gradient-to-b from-slate-50 to-white py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Why Rates Change"
            title="Factors Affecting The Repo Rate In India"
            description="The RBI's decision is based on an overall assessment of inflation, growth and risks. There is no single factor or fixed formula that determines every decision."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {factors.map((factor) => (
              <InfoCard key={factor.title} {...factor} />
            ))}
          </div>
          <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-5 sm:p-6">
            <div className="flex items-start gap-3">
              <Lightbulb className="mt-1 shrink-0 text-amber-700" size={24} />
              <div>
                <h3 className="font-bold text-slate-950">
                  Does A Single Increase In Food Prices Force A Repo Rate Hike?
                </h3>
                <p className="mt-2 leading-7 text-slate-700">
                  No. Policymakers examine the size and persistence of the
                  shock, its effect on broader prices and inflation
                  expectations, and the outlook for growth. Monetary policy
                  cannot directly produce more food or fuel, although it can
                  influence wider demand and price pressures.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
<AdSlot />
      {/* Impacts */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Impact On The Economy"
          title="How Does The Repo Rate Affect Different People?"
          description="Its influence can reach borrowers, savers, consumers, employers and investors—but the size and timing of the effect varies."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {impacts.map((impact) => (
            <InfoCard key={impact.title} {...impact} />
          ))}
        </div>
      </section>

      {/* EMI */}
      <section
        id="impact-on-emi"
        className="border-y border-blue-100 bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-14 sm:py-16"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="A Practical Example"
            title="How Can The Repo Rate Affect A Home Loan EMI?"
            description="Imagine that the RBI reduces its policy rate. Your bank may lower the applicable rate on an eligible floating-rate home loan—but only according to the loan's benchmark and reset rules."
          />
          <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-5 flex items-center gap-3">
                <div className="rounded-xl bg-blue-50 p-3 text-blue-700">
                  <Home size={25} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-950">
                    Example Borrower
                  </h3>
                  <p className="text-sm text-slate-500">
                    Illustrative scenario, not a live bank offer
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                {[
                  ["Loan Type", "Floating-Rate Home Loan"],
                  ["Outstanding Loan", "₹30,00,000"],
                  ["Remaining Tenure", "20 Years"],
                  ["Policy Change", "RBI Cuts Repo Rate"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="flex flex-wrap justify-between gap-2 border-b border-slate-100 pb-3"
                  >
                    <span className="text-sm text-slate-600">{label}</span>
                    <span className="text-right text-sm font-bold text-slate-900">
                      {value}
                    </span>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-sm leading-6 text-slate-600">
                If the lender passes the change through to the applicable loan
                rate, the borrower may see a lower EMI or a shorter repayment
                period, depending on the lender's recalculation method.
              </p>
            </div>
            <div className="rounded-2xl border border-blue-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-slate-950">
                The EMI Transmission Chain
              </h3>
              <div className="mt-5 space-y-3">
                {[
                  {
                    label: "RBI Changes The Policy Repo Rate",
                    desc: "A monetary policy decision is announced.",
                    icon: Landmark,
                  },
                  {
                    label: "Bank Adjusts Its Applicable Benchmark",
                    desc: "The timing and size of any change depend on the loan and lender.",
                    icon: Building2,
                  },
                  {
                    label: "Loan Interest Rate Is Reset",
                    desc: "The contractual reset date and terms matter.",
                    icon: Gauge,
                  },
                  {
                    label: "EMI Or Loan Tenure May Change",
                    desc: "The final result depends on the outstanding balance and remaining tenure.",
                    icon: Wallet,
                  },
                ].map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <div key={step.label}>
                      <div className="flex items-start gap-3 rounded-xl bg-slate-50 p-3">
                        <div className="rounded-lg bg-blue-100 p-2 text-blue-700">
                          <Icon size={20} />
                        </div>
                        <div>
                          <p className="font-bold text-slate-900">{step.label}</p>
                          <p className="mt-1 text-sm leading-5 text-slate-600">
                            {step.desc}
                          </p>
                        </div>
                      </div>
                      {index < 3 && (
                        <div className="flex justify-center py-1 text-blue-600">
                          <ArrowDown size={18} />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="mx-auto mt-6 max-w-5xl rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-950">
            <strong>Do not assume a fixed saving:</strong> A 0.25 percentage
            point repo rate cut does not guarantee that your loan rate will
            fall by exactly 0.25 percentage points or that your EMI will
            immediately decrease by a particular amount.
          </div>
        </div>
      </section>

      {/* Inflation */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Prices And Purchasing Power"
          title="How Does The Repo Rate Affect Inflation?"
          description="The repo rate works mainly through demand, borrowing conditions, expectations and financial markets—not by directly setting the price of every product."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-rose-200 bg-white p-6">
            <div className="mb-4 flex items-center gap-3">
              <div className="rounded-xl bg-rose-50 p-3 text-rose-700">
                <TrendingUp size={25} />
              </div>
              <h3 className="text-xl font-bold text-slate-950">
                Higher Repo Rate
              </h3>
            </div>
            <div className="space-y-2">
              {[
                "Credit can become more expensive.",
                "Interest-sensitive spending may slow.",
                "Business and household demand may moderate.",
                "Inflation pressure may ease over time.",
              ].map((text, index) => (
                <div
                  key={text}
                  className="flex items-center gap-3 rounded-xl bg-rose-50/70 p-3"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-rose-100 text-sm font-bold text-rose-800">
                    {index + 1}
                  </span>
                  <p className="text-sm leading-6 text-slate-700">{text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-emerald-200 bg-white p-6">
            <div className="mb-4 flex items-center gap-3">
              <div className="rounded-xl bg-emerald-50 p-3 text-emerald-700">
                <TrendingDown size={25} />
              </div>
              <h3 className="text-xl font-bold text-slate-950">
                Lower Repo Rate
              </h3>
            </div>
            <div className="space-y-2">
              {[
                "Credit may become more affordable.",
                "Interest-sensitive spending may increase.",
                "Investment and demand may receive support.",
                "Inflation pressure may rise if demand outpaces supply.",
              ].map((text, index) => (
                <div
                  key={text}
                  className="flex items-center gap-3 rounded-xl bg-emerald-50/70 p-3"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-sm font-bold text-emerald-800">
                    {index + 1}
                  </span>
                  <p className="text-sm leading-6 text-slate-700">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-6">
          <h3 className="font-bold text-slate-950">
            What If Inflation Is Caused By A Supply Shortage?
          </h3>
          <p className="mt-2 leading-7 text-slate-700">
            Suppose vegetable prices rise because crops are damaged by
            unseasonal rain. Raising interest rates cannot restore the lost
            harvest. The RBI must consider whether the price shock is likely
            to spread into wider inflation and expectations. This is why
            monetary policy decisions involve judgment rather than a simple
            rule.
          </p>
        </div>
      </section>
<AdSlot />
      {/* Who benefits */}
      <section className="border-y border-slate-200 bg-slate-50 py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Different Perspectives"
            title="Who Benefits From A Repo Rate Cut Or Hike?"
            description="The same policy change can help one group and create difficulties for another."
          />
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <div className="grid grid-cols-3 bg-slate-900 text-white">
              <div className="p-3 text-sm font-bold sm:p-4">Group</div>
              <div className="p-3 text-sm font-bold sm:p-4">Repo Rate Cut</div>
              <div className="p-3 text-sm font-bold sm:p-4">Repo Rate Hike</div>
            </div>
            {[
              ["Floating-Rate Borrowers", "May benefit if rates pass through", "May face higher payments"],
              ["New Borrowers", "May find some loans cheaper", "May face higher borrowing costs"],
              ["Savers", "Some deposit rates may fall", "Some deposit rates may rise"],
              ["Businesses", "May gain from cheaper financing", "May face higher financing costs"],
              ["Consumers", "Spending may receive support", "Spending may moderate"],
              ["Inflation Outlook", "Demand pressure may increase", "Demand pressure may ease"],
            ].map((row, index) => (
              <div
                key={row[0]}
                className={`grid grid-cols-3 border-t border-slate-200 ${index % 2 === 0 ? "bg-white" : "bg-slate-50"}`}
              >
                <div className="p-3 text-sm font-bold text-slate-900 sm:p-4">
                  {row[0]}
                </div>
                <div className="p-3 text-sm leading-5 text-slate-600 sm:p-4">
                  {row[1]}
                </div>
                <div className="p-3 text-sm leading-5 text-slate-600 sm:p-4">
                  {row[2]}
                </div>
              </div>
            ))}
          </div>
          <p className="mt-3 text-sm leading-6 text-slate-500">
            These are typical possible effects, not guaranteed outcomes. Actual
            results depend on banks' decisions, contracts, market conditions
            and the wider economy.
          </p>
        </div>
      </section>

      {/* Related concepts */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Understand The Difference"
          title="Repo Rate Vs Other Important Rates"
          description="These terms are connected, but they do not mean the same thing."
        />
        <div className="grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <h3 className="text-lg font-bold text-slate-950">
              Repo Rate Vs Reverse Repo Rate
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Repo operations provide liquidity against eligible collateral.
              Reverse repo operations work in the opposite direction and can
              absorb liquidity. Under the current framework, the Standing
              Deposit Facility is the floor of the liquidity adjustment
              facility corridor.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <h3 className="text-lg font-bold text-slate-950">
              Repo Rate Vs Bank Lending Rate
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              The repo rate is an RBI policy rate. A bank's customer lending
              rate depends on the applicable benchmark, funding costs, credit
              risk, product conditions and lender policies.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <h3 className="text-lg font-bold text-slate-950">
              Repo Rate Vs Bank Rate
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              The bank rate is a separate RBI-published rate with its own
              operational and regulatory uses. In India's current framework,
              it is aligned with the Marginal Standing Facility rate.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <h3 className="text-lg font-bold text-slate-950">
              Repo Rate Vs Cash Reserve Ratio
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              The repo rate is an interest-rate instrument. The CRR requires
              banks to maintain a specified share of eligible liabilities as
              balances with the RBI. Both can affect liquidity and credit
              conditions through different mechanisms.
            </p>
          </div>
        </div>
      </section>

      {/* Practical example */}
      <section className="border-y border-amber-200 bg-gradient-to-r from-amber-50 via-white to-orange-50 py-14">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-5 flex items-center gap-3">
            <div className="rounded-xl bg-white p-3 text-amber-700 shadow-sm">
              <Lightbulb size={25} />
            </div>
            <h2 className="text-2xl font-bold text-slate-950">
              An Easy Indian Example
            </h2>
          </div>
          <div className="space-y-4 text-slate-700">
            <p className="leading-7">
              Imagine that inflation is persistently above the level policymakers
              consider consistent with their objective. The RBI assesses the
              outlook and decides to raise the repo rate. Banks may gradually
              adjust applicable loan rates, and some families may postpone
              buying a car or a house. Businesses may reconsider borrowing for
              expansion. If overall demand moderates, inflation pressure may
              ease over time.
            </p>
            <p className="leading-7">
              Now imagine that inflation pressures are easing while economic
              activity is weak. The RBI may consider a rate cut if the broader
              outlook supports it. Lower borrowing costs, when passed through,
              may encourage some households and businesses to spend and invest.
            </p>
            <div className="rounded-xl border border-amber-200 bg-white p-4 text-sm leading-6">
              <strong className="text-slate-950">The lesson:</strong> A repo
              rate decision is a balancing act. The RBI considers price
              stability while keeping the growth objective in mind; it does
              not simply try to make interest rates as low as possible.
            </div>
          </div>
        </div>
      </section>

      {/* Limitations */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Important Limitations"
          title="What The Repo Rate Cannot Control Directly"
          description="Interest rates are powerful, but they are not a solution to every economic problem."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <InfoCard
            icon={Wheat}
            title="Food Supply"
            text="A policy-rate change cannot directly improve crop yields, repair a disrupted supply chain or increase the immediate supply of vegetables."
            color="amber"
          />
          <InfoCard
            icon={ShieldCheck}
            title="Every Loan Contract"
            text="The RBI cannot guarantee that each bank will change every retail loan rate by the same amount or on the same day."
            color="blue"
          />
          <InfoCard
            icon={LineChart}
            title="Instant Economic Results"
            text="Changes in borrowing, spending and inflation can take time. Outcomes depend on confidence, credit demand, supply capacity and other forces."
            color="violet"
          />
        </div>
      </section>

      <AdSlot />

      {/* FAQs */}
      <section className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Common Questions"
          title="Repo Rate FAQs"
          description="Quick answers to common questions about the repo rate in India."
        />
        <div className="space-y-3">
          {faqs.map((faq) => (
            <details
              key={faq.q}
              className="group rounded-xl border border-slate-200 bg-white p-4 open:border-blue-200 open:bg-blue-50/40 sm:p-5"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-slate-900">
                <span>{faq.q}</span>
                <CircleHelp
                  className="shrink-0 text-blue-700 transition group-open:rotate-12"
                  size={20}
                />
              </summary>
              <p className="mt-3 pr-2 text-sm leading-7 text-slate-600">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* Sources */}
      <section className="border-t border-slate-200 bg-slate-50 py-10">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-slate-950">
            Official Sources And Further Reading
          </h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Use official RBI publications for current rates and policy
            announcements. Rates and monetary policy frameworks can change;
            check the publication date before relying on a specific figure.
          </p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <a
              href="https://www.rbi.org.in/"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-slate-200 bg-white p-4 transition hover:border-blue-300 hover:shadow-sm"
            >
              <p className="font-bold text-blue-800">
                Reserve Bank Of India
              </p>
              <p className="mt-1 text-sm text-slate-600">
                Official policy announcements and current rates.
              </p>
            </a>
            <a
              href="https://ies.gov.in/arthapedia/concept/policy-rate"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-slate-200 bg-white p-4 transition hover:border-blue-300 hover:shadow-sm"
            >
              <p className="font-bold text-blue-800">
                Indian Economic Service — Policy Rate
              </p>
              <p className="mt-1 text-sm text-slate-600">
                Explanation of the policy rate and monetary transmission.
              </p>
            </a>
            <a
              href="https://ies.gov.in/arthapedia/concept/repo-rate-and-reverse-repo-rate"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-slate-200 bg-white p-4 transition hover:border-blue-300 hover:shadow-sm"
            >
              <p className="font-bold text-blue-800">
                Repo Rate And Reverse Repo Rate
              </p>
              <p className="mt-1 text-sm text-slate-600">
                Definitions and liquidity operations.
              </p>
            </a>
            <a
              href="https://systemhealth.rbi.org.in/Scripts/FS_Overview2752.aspx.htm"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-slate-200 bg-white p-4 transition hover:border-blue-300 hover:shadow-sm"
            >
              <p className="font-bold text-blue-800">
                RBI — Monetary Policy Framework
              </p>
              <p className="mt-1 text-sm text-slate-600">
                Monetary Policy Committee and policy instruments.
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* Internal links */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Continue Learning"
          title="Explore Related Monetary Policy Topics"
          description="Build a complete understanding of how monetary policy works in India."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "What Is Monetary Policy?",
              href: "/economics/monetary-policy",
              desc: "Understand the meaning, objectives and role of monetary policy.",
            },
            {
              title: "Expansionary Monetary Policy",
              href: "/economics/monetary-policy/expansionary-monetary-policy",
              desc: "Learn how easier monetary conditions can support demand and growth.",
            },
            {
              title: "Contractionary Monetary Policy",
              href: "/economics/monetary-policy/contractionary-monetary-policy",
              desc: "Understand how tighter monetary conditions may control inflation.",
            },
          ].map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-blue-300 hover:shadow-md"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                <Coins size={21} />
              </div>
              <h3 className="font-bold text-slate-950 group-hover:text-blue-800">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {item.desc}
              </p>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-blue-700">
                Read More <ArrowRight size={16} />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs leading-5 text-slate-500">
            Educational content only. This page explains general economic
            mechanisms and does not predict future RBI decisions or provide
            individual loan, investment or financial advice.
          </p>
        </div>
      </section>
    </main>
  );
}
