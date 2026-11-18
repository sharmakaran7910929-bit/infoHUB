
import Link from "next/link";
import {
  Brain,
  UserRound,
  Store,
  ShoppingBag,
  UserRoundCheck,
  Eye,
  Heart,
  Target,
  Wallet,
  Tag,
  Star,
  ShieldCheck,
  TrendingUp,
  MessageCircle,
  Lightbulb,
  Search,
  Scale,
  Gift,
  Users,
  CheckCircle2,
  ArrowRight,
  ShoppingCart,
  CreditCard,
  Package,
  Sparkles,
  CircleDollarSign,
  Clock,
  Megaphone,
  Repeat,
  ThumbsUp,
  AlertCircle,
  BadgePercent,
  Smartphone,
  Handshake,
  BarChart3,
} from "lucide-react";
import AdSlot from "../../../components/AdSlot";

export const metadata = {
  title: "Consumer Psychology | Meaning, Factors, Buying Behaviour and Examples",
  description:
    "Understand consumer psychology, how customers make purchasing decisions, buying behaviour, motivation, perception, emotions, social influence, advertising and marketing strategies with practical examples.",
};

const principles = [
  {
    icon: Brain,
    title: "Motivation",
    description:
      "The internal needs and desires that encourage a person to purchase a product or service.",
    example:
      "A customer buys an air conditioner because they want relief from extreme summer heat.",
  },
  {
    icon: Eye,
    title: "Perception",
    description:
      "The way consumers interpret information about products, brands, prices and businesses.",
    example:
      "A customer may perceive a well-designed shop with organised products as more trustworthy.",
  },
  {
    icon: Heart,
    title: "Emotions",
    description:
      "Feelings such as happiness, fear, excitement and comfort can influence purchasing decisions.",
    example:
      "A customer purchases a gift because they want to make a family member happy.",
  },
  {
    icon: Repeat,
    title: "Learning and Experience",
    description:
      "Previous experiences influence what consumers expect and how they behave during future purchases.",
    example:
      "After receiving good service from a grocery shop, a customer may regularly return to that shop.",
  },
  {
    icon: Users,
    title: "Social Influence",
    description:
      "Family, friends, colleagues, celebrities and social groups can influence consumer choices.",
    example:
      "A person purchases a particular smartphone after receiving recommendations from friends.",
  },
  {
    icon: Target,
    title: "Attitudes and Preferences",
    description:
      "Personal beliefs, opinions and preferences influence how consumers evaluate different products.",
    example:
      "A customer prefers locally manufactured products because they value supporting local businesses.",
  },
];

const stages = [
  {
    number: "01",
    title: "Need Recognition",
    description:
      "The customer recognises a problem or identifies something they want or need.",
    example: "A customer realises that their old smartphone needs replacement.",
    icon: Lightbulb,
  },
  {
    number: "02",
    title: "Information Search",
    description:
      "The customer gathers information about available products, brands, features and prices.",
    example: "They search online and ask friends about different smartphones.",
    icon: Search,
  },
  {
    number: "03",
    title: "Evaluation of Alternatives",
    description:
      "The customer compares different options based on price, quality, features and personal preferences.",
    example: "They compare three smartphones before deciding which offers better value.",
    icon: Scale,
  },
  {
    number: "04",
    title: "Purchase Decision",
    description:
      "The customer selects a product and decides where, when and how to purchase it.",
    example: "They choose a smartphone and place an order through an online shop.",
    icon: ShoppingCart,
  },
  {
    number: "05",
    title: "Post-Purchase Behaviour",
    description:
      "After buying, the customer evaluates whether the product meets their expectations.",
    example: "They are satisfied with the phone and recommend it to their friends.",
    icon: Star,
  },
];

const psychologicalFactors = [
  {
    title: "Personal Factors",
    icon: UserRound,
    description:
      "Individual characteristics that influence purchasing decisions.",
    items: [
      ["Age", "A teenager may prefer gaming accessories, while an older adult may prioritise ease of use."],
      ["Income", "A customer with a limited budget may compare prices more carefully."],
      ["Occupation", "A professional may purchase a laptop for work-related activities."],
      ["Lifestyle", "A fitness enthusiast may spend more on sports equipment and fitness products."],
      ["Personality", "A risk-averse customer may prefer familiar and established brands."],
    ],
  },
  {
    title: "Social Factors",
    icon: Users,
    description:
      "Influences arising from relationships, communities and social surroundings.",
    items: [
      ["Family", "Parents may influence which television or refrigerator a household purchases."],
      ["Friends", "A customer may try a restaurant recommended by friends."],
      ["Social Groups", "A person may purchase products associated with a group they admire."],
      ["Social Status", "Some consumers purchase luxury products to communicate their social position."],
      ["Online Communities", "Reviews and discussions can influence product selection."],
    ],
  },
  {
    title: "Cultural Factors",
    icon: GlobeIcon,
    description:
      "Values, traditions, customs and cultural surroundings that influence consumption.",
    items: [
      ["Traditions", "Families may purchase new clothes and gifts during Diwali."],
      ["Festivals", "Demand for sweets, decorations and gifts often increases during festivals."],
      ["Food Habits", "Regional food preferences influence grocery purchases."],
      ["Cultural Values", "Some customers prefer products that align with their cultural values."],
    ],
  },
  {
    title: "Economic Factors",
    icon: Wallet,
    description:
      "Financial circumstances and market conditions that affect what consumers can afford.",
    items: [
      ["Income Level", "Higher disposable income can increase the range of products a customer can afford."],
      ["Price", "A customer may select a less expensive product when prices increase."],
      ["Inflation", "Rising grocery prices may encourage customers to change brands or reduce quantities."],
      ["Savings", "A customer may postpone buying an expensive television to save money."],
    ],
  },
];

