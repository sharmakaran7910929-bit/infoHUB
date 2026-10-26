
import Link from "next/link";
import {
  ArrowRight,
  Landmark,
  Wallet,
  ReceiptText,
  BriefcaseBusiness,
  TrendingUp,
  TrendingDown,
  Scale,
  ShieldCheck,
  Users,
  BadgeIndianRupee,
  Building2,
  CircleHelp,
  CheckCircle2,
  Target,
  GraduationCap,
  Hospital,
  Route,
  School,
  Banknote,
  ChartNoAxesCombined,
  CircleAlert,
  Lightbulb,
  HandCoins,
  Factory,
  ShoppingCart,
  House,
} from "lucide-react";
import AdSlot from "../../../../components/AdSlot";

export const metadata = {
  title:
    "What Is Fiscal Policy? Meaning, Objectives, Examples & Importance | PriceTag HUB",
  description:
    "Understand fiscal policy with practical Indian examples. Learn its meaning, objectives, tools, effects on employment, inflation and economic growth, plus its advantages and limitations.",
  alternates: {
    canonical:
      "https://www.pricetag.co.in/economics/fiscal-policy/what-is-fiscal-policy",
  },
};

const objectives = [
  {
    title: "Promote Economic Growth",
    description:
      "Investment in transport, energy, digital infrastructure and public facilities can improve productivity and support economic activity over time.",
    example:
      "Building a highway may reduce transport time and help businesses move goods.",
    icon: TrendingUp,
    color: "bg-emerald-100 text-emerald-700",
  },
  {
    title: "Create Employment",
    description:
      "Government projects and programmes can create direct jobs and increase demand for workers, materials and services in connected industries.",
    example:
      "A public construction project can employ engineers, drivers, labourers and suppliers.",
    icon: BriefcaseBusiness,
    color: "bg-blue-100 text-blue-700",
  },
  {
    title: "Maintain Price Stability",
    description:
      "Fiscal decisions influence total demand in the economy. They can help address excessive demand, although they cannot directly solve every cause of inflation.",
    example:
      "A government may moderate broad demand when the economy is operating beyond sustainable capacity.",
    icon: Scale,
    color: "bg-amber-100 text-amber-800",
  },
  {
    title: "Reduce Economic Inequality",
    description:
      "Taxes, transfers and public services can redistribute resources and improve access to essential opportunities.",
    example:
      "Targeted assistance can help eligible low-income households afford essential needs.",
    icon: Users,
    color: "bg-violet-100 text-violet-700",
  },
  {
    title: "Support The Economy During Slowdowns",
    description:
      "When private spending and investment weaken, temporary fiscal support can help maintain demand and limit the depth of an economic downturn.",
    example:
      "Accelerating useful public projects may support employment while private investment is weak.",
    icon: ShieldCheck,
    color: "bg-cyan-100 text-cyan-800",
  },
  {
    title: "Provide Essential Public Services",
    description:
      "Public expenditure helps fund services and facilities that households and businesses depend on, including healthcare, education and sanitation.",
    example:
      "Government funding can support public hospitals, schools and drinking-water systems.",
    icon: Hospital,
    color: "bg-rose-100 text-rose-700",
  },
];

const relatedTopics = [
  {
    title: "Expansionary Fiscal Policy",
    description:
      "Understand how higher spending or lower taxes can support economic activity.",
    href: "/economics/fiscal-policy/expansionary-fiscal-policy",
    icon: TrendingUp,
    color: "bg-emerald-100 text-emerald-700",
  },
  {
    title: "Contractionary Fiscal Policy",
    description:
      "Explore fiscal measures used to moderate excessive aggregate demand.",
    href: "/economics/fiscal-policy/contractionary-fiscal-policy",
    icon: TrendingDown,
    color: "bg-amber-100 text-amber-800",
  },
  {
    title: "Tools Of Fiscal Policy",
    description:
      "Learn about taxes, government expenditure, transfers and borrowing.",
    href: "/economics/fiscal-policy/tools-of-fiscal-policy",
    icon: Wallet,
    color: "bg-violet-100 text-violet-700",
  },
];

export default function WhatIsFiscalPolicyPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* HERO */}
      <section className="border-b border-blue-100 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-3 py-1.5 text-sm font-bold text-blue-800">
                <Landmark size={16} />
                Economics · Government Policy
              </div>

              <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
                What Is Fiscal Policy?
              </h1>

              <p className="mt-5 text-base leading-8 text-slate-700 sm:text-lg">
                Why does the government collect taxes, build highways, fund
                hospitals and provide financial assistance to eligible
                households? These decisions affect more than the government
                budget. They can influence jobs, business activity, household
                income and the pace of economic growth.
              </p>

              <p className="mt-4 leading-7 text-slate-600">
                Fiscal policy helps explain how governments use public
                expenditure and taxation to influence economic conditions
                and pursue public objectives.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="#meaning"
                  className="inline-flex items-center gap-2 rounded-xl bg-blue-700 px-5 py-3 font-bold text-white transition hover:bg-blue-800"
                >
                  Understand The Meaning
                  <ArrowRight size={18} />
                </a>
                <a
                  href="#objectives"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 font-bold text-slate-800 transition hover:border-blue-400 hover:bg-blue-50"
                >
                  Explore Its Objectives
                </a>
              </div>

              <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-600">
                <span className="inline-flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-emerald-600" />
                  Practical Examples
                </span>
                <span className="inline-flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-emerald-600" />
                  Indian Context
                </span>
                <span className="inline-flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-emerald-600" />
                  Clear Explanations
                </span>
              </div>
            </div>

            {/* FISCAL POLICY OVERVIEW */}
            <div className="rounded-3xl border border-blue-100 bg-white p-5 shadow-sm sm:p-7">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-blue-100 p-3 text-blue-800">
                  <Landmark size={29} />
                </div>
                <div>
                  <h2 className="text-lg font-bold">
                    How Fiscal Policy Works
                  </h2>
                  <p className="text-sm text-slate-500">
                    Budget Decisions And Economic Outcomes
                  </p>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="rounded-2xl bg-blue-50 p-4">
                  <Wallet size={25} className="text-blue-700" />
                  <h3 className="mt-3 font-bold">Public Spending</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Infrastructure, education, healthcare and public
                    programmes.
                  </p>
                </div>
                <div className="rounded-2xl bg-indigo-50 p-4">
                  <ReceiptText size={25} className="text-indigo-700" />
                  <h3 className="mt-3 font-bold">Taxation</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Taxes that raise revenue and influence disposable income.
                  </p>
                </div>
              </div>

              <div className="my-4 flex justify-center">
                <ArrowRight size={24} className="rotate-90 text-blue-500" />
              </div>

              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
                <div className="flex items-center gap-3">
                  <ChartNoAxesCombined
                    size={27}
                    className="text-emerald-700"
                  />
                  <div>
                    <h3 className="font-bold text-emerald-900">
                      Potential Economic Effects
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-emerald-900/80">
                      Demand, employment, investment, growth and distribution
                      of income.
                    </p>
                  </div>
                </div>
              </div>

              <p className="mt-4 text-xs leading-5 text-slate-500">
                Outcomes are not automatic. They depend on timing, funding,
                policy design, implementation and economic conditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MEANING */}
      <section
        id="meaning"
        className="mx-auto max-w-6xl scroll-mt-8 px-5 py-14 sm:px-8 sm:py-16"
      >
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-widest text-blue-700">
            01 · The Basic Concept
          </p>
          <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
            Fiscal Policy Meaning And Definition
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-700">
            Fiscal policy is the use of government spending, taxation and
            related budget decisions to influence economic activity and
            achieve public objectives. Governments use fiscal policy to fund
            public services, invest in development, affect aggregate demand
            and respond to changes in the economy.
          </p>

          <p className="mt-4 leading-8 text-slate-700">
            For example, increasing public investment may create demand for
            construction materials and workers. Changing personal taxes can
            affect how much disposable income households have available to
            spend or save. Reducing or increasing particular forms of
            government support can also influence households and businesses.
          </p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          <article className="rounded-2xl border border-slate-200 p-5">
            <div className="inline-flex rounded-xl bg-blue-100 p-3 text-blue-700">
              <Wallet size={24} />
            </div>
            <h3 className="mt-4 text-lg font-bold">
              Government Expenditure
            </h3>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              Money used for public services, infrastructure, purchases,
              transfers and other government responsibilities.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 p-5">
            <div className="inline-flex rounded-xl bg-violet-100 p-3 text-violet-700">
              <ReceiptText size={24} />
            </div>
            <h3 className="mt-4 text-lg font-bold">
              Taxation And Revenue
            </h3>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              Taxes and other receipts help finance government activities
              and can influence the incentives facing households and firms.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 p-5">
            <div className="inline-flex rounded-xl bg-emerald-100 p-3 text-emerald-700">
              <Target size={24} />
            </div>
            <h3 className="mt-4 text-lg font-bold">
              Budget Choices
            </h3>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              Governments decide which activities to prioritise, how to
              finance spending and how to manage revenue and borrowing.
            </p>
          </article>
        </div>

        <div className="mt-8 rounded-2xl border-l-4 border-blue-600 bg-blue-50 p-5 sm:p-6">
          <div className="flex items-start gap-3">
            <Lightbulb size={24} className="mt-1 shrink-0 text-blue-700" />
            <div>
              <h3 className="text-lg font-bold">
                A Simple Way To Remember It
              </h3>
              <p className="mt-2 leading-7 text-slate-700">
                Fiscal policy concerns the government&apos;s choices about
                raising revenue, spending public money and financing the
                difference between the two. These choices can affect the
                economy, but their results depend on how they are implemented.
              </p>
            </div>
          </div>
        </div>
      </section>
