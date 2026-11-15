
import {
  Brain,
  Users,
  Compass,
  Lightbulb,
  Target,
  BookOpen,
  BriefcaseBusiness,
  Heart,
  ShieldCheck,
  AlertTriangle,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Layers,
} from "lucide-react";
import MBTITest from "../../../components/psychology/MBTITest";
import MBTIRobot from "../../../components/psychology/MBTIRobot";
import AdSlot from "../../../components/AdSlot";


export const metadata = {
  title: "MBTI Personality Test – Discover Your Personality Type | PriceTag HUB",
  description:
    "Discover your MBTI personality type with our interactive personality test. Explore all 16 personality types, understand the four personality dimensions and learn more about your preferences, strengths and behaviour.",
};

const dimensions = [
  {
    code: "E / I",
    title: "Extraversion vs. Introversion",
    first: "Extraversion (E)",
    second: "Introversion (I)",
    description:
      "This dimension describes how people tend to direct their attention and where they prefer to focus their energy.",
    firstPoints: [
      "Often enjoys social interaction and group activities.",
      "May think aloud and discuss ideas with others.",
      "Often prefers an active and externally engaging environment.",
    ],
    secondPoints: [
      "Often prefers quiet environments and individual activities.",
      "May think through ideas internally before speaking.",
      "Often values reflection and deeper one-to-one conversations.",
    ],
    example:
      "After a busy week, one person may feel refreshed by meeting friends, while another may prefer spending time alone with a book. Both preferences are normal.",
  },
  {
    code: "S / N",
    title: "Sensing vs. Intuition",
    first: "Sensing (S)",
    second: "Intuition (N)",
    description:
      "This dimension describes how people tend to take in and interpret information.",
    firstPoints: [
      "Focuses on facts, details and observable information.",
      "Often prefers practical examples and proven methods.",
      "Pays attention to present realities and experiences.",
    ],
    secondPoints: [
      "Focuses on patterns, possibilities and connections.",
      "Often enjoys abstract concepts and future possibilities.",
      "May look beyond immediate details to understand the bigger picture.",
    ],
    example:
      "When planning a business, a sensing preference may focus first on costs, customers and current market data. An intuitive preference may begin by exploring future opportunities and new business ideas.",
  },
  {
    code: "T / F",
    title: "Thinking vs. Feeling",
    first: "Thinking (T)",
    second: "Feeling (F)",
    description:
      "This dimension describes the preferences people may use when evaluating information and making decisions.",
    firstPoints: [
      "Often prioritizes logical consistency and objective analysis.",
      "May focus on rules, evidence and measurable outcomes.",
      "Often evaluates decisions through cause-and-effect reasoning.",
    ],
    secondPoints: [
      "Often considers personal values and human impact.",
      "May pay attention to how decisions affect other people.",
      "Often considers harmony and individual circumstances.",
    ],
    example:
      "If a team member misses a deadline, one person may first examine the reasons and consequences. Another may first consider the person's circumstances and how to support them. Both can make thoughtful decisions.",
  },
  {
    code: "J / P",
    title: "Judging vs. Perceiving",
    first: "Judging (J)",
    second: "Perceiving (P)",
    description:
      "This dimension describes how people tend to approach organization, planning and their external environment.",
    firstPoints: [
      "Often prefers schedules, structure and clear plans.",
      "Likes to organize tasks and reach decisions.",
      "May feel comfortable when activities are settled in advance.",
    ],
    secondPoints: [
      "Often prefers flexibility and open possibilities.",
      "May adapt plans as new information becomes available.",
      "Likes keeping options open rather than deciding too early.",
    ],
    example:
      "Before a holiday, one person may prepare a detailed itinerary and book everything in advance. Another may prefer deciding activities during the trip.",
  },
];

const types = [
  ["ISTJ", "The Logistician", "Practical, responsible and organized."],
  ["ISFJ", "The Defender", "Supportive, considerate and dependable."],
  ["INFJ", "The Advocate", "Insightful, idealistic and values-driven."],
  ["INTJ", "The Architect", "Strategic, independent and analytical."],
  ["ISTP", "The Virtuoso", "Practical, adaptable and problem-solving."],
  ["ISFP", "The Adventurer", "Sensitive, creative and flexible."],
  ["INFP", "The Mediator", "Reflective, imaginative and idealistic."],
  ["INTP", "The Logician", "Curious, analytical and theoretical."],
  ["ESTP", "The Entrepreneur", "Energetic, practical and action-oriented."],
  ["ESFP", "The Entertainer", "Sociable, expressive and spontaneous."],
  ["ENFP", "The Campaigner", "Enthusiastic, imaginative and people-oriented."],
  ["ENTP", "The Debater", "Inventive, curious and intellectually exploratory."],
  ["ESTJ", "The Executive", "Organized, decisive and task-oriented."],
  ["ESFJ", "The Consul", "Cooperative, warm and community-minded."],
  ["ENFJ", "The Protagonist", "Encouraging, empathetic and people-focused."],
  ["ENTJ", "The Commander", "Strategic, assertive and goal-oriented."],
];

