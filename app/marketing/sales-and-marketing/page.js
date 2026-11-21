
import {MonitorPlay ,Scale,Gift,
  Megaphone,
  Target,
  Users,
  UserRound,
  Handshake,
  ShoppingCart,
  Store,
  Search,
  Lightbulb,
  TrendingUp,
  BarChart3,
  MessageCircle,
  Mail,
  Smartphone,
  Globe,
  Building2,
  BriefcaseBusiness,
  CheckCircle2,
  ArrowRight,
  ArrowDown,
  ArrowLeftRight,
  MousePointerClick,
  Wallet,
  HeartHandshake,
  ChartNoAxesCombined,
  ClipboardList,
  CircleDollarSign,
  Eye,
  Package,
  Repeat,
  ShieldCheck,
  Star,
  AlertTriangle,
  Network,
  Rocket,
  Settings,
  UserCheck,
  Clock,
  BadgeCheck,
  ShoppingBag,
  Calculator,
  SearchCheck,
  FileText,
  Headphones,
  Lightbulb as Idea
} from "lucide-react";
import AdSlot from "../../../components/AdSlot";

export const metadata = {
  title: "Sales and Marketing | Differences, Strategies, Process and Business Examples",
  description:
    "Understand sales and marketing, how they differ, how they work together, the customer journey, sales processes, marketing strategies and practical business examples."
};

const marketingActivities = [
  {
    title: "Market Research",
    description:
      "Understand customer needs, buying behaviour, competitors and market opportunities.",
    icon: Search
  },
  {
    title: "Brand Positioning",
    description:
      "Give customers a clear reason to recognise and consider the business.",
    icon: Target
  },
  {
    title: "Advertising",
    description:
      "Reach potential customers through search, social media, video and other paid channels.",
    icon: Megaphone
  },
  {
    title: "Content And Communication",
    description:
      "Explain products, answer common questions and help customers make informed decisions.",
    icon: FileText
  },
  {
    title: "Lead Generation",
    description:
      "Attract people who may be interested in the product and encourage them to enquire.",
    icon: Users
  },
  {
    title: "Customer Retention",
    description:
      "Maintain relationships through useful communication, customer experience and loyalty activities.",
    icon: HeartHandshake
  }
];

const salesActivities = [
  {
    title: "Finding Prospects",
    description:
      "Identify potential buyers who may have a genuine need for the product or service.",
    icon: SearchCheck
  },
  {
    title: "Understanding Requirements",
    description:
      "Ask questions to understand the customer's problem, expectations and budget.",
    icon: MessageCircle
  },
  {
    title: "Product Demonstration",
    description:
      "Show how the product or service works and how it addresses the customer's requirements.",
    icon: MonitorPlay
  },
  {
    title: "Handling Objections",
    description:
      "Respond honestly to concerns about price, quality, features, delivery or suitability.",
    icon: ShieldCheck
  },
  {
    title: "Closing The Sale",
    description:
      "Help the customer make a purchase decision and complete the transaction.",
    icon: ShoppingCart
  },
  {
    title: "After-Sales Support",
    description:
      "Follow up, address problems and help maintain customer satisfaction.",
    icon: Headphones
  }
];

const differences = [
  {
    aspect: "Primary Focus",
    marketing: "Understanding the market and creating customer demand.",
    sales: "Converting potential customers into paying customers."
  },
  {
    aspect: "Main Question",
    marketing: "Who needs this product, and why would they choose it?",
    sales: "How can we help this interested customer make a purchase?"
  },
  {
    aspect: "Typical Starting Point",
    marketing: "Market research, customer needs and business positioning.",
    sales: "Prospects, enquiries and potential buying opportunities."
  },
  {
    aspect: "Main Activities",
    marketing: "Research, branding, advertising, content and lead generation.",
    sales: "Contact, consultation, demonstration, negotiation and closing."
  },
  {
    aspect: "Customer Interaction",
    marketing: "Often communicates with groups or selected audiences.",
    sales: "Often involves direct interaction with individual buyers or buying teams."
  },
  {
    aspect: "Time Horizon",
    marketing: "Can build awareness and demand over the short and long term.",
    sales: "Usually focuses on moving a buying opportunity towards a decision."
  },
  {
    aspect: "Performance Measures",
    marketing: "Reach, engagement, qualified leads, acquisition cost and brand awareness.",
    sales: "Conversions, revenue, average order value and sales cycle."
  },
  {
    aspect: "Responsibility",
    marketing: "Creates relevant opportunities and prepares the market.",
    sales: "Works with opportunities and helps generate revenue."
  }
];

const factors = [
  {
    title: "Nature Of The Product",
    description:
      "A low-cost everyday product may sell through retail availability and simple promotions. Industrial equipment or business software may require detailed demonstrations and longer sales discussions.",
    icon: Package
  },
  {
    title: "Target Customers",
    description:
      "Selling to individual consumers is different from selling to companies. Business customers may involve multiple decision-makers, technical evaluations and formal approvals.",
    icon: Users
  },
  {
    title: "Buying Complexity",
    description:
      "A simple purchase may need little assistance. Expensive, technical or high-risk purchases often require personal consultation and detailed explanations.",
    icon: Settings
  },
  {
    title: "Competition",
    description:
      "When customers have many alternatives, marketing must communicate a clear difference and sales teams must explain why the offer is worth considering.",
    icon: Scale
  },
  {
    title: "Budget And Resources",
    description:
      "A small business may depend on referrals, local visibility and direct conversations. A larger company may support dedicated marketing and sales teams.",
    icon: Wallet
  },
  {
    title: "Customer Buying Behaviour",
    description:
      "Some customers research independently before purchasing. Others need guidance, reassurance, negotiation or a product demonstration.",
    icon: ShoppingBag
  }
];

