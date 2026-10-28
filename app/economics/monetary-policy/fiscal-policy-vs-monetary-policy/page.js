
import Link from "next/link";
import {
  Landmark,
  Banknote,
  Wallet,
  TrendingUp,
  TrendingDown,
  BriefcaseBusiness,
  ShoppingCart,
  Building2,
  GraduationCap,
  Wheat,
  Factory,
  Home,
  ArrowRight,
  CheckCircle2,
  CircleHelp,
  Scale,
  Target,
  Lightbulb,
  Calculator,
  Users,
  Coins,
  ChartNoAxesCombined,
  HandCoins,
  ShieldCheck,
  Clock,
} from "lucide-react";
import AdSlot from "../../../../components/AdSlot";

export const metadata = {
  title:
    "Fiscal Policy Vs Monetary Policy: Meaning, Differences & Examples | PriceTag HUB",
  description:
    "Understand fiscal policy vs monetary policy with detailed differences, Indian examples, tools, effects on inflation, jobs, loans, taxes, government spending and economic growth.",
  alternates: {
    canonical:
      "https://www.pricetag.co.in/economics/fiscal-policy-vs-monetary-policy",
  },
};

const differences = [
  {
    basis: "Meaning",
    fiscal:
      "Government decisions about taxation, public expenditure, subsidies and borrowing.",
    monetary:
      "Central bank decisions that influence interest rates, credit conditions and liquidity.",
  },
  {
    basis: "Main authority in India",
    fiscal:
      "Government of India, especially the Ministry of Finance, with budgetary decisions subject to Parliament.",
    monetary:
      "Reserve Bank of India (RBI), with policy-rate decisions made by the Monetary Policy Committee (MPC).",
  },
  {
    basis: "Main purpose",
    fiscal:
      "Raise public revenue, fund services, develop infrastructure, support employment and influence economic activity.",
    monetary:
      "Maintain price stability while keeping economic growth in view, and influence the availability and cost of credit.",
  },
  {
    basis: "Major tools",
    fiscal:
      "Taxes, government spending, subsidies, transfers and public borrowing.",
    monetary:
      "Policy repo rate, liquidity operations, reserve requirements and open market operations.",
  },
  {
    basis: "How it reaches people",
    fiscal:
      "Through taxes, public services, government projects, welfare schemes and transfers.",
    monetary:
      "Through bank lending rates, deposit rates, credit availability and financial conditions.",
  },
  {
    basis: "Impact on a household",
    fiscal:
      "May change disposable income through taxes, benefits, subsidies and public services.",
    monetary:
      "May change the cost of borrowing and returns on deposits, depending on how market rates respond.",
  },
  {
    basis: "Impact on businesses",
    fiscal:
      "Can change tax costs, government orders, infrastructure access and investment incentives.",
    monetary:
      "Can change borrowing costs, working-capital costs and the willingness of customers to borrow or spend.",
  },
  {
    basis: "Impact on inflation",
    fiscal:
      "Can influence demand through public spending, taxes and transfers; effects depend on how money is raised and spent.",
    monetary:
      "Can influence demand and inflation by changing financial conditions and the cost of credit.",
  },
  {
    basis: "Typical announcement",
    fiscal:
      "Union Budget, Finance Acts, tax notifications and government expenditure decisions.",
    monetary:
      "RBI monetary policy resolutions and related liquidity measures.",
  },
  {
    basis: "Speed of impact",
    fiscal:
      "Some measures, such as transfers or tax changes, can act quickly; infrastructure projects may take years.",
    monetary:
      "The policy rate can change on a decision date, but its full effects usually take time to spread through the economy.",
  },
  {
    basis: "Main constraints",
    fiscal:
      "Revenue, borrowing costs, fiscal sustainability, implementation capacity and legislative processes.",
    monetary:
      "Inflation outlook, financial conditions, policy transmission, credit demand and economic risks.",
  },
];

