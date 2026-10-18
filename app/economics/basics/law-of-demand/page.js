
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  BarChart3,
  CheckCircle2,
  CircleHelp,
  Coffee,
  ShoppingCart,
  Smartphone,
  TrendingDown,
  Wallet,
  Lightbulb,
  BookOpen,
  Car,
} from "lucide-react";
import AdSlot from "../../../../components/AdSlot";

export const metadata = {
  title: "Law of Demand: Definition, Schedule, Curve & Examples",
  description:
    "Learn the law of demand with clear explanations, a demand schedule, demand curve, numerical examples, Indian market situations, determinants, exceptions, and movement versus shift.",
  alternates: {
    canonical:
      "https://www.pricetag.co.in/economics/basics/law-of-demand",
  },
};

const demandSchedule = [
  { price: 100, quantity: 1 },
  { price: 80, quantity: 2 },
  { price: 60, quantity: 3 },
  { price: 40, quantity: 4 },
  { price: 20, quantity: 5 },
];

const faqs = [
  {
    question: "What is the law of demand?",
    answer:
      "The law of demand states that, other things remaining equal, quantity demanded generally increases when price falls and decreases when price rises.",
  },
  {
    question: "Why does the demand curve slope downward?",
    answer:
      "A lower price can make a goods  affordable to more buyers, encourage existing buyers to purchase more, and make the goods more attractive compared with substitutes. These effects help explain the usual inverse relationship between price and quantity demanded.",
  },
  {
    question: "What is the difference between demand and quantity demanded?",
    answer:
      "Demand describes the relationship between different prices and the quantities consumers are willing and able to buy. Quantity demanded is the amount consumers want and can buy at one particular price during a given period.",
  },
  {
    question: "What is the difference between a movement and a shift in demand?",
    answer:
      "A change in the good's own price causes movement along the existing demand curve. A change in income, tastes, expectations, or the price of a related goods can shift the entire demand curve.",
  },
  {
    question: "Does the law of demand apply to every product?",
    answer:
      "It describes the usual relationship under stated assumptions, but unusual cases can occur. Some prestige goods , expectations of future price changes, or special market conditions may produce behaviour that differs from the usual pattern.",
  },
  {
    question: "Does a price reduction always increase sales?",
    answer:
      "Not necessarily. The law describes the relationship between price and quantity demanded when other relevant factors are held constant. Actual sales also depend on availability, income, competition, preferences, product quality, and other conditions.",
  },
];

