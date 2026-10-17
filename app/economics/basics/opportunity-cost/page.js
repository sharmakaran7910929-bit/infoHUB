
import Link from "next/link";
import AdSlot from "../../../../components/AdSlot";
import RelatedTopics from "../../../../components/ContinueReading";
export const metadata = {
  title: "Opportunity Cost | Meaning, Formula & Real-Life Examples",
  description:
    "Learn opportunity cost in economics with a simple formula, household budget examples, clothing business decisions, government spending, and practical calculations.",
  alternates: {
    canonical:
      "https://www.pricetag.co.in/economics/basics/opportunity-cost",
  },
};

const decisionExamples = [
  {
    title: "Household Spending",
    label: "Personal Economics",
    color: "border-blue-200 bg-blue-50",
    badge: "bg-blue-100 text-blue-800",
    description:
      "A family has ₹5,000 available for a discretionary purchase. It can buy a new appliance or use the money for a short family trip.",
    choice: "The family chooses the appliance.",
    opportunity:
      "The enjoyment and benefits of the trip are the next-best alternative given up.",
    lesson:
      "Compare the importance of the purchase with the benefits of the best alternative before spending.",
  },
  {
    title: "Clothing Business",
    label: "Business Economics",
    color: "border-purple-200 bg-purple-50",
    badge: "bg-purple-100 text-purple-800",
    description:
      "A clothing shop has ₹30,000 available. It can purchase additional stock of popular shirts or spend the same amount on shop improvements.",
    choice: "The owner purchases additional shirts.",
    opportunity:
      "The expected benefits of the shop improvements are the next-best alternative forgone.",
    lesson:
      "Compare expected additional profit, demand, risks, and the value of alternative uses of business funds.",
  },
  {
    title: "Government Spending",
    label: "Public Economics",
    color: "border-emerald-200 bg-emerald-50",
    badge: "bg-emerald-100 text-emerald-800",
    description:
      "A government has a limited budget for a new public project. It is considering improving a road or upgrading a government school.",
    choice: "The government allocates the budget to the road project.",
    opportunity:
      "The benefits the school upgrade could have delivered are a potential opportunity cost.",
    lesson:
      "Assess public needs, expected benefits, urgency, and long-term outcomes before allocating public resources.",
  },
];

const decisionSteps = [
  {
    title: "Identify Your Available Resources",
    description:
      "Determine how much money, time, labour, or other resources you can actually use.",
  },
  {
    title: "List The Available Alternatives",
    description:
      "Identify the realistic options competing for the same limited resource.",
  },
  {
    title: "Choose Your Preferred Option",
    description:
      "Decide which option best meets your objectives and circumstances.",
  },
  {
    title: "Identify The Next-Best Alternative",
    description:
      "Determine which rejected option you would have selected if your preferred choice were unavailable.",
  },
  {
    title: "Evaluate What You Give Up",
    description:
      "Estimate the benefit, value, income, or time sacrificed by not choosing that alternative.",
  },
];

