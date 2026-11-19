
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Building2,
  CheckCircle2,
  CircleAlert,
  Compass,
  Lightbulb,
  Search,
  ShieldCheck,
  ShieldAlert,
  Target,
  TrendingDown,
  TrendingUp,
  Users,
  Wallet,
  Globe,
  ShoppingCart,
  ClipboardCheck,
  GitBranch,
  Scale,
  Sparkles,
} from "lucide-react";
import AdSlot from "../../../components/AdSlot";

export const metadata = {
  title: "SWOT Analysis: Meaning, Examples, Process & Importance | PriceTag HUB",
  description:
    "Learn what SWOT analysis is, its four components, internal and external factors, how to conduct a SWOT analysis, practical examples, and TOWS strategies.",
};

function SectionHeading({ eyebrow, title, description, center = true }) {
  return (
    <div className={`${center ? "mx-auto text-center" : ""} mb-10 max-w-3xl`}>
      {eyebrow && (
        <p className="mb-3 text-sm font-bold uppercase tracking-wider text-blue-700">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}

function IconBox({ icon: Icon, className = "" }) {
  return (
    <div
      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-white to-blue-100 text-blue-700 shadow-sm ring-1 ring-blue-100 ${className}`}
    >
      <Icon className="h-6 w-6" />
    </div>
  );
}

const swotItems = [
  {
    letter: "S",
    title: "Strengths",
    subtitle: "Internal · Positive",
    description: "What the organization does well.",
    example: "Strong brand reputation",
    icon: TrendingUp,
    color: "emerald",
  },
  {
    letter: "W",
    title: "Weaknesses",
    subtitle: "Internal · Negative",
    description: "What the organization needs to improve.",
    example: "Limited financial resources",
    icon: TrendingDown,
    color: "rose",
  },
  {
    letter: "O",
    title: "Opportunities",
    subtitle: "External · Positive",
    description: "What external developments can be used.",
    example: "Growing online demand",
    icon: Globe,
    color: "blue",
  },
  {
    letter: "T",
    title: "Threats",
    subtitle: "External · Negative",
    description: "What external factors may create risks.",
    example: "Increasing competition",
    icon: ShieldAlert,
    color: "amber",
  },
];

const colorStyles = {
  emerald: {
    panel: "border-emerald-200 bg-gradient-to-br from-emerald-50 to-white",
    icon: "bg-emerald-100 text-emerald-700",
    letter: "text-emerald-700",
    label: "text-emerald-800",
  },
  rose: {
    panel: "border-rose-200 bg-gradient-to-br from-rose-50 to-white",
    icon: "bg-rose-100 text-rose-700",
    letter: "text-rose-700",
    label: "text-rose-800",
  },
  blue: {
    panel: "border-blue-200 bg-gradient-to-br from-blue-50 to-white",
    icon: "bg-blue-100 text-blue-700",
    letter: "text-blue-700",
    label: "text-blue-800",
  },
  amber: {
    panel: "border-amber-200 bg-gradient-to-br from-amber-50 to-white",
    icon: "bg-amber-100 text-amber-700",
    letter: "text-amber-700",
    label: "text-amber-800",
  },
};

function SwotHeroDiagram() {
  return (
    <div className="rounded-3xl border border-blue-100 bg-gradient-to-br from-white via-blue-50 to-indigo-100 p-4 shadow-xl shadow-blue-900/5 sm:p-6">
      <div className="mb-5 flex items-center justify-between gap-3">
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-blue-700">
            Visual Learning Guide
          </p>
          <h2 className="mt-1 text-lg font-bold text-slate-900">
            The Four Elements of SWOT
          </h2>
        </div>
        <div className="rounded-xl bg-white p-3 text-blue-700 shadow-sm">
          <Compass className="h-6 w-6" />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {swotItems.map((item) => {
          const Icon = item.icon;
          const style = colorStyles[item.color];

          return (
            <div
              key={item.letter}
              className={`rounded-2xl border p-4 sm:p-5 ${style.panel}`}
            >
              <div className="flex items-center justify-between gap-2">
                <span className={`text-3xl font-bold ${style.letter}`}>
                  {item.letter}
                </span>
                <div
                  className={`flex h-9 w-9 items-center justify-center rounded-xl ${style.icon}`}
                >
                  <Icon className="h-5 w-5" />
                </div>
              </div>
              <h3 className="mt-3 text-sm font-bold text-slate-900 sm:text-base">
                {item.title}
              </h3>
              <p className={`mt-1 text-[10px] font-bold uppercase tracking-wide sm:text-xs ${style.label}`}>
                {item.subtitle}
              </p>
              <p className="mt-3 text-xs leading-5 text-slate-600 sm:text-sm">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>

      <div className="mt-4 rounded-2xl border border-blue-200 bg-white p-4 text-center shadow-sm">
        <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-md">
          <Building2 className="h-6 w-6" />
        </div>
        <h3 className="mt-3 font-bold text-slate-900">
          Understand the Business Position
        </h3>
        <p className="mt-1 text-xs leading-5 text-slate-600 sm:text-sm">
          Combine all four elements to identify strategic priorities and make
          better decisions.
        </p>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2 text-center">
        <div className="rounded-xl bg-blue-100 p-2.5 text-xs font-bold text-blue-900">
          Internal Factors: S + W
        </div>
        <div className="rounded-xl bg-indigo-100 p-2.5 text-xs font-bold text-indigo-900">
          External Factors: O + T
        </div>
      </div>
    </div>
  );
}

function SwotMatrix() {
  return (
    <div className="rounded-3xl border border-blue-100 bg-gradient-to-br from-white to-blue-50 p-5 shadow-sm sm:p-7">
      <div className="mb-6 text-center">
        <p className="text-xs font-bold uppercase tracking-wider text-blue-700">
          SWOT Framework
        </p>
        <h3 className="mt-2 text-xl font-bold text-slate-900">
          Internal vs External Factors
        </h3>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-2xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-white p-4 sm:p-5">
          <p className="text-2xl font-bold text-emerald-700">S</p>
          <h4 className="mt-2 font-bold text-slate-900">Strengths</h4>
          <p className="mt-2 text-xs leading-5 text-slate-600">
            Internal advantages
          </p>
          <p className="mt-3 rounded-lg bg-white p-2 text-xs font-bold text-emerald-800">
            Positive
          </p>
        </div>

        <div className="rounded-2xl border border-rose-200 bg-gradient-to-br from-rose-50 to-white p-4 sm:p-5">
          <p className="text-2xl font-bold text-rose-700">W</p>
          <h4 className="mt-2 font-bold text-slate-900">Weaknesses</h4>
          <p className="mt-2 text-xs leading-5 text-slate-600">
            Internal limitations
          </p>
          <p className="mt-3 rounded-lg bg-white p-2 text-xs font-bold text-rose-800">
            Negative
          </p>
        </div>

        <div className="rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50 to-white p-4 sm:p-5">
          <p className="text-2xl font-bold text-blue-700">O</p>
          <h4 className="mt-2 font-bold text-slate-900">Opportunities</h4>
          <p className="mt-2 text-xs leading-5 text-slate-600">
            External possibilities
          </p>
          <p className="mt-3 rounded-lg bg-white p-2 text-xs font-bold text-blue-800">
            Positive
          </p>
        </div>

        <div className="rounded-2xl border border-amber-200 bg-gradient-to-br from-amber-50 to-white p-4 sm:p-5">
          <p className="text-2xl font-bold text-amber-700">T</p>
          <h4 className="mt-2 font-bold text-slate-900">Threats</h4>
          <p className="mt-2 text-xs leading-5 text-slate-600">
            External risks
          </p>
          <p className="mt-3 rounded-lg bg-white p-2 text-xs font-bold text-amber-800">
            Negative
          </p>
        </div>
      </div>

      <div className="mt-4 rounded-xl border border-blue-100 bg-white p-3 text-center">
        <p className="text-sm font-bold text-blue-900">
          Internal = Within the organization
        </p>
        <p className="mt-1 text-sm font-bold text-indigo-900">
          External = Outside the organization
        </p>
      </div>
    </div>
  );
}

function TowsStrategyDiagram() {
  const strategies = [
    {
      code: "SO",
      title: "Strengths + Opportunities",
      description:
        "Use existing strengths to take advantage of external opportunities.",
      example:
        "Use a strong brand reputation to launch products in a growing online market.",
      icon: TrendingUp,
    },
    {
      code: "WO",
      title: "Weaknesses + Opportunities",
      description:
        "Improve internal weaknesses so the organization can benefit from opportunities.",
      example:
        "Train employees in digital marketing to benefit from increasing online demand.",
      icon: Lightbulb,
    },
    {
      code: "ST",
      title: "Strengths + Threats",
      description:
        "Use internal strengths to reduce the impact of external threats.",
      example:
        "Use customer loyalty and product quality to compete with new market entrants.",
      icon: ShieldCheck,
    },
    {
      code: "WT",
      title: "Weaknesses + Threats",
      description:
        "Minimize weaknesses and avoid activities that expose the organization to external risks.",
      example:
        "Reduce unnecessary costs and improve cash flow when facing strong competition.",
      icon: ShieldAlert,
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2">
      {strategies.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.code}
            className="rounded-2xl border border-blue-100 bg-gradient-to-br from-white to-blue-50 p-5"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-lg font-bold text-blue-800">
                {item.code}
              </div>
              <div>
                <h3 className="font-bold text-slate-900">{item.title}</h3>
                <p className="mt-1 text-xs font-bold text-blue-700">
                  TOWS STRATEGY
                </p>
              </div>
              <Icon className="ml-auto h-6 w-6 shrink-0 text-blue-600" />
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-600">
              {item.description}
            </p>
            <div className="mt-4 rounded-xl border border-blue-100 bg-white p-3">
              <p className="text-xs font-bold uppercase tracking-wide text-blue-700">
                Example
              </p>
              <p className="mt-1 text-sm leading-6 text-slate-700">
                {item.example}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function PracticalExample() {
  const examples = [
    {
      letter: "S",
      title: "Strength",
      text: "The shop has loyal customers and a good reputation.",
      style: "border-emerald-200 bg-emerald-50 text-emerald-800",
    },
    {
      letter: "W",
      title: "Weakness",
      text: "It has limited delivery coverage and no online store.",
      style: "border-rose-200 bg-rose-50 text-rose-800",
    },
    {
      letter: "O",
      title: "Opportunity",
      text: "More local customers are purchasing products online.",
      style: "border-blue-200 bg-blue-50 text-blue-800",
    },
    {
      letter: "T",
      title: "Threat",
      text: "Large e-commerce platforms are attracting local customers.",
      style: "border-amber-200 bg-amber-50 text-amber-800",
    },
  ];

  return (
    <div className="overflow-hidden rounded-3xl border border-blue-100 bg-gradient-to-br from-white to-blue-50 shadow-sm">
      <div className="border-b border-blue-100 bg-gradient-to-r from-blue-100 via-white to-indigo-100 p-6 sm:p-8">
        <div className="flex items-center gap-3">
          <IconBox icon={ShoppingCart} />
          <p className="text-sm font-bold uppercase tracking-wider text-blue-800">
            Worked Business Example
          </p>
        </div>
        <h3 className="mt-5 text-2xl font-bold text-slate-900">
          SWOT Analysis of a Local Clothing Store
        </h3>
        <p className="mt-3 max-w-2xl leading-7 text-slate-600">
          Imagine a traditional clothing shop that has been operating
          successfully in its local market but is now facing increasing online
          competition.
        </p>
      </div>

      <div className="grid gap-3 p-5 sm:grid-cols-2 sm:p-7">
        {examples.map((item) => (
          <div
            key={item.letter}
            className={`rounded-2xl border p-5 ${item.style}`}
          >
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-lg font-bold">
                {item.letter}
              </span>
              <h4 className="font-bold">{item.title}</h4>
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-700">
              {item.text}
            </p>
          </div>
        ))}
      </div>

      <div className="mx-5 mb-5 rounded-2xl border border-blue-200 bg-white p-5 sm:mx-7 sm:mb-7">
        <div className="flex items-center gap-3">
          <Target className="h-6 w-6 text-blue-700" />
          <h4 className="font-bold text-slate-900">
            What Should the Store Do?
          </h4>
        </div>
        <p className="mt-3 text-sm leading-7 text-slate-600">
          The store can use its local reputation and loyal customer base to
          launch an online ordering service. It can improve delivery coverage
          and use social media to reach more customers. This approach uses
          strengths and opportunities while addressing weaknesses and
          responding to competition.
        </p>
      </div>
    </div>
  );
}

const steps = [
  {
    title: "Define the objective",
    description:
      "Decide what the analysis is intended to support, such as business expansion, a new product, or improving performance.",
    icon: Target,
  },
  {
    title: "Identify internal strengths",
    description:
      "Examine resources, capabilities, employees, reputation, finances, technology, and other internal advantages.",
    icon: TrendingUp,
  },
  {
    title: "Identify internal weaknesses",
    description:
      "Find limitations such as skill gaps, high costs, outdated technology, poor processes, or limited resources.",
    icon: Search,
  },
  {
    title: "Examine external opportunities",
    description:
      "Study market trends, changing customer needs, new technologies, regulations, and potential growth areas.",
    icon: Globe,
  },
  {
    title: "Identify external threats",
    description:
      "Consider competition, economic uncertainty, changing regulations, new substitutes, and other external risks.",
    icon: ShieldAlert,
  },
  {
    title: "Prioritize and develop strategies",
    description:
      "Evaluate the most important findings, connect the four factors, and convert them into practical actions.",
    icon: ClipboardCheck,
  },
];

export default function SwotAnalysisPage() {
  return (
    <main className="overflow-hidden bg-white text-slate-800">
      {/* HERO */}
      <section className="px-4 pb-10 pt-6 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-blue-100 bg-gradient-to-br from-white via-blue-50 to-blue-100 shadow-sm">
          <div className="absolute -right-20 -top-24 h-80 w-80 rounded-full bg-blue-200/40 blur-3xl" />
          <div className="absolute -bottom-24 left-1/4 h-64 w-64 rounded-full bg-indigo-200/30 blur-3xl" />

          <div className="relative grid items-center gap-10 px-6 py-12 sm:px-10 sm:py-16 lg:grid-cols-2 lg:gap-12 lg:px-14 lg:py-20">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-sm font-bold text-blue-800 shadow-sm">
                <Compass className="h-4 w-4" />
                STRATEGIC MANAGEMENT
              </div>

              <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                What Is SWOT Analysis?
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                SWOT analysis is a strategic planning tool used to identify an
                organization's internal strengths and weaknesses, along with
                external opportunities and threats.
              </p>

              <p className="mt-4 max-w-xl leading-7 text-slate-600">
                Learn how these four elements work together to help businesses
                understand their position, evaluate challenges, and make
                informed decisions.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  "Four SWOT Elements",
                  "Internal & External Factors",
                  "Practical Business Examples",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-blue-100 bg-white/80 px-3 py-3 text-xs font-bold text-blue-900 shadow-sm sm:text-sm"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <SwotHeroDiagram />
          </div>
        </div>
      </section>

      {/* MEANING */}
      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:py-20">
        <SectionHeading
          eyebrow="Understand the concept"
          title="Meaning of SWOT Analysis"
          description="SWOT analysis provides a structured way to examine the factors that influence an organization's current position and future possibilities."
        />

        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="space-y-5 leading-8 text-slate-600">
            <p>
              Every organization has certain advantages and limitations.
              At the same time, it operates in an external environment that
              creates both opportunities and risks.
            </p>
            <p>
              SWOT analysis brings these four areas together. It helps
              managers understand what the organization does well, where it
              needs improvement, which external developments it can benefit
              from, and what external challenges it should prepare for.
            </p>
            <p>
              The findings can support decisions such as entering a new
              market, launching a product, improving operations, or responding
              to competition.
            </p>
          </div>

          <div className="rounded-3xl border border-blue-100 bg-gradient-to-br from-white via-blue-50 to-indigo-100 p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <IconBox icon={Lightbulb} />
              <h3 className="text-xl font-bold text-slate-900">
                What Does SWOT Stand For?
              </h3>
            </div>
            <div className="mt-6 space-y-3">
              {swotItems.map((item) => {
                const style = colorStyles[item.color];

                return (
                  <div
                    key={item.letter}
                    className={`flex items-center gap-4 rounded-2xl border bg-white p-4 ${style.panel}`}
                  >
                    <span className={`text-3xl font-bold ${style.letter}`}>
                      {item.letter}
                    </span>
                    <div>
                      <h4 className="font-bold text-slate-900">
                        {item.title}
                      </h4>
                      <p className="mt-1 text-sm text-slate-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
<AdSlot />
      {/* FOUR COMPONENTS */}
      <section className="px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-blue-100 bg-gradient-to-br from-white via-blue-50 to-blue-100 px-5 py-12 sm:px-9 lg:px-12 lg:py-16">
          <SectionHeading
            eyebrow="The four components"
            title="Four Elements of SWOT Analysis"
            description="Each element examines a different part of the organization's situation. Understanding the difference between internal and external factors is especially important."
          />

          <div className="grid gap-5 md:grid-cols-2">
            {swotItems.map((item) => {
              const Icon = item.icon;
              const style = colorStyles[item.color];

              return (
                <div
                  key={item.letter}
                  className={`rounded-3xl border p-6 shadow-sm ${style.panel}`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-2xl ${style.icon}`}
                    >
                      <Icon className="h-7 w-7" />
                    </div>
                    <div>
                      <p className={`text-xs font-bold ${style.label}`}>
                        {item.subtitle}
                      </p>
                      <h3 className="mt-1 text-xl font-bold text-slate-900">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                  <p className="mt-5 leading-7 text-slate-700">
                    {item.description}
                  </p>
                  <div className="mt-5 rounded-xl border border-white bg-white/80 p-4">
                    <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
                      Example
                    </p>
                    <p className="mt-2 text-sm font-bold text-slate-800">
                      {item.example}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* INTERNAL VS EXTERNAL */}
      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:py-20">
        <SectionHeading
          eyebrow="An important distinction"
          title="Internal vs External Factors in SWOT"
          description="One of the most important things to understand is whether a factor comes from within the organization or from the environment around it."
        />

        <div className="grid items-center gap-8 lg:grid-cols-2">
          <SwotMatrix />

          <div className="space-y-5">
            <div className="rounded-2xl border border-blue-100 bg-gradient-to-br from-white to-blue-50 p-5">
              <div className="flex items-center gap-3">
                <Building2 className="h-6 w-6 text-blue-700" />
                <h3 className="font-bold text-slate-900">
                  Internal Factors: Strengths and Weaknesses
                </h3>
              </div>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                These factors exist within the organization and are generally
                influenced by its resources, capabilities, decisions, and
                management.
              </p>
              <p className="mt-3 text-sm font-bold text-blue-800">
                Examples: employee skills, brand reputation, financial
                resources, production capacity, and technology.
              </p>
            </div>

            <div className="rounded-2xl border border-indigo-100 bg-gradient-to-br from-white to-indigo-50 p-5">
              <div className="flex items-center gap-3">
                <Globe className="h-6 w-6 text-indigo-700" />
                <h3 className="font-bold text-slate-900">
                  External Factors: Opportunities and Threats
                </h3>
              </div>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                These factors arise outside the organization. A business
                cannot directly control them, but it can respond to them.
              </p>
              <p className="mt-3 text-sm font-bold text-indigo-800">
                Examples: market demand, competitors, economic conditions,
                government policies, and technological developments.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-2xl border border-blue-200 bg-gradient-to-r from-blue-100 via-white to-indigo-100 p-5">
          <p className="font-bold text-blue-900">
            Remember this simple rule
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700">
            Strengths and weaknesses are about the organization itself.
            Opportunities and threats are about what is happening in the
            external environment.
          </p>
        </div>
      </section>
<AdSlot />
      {/* HOW TO CONDUCT */}
      <section className="px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-blue-100 bg-gradient-to-br from-white via-blue-50 to-blue-100 px-5 py-12 sm:px-9 lg:px-12 lg:py-16">
          <SectionHeading
            eyebrow="Practical application"
            title="How to Conduct a SWOT Analysis"
            description="A useful SWOT analysis requires more than filling four boxes. It involves collecting relevant information, evaluating factors, and turning findings into decisions."
          />

          <div className="mx-auto max-w-4xl">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div key={step.title} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-blue-100 bg-white text-blue-700 shadow-sm">
                      <Icon className="h-6 w-6" />
                    </div>
                    {index !== steps.length - 1 && (
                      <div className="my-2 min-h-8 w-0.5 flex-1 bg-blue-200" />
                    )}
                  </div>

                  <div className="mb-6 flex-1 rounded-2xl border border-blue-100 bg-white p-5 shadow-sm">
                    <p className="text-xs font-bold uppercase tracking-wider text-blue-700">
                      STEP {index + 1}
                    </p>
                    <h3 className="mt-1 font-bold text-slate-900">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PRACTICAL EXAMPLE */}
      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:py-20">
        <SectionHeading
          eyebrow="See it in action"
          title="SWOT Analysis Example of a Local Clothing Store"
          description="Consider how a small clothing business can use SWOT analysis to understand its market position and decide what to do next."
        />
        <PracticalExample />
      </section>

      {/* FROM ANALYSIS TO STRATEGY */}
      <section className="px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-blue-100 bg-gradient-to-br from-white via-blue-50 to-indigo-100 px-5 py-12 sm:px-9 lg:px-12 lg:py-16">
          <SectionHeading
            eyebrow="Beyond identification"
            title="How to Convert SWOT Findings into Strategies"
            description="A SWOT analysis becomes more useful when its findings are connected to create practical strategic actions. The TOWS framework helps make these connections."
          />

          <div className="mb-8 rounded-2xl border border-blue-100 bg-white p-5">
            <div className="flex flex-wrap items-center justify-center gap-3 text-center">
              <div className="rounded-xl bg-emerald-100 px-4 py-3 font-bold text-emerald-800">
                Strengths
              </div>
              <span className="text-xl font-bold text-blue-700">+</span>
              <div className="rounded-xl bg-blue-100 px-4 py-3 font-bold text-blue-800">
                Opportunities
              </div>
              <ArrowRight className="h-5 w-5 text-blue-600" />
              <div className="rounded-xl bg-indigo-100 px-4 py-3 font-bold text-indigo-800">
                Strategy
              </div>
            </div>
            <p className="mt-4 text-center text-sm leading-6 text-slate-600">
              Combining SWOT factors helps managers move from understanding
              the situation to deciding what action to take.
            </p>
          </div>

          <TowsStrategyDiagram />
        </div>
      </section>
<AdSlot />
      {/* IMPORTANCE */}
      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:py-20">
        <SectionHeading
          eyebrow="Business value"
          title="Importance of SWOT Analysis"
          description="SWOT analysis helps organizations make decisions with a clearer understanding of their internal position and external environment."
        />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Supports Strategic Planning",
              description:
                "Provides useful information when setting objectives and choosing strategies.",
              icon: Compass,
            },
            {
              title: "Identifies Competitive Advantages",
              description:
                "Highlights capabilities and resources that can help a business compete.",
              icon: TrendingUp,
            },
            {
              title: "Highlights Areas for Improvement",
              description:
                "Makes internal limitations visible so management can address them.",
              icon: Search,
            },
            {
              title: "Improves Risk Awareness",
              description:
                "Helps identify external threats before they create serious business problems.",
              icon: ShieldAlert,
            },
            {
              title: "Encourages Better Decisions",
              description:
                "Brings different business factors together for more informed decision-making.",
              icon: Scale,
            },
            {
              title: "Helps Identify Growth Opportunities",
              description:
                "Encourages businesses to examine market changes and possible new directions.",
              icon: Sparkles,
            },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-2xl border border-blue-100 bg-gradient-to-br from-white to-blue-50 p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <IconBox icon={Icon} />
                <h3 className="mt-5 font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ADVANTAGES AND LIMITATIONS */}
      <section className="px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-blue-100 bg-gradient-to-br from-white via-blue-50 to-blue-100 px-5 py-12 sm:px-9 lg:px-12 lg:py-16">
          <SectionHeading
            eyebrow="Balanced understanding"
            title="Advantages and Limitations of SWOT Analysis"
            description="SWOT analysis is useful for organizing information, but it should not be treated as a complete solution to every strategic decision."
          />

          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-3xl border border-blue-100 bg-white p-6 shadow-sm sm:p-8">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-7 w-7 text-blue-700" />
                <h3 className="text-xl font-bold text-slate-900">
                  Advantages
                </h3>
              </div>
              <ul className="mt-6 space-y-4">
                {[
                  "Simple and relatively easy to understand.",
                  "Organizes internal and external information in one framework.",
                  "Can be applied to businesses, projects, and individuals.",
                  "Encourages discussion and different perspectives.",
                  "Helps identify possible strategic priorities.",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm leading-6 text-slate-600"
                  >
                    <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-blue-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-blue-100 bg-white p-6 shadow-sm sm:p-8">
              <div className="flex items-center gap-3">
                <CircleAlert className="h-7 w-7 text-indigo-700" />
                <h3 className="text-xl font-bold text-slate-900">
                  Limitations
                </h3>
              </div>
              <ul className="mt-6 space-y-4">
                {[
                  "Findings can be subjective and influenced by personal opinions.",
                  "It does not automatically rank factors by importance.",
                  "It provides a snapshot and may become outdated as conditions change.",
                  "It does not itself provide a detailed implementation plan.",
                  "Poor or incomplete information can produce misleading conclusions.",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm leading-6 text-slate-600"
                  >
                    <CircleAlert className="mt-1 h-4 w-4 shrink-0 text-indigo-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-blue-200 bg-gradient-to-r from-blue-100 to-white p-5">
            <p className="font-bold text-blue-900">
              Important point
            </p>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              SWOT analysis is a starting point for strategic thinking. Its
              usefulness depends on accurate information, realistic
              evaluation, prioritization, and follow-up action.
            </p>
          </div>
        </div>
      </section>

      {/* SWOT VS PESTEL */}
      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:py-20">
        <SectionHeading
          eyebrow="Related strategic tools"
          title="SWOT Analysis vs PESTEL Analysis"
          description="Both tools support strategic planning, but they examine different aspects of the business environment."
        />

        <div className="overflow-hidden rounded-3xl border border-blue-100 bg-gradient-to-br from-white to-blue-50 shadow-sm">
          <div className="grid grid-cols-3 bg-gradient-to-r from-blue-700 to-indigo-700 text-white">
            <div className="p-4 text-sm font-bold">Basis</div>
            <div className="p-4 text-sm font-bold">SWOT Analysis</div>
            <div className="p-4 text-sm font-bold">PESTEL Analysis</div>
          </div>

          {[
            [
              "Main focus",
              "Internal and external factors",
              "External macro-environment",
            ],
            [
              "Areas examined",
              "Strengths, weaknesses, opportunities, threats",
              "Political, economic, social, technological, environmental, legal",
            ],
            [
              "Purpose",
              "Understand overall strategic position",
              "Understand external environmental influences",
            ],
            [
              "Internal factors",
              "Included",
              "Not directly examined",
            ],
            [
              "Typical use",
              "Strategy development and evaluation",
              "External environment analysis",
            ],
          ].map((row, index) => (
            <div
              key={row[0]}
              className={`grid grid-cols-3 ${
                index % 2 === 0 ? "bg-white" : "bg-blue-50/70"
              }`}
            >
              {row.map((cell, cellIndex) => (
                <div
                  key={cell}
                  className={`border-t border-blue-100 p-4 text-sm leading-6 ${
                    cellIndex === 0
                      ? "font-bold text-slate-900"
                      : "text-slate-600"
                  }`}
                >
                  {cell}
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="mt-5 rounded-2xl border border-blue-100 bg-gradient-to-r from-white to-blue-50 p-5">
          <p className="text-sm leading-7 text-slate-600">
            PESTEL analysis can help identify external opportunities and
            threats that may later be included in a SWOT analysis.
          </p>
          <Link
            href="/strategic-management/pestel-analysis"
            className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-blue-700 hover:text-blue-900"
          >
            Learn about PESTEL Analysis
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
<AdSlot />
      {/* FAQ */}
      <section className="px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-blue-100 bg-gradient-to-br from-white via-blue-50 to-blue-100 px-5 py-12 sm:px-9 lg:px-12 lg:py-16">
          <SectionHeading
            eyebrow="Common questions"
            title="Frequently Asked Questions"
            description="Quick answers to important questions about SWOT analysis."
          />

          <div className="mx-auto max-w-4xl space-y-4">
            {[
              {
                question: "What is the full form of SWOT?",
                answer:
                  "SWOT stands for Strengths, Weaknesses, Opportunities, and Threats.",
              },
              {
                question: "Who can use SWOT analysis?",
                answer:
                  "Businesses, non-profit organizations, project teams, and individuals can use SWOT analysis to understand their position and support planning.",
              },
              {
                question: "Are strengths and weaknesses internal factors?",
                answer:
                  "Yes. Strengths and weaknesses are internal factors because they relate to the organization's resources, capabilities, and limitations.",
              },
              {
                question: "Are opportunities and threats external factors?",
                answer:
                  "Yes. Opportunities and threats arise from the external environment, such as market trends, competitors, economic conditions, and regulations.",
              },
              {
                question: "What is the difference between SWOT and TOWS analysis?",
                answer:
                  "SWOT identifies and organizes the four factors. TOWS uses combinations of those factors to develop strategic options, such as SO, WO, ST, and WT strategies.",
              },
              {
                question: "How often should a SWOT analysis be conducted?",
                answer:
                  "There is no single fixed schedule. It should be reviewed when major business conditions change, before important decisions, and periodically as part of strategic planning.",
              },
            ].map((faq) => (
              <div
                key={faq.question}
                className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm sm:p-6"
              >
                <h3 className="font-bold text-slate-900">
                  {faq.question}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONCLUSION */}
      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:py-20">
        <div className="rounded-[2rem] border border-blue-100 bg-gradient-to-br from-white via-blue-50 to-indigo-100 p-7 shadow-sm sm:p-10">
          <div className="flex items-center gap-3">
            <IconBox icon={Target} />
            <p className="text-sm font-bold uppercase tracking-wider text-blue-700">
              Key Takeaway
            </p>
          </div>

          <h2 className="mt-5 text-2xl font-bold text-slate-900 sm:text-3xl">
            SWOT Analysis Turns Business Information into Strategic Insight
          </h2>

          <p className="mt-4 max-w-4xl leading-8 text-slate-600">
            SWOT analysis helps an organization examine its strengths,
            weaknesses, opportunities, and threats. By distinguishing internal
            factors from external conditions, managers can better understand
            the organization's position and develop strategies based on
            realistic opportunities and challenges.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/strategic-management/what-is-strategic-management"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-700 to-indigo-700 px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:shadow-md"
            >
              Strategic Management
              <ArrowUpRight className="h-4 w-4" />
            </Link>

            <Link
              href="/strategic-management/pestel-analysis"
              className="inline-flex items-center gap-2 rounded-xl border border-blue-200 bg-white px-5 py-3 text-sm font-bold text-blue-800 transition hover:bg-blue-50"
            >
              PESTEL Analysis
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
