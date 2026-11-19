
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  CheckCircle2,
  ClipboardList,
  Cloud,
  Globe,
  Landmark,
  Leaf,
  Lightbulb,
  Scale,
  ShieldCheck,
  ShoppingBag,
  Users,
  Wallet,
  Factory,
  AlertTriangle,
  Target,
  TrendingUp,
  Search,
  FileText,
} from "lucide-react";
import AdSlot from "../../../components/AdSlot";

export const metadata = {
  title: "PESTEL Analysis: Meaning, Factors, Examples & Process | PriceTag HUB",
  description:
    "Understand PESTEL analysis, its six external business environment factors, practical examples, steps, advantages, limitations, and its difference from SWOT analysis.",
};

const pestelFactors = [
  {
    letter: "P",
    title: "Political",
    subtitle: "Government and public policy",
    description:
      "Examines how government decisions, political stability, taxation, trade policies, and public spending affect a business.",
    examples: ["Tax policy", "Political stability", "Trade restrictions"],
    icon: Landmark,
    color: "blue",
    bg: "bg-blue-50",
    text: "text-blue-700",
    border: "border-blue-200",
  },
  {
    letter: "E",
    title: "Economic",
    subtitle: "Financial and market conditions",
    description:
      "Studies economic conditions that influence customer purchasing power, business costs, demand, and profitability.",
    examples: ["Inflation", "Interest rates", "Economic growth"],
    icon: Wallet,
    color: "emerald",
    bg: "bg-emerald-50",
    text: "text-emerald-700",
    border: "border-emerald-200",
  },
  {
    letter: "S",
    title: "Social",
    subtitle: "People and society",
    description:
      "Looks at population characteristics, cultural values, lifestyles, education, and changing consumer preferences.",
    examples: ["Demographics", "Lifestyle changes", "Consumer attitudes"],
    icon: Users,
    color: "violet",
    bg: "bg-violet-50",
    text: "text-violet-700",
    border: "border-violet-200",
  },
  {
    letter: "T",
    title: "Technological",
    subtitle: "Innovation and technology",
    description:
      "Evaluates how technological developments, automation, digital platforms, and research can affect business operations.",
    examples: ["Artificial intelligence", "Automation", "Digital payments"],
    icon: Lightbulb,
    color: "amber",
    bg: "bg-amber-50",
    text: "text-amber-700",
    border: "border-amber-200",
  },
  {
    letter: "E",
    title: "Environmental",
    subtitle: "Nature and sustainability",
    description:
      "Considers environmental conditions and concerns such as climate change, resource availability, pollution, and sustainability.",
    examples: ["Climate change", "Waste management", "Resource scarcity"],
    icon: Leaf,
    color: "green",
    bg: "bg-green-50",
    text: "text-green-700",
    border: "border-green-200",
  },
  {
    letter: "L",
    title: "Legal",
    subtitle: "Laws and regulations",
    description:
      "Examines the laws and regulatory requirements that businesses must follow while operating in a market.",
    examples: ["Labour laws", "Consumer protection", "Data privacy"],
    icon: Scale,
    color: "rose",
    bg: "bg-rose-50",
    text: "text-rose-700",
    border: "border-rose-200",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Define the objective",
    description:
      "Decide what you want to analyse, such as entering a new market, launching a product, or evaluating an existing business.",
    icon: Target,
  },
  {
    number: "02",
    title: "Collect external information",
    description:
      "Gather reliable information about government policies, economic indicators, social trends, technology, environmental conditions, and laws.",
    icon: Search,
  },
  {
    number: "03",
    title: "Identify relevant factors",
    description:
      "Select the external developments that could meaningfully affect the business. Avoid including unrelated information.",
    icon: ClipboardList,
  },
  {
    number: "04",
    title: "Evaluate their impact",
    description:
      "Determine whether each factor creates an opportunity, a threat, or both, and assess its likely importance.",
    icon: TrendingUp,
  },
  {
    number: "05",
    title: "Develop strategic responses",
    description:
      "Decide how the business should respond, adapt its operations, manage risks, or take advantage of emerging opportunities.",
    icon: ShieldCheck,
  },
  {
    number: "06",
    title: "Monitor and update",
    description:
      "Review the analysis periodically because external conditions, regulations, and market trends can change.",
    icon: FileText,
  },
];

