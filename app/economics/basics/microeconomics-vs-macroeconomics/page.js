
import Link from "next/link";
import {
  Users,
  Store,
  Building2,
  Globe2,
  TrendingUp,
  TrendingDown,
  ShoppingCart,
  Wallet,
  BriefcaseBusiness,
  Factory,
  Landmark,
  BarChart3,
  ArrowRight,
  CheckCircle2,
  Lightbulb,
  Scale,
  Target,
  GraduationCap,
  IndianRupee,
  Activity,
  CircleHelp,
} from "lucide-react";
import AdSlot from "../../../../components/AdSlot";
import RelatedTopics from "../../../../components/ContinueReading";
export const metadata = {
  title:
    "MicroEconomics vs. MacroEconomics | Differences, Examples & Concepts",
  description:
    "Understand MicroEconomics vs. mMcroeconomics with clear differences, practical Indian examples, a visual comparison diagram, key concepts, and everyday applications.",
  alternates: {
    canonical:
      "https://www.pricetag.co.in/economics/basics/microeconomics-vs-macroeconomics",
  },
};

const comparisons = [
  {
    icon: Users,
    title: "MicroEconomics",
    subtitle: "Individual Parts Of The Economy",
    color: "blue",
    focus: "Consumers, businesses, and individual markets",
    questions: [
      "Why Does The Price Of Milk Increase?",
      "How Does A Shop Decide Its Selling Price?",
      "Why Do Customers Choose One Product Over Another?",
    ],
    example:
      "A Ludhiana clothing shop studies customer demand before deciding how many winter jackets to stock.",
  },
  {
    icon: Globe2,
    title: "MacroEconomics",
    subtitle: "The Economy As A Whole",
    color: "violet",
    focus: "National output, inflation, unemployment, and growth",
    questions: [
      "Why Is Inflation Rising Across India?",
      "How Fast Is The Indian Economy Growing?",
      "How Does Unemployment Affect The Country?",
    ],
    example:
      "Economists study India's overall inflation rate to understand how prices are changing across the economy.",
  },
];

const concepts = [
  {
    icon: ShoppingCart,
    title: "Demand And Supply",
    color: "blue",
    text: "MicroEconomics examines how demand and supply affect the price and quantity of a particular product.",
    example:
      "If more people buy mangoes during summer, their market price may rise when supply cannot keep up.",
  },
  {
    icon: Wallet,
    title: "Consumer Choices",
    color: "violet",
    text: "MicroEconomics studies how people allocate limited income among different goods and services.",
    example:
      "A student decides whether to spend ₹1,000 on new shoes or save the money for books.",
  },
  {
    icon: TrendingUp,
    title: "Inflation",
    color: "orange",
    text: "MacroEconomics examines changes in the general price level across an economy.",
    example:
      "When food, transport, housing, and other prices rise broadly, households may find that the same income buys less.",
  },
  {
    icon: Factory,
    title: "Economic Growth",
    color: "emerald",
    text: "MacroEconomics studies changes in total economic output and the factors that influence growth.",
    example:
      "India's real GDP growth helps economists assess whether the country's overall production of goods and services is increasing.",
  },
];


