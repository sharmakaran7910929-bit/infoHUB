
import {
  Megaphone,
  Target,
  Users,
  ShoppingCart,
  Monitor,
  Smartphone,
  Newspaper,
  Radio,
  Tv,
  Globe,
  Search,
  MousePointerClick,
  Eye,
  TrendingUp,
  BarChart3,
  Store,
  Building2,
  Lightbulb,
  CheckCircle2,
  ArrowRight,
  ArrowDown,
  MessageSquare,
  Package,
  Award,
  ShieldAlert,
  Scale,
  Repeat,
  MapPin,
  Camera,
  Play,
  Car,
  Wallet,
  CreditCard,
  Percent,
  Mail,
  Video,
  Check,
  XCircle,
  AlertTriangle,
  Info,
  CircleDollarSign,
  ClipboardCheck,
  MessageCircle,
  BriefcaseBusiness,
  Gift,
  Handshake,
  ShoppingBag,
  Network,
  Star,
  RadioTower,
} from "lucide-react";
import AdSlot from "../../../components/AdSlot";

export const metadata = {
  title: "Advertising - Meaning, Types, Examples and How It Works | PriceTag HUB",
  description:
    "Learn what advertising is, its objectives, types, digital advertising methods, real-world business examples, costs, effectiveness, advantages and limitations.",
};

const objectives = [
  {
    icon: Eye,
    title: "Create Brand Awareness",
    desc: "Help people discover a business, product or service they may not have heard about.",
    example: "A new clothing brand introduces itself through social media advertisements.",
  },
  {
    icon: Package,
    title: "Introduce New Products",
    desc: "Explain the features, uses and availability of a newly launched product.",
    example: "A smartphone company advertises its latest model and highlights its camera and battery.",
  },
  {
    icon: ShoppingCart,
    title: "Generate Sales",
    desc: "Encourage interested people to purchase a product or use a service.",
    example: "An online retailer advertises a limited-period discount to attract buyers.",
  },
  {
    icon: Award,
    title: "Build Brand Preference",
    desc: "Give customers reasons to recognise and prefer one brand over competing alternatives.",
    example: "A sportswear company communicates its design, quality and performance advantages.",
  },
  {
    icon: Repeat,
    title: "Encourage Repeat Purchases",
    desc: "Remind existing customers about products, offers and additional services.",
    example: "A food delivery app promotes a special offer to encourage customers to order again.",
  },
  {
    icon: Users,
    title: "Reach New Customers",
    desc: "Connect a business with potential customers beyond its existing customer base.",
    example: "A coaching institute promotes its new courses to students in nearby areas.",
  },
];

const advertisingTypes = [
  {
    icon: Newspaper,
    title: "Print Advertising",
    desc: "Advertisements published in newspapers, magazines, brochures and other printed materials.",
    example: "A property developer publishes a newspaper advertisement to promote new apartments.",
    reality: "Print can work well when a business wants to reach a particular local or established readership.",
  },
  {
    icon: Tv,
    title: "Television Advertising",
    desc: "Promotional messages shown during television programmes, sports events and other broadcasts.",
    example: "A consumer goods company runs a commercial ads during a cricket match.",
    reality: "Television can provide broad exposure, but production and broadcasting can be expensive.",
  },
  {
    icon: Radio,
    title: "Radio Advertising",
    desc: "Audio advertisements broadcast through radio stations and audio programmes.",
    example: "A jewellery store promotes its festive discount through a local FM station.",
    reality: "It can reach commuters and local listeners, although it cannot rely on visual product demonstrations.",
  },
  {
    icon: MapPin,
    title: "Outdoor Advertising",
    desc: "Advertisements displayed in public spaces through billboards, banners, hoardings and digital screens.",
    example: "A new shopping mall displays a large billboard near a busy road.",
    reality: "Location matters. A billboard may receive many views but not necessarily from interested customers.",
  },
  {
    icon: Globe,
    title: "Digital Advertising",
    desc: "Paid promotional messages delivered through search engines, websites, social media and applications.",
    example: "A business pays to display a product advertisement to people browsing a social platform.",
    reality: "Digital advertising offers targeting and measurement, but poor targeting can waste money.",
  },
  {
    icon: Mail,
    title: "Direct Advertising",
    desc: "Promotional messages delivered directly through email, SMS, catalogues and similar channels.",
    example: "An online store sends a promotional email about its seasonal sale to subscribers.",
    reality: "It works best when people have a reason to receive the messages. Unwanted messages damage trust.",
  },
  {
    icon: Video,
    title: "Video Advertising",
    desc: "Advertisements presented through video content on streaming platforms, websites and social networks.",
    example: "A smartphone company runs a video demonstrating its camera features.",
    reality: "Video can explain a product effectively, but viewers may skip an uninteresting advertisement.",
  },
  {
    icon: Store,
    title: "Point-Of-Sale Advertising",
    desc: "Promotional displays placed where customers make purchasing decisions, such as shops and checkout counters.",
    example: "A supermarket places a special offer display beside its checkout counter.",
    reality: "Customers are already near the buying decision, making product visibility important.",
  },
];

const digitalPlatforms = [
  {
    icon: Search,
    title: "Search Advertising",
    platform: "Search Engines",
    desc: "Businesses pay to display advertisements when people search for relevant products or services.",
    example: "Someone searches for 'website development company in Ludhiana' and sees a sponsored result.",
    benefit: "Can reach people who are already expressing interest through their searches.",
  },
  {
    icon: Camera,
    title: "Social Media Advertising",
    platform: "Social Networks",
    desc: "Businesses pay social platforms to display promotional content to selected audiences.",
    example: "A clothing store promotes its latest collection to people in a selected city.",
    benefit: "Useful for product discovery, visual promotion and audience targeting.",
  },
  {
    icon: Play,
    title: "Video Platform Advertising",
    platform: "Online Video Platforms",
    desc: "Businesses run video or other advertising formats alongside video content.",
    example: "A mobile brand shows a short advertisement before a technology review video.",
    benefit: "Useful for demonstrating products and communicating messages through video.",
  },
  {
    icon: Globe,
    title: "Display Advertising",
    platform: "Websites And Apps",
    desc: "Graphical advertisements appear on participating websites and mobile applications.",
    example: "A person reading a technology article sees an advertisement for a laptop.",
    benefit: "Can introduce products while people browse relevant online content.",
  },
  {
    icon: Smartphone,
    title: "Mobile Advertising",
    platform: "Mobile Applications",
    desc: "Advertisements are delivered through mobile apps, games and mobile experiences.",
    example: "A free mobile game displays an advertisement between game sessions.",
    benefit: "Provides opportunities to reach mobile users, but excessive interruptions can frustrate them.",
  },
  {
    icon: Mail,
    title: "Email Advertising",
    platform: "Email Campaigns",
    desc: "Promotional campaigns communicate offers and product updates to subscribers.",
    example: "An online retailer sends an email about its upcoming festive sale.",
    benefit: "Can reach an existing audience directly when communication is relevant and permitted.",
  },
];

