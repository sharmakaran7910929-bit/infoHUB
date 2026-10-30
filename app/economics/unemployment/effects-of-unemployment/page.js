
import Link from "next/link";
import {
  Wallet,
  TrendingDown,
  ShoppingCart,
  Scale,
  Brain,
  GraduationCap,
  HeartPulse,
  School,
  Landmark,
  Factory,
  BriefcaseBusiness,
  Laptop,
  ArrowRight,
  AlertTriangle,
  Lightbulb,
  Building2,
  Users,
  BookOpen,
  Activity,
  ShieldCheck,
  Globe,
  Target,
  ChevronRight,
  BarChart3,
  Clock,
} from "lucide-react";
import AdSlot from "../../../../components/AdSlot";

export const metadata = {
  title: "12 Major Effects of Unemployment on the Economy and Society",
  description:
    "Explore 12 major effects of unemployment on individuals, families, businesses and the economy, with practical examples from COVID-19 and digitalisation.",
  keywords: [
    "effects of unemployment",
    "economic effects of unemployment",
    "social effects of unemployment",
    "impact of unemployment on economy",
    "unemployment effects on families",
    "unemployment examples",
    "COVID-19 unemployment impact",
    "digitalisation and unemployment",
  ],
  alternates: {
    canonical:
      "https://www.pricetag.co.in/economics/unemployment/effects-of-unemployment",
  },
  openGraph: {
    title: "12 Major Effects of Unemployment",
    description:
      "Understand how unemployment affects income, poverty, businesses, education, mental well-being and economic growth.",
    url: "https://www.pricetag.co.in/economics/unemployment/effects-of-unemployment",
    type: "article",
  },
};