const microExamples = [
  {
    number: "01",
    title: "A Ludhiana Restaurant Changes Its Prices",
    concept: "Pricing And Demand",
    color: "blue",
    scenario:
      "A small restaurant in Ludhiana sells thalis to office workers and students. The owner wants to know whether increasing the price will improve daily earnings. These figures are hypothetical.",
    figures: [
      { label: "Original Price Per Thali", value: "₹180" },
      { label: "Meals Sold Per Day", value: "80" },
      { label: "Variable Cost Per Meal", value: "₹95" },
      { label: "Fixed Daily Costs", value: "₹4,000" },
    ],
    calculation: [
      {
        label: "Original Daily Revenue",
        formula: "80 × ₹180",
        result: "₹14,400",
      },
      {
        label: "Original Daily Costs",
        formula: "(80 × ₹95) + ₹4,000",
        result: "₹11,600",
      },
      {
        label: "Original Daily Operating Surplus",
        formula: "₹14,400 − ₹11,600",
        result: "₹2,800",
      },
    ],
    secondStage: {
      title: "What If The Price Increases?",
      text:
        "After increasing the price to ₹200, the restaurant estimates that daily sales will fall from 80 meals to 68 meals. Assume the costs per meal and fixed costs remain unchanged.",
      calculation: [
        {
          label: "New Daily Revenue",
          formula: "68 × ₹200",
          result: "₹13,600",
        },
        {
          label: "New Daily Costs",
          formula: "(68 × ₹95) + ₹4,000",
          result: "₹10,460",
        },
        {
          label: "New Daily Operating Surplus",
          formula: "₹13,600 − ₹10,460",
          result: "₹3,140",
        },
      ],
    },
    lesson:
      "The price rises by ₹20, and sales fall by 12 meals, yet the illustrative daily operating surplus increases by ₹340. This happens because the higher revenue per meal more than offsets the loss in sales volume under these assumptions.",
    takeaway:
      "Microeconomics helps a business analyse prices, customer demand, costs, and the financial consequences of a pricing decision.",
  },
  {
    number: "02",
    title: "A Family Plans Its Monthly Budget",
    concept: "Consumer Choice And Opportunity Cost",
    color: "violet",
    scenario:
      "A family in Punjab earns ₹45,000 per month after tax. It must pay essential expenses, support a child's education, and decide how much it can save. The family has limited income, so spending more in one area may require spending less in another.",
    figures: [
      { label: "Monthly Take-Home Income", value: "₹45,000" },
      { label: "Rent", value: "₹12,000" },
      { label: "Groceries", value: "₹9,000" },
      { label: "Utilities", value: "₹3,000" },
      { label: "Transport", value: "₹4,000" },
      { label: "Education", value: "₹5,000" },
      { label: "Medical Expenses", value: "₹2,000" },
      { label: "Savings", value: "₹5,000" },
      { label: "Other Spending", value: "₹5,000" },
    ],
    calculation: [
      {
        label: "Total Monthly Expenses And Savings",
        formula: "₹12,000 + ₹9,000 + ₹3,000 + ₹4,000 + ₹5,000 + ₹2,000 + ₹5,000 + ₹5,000",
        result: "₹45,000",
      },
      {
        label: "Money Left After Planned Spending",
        formula: "₹45,000 − ₹45,000",
        result: "₹0",
      },
    ],
    secondStage: {
      title: "The Opportunity Cost Of Buying A Phone",
      text:
        "Suppose the family wants to buy a phone for ₹12,000 without using its existing savings. If it spreads the cost across three months, it needs to find another ₹4,000 in the monthly budget.",
      calculation: [
        {
          label: "Monthly Amount Needed",
          formula: "₹12,000 ÷ 3",
          result: "₹4,000",
        },
        {
          label: "Possible Change In Savings",
          formula: "₹5,000 − ₹4,000",
          result: "₹1,000 Per Month",
        },
      ],
    },
    lesson:
      "If the family keeps all other expenses unchanged, saving for the phone could reduce monthly savings from ₹5,000 to ₹1,000. Alternatively, the family could reduce discretionary spending or postpone the purchase.",
    takeaway:
      "Microeconomics explains how households allocate scarce income, compare alternatives, and make trade-offs. The opportunity cost is the value of the next-best alternative sacrificed.",
  },
  {
    number: "03",
    title: "A Factory Decides Whether To Hire Another Worker",
    concept: "Production Costs And Marginal Analysis",
    color: "emerald",
    scenario:
      "A small manufacturing factory receives additional orders. The owner considers hiring one more worker for a day. The key question is whether the additional output will generate enough contribution to cover the extra costs.",
    figures: [
      { label: "Additional Units Produced Per Day", value: "20 Units" },
      { label: "Selling Price Per Unit", value: "₹500" },
      { label: "Additional Variable Cost Per Unit", value: "₹320" },
      { label: "Extra Daily Wage", value: "₹1,800" },
    ],
    calculation: [
      {
        label: "Additional Daily Revenue",
        formula: "20 × ₹500",
        result: "₹10,000",
      },
      {
        label: "Additional Variable Costs",
        formula: "20 × ₹320",
        result: "₹6,400",
      },
      {
        label: "Contribution Before Extra Wage",
        formula: "₹10,000 − ₹6,400",
        result: "₹3,600",
      },
      {
        label: "Net Additional Operating Contribution",
        formula: "₹3,600 − ₹1,800",
        result: "₹1,800",
      },
    ],
    secondStage: {
      title: "What If The Extra Orders Disappear?",
      text:
        "If the factory cannot sell the additional units, producing them may create inventory instead of revenue. The hiring decision depends on expected demand, worker productivity, capacity, and other costs.",
      calculation: [
        {
          label: "Additional Contribution If No Extra Units Sell",
          formula: "₹0 Revenue − ₹6,400 Variable Costs − ₹1,800 Wage",
          result: "−₹8,200",
        },
      ],
    },
    lesson:
      "Under the first scenario, the extra worker generates ₹1,800 in additional operating contribution per day, before any other incremental costs or adjustments. Under the second scenario, producing the same quantity without sales would be loss-making.",
    takeaway:
      "Microeconomics helps firms compare marginal benefits and marginal costs before deciding how much to produce or whether to hire.",
  },
];

