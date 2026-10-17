
import Link from "next/link";
import AdSlot from "../../../../components/AdSlot";
import RelatedTopics from "../../../../components/ContinueReading";
export const metadata = {
  title: "Price Elasticity of Demand | Formula & Examples",
  description:
    "Learn Price Elasticity of Demand, its formula, types, worked calculations, and real-life examples involving food, clothing, mobile phones, and business pricing.",
  alternates: {
    canonical:
      "https://www.pricetag.co.in/economics/basics/price-elasticity-of-demand",
  },
};

const elasticityTypes = [
  {
    title: "Perfectly Inelastic Demand",
    value: "Ed = 0",
    color: "border-rose-200 bg-rose-50",
    description:
      "Quantity demanded does not change when price changes. This is an idealized case and is uncommon in real markets.",
    example:
      "A hypothetical product that consumers must buy in exactly the same quantity regardless of price.",
  },
  {
    title: "Relatively Inelastic Demand",
    value: "Ed < 1",
    color: "border-orange-200 bg-orange-50",
    description:
      "Quantity demanded changes by a smaller percentage than price.",
    example:
      "Basic cooking salt may have relatively inelastic demand because a household usually buys a small, fairly stable quantity.",
  },
  {
    title: "Unitary Elastic Demand",
    value: "Ed = 1",
    color: "border-violet-200 bg-violet-50",
    description:
      "Quantity demanded changes by the same percentage as price.",
    example:
      "If price rises by 10% and quantity demanded falls by 10%, demand is unit elastic over that change.",
  },
  {
    title: "Relatively Elastic Demand",
    value: "Ed > 1",
    color: "border-sky-200 bg-sky-50",
    description:
      "Quantity demanded changes by a larger percentage than price.",
    example:
      "A clothing brand may face elastic demand when shoppers can easily switch to similar alternatives.",
  },
  {
    title: "Perfectly Elastic Demand",
    value: "Ed = ∞",
    color: "border-emerald-200 bg-emerald-50",
    description:
      "In the idealized model, buyers will purchase at one market price but none at a higher price.",
    example:
      "This is a theoretical model sometimes used to explain highly competitive markets, not a typical real-world observation.",
  },
];

const influencingFactors = [
  {
    title: "Availability of Substitutes",
    text: "When customers can easily switch to another product, demand is often more elastic. For example, shoppers may change clothing brands if one becomes more expensive.",
  },
  {
    title: "Necessity or Luxury",
    text: "Essential goods often have less elastic demand than optional purchases, although the response depends on the product and available alternatives.",
  },
  {
    title: "Share of Income",
    text: "A price increase for an expensive appliance may affect a household budget more than a small increase in the price of an inexpensive everyday item.",
  },
  {
    title: "Time Available to Adjust",
    text: "Demand may become more elastic over time because people can compare alternatives, change habits, or find replacement products.",
  },
  {
    title: "Definition of the Market",
    text: "Demand for a broad category may respond differently from demand for a specific brand. A customer might still buy shoes but switch away from one shoe brand.",
  },
  {
    title: "Habit and Brand Loyalty",
    text: "Strong habits or loyalty can reduce sensitivity to price, while customers with little brand attachment may respond more quickly to price changes.",
  },
];

const businessExamples = [
  {
    title: "Clothing Business",
    color: "from-pink-50 to-rose-100",
    text: "If a clothing shop raises the price of a shirt, customers may compare other shops and online sellers. Strong competition can make demand for that particular shirt more elastic.",
    takeaway: "Compare competitors before increasing prices.",
  },
  {
    title: "Everyday Groceries",
    color: "from-amber-50 to-yellow-100",
    text: "A household may continue buying a similar amount of a basic grocery after a small price rise, but it may switch brands or change quantities when the increase becomes substantial.",
    takeaway: "Necessity does not mean demand can never change.",
  },
  {
    title: "Mobile Phones",
    color: "from-blue-50 to-indigo-100",
    text: "When several phones offer similar features, a price increase may lead buyers to choose another model. Unique features or strong brand preferences can affect that response.",
    takeaway: "Product differentiation can influence price sensitivity.",
  },
];

