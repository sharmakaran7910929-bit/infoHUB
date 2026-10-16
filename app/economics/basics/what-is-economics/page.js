
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Coins,
  Factory,
  GraduationCap,
  HandCoins,
  Lightbulb,
  Scale,
  ShoppingCart,
  Sprout,
  Users,
  Wallet,
  Home,
  Utensils,
  Bus,
  HeartPulse,
  Smartphone,
  PiggyBank,
  Shirt,
  Package,
  Megaphone,
  Building2,
  Wrench,
  Landmark,
  Shield,
  Wheat,
  ReceiptText,
} from "lucide-react";
import RelatedTopics from '../../../../components/ContinueReading'
import AdSlot from "../../../../components/AdSlot";

export const metadata = {
  title: "What Is Economics? Definition, Meaning and Real-Life Examples | PriceTag HUB",
  description:
    "Learn what economics means, how it works, its main areas, and practical examples of a household budget, clothing business capital, and an illustrative country budget.",
  alternates: {
    canonical: "/economics/basics/what-is-economics",
  },
};

const mainAreas = [
  {
    title: "Production",
    description:
      "Production means creating goods and services that people need or want.",
    example:
      "A clothing factory uses fabric, workers, machines, and electricity to manufacture shirts.",
    icon: Factory,
    color: "bg-blue-50 text-blue-700",
    border: "border-blue-200",
  },
  {
    title: "Consumption",
    description:
      "Consumption means using goods and services to satisfy needs and wants.",
    example:
      "A family purchases groceries, pays for transport, and uses electricity at home.",
    icon: ShoppingCart,
    color: "bg-emerald-50 text-emerald-700",
    border: "border-emerald-200",
  },
  {
    title: "Distribution",
    description:
      "Distribution concerns how income, goods, services, and resources are shared.",
    example:
      "Workers receive wages, business owners may earn profits, and landlords receive rent.",
    icon: HandCoins,
    color: "bg-amber-50 text-amber-700",
    border: "border-amber-200",
  },
  {
    title: "Resource Allocation",
    description:
      "Resource allocation means deciding how limited resources should be used.",
    example:
      "A student divides limited money between books, travel, food, and savings.",
    icon: Scale,
    color: "bg-violet-50 text-violet-700",
    border: "border-violet-200",
  },
];

const everydayExamples = [
  {
    title: "A Family Budget",
    description:
      "A household decides how to use its monthly income for food, rent, education, healthcare, transport, and savings.",
    lesson:
      "Economics explains choices when income is limited and needs compete.",
    icon: Wallet,
    color: "bg-blue-50 text-blue-700",
  },
  {
    title: "A Small Business",
    description:
      "A shopkeeper decides how much stock to purchase, what prices to charge, and how much money to reserve for future expenses.",
    lesson:
      "Economics helps businesses consider costs, customer demand, revenue, and risk.",
    icon: Coins,
    color: "bg-amber-50 text-amber-700",
  },
  {
    title: "A Farmer",
    description:
      "A farmer chooses which crops to grow, how much fertilizer to buy, and when to sell the harvest.",
    lesson:
      "Economics explains how people allocate resources and respond to prices.",
    icon: Sprout,
    color: "bg-emerald-50 text-emerald-700",
  },
];

const householdExpenses = [
  { name: "Housing and utilities", amount: 9000, icon: Home },
  { name: "Food and groceries", amount: 8000, icon: Utensils },
  { name: "Education", amount: 4000, icon: GraduationCap },
  { name: "Transport", amount: 3000, icon: Bus },
  { name: "Healthcare", amount: 1500, icon: HeartPulse },
  { name: "Phone and internet", amount: 1000, icon: Smartphone },
  { name: "Savings", amount: 5000, icon: PiggyBank },
  { name: "Other expenses", amount: 3500, icon: ReceiptText },
];

const clothingExpenses = [
  { name: "Fabric and raw materials", amount: 70000, icon: Shirt },
  { name: "Workers and production labour", amount: 40000, icon: Users },
  { name: "Rent and utilities", amount: 20000, icon: Building2 },
  { name: "Machines and tools", amount: 25000, icon: Wrench },
  { name: "Marketing", amount: 12000, icon: Megaphone },
  { name: "Packaging and transport", amount: 10000, icon: Package },
  { name: "Working cash reserve", amount: 13000, icon: PiggyBank },
  { name: "Other operating needs", amount: 10000, icon: ReceiptText },
];

