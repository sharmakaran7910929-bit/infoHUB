
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  TrendingUp,
  TrendingDown,
  ShoppingBasket,
  Wallet,
  Building2,
  MapPinned,
  Landmark,
  Calculator,
  CircleHelp,
  CheckCircle2,
  AlertTriangle,
  Utensils,
  Fuel,
  GraduationCap,
  HeartPulse,
  Home,
  ChartNoAxesCombined,
  Banknote,
  Scale,
  Activity,
} from "lucide-react";
import AdSlot from "../../../../components/AdSlot";

export const metadata = {
  title: "Consumer Price Index (CPI): Meaning, Formula & India Data 2026 | PriceTag HUB",
  description:
    "Understand the Consumer Price Index (CPI), how India calculates retail inflation, official monthly CPI trends for 2026, and the impact on families, businesses, regions and the economy.",
  alternates: {
    canonical:
      "https://www.pricetag.co.in/economics/inflation/consumer-price-index",
  },
  openGraph: {
    title: "Consumer Price Index Explained With India's 2026 Data",
    description:
      "Learn what CPI measures, how it is calculated, why inflation rises or falls, and how it affects household budgets and businesses.",
    url: "https://www.pricetag.co.in/economics/inflation/consumer-price-index",
    type: "article",
  },
};

const monthlyCPI = [
  { month: "January", short: "Jan", rate: 2.74 },
  { month: "February", short: "Feb", rate: 3.21 },
  { month: "March", short: "Mar", rate: 3.40 },
  { month: "April", short: "Apr", rate: 3.48 },
  { month: "May", short: "May", rate: 3.93 },
  { month: "June", short: "Jun", rate: 4.39 },
  { month: "July", short: "Jul", rate: 4.45 },
  { month: "August", short: "Aug", rate: 4.82 },
  { month: "September", short: "Sep", rate: 5.54 },
];

const basketItems = [
  {
    icon: Utensils,
    title: "Food And Beverages",
    examples: "Cereals, vegetables, milk, eggs and meals",
    color: "orange",
  },
  {
    icon: Home,
    title: "Housing And Utilities",
    examples: "Rent, housing services, electricity and fuels",
    color: "blue",
  },
  {
    icon: Fuel,
    title: "Transport",
    examples: "Personal transport and passenger transport services",
    color: "violet",
  },
  {
    icon: GraduationCap,
    title: "Education",
    examples: "Education services and related expenses",
    color: "emerald",
  },
  {
    icon: HeartPulse,
    title: "Health",
    examples: "Medicines, health products and health services",
    color: "rose",
  },
  {
    icon: ShoppingBasket,
    title: "Clothing And Other Goods",
    examples: "Clothing, footwear, household items and personal goods",
    color: "amber",
  },
];

const uses = [
  {
    icon: Wallet,
    title: "Middle-Class Families",
    color: "blue",
    points: [
      "Understand whether everyday expenses are rising.",
      "Plan food, rent, transport and education budgets.",
      "Compare salary increases with changes in living costs.",
    ],
  },
  {
    icon: Building2,
    title: "Businesses",
    color: "violet",
    points: [
      "Estimate changes in household purchasing power.",
      "Review prices, salaries and operating budgets.",
      "Make better-informed inventory and investment plans.",
    ],
  },
  {
    icon: MapPinned,
    title: "States And Regions",
    color: "emerald",
    points: [
      "Compare rural and urban inflation.",
      "Identify categories creating local price pressure.",
      "Support analysis of regional living-cost differences.",
    ],
  },
  {
    icon: Landmark,
    title: "Government And RBI",
    color: "orange",
    points: [
      "Monitor inflation and overall price stability.",
      "Inform monetary and economic policy decisions.",
      "Track changes relevant to real incomes and allowances.",
    ],
  },
];

const categoryStyles = {
  orange: {
    icon: "bg-orange-100 text-orange-700",
    border: "border-orange-200",
    light: "bg-orange-50",
  },
  blue: {
    icon: "bg-blue-100 text-blue-700",
    border: "border-blue-200",
    light: "bg-blue-50",
  },
  violet: {
    icon: "bg-violet-100 text-violet-700",
    border: "border-violet-200",
    light: "bg-violet-50",
  },
  emerald: {
    icon: "bg-emerald-100 text-emerald-700",
    border: "border-emerald-200",
    light: "bg-emerald-50",
  },
  rose: {
    icon: "bg-rose-100 text-rose-700",
    border: "border-rose-200",
    light: "bg-rose-50",
  },
  amber: {
    icon: "bg-amber-100 text-amber-700",
    border: "border-amber-200",
    light: "bg-amber-50",
  },
};

function SectionHeading({ number, eyebrow, title, description }) {
  return (
    <div className="mb-8 max-w-3xl">
      <div className="mb-3 flex items-center gap-3">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-700 text-sm font-bold text-white">
          {number}
        </span>
        <p className="text-sm font-bold uppercase tracking-wider text-blue-700">
          {eyebrow}
        </p>
      </div>

      <h2 className="text-2xl font-bold leading-tight tracking-tight text-slate-950 sm:text-3xl">
        {title}
      </h2>

      {description && (
        <p className="mt-3 text-base leading-7 text-slate-600">
          {description}
        </p>
      )}
    </div>
  );
}

