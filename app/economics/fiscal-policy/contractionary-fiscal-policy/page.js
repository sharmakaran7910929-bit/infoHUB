
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Banknote,
  Building2,
  BriefcaseBusiness,
  CheckCircle2,
  CircleAlert,
  CircleDollarSign,
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
  ShieldCheck,
  Scale,
  ChartNoAxesCombined,
  Clock,
  GraduationCap,
  HeartPulse,
} from "lucide-react";
import AdSlot from "../../../../components/AdSlot";

export const metadata = {
  title:
    "Contractionary Fiscal Policy: Meaning, Tools, Inflation & Examples | PriceTag HUB",
  description:
    "Understand contractionary fiscal policy, why governments use it, how spending cuts and tax increases affect aggregate demand, inflation, public debt and economic growth.",
  alternates: {
    canonical:
      "https://www.pricetag.co.in/economics/fiscal-policy/contractionary-fiscal-policy",
  },
};

const policyTools = [
  {
    number: "01",
    icon: Building2,
    title: "Reduce Or Slow Government Spending",
    description:
      "The government may reduce selected expenditures, postpone lower-priority projects or limit the growth of public purchases. This can reduce direct demand for goods and services.",
    example:
      "A government postpones a non-urgent administrative building project to reduce near-term spending pressure.",
    color: "blue",
  },
  {
    number: "02",
    icon: ReceiptText,
    title: "Increase Selected Taxes",
    description:
      "Higher taxes can reduce disposable income for households or increase costs for some businesses, potentially slowing consumption and investment.",
    example:
      "A temporary increase in a tax on certain non-essential purchases may discourage some spending while raising government revenue.",
    color: "indigo",
  },
  {
    number: "03",
    icon: Wallet,
    title: "Reduce Or Retarget Transfers",
    description:
      "The government may scale back temporary support or redesign benefits as economic conditions improve. The impact depends on which recipients are affected.",
    example:
      "An emergency support programme introduced during a crisis is gradually phased out after the immediate disruption ends.",
    color: "amber",
  },
  {
    number: "04",
    icon: Scale,
    title: "Improve The Budget Balance",
    description:
      "Governments can combine revenue measures and spending restraint to reduce the budget deficit. A smaller deficit does not automatically mean every fiscal measure is contractionary.",
    example:
      "A government improves tax collection and limits low-priority spending to reduce its annual borrowing requirement.",
    color: "emerald",
  },
];

const reasons = [
  {
    icon: TrendingUp,
    title: "Demand Is Growing Too Quickly",
    description:
      "When total spending rises faster than the economy's ability to produce goods and services, demand-side inflation can intensify.",
  },
  {
    icon: CircleDollarSign,
    title: "Inflation Is Persistently High",
    description:
      "Reducing some sources of demand may help ease pressure on prices, although fiscal policy cannot directly resolve every supply-side cause of inflation.",
  },
  {
    icon: Banknote,
    title: "Public Borrowing Needs Attention",
    description:
      "A government facing a large deficit or rising debt-servicing costs may restrain spending or increase revenue to improve its fiscal position.",
  },
  {
    icon: ShoppingCart,
    title: "The Economy Is Overheating",
    description:
      "When demand is unusually strong, businesses may struggle to meet orders and compete for scarce workers, materials or production capacity.",
  },
  {
    icon: Target,
    title: "Temporary Stimulus Can Be Withdrawn",
    description:
      "Emergency support may be phased out when the conditions that justified it have passed, helping avoid continued stimulus when it is no longer needed.",
  },
  {
    icon: ShieldCheck,
    title: "Long-Term Fiscal Sustainability",
    description:
      "A credible medium-term plan can help keep public finances manageable while preserving room to respond to future emergencies.",
  },
];

