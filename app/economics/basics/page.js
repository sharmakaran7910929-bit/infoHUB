
import Link from "next/link";
import {
  BookOpen,
  Scale,
  Lightbulb,
  Factory,
  TrendingUp,
  BarChart3,
  Coins,
  ShoppingCart,
  Target,
  Landmark,
  Layers,
  ArrowRight,
  GraduationCap,CheckCircle2 
} from "lucide-react";
import AdSlot from  '../../../components/AdSlot'
export const metadata = {
  title: "Basics of Economics: Concepts, Laws and Examples | PriceTag HUB",
  description:
    "Learn the basics of economics with beginner-friendly guides to scarcity, opportunity cost, supply and demand, elasticity, production costs, and economic systems.",
  alternates: {
    canonical: "/economics/basics",
  },
};

const topics = [
  {
    title: "What Is Economics?",
    description:
      "Discover what economics means, why it matters, and how people, businesses, and governments make decisions with limited resources.",
    href: "/economics/basics/what-is-economics",
    icon: BookOpen,
    color: "bg-blue-100 text-blue-700",
    tag: "Start here",
  },
  {
    title: "Scarcity in Economics",
    description:
      "Understand why resources are limited, wants are numerous, and choices are necessary in everyday life.",
    href: "/economics/basics/scarcity-in-economics",
    icon: Coins,
    color: "bg-amber-100 text-amber-700",
    tag: "Core concept",
  },
  {
    title: "Opportunity Cost",
    description:
      "Learn how choosing one option means giving up the benefits of the next-best alternative.",
    href: "/economics/basics/opportunity-cost",
    icon: Lightbulb,
    color: "bg-purple-100 text-purple-700",
    tag: "Decision-making",
  },
  {
    title: "Factors of Production",
    description:
      "Explore land, labour, capital, and entrepreneurship—the resources used to produce goods and services.",
    href: "/economics/basics/factors-of-production",
    icon: Factory,
    color: "bg-orange-100 text-orange-700",
    tag: "Production",
  },
  {
    title: "Law of Demand",
    description:
      "Find out how the quantity demanded generally changes when a product's price rises or falls.",
    href: "/economics/basics/law-of-demand",
    icon: ShoppingCart,
    color: "bg-emerald-100 text-emerald-700",
    tag: "Demand",
  },
  {
    title: "Law of Supply",
    description:
      "Understand why producers generally offer more of a product for sale when its price increases.",
    href: "/economics/basics/law-of-supply",
    icon: TrendingUp,
    color: "bg-rose-100 text-rose-700",
    tag: "Supply",
  },
  {
    title: "Market Equilibrium",
    description:
      "Learn how demand and supply interact to determine an equilibrium price and quantity in a market.",
    href: "/economics/basics/market-equilibrium",
    icon: Scale,
    color: "bg-cyan-100 text-cyan-700",
    tag: "Markets",
  },
  {
    title: "Price Elasticity of Demand",
    description:
      "Explore how strongly consumers respond to price changes, with formulas, examples, and practical uses.",
    href: "/economics/basics/price-elasticity-of-demand",
    icon: BarChart3,
    color: "bg-indigo-100 text-indigo-700",
    tag: "Elasticity",
  },
  {
    title: "Law of Diminishing Marginal Utility",
    description:
      "Discover why each additional unit of something consumed may provide less extra satisfaction.",
    href: "/economics/basics/law-of-diminishing-marginal-utility",
    icon: Target,
    color: "bg-pink-100 text-pink-700",
    tag: "Consumer behaviour",
  },
  {
    title: "Marginal Cost",
    description:
      "Understand the additional cost of producing one more unit and how businesses use marginal cost.",
    href: "/economics/basics/marginal-cost",
    icon: Coins,
    color: "bg-lime-100 text-lime-800",
    tag: "Business decisions",
  },
  {
    title: "Microeconomics vs Macroeconomics",
    description:
      "Compare the study of individual consumers and markets with the study of the economy as a whole.",
    href: "/economics/basics/microeconomics-vs-macroeconomics",
    icon: Layers,
    color: "bg-violet-100 text-violet-700",
    tag: "Two perspectives",
  },
  {
    title: "Mixed Economy",
    description:
      "Learn how private businesses and government institutions share economic activity in a mixed economy.",
    href: "/economics/basics/mixed-economy",
    icon: Landmark,
    color: "bg-teal-100 text-teal-700",
    tag: "Economic systems",
  },
];

const learningSteps = [
  {
    number: "01",
    title: "Understand the fundamentals",
    description:
      "Start with economics, scarcity, opportunity cost, and the resources needed for production.",
  },
  {
    number: "02",
    title: "Learn how markets work",
    description:
      "Study demand, supply, market equilibrium, and how buyers respond to price changes.",
  },
  {
    number: "03",
    title: "Explore decisions and systems",
    description:
      "Continue with consumer behaviour, marginal cost, economic perspectives, and mixed economies.",
  },
];

