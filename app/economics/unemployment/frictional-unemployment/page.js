
import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  Clock3,
  GraduationCap,
  Handshake,
  Lightbulb,
  MapPin,
  Network,
  RefreshCw,
  Search,
  Target,
  TrendingUp,
  Users,
  Wallet,
  UserSearch,
  FileSearch,
  CalendarClock,
  BookOpen,
  Building,
  Laptop,
  ArrowDown,
  CircleHelp,
  ChartNoAxesCombined,
  BadgeCheck,
  Route,
  Zap,
} from "lucide-react";
import AdSlot from '../../../../components/AdSlot'
export const metadata = {
  title: "Frictional Unemployment | Meaning, Causes, Examples & Solutions",
  description:
    "Understand frictional unemployment, its meaning, causes, real-world examples, economic effects and solutions. Learn how job searching and career transitions create temporary unemployment.",
};
const examples = [
  {
    number: "01",
    title: "A Graduate Searching For A First Job",
    icon: GraduationCap,
    situation:
      "A commerce graduate completes college and starts looking for a suitable entry-level position. The graduate applies to several companies, attends interviews and compares salary packages before accepting an offer.",
    why:
      "The person is entering the labour market and needs time to find a suitable first job.",
    outcome:
      "The graduate remains temporarily unemployed during the job-search period and becomes employed after accepting an offer.",
    category: "First-Time Job Search",
  },
  {
    number: "02",
    title: "An Employee Switching Companies",
    icon: BriefcaseBusiness,
    situation:
      "An accountant resigns from an existing company to find a position offering better career growth. The employee spends one month searching, attending interviews and negotiating an offer.",
    why:
      "The worker is moving voluntarily from one job to another and needs time to identify a suitable opportunity.",
    outcome:
      "The period between leaving the old job and joining the new company represents frictional unemployment.",
    category: "Job-To-Job Transition",
  },
  {
    number: "03",
    title: "A Worker Relocating To Another City",
    icon: MapPin,
    situation:
      "A family moves from Ludhiana to Bengaluru because of a spouse's job transfer. The other working family member leaves their existing job and searches for suitable employment in the new city.",
    why:
      "The worker's geographical location has changed, so finding a new employer and suitable position takes time.",
    outcome:
      "The worker experiences temporary unemployment while searching for a new job in the destination city.",
    category: "Geographical Mobility",
  },
];

const affectingFactors = [
  {
    title: "Availability Of Job Information",
    icon: Search,
    effect:
      "When job vacancies are difficult to discover, workers may spend more time searching and applying for suitable positions.",
    direction: "Can Increase",
  },
  {
    title: "Skills And Qualifications",
    icon: GraduationCap,
    effect:
      "Workers need time to identify vacancies that match their qualifications, experience and professional abilities.",
    direction: "Can Increase",
  },
  {
    title: "Geographical Mobility",
    icon: MapPin,
    effect:
      "Relocation costs, housing availability, family responsibilities and distance from employment centres can slow down job transitions.",
    direction: "Can Increase",
  },
  {
    title: "Salary Expectations",
    icon: Wallet,
    effect:
      "Differences between the salary expected by a job-seeker and the salary offered by employers can extend the search period.",
    direction: "Can Increase",
  },
  {
    title: "Recruitment And Selection Time",
    icon: Clock3,
    effect:
      "Multiple interviews, background checks, assessments and lengthy approval processes can delay appointments.",
    direction: "Can Increase",
  },
  {
    title: "Economic And Labour-Market Conditions",
    icon: ChartNoAxesCombined,
    effect:
      "A large number of vacancies and active recruitment can help people find jobs faster. Limited vacancies can extend the search period and may also create other forms of unemployment.",
    direction: "Can Vary",
  },
  {
    title: "Career Preferences",
    icon: Target,
    effect:
      "People who carefully compare job roles, workplace conditions, career growth and location may take longer to accept an offer.",
    direction: "Can Increase",
  },
  {
    title: "Employment Support Services",
    icon: Handshake,
    effect:
      "Recruitment agencies, employment exchanges, career centres and professional networks can connect job-seekers with employers more efficiently.",
    direction: "Can Reduce",
  },
];

