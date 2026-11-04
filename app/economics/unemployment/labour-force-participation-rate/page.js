import {
  Activity,
  Users,
  BriefcaseBusiness,
  Calculator,
  TrendingUp,
  TrendingDown,
  GraduationCap,
  Baby,
  Factory,
  Globe,
  Info,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  BarChart3,
  Building2,
  BookOpen,
} from "lucide-react";
import AdSlot from "../../../../components/AdSlot";

export const metadata = {
  title: "Labour Force Participation Rate (LFPR): Meaning, Formula & Examples | PriceTag HUB",
  description:
    "Understand the Labour Force Participation Rate (LFPR), its formula, calculation, importance, influencing factors, and examples, including its significance in India.",
};

const factors = [
  {
    icon: GraduationCap,
    title: "Education and Skill Development",
    description:
      "Access to education and relevant skills can increase participation by helping people qualify for available jobs. However, people pursuing full-time education may temporarily remain outside the labour force.",
    color: "blue",
  },
  {
    icon: Baby,
    title: "Family Responsibilities",
    description:
      "Childcare, household responsibilities, and caring for family members can influence whether people are able or willing to participate in paid work.",
    color: "pink",
  },
  {
    icon: TrendingUp,
    title: "Economic Conditions",
    description:
      "A growing economy and better employment opportunities may encourage more people to seek work. During prolonged economic weakness, some people may stop looking for jobs.",
    color: "emerald",
  },
  {
    icon: Factory,
    title: "Availability of Jobs",
    description:
      "The number and quality of available jobs affect participation. A shortage of suitable employment opportunities can discourage people from entering or remaining in the labour market.",
    color: "amber",
  },
  {
    icon: Building2,
    title: "Social and Cultural Factors",
    description:
      "Social expectations, workplace accessibility, safety, and family attitudes can influence participation, particularly among women and certain population groups.",
    color: "violet",
  },
  {
    icon: Globe,
    title: "Migration and Demographic Changes",
    description:
      "Migration, population ageing, and changes in the working-age population can affect the overall participation rate.",
    color: "cyan",
  },
];

