
import Link from "next/link";
import {
  ArrowDown,
  ArrowDownLeft,
  ArrowRight,
  ArrowUpRight,
  Banknote,
  Building2,
  CheckCircle2,
  CircleHelp,
  Coins,
  Landmark,
  Lightbulb,
  LockKeyhole,
  PiggyBank,
  ShieldCheck,
  TrendingDown,
  TrendingUp,
  Wallet,
  Waves,
} from "lucide-react";
import AdSlot from "../../../../components/AdSlot";

export const metadata = {
  title:
    "Repo Rate Vs Reverse Repo Rate: Meaning, Importance & Differences | PriceTag HUB",
  description:
    "Learn what reverse repo rate means, why it matters, how it affects liquidity, and the difference between repo rate and reverse repo rate with simple Indian banking examples.",
  alternates: {
    canonical:
      "https://www.pricetag.co.in/economics/monetary-policy/repo-rate-vs-reverse-repo-rate",
  },
};

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mx-auto mb-8 max-w-3xl text-center">
      {eyebrow && (
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.15em] text-blue-700">
          {eyebrow}
        </p>
      )}
      <h2 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
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

function InfoCard({ icon: Icon, title, text, color = "blue" }) {
  const colors = {
    blue: "bg-blue-50 text-blue-700 ring-blue-100",
    green: "bg-emerald-50 text-emerald-700 ring-emerald-100",
    amber: "bg-amber-50 text-amber-700 ring-amber-100",
    violet: "bg-violet-50 text-violet-700 ring-violet-100",
    rose: "bg-rose-50 text-rose-700 ring-rose-100",
  };

  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div
        className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ring-1 ${colors[color]}`}
      >
        <Icon size={24} />
      </div>
      <h3 className="text-lg font-bold text-slate-950">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
    </article>
  );
}

const faqs = [
  {
    q: "What Is The Reverse Repo Rate In Simple Words?",
    a: "The reverse repo rate is the interest rate associated with the RBI borrowing funds from banks through reverse repo transactions. Banks provide funds and receive eligible securities under the transaction, with an agreement to reverse it later.",
  },
  {
    q: "What Is The Main Difference Between Repo Rate And Reverse Repo Rate?",
    a: "Under the usual RBI liquidity adjustment framework, repo operations provide liquidity to eligible participants, while reverse repo operations absorb liquidity. The direction of the cash flow is opposite.",
  },
  {
    q: "Why Is The Reverse Repo Rate Important?",
    a: "It helps explain the return available on eligible reverse repo transactions and can influence banks' decisions about placing surplus funds with the RBI rather than using them elsewhere.",
  },
  {
    q: "Is The Reverse Repo Rate The Current Floor Of The LAF Corridor In India?",
    a: "No. Since the Standing Deposit Facility was introduced in April 2022, the SDF rate serves as the floor of the LAF corridor. The policy repo rate sits between the SDF floor and the MSF ceiling.",
  },
  {
    q: "Does A Higher Reverse Repo Rate Reduce Liquidity?",
    a: "Other things being equal, a more attractive reverse repo rate can encourage eligible banks to place more surplus funds with the RBI, absorbing liquidity from the banking system. Actual effects depend on operational arrangements and available alternatives.",
  },
  {
    q: "Does The Reverse Repo Rate Directly Determine Savings Account Interest?",
    a: "No. Savings account and fixed deposit rates are set by banks and depend on funding needs, competition, market conditions and product terms. The reverse repo rate may influence broader money-market conditions but does not directly set retail deposit rates.",
  },
  {
    q: "Who Sets The Policy Repo Rate In India?",
    a: "The Reserve Bank of India's Monetary Policy Committee decides the policy repo rate within India's statutory monetary policy framework.",
  },
  {
    q: "Are Repo And Reverse Repo Transactions Collateralised?",
    a: "In the usual repo and reverse repo transactions discussed in the RBI's liquidity adjustment framework, securities are involved in the transaction. The SDF is different: it accepts overnight deposits without collateral.",
  },
];

export default function RepoRateVsReverseRepoRatePage() {
  return (
    <main className="min-h-screen bg-white text-slate-800">
      {/* Hero */}
      <section className="overflow-hidden border-b border-blue-100 bg-gradient-to-br from-blue-50 via-white to-violet-50">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-3 py-1.5 text-sm font-bold text-blue-800 shadow-sm">
              <Landmark size={16} />
              Economics · RBI · Monetary Policy
            </div>
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl">
              Repo Rate Vs Reverse Repo Rate
              <span className="mt-2 block text-blue-700">
                Meaning, Importance, Impact And Differences
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Understand how the RBI injects or absorbs liquidity, why the
              reverse repo rate matters, and how both concepts influence
              India's banking and financial system.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#reverse-repo-meaning"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-700 px-5 py-3 font-bold text-white transition hover:bg-blue-800"
              >
                Understand Reverse Repo <ArrowRight size={18} />
              </a>
              <a
                href="#comparison"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 font-bold text-slate-800 transition hover:bg-slate-50"
              >
                Compare Both Rates
              </a>
            </div>
          </div>

          {/* Hero visual */}
          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-xl shadow-blue-100/50 sm:p-7">
            <h2 className="mb-5 text-xl font-bold text-slate-950">
              Follow The Flow Of Money
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-blue-200 bg-blue-50 p-4">
                <div className="mb-3 flex items-center justify-between">
                  <Landmark className="text-blue-700" size={25} />
                  <ArrowDownLeft className="text-blue-700" size={23} />
                </div>
                <h3 className="font-bold text-slate-950">Repo Operation</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  RBI provides funds to an eligible bank against eligible
                  securities.
                </p>
                <div className="mt-4 rounded-xl bg-white p-3 text-center text-sm font-bold text-blue-800">
                  Funds Flow: RBI → Bank
                </div>
              </div>
              <div className="rounded-2xl border border-violet-200 bg-violet-50 p-4">
                <div className="mb-3 flex items-center justify-between">
                  <Building2 className="text-violet-700" size={25} />
                  <ArrowUpRight className="text-violet-700" size={23} />
                </div>
                <h3 className="font-bold text-slate-950">Reverse Repo</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  An eligible bank places funds with the RBI through a reverse
                  repo transaction.
                </p>
                <div className="mt-4 rounded-xl bg-white p-3 text-center text-sm font-bold text-violet-800">
                  Funds Flow: Bank → RBI
                </div>
              </div>
            </div>
            <div className="mt-4 flex items-start gap-3 rounded-xl bg-amber-50 p-4">
              <Lightbulb className="mt-0.5 shrink-0 text-amber-700" size={21} />
              <p className="text-sm leading-6 text-amber-950">
                <strong>Easy memory trick:</strong> Repo injects liquidity;
                reverse repo absorbs liquidity in the usual RBI liquidity
                operations framework.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reverse repo meaning */}
      <section
        id="reverse-repo-meaning"
        className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8"
      >
        <SectionHeading
          eyebrow="First, Understand Reverse Repo"
          title="What Is The Reverse Repo Rate?"
          description="The reverse repo rate is the interest rate associated with the RBI borrowing funds from banks through reverse repo transactions."
        />
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-violet-200 bg-violet-50 p-6 sm:p-7">
            <div className="mb-4 inline-flex rounded-xl bg-white p-3 text-violet-700 shadow-sm">
              <PiggyBank size={28} />
            </div>
            <h3 className="text-xl font-bold text-slate-950">
              Meaning In Simple Words
            </h3>
            <p className="mt-3 leading-7 text-slate-700">
              Imagine a bank has surplus funds that it does not need to lend
              immediately. In a reverse repo transaction with the RBI, the
              bank supplies funds and receives securities under an agreement
              to reverse the transaction on a specified future date. The rate
              represents the interest associated with those funds.
            </p>
          </div>
          <div className="rounded-2xl border border-blue-200 bg-blue-50 p-6 sm:p-7">
            <div className="mb-4 inline-flex rounded-xl bg-white p-3 text-blue-700 shadow-sm">
              <Waves size={28} />
            </div>
            <h3 className="text-xl font-bold text-slate-950">
              Why Does The RBI Use It?
            </h3>
            <p className="mt-3 leading-7 text-slate-700">
              The RBI needs ways to manage liquidity in the banking system.
              When funds are in surplus, liquidity-absorbing operations can
              help manage short-term money-market conditions and support the
              transmission of monetary policy.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-6 max-w-5xl rounded-2xl border border-slate-200 bg-white p-5">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="mt-1 shrink-0 text-emerald-600" size={22} />
            <p className="leading-7 text-slate-700">
              <strong>Important distinction:</strong> Reverse repo describes a
              liquidity operation. The Standing Deposit Facility (SDF) is a
              separate RBI facility that accepts overnight deposits without
              collateral and currently provides the floor of the LAF corridor.
            </p>
          </div>
        </div>
      </section>
<AdSlot />
      {/* Importance */}
      <section className="border-y border-slate-200 bg-slate-50 py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Why It Matters"
            title="Importance Of The Reverse Repo Rate"
            description="The reverse repo rate helps explain how the RBI can influence liquidity and short-term interest-rate conditions."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <InfoCard
              icon={Waves}
              title="Liquidity Management"
              text="Reverse repo operations can absorb surplus funds from eligible banks, helping the RBI manage liquidity in the banking system."
              color="blue"
            />
            <InfoCard
              icon={Landmark}
              title="Monetary Policy Transmission"
              text="Liquidity conditions and short-term money-market rates influence how monetary policy signals pass through the financial system."
              color="violet"
            />
            <InfoCard
              icon={ShieldCheck}
              title="Short-Term Money Markets"
              text="Liquidity operations help the RBI manage short-term funding conditions and keep overnight market rates aligned with its policy framework."
              color="green"
            />
            <InfoCard
              icon={PiggyBank}
              title="Use Of Surplus Funds"
              text="The return available through eligible operations can influence how banks choose among available uses for their surplus liquidity."
              color="amber"
            />
            <InfoCard
              icon={Banknote}
              title="Financial Stability"
              text="Liquidity management helps the central bank respond to changing cash conditions and reduce the risk of disorderly short-term funding pressures."
              color="rose"
            />
            <InfoCard
              icon={TrendingDown}
              title="Managing Excess Liquidity"
              text="When surplus funds are absorbed, less liquidity remains immediately available for alternative uses, other things being equal."
              color="green"
            />
          </div>
        </div>
      </section>

      {/* Reverse repo impact */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Impact On Banking"
          title="How Does The Reverse Repo Rate Affect The Economy?"
          description="Its most direct influence is on banking-system liquidity and money markets. Effects on consumers and businesses are indirect."
        />
        <div className="grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl border border-emerald-200 bg-white p-6">
            <div className="mb-4 flex items-center gap-3">
              <div className="rounded-xl bg-emerald-50 p-3 text-emerald-700">
                <TrendingUp size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-950">
                If The Reverse Repo Rate Rises
              </h3>
            </div>
            <div className="space-y-3">
              {[
                "Eligible reverse repo transactions may become more attractive to banks.",
                "Banks may place more surplus funds with the RBI, depending on available alternatives.",
                "Liquidity may be absorbed from the banking system.",
                "Short-term money-market conditions may be influenced.",
              ].map((text) => (
                <div key={text} className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 shrink-0 text-emerald-600" size={19} />
                  <p className="text-sm leading-6 text-slate-700">{text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-amber-200 bg-white p-6">
            <div className="mb-4 flex items-center gap-3">
              <div className="rounded-xl bg-amber-50 p-3 text-amber-700">
                <TrendingDown size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-950">
                If The Reverse Repo Rate Falls
              </h3>
            </div>
            <div className="space-y-3">
              {[
                "The return from eligible reverse repo transactions may become less attractive.",
                "Banks may consider alternative uses for surplus funds.",
                "The amount of liquidity absorbed through those operations may change.",
                "The final effect depends on other RBI facilities and market conditions.",
              ].map((text) => (
                <div key={text} className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 shrink-0 text-amber-600" size={19} />
                  <p className="text-sm leading-6 text-slate-700">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5">
          <h3 className="font-bold text-slate-950">
            Does It Directly Change Your Home Loan EMI?
          </h3>
          <p className="mt-2 leading-7 text-slate-600">
            Not directly. A reverse repo rate change is not a one-to-one
            adjustment to a household's loan rate. Retail borrowing costs
            depend on the policy repo rate, applicable lending benchmarks,
            the lender's funding conditions and the specific loan agreement.
          </p>
        </div>
      </section>

      {/* Repo rate meaning */}
      <section className="border-y border-blue-100 bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Now Compare The Other Side"
            title="What Is The Repo Rate?"
            description="The policy repo rate is the key RBI policy rate associated with providing liquidity to eligible participants against eligible collateral under the liquidity adjustment framework."
          />
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-blue-200 bg-white p-6 shadow-sm">
              <div className="mb-4 inline-flex rounded-xl bg-blue-50 p-3 text-blue-700">
                <Building2 size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-950">
                Repo Rate: RBI Provides Funds
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                When an eligible bank needs short-term liquidity, it may obtain
                funds through a repo operation against eligible securities.
                The transaction is reversed on the agreed future date.
              </p>
              <div className="mt-5 rounded-xl bg-blue-50 p-4 text-center font-bold text-blue-800">
                RBI Funds → Eligible Bank
              </div>
            </div>
            <div className="rounded-2xl border border-violet-200 bg-white p-6 shadow-sm">
              <div className="mb-4 inline-flex rounded-xl bg-violet-50 p-3 text-violet-700">
                <Landmark size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-950">
                Reverse Repo: RBI Absorbs Funds
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                In a reverse repo operation, an eligible bank provides funds
                to the RBI in exchange for securities under an agreement to
                reverse the transaction later.
              </p>
              <div className="mt-5 rounded-xl bg-violet-50 p-4 text-center font-bold text-violet-800">
                Eligible Bank Funds → RBI
              </div>
            </div>
          </div>
        </div>
      </section>
<AdSlot />
      {/* Comparison */}
      <section
        id="comparison"
        className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8"
      >
        <SectionHeading
          eyebrow="Side-By-Side Comparison"
          title="Difference Between Repo Rate And Reverse Repo Rate"
          description="The most important difference is the direction of the funds and whether the operation injects or absorbs liquidity."
        />
        <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
          <table className="w-full min-w-[680px] border-collapse text-left">
            <thead>
              <tr className="bg-slate-900 text-white">
                <th className="p-4 text-sm font-bold">Basis</th>
                <th className="p-4 text-sm font-bold">Repo Rate</th>
                <th className="p-4 text-sm font-bold">Reverse Repo Rate</th>
              </tr>
            </thead>
            <tbody>
              {[
                [
                  "Basic Meaning",
                  "Rate associated with RBI providing liquidity",
                  "Rate associated with RBI borrowing funds through reverse repo",
                ],
                [
                  "Direction Of Funds",
                  "RBI → Eligible Bank",
                  "Eligible Bank → RBI",
                ],
                [
                  "Usual Liquidity Effect",
                  "Injects liquidity",
                  "Absorbs liquidity",
                ],
                [
                  "Typical Banking Situation",
                  "Eligible participant needs short-term funds",
                  "Eligible participant has funds to place",
                ],
                [
                  "Main Purpose",
                  "Provide liquidity and guide monetary conditions",
                  "Absorb liquidity through eligible transactions",
                ],
                [
                  "Possible Market Effect",
                  "Can influence short-term borrowing costs",
                  "Can influence incentives for placing surplus funds",
                ],
                [
                  "Retail Loan Impact",
                  "May influence lending rates through transmission",
                  "Indirect influence; does not directly set customer loan rates",
                ],
                [
                  "LAF Corridor Note",
                  "Policy repo rate sits in the corridor",
                  "Fixed reverse repo is not the current corridor floor; SDF is",
                ],
              ].map((row, index) => (
                <tr
                  key={row[0]}
                  className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}
                >
                  <th className="border-t border-slate-200 p-4 text-sm font-bold text-slate-900">
                    {row[0]}
                  </th>
                  <td className="border-t border-slate-200 p-4 text-sm leading-6 text-slate-600">
                    {row[1]}
                  </td>
                  <td className="border-t border-slate-200 p-4 text-sm leading-6 text-slate-600">
                    {row[2]}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-sm leading-6 text-slate-500">
          The table describes the general role of these operations in India's
          monetary framework. Actual RBI operations and rates depend on the
          prevailing policy and liquidity arrangements.
        </p>
      </section>

      {/* Example */}
      <section className="border-y border-amber-200 bg-gradient-to-r from-amber-50 via-white to-orange-50 py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Brief Numerical Example"
            title="How Do Repo And Reverse Repo Work In Practice?"
            description="Use this simplified example to understand the direction of funds. The numbers are hypothetical, not current RBI rates or a live transaction."
          />
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-blue-200 bg-white p-6 shadow-sm">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-xl bg-blue-50 p-3 text-blue-700">
                  <Banknote size={25} />
                </div>
                <h3 className="text-xl font-bold text-slate-950">
                  Example A: Repo
                </h3>
              </div>
              <p className="leading-7 text-slate-600">
                Suppose Bank A needs ₹10 crore for short-term liquidity and
                enters an eligible repo transaction with the RBI at a
                hypothetical annualised rate of 6%.
              </p>
              <div className="my-5 rounded-xl bg-blue-50 p-4">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-sm text-slate-600">Funds Provided</span>
                  <span className="text-lg font-bold text-blue-800">₹10 Crore</span>
                </div>
                <div className="mt-3 flex items-center justify-between gap-3">
                  <span className="text-sm text-slate-600">Hypothetical Rate</span>
                  <span className="font-bold text-slate-900">6% Per Year</span>
                </div>
              </div>
              <p className="text-sm leading-6 text-slate-600">
                <strong>Result:</strong> Funds flow from the RBI to the bank.
                The bank agrees to reverse the securities transaction later
                and pay the agreed financing cost.
              </p>
            </div>
            <div className="rounded-2xl border border-violet-200 bg-white p-6 shadow-sm">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-xl bg-violet-50 p-3 text-violet-700">
                  <LockKeyhole size={25} />
                </div>
                <h3 className="text-xl font-bold text-slate-950">
                  Example B: Reverse Repo
                </h3>
              </div>
              <p className="leading-7 text-slate-600">
                Suppose Bank A instead has ₹10 crore in surplus funds and
                places those funds with the RBI through an eligible reverse
                repo transaction at a hypothetical annualised rate of 5%.
              </p>
              <div className="my-5 rounded-xl bg-violet-50 p-4">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-sm text-slate-600">Funds Provided</span>
                  <span className="text-lg font-bold text-violet-800">₹10 Crore</span>
                </div>
                <div className="mt-3 flex items-center justify-between gap-3">
                  <span className="text-sm text-slate-600">Hypothetical Rate</span>
                  <span className="font-bold text-slate-900">5% Per Year</span>
                </div>
              </div>
              <p className="text-sm leading-6 text-slate-600">
                <strong>Result:</strong> Funds flow from the bank to the RBI.
                The bank earns the agreed return for the transaction period.
              </p>
            </div>
          </div>
          <div className="mt-6 rounded-2xl border border-amber-200 bg-white p-5">
            <div className="flex items-start gap-3">
              <Lightbulb className="mt-1 shrink-0 text-amber-700" size={23} />
              <div>
                <h3 className="font-bold text-slate-950">
                  Remember The Direction, Not Just The Names
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  In these examples, repo is a way for an eligible participant
                  to obtain funds from the RBI, while reverse repo is a way to
                  place funds with the RBI. The actual interest earned or paid
                  depends on the transaction's rate, amount and duration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern framework note */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Important RBI Update"
          title="Reverse Repo Rate Vs Standing Deposit Facility (SDF)"
          description="These concepts are related to liquidity absorption, but they are not identical."
        />
        <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-2">
          <div className="rounded-2xl border border-violet-200 bg-violet-50 p-6">
            <div className="mb-4 inline-flex rounded-xl bg-white p-3 text-violet-700">
              <Coins size={26} />
            </div>
            <h3 className="text-xl font-bold text-slate-950">
              Reverse Repo
            </h3>
            <p className="mt-3 leading-7 text-slate-700">
              A transaction in which the RBI receives funds from an eligible
              counterparty and the securities transaction is reversed at the
              agreed future date. It is a liquidity-absorption mechanism.
            </p>
          </div>
          <div className="rounded-2xl border border-blue-200 bg-blue-50 p-6">
            <div className="mb-4 inline-flex rounded-xl bg-white p-3 text-blue-700">
              <ShieldCheck size={26} />
            </div>
            <h3 className="text-xl font-bold text-slate-950">
              Standing Deposit Facility
            </h3>
            <p className="mt-3 leading-7 text-slate-700">
              The SDF allows eligible participants to place overnight deposits
              with the RBI without collateral. Since its introduction in April
              2022, its rate has served as the floor of the LAF corridor.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-6 max-w-5xl rounded-2xl border border-amber-200 bg-amber-50 p-5">
          <p className="leading-7 text-amber-950">
            <strong>For exams and current affairs:</strong> Learn the classic
            repo-versus-reverse-repo distinction, but also remember the
            modern Indian framework: SDF is the corridor floor and MSF is
            the ceiling, with the policy repo rate in between.
          </p>
        </div>
      </section>

      
<AdSlot />
      {/* FAQs */}
      <section className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Common Questions"
          title="Repo Rate And Reverse Repo Rate FAQs"
          description="Answers to common questions about the two rates and their role in India's monetary policy."
        />
        <div className="space-y-3">
          {faqs.map((faq) => (
            <details
              key={faq.q}
              className="group rounded-xl border border-slate-200 bg-white p-4 open:border-blue-200 open:bg-blue-50/40 sm:p-5"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-slate-900">
                <span>{faq.q}</span>
                <CircleHelp
                  className="shrink-0 text-blue-700 transition group-open:rotate-12"
                  size={20}
                />
              </summary>
              <p className="mt-3 text-sm leading-7 text-slate-600">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Official sources */}
      <section className="border-y border-slate-200 bg-slate-50 py-10">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-slate-950">
            Official Sources And Further Reading
          </h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Check official publications for the latest RBI policy framework,
            rate announcements and liquidity arrangements.
          </p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <a
              href="https://www.rbi.org.in/"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-slate-200 bg-white p-4 transition hover:border-blue-300 hover:shadow-sm"
            >
              <p className="font-bold text-blue-800">Reserve Bank Of India</p>
              <p className="mt-1 text-sm text-slate-600">
                Official policy announcements and monetary framework.
              </p>
            </a>
            <a
              href="https://ies.gov.in/arthapedia/concept/repo-rate-and-reverse-repo-rate"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-slate-200 bg-white p-4 transition hover:border-blue-300 hover:shadow-sm"
            >
              <p className="font-bold text-blue-800">
                Indian Economic Service — Repo And Reverse Repo
              </p>
              <p className="mt-1 text-sm text-slate-600">
                Definitions, mechanics and liquidity-management context.
              </p>
            </a>
            <a
              href="https://systemhealth.rbi.org.in/Scripts/FS_Overview2752.aspx.html"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-slate-200 bg-white p-4 transition hover:border-blue-300 hover:shadow-sm"
            >
              <p className="font-bold text-blue-800">
                RBI — Monetary Framework Overview
              </p>
              <p className="mt-1 text-sm text-slate-600">
                Repo, SDF, MSF and the LAF corridor.
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* Internal links */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Continue Learning"
          title="Explore Related Monetary Policy Topics"
          description="Read the related guides to understand how RBI decisions affect the wider economy."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              title: "What Is Repo Rate?",
              href: "/economics/monetary-policy/repo-rate",
              description:
                "Learn how the policy repo rate affects loans, EMIs, inflation and growth.",
            },
            {
              title: "Expansionary Monetary Policy",
              href: "/economics/monetary-policy/expansionary-monetary-policy",
              description:
                "Understand how easier monetary conditions may support demand.",
            },
            {
              title: "Contractionary Monetary Policy",
              href: "/economics/monetary-policy/contractionary-monetary-policy",
              description:
                "Learn how tighter monetary conditions may help control inflation.",
            },
          ].map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-blue-300 hover:shadow-md"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                <ArrowRight size={21} />
              </div>
              <h3 className="font-bold text-slate-950 group-hover:text-blue-800">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {item.description}
              </p>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-blue-700">
                Read More <ArrowRight size={16} />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs leading-5 text-slate-500">
            Educational content only. The numerical examples are hypothetical
            and do not represent current RBI rates or an actual transaction.
            Refer to the RBI for current policy announcements.
          </p>
        </div>
      </section>
    </main>
  );
}
