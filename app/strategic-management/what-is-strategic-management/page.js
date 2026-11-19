
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Building2,
  CheckCircle2,
  Compass,
  Crosshair,
  GitBranch,
  Lightbulb,
  Search,
  Settings2,
  ShieldCheck,
  Target,
  TrendingUp,
  Workflow,
  XCircle,
} from "lucide-react";
import AdSlot from "../../../components/AdSlot";

export const metadata = {
  title:
    "What Is Strategic Management? Meaning, Process & Importance | PriceTag HUB",
  description:
    "Understand strategic management, its meaning, objectives, characteristics, importance, levels, and process with practical business examples and visual explanations.",
};

const stages = [
  {
    number: "01",
    title: "Strategy Formulation",
    short: "Decide where to go",
    description:
      "Analyze the business environment, identify opportunities and threats, set objectives, and select suitable strategies.",
    icon: Search,
  },
  {
    number: "02",
    title: "Strategy Implementation",
    short: "Turn plans into action",
    description:
      "Allocate resources, assign responsibilities, organize teams, and execute the selected strategies.",
    icon: Settings2,
  },
  {
    number: "03",
    title: "Strategy Evaluation",
    short: "Measure performance",
    description:
      "Compare actual results with objectives and determine whether the strategy is producing the expected outcomes.",
    icon: BarChart3,
  },
  {
    number: "04",
    title: "Strategic Control",
    short: "Correct and improve",
    description:
      "Take corrective action, respond to changes, and adjust the strategy when business conditions require it.",
    icon: ShieldCheck,
  },
];

const objectives = [
  {
    title: "Achieve Long-Term Goals",
    description:
      "Translate the organization's vision into clear objectives and practical strategies.",
    icon: Target,
  },
  {
    title: "Build Competitive Advantage",
    description:
      "Identify how the organization can create greater value than its competitors.",
    icon: TrendingUp,
  },
  {
    title: "Use Resources Effectively",
    description:
      "Guide the allocation of money, people, technology, and other resources.",
    icon: Settings2,
  },
  {
    title: "Respond to Changes",
    description:
      "Recognize opportunities, anticipate threats, and adapt to changing business conditions.",
    icon: Compass,
  },
  {
    title: "Improve Decision-Making",
    description:
      "Provide a long-term framework for evaluating important organizational choices.",
    icon: Lightbulb,
  },
  {
    title: "Support Sustainable Growth",
    description:
      "Balance present performance with the organization's future needs.",
    icon: BarChart3,
  },
];

const levels = [
  {
    level: "LEVEL 01",
    title: "Corporate Strategy",
    responsibility: "Top-level management",
    question: "Which businesses should we operate in?",
    example:
      "A clothing company decides to expand into footwear and accessories.",
    icon: Building2,
  },
  {
    level: "LEVEL 02",
    title: "Business Strategy",
    responsibility: "Business-unit management",
    question: "How will we compete in our market?",
    example:
      "The clothing division chooses affordable pricing and faster delivery to attract customers.",
    icon: TrendingUp,
  },
  {
    level: "LEVEL 03",
    title: "Functional Strategy",
    responsibility: "Departmental management",
    question: "How will each department support the plan?",
    example:
      "Marketing plans campaigns, operations improves production, and HR trains employees.",
    icon: Settings2,
  },
];

const characteristics = [
  {
    title: "Long-Term Orientation",
    description:
      "Focuses on the organization's future direction rather than only immediate results.",
  },
  {
    title: "Organization-Wide Approach",
    description:
      "Connects decisions across departments, business units, and management levels.",
  },
  {
    title: "Continuous Process",
    description:
      "Requires regular monitoring, evaluation, and improvement of strategies.",
  },
  {
    title: "Environment-Based Decisions",
    description:
      "Considers customers, competitors, technology, economic conditions, and other external factors.",
  },
  {
    title: "Resource Allocation",
    description:
      "Determines how organizational resources should be used to achieve priorities.",
  },
  {
    title: "Management Involvement",
    description:
      "Requires leadership, coordination, and participation across the organization.",
  },
];