const countryExpenses = [
  { name: "Infrastructure", amount: 20, icon: Building2 },
  { name: "Education", amount: 15, icon: GraduationCap },
  { name: "Public welfare", amount: 15, icon: Users },
  { name: "Healthcare", amount: 12, icon: HeartPulse },
  { name: "Agriculture and rural services", amount: 12, icon: Wheat },
  { name: "Defence and security", amount: 10, icon: Shield },
  { name: "Administration", amount: 8, icon: Landmark },
  { name: "Emergency reserve", amount: 8, icon: PiggyBank },
];

const countryIncome = [
  { name: "Taxes", amount: 65 },
  { name: "Non-tax revenue", amount: 15 },
  { name: "Borrowing", amount: 20 },
];

const relatedTopics = [
  {
    title: "Scarcity in Economics",
    description: "Understand why resources are limited.",
    href: "/economics/basics/scarcity-in-economics",
    icon: Scale,
  },
  {
    title: "Opportunity Cost",
    description: "Explore what you give up when making a choice.",
    href: "/economics/basics/opportunity-cost",
    icon: Coins,
  },
  {
    title: "Factors of Production",
    description: "Learn about land, labour, capital, and entrepreneurship.",
    href: "/economics/basics/factors-of-production",
    icon: Factory,
  },
];

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mb-7 max-w-3xl">
      {eyebrow && (
        <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-blue-700">
          {eyebrow}
        </p>
      )}
      <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-base leading-7 text-slate-600 sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}

function MoneyTable({
  title,
  items,
  total,
  unit = "₹",
  suffix = "",
  note,
}) {
  const sum = items.reduce((acc, item) => acc + item.amount, 0);

  function formatMoney(value) {
    return `${unit}${value.toLocaleString("en-IN")}${suffix}`;
  }

  return (
    <div className="min-w-0 overflow-hidden rounded-2xl border border-slate-200 bg-white">
      <div className="border-b border-slate-200 bg-slate-50 p-4 sm:p-5">
        <h4 className="font-semibold text-slate-900">{title}</h4>
        {note && (
          <p className="mt-1 text-sm leading-6 text-slate-600">{note}</p>
        )}
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[340px] text-left text-sm">
          <thead className="bg-white text-slate-500">
            <tr>
              <th className="px-3 py-3 font-medium sm:px-5">Category</th>
              <th className="px-3 py-3 text-right font-medium sm:px-5">
                Amount
              </th>
              <th className="px-3 py-3 text-right font-medium sm:px-5">
                Share
              </th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => {
              const Icon = item.icon;
              const percentage = total
                ? (item.amount / total) * 100
                : 0;

              return (
                <tr
                  key={item.name}
                  className="border-t border-slate-100 hover:bg-slate-50"
                >
                  <td className="px-3 py-3 sm:px-5">
                    <div className="flex items-center gap-2.5">
                      {Icon && (
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-700">
                          <Icon size={16} />
                        </span>
                      )}
                      <span className="text-slate-700">{item.name}</span>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3 text-right font-medium tabular-nums text-slate-900 sm:px-5">
                    {formatMoney(item.amount)}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3 text-right tabular-nums text-slate-600 sm:px-5">
                    {percentage.toLocaleString("en-IN", {
                      maximumFractionDigits: 1,
                    })}
                    %
                  </td>
                </tr>
              );
            })}
          </tbody>
          <tfoot className="border-t-2 border-slate-200 bg-slate-50">
            <tr>
              <td className="px-3 py-4 font-semibold text-slate-900 sm:px-5">
                Total
              </td>
              <td className="whitespace-nowrap px-3 py-4 text-right font-bold tabular-nums text-slate-950 sm:px-5">
                {formatMoney(sum)}
              </td>
              <td className="px-3 py-4 text-right font-semibold text-slate-700 sm:px-5">
                {total ? `${((sum / total) * 100).toFixed(0)}%` : "—"}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}

function ExampleSummary({ title, children, color = "blue" }) {
  const colors = {
    blue: "border-blue-200 bg-blue-50 text-blue-950",
    violet: "border-violet-200 bg-violet-50 text-violet-950",
    emerald: "border-emerald-200 bg-emerald-50 text-emerald-950",
  };

  return (
    <div className={`rounded-2xl border p-4 sm:p-5 ${colors[color]}`}>
      <h4 className="font-semibold">{title}</h4>
      <p className="mt-2 text-sm leading-7">{children}</p>
    </div>
  );
}