const scenarios = [
  {
    title: "Inflation Is Too High",
    icon: TrendingDown,
    color: "rose",
    fiscal:
      "The government could reduce or retarget some demand-supporting expenditure, adjust selected taxes, or improve supply through transport, storage and production measures. The right choice depends on what is causing inflation.",
    monetary:
      "The RBI could raise the repo rate or maintain tighter financial conditions to moderate credit growth and demand, if the inflation outlook warrants it.",
    takeaway:
      "The government can affect demand and supply through its budget; the RBI influences credit and financial conditions. Neither can instantly produce more vegetables, oil or electricity.",
  },
  {
    title: "Economic Growth Is Weak",
    icon: TrendingUp,
    color: "emerald",
    fiscal:
      "The government could bring forward productive infrastructure spending, provide targeted support, or adjust taxes to encourage investment and consumption.",
    monetary:
      "The RBI could reduce the repo rate or ease liquidity conditions if inflation and other risks allow. Lower policy rates do not guarantee that every bank will lower every loan rate.",
    takeaway:
      "Fiscal measures can directly fund projects or transfers. Monetary easing aims to make financial conditions more supportive.",
  },
  {
    title: "Unemployment Is Rising",
    icon: BriefcaseBusiness,
    color: "blue",
    fiscal:
      "Public infrastructure projects, skill programmes and targeted employment support can create jobs directly or increase demand for workers.",
    monetary:
      "Easier credit conditions may help firms finance expansion, but businesses will borrow and hire only if they expect enough demand and see viable opportunities.",
    takeaway:
      "Government spending may create jobs more directly in a chosen programme; monetary policy usually supports employment indirectly.",
  },
];

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mx-auto mb-8 max-w-3xl text-center">
      {eyebrow && (
        <p className="mb-2 text-sm font-bold uppercase tracking-wider text-blue-700">
          {eyebrow}
        </p>
      )}
      <h2 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 leading-7 text-slate-600">{description}</p>
      )}
    </div>
  );
}

