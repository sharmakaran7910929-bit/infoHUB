
import Link from "next/link";
import {
  ArrowDown,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Banknote,
  BookOpen,
  Building2,
  CheckCircle2,
  ChevronDown,
  CircleDollarSign,
  Coins,
  Gauge,
  Landmark,
  Lightbulb,
  RefreshCw,
  ShieldCheck,
  TrendingDown,
  TrendingUp,
  Wallet,
  Activity,
  BriefcaseBusiness,
  CircleHelp,
  Factory,
  HandCoins,
  IndianRupee,
  PiggyBank,
  Scale,
  Target,
  Zap, 
} from "lucide-react";
import AdSlot from '../../../../components/AdSlot'

export const metadata = {
  title:
    "Tools of Monetary Policy in India: Meaning, Examples & Effects | PriceTag HUB",
  description:
    "Understand RBI monetary policy tools in depth: repo rate, SDF, MSF, CRR, SLR, open market operations, LAF, variable-rate auctions and bank rate, with examples, impacts and diagrams.",
  alternates: {
    canonical:
      "https://www.pricetag.co.in/economics/monetary-policy/tools-of-monetary-policy",
  },
  openGraph: {
    title: "Tools of Monetary Policy in India | PriceTag HUB",
    description:
      "Detailed explanations of RBI monetary policy instruments, how they work, their economic effects, examples and visual diagrams.",
    url: "https://www.pricetag.co.in/economics/monetary-policy/tools-of-monetary-policy",
    type: "article",
  },
};