const controlMeasures = [
  {
    number: "01",
    title: "Improve Job Information Systems",
    icon: Laptop,
    description:
      "Create accessible employment portals and vacancy databases where employers can publish openings and job-seekers can search for relevant positions.",
    example:
      "Digital employment platforms can help candidates discover vacancies across different cities and industries.",
  },
  {
    number: "02",
    title: "Strengthen Career Guidance",
    icon: UserSearch,
    description:
      "Provide career counselling, job-search guidance, resume assistance and interview preparation so people can identify suitable opportunities more quickly.",
    example:
      "Colleges and career centres can help graduating students understand job requirements and prepare for recruitment.",
  },
  {
    number: "03",
    title: "Improve Skill And Job Matching",
    icon: Network,
    description:
      "Use skill profiles, qualification information and employer requirements to connect candidates with vacancies that match their capabilities.",
    example:
      "Recruitment platforms can recommend relevant vacancies based on a candidate's experience and skills.",
  },
  {
    number: "04",
    title: "Simplify Recruitment Procedures",
    icon: Zap,
    description:
      "Employers can reduce unnecessary recruitment delays by using clear job descriptions, organised interviews and timely selection decisions.",
    example:
      "A company can combine multiple interview stages and communicate selection decisions within a defined period.",
  },
  {
    number: "05",
    title: "Support Geographical Mobility",
    icon: MapPin,
    description:
      "Improve access to relocation information, affordable housing, transport and employment opportunities in different regions.",
    example:
      "Relocation support can help a qualified worker move to a city where suitable vacancies are available.",
  },
  {
    number: "06",
    title: "Strengthen Campus Placement And Apprenticeships",
    icon: GraduationCap,
    description:
      "Connect educational institutions with employers through campus recruitment, internships, apprenticeships and placement services.",
    example:
      "Final-year students can participate in structured recruitment programmes before completing their courses.",
  },
];

const impacts = [
  {
    title: "Temporary Loss Of Income",
    icon: Wallet,
    text: "People may experience a short-term interruption in salary while searching for their next job.",
  },
  {
    title: "Unfilled Job Vacancies",
    icon: Building2,
    text: "Employers may have to wait for suitable candidates while positions remain vacant.",
  },
  {
    title: "Better Job Matching",
    icon: Target,
    text: "Workers can find positions that better match their abilities, salary expectations and career goals.",
  },
  {
    title: "Improved Labour Mobility",
    icon: Route,
    text: "Workers can move between companies, occupations and geographical locations as opportunities change.",
  },
];

const faqs = [
  {
    q: "What Is Frictional Unemployment In Simple Words?",
    a: "Frictional unemployment is the temporary period when a person is without a job while searching for a new one, entering the labour market or moving from one job to another.",
  },
  {
    q: "Why Is Frictional Unemployment Considered Normal?",
    a: "People need time to discover vacancies, apply, attend interviews and compare opportunities. Workers and employers do not always find each other immediately, even when jobs are available.",
  },
  {
    q: "Is Frictional Unemployment Voluntary?",
    a: "It is often associated with voluntary job changes and job searches, but not every case is voluntary. A person who loses a job and searches for another suitable position may also experience frictional unemployment.",
  },
  {
    q: "What Is An Example Of Frictional Unemployment In India?",
    a: "A graduate in India who completes college and spends several weeks applying for suitable entry-level positions before joining a company is an example.",
  },
  {
    q: "How Can Frictional Unemployment Be Reduced?",
    a: "Better job portals, career guidance, recruitment services, efficient hiring procedures, skill matching and geographical mobility support can reduce the time required to find suitable employment.",
  },
  {
    q: "Is Frictional Unemployment The Same As Structural Unemployment?",
    a: "No. Frictional unemployment generally results from the time needed to search for and match with a job. Structural unemployment results from a mismatch between workers' skills or locations and the requirements of available jobs.",
  },
  {
    q: "Does Frictional Unemployment Mean That There Are No Jobs?",
    a: "Not necessarily. Suitable vacancies may already exist, but job-seekers may not know about them, may be evaluating offers or may still be completing recruitment procedures.",
  },
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
        <p className="mt-4 text-base leading-8 text-slate-600">
          {description}
        </p>
      )}
    </div>
  );
}

