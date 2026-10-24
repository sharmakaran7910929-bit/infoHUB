
import Link from "next/link";
import {PackageCheck ,Scale,ChartNoAxesCombined , Wheat ,Fuel ,Factory ,} from 'lucide-react'
import AdSlot from "../../../../components/AdSlot";

export const metadata = {
  title:
    "Wholesale Price Index (WPI) in India: Calculation, Inflation & Examples",
  description:
    "Understand India's Wholesale Price Index (WPI), how WPI inflation is calculated, official monthly data, factors affecting wholesale prices, real-world examples, and WPI vs CPI.",
  alternates: {
    canonical:
      "https://www.pricetag.co.in/economics/inflation/wholesale-price-index-india",
  },
  openGraph: {
    title: "Wholesale Price Index (WPI) in India Explained",
    description:
      "Learn how WPI works, explore official Indian wholesale inflation data, and understand WPI vs CPI with visual examples.",
    url:
      "https://www.pricetag.co.in/economics/inflation/wholesale-price-index-india",
    type: "article",
  },
};

const officialWpiHistory = [
  { month: "April", short: "Apr", index: 108.9, inflation: 8.36, status: "Final" },
  { month: "May", short: "May", index: 110.1, inflation: 9.88, status: "Final" },
  { month: "June", short: "Jun", index: 110.3, inflation: 9.97, status: "Final" },
  { month: "July", short: "Jul", index: 110.0, inflation: 9.78, status: "Final" },
  { month: "August", short: "Aug", index: 110.8, inflation: 9.92, status: "Provisional" },
  { month: "September", short: "Sep", index: 112.5, inflation: 11.39, status: "Provisional" },
];

const commodityGroups = [
  {
    title: "Primary Articles",
    weight: "22.75730%",
    description:
      "Agricultural products, food articles, non-food articles and minerals.",
    example:
      "A poor onion harvest can reduce market arrivals and push up wholesale onion prices.",
    color: "border-emerald-200 bg-emerald-50",
    bar: "bg-emerald-500",
  },
  {
    title: "Fuel And Power",
    weight: "14.11433%",
    description:
      "Coal and lignite, mineral oils, electricity, crude petroleum and natural gas.",
    example:
      "Higher energy prices may increase transport and manufacturing costs.",
    color: "border-amber-200 bg-amber-50",
    bar: "bg-amber-500",
  },
  {
    title: "Manufactured Products",
    weight: "63.12837%",
    description:
      "Metals, chemicals, textiles, machinery, processed food and other manufactured goods.",
    example:
      "Higher steel prices may increase costs for machinery and construction-related manufacturers.",
    color: "border-blue-200 bg-blue-50",
    bar: "bg-blue-600",
  },
];

const calculationSteps = [
  {
    number: "01",
    symbol: "₹",
    title: "Collect Prices",
    description:
      "Collect wholesale price information for selected commodities.",
  },
  {
    number: "02",
    symbol: "↕",
    title: "Compare Prices",
    description:
      "Compare observed prices with prices in the reference period.",
  },
  {
    number: "03",
    symbol: "%",
    title: "Apply Weights",
    description:
      "Give commodities different importance according to their assigned weights.",
  },
  {
    number: "04",
    symbol: "Σ",
    title: "Calculate WPI",
    description:
      "Combine weighted price indices using the official methodology.",
  },
  {
    number: "05",
    symbol: "↗",
    title: "Calculate Inflation",
    description:
      "Compare the current index with the index for the same month last year.",
  },
];

const factors = [
  {
    title: "Weather And Crop Production",
    effect:
      "Droughts, floods and heatwaves can reduce crop supply. A bumper harvest can increase supply and reduce prices.",
    example:
      "If onion arrivals at Indian mandis fall after crop damage, wholesale onion prices may rise.",
  },
  {
    title: "Crude Oil And Energy Prices",
    effect:
      "Energy costs influence petroleum products, freight, chemicals and energy-intensive manufacturing.",
    example:
      "Higher fuel-related costs may make it more expensive to transport wheat, cement and steel.",
  },
  {
    title: "Demand And Supply",
    effect:
      "Strong demand combined with limited supply can raise prices. Excess supply or weak demand can lower them.",
    example:
      "Strong construction activity may increase demand for steel and other building materials.",
  },
  {
    title: "International Commodity Prices",
    effect:
      "Changes in global prices can affect the domestic prices of imported or internationally traded commodities.",
    example:
      "A global increase in copper prices may raise the input costs of electrical equipment manufacturers.",
  },
  {
    title: "Exchange Rates",
    effect:
      "A weaker rupee can make imported raw materials more expensive in rupee terms.",
    example:
      "An importer paying for an input in US dollars may face higher costs when the rupee depreciates.",
  },
  {
    title: "Government Policies",
    effect:
      "Import duties, export restrictions, procurement decisions and other policy changes can affect market supply and prices.",
    example:
      "A change in import duties may influence domestic prices of a commodity purchased from abroad.",
  },
  {
    title: "Production And Transport Costs",
    effect:
      "Raw materials, electricity, packaging, labour and freight can influence manufacturers' selling prices.",
    example:
      "A packaging manufacturer facing higher resin prices may increase its wholesale prices.",
  },
];