const applications = [
  {
    icon: BookOpen,
    title: "Education and Learning",
    text: "MBTI preferences can encourage students to reflect on how they approach information, independent study, group discussions and problem-solving.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Career Exploration",
    text: "People sometimes use personality preferences to explore work environments and activities they may enjoy. However, personality type should never determine someone's career eligibility or potential.",
  },
  {
    icon: Users,
    title: "Relationships and Communication",
    text: "Understanding different preferences can encourage people to appreciate different communication styles and ways of approaching decisions.",
  },
  {
    icon: Target,
    title: "Personal Development",
    text: "The framework can help people reflect on their habits, preferences, strengths and areas where they might want to develop new skills.",
  },
];

const faqs = [
  {
    q: "What does MBTI stand for?",
    a: "MBTI stands for Myers-Briggs Type Indicator. It is a personality assessment framework that describes preferences across four dimensions and combines them into 16 personality types.",
  },
  {
    q: "How many MBTI personality types are there?",
    a: "There are 16 types, created by combining one preference from each of four dimensions: E or I, S or N, T or F, and J or P.",
  },
  {
    q: "Can your MBTI personality type change?",
    a: "People may report different preferences when taking an assessment at different times. Personality development, life experiences, circumstances and measurement limitations can influence responses. The framework should not be treated as a permanent label.",
  },
  {
    q: "Is MBTI scientifically accurate?",
    a: "MBTI has a recognizable theoretical framework and is widely used for self-reflection. However, researchers have raised concerns about its reliability, validity and the way it divides continuous personality characteristics into categories. It should not be treated as a definitive scientific measurement of personality.",
  },
  {
    q: "Is MBTI the same as the Big Five personality model?",
    a: "No. MBTI organizes preferences into 16 types using four dimensions. The Big Five model measures five broad personality traits on continuous scales: openness, conscientiousness, extraversion, agreeableness and neuroticism.",
  },
  {
    q: "Can MBTI identify the best career for someone?",
    a: "No. It may provide ideas for personal reflection, but career decisions should also consider interests, abilities, qualifications, values, opportunities and experience.",
  },
  {
    q: "Is introversion the same as shyness?",
    a: "No. Introversion is a preference related to attention and energy. Shyness generally involves discomfort or anxiety in social situations. An introverted person can be confident and socially skilled.",
  },
  {
    q: "Is this website's MBTI assessment an official test?",
    a: "No. The interactive assessment on this page is an original educational self-reflection exercise inspired by the four MBTI dimensions. It is not an official MBTI instrument and does not establish a scientifically verified personality type.",
  },
];

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mb-8 max-w-3xl">
      {eyebrow && (
        <p className="mb-2 text-sm font-bold uppercase tracking-wider text-indigo-600">
          {eyebrow}
        </p>
      )}
      <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 leading-7 text-slate-600">{description}</p>
      )}
    </div>
  );
}

