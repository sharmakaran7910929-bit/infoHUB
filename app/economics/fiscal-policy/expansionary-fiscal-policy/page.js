
import Link from "next/link";
import {
  ArrowDown,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Banknote,
  Building2,
  BriefcaseBusiness,
  CheckCircle2,
  CircleAlert,
  Coins,
  Factory,
  HandCoins,
  Landmark,
  Lightbulb,
  ReceiptText,
  ShoppingCart,
  TrendingDown,
  TrendingUp,
  Users,
  Wallet,
  Target,
  ChartNoAxesCombined,
  Clock,
  ShieldCheck,
  GraduationCap,
  HeartPulse,
  Scale,
  CircleDollarSign,LearningViz
} from "lucide-react";
import AdSlot from "../../../../components/AdSlot";

export const metadata = {
  title:
    "Expansionary Fiscal Policy: Meaning, Tools, Multiplier & Examples | PriceTag HUB",
  description:
    "Explore expansionary fiscal policy, why governments use it, how spending, tax cuts and transfers affect aggregate demand, the multiplier effect, economic growth and inflation.",
  alternates: {
    canonical:
      "https://www.pricetag.co.in/economics/fiscal-policy/expansionary-fiscal-policy",
  },
};

const instruments = [
  {
    icon: Building2,
    number: "01",
    title: "Increase Government Spending",
    text: "The government spends more on public projects, services or purchases. This directly increases demand for the goods and services it buys.",
    example:
      "Funding the construction of a new public hospital creates demand for construction work, medical equipment and related services.",
    color: "blue",
  },
  {
    icon: ReceiptText,
    number: "02",
    title: "Reduce Selected Taxes",
    text: "Lower taxes can increase disposable income for households or improve cash flow for businesses, depending on the tax and who benefits.",
    example:
      "A reduction in personal income tax may leave eligible taxpayers with more money for household purchases or savings.",
    color: "indigo",
  },
  {
    icon: HandCoins,
    number: "03",
    title: "Increase Transfers",
    text: "Government transfers provide financial support without requiring the recipient to supply a good or service in return.",
    example:
      "Temporary income support for eligible unemployed workers can help them pay essential expenses while looking for work.",
    color: "emerald",
  },
  {
    icon: Wallet,
    number: "04",
    title: "Expand Targeted Support",
    text: "Temporary assistance or carefully designed subsidies can reduce financial pressure on selected households and producers.",
    example:
      "Time-limited support for small businesses affected by a severe disruption may help viable firms retain workers.",
    color: "amber",
  },
];

const channels = [
  {
    icon: ShoppingCart,
    title: "Consumption",
    text: "Households may buy more goods and services when their disposable income or financial security improves.",
  },
  {
    icon: Factory,
    title: "Production",
    text: "Businesses may respond to stronger demand by increasing output, using idle equipment or ordering more supplies.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Employment",
    text: "Higher production can increase demand for workers when firms need additional labour.",
  },
  {
    icon: TrendingUp,
    title: "National Output",
    text: "Greater production can raise real GDP when the economy has unused resources and the stimulus is effective.",
  },
];

const factors = [
  {
    icon: TrendingDown,
    title: "Weak Economic Growth",
    text: "When overall demand and production fall, additional public spending or other stimulus may help support recovery.",
  },
  {
    icon: Users,
    title: "High Unemployment",
    text: "If workers and productive resources are underused, demand support may encourage businesses to increase activity.",
  },
  {
    icon: CircleDollarSign,
    title: "Household Spending Pressure",
    text: "When households cut purchases because of falling income or uncertainty, targeted support may help stabilise consumption.",
  },
  {
    icon: Scale,
    title: "Inflation And Supply Capacity",
    text: "Stimulus is more likely to raise output when spare capacity exists. If supply is constrained, it can add to price pressure.",
  },
  {
    icon: Banknote,
    title: "Public Finances",
    text: "The government must consider revenue, borrowing costs, existing debt and whether the measures are affordable over time.",
  },
  {
    icon: Target,
    title: "Timing And Policy Design",
    text: "A measure works best when it reaches the intended recipients or starts useful projects when support is needed.",
  },
];