export default function EconomicsBasicsPage() {
  return (
<main className="min-h-screen w-full bg-white text-gray-900">
  <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <section className="overflow-hidden rounded-3xl bg-gradient-to-br from-blue-700 via-indigo-700 to-purple-800 px-6 py-10 text-white shadow-lg sm:px-10 sm:py-14">
        <div className="max-w-3xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-sm">
            <GraduationCap size={17} />
            Economics Learning Guide
          </div>

          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Basics of Economics
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-blue-50 sm:text-lg">
            Learn how people make choices, how markets determine prices, and
            how businesses use resources. Explore essential economic concepts
            through clear explanations, everyday examples, and practical
            learning guides.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/economics/basics/what-is-economics"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-indigo-800 transition hover:bg-blue-50"
            >
              Start learning <ArrowRight size={18} />
            </Link>

            <a
              href="#all-topics"
              className="inline-flex items-center rounded-xl border border-white/40 px-5 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              Explore all topics
            </a>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3">
          <div className="rounded-2xl border border-white/15 bg-white/10 p-4">
            <BookOpen className="mb-2" size={23} />
            <p className="font-semibold">Beginner-friendly</p>
            <p className="mt-1 text-sm text-blue-100">
              Clear explanations of essential concepts
            </p>
          </div>

          <div className="rounded-2xl border border-white/15 bg-white/10 p-4">
            <Lightbulb className="mb-2" size={23} />
            <p className="font-semibold">Practical examples</p>
            <p className="mt-1 text-sm text-blue-100">
              Connect economic ideas to everyday decisions
            </p>
          </div>

          <div className="rounded-2xl border border-white/15 bg-white/10 p-4">
            <BarChart3 className="mb-2" size={23} />
            <p className="font-semibold">Build step by step</p>
            <p className="mt-1 text-sm text-blue-100">
              Progress from fundamentals to market behaviour
            </p>
          </div>
        </div>
      </section>

      <section className="mt-10">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            What is Economics ?
          </h2>
          <p className="mt-3 leading-7 text-gray-600">
            Economics studies how individuals, businesses, and governments
            allocate limited resources among competing uses. It helps explain
            decisions about spending, saving, production, prices, employment,
            and the distribution of goods and services.
          </p>
          <p className="mt-3 leading-7 text-gray-600">
            The topics below build on one another. Understanding scarcity and
            opportunity cost provides a foundation for studying supply,
            demand, consumer choices, and how markets operate.
          </p>
        </div>
      </section>

      <section className="mt-10 rounded-3xl border border-gray-200 bg-gray-50 p-5 sm:p-7">
        <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
          Your learning path
        </h2>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {learningSteps.map((step) => (
            <div key={step.number} className="rounded-2xl bg-white p-5 shadow-sm">
              <span className="text-sm font-bold tracking-wider text-indigo-600">
                STEP {step.number}
              </span>
              <h3 className="mt-2 font-semibold text-gray-900">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>
<AdSlot />
      <section id="all-topics" className="mt-12 scroll-mt-24">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
              Topic library
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Explore the Basics of Economics
            </h2>
            <p className="mt-3 max-w-2xl leading-7 text-gray-600">
              Choose a topic to explore its definition, key principles,
              examples, and practical applications.
            </p>
          </div>
          <p className="text-sm text-gray-500">12 learning guides</p>
        </div>

        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {topics.map((topic) => {
            const Icon = topic.icon;

            return (
              <article
                key={topic.href}
                className="group flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-5 transition duration-200 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-lg sm:p-6"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className={`rounded-xl p-3 ${topic.color}`}>
                    <Icon size={23} />
                  </div>
                  <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
                    {topic.tag}
                  </span>
                </div>

                <h3 className="mt-5 text-lg font-semibold text-gray-900">
                  {topic.title}
                </h3>

                <p className="mt-2 flex-1 text-sm leading-6 text-gray-600">
                  {topic.description}
                </p>

                <Link
                  href={topic.href}
                  className="mt-5 inline-flex items-center gap-2 font-semibold text-indigo-700 transition group-hover:gap-3"
                >
                  Read guide <ArrowRight size={17} />
                </Link>
              </article>
            );
          })}
        </div>
      </section>
<AdSlot />
      <section className="mt-12 rounded-3xl border border-emerald-200 bg-gradient-to-r from-emerald-50 to-teal-50 p-6 sm:p-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
            <CheckCircle2 size={26} />
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-bold text-gray-900">
              Ready to begin?
            </h2>
            <p className="mt-2 leading-7 text-gray-600">
              Start with the meaning of economics, then work through scarcity,
              opportunity cost, production, and market behaviour at your own
              pace.
            </p>
          </div>
          <Link
            href="/economics/basics/what-is-economics"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-emerald-700 px-5 py-3 font-semibold text-white transition hover:bg-emerald-800"
          >
            Start with Economics <ArrowRight size={18} />
          </Link>
        </div>
      </section>
      </div>
    </main>
  );
}
