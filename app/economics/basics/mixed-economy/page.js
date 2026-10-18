
import Link from "next/link";
import {
  Landmark,
  Building2,
  Users,
  ShieldCheck,
  Store,
  Factory,
  HeartPulse,
  GraduationCap,
  Scale,
  TrendingUp,
  AlertTriangle,
  CheckCircle2,
  ArrowRight,
  Lightbulb,
  Globe2,
  Wallet,
  ShoppingCart,
  BriefcaseBusiness,
  Handshake,
  Hospital,
} from "lucide-react";
import AdSlot from "../../../../components/AdSlot";
import RelatedTopics from "../../../../components/ContinueReading";
export const metadata = {
  title: "Mixed Economy | Meaning, Features, Advantages & Examples",
  description:
    "Learn what a Mixed Economy is, how public and private sectors work together, its main features, advantages and disadvantages, with practical Indian examples and a simple diagram.",
  alternates: {
    canonical:
      "https://www.pricetag.co.in/economics/basics/mixed-economy",
  },
};

const features = [
  {
    icon: Building2,
    title: "Public and private ownership",
    text: "The government operates some services and enterprises, while individuals and companies own other businesses.",
    color: "blue",
  },
  {
    icon: Store,
    title: "Freedom to run businesses",
    text: "Private businesses can produce goods, offer services, compete, and earn profits within the law.",
    color: "violet",
  },
  {
    icon: ShieldCheck,
    title: "Government regulation",
    text: "Rules help protect consumers, workers, competition, and the environment.",
    color: "emerald",
  },
  {
    icon: Users,
    title: "Public welfare",
    text: "Government programmes can support education, healthcare, infrastructure, and people with limited incomes.",
    color: "orange",
  },
];

const examples = [
  {
    icon: Hospital,
    title: "Healthcare",
    sector: "PUBLIC + PRIVATE",
    color: "blue",
    example:
      "Government hospitals provide public healthcare, while private hospitals offer additional treatment options.",
    lesson:
      "Both sectors help meet healthcare needs, although affordability and access can differ.",
  },
  {
    icon: GraduationCap,
    title: "Education",
    sector: "PUBLIC + PRIVATE",
    color: "violet",
    example:
      "Government schools coexist with private schools and colleges.",
    lesson:
      "Families have different educational options, while public institutions help expand access.",
  },
  {
    icon: ShoppingCart,
    title: "Food and groceries",
    sector: "MARKET + GOVERNMENT",
    color: "emerald",
    example:
      "Private shops sell groceries at market prices, while government food-security programmes provide eligible households with subsidised food grains.",
    lesson:
      "Markets supply everyday goods, and public policy can help vulnerable households.",
  },
  {
    icon: Factory,
    title: "Industry and transport",
    sector: "PUBLIC + PRIVATE",
    color: "orange",
    example:
      "Private manufacturers produce cars and electronics, while Indian Railways operates a major national rail network alongside private participation in parts of the transport ecosystem.",
    lesson:
      "Different ownership models can contribute to production, connectivity, and employment.",
  },
];

const pros = [
  "Combines private-sector efficiency and innovation with public welfare objectives.",
  "Gives consumers choices among competing products and services.",
  "Allows governments to invest in infrastructure and essential public services.",
  "Can help reduce poverty and inequality through targeted policies.",
  "Creates opportunities for private investment, employment, and entrepreneurship.",
];

const cons = [
  "Excessive regulation can increase paperwork and slow business activity.",
  "Private firms may prioritise profits over affordability or social needs.",
  "Government enterprises can become inefficient if accountability is weak.",
  "Unequal incomes and access to quality services may still persist.",
  "Poorly designed policies can encourage corruption, waste, or unfair competition.",
];

const colorStyles = {
  blue: {
    card: "border-blue-100 bg-blue-50/80",
    icon: "bg-blue-100 text-blue-700",
    label: "text-blue-700",
  },
  violet: {
    card: "border-violet-100 bg-violet-50/80",
    icon: "bg-violet-100 text-violet-700",
    label: "text-violet-700",
  },
  emerald: {
    card: "border-emerald-100 bg-emerald-50/80",
    icon: "bg-emerald-100 text-emerald-700",
    label: "text-emerald-700",
  },
  orange: {
    card: "border-orange-100 bg-orange-50/80",
    icon: "bg-orange-100 text-orange-700",
    label: "text-orange-700",
  },
};

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mb-7 max-w-3xl">
      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">
        {eyebrow}
      </p>
      <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
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

