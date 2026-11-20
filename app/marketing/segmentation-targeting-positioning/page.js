
import {
  Target,
  Users,
  Crosshair,
  Eye,
  ArrowRight,
  ArrowDown,
  CheckCircle2,
  Smartphone,
  GraduationCap,
  Briefcase,
  Camera,
  Gamepad2,
  Wallet,
  Heart,
  MapPin,
  Activity,
  Lightbulb,
  Layers,
  TrendingUp,
  ShieldCheck,
  Star,
  ShoppingBag,
  Store,
  Megaphone,
  Search,
  CircleDollarSign,
  Zap,
  MessageCircle,
  BarChart3,
  XCircle,
  Building2,
  Sparkles,Coffee 
} from "lucide-react";
import AdSlot from "../../../components/AdSlot";

export const metadata = {
  title:
    "Segmentation, Targeting & Positioning (STP) | Examples & Strategy | PriceTag HUB",
  description:
    "Understand the STP marketing framework—market segmentation, targeting and positioning—with practical Indian business examples, customer selection, positioning strategy and real-world applications.",
};

const SectionHeading = ({
  eyebrow,
  title,
  description,
  dark = false,
}) => (
  <div className="mb-10 max-w-3xl">
    <p
      className={`mb-3 text-sm font-bold uppercase tracking-[0.18em] ${
        dark ? "text-blue-300" : "text-blue-600"
      }`}
    >
      {eyebrow}
    </p>
    <h2
      className={`text-3xl font-bold tracking-tight sm:text-4xl ${
        dark ? "text-white" : "text-slate-900"
      }`}
    >
      {title}
    </h2>
    {description && (
      <p
        className={`mt-4 text-base leading-7 sm:text-lg ${
          dark ? "text-slate-300" : "text-slate-600"
        }`}
      >
        {description}
      </p>
    )}
  </div>
);

const InfoCard = ({ icon: Icon, title, children, color = "blue" }) => {
  const colors = {
    blue: "bg-blue-50 text-blue-600 border-blue-100",
    indigo: "bg-indigo-50 text-indigo-600 border-indigo-100",
    sky: "bg-sky-50 text-sky-600 border-sky-100",
    violet: "bg-violet-50 text-violet-600 border-violet-100",
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-6">
      <div
        className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl border ${colors[color]}`}
      >
        <Icon size={23} />
      </div>
      <h3 className="mb-2 text-lg font-bold text-slate-900">{title}</h3>
      <div className="text-sm leading-6 text-slate-600">{children}</div>
    </div>
  );
};

const StepCard = ({ number, title, description }) => (
  <div className="relative rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-sm font-bold text-white">
      {number}
    </div>
    <h3 className="mb-2 text-base font-bold text-slate-900">{title}</h3>
    <p className="text-sm leading-6 text-slate-600">{description}</p>
  </div>
);

const SegmentCard = ({ icon: Icon, title, need, buying, color }) => (
  <div className="rounded-2xl border border-slate-200 bg-white p-5">
    <div className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl ${color}`}>
      <Icon size={22} />
    </div>
    <h3 className="mb-2 font-bold text-slate-900">{title}</h3>
    <p className="mb-3 text-sm leading-6 text-slate-600">{need}</p>
    <div className="rounded-xl bg-slate-50 p-3 text-xs leading-5 text-slate-600">
      <span className="font-bold text-slate-800">Buying behaviour: </span>
      {buying}
    </div>
  </div>
);