function SectionHeading({
  eyebrow,
  title,
  description,
  center = false,
}) {
  return (
    <div className={`mb-8 ${center ? "text-center" : ""}`}>
      {eyebrow && (
        <p className="mb-2 text-sm font-bold uppercase tracking-wider text-blue-600">
          {eyebrow}
        </p>
      )}
      <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 max-w-3xl text-base leading-7 text-slate-600">
          {description}
        </p>
      )}
    </div>
  );
}

function FactorCard({ factor }) {
  const Icon = factor.icon;

  return (
    <div
      className={`rounded-2xl border ${factor.border} bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md`}
    >
      <div className="flex items-start justify-between gap-3">
        <div
          className={`flex h-12 w-12 items-center justify-center rounded-xl ${factor.bg} ${factor.text}`}
        >
          <Icon size={24} />
        </div>
        <span
          className={`flex h-9 w-9 items-center justify-center rounded-lg ${factor.bg} text-lg font-bold ${factor.text}`}
        >
          {factor.letter}
        </span>
      </div>

      <h3 className="mt-4 text-lg font-bold text-slate-900">
        {factor.title}
      </h3>
      <p className={`mt-1 text-sm font-bold ${factor.text}`}>
        {factor.subtitle}
      </p>
      <p className="mt-3 text-sm leading-6 text-slate-600">
        {factor.description}
      </p>

      <div className="mt-4 border-t border-slate-100 pt-3">
        <p className="mb-2 text-xs font-bold uppercase tracking-wide text-slate-500">
          Examples
        </p>
        <div className="flex flex-wrap gap-2">
          {factor.examples.map((example) => (
            <span
              key={example}
              className={`rounded-full ${factor.bg} px-2.5 py-1 text-xs font-bold ${factor.text}`}
            >
              {example}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function PestelHeroDiagram() {
  const items = [
    { letter: "P", label: "Political", icon: Landmark, color: "bg-blue-100 text-blue-700" },
    { letter: "E", label: "Economic", icon: Wallet, color: "bg-emerald-100 text-emerald-700" },
    { letter: "S", label: "Social", icon: Users, color: "bg-violet-100 text-violet-700" },
    { letter: "T", label: "Technological", icon: Lightbulb, color: "bg-amber-100 text-amber-700" },
    { letter: "E", label: "Environmental", icon: Leaf, color: "bg-green-100 text-green-700" },
    { letter: "L", label: "Legal", icon: Scale, color: "bg-rose-100 text-rose-700" },
  ];

  return (
    <div className="rounded-3xl border border-blue-100 bg-gradient-to-br from-white via-blue-50 to-indigo-100 p-5 shadow-sm sm:p-8">
      <div className="mb-6 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-blue-700">
          <Globe size={14} />
          External business environment
        </span>
        <h3 className="mt-3 text-xl font-bold text-slate-900">
          Six Factors That Shape Business Decisions
        </h3>
        <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-slate-600">
          PESTEL examines the external forces surrounding an organisation to
          understand how they may influence its future.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.label}
              className="flex items-center gap-3 rounded-2xl border border-white bg-white/90 p-3 shadow-sm sm:p-4"
            >
              <div
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${item.color}`}
              >
                <Icon size={20} />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-bold text-slate-400">
                  {item.letter}
                </p>
                <p className="text-sm font-bold text-slate-800">
                  {item.label}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-5 rounded-2xl border border-blue-200 bg-white p-4 text-center shadow-sm">
        <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
          <Building2 size={23} />
        </div>
        <p className="mt-2 font-bold text-slate-900">
          Business Environment
        </p>
        <p className="mt-1 text-sm text-slate-600">
          Understand external changes → Evaluate their impact → Make better
          strategic decisions
        </p>
      </div>
    </div>
  );
}

function ExampleImpact({ title, factor, impact, response, icon: Icon }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
          <Icon size={20} />
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-wide text-blue-600">
            {factor}
          </p>
          <h4 className="font-bold text-slate-900">{title}</h4>
        </div>
      </div>
      <div className="mt-4 space-y-3 text-sm leading-6">
        <div>
          <p className="font-bold text-slate-700">Possible impact</p>
          <p className="text-slate-600">{impact}</p>
        </div>
        <div>
          <p className="font-bold text-slate-700">Possible response</p>
          <p className="text-slate-600">{response}</p>
        </div>
      </div>
    </div>
  );
}

function BusinessExample() {
  const examples = [
    {
      factor: "Political",
      title: "Change in import duties",
      impact:
        "Higher duties on imported materials may increase the store's purchasing costs.",
      response:
        "Review suppliers and explore reliable domestic sourcing where practical.",
      icon: Landmark,
    },
    {
      factor: "Economic",
      title: "Rising inflation",
      impact:
        "Higher prices may reduce customers' disposable income and increase operating expenses.",
      response:
        "Review pricing, control costs, and offer products at different price points.",
      icon: Wallet,
    },
    {
      factor: "Social",
      title: "Changing fashion preferences",
      impact:
        "Customers may increasingly prefer sustainable clothing or different styles.",
      response:
        "Study customer preferences and adjust the product range.",
      icon: Users,
    },
    {
      factor: "Technological",
      title: "Growth of online shopping",
      impact:
        "Customers may expect online ordering, digital payments, and convenient delivery.",
      response:
        "Develop an online sales channel and improve digital customer service.",
      icon: ShoppingBag,
    },
    {
      factor: "Environmental",
      title: "Growing concern about textile waste",
      impact:
        "Customers and regulators may place greater attention on sustainable production and packaging.",
      response:
        "Consider durable materials, reduced packaging, and responsible waste practices.",
      icon: Leaf,
    },
    {
      factor: "Legal",
      title: "Changes in consumer protection rules",
      impact:
        "The business may need to update product information, return policies, or customer practices.",
      response:
        "Review applicable laws and ensure that business policies comply with them.",
      icon: Scale,
    },
  ];

  return (
    <div className="rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-5 sm:p-7">
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
          <ShoppingBag size={25} />
        </div>
        <div>
          <p className="text-sm font-bold uppercase tracking-wide text-blue-700">
            Practical example
          </p>
          <h3 className="text-xl font-bold text-slate-900">
            PESTEL Analysis of a Clothing Retail Store
          </h3>
        </div>
      </div>

      <p className="mb-5 text-sm leading-6 text-slate-600">
        Imagine a clothing retailer planning to expand its business. It can
        use PESTEL analysis to identify external developments that may affect
        its expansion decision.
      </p>

      <div className="grid gap-3 md:grid-cols-2">
        {examples.map((example) => (
          <ExampleImpact key={example.factor} {...example} />
        ))}
      </div>

      <div className="mt-5 rounded-2xl border border-blue-200 bg-white p-4">
        <p className="font-bold text-slate-900">
          What does this example teach us?
        </p>
        <p className="mt-1 text-sm leading-6 text-slate-600">
          The same business is affected by different external forces. PESTEL
          helps management examine these forces systematically before making
          an important decision.
        </p>
      </div>
    </div>
  );
}

function ProcessDiagram() {
  return (
    <div className="rounded-3xl border border-blue-100 bg-gradient-to-br from-white to-blue-50 p-5 sm:p-7">
      <div className="grid gap-3 sm:grid-cols-3">
        {processSteps.map((step, index) => {
          const Icon = step.icon;

          return (
            <div key={step.number} className="relative">
              <div className="h-full rounded-2xl border border-blue-100 bg-white p-4 shadow-sm">
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                    <Icon size={20} />
                  </div>
                  <span className="text-sm font-bold text-blue-300">
                    {step.number}
                  </span>
                </div>
                <h3 className="mt-4 font-bold text-slate-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {step.description}
                </p>
              </div>
              {index !== processSteps.length - 1 && (
                <div className="hidden sm:block" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function ComparisonTable() {
  const rows = [
    ["Full form", "Political, Economic, Social, Technological, Environmental, Legal", "Strengths, Weaknesses, Opportunities, Threats"],
    ["Main focus", "External macro-environmental factors", "Internal and external factors"],
    ["Internal factors", "Not its primary focus", "Strengths and weaknesses"],
    ["External factors", "All six PESTEL categories", "Opportunities and threats"],
    ["Main purpose", "Understand the wider environment affecting a business", "Evaluate the organisation's position and strategic options"],
  ];

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200">
      <div className="grid grid-cols-3 bg-slate-900 text-sm font-bold text-white">
        <div className="p-3 sm:p-4">Basis</div>
        <div className="border-l border-white/10 p-3 sm:p-4">PESTEL</div>
        <div className="border-l border-white/10 p-3 sm:p-4">SWOT</div>
      </div>
      {rows.map((row, index) => (
        <div
          key={row[0]}
          className={`grid grid-cols-3 text-sm ${
            index % 2 === 0 ? "bg-white" : "bg-slate-50"
          }`}
        >
          <div className="p-3 font-bold text-slate-800 sm:p-4">
            {row[0]}
          </div>
          <div className="border-l border-slate-200 p-3 leading-6 text-slate-600 sm:p-4">
            {row[1]}
          </div>
          <div className="border-l border-slate-200 p-3 leading-6 text-slate-600 sm:p-4">
            {row[2]}
          </div>
        </div>
      ))}
    </div>
  );
}

const faqs = [
  {
    question: "What is PESTEL analysis in simple words?",
    answer:
      "PESTEL analysis is a strategic management tool used to study six external factors that may affect a business: Political, Economic, Social, Technological, Environmental, and Legal.",
  },
  {
    question: "What are the six factors of PESTEL analysis?",
    answer:
      "The six factors are Political, Economic, Social, Technological, Environmental, and Legal. Together, they help businesses understand their wider external environment.",
  },
  {
    question: "Why is PESTEL analysis important?",
    answer:
      "It helps organisations identify external opportunities and threats, understand market changes, anticipate risks, and make more informed strategic decisions.",
  },
  {
    question: "Is PESTEL analysis internal or external?",
    answer:
      "PESTEL analysis focuses on the external macro-environment. It does not primarily assess internal resources, capabilities, or weaknesses.",
  },
  {
    question: "What is the difference between PEST and PESTEL?",
    answer:
      "PEST examines Political, Economic, Social, and Technological factors. PESTEL expands this framework by adding Environmental and Legal factors.",
  },
  {
    question: "How often should a business conduct PESTEL analysis?",
    answer:
      "There is no universal schedule. Businesses should review it when making major strategic decisions and whenever significant external changes occur. Some organisations also review it periodically.",
  },
  {
    question: "Can PESTEL analysis be used for small businesses?",
    answer:
      "Yes. Small businesses can use it to understand local regulations, customer trends, economic conditions, technology changes, and other external influences.",
  },
];

export default function PestelAnalysisPage() {
  return (
    <main className="min-h-screen bg-white text-slate-800">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50 to-indigo-100">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-2 lg:gap-14">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-sm font-bold text-blue-700">
              <Globe size={16} />
              Strategic Management
            </div>

            <h1 className="text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl">
              PESTEL Analysis
              <span className="mt-2 block text-blue-700">
                Understanding the External Business Environment
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-600">
              PESTEL analysis helps businesses understand how political,
              economic, social, technological, environmental, and legal
              developments influence their decisions, operations, and future
              growth.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#six-factors"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-700 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-blue-200 transition hover:bg-blue-800"
              >
                Explore the Six Factors
                <ArrowRight size={17} />
              </a>
              <a
                href="#practical-example"
                className="inline-flex items-center gap-2 rounded-xl border border-blue-200 bg-white px-5 py-3 text-sm font-bold text-blue-700 transition hover:bg-blue-50"
              >
                View Example
                <ArrowUpRight size={17} />
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-5 text-sm text-slate-600">
              <span className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-blue-600" />
                Six external factors
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-blue-600" />
                Practical business example
              </span>
            </div>
          </div>

          <PestelHeroDiagram />
        </div>
      </section>

      {/* Introduction */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <SectionHeading
          eyebrow="Understanding the concept"
          title="What Is PESTEL Analysis?"
          description="Before making strategic decisions, a business needs to understand the external conditions in which it operates."
        />

        <div className="grid gap-6 lg:grid-cols-5">
          <div className="rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-6 lg:col-span-3">
            <p className="text-base leading-8 text-slate-700">
              <strong>PESTEL analysis</strong> is a strategic management
              framework used to identify and evaluate the major external
              factors that can influence an organisation. It examines the
              wider environment rather than focusing only on the organisation
              itself.
            </p>
            <p className="mt-4 text-base leading-8 text-slate-700">
              For example, a company planning to launch a new product may need
              to consider government regulations, inflation, customer
              preferences, technological developments, environmental
              expectations, and legal requirements.
            </p>
            <p className="mt-4 text-base leading-8 text-slate-700">
              By examining these factors, management can identify possible
              opportunities and threats and prepare suitable strategies.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm lg:col-span-2">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-700">
              <Globe size={25} />
            </div>
            <h3 className="mt-4 text-lg font-bold text-slate-900">
              The central idea
            </h3>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              A business does not operate in isolation. External changes can
              influence its costs, customers, competition, operations, and
              long-term plans.
            </p>
            <div className="mt-4 rounded-xl bg-indigo-50 p-4">
              <p className="text-sm font-bold text-indigo-800">
                PESTEL = External environment analysis
              </p>
            </div>
          </div>
        </div>
      </section>
<AdSlot />
      {/* Six factors */}
      <section id="six-factors" className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="The PESTEL framework"
            title="Six Factors of PESTEL Analysis"
            description="Each letter represents a different category of external influence. Together, these categories provide a structured view of the business environment."
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {pestelFactors.map((factor) => (
              <FactorCard key={factor.title} factor={factor} />
            ))}
          </div>
        </div>
      </section>

      {/* Detailed factor explanations */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <SectionHeading
          eyebrow="Understand each dimension"
          title="How Each PESTEL Factor Affects a Business"
          description="The following examples explain what managers examine under each category and why it matters."
        />

        <div className="space-y-5">
          <div className="grid gap-5 rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-5 sm:grid-cols-[1fr_2fr] sm:p-7">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                <Landmark size={25} />
              </div>
              <h3 className="mt-4 text-xl font-bold text-slate-900">
                1. Political Factors
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Government actions and political conditions that influence
                business activity.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                ["Government stability", "Political stability can influence investor confidence and long-term business planning."],
                ["Taxation policies", "Changes in corporate taxes or indirect taxes can affect costs and profitability."],
                ["Trade policies", "Import duties, export rules, and trade agreements can influence international business."],
                ["Government spending", "Public investment in infrastructure and services can create business opportunities."],
              ].map(([title, description]) => (
                <div key={title} className="rounded-xl border border-blue-100 bg-white p-4">
                  <p className="font-bold text-slate-900">{title}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-5 rounded-3xl border border-emerald-100 bg-gradient-to-br from-emerald-50 to-white p-5 sm:grid-cols-[1fr_2fr] sm:p-7">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                <Wallet size={25} />
              </div>
              <h3 className="mt-4 text-xl font-bold text-slate-900">
                2. Economic Factors
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Economic conditions that affect demand, purchasing power,
                investment, and operating costs.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                ["Inflation", "Rising prices can increase raw material, transport, and labour costs."],
                ["Interest rates", "Higher borrowing costs can make business expansion and investment more expensive."],
                ["Unemployment", "Employment conditions can influence household income and consumer demand."],
                ["Economic growth", "A growing economy may create demand for products and services, while a slowdown may reduce spending."],
              ].map(([title, description]) => (
                <div key={title} className="rounded-xl border border-emerald-100 bg-white p-4">
                  <p className="font-bold text-slate-900">{title}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-5 rounded-3xl border border-violet-100 bg-gradient-to-br from-violet-50 to-white p-5 sm:grid-cols-[1fr_2fr] sm:p-7">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-100 text-violet-700">
                <Users size={25} />
              </div>
              <h3 className="mt-4 text-xl font-bold text-slate-900">
                3. Social Factors
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Social characteristics, cultural values, and changes in
                people's behaviour.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                ["Population demographics", "Age distribution, population growth, and household structure can influence demand."],
                ["Consumer lifestyles", "Changes in how people live, work, travel, and spend can affect product preferences."],
                ["Education levels", "Education and skills can influence workforce availability and consumer expectations."],
                ["Cultural values", "Traditions, beliefs, and social attitudes can affect how products are perceived and purchased."],
              ].map(([title, description]) => (
                <div key={title} className="rounded-xl border border-violet-100 bg-white p-4">
                  <p className="font-bold text-slate-900">{title}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-5 rounded-3xl border border-amber-100 bg-gradient-to-br from-amber-50 to-white p-5 sm:grid-cols-[1fr_2fr] sm:p-7">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
                <Lightbulb size={25} />
              </div>
              <h3 className="mt-4 text-xl font-bold text-slate-900">
                4. Technological Factors
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Technological developments that can change products,
                operations, and competition.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                ["Automation", "Automated processes can improve productivity and change workforce requirements."],
                ["Artificial intelligence", "AI can create new services, improve analysis, and transform business processes."],
                ["Digital infrastructure", "Internet access, cloud computing, and digital platforms can enable new business models."],
                ["Research and development", "New discoveries and innovations can create products and change industry standards."],
              ].map(([title, description]) => (
                <div key={title} className="rounded-xl border border-amber-100 bg-white p-4">
                  <p className="font-bold text-slate-900">{title}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-5 rounded-3xl border border-green-100 bg-gradient-to-br from-green-50 to-white p-5 sm:grid-cols-[1fr_2fr] sm:p-7">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-green-700">
                <Leaf size={25} />
              </div>
              <h3 className="mt-4 text-xl font-bold text-slate-900">
                5. Environmental Factors
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Environmental conditions and sustainability concerns that
                influence business activity.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                ["Climate change", "Changing climate conditions can affect agriculture, supply chains, and infrastructure."],
                ["Natural resources", "Availability of water, energy, and raw materials can influence production costs."],
                ["Waste management", "Businesses may need to reduce waste and manage disposal responsibly."],
                ["Environmental expectations", "Customers, communities, and stakeholders may increasingly expect sustainable practices."],
              ].map(([title, description]) => (
                <div key={title} className="rounded-xl border border-green-100 bg-white p-4">
                  <p className="font-bold text-slate-900">{title}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-5 rounded-3xl border border-rose-100 bg-gradient-to-br from-rose-50 to-white p-5 sm:grid-cols-[1fr_2fr] sm:p-7">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-rose-100 text-rose-700">
                <Scale size={25} />
              </div>
              <h3 className="mt-4 text-xl font-bold text-slate-900">
                6. Legal Factors
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Laws, regulations, and legal obligations that businesses must
                consider.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                ["Labour laws", "Employment rules can determine wages, working conditions, and employee rights."],
                ["Consumer protection", "Businesses must follow applicable rules relating to product safety, information, and customer rights."],
                ["Data protection", "Privacy and data protection requirements can affect how businesses collect and use personal information."],
                ["Health and safety", "Workplace and product safety rules can influence business processes and responsibilities."],
              ].map(([title, description]) => (
                <div key={title} className="rounded-xl border border-rose-100 bg-white p-4">
                  <p className="font-bold text-slate-900">{title}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
<AdSlot />
      {/* Process */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Practical application"
            title="How to Conduct a PESTEL Analysis"
            description="A useful analysis involves more than listing six categories. Each factor should be connected to its possible business impact and an appropriate response."
          />

          <ProcessDiagram />

          <div className="mt-6 rounded-2xl border border-blue-200 bg-gradient-to-r from-blue-50 to-white p-5">
            <div className="flex items-start gap-3">
              <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-700">
                <Lightbulb size={19} />
              </div>
              <div>
                <h3 className="font-bold text-slate-900">
                  Important point
                </h3>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  Do not treat every external factor as equally important.
                  Prioritise factors based on their relevance, likelihood of
                  change, and potential impact on the organisation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Example */}
      <section id="practical-example" className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <SectionHeading
          eyebrow="Learn through an example"
          title="PESTEL Analysis in a Realistic Business Situation"
          description="Consider how a clothing retailer might use the framework before expanding into a new market."
        />

        <BusinessExample />
      </section>

      {/* Opportunities and threats */}
      <section className="bg-slate-950 py-16 text-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="mb-2 text-sm font-bold uppercase tracking-wider text-blue-300">
                From analysis to action
              </p>
              <h2 className="text-3xl font-bold tracking-tight">
                Turning External Factors into Strategic Decisions
              </h2>
              <p className="mt-4 leading-8 text-slate-300">
                Identifying an external factor is only the beginning. Managers
                must consider what it means for the organisation and decide
                how to respond.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-400/15 text-emerald-300">
                  <TrendingUp size={23} />
                </div>
                <h3 className="mt-4 text-xl font-bold text-emerald-300">
                  Opportunities
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  Favourable external developments that a business may use to
                  improve performance or achieve growth.
                </p>
                <p className="mt-3 text-sm font-bold text-white">
                  Example: Growing demand for online shopping.
                </p>
              </div>

              <div className="rounded-2xl border border-rose-400/20 bg-rose-400/10 p-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-rose-400/15 text-rose-300">
                  <AlertTriangle size={23} />
                </div>
                <h3 className="mt-4 text-xl font-bold text-rose-300">
                  Threats
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  Unfavourable external developments that may create risks,
                  increase costs, or weaken business performance.
                </p>
                <p className="mt-3 text-sm font-bold text-white">
                  Example: A sudden increase in import duties.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="font-bold text-white">
              Remember
            </p>
            <p className="mt-2 text-sm leading-7 text-slate-300">
              PESTEL identifies external factors. Whether a factor becomes an
              opportunity or a threat depends on the organisation, its
              circumstances, and the way it responds.
            </p>
          </div>
        </div>
      </section>
<AdSlot />
      {/* Importance */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <SectionHeading
          eyebrow="Business applications"
          title="Importance of PESTEL Analysis"
          description="PESTEL provides a structured way to understand external changes before they become major business challenges or opportunities."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: Target,
              title: "Better strategic planning",
              description:
                "Helps management consider external conditions while setting business objectives and long-term plans.",
            },
            {
              icon: ShieldCheck,
              title: "Risk identification",
              description:
                "Highlights possible external risks, allowing businesses to prepare responses in advance.",
            },
            {
              icon: Globe,
              title: "Market understanding",
              description:
                "Helps organisations understand the political, economic, social, and regulatory conditions of a market.",
            },
            {
              icon: Lightbulb,
              title: "Opportunity discovery",
              description:
                "Can reveal opportunities arising from innovation, social changes, policy developments, or market trends.",
            },
            {
              icon: Factory,
              title: "Business adaptation",
              description:
                "Encourages organisations to adapt operations and strategies as the external environment changes.",
            },
            {
              icon: TrendingUp,
              title: "Informed decisions",
              description:
                "Supports decisions about expansion, investment, product development, and entering new markets.",
            },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-blue-200 hover:shadow-md"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                  <Icon size={22} />
                </div>
                <h3 className="mt-4 font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Advantages and limitations */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Critical understanding"
            title="Advantages and Limitations of PESTEL Analysis"
            description="PESTEL is useful for understanding the external environment, but it should be applied carefully and supported by reliable information."
          />

          <div className="grid gap-5 lg:grid-cols-2">
            <div className="rounded-3xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-white p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                  <CheckCircle2 size={23} />
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  Advantages
                </h3>
              </div>

              <ul className="mt-5 space-y-4">
                {[
                  ["Structured analysis", "Organises external factors into six clear categories."],
                  ["Wider perspective", "Encourages managers to look beyond the organisation and its immediate competitors."],
                  ["Early risk awareness", "Can help identify external changes before they significantly affect the business."],
                  ["Supports planning", "Provides useful information for strategic decisions and market evaluation."],
                  ["Flexible application", "Can be applied to different industries, organisations, and market-entry decisions."],
                ].map(([title, description]) => (
                  <li key={title} className="flex gap-3">
                    <CheckCircle2 size={19} className="mt-1 shrink-0 text-emerald-600" />
                    <div>
                      <p className="font-bold text-slate-900">{title}</p>
                      <p className="mt-1 text-sm leading-6 text-slate-600">{description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-amber-200 bg-gradient-to-br from-amber-50 to-white p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
                  <AlertTriangle size={23} />
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  Limitations
                </h3>
              </div>

              <ul className="mt-5 space-y-4">
                {[
                  ["Changing environment", "External conditions can change quickly, making an analysis outdated."],
                  ["Information challenges", "Reliable and relevant information may be difficult to collect."],
                  ["Uncertain outcomes", "Identifying a factor does not guarantee that its future impact can be predicted accurately."],
                  ["Broad categories", "The framework may overlook industry-specific details if the analysis is too general."],
                  ["No direct action plan", "PESTEL identifies external influences but does not automatically provide the best strategic response."],
                ].map(([title, description]) => (
                  <li key={title} className="flex gap-3">
                    <AlertTriangle size={19} className="mt-1 shrink-0 text-amber-600" />
                    <div>
                      <p className="font-bold text-slate-900">{title}</p>
                      <p className="mt-1 text-sm leading-6 text-slate-600">{description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
<AdSlot />
      {/* SWOT comparison */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <SectionHeading
          eyebrow="Related strategic management tool"
          title="PESTEL Analysis vs SWOT Analysis"
          description="Both frameworks support strategic planning, but they examine different aspects of the business environment."
        />

        <ComparisonTable />

        <div className="mt-5 rounded-2xl border border-blue-100 bg-gradient-to-r from-blue-50 to-white p-5">
          <h3 className="font-bold text-slate-900">
            Can PESTEL and SWOT be used together?
          </h3>
          <p className="mt-2 text-sm leading-7 text-slate-600">
            Yes. PESTEL can help identify external developments, which can
            then inform the opportunities and threats in a SWOT analysis.
            SWOT also considers the organisation's internal strengths and
            weaknesses. Using both can provide a broader basis for strategic
            planning.
          </p>
          <Link
            href="/strategic-management/swot-analysis"
            className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-blue-700 hover:text-blue-900"
          >
            Learn about SWOT Analysis
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Common questions"
            title="Frequently Asked Questions"
            description="Quick answers to common questions about PESTEL analysis."
          />

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-slate-200 bg-white p-5 open:border-blue-200 open:shadow-sm"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-slate-900">
                  <span>
                    {index + 1}. {faq.question}
                  </span>
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-700 transition group-open:rotate-45">
                    <ArrowRight size={16} />
                  </span>
                </summary>
                <p className="mt-4 border-t border-slate-100 pt-4 text-sm leading-7 text-slate-600">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Conclusion and related topics */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-indigo-100 p-6 sm:p-9">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">
              <Globe size={28} />
            </div>
            <h2 className="mt-5 text-2xl font-bold text-slate-900 sm:text-3xl">
              Conclusion
            </h2>
            <p className="mt-4 leading-8 text-slate-600">
              PESTEL analysis is a strategic management framework that helps
              organisations understand the external forces influencing their
              activities. By examining political, economic, social,
              technological, environmental, and legal factors, businesses can
              recognise potential opportunities, prepare for threats, and
              make better-informed strategic decisions.
            </p>
          </div>

        
        </div>
      </section>
    </main>
  );
}