const effects = [
  {
    number: "01",
    title: "Loss of Household Income and Financial Security",
    icon: Wallet,
    category: "Personal Financial Impact",
    color: "blue",
    meaning:
      "Employment provides regular income that allows individuals and families to meet their financial responsibilities. When a person becomes unemployed, that income may stop while essential expenses continue. Savings can gradually disappear, debt can increase, and families may struggle to maintain their previous standard of living.",
    example:
      "Imagine a family in India where one member earns ₹30,000 per month and is responsible for rent, groceries, school fees and an EMI. If that person loses their job, the family may immediately start using savings or borrowing money to meet monthly expenses.",
    impact:
      "Households may become financially vulnerable, especially when they have limited savings or depend on a single income earner.",
    insight:
      "Unemployment does not remove a family's expenses. It removes or reduces the income available to pay for them.",
  },
  {
    number: "02",
    title: "Increase in Poverty and Declining Living Standards",
    icon: TrendingDown,
    category: "Social and Economic Impact",
    color: "rose",
    meaning:
      "When unemployment continues for a long period, households may move from financial difficulty into poverty. Families may reduce spending on nutritious food, healthcare, education, transportation and other essential needs. Even people who were financially stable before losing their jobs can become vulnerable when their savings are exhausted.",
    example:
      "A worker who previously earned a regular salary may have to reduce household spending after losing employment. The family might move to cheaper accommodation, postpone medical treatment or reduce spending on children's education.",
    impact:
      "Long-term unemployment can increase the number of households struggling to afford basic necessities.",
    insight:
      "A temporary loss of earnings can become a long-term decline in living conditions when employment does not return.",
  },
  {
    number: "03",
    title: "Reduction in Consumer Spending and Aggregate Demand",
    icon: ShoppingCart,
    category: "Macroeconomic Impact",
    color: "orange",
    meaning:
      "Unemployed people generally reduce their spending because they have less money available. When many households cut their purchases at the same time, demand for goods and services falls. Businesses may respond by reducing production, postponing expansion or hiring fewer workers. This can create a cycle in which unemployment further weakens economic activity.",
    example:
      "If thousands of workers in a city lose their jobs, they may spend less at restaurants, clothing stores, shopping malls and local markets. These businesses can then experience lower sales and may reduce staff or working hours.",
    impact:
      "Lower consumer demand can affect retail, manufacturing, transport, hospitality and other industries.",
    insight:
      "Job losses can reduce demand, and weaker demand can cause additional job losses.",
  },
  {
    number: "04",
    title: "Widening Income Inequality",
    icon: Scale,
    category: "Social and Economic Impact",
    color: "purple",
    meaning:
      "Unemployment does not affect every group equally. Workers with limited savings, lower education, fewer marketable skills or jobs in vulnerable sectors may face greater difficulties. Meanwhile, people with financial assets, specialised skills or secure employment may be better protected. This difference can widen the income and opportunity gap in society.",
    example:
      "During a major economic disruption, a worker employed in hospitality may lose their job, while a professional whose work can be performed remotely may continue earning. The difference in financial security can become even greater when the disruption lasts several months.",
    impact:
      "Unequal access to savings, education, technology and new employment opportunities can make recovery more difficult for disadvantaged groups.",
    insight:
      "An economic crisis can affect everyone, but people do not have equal resources to withstand it.",
  },
  {
    number: "05",
    title: "Loss of Skills and Work Experience",
    icon: Brain,
    category: "Career and Productivity Impact",
    color: "cyan",
    meaning:
      "Skills often require regular practice and updating. During a prolonged period without work, individuals may lose familiarity with professional tools, industry practices, technologies and workplace routines. Their existing qualifications may also become less relevant as employers adopt new systems and methods.",
    example:
      "A software professional who remains unemployed for two years may find that employers now expect knowledge of newer programming frameworks, cloud platforms and AI-assisted development tools. The person may need additional training before becoming competitive again.",
    impact:
      "A prolonged gap in employment can make job searching more difficult and may require retraining or skill development.",
    insight:
      "The longer someone remains disconnected from the workplace, the more effort may be needed to return to employment.",
  },
  {
    number: "06",
    title: "Long-Term Career Damage for Young People",
    icon: GraduationCap,
    category: "Youth and Employment Impact",
    color: "indigo",
    meaning:
      "Young people entering the labour market during an economic downturn may struggle to find their first job. This delays their opportunity to gain practical experience, develop professional networks and build a career. Starting a career in a weak labour market can also affect future earnings and job opportunities, even after the economy recovers. Economists often describe this as the scarring effect of unemployment.",
    example:
      "A graduate completing college during the COVID-19 period may have found internships, campus placements and entry-level jobs unavailable. Even after vacancies returned, that graduate could have faced competition from newer graduates as well as experienced applicants.",
    impact:
      "Delayed entry into employment can affect professional experience, career progression and lifetime earning potential.",
    insight:
      "Missing the first opportunity to enter the labour market can affect a person's career long after the original economic crisis has ended.",
  },
  {
    number: "07",
    title: "Mental Health and Psychological Stress",
    icon: HeartPulse,
    category: "Personal and Family Impact",
    color: "rose",
    meaning:
      "Work can provide more than a salary. It can offer routine, identity, social interaction and a sense of purpose. Losing employment may cause uncertainty, frustration, embarrassment, anxiety and reduced self-confidence. Long periods without work can also place pressure on relationships and overall well-being.",
    example:
      "A person who has been applying for jobs for several months without receiving an offer may begin to lose confidence. At the same time, the pressure of meeting household expenses can increase stress and affect everyday life.",
    impact:
      "Unemployment can affect emotional well-being, social relationships and a person's confidence about the future.",
    insight:
      "Unemployment affects not only what a person earns, but also how secure and confident that person feels about the future.",
  },
  {
    number: "08",
    title: "Impact on Family Life, Education and Health",
    icon: School,
    category: "Family and Social Impact",
    color: "emerald",
    meaning:
      "When household income falls, families may have to make difficult choices about education, healthcare and daily necessities. Children may experience interrupted education, reduced access to learning resources or poor nutrition. Adults may postpone medical treatment or avoid necessary expenses because of financial pressure.",
    example:
      "If a parent loses their job, a family may find it difficult to pay school fees, purchase books, arrange private tuition or meet medical expenses. During the pandemic, school closures and household income losses created additional challenges for many children.",
    impact:
      "The consequences of unemployment can affect family stability and the opportunities available to children.",
    insight:
      "The effects of unemployment can extend beyond the unemployed person and influence the opportunities available to the next generation.",
  },
  {
    number: "09",
    title: "Higher Government Expenditure and Lower Tax Revenue",
    icon: Landmark,
    category: "Public Finance Impact",
    color: "amber",
    meaning:
      "Unemployment can put pressure on public finances. When people earn less, governments may collect less income tax and receive lower tax revenue indirectly through reduced consumption and business activity. At the same time, governments may need to spend more on employment programmes, social assistance, training and economic recovery measures.",
    example:
      "During the COVID-19 crisis, governments introduced relief measures to support affected households and businesses. Such measures helped protect livelihoods but also created additional demands on public budgets.",
    impact:
      "High unemployment can limit government resources for infrastructure, healthcare, education and other public services.",
    insight:
      "High unemployment can create a double challenge for government: lower revenue and greater demand for support.",
  },
  {
    number: "10",
    title: "Lower Business Activity, Investment and Productivity",
    icon: Factory,
    category: "Business and Industrial Impact",
    color: "blue",
    meaning:
      "High unemployment can weaken business confidence and reduce demand for products and services. When companies expect fewer customers, they may delay investment in factories, equipment, technology and new branches. A prolonged decline in business activity can also reduce productivity growth and limit the creation of future jobs.",
    example:
      "If a manufacturing company notices falling orders because customers are spending less, it may postpone purchasing new machinery or opening another production unit. This can reduce future hiring opportunities.",
    impact:
      "Lower investment can slow business expansion, production capacity and the creation of new employment opportunities.",
    insight:
      "Unemployment can affect both the current level of production and the economy's ability to expand in the future.",
  },
  {
    number: "11",
    title: "Growth of Informal and Insecure Employment",
    icon: BriefcaseBusiness,
    category: "Labour Market Impact",
    color: "orange",
    meaning:
      "When stable jobs are difficult to find, some people accept temporary, casual, low-paid or informal work simply to earn an income. Such work may offer irregular earnings, limited job security and little access to paid leave, insurance or retirement benefits. As a result, a fall in measured unemployment does not always mean that people have found secure or satisfactory employment.",
    example:
      "A worker who previously had a regular factory job may start taking occasional delivery assignments or daily-wage work after being laid off. The person is earning money again, but may have less predictable income and fewer employment protections.",
    impact:
      "The labour market may experience more insecure employment, irregular earnings and limited social protection.",
    insight:
      "Finding some work is not necessarily the same as finding decent, stable employment.",
  },
  {
    number: "12",
    title: "Digital and Structural Skills Divide",
    icon: Laptop,
    category: "Technology and Future Employment",
    color: "cyan",
    meaning:
      "Economic change and digitalisation can transform the skills employers require. Some routine tasks may be automated, while new jobs emerge in areas such as data analysis, digital marketing, cloud computing and AI. Workers who cannot access suitable training or digital tools may find it harder to move into these new roles. The problem is not simply that technology replaces every worker; it is that the demand for particular tasks and skills changes.",
    example:
      "A business that once relied heavily on manual record-keeping may adopt digital accounting software, automated billing and online customer services. Employees who do not receive training in these systems may find their existing skills less in demand, while workers with digital skills may gain new opportunities.",
    impact:
      "Workers without access to digital education and retraining may face greater difficulty adapting to changing employment requirements.",
    insight:
      "Digitalisation can create employment opportunities, but workers need access to the skills and training required to benefit from them.",
  },
];

