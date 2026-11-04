
import Link from "next/link";
import {
  AlertTriangle,
  ArrowDown,
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  GraduationCap,
  Lightbulb,
  MapPin,
  RefreshCw,
  Settings,
  Sprout,
  TrendingDown,
  Users,
  Wallet,
  Wheat,
  Cpu,
  Target,
  ShieldCheck,
  Clock,
  BookOpen,
  Globe,
  Factory,
  Scale,
  Handshake,
} from "lucide-react";
import AdSlot from "../../../../components/AdSlot";


export const metadata = {
  title: "Causes of Unemployment: Major Factors Explained | PriceTag HUB",
  description:
    "Explore the major causes of unemployment, with practical examples and solutions, including slow economic growth, skill gaps, technological change, and seasonal factors.",
};


const causes = [
  {
    number: "01",
    title: "Rapid Population Growth",
    icon: Users,
    color: "blue",
    explanation:
      "When the working-age population grows faster than the number of jobs being created, more people compete for a limited number of employment opportunities. Even when the economy creates new jobs, employment may not grow quickly enough to absorb all new entrants into the labour market.",
    example:
      "Suppose a town has 1,000 people looking for work, but local businesses and industries provide only 700 suitable jobs. The remaining 300 people may stay unemployed. If another 100 people enter the labour market without additional job creation, competition becomes even greater.",
    control: [
      "Improve access to voluntary family planning and reproductive healthcare.",
      "Expand education and skill development so new entrants become employable.",
      "Encourage labour-intensive industries that can generate employment at scale.",
      "Develop new business opportunities in smaller towns and rural areas.",
    ],
    responsibility:
      "Government, educational institutions, employers and economic development agencies.",
  },
  {
    number: "02",
    title: "Lack of Education and Job-Relevant Skills",
    icon: GraduationCap,
    color: "violet",
    explanation:
      "Employers need people with specific knowledge, technical abilities and practical experience. When job seekers do not possess the qualifications or skills required for available positions, vacancies can remain unfilled even while people are searching for work. This is commonly associated with structural unemployment and skills mismatch.",
    example:
      "A manufacturing company introduces automated machinery and needs technicians who can operate and maintain it. However, many local job seekers have only traditional production experience and have not received training in modern equipment. The company struggles to find suitable workers while some existing workers may lose their jobs.",
    control: [
      "Align educational courses with actual labour-market requirements.",
      "Introduce practical vocational and technical training.",
      "Provide apprenticeships and industry-based training programmes.",
      "Offer reskilling programmes to workers affected by changing technology.",
      "Promote digital literacy and continuous professional learning.",
    ],
    responsibility:
      "Schools, colleges, vocational institutions, employers and government skill-development programmes.",
  },
  {
    number: "03",
    title: "Technological Changes and Automation",
    icon: Cpu,
    color: "cyan",
    explanation:
      "Technology improves productivity, but it can also reduce the need for certain types of human labour. Machines, software, robotics and artificial intelligence can perform tasks that previously required employees. Workers whose skills become outdated may find it difficult to secure alternative employment.",
    example:
      "A bank introduces automated systems for routine data entry and transaction processing. It needs fewer employees for repetitive clerical tasks but requires more people with expertise in software, cybersecurity and data management. Employees who cannot transition to these new roles may face unemployment.",
    control: [
      "Provide reskilling and upskilling opportunities before and during technological transitions.",
      "Encourage workers to develop skills that complement technology.",
      "Support new industries and occupations created by technological progress.",
      "Help small businesses adopt technology while maintaining productive employment.",
      "Provide career transition assistance to workers displaced by automation.",
    ],
    responsibility:
      "Employers, governments, educational institutions and technology companies.",
  },
  {
    number: "04",
    title: "Economic Recession and Low Demand",
    icon: TrendingDown,
    color: "rose",
    explanation:
      "During an economic slowdown or recession, consumers and businesses often reduce their spending. Lower demand for goods and services reduces production, business revenue and the need for workers. Companies may freeze recruitment, reduce working hours or lay off employees. This is a major cause of cyclical unemployment.",
    example:
      "Suppose an automobile manufacturer normally sells 10,000 vehicles in a month. During an economic slowdown, demand falls significantly. The company reduces production and may temporarily lay off some workers because it no longer needs the same level of labour.",
    control: [
      "Use appropriate fiscal measures to support aggregate demand during severe downturns.",
      "Use suitable monetary policy to maintain economic and financial stability.",
      "Provide targeted temporary support to vulnerable workers and affected businesses.",
      "Encourage investment and business activity when economic conditions permit.",
      "Strengthen social protection so unemployed households can maintain essential spending.",
    ],
    responsibility:
      "Government, central banks, businesses and financial institutions.",
  },
  {
    number: "05",
    title: "Seasonal Nature of Employment",
    icon: Wheat,
    color: "amber",
    explanation:
      "Some industries require workers only during particular seasons. Employment opportunities increase during periods of high activity and decline during off-seasons. Workers dependent on seasonal industries may remain without work for part of the year.",
    example:
      "Agricultural labourers may find work during sowing, harvesting and other periods of intensive farm activity. Between these periods, the demand for agricultural labour can fall. Similarly, some tourism destinations need more employees during peak holiday seasons than during quieter months.",
    control: [
      "Promote allied agricultural activities such as dairy farming and food processing.",
      "Develop rural industries that provide employment throughout the year.",
      "Encourage multiple cropping where soil, water and climate conditions permit.",
      "Provide seasonal workers with opportunities for alternative employment.",
      "Expand tourism and related services across different seasons where feasible.",
    ],
    responsibility:
      "Agricultural departments, rural development agencies, businesses and local communities.",
  },
  {
    number: "06",
    title: "Insufficient Industrial and Business Development",
    icon: Factory,
    color: "indigo",
    explanation:
      "When industries and businesses are underdeveloped, an economy may not generate enough employment opportunities for its workforce. A lack of investment, infrastructure, reliable electricity, finance, market access or business support can restrict the growth of productive enterprises.",
    example:
      "A district has many educated young people but very few factories, offices or service-sector companies. Most businesses operate on a small scale and cannot hire additional employees. Job seekers may need to migrate to larger cities to find suitable work.",
    control: [
      "Improve roads, electricity, logistics and digital infrastructure.",
      "Make it easier for legitimate businesses to establish and expand operations.",
      "Improve access to finance for viable small businesses and startups.",
      "Encourage manufacturing, services and local entrepreneurship.",
      "Develop industrial clusters based on regional resources and economic strengths.",
    ],
    responsibility:
      "Central and state governments, infrastructure agencies, financial institutions and private investors.",
  },
  {
    number: "07",
    title: "Mismatch Between Job Locations and Workers",
    icon: MapPin,
    color: "emerald",
    explanation:
      "Employment opportunities are not distributed equally across geographical regions. Jobs may be concentrated in metropolitan cities and industrial centres, while job seekers live in rural areas or regions with limited economic activity. Moving may be difficult because of housing costs, family responsibilities, transport limitations or lack of information.",
    example:
      "A software company in Bengaluru has vacancies for qualified developers, while a trained job seeker lives in a small town with few technology companies. Even though suitable work exists elsewhere, relocation expenses, accommodation costs and family responsibilities may prevent the person from accepting the job.",
    control: [
      "Develop industries and services outside major metropolitan areas.",
      "Improve public transport and affordable housing near employment centres.",
      "Strengthen digital job platforms and employment information services.",
      "Support remote and hybrid employment where the nature of work permits.",
      "Provide relocation and placement support where appropriate.",
    ],
    responsibility:
      "Urban planners, state governments, employers and employment services.",
  },
  {
    number: "08",
    title: "Discrimination and Unequal Employment Opportunities",
    icon: Scale,
    color: "pink",
    explanation:
      "Some job seekers face unfair barriers because of gender, disability, age, social background or other irrelevant personal characteristics. Discrimination can prevent qualified people from obtaining jobs, receiving training or progressing in their careers. It reduces the effective use of available human resources.",
    example:
      "A qualified woman applies for a position but is rejected because an employer assumes that women cannot manage the working hours. The decision is unrelated to her actual qualifications or ability to perform the job.",
    control: [
      "Enforce applicable anti-discrimination and equal-opportunity laws.",
      "Use transparent recruitment and promotion criteria.",
      "Improve workplace accessibility and reasonable accommodations for persons with disabilities.",
      "Provide safe working environments and effective grievance mechanisms.",
      "Encourage fair access to training, leadership and career development.",
    ],
    responsibility:
      "Employers, regulators, governments and workplace institutions.",
  },
  {
    number: "09",
    title: "Lack of Access to Finance and Entrepreneurship",
    icon: Wallet,
    color: "orange",
    explanation:
      "Small businesses and potential entrepreneurs often need finance to purchase equipment, rent premises, hire employees and manage daily operations. When viable businesses cannot obtain affordable finance, they may not start or expand. This restricts the creation of additional employment opportunities.",
    example:
      "A skilled electrician wants to establish a small electrical services business and employ two assistants. However, the person cannot arrange the initial capital required for tools, transport and business setup. As a result, the business does not start and those potential jobs are not created.",
    control: [
      "Improve access to suitable and affordable business finance.",
      "Provide entrepreneurship education and business mentoring.",
      "Simplify legitimate business registration and compliance processes.",
      "Improve access to markets and business development services.",
      "Encourage responsible lending and financial literacy.",
    ],
    responsibility:
      "Banks, financial institutions, government agencies and business-support organisations.",
  },
  {
    number: "10",
    title: "Weak Agricultural Productivity and Rural Dependence",
    icon: Sprout,
    color: "lime",
    explanation:
      "In regions where many households depend heavily on agriculture, low productivity, small and fragmented landholdings, inadequate irrigation and limited non-farm employment can restrict earning opportunities. More workers may depend on the same agricultural activity than are economically required. This can contribute to disguised unemployment and underemployment.",
    example:
      "A small family farm needs only three workers to produce its existing output efficiently, but six family members work on it. If three workers leave, total production may remain almost unchanged. The additional workers are therefore not contributing significantly to output, even though they appear to be employed.",
    control: [
      "Improve irrigation, agricultural technology and access to modern farming knowledge.",
      "Expand food processing, storage, dairy and other rural enterprises.",
      "Develop non-farm employment opportunities in villages and small towns.",
      "Improve access to agricultural markets and value chains.",
      "Support skill development and voluntary movement into productive non-farm work.",
    ],
    responsibility:
      "Agricultural departments, rural development institutions, cooperatives and private enterprises.",
  },
  {
    number: "11",
    title: "Lack of Employment Information and Career Guidance",
    icon: BookOpen,
    color: "sky",
    explanation:
      "Job vacancies may exist, but job seekers may not know where to find them or how to apply. Limited access to career guidance, professional networks, reliable recruitment platforms and information about required qualifications can increase the time needed to find suitable employment.",
    example:
      "A diploma holder in electrical engineering lives in a small town. Several nearby industrial units need technicians, but the candidate does not know about their vacancies or the recruitment process. The lack of reliable employment information delays the job search.",
    control: [
      "Strengthen public and private employment exchanges.",
      "Provide career counselling in schools, colleges and training centres.",
      "Promote reliable digital job portals and local recruitment networks.",
      "Help job seekers prepare CVs and develop interview skills.",
      "Improve access to information about apprenticeships and skill requirements.",
    ],
    responsibility:
      "Educational institutions, employers, recruitment agencies and employment services.",
  },
  {
    number: "12",
    title: "Economic and Policy Uncertainty",
    icon: AlertTriangle,
    color: "slate",
    explanation:
      "Uncertainty about economic conditions, regulations, taxation, trade, demand and future business costs can make companies cautious about investing or expanding. When businesses postpone new projects, recruitment and employment growth may also slow down.",
    example:
      "A company is considering opening a new manufacturing unit. However, uncertainty about future demand and operating costs makes the investment difficult to evaluate. The company delays the project, so the jobs that could have been created are also postponed.",
    control: [
      "Maintain predictable and transparent economic regulations.",
      "Improve policy communication and administrative consistency.",
      "Support a stable business and investment environment.",
      "Improve access to reliable economic and market information.",
      "Encourage long-term investment in productive sectors.",
    ],
    responsibility:
      "Government, regulators, businesses and financial institutions.",
  },
];