const realWorldExamples = [
  {
    number: "01",
    title: "Onion Prices At Indian Mandis",
    steps: [
      "Heavy rainfall damages onion crops.",
      "Market arrivals fall and wholesale onion prices rise.",
      "Traders and food processors may face higher purchasing costs.",
    ],
    conclusion:
      "WPI can reflect wholesale agricultural price changes. Retail onion prices may change by a different amount or at a different time.",
  },
  {
    number: "02",
    title: "Steel Prices And Construction",
    steps: [
      "Steel prices rise because of higher input costs or stronger demand.",
      "Construction firms and manufacturers face higher material costs.",
      "Businesses may raise selling prices or accept lower profit margins.",
    ],
    conclusion:
      "Wholesale price movements can affect project budgets, but the final effect depends on contracts, inventories and competition.",
  },
  {
    number: "03",
    title: "Fuel Prices And Transportation",
    steps: [
      "International crude oil prices increase.",
      "Some petroleum products and transport inputs become more expensive.",
      "Manufacturers and distributors may face higher costs to move goods.",
    ],
    conclusion:
      "Energy prices can influence several industries, but the effect depends on domestic prices, taxes and other conditions.",
  },
  {
    number: "04",
    title: "A Good Agricultural Harvest",
    steps: [
      "Favourable weather improves crop production.",
      "Supply increases and wholesale prices of some crops fall.",
      "Food processors may benefit from lower raw-material costs.",
    ],
    conclusion:
      "Some commodity prices can fall even while prices of other goods continue to rise.",
  },
];

const importanceItems = [
  {
    title: "Monitor Wholesale Inflation",
    text:
      "WPI helps policymakers and analysts understand broad changes in wholesale commodity prices.",
  },
  {
    title: "Plan Business Budgets",
    text:
      "Manufacturers and wholesalers can examine price trends when estimating material costs and preparing budgets.",
  },
  {
    title: "Understand Input Costs",
    text:
      "Changes in fuel, metals and chemicals can indicate changing cost pressures for businesses using these commodities.",
  },
  {
    title: "Support Contract Adjustments",
    text:
      "Some contracts use agreed price indices to adjust payments when relevant costs change.",
  },
  {
    title: "Study Economic Trends",
    text:
      "WPI can be studied alongside production, GDP and other indicators to understand wider economic conditions.",
  },
  {
    title: "Compare Price Movements",
    text:
      "Reading WPI alongside CPI helps distinguish wholesale commodity inflation from consumer price inflation.",
  },
];

const limitations = [
  {
    title: "WPI Does Not Measure The Full Cost Of Living",
    text:
      "WPI tracks commodities rather than the complete range of goods and services purchased by households. CPI is more suitable for understanding consumer inflation.",
  },
  {
    title: "Wholesale Prices Are Not Retail Prices",
    text:
      "Retail prices can include distribution margins, transport costs, applicable taxes and other expenses. Wholesale price changes do not always pass through fully to consumers.",
  },
  {
    title: "WPI And CPI Can Move Differently",
    text:
      "They use different baskets and weights. Food, fuel, services, retail margins and other factors can affect the two indices differently.",
  },
  {
    title: "Price Changes May Take Time To Pass Through",
    text:
      "Inventories, fixed-price contracts and competition can delay or reduce the effect of wholesale price changes on retail prices.",
  },
  {
    title: "WPI Does Not Cover Services As A Group",
    text:
      "It is not a complete measure of service-sector prices or the entire economy.",
  },
];

const relatedArticles = [
  {
    title: "Consumer Price Index (CPI)",
    description:
      "Understand how changes in prices paid by consumers are measured.",
    href: "/economics/inflation/consumer-price-index",
  },
  {
    title: "CPI Vs WPI",
    description:
      "Compare consumer-level inflation with wholesale-level inflation.",
    href: "/economics/inflation/cpi-vs-wpi",
  },
  {
    title: "What Is Inflation?",
    description:
      "Learn why prices rise and how inflation affects the economy.",
    href: "/economics/inflation/what-is-inflation",
  },
  {
    title: "Inflation Rate Formula",
    description:
      "Understand how inflation is calculated with numerical examples.",
    href: "/economics/inflation/inflation-rate-formula",
  },
  {
    title: "Effects Of Inflation",
    description:
      "Explore how inflation affects households, businesses and savings.",
    href: "/economics/inflation/effects-of-inflation",
  },
  {
    title: "Purchasing Power And Inflation",
    description:
      "Learn how rising prices affect the value of money.",
    href: "/economics/inflation/purchasing-power-and-inflation",
  },
];

