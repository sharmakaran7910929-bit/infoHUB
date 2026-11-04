import {
  Activity,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  BookOpen,
  BriefcaseBusiness,
  Building2,
  Calculator,
  CheckCircle2,
  GraduationCap,
  Landmark,
  Search,
  TrendingDown,
  Users,
  Wallet,
} from "lucide-react";
import AdSlot from "../../../../components/AdSlot";
export const metadata = {
  title: "Unemployment Rate: Meaning, Formula, India Data & Types | PriceTag HUB",
  description:
    "Understand the unemployment rate, its formula and calculation, India's latest 12-month PLFS trend, causes, effects, measurement methods, and different types of unemployment.",
};

const monthlyData = [
  { month: "Oct 2025", rate: 5.2 },
  { month: "Nov 2025", rate: 4.7 },
  { month: "Dec 2025", rate: 4.8 },
  { month: "Jan 2026", rate: 5.0 },
  { month: "Feb 2026", rate: 4.9 },
  { month: "Mar 2026", rate: 5.1 },
  { month: "Apr 2026", rate: 5.2 },
  { month: "May 2026", rate: 5.5 },
  { month: "Jun 2026", rate: 5.5 },
  { month: "Jul 2026", rate: 5.1 },
  { month: "Aug 2026", rate: 5.0 },
  { month: "Sep 2026", rate: 5.0 },
];

const unemploymentTypes = [
  {
    title: "Frictional Unemployment",
    description:
      "Temporary unemployment when people leave one job and search for another, or enter the labour market for the first time.",
    example:
      "An employee resigns and spends two months finding a more suitable job.",
    href: "/economics/unemployment/frictional-unemployment",
  },
  {
    title: "Structural Unemployment",
    description:
      "Unemployment caused by a mismatch between workers' skills or locations and the requirements of available jobs.",
    example:
      "A worker loses a traditional manufacturing job because the industry shifts towards advanced automation.",
    href: "/economics/unemployment/structural-unemployment",
  },
  {
    title: "Cyclical Unemployment",
    description:
      "Unemployment caused by a decline in economic activity during recessions or periods of weak demand.",
    example:
      "A company reduces its workforce because customers are spending less during an economic slowdown.",
    href: "/economics/unemployment/cyclical-unemployment",
  },
  {
    title: "Seasonal Unemployment",
    description:
      "Unemployment that occurs when work is available only during particular seasons or periods of the year.",
    example:
      "Agricultural workers may have fewer employment opportunities between crop seasons.",
    href: "/economics/unemployment/seasonal-unemployment",
  },
  {
    title: "Disguised Unemployment",
    description:
      "A situation where more people are engaged in an activity than are actually required, so some workers contribute little or no additional output.",
    example:
      "A small family farm employs more family members than necessary to produce the same output.",
    href: "/economics/unemployment/types-of-unemployment",
  },
  {
    title: "Technological Unemployment",
    description:
      "Job losses or reduced demand for certain occupations because machines, software, or automated systems replace some human tasks.",
    example:
      "A business introduces automated systems that reduce the need for certain repetitive manual tasks.",
    href: "/economics/unemployment/types-of-unemployment",
  },
];

const causes = [
  {
    icon: TrendingDown,
    title: "Slow Economic Growth",
    description:
      "When businesses experience weak demand, they may reduce recruitment, delay expansion, or cut existing jobs.",
  },
  {
    icon: GraduationCap,
    title: "Skill Mismatch",
    description:
      "Workers may not have the technical, professional, or practical skills required by employers.",
  },
  {
    icon: Users,
    title: "Population Growth",
    description:
      "When the number of people entering the labour market grows faster than employment opportunities, job competition increases.",
  },
  {
    icon: Activity,
    title: "Technological Changes",
    description:
      "Automation and new technologies can reduce demand for certain occupations while creating demand for different skills.",
  },
  {
    icon: Building2,
    title: "Limited Industrial Development",
    description:
      "A shortage of industries and businesses in particular regions can restrict employment opportunities.",
  },
  {
    icon: Wallet,
    title: "Low Investment",
    description:
      "Insufficient investment in infrastructure, manufacturing, and services can limit business expansion and job creation.",
  },
];

