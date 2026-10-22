
import Link from "next/link";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  CalendarDays,
  Clock3,
  ExternalLink,
  FileText,
  Landmark,
  TrendingUp,
} from "lucide-react";

const marketEvents = [
  {
    date: "21 October 2026",
    title: "Indian markets give up early gains",
    description:
      "The Sensex closed at 73,709.69, down 143.21 points (0.19%), while the Nifty 50 ended at 22,811.35, down 77.60 points (0.34%). Selling across several sectors erased the market's strong early gains.",
    source: "India Today",
    sourceUrl:
      "https://www.indiatoday.in/business/story/market-closing-sensex-nifty-rally-it-stocks-infosys-techm-jio-platforms-ipo-3021968-2026-10-21",
    icon: ArrowDownRight,
  },
  {
    date: "22 October 2026",
    title: "Crude oil prices pressure market sentiment",
    description:
      "Indian shares opened lower amid concerns about crude oil prices above $110 per barrel and their possible effects on inflation, business costs and corporate earnings.",
    source: "Reuters",
    sourceUrl:
      "https://www.reuters.com/world/india/indian-shares-seen-opening-lower-high-oil-prices-fuel-inflation-2026-10-22/",
    icon: TrendingUp,
  },
  {
    date: "21 October 2026",
    title: "Jio Platforms IPO attracts strong initial demand",
    description:
      "The ₹30,213 crore IPO opened for subscription. Economic Times reported that the issue was subscribed 3.16 times within approximately 100 minutes. Strong demand does not guarantee listing gains.",
    source: "The Economic Times",
    sourceUrl:
      "https://economictimes.indiatimes.com/markets/stocks/news/rs-30213-crore-100-minutes-rs-2-5-lakh-crore-how-jio-ipo-broke-3-records-even-before-listing/articleshow/135085644.cms",
    icon: Landmark,
  },
];

