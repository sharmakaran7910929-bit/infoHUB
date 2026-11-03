
import Link from "next/link";
import {
  TrendingUp,
  TrendingDown,
  BriefcaseBusiness,
  Building2,
  Factory,
  Users,
  CircleDollarSign,
  Landmark,
  Banknote,
  Activity,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  RefreshCw,
  Lightbulb,
  Target,
  BarChart3,
  Clock,
  ShieldCheck,
  HelpCircle,
  GraduationCap,
} from "lucide-react";
import AdSlot from "../../../../components/AdSlot";

export const metadata = {
  title: "Cyclical Unemployment: Meaning, Causes, Examples & Solutions",
  description:
    "Understand cyclical unemployment, its causes, real-world examples, business cycle phases, economic impacts, and how government policies help reduce unemployment.",
  keywords: [
    "cyclical unemployment",
    "what is cyclical unemployment",
    "causes of cyclical unemployment",
    "examples of cyclical unemployment",
    "business cycle and unemployment",
    "cyclical vs structural unemployment",
    "how to reduce cyclical unemployment",
  ],
  alternates: {
    canonical:
      "https://www.pricetag.co.in/economics/unemployment/cyclical-unemployment",
  },
  openGraph: {
    title: "Cyclical Unemployment: Meaning, Causes, Examples & Solutions",
    description:
      "Learn how economic recessions and business cycles cause cyclical unemployment and how economies recover.",
    url: "https://www.pricetag.co.in/economics/unemployment/cyclical-unemployment",
    type: "article",
  },
};

const businessCycle = [
  {
    phase: "Expansion",
    subtitle: "Economic activity increases",
    detail:
      "Businesses receive more orders, increase production, invest in capacity and hire additional workers.",
    icon: TrendingUp,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    border: "border-emerald-200",
    effect: "Unemployment generally falls",
  },
  {
    phase: "Peak",
    subtitle: "Economic activity reaches a high",
    detail:
      "Production and employment are relatively high. Demand may begin to slow after a period of strong growth.",
    icon: BarChart3,
    color: "text-blue-600",
    bg: "bg-blue-50",
    border: "border-blue-200",
    effect: "Employment is generally strong",
  },
  {
    phase: "Recession",
    subtitle: "Economic activity declines",
    detail:
      "Demand falls, businesses reduce production, investment weakens and some employers lay off workers.",
    icon: TrendingDown,
    color: "text-rose-600",
    bg: "bg-rose-50",
    border: "border-rose-200",
    effect: "Unemployment generally rises",
  },
  {
    phase: "Recovery",
    subtitle: "Economic activity improves",
    detail:
      "Consumer spending and business investment begin to return. Companies gradually restart hiring.",
    icon: RefreshCw,
    color: "text-violet-600",
    bg: "bg-violet-50",
    border: "border-violet-200",
    effect: "Unemployment gradually falls",
  },
];

const causes = [
  {
    title: "Declining Consumer Demand",
    description:
      "When households reduce spending, businesses receive fewer orders. Companies may reduce production and require fewer employees.",
    icon: Users,
  },
  {
    title: "Reduced Business Investment",
    description:
      "During economic uncertainty, businesses may postpone expansion, purchase fewer machines and cancel new projects, reducing job creation.",
    icon: Building2,
  },
  {
    title: "Economic Recession",
    description:
      "A sustained decline in economic activity can affect multiple industries simultaneously, causing widespread layoffs.",
    icon: TrendingDown,
  },
  {
    title: "Falling Industrial Production",
    description:
      "Factories may operate below capacity when demand decreases, reducing their requirement for production workers.",
    icon: Factory,
  },
  {
    title: "Declining Business Revenue",
    description:
      "Lower sales reduce business cash flow and profitability. Employers may freeze recruitment, cut working hours or reduce staff.",
    icon: CircleDollarSign,
  },
  {
    title: "Financial Market Uncertainty",
    description:
      "Credit restrictions, financial instability and uncertainty can discourage investment and expansion, weakening employment opportunities.",
    icon: Activity,
  },
];

