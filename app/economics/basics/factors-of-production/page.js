
import Link from "next/link";
import {
  BookOpen,
  Sprout,
  Users,
  Factory,
  BriefcaseBusiness,
  ArrowDown,
  ArrowRight,
  CheckCircle2,
  Lightbulb,
  TrendingUp,
  TrendingDown,
  ShoppingCart,
  Wheat,
  CircleHelp,
  Wallet,
  Gauge,
  Target,
  Boxes,
  Zap,
  Droplets,
  Wrench,
  ChartNoAxesCombined,
} from "lucide-react";
import AdSlot from "../../../../components/AdSlot";

export const metadata = {
  title:
    "Factors of Production: Meaning, Examples, Supply & Price Effects",
  description:
    "Learn the four factors of production with practical examples, responsive diagrams, resource utilisation, production costs, supply, demand and market prices.",
  alternates: {
    canonical:
      "https://www.pricetag.co.in/economics/basics/factors-of-production",
  },
};

const factors = [
  {
    number: "01",
    title: "Land",
    subtitle: "Natural Resources Used In Production",
    icon: Sprout,
    color: "border-emerald-200 bg-emerald-50",
    iconColor: "text-emerald-700",
    meaning:
      "In economics, land includes natural resources used to produce goods and services. It means more than the physical ground on which a business operates. It includes soil, water, minerals, forests, sunlight and other resources provided by nature.",
    example:
      "A wheat farmer in Punjab depends on fertile soil, irrigation water, suitable weather and agricultural land. Even with enough workers and tractors, a drought can reduce the harvest.",
    utilisation:
      "Use suitable land for the right purpose, maintain soil fertility, manage irrigation, prevent avoidable waste and protect resources that are difficult to replace.",
    supply:
      "Fertile soil, reliable water and favourable growing conditions can increase agricultural output. Drought, floods, soil degradation and resource shortages can reduce supply.",
    cost:
      "Higher land rent, water charges or raw-material costs can increase production expenses. Scarce commercial land may also make shops, warehouses and factories more expensive to operate.",
    limitation:
      "Businesses cannot instantly create more fertile farmland or control the weather. They can improve productivity, but natural resources still impose limits.",
    reward: "Rent Is The Traditional Textbook Association",
  },
  {
    number: "02",
    title: "Labour",
    subtitle: "Human Effort, Skills And Knowledge",
    icon: Users,
    color: "border-blue-200 bg-blue-50",
    iconColor: "text-blue-700",
    meaning:
      "Labour is the physical and mental effort people contribute to production. It includes farmers, machine operators, engineers, teachers, drivers, designers and customer-service workers.",
    example:
      "A bakery needs people to prepare dough, operate ovens, maintain hygiene, pack bread and deliver orders. Skilled workers can reduce mistakes and improve product consistency.",
    utilisation:
      "Provide training, suitable working conditions, clear responsibilities and efficient schedules. Match employees' skills to the tasks they perform.",
    supply:
      "More available workers or higher productivity can increase output. A shortage of skilled workers, absenteeism or poor training can restrict production.",
    cost:
      "Wages and benefits contribute to labour costs. Higher wages do not always mean higher costs per item: if productivity improves enough, labour cost per unit may stay stable or fall.",
    limitation:
      "Adding workers alone may not increase output if the business lacks machines, raw materials, workspace or customer orders.",
    reward: "Wages Or Salary",
  },
  {
    number: "03",
    title: "Capital",
    subtitle: "Tools, Machinery And Productive Equipment",
    icon: Factory,
    color: "border-violet-200 bg-violet-50",
    iconColor: "text-violet-700",
    meaning:
      "Capital, in the traditional production model, includes human-made productive assets such as machinery, tools, ovens, computers, factory equipment and delivery vehicles. Financial capital means money or financing available to a business; it is related but not identical to physical capital.",
    example:
      "A bakery replaces a small oven with a suitable commercial oven. It may now bake more bread per hour. A dairy business can use refrigeration to reduce spoilage and safely serve more shops.",
    utilisation:
      "Choose appropriate equipment, maintain it, train workers, schedule its use and avoid leaving expensive machinery idle when it could be productive.",
    supply:
      "Better equipment and technology can increase output, improve consistency, reduce waste and allow firms to supply more at a given price.",
    cost:
      "Machines require investment, maintenance and electricity. They may reduce cost per item when the extra output and savings outweigh these expenses.",
    limitation:
      "Buying machinery does not guarantee success. A business still needs workers, materials, suitable premises, customers and sufficient sales to justify its investment.",
    reward: "Interest Is The Traditional Textbook Association",
  },
  {
    number: "04",
    title: "Entrepreneurship",
    subtitle: "Organisation, Innovation And Risk-Taking",
    icon: BriefcaseBusiness,
    color: "border-amber-200 bg-amber-50",
    iconColor: "text-amber-700",
    meaning:
      "Entrepreneurship involves identifying opportunities, organising land, labour and capital, making production and pricing decisions, introducing improvements and bearing business risk.",
    example:
      "An entrepreneur notices demand for affordable fresh bread near a college. The owner selects a location, hires bakers, purchases equipment, estimates demand, sets prices and decides how much bread to produce.",
    utilisation:
      "Forecast demand, compare suppliers, plan production, monitor inventory, maintain quality and adjust operations when customer preferences change.",
    supply:
      "Good planning can reduce waste, improve capacity utilisation and help a business respond to orders. Poor planning can leave resources idle or create shortages of popular products.",
    cost:
      "Better decisions may reduce costs and improve profitability. Poor purchasing, excessive borrowing or producing more than customers buy can cause losses.",
    limitation:
      "An entrepreneur cannot control every condition. Weather, energy prices, competition, regulations and changing customer incomes can still affect results.",
    reward: "Profit If Earned; Losses Are Also Possible",
  },
];