const macroExamples = [
  {
    number: "01",
    title: "How Inflation Reduces Purchasing Power",
    concept: "Inflation",
    color: "orange",
    scenario:
      "Imagine a household's regular basket of groceries and essential goods costs ₹10,000 in one month. A year later, the same basket costs ₹10,600. These figures are illustrative, not India's official inflation data.",
    figures: [
      { label: "Original Basket Cost", value: "₹10,000" },
      { label: "Cost One Year Later", value: "₹10,600" },
      { label: "Increase In Cost", value: "₹600" },
    ],
    calculation: [
      {
        label: "Price Increase",
        formula: "₹10,600 − ₹10,000",
        result: "₹600",
      },
      {
        label: "Illustrative Inflation Rate",
        formula: "(₹600 ÷ ₹10,000) × 100",
        result: "6%",
      },
    ],
    secondStage: {
      title: "What Happens To A Fixed Budget?",
      text:
        "Suppose the household still has ₹10,000 available for this basket. It cannot buy the same quantities at the new prices unless it finds another ₹600 or changes what it purchases.",
      calculation: [
        {
          label: "Additional Money Required",
          formula: "₹10,600 − ₹10,000",
          result: "₹600",
        },
        {
          label: "Shortfall As A Share Of The Original Budget",
          formula: "(₹600 ÷ ₹10,000) × 100",
          result: "6%",
        },
      ],
    },
    lesson:
      "A broad rise in prices reduces the purchasing power of money. Macroeconomists study inflation across the economy using official price indices, rather than relying on one household's shopping basket alone.",
    takeaway:
      "Macroeconomics examines economy-wide price changes, their causes, and their effects on households, businesses, and economic policy.",
  },
  {
    number: "02",
    title: "How The Union Budget Can Influence The Economy",
    concept: "Fiscal Policy",
    color: "blue",
    scenario:
      "Suppose a government introduces an illustrative ₹100 crore road-improvement project. The project pays contractors, purchases materials, and employs workers. The example shows how government spending enters the economy; it is not an actual Union Budget announcement.",
    figures: [
      { label: "Illustrative Project Budget", value: "₹100 Crore" },
      { label: "Road Construction Contracts", value: "₹60 Crore" },
      { label: "Materials And Equipment", value: "₹25 Crore" },
      { label: "Project Planning And Other Costs", value: "₹15 Crore" },
    ],
    calculation: [
      {
        label: "Total Planned Spending",
        formula: "₹60 Cr + ₹25 Cr + ₹15 Cr",
        result: "₹100 Crore",
      },
      {
        label: "Share Allocated To Construction Contracts",
        formula: "(₹60 Cr ÷ ₹100 Cr) × 100",
        result: "60%",
      },
      {
        label: "Share Allocated To Materials And Equipment",
        formula: "(₹25 Cr ÷ ₹100 Cr) × 100",
        result: "25%",
      },
    ],
    secondStage: {
      title: "How Could This Affect Economic Activity?",
      text:
        "Contractors may hire workers, suppliers may receive orders, and employees may spend some of their income in local shops. The ultimate effect depends on available resources, project execution, imports, taxes, financing, and other economic conditions.",
      calculation: [
        {
          label: "Illustrative Government Project Spending",
          formula: "Initial Approved Project Outlay",
          result: "₹100 Crore",
        },
      ],
    },
    lesson:
      "Government spending is one part of fiscal policy. A project costing ₹100 crore does not automatically increase GDP by exactly ₹100 crore or create a fixed number of jobs; the realised economic impact depends on implementation and wider conditions.",
    takeaway:
      "Macroeconomics helps analyse how public spending, taxation, and borrowing influence aggregate demand, output, employment, and public finances.",
  },
  {
    number: "03",
    title: "Understanding Employment With A Sample Survey",
    concept: "Unemployment And Labour Markets",
    color: "violet",
    scenario:
      "Imagine a hypothetical survey of 1,000 working-age people in a region. Some people have jobs, some are unemployed and actively seeking work, and others are outside the labour force. These figures are invented for learning, not actual Indian employment statistics.",
    figures: [
      { label: "People Surveyed", value: "1,000" },
      { label: "Employed People", value: "630" },
      { label: "Unemployed People Seeking Work", value: "70" },
      { label: "People Outside The Labour Force", value: "300" },
    ],
    calculation: [
      {
        label: "Labour Force",
        formula: "630 Employed + 70 Unemployed",
        result: "700 People",
      },
      {
        label: "Unemployment Rate",
        formula: "(70 ÷ 700) × 100",
        result: "10%",
      },
      {
        label: "Employment-To-Population Ratio In This Sample",
        formula: "(630 ÷ 1,000) × 100",
        result: "63%",
      },
    ],
    secondStage: {
      title: "What If 20 Unemployed People Find Jobs?",
      text:
        "Assume 20 of the unemployed people find work and everyone else remains in the same category. The labour force stays at 700, while employment rises to 650 and unemployment falls to 50.",
      calculation: [
        {
          label: "New Unemployment Rate",
          formula: "(50 ÷ 700) × 100",
          result: "7.14%",
        },
        {
          label: "Change In The Unemployment Rate",
          formula: "10% − 7.14%",
          result: "2.86 Percentage Points Lower",
        },
      ],
    },
    lesson:
      "The unemployment rate is calculated using the labour force, not everyone surveyed. Official estimates also depend on the survey's definitions, reference period, and statistical method.",
    takeaway:
      "Macroeconomics studies employment and unemployment patterns to understand labour-market conditions and evaluate economic policy.",
  },
];