function ExampleCard({ item }) {
  const Icon = item.icon;

  return (
    <article className="flex h-full flex-col rounded-3xl border border-blue-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="mb-5 flex items-center justify-between">
        <span className="text-sm font-bold tracking-widest text-blue-500">
          EXAMPLE {item.number}
        </span>
        <div className="rounded-2xl bg-gradient-to-br from-blue-100 to-indigo-100 p-3 text-blue-700">
          <Icon size={25} />
        </div>
      </div>

      <span className="mb-2 inline-flex w-fit rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">
        {item.category}
      </span>

      <h3 className="text-xl font-bold text-slate-950">{item.title}</h3>

      <p className="mt-4 text-sm leading-7 text-slate-600">
        {item.situation}
      </p>

      <div className="mt-5 rounded-2xl bg-blue-50 p-4">
        <p className="mb-2 text-xs font-bold uppercase tracking-wider text-blue-800">
          Why It Happens
        </p>
        <p className="text-sm leading-6 text-slate-700">{item.why}</p>
      </div>

      <div className="mt-4 rounded-2xl border border-blue-100 p-4">
        <p className="mb-2 text-xs font-bold uppercase tracking-wider text-slate-500">
          Result
        </p>
        <p className="text-sm leading-6 text-slate-700">{item.outcome}</p>
      </div>
    </article>
  );
}

