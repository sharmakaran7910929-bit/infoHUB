
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  BarChart3,
  BookOpen,
  CheckCircle2,
  Factory,
  GraduationCap,
  Leaf,
  Lightbulb,
  TrendingUp,
  Users,
  Wallet,
  Globe2,
  Scale,
  Building2,
  CircleHelp,
} from "lucide-react";

export const metadata = {
  title: "Economic Growth Explained: Meaning, Formula & Examples",
  description:
    "Learn what economic growth means, how to calculate real GDP growth, practical examples, causes, benefits, limitations, and the difference between growth and development.",
  alternates: {
    canonical:
      "https://www.pricetag.co.in/economics/gdp-and-economic-growth/economic-growth",
  },
};

const causes = [
  {
    title: "Capital Investment",
    description:
      "Businesses invest in factories, machinery, roads, electricity, and digital infrastructure to produce more goods and services.",
    example:
      "A factory installs additional machines and increases its daily production.",
    icon: Factory,
  },
  {
    title: "Education And Skills",
    description:
      "Education, training, and better skills can help workers perform tasks more efficiently and take on more productive jobs.",
    example:
      "A trained technician can operate modern equipment with fewer errors.",
    icon: GraduationCap,
  },
  {
    title: "Technology And Innovation",
    description:
      "Improved technology can reduce production costs, save time, and help businesses develop new products and services.",
    example:
      "A business uses software to manage inventory and reduce waste.",
    icon: Lightbulb,
  },
  {
    title: "Labour Force",
    description:
      "A larger workforce can increase potential production when people have suitable jobs, skills, and productive resources.",
    example:
      "More trained workers join a growing manufacturing industry.",
    icon: Users,
  },
  {
    title: "Productivity",
    description:
      "Productivity rises when an economy produces more output from the resources it already uses.",
    example:
      "A farm produces more wheat from the same area through better techniques.",
    icon: TrendingUp,
  },
  {
    title: "Trade And Institutions",
    description:
      "Reliable infrastructure, predictable rules, access to markets, and trade can help businesses invest and expand.",
    example:
      "A small manufacturer starts selling products to customers in other states.",
    icon: Globe2,
  },
];

const benefits = [
  {
    title: "Higher Production",
    description:
      "An economy can produce more goods and services, increasing the availability of products and services.",
    icon: Factory,
  },
  {
    title: "Potential Job Creation",
    description:
      "Expanding businesses may hire additional workers, although growth does not guarantee that every person will find a job.",
    icon: Users,
  },
  {
    title: "Higher Potential Incomes",
    description:
      "Productivity growth can support higher wages and business incomes when the gains are shared with workers and households.",
    icon: Wallet,
  },
  {
    title: "More Public Resources",
    description:
      "A larger economy can broaden the tax base, potentially helping governments fund infrastructure and public services.",
    icon: Building2,
  },
];

const limitations = [
  "Economic growth does not guarantee that income gains are shared equally.",
  "GDP can rise even when some households struggle with living costs.",
  "Growth can cause pollution, resource depletion, and environmental damage.",
  "An increase in total GDP does not necessarily mean GDP per person has increased.",
  "GDP does not fully measure health, education quality, leisure, safety, or overall well-being.",
  "Growth driven mainly by rising prices is not the same as growth in real production.",
];