function PolicyCard({
  icon: Icon,
  label,
  title,
  description,
  points,
  tone = "blue",
}) {
  const tones = {
    blue: "border-blue-200 bg-blue-50 text-blue-800",
    green: "border-emerald-200 bg-emerald-50 text-emerald-800",
    violet: "border-violet-200 bg-violet-50 text-violet-800",
    amber: "border-amber-200 bg-amber-50 text-amber-800",
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
      <div
        className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl border ${tones[tone]}`}
      >
        <Icon size={25} />
      </div>
      <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
        {label}
      </p>
      <h3 className="mt-2 text-xl font-bold text-slate-950">{title}</h3>
      <p className="mt-3 leading-7 text-slate-600">{description}</p>
      <ul className="mt-5 space-y-3">
        {points.map((point) => (
          <li key={point} className="flex gap-2 text-sm leading-6 text-slate-700">
            <CheckCircle2
              size={18}
              className="mt-1 shrink-0 text-emerald-600"
            />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ExampleBox({ title, children }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 sm:p-5">
      <h4 className="font-bold text-slate-950">{title}</h4>
      <div className="mt-2 text-sm leading-7 text-slate-700">{children}</div>
    </div>
  );
}

export default function FiscalPolicyVsMonetaryPolicyPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <article>
        {/* Hero */}
        <section className="overflow-hidden border-b border-blue-100 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
          <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
            <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
              <div>
                <p className="mb-4 text-sm font-bold uppercase tracking-widest text-blue-700">
                  Economics · Government · RBI
                </p>
                <h1 className="text-3xl font-bold leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
                  Fiscal Policy Vs Monetary Policy
                </h1>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-700">
                  Two powerful ways to influence the economy—but they work
                  through different institutions and different mechanisms.
                  Understand their meaning, tools, effects and real-life
                  examples in India.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {["Meaning", "Key Differences", "Indian Examples", "Inflation & Growth"].map(
                    (item) => (
                      <span
                        key={item}
                        className="rounded-full border border-blue-200 bg-white px-3 py-1.5 text-sm font-bold text-blue-800"
                      >
                        {item}
                      </span>
                    )
                  )}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-emerald-200 bg-white p-5 shadow-sm">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-800">
                    <Landmark size={27} />
                  </div>
                  <p className="text-sm font-bold uppercase tracking-wide text-emerald-800">
                    Fiscal Policy
                  </p>
                  <p className="mt-2 text-lg font-bold text-slate-950">
                    Government
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Taxes, spending and public borrowing.
                  </p>
                </div>
                <div className="rounded-2xl border border-blue-200 bg-white p-5 shadow-sm">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-800">
                    <Banknote size={27} />
                  </div>
                  <p className="text-sm font-bold uppercase tracking-wide text-blue-800">
                    Monetary Policy
                  </p>
                  <p className="mt-2 text-lg font-bold text-slate-950">RBI</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Interest rates, liquidity and credit conditions.
                  </p>
                </div>
                <div className="col-span-2 rounded-xl border border-slate-200 bg-white/80 p-4 text-center">
                  <p className="text-sm font-bold text-slate-800">
                    Shared economic outcomes
                  </p>
                  <div className="mt-3 grid grid-cols-3 gap-2 text-xs font-bold text-slate-600 sm:text-sm">
                    <span className="rounded-lg bg-slate-100 p-2">Inflation</span>
                    <span className="rounded-lg bg-slate-100 p-2">Employment</span>
                    <span className="rounded-lg bg-slate-100 p-2">Growth</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick answer */}
        <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <SectionHeading
            eyebrow="The Core Difference"
            title="What Is The Difference In Simple Words?"
            description="Think of fiscal policy as the government's budget decisions and monetary policy as the central bank's management of money and credit conditions."
          />
          <div className="grid gap-5 md:grid-cols-2">
            <PolicyCard
              icon={Landmark}
              label="Public Finance"
              title="Fiscal Policy"
              tone="green"
              description="The government decides how to raise revenue and where to spend it."
              points={[
                "Collect taxes and other revenue.",
                "Spend on roads, railways, healthcare and education.",
                "Provide subsidies, benefits and public services.",
                "Borrow to finance expenditure when revenue is insufficient.",
              ]}
            />
            <PolicyCard
              icon={Banknote}
              label="Money And Credit"
              title="Monetary Policy"
              tone="blue"
              description="The RBI uses monetary policy instruments to influence liquidity, borrowing costs and financial conditions."
              points={[
                "Set the policy repo rate through the MPC.",
                "Manage liquidity in the banking system.",
                "Influence borrowing and saving rates across the economy.",
                "Support price stability while keeping growth in view.",
              ]}
            />
          </div>
          <div className="mt-5 rounded-xl border border-amber-200 bg-amber-50 p-4">
            <p className="flex items-start gap-2 text-sm leading-7 text-amber-950">
              <Lightbulb size={20} className="mt-1 shrink-0" />
              <span>
                <strong>Important:</strong> The government does not set the
                RBI's policy repo rate in its Union Budget. Fiscal policy and
                monetary policy are distinct, although both affect the same
                economy and can influence each other.
              </span>
            </p>
          </div>
        </section>
<AdSlot />
        {/* Deep meaning */}
        <section className="border-y border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:py-16">
            <SectionHeading
              eyebrow="Deep Meaning"
              title="How Does Each Policy Actually Work?"
              description="The difference becomes clearer when you follow the chain from a policy decision to its effect on households and businesses."
            />
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-2xl border border-emerald-200 bg-white p-5 sm:p-6">
                <h3 className="flex items-center gap-2 text-xl font-bold">
                  <Landmark className="text-emerald-700" size={24} />
                  How Fiscal Policy Works
                </h3>
                <div className="mt-5 space-y-3">
                  {[
                    ["1", "Government makes a budget decision", "For example, it allocates money for a highway."],
                    ["2", "Money is collected or borrowed", "Revenue may come from taxes and other receipts; borrowing can also finance a deficit."],
                    ["3", "Spending reaches the economy", "Contractors buy materials, firms hire workers and suppliers receive payments."],
                    ["4", "Income and demand may rise", "Workers and suppliers may spend some of their additional income, supporting other businesses."],
                  ].map(([n, title, body]) => (
                    <div key={n} className="flex gap-3 rounded-xl bg-emerald-50 p-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-700 text-sm font-bold text-white">
                        {n}
                      </div>
                      <div>
                        <p className="font-bold text-slate-950">{title}</p>
                        <p className="mt-1 text-sm leading-6 text-slate-600">{body}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-sm leading-6 text-slate-600">
                  The result depends on the project, timing, funding source,
                  available resources and how much additional activity the
                  spending generates.
                </p>
              </div>

              <div className="rounded-2xl border border-blue-200 bg-white p-5 sm:p-6">
                <h3 className="flex items-center gap-2 text-xl font-bold">
                  <Banknote className="text-blue-700" size={24} />
                  How Monetary Policy Works
                </h3>
                <div className="mt-5 space-y-3">
                  {[
                    ["1", "RBI assesses economic conditions", "It considers inflation, growth, financial conditions and risks."],
                    ["2", "MPC decides the policy stance", "It may raise, reduce or maintain the policy repo rate."],
                    ["3", "Financial conditions may change", "Money-market rates and bank funding costs may respond."],
                    ["4", "Spending and pricing decisions may change", "Borrowers, savers and firms adjust gradually as rates and expectations move."],
                  ].map(([n, title, body]) => (
                    <div key={n} className="flex gap-3 rounded-xl bg-blue-50 p-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-700 text-sm font-bold text-white">
                        {n}
                      </div>
                      <div>
                        <p className="font-bold text-slate-950">{title}</p>
                        <p className="mt-1 text-sm leading-6 text-slate-600">{body}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-sm leading-6 text-slate-600">
                  A policy-rate change does not automatically change every
                  loan or deposit rate by the same amount. Transmission varies
                  across banks, products and borrowers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison table */}
        <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:py-16">
          <SectionHeading
            eyebrow="Detailed Comparison"
            title="Fiscal Policy Vs Monetary Policy: Key Differences"
            description="Use this table to compare their authorities, objectives, tools and effects."
          />
          <div className="overflow-hidden rounded-2xl border border-slate-200">
            <div className="grid grid-cols-[0.8fr_1fr_1fr] bg-slate-900 text-white">
              <div className="p-3 text-sm font-bold sm:p-4">Basis</div>
              <div className="border-l border-white/15 p-3 text-sm font-bold sm:p-4">
                Fiscal Policy
              </div>
              <div className="border-l border-white/15 p-3 text-sm font-bold sm:p-4">
                Monetary Policy
              </div>
            </div>
            {differences.map((item, index) => (
              <div
                key={item.basis}
                className={`grid grid-cols-[0.8fr_1fr_1fr] ${
                  index % 2 === 0 ? "bg-white" : "bg-slate-50"
                } border-t border-slate-200`}
              >
                <div className="p-3 text-xs font-bold text-slate-900 sm:p-4 sm:text-sm">
                  {item.basis}
                </div>
                <div className="border-l border-slate-200 p-3 text-xs leading-6 text-slate-700 sm:p-4 sm:text-sm">
                  {item.fiscal}
                </div>
                <div className="border-l border-slate-200 p-3 text-xs leading-6 text-slate-700 sm:p-4 sm:text-sm">
                  {item.monetary}
                </div>
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs leading-5 text-slate-500">
            Mobile tip: scroll horizontally if the full comparison table does
            not fit your screen.
          </p>
        </section>
<AdSlot />
        {/* Tools */}
        <section className="border-y border-slate-200 bg-blue-50/50">
          <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:py-16">
            <SectionHeading
              eyebrow="Instruments"
              title="Tools Of Fiscal Policy And Monetary Policy"
              description="Each policy uses a different set of levers. The choice of tool matters because different measures can produce different economic effects."
            />
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-emerald-200 bg-white p-5 sm:p-6">
                <h3 className="text-xl font-bold text-slate-950">
                  Fiscal Policy Tools
                </h3>
                <div className="mt-5 space-y-4">
                  <div className="flex gap-3">
                    <Wallet className="mt-1 shrink-0 text-emerald-700" size={22} />
                    <div>
                      <h4 className="font-bold">Taxation</h4>
                      <p className="mt-1 text-sm leading-6 text-slate-600">
                        Income tax, corporate tax and indirect taxes can affect
                        disposable income, business costs and incentives.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Building2 className="mt-1 shrink-0 text-emerald-700" size={22} />
                    <div>
                      <h4 className="font-bold">Government Spending</h4>
                      <p className="mt-1 text-sm leading-6 text-slate-600">
                        Spending on infrastructure, healthcare, education,
                        public administration and services.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <HandCoins className="mt-1 shrink-0 text-emerald-700" size={22} />
                    <div>
                      <h4 className="font-bold">Subsidies And Transfers</h4>
                      <p className="mt-1 text-sm leading-6 text-slate-600">
                        Support for eligible households, farmers or industries
                        can change costs and purchasing power.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Coins className="mt-1 shrink-0 text-emerald-700" size={22} />
                    <div>
                      <h4 className="font-bold">Public Borrowing</h4>
                      <p className="mt-1 text-sm leading-6 text-slate-600">
                        Borrowing can finance expenditure beyond current
                        receipts, but it creates future interest and repayment
                        obligations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-blue-200 bg-white p-5 sm:p-6">
                <h3 className="text-xl font-bold text-slate-950">
                  Monetary Policy Tools
                </h3>
                <div className="mt-5 space-y-4">
                  <div className="flex gap-3">
                    <Banknote className="mt-1 shrink-0 text-blue-700" size={22} />
                    <div>
                      <h4 className="font-bold">Policy Repo Rate</h4>
                      <p className="mt-1 text-sm leading-6 text-slate-600">
                        The RBI's policy rate influences short-term money-market
                        rates and can transmit to borrowing costs.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Scale className="mt-1 shrink-0 text-blue-700" size={22} />
                    <div>
                      <h4 className="font-bold">Reserve Requirements</h4>
                      <p className="mt-1 text-sm leading-6 text-slate-600">
                        CRR and SLR rules affect how banks maintain reserves
                        and eligible liquid assets.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <ChartNoAxesCombined className="mt-1 shrink-0 text-blue-700" size={22} />
                    <div>
                      <h4 className="font-bold">Open Market Operations</h4>
                      <p className="mt-1 text-sm leading-6 text-slate-600">
                        Purchases or sales of government securities can add or
                        absorb liquidity, depending on the operation.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <ShieldCheck className="mt-1 shrink-0 text-blue-700" size={22} />
                    <div>
                      <h4 className="font-bold">Liquidity Operations</h4>
                      <p className="mt-1 text-sm leading-6 text-slate-600">
                        RBI facilities help manage liquidity and keep short-term
                        market rates aligned with its policy stance.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* India examples */}
        <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:py-16">
          <SectionHeading
            eyebrow="Examples From India"
            title="Fiscal Policy Vs Monetary Policy In Real Life"
            description="These hypothetical examples show how a policy decision can affect daily life. They illustrate mechanisms, not a claim about a current government announcement or RBI decision."
          />
          <div className="grid gap-5 md:grid-cols-2">
            <ExampleBox title="Example 1: A New Highway Project">
              Suppose the government allocates ₹1,000 crore to build a
              highway. Contractors may purchase cement, steel, fuel and
              machinery. Workers may earn wages, and transport links may
              improve once the highway opens.

              <p className="mt-3 font-bold text-emerald-800">
                This is fiscal policy because the example starts with a
                government spending decision.
              </p>
            </ExampleBox>
            <ExampleBox title="Example 2: RBI Changes The Repo Rate">
              Suppose the RBI reduces its policy repo rate by 0.25 percentage
              points. Banks' funding conditions and market rates may respond.
              Some borrowers could eventually receive lower rates, depending
              on their loan terms and the bank's pricing.

              <p className="mt-3 font-bold text-blue-800">
                This is monetary policy because the example starts with a
                central-bank interest-rate decision.
              </p>
            </ExampleBox>
            <ExampleBox title="Example 3: Income Tax Relief">
              Suppose the government changes personal income-tax rules so
              that some eligible taxpayers pay less tax. Those households may
              have more disposable income to save or spend. The size of the
              effect depends on eligibility and how people use the extra money.

              <p className="mt-3 font-bold text-emerald-800">
                Tax changes are a fiscal-policy tool.
              </p>
            </ExampleBox>
            <ExampleBox title="Example 4: More Expensive Borrowing">
              Suppose inflation is persistently high and the RBI raises the
              repo rate. Lending rates may rise for some borrowers. A family
              considering a home loan or a company planning an expansion may
              delay borrowing or spend less.

              <p className="mt-3 font-bold text-blue-800">
                This is a possible monetary-policy transmission effect, not an
                automatic or identical change for every loan.
              </p>
            </ExampleBox>
          </div>
        </section>
<AdSlot />
        {/* Effects on people */}
        <section className="border-y border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:py-16">
            <SectionHeading
              eyebrow="Effects On Daily Life"
              title="How Do These Policies Affect Ordinary People?"
              description="The effects are not limited to government offices or banks. They can influence household budgets, business decisions and job opportunities."
            />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: Home,
                  title: "Home Loan Borrowers",
                  text: "Monetary policy may influence floating loan rates. Fiscal policy may affect taxes, housing support or public infrastructure around a home.",
                },
                {
                  icon: ShoppingCart,
                  title: "Consumers",
                  text: "Tax changes can affect disposable income or prices. Monetary policy can influence borrowing, spending and inflation over time.",
                },
                {
                  icon: Users,
                  title: "Workers And Job Seekers",
                  text: "Public projects and employment programmes can create direct opportunities. Monetary conditions can indirectly influence business expansion and hiring.",
                },
                {
                  icon: Factory,
                  title: "Business Owners",
                  text: "Fiscal decisions can affect tax obligations and public contracts. Monetary conditions can affect working-capital finance and investment loans.",
                },
                {
                  icon: Wheat,
                  title: "Farmers",
                  text: "Government support, agricultural infrastructure and subsidies are fiscal channels. Credit conditions can affect the cost and availability of farm finance.",
                },
                {
                  icon: GraduationCap,
                  title: "Students And Families",
                  text: "Government expenditure can fund public education and scholarships. Interest-rate changes may affect education borrowing and wider household finances.",
                },
              ].map(({ icon: Icon, title, text }) => (
                <div
                  key={title}
                  className="rounded-xl border border-slate-200 bg-white p-5"
                >
                  <Icon className="mb-3 text-blue-700" size={25} />
                  <h3 className="font-bold text-slate-950">{title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Economic scenarios */}
        <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:py-16">
          <SectionHeading
            eyebrow="Policy In Action"
            title="What Happens During Inflation, Slow Growth Or Unemployment?"
            description="The same policy is not appropriate in every situation. Policymakers must consider what is causing the problem and the side effects of each response."
          />
          <div className="space-y-5">
            {scenarios.map((scenario) => {
              const Icon = scenario.icon;
              return (
                <div
                  key={scenario.title}
                  className="overflow-hidden rounded-2xl border border-slate-200 bg-white"
                >
                  <div className="flex items-center gap-3 border-b border-slate-200 bg-slate-50 p-4 sm:p-5">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-blue-800 shadow-sm">
                      <Icon size={24} />
                    </div>
                    <h3 className="text-lg font-bold text-slate-950 sm:text-xl">
                      {scenario.title}
                    </h3>
                  </div>
                  <div className="grid gap-4 p-4 sm:p-5 md:grid-cols-2">
                    <div className="rounded-xl bg-emerald-50 p-4">
                      <p className="font-bold text-emerald-900">
                        Fiscal Policy Response
                      </p>
                      <p className="mt-2 text-sm leading-7 text-slate-700">
                        {scenario.fiscal}
                      </p>
                    </div>
                    <div className="rounded-xl bg-blue-50 p-4">
                      <p className="font-bold text-blue-900">
                        Monetary Policy Response
                      </p>
                      <p className="mt-2 text-sm leading-7 text-slate-700">
                        {scenario.monetary}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2 border-t border-slate-200 p-4 sm:px-5">
                    <Lightbulb className="mt-1 shrink-0 text-amber-600" size={19} />
                    <p className="text-sm leading-7 text-slate-700">
                      <strong>What to understand:</strong> {scenario.takeaway}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

       
<section className="border-y border-slate-200 bg-blue-50/50">
  <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:py-16">
    <SectionHeading
      eyebrow="Policy Direction"
      title="Expansionary Vs Contractionary Policy"
      description="Both fiscal policy and monetary policy can support or restrain economic activity, but they use different tools and affect the economy through different channels."
    />

    <div className="grid gap-5 md:grid-cols-2">
      {/* Expansionary Policy */}
      <div className="rounded-2xl border border-emerald-200 bg-white p-5 sm:p-6">
        <div className="flex items-center gap-3">
          <TrendingUp className="text-emerald-700" size={26} />
          <h3 className="text-xl font-bold">
            Expansionary Policy
          </h3>
        </div>

        <p className="mt-3 text-sm leading-7 text-slate-600">
          Usually aims to support demand, investment and economic
          activity during a slowdown.
        </p>

        <div className="mt-4 space-y-3">
          {/* Expansionary Fiscal */}
          <div className="rounded-xl bg-emerald-50 p-4">
            <p className="font-bold text-emerald-900">
              Expansionary Fiscal Policy
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              The government may increase selected public spending,
              reduce certain taxes or provide targeted support to
              encourage economic activity.
            </p>

            <Link
              href="/economics/fiscal-policy/expansionary-fiscal-policy"
              className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-emerald-800 underline decoration-emerald-300 underline-offset-4 hover:text-emerald-950"
            >
              Explore Expansionary Fiscal Policy
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* Expansionary Monetary */}
          <div className="rounded-xl bg-blue-50 p-4">
            <p className="font-bold text-blue-900">
              Expansionary Monetary Policy
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              The central bank may reduce policy rates or ease
              liquidity conditions, when the inflation outlook
              and economic circumstances permit.
            </p>

            <Link
              href="/economics/monetary-policy/expansionary-monetary-policy"
              className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-blue-800 underline decoration-blue-300 underline-offset-4 hover:text-blue-950"
            >
              Explore Expansionary Monetary Policy
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>

      {/* Contractionary Policy */}
      <div className="rounded-2xl border border-rose-200 bg-white p-5 sm:p-6">
        <div className="flex items-center gap-3">
          <TrendingDown className="text-rose-700" size={26} />
          <h3 className="text-xl font-bold">
            Contractionary Policy
          </h3>
        </div>

        <p className="mt-3 text-sm leading-7 text-slate-600">
          Usually aims to moderate excessive demand and reduce
          inflationary pressure when economic conditions warrant it.
        </p>

        <div className="mt-4 space-y-3">
          {/* Contractionary Fiscal */}
          <div className="rounded-xl bg-rose-50 p-4">
            <p className="font-bold text-rose-900">
              Contractionary Fiscal Policy
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              The government may reduce or retarget selected spending,
              increase certain taxes or take other steps to moderate
              demand and manage public finances.
            </p>

            <Link
              href="/economics/fiscal-policy/contractionary-fiscal-policy"
              className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-rose-800 underline decoration-rose-300 underline-offset-4 hover:text-rose-950"
            >
              Explore Contractionary Fiscal Policy
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* Contractionary Monetary */}
          <div className="rounded-xl bg-blue-50 p-4">
            <p className="font-bold text-blue-900">
              Contractionary Monetary Policy
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              The central bank may raise policy rates or tighten
              liquidity conditions to moderate demand and help
              bring inflation under control.
            </p>

            <Link
              href="/economics/monetary-policy/contractionary-monetary-policy"
              className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-blue-800 underline decoration-blue-300 underline-offset-4 hover:text-blue-950"
            >
              Explore Contractionary Monetary Policy
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </div>

    <div className="mt-5 rounded-xl border border-amber-200 bg-amber-50 p-4">
      <p className="text-sm leading-7 text-amber-950">
        <strong>Remember:</strong> These terms describe the intended
        direction of a policy, not a guaranteed outcome. For example,
        infrastructure spending can increase demand in the short term
        and expand productive capacity over time.
      </p>
    </div>
  </div>
</section>


        {/* Coordination */}
        <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:py-16">
          <SectionHeading
            eyebrow="The Bigger Picture"
            title="Why Do Fiscal Policy And Monetary Policy Need To Work Together?"
            description="They are different tools, but they influence overlapping parts of the economy. Their combined effect can be stronger—or more complicated—than either policy alone."
          />
          <div className="grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 p-5">
              <Target className="mb-3 text-blue-700" size={26} />
              <h3 className="font-bold">Shared Goals</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Stable prices, sustainable growth, employment and financial
                stability matter to the economy, even though the institutions
                have different responsibilities.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-5">
              <Clock className="mb-3 text-blue-700" size={26} />
              <h3 className="font-bold">Different Timing</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Tax changes or transfers may affect some households relatively
                quickly. Monetary policy often works gradually as banks,
                borrowers and businesses respond.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-5">
              <Scale className="mb-3 text-blue-700" size={26} />
              <h3 className="font-bold">Trade-Offs</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Strong demand support can help growth but may add to inflationary
                pressure when supply cannot keep up. Tightening demand can help
                inflation but may also slow activity.
              </p>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-indigo-200 bg-indigo-50 p-5 sm:p-6">
            <h3 className="text-lg font-bold text-indigo-950">
              A Simple Coordination Example
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-700">
              Imagine the economy is slowing while inflation is also elevated
              because food or fuel supplies are disrupted. Broad fiscal
              stimulus could support incomes, but it may also increase demand.
              Higher interest rates might moderate demand but cannot directly
              restore a disrupted harvest or oil supply. Policymakers therefore
              need to consider targeted fiscal measures, supply-side action and
              the RBI's assessment of underlying inflation—not just choose one
              policy in isolation.
            </p>
          </div>
        </section>
<AdSlot />
        {/* Limitations */}
        <section className="border-y border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:py-16">
            <SectionHeading
              eyebrow="Limitations"
              title="Why Neither Policy Is A Magic Solution"
              description="Policy decisions can influence the economy, but they cannot control every cause of inflation, growth or employment."
            />
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-slate-200 bg-white p-5">
                <h3 className="font-bold text-slate-950">
                  Limits Of Fiscal Policy
                </h3>
                <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-600">
                  <li>• Public projects may take time to complete.</li>
                  <li>• Poorly targeted spending may have limited benefits.</li>
                  <li>• Persistent borrowing can increase interest obligations.</li>
                  <li>• Tax changes may affect incentives and public revenue.</li>
                  <li>• Supply shortages cannot always be fixed by spending alone.</li>
                </ul>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-5">
                <h3 className="font-bold text-slate-950">
                  Limits Of Monetary Policy
                </h3>
                <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-600">
                  <li>• Rate changes take time to pass through the financial system.</li>
                  <li>• Banks may not change every lending rate equally.</li>
                  <li>• Firms may avoid borrowing when demand is weak.</li>
                  <li>• Higher rates can make debt servicing more expensive.</li>
                  <li>• Interest rates cannot directly produce missing goods or services.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:py-16">
          <SectionHeading
            eyebrow="Common Questions"
            title="FAQs On Fiscal Policy Vs Monetary Policy"
          />
          <div className="space-y-4">
            {[
              [
                "What is the main difference between fiscal and monetary policy?",
                "Fiscal policy uses government taxation, spending and borrowing. Monetary policy uses central-bank instruments to influence interest rates, liquidity and credit conditions.",
              ],
              [
                "Who controls fiscal policy in India?",
                "The Government of India, especially the Ministry of Finance, prepares and implements fiscal measures through the budget and related laws and decisions. Budgetary authority and taxation are also subject to the relevant constitutional and parliamentary processes.",
              ],
              [
                "Who controls monetary policy in India?",
                "The Reserve Bank of India conducts monetary policy. The Monetary Policy Committee decides the policy repo rate under India's monetary policy framework.",
              ],
              [
                "Is the repo rate a fiscal policy tool?",
                "No. The policy repo rate is a monetary policy instrument associated with the RBI, not a government taxation or expenditure tool.",
              ],
              [
                "Can fiscal policy reduce inflation?",
                "It can help in some circumstances. For example, changes to demand-supporting expenditure or targeted supply-side measures may ease pressure. The effect depends on the cause of inflation, the measure chosen and how it is funded.",
              ],
              [
                "Can monetary policy create jobs?",
                "It can support employment indirectly if easier financial conditions encourage borrowing, investment and demand. However, a lower policy rate does not guarantee that firms will invest or hire.",
              ],
              [
                "Which policy is more powerful?",
                "Neither is always more powerful. Fiscal policy can target public spending, taxes and particular groups more directly. Monetary policy can influence economy-wide credit and financial conditions. Their effectiveness depends on the problem and the economic environment.",
              ],
              [
                "What is expansionary fiscal policy?",
                "It generally means using measures such as higher selected government spending or lower selected taxes to support demand and economic activity.",
              ],
              [
                "What is contractionary monetary policy?",
                "It generally means measures such as higher policy interest rates or tighter liquidity conditions intended to moderate demand and inflationary pressure.",
              ],
              [
                "Do fiscal policy and monetary policy affect GDP?",
                "Yes. Fiscal measures can influence government demand, household income and investment; monetary measures can influence credit, consumption and investment. The size and timing of the effects vary.",
              ],
            ].map(([question, answer]) => (
              <details
                key={question}
                className="group rounded-xl border border-slate-200 bg-white p-4 open:border-blue-200 open:bg-blue-50/30 sm:p-5"
              >
                <summary className="flex cursor-pointer list-none items-start gap-3 font-bold text-slate-950">
                  <CircleHelp className="mt-0.5 shrink-0 text-blue-700" size={20} />
                  <span className="flex-1">{question}</span>
                  <span className="text-blue-700 transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="ml-8 mt-3 text-sm leading-7 text-slate-600">
                  {answer}
                </p>
              </details>
            ))}
          </div>
        </section>

        
      </article>
    </main>
  );
}
