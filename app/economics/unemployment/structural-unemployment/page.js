
import Link from "next/link";
import {
  ArrowRight,
  TrendingDown,
  Factory,
  GraduationCap,
  Cpu,
  BriefcaseBusiness,
  Building2,
  RefreshCw,
  BookOpen,
  Users,
  Globe,
  Lightbulb,
  AlertTriangle,
  CheckCircle2,
  Target,
  Layers,
  Laptop,
  Wrench,
  ChartNoAxesCombined,
  MapPin,
  Clock,
  Search,
  ChevronRight,
  ShieldCheck,
  BrainCircuit,
} from "lucide-react";
import AdSlot from "../../../../components/AdSlot";

const causes = [
  {
    icon: Cpu,
    title: "Technological Changes",
    color: "blue",
    description:
      "Automation, artificial intelligence, robotics, and advanced software can replace tasks previously performed by human workers. Employees without the skills needed for new roles may struggle to find employment.",
    example: "Automated production lines reducing demand for certain manual factory jobs.",
  },
  {
    icon: Factory,
    title: "Decline Of Traditional Industries",
    color: "orange",
    description:
      "Industries may shrink because of changing consumer preferences, outdated production methods, international competition, or the availability of better alternatives.",
    example: "A decline in demand for traditional film photography products.",
  },
  {
    icon: GraduationCap,
    title: "Skills Mismatch",
    color: "indigo",
    description:
      "Workers may have qualifications or experience that do not match the requirements of available jobs. Employers may need digital, technical, or specialised skills that job seekers do not possess.",
    example: "A worker trained in traditional accounting struggling to qualify for a data analytics role.",
  },
  {
    icon: Globe,
    title: "Globalisation And International Competition",
    color: "cyan",
    description:
      "Businesses may relocate production or source goods from countries where production costs are lower. This can reduce demand for certain occupations in the affected regions.",
    example: "A local manufacturing unit losing business to lower-cost international producers.",
  },
  {
    icon: MapPin,
    title: "Geographical Mismatch",
    color: "emerald",
    description:
      "Available jobs may be concentrated in cities or regions different from where unemployed workers live. Relocation costs, family responsibilities, and housing constraints can prevent workers from moving.",
    example: "Manufacturing jobs disappearing in a small town while new technology jobs emerge in Bengaluru.",
  },
  {
    icon: Building2,
    title: "Industrial And Economic Restructuring",
    color: "violet",
    description:
      "Changes in the structure of an economy can shift employment from one sector to another. Workers in declining sectors may not automatically qualify for jobs in expanding industries.",
    example: "Employment shifting from agriculture and traditional manufacturing towards services and technology.",
  },
];

const examples = [
  {
    number: "01",
    title: "Factory Workers Replaced By Automation",
    icon: Factory,
    description:
      "A manufacturing company introduces robotic machines to assemble products. Earlier, it employed 100 workers for repetitive assembly tasks. After automation, it needs fewer manual workers and more technicians who can operate and maintain the machines.",
    problem:
      "Some former assembly workers lack the technical knowledge required for the new positions.",
    solution:
      "Technical training, machinery operation courses, and reskilling programmes can help affected workers qualify for new jobs.",
    tag: "Technology",
    color: "blue",
  },
  {
    number: "02",
    title: "Workers Affected By A Declining Industry",
    icon: BriefcaseBusiness,
    description:
      "A town depends heavily on traditional textile manufacturing. Over time, demand shifts towards newer materials and production methods. Several factories close, leaving experienced textile workers without suitable employment.",
    problem:
      "Their existing experience may not match the requirements of expanding industries such as modern manufacturing, logistics, or IT-enabled services.",
    solution:
      "Vocational education, industry partnerships, and career transition programmes can help workers enter growing sectors.",
    tag: "Industry Decline",
    color: "orange",
  },
  {
    number: "03",
    title: "Traditional Skills Become Outdated",
    icon: Laptop,
    description:
      "An employee has spent many years maintaining paper-based business records. Companies gradually adopt cloud accounting software, automated reporting, and digital financial systems.",
    problem:
      "The employee's traditional skills are no longer sufficient for many available accounting and finance positions.",
    solution:
      "Training in accounting software, spreadsheets, data analysis, and digital financial tools can improve employability.",
    tag: "Skills Mismatch",
    color: "indigo",
  },
];

