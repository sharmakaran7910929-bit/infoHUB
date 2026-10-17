
import Link from "next/link";
import AdSlot from "../../../../components/AdSlot";

export const metadata = {
  title: "Scarcity in Economics | Meaning, Examples & Solutions",
  description:
    "Understand scarcity in economics through real-life household, clothing business, and country examples. Learn its causes, effects, types, and practical solutions.",
  alternates: {
    canonical:
      "https://www.pricetag.co.in/economics/basics/scarcity-in-economics",
  },
};

const scarcityExamples = [
  {
    number: "01",
    title: "Household Budget",
    color: "border-blue-200 bg-blue-50",
    badge: "text-blue-700 bg-blue-100",
    description:
      "A family has ₹25,000 available for monthly expenses, but rent, groceries, school fees, electricity, transport, and medical needs together cost ₹29,000.",
    impact:
      "The family must prioritise essential expenses, reduce non-essential spending, or find additional income.",
    solution:
      "Prepare a budget, compare prices, reduce avoidable expenses, and maintain emergency savings where possible.",
  },
  {
    number: "02",
    title: "Clothing Business",
    color: "border-purple-200 bg-purple-50",
    badge: "text-purple-700 bg-purple-100",
    description:
      "A clothing shop has ₹1,00,000 to purchase inventory. It needs to stock winter jackets, jeans, shirts, and T-shirts, but cannot buy every design and size in large quantities.",
    impact:
      "Poor purchasing decisions can leave the shop with unsold stock in some categories and missing sizes in popular products.",
    solution:
      "Study previous sales, prioritise fast-selling products, negotiate supplier terms, and reserve some funds for restocking.",
  },
  {
    number: "03",
    title: "Country And Public Resources",
    color: "border-emerald-200 bg-emerald-50",
    badge: "text-emerald-700 bg-emerald-100",
    description:
      "A government has a limited annual budget but must fund healthcare, education, roads, public transport, agriculture, and national security.",
    impact:
      "Spending more on one area may leave fewer funds available for other priorities. Poor allocation can affect public services and development.",
    solution:
      "Set priorities, evaluate public needs, improve tax administration, reduce waste, and allocate funds according to expected benefits.",
  },
];

const resourceTypes = [
  {
    title: "Money And Capital",
    icon: "₹",
    color: "from-blue-500 to-indigo-600",
    description:
      "Households have limited income, while businesses and governments have financial budgets that cannot cover every possible expense.",
    example: "A family choosing between a new phone and home repairs.",
  },
  {
    title: "Time",
    icon: "◷",
    color: "from-violet-500 to-purple-600",
    description:
      "People have limited hours available for work, education, rest, and personal activities.",
    example: "A shop owner deciding between serving customers and managing inventory.",
  },
  {
    title: "Land And Natural Resources",
    icon: "⌂",
    color: "from-emerald-500 to-green-600",
    description:
      "Land, clean water, minerals, fertile soil, and some energy resources are limited or unevenly distributed.",
    example: "Farmers competing for limited irrigation water during a dry period.",
  },
  {
    title: "Labour And Skills",
    icon: "◎",
    color: "from-orange-500 to-amber-600",
    description:
      "A shortage of trained workers can restrict the ability to provide services or increase production.",
    example: "A garment factory unable to fulfil an order because skilled tailors are unavailable.",
  },
  {
    title: "Materials And Inventory",
    icon: "▦",
    color: "from-pink-500 to-rose-600",
    description:
      "Production depends on materials and goods that may be limited by supply, transport, cost, or production capacity.",
    example: "A clothing manufacturer facing a delay in fabric deliveries.",
  },
  {
    title: "Technology And Infrastructure",
    icon: "⌘",
    color: "from-cyan-500 to-teal-600",
    description:
      "Limited machinery, electricity, internet access, transport, or storage can restrict what an organisation can produce.",
    example: "A small factory unable to increase output because it has only one production machine.",
  },
];

