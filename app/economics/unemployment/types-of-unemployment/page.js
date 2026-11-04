
import Link from "next/link";
import {
  ArrowRight,
  AlertCircle,
  BookOpen,
  BriefcaseBusiness,
  Building2,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Factory,
  GraduationCap,
  HardHat,
  Lightbulb,
  MapPin,
  Network,
  RefreshCw,
  Search,
  Settings,
  Sprout,
  Target,
  TrendingDown,
  Users,
  UserX,
  Wallet,
  ChartNoAxesCombined,
  Layers3,
} from "lucide-react";
import AdSlot from "../../../../components/AdSlot";
export const metadata = {
  title: "Types of Unemployment | 12 Major Types, Examples & Differences",
  description:
    "Explore the major types of unemployment, including frictional, structural, cyclical, seasonal, disguised and educated unemployment, with definitions, examples and comparisons.",
};
const majorTypes = [
  {
    number: "01",
    title: "Frictional Unemployment",
    subtitle: "Temporary Job-Search Unemployment",
    icon: RefreshCw,
    description:
      "Occurs when people are temporarily without work while entering the labour market, changing jobs or searching for a more suitable employment opportunity.",
    example:
      "A software developer leaves one company and spends several weeks searching for a better position before joining another employer.",
    impact:
      "It can temporarily reduce income and leave vacancies unfilled. However, job searching helps workers find positions that better match their skills and preferences.",
    href: "/economics/unemployment/frictional-unemployment",
  },
  {
    number: "02",
    title: "Structural Unemployment",
    subtitle: "Mismatch Between Skills And Jobs",
    icon: Network,
    description:
      "Occurs when changes in the economy, industries or technology create a mismatch between workers' existing skills and the requirements of available jobs.",
    example:
      "A manufacturing worker loses a job after production becomes automated but does not possess the technical skills required for the new positions.",
    impact:
      "It can create long-term unemployment, increase skill gaps and require retraining, relocation or changes in education and employment policies.",
    href: "/economics/unemployment/structural-unemployment",
  },
  {
    number: "03",
    title: "Cyclical Unemployment",
    subtitle: "Unemployment During Economic Downturns",
    icon: TrendingDown,
    description:
      "Occurs when overall demand for goods and services falls during an economic slowdown or recession. Businesses respond by reducing production, recruitment or their workforce.",
    example:
      "A recession reduces automobile sales. Vehicle manufacturers cut production and lay off workers because fewer vehicles are being ordered.",
    impact:
      "It reduces household spending, weakens business revenue and can deepen an economic slowdown through lower aggregate demand.",
    href: "/economics/unemployment/cyclical-unemployment",
  },
  {
    number: "04",
    title: "Seasonal Unemployment",
    subtitle: "Employment Limited To Particular Seasons",
    icon: CalendarDays,
    description:
      "Occurs when employment opportunities regularly rise and fall according to seasons, weather conditions, agricultural cycles or seasonal demand.",
    example:
      "Agricultural labourers may find work during sowing and harvesting but have fewer employment opportunities between agricultural seasons.",
    impact:
      "It creates irregular income, seasonal hardship and uncertainty for workers whose livelihoods depend on industries with limited working periods.",
    href: "/economics/unemployment/seasonal-unemployment",
  },
];