const tools = [
  {
    id: "repo-rate",
    number: "01",
    title: "Repo Rate",
    short: "The price of short-term RBI funding",
    category: "Policy interest rate",
    icon: TrendingUp,
    color: "blue",
    meaning:
      "The repo rate is the policy rate at which the RBI provides funds to eligible banks against eligible collateral under repo operations. The policy repo rate is the central interest-rate signal in India's monetary policy framework.",
    purpose:
      "The RBI uses the policy rate to influence short-term market interest rates and, through the banking and financial system, borrowing, saving, investment, spending and inflation.",
    mechanism: [
      {
        title: "RBI changes the policy rate",
        text: "The Monetary Policy Committee decides the policy repo rate.",
      },
      {
        title: "Financial conditions respond",
        text: "Money-market rates and banks' funding costs may change.",
      },
      {
        title: "Loan and deposit rates may adjust",
        text: "Banks can revise applicable rates depending on funding, competition and loan benchmarks.",
      },
      {
        title: "Spending and inflation may change",
        text: "Borrowing and demand may strengthen or weaken over time.",
      },
    ],
    exampleTitle: "A family planning a home loan",
    example:
      "Suppose a family is considering a floating-rate home loan. The RBI reduces the repo rate by 0.25 percentage points, or 25 basis points. If the family's loan rate is linked to a benchmark that reflects the cut, its interest rate may fall when the applicable reset takes effect.",
    calculationTitle: "Understand a 25-basis-point change",
    calculation:
      "If a hypothetical applicable loan rate moves from 9.00% to 8.75%, the reduction is 0.25 percentage points. It is not a 25% reduction in the loan rate.",
    impacts: [
      {
        audience: "Borrowers",
        icon: HandCoins,
        color: "blue",
        text: "A rate cut may reduce borrowing costs; a hike may increase them, depending on the loan terms and transmission.",
      },
      {
        audience: "Savers",
        icon: PiggyBank,
        color: "emerald",
        text: "Deposit rates may change over time. Lower policy rates can put downward pressure on new deposit rates.",
      },
      {
        audience: "Businesses",
        icon: Factory,
        color: "amber",
        text: "Lower financing costs may encourage investment, while higher costs may discourage borrowing.",
      },
      {
        audience: "Inflation",
        icon: TrendingDown,
        color: "rose",
        text: "Tighter policy may moderate demand and inflationary pressure over time, though supply shocks can complicate the outcome.",
      },
    ],
    important:
      "A repo-rate change does not automatically change every loan or deposit rate immediately. The effect depends on loan benchmarks, reset dates, bank funding costs and broader market conditions.",
    takeaway:
      "Remember: the repo rate is a key policy signal that influences the cost of money throughout the economy.",
  },
  {
    id: "sdf",
    number: "02",
    title: "Standing Deposit Facility (SDF)",
    short: "A facility for absorbing surplus liquidity",
    category: "Liquidity absorption",
    icon: Wallet,
    color: "indigo",
    meaning:
      "The Standing Deposit Facility allows eligible banks to place surplus funds with the RBI without providing collateral. It serves as the floor of the Liquidity Adjustment Facility interest-rate corridor.",
    purpose:
      "The SDF helps the RBI absorb surplus liquidity and supports the implementation of monetary policy by providing a facility through which eligible banks can earn interest on deposited funds.",
    mechanism: [
      {
        title: "Banks have surplus funds",
        text: "Some banks may have more short-term liquidity than they need.",
      },
      {
        title: "Eligible funds are deposited with RBI",
        text: "Banks use the SDF under the applicable terms.",
      },
      {
        title: "Liquidity is absorbed",
        text: "The deposited funds are held by the RBI rather than remaining available for other immediate uses.",
      },
      {
        title: "Money-market conditions respond",
        text: "The facility helps anchor short-term interest rates within the policy corridor.",
      },
    ],
    exampleTitle: "A bank has funds it does not need today",
    example:
      "Suppose a bank has ₹100 crore of surplus overnight funds. Rather than leave those funds unused, it may place eligible funds with the RBI through the SDF, subject to applicable conditions. The RBI absorbs that liquidity and the bank earns interest at the applicable SDF rate.",
    calculationTitle: "Illustrative interest calculation",
    calculation:
      "If ₹100 crore is placed for one day at a hypothetical annual rate of 5%, simple interest for one day is approximately ₹1.37 lakh, using 365 days. This is an illustration, not the current SDF rate or a statement of the exact settlement convention.",
    impacts: [
      {
        audience: "Bank liquidity",
        icon: Wallet,
        color: "indigo",
        text: "Surplus funds placed with RBI are absorbed from immediate market circulation.",
      },
      {
        audience: "Short-term rates",
        icon: Gauge,
        color: "blue",
        text: "The SDF helps establish a floor for the LAF corridor and supports rate control.",
      },
      {
        audience: "Borrowers",
        icon: HandCoins,
        color: "amber",
        text: "The effect on lending is indirect; it depends on overall liquidity and the transmission of policy rates.",
      },
      {
        audience: "Monetary policy",
        icon: Target,
        color: "emerald",
        text: "It helps the RBI manage surplus liquidity without requiring collateral from depositing banks.",
      },
    ],
    important:
      "The SDF became the floor of the LAF corridor in April 2022. Do not describe the reverse repo rate as the current corridor floor.",
    takeaway:
      "Remember: SDF means eligible banks can park surplus funds with RBI without collateral.",
  },
  {
    id: "msf",
    number: "03",
    title: "Marginal Standing Facility (MSF)",
    short: "A backstop for overnight liquidity",
    category: "Liquidity support",
    icon: ShieldCheck,
    color: "violet",
    meaning:
      "The MSF is a facility through which eligible scheduled commercial banks can obtain overnight funds from the RBI under specified conditions and against eligible securities.",
    purpose:
      "It provides a backstop source of overnight liquidity when a bank faces a temporary shortage of funds. It also forms the upper end of the standard LAF interest-rate corridor.",
    mechanism: [
      {
        title: "A bank faces a shortfall",
        text: "Unexpected payments or withdrawals create a temporary funding need.",
      },
      {
        title: "The bank uses the MSF",
        text: "It requests overnight funds under the facility's eligibility and collateral rules.",
      },
      {
        title: "Liquidity is provided",
        text: "The RBI provides funds against eligible securities, subject to the applicable framework.",
      },
      {
        title: "The bank settles its obligation",
        text: "The bank repays the overnight borrowing under the facility terms.",
      },
    ],
    exampleTitle: "A temporary overnight shortage",
    example:
      "Suppose a bank expects ₹500 crore of incoming payments tomorrow but needs ₹100 crore today to meet its immediate obligations. If eligible and if other conditions are satisfied, the bank may use the MSF to meet its overnight liquidity need.",
    calculationTitle: "Illustrative borrowing cost",
    calculation:
      "At a hypothetical annual rate of 6.5%, borrowing ₹100 crore for one day would cost approximately ₹1.78 lakh in simple interest, using 365 days. Actual charges depend on the applicable rate and RBI settlement rules.",
    impacts: [
      {
        audience: "Banks",
        icon: Landmark,
        color: "violet",
        text: "Helps eligible banks handle temporary overnight funding shortages.",
      },
      {
        audience: "Financial stability",
        icon: ShieldCheck,
        color: "emerald",
        text: "Provides a liquidity backstop, reducing the risk that a temporary cash mismatch becomes a settlement problem.",
      },
      {
        audience: "Short-term rates",
        icon: Gauge,
        color: "blue",
        text: "Its position in the rate corridor helps guide overnight money-market rates.",
      },
      {
        audience: "Bank customers",
        icon: Building2,
        color: "amber",
        text: "Its effect on customer loans and deposits is indirect rather than an automatic rate change.",
      },
    ],
    important:
      "The MSF is not an unlimited emergency loan for every financial institution. Eligibility, collateral, limits and other RBI conditions apply.",
    takeaway:
      "Remember: MSF is a backstop for eligible banks that need overnight liquidity.",
  },
  {
    id: "crr",
    number: "04",
    title: "Cash Reserve Ratio (CRR)",
    short: "Cash balances banks must maintain with RBI",
    category: "Reserve requirement",
    icon: Coins,
    color: "emerald",
    meaning:
      "CRR is the prescribed percentage of a bank's Net Demand and Time Liabilities (NDTL) that it must maintain as cash balances with the RBI.",
    purpose:
      "The CRR requirement affects how much of a bank's liability base must be held as balances with the central bank. Changing the ratio can influence banking-system liquidity.",
    mechanism: [
      {
        title: "RBI sets the applicable ratio",
        text: "The requirement is expressed as a percentage of the bank's NDTL.",
      },
      {
        title: "The bank calculates its requirement",
        text: "Its eligible liability base is multiplied by the prescribed ratio.",
      },
      {
        title: "Required cash balances are maintained",
        text: "The bank complies with the applicable RBI maintenance rules.",
      },
      {
        title: "Available liquidity can change",
        text: "A higher ratio generally ties up more balances; a lower ratio can release liquidity, all else equal.",
      },
    ],
    exampleTitle: "Calculating a bank's CRR requirement",
    example:
      "Imagine a bank has NDTL of ₹1,000 crore and the applicable CRR is hypothetically 4%. The required CRR balance would be ₹40 crore. If the ratio increased to 4.5%, with NDTL unchanged, the requirement would become ₹45 crore.",
    calculationTitle: "Step-by-step calculation",
    calculation:
      "At 4%: ₹1,000 crore × 0.04 = ₹40 crore. At 4.5%: ₹1,000 crore × 0.045 = ₹45 crore. Difference: ₹5 crore in additional required balances.",
    impacts: [
      {
        audience: "Bank liquidity",
        icon: Wallet,
        color: "emerald",
        text: "A CRR increase generally reduces funds available for other uses; a decrease can release balances, all else equal.",
      },
      {
        audience: "Bank lending",
        icon: HandCoins,
        color: "blue",
        text: "A change can affect lending capacity and funding conditions, but it does not translate mechanically into a fixed change in loans.",
      },
      {
        audience: "Bank profitability",
        icon: CircleDollarSign,
        color: "amber",
        text: "Holding required balances has an opportunity cost because those funds cannot be deployed in the same way as other assets.",
      },
      {
        audience: "Inflation and demand",
        icon: TrendingDown,
        color: "rose",
        text: "Changes in system liquidity may influence credit conditions and demand, depending on the wider economic situation.",
      },
    ],
    important:
      "CRR is maintained as prescribed cash balances with the RBI. The percentage and maintenance rules can change, so use official RBI announcements for current requirements.",
    takeaway:
      "Remember: CRR tells a bank how much of its NDTL must be maintained as cash balances with RBI.",
  },
  {
    id: "slr",
    number: "05",
    title: "Statutory Liquidity Ratio (SLR)",
    short: "A requirement to hold specified liquid assets",
    category: "Liquidity requirement",
    icon: Landmark,
    color: "amber",
    meaning:
      "SLR requires banks to maintain a prescribed proportion of their NDTL in specified liquid assets, including cash, gold and eligible unencumbered securities, as permitted under applicable rules.",
    purpose:
      "The requirement helps ensure that banks maintain a pool of eligible liquid assets. It also influences how banks allocate funds between required liquid holdings and other assets.",
    mechanism: [
      {
        title: "RBI prescribes the requirement",
        text: "The applicable percentage is measured against the bank's NDTL.",
      },
      {
        title: "The bank holds eligible assets",
        text: "It maintains qualifying assets according to RBI rules.",
      },
      {
        title: "The bank manages its balance sheet",
        text: "It balances required liquid holdings with loans and other assets.",
      },
      {
        title: "Funding choices may change",
        text: "A higher requirement can constrain flexibility, all else equal.",
      },
    ],
    exampleTitle: "A bank allocates its funds",
    example:
      "Suppose a bank has NDTL of ₹1,000 crore and an illustrative SLR requirement of 18%. It would need to maintain ₹180 crore in qualifying liquid assets. This does not mean the bank must keep the entire amount as cash with RBI.",
    calculationTitle: "Illustrative SLR calculation",
    calculation:
      "₹1,000 crore × 18% = ₹180 crore in eligible liquid assets. The 18% figure is an example, not a statement of the current prescribed SLR.",
    impacts: [
      {
        audience: "Bank liquidity",
        icon: ShieldCheck,
        color: "emerald",
        text: "Required holdings provide a pool of specified liquid assets, subject to the applicable rules.",
      },
      {
        audience: "Bank lending",
        icon: HandCoins,
        color: "blue",
        text: "A higher requirement may limit balance-sheet flexibility for other uses, all else equal.",
      },
      {
        audience: "Government securities",
        icon: Landmark,
        color: "amber",
        text: "Eligible securities may form part of the qualifying assets, linking bank portfolios with government debt markets.",
      },
      {
        audience: "Bank management",
        icon: Scale,
        color: "violet",
        text: "Banks must manage compliance, asset composition, liquidity and returns together.",
      },
    ],
    important:
      "CRR and SLR are not the same. CRR requires prescribed cash balances with RBI; SLR involves specified liquid assets maintained under the applicable rules.",
    takeaway:
      "Remember: SLR concerns the qualifying liquid assets a bank must hold, not just its cash balance with RBI.",
  },
  {
    id: "omo",
    number: "06",
    title: "Open Market Operations (OMO)",
    short: "RBI purchases and sales of government securities",
    category: "Market operations",
    icon: RefreshCw,
    color: "cyan",
    meaning:
      "Open Market Operations are purchases or sales of government securities by the RBI in the market. They are used to influence durable liquidity in the banking system.",
    purpose:
      "The RBI can inject liquidity through purchases or absorb liquidity through sales. These operations help manage liquidity beyond the effect of short-term lending and deposit facilities.",
    mechanism: [
      {
        title: "RBI decides to purchase or sell",
        text: "The operation is conducted under the applicable RBI framework.",
      },
      {
        title: "Government securities are traded",
        text: "Banks and other eligible market participants transact with the RBI.",
      },
      {
        title: "Funds enter or leave the banking system",
        text: "Purchases generally inject liquidity; sales generally absorb it.",
      },
      {
        title: "Market liquidity conditions respond",
        text: "Money-market conditions can change, depending on other liquidity flows.",
      },
    ],
    exampleTitle: "RBI purchases government securities",
    example:
      "Suppose the RBI purchases ₹1,000 crore of government securities from market participants. Payment for the purchases generally adds funds to the banking system. If the RBI sells securities instead, payment generally absorbs funds from the system.",
    calculationTitle: "Direction of the liquidity effect",
    calculation:
      "RBI purchase → liquidity injection. RBI sale → liquidity absorption. The net change in total system liquidity also depends on currency demand, government balances and other RBI operations.",
    impacts: [
      {
        audience: "Banking liquidity",
        icon: Wallet,
        color: "cyan",
        text: "Purchases generally add liquidity; sales generally withdraw it.",
      },
      {
        audience: "Government securities",
        icon: Landmark,
        color: "blue",
        text: "Transactions can affect demand and supply for government securities and may influence their yields.",
      },
      {
        audience: "Money markets",
        icon: Gauge,
        color: "violet",
        text: "The resulting liquidity change can affect short-term funding conditions.",
      },
      {
        audience: "Businesses and households",
        icon: Building2,
        color: "amber",
        text: "Effects on credit and spending are indirect and depend on broader financial conditions.",
      },
    ],
    important:
      "An OMO purchase is not the same as a government spending programme. It is a central-bank securities transaction intended to manage monetary and liquidity conditions.",
    takeaway:
      "Remember: RBI buys securities to inject liquidity and sells securities to absorb liquidity, all else equal.",
  },
  {
    id: "laf",
    number: "07",
    title: "Liquidity Adjustment Facility (LAF)",
    short: "A framework for short-term liquidity management",
    category: "Operating framework",
    icon: Gauge,
    color: "rose",
    meaning:
      "The LAF is an RBI framework for managing short-term liquidity in the banking system. Its facilities and operations include repo and other liquidity operations, with the SDF serving as the corridor floor and the MSF as the standard corridor ceiling.",
    purpose:
      "The framework helps the RBI manage temporary liquidity mismatches and keep overnight money-market rates aligned with its policy stance.",
    mechanism: [
      {
        title: "Liquidity conditions are assessed",
        text: "The RBI considers the availability and demand for short-term funds.",
      },
      {
        title: "The appropriate operation is used",
        text: "Depending on conditions, the RBI may inject or absorb liquidity.",
      },
      {
        title: "Banks and market participants respond",
        text: "Short-term funding and money-market rates adjust to conditions.",
      },
      {
        title: "Policy-rate transmission is supported",
        text: "The framework helps guide short-term market rates around the policy stance.",
      },
    ],
    exampleTitle: "Temporary shortage of funds",
    example:
      "If the banking system experiences a temporary liquidity shortage, the RBI can conduct an appropriate liquidity-injection operation. If surplus liquidity builds up, it can use suitable absorption operations. The specific facility depends on the operation and its terms.",
    calculationTitle: "Understand the rate corridor",
    calculation:
      "The policy repo rate is the central policy signal. The SDF is the floor of the standard LAF corridor, and the MSF is the ceiling. The exact rates are set by the RBI and can change.",
    impacts: [
      {
        audience: "Money-market rates",
        icon: Gauge,
        color: "rose",
        text: "Helps guide overnight rates and manage deviations caused by liquidity imbalances.",
      },
      {
        audience: "Banks",
        icon: Landmark,
        color: "blue",
        text: "Provides a framework for managing temporary liquidity needs and surpluses.",
      },
      {
        audience: "Monetary policy",
        icon: Target,
        color: "emerald",
        text: "Supports the transmission of the policy stance to short-term financial markets.",
      },
      {
        audience: "Wider economy",
        icon: Activity,
        color: "amber",
        text: "Its influence reaches borrowing and spending through financial conditions over time.",
      },
    ],
    important:
      "LAF is a framework, not a single interest rate. Repo, SDF, MSF and other operations have different roles within liquidity management.",
    takeaway:
      "Remember: LAF is the operating framework that helps manage short-term liquidity and money-market rates.",
  },
  {
    id: "variable-rate",
    number: "08",
    title: "Variable Rate Repo and Reverse Repo",
    short: "Auctions to inject or absorb liquidity",
    category: "Liquidity auctions",
    icon: Banknote,
    color: 'orange',
    meaning:
      "The RBI can conduct variable-rate repo and reverse repo auctions for specified periods. A variable-rate repo operation generally injects liquidity against eligible collateral, while a variable-rate reverse repo operation generally absorbs liquidity.",
    purpose:
      "These operations allow the RBI to manage liquidity flexibly through competitive auctions, rather than relying only on fixed-rate facilities.",
    mechanism: [
      {
        title: "The RBI announces an auction",
        text: "The operation specifies the amount, duration and applicable terms.",
      },
      {
        title: "Eligible participants submit bids",
        text: "Participants bid according to the auction rules.",
      },
      {
        title: "Successful bids are accepted",
        text: "Funds are injected or absorbed according to the operation type.",
      },
      {
        title: "The operation reaches maturity",
        text: "Funds and securities are settled under the applicable terms.",
      },
    ],
    exampleTitle: "An auction to inject short-term liquidity",
    example:
      "Suppose the RBI announces a variable-rate repo auction for a specified period to address a temporary liquidity shortage. Eligible banks submit bids. Successful participants receive liquidity under the auction's terms and repay it at maturity.",
    calculationTitle: "What makes the rate variable?",
    calculation:
      "In a variable-rate auction, the accepted rate is determined through the bidding process under the RBI's auction rules. It is not necessarily the same as a fixed-rate facility's rate.",
    impacts: [
      {
        audience: "Banks",
        icon: Wallet,
        color: "orange",
        text: "Allows eligible participants to obtain or place funds through specified auction operations.",
      },
      {
        audience: "Market rates",
        icon: Gauge,
        color: "blue",
        text: "Auction outcomes reflect liquidity demand and bidding conditions.",
      },
      {
        audience: "Liquidity management",
        icon: RefreshCw,
        color: "emerald",
        text: "The RBI can tailor operations to the duration and size of a liquidity imbalance.",
      },
      {
        audience: "Policy implementation",
        icon: Target,
        color: "violet",
        text: "These operations help implement the monetary policy stance in changing market conditions.",
      },
    ],
    important:
      "Repo and reverse repo have opposite liquidity directions. Do not confuse a variable-rate auction with a change in the policy repo rate itself.",
    takeaway:
      "Remember: variable-rate auctions give the RBI flexibility to inject or absorb liquidity at auction-determined rates.",
  },
  {
    id: "bank-rate",
    number: "09",
    title: "Bank Rate",
    short: "An RBI reference rate with regulatory significance",
    category: "Reference rate",
    icon: Building2,
    color: "slate",
    meaning:
      "The bank rate is an RBI reference rate with policy and regulatory significance. It is distinct from the policy repo rate and is linked to certain penal rates under the applicable RBI framework.",
    purpose:
      "It remains part of the monetary and regulatory framework. Its relationship with specified rates and requirements means that changes can have consequences beyond the headline policy rate.",
    mechanism: [
      {
        title: "The RBI sets the bank rate",
        text: "The rate is published as part of the RBI's rate framework.",
      },
      {
        title: "Relevant rules refer to the rate",
        text: "Certain penal or regulatory calculations may be linked to it.",
      },
      {
        title: "Applicable charges or conditions respond",
        text: "The consequences depend on the specific RBI rule or facility.",
      },
      {
        title: "The rate remains distinct from repo",
        text: "It should not be treated as interchangeable with the policy repo rate.",
      },
    ],
    exampleTitle: "A bank reviews a regulatory requirement",
    example:
      "Suppose an RBI rule specifies a penal rate linked to the bank rate. If the bank rate changes, the applicable penal calculation may also change according to that rule. The exact outcome depends on the relevant regulation.",
    calculationTitle: "How to interpret the rate",
    calculation:
      "The bank rate is not simply the rate that every commercial bank charges every borrower. Customer loan pricing depends on loan terms, benchmarks, funding costs and the bank's pricing policy.",
    impacts: [
      {
        audience: "Banks",
        icon: Landmark,
        color: "slate",
        text: "Can affect specified regulatory or penal calculations under RBI rules.",
      },
      {
        audience: "Financial conditions",
        icon: Gauge,
        color: "blue",
        text: "Its wider signalling role should be understood separately from the policy repo rate.",
      },
      {
        audience: "Borrowers",
        icon: HandCoins,
        color: "amber",
        text: "A bank-rate change does not automatically reset all customer loan rates.",
      },
      {
        audience: "Students",
        icon: BookOpen,
        color: "emerald",
        text: "It is important to know the distinction between bank rate and repo rate.",
      },
    ],
    important:
      "Do not describe the bank rate as the rate at which all banks routinely borrow overnight from the RBI. That description confuses different instruments.",
    takeaway:
      "Remember: bank rate and policy repo rate are distinct, even though both belong to the RBI's rate framework.",
  },
];

