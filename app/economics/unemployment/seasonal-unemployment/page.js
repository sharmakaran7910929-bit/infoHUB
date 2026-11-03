import Link from "next/link";
import {
  CalendarDays,
  Sprout,
  Sun,
  CloudRain,
  Factory,
  TrendingUp,
  Users,
  BriefcaseBusiness,
  GraduationCap,
  Lightbulb,
  ArrowRight,
  CircleHelp,
  Tractor,
  Ship,
  Hotel,
  Store,
  CheckCircle2,
  Clock,
  ChartNoAxesCombined,
} from "lucide-react";
import AdSlot from "../../../../components/AdSlot";

export const metadata = {
  title: "Seasonal Unemployment: Meaning, Causes, Examples And Solutions",
  description:
    "Understand seasonal unemployment, its causes, examples in Indian agriculture, tourism and industries, economic effects, and practical measures to reduce it.",
  keywords: [
    "seasonal unemployment",
    "meaning of seasonal unemployment",
    "causes of seasonal unemployment",
    "examples of seasonal unemployment in India",
    "seasonal unemployment in agriculture",
    "ways to reduce seasonal unemployment",
    "types of unemployment",
  ],
  alternates: {
    canonical:
      "https://www.pricetag.co.in/economics/unemployment/seasonal-unemployment",
  },
  openGraph: {
    title: "Seasonal Unemployment: Meaning, Causes And Examples",
    description:
      "Learn how seasonal changes affect employment in agriculture, tourism and other industries, with practical examples and solutions.",
    url: "https://www.pricetag.co.in/economics/unemployment/seasonal-unemployment",
    type: "article",
  },
};

const examples = [
  {
    icon: Sprout,
    title: "Agricultural Labour",
    category: "Agriculture",
    description:
      "Farm workers may find plenty of work during sowing, transplanting, weeding and harvesting. After these activities finish, the demand for agricultural labour can fall until the next farming cycle.",
    example:
      "A farm labourer may work during paddy transplantation and harvesting but struggle to find farm work during the months between these activities.",
  },
  {
    icon: Hotel,
    title: "Tourism And Hospitality",
    category: "Tourism",
    description:
      "Hotels, guides, restaurants and transport operators may employ additional workers during tourist seasons. When visitor numbers fall, temporary employment opportunities can decline.",
    example:
      "A tourist guide in a hill station may receive regular assignments during the summer holiday season but fewer bookings during quieter months.",
  },
  {
    icon: Factory,
    title: "Sugar And Agro-Based Industries",
    category: "Manufacturing",
    description:
      "Some industries depend on agricultural raw materials that are available mainly during particular harvesting periods. Their production and labour requirements may rise during the processing season.",
    example:
      "A sugar mill may hire additional seasonal workers during the sugarcane crushing season and reduce temporary staffing when the season ends.",
  },
  {
    icon: Ship,
    title: "Fishing And Seafood Processing",
    category: "Fishing",
    description:
      "Fishing activity can be affected by weather, fishing restrictions, breeding seasons and local conditions. Workers may experience periods when fishing-related work is limited.",
    example:
      "Fishing workers may have fewer earning opportunities during a local fishing ban or periods of unfavourable weather.",
  },
  {
    icon: Store,
    title: "Festival And Holiday Businesses",
    category: "Retail",
    description:
      "Some shops, event businesses, decoration services and delivery operations recruit temporary workers when demand increases during festivals and holidays.",
    example:
      "A retailer may hire extra sales assistants and delivery workers before Diwali but reduce temporary staffing after the festival period.",
  },
  {
    icon: Sun,
    title: "Seasonal Construction Activities",
    category: "Construction",
    description:
      "Construction activity in some locations can slow during heavy rainfall, extreme weather or other periods that make outdoor work difficult.",
    example:
      "Outdoor construction workers in a region with intense monsoon rainfall may experience fewer available workdays during the rainy season.",
  },
];

