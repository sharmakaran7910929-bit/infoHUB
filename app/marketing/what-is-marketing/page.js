
import Link from "next/link";
import {
  Target,
  Users,
  Lightbulb,
  Search,
  Package,
  DollarSign,
  MapPin,
  Megaphone,
  HeartHandshake,
  TrendingUp,
  ShoppingBag,
  ArrowRight,
  ArrowDown,
  CheckCircle2,
  Store,
  MessageCircle,
  Repeat2,
  BarChart3,
  Sparkles,
  CircleDollarSign,
  Handshake,
  Eye,
  Star,
  Boxes,
  BriefcaseBusiness,
  Compass,
  Ad,
} from "lucide-react";
import AdSlot from '../../../components/AdSlot'
export const metadata = {
  title: "What Is Marketing? Meaning, Process, Examples & Importance | PriceTag HUB",
  description:
    "Understand what marketing is, how it works, why businesses need it, its core functions, the 4 Ps of marketing, customer journey, real-world examples, and the difference between marketing, advertising, and sales.",
};

const marketingFunctions = [
  {
    icon: Search,
    title: "Market Research",
    description:
      "Understand customers, competitors, market conditions, needs, preferences, and opportunities before making decisions.",
    color: "blue",
  },
  {
    icon: Target,
    title: "Target Customers",
    description:
      "Identify the people most likely to need, value, and purchase the product or service.",
    color: "indigo",
  },
  {
    icon: Package,
    title: "Product & Value",
    description:
      "Develop or improve products and services that solve problems or provide meaningful benefits.",
    color: "violet",
  },
  {
    icon: DollarSign,
    title: "Pricing",
    description:
      "Set prices that consider customer value, costs, competition, demand, and business objectives.",
    color: "emerald",
  },
  {
    icon: MapPin,
    title: "Distribution",
    description:
      "Make products available where and when customers want to purchase them.",
    color: "cyan",
  },
  {
    icon: Megaphone,
    title: "Promotion",
    description:
      "Communicate with customers through advertising, content, offers, social media, and other channels.",
    color: "orange",
  },
  {
    icon: HeartHandshake,
    title: "Customer Relationships",
    description:
      "Build trust, provide support, improve experiences, and encourage lasting customer relationships.",
    color: "pink",
  },
  {
    icon: BarChart3,
    title: "Performance & Improvement",
    description:
      "Measure results, understand feedback, and improve marketing decisions over time.",
    color: "blue",
  },
];

const functionStyles = {
  blue: "bg-blue-50 text-blue-700 border-blue-100",
  indigo: "bg-indigo-50 text-indigo-700 border-indigo-100",
  violet: "bg-violet-50 text-violet-700 border-violet-100",
  emerald: "bg-emerald-50 text-emerald-700 border-emerald-100",
  cyan: "bg-cyan-50 text-cyan-700 border-cyan-100",
  orange: "bg-orange-50 text-orange-700 border-orange-100",
  pink: "bg-pink-50 text-pink-700 border-pink-100",
};

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mb-8 max-w-3xl">
      {eyebrow && (
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
          {eyebrow}
        </p>
      )}
      <h2 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
          {description}
        </p>
      )}
    </div>
  );
}