const colors = {
  blue: {
    card: "border-blue-200 bg-blue-50/80",
    icon: "bg-blue-100 text-blue-700",
    label: "text-blue-800",
  },
  indigo: {
    card: "border-indigo-200 bg-indigo-50/80",
    icon: "bg-indigo-100 text-indigo-700",
    label: "text-indigo-800",
  },
  emerald: {
    card: "border-emerald-200 bg-emerald-50/80",
    icon: "bg-emerald-100 text-emerald-700",
    label: "text-emerald-800",
  },
  amber: {
    card: "border-amber-200 bg-amber-50/80",
    icon: "bg-amber-100 text-amber-700",
    label: "text-amber-800",
  },
};

export default function ExpansionaryFiscalPolicyPage() {
  return (
    <main className="min-h-screen bg-white text-slate-800">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-100">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-[1.08fr_0.92fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-bold text-blue-800">
                <Landmark size={17} />
                Economics · Fiscal Policy
              </div>

              <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Expansionary{" "}
                <span className="bg-gradient-to-r from-blue-700 to-indigo-600 bg-clip-text text-transparent">
                  Fiscal Policy
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                What should a government do when businesses are selling less,
                hiring slows down and economic growth loses momentum?
              </p>

              <p className="mt-4 max-w-2xl leading-7 text-slate-600">
                One option is to stimulate the economy by increasing selected
                government spending, reducing taxes or providing additional
                financial support. This approach is known as expansionary
                fiscal policy.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#how-it-works"
                  className="inline-flex items-center gap-2 rounded-xl bg-blue-700 px-5 py-3 font-bold text-white shadow-lg shadow-blue-200 transition hover:bg-blue-800"
                >
                  Understand The Mechanism <ArrowRight size={18} />
                </a>
                <a
                  href="#multiplier"
                  className="inline-flex items-center gap-2 rounded-xl border border-blue-200 bg-white px-5 py-3 font-bold text-blue-800 hover:bg-blue-50"
                >
                  Explore The Multiplier
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-blue-100 bg-white/95 p-6 shadow-xl shadow-blue-100/60 sm:p-8">
              <p className="text-sm font-bold uppercase tracking-widest text-blue-700">
                The Economic Challenge
              </p>
              <h2 className="mt-3 text-2xl font-bold text-slate-950">
                When Private Demand Is Too Weak
              </h2>

              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3 rounded-2xl bg-slate-50 p-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-200 text-slate-700">
                    <ShoppingCart size={23} />
                  </div>
                  <div>
                    <p className="font-bold">Fewer Purchases</p>
                    <p className="text-sm text-slate-600">
                      Businesses receive fewer orders
                    </p>
                  </div>
                </div>

                <div className="flex justify-center text-blue-600">
                  <ArrowDown size={23} />
                </div>

                <div className="flex items-center gap-3 rounded-2xl bg-orange-50 p-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-orange-700">
                    <BriefcaseBusiness size={23} />
                  </div>
                  <div>
                    <p className="font-bold">Slower Hiring</p>
                    <p className="text-sm text-slate-600">
                      Workers and equipment may remain underused
                    </p>
                  </div>
                </div>

                <div className="flex justify-center text-blue-600">
                  <ArrowDown size={23} />
                </div>

                <div className="flex items-center gap-3 rounded-2xl bg-emerald-50 p-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                    <TrendingUp size={23} />
                  </div>
                  <div>
                    <p className="font-bold">Potential Policy Response</p>
                    <p className="text-sm text-slate-600">
                      Support demand and economic activity
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MEANING */}
      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-start">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-blue-700">
              Start With The Meaning
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              What Is Expansionary Fiscal Policy?
            </h2>
            <p className="mt-5 leading-7 text-slate-600">
              Expansionary fiscal policy is a government policy designed to
              increase aggregate demand — the total planned spending on
              domestically produced goods and services in an economy.
            </p>
            <p className="mt-4 leading-7 text-slate-600">
              It generally involves increasing government expenditure,
              reducing selected taxes, increasing transfers or combining
              these measures. It is often considered during recessions or
              periods of weak demand and high unemployment.
            </p>
            <p className="mt-4 leading-7 text-slate-600">
              The aim is not simply to spend more. It is to support economic
              activity when households and businesses are not spending enough
              to use available workers and productive capacity.
            </p>
          </div>

          <div className="rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                <Lightbulb size={26} />
              </div>
              <h3 className="text-xl font-bold text-slate-950">
                The Core Idea
              </h3>
            </div>

            <div className="mt-6 rounded-2xl bg-white p-5 shadow-sm">
              <p className="text-sm font-bold text-slate-500">
                WHEN DEMAND IS WEAK
              </p>
              <p className="mt-2 text-lg font-bold text-slate-950">
                Government support may help fill part of the spending gap.
              </p>
            </div>

            <div className="my-3 flex justify-center text-blue-700">
              <ArrowDown size={25} />
            </div>

            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
              <p className="text-sm font-bold text-emerald-800">
                POSSIBLE RESULT
              </p>
              <p className="mt-2 font-bold text-slate-950">
                Higher output, stronger employment and improved economic
                confidence.
              </p>
            </div>

            <p className="mt-4 text-sm leading-6 text-slate-500">
              These outcomes are possible, not guaranteed. The result depends
              on the economic situation and the design of the policy.
            </p>
          </div>
        </div>
      </section>
<AdSlot />
      {/* WHEN AND WHY */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-700">
              The Decision Behind The Policy
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Why Would A Government Use It?
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              Governments assess economic indicators and public needs before
              deciding whether extra stimulus is appropriate.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {factors.map((factor) => {
              const Icon = factor.icon;

              return (
                <article
                  key={factor.title}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
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
        </div>
      </section>

      {/* POLICY TOOLS */}
      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-blue-700">
            Policy Instruments
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            How Can The Government Stimulate Demand?
          </h2>
          <p className="mt-4 leading-7 text-slate-600">
            Different measures work through different channels. Governments
            can choose one instrument or combine several.
          </p>
        </div>

        <div className="mt-9 grid gap-5 lg:grid-cols-2">
          {instruments.map((item) => {
            const Icon = item.icon;
            const style = colors[item.color];

            return (
              <article
                key={item.number}
                className={`rounded-3xl border p-6 sm:p-7 ${style.card}`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${style.icon}`}
                  >
                    <Icon size={28} />
                  </div>
                  <div>
                    <p className={`text-sm font-bold ${style.label}`}>
                      INSTRUMENT {item.number}
                    </p>
                    <h3 className="mt-1 text-xl font-bold text-slate-950">
                      {item.title}
                    </h3>
                  </div>
                </div>

                <p className="mt-4 leading-7 text-slate-600">{item.text}</p>

                <div className="mt-5 rounded-2xl border border-white bg-white p-4">
                  <p className={`text-sm font-bold ${style.label}`}>
                    How It Can Work
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {item.example}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-6 flex gap-3 rounded-2xl border border-blue-200 bg-blue-50 p-5">
          <CircleAlert className="mt-0.5 shrink-0 text-blue-700" size={23} />
          <p className="text-sm leading-6 text-slate-700">
            <strong>Borrowing is a financing choice, not a separate
            guarantee of stimulus.</strong> Borrowed funds can finance
            expansionary measures, but the effect on demand depends on what
            the government spends the money on and how the borrowing affects
            the wider economy.
          </p>
        </div>
      </section>
<AdSlot />
      {/* HOW IT WORKS */}
      <section id="how-it-works" className="bg-gradient-to-b from-blue-50 to-white">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-700">
              Follow The Chain
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              How Does Expansionary Fiscal Policy Affect The Economy?
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              A fiscal measure can influence several parts of the economy.
              The strength of each link depends on how households, firms and
              markets respond.
            </p>
          </div>

          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {channels.map((channel, index) => {
              const Icon = channel.icon;

              return (
                <div key={channel.title} className="relative">
                  <article className="h-full rounded-2xl border border-blue-100 bg-white p-5 shadow-sm">
                    <div className="flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                        <Icon size={25} />
                      </div>
                      <span className="text-sm font-bold text-slate-400">
                        0{index + 1}
                      </span>
                    </div>
                    <h3 className="mt-4 font-bold text-slate-950">
                      {channel.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {channel.text}
                    </p>
                  </article>

                  {index < channels.length - 1 && (
                    <div className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 text-blue-600 lg:block">
                      <ArrowRight size={22} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
              <div className="flex items-center gap-3">
                <ArrowUpRight className="text-emerald-700" size={24} />
                <h3 className="font-bold text-slate-950">
                  When Spare Capacity Exists
                </h3>
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-700">
                Firms can respond to extra demand by producing more and
                employing unused workers or equipment. Real output may rise
                without the same degree of upward pressure on prices.
              </p>
            </div>

            <div className="rounded-2xl border border-orange-200 bg-orange-50 p-5">
              <div className="flex items-center gap-3">
                <TrendingUp className="text-orange-700" size={24} />
                <h3 className="font-bold text-slate-950">
                  When Capacity Is Constrained
                </h3>
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-700">
                If firms cannot increase supply quickly, extra demand may
                result in higher prices, longer waiting times or more imports
                rather than a large increase in domestic output.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AGGREGATE DEMAND */}
      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-blue-700">
              The Macroeconomic Connection
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              What Happens To Aggregate Demand?
            </h2>
            <p className="mt-5 leading-7 text-slate-600">
              Aggregate demand represents total planned spending on
              domestically produced final goods and services at different
              price levels.
            </p>
            <p className="mt-4 leading-7 text-slate-600">
              An increase in government purchases directly adds to aggregate
              demand. Tax reductions and transfers can raise household or
              business spending indirectly, depending on how much of the
              additional income is spent rather than saved.
            </p>
            <p className="mt-4 leading-7 text-slate-600">
              In the standard short-run model, expansionary fiscal policy
              shifts the aggregate demand curve to the right. The resulting
              changes in output and the price level depend on the shape of
              aggregate supply and the economy&apos;s starting position.
            </p>
          </div>

          <div className="rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 to-indigo-50 p-6 sm:p-8">
            <h3 className="text-xl font-bold text-slate-950">
              Understand The Direction Of Change
            </h3>

            <div className="mt-6 rounded-2xl border border-white bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-bold text-slate-500">
                    BEFORE STIMULUS
                  </p>
                  <p className="mt-1 font-bold text-slate-900">
                    Weaker Aggregate Demand
                  </p>
                </div>
                <TrendingDown className="shrink-0 text-slate-500" size={28} />
              </div>
              <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-100">
                <div className="h-full w-2/5 rounded-full bg-slate-400" />
              </div>
            </div>

            <div className="my-3 flex items-center justify-center gap-2 text-blue-700">
              <ArrowDownRight size={22} />
              <span className="text-sm font-bold">
                Fiscal stimulus
              </span>
            </div>

            <div className="rounded-2xl border border-blue-200 bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-bold text-blue-700">
                    AFTER STIMULUS
                  </p>
                  <p className="mt-1 font-bold text-slate-900">
                    Higher Aggregate Demand
                  </p>
                </div>
                <TrendingUp className="shrink-0 text-blue-700" size={28} />
              </div>
              <div className="mt-4 h-2 overflow-hidden rounded-full bg-blue-100">
                <div className="h-full w-4/5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600" />
              </div>
            </div>

            <p className="mt-4 text-sm leading-6 text-slate-500">
              Conceptual illustration only — the bars are not measured
              economic data.
            </p>
          </div>
        </div>

        
         
      </section>

      {/* MULTIPLIER */}
      <section id="multiplier" className="bg-slate-950 text-white">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16">
          <div className="grid gap-9 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-blue-300">
                One Change, Several Rounds
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                What Is The Fiscal Multiplier Effect?
              </h2>
              <p className="mt-5 leading-7 text-slate-300">
                The multiplier effect describes how an initial change in
                spending can lead to further changes in total economic
                activity as money moves between households and businesses.
              </p>
              <p className="mt-4 leading-7 text-slate-300">
                A recipient may spend part of their additional income at
                another business. That business receives revenue and may then
                pay workers or suppliers, creating further rounds of spending.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
              <h3 className="text-xl font-bold">
                Follow A Hypothetical Spending Chain
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Suppose a local authority purchases new computer systems for
                its public offices.
              </p>

              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-4 rounded-2xl bg-white/10 p-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-400/20 text-blue-200">
                    <Landmark size={23} />
                  </div>
                  <div>
                    <p className="font-bold">Initial Purchase</p>
                    <p className="text-sm text-slate-300">
                      The supplier receives an order.
                    </p>
                  </div>
                </div>

                <div className="flex justify-center text-blue-300">
                  <ArrowDown size={22} />
                </div>

                <div className="flex items-center gap-4 rounded-2xl bg-white/10 p-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-400/20 text-emerald-200">
                    <Users size={23} />
                  </div>
                  <div>
                    <p className="font-bold">Income Is Distributed</p>
                    <p className="text-sm text-slate-300">
                      Workers and suppliers receive income.
                    </p>
                  </div>
                </div>

                <div className="flex justify-center text-blue-300">
                  <ArrowDown size={22} />
                </div>

                <div className="flex items-center gap-4 rounded-2xl bg-white/10 p-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-400/20 text-indigo-200">
                    <ShoppingCart size={23} />
                  </div>
                  <div>
                    <p className="font-bold">Further Spending</p>
                    <p className="text-sm text-slate-300">
                      Some of that income is spent elsewhere.
                    </p>
                  </div>
                </div>
              </div>

              <p className="mt-5 text-sm leading-6 text-slate-300">
                Each round becomes smaller when some income is saved, taxed
                or spent on imports. The actual multiplier varies across
                economies and policy measures.
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-blue-300/20 bg-blue-400/10 p-5">
            <p className="leading-7 text-blue-100">
              <strong className="text-white">Important distinction:</strong>{" "}
              the multiplier is not a promise that every rupee of public
              spending produces a fixed amount of extra GDP. Its size depends
              on economic conditions, the type of spending, financing,
              monetary policy and how recipients use their income.
            </p>
          </div>
        </div>
      </section>

      {/* BENEFITS AND RISKS */}
      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-blue-700">
            A Balanced View
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Benefits, Limitations And Trade-Offs
          </h2>
          <p className="mt-4 leading-7 text-slate-600">
            Stimulus can help close an economic gap, but its success depends
            on what is needed, what is affordable and how quickly measures
            can take effect.
          </p>
        </div>

        <div className="mt-9 grid gap-5 md:grid-cols-2">
          <article className="rounded-3xl border border-emerald-200 bg-emerald-50/70 p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                <CheckCircle2 size={26} />
              </div>
              <h3 className="text-xl font-bold text-slate-950">
                Potential Benefits
              </h3>
            </div>
            <ul className="mt-6 space-y-4 text-sm leading-6 text-slate-700">
              <li className="flex gap-3">
                <CheckCircle2 className="mt-0.5 shrink-0 text-emerald-700" size={19} />
                Supports demand when private spending is weak.
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="mt-0.5 shrink-0 text-emerald-700" size={19} />
                Can reduce the severity of a downturn.
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="mt-0.5 shrink-0 text-emerald-700" size={19} />
                May protect employment and household incomes.
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="mt-0.5 shrink-0 text-emerald-700" size={19} />
                Well-chosen public investment can improve future productive capacity.
              </li>
            </ul>
          </article>

          <article className="rounded-3xl border border-orange-200 bg-orange-50/70 p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-orange-700">
                <CircleAlert size={26} />
              </div>
              <h3 className="text-xl font-bold text-slate-950">
                Potential Limitations
              </h3>
            </div>
            <ul className="mt-6 space-y-4 text-sm leading-6 text-slate-700">
              <li className="flex gap-3">
                <CircleAlert className="mt-0.5 shrink-0 text-orange-700" size={19} />
                Excessive stimulus can increase inflationary pressure.
              </li>
              <li className="flex gap-3">
                <CircleAlert className="mt-0.5 shrink-0 text-orange-700" size={19} />
                Borrowing can increase debt and future interest payments.
              </li>
              <li className="flex gap-3">
                <CircleAlert className="mt-0.5 shrink-0 text-orange-700" size={19} />
                Project delays can make support arrive too late.
              </li>
              <li className="flex gap-3">
                <CircleAlert className="mt-0.5 shrink-0 text-orange-700" size={19} />
                Some benefits may leak into imports or be saved rather than spent.
              </li>
            </ul>
          </article>
        </div>

        <div className="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-5">
          <div className="flex items-start gap-3">
            <ShieldCheck className="mt-0.5 shrink-0 text-blue-700" size={24} />
            <div>
              <h3 className="font-bold text-slate-950">
                Why Timing And Targeting Matter
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Temporary, well-targeted support can be more appropriate than
                broad stimulus when public finances are constrained. If
                demand is already strong and supply cannot keep up, additional
                stimulus may do more to raise prices than production.
              </p>
            </div>
          </div>
        </div>
      </section>
<AdSlot />
      {/* COMPARISON */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-700">
              Compare The Two Directions
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Expansionary Vs Contractionary Fiscal Policy
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              Both use fiscal instruments, but they generally aim to move
              demand in opposite directions.
            </p>
          </div>

          <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <div className="grid grid-cols-3 bg-slate-100 text-sm font-bold text-slate-800">
              <div className="p-4">Feature</div>
              <div className="border-l border-slate-200 p-4 text-emerald-800">
                Expansionary
              </div>
              <div className="border-l border-slate-200 p-4 text-orange-800">
                Contractionary
              </div>
            </div>

            {[
              [
                "Main Direction",
                "Raises aggregate demand",
                "Restrains aggregate demand",
              ],
              [
                "Government Spending",
                "Often increased",
                "May be reduced or slowed",
              ],
              [
                "Tax Measures",
                "Selected taxes may fall",
                "Selected taxes may rise",
              ],
              [
                "Common Purpose",
                "Support weak activity",
                "Cool excessive demand or consolidate finances",
              ],
              [
                "Main Concern",
                "Inflation and borrowing",
                "Weaker output or employment if overused",
              ],
            ].map(([feature, expansionary, contractionary]) => (
              <div
                key={feature}
                className="grid grid-cols-3 border-t border-slate-200 text-sm"
              >
                <div className="p-4 font-bold text-slate-800">{feature}</div>
                <div className="border-l border-slate-200 p-4 leading-6 text-slate-600">
                  {expansionary}
                </div>
                <div className="border-l border-slate-200 p-4 leading-6 text-slate-600">
                  {contractionary}
                </div>
              </div>
            ))}
          </div>

          <p className="mt-4 text-sm leading-6 text-slate-500">
            These are typical patterns. Actual policy choices can combine
            measures and depend on economic conditions.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-widest text-blue-700">
            Common Questions
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Expansionary Fiscal Policy FAQs
          </h2>
        </div>

        <div className="mt-7 grid gap-4 md:grid-cols-2">
          {[
            {
              q: "Is expansionary fiscal policy only used during a recession?",
              a: "It is commonly associated with recessions and weak demand, but governments may also use targeted support during other downturns or periods of economic stress.",
            },
            {
              q: "Does expansionary fiscal policy always increase inflation?",
              a: "No. When resources are underused, it may increase output and employment. Inflationary pressure is more likely when demand rises faster than the economy can supply goods and services.",
            },
            {
              q: "Is a tax cut always expansionary?",
              a: "A tax cut can support demand, but the effect depends on who receives the benefit, whether they spend or save it, and how the tax cut is financed.",
            },
            {
              q: "How is fiscal policy different from monetary policy?",
              a: "Fiscal policy concerns government spending, taxation and borrowing. Monetary policy is conducted by the central bank and influences monetary and financial conditions, including interest rates.",
            },
            {
              q: "Can expansionary fiscal policy increase public debt?",
              a: "Yes, especially if additional spending or tax reductions are financed by borrowing rather than offset by revenue or other adjustments.",
            },
            {
              q: "What is the main objective of expansionary fiscal policy?",
              a: "Its main short-run objective is to support aggregate demand and economic activity, often helping output and employment recover when demand is weak.",
            },
          ].map((faq) => (
            <article
              key={faq.q}
              className="rounded-2xl border border-slate-200 bg-white p-5"
            >
              <h3 className="font-bold text-slate-950">{faq.q}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{faq.a}</p>
            </article>
          ))}
        </div>
      </section>

      {/* KEY TAKEAWAYS */}
      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-14">
          <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-blue-300">
                Remember The Essentials
              </p>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                Stimulate Demand. Support Recovery.
              </h2>
              <p className="mt-4 leading-7 text-slate-300">
                Expansionary fiscal policy gives governments ways to respond
                when private demand is too weak to support healthy economic
                activity.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {[
                ["Meaning", "A policy to stimulate aggregate demand"],
                ["Main Instruments", "Spending, tax changes and transfers"],
                ["Possible Results", "More output and employment"],
                ["Key Risks", "Inflation, debt and poor timing"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5"
                >
                  <p className="text-sm font-bold text-blue-300">{label}</p>
                  <p className="mt-2 font-bold text-white">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    
    </main>
  );
}
