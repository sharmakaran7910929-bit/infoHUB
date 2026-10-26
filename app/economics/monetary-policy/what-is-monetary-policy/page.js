
import Link from "next/link";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Banknote,
  BookOpen,
  CheckCircle2,
  CircleDollarSign,
  Factory,
  Gauge,
  Landmark,
  Lightbulb,
  Scale,
  ShieldCheck,
  TrendingDown,
  TrendingUp,
  Wallet,
} from "lucide-react";
import AdSlot from "../../../../components/AdSlot";

export const metadata = {
  title: "What Is Monetary Policy? Meaning, Objectives & Examples",
  description:
    "Learn what monetary policy means, how the RBI uses interest rates and other tools, its objectives, types, and effects on inflation, borrowing, and economic growth.",
  alternates: {
    canonical:
      "https://www.pricetag.co.in/economics/monetary-policy/what-is-monetary-policy",
  },
  openGraph: {
    title: "What Is Monetary Policy? | PriceTag HUB",
    description:
      "Understand monetary policy, its objectives, tools, and how central bank decisions affect inflation, loans, spending, and economic growth.",
    url: "https://www.pricetag.co.in/economics/monetary-policy/what-is-monetary-policy",
    type: "article",
  },
};

const sections = [
  { id: "meaning", label: "Meaning" },
  { id: "objectives", label: "Objectives" },
  { id: "working", label: "How It Works" },
  { id: "types", label: "Types" },
  { id: "tools", label: "Tools" },
  { id: "india", label: "India & RBI" },
  { id: "comparison", label: "Fiscal vs Monetary" },
  { id: "limitations", label: "Limitations" },
  { id: "faq", label: "FAQs" },
];

const objectives = [
  {
    icon: ShieldCheck,
    title: "Price Stability",
    description:
      "Keep inflation under control so that money retains its purchasing power and prices do not rise excessively.",
    color: "blue",
  },
  {
    icon: TrendingUp,
    title: "Sustainable Economic Growth",
    description:
      "Support economic activity by influencing borrowing costs, investment, consumption, and aggregate demand.",
    color: "emerald",
  },
  {
    icon: Factory,
    title: "Employment and Economic Activity",
    description:
      "Help create conditions in which businesses can invest, expand production, and generate employment.",
    color: "violet",
  },
  {
    icon: Scale,
    title: "Financial Stability",
    description:
      "Help maintain orderly financial conditions while balancing inflation, credit growth, and economic risks.",
    color: "amber",
  },
];

const tools = [
  {
    number: "01",
    title: "Policy Interest Rates",
    icon: Gauge,
    description:
      "Central banks influence short-term interest rates. In India, the RBI's repo rate is an important policy rate that influences borrowing conditions across the economy.",
    example:
      "When policy rates rise, banks may increase lending rates, making some loans more expensive.",
  },
  {
    number: "02",
    title: "Cash Reserve Ratio (CRR)",
    icon: Banknote,
    description:
      "The CRR determines the proportion of a bank's net demand and time liabilities that must be maintained as cash reserves with the RBI.",
    example:
      "An increase in CRR can reduce the funds banks have available for lending, all else being equal.",
  },
  {
    number: "03",
    title: "Open Market Operations",
    icon: CircleDollarSign,
    description:
      "The RBI purchases or sells government securities to influence banking-system liquidity and monetary conditions.",
    example:
      "Purchasing government securities generally injects liquidity into the banking system.",
  },
  {
    number: "04",
    title: "Liquidity Facilities",
    icon: Wallet,
    description:
      "Central bank lending and liquidity facilities help eligible financial institutions manage short-term funding needs.",
    example:
      "Access to central bank liquidity can help banks manage temporary funding pressures.",
  },
  {
    number: "05",
    title: "Other Regulatory and Policy Measures",
    icon: Landmark,
    description:
      "Central banks can use standing facilities, reserve requirements, communication, and selected regulatory measures to influence financial conditions.",
    example:
      "Policy guidance can shape expectations about future interest rates and inflation.",
  },
];

