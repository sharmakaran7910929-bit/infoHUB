
import Link from "next/link";
import {
  BriefcaseBusiness,
  Users,
  Search,
  TrendingDown,
  Building2,
  GraduationCap,
  ArrowRight,
  Info,
  BarChart3,
  CircleHelp,
  CheckCircle2,
  BookOpen,
  Target,ShoppingBag ,
} from "lucide-react";
import AdSlot from "../../../../components/AdSlot";

export const metadata = {
  title: "What Is Unemployment? Meaning, Definition, Causes & Examples | PriceTag HUB",
  description:
    "Learn what unemployment means, its definition, examples, causes, types, and how unemployment is measured. Understand unemployment in India.",
  alternates: {
    canonical: "/economics/unemployment/what-is-unemployment",
  },
};

const causes = [
  {
    icon: TrendingDown,
    title: "Slow Economic Growth",
    description:
      "When economic activity slows down, businesses may reduce production, postpone expansion, or hire fewer employees.",
  },
  {
    icon: Building2,
    title: "Lack of Job Opportunities",
    description:
      "When the number of available jobs is lower than the number of people seeking employment, some workers remain unemployed.",
  },
  {
    icon: GraduationCap,
    title: "Skill Mismatch",
    description:
      "Workers may lack the technical knowledge or qualifications required for available jobs, creating a mismatch between skills and vacancies.",
  },
  {
    icon: Search,
    title: "Job Transition",
    description:
      "People changing jobs or entering the workforce may take time to find suitable employment.",
  },
];

const characteristics = [
  "The person is without a job or employment.",
  "The person is available and willing to work.",
  "The person is actively seeking employment.",
  "The person is unable to find suitable work despite looking for opportunities.",
];

const examples = [
  {
    title: "A Graduate Searching for a Job",
    description:
      "A graduate completes college and applies for several jobs but has not yet received an employment offer. This person may be considered unemployed if they meet the applicable labour-force survey criteria.",
  },
  {
    title: "A Factory Worker Who Loses a Job",
    description:
      "A manufacturing company reduces its workforce because of declining demand. A dismissed worker who is available for work and actively searching for another job may be unemployed.",
  },
  {
    title: "An Experienced Employee Changing Jobs",
    description:
      "An employee leaves an existing position and spends several weeks searching for another opportunity. This period between jobs can represent unemployment.",
  },
];

export default function WhatIsUnemploymentPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50/70 via-white to-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">

        {/* Hero */}
        <section className="relative overflow-hidden rounded-3xl border border-blue-100 bg-gradient-to-br from-white via-blue-50 to-indigo-100 p-7 shadow-sm sm:p-12">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl" />
          <div className="relative max-w-4xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-sm font-bold text-blue-700">
              <BriefcaseBusiness size={16} />
              Economics / Unemployment
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              What Is Unemployment?
            </h1>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
              Unemployment refers to a situation in which people who are
              willing and available to work are unable to find suitable
              employment. It is an important economic indicator that helps
              measure labour market conditions, job availability, and
              the overall performance of an economy.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#meaning"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-bold text-white shadow-lg shadow-blue-600/20 hover:bg-blue-700"
              >
                Understand Unemployment
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </section>

        {/* Quick Answer */}
        <section id="meaning" className="scroll-mt-24 pt-12">
          <div className="rounded-2xl border border-blue-200 bg-blue-50/70 p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-white p-3 text-blue-600 shadow-sm">
                <Info size={24} />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">
                Unemployment Meaning
              </h2>
            </div>

            <p className="mt-5 text-base leading-8 text-slate-700">
              Unemployment is a condition where a person who is capable of
              working, willing to work, and actively seeking a job cannot
              find employment. In economics, unemployment is generally
              measured among people who are part of the labour force.
            </p>

            <p className="mt-4 text-sm leading-7 text-slate-600">
              A person who is not working is not automatically classified
              as unemployed. For example, students who are not looking for
              jobs, retired individuals, and people who are not available
              for work are generally outside the labour force.
            </p>
          </div>
        </section>

        {/* Definition */}
        <section className="pt-12">
          <h2 className="text-3xl font-bold text-slate-900">
            Definition of Unemployment
          </h2>
          <p className="mt-4 leading-8 text-slate-600">
            In economics, unemployment describes the situation in which
            individuals who are available for work and seeking employment
            cannot obtain a job. It represents an imbalance between the
            supply of labour and the demand for workers in an economy.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <Users className="text-blue-600" size={27} />
              <h3 className="mt-4 font-bold text-slate-900">
                Supply of Labour
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                People who are willing and available to provide their
                services in return for wages or other forms of compensation.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <Building2 className="text-indigo-600" size={27} />
              <h3 className="mt-4 font-bold text-slate-900">
                Demand for Labour
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                The number of workers that businesses, government
                organisations, and other employers need to hire.
              </p>
            </div>
          </div>
        </section>
