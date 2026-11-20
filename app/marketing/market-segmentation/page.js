
import Link from "next/link";
import {
  ArrowRight,
  Users,
  Target,
  MapPin,
  Wallet,
  Heart,
  ShoppingBag,
  Smartphone,
  Car,
  Coffee,
  BriefcaseBusiness,
  GraduationCap,
  ChartNoAxesCombined,
  Search,
  Filter,
  Layers,
  Lightbulb,
  CheckCircle2,
  CircleDollarSign,
  MessageCircle,
  TrendingUp,
  BarChart3,
  UserRound,
  Globe,
  Activity,
  ShoppingCart,
  Store,
  Sparkles,
  ShieldCheck,
  ClipboardList,
  Crosshair,
  Boxes,
  Eye,Package ,Megaphone
} from "lucide-react";
import AdSlot from "../../../components/AdSlot";

export const metadata = {
  title: "Market Segmentation | Meaning, Types, Examples & Process | PriceTag HUB",
  description:
    "Understand market segmentation, its types, bases, process and importance with relatable business examples, customer diagrams and practical marketing applications.",
};

function SectionHeading({ eyebrow, title, description, dark = false }) {
  return (
    <div className="mb-9 max-w-3xl">
      {eyebrow && (
        <p
          className={`mb-3 text-sm font-bold uppercase tracking-wider ${
            dark ? "text-blue-300" : "text-blue-600"
          }`}
        >
          {eyebrow}
        </p>
    )}
      <h2
        className={`text-3xl font-bold tracking-tight md:text-4xl ${
          dark ? "text-white" : "text-gray-950"
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

const segmentationBases = [
  {
    title: "Demographic",
    icon: Users,
    color: "bg-blue-100 text-blue-700",
    border: "border-blue-200",
    gradient: "from-blue-500 to-blue-700",
    question: "Who are the customers?",
    description:
      "Dividing customers using measurable characteristics related to people and households.",
    factors: ["Age", "Income", "Occupation", "Education", "Family size", "Gender"],
    example:
      "A bank offers student accounts, salary accounts and retirement-focused services.",
  },
  {
    title: "Geographic",
    icon: MapPin,
    color: "bg-cyan-100 text-cyan-700",
    border: "border-cyan-200",
    gradient: "from-cyan-500 to-sky-700",
    question: "Where do they live?",
    description:
      "Grouping customers based on where they live, work or shop, and the characteristics of those locations.",
    factors: ["Country", "State", "City", "Climate", "Urban / rural", "Local culture"],
    example:
      "A clothing brand sells heavier winter clothing in colder regions and lighter products in warmer regions.",
  },
  {
    title: "Psychographic",
    icon: Heart,
    color: "bg-violet-100 text-violet-700",
    border: "border-violet-200",
    gradient: "from-violet-500 to-purple-700",
    question: "What do they value?",
    description:
      "Grouping customers based on their lifestyle, interests, values, attitudes and personality-related characteristics.",
    factors: ["Lifestyle", "Values", "Interests", "Attitudes", "Personality", "Aspirations"],
    example:
      "A travel company targets customers who prefer adventure, while another targets customers seeking comfort and luxury.",
  },
  {
    title: "Behavioral",
    icon: Activity,
    color: "bg-emerald-100 text-emerald-700",
    border: "border-emerald-200",
    gradient: "from-emerald-500 to-teal-700",
    question: "How do they behave?",
    description:
      "Grouping customers based on their actions, usage, purchase patterns and responses to products or brands.",
    factors: ["Usage frequency", "Loyalty", "Purchase occasions", "Benefits sought", "Readiness", "Buying habits"],
    example:
      "An online store offers rewards to frequent buyers and introductory offers to first-time customers.",
  },
];

const customerExamples = [
  {
    icon: GraduationCap,
    title: "College Students",
    color: "bg-blue-100 text-blue-700",
    traits: "Budget conscious, mobile-first, looking for value",
    business: "Affordable plans, student discounts, online services",
  },
  {
    icon: BriefcaseBusiness,
    title: "Working Professionals",
    color: "bg-indigo-100 text-indigo-700",
    traits: "Time constrained, convenience and reliability focused",
    business: "Premium convenience, faster service, productivity products",
  },
  {
    icon: Heart,
    title: "Fitness Enthusiasts",
    color: "bg-rose-100 text-rose-700",
    traits: "Health-oriented, activity focused, goal driven",
    business: "Fitness products, activewear, workout services",
  },
  {
    icon: Wallet,
    title: "Value Seekers",
    color: "bg-amber-100 text-amber-700",
    traits: "Compare prices, seek useful features and savings",
    business: "Bundles, discounts, affordable product options",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Understand the Market",
    icon: Search,
    text: "Research customers, needs, purchasing behaviour, competition and available market data.",
  },
  {
    number: "02",
    title: "Identify Differences",
    icon: Eye,
    text: "Find meaningful differences between customers, such as budget, needs, location and preferences.",
  },
  {
    number: "03",
    title: "Create Customer Groups",
    icon: Layers,
    text: "Organize customers into segments with shared characteristics or needs.",
  },
  {
    number: "04",
    title: "Evaluate Segments",
    icon: BarChart3,
    text: "Compare their size, potential, accessibility, profitability and fit with business capabilities.",
  },
  {
    number: "05",
    title: "Select Target Market",
    icon: Crosshair,
    text: "Choose the segment or segments the business wants to serve.",
  },
  {
    number: "06",
    title: "Develop Marketing Mix",
    icon: Target,
    text: "Design products, prices, channels and promotions suited to the selected customers.",
  },
];

const faqs = [
  {
    question: "What is market segmentation in simple words?",
    answer:
      "Market segmentation means dividing a broad market into smaller groups of customers who share similar needs, characteristics, preferences or behaviour, so a business can serve them more effectively.",
  },
  {
    question: "What are the four types of market segmentation?",
    answer:
      "The four widely used bases are demographic, geographic, psychographic and behavioral segmentation. Businesses may combine multiple bases to understand their customers more precisely.",
  },
  {
    question: "Why do businesses segment their markets?",
    answer:
      "Businesses segment markets to understand customer differences, create more relevant products, improve marketing communication, use resources more efficiently and identify opportunities to compete.",
  },
  {
    question: "What is an example of market segmentation?",
    answer:
      "A smartphone business may identify students who need affordable phones, professionals who need productivity features and photography enthusiasts who value camera performance. It can design different products, prices and campaigns for these groups.",
  },
  {
    question: "What is the difference between market segmentation and targeting?",
    answer:
      "Segmentation divides a market into groups. Targeting evaluates those groups and selects which ones the business will focus on serving.",
  },
  {
    question: "Can a small business use market segmentation?",
    answer:
      "Yes. Even a local café can segment customers into office workers, students, families and evening visitors, then adjust its menu, pricing, offers and service to fit different needs.",
  },
  {
    question: "What makes a market segment useful?",
    answer:
      "A useful segment is identifiable, sufficiently meaningful in size or value, reachable through suitable channels, distinct in its needs or response, and practical for the business to serve.",
  },
  {
    question: "Is market segmentation only based on age or income?",
    answer:
      "No. Age and income are demographic factors. Businesses also segment by location, lifestyle, interests, buying behaviour, loyalty, usage and the benefits customers seek.",
  },
];

export default function MarketSegmentationPage() {
  return (
    <main className="overflow-hidden">
      {/* HERO */}
      <section className="relative bg-gradient-to-br from-white via-blue-50 to-indigo-100 px-4 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-bold text-blue-700 shadow-sm">
                <Users size={16} />
                Customer & Market Strategy
              </div>

              <h1 className="text-4xl font-bold leading-tight tracking-tight text-gray-950 md:text-6xl">
                Market
                <span className="mt-1 block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Segmentation
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
                Understand why businesses divide customers into groups, how they
                identify different markets and how those insights shape products,
                prices, promotions and business opportunities.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="#types"
                  className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-bold text-white transition hover:bg-blue-700"
                >
                  Explore Segmentation <ArrowRight size={18} />
                </Link>
                <Link
                  href="#real-example"
                  className="inline-flex items-center gap-2 rounded-xl border border-blue-200 bg-white px-5 py-3 font-bold text-gray-700 transition hover:border-blue-400 hover:text-blue-700"
                >
                  Business Examples
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {["Demographic", "Geographic", "Psychographic", "Behavioral"].map(
                  (label) => (
                    <span
                      key={label}
                      className="rounded-full border border-blue-100 bg-white/90 px-3 py-2 text-sm font-bold text-gray-700"
                    >
                      {label}
                    </span>
                  )
                )}
              </div>
            </div>

            {/* Hero segmentation visual */}
            <div className="relative">
              <div className="rounded-3xl border border-blue-100 bg-white p-5 shadow-xl shadow-blue-900/5 md:p-7">
                <div className="mb-5">
                  <p className="text-sm font-bold text-gray-500">
                    From One Broad Market
                  </p>
                  <h2 className="mt-1 text-xl font-bold text-gray-900">
                    Different Customers. Different Needs.
                  </h2>
                </div>

                <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 p-5 text-center text-white">
                  <Users className="mx-auto" size={29} />
                  <h3 className="mt-2 font-bold">Entire Market</h3>
                  <p className="mt-1 text-sm text-blue-100">
                    People with different needs and preferences
                  </p>
                </div>

                <div className="my-5 flex justify-center">
                  <div className="h-8 w-0.5 bg-blue-200" />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {[
                    {
                      name: "Budget Buyers",
                      icon: Wallet,
                      color: "bg-blue-50 border-blue-200 text-blue-700",
                    },
                    {
                      name: "Premium Buyers",
                      icon: Sparkles,
                      color: "bg-violet-50 border-violet-200 text-violet-700",
                    },
                    {
                      name: "Convenience Seekers",
                      icon: ShoppingBag,
                      color: "bg-sky-50 border-sky-200 text-sky-700",
                    },
                    {
                      name: "Feature Seekers",
                      icon: Lightbulb,
                      color: "bg-indigo-50 border-indigo-200 text-indigo-700",
                    },
                  ].map((item) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={item.name}
                        className={`rounded-2xl border p-4 text-center ${item.color}`}
                      >
                        <Icon className="mx-auto" size={23} />
                        <p className="mt-2 text-sm font-bold">{item.name}</p>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-5 rounded-2xl border border-gray-200 bg-gray-50 p-4 text-center">
                  <div className="flex items-center justify-center gap-2 text-blue-700">
                    <Filter size={18} />
                    <p className="font-bold">Segment → Understand → Serve</p>
                  </div>
                  <p className="mt-2 text-xs leading-5 text-gray-500">
                    Businesses can build more relevant offers for each customer group.
                  </p>
                </div>
              </div>
              <div className="absolute -bottom-5 -right-4 -z-10 h-32 w-32 rounded-full bg-indigo-300/30 blur-2xl" />
              <div className="absolute -left-4 -top-5 -z-10 h-32 w-32 rounded-full bg-blue-300/30 blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* WHAT IS MARKET SEGMENTATION */}
      <section className="px-4 py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Understand the Concept"
            title="What Is Market Segmentation?"
            description="Market segmentation is the process of dividing a broad market into smaller groups of customers with similar characteristics, needs or behaviours."
          />

          <div className="grid gap-7 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <div className="rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-6 md:p-8">
                <div className="mb-4 inline-flex rounded-xl bg-blue-100 p-3 text-blue-700">
                  <Lightbulb size={26} />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  The Core Idea
                </h3>
                <p className="mt-4 text-base leading-8 text-gray-700">
                  Imagine a company selling smartphones. Not every customer wants
                  the same phone. One person may want a low-cost device for
                  calling, studying and basic apps. Another may want a powerful
                  device for gaming. Someone else may prioritize photography,
                  premium design or long battery life.
                </p>
                <p className="mt-4 text-base leading-8 text-gray-700">
                  Instead of treating all these customers as one identical market,
                  the company can identify groups with different needs. It can then
                  understand those groups and decide which customers it can serve
                  most effectively.
                </p>
              </div>
            </div>

            <div className="space-y-4 lg:col-span-2">
              {[
                {
                  icon: Users,
                  title: "Recognize Differences",
                  text: "Customers are not identical in needs, budgets or buying preferences.",
                  color: "bg-blue-50 text-blue-700",
                },
                {
                  icon: Filter,
                  title: "Group Similar Customers",
                  text: "Identify groups that share useful characteristics.",
                  color: "bg-indigo-50 text-indigo-700",
                },
                {
                  icon: Target,
                  title: "Serve More Relevant Needs",
                  text: "Build suitable products, offers and experiences for the groups chosen.",
                  color: "bg-sky-50 text-sky-700",
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="flex gap-4 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm"
                  >
                    <div className={`rounded-xl p-3 ${item.color}`}>
                      <Icon size={23} />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">{item.title}</h3>
                      <p className="mt-1 text-sm leading-6 text-gray-600">
                        {item.text}
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
      {/* WHY SEGMENT */}
      <section className="bg-gray-50 px-4 py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Business Value"
            title="Why Do Businesses Segment Markets?"
            description="Segmentation helps businesses understand customers better and make more focused marketing and product decisions."
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Target,
                title: "Find the Right Customers",
                text: "Identify the people most likely to need, value and purchase the business's products.",
              },
              {
                icon: Package,
                title: "Create Relevant Products",
                text: "Develop features, designs, sizes or services that fit different customer needs.",
              },
              {
                icon: Wallet,
                title: "Build Suitable Pricing",
                text: "Offer different price levels, packages or value propositions for different budgets.",
              },
              {
                icon: Megaphone,
                title: "Improve Marketing Messages",
                text: "Communicate specific benefits instead of using the same message for every customer.",
              },
              {
                icon: BarChart3,
                title: "Use Resources Effectively",
                text: "Focus marketing effort and budget on customers and opportunities that matter to the business.",
              },
              {
                icon: TrendingUp,
                title: "Discover Opportunities",
                text: "Find underserved customer groups, new demand or gaps competitors have overlooked.",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-gray-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="mb-4 inline-flex rounded-xl bg-blue-100 p-3 text-blue-700">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-gray-600">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

  {/* TYPES OF MARKET SEGMENTATION */}
  <section id="types" className="px-4 py-16 md:py-20">
    <div className="mx-auto max-w-7xl">
      <SectionHeading
        eyebrow="Four Major Bases"
        title="Types of Market Segmentation"
        description="Businesses can divide customers using several bases. The four commonly used categories help reveal different aspects of who customers are, where they are, what they value and how they behave."
      />

      <div className="space-y-6">
        {segmentationBases.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              className={`overflow-hidden rounded-3xl border ${item.border} bg-white shadow-sm`}
            >
              <div className={`bg-gradient-to-r ${item.gradient} p-6 text-white md:p-8`}>
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="rounded-2xl bg-white/15 p-4">
                      <Icon size={29} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white/75">
                        SEGMENTATION TYPE {index + 1}
                      </p>
                      <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                    </div>
                  </div>
                  <p className="rounded-full bg-white/15 px-4 py-2 text-sm font-bold text-white">
                    {item.question}
                  </p>
                </div>
              </div>

              <div className="grid gap-7 p-6 md:p-8 lg:grid-cols-2">
                <div>
                  <h4 className="text-lg font-bold text-gray-900">
                    What It Means
                  </h4>
                  <p className="mt-3 text-base leading-7 text-gray-600">
                    {item.description}
                  </p>

                  <div className="mt-5 rounded-2xl bg-gray-50 p-5">
                    <p className="font-bold text-gray-900">Common factors</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {item.factors.map((factor) => (
                        <span
                          key={factor}
                          className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-bold text-gray-700"
                        >
                          {factor}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <Lightbulb className="text-blue-600" size={25} />
                    <h4 className="font-bold text-gray-900">Business Example</h4>
                  </div>
                  <p className="text-sm leading-7 text-gray-700">{item.example}</p>
                  <div className="mt-5 rounded-xl bg-white p-4">
                    <p className="text-xs font-bold uppercase tracking-wide text-blue-600">
                      Business Insight
                    </p>
                    <p className="mt-2 text-sm leading-6 text-gray-600">
                      This basis helps the business identify differences that may
                      affect what customers value, what they purchase and how they
                      respond to marketing.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>

  {/* DEMOGRAPHIC IN REAL LIFE */}
  <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 px-4 py-16 md:py-20">
    <div className="mx-auto max-w-7xl">
      <SectionHeading
        eyebrow="Practical Application"
        title="How Demographic Segmentation Changes an Offer"
        description="A single business may offer different products or services to people at different life stages, incomes and occupations."
      />

      <div className="overflow-hidden rounded-3xl border border-blue-200 bg-white shadow-sm">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-6 text-white md:p-8">
          <div className="flex items-center gap-4">
            <div className="rounded-2xl bg-white/15 p-4">
              <BriefcaseBusiness size={29} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">
                Example | A Banking Business
              </h3>
              <p className="mt-1 text-sm text-blue-100">
                One bank, different customer needs
              </p>
            </div>
          </div>
        </div>

        <div className="p-6 md:p-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                name: "Students",
                icon: GraduationCap,
                color: "bg-blue-100 text-blue-700",
                needs: "Low fees, digital banking and easy access",
                offer: "Student account, payment tools and education benefits",
              },
              {
                name: "Salaried Employees",
                icon: BriefcaseBusiness,
                color: "bg-indigo-100 text-indigo-700",
                needs: "Salary management, savings and credit",
                offer: "Salary account, cards, loans and savings products",
              },
              {
                name: "Business Owners",
                icon: Store,
                color: "bg-sky-100 text-sky-700",
                needs: "Transactions, cash flow and business finance",
                offer: "Business accounts, payment services and working capital",
              },
              {
                name: "Retired Customers",
                icon: Heart,
                color: "bg-emerald-100 text-emerald-700",
                needs: "Income stability, security and convenient services",
                offer: "Retirement-focused deposits, service support and banking access",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.name}
                  className="rounded-2xl border border-gray-200 bg-gray-50 p-5"
                >
                  <div className={`mb-4 inline-flex rounded-xl p-3 ${item.color}`}>
                    <Icon size={24} />
                  </div>
                  <h3 className="font-bold text-gray-900">{item.name}</h3>
                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    <span className="font-bold text-gray-800">Needs:</span> {item.needs}
                  </p>
                  <div className="mt-4 rounded-xl bg-white p-4">
                    <p className="text-xs font-bold uppercase tracking-wide text-blue-600">
                      Suitable Offer
                    </p>
                    <p className="mt-2 text-sm leading-6 text-gray-700">{item.offer}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-5">
            <p className="text-sm leading-7 text-blue-900">
              <span className="font-bold">What changed?</span> The bank is not
              creating a completely separate bank for each group. It is adapting
              its product offerings, communication and service experience to
              different customer requirements.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
<AdSlot />
  {/* RELATABLE SEGMENTS */}
  <section className="px-4 py-16 md:py-20">
    <div className="mx-auto max-w-7xl">
      <SectionHeading
        eyebrow="Customer Thinking"
        title="Customers Are Not All Looking for the Same Thing"
        description="The same product category can attract people for different reasons. Understanding those reasons helps businesses design offers that are relevant to the segment."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {customerExamples.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              className="rounded-2xl border border-gray-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className={`mb-4 inline-flex rounded-xl p-3 ${item.color}`}>
                <Icon size={25} />
              </div>
              <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
              <div className="mt-4 rounded-xl bg-gray-50 p-4">
                <p className="text-xs font-bold uppercase tracking-wide text-gray-400">
                  Customer Traits
                </p>
                <p className="mt-2 text-sm leading-6 text-gray-700">{item.traits}</p>
              </div>
              <div className="mt-3 rounded-xl bg-blue-50 p-4">
                <p className="text-xs font-bold uppercase tracking-wide text-blue-600">
                  Possible Business Offer
                </p>
                <p className="mt-2 text-sm leading-6 text-gray-700">{item.business}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>

  {/* FULL SMARTPHONE CASE */}
  <section id="real-example" className="bg-gray-950 px-4 py-16 md:py-20">
    <div className="mx-auto max-w-7xl">
      <SectionHeading
        eyebrow="Complete Business Case"
        title="How a Smartphone Company Segments Its Market"
        description="Let's imagine a smartphone company wants to launch a new range of phones. Rather than assuming every customer wants the same features, it researches different needs and buying priorities."
        dark
      />

      <div className="rounded-3xl border border-white/10 bg-white/5 p-5 md:p-8">
        <div className="mb-6 flex items-center gap-4">
          <div className="rounded-2xl bg-blue-500/15 p-4 text-blue-300">
            <Smartphone size={29} />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">Nova Mobile</h3>
            <p className="mt-1 text-sm text-gray-400">
              Illustrative company | Customer segments and product decisions
            </p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            {
              name: "Budget Customers",
              icon: Wallet,
              color: "bg-blue-500/10 text-blue-300 border-blue-400/20",
              need: "Affordable price, battery life, essential apps",
              product: "Entry-level phone",
              price: "Affordable",
              promotion: "Value and reliability",
            },
            {
              name: "Gaming Customers",
              icon: Activity,
              color: "bg-violet-500/10 text-violet-300 border-violet-400/20",
              need: "Performance, cooling, high refresh rate",
              product: "Performance-focused phone",
              price: "Mid-range / premium",
              promotion: "Speed and gaming performance",
            },
            {
              name: "Photography Customers",
              icon: Eye,
              color: "bg-sky-500/10 text-sky-300 border-sky-400/20",
              need: "Camera quality, video, storage",
              product: "Camera-focused phone",
              price: "Mid-range / premium",
              promotion: "Photo and video capability",
            },
            {
              name: "Premium Customers",
              icon: Sparkles,
              color: "bg-amber-500/10 text-amber-300 border-amber-400/20",
              need: "Design, status, premium experience",
              product: "Premium flagship",
              price: "High",
              promotion: "Design, experience and prestige",
            },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.name}
                className={`rounded-2xl border p-5 ${item.color}`}
              >
                <Icon size={24} />
                <h4 className="mt-3 font-bold text-white">{item.name}</h4>
                <div className="mt-4 rounded-xl bg-black/20 p-3">
                  <p className="text-xs font-bold text-white/60">Main Needs</p>
                  <p className="mt-2 text-sm leading-6 text-gray-200">{item.need}</p>
                </div>
                <div className="mt-3 space-y-2 text-sm">
                  <p>
                    <span className="font-bold text-white">Product:</span>{" "}
                    <span className="text-gray-300">{item.product}</span>
                  </p>
                  <p>
                    <span className="font-bold text-white">Price:</span>{" "}
                    <span className="text-gray-300">{item.price}</span>
                  </p>
                  <p>
                    <span className="font-bold text-white">Message:</span>{" "}
                    <span className="text-gray-300">{item.promotion}</span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-6 rounded-2xl border border-blue-400/20 bg-blue-500/10 p-5 md:p-6">
          <div className="flex items-start gap-3">
            <Lightbulb className="mt-1 shrink-0 text-blue-300" size={24} />
            <div>
              <h3 className="font-bold text-white">The Business Insight</h3>
              <p className="mt-2 text-sm leading-7 text-gray-300">
                The company discovered that the smartphone market contains
                customers with different priorities. This segmentation can help
                it develop suitable models, decide price ranges, choose
                promotional messages and avoid spending the same marketing
                budget on people with completely different needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* SEGMENTATION PROCESS */}
  <section className="px-4 py-16 md:py-20">
    <div className="mx-auto max-w-7xl">
      <SectionHeading
        eyebrow="Practical Process"
        title="How Market Segmentation Works"
        description="Segmentation is not simply guessing who the customers are. Businesses use market information to identify groups, evaluate them and decide how to serve them."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {processSteps.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.number}
              className="relative rounded-2xl border border-gray-200 bg-white p-6 transition hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <div className="inline-flex rounded-xl bg-blue-100 p-3 text-blue-700">
                  <Icon size={24} />
                </div>
                <span className="text-3xl font-bold text-blue-100">
                  {item.number}
                </span>
              </div>
              <h3 className="mt-5 text-lg font-bold text-gray-900">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-gray-600">{item.text}</p>
            </div>
          );
        })}
      </div>

      <div className="mt-7 rounded-3xl border border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50 p-6 md:p-8">
        <div className="flex items-start gap-4">
          <div className="rounded-xl bg-white p-3 text-blue-700">
            <ChartNoAxesCombined size={26} />
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900">
              Segmentation Leads to Targeting
            </h3>
            <p className="mt-3 text-sm leading-7 text-gray-700">
              After identifying market segments, a business still needs to evaluate
              them and choose which groups to serve. This next decision is called
              market targeting. Segmentation identifies the opportunities; targeting
              decides where the business will focus.
            </p>
            <Link
              href="/marketing/segmentation-targeting-positioning"
              className="mt-4 inline-flex items-center gap-2 font-bold text-blue-700 hover:text-blue-900"
            >
              Explore Segmentation, Targeting & Positioning <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
<AdSlot />
  {/* SEGMENT QUALITY */}
  <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 px-4 py-16 md:py-20">
    <div className="mx-auto max-w-7xl">
      <SectionHeading
        eyebrow="Choosing Useful Segments"
        title="Not Every Customer Group Is a Good Opportunity"
        description="A segment may be identifiable, but that does not automatically make it worth pursuing. Businesses must consider whether it is practical and valuable to serve."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {[
          {
            title: "Measurable",
            icon: BarChart3,
            text: "Can the business estimate its size, characteristics and purchasing potential?",
          },
          {
            title: "Substantial",
            icon: TrendingUp,
            text: "Is the group large enough or valuable enough to justify serving it?",
          },
          {
            title: "Accessible",
            icon: MapPin,
            text: "Can the business reach the customers through available channels?",
          },
          {
            title: "Differentiable",
            icon: Layers,
            text: "Does the group have distinct needs or respond differently to marketing?",
          },
          {
            title: "Actionable",
            icon: ClipboardList,
            text: "Can the business actually create and deliver a suitable marketing plan?",
          },
          {
            title: "Worthwhile",
            icon: CircleDollarSign,
            text: "Does the segment offer reasonable revenue, profit or strategic value?",
          },
        ].map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              className="rounded-2xl border border-blue-100 bg-white p-6"
            >
              <div className="mb-4 inline-flex rounded-xl bg-blue-100 p-3 text-blue-700">
                <Icon size={24} />
              </div>
              <h3 className="font-bold text-gray-900">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-gray-600">{item.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  </section>

  {/* MASS MARKET VS SEGMENTED */}
  <section className="px-4 py-16 md:py-20">
    <div className="mx-auto max-w-7xl">
      <SectionHeading
        eyebrow="Marketing Approach"
        title="Mass Marketing vs. Segmented Marketing"
        description="A business can market one broadly similar offer to a large audience or develop more focused offers and messages for different customer groups."
      />

      <div className="grid gap-5 lg:grid-cols-2">
        <div className="rounded-3xl border border-gray-200 bg-white p-6 md:p-8">
          <div className="mb-4 inline-flex rounded-xl bg-gray-100 p-3 text-gray-700">
            <Globe size={25} />
          </div>
          <h3 className="text-xl font-bold text-gray-900">Mass Marketing</h3>
          <p className="mt-3 text-sm leading-7 text-gray-600">
            Uses a broad marketing approach with relatively similar products and
            messages for a large market, when customer needs are sufficiently
            common.
          </p>
          <div className="mt-5 rounded-2xl bg-gray-50 p-5">
            <p className="font-bold text-gray-900">Example</p>
            <p className="mt-2 text-sm leading-7 text-gray-600">
              A household cleaning product promoted to a wide audience around
              common everyday cleaning needs.
            </p>
          </div>
          <div className="mt-4 flex items-center gap-2 text-sm text-gray-600">
            <Users size={17} />
            Broad audience
          </div>
        </div>

        <div className="rounded-3xl border border-blue-200 bg-blue-50 p-6 md:p-8">
          <div className="mb-4 inline-flex rounded-xl bg-white p-3 text-blue-700">
            <Target size={25} />
          </div>
          <h3 className="text-xl font-bold text-gray-900">Segmented Marketing</h3>
          <p className="mt-3 text-sm leading-7 text-gray-600">
            Adapts offers, marketing messages or strategies for different
            customer groups based on their needs and characteristics.
          </p>
          <div className="mt-5 rounded-2xl bg-white p-5">
            <p className="font-bold text-gray-900">Example</p>
            <p className="mt-2 text-sm leading-7 text-gray-600">
              A clothing business creates different collections, price points
              and campaigns for office wear, casual wear and athletic wear.
            </p>
          </div>
          <div className="mt-4 flex items-center gap-2 text-sm text-blue-700">
            <Filter size={17} />
            Focused customer groups
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* COMMON MISTAKES */}
  <section className="bg-gray-50 px-4 py-16 md:py-20">
    <div className="mx-auto max-w-7xl">
      <SectionHeading
        eyebrow="Avoid Poor Segmentation"
        title="Common Market Segmentation Mistakes"
        description="Creating customer groups only helps when the groups are meaningful and lead to useful business decisions."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {[
          {
            title: "Too Many Small Segments",
            text: "Creating groups so narrow that they are difficult or expensive to serve profitably.",
          },
          {
            title: "Assuming Customers Are Identical",
            text: "Treating everyone as one market when their needs, budgets and buying behaviour differ substantially.",
          },
          {
            title: "Using Only Age or Income",
            text: "Ignoring lifestyle, motivation, location, usage and the benefits customers actually seek.",
          },
          {
            title: "Making Unsupported Assumptions",
            text: "Assigning preferences to groups without checking real customer data or research.",
          },
          {
            title: "Choosing Segments You Cannot Reach",
            text: "Identifying attractive customers but having no suitable product, distribution or marketing channels for them.",
          },
          {
            title: "Segmenting but Never Acting",
            text: "Collecting customer information without adapting the product, message, price or experience.",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-gray-200 bg-white p-6"
          >
            <div className="mb-3 inline-flex rounded-xl bg-amber-50 p-3 text-amber-600">
              <Eye size={22} />
            </div>
            <h3 className="font-bold text-gray-900">{item.title}</h3>
            <p className="mt-3 text-sm leading-7 text-gray-600">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
<AdSlot />
  {/* FAQ */}
  <section className="px-4 py-16 md:py-20">
    <div className="mx-auto max-w-7xl">
      <SectionHeading
        eyebrow="Common Questions"
        title="Market Segmentation FAQs"
        description="Answers to important questions about market segmentation, its purpose, types and use in business."
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
            <Target size={26} />
          </div>
          <p className="text-sm font-bold uppercase tracking-wider text-blue-200">
            Key Takeaway
          </p>
        </div>

        <h2 className="mt-5 text-3xl font-bold text-white md:text-4xl">
          Different Customers Need Different Reasons to Buy
        </h2>

        <p className="mt-5 max-w-3xl text-base leading-8 text-blue-100">
          Market segmentation helps a business recognize that its customers are
          not all alike. By grouping people according to their characteristics,
          locations, lifestyles or behaviour, a business can understand demand
          more clearly and build relevant products, pricing, distribution and
          marketing messages. The goal is not simply to divide people into
          groups—it is to make better decisions about whom to serve and how to
          deliver value.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/marketing/segmentation-targeting-positioning"
            className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-bold text-blue-700 transition hover:bg-blue-50"
          >
            Learn Targeting & Positioning <ArrowRight size={17} />
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