function GlobeIcon(props) {
  return <Users {...props} />;
}

const buyingTypes = [
  {
    title: "Routine Buying Behaviour",
    icon: Repeat,
    description:
      "Purchases made frequently with little effort because the customer is already familiar with the product.",
    example:
      "Buying milk, bread or everyday groceries from a familiar shop.",
  },
  {
    title: "Limited Decision-Making",
    icon: Search,
    description:
      "Purchases involving some comparison and consideration, but not extensive research.",
    example:
      "Choosing a new brand of cooking oil after comparing two or three options.",
  },
  {
    title: "Extensive Decision-Making",
    icon: BarChart3,
    description:
      "Purchases involving significant research because the product is expensive, important or unfamiliar.",
    example:
      "Comparing different cars, laptops or refrigerators before purchasing.",
  },
  {
    title: "Impulse Buying",
    icon: ZapIcon,
    description:
      "An unplanned purchase made suddenly, often influenced by emotions, attractive displays or immediate offers.",
    example:
      "Buying chocolates near the billing counter even though they were not on the shopping list.",
  },
];

function ZapIcon(props) {
  return <Sparkles {...props} />;
}

const biases = [
  {
    title: "Anchoring Effect",
    description:
      "Consumers may rely heavily on the first price they see when evaluating a later price.",
    example:
      "A shop displays a product at ₹2,000 and then offers it for ₹1,500. The customer perceives ₹1,500 as attractive because of the original reference price.",
  },
  {
    title: "Social Proof",
    description:
      "People may use the choices and experiences of others as guidance when making decisions.",
    example:
      "A customer chooses a restaurant because many other customers have rated it highly.",
  },
  {
    title: "Scarcity Effect",
    description:
      "Limited availability can make a product seem more desirable or urgent to purchase.",
    example:
      "An online shop displays that only a few units are left, encouraging a customer to buy quickly.",
  },
  {
    title: "Loss Aversion",
    description:
      "People often experience the possibility of losing something more strongly than an equivalent potential gain.",
    example:
      "A customer may use an expiring coupon because they do not want to lose the discount.",
  },
  {
    title: "Brand Familiarity",
    description:
      "Consumers may prefer brands they already recognise and have experienced.",
    example:
      "A customer chooses a familiar toothpaste brand instead of trying an unknown alternative.",
  },
  {
    title: "Decoy Effect",
    description:
      "An additional option can influence how consumers compare two other alternatives.",
    example:
      "A seller offers small, medium and large packages with carefully structured prices, making one package appear more attractive by comparison.",
  },
];

const faqs = [
  {
    q: "What is consumer psychology in simple words?",
    a: "Consumer psychology is the study of how people think, feel and behave when choosing, purchasing, using and evaluating products and services.",
  },
  {
    q: "What is the difference between consumer psychology and consumer behaviour?",
    a: "Consumer psychology focuses on the mental processes behind consumer decisions, including motivation, perception, attitudes and emotions. Consumer behaviour is broader and examines the actions and decision-making patterns of consumers, including searching, purchasing, using and disposing of products.",
  },
  {
    q: "Why do people buy expensive products?",
    a: "Consumers may associate higher prices with quality, durability, status or exclusivity. However, expensive products are not necessarily better. Individual preferences, financial circumstances and brand perceptions also influence these decisions.",
  },
  {
    q: "Why do customers prefer branded products?",
    a: "Brand familiarity, previous experiences, perceived quality, trust, reputation and social influence can encourage customers to choose recognised brands.",
  },
  {
    q: "How do discounts influence buying behaviour?",
    a: "Discounts can increase perceived value, create urgency and encourage customers to purchase products they might otherwise postpone buying. The effect depends on the consumer and the actual value of the offer.",
  },
  {
    q: "What is impulse buying?",
    a: "Impulse buying is an unplanned purchase made with little prior consideration. Attractive displays, emotions, convenient checkout options and promotional offers can encourage it.",
  },
  {
    q: "How is consumer psychology useful to businesses?",
    a: "It helps businesses understand customer needs, improve product design, pricing, advertising, customer experience and communication. It can also help businesses develop long-term customer relationships.",
  },
  {
    q: "Does consumer psychology apply to online shopping?",
    a: "Yes. Product images, customer reviews, ratings, website design, recommendations, delivery options, prices and checkout experiences can all influence online purchasing decisions.",
  },
];