const causes = [
  {
    title: "Dependence On Weather And Climate",
    description:
      "Agriculture, fishing, tourism and some outdoor activities depend on weather conditions. Changes in rainfall, temperature and seasonal conditions can affect the availability of work.",
  },
  {
    title: "Agricultural Production Cycles",
    description:
      "Sowing, harvesting and crop-processing activities require different amounts of labour at different times. The demand for workers may decline between major agricultural operations.",
  },
  {
    title: "Seasonal Consumer Demand",
    description:
      "Demand for some products and services rises during festivals, holidays, tourist seasons and particular weather conditions. Businesses may need fewer workers when seasonal demand declines.",
  },
  {
    title: "Limited Alternative Employment",
    description:
      "Workers who depend on one seasonal occupation may struggle to find another source of income when that activity stops, particularly in areas with fewer industries and services.",
  },
  {
    title: "Dependence On Seasonal Raw Materials",
    description:
      "Some processing industries operate according to the availability of agricultural or other seasonal inputs. This can create temporary increases and decreases in labour demand.",
  },
  {
    title: "Limited Skills And Occupational Mobility",
    description:
      "Workers may have experience in a particular seasonal occupation but lack the training, transport or resources required to move into other available jobs.",
  },
];

const solutions = [
  {
    icon: Tractor,
    title: "Diversify Agricultural Activities",
    description:
      "Encourage activities such as dairy farming, poultry, beekeeping, horticulture, food processing and other suitable rural enterprises to create additional work opportunities.",
  },
  {
    icon: GraduationCap,
    title: "Provide Skill Development",
    description:
      "Offer practical training in trades, repair services, food processing, digital services, hospitality and other occupations that can provide work beyond the main season.",
  },
  {
    icon: Factory,
    title: "Promote Rural And Small Industries",
    description:
      "Support small manufacturing units, handicrafts, cottage industries and local processing businesses that can generate employment throughout more months of the year.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Expand Non-Farm Employment",
    description:
      "Create opportunities in construction, transport, retail, local services and rural enterprises so that workers have alternatives when their primary seasonal occupation slows.",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Improve Irrigation And Farm Infrastructure",
    description:
      "Better irrigation, storage, roads and agricultural infrastructure can support additional cropping opportunities and related work, depending on local conditions.",
  },
  {
    icon: Users,
    title: "Support Employment Programmes",
    description:
      "Public employment programmes and locally planned development projects can provide income opportunities during periods when private-sector work is limited.",
  },
];

