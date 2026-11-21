
import {
    Layers,
ArrowLeftRight,
SlidersHorizontal,
  Megaphone,
  Target,
  Users,
  MessageCircle,
  Newspaper,
  Gift,
  Handshake,
  Mail,
  Smartphone,
  Store,
  ShoppingBag,
  Search,
  BarChart3,
  TrendingUp,
  Eye,
  MousePointerClick,
  Wallet,
  CheckCircle2,
  ArrowRight,
  Lightbulb,
  Globe,
  Building2,
  BriefcaseBusiness,
  Repeat,
  Radio,
  MonitorPlay,
  Package,
  HeartHandshake,
  Scale,
  ChevronRight,
  CircleDollarSign,
  ChartNoAxesCombined,
  BadgeCheck,
  Zap,
  Info,
  Clock,
  UserRound,
  Star,
  Funnel,
  Network,
  Calculator,
  ClipboardCheck,
  ShoppingCart,
  Landmark,
  Share2,
  CircleCheck,
  AlertTriangle,
  StoreIcon
} from "lucide-react";
import AdSlot from "../../../components/AdSlot";

export const metadata = {
  title: "Promotional Mix | Meaning, Elements, Strategies & Real-World Examples",
  description:
    "Understand the promotional mix, its five major elements, advertising, sales promotion, personal selling, public relations and direct marketing, with practical business examples."
};

const elements = [
  {
    number: "01",
    title: "Advertising",
    subtitle: "Paid, non-personal communication",
    description:
      "Advertising allows a business to communicate with a large audience through paid media. The business pays to display its message rather than depending on individual sales conversations.",
    examples: [
      "A smartphone company runs YouTube advertisements before technology videos.",
      "A local restaurant pays for Instagram advertisements within its delivery area.",
      "A car manufacturer displays outdoor advertisements along major roads."
    ],
    channels: "Television, search ads, social media ads, newspapers, websites and outdoor displays.",
    icon: MonitorPlay,
    color: "blue"
  },
  {
    number: "02",
    title: "Sales Promotion",
    subtitle: "Short-term incentives to encourage action",
    description:
      "Sales promotion gives customers an additional reason to purchase now. It is especially useful when a business wants to increase immediate sales, clear inventory or encourage product trials.",
    examples: [
      "A supermarket offers buy two, get one free.",
      "An electronics retailer provides a limited-period exchange bonus.",
      "A food delivery platform gives a first-order discount."
    ],
    channels: "Coupons, discounts, bundles, free samples, loyalty rewards and limited-time offers.",
    icon: Gift,
    color: "violet"
  },
  {
    number: "03",
    title: "Personal Selling",
    subtitle: "Direct interaction between seller and buyer",
    description:
      "Personal selling involves a representative communicating directly with a potential customer. The seller can explain the product, understand individual requirements, answer questions and handle objections.",
    examples: [
      "A car salesperson explains the differences between two vehicle models.",
      "A software consultant demonstrates a billing system to a shop owner.",
      "A real-estate agent shows properties to a prospective buyer."
    ],
    channels: "Sales meetings, product demonstrations, telephone conversations, consultations and retail assistance.",
    icon: Handshake,
    color: "emerald"
  },
  {
    number: "04",
    title: "Public Relations",
    subtitle: "Building reputation and public trust",
    description:
      "Public relations focuses on how an organisation communicates with customers, employees, media, communities and other stakeholders. It helps establish credibility and manage the organisation's public image.",
    examples: [
      "A company publishes a transparent statement after a product recall.",
      "A manufacturer announces an environmental initiative through a press conference.",
      "A business supports a local community programme and shares its outcomes."
    ],
    channels: "Media relations, press releases, events, community programmes, corporate communication and crisis communication.",
    icon: Newspaper,
    color: "amber"
  },
  {
    number: "05",
    title: "Direct Marketing",
    subtitle: "Targeted communication with selected customers",
    description:
      "Direct marketing allows a business to communicate directly with an identifiable audience and encourage a measurable response. It can use customer preferences, purchase history or expressed interests to make messages more relevant.",
    examples: [
      "An online store sends a product recommendation email to an interested customer.",
      "A bank sends an eligible customer information about a suitable financial product.",
      "A retailer sends a WhatsApp message about a new collection to customers who opted in."
    ],
    channels: "Email, SMS, permission-based messaging, catalogues, direct mail and personalised offers.",
    icon: Mail,
    color: "rose"
  }
];

