
import Link from "next/link";
import {
  Users,
  Calculator,
  IndianRupee,
  Globe,
  TrendingUp,
  BookOpen,
  Scale,
  Factory,
  ShoppingCart,
  GraduationCap,
  Info,
  ArrowRight,
  ChartNoAxesCombined,
  Wallet,
  Landmark,
  CircleHelp,
  CheckCircle2,
} from "lucide-react";
import AdSlot from "../../../../components/AdSlot";

export const metadata = {
  title: "GDP Per Capita Explained: Formula, Types & India Example",
  description:
    "Understand GDP per capita with simple formulas, worked examples, nominal and real GDP per capita, PPP comparisons, India's official data, and key limitations.",
  alternates: {
    canonical:
      "https://www.pricetag.co.in/economics/gdp-and-economic-growth/gdp-per-capita",
  },
};

const methods = [
  {
    number: "01",
    title: "Nominal GDP Per Capita",
    subtitle: "GDP at Current Prices",
    icon: IndianRupee,
    color: "border-blue-200 bg-blue-50",
    iconColor: "text-blue-700",
    formula: "GDP at current prices ÷ Population",
    description:
      "Divides the economy's GDP measured using prices in the same period by the population. It is useful for understanding the current-price economic output per person.",
    limitation:
      "It can rise because prices rise, even if the volume of goods and services does not increase by the same amount.",
  },
  {
    number: "02",
    title: "Real GDP Per Capita",
    subtitle: "GDP at Constant Prices",
    icon: ChartNoAxesCombined,
    color: "border-emerald-200 bg-emerald-50",
    iconColor: "text-emerald-700",
    formula: "GDP at constant prices ÷ Population",
    description:
      "Uses GDP adjusted for price changes. Comparing this measure over time helps assess whether real output per person is increasing.",
    limitation:
      "It is still an average of economic production, not a measure of each person's income or purchasing power.",
  },
  {
    number: "03",
    title: "GDP Per Capita At PPP",
    subtitle: "Purchasing Power Parity",
    icon: Globe,
    color: "border-violet-200 bg-violet-50",
    iconColor: "text-violet-700",
    formula: "GDP converted using a PPP conversion factor ÷ Population",
    description:
      "Uses purchasing power parity to account for differences in price levels between countries. It helps compare the volume of goods and services economies can purchase more meaningfully.",
    limitation:
      "PPP is a statistical comparison, not the amount of foreign currency a person can exchange or receive.",
  },
];

const uses = [
  {
    title: "Compare Economic Output Per Person",
    text: "A country with a large population may have a very large total GDP. GDP per capita adds population context to that total.",
    icon: Users,
    color: "bg-blue-100 text-blue-800",
  },
  {
    title: "Track Changes Over Time",
    text: "Real GDP per capita helps assess whether output is growing faster or slower than population after adjusting for price changes.",
    icon: TrendingUp,
    color: "bg-emerald-100 text-emerald-800",
  },
  {
    title: "Compare Countries",
    text: "Nominal figures can be useful for some economic comparisons, while PPP-based figures help account for differences in living costs.",
    icon: Globe,
    color: "bg-violet-100 text-violet-800",
  },
  {
    title: "Support Economic Planning",
    text: "Researchers and policymakers can use it alongside employment, poverty, health, education, and inequality indicators.",
    icon: Landmark,
    color: "bg-amber-100 text-amber-800",
  },
];

const limitations = [
  {
    title: "It Is An Average",
    text: "A national average can be high even when a large share of the population produces or receives much less than that average.",
  },
  {
    title: "It Is Not A Salary",
    text: "GDP includes value added from businesses, government services, and other production. It is not the total wages paid to residents.",
  },
  {
    title: "It Does Not Show Inequality",
    text: "The same GDP per capita can exist in countries with very different distributions of income and wealth.",
  },
  {
    title: "It Does Not Fully Measure Living Standards",
    text: "Health, education, housing costs, public services, safety, leisure, and environmental quality matter too.",
  },
  {
    title: "Price Changes Matter",
    text: "Nominal GDP per capita can increase due to inflation. Real GDP per capita is more useful for examining changes in output volume.",
  },
  {
    title: "Population Estimates Matter",
    text: "The calculation depends on population data and the period it represents. Revised GDP or population estimates can change the result.",
  },
];

