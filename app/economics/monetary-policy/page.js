
import Link from "next/link";
import {
  Landmark,
  TrendingUp,
  TrendingDown,
  Percent,
  ArrowRight,
  Banknote,
  Gauge,
  ShieldCheck,
  CircleHelp,
  BookOpen,
  Activity,
  Scale,
  ChartNoAxesCombined,
} from "lucide-react";

export const metadata = {
  title: "Monetary Policy: RBI, Repo Rate, Tools & Examples | PriceTag HUB",
  description:
    "Understand monetary policy, RBI tools, repo rate, expansionary and contractionary policy, and how interest rates influence inflation, borrowing and economic growth.",
  alternates: {
    canonical: "https://www.pricetag.co.in/economics/monetary-policy",
  },
};

const topics = [
  {
    title: "What Is Monetary Policy?",
    description:
      "Learn what monetary policy means, why central banks use it, and how it influences inflation, borrowing and economic activity.",
    href: "/economics/monetary-policy/what-is-monetary-policy",
    icon: BookOpen,
    tag: "Start Here",
    color: "bg-blue-50 text-blue-700 border-blue-200",
  },
  {
    title: "Monetary Policy Tools",
    description:
      "Explore the policy instruments used by central banks to influence liquidity, credit conditions and interest rates.",
    href: "/economics/monetary-policy/monetary-policy-tools",
    icon: Gauge,
    tag: "Core Concepts",
    color: "bg-indigo-50 text-indigo-700 border-indigo-200",
  },
  {
    title: "Expansionary Monetary Policy",
    description:
      "Understand how monetary easing can support borrowing, spending, investment and economic activity during weak demand.",
    href: "/economics/monetary-policy/expansionary-monetary-policy",
    icon: TrendingUp,
    tag: "Stimulating Demand",
    color: "bg-emerald-50 text-emerald-700 border-emerald-200",
  },
  {
    title: "Contractionary Monetary Policy",
    description:
      "Learn how tighter monetary conditions can reduce demand and help control persistent inflationary pressure.",
    href: "/economics/monetary-policy/contractionary-monetary-policy",
    icon: TrendingDown,
    tag: "Controlling Inflation",
    color: "bg-rose-50 text-rose-700 border-rose-200",
  },
  {
    title: "RBI and Monetary Policy",
    description:
      "Discover the Reserve Bank of India's role, its monetary policy framework and its influence on financial conditions.",
    href: "/economics/monetary-policy/rbi-and-monetary-policy",
    icon: Landmark,
    tag: "India Focus",
    color: "bg-amber-50 text-amber-700 border-amber-200",
  },
  {
    title: "What Is Repo Rate?",
    description:
      "Understand the repo rate and why changes in this policy rate can affect bank lending rates and borrowing costs.",
    href: "/economics/monetary-policy/what-is-repo-rate",
    icon: Percent,
    tag: "Interest Rates",
    color: "bg-violet-50 text-violet-700 border-violet-200",
  },
  {
    title: "Repo Rate vs Reverse Repo Rate",
    description:
      "Compare the two rates, understand their different roles, and see how they fit into the RBI's monetary framework.",
    href: "/economics/monetary-policy/repo-rate-vs-reverse-repo-rate",
    icon: Scale,
    tag: "Compare",
    color: "bg-cyan-50 text-cyan-700 border-cyan-200",
  },
];

const quickFacts = [
  {
    icon: Percent,
    title: "Interest Rates",
    description:
      "Influence the cost of loans, the return on savings and spending decisions.",
  },
  {
    icon: Banknote,
    title: "Liquidity and Credit",
    description:
      "Influence how easily funds move through the banking and financial system.",
  },
  {
    icon: ShieldCheck,
    title: "Price Stability",
    description:
      "Help manage inflation while considering broader economic conditions.",
  },
];