export default function PriceElasticityOfDemandPage() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      <article className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <header className="mb-10 rounded-3xl border border-blue-100 bg-gradient-to-br from-white via-sky-50 to-blue-100 px-6 py-10 shadow-sm sm:px-10">
          <span className="mb-4 inline-flex rounded-full border border-blue-200 bg-white px-4 py-1.5 text-sm font-medium text-blue-700">
            Economics Basics
          </span>

          <h1 className="max-w-4xl bg-gradient-to-r from-blue-950 via-blue-700 to-sky-500 bg-clip-text text-4xl font-bold leading-tight text-transparent sm:text-5xl">
            Price Elasticity of Demand
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-gray-700">
            Why do some customers reduce purchases when prices rise, while
            others continue buying? Price elasticity of demand explains how
            strongly the quantity people buy responds to a change in price.
            It is useful for understanding household spending, competition,
            and business pricing decisions.
          </p>

          <div className="mt-6 flex flex-wrap gap-3 text-sm">
            <span className="rounded-xl bg-white px-4 py-2 text-blue-800 shadow-sm">
              Formula and calculation
            </span>
            <span className="rounded-xl bg-white px-4 py-2 text-indigo-800 shadow-sm">
              Five types of elasticity
            </span>
            <span className="rounded-xl bg-white px-4 py-2 text-sky-800 shadow-sm">
              Real-life examples
            </span>
          </div>
        </header>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900">
            What Is Price Elasticity of Demand?
          </h2>
          <p className="mt-3 leading-7">
            Price elasticity of demand measures the percentage change in the
            quantity demanded of a product in response to a percentage change
            in its price, assuming other relevant factors remain unchanged.
          </p>
          <p className="mt-3 leading-7">
            In simple terms, it helps explain whether customers are highly
            sensitive or relatively insensitive to a price change. The result
            depends on the product, its alternatives, customer preferences,
            and the time available to adjust.
          </p>
        </section>

        <AdSlot />

        <section className="mb-10 rounded-2xl border border-indigo-100 bg-indigo-50 p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-indigo-950">
            Price Elasticity of Demand Formula
          </h2>

          <div className="my-5 rounded-xl border border-indigo-100 bg-white p-5 text-center">
            <p className="text-lg font-semibold text-indigo-900">
              Price Elasticity of Demand (Ed)
            </p>
            <p className="mt-3 text-xl font-bold text-gray-900 sm:text-2xl">
              Ed = % Change in Quantity Demanded ÷ % Change in Price
            </p>
          </div>

          <p className="leading-7">
            For a typical downward-sloping demand curve, price and quantity
            demanded move in opposite directions. The calculated elasticity
            is therefore usually negative. Many introductory economics
            explanations report its absolute value to classify demand as
            elastic or inelastic.
          </p>

          <p className="mt-3 leading-7">
            When comparing two ordinary price-and-quantity observations,
            percentage changes can be calculated using the midpoint method.
            This uses the average of the original and new values as the
            denominator and gives the same magnitude when moving between the
            two observations in either direction.
          </p>
        </section>