const faqs = [
  {
    question: "Who publishes WPI in India?",
    answer:
      "The Office of the Economic Adviser under the Department for Promotion of Industry and Internal Trade (DPIIT), Ministry of Commerce and Industry, compiles and publishes India's WPI.",
  },
  {
    question: "What is the current WPI base year in India?",
    answer:
      "The revised series introduced in June 2026 uses 2022–23 as its base year, with the base index set to 100.",
  },
  {
    question: "How many items are included in the new WPI series?",
    answer:
      "The revised 2022–23 series includes 957 items, compared with 697 in the previous 2011–12 series.",
  },
  {
    question: "What is the difference between WPI and WPI inflation?",
    answer:
      "WPI is an index number. WPI inflation is the percentage change in that index over a specified period, usually the same month of the previous year in India's headline monthly release.",
  },
  {
    question: "Does WPI measure the cost of living?",
    answer:
      "Not directly. WPI measures wholesale commodity prices. CPI is more appropriate for understanding consumer price movements and changes in the cost of living.",
  },
  {
    question: "Can WPI inflation be negative?",
    answer:
      "Yes. Negative year-on-year WPI inflation means the index is lower than in the same period of the previous year. It does not mean every commodity has become cheaper.",
  },
  {
    question: "Does higher WPI always cause higher CPI?",
    answer:
      "No. Wholesale price changes may pass through to retail prices with a delay or only partially. Consumer prices are also affected by services, taxes, retail margins, demand and other conditions.",
  },
  {
    question: "Where can I find official WPI data?",
    answer:
      "The Office of the Economic Adviser publishes official WPI data files, while the Press Information Bureau publishes monthly releases with index values and inflation rates.",
  },
];

function SectionHeading({ number, eyebrow, title, description }) {
  return (
    <div className="mb-8 max-w-3xl">
      <p className="mb-3 text-sm font-bold uppercase tracking-wider text-blue-700">
        {number} / {eyebrow}
      </p>
      <h2 className="text-2xl font-bold tracking-tight text-gray-950 sm:text-3xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-7 text-gray-700 sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}

function RelatedCard({ article }) {
  return (
    <Link
      href={article.href}
      className="group rounded-2xl border border-gray-200 bg-white p-5 transition hover:border-blue-300 hover:shadow-md"
    >
      <h3 className="font-bold text-gray-950 group-hover:text-blue-700">
        {article.title}
      </h3>
      <p className="mt-2 text-sm leading-6 text-gray-600">
        {article.description}
      </p>
      <span className="mt-4 inline-block text-sm font-bold text-blue-700">
        Read Article →
      </span>
    </Link>
  );
}

function WpiTrendChart({ title, description, dataKey, min, max, decimals }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 sm:p-6">
      <h3 className="text-lg font-bold text-gray-950">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-gray-600">{description}</p>

      <div
        className="mt-7 flex h-56 items-end justify-around gap-2 border-b border-l border-gray-200 px-2 pb-0"
        role="img"
        aria-label={`${title}, April to September 2026`}
      >
        {officialWpiHistory.map((item) => {
          const value = item[dataKey];
          const height = ((value - min) / (max - min)) * 100;

          return (
            <div
              key={item.month}
              className="flex h-full min-w-0 flex-1 flex-col items-center justify-end"
            >
              <span className="mb-2 text-center text-[11px] font-bold text-gray-800 sm:text-xs">
                {value.toFixed(decimals)}
                {dataKey === "inflation" ? "%" : ""}
              </span>
              <div
                className="w-full max-w-12 rounded-t-lg bg-gradient-to-t from-blue-700 to-sky-400"
                style={{ height: `${Math.max(4, height)}%` }}
              />
              <span className="mt-2 translate-y-6 text-xs font-bold text-gray-600">
                {item.short}
              </span>
            </div>
          );
        })}
      </div>
      <p className="mt-10 text-xs leading-5 text-gray-500">
        Source: Government of India, September 2026 WPI release.
      </p>
    </div>
  );
}

function WpiProcessDiagram() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
      {calculationSteps.map((step, index) => (
        <div key={step.number} className="relative">
          <article className="h-full rounded-2xl border border-blue-100 bg-gradient-to-b from-blue-50 to-white p-5">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-700 text-2xl font-bold text-white">
              {step.symbol}
            </div>
            <p className="mt-5 text-xs font-bold tracking-wider text-blue-700">
              STEP {step.number}
            </p>
            <h3 className="mt-2 text-lg font-bold text-gray-950">
              {step.title}
            </h3>
            <p className="mt-3 text-sm leading-6 text-gray-700">
              {step.description}
            </p>
          </article>
          {index < calculationSteps.length - 1 && (
            <span
              aria-hidden="true"
              className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 text-xl font-bold text-blue-700 lg:block"
            >
              →
            </span>
          )}
        </div>
      ))}
    </div>
  );
}

export default function WholesalePriceIndexIndiaPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
     