const colorStyles = {
  blue: "bg-blue-50 text-blue-700 border-blue-100",
  rose: "bg-rose-50 text-rose-700 border-rose-100",
  orange: "bg-orange-50 text-orange-700 border-orange-100",
  purple: "bg-purple-50 text-purple-700 border-purple-100",
  cyan: "bg-cyan-50 text-cyan-700 border-cyan-100",
  indigo: "bg-indigo-50 text-indigo-700 border-indigo-100",
  emerald: "bg-emerald-50 text-emerald-700 border-emerald-100",
  amber: "bg-amber-50 text-amber-700 border-amber-100",
};

const faqs = [
  {
    question: "What are the major effects of unemployment?",
    answer:
      "The major effects include loss of household income, poverty, lower consumer spending, income inequality, loss of skills, career difficulties, psychological stress, family problems, pressure on government finances, lower business investment, insecure employment and a growing digital skills divide.",
  },
  {
    question: "How does unemployment affect the economy?",
    answer:
      "Unemployment can reduce consumer spending and aggregate demand. Businesses may experience lower sales, reduce production and postpone investment. Governments may collect less tax revenue while facing greater demand for public support. These effects can slow economic growth.",
  },
  {
    question: "How does unemployment affect families?",
    answer:
      "Unemployment can reduce household income and make it harder to pay for food, housing, education and healthcare. It may also increase financial stress and affect family relationships and children's opportunities.",
  },
  {
    question: "How did COVID-19 affect employment?",
    answer:
      "The COVID-19 pandemic disrupted businesses and economic activity across the world. Restrictions and falling demand affected sectors such as travel, hospitality, retail and transport. Many workers experienced job losses, reduced working hours or income disruptions.",
  },
  {
    question: "Does digitalisation cause unemployment?",
    answer:
      "Digitalisation can reduce demand for some routine tasks through automation, but it can also create new jobs and improve productivity. Its employment impact depends on how quickly workers and businesses adapt, whether new opportunities emerge and whether workers can access relevant training.",
  },
  {
    question: "Can unemployment affect economic growth?",
    answer:
      "Yes. High unemployment means that some available labour resources are not being used productively. It can also reduce household spending, business confidence, investment and tax revenue, weakening economic activity and potential growth.",
  },
  {
    question: "What is the difference between unemployment and underemployment?",
    answer:
      "Unemployment generally refers to people without work who are available for and seeking employment under the relevant statistical definition. Underemployment refers to people who are working but are not fully using their available time or skills, or who want more work than they currently have.",
  },
  {
    question: "Can the effects of unemployment continue after someone finds a job?",
    answer:
      "Yes. A person may find work again but still face depleted savings, accumulated debt, interrupted career progression, lower earnings or reduced confidence. Some effects can continue even after employment is restored.",
  },
];