function SectionHeading({
  eyebrow,
  title,
  description,
  dark = false,
}) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      {eyebrow && (
        <p
          className={`mb-3 text-sm font-bold uppercase tracking-[0.18em] ${
            dark ? "text-blue-300" : "text-blue-600"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`text-3xl font-bold tracking-tight sm:text-4xl ${
          dark ? "text-white" : "text-slate-900"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base leading-8 ${
            dark ? "text-blue-100/80" : "text-slate-600"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

function ExampleBox({ children }) {
  return (
    <div className="mt-4 rounded-xl border border-blue-100 bg-blue-50/80 p-4">
      <p className="mb-1 text-xs font-bold uppercase tracking-wider text-blue-700">
        Real-life example
      </p>
      <p className="text-sm leading-7 text-slate-700">{children}</p>
    </div>
  );
}

function RoleIcon({ type, size = 24 }) {
  const Icon =
    type === "customer"
      ? UserRound
      : type === "shop"
        ? Store
        : UserRoundCheck;

  return <Icon size={size} />;
}

function RoleCard({ type, title, description, example }) {
  return (
    <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
        <RoleIcon type={type} size={25} />
      </div>
      <h3 className="text-lg font-bold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm leading-7 text-slate-600">{description}</p>
      {example && <ExampleBox>{example}</ExampleBox>}
    </div>
  );
}

function InfoCard({ icon: Icon, title, children }) {
  return (
    <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
        <Icon size={24} />
      </div>
      <h3 className="mb-3 text-lg font-bold text-slate-900">{title}</h3>
      <div className="text-sm leading-7 text-slate-600">{children}</div>
    </div>
  );
}

export default function ConsumerPsychologyPage() {
  return (
    <main className="overflow-hidden bg-white text-slate-800">

      {/* HERO */}
      <section className="relative bg-gradient-to-br from-white via-blue-50 to-blue-100/80">
        <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-blue-200/40 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-sky-200/40 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:py-28">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-sm font-bold text-blue-700 shadow-sm">
              <Brain size={17} />
              Psychology · Customers · Buying Decisions
            </div>

            <h1 className="text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Consumer Psychology
              <span className="mt-2 block text-blue-600">
                Understanding the Mind Behind Every Purchase
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600">
              Why do customers choose one product over another? Why do
              discounts attract attention? Why do people trust certain
              brands? Consumer psychology explores the mental processes
              behind everyday purchasing decisions.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#understanding"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-bold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
              >
                Explore the Topic <ArrowRight size={18} />
              </a>
              <a
                href="#buying-process"
                className="rounded-xl border border-blue-200 bg-white px-6 py-3 font-bold text-blue-700 transition hover:bg-blue-50"
              >
                Buying Process
              </a>
            </div>
          </div>

          {/* CUSTOMER SHOP SELLER VISUAL */}
          <div className="relative mx-auto w-full max-w-lg">
            <div className="rounded-[2rem] border border-blue-100 bg-white/95 p-6 shadow-2xl shadow-blue-200/50 sm:p-8">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-blue-600">
                    Consumer interaction
                  </p>
                  <h3 className="mt-1 text-xl font-bold text-slate-900">
                    How a Purchase Happens
                  </h3>
                </div>
                <div className="rounded-xl bg-blue-50 p-3 text-blue-600">
                  <ShoppingBag size={28} />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-blue-100 bg-blue-50 p-4 text-center">
                  <UserRound className="mx-auto mb-2 text-blue-600" size={35} />
                  <p className="font-bold text-slate-900">Customer</p>
                  <p className="mt-1 text-xs text-slate-500">
                    Has a need or desire
                  </p>
                </div>

                <div className="rounded-2xl border border-blue-100 bg-blue-50 p-4 text-center">
                  <UserRoundCheck className="mx-auto mb-2 text-blue-600" size={35} />
                  <p className="font-bold text-slate-900">Seller</p>
                  <p className="mt-1 text-xs text-slate-500">
                    Offers a solution
                  </p>
                </div>
              </div>

              <div className="my-4 flex items-center justify-center gap-3 text-blue-500">
                <div className="h-px flex-1 bg-blue-200" />
                <ShoppingCart size={24} />
                <div className="h-px flex-1 bg-blue-200" />
              </div>

              <div className="rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-600 to-indigo-700 p-6 text-center text-white">
                <Store className="mx-auto mb-3" size={39} />
                <h3 className="text-xl font-bold">Shop or Marketplace</h3>
                <p className="mt-2 text-sm text-blue-100">
                  Products · Prices · Offers · Customer Experience
                </p>
              </div>

              <div className="mt-5 rounded-xl bg-blue-50 p-4 text-center">
                <Brain className="mx-auto mb-2 text-blue-600" size={27} />
                <p className="font-bold text-slate-900">
                  Consumer Psychology
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  Explains the thoughts, feelings and decisions behind the purchase
                </p>
              </div>
            </div>
            <div className="absolute -right-4 top-16 rounded-xl border border-blue-100 bg-white p-3 text-blue-600 shadow-lg">
              <Tag size={26} />
            </div>
            <div className="absolute -bottom-5 -left-4 rounded-xl border border-blue-100 bg-white p-3 text-blue-600 shadow-lg">
              <CreditCard size={26} />
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section id="understanding" className="px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <SectionHeading
            eyebrow="Understanding the subject"
            title="What Is Consumer Psychology?"
            description="Consumer psychology is the study of how people's thoughts, feelings, perceptions, motivations and experiences influence their purchasing decisions and interactions with products and services."
          />

          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl bg-gradient-to-br from-blue-50 to-white p-7">
              <h3 className="mb-4 text-xl font-bold text-slate-900">
                Understanding the consumer's mind
              </h3>
              <p className="leading-8 text-slate-600">
                Imagine that two customers visit the same electronics shop.
                Both see the same smartphone, at the same price, with the
                same features.
              </p>
              <p className="mt-4 leading-8 text-slate-600">
                One customer purchases it because of its camera quality.
                Another rejects it because they prefer a different brand.
                Their different needs, experiences, preferences and
                perceptions influence their decisions.
              </p>
              <ExampleBox>
                The product and price are identical, but the customers
                evaluate them differently. Consumer psychology helps explain why.
              </ExampleBox>
            </div>

            <div className="rounded-2xl border border-blue-100 bg-white p-7 shadow-sm">
              <h3 className="mb-5 text-xl font-bold text-slate-900">
                What does it study?
              </h3>
              <ul className="space-y-4">
                {[
                  "Why consumers need or desire particular products.",
                  "How customers perceive brands and product quality.",
                  "Why emotions influence buying decisions.",
                  "How advertisements attract consumer attention.",
                  "Why people respond differently to discounts.",
                  "How previous experiences influence future purchases.",
                  "Why customers remain loyal to certain businesses.",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-7 text-slate-600">
                    <CheckCircle2 className="mt-1 shrink-0 text-blue-600" size={19} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border-l-4 border-blue-600 bg-blue-50 p-6">
            <p className="font-bold text-blue-900">Important understanding</p>
            <p className="mt-2 leading-8 text-slate-700">
              Consumers do not always make purchasing decisions through
              logical calculations. Emotions, habits, social influence,
              familiarity and psychological biases can also shape their choices.
            </p>
          </div>
        </div>
      </section>
<AdSlot />
      {/* CUSTOMER SHOP SELLER */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-sky-50 px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Three perspectives"
            title="Customer, Shop and Seller: How They Interact"
            description="A simple shopping experience helps us understand the relationship between consumer psychology and everyday business activities."
          />

          <div className="grid gap-5 md:grid-cols-3">
            <RoleCard
              type="customer"
              title="The Customer"
              description="The person who identifies a need, evaluates available products and decides whether to make a purchase."
              example="A customer visits a grocery shop because they need cooking oil, rice and vegetables."
            />

            <RoleCard
              type="shop"
              title="The Shop"
              description="The physical or online marketplace where products are displayed, prices are presented and purchasing takes place."
              example="The shop arranges products, displays prices and makes different brands available."
            />

            <RoleCard
              type="seller"
              title="The Seller"
              description="The person or business offering products and services and interacting with customers."
              example="The shopkeeper explains product differences, answers questions and helps the customer choose."
            />
          </div>

          <div className="mt-9 rounded-3xl border border-blue-100 bg-white p-6 shadow-sm sm:p-8">
            <h3 className="mb-7 text-center text-xl font-bold text-slate-900">
              A Simple Shopping Interaction
            </h3>

            <div className="grid items-center gap-4 md:grid-cols-[1fr_auto_1fr_auto_1fr]">
              <div className="rounded-2xl bg-blue-50 p-5 text-center">
                <UserRound className="mx-auto mb-3 text-blue-600" size={34} />
                <p className="font-bold text-slate-900">Customer</p>
                <p className="mt-2 text-sm text-slate-600">
                  Needs a product
                </p>
              </div>

              <ArrowRight className="mx-auto hidden text-blue-500 md:block" size={25} />

              <div className="rounded-2xl bg-blue-50 p-5 text-center">
                <Store className="mx-auto mb-3 text-blue-600" size={34} />
                <p className="font-bold text-slate-900">Shop</p>
                <p className="mt-2 text-sm text-slate-600">
                  Displays available options
                </p>
              </div>

              <ArrowRight className="mx-auto hidden text-blue-500 md:block" size={25} />

              <div className="rounded-2xl bg-blue-50 p-5 text-center">
                <UserRoundCheck className="mx-auto mb-3 text-blue-600" size={34} />
                <p className="font-bold text-slate-900">Seller</p>
                <p className="mt-2 text-sm text-slate-600">
                  Provides information and assistance
                </p>
              </div>
            </div>

            <div className="mt-6 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-700 p-5 text-center text-white">
              <ShoppingBag className="mx-auto mb-2" size={29} />
              <p className="font-bold">Purchase Decision</p>
              <p className="mt-1 text-sm text-blue-100">
                The customer evaluates the available options and decides whether to buy.
              </p>
            </div>

            <p className="mt-5 text-center text-sm leading-7 text-slate-500">
              The seller and shop influence the shopping experience, but
              the customer's needs, preferences and evaluation play an
              important role in the final decision.
            </p>
          </div>
        </div>
      </section>

      {/* CORE PRINCIPLES */}
      <section className="px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Psychological foundations"
            title="Core Principles of Consumer Psychology"
            description="Several psychological processes influence how consumers recognise needs, evaluate products and decide what to purchase."
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {principles.map((item) => (
              <InfoCard key={item.title} icon={item.icon} title={item.title}>
                <p>{item.description}</p>
                <ExampleBox>{item.example}</ExampleBox>
              </InfoCard>
            ))}
          </div>
        </div>
      </section>

      {/* BUYING PROCESS */}
      <section id="buying-process" className="bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-950 px-5 py-20 text-white sm:px-8">
        <div className="mx-auto max-w-5xl">
          <SectionHeading
            dark
            eyebrow="Consumer decision-making"
            title="Five Stages of the Consumer Buying Process"
            description="A common model explains how consumers move from recognising a need to evaluating their experience after purchasing a product."
          />

          <div className="relative mx-auto max-w-3xl space-y-4">
            {stages.map((item, index) => {
              const Icon = item.icon;

              return (
                <div key={item.number} className="relative">
                  {index !== stages.length - 1 && (
                    <div className="absolute left-7 top-16 h-full w-px bg-blue-300/50" />
                  )}

                  <div className="relative flex gap-4 rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-sm">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-blue-700">
                      <Icon size={24} />
                    </div>
                    <div>
                      <p className="text-xs font-bold tracking-widest text-blue-200">
                        STAGE {item.number}
                      </p>
                      <h3 className="mt-1 text-lg font-bold">{item.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-blue-100">
                        {item.description}
                      </p>
                      <div className="mt-3 rounded-xl bg-white/10 p-3">
                        <p className="text-xs font-bold uppercase tracking-wider text-blue-200">
                          Example
                        </p>
                        <p className="mt-1 text-sm leading-6 text-white">
                          {item.example}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <p className="mx-auto mt-7 max-w-3xl text-center text-sm leading-7 text-blue-100">
            This is a simplified decision-making model. Consumers may skip,
            combine or revisit stages depending on the product, urgency,
            experience and individual circumstances.
          </p>
        </div>
      </section>
<AdSlot />
      {/* BUYING BEHAVIOUR */}
      <section className="px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Different purchasing patterns"
            title="Types of Consumer Buying Behaviour"
            description="Not every purchase requires the same amount of time, research or consideration. Consumer decisions vary according to price, familiarity, risk and involvement."
          />

          <div className="grid gap-5 md:grid-cols-2">
            {buyingTypes.map((item) => (
              <InfoCard key={item.title} icon={item.icon} title={item.title}>
                <p>{item.description}</p>
                <ExampleBox>{item.example}</ExampleBox>
              </InfoCard>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-blue-100 bg-blue-50 p-6">
            <h3 className="font-bold text-slate-900">
              Why is this distinction important?
            </h3>
            <p className="mt-2 leading-8 text-slate-600">
              A customer may spend only a few seconds choosing a packet
              of biscuits but several days comparing laptops. The level
              of involvement and perceived risk influences the amount
              of decision-making effort.
            </p>
          </div>
        </div>
      </section>

      {/* PSYCHOLOGICAL FACTORS */}
      <section className="bg-gradient-to-br from-white via-blue-50/70 to-white px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="What influences purchases?"
            title="Factors Affecting Consumer Behaviour"
            description="Consumer decisions are influenced by personal circumstances, social surroundings, cultural values and economic conditions."
          />

          <div className="grid gap-5 lg:grid-cols-2">
            {psychologicalFactors.map((factor) => {
              const Icon = factor.icon;

              return (
                <div key={factor.title} className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="rounded-xl bg-blue-50 p-3 text-blue-600">
                      <Icon size={25} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">
                        {factor.title}
                      </h3>
                      <p className="mt-1 text-sm text-slate-500">
                        {factor.description}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {factor.items.map(([title, description]) => (
                      <div key={title} className="rounded-xl bg-blue-50/70 p-4">
                        <p className="font-bold text-slate-900">{title}</p>
                        <p className="mt-1 text-sm leading-7 text-slate-600">
                          {description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PRICE AND DISCOUNTS */}
      <section className="px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Price perception"
            title="How Prices and Discounts Influence Customers"
            description="The price of a product is not just a financial number. The way it is displayed and compared can influence how customers perceive its value."
          />

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-3xl border border-blue-100 bg-white p-7 shadow-sm">
              <div className="mb-5 flex items-center gap-3">
                <BadgePercent className="text-blue-600" size={32} />
                <h3 className="text-xl font-bold text-slate-900">
                  Discount Perception
                </h3>
              </div>

              <div className="rounded-2xl bg-blue-50 p-6 text-center">
                <p className="text-sm font-bold text-slate-500">
                  Displayed Original Price
                </p>
                <p className="mt-1 text-2xl text-slate-400 line-through">
                  ₹2,000
                </p>
                <p className="mt-5 text-sm font-bold text-blue-700">
                  Promotional Price
                </p>
                <p className="mt-1 text-4xl font-bold text-blue-700">
                  ₹1,500
                </p>
                <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-bold text-green-800">
                  <Tag size={16} /> Save ₹500
                </div>
              </div>

              <p className="mt-5 text-sm leading-7 text-slate-600">
                A customer may feel that the product offers good value
                because they compare the promotional price with the
                displayed original price.
              </p>
              <ExampleBox>
                A shop displays a mixer grinder for ₹2,000 and offers it
                for ₹1,500. The customer may perceive the purchase as
                attractive, provided the original price and discount
                are genuine.
              </ExampleBox>
            </div>

            <div className="rounded-3xl border border-blue-100 bg-white p-7 shadow-sm">
              <div className="mb-5 flex items-center gap-3">
                <Wallet className="text-blue-600" size={32} />
                <h3 className="text-xl font-bold text-slate-900">
                  Price and Quality Perception
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl bg-blue-50 p-5 text-center">
                  <p className="text-sm font-bold text-slate-600">
                    Product A
                  </p>
                  <p className="mt-3 text-2xl font-bold text-blue-700">
                    ₹500
                  </p>
                  <p className="mt-2 text-xs text-slate-500">
                    Lower price
                  </p>
                </div>
                <div className="rounded-xl bg-indigo-50 p-5 text-center">
                  <p className="text-sm font-bold text-slate-600">
                    Product B
                  </p>
                  <p className="mt-3 text-2xl font-bold text-indigo-700">
                    ₹1,000
                  </p>
                  <p className="mt-2 text-xs text-slate-500">
                    Higher price
                  </p>
                </div>
              </div>

              <p className="mt-5 text-sm leading-7 text-slate-600">
                Some customers may associate a higher price with better
                quality, but price alone does not prove that a product
                is superior.
              </p>
              <ExampleBox>
                A customer may consider two headphones and assume the
                ₹1,000 model is better than the ₹500 model. They should
                still compare sound quality, durability, features and reviews.
              </ExampleBox>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border-l-4 border-blue-600 bg-blue-50 p-6">
            <p className="font-bold text-blue-900">
              Important distinction
            </p>
            <p className="mt-2 leading-8 text-slate-700">
              Perceived value and actual value are not always the same.
              A customer can feel that a discount is attractive even when
              the product is unnecessary or available at a similar price
              elsewhere.
            </p>
          </div>
        </div>
      </section>
<AdSlot />
      {/* BRANDING AND ADVERTISING */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Marketing and perception"
            title="How Advertising and Branding Influence Consumers"
            description="Businesses communicate product information and brand identity through advertising, packaging, pricing, promotions and customer experiences."
          />

          <div className="grid gap-5 md:grid-cols-2">
            <InfoCard icon={Megaphone} title="Advertising">
              Advertising attracts attention, communicates product benefits
              and creates awareness.
              <ExampleBox>
                A television advertisement shows how a washing machine
                saves time and effort for a household.
              </ExampleBox>
            </InfoCard>

            <InfoCard icon={Star} title="Brand Image">
              Brand image is the overall perception and associations that
              consumers develop about a brand.
              <ExampleBox>
                A customer may associate a particular electronics brand
                with reliability because of previous experiences.
              </ExampleBox>
            </InfoCard>

            <InfoCard icon={Package} title="Packaging">
              Packaging influences first impressions through design,
              presentation, information and convenience.
              <ExampleBox>
                A customer notices two similar food products but chooses
                the one with clearer ingredient information and convenient packaging.
              </ExampleBox>
            </InfoCard>

            <InfoCard icon={Smartphone} title="Online Reviews">
              Ratings, customer feedback and product demonstrations can
              influence trust and purchasing decisions.
              <ExampleBox>
                A customer checks product reviews on an online marketplace
                before ordering a kitchen appliance.
              </ExampleBox>
            </InfoCard>
          </div>
        </div>
      </section>

      {/* PSYCHOLOGICAL BIASES */}
      <section className="px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Decision-making shortcuts"
            title="Psychological Biases in Consumer Behaviour"
            description="Consumers do not always evaluate every option objectively. Mental shortcuts and biases can influence how they interpret prices, offers and product information."
          />

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {biases.map((item) => (
              <div key={item.title} className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <Brain size={23} />
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>
                <ExampleBox>{item.example}</ExampleBox>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EMOTIONAL AND IMPULSE BUYING */}
      <section className="bg-gradient-to-br from-white via-blue-50 to-white px-5 py-20 sm:px-8">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-blue-600">
              Emotions and purchasing
            </p>
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Emotional Buying and Impulse Purchases
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Consumers sometimes purchase products because of how
              they feel rather than because they have carefully evaluated
              whether the product is necessary.
            </p>

            <div className="mt-6 space-y-4">
              <div className="rounded-xl border border-blue-100 bg-white p-5">
                <h3 className="font-bold text-slate-900">
                  Emotional Buying
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  Purchasing decisions influenced by feelings such as
                  happiness, excitement, affection or the desire for comfort.
                </p>
                <ExampleBox>
                  A customer purchases a birthday gift because they want
                  to make a friend feel special.
                </ExampleBox>
              </div>

              <div className="rounded-xl border border-blue-100 bg-white p-5">
                <h3 className="font-bold text-slate-900">
                  Impulse Buying
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  An unplanned purchase made suddenly without extensive
                  prior consideration.
                </p>
                <ExampleBox>
                  A customer visits a supermarket to purchase groceries
                  but also buys a chocolate bar after noticing it near
                  the billing counter.
                </ExampleBox>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-blue-100 bg-white p-7 shadow-xl shadow-blue-100/50">
            <h3 className="mb-6 text-center text-xl font-bold text-slate-900">
              What Can Trigger an Impulse Purchase?
            </h3>

            <div className="space-y-4">
              {[
                ["Attractive Displays", "Products placed where customers can easily notice them."],
                ["Limited-Time Offers", "Promotions that create a sense of urgency."],
                ["Emotional State", "Shopping when excited, bored or seeking comfort."],
                ["Convenience", "Quick checkout and easy payment options."],
                ["Product Recommendations", "Suggested products that attract attention."],
              ].map(([title, description], index) => (
                <div key={title} className="flex gap-4 rounded-xl bg-blue-50 p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
                    {index + 1}
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">{title}</p>
                    <p className="mt-1 text-sm leading-7 text-slate-600">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
<AdSlot />
      {/* ONLINE SHOPPING */}
      <section className="px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Digital consumer behaviour"
            title="Consumer Psychology in Online Shopping"
            description="Online shopping uses many of the same psychological principles as physical shopping, but digital interfaces introduce additional influences."
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <InfoCard icon={Star} title="Ratings and Reviews">
              Customers often examine ratings and other buyers' experiences
              to reduce uncertainty.
              <ExampleBox>
                A customer compares two mixers and selects the one with
                more useful verified reviews.
              </ExampleBox>
            </InfoCard>

            <InfoCard icon={ShoppingBag} title="Product Presentation">
              Product images, descriptions and videos shape how customers
              understand and perceive a product.
              <ExampleBox>
                Clear photographs from different angles help a customer
                evaluate a pair of shoes.
              </ExampleBox>
            </InfoCard>

            <InfoCard icon={Clock} title="Urgency Messages">
              Countdown timers and limited-stock notices can influence
              the speed of purchasing decisions.
              <ExampleBox>
                A customer sees a limited-time sale and feels encouraged
                to complete the purchase quickly.
              </ExampleBox>
            </InfoCard>

            <InfoCard icon={Sparkles} title="Personalised Recommendations">
              Online platforms suggest products using browsing and
              purchase-related information.
              <ExampleBox>
                After searching for a laptop, a customer sees laptop
                accessories in product recommendations.
              </ExampleBox>
            </InfoCard>

            <InfoCard icon={CreditCard} title="Payment Convenience">
              Simple payment processes can reduce friction during checkout.
              <ExampleBox>
                A customer completes an online purchase using UPI instead
                of entering lengthy payment details.
              </ExampleBox>
            </InfoCard>

            <InfoCard icon={ShieldCheck} title="Trust and Security">
              Secure payment methods, clear return policies and reliable
              delivery information can increase confidence.
              <ExampleBox>
                A customer prefers an online shop with transparent return
                policies and dependable customer support.
              </ExampleBox>
            </InfoCard>
          </div>
        </div>
      </section>

      {/* BUSINESS APPLICATIONS */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-sky-50 px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Business applications"
            title="How Businesses Use Consumer Psychology"
            description="Understanding consumer behaviour helps businesses design better products, communicate effectively and build stronger customer relationships."
          />

          <div className="grid gap-5 md:grid-cols-2">
            <InfoCard icon={Search} title="Understanding Customer Needs">
              Businesses study customer preferences, problems and
              expectations to develop products and services that address
              real needs.
              <ExampleBox>
                A local shop notices that customers frequently ask for
                smaller and more affordable product packages, so it
                introduces smaller pack sizes.
              </ExampleBox>
            </InfoCard>

            <InfoCard icon={Tag} title="Pricing Strategies">
              Businesses examine how customers respond to prices,
              discounts, package sizes and product comparisons.
              <ExampleBox>
                A grocery shop offers family-size and smaller packages
                to serve customers with different budgets.
              </ExampleBox>
            </InfoCard>

            <InfoCard icon={Megaphone} title="Marketing and Advertising">
              Businesses use consumer insights to communicate relevant
              product benefits to their intended audience.
              <ExampleBox>
                A sports store highlights comfort and durability when
                advertising running shoes.
              </ExampleBox>
            </InfoCard>

            <InfoCard icon={Handshake} title="Customer Relationships">
              Good service, honest communication and consistent
              experiences can encourage customer loyalty.
              <ExampleBox>
                A shopkeeper remembers a regular customer's preferences
                and provides helpful recommendations without pressure.
              </ExampleBox>
            </InfoCard>

            <InfoCard icon={Store} title="Store Layout">
              Businesses organise product displays and shopping spaces
              to make products easier to discover.
              <ExampleBox>
                A supermarket places frequently purchased essentials
                in clearly organised sections.
              </ExampleBox>
            </InfoCard>

            <InfoCard icon={TrendingUp} title="Customer Retention">
              Businesses use feedback, service improvements and loyalty
              programmes to encourage repeat purchases.
              <ExampleBox>
                A grocery store provides a loyalty benefit to customers
                who regularly shop there.
              </ExampleBox>
            </InfoCard>
          </div>
        </div>
      </section>

      {/* ETHICS */}
      <section className="px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <SectionHeading
            eyebrow="Responsible marketing"
            title="Ethics in Consumer Psychology"
            description="Understanding consumer psychology gives businesses the ability to influence purchasing decisions. That influence should be exercised responsibly."
          />

          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-green-200 bg-green-50 p-6">
              <div className="mb-4 flex items-center gap-3">
                <ShieldCheck className="text-green-700" size={28} />
                <h3 className="text-xl font-bold text-green-900">
                  Ethical Practices
                </h3>
              </div>
              <ul className="space-y-3">
                {[
                  "Providing truthful product information.",
                  "Displaying genuine prices and discounts.",
                  "Respecting customer privacy.",
                  "Avoiding misleading advertisements.",
                  "Making terms and conditions clear.",
                  "Allowing customers to make informed choices.",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-7 text-green-900">
                    <CheckCircle2 className="mt-1 shrink-0" size={18} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-red-200 bg-red-50 p-6">
              <div className="mb-4 flex items-center gap-3">
                <AlertCircle className="text-red-700" size={28} />
                <h3 className="text-xl font-bold text-red-900">
                  Unethical Practices
                </h3>
              </div>
              <ul className="space-y-3">
                {[
                  "Displaying fake discounts.",
                  "Making false product claims.",
                  "Hiding important charges.",
                  "Using misleading scarcity messages.",
                  "Manipulating customer reviews.",
                  "Pressuring vulnerable customers into purchases.",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-7 text-red-900">
                    <AlertCircle className="mt-1 shrink-0" size={18} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border-l-4 border-blue-600 bg-blue-50 p-6">
            <p className="font-bold text-blue-900">
              The central principle
            </p>
            <p className="mt-2 leading-8 text-slate-700">
              The purpose of understanding consumers should be to provide
              better products, relevant information and positive shopping
              experiences, not to manipulate people into purchasing
              unnecessary products.
            </p>
          </div>
        </div>
      </section>
<AdSlot />
      {/* PRACTICAL CASE STUDY */}
      <section className="bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-950 px-5 py-20 text-white sm:px-8">
        <div className="mx-auto max-w-5xl">
          <SectionHeading
            dark
            eyebrow="Putting concepts together"
            title="Practical Example: Why Does a Customer Choose One Shop?"
            description="Consider a customer who wants to purchase a packet of coffee. Two nearby shops offer the same brand at similar prices."
          />

          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-white/20 bg-white/10 p-6">
              <Store className="mb-4 text-blue-200" size={32} />
              <h3 className="text-xl font-bold">Shop A</h3>
              <ul className="mt-5 space-y-3 text-sm leading-7 text-blue-100">
                <li>• Disorganised product display.</li>
                <li>• Seller provides limited information.</li>
                <li>• Customer has no previous experience.</li>
                <li>• Unclear return or exchange information.</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-blue-300 bg-blue-500/20 p-6">
              <Store className="mb-4 text-blue-200" size={32} />
              <h3 className="text-xl font-bold">Shop B</h3>
              <ul className="mt-5 space-y-3 text-sm leading-7 text-blue-100">
                <li>• Clean and organised product display.</li>
                <li>• Seller answers questions clearly.</li>
                <li>• Customer has previously received good service.</li>
                <li>• Prices and product information are transparent.</li>
              </ul>
            </div>
          </div>

          <div className="mt-7 rounded-2xl bg-white p-7 text-slate-900">
            <h3 className="text-xl font-bold">
              Why might the customer choose Shop B?
            </h3>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {[
                ["Perception", "The organised shop creates a more positive impression."],
                ["Trust", "The seller communicates clearly and honestly."],
                ["Previous Experience", "Earlier good service creates familiarity."],
                ["Confidence", "The customer feels more comfortable making the purchase."],
              ].map(([title, description]) => (
                <div key={title} className="rounded-xl bg-blue-50 p-4">
                  <p className="font-bold text-blue-800">{title}</p>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    {description}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-5 text-sm leading-7 text-slate-600">
              This is an illustrative example. Customers may still choose
              Shop A for convenience, availability or other personal reasons.
              Consumer decisions are influenced by several factors, not just
              the appearance of a shop.
            </p>
          </div>
        </div>
      </section>

      {/* MISCONCEPTIONS */}
      <section className="px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <SectionHeading
            eyebrow="Understanding correctly"
            title="Common Misconceptions About Consumer Psychology"
            description="Consumer decisions are more complex than simply choosing the cheapest or most attractive product."
          />

          <div className="space-y-4">
            {[
              [
                "Consumers always choose the cheapest product.",
                "Customers also consider quality, convenience, reliability, brand reputation and personal preferences.",
              ],
              [
                "All purchasing decisions are logical.",
                "Emotions, habits, social influence and psychological biases can influence decisions.",
              ],
              [
                "Discounts always increase sales.",
                "The effect depends on the product, customer needs, perceived value and the actual attractiveness of the offer.",
              ],
              [
                "Only large companies need consumer psychology.",
                "Local shops, small businesses, online sellers and service providers can all benefit from understanding their customers.",
              ],
              [
                "A satisfied customer will always return.",
                "Future purchases also depend on changing needs, prices, availability, competition and customer circumstances.",
              ],
              [
                "Advertising completely controls purchasing decisions.",
                "Advertising can influence awareness and preferences, but consumers also consider personal needs, budgets and experiences.",
              ],
            ].map(([wrong, correct]) => (
              <div key={wrong} className="grid gap-3 rounded-2xl border border-blue-100 bg-white p-5 md:grid-cols-2">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-red-600">
                    Misconception
                  </p>
                  <p className="mt-2 font-bold text-slate-900">{wrong}</p>
                </div>
                <div className="md:border-l md:border-blue-100 md:pl-6">
                  <p className="text-xs font-bold uppercase tracking-widest text-green-700">
                    Correct Understanding
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{correct}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-white px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-4xl">
          <SectionHeading
            eyebrow="Common questions"
            title="Frequently Asked Questions"
            description="Answers to important questions about consumer psychology and purchasing behaviour."
          />

          <div className="space-y-4">
            {faqs.map((item) => (
              <details
                key={item.q}
                className="group rounded-2xl border border-blue-100 bg-white p-5 shadow-sm open:bg-blue-50/40"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-slate-900">
                  {item.q}
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700 transition group-open:rotate-45">
                    <span className="text-xl">+</span>
                  </span>
                </summary>
                <p className="mt-4 border-t border-blue-100 pt-4 text-sm leading-8 text-slate-600">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

   

   
    </main>
  );
}