export default function WhatIsEconomicsPage() {
  return (
    <main className="min-h-screen w-full overflow-hidden bg-slate-50 text-slate-900">
      <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        {/* Hero */}
        <section className="relative overflow-hidden rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-violet-50 p-6 sm:p-10 lg:p-14">
          <div className="grid items-center gap-8 lg:grid-cols-[1.4fr_0.6fr]">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-3 py-1.5 text-sm font-medium text-blue-800">
                <BookOpen size={16} />
                Economics Basics
              </div>

              <h1 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
                What Is Economics?
              </h1>

              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-700">
                Economics is the study of how individuals, businesses, and
                governments make choices about using limited resources to meet
                their needs and wants.
              </p>

              <p className="mt-4 max-w-3xl leading-7 text-slate-600">
                Money, time, workers, land, raw materials, and machinery are
                limited. Economics helps us understand how these resources are
                used, why people make different choices, how prices change, and
                how economic decisions affect everyday life.
              </p>

              <a
                href="#real-life-examples"
                className="mt-7 inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-blue-700 px-5 py-3 font-semibold text-white transition hover:bg-blue-800"
              >
                See Real-Life Examples
                <ArrowRight size={18} />
              </a>
            </div>

            <div className="rounded-2xl border border-white bg-white p-5 shadow-sm sm:p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                <GraduationCap size={26} />
              </div>
              <h2 className="text-lg font-semibold">
                The central economic problem
              </h2>
              <p className="mt-2 leading-6 text-slate-600">
                People have many needs and wants, but the resources available
                to satisfy them are limited.
              </p>
              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-rose-50 p-3">
                  <p className="text-sm text-rose-700">Resources</p>
                  <p className="mt-1 font-semibold text-rose-900">Limited</p>
                </div>
                <div className="rounded-xl bg-emerald-50 p-3">
                  <p className="text-sm text-emerald-700">Wants</p>
                  <p className="mt-1 font-semibold text-emerald-900">Many</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Definition */}
        <section className="py-12 sm:py-16">
          <SectionHeading
            eyebrow="The basic idea"
            title="Economics Meaning and Definition"
            description="Economics is not only about money. It also studies choices, incentives, resources, production, consumption, prices, and how people respond to changing circumstances."
          />

          <div className="grid gap-5 md:grid-cols-2">
            <article className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-7">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-700">
                <Lightbulb size={23} />
              </div>
              <h3 className="text-lg font-semibold">A simple definition</h3>
              <p className="mt-3 leading-7 text-slate-600">
                Economics studies how people and societies decide what to
                produce, how to produce it, and who will receive the goods and
                services produced.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-7">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-amber-700">
                <Scale size={23} />
              </div>
              <h3 className="text-lg font-semibold">
                Why choices are necessary
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                A person cannot always buy everything they want. A business
                cannot use the same money for every investment. A government
                cannot spend the same budget on every public service at once.
              </p>
            </article>
          </div>

          <div className="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-5 sm:p-6">
            <p className="font-semibold text-blue-950">
              Remember this principle
            </p>
            <p className="mt-2 leading-7 text-blue-900">
              Economics studies how limited resources are allocated among
              competing uses. Money is one important resource, but time,
              labour, land, equipment, and raw materials matter too.
            </p>
          </div>
        </section>

        {/* How economics works */}
        <section className="border-t border-slate-200 py-12 sm:py-16">
          <SectionHeading
            eyebrow="The decision process"
            title="How Economics Works"
            description="Economic decisions connect resources, choices, production, and the outcomes people experience."
          />

          <div className="rounded-3xl border border-slate-200 bg-white p-5 sm:p-8">
            <div className="grid gap-3 md:grid-cols-4">
              {[
                {
                  number: "01",
                  title: "Limited Resources",
                  detail: "Income, time, workers, land, and materials.",
                  color: "border-rose-200 bg-rose-50",
                  text: "text-rose-800",
                },
                {
                  number: "02",
                  title: "Choices",
                  detail: "Decide which needs or goals matter most.",
                  color: "border-amber-200 bg-amber-50",
                  text: "text-amber-800",
                },
                {
                  number: "03",
                  title: "Allocation",
                  detail: "Distribute resources among possible uses.",
                  color: "border-blue-200 bg-blue-50",
                  text: "text-blue-800",
                },
                {
                  number: "04",
                  title: "Outcomes",
                  detail: "Observe costs, benefits, and trade-offs.",
                  color: "border-emerald-200 bg-emerald-50",
                  text: "text-emerald-800",
                },
              ].map((step) => (
                <div
                  key={step.number}
                  className={`rounded-2xl border p-4 sm:p-5 ${step.color}`}
                >
                  <p className={`text-sm font-bold ${step.text}`}>
                    {step.number}
                  </p>
                  <h3 className="mt-3 font-semibold text-slate-900">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {step.detail}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-5 text-sm leading-6 text-slate-500">
              This is a simplified learning model. Real decisions may be
              repeated or changed when income, prices, or circumstances change.
            </p>
          </div>
        </section>

        {/* Main areas */}
        <section className="border-t border-slate-200 py-12 sm:py-16">
          <SectionHeading
            eyebrow="Four important concepts"
            title="The Main Areas Studied in Economics"
            description="Economics examines how goods and services are created, used, shared, and supported by decisions about scarce resources."
          />

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {mainAreas.map((area) => {
              const Icon = area.icon;
              return (
                <article
                  key={area.title}
                  className={`rounded-2xl border bg-white p-5 transition hover:-translate-y-1 hover:shadow-md ${area.border}`}
                >
                  <div
                    className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${area.color}`}
                  >
                    <Icon size={24} />
                  </div>
                  <h3 className="text-lg font-semibold">{area.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {area.description}
                  </p>
                  <div className="mt-4 rounded-xl bg-slate-50 p-3">
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Example
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-700">
                      {area.example}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* Everyday examples */}
        <section className="border-t border-slate-200 py-12 sm:py-16">
          <SectionHeading
            eyebrow="Economics around us"
            title="Examples of Economics in Everyday Life"
            description="Economic decisions happen at home, in businesses, and in agriculture."
          />

          <div className="grid gap-5 md:grid-cols-3">
            {everydayExamples.map((example) => {
              const Icon = example.icon;
              return (
                <article
                  key={example.title}
                  className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6"
                >
                  <div
                    className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${example.color}`}
                  >
                    <Icon size={24} />
                  </div>
                  <h3 className="text-lg font-semibold">{example.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">
                    {example.description}
                  </p>
                  <div className="mt-5 flex gap-2 rounded-xl bg-slate-50 p-3">
                    <CheckCircle2
                      className="mt-0.5 shrink-0 text-emerald-600"
                      size={18}
                    />
                    <p className="text-sm leading-6 text-slate-700">
                      {example.lesson}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* Example 1: Household */}
        <section
          id="real-life-examples"
          className="scroll-mt-8 border-t border-slate-200 py-12 sm:py-16"
        >
          <SectionHeading
            eyebrow="Practical example 1"
            title="Household Budget: A Salary of ₹35,000 per Month"
            description="Imagine a family of four with one earning member who receives a monthly salary of ₹35,000. The family needs to divide this income among living expenses, family needs, and savings."
          />

          <div className="mb-6 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-blue-200 bg-blue-50 p-5">
              <Home className="text-blue-700" size={24} />
              <p className="mt-3 text-sm text-blue-800">Family members</p>
              <p className="text-2xl font-bold text-blue-950">4 people</p>
            </div>
            <div className="rounded-2xl border border-violet-200 bg-violet-50 p-5">
              <Wallet className="text-violet-700" size={24} />
              <p className="mt-3 text-sm text-violet-800">Monthly income</p>
              <p className="text-2xl font-bold text-violet-950">₹35,000</p>
            </div>
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
              <PiggyBank className="text-emerald-700" size={24} />
              <p className="mt-3 text-sm text-emerald-800">Planned savings</p>
              <p className="text-2xl font-bold text-emerald-950">₹5,000</p>
            </div>
          </div>

          <MoneyTable
            title="Monthly income allocation"
            items={householdExpenses}
            total={35000}
            note="Illustrative monthly budget. Actual costs vary by family and location."
          />

          <div className="mt-5">
            <ExampleSummary title="What does this budget tell us?">
              The family allocates ₹30,000 to expenses and ₹5,000 to savings.
              Housing and groceries take the largest shares in this example.
              The allocation shows how a household prioritizes needs when its
              income is limited.
            </ExampleSummary>
          </div>
        </section>

        {/* Example 2: Clothing business */}
        <section className="border-t border-slate-200 py-12 sm:py-16">
          <SectionHeading
            eyebrow="Practical example 2"
            title="Clothing Business: Allocating ₹2,00,000 in Capital"
            description="Imagine a small clothing manufacturing business with ₹2,00,000 available to start or run production. The owner must allocate money for materials, workers, equipment, marketing, and other operating needs."
          />

          <div className="mb-6 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-violet-200 bg-violet-50 p-5">
              <Shirt className="text-violet-700" size={24} />
              <p className="mt-3 text-sm text-violet-800">Business type</p>
              <p className="text-lg font-bold text-violet-950">
                Clothing manufacturing
              </p>
            </div>
            <div className="rounded-2xl border border-blue-200 bg-blue-50 p-5">
              <Coins className="text-blue-700" size={24} />
              <p className="mt-3 text-sm text-blue-800">Available capital</p>
              <p className="text-2xl font-bold text-blue-950">₹2,00,000</p>
            </div>
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
              <PiggyBank className="text-emerald-700" size={24} />
              <p className="mt-3 text-sm text-emerald-800">Cash reserve</p>
              <p className="text-2xl font-bold text-emerald-950">₹13,000</p>
            </div>
          </div>

          <MoneyTable
            title="Business capital allocation plan"
            items={clothingExpenses}
            total={200000}
            note="The cash reserve is allocated money but is not an expense already paid."
          />

          <div className="mt-5">
            <ExampleSummary title="What does this business plan tell us?" color="violet">
              The plan assigns ₹1,87,000 to operating and production needs and
              keeps ₹13,000 as a working cash reserve. Fabric and labour take
              substantial shares because they are essential to manufacturing.
              The ₹2,00,000 represents available capital, not revenue or profit.
            </ExampleSummary>
          </div>
        </section>

        {/* Example 3: Country */}
        <section className="border-t border-slate-200 py-12 sm:py-16">
          <SectionHeading
            eyebrow="Practical example 3"
            title="India-Inspired Country Budget: An Illustrative ₹100 Crore"
            description="Consider a simplified example of a country planning a ₹100 crore public budget. The table demonstrates how funding sources and spending priorities can be organized. These are invented teaching figures, not actual Government of India budget data."
          />

          <div className="mb-6 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
              <Landmark className="text-emerald-700" size={24} />
              <p className="mt-3 text-sm text-emerald-800">Example budget</p>
              <p className="text-2xl font-bold text-emerald-950">
                ₹100 crore
              </p>
            </div>
            <div className="rounded-2xl border border-blue-200 bg-blue-50 p-5">
              <ReceiptText className="text-blue-700" size={24} />
              <p className="mt-3 text-sm text-blue-800">Tax funding</p>
              <p className="text-2xl font-bold text-blue-950">₹65 crore</p>
            </div>
            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
              <Building2 className="text-amber-700" size={24} />
              <p className="mt-3 text-sm text-amber-800">Borrowing</p>
              <p className="text-2xl font-bold text-amber-950">₹20 crore</p>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <MoneyTable
              title="Illustrative funding sources"
              items={countryIncome}
              total={100}
              unit="₹"
              suffix=" crore"
              note="Borrowing is a financing source, not tax revenue."
            />

            <MoneyTable
              title="Illustrative public spending"
              items={countryExpenses}
              total={100}
              unit="₹"
              suffix=" crore"
              note="A hypothetical allocation across public services and priorities."
            />
          </div>

          <div className="mt-5">
            <ExampleSummary title="What does this country budget tell us?" color="emerald">
              A government must choose how to allocate resources among
              infrastructure, education, healthcare, agriculture, security,
              and other needs. In this simplified example, funding sources
              total ₹100 crore and spending allocations also total ₹100 crore.
              Actual public budgets include many more categories, financial
              rules, commitments, and economic considerations.
            </ExampleSummary>
          </div>

          <p className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-950">
            <strong>Important:</strong> These numbers are fictional and are
            used only to explain economic budgeting. They do not represent
            actual Indian government receipts, expenditure, or approved
            allocations. Borrowing can also create future interest and
            repayment obligations.
          </p>
        </section>

        
{/* Example 4: Time Management */}
<section className="border-t border-slate-200 py-12 sm:py-16">
  <SectionHeading
    eyebrow="Practical example 4"
    title="Spending Money Is Not the Only Economics — Managing Time Is Too"
    description="Economics is also about allocating scarce resources, and time is one of our most limited resources. A student has only 24 hours in a day and must divide that time between studying, improving weak subjects, entertainment, sleep, and other responsibilities."
  />

  <div className="mb-6 grid gap-4 sm:grid-cols-3">
    <div className="rounded-2xl border border-blue-200 bg-blue-50 p-5">
      <Wallet className="text-blue-700" size={24} />
      <p className="mt-3 text-sm text-blue-800">Time available</p>
      <p className="text-2xl font-bold text-blue-950">24 hours</p>
    </div>

    <div className="rounded-2xl border border-violet-200 bg-violet-50 p-5">
      <GraduationCap className="text-violet-700" size={24} />
      <p className="mt-3 text-sm text-violet-800">Study and practice</p>
      <p className="text-2xl font-bold text-violet-950">7 hours</p>
    </div>

    <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
      <CheckCircle2 className="text-emerald-700" size={24} />
      <p className="mt-3 text-sm text-emerald-800">Sleep and rest</p>
      <p className="text-2xl font-bold text-emerald-950">8 hours</p>
    </div>
  </div>

  <MoneyTable
    title="Illustrative daily time allocation"
    items={[
      { name: "School or college", amount: 6, icon: GraduationCap },
      { name: "Regular study and homework", amount: 3, icon: BookOpen },
      { name: "Practising weak subjects", amount: 2, icon: Lightbulb },
      { name: "Sleep", amount: 8, icon: Home },
      { name: "Entertainment and social time", amount: 2, icon: Smartphone },
      { name: "Meals and personal care", amount: 2, icon: Utensils },
      { name: "Travel and other responsibilities", amount: 1, icon: Bus },
    ]}
    total={24}
    unit=""
    suffix=" hours"
    note="A hypothetical daily schedule. Actual routines vary by student, age, school timetable, and personal needs."
  />

  <div className="mt-5">
    <ExampleSummary title="What does this time budget teach us?" color="blue">
      A student cannot use the same hour for studying mathematics, watching
      entertainment, and sleeping. Allocating more time to one activity means
      less time is available for another. A student who struggles with a
      particular subject may choose to dedicate extra time to practising it,
      while still protecting adequate sleep, breaks, and recreation.
    </ExampleSummary>
  </div>

  <div className="mt-5 rounded-2xl border border-violet-200 bg-violet-50 p-5 sm:p-6">
    <div className="flex items-start gap-3">
      <Scale className="mt-0.5 shrink-0 text-violet-700" size={23} />
      <div>
        <h3 className="font-semibold text-violet-950">
          The economic concept: Opportunity Cost
        </h3>
        <p className="mt-2 text-sm leading-7 text-violet-900">
          Suppose a student spends an extra hour watching videos instead of
          practising mathematics. The opportunity cost is the value of the
          best alternative given up—in this case, the learning and practice
          that could have happened during that hour. The same principle applies
          when allocating money, workers, machines, or other limited resources.
        </p>
      </div>
    </div>
  </div>
</section>


        {/* What examples teach */}
        <section className="border-t border-slate-200 py-12 sm:py-16">
          <SectionHeading
            eyebrow="Key takeaways"
            title="What These Examples Teach Us"
            description="Households, businesses, and governments have different goals, but all must make choices about limited resources."
          />

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                title: "Scarcity creates choices",
                detail:
                  "A fixed salary, a limited business fund, or a public budget cannot cover every possible use without trade-offs.",
              },
              {
                title: "Every choice has a cost",
                detail:
                  "Money spent on one purpose is no longer available for another purpose. The value of the best alternative given up is called opportunity cost.",
              },
              {
                title: "Spending and saving differ",
                detail:
                  "Household income may be divided between current expenses and savings. Savings are not the same as money already spent.",
              },
              {
                title: "Budgets require priorities",
                detail:
                  "Businesses and governments must set priorities, plan resources, and consider the consequences of their decisions.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="flex gap-3 rounded-2xl border border-slate-200 bg-white p-5"
              >
                <CheckCircle2
                  className="mt-1 shrink-0 text-emerald-600"
                  size={20}
                />
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="mt-2 leading-7 text-slate-600">
                    {item.detail}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Related topics */}
       <RelatedTopics 
       title='Explore More About Economics'
       links={[
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

        <footer className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
          <p className="text-sm leading-6 text-slate-500">
            Educational note: Household and business amounts are illustrative.
            The country budget is a simplified fictional example and is not
            actual Government of India budget data.
          </p>
        </footer>
      </div>
    </main>
  );
}