<section className="mb-10 rounded-2xl border border-blue-100 bg-gradient-to-br from-white to-sky-50 p-6 sm:p-8">
  <h2 className="text-2xl font-bold text-gray-900">
    Understanding Price Elasticity Through Graphs
  </h2>

  <p className="mt-3 leading-7 text-gray-700">
    A demand curve shows how the quantity consumers want to buy changes
    when the price of a product changes, assuming other factors remain
    unchanged. Both elastic and inelastic demand curves generally slope
    downward from left to right.
  </p>

  <div className="mt-5 grid gap-4 sm:grid-cols-2">
    <div className="rounded-xl border border-blue-200 bg-white p-4">
      <h3 className="font-semibold text-blue-900">
        How to read the axes
      </h3>
      <ul className="mt-3 space-y-2 text-sm leading-6 text-gray-700">
        <li>
          <strong>Y-axis (vertical):</strong> shows price in rupees.
          Higher prices appear higher on the graph.
        </li>
        <li>
          <strong>X-axis (horizontal):</strong> shows quantity demanded
          in units. Larger quantities appear farther to the right.
        </li>
        <li>
          <strong>Price falls:</strong> move down the Y-axis and generally
          right along the demand curve as quantity demanded increases.
        </li>
        <li>
          <strong>Price rises:</strong> move up the Y-axis and generally
          left along the demand curve as quantity demanded decreases.
        </li>
      </ul>
    </div>

    <div className="rounded-xl border border-purple-200 bg-white p-4">
      <h3 className="font-semibold text-purple-900">
        How to recognise elasticity
      </h3>
      <ul className="mt-3 space-y-2 text-sm leading-6 text-gray-700">
        <li>
          <strong>Elastic demand:</strong> quantity demanded responds
          relatively strongly to a price change. It is often illustrated
          with a flatter curve.
        </li>
        <li>
          <strong>Inelastic demand:</strong> quantity demanded responds
          relatively weakly to a price change. It is often illustrated
          with a steeper curve.
        </li>
        <li>
          <strong>Perfectly inelastic demand:</strong> is represented
          by a vertical curve because quantity remains unchanged as price
          changes.
        </li>
      </ul>
    </div>
  </div>

  <div className="mt-7 grid gap-6 md:grid-cols-2">
    {/* Elastic demand graph */}
    <div className="rounded-2xl border border-sky-200 bg-white p-4 shadow-sm">
      <h3 className="text-center text-lg font-semibold text-sky-900">
        Relatively Elastic Demand
      </h3>

      <svg
        viewBox="0 0 340 280"
        role="img"
        aria-label="Illustrative relatively elastic demand curve sloping downward from left to right, with price marked from 10 to 50 rupees and quantity from 10 to 50 units."
        className="mt-3 w-full"
      >
        <defs>
          <marker
            id="elasticAxisArrow"
            markerWidth="7"
            markerHeight="7"
            refX="5"
            refY="3"
            orient="auto"
          >
            <path d="M0,0 L6,3 L0,6 Z" fill="#475569" />
          </marker>
          <marker
            id="elasticMoveArrow"
            markerWidth="7"
            markerHeight="7"
            refX="5"
            refY="3"
            orient="auto"
          >
            <path d="M0,0 L6,3 L0,6 Z" fill="#0284c7" />
          </marker>
        </defs>

        {/* Axes */}
        <line
          x1="58"
          y1="215"
          x2="58"
          y2="25"
          stroke="#475569"
          strokeWidth="2"
          markerEnd="url(#elasticAxisArrow)"
        />
        <line
          x1="58"
          y1="215"
          x2="310"
          y2="215"
          stroke="#475569"
          strokeWidth="2"
          markerEnd="url(#elasticAxisArrow)"
        />

        {/* Y-axis: price */}
        {[10, 20, 30, 40, 50].map((value, index) => {
          const y = 205 - index * 42;

          return (
            <g key={value}>
              <line
                x1="53"
                y1={y}
                x2="63"
                y2={y}
                stroke="#64748b"
              />
              <text
                x="45"
                y={y + 4}
                textAnchor="end"
                fontSize="11"
                fill="#334155"
              >
                {value}
              </text>
              <line
                x1="63"
                y1={y}
                x2="292"
                y2={y}
                stroke="#e2e8f0"
                strokeDasharray="3 4"
              />
            </g>
          );
        })}

        {/* X-axis: quantity */}
        {[10, 20, 30, 40, 50].map((value, index) => {
          const x = 80 + index * 48;

          return (
            <g key={value}>
              <line
                x1={x}
                y1="210"
                x2={x}
                y2="220"
                stroke="#64748b"
              />
              <text
                x={x}
                y="235"
                textAnchor="middle"
                fontSize="11"
                fill="#334155"
              >
                {value}
              </text>
            </g>
          );
        })}

        <text
          x="58"
          y="14"
          fontSize="12"
          fontWeight="600"
          fill="#334155"
        >
          Price (₹)
        </text>
        <text
          x="184"
          y="258"
          textAnchor="middle"
          fontSize="12"
          fontWeight="600"
          fill="#334155"
        >
          Quantity (units)
        </text>

        {/* Downward-sloping demand curve */}
        <line
          x1="80"
          y1="52"
          x2="272"
          y2="178"
          stroke="#0284c7"
          strokeWidth="4"
          strokeLinecap="round"
        />

        <text
          x="138"
          y="77"
          fontSize="11"
          fill="#0369a1"
        >
          Demand curve
        </text>

        {/* Illustrative movement along curve */}
        <line
          x1="110"
          y1="72"
          x2="174"
          y2="114"
          stroke="#0f766e"
          strokeWidth="2.5"
          strokeDasharray="5 4"
          markerEnd="url(#elasticMoveArrow)"
        />
        <circle cx="110" cy="72" r="4" fill="#0f766e" />
        <circle cx="174" cy="114" r="4" fill="#0f766e" />

        <text x="80" y="65" fontSize="10" fill="#0f766e">
          Start
        </text>
        <text x="178" y="108" fontSize="10" fill="#0f766e">
          New point
        </text>
        <text
          x="100"
          y="158"
          fontSize="10"
          fill="#0369a1"
        >
          Flatter curve
        </text>
      </svg>

      <p className="mt-2 text-sm leading-6 text-gray-600">
        When price decreases, quantity demanded responds relatively
        strongly. This can happen when consumers have many close
        substitutes or can easily switch to another product.
      </p>

      <p className="mt-3 rounded-lg bg-sky-50 p-3 text-sm leading-6 text-sky-950">
        <strong>Remember:</strong> Elastic demand means a larger
        percentage change in quantity demanded relative to the
        percentage change in price.
      </p>
    </div>

    {/* Inelastic demand graph */}
    <div className="rounded-2xl border border-orange-200 bg-white p-4 shadow-sm">
      <h3 className="text-center text-lg font-semibold text-orange-900">
        Relatively Inelastic Demand
      </h3>

      <svg
        viewBox="0 0 340 280"
        role="img"
        aria-label="Illustrative relatively inelastic demand curve sloping downward from left to right, with price marked from 10 to 50 rupees and quantity from 10 to 50 units."
        className="mt-3 w-full"
      >
        <defs>
          <marker
            id="inelasticAxisArrow"
            markerWidth="7"
            markerHeight="7"
            refX="5"
            refY="3"
            orient="auto"
          >
            <path d="M0,0 L6,3 L0,6 Z" fill="#475569" />
          </marker>
          <marker
            id="inelasticMoveArrow"
            markerWidth="7"
            markerHeight="7"
            refX="5"
            refY="3"
            orient="auto"
          >
            <path d="M0,0 L6,3 L0,6 Z" fill="#ea580c" />
          </marker>
        </defs>

        {/* Axes */}
        <line
          x1="58"
          y1="215"
          x2="58"
          y2="25"
          stroke="#475569"
          strokeWidth="2"
          markerEnd="url(#inelasticAxisArrow)"
        />
        <line
          x1="58"
          y1="215"
          x2="310"
          y2="215"
          stroke="#475569"
          strokeWidth="2"
          markerEnd="url(#inelasticAxisArrow)"
        />

        {/* Y-axis: price */}
        {[10, 20, 30, 40, 50].map((value, index) => {
          const y = 205 - index * 42;

          return (
            <g key={value}>
              <line
                x1="53"
                y1={y}
                x2="63"
                y2={y}
                stroke="#64748b"
              />
              <text
                x="45"
                y={y + 4}
                textAnchor="end"
                fontSize="11"
                fill="#334155"
              >
                {value}
              </text>
              <line
                x1="63"
                y1={y}
                x2="292"
                y2={y}
                stroke="#e2e8f0"
                strokeDasharray="3 4"
              />
            </g>
          );
        })}

        {/* X-axis: quantity */}
        {[10, 20, 30, 40, 50].map((value, index) => {
          const x = 80 + index * 48;

          return (
            <g key={value}>
              <line
                x1={x}
                y1="210"
                x2={x}
                y2="220"
                stroke="#64748b"
              />
              <text
                x={x}
                y="235"
                textAnchor="middle"
                fontSize="11"
                fill="#334155"
              >
                {value}
              </text>
            </g>
          );
        })}

        <text
          x="58"
          y="14"
          fontSize="12"
          fontWeight="600"
          fill="#334155"
        >
          Price (₹)
        </text>
        <text
          x="184"
          y="258"
          textAnchor="middle"
          fontSize="12"
          fontWeight="600"
          fill="#334155"
        >
          Quantity (units)
        </text>

        {/* Downward-sloping, steeper demand curve */}
        <line
          x1="145"
          y1="38"
          x2="190"
          y2="165"
          stroke="#ea580c"
          strokeWidth="4"
          strokeLinecap="round"
        />

        <text
          x="166"
          y="58"
          fontSize="10"
          fill="#c2410c"
        >
          Demand curve
        </text>

        {/* Illustrative movement along curve */}
        <line
          x1="157"
          y1="72"
          x2="165"
          y2="95"
          stroke="#0f766e"
          strokeWidth="2.5"
          strokeDasharray="5 4"
          markerEnd="url(#inelasticMoveArrow)"
        />
        <circle cx="157" cy="72" r="4" fill="#0f766e" />
        <circle cx="165" cy="95" r="4" fill="#0f766e" />

        <text x="105" y="67" fontSize="10" fill="#0f766e">
          Start
        </text>
        <text x="168" y="108" fontSize="10" fill="#0f766e">
          New point
        </text>
        <text
          x="76"
          y="153"
          fontSize="10"
          fill="#c2410c"
        >
          Steeper curve
        </text>
      </svg>

      <p className="mt-2 text-sm leading-6 text-gray-600">
        When price decreases, quantity demanded responds relatively
        weakly. Some essential products may show this pattern over
        certain price ranges because consumers have fewer alternatives.
      </p>

      <p className="mt-3 rounded-lg bg-orange-50 p-3 text-sm leading-6 text-orange-950">
        <strong>Remember:</strong> Inelastic demand means a smaller
        percentage change in quantity demanded relative to the
        percentage change in price.
      </p>
    </div>
  </div>

  <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-4">
    <h3 className="font-semibold text-amber-950">
      The easiest way to remember the direction
    </h3>

    <div className="mt-3 grid gap-3 sm:grid-cols-2">
      <div className="rounded-lg bg-white p-3">
        <p className="font-semibold text-gray-900">
          Price decreases
        </p>
        <p className="mt-1 text-sm leading-6 text-gray-700">
          Move down the graph and right along the demand curve:
          quantity demanded generally increases.
        </p>
      </div>

      <div className="rounded-lg bg-white p-3">
        <p className="font-semibold text-gray-900">
          Price increases
        </p>
        <p className="mt-1 text-sm leading-6 text-gray-700">
          Move up the graph and left along the demand curve:
          quantity demanded generally decreases.
        </p>
      </div>
    </div>

    <p className="mt-3 text-sm leading-6 text-amber-950">
      <strong>Important:</strong> Both curves slope downward. Ordinary
      inelastic demand is shown as relatively steep, not perfectly
      vertical. A vertical demand curve represents perfectly inelastic
      demand, where quantity does not change as price changes.
    </p>
  </div>

  <p className="mt-4 text-sm leading-6 text-gray-600">
    <strong>Economics note:</strong> These graphs are illustrative,
    and their line coordinates are not measured economic data.
    Curve steepness alone does not determine elasticity at every point:
    elasticity depends on percentage changes in price and quantity,
    and the scales used on the axes. The axis values are illustrative
    rupee prices and quantities, not a calculated dataset.
  </p>