const styles = {
  blue: {
    card: "border-blue-100 bg-blue-50/80",
    icon: "bg-blue-100 text-blue-700",
    label: "text-blue-700 bg-blue-100",
  },
  violet: {
    card: "border-violet-100 bg-violet-50/80",
    icon: "bg-violet-100 text-violet-700",
    label: "text-violet-700 bg-violet-100",
  },
  emerald: {
    card: "border-emerald-100 bg-emerald-50/80",
    icon: "bg-emerald-100 text-emerald-700",
    label: "text-emerald-700 bg-emerald-100",
  },
  orange: {
    card: "border-orange-100 bg-orange-50/80",
    icon: "bg-orange-100 text-orange-700",
    label: "text-orange-700 bg-orange-100",
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
  const itemStyles = styles[item.color];

  return (
    <article
      className={`overflow-hidden rounded-2xl border ${itemStyles.card}`}
    >
      <div className="p-5 sm:p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="text-xs font-semibold tracking-widest text-slate-500">
            CASE STUDY {item.number}
          </span>
          <span
            className={`rounded-full px-3 py-1 text-[10px] font-semibold ${itemStyles.label}`}
          >
            {item.concept}
          </span>
        </div>

        <h3 className="mt-4 text-xl font-semibold leading-snug text-slate-900">
          {item.title}
        </h3>

        <p className="mt-3 text-sm leading-7 text-slate-700">
          {item.scenario}
        </p>

        <div className="mt-5 rounded-xl border border-white bg-white/85 p-4">
          <div className="flex items-center gap-2">
            <IndianRupee size={18} className="text-blue-700" />
            <h4 className="text-sm font-semibold text-slate-900">
              Starting Figures
            </h4>
          </div>

          <div className="mt-3 divide-y divide-slate-100">
            {item.figures.map((figure) => (
              <div
                key={figure.label}
                className="flex items-start justify-between gap-4 py-2.5"
              >
                <span className="text-sm leading-5 text-slate-600">
                  {figure.label}
                </span>
                <span className="shrink-0 text-right text-sm font-semibold tabular-nums text-slate-900">
                  {figure.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-5">
          <div className="flex items-center gap-2">
            <BarChart3 size={19} className="text-blue-700" />
            <h4 className="text-sm font-semibold text-slate-900">
              Step-By-Step Calculation
            </h4>
          </div>

          <div className="mt-3 space-y-3">
            {item.calculation.map((step, index) => (
              <div
                key={step.label}
                className="rounded-xl border border-white bg-white/85 p-3.5"
              >
                <div className="flex items-start gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-xs font-semibold text-slate-600">
                    {index + 1}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold text-slate-800">
                      {step.label}
                    </p>
                    <p className="mt-1 break-words text-xs leading-5 text-slate-500">
                      {step.formula}
                    </p>
                    <p className="mt-2 text-lg font-bold tabular-nums text-blue-800">
                      {step.result}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {item.secondStage && (
          <div className="mt-5 rounded-xl border border-blue-100 bg-white/90 p-4">
            <div className="flex items-start gap-2">
              <Lightbulb
                size={19}
                className="mt-0.5 shrink-0 text-amber-600"
              />
              <div>
                <h4 className="text-sm font-semibold text-slate-900">
                  {item.secondStage.title}
                </h4>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {item.secondStage.text}
                </p>
              </div>
            </div>

            <div className="mt-4 space-y-2">
              {item.secondStage.calculation.map((step) => (
                <div
                  key={step.label}
                  className="rounded-lg bg-blue-50/80 p-3"
                >
                  <p className="text-xs font-medium leading-5 text-slate-600">
                    {step.label}
                  </p>
                  <p className="mt-1 break-words text-xs leading-5 text-slate-500">
                    {step.formula}
                  </p>
                  <p className="mt-1 font-semibold tabular-nums text-blue-800">
                    {step.result}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mt-5 rounded-xl border border-white bg-white/90 p-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            What Does This Teach Us?
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700">
            {item.lesson}
          </p>
        </div>

        <div className="mt-4 rounded-xl bg-gradient-to-r from-blue-700 to-sky-600 p-4 text-white">
          <p className="text-xs font-semibold uppercase tracking-wider text-blue-100">
            Economic Lesson
          </p>
          <p className="mt-2 text-sm leading-6">
            {item.takeaway}
          </p>
        </div>
      </div>
    </article>
  );
}


export default function MicroeconomicsVsMacroeconomicsPage() {
  return (
    <main className="min-h-screen bg-white text-slate-800">
      {/* Hero Section */}
      <section className="relative isolate overflow-hidden border-b border-blue-100 bg-gradient-to-br from-white via-sky-50 to-blue-100">
        <div className="pointer-events-none absolute -right-20 -top-20 -z-10 h-72 w-72 rounded-full bg-blue-200/50 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 left-1/4 -z-10 h-64 w-64 rounded-full bg-cyan-200/40 blur-3xl" />

        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-3 py-1.5 text-xs font-medium text-blue-700 shadow-sm">
                <BarChart3 size={15} />
                Economics · Basic Concepts
              </div>

              <h1 className="mt-6 max-w-2xl bg-gradient-to-r from-slate-950 via-blue-800 to-sky-500 bg-clip-text text-4xl font-bold leading-tight tracking-tight text-transparent sm:text-5xl lg:text-6xl">
                MicroEconomics Vs. MacroEconomics
              </h1>

              <p className="mt-5 max-w-xl text-lg leading-8 text-slate-700">
                Why Does The Price Of A Product Change? Why Does Inflation
                Affect An Entire Country? Discover The Difference Between
                Individual Economic Decisions And The Economy As A Whole.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="#key-difference"
                  className="inline-flex items-center gap-2 rounded-xl bg-blue-700 px-5 py-3 text-sm font-semibold text-white shadow-md shadow-blue-200 transition hover:bg-blue-800"
                >
                  Explore The Difference
                  <ArrowRight size={17} />
                </a>
                <a
                  href="#practical-examples"
                  className="inline-flex items-center gap-2 rounded-xl border border-blue-200 bg-white px-5 py-3 text-sm font-semibold text-blue-800 transition hover:bg-blue-50"
                >
                  See Real Examples
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-xs text-slate-600">
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2 size={15} className="text-blue-600" />
                  Clear Comparison
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2 size={15} className="text-blue-600" />
                  Indian Examples
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2 size={15} className="text-blue-600" />
                  Visual Diagram
                </span>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="rounded-3xl border border-white bg-white/80 p-5 shadow-xl shadow-blue-200/40 backdrop-blur-sm sm:p-7">
              <div className="mb-5 flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-blue-600">
                    Two Ways To Study Economics
                  </p>
                  <h2 className="mt-1 text-xl font-semibold text-slate-900">
                    Small Picture, Big Picture
                  </h2>
                </div>
                <div className="rounded-xl bg-blue-50 p-3 text-blue-700">
                  <Scale size={24} />
                </div>
              </div>

              <div className="rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-sky-100 p-5">
                <div className="flex items-center gap-4">
                  <div className="rounded-xl bg-white p-3 text-blue-700 shadow-sm">
                    <Store size={27} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">
                      MicroEconomics
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      A Shop, A Consumer, Or A Single Market
                    </p>
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {["Prices", "Demand", "Costs"].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-blue-100 bg-white px-3 py-1 text-xs font-medium text-blue-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex justify-center py-3">
                <div className="rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-medium text-slate-500">
                  Two Levels Of Analysis
                </div>
              </div>

              <div className="rounded-2xl border border-violet-100 bg-gradient-to-br from-violet-50 to-indigo-100 p-5">
                <div className="flex items-center gap-4">
                  <div className="rounded-xl bg-white p-3 text-violet-700 shadow-sm">
                    <Globe2 size={27} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">
                      MacroEconomics
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      A Country And Its Overall Economy
                    </p>
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {["Inflation", "GDP", "Unemployment"].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-violet-100 bg-white px-3 py-1 text-xs font-medium text-violet-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        {/* Definition */}
        <section>
          <SectionHeading
            eyebrow="01 · The Basics"
            title="What Are MicroEconomics And MacroEconomics?"
            description="Economics studies how people and societies use limited resources. MicroEconomics and MacroEconomics examine this subject from two different perspectives."
          />

          <div className="grid gap-5 md:grid-cols-2">
            <article className="rounded-2xl border border-blue-100 bg-blue-50/70 p-6">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-blue-100 p-3 text-blue-700">
                  <Target size={23} />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">
                  What Is MicroEconomics?
                </h3>
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-700">
                MicroEconomics is the branch of economics that studies
                individual consumers, households, businesses, and specific
                markets. It explains how they make decisions about prices,
                production, spending, and the use of resources.
              </p>
              <div className="mt-4 rounded-xl bg-white p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-blue-700">
                  Simple Example
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  A local bakery decides how many loaves of bread to produce
                  and what price to charge its customers.
                </p>
              </div>
            </article>

            <article className="rounded-2xl border border-violet-100 bg-violet-50/70 p-6">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-violet-100 p-3 text-violet-700">
                  <Globe2 size={23} />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">
                  What Is MacroEconomics?
                </h3>
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-700">
                MacroEconomics is the branch of economics that studies the
                economy as a whole. It examines overall output, inflation,
                unemployment, economic growth, and national economic policy.
              </p>
              <div className="mt-4 rounded-xl bg-white p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-violet-700">
                  Simple Example
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  Economists analyse India's GDP growth and inflation to
                  understand the country's broader economic conditions.
                </p>
              </div>
            </article>
          </div>
        </section>

        {/* Main Diagram */}
        <section id="key-difference" className="mt-14 scroll-mt-8">
          <SectionHeading
            eyebrow="02 · Visual Comparison"
            title="MicroEconomics Vs. MacroEconomics: The Main Difference"
            description="The easiest way to remember the difference is to look at the level of analysis: a specific economic unit versus the economy as a whole."
          />

          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="bg-gradient-to-r from-blue-700 to-sky-500 px-5 py-4 text-white sm:px-7">
              <h3 className="font-semibold">
                From Individual Decisions To National Outcomes
              </h3>
              <p className="mt-1 text-xs text-blue-100">
                A simplified conceptual diagram
              </p>
            </div>

            <div className="space-y-4 p-4 sm:p-7">
              <div className="grid gap-4 sm:grid-cols-2">
                {comparisons.map((item) => {
                  const Icon = item.icon;
                  const itemStyles = styles[item.color];

                  return (
                    <article
                      key={item.title}
                      className={`rounded-2xl border p-5 sm:p-6 ${itemStyles.card}`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`rounded-xl p-3 ${itemStyles.icon}`}>
                          <Icon size={25} />
                        </div>
                        <div>
                          <h3 className="font-semibold text-slate-900">
                            {item.title}
                          </h3>
                          <p className="mt-1 text-xs text-slate-600">
                            {item.subtitle}
                          </p>
                        </div>
                      </div>

                      <p className="mt-5 text-sm font-semibold text-slate-800">
                        Main Focus
                      </p>
                      <p className="mt-1 text-sm leading-6 text-slate-600">
                        {item.focus}
                      </p>

                      <div className="mt-4 space-y-3">
                        {item.questions.map((question) => (
                          <div
                            key={question}
                            className="flex items-start gap-2 rounded-xl bg-white/80 p-3"
                          >
                            <CircleHelp
                              size={17}
                              className={`mt-0.5 shrink-0 ${itemStyles.label.split(" ")[0]}`}
                            />
                            <p className="text-sm leading-5 text-slate-700">
                              {question}
                            </p>
                          </div>
                        ))}
                      </div>
                    </article>
                  );
                })}
              </div>

              <div className="flex justify-center">
                <div className="flex flex-col items-center">
                  <div className="h-5 w-px bg-slate-300" />
                  <ArrowRight
                    size={21}
                    className="rotate-90 text-blue-600"
                  />
                </div>
              </div>

              <div className="rounded-2xl border border-sky-100 bg-gradient-to-r from-sky-50 via-white to-violet-50 p-5 text-center sm:p-6">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-blue-700 shadow-sm">
                  <BarChart3 size={25} />
                </div>
                <h3 className="mt-3 text-lg font-semibold text-slate-900">
                  Understanding The Economy
                </h3>
                <p className="mx-auto mt-2 max-w-2xl text-sm leading-7 text-slate-600">
                  MicroEconomics helps explain decisions in particular
                  markets. MacroEconomics helps explain economy-wide patterns.
                  Both perspectives are useful for understanding economic
                  activity.
                </p>
              </div>

              <p className="rounded-xl bg-slate-50 px-4 py-3 text-xs leading-5 text-slate-500">
                Important: MicroEconomic decisions can influence
                MacroEconomic outcomes, and broader economic conditions can
                affect individual consumers and businesses. The diagram
                illustrates the difference in focus, not a one-way causal
                process.
              </p>
            </div>
          </div>
        </section>

        <div className="my-12">
          <AdSlot />
        </div>

        {/* Comparison Table */}
        <section>
          <SectionHeading
            eyebrow="03 · Quick Reference"
            title="Key Differences Between MicroEconomics And MacroEconomics"
            description="Use this comparison table to revise the main distinctions."
          />

          <div className="overflow-x-auto rounded-2xl border border-slate-200">
            <table className="w-full min-w-[650px] border-collapse text-left text-sm">
              <thead>
                <tr className="bg-gradient-to-r from-blue-700 to-sky-600 text-white">
                  <th className="px-4 py-4 font-semibold">Basis</th>
                  <th className="px-4 py-4 font-semibold">
                    MicroEconomics
                  </th>
                  <th className="px-4 py-4 font-semibold">
                    MacroEconomics
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  [
                    "Scope",
                    "Individual consumers, firms, and markets",
                    "The economy as a whole",
                  ],
                  [
                    "Main Focus",
                    "Product prices, demand, supply, and production",
                    "Inflation, GDP, unemployment, and growth",
                  ],
                  [
                    "Typical Question",
                    "Why Did The Price Of A Product Change?",
                    "Why Are Prices Rising Across The Economy?",
                  ],
                  [
                    "Business Example",
                    "A Company Decides How Much To Produce",
                    "Businesses Respond To Overall Economic Conditions",
                  ],
                  [
                    "Government Example",
                    "A Tax On A Particular Product Affects Its Market",
                    "Fiscal And Monetary Policies Influence Overall Activity",
                  ],
                  [
                    "Common Measures",
                    "Market Price, Quantity, Costs, And Consumer Demand",
                    "GDP, Inflation Rates, And Unemployment Measures",
                  ],
                ].map(([basis, micro, macro], index) => (
                  <tr
                    key={basis}
                    className={index % 2 === 0 ? "bg-blue-50/40" : "bg-white"}
                  >
                    <td className="px-4 py-4 font-semibold text-slate-900">
                      {basis}
                    </td>
                    <td className="px-4 py-4 leading-6 text-slate-700">
                      {micro}
                    </td>
                    <td className="px-4 py-4 leading-6 text-slate-700">
                      {macro}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Concepts */}
        <section className="mt-14">
          <SectionHeading
            eyebrow="04 · Important Concepts"
            title="Topics Studied In Each Branch Of Economics"
            description="These concepts show how the two branches investigate different but connected economic questions."
          />

          <div className="grid gap-4 sm:grid-cols-2">
            {concepts.map((item) => {
              const Icon = item.icon;
              const itemStyles = styles[item.color];

              return (
                <article
                  key={item.title}
                  className={`rounded-2xl border p-5 ${itemStyles.card}`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`rounded-xl p-3 ${itemStyles.icon}`}>
                      <Icon size={23} />
                    </div>
                    <h3 className="font-semibold text-slate-900">
                      {item.title}
                    </h3>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-slate-700">
                    {item.text}
                  </p>
                  <div className="mt-4 rounded-xl bg-white/85 p-4">
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Practical Example
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-700">
                      {item.example}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
<AdSlot />
        {/* Micro Examples */}
        <section id="practical-examples" className="mt-14 scroll-mt-8">
          <SectionHeading
            eyebrow="05 · Everyday Applications"
            title="Practical Examples Of MicroEconomics"
            description="MicroEconomics is useful when studying a particular buyer, seller, business, or market."
          />

          <div className="grid gap-4 md:grid-cols-3">
            {microExamples.map((item) => (
              <ExampleCard key={item.number} item={item} />
            ))}
          </div>
        </section>
<AdSlot />
        {/* Macro Examples */}
        <section className="mt-14">
          <SectionHeading
            eyebrow="06 · National Economy"
            title="Practical Examples Of MacroEconomics"
            description="MacroEconomics helps explain national trends and how economic policies affect activity across the country."
          />

          <div className="grid gap-4 md:grid-cols-3">
            {macroExamples.map((item) => (
              <ExampleCard key={item.number} item={item} />
            ))}
          </div>

          <div className="mt-5 rounded-2xl border border-blue-100 bg-gradient-to-r from-blue-50 to-white p-5 sm:p-6">
            <div className="flex items-start gap-3">
              <div className="rounded-xl bg-blue-100 p-3 text-blue-700">
                <IndianRupee size={23} />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">
                  An Indian Economic Example
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-700">
                  Suppose food prices rise across many Indian states. A
                  household may adjust its grocery budget, which is a
                  microeconomic response. Economists and policymakers may
                  examine national inflation data, food supply, and broader
                  price trends, which is a macroeconomic analysis.
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-700">
                  The same situation can therefore be studied at both levels,
                  depending on the question being asked.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Relationship */}
        <section className="mt-14">
          <SectionHeading
            eyebrow="07 · How They Connect"
            title="Are MicroEconomics And MacroEconomics Related?"
            description="Yes. They are different branches of economics, but they influence and complement one another."
          />

          <div className="grid gap-4 md:grid-cols-3">
            <article className="rounded-2xl border border-blue-100 bg-blue-50/70 p-5">
              <div className="rounded-xl bg-blue-100 p-3 text-blue-700 w-fit">
                <Users size={23} />
              </div>
              <h3 className="mt-4 font-semibold text-slate-900">
                Individual Decisions
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Households decide how much to spend, save, and work. Firms
                decide how much to invest and produce.
              </p>
            </article>

            <article className="rounded-2xl border border-violet-100 bg-violet-50/70 p-5">
              <div className="rounded-xl bg-violet-100 p-3 text-violet-700 w-fit">
                <Activity size={23} />
              </div>
              <h3 className="mt-4 font-semibold text-slate-900">
                Combined Effects
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Decisions made by many households and firms contribute to
                broader patterns in spending, production, and employment.
              </p>
            </article>

            <article className="rounded-2xl border border-emerald-100 bg-emerald-50/70 p-5">
              <div className="rounded-xl bg-emerald-100 p-3 text-emerald-700 w-fit">
                <Landmark size={23} />
              </div>
              <h3 className="mt-4 font-semibold text-slate-900">
                Wider Economic Conditions
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Inflation, interest rates, economic growth, and government
                policies can change the choices available to households and
                businesses.
              </p>
            </article>
          </div>

          <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <div className="flex items-start gap-3">
              <Lightbulb size={22} className="mt-1 shrink-0 text-blue-700" />
              <div>
                <h3 className="font-semibold text-slate-900">
                  Why Both Perspectives Matter
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-700">
                  Studying only individual markets may not explain the causes
                  of a nationwide recession. Studying only national figures
                  may not explain why a particular company loses customers.
                  Using both perspectives gives a more complete understanding
                  of economic activity.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="my-12">
          <AdSlot />
        </div>

        {/* Quiz */}
        <section className="mt-14">
          <SectionHeading
            eyebrow="08 · Quick Revision"
            title="Test Your Understanding"
            description="Read each question and open the answer to check your understanding."
          />

          <div className="space-y-4">
            <details className="group rounded-2xl border border-slate-200 p-5 open:border-blue-200 open:bg-blue-50/50">
              <summary className="cursor-pointer list-none font-semibold text-slate-900">
                1. Which Branch Studies The Price Of A Single Product?
                <span className="float-right text-blue-600">+</span>
              </summary>
              <p className="mt-3 text-sm leading-7 text-slate-700">
                <strong>Answer: MicroEconomics.</strong> It examines prices,
                demand, supply, and other factors in individual markets.
              </p>
            </details>

            <details className="group rounded-2xl border border-slate-200 p-5 open:border-blue-200 open:bg-blue-50/50">
              <summary className="cursor-pointer list-none font-semibold text-slate-900">
                2. Which Branch Studies National GDP Growth?
                <span className="float-right text-blue-600">+</span>
              </summary>
              <p className="mt-3 text-sm leading-7 text-slate-700">
                <strong>Answer: MacroEconomics.</strong> It studies overall
                production, economic growth, inflation, and employment.
              </p>
            </details>

            <details className="group rounded-2xl border border-slate-200 p-5 open:border-blue-200 open:bg-blue-50/50">
              <summary className="cursor-pointer list-none font-semibold text-slate-900">
                3. Can One Economic Problem Involve Both Branches?
                <span className="float-right text-blue-600">+</span>
              </summary>
              <p className="mt-3 text-sm leading-7 text-slate-700">
                <strong>Answer: Yes.</strong> A rise in food prices can
                influence an individual family's spending decisions and
                contribute to broader inflation trends.
              </p>
            </details>

            <details className="group rounded-2xl border border-slate-200 p-5 open:border-blue-200 open:bg-blue-50/50">
              <summary className="cursor-pointer list-none font-semibold text-slate-900">
                4. Does MacroEconomics Study Individual Businesses At All?
                <span className="float-right text-blue-600">+</span>
              </summary>
              <p className="mt-3 text-sm leading-7 text-slate-700">
                MacroEconomics can study how businesses collectively affect
                investment, production, and employment. Its main focus,
                however, is the economy-wide picture rather than one
                individual business.
              </p>
            </details>
          </div>
        </section>

        {/* Conclusion */}
        <section className="mt-14 rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-sky-100 p-6 sm:p-8">
          <div className="flex items-start gap-4">
            <div className="rounded-2xl bg-white p-3 text-blue-700 shadow-sm">
              <Lightbulb size={25} />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-slate-900">
                Key Takeaway
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-700">
                MicroEconomics studies individual consumers, businesses, and
                markets. MacroEconomics studies the economy as a whole,
                including inflation, GDP, unemployment, and economic growth.
                Both branches are essential for understanding how economic
                decisions are made and how their effects spread through
                society.
              </p>
            </div>
          </div>
        </section>

       
              
      </div>
    </main>
  );
}