const faqs = [
  {
    question: "What Is GDP Per Capita In Simple Words?",
    answer:
      "GDP per capita is a country's total gross domestic product divided by its population. It tells us the average economic output associated with each person, not how much money each person actually earns.",
  },
  {
    question: "What Is The Formula For GDP Per Capita?",
    answer:
      "GDP per capita = Total GDP ÷ Population. The GDP figure and population must refer to compatible periods. You should also identify whether GDP is measured at current prices, constant prices, or using a PPP conversion.",
  },
  {
    question: "Is GDP Per Capita The Same As Per-Capita Income?",
    answer:
      "No. GDP per capita measures domestic production divided by population. In India's official statistics, per-capita net national income (NNI) is a different measure. It accounts for national income concepts and depreciation rather than simply dividing GDP by population.",
  },
  {
    question: "Does GDP Per Capita Mean Everyone Earns That Amount?",
    answer:
      "No. It is an arithmetic average, not an individual payment, salary, or household income estimate. Some people earn much more, others earn less, and some may have no earned income.",
  },
  {
    question: "Why Is Real GDP Per Capita Useful?",
    answer:
      "It adjusts GDP for price changes and divides it by population. It helps examine whether real economic output per person is growing over time, although it does not by itself establish how individual living standards have changed.",
  },
  {
    question: "Why Do Economists Use PPP GDP Per Capita?",
    answer:
      "Prices differ across countries. PPP adjustments help compare what economic output can buy in each country, reducing distortions that arise from using market exchange rates alone.",
  },
  {
    question: "Can GDP Per Capita Rise While Some People Become Poorer?",
    answer:
      "Yes. GDP per capita can rise while income inequality increases, particular industries decline, or some households face rising living costs. The measure does not show how gains are distributed.",
  },
  {
    question: "Where Can I Find India's Official GDP Per Capita Data?",
    answer:
      "The Ministry of Statistics and Programme Implementation (MoSPI) publishes National Accounts Statistics, including statements on per-capita income, product, and final consumption at current and constant prices. Always check the publication date and whether the estimates have been revised.",
  },
];