const metrics = [
  {
    icon: Eye,
    title: "Impressions",
    desc: "The number of times an advertisement is displayed.",
    reality: "An impression does not mean someone actually paid attention to the advertisement.",
  },
  {
    icon: Users,
    title: "Reach",
    desc: "The number of different people who see an advertisement.",
    reality: "Reach helps estimate how many individuals were exposed to the message.",
  },
  {
    icon: MousePointerClick,
    title: "Clicks",
    desc: "The number of times people click an advertisement.",
    reality: "A click shows interest in visiting the destination, not necessarily an intention to buy.",
  },
  {
    icon: Percent,
    title: "Click-Through Rate",
    desc: "The percentage of impressions that resulted in clicks.",
    reality: "A high CTR can be useful, but it does not guarantee profitable sales.",
  },
  {
    icon: CheckCircle2,
    title: "Conversions",
    desc: "The number of people who complete a desired action, such as purchasing or submitting a form.",
    reality: "Conversions must be defined and tracked correctly to understand campaign performance.",
  },
  {
    icon: TrendingUp,
    title: "ROAS",
    desc: "Return on Ad Spend compares attributed revenue with advertising expenditure.",
    reality: "Revenue is not profit. Product costs, delivery and other expenses still matter.",
  },
];

const mistakes = [
  {
    title: "Targeting Everyone",
    desc: "Showing advertisements to a broad audience without considering who is likely to purchase.",
    solution: "Define the intended customer and select relevant audiences and locations.",
  },
  {
    title: "Focusing Only On Clicks",
    desc: "Celebrating many clicks without checking whether visitors take meaningful action.",
    solution: "Measure enquiries, purchases, qualified leads and actual business outcomes.",
  },
  {
    title: "Using Weak Landing Pages",
    desc: "Sending people to a confusing, slow or irrelevant website after they click.",
    solution: "Make the destination clear, mobile-friendly and consistent with the advertisement.",
  },
  {
    title: "Making Misleading Promises",
    desc: "Advertising unrealistic discounts, unsupported claims or benefits that cannot be delivered.",
    solution: "Use truthful claims and clearly explain important conditions.",
  },
  {
    title: "Ignoring Advertising Costs",
    desc: "Considering advertising successful simply because it generated revenue.",
    solution: "Compare revenue with product costs, operating expenses and campaign expenditure.",
  },
  {
    title: "Stopping Too Early",
    desc: "Making decisions from very limited campaign data without understanding the results.",
    solution: "Allow enough time and data for meaningful evaluation while controlling spending.",
  },
];

const faqs = [
  {
    q: "What Is Advertising In Simple Words?",
    a: "Advertising is a paid method of communicating promotional messages to an audience to create awareness, introduce products, generate interest or encourage sales.",
  },
  {
    q: "What Is The Main Purpose Of Advertising?",
    a: "The main purpose is to communicate with potential customers and influence their awareness, interest or buying decisions. The specific objective depends on the business and campaign.",
  },
  {
    q: "What Are The Main Types Of Advertising?",
    a: "Common types include print, television, radio, outdoor, digital, direct, video and point-of-sale advertising. These categories describe different ways of delivering promotional messages.",
  },
  {
    q: "What Is The Difference Between Advertising And Marketing?",
    a: "Marketing is the broader process of understanding customer needs, creating value, pricing products, distributing them and promoting them. Advertising is one paid promotional method within marketing.",
  },
  {
    q: "Is Advertising The Same As Promotion?",
    a: "No. Promotion is a broader marketing activity that includes advertising, public relations, sales promotions, personal selling and other communication methods. Advertising is one part of promotion.",
  },
  {
    q: "Can Small Businesses Advertise With A Small Budget?",
    a: "Yes. A small business can start with a controlled budget, select a specific audience, promote one relevant offer and measure enquiries or sales. A large budget is not automatically necessary.",
  },
  {
    q: "Does Advertising Guarantee Sales?",
    a: "No. Advertising can attract attention and generate interest, but sales also depend on product quality, pricing, customer trust, competition, availability and the buying experience.",
  },
  {
    q: "What Is Digital Advertising?",
    a: "Digital advertising is paid promotion delivered through online channels such as search engines, websites, social media, mobile applications and video platforms.",
  },
  {
    q: "What Is An Advertising Campaign?",
    a: "An advertising campaign is a planned set of advertisements designed around a particular objective, audience, message, budget and time period.",
  },
  {
    q: "How Do Businesses Know If Advertising Is Working?",
    a: "Businesses monitor metrics such as reach, impressions, clicks, enquiries, conversions, sales and return on advertising spend. The most useful measure depends on the campaign objective.",
  },
];

function SectionIntro({ eyebrow, title, description, dark = false }) {
  return (
    <div className="mb-9 max-w-3xl">
      <p className={`text-sm font-bold uppercase tracking-widest ${dark ? "text-blue-400" : "text-blue-600"}`}>
        {eyebrow}
      </p>
      <h2 className={`mt-2 text-2xl font-bold sm:text-3xl ${dark ? "text-white" : "text-slate-950"}`}>
        {title}
      </h2>
      <p className={`mt-4 leading-7 ${dark ? "text-slate-300" : "text-slate-600"}`}>
        {description}
      </p>
    </div>
  );
}