const marketExamples = [
  {
    title: "A Strong Wheat Harvest",
    icon: Wheat,
    label: "Supply May Increase",
    color: "border-emerald-200 bg-emerald-50",
    steps: [
      "Favourable weather and suitable irrigation improve crop output.",
      "More wheat reaches markets and flour mills.",
      "If demand remains unchanged, greater availability can ease upward pressure on wheat prices.",
      "Cheaper flour may reduce bakery costs, but bread prices also depend on wages, energy, rent, competition and demand.",
    ],
  },
  {
    title: "A Bakery Installs A Faster Oven",
    icon: Zap,
    label: "Capacity May Increase",
    color: "border-violet-200 bg-violet-50",
    steps: [
      "Capital investment increases the bakery's possible output per hour.",
      "Trained workers and sufficient ingredients allow the oven to be used effectively.",
      "The bakery may supply more bread without a proportional increase in labour hours.",
      "The owner may lower prices, maintain prices and improve margins, or use the extra capacity to meet unmet demand.",
    ],
  },
  {
    title: "The Price Of Flour Rises",
    icon: Wallet,
    label: "Costs May Rise",
    color: "border-rose-200 bg-rose-50",
    steps: [
      "Flour becomes more expensive for bakeries.",
      "The cost of producing each loaf may increase.",
      "Some bakeries may raise prices, accept lower margins, or adjust production.",
      "The final outcome depends on customer response, competition and other production costs.",
    ],
  },
  {
    title: "Demand Rises Near A College",
    icon: ShoppingCart,
    label: "Demand Shifts",
    color: "border-blue-200 bg-blue-50",
    steps: [
      "More students begin buying bread and snacks.",
      "At the current price, customers may want more than local bakeries can supply.",
      "Businesses may extend shifts, use equipment more fully or invest in additional capacity.",
      "Prices may rise in the short run; expanding supply can ease some of that pressure later.",
    ],
  },
];

const faqs = [
  {
    question: "What Are The Four Factors Of Production?",
    answer:
      "The traditional four factors are land, labour, capital and entrepreneurship. They represent natural resources, human effort, produced productive assets, and the organisation and risk-taking that bring resources together.",
  },
  {
    question: "How Do Factors Of Production Affect Supply?",
    answer:
      "Their availability, quality, cost and productivity affect how much firms can produce profitably. Better technology, skilled labour and reliable raw materials can increase supply. Shortages and rising input costs can reduce it.",
  },
  {
    question: "Do Factors Of Production Directly Determine Market Price?",
    answer:
      "No single factor determines the final market price. The factors influence productive capacity and costs, which affect supply decisions. Price also depends on demand, competition, taxes, expectations and market structure.",
  },
  {
    question: "If Supply Increases, Does Demand Also Increase?",
    answer:
      "Not necessarily. With demand unchanged, an increase in supply generally lowers the equilibrium price and increases the equilibrium quantity. The lower price can lead to a higher quantity demanded along the same demand curve; this is not the same as demand itself increasing.",
  },
  {
    question: "Is Money The Same As Capital In Economics?",
    answer:
      "Not exactly. Financial capital is money or financing available to a business. Physical capital refers to produced assets such as machinery, tools and equipment used in production.",
  },
  {
    question: "Can Higher Wages Reduce Production Costs?",
    answer:
      "Higher wages increase the cost of employing a worker, all else equal. However, if workers become sufficiently more productive, labour cost per unit of output may remain stable or even fall.",
  },
];

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mb-5">
      {eyebrow && (
        <p className="mb-2 text-sm font-bold uppercase tracking-wide text-blue-700">
          {eyebrow}
        </p>
      )}
      <h2 className="text-2xl font-bold leading-tight text-gray-950 sm:text-3xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 max-w-4xl leading-7 text-gray-600">
          {description}
        </p>
      )}
    </div>
  );
}