<AdSlot />
      {/* PRACTICAL EXAMPLE */}
      <section className="border-y border-blue-100 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16">
          <div className="grid gap-9 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-blue-700">
                02 · Real-Life Application
              </p>
              <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
                How A Highway Project Can Affect The Economy
              </h2>
              <p className="mt-4 leading-8 text-slate-700">
                Imagine the government approves a road project connecting
                several towns with a major market. The project is a useful
                way to see how a budget decision can reach workers,
                businesses and consumers.
              </p>

              <div className="mt-6 rounded-2xl border border-blue-200 bg-white p-5">
                <div className="flex items-start gap-3">
                  <Route size={25} className="mt-1 text-blue-700" />
                  <div>
                    <h3 className="font-bold">The Starting Decision</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      The government allocates funds to build or improve
                      public infrastructure. That allocation is a fiscal
                      decision.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
              <div className="space-y-5">
                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                    <Building2 size={23} />
                  </div>
                  <div>
                    <h3 className="font-bold">
                      Step 1: Contracts And Purchases
                    </h3>
                    <p className="mt-1 text-sm leading-7 text-slate-600">
                      Contractors buy cement, steel, fuel and equipment.
                      Suppliers may receive additional orders.
                    </p>
                  </div>
                </div>

                <div className="ml-5 h-5 border-l-2 border-dashed border-blue-200" />

                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                    <BriefcaseBusiness size={23} />
                  </div>
                  <div>
                    <h3 className="font-bold">
                      Step 2: Jobs And Household Income
                    </h3>
                    <p className="mt-1 text-sm leading-7 text-slate-600">
                      Workers may earn wages from construction and related
                      activities. Some of that income may be spent locally.
                    </p>
                  </div>
                </div>

                <div className="ml-5 h-5 border-l-2 border-dashed border-blue-200" />

                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-100 text-violet-700">
                    <ShoppingCart size={23} />
                  </div>
                  <div>
                    <h3 className="font-bold">
                      Step 3: Local Business Activity
                    </h3>
                    <p className="mt-1 text-sm leading-7 text-slate-600">
                      Nearby shops, food vendors and service providers may
                      benefit if workers and suppliers spend more locally.
                    </p>
                  </div>
                </div>

                <div className="ml-5 h-5 border-l-2 border-dashed border-blue-200" />

                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-800">
                    <ChartNoAxesCombined size={23} />
                  </div>
                  <div>
                    <h3 className="font-bold">
                      Step 4: Possible Longer-Term Benefits
                    </h3>
                    <p className="mt-1 text-sm leading-7 text-slate-600">
                      Once completed, a useful road may reduce travel time
                      and transport costs, helping businesses connect with
                      customers and markets.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-xl bg-amber-50 p-4">
                <p className="text-sm leading-7 text-amber-950">
                  <strong>Important:</strong> These effects are possible,
                  not guaranteed. A poorly planned project, delays, cost
                  overruns or inefficient spending can reduce the benefits.
                  How the project is financed also matters.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OBJECTIVES */}
      <section
        id="objectives"
        className="mx-auto max-w-6xl scroll-mt-8 px-5 py-14 sm:px-8 sm:py-16"
      >
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-widest text-blue-700">
            03 · Why It Matters
          </p>
          <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
            Main Objectives Of Fiscal Policy
          </h2>
          <p className="mt-4 leading-8 text-slate-600">
            Governments do not make budget decisions for just one reason.
            They may want to strengthen growth, create employment, provide
            essential services or support households. At times, some
            objectives can conflict, so policy choices involve trade-offs.
          </p>
        </div>

        <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {objectives.map((objective) => {
            const Icon = objective.icon;

            return (
              <article
                key={objective.title}
                className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-md sm:p-6"
              >
                <div className={`inline-flex rounded-xl p-3 ${objective.color}`}>
                  <Icon size={25} />
                </div>
                <h3 className="mt-4 text-lg font-bold">
                  {objective.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {objective.description}
                </p>
                <div className="mt-4 rounded-xl bg-slate-50 p-3">
                  <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
                    Example
                  </p>
                  <p className="mt-1 text-sm leading-6 text-slate-700">
                    {objective.example}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* HOW IT CAN CHANGE WITH CONDITIONS */}
      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-700">
              04 · Policy In Practice
            </p>
            <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
              Fiscal Policy Can Change With Economic Conditions
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              The same fiscal measure may have different effects depending
              on whether businesses are struggling, demand is strong or
              the economy faces supply constraints.
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <article className="rounded-2xl border border-emerald-200 bg-white p-5 sm:p-6">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-emerald-100 p-3 text-emerald-700">
                  <TrendingUp size={25} />
                </div>
                <div>
                  <p className="text-sm font-bold text-emerald-700">
                    When Demand Is Weak
                  </p>
                  <h3 className="text-xl font-bold">
                    Supporting Economic Activity
                  </h3>
                </div>
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                If households and businesses cut spending during a slowdown,
                the government may increase selected spending or reduce
                certain taxes to support demand.
              </p>
              <Link
                href="/economics/fiscal-policy/expansionary-fiscal-policy"
                className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-emerald-800 hover:underline"
              >
                Explore Expansionary Fiscal Policy
                <ArrowRight size={16} />
              </Link>
            </article>

            <article className="rounded-2xl border border-amber-200 bg-white p-5 sm:p-6">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-amber-100 p-3 text-amber-800">
                  <TrendingDown size={25} />
                </div>
                <div>
                  <p className="text-sm font-bold text-amber-800">
                    When Demand Is Excessive
                  </p>
                  <h3 className="text-xl font-bold">
                    Moderating Demand
                  </h3>
                </div>
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                When total demand is persistently stronger than the economy
                can sustainably supply, the government may consider
                moderating spending growth or raising selected taxes.
              </p>
              <Link
                href="/economics/fiscal-policy/contractionary-fiscal-policy"
                className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-amber-800 hover:underline"
              >
                Explore Contractionary Fiscal Policy
                <ArrowRight size={16} />
              </Link>
            </article>
          </div>
        </div>
      </section>
<AdSlot />
      {/* INDIA */}
      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-blue-700">
              05 · India And The Union Budget
            </p>
            <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
              How Fiscal Policy Affects India
            </h2>
            <p className="mt-4 leading-8 text-slate-700">
              The Union Budget presents the central government&apos;s planned
              receipts and expenditure. Its choices influence public
              investment, services, transfers and the amount the government
              needs to borrow.
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              State governments also make fiscal decisions about areas such
              as health, education, roads and local infrastructure. Together,
              these decisions affect how public resources are raised and used
              across the economy.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <article className="rounded-2xl border border-slate-200 p-5">
              <div className="rounded-xl bg-blue-100 p-3 text-blue-700 w-fit">
                <Route size={24} />
              </div>
              <h3 className="mt-4 font-bold">Infrastructure</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Public investment in roads, railways and other facilities
                can improve connectivity and productive capacity.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 p-5">
              <div className="rounded-xl bg-violet-100 p-3 text-violet-700 w-fit">
                <School size={24} />
              </div>
              <h3 className="mt-4 font-bold">Education And Healthcare</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Public funding supports services that can improve access
                and long-term human development.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 p-5">
              <div className="rounded-xl bg-emerald-100 p-3 text-emerald-700 w-fit">
                <HandCoins size={24} />
              </div>
              <h3 className="mt-4 font-bold">Welfare And Transfers</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Eligible households may receive support through public
                programmes designed for specific needs.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 p-5">
              <div className="rounded-xl bg-amber-100 p-3 text-amber-800 w-fit">
                <Banknote size={24} />
              </div>
              <h3 className="mt-4 font-bold">Revenue And Borrowing</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Taxes, non-tax revenue and borrowing help finance public
                expenditure and affect budget balances.
              </p>
            </article>
          </div>
        </div>

      
      </section>

      {/* ADVANTAGES AND LIMITATIONS */}
      <section className="border-y border-blue-100 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-700">
              06 · Balanced Perspective
            </p>
            <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
              Benefits And Limitations Of Fiscal Policy
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              Fiscal policy can make a meaningful difference, but its
              effectiveness depends on sound decisions, available resources
              and the condition of the economy.
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <article className="rounded-2xl border border-emerald-200 bg-white p-5 sm:p-6">
              <div className="flex items-center gap-3">
                <CheckCircle2 size={25} className="text-emerald-700" />
                <h3 className="text-xl font-bold">Potential Benefits</h3>
              </div>
              <ul className="mt-5 space-y-4 text-sm leading-7 text-slate-700">
                <li className="flex gap-3">
                  <CheckCircle2
                    size={18}
                    className="mt-1 shrink-0 text-emerald-700"
                  />
                  Supports demand and employment during some downturns.
                </li>
                <li className="flex gap-3">
                  <CheckCircle2
                    size={18}
                    className="mt-1 shrink-0 text-emerald-700"
                  />
                  Finances infrastructure and essential public services.
                </li>
                <li className="flex gap-3">
                  <CheckCircle2
                    size={18}
                    className="mt-1 shrink-0 text-emerald-700"
                  />
                  Can improve access to services and reduce hardship.
                </li>
                <li className="flex gap-3">
                  <CheckCircle2
                    size={18}
                    className="mt-1 shrink-0 text-emerald-700"
                  />
                  Can help stabilise economic activity when appropriately designed.
                </li>
              </ul>
            </article>

            <article className="rounded-2xl border border-amber-200 bg-white p-5 sm:p-6">
              <div className="flex items-center gap-3">
                <CircleAlert size={25} className="text-amber-700" />
                <h3 className="text-xl font-bold">Possible Limitations</h3>
              </div>
              <ul className="mt-5 space-y-4 text-sm leading-7 text-slate-700">
                <li className="flex gap-3">
                  <CircleAlert
                    size={18}
                    className="mt-1 shrink-0 text-amber-700"
                  />
                  Poorly targeted spending may deliver limited benefits.
                </li>
                <li className="flex gap-3">
                  <CircleAlert
                    size={18}
                    className="mt-1 shrink-0 text-amber-700"
                  />
                  Large or persistent deficits can raise debt and interest costs.
                </li>
                <li className="flex gap-3">
                  <CircleAlert
                    size={18}
                    className="mt-1 shrink-0 text-amber-700"
                  />
                  Project delays can weaken or postpone the intended effect.
                </li>
                <li className="flex gap-3">
                  <CircleAlert
                    size={18}
                    className="mt-1 shrink-0 text-amber-700"
                  />
                  Broad demand support may add to inflation when supply is constrained.
                </li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* FISCAL VS MONETARY POLICY */}
      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-widest text-blue-700">
            07 · Know The Difference
          </p>
          <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
            Fiscal Policy Vs Monetary Policy
          </h2>
          <p className="mt-4 leading-7 text-slate-600">
            Both can influence economic activity, but they use different
            decision-making institutions and policy instruments.
          </p>
        </div>

        <div className="mt-7 overflow-x-auto rounded-2xl border border-slate-200">
          <table className="w-full min-w-[520px] text-left text-sm">
            <thead className="bg-blue-50">
              <tr>
                <th className="p-4 font-bold">Feature</th>
                <th className="p-4 font-bold">Fiscal Policy</th>
                <th className="p-4 font-bold">Monetary Policy</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              <tr>
                <td className="p-4 font-bold">Main Decision-Maker</td>
                <td className="p-4 leading-6 text-slate-600">
                  Government and legislature through budgetary processes.
                </td>
                <td className="p-4 leading-6 text-slate-600">
                  Central bank; in India, the RBI conducts monetary policy.
                </td>
              </tr>
              <tr>
                <td className="p-4 font-bold">Main Instruments</td>
                <td className="p-4 leading-6 text-slate-600">
                  Government spending, taxation and borrowing.
                </td>
                <td className="p-4 leading-6 text-slate-600">
                  Policy rates and other monetary-policy tools.
                </td>
              </tr>
              <tr>
                <td className="p-4 font-bold">Example</td>
                <td className="p-4 leading-6 text-slate-600">
                  Funding a road project or changing a tax rate.
                </td>
                <td className="p-4 leading-6 text-slate-600">
                  Changing the policy repo rate.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <Link
          href="/economics/monetary-policy"
          className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-blue-700 hover:underline"
        >
          Explore Monetary Policy
          <ArrowRight size={17} />
        </Link>
      </section>
<AdSlot />
      {/* FAQ */}
      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-700">
              08 · Common Questions
            </p>
            <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
              Frequently Asked Questions About Fiscal Policy
            </h2>
          </div>

          <div className="mt-7 space-y-4">
            <article className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
              <h3 className="font-bold">
                What Are The Main Components Of Fiscal Policy?
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                The main components include government expenditure and
                taxation. Budget deficits, surpluses, transfers and borrowing
                are also important parts of fiscal decisions and their
                financing.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
              <h3 className="font-bold">
                Who Decides Fiscal Policy In India?
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                The Union Government proposes its budget and fiscal measures,
                which go through the relevant parliamentary process. State
                governments also make fiscal decisions within their
                responsibilities and legal frameworks.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
              <h3 className="font-bold">
                Is Fiscal Policy Only About Increasing Government Spending?
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                No. Fiscal policy can involve increasing or reducing
                expenditure, changing taxes, adjusting transfers and making
                decisions about borrowing. The appropriate approach depends
                on the government&apos;s objectives and economic conditions.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
              <h3 className="font-bold">
                Can Fiscal Policy Reduce Inflation?
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                It can help reduce inflationary pressure when excessive
                aggregate demand is an important cause. However, inflation
                caused by supply disruptions or higher input costs may require
                different or complementary responses.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
              <h3 className="font-bold">
                What Is The Difference Between Fiscal Policy And A Budget?
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                A budget sets out planned revenue, expenditure and financing
                for a period. Fiscal policy is the broader use of those
                decisions to influence economic conditions and pursue public
                objectives.
              </p>
            </article>
          </div>
        </div>
      </section>

     
    </main>
  );
}