const faqs = [
  {
    question: "What is the main purpose of strategic management?",
    answer:
      "Its main purpose is to establish long-term direction, use resources effectively, respond to changes, and help an organization achieve its objectives.",
  },
  {
    question: "What are the four stages of strategic management?",
    answer:
      "A commonly used framework includes strategy formulation, strategy implementation, strategy evaluation, and strategic control. Some frameworks combine evaluation and control.",
  },
  {
    question: "Who is responsible for strategic management?",
    answer:
      "Senior management generally leads the overall strategic direction. Middle managers and functional managers translate that direction into plans and actions.",
  },
  {
    question: "Is strategic management a continuous process?",
    answer:
      "Yes. Organizations regularly review their performance and business environment, then revise their strategies when necessary.",
  },
];

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

function GradientIcon({ icon: Icon, className = "" }) {
  return (
    <div
      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-white to-blue-100 text-blue-700 shadow-sm ring-1 ring-blue-100 ${className}`}
    >
      <Icon className="h-6 w-6" />
    </div>
  );
}

function StrategyCycle() {
  return (
    <div className="rounded-3xl border border-blue-100 bg-gradient-to-br from-white via-blue-50 to-blue-100 p-5 shadow-xl shadow-blue-900/5 sm:p-7">
      <div className="mb-7 flex items-center justify-between gap-3">
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-blue-700">
            Strategic Management Framework
          </p>
          <h2 className="mt-2 text-xl font-bold text-slate-900">
            The Strategy Cycle
          </h2>
        </div>
        <div className="rounded-2xl bg-white p-3 text-blue-700 shadow-sm">
          <Workflow className="h-7 w-7" />
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        {stages.map((stage, index) => {
          const Icon = stage.icon;

          return (
            <div
              key={stage.number}
              className="relative rounded-2xl border border-blue-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex items-center gap-3">
                <GradientIcon icon={Icon} />
                <div>
                  <p className="text-xs font-bold text-blue-700">
                    STAGE {stage.number}
                  </p>
                  <h3 className="mt-1 font-bold text-slate-900">
                    {stage.title}
                  </h3>
                </div>
              </div>

              <p className="mt-4 text-sm font-bold text-blue-800">
                {stage.short}
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {stage.description}
              </p>

              {index < 2 && (
                <ArrowRight className="absolute -right-3 top-1/2 z-10 hidden h-5 w-5 -translate-y-1/2 text-blue-500 sm:block" />
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-5 flex items-center gap-3 rounded-2xl border border-blue-200 bg-gradient-to-r from-blue-100 to-white p-4">
        <GitBranch className="h-6 w-6 shrink-0 text-blue-700" />
        <p className="text-sm leading-6 text-blue-900">
          <span className="font-bold">Continuous feedback:</span> Evaluation
          helps management improve or revise strategies and repeat the cycle.
        </p>
      </div>
    </div>
  );
}

function SwotDiagram() {
  const items = [
    {
      letter: "S",
      title: "Strengths",
      type: "Internal · Positive",
      example: "Strong brand reputation",
      style: "from-emerald-50 to-white border-emerald-200",
      letterStyle: "bg-emerald-100 text-emerald-800",
    },
    {
      letter: "W",
      title: "Weaknesses",
      type: "Internal · Negative",
      example: "Limited production capacity",
      style: "from-rose-50 to-white border-rose-200",
      letterStyle: "bg-rose-100 text-rose-800",
    },
    {
      letter: "O",
      title: "Opportunities",
      type: "External · Positive",
      example: "Growing online demand",
      style: "from-blue-50 to-white border-blue-200",
      letterStyle: "bg-blue-100 text-blue-800",
    },
    {
      letter: "T",
      title: "Threats",
      type: "External · Negative",
      example: "New competitors entering",
      style: "from-amber-50 to-white border-amber-200",
      letterStyle: "bg-amber-100 text-amber-800",
    },
  ];

  return (
    <div className="rounded-3xl border border-blue-100 bg-gradient-to-br from-white to-blue-50 p-5 shadow-sm sm:p-7">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-blue-700">
            Strategic Analysis Tool
          </p>
          <h3 className="mt-2 text-2xl font-bold text-slate-900">
            SWOT Analysis
          </h3>
        </div>
        <GradientIcon icon={Search} />
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {items.map((item) => (
          <div
            key={item.letter}
            className={`rounded-2xl border bg-gradient-to-br p-5 ${item.style}`}
          >
            <div className="flex items-center gap-3">
              <span
                className={`flex h-12 w-12 items-center justify-center rounded-2xl text-xl font-bold ${item.letterStyle}`}
              >
                {item.letter}
              </span>
              <div>
                <h4 className="font-bold text-slate-900">{item.title}</h4>
                <p className="mt-1 text-xs text-slate-500">{item.type}</p>
              </div>
            </div>
            <p className="mt-4 text-sm font-bold text-slate-700">
              {item.example}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-5 grid grid-cols-2 gap-3">
        <div className="rounded-xl bg-blue-100/70 p-3 text-center text-sm font-bold text-blue-900">
          Internal Factors
        </div>
        <div className="rounded-xl bg-indigo-100/70 p-3 text-center text-sm font-bold text-indigo-900">
          External Factors
        </div>
      </div>
    </div>
  );
}

function BusinessExample() {
  const steps = [
    {
      title: "Identify the problem",
      description:
        "The company studies sales data, customer preferences, and competitor activity.",
    },
    {
      title: "Choose a strategy",
      description:
        "It decides to develop an online store and introduce a wider range of affordable products.",
    },
    {
      title: "Implement the strategy",
      description:
        "The company invests in its website, digital marketing, inventory, and employee training.",
    },
    {
      title: "Evaluate performance",
      description:
        "It tracks online sales, customer feedback, delivery performance, and profitability.",
    },
  ];

  return (
    <div className="overflow-hidden rounded-3xl border border-blue-100 bg-gradient-to-br from-white to-blue-50 shadow-sm">
      <div className="border-b border-blue-100 bg-gradient-to-r from-blue-100 via-white to-indigo-100 p-6 sm:p-8">
        <div className="flex items-center gap-3">
          <GradientIcon icon={Lightbulb} />
          <p className="text-sm font-bold uppercase tracking-wider text-blue-800">
            Practical Business Example
          </p>
        </div>
        <h3 className="mt-5 text-2xl font-bold text-slate-900">
          How a Clothing Company Uses Strategic Management
        </h3>
        <p className="mt-3 max-w-2xl leading-7 text-slate-600">
          Imagine a clothing company experiencing declining sales because
          customers are increasingly shifting towards online shopping.
        </p>
      </div>

      <div className="p-6 sm:p-8">
        {steps.map((step, index) => (
          <div key={step.title} className="flex gap-4">
            <div className="flex flex-col items-center">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 font-bold text-white shadow-md shadow-blue-200">
                {index + 1}
              </div>
              {index !== steps.length - 1 && (
                <div className="my-2 min-h-8 w-0.5 flex-1 bg-blue-200" />
              )}
            </div>
            <div className="pb-7">
              <h4 className="font-bold text-slate-900">{step.title}</h4>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function WhatIsStrategicManagementPage() {
  return (
    <main className="overflow-hidden bg-white text-slate-800">
      {/* HERO */}
      <section className="px-4 pb-10 pt-6 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-blue-100 bg-gradient-to-br from-white via-blue-50 to-blue-100 shadow-sm">
          <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-blue-200/40 blur-3xl" />
          <div className="absolute -bottom-24 left-1/4 h-64 w-64 rounded-full bg-indigo-200/30 blur-3xl" />

          <div className="relative grid items-center gap-10 px-6 py-12 sm:px-10 sm:py-16 lg:grid-cols-2 lg:gap-12 lg:px-14 lg:py-20">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-sm font-bold text-blue-800 shadow-sm">
                <Compass className="h-4 w-4" />
                BUSINESS MANAGEMENT
              </div>

              <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                What Is Strategic Management?
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                Strategic management is the process of setting an
                organization's long-term direction, choosing how to achieve
                its goals, implementing plans, and evaluating results.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  { label: "Long-Term Direction", icon: Target },
                  { label: "Strategic Decisions", icon: GitBranch },
                  { label: "Business Performance", icon: TrendingUp },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.label}
                      className="flex items-center gap-2 rounded-xl border border-blue-100 bg-white/80 px-3 py-3 text-sm font-bold text-blue-900 shadow-sm"
                    >
                      <Icon className="h-4 w-4 text-blue-700" />
                      {item.label}
                    </div>
                  );
                })}
              </div>
            </div>

            <StrategyCycle />
          </div>
        </div>
      </section>

      {/* MEANING */}
      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:py-20">
        <SectionHeading
          eyebrow="Understand the concept"
          title="What Does Strategic Management Actually Mean?"
          description="It connects an organization's long-term goals with the decisions and actions needed to achieve them."
        />

        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="space-y-5 leading-8 text-slate-600">
            <p>
              Every organization must make decisions about its future. It
              needs to decide what it wants to achieve, which markets it should
              serve, how it will compete, and how it will respond to changes.
            </p>
            <p>
              Strategic management provides a structured approach to these
              decisions. It considers internal conditions, such as employees
              and financial resources, as well as external conditions, such as
              competitors, technology, customer demand, and government
              policies.
            </p>
            <p>
              It is not simply about preparing a business plan. It also
              involves implementing that plan, monitoring results, and making
              improvements when circumstances change.
            </p>
          </div>

          <div className="rounded-3xl border border-blue-100 bg-gradient-to-br from-white via-blue-50 to-blue-100 p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <GradientIcon icon={Crosshair} />
              <h3 className="text-xl font-bold text-slate-900">
                The Central Idea
              </h3>
            </div>

            <div className="mt-6 space-y-3">
              {[
                ["Where are we now?", "Understand the current position."],
                ["Where do we want to go?", "Set a clear long-term direction."],
                ["How will we get there?", "Choose and implement strategies."],
                ["Are we succeeding?", "Measure results and make adjustments."],
              ].map(([question, answer], index) => (
                <div
                  key={question}
                  className="flex gap-3 rounded-2xl border border-blue-100 bg-white p-4 shadow-sm"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-sm font-bold text-blue-800">
                    {index + 1}
                  </span>
                  <div>
                    <p className="font-bold text-slate-900">{question}</p>
                    <p className="mt-1 text-sm text-slate-600">{answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
<AdSlot />
      {/* OBJECTIVES */}
      <section className="px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-blue-100 bg-gradient-to-br from-white via-blue-50 to-blue-100 px-5 py-12 sm:px-9 lg:px-12 lg:py-16">
          <SectionHeading
            eyebrow="Why organizations use it"
            title="Objectives of Strategic Management"
            description="It helps organizations make purposeful decisions and build a sustainable direction for the future."
          />

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {objectives.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-blue-100 bg-gradient-to-br from-white to-blue-50 p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                  <GradientIcon icon={Icon} />
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
        </div>
      </section>

      {/* CHARACTERISTICS */}
      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:py-20">
        <SectionHeading
          eyebrow="Key features"
          title="Characteristics of Strategic Management"
          description="These features explain how strategic management differs from routine day-to-day administration."
        />

        <div className="grid items-start gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-blue-100 bg-gradient-to-br from-white to-blue-100 p-7 sm:p-9">
            <GradientIcon icon={Compass} className="h-14 w-14" />
            <h3 className="mt-6 text-2xl font-bold text-slate-900">
              A Future-Oriented Approach
            </h3>
            <p className="mt-4 leading-7 text-slate-600">
              Strategic management looks beyond immediate tasks. It considers
              where an organization wants to be in the coming years and what
              decisions can move it towards that position.
            </p>
            <div className="mt-7 rounded-2xl border border-blue-100 bg-white p-4">
              <p className="text-sm font-bold text-blue-800">
                The focus is not just today's performance.
              </p>
              <p className="mt-1 text-sm text-slate-600">
                It is also about preparing the organization for tomorrow.
              </p>
            </div>
          </div>

          <div className="space-y-3">
            {characteristics.map((item, index) => (
              <div
                key={item.title}
                className="flex gap-4 rounded-2xl border border-blue-100 bg-gradient-to-r from-white to-blue-50 p-5"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-sm font-bold text-blue-800">
                  {index + 1}
                </span>
                <div>
                  <h3 className="font-bold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
<AdSlot />
      {/* IMPORTANCE */}
      <section className="px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-blue-100 bg-gradient-to-br from-white via-blue-50 to-indigo-50 px-5 py-12 sm:px-9 lg:px-12 lg:py-16">
          <SectionHeading
            eyebrow="Business value"
            title="Importance of Strategic Management"
            description="It helps an organization understand its position, make informed choices, and prepare for future challenges."
          />

          <div className="grid items-start gap-8 lg:grid-cols-2">
            <div className="space-y-4">
              {[
                [
                  "Provides a Clear Direction",
                  "Employees and managers can work towards shared organizational goals.",
                ],
                [
                  "Helps Identify Opportunities",
                  "Businesses can recognize changes in customer demand, markets, and technology.",
                ],
                [
                  "Reduces Uncertainty",
                  "Analyzing risks and future possibilities improves preparedness, although it cannot eliminate uncertainty.",
                ],
                [
                  "Improves Coordination",
                  "Departments can align their plans and resources with the overall strategy.",
                ],
                [
                  "Supports Performance Evaluation",
                  "Management can compare actual results with strategic objectives and take corrective action.",
                ],
              ].map(([title, description]) => (
                <div
                  key={title}
                  className="flex gap-3 rounded-2xl border border-blue-100 bg-white p-4 shadow-sm"
                >
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-blue-600" />
                  <div>
                    <h3 className="font-bold text-slate-900">{title}</h3>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <SwotDiagram />
              <div className="mt-4 rounded-2xl border border-blue-200 bg-gradient-to-r from-blue-100 to-white p-5">
                <h3 className="font-bold text-blue-900">
                  Why Is SWOT Analysis Relevant?
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  SWOT analysis is a tool used during strategic analysis. It
                  helps managers understand internal strengths and weaknesses
                  alongside external opportunities and threats.
                </p>
                <Link
                  href="/strategic-management/swot-analysis"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-blue-700 hover:text-blue-900"
                >
                  Explore SWOT Analysis
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:py-20">
        <SectionHeading
          eyebrow="How it works"
          title="The Strategic Management Process"
          description="Organizations follow a connected process to analyze their position, select a direction, act on it, and review performance."
        />

        <div className="relative grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stages.map((stage, index) => {
            const Icon = stage.icon;
            return (
              <div
                key={stage.number}
                className="relative rounded-3xl border border-blue-100 bg-gradient-to-br from-white to-blue-50 p-5 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <GradientIcon icon={Icon} />
                  <span className="text-2xl font-bold text-blue-200">
                    {stage.number}
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-bold text-slate-900">
                  {stage.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {stage.description}
                </p>
                {index !== stages.length - 1 && (
                  <ArrowRight className="absolute -right-3 top-1/2 z-10 hidden h-6 w-6 -translate-y-1/2 rounded-full bg-white text-blue-600 lg:block" />
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-6 rounded-3xl border border-blue-200 bg-gradient-to-r from-blue-100 via-white to-indigo-100 p-6 text-center">
          <GitBranch className="mx-auto h-8 w-8 text-blue-700" />
          <h3 className="mt-3 text-lg font-bold text-slate-900">
            A Continuous Cycle of Improvement
          </h3>
          <p className="mx-auto mt-2 max-w-2xl text-sm leading-6 text-slate-600">
            Evaluation and control provide feedback. If results are below
            expectations or business conditions change, managers revise the
            strategy and repeat the process.
          </p>
        </div>
      </section>

      {/* LEVELS */}
      <section className="px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-blue-100 bg-gradient-to-br from-white via-blue-50 to-blue-100 px-5 py-12 sm:px-9 lg:px-12 lg:py-16">
          <SectionHeading
            eyebrow="Management hierarchy"
            title="Three Levels of Strategic Management"
            description="Strategy is developed and translated into action at different levels of an organization."
          />

          <div className="mx-auto max-w-4xl space-y-3">
            {levels.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={item.level}>
                  <div
                    className={`mx-auto rounded-3xl border border-blue-100 bg-gradient-to-br from-white to-blue-50 p-5 shadow-sm sm:p-6 ${
                      index === 0
                        ? "max-w-xl"
                        : index === 1
                          ? "max-w-2xl"
                          : "max-w-3xl"
                    }`}
                  >
                    <div className="flex flex-wrap items-center gap-3">
                      <GradientIcon icon={Icon} />
                      <div>
                        <p className="text-xs font-bold tracking-wider text-blue-700">
                          {item.level}
                        </p>
                        <h3 className="mt-1 text-lg font-bold text-slate-900">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                    <p className="mt-4 text-xs font-bold uppercase tracking-wider text-blue-700">
                      {item.responsibility}
                    </p>
                    <p className="mt-2 font-bold text-slate-900">
                      {item.question}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {item.example}
                    </p>
                  </div>

                  {index !== levels.length - 1 && (
                    <div className="flex justify-center py-2">
                      <ArrowDown className="h-5 w-5 text-blue-600" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <p className="mx-auto mt-6 max-w-3xl text-center text-sm leading-6 text-slate-600">
            Corporate direction guides business strategy, which is translated
            into functional plans and actions.
          </p>
        </div>
      </section>
<AdSlot />
      {/* PRACTICAL EXAMPLE */}
      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:py-20">
        <SectionHeading
          eyebrow="Apply your understanding"
          title="Strategic Management in a Business Situation"
          description="See how different stages work together when a company faces a change in customer behaviour."
        />
        <BusinessExample />
      </section>

      {/* ADVANTAGES AND LIMITATIONS */}
      <section className="px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-blue-100 bg-gradient-to-br from-white via-blue-50 to-indigo-50 px-5 py-12 sm:px-9 lg:px-12 lg:py-16">
          <SectionHeading
            eyebrow="Balanced perspective"
            title="Advantages and Limitations"
            description="Strategic management can improve organizational decision-making, but it also has practical challenges."
          />

          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-3xl border border-blue-100 bg-gradient-to-br from-white to-blue-50 p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-7 w-7 text-blue-700" />
                <h3 className="text-xl font-bold text-slate-900">
                  Advantages
                </h3>
              </div>
              <ul className="mt-6 space-y-4">
                {[
                  "Provides a long-term direction.",
                  "Improves coordination between departments.",
                  "Encourages informed and structured decisions.",
                  "Helps identify risks and business opportunities.",
                  "Supports better use of organizational resources.",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-6 text-slate-600">
                    <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-blue-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-blue-100 bg-gradient-to-br from-white to-indigo-50 p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <XCircle className="h-7 w-7 text-indigo-700" />
                <h3 className="text-xl font-bold text-slate-900">
                  Limitations
                </h3>
              </div>
              <ul className="mt-6 space-y-4">
                {[
                  "Planning and analysis can require significant time and resources.",
                  "Future market conditions cannot be predicted with certainty.",
                  "Implementation may face employee resistance.",
                  "Poor information can lead to unsuitable decisions.",
                  "Strategies may need frequent revision when conditions change.",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-6 text-slate-600">
                    <XCircle className="mt-1 h-4 w-4 shrink-0 text-indigo-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:py-20">
        <SectionHeading
          eyebrow="Understand the difference"
          title="Strategic Management vs Operational Management"
          description="Both are important, but they focus on different aspects of organizational performance."
        />

        <div className="overflow-hidden rounded-3xl border border-blue-100 bg-gradient-to-br from-white to-blue-50 shadow-sm">
          <div className="grid grid-cols-3 bg-gradient-to-r from-blue-700 to-indigo-700 text-white">
            <div className="p-4 text-sm font-bold">Basis</div>
            <div className="p-4 text-sm font-bold">Strategic</div>
            <div className="p-4 text-sm font-bold">Operational</div>
          </div>

          {[
            ["Main Focus", "Long-term direction", "Daily activities"],
            ["Time Horizon", "Generally long-term", "Generally short-term"],
            ["Responsibility", "Primarily senior management", "Primarily operational managers"],
            ["Decisions", "Major organizational choices", "Routine execution and coordination"],
            ["Example", "Entering a new market", "Managing daily production"],
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

        <p className="mt-4 text-sm leading-6 text-slate-500">
          These are general distinctions. In practice, strategic and
          operational decisions are connected, and their time horizons can
          overlap.
        </p>
      </section>
<AdSlot />
      {/* FAQ */}
      <section className="px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-blue-100 bg-gradient-to-br from-white via-blue-50 to-blue-100 px-5 py-12 sm:px-9 lg:px-12 lg:py-16">
          <SectionHeading
            eyebrow="Common questions"
            title="Frequently Asked Questions"
            description="Quick answers to common questions about strategic management."
          />

          <div className="mx-auto max-w-4xl space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm sm:p-6"
              >
                <h3 className="font-bold text-slate-900">{faq.question}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      
    </main>
  );
}
