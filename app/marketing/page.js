
import Link from "next/link";
import {
  Megaphone,
  Handshake,
  Palette,
  FileText,
  Network,
  Users,
  BriefcaseBusiness,
  Blend,
  Share2,
  TrendingUp,
  MousePointerClick,
  DollarSign,
  Gift,
  ShoppingBag,
  Search,
  SearchCheck,
  Target,
  Globe,
  Smartphone,
  BookOpen,
  ArrowUpRight,
  Lightbulb,
  UserRound,
  HeartHandshake,
  BarChart3,
  Wallet,
  Store,
  Sparkles,
  ChevronRight,
  Layers3,
  Radio,
  ChartNoAxesCombined,
} from "lucide-react";

export const metadata = {
  title: "Marketing | Business, Customers & Growth | PriceTag HUB",
  description:
    "Explore marketing concepts, strategies, branding, advertising, customer behavior, pricing, digital marketing, sales, and how businesses attract customers and generate growth.",
};

const topics = [
  {
    title: "What Is Marketing",
    href: "/marketing/what-is-marketing",
    description:
      "How businesses understand customer needs, create value, communicate offerings, and build profitable customer relationships.",
    icon: Megaphone,
    category: "FOUNDATION",
    accent: "blue",
  },
  {
    title: "Marketing Management",
    href: "/marketing/marketing-management",
    description:
      "Plan, organize, execute, and evaluate marketing activities to achieve business goals and meet market needs.",
    icon: BriefcaseBusiness,
    category: "MANAGEMENT",
    accent: "indigo",
  },
  {
    title: "Marketing Mix",
    href: "/marketing/marketing-mix",
    description:
      "Understand the key business decisions involving product, price, place, and promotion that shape a market offering.",
    icon: Blend,
    category: "STRATEGY",
    accent: "violet",
  },
  {
    title: "Market Segmentation",
    href: "/marketing/market-segmentation",
    description:
      "Divide a broad market into meaningful groups of customers with different needs, preferences, and behaviors.",
    icon: Users,
    category: "CUSTOMERS",
    accent: "cyan",
  },
  {
    title: "Segmentation, Targeting & Positioning",
    href: "/marketing/segmentation-targeting-positioning",
    description:
      "Identify customer groups, choose the right market to serve, and establish a differentiated position in customers' minds.",
    icon: Target,
    category: "STRATEGY",
    accent: "blue",
  },
  {
    title: "Branding",
    href: "/marketing/branding",
    description:
      "Build identity, trust, recognition, and associations that influence how customers perceive and choose a business.",
    icon: Palette,
    category: "IDENTITY",
    accent: "pink",
  },
  {
    title: "Advertising",
    href: "/marketing/advertising",
    description:
      "Communicate products, services, and ideas through paid media to influence awareness, interest, and customer action.",
    icon: Radio,
    category: "PROMOTION",
    accent: "orange",
  },
  {
    title: "Promotional Mix",
    href: "/marketing/promotional-mix",
    description:
      "Combine advertising, personal selling, public relations, sales promotion, and other methods to influence buyers.",
    icon: Gift,
    category: "PROMOTION",
    accent: "violet",
  },
  {
    title: "Sales & Marketing",
    href: "/marketing/sales-and-marketing",
    description:
      "See how market research, customer acquisition, sales conversations, and closing deals work together to drive business.",
    icon: ShoppingBag,
    category: "BUSINESS",
    accent: "emerald",
  },
  {
    title: "Content Marketing",
    href: "/marketing/content-marketing",
    description:
      "Use helpful content to attract audiences, answer questions, build trust, and support customer decisions over time.",
    icon: FileText,
    category: "CONTENT",
    accent: "cyan",
  },
  {
    title: "What Is Digital Marketing",
    href: "/marketing/what-is-digital-marketing",
    description:
      "Reach, engage, and convert customers through websites, search engines, social networks, email, and digital channels.",
    icon: Globe,
    category: "DIGITAL",
    accent: "blue",
  },
  {
    title: "Types of Digital Marketing",
    href: "/marketing/types-of-digital-marketing",
    description:
      "Explore digital marketing methods and how different online channels serve awareness, acquisition, engagement, and sales.",
    icon: Smartphone,
    category: "DIGITAL",
    accent: "indigo",
  },
  {
    title: "Search Engine Marketing",
    href: "/marketing/search-engine-marketing",
    description:
      "Gain visibility on search engines and connect with people actively searching for products, services, and solutions.",
    icon: Search,
    category: "DIGITAL",
    accent: "cyan",
  },
  {
    title: "Search Engine Optimization",
    href: "/marketing/search-engine-optimization",
    description:
      "Improve organic search visibility by creating useful content and building technically accessible, relevant websites.",
    icon: SearchCheck,
    category: "DIGITAL",
    accent: "emerald",
  },
  {
    title: "PPC Advertising",
    href: "/marketing/ppc-advertising",
    description:
      "Reach targeted audiences through paid advertising models where clicks or other measurable actions drive campaign costs.",
    icon: MousePointerClick,
    category: "PAID MEDIA",
    accent: "orange",
  },
  {
    title: "Performance Marketing",
    href: "/marketing/performance-marketing",
    description:
      "Measure and optimize campaigns around measurable outcomes such as leads, purchases, conversions, and acquisition costs.",
    icon: TrendingUp,
    category: "ANALYTICS",
    accent: "emerald",
  },
  {
    title: "Social Media Marketing",
    href: "/marketing/social-media-marketing",
    description:
      "Build audiences, distribute content, interact with communities, and create opportunities across social media platforms.",
    icon: Share2,
    category: "DIGITAL",
    accent: "pink",
  },
  {
    title: "Influencer Marketing",
    href: "/marketing/influencer-marketing",
    description:
      "Partner with creators whose audience, credibility, and content help introduce products and influence buying decisions.",
    icon: Handshake,
    category: "PARTNERSHIPS",
    accent: "violet",
  },
  {
    title: "Affiliate Marketing",
    href: "/marketing/affiliate-marketing",
    description:
      "Generate sales through partners who promote products and receive commissions for qualifying referrals or transactions.",
    icon: Network,
    category: "REVENUE MODEL",
    accent: "emerald",
  },
  {
    title: "Network Marketing",
    href: "/marketing/network-marketing",
    description:
      "Understand network-based selling structures, participant compensation, product distribution, and their business implications.",
    icon: Network,
    category: "BUSINESS MODEL",
    accent: "indigo",
  },
  {
    title: "Distribution Channels",
    href: "/marketing/distribution-channels",
    description:
      "Explore the routes, intermediaries, and systems businesses use to deliver products and services to customers.",
    icon: Store,
    category: "DISTRIBUTION",
    accent: "orange",
  },
  {
    title: "Pricing Strategies",
    href: "/marketing/pricing-strategies",
    description:
      "Set prices using costs, customer value, demand, competition, positioning, and business revenue objectives.",
    icon: DollarSign,
    category: "REVENUE",
    accent: "emerald",
  },
];