const colorClasses = {
  blue: "bg-blue-100 text-blue-700",
  violet: "bg-violet-100 text-violet-700",
  cyan: "bg-cyan-100 text-cyan-700",
  rose: "bg-rose-100 text-rose-700",
  amber: "bg-amber-100 text-amber-700",
  indigo: "bg-indigo-100 text-indigo-700",
  emerald: "bg-emerald-100 text-emerald-700",
  pink: "bg-pink-100 text-pink-700",
  orange: "bg-orange-100 text-orange-700",
  lime: "bg-lime-100 text-lime-700",
  sky: "bg-sky-100 text-sky-700",
  slate: "bg-slate-100 text-slate-700",
};

function SectionHeading({ eyebrow, title, description, dark = false }) {
  return (
    <div className="mb-10 max-w-3xl">
      {eyebrow && (
        <p
          className={`mb-3 text-sm font-bold uppercase tracking-widest ${
            dark ? "text-blue-300" : "text-blue-700"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`text-3xl font-bold tracking-tight sm:text-4xl ${
          dark ? "text-white" : "text-slate-950"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base leading-8 ${
            dark ? "text-slate-300" : "text-slate-600"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

function CauseCard({ cause }) {
  const Icon = cause.icon;

  return (
    <article
      id={`cause-${cause.number}`}
      className="scroll-mt-24 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg sm:p-8"
    >
      <div className="flex flex-wrap items-start gap-4">
        <div
          className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${
            colorClasses[cause.color]
          }`}
        >
          <Icon size={27} />
        </div>
        <div className="min-w-0 flex-1">
          <p className="mb-1 text-xs font-bold tracking-widest text-blue-600">
            CAUSE {cause.number}
          </p>
          <h3 className="text-xl font-bold text-slate-950 sm:text-2xl">
            {cause.title}
          </h3>
        </div>
      </div>

      <div className="mt-6">
        <h4 className="mb-2 flex items-center gap-2 font-bold text-slate-900">
          <BookOpen size={17} className="text-blue-600" />
          How Does It Cause Unemployment?
        </h4>
        <p className="leading-8 text-slate-600">{cause.explanation}</p>
      </div>

      <div className="mt-6 rounded-2xl border border-amber-100 bg-amber-50 p-5">
        <h4 className="mb-2 flex items-center gap-2 font-bold text-amber-900">
          <Lightbulb size={18} />
          Practical Example
        </h4>
        <p className="leading-7 text-amber-950">{cause.example}</p>
      </div>

      <div className="mt-6">
        <h4 className="mb-4 flex items-center gap-2 font-bold text-slate-900">
          <ShieldCheck size={18} className="text-emerald-600" />
          How Can This Cause Be Controlled?
        </h4>
        <ul className="space-y-3">
          {cause.control.map((item, index) => (
            <li key={index} className="flex gap-3 text-sm leading-7 text-slate-600">
              <CheckCircle2
                size={18}
                className="mt-1 shrink-0 text-emerald-600"
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6 rounded-xl bg-slate-50 p-4">
        <p className="text-sm leading-6 text-slate-600">
          <span className="font-bold text-slate-800">
            Who Can Help?
          </span>{" "}
          {cause.responsibility}
        </p>
      </div>
    </article>
  );
}

function EmploymentFlowDiagram() {
  const stages = [
    {
      title: "Economic or Structural Problem",
      detail: "Low demand, skill mismatch, limited investment or other barriers",
      color: "bg-rose-100 border-rose-200 text-rose-800",
    },
    {
      title: "Reduced Employment Opportunities",
      detail: "Fewer vacancies, business closures or unsuitable jobs",
      color: "bg-amber-100 border-amber-200 text-amber-800",
    },
    {
      title: "Unemployment or Underemployment",
      detail: "People cannot find suitable work or sufficient working hours",
      color: "bg-orange-100 border-orange-200 text-orange-800",
    },
    {
      title: "Economic and Social Impact",
      detail: "Lower household income, reduced spending and lost production",
      color: "bg-violet-100 border-violet-200 text-violet-800",
    },
  ];

  return (
    <div className="rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-6 sm:p-8">
      <div className="mb-7 text-center">
        <p className="text-sm font-bold uppercase tracking-widest text-blue-700">
          Understanding The Process
        </p>
        <h3 className="mt-2 text-xl font-bold text-slate-950 sm:text-2xl">
          How Do Different Causes Lead To Unemployment?
        </h3>
      </div>

      <div className="mx-auto max-w-2xl">
        {stages.map((stage, index) => (
          <div key={stage.title}>
            <div className={`rounded-2xl border p-5 text-center ${stage.color}`}>
              <p className="font-bold">{stage.title}</p>
              <p className="mt-2 text-sm leading-6 opacity-90">
                {stage.detail}
              </p>
            </div>
            {index !== stages.length - 1 && (
              <div className="flex justify-center py-3">
                <ArrowDown className="text-blue-600" size={25} />
              </div>
            )}
          </div>
        ))}
      </div>
      <p className="mt-6 text-center text-sm leading-7 text-slate-600">
        This is a simplified illustration. Different causes can interact, and
        not every unemployment situation follows exactly the same sequence.
      </p>
    </div>
  );
}

function CauseCategoryDiagram() {
  const groups = [
    {
      title: "Economic Factors",
      color: "bg-blue-600",
      items: "Recession, weak demand and low investment",
      icon: TrendingDown,
    },
    {
      title: "Demographic Factors",
      color: "bg-violet-600",
      items: "Population growth and labour-force expansion",
      icon: Users,
    },
    {
      title: "Technological Factors",
      color: "bg-cyan-600",
      items: "Automation and changing skill requirements",
      icon: Cpu,
    },
    {
      title: "Structural Factors",
      color: "bg-emerald-600",
      items: "Skill, location and industry mismatches",
      icon: Settings,
    },
    {
      title: "Seasonal Factors",
      color: "bg-amber-500",
      items: "Agriculture, tourism and seasonal demand",
      icon: Sprout,
    },
    {
      title: "Social and Institutional Factors",
      color: "bg-pink-600",
      items: "Discrimination, information and access barriers",
      icon: Scale,
    },
  ];

  return (
    <div className="rounded-3xl bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 p-6 sm:p-9">
      <div className="mx-auto mb-8 max-w-2xl text-center">
        <p className="text-sm font-bold uppercase tracking-widest text-blue-300">
          Visual Classification
        </p>
        <h3 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
          Major Categories Of Unemployment Causes
        </h3>
        <p className="mt-3 leading-7 text-slate-300">
          The causes of unemployment can be grouped into broad categories to
          understand their underlying economic and social factors.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {groups.map((group) => {
          const Icon = group.icon;
          return (
            <div
              key={group.title}
              className="rounded-2xl border border-white/10 bg-white/10 p-5"
            >
              <div
                className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl ${group.color} text-white`}
              >
                <Icon size={22} />
              </div>
              <h4 className="font-bold text-white">{group.title}</h4>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                {group.items}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function SolutionDiagram() {
  const solutions = [
    {
      icon: GraduationCap,
      title: "Education And Skills",
      detail: "Develop job-relevant knowledge and practical abilities.",
      color: "bg-blue-100 text-blue-700",
    },
    {
      icon: Building2,
      title: "Business And Investment",
      detail: "Expand productive businesses and employment opportunities.",
      color: "bg-emerald-100 text-emerald-700",
    },
    {
      icon: RefreshCw,
      title: "Economic Stability",
      detail: "Support demand and manage economic downturns appropriately.",
      color: "bg-violet-100 text-violet-700",
    },
    {
      icon: Handshake,
      title: "Equal Opportunities",
      detail: "Remove unfair barriers and improve access to employment.",
      color: "bg-orange-100 text-orange-700",
    },
  ];

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {solutions.map((item) => {
        const Icon = item.icon;
        return (
          <div
            key={item.title}
            className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5"
          >
            <div
              className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${item.color}`}
            >
              <Icon size={23} />
            </div>
            <div>
              <h4 className="font-bold text-slate-900">{item.title}</h4>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                {item.detail}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function CausesOfUnemploymentPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-slate-800">
      {/* HERO */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-indigo-100 px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-bold text-blue-700 shadow-sm">
              <BarChart3 size={16} />
              Economics / Labour Market
            </div>

            <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Causes Of <span className="text-blue-700">Unemployment</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-9 text-slate-600">
              Understand why people remain without work, how economic and
              structural problems create unemployment, and what governments,
              businesses and individuals can do to reduce it.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#major-causes"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-700 px-6 py-3 font-bold text-white shadow-lg shadow-blue-700/20 transition hover:bg-blue-800"
              >
                Explore The Causes <ArrowRight size={18} />
              </a>
              <a
                href="#control-measures"
                className="inline-flex items-center gap-2 rounded-xl border border-blue-200 bg-white px-6 py-3 font-bold text-blue-800 transition hover:bg-blue-50"
              >
                Control Measures
              </a>
            </div>

            <div className="mt-9 flex flex-wrap gap-5 text-sm text-slate-500">
              <span className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-emerald-600" />
                Practical Examples
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-emerald-600" />
                Economic Concepts
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-emerald-600" />
                Solutions
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-5 rounded-full bg-blue-200/40 blur-3xl" />
            <div className="relative rounded-3xl border border-blue-100 bg-white p-6 shadow-2xl shadow-blue-900/10 sm:p-8">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-bold text-slate-500">
                    Labour Market
                  </p>
                  <h2 className="mt-1 text-xl font-bold text-slate-950">
                    Employment Challenges
                  </h2>
                </div>
                <div className="rounded-2xl bg-blue-100 p-3 text-blue-700">
                  <BriefcaseBusiness size={27} />
                </div>
              </div>

              <div className="mt-8 space-y-5">
                {[
                  {
                    label: "Skills Mismatch",
                    value: "Education vs Job Requirements",
                    color: "bg-violet-500",
                    icon: GraduationCap,
                  },
                  {
                    label: "Low Economic Demand",
                    value: "Business Activity",
                    color: "bg-rose-500",
                    icon: TrendingDown,
                  },
                  {
                    label: "Limited Opportunities",
                    value: "Available Jobs",
                    color: "bg-amber-500",
                    icon: Target,
                  },
                  {
                    label: "Technological Change",
                    value: "Changing Work Requirements",
                    color: "bg-cyan-500",
                    icon: Cpu,
                  },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label}>
                      <div className="mb-2 flex items-center justify-between gap-3">
                        <span className="flex items-center gap-2 text-sm font-bold text-slate-800">
                          <Icon size={17} className="text-slate-500" />
                          {item.label}
                        </span>
                        <span className="text-xs text-slate-500">
                          {item.value}
                        </span>
                      </div>
                      <div className="h-2.5 overflow-hidden rounded-full bg-slate-100">
                        <div className={`h-full w-full rounded-full ${item.color}`} />
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 rounded-2xl bg-gradient-to-r from-blue-700 to-indigo-700 p-5 text-white">
                <p className="text-sm font-bold text-blue-100">
                  The Central Economic Challenge
                </p>
                <p className="mt-2 text-lg font-bold leading-7">
                  Creating productive employment opportunities for people
                  seeking work.
                </p>
              </div>
              <p className="mt-4 text-xs leading-5 text-slate-400">
                Conceptual illustration, not measured labour-market data.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="px-5 py-16 sm:px-8 lg:py-20">
        <div className="mx-auto max-w-5xl">
          <SectionHeading
            eyebrow="Understanding The Concept"
            title="What Causes Unemployment?"
            description="Unemployment occurs when people who are willing and available to work cannot find employment. It can arise from insufficient demand for labour, changes in the structure of an economy, seasonal activity, skills mismatches and other barriers."
          />

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-blue-100 bg-blue-50 p-7">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-700 text-white">
                <Users size={25} />
              </div>
              <h3 className="text-xl font-bold text-slate-950">
                Demand For Labour
              </h3>
              <p className="mt-3 leading-8 text-slate-600">
                Businesses hire workers when they need labour to produce goods
                and services. When sales, production or investment decline,
                demand for employees may also fall.
              </p>
            </div>

            <div className="rounded-3xl border border-violet-100 bg-violet-50 p-7">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-violet-700 text-white">
                <GraduationCap size={25} />
              </div>
              <h3 className="text-xl font-bold text-slate-950">
                Supply Of Suitable Labour
              </h3>
              <p className="mt-3 leading-8 text-slate-600">
                Workers need suitable qualifications, skills and access to
                available jobs. A mismatch between what workers offer and what
                employers require can create unemployment.
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border-l-4 border-blue-600 bg-slate-50 p-6">
            <p className="leading-8 text-slate-700">
              <strong className="text-slate-950">Important:</strong> Not every
              person without a job is statistically classified as unemployed.
              Labour-force statistics generally distinguish unemployed people
              who are available for and seeking work from people outside the
              labour force. Definitions and measurement periods vary across
              statistical systems.
            </p>
          </div>
        </div>
      </section>

      {/* CATEGORY DIAGRAM */}
      <section className="px-5 py-10 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <CauseCategoryDiagram />
        </div>
      </section>

      {/* CAUSE AND EFFECT DIAGRAM */}
      <section className="px-5 py-16 sm:px-8 lg:py-20">
        <div className="mx-auto max-w-5xl">
          <SectionHeading
            eyebrow="Cause And Effect"
            title="How Do Different Factors Create Unemployment?"
            description="A problem in the economy or labour market can reduce the number of suitable jobs or prevent workers from accessing them. The following diagram illustrates one simplified pathway."
          />
          <EmploymentFlowDiagram />
        </div>
      </section>
<AdSlot />
<AdSlot />
      {/* MAJOR CAUSES */}
      <section
        id="major-causes"
        className="bg-gradient-to-b from-slate-50 to-white px-5 py-20 sm:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Detailed Explanation"
            title="12 Major Causes Of Unemployment"
            description="Each factor below explains the underlying problem, a practical example and measures that can help reduce its impact. Some factors overlap because unemployment is often caused by several conditions working together."
          />

          <div className="grid gap-7 lg:grid-cols-2">
            {causes.map((cause) => (
              <CauseCard key={cause.number} cause={cause} />
            ))}
          </div>
        </div>
      </section>

      {/* INDIA EXAMPLE */}
      <section className="px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Indian Economic Context"
            title="Understanding Unemployment Through Indian Examples"
            description="India has a large and diverse labour market. Employment challenges differ across agriculture, manufacturing, services, urban areas and rural regions."
          />

          <div className="grid gap-6 md:grid-cols-2">
            <div className="overflow-hidden rounded-3xl border border-emerald-100 bg-white shadow-sm">
              <div className="bg-gradient-to-r from-emerald-600 to-teal-600 p-6 text-white">
                <Sprout size={30} />
                <h3 className="mt-3 text-xl font-bold">
                  Agricultural Employment
                </h3>
              </div>
              <div className="p-6">
                <p className="leading-8 text-slate-600">
                  In agriculture-dependent regions, work requirements change
                  with sowing and harvesting seasons. Some family farms may
                  also have more workers than are needed for their current
                  level of production.
                </p>
                <div className="mt-5 rounded-xl bg-emerald-50 p-4">
                  <p className="font-bold text-emerald-900">
                    Possible Measures
                  </p>
                  <p className="mt-2 text-sm leading-7 text-emerald-900">
                    Rural industries, food processing, dairy, irrigation,
                    agricultural productivity and non-farm employment.
                  </p>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl border border-blue-100 bg-white shadow-sm">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white">
                <Building2 size={30} />
                <h3 className="mt-3 text-xl font-bold">
                  Urban Employment
                </h3>
              </div>
              <div className="p-6">
                <p className="leading-8 text-slate-600">
                  Urban job seekers may face intense competition for formal
                  jobs. Educational qualifications do not always match
                  employer requirements, and suitable jobs may be concentrated
                  in particular cities or industries.
                </p>
                <div className="mt-5 rounded-xl bg-blue-50 p-4">
                  <p className="font-bold text-blue-900">
                    Possible Measures
                  </p>
                  <p className="mt-2 text-sm leading-7 text-blue-900">
                    Apprenticeships, vocational training, small-business
                    development, job placement and industrial investment.
                  </p>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl border border-violet-100 bg-white shadow-sm">
              <div className="bg-gradient-to-r from-violet-600 to-purple-600 p-6 text-white">
                <Cpu size={30} />
                <h3 className="mt-3 text-xl font-bold">
                  Technology And Employment
                </h3>
              </div>
              <div className="p-6">
                <p className="leading-8 text-slate-600">
                  Indian businesses increasingly use digital systems and
                  automation. These technologies can replace some routine
                  tasks while creating demand for technical, analytical and
                  specialised skills.
                </p>
                <div className="mt-5 rounded-xl bg-violet-50 p-4">
                  <p className="font-bold text-violet-900">
                    Possible Measures
                  </p>
                  <p className="mt-2 text-sm leading-7 text-violet-900">
                    Digital literacy, technical education, reskilling and
                    industry-linked training.
                  </p>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl border border-orange-100 bg-white shadow-sm">
              <div className="bg-gradient-to-r from-orange-500 to-amber-500 p-6 text-white">
                <BriefcaseBusiness size={30} />
                <h3 className="mt-3 text-xl font-bold">
                  Small Business Employment
                </h3>
              </div>
              <div className="p-6">
                <p className="leading-8 text-slate-600">
                  Small businesses can generate local employment, but some
                  enterprises struggle with access to finance, infrastructure,
                  skilled workers and customers.
                </p>
                <div className="mt-5 rounded-xl bg-orange-50 p-4">
                  <p className="font-bold text-orange-900">
                    Possible Measures
                  </p>
                  <p className="mt-2 text-sm leading-7 text-orange-900">
                    Suitable credit, business mentoring, better infrastructure
                    and easier access to markets.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <p className="mt-7 text-sm leading-7 text-slate-500">
            These are illustrative economic examples, not claims about the
            prevalence of each cause in a particular Indian state or year.
          </p>
        </div>
      </section>
<AdSlot />
      {/* CONTROL MEASURES */}
      <section
        id="control-measures"
        className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 px-5 py-20 sm:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Reducing Unemployment"
            title="How Can Unemployment Be Controlled?"
            description="Unemployment cannot usually be eliminated through a single policy. Effective solutions require a combination of economic policies, education, business development, employment services and fair labour-market practices."
          />

          <SolutionDiagram />

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <div className="rounded-3xl border border-blue-100 bg-white p-7 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                <Wallet size={25} />
              </div>
              <h3 className="text-xl font-bold text-slate-950">
                Fiscal Policy
              </h3>
              <p className="mt-3 leading-8 text-slate-600">
                Government spending, public investment and taxation can
                influence aggregate demand and economic activity. During a
                downturn, appropriate fiscal support can help stabilise demand
                and employment.
              </p>
            </div>

            <div className="rounded-3xl border border-violet-100 bg-white p-7 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-violet-100 text-violet-700">
                <BarChart3 size={25} />
              </div>
              <h3 className="text-xl font-bold text-slate-950">
                Monetary Policy
              </h3>
              <p className="mt-3 leading-8 text-slate-600">
                Central bank policies influence interest rates, credit
                conditions and inflation. Appropriate monetary policy can
                support economic stability, although its employment effects
                depend on wider economic conditions.
              </p>
            </div>

            <div className="rounded-3xl border border-emerald-100 bg-white p-7 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                <Factory size={25} />
              </div>
              <h3 className="text-xl font-bold text-slate-950">
                Industrial Development
              </h3>
              <p className="mt-3 leading-8 text-slate-600">
                Expanding manufacturing, construction, services and other
                productive industries can increase demand for labour and
                diversify employment opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* IMPORTANT DISTINCTION */}
      <section className="px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <SectionHeading
            eyebrow="Avoiding Conceptual Confusion"
            title="Causes Of Unemployment Vs Types Of Unemployment"
            description="These two concepts are related, but they answer different questions."
          />

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-blue-200 bg-blue-50 p-7">
              <div className="mb-4 inline-flex rounded-xl bg-blue-700 p-3 text-white">
                <AlertTriangle size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-950">
                Causes Of Unemployment
              </h3>
              <p className="mt-3 leading-8 text-slate-600">
                Explain why unemployment occurs. Examples include recession,
                lack of skills, automation, limited investment and seasonal
                demand.
              </p>
              <p className="mt-4 font-bold text-blue-800">
                Main Question: Why Does Unemployment Happen?
              </p>
            </div>

            <div className="rounded-3xl border border-violet-200 bg-violet-50 p-7">
              <div className="mb-4 inline-flex rounded-xl bg-violet-700 p-3 text-white">
                <BarChart3 size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-950">
                Types Of Unemployment
              </h3>
              <p className="mt-3 leading-8 text-slate-600">
                Classify unemployment according to its nature or underlying
                mechanism. Examples include frictional, structural, cyclical
                and seasonal unemployment.
              </p>
              <p className="mt-4 font-bold text-violet-800">
                Main Question: What Kind Of Unemployment Is It?
              </p>
            </div>
          </div>
        </div>
      </section>

     <AdSlot />

      {/* FAQ */}
      <section className="px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-4xl">
          <SectionHeading
            eyebrow="Common Questions"
            title="Frequently Asked Questions About Causes Of Unemployment"
            description="Quick answers to important questions about the factors behind unemployment."
          />

          <div className="space-y-4">
            {[
              {
                question: "What Is The Main Cause Of Unemployment?",
                answer:
                  "There is no single main cause that applies to every economy. Unemployment can result from insufficient aggregate demand, skill mismatches, technological changes, seasonal activity, limited investment and barriers to employment.",
              },
              {
                question: "How Does Population Growth Cause Unemployment?",
                answer:
                  "When the number of people entering the labour force grows faster than employment opportunities, competition for available jobs increases. This can make it difficult for some job seekers to find work.",
              },
              {
                question: "How Does Technology Increase Unemployment?",
                answer:
                  "Automation can replace certain tasks and reduce demand for workers in affected occupations. Workers who lack the skills needed for new roles may experience unemployment during the transition.",
              },
              {
                question: "How Does Education Help Reduce Unemployment?",
                answer:
                  "Relevant education and practical training help workers meet employer requirements, improve their productivity and access a wider range of employment opportunities. Education is most effective when connected to actual labour-market needs.",
              },
              {
                question: "Can Unemployment Be Completely Eliminated?",
                answer:
                  "Completely eliminating unemployment is difficult. Even in healthy economies, people may temporarily be between jobs or searching for suitable work. Economic policies generally aim to reduce avoidable unemployment and support productive employment.",
              },
              {
                question: "What Is The Difference Between Unemployment And Underemployment?",
                answer:
                  "Unemployment generally refers to people without work who are seeking and available for employment. Underemployment includes situations where people are working but their labour is not being fully utilised, such as insufficient working hours or work below their skills.",
              },
            ].map((faq, index) => (
              <details
                key={index}
                className="group rounded-2xl border border-slate-200 bg-white p-5 open:border-blue-200 open:bg-blue-50/50"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-slate-900">
                  {faq.question}
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700 transition group-open:rotate-45">
                    <span className="text-xl">+</span>
                  </span>
                </summary>
                <p className="mt-4 border-t border-slate-200 pt-4 leading-8 text-slate-600">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      
    </main>
  );
}
