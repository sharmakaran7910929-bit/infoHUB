
import Link from "next/link";
import {
  Activity,
  AlertTriangle,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  BookOpen,
  BriefcaseBusiness,
  CheckCircle2,
  CircleHelp,
  Factory,
  Fuel,
  Gauge,
  Globe2,
  Landmark,
  Lightbulb,
  Package,
  ShoppingBasket,
  TrendingDown,
  TrendingUp,
  Users,
  Wallet,
  XCircle,PiggyBank
} from "lucide-react";
import AdSlot from "../../../../components/AdSlot";

export const metadata = {
  title:
    "Stagflation Explained: Meaning, Real Examples, Causes & Comparison",
  description:
    "Learn what stagflation means, why inflation can rise while growth slows, real examples from the 1970s, and the differences between stagflation, hyperinflation, headline inflation and core inflation.",
  alternates: {
    canonical:
      "https://www.pricetag.co.in/economics/inflation/stagflation",
  },
  openGraph: {
    title: "Stagflation Explained With Real Examples | PriceTag HUB",
    description:
      "Understand stagflation, oil-price shocks, slow economic growth, unemployment, and how stagflation differs from hyperinflation, headline inflation and core inflation.",
    url: "https://www.pricetag.co.in/economics/inflation/stagflation",
    type: "article",
  },
};

const toc = [
  { id: "meaning", label: "What Is Stagflation?" },
  { id: "example", label: "A Real-Life Example" },
  { id: "history", label: "The 1970s Stagflation" },
  { id: "causes", label: "Causes of Stagflation" },
  { id: "comparison", label: "Stagflation vs Other Inflation Terms" },
  { id: "headline-core", label: "Headline vs Core Inflation" },
  { id: "effects", label: "Effects on People and Businesses" },
  { id: "policy", label: "How Can It Be Controlled?" },
  { id: "india", label: "Could It Happen in India?" },
  { id: "faq", label: "Frequently Asked Questions" },
];

const faqs = [
  {
    q: "What is stagflation in simple words?",
    a: "Stagflation is a difficult economic situation in which inflation remains high while economic growth is weak and unemployment is high or rising. People face increasing prices even as jobs and income opportunities become harder to find.",
  },
  {
    q: "What is the difference between stagflation and hyperinflation?",
    a: "Stagflation describes a combination of rising prices and a weak economy with labour-market problems. Hyperinflation describes an extremely rapid and severe increase in prices. An economy can have stagflation without hyperinflation.",
  },
  {
    q: "What is the difference between headline and core inflation?",
    a: "Headline inflation includes the broad consumer basket, including food and energy. Core inflation excludes selected volatile items, commonly food and energy, to help analysts assess underlying price pressures. The exact definition depends on the measure used.",
  },
  {
    q: "What caused stagflation in the 1970s?",
    a: "The 1970s experience involved major oil-price shocks, pre-existing inflationary pressures, policy decisions, and changing inflation expectations. Higher energy costs contributed to rising prices and weakened economic activity. Economists continue to debate the relative importance of different causes.",
  },
  {
    q: "Does high inflation always mean stagflation?",
    a: "No. High inflation can occur during strong economic growth. Stagflation requires the additional problem of weak or stagnant economic activity and high or rising unemployment.",
  },
  {
    q: "Can core inflation rise during an oil crisis?",
    a: "Yes. Core inflation may initially exclude direct energy prices, but higher fuel and transport costs can raise the prices of other goods and services over time. The extent depends on how strongly those costs spread through the economy.",
  },
  {
    q: "Is stagflation the same as a recession?",
    a: "No. A recession concerns a significant decline in economic activity. Stagflation concerns the combination of weak growth and high inflation, usually alongside labour-market weakness. A recession can occur with low inflation, and stagflation can describe a broader period of weak growth and persistent inflation.",
  },
  {
    q: "How can governments respond to stagflation?",
    a: "Responses can include measures to stabilise inflation expectations, targeted support for vulnerable households, and policies that improve productivity and supply. The right mix depends on the causes of the episode; there is no single solution that removes every trade-off.",
  },
  {
    q: "Does India currently have stagflation?",
    a: "It is not appropriate to label an economy as experiencing stagflation based on inflation alone. The assessment needs current data on inflation, real GDP growth, employment, and the persistence of these conditions. This article explains the concept rather than making a real-time diagnosis.",
  },
];

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mb-8 max-w-3xl">
      <p className="mb-2 text-sm font-bold uppercase tracking-wider text-blue-700">
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