const colorStyles = {
  blue: {
    icon: "bg-blue-100 text-blue-700",
    badge: "bg-blue-50 text-blue-800",
    border: "border-blue-200",
    heading: "text-blue-800",
    flow: "bg-blue-50 border-blue-200",
    number: "bg-blue-700",
  },
  indigo: {
    icon: "bg-indigo-100 text-indigo-700",
    badge: "bg-indigo-50 text-indigo-800",
    border: "border-indigo-200",
    heading: "text-indigo-800",
    flow: "bg-indigo-50 border-indigo-200",
    number: "bg-indigo-700",
  },
  violet: {
    icon: "bg-violet-100 text-violet-700",
    badge: "bg-violet-50 text-violet-800",
    border: "border-violet-200",
    heading: "text-violet-800",
    flow: "bg-violet-50 border-violet-200",
    number: "bg-violet-700",
  },
  emerald: {
    icon: "bg-emerald-100 text-emerald-700",
    badge: "bg-emerald-50 text-emerald-800",
    border: "border-emerald-200",
    heading: "text-emerald-800",
    flow: "bg-emerald-50 border-emerald-200",
    number: "bg-emerald-700",
  },
  amber: {
    icon: "bg-amber-100 text-amber-700",
    badge: "bg-amber-50 text-amber-800",
    border: "border-amber-200",
    heading: "text-amber-800",
    flow: "bg-amber-50 border-amber-200",
    number: "bg-amber-600",
  },
  cyan: {
    icon: "bg-cyan-100 text-cyan-700",
    badge: "bg-cyan-50 text-cyan-800",
    border: "border-cyan-200",
    heading: "text-cyan-800",
    flow: "bg-cyan-50 border-cyan-200",
    number: "bg-cyan-700",
  },
  rose: {
    icon: "bg-rose-100 text-rose-700",
    badge: "bg-rose-50 text-rose-800",
    border: "border-rose-200",
    heading: "text-rose-800",
    flow: "bg-rose-50 border-rose-200",
    number: "bg-rose-700",
  },
  orange: {
    icon: "bg-orange-100 text-orange-700",
    badge: "bg-orange-50 text-orange-800",
    border: "border-orange-200",
    heading: "text-orange-800",
    flow: "bg-orange-50 border-orange-200",
    number: "bg-orange-700",
  },
  slate: {
    icon: "bg-slate-100 text-slate-700",
    badge: "bg-slate-100 text-slate-800",
    border: "border-slate-200",
    heading: "text-slate-800",
    flow: "bg-slate-50 border-slate-200",
    number: "bg-slate-700",
  },
};