const objectives = [
  {
    title: "Create Awareness",
    description:
      "Help potential customers discover a business, product or service.",
    icon: Eye
  },
  {
    title: "Generate Interest",
    description:
      "Give people useful reasons to explore the product further.",
    icon: Lightbulb
  },
  {
    title: "Encourage Purchase",
    description:
      "Reduce hesitation and motivate customers to take action.",
    icon: ShoppingCart
  },
  {
    title: "Build Relationships",
    description:
      "Maintain customer trust and encourage repeat business.",
    icon: HeartHandshake
  }
];

const factors = [
  {
    title: "Nature of the Product",
    description:
      "Complex or expensive products often require personal selling and demonstrations. Everyday consumer products may rely more heavily on advertising and sales promotion.",
    icon: Package
  },
  {
    title: "Target Audience",
    description:
      "A business selling to individual consumers may use social media and retail promotions. A business selling industrial machinery may rely on professional sales representatives and demonstrations.",
    icon: Users
  },
  {
    title: "Marketing Budget",
    description:
      "A small local business may use low-cost digital channels and direct communication, while a national brand may afford television, large campaigns and multiple promotional channels.",
    icon: Wallet
  },
  {
    title: "Product Life Cycle",
    description:
      "A newly launched product needs awareness and education. A mature product may need reminders, customer retention campaigns and competitive offers.",
    icon: Repeat
  },
  {
    title: "Competition",
    description:
      "When alternatives are widely available, businesses may need stronger differentiation, more convincing communication or carefully designed incentives.",
    icon: Scale
  },
  {
    title: "Distribution and Market Reach",
    description:
      "A business with local distribution may focus on nearby customers, while a business selling nationally or internationally needs channels capable of reaching wider markets.",
    icon: Globe
  }
];

const steps = [
  {
    title: "Understand the Market",
    description:
      "Identify the target customers, their needs, purchasing habits and the alternatives available to them."
  },
  {
    title: "Set a Clear Objective",
    description:
      "Decide whether the campaign should create awareness, generate enquiries, increase immediate sales or encourage repeat purchases."
  },
  {
    title: "Choose Promotional Tools",
    description:
      "Select the combination of advertising, sales promotion, personal selling, public relations and direct marketing that best supports the objective."
  },
  {
    title: "Allocate the Budget",
    description:
      "Estimate the cost of each activity and prioritise channels that can realistically reach the intended audience."
  },
  {
    title: "Coordinate the Message",
    description:
      "Keep the product benefits, pricing, offer details and brand communication consistent across all channels."
  },
  {
    title: "Measure and Improve",
    description:
      "Evaluate reach, enquiries, conversion, revenue, customer acquisition cost and customer retention. Improve the mix based on actual results."
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

function PromotionalDiagram() {
  const items = [
    { title: "Advertising", icon: Radio },
    { title: "Sales Promotion", icon: Gift },
    { title: "Personal Selling", icon: Handshake },
    { title: "Public Relations", icon: Newspaper },
    { title: "Direct Marketing", icon: Mail }
  ];

  return (
    <div className="rounded-3xl border border-blue-100 bg-white p-5 shadow-xl shadow-blue-950/5 sm:p-7">
      <div className="mb-6 text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-blue-600">
          Integrated Communication
        </p>
        <div className="mx-auto mt-2 flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-lg shadow-blue-200">
          <Target size={37} />
        </div>
        <h3 className="mt-3 text-lg font-bold text-slate-900">
          Target Customer
        </h3>
        <p className="mt-1 text-xs text-slate-500">
          Reach · Persuade · Build Relationships
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {items.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              className={`rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-3 text-center ${
                index === 4 ? "col-span-2 sm:col-span-1" : ""
              }`}
            >
              <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-white text-blue-700 shadow-sm">
                <Icon size={21} />
              </div>
              <p className="text-xs font-bold text-slate-800">
                {item.title}
              </p>
            </div>
          );
        })}
      </div>
      <div className="mt-5 rounded-xl bg-blue-700 px-4 py-3 text-center text-sm font-bold text-white">
        One Consistent Brand Message
      </div>
    </div>
  );
}

function MiniFlow({ items }) {
  return (
    <div className="grid gap-3 sm:grid-cols-3">
      {items.map((item, index) => (
        <div key={item.title} className="relative rounded-2xl border border-slate-200 bg-white p-4">
          <span className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-700">
            {index + 1}
          </span>
          <h4 className="font-bold text-slate-900">{item.title}</h4>
          <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
        </div>
      ))}
    </div>
  );
}