const measures = [
  {
    title: "Skill Development",
    description:
      "Provide practical training, vocational education, apprenticeships, and digital skills that match employer requirements.",
  },
  {
    title: "Support for Businesses",
    description:
      "Improve access to finance, infrastructure, and business support so enterprises can expand and hire more workers.",
  },
  {
    title: "Industrial Development",
    description:
      "Encourage manufacturing, services, and local industries to create employment opportunities across regions.",
  },
  {
    title: "Employment-Intensive Investment",
    description:
      "Invest in infrastructure, construction, rural development, and other activities that generate employment.",
  },
  {
    title: "Support for Entrepreneurship",
    description:
      "Improve access to business finance, mentoring, markets, and entrepreneurship training.",
  },
  {
    title: "Better Education and Job Matching",
    description:
      "Connect education and training systems with labour market needs and improve access to employment information.",
  },
];

const faqs = [
  {
    question: "What is the unemployment rate?",
    answer:
      "The unemployment rate is the percentage of people in the labour force who are unemployed. It does not represent the percentage of the entire population without a job.",
  },
  {
    question: "What is the formula for the unemployment rate?",
    answer:
      "Unemployment Rate = (Number of Unemployed People ÷ Total Labour Force) × 100.",
  },
  {
    question: "Are students included in the unemployment rate?",
    answer:
      "Students are included only if they meet the applicable unemployment criteria. A student who is not working and is not seeking or available for work is generally outside the labour force.",
  },
  {
    question: "What is the difference between unemployment and underemployment?",
    answer:
      "Unemployment refers to people without work who meet the relevant job-search or availability criteria. Underemployment refers to people who are working but whose working hours, skills, or productive capacity are not fully utilised.",
  },
  {
    question: "Who measures unemployment in India?",
    answer:
      "The National Statistical Office (NSO), under the Ministry of Statistics and Programme Implementation (MoSPI), publishes India's Periodic Labour Force Survey (PLFS) statistics.",
  },
  {
    question: "What is the Current Weekly Status method?",
    answer:
      "Current Weekly Status classifies a person based on their activity during the seven days preceding the survey. It is used in India's monthly PLFS estimates.",
  },
  {
    question: "Does a lower unemployment rate always mean more jobs?",
    answer:
      "Not necessarily. The unemployment rate can fall if unemployed people stop seeking or being available for work and leave the labour force. It should be examined alongside LFPR and Worker Population Ratio.",
  },
  {
    question: "What is the difference between rural and urban unemployment?",
    answer:
      "Rural and urban unemployment rates measure unemployment in different population sectors. Their employment patterns, industries, working conditions, and labour market opportunities can differ.",
  },
];