export default function MBTIPersonalityPage() {
  return (
    <main className="min-h-screen bg-white text-slate-800">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">

       
{/* Hero */}
<section className="relative grid grid-cols-1 items-center gap-8 overflow-hidden rounded-3xl border border-indigo-100 bg-gradient-to-br from-indigo-50 via-white to-blue-50 p-6 sm:p-10 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-6">

  {/* Hero Content */}
  <div className="relative z-10 w-full max-w-3xl">
    <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white px-3 py-1.5 text-sm font-bold text-indigo-700">
      <Brain size={16} />
      Personality Psychology
    </span>

    <h1 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
      MBTI Personality Test: Understanding the 16 Personality Types
    </h1>

    <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
      Why do some people enjoy social gatherings while others prefer
      quiet reflection? Why do some focus on facts while others explore
      possibilities? The Myers-Briggs Type Indicator provides a
      framework for understanding these differences in personality
      preferences.
    </p>

    <div className="mt-7 flex flex-wrap gap-3">
      <a
        href="#interactive-test"
        className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 font-bold text-white transition hover:bg-indigo-700"
      >
        Explore Your Preferences <ArrowRight size={18} />
      </a>

      <a
        href="#four-dimensions"
        className="rounded-xl border border-indigo-200 bg-white px-5 py-3 font-bold text-indigo-700 transition hover:bg-indigo-50"
      >
        Learn the Four Dimensions
      </a>
    </div>
  </div>

  {/* Responsive Robot */}
  <div className="relative z-10 mx-auto flex w-full min-w-0 items-center justify-center lg:w-[320px]">
    <MBTIRobot />
  </div>

</section>


        {/* Introduction */}
        <section className="mt-14">
          <SectionHeading eyebrow="Introduction" title="What Is the MBTI Personality Test?" />
          <div className="space-y-4 leading-8 text-slate-700">
            <p>
              The Myers-Briggs Type Indicator (MBTI) is a personality
              classification framework developed by Katharine Cook Briggs and
              her daughter Isabel Briggs Myers. It was influenced by the
              psychological ideas of Swiss psychiatrist Carl Jung, particularly
              his work on psychological types.
            </p>
            <p>
              The framework aims to describe how people may prefer to direct
              their attention, gather information, make decisions and organize
              their lives. It groups these preferences into four dimensions.
            </p>
            <p>
              Each dimension contains two contrasting preferences. Combining
              one preference from each dimension produces a four-letter code,
              such as INTJ, ENFP or ISFJ. There are 16 possible combinations.
            </p>
          </div>

          <div className="mt-7 grid gap-4 sm:grid-cols-3">
            {[
              ["4", "Personality dimensions", "Four pairs of preferences."],
              ["2", "Preferences per dimension", "Two contrasting preferences in each pair."],
              ["16", "Possible personality types", "Four-letter combinations."],
            ].map(([number, title, description]) => (
              <div key={title} className="rounded-2xl border border-slate-200 bg-white p-5">
                <p className="text-3xl font-bold text-indigo-600">{number}</p>
                <h3 className="mt-2 font-bold text-slate-900">{title}</h3>
                <p className="mt-1 text-sm leading-6 text-slate-600">{description}</p>
              </div>
            ))}
          </div>
        </section>
<AdSlot />
        {/* Origin */}
        <section className="mt-16 rounded-2xl bg-slate-50 p-6 sm:p-8">
          <SectionHeading eyebrow="Background" title="Origin and Development of MBTI" />
          <div className="space-y-4 leading-8 text-slate-700">
            <p>
              Carl Jung introduced ideas about psychological types in his 1921
              book <em>Psychological Types</em>. He explored differences in
              how people direct their psychological energy and perceive and
              evaluate the world.
            </p>
            <p>
              Katharine Cook Briggs and Isabel Briggs Myers later developed
              these ideas into a structured personality indicator. Their work
              aimed to help people understand individual differences and
              recognize that people may approach the same situation in
              different ways.
            </p>
            <p>
              The MBTI framework subsequently became popular in personal
              development, education, workshops and organizational settings.
            </p>
          </div>
        </section>

        {/* Four dimensions */}
        <section id="four-dimensions" className="mt-16 scroll-mt-8">
          <SectionHeading
            eyebrow="Core Framework"
            title="The Four MBTI Personality Dimensions"
            description="Each MBTI personality type is created by selecting one preference from each of these four pairs."
          />

          <div className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {dimensions.map((dimension) => (
              <div key={dimension.code} className="rounded-xl border border-indigo-100 bg-indigo-50/70 p-4 text-center">
                <p className="text-xl font-bold text-indigo-700">{dimension.code}</p>
                <p className="mt-2 text-sm font-bold text-slate-800">{dimension.title.split(" vs. ")[0]}</p>
              </div>
            ))}
          </div>

          <div className="space-y-7">
            {dimensions.map((dimension, index) => (
              <article key={dimension.code} className="overflow-hidden rounded-2xl border border-slate-200">
                <div className="border-b border-slate-200 bg-slate-50 p-5 sm:p-6">
                  <p className="text-sm font-bold text-indigo-600">DIMENSION {index + 1} · {dimension.code}</p>
                  <h3 className="mt-2 text-xl font-bold text-slate-900">{dimension.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{dimension.description}</p>
                </div>

                <div className="grid gap-5 p-5 sm:grid-cols-2 sm:p-6">
                  <div className="rounded-xl bg-blue-50 p-5">
                    <h4 className="font-bold text-blue-900">{dimension.first}</h4>
                    <ul className="mt-4 space-y-3">
                      {dimension.firstPoints.map((point) => (
                        <li key={point} className="flex gap-2 text-sm leading-6 text-slate-700">
                          <CheckCircle2 size={17} className="mt-1 shrink-0 text-blue-600" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-xl bg-violet-50 p-5">
                    <h4 className="font-bold text-violet-900">{dimension.second}</h4>
                    <ul className="mt-4 space-y-3">
                      {dimension.secondPoints.map((point) => (
                        <li key={point} className="flex gap-2 text-sm leading-6 text-slate-700">
                          <CheckCircle2 size={17} className="mt-1 shrink-0 text-violet-600" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="border-t border-slate-100 px-5 py-4 sm:px-6">
                  <p className="text-sm font-bold text-slate-900">Real-life example</p>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{dimension.example}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-indigo-100 bg-indigo-50 p-6">
            <h3 className="font-bold text-indigo-950">An important point</h3>
            <p className="mt-2 leading-7 text-slate-700">
              These are preferences, not abilities. An introverted person can
              communicate effectively, a feeling-oriented person can use logic,
              and a perceiving-oriented person can be highly organized. Neither
              preference in a pair is inherently better than the other.
            </p>
          </div>
        </section>

        {/* Type formation */}
        <section className="mt-16">
          <SectionHeading
            eyebrow="How the system works"
            title="How Are the 16 MBTI Types Formed?"
            description="One letter from each dimension is combined to create a four-letter personality code."
          />

          <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-8">
            <div className="grid grid-cols-4 gap-2 sm:gap-4">
              {["E / I", "S / N", "T / F", "J / P"].map((letter, i) => (
                <div key={letter} className="text-center">
                  <div className="rounded-xl bg-indigo-50 py-4 text-lg font-bold text-indigo-700 sm:text-2xl">
                    {letter}
                  </div>
                  <p className="mt-2 text-xs text-slate-500">Dimension {i + 1}</p>
                </div>
              ))}
            </div>
            <div className="my-5 text-center text-2xl font-bold text-slate-400">↓</div>
            <div className="rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 p-6 text-center text-white">
              <p className="text-sm font-bold text-indigo-100">EXAMPLE COMBINATION</p>
              <p className="mt-2 text-4xl font-bold tracking-[0.2em]">INTJ</p>
              <p className="mt-2 text-sm text-indigo-100">Introversion + Intuition + Thinking + Judging</p>
            </div>
          </div>

          <p className="mt-5 leading-8 text-slate-700">
            For example, a person who prefers Introversion, Intuition,
            Thinking and Judging receives the code INTJ. Someone who prefers
            Extraversion, Sensing, Feeling and Perceiving receives ESFP.
            The combinations describe preference patterns rather than fixed
            levels of intelligence, capability or personal worth.
          </p>
        </section>

        {/* All 16 types */}
        <section className="mt-16">
          <SectionHeading
            eyebrow="Personality Classification"
            title="All 16 MBTI Personality Types"
            description="The following descriptions are broad introductory summaries. Individuals within the same type can still differ significantly."
          />

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {types.map(([code, name, description]) => (
              <article key={code} className="rounded-xl border border-slate-200 p-4 transition hover:border-indigo-300 hover:bg-indigo-50/40">
                <p className="text-2xl font-bold tracking-wide text-indigo-700">{code}</p>
                <h3 className="mt-2 font-bold text-slate-900">{name}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
              </article>
            ))}
          </div>
        </section>
<AdSlot />
        {/* Applications */}
        <section className="mt-16">
          <SectionHeading
            eyebrow="Practical Applications"
            title="Where Is MBTI Used?"
            description="MBTI is commonly used as a conversation and self-reflection framework in different areas of life."
          />

          <div className="grid gap-4 sm:grid-cols-2">
            {applications.map(({ icon: Icon, title, text }) => (
              <article key={title} className="rounded-2xl border border-slate-200 p-6">
                <div className="flex size-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                  <Icon size={22} />
                </div>
                <h3 className="mt-4 font-bold text-slate-900">{title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{text}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Strengths */}
        <section className="mt-16">
          <SectionHeading title="Potential Benefits of the MBTI Framework" />
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["Self-awareness", "Encourages people to reflect on their preferences, habits and ways of approaching situations."],
              ["Understanding differences", "Provides a vocabulary for discussing different approaches to communication and problem-solving."],
              ["Personal reflection", "Can help people consider unfamiliar approaches and explore alternative ways of working."],
              ["Group discussion", "Can provide a starting point for conversations about collaboration and individual preferences."],
            ].map(([title, text]) => (
              <div key={title} className="flex gap-3 rounded-xl bg-emerald-50/70 p-5">
                <CheckCircle2 className="mt-1 shrink-0 text-emerald-600" size={20} />
                <div>
                  <h3 className="font-bold text-slate-900">{title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Limitations */}
        <section className="mt-16">
          <SectionHeading
            eyebrow="Critical Evaluation"
            title="Limitations and Criticism of MBTI"
            description="Understanding what MBTI cannot tell us is just as important as understanding its four dimensions."
          />

          <div className="space-y-4">
            {[
              ["Limited reliability", "A person may receive a different result when taking the assessment again, particularly when their preferences are close to the middle of a dimension."],
              ["Oversimplification", "Human personality is complex. Dividing people into only two categories for each dimension can hide important individual differences."],
              ["Limited predictive validity", "MBTI type alone is not a dependable way to predict job performance, relationship success, intelligence or future behaviour."],
              ["Not a clinical assessment", "MBTI is not designed to diagnose mental health conditions or identify psychological disorders."],
              ["Type labels can be misleading", "People may identify too strongly with their type and assume that they cannot develop behaviours associated with another preference."],
            ].map(([title, text]) => (
              <div key={title} className="flex gap-4 rounded-xl border border-amber-200 bg-amber-50/60 p-5">
                <AlertTriangle className="mt-1 shrink-0 text-amber-600" size={20} />
                <div>
                  <h3 className="font-bold text-slate-900">{title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-700">{text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-slate-200 p-6">
            <h3 className="font-bold text-slate-900">A more research-oriented alternative: The Big Five</h3>
            <p className="mt-3 leading-7 text-slate-600">
              The Big Five personality model is generally more strongly
              supported in contemporary personality research. Instead of
              assigning people to 16 categories, it measures five broad
              characteristics along continuous dimensions. This approach
              captures more variation between individuals.
            </p>
          </div>
        </section>

        {/* Comparison */}
        <section className="mt-16">
          <SectionHeading title="MBTI vs. Big Five Personality Model" />

          <div className="overflow-x-auto rounded-2xl border border-slate-200">
            <table className="w-full min-w-[520px] text-left text-sm">
              <thead className="bg-slate-50">
                <tr>
                  <th className="p-4 font-bold">Feature</th>
                  <th className="p-4 font-bold">MBTI</th>
                  <th className="p-4 font-bold">Big Five</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  ["Approach", "Personality preferences", "Personality traits"],
                  ["Dimensions", "Four pairs", "Five broad traits"],
                  ["Results", "16 personality types", "Continuous trait scores"],
                  ["Classification", "Categorical preferences", "Trait-based measurement"],
                  ["Research support", "More debated", "Stronger empirical support"],
                  ["Common use", "Self-reflection and discussion", "Personality research and assessment"],
                ].map(([feature, mbti, bigFive]) => (
                  <tr key={feature}>
                    <td className="p-4 font-bold text-slate-800">{feature}</td>
                    <td className="p-4 leading-6 text-slate-600">{mbti}</td>
                    <td className="p-4 leading-6 text-slate-600">{bigFive}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
<AdSlot />
        {/* Interactive assessment */}
        <section id="interactive-test" className="mt-16 scroll-mt-8">
          <SectionHeading
            eyebrow="Interactive Learning"
            title="Discover Your MBTI Personality Preferences"
            description="Answer a series of everyday questions to explore which of the four MBTI preferences may describe your natural tendencies."
          />
          <MBTITest />
        </section>
<AdSlot />
        {/* FAQs */}
        <section className="mt-16">
          <SectionHeading title="Frequently Asked Questions About MBTI" />
          <div className="space-y-3">
            {faqs.map(({ q, a }) => (
              <details key={q} className="group rounded-xl border border-slate-200 p-5">
                <summary className="cursor-pointer list-none pr-5 font-bold text-slate-900 marker:hidden">
                  <span className="flex items-center justify-between gap-4">
                    {q}
                    <span className="text-xl text-indigo-600 group-open:rotate-45">+</span>
                  </span>
                </summary>
                <p className="mt-4 leading-7 text-slate-600">{a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Conclusion */}
        <section className="mt-16 rounded-2xl bg-gradient-to-br from-indigo-50 to-blue-50 p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-slate-950">Conclusion: Personality Is More Than a Four-Letter Code</h2>
          <p className="mt-4 leading-8 text-slate-700">
            The MBTI framework offers a simple way to explore differences in
            how people approach information, decisions, social interaction and
            organization. Its 16 types can make personality discussions easier,
            but they cannot capture the full complexity of human behaviour.
          </p>
          <p className="mt-3 leading-8 text-slate-700">
            A personality type should be treated as a starting point for
            reflection, not a permanent identity or a limitation on what a
            person can learn, achieve or become.
          </p>
        </section>

       
      </div>
    </main>
  );
}