{/* HERO TITLE + COMPACT ICON DIAGRAM */}
<div className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
  {/* LEFT: MAIN HEADING */}
  <div>
    <p className="inline-flex rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-bold text-blue-800 shadow-sm">
      Economics · Inflation · India
    </p>

    <h1 className="mt-5 max-w-2xl text-4xl font-bold leading-tight tracking-tight text-gray-950 sm:text-5xl lg:text-6xl">
      Wholesale Price Index (WPI) In India
    </h1>

    <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-700">
      Discover how wholesale prices of fuel, agricultural goods and
      manufactured products are measured—and how these changes reveal
      inflation trends in India.
    </p>
  </div>

  {/* RIGHT: SMALL ICON-BASED VISUAL */}
  <div className="relative mx-auto w-full max-w-md">
    <div className="absolute -right-2 -top-3 h-24 w-24 rounded-full bg-violet-200/60 blur-2xl" />
    <div className="absolute -bottom-3 -left-2 h-24 w-24 rounded-full bg-sky-200/70 blur-2xl" />

    <div className="relative rounded-3xl border border-white bg-white/90 p-5 shadow-xl shadow-blue-900/10 backdrop-blur sm:p-6">
      <div className="mb-5 flex items-center justify-between gap-3">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-700">
            Price Tracking
          </p>
          <h2 className="mt-1 text-lg font-bold text-gray-950">
            How WPI Works
          </h2>
        </div>
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">
          <ChartNoAxesCombined className="h-6 w-6" />
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex items-center gap-3 rounded-2xl border border-amber-100 bg-amber-50 p-3">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-800">
            <Wheat className="h-6 w-6" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="font-bold text-gray-950">Goods & Commodities</p>
            <p className="mt-1 text-xs leading-5 text-gray-600">
              Food, raw materials and primary goods
            </p>
          </div>
          <PackageCheck className="h-5 w-5 shrink-0 text-amber-700" />
        </div>

        <div className="flex justify-center">
          <div className="flex items-center gap-2 rounded-full border border-violet-100 bg-violet-50 px-4 py-1.5 text-xs font-bold text-violet-800">
            <Scale className="h-4 w-4" />
            Weighted Price Index
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-2xl border border-orange-100 bg-orange-50 p-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-100 text-orange-700">
              <Fuel className="h-5 w-5" />
            </div>
            <p className="mt-2 text-sm font-bold text-gray-950">
              Fuel & Power
            </p>
            <p className="mt-1 text-xs text-gray-600">
              Energy prices
            </p>
          </div>

          <div className="rounded-2xl border border-sky-100 bg-sky-50 p-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-100 text-sky-700">
              <Factory className="h-5 w-5" />
            </div>
            <p className="mt-2 text-sm font-bold text-gray-950">
              Manufacturing
            </p>
            <p className="mt-1 text-xs text-gray-600">
              Industrial goods
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 rounded-2xl bg-gradient-to-r from-blue-700 to-indigo-700 p-4 text-white">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/15">
            <ChartNoAxesCombined className="h-6 w-6" />
          </div>
          <div>
            <p className="font-bold">WPI Inflation</p>
            <p className="mt-1 text-xs leading-5 text-blue-100">
              Track how wholesale prices change over time
            </p>
          </div>
        </div>
      </div>

      <p className="mt-4 text-center text-xs text-gray-500">
        From commodity prices to inflation trends
      </p>
    </div>
  </div>
</div>




      {/* QUICK ANSWER */}
      <section className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
        <div className="rounded-2xl border border-indigo-200 bg-indigo-50 p-6 sm:p-8">
          <h2 className="text-xl font-bold text-gray-950">
            What Is The Wholesale Price Index?
          </h2>
          <p className="mt-3 leading-7 text-gray-800">
            The Wholesale Price Index (WPI) measures changes over time in the
            prices of a selected basket of commodities at the wholesale or
            early transaction stage. It shows how the overall index changes
            relative to a reference period.
          </p>
          <p className="mt-3 leading-7 text-gray-800">
            In India, the Office of the Economic Adviser under the Department
            for Promotion of Industry and Internal Trade (DPIIT), Ministry of
            Commerce and Industry, compiles and publishes WPI.
          </p>
          <p className="mt-3 text-sm leading-6 text-gray-700">
            WPI measures commodity prices, not the complete cost of living or
            the full range of services purchased by households.
          </p>
        </div>
      </section>