const effects = [
  {
    icon: ShoppingCart,
    title: "Household Spending",
    text: "Higher taxes or reduced transfers can leave some households with less money available for purchases.",
  },
  {
    icon: Factory,
    title: "Business Sales",
    text: "If customers spend less, businesses may experience slower sales growth and adjust production or investment.",
  },
  {
    icon: TrendingDown,
    title: "Inflationary Pressure",
    text: "Weaker aggregate demand can moderate price increases when excessive demand is an important cause of inflation.",
  },
  {
    icon: Users,
    title: "Jobs And Output",
    text: "If the economy slows substantially, businesses may hire less and real GDP growth may weaken.",
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
  amber: {
    card: "border-amber-200 bg-amber-50/80",
    icon: "bg-amber-100 text-amber-700",
    label: "text-amber-800",
  },
  emerald: {
    card: "border-emerald-200 bg-emerald-50/80",
    icon: "bg-emerald-100 text-emerald-700",
    label: "text-emerald-800",
  },
};

export default function ContractionaryFiscalPolicyPage() {
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
                Contractionary{" "}
                <span className="bg-gradient-to-r from-blue-700 to-indigo-600 bg-clip-text text-transparent">
                  Fiscal Policy
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                What can a government do when demand is running too hot, prices
                are rising rapidly or public borrowing has become a concern?
              </p>

              <p className="mt-4 max-w-2xl leading-7 text-slate-600">
                One possible response is to slow the growth of government
                spending, increase selected taxes or withdraw temporary
                financial support. These measures can reduce aggregate demand
                and are known collectively as contractionary fiscal policy.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#how-it-works"
                  className="inline-flex items-center gap-2 rounded-xl bg-blue-700 px-5 py-3 font-bold text-white shadow-lg shadow-blue-200 transition hover:bg-blue-800"
                >
                  Understand The Mechanism <ArrowRight size={18} />
                </a>
                <a
                  href="#tradeoffs"
                  className="inline-flex items-center gap-2 rounded-xl border border-blue-200 bg-white px-5 py-3 font-bold text-blue-800 hover:bg-blue-50"
                >
                  Explore The Trade-Offs
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-blue-100 bg-white/95 p-6 shadow-xl shadow-blue-100/60 sm:p-8">
              <p className="text-sm font-bold uppercase tracking-widest text-blue-700">
                The Economic Challenge
              </p>
              <h2 className="mt-3 text-2xl font-bold text-slate-950">
                When Demand Needs To Cool
              </h2>

              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3 rounded-2xl bg-orange-50 p-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-orange-700">
                    <ShoppingCart size={23} />
                  </div>
                  <div>
                    <p className="font-bold">Demand Outpaces Supply</p>
                    <p className="text-sm text-slate-600">
                      Buyers compete for limited goods and capacity
                    </p>
                  </div>
                </div>

                <div className="flex justify-center text-blue-600">
                  <ArrowDown size={23} />
                </div>

                <div className="flex items-center gap-3 rounded-2xl bg-red-50 p-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red-100 text-red-700">
                    <TrendingUp size={23} />
                  </div>
                  <div>
                    <p className="font-bold">Price Pressure</p>
                    <p className="text-sm text-slate-600">
                      Excess demand can intensify inflation
                    </p>
                  </div>
                </div>

                <div className="flex justify-center text-blue-600">
                  <ArrowDown size={23} />
                </div>

                <div className="flex items-center gap-3 rounded-2xl bg-blue-50 p-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                    <Scale size={23} />
                  </div>
                  <div>
                    <p className="font-bold">Possible Policy Response</p>
                    <p className="text-sm text-slate-600">
                      Restrain demand and improve fiscal balance
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
              What Is Contractionary Fiscal Policy?
            </h2>
            <p className="mt-5 leading-7 text-slate-600">
              Contractionary fiscal policy is a government approach intended
              to reduce aggregate demand or slow its growth. It typically
              involves reducing or restraining public expenditure, increasing
              selected taxes, or withdrawing some financial support.
            </p>
            <p className="mt-4 leading-7 text-slate-600">
              Governments may consider it when demand is excessive relative
              to productive capacity, when demand-driven inflation is a
              concern, or when they need to improve the budget balance.
            </p>
            <p className="mt-4 leading-7 text-slate-600">
              The central idea is to moderate spending pressure. However,
              reducing a budget deficit and reducing aggregate demand are
              related but different objectives: the effects depend on the
              specific tax and spending decisions.
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
                WHEN DEMAND IS EXCESSIVE
              </p>
              <p className="mt-2 text-lg font-bold text-slate-950">
                The government may withdraw some of the support adding to
                spending pressure.
              </p>
            </div>

            <div className="my-3 flex justify-center text-blue-600">
              <ArrowDown size={25} />
            </div>

            <div className="rounded-2xl border border-blue-200 bg-blue-50 p-5">
              <p className="text-sm font-bold text-blue-800">
                POSSIBLE RESULT
              </p>
              <p className="mt-2 font-bold text-slate-950">
                Slower demand growth, reduced inflationary pressure and a
                stronger budget balance.
              </p>
            </div>

            <p className="mt-4 text-sm leading-6 text-slate-500">
              Outcomes depend on the source of inflation, policy design and
              the condition of the economy.
            </p>
          </div>
        </div>
      </section>
<AdSlot />
      {/* WHY */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-700">
              Reasons Behind The Decision
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Why Would A Government Use It?
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              A government must consider inflation, economic growth,
              employment, public debt and the causes of the problem before
              choosing contractionary measures.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map((reason) => {
              const Icon = reason.icon;

              return (
                <article
                  key={reason.title}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                    <Icon size={25} />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-slate-950">
                    {reason.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {reason.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* TOOLS */}
      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-blue-700">
            Policy Instruments
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            How Can The Government Reduce Demand?
          </h2>
          <p className="mt-4 leading-7 text-slate-600">
            The instruments are broadly the reverse of expansionary fiscal
            policy, but governments do not have to use every instrument at
            once.
          </p>
        </div>

        <div className="mt-9 grid gap-5 lg:grid-cols-2">
          {policyTools.map((item) => {
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

                <p className="mt-4 leading-7 text-slate-600">
                  {item.description}
                </p>

                <div className="mt-5 rounded-2xl border border-white bg-white p-4">
                  <p className={`text-sm font-bold ${style.label}`}>
                    Practical Example
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
            <strong>Important:</strong> reducing public expenditure does not
            always reduce demand by the same amount. The effect depends on
            what is cut, who is affected and whether other spending changes
            offset the reduction.
          </p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="bg-gradient-to-b from-blue-50 to-white">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-700">
              Follow The Chain
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              How Does Contractionary Fiscal Policy Affect The Economy?
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              The policy affects economic activity through household income,
              public purchases, business revenue and the overall level of
              demand.
            </p>
          </div>

          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {effects.map((effect, index) => {
              const Icon = effect.icon;

              return (
                <div key={effect.title} className="relative">
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
                      {effect.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {effect.text}
                    </p>
                  </article>

                  {index < effects.length - 1 && (
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
                <CheckCircle2 className="text-emerald-700" size={24} />
                <h3 className="font-bold text-slate-950">
                  When Demand Is Excessive
                </h3>
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-700">
                If households and businesses are spending more than the
                economy can sustainably supply, moderation in demand can
                reduce upward pressure on prices.
              </p>
            </div>

            <div className="rounded-2xl border border-orange-200 bg-orange-50 p-5">
              <div className="flex items-center gap-3">
                <CircleAlert className="text-orange-700" size={24} />
                <h3 className="font-bold text-slate-950">
                  When Growth Is Already Weak
                </h3>
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-700">
                Tightening fiscal policy during a weak economy can further
                reduce output and employment. Policymakers must weigh the
                inflation or debt problem against the risk of slowing recovery.
              </p>
            </div>
          </div>
        </div>
      </section>
<AdSlot />
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
              In the standard short-run model, contractionary fiscal policy
              tends to shift the aggregate demand curve to the left. At a
              given price level, the economy has less planned spending.
            </p>
            <p className="mt-4 leading-7 text-slate-600">
              If excessive demand is driving inflation, this may help moderate
              price increases. But if inflation comes mainly from disrupted
              supply or higher production costs, reducing demand may not solve
              the underlying problem and can still weaken economic activity.
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
                    BEFORE TIGHTENING
                  </p>
                  <p className="mt-1 font-bold text-slate-900">
                    Stronger Aggregate Demand
                  </p>
                </div>
                <TrendingUp className="shrink-0 text-orange-600" size={28} />
              </div>
              <div className="mt-4 h-2 overflow-hidden rounded-full bg-orange-100">
                <div className="h-full w-4/5 rounded-full bg-orange-500" />
              </div>
            </div>

            <div className="my-3 flex items-center justify-center gap-2 text-blue-700">
              <ArrowDown size={22} />
              <span className="text-sm font-bold">
                Fiscal restraint
              </span>
            </div>

            <div className="rounded-2xl border border-blue-200 bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-bold text-blue-700">
                    AFTER TIGHTENING
                  </p>
                  <p className="mt-1 font-bold text-slate-900">
                    Slower Demand Growth
                  </p>
                </div>
                <TrendingDown className="shrink-0 text-blue-700" size={28} />
              </div>
              <div className="mt-4 h-2 overflow-hidden rounded-full bg-blue-100">
                <div className="h-full w-2/5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600" />
              </div>
            </div>

            <p className="mt-4 text-sm leading-6 text-slate-500">
              Conceptual illustration only. The bars are not measured
              economic data, and the policy's actual effect varies.
            </p>
          </div>
        </div>
      </section>

      {/* INFLATION AND BUDGET DEFICIT */}
      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-300">
              Two Important Connections
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Inflation Control And The Budget Deficit
            </h2>
            <p className="mt-4 leading-7 text-slate-300">
              Contractionary fiscal policy is often discussed in relation to
              inflation and government borrowing, but these are separate
              problems requiring careful analysis.
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <article className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-400/15 text-orange-200">
                <TrendingDown size={26} />
              </div>
              <h3 className="mt-4 text-xl font-bold">
                How It May Help With Inflation
              </h3>
              <p className="mt-3 leading-7 text-slate-300">
                When demand is the main source of inflation, slower spending
                can reduce pressure on businesses to raise prices. The effect
                is usually indirect and may take time to appear.
              </p>
              <div className="mt-5 rounded-2xl bg-white/10 p-4">
                <p className="text-sm font-bold text-orange-200">
                  Important Limitation
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  If prices are rising because of a crop failure, energy
                  shortage or supply disruption, fiscal restraint alone
                  cannot restore the missing supply.
                </p>
              </div>
            </article>

            <article className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-400/15 text-blue-200">
                <Banknote size={26} />
              </div>
              <h3 className="mt-4 text-xl font-bold">
                How It May Improve The Budget Balance
              </h3>
              <p className="mt-3 leading-7 text-slate-300">
                Spending restraint or higher revenue can reduce the gap
                between government expenditure and receipts, assuming other
                factors do not offset the improvement.
              </p>
              <div className="mt-5 rounded-2xl bg-white/10 p-4">
                <p className="text-sm font-bold text-blue-200">
                  Important Limitation
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  If tightening sharply reduces economic activity, tax
                  collections may weaken and some expected deficit reduction
                  may not materialise.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* TRADE-OFFS */}
      <section id="tradeoffs" className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-blue-700">
            A Balanced View
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Benefits, Risks And Trade-Offs
          </h2>
          <p className="mt-4 leading-7 text-slate-600">
            Reducing demand can be useful in the right conditions, but
            excessive or poorly timed tightening can create new problems.
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
                Can moderate demand-driven inflation.
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="mt-0.5 shrink-0 text-emerald-700" size={19} />
                May improve the budget balance and reduce borrowing needs.
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="mt-0.5 shrink-0 text-emerald-700" size={19} />
                Can help withdraw emergency stimulus when it is no longer necessary.
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="mt-0.5 shrink-0 text-emerald-700" size={19} />
                May support more sustainable public finances over time.
              </li>
            </ul>
          </article>

          <article className="rounded-3xl border border-orange-200 bg-orange-50/70 p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-orange-700">
                <CircleAlert size={26} />
              </div>
              <h3 className="text-xl font-bold text-slate-950">
                Potential Risks
              </h3>
            </div>
            <ul className="mt-6 space-y-4 text-sm leading-6 text-slate-700">
              <li className="flex gap-3">
                <CircleAlert className="mt-0.5 shrink-0 text-orange-700" size={19} />
                Can slow output and economic growth.
              </li>
              <li className="flex gap-3">
                <CircleAlert className="mt-0.5 shrink-0 text-orange-700" size={19} />
                May reduce hiring or increase unemployment.
              </li>
              <li className="flex gap-3">
                <CircleAlert className="mt-0.5 shrink-0 text-orange-700" size={19} />
                Can disproportionately affect households that rely on public services or transfers.
              </li>
              <li className="flex gap-3">
                <CircleAlert className="mt-0.5 shrink-0 text-orange-700" size={19} />
                May fail to solve inflation caused mainly by supply shortages.
              </li>
            </ul>
          </article>
        </div>

        <div className="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-5">
          <div className="flex items-start gap-3">
            <ShieldCheck className="mt-0.5 shrink-0 text-blue-700" size={24} />
            <div>
              <h3 className="font-bold text-slate-950">
                The Goal Is Not Simply To Cut Everything
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Policymakers must consider which expenditures provide
                essential services or support future productivity. Targeted
                restraint and a credible medium-term plan can be preferable
                to indiscriminate cuts, depending on the circumstances.
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
              Contractionary Vs Expansionary Fiscal Policy
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              The difference is not simply that one is good and the other is
              bad. Each may be appropriate under different economic
              conditions.
            </p>
          </div>

          <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <div className="grid grid-cols-3 bg-slate-100 text-sm font-bold text-slate-800">
              <div className="p-4">Feature</div>
              <div className="border-l border-slate-200 p-4 text-orange-800">
                Contractionary
              </div>
              <div className="border-l border-slate-200 p-4 text-emerald-800">
                Expansionary
              </div>
            </div>

            {[
              [
                "Main Direction",
                "Restrains aggregate demand",
                "Raises aggregate demand",
              ],
              [
                "Government Spending",
                "May be reduced or slowed",
                "May be increased",
              ],
              [
                "Tax Measures",
                "Selected taxes may rise",
                "Selected taxes may fall",
              ],
              [
                "Common Purpose",
                "Cool excessive demand or improve fiscal balance",
                "Support weak activity and recovery",
              ],
              [
                "Main Concern",
                "Slower output and employment",
                "Inflation and borrowing",
              ],
            ].map(([feature, contractionary, expansionary]) => (
              <div
                key={feature}
                className="grid grid-cols-3 border-t border-slate-200 text-sm"
              >
                <div className="p-4 font-bold text-slate-800">{feature}</div>
                <div className="border-l border-slate-200 p-4 leading-6 text-slate-600">
                  {contractionary}
                </div>
                <div className="border-l border-slate-200 p-4 leading-6 text-slate-600">
                  {expansionary}
                </div>
              </div>
            ))}
          </div>

          <p className="mt-4 text-sm leading-6 text-slate-500">
            Real-world budgets may combine expansionary and contractionary
            measures across different programmes.
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
            Contractionary Fiscal Policy FAQs
          </h2>
        </div>

        <div className="mt-7 grid gap-4 md:grid-cols-2">
          {[
            {
              q: "What is the main objective of contractionary fiscal policy?",
              a: "It aims to restrain aggregate demand. Governments may use it to help moderate demand-driven inflation, improve the budget balance or withdraw temporary stimulus.",
            },
            {
              q: "Does contractionary fiscal policy always reduce inflation?",
              a: "No. It may reduce demand-driven price pressure, but it cannot directly remove supply shortages or all cost increases. Its effects also depend on how much demand changes.",
            },
            {
              q: "What are the main tools of contractionary fiscal policy?",
              a: "Common measures include reducing or restraining government expenditure, increasing selected taxes and withdrawing or retargeting temporary transfers.",
            },
            {
              q: "Can contractionary fiscal policy cause unemployment?",
              a: "It can contribute to slower hiring or job losses if reduced demand causes businesses to cut production. The effect depends on economic conditions and the scale of tightening.",
            },
            {
              q: "Is reducing the budget deficit the same as contractionary fiscal policy?",
              a: "Not necessarily. A deficit can shrink because revenue rises during strong growth, while some budget measures may support demand. The effect on aggregate demand depends on the specific policy changes.",
            },
            {
              q: "Is contractionary fiscal policy the same as monetary tightening?",
              a: "No. Fiscal policy involves government spending and taxation. Monetary tightening involves central-bank actions such as raising policy interest rates or otherwise making financial conditions tighter.",
            },
          ].map((faq) => (
            <article
              key={faq.q}
              className="rounded-2xl border border-slate-200 bg-white p-5"
            >
              <h3 className="font-bold text-slate-950">{faq.q}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {faq.a}
              </p>
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
                Restrain Demand. Balance The Economy.
              </h2>
              <p className="mt-4 leading-7 text-slate-300">
                Contractionary fiscal policy can be useful when demand is
                excessive or public finances need adjustment, but the timing
                and distribution of its costs matter.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {[
                ["Meaning", "A policy to restrain aggregate demand"],
                ["Main Instruments", "Spending restraint, tax increases and transfers"],
                ["Possible Results", "Lower demand pressure and a better budget balance"],
                ["Key Risks", "Slower growth, employment pressure and weaker services"],
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