export default function OpportunityCostPage() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      <article className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Main Heading */}
        <header className="relative mb-10 overflow-hidden rounded-3xl border border-blue-100 bg-gradient-to-br from-white via-blue-50 to-blue-100 px-5 py-9 shadow-sm sm:px-9 sm:py-12">
          <div className="absolute -right-12 -top-16 h-48 w-48 rounded-full bg-blue-200/40 blur-3xl" />
          <div className="absolute -bottom-16 -left-10 h-40 w-40 rounded-full bg-indigo-200/30 blur-3xl" />

          <div className="relative">
            <span className="mb-4 inline-flex rounded-full border border-blue-200 bg-white/80 px-3 py-1 text-sm font-medium text-blue-800">
              Economics Basics
            </span>

            <h1 className="max-w-4xl bg-gradient-to-r from-blue-900 via-blue-700 to-indigo-600 bg-clip-text text-3xl font-bold leading-tight text-transparent sm:text-4xl lg:text-5xl">
              Opportunity Cost In Economics: Meaning, Formula And Real-Life Examples
            </h1>

            <p className="mt-5 max-w-3xl text-base leading-8 text-gray-700 sm:text-lg">
              Every choice involves giving something up. When you spend
              money, use your time, or invest business resources in one
              option, you lose the opportunity to use them elsewhere.
              Economics calls the value of the next-best alternative
              you give up the opportunity cost.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <span className="rounded-lg bg-white px-3 py-2 text-sm font-medium text-blue-800 shadow-sm">
                Economic Choices
              </span>
              <span className="rounded-lg bg-white px-3 py-2 text-sm font-medium text-indigo-800 shadow-sm">
                Simple Formula
              </span>
              <span className="rounded-lg bg-white px-3 py-2 text-sm font-medium text-cyan-800 shadow-sm">
                Practical Examples
              </span>
            </div>
          </div>
        </header>

        {/* Definition */}
        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-bold text-gray-900 sm:text-3xl">
            What Is Opportunity Cost In Economics?
          </h2>

          <p className="mb-4 leading-8 text-gray-700">
            Opportunity cost is the value of the next-best alternative
            that is given up when a person, business, or government
            makes a choice. It reflects the benefit that could have
            been obtained from the best rejected alternative.
          </p>

          <p className="mb-5 leading-8 text-gray-700">
            Opportunity cost is not necessarily the amount of money
            paid for something. It can also involve lost time, income,
            production, convenience, or other benefits. The important
            point is to identify the best realistic alternative that
            was sacrificed.
          </p>

          <div className="rounded-2xl border border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50 p-5 sm:p-7">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-blue-800">
              Simple Definition
            </p>
            <p className="text-xl font-semibold leading-8 text-gray-900">
              Opportunity Cost = The Value Of The Next-Best Alternative Given Up
            </p>
            <p className="mt-3 text-sm leading-7 text-gray-600">
              It is the value of one best forgone alternative, not the
              combined value of every option that was rejected.
            </p>
          </div>
        </section>

        <AdSlot />

        {/* Simple Example */}
        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-bold text-gray-900 sm:text-3xl">
            A Simple Example Of Opportunity Cost
          </h2>

          <p className="mb-5 leading-8 text-gray-700">
            Imagine that you have ₹500 and are deciding between buying
            a book or going to a movie. You can afford only one option
            with this money.
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
              <div className="mb-3 inline-flex rounded-lg bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-800">
                Your Choice
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Buy The Book
              </h3>
              <p className="text-sm leading-7 text-gray-700">
                You purchase the book because it will help you prepare
                for an examination.
              </p>
            </div>

            <div className="rounded-2xl border border-orange-200 bg-orange-50 p-5">
              <div className="mb-3 inline-flex rounded-lg bg-orange-100 px-3 py-1 text-sm font-semibold text-orange-800">
                Opportunity Cost
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                The Movie Experience
              </h3>
              <p className="text-sm leading-7 text-gray-700">
                If the movie was your next-best alternative, the
                enjoyment you give up by buying the book is the
                opportunity cost.
              </p>
            </div>
          </div>

          <p className="mt-4 leading-8 text-gray-700">
            Notice that the opportunity cost is not automatically
            ₹500. It is the value of the best alternative forgone.
            If you would otherwise have spent the money on the movie,
            its price can help quantify the financial side of the
            trade-off, but the benefit you expected from the movie
            may be different from its price.
          </p>
        </section>

        {/* Formula */}
        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-bold text-gray-900 sm:text-3xl">
            Opportunity Cost Formula
          </h2>

          <p className="mb-5 leading-8 text-gray-700">
            Opportunity cost is often expressed in terms of the value
            of the best alternative forgone. In production decisions,
            it can also be calculated as the amount of one product
            sacrificed to produce another.
          </p>

          <div className="rounded-2xl border border-purple-200 bg-gradient-to-br from-purple-50 to-white p-5 sm:p-7">
            <h3 className="mb-3 text-xl font-semibold text-gray-900">
              Formula For Production Choices
            </h3>

            <div className="rounded-xl border border-purple-100 bg-white p-4 text-center">
              <p className="text-lg font-semibold leading-8 text-purple-900">
                Opportunity Cost Per Additional Unit Of X
              </p>
              <div className="my-3 text-2xl font-bold text-gray-700">
                =
              </div>
              <p className="text-base font-medium leading-7 text-gray-800">
                Units Of Y Given Up ÷ Additional Units Of X Produced
              </p>
            </div>

            <p className="mt-4 text-sm leading-7 text-gray-600">
              This production formula measures opportunity cost in
              units of another product. For money, time, or other
              decisions, identify and value the next-best alternative.
            </p>
          </div>

          <h3 className="mb-3 mt-6 text-xl font-semibold text-gray-900">
            Worked Calculation
          </h3>

          <div className="overflow-hidden rounded-2xl border border-gray-200">
            <div className="grid grid-cols-2 bg-gray-50">
              <div className="border-r border-gray-200 p-4">
                <p className="text-sm text-gray-500">Before</p>
                <p className="mt-1 text-lg font-semibold text-gray-900">
                  100 Shirts
                </p>
                <p className="text-sm text-gray-600">50 T-Shirts</p>
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-500">After</p>
                <p className="mt-1 text-lg font-semibold text-gray-900">
                  120 Shirts
                </p>
                <p className="text-sm text-gray-600">40 T-Shirts</p>
              </div>
            </div>

            <div className="border-t border-gray-200 bg-white p-5">
              <p className="mb-2 leading-7 text-gray-700">
                The business produces 20 additional shirts but gives
                up 10 T-shirts.
              </p>
              <div className="rounded-xl bg-blue-50 p-4">
                <p className="font-semibold text-blue-900">
                  Opportunity Cost = 10 ÷ 20 = 0.5 T-Shirt Per Additional Shirt
                </p>
                <p className="mt-2 text-sm leading-7 text-gray-700">
                  The opportunity cost of producing one additional
                  shirt is half a T-shirt, assuming these are the
                  only two products and the production change is
                  measured over this range.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Household Example */}
        <section className="mb-10 overflow-hidden rounded-3xl border border-blue-200 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
          <div className="border-b border-blue-100 px-5 py-5 sm:px-7">
            <span className="mb-2 inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800">
              Real-Life Example 01
            </span>
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              Opportunity Cost In Household Decisions
            </h2>
          </div>

          <div className="p-5 sm:p-7">
            <p className="mb-5 leading-8 text-gray-700">
              Suppose a household has ₹10,000 left after paying its
              essential monthly expenses. The family is considering
              buying a new television or using the money for a short
              trip. For this example, assume the trip is the family's
              next-best alternative.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-blue-100 bg-white p-5">
                <p className="mb-2 text-sm font-medium text-gray-500">
                  Option A
                </p>
                <h3 className="mb-2 text-xl font-semibold text-gray-900">
                  Buy A Television
                </h3>
                <p className="text-2xl font-bold text-blue-800">
                  ₹10,000
                </p>
                <p className="mt-3 text-sm leading-7 text-gray-700">
                  The family gains the benefits of owning and using
                  the television.
                </p>
              </div>

              <div className="rounded-2xl border border-orange-100 bg-white p-5">
                <p className="mb-2 text-sm font-medium text-gray-500">
                  Option B
                </p>
                <h3 className="mb-2 text-xl font-semibold text-gray-900">
                  Take A Family Trip
                </h3>
                <p className="text-2xl font-bold text-orange-700">
                  ₹10,000
                </p>
                <p className="mt-3 text-sm leading-7 text-gray-700">
                  The family gains the experience and enjoyment
                  associated with the trip.
                </p>
              </div>
            </div>

            <div className="mt-5 rounded-2xl border border-blue-200 bg-white p-5">
              <h3 className="mb-2 text-lg font-semibold text-gray-900">
                What Is The Opportunity Cost?
              </h3>
              <p className="leading-7 text-gray-700">
                If the family chooses the television, the benefits
                it would have received from the trip are the opportunity
                cost. If the trip is chosen instead, the benefits of
                owning the television are the opportunity cost.
              </p>
            </div>

            <h3 className="mb-3 mt-6 text-xl font-semibold text-gray-900">
              How Can A Household Make A Better Decision?
            </h3>

            <ul className="list-disc space-y-2 pl-6 leading-7 text-gray-700">
              <li>Check whether both options fit the household budget.</li>
              <li>Consider which option meets the family's priorities.</li>
              <li>Think about how often each option will be used.</li>
              <li>Consider saving the money if neither option is important enough.</li>
            </ul>
          </div>
        </section>

        <AdSlot />

        {/* Clothing Business */}
        <section className="mb-10 overflow-hidden rounded-3xl border border-purple-200 bg-gradient-to-br from-purple-50 via-white to-pink-50">
          <div className="border-b border-purple-100 px-5 py-5 sm:px-7">
            <span className="mb-2 inline-block rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-800">
              Real-Life Example 02
            </span>
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              Opportunity Cost In A Clothing Business
            </h2>
          </div>

          <div className="p-5 sm:p-7">
            <p className="mb-5 leading-8 text-gray-700">
              Imagine a clothing retailer in Ludhiana has ₹50,000 to
              invest. The owner can buy additional stock of popular
              clothing items or use the same funds for advertising.
              The owner expects the advertising to generate ₹12,000
              in additional net contribution after its direct campaign
              costs, while additional inventory is expected to generate
              ₹18,000 in additional net contribution after its direct
              costs. These are hypothetical estimates, not market data.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-purple-100 bg-white p-5">
                <span className="mb-3 inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm font-medium text-purple-800">
                  Option A
                </span>
                <h3 className="mb-2 text-xl font-semibold text-gray-900">
                  Purchase More Stock
                </h3>
                <p className="text-sm text-gray-600">Available investment</p>
                <p className="text-2xl font-bold text-purple-800">
                  ₹50,000
                </p>
                <p className="mt-3 text-sm leading-7 text-gray-700">
                  Estimated additional net contribution: ₹18,000.
                </p>
              </div>

              <div className="rounded-2xl border border-pink-100 bg-white p-5">
                <span className="mb-3 inline-block rounded-lg bg-pink-100 px-3 py-1 text-sm font-medium text-pink-800">
                  Option B
                </span>
                <h3 className="mb-2 text-xl font-semibold text-gray-900">
                  Advertise The Shop
                </h3>
                <p className="text-sm text-gray-600">Available investment</p>
                <p className="text-2xl font-bold text-pink-800">
                  ₹50,000
                </p>
                <p className="mt-3 text-sm leading-7 text-gray-700">
                  Estimated additional net contribution: ₹12,000.
                </p>
              </div>
            </div>

            <div className="mt-5 rounded-2xl border border-purple-200 bg-white p-5">
              <h3 className="mb-2 text-lg font-semibold text-gray-900">
                Calculate The Opportunity Cost
              </h3>
              <p className="mb-3 leading-7 text-gray-700">
                If the owner chooses additional stock, the estimated
                net contribution from the next-best alternative,
                advertising, is ₹12,000.
              </p>

              <div className="rounded-xl bg-purple-50 p-4">
                <p className="font-semibold text-purple-900">
                  Opportunity Cost Of Choosing Stock = ₹12,000 In Forgone Estimated Contribution
                </p>
              </div>

              <p className="mt-3 text-sm leading-7 text-gray-600">
                The owner should also consider uncertainty, unsold stock,
                timing, customer demand, cash flow, and whether the
                alternatives are genuinely comparable. The estimate
                does not guarantee either outcome.
              </p>
            </div>
          </div>
        </section>

        {/* Government Example */}
        <section className="mb-10 overflow-hidden rounded-3xl border border-emerald-200 bg-gradient-to-br from-emerald-50 via-white to-teal-50">
          <div className="border-b border-emerald-100 px-5 py-5 sm:px-7">
            <span className="mb-2 inline-block rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-800">
              Real-Life Example 03
            </span>
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              Opportunity Cost In Government Decisions
            </h2>
          </div>

          <div className="p-5 sm:p-7">
            <p className="mb-5 leading-8 text-gray-700">
              Governments also face opportunity costs because public
              budgets, land, staff, and construction capacity are limited.
              A decision to fund one project may reduce the resources
              available for another project.
            </p>

            <div className="rounded-2xl border border-emerald-100 bg-white p-5">
              <p className="mb-4 text-sm font-medium text-gray-500">
                Illustrative Public Budget
              </p>

              <div className="mb-5 rounded-xl bg-emerald-50 p-4">
                <p className="text-sm text-emerald-800">
                  Available Project Budget
                </p>
                <p className="mt-1 text-3xl font-bold text-emerald-900">
                  ₹10 Crore
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-blue-100 p-4">
                  <h3 className="mb-2 font-semibold text-gray-900">
                    Option A: Road Improvement
                  </h3>
                  <p className="text-sm leading-7 text-gray-700">
                    Could improve travel reliability, road safety,
                    and access to markets and services.
                  </p>
                </div>

                <div className="rounded-xl border border-amber-100 p-4">
                  <h3 className="mb-2 font-semibold text-gray-900">
                    Option B: School Upgrade
                  </h3>
                  <p className="text-sm leading-7 text-gray-700">
                    Could improve classrooms, sanitation, learning
                    facilities, and the educational environment.
                  </p>
                </div>
              </div>

              <div className="mt-5 rounded-xl border border-emerald-100 bg-emerald-50 p-4">
                <h3 className="mb-2 font-semibold text-emerald-900">
                  Identifying The Opportunity Cost
                </h3>
                <p className="text-sm leading-7 text-gray-700">
                  If the government chooses the road project, the
                  benefits the school upgrade could have delivered
                  represent a potential opportunity cost, assuming
                  that the school upgrade is the next-best feasible
                  alternative.
                </p>
              </div>
            </div>

            <h3 className="mb-3 mt-6 text-xl font-semibold text-gray-900">
              How Should Governments Evaluate The Trade-Off?
            </h3>

            <ul className="list-disc space-y-2 pl-6 leading-7 text-gray-700">
              <li>Identify urgent public needs and underserved communities.</li>
              <li>Compare the expected benefits and costs of each project.</li>
              <li>Consider long-term maintenance and operating expenses.</li>
              <li>Assess safety, accessibility, fairness, and economic effects.</li>
              <li>Explain why the chosen project offers the stronger public benefit.</li>
            </ul>
          </div>
        </section>

        {/* Time Example */}
        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-bold text-gray-900 sm:text-3xl">
            Opportunity Cost Of Time
          </h2>

          <p className="mb-5 leading-8 text-gray-700">
            Opportunity cost applies to time as well as money. Time
            spent on one activity cannot generally be used for another
            activity during the same period.
          </p>

          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-cyan-200 bg-cyan-50 p-5">
              <h3 className="mb-2 text-lg font-semibold text-gray-900">
                A Student
              </h3>
              <p className="text-sm leading-7 text-gray-700">
                Spending two hours watching a film may mean giving up
                the study time that would otherwise have been used
                to prepare for an examination.
              </p>
            </div>

            <div className="rounded-2xl border border-orange-200 bg-orange-50 p-5">
              <h3 className="mb-2 text-lg font-semibold text-gray-900">
                A Shop Owner
              </h3>
              <p className="text-sm leading-7 text-gray-700">
                Spending the afternoon on routine administration may
                mean giving up time that could have been used to
                meet suppliers or customers.
              </p>
            </div>

            <div className="rounded-2xl border border-indigo-200 bg-indigo-50 p-5">
              <h3 className="mb-2 text-lg font-semibold text-gray-900">
                An Employee
              </h3>
              <p className="text-sm leading-7 text-gray-700">
                Attending a training course may mean giving up wages
                from a work shift, while potentially gaining skills
                that improve future opportunities.
              </p>
            </div>
          </div>

          <p className="mt-4 leading-8 text-gray-700">
            The best choice depends on the person's goals and
            circumstances. Time spent relaxing can also be valuable;
            opportunity cost helps compare alternatives rather than
            assuming that paid work is always the better option.
          </p>
        </section>

        <AdSlot />

        {/* Types Of Costs */}
        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-bold text-gray-900 sm:text-3xl">
            Explicit Costs And Implicit Costs
          </h2>

          <p className="mb-5 leading-8 text-gray-700">
            Economic decision-making can involve direct payments and
            benefits sacrificed by using resources in a particular way.
            Distinguishing these helps explain why the visible price
            may not capture the full economic cost.
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-blue-200 bg-blue-50 p-5">
              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                Explicit Costs
              </h3>
              <p className="mb-3 leading-7 text-gray-700">
                These are direct monetary payments made to obtain
                goods, services, or resources.
              </p>
              <ul className="list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
                <li>Rent paid for a shop.</li>
                <li>Wages paid to employees.</li>
                <li>Money spent purchasing fabric.</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-purple-200 bg-purple-50 p-5">
              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                Implicit Costs
              </h3>
              <p className="mb-3 leading-7 text-gray-700">
                These are benefits sacrificed by using resources
                that the decision-maker already owns or controls,
                rather than choosing their next-best use.
              </p>
              <ul className="list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
                <li>Income forgone by leaving a job to study.</li>
                <li>Potential rent forgone by using owned premises.</li>
                <li>Alternative earnings forgone by investing personal funds in a business.</li>
              </ul>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-gray-200 bg-gray-50 p-5">
            <h3 className="mb-2 text-lg font-semibold text-gray-900">
              Economic Cost Vs. Accounting Cost
            </h3>
            <p className="leading-7 text-gray-700">
              Accounting cost generally records explicit expenses.
              Economic cost also considers relevant opportunity costs,
              including implicit costs. The exact calculation depends
              on the decision and the alternatives being evaluated.
            </p>
          </div>
        </section>

        {/* Scarcity Connection */}
        <section className="mb-10 rounded-3xl border border-indigo-200 bg-gradient-to-br from-indigo-50 via-white to-blue-50 p-5 sm:p-7">
          <h2 className="mb-4 text-2xl font-bold text-gray-900 sm:text-3xl">
            Relationship Between Scarcity And Opportunity Cost
          </h2>

          <p className="mb-5 leading-8 text-gray-700">
            Scarcity and opportunity cost are closely connected.
            Scarcity means resources are limited relative to competing
            wants. Because the same resources cannot satisfy every
            want simultaneously, choices become necessary. Opportunity
            cost identifies the best alternative given up by choosing.
          </p>

          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-blue-100 bg-white p-4 text-center">
              <span className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 font-bold text-blue-800">
                1
              </span>
              <h3 className="mb-2 font-semibold text-gray-900">
                Scarcity
              </h3>
              <p className="text-sm leading-6 text-gray-600">
                Available resources cannot satisfy every competing want.
              </p>
            </div>

            <div className="rounded-xl border border-purple-100 bg-white p-4 text-center">
              <span className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-purple-100 font-bold text-purple-800">
                2
              </span>
              <h3 className="mb-2 font-semibold text-gray-900">
                Choice
              </h3>
              <p className="text-sm leading-6 text-gray-600">
                A person or organisation selects one available option.
              </p>
            </div>

            <div className="rounded-xl border border-emerald-100 bg-white p-4 text-center">
              <span className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 font-bold text-emerald-800">
                3
              </span>
              <h3 className="mb-2 font-semibold text-gray-900">
                Opportunity Cost
              </h3>
              <p className="text-sm leading-6 text-gray-600">
                The value of the next-best alternative is given up.
              </p>
            </div>
          </div>

          <p className="mt-5">
            <Link
              href="/economics/basics/scarcity-in-economics"
              className="font-semibold text-blue-800 underline underline-offset-4 hover:text-blue-950"
            >
              Read More About Scarcity In Economics →
            </Link>
          </p>
        </section>

        {/* Common Mistakes */}
        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-bold text-gray-900 sm:text-3xl">
            Common Mistakes When Understanding Opportunity Cost
          </h2>

          <div className="space-y-4">
            {[
              [
                "Counting Every Rejected Option",
                "Opportunity cost is the value of the single next-best alternative, not the combined value of every option rejected.",
              ],
              [
                "Assuming It Is Always A Cash Amount",
                "Opportunity cost can involve time, lost income, convenience, output, or other benefits, not just money.",
              ],
              [
                "Confusing Purchase Price With Opportunity Cost",
                "The purchase price is a direct monetary expense. Opportunity cost focuses on the best alternative forgone because of the decision.",
              ],
              [
                "Assuming The Most Expensive Alternative Is Always Best",
                "The next-best alternative depends on the decision-maker's priorities, expected benefits, and realistic available choices, not simply price.",
              ],
              [
                "Ignoring Future Consequences",
                "Some decisions affect future income, productivity, flexibility, or opportunities. Consider relevant longer-term effects as well as immediate ones.",
              ],
            ].map(([title, description]) => (
              <div
                key={title}
                className="rounded-2xl border border-rose-100 bg-rose-50 p-5"
              >
                <h3 className="mb-2 font-semibold text-gray-900">
                  {title}
                </h3>
                <p className="text-sm leading-7 text-gray-700">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Decision Framework */}
        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-bold text-gray-900 sm:text-3xl">
            How To Evaluate Opportunity Cost In Five Steps
          </h2>

          <div className="space-y-3">
            {decisionSteps.map((step, index) => (
              <div
                key={step.title}
                className="flex gap-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 font-bold text-white">
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

        {/* FAQs */}
        <section className="mb-10">
          <h2 className="mb-5 text-2xl font-bold text-gray-900 sm:text-3xl">
            Frequently Asked Questions About Opportunity Cost
          </h2>

          <div className="space-y-4">
            {[
              [
                "What Is Opportunity Cost In Simple Words?",
                "It is the value of the next-best option you give up when you choose something else.",
              ],
              [
                "What Is The Basic Formula For Opportunity Cost?",
                "For production choices, divide the quantity of the alternative product given up by the additional quantity of the chosen product produced. For general decisions, identify the value of the next-best alternative forgone.",
              ],
              [
                "Can Opportunity Cost Be Zero?",
                "In theory, an opportunity cost can be zero if no valuable alternative is sacrificed. In practice, time, resources, and competing uses often create some opportunity cost, even when no money is paid.",
              ],
              [
                "Is Opportunity Cost The Same As Accounting Cost?",
                "No. Accounting cost records monetary expenses according to accounting rules. Economic cost also considers relevant opportunities sacrificed, including implicit costs.",
              ],
              [
                "Why Is Opportunity Cost Important For Businesses?",
                "It helps businesses compare alternative uses of money, labour, equipment, and time before choosing an investment or production plan.",
              ],
              [
                "Why Does Opportunity Cost Matter To Governments?",
                "Public resources are limited. Funding one project may mean giving up some benefits from another project that could have used the same resources.",
              ],
              [
                "Does Every Decision Have An Opportunity Cost?",
                "A decision has an opportunity cost when choosing it means giving up the value of a feasible alternative. The relevant cost is the best alternative that is actually forgone.",
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
{/* Related topics */}
              <RelatedTopics 
              title='Explore More About Economics'
              links={[
               {
               href:'/economics/basics/what-is-economics',
               label:'What is Economics'
              },
              {
               href:'/economics/basics/scarcity-in-economics',
               label:'Scarcity in Economics'
              },
              {
               href:'/economics/basics/opportunity-cost',
               label:'Opportunity Cost'
              },
              {
               href:'/economics/basics/price-elasticity-of-demand',
               label:'Price Elasticity of Demand'
              },
              {
               href:'/economics/basics/mixed-economy',
               label:'Mixed Economy'
              },
              {
               href:'/economics/basics/microeconomics-vs-macroeconomics',
               label:'Micro VS Macro Economics'
              },
              {
               href:'/economics/basics/market-equilibrium',
               label:'Market Equilibrium'
              },
              {
               href:'/economics/basics/marginal-cost',
               label:'Marginal Cost'
              },
              {
               href:'/economics/basics/law-of-supply',
               label:'Law of Supply'
              },
              {
               href:'/economics/basics/law-of-diminishing-marginal-utility',
               label:'Diminishing Marginal Utility'
              },
              {
               href:'/economics/basics/law-of-demand',
               label:'Law of Demand'
              },
              {
               href:'/economics/basics/factors-of-production',
               label:'Production Factors'
              }
                     ]} />

        <p className="border-t border-gray-200 pt-5 text-sm leading-7 text-gray-500">
          All monetary figures and projected business outcomes on this
          page are illustrative examples for learning purposes, not
          actual financial results or investment advice.
        </p>
      </article>
    </main>
  );
}