</section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900">
            Worked Example: Calculating Elasticity
          </h2>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-blue-200 bg-blue-50 p-5">
              <p className="text-sm font-medium text-blue-700">
                Original Price
              </p>
              <p className="mt-1 text-3xl font-bold text-blue-950">₹100</p>
              <p className="mt-3 text-sm text-gray-700">
                Original quantity demanded: 200 units
              </p>
            </div>

            <div className="rounded-2xl border border-orange-200 bg-orange-50 p-5">
              <p className="text-sm font-medium text-orange-700">
                New Price
              </p>
              <p className="mt-1 text-3xl font-bold text-orange-950">₹110</p>
              <p className="mt-3 text-sm text-gray-700">
                New quantity demanded: 160 units
              </p>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-gray-200 bg-white p-6">
            <h3 className="text-lg font-semibold text-gray-900">
              Step 1: Calculate the Percentage Change in Price
            </h3>
            <p className="mt-2 leading-7">
              Using the midpoint method: (110 − 100) ÷ 105 × 100 = approximately
              9.52%.
            </p>

            <h3 className="mt-5 text-lg font-semibold text-gray-900">
              Step 2: Calculate the Percentage Change in Quantity
            </h3>
            <p className="mt-2 leading-7">
              (160 − 200) ÷ 180 × 100 = approximately −22.22%.
            </p>

            <h3 className="mt-5 text-lg font-semibold text-gray-900">
              Step 3: Calculate Elasticity
            </h3>
            <p className="mt-2 leading-7">
              Ed = −22.22% ÷ 9.52% ≈ −2.33.
            </p>

            <div className="mt-5 rounded-xl bg-emerald-50 p-4">
              <p className="font-semibold text-emerald-900">
                Interpretation: Relatively Elastic Demand
              </p>
              <p className="mt-1 text-sm leading-6 text-emerald-900">
                The absolute value is about 2.33, which is greater than 1.
                In this example, quantity demanded changed by a larger
                percentage than price. The figures are illustrative.
              </p>
            </div>
          </div>
        </section>

        <AdSlot />
        
