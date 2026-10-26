import {
  BookOpen,
  ChartNoAxesCombined,
  Coins,
  Landmark,
  Globe2,
  TrendingUp,
  Wallet,
  BriefcaseBusiness,
  ShoppingCart,
  Factory,
  BadgeIndianRupee,
  Scale,
  Lightbulb,
  ArrowUpRight
} from "lucide-react";
import Link from "next/link";
export const metadata = {
  title: "Economics: Concepts, Money, Markets & the Economy | PriceTag HUB",
  description:
    "Learn economics through simple explanations of money, inflation, supply and demand, banking, markets, employment, international trade, and economic growth.",
  keywords: [
    "economics for beginners",
    "basic economics",
    "microeconomics",
    "macroeconomics",
    "inflation explained",
    "supply and demand",
    "Indian economy",
    "money and banking",
  ],
  alternates: {
    canonical: "https://www.pricetag.co.in/economics",
  },
  openGraph: {
    title: "Economics: Concepts, Money, Markets & the Economy",
    description:
      "Explore economics concepts with simple, practical, and educational guides.",
    type: "website",
  },
};

const topics = [
  {
    title: "Economics Basics",
    description:
      "Understand what economics means, why resources are limited, and how people, businesses, and governments make choices.",
    icon: BookOpen,
    color: "bg-blue-50 text-blue-700",
    border: "border-blue-200",
    items: [
      "What Is Economics?",
      "Scarcity and Opportunity Cost",
      "Needs, Wants, and Resources",
      "Utilities and Equilibrium",
    ],
    href:'/economics/basics'
  },
 {
  title: "GDP And Economic Growth",
  description:
    "Learn what GDP measures, how India's economy is evaluated, how inflation affects GDP, and what drives economic growth and business cycles.",
  icon: TrendingUp,
  color: "bg-emerald-50 text-emerald-700",
  border: "border-emerald-200",
  items: [
    "What Is GDP?",
    "GDP Of India",
    "GDP Per Capita",
    "GDP Vs GNP",
    "Real Vs Nominal GDP",
    "Economic Growth",
    "Business Cycle",
  ],
  href:'/economics/gdp-and-economic-growth'
},
{
  title: "Inflation",
  description:
    "Understand what inflation means, why prices rise, how inflation is calculated, and how it affects purchasing power and the economy.",
  icon: ChartNoAxesCombined,
  color: "bg-blue-50 text-blue-700",
  border: "border-blue-200",
  items: [
    "What Is Inflation?",
    "Inflation Rate Formula",
    "Consumer Price Index (CPI)",
    "CPI Vs WPI",
    "Wholesale Price Index India",
    "Demand-Pull Inflation",
    "Cost-Push Inflation",
    "Core Vs Headline Inflation",
    "Types of Inflation",
    "Effects of Inflation",
    "Purchasing Power and Inflation",
    "Inflation Vs Deflation",
    "Hyperinflation",
    "Stagflation",
  ],
  href: "/economics/inflation",
},
  
{
  title: "Fiscal Policy",
  description:
    "Understand how government spending, taxation and fiscal decisions influence economic growth, employment, inflation and budget deficits.",
  icon: Landmark,
  color: "bg-blue-50 text-blue-700",
  border: "border-blue-200",
  items: [
    "What Is Fiscal Policy?",
    "Expansionary Fiscal Policy",
    "Contractionary Fiscal Policy",
    "Tools Of Fiscal Policy",
  ],
  href: "/economics/fiscal-policy",
},
{
  title: "Monetary Policy",
  description:
    "Understand how central banks influence interest rates, money and credit, inflation, and economic growth through monetary policy.",
  icon: Landmark,
  color: "bg-indigo-50 text-indigo-700",
  border: "border-indigo-200",
  items: [
    "What Is Monetary Policy?",
    "Monetary Policy Tools",
    "Expansionary Monetary Policy",
    "Contractionary Monetary Policy",
    "RBI and Monetary Policy",
    "What Is Repo Rate?",
    "Repo Rate vs Reverse Repo Rate",
  ],
  href: "/economics/monetary-policy",
},

];

const learningSteps = [
  {
    number: "01",
    title: "Start with the basics",
    description:
      "Build a foundation in scarcity, choices, resources, incentives, and opportunity cost.",
  },
  {
    number: "02",
    title: "Understand markets",
    description:
      "Learn how buyers and sellers interact, how prices change, and how supply and demand work.",
  },
  {
    number: "03",
    title: "Explore the wider economy",
    description:
      "Connect inflation, employment, GDP, interest rates, and government policies.",
  },
  {
    number: "04",
    title: "Apply economics to real life",
    description:
      "Use economic concepts to understand household budgets, business decisions, and public issues.",
  },
];