export default function EffectsOfUnemploymentPage() {
  return (
    <main className="min-h-screen bg-white text-slate-800">
      {/* HERO SECTION */}
      <section className="relative isolate overflow-hidden border-b border-blue-100 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="absolute -right-20 -top-20 -z-10 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl" />
        <div className="absolute -bottom-24 -left-20 -z-10 h-72 w-72 rounded-full bg-indigo-200/30 blur-3xl" />

        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-sm font-bold text-blue-700 shadow-sm">
                <Activity size={16} />
                Economics · Unemployment
              </div>

              <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-slate-950 md:text-5xl lg:text-6xl">
                12 Major Effects of{" "}
                <span className="text-blue-700">Unemployment</span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                Unemployment is more than the absence of a job. It can affect
                household income, family life, mental well-being, businesses,
                government finances and the growth of an entire economy.
                Understand its 12 major effects through detailed explanations
                and real-world examples.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#major-effects"
                  className="inline-flex items-center gap-2 rounded-xl bg-blue-700 px-6 py-3 font-bold text-white shadow-lg shadow-blue-700/20 transition hover:bg-blue-800"
                >
                  Explore 12 Effects
                  <ArrowRight size={18} />
                </a>

                <a
                  href="#real-world-examples"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3 font-bold text-slate-700 transition hover:border-blue-300 hover:text-blue-700"
                >
                  Real-World Examples
                </a>
              </div>

              <div className="mt-9 flex flex-wrap gap-x-7 gap-y-3 text-sm font-medium text-slate-500">
                <span className="flex items-center gap-2">
                  <ShieldCheck size={17} className="text-blue-600" />
                  Practical explanations
                </span>
                <span className="flex items-center gap-2">
                  <Globe size={17} className="text-blue-600" />
                  Global examples
                </span>
                <span className="flex items-center gap-2">
                  <BookOpen size={17} className="text-blue-600" />
                  Economics concepts
                </span>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-3xl border border-blue-100 bg-white p-6 shadow-2xl shadow-blue-900/10 md:p-8">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-bold text-slate-500">
                      Understanding unemployment
                    </p>
                    <h2 className="mt-1 text-2xl font-bold text-slate-900">
                      Its wider impact
                    </h2>
                  </div>
                  <div className="rounded-2xl bg-blue-100 p-3 text-blue-700">
                    <BarChart3 size={27} />
                  </div>
                </div>

                <div className="mt-7 space-y-4">
                  {[
                    {
                      label: "Individuals",
                      description: "Income, skills and confidence",
                      icon: Users,
                      width: "w-[90%]",
                    },
                    {
                      label: "Families",
                      description: "Living standards and education",
                      icon: School,
                      width: "w-[78%]",
                    },
                    {
                      label: "Businesses",
                      description: "Sales, production and investment",
                      icon: Building2,
                      width: "w-[68%]",
                    },
                    {
                      label: "Economy",
                      description: "Demand, public finance and growth",
                      icon: Globe,
                      width: "w-[58%]",
                    },
                  ].map((item) => {
                    const Icon = item.icon;

                    return (
                      <div key={item.label}>
                        <div className="mb-2 flex items-center gap-3">
                          <div className="rounded-lg bg-blue-50 p-2 text-blue-700">
                            <Icon size={18} />
                          </div>
                          <div>
                            <p className="font-bold text-slate-800">
                              {item.label}
                            </p>
                            <p className="text-xs text-slate-500">
                              {item.description}
                            </p>
                          </div>
                        </div>
                        <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                          <div
                            className={`${item.width} h-full rounded-full bg-gradient-to-r from-blue-500 to-indigo-500`}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-7 rounded-2xl bg-gradient-to-r from-blue-700 to-indigo-700 p-5 text-white">
                  <p className="text-sm font-medium text-blue-100">
                    The central idea
                  </p>
                  <p className="mt-2 text-lg font-bold leading-relaxed">
                    Unemployment can spread from one person's job loss to
                    families, businesses and the wider economy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="mx-auto max-w-7xl px-5 py-14 md:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr]">
          <div>
            <span className="text-sm font-bold uppercase tracking-wider text-blue-700">
              Understanding the impact
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
              Why Are the Effects of Unemployment So Widespread?
            </h2>
            <p className="mt-5 leading-8 text-slate-600">
              Employment connects individuals to income, businesses to
              customers and governments to tax revenue. When people lose
              employment, the impact may not remain limited to the workers
              who lost their jobs. Their reduced spending can affect local
              businesses, weaker business activity can reduce investment,
              and the government may face additional pressure to provide
              support.
            </p>
            <p className="mt-4 leading-8 text-slate-600">
              This is why economists study unemployment as both a personal
              problem and a macroeconomic challenge. Its consequences can
              appear immediately, such as a loss of monthly income, or
              gradually, such as reduced skills, lower investment and
              long-term career difficulties.
            </p>
          </div>

          <div className="rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-6">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-blue-100 p-3 text-blue-700">
                <Lightbulb size={23} />
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Important Concept
              </h3>
            </div>
            <p className="mt-5 leading-7 text-slate-700">
              Unemployment can create a chain reaction. A person loses income,
              spending decreases, businesses receive fewer customers and
              employers may reduce hiring. This relationship helps explain
              why unemployment can become both a result and a cause of weak
              economic activity.
            </p>
            <div className="mt-5 rounded-xl border border-blue-100 bg-white p-4">
              <p className="text-sm font-bold text-blue-800">
                Remember
              </p>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                The impact depends on the duration of unemployment, the
                affected industry, household savings, social protection and
                the availability of alternative jobs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK NAVIGATION */}
      <section className="border-y border-slate-100 bg-slate-50/80">
        <div className="mx-auto max-w-7xl px-5 py-9 md:px-8">
          <h2 className="text-xl font-bold text-slate-900">
            Explore the 12 Effects
          </h2>
          <p className="mt-2 text-sm leading-6 text-slate-500">
            Select any topic to jump directly to its explanation.
          </p>

          <div className="mt-5 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {effects.map((effect) => (
              <a
                key={effect.number}
                href={`#effect-${effect.number}`}
                className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 transition hover:border-blue-300 hover:bg-blue-50"
              >
                <span className="text-sm font-bold text-blue-700">
                  {effect.number}
                </span>
                <span className="flex-1 text-sm font-bold text-slate-700">
                  {effect.title}
                </span>
                <ChevronRight
                  size={16}
                  className="shrink-0 text-slate-400"
                />
              </a>
            ))}
          </div>
        </div>
      </section>
<AdSlot />
      {/* 12 MAJOR EFFECTS */}
      <section
        id="major-effects"
        className="mx-auto max-w-7xl scroll-mt-24 px-5 py-16 md:px-8"
      >
        <div className="mb-10 max-w-3xl">
          <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-bold text-blue-700">
            Economic and Social Consequences
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
            12 Major Effects of Unemployment
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Each effect explains a different way unemployment influences
            people's lives and economic activity. The examples show how
            these consequences can appear in everyday situations.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {effects.map((effect) => {
            const Icon = effect.icon;

            return (
              <article
                id={`effect-${effect.number}`}
                key={effect.number}
                className="scroll-mt-24 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
              >
                <div className="p-6 md:p-7">
                  <div className="flex items-start gap-4">
                    <div
                      className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border ${colorStyles[effect.color]}`}
                    >
                      <Icon size={26} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-sm font-bold tracking-wider text-blue-700">
                          EFFECT {effect.number}
                        </span>
                        <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-bold text-slate-500">
                          {effect.category}
                        </span>
                      </div>
                      <h3 className="mt-2 text-xl font-bold leading-snug text-slate-950 md:text-2xl">
                        {effect.title}
                      </h3>
                    </div>
                  </div>

                  <div className="mt-6">
                    <h4 className="mb-2 flex items-center gap-2 text-sm font-bold text-slate-900">
                      <BookOpen size={17} className="text-blue-600" />
                      Meaning and Explanation
                    </h4>
                    <p className="text-[15px] leading-7 text-slate-600">
                      {effect.meaning}
                    </p>
                  </div>

                  <div className="mt-6 rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-5">
                    <div className="mb-3 flex items-center gap-2">
                      <div className="rounded-lg bg-white p-2 text-blue-700 shadow-sm">
                        <Target size={18} />
                      </div>
                      <h4 className="font-bold text-blue-900">
                        Practical Example
                      </h4>
                    </div>
                    <p className="text-sm leading-7 text-slate-700">
                      {effect.example}
                    </p>
                  </div>

                  <div className="mt-5 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-xl bg-slate-50 p-4">
                      <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
                        Wider Impact
                      </p>
                      <p className="mt-2 text-sm leading-6 text-slate-700">
                        {effect.impact}
                      </p>
                    </div>

                    <div className="rounded-xl border-l-4 border-blue-500 bg-blue-50/70 p-4">
                      <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-blue-800">
                        <Lightbulb size={15} />
                        Key Insight
                      </p>
                      <p className="mt-2 text-sm font-medium leading-6 text-slate-800">
                        {effect.insight}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
<AdSlot />
      {/* COVID-19 CASE STUDY */}
      <section
        id="real-world-examples"
        className="scroll-mt-24 border-y border-blue-100 bg-gradient-to-br from-blue-50 via-white to-indigo-50"
      >
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-bold text-blue-700">
                <Globe size={16} />
                Real-World Case Study 01
              </span>

              <h2 className="mt-5 text-3xl font-bold leading-tight text-slate-950 md:text-4xl">
                COVID-19: How a Health Crisis Became an Employment Crisis
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                The COVID-19 pandemic demonstrated how a disruption outside
                the labour market can rapidly affect jobs, incomes and
                businesses. Lockdowns, travel restrictions and falling
                demand disrupted economic activities across many countries.
              </p>

              <p className="mt-4 leading-8 text-slate-600">
                The effects were particularly visible in industries that
                depended on physical customers, travel and face-to-face
                services.
              </p>

              <div className="mt-6 rounded-2xl border border-blue-200 bg-white p-5 shadow-sm">
                <p className="text-sm font-bold text-blue-800">
                  What made the crisis significant?
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  It showed how quickly a disruption in business activity
                  can spread to employment, household income, consumer
                  spending and public finances.
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-blue-100 bg-white p-6 shadow-xl shadow-blue-900/5 md:p-8">
              <h3 className="text-xl font-bold text-slate-950">
                How the pandemic affected employment
              </h3>

              <div className="mt-7 space-y-5">
                {[
                  {
                    title: "Business closures",
                    text: "Restrictions disrupted travel, hospitality, retail, entertainment and other customer-facing businesses.",
                    icon: Building2,
                  },
                  {
                    title: "Income losses",
                    text: "Workers experienced job losses, reduced working hours, salary cuts or interruptions in daily earnings.",
                    icon: Wallet,
                  },
                  {
                    title: "Household pressure",
                    text: "Families reduced spending and faced difficulties meeting regular expenses and financial obligations.",
                    icon: Users,
                  },
                  {
                    title: "Unequal impact",
                    text: "Informal workers and people in vulnerable occupations often had fewer financial protections.",
                    icon: Scale,
                  },
                  {
                    title: "Career disruption",
                    text: "Some young people experienced interrupted internships, training, recruitment and entry-level opportunities.",
                    icon: GraduationCap,
                  },
                ].map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div key={item.title} className="flex gap-4">
                      <div className="relative flex flex-col items-center">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                          <Icon size={21} />
                        </div>
                        {index !== 4 && (
                          <div className="mt-2 h-full w-px bg-blue-200" />
                        )}
                      </div>

                      <div className="pb-4">
                        <h4 className="font-bold text-slate-900">
                          {item.title}
                        </h4>
                        <p className="mt-1 text-sm leading-6 text-slate-600">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-3 rounded-xl bg-blue-700 p-5 text-white">
                <p className="text-sm font-bold text-blue-100">
                  Important Economic Lesson
                </p>
                <p className="mt-2 leading-7">
                  A shock to one sector can affect other sectors through
                  reduced income, lower spending, weaker demand and changes
                  in business activity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DIGITALISATION CASE STUDY */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="mb-10 max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-indigo-100 px-4 py-2 text-sm font-bold text-indigo-700">
            <Laptop size={16} />
            Real-World Case Study 02
          </span>

          <h2 className="mt-5 text-3xl font-bold leading-tight text-slate-950 md:text-4xl">
            Digitalisation: When the Skills Required for Jobs Change
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Technology is changing how businesses operate. Digital
            accounting, automated billing, online services, artificial
            intelligence and robotics can change the type and number of
            workers required for certain tasks.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-orange-100 p-3 text-orange-700">
                <Clock size={24} />
              </div>
              <div>
                <p className="text-sm font-bold text-orange-700">
                  Traditional Work Process
                </p>
                <h3 className="text-xl font-bold text-slate-950">
                  Before Digitalisation
                </h3>
              </div>
            </div>

            <div className="mt-7 space-y-4">
              {[
                "Employees manually prepare invoices.",
                "Paper registers are used to record transactions.",
                "Workers perform repetitive data-entry tasks.",
                "Reports are prepared through manual calculations.",
              ].map((item, index) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-xl bg-slate-50 p-4"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-orange-100 text-sm font-bold text-orange-700">
                    {index + 1}
                  </span>
                  <p className="text-sm leading-6 text-slate-700">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-xl border border-orange-100 bg-orange-50 p-4">
              <p className="text-sm font-bold text-orange-900">
                Possible challenge
              </p>
              <p className="mt-2 text-sm leading-6 text-orange-900/80">
                As routine tasks become automated, some existing roles may
                require fewer workers or different skills.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50 to-white p-6 shadow-sm md:p-8">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-blue-100 p-3 text-blue-700">
                <Laptop size={24} />
              </div>
              <div>
                <p className="text-sm font-bold text-blue-700">
                  Modern Work Process
                </p>
                <h3 className="text-xl font-bold text-slate-950">
                  After Digitalisation
                </h3>
              </div>
            </div>

            <div className="mt-7 space-y-4">
              {[
                "Software automatically generates invoices.",
                "Digital systems store and organise records.",
                "Automation reduces repetitive data-entry tasks.",
                "Real-time reports support faster decisions.",
              ].map((item, index) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-blue-100 bg-white p-4"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-700">
                    {index + 1}
                  </span>
                  <p className="text-sm leading-6 text-slate-700">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-xl border border-blue-100 bg-white p-4">
              <p className="text-sm font-bold text-blue-900">
                New opportunities
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Businesses may need people with skills in software
                management, digital accounting, data analysis, cybersecurity
                and technology support.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-2xl border border-indigo-100 bg-gradient-to-r from-indigo-50 via-white to-blue-50 p-6 md:p-8">
          <div className="flex items-start gap-4">
            <div className="rounded-xl bg-indigo-100 p-3 text-indigo-700">
              <Lightbulb size={25} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-950">
                Does Digitalisation Always Increase Unemployment?
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                No. Digitalisation can reduce demand for certain routine
                tasks, but it can also create new occupations, improve
                productivity and help businesses expand. The outcome depends
                on the pace of technological change, the availability of
                training and the ability of workers to move into new roles.
              </p>
              <p className="mt-3 leading-7 text-slate-600">
                For example, an employee whose work involved manual billing
                may need training in digital accounting software. A worker
                who develops these skills may be able to take on more
                specialised responsibilities instead of leaving the labour
                market.
              </p>
            </div>
          </div>
        </div>
      </section>
<AdSlot />
      {/* ECONOMIC CHAIN REACTION */}
      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-wider text-blue-700">
              Macroeconomic Connection
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
              How Unemployment Can Create an Economic Chain Reaction
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              Unemployment can spread through the economy because household
              income, consumer spending, business revenue and employment are
              connected.
            </p>
          </div>

          <div className="mx-auto max-w-3xl">
            <div className="space-y-3">
              {[
                {
                  title: "Job Losses Increase",
                  text: "More people lose their regular employment and income.",
                  color: "border-red-200 bg-red-50 text-red-800",
                },
                {
                  title: "Household Spending Falls",
                  text: "Families reduce purchases because their income is lower.",
                  color: "border-orange-200 bg-orange-50 text-orange-800",
                },
                {
                  title: "Business Sales Decline",
                  text: "Shops, manufacturers and service providers receive fewer orders.",
                  color: "border-amber-200 bg-amber-50 text-amber-800",
                },
                {
                  title: "Production and Investment Weaken",
                  text: "Businesses may reduce output or postpone expansion.",
                  color: "border-blue-200 bg-blue-50 text-blue-800",
                },
                {
                  title: "Further Hiring May Slow",
                  text: "Fewer business opportunities can reduce new recruitment.",
                  color: "border-indigo-200 bg-indigo-50 text-indigo-800",
                },
              ].map((step, index) => (
                <div key={step.title}>
                  <div
                    className={`rounded-2xl border p-5 text-center ${step.color}`}
                  >
                    <p className="text-xs font-bold uppercase tracking-wider opacity-70">
                      Step {index + 1}
                    </p>
                    <h3 className="mt-1 text-lg font-bold">{step.title}</h3>
                    <p className="mt-1 text-sm leading-6 opacity-90">
                      {step.text}
                    </p>
                  </div>

                  {index !== 4 && (
                    <div className="flex justify-center py-2">
                      <ArrowRight
                        className="rotate-90 text-slate-400"
                        size={23}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-7 rounded-2xl border border-blue-200 bg-white p-6 text-center shadow-sm">
              <AlertTriangle
                size={27}
                className="mx-auto text-blue-700"
              />
              <h3 className="mt-3 text-xl font-bold text-slate-950">
                The Feedback Effect
              </h3>
              <p className="mt-2 leading-7 text-slate-600">
                When weaker demand reduces business activity and hiring,
                unemployment may increase further. This feedback effect can
                make economic recovery more difficult.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW TO REDUCE EFFECTS */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <span className="text-sm font-bold uppercase tracking-wider text-blue-700">
              Moving Towards Recovery
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
              How Can the Negative Effects of Unemployment Be Reduced?
            </h2>
            <p className="mt-5 leading-8 text-slate-600">
              Unemployment cannot always be prevented, especially during
              recessions, industry changes or unexpected crises. However,
              governments, businesses, educational institutions and
              individuals can take steps to reduce its consequences and
              improve access to employment.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                title: "Skill Development",
                text: "Provide vocational training, digital education and industry-relevant skills.",
                icon: GraduationCap,
              },
              {
                title: "Support Small Businesses",
                text: "Improve access to finance and encourage businesses to expand and hire.",
                icon: Building2,
              },
              {
                title: "Employment Programmes",
                text: "Create opportunities through public works, job placement and employment initiatives.",
                icon: BriefcaseBusiness,
              },
              {
                title: "Social Protection",
                text: "Support vulnerable households through appropriate relief and social security measures.",
                icon: ShieldCheck,
              },
              {
                title: "Career Guidance",
                text: "Help students and job seekers understand changing labour market requirements.",
                icon: Target,
              },
              {
                title: "Technology Adaptation",
                text: "Help workers learn new tools and transition into emerging occupations.",
                icon: Laptop,
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-blue-200 hover:shadow-md"
                >
                  <div className="mb-3 inline-flex rounded-xl bg-blue-50 p-3 text-blue-700">
                    <Icon size={23} />
                  </div>
                  <h3 className="font-bold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CONCLUSION */}
      <section className="border-y border-blue-100 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="mx-auto max-w-7xl px-5 py-14 md:px-8">
          <div className="rounded-3xl border border-blue-100 bg-white p-7 shadow-lg shadow-blue-900/5 md:p-10">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-blue-100 p-3 text-blue-700">
                <Lightbulb size={25} />
              </div>
              <span className="text-sm font-bold uppercase tracking-wider text-blue-700">
                Key Takeaway
              </span>
            </div>

            <h2 className="mt-5 text-3xl font-bold text-slate-950">
              Unemployment Is More Than a Job Market Problem
            </h2>

            <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-600">
              The effects of unemployment extend beyond the loss of a salary.
              They can influence household financial security, poverty,
              education, mental well-being, business investment, government
              finances and the future productivity of an economy.
            </p>

            <p className="mt-4 max-w-4xl leading-8 text-slate-600">
              The COVID-19 pandemic showed how an unexpected crisis can
              disrupt employment across entire industries. Digitalisation
              demonstrates a different challenge: even when the economy is
              growing, changes in technology can make existing skills less
              relevant and create demand for new capabilities.
            </p>

            <p className="mt-4 max-w-4xl leading-8 text-slate-600">
              Understanding these effects helps explain why reducing
              unemployment requires more than creating vacancies. It also
              requires better education, skill development, business growth,
              social protection and opportunities for workers to adapt to a
              changing economy.
            </p>
          </div>
        </div>
      </section>
<AdSlot />
      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-5 py-16 md:px-8">
        <div className="mb-9 text-center">
          <span className="text-sm font-bold uppercase tracking-wider text-blue-700">
            Frequently Asked Questions
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
            FAQs About the Effects of Unemployment
          </h2>
          <p className="mt-3 leading-7 text-slate-600">
            Common questions about the economic, social and personal
            consequences of unemployment.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={faq.question}
              className="group rounded-2xl border border-slate-200 bg-white p-5 open:border-blue-200 open:bg-blue-50/40"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-slate-900">
                <span className="flex items-start gap-3">
                  <span className="text-sm font-bold text-blue-700">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {faq.question}
                </span>
                <ChevronRight
                  size={19}
                  className="shrink-0 text-blue-700 transition-transform group-open:rotate-90"
                />
              </summary>
              <p className="mt-4 border-t border-slate-100 pt-4 text-sm leading-7 text-slate-600">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </section>

    

     
    </main>
  );
}
