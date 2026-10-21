
import Link from "next/link";
import {
  TrendingUp,
  BarChart3,
  Factory,
  BriefcaseBusiness,
  Wheat,
  Building2,
  IndianRupee,
  Info,
  ArrowRight,
  ChartNoAxesCombined,
  Globe,
  BookOpen,
} from "lucide-react";
import AdSlot from "../../../../components/AdSlot";

export const metadata = {
  title: "GDP Of India: Latest Figures, Growth & Sectors | PriceTag HUB",
  description:
    "Understand India's GDP, latest official estimates, real and nominal growth, major economic sectors, and what GDP figures tell us about the Indian economy.",
  alternates: {
    canonical:
      "https://www.pricetag.co.in/economics/gdp-and-economic-growth/gdp-of-india",
  },
};

const latestEstimates = [
  {
    year: "FY 2023–24",
    nominal: "₹290.73 lakh crore",
    real: "₹280.94 lakh crore",
    growth: "7.3%",
    status: "Updated estimate",
  },
  {
    year: "FY 2024–25",
    nominal: "₹317.99 lakh crore",
    real: "₹301.15 lakh crore",
    growth: "7.2%",
    status: "First revised estimate",
  },
  {
    year: "FY 2025–26",
    nominal: "₹345.37 lakh crore",
    real: "₹324.70 lakh crore",
    growth: "7.8%",
    status: "Provisional estimate",
  },
];

const sectors = [
  {
    title: "Agriculture And Allied Activities",
    description:
      "Includes crop production, livestock, forestry, and fishing. It supplies food and raw materials and supports rural livelihoods.",
    icon: Wheat,
    color: "from-amber-50 to-orange-50",
    border: "border-amber-200",
    iconColor: "text-amber-700",
  },
  {
    title: "Industry",
    description:
      "Includes manufacturing, construction, mining, electricity, and other industrial activities that produce goods and build infrastructure.",
    icon: Factory,
    color: "from-blue-50 to-cyan-50",
    border: "border-blue-200",
    iconColor: "text-blue-700",
  },
  {
    title: "Services",
    description:
      "Includes trade, transport, banking, insurance, IT, real estate, education, healthcare, tourism, and many other services.",
    icon: BriefcaseBusiness,
    color: "from-violet-50 to-indigo-50",
    border: "border-violet-200",
    iconColor: "text-violet-700",
  },
];

const relatedTopics = [
  {
    title: "What Is GDP?",
    description: "Learn the meaning, formula, methods, and limitations of GDP.",
    href: "/economics/gdp-and-economic-growth/what-is-gdp",
  },
  {
    title: "GDP Per Capita",
    description: "Understand GDP per person and what it can—and cannot—tell us.",
    href: "/economics/gdp-and-economic-growth/gdp-per-capita",
  },
  {
    title: "GDP Vs GNP",
    description: "Compare domestic production with income linked to residents.",
    href: "/economics/gdp-and-economic-growth/gdp-vs-gnp",
  },
  {
    title: "Real Vs Nominal GDP",
    description: "See how inflation changes the interpretation of GDP figures.",
    href: "/economics/gdp-and-economic-growth/real-vs-nominal-gdp",
  },
  {
    title: "Economic Growth",
    description: "Explore how an economy expands over time.",
    href: "/economics/gdp-and-economic-growth/economic-growth",
  },
];

const faqs = [
  {
    question: "What Is The GDP Of India?",
    answer:
      "India's GDP for FY 2025–26 was estimated at ₹345.37 lakh crore at current prices in the updated provisional estimates published in August 2026. The corresponding constant-price estimate was ₹324.70 lakh crore. Always state the financial year, price basis, and estimate status when quoting GDP.",
  },
  {
    question: "What Is India's GDP Growth Rate?",
    answer:
      "The updated official estimate put India's real GDP growth at 7.8% for FY 2025–26. This measures the change in economic output after adjusting for price changes; it is not the same as nominal GDP growth.",
  },
  {
    question: "Why Are Two GDP Values Reported?",
    answer:
      "GDP at current prices uses prices prevailing during the period and is commonly called nominal GDP. GDP at constant prices adjusts for price changes using a reference-year price basis and is used to measure real growth.",
  },
  {
    question: "Which Sector Contributes The Most To India's Economy?",
    answer:
      "Services account for the largest share of India's economic value added. Industry and agriculture also play important roles, but their shares, growth rates, and employment contributions differ.",
  },
  {
    question: "Does A Higher GDP Mean Every Person Is Richer?",
    answer:
      "No. GDP measures the size of economic production, not how income is distributed. GDP can grow while some households experience financial pressure, and GDP alone does not measure inequality, health, education, or environmental quality.",
  },
  {
    question: "Where Can I Check Official GDP Data?",
    answer:
      "Use the Ministry of Statistics and Programme Implementation (MoSPI), particularly its National Accounts Statistics publications and GDP press releases. Estimates can be revised as more data becomes available.",
  },
];