const metrics = [
  {
    title: "Marketing Reach",
    description:
      "How many people were exposed to the business or campaign?",
    icon: Eye
  },
  {
    title: "Website And Enquiry Activity",
    description:
      "Are people visiting, asking questions and showing genuine interest?",
    icon: MousePointerClick
  },
  {
    title: "Lead Quality",
    description:
      "Are the enquiries coming from people who actually fit the target market?",
    icon: UserCheck
  },
  {
    title: "Lead Conversion",
    description:
      "How many qualified enquiries eventually become customers?",
    icon: TrendingUp
  },
  {
    title: "Sales Revenue",
    description:
      "How much revenue is generated through completed transactions?",
    icon: CircleDollarSign
  },
  {
    title: "Customer Acquisition Cost",
    description:
      "How much does the business spend to acquire a new customer?",
    icon: Calculator
  },
  {
    title: "Repeat Purchases",
    description:
      "Do customers return and purchase again?",
    icon: Repeat
  },
  {
    title: "Customer Satisfaction",
    description:
      "Are customers satisfied with the product, service and buying experience?",
    icon: Star
  }
];

const planningSteps = [
  {
    title: "Understand The Customer",
    description:
      "Identify who the customer is, what problem they face and what influences their buying decision."
  },
  {
    title: "Define The Offer",
    description:
      "Make the product, service, pricing and customer value clear. Avoid making promises the business cannot fulfil."
  },
  {
    title: "Attract The Right Audience",
    description:
      "Use suitable marketing channels to reach people who are likely to need the offer."
  },
  {
    title: "Capture And Qualify Enquiries",
    description:
      "Collect enquiries and identify which prospects have a genuine requirement, budget and interest."
  },
  {
    title: "Help Customers Make A Decision",
    description:
      "Use consultations, demonstrations, proposals and honest answers to support the buying decision."
  },
  {
    title: "Deliver And Maintain The Relationship",
    description:
      "Provide the promised product or service, resolve problems and encourage long-term customer relationships."
  }
];