const accentStyles = {
  blue: {
    icon: "bg-blue-50 text-blue-700 border-blue-100",
    label: "text-blue-600",
    glow: "group-hover:border-blue-200",
  },
  indigo: {
    icon: "bg-indigo-50 text-indigo-700 border-indigo-100",
    label: "text-indigo-600",
    glow: "group-hover:border-indigo-200",
  },
  violet: {
    icon: "bg-violet-50 text-violet-700 border-violet-100",
    label: "text-violet-600",
    glow: "group-hover:border-violet-200",
  },
  cyan: {
    icon: "bg-cyan-50 text-cyan-700 border-cyan-100",
    label: "text-cyan-600",
    glow: "group-hover:border-cyan-200",
  },
  pink: {
    icon: "bg-pink-50 text-pink-700 border-pink-100",
    label: "text-pink-600",
    glow: "group-hover:border-pink-200",
  },
  orange: {
    icon: "bg-orange-50 text-orange-700 border-orange-100",
    label: "text-orange-600",
    glow: "group-hover:border-orange-200",
  },
  emerald: {
    icon: "bg-emerald-50 text-emerald-700 border-emerald-100",
    label: "text-emerald-600",
    glow: "group-hover:border-emerald-200",
  },
};

export default function MarketingPage() {
  return (
    <main className="overflow-hidden">

      {/* ================================================== */}
      {/* HERO SECTION */}
      {/* ================================================== */}
      <section className="relative overflow-hidden border-b border-blue-100 bg-gradient-to-br from-white via-blue-50 to-indigo-100">

        {/* Background Orbs */}
        <div className="pointer-events-none absolute -left-40 top-0 h-[420px] w-[420px] rounded-full bg-blue-200/30 blur-[100px]" />
        <div className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-indigo-300/30 blur-[120px]" />

        {/* Decorative grid */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.035]">
          <div className="h-full w-full bg-[linear-gradient(to_right,#1e40af_1px,transparent_1px),linear-gradient(to_bottom,#1e40af_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-2 lg:px-8 lg:py-24">

          {/* Hero Copy */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-3 py-1.5 text-xs font-semibold tracking-wide text-blue-700 shadow-sm backdrop-blur">
              <Sparkles className="h-3.5 w-3.5" />
              BUSINESS & MARKET KNOWLEDGE
            </div>

            <h1 className="mt-6 text-4xl font-bold leading-[1.12] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Understand the Market.
              <span className="mt-2 block bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Create Demand.
              </span>
              <span className="mt-2 block text-slate-900">
                Grow a Business.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              Marketing connects what businesses offer with what people need.
              Explore how companies attract customers, build trust, compete,
              generate sales, and turn market opportunities into business growth.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="#marketing-topics"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-700 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-700/20 transition hover:bg-blue-800"
              >
                Explore Marketing
                <ArrowUpRight className="h-4 w-4" />
              </Link>

              <Link
                href="/marketing/what-is-marketing"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white/80 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:text-blue-700"
              >
                Marketing Fundamentals
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Mini stats */}
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-blue-200/70 pt-6">
              <div>
                <div className="text-2xl font-bold text-slate-900">22</div>
                <div className="text-xs font-medium text-slate-500">
                  Knowledge Topics
                </div>
              </div>

              <div className="h-10 w-px bg-blue-200" />

              <div>
                <div className="text-2xl font-bold text-slate-900">Customer</div>
                <div className="text-xs font-medium text-slate-500">
                  Centric Thinking
                </div>
              </div>

              <div className="h-10 w-px bg-blue-200" />

              <div>
                <div className="text-2xl font-bold text-slate-900">Business</div>
                <div className="text-xs font-medium text-slate-500">
                  Growth & Value
                </div>
              </div>
            </div>
          </div>

          {/* ================================================== */}
          {/* HERO SIDE DIAGRAM */}
          {/* ================================================== */}
          <div className="relative mx-auto w-full max-w-lg">

            {/* Outer Card */}
            <div className="relative overflow-hidden rounded-[2rem] border border-white/80 bg-white/75 p-5 shadow-2xl shadow-blue-900/10 backdrop-blur-xl sm:p-7">

              {/* Diagram Heading */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
                    The Marketing Engine
                  </p>
                  <h2 className="mt-1 text-lg font-bold text-slate-900">
                    From Customer Need to Business Growth
                  </h2>
                </div>

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                  <ChartNoAxesCombined className="h-5 w-5" />
                </div>
              </div>

              {/* Flow Diagram */}
              <div className="mt-7 space-y-3">

                {/* Customer Need */}
                <div className="flex items-center gap-4 rounded-2xl border border-blue-100 bg-gradient-to-r from-blue-50 to-white p-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                    <Lightbulb className="h-5 w-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-bold text-slate-900">
                      Customer Need
                    </p>
                    <p className="text-xs text-slate-500">
                      Problems, wants & demand
                    </p>
                  </div>
                  <span className="rounded-full bg-blue-100 px-2 py-1 text-[10px] font-bold text-blue-700">
                    START
                  </span>
                </div>

                <div className="flex justify-center">
                  <div className="h-5 w-px bg-blue-300" />
                </div>

                {/* Market Understanding */}
                <div className="flex items-center gap-4 rounded-2xl border border-indigo-100 bg-gradient-to-r from-indigo-50 to-white p-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-100 text-indigo-700">
                    <Search className="h-5 w-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-bold text-slate-900">
                      Market Understanding
                    </p>
                    <p className="text-xs text-slate-500">
                      Research, competitors & opportunities
                    </p>
                  </div>
                </div>

                <div className="flex justify-center">
                  <div className="h-5 w-px bg-indigo-300" />
                </div>

                {/* Value creation */}
                <div className="flex items-center gap-4 rounded-2xl border border-violet-100 bg-gradient-to-r from-violet-50 to-white p-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-100 text-violet-700">
                    <Layers3 className="h-5 w-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-bold text-slate-900">
                      Value & Marketing Strategy
                    </p>
                    <p className="text-xs text-slate-500">
                      Product, price, positioning & promotion
                    </p>
                  </div>
                </div>

                <div className="flex justify-center">
                  <div className="h-5 w-px bg-violet-300" />
                </div>

                {/* Customer acquisition */}
                <div className="flex items-center gap-4 rounded-2xl border border-cyan-100 bg-gradient-to-r from-cyan-50 to-white p-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-100 text-cyan-700">
                    <HeartHandshake className="h-5 w-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-bold text-slate-900">
                      Reach & Customer Acquisition
                    </p>
                    <p className="text-xs text-slate-500">
                      Channels, communication & conversion
                    </p>
                  </div>
                </div>

                <div className="flex justify-center">
                  <div className="h-5 w-px bg-emerald-300" />
                </div>

                {/* Outcome */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-2xl border border-emerald-100 bg-gradient-to-br from-emerald-50 to-white p-4">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700">
                      <Wallet className="h-4 w-4" />
                    </div>
                    <p className="mt-3 text-sm font-bold text-slate-900">
                      Sales & Revenue
                    </p>
                    <p className="mt-1 text-[11px] leading-5 text-slate-500">
                      Transactions & income
                    </p>
                  </div>

                  <div className="rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-4">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-100 text-blue-700">
                      <TrendingUp className="h-4 w-4" />
                    </div>
                    <p className="mt-3 text-sm font-bold text-slate-900">
                      Growth
                    </p>
                    <p className="mt-1 text-[11px] leading-5 text-slate-500">
                      Retention & expansion
                    </p>
                  </div>
                </div>
              </div>

              {/* Diagram Footer */}
              <div className="mt-5 flex items-center justify-between rounded-xl bg-slate-900 px-4 py-3 text-white">
                <span className="text-xs font-medium text-slate-300">
                  Marketing creates value
                </span>
                <span className="text-xs font-bold text-blue-300">
                  Value → Relationships → Growth
                </span>
              </div>
            </div>

            {/* Floating Decorative Element */}
            <div className="absolute -right-4 -top-5 hidden rounded-2xl border border-blue-100 bg-white p-3 shadow-xl sm:block">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                  <BarChart3 className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-[10px] font-medium text-slate-500">
                    Business Focus
                  </p>
                  <p className="text-xs font-bold text-slate-900">
                    Value & Growth
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* CUSTOMER JOURNEY STRIP */}
      {/* ================================================== */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="mb-6">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
              How Marketing Works
            </p>
            <h2 className="mt-2 text-xl font-bold text-slate-900 sm:text-2xl">
              From Being Unknown to Becoming a Customer
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
              Marketing guides people through stages of discovering a business,
              evaluating its offerings, making a purchase, and potentially
              returning again.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {[
              {
                title: "Awareness",
                description: "People discover your business.",
                icon: Radio,
                color: "bg-blue-50 text-blue-700",
              },
              {
                title: "Interest",
                description: "They explore your offer.",
                icon: Search,
                color: "bg-indigo-50 text-indigo-700",
              },
              {
                title: "Consideration",
                description: "They compare their options.",
                icon: Target,
                color: "bg-violet-50 text-violet-700",
              },
              {
                title: "Purchase",
                description: "They become paying customers.",
                icon: Wallet,
                color: "bg-cyan-50 text-cyan-700",
              },
              {
                title: "Loyalty",
                description: "They return and recommend.",
                icon: HeartHandshake,
                color: "bg-emerald-50 text-emerald-700",
              },
            ].map((stage, index) => {
              const Icon = stage.icon;

              return (
                <div
                  key={stage.title}
                  className="relative rounded-2xl border border-slate-200 bg-white p-4 transition hover:border-blue-200 hover:shadow-md"
                >
                  <div className="flex items-center justify-between">
                    <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${stage.color}`}>
                      <Icon className="h-5 w-5" />
                    </div>

                    <span className="text-xs font-bold text-slate-300">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="mt-4 text-sm font-bold text-slate-900">
                    {stage.title}
                  </h3>
                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    {stage.description}
                  </p>

                  {index !== 4 && (
                    <div className="absolute -right-3 top-1/2 z-10 hidden h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-400 lg:flex">
                      <ChevronRight className="h-3.5 w-3.5" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* TOPIC EXPLORER */}
      {/* ================================================== */}
      <section id="marketing-topics" className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">

          {/* Section Header */}
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
                <BookOpen className="h-4 w-4" />
                Knowledge Library
              </div>

              <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                Explore the World of Marketing
              </h2>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
                From understanding customers to building brands, managing campaigns,
                and generating revenue—explore each area of marketing.
              </p>
            </div>

            <div className="inline-flex shrink-0 items-center gap-2 rounded-xl border border-blue-100 bg-white px-4 py-2.5 text-sm font-semibold text-blue-700 shadow-sm">
              <Layers3 className="h-4 w-4" />
              {topics.length} Topics
            </div>
          </div>

          {/* Topic Cards */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {topics.map((topic, index) => {
              const Icon = topic.icon;
              const styles = accentStyles[topic.accent];

              return (
                <Link
                  key={topic.href}
                  href={topic.href}
                  className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/60 ${styles.glow}`}
                >
                  {/* Card Decoration */}
                  <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gradient-to-br from-blue-50 to-indigo-50 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />

                  {/* Card Top */}
                  <div className="relative flex items-center justify-between">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-xl border ${styles.icon} transition-transform duration-300 group-hover:scale-110`}>
                      <Icon className="h-5 w-5" strokeWidth={1.8} />
                    </div>

                    <span className="text-xs font-bold tabular-nums text-slate-300">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Card Content */}
                  <div className="relative mt-5 flex-1">
                    <span className={`text-[10px] font-bold uppercase tracking-[0.16em] ${styles.label}`}>
                      {topic.category}
                    </span>

                    <h3 className="mt-2 text-base font-bold leading-6 text-slate-900 transition-colors group-hover:text-blue-700">
                      {topic.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      {topic.description}
                    </p>
                  </div>

                  {/* Card Footer */}
                  <div className="relative mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
                    <span className={`text-xs font-semibold ${styles.label}`}>
                      Explore Concept
                    </span>

                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-50 text-slate-400 transition-all group-hover:bg-blue-600 group-hover:text-white">
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* BOTTOM BUSINESS INSIGHT SECTION */}
      {/* ================================================== */}
      <section className="border-t border-blue-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-6 sm:p-10">

            <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-blue-100/70 blur-3xl" />

            <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-3 py-1.5 text-xs font-semibold text-blue-700">
                  <Lightbulb className="h-3.5 w-3.5" />
                  THE BIGGER PICTURE
                </div>

                <h2 className="mt-4 max-w-2xl text-2xl font-bold leading-tight text-slate-950 sm:text-3xl">
                  Great Marketing Is More Than Making People Buy.
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600">
                  Sustainable marketing starts with understanding people. A
                  business must identify a real need, provide meaningful value,
                  communicate honestly, deliver a good experience, and maintain
                  relationships. Revenue is an important business outcome—but
                  lasting growth comes from creating value customers are willing
                  to choose repeatedly.
                </p>
              </div>

              {/* Closing Icon Illustration */}
              <div className="relative flex items-center justify-center lg:pr-8">
                <div className="flex h-36 w-36 items-center justify-center rounded-full border border-blue-100 bg-white shadow-xl shadow-blue-100/70">
                  <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 text-blue-700">
                    <TrendingUp className="h-12 w-12" strokeWidth={1.5} />
                  </div>
                </div>

                <div className="absolute right-0 top-0 flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-100 bg-white text-blue-600 shadow-md">
                  <Users className="h-5 w-5" />
                </div>

                <div className="absolute bottom-0 left-0 flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-100 bg-white text-emerald-600 shadow-md">
                  <Wallet className="h-5 w-5" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