const faqs = [
  {
    question: "What Is Economic Growth In Simple Words?",
    answer:
      "Economic growth means an economy produces more goods and services over time. It is commonly measured by the percentage change in real GDP, which adjusts for price changes.",
  },
  {
    question: "What Is The Formula For Economic Growth?",
    answer:
      "The economic growth rate is calculated by subtracting previous-period real GDP from current-period real GDP, dividing the difference by previous-period real GDP, and multiplying by 100.",
  },
  {
    question: "Why Is Real GDP Used To Measure Economic Growth?",
    answer:
      "Real GDP adjusts for changes in prices, making it more useful for comparing changes in actual production over time than nominal GDP alone.",
  },
  {
    question: "Can GDP Grow Without GDP Per Capita Growing At The Same Rate?",
    answer:
      "Yes. Total GDP can grow faster than population-adjusted GDP per capita. If population grows quickly, the increase in output per person may be smaller than the increase in total output.",
  },
  {
    question: "Does Economic Growth Mean Everyone Is Better Off?",
    answer:
      "No. Growth measures an increase in economic output, not how that output or income is distributed. Its effect on living standards depends on factors such as wages, prices, public services, inequality, and environmental quality.",
  },
  {
    question: "What Is The Difference Between Economic Growth And Economic Development?",
    answer:
      "Economic growth focuses on increases in real economic output. Economic development is broader and also considers improvements in health, education, living standards, opportunities, and other aspects of human well-being.",
  },
];

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mx-auto mb-8 max-w-3xl text-center">
      {eyebrow && (
        <p className="mb-3 text-sm font-bold uppercase tracking-wider text-blue-700">
          {eyebrow}
        </p>
      )}
      <h2 className="text-2xl font-bold tracking-tight text-blue-950 sm:text-3xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 leading-7 text-slate-600">{description}</p>
      )}
    </div>
  );
}

function GrowthRateFormula() {
  return (
    <div className="rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50 via-white to-blue-100/70 p-5 sm:p-7">
      <p className="mb-4 text-sm font-bold uppercase tracking-wider text-blue-700">
        Economic Growth Formula
      </p>
      <div className="overflow-x-auto">
        <div className="min-w-[290px] text-center text-lg font-bold leading-8 text-blue-950 sm:text-xl">
          <span>Growth Rate (%) = </span>
          <span className="inline-flex flex-col align-middle text-center">
            <span className="border-b-2 border-blue-700 px-2 pb-1">
              Current Real GDP − Previous Real GDP
            </span>
            <span className="px-2 pt-1">Previous Real GDP</span>
          </span>
          <span> × 100</span>
        </div>
      </div>
      <p className="mt-4 text-sm leading-6 text-slate-600">
        Use real GDP values measured on a consistent basis and for comparable
        periods.
      </p>
    </div>
  );
}