const examples = [
  {
    number: "01",
    title: "Automobile Industry During a Recession",
    situation:
      "Consumers postpone purchasing new cars because of reduced income or uncertainty about the economy.",
    impact:
      "Automobile manufacturers receive fewer orders, reduce production shifts and may lay off factory workers.",
    lesson:
      "The workers lose their jobs because overall economic demand has weakened, not necessarily because they lack the required skills.",
    icon: Factory,
  },
  {
    number: "02",
    title: "Construction Industry During an Economic Slowdown",
    situation:
      "Businesses and households postpone new buildings, commercial projects and property investments.",
    impact:
      "Construction companies receive fewer contracts and reduce their demand for engineers, labourers, drivers and other workers.",
    lesson:
      "Employment declines because investment and economic activity have slowed.",
    icon: Building2,
  },
  {
    number: "03",
    title: "Retail Businesses During Falling Consumer Spending",
    situation:
      "Households reduce spending on clothing, electronics, furniture and other non-essential products.",
    impact:
      "Retailers experience lower sales, close underperforming outlets or reduce employee working hours.",
    lesson:
      "Lower consumer spending creates a chain reaction across businesses and employment.",
    icon: BriefcaseBusiness,
  },
];

const impacts = [
  {
    title: "Lower Household Income",
    description:
      "People who lose their jobs experience reduced income, making it harder to pay for housing, education and everyday necessities.",
  },
  {
    title: "Reduced Consumer Spending",
    description:
      "Unemployed workers and uncertain households spend less, further reducing demand for products and services.",
  },
  {
    title: "Lower GDP Growth",
    description:
      "When fewer people are employed and businesses produce less, the economy may experience weaker output and slower growth.",
  },
  {
    title: "Increased Poverty and Inequality",
    description:
      "Long periods of unemployment can increase financial hardship and widen income differences between households.",
  },
  {
    title: "Business Closures",
    description:
      "Weak demand and falling revenue can force vulnerable businesses to reduce operations or shut down.",
  },
  {
    title: "Mental and Social Stress",
    description:
      "Job losses can create uncertainty, financial pressure and stress for individuals and their families.",
  },
];

const policyMeasures = [
  {
    title: "Expansionary Fiscal Policy",
    description:
      "The government can increase public expenditure, invest in infrastructure and provide targeted tax relief to stimulate aggregate demand.",
    icon: Landmark,
    tag: "Government",
  },
  {
    title: "Expansionary Monetary Policy",
    description:
      "A central bank can reduce policy interest rates when appropriate, making borrowing cheaper and encouraging consumption and investment.",
    icon: Banknote,
    tag: "Central Bank",
  },
  {
    title: "Infrastructure Development",
    description:
      "Investment in roads, railways, public facilities and other infrastructure creates direct employment and supports related industries.",
    icon: Building2,
    tag: "Public Investment",
  },
  {
    title: "Support for Businesses",
    description:
      "Targeted credit support, suitable financial assistance and temporary relief measures can help viable businesses maintain operations and employment.",
    icon: BriefcaseBusiness,
    tag: "Business Support",
  },
  {
    title: "Employment Generation Programmes",
    description:
      "Public employment programmes and skill-development initiatives can support workers during periods of weak private-sector hiring.",
    icon: Users,
    tag: "Employment",
  },
  {
    title: "Restoring Consumer Confidence",
    description:
      "Measures that improve household financial security and economic confidence can encourage spending and help businesses recover.",
    icon: ShieldCheck,
    tag: "Demand Recovery",
  },
];