const effects = [
  {
    title: "Long-Term Unemployment",
    description:
      "Workers may remain unemployed for extended periods because their existing skills are not suitable for the available jobs.",
    icon: Clock,
  },
  {
    title: "Loss Of Income",
    description:
      "Unemployed workers may experience reduced household income, financial insecurity, and difficulty meeting regular expenses.",
    icon: TrendingDown,
  },
  {
    title: "Skill Depreciation",
    description:
      "Professional knowledge and practical experience can become outdated when workers remain disconnected from changing industries.",
    icon: BrainCircuit,
  },
  {
    title: "Regional Economic Problems",
    description:
      "Areas dependent on declining industries may experience lower spending, business closures, migration, and reduced economic activity.",
    icon: Building2,
  },
  {
    title: "Income Inequality",
    description:
      "Workers with advanced or in-demand skills may benefit from new opportunities, while workers without access to training may fall behind.",
    icon: Users,
  },
  {
    title: "Lower Economic Productivity",
    description:
      "An economy may not fully use its available workforce when workers cannot move easily into jobs that match their abilities.",
    icon: ChartNoAxesCombined,
  },
];

const solutions = [
  {
    title: "Reskilling And Upskilling",
    icon: GraduationCap,
    description:
      "Provide workers with training in new technologies, digital tools, machinery, data analysis, and other skills demanded by expanding industries.",
    action: "Help workers qualify for occupations different from their previous roles.",
  },
  {
    title: "Vocational And Technical Education",
    icon: Wrench,
    description:
      "Expand practical training programmes in areas such as electronics, healthcare, manufacturing, construction, logistics, and computer technology.",
    action: "Connect education with real workplace requirements.",
  },
  {
    title: "Career Guidance And Job Placement",
    icon: Search,
    description:
      "Help displaced workers identify suitable occupations, understand skill requirements, and access employers looking for trained candidates.",
    action: "Reduce the gap between available workers and suitable vacancies.",
  },
  {
    title: "Support For Growing Industries",
    icon: Building2,
    description:
      "Encourage investment and business development in sectors that can create sustainable employment opportunities.",
    action: "Create new employment opportunities in expanding sectors.",
  },
  {
    title: "Regional Development",
    icon: MapPin,
    description:
      "Improve infrastructure, connectivity, industrial facilities, and investment opportunities in regions affected by declining industries.",
    action: "Bring employment opportunities closer to affected communities.",
  },
  {
    title: "Lifelong Learning",
    icon: BookOpen,
    description:
      "Encourage continuous learning so employees can update their knowledge as technology, business practices, and industry requirements change.",
    action: "Reduce the risk of skills becoming outdated in the future.",
  },
];

const comparison = [
  {
    type: "Structural Unemployment",
    cause: "Mismatch between workers' skills or locations and available jobs.",
    duration: "Can be long-term.",
    example: "Factory workers unable to qualify for newly created technical jobs.",
    color: "blue",
  },
  {
    type: "Frictional Unemployment",
    cause: "Temporary period between leaving one job and finding another.",
    duration: "Usually short-term.",
    example: "An employee searching for a better job after resigning.",
    color: "violet",
  },
  {
    type: "Cyclical Unemployment",
    cause: "Decline in overall economic activity and aggregate demand.",
    duration: "Linked to the business cycle.",
    example: "Workers losing jobs during an economic recession.",
    color: "orange",
  },
];