function ResourceFlowDiagram() {
  const resourceCards = [
    {
      title: "Land",
      description: "Natural Resources And Raw Materials",
      icon: Sprout,
      color: "border-emerald-200 bg-emerald-50 text-emerald-800",
    },
    {
      title: "Labour",
      description: "Human Effort, Skills And Knowledge",
      icon: Users,
      color: "border-blue-200 bg-blue-50 text-blue-800",
    },
    {
      title: "Capital",
      description: "Machines, Tools And Equipment",
      icon: Factory,
      color: "border-violet-200 bg-violet-50 text-violet-800",
    },
    {
      title: "Entrepreneurship",
      description: "Organisation, Innovation And Decisions",
      icon: BriefcaseBusiness,
      color: "border-amber-200 bg-amber-50 text-amber-800",
    },
  ];

  return (
    <div className="rounded-2xl border border-gray-200 bg-gray-50 p-3 sm:p-6">
      <div className="grid min-w-0 grid-cols-1 gap-3 sm:grid-cols-2">
        {resourceCards.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className={`flex min-w-0 items-start gap-3 rounded-xl border p-4 ${item.color}`}
            >
              <div className="shrink-0 rounded-lg bg-white p-2">
                <Icon size={23} />
              </div>
              <div className="min-w-0">
                <h3 className="break-words font-bold text-gray-950">
                  {item.title}
                </h3>
                <p className="mt-1 break-words text-sm leading-6 text-gray-700">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex justify-center py-4">
        <ArrowDown size={26} className="text-gray-500" />
      </div>

      <div className="rounded-xl border border-gray-300 bg-white p-4 text-center sm:p-5">
        <Boxes className="mx-auto mb-2 text-gray-700" size={28} />
        <h3 className="font-bold text-gray-950">
          Production And Resource Utilisation
        </h3>
        <p className="mx-auto mt-2 max-w-2xl text-sm leading-6 text-gray-600">
          The way resources are combined affects productive capacity, output,
          waste, quality and cost per unit.
        </p>
      </div>

      <div className="flex justify-center py-4">
        <ArrowDown size={26} className="text-gray-500" />
      </div>

      <div className="grid min-w-0 grid-cols-1 gap-3 sm:grid-cols-2">
        <div className="min-w-0 rounded-xl border border-emerald-200 bg-emerald-50 p-4">
          <TrendingUp className="mb-2 text-emerald-700" size={25} />
          <h3 className="font-bold text-gray-950">
            Supply And Production Costs
          </h3>
          <p className="mt-2 text-sm leading-6 text-gray-700">
            Capacity, productivity and input costs influence how much firms
            are willing and able to supply.
          </p>
        </div>
        <div className="min-w-0 rounded-xl border border-blue-200 bg-blue-50 p-4">
          <ShoppingCart className="mb-2 text-blue-700" size={25} />
          <h3 className="font-bold text-gray-950">Consumer Demand</h3>
          <p className="mt-2 text-sm leading-6 text-gray-700">
            Income, preferences, substitutes and willingness to pay influence
            how much consumers want to buy.
          </p>
        </div>
      </div>

      <div className="flex justify-center py-4">
        <ArrowDown size={26} className="text-gray-500" />
      </div>

      <div className="rounded-xl bg-gray-900 p-5 text-center text-white">
        <Target className="mx-auto mb-2" size={28} />
        <h3 className="text-lg font-bold">Market Price And Quantity</h3>
        <p className="mx-auto mt-2 max-w-2xl text-sm leading-6 text-gray-200">
          Supply and demand interact to determine market equilibrium. The
          factors of production influence this process but do not determine
          price on their own.
        </p>
      </div>
    </div>
  );
}

function SupplyDemandDiagram() {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white p-3 sm:p-5">
      <div className="mb-4 flex flex-wrap gap-x-4 gap-y-2 text-xs sm:text-sm">
        <span className="inline-flex items-center gap-2">
          <span className="h-1 w-5 shrink-0 rounded bg-blue-600" />
          Demand
        </span>
        <span className="inline-flex items-center gap-2">
          <span className="h-1 w-5 shrink-0 rounded bg-emerald-600" />
          Original Supply
        </span>
        <span className="inline-flex items-center gap-2">
          <span className="h-1 w-5 shrink-0 rounded bg-amber-500" />
          Increased Supply
        </span>
      </div>

      {/* Mobile Diagram: Larger Labels And A Compact ViewBox */}
      <div className="sm:hidden">
        <svg
          viewBox="0 0 340 300"
          role="img"
          aria-label="Mobile supply and demand diagram. When supply increases and demand stays unchanged, equilibrium price falls and equilibrium quantity rises."
          className="block h-auto w-full"
        >
          <line
            x1="45"
            y1="240"
            x2="318"
            y2="240"
            stroke="#374151"
            strokeWidth="1.8"
          />
          <line
            x1="45"
            y1="240"
            x2="45"
            y2="25"
            stroke="#374151"
            strokeWidth="1.8"
          />

          <text x="7" y="23" fontSize="11" fill="#111827">
            Price
          </text>
          <text x="202" y="278" fontSize="11" fill="#111827">
            Quantity
          </text>

          <path
            d="M65 42 L285 218"
            fill="none"
            stroke="#2563eb"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M65 218 L285 65"
            fill="none"
            stroke="#059669"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M65 250 L285 97"
            fill="none"
            stroke="#f59e0b"
            strokeWidth="3"
            strokeLinecap="round"
          />

          <circle cx="186" cy="139" r="4.5" fill="#059669" />
          <circle cx="213" cy="154" r="4.5" fill="#f59e0b" />

          <line
            x1="186"
            y1="139"
            x2="186"
            y2="240"
            stroke="#9ca3af"
            strokeDasharray="4 4"
          />
          <line
            x1="45"
            y1="139"
            x2="186"
            y2="139"
            stroke="#9ca3af"
            strokeDasharray="4 4"
          />
          <line
            x1="213"
            y1="154"
            x2="213"
            y2="240"
            stroke="#9ca3af"
            strokeDasharray="4 4"
          />
          <line
            x1="45"
            y1="154"
            x2="213"
            y2="154"
            stroke="#9ca3af"
            strokeDasharray="4 4"
          />

          <text x="193" y="130" fontSize="10" fill="#047857">
            E1
          </text>
          <text x="220" y="149" fontSize="10" fill="#b45309">
            E2
          </text>
          <text x="289" y="221" fontSize="11" fill="#1d4ed8">
            D
          </text>
          <text x="289" y="64" fontSize="11" fill="#047857">
            S1
          </text>
          <text x="289" y="98" fontSize="11" fill="#b45309">
            S2
          </text>
          <text x="20" y="143" fontSize="10" fill="#374151">
            P1
          </text>
          <text x="20" y="158" fontSize="10" fill="#374151">
            P2
          </text>
          <text x="178" y="256" fontSize="10" fill="#374151">
            Q1
          </text>
          <text x="207" y="256" fontSize="10" fill="#374151">
            Q2
          </text>
        </svg>
      </div>

      {/* Desktop Diagram: More Space For Labels */}
      <div className="hidden sm:block">
        <svg
          viewBox="0 0 620 370"
          role="img"
          aria-label="Desktop supply and demand graph showing a rightward supply shift. With demand unchanged, equilibrium price falls and equilibrium quantity rises."
          className="block h-auto w-full"
        >
          <line
            x1="70"
            y1="300"
            x2="570"
            y2="300"
            stroke="#374151"
            strokeWidth="2"
          />
          <line
            x1="70"
            y1="300"
            x2="70"
            y2="30"
            stroke="#374151"
            strokeWidth="2"
          />

          <text x="18" y="32" fontSize="14" fill="#111827">
            Price
          </text>
          <text x="405" y="345" fontSize="14" fill="#111827">
            Quantity Traded
          </text>

          <path
            d="M110 48 L500 270"
            fill="none"
            stroke="#2563eb"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path
            d="M110 270 L500 75"
            fill="none"
            stroke="#059669"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path
            d="M110 320 L500 125"
            fill="none"
            stroke="#f59e0b"
            strokeWidth="4"
            strokeLinecap="round"
          />

          <circle cx="286" cy="148" r="5.5" fill="#059669" />
          <circle cx="324" cy="177" r="5.5" fill="#f59e0b" />

          <line
            x1="286"
            y1="148"
            x2="286"
            y2="300"
            stroke="#9ca3af"
            strokeDasharray="5 5"
          />
          <line
            x1="70"
            y1="148"
            x2="286"
            y2="148"
            stroke="#9ca3af"
            strokeDasharray="5 5"
          />
          <line
            x1="324"
            y1="177"
            x2="324"
            y2="300"
            stroke="#9ca3af"
            strokeDasharray="5 5"
          />
          <line
            x1="70"
            y1="177"
            x2="324"
            y2="177"
            stroke="#9ca3af"
            strokeDasharray="5 5"
          />

          <text x="296" y="140" fontSize="12" fill="#047857">
            E1
          </text>
          <text x="334" y="170" fontSize="12" fill="#b45309">
            E2
          </text>
          <text x="510" y="275" fontSize="13" fill="#1d4ed8">
            D
          </text>
          <text x="510" y="75" fontSize="13" fill="#047857">
            S1
          </text>
          <text x="510" y="125" fontSize="13" fill="#b45309">
            S2
          </text>
          <text x="43" y="152" fontSize="12" fill="#374151">
            P1
          </text>
          <text x="43" y="181" fontSize="12" fill="#374151">
            P2
          </text>
          <text x="277" y="320" fontSize="12" fill="#374151">
            Q1
          </text>
          <text x="316" y="320" fontSize="12" fill="#374151">
            Q2
          </text>
        </svg>
      </div>

      <div className="mt-3 rounded-xl bg-amber-50 p-4">
        <h3 className="font-bold text-gray-950">How To Read The Diagram</h3>
        <p className="mt-2 text-sm leading-6 text-gray-700">
          S1 is the original supply curve and S2 represents increased supply.
          D is demand. E1 and E2 show the old and new equilibrium points. If
          demand remains unchanged, the new equilibrium typically has a lower
          price and a higher quantity. This is an illustrative diagram, not
          measured market data.
        </p>
      </div>
    </div>
  );
}