const additionalTypes = [
  {
    title: "Open Unemployment",
    category: "Visible Unemployment",
    icon: UserX,
    meaning:
      "A person is willing and able to work and actively seeks employment but cannot find any job.",
    example:
      "A job-seeker applies to several companies but remains without employment because no suitable vacancy is available.",
    impact:
      "It directly reduces household earnings and leaves available human resources unused.",
  },
  {
    title: "Disguised Unemployment",
    category: "Surplus Labour",
    icon: Users,
    meaning:
      "More people are engaged in an activity than are actually required. Removing some workers would not significantly reduce total output.",
    example:
      "A small family farm employs six family members even though the same agricultural output could be produced by four.",
    impact:
      "It lowers labour productivity and hides the extent of underutilised labour.",
  },
  {
    title: "Educated Unemployment",
    category: "Education And Employment Mismatch",
    icon: GraduationCap,
    meaning:
      "Occurs when people with educational qualifications cannot find suitable employment matching their education, skills or expectations.",
    example:
      "A postgraduate applies for suitable professional positions but remains unemployed because relevant vacancies are limited.",
    impact:
      "It can waste educational investment, increase frustration among young people and contribute to skilled-worker migration.",
  },
  {
    title: "Technological Unemployment",
    category: "Automation And Innovation",
    icon: Settings,
    meaning:
      "Occurs when machines, automation, software or other technological developments replace human tasks faster than affected workers can move into new jobs.",
    example:
      "A factory introduces automated machinery and needs fewer workers for repetitive manual production tasks.",
    impact:
      "It can displace workers in affected occupations and increase the need for retraining and new technical skills.",
  },
  {
    title: "Hidden Unemployment",
    category: "Discouraged Job-Seekers",
    icon: Search,
    meaning:
      "Refers to people who want employment but are not counted as unemployed under a particular official statistical definition because they have stopped actively searching or do not meet its criteria.",
    example:
      "A person searches for work for months, becomes discouraged and stops applying, although they would accept a suitable job.",
    impact:
      "It can make the official unemployment rate appear lower than the wider extent of unmet demand for work.",
  },
  {
    title: "Casual Or Intermittent Unemployment",
    category: "Irregular Employment",
    icon: Clock3,
    meaning:
      "Occurs when workers depend on irregular, short-duration or occasional work and experience periods without employment between assignments.",
    example:
      "A daily-wage construction worker receives work for a few days but remains without paid work when no construction assignment is available.",
    impact:
      "It creates income uncertainty and makes household financial planning difficult.",
  },
  {
    title: "Long-Term Unemployment",
    category: "Duration-Based Classification",
    icon: CalendarDays,
    meaning:
      "Describes a situation in which a person remains unemployed for an extended period. The exact time threshold depends on the statistical definition being used.",
    example:
      "An experienced manufacturing worker remains unemployed for more than a year because local vacancies require skills they do not possess.",
    impact:
      "Extended joblessness can weaken professional skills and reduce future employability.",
  },
  {
    title: "Chronic Unemployment",
    category: "Persistent Unemployment",
    icon: AlertCircle,
    meaning:
      "Refers to unemployment that persists over a long period or remains a recurring problem in a region, community or economy.",
    example:
      "A region with very few industries experiences persistently high unemployment because new employment opportunities are not being created.",
    impact:
      "It can contribute to persistent poverty, migration, low regional development and economic inequality.",
  },
];

const statusTypes = [
  {
    title: "Voluntary Unemployment",
    icon: UserX,
    meaning:
      "A person chooses not to accept an available job at the offered wage or conditions, even though employment is available.",
    example:
      "A qualified professional rejects available positions because the offered salary is below the amount they are willing to accept.",
  },
  {
    title: "Involuntary Unemployment",
    icon: BriefcaseBusiness,
    meaning:
      "A person is willing and available to work at prevailing conditions but cannot find employment.",
    example:
      "A qualified factory worker is willing to work at the prevailing wage but cannot find a vacancy after the factory closes.",
  },
];

const impactAreas = [
  {
    title: "Household Income",
    icon: Wallet,
    text: "Unemployment reduces or interrupts earnings, making it harder for families to pay for food, housing, education and essential services.",
  },
  {
    title: "Economic Growth",
    icon: ChartNoAxesCombined,
    text: "When available workers remain unused, the economy may produce less than its potential output.",
  },
  {
    title: "Business Activity",
    icon: Building2,
    text: "Lower household purchasing power can reduce demand for products and services, affecting business sales and investment.",
  },
  {
    title: "Skills And Productivity",
    icon: Lightbulb,
    text: "Long periods without suitable work can weaken existing skills and make it harder for workers to adapt to changing industry requirements.",
  },
  {
    title: "Poverty And Inequality",
    icon: Users,
    text: "Unequal access to employment can widen income differences and increase financial vulnerability among households.",
  },
  {
    title: "Migration And Society",
    icon: MapPin,
    text: "A shortage of local opportunities can encourage people to migrate, affecting families and the development of their home regions.",
  },
];