<section className="mb-10 rounded-2xl border border-violet-100 bg-gradient-to-br from-white to-violet-50 p-6 sm:p-8">
  <h2 className="text-2xl font-bold text-gray-900">
    Three More Types of Price Elasticity
  </h2>

  <p className="mt-3 leading-7 text-gray-700">
    These three graphs complete the five main elasticity categories.
    They show the idealized shapes economists use to explain special
    cases of demand responsiveness.
  </p>

  <div className="mt-6 grid gap-5 md:grid-cols-3">
    {/* Perfectly elastic */}
    <div className="rounded-2xl border border-emerald-200 bg-white p-4 shadow-sm">
      <h3 className="text-center text-lg font-semibold text-emerald-900">
        Perfectly Elastic
      </h3>
      <p className="mt-1 text-center text-sm text-gray-600">
        Ed = ∞
      </p>

      <svg
        viewBox="0 0 280 220"
        role="img"
        aria-label="Perfectly elastic demand represented by a horizontal line."
        className="mt-3 w-full"
      >
        <line x1="45" y1="175" x2="45" y2="25" stroke="#475569" strokeWidth="2" />
        <line x1="45" y1="175" x2="260" y2="175" stroke="#475569" strokeWidth="2" />
        <path d="M45 25 l-5 9 m5 -9 l5 9 M260 175 l-9 -5 m9 5 l-9 5" stroke="#475569" strokeWidth="2" fill="none" />
        <text x="45" y="16" fontSize="11" fill="#334155">Price</text>
        <text x="145" y="205" textAnchor="middle" fontSize="11" fill="#334155">Quantity demanded</text>

        <line x1="65" y1="90" x2="240" y2="90" stroke="#059669" strokeWidth="4" strokeLinecap="round" />
        <text x="150" y="78" textAnchor="middle" fontSize="11" fill="#047857">Horizontal curve</text>
      </svg>

      <p className="mt-2 text-sm leading-6 text-gray-700">
        In this idealized case, buyers are willing to buy at one price,
        but even a small price increase above it causes demand for the
        product from that seller to fall to zero.
      </p>
    </div>

    {/* Unitary elastic */}
    <div className="rounded-2xl border border-violet-200 bg-white p-4 shadow-sm">
      <h3 className="text-center text-lg font-semibold text-violet-900">
        Unitary Elastic
      </h3>
      <p className="mt-1 text-center text-sm text-gray-600">
        |Ed| = 1
      </p>

      <svg
        viewBox="0 0 280 220"
        role="img"
        aria-label="Illustrative downward-sloping rectangular hyperbola representing unitary elastic demand."
        className="mt-3 w-full"
      >
        <line x1="45" y1="175" x2="45" y2="25" stroke="#475569" strokeWidth="2" />
        <line x1="45" y1="175" x2="260" y2="175" stroke="#475569" strokeWidth="2" />
        <path d="M45 25 l-5 9 m5 -9 l5 9 M260 175 l-9 -5 m9 5 l-9 5" stroke="#475569" strokeWidth="2" fill="none" />
        <text x="45" y="16" fontSize="11" fill="#334155">Price</text>
        <text x="145" y="205" textAnchor="middle" fontSize="11" fill="#334155">Quantity demanded</text>

        <path
          d="M70 45 C76 95, 112 130, 235 155"
          stroke="#7c3aed"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
        />
        <text x="118" y="85" fontSize="10" fill="#6d28d9">Unitary elastic</text>
      </svg>

      <p className="mt-2 text-sm leading-6 text-gray-700">
        Quantity demanded changes by the same percentage as price.
        Under the standard model, total revenue remains unchanged
        along a unitary elastic demand curve.
      </p>
    </div>

    {/* Perfectly inelastic */}
    <div className="rounded-2xl border border-rose-200 bg-white p-4 shadow-sm">
      <h3 className="text-center text-lg font-semibold text-rose-900">
        Perfectly Inelastic
      </h3>
      <p className="mt-1 text-center text-sm text-gray-600">
        Ed = 0
      </p>

      <svg
        viewBox="0 0 280 220"
        role="img"
        aria-label="Perfectly inelastic demand represented by a vertical line, indicating unchanged quantity at different prices."
        className="mt-3 w-full"
      >
        <line x1="45" y1="175" x2="45" y2="25" stroke="#475569" strokeWidth="2" />
        <line x1="45" y1="175" x2="260" y2="175" stroke="#475569" strokeWidth="2" />
        <path d="M45 25 l-5 9 m5 -9 l5 9 M260 175 l-9 -5 m9 5 l-9 5" stroke="#475569" strokeWidth="2" fill="none" />
        <text x="45" y="16" fontSize="11" fill="#334155">Price</text>
        <text x="145" y="205" textAnchor="middle" fontSize="11" fill="#334155">Quantity demanded</text>

        <line x1="145" y1="45" x2="145" y2="160" stroke="#e11d48" strokeWidth="4" strokeLinecap="round" />
        <text x="154" y="90" fontSize="10" fill="#be123c">Vertical curve</text>
        <text x="154" y="103" fontSize="10" fill="#be123c">Fixed quantity</text>
      </svg>

      <p className="mt-2 text-sm leading-6 text-gray-700">
        Quantity demanded remains the same even when price changes.
        This is an idealized case and is uncommon in ordinary markets.
      </p>
    </div>
  </div>

  <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-4">
    <p className="text-sm leading-6 text-amber-950">
      <strong>Important:</strong> These are illustrative curve shapes.
      The unitary elastic curve is conventionally shown as a rectangular
      hyperbola. Perfectly elastic and perfectly inelastic demand are
      theoretical limiting cases.
    </p>
  </div>