const faqs = [
  {
    question: "What is cyclical unemployment in simple words?",
    answer:
      "Cyclical unemployment occurs when people lose their jobs because the economy slows down. Businesses receive fewer orders, reduce production and employ fewer workers.",
  },
  {
    question: "What is the main cause of cyclical unemployment?",
    answer:
      "The main cause is a decline in overall economic demand. Recessions, reduced consumer spending and lower business investment can cause companies to reduce employment.",
  },
  {
    question: "How is cyclical unemployment related to the business cycle?",
    answer:
      "Cyclical unemployment moves with the business cycle. It generally increases during recessions and decreases during economic expansions and recoveries.",
  },
  {
    question: "Can cyclical unemployment occur in India?",
    answer:
      "Yes. Cyclical unemployment can occur in India when economic slowdowns reduce demand, production and hiring in industries such as automobiles, construction, manufacturing and retail.",
  },
  {
    question: "How can cyclical unemployment be reduced?",
    answer:
      "It can be reduced by restoring aggregate demand through suitable fiscal and monetary policies, public investment, business support and employment-generation measures.",
  },
  {
    question: "Is cyclical unemployment temporary?",
    answer:
      "It is generally associated with economic fluctuations and may decline when the economy recovers. However, a prolonged recession can make unemployment persistent and create additional structural problems.",
  },
  {
    question: "What is the difference between cyclical and structural unemployment?",
    answer:
      "Cyclical unemployment results from insufficient overall economic demand, while structural unemployment occurs when workers' skills, locations or qualifications do not match available jobs.",
  },
  {
    question: "Does inflation always reduce cyclical unemployment?",
    answer:
      "No. Inflation does not automatically reduce unemployment. The relationship between inflation and unemployment depends on economic conditions, expectations, supply shocks and monetary policy.",
  },
];
function SectionHeading({
  eyebrow,
  title,
  description,
  dark = false,
}) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <p
        className={`mb-3 text-sm font-bold uppercase tracking-wider ${
          dark ? "text-blue-300" : "text-blue-600"
        }`}
      >
        {eyebrow}
      </p>

      <h2
        className={`text-3xl font-bold tracking-tight md:text-4xl ${
          dark ? "text-white" : "text-slate-900"
        }`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`mt-4 text-base leading-8 ${
            dark ? "text-slate-300" : "text-slate-600"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

function CycleCard({ item }) {
  const Icon = item.icon;

  return (
    <div
      className={`rounded-2xl border ${item.border} ${item.bg} p-5`}
    >
      <div className={`mb-4 flex items-center gap-3 ${item.color}`}>
        <div className="rounded-xl bg-white p-3">
          <Icon size={25} />
        </div>
        <h3 className="text-xl font-bold">{item.phase}</h3>
      </div>
      <p className="font-bold text-slate-800">{item.subtitle}</p>
      <p className="mt-2 text-sm leading-7 text-slate-600">
        {item.detail}
      </p>
      <div className="mt-4 rounded-lg bg-white/80 p-3 text-sm font-bold text-slate-800">
        {item.effect}
      </div>
    </div>
  );
}

export default function CyclicalUnemploymentPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline:
          "Cyclical Unemployment: Meaning, Causes, Examples and Solutions",
        description:
          "A detailed explanation of cyclical unemployment, business cycles, causes, impacts and economic policy measures.",
        mainEntityOfPage:
          "https://www.pricetag.co.in/economics/unemployment/cyclical-unemployment",
        author: {
          "@type": "Organization",
          name: "PriceTag HUB",
          url: "https://www.pricetag.co.in/",
        },
        publisher: {
          "@type": "Organization",
          name: "PriceTag HUB",
          url: "https://www.pricetag.co.in/",
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <main className="overflow-hidden bg-white text-slate-800">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-100 px-5 py-20 sm:px-8 lg:py-28">
        <div className="absolute -right-24 -top-20 h-80 w-80 rounded-full bg-blue-200/40 blur-3xl" />
        <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-indigo-200/40 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-bold text-blue-700 shadow-sm">
              <GraduationCap size={17} />
              Economics / Unemployment
            </div>

            <h1 className="text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Cyclical
              <span className="block text-blue-700">
                Unemployment
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-9 text-slate-600">
              Why do people lose their jobs when the economy slows down?
              Understand how recessions, falling demand and business cycles
              influence employment, with practical examples and economic
              solutions.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#meaning"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-700 px-6 py-3 font-bold text-white shadow-lg shadow-blue-700/20 transition hover:bg-blue-800"
              >
                Explore the Concept
                <ArrowRight size={18} />
              </a>
              <a
                href="#business-cycle"
                className="rounded-xl border border-slate-300 bg-white px-6 py-3 font-bold text-slate-700 transition hover:border-blue-400"
              >
                View Business Cycle
              </a>
            </div>
          </div>

          <div className="relative rounded-3xl border border-blue-100 bg-white p-6 shadow-2xl shadow-blue-900/10 sm:p-9">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-sm font-bold text-slate-500">
                  Economic Relationship
                </p>
                <h2 className="mt-1 text-xl font-bold text-slate-900">
                  Demand and Employment
                </h2>
              </div>
              <div className="rounded-xl bg-blue-50 p-3 text-blue-700">
                <BarChart3 size={26} />
              </div>
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl bg-emerald-50 p-5">
                <div className="flex items-center gap-3">
                  <TrendingUp className="text-emerald-600" size={25} />
                  <span className="font-bold text-emerald-800">
                    Economic Expansion
                  </span>
                </div>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  Higher demand → Higher production → More hiring
                </p>
              </div>

              <div className="flex justify-center">
                <ArrowRight className="rotate-90 text-slate-400" size={24} />
              </div>

              <div className="rounded-2xl bg-rose-50 p-5">
                <div className="flex items-center gap-3">
                  <TrendingDown className="text-rose-600" size={25} />
                  <span className="font-bold text-rose-800">
                    Economic Recession
                  </span>
                </div>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  Lower demand → Lower production → Layoffs
                </p>
              </div>

              <div className="rounded-xl border border-blue-100 bg-blue-50 p-4">
                <p className="text-sm font-bold text-blue-900">
                  Key Economic Principle
                </p>
                <p className="mt-1 text-sm leading-7 text-blue-800">
                  Cyclical unemployment rises when the economy operates below
                  its productive potential and businesses need fewer workers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section id="meaning" className="px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <SectionHeading
            eyebrow="01 / Basic Understanding"
            title="What Is Cyclical Unemployment?"
            description="Understand why employment opportunities change as economic conditions move through periods of growth and decline."
          />

          <div className="rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-7 shadow-sm md:p-10">
            <p className="text-lg leading-9 text-slate-700">
              <strong className="text-slate-950">
                Cyclical unemployment
              </strong>{" "}
              is a type of unemployment caused by fluctuations in the
              economy. It occurs when overall demand for goods and services
              decreases, forcing businesses to reduce production, postpone
              expansion or lay off employees.
            </p>
            <p className="mt-5 text-base leading-8 text-slate-600">
              It is closely associated with the business cycle. During
              economic growth, businesses usually expand and hire more
              workers. During recessions, declining sales and investment can
              reduce the demand for labour.
            </p>

            <div className="mt-7 grid gap-4 sm:grid-cols-3">
              {[
                ["Economic Cause", "Declining aggregate demand"],
                ["Employment Effect", "Fewer job opportunities"],
                ["Economic Pattern", "Changes with business cycles"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-xl border border-blue-100 bg-white p-5"
                >
                  <p className="text-sm font-bold text-blue-700">{label}</p>
                  <p className="mt-2 font-bold text-slate-900">{value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 rounded-2xl border-l-4 border-blue-600 bg-slate-50 p-6">
            <div className="flex items-start gap-3">
              <Lightbulb className="mt-1 shrink-0 text-blue-600" size={23} />
              <div>
                <h3 className="font-bold text-slate-900">
                  Remember This
                </h3>
                <p className="mt-2 leading-8 text-slate-600">
                  Cyclical unemployment is primarily caused by a shortage of
                  jobs resulting from weak economic demand, rather than a
                  mismatch between workers' skills and available jobs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
<AdSlot />
      {/* HOW IT OCCURS */}
      <section className="bg-slate-50 px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="02 / Economic Mechanism"
            title="How Does Cyclical Unemployment Occur?"
            description="A decline in spending can spread throughout the economy and eventually affect employment across several industries."
          />

          <div className="grid gap-4 md:grid-cols-5">
            {[
              {
                n: "01",
                title: "Demand Falls",
                text: "Consumers and businesses spend less money.",
              },
              {
                n: "02",
                title: "Sales Decline",
                text: "Companies receive fewer orders and earn less revenue.",
              },
              {
                n: "03",
                title: "Production Falls",
                text: "Businesses reduce output and postpone expansion.",
              },
              {
                n: "04",
                title: "Hiring Slows",
                text: "Companies freeze recruitment and may lay off workers.",
              },
              {
                n: "05",
                title: "Unemployment Rises",
                text: "More people become unemployed because jobs are unavailable.",
              },
            ].map((step, index) => (
              <div key={step.n} className="relative">
                <div className="h-full rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <span className="text-3xl font-bold text-blue-200">
                    {step.n}
                  </span>
                  <h3 className="mt-4 font-bold text-slate-900">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {step.text}
                  </p>
                </div>
                {index !== 4 && (
                  <ArrowRight
                    className="absolute -right-4 top-1/2 z-10 hidden -translate-y-1/2 text-blue-500 md:block"
                    size={22}
                  />
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl bg-blue-950 p-7 text-white md:p-9">
            <p className="text-sm font-bold uppercase tracking-wider text-blue-300">
              The Multiplier Effect
            </p>
            <h3 className="mt-3 text-2xl font-bold">
              How One Industry Can Affect Another
            </h3>
            <p className="mt-4 leading-8 text-blue-100">
              When a factory reduces production, its employees may spend less
              on restaurants, shopping and transportation. These businesses
              can then experience lower sales and reduce their own workforce.
              This transmission of weaker demand can spread unemployment
              throughout the economy.
            </p>
          </div>
        </div>
      </section>

      {/* BUSINESS CYCLE */}
      <section id="business-cycle" className="px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="03 / Economic Cycle"
            title="Business Cycle And Cyclical Unemployment"
            description="The business cycle describes the recurring fluctuations in economic activity. Employment conditions change as the economy moves through its different phases."
          />

          <div className="mb-10 rounded-3xl border border-blue-100 bg-white p-5 shadow-lg shadow-blue-900/5 sm:p-8">
            <div className="mb-6 flex items-center justify-between gap-3">
              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  Four Phases Of The Business Cycle
                </h3>
                <p className="mt-1 text-sm text-slate-500">
                  A simplified illustration of economic fluctuations
                </p>
              </div>
              <Activity className="text-blue-600" size={28} />
            </div>

            <div className="overflow-x-auto">
              <svg
                viewBox="0 0 760 300"
                role="img"
                aria-label="Business cycle diagram showing expansion, peak, recession and recovery"
                className="w-full min-w-[560px]"
              >
                <defs>
                  <linearGradient id="cycleFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity=".22" />
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                  </linearGradient>
                </defs>

                <line
                  x1="50"
                  y1="235"
                  x2="725"
                  y2="235"
                  stroke="#cbd5e1"
                  strokeWidth="2"
                />
                <line
                  x1="50"
                  y1="30"
                  x2="50"
                  y2="235"
                  stroke="#cbd5e1"
                  strokeWidth="2"
                />

                {[75, 125, 175].map((y) => (
                  <line
                    key={y}
                    x1="50"
                    y1={y}
                    x2="725"
                    y2={y}
                    stroke="#e2e8f0"
                    strokeDasharray="5 6"
                  />
                ))}

                <path
                  d="M50 205 C120 190 155 75 250 55 S390 70 460 175 S570 240 650 130 S700 80 725 55 L725 235 L50 235 Z"
                  fill="url(#cycleFill)"
                />

                <path
                  d="M50 205 C120 190 155 75 250 55 S390 70 460 175 S570 240 650 130 S700 80 725 55"
                  fill="none"
                  stroke="#2563eb"
                  strokeWidth="5"
                  strokeLinecap="round"
                />

                <circle cx="160" cy="104" r="7" fill="#059669" />
                <circle cx="250" cy="55" r="7" fill="#2563eb" />
                <circle cx="490" cy="193" r="7" fill="#e11d48" />
                <circle cx="650" cy="130" r="7" fill="#7c3aed" />

                <g fill="#1e293b" fontSize="14" fontWeight="bold">
                  <text x="125" y="88">Expansion</text>
                  <text x="230" y="35">Peak</text>
                  <text x="450" y="220">Recession</text>
                  <text x="610" y="110">Recovery</text>
                </g>

                <g fill="#64748b" fontSize="12">
                  <text x="10" y="25">Output</text>
                  <text x="350" y="275">Time →</text>
                </g>
              </svg>
            </div>

            <p className="mt-4 text-center text-xs leading-6 text-slate-500">
              Conceptual diagram only. The curve illustrates the general
              pattern of economic fluctuations, not measured GDP data.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {businessCycle.map((item) => (
              <CycleCard key={item.phase} item={item} />
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-rose-200 bg-rose-50 p-6">
            <div className="flex items-start gap-3">
              <AlertTriangle className="mt-1 shrink-0 text-rose-600" />
              <div>
                <h3 className="font-bold text-rose-900">
                  When Is Cyclical Unemployment Highest?
                </h3>
                <p className="mt-2 leading-8 text-slate-700">
                  It generally rises during the recession phase because
                  businesses face weaker demand and reduce their requirement
                  for labour. It usually starts declining as economic
                  recovery strengthens.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CAUSES */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-slate-50 px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="04 / Root Causes"
            title="Major Causes Of Cyclical Unemployment"
            description="Several economic factors can weaken demand and reduce the number of workers businesses need."
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {causes.map((cause) => {
              const Icon = cause.icon;
              return (
                <div
                  key={cause.title}
                  className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="mb-5 inline-flex rounded-xl bg-blue-50 p-3 text-blue-700">
                    <Icon size={25} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">
                    {cause.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {cause.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
<AdSlot />
      {/* EXAMPLES */}
      <section className="px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="05 / Practical Understanding"
            title="Three Practical Examples Of Cyclical Unemployment"
            description="These industry-based examples show how a decline in economic activity can result in job losses."
          />

          <div className="space-y-6">
            {examples.map((example) => {
              const Icon = example.icon;
              return (
                <div
                  key={example.number}
                  className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
                >
                  <div className="flex flex-wrap items-center gap-4 border-b border-slate-100 bg-gradient-to-r from-blue-50 to-white p-6 md:px-8">
                    <div className="rounded-2xl bg-blue-700 p-4 text-white">
                      <Icon size={28} />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-bold text-blue-600">
                        EXAMPLE {example.number}
                      </p>
                      <h3 className="mt-1 text-xl font-bold text-slate-900">
                        {example.title}
                      </h3>
                    </div>
                  </div>

                  <div className="grid gap-6 p-6 md:grid-cols-3 md:p-8">
                    {[
                      ["Economic Situation", example.situation],
                      ["Employment Impact", example.impact],
                      ["What It Demonstrates", example.lesson],
                    ].map(([heading, content]) => (
                      <div key={heading}>
                        <h4 className="font-bold text-slate-900">
                          {heading}
                        </h4>
                        <p className="mt-3 text-sm leading-7 text-slate-600">
                          {content}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <p className="mt-6 text-sm leading-7 text-slate-500">
            These are illustrative economic scenarios rather than claims
            about specific companies or verified historical layoffs.
          </p>
        </div>
      </section>

      {/* FACTORS */}
      <section className="bg-slate-50 px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <SectionHeading
            eyebrow="06 / Influencing Conditions"
            title="Factors Affecting Cyclical Unemployment"
            description="The scale and duration of unemployment depend on how strongly economic activity changes and how businesses respond."
          />

          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            {[
              [
                "Severity of Recession",
                "A deeper economic contraction can lead to more widespread job losses.",
              ],
              [
                "Duration of Economic Slowdown",
                "A prolonged slowdown can keep unemployment elevated for longer.",
              ],
              [
                "Consumer Confidence",
                "When households feel uncertain, they may postpone purchases and reduce spending.",
              ],
              [
                "Business Confidence",
                "Uncertainty about future demand can discourage investment and recruitment.",
              ],
              [
                "Industry Dependence on Economic Conditions",
                "Industries selling non-essential products or relying on investment may be more sensitive to downturns.",
              ],
              [
                "Government Economic Policies",
                "Fiscal and monetary responses can influence demand, investment and the speed of recovery.",
              ],
            ].map(([title, description], index) => (
              <div
                key={title}
                className={`flex gap-4 p-6 ${
                  index !== 5 ? "border-b border-slate-100" : ""
                }`}
              >
                <CheckCircle2
                  className="mt-1 shrink-0 text-blue-600"
                  size={21}
                />
                <div>
                  <h3 className="font-bold text-slate-900">{title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMPACT */}
      <section className="px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="07 / Economic Consequences"
            title="Economic And Social Impacts Of Cyclical Unemployment"
            description="Cyclical unemployment affects more than individual workers. It can weaken demand, reduce output and create financial difficulties across society."
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {impacts.map((impact, index) => (
              <div
                key={impact.title}
                className="rounded-2xl border border-slate-200 bg-white p-6"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-rose-50 font-bold text-rose-600">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  {impact.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {impact.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section className="bg-gradient-to-br from-blue-950 via-slate-950 to-indigo-950 px-5 py-20 text-white sm:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="08 / Economic Solutions"
            title="Measures To Reduce Cyclical Unemployment"
            description="The main objective is to restore economic activity, improve aggregate demand and encourage businesses to retain or recruit workers."
         dark />

          <div className="grid gap-5 md:grid-cols-2">
            {policyMeasures.map((measure) => {
              const Icon = measure.icon;
              return (
                <div
                  key={measure.title}
                  className="rounded-2xl border border-white/10 bg-white/[0.06] p-6 transition hover:bg-white/[0.10]"
                >
                  <div className="flex items-start gap-4">
                    <div className="rounded-xl bg-blue-500/20 p-3 text-blue-300">
                      <Icon size={26} />
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-blue-300">
                        {measure.tag}
                      </span>
                      <h3 className="mt-2 text-xl font-bold">
                        {measure.title}
                      </h3>
                      <p className="mt-3 text-sm leading-8 text-slate-300">
                        {measure.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
<AdSlot />
      {/* GOVERNMENT AND RBI */}
      <section className="px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="09 / Indian Economic Policy"
            title="Role Of Government, RBI And Economic Policy"
            description="India's fiscal and monetary institutions influence economic activity through public expenditure, taxation, interest rates and financial conditions."
          />

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-blue-100 bg-blue-50/70 p-7 md:p-9">
              <div className="mb-5 inline-flex rounded-2xl bg-blue-700 p-4 text-white">
                <Landmark size={30} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">
                Government Of India
              </h3>
              <p className="mt-4 leading-8 text-slate-600">
                The central government can use fiscal policy to support
                economic demand during a slowdown.
              </p>
              <ul className="mt-6 space-y-4">
                {[
                  "Increase suitable public infrastructure expenditure.",
                  "Provide targeted tax relief where appropriate.",
                  "Support employment-generation programmes.",
                  "Improve access to credit and assistance for viable businesses.",
                  "Strengthen household purchasing power through targeted support.",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-7 text-slate-700">
                    <CheckCircle2 className="mt-1 shrink-0 text-blue-600" size={18} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-indigo-100 bg-indigo-50/70 p-7 md:p-9">
              <div className="mb-5 inline-flex rounded-2xl bg-indigo-700 p-4 text-white">
                <Banknote size={30} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">
                Reserve Bank Of India (RBI)
              </h3>
              <p className="mt-4 leading-8 text-slate-600">
                The RBI influences monetary and financial conditions in India.
                Depending on inflation and other economic conditions, it can
                support demand through monetary policy.
              </p>
              <ul className="mt-6 space-y-4">
                {[
                  "Adjust the policy repo rate.",
                  "Use liquidity management operations.",
                  "Influence the cost and availability of credit.",
                  "Support financial stability.",
                  "Maintain price stability while considering growth.",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-7 text-slate-700">
                    <CheckCircle2 className="mt-1 shrink-0 text-indigo-600" size={18} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

         <div className="mt-8 rounded-3xl border border-blue-100 bg-white p-7 shadow-sm md:p-9">
  <h3 className="text-xl font-bold text-slate-900">
    How Fiscal And Monetary Policies Help
  </h3>

  <div className="mt-6 grid gap-5 md:grid-cols-2">
    <div className="rounded-2xl bg-blue-50 p-5">
      <h4 className="font-bold text-blue-900">
        <a
          href="https://www.pricetag.co.in/economics/fiscal-policy"
          className="transition-colors hover:text-blue-600 hover:underline"
        >
          Fiscal Policy <span aria-hidden="true">→</span>
        </a>
      </h4>
      <p className="mt-3 text-sm leading-7 text-slate-600">
        Higher government spending can directly increase demand
        through public projects and indirectly support private
        businesses and household incomes.
      </p>
    </div>

    <div className="rounded-2xl bg-indigo-50 p-5">
      <h4 className="font-bold text-indigo-900">
        <a
          href="https://www.pricetag.co.in/economics/monetary-policy"
          className="transition-colors hover:text-indigo-600 hover:underline"
        >
          Monetary Policy <span aria-hidden="true">→</span>
        </a>
      </h4>
      <p className="mt-3 text-sm leading-7 text-slate-600">
        Lower policy rates, when appropriate, can reduce borrowing
        costs and encourage consumption and investment. The impact
        depends on credit demand and the transmission of policy
        rates through the financial system.
      </p>
    </div>
  </div>

  <p className="mt-6 text-sm leading-7 text-slate-500">
    Important: Policymakers cannot focus on employment alone.
    Fiscal and monetary measures must also consider inflation,
    financial stability, public finances and external economic
    conditions.
  </p>
</div>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="bg-slate-50 px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="10 / Types Of Unemployment"
            title="Cyclical Vs Structural Vs Frictional Unemployment"
            description="All three describe unemployment, but the reasons people cannot find work are different."
          />

          <div className="overflow-x-auto rounded-3xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full min-w-[720px] border-collapse text-left text-sm">
              <thead>
                <tr className="bg-blue-950 text-white">
                  <th className="p-5 font-bold">Comparison</th>
                  <th className="p-5 font-bold">Cyclical</th>
                  <th className="p-5 font-bold">Structural</th>
                  <th className="p-5 font-bold">Frictional</th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    "Main Cause",
                    "Economic downturn",
                    "Skills or job mismatch",
                    "Time spent changing jobs",
                  ],
                  [
                    "Economic Connection",
                    "Business cycle",
                    "Changes in the economy and labour market",
                    "Normal job transitions",
                  ],
                  [
                    "Typical Situation",
                    "Companies reduce employment during recession",
                    "A worker's skills do not match available jobs",
                    "A person leaves one job to find another",
                  ],
                  [
                    "Common Solution",
                    "Restore economic demand",
                    "Reskilling and job matching",
                    "Better job information and recruitment",
                  ],
                  [
                    "Pattern",
                    "Rises during recessions",
                    "Can persist even during growth",
                    "Occurs even in a healthy economy",
                  ],
                ].map((row, index) => (
                  <tr
                    key={row[0]}
                    className={index % 2 === 0 ? "bg-slate-50" : "bg-white"}
                  >
                    {row.map((cell, cellIndex) => (
                      <td
                        key={cell}
                        className={`border-b border-slate-100 p-5 leading-7 ${
                          cellIndex === 0
                            ? "font-bold text-slate-900"
                            : "text-slate-600"
                        }`}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-rose-200 bg-rose-50 p-5">
              <TrendingDown className="mb-3 text-rose-600" size={25} />
              <h3 className="font-bold text-rose-900">Cyclical</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Not enough overall demand to sustain employment.
              </p>
            </div>
            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
              <GraduationCap className="mb-3 text-amber-600" size={25} />
              <h3 className="font-bold text-amber-900">Structural</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Available workers and job requirements do not match.
              </p>
            </div>
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
              <Clock className="mb-3 text-emerald-600" size={25} />
              <h3 className="font-bold text-emerald-900">Frictional</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                People are temporarily between jobs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FORMULA AND KEY TAKEAWAYS */}
      <section className="px-5 py-20 sm:px-8">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-7 md:p-9">
            <div className="mb-5 inline-flex rounded-xl bg-blue-700 p-3 text-white">
              <BarChart3 size={26} />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">
              Understanding The Cyclical Unemployment Gap
            </h2>
            <p className="mt-4 leading-8 text-slate-600">
              Economists sometimes examine cyclical unemployment by comparing
              the actual unemployment rate with an estimated natural rate of
              unemployment.
            </p>

            <div className="my-6 rounded-2xl bg-white p-6 text-center shadow-sm">
              <p className="text-sm font-bold text-blue-700">
                Illustrative Relationship
              </p>
              <p className="mt-4 text-xl font-bold text-slate-900">
                Cyclical Unemployment Component
              </p>
              <div className="my-4 h-px bg-blue-100" />
              <p className="text-lg font-bold text-blue-800">
                Actual Unemployment Rate
              </p>
              <p className="my-2 text-slate-400">minus</p>
              <p className="text-lg font-bold text-indigo-800">
                Natural Rate Of Unemployment
              </p>
            </div>

            <p className="text-sm leading-7 text-slate-600">
              A positive difference suggests unemployment is above its
              estimated natural rate. This is a useful simplified indicator,
              not a direct measurement of every unemployed worker's reason
              for being unemployed.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:p-9">
            <div className="mb-5 inline-flex rounded-xl bg-emerald-50 p-3 text-emerald-700">
              <Target size={26} />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">
              Key Takeaways
            </h2>

            <ul className="mt-7 space-y-5">
              {[
                "Cyclical unemployment is caused by fluctuations in overall economic activity.",
                "It generally rises during recessions and falls during recoveries.",
                "Weak consumer demand and lower business investment are important causes.",
                "Job losses can spread across industries through reduced spending.",
                "Fiscal and monetary policies can help restore aggregate demand.",
                "It differs from structural and frictional unemployment.",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-7 text-slate-600">
                  <CheckCircle2
                    className="mt-1 shrink-0 text-emerald-600"
                    size={19}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
<AdSlot />
      {/* FAQ */}
      <section className="bg-slate-50 px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-4xl">
          <SectionHeading
            eyebrow="11 / Common Questions"
            title="Frequently Asked Questions"
            description="Quick answers to common questions about cyclical unemployment."
          />

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-slate-200 bg-white p-6 open:border-blue-200 open:shadow-sm"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-slate-900">
                  <span className="flex items-start gap-3">
                    <HelpCircle
                      size={21}
                      className="mt-0.5 shrink-0 text-blue-600"
                    />
                    {faq.question}
                  </span>
                  <span className="text-xl text-blue-600 transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-5 border-t border-slate-100 pt-4 text-sm leading-8 text-slate-600">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

     

      {/* FOOTER CTA */}
      <section className="bg-gradient-to-r from-blue-700 to-indigo-800 px-5 py-16 text-center text-white sm:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">
            Understand How The Economy Works
          </h2>
          <p className="mt-4 leading-8 text-blue-100">
            Explore more practical explanations of economics, business,
            technology and the forces that shape everyday decisions.
          </p>
          <Link
            href="/economics"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3 font-bold text-blue-800 transition hover:bg-blue-50"
          >
            Explore Economics
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
