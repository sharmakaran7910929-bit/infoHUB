
import Link from "next/link";
import {
  ArrowUpRight,
  Target,
  Layers3,
  ScanSearch,
  Compass,
  Lightbulb,
  ChartNoAxesCombined,
  Settings2,
  ShieldCheck,
  RefreshCw,
} from "lucide-react";

const topics = [
  {
    title: "What Is Strategic Management",
    description:
      "Understand the meaning, purpose, importance, and process of strategic management in organizations.",
    href: "/strategic-management/what-is-strategic-management",
    icon: Compass,
    number: "01",
  },
  {
    title: "SWOT Analysis",
    description:
      "Learn how organizations evaluate strengths, weaknesses, opportunities, and threats to make strategic decisions.",
    href: "/strategic-management/swot-analysis",
    icon: Target,
    number: "02",
  },
  {
    title: "PESTEL Analysis",
    description:
      "Explore how political, economic, social, technological, environmental, and legal factors influence business strategy.",
    href: "/strategic-management/pestel-analysis",
    icon: ScanSearch,
    number: "03",
  },
];

const features = [
  {
    icon: Layers3,
    title: "Strategic Frameworks",
    description: "Learn practical frameworks used to analyze business situations.",
  },
  {
    icon: Lightbulb,
    title: "Clear Concepts",
    description: "Understand management concepts through straightforward explanations.",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Business Perspective",
    description: "Explore how businesses plan, compete, and make decisions.",
  },
];