export default function SegmentationTargetingPositioningPage() {
  return (
    <main className="overflow-hidden bg-white text-slate-900">
      {/* HERO */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-sky-100">
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-sky-200/40 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-2 lg:px-12">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-sm font-bold text-blue-700 shadow-sm">
              <Target size={16} />
              Marketing Strategy Framework
            </div>

            <h1 className="text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Segmentation,
              <span className="block text-blue-600">Targeting & Positioning</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              A business cannot effectively serve everyone. STP helps companies
              understand different customers, select the right people to serve, and
              create a distinct reason for those customers to choose their brand.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "Understand Customers",
                "Choose Your Market",
                "Build Brand Identity",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-bold text-slate-700 shadow-sm"
                >
                  {item}
                </span>
              ))}
            </div>

            <a
              href="#stp-process"
              className="mt-9 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 font-bold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
            >
              Explore the STP Process
              <ArrowRight size={18} />
            </a>
          </div>

          {/* Hero visual */}
          <div className="relative mx-auto w-full max-w-xl">
            <div className="rounded-3xl border border-blue-100 bg-white/90 p-5 shadow-xl shadow-blue-900/5 sm:p-7">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold text-slate-500">
                    The Customer Strategy
                  </p>
                  <p className="mt-1 text-xl font-bold text-slate-900">
                    From market to brand
                  </p>
                </div>
                <div className="rounded-xl bg-blue-50 p-3 text-blue-600">
                  <Sparkles size={24} />
                </div>
              </div>

              <div className="space-y-3">
                <div className="rounded-2xl border border-blue-100 bg-gradient-to-r from-blue-50 to-white p-4">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white">
                      <Users size={23} />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">01. Segmentation</p>
                      <p className="text-sm text-slate-600">
                        Divide the market into customer groups
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center text-blue-400">
                  <ArrowDown size={22} />
                </div>

                <div className="rounded-2xl border border-indigo-100 bg-gradient-to-r from-indigo-50 to-white p-4">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-600 text-white">
                      <Crosshair size={23} />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">02. Targeting</p>
                      <p className="text-sm text-slate-600">
                        Select the customer group to serve
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center text-blue-400">
                  <ArrowDown size={22} />
                </div>

                <div className="rounded-2xl border border-sky-100 bg-gradient-to-r from-sky-50 to-white p-4">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sky-600 text-white">
                      <Eye size={23} />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">03. Positioning</p>
                      <p className="text-sm text-slate-600">
                        Create a unique place in customers' minds
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-5 rounded-xl bg-slate-900 p-4 text-center">
                <p className="text-sm font-bold text-white">
                  Right Customer · Right Offer · Right Perception
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="The Core Idea"
          title="Why STP matters to a real business"
          description="STP is a decision-making framework. It helps businesses avoid wasting resources on customers they cannot serve well and instead focus on a group whose needs match what the business can offer."
        />

        <div className="grid gap-6 md:grid-cols-3">
          <InfoCard icon={Users} title="Segmentation" color="blue">
            Who exists in the market, and how do their needs and buying behaviour
            differ?
          </InfoCard>
          <InfoCard icon={Crosshair} title="Targeting" color="indigo">
            Which customer group is worth serving based on demand, competition,
            resources and profitability?
          </InfoCard>
          <InfoCard icon={Eye} title="Positioning" color="sky">
            What should the chosen customers remember about the business when
            comparing it with competitors?
          </InfoCard>
        </div>

        <div className="mt-8 rounded-2xl border border-blue-100 bg-gradient-to-r from-blue-50 to-sky-50 p-6 sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-blue-600 shadow-sm">
              <Lightbulb size={24} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">
                The simplest way to understand STP
              </h3>
              <p className="mt-2 leading-7 text-slate-700">
                Imagine opening a clothing shop. You could sell clothes to
                everyone—children, office workers, athletes, students and
                luxury shoppers. But with limited money and space, you cannot
                stock everything. STP helps you decide which customers to focus
                on, which products to stock for them, and why they should shop
                at your store instead of another store.
              </p>
            </div>
          </div>
        </div>
      </section>