export default function GDPPerCapitaPage() {
  return (
    <main className="min-h-screen bg-white text-slate-800">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-blue-100 bg-gradient-to-br from-white via-blue-50 to-indigo-50">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-bold text-blue-800">
                <Calculator className="h-4 w-4" />
                Economics Made Simple
              </div>

              <h1 className="max-w-3xl text-3xl font-bold leading-tight text-slate-950 sm:text-5xl">
                GDP Per Capita: Meaning, Formula, Types And Real Examples
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                Why do economists divide GDP by population? Learn what the
                result means, why it matters, how to calculate it, and why it
                must never be confused with the money an individual earns.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#formula"
                  className="inline-flex items-center gap-2 rounded-xl bg-blue-700 px-5 py-3 font-bold text-white transition hover:bg-blue-800"
                >
                  Learn The Formula
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#india-example"
                  className="inline-flex items-center gap-2 rounded-xl border border-blue-200 bg-white px-5 py-3 font-bold text-blue-800 transition hover:bg-blue-50"
                >
                  India's Real Example
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-blue-100 bg-white p-6 shadow-sm sm:p-8">
              <div className="mb-5 inline-flex rounded-2xl bg-blue-100 p-3 text-blue-800">
                <Users className="h-7 w-7" />
              </div>

              <h2 className="text-2xl font-bold text-slate-950">
                The Basic Idea
              </h2>

              <div className="mt-6 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 p-5 text-center">
                <p className="text-sm font-bold text-slate-600">
                  Total Economic Output
                </p>
                <div className="my-3 border-t-2 border-blue-300" />
                <p className="text-sm font-bold text-slate-600">
                  Total Population
                </p>
                <div className="my-4 flex justify-center">
                  <ArrowRight className="h-6 w-6 rotate-90 text-blue-700" />
                </div>
                <p className="text-2xl font-bold text-blue-800">
                  GDP Per Capita
                </p>
              </div>

              <p className="mt-5 leading-7 text-slate-600">
                It answers: if the economy's total production were divided
                equally across the population as a mathematical average, what
                would the amount be per person?
              </p>

              <p className="mt-3 text-sm font-bold text-rose-700">
                This is not what each person actually receives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Definition */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.85fr]">
          <div>
            <h2 className="text-2xl font-bold text-slate-950 sm:text-3xl">
              What Is GDP Per Capita?
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              GDP stands for Gross Domestic Product. It measures the value of
              final goods and services produced within a country's domestic
              economy during a specified period. Per capita means "per person."
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              GDP per capita is calculated by dividing total GDP by the
              population. It combines two pieces of information: the size of
              the economy and the number of people in it.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              This makes it useful when comparing countries of different
              population sizes or studying how economic output per person
              changes over time.
            </p>
          </div>

          <aside className="rounded-3xl border border-amber-200 bg-gradient-to-br from-amber-50 to-orange-50 p-6 sm:p-8">
            <div className="mb-4 inline-flex rounded-2xl bg-white p-3 text-amber-800">
              <Info className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-950">
              The Most Important Distinction
            </h3>
            <p className="mt-4 leading-7 text-slate-700">
              Imagine a country has GDP per capita of ₹2,00,000. It does not
              mean that the government gives every resident ₹2,00,000, or that
              every worker earns ₹2,00,000 per year.
            </p>
            <p className="mt-3 leading-7 text-slate-700">
              GDP includes production and value added across the economy, not
              just personal wages. The number is an average economic indicator.
            </p>
          </aside>
        </div>
      </section>
<AdSlot />
      {/* Why needed */}
      <section className="border-y border-slate-100 bg-slate-50 py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-950 sm:text-3xl">
            Why Is GDP Per Capita Required?
          </h2>

          <p className="mt-4 max-w-3xl leading-8 text-slate-600">
            Total GDP alone can be misleading when comparing countries. A
            country with many more people may produce more in total without
            producing as much per person.
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {uses.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="rounded-3xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-sm"
                >
                  <div className={`mb-4 inline-flex rounded-2xl p-3 ${item.color}`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-950">
                    {item.title}
                  </h3>
                  <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Formula */}
      <section
        id="formula"
        className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8"
      >
        <h2 className="text-2xl font-bold text-slate-950 sm:text-3xl">
          GDP Per Capita Formula
        </h2>

        <div className="mt-6 rounded-3xl border border-blue-200 bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-6 sm:p-10">
          <p className="text-center text-sm font-bold uppercase tracking-wide text-blue-800">
            The Core Formula
          </p>
          <p className="mt-4 text-center text-2xl font-bold text-slate-950 sm:text-4xl">
            GDP Per Capita = Total GDP ÷ Population
          </p>
          <div className="mx-auto mt-6 max-w-3xl rounded-2xl bg-white p-5">
            <p className="font-bold text-slate-950">Example</p>
            <p className="mt-2 leading-7 text-slate-600">
              Suppose a small economy produces goods and services worth ₹10,000
              crore in one year and has a population of 5 lakh people.
            </p>
            <div className="mt-4 rounded-xl bg-emerald-50 p-4">
              <p className="font-bold text-emerald-900">
                ₹10,000 crore ÷ 5 lakh people = ₹2,00,000 per person
              </p>
              <p className="mt-2 text-sm leading-6 text-emerald-900">
                This is the economy's GDP per capita for that period. It is not
                a statement that every person earned ₹2,00,000.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {[
            {
              title: "Step 1: Find GDP",
              text: "Use a GDP figure for the selected country and financial or calendar year.",
              color: "border-blue-200 bg-blue-50",
            },
            {
              title: "Step 2: Find Population",
              text: "Use a compatible population estimate for the same period.",
              color: "border-violet-200 bg-violet-50",
            },
            {
              title: "Step 3: Divide",
              text: "Keep the units consistent, then label the result with its year and price basis.",
              color: "border-emerald-200 bg-emerald-50",
            },
          ].map((item) => (
            <article
              key={item.title}
              className={`rounded-2xl border ${item.color} p-5`}
            >
              <h3 className="font-bold text-slate-950">{item.title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
            </article>
          ))}
        </div>
      </section>
 <AdSlot />
      {/* Three calculation methods */}
      <section className="border-y border-blue-100 bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-950 sm:text-3xl">
            Three Main Ways To Express GDP Per Capita
          </h2>
          <p className="mt-4 max-w-3xl leading-8 text-slate-600">
            The basic division stays the same, but the GDP figure and currency
            conversion can differ. Choose the measure that answers the question
            you are asking.
          </p>

          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {methods.map((method) => {
              const Icon = method.icon;

              return (
                <article
                  key={method.number}
                  className={`rounded-3xl border ${method.color} p-6`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="rounded-2xl bg-white p-3">
                      <Icon className={`h-6 w-6 ${method.iconColor}`} />
                    </div>
                    <span className="text-sm font-bold text-slate-500">
                      {method.number}
                    </span>
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-slate-950">
                    {method.title}
                  </h3>
                  <p className="mt-1 text-sm font-bold text-slate-600">
                    {method.subtitle}
                  </p>
                  <p className="mt-4 leading-7 text-slate-700">
                    {method.description}
                  </p>

                  <div className="mt-5 rounded-2xl bg-white p-4">
                    <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
                      Formula
                    </p>
                    <p className="mt-2 font-bold text-slate-950">
                      {method.formula}
                    </p>
                  </div>

                  <p className="mt-4 text-sm leading-6 text-slate-700">
                    <span className="font-bold">Limitation: </span>
                    {method.limitation}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Detailed examples */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <h2 className="text-2xl font-bold text-slate-950 sm:text-3xl">
          GDP Per Capita Examples
        </h2>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <article className="rounded-3xl border border-blue-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="mb-4 inline-flex rounded-2xl bg-blue-100 p-3 text-blue-800">
              <Factory className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-950">
              Example 1: Two Different Countries
            </h3>

            <p className="mt-3 leading-7 text-slate-600">
              Assume these are simplified fictional economies, with GDP and
              population measured over the same period.
            </p>

            <div className="mt-5 overflow-x-auto rounded-2xl border border-slate-200">
              <table className="w-full min-w-[360px] text-left text-sm">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="px-4 py-3 font-bold">Measure</th>
                    <th className="px-4 py-3 font-bold">Country A</th>
                    <th className="px-4 py-3 font-bold">Country B</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-slate-100">
                    <td className="px-4 py-3">Total GDP</td>
                    <td className="px-4 py-3">₹20 lakh crore</td>
                    <td className="px-4 py-3">₹12 lakh crore</td>
                  </tr>
                  <tr className="border-t border-slate-100">
                    <td className="px-4 py-3">Population</td>
                    <td className="px-4 py-3">10 crore</td>
                    <td className="px-4 py-3">3 crore</td>
                  </tr>
                  <tr className="border-t border-slate-100 bg-blue-50">
                    <td className="px-4 py-3 font-bold">GDP Per Capita</td>
                    <td className="px-4 py-3 font-bold text-blue-800">
                      ₹2,00,000
                    </td>
                    <td className="px-4 py-3 font-bold text-blue-800">
                      ₹4,00,000
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-5 rounded-2xl bg-blue-50 p-4">
              <p className="font-bold text-blue-950">What Do We Learn?</p>
              <p className="mt-2 leading-7 text-blue-950">
                Country A has the larger total economy, but Country B has the
                higher GDP per person. Population changes the interpretation
                of total GDP.
              </p>
            </div>
          </article>

          <article className="rounded-3xl border border-emerald-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="mb-4 inline-flex rounded-2xl bg-emerald-100 p-3 text-emerald-800">
              <TrendingUp className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-950">
              Example 2: GDP Per Capita Over Time
            </h3>

            <p className="mt-3 leading-7 text-slate-600">
              Suppose a country's real GDP and population change as follows.
              These figures are illustrative.
            </p>

            <div className="mt-5 space-y-4">
              <div className="rounded-2xl border border-slate-200 p-4">
                <p className="font-bold text-slate-950">Year 1</p>
                <p className="mt-2 text-sm text-slate-600">
                  Real GDP: ₹100 crore
                </p>
                <p className="text-sm text-slate-600">Population: 1 lakh</p>
                <p className="mt-3 text-xl font-bold text-blue-800">
                  ₹10,000 per person
                </p>
              </div>

              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
                <p className="font-bold text-slate-950">Year 2</p>
                <p className="mt-2 text-sm text-slate-600">
                  Real GDP: ₹120 crore
                </p>
                <p className="text-sm text-slate-600">Population: 1.1 lakh</p>
                <p className="mt-3 text-xl font-bold text-emerald-800">
                  About ₹10,909 per person
                </p>
              </div>
            </div>

            <p className="mt-5 leading-7 text-slate-600">
              Real GDP per capita increased by about 9.1%. Total real GDP grew
              by 20%, but population also increased by 10%. The output available
              per person therefore rose more slowly than total output.
            </p>
          </article>
        </div>
      </section>

      {/* India official data */}
      <section
        id="india-example"
        className="border-y border-blue-100 bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-14 sm:py-16"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-bold text-blue-800">
              <Globe className="h-4 w-4" />
              Official India Example
            </div>

            <h2 className="text-2xl font-bold text-slate-950 sm:text-3xl">
              GDP Per Capita In India
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              India's Ministry of Statistics and Programme Implementation
              (MoSPI) publishes GDP and population estimates through its
              National Accounts Statistics releases. The latest revised GDP
              totals published on 31 August 2026 are useful for demonstrating
              the calculation.
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <article className="rounded-3xl border border-blue-200 bg-white p-6">
              <p className="text-sm font-bold text-slate-500">
                FY 2025–26
              </p>
              <h3 className="mt-3 text-2xl font-bold text-blue-800">
                ₹345.37 Lakh Crore
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Updated nominal GDP at current prices.
              </p>
            </article>

            <article className="rounded-3xl border border-indigo-200 bg-white p-6">
              <p className="text-sm font-bold text-slate-500">
                Population Used For Illustration
              </p>
              <h3 className="mt-3 text-2xl font-bold text-indigo-800">
                1,421 Million
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                The population estimate shown in the official June 2026 GDP
                statement. It is used here for an illustrative calculation
                with the updated GDP total.
              </p>
            </article>

            <article className="rounded-3xl border border-emerald-200 bg-white p-6">
              <p className="text-sm font-bold text-slate-500">
                Approximate Calculation
              </p>
              <h3 className="mt-3 text-2xl font-bold text-emerald-800">
                ₹2.43 Lakh
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Approximate current-price GDP per capita, derived from the
                revised GDP total divided by the cited population estimate.
              </p>
            </article>
          </div>

          <div className="mt-7 rounded-3xl border border-blue-200 bg-white p-6 sm:p-8">
            <h3 className="text-xl font-bold text-slate-950">
              Calculation Using India's Figures
            </h3>

            <p className="mt-4 leading-7 text-slate-600">
              Convert GDP into rupees and divide it by the population. Using
              ₹345.36796 lakh crore and a population of 1,421 million:
            </p>

            <div className="mt-5 overflow-x-auto rounded-2xl bg-blue-50 p-5">
              <p className="min-w-[280px] text-center text-lg font-bold text-blue-950 sm:text-2xl">
                ₹345.36796 lakh crore ÷ 1,421 million people
              </p>
              <p className="mt-3 text-center text-sm font-bold text-slate-600">
                Approximately ₹2,43,000 per person per year
              </p>
            </div>

            <div className="mt-5 rounded-2xl border border-amber-200 bg-amber-50 p-5">
              <p className="font-bold text-amber-950">
                Important Data Qualification
              </p>
              <p className="mt-2 leading-7 text-amber-950">
                This is a derived approximation, not a separately published
                official per-capita figure. The GDP total was revised in August
                2026, while the population estimate cited here appears in the
                June 2026 statement. For a precise official figure, use the
                per-capita row and population from the same updated National
                Accounts Statistics release.
              </p>
            </div>

            <p className="mt-5 leading-7 text-slate-600">
              Most importantly, approximately ₹2.43 lakh is not the salary or
              income of every Indian. It is a statistical average of domestic
              economic output per person using the figures above.
            </p>

            <div className="mt-6 flex flex-col gap-3">
              <a
                href="https://www.pib.gov.in/PressReleasePage.aspx?PRID=2304948"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 font-bold text-blue-700 underline decoration-blue-300 underline-offset-4 hover:text-blue-900"
              >
                Read MoSPI's Updated National Accounts Statistics Release
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href="https://www.mospi.gov.in/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 font-bold text-blue-700 underline decoration-blue-300 underline-offset-4 hover:text-blue-900"
              >
                Visit The Official MoSPI Website
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

  <AdSlot />
{/* GDP Per Capita Vs Per-Capita Income */}
<section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
  <h2 className="text-2xl font-bold text-slate-950 sm:text-3xl">
    GDP Per Capita Vs Per-Capita Income In India
  </h2>

  <p className="mt-4 max-w-3xl leading-8 text-slate-600">
    GDP per capita and per-capita income are related economic indicators,
    but they do not measure exactly the same thing. GDP per capita focuses
    on domestic production, while per-capita income usually refers to a
    national income measure divided by the population.
  </p>

  <div className="mt-8 grid gap-5 md:grid-cols-2">
    <article className="rounded-3xl border border-blue-200 bg-gradient-to-br from-blue-50 to-white p-6 sm:p-8">
      <div className="mb-4 inline-flex rounded-2xl bg-blue-100 p-3 text-blue-800">
        <Factory className="h-6 w-6" />
      </div>

      <h3 className="text-xl font-bold text-slate-950">
        GDP Per Capita
      </h3>

      <p className="mt-3 leading-7 text-slate-600">
        Calculated by dividing India's Gross Domestic Product (GDP) by
        its population. GDP measures the value of final goods and services
        produced within India's domestic economy.
      </p>

      <div className="mt-5 rounded-2xl bg-white p-4">
        <p className="text-sm font-bold text-slate-500">Formula</p>
        <p className="mt-2 font-bold text-blue-800">
          GDP ÷ Population
        </p>
      </div>

      <p className="mt-4 leading-7 text-slate-600">
        It helps explain the average value of domestic economic output
        associated with each person. It does not mean that each person
        actually receives that amount.
      </p>
    </article>

    <article className="rounded-3xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-white p-6 sm:p-8">
      <div className="mb-4 inline-flex rounded-2xl bg-emerald-100 p-3 text-emerald-800">
        <Wallet className="h-6 w-6" />
      </div>

      <h3 className="text-xl font-bold text-slate-950">
        Per-Capita Income
      </h3>

      <p className="mt-3 leading-7 text-slate-600">
        This term is often used for national income per person. In
        India's official statistics, per-capita Net National Income
        (NNI) is a commonly quoted measure of average income.
      </p>

      <div className="mt-5 rounded-2xl bg-white p-4">
        <p className="text-sm font-bold text-slate-500">Common Official Measure</p>
        <p className="mt-2 font-bold text-emerald-800">
          Net National Income ÷ Population
        </p>
      </div>

      <p className="mt-4 leading-7 text-slate-600">
        NNI accounts for income concepts at the national level and
        deducts depreciation of fixed assets. It is not the same as
        the average salary, take-home pay, or median household income.
      </p>
    </article>
  </div>

  {/* Numerical example */}
  <div className="mt-8 rounded-3xl border border-indigo-200 bg-gradient-to-br from-indigo-50 via-white to-blue-50 p-6 sm:p-8">
    <h3 className="text-xl font-bold text-slate-950">
      A Simple Example
    </h3>

    <p className="mt-3 leading-7 text-slate-600">
      Imagine a fictional country with a population of 10 people.
      During one year, it produces goods and services worth ₹10 lakh.
      Its net national income, after accounting for relevant national
      income adjustments, is ₹8 lakh.
    </p>

    <div className="mt-6 grid gap-4 sm:grid-cols-2">
      <div className="rounded-2xl border border-blue-200 bg-white p-5">
        <p className="font-bold text-blue-800">GDP Per Capita</p>
        <p className="mt-2 text-2xl font-bold text-slate-950">
          ₹1,00,000
        </p>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          ₹10,00,000 ÷ 10 people
        </p>
      </div>

      <div className="rounded-2xl border border-emerald-200 bg-white p-5">
        <p className="font-bold text-emerald-800">
          Per-Capita Net National Income
        </p>
        <p className="mt-2 text-2xl font-bold text-slate-950">
          ₹80,000
        </p>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          ₹8,00,000 ÷ 10 people
        </p>
      </div>
    </div>

    <p className="mt-5 leading-7 text-slate-700">
      The two figures differ because domestic production and net
      national income are different economic measures. These numbers
      are illustrative, not actual Indian statistics.
    </p>
  </div>

  {/* Related measures */}
  <div className="mt-10">
    <h3 className="text-xl font-bold text-slate-950">
      Other Related Economic Measures
    </h3>

    <p className="mt-3 leading-7 text-slate-600">
      India's national accounts also publish other indicators. They
      answer different questions and should not be treated as
      interchangeable.
    </p>

    <div className="mt-5 overflow-x-auto rounded-2xl border border-slate-200">
      <table className="w-full min-w-[600px] text-left text-sm">
        <thead className="bg-slate-100 text-slate-900">
          <tr>
            <th className="px-5 py-4 font-bold">Measure</th>
            <th className="px-5 py-4 font-bold">Meaning</th>
            <th className="px-5 py-4 font-bold">Best Used For</th>
          </tr>
        </thead>

        <tbody>
          <tr className="border-t border-slate-100">
            <td className="px-5 py-4 font-bold text-violet-800">
              GNI Per Capita
            </td>
            <td className="px-5 py-4 leading-6">
              Gross National Income divided by population.
            </td>
            <td className="px-5 py-4 leading-6">
              Average gross national income per person.
            </td>
          </tr>

          <tr className="border-t border-slate-100">
            <td className="px-5 py-4 font-bold text-emerald-800">
              NNI Per Capita
            </td>
            <td className="px-5 py-4 leading-6">
              Net National Income divided by population.
            </td>
            <td className="px-5 py-4 leading-6">
              India's official per-capita net national income measure.
            </td>
          </tr>

          <tr className="border-t border-slate-100">
            <td className="px-5 py-4 font-bold text-amber-800">
              PFCE Per Capita
            </td>
            <td className="px-5 py-4 leading-6">
              Private Final Consumption Expenditure divided by population.
            </td>
            <td className="px-5 py-4 leading-6">
              Average private consumption expenditure per person.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  {/* Conclusion */}
  <div className="mt-7 rounded-2xl border border-blue-200 bg-blue-50 p-5">
    <p className="font-bold text-blue-950">
      Which One Should You Use?
    </p>

    <ul className="mt-3 space-y-2 leading-7 text-blue-950">
      <li>
        <strong>GDP per capita:</strong> When discussing domestic
        production per person.
      </li>
      <li>
        <strong>NNI per capita:</strong> When discussing India's
        official per-capita net national income.
      </li>
      <li>
        <strong>Average or median salary:</strong> When discussing
        what workers earn; use appropriate wage or household survey
        data instead.
      </li>
    </ul>

    <p className="mt-4 leading-7 text-blue-950">
      Remember: neither GDP per capita nor NNI per capita tells us
      exactly how much money a typical Indian personally earns or
      receives.
    </p>
  </div>
</section>

{/* PPP */}
<section className="border-y border-violet-100 bg-gradient-to-br from-violet-50 via-white to-indigo-50 py-14 sm:py-16">
  <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
    <div className="grid items-start gap-8 lg:grid-cols-[1fr_0.8fr]">
      <div>
        <h2 className="text-2xl font-bold text-slate-950 sm:text-3xl">
          What Is Purchasing Power Parity (PPP)?
        </h2>

        <p className="mt-5 leading-8 text-slate-600">
          Purchasing Power Parity (PPP) is an economic method used to
          compare the purchasing power of different countries' currencies
          by accounting for differences in the prices of goods and
          services. It estimates how much money is needed in each country
          to buy a comparable basket of goods and services.
        </p>

        <p className="mt-4 leading-8 text-slate-600">
          For example, if a similar basket of goods costs ₹500 in India
          and an equivalent amount in another country's currency elsewhere,
          PPP helps economists compare the cost of that basket without
          relying only on the market exchange rate.
        </p>

        <h3 className="mt-7 text-xl font-bold text-slate-950">
          Why Does PPP Matter?
        </h3>

        <p className="mt-3 leading-8 text-slate-600">
          Prices vary between countries. Food, transport, housing, and
          services may cost much less in one country than in another.
          Converting GDP using market exchange rates alone does not fully
          account for these differences.
        </p>

        <p className="mt-4 leading-8 text-slate-600">
          GDP per capita at PPP adjusts for differences in price levels,
          making it more useful for comparing the volume of goods and
          services associated with economic output per person across
          countries.
        </p>

        <p className="mt-4 leading-8 text-slate-600">
          PPP is not a market currency exchange rate. Nor does a country's
          GDP per capita at PPP mean that every person can afford the same
          basket of goods or receives that amount as income.
        </p>
      </div>

      <div className="rounded-3xl border border-violet-200 bg-white p-6 sm:p-8">
        <div className="mb-4 inline-flex rounded-2xl bg-violet-100 p-3 text-violet-800">
          <Scale className="h-6 w-6" />
        </div>

        <h3 className="text-xl font-bold text-slate-950">
          A Simple Fictional Example
        </h3>

        <p className="mt-4 leading-7 text-slate-600">
          Suppose a comparable basket of goods and services costs 100
          currency units in Country A and 50 currency units in Country B.
        </p>

        <div className="mt-5 space-y-3">
          <div className="rounded-xl bg-blue-50 p-4">
            <p className="font-bold text-blue-950">Country A</p>
            <p className="mt-1 text-sm text-slate-600">
              Comparable basket: 100 local currency units.
            </p>
          </div>

          <div className="rounded-xl bg-violet-50 p-4">
            <p className="font-bold text-violet-950">Country B</p>
            <p className="mt-1 text-sm text-slate-600">
              Comparable basket: 50 local currency units.
            </p>
          </div>
        </div>

        <p className="mt-5 leading-7 text-slate-600">
          The basket costs half as much in Country B in this simplified
          example. PPP comparisons use broader price data to adjust for
          such differences when comparing economic output across countries.
        </p>
      </div>
    </div>
  </div>
</section>
<AdSlot />
      {/* Growth interpretation */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <h2 className="text-2xl font-bold text-slate-950 sm:text-3xl">
          How To Interpret GDP Per Capita Growth
        </h2>

        <div className="mt-6 grid gap-5 md:grid-cols-2">
          <article className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6">
            <div className="mb-4 inline-flex rounded-2xl bg-white p-3 text-emerald-800">
              <TrendingUp className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-950">
              When Real GDP Per Capita Rises
            </h3>
            <p className="mt-3 leading-7 text-slate-700">
              Real output is growing faster than population, or population is
              falling relative to output. This can indicate an increase in
              average real production per person.
            </p>
          </article>

          <article className="rounded-3xl border border-rose-200 bg-rose-50 p-6">
            <div className="mb-4 inline-flex rounded-2xl bg-white p-3 text-rose-800">
              <ChartNoAxesCombined className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-950">
              When Real GDP Per Capita Falls
            </h3>
            <p className="mt-3 leading-7 text-slate-700">
              Real output per person is declining. This can happen when total
              real output contracts, population grows faster than output, or
              both occur.
            </p>
          </article>
        </div>

        <div className="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-5">
          <p className="font-bold text-blue-950">
            The Key Rule For Comparing Years
          </p>
          <p className="mt-2 leading-7 text-blue-950">
            To study changes in real output per person, compare real GDP per
            capita across years using a consistent national-accounts series.
            Do not treat an increase in nominal GDP per capita as proof that
            real living standards improved by the same percentage.
          </p>
        </div>
      </section>

      {/* Limitations */}
      <section className="border-y border-slate-100 bg-slate-50 py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-950 sm:text-3xl">
            Limitations Of GDP Per Capita
          </h2>

          <p className="mt-4 max-w-3xl leading-8 text-slate-600">
            It is an important economic indicator, but it cannot describe an
            entire society or the financial situation of every household.
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {limitations.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-5"
              >
                <h3 className="font-bold text-slate-950">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
              </article>
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
                Official Sources For GDP Per Capita
              </h2>

              <p className="mt-3 leading-7 text-slate-600">
                For research or publication, prefer national statistical
                releases over unsourced summaries. Check the base year, price
                basis, reference period, and estimate status before comparing
                values.
              </p>

              <div className="mt-5 flex flex-col gap-4">
                <a
                  href="https://www.mospi.gov.in/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 font-bold text-blue-700 underline decoration-blue-300 underline-offset-4 hover:text-blue-900"
                >
                  MoSPI — Ministry Of Statistics And Programme Implementation
                  <ArrowRight className="h-4 w-4" />
                </a>

                <a
                  href="https://www.pib.gov.in/PressReleasePage.aspx?PRID=2304948"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 font-bold text-blue-700 underline decoration-blue-300 underline-offset-4 hover:text-blue-900"
                >
                  National Accounts Statistics — Updated August 2026 Release
                  <ArrowRight className="h-4 w-4" />
                </a>

                <a
                  href="https://www.mospi.gov.in/themes/product/6-gross-domestic-product"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 font-bold text-blue-700 underline decoration-blue-300 underline-offset-4 hover:text-blue-900"
                >
                  MoSPI — GDP And National Accounts Data
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
            Frequently Asked Questions
          </h2>

          <div className="mt-8 space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-slate-200 bg-white p-5 open:border-blue-200 open:bg-blue-50/50"
              >
                <summary className="cursor-pointer list-none font-bold text-slate-950">
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