function SectionHeading({ eyebrow, title, description, dark = false }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <p
        className={`mb-3 text-sm font-bold uppercase tracking-wider ${
          dark ? "text-blue-300" : "text-blue-600"
        }`}
      >
        {eyebrow}
      </p>

      <h2
        className={`text-3xl font-bold tracking-tight md:text-4xl ${
          dark ? "text-white" : "text-slate-900"
        }`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`mt-4 text-base leading-8 ${
            dark ? "text-slate-300" : "text-slate-600"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

function InfoCard({ icon: Icon, title, description }) {
  return (
    <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
        <Icon size={24} />
      </div>
      <h3 className="text-lg font-bold text-slate-900">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
    </div>
  );
}

export default function SeasonalUnemploymentPage() {
  const faqs = [
    {
      question: "What Is Seasonal Unemployment?",
      answer:
        "Seasonal unemployment occurs when people have employment during particular periods of the year but cannot find sufficient work during the off-season. It is common in activities such as agriculture, tourism and certain seasonal industries.",
    },
    {
      question: "What Is The Main Cause Of Seasonal Unemployment?",
      answer:
        "The main cause is the seasonal nature of production or demand. Weather, agricultural cycles, tourist seasons and festival-related demand can cause businesses to require more workers during some periods and fewer workers during others.",
    },
    {
      question: "Why Is Seasonal Unemployment Common In Indian Agriculture?",
      answer:
        "Many agricultural activities require additional labour during sowing, transplanting, weeding and harvesting. Between these activities, the demand for agricultural labour may decline, leaving some workers without sufficient employment.",
    },
    {
      question: "What Are The Examples Of Seasonal Unemployment?",
      answer:
        "Examples include agricultural labourers between farming seasons, temporary hotel workers during the tourism off-season, workers in seasonal food-processing industries and temporary retail staff hired for festivals.",
    },
    {
      question: "Is Seasonal Unemployment The Same As Cyclical Unemployment?",
      answer:
        "No. Seasonal unemployment occurs because work availability changes at particular times of the year. Cyclical unemployment occurs because employment changes with economic activity, especially during business-cycle downturns such as recessions.",
    },
    {
      question: "How Can Seasonal Unemployment Be Reduced?",
      answer:
        "It can be reduced through agricultural diversification, rural industries, skill development, irrigation, food processing, non-farm employment and suitable public employment programmes.",
    },
    {
      question: "Does Seasonal Unemployment Occur Only In Agriculture?",
      answer:
        "No. Although agriculture is an important example, seasonal unemployment can also occur in tourism, fishing, hospitality, festival retail, construction and industries that depend on seasonal raw materials.",
    },
    {
      question: "What Is The Difference Between Seasonal Unemployment And Underemployment?",
      answer:
        "Seasonal unemployment refers to a lack of work during particular periods of the year. Underemployment occurs when a person has work but receives fewer hours, insufficient work or work that does not fully use their skills or capacity.",
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Seasonal Unemployment: Meaning, Causes, Examples And Solutions",
    description:
      "A detailed explanation of seasonal unemployment, its causes, examples in India, economic effects and practical solutions.",
    mainEntityOfPage:
      "https://www.pricetag.co.in/economics/unemployment/seasonal-unemployment",
    author: {
      "@type": "Organization",
      name: "PriceTag HUB",
      url: "https://k2sinfotech.pricetag.co.in",
    },
    publisher: {
      "@type": "Organization",
      name: "PriceTag HUB",
      url: "https://www.pricetag.co.in",
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50 px-5 py-20 sm:px-8 md:py-28">
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-blue-100/60 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-indigo-100/60 blur-3xl" />

        <div className="relative mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-bold text-blue-700 shadow-sm">
              <CalendarDays size={16} />
              Economics / Types Of Unemployment
            </div>

            <h1 className="text-4xl font-bold leading-tight tracking-tight text-slate-950 md:text-5xl lg:text-6xl">
              Seasonal
              <span className="block text-blue-700">
                Unemployment
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Why do some workers find employment during certain months but
              struggle to earn a living during the rest of the year? Understand
              how seasonal changes affect jobs, income and economic activity.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#meaning"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-700 px-6 py-3 font-bold text-white shadow-lg shadow-blue-700/20 transition hover:bg-blue-800"
              >
                Explore The Topic
                <ArrowRight size={18} />
              </a>

              <a
                href="#examples"
                className="inline-flex items-center gap-2 rounded-xl border border-blue-200 bg-white px-6 py-3 font-bold text-blue-800 transition hover:bg-blue-50"
              >
                View Examples
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-blue-100 bg-white p-6 shadow-xl shadow-blue-900/5 md:p-8">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-bold uppercase tracking-wider text-blue-600">
                  Employment Pattern
                </p>
                <h2 className="mt-2 text-2xl font-bold text-slate-900">
                  Work Changes With Seasons
                </h2>
              </div>
              <div className="rounded-2xl bg-blue-50 p-3 text-blue-700">
                <CalendarDays size={28} />
              </div>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-green-50 p-5">
                <Sun className="text-green-700" size={30} />
                <p className="mt-4 font-bold text-green-900">
                  Peak Season
                </p>
                <p className="mt-2 text-sm leading-6 text-green-800">
                  More work and higher demand for workers.
                </p>
              </div>

              <div className="rounded-2xl bg-orange-50 p-5">
                <CloudRain className="text-orange-700" size={30} />
                <p className="mt-4 font-bold text-orange-900">
                  Off-Season
                </p>
                <p className="mt-2 text-sm leading-6 text-orange-800">
                  Fewer work opportunities and reduced income.
                </p>
              </div>
            </div>

            <div className="mt-5 rounded-2xl bg-slate-50 p-5">
              <div className="flex items-center justify-between gap-3">
                <span className="text-sm font-bold text-slate-700">
                  Employment availability
                </span>
                <span className="text-xs font-bold text-blue-700">
                  Seasonal cycle
                </span>
              </div>
              <div className="mt-4 flex h-4 overflow-hidden rounded-full bg-slate-200">
                <div className="w-1/4 bg-green-500" />
                <div className="w-1/4 bg-green-400" />
                <div className="w-1/4 bg-orange-300" />
                <div className="w-1/4 bg-orange-500" />
              </div>
              <div className="mt-3 flex justify-between text-xs font-bold text-slate-500">
                <span>High demand</span>
                <span>Low demand</span>
              </div>
            </div>

            <p className="mt-5 text-xs leading-6 text-slate-500">
              Illustrative pattern only. Actual employment seasons vary by
              occupation, region and local conditions.
            </p>
          </div>
        </div>
      </section>

      {/* MEANING */}
      <section id="meaning" className="px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="01 / Meaning And Definition"
            title="What Is Seasonal Unemployment?"
            description="Seasonal unemployment is a type of unemployment that occurs when people have work during particular seasons or periods of the year but cannot find sufficient employment during the remaining period."
          />

          <div className="grid items-start gap-8 md:grid-cols-5">
            <div className="rounded-3xl bg-gradient-to-br from-blue-700 to-indigo-800 p-7 text-white md:col-span-2">
              <CalendarDays size={36} />
              <h3 className="mt-5 text-2xl font-bold">
                The Core Idea
              </h3>
              <p className="mt-4 leading-8 text-blue-100">
                Work is available when seasonal demand is high, but
                opportunities decline when that season ends.
              </p>
              <div className="mt-6 rounded-2xl border border-white/20 bg-white/10 p-4">
                <p className="text-sm font-bold text-blue-100">
                  Simple Example
                </p>
                <p className="mt-2 text-sm leading-7">
                  A farm worker may find work during sowing and harvesting
                  but remain without agricultural work between those periods.
                </p>
              </div>
            </div>

            <div className="space-y-5 md:col-span-3">
              <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900">
                  Why Is It Called Seasonal?
                </h3>
                <p className="mt-3 leading-8 text-slate-600">
                  The availability of work follows a recurring seasonal
                  pattern. Employment may increase during a particular
                  agricultural, tourism or production season and decrease
                  when that period is over.
                </p>
              </div>

              <div className="rounded-2xl border border-blue-100 bg-blue-50/70 p-6">
                <h3 className="text-xl font-bold text-slate-900">
                  Is Every Seasonal Worker Unemployed?
                </h3>
                <p className="mt-3 leading-8 text-slate-600">
                  No. A person working in a seasonal occupation is not
                  automatically unemployed throughout the year. The person
                  may be employed during the active season and experience
                  unemployment or underemployment during the off-season,
                  depending on their work situation and availability for
                  other employment.
                </p>
              </div>

              <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
                <div className="flex items-start gap-3">
                  <Lightbulb className="mt-1 shrink-0 text-amber-700" />
                  <div>
                    <h3 className="font-bold text-amber-950">
                      Important Economic Distinction
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-amber-900">
                      Seasonal unemployment is linked to recurring changes
                      in work availability during the year. It is different
                      from cyclical unemployment, which is associated with
                      broader economic expansions and downturns.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
<AdSlot />
      {/* HOW IT OCCURS */}
      <section className="bg-gradient-to-b from-blue-50 to-white px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="02 / Seasonal Employment Cycle"
            title="How Does Seasonal Unemployment Occur?"
            description="The demand for labour changes as an industry moves through its seasonal operating cycle."
          />

          <div className="grid gap-4 md:grid-cols-4">
            {[
              {
                number: "01",
                title: "Season Begins",
                description:
                  "Demand for products or services increases, creating additional work opportunities.",
                color: "border-green-200 bg-green-50",
                text: "text-green-800",
              },
              {
                number: "02",
                title: "Employment Rises",
                description:
                  "Businesses and farms recruit workers to handle increased production or customer demand.",
                color: "border-blue-200 bg-blue-50",
                text: "text-blue-800",
              },
              {
                number: "03",
                title: "Season Ends",
                description:
                  "The main activity slows down, and businesses require fewer temporary or seasonal workers.",
                color: "border-orange-200 bg-orange-50",
                text: "text-orange-800",
              },
              {
                number: "04",
                title: "Off-Season",
                description:
                  "Some workers struggle to find alternative work until the next active season begins.",
                color: "border-indigo-200 bg-indigo-50",
                text: "text-indigo-800",
              },
            ].map((step) => (
              <div
                key={step.number}
                className={`rounded-2xl border p-6 ${step.color}`}
              >
                <p className={`text-sm font-bold ${step.text}`}>
                  STEP {step.number}
                </p>
                <h3 className="mt-4 text-lg font-bold text-slate-900">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-3xl border border-blue-100 bg-white p-7 shadow-sm md:p-9">
            <h3 className="text-xl font-bold text-slate-900">
              Example: Agricultural Employment Cycle
            </h3>

            <div className="mt-7 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl bg-green-50 p-5">
                <Sprout className="text-green-700" size={30} />
                <h4 className="mt-4 font-bold text-green-900">
                  Sowing And Planting
                </h4>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  Farmers need workers to prepare fields, sow seeds and
                  transplant crops.
                </p>
                <span className="mt-4 inline-block rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-800">
                  Labour demand increases
                </span>
              </div>

              <div className="rounded-2xl bg-blue-50 p-5">
                <Sun className="text-blue-700" size={30} />
                <h4 className="mt-4 font-bold text-blue-900">
                  Crop Maintenance
                </h4>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  Irrigation, weeding and other farm activities continue,
                  although labour requirements vary.
                </p>
                <span className="mt-4 inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-bold text-blue-800">
                  Labour demand varies
                </span>
              </div>

              <div className="rounded-2xl bg-orange-50 p-5">
                <CloudRain className="text-orange-700" size={30} />
                <h4 className="mt-4 font-bold text-orange-900">
                  Between Main Seasons
                </h4>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  When major agricultural activities are completed, some
                  workers may find fewer available workdays.
                </p>
                <span className="mt-4 inline-block rounded-full bg-orange-100 px-3 py-1 text-xs font-bold text-orange-800">
                  Work may decline
                </span>
              </div>
            </div>

            <p className="mt-6 text-sm leading-7 text-slate-500">
              The exact farming calendar depends on the crop, irrigation,
              region, rainfall and local agricultural practices.
            </p>
          </div>
        </div>
      </section>

      {/* CAUSES */}
      <section className="px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="03 / Major Causes"
            title="What Causes Seasonal Unemployment?"
            description="Seasonal unemployment develops when the demand for labour is concentrated in particular periods instead of remaining consistent throughout the year."
          />

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {causes.map((cause, index) => (
              <div
                key={cause.title}
                className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-sm font-bold text-blue-800">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-5 text-lg font-bold text-slate-900">
                  {cause.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {cause.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
<AdSlot />
      {/* EXAMPLES */}
      <section id="examples" className="bg-blue-50/70 px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="04 / Practical Examples"
            title="Examples Of Seasonal Unemployment In India"
            description="Seasonal employment patterns can be found across rural and urban economic activities. The following examples show how work opportunities may change during different periods."
          />

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {examples.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                    <item.icon size={25} />
                  </div>
                  <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-bold text-indigo-700">
                    {item.category}
                  </span>
                </div>

                <h3 className="mt-5 text-lg font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>

                <div className="mt-5 rounded-xl bg-blue-50 p-4">
                  <p className="text-xs font-bold uppercase tracking-wide text-blue-700">
                    Practical Example
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-700">
                    {item.example}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AGRICULTURE */}
      <section className="px-5 py-20 sm:px-8">
        <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-wider text-blue-600">
              05 / Indian Agriculture
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              Why Is Seasonal Unemployment Important In Agriculture?
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Agriculture is a major example of seasonal employment because
              different farming operations require labour at different
              stages of the crop cycle. The demand for workers can rise
              during sowing and harvesting and decline during periods when
              fewer field operations are required.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              Workers who depend mainly on agricultural wages may therefore
              face irregular employment and income. The problem can be more
              difficult for landless labourers and households that have
              limited access to alternative occupations.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              Irrigation, multiple cropping, storage, food processing and
              rural non-farm businesses can help create additional
              employment opportunities, although their effectiveness
              depends on local resources and market conditions.
            </p>

            <Link
              href="/economics/unemployment"
              className="mt-7 inline-flex items-center gap-2 font-bold text-blue-700 hover:text-blue-900"
            >
              Explore Unemployment Topics
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="rounded-3xl bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-900 p-7 text-white shadow-xl md:p-9">
            <Tractor size={38} className="text-blue-200" />
            <h3 className="mt-5 text-2xl font-bold">
              The Rural Employment Challenge
            </h3>

            <div className="mt-7 space-y-4">
              {[
                "Farm work is concentrated around important crop operations.",
                "Some workers depend on agricultural wages for their livelihood.",
                "Off-season work may be limited in areas with few alternative industries.",
                "Irregular work can make household income and consumption less predictable.",
              ].map((point, index) => (
                <div key={point} className="flex gap-3">
                  <CheckCircle2
                    size={21}
                    className="mt-1 shrink-0 text-blue-200"
                  />
                  <p className="text-sm leading-7 text-blue-50">
                    {point}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-7 rounded-2xl border border-white/20 bg-white/10 p-5">
              <p className="text-sm font-bold text-blue-100">
                Key Economic Insight
              </p>
              <p className="mt-2 text-sm leading-7 text-white">
                Creating productive work opportunities between major
                agricultural seasons can help improve income stability
                in rural households.
              </p>
            </div>
          </div>
        </div>
      </section>
<AdSlot />
      {/* CHARACTERISTICS */}
      <section className="bg-gradient-to-b from-blue-50 to-white px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="06 / Key Characteristics"
            title="Major Characteristics Of Seasonal Unemployment"
            description="These features help distinguish seasonal unemployment from other forms of joblessness."
          />

          <div className="grid gap-5 md:grid-cols-2">
            <InfoCard
              icon={CalendarDays}
              title="Recurring Pattern"
              description="It is associated with periods that occur at particular times of the year, such as crop seasons, tourist seasons or festival periods."
            />
            <InfoCard
              icon={Clock}
              title="Temporary Work Availability"
              description="Employment opportunities may increase during active periods and decline when the seasonal activity slows or stops."
            />
            <InfoCard
              icon={BriefcaseBusiness}
              title="Industry-Specific"
              description="It is more common in occupations where production, services or customer demand depend on seasonal conditions."
            />
            <InfoCard
              icon={Users}
              title="Income Instability"
              description="Workers who depend on seasonal jobs may experience irregular earnings and difficulty maintaining a steady income."
            />
            <InfoCard
              icon={TrendingUp}
              title="Demand Fluctuations"
              description="The number of workers required by employers can change as production needs and customer demand change."
            />
            <InfoCard
              icon={Lightbulb}
              title="Scope For Diversification"
              description="Additional skills and alternative economic activities can help workers find employment outside their main season."
            />
          </div>
        </div>
      </section>

      {/* EFFECTS */}
      <section className="px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="07 / Economic And Social Effects"
            title="How Does Seasonal Unemployment Affect Workers And The Economy?"
            description="When people cannot find work during the off-season, the effects can extend beyond individual earnings and influence local economic activity."
          />

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-red-100 bg-red-50/70 p-7">
              <h3 className="text-xl font-bold text-red-950">
                Effects On Workers And Households
              </h3>
              <ul className="mt-5 space-y-4">
                {[
                  "Irregular household income during the year.",
                  "Difficulty meeting regular expenses during periods without work.",
                  "Greater dependence on savings, borrowing or family support.",
                  "Temporary migration to other locations in search of work.",
                  "Limited ability to plan education, healthcare and other expenses.",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-7 text-slate-700">
                    <span className="mt-1 text-red-600">●</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-orange-100 bg-orange-50/70 p-7">
              <h3 className="text-xl font-bold text-orange-950">
                Effects On The Economy
              </h3>
              <ul className="mt-5 space-y-4">
                {[
                  "Underutilisation of available labour during off-seasons.",
                  "Lower household spending when workers earn less.",
                  "Uneven demand for local goods and services.",
                  "Greater pressure on rural employment opportunities.",
                  "Loss of productive capacity when workers cannot find suitable alternative jobs.",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-7 text-slate-700">
                    <span className="mt-1 text-orange-600">●</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="bg-blue-50/70 px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="08 / Comparison"
            title="Seasonal Vs Cyclical Vs Structural Unemployment"
            description="These types of unemployment have different causes. Understanding the distinction helps identify the appropriate economic response."
          />

          <div className="overflow-hidden rounded-3xl border border-blue-100 bg-white shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[680px] text-left text-sm">
                <thead className="bg-gradient-to-r from-blue-800 to-indigo-800 text-white">
                  <tr>
                    <th className="px-5 py-4 font-bold">Basis</th>
                    <th className="px-5 py-4 font-bold">Seasonal</th>
                    <th className="px-5 py-4 font-bold">Cyclical</th>
                    <th className="px-5 py-4 font-bold">Structural</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  <tr>
                    <td className="px-5 py-4 font-bold text-slate-900">
                      Main Cause
                    </td>
                    <td className="px-5 py-4">
                      Seasonal changes in work demand
                    </td>
                    <td className="px-5 py-4">
                      Economic downturns
                    </td>
                    <td className="px-5 py-4">
                      Changes in the structure of the economy
                    </td>
                  </tr>
                  <tr className="bg-slate-50/70">
                    <td className="px-5 py-4 font-bold text-slate-900">
                      Pattern
                    </td>
                    <td className="px-5 py-4">
                      Often follows recurring periods of the year
                    </td>
                    <td className="px-5 py-4">
                      Changes with the business cycle
                    </td>
                    <td className="px-5 py-4">
                      Can persist as industries and skills change
                    </td>
                  </tr>
                  <tr>
                    <td className="px-5 py-4 font-bold text-slate-900">
                      Example
                    </td>
                    <td className="px-5 py-4">
                      Farm workers between crop seasons
                    </td>
                    <td className="px-5 py-4">
                      Factory layoffs during a recession
                    </td>
                    <td className="px-5 py-4">
                      Workers whose skills no longer match available jobs
                    </td>
                  </tr>
                  <tr className="bg-slate-50/70">
                    <td className="px-5 py-4 font-bold text-slate-900">
                      Possible Response
                    </td>
                    <td className="px-5 py-4">
                      Diversification and off-season employment
                    </td>
                    <td className="px-5 py-4">
                      Measures to support economic recovery
                    </td>
                    <td className="px-5 py-4">
                      Retraining and improved skill matching
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-blue-100 bg-white p-6">
            <p className="font-bold text-slate-900">
              Explore Related Topics
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                href="/economics/unemployment/cyclical-unemployment"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-50 px-4 py-3 text-sm font-bold text-blue-800 transition hover:bg-blue-100"
              >
                Cyclical Unemployment
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/economics/unemployment"
                className="inline-flex items-center gap-2 rounded-xl bg-indigo-50 px-4 py-3 text-sm font-bold text-indigo-800 transition hover:bg-indigo-100"
              >
                Unemployment Overview
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
<AdSlot />
      {/* SOLUTIONS */}
      <section className="bg-gradient-to-br from-blue-950 via-slate-950 to-indigo-950 px-5 py-20 text-white sm:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="09 / Economic Solutions"
            title="How Can Seasonal Unemployment Be Reduced?"
            description="The long-term objective is to create more reliable employment opportunities beyond the main working season and improve the ability of workers to move between occupations."
            dark
          />

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {solutions.map((solution) => (
              <div
                key={solution.title}
                className="rounded-2xl border border-white/10 bg-white/[0.07] p-6 transition hover:bg-white/[0.11]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/20 text-blue-200">
                  <solution.icon size={25} />
                </div>
                <h3 className="mt-5 text-lg font-bold text-white">
                  {solution.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {solution.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-3xl border border-blue-300/20 bg-white p-7 text-slate-900 shadow-xl md:p-9">
            <h3 className="text-xl font-bold text-slate-900">
              How Fiscal And Monetary Policies Can Support Employment
            </h3>

            <div className="mt-6 grid gap-5 md:grid-cols-2">
              <div className="rounded-2xl bg-blue-50 p-5">
                <h4 className="font-bold text-blue-900">
                  <Link
                    href="/economics/fiscal-policy"
                    className="transition-colors hover:text-blue-600 hover:underline"
                  >
                    Fiscal Policy <span aria-hidden="true">→</span>
                  </Link>
                </h4>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Government spending on infrastructure, irrigation, rural
                  development and public projects can create employment
                  opportunities and support local economic activity.
                </p>
              </div>

              <div className="rounded-2xl bg-indigo-50 p-5">
                <h4 className="font-bold text-indigo-900">
                  <Link
                    href="/economics/monetary-policy"
                    className="transition-colors hover:text-indigo-600 hover:underline"
                  >
                    Monetary Policy <span aria-hidden="true">→</span>
                  </Link>
                </h4>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Appropriate monetary conditions can support borrowing,
                  investment and business activity. However, monetary policy
                  cannot directly remove the seasonal nature of particular
                  occupations.
                </p>
              </div>
            </div>

            <p className="mt-6 text-sm leading-7 text-slate-500">
              Important: Employment measures must consider inflation,
              financial stability, public finances and the actual needs
              of different regions and industries.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-4xl">
          <SectionHeading
            eyebrow="10 / Frequently Asked Questions"
            title="Seasonal Unemployment FAQs"
            description="Quick answers to common questions about seasonal unemployment, its causes and examples."
          />

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-blue-100 bg-white p-6 shadow-sm open:border-blue-300 open:bg-blue-50/40"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                  <span className="flex items-center gap-3 font-bold text-slate-900">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-sm font-bold text-blue-800">
                      {index + 1}
                    </span>
                    {faq.question}
                  </span>
                  <span className="shrink-0 text-blue-700 transition-transform group-open:rotate-180">
                    <ArrowRight className="rotate-90" size={19} />
                  </span>
                </summary>
                <p className="mt-5 pl-11 text-sm leading-8 text-slate-600">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED TOPICS */}
      <section className="bg-gradient-to-b from-blue-50 to-white px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Continue Learning"
            title="Explore More Economics Topics"
            description="Build a stronger understanding of employment, economic activity and government policies."
          />

          <div className="grid gap-5 md:grid-cols-3">
            <Link
              href="/economics/unemployment/cyclical-unemployment"
              className="group rounded-2xl border border-blue-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <TrendingUp className="text-blue-700" size={28} />
              <h3 className="mt-4 font-bold text-slate-900">
                Cyclical Unemployment
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Understand unemployment caused by changes in economic
                activity and business cycles.
              </p>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-blue-700">
                Read More
                <ArrowRight size={16} className="transition group-hover:translate-x-1" />
              </span>
            </Link>

            <Link
              href="/economics/fiscal-policy"
              className="group rounded-2xl border border-blue-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <ChartNoAxesCombined className="text-blue-700" size={28} />
              <h3 className="mt-4 font-bold text-slate-900">
                Fiscal Policy
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Learn how government taxation and spending influence
                economic activity.
              </p>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-blue-700">
                Read More
                <ArrowRight size={16} className="transition group-hover:translate-x-1" />
              </span>
            </Link>

            <Link
              href="/economics/monetary-policy"
              className="group rounded-2xl border border-blue-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <TrendingUp className="text-blue-700" size={28} />
              <h3 className="mt-4 font-bold text-slate-900">
                Monetary Policy
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Explore how central banks influence interest rates,
                borrowing and money supply.
              </p>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-blue-700">
                Read More
                <ArrowRight size={16} className="transition group-hover:translate-x-1" />
              </span>
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}