function ExampleCard({ item }) {
  const Icon = item.icon;
  const styles = colorStyles[item.color];

  return (
    <article className={`rounded-2xl border p-5 ${styles.card}`}>
      <div className="flex items-start justify-between gap-3">
        <div className={`rounded-xl p-3 ${styles.icon}`}>
          <Icon size={23} strokeWidth={1.8} />
        </div>
        <span
          className={`rounded-full bg-white/80 px-2.5 py-1 text-[10px] font-semibold tracking-wide ${styles.label}`}
        >
          {item.sector}
        </span>
      </div>
      <h3 className="mt-4 text-lg font-semibold text-slate-900">
        {item.title}
      </h3>
      <p className="mt-2 text-sm leading-6 text-slate-700">
        {item.example}
      </p>
      <div className="mt-4 rounded-xl bg-white/80 p-3">
        <p className="text-xs font-semibold text-slate-500">
          WHAT THIS SHOWS
        </p>
        <p className="mt-1 text-sm leading-6 text-slate-700">
          {item.lesson}
        </p>
      </div>
    </article>
  );
}

export default function MixedEconomyPage() {
  return (
    <main className="min-h-screen bg-white text-slate-800">
      {/* Hero */}
      <section className="relative isolate overflow-hidden border-b border-blue-100 bg-gradient-to-br from-white via-sky-50 to-blue-100">
        <div className="pointer-events-none absolute -right-20 -top-24 -z-10 h-72 w-72 rounded-full bg-blue-200/40 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-28 left-1/4 -z-10 h-64 w-64 rounded-full bg-cyan-200/40 blur-3xl" />

        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-3 py-1.5 text-xs font-medium text-blue-700 shadow-sm">
                <Globe2 size={15} />
                Economics · Basic Concepts
              </div>

              <h1 className="mt-6 max-w-2xl bg-gradient-to-r from-slate-950 via-blue-800 to-sky-500 bg-clip-text text-4xl font-bold leading-tight tracking-tight text-transparent sm:text-5xl lg:text-6xl">
                Mixed Economy
              </h1>

              <p className="mt-5 max-w-xl text-lg leading-8 text-slate-700">
                How can businesses earn profits while governments provide
                essential services? A Mixed Economy brings both approaches
                together to meet the needs of society.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="#how-it-works"
                  className="inline-flex items-center gap-2 rounded-xl bg-blue-700 px-5 py-3 text-sm font-semibold text-white shadow-md shadow-blue-200 transition hover:bg-blue-800"
                >
                  Understand the concept
                  <ArrowRight size={17} />
                </a>
                <a
                  href="#real-examples"
                  className="inline-flex items-center gap-2 rounded-xl border border-blue-200 bg-white px-5 py-3 text-sm font-semibold text-blue-800 transition hover:bg-blue-50"
                >
                  See real examples
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-xs text-slate-600">
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2 size={15} className="text-blue-600" />
                  Simple explanation
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2 size={15} className="text-blue-600" />
                  Practical examples
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2 size={15} className="text-blue-600" />
                  Advantages and limitations
                </span>
              </div>
            </div>

            {/* Hero visual */}
            <div className="rounded-3xl border border-white bg-white/75 p-5 shadow-xl shadow-blue-200/40 backdrop-blur-sm sm:p-7">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-blue-600">
                    The central idea
                  </p>
                  <h2 className="mt-1 text-xl font-semibold text-slate-900">
                    Two sectors, one economy
                  </h2>
                </div>
                <div className="rounded-xl bg-blue-50 p-3 text-blue-700">
                  <Scale size={25} />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-blue-100/80 p-4">
                  <div className="mb-3 inline-flex rounded-xl bg-white p-3 text-blue-700 shadow-sm">
                    <Store size={25} />
                  </div>
                  <h3 className="font-semibold text-slate-900">
                    Private sector
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Businesses, investment, competition, and profit.
                  </p>
                </div>

                <div className="rounded-2xl border border-emerald-100 bg-gradient-to-br from-emerald-50 to-teal-100/80 p-4">
                  <div className="mb-3 inline-flex rounded-xl bg-white p-3 text-emerald-700 shadow-sm">
                    <Landmark size={25} />
                  </div>
                  <h3 className="font-semibold text-slate-900">
                    Public sector
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Public services, infrastructure, and welfare.
                  </p>
                </div>
              </div>

              <div className="flex justify-center py-3">
                <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-600 shadow-sm">
                  <Handshake size={16} className="text-blue-600" />
                  Shared economic system
                </div>
              </div>

              <div className="rounded-2xl bg-gradient-to-r from-blue-700 to-sky-500 p-4 text-white">
                <div className="flex items-center gap-3">
                  <TrendingUp size={25} />
                  <div>
                    <p className="font-semibold">
                      A balance of market and public interests
                    </p>
                    <p className="mt-1 text-xs leading-5 text-blue-50">
                      The exact balance differs from country to country.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main content */}
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <section id="how-it-works" className="scroll-mt-8">
          <SectionHeading
            eyebrow="01 · Definition"
            title="What is a Mixed Economy?"
            description="A Mixed Economy is an economic system in which both the government and private individuals or businesses participate in economic activities."
          />

          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-blue-100 bg-blue-50/70 p-6">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-blue-100 p-3 text-blue-700">
                  <Lightbulb size={22} />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">
                  In simple words
                </h3>
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-700">
                Imagine a country where private companies sell smartphones,
                run shops, and manufacture cars, while the government builds
                roads, operates public schools, and supports eligible
                low-income families. This combination is a practical example
                of a Mixed Economy.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-100 bg-emerald-50/60 p-6">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-emerald-100 p-3 text-emerald-700">
                  <CheckCircle2 size={22} />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">
                  Key takeaway
                </h3>
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-700">
                A Mixed Economy is not a system in which the government
                controls everything or leaves everything to private
                businesses. It combines markets with public ownership,
                regulation, and government intervention to varying degrees.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-14">
          <SectionHeading
            eyebrow="02 · Visual explanation"
            title="How does a Mixed Economy work?"
            description="Businesses and consumers make many everyday market decisions. The government also makes policy decisions, supplies public services, and regulates economic activity."
          />

          {/* Main concept diagram */}
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="bg-gradient-to-r from-blue-700 to-sky-500 px-5 py-4 text-white sm:px-7">
              <p className="text-sm font-semibold">
                Mixed Economy: simplified flow diagram
              </p>
              <p className="mt-1 text-xs text-blue-100">
                Two major participants influence economic activity.
              </p>
            </div>

            <div className="space-y-3 p-4 sm:p-7">
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-blue-200 bg-blue-50 p-4 sm:p-5">
                  <div className="flex items-center gap-3">
                    <div className="rounded-xl bg-blue-100 p-3 text-blue-700">
                      <BriefcaseBusiness size={23} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-blue-950">
                        Private sector
                      </h3>
                      <p className="text-xs text-blue-700">
                        Businesses and households
                      </p>
                    </div>
                  </div>
                  <ul className="mt-4 space-y-2 text-sm text-slate-700">
                    <li>• Produces goods and services</li>
                    <li>• Invests and creates jobs</li>
                    <li>• Responds to consumer demand</li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 sm:p-5">
                  <div className="flex items-center gap-3">
                    <div className="rounded-xl bg-emerald-100 p-3 text-emerald-700">
                      <Landmark size={23} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-emerald-950">
                        Government
                      </h3>
                      <p className="text-xs text-emerald-700">
                        Public sector and regulators
                      </p>
                    </div>
                  </div>
                  <ul className="mt-4 space-y-2 text-sm text-slate-700">
                    <li>• Provides public services</li>
                    <li>• Makes and enforces laws</li>
                    <li>• Supports public welfare</li>
                  </ul>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="flex flex-col items-center text-blue-600">
                  <div className="h-5 w-px bg-blue-300" />
                  <ArrowRight size={21} className="rotate-90" />
                </div>
              </div>

              <div className="rounded-2xl border border-violet-200 bg-gradient-to-r from-violet-50 via-white to-blue-50 p-5 text-center sm:p-6">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-100 text-violet-700">
                  <Scale size={25} />
                </div>
                <h3 className="mt-3 text-lg font-semibold text-slate-900">
                  Economic activity
                </h3>
                <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-slate-600">
                  Production, employment, consumption, investment, public
                  services, and the exchange of goods and services.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                <div className="rounded-xl bg-amber-50 p-4 text-center">
                  <Wallet
                    size={22}
                    className="mx-auto text-amber-700"
                  />
                  <p className="mt-2 text-sm font-semibold text-slate-800">
                    Household income
                  </p>
                </div>
                <div className="rounded-xl bg-sky-50 p-4 text-center">
                  <ShoppingCart
                    size={22}
                    className="mx-auto text-sky-700"
                  />
                  <p className="mt-2 text-sm font-semibold text-slate-800">
                    Goods and services
                  </p>
                </div>
                <div className="rounded-xl bg-emerald-50 p-4 text-center">
                  <Users
                    size={22}
                    className="mx-auto text-emerald-700"
                  />
                  <p className="mt-2 text-sm font-semibold text-slate-800">
                    Public welfare
                  </p>
                </div>
              </div>

              <p className="rounded-xl bg-slate-50 px-4 py-3 text-xs leading-5 text-slate-500">
                Note: This is a conceptual diagram, not a strict sequence.
                In real economies, businesses, households, and governments
                interact continuously through markets, taxes, spending,
                regulations, and public programmes.
              </p>
            </div>
          </div>
        </section>

        <div className="my-12">
          <AdSlot />
        </div>

        <section>
          <SectionHeading
            eyebrow="03 · Main characteristics"
            title="Four important features of a Mixed Economy"
            description="The relative importance of each feature depends on the country's laws, institutions, and economic policies."
          />

          <div className="grid gap-4 sm:grid-cols-2">
            {features.map((item) => {
              const Icon = item.icon;
              const styles = colorStyles[item.color];

              return (
                <article
                  key={item.title}
                  className={`rounded-2xl border p-5 transition hover:-translate-y-0.5 hover:shadow-md ${styles.card}`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`rounded-xl p-3 ${styles.icon}`}>
                      <Icon size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section id="real-examples" className="mt-14 scroll-mt-8">
          <SectionHeading
            eyebrow="04 · Everyday economics"
            title="Practical examples of a Mixed Economy"
            description="Look at familiar services and industries to understand how public and private participation can coexist."
          />

          <div className="grid gap-4 sm:grid-cols-2">
            {examples.map((item) => (
              <ExampleCard key={item.title} item={item} />
            ))}
          </div>

          <div className="mt-5 rounded-2xl border border-blue-100 bg-gradient-to-r from-blue-50 to-white p-5 sm:p-6">
            <div className="flex items-start gap-3">
              <div className="rounded-xl bg-blue-100 p-3 text-blue-700">
                <Landmark size={23} />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">
                  Is India a Mixed Economy?
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-700">
                  Yes. India has privately owned companies, entrepreneurs,
                  shops, and manufacturers, alongside government-owned
                  enterprises, public services, economic regulation, and
                  welfare programmes. The private sector plays a substantial
                  role, while government participation varies by industry.
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-700">
                  For example, private companies manufacture many consumer
                  products, while public institutions provide services such
                  as government schooling and public healthcare. Both operate
                  within India's broader economic system.
                </p>
              </div>
            </div>
          </div>
        </section>
<AdSlot />
        <section className="mt-14">
          <SectionHeading
            eyebrow="05 · Benefits"
            title="Advantages of a Mixed Economy"
            description="Combining markets with public policies can offer several benefits when institutions and policies work effectively."
          />

          <div className="grid gap-3 sm:grid-cols-2">
            {pros.map((item, index) => (
              <div
                key={item}
                className="flex gap-3 rounded-xl border border-emerald-100 bg-emerald-50/60 p-4"
              >
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                  <CheckCircle2 size={17} />
                </div>
                <p className="text-sm leading-6 text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-14">
          <SectionHeading
            eyebrow="06 · Challenges"
            title="Disadvantages of a Mixed Economy"
            description="A Mixed Economy does not automatically solve every economic problem. Outcomes depend on how markets, institutions, and public policies operate."
          />

          <div className="grid gap-3 sm:grid-cols-2">
            {cons.map((item) => (
              <div
                key={item}
                className="flex gap-3 rounded-xl border border-orange-100 bg-orange-50/60 p-4"
              >
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-700">
                  <AlertTriangle size={17} />
                </div>
                <p className="text-sm leading-6 text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-14">
          <SectionHeading
            eyebrow="07 · Compare systems"
            title="Mixed Economy vs. other economic systems"
            description="The key difference is how ownership and decisions about production and distribution are organised."
          />

          <div className="overflow-x-auto rounded-2xl border border-slate-200">
            <table className="w-full min-w-[600px] border-collapse text-left text-sm">
              <thead>
                <tr className="bg-gradient-to-r from-blue-700 to-sky-600 text-white">
                  <th className="px-4 py-4 font-semibold">
                    Economic system
                  </th>
                  <th className="px-4 py-4 font-semibold">
                    Main characteristic
                  </th>
                  <th className="px-4 py-4 font-semibold">
                    Simplified example
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr className="bg-blue-50/70">
                  <td className="px-4 py-4 font-semibold text-blue-900">
                    Mixed Economy
                  </td>
                  <td className="px-4 py-4 leading-6 text-slate-700">
                    Public and private sectors both participate.
                  </td>
                  <td className="px-4 py-4 leading-6 text-slate-700">
                    India
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-4 font-semibold text-slate-900">
                    Market economy
                  </td>
                  <td className="px-4 py-4 leading-6 text-slate-700">
                    Private ownership and market decisions play a major role.
                  </td>
                  <td className="px-4 py-4 leading-6 text-slate-700">
                    A simplified model of a market-led economy
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-4 font-semibold text-slate-900">
                    Command economy
                  </td>
                  <td className="px-4 py-4 leading-6 text-slate-700">
                    Central authorities direct much of production and
                    resource allocation.
                  </td>
                  <td className="px-4 py-4 leading-6 text-slate-700">
                    A simplified model of a centrally planned economy
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-3 text-xs leading-5 text-slate-500">
            These are simplified models for learning. Actual countries often
            combine market mechanisms, public ownership, and government
            planning to different degrees.
          </p>
        </section>

        <section className="mt-14">
          <SectionHeading
            eyebrow="08 · Quick revision"
            title="Check your understanding"
            description="Use these questions to revise the central ideas."
          />

          <div className="space-y-4">
            <details className="group rounded-2xl border border-slate-200 p-5 open:border-blue-200 open:bg-blue-50/50">
              <summary className="cursor-pointer list-none font-semibold text-slate-900">
                1. What makes an economy a Mixed Economy?
                <span className="float-right text-blue-600">+</span>
              </summary>
              <p className="mt-3 text-sm leading-7 text-slate-700">
                Both private individuals or businesses and the government
                participate in economic activities.
              </p>
            </details>

            <details className="group rounded-2xl border border-slate-200 p-5 open:border-blue-200 open:bg-blue-50/50">
              <summary className="cursor-pointer list-none font-semibold text-slate-900">
                2. Give two examples of a Mixed Economy in India.
                <span className="float-right text-blue-600">+</span>
              </summary>
              <p className="mt-3 text-sm leading-7 text-slate-700">
                Private shops operating alongside public food-security
                programmes, and private schools operating alongside
                government schools, are two examples.
              </p>
            </details>

            <details className="group rounded-2xl border border-slate-200 p-5 open:border-blue-200 open:bg-blue-50/50">
              <summary className="cursor-pointer list-none font-semibold text-slate-900">
                3. Does a Mixed Economy eliminate inequality?
                <span className="float-right text-blue-600">+</span>
              </summary>
              <p className="mt-3 text-sm leading-7 text-slate-700">
                No. Public policies can help reduce inequality, but unequal
                incomes, access to services, and economic opportunities may
                continue.
              </p>
            </details>
          </div>
        </section>

        <section className="mt-14 rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-sky-100 p-6 sm:p-8">
          <div className="flex items-start gap-4">
            <div className="rounded-2xl bg-white p-3 text-blue-700 shadow-sm">
              <Lightbulb size={25} />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-slate-900">
                Remember the main idea
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-700">
                A Mixed Economy combines private enterprise with government
                participation. Markets can encourage competition and
                innovation, while public policies can support essential
                services and social welfare. The results depend on how well
                both parts of the system function.
              </p>
            </div>
          </div>
        </section>
<AdSlot />      

        
      </div>
    </main>
  );
}