export default function PromotionalMixPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-slate-900">

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-100">
        <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-blue-200/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-indigo-200/30 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:py-24">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-xs font-bold text-blue-800 shadow-sm">
              <Megaphone size={15} />
              MARKETING MANAGEMENT
            </div>

            <h1 className="max-w-2xl text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Promotional Mix
              <span className="mt-2 block bg-gradient-to-r from-blue-700 to-indigo-600 bg-clip-text text-transparent">
                How Businesses Reach and Influence Customers
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
              Discover how businesses combine advertising, sales promotion,
              personal selling, public relations and direct marketing to
              attract customers, communicate value and generate sales.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#elements"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-700 px-5 py-3 font-bold text-white shadow-lg shadow-blue-200 transition hover:bg-blue-800"
              >
                Explore The Elements <ArrowRight size={18} />
              </a>
              <a
                href="#real-world"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 font-bold text-slate-800 transition hover:border-blue-400"
              >
                See Business Examples
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 text-xs font-semibold text-slate-600">
              <span className="flex items-center gap-2">
                <CheckCircle2 size={15} className="text-blue-600" />
                Practical Explanations
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={15} className="text-blue-600" />
                Real-World Applications
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={15} className="text-blue-600" />
                Marketing Strategy
              </span>
            </div>
          </div>

          <PromotionalDiagram />
        </div>
      </section>

      
{/* INSIDE THIS GUIDE */}
<section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:py-16">
  <div className="mb-8">
    <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-blue-700">
      EXPLORE THE TOPIC
    </p>
    <h2 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
      Inside This Guide
    </h2>
    <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">
      Explore the key concepts, promotional strategies and practical business
      applications covered in this guide.
    </p>
  </div>

  <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
    {[
      { title: "Meaning Of Promotional Mix", icon: Megaphone },
      { title: "Five Main Elements", icon: Layers },
      { title: "Real-World Business Examples", icon: Store },
      { title: "Push Vs Pull Strategy", icon: ArrowLeftRight },
      { title: "Comparison Of Promotional Elements", icon: Scale },
      { title: "Factors Affecting Promotional Mix", icon: SlidersHorizontal },
      { title: "Promotional Budget Allocation", icon: Wallet },
      { title: "Integrated Marketing Communications", icon: Network },
      { title: "Developing A Promotional Mix", icon: ClipboardCheck },
      { title: "Measuring Promotional Performance", icon: ChartNoAxesCombined },
      { title: "Benefits And Limitations", icon: CheckCircle2 },
      { title: "Promotional Mix Vs Marketing Mix", icon: BriefcaseBusiness }
    ].map((item, index) => {
      const Icon = item.icon;

      return (
        <div
          key={item.title}
          className="flex min-h-[88px] items-center gap-3 rounded-xl border border-slate-200 bg-white p-3 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-md sm:p-4"
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
            <Icon size={20} />
          </div>
          <h3 className="text-xs font-bold leading-5 text-slate-800 sm:text-sm">
            {item.title}
          </h3>
        </div>
      );
    })}
  </div>
