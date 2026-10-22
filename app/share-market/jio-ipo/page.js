
"use client";

import {
  ArrowUpRight,
  BarChart3,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  CircleAlert,
  FileText,
  Landmark,
  ShieldAlert,
  TrendingUp,
  Wallet,
  XCircle,
} from "lucide-react";

const financials = [
  {
    year: "FY 2024–25",
    revenue: 11868,
    otherIncome: 44,
    totalIncome: 11912,
    expenses: 10642,
    pbt: 1270,
    pat: 946,
    eps: 1.06,
    assets: 215898,
    equity: 210437,
    liabilities: 5461,
    currentAssets: 2430,
    currentLiabilities: 4129,
    cash: 240,
    depreciation: 661,
  },
  {
    year: "FY 2025–26",
    revenue: 16167,
    otherIncome: 148,
    totalIncome: 16315,
    expenses: 14595,
    pbt: 1720,
    pat: 1281,
    eps: 1.43,
    assets: 218763,
    equity: 212291,
    liabilities: 6472,
    currentAssets: 8285,
    currentLiabilities: 4586,
    cash: 4484,
    depreciation: 863,
  },
];

const ipo = {
  lowPrice: 1065,
  highPrice: 1119,
  lotSize: 12,
  issueSharesCrore: 27,
  existingSharesCrore: 893.903083,
  openDate: "21 October 2026",
  closeDate: "23 October 2026",
  expectedListing: "28 October 2026",
};

const fmt = (value, digits = 0) =>
  new Intl.NumberFormat("en-IN", {
    maximumFractionDigits: digits,
    minimumFractionDigits: digits,
  }).format(value);

const crore = (value) => `₹${fmt(value)} crore`;

const pct = (value) => `${value.toFixed(2)}%`;

const ratio = (value) => `${value.toFixed(2)}x`;

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mb-7 max-w-3xl">
      <p className="mb-2 text-sm font-bold uppercase tracking-[0.16em] text-blue-700">
        {eyebrow}
      </p>
      <h2 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 leading-7 text-slate-600">{description}</p>
      )}
    </div>
  );
}

function MetricCard({ label, value, detail, icon: Icon }) {
  return (
    <div className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm">
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
        <Icon size={20} />
      </div>
      <p className="text-sm font-bold text-slate-500">{label}</p>
      <p className="mt-2 text-2xl font-bold text-slate-950">{value}</p>
      <p className="mt-2 text-sm leading-6 text-slate-600">{detail}</p>
    </div>
  );
}

function RatioCard({ title, formula, values, meaning, interpretation }) {
  return (
    <div className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm">
      <h3 className="text-lg font-bold text-slate-950">{title}</h3>
      <p className="mt-2 rounded-lg bg-blue-50 px-3 py-2 font-mono text-xs leading-5 text-blue-900">
        {formula}
      </p>
      <div className="mt-4 grid grid-cols-2 gap-3">
        {values.map((item) => (
          <div key={item.year} className="rounded-xl bg-slate-50 p-3">
            <p className="text-xs font-bold text-slate-500">{item.year}</p>
            <p className="mt-1 text-xl font-bold text-slate-950">
              {item.value}
            </p>
          </div>
        ))}
      </div>
      <p className="mt-4 text-sm leading-6 text-slate-600">{meaning}</p>
      {interpretation && (
        <p className="mt-3 border-l-2 border-blue-500 pl-3 text-sm leading-6 text-slate-700">
          {interpretation}
        </p>
      )}
    </div>
  );
}

function SourceLink({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-1 font-bold text-blue-700 underline decoration-blue-200 underline-offset-4 hover:text-blue-900"
    >
      {children}
      <ArrowUpRight size={14} />
    </a>
  );
}