export default function EconomicGrowthPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-gradient-to-b from-white via-blue-50/60 to-white text-slate-800">
      {/* Hero */}
      <section className="relative border-b border-blue-100 bg-gradient-to-br from-white via-blue-50 to-blue-100/80">
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-16 h-64 w-64 rounded-full bg-sky-200/30 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-2 lg:px-8 lg:py-24">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/90 px-4 py-2 text-sm font-bold text-blue-800 shadow-sm">
              <BookOpen size={16} />
              Economics Made Understandable
            </div>

            <h1 className="max-w-2xl text-3xl font-bold leading-tight tracking-tight text-blue-950 sm:text-4xl lg:text-5xl">
              Economic Growth: Meaning, Formula And Real Examples
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-700 sm:text-lg">
              Economic growth means an economy produces more goods and
              services over time. Learn how economists measure it, why real
              GDP matters, what drives growth, and why a growing economy does
              not automatically mean everyone is better off.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#growth-formula"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-700 to-blue-500 px-5 py-3 font-bold text-white shadow-md shadow-blue-200 transition hover:from-blue-800 hover:to-blue-600"
              >
                Learn The Formula <ArrowRight size={18} />
              </a>
              <a
                href="#real-example"
                className="inline-flex items-center gap-2 rounded-xl border border-blue-200 bg-white px-5 py-3 font-bold text-blue-800 transition hover:bg-blue-50"
              >
                See An Example
              </a>
            </div>

            <div className="mt-7 flex flex-wrap gap-3 text-sm text-slate-600">
              <span className="rounded-lg border border-blue-100 bg-white/80 px-3 py-2">
                <span className="font-bold text-blue-900">01.</span> Definition
              </span>
              <span className="rounded-lg border border-blue-100 bg-white/80 px-3 py-2">
                <span className="font-bold text-blue-900">02.</span> Calculation
              </span>
              <span className="rounded-lg border border-blue-100 bg-white/80 px-3 py-2">
                <span className="font-bold text-blue-900">03.</span> Impact
              </span>
            </div>
          </div>

          {/* Hero illustration */}
          <div className="rounded-3xl border border-blue-200 bg-gradient-to-br from-white via-blue-50 to-blue-100 p-5 shadow-xl shadow-blue-100/70 sm:p-7">
            <div className="mb-5 flex items-center justify-between gap-3">
              <div>
                <p className="text-sm font-bold text-blue-800">
                  Illustrative Economy
                </p>
                <p className="mt-1 text-sm text-slate-600">
                  More real output over time
                </p>
              </div>
              <div className="rounded-xl bg-white p-3 text-blue-700 shadow-sm">
                <BarChart3 size={25} />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-blue-100 bg-white p-4">
                <p className="text-sm text-slate-500">Earlier Year</p>
                <p className="mt-2 text-2xl font-bold text-blue-950">
                  ₹100
                </p>
                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Illustrative real output index
                </p>
                <div className="mt-4 h-3 rounded-full bg-blue-100">
                  <div className="h-3 w-2/3 rounded-full bg-blue-400" />
                </div>
              </div>

              <div className="rounded-2xl border border-blue-200 bg-white p-4 shadow-sm">
                <p className="text-sm text-slate-500">Later Year</p>
                <p className="mt-2 text-2xl font-bold text-blue-800">
                  ₹105
                </p>
                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Illustrative real output index
                </p>
                <div className="mt-4 h-3 rounded-full bg-blue-100">
                  <div className="h-3 w-[85%] rounded-full bg-gradient-to-r from-blue-600 to-sky-400" />
                </div>
              </div>
            </div>

            <div className="mt-4 rounded-2xl border border-blue-200 bg-white p-4 sm:p-5">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-blue-100 p-3 text-blue-800">
                  <TrendingUp size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-600">
                    Illustrative Real GDP Growth
                  </p>
                  <p className="text-3xl font-bold text-blue-900">5%</p>
                </div>
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Output increased from 100 to 105 units after accounting for
                price changes.
              </p>
            </div>
            <p className="mt-4 text-xs leading-5 text-slate-500">
              All values in this illustration are hypothetical, not official
              national statistics.
            </p>
          </div>
        </div>
      </section>

      {/* Definition */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <SectionHeading
          eyebrow="Start With The Basics"
          title="What Is Economic Growth?"
          description="Economic growth describes an increase in the quantity of goods and services an economy produces over a period of time."
        />

        <div className="grid gap-5 md:grid-cols-3">
          <article className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md hover:shadow-blue-100">
            <div className="mb-4 inline-flex rounded-xl bg-blue-100 p-3 text-blue-800">
              <Factory size={24} />
            </div>
            <h3 className="text-lg font-bold text-blue-950">
              More Production
            </h3>
            <p className="mt-3 leading-7 text-slate-600">
              Factories may produce more goods, farms may grow more crops, and
              service businesses may serve more customers.
            </p>
          </article>

          <article className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md hover:shadow-blue-100">
            <div className="mb-4 inline-flex rounded-xl bg-sky-100 p-3 text-sky-800">
              <BarChart3 size={24} />
            </div>
            <h3 className="text-lg font-bold text-blue-950">
              Measured Over Time
            </h3>
            <p className="mt-3 leading-7 text-slate-600">
              Economists commonly compare real GDP across quarters or years to
              determine whether total production has increased.
            </p>
          </article>

          <article className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md hover:shadow-blue-100">
            <div className="mb-4 inline-flex rounded-xl bg-indigo-100 p-3 text-indigo-800">
              <Users size={24} />
            </div>
            <h3 className="text-lg font-bold text-blue-950">
              People Matter Too
            </h3>
            <p className="mt-3 leading-7 text-slate-600">
              Total economic output is only part of the picture. Population
              growth and the distribution of income also matter.
            </p>
          </article>
        </div>

        <div className="mt-6 rounded-2xl border border-blue-200 bg-gradient-to-r from-blue-50 to-white p-5 sm:p-6">
          <div className="flex items-start gap-3">
            <div className="rounded-xl bg-white p-3 text-blue-700 shadow-sm">
              <CircleHelp size={23} />
            </div>
            <div>
              <h3 className="font-bold text-blue-950">
                Does More Money In The Economy Always Mean Growth?
              </h3>
              <p className="mt-2 leading-7 text-slate-700">
                No. If the prices of goods rise but the quantities produced
                stay the same, nominal GDP can increase without a corresponding
                increase in real production. That is why real GDP is commonly
                used to measure economic growth.
              </p>
              <Link
                href="/economics/gdp-and-economic-growth/real-vs-nominal-gdp"
                className="mt-3 inline-flex items-center gap-2 font-bold text-blue-700 hover:text-blue-900"
              >
                Understand Real Vs Nominal GDP <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Formula */}
      <section
        id="growth-formula"
        className="border-y border-blue-100 bg-gradient-to-b from-blue-50/80 via-white to-blue-50/60"
      >
        <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-16">
          <SectionHeading
            eyebrow="How Economists Measure It"
            title="Economic Growth Formula"
            description="The growth rate tells us the percentage change in real GDP between two comparable periods."
          />

          <GrowthRateFormula />

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-blue-100 bg-white p-4">
              <p className="font-bold text-blue-900">Current Real GDP</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                The inflation-adjusted value of production in the current
                period.
              </p>
            </div>
            <div className="rounded-xl border border-blue-100 bg-white p-4">
              <p className="font-bold text-blue-900">Previous Real GDP</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                The comparable real output value from the earlier period.
              </p>
            </div>
            <div className="rounded-xl border border-blue-100 bg-white p-4">
              <p className="font-bold text-blue-900">Growth Rate</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                The percentage by which real GDP increased or decreased.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Worked example */}
      <section
        id="real-example"
        className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8"
      >
        <SectionHeading
          eyebrow="Worked Calculation"
          title="Economic Growth Example With Calculation"
          description="Suppose an imaginary economy produces goods and services worth ₹100 lakh crore in real terms in one year and ₹105 lakh crore the following year."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm sm:p-7">
            <h3 className="text-xl font-bold text-blue-950">
              Step 1: Identify The Values
            </h3>
            <div className="mt-5 space-y-3">
              <div className="flex items-center justify-between gap-4 rounded-xl bg-blue-50 p-4">
                <span className="text-slate-700">Previous Real GDP</span>
                <span className="font-bold text-blue-900">
                  ₹100 lakh crore
                </span>
              </div>
              <div className="flex items-center justify-between gap-4 rounded-xl bg-sky-50 p-4">
                <span className="text-slate-700">Current Real GDP</span>
                <span className="font-bold text-blue-900">
                  ₹105 lakh crore
                </span>
              </div>
              <div className="flex items-center justify-between gap-4 rounded-xl bg-indigo-50 p-4">
                <span className="text-slate-700">Increase In Real GDP</span>
                <span className="font-bold text-indigo-900">
                  ₹5 lakh crore
                </span>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-blue-200 bg-gradient-to-br from-white via-blue-50 to-blue-100/80 p-5 shadow-sm sm:p-7">
            <h3 className="text-xl font-bold text-blue-950">
              Step 2: Calculate The Rate
            </h3>
            <div className="mt-5 rounded-xl border border-blue-100 bg-white p-4">
              <p className="text-sm font-bold text-blue-700">Substitute Values</p>
              <p className="mt-3 break-words text-base leading-8 text-slate-800">
                Growth Rate = ((105 − 100) ÷ 100) × 100
              </p>
              <div className="my-4 h-px bg-blue-100" />
              <p className="text-sm font-bold text-blue-700">Result</p>
              <p className="mt-2 text-4xl font-bold text-blue-900">5%</p>
            </div>
            <div className="mt-4 flex items-start gap-3 rounded-xl border border-blue-200 bg-white/80 p-4">
              <CheckCircle2 className="mt-1 shrink-0 text-blue-700" size={21} />
              <p className="leading-7 text-slate-700">
                The economy experienced <strong>5% real GDP growth</strong> in
                this example because inflation-adjusted output increased by
                5%.
              </p>
            </div>
          </div>
        </div>

        <p className="mt-5 rounded-xl border border-blue-100 bg-white p-4 text-sm leading-6 text-slate-600">
          This is a fictional calculation for learning purposes. It is not a
          claim about India&apos;s actual growth rate.
        </p>
      </section>

      {/* Visual process */}
      <section className="border-y border-blue-100 bg-gradient-to-b from-white via-blue-50/70 to-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
          <SectionHeading
            eyebrow="Understand The Process"
            title="How Can An Economy Grow?"
            description="Investment, skills, and better technology can improve productive capacity. The result depends on how effectively resources are used and whether demand supports production."
          />

          <div className="grid items-stretch gap-3 md:grid-cols-[1fr_auto_1fr_auto_1fr] md:gap-4">
            <div className="rounded-2xl border border-blue-200 bg-white p-5 text-center shadow-sm">
              <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-800">
                <Building2 size={27} />
              </div>
              <h3 className="font-bold text-blue-950">
                Investment And Skills
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Businesses invest in equipment, infrastructure, and worker
                training.
              </p>
            </div>

            <div className="flex items-center justify-center text-blue-500">
              <ArrowRight className="hidden md:block" size={26} />
              <ArrowDown className="md:hidden" size={24} />
            </div>

            <div className="rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50 to-white p-5 text-center shadow-sm">
              <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-100 text-sky-800">
                <Lightbulb size={27} />
              </div>
              <h3 className="font-bold text-blue-950">
                Higher Productivity
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Workers and businesses can produce more with available
                resources.
              </p>
            </div>

            <div className="flex items-center justify-center text-blue-500">
              <ArrowRight className="hidden md:block" size={26} />
              <ArrowDown className="md:hidden" size={24} />
            </div>

            <div className="rounded-2xl border border-blue-300 bg-gradient-to-br from-blue-100 to-white p-5 text-center shadow-sm">
              <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-700 text-white">
                <TrendingUp size={27} />
              </div>
              <h3 className="font-bold text-blue-950">Potential Growth</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                The economy may produce more real goods and services over
                time.
              </p>
            </div>
          </div>

          <p className="mt-5 text-center text-sm leading-6 text-slate-600">
            This is a simplified explanation, not a guarantee that every
            investment will increase economic output.
          </p>
        </div>
      </section>

      {/* Causes */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <SectionHeading
          eyebrow="Main Drivers"
          title="What Causes Economic Growth?"
          description="Long-term growth often depends on improvements in productive capacity, skills, technology, and the way resources are used."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {causes.map((cause) => {
            const Icon = cause.icon;

            return (
              <article
                key={cause.title}
                className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-md hover:shadow-blue-100/70 sm:p-6"
              >
                <div className="mb-4 inline-flex rounded-xl bg-gradient-to-br from-blue-100 to-sky-50 p-3 text-blue-800">
                  <Icon size={25} />
                </div>
                <h3 className="text-lg font-bold text-blue-950">
                  {cause.title}
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  {cause.description}
                </p>
                <div className="mt-4 rounded-xl border border-blue-100 bg-gradient-to-r from-blue-50 to-white p-3">
                  <p className="text-xs font-bold uppercase tracking-wider text-blue-700">
                    Practical Example
                  </p>
                  <p className="mt-1 text-sm leading-6 text-slate-700">
                    {cause.example}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Total GDP versus per capita */}
      <section className="border-y border-blue-100 bg-gradient-to-b from-blue-50/80 via-white to-blue-50/60">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
          <SectionHeading
            eyebrow="An Important Distinction"
            title="Total Economic Growth Vs Growth Per Person"
            description="A country can produce more overall while its population also grows. That is why total GDP and GDP per capita answer different questions."
          />

          <div className="grid gap-5 md:grid-cols-2">
            <article className="rounded-2xl border border-blue-200 bg-white p-5 shadow-sm sm:p-6">
              <div className="mb-4 inline-flex rounded-xl bg-blue-100 p-3 text-blue-800">
                <Globe2 size={25} />
              </div>
              <h3 className="text-xl font-bold text-blue-950">
                Total Real GDP Growth
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Measures the change in the total inflation-adjusted value of
                production in an economy.
              </p>
              <div className="mt-4 rounded-xl bg-blue-50 p-4">
                <p className="text-sm text-slate-600">Illustrative Example</p>
                <p className="mt-1 text-2xl font-bold text-blue-900">+5%</p>
                <p className="mt-1 text-sm text-slate-600">
                  Total real GDP increases by 5%.
                </p>
              </div>
            </article>

            <article className="rounded-2xl border border-sky-200 bg-white p-5 shadow-sm sm:p-6">
              <div className="mb-4 inline-flex rounded-xl bg-sky-100 p-3 text-sky-800">
                <Users size={25} />
              </div>
              <h3 className="text-xl font-bold text-blue-950">
                Real GDP Per Capita Growth
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Measures the change in real GDP per person, using real GDP
                divided by population.
              </p>
              <div className="mt-4 rounded-xl bg-sky-50 p-4">
                <p className="text-sm text-slate-600">
                  If Population Grows By 2%
                </p>
                <p className="mt-1 text-2xl font-bold text-blue-900">
                  ≈ 2.94%
                </p>
                <p className="mt-1 text-sm text-slate-600">
                  Approximate real GDP per capita growth in this example.
                </p>
              </div>
            </article>
          </div>

          <div className="mt-5 rounded-2xl border border-blue-200 bg-white p-5 sm:p-6">
            <h3 className="font-bold text-blue-950">
              How Is The 2.94% Result Calculated?
            </h3>
            <p className="mt-3 leading-7 text-slate-700">
              Suppose real GDP rises from an index of 100 to 105 while
              population rises from an index of 100 to 102. Real GDP per capita
              changes from 100 ÷ 100 to 105 ÷ 102.
            </p>
            <div className="mt-4 overflow-x-auto rounded-xl bg-gradient-to-r from-blue-50 to-sky-50 p-4">
              <p className="min-w-max font-bold text-blue-900">
                ((1.05 ÷ 1.02) − 1) × 100 ≈ 2.94%
              </p>
            </div>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              These are illustrative growth rates. GDP per capita is an
              average, not a measure of how income is distributed among people.
            </p>
            <Link
              href="/economics/gdp-and-economic-growth/gdp-per-capita"
              className="mt-4 inline-flex items-center gap-2 font-bold text-blue-700 hover:text-blue-900"
            >
              Learn About GDP Per Capita <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <SectionHeading
          eyebrow="Potential Advantages"
          title="Why Is Economic Growth Important?"
          description="Sustained growth can expand an economy's productive capacity and create opportunities, but the results depend on how growth occurs and who benefits."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <article
                key={benefit.title}
                className="rounded-2xl border border-blue-100 bg-gradient-to-b from-white to-blue-50/70 p-5 shadow-sm"
              >
                <div className="mb-4 inline-flex rounded-xl bg-white p-3 text-blue-800 shadow-sm ring-1 ring-blue-100">
                  <Icon size={24} />
                </div>
                <h3 className="font-bold text-blue-950">{benefit.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {benefit.description}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      {/* Limitations */}
      <section className="border-y border-blue-100 bg-gradient-to-br from-blue-50 via-white to-sky-50">
        <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-16">
          <SectionHeading
            eyebrow="Look Beyond The Headline"
            title="Why Economic Growth Alone Is Not Enough"
            description="Growth is important, but it is not a complete measurement of a country's quality of life or economic fairness."
          />

          <div className="rounded-2xl border border-blue-200 bg-white p-5 shadow-sm sm:p-7">
            <div className="grid gap-4 sm:grid-cols-2">
              {limitations.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <Scale
                    className="mt-1 shrink-0 text-blue-700"
                    size={20}
                  />
                  <p className="leading-7 text-slate-700">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-xl border border-blue-200 bg-gradient-to-r from-blue-50 to-white p-4">
              <div className="flex items-start gap-3">
                <Leaf className="mt-1 shrink-0 text-blue-700" size={22} />
                <div>
                  <h3 className="font-bold text-blue-950">
                    Growth And Sustainable Development
                  </h3>
                  <p className="mt-2 leading-7 text-slate-700">
                    Strong economic performance is more meaningful when it
                    supports better living standards, productive employment,
                    access to essential services, and responsible use of
                    natural resources.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
        <SectionHeading
          eyebrow="Compare The Concepts"
          title="Economic Growth Vs Economic Development"
          description="These terms are connected, but they do not mean exactly the same thing."
        />

        <div className="overflow-hidden rounded-2xl border border-blue-200 bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[560px] border-collapse text-left">
              <thead>
                <tr className="bg-gradient-to-r from-blue-100 to-sky-50">
                  <th className="border-b border-blue-200 p-4 font-bold text-blue-950">
                    Point
                  </th>
                  <th className="border-b border-blue-200 p-4 font-bold text-blue-950">
                    Economic Growth
                  </th>
                  <th className="border-b border-blue-200 p-4 font-bold text-blue-950">
                    Economic Development
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-blue-100">
                  <td className="p-4 font-bold text-slate-800">Main Focus</td>
                  <td className="p-4 leading-6 text-slate-600">
                    Increase in real economic output.
                  </td>
                  <td className="p-4 leading-6 text-slate-600">
                    Broader improvements in well-being and opportunities.
                  </td>
                </tr>
                <tr className="border-b border-blue-100 bg-blue-50/40">
                  <td className="p-4 font-bold text-slate-800">Measurement</td>
                  <td className="p-4 leading-6 text-slate-600">
                    Commonly measured by real GDP growth.
                  </td>
                  <td className="p-4 leading-6 text-slate-600">
                    May include health, education, poverty, and living
                    standards.
                  </td>
                </tr>
                <tr className="border-b border-blue-100">
                  <td className="p-4 font-bold text-slate-800">Income</td>
                  <td className="p-4 leading-6 text-slate-600">
                    Output can rise without equal income gains for everyone.
                  </td>
                  <td className="p-4 leading-6 text-slate-600">
                    Considers whether people&apos;s broader circumstances
                    improve.
                  </td>
                </tr>
                <tr className="bg-blue-50/40">
                  <td className="p-4 font-bold text-slate-800">
                    Relationship
                  </td>
                  <td className="p-4 leading-6 text-slate-600">
                    Can provide resources that support development.
                  </td>
                  <td className="p-4 leading-6 text-slate-600">
                    Depends on more than output growth alone.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="border-y border-blue-100 bg-gradient-to-b from-blue-50/70 via-white to-blue-50/70">
        <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 sm:py-16">
          <SectionHeading
            eyebrow="Quick Answers"
            title="Frequently Asked Questions About Economic Growth"
            description="Review the main concepts and common points of confusion."
          />

          <div className="space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-blue-100 bg-white p-5 shadow-sm open:border-blue-200 open:bg-gradient-to-r open:from-white open:to-blue-50/70"
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-bold text-blue-950 marker:hidden">
                  <span>{faq.question}</span>
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-800 transition group-open:rotate-45">
                    <span className="text-xl leading-none">+</span>
                  </span>
                </summary>
                <p className="mt-4 border-t border-blue-100 pt-4 leading-7 text-slate-700">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

    

      {/* Sources */}
      <section className="border-t border-blue-100 bg-gradient-to-b from-blue-50/80 to-white">
        <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
          <h2 className="text-lg font-bold text-blue-950">
            Sources And Further Reading
          </h2>
          <p className="mt-2 leading-7 text-slate-600">
            For official definitions and comparable economic statistics, use
            primary statistical sources. Figures and examples in this guide
            should be distinguished from official national estimates.
          </p>
          <ul className="mt-4 space-y-3">
            <li>
              <a
                href="https://data.worldbank.org/indicator/NY.GDP.MKTP.KD.ZG"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-bold text-blue-700 underline decoration-blue-200 underline-offset-4 hover:text-blue-900"
              >
                World Bank: GDP Growth (Annual %) <ArrowRight size={15} />
              </a>
            </li>
            <li>
              <a
                href="https://data.worldbank.org/indicator/NY.GDP.PCAP.KD.ZG"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-bold text-blue-700 underline decoration-blue-200 underline-offset-4 hover:text-blue-900"
              >
                World Bank: GDP Per Capita Growth (Annual %){" "}
                <ArrowRight size={15} />
              </a>
            </li>
            <li>
              <a
                href="https://www.mospi.gov.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-bold text-blue-700 underline decoration-blue-200 underline-offset-4 hover:text-blue-900"
              >
                Ministry Of Statistics And Programme Implementation, India{" "}
                <ArrowRight size={15} />
              </a>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