function SectionHeading({ eyebrow, title, description, dark = false }) {
  return (
    <div className="mb-9 max-w-3xl">
      {eyebrow && (
        <p className={`mb-3 text-xs font-bold uppercase tracking-[0.18em] ${
          dark ? "text-blue-300" : "text-blue-700"
        }`}>
          {eyebrow}
        </p>
      )}
      <h2 className={`text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl ${
        dark ? "text-white" : "text-slate-950"
      }`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-base leading-7 ${
          dark ? "text-slate-300" : "text-slate-600"
        }`}>
          {description}
        </p>
      )}
    </div>
  );
}

function InfoCard({ icon: Icon, title, description }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
        <Icon size={22} />
      </div>
      <h3 className="text-base font-bold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
    </div>
  );
}

function SalesMarketingDiagram() {
  return (
    <div className="rounded-3xl border border-blue-100 bg-white p-5 shadow-xl shadow-blue-950/5 sm:p-7">
      <div className="rounded-2xl bg-gradient-to-br from-blue-700 to-indigo-800 p-5 text-center text-white">
        <Target size={34} className="mx-auto mb-2" />
        <p className="text-xs font-bold uppercase tracking-widest text-blue-200">
          Shared Business Goal
        </p>
        <h3 className="text-xl font-bold">Customer Growth</h3>
        <p className="mt-1 text-xs text-blue-100">
          Attract · Convert · Retain
        </p>
      </div>

      <div className="mx-auto h-8 w-px bg-blue-300" />

      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-2xl border border-blue-100 bg-blue-50 p-4 text-center">
          <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-700 text-white">
            <Megaphone size={25} />
          </div>
          <h4 className="font-bold text-slate-900">Marketing</h4>
          <p className="mt-2 text-xs leading-5 text-slate-600">
            Understand, attract and prepare potential customers
          </p>
          <div className="mt-3 rounded-lg bg-white p-2 text-xs font-bold text-blue-800">
            Creates Opportunities
          </div>
        </div>

        <div className="rounded-2xl border border-indigo-100 bg-indigo-50 p-4 text-center">
          <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-700 text-white">
            <Handshake size={25} />
          </div>
          <h4 className="font-bold text-slate-900">Sales</h4>
          <p className="mt-2 text-xs leading-5 text-slate-600">
            Understand, assist and convert buying opportunities
          </p>
          <div className="mt-3 rounded-lg bg-white p-2 text-xs font-bold text-indigo-800">
            Converts Opportunities
          </div>
        </div>
      </div>

      <div className="my-4 flex items-center justify-center gap-3">
        <div className="h-px flex-1 bg-blue-200" />
        <ArrowLeftRight size={21} className="text-blue-700" />
        <div className="h-px flex-1 bg-blue-200" />
      </div>

      <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-center">
        <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-emerald-600 text-white">
          <Users size={21} />
        </div>
        <h4 className="font-bold text-emerald-950">
          Satisfied Customers
        </h4>
        <p className="mt-1 text-xs text-emerald-800">
          Revenue · Trust · Repeat Business
        </p>
      </div>
    </div>
  );
}

function JourneyDiagram() {
  const stages = [
    ["Awareness", "Customer discovers the business", Megaphone],
    ["Interest", "Customer explores the offer", Eye],
    ["Enquiry", "Customer asks questions", MessageCircle],
    ["Purchase", "Customer makes a decision", ShoppingCart],
    ["Retention", "Business builds the relationship", HeartHandshake]
  ];

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
      <div className="mb-6 text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-blue-700">
          Simplified Customer Journey
        </p>
        <h3 className="mt-2 text-xl font-bold text-slate-950">
          From First Contact To Repeat Purchase
        </h3>
      </div>

      <div className="space-y-2">
        {stages.map(([title, description, Icon], index) => (
          <div key={title}>
            <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-gradient-to-r from-blue-50 to-white p-3 sm:p-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-700 text-white">
                <Icon size={20} />
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-bold text-slate-900">{title}</p>
                <p className="mt-1 text-xs leading-5 text-slate-600">
                  {description}
                </p>
              </div>
              <span className="text-xs font-bold text-blue-700">
                0{index + 1}
              </span>
            </div>
            {index !== stages.length - 1 && (
              <div className="flex justify-center py-1">
                <ArrowDown size={17} className="text-blue-500" />
              </div>
            )}
          </div>
        ))}
      </div>

      <p className="mt-5 rounded-xl bg-blue-50 p-3 text-xs leading-6 text-blue-900">
        This is a simplified model. Real customers may skip stages, return to
        earlier stages or compare several businesses before purchasing.
      </p>
    </div>
  );
}

export default function SalesAndMarketingPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-slate-900">

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-100">
        <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-blue-200/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-indigo-200/30 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:py-24">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-xs font-bold text-blue-800 shadow-sm">
              <BriefcaseBusiness size={15} />
              BUSINESS AND MANAGEMENT
            </div>

            <h1 className="max-w-2xl text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Sales And Marketing
              <span className="mt-2 block bg-gradient-to-r from-blue-700 to-indigo-600 bg-clip-text text-transparent">
                How Businesses Attract Customers And Generate Revenue
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
              Understand how businesses identify customer needs, create
              demand, attract potential buyers, convert enquiries into sales
              and build lasting customer relationships. Discover why sales
              and marketing are different jobs that must work together.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#differences"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-700 px-5 py-3 font-bold text-white shadow-lg shadow-blue-200 transition hover:bg-blue-800"
              >
                Explore The Difference <ArrowRight size={18} />
              </a>
              <a
                href="#real-world"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 font-bold text-slate-800 transition hover:border-blue-400"
              >
                See Business Examples
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 text-xs font-bold text-slate-600">
              <span className="flex items-center gap-2">
                <CheckCircle2 size={15} className="text-blue-600" />
                Practical Business Situations
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={15} className="text-blue-600" />
                Real-World Applications
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={15} className="text-blue-600" />
                Actionable Decisions
              </span>
            </div>
          </div>

          <SalesMarketingDiagram />
        </div>
      </section>

    
      {/* INTRODUCTION */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              eyebrow="START WITH THE BUSINESS IDEA"
              title="What Are Sales And Marketing?"
              description="Sales and marketing are two connected business functions that help a company attract customers, communicate value and generate revenue."
            />
            <p className="text-sm leading-7 text-slate-600">
              Marketing focuses on understanding the market, identifying
              customer needs and creating interest in the products or services
              a business offers. It helps potential customers discover the
              business and understand why its offer may be relevant to them.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Sales focuses on working with potential buyers, understanding
              their requirements, answering questions and helping them
              complete a purchase. It turns suitable buying opportunities into
              actual business transactions.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Neither function can guarantee business success on its own.
              The product must deliver value, the price must make sense and
              the customer experience must support what the business promises.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <h3 className="text-lg font-bold text-slate-950">
              A Simple Example: A New Restaurant
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Imagine a restaurant opening in a busy neighbourhood.
            </p>

            <div className="mt-6 space-y-5">
              <div className="flex gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                  <Megaphone size={21} />
                </div>
                <div>
                  <p className="font-bold text-slate-900">Marketing</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    Promotes the restaurant through local search, social
                    media, food photography and opening offers.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-100 text-indigo-700">
                  <Handshake size={21} />
                </div>
                <div>
                  <p className="font-bold text-slate-900">Sales</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    Staff help customers understand the menu, recommend
                    suitable dishes, take orders and complete purchases.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                  <HeartHandshake size={21} />
                </div>
                <div>
                  <p className="font-bold text-slate-900">Customer Experience</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    Good food, service and consistent quality encourage
                    satisfied customers to return and recommend the restaurant.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-xl bg-blue-50 p-4 text-sm leading-6 text-blue-950">
              <strong>The reality:</strong> Advertising may bring people
              through the door, but the actual food, service and experience
              determine whether they become repeat customers.
            </div>
          </div>
        </div>
      </section>
<AdSlot />
      {/* DIFFERENCES */}
      <section id="differences" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
        <SectionHeading
          eyebrow="UNDERSTAND THE DISTINCTION"
          title="Sales Vs Marketing: What Is The Difference?"
          description="The two functions have different responsibilities, but their work overlaps throughout the customer journey."
        />

        <div className="grid gap-5 lg:grid-cols-2">
          <div className="rounded-3xl border border-blue-200 bg-gradient-to-br from-blue-50 to-white p-6 sm:p-8">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-700 text-white shadow-lg shadow-blue-200">
              <Megaphone size={28} />
            </div>
            <h3 className="text-2xl font-bold text-slate-950">Marketing</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Marketing studies the market and creates the conditions that
              help customers discover, understand and consider a business's
              offer.
            </p>
            <div className="mt-6 rounded-xl bg-white p-4">
              <p className="text-xs font-bold uppercase tracking-wider text-blue-700">
                Its Central Question
              </p>
              <p className="mt-2 text-lg font-bold text-slate-900">
                How Do We Attract The Right Customers?
              </p>
            </div>
            <ul className="mt-6 space-y-3">
              {[
                "Studies customer needs and competitors.",
                "Creates brand awareness and positioning.",
                "Communicates product benefits.",
                "Generates relevant enquiries and leads.",
                "Supports customer engagement and retention."
              ].map((item) => (
                <li key={item} className="flex gap-2 text-sm leading-6 text-slate-700">
                  <CheckCircle2 size={17} className="mt-1 shrink-0 text-blue-700" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-indigo-200 bg-gradient-to-br from-indigo-50 to-white p-6 sm:p-8">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-700 text-white shadow-lg shadow-indigo-200">
              <Handshake size={28} />
            </div>
            <h3 className="text-2xl font-bold text-slate-950">Sales</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Sales works directly with potential buyers to understand their
              needs, explain the offer and help them make a purchase decision.
            </p>
            <div className="mt-6 rounded-xl bg-white p-4">
              <p className="text-xs font-bold uppercase tracking-wider text-indigo-700">
                Its Central Question
              </p>
              <p className="mt-2 text-lg font-bold text-slate-900">
                How Do We Convert The Opportunity?
              </p>
            </div>
            <ul className="mt-6 space-y-3">
              {[
                "Contacts and qualifies potential buyers.",
                "Understands individual customer requirements.",
                "Explains products and demonstrates value.",
                "Handles objections and negotiates where appropriate.",
                "Closes transactions and supports customers."
              ].map((item) => (
                <li key={item} className="flex gap-2 text-sm leading-6 text-slate-700">
                  <CheckCircle2 size={17} className="mt-1 shrink-0 text-indigo-700" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
          <table className="w-full min-w-[700px] text-left text-sm">
            <thead className="bg-slate-900 text-white">
              <tr>
                <th className="p-4 font-bold">Area</th>
                <th className="p-4 font-bold">Marketing</th>
                <th className="p-4 font-bold">Sales</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {differences.map((item) => (
                <tr key={item.aspect}>
                  <td className="p-4 font-bold text-slate-900">{item.aspect}</td>
                  <td className="p-4 leading-6 text-slate-600">{item.marketing}</td>
                  <td className="p-4 leading-6 text-slate-600">{item.sales}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* MARKETING ACTIVITIES */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="WHAT MARKETING ACTUALLY DOES"
            title="Main Activities Of Marketing"
            description="Marketing is much broader than running advertisements. It includes understanding customers, designing an offer and communicating why that offer matters."
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {marketingActivities.map((item) => (
              <InfoCard key={item.title} {...item} />
            ))}
          </div>

          <div className="mt-8 grid gap-6 rounded-3xl border border-blue-100 bg-white p-6 shadow-sm lg:grid-cols-2 lg:items-center sm:p-8">
            <div>
              <h3 className="text-xl font-bold text-slate-950">
                Marketing Is Not Just Advertising
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Consider a company selling affordable laptops. Before
                advertising, it needs to understand who needs the laptops,
                what specifications those customers expect, what competitors
                charge and which product benefits matter most.
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Advertising is only one way to communicate the final offer.
                The research and decisions behind that offer are also part of
                marketing.
              </p>
            </div>
            <div className="rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 p-5">
              <div className="space-y-3">
                {[
                  ["Research", "Understand customer requirements"],
                  ["Plan", "Decide the product and positioning"],
                  ["Communicate", "Reach the target audience"],
                  ["Evaluate", "Measure customer response"]
                ].map(([title, description], index) => (
                  <div key={title} className="flex items-center gap-3 rounded-xl bg-white p-3">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-700 text-xs font-bold text-white">
                      {index + 1}
                    </span>
                    <div>
                      <p className="text-sm font-bold text-slate-900">{title}</p>
                      <p className="mt-1 text-xs text-slate-600">{description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
<AdSlot />
      {/* SALES ACTIVITIES */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
        <SectionHeading
          eyebrow="WHAT SALES ACTUALLY DOES"
          title="Main Activities Of Sales"
          description="Sales is not simply convincing someone to buy. Effective selling begins by understanding whether the product is genuinely suitable for the customer."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {salesActivities.map((item) => (
            <InfoCard key={item.title} {...item} />
          ))}
        </div>

        <div className="mt-8 rounded-3xl border border-indigo-100 bg-gradient-to-br from-indigo-50 to-white p-6 sm:p-8">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h3 className="text-xl font-bold text-slate-950">
                A Realistic Sales Conversation
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Imagine a customer visiting a computer shop to buy a laptop.
                A good salesperson does not immediately recommend the most
                expensive model.
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                First, the salesperson asks about the customer's budget,
                intended use, software requirements and portability needs.
                Then they compare suitable models and explain the differences.
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                The objective is to help the customer choose a suitable
                product—not simply to maximise the bill.
              </p>
            </div>

            <div className="space-y-3">
              {[
                ["Customer Need", "I need a laptop for office work and online meetings."],
                ["Sales Question", "What is your budget, and which applications do you use?"],
                ["Product Guidance", "Here are two suitable options and their differences."],
                ["Purchase Decision", "The customer selects the model that fits the requirement."]
              ].map(([title, description], index) => (
                <div key={title} className="flex gap-3 rounded-xl border border-indigo-100 bg-white p-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-indigo-100 text-indigo-700">
                    {index === 0 ? <UserRound size={19} /> :
                      index === 1 ? <MessageCircle size={19} /> :
                      index === 2 ? <Package size={19} /> :
                      <ShoppingCart size={19} />}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">{title}</p>
                    <p className="mt-1 text-sm leading-6 text-slate-600">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CUSTOMER JOURNEY */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="HOW THE FUNCTIONS CONNECT"
              title="The Customer Journey: From Awareness To Purchase"
              description="Customers usually move through several stages before and after buying. Marketing and sales contribute differently at each stage."
            />
            <div className="space-y-5">
              <div className="flex gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                  <Megaphone size={21} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Marketing Creates Awareness And Interest</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    The customer discovers the business, learns about the
                    product and starts considering whether it is relevant.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-100 text-indigo-700">
                  <Handshake size={21} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Sales Helps With The Buying Decision</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    When the customer is ready to enquire or needs guidance,
                    sales helps answer questions and complete the purchase.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                  <HeartHandshake size={21} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Both Support Retention</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    Follow-ups, service quality, customer communication and
                    relevant offers can encourage repeat business.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <JourneyDiagram />
        </div>
      </section>

      {/* HOW THEY WORK TOGETHER */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
        <SectionHeading
          eyebrow="A SHARED BUSINESS RESPONSIBILITY"
          title="How Sales And Marketing Work Together"
          description="Marketing and sales are most effective when they share information, agree on the target customer and work towards common business goals."
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Agree On The Target Customer",
              description:
                "Both teams should understand who the business wants to reach and what problems its offer solves.",
              icon: Users
            },
            {
              title: "Share Customer Insights",
              description:
                "Sales teams hear objections and questions directly. Marketing can use this information to improve messages and campaigns.",
              icon: MessageCircle
            },
            {
              title: "Improve Lead Quality",
              description:
                "Marketing should focus on relevant prospects, while sales should provide feedback about which enquiries are most likely to convert.",
              icon: UserCheck
            },
            {
              title: "Maintain Consistent Promises",
              description:
                "The product benefits, prices, delivery details and campaign offers should match what sales representatives communicate.",
              icon: BadgeCheck
            },
            {
              title: "Measure Shared Outcomes",
              description:
                "Both teams should understand how their work contributes to qualified opportunities, customer acquisition and revenue.",
              icon: ChartNoAxesCombined
            },
            {
              title: "Improve Customer Experience",
              description:
                "A smooth transition from an advertisement or enquiry to a purchase reduces confusion and builds confidence.",
              icon: HeartHandshake
            }
          ].map((item) => (
            <InfoCard key={item.title} {...item} />
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-blue-200 bg-blue-50 p-6">
          <h3 className="flex items-center gap-2 font-bold text-blue-950">
            <Lightbulb size={20} />
            Why Coordination Matters
          </h3>
          <p className="mt-3 text-sm leading-7 text-blue-900">
            Imagine marketing advertises a product at ₹9,999, but the sales
            team quotes ₹10,999 without explaining why. Even if the difference
            is caused by an outdated campaign or an additional charge, the
            customer may lose trust. Consistent information is essential.
          </p>
        </div>
      </section>
<AdSlot />
      {/* REAL WORLD CASE */}
      <section id="real-world" className="bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 py-16 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="BUSINESS IN PRACTICE"
            title="How Sales And Marketing Work In A Real Business"
            description="Consider a fictional Indian company that sells business billing software to small retailers. The example shows how marketing and sales contribute to the same customer acquisition process."
            dark
          />

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Understand Retailer Problems",
                team: "Marketing Research",
                description:
                  "The company discovers that shop owners need easier billing, inventory tracking and GST-related record management.",
                icon: Search
              },
              {
                title: "Reach Potential Customers",
                team: "Marketing",
                description:
                  "It publishes useful content, runs relevant search advertisements and explains the software's benefits.",
                icon: Megaphone
              },
              {
                title: "Receive Enquiries",
                team: "Lead Generation",
                description:
                  "Interested shop owners visit the website, request a callback or book a product demonstration.",
                icon: MousePointerClick
              },
              {
                title: "Understand Requirements",
                team: "Sales",
                description:
                  "A representative asks about the shop's size, billing needs, existing system and budget.",
                icon: MessageCircle
              },
              {
                title: "Demonstrate The Software",
                team: "Sales",
                description:
                  "The representative shows relevant features and explains setup, pricing, support and limitations.",
                icon: MonitorPlay
              },
              {
                title: "Complete And Retain",
                team: "Sales And Customer Support",
                description:
                  "The customer purchases the software, receives onboarding assistance and can contact support when needed.",
                icon: CheckCircle2
              }
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="rounded-2xl border border-white/10 bg-white/[0.06] p-5">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-xs font-bold uppercase tracking-widest text-blue-300">
                      {item.team}
                    </span>
                    <Icon size={22} className="shrink-0 text-blue-300" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{item.description}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-8 rounded-2xl border border-blue-400/20 bg-blue-400/10 p-6">
            <p className="flex items-center gap-2 font-bold text-blue-200">
              <Lightbulb size={19} />
              The Business Lesson
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-200">
              Marketing brings relevant retailers into the company's
              consideration set. Sales helps each interested retailer evaluate
              the software and decide whether to buy it. If the software is
              unreliable or customer support is poor, neither function can
              create lasting success.
            </p>
          </div>
        </div>
      </section>

      {/* B2B AND B2C */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
        <SectionHeading
          eyebrow="DIFFERENT CUSTOMERS, DIFFERENT APPROACHES"
          title="Sales And Marketing In B2B Vs B2C Businesses"
          description="The way a business sells and markets its products depends partly on who makes the purchase and how complex the buying decision is."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-blue-200 bg-gradient-to-br from-blue-50 to-white p-6 sm:p-8">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-700 text-white">
              <UserRound size={25} />
            </div>
            <h3 className="text-2xl font-bold text-slate-950">B2C: Business To Consumer</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              A business sells directly to individual consumers for personal
              use. Examples include clothing stores, restaurants, mobile
              phones and household appliances.
            </p>
            <h4 className="mt-6 font-bold text-slate-900">
              Common Marketing And Sales Approaches
            </h4>
            <ul className="mt-3 space-y-3">
              {[
                "Social media, search and retail advertising.",
                "Product displays, discounts and seasonal offers.",
                "Online checkout and retail sales assistance.",
                "Customer reviews, recommendations and loyalty programmes."
              ].map((item) => (
                <li key={item} className="flex gap-2 text-sm leading-6 text-slate-600">
                  <CheckCircle2 size={17} className="mt-1 shrink-0 text-blue-700" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-6 rounded-xl bg-white p-4">
              <p className="text-xs font-bold uppercase text-blue-700">Example</p>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                A clothing brand advertises a new collection online and
                customers purchase through its website or retail store.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-indigo-200 bg-gradient-to-br from-indigo-50 to-white p-6 sm:p-8">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-700 text-white">
              <Building2 size={25} />
            </div>
            <h3 className="text-2xl font-bold text-slate-950">B2B: Business To Business</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              A business sells products or services to another organisation.
              Examples include industrial machinery, enterprise software,
              wholesale supplies and professional services.
            </p>
            <h4 className="mt-6 font-bold text-slate-900">
              Common Marketing And Sales Approaches
            </h4>
            <ul className="mt-3 space-y-3">
              {[
                "Industry content, search visibility and professional events.",
                "Business referrals and account-based communication.",
                "Product demonstrations and consultations.",
                "Proposals, negotiations and longer sales discussions."
              ].map((item) => (
                <li key={item} className="flex gap-2 text-sm leading-6 text-slate-600">
                  <CheckCircle2 size={17} className="mt-1 shrink-0 text-indigo-700" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-6 rounded-xl bg-white p-4">
              <p className="text-xs font-bold uppercase text-indigo-700">Example</p>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                A software company markets its inventory system to retailers
                and its sales team demonstrates the product to business owners.
              </p>
            </div>
          </div>
        </div>

        <p className="mt-5 text-xs leading-6 text-slate-500">
          These are common patterns, not strict rules. Some consumer products
          require extensive consultation, while some business products can be
          purchased through self-service websites.
        </p>
      </section>

      {/* STRATEGIES */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="CHOOSING THE RIGHT APPROACH"
            title="Common Sales And Marketing Strategies"
            description="Businesses select strategies based on their customers, product, market conditions and available resources."
          />

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-blue-200 bg-white p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <Megaphone size={25} className="text-blue-700" />
                <h3 className="text-xl font-bold text-slate-950">
                  Marketing Strategies
                </h3>
              </div>
              <div className="mt-6 space-y-5">
                {[
                  ["Content Marketing", "Publish helpful articles, guides and videos that answer customer questions."],
                  ["Search Marketing", "Help potential customers discover the business when they search for relevant products or services."],
                  ["Social Media Marketing", "Build visibility, communicate with audiences and share useful product information."],
                  ["Referral Marketing", "Encourage satisfied customers and business partners to recommend the company."],
                  ["Email Marketing", "Send relevant information and offers to people who have agreed to receive communication."]
                ].map(([title, description]) => (
                  <div key={title} className="border-b border-slate-100 pb-4 last:border-0 last:pb-0">
                    <h4 className="font-bold text-slate-900">{title}</h4>
                    <p className="mt-1 text-sm leading-6 text-slate-600">{description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-indigo-200 bg-white p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <Handshake size={25} className="text-indigo-700" />
                <h3 className="text-xl font-bold text-slate-950">
                  Sales Strategies
                </h3>
              </div>
              <div className="mt-6 space-y-5">
                {[
                  ["Consultative Selling", "Understand the customer's problem and recommend a suitable solution."],
                  ["Solution Selling", "Explain how the product solves a specific business or personal problem."],
                  ["Relationship Selling", "Build trust and maintain long-term customer relationships."],
                  ["Value-Based Selling", "Explain the practical value and business benefits instead of competing only on price."],
                  ["Upselling And Cross-Selling", "Offer a more suitable higher-value option or an additional relevant product when it genuinely benefits the customer."]
                ].map(([title, description]) => (
                  <div key={title} className="border-b border-slate-100 pb-4 last:border-0 last:pb-0">
                    <h4 className="font-bold text-slate-900">{title}</h4>
                    <p className="mt-1 text-sm leading-6 text-slate-600">{description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FACTORS */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
        <SectionHeading
          eyebrow="BUSINESS PLANNING"
          title="Factors That Influence Sales And Marketing Decisions"
          description="The same strategy will not work for every business. These factors influence how a company attracts customers and converts them into buyers."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {factors.map((item) => (
            <InfoCard key={item.title} {...item} />
          ))}
        </div>
      </section>
<AdSlot />
      {/* BUSINESS PROCESS */}
      <section className="bg-gradient-to-br from-blue-950 via-slate-950 to-indigo-950 py-16 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="PUTTING THE WORK TOGETHER"
            title="How To Build A Practical Sales And Marketing Process"
            description="A business does not need a complicated department structure to create a useful process. It needs a clear path from understanding customers to delivering what it promises."
            dark
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {planningSteps.map((item, index) => (
              <div key={item.title} className="rounded-2xl border border-white/10 bg-white/[0.06] p-5">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-sm font-bold text-white">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="font-bold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-300">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-blue-400/20 bg-blue-400/10 p-6">
            <p className="font-bold text-blue-200">
              Small Business Reality
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-200">
              In a small business, the same owner may handle marketing,
              customer enquiries, sales and after-sales support. Separate
              departments are not essential. Clear responsibilities and a
              reliable customer process are more important.
            </p>
          </div>
        </div>
      </section>

      {/* MEASUREMENT */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
        <SectionHeading
          eyebrow="MEASURE ACTUAL RESULTS"
          title="How To Measure Sales And Marketing Performance"
          description="A business should measure more than advertising views or the number of sales calls. It needs to understand whether it is attracting the right customers and generating profitable business."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((item) => (
            <InfoCard key={item.title} {...item} />
          ))}
        </div>

        <div className="mt-8 rounded-3xl border border-blue-200 bg-blue-50 p-6 sm:p-8">
          <h3 className="text-xl font-bold text-blue-950">
            A Practical Example: Why More Leads Do Not Always Mean More Sales
          </h3>
          <p className="mt-3 text-sm leading-7 text-blue-900">
            Suppose a business receives 100 enquiries through advertising.
            Its sales team converts 5 enquiries into customers. Another
            campaign brings only 40 enquiries but converts 12 customers.
            The second campaign generated fewer enquiries but more sales.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-blue-200 bg-white p-5">
              <p className="text-sm font-bold text-slate-700">Campaign A</p>
              <p className="mt-3 text-3xl font-bold text-slate-950">100</p>
              <p className="text-xs text-slate-500">Enquiries</p>
              <p className="mt-3 text-2xl font-bold text-blue-700">5</p>
              <p className="text-xs text-slate-500">Customers · 5% conversion</p>
            </div>
            <div className="rounded-2xl border border-blue-200 bg-white p-5">
              <p className="text-sm font-bold text-slate-700">Campaign B</p>
              <p className="mt-3 text-3xl font-bold text-slate-950">40</p>
              <p className="text-xs text-slate-500">Enquiries</p>
              <p className="mt-3 text-2xl font-bold text-emerald-700">12</p>
              <p className="text-xs text-slate-500">Customers · 30% conversion</p>
            </div>
          </div>
          <p className="mt-5 text-sm leading-7 text-blue-950">
            <strong>What does this tell us?</strong> The quality of enquiries
            matters. Marketing should attract relevant prospects, and sales
            should understand why some enquiries convert while others do not.
            Actual campaign profitability must also account for the costs
            involved.
          </p>
        </div>
      </section>

      {/* COMMON PROBLEMS */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="WHAT CAN GO WRONG?"
            title="Common Sales And Marketing Problems"
            description="A business can spend money on marketing and still struggle to sell. Understanding where the process breaks down helps avoid ineffective solutions."
          />

          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full min-w-[720px] text-left text-sm">
              <thead className="bg-slate-900 text-white">
                <tr>
                  <th className="p-4 font-bold">Business Problem</th>
                  <th className="p-4 font-bold">Possible Reason</th>
                  <th className="p-4 font-bold">What To Investigate</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="p-4 font-bold text-slate-900">Few People Know The Business</td>
                  <td className="p-4 leading-6 text-slate-600">Low visibility or unsuitable marketing channels.</td>
                  <td className="p-4 leading-6 text-slate-600">Audience reach, search visibility and brand awareness.</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-slate-900">Many Enquiries, Few Purchases</td>
                  <td className="p-4 leading-6 text-slate-600">Poor lead quality, unclear pricing or weak sales follow-up.</td>
                  <td className="p-4 leading-6 text-slate-600">Lead qualification, response time and objections.</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-slate-900">Customers Choose Competitors</td>
                  <td className="p-4 leading-6 text-slate-600">Weak differentiation or a less suitable offer.</td>
                  <td className="p-4 leading-6 text-slate-600">Product value, customer needs, price and service.</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-slate-900">Customers Do Not Return</td>
                  <td className="p-4 leading-6 text-slate-600">Poor experience, product issues or weak follow-up.</td>
                  <td className="p-4 leading-6 text-slate-600">Quality, support, satisfaction and retention.</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-slate-900">High Marketing Cost</td>
                  <td className="p-4 leading-6 text-slate-600">Poor targeting or campaigns that do not generate profitable customers.</td>
                  <td className="p-4 leading-6 text-slate-600">Acquisition cost, conversion and customer lifetime value.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5">
            <p className="flex items-center gap-2 font-bold text-amber-950">
              <AlertTriangle size={19} />
              Important Reality
            </p>
            <p className="mt-2 text-sm leading-7 text-amber-950/80">
              Not every sales problem is a marketing problem, and not every
              marketing problem is a sales problem. Product quality, pricing,
              competition, delivery and customer service can also be responsible.
            </p>
          </div>
        </div>
      </section>

        
<AdSlot />
      {/* SMALL BUSINESS */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
        <SectionHeading
          eyebrow="PRACTICAL BUSINESS APPLICATION"
          title="How A Small Business Can Manage Both"
          description="A small business may not have separate sales and marketing departments. It can still organise these responsibilities into a simple, manageable routine."
        />

        <div className="grid gap-5 lg:grid-cols-2">
          <div className="rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50 to-white p-6">
            <div className="flex items-center gap-3">
              <Megaphone size={25} className="text-blue-700" />
              <h3 className="text-xl font-bold text-slate-950">
                Marketing Responsibilities
              </h3>
            </div>
            <ul className="mt-6 space-y-4">
              {[
                "Maintain accurate business information online.",
                "Understand local customer requirements.",
                "Publish useful product and service information.",
                "Use relevant advertising within an affordable budget.",
                "Collect genuine customer feedback and identify demand."
              ].map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-6 text-slate-600">
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-blue-700" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-indigo-200 bg-gradient-to-br from-indigo-50 to-white p-6">
            <div className="flex items-center gap-3">
              <Handshake size={25} className="text-indigo-700" />
              <h3 className="text-xl font-bold text-slate-950">
                Sales Responsibilities
              </h3>
            </div>
            <ul className="mt-6 space-y-4">
              {[
                "Respond to customer enquiries promptly.",
                "Understand the customer's actual requirement.",
                "Explain pricing, features and limitations clearly.",
                "Follow up with interested customers appropriately.",
                "Deliver what was promised and handle complaints."
              ].map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-6 text-slate-600">
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-indigo-700" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
          <h3 className="font-bold text-emerald-950">
            Start With A Simple System
          </h3>
          <p className="mt-2 text-sm leading-7 text-emerald-950/80">
            Record where enquiries come from, what customers ask, how many
            purchase and why others do not. Even a basic spreadsheet can help
            a small business identify whether it needs better marketing,
            better sales handling or improvements to its actual product.
          </p>
        </div>
      </section>

      {/* ADVANTAGES AND LIMITATIONS */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="A BALANCED VIEW"
            title="Benefits And Challenges Of Sales And Marketing"
            description="Both functions can contribute to business growth, but neither guarantees success without a suitable product, realistic pricing and good execution."
          />

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-emerald-200 bg-white p-6 sm:p-8">
              <h3 className="flex items-center gap-2 text-xl font-bold text-emerald-800">
                <CheckCircle2 size={23} />
                Business Benefits
              </h3>
              <div className="mt-6 space-y-4">
                {[
                  "Improves understanding of customer needs.",
                  "Helps businesses reach relevant audiences.",
                  "Creates opportunities for revenue generation.",
                  "Supports customer relationships and repeat purchases.",
                  "Provides information about market demand and competition.",
                  "Helps businesses identify and improve weak points in the buying process."
                ].map((text) => (
                  <div key={text} className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 shrink-0 text-emerald-600" size={18} />
                    <p className="text-sm leading-6 text-slate-600">{text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-amber-200 bg-white p-6 sm:p-8">
              <h3 className="flex items-center gap-2 text-xl font-bold text-amber-800">
                <AlertTriangle size={23} />
                Business Challenges
              </h3>
              <div className="mt-6 space-y-4">
                {[
                  "Marketing campaigns can consume money without generating profitable customers.",
                  "Sales targets can encourage unsuitable selling practices if poorly designed.",
                  "Competition can make customer acquisition expensive.",
                  "Poor product quality can damage both marketing and sales efforts.",
                  "Unclear communication between teams can create inconsistent customer experiences.",
                  "Sales results may fluctuate with seasonality, economic conditions and customer demand."
                ].map((text) => (
                  <div key={text} className="flex gap-3">
                    <AlertTriangle className="mt-0.5 shrink-0 text-amber-600" size={18} />
                    <p className="text-sm leading-6 text-slate-600">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

   

      

      {/* FAQ */}
      <section className="mx-auto max-w-5xl px-5 py-16 sm:px-8 lg:py-24">
        <SectionHeading
          eyebrow="COMMON QUESTIONS"
          title="Frequently Asked Questions About Sales And Marketing"
          description="Answers to common questions about business sales, marketing activities and how the two functions work together."
        />

        <div className="space-y-3">
          {[
            [
              "What Is The Main Difference Between Sales And Marketing?",
              "Marketing focuses on understanding customer needs, creating awareness and attracting relevant potential customers. Sales focuses on working with potential buyers, addressing their requirements and converting suitable opportunities into purchases."
            ],
            [
              "Is Marketing More Important Than Sales?",
              "Neither is universally more important. A business needs relevant customer demand and an effective way to convert buying opportunities. The priority depends on the business problem. A business with low visibility may need stronger marketing, while one receiving enquiries but making few sales may need to improve its sales process."
            ],
            [
              "Can A Business Have Sales Without Marketing?",
              "Yes. A business can generate sales through referrals, existing relationships, walk-in customers or direct prospecting without a formal marketing department. However, marketing can help it understand the market and create more consistent customer opportunities."
            ],
            [
              "Can A Business Have Marketing Without A Sales Team?",
              "Yes. Some businesses use self-service websites, online stores or automated purchasing systems. Customers discover the product through marketing and complete the purchase without speaking to a salesperson."
            ],
            [
              "Is Advertising The Same As Marketing?",
              "No. Advertising is one marketing activity. Marketing also includes market research, product decisions, pricing, positioning, distribution, customer communication and retention."
            ],
            [
              "What Is The Difference Between A Lead And A Customer?",
              "A lead is a person or organisation that has shown some level of interest in a business's product or service. A customer is someone who has purchased from the business. Not every lead becomes a customer."
            ],
            [
              "What Is B2B Sales And Marketing?",
              "B2B means business-to-business. It refers to selling products or services from one organisation to another. Examples include software companies selling business systems, manufacturers selling machinery and wholesalers supplying retailers."
            ],
            [
              "What Is B2C Sales And Marketing?",
              "B2C means business-to-consumer. It refers to selling products or services directly to individual consumers for personal use. Examples include restaurants, clothing retailers, mobile phone brands and online shopping stores."
            ],
            [
              "Why Do Businesses Need Both Sales And Marketing?",
              "Marketing helps potential customers discover and understand the business. Sales helps interested buyers evaluate the offer and make a purchase. Coordination improves the customer experience and helps the business understand what is working."
            ],
            [
              "Can One Person Handle Sales And Marketing In A Small Business?",
              "Yes. A small business owner may manage advertising, customer enquiries, sales conversations and follow-ups. Separate departments are not essential, but the different responsibilities should still be handled properly."
            ],
            [
              "How Can A Business Improve Its Sales?",
              "It can improve product suitability, pricing clarity, response time, customer understanding, demonstrations, follow-up and service quality. It should also examine why potential customers do not complete purchases instead of assuming that more advertising is always the answer."
            ],
            [
              "What Is The Relationship Between Sales, Marketing And Customer Service?",
              "Marketing attracts and informs potential customers, sales supports the purchase decision, and customer service helps customers after the purchase. These functions exchange information and jointly influence customer satisfaction and retention."
            ]
          ].map(([question, answer]) => (
            <details key={question} className="group rounded-xl border border-slate-200 bg-white p-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-slate-900">
                {question}
                <ArrowDown size={19} className="shrink-0 text-blue-600 transition group-open:rotate-180" />
              </summary>
              <p className="mt-4 border-t border-slate-100 pt-4 text-sm leading-7 text-slate-600">
                {answer}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* CONCLUSION */}
      <section className="px-5 pb-20 sm:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-gradient-to-r from-blue-700 via-blue-800 to-indigo-800 p-7 text-white shadow-xl shadow-blue-200/40 sm:p-10 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-2 text-xs font-bold">
                <Rocket size={15} />
                THE BIGGER PICTURE
              </div>
              <h2 className="max-w-3xl text-2xl font-bold leading-tight sm:text-3xl">
                Marketing Creates The Opportunity.
                Sales Helps Turn It Into A Customer Relationship.
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-blue-100">
                A successful business does more than attract attention or
                complete transactions. It understands its customers, offers
                genuine value, communicates honestly and delivers an experience
                that gives people a reason to return.
              </p>
            </div>
            <a
              href="#differences"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 font-bold text-blue-800 transition hover:bg-blue-50"
            >
              Review The Difference <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
