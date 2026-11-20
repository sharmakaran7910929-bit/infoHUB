
import Link from "next/link";
import {
  ArrowRight,
  Package,
  Wallet,
  MapPin,
  Megaphone,
  Target,
  Users,
  ShoppingBag,
  Lightbulb,
  CheckCircle2,
  TrendingUp,
  Store,
  Search,
  Smartphone,
  Coffee,
  Truck,
  Tag,
  BarChart3,
  Sparkles,
  Boxes,
  CircleDollarSign,
  Eye,
  ClipboardList,
  Globe,
  ShieldCheck,
  MessageCircle,
  Star,
  Layers3,
} from "lucide-react";
import AdSlot from "../../../components/AdSlot";

export const metadata = {
  title: "Marketing Mix (4Ps) | Product, Price, Place & Promotion Explained | PriceTag HUB",
  description:
    "Learn the marketing mix and 4Ps—Product, Price, Place and Promotion—with clear explanations, relatable business examples, diagrams and practical strategies.",
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

const mixItems = [
  {
    number: "01",
    name: "Product",
    question: "What are we offering?",
    icon: Package,
    color: "bg-blue-100 text-blue-700",
    border: "border-blue-200",
    gradient: "from-blue-500 to-blue-700",
    description:
      "The product or service a business provides to solve a customer's problem, fulfil a need or deliver value.",
    examples: [
      "Features and quality",
      "Design and packaging",
      "Variety and sizes",
      "Benefits and customer experience",
    ],
  },
  {
    number: "02",
    name: "Price",
    question: "What will customers pay?",
    icon: Wallet,
    color: "bg-indigo-100 text-indigo-700",
    border: "border-indigo-200",
    gradient: "from-indigo-500 to-indigo-700",
    description:
      "The amount customers pay to obtain the offering and the pricing approach used to communicate and capture its value.",
    examples: [
      "Selling price",
      "Discounts and offers",
      "Payment options",
      "Value and profit margin",
    ],
  },
  {
    number: "03",
    name: "Place",
    question: "Where can customers get it?",
    icon: MapPin,
    color: "bg-sky-100 text-sky-700",
    border: "border-sky-200",
    gradient: "from-sky-500 to-cyan-700",
    description:
      "The channels, locations and distribution methods that make products or services accessible to customers.",
    examples: [
      "Physical stores",
      "Websites and apps",
      "Delivery and logistics",
      "Retailers and distributors",
    ],
  },
  {
    number: "04",
    name: "Promotion",
    question: "How will customers know?",
    icon: Megaphone,
    color: "bg-violet-100 text-violet-700",
    border: "border-violet-200",
    gradient: "from-violet-500 to-purple-700",
    description:
      "The communication activities used to inform, persuade and remind customers about a product, service or brand.",
    examples: [
      "Advertising",
      "Sales promotions",
      "Social media and content",
      "Public relations and referrals",
    ],
  },
];

const bakeryExample = [
  {
    letter: "P",
    title: "Product",
    icon: Package,
    color: "bg-blue-100 text-blue-700",
    decision: "Offer fresh cakes, pastries and customized birthday cakes.",
    customer: "Customers can choose flavours, sizes and designs.",
  },
  {
    letter: "P",
    title: "Price",
    icon: Wallet,
    color: "bg-indigo-100 text-indigo-700",
    decision: "Offer small affordable cakes, standard cakes and premium custom cakes.",
    customer: "Different budgets have suitable options.",
  },
  {
    letter: "P",
    title: "Place",
    icon: MapPin,
    color: "bg-sky-100 text-sky-700",
    decision: "Sell in-store, accept WhatsApp orders and provide local delivery.",
    customer: "Customers can purchase in the way that is convenient.",
  },
  {
    letter: "P",
    title: "Promotion",
    icon: Megaphone,
    color: "bg-violet-100 text-violet-700",
    decision: "Post cake photos, promote birthday offers and encourage referrals.",
    customer: "More people discover the bakery and its offerings.",
  },
];

const faqs = [
  {
    question: "What is the marketing mix in simple words?",
    answer:
      "The marketing mix is a combination of decisions a business makes about its product, price, place and promotion to meet customer needs and achieve its marketing goals.",
  },
  {
    question: "What are the 4Ps of the marketing mix?",
    answer:
      "The 4Ps are Product, Price, Place and Promotion. They represent what a business offers, what customers pay, where they can obtain it and how the business communicates it.",
  },
  {
    question: "Why is the marketing mix important?",
    answer:
      "It helps businesses coordinate important marketing decisions. Instead of managing products, prices, distribution and promotion independently, businesses can align them to the same target customers and market positioning.",
  },
  {
    question: "Can you give an example of the marketing mix?",
    answer:
      "A bakery may sell fresh customized cakes (Product), offer several price ranges (Price), accept store and online orders with delivery (Place), and promote its cakes on social media and through referrals (Promotion).",
  },
  {
    question: "Are the 4Ps only for large companies?",
    answer:
      "No. Small businesses, freelancers, local stores, online sellers, startups and large companies can all use the marketing mix. The decisions simply differ in scale and complexity.",
  },
  {
    question: "What is the 7Ps marketing mix?",
    answer:
      "The 7Ps extend the original 4Ps by adding People, Process and Physical Evidence. These additions are particularly useful for service businesses where customer experience, service delivery and trust are important.",
  },
  {
    question: "Is the marketing mix the same as marketing strategy?",
    answer:
      "No. Marketing strategy establishes the broader direction—such as target customers, positioning and competitive advantage. The marketing mix translates that direction into practical decisions about product, price, place and promotion.",
  },
  {
    question: "Can the marketing mix change over time?",
    answer:
      "Yes. Businesses may adjust their product, price, distribution or promotion as customer preferences, competitors, technology, costs and market conditions change.",
  },
];

export default function MarketingMixPage() {
  return (
    <main className="overflow-hidden">
      {/* HERO */}
      <section className="relative bg-gradient-to-br from-white via-blue-50 to-indigo-100 px-4 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-bold text-blue-700 shadow-sm">
                <Target size={16} />
                Marketing Strategy Framework
              </div>

              <h1 className="text-4xl font-bold leading-tight tracking-tight text-gray-950 md:text-6xl">
                Marketing Mix
                <span className="mt-1 block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  The 4Ps Explained
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
                How businesses combine Product, Price, Place and Promotion to
                deliver value, attract customers and compete in the market.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="#four-ps"
                  className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-bold text-white transition hover:bg-blue-700"
                >
                  Explore the 4Ps <ArrowRight size={18} />
                </Link>
                <Link
                  href="#real-example"
                  className="inline-flex items-center gap-2 rounded-xl border border-blue-200 bg-white px-5 py-3 font-bold text-gray-700 transition hover:border-blue-400 hover:text-blue-700"
                >
                  Real Business Example
                </Link>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {mixItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.name}
                      className="rounded-2xl border border-white bg-white/80 p-3 text-center shadow-sm"
                    >
                      <div
                        className={`mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-xl ${item.color}`}
                      >
                        <Icon size={21} />
                      </div>
                      <p className="text-xs font-bold text-gray-800">
                        {item.name}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Hero 4Ps diagram */}
            <div className="relative">
              <div className="rounded-3xl border border-blue-100 bg-white p-5 shadow-xl shadow-blue-900/5 md:p-7">
                <div className="mb-5">
                  <p className="text-sm font-bold text-gray-500">
                    Business Marketing Decisions
                  </p>
                  <h2 className="mt-1 text-xl font-bold text-gray-900">
                    Four elements. One strategy.
                  </h2>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {mixItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={item.name}
                        className={`rounded-2xl border ${item.border} bg-gradient-to-br from-white to-gray-50 p-4`}
                      >
                        <div
                          className={`mb-3 inline-flex rounded-xl p-3 ${item.color}`}
                        >
                          <Icon size={24} />
                        </div>
                        <h3 className="font-bold text-gray-900">{item.name}</h3>
                        <p className="mt-1 text-xs leading-5 text-gray-500">
                          {item.question}
                        </p>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-4 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 p-4 text-center text-white">
                  <div className="flex items-center justify-center gap-2">
                    <Target size={21} />
                    <p className="font-bold">Target Customer & Market</p>
                  </div>
                  <p className="mt-1 text-sm text-blue-100">
                    Coordinated decisions create customer value
                  </p>
                </div>
              </div>
              <div className="absolute -bottom-5 -right-4 -z-10 h-32 w-32 rounded-full bg-indigo-300/30 blur-2xl" />
              <div className="absolute -left-4 -top-5 -z-10 h-32 w-32 rounded-full bg-blue-300/30 blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="px-4 py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Understanding the Framework"
            title="What Is the Marketing Mix?"
            description="The marketing mix is a framework businesses use to organize and coordinate the key elements of their marketing strategy."
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
                  Imagine a business launches a product. Even if the product is
                  excellent, customers may not buy it if the price is too high,
                  the product is difficult to find or nobody knows that it exists.
                </p>
                <p className="mt-4 text-base leading-8 text-gray-700">
                  The marketing mix helps the business solve these connected
                  problems. It makes the business think beyond the product itself
                  and consider the complete offer and customer experience.
                </p>
              </div>
            </div>

            <div className="space-y-4 lg:col-span-2">
              {[
                {
                  icon: Package,
                  title: "Create the Offer",
                  text: "Provide something customers genuinely need or value.",
                  color: "text-blue-600 bg-blue-50",
                },
                {
                  icon: CircleDollarSign,
                  title: "Capture Value",
                  text: "Set a price customers can accept and the business can sustain.",
                  color: "text-indigo-600 bg-indigo-50",
                },
                {
                  icon: Store,
                  title: "Make It Accessible",
                  text: "Ensure customers can conveniently find and purchase it.",
                  color: "text-sky-600 bg-sky-50",
                },
                {
                  icon: MessageCircle,
                  title: "Communicate the Value",
                  text: "Help the right customers discover and understand the offer.",
                  color: "text-violet-600 bg-violet-50",
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
      {/* WHY IT MATTERS */}
      <section className="bg-gray-50 px-4 py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Purpose"
            title="Why Does the Marketing Mix Matter?"
            description="The 4Ps help businesses turn broad marketing goals into practical decisions that influence customer choice and business performance."
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Target,
                title: "Focus on Target Customers",
                text: "Build an offering around a specific group of customers instead of trying to appeal to everyone.",
              },
              {
                icon: Layers3,
                title: "Coordinate Business Decisions",
                text: "Make product, price, distribution and promotion decisions support each other.",
              },
              {
                icon: TrendingUp,
                title: "Improve Market Competitiveness",
                text: "Create a compelling offer that customers can understand and choose over alternatives.",
              },
              {
                icon: Wallet,
                title: "Use Resources Wisely",
                text: "Align marketing budgets, pricing, distribution and promotional efforts with business goals.",
              },
              {
                icon: Users,
                title: "Deliver Customer Value",
                text: "Consider what customers actually receive and experience—not just what the business wants to sell.",
              },
              {
                icon: BarChart3,
                title: "Improve Results",
                text: "Evaluate performance and refine the marketing mix based on customer and market response.",
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

      {/* THE FOUR PS */}
      <section id="four-ps" className="px-4 py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="The Core Framework"
            title="The 4Ps of the Marketing Mix"
            description="Each P represents a different decision area. Together, they determine what a business offers, how it charges, how customers access it and how it communicates."
          />

          <div className="space-y-7">
            {/* PRODUCT */}
            <div className="overflow-hidden rounded-3xl border border-blue-200 bg-white shadow-sm">
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-6 text-white md:p-8">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="rounded-2xl bg-white/15 p-4">
                      <Package size={29} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-blue-200">P — 01</p>
                      <h3 className="text-2xl font-bold text-white">Product</h3>
                    </div>
                  </div>
                  <p className="rounded-full bg-white/15 px-4 py-2 text-sm font-bold text-white">
                    What are we offering?
                  </p>
                </div>
              </div>

              <div className="grid gap-7 p-6 md:p-8 lg:grid-cols-2">
                <div>
                  <h4 className="text-lg font-bold text-gray-900">
                    What does Product mean?
                  </h4>
                  <p className="mt-3 leading-7 text-gray-600">
                    Product refers to the goods, services or experiences a business
                    provides to satisfy customer needs. It is not limited to the
                    physical item. It includes the features, quality, design,
                    packaging, brand, support and overall benefits customers
                    receive.
                  </p>

                  <div className="mt-5 rounded-2xl bg-blue-50 p-5">
                    <p className="font-bold text-blue-900">Key decisions</p>
                    <ul className="mt-3 space-y-2 text-sm leading-6 text-gray-700">
                      {[
                        "Features, quality and functionality",
                        "Design, appearance and packaging",
                        "Product range, size and variety",
                        "Brand name and customer experience",
                        "Warranty, support and service",
                      ].map((item) => (
                        <li key={item} className="flex gap-2">
                          <CheckCircle2
                            size={17}
                            className="mt-0.5 shrink-0 text-blue-600"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <Smartphone className="text-blue-600" size={25} />
                    <h4 className="font-bold text-gray-900">Example | Smartphone</h4>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      ["Battery", "Long-lasting battery"],
                      ["Camera", "Quality photos"],
                      ["Design", "Comfortable & modern"],
                      ["Support", "Warranty & service"],
                    ].map(([label, text]) => (
                      <div
                        key={label}
                        className="rounded-xl border border-blue-100 bg-white p-4"
                      >
                        <p className="text-xs font-bold text-blue-600">{label}</p>
                        <p className="mt-1 text-sm font-bold text-gray-800">{text}</p>
                      </div>
                    ))}
                  </div>
                  <p className="mt-4 text-sm leading-6 text-gray-600">
                    The business must decide what combination of features and
                    benefits makes its phone useful and desirable to its intended
                    customers.
                  </p>
                </div>
              </div>
            </div>

            {/* PRICE */}
            <div className="overflow-hidden rounded-3xl border border-indigo-200 bg-white shadow-sm">
              <div className="bg-gradient-to-r from-indigo-600 to-indigo-800 p-6 text-white md:p-8">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="rounded-2xl bg-white/15 p-4">
                      <Wallet size={29} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-indigo-200">P — 02</p>
                      <h3 className="text-2xl font-bold text-white">Price</h3>
                    </div>
                  </div>
                  <p className="rounded-full bg-white/15 px-4 py-2 text-sm font-bold text-white">
                    What will customers pay?
                  </p>
                </div>
              </div>

              <div className="grid gap-7 p-6 md:p-8 lg:grid-cols-2">
                <div>
                  <h4 className="text-lg font-bold text-gray-900">
                    What does Price mean?
                  </h4>
                  <p className="mt-3 leading-7 text-gray-600">
                    Price is the amount a customer pays to purchase a product or
                    service. It influences affordability, customer expectations,
                    perceived quality, demand and the revenue a business earns.
                  </p>

                  <div className="mt-5 rounded-2xl bg-indigo-50 p-5">
                    <p className="font-bold text-indigo-900">Key decisions</p>
                    <ul className="mt-3 space-y-2 text-sm leading-6 text-gray-700">
                      {[
                        "Selling price and pricing structure",
                        "Discounts and special offers",
                        "Installments and payment methods",
                        "Competitive pricing",
                        "Profit margin and cost recovery",
                      ].map((item) => (
                        <li key={item} className="flex gap-2">
                          <CheckCircle2
                            size={17}
                            className="mt-0.5 shrink-0 text-indigo-600"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="rounded-2xl border border-indigo-100 bg-gradient-to-br from-indigo-50 to-white p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <Tag className="text-indigo-600" size={25} />
                    <h4 className="font-bold text-gray-900">Example | Bakery</h4>
                  </div>

                  <div className="space-y-3">
                    {[
                      ["Budget", "₹299", "Simple small cake"],
                      ["Standard", "₹599", "Popular cake with more options"],
                      ["Premium", "₹999+", "Customized design & premium ingredients"],
                    ].map(([level, price, detail]) => (
                      <div
                        key={level}
                        className="flex items-center justify-between gap-3 rounded-xl border border-indigo-100 bg-white p-4"
                      >
                        <div>
                          <p className="text-xs font-bold text-indigo-600">{level}</p>
                          <p className="mt-1 text-sm text-gray-600">{detail}</p>
                        </div>
                        <p className="shrink-0 text-lg font-bold text-gray-900">{price}</p>
                      </div>
                    ))}
                  </div>

                  <p className="mt-4 text-sm leading-6 text-gray-600">
                    Illustrative prices only. Different options serve customers
                    with different budgets and preferences.
                  </p>
                </div>
              </div>
            </div>

            {/* PLACE */}
            <div className="overflow-hidden rounded-3xl border border-sky-200 bg-white shadow-sm">
              <div className="bg-gradient-to-r from-sky-600 to-cyan-800 p-6 text-white md:p-8">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="rounded-2xl bg-white/15 p-4">
                      <MapPin size={29} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-sky-200">P — 03</p>
                      <h3 className="text-2xl font-bold text-white">Place</h3>
                    </div>
                  </div>
                  <p className="rounded-full bg-white/15 px-4 py-2 text-sm font-bold text-white">
                    Where can customers buy it?
                  </p>
                </div>
              </div>

              <div className="grid gap-7 p-6 md:p-8 lg:grid-cols-2">
                <div>
                  <h4 className="text-lg font-bold text-gray-900">
                    What does Place mean?
                  </h4>
                  <p className="mt-3 leading-7 text-gray-600">
                    Place refers to how a product or service is made available
                    to customers. It involves choosing distribution channels,
                    locations, delivery systems and ways customers can access the
                    offering.
                  </p>

                  <div className="mt-5 rounded-2xl bg-sky-50 p-5">
                    <p className="font-bold text-sky-900">Key decisions</p>
                    <ul className="mt-3 space-y-2 text-sm leading-6 text-gray-700">
                      {[
                        "Store location and market coverage",
                        "Online store, website or app",
                        "Retailers and distribution partners",
                        "Inventory and product availability",
                        "Delivery, logistics and convenience",
                      ].map((item) => (
                        <li key={item} className="flex gap-2">
                          <CheckCircle2
                            size={17}
                            className="mt-0.5 shrink-0 text-sky-600"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="rounded-2xl border border-sky-100 bg-gradient-to-br from-sky-50 to-white p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <ShoppingBag className="text-sky-600" size={25} />
                    <h4 className="font-bold text-gray-900">Example | Clothing Brand</h4>
                  </div>

                  <div className="space-y-3">
                    {[
                      {
                        icon: Store,
                        title: "Retail Store",
                        text: "Customers visit and try products physically.",
                      },
                      {
                        icon: Globe,
                        title: "Website",
                        text: "Customers browse and purchase online.",
                      },
                      {
                        icon: Smartphone,
                        title: "Marketplace",
                        text: "Customers shop through third-party platforms.",
                      },
                      {
                        icon: Truck,
                        title: "Delivery",
                        text: "Products are delivered to customers' homes.",
                      },
                    ].map((item) => {
                      const Icon = item.icon;
                      return (
                        <div
                          key={item.title}
                          className="flex items-center gap-3 rounded-xl border border-sky-100 bg-white p-4"
                        >
                          <Icon className="shrink-0 text-sky-600" size={21} />
                          <div>
                            <p className="font-bold text-gray-900">{item.title}</p>
                            <p className="mt-1 text-xs leading-5 text-gray-600">{item.text}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* PROMOTION */}
            <div className="overflow-hidden rounded-3xl border border-violet-200 bg-white shadow-sm">
              <div className="bg-gradient-to-r from-violet-600 to-purple-800 p-6 text-white md:p-8">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="rounded-2xl bg-white/15 p-4">
                      <Megaphone size={29} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-violet-200">P — 04</p>
                      <h3 className="text-2xl font-bold text-white">Promotion</h3>
                    </div>
                  </div>
                  <p className="rounded-full bg-white/15 px-4 py-2 text-sm font-bold text-white">
                    How will customers know?
                  </p>
                </div>
              </div>

              <div className="grid gap-7 p-6 md:p-8 lg:grid-cols-2">
                <div>
                  <h4 className="text-lg font-bold text-gray-900">
                    What does Promotion mean?
                  </h4>
                  <p className="mt-3 leading-7 text-gray-600">
                    Promotion includes communication activities used to inform
                    customers about a product, explain its benefits, influence
                    their purchase decisions and maintain brand awareness.
                  </p>

                  <div className="mt-5 rounded-2xl bg-violet-50 p-5">
                    <p className="font-bold text-violet-900">Key decisions</p>
                    <ul className="mt-3 space-y-2 text-sm leading-6 text-gray-700">
                      {[
                        "Advertising and media selection",
                        "Social media and content marketing",
                        "Sales promotion and discounts",
                        "Public relations and publicity",
                        "Influencer marketing and referrals",
                      ].map((item) => (
                        <li key={item} className="flex gap-2">
                          <CheckCircle2
                            size={17}
                            className="mt-0.5 shrink-0 text-violet-600"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="rounded-2xl border border-violet-100 bg-gradient-to-br from-violet-50 to-white p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <Megaphone className="text-violet-600" size={25} />
                    <h4 className="font-bold text-gray-900">Example | New Restaurant</h4>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    {[
                      ["Social Media", "Post menu & food photos"],
                      ["Opening Offer", "Promotional meal deals"],
                      ["Local Ads", "Reach nearby residents"],
                      ["Customer Reviews", "Encourage feedback & referrals"],
                    ].map(([label, text]) => (
                      <div
                        key={label}
                        className="rounded-xl border border-violet-100 bg-white p-4"
                      >
                        <p className="text-xs font-bold text-violet-600">{label}</p>
                        <p className="mt-1 text-sm font-bold leading-5 text-gray-800">{text}</p>
                      </div>
                    ))}
                  </div>

                  <p className="mt-4 text-sm leading-6 text-gray-600">
                    Promotion helps potential customers discover the restaurant
                    and gives them reasons to consider visiting.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
<AdSlot />
      {/* HOW THE 4PS CONNECT */}
      <section className="bg-gray-950 px-4 py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Integration"
            title="The 4Ps Work Together"
            description="The marketing mix is most effective when all four decisions support the same customer, value proposition and market position."
            dark
          />

          <div className="rounded-3xl border border-white/10 bg-white/5 p-5 md:p-8">
            {/* Responsive 4Ps flow */}
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {mixItems.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.name}
                    className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center"
                  >
                    <div
                      className={`mx-auto mb-3 inline-flex rounded-xl p-3 ${item.color}`}
                    >
                      <Icon size={24} />
                    </div>
                    <h3 className="font-bold text-white">{item.name}</h3>
                    <p className="mt-2 text-sm leading-6 text-gray-400">
                      {item.question}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="my-6 flex justify-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-blue-400/30 bg-blue-500/10 text-blue-300">
                <Layers3 size={22} />
              </div>
            </div>

            <div className="rounded-2xl border border-blue-400/20 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 p-6 text-center">
              <Target className="mx-auto text-blue-300" size={28} />
              <h3 className="mt-3 text-xl font-bold text-white">
                One Target Market & Value Proposition
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-300">
                Every decision should align with the customer the business wants
                to serve and the value it promises to deliver.
              </p>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {[
                ["Customer Value", "Useful product + suitable price"],
                ["Customer Convenience", "Accessible place + easy purchase"],
                ["Business Outcomes", "Consistent positioning + measurable results"],
              ].map(([title, text]) => (
                <div
                  key={title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4"
                >
                  <p className="font-bold text-blue-300">{title}</p>
                  <p className="mt-2 text-sm leading-6 text-gray-400">{text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-blue-400/20 bg-blue-500/10 p-5">
            <p className="text-sm leading-7 text-blue-100">
              <span className="font-bold text-white">Example:</span> A premium
              bakery should offer quality and customization, use pricing that
              reflects its value, be available through convenient channels and
              promote its craftsmanship. A budget bakery targeting daily buyers
              may use a different combination of the 4Ps.
            </p>
          </div>
        </div>
      </section>

      {/* REAL-LIFE EXAMPLE */}
      <section id="real-example" className="px-4 py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Relatable Business Case"
            title="Marketing Mix Example | A Local Bakery"
            description="Let's see how a small bakery can use all four elements together to launch and grow its birthday cake business."
          />

          <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-6 text-white md:p-8">
              <div className="flex items-center gap-4">
                <div className="rounded-2xl bg-white/15 p-4">
                  <Coffee size={29} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Sweet Corner Bakery</h3>
                  <p className="mt-1 text-sm text-blue-100">
                    Business goal: increase birthday cake orders in its local area
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 md:p-8">
              <div className="grid gap-5 md:grid-cols-2">
                {bakeryExample.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.title}
                      className="rounded-2xl border border-gray-200 bg-gray-50 p-5 md:p-6"
                    >
                      <div className="flex items-center gap-3">
                        <div className={`rounded-xl p-3 ${item.color}`}>
                          <Icon size={24} />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-blue-600">
                            MARKETING MIX ELEMENT
                          </p>
                          <h3 className="text-xl font-bold text-gray-900">
                            {item.title}
                          </h3>
                        </div>
                      </div>

                      <div className="mt-5 rounded-xl bg-white p-4">
                        <p className="text-xs font-bold uppercase tracking-wide text-gray-400">
                          Business Decision
                        </p>
                        <p className="mt-2 text-sm font-bold leading-6 text-gray-800">
                          {item.decision}
                        </p>
                      </div>

                      <div className="mt-3 rounded-xl bg-blue-50 p-4">
                        <p className="text-xs font-bold uppercase tracking-wide text-blue-600">
                          Customer Value
                        </p>
                        <p className="mt-2 text-sm leading-6 text-gray-700">
                          {item.customer}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Example result */}
              <div className="mt-7 rounded-2xl bg-emerald-50 p-5 md:p-6">
                <div className="flex items-start gap-3">
                  <TrendingUp className="mt-1 shrink-0 text-emerald-700" size={24} />
                  <div>
                    <h3 className="font-bold text-emerald-900">
                      How the Combination Helps
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-emerald-800">
                      Customers discover attractive cakes, find an option within
                      their budget, conveniently place an order and receive what
                      they expect. The bakery has a stronger opportunity to turn
                      interest into purchases and repeat business.
                    </p>
                  </div>
                </div>
              </div>

              <p className="mt-5 text-sm leading-6 text-gray-500">
                This is an illustrative example. The marketing mix does not
                guarantee sales; the outcome depends on customer demand,
                competition, product quality, execution and other factors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ANOTHER EXAMPLE */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 px-4 py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Another Everyday Example"
            title="The 4Ps of a Smartphone Brand"
            description="The same framework applies to technology businesses. A smartphone company must coordinate product features, price, sales channels and communication."
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Product",
                icon: Smartphone,
                color: "bg-blue-100 text-blue-700",
                detail:
                  "Battery life, camera, storage, performance, design and warranty.",
              },
              {
                title: "Price",
                icon: Wallet,
                color: "bg-indigo-100 text-indigo-700",
                detail:
                  "Budget, mid-range and premium models, financing and discounts.",
              },
              {
                title: "Place",
                icon: Store,
                color: "bg-sky-100 text-sky-700",
                detail:
                  "Brand stores, electronics retailers, website and online marketplaces.",
              },
              {
                title: "Promotion",
                icon: Megaphone,
                color: "bg-violet-100 text-violet-700",
                detail:
                  "Product launches, advertisements, reviews, creator campaigns and offers.",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white bg-white p-6 shadow-sm"
                >
                  <div className={`mb-4 inline-flex rounded-xl p-3 ${item.color}`}>
                    <Icon size={25} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-gray-600">{item.detail}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-7 rounded-3xl border border-blue-200 bg-white p-6 md:p-8">
            <div className="flex items-start gap-4">
              <Sparkles className="mt-1 shrink-0 text-blue-600" size={25} />
              <div>
                <h3 className="text-lg font-bold text-gray-900">
                  The Mix Changes with the Target Customer
                </h3>
                <p className="mt-3 text-sm leading-7 text-gray-600">
                  A phone designed for budget-conscious students may prioritize
                  battery life, affordability, online availability and value-focused
                  communication. A premium phone may emphasize camera quality,
                  design, exclusivity, premium retail experience and brand image.
                  The target customer influences how the 4Ps are designed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
<AdSlot />
      {/* 4PS VS STRATEGY */}
      <section className="px-4 py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Understanding the Relationship"
            title="Marketing Mix vs. Marketing Strategy"
            description="The marketing strategy defines the direction. The marketing mix helps implement that direction through practical decisions."
          />

          <div className="grid gap-5 lg:grid-cols-3">
            <div className="rounded-3xl border border-indigo-200 bg-indigo-50 p-6">
              <div className="mb-4 inline-flex rounded-xl bg-white p-3 text-indigo-700">
                <Target size={25} />
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                Marketing Strategy
              </h3>
              <p className="mt-3 text-sm leading-7 text-gray-600">
                Determines the target customer, positioning, value proposition and
                competitive direction.
              </p>
            </div>

            <div className="rounded-3xl border border-blue-200 bg-blue-50 p-6">
              <div className="mb-4 inline-flex rounded-xl bg-white p-3 text-blue-700">
                <Boxes size={25} />
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                Marketing Mix (4Ps)
              </h3>
              <p className="mt-3 text-sm leading-7 text-gray-600">
                Converts the strategy into product, price, place and promotion
                decisions that work together.
              </p>
            </div>

            <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6">
              <div className="mb-4 inline-flex rounded-xl bg-white p-3 text-emerald-700">
                <BarChart3 size={25} />
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                Business Results
              </h3>
              <p className="mt-3 text-sm leading-7 text-gray-600">
                Performance is assessed through customer response, sales, profit,
                market position, retention and other relevant goals.
              </p>
            </div>
          </div>

          <div className="mt-7 rounded-3xl bg-gray-950 p-6 text-white md:p-8">
            <p className="text-sm font-bold uppercase tracking-wide text-blue-300">
              Example
            </p>
            <h3 className="mt-3 text-xl font-bold text-white">
              Strategy: Affordable fashion for college students
            </h3>
            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {[
                ["Product", "Trendy, practical everyday clothing"],
                ["Price", "Student-friendly price range"],
                ["Place", "Online store & convenient delivery"],
                ["Promotion", "Campus creators & social media"],
              ].map(([label, text]) => (
                <div
                  key={label}
                  className="rounded-xl border border-white/10 bg-white/5 p-4"
                >
                  <p className="font-bold text-blue-300">{label}</p>
                  <p className="mt-2 text-sm leading-6 text-gray-300">{text}</p>
                </div>
              ))}
            </div>
            <p className="mt-5 text-sm leading-7 text-gray-300">
              Each decision supports the same strategy: serving students who want
              fashionable clothing at prices they can afford.
            </p>
          </div>
        </div>
      </section>

  {/* 7PS */}
  <section className="bg-gray-50 px-4 py-16 md:py-20">
    <div className="mx-auto max-w-7xl">
      <SectionHeading
        eyebrow="Extended Framework"
        title="What Is the 7Ps Marketing Mix?"
        description="For service businesses, the traditional 4Ps are often extended with People, Process and Physical Evidence to better account for service delivery and customer experience."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {[
          {
            name: "People",
            icon: Users,
            color: "bg-rose-100 text-rose-700",
            description:
              "Employees, service staff and everyone involved in delivering the customer experience.",
            example: "A friendly, knowledgeable café staff.",
          },
          {
            name: "Process",
            icon: ClipboardList,
            color: "bg-amber-100 text-amber-700",
            description:
              "The procedures and steps through which a service is delivered to the customer.",
            example: "Easy booking, ordering, payment and delivery.",
          },
          {
            name: "Physical Evidence",
            icon: ShieldCheck,
            color: "bg-teal-100 text-teal-700",
            description:
              "Visible cues that help customers assess a service and build confidence.",
            example: "Clean premises, uniforms, packaging and reviews.",
          },
        ].map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.name}
              className="rounded-2xl border border-gray-200 bg-white p-6"
            >
              <div className={`mb-4 inline-flex rounded-xl p-3 ${item.color}`}>
                <Icon size={25} />
              </div>
              <h3 className="text-xl font-bold text-gray-900">{item.name}</h3>
              <p className="mt-3 text-sm leading-7 text-gray-600">{item.description}</p>
              <div className="mt-4 rounded-xl bg-gray-50 p-4">
                <p className="text-xs font-bold uppercase tracking-wide text-gray-400">
                  Example
                </p>
                <p className="mt-2 text-sm leading-6 text-gray-700">{item.example}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-5">
        <p className="text-sm leading-7 text-blue-900">
          <span className="font-bold">When are the 7Ps useful?</span> They are
          especially useful for businesses where the service experience and the
          people delivering it are a major part of what customers purchase, such
          as hotels, hospitals, banks, salons, educational institutions and
          consulting firms.
        </p>
      </div>
    </div>
  </section>

  {/* MISTAKES */}
  <section className="px-4 py-16 md:py-20">
    <div className="mx-auto max-w-7xl">
      <SectionHeading
        eyebrow="Common Mistakes"
        title="When the Marketing Mix Does Not Work"
        description="Businesses can struggle when individual marketing decisions are poorly chosen or contradict each other."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {[
          {
            title: "Good Product, Wrong Price",
            text: "Customers may like the offering but find it unaffordable or believe its value does not justify the price.",
          },
          {
            title: "Good Product, Poor Availability",
            text: "Customers may be willing to buy but cannot find the product or receive it conveniently.",
          },
          {
            title: "Unknown Product",
            text: "The product may meet a need, but the intended customers do not know it exists.",
          },
          {
            title: "Promotion to the Wrong Audience",
            text: "Marketing spending can be wasted when campaigns reach people unlikely to need the product.",
          },
          {
            title: "Conflicting Brand Signals",
            text: "Premium positioning can be weakened by inconsistent product quality, discounting or customer experience.",
          },
          {
            title: "Never Reviewing Results",
            text: "Businesses may continue spending on ineffective marketing activities without checking performance.",
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
  <section className="bg-gray-50 px-4 py-16 md:py-20">
    <div className="mx-auto max-w-7xl">
      <SectionHeading
        eyebrow="Common Questions"
        title="Marketing Mix FAQs"
        description="Quick answers to frequently asked questions about the marketing mix and its practical application."
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

  

  {/* SUMMARY */}
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
          Successful Marketing Requires the Right Combination of the 4Ps
        </h2>

        <p className="mt-5 max-w-3xl text-base leading-8 text-blue-100">
          The marketing mix helps businesses coordinate Product, Price, Place and
          Promotion to create a meaningful offer for a target market. A strong
          product alone is not enough; it must be priced appropriately, be
          available to customers and be communicated effectively. When these
          elements support one another, businesses have a better foundation for
          customer satisfaction, competitiveness and growth.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/marketing/marketing-management"
            className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-bold text-blue-700 transition hover:bg-blue-50"
          >
            Learn Marketing Management <ArrowRight size={17} />
          </Link>
          <Link
            href="/marketing/market-segmentation"
            className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-5 py-3 font-bold text-white transition hover:bg-white/10"
          >
            Explore Market Segmentation
          </Link>
        </div>
      </div>
    </div>
  </section>
</main>
  );
}