function SectionHeading({ eyebrow, title, description, dark = false }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      {eyebrow && (
        <p
          className={`mb-3 text-sm font-bold uppercase tracking-wider ${
            dark ? "text-blue-300" : "text-blue-700"
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
          className={`mt-4 text-base leading-7 ${
            dark ? "text-blue-100" : "text-slate-600"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

function DataCard({ label, value, description, icon: Icon }) {
  return (
    <div className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between gap-3">
        <p className="text-sm font-bold text-slate-600">{label}</p>
        <div className="rounded-xl bg-blue-50 p-2 text-blue-700">
          <Icon size={21} />
        </div>
      </div>
      <p className="mt-4 text-3xl font-bold text-slate-950">{value}</p>
      <p className="mt-2 text-xs leading-5 text-slate-500">{description}</p>
    </div>
  );
}

function FormulaBox() {
  return (
    <div className="rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-7 text-center sm:p-10">
      <p className="mb-5 text-sm font-bold uppercase tracking-wider text-blue-700">
        Unemployment Rate Formula
      </p>

      <div className="mx-auto max-w-xl rounded-2xl bg-white p-6 shadow-sm sm:p-9">
        <p className="text-2xl font-bold text-slate-950">Unemployment Rate</p>

        <div className="mx-auto mt-5 max-w-md">
          <div className="border-b-2 border-slate-900 pb-3 text-lg font-bold text-slate-900 sm:text-xl">
            Number of Unemployed People
          </div>
          <div className="pt-3 text-lg font-bold text-slate-900 sm:text-xl">
            Total Labour Force
          </div>
        </div>

        <p className="mt-5 text-2xl font-bold text-blue-700">× 100</p>
      </div>

      <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600">
        The denominator is the labour force, not the entire population.
        The labour force includes employed people and unemployed people
        who meet the relevant statistical criteria.
      </p>
    </div>
  );
}

export default function UnemploymentRatePage() {
  const latestRate = monthlyData[monthlyData.length - 1].rate;
  const highestRate = Math.max(...monthlyData.map((item) => item.rate));
  const lowestRate = Math.min(...monthlyData.map((item) => item.rate));

  return (
    <main className="overflow-hidden bg-white text-slate-800">
      {/* HERO */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-indigo-100 px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-bold text-blue-700 shadow-sm">
              <Activity size={16} />
              Economics / Labour Economics
            </div>

            <h1 className="text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Unemployment Rate
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              The unemployment rate measures the percentage of people in
              the labour force who do not have work but meet the relevant
              criteria for seeking or being available for employment.
              It is an important indicator of labour market conditions
              and economic performance.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#india-data"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-700 px-6 py-3 font-bold text-white shadow-lg transition hover:bg-blue-800"
              >
                India's Latest Data <ArrowRight size={18} />
              </a>
              <a
                href="#formula"
                className="rounded-xl border border-blue-200 bg-white px-6 py-3 font-bold text-blue-800 transition hover:bg-blue-50"
              >
                Understand the Formula
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-blue-100 bg-white p-7 shadow-xl sm:p-9">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-sm font-bold text-blue-700">
                  Latest Available Indian Data
                </p>
                <h2 className="mt-1 text-2xl font-bold text-slate-900">
                  September 2026
                </h2>
              </div>
              <div className="rounded-xl bg-blue-50 p-3 text-blue-700">
                <BarChart3 size={27} />
              </div>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-blue-700 to-indigo-800 p-7 text-white">
              <p className="text-sm font-bold text-blue-100">
                Overall Unemployment Rate
              </p>
              <p className="mt-2 text-6xl font-bold">5.0%</p>
              <p className="mt-3 text-sm text-blue-100">
                Persons aged 15 years and above, Current Weekly Status
              </p>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-4">
              <div className="rounded-xl bg-blue-50 p-4">
                <p className="text-sm text-slate-600">Rural</p>
                <p className="mt-1 text-2xl font-bold text-blue-800">4.2%</p>
              </div>
              <div className="rounded-xl bg-indigo-50 p-4">
                <p className="text-sm text-slate-600">Urban</p>
                <p className="mt-1 text-2xl font-bold text-indigo-800">6.9%</p>
              </div>
            </div>

            <p className="mt-5 text-xs leading-6 text-slate-500">
              Source: MoSPI, PLFS Monthly Bulletin, September 2026.
            </p>
          </div>
        </div>
      </section>

      {/* DEFINITION */}
      <section className="px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Basic Concept"
            title="What Is the Unemployment Rate?"
            description="It measures unemployment among people who are participating in the labour market."
          />

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-8">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-700 text-white">
                <Users size={28} />
              </div>

              <h3 className="mb-4 text-2xl font-bold text-slate-900">
                Simple Explanation
              </h3>

              <p className="leading-8 text-slate-600">
                Suppose 1,000 people are part of a country's labour force.
                Out of these, 950 have jobs and 50 are unemployed but
                actively seeking or available for work under the relevant
                statistical definition.
              </p>

              <p className="mt-4 leading-8 text-slate-600">
                The unemployment rate is 5%. This means that 5% of the
                labour force is unemployed, not that 5% of the entire
                country's population is unemployed.
              </p>
            </div>

            <div className="rounded-3xl border border-indigo-100 bg-white p-8 shadow-sm">
              <h3 className="mb-5 text-2xl font-bold text-slate-900">
                Who Is Counted?
              </h3>

              <div className="space-y-5">
                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                    <BriefcaseBusiness size={22} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Employed</h4>
                    <p className="mt-1 text-sm leading-7 text-slate-600">
                      People who are working or engaged in an economic
                      activity according to the survey definition.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
                    <Search size={22} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Unemployed</h4>
                    <p className="mt-1 text-sm leading-7 text-slate-600">
                      People without work who satisfy the applicable
                      job-search or availability criteria.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-xl bg-indigo-50 p-4 text-sm leading-7 text-indigo-900">
                <strong>Important:</strong> People who are neither working
                nor seeking or available for work are generally outside
                the labour force. They are not automatically counted as
                unemployed.
              </div>
            </div>
          </div>
        </div>
      </section>
<AdSlot />
      {/* INDIA DATA */}
      <section
        id="india-data"
        className="bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 px-5 py-20 text-white sm:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Indian Economy | Official Statistics"
            title="Unemployment Rate in India – Last 12 Months"
            description="Monthly unemployment estimates from India's Periodic Labour Force Survey, using the Current Weekly Status approach for people aged 15 years and above."
            dark
          />

          <div className="mb-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/10 p-6">
              <p className="text-sm font-bold text-blue-200">
                Latest Rate
              </p>
              <p className="mt-2 text-4xl font-bold text-white">
                {latestRate.toFixed(1)}%
              </p>
              <p className="mt-2 text-xs text-blue-200">September 2026</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/10 p-6">
              <p className="text-sm font-bold text-blue-200">
                Highest in Period
              </p>
              <p className="mt-2 text-4xl font-bold text-white">
                {highestRate.toFixed(1)}%
              </p>
              <p className="mt-2 text-xs text-blue-200">
                May and June 2026
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/10 p-6">
              <p className="text-sm font-bold text-blue-200">
                Lowest in Period
              </p>
              <p className="mt-2 text-4xl font-bold text-white">
                {lowestRate.toFixed(1)}%
              </p>
              <p className="mt-2 text-xs text-blue-200">
                November 2025
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white p-5 text-slate-900 shadow-xl sm:p-8">
            <div className="mb-6">
              <h3 className="text-xl font-bold">
                Monthly Unemployment Rate Trend
              </h3>
              <p className="mt-1 text-sm text-slate-500">
                India | October 2025 – September 2026
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6">
  {monthlyData.map((item) => (
    <div
      key={item.month}
      className="rounded-xl bg-blue-50 p-3 text-center"
    >
      <p className="text-xs font-bold text-slate-500">
        {item.month}
      </p>

      <p className="mt-2 text-xl font-bold text-blue-800">
        {item.rate.toFixed(1)}%
      </p>

      <div className="mt-3 flex h-24 items-end justify-center">
        <div
          className="w-8 rounded-t-lg bg-gradient-to-t from-blue-700 to-indigo-400"
          style={{
            height: `${((item.rate - 4) / 2) * 100}%`,
          }}
        />
      </div>
    </div>
  ))}
</div>

            <div className="mt-7 overflow-x-auto">
              <table className="w-full min-w-[480px] text-left text-sm">
                <thead className="bg-blue-50 text-blue-900">
                  <tr>
                    <th className="rounded-l-lg p-3 font-bold">Month</th>
                    <th className="p-3 font-bold">Rate</th>
                    <th className="rounded-r-lg p-3 font-bold">
                      Change from Previous Month
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {monthlyData.map((item, index) => {
                    const previous = monthlyData[index - 1];
                    const change = previous
                      ? Number((item.rate - previous.rate).toFixed(1))
                      : null;

                    return (
                      <tr key={item.month}>
                        <td className="p-3 font-bold text-slate-800">
                          {item.month}
                        </td>
                        <td className="p-3 font-bold text-blue-800">
                          {item.rate.toFixed(1)}%
                        </td>
                        <td className="p-3">
                          {change === null ? (
                            <span className="text-slate-400">—</span>
                          ) : change > 0 ? (
                            <span className="inline-flex items-center gap-1 font-bold text-rose-600">
                              <ArrowUpRight size={15} />
                              +{change.toFixed(1)} percentage points
                            </span>
                          ) : change < 0 ? (
                            <span className="inline-flex items-center gap-1 font-bold text-emerald-700">
                              <ArrowDownRight size={15} />
                              {change.toFixed(1)} percentage points
                            </span>
                          ) : (
                            <span className="font-bold text-slate-500">
                              No change
                            </span>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/10 p-6">
              <h3 className="font-bold text-blue-200">
                What Does the Trend Show?
              </h3>
              <p className="mt-3 text-sm leading-7 text-blue-100">
                The unemployment rate moved between 4.7% and 5.5%
                during this 12-month period. It reached 5.5% in May
                and June 2026 before declining to 5.0% in September.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/10 p-6">
              <h3 className="font-bold text-blue-200">
                How Should You Interpret It?
              </h3>
              <p className="mt-3 text-sm leading-7 text-blue-100">
                Monthly movements indicate changes in labour market
                conditions, but a single rate cannot explain job quality,
                wages, participation, or the reasons people are
                unemployed.
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-blue-300/20 bg-blue-900/40 p-6">
            <p className="font-bold text-white">
              Official Government Data Source
            </p>
            <p className="mt-2 text-sm leading-7 text-blue-100">
              Ministry of Statistics and Programme Implementation
              (MoSPI), National Statistical Office (NSO), Periodic
              Labour Force Survey (PLFS).
            </p>

            <div className="mt-5 flex flex-wrap gap-4">
              <a
                href="https://www.pib.gov.in/PressReleasePage.aspx?PRID=2323828&lang=1&reg=3"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-bold text-blue-300 hover:text-white"
              >
                September 2026 Official Release <ArrowRight size={16} />
              </a>

              <a
                href="https://www.mospi.gov.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-bold text-blue-300 hover:text-white"
              >
                MoSPI Official Website <ArrowRight size={16} />
              </a>
            </div>

            <p className="mt-4 text-xs leading-6 text-blue-200">
              Reference period: October 2025 to September 2026.
              Population: 15 years and above. Method: Current Weekly
              Status (CWS). Monthly values are rounded to one decimal
              place. October 2026 data is not included because the
              September 2026 bulletin is the latest available release
              used here.
            </p>
          </div>
        </div>
      </section>

      {/* RURAL URBAN AND GENDER */}
      <section className="bg-blue-50 px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Latest Indian Labour Market"
            title="Rural, Urban and Gender Differences"
            description="The September 2026 PLFS bulletin shows that unemployment conditions differ across sectors and genders."
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <DataCard
              label="Overall"
              value="5.0%"
              description="All India unemployment rate"
              icon={Users}
            />
            <DataCard
              label="Rural"
              value="4.2%"
              description="Rural unemployment rate"
              icon={Building2}
            />
            <DataCard
              label="Urban"
              value="6.9%"
              description="Urban unemployment rate"
              icon={BriefcaseBusiness}
            />
            <DataCard
              label="Female"
              value="5.2%"
              description="Overall female unemployment rate"
              icon={Users}
            />
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-blue-100 bg-white p-7 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900">
                Rural vs Urban
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                The rural unemployment rate was 4.2%, while the urban
                rate was 6.9%. These differences may reflect variations
                in employment opportunities, economic activities, and
                labour market structures.
              </p>
              <div className="mt-6 space-y-4">
                <div>
                  <div className="mb-2 flex justify-between text-sm font-bold">
                    <span>Rural</span>
                    <span>4.2%</span>
                  </div>
                  <div className="h-3 overflow-hidden rounded-full bg-slate-100">
                    <div className="h-full w-[42%] rounded-full bg-blue-600" />
                  </div>
                </div>
                <div>
                  <div className="mb-2 flex justify-between text-sm font-bold">
                    <span>Urban</span>
                    <span>6.9%</span>
                  </div>
                  <div className="h-3 overflow-hidden rounded-full bg-slate-100">
                    <div className="h-full w-[69%] rounded-full bg-indigo-600" />
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-blue-100 bg-white p-7 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900">
                Male vs Female
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                The overall male unemployment rate was 4.9%, while
                the female rate was 5.2% in September 2026.
              </p>
              <div className="mt-6 space-y-4">
                <div>
                  <div className="mb-2 flex justify-between text-sm font-bold">
                    <span>Male</span>
                    <span>4.9%</span>
                  </div>
                  <div className="h-3 overflow-hidden rounded-full bg-slate-100">
                    <div className="h-full w-[49%] rounded-full bg-blue-600" />
                  </div>
                </div>
                <div>
                  <div className="mb-2 flex justify-between text-sm font-bold">
                    <span>Female</span>
                    <span>5.2%</span>
                  </div>
                  <div className="h-3 overflow-hidden rounded-full bg-slate-100">
                    <div className="h-full w-[52%] rounded-full bg-pink-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="mt-5 text-xs leading-6 text-slate-500">
            Source: PLFS Monthly Bulletin, September 2026. All figures
            refer to persons aged 15 years and above under CWS.
          </p>
        </div>
      </section>

      {/* FORMULA */}
      <section id="formula" className="px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Calculation Method"
            title="Unemployment Rate Formula"
            description="The unemployment rate compares the number of unemployed people with the total labour force."
          />

          <FormulaBox />

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-blue-100 bg-white p-6">
              <h3 className="font-bold text-slate-900">
                Who Is Included in the Labour Force?
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Labour Force = Employed People + Unemployed People
                who satisfy the relevant statistical criteria.
              </p>
            </div>

            <div className="rounded-2xl border border-blue-100 bg-white p-6">
              <h3 className="font-bold text-slate-900">
                Who Is Not Included?
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                People outside the labour force, such as those who are
                neither working nor seeking or available for work,
                are excluded from the denominator.
              </p>
            </div>
          </div>
        </div>
      </section>
<AdSlot />
      {/* CALCULATION EXAMPLE */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Practical Example"
            title="How to Calculate the Unemployment Rate"
            description="Consider a hypothetical economy with 1,000 people in its labour force."
          />

          <div className="grid items-start gap-8 lg:grid-cols-2">
            <div className="rounded-3xl border border-blue-100 bg-white p-7 shadow-sm sm:p-9">
              <h3 className="mb-6 text-xl font-bold text-slate-900">
                Labour Force Information
              </h3>

              <div className="space-y-4">
                <div className="flex items-center justify-between rounded-xl bg-blue-50 p-4">
                  <span className="text-sm font-bold text-slate-700">
                    Total labour force
                  </span>
                  <span className="text-xl font-bold text-slate-950">
                    1,000
                  </span>
                </div>
                <div className="flex items-center justify-between rounded-xl bg-emerald-50 p-4">
                  <span className="text-sm font-bold text-slate-700">
                    Employed people
                  </span>
                  <span className="text-xl font-bold text-emerald-800">
                    950
                  </span>
                </div>
                <div className="flex items-center justify-between rounded-xl bg-amber-50 p-4">
                  <span className="text-sm font-bold text-slate-700">
                    Unemployed people
                  </span>
                  <span className="text-xl font-bold text-amber-800">
                    50
                  </span>
                </div>
              </div>

              <div className="mt-6 rounded-xl border border-blue-100 p-5">
                <p className="text-sm font-bold text-slate-800">
                  Step 1: Identify the unemployed population
                </p>
                <p className="mt-2 text-lg font-bold text-blue-700">
                  1,000 − 950 = 50
                </p>
              </div>
            </div>

            <div className="rounded-3xl bg-gradient-to-br from-blue-700 to-indigo-800 p-8 text-white shadow-xl sm:p-10">
              <div className="mb-6 flex items-center gap-3">
                <Calculator size={27} />
                <h3 className="text-xl font-bold">
                  Final Calculation
                </h3>
              </div>

              <p className="text-sm text-blue-100">
                Step 2: Apply the formula
              </p>

              <div className="my-8 rounded-2xl bg-white p-6 text-center text-slate-950">
                <p className="text-lg font-bold">Unemployment Rate =</p>
                <p className="mt-3 text-xl font-bold">
                  (50 ÷ 1,000) × 100
                </p>
                <div className="my-5 h-px bg-blue-100" />
                <p className="text-5xl font-bold text-blue-700">5%</p>
              </div>

              <div className="rounded-xl bg-white/10 p-5">
                <p className="font-bold">Interpretation</p>
                <p className="mt-2 text-sm leading-7 text-blue-100">
                  Five out of every 100 people in this hypothetical
                  labour force are unemployed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INDIA MEASUREMENT */}
      <section className="px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Statistical Methodology"
            title="How Is Unemployment Measured in India?"
            description="India uses the Periodic Labour Force Survey to estimate employment and unemployment indicators."
          />

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-8">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-700 text-white">
                <Landmark size={28} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">
                Periodic Labour Force Survey (PLFS)
              </h3>
              <p className="mt-4 leading-8 text-slate-600">
                The National Statistical Office (NSO), under the
                Ministry of Statistics and Programme Implementation
                (MoSPI), conducts the Periodic Labour Force Survey.
              </p>
              <p className="mt-4 leading-8 text-slate-600">
                PLFS provides information about employment,
                unemployment, labour force participation, and worker
                population ratios.
              </p>
              <a
                href="https://www.mospi.gov.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 font-bold text-blue-700 hover:text-blue-900"
              >
                Visit MoSPI <ArrowRight size={17} />
              </a>
            </div>

            <div className="rounded-3xl border border-blue-100 bg-white p-8 shadow-sm">
              <h3 className="mb-5 text-xl font-bold text-slate-900">
                Current Weekly Status (CWS)
              </h3>
              <p className="leading-7 text-slate-600">
                The monthly unemployment estimates use the Current
                Weekly Status approach.
              </p>

              <div className="mt-6 space-y-4">
                <div className="flex gap-3">
                  <CheckCircle2
                    className="mt-1 shrink-0 text-emerald-600"
                    size={20}
                  />
                  <p className="text-sm leading-7 text-slate-600">
                    The reference period is the seven days preceding
                    the survey.
                  </p>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2
                    className="mt-1 shrink-0 text-emerald-600"
                    size={20}
                  />
                  <p className="text-sm leading-7 text-slate-600">
                    A person is considered unemployed if they did not
                    work even for one hour on any day during the
                    reference week but sought or were available for
                    work for at least one hour on any day.
                  </p>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2
                    className="mt-1 shrink-0 text-emerald-600"
                    size={20}
                  />
                  <p className="text-sm leading-7 text-slate-600">
                    Monthly estimates cover people aged 15 years
                    and above in the published series shown here.
                  </p>
                </div>
              </div>

              <div className="mt-6 rounded-xl bg-amber-50 p-4 text-sm leading-7 text-amber-950">
                <strong>Note:</strong> CWS is different from Usual
                Status, which considers a longer reference period.
                Figures using different approaches should not be
                directly compared without checking their definitions.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TYPES OF UNEMPLOYMENT */}
      <section
        id="types"
        className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 px-5 py-20 sm:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Classification"
            title="Different Types of Unemployment"
            description="Unemployment can occur for different reasons. Understanding its types helps explain the problems affecting workers and the economy."
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {unemploymentTypes.map((item, index) => (
              <div
                key={item.title}
                className="flex flex-col rounded-2xl border border-blue-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-700 font-bold text-white">
                  {index + 1}
                </div>

                <h3 className="text-lg font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>

                <div className="mt-4 rounded-xl bg-blue-50 p-4">
                  <p className="text-xs font-bold uppercase tracking-wide text-blue-700">
                    Example
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-700">
                    {item.example}
                  </p>
                </div>

                <a
                  href={item.href}
                  className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-bold text-blue-700 hover:text-blue-900"
                >
                  Learn More <ArrowRight size={16} />
                </a>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-3xl bg-gradient-to-r from-blue-700 to-indigo-800 p-7 text-white sm:p-9">
            <div className="grid items-center gap-6 md:grid-cols-[1fr_auto]">
              <div>
                <p className="text-sm font-bold uppercase tracking-wider text-blue-200">
                  Detailed Guide
                </p>
                <h3 className="mt-2 text-2xl font-bold">
                  Explore All Types of Unemployment
                </h3>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-blue-100">
                  Understand the classification of unemployment,
                  its causes, practical examples, and how different
                  types affect workers and the economy.
                </p>
              </div>

              <a
                href="/economics/unemployment/types-of-unemployment"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 font-bold text-blue-800 transition hover:bg-blue-50"
              >
                Explore Types <ArrowRight size={17} />
              </a>
            </div>
          </div>
        </div>
      </section>
<AdSlot />
      {/* CAUSES */}
      <section className="px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Reasons Behind Unemployment"
            title="Major Causes of Unemployment"
            description="Unemployment can result from economic conditions, structural changes, demographic pressures, and weaknesses in the labour market."
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {causes.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                    <Icon size={24} />
                  </div>
                  <h3 className="font-bold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-7 text-center">
            <a
              href="/economics/unemployment/causes-of-unemployment"
              className="inline-flex items-center gap-2 font-bold text-blue-700 hover:text-blue-900"
            >
              Explore Causes of Unemployment <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </section>

      {/* EFFECTS */}
      <section className="bg-blue-50 px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Economic and Social Impact"
            title="Effects of Unemployment"
            description="Unemployment affects individuals, households, businesses, and the wider economy."
          />

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-blue-100 bg-white p-7 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                <Users size={25} />
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Effects on Individuals and Families
              </h3>
              <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-600">
                <li>• Reduced household income and purchasing power.</li>
                <li>• Increased financial pressure and difficulty meeting expenses.</li>
                <li>• Loss of professional experience and work confidence.</li>
                <li>• Greater uncertainty about future employment.</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-blue-100 bg-white p-7 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100 text-indigo-700">
                <TrendingDown size={25} />
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Effects on the Economy
              </h3>
              <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-600">
                <li>• Lower household consumption and aggregate demand.</li>
                <li>• Underutilisation of available human resources.</li>
                <li>• Lower potential production and economic output.</li>
                <li>• Greater pressure on public support systems and finances.</li>
              </ul>
            </div>
          </div>

          <div className="mt-7 text-center">
            <a
              href="/economics/unemployment/effects-of-unemployment"
              className="inline-flex items-center gap-2 font-bold text-blue-700 hover:text-blue-900"
            >
              Explore Effects of Unemployment <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </section>

      {/* GOVERNMENT MEASURES */}
      <section
        className="bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 px-5 py-20 sm:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Policy and Solutions"
            title="Measures to Reduce Unemployment"
            description="Reducing unemployment requires a combination of job creation, investment, education, and effective labour market policies."
            dark
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {measures.map((item, index) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/10 p-6"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-400/20 font-bold text-blue-200">
                  {index + 1}
                </div>
                <h3 className="font-bold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-blue-100">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-white/10 bg-white/10 p-6">
            <div className="flex gap-4">
              <Landmark
                size={27}
                className="mt-1 shrink-0 text-blue-300"
              />
              <div>
                <h3 className="font-bold text-white">
                  Government Employment Initiatives in India
                </h3>
                <p className="mt-2 text-sm leading-7 text-blue-100">
                  Examples include the Mahatma Gandhi National Rural
                  Employment Guarantee Act (MGNREGA), the Skill India
                  initiative, the Pradhan Mantri Kaushal Vikas Yojana,
                  and employment-support programmes. Their objectives
                  and eligibility conditions differ.
                </p>
                <a
                  href="https://www.india.gov.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 font-bold text-blue-300 hover:text-white"
                >
                  Government of India Portal <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
<AdSlot />
      {/* RELATED INDICATORS */}
      <section className="px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Related Economic Indicators"
            title="Unemployment Rate vs LFPR vs WPR"
            description="These indicators provide different information about the labour market and should be studied together."
          />

          <div className="overflow-x-auto rounded-2xl border border-blue-100 shadow-sm">
            <table className="w-full min-w-[680px] border-collapse text-left">
              <thead className="bg-blue-700 text-white">
                <tr>
                  <th className="p-4 font-bold">Indicator</th>
                  <th className="p-4 font-bold">What It Measures</th>
                  <th className="p-4 font-bold">Formula</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-blue-100 bg-white text-sm">
                <tr>
                  <td className="p-4 font-bold text-blue-800">
                    Unemployment Rate
                  </td>
                  <td className="p-4 text-slate-600">
                    Share of the labour force that is unemployed.
                  </td>
                  <td className="p-4 text-slate-600">
                    Unemployed ÷ Labour Force × 100
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-blue-800">
                    Labour Force Participation Rate
                  </td>
                  <td className="p-4 text-slate-600">
                    Share of the working-age population participating
                    in the labour force.
                  </td>
                  <td className="p-4 text-slate-600">
                    Labour Force ÷ Working-Age Population × 100
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-blue-800">
                    Worker Population Ratio
                  </td>
                  <td className="p-4 text-slate-600">
                    Share of the population that is employed.
                  </td>
                  <td className="p-4 text-slate-600">
                    Employed ÷ Population × 100
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-7 grid gap-5 sm:grid-cols-2">
            <a
              href="/economics/labour-force-participation-rate"
              className="group rounded-2xl border border-blue-100 bg-blue-50 p-6 transition hover:border-blue-300"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-slate-900">
                  Labour Force Participation Rate
                </h3>
                <ArrowRight
                  size={18}
                  className="text-blue-700 transition group-hover:translate-x-1"
                />
              </div>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Learn how much of the working-age population
                participates in the labour market.
              </p>
            </a>

            <a
              href="/economics/unemployment/types-of-unemployment"
              className="group rounded-2xl border border-blue-100 bg-blue-50 p-6 transition hover:border-blue-300"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-slate-900">
                  Types of Unemployment
                </h3>
                <ArrowRight
                  size={18}
                  className="text-blue-700 transition group-hover:translate-x-1"
                />
              </div>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Explore the different forms of unemployment with
                examples and explanations.
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-4xl">
          <SectionHeading
            eyebrow="Common Questions"
            title="Frequently Asked Questions"
            description="Quick answers to common questions about unemployment and its measurement."
          />

          <div className="space-y-4">
            {faqs.map((item) => (
              <details
                key={item.question}
                className="group rounded-2xl border border-blue-100 bg-white p-5 shadow-sm"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-slate-900">
                  {item.question}
                  <span className="text-xl text-blue-700 transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 border-t border-blue-50 pt-4 text-sm leading-7 text-slate-600">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* KEY TAKEAWAY */}
      <section className="bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-900 px-5 py-16 text-white sm:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15">
            <BookOpen size={28} />
          </div>

          <h2 className="text-3xl font-bold sm:text-4xl">
            Understanding Unemployment
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-blue-100">
            The unemployment rate is an important indicator of labour
            market conditions, but it does not tell the complete story.
            To understand employment in an economy, examine the
            unemployment rate alongside labour force participation,
            worker population ratio, job quality, and the different
            types of unemployment.
          </p>
        </div>
      </section>
    </main>
  );
}