const comparison = [
  ["Frictional", "Job Transitions", "A Person Changing Jobs"],
  ["Structural", "Skill Or Location Mismatch", "Workers Displaced By Industry Changes"],
  ["Cyclical", "Fall In Aggregate Demand", "Layoffs During A Recession"],
  ["Seasonal", "Seasonal Work Patterns", "Agricultural Off-Season"],
  ["Open", "No Available Employment", "An Active Job-Seeker Without A Job"],
  ["Disguised", "Surplus Labour", "Too Many Workers On A Small Farm"],
  ["Educated", "Limited Suitable Jobs", "A Graduate Unable To Find Suitable Work"],
  ["Technological", "Automation And Innovation", "Machines Replacing Repetitive Tasks"],
];

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-8 text-slate-600">{description}</p>
      )}
    </div>
  );
}

function MajorTypeCard({ item }) {
  const Icon = item.icon;

  return (
    <article className="group flex h-full flex-col rounded-3xl border border-blue-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl">
      <div className="mb-5 flex items-center justify-between">
        <span className="text-sm font-bold tracking-widest text-blue-500">
          {item.number}
        </span>
        <div className="rounded-2xl bg-gradient-to-br from-blue-100 to-indigo-100 p-3 text-blue-700">
          <Icon size={25} />
        </div>
      </div>

      <p className="mb-2 text-xs font-bold uppercase tracking-wider text-blue-600">
        {item.subtitle}
      </p>

      <h3 className="text-xl font-bold text-slate-950">{item.title}</h3>

      <p className="mt-4 text-sm leading-7 text-slate-600">
        {item.description}
      </p>

      <div className="mt-5 rounded-2xl bg-blue-50 p-4">
        <p className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-800">
          <Lightbulb size={15} />
          Real-World Example
        </p>
        <p className="text-sm leading-6 text-slate-700">{item.example}</p>
      </div>

      <div className="mt-5">
        <p className="mb-2 text-xs font-bold uppercase tracking-wider text-slate-500">
          Economic Impact
        </p>
        <p className="text-sm leading-6 text-slate-600">{item.impact}</p>
      </div>

      <Link
        href={item.href}
        className="mt-auto flex items-center gap-2 pt-6 text-sm font-bold text-blue-700 transition group-hover:gap-3"
      >
        Explore This Type <ArrowRight size={17} />
      </Link>
    </article>
  );
}

function AdditionalTypeCard({ item, index }) {
  const Icon = item.icon;

  return (
    <article className="rounded-2xl border border-blue-100 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg">
      <div className="mb-4 flex items-start justify-between">
        <div className="rounded-xl bg-blue-50 p-3 text-blue-700">
          <Icon size={22} />
        </div>
        <span className="text-xs font-bold text-slate-400">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <p className="mb-2 text-xs font-bold uppercase tracking-wider text-blue-600">
        {item.category}
      </p>

      <h3 className="text-lg font-bold text-slate-950">{item.title}</h3>

      <p className="mt-3 text-sm leading-7 text-slate-600">{item.meaning}</p>

      <div className="mt-4 border-t border-slate-100 pt-4">
        <p className="mb-1 text-xs font-bold uppercase tracking-wider text-slate-500">
          Example
        </p>
        <p className="text-sm leading-6 text-slate-700">{item.example}</p>
      </div>

      <div className="mt-4 rounded-xl bg-blue-50 p-3">
        <p className="mb-1 text-xs font-bold text-blue-800">Why It Matters</p>
        <p className="text-sm leading-6 text-slate-600">{item.impact}</p>
      </div>
    </article>
  );
}