</section>


        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900">
            Five Types of Price Elasticity of Demand
          </h2>
          <p className="mt-3 leading-7">
            Economists classify price elasticity by comparing the percentage
            response in quantity demanded with the percentage change in price.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {elasticityTypes.map((item) => (
              <div
                key={item.title}
                className={`rounded-2xl border p-5 ${item.color}`}
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {item.title}
                  </h3>
                  <span className="rounded-lg bg-white px-3 py-1 font-semibold text-gray-800">
                    {item.value}
                  </span>
                </div>
                <p className="mt-3 leading-7 text-gray-700">
                  {item.description}
                </p>
                <p className="mt-3 text-sm leading-6 text-gray-700">
                  <strong>Example:</strong> {item.example}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10 rounded-2xl border border-sky-100 bg-gradient-to-br from-sky-50 to-white p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-gray-900">
            Why Does Price Elasticity Matter?
          </h2>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-white bg-white p-5 shadow-sm">
              <h3 className="font-semibold text-blue-900">
                For Households
              </h3>
              <p className="mt-2 leading-7">
                Elasticity helps explain why a family may switch brands,
                postpone a non-essential purchase, or keep buying a basic
                product after a price increase.
              </p>
            </div>

            <div className="rounded-xl border border-white bg-white p-5 shadow-sm">
              <h3 className="font-semibold text-indigo-900">
                For Businesses
              </h3>
              <p className="mt-2 leading-7">
                Businesses consider how customers may respond before changing
                prices. A price increase can raise revenue per unit but may
                also reduce the number of units sold.
              </p>
            </div>

            <div className="rounded-xl border border-white bg-white p-5 shadow-sm">
              <h3 className="font-semibold text-emerald-900">
                For Governments
              </h3>
              <p className="mt-2 leading-7">
                Elasticity helps analysts study how consumers may respond to
                taxes or price changes. The actual impact also depends on
                supply conditions and how markets operate.
              </p>
            </div>

            <div className="rounded-xl border border-white bg-white p-5 shadow-sm">
              <h3 className="font-semibold text-orange-900">
                For Market Planning
              </h3>
              <p className="mt-2 leading-7">
                Understanding customer sensitivity can help with pricing,
                promotions, inventory planning, and comparisons between
                competing products.
              </p>
            </div>
          </div>
        </section>

        <AdSlot />

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900">
            Real-Life Price Elasticity Examples
          </h2>

          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {businessExamples.map((item) => (
              <div
                key={item.title}
                className={`rounded-2xl border border-gray-200 bg-gradient-to-br ${item.color} p-5`}
              >
                <h3 className="text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-3 leading-7 text-gray-700">{item.text}</p>
                <div className="mt-4 rounded-xl bg-white/80 p-3 text-sm font-medium text-gray-800">
                  {item.takeaway}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900">
            Factors That Influence Price Elasticity
          </h2>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {influencingFactors.map((item, index) => (
              <div
                key={item.title}
                className="flex gap-4 rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-100 font-semibold text-blue-800">
                  {index + 1}
                </span>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 leading-7 text-gray-700">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10 rounded-2xl border border-amber-200 bg-amber-50 p-6">
          <h2 className="text-2xl font-bold text-amber-950">
            Price Elasticity and Total Revenue
          </h2>
          <p className="mt-3 leading-7 text-gray-800">
            Total revenue is the price per unit multiplied by the quantity
            sold. When demand is relatively elastic, a price decrease tends
            to increase total revenue, while a price increase tends to reduce
            it. When demand is relatively inelastic, a price increase tends
            to increase total revenue, while a price decrease tends to reduce
            it. With unit elastic demand, total revenue remains unchanged for
            a movement along the same demand curve under the standard model.
          </p>
          <p className="mt-3 leading-7 text-gray-800">
            These relationships describe the standard economic model. A real
            business should also consider costs, competitors, and whether
            customer demand changes for reasons other than price.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900">
            Common Misunderstandings
          </h2>
          <ul className="mt-4 list-disc space-y-3 pl-6 leading-7">
            <li>
              <strong>Elasticity is not the same as slope.</strong> Slope
              measures the change in quantity against the change in price
              using the units on the axes; elasticity compares percentage
              changes.
            </li>
            <li>
              <strong>Inelastic does not mean unchanged.</strong> Quantity
              demanded can still change; its percentage change is simply
              smaller than the percentage change in price.
            </li>
            <li>
              <strong>Essential goods are not always perfectly inelastic.</strong>{" "}
              Buyers can adjust quantities, change brands, or find substitutes.
            </li>
            <li>
              <strong>Elasticity can change over time.</strong> Customers may
              find more alternatives when they have longer to respond.
            </li>
            <li>
              <strong>One example does not prove a universal rule.</strong>{" "}
              Elasticity depends on the market, customer group, price range,
              and available alternatives.
            </li>
          </ul>
        </section>
        <AdSlot />

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>

          <div className="mt-5 space-y-4">
            <div className="rounded-xl border border-gray-200 p-5">
              <h3 className="font-semibold text-gray-900">
                What is the simplest meaning of price elasticity of demand?
              </h3>
              <p className="mt-2 leading-7">
                It measures how much the quantity customers buy responds, in
                percentage terms, when the price of a product changes.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 p-5">
              <h3 className="font-semibold text-gray-900">
                What does an elasticity of 2 mean?
              </h3>
              <p className="mt-2 leading-7">
                An absolute elasticity value of 2 means quantity demanded
                changes by about 2% for each 1% price change over the
                relevant range, in the opposite direction for a typical
                downward-sloping demand curve.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 p-5">
              <h3 className="font-semibold text-gray-900">
                Why is price elasticity usually negative?
              </h3>
              <p className="mt-2 leading-7">
                Under the usual law of demand, a higher price is associated
                with a lower quantity demanded, so the percentage changes
                have opposite signs. Many textbooks use the absolute value
                when classifying elasticity.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 p-5">
              <h3 className="font-semibold text-gray-900">
                Is price elasticity useful for small businesses?
              </h3>
              <p className="mt-2 leading-7">
                Yes. Small businesses can compare sales before and after
                price changes, while keeping other influences in mind, to
                understand customer sensitivity and make better pricing
                decisions.
              </p>
            </div>
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

        <p className="text-sm leading-6 text-gray-500">
          Note: Numerical values are illustrative examples for learning.
          Actual price elasticity varies by product, market, time period,
          and consumer circumstances.
        </p>
      </article>
    </main>
  );
}