export default function AdvertisingPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-slate-800">

      {/* HERO */}

      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-100">
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-blue-200/30 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-sky-200/30 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2 lg:py-24">

          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-sm font-bold text-blue-700 shadow-sm">
              <Megaphone size={16} />
              MARKETING FUNDAMENTALS
            </div>

            <h1 className="text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Advertising
              <span className="mt-2 block text-blue-700">
                How Businesses Reach Customers
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
              Why do companies spend money promoting products even when
              customers already know their brands? Understand how advertising
              works, where businesses use it, how it influences buying
              decisions and why some campaigns succeed while others waste money.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <div className="flex items-center gap-2 rounded-lg border border-blue-100 bg-white px-4 py-3 text-sm font-bold text-slate-700 shadow-sm">
                <Target size={17} className="text-blue-600" />
                Business Strategy
              </div>
              <div className="flex items-center gap-2 rounded-lg border border-blue-100 bg-white px-4 py-3 text-sm font-bold text-slate-700 shadow-sm">
                <Monitor size={17} className="text-blue-600" />
                Digital Platforms
              </div>
              <div className="flex items-center gap-2 rounded-lg border border-blue-100 bg-white px-4 py-3 text-sm font-bold text-slate-700 shadow-sm">
                <BarChart3 size={17} className="text-blue-600" />
                Real-World Examples
              </div>
            </div>
          </div>

          {/* HERO DIAGRAM */}

          <div className="relative mx-auto w-full max-w-lg">
            <div className="rounded-3xl border border-blue-100 bg-white/90 p-5 shadow-xl shadow-blue-900/5 sm:p-8">

              <div className="mb-6 flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-blue-600">
                    Advertising Process
                  </p>
                  <h2 className="mt-1 text-xl font-bold text-slate-900">
                    From Business To Customer
                  </h2>
                </div>
                <div className="rounded-xl bg-blue-50 p-3 text-blue-700">
                  <Megaphone size={27} />
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-4 rounded-2xl border border-blue-100 bg-blue-50/80 p-4">
                  <div className="rounded-xl bg-white p-3 text-blue-700 shadow-sm">
                    <Building2 size={25} />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">Business</p>
                    <p className="text-sm text-slate-500">Has a product or service to offer</p>
                  </div>
                </div>

                <div className="flex justify-center text-blue-400">
                  <ArrowDown size={22} />
                </div>

                <div className="flex items-center gap-4 rounded-2xl border border-blue-100 bg-blue-50/80 p-4">
                  <div className="rounded-xl bg-white p-3 text-blue-700 shadow-sm">
                    <Target size={25} />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">Advertising Message</p>
                    <p className="text-sm text-slate-500">Communicates value and offers</p>
                  </div>
                </div>

                <div className="flex justify-center text-blue-400">
                  <ArrowDown size={22} />
                </div>

                <div className="grid grid-cols-3 gap-2">
                  {[
                    { icon: Search, name: "Search" },
                    { icon: Camera, name: "Social" },
                    { icon: Tv, name: "Media" },
                  ].map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.name} className="rounded-xl border border-blue-100 bg-white p-3 text-center">
                        <Icon size={22} className="mx-auto text-blue-600" />
                        <p className="mt-2 text-xs font-bold text-slate-700">{item.name}</p>
                      </div>
                    );
                  })}
                </div>

                <div className="flex justify-center text-blue-400">
                  <ArrowDown size={22} />
                </div>

                <div className="flex items-center gap-4 rounded-2xl border border-blue-200 bg-blue-600 p-4 text-white">
                  <div className="rounded-xl bg-white/15 p-3">
                    <Users size={25} />
                  </div>
                  <div>
                    <p className="font-bold">Potential Customers</p>
                    <p className="text-sm text-blue-100">See the message and may respond</p>
                  </div>
                </div>
              </div>

              <p className="mt-5 text-center text-xs leading-5 text-slate-400">
                Seeing an advertisement does not guarantee a purchase.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* WHAT YOU WILL UNDERSTAND */}

      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <SectionIntro
          eyebrow="YOUR LEARNING GUIDE"
          title="What You Will Understand"
          description="Understand how businesses communicate with customers, how advertisements are delivered and what determines whether promotional spending produces useful results."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            [Target, "Meaning And Purpose", "Why businesses advertise and what they want to achieve."],
            [RadioTower, "Advertising Channels", "How newspapers, television, outdoor media and digital platforms are used."],
            [Network, "Advertising Vs Marketing", "Why advertising is only one part of a larger business activity."],
            [Users, "Customer Behaviour", "How advertising can influence awareness, interest and buying decisions."],
            [Wallet, "Advertising Costs", "Why businesses pay for advertisements and how budgets are used."],
            [BarChart3, "Performance Measurement", "How clicks, conversions, sales and ROAS help evaluate campaigns."],
          ].map(([Icon, title, desc]) => (
            <div key={title} className="flex gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <div className="h-fit rounded-xl bg-blue-50 p-3 text-blue-700">
                <Icon size={23} />
              </div>
              <div>
                <h3 className="font-bold text-slate-900">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MEANING */}

      <section className="bg-slate-50 py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[1.3fr_0.7fr]">

          <div>
            <SectionIntro
              eyebrow="START WITH THE BASICS"
              title="What Is Advertising?"
              description="Understand the concept through an everyday business situation."
            />

            <p className="leading-8 text-slate-700">
              Advertising is a paid form of communication through which
              businesses, organisations or individuals promote products,
              services, brands or ideas to an intended audience.
            </p>

            <p className="mt-4 leading-8 text-slate-700">
              Its purpose may be to make people aware of a product, explain
              its benefits, introduce a new service, encourage enquiries or
              influence customers to make a purchase.
            </p>

            <p className="mt-4 leading-8 text-slate-700">
              Advertisements can appear almost anywhere: television,
              newspapers, roadside billboards, search results, social media,
              mobile applications and websites. The communication channel
              changes, but the central idea remains the same: a message is
              delivered to an audience to achieve a promotional objective.
            </p>

            <div className="mt-6 rounded-2xl border-l-4 border-blue-600 bg-white p-5 shadow-sm">
              <p className="font-bold text-slate-900">A Simple Example</p>
              <p className="mt-2 leading-7 text-slate-600">
                Imagine a new restaurant opening in your neighbourhood. The
                owner pays to display advertisements on a social platform
                showing the food, location and opening offers. This is
                advertising because the restaurant is paying to communicate
                a promotional message to potential customers.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-6">
            <div className="rounded-2xl bg-blue-600 p-5 text-white">
              <Megaphone size={34} />
              <h3 className="mt-4 text-xl font-bold">The Central Idea</h3>
              <p className="mt-2 text-sm leading-7 text-blue-100">
                A business pays to communicate a message that may help it
                achieve a particular objective.
              </p>
            </div>

            <div className="mt-5 space-y-4">
              {[
                ["Who?", "The advertiser"],
                ["What?", "A promotional message"],
                ["To Whom?", "An intended audience"],
                ["Where?", "An advertising channel"],
                ["Why?", "A business objective"],
              ].map(([q, a]) => (
                <div key={q} className="flex items-center justify-between gap-3 border-b border-blue-100 pb-3">
                  <span className="text-sm font-bold text-slate-700">{q}</span>
                  <span className="text-right text-sm text-slate-600">{a}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EVERYDAY LIFE */}
<AdSlot />
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <SectionIntro
          eyebrow="LOOK AROUND YOU"
          title="Advertising In Everyday Life"
          description="Advertising is not limited to television commercials or newspaper advertisements. It is part of many ordinary activities. Consider how often you encounter promotional messages during a normal day."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            [Smartphone, "Using Social Media", "You scroll through a social platform and see a paid promotion for a clothing brand."],
            [ShoppingBag, "Shopping", "You notice a supermarket display announcing a special price on a product."],
            [Car, "Travelling", "You pass a large roadside billboard promoting a new residential project."],
            [Play, "Watching Videos", "A video advertisement appears before the content you selected."],
          ].map(([Icon, title, text]) => (
            <div key={title} className="rounded-2xl border border-slate-100 p-5 shadow-sm">
              <div className="mb-4 inline-flex rounded-xl bg-blue-50 p-3 text-blue-700">
                <Icon size={25} />
              </div>
              <h3 className="font-bold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-2xl bg-blue-50 p-6 sm:p-8">
          <div className="flex items-start gap-4">
            <Lightbulb size={27} className="shrink-0 text-blue-700" />
            <div>
              <h3 className="font-bold text-slate-900">An Important Observation</h3>
              <p className="mt-2 leading-7 text-slate-700">
                You may encounter dozens of advertisements without purchasing
                anything. This is normal. Advertising creates opportunities
                for businesses to communicate with potential customers; it
                does not control every customer's decision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW ADVERTISING WORKS */}

      <section className="bg-slate-950 py-16 text-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionIntro
            eyebrow="THE BUSINESS PROCESS"
            title="How Does Advertising Work?"
            description="Advertising involves more than creating an attractive poster or running a social media campaign. Businesses make a series of decisions before and after publishing an advertisement."
            dark
          />

          <div className="grid gap-4 md:grid-cols-5">
            {[
              [Target, "01", "Set An Objective", "Decide whether the goal is awareness, enquiries, website visits or sales."],
              [Users, "02", "Choose An Audience", "Identify the people who may need or want the product."],
              [MessageSquare, "03", "Create A Message", "Explain the offer, benefits and reasons to take action."],
              [Monitor, "04", "Select A Channel", "Choose search, social media, television, print or another medium."],
              [BarChart3, "05", "Measure Results", "Review audience response, conversions, costs and business outcomes."],
            ].map(([Icon, number, title, desc], index) => (
              <div key={number} className="relative rounded-2xl border border-slate-700 bg-slate-900 p-5">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-blue-400">{number}</span>
                  <Icon size={25} className="text-blue-400" />
                </div>
                <h3 className="mt-5 font-bold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">{desc}</p>
                {index !== 4 && (
                  <div className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-blue-600 p-1 md:block">
                    <ArrowRight size={15} />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-blue-500/30 bg-blue-500/10 p-6">
            <p className="font-bold text-blue-300">Remember</p>
            <p className="mt-2 leading-7 text-slate-300">
              An advertisement may be creative and attractive, but if it
              reaches the wrong audience or promotes an offer people do not
              need, the campaign may still fail.
            </p>
          </div>
        </div>
      </section>

      {/* ADVERTISING VS MARKETING */}

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <SectionIntro
          eyebrow="UNDERSTANDING THE DIFFERENCE"
          title="Advertising Vs Marketing"
          description="These two terms are often used interchangeably, but they do not mean the same thing. Advertising is one activity within the broader marketing process."
        />

        <div className="grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl border border-blue-200 bg-blue-50/60 p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-white p-3 text-blue-700">
                <Megaphone size={26} />
              </div>
              <h3 className="text-xl font-bold text-slate-950">Advertising</h3>
            </div>
            <p className="mt-4 leading-7 text-slate-700">
              Advertising is a paid communication activity used to promote a
              product, service, brand or idea.
            </p>
            <p className="mt-4 font-bold text-slate-900">Example</p>
            <p className="mt-2 leading-7 text-slate-600">
              Paying a search engine to display an advertisement when someone
              searches for a product.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-blue-50 p-3 text-blue-700">
                <BarChart3 size={26} />
              </div>
              <h3 className="text-xl font-bold text-slate-950">Marketing</h3>
            </div>
            <p className="mt-4 leading-7 text-slate-700">
              Marketing is the wider process of understanding customers,
              creating value, setting prices, distributing products and
              communicating with the market.
            </p>
            <p className="mt-4 font-bold text-slate-900">Example</p>
            <p className="mt-2 leading-7 text-slate-600">
              Researching customer needs, designing a product, deciding its
              price, selecting stores and promoting it.
            </p>
          </div>
        </div>

        <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200">
          <div className="bg-slate-900 px-5 py-4 text-white">
            <h3 className="font-bold">A Practical Comparison</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[550px] text-left text-sm">
              <thead className="bg-slate-50">
                <tr>
                  <th className="p-4 font-bold text-slate-900">Basis</th>
                  <th className="p-4 font-bold text-slate-900">Advertising</th>
                  <th className="p-4 font-bold text-slate-900">Marketing</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  ["Scope", "Narrower activity", "Broader business process"],
                  ["Main Focus", "Paid promotional communication", "Creating and delivering customer value"],
                  ["Activities", "Ads, campaigns and paid placements", "Research, product, price, distribution and promotion"],
                  ["Cost", "Usually involves advertising expenditure", "May involve many different costs"],
                  ["Relationship", "Part of promotion", "Includes advertising as one activity"],
                ].map((row) => (
                  <tr key={row[0]}>
                    {row.map((cell, i) => (
                      <td key={i} className={`p-4 leading-6 ${i === 0 ? "font-bold text-slate-900" : "text-slate-600"}`}>
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* OBJECTIVES */}
<AdSlot />
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionIntro
            eyebrow="WHY BUSINESSES ADVERTISE"
            title="Main Objectives Of Advertising"
            description="Businesses do not always advertise for immediate sales. The objective depends on the product, business stage, target audience and competitive situation."
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {objectives.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
                  <div className="mb-4 inline-flex rounded-xl bg-blue-50 p-3 text-blue-700">
                    <Icon size={25} />
                  </div>
                  <h3 className="font-bold text-slate-900">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{item.desc}</p>
                  <div className="mt-4 rounded-xl bg-slate-50 p-4">
                    <p className="text-xs font-bold uppercase tracking-wide text-blue-600">Example</p>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{item.example}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TYPES OF ADVERTISING */}

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <SectionIntro
          eyebrow="ADVERTISING CHANNELS"
          title="Types Of Advertising"
          description="Advertising can be classified according to the medium used to deliver the message. Each type has different costs, audience characteristics and practical uses."
        />

        <div className="grid gap-5 sm:grid-cols-2">
          {advertisingTypes.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition hover:shadow-md">
                <div className="flex items-start gap-4">
                  <div className="rounded-xl bg-blue-50 p-3 text-blue-700">
                    <Icon size={26} />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="font-bold text-slate-950">{item.title}</h3>
                      <span className="text-xs font-bold text-blue-600">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <p className="mt-3 text-sm leading-6 text-slate-600">{item.desc}</p>
                  </div>
                </div>

                <div className="mt-5 rounded-xl bg-slate-50 p-4">
                  <p className="text-xs font-bold uppercase tracking-wide text-blue-600">Real-World Example</p>
                  <p className="mt-2 text-sm leading-6 text-slate-700">{item.example}</p>
                </div>

                <p className="mt-4 text-sm leading-6 text-slate-500">
                  <span className="font-bold text-slate-800">Reality: </span>
                  {item.reality}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* DIGITAL ADVERTISING */}
<AdSlot />
      <section className="bg-blue-50/70 py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionIntro
            eyebrow="THE ONLINE WORLD"
            title="Understanding Digital Advertising"
            description="Digital advertising allows businesses to pay for promotional exposure across internet-based platforms. It has become an important channel because people use search engines, social networks, websites and mobile applications throughout the day."
          />

          <div className="grid gap-5 md:grid-cols-2">
            {digitalPlatforms.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
                  <div className="flex items-center gap-4">
                    <div className="rounded-xl bg-blue-50 p-3 text-blue-700">
                      <Icon size={25} />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900">{item.title}</h3>
                      <p className="mt-1 text-xs font-bold text-blue-600">{item.platform}</p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{item.desc}</p>
                  <div className="mt-4 rounded-xl bg-slate-50 p-4">
                    <p className="text-xs font-bold uppercase text-slate-500">Example</p>
                    <p className="mt-2 text-sm leading-6 text-slate-700">{item.example}</p>
                  </div>
                  <p className="mt-4 text-sm leading-6 text-slate-600">
                    <span className="font-bold text-slate-900">Why Businesses Use It: </span>
                    {item.benefit}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-8 rounded-2xl border border-blue-200 bg-white p-6 sm:p-8">
            <h3 className="text-xl font-bold text-slate-950">
              A Digital Advertising Example
            </h3>
            <p className="mt-3 leading-7 text-slate-600">
              Suppose a website development company wants to attract clients
              in Ludhiana. It creates a search advertising campaign for people
              looking for website development services in that area.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-4">
              {[
                [Search, "Search", "Customer looks for a service"],
                [Megaphone, "Advertisement", "Business appears in sponsored results"],
                [Globe, "Website", "Customer visits the business website"],
                [MessageSquare, "Enquiry", "Customer may submit a contact form"],
              ].map(([Icon, title, desc], i) => (
                <div key={title} className="relative rounded-xl bg-blue-50 p-4 text-center">
                  <Icon className="mx-auto text-blue-700" size={25} />
                  <p className="mt-3 text-sm font-bold text-slate-900">{title}</p>
                  <p className="mt-2 text-xs leading-5 text-slate-600">{desc}</p>
                  {i !== 3 && (
                    <ArrowRight className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 text-blue-500 sm:block" size={18} />
                  )}
                </div>
              ))}
            </div>

            <p className="mt-5 text-sm leading-6 text-slate-500">
              This process does not guarantee an enquiry or sale. The result
              depends on the advertisement, competition, website experience,
              pricing and customer requirements.
            </p>
          </div>
        </div>
      </section>

      {/* REAL-WORLD BRANDS */}
<AdSlot />
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <SectionIntro
          eyebrow="LEARNING FROM BUSINESSES"
          title="Real-World Advertising Examples"
          description="Different companies use advertising in different ways. Some focus on product features, others build emotional connections, while some use offers and topical campaigns to attract attention."
        />

        <div className="space-y-5">
          {[
            {
              name: "Coca-Cola",
              category: "Brand Awareness And Emotional Connection",
              icon: Gift,
              example: "Coca-Cola frequently uses advertising around celebrations, social gatherings and shared experiences.",
              lesson: "Advertising can communicate a feeling and brand identity, not just product information.",
            },
            {
              name: "Nike",
              category: "Brand Positioning And Inspiration",
              icon: Award,
              example: "Nike advertising often highlights sports, athletes, personal achievement and determination.",
              lesson: "A brand can use advertising to communicate values and build a distinctive identity.",
            },
            {
              name: "Apple",
              category: "Product Features And Brand Perception",
              icon: Smartphone,
              example: "Apple uses product-focused campaigns to highlight features, design and the experience of using its devices.",
              lesson: "Advertising can help customers understand what makes a product different from alternatives.",
            },
            {
              name: "Amul",
              category: "Topical And Memorable Communication",
              icon: MessageCircle,
              example: "Amul is widely recognised for topical advertising that connects its brand with current events and everyday conversations.",
              lesson: "A memorable and relevant message can keep a brand visible in public conversations.",
            },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.name} className="grid gap-5 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm md:grid-cols-[180px_1fr] md:items-center">
                <div className="flex items-center gap-4 md:flex-col md:items-start">
                  <div className="rounded-2xl bg-blue-50 p-4 text-blue-700">
                    <Icon size={30} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-950">{item.name}</h3>
                    <p className="mt-1 text-xs font-bold text-blue-600">{item.category}</p>
                  </div>
                </div>
                <div>
                  <p className="leading-7 text-slate-700">{item.example}</p>
                  <div className="mt-3 rounded-xl bg-blue-50 p-4">
                    <p className="text-xs font-bold uppercase tracking-wide text-blue-700">What We Learn</p>
                    <p className="mt-2 text-sm leading-6 text-slate-700">{item.lesson}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* PLANNING AN ADVERTISEMENT */}

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionIntro
            eyebrow="BEHIND A CAMPAIGN"
            title="How Businesses Plan An Advertisement"
            description="Before spending money on advertising, a business needs to make important decisions. A well-planned advertisement connects the right audience with a relevant message and a useful next step."
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              [Users, "Identify The Audience", "Understand who may purchase the product, including their needs, location and interests."],
              [Lightbulb, "Choose The Message", "Decide what customers should understand or remember after seeing the advertisement."],
              [Package, "Explain The Offer", "Present the product, benefits, pricing and important conditions clearly."],
              [Monitor, "Select The Platform", "Choose a channel that matches the audience and campaign objective."],
              [Wallet, "Set The Budget", "Decide how much the business can afford to spend and how money will be allocated."],
              [ClipboardCheck, "Measure Performance", "Track the results and improve the campaign based on meaningful data."],
            ].map(([Icon, title, desc]) => (
              <div key={title} className="rounded-2xl border border-slate-100 bg-white p-6">
                <div className="mb-4 inline-flex rounded-xl bg-blue-50 p-3 text-blue-700">
                  <Icon size={25} />
                </div>
                <h3 className="font-bold text-slate-900">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ADVERTISING COST */}

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <SectionIntro
          eyebrow="THE FINANCIAL SIDE"
          title="How Much Does Advertising Cost?"
          description="Advertising does not have one fixed price. The cost depends on the platform, audience, competition, location, advertising format, campaign duration and the number of people a business wants to reach."
        />

        <div className="grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
            <div className="mb-4 w-fit rounded-xl bg-blue-50 p-3 text-blue-700">
              <CreditCard size={27} />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Traditional Advertising Costs</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Newspaper space, television slots, radio airtime, outdoor
              displays and printed promotional materials may involve media
              charges, production costs and distribution expenses.
            </p>
            <p className="mt-4 text-sm leading-6 text-slate-500">
              The price can vary based on publication circulation, channel,
              location, time and advertisement size.
            </p>
          </div>

          <div className="rounded-2xl border border-blue-100 bg-blue-50/50 p-6">
            <div className="mb-4 w-fit rounded-xl bg-white p-3 text-blue-700">
              <Globe size={27} />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Digital Advertising Costs</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Online platforms may charge through different pricing models.
              Advertisers can pay based on clicks, impressions, views or
              other campaign-specific actions.
            </p>
            <p className="mt-4 text-sm leading-6 text-slate-500">
              Actual costs depend on competition, audience, bidding,
              placement, campaign objectives and platform rules.
            </p>
          </div>
        </div>

        <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200">
          <div className="bg-slate-900 p-5 text-white">
            <h3 className="font-bold">Common Digital Advertising Pricing Models</h3>
            <p className="mt-1 text-sm text-slate-400">Understand what an advertiser may pay for.</p>
          </div>
          <div className="grid gap-px bg-slate-200 sm:grid-cols-2">
            {[
              ["CPC", "Cost Per Click", "The advertiser pays for eligible clicks on an advertisement."],
              ["CPM", "Cost Per Thousand Impressions", "The advertiser pays based on every thousand ad impressions."],
              ["CPV", "Cost Per View", "The advertiser pays for qualifying video views under the platform's rules."],
              ["CPA", "Cost Per Acquisition", "The cost associated with obtaining a specified conversion or acquisition."],
            ].map(([short, title, desc]) => (
              <div key={short} className="bg-white p-5">
                <p className="text-2xl font-bold text-blue-700">{short}</p>
                <h4 className="mt-2 font-bold text-slate-900">{title}</h4>
                <p className="mt-2 text-sm leading-6 text-slate-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-6">
          <div className="flex items-start gap-3">
            <Info className="mt-1 shrink-0 text-amber-700" size={23} />
            <div>
              <h3 className="font-bold text-slate-900">An Important Cost Reality</h3>
              <p className="mt-2 text-sm leading-7 text-slate-700">
                Paying for clicks does not mean paying for customers. A person
                can click an advertisement, visit the website and leave
                without purchasing anything. Advertising expenditure should
                therefore be evaluated against actual business results, not
                just the number of clicks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MEASURING EFFECTIVENESS */}
<AdSlot />
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionIntro
            eyebrow="MEASURING RESULTS"
            title="How Is Advertising Effectiveness Measured?"
            description="Businesses need to understand what happened after an advertisement was published. Digital campaigns provide several measurable indicators, although every metric answers a different question."
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {metrics.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="font-bold text-slate-900">{item.title}</h3>
                    <Icon size={24} className="text-blue-600" />
                  </div>
                  <p className="text-sm leading-6 text-slate-600">{item.desc}</p>
                  <div className="mt-4 border-t border-slate-100 pt-4">
                    <p className="text-xs font-bold uppercase text-blue-600">What It Really Means</p>
                    <p className="mt-2 text-sm leading-6 text-slate-500">{item.reality}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-9 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
            <h3 className="text-xl font-bold text-slate-950">
              Important Advertising Formulas
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              These calculations help businesses understand the performance
              of their advertising campaigns.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {[
                ["Click-Through Rate (CTR)", "CTR = (Clicks ÷ Impressions) × 100", "100 clicks from 5,000 impressions gives a CTR of 2%."],
                ["Conversion Rate", "Conversion Rate = (Conversions ÷ Visitors) × 100", "10 purchases from 200 visitors gives a conversion rate of 5%."],
                ["Cost Per Click (CPC)", "CPC = Advertising Cost ÷ Clicks", "₹1,000 spent for 200 clicks gives an average CPC of ₹5."],
                ["Return On Ad Spend (ROAS)", "ROAS = Attributed Revenue ÷ Ad Cost", "₹10,000 attributed revenue from ₹2,000 advertising gives a ROAS of 5x."],
              ].map(([title, formula, example]) => (
                <div key={title} className="rounded-xl bg-blue-50 p-5">
                  <p className="font-bold text-slate-900">{title}</p>
                  <div className="mt-3 rounded-lg bg-white p-4 text-center">
                    <p className="font-bold text-blue-700">{formula}</p>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-600">Example: {example}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PRACTICAL CAMPAIGN */}

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <SectionIntro
          eyebrow="PUTTING THE CONCEPTS TOGETHER"
          title="Practical Example: A Small Business Advertising Campaign"
          description="Imagine a small business selling office chairs online. It decides to spend money on digital advertising to attract potential buyers. Consider the following illustrative campaign."
        />

        <div className="rounded-3xl border border-blue-100 bg-white p-6 shadow-sm sm:p-8">
          <div className="grid gap-5 sm:grid-cols-3">
            {[
              ["Advertising Budget", "₹5,000"],
              ["Website Visitors", "1,000"],
              ["Orders", "20"],
            ].map(([title, value]) => (
              <div key={title} className="rounded-xl bg-blue-50 p-5">
                <p className="text-sm font-bold text-slate-500">{title}</p>
                <p className="mt-2 text-3xl font-bold text-blue-700">{value}</p>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <h3 className="font-bold text-slate-900">Campaign Results</h3>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full min-w-[450px] text-sm">
                <tbody className="divide-y divide-slate-100">
                  {[
                    ["Advertising expenditure", "₹5,000"],
                    ["Website visitors", "1,000"],
                    ["Orders received", "20"],
                    ["Average order value", "₹1,000"],
                    ["Total attributed revenue", "₹20,000"],
                    ["Conversion rate", "2%"],
                    ["ROAS", "4x"],
                  ].map(([label, value]) => (
                    <tr key={label}>
                      <td className="py-3 text-slate-600">{label}</td>
                      <td className="py-3 text-right font-bold text-slate-900">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-6 rounded-xl bg-blue-50 p-5">
            <p className="font-bold text-slate-900">What Does This Result Tell Us?</p>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              The campaign generated ₹20,000 in attributed revenue from
              ₹5,000 of advertising expenditure. Its ROAS is 4x, meaning the
              campaign generated ₹4 in attributed revenue for every ₹1 spent
              on advertising.
            </p>
          </div>

          <div className="mt-5 rounded-xl border border-amber-200 bg-amber-50 p-5">
            <p className="font-bold text-slate-900">But Is The Business Profitable?</p>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              Not necessarily. The business must also pay for the chairs,
              packaging, shipping, payment processing, salaries, taxes and
              other expenses. A 4x ROAS does not mean a 4x profit.
            </p>
            <p className="mt-3 text-sm font-bold text-amber-800">
              Revenue and profit are two different things.
            </p>
          </div>
        </div>
        <p className="mt-4 text-xs text-slate-400">
          All figures are hypothetical and provided only to demonstrate
          advertising calculations. Revenue attribution depends on the
          tracking method used.
        </p>
      </section>

      {/* ADVANTAGES AND LIMITATIONS */}

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionIntro
            eyebrow="A BALANCED VIEW"
            title="Advantages And Limitations Of Advertising"
            description="Advertising provides businesses with important opportunities, but it also involves costs, uncertainty and limitations. It is important to understand both sides."
          />

          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-green-100 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-green-50 p-3 text-green-700">
                  <CheckCircle2 size={25} />
                </div>
                <h3 className="text-xl font-bold text-slate-950">Advantages</h3>
              </div>
              <div className="mt-6 space-y-5">
                {[
                  ["Wider Reach", "Businesses can communicate with large or geographically distributed audiences."],
                  ["Brand Recognition", "Repeated exposure can help people recognise and remember a brand."],
                  ["Product Information", "Advertisements can explain product features, uses, availability and offers."],
                  ["Customer Acquisition", "Relevant campaigns can attract new customers and generate enquiries."],
                  ["Measurable Performance", "Many digital campaigns provide data to evaluate results."],
                  ["Competitive Positioning", "Businesses can communicate their differences and reasons to choose their products."],
                ].map(([title, desc]) => (
                  <div key={title} className="flex gap-3">
                    <Check className="mt-1 shrink-0 text-green-600" size={18} />
                    <div>
                      <p className="font-bold text-slate-900">{title}</p>
                      <p className="mt-1 text-sm leading-6 text-slate-600">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-red-100 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-red-50 p-3 text-red-600">
                  <AlertTriangle size={25} />
                </div>
                <h3 className="text-xl font-bold text-slate-950">Limitations</h3>
              </div>
              <div className="mt-6 space-y-5">
                {[
                  ["High Costs", "Competitive platforms and traditional media can require significant budgets."],
                  ["No Guaranteed Sales", "People may see advertisements but decide not to purchase."],
                  ["Advertising Clutter", "Too many promotional messages can make it difficult to attract attention."],
                  ["Customer Distrust", "Misleading or excessive advertising can reduce consumer confidence."],
                  ["Strong Competition", "Competing businesses may target the same audience and increase costs."],
                  ["Limited Attention", "People may skip, ignore or forget promotional messages."],
                ].map(([title, desc]) => (
                  <div key={title} className="flex gap-3">
                    <XCircle className="mt-1 shrink-0 text-red-500" size={18} />
                    <div>
                      <p className="font-bold text-slate-900">{title}</p>
                      <p className="mt-1 text-sm leading-6 text-slate-600">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REALITY OF ADVERTISING */}
<AdSlot />
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <SectionIntro
          eyebrow="BEYOND THE DEFINITION"
          title="The Reality Of Advertising"
          description="Understanding advertising also means understanding what it cannot do. Businesses sometimes expect advertisements to solve problems that are actually related to their products, pricing, customer service or business model."
        />

        <div className="space-y-4">
          {[
            [ShoppingCart, "Advertising Cannot Fix A Bad Product", "A business may attract customers through advertising, but poor quality can lead to complaints, returns and negative reviews. Promotion can create interest, but the product must deliver value."],
            [Wallet, "More Advertising Spending Does Not Always Mean More Profit", "Increasing the budget may generate more traffic, but if customer acquisition costs rise or profit margins are low, the business may become less profitable."],
            [Users, "Not Every Viewer Is A Potential Customer", "A person may see an advertisement simply because they belong to a broad audience. Relevance matters more than exposure alone."],
            [Repeat, "Repeated Exposure Does Not Guarantee A Purchase", "Seeing the same advertisement repeatedly may improve recognition, but people can still reject the product because of price, preference or lack of need."],
            [ShieldAlert, "Trust Matters More Than Temporary Attention", "Misleading claims may generate short-term interest but can damage a brand's reputation and customer relationships."],
          ].map(([Icon, title, desc]) => (
            <div key={title} className="flex gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
              <div className="h-fit rounded-xl bg-blue-50 p-3 text-blue-700">
                <Icon size={24} />
              </div>
              <div>
                <h3 className="font-bold text-slate-900">{title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* COMMON MISTAKES */}

      <section className="bg-blue-50/60 py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionIntro
            eyebrow="LEARNING FROM FAILURE"
            title="Common Advertising Mistakes Businesses Make"
            description="A campaign can fail even when a business spends money and publishes attractive advertisements. These are some common mistakes that reduce advertising effectiveness."
          />

          <div className="grid gap-4 sm:grid-cols-2">
            {mistakes.map((item, index) => (
              <div key={item.title} className="rounded-2xl border border-blue-100 bg-white p-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-700">
                    {index + 1}
                  </span>
                  <h3 className="font-bold text-slate-900">{item.title}</h3>
                </div>
                <p className="mt-4 text-sm leading-6 text-slate-600">{item.desc}</p>
                <div className="mt-4 rounded-xl bg-green-50 p-4">
                  <p className="text-xs font-bold uppercase tracking-wide text-green-700">Better Approach</p>
                  <p className="mt-2 text-sm leading-6 text-slate-700">{item.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ETHICS */}

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionIntro
              eyebrow="RESPONSIBLE COMMUNICATION"
              title="Ethical Issues In Advertising"
              description="Advertising influences what people notice, consider and sometimes purchase. Because of this influence, businesses have a responsibility to communicate honestly and respect consumers."
            />

            <div className="space-y-5">
              {[
                ["Misleading Claims", "An advertisement should not make false or unsupported statements about a product."],
                ["Hidden Conditions", "Important terms, restrictions and additional costs should not be concealed."],
                ["Unfair Comparisons", "Comparative claims should be accurate and supported by reliable information."],
                ["Consumer Privacy", "Businesses should handle customer data responsibly and follow applicable privacy requirements."],
                ["Sensitive Audiences", "Advertising should not exploit vulnerable people or encourage harmful behaviour."],
              ].map(([title, desc]) => (
                <div key={title} className="flex gap-3">
                  <ShieldAlert className="mt-1 shrink-0 text-blue-600" size={20} />
                  <div>
                    <h3 className="font-bold text-slate-900">{title}</h3>
                    <p className="mt-1 text-sm leading-6 text-slate-600">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-slate-950 p-7 text-white sm:p-9">
            <Scale size={34} className="text-blue-400" />
            <h3 className="mt-5 text-2xl font-bold">
              Advertising Should Inform, Not Deceive
            </h3>
            <p className="mt-4 leading-7 text-slate-300">
              Consider an advertisement claiming that a product is available
              at a 90% discount. If the original price was artificially
              inflated or important restrictions are hidden, the promotional
              message may mislead consumers.
            </p>

            <div className="mt-7 space-y-4">
              <div className="rounded-xl border border-green-500/30 bg-green-500/10 p-4">
                <div className="flex items-center gap-2 font-bold text-green-400">
                  <CheckCircle2 size={19} />
                  Responsible Advertising
                </div>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Clear prices, genuine offers, accurate product information
                  and transparent conditions.
                </p>
              </div>

              <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-4">
                <div className="flex items-center gap-2 font-bold text-red-400">
                  <AlertTriangle size={19} />
                  Misleading Advertising
                </div>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  False promises, fabricated discounts, exaggerated claims
                  and hidden conditions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
              QUICK ANSWERS
            </p>
            <h2 className="mt-2 text-3xl font-bold text-slate-950">
              Frequently Asked Questions About Advertising
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              Answers to common questions about advertising, its purpose,
              types and practical business applications.
            </p>
          </div>

          <div className="mt-9 space-y-3">
            {faqs.map((item) => (
              <details
                key={item.q}
                className="group rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-slate-900 [&::-webkit-details-marker]:hidden">
                  <span>{item.q}</span>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-700 transition group-open:rotate-45">
                    <span className="text-xl">+</span>
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

    

    </main>
  );
}