export default function MonetaryPolicyPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-blue-100 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl" />
        <div className="absolute -bottom-28 -left-20 h-72 w-72 rounded-full bg-indigo-200/30 blur-3xl" />

        <div className="relative mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-3 py-1.5 text-sm font-bold text-blue-700">
              <Landmark size={16} />
              Economics · Monetary Policy
            </div>

            <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Monetary Policy: How Central Banks Influence the Economy
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Why do loan rates change? How does the RBI respond to inflation?
              And how can interest-rate decisions influence businesses,
              households and economic growth? Explore the concepts, tools and
              real-world connections behind monetary policy.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/economics/monetary-policy/what-is-monetary-policy"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-700 px-5 py-3 font-bold text-white shadow-sm transition hover:bg-blue-800"
              >
                Start Learning <ArrowRight size={18} />
              </Link>

              <Link
                href="/economics/monetary-policy/rbi-and-monetary-policy"
                className="inline-flex items-center gap-2 rounded-xl border border-blue-200 bg-white px-5 py-3 font-bold text-blue-800 transition hover:bg-blue-50"
              >
                Explore RBI's Role
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-600">
              <span className="flex items-center gap-2">
                <Activity size={16} className="text-blue-700" />
                Inflation and demand
              </span>
              <span className="flex items-center gap-2">
                <Percent size={16} className="text-blue-700" />
                Interest rates
              </span>
              <span className="flex items-center gap-2">
                <Landmark size={16} className="text-blue-700" />
                India's central bank
              </span>
            </div>
          </div>

          {/* POLICY DIRECTION VISUAL */}
          <div className="rounded-3xl border border-blue-100 bg-white/90 p-5 shadow-xl shadow-blue-900/5 sm:p-7">
            <div className="mb-5 flex items-center justify-between gap-3">
              <div>
                <p className="text-sm font-bold uppercase tracking-wider text-blue-700">
                  Policy Direction
                </p>
                <h2 className="mt-1 text-xl font-bold">
                  Two Different Approaches
                </h2>
              </div>
              <div className="rounded-xl bg-blue-50 p-3 text-blue-700">
                <Gauge size={26} />
              </div>
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-white p-3 text-emerald-700">
                    <TrendingUp size={23} />
                  </div>
                  <div>
                    <h3 className="font-bold text-emerald-900">
                      Expansionary Policy
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-emerald-800">
                      Easier monetary conditions can encourage borrowing,
                      spending and investment.
                    </p>
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-2 text-xs font-bold text-emerald-800">
                  <span className="rounded-full bg-white px-3 py-1.5">
                    Lower policy rates, when appropriate
                  </span>
                  <ArrowRight size={15} />
                </div>
              </div>

              <div className="rounded-2xl border border-rose-200 bg-rose-50 p-4">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-white p-3 text-rose-700">
                    <TrendingDown size={23} />
                  </div>
                  <div>
                    <h3 className="font-bold text-rose-900">
                      Contractionary Policy
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-rose-800">
                      Tighter monetary conditions can moderate borrowing,
                      spending and inflationary demand.
                    </p>
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-2 text-xs font-bold text-rose-800">
                  <span className="rounded-full bg-white px-3 py-1.5">
                    Higher policy rates, when appropriate
                  </span>
                  <ArrowRight size={15} />
                </div>
              </div>
            </div>

            <p className="mt-4 text-xs leading-5 text-slate-500">
              These are simplified examples. Actual policy decisions depend on
              inflation, economic activity, financial conditions and the
              central bank's objectives.
            </p>
          </div>
        </div>
      </section>

      {/* QUICK OVERVIEW */}
      <section className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
        <div className="mb-7 max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-wider text-blue-700">
            The Big Picture
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            What Does Monetary Policy Influence?
          </h2>
          <p className="mt-4 leading-7 text-slate-600">
            Monetary policy affects the economy through several connected
            channels. Its impact is not immediate or identical for every
            household and business.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {quickFacts.map((fact) => {
            const Icon = fact.icon;

            return (
              <div
                key={fact.title}
                className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
              >
                <div className="mb-4 inline-flex rounded-xl bg-blue-50 p-3 text-blue-700">
                  <Icon size={24} />
                </div>
                <h3 className="text-lg font-bold">{fact.title}</h3>
                <p className="mt-2 leading-7 text-slate-600">
                  {fact.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-wider text-indigo-700">
              Understand The Mechanism
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              How Can a Policy Rate Affect the Economy?
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              A policy-rate change can influence bank funding conditions and
              lending rates. Those changes may then affect household purchases,
              business investment, aggregate demand and inflation.
            </p>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                number: "01",
                title: "Policy Decision",
                description:
                  "The central bank adjusts its policy stance or key instruments.",
              },
              {
                number: "02",
                title: "Financial Conditions",
                description:
                  "Market rates, bank lending conditions and credit demand may respond.",
              },
              {
                number: "03",
                title: "Spending Decisions",
                description:
                  "Households and firms may change borrowing, consumption and investment.",
              },
              {
                number: "04",
                title: "Economic Outcomes",
                description:
                  "Demand and inflation pressure can change over time.",
              },
            ].map((step, index) => (
              <div
                key={step.number}
                className="relative rounded-2xl border border-slate-200 bg-white p-5"
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-sm font-bold text-blue-700">
                    STEP {step.number}
                  </span>
                  {index < 3 && (
                    <ArrowRight
                      size={18}
                      className="hidden text-slate-400 lg:block"
                    />
                  )}
                </div>
                <h3 className="font-bold">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-5">
            <div className="flex items-start gap-3">
              <ChartNoAxesCombined
                size={23}
                className="mt-1 shrink-0 text-blue-700"
              />
              <div>
                <h3 className="font-bold text-blue-950">
                  Why the effect takes time
                </h3>
                <p className="mt-1 leading-7 text-blue-900">
                  Existing loans may have fixed rates, banks may adjust lending
                  rates at different speeds, and consumers may not change their
                  spending immediately. Monetary policy therefore works through
                  several channels and with uncertain time lags.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TOPIC DIRECTORY */}
      <section
        id="topics"
        className="mx-auto max-w-6xl scroll-mt-8 px-5 py-12 sm:px-8 sm:py-16"
      >
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-wider text-blue-700">
              Explore The Topics
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              Your Monetary Policy Learning Hub
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              Start with the fundamentals, compare policy approaches, or jump
              directly to India's repo-rate system and the RBI.
            </p>
          </div>

          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 text-sm font-bold text-slate-600">
            <BookOpen size={16} />
            {topics.length} Learning Guides
          </span>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {topics.map((topic, index) => {
            const Icon = topic.icon;

            return (
              <article
                key={topic.href}
                className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 transition duration-200 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-900/5 sm:p-6"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="rounded-xl bg-blue-50 p-3 text-blue-700 transition group-hover:bg-blue-100">
                    <Icon size={25} />
                  </div>
                  <span
                    className={`rounded-full border px-3 py-1 text-xs font-bold ${topic.color}`}
                  >
                    {topic.tag}
                  </span>
                </div>

                <p className="mt-5 text-xs font-bold uppercase tracking-wider text-slate-400">
                  GUIDE {String(index + 1).padStart(2, "0")}
                </p>

                <h3 className="mt-2 text-xl font-bold leading-snug text-slate-900">
                  {topic.title}
                </h3>

                <p className="mt-3 flex-1 leading-7 text-slate-600">
                  {topic.description}
                </p>

                <Link
                  href={topic.href}
                  className="mt-6 inline-flex w-fit items-center gap-2 font-bold text-blue-700 transition group-hover:gap-3"
                >
                  Explore Topic <ArrowRight size={17} />
                </Link>
              </article>
            );
          })}
        </div>
      </section>

      {/* FISCAL POLICY CONNECTION */}
      <section className="mx-auto max-w-6xl px-5 pb-12 sm:px-8 sm:pb-16">
        <div className="overflow-hidden rounded-3xl border border-indigo-200 bg-gradient-to-r from-indigo-50 via-white to-blue-50 p-6 sm:p-9">
          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white px-3 py-1.5 text-sm font-bold text-indigo-700">
                <Scale size={16} />
                Related Economics Topic
              </div>
              <h2 className="text-2xl font-bold sm:text-3xl">
                Monetary Policy vs Fiscal Policy
              </h2>
              <p className="mt-3 max-w-2xl leading-7 text-slate-600">
                Monetary policy is conducted by the central bank, while fiscal
                policy concerns government taxation and spending. Both can
                influence aggregate demand, but they use different tools and
                operate through different channels.
              </p>
            </div>

            <Link
              href="/economics/fiscal-policy"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-700 px-5 py-3 font-bold text-white transition hover:bg-indigo-800"
            >
              Explore Fiscal Policy <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-4xl px-5 py-12 sm:px-8 sm:py-16">
          <div className="mb-8 text-center">
            <div className="mb-3 inline-flex rounded-xl bg-blue-50 p-3 text-blue-700">
              <CircleHelp size={25} />
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                question: "Who conducts monetary policy in India?",
                answer:
                  "The Reserve Bank of India (RBI) conducts monetary policy in India within the applicable legal and institutional framework. Its Monetary Policy Committee plays a central role in setting the policy repo rate.",
              },
              {
                question: "What is the main objective of monetary policy?",
                answer:
                  "Price stability is a central objective of India's monetary policy framework, while the framework also recognises the objective of keeping growth in mind. Central banks may have different mandates in other countries.",
              },
              {
                question: "Does a repo-rate cut immediately reduce every loan's interest rate?",
                answer:
                  "No. The effect depends on the loan's interest-rate terms, the lender's pricing and funding conditions, and how changes in policy rates pass through to lending rates.",
              },
              {
                question: "Is monetary policy the same as fiscal policy?",
                answer:
                  "No. Monetary policy uses central-bank instruments to influence financial conditions and the economy. Fiscal policy uses government taxation, spending and borrowing decisions.",
              },
              {
                question: "Can monetary policy control every cause of inflation?",
                answer:
                  "No. It can influence overall demand and inflation expectations, but supply shocks such as crop failures, energy disruptions or transport bottlenecks may require other responses as well.",
              },
            ].map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-slate-200 bg-white p-5 open:border-blue-200 open:bg-blue-50/40"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-slate-900">
                  {faq.question}
                  <span className="text-xl text-blue-700 transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 leading-7 text-slate-600">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="border-t border-blue-100 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="mx-auto max-w-5xl px-5 py-12 text-center sm:px-8 sm:py-16">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-blue-700 shadow-sm">
            <Landmark size={28} />
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Understand the Decisions That Shape the Economy
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
            Explore the RBI, interest rates and monetary policy tools to
            understand how central-bank decisions can influence borrowing,
            inflation and economic activity.
          </p>
          <Link
            href="/economics/monetary-policy/what-is-monetary-policy"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-blue-700 px-6 py-3 font-bold text-white transition hover:bg-blue-800"
          >
            Begin With The Basics <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