export default function GDPOfIndiaPage() {
  return (
    <main className="min-h-screen bg-white text-slate-800">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-blue-100 bg-gradient-to-br from-white via-blue-50 to-indigo-50">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-bold text-blue-800">
                <Globe className="h-4 w-4" />
                Indian Economy Explained
              </div>

              <h1 className="max-w-3xl text-3xl font-bold leading-tight text-slate-950 sm:text-5xl">
                GDP Of India: Size, Growth And Economic Structure
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                India's Gross Domestic Product measures the value of final
                goods and services produced within the country. Explore the
                latest official estimates, understand real economic growth, and
                learn how agriculture, industry, and services contribute to
                India's economy.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#latest-data"
                  className="inline-flex items-center gap-2 rounded-xl bg-blue-700 px-5 py-3 font-bold text-white transition hover:bg-blue-800"
                >
                  Explore GDP Figures
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#sectors"
                  className="inline-flex items-center gap-2 rounded-xl border border-blue-200 bg-white px-5 py-3 font-bold text-blue-800 transition hover:bg-blue-50"
                >
                  Explore Economic Sectors
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-blue-100 bg-white p-6 shadow-sm sm:p-8">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-blue-100 p-3 text-blue-800">
                  <IndianRupee className="h-7 w-7" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-500">
                    FY 2025–26
                  </p>
                  <h2 className="text-xl font-bold text-slate-950">
                    India's Estimated GDP
                  </h2>
                </div>
              </div>

              <p className="mt-7 text-3xl font-bold tracking-tight text-blue-800 sm:text-4xl">
                ₹345.37 Lakh Crore
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                GDP at current prices, according to the updated provisional
                estimate published in August 2026.
              </p>

              <div className="mt-6 rounded-2xl bg-gradient-to-r from-emerald-50 to-teal-50 p-5">
                <div className="flex items-center gap-3">
                  <TrendingUp className="h-6 w-6 text-emerald-700" />
                  <div>
                    <p className="text-sm font-bold text-slate-600">
                      Estimated Real GDP Growth
                    </p>
                    <p className="text-2xl font-bold text-emerald-800">
                      7.8%
                    </p>
                  </div>
                </div>
              </div>

              <p className="mt-4 text-xs leading-5 text-slate-500">
                Figures are estimates, not a permanent final value. GDP
                statistics may be revised.
              </p>
            </div>
          </div>
        </div>
      </section>
<AdSlot />
      {/* Introduction */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr]">
          <div>
            <h2 className="text-2xl font-bold text-slate-950 sm:text-3xl">
              What Does India's GDP Tell Us?
            </h2>
            <p className="mt-5 leading-8 text-slate-600">
              GDP estimates the value of final goods and services produced
              within India's domestic economy over a specified period. It
              includes economic activity across households, businesses, and
              government-related production, measured using national accounting
              methods.
            </p>
            <p className="mt-4 leading-8 text-slate-600">
              Economists and policymakers use GDP to study the size of the
              economy, compare output across years, evaluate growth trends, and
              understand changes in the structure of production. Businesses
              also use economic growth information when assessing demand,
              investment, and market opportunities.
            </p>
          </div>

          <div className="rounded-3xl border border-indigo-100 bg-gradient-to-br from-indigo-50 to-blue-50 p-6 sm:p-8">
            <div className="mb-4 inline-flex rounded-2xl bg-white p-3 text-indigo-700">
              <Info className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-950">
              GDP Is Not The Same As Household Wealth
            </h3>
            <p className="mt-3 leading-7 text-slate-600">
              GDP is a measure of production over time. It does not tell us
              directly how much money each person earns, how evenly income is
              distributed, or whether living costs are affordable.
            </p>
          </div>
        </div>
      </section>

      {/* Latest data */}
      <section
        id="latest-data"
        className="border-y border-blue-100 bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-14 sm:py-16"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-bold text-blue-800">
              <BarChart3 className="h-4 w-4" />
              Official Estimates
            </div>
            <h2 className="text-2xl font-bold text-slate-950 sm:text-3xl">
              India's GDP: Recent Financial Years
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              The table below uses the updated national accounts estimates
              released by India's Ministry of Statistics and Programme
              Implementation (MoSPI) in August 2026. Amounts are rounded to two
              decimal places in lakh crore rupees.
            </p>
          </div>

          <div className="mt-8 overflow-hidden rounded-2xl border border-blue-100 bg-white shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[680px] text-left text-sm">
                <thead className="bg-blue-100/70 text-slate-800">
                  <tr>
                    <th className="px-5 py-4 font-bold">Financial Year</th>
                    <th className="px-5 py-4 font-bold">
                      GDP At Current Prices
                    </th>
                    <th className="px-5 py-4 font-bold">
                      GDP At Constant Prices
                    </th>
                    <th className="px-5 py-4 font-bold">Real Growth</th>
                  </tr>
                </thead>
                <tbody>
                  {latestEstimates.map((item) => (
                    <tr
                      key={item.year}
                      className="border-t border-slate-100 transition hover:bg-blue-50/50"
                    >
                      <td className="px-5 py-4">
                        <p className="font-bold text-slate-900">
                          {item.year}
                        </p>
                        <p className="mt-1 text-xs text-slate-500">
                          {item.status}
                        </p>
                      </td>
                      <td className="px-5 py-4 font-bold text-blue-800">
                        {item.nominal}
                      </td>
                      <td className="px-5 py-4 text-slate-700">
                        {item.real}
                      </td>
                      <td className="px-5 py-4">
                        <span className="inline-flex rounded-full bg-emerald-50 px-3 py-1 font-bold text-emerald-800">
                          {item.growth}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-amber-200 bg-amber-50 p-5">
            <p className="font-bold text-amber-950">
              Important: These figures can be revised.
            </p>
            <p className="mt-2 text-sm leading-7 text-amber-900">
              FY means financial year. Current-price GDP is nominal GDP.
              Constant-price GDP uses the official reference-year price basis
              to measure real output. The two GDP levels should not be compared
              as if they were measured using the same prices. The growth
              percentages in the table refer to real GDP growth.
            </p>
          </div>

          <p className="mt-4 text-sm leading-6 text-slate-500">
            Official source:{" "}
            <a
              href="https://www.pib.gov.in/PressReleasePage.aspx?PRID=2304948"
              target="_blank"
              rel="noreferrer"
              className="font-bold text-blue-700 underline decoration-blue-300 underline-offset-4 hover:text-blue-900"
            >
              MoSPI's updated GDP estimates, published by PIB on 31 August 2026
            </a>
            .
          </p>
        </div>
      </section>
   <AdSlot />
      {/* Real and nominal GDP */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <h2 className="text-2xl font-bold text-slate-950 sm:text-3xl">
          Nominal GDP Vs Real GDP In India
        </h2>
        <p className="mt-4 max-w-3xl leading-8 text-slate-600">
          India's GDP is reported using different price measures because a
          larger rupee value does not always mean that the economy produced
          proportionately more goods and services.
        </p>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <div className="rounded-3xl border border-blue-200 bg-gradient-to-br from-blue-50 to-white p-6 sm:p-8">
            <div className="mb-5 inline-flex rounded-2xl bg-blue-100 p-3 text-blue-800">
              <IndianRupee className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-950">
              Nominal GDP
            </h3>
            <p className="mt-3 leading-7 text-slate-600">
              Measures production using the prices applicable during that
              period. It can rise because output increases, prices rise, or
              both.
            </p>
            <div className="mt-5 rounded-2xl bg-white p-4">
              <p className="font-bold text-blue-800">Think About Prices</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                If the same amount of goods becomes more expensive, nominal GDP
                can increase even when physical production has not changed.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-white p-6 sm:p-8">
            <div className="mb-5 inline-flex rounded-2xl bg-emerald-100 p-3 text-emerald-800">
              <ChartNoAxesCombined className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-950">Real GDP</h3>
            <p className="mt-3 leading-7 text-slate-600">
              Measures production after adjusting for price changes using the
              official constant-price series. It is the key measure used to
              assess real GDP growth.
            </p>
            <div className="mt-5 rounded-2xl bg-white p-4">
              <p className="font-bold text-emerald-800">
                Think About Output
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Real GDP helps distinguish an increase in production from an
                increase in prices.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <Link
            href="/economics/gdp-and-economic-growth/real-vs-nominal-gdp"
            className="inline-flex items-center gap-2 font-bold text-blue-700 hover:text-blue-900"
          >
            Learn More About Real Vs Nominal GDP
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Sectors */}
      <section
        id="sectors"
        className="border-y border-slate-100 bg-slate-50 py-14 sm:py-16"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-700">
              <Building2 className="h-4 w-4" />
              Economic Structure
            </div>
            <h2 className="text-2xl font-bold text-slate-950 sm:text-3xl">
              Major Sectors Of India's Economy
            </h2>
            <p className="mt-4 leading-8 text-slate-600">
              India's economic activity is grouped into broad industries.
              National accounts statistics measure each industry's value added
              rather than simply adding every sale, which would count many
              intermediate goods more than once.
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {sectors.map((sector) => {
              const Icon = sector.icon;

              return (
                <article
                  key={sector.title}
                  className={`rounded-3xl border ${sector.border} bg-gradient-to-br ${sector.color} p-6 transition hover:-translate-y-1 hover:shadow-md`}
                >
                  <div
                    className={`mb-5 inline-flex rounded-2xl bg-white p-3 ${sector.iconColor}`}
                  >
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-950">
                    {sector.title}
                  </h3>
                  <p className="mt-3 leading-7 text-slate-600">
                    {sector.description}
                  </p>
                </article>
              );
            })}
          </div>

          <div className="mt-7 rounded-2xl border border-blue-200 bg-white p-5">
            <p className="font-bold text-slate-950">
              Which Sector Is The Largest?
            </p>
            <p className="mt-2 leading-7 text-slate-600">
              Services make up the largest share of India's economic value
              added. For an exact percentage, specify the financial year,
              whether the figure is based on nominal or constant prices, and
              the official statistical release being used.
            </p>
          </div>
        </div>
      </section>

      {/* Why GDP matters */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <h2 className="text-2xl font-bold text-slate-950 sm:text-3xl">
          Why India's GDP Matters
        </h2>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "Economic Planning",
              text: "Helps policymakers assess output, demand, investment, and economic conditions.",
              color: "border-blue-200 bg-blue-50",
            },
            {
              title: "Business Decisions",
              text: "Supports market research, expansion planning, and demand forecasting.",
              color: "border-violet-200 bg-violet-50",
            },
            {
              title: "International Comparisons",
              text: "Helps compare economic size and growth, while accounting for exchange rates and methods.",
              color: "border-emerald-200 bg-emerald-50",
            },
            {
              title: "Economic Trends",
              text: "Shows whether total production is expanding or contracting over time.",
              color: "border-amber-200 bg-amber-50",
            },
          ].map((item) => (
            <article
              key={item.title}
              className={`rounded-2xl border ${item.color} p-5`}
            >
              <h3 className="font-bold text-slate-950">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </section>
<AdSlot />
      {/* Limitations */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-950 sm:text-3xl">
            What India's GDP Does Not Tell Us
          </h2>
          <p className="mt-4 max-w-3xl leading-8 text-slate-600">
            GDP is a powerful economic indicator, but it should be read
            alongside other measures when evaluating people's living
            conditions.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {[
              {
                title: "Income Distribution",
                text: "Total output does not show how income and wealth are distributed among households.",
              },
              {
                title: "Cost Of Living",
                text: "GDP growth alone does not tell us whether rent, food, education, or healthcare is affordable.",
              },
              {
                title: "Employment Quality",
                text: "GDP does not fully describe job security, working conditions, or the availability of good jobs.",
              },
              {
                title: "Health And Environment",
                text: "GDP is not a complete measure of health, education, environmental damage, or overall well-being.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-5"
              >
                <h3 className="font-bold text-slate-950">{item.title}</h3>
                <p className="mt-2 leading-7 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Official sources */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="rounded-3xl border border-blue-200 bg-gradient-to-br from-white via-blue-50 to-indigo-50 p-6 sm:p-8">
          <div className="flex items-start gap-4">
            <div className="rounded-2xl bg-white p-3 text-blue-800 shadow-sm">
              <BookOpen className="h-6 w-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-950">
                Where To Find Official GDP Data
              </h2>
              <p className="mt-3 leading-7 text-slate-600">
                For research, schoolwork, business analysis, and reliable
                economic comparisons, use official national accounts data and
                check the publication date and estimate status.
              </p>

              <div className="mt-5 flex flex-col gap-3">
                <a
                  href="https://www.mospi.gov.in/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 font-bold text-blue-700 underline decoration-blue-300 underline-offset-4 hover:text-blue-900"
                >
                  Ministry Of Statistics And Programme Implementation (MoSPI)
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="https://www.pib.gov.in/PressReleasePage.aspx?PRID=2304948"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 font-bold text-blue-700 underline decoration-blue-300 underline-offset-4 hover:text-blue-900"
                >
                  Updated National Accounts Estimates — August 2026
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="border-t border-slate-100 bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-950 sm:text-3xl">
            Frequently Asked Questions About India's GDP
          </h2>

          <div className="mt-8 space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-slate-200 bg-white p-5 open:border-blue-200 open:bg-blue-50/50"
              >
                <summary className="cursor-pointer list-none pr-6 font-bold text-slate-950 marker:hidden">
                  <span className="flex items-center justify-between gap-4">
                    {faq.question}
                    <span className="text-xl text-blue-700 transition group-open:rotate-45">
                      +
                    </span>
                  </span>
                </summary>
                <p className="mt-4 leading-7 text-slate-600">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      
    </main>
  );
}