function SectionHeading({ eyebrow, title, description, dark = false }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      {eyebrow && (
        <p
          className={`mb-3 text-sm font-bold uppercase tracking-[0.16em] ${
            dark ? "text-blue-300" : "text-blue-600"
          }`}
        >
          {eyebrow}
        </p>
      )}

      <h2
        className={`text-3xl font-bold tracking-tight sm:text-4xl ${
          dark ? "text-white" : "text-slate-900"
        }`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`mt-4 text-base leading-7 sm:text-lg ${
            dark ? "text-blue-100/80" : "text-slate-600"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}


function ExampleCard({ item }) {
  const Icon = item.icon;

  const colorClasses = {
    blue: "bg-blue-100 text-blue-700 border-blue-200",
    orange: "bg-orange-100 text-orange-700 border-orange-200",
    indigo: "bg-indigo-100 text-indigo-700 border-indigo-200",
  };

  return (
    <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="border-b border-slate-100 bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-6">
        <div className="flex items-center justify-between gap-4">
          <span className="text-3xl font-bold text-blue-200">{item.number}</span>
          <span className={`rounded-full border px-3 py-1 text-xs font-bold ${colorClasses[item.color]}`}>
            {item.tag}
          </span>
        </div>
        <div className="mt-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-blue-700 shadow-sm">
          <Icon size={28} />
        </div>
        <h3 className="mt-5 text-xl font-bold leading-snug text-slate-900">
          {item.title}
        </h3>
      </div>

      <div className="space-y-5 p-6">
        <p className="text-sm leading-7 text-slate-600">{item.description}</p>

        <div className="rounded-2xl border border-red-100 bg-red-50 p-4">
          <p className="mb-2 flex items-center gap-2 text-sm font-bold text-red-800">
            <AlertTriangle size={16} />
            Structural Problem
          </p>
          <p className="text-sm leading-6 text-red-900">{item.problem}</p>
        </div>

        <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-4">
          <p className="mb-2 flex items-center gap-2 text-sm font-bold text-emerald-800">
            <CheckCircle2 size={16} />
            Possible Solution
          </p>
          <p className="text-sm leading-6 text-emerald-900">{item.solution}</p>
        </div>
      </div>
    </article>
  );
}

export default function StructuralUnemploymentPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-slate-800">
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-sky-50 via-white to-indigo-100">
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-blue-200/30 blur-3xl" />
        <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-indigo-200/40 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:py-28">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-sm font-bold text-blue-700 shadow-sm">
              <Layers size={16} />
              Economics · Unemployment
            </div>

            <h1 className="max-w-2xl text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Structural
              <span className="block bg-gradient-to-r from-blue-700 to-indigo-600 bg-clip-text text-transparent">
                Unemployment
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600">
              Understand why workers can remain unemployed even when job
              opportunities exist. Explore how technology, changing industries,
              and skill mismatches create structural unemployment.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#causes"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-700 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-700/20 transition hover:bg-blue-800"
              >
                Explore The Causes <ArrowRight size={17} />
              </a>
              <a
                href="#solutions"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-sm font-bold text-slate-700 transition hover:border-blue-300 hover:text-blue-700"
              >
                Find Solutions
              </a>
            </div>

            <div className="mt-10 grid max-w-lg grid-cols-3 gap-3">
              <div className="rounded-2xl border border-white bg-white/80 p-4 shadow-sm">
                <Cpu className="mb-2 text-blue-700" size={22} />
                <p className="text-xs font-bold text-slate-800">Technology</p>
                <p className="mt-1 text-xs text-slate-500">Changes</p>
              </div>
              <div className="rounded-2xl border border-white bg-white/80 p-4 shadow-sm">
                <GraduationCap className="mb-2 text-indigo-700" size={22} />
                <p className="text-xs font-bold text-slate-800">Skills</p>
                <p className="mt-1 text-xs text-slate-500">Mismatch</p>
              </div>
              <div className="rounded-2xl border border-white bg-white/80 p-4 shadow-sm">
                <Factory className="mb-2 text-orange-600" size={22} />
                <p className="text-xs font-bold text-slate-800">Industry</p>
                <p className="mt-1 text-xs text-slate-500">Restructuring</p>
              </div>
            </div>
          </div>

          {/* Hero Diagram */}
          <div className="relative mx-auto w-full max-w-xl">
            <div className="rounded-[2rem] border border-white bg-white/80 p-5 shadow-2xl shadow-blue-900/10 backdrop-blur">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold text-slate-900">
                    How Structural Unemployment Develops
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    A change in the job market
                  </p>
                </div>
                <div className="rounded-xl bg-blue-100 p-3 text-blue-700">
                  <ChartNoAxesCombined size={24} />
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-4 rounded-2xl border border-orange-100 bg-orange-50 p-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-orange-700">
                    <Factory size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">Industry Changes</p>
                    <p className="mt-1 text-xs text-slate-600">
                      Old production methods and occupations decline
                    </p>
                  </div>
                </div>

                <div className="flex justify-center">
                  <ArrowRight className="rotate-90 text-blue-500" size={23} />
                </div>

                <div className="flex items-center gap-4 rounded-2xl border border-indigo-100 bg-indigo-50 p-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-100 text-indigo-700">
                    <GraduationCap size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">Skills Mismatch</p>
                    <p className="mt-1 text-xs text-slate-600">
                      Workers lack skills required by emerging jobs
                    </p>
                  </div>
                </div>

                <div className="flex justify-center">
                  <ArrowRight className="rotate-90 text-blue-500" size={23} />
                </div>

                <div className="flex items-center gap-4 rounded-2xl border border-red-100 bg-red-50 p-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-100 text-red-700">
                    <Users size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">
                      Structural Unemployment
                    </p>
                    <p className="mt-1 text-xs text-slate-600">
                      Workers cannot easily access available jobs
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-5 rounded-xl bg-slate-900 p-4 text-center">
                <p className="text-sm font-bold text-white">
                  The labour market changes, but worker skills do not adjust
                  immediately.
                </p>
              </div>
            </div>
            <div className="absolute -bottom-5 -right-3 -z-10 h-32 w-32 rounded-full bg-indigo-300/40 blur-2xl" />
          </div>
        </div>
      </section>

      {/* DEFINITION */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <SectionHeading
          eyebrow="Meaning And Concept"
          title="What Is Structural Unemployment?"
          description="Structural unemployment occurs when there is a mismatch between the skills, qualifications, experience, or location of workers and the requirements of available jobs."
        />

        <div className="grid items-stretch gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-8">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-700 text-white shadow-lg shadow-blue-700/20">
              <BookOpen size={28} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">
              Simple Explanation
            </h3>
            <p className="mt-4 leading-8 text-slate-600">
              Imagine a company needs employees who can operate modern
              automated machines. However, many unemployed workers in the
              region have experience only with older machinery. Even if jobs
              are available, these workers may not be qualified to perform
              them.
            </p>
            <p className="mt-4 rounded-2xl bg-white p-4 text-sm font-bold leading-6 text-blue-800 shadow-sm">
              The main issue is not necessarily a shortage of jobs. It is the
              mismatch between the workers available and the skills or
              locations required by employers.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900">
              Key Characteristics
            </h3>
            <div className="mt-6 space-y-5">
              {[
                "Caused by long-term changes in the structure of an economy.",
                "Can continue even when vacancies exist in other occupations.",
                "Often requires retraining, relocation, or career changes.",
                "May affect particular industries, occupations, or regions more severely.",
                "Can be difficult to resolve through general demand-boosting policies alone.",
              ].map((item, index) => (
                <div key={index} className="flex gap-3">
                  <CheckCircle2
                    className="mt-0.5 shrink-0 text-blue-600"
                    size={20}
                  />
                  <p className="text-sm leading-6 text-slate-600">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
<AdSlot />
      {/* CAUSES */}
      <section
        id="causes"
        className="bg-gradient-to-b from-slate-50 to-white px-5 py-20 sm:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Why Does It Happen?"
            title="Major Causes Of Structural Unemployment"
            description="Structural unemployment develops when fundamental changes in the economy alter the types of workers and skills businesses need."
          />

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {causes.map((cause, index) => {
              const Icon = cause.icon;
              const colorMap = {
                blue: "bg-blue-100 text-blue-700",
                orange: "bg-orange-100 text-orange-700",
                indigo: "bg-indigo-100 text-indigo-700",
                cyan: "bg-cyan-100 text-cyan-700",
                emerald: "bg-emerald-100 text-emerald-700",
                violet: "bg-violet-100 text-violet-700",
              };

              return (
                <article
                  key={cause.title}
                  className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex items-center justify-between">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${colorMap[cause.color]}`}>
                      <Icon size={24} />
                    </div>
                    <span className="text-2xl font-bold text-slate-200">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-slate-900">
                    {cause.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {cause.description}
                  </p>
                  <div className="mt-5 rounded-xl bg-slate-50 p-4">
                    <p className="text-xs font-bold uppercase tracking-wide text-blue-700">
                      Example
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-700">
                      {cause.example}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* PRACTICAL EXAMPLES */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <SectionHeading
          eyebrow="Real-World Situations"
          title="3 Practical Examples Of Structural Unemployment"
          description="These examples show how changes in technology, industries, and required skills can make existing workers unsuitable for available employment opportunities."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {examples.map((item) => (
            <ExampleCard key={item.number} item={item} />
          ))}
        </div>
      </section>

      {/* FACTORS */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Factors Affecting The Problem"
            title="What Determines The Level Of Structural Unemployment?"
            description="The extent of structural unemployment depends on how quickly workers, businesses, education systems, and regional economies adjust to changing labour market conditions."
          />

          <div className="grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Speed Of Technological Change",
                description:
                  "Rapid automation and digital transformation can make existing skills outdated faster than workers can acquire new ones.",
                icon: Cpu,
              },
              {
                title: "Quality Of Education And Training",
                description:
                  "Education systems that do not keep pace with industry requirements may produce graduates and workers with skills that employers no longer need.",
                icon: GraduationCap,
              },
              {
                title: "Worker Mobility",
                description:
                  "The ability to move between locations, industries, and occupations affects how easily workers can access available employment.",
                icon: MapPin,
              },
              {
                title: "Availability Of Training",
                description:
                  "The cost, accessibility, quality, and relevance of retraining programmes influence how quickly workers can adapt.",
                icon: BookOpen,
              },
              {
                title: "Industrial Diversification",
                description:
                  "Regions dependent on a small number of declining industries may experience greater disruption than regions with diverse employment opportunities.",
                icon: Layers,
              },
              {
                title: "Employer Skill Requirements",
                description:
                  "Changes in qualifications, professional certifications, digital knowledge, and practical experience can affect workers' eligibility for vacancies.",
                icon: BriefcaseBusiness,
              },
            ].map((factor) => {
              const Icon = factor.icon;
              return (
                <div
                  key={factor.title}
                  className="flex gap-5 rounded-2xl border border-white bg-white/90 p-6 shadow-sm"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                    <Icon size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">
                      {factor.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      {factor.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
<AdSlot />
      {/* IMPACT */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <SectionHeading
          eyebrow="Economic And Social Effects"
          title="Impacts Of Structural Unemployment"
          description="When workers cannot transition into changing industries, the consequences can affect households, businesses, communities, and the wider economy."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {effects.map((effect, index) => {
            const Icon = effect.icon;
            return (
              <div
                key={effect.title}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-50 text-red-600">
                  <Icon size={24} />
                </div>
                <h3 className="mt-5 text-lg font-bold text-slate-900">
                  {effect.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {effect.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* SOLUTIONS */}
      <section
        id="solutions"
        className="bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 px-5 py-20 text-white sm:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Reducing Structural Unemployment"
            title="Measures To Reduce Structural Unemployment"
            description="The most effective approach is to help workers adapt to changing economic conditions while encouraging the development of new employment opportunities."
          dark={true}
           />

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <article
                  key={solution.title}
                  className="rounded-3xl border border-white/10 bg-white/[0.07] p-6 backdrop-blur transition hover:bg-white/[0.11]"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-400/15 text-blue-300">
                      <Icon size={24} />
                    </div>
                    <span className="text-2xl font-bold text-white/20">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-white">
                    {solution.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-blue-100/80">
                    {solution.description}
                  </p>
                  <div className="mt-5 flex gap-2 rounded-xl bg-white/10 p-4">
                    <Target
                      size={18}
                      className="mt-0.5 shrink-0 text-emerald-300"
                    />
                    <p className="text-xs leading-6 text-blue-50">
                      {solution.action}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-10 rounded-3xl border border-blue-300/20 bg-blue-400/10 p-7 text-center">
            <Lightbulb className="mx-auto text-yellow-300" size={32} />
            <h3 className="mt-4 text-xl font-bold text-white">
              The Central Idea
            </h3>
            <p className="mx-auto mt-3 max-w-3xl leading-7 text-blue-100">
              Structural unemployment cannot be addressed only by creating
              more vacancies. Workers must also be equipped with the skills,
              qualifications, and mobility needed to access those jobs.
            </p>
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <SectionHeading
          eyebrow="Understand The Difference"
          title="Structural Vs Frictional Vs Cyclical Unemployment"
          description="All three are forms of unemployment, but they arise for different economic reasons and require different solutions."
        />

        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[720px] border-collapse text-left">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="p-5 text-sm font-bold">Type</th>
                  <th className="p-5 text-sm font-bold">Main Cause</th>
                  <th className="p-5 text-sm font-bold">Typical Duration</th>
                  <th className="p-5 text-sm font-bold">Example</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((item) => (
                  <tr key={item.type} className="border-t border-slate-100">
                    <td className="p-5 align-top">
                      <span className="font-bold text-slate-900">
                        {item.type}
                      </span>
                    </td>
                    <td className="p-5 align-top text-sm leading-6 text-slate-600">
                      {item.cause}
                    </td>
                    <td className="p-5 align-top text-sm leading-6 text-slate-600">
                      {item.duration}
                    </td>
                    <td className="p-5 align-top text-sm leading-6 text-slate-600">
                      {item.example}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <Link
            href="/economics/unemployment/frictional-unemployment"
            className="group flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-blue-300 hover:shadow-md"
          >
            <div>
              <p className="text-xs font-bold uppercase tracking-wide text-violet-600">
                Related Topic
              </p>
              <p className="mt-1 font-bold text-slate-900">
                Frictional Unemployment
              </p>
            </div>
            <ChevronRight className="text-slate-400 transition group-hover:translate-x-1 group-hover:text-blue-700" />
          </Link>

          <Link
            href="/economics/unemployment/cyclical-unemployment"
            className="group flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-blue-300 hover:shadow-md"
          >
            <div>
              <p className="text-xs font-bold uppercase tracking-wide text-orange-600">
                Related Topic
              </p>
              <p className="mt-1 font-bold text-slate-900">
                Cyclical Unemployment
              </p>
            </div>
            <ChevronRight className="text-slate-400 transition group-hover:translate-x-1 group-hover:text-blue-700" />
          </Link>

          <Link
            href="/economics/unemployment/types-of-unemployment"
            className="group flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-blue-300 hover:shadow-md"
          >
            <div>
              <p className="text-xs font-bold uppercase tracking-wide text-blue-600">
                Explore More
              </p>
              <p className="mt-1 font-bold text-slate-900">
                Types Of Unemployment
              </p>
            </div>
            <ChevronRight className="text-slate-400 transition group-hover:translate-x-1 group-hover:text-blue-700" />
          </Link>
        </div>
      </section>
<AdSlot />
      {/* INDIA CONTEXT */}
      <section className="bg-gradient-to-r from-blue-50 via-white to-indigo-50 px-5 py-20 sm:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.15em] text-blue-700">
              Indian Economy
            </p>
            <h2 className="text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
              Structural Unemployment In India
            </h2>
            <p className="mt-5 leading-8 text-slate-600">
              Structural changes in India's economy can create differences
              between the skills workers possess and the skills employers
              require. For example, the expansion of digital services,
              automation, modern manufacturing, and organised industries
              changes the types of jobs available.
            </p>
            <p className="mt-4 leading-8 text-slate-600">
              Workers in traditional occupations may need access to technical
              education, digital training, vocational programmes, and
              employment opportunities in growing sectors to make this
              transition.
            </p>
          </div>

          <div className="rounded-3xl border border-blue-100 bg-white p-7 shadow-lg shadow-blue-900/5">
            <h3 className="text-xl font-bold text-slate-900">
              Areas That Can Support The Transition
            </h3>
            <div className="mt-6 space-y-4">
              {[
                {
                  title: "Skill Development",
                  detail:
                    "Training aligned with changing industry requirements.",
                  icon: GraduationCap,
                },
                {
                  title: "Digital Literacy",
                  detail:
                    "Helping workers use modern software and digital tools.",
                  icon: Laptop,
                },
                {
                  title: "Modern Manufacturing",
                  detail:
                    "Preparing workers for advanced machinery and production.",
                  icon: Factory,
                },
                {
                  title: "Employment Connectivity",
                  detail:
                    "Connecting job seekers with opportunities across regions.",
                  icon: Globe,
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                      <Icon size={21} />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">{item.title}</p>
                      <p className="mt-1 text-sm leading-6 text-slate-600">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-5 py-20 sm:px-8">
        <SectionHeading
          eyebrow="Common Questions"
          title="Frequently Asked Questions"
          description="Quick answers to common questions about structural unemployment."
        />

        <div className="space-y-4">
          {[
            {
              q: "What is the main cause of structural unemployment?",
              a: "The main cause is a mismatch between workers' existing skills, qualifications, or locations and the requirements of available jobs. Technological changes, industrial decline, and globalisation can contribute to this mismatch.",
            },
            {
              q: "Can structural unemployment occur when jobs are available?",
              a: "Yes. Jobs may be available, but unemployed workers may not have the required skills, qualifications, or ability to access those jobs.",
            },
            {
              q: "How is structural unemployment different from frictional unemployment?",
              a: "Structural unemployment results from a mismatch in the labour market, while frictional unemployment occurs when people are temporarily moving between jobs or entering the workforce.",
            },
            {
              q: "Does automation always create structural unemployment?",
              a: "Not necessarily. Automation can reduce demand for some occupations while creating new roles. Structural unemployment may occur when displaced workers cannot quickly acquire the skills required for those new roles.",
            },
            {
              q: "How can structural unemployment be reduced?",
              a: "Reskilling, vocational education, career guidance, regional development, and investment in growing industries can help workers move into suitable employment.",
            },
            {
              q: "Is structural unemployment long-term?",
              a: "It can be long-term because workers may need substantial retraining, relocation, or a change of occupation before they can access suitable jobs.",
            },
          ].map((faq, index) => (
            <details
              key={index}
              className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm open:border-blue-200 open:bg-blue-50/40"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-slate-900">
                <span>{faq.q}</span>
                <ChevronRight className="shrink-0 text-blue-600 transition group-open:rotate-90" />
              </summary>
              <p className="mt-4 border-t border-slate-100 pt-4 text-sm leading-7 text-slate-600">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* TAKEAWAY */}
      <section className="px-5 pb-20 sm:px-8">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-900 p-8 text-white shadow-xl sm:p-12">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15">
              <ShieldCheck size={30} />
            </div>
            <h2 className="mt-6 text-3xl font-bold sm:text-4xl">
              Key Takeaway
            </h2>
            <p className="mt-5 text-base leading-8 text-blue-100 sm:text-lg">
              Structural unemployment is caused by changes in the economy that
              create a mismatch between available workers and available jobs.
              Its reduction requires more than job creation: workers also need
              relevant skills, training, mobility, and access to emerging
              employment opportunities.
            </p>
            <Link
              href="/economics/unemployment/types-of-unemployment"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-blue-800 transition hover:bg-blue-50"
            >
              Explore All Types Of Unemployment <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