export default function WhatIsMarketingPage() {
  return (
    <main className="overflow-hidden">

      {/* ====================================================== */}
      {/* HERO */}
      {/* ====================================================== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50 to-indigo-100">
        <div className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-blue-200/30 blur-[100px]" />
        <div className="pointer-events-none absolute -right-24 -top-20 h-[450px] w-[450px] rounded-full bg-indigo-300/30 blur-[120px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-2 lg:px-8 lg:py-20">
          {/* Hero Text */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-3 py-1.5 text-xs font-semibold text-blue-700 shadow-sm">
              <Sparkles className="h-3.5 w-3.5" />
              MARKETING FUNDAMENTALS
            </div>

            <h2 className="mt-6 text-4xl font-bold leading-[1.12] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              What Is
              <span className="block bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Marketing?
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              Marketing is how businesses understand people, identify what they
              need, create valuable offerings, communicate their benefits, and
              make those offerings accessible. It helps connect the right
              products and services with the right customers.
            </p>

            <div className="mt-7 rounded-2xl border border-blue-100 bg-white/80 p-4 shadow-sm backdrop-blur">
              <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
                In Simple Words
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Marketing is about understanding what people want or need and
                helping them choose a product or service that provides value.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="#how-marketing-works"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-700 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-700/20 transition hover:bg-blue-800"
              >
                Understand How It Works
                <ArrowDown className="h-4 w-4" />
              </Link>
              <Link
                href="#marketing-example"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white/80 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:text-blue-700"
              >
                See a Real Example
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Hero Illustration: Market Connection */}
          <div className="relative mx-auto w-full max-w-lg">
            <div className="rounded-[2rem] border border-white/80 bg-white/75 p-5 shadow-2xl shadow-blue-900/10 backdrop-blur-xl sm:p-7">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
                    Marketing Connects
                  </p>
                  <h3 className="mt-1 text-lg font-bold text-slate-900">
                    Business With People
                  </h3>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                  <Compass className="h-5 w-5" />
                </div>
              </div>

              <div className="relative mt-7 grid grid-cols-2 gap-4">
                {/* Customer */}
                <div className="rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-4 text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">
                    <Users className="h-7 w-7" />
                  </div>
                  <p className="mt-3 text-sm font-bold text-slate-900">
                    Customers
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    Needs & expectations
                  </p>
                </div>

                {/* Business */}
                <div className="rounded-2xl border border-indigo-100 bg-gradient-to-br from-indigo-50 to-white p-4 text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-700">
                    <Store className="h-7 w-7" />
                  </div>
                  <p className="mt-3 text-sm font-bold text-slate-900">
                    Businesses
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    Solutions & offerings
                  </p>
                </div>
              </div>

              {/* Connecting arrows */}
              <div className="my-5 flex items-center justify-center gap-3">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent to-blue-300" />
                <div className="flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-2 text-blue-700">
                  <MessageCircle className="h-4 w-4" />
                  <span className="text-xs font-bold">MARKETING</span>
                </div>
                <div className="h-px flex-1 bg-gradient-to-l from-transparent to-indigo-300" />
              </div>

              {/* Value center */}
              <div className="rounded-2xl border border-violet-100 bg-gradient-to-r from-violet-50 via-white to-blue-50 p-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-100 text-violet-700">
                    <HeartHandshake className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">
                      Value Exchange
                    </p>
                    <p className="text-xs leading-5 text-slate-500">
                      A product solves a problem or satisfies a need.
                    </p>
                  </div>
                </div>
              </div>

              {/* Outcomes */}
              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-emerald-100 bg-emerald-50/70 p-3">
                  <TrendingUp className="h-4 w-4 text-emerald-600" />
                  <p className="mt-2 text-xs font-bold text-slate-800">
                    Business Value
                  </p>
                </div>
                <div className="rounded-xl border border-blue-100 bg-blue-50/70 p-3">
                  <HeartHandshake className="h-4 w-4 text-blue-600" />
                  <p className="mt-2 text-xs font-bold text-slate-800">
                    Customer Value
                  </p>
                </div>
              </div>

              <div className="mt-5 rounded-xl bg-slate-900 px-4 py-3 text-center">
                <p className="text-xs font-semibold text-blue-200">
                  Understand People → Create Value → Build Relationships
                </p>
              </div>
            </div>

            {/* Floating label */}
            <div className="absolute -bottom-4 -left-3 hidden rounded-2xl border border-emerald-100 bg-white p-3 shadow-lg sm:block">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                <span className="text-xs font-bold text-slate-700">
                  Value for Both Sides
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* DEFINITION & EXPLANATION */}
      {/* ====================================================== */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="The Meaning of Marketing"
            title="Marketing Begins Before a Sale—and Continues After It"
            description="Many people associate marketing only with advertisements or selling. But marketing involves a much wider range of activities, beginning with understanding a market and continuing through customer experience and relationships."
          />

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-6 sm:p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">
                <Lightbulb className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-slate-900">
                Marketing Starts With Understanding
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                A business first needs to understand who its customers are, what
                they need, what problems they face, what alternatives they have,
                and what they are willing to pay for. Without this understanding,
                a business may create something that people simply don't want.
              </p>
            </div>

            <div className="rounded-3xl border border-indigo-100 bg-gradient-to-br from-indigo-50 to-white p-6 sm:p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-700">
                <HeartHandshake className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-slate-900">
                Marketing Builds Value & Relationships
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Marketing is not just about persuading someone to buy once. It
                also involves delivering a satisfying experience, maintaining
                customer trust, understanding feedback, and giving people reasons
                to return when they need the product or service again.
              </p>
            </div>
          </div>

          {/* Key definition callout */}
          <div className="mt-6 rounded-2xl border-l-4 border-blue-600 bg-slate-50 p-5 sm:p-6">
            <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
              Core Idea
            </p>
            <p className="mt-2 text-base font-semibold leading-7 text-slate-800">
              Marketing is the process of understanding customer needs, creating
              and communicating value, delivering offerings, and developing
              mutually beneficial customer relationships.
            </p>
          </div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* WHY MARKETING MATTERS */}
      {/* ====================================================== */}
      <AdSlot />
      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Why Businesses Need Marketing"
            title="A Good Product Alone Is Not Always Enough"
            description="Even a useful product can struggle if customers don't know it exists, can't find it, don't understand its value, or consider it too expensive. Marketing helps businesses address these challenges."
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Eye,
                title: "Create Awareness",
                text: "Help potential customers discover that a business, product, or service exists.",
                color: "bg-blue-50 text-blue-700",
              },
              {
                icon: Target,
                title: "Reach the Right People",
                text: "Focus resources on customers who are most likely to benefit from the offering.",
                color: "bg-indigo-50 text-indigo-700",
              },
              {
                icon: HeartHandshake,
                title: "Build Trust",
                text: "Develop credibility through useful information, reliable service, and consistent communication.",
                color: "bg-violet-50 text-violet-700",
              },
              {
                icon: ShoppingBag,
                title: "Generate Demand",
                text: "Help customers recognize needs and consider solutions that fit their situation.",
                color: "bg-cyan-50 text-cyan-700",
              },
              {
                icon: CircleDollarSign,
                title: "Support Sales",
                text: "Make it easier for customers to understand, evaluate, and purchase products.",
                color: "bg-emerald-50 text-emerald-700",
              },
              {
                icon: Repeat2,
                title: "Encourage Repeat Business",
                text: "Keep customers satisfied and create reasons to return, renew, or recommend.",
                color: "bg-orange-50 text-orange-700",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${item.color}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-base font-bold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* HOW MARKETING WORKS */}
      {/* ====================================================== */}
      <section id="how-marketing-works" className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Marketing Process"
            title="How Marketing Works Step by Step"
            description="Marketing is an interconnected process. Each step informs the next, and customer feedback can send businesses back to improve their products, prices, communication, or strategy."
          />

          {/* Process Diagram */}
          <div className="rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50/70 via-white to-indigo-50 p-5 sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  number: "01",
                  title: "Research the Market",
                  description: "Study customer needs, competition, trends, and opportunities.",
                  icon: Search,
                  color: "bg-blue-100 text-blue-700",
                },
                {
                  number: "02",
                  title: "Choose Customers",
                  description: "Decide which market segments and customers to serve.",
                  icon: Users,
                  color: "bg-indigo-100 text-indigo-700",
                },
                {
                  number: "03",
                  title: "Create Value",
                  description: "Develop an offering that solves problems or satisfies needs.",
                  icon: Lightbulb,
                  color: "bg-violet-100 text-violet-700",
                },
                {
                  number: "04",
                  title: "Design the Strategy",
                  description: "Decide product, price, distribution, and promotion.",
                  icon: BriefcaseBusiness,
                  color: "bg-cyan-100 text-cyan-700",
                },
                {
                  number: "05",
                  title: "Reach & Serve",
                  description: "Communicate, distribute, sell, and deliver the offering.",
                  icon: Megaphone,
                  color: "bg-emerald-100 text-emerald-700",
                },
                {
                  number: "06",
                  title: "Measure & Improve",
                  description: "Evaluate results, collect feedback, and improve.",
                  icon: BarChart3,
                  color: "bg-orange-100 text-orange-700",
                },
              ].map((step, index) => {
                const Icon = step.icon;

                return (
                  <div key={step.number} className="relative">
                    <div className="h-full rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold tracking-widest text-blue-600">
                          STEP {step.number}
                        </span>
                        <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${step.color}`}>
                          <Icon className="h-5 w-5" />
                        </div>
                      </div>
                      <h3 className="mt-4 text-base font-bold text-slate-900">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-slate-500">
                        {step.description}
                      </p>
                    </div>

                    {index < 5 && (
                      <div className="absolute -bottom-3 left-1/2 z-10 flex h-6 w-6 -translate-x-1/2 items-center justify-center rounded-full border border-blue-100 bg-blue-50 text-blue-500 lg:hidden">
                        <ArrowDown className="h-3.5 w-3.5" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Feedback Loop */}
            <div className="mt-6 flex flex-col items-center justify-center gap-3 rounded-2xl border border-blue-100 bg-white p-4 sm:flex-row">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                <MessageCircle className="h-5 w-5" />
              </div>
              <div className="text-center sm:text-left">
                <p className="text-sm font-bold text-slate-900">
                  Customer Feedback Creates a Continuous Improvement Loop
                </p>
                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Results and customer feedback can influence every stage—from
                  research and product decisions to pricing and future campaigns.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* EXAMPLE */}
      {/* ====================================================== */}
      <section id="marketing-example" className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Real-World Example"
            title="How a Local Bakery Uses Marketing"
            description="Imagine a bakery opening in a residential area. Making good cakes and bread is only one part of running the business. It also needs to understand customers, attract them, and make buying convenient."
          />

          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            {/* Example header */}
            <div className="flex flex-col gap-4 border-b border-slate-100 bg-gradient-to-r from-blue-50 to-indigo-50 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-blue-700 shadow-sm">
                  <Store className="h-7 w-7" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
                    Business Example
                  </p>
                  <h3 className="mt-1 text-lg font-bold text-slate-900">
                    The Neighborhood Bakery
                  </h3>
                </div>
              </div>
              <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-emerald-100 bg-white px-3 py-1.5 text-xs font-semibold text-emerald-700">
                <Sparkles className="h-3.5 w-3.5" />
                Marketing in Action
              </span>
            </div>

            {/* Example journey */}
            <div className="grid divide-y divide-slate-100 md:grid-cols-2 md:divide-x md:divide-y-0">
              {[
                {
                  icon: Search,
                  title: "1. Understand Local Customers",
                  description:
                    "The owner discovers that nearby families want fresh bread in the morning, while office workers prefer quick snacks and coffee.",
                  insight: "Customer research",
                  color: "bg-blue-50 text-blue-700",
                },
                {
                  icon: Package,
                  title: "2. Create the Right Offer",
                  description:
                    "The bakery offers fresh bread, affordable snack combinations, birthday cakes, and products that suit local preferences.",
                  insight: "Product & value",
                  color: "bg-violet-50 text-violet-700",
                },
                {
                  icon: DollarSign,
                  title: "3. Set Suitable Prices",
                  description:
                    "It prices everyday products competitively while offering customized cakes at prices that reflect ingredients, effort, and customer value.",
                  insight: "Pricing strategy",
                  color: "bg-emerald-50 text-emerald-700",
                },
                {
                  icon: Megaphone,
                  title: "4. Promote the Bakery",
                  description:
                    "The owner uses a storefront sign, local social media posts, opening offers, and word-of-mouth to attract customers.",
                  insight: "Promotion",
                  color: "bg-orange-50 text-orange-700",
                },
                {
                  icon: MapPin,
                  title: "5. Make Buying Convenient",
                  description:
                    "Customers can walk in, call ahead, or order birthday cakes in advance. The bakery makes its location and ordering options clear.",
                  insight: "Distribution & access",
                  color: "bg-cyan-50 text-cyan-700",
                },
                {
                  icon: HeartHandshake,
                  title: "6. Keep Customers Coming Back",
                  description:
                    "Consistent quality, friendly service, timely orders, and listening to feedback encourage customers to return and recommend the bakery.",
                  insight: "Retention & relationships",
                  color: "bg-pink-50 text-pink-700",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.title} className="flex gap-4 p-5 sm:p-6">
                    <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${item.color}`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">
                        {item.title}
                      </h4>
                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        {item.description}
                      </p>
                      <span className="mt-3 inline-flex rounded-full bg-slate-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-500">
                        {item.insight}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Example conclusion */}
            <div className="border-t border-slate-100 bg-slate-900 p-5 sm:p-6">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" />
                <div>
                  <h4 className="text-sm font-bold text-white">
                    The Outcome
                  </h4>
                  <p className="mt-1 text-sm leading-6 text-slate-300">
                    Marketing helps the bakery find customers, provide products
                    they value, communicate its offerings, make buying easy,
                    earn revenue, and develop repeat business. The bakery's
                    success still depends on factors such as product quality,
                    competition, operating costs, and customer satisfaction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* MARKETING MIX 4Ps */}
      {/* ====================================================== */}
      <AdSlot />
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Core Marketing Framework"
            title="The 4 Ps of Marketing"
            description="The marketing mix is a framework businesses use to shape their offering and how it reaches customers. The four Ps—Product, Price, Place, and Promotion—work together rather than operating as isolated decisions."
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                letter: "P1",
                name: "Product",
                question: "What value are we offering?",
                description:
                  "A product or service designed to meet customer needs. Includes quality, features, design, packaging, and service.",
                icon: Package,
                color: "bg-blue-50 text-blue-700 border-blue-100",
              },
              {
                letter: "P2",
                name: "Price",
                question: "What will customers pay?",
                description:
                  "The amount customers exchange for the offering, shaped by costs, value, competition, and pricing objectives.",
                icon: DollarSign,
                color: "bg-emerald-50 text-emerald-700 border-emerald-100",
              },
              {
                letter: "P3",
                name: "Place",
                question: "Where can customers get it?",
                description:
                  "Distribution, location, channels, delivery, availability, and the convenience of accessing the offering.",
                icon: MapPin,
                color: "bg-violet-50 text-violet-700 border-violet-100",
              },
              {
                letter: "P4",
                name: "Promotion",
                question: "How will people know?",
                description:
                  "Communication methods used to inform, persuade, remind, and encourage customers to take action.",
                icon: Megaphone,
                color: "bg-orange-50 text-orange-700 border-orange-100",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.name}
                  className={`rounded-2xl border ${item.color} p-5`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold tracking-widest opacity-70">
                      {item.letter}
                    </span>
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-xl font-bold">{item.name}</h3>
                  <p className="mt-2 text-sm font-semibold">{item.question}</p>
                  <p className="mt-3 text-sm leading-6 opacity-80">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* 4Ps connection diagram */}
          <div className="mt-6 rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-5 sm:p-8">
            <h3 className="text-center text-base font-bold text-slate-900">
              The Four Elements Work Together
            </h3>

            <div className="mx-auto mt-6 grid max-w-3xl grid-cols-2 gap-3 sm:gap-4">
              <div className="rounded-2xl border border-blue-100 bg-white p-4 text-center shadow-sm">
                <Package className="mx-auto h-6 w-6 text-blue-600" />
                <p className="mt-2 text-sm font-bold text-slate-900">Product</p>
              </div>
              <div className="rounded-2xl border border-emerald-100 bg-white p-4 text-center shadow-sm">
                <DollarSign className="mx-auto h-6 w-6 text-emerald-600" />
                <p className="mt-2 text-sm font-bold text-slate-900">Price</p>
              </div>
              <div className="rounded-2xl border border-violet-100 bg-white p-4 text-center shadow-sm">
                <MapPin className="mx-auto h-6 w-6 text-violet-600" />
                <p className="mt-2 text-sm font-bold text-slate-900">Place</p>
              </div>
              <div className="rounded-2xl border border-orange-100 bg-white p-4 text-center shadow-sm">
                <Megaphone className="mx-auto h-6 w-6 text-orange-600" />
                <p className="mt-2 text-sm font-bold text-slate-900">Promotion</p>
              </div>
            </div>

            <div className="mx-auto mt-4 max-w-3xl rounded-2xl bg-slate-900 px-5 py-4 text-center">
              <p className="text-xs font-bold uppercase tracking-wider text-blue-300">
                Combined Marketing Strategy
              </p>
              <p className="mt-1 text-sm font-semibold text-white">
                The Right Offering · The Right Price · The Right Place · The Right Communication
              </p>
            </div>
          </div>

          <div className="mt-5 text-sm leading-6 text-slate-500">
            <p>
              The 4 Ps are the traditional marketing mix for products. In
              services marketing, the framework is commonly extended to 7 Ps by
              adding People, Process, and Physical Evidence.
            </p>
          </div>
        </div>
      </section>

  </main>
);
}