function InfoCard({ icon: Icon, title, children, color = "blue" }) {
  const styles = categoryStyles[color];

  return (
    <article className={`rounded-2xl border ${styles.border} bg-white p-5`}>
      <div
        className={`flex h-12 w-12 items-center justify-center rounded-xl ${styles.icon}`}
      >
        <Icon size={24} />
      </div>

      <h3 className="mt-4 text-lg font-bold text-slate-950">{title}</h3>

      <div className="mt-2 text-sm leading-7 text-slate-600">{children}</div>
    </article>
  );
}

function FormulaCard({ label, children, color = "blue" }) {
  const styles = categoryStyles[color];

  return (
    <div className={`rounded-2xl border ${styles.border} ${styles.light} p-4 sm:p-5`}>
      <p className="text-xs font-bold uppercase tracking-wider text-slate-600">
        {label}
      </p>
      <div className="mt-2 text-base font-bold leading-7 text-slate-950">
        {children}
      </div>
    </div>
  );
}

function StatCard({ label, value, detail, color = "blue" }) {
  const styles = categoryStyles[color];

  return (
    <div className={`rounded-2xl border ${styles.border} bg-white p-4 sm:p-5`}>
      <p className="text-sm font-bold text-slate-500">{label}</p>
      <p className={`mt-2 text-3xl font-bold tracking-tight ${styles.icon.split(" ").pop()}`}>
        {value}
      </p>
      <p className="mt-2 text-sm leading-6 text-slate-600">{detail}</p>
    </div>
  );
}