export default function FrictionalUnemploymentPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-slate-800">

      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-100">
        <div className="pointer-events-none absolute -right-24 -top-20 h-96 w-96 rounded-full bg-blue-200/40 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-indigo-200/40 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:py-28">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-sm font-bold text-blue-700 shadow-sm">
              <BookOpen size={16} />
              Economics Knowledge Guide
            </div>

            <h1 className="max-w-2xl text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Frictional <span className="text-blue-700">Unemployment</span>:
              Meaning, Causes, Examples And Solutions
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Why does someone remain unemployed even when job opportunities
              exist? Discover how job searching, career changes, recruitment
              delays and geographical movement create temporary unemployment
              in a dynamic labour market.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#how-it-works"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-700 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-700/20 transition hover:bg-blue-800"
              >
                Understand The Process <ArrowRight size={17} />
              </a>
              <a
                href="#examples"
                className="inline-flex items-center gap-2 rounded-xl border border-blue-200 bg-white px-6 py-3.5 text-sm font-bold text-blue-800 transition hover:bg-blue-50"
              >
                See Practical Examples
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-5 text-sm font-medium text-slate-600">
              <span className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-blue-600" />
                Temporary Joblessness
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-blue-600" />
                Normal Labour-Market Process
              </span>
            </div>
          </div>

          {/* HERO VISUAL */}
          <div className="mx-auto w-full max-w-xl">
            <div className="rounded-[2rem] border border-blue-100 bg-white/90 p-6 shadow-2xl shadow-blue-900/10 backdrop-blur">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold text-slate-900">
                    The Job Search Journey
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    From Leaving A Job To Finding Another
                  </p>
                </div>
                <div className="rounded-xl bg-blue-100 p-3 text-blue-700">
                  <RefreshCw size={25} />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2">
                {[
                  { title: "Previous Job", icon: BriefcaseBusiness },
                  { title: "Job Search", icon: Search },
                  { title: "New Job", icon: BadgeCheck },
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="flex flex-col items-center">
                      <div
                        className={`flex h-20 w-full items-center justify-center rounded-2xl ${
                          index === 1
                            ? "bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-lg"
                            : "bg-blue-50 text-blue-700"
                        }`}
                      >
                        <Icon size={29} />
                      </div>
                      <p className="mt-3 text-center text-xs font-bold text-slate-700">
                        {item.title}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="my-5 rounded-2xl border border-blue-100 bg-gradient-to-r from-blue-50 to-indigo-50 p-5">
                <div className="mb-3 flex items-center justify-between">
                  <p className="text-sm font-bold text-blue-900">
                    Temporary Unemployment Period
                  </p>
                  <Clock3 size={19} className="text-blue-700" />
                </div>
                <div className="relative h-3 overflow-hidden rounded-full bg-blue-200">
                  <div className="absolute inset-y-0 left-0 w-2/3 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600" />
                </div>
                <div className="mt-2 flex justify-between text-xs text-slate-500">
                  <span>Old Employment Ends</span>
                  <span>New Employment Begins</span>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-xl bg-indigo-50 p-4">
                <Lightbulb size={20} className="mt-0.5 shrink-0 text-indigo-700" />
                <p className="text-sm leading-6 text-indigo-900">
                  The person may be unemployed temporarily, even though
                  suitable job opportunities exist in the economy.
                </p>
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
              Meaning And Definition
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              What Is Frictional Unemployment?
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              Frictional unemployment is the temporary unemployment that
              occurs when people move between jobs, enter the workforce for
              the first time or search for suitable employment. It exists
              because finding the right worker and the right job takes time.
            </p>

            <p className="mt-4 text-base leading-8 text-slate-600">
              Even when companies have vacancies and people are available to
              work, they may not immediately connect. Job applications,
              interviews, salary negotiations, location preferences and
              recruitment procedures create a time gap between employment
              opportunities and actual hiring.
            </p>

            <p className="mt-4 text-base leading-8 text-slate-600">
              This type of unemployment is generally short-term and is
              considered a normal feature of a changing labour market.
            </p>
          </div>

          <div className="rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 to-indigo-100 p-7">
            <div className="mb-5 flex items-center gap-3">
              <div className="rounded-xl bg-white p-3 text-blue-700 shadow-sm">
                <FileSearch size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-950">
                The Main Idea
              </h3>
            </div>

            <div className="space-y-3">
              <div className="rounded-xl bg-white p-4">
                <p className="text-xs font-bold uppercase text-slate-500">
                  Labour Supply
                </p>
                <p className="mt-1 font-bold text-slate-900">
                  People Looking For Jobs
                </p>
              </div>

              <div className="flex justify-center">
                <ArrowDown size={22} className="text-blue-500" />
              </div>

              <div className="rounded-xl border border-blue-200 bg-blue-100 p-4 text-center">
                <p className="text-xs font-bold uppercase text-blue-700">
                  Matching Process
                </p>
                <p className="mt-1 font-bold text-blue-950">
                  Search, Interviews And Selection
                </p>
              </div>

              <div className="flex justify-center">
                <ArrowDown size={22} className="text-blue-500" />
              </div>

              <div className="rounded-xl bg-white p-4">
                <p className="text-xs font-bold uppercase text-slate-500">
                  Labour Demand
                </p>
                <p className="mt-1 font-bold text-slate-900">
                  Employers Filling Vacancies
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
<AdSlot />
      {/* HOW IT WORKS */}
      <section id="how-it-works" className="bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="The Process"
            title="How Does Frictional Unemployment Occur?"
            description="It develops during the time required for workers and employers to discover, evaluate and agree on suitable employment opportunities."
          />

          <div className="rounded-3xl border border-blue-100 bg-white p-6 shadow-xl shadow-blue-900/5 sm:p-9">
            <div className="grid gap-4 md:grid-cols-5">
              {[
                {
                  title: "Employment Ends",
                  text: "A person leaves a job or enters the workforce.",
                  icon: BriefcaseBusiness,
                },
                {
                  title: "Search Begins",
                  text: "The person searches for suitable vacancies.",
                  icon: Search,
                },
                {
                  title: "Applications",
                  text: "Applications, interviews and assessments take place.",
                  icon: FileSearch,
                },
                {
                  title: "Job Matching",
                  text: "The employer and candidate agree on a position.",
                  icon: Handshake,
                },
                {
                  title: "Employment Starts",
                  text: "The candidate joins the new organisation.",
                  icon: BadgeCheck,
                },
              ].map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={step.title} className="relative">
                    <div className="flex h-full flex-col items-center rounded-2xl border border-blue-100 bg-gradient-to-b from-blue-50 to-white p-4 text-center">
                      <span className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-blue-700 text-xs font-bold text-white">
                        {index + 1}
                      </span>
                      <div className="mb-3 rounded-xl bg-white p-3 text-blue-700 shadow-sm">
                        <Icon size={24} />
                      </div>
                      <h3 className="text-sm font-bold text-slate-900">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-xs leading-5 text-slate-600">
                        {step.text}
                      </p>
                    </div>
                    {index < 4 && (
                      <div className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 text-blue-500 md:block">
                        <ArrowRight size={20} />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="mt-7 rounded-2xl bg-gradient-to-r from-blue-700 to-indigo-700 p-5 text-center text-white">
              <p className="font-bold">
                The Time Between Job Search And Successful Hiring
              </p>
              <p className="mt-2 text-sm leading-6 text-blue-100">
                This temporary period is where frictional unemployment occurs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* THREE EXAMPLES */}
      <section id="examples" className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <SectionHeading
          eyebrow="Practical Examples"
          title="Three Real-World Examples Of Frictional Unemployment"
          description="These examples show how job transitions, first-time employment and geographical relocation can create temporary unemployment."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {examples.map((item) => (
            <ExampleCard key={item.number} item={item} />
          ))}
        </div>
      </section>

      {/* FACTORS DIAGRAM */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Causes And Influencing Factors"
            title="What Factors Affect Frictional Unemployment?"
            description="The time required to find a new job depends on information, worker preferences, recruitment procedures, mobility and the availability of employment support."
          />

          <div className="rounded-3xl border border-blue-100 bg-white p-6 shadow-lg sm:p-9">
            <div className="mx-auto max-w-sm rounded-2xl bg-gradient-to-r from-blue-700 to-indigo-700 p-5 text-center text-white">
              <Clock3 className="mx-auto mb-2" size={28} />
              <h3 className="text-xl font-bold">
                Duration Of Job Search
              </h3>
              <p className="mt-1 text-xs text-blue-100">
                Influenced By Multiple Factors
              </p>
            </div>

            <div className="mx-auto h-8 w-px bg-blue-300" />

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { label: "Job Information", icon: Search },
                { label: "Skills And Qualifications", icon: GraduationCap },
                { label: "Location And Mobility", icon: MapPin },
                { label: "Salary Expectations", icon: Wallet },
                { label: "Hiring Procedures", icon: FileSearch },
                { label: "Career Preferences", icon: Target },
                { label: "Market Conditions", icon: ChartNoAxesCombined },
                { label: "Employment Services", icon: Handshake },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="flex items-center gap-3 rounded-xl border border-blue-100 bg-blue-50/70 p-4"
                  >
                    <div className="rounded-lg bg-white p-2 text-blue-700 shadow-sm">
                      <Icon size={20} />
                    </div>
                    <p className="text-sm font-bold text-slate-700">
                      {item.label}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 rounded-xl bg-indigo-50 p-4 text-center text-sm leading-6 text-indigo-900">
              The combined effect of these factors determines how quickly
              workers and employers find a suitable match.
            </div>
          </div>
        </div>
      </section>
<AdSlot />
      {/* FACTORS AFFECTING */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <SectionHeading
          eyebrow="Detailed Explanation"
          title="Major Factors Affecting Frictional Unemployment"
          description="Some factors extend the job-search period, while others help workers find employment more quickly."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {affectingFactors.map((item) => {
            const Icon = item.icon;
            const reduces = item.direction === "Can Reduce";

            return (
              <article
                key={item.title}
                className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm transition hover:shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="rounded-xl bg-blue-100 p-3 text-blue-700">
                    <Icon size={23} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="text-lg font-bold text-slate-950">
                        {item.title}
                      </h3>
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-bold ${
                          reduces
                            ? "bg-emerald-50 text-emerald-700"
                            : "bg-blue-50 text-blue-700"
                        }`}
                      >
                        {item.direction}
                      </span>
                    </div>

                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {item.effect}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* IMPACT */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Economic Consequences"
            title="What Is The Impact Of Frictional Unemployment?"
            description="Frictional unemployment has both short-term costs and potential long-term benefits. Its effects depend on the duration of job search and the quality of the eventual job match."
          />

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {impacts.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm"
                >
                  <div className="mb-4 inline-flex rounded-xl bg-blue-100 p-3 text-blue-700">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-950">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {item.text}
                  </p>
                </article>
              );
            })}
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <div className="rounded-3xl border border-rose-100 bg-gradient-to-br from-rose-50 to-white p-7">
              <div className="mb-4 inline-flex rounded-xl bg-rose-100 p-3 text-rose-700">
                <TrendingUp size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-950">
                Short-Term Costs
              </h3>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
                <li>Temporary interruption in personal income.</li>
                <li>Vacancies may remain unfilled for longer.</li>
                <li>Job-search and recruitment costs for workers and firms.</li>
                <li>Uncertainty during employment transitions.</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-emerald-100 bg-gradient-to-br from-emerald-50 to-white p-7">
              <div className="mb-4 inline-flex rounded-xl bg-emerald-100 p-3 text-emerald-700">
                <Target size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-950">
                Potential Benefits
              </h3>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
                <li>Workers can find jobs suited to their abilities.</li>
                <li>People can move towards better career opportunities.</li>
                <li>Employers can identify candidates with suitable skills.</li>
                <li>Labour can move towards more productive positions.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
<AdSlot />



      {/* CONTROL MEASURES */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <SectionHeading
          eyebrow="Control And Reduction"
          title="How Can Frictional Unemployment Be Reduced?"
          description="Frictional unemployment cannot be eliminated completely because job searching and career transitions are natural. However, better information, recruitment and job-matching systems can reduce unnecessary delays."
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {controlMeasures.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.number}
                className="group rounded-3xl border border-blue-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl"
              >
                <div className="mb-5 flex items-center justify-between">
                  <div className="rounded-2xl bg-gradient-to-br from-blue-100 to-indigo-100 p-3 text-blue-700">
                    <Icon size={25} />
                  </div>
                  <span className="text-sm font-bold tracking-widest text-blue-400">
                    {item.number}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-950">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>

                <div className="mt-5 rounded-2xl bg-blue-50 p-4">
                  <p className="mb-2 text-xs font-bold uppercase tracking-wider text-blue-800">
                    Practical Application
                  </p>
                  <p className="text-sm leading-6 text-slate-700">
                    {item.example}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* CONTROL DIAGRAM */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-100 py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="How Solutions Work"
            title="From Job Search To Faster Employment Matching"
            description="Employment support systems can shorten the time between a worker becoming available and an employer filling a vacancy."
          />

          <div className="rounded-3xl border border-blue-100 bg-white p-6 shadow-lg sm:p-9">
            <div className="grid gap-4 md:grid-cols-3">
              {[
                {
                  title: "Better Information",
                  icon: Search,
                  points: ["Online Vacancy Portals", "Career Counselling", "Employment Exchanges"],
                },
                {
                  title: "Efficient Recruitment",
                  icon: Building,
                  points: ["Clear Job Requirements", "Faster Interviews", "Timely Hiring Decisions"],
                },
                {
                  title: "Better Job Matching",
                  icon: Handshake,
                  points: ["Skill-Based Matching", "Placement Services", "Relocation Support"],
                },
              ].map((group) => {
                const Icon = group.icon;
                return (
                  <div
                    key={group.title}
                    className="rounded-2xl border border-blue-100 bg-blue-50/70 p-5"
                  >
                    <div className="mb-4 flex items-center gap-3">
                      <div className="rounded-xl bg-white p-3 text-blue-700 shadow-sm">
                        <Icon size={23} />
                      </div>
                      <h3 className="font-bold text-slate-900">
                        {group.title}
                      </h3>
                    </div>

                    <div className="space-y-2">
                      {group.points.map((point) => (
                        <div
                          key={point}
                          className="rounded-lg bg-white p-3 text-sm font-medium text-slate-700"
                        >
                          <span className="mr-2 text-blue-600">✓</span>
                          {point}
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="my-6 flex justify-center">
              <ArrowDown size={25} className="text-blue-500" />
            </div>

            <div className="mx-auto max-w-md rounded-2xl bg-gradient-to-r from-blue-700 to-indigo-700 p-6 text-center text-white shadow-lg">
              <BadgeCheck className="mx-auto mb-3" size={30} />
              <h3 className="text-xl font-bold">
                Faster And Better Job Matching
              </h3>
              <p className="mt-2 text-sm leading-6 text-blue-100">
                Less Unnecessary Search Time And More Efficient Labour-Market
                Connections.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <SectionHeading
          eyebrow="Understand The Difference"
          title="Frictional Vs Structural Vs Cyclical Unemployment"
          description="These three types have different causes and require different policy responses."
        />

        <div className="overflow-hidden rounded-3xl border border-blue-100 bg-white shadow-lg">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[650px] text-left text-sm">
              <thead className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white">
                <tr>
                  <th className="px-5 py-4 font-bold">Type</th>
                  <th className="px-5 py-4 font-bold">Main Reason</th>
                  <th className="px-5 py-4 font-bold">Typical Situation</th>
                  <th className="px-5 py-4 font-bold">Main Response</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-blue-50">
                {[
                  [
                    "Frictional",
                    "Time Needed To Find A Job",
                    "A Worker Changes Companies",
                    "Better Job Information And Matching",
                  ],
                  [
                    "Structural",
                    "Mismatch Of Skills Or Location",
                    "A Worker Lacks Skills Required By New Industries",
                    "Retraining And Skill Development",
                  ],
                  [
                    "Cyclical",
                    "Decline In Aggregate Demand",
                    "Companies Lay Off Workers During A Recession",
                    "Economic Recovery And Demand Support",
                  ],
                ].map((row, index) => (
                  <tr
                    key={row[0]}
                    className={index % 2 === 0 ? "bg-white" : "bg-blue-50/50"}
                  >
                    <td className="px-5 py-4 font-bold text-blue-800">
                      {row[0]}
                    </td>
                    <td className="px-5 py-4 text-slate-700">{row[1]}</td>
                    <td className="px-5 py-4 text-slate-600">{row[2]}</td>
                    <td className="px-5 py-4 text-slate-600">{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
<AdSlot />
      {/* NATURAL UNEMPLOYMENT */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-blue-600">
              An Important Economic Concept
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Why Is Some Frictional Unemployment Acceptable?
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              A modern economy constantly experiences workers entering the
              workforce, leaving existing jobs, changing careers and moving
              between employers. These transitions cannot happen instantly.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              Economists recognise that frictional unemployment is generally
              part of the natural rate of unemployment, alongside structural
              unemployment. This does not mean that joblessness is desirable
              for every individual. It means that a functioning labour market
              normally involves some job-search time.
            </p>
          </div>

          <div className="rounded-3xl border border-blue-100 bg-white p-7 shadow-lg">
            <h3 className="mb-5 text-xl font-bold text-slate-950">
              Natural Rate Of Unemployment
            </h3>

            <div className="rounded-2xl bg-gradient-to-r from-blue-700 to-indigo-700 p-5 text-center text-white">
              <p className="font-bold">Natural Rate Of Unemployment</p>
            </div>

            <div className="mx-auto h-7 w-px bg-blue-300" />

            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-blue-100 bg-blue-50 p-4 text-center">
                <RefreshCw className="mx-auto mb-3 text-blue-700" size={24} />
                <p className="font-bold text-slate-900">
                  Frictional Unemployment
                </p>
                <p className="mt-2 text-xs leading-5 text-slate-600">
                  Temporary Job Search And Transitions
                </p>
              </div>

              <div className="rounded-2xl border border-indigo-100 bg-indigo-50 p-4 text-center">
                <Network className="mx-auto mb-3 text-indigo-700" size={24} />
                <p className="font-bold text-slate-900">
                  Structural Unemployment
                </p>
                <p className="mt-2 text-xs leading-5 text-slate-600">
                  Skill And Location Mismatches
                </p>
              </div>
            </div>

            <p className="mt-5 text-xs leading-6 text-slate-500">
              Simplified economic explanation. The natural rate is not a fixed
              number and can change as labour-market conditions change.
            </p>
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
              "Frictional Unemployment Is Temporary Unemployment During Job Search And Employment Transitions.",
              "It Can Affect New Graduates, Workers Changing Companies And People Relocating To New Cities.",
              "Job Information, Salary Expectations, Recruitment Procedures And Geographical Mobility Influence Its Duration.",
              "Better Employment Portals, Career Guidance, Skill Matching And Efficient Recruitment Can Reduce Unnecessary Delays.",
              "Some Frictional Unemployment Is Normal Because Workers And Employers Need Time To Find Suitable Matches.",
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

      {/* RELATED PAGE */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Continue Learning"
            title="Explore Other Types Of Unemployment"
            description="Understand how other forms of unemployment differ from temporary job-search unemployment."
          />

          <Link
            href="/economics/unemployment/types-of-unemployment"
            className="group flex items-center justify-between gap-5 rounded-3xl border border-blue-100 bg-white p-6 shadow-sm transition hover:border-blue-300 hover:shadow-lg sm:p-8"
          >
            <div className="flex items-center gap-4">
              <div className="rounded-2xl bg-blue-100 p-4 text-blue-700">
                <BookOpen size={27} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-950">
                  Types Of Unemployment
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Explore frictional, structural, cyclical, seasonal and other
                  forms of unemployment.
                </p>
              </div>
            </div>
            <ArrowRight
              size={22}
              className="shrink-0 text-blue-600 transition group-hover:translate-x-1"
            />
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-5 py-20 sm:px-8">
        <SectionHeading
          eyebrow="Common Questions"
          title="Frequently Asked Questions"
          description="Answers to common questions about frictional unemployment, its causes and its economic importance."
        />

        <div className="space-y-4">
          {faqs.map((item) => (
            <details
              key={item.q}
              className="group rounded-2xl border border-blue-100 bg-white p-5 transition open:border-blue-300 open:shadow-md"
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