function TopicCard({ topic }) {
  const Icon = topic.icon;

  return (
    <article
      className={`group flex h-full flex-col rounded-2xl border ${topic.border} bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-6`}
    >
      <div
        className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${topic.color}`}
      >
        <Icon size={25} strokeWidth={1.8} aria-hidden="true" />
      </div>

      <h3 className="text-lg font-semibold tracking-tight text-gray-900">
        {topic.title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-gray-600">
        {topic.description}
      </p>

      <div className="mt-5 border-t border-gray-100 pt-4">
        <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-500">
          Topics to explore
        </p>

        <ul className="space-y-2">
          {topic.items.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2 text-sm leading-5 text-gray-700"
            >
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-auto pt-5">
  <Link
    href={topic.href}
    className="flex items-center gap-1 text-sm font-medium text-gray-500 transition-colors group-hover:text-gray-900"
  >
    Explore this topic
    <ArrowUpRight
      size={16}
      aria-hidden="true"
      className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
    />
  </Link>
</div>
    </article>
  );
}

export default function EconomicsPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-gray-100 bg-gradient-to-br from-blue-50 via-white to-emerald-50">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-[1.35fr_0.65fr]">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-3 py-1.5 text-sm font-medium text-blue-800">
                <BookOpen size={16} aria-hidden="true" />
                PriceTag HUB · Learning and Knowledge
              </div>

              <h1 className="max-w-3xl text-3xl font-bold leading-tight tracking-tight text-gray-950 sm:text-4xl lg:text-5xl">
                Economics Explained: Money, Markets, and the World Around Us
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
                Learn how people make choices, why prices change, how money
                works, and what shapes the economy. Explore clear explanations
                of economics concepts, from everyday spending to national and
                global economic trends.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <span className="rounded-lg border border-blue-100 bg-white px-3 py-2 text-sm text-gray-700">
                  Beginner-friendly
                </span>
                <span className="rounded-lg border border-emerald-100 bg-white px-3 py-2 text-sm text-gray-700">
                  Practical examples
                </span>
                <span className="rounded-lg border border-violet-100 bg-white px-3 py-2 text-sm text-gray-700">
                  India and global economy
                </span>
              </div>
            </div>

            <div className="mx-auto w-full max-w-md">
              <div className="rounded-3xl border border-blue-100 bg-white p-5 shadow-xl shadow-blue-100/40 sm:p-7">
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-2xl bg-blue-50 p-4">
                    <ChartNoAxesCombined
                      className="mb-3 text-blue-700"
                      size={28}
                      aria-hidden="true"
                    />
                    <p className="font-semibold text-gray-900">
                      Markets
                    </p>
                    <p className="mt-1 text-sm text-gray-600">
                      Prices and choices
                    </p>
                  </div>

                  <div className="rounded-2xl bg-emerald-50 p-4">
                    <Coins
                      className="mb-3 text-emerald-700"
                      size={28}
                      aria-hidden="true"
                    />
                    <p className="font-semibold text-gray-900">
                      Money
                    </p>
                    <p className="mt-1 text-sm text-gray-600">
                      Banking and interest
                    </p>
                  </div>

                  <div className="rounded-2xl bg-amber-50 p-4">
                    <TrendingUp
                      className="mb-3 text-amber-700"
                      size={28}
                      aria-hidden="true"
                    />
                    <p className="font-semibold text-gray-900">
                      Growth
                    </p>
                    <p className="mt-1 text-sm text-gray-600">
                      GDP and productivity
                    </p>
                  </div>

                  <div className="rounded-2xl bg-violet-50 p-4">
                    <Globe2
                      className="mb-3 text-violet-700"
                      size={28}
                      aria-hidden="true"
                    />
                    <p className="font-semibold text-gray-900">
                      Global trade
                    </p>
                    <p className="mt-1 text-sm text-gray-600">
                      Countries and commerce
                    </p>
                  </div>
                </div>

                <div className="mt-4 rounded-2xl bg-gray-900 p-5 text-white">
                  <p className="text-sm font-medium text-blue-200">
                    A central economic question
                  </p>
                  <p className="mt-2 text-lg font-semibold leading-7">
                    How do we use limited resources to meet different needs
                    and wants?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-700">
              Understand the fundamentals
            </p>

            <h2 className="mt-3 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              What is Economics?
            </h2>

            <p className="mt-4 text-base leading-7 text-gray-600">
              Economics is the study of how individuals, businesses, and
              governments make decisions when resources such as money, time,
              labour, and raw materials are limited. It examines how goods and
              services are produced, distributed, and consumed.
            </p>

            <p className="mt-4 text-base leading-7 text-gray-600">
              Economics helps explain everyday questions: Why does the price
              of a product rise? How do interest rates affect borrowing? Why
              do some economies grow faster than others? How do taxes and
              government spending influence people and businesses?
            </p>
          </div>

          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5 sm:p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-amber-800">
                <Lightbulb size={22} aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                Economics in everyday life
              </h3>
            </div>

            <ul className="mt-5 space-y-4">
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-amber-600" />
                <p className="text-sm leading-6 text-gray-700">
                  <strong>Food prices:</strong> Supply, demand, transport
                  costs, and weather can influence what you pay.
                </p>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-amber-600" />
                <p className="text-sm leading-6 text-gray-700">
                  <strong>Savings:</strong> Interest rates and inflation
                  affect how much your money can buy in the future.
                </p>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-amber-600" />
                <p className="text-sm leading-6 text-gray-700">
                  <strong>Employment:</strong> Business activity, skills,
                  investment, and productivity influence job opportunities.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Topic cards */}
      <section className="bg-gray-50 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-9 max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-700">
              Explore economics
            </p>

            <h2 className="mt-3 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Economics Topics and Learning Guides
            </h2>

            <p className="mt-4 text-base leading-7 text-gray-600">
              Explore the main areas of economics, from introductory concepts
              to banking, the Indian economy, business, and international
              trade. Each section provides a foundation for more detailed
              learning.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {topics.map((topic) => (
              <TopicCard key={topic.title} topic={topic} />
            ))}
          </div>
        </div>
      </section>

      {/* Learning path */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mb-8 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-700">
            A simple learning path
          </p>

          <h2 className="mt-3 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            How to Understand Economics Step by Step
          </h2>

          <p className="mt-4 leading-7 text-gray-600">
            If you are new to economics, start with core ideas and gradually
            connect them to markets, the wider economy, and real-world
            decisions.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {learningSteps.map((step, index) => (
            <article
              key={step.number}
              className="rounded-2xl border border-gray-200 bg-white p-5"
            >
              <div
                className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl text-sm font-bold ${
                  index === 0
                    ? "bg-blue-100 text-blue-800"
                    : index === 1
                      ? "bg-emerald-100 text-emerald-800"
                      : index === 2
                        ? "bg-violet-100 text-violet-800"
                        : "bg-amber-100 text-amber-800"
                }`}
              >
                {step.number}
              </div>

              <h3 className="font-semibold text-gray-900">
                {step.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Key concepts */}
      <section className="border-y border-blue-100 bg-blue-50/70">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
          <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-blue-700">
                Core ideas
              </p>

              <h2 className="mt-3 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                Five Concepts Worth Understanding First
              </h2>

              <p className="mt-4 leading-7 text-gray-600">
                These ideas appear throughout economics and help explain
                decisions made by households, firms, and governments.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {[
                {
                  title: "Scarcity",
                  description:
                    "Resources are limited, so choices must be made.",
                },
                {
                  title: "Opportunity cost",
                  description:
                    "Every choice can mean giving up an alternative.",
                },
                {
                  title: "Supply and demand",
                  description:
                    "Buyers and sellers influence market prices and quantities.",
                },
                {
                  title: "Incentives",
                  description:
                    "Rewards and costs can change how people behave.",
                },
                {
                  title: "Trade-offs",
                  description:
                    "Decisions often involve balancing competing priorities.",
                },
              ].map((concept) => (
                <div
                  key={concept.title}
                  className="rounded-xl border border-blue-100 bg-white p-4"
                >
                  <h3 className="font-semibold text-gray-900">
                    {concept.title}
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-gray-600">
                    {concept.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="mx-auto max-w-4xl px-4 py-14 text-center sm:px-6 sm:py-16">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-800">
          <BookOpen size={25} aria-hidden="true" />
        </div>

        <h2 className="mt-5 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
          Build  Your Understanding Of Economics
        </h2>

        <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-600">
          Economics is more than the study of money. It is a way to understand
          choices, resources, markets, public decisions, and the forces that
          shape everyday life. Begin with the fundamentals and build your
          knowledge one concept at a time.
        </p>

        <div className="mt-7 inline-flex items-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-900">
          <Lightbulb size={18} aria-hidden="true" />
          Learn the concept. Understand the example. Apply the idea.
        </div>
      </section>
    </main>
  );
}