<AdSlot />
      {/* OFFICIAL DATA AND CHARTS */}
      <section
        id="official-wpi-data"
        className="scroll-mt-6 border-y border-blue-100 bg-gradient-to-br from-blue-50 via-white to-indigo-50"
      >
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16">
          <SectionHeading
            number="01"
            eyebrow="Official Indian Data"
            title="India WPI Trend: April–September 2026"
            description="Explore the latest six-month figures reported in the Government of India's September 2026 WPI release. The index and inflation rate are shown separately because they measure different things."
          />

          <div className="mb-6 rounded-2xl border border-blue-200 bg-white p-5">
            <p className="text-sm font-bold text-blue-800">
              OFFICIAL DATA · BASE YEAR 2022–23 = 100
            </p>
            <p className="mt-2 leading-7 text-gray-700">
              The September release reports an all-commodities WPI of 112.5
              and year-on-year WPI inflation of 11.39%. September and August
              are provisional estimates in this release.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <WpiTrendChart
              title="All-Commodities WPI Index"
              description="Index level relative to the 2022–23 base period."
              dataKey="index"
              min={100}
              max={115}
              decimals={1}
            />
            <WpiTrendChart
              title="Year-On-Year WPI Inflation"
              description="Percentage change from the same month of the previous year."
              dataKey="inflation"
              min={0}
              max={12}
              decimals={2}
            />
          </div>

          <div className="mt-8 overflow-x-auto rounded-2xl border border-gray-200 bg-white">
            <table className="w-full min-w-[600px] border-collapse text-left">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-4 text-sm font-bold">Month</th>
                  <th className="p-4 text-sm font-bold">WPI Index</th>
                  <th className="p-4 text-sm font-bold">YoY Inflation</th>
                  <th className="p-4 text-sm font-bold">Status</th>
                </tr>
              </thead>
              <tbody>
                {officialWpiHistory.map((item) => (
                  <tr key={item.month} className="border-t border-gray-200">
                    <td className="p-4 font-bold">{item.month} 2026</td>
                    <td className="p-4 tabular-nums">
                      {item.index.toFixed(1)}
                    </td>
                    <td className="p-4 font-bold tabular-nums">
                      {item.inflation.toFixed(2)}%
                    </td>
                    <td className="p-4">
                      <span
                        className={`inline-flex rounded-full px-3 py-1 text-xs font-bold ${
                          item.status === "Final"
                            ? "bg-emerald-50 text-emerald-800"
                            : "bg-amber-50 text-amber-800"
                        }`}
                      >
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5">
            <h3 className="font-bold text-gray-950">
              What Does The Six-Month Trend Tell Us?
            </h3>
            <p className="mt-2 leading-7 text-gray-800">
              The all-commodities index rose from 108.9 in April to 112.5 in
              September. Year-on-year WPI inflation rose from 8.36% to 11.39%
              over the same months. This indicates a higher index level and a
              faster annual rate of wholesale price increase in September.
            </p>
          </div>

          <p className="mt-5 text-sm leading-6 text-gray-600">
            Source: Government of India, Ministry of Commerce & Industry,
            September 2026 WPI release. August and September are provisional;
            April–July are final in this release. Figures may be revised.
          </p>

          <div className="mt-5 flex flex-wrap gap-4">
            <a
              href="https://www.pib.gov.in/PressReleseDetailm.aspx?PRID=2323098&lang=1&reg=1"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-blue-700 hover:text-blue-900"
            >
              Read The Official September Release →
            </a>
            <a
              href="https://eaindustry.nic.in/download_data_2223.asp"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-blue-700 hover:text-blue-900"
            >
              Open Official WPI Data Files →
            </a>
          </div>
        </div>
      </section>

      {/* WHAT WPI MEANS */}
      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16">
        <SectionHeading
          number="02"
          eyebrow="Understand The Concept"
          title="What Does WPI Actually Tell Us?"
          description="WPI summarises the movement of wholesale commodity prices. It does not simply report the price of one product or the price paid by every customer."
        />

        <div className="grid gap-6 md:grid-cols-2">
          <article className="rounded-2xl border border-gray-200 p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-2xl">
              ₹
            </div>
            <h3 className="mt-4 text-lg font-bold text-gray-950">
              Example: Wheat In A Mandi
            </h3>
            <p className="mt-3 leading-7 text-gray-700">
              A flour mill purchases wheat from a mandi and sells processed
              flour in bulk to distributors. WPI helps track price changes
              across a broad commodity basket. It does not directly measure
              the retail price of a packet of flour bought by a family.
            </p>
          </article>
          <article className="rounded-2xl border border-gray-200 p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-2xl">
              Σ
            </div>
            <h3 className="mt-4 text-lg font-bold text-gray-950">
              Why Use An Index?
            </h3>
            <p className="mt-3 leading-7 text-gray-700">
              Thousands of commodity prices can move in different directions.
              An index combines selected price movements using assigned
              weights to summarise their overall movement in one number.
            </p>
          </article>
        </div>

        <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-6">
          <h3 className="font-bold text-gray-950">
            Does A WPI Of 110 Mean Every Product Costs 10% More?
          </h3>
          <p className="mt-2 leading-7 text-gray-800">
            No. An index of 110 means the overall index is 10% above its base
            level of 100. Some commodities may have risen more, some less,
            and others may have become cheaper.
          </p>
        </div>
      </section>
<AdSlot />
      {/* CALCULATION PROCESS DIAGRAM */}
      <section className="border-y border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16">
          <SectionHeading
            number="03"
            eyebrow="Visual Guide"
            title="How India Calculates WPI Inflation"
            description="Follow the process from collecting commodity prices to calculating the published inflation rate."
          />

          <WpiProcessDiagram />

          <p className="mt-6 text-sm leading-6 text-gray-600">
            Simplified educational diagram. The official index uses the
            government's detailed methodology, price data and weights.
          </p>
        </div>
      </section>

      {/* GROUPS */}
      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16">
        <SectionHeading
          number="04"
          eyebrow="Basket Of Commodities"
          title="Three Major Groups In India's WPI"
          description="The current 2022–23 series includes 957 items organised into three major groups, each with a different weight in the overall index."
        />

        <div className="grid gap-5 md:grid-cols-3">
          {commodityGroups.map((group, index) => (
            <article
              key={group.title}
              className={`rounded-2xl border p-6 ${group.color}`}
            >
              <p className="text-sm font-bold text-gray-600">
                GROUP 0{index + 1}
              </p>
              <h3 className="mt-3 text-xl font-bold text-gray-950">
                {group.title}
              </h3>
              <p className="mt-4 text-3xl font-bold text-gray-950">
                {group.weight}
              </p>
              <p className="mt-1 text-sm text-gray-600">
                Official weight in the current series
              </p>
              <div className="mt-4 h-3 overflow-hidden rounded-full bg-white">
                <div
                  className={`h-full rounded-full ${group.bar}`}
                  style={{ width: group.weight }}
                />
              </div>
              <p className="mt-5 leading-7 text-gray-800">
                {group.description}
              </p>
              <div className="mt-5 rounded-xl border border-white bg-white/80 p-4">
                <p className="text-sm font-bold text-gray-950">
                  Real-World Example
                </p>
                <p className="mt-2 text-sm leading-6 text-gray-700">
                  {group.example}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-6 rounded-xl border border-blue-200 bg-blue-50 p-5">
          <p className="leading-7 text-gray-800">
            <strong>Important:</strong> These are the official weights for
            the 2022–23 series. Manufactured products have the largest weight
            of the three major groups. A group's weight indicates its
            importance in the index, not its current inflation rate.
          </p>
        </div>
      </section>

      {/* INDEX VS INFLATION */}
      <section className="border-y border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16">
          <SectionHeading
            number="05"
            eyebrow="An Important Difference"
            title="WPI Vs WPI Inflation"
            description="WPI is an index number. WPI inflation is the percentage change in that index over a specified period."
          />

          <div className="grid gap-5 md:grid-cols-2">
            <article className="rounded-2xl border border-blue-200 bg-white p-6">
              <p className="text-sm font-bold uppercase tracking-wider text-blue-700">
                The Index
              </p>
              <h3 className="mt-3 text-2xl font-bold text-gray-950">
                WPI = 110
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                The index is 10% above its base level of 100. This is a
                comparison with the base period, not necessarily the current
                inflation rate.
              </p>
              <div className="mt-5 flex h-12 overflow-hidden rounded-lg bg-gray-100">
                <div className="flex w-[90.91%] items-center justify-center bg-blue-200 text-sm font-bold text-blue-950">
                  Base 100
                </div>
                <div className="flex flex-1 items-center justify-center bg-blue-700 text-xs font-bold text-white">
                  +10
                </div>
              </div>
            </article>

            <article className="rounded-2xl border border-emerald-200 bg-white p-6">
              <p className="text-sm font-bold uppercase tracking-wider text-emerald-700">
                The Inflation Rate
              </p>
              <h3 className="mt-3 text-2xl font-bold text-gray-950">
                Inflation = 5%
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                If the index rises from 120 to 126 over a year, the
                year-on-year inflation rate is 5%.
              </p>
              <div className="mt-5 rounded-xl bg-emerald-50 p-4">
                <p className="font-bold text-emerald-950">
                  (126 − 120) ÷ 120 × 100 = 5%
                </p>
              </div>
            </article>
          </div>

          <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-6">
            <h3 className="font-bold text-gray-950">
              Why The Difference Matters
            </h3>
            <p className="mt-2 leading-7 text-gray-800">
              A high index does not automatically mean a high current
              inflation rate. Inflation depends on how the index compares
              with the earlier period you choose.
            </p>
          </div>
        </div>
      </section>
<AdSlot />
      {/* FORMULAS */}
      <section
        id="wpi-calculation"
        className="scroll-mt-6 mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16"
      >
        <SectionHeading
          number="06"
          eyebrow="Calculation With Numbers"
          title="How Is WPI Inflation Calculated?"
          description="For the headline year-on-year rate, compare the WPI index for a month with the index for the same month of the previous year."
        />

        <div className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8">
          <p className="font-bold text-gray-950">
            Formula: Year-On-Year WPI Inflation
          </p>
          <div className="my-5 overflow-x-auto rounded-xl bg-gray-950 p-5 text-center">
            <p className="whitespace-nowrap text-lg font-bold text-white sm:text-2xl">
              [(Current WPI − Previous-Year WPI) ÷ Previous-Year WPI] × 100
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-5">
              <p className="text-sm text-gray-600">October last year</p>
              <p className="mt-2 text-3xl font-bold text-gray-950">120</p>
              <p className="mt-1 text-sm text-gray-600">Illustrative WPI</p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-5">
              <p className="text-sm text-gray-600">October this year</p>
              <p className="mt-2 text-3xl font-bold text-gray-950">126</p>
              <p className="mt-1 text-sm text-gray-600">Illustrative WPI</p>
            </div>
          </div>

          <div className="mt-5 rounded-xl border border-emerald-200 bg-emerald-50 p-5">
            <p className="text-xl font-bold text-emerald-950">
              [(126 − 120) ÷ 120] × 100 = 5%
            </p>
            <p className="mt-2 leading-7 text-gray-800">
              The index is 5% higher than in the same month of the previous
              year. This example uses hypothetical values, not actual October
              data.
            </p>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-6 sm:p-8">
          <h3 className="text-xl font-bold text-gray-950">
            How Is An Individual Price Relative Calculated?
          </h3>
          <div className="my-5 overflow-x-auto rounded-xl bg-indigo-950 p-5 text-center">
            <p className="whitespace-nowrap text-lg font-bold text-white sm:text-2xl">
              Price Relative = (Current Price ÷ Base-Period Price) × 100
            </p>
          </div>
          <p className="leading-7 text-gray-700">
            Suppose a commodity costs ₹50 in the base period and ₹60 now.
          </p>
          <div className="mt-4 rounded-xl border border-indigo-200 bg-indigo-50 p-5">
            <p className="text-xl font-bold text-gray-950">
              (₹60 ÷ ₹50) × 100 = 120
            </p>
            <p className="mt-2 leading-7 text-gray-700">
              Its simple price relative is 120, meaning the price is 20%
              above the base-period price. This is an illustration for one
              commodity, not the complete national WPI calculation.
            </p>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-6">
          <h3 className="font-bold text-gray-950">
            Why Does The Base Year Matter?
          </h3>
          <p className="mt-2 leading-7 text-gray-800">
            The base year provides a reference point for the index. India's
            current WPI series uses 2022–23 as its base year, with the base
            index set to 100. The government revises the series and weights
            to better reflect the changing structure of the economy.
          </p>
        </div>
      </section>

      {/* REAL WORLD EXAMPLES */}
      <section className="border-y border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16">
          <SectionHeading
            number="07"
            eyebrow="Indian Market Examples"
            title="How Wholesale Price Changes Affect Businesses"
            description="These examples show possible economic effects of price movements. They are illustrative scenarios, not claims about current commodity prices."
          />

          <div className="space-y-5">
            {realWorldExamples.map((example) => (
              <article
                key={example.title}
                className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8"
              >
                <p className="text-sm font-bold tracking-wider text-blue-700">
                  EXAMPLE {example.number}
                </p>
                <h3 className="mt-2 text-xl font-bold text-gray-950">
                  {example.title}
                </h3>
                <div className="mt-5 grid gap-3 md:grid-cols-3">
                  {example.steps.map((step, index) => (
                    <div
                      key={step}
                      className="rounded-xl border border-blue-100 bg-blue-50 p-4"
                    >
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-700 text-sm font-bold text-white">
                        {index + 1}
                      </div>
                      <p className="mt-3 text-sm leading-6 text-gray-800">
                        {step}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="mt-5 rounded-xl border border-gray-200 bg-gray-50 p-4">
                  <p className="font-bold text-gray-950">What This Shows</p>
                  <p className="mt-2 leading-7 text-gray-700">
                    {example.conclusion}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
<AdSlot />
      {/* FACTORS */}
      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16">
        <SectionHeading
          number="08"
          eyebrow="Causes Of Price Changes"
          title="Which Factors Affect WPI In India?"
          description="Wholesale prices depend on domestic production, global markets, business costs and government policy. Different factors affect different commodities."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {factors.map((factor, index) => (
            <article
              key={factor.title}
              className="rounded-2xl border border-gray-200 p-6"
            >
              <p className="text-sm font-bold text-blue-700">
                FACTOR {index + 1}
              </p>
              <h3 className="mt-2 text-lg font-bold text-gray-950">
                {factor.title}
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                {factor.effect}
              </p>
              <div className="mt-4 rounded-xl border border-blue-100 bg-blue-50 p-4">
                <p className="text-sm font-bold text-gray-950">Example</p>
                <p className="mt-2 text-sm leading-6 text-gray-700">
                  {factor.example}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* IMPORTANCE */}
      <section className="border-y border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16">
          <SectionHeading
            number="09"
            eyebrow="Economic Importance"
            title="Why Is WPI Important?"
            description="WPI helps businesses and policymakers understand changes in wholesale commodity prices and identify potential cost pressures."
          />

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {importanceItems.map((item, index) => (
              <article
                key={item.title}
                className="rounded-2xl border border-gray-200 bg-white p-6"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 font-bold text-blue-800">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-4 text-lg font-bold text-gray-950">
                  {item.title}
                </h3>
                <p className="mt-3 leading-7 text-gray-700">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
<AdSlot />
      {/* LIMITATIONS */}
      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16">
        <SectionHeading
          number="10"
          eyebrow="Limitations"
          title="Why Is WPI Alone Not Enough?"
          description="WPI is useful, but it cannot explain every change in the cost of living or provide a complete picture of inflation across the economy."
        />

        <div className="space-y-4">
          {limitations.map((item, index) => (
            <article
              key={item.title}
              className="rounded-2xl border border-amber-200 bg-amber-50 p-5 sm:p-6"
            >
              <div className="flex gap-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-amber-200 font-bold text-amber-950">
                  {index + 1}
                </div>
                <div>
                  <h3 className="font-bold text-gray-950">{item.title}</h3>
                  <p className="mt-2 leading-7 text-gray-700">{item.text}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-6">
          <h3 className="text-xl font-bold text-gray-950">
            What Should You Check Alongside WPI?
          </h3>
          <p className="mt-3 leading-7 text-gray-700">
            Use CPI to understand consumer price movements. Depending on the
            question, also examine GDP growth, industrial production, wages
            and relevant commodity prices. No single indicator provides a
            complete picture of the economy.
          </p>
          <Link
            href="/economics/inflation/consumer-price-index"
            className="mt-4 inline-flex font-bold text-blue-700 hover:text-blue-900"
          >
            Read About Consumer Price Index →
          </Link>
        </div>
      </section>

      {/* CPI VS WPI */}
      <section className="border-y border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16">
          <SectionHeading
            number="11"
            eyebrow="Comparison"
            title="CPI Vs WPI: What Is The Difference?"
            description="Both indices measure price movements, but they answer different economic questions."
          />

          <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white">
            <table className="w-full min-w-[650px] border-collapse text-left">
              <thead className="bg-blue-50">
                <tr>
                  <th className="p-4 font-bold text-gray-950">Basis</th>
                  <th className="p-4 font-bold text-gray-950">WPI</th>
                  <th className="p-4 font-bold text-gray-950">CPI</th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    "Measures",
                    "Wholesale commodity price movements",
                    "Consumer price movements",
                  ],
                  [
                    "Price stage",
                    "Wholesale or early transaction stage",
                    "Retail prices paid by consumers",
                  ],
                  [
                    "Main purpose",
                    "Understand wholesale inflation and commodity costs",
                    "Understand consumer inflation and cost-of-living changes",
                  ],
                  [
                    "Services",
                    "Does not cover services as a group",
                    "Includes selected consumer services",
                  ],
                  [
                    "Useful for",
                    "Businesses, analysts and policymakers",
                    "Households, workers, policymakers and researchers",
                  ],
                  [
                    "Inflation rate",
                    "May differ from CPI inflation",
                    "May differ from WPI inflation",
                  ],
                ].map((row) => (
                  <tr key={row[0]} className="border-t border-gray-200">
                    {row.map((cell, index) => (
                      <td
                        key={cell}
                        className={`p-4 leading-6 ${
                          index === 0
                            ? "font-bold text-gray-950"
                            : "text-gray-700"
                        }`}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <article className="rounded-2xl border border-blue-200 bg-blue-50 p-6">
              <h3 className="text-lg font-bold text-gray-950">
                When WPI Is More Relevant
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                A factory owner investigating changes in steel, fuel or
                industrial raw-material costs may find WPI useful.
              </p>
            </article>
            <article className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
              <h3 className="text-lg font-bold text-gray-950">
                When CPI Is More Relevant
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                A family trying to understand changes in food, transport,
                housing, education and other household expenses should look
                at CPI.
              </p>
            </article>
          </div>

          <Link
            href="/economics/inflation/cpi-vs-wpi"
            className="mt-6 inline-flex rounded-xl bg-blue-700 px-5 py-3 font-bold text-white transition hover:bg-blue-800"
          >
            Explore The Full CPI Vs WPI Comparison →
          </Link>
        </div>
      </section>

      {/* INTERPRETATION */}
      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16">
        <SectionHeading
          number="12"
          eyebrow="Interpreting Data"
          title="What Do Different WPI Inflation Rates Mean?"
          description="The rate tells you how the overall index changed, not how much every individual commodity changed."
        />

        <div className="grid gap-5 md:grid-cols-3">
          <article className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
            <p className="text-3xl font-bold text-emerald-900">+4%</p>
            <h3 className="mt-3 text-lg font-bold text-gray-950">
              Positive Inflation
            </h3>
            <p className="mt-3 leading-7 text-gray-700">
              The index is 4% higher than in the comparison period, indicating
              an overall increase in wholesale commodity prices.
            </p>
          </article>
          <article className="rounded-2xl border border-blue-200 bg-blue-50 p-6">
            <p className="text-3xl font-bold text-blue-900">0%</p>
            <h3 className="mt-3 text-lg font-bold text-gray-950">
              Zero Inflation
            </h3>
            <p className="mt-3 leading-7 text-gray-700">
              The overall index is unchanged from the comparison period.
              Individual commodity prices can still rise or fall.
            </p>
          </article>
          <article className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
            <p className="text-3xl font-bold text-amber-900">−2%</p>
            <h3 className="mt-3 text-lg font-bold text-gray-950">
              Negative Inflation
            </h3>
            <p className="mt-3 leading-7 text-gray-700">
              The index is 2% lower than in the comparison period. This is
              negative wholesale inflation, but it does not mean every
              commodity has become cheaper.
            </p>
          </article>
        </div>

        <div className="mt-6 rounded-2xl border border-gray-200 bg-gray-50 p-6">
          <h3 className="font-bold text-gray-950">
            Is Falling WPI Always Good For The Economy?
          </h3>
          <p className="mt-3 leading-7 text-gray-700">
            Not necessarily. Lower input prices may benefit businesses, but
            falling prices may also reflect weak demand. Farmers and commodity
            producers may receive less for their output. The cause of the
            decline and wider economic conditions matter.
          </p>
        </div>
      </section>
<AdSlot />
      {/* FAQ */}
      <section className="border-y border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-4xl px-5 py-14 sm:px-8 sm:py-16">
          <SectionHeading
            number="13"
            eyebrow="Common Questions"
            title="Frequently Asked Questions About WPI"
            description="Quick answers to common questions about India's Wholesale Price Index."
          />

          <div className="space-y-4">
            {faqs.map((item) => (
              <details
                key={item.question}
                className="group rounded-xl border border-gray-200 bg-white p-5"
              >
                <summary className="cursor-pointer list-none font-bold text-gray-950">
                  <span className="flex items-center justify-between gap-4">
                    {item.question}
                    <span className="text-xl text-blue-700 transition group-open:rotate-45">
                      +
                    </span>
                  </span>
                </summary>
                <p className="mt-4 leading-7 text-gray-700">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

  
    </main>
  );
}