export default function ShareMarketPage() {
  return (
    <main className="min-h-screen bg-white text-slate-800">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-blue-100 bg-gradient-to-br from-blue-50 via-white to-sky-100">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
          <div className="grid items-center gap-10 md:grid-cols-[1.35fr_0.65fr]">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-sm font-bold text-blue-700">
                <BarChart3 size={17} />
                PriceTag HUB · Share Market
              </div>

              <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Understand What Is Happening in the Share Market
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                Follow important stock market events, IPO developments,
                company results and the economic factors that influence
                investors. Our aim is to explain what happened, why it matters
                and what risks readers should understand.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#latest-article"
                  className="inline-flex items-center gap-2 rounded-xl bg-blue-700 px-5 py-3 font-bold text-white transition hover:bg-blue-800"
                >
                  Read Latest Article
                  <ArrowRight size={18} />
                </a>

                <a
                  href="#market-events"
                  className="inline-flex items-center gap-2 rounded-xl border border-blue-200 bg-white px-5 py-3 font-bold text-blue-800 transition hover:bg-blue-50"
                >
                  Explore Market Events
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-blue-100 bg-white/90 p-6 shadow-sm sm:p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">
                <TrendingUp size={25} />
              </div>

              <h2 className="mt-5 text-xl font-bold text-slate-900">
                Markets Move for Many Reasons
              </h2>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Company earnings, interest rates, crude oil prices, global
                events and investor expectations can all influence share
                prices. A market rise or fall alone does not explain the
                complete picture.
              </p>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="rounded-2xl bg-blue-50 p-4">
                  <Landmark className="mb-2 text-blue-700" size={21} />
                  <p className="font-bold text-slate-900">Company News</p>
                  <p className="mt-1 text-xs leading-5 text-slate-600">
                    IPOs and earnings
                  </p>
                </div>

                <div className="rounded-2xl bg-sky-50 p-4">
                  <BarChart3 className="mb-2 text-sky-700" size={21} />
                  <p className="font-bold text-slate-900">Market Trends</p>
                  <p className="mt-1 text-xs leading-5 text-slate-600">
                    Indices and sectors
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Market events */}
      <section
        id="market-events"
        className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10"
      >
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-blue-700">
              Market Watch
            </p>
            <h2 className="mt-2 text-2xl font-bold text-slate-950 sm:text-3xl">
              Important Share Market Events
            </h2>
            <p className="mt-3 max-w-2xl leading-7 text-slate-600">
              A short, dated summary of developments affecting Indian markets.
              Always check the original source for the latest updates.
            </p>
          </div>

          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-slate-100 px-3 py-2 text-xs font-bold text-slate-600">
            <CalendarDays size={15} />
            21–22 October 2026
          </span>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {marketEvents.map((event) => {
            const EventIcon = event.icon;

            return (
              <article
                key={event.title}
                className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="rounded-full bg-blue-50 px-3 py-1.5 text-xs font-bold text-blue-700">
                    {event.date}
                  </span>
                  <EventIcon size={21} className="shrink-0 text-blue-700" />
                </div>

                <h3 className="mt-5 text-lg font-bold leading-7 text-slate-900">
                  {event.title}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">
                  {event.description}
                </p>

                <a
                  href={event.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 border-t border-slate-100 pt-4 text-sm font-bold text-blue-700 hover:text-blue-900"
                >
                  Source: {event.source}
                  <ExternalLink size={15} />
                </a>
              </article>
            );
          })}
        </div>

        <p className="mt-5 text-xs leading-6 text-slate-500">
          These are dated news summaries, not live prices or a complete record
          of every market event. Market conditions can change during trading.
        </p>
      </section>

      {/* Featured article */}
      <section
        id="latest-article"
        className="border-y border-blue-100 bg-gradient-to-br from-blue-50 via-white to-indigo-50"
      >
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10">
          <div className="mb-8">
            <p className="text-sm font-bold uppercase tracking-wider text-blue-700">
              Latest Article
            </p>
            <h2 className="mt-2 text-2xl font-bold text-slate-950 sm:text-3xl">
              One Story, Explained in Detail
            </h2>
            <p className="mt-3 max-w-2xl leading-7 text-slate-600">
              We are starting this section with a detailed look at the Jio
              Platforms IPO and the questions investors should consider.
            </p>
          </div>

          <article className="overflow-hidden rounded-3xl border border-blue-100 bg-white shadow-sm">
            <div className="grid md:grid-cols-[0.8fr_1.2fr]">
              <div className="flex min-h-64 flex-col justify-between bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-900 p-7 text-white sm:p-9">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-white/10">
                  <Landmark size={29} />
                </div>

                <div>
                  <span className="inline-flex rounded-full bg-white/15 px-3 py-1.5 text-xs font-bold">
                    IPO Analysis
                  </span>
                  <p className="mt-4 text-sm font-bold text-blue-100">
                    Featured Market Story
                  </p>
                  <p className="mt-2 text-2xl font-bold leading-snug">
                    Jio Platforms IPO 2026
                  </p>
                </div>
              </div>

              <div className="p-6 sm:p-9">
                <div className="flex flex-wrap items-center gap-3 text-xs font-bold text-slate-500">
                  <span className="inline-flex items-center gap-1.5">
                    <CalendarDays size={14} />
                    October 2026
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock3 size={14} />
                    Investor education
                  </span>
                </div>

                <h3 className="mt-4 text-2xl font-bold leading-snug text-slate-950">
                  Jio Platforms IPO 2026: Price, Dates, Valuation and Investment
                  Risks
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  Understand the IPO price band, issue size, company financials,
                  valuation considerations, application basics and the risks
                  involved in investing. Strong subscription demand is not a
                  guarantee of listing profits or long-term returns.
                </p>

                <ul className="mt-5 space-y-2 text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <ArrowRight
                      size={17}
                      className="mt-0.5 shrink-0 text-blue-700"
                    />
                    IPO price band and important dates
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight
                      size={17}
                      className="mt-0.5 shrink-0 text-blue-700"
                    />
                    Financial performance and valuation
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight
                      size={17}
                      className="mt-0.5 shrink-0 text-blue-700"
                    />
                    Potential benefits, risks and investor suitability
                  </li>
                </ul>

                <Link
                  href="/share-market/jio-ipo"
                  className="mt-7 inline-flex items-center gap-2 rounded-xl bg-blue-700 px-5 py-3 font-bold text-white transition hover:bg-blue-800"
                >
                  Read Full Analysis
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Editorial approach */}
      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-blue-700">
              Our Approach
            </p>
            <h2 className="mt-2 text-2xl font-bold text-slate-950 sm:text-3xl">
              News With Context, Not Just Headlines
            </h2>
            <p className="mt-4 leading-8 text-slate-600">
              A headline may tell you that a share price has risen or fallen.
              Understanding the reason, the company's financial position and
              the risks can help you interpret that news more carefully.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                title: "Explain the event",
                description:
                  "Describe what happened, when it happened and which sources reported it.",
              },
              {
                title: "Explain why it matters",
                description:
                  "Connect the event to company performance, the wider economy or investor sentiment.",
              },
              {
                title: "Explain the uncertainty",
                description:
                  "Separate reported facts from estimates, opinions and possible future outcomes.",
              },
            ].map((item, index) => (
              <div
                key={item.title}
                className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-100 font-bold text-blue-800">
                  {index + 1}
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">{item.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 rounded-2xl border border-amber-200 bg-amber-50 p-5 sm:p-6">
          <div className="flex items-start gap-3">
            <FileText className="mt-1 shrink-0 text-amber-700" size={22} />
            <div>
              <h3 className="font-bold text-slate-900">
                Important Investment Disclaimer
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-700">
                This page is for general information and educational purposes
                only. It is not personalised financial advice, a buy or sell
                recommendation, or a promise of returns. Investments in shares
                and IPOs carry risk, including the possible loss of capital.
                Verify offer details and disclosures using official exchange,
                company and regulatory documents before making investment
                decisions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