export default function JioPlatformsIpoPage() {
  const fy25 = financials[0];
  const fy26 = financials[1];

  // Growth calculations use the audited standalone statements.
  const revenueGrowth =
    ((fy26.revenue - fy25.revenue) / fy25.revenue) * 100;
  const patGrowth = ((fy26.pat - fy25.pat) / fy25.pat) * 100;
  const epsGrowth = ((fy26.eps - fy25.eps) / fy25.eps) * 100;

  // Profit margins use revenue from operations, not total income.
  const patMargin25 = (fy25.pat / fy25.revenue) * 100;
  const patMargin26 = (fy26.pat / fy26.revenue) * 100;
  const pbtMargin25 = (fy25.pbt / fy25.revenue) * 100;
  const pbtMargin26 = (fy26.pbt / fy26.revenue) * 100;
  const expenseRatio25 = (fy25.expenses / fy25.revenue) * 100;
  const expenseRatio26 = (fy26.expenses / fy26.revenue) * 100;

  // Average-balance return ratios.
  const avgEquity25 = (209130 + fy25.equity) / 2;
  const avgEquity26 = (fy25.equity + fy26.equity) / 2;
  const avgAssets25 = (212516 + fy25.assets) / 2;
  const avgAssets26 = (fy25.assets + fy26.assets) / 2;

  const roe25 = (fy25.pat / avgEquity25) * 100;
  const roe26 = (fy26.pat / avgEquity26) * 100;
  const roa25 = (fy25.pat / avgAssets25) * 100;
  const roa26 = (fy26.pat / avgAssets26) * 100;

  // Liquidity and capital structure ratios.
  const currentRatio25 = fy25.currentAssets / fy25.currentLiabilities;
  const currentRatio26 = fy26.currentAssets / fy26.currentLiabilities;
  const cashRatio25 = fy25.cash / fy25.currentLiabilities;
  const cashRatio26 = fy26.cash / fy26.currentLiabilities;
  const equityRatio25 = (fy25.equity / fy25.assets) * 100;
  const equityRatio26 = (fy26.equity / fy26.assets) * 100;
  const liabilitiesToEquity25 = (fy25.liabilities / fy25.equity) * 100;
  const liabilitiesToEquity26 = (fy26.liabilities / fy26.equity) * 100;

  // IPO application amounts and illustrative share valuation.
  const minimumApplication = ipo.highPrice * ipo.lotSize;
  const maximumRetailShares = 14 * ipo.lotSize;
  const maximumRetailApplication = maximumRetailShares * ipo.highPrice;
  const postIssueSharesCrore =
    ipo.existingSharesCrore + ipo.issueSharesCrore;
  const impliedMarketCapLowCrore =
    postIssueSharesCrore * ipo.lowPrice;
  const impliedMarketCapHighCrore =
    postIssueSharesCrore * ipo.highPrice;
  const standalonePeLow = ipo.lowPrice / fy26.eps;
  const standalonePeHigh = ipo.highPrice / fy26.eps;

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-blue-50/70 to-white text-slate-800">
      <article className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Hero */}
        <header className="overflow-hidden rounded-3xl border border-blue-100 bg-gradient-to-br from-white via-blue-50 to-sky-100 p-6 shadow-sm sm:p-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-blue-800">
            <BookOpen size={15} />
            Investor Education · India
          </div>

          <h1 className="mt-5 max-w-4xl text-3xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl">
            Jio Platforms IPO 2026: Financial Analysis, Valuation, Risks and
            Investment Guidance
          </h1>

          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-700 sm:text-lg">
            A document-led review of Jio Platforms Limited, its IPO terms,
            audited standalone financial statements for FY 2024–25 and FY
            2025–26, and the risks an investor should understand before
            applying.
          </p>

          <div className="mt-6 flex flex-wrap gap-2 text-sm">
            <span className="rounded-full border border-blue-200 bg-white px-3 py-2 font-bold text-slate-700">
              Audited standalone figures
            </span>
            <span className="rounded-full border border-blue-200 bg-white px-3 py-2 font-bold text-slate-700">
              Calculations shown
            </span>
            <span className="rounded-full border border-blue-200 bg-white px-3 py-2 font-bold text-slate-700">
              No guaranteed returns
            </span>
          </div>

          <p className="mt-5 text-xs leading-5 text-slate-500">
            IPO information checked for the October 2026 issue window. Confirm
            the final prospectus, live exchange notices and application status
            before acting.
          </p>
        </header>

        {/* Summary */}
        <section className="py-10">
          <SectionHeading
            eyebrow="At A Glance"
            title="What The Available Figures Tell Us"
            description="The standalone accounts show strong year-on-year growth in revenue and profit. However, the standalone balance sheet is dominated by investments, and the IPO valuation must be interpreted with care."
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <MetricCard
              label="FY 2025–26 Revenue"
              value={crore(fy26.revenue)}
              detail={`Up ${pct(revenueGrowth)} from FY 2024–25`}
              icon={TrendingUp}
            />
            <MetricCard
              label="FY 2025–26 Profit After Tax"
              value={crore(fy26.pat)}
              detail={`Up ${pct(patGrowth)} year on year`}
              icon={BarChart3}
            />
            <MetricCard
              label="FY 2025–26 Basic EPS"
              value={`₹${fy26.eps.toFixed(2)}`}
              detail={`Standalone basic earnings per share`}
              icon={Wallet}
            />
            <MetricCard
              label="Minimum IPO Application"
              value={`₹${fmt(minimumApplication)}`}
              detail="12 shares at the upper price band"
              icon={Landmark}
            />
          </div>

          <div className="mt-5 rounded-2xl border border-amber-200 bg-amber-50 p-5">
            <div className="flex items-start gap-3">
              <CircleAlert className="mt-0.5 shrink-0 text-amber-700" size={22} />
              <div>
                <h2 className="font-bold text-amber-950">
                  Read This Before Looking At The Ratios
                </h2>
                <p className="mt-2 text-sm leading-7 text-amber-950/90">
                  This article uses the audited <strong>standalone</strong>{" "}
                  financial statements of Jio Platforms Limited. It does not
                  substitute consolidated group figures or the standalone
                  accounts of Reliance Jio Infocomm Limited. These are
                  different reporting bases. For the IPO valuation, investors
                  should also read the restated consolidated financial
                  information and valuation disclosures in the final offer
                  document.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Company overview */}
        <section className="border-t border-blue-100 py-10">
          <SectionHeading
            eyebrow="Company Overview"
            title="What Is Jio Platforms Limited?"
            description="Jio Platforms Limited is part of the Reliance Industries group and operates as a digital and technology platform holding company, with interests in connectivity and digital services."
          />

          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-bold text-slate-950">
                Ownership And Background
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Jio Platforms Limited was incorporated on 15 November 2019.
                Its promoter is Reliance Industries Limited. Mukesh D. Ambani
                is identified as Chairman in the audited FY 2025–26 standalone
                financial statements, and Akash M. Ambani is identified as
                Managing Director.
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-500">
                Source: company RHP and audited standalone financial statements.
              </p>
            </div>

            <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-bold text-slate-950">
                Why The Business Attracts Attention
              </h3>
              <ul className="mt-3 space-y-3 text-sm leading-6 text-slate-600">
                <li className="flex gap-2">
                  <CheckCircle2 className="mt-1 shrink-0 text-blue-700" size={17} />
                  <span>
                    Digital connectivity and telecom-related services form an
                    important part of the wider Jio ecosystem.
                  </span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="mt-1 shrink-0 text-blue-700" size={17} />
                  <span>
                    The group has opportunities in 5G, digital platforms,
                    enterprise connectivity and technology services.
                  </span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="mt-1 shrink-0 text-blue-700" size={17} />
                  <span>
                    Scale and brand recognition can support competition, but
                    they do not guarantee that the IPO is attractively priced.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-slate-200 bg-white p-5">
            <h3 className="font-bold text-slate-950">
              Subscriber Numbers And Market Share
            </h3>
            <p className="mt-2 leading-7 text-slate-600">
              Do not treat Jio SIM subscribers, JioFiber connections, and Jio
              Platforms Limited's standalone revenue as interchangeable
              measures. They describe different aspects of the business. For
              publication, add the latest dated wireless and home-broadband
              figures from the official RHP and TRAI reports, specifying the
              reporting date and denominator used for any market-share
              calculation. This page intentionally avoids presenting an
              undated subscriber number or an unverified market-share
              percentage as a current fact.
            </p>
          </div>
        </section>

        {/* IPO terms */}
        <section className="border-t border-blue-100 py-10">
          <SectionHeading
            eyebrow="Issue Details"
            title="Jio Platforms IPO: Key Terms"
            description="The figures below reflect the announced issue terms available for the October 2026 offer. Always verify any subsequent exchange notice or final prospectus."
          />

          <div className="overflow-hidden rounded-2xl border border-blue-100 bg-white shadow-sm">
            <div className="grid gap-0 sm:grid-cols-2">
              {[
                ["Price band", "₹1,065–₹1,119 per share"],
                ["Face value", "₹10 per share"],
                ["Minimum lot", "12 shares"],
                ["Issue type", "Fresh issue"],
                ["Fresh shares offered", "Up to 27 crore shares"],
                ["Issue size at upper band", "₹30,213 crore"],
                ["Issue opens", ipo.openDate],
                ["Issue closes", ipo.closeDate],
                ["Expected listing", ipo.expectedListing],
                ["Proposed exchanges", "NSE and BSE"],
              ].map(([label, value], index) => (
                <div
                  key={label}
                  className={`flex flex-col gap-1 p-4 sm:p-5 ${
                    index % 2 === 0 ? "bg-blue-50/50" : "bg-white"
                  } border-b border-blue-50`}
                >
                  <span className="text-sm font-bold text-slate-500">
                    {label}
                  </span>
                  <span className="font-bold text-slate-950">{value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-blue-100 bg-white p-5">
              <div className="flex items-center gap-2">
                <CalendarDays className="text-blue-700" size={20} />
                <h3 className="font-bold text-slate-950">
                  Important Dates
                </h3>
              </div>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Subscription: 21–23 October 2026. The expected allotment,
                refund, demat-credit and listing dates should be checked
                against the registrar and exchange updates rather than treated
                as guaranteed dates.
              </p>
            </div>

            <div className="rounded-2xl border border-blue-100 bg-white p-5">
              <div className="flex items-center gap-2">
                <FileText className="text-blue-700" size={20} />
                <h3 className="font-bold text-slate-950">
                  Offer Document
                </h3>
              </div>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                The Red Herring Prospectus is the main source for issue
                structure, risk factors, use of proceeds, ownership, and
                restated consolidated financial information.
              </p>
              <div className="mt-4">
                <SourceLink href="https://www.sebi.gov.in/filings/public-issues/oct-2026/jio-platforms-limited-rhp_105274.html">
                  Read The SEBI RHP Filing
                </SourceLink>
              </div>
            </div>
          </div>
        </section>

        {/* Application calculations */}
        <section className="border-t border-blue-100 py-10">
          <SectionHeading
            eyebrow="Application Calculator"
            title="Minimum And Maximum Retail Application"
            description="The application amount is the number of shares multiplied by the price used for bidding. At the upper price band, the amount blocked for an application is calculated below."
          />

          <div className="grid gap-4 md:grid-cols-3">
            <MetricCard
              label="Minimum Application"
              value={`₹${fmt(minimumApplication)}`}
              detail={`12 shares × ₹${fmt(ipo.highPrice)}`}
              icon={Wallet}
            />
            <MetricCard
              label="Maximum Retail Shares"
              value={`${maximumRetailShares} shares`}
              detail="14 lots × 12 shares per lot"
              icon={BarChart3}
            />
            <MetricCard
              label="Maximum Retail Application"
              value={`₹${fmt(maximumRetailApplication)}`}
              detail={`${maximumRetailShares} shares × ₹${fmt(ipo.highPrice)}`}
              icon={Landmark}
            />
          </div>

          <div className="mt-5 overflow-x-auto rounded-2xl border border-blue-100 bg-white shadow-sm">
            <table className="w-full min-w-[500px] text-left text-sm">
              <thead className="bg-blue-100 text-slate-800">
                <tr>
                  <th className="p-4 font-bold">Application</th>
                  <th className="p-4 font-bold">Lots</th>
                  <th className="p-4 font-bold">Shares</th>
                  <th className="p-4 font-bold">Amount at ₹1,119</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Minimum", 1, 12, 12 * ipo.highPrice],
                  ["Retail maximum", 14, 168, 168 * ipo.highPrice],
                  ["Small NII entry level", 15, 180, 180 * ipo.highPrice],
                  ["Big NII entry level", 75, 900, 900 * ipo.highPrice],
                ].map(([label, lots, shares, amount]) => (
                  <tr key={label} className="border-t border-blue-50">
                    <td className="p-4 font-bold text-slate-900">{label}</td>
                    <td className="p-4">{lots}</td>
                    <td className="p-4">{shares}</td>
                    <td className="p-4 font-bold">₹{fmt(amount)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-3 text-sm leading-6 text-slate-500">
            The table uses the upper price band for comparison. Investor
            categories and limits are subject to the final offer documents and
            applicable rules. Applying does not guarantee allotment.
          </p>
        </section>

        {/* Standalone statements */}
        <section className="border-t border-blue-100 py-10">
          <SectionHeading
            eyebrow="Audited Financials"
            title="Two-Year Standalone Financial Comparison"
            description="Amounts are in ₹ crore except earnings per share. These values are taken from Jio Platforms Limited's audited standalone financial statements for the years ended 31 March 2025 and 31 March 2026."
          />

          <div className="overflow-x-auto rounded-2xl border border-blue-100 bg-white shadow-sm">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead className="bg-gradient-to-r from-blue-100 to-sky-100 text-slate-900">
                <tr>
                  <th className="p-4 font-bold">Financial Item</th>
                  <th className="p-4 text-right font-bold">FY 2024–25</th>
                  <th className="p-4 text-right font-bold">FY 2025–26</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Revenue from operations", fy25.revenue, fy26.revenue],
                  ["Other income", fy25.otherIncome, fy26.otherIncome],
                  ["Total income", fy25.totalIncome, fy26.totalIncome],
                  ["Total expenses", fy25.expenses, fy26.expenses],
                  ["Profit before tax (PBT)", fy25.pbt, fy26.pbt],
                  ["Profit after tax (PAT)", fy25.pat, fy26.pat],
                  ["Basic EPS", `₹${fy25.eps.toFixed(2)}`, `₹${fy26.eps.toFixed(2)}`],
                  ["Total assets", fy25.assets, fy26.assets],
                  ["Total equity", fy25.equity, fy26.equity],
                  ["Total liabilities", fy25.liabilities, fy26.liabilities],
                  ["Current assets", fy25.currentAssets, fy26.currentAssets],
                  ["Current liabilities", fy25.currentLiabilities, fy26.currentLiabilities],
                  ["Cash and cash equivalents", fy25.cash, fy26.cash],
                  ["Depreciation and amortisation", fy25.depreciation, fy26.depreciation],
                ].map(([label, value25, value26]) => (
                  <tr key={label} className="border-t border-blue-50">
                    <td className="p-4 font-bold text-slate-800">{label}</td>
                    <td className="p-4 text-right tabular-nums">
                      {typeof value25 === "number" && label !== "Basic EPS"
                        ? fmt(value25)
                        : value25}
                    </td>
                    <td className="p-4 text-right font-bold tabular-nums text-slate-950">
                      {typeof value26 === "number" && label !== "Basic EPS"
                        ? fmt(value26)
                        : value26}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-5 rounded-2xl border border-blue-100 bg-white p-5">
            <h3 className="font-bold text-slate-950">
              What Improved Between The Two Years?
            </h3>
            <ul className="mt-3 space-y-3 text-sm leading-7 text-slate-600">
              <li>
                <strong className="text-slate-900">Revenue:</strong> increased
                from ₹11,868 crore to ₹16,167 crore.
              </li>
              <li>
                <strong className="text-slate-900">Profit after tax:</strong>{" "}
                increased from ₹946 crore to ₹1,281 crore.
              </li>
              <li>
                <strong className="text-slate-900">Basic EPS:</strong> increased
                from ₹1.06 to ₹1.43.
              </li>
              <li>
                <strong className="text-slate-900">Cash and cash equivalents:</strong>{" "}
                increased from ₹240 crore to ₹4,484 crore.
              </li>
              <li>
                <strong className="text-slate-900">Current assets:</strong>{" "}
                increased significantly, improving the standalone current
                ratio. This should be read alongside the composition and
                liquidity of the current assets.
              </li>
            </ul>
          </div>
        </section>

        {/* Ratio calculations */}
        <section className="border-t border-blue-100 py-10">
          <SectionHeading
            eyebrow="Ratio Analysis"
            title="Financial Ratios With Calculations"
            description="The formulas below use the standalone financial statements. Return ratios use average opening and closing balance-sheet values where those values are available."
          />

          <div className="grid gap-4 lg:grid-cols-2">
            <RatioCard
              title="1. Revenue Growth"
              formula="(Current-year revenue − Previous-year revenue) ÷ Previous-year revenue × 100"
              values={[
                { year: "FY 2025–26", value: pct(revenueGrowth) },
              ]}
              meaning={`Calculation: (₹${fmt(fy26.revenue)} crore − ₹${fmt(fy25.revenue)} crore) ÷ ₹${fmt(fy25.revenue)} crore × 100 = ${pct(revenueGrowth)}.`}
              interpretation="Revenue grew strongly year on year. Revenue growth alone does not prove that the shares are attractively priced."
            />

            <RatioCard
              title="2. Profit After Tax Growth"
              formula="(Current-year PAT − Previous-year PAT) ÷ Previous-year PAT × 100"
              values={[
                { year: "FY 2025–26", value: pct(patGrowth) },
              ]}
              meaning={`Calculation: (₹${fmt(fy26.pat)} crore − ₹${fmt(fy25.pat)} crore) ÷ ₹${fmt(fy25.pat)} crore × 100 = ${pct(patGrowth)}.`}
              interpretation="Profit grew, but investors should also examine the source of earnings, cash flows, investment income and the consolidated business."
            />

            <RatioCard
              title="3. Net Profit Margin"
              formula="PAT ÷ Revenue from operations × 100"
              values={[
                { year: "FY 2024–25", value: pct(patMargin25) },
                { year: "FY 2025–26", value: pct(patMargin26) },
              ]}
              meaning={`FY25: ₹${fmt(fy25.pat)} ÷ ₹${fmt(fy25.revenue)} × 100 = ${pct(patMargin25)}. FY26: ₹${fmt(fy26.pat)} ÷ ₹${fmt(fy26.revenue)} × 100 = ${pct(patMargin26)}.`}
              interpretation="The margin was broadly stable, with a slight decrease. A growing business can still face cost pressure."
            />

            <RatioCard
              title="4. Profit Before Tax Margin"
              formula="PBT ÷ Revenue from operations × 100"
              values={[
                { year: "FY 2024–25", value: pct(pbtMargin25) },
                { year: "FY 2025–26", value: pct(pbtMargin26) },
              ]}
              meaning={`FY25: ₹${fmt(fy25.pbt)} ÷ ₹${fmt(fy25.revenue)} × 100 = ${pct(pbtMargin25)}. FY26: ₹${fmt(fy26.pbt)} ÷ ₹${fmt(fy26.revenue)} × 100 = ${pct(pbtMargin26)}.`}
              interpretation="This shows pre-tax profit relative to operating revenue; it is not the same as an operating margin or EBITDA margin."
            />

            <RatioCard
              title="5. Total Expense Ratio"
              formula="Total expenses ÷ Revenue from operations × 100"
              values={[
                { year: "FY 2024–25", value: pct(expenseRatio25) },
                { year: "FY 2025–26", value: pct(expenseRatio26) },
              ]}
              meaning={`FY25: ₹${fmt(fy25.expenses)} ÷ ₹${fmt(fy25.revenue)} × 100 = ${pct(expenseRatio25)}. FY26: ₹${fmt(fy26.expenses)} ÷ ₹${fmt(fy26.revenue)} × 100 = ${pct(expenseRatio26)}.`}
              interpretation="Expenses grew slightly faster than revenue as a percentage of revenue. Read the detailed expense notes before drawing conclusions about operating efficiency."
            />

            <RatioCard
              title="6. Return On Equity (ROE)"
              formula="PAT ÷ Average equity × 100"
              values={[
                { year: "FY 2024–25", value: pct(roe25) },
                { year: "FY 2025–26", value: pct(roe26) },
              ]}
              meaning={`FY25: ₹${fmt(fy25.pat)} ÷ average equity of ₹${fmt(avgEquity25)} crore × 100 = ${pct(roe25)}. FY26: ₹${fmt(fy26.pat)} ÷ average equity of ₹${fmt(avgEquity26)} crore × 100 = ${pct(roe26)}.`}
              interpretation="Standalone ROE is low because the standalone equity base is very large relative to standalone PAT. This needs context: a holding company's standalone accounts can differ materially from its consolidated operating results."
            />

            <RatioCard
              title="7. Return On Assets (ROA)"
              formula="PAT ÷ Average total assets × 100"
              values={[
                { year: "FY 2024–25", value: pct(roa25) },
                { year: "FY 2025–26", value: pct(roa26) },
              ]}
              meaning={`FY25: ₹${fmt(fy25.pat)} ÷ average assets of ₹${fmt(avgAssets25)} crore × 100 = ${pct(roa25)}. FY26: ₹${fmt(fy26.pat)} ÷ average assets of ₹${fmt(avgAssets26)} crore × 100 = ${pct(roa26)}.`}
              interpretation="The low standalone ROA reflects the scale of the balance sheet compared with the standalone profit figure. Do not use it alone to judge the entire Jio business."
            />

            <RatioCard
              title="8. Current Ratio"
              formula="Current assets ÷ Current liabilities"
              values={[
                { year: "FY 2024–25", value: ratio(currentRatio25) },
                { year: "FY 2025–26", value: ratio(currentRatio26) },
              ]}
              meaning={`FY25: ₹${fmt(fy25.currentAssets)} crore ÷ ₹${fmt(fy25.currentLiabilities)} crore = ${ratio(currentRatio25)}. FY26: ₹${fmt(fy26.currentAssets)} crore ÷ ₹${fmt(fy26.currentLiabilities)} crore = ${ratio(currentRatio26)}.`}
              interpretation="The ratio improved materially. A higher ratio can indicate better short-term coverage, but asset quality and timing of cash flows still matter."
            />

            <RatioCard
              title="9. Cash Ratio"
              formula="Cash and cash equivalents ÷ Current liabilities"
              values={[
                { year: "FY 2024–25", value: ratio(cashRatio25) },
                { year: "FY 2025–26", value: ratio(cashRatio26) },
              ]}
              meaning={`FY25: ₹${fmt(fy25.cash)} crore ÷ ₹${fmt(fy25.currentLiabilities)} crore = ${ratio(cashRatio25)}. FY26: ₹${fmt(fy26.cash)} crore ÷ ₹${fmt(fy26.currentLiabilities)} crore = ${ratio(cashRatio26)}.`}
              interpretation="Cash coverage improved substantially on the standalone balance sheet. This ratio does not include all possible cash inflows or other current assets."
            />

            <RatioCard
              title="10. Equity To Assets"
              formula="Total equity ÷ Total assets × 100"
              values={[
                { year: "FY 2024–25", value: pct(equityRatio25) },
                { year: "FY 2025–26", value: pct(equityRatio26) },
              ]}
              meaning={`FY25: ₹${fmt(fy25.equity)} crore ÷ ₹${fmt(fy25.assets)} crore × 100 = ${pct(equityRatio25)}. FY26: ₹${fmt(fy26.equity)} crore ÷ ₹${fmt(fy26.assets)} crore × 100 = ${pct(equityRatio26)}.`}
              interpretation="Most reported standalone assets are financed by equity. This is a balance-sheet measure, not proof that the consolidated group has no debt."
            />

            <RatioCard
              title="11. Total Liabilities To Equity"
              formula="Total liabilities ÷ Total equity × 100"
              values={[
                { year: "FY 2024–25", value: pct(liabilitiesToEquity25) },
                { year: "FY 2025–26", value: pct(liabilitiesToEquity26) },
              ]}
              meaning={`FY25: ₹${fmt(fy25.liabilities)} crore ÷ ₹${fmt(fy25.equity)} crore × 100 = ${pct(liabilitiesToEquity25)}. FY26: ₹${fmt(fy26.liabilities)} crore ÷ ₹${fmt(fy26.equity)} crore × 100 = ${pct(liabilitiesToEquity26)}.`}
              interpretation="This ratio uses all reported liabilities, not just interest-bearing borrowings. It must not be described as a conventional debt-to-equity ratio."
            />

            <RatioCard
              title="12. Basic EPS Growth"
              formula="(Current EPS − Previous EPS) ÷ Previous EPS × 100"
              values={[
                { year: "FY 2025–26", value: pct(epsGrowth) },
              ]}
              meaning={`Calculation: (₹${fy26.eps.toFixed(2)} − ₹${fy25.eps.toFixed(2)}) ÷ ₹${fy25.eps.toFixed(2)} × 100 = ${pct(epsGrowth)}.`}
              interpretation="Standalone basic EPS grew year on year. For IPO valuation, compare the offer price with the EPS basis explicitly used in the offer document."
            />
          </div>

          <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5">
            <h3 className="flex items-center gap-2 font-bold text-amber-950">
              <CircleAlert size={20} />
              Why EBITDA And EV/EBITDA Are Not Shown As Exact Ratios
            </h3>
            <p className="mt-2 text-sm leading-7 text-amber-950/90">
              The standalone profit-and-loss statement presents total income,
              total expenses, PBT, tax and PAT, but does not present a separate
              EBIT or EBITDA line. Depreciation and amortisation are disclosed,
              but a reliable EBITDA calculation requires a properly reconciled
              operating-profit and finance-cost basis. Enterprise value also
              requires a consistent treatment of debt, cash and investments.
              Since the standalone balance sheet contains substantial
              investments, calculating an EV/EBITDA multiple from only these
              headline figures would risk misleading readers.
            </p>
          </div>
        </section>

        {/* IPO valuation */}
        <section className="border-t border-blue-100 py-10">
          <SectionHeading
            eyebrow="Valuation"
            title="Does The IPO Price Look Reasonable?"
            description="A good company and a good investment are not necessarily the same thing. The price paid matters because it determines how much future earnings and growth an investor is paying for today."
          />

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
              <h3 className="font-bold text-slate-950">
                Illustrative Post-Issue Equity Value
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Using the pre-issue shares disclosed in the company's capital
                structure and the maximum fresh issue:
              </p>
              <div className="mt-4 space-y-3 rounded-xl bg-blue-50 p-4 text-sm leading-6 text-slate-700">
                <p>
                  Existing shares: approximately{" "}
                  <strong>{fmt(ipo.existingSharesCrore, 2)} crore</strong>
                </p>
                <p>
                  New shares: <strong>{ipo.issueSharesCrore} crore</strong>
                </p>
                <p>
                  Illustrative post-issue total:{" "}
                  <strong>{fmt(postIssueSharesCrore, 2)} crore shares</strong>
                </p>
                <p>
                  At ₹{fmt(ipo.lowPrice)}: approximately{" "}
                  <strong>{crore(impliedMarketCapLowCrore)}</strong>
                </p>
                <p>
                  At ₹{fmt(ipo.highPrice)}: approximately{" "}
                  <strong>{crore(impliedMarketCapHighCrore)}</strong>
                </p>
              </div>
              <p className="mt-3 text-xs leading-5 text-slate-500">
                This is an illustrative equity-value calculation, not a
                complete enterprise valuation. It assumes the maximum new
                share issue and does not adjust for later changes to the final
                share count.
              </p>
            </div>

            <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
              <h3 className="font-bold text-slate-950">
                Standalone P/E Illustration
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                A simple price-to-earnings calculation using the FY 2025–26
                standalone basic EPS of ₹{fy26.eps.toFixed(2)} gives:
              </p>
              <div className="mt-4 space-y-3 rounded-xl bg-blue-50 p-4 text-sm leading-6 text-slate-700">
                <p>
                  At the floor price: ₹{fmt(ipo.lowPrice)} ÷ ₹
                  {fy26.eps.toFixed(2)} ={" "}
                  <strong>{ratio(standalonePeLow)}</strong>
                </p>
                <p>
                  At the cap price: ₹{fmt(ipo.highPrice)} ÷ ₹
                  {fy26.eps.toFixed(2)} ={" "}
                  <strong>{ratio(standalonePeHigh)}</strong>
                </p>
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                These are calculations against standalone EPS only. They are
                not a substitute for the IPO's relevant consolidated earnings
                multiple, and should not be compared with peer P/E ratios
                calculated on a different earnings basis.
              </p>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-blue-100 bg-gradient-to-r from-white to-blue-50 p-6">
            <h3 className="font-bold text-slate-950">
              What To Check In The Final Offer Document
            </h3>
            <ul className="mt-4 grid gap-3 text-sm leading-6 text-slate-700 sm:grid-cols-2">
              <li className="flex gap-2">
                <CheckCircle2 className="mt-1 shrink-0 text-blue-700" size={17} />
                <span>Restated consolidated revenue, profit and EPS.</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="mt-1 shrink-0 text-blue-700" size={17} />
                <span>Post-issue diluted share count and valuation multiples.</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="mt-1 shrink-0 text-blue-700" size={17} />
                <span>Debt and interest obligations at the relevant group entities.</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="mt-1 shrink-0 text-blue-700" size={17} />
                <span>Use of IPO proceeds and debt repayment arrangements.</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="mt-1 shrink-0 text-blue-700" size={17} />
                <span>Operating cash flow, capital expenditure and cash conversion.</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="mt-1 shrink-0 text-blue-700" size={17} />
                <span>Risk factors, competition, regulatory exposure and future investment needs.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Risk assessment */}
        <section className="border-t border-blue-100 py-10">
          <SectionHeading
            eyebrow="Risk Assessment"
            title="Potential Advantages And Risks"
            description="Use these factors to structure a decision, not to predict the share price."
          />

          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-emerald-200 bg-white p-6 shadow-sm">
              <h3 className="flex items-center gap-2 text-lg font-bold text-slate-950">
                <CheckCircle2 className="text-emerald-700" size={21} />
                Potential Positives
              </h3>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
                <li>Revenue and PAT grew in the two standalone years compared here.</li>
                <li>The business is part of a large, established technology and connectivity ecosystem.</li>
                <li>Digital services, 5G and enterprise technology may create opportunities for future growth.</li>
                <li>The IPO can give public investors a direct holding in Jio Platforms Limited, subject to allotment.</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-rose-200 bg-white p-6 shadow-sm">
              <h3 className="flex items-center gap-2 text-lg font-bold text-slate-950">
                <ShieldAlert className="text-rose-700" size={21} />
                Important Risks
              </h3>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
                <li>IPO valuation may already price in substantial future growth.</li>
                <li>Competition, regulation, spectrum costs and technology investment can affect profitability.</li>
                <li>High demand or grey-market premiums do not guarantee listing gains.</li>
                <li>A new listing has no established public-market trading history.</li>
                <li>The standalone accounts do not tell the full story of consolidated operations, debt and cash generation.</li>
                <li>The share price can fall below the issue price, resulting in a loss.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Recommendation */}
        <section className="border-t border-blue-100 py-10">
          <SectionHeading
            eyebrow="Investment Guidance"
            title="Should You Invest In The Jio Platforms IPO?"
            description="A responsible answer depends on valuation, your financial position, your time horizon and how much loss you could withstand."
          />

          <div className="rounded-3xl border border-blue-200 bg-gradient-to-br from-white via-blue-50 to-sky-100 p-6 sm:p-8">
            <h3 className="text-xl font-bold text-slate-950">
              A Cautious, Conditional View
            </h3>
            <p className="mt-4 leading-8 text-slate-700">
              The standalone financial results show positive growth in revenue
              and profit. That is encouraging, but it is not enough on its own
              to conclude that the IPO is cheap or that its shares will rise
              after listing. The very high standalone price-to-EPS illustration
              also shows why investors must examine the correct consolidated
              valuation basis before making a decision.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-emerald-200 bg-white p-5">
                <h4 className="flex items-center gap-2 font-bold text-slate-950">
                  <CheckCircle2 className="text-emerald-700" size={19} />
                  Consider Applying Only If
                </h4>
                <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-600">
                  <li>You have an emergency fund separate from your investment money.</li>
                  <li>You can hold through market volatility and do not need the money soon.</li>
                  <li>You have reviewed the final RHP and understand the valuation.</li>
                  <li>Your portfolio would remain diversified if this share fell materially.</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-rose-200 bg-white p-5">
                <h4 className="flex items-center gap-2 font-bold text-slate-950">
                  <XCircle className="text-rose-700" size={19} />
                  Avoid Or Reduce Exposure If
                </h4>
                <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-600">
                  <li>The application would use nearly all your available savings.</li>
                  <li>You need the money for regular expenses or an emergency.</li>
                  <li>You are applying only because of hype, expected listing gains or social-media predictions.</li>
                  <li>You would be unable to tolerate a significant decline in the share price.</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-blue-200 bg-white p-5">
              <h4 className="font-bold text-slate-950">
                A Practical Rule For A First-Time IPO Investor
              </h4>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Do not borrow money to apply, do not use emergency savings,
                and do not assume that a well-known brand means a risk-free
                investment. If you cannot independently assess the valuation,
                waiting until after listing to study the traded price and
                subsequent results is a valid alternative. Waiting does not
                guarantee a better entry price, but it avoids making a rushed
                decision before a public trading history exists.
              </p>
            </div>
          </div>
        </section>

        {/* Sources and disclosure */}
        <section className="border-t border-blue-100 py-10">
          <SectionHeading
            eyebrow="Sources And Transparency"
            title="Documents Readers Should Check"
            description="Use primary documents wherever possible, and keep the reporting basis visible beside every financial figure."
          />

          <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
            <ul className="space-y-4 text-sm leading-6 text-slate-600">
              <li>
                <strong className="text-slate-900">
                  Jio Platforms IPO / offer documents:
                </strong>{" "}
                <SourceLink href="https://www.sebi.gov.in/filings/public-issues/oct-2026/jio-platforms-limited-rhp_105274.html">
                  SEBI RHP filing
                </SourceLink>
              </li>
              <li>
                <strong className="text-slate-900">
                  Jio Platforms investor relations:
                </strong>{" "}
                <SourceLink href="https://www.jio.com/about/investor-relations/ipo/">
                  IPO information
                </SourceLink>
              </li>
              <li>
                <strong className="text-slate-900">
                  Official financial statements:
                </strong>{" "}
                <SourceLink href="https://www.jio.com/about/investor-relations/financials/">
                  Jio Platforms financials
                </SourceLink>
              </li>
              <li>
                <strong className="text-slate-900">
                  Statutory filings:
                </strong>{" "}
                <SourceLink href="https://www.jio.com/about/investor-relations/statutory-filings/">
                  Company filings
                </SourceLink>
              </li>
              <li>
                <strong className="text-slate-900">
                  Telecom subscriber and market data:
                </strong>{" "}
                <SourceLink href="https://www.trai.gov.in/">
                  Telecom Regulatory Authority of India
                </SourceLink>
              </li>
            </ul>
          </div>

          <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <h3 className="font-bold text-slate-950">
              Financial Education Disclaimer
            </h3>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              This article is for educational purposes and is not personalised
              investment advice, a recommendation to subscribe, or a promise
              of returns. IPO investments can lose money, including through
              a fall in the market price after listing. Financial figures and
              ratios depend on the stated reporting basis; always read the
              official offer documents and consult a SEBI-registered
              investment adviser if you need advice for your circumstances.
            </p>
          </div>

          <p className="mt-6 text-xs leading-5 text-slate-500">
            Financial statements used for the standalone comparison: Jio
            Platforms Limited audited standalone financial statements for the
            years ended 31 March 2025 and 31 March 2026. All calculations on
            this page are derived from the values displayed above and are
            rounded for readability.
          </p>
        </section>
      </article>
    </main>
  );
}
