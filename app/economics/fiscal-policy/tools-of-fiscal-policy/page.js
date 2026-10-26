
import Link from "next/link";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Banknote,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  Coins,
  Factory,
  GraduationCap,
  HandCoins,
  Landmark,
  Scale,
  ShieldCheck,
  ShoppingCart,
  TrendingDown,
  TrendingUp,
  Wallet,
  Wheat,
  HeartPulse,
  Users,
  Target,
  CircleAlert,
  ReceiptText,
  BadgeIndianRupee,
} from "lucide-react";
import AdSlot from "../../../../components/AdSlot";

export const metadata = {
  title:
    "Tools of Fiscal Policy: Government Spending, Taxes & Borrowing | PriceTag HUB",
  description:
    "Learn the main tools of fiscal policy, how government spending, taxation, borrowing and subsidies affect the economy, and what influences fiscal decisions with practical Indian examples.",
  alternates: {
    canonical:
      "https://www.pricetag.co.in/economics/fiscal-policy/tools-of-fiscal-policy",
  },
};

const tools = [
  {
    number: "01",
    title: "Government Spending",
    icon: Building2,
    color: "blue",
    meaning:
      "Government expenditure on infrastructure, public services, salaries, welfare and development projects.",
    expansionary:
      "Increasing productive spending can create jobs, raise incomes and support demand.",
    contractionary:
      "Reducing or slowing selected expenditure can moderate demand, although excessive cuts may hurt services and growth.",
    example:
      "Building roads and railways creates construction jobs and demand for cement, steel and transport services.",
    impact: "Demand, employment and infrastructure",
  },
  {
    number: "02",
    title: "Taxation",
    icon: ReceiptText,
    color: "indigo",
    meaning:
      "Taxes collected from individuals and businesses, including income tax, corporate tax and GST.",
    expansionary:
      "Tax cuts can leave households with more disposable income and businesses with more funds to invest.",
    contractionary:
      "Tax increases can reduce private spending and help moderate excessive demand, depending on which taxes change.",
    example:
      "A reduction in personal income tax may increase the money some households have available to spend or save.",
    impact: "Disposable income, consumption and investment",
  },
  {
    number: "03",
    title: "Government Borrowing",
    icon: Banknote,
    color: "amber",
    meaning:
      "Raising funds through government securities and other borrowing when revenue is insufficient to cover expenditure.",
    expansionary:
      "Borrowing can help finance additional spending without immediately raising taxes.",
    contractionary:
      "Reducing borrowing needs may help contain debt accumulation, but often requires stronger revenue or lower spending.",
    example:
      "The Indian government can issue dated government securities to help finance its fiscal deficit.",
    impact: "Funding, public debt and interest costs",
  },
  {
    number: "04",
    title: "Subsidies and Transfers",
    icon: HandCoins,
    color: "emerald",
    meaning:
      "Financial support that lowers selected costs or provides income support to eligible people and sectors.",
    expansionary:
      "Transfers can support household purchasing power, while subsidies may lower production or essential living costs.",
    contractionary:
      "Reducing or better targeting selected subsidies can lower expenditure, but poorly designed cuts may harm vulnerable groups.",
    example:
      "Fertiliser subsidies help reduce the input costs paid by eligible farmers.",
    impact: "Household income, production costs and welfare",
  },
  {
    number: "05",
    title: "Public Investment and Procurement",
    icon: Factory,
    color: "sky",
    meaning:
      "Spending on public assets and purchasing goods or services from businesses.",
    expansionary:
      "New infrastructure projects and government contracts can increase orders, employment and productive capacity.",
    contractionary:
      "Postponing lower-priority projects can restrain expenditure, though it may also delay future economic benefits.",
    example:
      "A public hospital project creates demand for construction, equipment, engineering and local services.",
    impact: "Business activity, jobs and future capacity",
  },
];

const factors = [
  {
    icon: TrendingDown,
    title: "Economic Growth",
    text: "When growth weakens, the government may support demand and investment. During an overheating economy, it may choose to restrain demand.",
  },
  {
    icon: Users,
    title: "Unemployment",
    text: "High unemployment can increase pressure for job-creating projects, skill development and support for affected households.",
  },
  {
    icon: ShoppingCart,
    title: "Inflation",
    text: "When demand is contributing to high inflation, the government may limit broad stimulus. Supply-driven inflation can require a different response.",
  },
  {
    icon: Wallet,
    title: "Revenue and Fiscal Deficit",
    text: "Tax collections, expenditure commitments and borrowing costs influence how much fiscal support the government can afford.",
  },
  {
    icon: Scale,
    title: "Income Inequality",
    text: "The government may use progressive taxation, targeted transfers and public services to improve access to income and opportunities.",
  },
  {
    icon: ShieldCheck,
    title: "Emergencies and National Priorities",
    text: "Disasters, health emergencies, defence needs, food security and infrastructure gaps can change spending priorities.",
  },
];