const faqs = [
  {
    question: "What are the main tools of monetary policy in India?",
    answer:
      "Important instruments and operating mechanisms include the policy repo rate, Standing Deposit Facility, Marginal Standing Facility, Cash Reserve Ratio, Statutory Liquidity Ratio, open market operations and other liquidity-management operations. The bank rate is also part of the RBI's rate framework.",
  },
  {
    question: "Which monetary policy tool directly influences the policy interest-rate signal?",
    answer:
      "The policy repo rate is the central policy interest-rate signal. Its effect on market rates, bank lending and deposits depends on the transmission mechanism and prevailing financial conditions.",
  },
  {
    question: "What is the difference between CRR and SLR?",
    answer:
      "CRR requires prescribed cash balances with the RBI. SLR requires banks to hold a prescribed share of NDTL in specified liquid assets under the applicable rules. They differ in the assets used to meet the requirement.",
  },
  {
    question: "How does the RBI absorb liquidity?",
    answer:
      "Depending on the circumstances, the RBI can absorb liquidity through SDF deposits, eligible reverse repo operations and sales of government securities through OMOs, among other operations.",
  },
  {
    question: "How does the RBI inject liquidity?",
    answer:
      "The RBI can inject liquidity through repo operations, eligible variable-rate repo auctions and purchases of government securities through OMOs, depending on the objective and operating conditions.",
  },
  {
    question: "Is the reverse repo rate the floor of the LAF corridor?",
    answer:
      "The SDF has served as the floor of the LAF corridor since April 2022. Reverse repo remains an instrument the RBI can use for liquidity management.",
  },
  {
    question: "Do RBI rate cuts always reduce inflation?",
    answer:
      "No. A rate cut generally eases financial conditions and can support borrowing and demand, but its effects depend on the economic situation. If demand strengthens too much, inflationary pressure can rise. Supply-side shocks and expectations also matter.",
  },
  {
    question: "Where can I check the current RBI rates?",
    answer:
      "Consult the official Reserve Bank of India website for the latest monetary policy resolution, policy rates, reserve requirements, notifications and operating instructions. The numerical examples on this page are illustrative rather than live rates.",
  },
];

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-bold uppercase tracking-wider text-blue-700">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-8 text-slate-600">
          {description}
        </p>
      )}
    </div>
  );
}