function InfoCard({ icon: Icon, title, children, tone = "blue" }) {
  const toneClasses = {
    blue: "bg-blue-50 text-blue-700",
    red: "bg-red-50 text-red-700",
    green: "bg-emerald-50 text-emerald-700",
    amber: "bg-amber-50 text-amber-800",
    violet: "bg-violet-50 text-violet-700",
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
      <div
        className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl ${toneClasses[tone]}`}
      >
        <Icon size={22} />
      </div>
      <h3 className="text-lg font-bold text-slate-950">{title}</h3>
      <div className="mt-3 text-sm leading-7 text-slate-600">{children}</div>
    </div>
  );
}

function ComparisonCell({ children, highlight = false }) {
  return (
    <td
      className={`p-4 align-top text-sm leading-6 ${
        highlight ? "bg-blue-50 font-bold text-blue-950" : "text-slate-600"
      }`}
    >
      {children}
    </td>
  );
}

export default function StagflationPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* HERO */}
      <section className="overflow-hidden border-b border-blue-100 bg-gradient-to-br from-blue-50 via-white to-rose-50">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <div>
            <div className="mb-5 flex flex-wrap items-center gap-3 text-sm">
              <span className="rounded-full border border-blue-200 bg-white px-3 py-1.5 font-bold text-blue-800">
                Economics · Inflation
              </span>
              <span className="text-slate-500">The Complete Guide</span>
            </div>

            <h1 className="text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl">
              Stagflation: When Prices Rise but the Economy Struggles
            </h1>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              Imagine groceries and fuel becoming more expensive while
              businesses cut production, job opportunities shrink, and salary
              increases fail to keep up. That combination explains why
              stagflation is one of the most challenging situations for an
              economy.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#meaning"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-700 px-5 py-3 font-bold text-white transition hover:bg-blue-800"
              >
                Understand Stagflation
                <ArrowRight size={18} />
              </a>
              <a
                href="#comparison"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 font-bold text-slate-800 transition hover:bg-slate-50"
              >
                Compare the Terms
              </a>
            </div>

            <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-600">
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 size={16} className="text-emerald-600" />
                Historical example
              </span>
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 size={16} className="text-emerald-600" />
                Four-way comparison
              </span>
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 size={16} className="text-emerald-600" />
                Indian household context
              </span>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-xl sm:p-7">
            <p className="text-sm font-bold uppercase tracking-wider text-slate-500">
              The economic squeeze
            </p>
            <h2 className="mt-2 text-2xl font-bold text-slate-950">
              Three problems at once
            </h2>

            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-4 rounded-2xl border border-red-200 bg-red-50 p-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-red-700">
                  <ShoppingBasket size={25} />
                </div>
                <div className="flex-1">
                  <p className="font-bold text-slate-950">Rising prices</p>
                  <p className="mt-1 text-sm text-slate-600">
                    Everyday essentials become more expensive.
                  </p>
                </div>
                <ArrowUpRight className="text-red-600" />
              </div>

              <div className="flex items-center gap-4 rounded-2xl border border-amber-200 bg-amber-50 p-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-amber-800">
                  <Factory size={25} />
                </div>
                <div className="flex-1">
                  <p className="font-bold text-slate-950">Weak economic growth</p>
                  <p className="mt-1 text-sm text-slate-600">
                    Production and investment struggle to expand.
                  </p>
                </div>
                <ArrowDownRight className="text-amber-700" />
              </div>

              <div className="flex items-center gap-4 rounded-2xl border border-violet-200 bg-violet-50 p-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-violet-700">
                  <Users size={25} />
                </div>
                <div className="flex-1">
                  <p className="font-bold text-slate-950">Labour-market pressure</p>
                  <p className="mt-1 text-sm text-slate-600">
                    Unemployment may rise as firms reduce hiring.
                  </p>
                </div>
                <TrendingDown className="text-violet-700" />
              </div>
            </div>

            <p className="mt-5 rounded-xl bg-slate-50 p-4 text-sm leading-6 text-slate-600">
              Stagflation is not simply high inflation. It is the combination
              of inflation with a struggling economy.
            </p>
          </div>
        </div>
      </section>

      {/* QUICK DEFINITION */}
      <section className="mx-auto max-w-6xl px-5 py-10 sm:px-8">
        <div className="rounded-2xl border border-blue-200 bg-blue-50 p-5 sm:p-7">
          <h2 className="text-xl font-bold text-slate-950">
            Stagflation in one sentence
          </h2>
          <p className="mt-3 text-base leading-8 text-slate-700">
            <strong>Stagflation is the coexistence of high inflation and weak
            economic activity, often accompanied by high or rising unemployment.</strong>
            The term combines “stagnation” and “inflation.” It is difficult
            because households face rising costs at the same time that jobs,
            income growth, and business opportunities may weaken.
          </p>
        </div>
      </section>

      {/* TOC */}
      <section className="mx-auto max-w-6xl px-5 pb-12 sm:px-8">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-7">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
              <BookOpen size={21} />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-950">
                Explore This Guide
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Jump straight to the question you want answered.
              </p>
            </div>
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {toc.map((item, index) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="flex items-center gap-3 rounded-xl border border-slate-200 p-3 transition hover:border-blue-300 hover:bg-blue-50"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-sm font-bold text-slate-700">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-sm font-bold text-slate-800">
                  {item.label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* MEANING */}
      <section id="meaning" className="scroll-mt-8 mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
        <SectionHeading
          eyebrow="01 · Meaning"
          title="What Is Stagflation?"
          description="Stagflation is a situation where prices rise while economic activity, production, and employment weaken."
        />

        <div className="grid gap-5 md:grid-cols-3">
          <InfoCard icon={TrendingUp} title="High Inflation" tone="red">
            The general price level rises, making many goods and services more
            expensive. Households need more money to maintain the same standard
            of living.
          </InfoCard>
          <InfoCard icon={Gauge} title="Stagnant Growth" tone="amber">
            Real economic output grows slowly, stops growing, or contracts.
            Businesses may delay expansion because demand or profitability is
            weak.
          </InfoCard>
          <InfoCard icon={Users} title="High or Rising Unemployment" tone="violet">
            Firms may freeze hiring, reduce shifts, or lay off workers as costs
            rise and sales weaken. Labour-market conditions can deteriorate.
          </InfoCard>
        </div>

        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 sm:p-7">
          <h3 className="text-xl font-bold text-slate-950">
            Why is this combination unusual?
          </h3>
          <p className="mt-3 leading-7 text-slate-600">
            Inflation often increases when demand is strong and the economy is
            operating near capacity. When the economy slows, demand may weaken
            and reduce pressure on prices. Stagflation occurs when inflationary
            forces persist even as growth and employment weaken.
          </p>
          <p className="mt-3 leading-7 text-slate-600">
            A major supply disruption is one possible explanation: it can
            increase production costs and prices while simultaneously reducing
            how much an economy can produce.
          </p>
        </div>
      </section>
<AdSlot />
      {/* REAL-LIFE EXAMPLE */}
      <section id="example" className="scroll-mt-8 border-y border-slate-200 bg-slate-50 py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="02 · Everyday Example"
            title="Imagine a Small Manufacturing Business"
            description="Consider a hypothetical Indian factory that makes household products. A sharp increase in fuel and transport costs can put pressure on both its prices and its business activity."
          />

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                  <Factory size={25} />
                </div>
                <div>
                  <p className="text-sm font-bold uppercase tracking-wider text-blue-700">
                    Before the shock
                  </p>
                  <h3 className="text-xl font-bold text-slate-950">
                    Business runs normally
                  </h3>
                </div>
              </div>

              <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-600">
                <li className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 shrink-0 text-emerald-600" size={19} />
                  <span>Fuel and transport costs are manageable.</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 shrink-0 text-emerald-600" size={19} />
                  <span>The factory produces its usual quantity of goods.</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 shrink-0 text-emerald-600" size={19} />
                  <span>Orders support regular shifts and hiring.</span>
                </li>
              </ul>

              <div className="mt-5 rounded-xl bg-blue-50 p-4">
                <p className="font-bold text-blue-900">
                  Result: costs and business activity are relatively stable.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-red-200 bg-white p-5 shadow-sm sm:p-7">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-red-700">
                  <Fuel size={25} />
                </div>
                <div>
                  <p className="text-sm font-bold uppercase tracking-wider text-red-700">
                    After a major supply shock
                  </p>
                  <h3 className="text-xl font-bold text-slate-950">
                    A difficult squeeze begins
                  </h3>
                </div>
              </div>

              <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-600">
                <li className="flex gap-3">
                  <ArrowUpRight className="mt-0.5 shrink-0 text-red-600" size={19} />
                  <span>Fuel, electricity, and delivery costs increase.</span>
                </li>
                <li className="flex gap-3">
                  <ArrowUpRight className="mt-0.5 shrink-0 text-red-600" size={19} />
                  <span>The factory raises prices to cover part of the extra cost.</span>
                </li>
                <li className="flex gap-3">
                  <ArrowDownRight className="mt-0.5 shrink-0 text-amber-700" size={19} />
                  <span>Customers cut orders and the business reduces production.</span>
                </li>
                <li className="flex gap-3">
                  <ArrowDownRight className="mt-0.5 shrink-0 text-amber-700" size={19} />
                  <span>Hiring slows or workers lose shifts.</span>
                </li>
              </ul>

              <div className="mt-5 rounded-xl bg-red-50 p-4">
                <p className="font-bold text-red-900">
                  Result: prices rise while business activity weakens.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5 sm:p-6">
            <h3 className="text-lg font-bold text-slate-950">
              How does this affect a family?
            </h3>
            <p className="mt-3 leading-7 text-slate-700">
              The factory worker may face fewer work hours or worry about job
              security, while the family's food, transport, and household
              expenses increase. The family can feel squeezed from both sides:
              less secure income and higher living costs.
            </p>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              This is an illustrative example of how stagflationary pressures
              can spread. One business facing higher costs does not by itself
              prove that an entire economy is experiencing stagflation.
            </p>
          </div>
        </div>
      </section>

      {/* HISTORICAL EXAMPLE */}
      <section id="history" className="scroll-mt-8 mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
        <SectionHeading
          eyebrow="03 · Historical Example"
          title="The 1970s: A Famous Period of Stagflation"
          description="The United States experienced a well-known stagflation episode during the 1970s and early 1980s. Energy-price shocks contributed to rising prices while economic activity and employment came under pressure."
        />

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="bg-slate-900 p-5 text-white sm:p-7">
              <p className="text-sm font-bold uppercase tracking-wider text-blue-200">
                Historical case study
              </p>
              <h3 className="mt-2 text-2xl font-bold">
                United States · 1970s
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Two major oil-price shocks affected energy costs and contributed
                to the economic difficulties of the period.
              </p>
            </div>
            <div className="space-y-4 p-5 sm:p-7">
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-800">
                  <Fuel size={22} />
                </div>
                <div>
                  <p className="font-bold text-slate-950">1973–1974 oil shock</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    The oil embargo and energy-market disruption drove up
                    petroleum prices and increased costs across the economy.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-50 text-red-700">
                  <TrendingUp size={22} />
                </div>
                <div>
                  <p className="font-bold text-slate-950">Inflation surged</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    Consumer prices rose sharply. Inflation exceeded 12% over
                    a 12-month period ending in November 1974, according to a
                    U.S. Congressional Research Service historical report.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-50 text-violet-700">
                  <Users size={22} />
                </div>
                <div>
                  <p className="font-bold text-slate-950">Unemployment increased</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    Unemployment reached 9% in May 1975. The period illustrates
                    how high inflation can coexist with serious labour-market
                    weakness.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                  <Landmark size={22} />
                </div>
                <div>
                  <p className="font-bold text-slate-950">Policy became difficult</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    Raising interest rates to curb inflation could weaken
                    activity further; easing policy to support activity risked
                    reinforcing inflationary pressure.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-5">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-7">
              <h3 className="text-xl font-bold text-slate-950">
                Why did an oil shock matter so much?
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Oil is used in transport, manufacturing, agriculture, and
                distribution. A sudden increase in oil prices can raise the
                cost of producing and moving many goods. Businesses may pass
                some of those costs on to customers, while higher expenses can
                also reduce output and hiring.
              </p>
              <div className="mt-5 rounded-xl bg-slate-50 p-4">
                <p className="font-bold text-slate-900">The chain reaction</p>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  Oil costs rise → production and transport become more
                  expensive → prices rise → household purchasing power is
                  squeezed → spending and production may weaken.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-blue-200 bg-blue-50 p-5 sm:p-7">
              <h3 className="text-xl font-bold text-slate-950">
                What about the second oil shock?
              </h3>
              <p className="mt-3 leading-7 text-slate-700">
                The 1979–1980 energy crisis added to inflationary pressures.
                U.S. inflation reached around 14.6% over the 12 months ending
                in May 1980, while unemployment later climbed to 10.8% in
                November 1982. Those figures show the severity of the broader
                inflation and employment problems of that era.
              </p>
            </div>

            <p className="text-sm leading-6 text-slate-500">
              Historical context: U.S. Congressional Research Service,
              “Understanding Stagflation and the Risk of Its Recurrence,” and
              Federal Reserve History, “The Great Inflation.”
            </p>
          </div>
        </div>
      </section>

      {/* CAUSES */}
      <section id="causes" className="scroll-mt-8 border-y border-slate-200 bg-slate-50 py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="04 · Causes"
            title="What Causes Stagflation?"
            description="Stagflation can arise when prices are pushed upward while the economy's ability or willingness to produce and spend is weakening. Often, more than one force is involved."
          />

          <div className="grid gap-5 md:grid-cols-2">
            <InfoCard icon={Fuel} title="1. Supply Shocks" tone="red">
              A sudden disruption in oil, gas, food, or important raw materials
              can raise costs for firms across many industries. If these costs
              spread through the economy while output suffers, stagflationary
              pressure may emerge.
            </InfoCard>

            <InfoCard icon={Factory} title="2. Higher Production Costs" tone="amber">
              More expensive electricity, transport, imported inputs, or
              intermediate goods can squeeze profit margins. Businesses may
              raise prices, reduce production, postpone investment, or limit
              hiring.
            </InfoCard>

            <InfoCard icon={Globe2} title="3. Global Disruptions" tone="violet">
              Wars, shipping interruptions, trade restrictions, or severe
              shortages can make essential inputs more expensive and less
              available. Economies that depend heavily on imports may be
              especially exposed to some disruptions.
            </InfoCard>

            <InfoCard icon={Activity} title="4. Policy and Inflation Expectations" tone="blue">
              Policy decisions and expectations can influence how long
              inflation persists. If households and firms expect prices to
              keep rising, wage and pricing decisions may reinforce inflation.
              Poorly timed policies can make stabilisation more difficult.
            </InfoCard>
          </div>

          <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5 sm:p-6">
            <h3 className="font-bold text-slate-950">
              Important: no single cause explains every episode
            </h3>
            <p className="mt-2 leading-7 text-slate-700">
              The oil shocks are a major part of the familiar 1970s story, but
              economists also examine earlier inflation, monetary and fiscal
              policy, productivity, and inflation expectations. The precise
              causes and their relative importance can be debated.
            </p>
          </div>
        </div>
      </section>
<AdSlot />
      {/* COMPARISON */}
      <section id="comparison" className="scroll-mt-8 mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
        <SectionHeading
          eyebrow="05 · Essential Comparison"
          title="Stagflation vs Hyperinflation vs Headline vs Core Inflation"
          description="These terms are related to inflation, but they do not describe the same thing. Stagflation and hyperinflation describe broader economic conditions or extreme price behaviour; headline and core inflation are ways of measuring price changes."
        />

        <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
          <table className="w-full min-w-[880px] border-collapse text-left">
            <thead>
              <tr className="bg-slate-900 text-white">
                <th className="p-4 text-sm font-bold">Feature</th>
                <th className="p-4 text-sm font-bold">Stagflation</th>
                <th className="p-4 text-sm font-bold">Hyperinflation</th>
                <th className="p-4 text-sm font-bold">Headline Inflation</th>
                <th className="p-4 text-sm font-bold">Core Inflation</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-slate-200">
                <ComparisonCell highlight>What does it describe?</ComparisonCell>
                <ComparisonCell>Weak growth, high inflation and labour-market weakness.</ComparisonCell>
                <ComparisonCell>An extremely rapid and severe rise in prices.</ComparisonCell>
                <ComparisonCell>Price changes across a broad consumer basket.</ComparisonCell>
                <ComparisonCell>Price changes excluding selected volatile items.</ComparisonCell>
              </tr>
              <tr className="border-t border-slate-200">
                <ComparisonCell highlight>Main focus</ComparisonCell>
                <ComparisonCell>The overall economic situation.</ComparisonCell>
                <ComparisonCell>The extraordinary speed and scale of inflation.</ComparisonCell>
                <ComparisonCell>The broad consumer price experience.</ComparisonCell>
                <ComparisonCell>Underlying or less volatile price trends.</ComparisonCell>
              </tr>
              <tr className="border-t border-slate-200">
                <ComparisonCell highlight>Must growth be weak?</ComparisonCell>
                <ComparisonCell>Yes, weak or stagnant activity is central to the concept.</ComparisonCell>
                <ComparisonCell>No. The term itself concerns extreme price increases.</ComparisonCell>
                <ComparisonCell>No. It is a price measure, not a growth measure.</ComparisonCell>
                <ComparisonCell>No. It is a price measure, not a growth measure.</ComparisonCell>
              </tr>
              <tr className="border-t border-slate-200">
                <ComparisonCell highlight>Does it require high unemployment?</ComparisonCell>
                <ComparisonCell>High or rising unemployment is a common feature.</ComparisonCell>
                <ComparisonCell>No.</ComparisonCell>
                <ComparisonCell>No.</ComparisonCell>
                <ComparisonCell>No.</ComparisonCell>
              </tr>
              <tr className="border-t border-slate-200">
                <ComparisonCell highlight>Typical example</ComparisonCell>
                <ComparisonCell>U.S. stagflation in the 1970s.</ComparisonCell>
                <ComparisonCell>Germany in the early 1920s is a well-known historical case.</ComparisonCell>
                <ComparisonCell>A CPI measure including food and energy.</ComparisonCell>
                <ComparisonCell>A CPI measure excluding food and energy under a common definition.</ComparisonCell>
              </tr>
              <tr className="border-t border-slate-200">
                <ComparisonCell highlight>Can it coexist with the others?</ComparisonCell>
                <ComparisonCell>Can occur alongside high headline and core inflation.</ComparisonCell>
                <ComparisonCell>May coincide with weak output, but is not defined by it.</ComparisonCell>
                <ComparisonCell>Can rise faster or slower than core inflation.</ComparisonCell>
                <ComparisonCell>Can rise even when headline inflation falls, depending on component movements.</ComparisonCell>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-6 grid gap-5 md:grid-cols-2">
          <InfoCard icon={AlertTriangle} title="Stagflation is not hyperinflation" tone="red">
            A country can experience high inflation, slow growth, and rising
            unemployment without prices spiralling at hyperinflationary speed.
            Hyperinflation is about the extreme rate of price increases;
            stagflation is about the combination of inflation and economic
            weakness.
          </InfoCard>

          <InfoCard icon={BarChart3} title="Headline and core are measures" tone="blue">
            Headline and core inflation do not tell you by themselves whether
            an economy is growing or losing jobs. To assess stagflation, those
            price measures must be considered alongside output and labour-market
            data.
          </InfoCard>
        </div>
      </section>

      {/* HEADLINE VS CORE */}
      <section id="headline-core" className="scroll-mt-8 border-y border-slate-200 bg-slate-50 py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="06 · Inflation Measurement"
            title="Headline Inflation vs Core Inflation"
            description="Both measures help explain what is happening to prices. They differ in what they include and the question they help answer."
          />

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-blue-200 bg-white p-5 shadow-sm sm:p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                <ShoppingBasket size={25} />
              </div>
              <h3 className="mt-4 text-xl font-bold text-slate-950">
                Headline Inflation
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Headline inflation measures price changes across the broad
                consumer basket represented by the index. Food and energy are
                included, making this measure sensitive to changes in essentials
                such as vegetables, cereals, cooking fuel, and transport energy.
              </p>
              <div className="mt-5 rounded-xl bg-blue-50 p-4">
                <p className="font-bold text-blue-950">Example</p>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  A sharp rise in food and fuel prices can push headline
                  inflation upward, even if many other prices change only a
                  little.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-violet-200 bg-white p-5 shadow-sm sm:p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-50 text-violet-700">
                <BarChart3 size={25} />
              </div>
              <h3 className="mt-4 text-xl font-bold text-slate-950">
                Core Inflation
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Core inflation excludes selected volatile items—commonly food
                and energy in many measures—to help reveal whether price
                pressures are spreading through the rest of the economy.
                Definitions vary by country and index.
              </p>
              <div className="mt-5 rounded-xl bg-violet-50 p-4">
                <p className="font-bold text-violet-950">Example</p>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  Food prices may ease while rents, personal services, and
                  other prices continue to rise. Headline inflation might fall
                  even as core inflation stays elevated.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 sm:p-7">
            <h3 className="text-xl font-bold text-slate-950">
              How both measures help identify stagflationary pressure
            </h3>

            <div className="mt-5 grid gap-4 md:grid-cols-3">
              <div className="rounded-xl border border-red-200 bg-red-50 p-4">
                <p className="font-bold text-red-900">Headline rises sharply</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Food or energy shocks may be pushing up household costs.
                </p>
              </div>
              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
                <p className="font-bold text-amber-900">Core remains elevated</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Price pressures may have spread beyond the original shock.
                </p>
              </div>
              <div className="rounded-xl border border-violet-200 bg-violet-50 p-4">
                <p className="font-bold text-violet-900">Growth and jobs weaken</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Combined with persistent inflation, this may signal
                  stagflationary conditions.
                </p>
              </div>
            </div>

            <p className="mt-5 text-sm leading-7 text-slate-600">
              These are possible patterns, not a mechanical test. Economists
              assess the scale and persistence of inflation, real output,
              employment, and the causes behind the data.
            </p>
          </div>
        </div>
      </section>
<AdSlot />
      {/* EFFECTS */}
      <section id="effects" className="scroll-mt-8 mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
        <SectionHeading
          eyebrow="07 · Economic Impact"
          title="How Does Stagflation Affect Households and Businesses?"
          description="Its effects can spread beyond inflation statistics. People may struggle with everyday costs, while firms face higher expenses and weaker demand."
        />

        <div className="grid gap-5 md:grid-cols-2">
          <InfoCard icon={Wallet} title="Household Budgets Come Under Pressure" tone="red">
            Food, fuel, transport, and other essential expenses can take up a
            larger share of income. If wages fail to keep up, families may
            reduce discretionary purchases or dip into savings.
          </InfoCard>

          <InfoCard icon={Users} title="Job Security Can Weaken" tone="violet">
            Businesses facing weaker demand and higher costs may pause hiring,
            reduce overtime, or cut staff. New graduates and people seeking
            better jobs may find fewer opportunities.
          </InfoCard>

          <InfoCard icon={BriefcaseBusiness} title="Businesses Face a Double Squeeze" tone="amber">
            Input costs can rise while customers become more cautious about
            spending. Firms may struggle to increase prices enough to cover
            costs without losing sales.
          </InfoCard>

          <InfoCard icon={PiggyBank} title="Savings Goals Become Harder" tone="blue">
            If prices rise faster than savings returns or income, households
            may need to save more rupees to reach the same future goal. Long-term
            planning becomes less predictable.
          </InfoCard>
        </div>

        <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white">
          <div className="grid md:grid-cols-3">
            <div className="border-b border-slate-200 p-5 md:border-b-0 md:border-r">
              <p className="text-sm font-bold uppercase tracking-wider text-slate-500">
                Prices
              </p>
              <p className="mt-2 text-xl font-bold text-red-700">
                Higher costs
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Purchasing power can decline when income lags behind prices.
              </p>
            </div>
            <div className="border-b border-slate-200 p-5 md:border-b-0 md:border-r">
              <p className="text-sm font-bold uppercase tracking-wider text-slate-500">
                Jobs
              </p>
              <p className="mt-2 text-xl font-bold text-amber-800">
                More uncertainty
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Slower activity can make employment and income less secure.
              </p>
            </div>
            <div className="p-5">
              <p className="text-sm font-bold uppercase tracking-wider text-slate-500">
                Businesses
              </p>
              <p className="mt-2 text-xl font-bold text-violet-800">
                Tough decisions
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Firms must balance rising costs against weaker customer demand.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* POLICY */}
      <section id="policy" className="scroll-mt-8 border-y border-slate-200 bg-slate-50 py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="08 · Policy Responses"
            title="How Can Governments and Central Banks Respond?"
            description="Stagflation is difficult to address because measures that support growth can increase inflationary pressure, while aggressive anti-inflation measures can further weaken activity in the short run."
          />

          <div className="grid gap-5 md:grid-cols-2">
            <InfoCard icon={Landmark} title="Monetary Policy" tone="blue">
              Central banks can adjust interest rates and use other policy
              tools to keep inflation expectations anchored. Higher rates can
              reduce demand and price pressure, but they can also make borrowing
              more expensive and weaken investment and hiring.
            </InfoCard>

            <InfoCard icon={Globe2} title="Targeted Fiscal Support" tone="green">
              Governments may support vulnerable households affected by
              essential-cost increases. Carefully targeted support can protect
              those most in need, but broad measures that stimulate demand too
              strongly can complicate efforts to control inflation.
            </InfoCard>

            <InfoCard icon={Factory} title="Improve Supply and Productivity" tone="violet">
              Better infrastructure, reliable energy supply, efficient
              logistics, skills, competition, and productive investment can
              improve the economy's ability to produce goods and services.
              These measures often take time to deliver results.
            </InfoCard>

            <InfoCard icon={Package} title="Reduce Bottlenecks" tone="amber">
              Where shortages or distribution problems are important causes,
              steps that improve availability and transport can ease some
              cost pressures. The best response depends on the source of the
              disruption.
            </InfoCard>
          </div>

          <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5 sm:p-7">
            <h3 className="text-xl font-bold text-slate-950">
              Why is there no easy fix?
            </h3>
            <p className="mt-3 leading-7 text-slate-700">
              If a central bank raises interest rates to bring inflation down,
              borrowing and spending may slow further. If it cuts rates to
              support growth, inflation may become harder to contain. Supply-side
              improvements can address some underlying problems, but they
              generally cannot be completed overnight.
            </p>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Policy needs to account for the causes of inflation, the state
              of employment, expectations, and the severity of the economic
              slowdown.
            </p>
          </div>
        </div>
      </section>
<AdSlot />
      {/* INDIA */}
      <section id="india" className="scroll-mt-8 mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
        <SectionHeading
          eyebrow="09 · Indian Context"
          title="Could Stagflation Happen in India?"
          description="India, like other economies, can be affected by global energy prices, food supply disruptions, imported inputs, and changes in domestic demand. But the label must be supported by several economic indicators."
        />

        <div className="grid gap-5 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-7">
            <h3 className="text-xl font-bold text-slate-950">
              Indicators to watch
            </h3>
            <ul className="mt-5 space-y-4">
              {[
                ["Consumer inflation", "Are consumer prices rising quickly and persistently?"],
                ["Real GDP growth", "Is inflation occurring alongside a substantial slowdown in real output?"],
                ["Employment conditions", "Are unemployment, underemployment, or job-finding difficulties increasing?"],
                ["Food and fuel costs", "Are supply disruptions putting pressure on household budgets and business costs?"],
              ].map(([title, description]) => (
                <li key={title} className="flex gap-3">
                  <CheckCircle2 size={19} className="mt-1 shrink-0 text-blue-700" />
                  <div>
                    <p className="font-bold text-slate-900">{title}</p>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      {description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-blue-200 bg-blue-50 p-5 sm:p-7">
            <h3 className="text-xl font-bold text-slate-950">
              Where to check India's data
            </h3>
            <p className="mt-3 leading-7 text-slate-700">
              Check official inflation releases, national accounts, and
              employment statistics together rather than relying on a single
              headline or one commodity's price.
            </p>

            <div className="mt-5 space-y-3">
              <a
                href="https://www.mospi.gov.in/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between gap-3 rounded-xl border border-blue-200 bg-white p-4 transition hover:border-blue-400"
              >
                <div>
                  <p className="font-bold text-slate-900">MoSPI</p>
                  <p className="mt-1 text-sm text-slate-600">
                    Consumer prices, GDP and official statistics
                  </p>
                </div>
                <ArrowRight size={18} className="shrink-0 text-blue-700" />
              </a>

              <a
                href="https://www.rbi.org.in/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between gap-3 rounded-xl border border-blue-200 bg-white p-4 transition hover:border-blue-400"
              >
                <div>
                  <p className="font-bold text-slate-900">Reserve Bank of India</p>
                  <p className="mt-1 text-sm text-slate-600">
                    Monetary policy and economic analysis
                  </p>
                </div>
                <ArrowRight size={18} className="shrink-0 text-blue-700" />
              </a>

              <a
                href="https://www.mospi.gov.in/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between gap-3 rounded-xl border border-blue-200 bg-white p-4 transition hover:border-blue-400"
              >
                <div>
                  <p className="font-bold text-slate-900">Employment statistics</p>
                  <p className="mt-1 text-sm text-slate-600">
                    Start with official labour-force survey publications
                  </p>
                </div>
                <ArrowRight size={18} className="shrink-0 text-blue-700" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5 sm:p-6">
          <h3 className="font-bold text-slate-950">
            Do not confuse an expensive essential with economy-wide stagflation
          </h3>
          <p className="mt-2 leading-7 text-slate-700">
            A rise in petrol, vegetables, or cooking gas can put real pressure
            on households, but it does not by itself prove stagflation. The
            broader pattern of inflation, output, and employment needs to be
            assessed over time.
          </p>
        </div>
      </section>

      {/* COMMON MISTAKES */}
      <section className="border-y border-slate-200 bg-slate-50 py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Quick Revision"
            title="Four Mistakes to Avoid"
            description="Keep these distinctions in mind when reading economic news or interpreting inflation reports."
          />

          <div className="grid gap-4 md:grid-cols-2">
            {[
              {
                wrong: "High inflation automatically means stagflation.",
                right: "Stagflation also requires weak economic activity and labour-market weakness.",
              },
              {
                wrong: "Hyperinflation is just another name for stagflation.",
                right: "Hyperinflation refers to extreme price increases; stagflation refers to inflation alongside economic stagnation.",
              },
              {
                wrong: "Core inflation is the full cost of living.",
                right: "Core inflation excludes selected items in a defined measure and may not reflect every household's expenses.",
              },
              {
                wrong: "Falling inflation means prices are falling.",
                right: "When inflation remains positive, prices are still rising, only more slowly. Falling general prices are called deflation.",
              },
            ].map((item) => (
              <div
                key={item.wrong}
                className="rounded-2xl border border-slate-200 bg-white p-5"
              >
                <p className="flex items-start gap-2 font-bold text-slate-900">
                  <XCircle size={19} className="mt-0.5 shrink-0 text-red-600" />
                  {item.wrong}
                </p>
                <p className="mt-3 flex items-start gap-2 text-sm leading-7 text-slate-600">
                  <CheckCircle2 size={19} className="mt-1 shrink-0 text-emerald-600" />
                  {item.right}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SUMMARY */}
      <section className="bg-gradient-to-br from-blue-700 to-indigo-900 py-14 text-white sm:py-16">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <p className="text-sm font-bold uppercase tracking-wider text-blue-200">
            The Big Picture
          </p>
          <h2 className="mt-3 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
            Stagflation Is the Difficult Combination of Rising Prices and a Weak Economy
          </h2>
          <p className="mt-5 max-w-3xl leading-8 text-blue-50">
            It matters because people can face higher living costs at the same
            time as jobs and economic opportunities weaken. Understanding the
            difference between stagflation, hyperinflation, headline inflation,
            and core inflation helps make sense of economic news without
            confusing very different concepts.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Stagflation", "Inflation + weak growth"],
              ["Hyperinflation", "Extremely rapid price rises"],
              ["Headline", "Broad consumer price measure"],
              ["Core", "Measure excluding selected volatile items"],
            ].map(([title, description]) => (
              <div
                key={title}
                className="rounded-xl border border-white/20 bg-white/10 p-4"
              >
                <p className="font-bold">{title}</p>
                <p className="mt-2 text-sm leading-6 text-blue-50">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
<AdSlot />
      {/* FAQ */}
      <section id="faq" className="scroll-mt-8 border-b border-slate-200 bg-slate-50 py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="10 · Frequently Asked Questions"
            title="Stagflation FAQs"
            description="Short answers to common questions about stagflation and related inflation concepts."
          />

          <div className="space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group rounded-xl border border-slate-200 bg-white p-5"
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-bold text-slate-900">
                  <span>{faq.q}</span>
                  <CircleHelp size={19} className="mt-0.5 shrink-0 text-blue-700" />
                </summary>
                <p className="mt-3 border-t border-slate-100 pt-3 leading-7 text-slate-600">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

     
    </main>
  );
}