const faqs = [
  {
    question: "What is monetary policy in simple words?",
    answer:
      "Monetary policy is how a central bank influences interest rates, money and credit conditions, and liquidity to help maintain price stability and support the economy.",
  },
  {
    question: "Who controls monetary policy in India?",
    answer:
      "The Reserve Bank of India (RBI) is responsible for monetary policy in India. Under the statutory monetary policy framework, the Monetary Policy Committee (MPC) determines the policy repo rate required to achieve the inflation target.",
  },
  {
    question: "What are the two main types of monetary policy?",
    answer:
      "Expansionary monetary policy aims to support economic activity through easier monetary conditions. Contractionary monetary policy aims to restrain inflationary pressure through tighter monetary conditions.",
  },
  {
    question: "How does monetary policy control inflation?",
    answer:
      "When inflationary pressure is persistent, a central bank may raise policy rates or tighten liquidity. Higher borrowing costs can moderate credit growth, spending, and investment, reducing demand-side pressure on prices over time.",
  },
  {
    question: "Is monetary policy the same as fiscal policy?",
    answer:
      "No. Monetary policy is conducted by a central bank and influences interest rates and monetary conditions. Fiscal policy involves government taxation, spending, borrowing, and transfers.",
  },
  {
    question: "Does a repo rate cut always reduce loan EMIs?",
    answer:
      "No. The effect depends on the loan's interest-rate structure, benchmark, reset schedule, lender decisions, and other market conditions. A rate cut does not automatically reduce every borrower's EMI immediately.",
  },
];

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mb-7 max-w-3xl">
      <p className="mb-2 text-sm font-bold uppercase tracking-[0.16em] text-blue-700">
        {eyebrow}
      </p>
      <h2 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-base leading-7 text-slate-600">
          {description}
        </p>
      )}
    </div>
  );
}

function InfoCard({ icon: Icon, title, children }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
        <Icon size={22} />
      </div>
      <h3 className="text-lg font-bold text-slate-950">{title}</h3>
      <div className="mt-2 text-sm leading-6 text-slate-600">{children}</div>
    </div>
  );
}

export default function WhatIsMonetaryPolicyPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-blue-100 bg-gradient-to-br from-blue-50 via-white to-sky-100">
        <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16 lg:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-[1.25fr_0.75fr]">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-3 py-1.5 text-sm font-bold text-blue-800">
                <BookOpen size={16} />
                Economics · Monetary Policy
              </div>

              <h1 className="max-w-3xl text-3xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl">
                What Is Monetary Policy?
                <span className="mt-2 block text-blue-700">
                  Meaning, Objectives, Tools and Examples
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-700 sm:text-lg">
                Why do interest rates change? How does the RBI influence
                inflation? And why can a central bank&apos;s decisions affect
                home loans, businesses, jobs, and everyday spending?
                Monetary policy helps explain these connections.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="#meaning"
                  className="inline-flex items-center gap-2 rounded-xl bg-blue-700 px-5 py-3 font-bold text-white transition hover:bg-blue-800"
                >
                  Understand the Basics
                  <ArrowRight size={18} />
                </a>
                <a
                  href="#working"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 font-bold text-slate-800 transition hover:border-blue-400"
                >
                  See How It Works
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-blue-100 bg-white/90 p-6 shadow-lg shadow-blue-900/5 sm:p-8">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold text-blue-700">
                    The Central Idea
                  </p>
                  <h2 className="mt-1 text-xl font-bold text-slate-950">
                    Policy to the Economy
                  </h2>
                </div>
                <div className="rounded-2xl bg-blue-50 p-3 text-blue-700">
                  <Landmark size={28} />
                </div>
              </div>

              <div className="space-y-3">
                {[
                  {
                    title: "Central bank decision",
                    detail: "Policy rates and liquidity",
                  },
                  {
                    title: "Banking and financial conditions",
                    detail: "Loan rates and credit availability",
                  },
                  {
                    title: "Households and businesses",
                    detail: "Spending and investment decisions",
                  },
                  {
                    title: "The wider economy",
                    detail: "Demand, output, jobs and inflation",
                  },
                ].map((item, index) => (
                  <div key={item.title}>
                    <div className="rounded-xl border border-slate-200 bg-slate-50 p-3.5">
                      <p className="font-bold text-slate-900">
                        {item.title}
                      </p>
                      <p className="mt-1 text-sm text-slate-600">
                        {item.detail}
                      </p>
                    </div>
                    {index < 3 && (
                      <div className="flex justify-center py-1.5 text-blue-600">
                        <ArrowDownRight size={20} />
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <p className="mt-4 text-xs leading-5 text-slate-500">
                Simplified illustration. Actual effects depend on expectations,
                bank lending, economic conditions, and the source of inflation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK ANSWER */}
      <section className="mx-auto max-w-6xl px-5 py-10 sm:px-8">
        <div className="rounded-2xl border border-blue-200 bg-blue-50/70 p-6 sm:p-8">
          <p className="mb-2 text-sm font-bold uppercase tracking-wider text-blue-800">
            Quick Answer
          </p>
          <p className="text-lg leading-8 text-slate-800">
            <strong>Monetary policy</strong> refers to the actions taken by a
            central bank to influence interest rates, liquidity, and monetary
            and credit conditions in an economy. Its main purpose is to
            maintain price stability while supporting sustainable economic
            growth, subject to the central bank&apos;s legal mandate.
          </p>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            In India, monetary policy is the responsibility of the Reserve Bank
            of India (RBI), with the policy repo rate determined by its
            Monetary Policy Committee under the statutory framework.
          </p>
        </div>
      </section>

      {/* CONTENT NAVIGATION */}
      <section className="mx-auto max-w-6xl px-5 pb-8 sm:px-8">
        <div className="rounded-2xl border border-slate-200 p-5">
          <h2 className="mb-4 font-bold text-slate-950">
            On This Page
          </h2>
          <nav aria-label="Article sections" className="flex flex-wrap gap-2">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-bold text-slate-700 transition hover:border-blue-300 hover:bg-blue-50 hover:text-blue-800"
              >
                {section.label}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* MEANING */}
      <section
        id="meaning"
        className="scroll-mt-8 mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16"
      >
        <SectionHeading
          eyebrow="01 · Meaning"
          title="What Does Monetary Policy Mean?"
          description="Monetary policy connects central bank decisions with the financial conditions faced by households, banks, and businesses."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-4 text-base leading-8 text-slate-700">
            <p>
              Every economy depends on money and credit. People borrow to buy
              homes, businesses borrow to expand, and households save part of
              their income. Interest rates influence the cost of borrowing and
              the reward for saving.
            </p>
            <p>
              A central bank uses monetary policy to influence these financial
              conditions. Depending on inflation and economic activity, it may
              make monetary conditions easier or tighter.
            </p>
            <p>
              Monetary policy does not directly decide the price of every
              product or determine every bank loan. Instead, it influences
              financial incentives and overall demand, often with a delay.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-7">
            <h3 className="text-xl font-bold text-slate-950">
              A Simple Example
            </h3>
            <p className="mt-3 leading-7 text-slate-700">
              Imagine inflation remains persistently high because demand is
              growing faster than the economy&apos;s ability to supply goods
              and services. The central bank may raise its policy interest
              rate.
            </p>
            <div className="mt-5 space-y-3">
              {[
                "Some borrowing becomes more expensive.",
                "Households may postpone certain purchases.",
                "Businesses may reconsider some investments.",
                "Demand and inflationary pressure may ease over time.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    size={20}
                    className="mt-1 shrink-0 text-blue-700"
                  />
                  <p className="text-sm leading-6 text-slate-700">{item}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs leading-5 text-slate-500">
              This is an illustrative chain, not a guaranteed outcome. Supply
              shocks, expectations, and other conditions can change the result.
            </p>
          </div>
        </div>
      </section>
<AdSlot />
      {/* OBJECTIVES */}
      <section
        id="objectives"
        className="scroll-mt-8 border-y border-slate-100 bg-slate-50 py-12 sm:py-16"
      >
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="02 · Objectives"
            title="What Are the Main Objectives of Monetary Policy?"
            description="The exact mandate differs across countries, but price stability is a central objective of modern monetary policy."
          />

          <div className="grid gap-4 sm:grid-cols-2">
            {objectives.map((item) => (
              <InfoCard
                key={item.title}
                icon={item.icon}
                title={item.title}
              >
                {item.description}
              </InfoCard>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5">
            <div className="flex items-start gap-3">
              <Lightbulb
                size={22}
                className="mt-1 shrink-0 text-amber-700"
              />
              <div>
                <h3 className="font-bold text-slate-950">
                  An Important Distinction
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-700">
                  A central bank cannot permanently create real economic growth
                  simply by making money or credit easier to obtain. Monetary
                  policy can influence short-term economic activity, but
                  long-term growth also depends on productivity, skills,
                  infrastructure, technology, and productive capacity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WORKING */}
      <section
        id="working"
        className="scroll-mt-8 mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16"
      >
        <SectionHeading
          eyebrow="03 · Mechanism"
          title="How Does Monetary Policy Work?"
          description="The transmission mechanism explains how a change in monetary policy can influence the wider economy."
        />

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50/60 p-5 sm:p-6">
            <div className="mb-4 flex items-center gap-3">
              <div className="rounded-xl bg-emerald-100 p-2.5 text-emerald-800">
                <TrendingDown size={24} />
              </div>
              <div>
                <p className="text-sm font-bold text-emerald-800">
                  Easier Monetary Conditions
                </p>
                <h3 className="text-xl font-bold text-slate-950">
                  Supporting Demand
                </h3>
              </div>
            </div>
            <ol className="space-y-3">
              {[
                "The central bank reduces policy rates or otherwise eases monetary conditions.",
                "Market interest rates and borrowing costs may decline.",
                "Some households and businesses borrow, spend, or invest more.",
                "Aggregate demand and economic activity may strengthen.",
              ].map((item, index) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-sm font-bold text-emerald-800 ring-1 ring-emerald-200">
                    {index + 1}
                  </span>
                  <p className="text-sm leading-6 text-slate-700">{item}</p>
                </li>
              ))}
            </ol>
            <p className="mt-4 text-xs leading-5 text-slate-600">
              Easier policy can also increase inflationary pressure if demand
              grows faster than supply.
            </p>
          </div>

          <div className="rounded-2xl border border-rose-200 bg-rose-50/60 p-5 sm:p-6">
            <div className="mb-4 flex items-center gap-3">
              <div className="rounded-xl bg-rose-100 p-2.5 text-rose-800">
                <TrendingUp size={24} />
              </div>
              <div>
                <p className="text-sm font-bold text-rose-800">
                  Tighter Monetary Conditions
                </p>
                <h3 className="text-xl font-bold text-slate-950">
                  Moderating Demand
                </h3>
              </div>
            </div>
            <ol className="space-y-3">
              {[
                "The central bank raises policy rates or tightens monetary conditions.",
                "Market interest rates and borrowing costs may increase.",
                "Some households and businesses reduce borrowing or postpone spending.",
                "Demand-driven inflationary pressure may gradually moderate.",
              ].map((item, index) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-sm font-bold text-rose-800 ring-1 ring-rose-200">
                    {index + 1}
                  </span>
                  <p className="text-sm leading-6 text-slate-700">{item}</p>
                </li>
              ))}
            </ol>
            <p className="mt-4 text-xs leading-5 text-slate-600">
              Tighter policy may also slow economic activity and increase
              borrowing costs for businesses and households.
            </p>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-5 sm:p-6">
          <h3 className="font-bold text-slate-950">
            Why Do the Effects Take Time?
          </h3>
          <p className="mt-2 text-sm leading-7 text-slate-700">
            Banks may adjust lending rates at different speeds. Existing
            borrowers may have fixed rates or delayed rate resets. Businesses
            also need time to change investment plans, while consumer prices
            respond to both demand and supply conditions. Monetary policy
            therefore works through several channels and with variable lags.
          </p>
        </div>
      </section>

      {/* TYPES */}
      <section
        id="types"
        className="scroll-mt-8 border-y border-slate-100 bg-slate-50 py-12 sm:py-16"
      >
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="04 · Types"
            title="What Are the Two Main Types of Monetary Policy?"
            description="The direction of policy depends on economic conditions, inflation, and the central bank's assessment of risks."
          />

          <div className="grid gap-5 md:grid-cols-2">
            <article className="rounded-2xl border border-emerald-200 bg-white p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
                <ArrowDownRight size={27} />
              </div>
              <h3 className="text-xl font-bold text-slate-950">
                Expansionary Monetary Policy
              </h3>
              <p className="mt-3 leading-7 text-slate-700">
                Expansionary policy aims to support economic activity by
                easing monetary and credit conditions. It may be considered
                when demand is weak or economic activity needs support.
              </p>
              <div className="mt-5 rounded-xl bg-emerald-50 p-4">
                <p className="text-sm font-bold text-emerald-900">
                  Possible measures
                </p>
                <ul className="mt-2 list-inside list-disc space-y-1.5 text-sm leading-6 text-slate-700">
                  <li>Reduce policy interest rates.</li>
                  <li>Inject liquidity through appropriate operations.</li>
                  <li>Support the flow of credit through financial markets.</li>
                </ul>
              </div>
              <Link
                href="/economics/monetary-policy/expansionary-monetary-policy"
                className="mt-5 inline-flex items-center gap-2 font-bold text-emerald-800 hover:underline"
              >
                Explore Expansionary Policy <ArrowRight size={17} />
              </Link>
            </article>

            <article className="rounded-2xl border border-rose-200 bg-white p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-rose-50 text-rose-700">
                <ArrowUpRight size={27} />
              </div>
              <h3 className="text-xl font-bold text-slate-950">
                Contractionary Monetary Policy
              </h3>
              <p className="mt-3 leading-7 text-slate-700">
                Contractionary policy aims to moderate demand and inflationary
                pressure by tightening monetary and credit conditions. It may
                be considered when inflation is persistently too high.
              </p>
              <div className="mt-5 rounded-xl bg-rose-50 p-4">
                <p className="text-sm font-bold text-rose-900">
                  Possible measures
                </p>
                <ul className="mt-2 list-inside list-disc space-y-1.5 text-sm leading-6 text-slate-700">
                  <li>Increase policy interest rates.</li>
                  <li>Withdraw excess liquidity where appropriate.</li>
                  <li>Make financial conditions less accommodative.</li>
                </ul>
              </div>
              <Link
                href="/economics/monetary-policy/contractionary-monetary-policy"
                className="mt-5 inline-flex items-center gap-2 font-bold text-rose-800 hover:underline"
              >
                Explore Contractionary Policy <ArrowRight size={17} />
              </Link>
            </article>
          </div>
        </div>
      </section>
<AdSlot />
      {/* TOOLS */}
      <section
        id="tools"
        className="scroll-mt-8 mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16"
      >
        <SectionHeading
          eyebrow="05 · Instruments"
          title="What Are the Tools of Monetary Policy?"
          description="Central banks use interest rates, liquidity operations, reserve requirements, and other measures to influence financial conditions."
        />

        <div className="space-y-4">
          {tools.map((tool) => {
            const Icon = tool.icon;

            return (
              <article
                key={tool.number}
                className="grid gap-4 rounded-2xl border border-slate-200 p-5 transition hover:border-blue-200 hover:shadow-sm sm:grid-cols-[64px_1fr] sm:p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                  <Icon size={24} />
                </div>

                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-sm font-bold text-blue-700">
                      TOOL {tool.number}
                    </span>
                    <h3 className="text-lg font-bold text-slate-950">
                      {tool.title}
                    </h3>
                  </div>

                  <p className="mt-2 leading-7 text-slate-700">
                    {tool.description}
                  </p>

                  <div className="mt-3 rounded-xl bg-slate-50 p-3.5">
                    <p className="text-sm leading-6 text-slate-700">
                      <strong>Example:</strong> {tool.example}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5">
          <p className="text-sm leading-7 text-slate-700">
            <strong>Note on terminology:</strong> The statutory liquidity ratio
            (SLR), repo rate, CRR, and open market operations are not
            interchangeable. The SLR is a bank liquidity requirement, while
            the repo rate is a policy rate and open market operations are
            transactions in securities. Their roles and effects differ.
          </p>
        </div>

        
      </section>

      {/* INDIA */}
      <section
        id="india"
        className="scroll-mt-8 border-y border-slate-100 bg-slate-50 py-12 sm:py-16"
      >
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="06 · India"
            title="How Does Monetary Policy Work in India?"
            description="The Reserve Bank of India manages monetary policy within India's legal and institutional framework."
          />

          <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-700 to-blue-900 p-6 text-white sm:p-8">
              <Landmark size={34} />
              <h3 className="mt-5 text-2xl font-bold">
                Reserve Bank of India
              </h3>
              <p className="mt-3 leading-7 text-blue-50">
                The RBI conducts monetary policy to achieve the objectives
                established by India's monetary policy framework, with price
                stability as the primary objective and growth considerations
                taken into account.
              </p>
              <div className="mt-6 rounded-xl border border-white/20 bg-white/10 p-4">
                <p className="text-sm font-bold">Key institution</p>
                <p className="mt-1 text-sm leading-6 text-blue-50">
                  Monetary Policy Committee (MPC)
                </p>
              </div>
              <a
                href="https://www.rbi.org.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 font-bold text-white underline decoration-white/60 underline-offset-4 hover:decoration-white"
              >
                Visit the official RBI website <ArrowRight size={17} />
              </a>
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <h3 className="font-bold text-slate-950">
                  1. Inflation Targeting
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  India's flexible inflation-targeting framework uses the
                  Consumer Price Index (CPI) as its inflation measure. The
                  notified target for April 2021 to March 2026 was 4%, with a
                  tolerance band of 2% to 6%. Check the latest official
                  notification for the target applicable after March 2026.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <h3 className="font-bold text-slate-950">
                  2. Monetary Policy Committee
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  The MPC determines the policy repo rate needed to achieve
                  the inflation target. Its decisions are made under the
                  framework established by the Reserve Bank of India Act.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <h3 className="font-bold text-slate-950">
                  3. Transmission to Borrowers
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  Changes in the policy rate can influence banks' funding
                  costs, lending rates, deposit rates, credit demand, and
                  financial-market conditions. The size and speed of the
                  effect vary across borrowers and lenders.
                </p>
              </div>
            </div>
          </div>

          <p className="mt-5 text-sm leading-6 text-slate-500">
            For current policy decisions, rates, and official inflation-target
            notifications, consult the RBI rather than relying on a static
            educational article.
          </p>
        </div>
      </section>

      {/* FISCAL COMPARISON */}
      <section
        id="comparison"
        className="scroll-mt-8 mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16"
      >
        <SectionHeading
          eyebrow="07 · Comparison"
          title="Monetary Policy vs Fiscal Policy"
          description="Both influence the economy, but they use different institutions and instruments."
        />

        <div className="overflow-x-auto rounded-2xl border border-slate-200">
          <table className="w-full min-w-[620px] border-collapse text-left text-sm">
            <thead>
              <tr className="bg-slate-100">
                <th className="p-4 font-bold text-slate-950">Basis</th>
                <th className="p-4 font-bold text-blue-800">
                  Monetary Policy
                </th>
                <th className="p-4 font-bold text-violet-800">
                  Fiscal Policy
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {[
                [
                  "Main authority",
                  "Central bank",
                  "Government and legislature under the applicable framework",
                ],
                [
                  "Main instruments",
                  "Interest rates, liquidity, reserve requirements",
                  "Taxes, government spending, transfers and borrowing",
                ],
                [
                  "Direct channel",
                  "Financial conditions and credit",
                  "Public revenue and expenditure",
                ],
                [
                  "Inflation impact",
                  "Influences demand through monetary conditions",
                  "Can influence demand through taxation and spending",
                ],
                [
                  "Example",
                  "The RBI changes the policy repo rate",
                  "The government changes public infrastructure spending",
                ],
              ].map(([basis, monetary, fiscal]) => (
                <tr key={basis} className="bg-white">
                  <th className="p-4 align-top font-bold text-slate-800">
                    {basis}
                  </th>
                  <td className="p-4 align-top leading-6 text-slate-600">
                    {monetary}
                  </td>
                  <td className="p-4 align-top leading-6 text-slate-600">
                    {fiscal}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          <Link
            href="/economics/fiscal-policy/what-is-fiscal-policy"
            className="group rounded-2xl border border-slate-200 p-5 transition hover:border-blue-300 hover:bg-blue-50/40"
          >
            <p className="text-sm font-bold text-slate-500">
              RELATED ECONOMICS TOPIC
            </p>
            <h3 className="mt-2 text-lg font-bold text-slate-950">
              What Is Fiscal Policy?
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Understand government taxation, spending, deficits, and their
              effects on the economy.
            </p>
            <span className="mt-3 inline-flex items-center gap-2 font-bold text-blue-800">
              Read the guide <ArrowRight size={17} />
            </span>
          </Link>

          <Link
            href="/economics/inflation"
            className="group rounded-2xl border border-slate-200 p-5 transition hover:border-blue-300 hover:bg-blue-50/40"
          >
            <p className="text-sm font-bold text-slate-500">
              RELATED ECONOMICS TOPIC
            </p>
            <h3 className="mt-2 text-lg font-bold text-slate-950">
              Inflation
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Explore why prices rise, how inflation is measured, and its
              effects on purchasing power.
            </p>
            <span className="mt-3 inline-flex items-center gap-2 font-bold text-blue-800">
              Explore inflation <ArrowRight size={17} />
            </span>
          </Link>
        </div>
      </section>
<AdSlot />
      {/* LIMITATIONS */}
      <section
        id="limitations"
        className="scroll-mt-8 border-y border-slate-100 bg-slate-50 py-12 sm:py-16"
      >
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="08 · Limitations"
            title="What Can Monetary Policy Not Do?"
            description="Monetary policy is powerful, but it cannot solve every economic problem on its own."
          />

          <div className="grid gap-4 md:grid-cols-3">
            <InfoCard icon={Factory} title="Supply Shortages">
              Higher interest rates cannot directly produce more food, fuel,
              electricity, or other goods. Supply-side problems may require
              different responses.
            </InfoCard>

            <InfoCard icon={Wallet} title="Uneven Effects">
              Higher borrowing costs affect indebted households and businesses
              differently from savers and borrowers with fixed-rate loans.
            </InfoCard>

            <InfoCard icon={Gauge} title="Policy Lags">
              Interest-rate changes may take months or longer to influence
              spending, employment, output, and inflation fully.
            </InfoCard>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        id="faq"
        className="scroll-mt-8 mx-auto max-w-4xl px-5 py-12 sm:px-8 sm:py-16"
      >
        <SectionHeading
          eyebrow="09 · Frequently Asked Questions"
          title="Monetary Policy FAQs"
          description="Quick answers to common questions about monetary policy and its role in the economy."
        />

        <div className="space-y-3">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-2xl border border-slate-200 bg-white p-5 open:border-blue-200 open:bg-blue-50/30"
            >
              <summary className="cursor-pointer list-none font-bold leading-7 text-slate-950 marker:hidden">
                <span className="flex items-center justify-between gap-4">
                  {faq.question}
                  <span className="shrink-0 text-xl text-blue-700 transition group-open:rotate-45">
                    +
                  </span>
                </span>
              </summary>
              <p className="mt-3 pr-2 text-sm leading-7 text-slate-600">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* CONCLUSION */}
      <section className="border-t border-blue-100 bg-gradient-to-br from-blue-50 via-white to-sky-50">
        <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
          <div className="rounded-3xl border border-blue-100 bg-white p-6 shadow-sm sm:p-9">
            <div className="flex items-start gap-4">
              <div className="hidden rounded-2xl bg-blue-50 p-3 text-blue-700 sm:block">
                <BookOpen size={30} />
              </div>
              <div>
                <p className="text-sm font-bold uppercase tracking-wider text-blue-700">
                  Key Takeaway
                </p>
                <h2 className="mt-2 text-2xl font-bold text-slate-950">
                  Why Monetary Policy Matters
                </h2>
                <p className="mt-4 max-w-3xl leading-8 text-slate-700">
                  Monetary policy shapes the financial conditions under which
                  households save and borrow and businesses invest and expand.
                  By influencing interest rates, liquidity, and credit
                  conditions, central banks aim to maintain price stability
                  and support a healthy economy. Its success depends on the
                  economic situation, policy credibility, and how financial
                  markets and the public respond.
                </p>
              </div>
            </div>

            
          </div>

          <p className="mt-6 text-xs leading-5 text-slate-500">
            Educational content only. Monetary policy frameworks and
            regulations may change. Refer to official RBI publications for
            current policy decisions and applicable targets.
          </p>
        </div>
      </section>
    </main>
  );
}