function ResponsiveComparison() {
  const rows = [
    {
      change: "Better Harvest Or Raw-Material Access",
      supply: "Supply Can Increase As More Inputs Become Available.",
      price: "Price Pressure May Ease If Demand Is Unchanged.",
    },
    {
      change: "More Productive Machinery",
      supply: "Output Per Hour May Rise And Unit Costs May Fall.",
      price: "Price May Fall, Stay Stable Or Rise Less Than Otherwise.",
    },
    {
      change: "Shortage Of Skilled Labour",
      supply: "Production May Slow Or Capacity May Be Underused.",
      price: "Costs And Upward Price Pressure May Increase.",
    },
    {
      change: "Higher Rent, Energy Or Input Costs",
      supply: "Firms May Supply Less At Each Price.",
      price: "Price May Rise If Demand And Other Conditions Support It.",
    },
    {
      change: "Better Planning And Less Waste",
      supply: "Effective Output May Increase Without A Matching Rise In Resource Use.",
      price: "Lower Unit Costs May Create Room For Lower Prices Or Higher Margins.",
    },
  ];

  return (
    <>
      <div className="space-y-3 md:hidden">
        {rows.map((row) => (
          <div
            key={row.change}
            className="min-w-0 rounded-xl border border-gray-200 p-4"
          >
            <h3 className="break-words font-bold text-gray-950">
              {row.change}
            </h3>
            <div className="mt-3 border-t border-gray-100 pt-3">
              <p className="text-xs font-bold uppercase tracking-wide text-emerald-800">
                Likely Supply Effect
              </p>
              <p className="mt-1 break-words text-sm leading-6 text-gray-700">
                {row.supply}
              </p>
            </div>
            <div className="mt-3 border-t border-gray-100 pt-3">
              <p className="text-xs font-bold uppercase tracking-wide text-blue-800">
                Possible Price Effect
              </p>
              <p className="mt-1 break-words text-sm leading-6 text-gray-700">
                {row.price}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="hidden overflow-x-auto rounded-xl border border-gray-200 md:block">
        <table className="w-full table-fixed border-collapse text-left text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="w-1/3 p-4 font-bold text-gray-950">
                Change In Resources
              </th>
              <th className="w-1/3 p-4 font-bold text-gray-950">
                Likely Supply Effect
              </th>
              <th className="w-1/3 p-4 font-bold text-gray-950">
                Possible Price Effect
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.change} className="border-t border-gray-200">
                <td className="break-words p-4 font-bold text-gray-900">
                  {row.change}
                </td>
                <td className="break-words p-4 text-gray-700">
                  {row.supply}
                </td>
                <td className="break-words p-4 text-gray-700">
                  {row.price}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default function FactorsOfProductionPage() {
  return (
    <main className="min-h-screen overflow-x-clip bg-white text-gray-800">
      <article className="mx-auto w-full max-w-5xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <header className="mb-8">
          <div className="mb-4 inline-flex max-w-full items-center gap-2 rounded-full bg-blue-50 px-3 py-1.5 text-sm font-bold text-blue-800">
            <BookOpen size={16} className="shrink-0" />
            <span>Economics Basics</span>
          </div>

          <h1 className="break-words text-3xl font-bold leading-tight text-gray-950 sm:text-4xl">
            Factors Of Production: How Resources Affect Supply, Demand And Price
          </h1>

          <p className="mt-4 max-w-4xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
            Why can the price of wheat rise after a poor harvest? Why can a
            bakery produce more bread after buying a new oven? And why might
            the same bakery raise prices when more students start buying its
            products? The answers connect land, labour, capital and
            entrepreneurship with productivity, costs, supply and demand.
          </p>
        </header>

        <section className="mb-10 rounded-2xl border border-blue-200 bg-blue-50 p-4 sm:p-6">
          <div className="flex min-w-0 items-start gap-3">
            <Lightbulb className="mt-1 shrink-0 text-blue-700" size={25} />
            <div className="min-w-0">
              <h2 className="text-xl font-bold text-gray-950 sm:text-2xl">
                Start With The Complete Economic Picture
              </h2>
              <p className="mt-3 leading-7 text-gray-700">
                The four factors help a business produce goods and services.
                Their availability and productivity influence production
                capacity and costs. These conditions affect how much firms are
                willing and able to supply. Demand reflects consumers'
                willingness and ability to buy at different prices. Supply and
                demand interact to determine the market equilibrium price and
                quantity, although taxes, competition, regulation and other
                conditions also matter.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <SectionHeading
            eyebrow="Diagram 1"
            title="From Resources To The Market"
            description="Follow the relationship from the four factors of production to resource utilisation, supply, consumer demand and the final market outcome."
          />
          <ResourceFlowDiagram />
        </section>

        <AdSlot />

        <section className="my-10">
          <SectionHeading
            title="Understand Each Factor In Real Life"
            description="Each factor has a different role, but no factor normally works alone. Expand each section to learn its meaning, practical use, production effects and limitations."
          />

          <div className="space-y-4">
            {factors.map((factor, index) => {
              const Icon = factor.icon;

              return (
                <details
                  key={factor.title}
                  open={index === 0}
                  className={`group min-w-0 overflow-hidden rounded-2xl border ${factor.color}`}
                >
                  <summary className="flex min-w-0 cursor-pointer list-none items-center justify-between gap-3 p-4 sm:p-5">
                    <div className="flex min-w-0 items-center gap-3">
                      <div className="shrink-0 rounded-xl bg-white p-3">
                        <Icon className={factor.iconColor} size={24} />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs font-bold uppercase tracking-wide text-gray-500">
                          Factor {factor.number}
                        </p>
                        <h3 className="break-words text-lg font-bold text-gray-950 sm:text-xl">
                          {factor.title}
                        </h3>
                        <p className="mt-1 break-words text-sm leading-5 text-gray-700">
                          {factor.subtitle}
                        </p>
                      </div>
                    </div>
                    <ArrowDown
                      size={21}
                      className="shrink-0 text-gray-600 transition-transform group-open:rotate-180"
                    />
                  </summary>

                  <div className="space-y-4 border-t border-black/10 bg-white p-4 sm:p-5">
                    <div>
                      <h4 className="font-bold text-gray-950">Meaning</h4>
                      <p className="mt-1 leading-7 text-gray-700">
                        {factor.meaning}
                      </p>
                    </div>

                    <div className="rounded-xl bg-gray-50 p-4">
                      <h4 className="font-bold text-gray-950">
                        Practical Example
                      </h4>
                      <p className="mt-1 leading-7 text-gray-700">
                        {factor.example}
                      </p>
                    </div>

                    <div className="grid min-w-0 grid-cols-1 gap-3 sm:grid-cols-2">
                      <div className="min-w-0 rounded-xl border border-gray-200 p-4">
                        <div className="mb-2 flex items-center gap-2">
                          <Wrench size={19} className="shrink-0 text-blue-700" />
                          <h4 className="font-bold text-gray-950">
                            Effective Utilisation
                          </h4>
                        </div>
                        <p className="text-sm leading-6 text-gray-700">
                          {factor.utilisation}
                        </p>
                      </div>

                      <div className="min-w-0 rounded-xl border border-gray-200 p-4">
                        <div className="mb-2 flex items-center gap-2">
                          <ChartNoAxesCombined
                            size={19}
                            className="shrink-0 text-emerald-700"
                          />
                          <h4 className="font-bold text-gray-950">
                            Effect On Supply
                          </h4>
                        </div>
                        <p className="text-sm leading-6 text-gray-700">
                          {factor.supply}
                        </p>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-bold text-gray-950">
                        Effect On Costs And Prices
                      </h4>
                      <p className="mt-1 leading-7 text-gray-700">
                        {factor.cost}
                      </p>
                    </div>

                    <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
                      <h4 className="font-bold text-gray-950">
                        What This Factor Cannot Do Alone
                      </h4>
                      <p className="mt-1 leading-7 text-gray-700">
                        {factor.limitation}
                      </p>
                    </div>

                    <p className="text-sm leading-6 text-gray-600">
                      <span className="font-bold text-gray-900">
                        Traditional Textbook Reward:
                      </span>{" "}
                      {factor.reward}
                    </p>
                  </div>
                </details>
              );
            })}
          </div>
        </section>

        <section className="my-10">
          <SectionHeading
            title="How The Four Factors Work Together"
            description="Imagine a dairy business that wants to supply more milk to nearby shops. Increasing just one resource may not be enough."
          />

          <div className="grid min-w-0 grid-cols-1 gap-3 sm:grid-cols-2">
            <div className="min-w-0 rounded-xl border border-emerald-200 bg-emerald-50 p-4 sm:p-5">
              <Sprout size={25} className="mb-3 text-emerald-700" />
              <h3 className="font-bold text-gray-950">
                1. Land And Natural Inputs
              </h3>
              <p className="mt-2 leading-7 text-gray-700">
                Adequate fodder, water and suitable facilities support
                production. A shortage of fodder can restrict output even if
                the dairy has enough workers.
              </p>
            </div>

            <div className="min-w-0 rounded-xl border border-blue-200 bg-blue-50 p-4 sm:p-5">
              <Users size={25} className="mb-3 text-blue-700" />
              <h3 className="font-bold text-gray-950">
                2. Labour And Skills
              </h3>
              <p className="mt-2 leading-7 text-gray-700">
                Workers handle animal care, hygiene, milking and delivery.
                More animals without enough capable workers can reduce
                efficiency and quality.
              </p>
            </div>

            <div className="min-w-0 rounded-xl border border-violet-200 bg-violet-50 p-4 sm:p-5">
              <Factory size={25} className="mb-3 text-violet-700" />
              <h3 className="font-bold text-gray-950">
                3. Capital And Equipment
              </h3>
              <p className="mt-2 leading-7 text-gray-700">
                Milking equipment, storage tanks and refrigeration can improve
                handling and reduce spoilage. Equipment still needs
                electricity, maintenance and trained operators.
              </p>
            </div>

            <div className="min-w-0 rounded-xl border border-amber-200 bg-amber-50 p-4 sm:p-5">
              <BriefcaseBusiness
                size={25}
                className="mb-3 text-amber-700"
              />
              <h3 className="font-bold text-gray-950">
                4. Entrepreneurship And Coordination
              </h3>
              <p className="mt-2 leading-7 text-gray-700">
                The owner coordinates purchases, staff, animal care,
                refrigeration, transport and orders. Poor planning can cause
                waste even when other resources are available.
              </p>
            </div>
          </div>

          <div className="mt-4 rounded-xl border border-gray-300 bg-gray-50 p-4 sm:p-5">
            <h3 className="font-bold text-gray-950">
              What Happens When One Factor Is Missing?
            </h3>
            <p className="mt-2 leading-7 text-gray-700">
              Suppose the dairy buys more animals but does not increase fodder,
              labour or refrigeration capacity. Output may not rise as
              expected, and waste or costs may increase. Production expands
              successfully only when the resources work together and the
              business has a viable way to sell the extra output.
            </p>
          </div>
        </section>

        <AdSlot />

        <section className="my-10">
          <SectionHeading
            title="How Resource Utilisation Affects Output And Cost"
            description="Utilisation means how effectively a business uses its available resources. An idle machine, unplanned work shift or spoiled ingredients can all represent avoidable waste."
          />

          <div className="grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="min-w-0 rounded-2xl border border-rose-200 bg-rose-50 p-4 sm:p-5">
              <TrendingDown className="mb-3 text-rose-700" size={25} />
              <h3 className="font-bold text-gray-950">
                Poor Resource Utilisation
              </h3>
              <ul className="mt-3 space-y-2 text-sm leading-6 text-gray-700">
                <li>• Workers wait because materials are unavailable.</li>
                <li>• Machines remain idle or break down frequently.</li>
                <li>• Raw materials spoil before use.</li>
                <li>• Fixed costs are spread over fewer units.</li>
              </ul>
              <p className="mt-3 leading-7 text-gray-700">
                Possible result: lower output and higher average cost per unit.
              </p>
            </div>

            <div className="min-w-0 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 sm:p-5">
              <TrendingUp className="mb-3 text-emerald-700" size={25} />
              <h3 className="font-bold text-gray-950">
                Better Resource Utilisation
              </h3>
              <ul className="mt-3 space-y-2 text-sm leading-6 text-gray-700">
                <li>• Materials arrive when needed.</li>
                <li>• Equipment is maintained and scheduled well.</li>
                <li>• Workers are trained and tasks are coordinated.</li>
                <li>• Less output is lost through mistakes and spoilage.</li>
              </ul>
              <p className="mt-3 leading-7 text-gray-700">
                Possible result: higher output and lower unit costs, provided
                additional operating costs do not outweigh the gains.
              </p>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-gray-200 p-4 sm:p-5">
            <h3 className="text-lg font-bold text-gray-950">
              A Simple Cost-Per-Loaf Example
            </h3>
            <p className="mt-2 leading-7 text-gray-700">
              Suppose a bakery has daily costs of ₹6,000 and produces 1,000
              loaves. Its average cost is ₹6 per loaf. If better scheduling
              allows it to produce 1,200 loaves at the same total daily cost,
              average cost becomes ₹5 per loaf. These figures are hypothetical
              and demonstrate the calculation, not actual market data.
            </p>

            <div className="mt-4 grid min-w-0 grid-cols-1 gap-3 sm:grid-cols-2">
              <div className="min-w-0 rounded-xl bg-gray-50 p-4">
                <p className="text-sm leading-5 text-gray-600">
                  Before Improved Utilisation
                </p>
                <p className="mt-2 text-3xl font-bold text-gray-950">
                  ₹6.00
                </p>
                <p className="mt-1 break-words text-sm text-gray-600">
                  ₹6,000 ÷ 1,000 Loaves
                </p>
              </div>
              <div className="min-w-0 rounded-xl bg-emerald-50 p-4">
                <p className="text-sm leading-5 text-gray-600">
                  After Improved Utilisation
                </p>
                <p className="mt-2 text-3xl font-bold text-emerald-800">
                  ₹5.00
                </p>
                <p className="mt-1 break-words text-sm text-gray-600">
                  ₹6,000 ÷ 1,200 Loaves
                </p>
              </div>
            </div>

            <p className="mt-3 text-sm leading-6 text-gray-600">
              In a real bakery, extra loaves may require more ingredients,
              electricity, packaging or labour. Total costs would then change,
              so the actual unit cost must be recalculated.
            </p>
          </div>
        </section>

        <section className="my-10">
          <SectionHeading
            title="How Factors Of Production Affect Supply And Price"
            description="Changes in resources often affect supply through productive capacity and production costs. The effect on the final market price depends on demand, competition and other conditions."
          />

          <ResponsiveComparison />

          <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-4">
            <p className="leading-7 text-gray-700">
              <span className="font-bold text-gray-950">Important:</span>{" "}
              these are typical directions, not guaranteed outcomes. Businesses
              do not always pass cost savings to consumers, and they may absorb
              higher costs rather than immediately raise prices.
            </p>
          </div>
        </section>

        <section className="my-10">
          <SectionHeading
            eyebrow="Diagram 2"
            title="Why Improved Production Can Change Market Price"
            description="Suppose a bakery adopts better equipment and improves worker scheduling. It can now supply more bread at each price. If demand does not change, the market moves to a new equilibrium."
          />

          <SupplyDemandDiagram />

          <div className="mt-4 grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="min-w-0 rounded-xl border border-emerald-200 bg-emerald-50 p-4">
              <h3 className="font-bold text-gray-950">
                If Supply Increases
              </h3>
              <p className="mt-2 leading-7 text-gray-700">
                With demand unchanged, equilibrium price generally falls and
                equilibrium quantity rises. Consumers may purchase more at
                the lower price along the same demand curve.
              </p>
            </div>
            <div className="min-w-0 rounded-xl border border-rose-200 bg-rose-50 p-4">
              <h3 className="font-bold text-gray-950">
                If Supply Decreases
              </h3>
              <p className="mt-2 leading-7 text-gray-700">
                With demand unchanged, equilibrium price generally rises and
                equilibrium quantity falls. A poor harvest or higher input
                costs can contribute to this outcome.
              </p>
            </div>
          </div>
        </section>

        <section className="my-10">
          <SectionHeading
            title="Supply Is Not The Same As Demand"
            description="Factors of production mainly influence a producer's ability and cost to make goods. Consumer demand is influenced by different conditions."
          />

          <div className="grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="min-w-0 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 sm:p-5">
              <h3 className="text-lg font-bold text-gray-950">
                Supply-Side Conditions
              </h3>
              <ul className="mt-3 space-y-2 text-sm leading-6 text-gray-700">
                <li>• Availability Of Raw Materials And Land</li>
                <li>• Labour Costs, Skills And Productivity</li>
                <li>• Machinery, Technology And Energy Costs</li>
                <li>• Taxes, Regulations And Business Organisation</li>
              </ul>
              <p className="mt-3 leading-7 text-gray-700">
                These conditions affect production costs, capacity and the
                quantity firms are willing and able to sell at different
                prices.
              </p>
            </div>

            <div className="min-w-0 rounded-2xl border border-blue-200 bg-blue-50 p-4 sm:p-5">
              <h3 className="text-lg font-bold text-gray-950">
                Demand-Side Conditions
              </h3>
              <ul className="mt-3 space-y-2 text-sm leading-6 text-gray-700">
                <li>• Consumer Income And Purchasing Power</li>
                <li>• Preferences, Fashion And Product Quality</li>
                <li>• Prices Of Substitutes And Complementary Goods</li>
                <li>• Population, Expectations And Seasonal Needs</li>
              </ul>
              <p className="mt-3 leading-7 text-gray-700">
                These conditions affect how much customers want and can afford
                to buy at different prices.
              </p>
            </div>
          </div>

          <div className="mt-4 rounded-xl border border-gray-200 p-4 sm:p-5">
            <h3 className="font-bold text-gray-950">
              Example: More Students Move Into A Neighbourhood
            </h3>
            <p className="mt-2 leading-7 text-gray-700">
              More students may increase demand for affordable meals and
              bread. That demand change is not itself an increase in the
              factors of production. Bakeries may respond by hiring workers,
              buying equipment and purchasing more ingredients. Those decisions
              can then increase supply. The initial demand change and the
              later supply response are separate events.
            </p>
          </div>
        </section>

        <AdSlot />

        <section className="my-10">
          <SectionHeading
            title="Four Real-Life Situations: Follow The Economic Chain"
            description="Each example follows a change through resources, production, supply and possible market-price effects."
          />

          <div className="space-y-4">
            {marketExamples.map((example) => {
              const Icon = example.icon;

              return (
                <div
                  key={example.title}
                  className={`min-w-0 rounded-2xl border p-4 sm:p-5 ${example.color}`}
                >
                  <div className="flex min-w-0 flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex min-w-0 items-start gap-3">
                      <Icon size={25} className="mt-0.5 shrink-0 text-gray-800" />
                      <h3 className="min-w-0 break-words text-lg font-bold text-gray-950">
                        {example.title}
                      </h3>
                    </div>
                    <span className="w-fit max-w-full break-words rounded-full bg-white px-3 py-1 text-sm font-bold text-gray-800">
                      {example.label}
                    </span>
                  </div>

                  <ol className="mt-4 space-y-3">
                    {example.steps.map((step, index) => (
                      <li key={step} className="flex min-w-0 gap-3">
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-sm font-bold text-gray-800">
                          {index + 1}
                        </span>
                        <p className="min-w-0 break-words pt-0.5 leading-7 text-gray-700">
                          {step}
                        </p>
                      </li>
                    ))}
                  </ol>
                </div>
              );
            })}
          </div>
        </section>

        <section className="my-10">
          <SectionHeading title="Can A Business Lower Costs But Keep Its Price Unchanged?" />

          <p className="leading-7 text-gray-700">
            Yes. A business that reduces production costs does not have to
            reduce its selling price immediately. It may keep the price stable
            because competitors charge similar prices, customers value the
            product, demand is strong or the business needs to recover an
            earlier investment. Alternatively, competition may encourage it
            to pass some savings to customers.
          </p>

          <div className="mt-5 grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="min-w-0 rounded-xl border border-gray-200 p-4">
              <Gauge className="mb-3 text-blue-700" size={25} />
              <h3 className="font-bold text-gray-950">
                Lower Cost, Same Price
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-700">
                The business may earn a higher margin per unit if sales and
                other costs remain stable.
              </p>
            </div>

            <div className="min-w-0 rounded-xl border border-gray-200 p-4">
              <TrendingDown className="mb-3 text-emerald-700" size={25} />
              <h3 className="font-bold text-gray-950">
                Lower Cost, Lower Price
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-700">
                The business may cut prices to attract customers or respond
                to competitors.
              </p>
            </div>

            <div className="min-w-0 rounded-xl border border-gray-200 p-4">
              <TrendingUp className="mb-3 text-amber-700" size={25} />
              <h3 className="font-bold text-gray-950">
                Higher Demand, Higher Price
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-700">
                If demand rises faster than supply can respond, market price
                may increase even when production technology is unchanged.
              </p>
            </div>
          </div>
        </section>

        <section className="my-10">
          <SectionHeading title="Frequently Asked Questions" />

          <div className="space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group min-w-0 rounded-xl border border-gray-200 p-4"
              >
                <summary className="flex min-w-0 cursor-pointer list-none items-start justify-between gap-3">
                  <span className="min-w-0 break-words font-bold text-gray-900">
                    {faq.question}
                  </span>
                  <CircleHelp
                    size={20}
                    className="mt-0.5 shrink-0 text-blue-700"
                  />
                </summary>
                <p className="mt-3 break-words leading-7 text-gray-700">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </section>

        <section className="my-10 rounded-2xl border border-blue-200 bg-blue-50 p-4 sm:p-6">
          <div className="flex min-w-0 items-start gap-3">
            <CheckCircle2
              className="mt-1 shrink-0 text-blue-700"
              size={26}
            />
            <div className="min-w-0">
              <h2 className="text-xl font-bold text-gray-950 sm:text-2xl">
                The Complete Takeaway
              </h2>
              <p className="mt-3 leading-7 text-gray-700">
                Land supplies natural resources, labour contributes human
                effort, capital provides productive equipment, and
                entrepreneurship coordinates the process. Their availability
                and effective utilisation influence output and costs, which
                affect supply. Consumer demand interacts with supply to
                influence market price and quantity. Better production can
                ease price pressure, but it does not guarantee lower prices.
                Likewise, rising costs do not guarantee a price increase.
                Market conditions determine the final outcome.
              </p>
            </div>
          </div>
        </section>

      </article>
    </main>
  );
}