<AdSlot />
        {/* Characteristics */}
        <section className="pt-12">
          <h2 className="text-3xl font-bold text-slate-900">
            Main Characteristics of Unemployment
          </h2>
          <p className="mt-4 leading-8 text-slate-600">
            A person generally needs to satisfy specific conditions to be
            classified as unemployed in labour market statistics.
          </p>

          <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
            <div className="space-y-5">
              {characteristics.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2
                    className="mt-1 shrink-0 text-emerald-600"
                    size={21}
                  />
                  <p className="leading-7 text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <p className="mt-4 text-sm leading-7 text-slate-500">
            Note: Exact classification depends on the statistical
            methodology used. Different labour surveys may use different
            reference periods and definitions of job search and availability.
          </p>
        </section>

        {/* Examples */}
        <section className="pt-12">
          <div className="mb-7">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Real-world understanding
            </p>
            <h2 className="mt-2 text-3xl font-bold text-slate-900">
              Examples of Unemployment
            </h2>
            <p className="mt-3 leading-7 text-slate-600">
              These examples explain how unemployment can occur in
              different situations.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {examples.map((example, index) => (
              <div
                key={example.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 font-bold text-blue-700">
                  0{index + 1}
                </div>
                <h3 className="mt-5 text-lg font-bold text-slate-900">
                  {example.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {example.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Causes */}
        <section className="pt-12">
          <h2 className="text-3xl font-bold text-slate-900">
            Major Causes of Unemployment
          </h2>
          <p className="mt-4 leading-8 text-slate-600">
            Unemployment can arise due to several economic and structural
            factors. Some of the major causes include:
          </p>

          <div className="mt-7 grid gap-5 sm:grid-cols-2">
            {causes.map((cause) => {
              const Icon = cause.icon;
              return (
                <div
                  key={cause.title}
                  className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-6"
                >
                  <div className="h-fit rounded-xl bg-blue-50 p-3 text-blue-600">
                    <Icon size={23} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">
                      {cause.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      {cause.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-6">
            <Link
              href="/economics/unemployment/causes-of-unemployment"
              className="inline-flex items-center gap-2 font-bold text-blue-600 hover:text-blue-800"
            >
              Explore All Causes of Unemployment
              <ArrowRight size={17} />
            </Link>
          </div>
        </section>

        {/* Measurement */}
        <section className="pt-12">
          <h2 className="text-3xl font-bold text-slate-900">
            How Is Unemployment Measured?
          </h2>
          <p className="mt-4 leading-8 text-slate-600">
            Economists measure unemployment using the unemployment rate.
            It indicates the percentage of the labour force that is
            unemployed.
          </p>

          <div className="mt-6 rounded-2xl border border-indigo-100 bg-gradient-to-br from-indigo-50 to-blue-50 p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <BarChart3 className="text-indigo-600" size={25} />
              <h3 className="text-xl font-bold text-slate-900">
                Unemployment Rate Formula
              </h3>
            </div>

            <div className="my-7 rounded-xl border border-white bg-white p-5 text-center shadow-sm">
              <p className="text-lg font-bold text-slate-800">
                Unemployment Rate
              </p>
              <div className="mt-4 flex flex-col items-center text-lg font-bold text-blue-700">
                <span>
                  Number of Unemployed People
                </span>
                <div className="my-3 h-px w-full max-w-sm bg-slate-400" />
                <span>
                  Total Labour Force
                </span>
              </div>
              <p className="mt-4 text-2xl font-bold text-indigo-700">
                × 100
              </p>
            </div>

            <p className="text-sm leading-7 text-slate-600">
              The labour force includes both employed and unemployed
              people. Individuals outside the labour force are not
              included in this calculation.
            </p>

            <Link
              href="/economics/unemployment/unemployment-rate"
              className="mt-5 inline-flex items-center gap-2 font-bold text-indigo-700 hover:text-indigo-900"
            >
              Learn the Unemployment Rate Formula and Examples
              <ArrowRight size={17} />
            </Link>
          </div>
        </section>

        <AdSlot />
{/* India */}
<section className="pt-12">
  <h2 className="text-3xl font-bold text-slate-900">
    Unemployment in India
  </h2>

  <p className="mt-4 leading-8 text-slate-600">
    Unemployment is an important economic and social issue in
    India. The country's large labour force, growing working-age
    population, changing industrial structure, and differences
    between educational qualifications and job requirements
    influence employment opportunities.
  </p>

  {/* Latest Unemployment Rate */}
  <div className="mt-7 overflow-hidden rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-6 sm:p-8">
    <div className="flex flex-wrap items-center justify-between gap-3">
      <div>
        <p className="text-sm font-bold uppercase tracking-wider text-blue-700">
          Latest Official Figure
        </p>
        <h3 className="mt-2 text-xl font-bold text-slate-900">
          India's Unemployment Rate
        </h3>
      </div>
      <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-bold text-emerald-700">
        September 2026
      </span>
    </div>

    <div className="mt-6 grid gap-4 sm:grid-cols-3">
      <div className="rounded-xl border border-blue-100 bg-white p-5">
        <p className="text-sm text-slate-500">All India</p>
        <p className="mt-2 text-4xl font-bold text-blue-700">5.0%</p>
        <p className="mt-2 text-xs text-slate-500">
          Overall unemployment rate
        </p>
      </div>

      <div className="rounded-xl border border-blue-100 bg-white p-5">
        <p className="text-sm text-slate-500">Rural India</p>
        <p className="mt-2 text-4xl font-bold text-indigo-700">4.2%</p>
        <p className="mt-2 text-xs text-slate-500">
          Rural unemployment rate
        </p>
      </div>

      <div className="rounded-xl border border-blue-100 bg-white p-5">
        <p className="text-sm text-slate-500">Urban India</p>
        <p className="mt-2 text-4xl font-bold text-violet-700">6.9%</p>
        <p className="mt-2 text-xs text-slate-500">
          Urban unemployment rate
        </p>
      </div>
    </div>

    <p className="mt-5 text-sm leading-7 text-slate-600">
      India's overall unemployment rate remained unchanged at
      5.0% compared with August 2026. The urban unemployment
      rate was higher than the rural rate during September.
    </p>

    <p className="mt-3 text-xs leading-6 text-slate-500">
      Source: Periodic Labour Force Survey (PLFS), National
      Statistical Office (NSO), Ministry of Statistics and
      Programme Implementation (MoSPI). Persons aged 15 years
      and above, Current Weekly Status (CWS).
    </p>
  </div>

  <div className="mt-6 grid gap-4 sm:grid-cols-2">
    <div className="rounded-2xl border border-slate-200 bg-white p-6">
      <GraduationCap className="text-blue-600" size={26} />
      <h3 className="mt-4 font-bold text-slate-900">
        Educated Unemployment
      </h3>
      <p className="mt-2 text-sm leading-7 text-slate-600">
        Occurs when educated individuals are unable to find
        employment that matches their qualifications or skills.
      </p>
    </div>

    <div className="rounded-2xl border border-slate-200 bg-white p-6">
      <BriefcaseBusiness className="text-indigo-600" size={26} />
      <h3 className="mt-4 font-bold text-slate-900">
        Rural Unemployment
      </h3>
      <p className="mt-2 text-sm leading-7 text-slate-600">
        Can arise from seasonal agricultural activities,
        limited non-farm jobs, and underemployment in rural areas.
      </p>
    </div>
  </div>

  <p className="mt-5 leading-8 text-slate-600">
    India's unemployment statistics are published through
    labour market surveys, including the Periodic Labour Force
    Survey (PLFS) conducted by the National Statistical Office.
    The survey provides important indicators of employment
    conditions across rural and urban areas.
  </p>

 
</section>


        {/* Types */}
        <section className="pt-12">
          <h2 className="text-3xl font-bold text-slate-900">
            Different Types of Unemployment
          </h2>
          <p className="mt-4 leading-8 text-slate-600">
            Unemployment is classified into different types depending
            on the reason behind joblessness.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {[
              ["Frictional Unemployment", "/economics/unemployment/frictional-unemployment"],
              ["Structural Unemployment", "/economics/unemployment/structural-unemployment"],
              ["Cyclical Unemployment", "/economics/unemployment/cyclical-unemployment"],
              ["Seasonal Unemployment", "/economics/unemployment/seasonal-unemployment"],
            ].map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className="flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 transition hover:border-blue-300 hover:bg-blue-50/50"
              >
                <span className="font-bold text-slate-800">{label}</span>
                <ArrowRight size={18} className="text-blue-600" />
              </Link>
            ))}
          </div>

          <Link
            href="/economics/unemployment/types-of-unemployment"
            className="mt-5 inline-flex items-center gap-2 font-bold text-blue-600 hover:text-blue-800"
          >
            Explore All Types of Unemployment
            <ArrowRight size={17} />
          </Link>
        </section>

      
{/* Effects */}
<section className="pt-12">
  <div className="mb-7">
    <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
      Economic and Social Impact
    </p>
    <h2 className="mt-2 text-3xl font-bold text-slate-900">
      Effects of Unemployment
    </h2>
    <p className="mt-4 leading-8 text-slate-600">
      Unemployment affects more than the availability of jobs.
      It influences household income, economic growth, business
      activity, and the overall well-being of society. Some of
      its major effects include:
    </p>
  </div>

  <div className="grid gap-5 sm:grid-cols-2">
    <div className="rounded-2xl border border-slate-200 bg-white p-6">
      <div className="inline-flex rounded-xl bg-blue-50 p-3 text-blue-600">
        <TrendingDown size={24} />
      </div>
      <h3 className="mt-4 text-lg font-bold text-slate-900">
        1. Reduction in Household Income
      </h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">
        Unemployed individuals may lose their regular earnings,
        making it difficult to pay for essential expenses such as
        food, housing, education, healthcare, and transportation.
        Prolonged unemployment can increase financial insecurity.
      </p>
    </div>

    <div className="rounded-2xl border border-slate-200 bg-white p-6">
      <div className="inline-flex rounded-xl bg-indigo-50 p-3 text-indigo-600">
        <BarChart3 size={24} />
      </div>
      <h3 className="mt-4 text-lg font-bold text-slate-900">
        2. Slower Economic Growth
      </h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">
        When people remain unemployed, an economy may fail to use
        its available human resources efficiently. Lower employment
        can reduce total production, productivity, and potential
        economic output.
      </p>
    </div>

    <div className="rounded-2xl border border-slate-200 bg-white p-6">
      <div className="inline-flex rounded-xl bg-amber-50 p-3 text-amber-600">
        <ShoppingBag size={24} />
      </div>
      <h3 className="mt-4 text-lg font-bold text-slate-900">
        3. Decline in Consumer Spending
      </h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">
        People without regular income generally reduce their
        spending on goods and services. Lower consumer demand
        can affect businesses, reduce sales, and discourage
        investment and expansion.
      </p>
    </div>

    <div className="rounded-2xl border border-slate-200 bg-white p-6">
      <div className="inline-flex rounded-xl bg-rose-50 p-3 text-rose-600">
        <Users size={24} />
      </div>
      <h3 className="mt-4 text-lg font-bold text-slate-900">
        4. Social and Psychological Problems
      </h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">
        Long periods without employment can create stress,
        anxiety, reduced self-confidence, and social insecurity.
        Financial difficulties may also increase pressure
        within families and communities.
      </p>
    </div>

    <div className="rounded-2xl border border-slate-200 bg-white p-6">
      <div className="inline-flex rounded-xl bg-emerald-50 p-3 text-emerald-600">
        <Building2 size={24} />
      </div>
      <h3 className="mt-4 text-lg font-bold text-slate-900">
        5. Increased Government Expenditure
      </h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">
        Governments may need to spend more on employment
        programmes, skill development, social support, and
        poverty reduction initiatives. At the same time,
        lower economic activity may affect tax revenues.
      </p>
    </div>

    <div className="rounded-2xl border border-slate-200 bg-white p-6">
      <div className="inline-flex rounded-xl bg-violet-50 p-3 text-violet-600">
        <GraduationCap size={24} />
      </div>
      <h3 className="mt-4 text-lg font-bold text-slate-900">
        6. Loss of Skills and Work Experience
      </h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">
        Extended periods without work can weaken professional
        skills and reduce opportunities to gain practical
        experience. This may make it more difficult for
        individuals to return to employment.
      </p>
    </div>
  </div>

  <div className="mt-7 rounded-2xl border border-blue-100 bg-gradient-to-r from-blue-50 to-indigo-50 p-6">
    <h3 className="font-bold text-slate-900">
      Overall Economic Impact
    </h3>
    <p className="mt-2 text-sm leading-7 text-slate-600">
      Unemployment can create a chain reaction: lower household
      income reduces consumer spending, weaker demand affects
      businesses, and reduced production can slow economic growth.
      Its effects can therefore extend beyond unemployed individuals
      to the entire economy.
    </p>
  </div>

  <Link
    href="/economics/unemployment/effects-of-unemployment"
    className="mt-5 inline-flex items-center gap-2 font-bold text-blue-600 hover:text-blue-800"
  >
    Explore Effects of Unemployment in Detail
    <ArrowRight size={17} />
  </Link>
</section>
<AdSlot />

        {/* FAQ */}
        <section className="pt-14">
          <div className="mb-7 flex items-center gap-3">
            <CircleHelp className="text-blue-600" size={28} />
            <h2 className="text-3xl font-bold text-slate-900">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "What is unemployment in simple words?",
                a: "Unemployment is a situation where people who are willing and available to work cannot find a job despite seeking employment.",
              },
              {
                q: "Who is considered unemployed?",
                a: "Generally, a person who has no job, is available for work, and is actively seeking employment is considered unemployed under standard labour market definitions.",
              },
              {
                q: "Is every person without a job unemployed?",
                a: "No. Students, retired people, and individuals who are not seeking or available for work are generally classified outside the labour force rather than as unemployed.",
              },
              {
                q: "What are the main types of unemployment?",
                a: "Four commonly studied types are frictional, structural, cyclical, and seasonal unemployment.",
              },
              {
                q: "How is unemployment calculated?",
                a: "The unemployment rate is calculated by dividing the number of unemployed people by the total labour force and multiplying the result by 100.",
              },
              {
                q: "Which organisation measures unemployment in India?",
                a: "The National Statistical Office (NSO), under the Ministry of Statistics and Programme Implementation, publishes labour force statistics through the Periodic Labour Force Survey.",
              },
            ].map((faq, index) => (
              <details
                key={index}
                className="group rounded-xl border border-slate-200 bg-white p-5 open:border-blue-200 open:bg-blue-50/40"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-slate-900">
                  {faq.q}
                  <span className="text-xl text-blue-600 transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 border-t border-slate-100 pt-4 text-sm leading-7 text-slate-600">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* Related Topics */}
        <section className="mt-14">
         
        </section>

        {/* Conclusion */}
        <section className="mt-12 rounded-2xl border border-blue-100 bg-gradient-to-r from-blue-50 to-indigo-50 p-7 sm:p-9">
          <div className="flex items-start gap-4">
            <div className="rounded-xl bg-white p-3 text-blue-600 shadow-sm">
              <Target size={26} />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900">
                Conclusion
              </h2>
              <p className="mt-3 leading-8 text-slate-600">
                Unemployment is more than simply not having a job. It
                reflects the relationship between people seeking work
                and the employment opportunities available in an economy.
                Understanding its meaning, causes, types, and measurement
                helps explain labour market conditions and economic
                challenges in India and around the world.
              </p>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