const managementSteps = [
  {
    title: "Identify The Scarce Resource",
    description:
      "Find out exactly what is limited: money, time, staff, raw materials, land, or production capacity.",
  },
  {
    title: "Separate Essential Needs From Preferences",
    description:
      "Prioritise necessities and high-value activities before spending resources on less important wants.",
  },
  {
    title: "Compare Alternatives",
    description:
      "Estimate the costs and benefits of different choices. Consider what must be given up when one option is selected.",
  },
  {
    title: "Use Resources Efficiently",
    description:
      "Reduce waste, improve planning, maintain equipment, and make better use of existing resources.",
  },
  {
    title: "Increase Capacity Where Practical",
    description:
      "Consider training, improved technology, additional suppliers, saving, investment, or carefully planned production expansion.",
  },
  {
    title: "Review And Adjust",
    description:
      "Monitor results and change the plan when income, demand, prices, or resource availability changes.",
  },
];

export default function ScarcityInEconomicsPage() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      <article className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Main Heading */}
        <header className="relative mb-10 overflow-hidden rounded-3xl border border-blue-100 bg-gradient-to-br from-white via-blue-50 to-blue-100 px-5 py-9 shadow-sm sm:px-9 sm:py-12">
          <div className="absolute -right-12 -top-16 h-48 w-48 rounded-full bg-blue-200/30 blur-3xl" />
          <div className="absolute -bottom-16 -left-10 h-40 w-40 rounded-full bg-indigo-200/30 blur-3xl" />

          <div className="relative">
            <span className="mb-4 inline-flex rounded-full border border-blue-200 bg-white/80 px-3 py-1 text-sm font-medium text-blue-800">
              Economics Basics
            </span>

            <h1 className="max-w-4xl bg-gradient-to-r from-blue-900 via-blue-700 to-indigo-600 bg-clip-text text-3xl font-bold leading-tight text-transparent sm:text-4xl lg:text-5xl">
              Scarcity In Economics: Meaning, Real-Life Examples And Solutions
            </h1>

            <p className="mt-5 max-w-3xl text-base leading-8 text-gray-700 sm:text-lg">
              Why can a family not buy everything it wants, a clothing
              shop not stock every product, and a country not fund every
              public project at once? Scarcity explains why resources
              must be prioritised, choices must be made, and alternatives
              must be evaluated.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <span className="rounded-lg bg-white px-3 py-2 text-sm font-medium text-blue-800 shadow-sm">
                Limited Resources
              </span>
              <span className="rounded-lg bg-white px-3 py-2 text-sm font-medium text-indigo-800 shadow-sm">
                Economic Choices
              </span>
              <span className="rounded-lg bg-white px-3 py-2 text-sm font-medium text-cyan-800 shadow-sm">
                Practical Solutions
              </span>
            </div>
          </div>
        </header>

        {/* Introduction */}
        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-bold text-gray-900 sm:text-3xl">
            What Is Scarcity In Economics?
          </h2>

          <p className="mb-4 text-base leading-8 text-gray-700">
            Scarcity in economics is the condition in which available
            resources are limited relative to the wants and competing
            uses people have for them. Resources include money, time,
            land, labour, machinery, raw materials, and energy.
          </p>

          <p className="mb-5 text-base leading-8 text-gray-700">
            Human wants can exceed the resources available to satisfy
            them. Therefore, individuals, businesses, and governments
            must choose which needs to meet first and how to use their
            resources effectively.
          </p>

          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-blue-100 bg-blue-50 p-5">
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-xl text-white">
                ₹
              </div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900">
                Limited Resources
              </h3>
              <p className="text-sm leading-7 text-gray-700">
                Available money, materials, time, and capacity have limits.
              </p>
            </div>

            <div className="rounded-2xl border border-purple-100 bg-purple-50 p-5">
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-purple-600 text-xl text-white">
                ?
              </div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900">
                Competing Choices
              </h3>
              <p className="text-sm leading-7 text-gray-700">
                Several needs may require the same limited resources.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-5">
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-600 text-xl text-white">
                ✓
              </div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900">
                Prioritisation
              </h3>
              <p className="text-sm leading-7 text-gray-700">
                People select the options that best meet their priorities.
              </p>
            </div>
          </div>
        </section>

        <AdSlot />

        {/* Why Scarcity Exists */}
        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-bold text-gray-900 sm:text-3xl">
            Why Does Scarcity Exist?
          </h2>

          <p className="mb-5 leading-8 text-gray-700">
            Scarcity is not limited to situations where a resource is
            about to run out. Even when resources are widely available,
            they may be insufficient to satisfy every competing use.
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
              <h3 className="mb-2 text-lg font-semibold text-gray-900">
                Limited Supply Of Resources
              </h3>
              <p className="leading-7 text-gray-700">
                Land, clean water, skilled labour, machinery, and money
                cannot always be increased immediately when demand grows.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
              <h3 className="mb-2 text-lg font-semibold text-gray-900">
                Growing And Changing Wants
              </h3>
              <p className="leading-7 text-gray-700">
                People and organisations develop new needs and preferences.
                Existing resources must serve many different purposes.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
              <h3 className="mb-2 text-lg font-semibold text-gray-900">
                Unequal Distribution
              </h3>
              <p className="leading-7 text-gray-700">
                A resource may exist in one location but remain difficult
                or expensive to access in another because of transport,
                infrastructure, or distribution limitations.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
              <h3 className="mb-2 text-lg font-semibold text-gray-900">
                Production And Supply Constraints
              </h3>
              <p className="leading-7 text-gray-700">
                Weather, equipment failures, delivery delays, and limited
                production capacity can reduce the resources available
                for immediate use.
              </p>
            </div>
          </div>
        </section>

        {/* Resource Types */}
        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-bold text-gray-900 sm:text-3xl">
            Where Can Scarcity Occur?
          </h2>

          <p className="mb-6 leading-8 text-gray-700">
            Scarcity can affect nearly every part of economic life.
            The examples below show the resources that may become limited
            and how those limitations affect everyday decisions.
          </p>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {resourceTypes.map((item) => (
              <div
                key={item.title}
                className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md"
              >
                <div
                  className={`flex items-center gap-3 bg-gradient-to-r ${item.color} p-4 text-white`}
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/20 text-xl">
                    {item.icon}
                  </span>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                </div>

                <div className="p-5">
                  <p className="mb-4 text-sm leading-7 text-gray-700">
                    {item.description}
                  </p>

                  <div className="rounded-xl bg-gray-50 p-3">
                    <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-gray-500">
                      Real-Life Example
                    </p>
                    <p className="text-sm leading-6 text-gray-800">
                      {item.example}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <AdSlot />

        {/* Household Example */}
        <section className="mb-10 overflow-hidden rounded-3xl border border-blue-200 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
          <div className="border-b border-blue-100 px-5 py-5 sm:px-7">
            <span className="mb-2 inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800">
              Real-Life Example 01
            </span>
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              How Scarcity Affects A Household
            </h2>
          </div>

          <div className="p-5 sm:p-7">
            <p className="mb-5 leading-8 text-gray-700">
              Consider a family with a monthly take-home income of
              ₹25,000. These illustrative figures show how a household
              might face scarcity when its planned expenses exceed
              its available income.
            </p>

            <div className="mb-5 overflow-hidden rounded-2xl border border-gray-200 bg-white">
              <div className="flex items-center justify-between border-b border-gray-100 bg-white p-4">
                <span className="font-medium text-gray-800">
                  Monthly Income
                </span>
                <span className="text-xl font-bold text-emerald-700">
                  ₹25,000
                </span>
              </div>

              {[
                ["Rent", "₹8,000"],
                ["Groceries", "₹6,000"],
                ["School And Education", "₹4,000"],
                ["Transport And Electricity", "₹3,000"],
                ["Healthcare And Other Needs", "₹3,000"],
                ["Clothing And Personal Expenses", "₹2,000"],
                ["Total Planned Expenses", "₹26,000"],
              ].map(([label, amount], index) => (
                <div
                  key={label}
                  className={`flex items-center justify-between gap-3 p-3 sm:px-4 ${
                    index === 6
                      ? "border-t-2 border-blue-200 bg-blue-50 font-semibold"
                      : "border-t border-gray-100"
                  }`}
                >
                  <span className="text-sm text-gray-700">{label}</span>
                  <span
                    className={`shrink-0 text-sm ${
                      index === 6
                        ? "text-blue-800"
                        : "text-gray-800"
                    }`}
                  >
                    {amount}
                  </span>
                </div>
              ))}
            </div>

            <div className="mb-5 rounded-2xl border border-rose-200 bg-rose-50 p-4">
              <p className="font-semibold text-rose-800">
                Monthly Budget Gap: ₹1,000
              </p>
              <p className="mt-1 text-sm leading-7 text-gray-700">
                Planned expenses of ₹26,000 exceed income of ₹25,000.
                The family must adjust its spending, increase income,
                or use available savings if appropriate.
              </p>
            </div>

            <h3 className="mb-3 text-xl font-semibold text-gray-900">
              How Can The Household Manage Scarcity?
            </h3>

            <div className="grid gap-3 sm:grid-cols-2">
              {[
                [
                  "Prioritise Essentials",
                  "Protect spending on food, housing, education, and necessary healthcare.",
                ],
                [
                  "Compare Prices",
                  "Compare equivalent products and use discounts without compromising essential quality.",
                ],
                [
                  "Reduce Avoidable Costs",
                  "Review subscriptions, unnecessary purchases, and preventable waste.",
                ],
                [
                  "Plan For Emergencies",
                  "Build savings when possible and avoid taking on unaffordable debt.",
                ],
              ].map(([title, description]) => (
                <div
                  key={title}
                  className="rounded-xl border border-blue-100 bg-white p-4"
                >
                  <h3 className="mb-2 font-semibold text-blue-900">
                    {title}
                  </h3>
                  <p className="text-sm leading-7 text-gray-700">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Clothing Business Example */}
        <section className="mb-10 overflow-hidden rounded-3xl border border-purple-200 bg-gradient-to-br from-purple-50 via-white to-pink-50">
          <div className="border-b border-purple-100 px-5 py-5 sm:px-7">
            <span className="mb-2 inline-block rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-800">
              Real-Life Example 02
            </span>
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              How Scarcity Affects A Clothing Business
            </h2>
          </div>

          <div className="p-5 sm:p-7">
            <p className="mb-5 leading-8 text-gray-700">
              Imagine a clothing retailer in Ludhiana with ₹1,00,000
              available for purchasing stock before a new season. The
              retailer wants to buy several types of clothing, but the
              budget cannot cover every style, size, and colour in large
              quantities.
            </p>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-purple-100 bg-white p-4">
                <p className="mb-2 text-sm font-medium text-gray-500">
                  Available Budget
                </p>
                <p className="text-2xl font-bold text-purple-800">
                  ₹1,00,000
                </p>
              </div>

              <div className="rounded-2xl border border-purple-100 bg-white p-4">
                <p className="mb-2 text-sm font-medium text-gray-500">
                  Desired Stock Purchase
                </p>
                <p className="text-2xl font-bold text-gray-900">
                  ₹1,30,000
                </p>
              </div>

              <div className="rounded-2xl border border-rose-100 bg-rose-50 p-4">
                <p className="mb-2 text-sm font-medium text-rose-700">
                  Funding Gap
                </p>
                <p className="text-2xl font-bold text-rose-800">
                  ₹30,000
                </p>
              </div>
            </div>

            <h3 className="mb-4 mt-7 text-xl font-semibold text-gray-900">
              Example Of Inventory Prioritisation
            </h3>

            <div className="space-y-4">
              {[
                {
                  title: "Fast-Selling Products",
                  description:
                    "Allocate more funds to designs and sizes that have consistently sold well.",
                  width: "w-full",
                  color: "bg-emerald-500",
                },
                {
                  title: "Seasonal And New Products",
                  description:
                    "Purchase carefully selected items to test demand before making large commitments.",
                  width: "w-3/4",
                  color: "bg-blue-500",
                },
                {
                  title: "Slow-Selling Or Uncertain Products",
                  description:
                    "Limit initial quantities and avoid tying up too much money in uncertain stock.",
                  width: "w-1/2",
                  color: "bg-purple-500",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-purple-100 bg-white p-4"
                >
                  <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                    <h4 className="font-semibold text-gray-900">
                      {item.title}
                    </h4>
                    <span className="text-xs text-gray-500">
                      Illustrative priority
                    </span>
                  </div>
                  <div className="mb-3 h-2 overflow-hidden rounded-full bg-gray-100">
                    <div
                      className={`h-full rounded-full ${item.width} ${item.color}`}
                    />
                  </div>
                  <p className="text-sm leading-7 text-gray-700">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-purple-200 bg-white p-5">
              <h3 className="mb-3 text-lg font-semibold text-gray-900">
                Practical Ways To Manage Business Scarcity
              </h3>

              <ul className="space-y-3 text-sm leading-7 text-gray-700">
                <li>
                  <span className="font-semibold text-purple-800">
                    Study Sales Data:
                  </span>{" "}
                  Identify the products, sizes, and colours customers
                  actually purchase.
                </li>
                <li>
                  <span className="font-semibold text-purple-800">
                    Negotiate With Suppliers:
                  </span>{" "}
                  Compare prices, delivery schedules, minimum order
                  quantities, and payment terms.
                </li>
                <li>
                  <span className="font-semibold text-purple-800">
                    Manage Cash Flow:
                  </span>{" "}
                  Avoid investing the entire budget in slow-moving stock
                  when funds may be needed for rent, wages, or restocking.
                </li>
                <li>
                  <span className="font-semibold text-purple-800">
                    Monitor Demand:
                  </span>{" "}
                  Review sales regularly and replenish popular items
                  where financially practical.
                </li>
              </ul>
            </div>

            <p className="mt-4 text-sm leading-7 text-gray-600">
              The product priorities shown here are illustrative, not
              actual sales statistics or a recommended fixed allocation.
              A retailer should use its own sales records and margins
              to determine stock quantities.
            </p>
          </div>
        </section>

        {/* Country Example */}
        <section className="mb-10 overflow-hidden rounded-3xl border border-emerald-200 bg-gradient-to-br from-emerald-50 via-white to-teal-50">
          <div className="border-b border-emerald-100 px-5 py-5 sm:px-7">
            <span className="mb-2 inline-block rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-800">
              Real-Life Example 03
            </span>
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              How Scarcity Affects A Country
            </h2>
          </div>

          <div className="p-5 sm:p-7">
            <p className="mb-5 leading-8 text-gray-700">
              A country has limited public funds, natural resources,
              trained workers, infrastructure, and administrative
              capacity. Its government must decide how to distribute
              resources among competing priorities such as hospitals,
              schools, roads, agriculture, water supply, and public
              transport.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-emerald-100 bg-white p-5">
                <h3 className="mb-2 text-lg font-semibold text-gray-900">
                  Scarcity Of Public Funds
                </h3>
                <p className="text-sm leading-7 text-gray-700">
                  Funding one project may leave less money for another.
                  Governments must compare expected benefits, costs,
                  urgency, and long-term consequences.
                </p>
              </div>

              <div className="rounded-2xl border border-cyan-100 bg-white p-5">
                <h3 className="mb-2 text-lg font-semibold text-gray-900">
                  Scarcity Of Water
                </h3>
                <p className="text-sm leading-7 text-gray-700">
                  During water stress, households, farmers, industries,
                  and ecosystems may compete for limited supplies.
                  Conservation and careful allocation become important.
                </p>
              </div>

              <div className="rounded-2xl border border-blue-100 bg-white p-5">
                <h3 className="mb-2 text-lg font-semibold text-gray-900">
                  Scarcity Of Skilled Workers
                </h3>
                <p className="text-sm leading-7 text-gray-700">
                  A lack of trained healthcare workers, engineers,
                  teachers, or technicians can slow the delivery of
                  essential services and infrastructure projects.
                </p>
              </div>

              <div className="rounded-2xl border border-amber-100 bg-white p-5">
                <h3 className="mb-2 text-lg font-semibold text-gray-900">
                  Scarcity Of Energy And Materials
                </h3>
                <p className="text-sm leading-7 text-gray-700">
                  Supply disruptions or higher costs for fuel, electricity,
                  metals, and other inputs can affect businesses,
                  transport, construction, and household budgets.
                </p>
              </div>
            </div>

            <h3 className="mb-4 mt-7 text-xl font-semibold text-gray-900">
              How Can A Country Manage Scarcity?
            </h3>

            <div className="space-y-3">
              {[
                [
                  "Set Public Priorities",
                  "Direct limited budgets towards essential services and projects with strong public benefits.",
                ],
                [
                  "Improve Resource Efficiency",
                  "Reduce leakage, waste, project delays, and inefficient spending.",
                ],
                [
                  "Invest In Education And Skills",
                  "Develop the trained workforce needed to improve productivity and provide services.",
                ],
                [
                  "Protect And Manage Natural Resources",
                  "Improve water management, soil conservation, energy efficiency, and sustainable resource use.",
                ],
                [
                  "Encourage Productive Investment",
                  "Support infrastructure, technology, competition, and business activity where these can increase productive capacity.",
                ],
              ].map(([title, description], index) => (
                <div
                  key={title}
                  className="flex gap-3 rounded-xl border border-emerald-100 bg-white p-4"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-100 font-semibold text-emerald-800">
                    {index + 1}
                  </span>
                  <div>
                    <h4 className="mb-1 font-semibold text-gray-900">
                      {title}
                    </h4>
                    <p className="text-sm leading-7 text-gray-700">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-5 rounded-xl border border-emerald-100 bg-white p-4 text-sm leading-7 text-gray-700">
              Important: Better planning can reduce the effects of
              scarcity, but it does not remove every economic trade-off.
              Increasing the supply of a resource may also require time,
              investment, technology, and additional resources.
            </p>
          </div>
        </section>

        {/* Scarcity And Choice */}
        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-bold text-gray-900 sm:text-3xl">
            How Scarcity Leads To Economic Choices
          </h2>

          <p className="mb-5 leading-8 text-gray-700">
            When resources have alternative uses, choosing one option
            means giving up another. This is why scarcity is closely
            related to opportunity cost.
          </p>

          <div className="rounded-2xl border border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50 p-5 sm:p-7">
            <div className="grid gap-4 sm:grid-cols-3 sm:items-center">
              <div className="rounded-xl border border-blue-100 bg-white p-4 text-center">
                <p className="mb-2 text-sm font-medium text-blue-700">
                  Step 01
                </p>
                <h3 className="font-semibold text-gray-900">
                  Resources Are Limited
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Not every want can be satisfied.
                </p>
              </div>

              <div className="rounded-xl border border-indigo-100 bg-white p-4 text-center">
                <p className="mb-2 text-sm font-medium text-indigo-700">
                  Step 02
                </p>
                <h3 className="font-semibold text-gray-900">
                  A Choice Is Required
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Available alternatives must be compared.
                </p>
              </div>

              <div className="rounded-xl border border-purple-100 bg-white p-4 text-center">
                <p className="mb-2 text-sm font-medium text-purple-700">
                  Step 03
                </p>
                <h3 className="font-semibold text-gray-900">
                  Opportunity Cost Arises
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  The next-best alternative is given up.
                </p>
              </div>
            </div>

            <div className="mt-5 rounded-xl bg-white p-4">
              <h3 className="mb-2 font-semibold text-gray-900">
                Example Of Opportunity Cost
              </h3>
              <p className="text-sm leading-7 text-gray-700">
                If a clothing retailer uses ₹20,000 to purchase additional
                stock instead of spending it on shop improvements, the
                opportunity cost is the benefit the retailer gives up
                from the best alternative use of that money.
              </p>
            </div>

            <p className="mt-4 text-sm text-gray-600">
              <Link
                href="/economics/basics/opportunity-cost"
                className="font-semibold text-blue-800 underline underline-offset-4 hover:text-blue-950"
              >
                Learn More About Opportunity Cost
              </Link>
            </p>
          </div>
        </section>

        <AdSlot />

        {/* Scarcity Vs Shortage */}
        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-bold text-gray-900 sm:text-3xl">
            Scarcity Vs. Shortage
          </h2>

          <p className="mb-5 leading-8 text-gray-700">
            Scarcity is the fundamental economic problem of limited
            resources relative to competing wants. A shortage is a more
            specific situation in which the quantity demanded exceeds
            the quantity supplied under particular market conditions,
            such as at a given price.
          </p>

          <div className="overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full min-w-[540px] border-collapse text-left text-sm sm:text-base">
              <thead>
                <tr className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white">
                  <th className="p-4 font-semibold">Feature</th>
                  <th className="p-4 font-semibold">Scarcity</th>
                  <th className="p-4 font-semibold">Shortage</th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    "Meaning",
                    "Resources are limited relative to wants.",
                    "Demand exceeds supply under given conditions.",
                  ],
                  [
                    "Nature",
                    "A basic economic problem.",
                    "A specific supply-and-demand imbalance.",
                  ],
                  [
                    "Example",
                    "A family has limited income for its needs.",
                    "A shop cannot meet customer demand for a popular jacket at the current price.",
                  ],
                  [
                    "Possible Response",
                    "Make choices and allocate resources efficiently.",
                    "Increase supply, adjust prices where appropriate, or manage demand.",
                  ],
                ].map((row, index) => (
                  <tr
                    key={row[0]}
                    className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                  >
                    {row.map((cell, cellIndex) => (
                      <td
                        key={cellIndex}
                        className="border-t border-gray-200 p-4 align-top leading-7 text-gray-700"
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Types */}
        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-bold text-gray-900 sm:text-3xl">
            Types Of Scarcity In Economics
          </h2>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-orange-200 bg-orange-50 p-5">
              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                Absolute Scarcity
              </h3>
              <p className="leading-7 text-gray-700">
                This term is commonly used when the physical availability
                of a resource is extremely limited. For example, a region
                may have very little naturally available freshwater.
              </p>
            </div>

            <div className="rounded-2xl border border-cyan-200 bg-cyan-50 p-5">
              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                Relative Scarcity
              </h3>
              <p className="leading-7 text-gray-700">
                This describes a resource that is limited compared with
                competing wants or alternative uses. For example, a shop
                may have enough money to buy stock, but not enough to
                purchase every product it wants to sell.
              </p>
            </div>
          </div>

          <p className="mt-4 text-sm leading-7 text-gray-600">
            Terminology varies across textbooks. In introductory
            economics, the key principle is that resources are scarce
            relative to competing wants and uses.
          </p>
        </section>

        {/* General Solution Framework */}
        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-bold text-gray-900 sm:text-3xl">
            How To Deal With Scarcity Effectively
          </h2>

          <p className="mb-6 leading-8 text-gray-700">
            Scarcity cannot always be eliminated, but its effects can
            often be managed through better decisions, planning,
            productivity, and resource allocation.
          </p>

          <div className="space-y-4">
            {managementSteps.map((step, index) => (
              <div
                key={step.title}
                className="flex gap-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 font-bold text-white">
                  {index + 1}
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-gray-900">
                    {step.title}
                  </h3>
                  <p className="leading-7 text-gray-700">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Importance */}
        <section className="mb-10 rounded-3xl border border-indigo-100 bg-gradient-to-br from-indigo-50 via-white to-blue-50 p-5 sm:p-7">
          <h2 className="mb-4 text-2xl font-bold text-gray-900 sm:text-3xl">
            Why Is Scarcity Important In Economics?
          </h2>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              [
                "Consumer Decisions",
                "Explains why individuals compare prices, prioritise needs, and work within budgets.",
              ],
              [
                "Business Planning",
                "Helps businesses allocate staff, funds, stock, and production capacity.",
              ],
              [
                "Resource Allocation",
                "Explains how resources are distributed among competing uses.",
              ],
              [
                "Government Policy",
                "Highlights trade-offs in public spending, infrastructure, education, and healthcare.",
              ],
              [
                "Production Decisions",
                "Helps explain choices about which goods and services to produce and in what quantities.",
              ],
              [
                "Environmental Management",
                "Shows why conservation and careful use of limited natural resources matter.",
              ],
            ].map(([title, description]) => (
              <div
                key={title}
                className="rounded-xl border border-indigo-100 bg-white p-4"
              >
                <h3 className="mb-2 font-semibold text-indigo-900">
                  {title}
                </h3>
                <p className="text-sm leading-7 text-gray-700">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQs */}
        <section className="mb-10">
          <h2 className="mb-5 text-2xl font-bold text-gray-900 sm:text-3xl">
            Frequently Asked Questions About Scarcity
          </h2>

          <div className="space-y-4">
            {[
              [
                "Is Scarcity The Basic Economic Problem?",
                "Yes. Scarcity is considered the basic economic problem because resources are limited relative to human wants, requiring individuals and societies to make choices.",
              ],
              [
                "Does Scarcity Mean A Resource Will Run Out Completely?",
                "No. A resource can be scarce even when it remains available. Scarcity means there are insufficient resources to satisfy all competing wants and uses.",
              ],
              [
                "Can Money Be Scarce?",
                "Yes. Households, businesses, and governments have limited budgets and must decide which expenses or investments to prioritise.",
              ],
              [
                "How Does Scarcity Affect Prices?",
                "When demand is high relative to available supply, prices may rise. Actual prices also depend on production costs, competition, regulation, and other market conditions.",
              ],
              [
                "Can Technology Reduce Scarcity?",
                "Technology can improve productivity, reduce waste, and increase the supply of some goods and services. However, technology itself requires investment and other resources.",
              ],
              [
                "What Is The Difference Between Scarcity And Opportunity Cost?",
                "Scarcity creates the need to choose between alternatives. Opportunity cost is the value of the next-best alternative given up when a choice is made.",
              ],
            ].map(([question, answer]) => (
              <div
                key={question}
                className="rounded-2xl border border-gray-200 bg-white p-5"
              >
                <h3 className="mb-2 text-lg font-semibold text-gray-900">
                  {question}
                </h3>
                <p className="leading-7 text-gray-700">{answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Related Topics */}
        <section className="mb-8 rounded-3xl border border-blue-200 bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-5 sm:p-7">
          <h2 className="mb-3 text-2xl font-bold text-gray-900">
            Continue Learning Economics
          </h2>

          <p className="mb-5 leading-7 text-gray-700">
            Build your understanding of how limited resources influence
            choices, production, and markets by exploring related topics.
          </p>

          <div className="grid gap-3 sm:grid-cols-2">
            {[
              {
                title: "Opportunity Cost",
                description:
                  "Understand The Value Of The Next-Best Alternative.",
                href: "/economics/basics/opportunity-cost",
              },
              {
                title: "Factors Of Production",
                description:
                  "Learn About Land, Labour, Capital, And Enterprise.",
                href: "/economics/basics/factors-of-production",
              },
              {
                title: "Supply And Demand",
                description:
                  "Explore How Buyers And Sellers Interact In Markets.",
                href: "/economics/basics/supply-and-demand",
              },
            ].map((topic) => (
              <Link
                key={topic.title}
                href={topic.href}
                className="group rounded-xl border border-blue-100 bg-white p-4 transition-colors hover:border-blue-300 hover:bg-blue-50"
              >
                <h3 className="mb-2 font-semibold text-blue-900">
                  {topic.title}
                  <span className="ml-2 transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </h3>
                <p className="text-sm leading-6 text-gray-600">
                  {topic.description}
                </p>
              </Link>
            ))}
          </div>
        </section>

        <p className="border-t border-gray-200 pt-5 text-sm leading-7 text-gray-500">
          The financial amounts used in the household and clothing
          business examples are illustrative. Actual budgets, costs,
          demand, and resource constraints vary by situation.
        </p>
      </article>
    </main>
  );
}