function FlowDiagram({ steps, color }) {
  const colors = colorStyles[color];

  return (
    <div className="mt-6">
      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
        {steps.map((step, index) => (
          <div key={step.title} className="relative">
            <div
              className={`h-full rounded-2xl border p-4 ${colors.flow}`}
            >
              <div
                className={`flex h-9 w-9 items-center justify-center rounded-xl text-sm font-bold text-white ${colors.number}`}
              >
                {index + 1}
              </div>
              <h4 className="mt-3 font-bold text-slate-950">
                {step.title}
              </h4>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {step.text}
              </p>
            </div>
            {index < steps.length - 1 && (
              <div className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 xl:block">
                <div className="flex h-6 w-6 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500">
                  <ArrowRight size={14} />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function ImpactCard({ item }) {
  const Icon = item.icon;
  const colorMap = {
    blue: "bg-blue-50 text-blue-700 border-blue-100",
    emerald: "bg-emerald-50 text-emerald-700 border-emerald-100",
    amber: "bg-amber-50 text-amber-700 border-amber-100",
    rose: "bg-rose-50 text-rose-700 border-rose-100",
    violet: "bg-violet-50 text-violet-700 border-violet-100",
    indigo: "bg-indigo-50 text-indigo-700 border-indigo-100",
    cyan: "bg-cyan-50 text-cyan-700 border-cyan-100",
    orange: "bg-orange-50 text-orange-700 border-orange-100",
    slate: "bg-slate-100 text-slate-700 border-slate-200",
  };

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4">
      <div className="flex items-center gap-3">
        <div
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border ${colorMap[item.color]}`}
        >
          <Icon size={20} />
        </div>
        <h4 className="font-bold text-slate-950">{item.audience}</h4>
      </div>
      <p className="mt-3 text-sm leading-7 text-slate-600">
        {item.text}
      </p>
    </div>
  );
}

function ToolSection({ tool }) {
  const Icon = tool.icon;
  const colors = colorStyles[tool.color];

  return (
    <article
      id={tool.id}
      className="scroll-mt-24 border-b border-slate-200 py-12 sm:py-16"
    >
      <div className="grid gap-6 lg:grid-cols-[0.78fr_1.22fr] lg:gap-10">
        <div>
          <div className="flex items-start gap-4">
            <div
              className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${colors.icon}`}
            >
              <Icon size={29} />
            </div>
            <div>
              <p
                className={`text-sm font-bold uppercase tracking-wider ${colors.heading}`}
              >
                Tool {tool.number}
              </p>
              <h3 className="mt-1 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                {tool.title}
              </h3>
              <p className="mt-2 text-sm font-bold text-slate-500">
                {tool.short}
              </p>
            </div>
          </div>

          <span
            className={`mt-5 inline-flex rounded-full px-3 py-1.5 text-xs font-bold ${colors.badge}`}
          >
            {tool.category}
          </span>

          <h4 className="mt-7 text-lg font-bold text-slate-950">
            Meaning
          </h4>
          <p className="mt-3 leading-8 text-slate-700">
            {tool.meaning}
          </p>

          <h4 className="mt-6 text-lg font-bold text-slate-950">
            Why does the RBI use it?
          </h4>
          <p className="mt-3 leading-8 text-slate-700">
            {tool.purpose}
          </p>

          <div
            className={`mt-6 rounded-2xl border p-5 ${colors.flow}`}
          >
            <div className="flex items-center gap-2 font-bold text-slate-950">
              <Target size={19} className={colors.heading} />
              Key takeaway
            </div>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              {tool.takeaway}
            </p>
          </div>
        </div>

        <div className="min-w-0">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-6">
            <div className="flex items-center gap-2">
              <Activity size={20} className="text-blue-700" />
              <h4 className="text-lg font-bold text-slate-950">
                How it works
              </h4>
            </div>
            <FlowDiagram steps={tool.mechanism} color={tool.color} />
          </div>

          <div className="mt-6 rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-5 sm:p-6">
            <div className="flex items-center gap-2">
              <Lightbulb size={21} className="text-amber-600" />
              <p className="text-sm font-bold uppercase tracking-wider text-blue-800">
                Real-world illustration
              </p>
            </div>

            <h4 className="mt-4 text-xl font-bold text-slate-950">
              {tool.exampleTitle}
            </h4>
            <p className="mt-3 leading-8 text-slate-700">
              {tool.example}
            </p>

            <div className="mt-5 rounded-xl border border-blue-100 bg-white p-4">
              <p className="flex items-center gap-2 font-bold text-blue-800">
                <IndianRupee size={18} />
                {tool.calculationTitle}
              </p>
              <p className="mt-2 text-sm leading-7 text-slate-700">
                {tool.calculation}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-9">
        <h4 className="text-xl font-bold text-slate-950">
          Impact of {tool.title}
        </h4>
        <p className="mt-2 leading-7 text-slate-600">
          The impact varies according to market conditions, the RBI's policy
          stance and how banks respond. These are the principal channels.
        </p>

        <div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {tool.impacts.map((item) => (
            <ImpactCard key={item.audience} item={item} />
          ))}
        </div>
      </div>

      <div className="mt-6 flex items-start gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4">
        <CircleHelp
          size={21}
          className="mt-0.5 shrink-0 text-amber-700"
        />
        <div>
          <p className="font-bold text-amber-950">
            Important point
          </p>
          <p className="mt-1 text-sm leading-7 text-slate-700">
            {tool.important}
          </p>
        </div>
      </div>
    </article>
  );
}

export default function ToolsOfMonetaryPolicyPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-blue-100 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-blue-200/40 blur-3xl" />
        <div className="absolute -bottom-28 -left-20 h-72 w-72 rounded-full bg-indigo-200/40 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20 lg:px-10">
          <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <div className="mb-5 flex flex-wrap items-center gap-2 text-sm font-bold text-blue-800">
                <span className="rounded-full border border-blue-200 bg-white px-3 py-1.5">
                  Economics
                </span>
                <span className="text-slate-400">/</span>
                <span className="rounded-full border border-blue-200 bg-white px-3 py-1.5">
                  Monetary Policy
                </span>
              </div>

              <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Tools of Monetary Policy in India
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700 sm:text-xl">
                Discover how the RBI influences interest rates, bank
                liquidity, lending and inflation. Explore each instrument
                through detailed explanations, Indian examples, calculations
                and visual diagrams.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="#all-tools"
                  className="inline-flex items-center gap-2 rounded-xl bg-blue-700 px-5 py-3 font-bold text-white shadow-lg shadow-blue-700/15 transition hover:bg-blue-800"
                >
                  Explore all tools
                  <ArrowRight size={18} />
                </a>
                <a
                  href="#transmission"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 font-bold text-slate-800 transition hover:border-blue-400 hover:text-blue-800"
                >
                  See the big picture
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 text-sm font-bold text-slate-600">
                <span className="flex items-center gap-2">
                  <CheckCircle2 size={17} className="text-emerald-600" />
                  Detailed concepts
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 size={17} className="text-emerald-600" />
                  Practical calculations
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 size={17} className="text-emerald-600" />
                  Visual explanations
                </span>
              </div>
            </div>

            <div className="rounded-3xl border border-blue-100 bg-white p-6 shadow-xl shadow-blue-900/5 sm:p-8">
              <div className="flex items-center justify-between gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-800">
                  <Landmark size={30} />
                </div>
                <span className="rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-bold text-emerald-700">
                  RBI Framework
                </span>
              </div>

              <h2 className="mt-6 text-2xl font-bold text-slate-950">
                How the instruments connect
              </h2>
              <p className="mt-3 leading-7 text-slate-600">
                The RBI uses different instruments to implement its policy
                stance and manage liquidity. Their roles complement one
                another.
              </p>

              <div className="mt-6 space-y-3">
                {[
                  {
                    icon: Gauge,
                    title: "Interest-rate signal",
                    text: "Policy repo rate",
                    color: "bg-blue-100 text-blue-700",
                  },
                  {
                    icon: Wallet,
                    title: "Liquidity management",
                    text: "SDF, MSF, LAF and auctions",
                    color: "bg-indigo-100 text-indigo-700",
                  },
                  {
                    icon: Coins,
                    title: "Reserve requirements",
                    text: "CRR and SLR",
                    color: "bg-emerald-100 text-emerald-700",
                  },
                  {
                    icon: RefreshCw,
                    title: "Market operations",
                    text: "Purchases and sales of securities",
                    color: "bg-amber-100 text-amber-700",
                  },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.title}
                      className="flex items-center gap-3 rounded-2xl bg-slate-50 p-4"
                    >
                      <div
                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${item.color}`}
                      >
                        <Icon size={22} />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-950">
                          {item.title}
                        </h3>
                        <p className="mt-1 text-sm text-slate-600">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <p className="mt-5 text-xs leading-5 text-slate-500">
                The specific instruments used depend on prevailing economic
                conditions and RBI operating decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Table of contents */}
      <section className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-10">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-7">
          <h2 className="text-xl font-bold text-slate-950">
            Explore each tool
          </h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Jump directly to the instrument you want to understand.
          </p>

          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {tools.map((tool) => {
              const Icon = tool.icon;
              const colors = colorStyles[tool.color];

              return (
                <a
                  key={tool.id}
                  href={`#${tool.id}`}
                  className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 p-3 transition hover:border-blue-300 hover:bg-blue-50"
                >
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${colors.icon}`}
                  >
                    <Icon size={21} />
                  </div>
                  <div className="min-w-0">
                    <p className="font-bold text-slate-900">
                      {tool.number}. {tool.title}
                    </p>
                    <p className="mt-1 text-xs leading-5 text-slate-600">
                      {tool.short}
                    </p>
                  </div>
                  <ArrowRight
                    size={16}
                    className="ml-auto shrink-0 text-blue-700"
                  />
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-blue-700">
              Start with the concept
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              What Are Monetary Policy Tools?
            </h2>
            <p className="mt-5 leading-8 text-slate-700">
              Monetary policy tools are instruments and operating mechanisms
              used by a central bank to influence interest rates, liquidity,
              credit conditions and economic activity. In India, the Reserve
              Bank of India implements monetary policy within the country's
              inflation-targeting framework.
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              The objective is to maintain price stability while keeping the
              objective of growth in mind. The RBI considers inflation,
              inflation expectations, economic activity, financial conditions
              and other relevant information when deciding how to implement
              monetary policy.
            </p>
          </div>

          <div className="rounded-3xl border border-indigo-100 bg-gradient-to-br from-indigo-50 to-white p-6 sm:p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-700 text-white">
              <Lightbulb size={25} />
            </div>
            <h3 className="mt-5 text-xl font-bold text-slate-950">
              Two different policy systems
            </h3>
            <div className="mt-5 space-y-4">
              <div className="rounded-xl border border-blue-100 bg-white p-4">
                <p className="font-bold text-blue-800">Monetary policy</p>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  RBI, policy interest rates, banking liquidity and monetary
                  conditions.
                </p>
              </div>
              <div className="rounded-xl border border-indigo-100 bg-white p-4">
                <p className="font-bold text-indigo-800">Fiscal policy</p>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  Government spending, taxation, public borrowing and
                  budgetary decisions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
<AdSlot />
      {/* In-depth tool sections */}
      <section
        id="all-tools"
        className="scroll-mt-24 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10"
      >
        <SectionHeading
          eyebrow="Detailed explanations"
          title="Understand Each Monetary Policy Tool"
          description="Every section explains the meaning, purpose, working mechanism, practical example, economic impacts and important distinctions for that instrument."
        />

        {tools.map((tool) => (
          <ToolSection key={tool.id} tool={tool} />
        ))}
      </section>
<AdSlot />
<AdSlot />
      {/* Transmission */}
      <section
        id="transmission"
        className="scroll-mt-24 border-y border-blue-100 bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-14 sm:py-16"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="The big picture"
            title="How Monetary Policy Reaches the Economy"
            description="Monetary policy affects the economy through several connected channels. The chain below is simplified: real-world transmission can be slower, weaker or different depending on the situation."
          />

          <div className="mx-auto mt-9 max-w-5xl">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  number: "01",
                  title: "RBI decisions",
                  text: "Policy rate, liquidity operations and reserve requirements.",
                  color: "border-blue-200 bg-blue-50",
                },
                {
                  number: "02",
                  title: "Financial conditions",
                  text: "Money-market rates, bank funding and available liquidity.",
                  color: "border-indigo-200 bg-indigo-50",
                },
                {
                  number: "03",
                  title: "Credit and spending",
                  text: "Loan pricing, saving, borrowing, consumption and investment.",
                  color: "border-emerald-200 bg-emerald-50",
                },
                {
                  number: "04",
                  title: "Economic outcomes",
                  text: "Demand, output, employment and inflation may respond.",
                  color: "border-amber-200 bg-amber-50",
                },
              ].map((item, index) => (
                <div key={item.number} className="relative">
                  <div className={`h-full rounded-2xl border p-5 ${item.color}`}>
                    <p className="text-sm font-bold text-slate-500">
                      STEP {item.number}
                    </p>
                    <h3 className="mt-3 text-lg font-bold text-slate-950">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      {item.text}
                    </p>
                  </div>
                  {index < 3 && (
                    <div className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 lg:flex">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full border border-slate-200 bg-white text-blue-700">
                        <ArrowRight size={14} />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-2">
              <div className="rounded-2xl border border-rose-200 bg-white p-5 sm:p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-rose-100 text-rose-700">
                    <TrendingUp size={23} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-950">
                    Tighter monetary conditions
                  </h3>
                </div>
                <div className="mt-4 space-y-3">
                  {[
                    "Borrowing costs may increase",
                    "Credit growth and spending may moderate",
                    "Inflationary pressure may ease over time",
                  ].map((text) => (
                    <div
                      key={text}
                      className="flex items-start gap-2 text-sm leading-6 text-slate-700"
                    >
                      <ArrowDownRight
                        size={17}
                        className="mt-1 shrink-0 text-rose-600"
                      />
                      {text}
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-emerald-200 bg-white p-5 sm:p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                    <TrendingDown size={23} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-950">
                    Easier monetary conditions
                  </h3>
                </div>
                <div className="mt-4 space-y-3">
                  {[
                    "Borrowing costs may decline",
                    "Credit and spending may strengthen",
                    "Economic activity may receive support",
                  ].map((text) => (
                    <div
                      key={text}
                      className="flex items-start gap-2 text-sm leading-6 text-slate-700"
                    >
                      <ArrowUpRight
                        size={17}
                        className="mt-1 shrink-0 text-emerald-600"
                      />
                      {text}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <p className="mt-5 text-sm leading-7 text-slate-500">
              Important: These are typical channels, not guaranteed outcomes.
              Food and fuel shocks, global developments, fiscal policy,
              expectations and banking conditions can influence the final
              result.
            </p>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section
        id="comparison"
        className="scroll-mt-24 mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-16 lg:px-10"
      >
        <SectionHeading
          eyebrow="Quick revision"
          title="Compare the Main Instruments"
          description="Use this table to distinguish interest-rate instruments, reserve requirements and liquidity-management operations."
        />

        <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[720px] border-collapse text-left text-sm">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="px-5 py-4 font-bold">Instrument</th>
                  <th className="px-5 py-4 font-bold">Main role</th>
                  <th className="px-5 py-4 font-bold">Typical direction or effect</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {[
                  [
                    "Repo rate",
                    "Policy interest-rate signal",
                    "Influences borrowing costs and financial conditions",
                  ],
                  [
                    "SDF",
                    "Absorb surplus liquidity",
                    "Funds are deposited with RBI without collateral",
                  ],
                  [
                    "MSF",
                    "Overnight liquidity backstop",
                    "Provides eligible banks with overnight funds",
                  ],
                  [
                    "CRR",
                    "Cash reserve requirement",
                    "A higher ratio generally ties up more balances",
                  ],
                  [
                    "SLR",
                    "Specified liquid asset requirement",
                    "Influences bank asset allocation and flexibility",
                  ],
                  [
                    "OMO",
                    "Manage durable liquidity",
                    "Purchases generally inject; sales generally absorb",
                  ],
                  [
                    "LAF",
                    "Short-term liquidity framework",
                    "Guides short-term rates and liquidity conditions",
                  ],
                  [
                    "Variable-rate auctions",
                    "Flexible liquidity operations",
                    "Repo generally injects; reverse repo generally absorbs",
                  ],
                  [
                    "Bank rate",
                    "Reference rate with regulatory significance",
                    "Affects specified calculations under RBI rules",
                  ],
                ].map(([name, role, effect], index) => (
                  <tr
                    key={name}
                    className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}
                  >
                    <td className="px-5 py-4 font-bold text-slate-900">
                      {name}
                    </td>
                    <td className="px-5 py-4 leading-6 text-slate-700">
                      {role}
                    </td>
                    <td className="px-5 py-4 leading-6 text-slate-600">
                      {effect}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
<AdSlot />
      {/* FAQs */}
      <section
        id="faqs"
        className="scroll-mt-24 border-y border-slate-200 bg-slate-50 py-14 sm:py-16"
      >
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-wider text-blue-700">
              Clear up common doubts
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="mt-8 space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-slate-200 bg-white p-5 open:border-blue-200 open:bg-blue-50/40 sm:p-6"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-slate-950 [&::-webkit-details-marker]:hidden">
                  <span>{faq.question}</span>
                  <ChevronDown
                    size={20}
                    className="shrink-0 text-slate-500 transition group-open:rotate-180"
                  />
                </summary>
                <p className="mt-4 border-t border-slate-200 pt-4 text-sm leading-7 text-slate-700">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

    

      {/* Official source */}
      <section className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-10">
        <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-6">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-800">
            <Landmark size={23} />
          </div>
          <div>
            <h2 className="font-bold text-slate-950">
              Check official RBI information
            </h2>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              Interest rates, reserve requirements and operating rules can
              change. Consult the Reserve Bank of India for the latest
              monetary policy resolutions, notifications and applicable
              requirements. All hypothetical rates and calculations on this
              page are for educational purposes.
            </p>
            <a
              href="https://www.rbi.org.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-2 font-bold text-blue-700 hover:text-blue-900"
            >
              Visit Reserve Bank of India
              <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
