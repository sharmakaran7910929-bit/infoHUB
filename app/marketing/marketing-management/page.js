
import Link from "next/link";
import {
  ArrowRight,
  Target,
  Users,
  Lightbulb,
  ClipboardList,
  BarChart3,
  Settings,
  Search,
  Megaphone,
  CheckCircle2,
  TrendingUp,
  Wallet,
  RefreshCw,
  BriefcaseBusiness,
  Handshake,
  Eye,
  Layers,
  Compass,
  Gauge,
  Building2,
  Package,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Activity,
  ChartNoAxesCombined,
} from "lucide-react";
import AdSlot from "../../../components/AdSlot";

export const metadata = {
  title: "Marketing Management | Process, Functions, Strategy & Examples | PriceTag HUB",
  description:
    "Understand marketing management, its objectives, functions, process, strategies, marketing planning, implementation, control, KPIs, and real-world business examples.",
};

function SectionHeading({ eyebrow, title, description, dark = false }) {
  return (
    <div className="mb-8 max-w-3xl">
      {eyebrow && (
        <p
          className={`mb-2 text-sm font-bold uppercase tracking-wider ${
            dark ? "text-blue-300" : "text-blue-600"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`text-3xl font-bold tracking-tight md:text-4xl ${
          dark ? "text-white" : "text-gray-900"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base leading-7 md:text-lg ${
            dark ? "text-gray-300" : "text-gray-600"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

const functions = [
  {
    icon: Search,
    title: "Market Analysis",
    color: "bg-blue-100 text-blue-700",
    description:
      "Studying customers, competitors, market trends, demand, opportunities and threats before making decisions.",
  },
  {
    icon: ClipboardList,
    title: "Marketing Planning",
    color: "bg-indigo-100 text-indigo-700",
    description:
      "Setting marketing objectives, choosing target markets, developing strategies, preparing budgets and defining actions.",
  },
  {
    icon: Layers,
    title: "Organizing",
    color: "bg-violet-100 text-violet-700",
    description:
      "Assigning responsibilities, arranging resources, structuring teams and coordinating marketing activities.",
  },
  {
    icon: Settings,
    title: "Implementation",
    color: "bg-cyan-100 text-cyan-700",
    description:
      "Turning plans into actual campaigns, product activities, promotions, distribution and customer engagement.",
  },
  {
    icon: Gauge,
    title: "Control & Evaluation",
    color: "bg-emerald-100 text-emerald-700",
    description:
      "Comparing results with targets, measuring performance, identifying problems and making improvements.",
  },
];

const process = [
  {
    number: "01",
    title: "Understand the Market",
    icon: Search,
    description:
      "Research customer needs, buying behaviour, competition, market size, trends and business opportunities.",
  },
  {
    number: "02",
    title: "Set Marketing Objectives",
    icon: Target,
    description:
      "Define what the business wants to achieve, such as sales growth, awareness, market share or customer retention.",
  },
  {
    number: "03",
    title: "Select Target Customers",
    icon: Users,
    description:
      "Segment the market and identify the customers the business can serve most effectively.",
  },
  {
    number: "04",
    title: "Develop Marketing Strategy",
    icon: Compass,
    description:
      "Decide positioning, value proposition, product, pricing, distribution and promotional approach.",
  },
  {
    number: "05",
    title: "Prepare the Marketing Plan",
    icon: ClipboardList,
    description:
      "Set activities, timelines, budgets, responsibilities, channels and expected results.",
  },
  {
    number: "06",
    title: "Execute the Plan",
    icon: Megaphone,
    description:
      "Launch campaigns, deliver products, communicate with customers and implement planned activities.",
  },
  {
    number: "07",
    title: "Measure Performance",
    icon: BarChart3,
    description:
      "Track sales, leads, conversion, spending, customer response and other relevant performance indicators.",
  },
  {
    number: "08",
    title: "Improve & Adapt",
    icon: RefreshCw,
    description:
      "Learn from results, fix weaknesses, change strategies and continuously improve marketing effectiveness.",
  },
];

const objectives = [
  {
    icon: TrendingUp,
    title: "Increase Sales & Revenue",
    description:
      "Generate demand, attract potential buyers and convert customer interest into profitable sales.",
  },
  {
    icon: Eye,
    title: "Build Brand Awareness",
    description:
      "Help people recognize the business, understand its offerings and remember it when they need a product.",
  },
  {
    icon: Users,
    title: "Understand Customer Needs",
    description:
      "Identify what customers value, what problems they face and what influences their purchasing decisions.",
  },
  {
    icon: Target,
    title: "Achieve Marketing Goals",
    description:
      "Keep marketing activities aligned with specific, measurable and realistic business objectives.",
  },
  {
    icon: Handshake,
    title: "Create Customer Relationships",
    description:
      "Develop trust, satisfaction, loyalty and long-term relationships instead of focusing only on one-time sales.",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Improve Market Position",
    description:
      "Strengthen competitiveness, differentiate offerings and grow the business in its chosen market.",
  },
];

const strategic = [
  {
    title: "Strategic Marketing Management",
    subtitle: "Long-term direction",
    color: "border-blue-300 bg-blue-50",
    icon: Compass,
    points: [
      "Which markets should we serve?",
      "Who are our target customers?",
      "How should our brand be positioned?",
      "What competitive advantage can we build?",
      "Where should we invest for long-term growth?",
    ],
  },
  {
    title: "Operational Marketing Management",
    subtitle: "Daily & short-term execution",
    color: "border-violet-300 bg-violet-50",
    icon: Settings,
    points: [
      "Which campaign should run this month?",
      "How much budget should each channel receive?",
      "What content should be published?",
      "Who will execute each activity?",
      "How will results be measured?",
    ],
  },
];

const metrics = [
  {
    name: "Sales Revenue",
    meaning: "The value of sales generated during a period.",
  },
  {
    name: "Conversion Rate",
    meaning: "The percentage of people who complete the desired action.",
  },
  {
    name: "Customer Acquisition Cost (CAC)",
    meaning: "The average cost of acquiring a new customer.",
  },
  {
    name: "Return on Marketing Investment (ROMI)",
    meaning: "The return generated relative to marketing investment.",
  },
  {
    name: "Customer Retention",
    meaning: "The ability to keep customers returning over time.",
  },
  {
    name: "Market Share",
    meaning: "The business's portion of total sales in a particular market.",
  },
  {
    name: "Customer Satisfaction",
    meaning: "How satisfied customers are with their experience and offering.",
  },
  {
    name: "Lead Generation",
    meaning: "The number and quality of potential customers attracted.",
  },
];

const faqs = [
  {
    question: "What is marketing management in simple words?",
    answer:
      "Marketing management is the process of planning, organizing, executing and evaluating activities that help a business understand customers, promote products, achieve sales and build long-term customer relationships.",
  },
  {
    question: "What are the main functions of marketing management?",
    answer:
      "Its main functions include market research, planning, target market selection, product and pricing decisions, promotion, distribution, implementation, coordination and performance control.",
  },
  {
    question: "What are the 5 major marketing management functions?",
    answer:
      "A simplified grouping is market analysis, planning, organizing, implementation and control. Different textbooks may classify these functions differently or include additional functions.",
  },
  {
    question: "What is the difference between marketing and marketing management?",
    answer:
      "Marketing includes the broader activities of understanding customers, creating value, communicating offerings and building relationships. Marketing management focuses on directing these activities through decisions, planning, execution and evaluation.",
  },
  {
    question: "Why is marketing management important for small businesses?",
    answer:
      "It helps small businesses use limited money and time more effectively, identify the right customers, avoid ineffective marketing activities, compete with larger businesses and improve sales opportunities.",
  },
  {
    question: "Is marketing management only about advertising?",
    answer:
      "No. Advertising is only one promotional activity. Marketing management also involves research, customer selection, product development, pricing, distribution, customer experience and measuring results.",
  },
  {
    question: "What is the marketing management process?",
    answer:
      "It is a continuous cycle of market research, objective setting, customer selection, strategy development, planning, implementation, performance measurement and improvement.",
  },
  {
    question: "Who is responsible for marketing management?",
    answer:
      "Marketing managers or business owners generally lead marketing management. In larger organizations, different teams may handle research, branding, digital marketing, product marketing, advertising and analytics.",
  },
];

export default function MarketingManagementPage() {
  return (
    <main className="overflow-hidden">
      {/* HERO */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-indigo-100 px-4 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-bold text-blue-700 shadow-sm">
                <BriefcaseBusiness size={16} />
                Business Management
              </div>

              <h1 className="text-4xl font-bold leading-tight tracking-tight text-gray-950 md:text-6xl">
                Marketing
                <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Management
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
                How businesses turn market understanding into effective plans,
                coordinated actions, customer value, sales growth and measurable
                results.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="#marketing-management-process"
                  className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-bold text-white transition hover:bg-blue-700"
                >
                  Explore the Process <ArrowRight size={18} />
                </Link>
                <Link
                  href="#example"
                  className="inline-flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-5 py-3 font-bold text-gray-700 transition hover:border-blue-300 hover:text-blue-700"
                >
                  Practical Example
                </Link>
              </div>
            </div>

            {/* Marketing management visual */}
            <div className="relative">
              <div className="rounded-3xl border border-blue-100 bg-white p-5 shadow-xl shadow-blue-900/5 md:p-7">
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-bold text-gray-500">
                      Marketing Management System
                    </p>
                    <p className="mt-1 text-lg font-bold text-gray-900">
                      From insight to growth
                    </p>
                  </div>
                  <div className="rounded-xl bg-blue-100 p-3 text-blue-700">
                    <ChartNoAxesCombined size={26} />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-2xl bg-blue-50 p-4">
                    <Search className="mb-3 text-blue-600" size={24} />
                    <p className="font-bold text-gray-900">Market Insight</p>
                    <p className="mt-1 text-xs leading-5 text-gray-500">
                      Research & customer understanding
                    </p>
                  </div>
                  <div className="rounded-2xl bg-indigo-50 p-4">
                    <Target className="mb-3 text-indigo-600" size={24} />
                    <p className="font-bold text-gray-900">Strategy</p>
                    <p className="mt-1 text-xs leading-5 text-gray-500">
                      Goals & direction
                    </p>
                  </div>
                  <div className="rounded-2xl bg-violet-50 p-4">
                    <Settings className="mb-3 text-violet-600" size={24} />
                    <p className="font-bold text-gray-900">Execution</p>
                    <p className="mt-1 text-xs leading-5 text-gray-500">
                      Campaigns & activities
                    </p>
                  </div>
                  <div className="rounded-2xl bg-emerald-50 p-4">
                    <TrendingUp className="mb-3 text-emerald-600" size={24} />
                    <p className="font-bold text-gray-900">Results</p>
                    <p className="mt-1 text-xs leading-5 text-gray-500">
                      Measurement & growth
                    </p>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-4 text-center text-white">
                  <RefreshCw size={19} />
                  <p className="text-sm font-bold">
                    Continuous Analysis, Improvement & Growth
                  </p>
                </div>
              </div>
              <div className="absolute -bottom-5 -right-4 -z-10 h-32 w-32 rounded-full bg-indigo-300/30 blur-2xl" />
              <div className="absolute -left-4 -top-5 -z-10 h-32 w-32 rounded-full bg-blue-300/30 blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* DEFINITION */}
      <section className="px-4 py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Understanding the Concept"
            title="What Is Marketing Management?"
            description="Marketing management is the process of directing and coordinating marketing activities so a business can achieve its objectives while creating value for customers."
          />

          <div className="grid gap-8 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <div className="rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-6 md:p-8">
                <div className="mb-4 inline-flex rounded-xl bg-blue-100 p-3 text-blue-700">
                  <Lightbulb size={26} />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  The Core Idea
                </h3>
                <p className="mt-4 text-base leading-8 text-gray-700">
                  A business cannot rely only on having a good product. It must
                  understand who needs that product, how much they are willing to
                  pay, where they can buy it, how they will discover it and why
                  they should choose it over alternatives.
                </p>
                <p className="mt-4 text-base leading-8 text-gray-700">
                  Marketing management brings these decisions together. It ensures
                  that marketing efforts are not random activities, but planned,
                  coordinated and evaluated actions that support the overall
                  business.
                </p>
              </div>
            </div>

            <div className="space-y-4 lg:col-span-2">
              <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                <p className="text-sm font-bold text-blue-600">It answers</p>
                <h3 className="mt-2 text-lg font-bold text-gray-900">
                  Who are our customers?
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  What do they need, value, prefer and expect?
                </p>
              </div>
              <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                <p className="text-sm font-bold text-indigo-600">It decides</p>
                <h3 className="mt-2 text-lg font-bold text-gray-900">
                  How should we serve them?
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  What product, price, positioning, channels and promotion should
                  we use?
                </p>
              </div>
              <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                <p className="text-sm font-bold text-emerald-600">It evaluates</p>
                <h3 className="mt-2 text-lg font-bold text-gray-900">
                  Are we achieving results?
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Are customers responding and are business goals being met?
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
<AdSlot />
      {/* MARKETING VS MARKETING MANAGEMENT */}
      <section className="bg-gray-50 px-4 py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Conceptual Difference"
            title="Marketing vs. Marketing Management"
            description="Marketing is the broader customer-value activity. Marketing management is the discipline of planning and directing that activity toward defined goals."
          />

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-gray-200 bg-white p-6 md:p-8">
              <div className="mb-4 inline-flex rounded-xl bg-sky-100 p-3 text-sky-700">
                <Megaphone size={26} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Marketing</h3>
              <p className="mt-3 leading-7 text-gray-600">
                The activities through which a business understands customer needs,
                creates value, communicates its offerings, delivers products and
                builds relationships.
              </p>
              <ul className="mt-5 space-y-3">
                {[
                  "Understanding customer needs",
                  "Creating and delivering value",
                  "Building customer relationships",
                  "Communicating products and services",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-gray-700"
                  >
                    <CheckCircle2
                      size={18}
                      className="mt-0.5 shrink-0 text-sky-600"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-blue-200 bg-gradient-to-br from-blue-50 to-white p-6 md:p-8">
              <div className="mb-4 inline-flex rounded-xl bg-blue-100 p-3 text-blue-700">
                <ClipboardList size={26} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                Marketing Management
              </h3>
              <p className="mt-3 leading-7 text-gray-600">
                The managerial process of analyzing, planning, organizing,
                implementing and controlling marketing activities to achieve
                objectives.
              </p>
              <ul className="mt-5 space-y-3">
                {[
                  "Setting objectives and direction",
                  "Choosing target markets and strategies",
                  "Managing people, budgets and activities",
                  "Measuring results and making improvements",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-gray-700"
                  >
                    <CheckCircle2
                      size={18}
                      className="mt-0.5 shrink-0 text-blue-600"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

  {/* OBJECTIVES */}
  <section className="px-4 py-16 md:py-20">
    <div className="mx-auto max-w-7xl">
      <SectionHeading
        eyebrow="Business Goals"
        title="Objectives of Marketing Management"
        description="Marketing management helps a business use its resources to achieve customer and business outcomes. Objectives vary depending on the company's size, industry, stage and strategy."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {objectives.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              className="rounded-2xl border border-gray-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-4 inline-flex rounded-xl bg-blue-50 p-3 text-blue-700">
                <Icon size={24} />
              </div>
              <h3 className="text-lg font-bold text-gray-900">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-gray-600">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  </section>

  {/* FUNCTIONS */}
  <section className="bg-gradient-to-br from-gray-50 to-blue-50 px-4 py-16 md:py-20">
    <div className="mx-auto max-w-7xl">
      <SectionHeading
        eyebrow="Management Responsibilities"
        title="Functions of Marketing Management"
        description="Marketing management performs several connected functions. Together, they ensure that decisions are made, activities are coordinated, plans are executed and outcomes are evaluated."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {functions.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              className="rounded-2xl border border-white bg-white p-6 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <div className={`rounded-xl p-3 ${item.color}`}>
                  <Icon size={24} />
                </div>
                <span className="text-3xl font-bold text-gray-200">
                  0{index + 1}
                </span>
              </div>
              <h3 className="mt-5 text-xl font-bold text-gray-900">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-gray-600">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>

      <div className="mt-8 rounded-3xl bg-white p-6 shadow-sm md:p-8">
        <h3 className="text-xl font-bold text-gray-900">
          Why These Functions Are Connected
        </h3>
        <p className="mt-3 leading-7 text-gray-600">
          Research informs planning. Planning determines how resources are
          organized. Organization enables execution. Control reveals whether the
          plan worked. Findings from control become inputs for the next round of
          research and planning.
        </p>
      </div>
    </div>
  </section>
<AdSlot />
  {/* PROCESS */}
  <section id="marketing-management-process" className="px-4 py-16 md:py-20">
    <div className="mx-auto max-w-7xl">
      <SectionHeading
        eyebrow="Step-by-Step"
        title="Marketing Management Process"
        description="A business moves through a series of steps to identify market opportunities, develop an effective approach, execute activities and improve results. The process is continuous rather than strictly one-way."
      />

      <div className="relative">
        <div className="hidden lg:block absolute left-8 top-8 bottom-8 w-0.5 bg-gradient-to-b from-blue-200 via-indigo-200 to-emerald-200" />

        <div className="space-y-5">
          {process.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.number}
                className="relative flex gap-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm md:gap-6 md:p-6"
              >
                <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">
                  <Icon size={25} />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-sm font-bold text-blue-600">
                      STEP {item.number}
                    </span>
                    <h3 className="text-lg font-bold text-gray-900">
                      {item.title}
                    </h3>
                  </div>
                  <p className="mt-2 text-sm leading-7 text-gray-600">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Continuous loop visual */}
      <div className="mt-10 rounded-3xl bg-gray-950 p-6 text-white md:p-10">
        <h3 className="text-xl font-bold text-white">
          Marketing Management Is a Continuous Cycle
        </h3>
        <p className="mt-2 text-sm leading-6 text-gray-300">
          Results are not the end of the process. They help management make
          better decisions in the next cycle.
        </p>
        <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["Research", Search],
            ["Plan", ClipboardList],
            ["Execute", Megaphone],
            ["Measure & Improve", RefreshCw],
          ].map(([label, Icon], index) => (
            <div
              key={label}
              className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4"
            >
              <div className="rounded-lg bg-blue-500/20 p-2 text-blue-300">
                <Icon size={21} />
              </div>
              <div className="flex items-center gap-2">
                <p className="font-bold text-white">{label}</p>
                {index < 3 && (
                  <ArrowRight className="hidden text-gray-500 xl:block" size={16} />
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-5 flex items-center gap-2 text-sm font-bold text-blue-300">
          <RefreshCw size={16} />
          Feedback returns to research and planning
        </div>
      </div>
    </div>
  </section>

  {/* STRATEGIC AND OPERATIONAL */}
  <section className="bg-gray-50 px-4 py-16 md:py-20">
    <div className="mx-auto max-w-7xl">
      <SectionHeading
        eyebrow="Two Levels of Decision-Making"
        title="Strategic vs. Operational Marketing Management"
        description="Marketing management includes both long-term decisions about the direction of the business and practical decisions about how marketing activities will be carried out."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {strategic.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              className={`rounded-3xl border p-6 md:p-8 ${item.color}`}
            >
              <div className="mb-5 inline-flex rounded-xl bg-white p-3 text-blue-700 shadow-sm">
                <Icon size={26} />
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                {item.title}
              </h3>
              <p className="mt-2 text-sm font-bold text-gray-500">
                {item.subtitle}
              </p>
              <ul className="mt-5 space-y-3">
                {item.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2 text-sm leading-6 text-gray-700"
                  >
                    <CheckCircle2
                      size={17}
                      className="mt-1 shrink-0 text-blue-600"
                    />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-6">
        <p className="text-sm leading-7 text-gray-600">
          <span className="font-bold text-gray-900">Example:</span> Deciding to
          target college students with affordable laptops is a strategic decision.
          Creating a student discount campaign, selecting advertising channels and
          scheduling promotional posts are operational decisions that support the
          strategy.
        </p>
      </div>
    </div>
  </section>

  {/* AREAS MANAGED */}
  <section className="px-4 py-16 md:py-20">
    <div className="mx-auto max-w-7xl">
      <SectionHeading
        eyebrow="What Does a Marketing Manager Handle?"
        title="Areas Covered by Marketing Management"
        description="Marketing management coordinates different areas of the business that influence how an offering is created, presented, priced, delivered and experienced."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          {
            icon: Search,
            title: "Market Research",
            text: "Customer needs, competitors, trends and demand",
          },
          {
            icon: Package,
            title: "Product Management",
            text: "Product features, quality, design and development",
          },
          {
            icon: Wallet,
            title: "Pricing",
            text: "Price decisions, offers, value and profitability",
          },
          {
            icon: MapPin,
            title: "Distribution",
            text: "Availability, channels, logistics and access",
          },
          {
            icon: Megaphone,
            title: "Promotion",
            text: "Advertising, campaigns, public relations and communication",
          },
          {
            icon: Users,
            title: "Customer Management",
            text: "Customer experience, satisfaction, loyalty and retention",
          },
          {
            icon: Building2,
            title: "Brand Management",
            text: "Brand identity, positioning, image and differentiation",
          },
          {
            icon: BarChart3,
            title: "Marketing Analytics",
            text: "Performance data, reporting and decision support",
          },
        ].map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              className="rounded-2xl border border-gray-200 p-5 transition hover:border-blue-200 hover:shadow-md"
            >
              <Icon className="text-blue-600" size={24} />
              <h3 className="mt-4 font-bold text-gray-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">{item.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
<AdSlot />
  {/* MARKETING MIX */}
  <section className="bg-gradient-to-br from-indigo-50 via-blue-50 to-white px-4 py-16 md:py-20">
    <div className="mx-auto max-w-7xl">
      <SectionHeading
        eyebrow="Strategy Framework"
        title="Marketing Management and the 4Ps"
        description="Marketing management coordinates the marketing mix so that product, price, place and promotion work together instead of operating as disconnected decisions."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {[
          {
            letter: "P1",
            title: "Product",
            icon: Package,
            color: "bg-blue-100 text-blue-700",
            question: "What value are we offering?",
            text: "Product features, quality, design, benefits and customer problem-solving.",
          },
          {
            letter: "P2",
            title: "Price",
            icon: Wallet,
            color: "bg-violet-100 text-violet-700",
            question: "What should customers pay?",
            text: "Pricing, discounts, perceived value, affordability and margins.",
          },
          {
            letter: "P3",
            title: "Place",
            icon: MapPin,
            color: "bg-emerald-100 text-emerald-700",
            question: "Where can customers buy it?",
            text: "Retail, distribution, delivery, online channels and availability.",
          },
          {
            letter: "P4",
            title: "Promotion",
            icon: Megaphone,
            color: "bg-orange-100 text-orange-700",
            question: "How will customers discover it?",
            text: "Advertising, content, sales promotions, communication and outreach.",
          },
        ].map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              className="rounded-3xl border border-white bg-white p-6 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <div className={`rounded-xl p-3 ${item.color}`}>
                  <Icon size={24} />
                </div>
                <span className="text-3xl font-bold text-gray-200">
                  {item.letter}
                </span>
              </div>
              <h3 className="mt-5 text-xl font-bold text-gray-900">
                {item.title}
              </h3>
              <p className="mt-2 text-sm font-bold text-gray-700">
                {item.question}
              </p>
              <p className="mt-3 text-sm leading-7 text-gray-600">{item.text}</p>
            </div>
          );
        })}
      </div>

      <div className="mt-8 rounded-3xl bg-white p-6 shadow-sm md:p-8">
        <h3 className="text-xl font-bold text-gray-900">
          Why the 4Ps Must Be Managed Together
        </h3>
        <p className="mt-3 leading-7 text-gray-600">
          A premium product with an extremely low price may struggle to maintain
          profitability. A good product with poor distribution may be difficult
          to buy. A competitively priced product with ineffective promotion may
          remain unknown. Marketing management balances these decisions to create
          a consistent market offering.
        </p>
      </div>
    </div>
  </section>

  {/* REAL EXAMPLE */}
  <section id="example" className="px-4 py-16 md:py-20">
    <div className="mx-auto max-w-7xl">
      <SectionHeading
        eyebrow="Putting It Into Practice"
        title="Marketing Management Example | A Local Bakery"
        description="Imagine a bakery that makes good-quality cakes but is experiencing low sales. Instead of spending money randomly on advertising, the owner applies marketing management."
      />

      <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">
        <div className="bg-gradient-to-r from-orange-500 to-amber-500 p-6 text-white md:p-8">
          <div className="flex items-center gap-3">
            <Building2 size={28} />
            <div>
              <h3 className="text-xl font-bold text-white">Business Situation</h3>
              <p className="mt-1 text-sm text-orange-50">
                Good products, but low customer awareness and weak sales
              </p>
            </div>
          </div>
        </div>

        <div className="p-6 md:p-8">
          <div className="grid gap-4 md:grid-cols-2">
            {[
              {
                step: "01",
                title: "Research",
                icon: Search,
                text: "The owner discovers that local customers want birthday cakes, customized designs and quick delivery.",
              },
              {
                step: "02",
                title: "Objectives",
                icon: Target,
                text: "Set a target to increase monthly orders and build repeat customers within the next three months.",
              },
              {
                step: "03",
                title: "Strategy",
                icon: Compass,
                text: "Target families, students and people celebrating special occasions with attractive customized options.",
              },
              {
                step: "04",
                title: "Product & Pricing",
                icon: Package,
                text: "Introduce popular cake sizes, clear pricing, customization options and a range of affordable products.",
              },
              {
                step: "05",
                title: "Promotion & Distribution",
                icon: Megaphone,
                text: "Use local social media, customer referrals, product photos, WhatsApp ordering and reliable delivery.",
              },
              {
                step: "06",
                title: "Measurement",
                icon: BarChart3,
                text: "Track orders, revenue, promotion spending, repeat customers and which products generate the most demand.",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.step}
                  className="flex gap-4 rounded-2xl border border-gray-100 bg-gray-50 p-5"
                >
                  <div className="rounded-xl bg-white p-3 text-orange-600 shadow-sm">
                    <Icon size={23} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-orange-600">
                      STEP {item.step}
                    </p>
                    <h4 className="mt-1 font-bold text-gray-900">{item.title}</h4>
                    <p className="mt-2 text-sm leading-6 text-gray-600">{item.text}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-6 rounded-2xl bg-emerald-50 p-5">
            <div className="flex gap-3">
              <TrendingUp className="shrink-0 text-emerald-700" size={23} />
              <div>
                <h4 className="font-bold text-emerald-900">
                  Expected Business Outcome
                </h4>
                <p className="mt-2 text-sm leading-7 text-emerald-800">
                  Better customer understanding, more relevant products, improved
                  visibility, efficient use of promotional spending and stronger
                  opportunities for repeat sales. Actual outcomes depend on
                  execution and market response.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* KPIs */}
  <section className="bg-gray-950 px-4 py-16 md:py-20">
    <div className="mx-auto max-w-7xl">
      <SectionHeading
        eyebrow="Performance & Control"
        title="How Marketing Management Measures Success"
        description="Marketing management uses performance indicators to determine whether activities are producing the intended outcomes and whether resources are being used effectively."
        dark
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((item) => (
          <div
            key={item.name}
            className="rounded-2xl border border-white/10 bg-white/5 p-5"
          >
            <Activity className="mb-4 text-blue-400" size={23} />
            <h3 className="font-bold text-white">{item.name}</h3>
            <p className="mt-2 text-sm leading-6 text-gray-400">
              {item.meaning}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-3xl border border-blue-500/20 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 p-6 md:p-8">
        <div className="flex items-start gap-4">
          <BarChart3 className="shrink-0 text-blue-400" size={26} />
          <div>
            <h3 className="font-bold text-white">
              Measurement Must Match the Objective
            </h3>
            <p className="mt-3 text-sm leading-7 text-gray-300">
              If the goal is brand awareness, reach and recognition may be
              relevant. If the goal is sales, revenue, conversion, cost and
              profitability are more important. A marketing manager should not
              assume that high views or clicks automatically mean business success.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* IMPORTANCE */}
  <section className="px-4 py-16 md:py-20">
    <div className="mx-auto max-w-7xl">
      <SectionHeading
        eyebrow="Business Value"
        title="Importance of Marketing Management"
        description="Marketing management is important because it gives businesses a systematic way to make customer-focused decisions, compete in the market and manage resources."
      />

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-4">
          {[
            [
              "Reduces Random Decisions",
              "Businesses use market information and objectives rather than depending only on assumptions.",
            ],
            [
              "Improves Resource Allocation",
              "Budgets, people and time can be directed toward activities with better potential.",
            ],
            [
              "Strengthens Customer Focus",
              "Products, services and communications are shaped around customer needs.",
            ],
            [
              "Supports Competitive Advantage",
              "A business can differentiate itself through value, service, positioning or experience.",
            ],
          ].map(([title, text]) => (
            <div
              key={title}
              className="flex gap-4 rounded-2xl border border-gray-200 p-5"
            >
              <CheckCircle2 className="mt-1 shrink-0 text-blue-600" size={21} />
              <div>
                <h3 className="font-bold text-gray-900">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">{text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 p-7 text-white md:p-9">
          <ShieldCheck size={32} className="text-blue-200" />
          <h3 className="mt-5 text-2xl font-bold text-white">
            Marketing Management Is Not a Sales Guarantee
          </h3>
          <p className="mt-4 leading-7 text-blue-100">
            Good management can improve the quality of decisions and increase the
            likelihood of success, but it cannot guarantee sales. Demand,
            competition, product quality, pricing, customer experience, economic
            conditions and other factors influence the final outcome.
          </p>
          <div className="mt-6 rounded-2xl bg-white/10 p-5">
            <p className="text-sm font-bold text-white">The management goal</p>
            <p className="mt-2 text-sm leading-6 text-blue-100">
              Improve decisions, create customer value, use resources wisely and
              adapt continuously to changing market conditions.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
<AdSlot />
  {/* CHALLENGES */}
  <section className="bg-gray-50 px-4 py-16 md:py-20">
    <div className="mx-auto max-w-7xl">
      <SectionHeading
        eyebrow="Real-World Difficulties"
        title="Challenges in Marketing Management"
        description="Even well-planned marketing activities face uncertainty. Marketing management must continuously respond to changing conditions and competing priorities."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {[
          {
            title: "Changing Customer Preferences",
            text: "Customer needs, expectations and buying behaviour can change over time.",
          },
          {
            title: "Intense Competition",
            text: "Competitors may offer similar products, lower prices or stronger customer experiences.",
          },
          {
            title: "Limited Budgets",
            text: "Businesses may not have enough money to pursue every marketing opportunity.",
          },
          {
            title: "Measuring Effectiveness",
            text: "It can be difficult to determine which activities actually caused results.",
          },
          {
            title: "Digital & Technology Changes",
            text: "Platforms, tools, algorithms and customer communication habits keep evolving.",
          },
          {
            title: "Coordination & Execution",
            text: "Marketing plans may fail when teams, budgets, timelines and responsibilities are poorly coordinated.",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-gray-200 bg-white p-6"
          >
            <h3 className="font-bold text-gray-900">{item.title}</h3>
            <p className="mt-3 text-sm leading-7 text-gray-600">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>

  {/* SKILLS */}
  <section className="px-4 py-16 md:py-20">
    <div className="mx-auto max-w-7xl">
      <SectionHeading
        eyebrow="People & Leadership"
        title="Skills Required for Marketing Management"
        description="Effective marketing management requires a combination of analytical thinking, business understanding, communication, leadership and decision-making skills."
      />

      <div className="flex flex-wrap gap-3">
        {[
          "Market Research & Analysis",
          "Strategic Planning",
          "Customer Understanding",
          "Communication",
          "Budget Management",
          "Leadership",
          "Decision-Making",
          "Problem-Solving",
          "Data Interpretation",
          "Creativity",
          "Project Management",
          "Adaptability",
        ].map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-bold text-blue-800"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  </section>

  {/* FAQ */}
  <section className="bg-gray-50 px-4 py-16 md:py-20">
    <div className="mx-auto max-w-7xl">
      <SectionHeading
        eyebrow="Common Questions"
        title="Marketing Management FAQs"
        description="Quick answers to common questions about marketing management."
      />

      <div className="space-y-4">
        {faqs.map((faq) => (
          <div
            key={faq.question}
            className="rounded-2xl border border-gray-200 bg-white p-5 md:p-6"
          >
            <h3 className="font-bold text-gray-900">{faq.question}</h3>
            <p className="mt-3 text-sm leading-7 text-gray-600">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  </section>

  

  {/* FINAL SUMMARY */}
  <section className="px-4 pb-16 md:pb-20">
    <div className="mx-auto max-w-7xl">
      <div className="rounded-3xl bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 p-7 text-white md:p-12">
        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-white/15 p-3">
            <BriefcaseBusiness size={26} />
          </div>
          <p className="text-sm font-bold uppercase tracking-wider text-blue-200">
            Key Takeaway
          </p>
        </div>

        <h2 className="mt-5 text-3xl font-bold text-white md:text-4xl">
          Marketing Management Turns Marketing Into a Managed Business Process
        </h2>

        <p className="mt-5 max-w-3xl text-base leading-8 text-blue-100">
          Marketing management is not simply promoting products or trying to
          increase sales. It is a coordinated process of understanding markets,
          choosing customers, setting objectives, developing strategies,
          organizing resources, implementing activities and evaluating results.
          Through this process, businesses make more informed decisions, deliver
          better customer value and work toward sustainable growth.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/marketing/what-is-marketing"
            className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-bold text-blue-700 transition hover:bg-blue-50"
          >
            Learn Marketing Fundamentals <ArrowRight size={17} />
          </Link>
          <Link
            href="/marketing/marketing-mix"
            className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-5 py-3 font-bold text-white transition hover:bg-white/10"
          >
            Explore the Marketing Mix
          </Link>
        </div>
      </div>
    </div>
  </section>
</main>
  );
}