export default function LawOfDemandPage() {
  return (
    <main className="space-y-12 text-gray-800">
      <section className="overflow-hidden rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-emerald-50 p-6 sm:p-10">
        <div className="grid items-center gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-3 py-1 text-sm font-bold text-blue-800">
              <BookOpen size={16} />
              Economics Basics
            </span>

            <h1 className="mt-5 text-3xl font-bold leading-tight text-gray-950 sm:text-4xl">
              Law of Demand
            </h1>

            <p className="mt-4 text-lg leading-8 text-gray-700">
              Why might you buy more mangoes when their price falls, but
              purchase fewer when they become expensive? The law of demand
              explains the usual relationship between a product's price and
              the quantity consumers are willing and able to buy.
            </p>

            <p className="mt-3 leading-7 text-gray-600">
              This principle is fundamental to understanding shopping
              decisions, business pricing, market behaviour, and how
              consumers respond to price changes.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#meaning"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-bold text-white transition hover:bg-blue-700"
              >
                Learn the law <ArrowRight size={18} />
              </a>
              <a
                href="#schedule"
                className="inline-flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-5 py-3 font-bold text-gray-800 transition hover:bg-gray-50"
              >
                View demand schedule
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-emerald-100 bg-white p-5 shadow-sm sm:p-6">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-emerald-100 p-3 text-emerald-800">
                <TrendingDown size={28} />
              </div>
              <div>
                <h2 className="font-bold text-gray-950">
                  The basic relationship
                </h2>
                <p className="text-sm text-gray-600">
                  Assuming other factors remain unchanged
                </p>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-rose-200 bg-rose-50 p-4">
                <p className="font-bold text-rose-900">Price rises</p>
                <ArrowDown className="my-2 text-rose-700" size={24} />
                <p className="text-sm leading-6 text-gray-700">
                  Quantity demanded generally falls.
                </p>
              </div>
              <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
                <p className="font-bold text-emerald-900">Price falls</p>
                <ArrowDown className="my-2 text-emerald-700" size={24} />
                <p className="text-sm leading-6 text-gray-700">
                  Quantity demanded generally rises.
                </p>
              </div>
            </div>

            <p className="mt-4 text-sm leading-6 text-gray-500">
              This is the usual inverse relationship described by the law,
              not a guarantee that every real-world price change produces the
              same result.
            </p>
          </div>
        </div>
      </section>

      <section id="meaning" className="scroll-mt-6">
        <h2 className="text-2xl font-bold text-gray-950">
          1. What Is the Law of Demand?
        </h2>

        <p className="mt-4 leading-8">
          The <strong>law of demand</strong> states that, other things
          remaining equal, quantity demanded of a goods generally increases
          when its price decreases and decreases when its price increases.
          Economists describe this as an inverse relationship between price
          and quantity demanded.
        </p>

        <p className="mt-3 leading-8">
          The phrase <strong>other things remaining equal</strong> is
          important. It means we are considering a change in the product's
          own price while assuming that other important influences—such as
          consumer income, preferences, prices of related goods , and
          expectations—remain unchanged.
        </p>

        <div className="mt-5 rounded-2xl border border-blue-200 bg-blue-50 p-5 sm:p-6">
          <h3 className="text-lg font-bold text-blue-950">
            The law in one sentence
          </h3>
          <p className="mt-3 text-lg leading-8 text-gray-800">
            When the price of a product falls, consumers generally want to
            buy more of it; when the price rises, they generally want to buy
            less, provided other relevant factors remain the same.
          </p>
        </div>

        <h3 className="mt-7 text-xl font-bold text-gray-950">
          Demand is more than just wanting a product
        </h3>
        <p className="mt-3 leading-8">
          In economics, demand means that consumers are willing and able to
          purchase a product at different prices during a specified period.
          Someone may want an expensive car, for example, but without the
          ability or willingness to pay for it, that desire does not
          necessarily count as effective market demand.
        </p>

        <div className="mt-5 grid gap-4 sm:grid-cols-3">
          <article className="rounded-2xl border border-violet-200 bg-violet-50 p-5">
            <h3 className="font-bold text-violet-950">Desire</h3>
            <p className="mt-2 text-sm leading-7 text-gray-700">
              The consumer wants the product.
            </p>
          </article>
          <article className="rounded-2xl border border-blue-200 bg-blue-50 p-5">
            <h3 className="font-bold text-blue-950">Ability to pay</h3>
            <p className="mt-2 text-sm leading-7 text-gray-700">
              The consumer has the resources to buy it.
            </p>
          </article>
          <article className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
            <h3 className="font-bold text-emerald-950">Willingness to buy</h3>
            <p className="mt-2 text-sm leading-7 text-gray-700">
              The consumer is prepared to make the purchase at the relevant
              price.
            </p>
          </article>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-950">
          2. Why Does the Law of Demand Usually Work?
        </h2>

        <p className="mt-4 leading-8">
          A price change can influence consumers in several ways. These
          explanations help us understand why a lower price often leads to
          higher quantity demanded.
        </p>

        <div className="mt-5 grid gap-4 md:grid-cols-2">
          <article className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
            <div className="inline-flex rounded-xl bg-white p-3 text-emerald-800">
              <Wallet size={25} />
            </div>
            <h3 className="mt-4 font-bold text-gray-950">
              Purchasing power
            </h3>
            <p className="mt-2 leading-7 text-gray-700">
              When a product becomes cheaper, the same budget can buy more
              units. A family with ₹200 to spend on fruit may be able to buy
              more oranges if the price per kilogram falls.
            </p>
          </article>

          <article className="rounded-2xl border border-blue-200 bg-blue-50 p-5">
            <div className="inline-flex rounded-xl bg-white p-3 text-blue-800">
              <ShoppingCart size={25} />
            </div>
            <h3 className="mt-4 font-bold text-gray-950">
              Substitution
            </h3>
            <p className="mt-2 leading-7 text-gray-700">
              If one product becomes cheaper relative to a similar product,
              consumers may switch toward it. If the price of one brand of
              detergent falls while competing brands remain expensive, some
              shoppers may choose the discounted brand.
            </p>
          </article>

          <article className="rounded-2xl border border-violet-200 bg-violet-50 p-5">
            <div className="inline-flex rounded-xl bg-white p-3 text-violet-800">
              <BarChart3 size={25} />
            </div>
            <h3 className="mt-4 font-bold text-gray-950">
              More potential buyers
            </h3>
            <p className="mt-2 leading-7 text-gray-700">
              A lower price may make a product affordable to people who
              could not justify buying it at the previous price. More
              consumers may enter the market at the lower price.
            </p>
          </article>

          <article className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
            <div className="inline-flex rounded-xl bg-white p-3 text-amber-800">
              <Lightbulb size={25} />
            </div>
            <h3 className="mt-4 font-bold text-gray-950">
              The value of additional units
            </h3>
            <p className="mt-2 leading-7 text-gray-700">
              A consumer may be willing to buy the first unit at a relatively
              high price but only buy extra units if the price is lower.
              This is one way the law connects with consumer-choice theory.
            </p>
          </article>
        </div>
      </section>

      <AdSlot />

      <section id="schedule" className="scroll-mt-6">
        <h2 className="text-2xl font-bold text-gray-950">
          3. Demand Schedule: A Numerical Example
        </h2>

        <p className="mt-4 leading-8">
          A demand schedule is a table showing the quantities a consumer is
          willing and able to buy at different prices during a given period.
          Imagine a student buying cups of a favourite drink over a day.
          The table below is hypothetical and illustrates the law of demand.
        </p>

        <div className="mt-5 overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full min-w-[440px] border-collapse text-left text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-4 font-bold">Price per cup (₹)</th>
                <th className="p-4 font-bold">Quantity demanded (cups)</th>
                <th className="p-4 font-bold">Relationship</th>
              </tr>
            </thead>
            <tbody>
              {demandSchedule.map((item, index) => (
                <tr
                  key={item.price}
                  className="border-t border-gray-200 odd:bg-white even:bg-gray-50"
                >
                  <td className="p-4 font-bold text-blue-800">
                    {item.price}
                  </td>
                  <td className="p-4 font-bold text-emerald-800">
                    {item.quantity}
                  </td>
                  <td className="p-4 text-gray-600">
                    {index === 0
                      ? "Highest listed price"
                      : index === demandSchedule.length - 1
                        ? "Lowest listed price"
                        : "Lower price, more units"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-4 leading-8">
          In this illustration, when the price falls from ₹100 to ₹20 per
          cup, quantity demanded increases from one cup to five cups. The
          example does not predict how real customers will behave; actual
          responses depend on preferences, income, alternatives, and other
          factors.
        </p>

        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-rose-200 bg-rose-50 p-5">
            <p className="font-bold text-rose-950">Price increases</p>
            <p className="mt-2 leading-7 text-gray-700">
              In the example, moving from ₹20 toward ₹100 corresponds to
              buying fewer cups.
            </p>
          </div>
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
            <p className="font-bold text-emerald-950">Price decreases</p>
            <p className="mt-2 leading-7 text-gray-700">
              Moving from ₹100 toward ₹20 corresponds to buying more cups.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-950">
          4. Demand Curve: A Visual Explanation
        </h2>

        <p className="mt-4 leading-8">
          A demand curve is a graph showing the relationship between price
          and quantity demanded. In the conventional graph, price is shown
          on the vertical axis and quantity demanded on the horizontal axis.
          The usual demand curve slopes downward from left to right.
        </p>

        <div className="mt-5 rounded-2xl border border-gray-200 bg-white p-4 sm:p-6">
          <div className="flex flex-wrap items-center gap-3 text-sm">
            <span className="inline-flex items-center gap-2 font-bold text-blue-700">
              <span className="h-3 w-3 rounded-full bg-blue-600" />
              Demand curve
            </span>
            <span className="text-gray-500">
              Illustrative data based on the schedule above
            </span>
          </div>

          <svg
            viewBox="0 0 640 390"
            role="img"
            aria-label="Demand curve sloping downward from high price and low quantity to low price and high quantity"
            className="mt-4 h-auto w-full"
          >
            <rect x="76" y="28" width="520" height="290" rx="8" fill="#f8fafc" />
            {[75, 125, 175, 225, 275].map((y) => (
              <line
                key={y}
                x1="76"
                y1={y}
                x2="596"
                y2={y}
                stroke="#e2e8f0"
              />
            ))}
            {[176, 276, 376, 476, 576].map((x) => (
              <line
                key={x}
                x1={x}
                y1="28"
                x2={x}
                y2="318"
                stroke="#e2e8f0"
              />
            ))}
            <line x1="76" y1="28" x2="76" y2="318" stroke="#475569" strokeWidth="2" />
            <line x1="76" y1="318" x2="596" y2="318" stroke="#475569" strokeWidth="2" />

            <path
              d="M 176 75 L 276 125 L 376 175 L 476 225 L 576 275"
              fill="none"
              stroke="#2563eb"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {[
              [176, 75, "A"],
              [276, 125, "B"],
              [376, 175, "C"],
              [476, 225, "D"],
              [576, 275, "E"],
            ].map(([x, y, label]) => (
              <g key={label}>
                <circle cx={x} cy={y} r="6" fill="#2563eb" />
                <text
                  x={Number(x) + 9}
                  y={Number(y) - 9}
                  fontSize="13"
                  fontWeight="bold"
                  fill="#1d4ed8"
                >
                  {label}
                </text>
              </g>
            ))}

            <text x="18" y="45" fontSize="12" fill="#334155">High</text>
            <text x="18" y="311" fontSize="12" fill="#334155">Low</text>
            <text x="76" y="340" fontSize="12" fill="#475569">Low quantity</text>
            <text x="492" y="340" fontSize="12" fill="#475569">High quantity</text>
            <text x="336" y="376" textAnchor="middle" fontSize="14" fill="#334155">
              Quantity demanded →
            </text>
            <text
              x="18"
              y="176"
              textAnchor="middle"
              transform="rotate(-90 18 176)"
              fontSize="14"
              fill="#334155"
            >
              Price (₹) →
            </text>
          </svg>

          <p className="mt-3 text-sm leading-6 text-gray-500">
            The plotted points illustrate a downward-sloping demand curve.
            The spacing is conceptual rather than a calibrated scale for a
            real product.
          </p>
        </div>

        <div className="mt-5 rounded-2xl border border-blue-200 bg-blue-50 p-5">
          <h3 className="font-bold text-blue-950">
            How to read the curve
          </h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 leading-7 text-gray-700">
            <li>Start at a point representing a particular price and quantity.</li>
            <li>Move down the curve to represent a lower price and higher quantity demanded.</li>
            <li>Move up the curve to represent a higher price and lower quantity demanded.</li>
            <li>The curve describes a relationship; it does not by itself explain every reason demand changes.</li>
          </ul>
        </div>
      </section>

      <AdSlot />

      <section>
        <h2 className="text-2xl font-bold text-gray-950">
          5. Interesting Real-Life Examples
        </h2>

        <p className="mt-4 leading-8">
          The law of demand becomes easier to understand when you connect it
          with everyday shopping decisions. The following examples are
          illustrations of the usual pattern, assuming other relevant factors
          remain unchanged.
        </p>

        <div className="mt-6 space-y-5">
          <article className="overflow-hidden rounded-2xl border border-orange-200">
            <div className="flex items-center gap-3 bg-orange-50 p-5">
              <div className="rounded-xl bg-white p-3 text-orange-800">
                <Coffee size={26} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-950">
                  Example 1: Tea at a local shop
                </h3>
                <p className="text-sm text-gray-600">
                  A small change in price may affect repeat purchases
                </p>
              </div>
            </div>
            <div className="p-5">
              <p className="leading-8">
                Imagine a student buys tea between classes. If a cup costs
                ₹20, the student may buy one cup. If the price falls to ₹12,
                the student may be more willing to buy an additional cup or
                visit more often, depending on their budget and preferences.
              </p>
              <p className="mt-3 leading-7 text-gray-700">
                <strong>Economic lesson:</strong> A lower price can make an
                extra purchase more attractive. It does not guarantee that
                every customer will buy more.
              </p>
            </div>
          </article>

          <article className="overflow-hidden rounded-2xl border border-emerald-200">
            <div className="flex items-center gap-3 bg-emerald-50 p-5">
              <div className="rounded-xl bg-white p-3 text-emerald-800">
                <ShoppingCart size={26} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-950">
                  Example 2: Mangoes during the season
                </h3>
                <p className="text-sm text-gray-600">
                  Consumers may buy more when the price becomes affordable
                </p>
              </div>
            </div>
            <div className="p-5">
              <p className="leading-8">
                During mango season, suppose a family finds that mangoes
                become cheaper at the market. The family may buy a larger
                quantity to eat at home or share with relatives. If the
                price rises, the family may buy fewer mangoes or choose
                another fruit.
              </p>
              <p className="mt-3 leading-7 text-gray-700">
                <strong>Economic lesson:</strong> Price affects the quantity
                people are willing and able to purchase, assuming their
                income, preferences, and other conditions do not change.
              </p>
            </div>
          </article>

          <article className="overflow-hidden rounded-2xl border border-violet-200">
            <div className="flex items-center gap-3 bg-violet-50 p-5">
              <div className="rounded-xl bg-white p-3 text-violet-800">
                <Smartphone size={26} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-950">
                  Example 3: Smartphones during a sale
                </h3>
                <p className="text-sm text-gray-600">
                  A discount can bring more buyers into the market
                </p>
              </div>
            </div>
            <div className="p-5">
              <p className="leading-8">
                A smartphone normally sells for ₹20,000. During a sale, its
                price falls to ₹17,000. Some shoppers who were waiting for a
                lower price may now decide to buy it. Others may consider
                upgrading sooner than planned.
              </p>
              <p className="mt-3 leading-7 text-gray-700">
                <strong>Economic lesson:</strong> A lower price can increase
                quantity demanded. But if the sale also changes consumers'
                expectations, creates publicity, or coincides with a new
                model launch, those other factors may influence the observed
                change too.
              </p>
            </div>
          </article>

          <article className="overflow-hidden rounded-2xl border border-blue-200">
            <div className="flex items-center gap-3 bg-blue-50 p-5">
              <div className="rounded-xl bg-white p-3 text-blue-800">
                <Car size={26} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-950">
                  Example 4: Car prices and buying decisions
                </h3>
                <p className="text-sm text-gray-600">
                  Large purchases also involve budgets and alternatives
                </p>
              </div>
            </div>
            <div className="p-5">
              <p className="leading-8">
                A family is considering a car but finds the original price
                beyond its budget. If the price falls or a discount reduces
                the amount payable, the family may decide to purchase. If
                the price rises, it may postpone the purchase or choose a
                less expensive model.
              </p>
              <p className="mt-3 leading-7 text-gray-700">
                <strong>Economic lesson:</strong> Price changes can affect
                the quantity demanded, but a car's financing cost, income,
                fuel expenses, and competing models also matter in actual
                buying decisions.
              </p>
            </div>
          </article>

          <article className="overflow-hidden rounded-2xl border border-amber-200">
            <div className="flex items-center gap-3 bg-amber-50 p-5">
              <div className="rounded-xl bg-white p-3 text-amber-800">
                <Wallet size={26} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-950">
                  Example 5: A limited shopping budget
                </h3>
                <p className="text-sm text-gray-600">
                  The same budget can buy different quantities at different prices
                </p>
              </div>
            </div>
            <div className="p-5">
              <p className="leading-8">
                Suppose you have ₹100 for notebooks. At ₹25 each, you can
                afford four notebooks. At ₹20 each, the same ₹100 could buy
                five. This shows how a lower price increases the quantity
                you can afford, although how many you actually want to buy
                depends on your needs.
              </p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl bg-amber-50 p-4">
                  <p className="font-bold text-amber-950">₹25 per notebook</p>
                  <p className="mt-1 text-sm text-gray-700">
                    ₹100 buys at most 4 notebooks.
                  </p>
                </div>
                <div className="rounded-xl bg-emerald-50 p-4">
                  <p className="font-bold text-emerald-950">₹20 per notebook</p>
                  <p className="mt-1 text-sm text-gray-700">
                    ₹100 buys at most 5 notebooks.
                  </p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-950">
          6. Movement Along the Demand Curve vs. Shift in Demand
        </h2>

        <p className="mt-4 leading-8">
          This distinction is important in economics examinations and in
          analysing real markets. A change in the product's own price
          generally causes a movement along the existing demand curve. A
          change in another factor that influences demand can shift the
          entire curve.
        </p>

        <div className="mt-5 grid gap-4 md:grid-cols-2">
          <article className="rounded-2xl border border-blue-200 bg-blue-50 p-5">
            <h3 className="text-lg font-bold text-blue-950">
              Movement along the curve
            </h3>
            <p className="mt-3 leading-7 text-gray-700">
              If the price of a product falls and consumers buy more of it,
              this is called an extension of demand. If its price rises and
              consumers buy less, it is called a contraction of demand.
            </p>
            <div className="mt-4 rounded-xl bg-white p-4">
              <p className="font-bold text-gray-950">Example</p>
              <p className="mt-1 text-sm leading-6 text-gray-700">
                The price of a notebook falls from ₹25 to ₹20, and the
                consumer buys more notebooks.
              </p>
            </div>
          </article>

          <article className="rounded-2xl border border-violet-200 bg-violet-50 p-5">
            <h3 className="text-lg font-bold text-violet-950">
              Shift of the demand curve
            </h3>
            <p className="mt-3 leading-7 text-gray-700">
              Demand can increase or decrease when factors other than the
              product's own price change. The entire demand curve moves
              right or left.
            </p>
            <div className="mt-4 rounded-xl bg-white p-4">
              <p className="font-bold text-gray-950">Example</p>
              <p className="mt-1 text-sm leading-6 text-gray-700">
                A consumer's income rises and they decide to buy more of a
                normal goods at every price.
              </p>
            </div>
          </article>
        </div>

        <div className="mt-5 overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full min-w-[520px] border-collapse text-left text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-4 font-bold">Situation</th>
                <th className="p-4 font-bold">Type of change</th>
                <th className="p-4 font-bold">What happens?</th>
              </tr>
            </thead>
            <tbody>
              {[
                [
                  "The product's own price falls",
                  "Extension of demand",
                  "Movement down the existing curve",
                ],
                [
                  "The product's own price rises",
                  "Contraction of demand",
                  "Movement up the existing curve",
                ],
                [
                  "Demand rises because of income or tastes",
                  "Increase in demand",
                  "Curve shifts to the right",
                ],
                [
                  "Demand falls because preferences change",
                  "Decrease in demand",
                  "Curve shifts to the left",
                ],
              ].map((row) => (
                <tr key={row[0]} className="border-t border-gray-200">
                  {row.map((cell, index) => (
                    <td
                      key={cell}
                      className={`p-4 leading-6 ${
                        index === 1
                          ? "font-bold text-blue-800"
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

        <div className="mt-5 rounded-2xl border border-amber-200 bg-amber-50 p-5">
          <h3 className="font-bold text-amber-950">
            A common mistake to avoid
          </h3>
          <p className="mt-2 leading-7 text-gray-700">
            Do not say that a lower price always shifts the demand curve to
            the right. A change in the good's own price causes movement
            along its demand curve. A shift occurs when another determinant
            of demand changes.
          </p>
        </div>
      </section>

      <AdSlot />

      <section>
        <h2 className="text-2xl font-bold text-gray-950">
          7. Factors That Can Shift Demand
        </h2>

        <p className="mt-4 leading-8">
          The law of demand studies the effect of a product's own price while
          other factors are held constant. In real markets, these other
          factors can change and shift the demand curve.
        </p>

        <div className="mt-5 space-y-4">
          {[
            {
              title: "Consumer income",
              detail:
                "For many normal goods , higher income increases demand. For some inferior goods , demand can fall as income rises.",
              color: "border-blue-200 bg-blue-50",
            },
            {
              title: "Prices of related goods ",
              detail:
                "If the price of tea rises, some consumers may switch to coffee if they consider the two substitutes. If the price of printers rises, demand for compatible ink cartridges may also be affected because the products are complements.",
              color: "border-violet-200 bg-violet-50",
            },
            {
              title: "Tastes and preferences",
              detail:
                "Advertising, trends, changing habits, or new information can make consumers more or less interested in a product.",
              color: "border-pink-200 bg-pink-50",
            },
            {
              title: "Expectations",
              detail:
                "If consumers expect a price increase or shortage in the future, they may bring purchases forward. Expectations can also work in the opposite direction.",
              color: "border-amber-200 bg-amber-50",
            },
            {
              title: "Number of buyers",
              detail:
                "If more consumers enter a market, total market demand may rise. If the number of buyers falls, market demand may decline.",
              color: "border-emerald-200 bg-emerald-50",
            },
          ].map((item) => (
            <article
              key={item.title}
              className={`rounded-2xl border p-5 ${item.color}`}
            >
              <h3 className="font-bold text-gray-950">{item.title}</h3>
              <p className="mt-2 leading-7 text-gray-700">{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-950">
          8. Assumptions of the Law of Demand
        </h2>

        <p className="mt-4 leading-8">
          The law is normally stated with the condition “other things
          remaining equal.” This helps isolate the relationship between
          price and quantity demanded.
        </p>

        <div className="mt-5 space-y-3">
          {[
            "Consumer income remains unchanged.",
            "Consumer tastes and preferences remain unchanged.",
            "Prices of related goods  remain unchanged.",
            "Consumer expectations about future prices and availability remain unchanged.",
            "The number of buyers and other relevant market conditions remain unchanged.",
          ].map((item) => (
            <div
              key={item}
              className="flex items-start gap-3 rounded-xl border border-gray-200 bg-white p-4"
            >
              <CheckCircle2
                size={21}
                className="mt-1 shrink-0 text-emerald-600"
              />
              <p className="leading-7 text-gray-700">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-950">
          9. Exceptions and Special Cases
        </h2>

        <p className="mt-4 leading-8">
          The law of demand describes the usual pattern, but economists also
          study special cases where observed behaviour may differ. Some
          apparent exceptions occur because other factors change at the same
          time, while a few theoretical cases can produce an unusual
          relationship between price and quantity demanded.
        </p>

        <div className="mt-5 grid gap-4 md:grid-cols-2">
          <article className="rounded-2xl border border-rose-200 bg-rose-50 p-5">
            <h3 className="font-bold text-rose-950">
              Giffen goods 
            </h3>
            <p className="mt-2 leading-7 text-gray-700">
              In a special theoretical case involving a strongly inferior
              staple goods and a tight household budget, a price increase can
              lead some consumers to buy more of that staple because the
              loss of purchasing power changes what they can afford. Genuine
              Giffen behaviour is unusual and requires specific conditions.
            </p>
          </article>

          <article className="rounded-2xl border border-violet-200 bg-violet-50 p-5">
            <h3 className="font-bold text-violet-950">
              Prestige or status goods 
            </h3>
            <p className="mt-2 leading-7 text-gray-700">
              Some buyers may associate a very high price with exclusivity
              or status. However, expensive luxury goods  do not automatically
              violate the law of demand; an unusual relationship must be
              established rather than assumed.
            </p>
          </article>

          <article className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
            <h3 className="font-bold text-amber-950">
              Expectations of future price changes
            </h3>
            <p className="mt-2 leading-7 text-gray-700">
              If buyers expect a product to become more expensive soon, they
              may purchase more now even while its current price is rising.
              Expectations have changed, so this is not a clean test of the
              law with other factors held constant.
            </p>
          </article>

          <article className="rounded-2xl border border-blue-200 bg-blue-50 p-5">
            <h3 className="font-bold text-blue-950">
              Essential goods 
            </h3>
            <p className="mt-2 leading-7 text-gray-700">
              Consumers may have limited ability to reduce purchases of
              essential goods  when prices rise. This often means demand is
              relatively inelastic, not necessarily that the law of demand
              is violated.
            </p>
          </article>
        </div>

        <div className="mt-5 rounded-2xl border border-gray-200 bg-gray-50 p-5">
          <p className="font-bold text-gray-950">
            Important distinction
          </p>
          <p className="mt-2 leading-7 text-gray-700">
            A product being expensive, essential, or fashionable is not by
            itself proof of an exception. Economists must distinguish a
            genuine change in the price–quantity relationship from changes
            in income, expectations, tastes, and other demand determinants.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-950">
          10. Why the Law of Demand Matters
        </h2>

        <div className="mt-5 grid gap-4 md:grid-cols-3">
          <article className="rounded-2xl border border-blue-200 bg-blue-50 p-5">
            <h3 className="font-bold text-blue-950">For consumers</h3>
            <p className="mt-2 text-sm leading-7 text-gray-700">
              Helps explain how prices affect shopping decisions and why
              consumers compare alternatives.
            </p>
          </article>
          <article className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
            <h3 className="font-bold text-emerald-950">For businesses</h3>
            <p className="mt-2 text-sm leading-7 text-gray-700">
              Helps businesses think about pricing, promotions, customer
              response, and the possible effects of a price change.
            </p>
          </article>
          <article className="rounded-2xl border border-violet-200 bg-violet-50 p-5">
            <h3 className="font-bold text-violet-950">For public policy</h3>
            <p className="mt-2 text-sm leading-7 text-gray-700">
              Helps economists analyse taxes, subsidies, price changes, and
              how consumers may respond to market policies.
            </p>
          </article>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-950">
          Frequently Asked Questions
        </h2>

        <div className="mt-5 space-y-4">
          {faqs.map((faq, index) => (
            <article
              key={faq.question}
              className="rounded-2xl border border-gray-200 bg-white p-5"
            >
              <h3 className="flex items-start gap-3 font-bold text-gray-950">
                <CircleHelp
                  size={20}
                  className="mt-1 shrink-0 text-blue-600"
                />
                <span>
                  {index + 1}. {faq.question}
                </span>
              </h3>
              <p className="mt-3 leading-7 text-gray-700">{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6 sm:p-7">
        <div className="flex items-start gap-3">
          <div className="rounded-xl bg-white p-3 text-emerald-700">
            <CheckCircle2 size={25} />
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-950">
              Key Takeaway
            </h2>
            <p className="mt-3 leading-8 text-gray-700">
              The law of demand describes the usual inverse relationship
              between a product's price and the quantity consumers demand,
              assuming other relevant factors remain unchanged. A demand
              schedule shows the relationship in a table, while a demand
              curve shows it graphically. Always distinguish movement along
              a curve caused by the product's own price from a shift caused
              by other changes in the market.
            </p>
          </div>
        </div>
      </section>

    </main>
  );
}