</section>


      {/* INTRODUCTION */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              eyebrow="START WITH THE IDEA"
              title="What Is A Promotional Mix?"
              description="A promotional mix is the combination of promotional methods a business uses to communicate with its target market and achieve its marketing objectives."
            />
            <p className="text-sm leading-7 text-slate-600">
              A business rarely depends on just one method to attract and
              convince customers. It may use advertising to introduce a
              product, a discount to encourage a first purchase, a salesperson
              to explain its benefits and follow-up messages to maintain the
              relationship.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              The promotional mix is the planned combination of these
              activities. The right combination depends on the product,
              audience, available budget, competition and the result the
              business wants to achieve.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <h3 className="text-lg font-bold text-slate-900">
              A Simple Business Situation
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Imagine a new smartphone brand entering the Indian market.
            </p>
            <div className="mt-6 space-y-4">
              {[
                ["Advertising", "Introduces the smartphone to potential buyers."],
                ["Sales Promotion", "Offers an exchange bonus or launch discount."],
                ["Personal Selling", "Retail staff demonstrate the camera and features."],
                ["Public Relations", "Product reviews and media coverage build credibility."],
                ["Direct Marketing", "Interested customers receive launch updates."]
              ].map(([title, description]) => (
                <div key={title} className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 shrink-0 text-blue-600" size={19} />
                  <div>
                    <p className="text-sm font-bold text-slate-900">{title}</p>
                    <p className="mt-1 text-sm leading-6 text-slate-600">{description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-xl bg-blue-50 p-4 text-sm leading-6 text-blue-900">
              <strong>The important point:</strong> These activities support
              one product launch, but each solves a different communication
              problem.
            </div>
          </div>
        </div>
      </section>
<AdSlot />
      {/* ELEMENTS */}
      <section id="elements" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
        <SectionHeading
          eyebrow="THE FIVE MAIN ELEMENTS"
          title="Elements Of The Promotional Mix"
          description="Each promotional method has a different role. Understanding these differences helps a business decide how to communicate effectively instead of spending money on unrelated promotional activities."
        />

        <div className="space-y-7">
          {elements.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.number}
                className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
              >
                <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
                  <div className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-6 sm:p-8">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold tracking-widest text-blue-600">
                        ELEMENT {item.number}
                      </span>
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-700 text-white shadow-lg shadow-blue-200">
                        <Icon size={24} />
                      </div>
                    </div>
                    <h3 className="mt-7 text-2xl font-bold text-slate-950 sm:text-3xl">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm font-semibold text-blue-700">
                      {item.subtitle}
                    </p>
                    <p className="mt-5 text-sm leading-7 text-slate-600">
                      {item.description}
                    </p>
                  </div>

                  <div className="p-6 sm:p-8">
                    <h4 className="flex items-center gap-2 font-bold text-slate-900">
                      <Building2 size={18} className="text-blue-600" />
                      Real Business Examples
                    </h4>
                    <div className="mt-4 space-y-4">
                      {item.examples.map((example) => (
                        <div key={example} className="flex gap-3">
                          <CheckCircle2 size={17} className="mt-1 shrink-0 text-emerald-600" />
                          <p className="text-sm leading-6 text-slate-600">{example}</p>
                        </div>
                      ))}
                    </div>
                    <div className="mt-7 rounded-xl bg-slate-50 p-4">
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                        Common Channels
                      </p>
                      <p className="mt-2 text-sm leading-6 text-slate-700">
                        {item.channels}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* REAL WORLD CASE */}
      <section id="real-world" className="bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 py-16 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="MARKETING IN PRACTICE"
            title="How A Business Uses Multiple Promotional Tools"
            description="Consider a fictional Indian direct-to-consumer skincare brand launching a new sunscreen. This example shows how different promotional methods support the same commercial objective."
            dark
          />

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Build Awareness",
                method: "Advertising",
                icon: MonitorPlay,
                description:
                  "The brand runs Instagram and YouTube campaigns showing the sunscreen's texture, SPF information and intended use."
              },
              {
                title: "Encourage Trial",
                method: "Sales Promotion",
                icon: Gift,
                description:
                  "A first-order bundle or introductory offer reduces the initial purchase barrier."
              },
              {
                title: "Answer Questions",
                method: "Personal Selling",
                icon: MessageCircle,
                description:
                  "Customer support representatives explain product suitability, application and product information."
              },
              {
                title: "Build Credibility",
                method: "Public Relations",
                icon: Newspaper,
                description:
                  "The brand shares verifiable product information and works with relevant media for transparent product coverage."
              },
              {
                title: "Maintain Contact",
                method: "Direct Marketing",
                icon: Mail,
                description:
                  "Customers who have opted in receive product education, order updates and relevant offers."
              },
              {
                title: "Measure Performance",
                method: "Marketing Analytics",
                icon: ChartNoAxesCombined,
                description:
                  "The business evaluates customer acquisition cost, purchase conversion, repeat orders and campaign profitability."
              }
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="rounded-2xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-widest text-blue-300">
                      {item.method}
                    </span>
                    <Icon size={22} className="text-blue-300" />
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
              What This Example Teaches
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-200">
              A promotional mix is not simply a checklist of five activities.
              The business must decide which activities are useful, how they
              support one another and whether the combined investment produces
              worthwhile results.
            </p>
          </div>
        </div>
      </section>
<AdSlot />
      {/* PUSH AND PULL */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
        <SectionHeading
          eyebrow="TWO IMPORTANT PROMOTIONAL APPROACHES"
          title="Push Strategy Vs Pull Strategy"
          description="Businesses can promote products by encouraging distributors and retailers to sell them, or by creating customer demand that encourages people to seek them out."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-blue-200 bg-gradient-to-br from-blue-50 to-white p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-700 text-white">
                <ArrowRight size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-950">Push Strategy</h3>
                <p className="text-sm font-semibold text-blue-700">Move products through the distribution channel</p>
              </div>
            </div>
            <p className="mt-5 text-sm leading-7 text-slate-600">
              In a push strategy, a business encourages distributors, wholesalers
              and retailers to stock, display and sell its products.
            </p>

            <div className="mt-6 flex flex-col items-center gap-2">
              {["Manufacturer", "Wholesaler", "Retailer", "Customer"].map((name, index) => (
                <div key={name} className="flex w-full max-w-xs flex-col items-center">
                  <div className={`w-full rounded-xl px-4 py-3 text-center text-sm font-bold ${
                    index === 3 ? "bg-blue-700 text-white" : "border border-blue-200 bg-white text-slate-800"
                  }`}>
                    {name}
                  </div>
                  {index !== 3 && <ArrowRight className="my-1 rotate-90 text-blue-600" size={18} />}
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-xl bg-white p-4">
              <p className="text-sm font-bold text-slate-900">Example</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                A packaged food manufacturer offers retailers trade discounts,
                promotional display materials and bulk purchase incentives to
                encourage them to stock its products.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-indigo-200 bg-gradient-to-br from-indigo-50 to-white p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-700 text-white">
                <Target size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-950">Pull Strategy</h3>
                <p className="text-sm font-semibold text-indigo-700">Create demand among final customers</p>
              </div>
            </div>
            <p className="mt-5 text-sm leading-7 text-slate-600">
              In a pull strategy, a business communicates directly with
              consumers to generate interest and demand for its products.
            </p>

            <div className="mt-6 flex flex-col items-center gap-2">
              {["Advertising and Brand Awareness", "Customer Interest", "Product Search", "Retail Purchase"].map((name, index) => (
                <div key={name} className="flex w-full max-w-xs flex-col items-center">
                  <div className={`w-full rounded-xl px-4 py-3 text-center text-sm font-bold ${
                    index === 3 ? "bg-indigo-700 text-white" : "border border-indigo-200 bg-white text-slate-800"
                  }`}>
                    {name}
                  </div>
                  {index !== 3 && <ArrowRight className="my-1 rotate-90 text-indigo-600" size={18} />}
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-xl bg-white p-4">
              <p className="text-sm font-bold text-slate-900">Example</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                A smartphone company advertises its new model so consumers
                actively ask retailers for that particular phone.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
          <p className="flex items-center gap-2 font-bold text-emerald-900">
            <Info size={19} />
            Important Reality
          </p>
          <p className="mt-2 text-sm leading-7 text-emerald-900/80">
            Push and pull are not mutually exclusive. Many businesses use both.
            Retail incentives can improve product availability while advertising
            creates demand among customers.
          </p>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="UNDERSTANDING THE DIFFERENCES"
            title="How The Five Promotional Elements Differ"
            description="All five methods communicate with customers or stakeholders, but their methods, costs, reach and strengths are different."
          />

          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full min-w-[760px] text-left text-sm">
              <thead className="bg-slate-900 text-white">
                <tr>
                  <th className="p-4 font-bold">Element</th>
                  <th className="p-4 font-bold">Main Purpose</th>
                  <th className="p-4 font-bold">Communication</th>
                  <th className="p-4 font-bold">Typical Strength</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="p-4 font-bold">Advertising</td>
                  <td className="p-4 text-slate-600">Create awareness and influence perception</td>
                  <td className="p-4 text-slate-600">Paid mass or targeted media</td>
                  <td className="p-4 text-slate-600">Broad reach</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold">Sales Promotion</td>
                  <td className="p-4 text-slate-600">Encourage immediate purchase or trial</td>
                  <td className="p-4 text-slate-600">Incentives and offers</td>
                  <td className="p-4 text-slate-600">Short-term response</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold">Personal Selling</td>
                  <td className="p-4 text-slate-600">Explain and persuade individual buyers</td>
                  <td className="p-4 text-slate-600">Direct human interaction</td>
                  <td className="p-4 text-slate-600">Personalised communication</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold">Public Relations</td>
                  <td className="p-4 text-slate-600">Develop reputation and credibility</td>
                  <td className="p-4 text-slate-600">Media and stakeholder relations</td>
                  <td className="p-4 text-slate-600">Trust and reputation</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold">Direct Marketing</td>
                  <td className="p-4 text-slate-600">Reach selected customers and encourage response</td>
                  <td className="p-4 text-slate-600">Direct targeted messages</td>
                  <td className="p-4 text-slate-600">Targeting and measurement</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs leading-6 text-slate-500">
            These are typical characteristics, not fixed rules. Actual costs,
            reach and effectiveness depend on the channel, market and campaign.
          </p>
        </div>
      </section>

      {/* FACTORS */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
        <SectionHeading
          eyebrow="STRATEGIC DECISIONS"
          title="Factors Affecting The Choice Of Promotional Mix"
          description="There is no single promotional combination that works for every business. The mix must fit the market, product, customer and business situation."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {factors.map((item) => (
            <InfoCard key={item.title} {...item} />
          ))}
        </div>
      </section>

      {/* BUDGET */}
      <section className="bg-gradient-to-br from-blue-950 via-slate-950 to-indigo-950 py-16 text-white sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              eyebrow="RESOURCE ALLOCATION"
              title="How Should A Business Allocate Its Promotional Budget?"
              description="A promotional budget is the amount a business plans to spend on its communication and promotional activities. There is no universally correct percentage for each promotional method."
              dark
            />
            <p className="text-sm leading-7 text-slate-300">
              A small business might prioritise local search advertising,
              product demonstrations and customer referrals. A large consumer
              brand may invest in national campaigns, retail promotions,
              public relations and direct marketing.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              The allocation should reflect the business objective and expected
              results, not simply divide the budget equally among five methods.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-6 sm:p-8">
            <h3 className="text-lg font-bold">Illustrative Campaign Budget</h3>
            <p className="mt-2 text-sm text-slate-300">
              Example: A local business has ₹50,000 for a product launch.
            </p>
            <div className="mt-7 space-y-5">
              {[
                ["Advertising", 40, "₹20,000", "bg-blue-500"],
                ["Sales Promotion", 20, "₹10,000", "bg-violet-500"],
                ["Personal Selling", 20, "₹10,000", "bg-emerald-500"],
                ["Public Relations", 10, "₹5,000", "bg-amber-500"],
                ["Direct Marketing", 10, "₹5,000", "bg-rose-500"]
              ].map(([name, value, amount, color]) => (
                <div key={name}>
                  <div className="mb-2 flex items-center justify-between gap-3 text-sm">
                    <span className="font-semibold text-white">{name}</span>
                    <span className="text-slate-300">{amount} · {value}%</span>
                  </div>
                  <div className="h-2.5 overflow-hidden rounded-full bg-white/10">
                    <div className={`h-full rounded-full ${color}`} style={{ width: `${value}%` }} />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-7 flex items-center justify-between border-t border-white/10 pt-5">
              <span className="text-sm font-semibold text-slate-300">Total Campaign Budget</span>
              <span className="text-xl font-bold text-white">₹50,000</span>
            </div>
            <p className="mt-4 text-xs leading-6 text-slate-400">
              This is only an illustrative allocation. It is not a recommended
              industry benchmark or a universal marketing formula.
            </p>
          </div>
        </div>
      </section>
<AdSlot />
      {/* INTEGRATED MARKETING */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
        <SectionHeading
          eyebrow="COORDINATION MATTERS"
          title="Integrated Marketing Communications"
          description="Promotional activities are more effective when they communicate a consistent message. Integrated marketing communications, or IMC, coordinates different communication channels so customers receive a connected brand experience."
        />

        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div className="rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-6 sm:p-8">
            <div className="rounded-2xl bg-blue-700 p-5 text-center text-white shadow-lg">
              <Network className="mx-auto mb-2" size={30} />
              <h3 className="font-bold">One Brand Message</h3>
              <p className="mt-1 text-xs text-blue-100">Consistent value proposition</p>
            </div>
            <div className="mx-auto h-8 w-px bg-blue-300" />
            <div className="grid grid-cols-2 gap-3">
              {[
                ["Advertising", Radio],
                ["Public Relations", Newspaper],
                ["Sales Promotion", Gift],
                ["Direct Marketing", Mail]
              ].map(([name, Icon]) => (
                <div key={name} className="rounded-xl border border-blue-100 bg-white p-4 text-center">
                  <Icon className="mx-auto mb-2 text-blue-700" size={23} />
                  <p className="text-xs font-bold text-slate-800">{name}</p>
                </div>
              ))}
              <div className="col-span-2 rounded-xl border border-blue-100 bg-white p-4 text-center">
                <Handshake className="mx-auto mb-2 text-blue-700" size={23} />
                <p className="text-xs font-bold text-slate-800">Personal Selling</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-slate-950">
              Why Coordination Is Important
            </h3>
            <div className="mt-5 space-y-5">
              {[
                ["Consistent Information", "Product features, pricing and promises should not contradict one another across different channels."],
                ["Better Customer Experience", "A customer should not see one offer in an advertisement and discover a completely different offer at checkout."],
                ["Efficient Spending", "Coordinated activities can reinforce one another rather than repeatedly communicating disconnected messages."],
                ["Stronger Brand Identity", "Consistent communication makes it easier for customers to recognise and understand the brand."]
              ].map(([title, description]) => (
                <div key={title} className="flex gap-3">
                  <BadgeCheck size={21} className="mt-0.5 shrink-0 text-blue-700" />
                  <div>
                    <h4 className="font-bold text-slate-900">{title}</h4>
                    <p className="mt-1 text-sm leading-6 text-slate-600">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STRATEGY PROCESS */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="FROM PLANNING TO EXECUTION"
            title="How To Develop A Promotional Mix"
            description="Businesses should choose promotional methods based on their objectives and market conditions. A practical planning process helps prevent unnecessary spending."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {steps.map((item, index) => (
              <div key={item.title} className="rounded-2xl border border-slate-200 bg-white p-5">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-700 text-sm font-bold text-white">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="font-bold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MEASUREMENT */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
        <SectionHeading
          eyebrow="MEASURE WHAT MATTERS"
          title="How Can A Business Evaluate Its Promotional Mix?"
          description="A campaign should not be considered successful just because it receives views, likes or enquiries. The business must evaluate whether its promotional investment contributes to meaningful results."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["Reach and Impressions", "How many people were exposed to the campaign?", Eye],
            ["Enquiry Rate", "How many interested people contacted the business?", MessageCircle],
            ["Conversion Rate", "How many prospects actually became customers?", Target],
            ["Customer Acquisition Cost", "How much did it cost to acquire each customer?", CircleDollarSign],
            ["Return on Investment", "Did the financial return justify the campaign cost?", TrendingUp],
            ["Repeat Purchase Rate", "Are customers returning for further purchases?", Repeat],
            ["Revenue Contribution", "How much revenue can be attributed to the campaign?", BarChart3],
            ["Customer Retention", "Is the business maintaining valuable customer relationships?", HeartHandshake]
          ].map(([title, description, Icon]) => (
            <InfoCard key={title} icon={Icon} title={title} description={description} />
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-blue-200 bg-blue-50 p-6">
          <h3 className="font-bold text-blue-950">A Practical Example</h3>
          <p className="mt-3 text-sm leading-7 text-blue-900">
            Suppose a business spends ₹20,000 on a campaign and generates
            ₹80,000 in attributable revenue. The campaign generated four rupees
            of revenue for every rupee spent. However, this does not mean the
            business earned ₹60,000 in profit. Product costs, delivery, taxes,
            discounts and other expenses must also be considered.
          </p>
        </div>
      </section>

      {/* ADVANTAGES AND LIMITATIONS */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="A BALANCED VIEW"
            title="Benefits And Limitations Of A Promotional Mix"
            description="A carefully planned promotional mix can support business growth, but it also involves costs, trade-offs and practical challenges."
          />
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-emerald-200 bg-white p-6 sm:p-8">
              <h3 className="flex items-center gap-2 text-xl font-bold text-emerald-800">
                <CheckCircle2 size={23} />
                Potential Benefits
              </h3>
              <div className="mt-6 space-y-4">
                {[
                  "Improves product and brand awareness.",
                  "Helps businesses communicate product value.",
                  "Supports customer acquisition and sales growth.",
                  "Provides multiple ways to reach different audiences.",
                  "Can strengthen brand reputation and customer relationships.",
                  "Allows businesses to measure and improve campaign performance."
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
                Practical Limitations
              </h3>
              <div className="mt-6 space-y-4">
                {[
                  "Promotional campaigns can consume significant financial resources.",
                  "Advertising exposure does not guarantee sales.",
                  "Excessive discounts can reduce profit margins.",
                  "Inconsistent communication can confuse customers.",
                  "Measuring the contribution of individual channels can be difficult.",
                  "Poorly targeted promotion can reach people unlikely to purchase."
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

      {/* COMMON CONFUSIONS */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
        <SectionHeading
          eyebrow="CLEAR UP THE CONFUSION"
          title="Promotional Mix Vs Marketing Mix"
          description="These concepts are connected, but they do not mean the same thing."
        />

        <div className="grid gap-5 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 p-6">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-700">
              <BriefcaseBusiness size={23} />
            </div>
            <h3 className="text-xl font-bold">Marketing Mix</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              The marketing mix covers the broader set of decisions a business
              makes to offer value to customers. In the traditional 4Ps model,
              it includes Product, Price, Place and Promotion.
            </p>
            <div className="mt-5 grid grid-cols-2 gap-2">
              {["Product", "Price", "Place", "Promotion"].map((name) => (
                <div key={name} className="rounded-lg bg-slate-50 p-3 text-center text-sm font-bold text-slate-800">
                  {name}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-blue-200 bg-blue-50/50 p-6">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-700 text-white">
              <Megaphone size={23} />
            </div>
            <h3 className="text-xl font-bold">Promotional Mix</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              The promotional mix focuses specifically on the communication
              methods used to inform, persuade and remind the target market.
              It is a part of the broader promotion element of the marketing mix.
            </p>
            <div className="mt-5 grid grid-cols-2 gap-2">
              {["Advertising", "Sales Promotion", "Personal Selling", "Public Relations", "Direct Marketing"].map((name) => (
                <div key={name} className="rounded-lg bg-white p-3 text-center text-xs font-bold text-blue-800">
                  {name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
<AdSlot/>
      {/* QUICK RECAP */}
      <section className="bg-gradient-to-br from-blue-950 via-slate-950 to-indigo-950 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="KEY TAKEAWAYS"
            title="What To Remember About Promotional Mix"
            description="The main idea is not to use every promotional method equally. It is to select and coordinate the methods that best serve the business and its customers."
            dark
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "A promotional mix combines different methods of marketing communication.",
              "Advertising is paid communication with a broad or targeted audience.",
              "Sales promotion uses incentives to encourage short-term action.",
              "Personal selling involves direct interaction with prospective buyers.",
              "Public relations supports reputation, credibility and stakeholder relationships.",
              "Direct marketing communicates with selected customers and encourages measurable responses.",
              "Push strategy encourages channel partners to stock and sell products.",
              "Pull strategy creates demand among final customers.",
              "The best promotional mix depends on objectives, customers, product, budget and competition."
            ].map((text, index) => (
              <div key={index} className="flex gap-3 rounded-xl border border-white/10 bg-white/[0.06] p-4">
                <CheckCircle2 className="mt-0.5 shrink-0 text-blue-300" size={19} />
                <p className="text-sm leading-6 text-slate-200">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-5xl px-5 py-16 sm:px-8 lg:py-24">
        <SectionHeading
          eyebrow="COMMON QUESTIONS"
          title="Frequently Asked Questions About Promotional Mix"
          description="Answers to common questions about promotional methods, business applications and marketing strategy."
        />

        <div className="space-y-3">
          {[
            [
              "What Are The Five Elements Of Promotional Mix?",
              "The five commonly taught elements are advertising, sales promotion, personal selling, public relations and direct marketing. Some modern marketing frameworks also discuss digital, social media and influencer marketing as channels or additional promotional approaches."
            ],
            [
              "Is Digital Marketing Part Of The Promotional Mix?",
              "Digital marketing includes activities conducted through digital channels. Search advertising is advertising, online discount campaigns are sales promotion, email campaigns can be direct marketing, and online public relations can support reputation. Digital marketing is therefore not one single promotional element."
            ],
            [
              "What Is The Difference Between Advertising And Sales Promotion?",
              "Advertising communicates a product's value and can build awareness over time. Sales promotion uses incentives such as discounts, coupons and free samples to encourage a particular purchase or action, often within a limited period."
            ],
            [
              "Why Is Personal Selling Important?",
              "Personal selling is especially useful when customers need explanations, demonstrations, negotiation or customised advice before making a purchase. It is common in automobiles, real estate, industrial products and business software."
            ],
            [
              "What Is The Difference Between Push And Pull Strategy?",
              "Push strategy focuses on encouraging intermediaries such as wholesalers and retailers to stock and sell products. Pull strategy focuses on generating customer demand so buyers actively seek the product."
            ],
            [
              "Can Small Businesses Use A Promotional Mix?",
              "Yes. A small business can combine local advertising, introductory offers, personal customer interaction, positive public relations and permission-based direct messages. It does not need a large advertising budget to use promotional methods strategically."
            ],
            [
              "Is Public Relations The Same As Advertising?",
              "No. Advertising involves paid placement of promotional messages, whereas public relations manages communication and relationships with the public and other stakeholders. Earned media coverage is not the same as purchasing an advertisement."
            ],
            [
              "How Can A Business Know Whether Its Promotional Mix Is Working?",
              "It can track awareness, enquiries, conversion rates, customer acquisition costs, revenue, repeat purchases and profitability. The relevant measures depend on the objective of the campaign."
            ]
          ].map(([question, answer]) => (
            <details key={question} className="group rounded-xl border border-slate-200 bg-white p-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-slate-900">
                {question}
                <ChevronRight size={19} className="shrink-0 text-blue-600 transition group-open:rotate-90" />
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
                <Target size={15} />
                THE BIGGER PICTURE
              </div>
              <h2 className="max-w-3xl text-2xl font-bold leading-tight sm:text-3xl">
                Promotion Is Not Just About Making People Buy.
                It Is About Giving Them A Reason To Choose.
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-blue-100">
                A well-designed promotional mix connects the right message,
                the right communication method and the right audience. Its
                real value comes from helping customers understand a product
                and helping businesses build sustainable customer relationships.
              </p>
            </div>
            <a
              href="#elements"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 font-bold text-blue-800 transition hover:bg-blue-50"
            >
              Review The Elements <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