function StrategyDiagram() {
  const stages = [
    {
      title: "Analyze",
      description: "Understand the business environment and current position.",
      icon: ScanSearch,
      color: "blue",
    },
    {
      title: "Formulate",
      description: "Develop objectives and competitive strategies.",
      icon: Compass,
      color: "indigo",
    },
    {
      title: "Implement",
      description: "Put strategies into action through resources and operations.",
      icon: Settings2,
      color: "sky",
    },
    {
      title: "Evaluate",
      description: "Measure performance and adjust strategies when necessary.",
      icon: ChartNoAxesCombined,
      color: "violet",
    },
  ];

  return (
    <div className="relative mx-auto w-full max-w-xl">
      <div className="relative overflow-hidden rounded-3xl border border-blue-100 bg-gradient-to-br from-white via-blue-50 to-indigo-50 p-5 shadow-lg shadow-blue-100/50 sm:p-7">
        {/* Decorative Background */}
        <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-blue-200/40 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-indigo-200/40 blur-3xl" />

        <div className="relative">
          <div className="mb-6 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
              Strategic Framework
            </p>
            <h2 className="mt-2 text-lg font-bold text-gray-900 sm:text-xl">
              Strategy in Action
            </h2>
          </div>

          {/* Diagram Grid */}
          <div className="grid grid-cols-2 gap-3">
            {stages.map((stage, index) => {
              const Icon = stage.icon;

              return (
                <div
                  key={stage.title}
                  className="group rounded-2xl border border-blue-100 bg-white/90 p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-100 to-indigo-100 text-blue-700 transition-transform group-hover:scale-105">
                      <Icon size={20} />
                    </div>

                    <span className="text-xs font-bold text-gray-300">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="mt-3 text-sm font-bold text-gray-900 sm:text-base">
                    {stage.title}
                  </h3>
                  <p className="mt-1 text-xs leading-5 text-gray-500">
                    {stage.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Central Strategy Hub */}
          <div className="relative mt-5 flex items-center justify-center">
            <div className="absolute inset-x-8 h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent" />

            <div className="relative flex items-center gap-3 rounded-2xl border border-blue-200 bg-gradient-to-r from-blue-600 to-indigo-700 px-5 py-4 text-white shadow-lg shadow-blue-500/20">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15">
                <Target size={23} />
              </div>

              <div>
                <p className="text-sm font-bold">Strategic Management</p>
                <p className="text-[10px] text-blue-100">
                  Plan · Act · Adapt · Grow
                </p>
              </div>

              <RefreshCw size={17} className="ml-1 text-blue-100" />
            </div>
          </div>

          {/* Continuous Process */}
          <div className="mt-5 flex items-center justify-center gap-2 rounded-xl border border-blue-100 bg-white/70 px-3 py-3 text-center">
            <RefreshCw size={15} className="shrink-0 text-blue-600" />
            <p className="text-xs font-medium leading-5 text-gray-500">
              A continuous cycle of strategic decision-making and improvement
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export const metadata = {
  title: "Strategic Management | PriceTag HUB",
  description:
    "Learn strategic management, SWOT analysis, and PESTEL analysis. Explore essential strategic frameworks, business environment analysis, and organizational decision-making.",
};

export default function StrategicManagementPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 m-4">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-blue-200/30 blur-3xl" />
        <div className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-indigo-200/30 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left Content */}
            <div className="max-w-2xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm">
                <Target size={16} />
                Management & Business
              </div>

              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Strategic{" "}
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Management
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600 sm:text-xl">
                Discover how organizations analyze their environment, set long-term
                objectives, develop strategies, and achieve sustainable competitive
                advantage.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="#topics"
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:-translate-y-0.5 hover:shadow-xl"
                >
                  Explore Topics
                  <ArrowUpRight size={18} />
                </a>

                <div className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white/80 px-5 py-3 text-sm font-semibold text-gray-600">
                  <Layers3 size={17} className="text-blue-600" />
                  Strategy & Analysis
                </div>
              </div>
            </div>

            {/* Right Visual - Centered Diagram */}
            <div className="flex w-full items-center justify-center lg:justify-end">
              <StrategyDiagram />
            </div>
          </div>
        </div>
      </section>

      {/* Topics Section */}
      <section id="topics" className="mx-auto max-w-7xl px-6 py-20 sm:px-10">
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-600">
              Learning Resources
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Explore Strategic Management
            </h2>
            <p className="mt-4 max-w-2xl text-gray-600">
              Build your understanding of strategic management through essential
              concepts and widely used strategic analysis frameworks.
            </p>
          </div>

          <div className="flex items-center gap-2 text-sm font-semibold text-gray-500">
            <Layers3 size={17} className="text-blue-500" />
            {topics.length} Learning Topics
          </div>
        </div>

        {/* Topic Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {topics.map((topic) => {
            const Icon = topic.icon;

            return (
              <Link
                key={topic.href}
                href={topic.href}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/60"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 opacity-0 transition-opacity group-hover:opacity-100" />

                <div className="flex items-start justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-100 text-blue-700 transition-transform duration-300 group-hover:scale-105">
                    <Icon size={26} strokeWidth={1.8} />
                  </div>

                  <span className="text-sm font-bold tracking-wider text-gray-300">
                    {topic.number}
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-bold text-gray-900 transition-colors group-hover:text-blue-700">
                  {topic.title}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-7 text-gray-600">
                  {topic.description}
                </p>

                <div className="mt-7 flex items-center justify-between border-t border-gray-100 pt-5">
                  <span className="text-sm font-semibold text-blue-600">
                    Explore Topic
                  </span>
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-50 text-blue-600 transition-all group-hover:bg-blue-600 group-hover:text-white">
                    <ArrowUpRight size={17} />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Bottom Banner */}
      <section className="mx-auto max-w-7xl px-6 pb-20 sm:px-10">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 px-8 py-10 sm:px-12 sm:py-14">
          <div className="absolute -right-16 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-28 left-1/3 h-56 w-56 rounded-full bg-indigo-300/10 blur-3xl" />

          <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-bold text-white sm:text-3xl">
                Understand the Bigger Picture
              </h2>
              <p className="mt-3 leading-7 text-blue-100">
                Explore strategic concepts that help explain how businesses
                evaluate their position, adapt to change, and plan for the future.
              </p>
            </div>

            <a
              href="#topics"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-blue-700 transition hover:bg-blue-50"
            >
              Start Learning
              <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