const colorClasses = {
  blue: {
    card: "border-blue-200 bg-blue-50/80",
    icon: "bg-blue-100 text-blue-700",
    label: "text-blue-800",
    example: "bg-white border-blue-100",
  },
  indigo: {
    card: "border-indigo-200 bg-indigo-50/80",
    icon: "bg-indigo-100 text-indigo-700",
    label: "text-indigo-800",
    example: "bg-white border-indigo-100",
  },
  amber: {
    card: "border-amber-200 bg-amber-50/80",
    icon: "bg-amber-100 text-amber-700",
    label: "text-amber-800",
    example: "bg-white border-amber-100",
  },
  emerald: {
    card: "border-emerald-200 bg-emerald-50/80",
    icon: "bg-emerald-100 text-emerald-700",
    label: "text-emerald-800",
    example: "bg-white border-emerald-100",
  },
  sky: {
    card: "border-sky-200 bg-sky-50/80",
    icon: "bg-sky-100 text-sky-700",
    label: "text-sky-800",
    example: "bg-white border-sky-100",
  },
};

export default function ToolsOfFiscalPolicyPage() {
  return (
    <main className="min-h-screen bg-white text-slate-800">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-100">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/90 px-4 py-2 text-sm font-bold text-blue-800">
                <Landmark size={17} />
                Economics · Fiscal Policy
              </div>

              <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Tools Of{" "}
                <span className="bg-gradient-to-r from-blue-700 to-indigo-600 bg-clip-text text-transparent">
                  Fiscal Policy
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                How does a government influence jobs, spending, investment and
                economic growth? It makes choices about public expenditure,
                taxes, borrowing and financial support.
              </p>

              <p className="mt-4 max-w-2xl leading-7 text-slate-600">
                These tools are connected. A tax cut can support household
                spending, while a public infrastructure project can create
                jobs today and improve productive capacity over time.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#main-tools"
                  className="inline-flex items-center gap-2 rounded-xl bg-blue-700 px-5 py-3 font-bold text-white shadow-lg shadow-blue-200 transition hover:bg-blue-800"
                >
                  Explore The Tools <ArrowRight size={18} />
                </a>
                <a
                  href="#government-decisions"
                  className="inline-flex items-center gap-2 rounded-xl border border-blue-200 bg-white px-5 py-3 font-bold text-blue-800 transition hover:bg-blue-50"
                >
                  What Shapes Decisions?
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-blue-100 bg-white/90 p-6 shadow-xl shadow-blue-100/60 sm:p-8">
              <p className="text-sm font-bold uppercase tracking-wider text-blue-700">
                The Basic Mechanism
              </p>
              <h2 className="mt-2 text-2xl font-bold text-slate-950">
                Government Choices Affect The Economy
              </h2>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="rounded-2xl bg-blue-50 p-4">
                  <Landmark className="text-blue-700" size={27} />
                  <p className="mt-3 font-bold">Spending</p>
                  <p className="mt-1 text-sm leading-5 text-slate-600">
                    Public projects and services
                  </p>
                </div>
                <div className="rounded-2xl bg-indigo-50 p-4">
                  <ReceiptText className="text-indigo-700" size={27} />
                  <p className="mt-3 font-bold">Taxation</p>
                  <p className="mt-1 text-sm leading-5 text-slate-600">
                    Revenue and private income
                  </p>
                </div>
                <div className="rounded-2xl bg-emerald-50 p-4">
                  <HandCoins className="text-emerald-700" size={27} />
                  <p className="mt-3 font-bold">Support</p>
                  <p className="mt-1 text-sm leading-5 text-slate-600">
                    Transfers and subsidies
                  </p>
                </div>
                <div className="rounded-2xl bg-amber-50 p-4">
                  <Banknote className="text-amber-700" size={27} />
                  <p className="mt-3 font-bold">Borrowing</p>
                  <p className="mt-1 text-sm leading-5 text-slate-600">
                    Funding gaps and projects
                  </p>
                </div>
              </div>

              <div className="mt-4 rounded-2xl bg-gradient-to-r from-blue-700 to-indigo-700 p-4 text-white">
                <div className="flex items-center gap-3">
                  <TrendingUp size={28} />
                  <div>
                    <p className="font-bold">Possible Economic Effects</p>
                    <p className="mt-1 text-sm text-blue-100">
                      Demand · Jobs · Prices · Growth · Public debt
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE TOOLS */}
      <section
        id="main-tools"
        className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16"
      >
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-blue-700">
            The Main Instruments
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Five Tools Governments Use
          </h2>
          <p className="mt-4 leading-7 text-slate-600">
            The first two — spending and taxation — are the core tools of
            fiscal policy. Borrowing, subsidies, transfers and public
            procurement help finance or deliver the government&apos;s choices.
          </p>
        </div>

        <div className="space-y-6">
          {tools.map((tool) => {
            const Icon = tool.icon;
            const styles = colorClasses[tool.color];

            return (
              <article
                key={tool.number}
                className={`overflow-hidden rounded-3xl border p-5 shadow-sm sm:p-7 ${styles.card}`}
              >
                <div className="grid gap-6 lg:grid-cols-[0.78fr_1.22fr]">
                  <div>
                    <div className="flex items-start gap-4">
                      <div
                        className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${styles.icon}`}
                      >
                        <Icon size={29} />
                      </div>
                      <div>
                        <p className={`text-sm font-bold ${styles.label}`}>
                          TOOL {tool.number}
                        </p>
                        <h3 className="mt-1 text-2xl font-bold text-slate-950">
                          {tool.title}
                        </h3>
                      </div>
                    </div>

                    <p className="mt-5 leading-7 text-slate-700">
                      {tool.meaning}
                    </p>

                    <div className="mt-5 rounded-2xl border p-4 shadow-sm bg-white/90 border-white">
                      <p className={`text-sm font-bold ${styles.label}`}>
                        Example
                      </p>
                      <p className="mt-2 text-sm leading-6 text-slate-700">
                        {tool.example}
                      </p>
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl border border-emerald-200 bg-white p-5">
                      <div className="flex items-center gap-2 text-emerald-800">
                        <ArrowUpRight size={20} />
                        <h4 className="font-bold">Expansionary Direction</h4>
                      </div>
                      <p className="mt-3 text-sm leading-6 text-slate-600">
                        {tool.expansionary}
                      </p>
                    </div>

                    <div className="rounded-2xl border border-orange-200 bg-white p-5">
                      <div className="flex items-center gap-2 text-orange-800">
                        <ArrowDownRight size={20} />
                        <h4 className="font-bold">Restraining Direction</h4>
                      </div>
                      <p className="mt-3 text-sm leading-6 text-slate-600">
                        {tool.contractionary}
                      </p>
                    </div>

                    <div className="rounded-2xl border border-slate-200 bg-white/80 p-4 sm:col-span-2">
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                        Main Channels Of Impact
                      </p>
                      <p className="mt-2 font-bold text-slate-800">
                        {tool.impact}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-7 flex gap-3 rounded-2xl border border-blue-200 bg-blue-50 p-5">
          <CircleAlert className="mt-0.5 shrink-0 text-blue-700" size={23} />
          <p className="text-sm leading-6 text-slate-700">
            <strong>Important:</strong> A tool does not always produce the
            same result. Its impact depends on the size and timing of the
            change, household and business behaviour, available resources,
            supply conditions and the wider economic situation.
          </p>
        </div>
      </section>
<AdSlot />
      {/* FACTORS */}
      <section
        id="government-decisions"
        className="bg-gradient-to-b from-slate-50 to-blue-50/70"
      >
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-700">
              Behind The Budget
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              What Factors Affect Government Fiscal Decisions?
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              Governments cannot choose spending and tax measures in
              isolation. They must assess economic conditions, public needs
              and the cost of financing their plans.
            </p>
          </div>

          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {factors.map((factor) => {
              const Icon = factor.icon;

              return (
                <article
                  key={factor.title}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                    <Icon size={25} />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-slate-950">
                    {factor.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {factor.text}
                  </p>
                </article>
              );
            })}
          </div>

          <div className="mt-8 rounded-3xl bg-gradient-to-r from-blue-800 to-indigo-800 p-6 text-white sm:p-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/15">
                <Target size={30} />
              </div>
              <div>
                <h3 className="text-xl font-bold">
                  One Decision, Several Trade-Offs
                </h3>
                <p className="mt-2 leading-7 text-blue-100">
                  More spending may support jobs and growth, but it also
                  requires funding. Higher taxes may raise revenue, but can
                  reduce some private spending. Fiscal decisions involve
                  balancing benefits, costs and competing priorities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPANSIONARY VS CONTRACTIONARY */}
      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-blue-700">
            Choosing The Direction
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            How Are Fiscal Tools Used In Different Conditions?
          </h2>
          <p className="mt-4 leading-7 text-slate-600">
            The government may adjust the same tools in different directions
            depending on whether the economy needs support or restraint.
          </p>
        </div>

        <div className="mt-9 grid gap-5 md:grid-cols-2">
          <article className="rounded-3xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-white p-6 sm:p-8">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
              <TrendingUp size={29} />
            </div>
            <h3 className="mt-5 text-2xl font-bold text-slate-950">
              Expansionary Fiscal Policy
            </h3>
            <p className="mt-3 leading-7 text-slate-600">
              Often considered when demand and employment are weak, or the
              economy needs support.
            </p>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-700">
              <li className="flex gap-2">
                <CheckCircle2 className="mt-0.5 shrink-0 text-emerald-700" size={18} />
                Increase selected government spending.
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="mt-0.5 shrink-0 text-emerald-700" size={18} />
                Reduce selected taxes, where appropriate.
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="mt-0.5 shrink-0 text-emerald-700" size={18} />
                Increase targeted transfers or support.
              </li>
            </ul>
            <Link
              href="/economics/fiscal-policy/expansionary-fiscal-policy"
              className="mt-6 inline-flex items-center gap-2 font-bold text-emerald-800 hover:underline"
            >
              Understand Expansionary Policy <ArrowRight size={18} />
            </Link>
          </article>

          <article className="rounded-3xl border border-orange-200 bg-gradient-to-br from-orange-50 to-white p-6 sm:p-8">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100 text-orange-700">
              <TrendingDown size={29} />
            </div>
            <h3 className="mt-5 text-2xl font-bold text-slate-950">
              Contractionary Fiscal Policy
            </h3>
            <p className="mt-3 leading-7 text-slate-600">
              May be considered when aggregate demand is excessive or when
              fiscal consolidation is needed.
            </p>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-700">
              <li className="flex gap-2">
                <CheckCircle2 className="mt-0.5 shrink-0 text-orange-700" size={18} />
                Slow or reduce selected expenditure.
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="mt-0.5 shrink-0 text-orange-700" size={18} />
                Increase selected taxes, where appropriate.
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="mt-0.5 shrink-0 text-orange-700" size={18} />
                Reduce the pace of borrowing where feasible.
              </li>
            </ul>
            <Link
              href="/economics/fiscal-policy/contractionary-fiscal-policy"
              className="mt-6 inline-flex items-center gap-2 font-bold text-orange-800 hover:underline"
            >
              Understand Contractionary Policy <ArrowRight size={18} />
            </Link>
          </article>
        </div>

        <p className="mt-5 text-sm leading-6 text-slate-500">
          These are general patterns, not automatic outcomes. For example,
          reducing a subsidy may lower public expenditure but could also raise
          costs for the people who previously received it.
        </p>
      </section>

      {/* INDIA EXAMPLE */}
      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold text-blue-200">
                <BadgeIndianRupee size={18} />
                Indian Economy
              </div>
              <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
                Fiscal Policy In India: A Practical Example
              </h2>
              <p className="mt-4 leading-7 text-slate-300">
                Imagine the Union Budget prioritises a new highway project.
                The project illustrates how multiple fiscal decisions work
                together.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <Landmark className="text-blue-300" size={27} />
                <h3 className="mt-3 font-bold">1. Allocate Spending</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Public funds are allocated to the project through the
                  budgetary process.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <Banknote className="text-amber-300" size={27} />
                <h3 className="mt-3 font-bold">2. Arrange Funding</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Revenue and, where necessary, borrowing help finance
                  government expenditure.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <BriefcaseBusiness className="text-emerald-300" size={27} />
                <h3 className="mt-3 font-bold">3. Economic Activity</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Contractors purchase materials and hire workers, potentially
                  supporting local businesses.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <TrendingUp className="text-indigo-300" size={27} />
                <h3 className="mt-3 font-bold">4. Longer-Term Effects</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Better connectivity may reduce travel time and support trade
                  if the project is well designed and used.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-amber-300/20 bg-amber-300/10 p-5">
            <p className="text-sm leading-6 text-amber-100">
              <strong className="text-white">The trade-off:</strong> If the
              project is financed through borrowing, future interest payments
              and debt levels also matter. The overall value depends on the
              project&apos;s cost, quality, economic benefits and funding.
            </p>
          </div>
        </div>
      </section>
<AdSlot />
      {/* QUICK RECAP */}
      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16">
        <div className="rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-6 sm:p-9">
          <h2 className="text-2xl font-bold text-slate-950 sm:text-3xl">
            Key Takeaways
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              "Government spending and taxation are the core fiscal tools.",
              "Borrowing helps finance expenditure but adds to public debt.",
              "Subsidies and transfers influence costs, income and welfare.",
              "Growth, employment, inflation and revenue shape fiscal decisions.",
              "Expansionary policy can support weak demand; contractionary policy can restrain excessive demand.",
              "Every fiscal choice has costs, benefits and possible unintended effects.",
            ].map((item) => (
              <div key={item} className="flex gap-3 rounded-xl bg-white p-4">
                <CheckCircle2
                  className="mt-0.5 shrink-0 text-blue-700"
                  size={20}
                />
                <p className="text-sm leading-6 text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

     
    </main>
  );
}