const uses = [
  {
    title: "Understanding Labour Market Conditions",
    description:
      "LFPR helps economists understand how much of the working-age population is participating in the labour market.",
  },
  {
    title: "Evaluating Economic Growth",
    description:
      "A higher participation rate can indicate that more people are contributing their labour to economic activity.",
  },
  {
    title: "Measuring Gender Participation",
    description:
      "Separate LFPR figures for men and women help identify differences in labour market participation.",
  },
  {
    title: "Planning Employment Policies",
    description:
      "Governments can use participation data to design skill-development, employment, childcare, and workforce policies.",
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

function InfoCard({ icon: Icon, title, children }) {
  return (
    <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
        <Icon size={23} />
      </div>
      <h3 className="mb-2 text-lg font-bold text-slate-900">{title}</h3>
      <p className="text-sm leading-7 text-slate-600">{children}</p>
    </div>
  );
}

export default function LabourForceParticipationRatePage() {
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
              Labour Force Participation Rate (LFPR)
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              The Labour Force Participation Rate measures the percentage of
              the working-age population that is either employed or actively
              participating in the labour market by seeking or being available
              for work.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#formula"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-700 px-6 py-3 font-bold text-white shadow-lg transition hover:bg-blue-800"
              >
                Understand the Formula <ArrowRight size={18} />
              </a>
              <a
                href="#example"
                className="rounded-xl border border-blue-200 bg-white px-6 py-3 font-bold text-blue-800 transition hover:bg-blue-50"
              >
                View Calculation
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-blue-100 bg-white p-6 shadow-xl sm:p-8">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-sm font-bold text-blue-700">
                  Labour Market Overview
                </p>
                <h2 className="mt-1 text-2xl font-bold text-slate-900">
                  Who participates?
                </h2>
              </div>
              <div className="rounded-xl bg-blue-50 p-3 text-blue-700">
                <Users size={28} />
              </div>
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl bg-emerald-50 p-5">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-emerald-700" size={24} />
                  <div>
                    <p className="font-bold text-emerald-900">Employed</p>
                    <p className="text-sm text-emerald-800">
                      People currently working
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-amber-50 p-5">
                <div className="flex items-center gap-3">
                  <BriefcaseBusiness className="text-amber-700" size={24} />
                  <div>
                    <p className="font-bold text-amber-900">
                      Unemployed in the labour force
                    </p>
                    <p className="text-sm text-amber-800">
                      People without work who meet the relevant job-search or
                      availability criteria
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-slate-100 p-5">
                <div className="flex items-center gap-3">
                  <AlertCircle className="text-slate-600" size={24} />
                  <div>
                    <p className="font-bold text-slate-800">
                      Outside the labour force
                    </p>
                    <p className="text-sm text-slate-600">
                      People not classified as employed or unemployed under
                      the measurement method
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <p className="mt-5 text-xs leading-6 text-slate-500">
              Classification depends on the statistical definition and
              reference period used.
            </p>
          </div>
        </div>
      </section>

      {/* DEFINITION */}
      <section className="px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Basic Concept"
            title="What Is Labour Force Participation Rate?"
            description="LFPR indicates how actively people of working age are participating in the labour market."
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
                Suppose a country has 1,000 people in its working-age
                population. Out of them, 640 people are either employed or
                unemployed but participating in the labour market according
                to the applicable definition.
              </p>
              <p className="mt-4 leading-8 text-slate-600">
                Its Labour Force Participation Rate is 64%. This means 64% of
                the working-age population is participating in the labour
                force.
              </p>
            </div>

            <div className="rounded-3xl border border-indigo-100 bg-white p-8 shadow-sm">
              <h3 className="mb-5 text-2xl font-bold text-slate-900">
                What Counts as the Labour Force?
              </h3>
              <div className="space-y-5">
                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                    <BriefcaseBusiness size={22} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Employed People</h4>
                    <p className="mt-1 text-sm leading-7 text-slate-600">
                      People who have work or are engaged in an economic
                      activity under the relevant statistical definition.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
                    <Activity size={22} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">
                      Unemployed People
                    </h4>
                    <p className="mt-1 text-sm leading-7 text-slate-600">
                      People without work who satisfy the applicable
                      unemployment criteria, such as seeking work or being
                      available for work.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-xl bg-indigo-50 p-4 text-sm leading-7 text-indigo-900">
                <strong>Important:</strong> Not everyone without a job is
                counted as unemployed. For example, a full-time student who
                is not seeking or available for work is generally outside the
                labour force.
              </div>
            </div>
          </div>
        </div>
      </section>
<AdSlot />
      {/* FORMULA */}
      <section
        id="formula"
        className="bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 px-5 py-20 sm:px-8"
      >
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Calculation Method"
            title="Labour Force Participation Rate Formula"
            description="The rate is calculated by dividing the labour force by the working-age population and multiplying the result by 100."
            dark
          />

          <div className="rounded-3xl border border-white/10 bg-white/10 p-7 text-center backdrop-blur sm:p-12">
            <p className="mb-6 text-sm font-bold uppercase tracking-wider text-blue-200">
              LFPR Formula
            </p>

            <div className="mx-auto max-w-2xl rounded-2xl bg-white p-6 text-slate-950 sm:p-10">
              <p className="text-2xl font-bold sm:text-3xl">
                LFPR =
              </p>
              <div className="mx-auto mt-4 max-w-md">
                <div className="border-b-2 border-slate-900 pb-3 text-lg font-bold sm:text-xl">
                  Labour Force
                </div>
                <div className="pt-3 text-lg font-bold sm:text-xl">
                  Working-Age Population
                </div>
              </div>
              <p className="mt-5 text-2xl font-bold text-blue-700">
                × 100
              </p>
            </div>

            <div className="mt-8 grid gap-4 text-left sm:grid-cols-2">
              <div className="rounded-2xl bg-white/10 p-5">
                <p className="font-bold text-white">Labour Force</p>
                <p className="mt-2 text-sm leading-7 text-blue-100">
                  Employed people + unemployed people who meet the relevant
                  labour-force criteria.
                </p>
              </div>
              <div className="rounded-2xl bg-white/10 p-5">
                <p className="font-bold text-white">Working-Age Population</p>
                <p className="mt-2 text-sm leading-7 text-blue-100">
                  The population within the age range used by the particular
                  statistical authority or survey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXAMPLE */}
      <section id="example" className="bg-blue-50 px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Practical Example"
            title="How to Calculate LFPR"
            description="Let's calculate the participation rate using a hypothetical population."
          />

          <div className="grid items-start gap-8 lg:grid-cols-2">
            <div className="rounded-3xl bg-white p-7 shadow-sm sm:p-9">
              <h3 className="mb-6 text-xl font-bold text-slate-900">
                Population Information
              </h3>

              <div className="space-y-4">
                {[
                  ["Total working-age population", "1,000", "bg-blue-50"],
                  ["Employed people", "600", "bg-emerald-50"],
                  ["Unemployed people in labour force", "40", "bg-amber-50"],
                  ["People outside labour force", "360", "bg-slate-100"],
                ].map(([label, value, color]) => (
                  <div
                    key={label}
                    className={`flex items-center justify-between gap-3 rounded-xl ${color} p-4`}
                  >
                    <span className="text-sm font-bold text-slate-700">
                      {label}
                    </span>
                    <span className="text-xl font-bold text-slate-950">
                      {value}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-xl border border-blue-100 bg-white p-4">
                <p className="text-sm font-bold text-slate-800">
                  Step 1: Calculate the labour force
                </p>
                <p className="mt-2 text-lg font-bold text-blue-700">
                  600 + 40 = 640
                </p>
              </div>
            </div>

            <div className="rounded-3xl bg-gradient-to-br from-blue-700 to-indigo-800 p-8 text-white shadow-xl sm:p-10">
              <div className="mb-6 flex items-center gap-3">
                <Calculator size={27} />
                <h3 className="text-xl font-bold">Final Calculation</h3>
              </div>

              <p className="text-sm text-blue-100">
                Step 2: Apply the LFPR formula
              </p>

              <div className="my-8 rounded-2xl bg-white p-6 text-center text-slate-950">
                <p className="text-lg font-bold">LFPR =</p>
                <p className="mt-3 text-xl font-bold">
                  (640 ÷ 1,000) × 100
                </p>
                <div className="my-5 h-px bg-blue-100" />
                <p className="text-5xl font-bold text-blue-700">64%</p>
              </div>

              <div className="rounded-xl bg-white/10 p-5">
                <p className="font-bold">Interpretation</p>
                <p className="mt-2 text-sm leading-7 text-blue-100">
                  64% of the working-age population participates in the
                  labour force. The remaining 36% is outside the labour
                  force under this example's classification.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VISUAL DIAGRAM */}
      <section className="px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Visual Understanding"
            title="How the Working-Age Population Is Divided"
            description="The working-age population is divided into people inside and outside the labour force."
          />

          <div className="rounded-3xl border border-blue-100 bg-white p-6 shadow-sm sm:p-10">
            <div className="mx-auto max-w-xl rounded-2xl bg-blue-700 p-5 text-center text-white">
              <Users className="mx-auto mb-2" size={28} />
              <p className="text-xl font-bold">Working-Age Population</p>
              <p className="mt-1 text-sm text-blue-100">
                Entire population within the selected age range
              </p>
            </div>

            <div className="mx-auto h-10 w-0.5 bg-blue-300" />

            <div className="grid gap-5 md:grid-cols-2">
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
                <div className="mb-4 text-center">
                  <p className="text-lg font-bold text-emerald-900">
                    Labour Force
                  </p>
                  <p className="text-sm text-emerald-800">
                    Included in LFPR numerator
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="rounded-xl bg-white p-4 text-center">
                    <p className="font-bold text-emerald-800">Employed</p>
                    <p className="mt-1 text-xs text-slate-600">
                      People who are working
                    </p>
                  </div>
                  <div className="rounded-xl bg-white p-4 text-center">
                    <p className="font-bold text-amber-800">Unemployed</p>
                    <p className="mt-1 text-xs text-slate-600">
                      People meeting the relevant unemployment criteria
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <div className="mb-4 text-center">
                  <p className="text-lg font-bold text-slate-900">
                    Outside the Labour Force
                  </p>
                  <p className="text-sm text-slate-600">
                    Not included in LFPR numerator
                  </p>
                </div>

                <div className="space-y-3">
                  {[
                    "Full-time students not seeking work",
                    "People engaged only in unpaid household work",
                    "Retired people not seeking work",
                    "Others not meeting labour-force criteria",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-xl bg-white p-3 text-center text-sm font-bold text-slate-700"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <p className="mt-5 text-xs leading-6 text-slate-500">
              These are illustrative categories. Actual statistical
              classifications depend on the survey's definitions, reference
              period, and treatment of different economic activities.
            </p>
          </div>
        </div>
      </section>

      {/* IMPORTANCE */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Economic Significance"
            title="Why Is LFPR Important?"
            description="LFPR helps governments, economists, and researchers understand workforce participation and changes in the labour market."
          />

          <div className="grid gap-5 sm:grid-cols-2">
            {uses.map((item, index) => (
              <div
                key={item.title}
                className="flex gap-4 rounded-2xl border border-blue-100 bg-white p-6 shadow-sm"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-700 font-bold text-white">
                  {index + 1}
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
<AdSlot />
      {/* FACTORS */}
      <section className="px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Key Influences"
            title="Factors Affecting Labour Force Participation Rate"
            description="Several economic, demographic, educational, and social factors influence the number of people participating in the labour market."
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {factors.map((factor) => {
              const Icon = factor.icon;

              return (
                <div
                  key={factor.title}
                  className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                    <Icon size={24} />
                  </div>
                  <h3 className="mb-3 text-lg font-bold text-slate-900">
                    {factor.title}
                  </h3>
                  <p className="text-sm leading-7 text-slate-600">
                    {factor.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

    {/* LFPR AND INDIA – OFFICIAL LATEST DATA */}
<section className="bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 px-5 py-20 text-white sm:px-8">
  <div className="mx-auto max-w-7xl">
    <div className="grid items-center gap-10 lg:grid-cols-2">
      <div>
        <p className="mb-3 text-sm font-bold uppercase tracking-wider text-blue-300">
          Indian Economy | Official Statistics
        </p>

        <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
          Labour Force Participation Rate in India
        </h2>

        <p className="mt-5 leading-8 text-blue-100">
          According to the Periodic Labour Force Survey (PLFS)
          conducted by the National Statistical Office (NSO),
          Ministry of Statistics and Programme Implementation
          (MoSPI), India's overall Labour Force Participation Rate
          for people aged 15 years and above was 55.5% in
          September 2026.
        </p>

        <p className="mt-4 leading-8 text-blue-100">
          The figures below follow the Current Weekly Status (CWS)
          approach. They show how participation differs across
          rural and urban areas and between men and women.
        </p>

        <div className="mt-6 rounded-xl border border-blue-300/20 bg-white/10 p-5">
          <p className="text-sm font-bold text-blue-200">
            Latest available reference period
          </p>
          <p className="mt-1 text-2xl font-bold text-white">
            September 2026
          </p>
          <p className="mt-1 text-sm text-blue-200">
            Official bulletin published: 15 October 2026
          </p>
        </div>
      </div>

      {/* OFFICIAL DATA CARDS */}
      <div className="rounded-3xl border border-white/10 bg-white/10 p-6 sm:p-8">
        <div className="mb-6 flex items-center justify-between gap-3">
          <h3 className="text-xl font-bold">
            India's LFPR at a Glance
          </h3>
          <span className="rounded-lg bg-blue-400/20 px-3 py-1 text-xs font-bold text-blue-200">
            NSO / MoSPI
          </span>
        </div>

        <div className="mb-5 rounded-2xl bg-blue-600 p-6">
          <p className="text-sm font-bold text-blue-100">
            Overall LFPR (Age 15+)
          </p>
          <p className="mt-2 text-5xl font-bold text-white">
            55.5%
          </p>
          <p className="mt-2 text-sm text-blue-100">
            September 2026
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-2xl bg-white/10 p-5">
            <p className="text-sm text-blue-200">Rural LFPR</p>
            <p className="mt-2 text-3xl font-bold text-white">
              58.0%
            </p>
          </div>

          <div className="rounded-2xl bg-white/10 p-5">
            <p className="text-sm text-blue-200">Urban LFPR</p>
            <p className="mt-2 text-3xl font-bold text-white">
              50.7%
            </p>
          </div>

          <div className="rounded-2xl bg-white/10 p-5">
            <p className="text-sm text-blue-200">Female LFPR</p>
            <p className="mt-2 text-3xl font-bold text-white">
              34.6%
            </p>
          </div>

          <div className="rounded-2xl bg-white/10 p-5">
            <p className="text-sm text-blue-200">Urban Female LFPR</p>
            <p className="mt-2 text-3xl font-bold text-white">
              25.9%
            </p>
          </div>
        </div>

        <div className="mt-5 rounded-xl border border-white/10 bg-white/5 p-4">
          <p className="text-sm leading-7 text-blue-100">
            Rural female LFPR: <strong className="text-white">38.9%</strong>
          </p>
          <p className="mt-1 text-sm leading-7 text-blue-100">
            Worker Population Ratio: <strong className="text-white">52.7%</strong>
          </p>
          <p className="mt-1 text-sm leading-7 text-blue-100">
            Unemployment Rate: <strong className="text-white">5.0%</strong>
          </p>
        </div>
      </div>
    </div>

    {/* DATA INTERPRETATION */}
    <div className="mt-12">
      <h3 className="mb-6 text-2xl font-bold">
        What Do These Official Figures Tell Us?
      </h3>

      <div className="grid gap-5 md:grid-cols-3">
        <div className="rounded-2xl border border-white/10 bg-white/10 p-6">
          <h4 className="font-bold text-blue-200">
            Rural vs Urban Participation
          </h4>
          <p className="mt-3 text-sm leading-7 text-blue-100">
            Rural LFPR was 58.0%, compared with 50.7% in urban
            areas. This indicates a difference in labour-force
            participation between the two sectors.
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/10 p-6">
          <h4 className="font-bold text-blue-200">
            Women's Participation
          </h4>
          <p className="mt-3 text-sm leading-7 text-blue-100">
            Female LFPR stood at 34.6%. Rural female participation
            was 38.9%, while urban female participation was 25.9%.
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/10 p-6">
          <h4 className="font-bold text-blue-200">
            Year-on-Year Change
          </h4>
          <p className="mt-3 text-sm leading-7 text-blue-100">
            Overall LFPR increased by 0.2 percentage points
            compared with September 2025, when it was 55.3%.
          </p>
        </div>
      </div>
    </div>

    {/* SOURCE */}
    <div className="mt-10 rounded-2xl border border-blue-300/20 bg-blue-900/40 p-6">
      <p className="font-bold text-white">
        Official Government Source
      </p>

      <p className="mt-2 text-sm leading-7 text-blue-100">
        Ministry of Statistics and Programme Implementation
        (MoSPI), Government of India – PLFS Monthly Bulletin,
        September 2026.
      </p>

      <a
        href="https://www.pib.gov.in/PressReleasePage.aspx?PRID=2323828&lang=1&reg=3"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex items-center gap-2 font-bold text-blue-300 hover:text-white"
      >
        Read Official Government Release
        <ArrowRight size={17} />
      </a>

      <p className="mt-3 text-xs leading-6 text-blue-200">
        Source: NSO, MoSPI | Published 15 October 2026 |
        Reference period: September 2026 | Population: Age 15+
        | Measurement: Current Weekly Status (CWS).
      </p>
    </div>
  </div>
</section>

      {/* COMPARISON */}
      <section className="px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Important Distinction"
            title="LFPR vs Unemployment Rate vs Worker Population Ratio"
            description="These three labour market indicators measure different aspects of employment and participation."
          />

          <div className="overflow-x-auto rounded-2xl border border-blue-100 shadow-sm">
            <table className="w-full min-w-[650px] border-collapse text-left">
              <thead className="bg-blue-700 text-white">
                <tr>
                  <th className="p-4 font-bold">Indicator</th>
                  <th className="p-4 font-bold">What It Measures</th>
                  <th className="p-4 font-bold">Basic Formula</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-blue-100 bg-white text-sm">
                <tr>
                  <td className="p-4 font-bold text-blue-800">
                    Labour Force Participation Rate
                  </td>
                  <td className="p-4 text-slate-600">
                    Share of the working-age population in the labour force.
                  </td>
                  <td className="p-4 text-slate-600">
                    Labour Force ÷ Working-Age Population × 100
                  </td>
                </tr>
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

          <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5">
            <div className="flex gap-3">
              <Info className="mt-1 shrink-0 text-amber-700" size={22} />
              <p className="text-sm leading-7 text-amber-950">
                <strong>Remember:</strong> A high LFPR does not automatically
                mean that everyone has a job. The unemployment rate must also
                be examined to understand how many labour-force participants
                are unable to find work.
              </p>
            </div>
          </div>
        </div>
      </section>
<AdSlot />
      {/* INTERPRETATION */}
      <section className="bg-blue-50 px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Economic Interpretation"
            title="Does a Higher LFPR Always Mean a Better Economy?"
            description="LFPR is useful, but it should not be interpreted in isolation."
          />

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-emerald-200 bg-white p-7 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                <TrendingUp size={25} />
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                When an Increase Can Be Positive
              </h3>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
                <li>• More people are entering the workforce.</li>
                <li>• More women are accessing employment opportunities.</li>
                <li>• People are gaining skills and seeking jobs.</li>
                <li>• More people are participating in productive economic activity.</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-rose-200 bg-white p-7 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-rose-100 text-rose-700">
                <AlertCircle size={25} />
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Why a Higher Rate Needs Context
              </h3>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
                <li>• More people may be seeking jobs because household incomes have fallen.</li>
                <li>• A higher participation rate can coexist with high unemployment.</li>
                <li>• Participation does not reveal job quality or wages.</li>
                <li>• Informal and underemployed work may require separate analysis.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-4xl">
          <SectionHeading
            eyebrow="Common Questions"
            title="Frequently Asked Questions About LFPR"
          />

          <div className="space-y-4">
            {[
              [
                "What is the full form of LFPR?",
                "LFPR stands for Labour Force Participation Rate. It measures the proportion of the working-age population that participates in the labour force.",
              ],
              [
                "What is the formula for LFPR?",
                "LFPR = (Labour Force ÷ Working-Age Population) × 100. The labour force consists of employed and unemployed people who meet the relevant statistical criteria.",
              ],
              [
                "Are unemployed people included in LFPR?",
                "Yes. Unemployed people are included if they meet the applicable criteria for being part of the labour force, such as job-search or availability conditions.",
              ],
              [
                "Are students included in the labour force?",
                "Students who are working or meet the relevant unemployment criteria can be included. Students who are neither working nor seeking or available for work are generally outside the labour force.",
              ],
              [
                "What is the difference between LFPR and the unemployment rate?",
                "LFPR measures the share of the working-age population participating in the labour force. The unemployment rate measures the share of the labour force that is unemployed.",
              ],
              [
                "Who publishes labour force participation data in India?",
                "The National Statistical Office (NSO), under the Ministry of Statistics and Programme Implementation, publishes India's Periodic Labour Force Survey (PLFS) results.",
              ],
              [
                "Can LFPR decrease even when unemployment decreases?",
                "Yes. If people stop looking for work or are no longer available for work, they may leave the labour force. This can reduce both the LFPR and the unemployment rate.",
              ],
            ].map(([question, answer]) => (
              <details
                key={question}
                className="group rounded-2xl border border-blue-100 bg-white p-5 shadow-sm"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-slate-900">
                  {question}
                  <span className="text-xl text-blue-700 transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 border-t border-blue-50 pt-4 text-sm leading-7 text-slate-600">
                  {answer}
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
            Key Takeaway
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-blue-100">
            Labour Force Participation Rate is an important indicator of
            workforce engagement. It tells us how many people in the
            working-age population are participating in the labour market,
            but it must be studied alongside unemployment, wages, and job
            quality to understand the complete employment situation.
          </p>
        </div>
      </section>
    </main>
  );
}