<AdSlot />
      {/* SEGMENTATION */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <SectionHeading
            eyebrow="Step 01"
            title="Market Segmentation – Understand Different Customers"
            description="Market segmentation means dividing a broad market into smaller groups of customers who share similar characteristics, needs, preferences or buying behaviour."
          />

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <h3 className="mb-5 text-xl font-bold">
                How one market contains different customer groups
              </h3>

              <div className="rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 p-5 text-center text-white">
                <Users className="mx-auto mb-2" size={28} />
                <p className="font-bold">Entire Smartphone Market</p>
                <p className="mt-1 text-sm text-blue-100">
                  People with different needs and budgets
                </p>
              </div>

              <div className="mx-auto flex justify-center py-3 text-slate-400">
                <ArrowDown size={23} />
              </div>

              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: GraduationCap, label: "Students", color: "bg-blue-50 text-blue-700" },
                  { icon: Briefcase, label: "Professionals", color: "bg-indigo-50 text-indigo-700" },
                  { icon: Camera, label: "Photography Lovers", color: "bg-sky-50 text-sky-700" },
                  { icon: Gamepad2, label: "Gamers", color: "bg-violet-50 text-violet-700" },
                  { icon: Wallet, label: "Budget Buyers", color: "bg-cyan-50 text-cyan-700" },
                  { icon: Star, label: "Premium Buyers", color: "bg-amber-50 text-amber-700" },
                ].map(({ icon: Icon, label, color }) => (
                  <div
                    key={label}
                    className={`flex items-center gap-3 rounded-xl border border-slate-100 p-3 ${color}`}
                  >
                    <Icon size={20} />
                    <span className="text-sm font-bold">{label}</span>
                  </div>
                ))}
              </div>

              <p className="mt-5 text-sm leading-6 text-slate-600">
                These groups may all buy smartphones, but the reasons for buying,
                the features they value and the amount they are willing to pay can
                be very different.
              </p>
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <h3 className="mb-2 font-bold text-slate-900">
                  Why divide the market?
                </h3>
                <p className="text-sm leading-6 text-slate-600">
                  A student may prioritize price, battery and online classes. A
                  photographer may care about camera quality. A gamer may want
                  performance and cooling. Treating all three as identical
                  customers can lead to an ineffective product and marketing
                  message.
                </p>
              </div>

              <div className="rounded-2xl border border-blue-100 bg-blue-50 p-5">
                <h3 className="mb-2 font-bold text-blue-900">
                  The business benefit
                </h3>
                <p className="text-sm leading-6 text-blue-800">
                  Segmentation helps companies discover customer opportunities,
                  develop suitable products, improve communication, choose
                  pricing and allocate their marketing budgets more intelligently.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <h3 className="mb-2 font-bold text-slate-900">
                  Important distinction
                </h3>
                <p className="text-sm leading-6 text-slate-600">
                  A segment is not automatically a target. A business may identify
                  ten customer groups but decide that only one or two are worth
                  pursuing.
                </p>
              </div>
            </div>
          </div>

          {/* Segmentation bases */}
          <div className="mt-14">
            <h3 className="mb-6 text-2xl font-bold text-slate-900">
              Four common ways businesses segment a market
            </h3>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              <SegmentCard
                icon={Users}
                title="Demographic"
                need="Age, income, occupation, education, family size and other population characteristics."
                buying="A ₹12,000 phone may appeal to a student with limited income."
                color="bg-blue-50 text-blue-600"
              />
              <SegmentCard
                icon={MapPin}
                title="Geographic"
                need="Country, state, city, rural or urban location, climate and regional needs."
                buying="A company may promote a durable phone with strong battery life in areas with unreliable power."
                color="bg-sky-50 text-sky-600"
              />
              <SegmentCard
                icon={Heart}
                title="Psychographic"
                need="Lifestyle, interests, personality, values, aspirations and attitudes."
                buying="A buyer may prefer a premium-looking device because they value design and status."
                color="bg-violet-50 text-violet-600"
              />
              <SegmentCard
                icon={Activity}
                title="Behavioral"
                need="Usage, loyalty, benefits sought, buying frequency, occasions and engagement."
                buying="A heavy mobile gamer may look for a high-refresh display and dependable performance."
                color="bg-indigo-50 text-indigo-600"
              />
            </div>
          </div>

          {/* Example */}
          <div className="mt-10 overflow-hidden rounded-3xl border border-slate-200 bg-white">
            <div className="border-b border-slate-100 bg-gradient-to-r from-blue-50 to-white p-6">
              <p className="text-sm font-bold uppercase tracking-wider text-blue-600">
                Practical Example
              </p>
              <h3 className="mt-2 text-xl font-bold text-slate-900">
                One smartphone, four customer insights
              </h3>
            </div>

            <div className="grid gap-0 md:grid-cols-2">
              <div className="space-y-4 p-6">
                {[
                  {
                    label: "Demographic",
                    answer: "College student, age 19, limited monthly budget",
                  },
                  {
                    label: "Geographic",
                    answer: "Living in a tier-2 city in India",
                  },
                  {
                    label: "Psychographic",
                    answer: "Values independence, technology and social connection",
                  },
                  {
                    label: "Behavioral",
                    answer: "Uses the phone for classes, reels, UPI and gaming",
                  },
                ].map((item) => (
                  <div key={item.label} className="rounded-xl bg-slate-50 p-4">
                    <p className="mb-1 text-xs font-bold uppercase tracking-wide text-blue-600">
                      {item.label}
                    </p>
                    <p className="text-sm font-bold leading-6 text-slate-800">
                      {item.answer}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col justify-center bg-gradient-to-br from-blue-50 to-sky-100 p-6 sm:p-8">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-blue-600 shadow-sm">
                  <Smartphone size={27} />
                </div>
                <h4 className="text-xl font-bold text-slate-900">
                  What does the company learn?
                </h4>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  This customer may need an affordable smartphone with a reliable
                  battery, smooth everyday performance, a decent camera and
                  enough storage. The company now has a clearer idea of who the
                  customer is and what product features might matter.
                </p>
                <div className="mt-5 rounded-xl border border-blue-100 bg-white p-4">
                  <p className="text-sm font-bold text-blue-700">
                    Segmentation turns a large market into understandable
                    customer opportunities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TARGETING */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="Step 02"
          title="Targeting – Choose Which Customers to Serve"
          description="After identifying different segments, a company evaluates them and chooses the customer group or groups it wants to focus its resources on."
        />

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="mb-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl bg-blue-50 p-5">
              <BarChart3 className="mb-3 text-blue-600" size={25} />
              <h3 className="font-bold">Market Potential</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                How many customers exist, and is demand likely to grow?
              </p>
            </div>
            <div className="rounded-2xl bg-indigo-50 p-5">
              <CircleDollarSign className="mb-3 text-indigo-600" size={25} />
              <h3 className="font-bold">Profitability</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Can the segment generate enough revenue and profit?
              </p>
            </div>
            <div className="rounded-2xl bg-sky-50 p-5">
              <ShieldCheck className="mb-3 text-sky-600" size={25} />
              <h3 className="font-bold">Business Capability</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Can the company actually deliver what these customers need?
              </p>
            </div>
          </div>

          <h3 className="mb-5 text-xl font-bold">
            A smartphone company evaluates its potential segments
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px] border-collapse text-left text-sm">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="rounded-tl-xl p-4">Customer Segment</th>
                  <th className="p-4">Opportunity</th>
                  <th className="p-4">Challenge</th>
                  <th className="rounded-tr-xl p-4">Decision</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Budget students", "Large price-sensitive demand", "Strong competition, lower margins", "Potential target"],
                  ["Premium professionals", "Higher selling price", "Strong brands, costly expectations", "Avoid initially"],
                  ["Mobile gamers", "Clear performance requirements", "Higher product development cost", "Consider later"],
                  ["Camera-focused users", "Differentiation opportunity", "Camera quality requires investment", "Research further"],
                ].map((row, i) => (
                  <tr
                    key={row[0]}
                    className={i % 2 === 0 ? "bg-blue-50/50" : "bg-white"}
                  >
                    {row.map((cell, j) => (
                      <td
                        key={j}
                        className="border-b border-slate-100 p-4 text-slate-700"
                      >
                        {j === 0 ? (
                          <span className="font-bold text-slate-900">{cell}</span>
                        ) : (
                          cell
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-xs leading-5 text-slate-500">
            Illustrative business evaluation, not actual market research or
            financial results. A real decision requires market data, customer
            research and cost analysis.
          </p>
        </div>

        {/* Targeting strategies */}
        <div className="mt-12">
          <h3 className="mb-3 text-2xl font-bold">
            Four targeting strategies
          </h3>
          <p className="mb-7 max-w-3xl text-slate-600">
            Businesses can choose to serve the entire market, multiple segments
            or a narrow specialized group. The right approach depends on
            resources, competition and business objectives.
          </p>

          <div className="grid gap-5 sm:grid-cols-2">
            <InfoCard icon={Layers} title="Undifferentiated Marketing">
              The company treats the broad market as one group and offers one
              main product or marketing strategy.
              <div className="mt-3 rounded-xl bg-blue-50 p-3 text-xs font-bold text-blue-700">
                Example: a basic everyday product designed for broad usage.
              </div>
            </InfoCard>

            <InfoCard icon={Users} title="Differentiated Marketing">
              The company targets several segments with different products or
              marketing strategies.
              <div className="mt-3 rounded-xl bg-indigo-50 p-3 text-xs font-bold text-indigo-700">
                Example: a smartphone range for budget, mid-range and premium
                buyers.
              </div>
            </InfoCard>

            <InfoCard icon={Target} title="Concentrated Marketing">
              The company focuses its resources on one particular segment or a
              narrow market.
              <div className="mt-3 rounded-xl bg-sky-50 p-3 text-xs font-bold text-sky-700">
                Example: a small brand focusing exclusively on gaming phones.
              </div>
            </InfoCard>

            <InfoCard icon={Sparkles} title="Micromarketing">
              Products and marketing are adapted to specific local markets or
              individual customers.
              <div className="mt-3 rounded-xl bg-violet-50 p-3 text-xs font-bold text-violet-700">
                Example: a local retailer promoting different offers to
                neighbourhood customers.
              </div>
            </InfoCard>
          </div>
        </div>

        {/* Practical target choice */}
        <div className="mt-10 rounded-3xl bg-gradient-to-br from-blue-700 to-indigo-900 p-6 text-white sm:p-9">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-widest text-blue-200">
                Business Decision
              </p>
              <h3 className="text-2xl font-bold sm:text-3xl">
                What if you only had ₹20 lakh to launch your smartphone brand?
              </h3>
              <p className="mt-4 leading-7 text-blue-100">
                Trying to compete with every smartphone brand, price category
                and customer at once could quickly exhaust your resources.
              </p>
            </div>
            <div className="space-y-3">
              <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
                <p className="font-bold">Instead, choose a focused segment.</p>
                <p className="mt-1 text-sm leading-6 text-blue-100">
                  For example, budget-conscious students and first-time smartphone
                  buyers who need reliable everyday performance.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
                <p className="font-bold">Build for their needs.</p>
                <p className="mt-1 text-sm leading-6 text-blue-100">
                  Prioritize battery, essential performance, durability and
                  affordability rather than expensive features that the target
                  customer may not value.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
                <p className="font-bold">Focus your spending.</p>
                <p className="mt-1 text-sm leading-6 text-blue-100">
                  Spend on channels and offers that reach the selected customer
                  group instead of advertising to everyone.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
<AdSlot />
      {/* POSITIONING */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <SectionHeading
            eyebrow="Step 03"
            title="Positioning – Give Customers a Reason to Choose You"
            description="Positioning is the process of creating a distinct and desirable perception of a product or brand in the minds of target customers compared with competing alternatives."
          />

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-3xl border border-blue-100 bg-white p-6 shadow-sm sm:p-8">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-white">
                <Eye size={28} />
              </div>
              <h3 className="text-xl font-bold">
                Positioning happens in the customer's mind
              </h3>
              <p className="mt-4 leading-7 text-slate-600">
                You can manufacture a product, set a price and run advertisements.
                But positioning is about what customers ultimately believe and
                remember about your product.
              </p>
              <div className="mt-6 space-y-3">
                {[
                  "Is it affordable?",
                  "Is it premium?",
                  "Is it reliable?",
                  "Is it easy to use?",
                  "Is it designed for people like me?",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl bg-blue-50 p-3 text-sm font-bold text-slate-700"
                  >
                    <CheckCircle2 className="shrink-0 text-blue-600" size={18} />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-blue-100 bg-white p-6 shadow-sm sm:p-8">
              <h3 className="mb-5 text-xl font-bold">
                Illustrative positioning map
              </h3>
              <p className="mb-5 text-sm leading-6 text-slate-600">
                Imagine customers comparing smartphone brands based on price and
                perceived feature richness. The diagram below is conceptual—not
                a measured survey of brands.
              </p>

              <div className="relative mx-auto aspect-square max-w-sm rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-blue-50 p-6">
                <div className="absolute left-1/2 top-5 -translate-x-1/2 text-xs font-bold text-slate-500">
                  Higher Perceived Features
                </div>
                <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-xs font-bold text-slate-500">
                  Lower Perceived Features
                </div>
                <div className="absolute left-4 top-1/2 -translate-y-1/2 -rotate-90 whitespace-nowrap text-xs font-bold text-slate-500">
                  Lower Price
                </div>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 rotate-90 whitespace-nowrap text-xs font-bold text-slate-500">
                  Higher Price
                </div>

                <div className="absolute inset-[17%]">
                  <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-slate-300" />
                  <div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-slate-300" />

                  <div className="absolute left-[10%] top-[14%] rounded-xl border border-blue-200 bg-blue-100 px-3 py-2 text-xs font-bold text-blue-800 shadow-sm">
                    Value
                  </div>
                  <div className="absolute right-[7%] top-[9%] rounded-xl border border-violet-200 bg-violet-100 px-3 py-2 text-xs font-bold text-violet-800 shadow-sm">
                    Premium
                  </div>
                  <div className="absolute left-[8%] bottom-[10%] rounded-xl border border-sky-200 bg-sky-100 px-3 py-2 text-xs font-bold text-sky-800 shadow-sm">
                    Basic
                  </div>
                  <div className="absolute right-[5%] bottom-[12%] rounded-xl border border-indigo-200 bg-indigo-100 px-3 py-2 text-xs font-bold text-indigo-800 shadow-sm">
                    Feature-rich
                  </div>
                </div>
              </div>
              <p className="mt-4 text-xs text-slate-500">
                A positioning map helps marketers visualize how their intended
                positioning differs from alternatives.
              </p>
            </div>
          </div>

          {/* Positioning example */}
          <div className="mt-12 overflow-hidden rounded-3xl border border-blue-100 bg-white shadow-sm">
            <div className="grid lg:grid-cols-2">
              <div className="p-6 sm:p-9">
                <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
                  Example Positioning Statement
                </p>
                <h3 className="mt-3 text-2xl font-bold">
                  A smartphone built for students who need dependable performance
                </h3>
                <div className="mt-6 rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-sky-50 p-5">
                  <p className="text-sm leading-7 text-slate-700">
                    For college students and first-time smartphone buyers who need
                    a dependable daily device without spending too much, our
                    smartphone offers essential performance, reliable battery life
                    and practical features at an accessible price.
                  </p>
                </div>
                <p className="mt-4 text-sm leading-6 text-slate-600">
                  This statement tells the company who it serves, what customer
                  need it addresses and what value it wants customers to
                  associate with the product.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-600 to-indigo-800 p-6 text-white sm:p-9">
                <h3 className="mb-6 text-xl font-bold">
                  Positioning must influence actual decisions
                </h3>
                <div className="space-y-4">
                  {[
                    { icon: Smartphone, title: "Product", text: "Practical specifications, dependable battery and essential features" },
                    { icon: CircleDollarSign, title: "Price", text: "Accessible price and clear value for money" },
                    { icon: Store, title: "Distribution", text: "Channels where students can easily find and purchase it" },
                    { icon: Megaphone, title: "Promotion", text: "Communication around everyday usefulness and affordability" },
                  ].map(({ icon: Icon, title, text }) => (
                    <div
                      key={title}
                      className="flex gap-4 rounded-xl border border-white/10 bg-white/10 p-4"
                    >
                      <Icon className="mt-0.5 shrink-0 text-blue-200" size={22} />
                      <div>
                        <p className="font-bold">{title}</p>
                        <p className="mt-1 text-sm leading-6 text-blue-100">{text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REAL WORLD BRAND EXAMPLES */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="Market Reality"
          title="How positioning is visible in real brands"
          description="Brands compete not only through product specifications but also through price, customer experience, reputation, distribution, design and the meaning customers attach to them."
        />

        <div className="grid gap-5 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
              <Smartphone size={23} />
            </div>
            <h3 className="text-lg font-bold">Apple</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Apple emphasizes a premium ecosystem, design, user experience,
              brand identity and integration across devices. Its positioning
              is supported by its products, services, retail experience and
              communication—not only advertising.
            </p>
            <div className="mt-4 rounded-xl bg-slate-50 p-3 text-xs font-bold text-slate-700">
              Illustrative perception: premium integrated experience
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
              <CircleDollarSign size={23} />
            </div>
            <h3 className="text-lg font-bold">Xiaomi / Redmi</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Redmi has historically built strong awareness around accessible
              pricing and feature-rich smartphones across many product lines.
              Buyers comparing specifications against price may find this value
              proposition appealing.
            </p>
            <div className="mt-4 rounded-xl bg-blue-50 p-3 text-xs font-bold text-blue-700">
              Illustrative perception: specification and value focus
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-violet-50 text-violet-700">
              <Sparkles size={23} />
            </div>
            <h3 className="text-lg font-bold">Nothing</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Nothing has built a distinctive brand identity around recognizable
              design, a different visual language and a technology-focused
              identity, helping its products stand apart in a crowded category.
            </p>
            <div className="mt-4 rounded-xl bg-violet-50 p-3 text-xs font-bold text-violet-700">
              Illustrative perception: distinctive design identity
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-blue-100 bg-blue-50 p-5">
          <p className="text-sm leading-6 text-blue-900">
            <span className="font-bold">Important:</span> These are simplified
            examples of brand associations, not complete descriptions of each
            company's strategy. Real brands serve multiple customer segments,
            and positioning can vary by model, market and campaign.
          </p>
        </div>
      </section>

      {/* FULL STP PROCESS */}
      <section id="stp-process" className="bg-slate-950 py-16 text-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <SectionHeading
            eyebrow="The Complete Framework"
            title="How a business applies STP from beginning to end"
            description="STP is not three independent definitions. Each stage uses the decisions made in the previous stage to create a focused marketing strategy."
            dark
          />

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-blue-400/20 bg-blue-500/10 p-5">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500 text-white">
                <Users size={24} />
              </div>
              <p className="text-sm font-bold text-blue-300">SEGMENT</p>
              <h3 className="mt-2 text-xl font-bold">Identify customer groups</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Research customers and divide the market into groups with
                meaningful differences in needs, preferences or behaviour.
              </p>
            </div>

            <div className="rounded-2xl border border-indigo-400/20 bg-indigo-500/10 p-5">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500 text-white">
                <Crosshair size={24} />
              </div>
              <p className="text-sm font-bold text-indigo-300">TARGET</p>
              <h3 className="mt-2 text-xl font-bold">Select the right groups</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Compare market attractiveness, competitive conditions and your
                ability to serve each segment. Select the best opportunity.
              </p>
            </div>

            <div className="rounded-2xl border border-sky-400/20 bg-sky-500/10 p-5">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-sky-500 text-white">
                <Eye size={24} />
              </div>
              <p className="text-sm font-bold text-sky-300">POSITION</p>
              <h3 className="mt-2 text-xl font-bold">Differentiate your offer</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Create a value proposition and brand perception that matters to
                your target customer and is credible against competitors.
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900 p-6 sm:p-8">
            <h3 className="mb-6 text-xl font-bold">
              What comes after STP?
            </h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                ["Product", "Develop the product to satisfy target needs"],
                ["Price", "Set a price appropriate for the chosen customers"],
                ["Place", "Make the product available through suitable channels"],
                ["Promotion", "Communicate the positioning and value proposition"],
              ].map(([title, text]) => (
                <div
                  key={title}
                  className="rounded-xl border border-slate-800 bg-slate-950 p-4"
                >
                  <p className="font-bold text-blue-300">{title}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{text}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-col items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 p-4 text-center sm:flex-row">
              <Target size={22} />
              <p className="font-bold">
                STP informs the marketing mix (4Ps) to create a consistent strategy.
              </p>
            </div>
          </div>
        </div>
      </section>
<AdSlot />
  {/* BUSINESS CASE */}
  <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12">
    <SectionHeading
      eyebrow="Applied Case Study"
      title="Let's build a marketing strategy for a small café"
      description="A practical STP example showing how a business owner can use the framework before spending money on products, rent, branding and advertising."
    />

    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-6 text-white sm:p-8">
        <div className="flex items-center gap-3">
          <Coffee className="h-7 w-7" />
          <span className="text-sm font-bold uppercase tracking-widest text-blue-100">
            Business Scenario
          </span>
        </div>
        <h3 className="mt-3 text-2xl font-bold sm:text-3xl">
          You have ₹8 lakh and want to open a café
        </h3>
        <p className="mt-3 max-w-2xl text-blue-100">
          The neighbourhood has students, office employees, families and
          premium coffee enthusiasts. You need to choose your customers before
          building your café.
        </p>
      </div>

      <div className="p-6 sm:p-8">
        <div className="grid gap-5 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 p-5">
            <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
              Segmentation
            </p>
            <h4 className="mt-2 font-bold text-slate-900">
              Understand local customers
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li>Students seeking affordable snacks and drinks</li>
              <li>Office employees wanting quick breaks</li>
              <li>Families seeking a comfortable place to sit</li>
              <li>Coffee enthusiasts seeking quality coffee</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 p-5">
            <p className="text-xs font-bold uppercase tracking-wider text-indigo-600">
              Targeting
            </p>
            <h4 className="mt-2 font-bold text-slate-900">
              Choose a customer group
            </h4>
            <p className="mt-4 text-sm leading-6 text-slate-600">
              Suppose your location is near a college and you have limited
              capital. You choose students and young professionals as your
              primary customers after assessing footfall, rent, competition
              and expected spending.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 p-5">
            <p className="text-xs font-bold uppercase tracking-wider text-sky-600">
              Positioning
            </p>
            <h4 className="mt-2 font-bold text-slate-900">
              Decide why they will choose you
            </h4>
            <p className="mt-4 text-sm leading-6 text-slate-600">
              Position the café as a comfortable, student-friendly place for
              affordable drinks, quick snacks, reliable Wi-Fi and a welcoming
              atmosphere.
            </p>
          </div>
        </div>

        <div className="mt-7 rounded-2xl bg-gradient-to-br from-blue-50 to-sky-50 p-5 sm:p-7">
          <h4 className="font-bold text-slate-900">
            How this changes your actual business
          </h4>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {[
              ["Menu", "Affordable coffee, tea, snacks, combo meals and quick items"],
              ["Pricing", "Student-friendly prices with carefully calculated margins"],
              ["Interior", "Comfortable seating, charging points and practical study space"],
              ["Marketing", "College-area promotions, local social media and referral offers"],
            ].map(([title, text]) => (
              <div key={title} className="flex gap-3 rounded-xl bg-white p-4">
                <CheckCircle2 className="mt-0.5 shrink-0 text-blue-600" size={20} />
                <div>
                  <p className="font-bold text-slate-900">{title}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* COMMON MISTAKES */}
  <section className="bg-slate-50 py-16">
    <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
      <SectionHeading
        eyebrow="Marketing Reality"
        title="Common STP mistakes that waste money"
        description="A framework is only useful when the decisions are grounded in customer and market realities."
      />

      <div className="grid gap-5 md:grid-cols-2">
        {[
          {
            title: "Targeting everyone",
            text: "Trying to appeal to every customer makes the product, pricing and advertising unclear.",
            fix: "Choose priority segments and make trade-offs.",
          },
          {
            title: "Choosing a segment only because it is large",
            text: "A large segment may also be highly competitive, expensive to reach or unprofitable.",
            fix: "Assess demand, costs, competitors and your capabilities.",
          },
          {
            title: "Positioning without proof",
            text: "Calling a product the best, fastest or cheapest does not make customers believe it.",
            fix: "Support your promise with measurable product value and customer experience.",
          },
          {
            title: "Ignoring customer feedback",
            text: "The business may assume it understands customers while real buying behaviour says otherwise.",
            fix: "Use surveys, interviews, sales data, reviews and testing.",
          },
          {
            title: "Selecting a segment that the business cannot serve",
            text: "The target may demand expensive service, distribution or product features beyond your resources.",
            fix: "Match target needs with operational and financial capabilities.",
          },
          {
            title: "Changing positioning without consistency",
            text: "Frequent changes in messages and brand identity can confuse customers.",
            fix: "Keep product, price, communication and customer experience aligned.",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6"
          >
            <div className="flex gap-3">
              <XCircle className="mt-0.5 shrink-0 text-red-500" size={21} />
              <div>
                <h3 className="font-bold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.text}</p>
                <div className="mt-4 rounded-xl bg-blue-50 p-3">
                  <p className="text-xs font-bold uppercase text-blue-700">Better approach</p>
                  <p className="mt-1 text-sm leading-6 text-blue-900">{item.fix}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>

  {/* KEY DIFFERENCES */}
  <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12">
    <SectionHeading
      eyebrow="Quick Understanding"
      title="Segmentation vs Targeting vs Positioning"
      description="All three are connected, but each answers a different marketing question."
    />

    <div className="overflow-x-auto rounded-2xl border border-slate-200">
      <table className="w-full min-w-[640px] border-collapse text-left text-sm">
        <thead>
          <tr className="bg-slate-900 text-white">
            <th className="p-4">Concept</th>
            <th className="p-4">Main Question</th>
            <th className="p-4">Purpose</th>
            <th className="p-4">Café Example</th>
          </tr>
        </thead>
        <tbody>
          {[
            ["Segmentation", "Who are the different customers?", "Identify groups with different needs", "Students, families, office workers, coffee lovers"],
            ["Targeting", "Which customers will we serve?", "Choose the most suitable segment(s)", "Focus on students and young professionals"],
            ["Positioning", "Why should they choose us?", "Create a distinct customer perception", "Affordable, comfortable study-friendly café"],
          ].map((row, i) => (
            <tr key={row[0]} className={i % 2 === 0 ? "bg-blue-50/60" : "bg-white"}>
              {row.map((cell, j) => (
                <td key={j} className="border-b border-slate-100 p-4 text-slate-700">
                  {j === 0 ? <span className="font-bold text-slate-900">{cell}</span> : cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </section>
<AdSlot />
  {/* FAQ */}
  <section className="bg-gradient-to-b from-blue-50 to-white py-16">
    <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
      <SectionHeading
        eyebrow="Frequently Asked Questions"
        title="STP Marketing Questions"
        description="Quick answers to common questions about segmentation, targeting and positioning."
      />

      <div className="space-y-4">
        {[
          {
            q: "What does STP stand for in marketing?",
            a: "STP stands for Segmentation, Targeting and Positioning. It is a framework businesses use to understand different customer groups, select the groups they want to serve and establish a distinct value proposition in customers' minds.",
          },
          {
            q: "Why is segmentation done before targeting?",
            a: "Segmentation identifies different customer groups. Targeting evaluates those groups and helps a business select the ones that match its objectives, resources and capabilities.",
          },
          {
            q: "Can a business target more than one segment?",
            a: "Yes. A business can target multiple segments with differentiated products, pricing, promotions or distribution. It must have sufficient resources and a strategy that can serve those groups effectively.",
          },
          {
            q: "What is the difference between targeting and positioning?",
            a: "Targeting determines which customers the business wants to serve. Positioning determines how the business wants its product or brand to be perceived by those customers compared with competitors.",
          },
          {
            q: "Is positioning the same as branding?",
            a: "They are related but not identical. Positioning defines the intended place a brand occupies in the market and in customer perception. Branding uses identity, design, communication, experience and other elements to build and express that perception.",
          },
          {
            q: "What is a positioning statement?",
            a: "A positioning statement is an internal strategic statement that identifies the target customer, their need, the product's value and its difference from alternatives. It guides marketing and business decisions.",
          },
          {
            q: "Does STP apply to small businesses?",
            a: "Absolutely. A small shop, café, freelancer or local service provider can use STP to identify the most suitable customers, avoid trying to serve everyone and communicate a clear reason to buy.",
          },
          {
            q: "What happens after the STP process?",
            a: "The business translates its strategy into the marketing mix—product, price, place and promotion—and then measures results, learns from customers and refines its decisions.",
          },
        ].map((item) => (
          <details
            key={item.q}
            className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-slate-900 [&::-webkit-details-marker]:hidden">
              {item.q}
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600 transition group-open:rotate-45">
                <ArrowRight size={17} />
              </span>
            </summary>
            <p className="mt-4 border-t border-slate-100 pt-4 text-sm leading-7 text-slate-600">
              {item.a}
            </p>
          </details>
        ))}
      </div>
    </div>
  </section>



  {/* FINAL TAKEAWAY */}
  <section className="px-5 pb-16 sm:px-8 lg:px-12">
    <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-900 p-7 text-white sm:p-12">
      <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
        <div>
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
            <Target size={25} />
          </div>
          <h2 className="text-2xl font-bold sm:text-3xl">
            Successful marketing starts with a choice
          </h2>
          <p className="mt-4 leading-7 text-blue-100">
            A business does not need to be the best option for everybody. It
            needs to understand the market, select the right customers, and
            deliver a value proposition those customers genuinely care about.
          </p>
        </div>

        <div className="space-y-3">
          {[
            ["Segment", "Understand who is in the market"],
            ["Target", "Choose who you will serve"],
            ["Position", "Give them a compelling reason to choose you"],
          ].map(([title, text]) => (
            <div
              key={title}
              className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/10 p-4"
            >
              <CheckCircle2 className="shrink-0 text-blue-200" size={22} />
              <div>
                <p className="font-bold">{title}</p>
                <p className="text-sm text-blue-100">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
</main>
  );
}