export default function ConsumerPriceIndexPage() {
  const latest = monthlyCPI[monthlyCPI.length - 1];
  const previous = monthlyCPI[monthlyCPI.length - 2];
  const increase = (latest.rate - previous.rate).toFixed(2);

  return (
    <main className="min-h-screen bg-white text-slate-800">
      {/* HERO */}
      <section className="border-b border-blue-100 bg-gradient-to-br from-blue-50 via-white to-sky-100">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-bold text-blue-800">
                <ChartNoAxesCombined size={17} />
                Inflation Measurement
              </div>

              <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Consumer Price Index
                <span className="mt-2 block text-blue-700">
                  What Does CPI Tell Us?
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                When the price of vegetables, rent, transport, school fees and
                medicines changes, how can we tell whether the overall cost of
                living is rising? The Consumer Price Index helps measure those
                changes using a representative basket of consumer goods and
                services.
              </p>

              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-700">
                Learn how CPI works, explore India's monthly retail inflation
                figures for 2026, and understand why the number matters to
                families, businesses and the economy.
              </p>

              <a
                href="#india-cpi"
                className="mt-7 inline-flex items-center gap-2 rounded-xl bg-blue-700 px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-700/20 transition hover:bg-blue-800"
              >
                Explore India's CPI Data
                <ArrowRight size={17} />
              </a>
            </div>

            <div className="rounded-3xl border border-blue-100 bg-white p-6 shadow-xl shadow-blue-900/5 sm:p-7">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-bold text-slate-500">
                    India Retail Inflation
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    September 2026 · Combined CPI
                  </p>
                </div>

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-orange-700">
                  <TrendingUp size={25} />
                </div>
              </div>

              <p className="mt-6 text-5xl font-bold tracking-tight text-slate-950">
                5.54%
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Year-on-year retail inflation, according to India's official
                CPI release for September 2026.
              </p>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-orange-50 p-4">
                  <p className="text-xs font-bold text-slate-500">
                    August 2026
                  </p>
                  <p className="mt-1 text-2xl font-bold text-orange-700">
                    4.82%
                  </p>
                </div>

                <div className="rounded-xl bg-blue-50 p-4">
                  <p className="text-xs font-bold text-slate-500">
                    September 2026
                  </p>
                  <p className="mt-1 text-2xl font-bold text-blue-700">
                    5.54%
                  </p>
                </div>
              </div>

              <div className="mt-4 rounded-xl border border-orange-200 bg-orange-50 p-4">
                <p className="text-sm font-bold text-slate-950">
                  What changed?
                </p>
                <p className="mt-1 text-sm leading-6 text-slate-700">
                  The annual inflation rate increased by 0.72 percentage
                  points between August and September. This does not mean
                  the overall price level rose by 0.72% during September.
                </p>
              </div>

              <a
                href="https://www.pib.gov.in/PressReleasePage.aspx?PRID=2322244&lang=1&reg=3"
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-blue-700 hover:text-blue-900"
              >
                Read The Official September Release
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT IS CPI */}
      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16">
        <SectionHeading
          number="01"
          eyebrow="CPI Meaning"
          title="What Is The Consumer Price Index?"
          description="CPI measures changes over time in the retail prices of a selected basket of goods and services that households purchase for consumption."
        />

        <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50 via-white to-sky-50 p-5 sm:p-7">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
              <ShoppingBasket size={25} />
            </div>

            <h3 className="mt-4 text-xl font-bold text-slate-950">
              Imagine A Representative Shopping Basket
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              Suppose a statistical basket represents the goods and services
              bought by households. The statistical agency tracks the prices
              of the selected items over time and combines them using assigned
              weights. CPI summarises how the cost of that basket changes.
            </p>

            <div className="mt-5 grid grid-cols-2 gap-3">
              {[
                ["Food", "Vegetables, milk, cereals"],
                ["Housing", "Rent and housing services"],
                ["Transport", "Passenger transport and related costs"],
                ["Services", "Health, education and other services"],
              ].map(([title, text]) => (
                <div
                  key={title}
                  className="rounded-xl border border-slate-200 bg-white p-3"
                >
                  <p className="font-bold text-slate-950">{title}</p>
                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <InfoCard
              icon={Calculator}
              title="CPI Is An Index"
              color="violet"
            >
              It is not a single product's price and it is not the total amount
              every family spends. It is a weighted measure that summarises
              price changes across the selected basket.
            </InfoCard>

            <InfoCard
              icon={TrendingUp}
              title="Inflation Is The Rate Of Change"
              color="orange"
            >
              CPI is the index level. Inflation is commonly calculated as the
              percentage change in that index over a specified period, such as
              the same month a year earlier.
            </InfoCard>

            <InfoCard
              icon={Scale}
              title="Different Households Feel It Differently"
              color="emerald"
            >
              A family that spends a large share of its income on food may
              experience a different personal cost increase from a household
              spending more on rent, travel or other services.
            </InfoCard>
          </div>
        </div>
      </section>
      <AdSlot />

      {/* BASKET */}
      <section className="border-y border-blue-100 bg-gradient-to-br from-sky-50 via-white to-blue-50">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16">
          <SectionHeading
            number="02"
            eyebrow="Inside The Basket"
            title="What Does India's CPI Cover?"
            description="The index combines prices from multiple consumption categories rather than relying on the price of just one product."
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {basketItems.map((item) => {
              const Icon = item.icon;
              const styles = categoryStyles[item.color];

              return (
                <article
                  key={item.title}
                  className={`rounded-2xl border ${styles.border} bg-white p-5`}
                >
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl ${styles.icon}`}
                  >
                    <Icon size={24} />
                  </div>

                  <h3 className="mt-4 font-bold text-slate-950">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {item.examples}
                  </p>
                </article>
              );
            })}
          </div>

          <div className="mt-6 rounded-2xl border border-blue-200 bg-white p-5 sm:p-6">
            <div className="flex items-start gap-3">
              <CircleHelp size={23} className="mt-1 shrink-0 text-blue-700" />
              <div>
                <h3 className="font-bold text-slate-950">
                  Why Are Some Items More Important Than Others?
                </h3>

                <p className="mt-2 text-sm leading-7 text-slate-600">
                  CPI uses weights to represent the relative importance of
                  categories in household consumption. A price change in a
                  heavily weighted category can have a larger effect on the
                  overall index than the same percentage change in a
                  low-weighted category.
                </p>

                <p className="mt-2 text-sm leading-7 text-slate-600">
                  India's CPI series was revised to a 2024 base, using the
                  updated consumption framework. The item basket, weights
                  and methodology matter when comparing data across different
                  CPI series.
                </p>

                <a
                  href="https://mospi.gov.in/web/mospi/cpi"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-blue-700 hover:text-blue-900"
                >
                  Visit MoSPI's CPI Page
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW CPI IS CALCULATED */}
      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16">
        <SectionHeading
          number="03"
          eyebrow="Calculation"
          title="How Is CPI Calculated?"
          description="The calculation compares the cost of a representative basket across two periods, using the appropriate index methodology and weights."
        />

        <div className="grid gap-5 lg:grid-cols-2">
          <FormulaCard label="Simplified Basket-Cost Formula" color="blue">
            CPI = (Cost Of Basket In Current Period ÷ Cost Of Basket In Base
            Period) × 100
          </FormulaCard>

          <FormulaCard label="Year-On-Year Inflation Formula" color="violet">
            Inflation Rate = [(Current Month CPI − CPI Same Month Last Year)
            ÷ CPI Same Month Last Year] × 100
          </FormulaCard>
        </div>

        <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-5 sm:p-7">
          <h3 className="text-xl font-bold text-slate-950">
            Example: How A Basket's CPI Changes
          </h3>

          <p className="mt-3 text-sm leading-7 text-slate-600">
            Imagine a simplified basket costs ₹10,000 in the base period and
            ₹11,000 in the current period. This illustration assumes the same
            basket and quantities are used in both periods.
          </p>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-blue-200 bg-blue-50 p-5">
              <p className="text-sm font-bold text-slate-500">
                Base-Period Basket
              </p>
              <p className="mt-2 text-3xl font-bold text-blue-700">₹10,000</p>
            </div>

            <div className="rounded-2xl border border-orange-200 bg-orange-50 p-5">
              <p className="text-sm font-bold text-slate-500">
                Current-Period Basket
              </p>
              <p className="mt-2 text-3xl font-bold text-orange-700">₹11,000</p>
            </div>
          </div>

          <div className="mt-5 rounded-xl bg-slate-50 p-4">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Simplified CPI Calculation
            </p>
            <p className="mt-2 text-lg font-bold text-slate-950">
              (₹11,000 ÷ ₹10,000) × 100 = 110
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              The index is 110 when the base-period index is 100. In this
              simplified example, the basket costs 10% more than in the base
              period.
            </p>
          </div>

         
        </div>
        
        

          {/* INFLATION RATE CALCULATION */}
          <div className="mt-5 rounded-2xl border border-violet-200 bg-gradient-to-br from-violet-50 via-white to-indigo-50 p-5 sm:p-6">
            <div className="flex items-start gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-100 text-violet-700">
                <TrendingUp size={22} aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-950">
                  Example: How to Calculate the Inflation Rate
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  Suppose the CPI was 105 in September last year and rises
                  to 110 in September this year. How much have consumer
                  prices increased over the year?
                </p>
              </div>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-blue-200 bg-white p-4">
                <p className="text-sm font-bold text-slate-500">
                  CPI One Year Ago
                </p>
                <p className="mt-2 text-3xl font-bold text-blue-700">105</p>
                <p className="mt-1 text-xs text-slate-500">
                  Previous September
                </p>
              </div>

              <div className="rounded-xl border border-violet-200 bg-white p-4">
                <p className="text-sm font-bold text-slate-500">
                  CPI This Year
                </p>
                <p className="mt-2 text-3xl font-bold text-violet-700">110</p>
                <p className="mt-1 text-xs text-slate-500">
                  Current September
                </p>
              </div>
            </div>

            <div className="mt-5 rounded-xl border border-violet-200 bg-white p-4 sm:p-5">
              <p className="text-xs font-bold uppercase tracking-wider text-violet-700">
                Apply the Year-On-Year Formula
              </p>

              <div className="mt-3 overflow-x-auto">
                <p className="min-w-max text-base font-bold text-slate-950 sm:text-lg">
                  [(110 − 105) ÷ 105] × 100
                </p>
                <p className="mt-2 text-base font-bold text-slate-700">
                  = (5 ÷ 105) × 100
                </p>
                <p className="mt-2 text-base font-bold text-slate-700">
                  = 4.76%
                </p>
              </div>

              <div className="mt-5 rounded-xl bg-violet-100 p-4">
                <p className="text-sm font-bold text-violet-900">
                  Inflation Rate = 4.76%
                </p>
                <p className="mt-2 text-sm leading-6 text-violet-900">
                  Consumer prices are approximately 4.76% higher than
                  they were in the same month last year, according to
                  these illustrative CPI values.
                </p>
              </div>
            </div>

            <p className="mt-4 text-xs leading-5 text-slate-500">
              This is an illustrative example, not actual official monthly
              CPI data. The year-on-year inflation rate uses the CPI for
              the current month and the same month one year earlier.
            </p>
          </div>

          <div className="mt-5 rounded-xl border border-violet-200 bg-violet-50 p-4">
            <p className="font-bold text-slate-950">
              How Official Inflation Is Calculated
            </p>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              The official inflation rate for a month usually compares its CPI
              with the CPI for the same month one year earlier. Do not confuse
              the index level with the inflation rate: an index of 110 does
              not automatically mean annual inflation is 10%.
            </p>
          </div>

      </section>
<AdSlot />
      {/* INDIA MONTHLY DATA */}
      <section
        id="india-cpi"
        className="border-y border-blue-100 bg-gradient-to-br from-blue-50 via-white to-indigo-50"
      >
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16">
          <SectionHeading
            number="04"
            eyebrow="India CPI Data"
            title="India's Monthly Retail Inflation In 2026"
            description="The following year-on-year combined CPI inflation rates use India's revised CPI series with base year 2024=100. The September release is the latest available in this article as of 23 October 2026."
          />

          <div className="grid gap-4 sm:grid-cols-3">
            <StatCard
              label="January 2026"
              value="2.74%"
              detail="Year-on-year combined CPI inflation"
              color="blue"
            />

            <StatCard
              label="May 2026"
              value="3.93%"
              detail="Year-on-year combined CPI inflation"
              color="violet"
            />

            <StatCard
              label="September 2026"
              value="5.54%"
              detail="Latest published year-on-year combined CPI inflation"
              color="orange"
            />
          </div>

          <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-5 sm:p-7">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h3 className="text-xl font-bold text-slate-950">
                  Monthly Inflation Trend
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Annual percentage change in the combined Consumer Price
                  Index, January–September 2026.
                </p>
              </div>

              <div className="rounded-xl bg-blue-50 px-3 py-2 text-sm font-bold text-blue-800">
                Unit: % year-on-year
              </div>
            </div>

            <div className="mt-8">
              <div className="flex h-64 items-end gap-2 border-b border-l border-slate-200 px-2 sm:gap-4 sm:px-4">
                {monthlyCPI.map((item) => (
                  <div
                    key={item.month}
                    className="flex h-full min-w-0 flex-1 flex-col items-center justify-end"
                  >
                    <p className="mb-2 text-xs font-bold text-slate-700 sm:text-sm">
                      {item.rate.toFixed(2)}%
                    </p>

                    <div
                      className={`w-full max-w-12 rounded-t-lg ${
                        item.month === "September"
                          ? "bg-orange-500"
                          : "bg-blue-500"
                      }`}
                      style={{ height: `${(item.rate / 6) * 72}%` }}
                      title={`${item.month} 2026: ${item.rate}%`}
                    />

                    <p className="mt-3 pb-2 text-xs font-bold text-slate-500">
                      {item.short}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-slate-500">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-sm bg-blue-500" />
                  January–August
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-sm bg-orange-500" />
                  September
                </div>
              </div>
            </div>

            <div className="mt-8 overflow-x-auto">
              <table className="w-full min-w-[520px] text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50 text-slate-500">
                    <th className="px-3 py-3 font-bold">Month</th>
                    <th className="px-3 py-3 font-bold">CPI Inflation</th>
                    <th className="px-3 py-3 font-bold">Change From Previous Month's Rate</th>
                  </tr>
                </thead>

                <tbody>
                  {monthlyCPI.map((item, index) => {
                    const change =
                      index === 0
                        ? null
                        : item.rate - monthlyCPI[index - 1].rate;

                    return (
                      <tr
                        key={item.month}
                        className={`border-b border-slate-100 ${
                          item.month === "September" ? "bg-orange-50" : ""
                        }`}
                      >
                        <td className="px-3 py-3 font-bold text-slate-800">
                          {item.month} 2026
                        </td>

                        <td className="px-3 py-3 font-bold text-slate-950">
                          {item.rate.toFixed(2)}%
                        </td>

                        <td className="px-3 py-3">
                          {change === null ? (
                            <span className="text-slate-500">—</span>
                          ) : (
                            <span
                              className={
                                change > 0
                                  ? "font-bold text-orange-700"
                                  : change < 0
                                    ? "font-bold text-emerald-700"
                                    : "text-slate-600"
                              }
                            >
                              {change > 0 ? "+" : ""}
                              {change.toFixed(2)} percentage points
                            </span>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <div className="mt-6 rounded-xl border border-orange-200 bg-orange-50 p-4">
              <p className="font-bold text-slate-950">
                How Should You Read This Trend?
              </p>

              <p className="mt-2 text-sm leading-7 text-slate-700">
                The year-on-year rate increased from 2.74% in January to 5.54%
                in September. This means the annual pace of consumer-price
                increases became faster over that period. It does not mean
                prices rose by 2.80% between January and September, nor does
                it mean every product rose by 5.54%.
              </p>
            </div>

            <div className="mt-6 rounded-xl border border-blue-200 bg-blue-50 p-4">
              <div className="flex items-start gap-3">
                <AlertTriangle size={21} className="mt-1 shrink-0 text-blue-700" />
                <div>
                  <p className="font-bold text-slate-950">
                    Note On Data And Base Year
                  </p>

                  <p className="mt-2 text-sm leading-7 text-slate-700">
                    India introduced a revised CPI series with base year
                    2024=100 in 2026. These monthly figures belong to that
                    series. Do not directly splice them with the previous
                    2012-base series as though the basket and methodology were
                    unchanged. The latest September figure was provisional
                    when released.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://www.pib.gov.in/PressReleasePage.aspx?PRID=2322244&lang=1&reg=3"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-700 px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-800"
              >
                Official September 2026 CPI
                <ArrowRight size={16} />
              </a>

              <a
                href="https://www.pib.gov.in/PressReleasePage.aspx?PRID=2310058&lang=1&reg=19"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-700 transition hover:border-blue-300 hover:text-blue-700"
              >
                Official August 2026 CPI
              </a>

              <a
                href="https://esankhyiki.mospi.gov.in/catalogue-main/catalogue?product=CPI"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-700 transition hover:border-blue-300 hover:text-blue-700"
              >
                MoSPI CPI Data Catalogue
              </a>
            </div>

            <p className="mt-4 text-xs leading-5 text-slate-500">
              Source: Government of India, Ministry of Statistics and Programme
              Implementation (MoSPI), CPI releases and eSankhyiki data
              catalogue. Check the linked official release for revisions,
              methodology and the exact published figures.
            </p>
          </div>
        </div>
      </section>

    
{/* WHAT LOW OR HIGH CPI MEANS */}
<section className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16">
  <SectionHeading
    number="05"
    eyebrow="Interpreting CPI"
    title="What Does A High Or Low CPI Mean?"
    description="The Consumer Price Index (CPI) measures the cost of a representative basket of goods and services relative to a base period. A higher CPI means the basket costs more than in the base period; a lower CPI means it costs less relative to that same base."
  />

  <div className="grid gap-5 md:grid-cols-2">
    {/* HIGH CPI */}
    <article className="rounded-2xl border border-orange-200 bg-white p-5 sm:p-6">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-orange-700">
        <TrendingUp size={25} aria-hidden="true" />
      </div>

      <h3 className="mt-4 text-xl font-bold text-slate-950">
        When CPI Is High
      </h3>

      <p className="mt-3 text-sm leading-7 text-slate-600">
        A high CPI index means the representative basket of goods and
        services costs substantially more than it did in the base period.
        Households may need to spend more money to maintain the same
        consumption pattern.
      </p>

      <div className="mt-4 rounded-xl bg-orange-50 p-4">
        <p className="font-bold text-slate-950">Example</p>
        <p className="mt-2 text-sm leading-6 text-slate-700">
          Suppose the base-period basket cost ₹10,000 when CPI was 100.
          If the CPI later reaches 150, the equivalent basket costs
          approximately ₹15,000.
        </p>
        <div className="mt-3 rounded-lg border border-orange-200 bg-white p-3">
          <p className="text-sm font-bold text-orange-800">
            CPI = 150
          </p>
          <p className="mt-1 text-sm text-slate-700">
            Basket cost: ₹15,000 — 50% higher than in the base period.
          </p>
        </div>
      </div>
    </article>

    {/* LOW CPI */}
    <article className="rounded-2xl border border-blue-200 bg-white p-5 sm:p-6">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
        <TrendingDown size={25} aria-hidden="true" />
      </div>

      <h3 className="mt-4 text-xl font-bold text-slate-950">
        When CPI Is Low
      </h3>

      <p className="mt-3 text-sm leading-7 text-slate-600">
        A low CPI index means the representative basket costs less
        relative to the base period than a basket with a higher index.
        However, a low CPI does not automatically mean that prices are
        currently falling or that every item is inexpensive.
      </p>

      <div className="mt-4 rounded-xl bg-blue-50 p-4">
        <p className="font-bold text-slate-950">Example</p>
        <p className="mt-2 text-sm leading-6 text-slate-700">
          Suppose the base-period basket cost ₹10,000 when CPI was 100.
          If the CPI is 90 in a comparison period, the equivalent basket
          costs approximately ₹9,000.
        </p>
        <div className="mt-3 rounded-lg border border-blue-200 bg-white p-3">
          <p className="text-sm font-bold text-blue-800">
            CPI = 90
          </p>
          <p className="mt-1 text-sm text-slate-700">
            Basket cost: ₹9,000 — 10% lower than in the base period.
          </p>
        </div>
      </div>
    </article>
  </div>

  {/* IMPORTANT DISTINCTION */}
  <div className="mt-6 rounded-2xl border border-violet-200 bg-gradient-to-r from-violet-50 via-white to-blue-50 p-5 sm:p-6">
    <h3 className="text-lg font-bold text-slate-950">
      Important: CPI Level Is Not The Same As CPI Inflation
    </h3>

    <p className="mt-2 text-sm leading-7 text-slate-700">
      CPI tells us how the basket's cost compares with the base period.
      CPI inflation tells us the percentage change in the CPI over a
      specified period, commonly the same month of the previous year.
    </p>

    <div className="mt-4 grid gap-4 sm:grid-cols-2">
      <div className="rounded-xl border border-white bg-white p-4">
        <p className="text-sm font-bold text-violet-800">
          CPI Index
        </p>
        <p className="mt-2 text-sm leading-6 text-slate-700">
          CPI increases from 100 to 150.
        </p>
        <p className="mt-1 text-sm font-bold text-slate-950">
          Basket cost is 50% higher than in the base period.
        </p>
      </div>

      <div className="rounded-xl border border-white bg-white p-4">
        <p className="text-sm font-bold text-blue-800">
          CPI Inflation
        </p>
        <p className="mt-2 text-sm leading-6 text-slate-700">
          CPI rises from 145 last year to 150 this year.
        </p>
        <p className="mt-1 text-sm font-bold text-slate-950">
          Year-on-year inflation is approximately 3.45%.
        </p>
      </div>
    </div>

    <p className="mt-4 text-sm leading-7 text-slate-600">
      Therefore, a high CPI index can exist alongside low current
      inflation. The index reflects the accumulated difference from the
      base period, while inflation measures the change over a particular
      period.
    </p>
  </div>
</section>

<AdSlot />
   
{/* MIDDLE CLASS FAMILY EXAMPLE */}
<section className="border-y border-violet-100 bg-gradient-to-br from-violet-50 via-white to-blue-50">
  <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16">
    <SectionHeading
      number="06"
      eyebrow="Family Budget"
      title="Why Is CPI Important For A Middle-Class Family?"
      description="CPI helps families understand changes in the cost of everyday living. When consumer prices rise or fall, the money needed for household expenses can change too."
    />

    <div className="grid gap-5 lg:grid-cols-2">
      {/* CPI INCREASES */}
      <article className="rounded-2xl border border-orange-200 bg-white p-5 sm:p-6">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-orange-700">
          <TrendingUp size={25} aria-hidden="true" />
        </div>

        <h3 className="mt-4 text-xl font-bold text-slate-950">
          What Happens When CPI Increases?
        </h3>

        <p className="mt-3 text-sm leading-7 text-slate-600">
          When the CPI rises, the representative basket of goods and services
          becomes more expensive relative to the base period. A family may
          need to spend more on groceries, transport, electricity and other
          regular expenses to maintain a similar lifestyle.
        </p>

        <div className="mt-5 rounded-xl bg-orange-50 p-4">
          <p className="font-bold text-slate-950">Monthly Budget Example</p>

          <div className="mt-3 space-y-3">
            <div className="flex items-center justify-between gap-3">
              <span className="text-sm text-slate-600">Earlier monthly expenses</span>
              <span className="font-bold text-slate-950">₹30,000</span>
            </div>

            <div className="flex items-center justify-between gap-3">
              <span className="text-sm text-slate-600">Illustrative increase of 5%</span>
              <span className="font-bold text-orange-700">+₹1,500</span>
            </div>

            <div className="border-t border-orange-200 pt-3">
              <div className="flex items-center justify-between gap-3">
                <span className="font-bold text-slate-800">New monthly expenses</span>
                <span className="text-xl font-bold text-orange-800">₹31,500</span>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-4 text-sm leading-7 text-slate-600">
          If the family's salary stays the same, it has ₹1,500 less available
          each month for savings, education, healthcare or other needs.
        </p>
      </article>

      {/* CPI DECREASES */}
      <article className="rounded-2xl border border-emerald-200 bg-white p-5 sm:p-6">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
          <TrendingDown size={25} aria-hidden="true" />
        </div>

        <h3 className="mt-4 text-xl font-bold text-slate-950">
          What Happens When CPI Decreases?
        </h3>

        <p className="mt-3 text-sm leading-7 text-slate-600">
          A decrease in the CPI index means the representative basket costs
          less than in the comparison period. If household expenses actually
          fall, a family may have more money available for savings and other
          needs.
        </p>

        <div className="mt-5 rounded-xl bg-emerald-50 p-4">
          <p className="font-bold text-slate-950">Monthly Budget Example</p>

          <div className="mt-3 space-y-3">
            <div className="flex items-center justify-between gap-3">
              <span className="text-sm text-slate-600">Earlier monthly expenses</span>
              <span className="font-bold text-slate-950">₹30,000</span>
            </div>

            <div className="flex items-center justify-between gap-3">
              <span className="text-sm text-slate-600">Illustrative decrease of 5%</span>
              <span className="font-bold text-emerald-700">−₹1,500</span>
            </div>

            <div className="border-t border-emerald-200 pt-3">
              <div className="flex items-center justify-between gap-3">
                <span className="font-bold text-slate-800">New monthly expenses</span>
                <span className="text-xl font-bold text-emerald-800">₹28,500</span>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-4 text-sm leading-7 text-slate-600">
          If income remains unchanged and the family's actual expenses fall,
          it has ₹1,500 more each month for savings, debt repayment or other
          purchases.
        </p>
      </article>
    </div>

    {/* WHY CPI MATTERS */}
    <div className="mt-6 rounded-2xl border border-blue-200 bg-white p-5 sm:p-6">
      <h3 className="text-lg font-bold text-slate-950">
        Why Should Families Pay Attention To CPI?
      </h3>

      <div className="mt-4 grid gap-4 sm:grid-cols-3">
        <div className="rounded-xl bg-blue-50 p-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-blue-700">
            <Wallet size={21} aria-hidden="true" />
          </div>
          <h4 className="mt-3 font-bold text-slate-950">Plan Expenses</h4>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Estimate how changes in consumer prices may affect regular
            household spending.
          </p>
        </div>

        <div className="rounded-xl bg-violet-50 p-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-100 text-violet-700">
            <Banknote size={21} aria-hidden="true" />
          </div>
          <h4 className="mt-3 font-bold text-slate-950">Protect Savings</h4>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Understand why rising prices can reduce what the same salary
            can buy.
          </p>
        </div>

        <div className="rounded-xl bg-orange-50 p-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 text-orange-700">
            <ShoppingBasket size={21} aria-hidden="true" />
          </div>
          <h4 className="mt-3 font-bold text-slate-950">Make Decisions</h4>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Review spending priorities when everyday necessities become
            more expensive.
          </p>
        </div>
      </div>
    </div>

    <p className="mt-5 text-sm leading-7 text-slate-500">
      These are simplified examples assuming the family's personal expenses
      change by 5%. CPI is a broad average, so an individual family's actual
      expenses may change by a different amount. Also, a falling inflation
      rate does not necessarily mean the CPI index or household prices have
      decreased.
    </p>
  </div>
</section>


      {/* IMPORTANCE */}
      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16">
        <SectionHeading
          number="07"
          eyebrow="Why CPI Matters"
          title="Why Is CPI Important For Families, Businesses And The Economy?"
          description="CPI is useful because consumer prices influence real incomes, household decisions, business planning and economic policy."
        />

        <div className="grid gap-4 md:grid-cols-2">
          {uses.map((item) => {
            const Icon = item.icon;
            const styles = categoryStyles[item.color];

            return (
              <article
                key={item.title}
                className={`rounded-2xl border ${styles.border} bg-white p-5 sm:p-6`}
              >
                <div className="flex items-center gap-3">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${styles.icon}`}>
                    <Icon size={24} />
                  </div>

                  <h3 className="text-lg font-bold text-slate-950">
                    {item.title}
                  </h3>
                </div>

                <ul className="mt-5 space-y-3">
                  {item.points.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-sm leading-6 text-slate-600">
                      <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-emerald-600" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>

        <div className="mt-6 rounded-2xl border border-blue-200 bg-gradient-to-r from-blue-50 via-white to-indigo-50 p-5 sm:p-7">
          <h3 className="text-xl font-bold text-slate-950">
            CPI And Monetary Policy
          </h3>

          <p className="mt-3 text-sm leading-7 text-slate-600">
            India's retail CPI is an important measure used to assess price
            stability. The Reserve Bank of India considers inflation alongside
            growth, demand, credit conditions and other economic indicators
            when making monetary-policy decisions. CPI is an important input,
            not the only factor in those decisions.
          </p>
        </div>
      </section>

      {/* IS CPI ENOUGH */}
      <section className="border-y border-orange-100 bg-gradient-to-br from-orange-50 via-white to-amber-50">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16">
          <SectionHeading
            number="08"
            eyebrow="Limits Of CPI"
            title="Is CPI Alone Enough To Understand The Economy?"
            description="No. CPI is essential for understanding consumer inflation, but it does not measure every price, every household's experience or the entire economy."
          />

          <div className="grid gap-4 md:grid-cols-2">
            <InfoCard
              icon={CheckCircle2}
              title="What CPI Does Well"
              color="emerald"
            >
              <ul className="space-y-2">
                <li>• Tracks retail price changes across a representative basket.</li>
                <li>• Helps explain changes in household purchasing power.</li>
                <li>• Allows comparisons across periods and published regions.</li>
                <li>• Supports inflation analysis and policy decisions.</li>
              </ul>
            </InfoCard>

            <InfoCard
              icon={AlertTriangle}
              title="What CPI Does Not Tell Us By Itself"
              color="orange"
            >
              <ul className="space-y-2">
                <li>• Whether every family's expenses changed by the same rate.</li>
                <li>• Whether wages and incomes are keeping pace.</li>
                <li>• Whether asset prices such as shares or houses are rising.</li>
                <li>• Whether the economy is growing, shrinking or creating enough jobs.</li>
              </ul>
            </InfoCard>
          </div>

          <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-5 sm:p-7">
            <h3 className="text-xl font-bold text-slate-950">
              Which Other Indicators Should We Look At?
            </h3>

            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-xl border border-blue-200 bg-blue-50 p-4">
                <p className="font-bold text-slate-950">WPI</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  The Wholesale Price Index measures price movements at the
                  wholesale level for covered goods.
                </p>
                <Link
                  href="/economics/inflation/wholesale-price-index-india"
                  className="mt-3 inline-flex items-center gap-1 text-sm font-bold text-blue-700 hover:text-blue-900"
                >
                  Understand WPI <ArrowRight size={15} />
                </Link>
              </div>

              <div className="rounded-xl border border-violet-200 bg-violet-50 p-4">
                <p className="font-bold text-slate-950">GDP Growth</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Helps assess whether economic output is expanding or
                  contracting.
                </p>
                <Link
                  href="/economics/gdp-and-economic-growth"
                  className="mt-3 inline-flex items-center gap-1 text-sm font-bold text-violet-700 hover:text-violet-900"
                >
                  Explore GDP <ArrowRight size={15} />
                </Link>
              </div>

              <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
                <p className="font-bold text-slate-950">Wages And Employment</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Help show whether people are earning more and whether jobs
                  are available.
                </p>
              </div>

              <div className="rounded-xl border border-orange-200 bg-orange-50 p-4">
                <p className="font-bold text-slate-950">Food Inflation</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Separates changes in food prices from the headline consumer
                  inflation rate.
                </p>
              </div>

              <div className="rounded-xl border border-rose-200 bg-rose-50 p-4">
                <p className="font-bold text-slate-950">Interest Rates</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Help explain borrowing costs, saving incentives and monetary
                  conditions.
                </p>
              </div>

              <div className="rounded-xl border border-indigo-200 bg-indigo-50 p-4">
                <p className="font-bold text-slate-950">Regional CPI</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Helps compare inflation rates across states and rural and
                  urban areas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
<AdSlot />
      {/* REGIONAL CPI */}
      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16">
        <SectionHeading
          number="09"
          eyebrow="Regional Differences"
          title="Why Can CPI Differ Between Rural And Urban Areas?"
          description="Household spending patterns, price movements and living arrangements differ across locations. Official CPI statistics therefore report rural, urban and combined results."
        />

        <div className="grid gap-5 md:grid-cols-3">
          <InfoCard
            icon={MapPinned}
            title="Rural Areas"
            color="emerald"
          >
            Food prices, local supply conditions, transport access and the
            composition of household spending can influence the rural
            inflation rate.
          </InfoCard>

          <InfoCard
            icon={Building2}
            title="Urban Areas"
            color="blue"
          >
            Rent, services, commuting and urban consumption patterns can
            influence the urban inflation rate. The effect varies by location
            and by the category being measured.
          </InfoCard>

          <InfoCard
            icon={ChartNoAxesCombined}
            title="Combined CPI"
            color="violet"
          >
            The combined measure brings rural and urban prices together using
            the official statistical methodology and weights. It provides a
            broad national view rather than a perfect measure of every local
            family's cost of living.
          </InfoCard>
        </div>

        <div className="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-5 sm:p-6">
          <h3 className="font-bold text-slate-950">
            A Higher Regional Inflation Rate Does Not Automatically Mean That
            Region Is More Expensive
          </h3>

          <p className="mt-2 text-sm leading-7 text-slate-700">
            Inflation measures the rate of price change over time. A region
            with a lower inflation rate may still have higher absolute prices
            than a region with a higher inflation rate. To compare living costs,
            you also need information about actual price levels, household
            consumption and local incomes.
          </p>

          <a
            href="https://esankhyiki.mospi.gov.in/catalogue-main/catalogue?product=CPI"
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-blue-700 hover:text-blue-900"
          >
            Explore Official State And Regional CPI Data
            <ArrowRight size={16} />
          </a>
        </div>
      </section>

      {/* SUMMARY */}
      <section className="border-t border-blue-100 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16">
          <SectionHeading
            number="10"
            eyebrow="Key Takeaways"
            title="What Should You Remember About CPI?"
            description="CPI is one of the most useful indicators for understanding retail inflation, but the rate must always be read in context."
          />

          <div className="space-y-3">
            {[
              [
                "CPI",
                "Measures changes in retail prices across a representative basket of consumer goods and services.",
              ],
              [
                "Inflation rate",
                "Usually expresses the percentage change in CPI compared with the same month a year earlier.",
              ],
              [
                "Rising inflation",
                "Means prices are increasing faster relative to the comparison period.",
              ],
              [
                "Falling inflation",
                "Usually means prices are still rising, but more slowly. It does not necessarily mean prices are falling.",
              ],
              [
                "Family budgets",
                "Can experience different increases because each household buys a different mix of goods and services.",
              ],
              [
                "Economic decisions",
                "CPI helps governments, businesses and the RBI understand retail price pressure, but it should be considered alongside other indicators.",
              ],
              [
                "Official data",
                "Use the relevant MoSPI release and check the base year, reference month and whether figures are provisional or final.",
              ],
            ].map(([title, text]) => (
              <div
                key={title}
                className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4"
              >
                <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-emerald-600" />
                <p className="text-sm leading-6 text-slate-700">
                  <strong className="text-slate-950">{title}:</strong> {text}
                </p>
              </div>
            ))}
          </div>

         
        </div>
      </section>
    </main>
  );
}