function FlowNode({ icon: Icon, title, description }) {
  return (
    <div className="flex flex-1 flex-col items-center rounded-2xl border border-blue-100 bg-white p-4 text-center shadow-sm">
      <div className="mb-3 rounded-xl bg-blue-100 p-3 text-blue-700">
        <Icon size={23} />
      </div>
      <h3 className="text-sm font-bold text-slate-900">{title}</h3>
      <p className="mt-2 text-xs leading-5 text-slate-500">{description}</p>
    </div>
  );
}

export default function TypesOfUnemploymentPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-slate-800">

      {/* HERO SECTION */}
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-100">
        <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-blue-200/40 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-indigo-200/40 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:py-28">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-sm font-bold text-blue-700 shadow-sm">
              <BookOpen size={16} />
              Economics Knowledge Guide
            </div>

            <h1 className="max-w-2xl text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Types Of <span className="text-blue-700">Unemployment</span>:
              Understanding Why People Cannot Find Work
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Unemployment does not have a single cause. People may be without
              work because of economic slowdowns, changing technology, skill
              gaps, seasonal work patterns or a shortage of suitable vacancies.
              Explore the different types, their meanings, practical examples
              and their impact on the economy.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#major-types"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-700 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-700/20 transition hover:bg-blue-800"
              >
                Explore The Types <ArrowRight size={17} />
              </a>
              <a
                href="#india-context"
                className="inline-flex items-center gap-2 rounded-xl border border-blue-200 bg-white px-6 py-3.5 text-sm font-bold text-blue-800 transition hover:bg-blue-50"
              >
                Indian Context
              </a>
            </div>
          </div>

          {/* HERO DIAGRAM */}
          <div className="relative mx-auto w-full max-w-xl">
            <div className="rounded-[2rem] border border-blue-100 bg-white/90 p-6 shadow-2xl shadow-blue-900/10 backdrop-blur">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold text-slate-900">
                    Understanding Unemployment
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    Different Causes, Different Outcomes
                  </p>
                </div>
                <div className="rounded-xl bg-blue-100 p-3 text-blue-700">
                  <BriefcaseBusiness size={25} />
                </div>
              </div>

              <div className="rounded-2xl bg-gradient-to-r from-blue-700 to-indigo-700 p-5 text-white">
                <div className="flex items-center gap-3">
                  <Users size={27} />
                  <div>
                    <p className="text-lg font-bold">Unemployment</p>
                    <p className="text-sm text-blue-100">
                      People Seeking Work But Unable To Find It
                    </p>
                  </div>
                </div>
              </div>

              <div className="mx-auto h-8 w-px bg-blue-300" />

              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: "Job Transitions", icon: RefreshCw },
                  { label: "Skill Mismatch", icon: Network },
                  { label: "Economic Slowdown", icon: TrendingDown },
                  { label: "Seasonal Demand", icon: CalendarDays },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.label}
                      className="flex items-center gap-3 rounded-xl border border-blue-100 bg-blue-50/80 p-3"
                    >
                      <div className="rounded-lg bg-white p-2 text-blue-700 shadow-sm">
                        <Icon size={18} />
                      </div>
                      <span className="text-xs font-bold leading-5 text-slate-700">
                        {item.label}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="mt-5 flex items-center gap-2 rounded-xl bg-indigo-50 p-3 text-xs leading-5 text-indigo-800">
                <Target size={18} className="shrink-0" />
                Understanding The Cause Helps Identify The Right Employment
                Solution.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DEFINITION */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-blue-600">
              The Basic Concept
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              What Is Unemployment?
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              Unemployment generally refers to a situation in which people of
              working age who are available for work and seeking employment
              cannot find a job. Official statistical definitions also specify
              reference periods and conditions for being counted as unemployed.
            </p>
            <p className="mt-4 text-base leading-8 text-slate-600">
              The causes can differ significantly. A person between two jobs
              faces a different problem from a worker whose occupation has
              disappeared because of automation or a person who cannot find
              work during the agricultural off-season.
            </p>
          </div>

          <div className="rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 to-indigo-100 p-7">
            <div className="mb-5 flex items-center gap-3">
              <div className="rounded-xl bg-white p-3 text-blue-700 shadow-sm">
                <CheckCircle2 size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-950">
                Three Important Conditions
              </h3>
            </div>

            <div className="space-y-4">
              {[
                "The Person Does Not Have Employment.",
                "The Person Is Available To Work.",
                "The Person Is Actively Seeking Work, According To The Relevant Statistical Definition.",
              ].map((text, index) => (
                <div
                  key={text}
                  className="flex gap-3 rounded-xl bg-white/80 p-4"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-700 text-xs font-bold text-white">
                    {index + 1}
                  </span>
                  <p className="text-sm leading-6 text-slate-700">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CLASSIFICATION DIAGRAM */}
      <section className="bg-gradient-to-b from-blue-50/80 to-white py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Classification Overview"
            title="How Can Unemployment Be Classified?"
            description="Economists and labour-market studies use different classifications to understand why joblessness occurs, who is affected and how long it lasts."
          />

          <div className="mx-auto max-w-5xl rounded-3xl border border-blue-100 bg-white p-5 shadow-xl shadow-blue-900/5 sm:p-8">
            <div className="mx-auto max-w-sm rounded-2xl bg-gradient-to-r from-blue-700 to-indigo-700 p-5 text-center text-white shadow-lg">
              <Layers3 className="mx-auto mb-2" size={28} />
              <p className="text-xl font-bold">Unemployment</p>
              <p className="mt-1 text-xs text-blue-100">
                Multiple Causes And Classifications
              </p>
            </div>

            <div className="mx-auto h-9 w-px bg-blue-300" />

            <div className="grid gap-4 md:grid-cols-3">
              {[
                {
                  title: "Cause-Based Classification",
                  icon: Settings,
                  items: ["Frictional", "Structural", "Cyclical", "Seasonal"],
                },
                {
                  title: "Labour-Market Classification",
                  icon: Sprout,
                  items: ["Open", "Disguised", "Educated", "Technological"],
                },
                {
                  title: "Status And Duration",
                  icon: Clock3,
                  items: ["Voluntary", "Involuntary", "Hidden", "Long-Term"],
                },
              ].map((group) => {
                const Icon = group.icon;
                return (
                  <div
                    key={group.title}
                    className="rounded-2xl border border-blue-100 bg-blue-50/70 p-5"
                  >
                    <div className="mb-4 flex items-center gap-2 text-blue-800">
                      <Icon size={20} />
                      <h3 className="font-bold">{group.title}</h3>
                    </div>
                    <div className="space-y-2">
                      {group.items.map((item) => (
                        <div
                          key={item}
                          className="rounded-lg border border-blue-100 bg-white px-3 py-2 text-sm font-bold text-slate-700"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            <p className="mt-5 text-center text-xs leading-6 text-slate-500">
              These Categories Describe Different Dimensions And Can Overlap.
              They Are Not One Mutually Exclusive List.
            </p>
          </div>
        </div>
      </section>
<AdSlot />
      {/* FOUR MAJOR TYPES */}
      <section id="major-types" className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <SectionHeading
          eyebrow="The Four Core Types"
          title="Four Major Types Of Unemployment"
          description="These categories explain four important causes of joblessness: job-search transitions, structural changes, economic downturns and seasonal patterns."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {majorTypes.map((item) => (
            <MajorTypeCard key={item.number} item={item} />
          ))}
        </div>
      </section>

      {/* CAUSE AND EFFECT DIAGRAM */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Understanding The Causes"
            title="How Do Different Economic Conditions Create Unemployment?"
            description="The same outcome—people without jobs—can result from very different economic conditions."
          />

          <div className="rounded-3xl border border-blue-100 bg-white p-6 shadow-lg sm:p-9">
            <div className="mx-auto max-w-sm rounded-2xl bg-gradient-to-r from-blue-700 to-indigo-700 p-5 text-center text-white">
              <AlertCircle className="mx-auto mb-2" size={27} />
              <h3 className="text-xl font-bold">Unemployment Occurs</h3>
              <p className="mt-1 text-xs text-blue-100">
                When Suitable Employment Is Not Available
              </p>
            </div>

            <div className="mx-auto h-8 w-px bg-blue-300" />

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <FlowNode
                icon={RefreshCw}
                title="Job Transition"
                description="Workers Move Between Jobs Or Enter The Labour Market."
              />
              <FlowNode
                icon={Network}
                title="Skill Mismatch"
                description="Existing Skills Do Not Match Available Jobs."
              />
              <FlowNode
                icon={TrendingDown}
                title="Falling Demand"
                description="Businesses Reduce Production And Recruitment."
              />
              <FlowNode
                icon={CalendarDays}
                title="Seasonal Changes"
                description="Work Opportunities Change During The Year."
              />
            </div>

            <div className="mt-6 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 p-5 text-center">
              <p className="text-sm font-bold text-blue-900">
                Different Causes Require Different Employment Solutions
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Job matching, skill development, economic recovery and
                alternative seasonal employment address different problems.
              </p>
            </div>
          </div>
        </div>
      </section>
      <AdSlot />

      {/* INDIA CONTEXT */}
      <section id="india-context" className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <SectionHeading
          eyebrow="Employment Challenges In India"
          title="Other Important Types Of Unemployment"
          description="Apart from the four core categories, several other forms and classifications help explain employment conditions, particularly in economies with large agricultural and informal sectors."
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {additionalTypes.map((item, index) => (
            <AdditionalTypeCard
              key={item.title}
              item={item}
              index={index}
            />
          ))}
        </div>
      </section>

      {/* STATUS BASED TYPES */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Status-Based Classification"
            title="Voluntary Vs Involuntary Unemployment"
            description="This distinction focuses on whether a person chooses not to accept available employment or is unable to find work despite wanting a job."
          />

          <div className="grid gap-6 md:grid-cols-2">
            {statusTypes.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className="rounded-3xl border border-blue-100 bg-white p-7 shadow-sm"
                >
                  <div className="mb-5 inline-flex rounded-2xl bg-blue-100 p-4 text-blue-700">
                    <Icon size={27} />
                  </div>

                  <h3 className="text-2xl font-bold text-slate-950">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    {item.meaning}
                  </p>

                  <div className="mt-5 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 p-5">
                    <p className="mb-2 text-xs font-bold uppercase tracking-wider text-blue-800">
                      Practical Example
                    </p>
                    <p className="text-sm leading-7 text-slate-700">
                      {item.example}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* UNDEREMPLOYMENT */}
      <section className="bg-gradient-to-r from-indigo-700 to-blue-800 py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-blue-200">
              Important Distinction
            </p>

            <h2 className="text-3xl font-bold sm:text-4xl">
              Unemployment And Underemployment Are Not The Same
            </h2>

            <p className="mt-5 leading-8 text-blue-100">
              An unemployed person has no job and meets the relevant
              unemployment criteria. An underemployed person already has work
              but may want more working hours or may not be using their skills
              and abilities fully.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/20 bg-white/10 p-6">
              <UserX size={29} className="mb-4 text-blue-200" />
              <h3 className="text-lg font-bold">Unemployment</h3>
              <p className="mt-3 text-sm leading-7 text-blue-100">
                A qualified person is actively looking for work but has no job.
              </p>
            </div>

            <div className="rounded-2xl border border-white/20 bg-white/10 p-6">
              <BriefcaseBusiness size={29} className="mb-4 text-blue-200" />
              <h3 className="text-lg font-bold">Underemployment</h3>
              <p className="mt-3 text-sm leading-7 text-blue-100">
                A person works part-time but wants full-time hours, or works
                in a role below their skill level.
              </p>
            </div>
          </div>
        </div>
      </section>
<AdSlot />
    

      {/* ECONOMIC IMPACT DIAGRAM */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Economic Impact Chain"
            title="How Can Unemployment Affect The Wider Economy?"
            description="Unemployment can create a chain reaction when reduced household income leads to lower spending and weaker business activity."
          />

          <div className="rounded-3xl border border-blue-100 bg-white p-6 shadow-lg sm:p-9">
            <div className="mx-auto max-w-md space-y-3">
              {[
                {
                  title: "Higher Unemployment",
                  description: "More People Remain Without Employment.",
                  icon: UserX,
                },
                {
                  title: "Lower Household Income",
                  description: "Families Have Less Money To Spend.",
                  icon: Wallet,
                },
                {
                  title: "Reduced Consumer Spending",
                  description: "Demand For Goods And Services May Fall.",
                  icon: TrendingDown,
                },
                {
                  title: "Lower Business Revenue",
                  description: "Businesses May Reduce Production And Investment.",
                  icon: Building2,
                },
                {
                  title: "Slower Economic Activity",
                  description: "Economic Growth And Employment Creation May Weaken.",
                  icon: ChartNoAxesCombined,
                },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={item.title}>
                    <div className="flex items-center gap-4 rounded-2xl border border-blue-100 bg-gradient-to-r from-blue-50 to-white p-4">
                      <div className="rounded-xl bg-blue-100 p-3 text-blue-700">
                        <Icon size={23} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-slate-900">
                          {item.title}
                        </h3>
                        <p className="mt-1 text-sm text-slate-600">
                          {item.description}
                        </p>
                      </div>
                      <span className="text-xs font-bold text-blue-400">
                        0{index + 1}
                      </span>
                    </div>
                    {index !== 4 && (
                      <div className="flex justify-center py-1">
                        <ArrowRight
                          size={20}
                          className="rotate-90 text-blue-400"
                        />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <p className="mt-6 text-center text-xs leading-6 text-slate-500">
              This Is An Illustrative Economic Chain. Actual Effects Depend On
              The Scale And Duration Of Unemployment And The Wider Economic
              Conditions.
            </p>
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <SectionHeading
          eyebrow="Quick Reference"
          title="Compare The Major Types Of Unemployment"
          description="Use this comparison to identify the main cause behind each type."
        />

        <div className="overflow-hidden rounded-3xl border border-blue-100 bg-white shadow-lg shadow-blue-900/5">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[650px] text-left text-sm">
              <thead className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white">
                <tr>
                  <th className="px-5 py-4 font-bold">Type</th>
                  <th className="px-5 py-4 font-bold">Main Cause</th>
                  <th className="px-5 py-4 font-bold">Typical Example</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-blue-50">
                {comparison.map((row, index) => (
                  <tr
                    key={row[0]}
                    className={index % 2 === 0 ? "bg-white" : "bg-blue-50/50"}
                  >
                    <td className="px-5 py-4 font-bold text-blue-800">
                      {row[0]}
                    </td>
                    <td className="px-5 py-4 text-slate-700">{row[1]}</td>
                    <td className="px-5 py-4 text-slate-600">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* RELATED CONCEPTS */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Related Economic Concepts"
            title="Other Important Unemployment Concepts"
            description="Some terms are closely connected to unemployment but describe broader labour-market conditions rather than separate individual types."
          />

          <div className="grid gap-5 md:grid-cols-3">
            <article className="rounded-2xl border border-blue-100 bg-white p-6">
              <Factory size={26} className="mb-4 text-blue-700" />
              <h3 className="text-lg font-bold text-slate-950">
                Natural Rate Of Unemployment
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                The unemployment rate associated with an economy's normal
                labour-market functioning, commonly explained through
                frictional and structural unemployment. It does not mean that
                unemployment is zero.
              </p>
            </article>

            <article className="rounded-2xl border border-blue-100 bg-white p-6">
              <TrendingDown size={26} className="mb-4 text-blue-700" />
              <h3 className="text-lg font-bold text-slate-950">
                Demand-Deficient Unemployment
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Unemployment caused by insufficient overall demand for goods
                and services. It is commonly associated with cyclical
                unemployment.
              </p>
            </article>

            <article className="rounded-2xl border border-blue-100 bg-white p-6">
              <HardHat size={26} className="mb-4 text-blue-700" />
              <h3 className="text-lg font-bold text-slate-950">
                Rural And Urban Unemployment
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                These terms describe the location or setting of unemployment.
                Rural challenges can include agricultural seasonality and
                surplus labour, while urban challenges can include educated
                unemployment and industrial job losses.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* KEY TAKEAWAYS */}
      <section className="mx-auto max-w-5xl px-5 py-20 sm:px-8">
        <div className="rounded-3xl border border-blue-100 bg-gradient-to-br from-white to-blue-50 p-7 shadow-xl shadow-blue-900/5 sm:p-10">
          <div className="mb-6 flex items-center gap-3">
            <div className="rounded-xl bg-blue-100 p-3 text-blue-700">
              <CheckCircle2 size={26} />
            </div>
            <h2 className="text-2xl font-bold text-slate-950">
              Key Takeaways
            </h2>
          </div>

          <div className="space-y-4">
            {[
              "Unemployment Can Arise From Job Transitions, Structural Economic Changes, Falling Demand And Seasonal Work Patterns.",
              "Disguised Unemployment Is Particularly Important When Studying Surplus Labour And Agricultural Employment.",
              "Educated And Technological Unemployment Highlight The Relationship Between Education, Skills And Changing Labour Demand.",
              "Hidden Unemployment And Underemployment Can Reveal Labour-Market Difficulties That The Headline Unemployment Rate May Not Fully Describe.",
              "Different Types Can Overlap. Understanding The Underlying Cause Is Important When Designing Employment Policies.",
            ].map((item) => (
              <div key={item} className="flex gap-3">
                <CheckCircle2
                  size={19}
                  className="mt-1 shrink-0 text-blue-600"
                />
                <p className="leading-7 text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

     <AdSlot />

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-5 py-20 sm:px-8">
        <SectionHeading
          eyebrow="Common Questions"
          title="Frequently Asked Questions"
        />

        <div className="space-y-4">
          {[
            {
              q: "What Are The Four Major Types Of Unemployment?",
              a: "The four commonly discussed core types are frictional, structural, cyclical and seasonal unemployment. They describe different causes of joblessness.",
            },
            {
              q: "Which Types Of Unemployment Are Important In India?",
              a: "Seasonal and disguised unemployment are important in discussions of agricultural employment. Educated, structural, technological and open unemployment are also useful for understanding wider labour-market challenges.",
            },
            {
              q: "Is Disguised Unemployment The Same As Hidden Unemployment?",
              a: "No. Disguised unemployment describes surplus workers whose removal would not significantly reduce output. Hidden unemployment often describes people who want work but are not counted as unemployed under the applicable statistical criteria, such as discouraged job-seekers.",
            },
            {
              q: "Is Underemployment A Type Of Unemployment?",
              a: "Underemployment is a related but different labour-market condition. An underemployed person has work but may want more hours or may be working below their skill level.",
            },
            {
              q: "Can One Person Experience More Than One Type Of Unemployment?",
              a: "Yes. For example, a worker displaced by automation may experience technological and structural unemployment together. A prolonged economic downturn can also make it harder for displaced workers to find new jobs.",
            },
            {
              q: "What Is The Difference Between Cyclical And Seasonal Unemployment?",
              a: "Cyclical unemployment is associated with economy-wide changes in demand and business activity. Seasonal unemployment follows predictable patterns during particular seasons or periods of the year.",
            },
          ].map((item) => (
            <details
              key={item.q}
              className="group rounded-2xl border border-blue-100 bg-white p-5 open:border-blue-300 open:shadow-md"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-slate-950">
                {item.q}
                <span className="rounded-full bg-blue-50 p-2 text-blue-700 transition group-open:rotate-45">
                  <ArrowRight size={17} />
                </span>
              </summary>
              <p className="mt-4 border-t border-blue-50 pt-4 text-sm leading-7 text-slate-600">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </section>

     
    </main>
  );
}
