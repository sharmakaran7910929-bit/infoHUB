
import {
  Brain,
  Users,
  Lightbulb,
  Heart,
  BriefcaseBusiness,
  GraduationCap,
  Target,
  AlertTriangle,
  CheckCircle2,
  BookOpen,
  Compass,
  MessageCircle,
  Activity,
  Scale,
  ArrowRight,
  ShieldCheck,
  Search,
  ClipboardList,
  Coffee,
  CalendarCheck,
  Sparkles,
  Network,
  Eye,
  UserRound,
  TrendingUp,
  Puzzle,
} from "lucide-react";
import AdSlot from "../../../components/AdSlot";

export const metadata = {
  title: "Big Five Personality Traits – OCEAN Model Explained | PriceTag HUB",
  description:
    "Understand the Big Five Personality Traits (OCEAN Model). Explore openness, conscientiousness, extraversion, agreeableness and neuroticism with detailed explanations and everyday examples.",
};

const traits = [
  {
    letter: "O",
    name: "Openness to Experience",
    short: "Curiosity and imagination",
    subtitle: "How willing are you to explore new ideas and experiences?",
    icon: Lightbulb,
    color: "violet",
    gradient: "from-violet-500 to-purple-600",
    light: "bg-violet-50",
    border: "border-violet-200",
    text: "text-violet-700",
    high: [
      "Enjoys exploring unfamiliar subjects and experiences.",
      "Often curious about art, science, culture and abstract ideas.",
      "Likes experimenting with different approaches.",
      "May enjoy creative activities and imaginative thinking.",
      "Usually considers different perspectives before forming an opinion.",
    ],
    low: [
      "Often prefers familiar and predictable experiences.",
      "May value practical knowledge and established methods.",
      "Usually feels comfortable with routine activities.",
      "May prefer concrete information over abstract ideas.",
      "Can be cautious about unfamiliar approaches.",
    ],
    example:
      "Two students are asked to prepare a college presentation. One chooses artificial intelligence because they want to explore a new subject, even though it is challenging. The other chooses a familiar topic they already understand and can explain confidently. Their choices may reflect different levels of openness.",
    remember:
      "Lower openness does not mean someone is unintelligent or incapable of creativity. It describes a general preference for familiar, practical or conventional experiences.",
  },
  {
    letter: "C",
    name: "Conscientiousness",
    short: "Discipline and organization",
    subtitle: "How organized, responsible and goal-oriented are you?",
    icon: Target,
    color: "blue",
    gradient: "from-blue-500 to-indigo-600",
    light: "bg-blue-50",
    border: "border-blue-200",
    text: "text-blue-700",
    high: [
      "Plans tasks and tries to complete them on time.",
      "Usually keeps work and belongings organized.",
      "Takes responsibilities seriously.",
      "Thinks carefully before making important decisions.",
      "Can remain focused on long-term goals.",
    ],
    low: [
      "May prefer flexible schedules instead of strict plans.",
      "Can find organizing long-term tasks challenging.",
      "May postpone responsibilities or act spontaneously.",
      "May have difficulty maintaining consistent routines.",
      "Can be comfortable with an unstructured approach.",
    ],
    example:
      "Two students have an examination after one month. The first prepares a timetable, studies regularly and revises each chapter. The second studies whenever they feel motivated and may leave several chapters until the final week. This can illustrate differences in conscientiousness.",
    remember:
      "Lower conscientiousness does not automatically mean laziness. Motivation, workload, environment, stress and personal circumstances also affect how organized someone appears.",
  },
  {
    letter: "E",
    name: "Extraversion",
    short: "Social energy and engagement",
    subtitle: "How much do you enjoy social interaction and stimulation?",
    icon: Users,
    color: "amber",
    gradient: "from-amber-500 to-orange-500",
    light: "bg-amber-50",
    border: "border-amber-200",
    text: "text-amber-700",
    high: [
      "Often enjoys social gatherings and group activities.",
      "May feel comfortable starting conversations.",
      "Can be expressive and energetic in social settings.",
      "May enjoy participating actively in discussions.",
      "Often seeks opportunities for social interaction.",
    ],
    low: [
      "May prefer quieter environments and smaller gatherings.",
      "Often enjoys independent activities.",
      "May prefer listening before speaking.",
      "Can feel comfortable spending time alone.",
      "May prefer fewer but more meaningful social interactions.",
    ],
    example:
      "At a family wedding, one person enjoys meeting relatives, dancing, introducing themselves to new people and participating in conversations. Another prefers sitting with a few close family members and enjoying quieter conversations. These may reflect different levels of extraversion.",
    remember:
      "Introversion is not the same as shyness or poor communication skills. An introverted person can be confident, socially capable and comfortable speaking in public.",
  },
  {
    letter: "A",
    name: "Agreeableness",
    short: "Cooperation and compassion",
    subtitle: "How considerate and cooperative are you in relationships?",
    icon: Heart,
    color: "rose",
    gradient: "from-rose-500 to-pink-600",
    light: "bg-rose-50",
    border: "border-rose-200",
    text: "text-rose-700",
    high: [
      "Often considers other people's feelings.",
      "Usually tries to cooperate and maintain relationships.",
      "May be supportive, trusting and considerate.",
      "Often prefers resolving disagreements peacefully.",
      "May willingly help people who need support.",
    ],
    low: [
      "May be more skeptical or questioning.",
      "Can prioritize personal goals over agreement.",
      "May communicate in a more competitive or direct manner.",
      "Can be comfortable challenging other people's opinions.",
      "May place greater emphasis on personal interests.",
    ],
    example:
      "During a group assignment, one student notices that a classmate is struggling and offers help, even if it takes additional time. Another focuses mainly on their own responsibilities and openly challenges suggestions they believe are incorrect. These behaviours may reflect differences in agreeableness.",
    remember:
      "High agreeableness does not mean always agreeing with everyone. Lower agreeableness does not automatically mean someone is cruel or unfriendly.",
  },
  {
    letter: "N",
    name: "Neuroticism",
    short: "Emotional sensitivity",
    subtitle: "How strongly do you tend to experience negative emotions?",
    icon: Activity,
    color: "orange",
    gradient: "from-orange-500 to-red-500",
    light: "bg-orange-50",
    border: "border-orange-200",
    text: "text-orange-700",
    high: [
      "May experience worry or nervousness more frequently.",
      "Can be sensitive to criticism or stressful situations.",
      "May think repeatedly about possible problems.",
      "Can experience stronger emotional reactions to uncertainty.",
      "May find it difficult to remain calm during stressful periods.",
    ],
    low: [
      "Often remains emotionally steady under pressure.",
      "May recover more quickly from everyday disappointments.",
      "Usually experiences less frequent worry or emotional distress.",
      "May approach uncertain situations with greater calmness.",
      "Can remain composed during challenging circumstances.",
    ],
    example:
      "Two employees are asked to present their work to a manager. One keeps worrying about making mistakes and imagines possible criticism. The other feels relatively calm and treats the presentation as a normal work activity. These may reflect differences in neuroticism.",
    remember:
      "Neuroticism is a normal personality dimension, not a mental health diagnosis. A high score does not mean someone has an anxiety disorder or another psychological condition.",
  },
];

const examples = [
  {
    title: "Choosing a new hobby",
    icon: Sparkles,
    trait: "Openness",
    high:
      "Tries photography, painting, coding or learning a new language simply out of curiosity.",
    low:
      "Prefers familiar hobbies and activities they already enjoy.",
    color: "violet",
  },
  {
    title: "Preparing for an examination",
    icon: CalendarCheck,
    trait: "Conscientiousness",
    high:
      "Creates a study schedule, tracks progress and completes revision on time.",
    low:
      "Studies more spontaneously and may prefer a flexible routine.",
    color: "blue",
  },
  {
    title: "Attending a social event",
    icon: Coffee,
    trait: "Extraversion",
    high:
      "Enjoys meeting new people, joining conversations and participating in group activities.",
    low:
      "Prefers spending time with a few familiar people or enjoying a quieter environment.",
    color: "amber",
  },
  {
    title: "Helping a classmate",
    icon: Heart,
    trait: "Agreeableness",
    high:
      "Offers help, listens patiently and tries to maintain cooperation.",
    low:
      "May focus on personal responsibilities and challenge suggestions they disagree with.",
    color: "rose",
  },
  {
    title: "Receiving negative feedback",
    icon: MessageCircle,
    trait: "Neuroticism",
    high:
      "May worry about the criticism and think about it repeatedly.",
    low:
      "May remain relatively calm and focus on what can be improved.",
    color: "orange",
  },
];

const applications = [
  {
    icon: GraduationCap,
    title: "Education and Learning",
    description:
      "Personality traits can influence study habits, classroom participation, planning and responses to academic challenges.",
    example:
      "A highly conscientious student may benefit from a structured timetable, while a student high in openness may enjoy exploring additional subjects beyond the syllabus.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Workplace and Career",
    description:
      "The Big Five helps researchers understand individual differences in teamwork, work habits, communication and responses to job demands.",
    example:
      "Conscientiousness may be relevant to roles requiring careful planning and follow-through. Extraversion may be useful in roles involving frequent social interaction.",
  },
  {
    icon: Users,
    title: "Relationships and Family",
    description:
      "Personality differences can influence communication, emotional responses, cooperation and conflict resolution.",
    example:
      "One partner may want to discuss a disagreement immediately, while another may need time to reflect before discussing the issue.",
  },
  {
    icon: Brain,
    title: "Personal Development",
    description:
      "The model can help individuals reflect on their habits, strengths, emotional tendencies and areas they may want to develop.",
    example:
      "Someone who regularly misses deadlines can work on planning and task-management habits instead of assuming that procrastination is an unchangeable personality characteristic.",
  },
  {
    icon: Search,
    title: "Psychological Research",
    description:
      "Psychologists use the Big Five to study personality differences and their relationships with behaviour and life outcomes.",
    example:
      "Researchers may examine how personality traits relate to well-being, social behaviour, educational outcomes and job performance.",
  },
];

const faqs = [
  {
    question: "What are the Big Five Personality Traits?",
    answer:
      "The Big Five are five broad dimensions used to describe personality: Openness to Experience, Conscientiousness, Extraversion, Agreeableness and Neuroticism. They are commonly remembered using the acronym OCEAN.",
  },
  {
    question: "What does OCEAN stand for?",
    answer:
      "O stands for Openness, C for Conscientiousness, E for Extraversion, A for Agreeableness and N for Neuroticism.",
  },
  {
    question: "Is the Big Five a personality test?",
    answer:
      "The Big Five is a personality framework, not one single test. Different scientifically developed questionnaires, including the BFI-2 and NEO personality inventories, can assess its five dimensions.",
  },
  {
    question: "Can someone score high in all five traits?",
    answer:
      "Yes. The five dimensions are assessed separately. Someone can score relatively high on several traits at the same time because they measure different aspects of personality.",
  },
  {
    question: "Which Big Five trait is the most important?",
    answer:
      "There is no single most important trait for every situation. Different traits may be more relevant to different behaviours, goals and environments.",
  },
  {
    question: "Is the Big Five better than MBTI?",
    answer:
      "The Big Five has stronger support as a scientific model for measuring broad personality traits in psychological research. MBTI uses a different framework based on four preference pairs. They should not be treated as interchangeable measurements.",
  },
  {
    question: "Can personality traits change over time?",
    answer:
      "Yes. Personality traits tend to show relative stability, but they can change gradually across adulthood through development, experiences and changing circumstances.",
  },
  {
    question: "Does high neuroticism mean someone has anxiety?",
    answer:
      "No. High neuroticism indicates a greater tendency to experience negative emotions such as worry and emotional sensitivity. It does not establish an anxiety disorder or another clinical diagnosis.",
  },
];

function SectionHeading({ eyebrow, title, description, icon: Icon }) {
  return (
    <div className="mb-8">
      {eyebrow && (
        <p className="mb-2 text-sm font-bold uppercase tracking-wider text-indigo-600">
          {eyebrow}
        </p>
      )}
      <div className="flex items-start gap-3">
        {Icon && (
          <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-100 text-indigo-700">
            <Icon size={21} />
          </div>
        )}
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
            {title}
          </h2>
          {description && (
            <p className="mt-3 max-w-4xl text-base leading-8 text-slate-600">
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

function TraitCard({ trait, index }) {
  const Icon = trait.icon;

  return (
    <article className={`overflow-hidden rounded-3xl border ${trait.border} bg-white shadow-sm`}>
      <div className={`bg-gradient-to-r ${trait.gradient} p-6 text-white sm:p-7`}>
        <div className="flex items-center gap-4">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-white/30 bg-white/15">
            <Icon size={32} />
          </div>
          <div>
            <p className="text-sm font-bold text-white/80">
              Dimension {index + 1} · {trait.letter}
            </p>
            <h3 className="mt-1 text-xl font-bold sm:text-2xl">
              {trait.name}
            </h3>
            <p className="mt-1 text-sm text-white/90">{trait.short}</p>
          </div>
        </div>
        <p className="mt-5 max-w-3xl text-sm leading-7 text-white/95 sm:text-base">
          {trait.subtitle}
        </p>
      </div>

      <div className="grid gap-6 p-6 sm:grid-cols-2 sm:p-7">
        <div>
          <h4 className="mb-4 flex items-center gap-2 font-bold text-emerald-700">
            <TrendingUp size={19} />
            Higher Levels
          </h4>
          <ul className="space-y-3">
            {trait.high.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-7 text-slate-700">
                <CheckCircle2 size={17} className="mt-1 shrink-0 text-emerald-600" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 flex items-center gap-2 font-bold text-blue-700">
            <Compass size={19} />
            Lower Levels
          </h4>
          <ul className="space-y-3">
            {trait.low.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-7 text-slate-700">
                <CheckCircle2 size={17} className="mt-1 shrink-0 text-blue-600" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={`${trait.light} border-t ${trait.border} p-6 sm:p-7`}>
        <h4 className={`flex items-center gap-2 font-bold ${trait.text}`}>
          <MessageCircle size={19} />
          Real-Life Example
        </h4>
        <p className="mt-3 text-sm leading-7 text-slate-700">
          {trait.example}
        </p>
        <div className="mt-4 rounded-xl border border-white bg-white/90 p-4">
          <p className="text-sm font-bold text-slate-900">
            Important to Remember
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-600">
            {trait.remember}
          </p>
        </div>
      </div>
    </article>
  );
}

function SpectrumDiagram() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
      <h3 className="text-lg font-bold text-slate-950">
        Understanding a Personality Spectrum
      </h3>
      <p className="mt-2 text-sm leading-7 text-slate-600">
        Personality traits are continuous dimensions. People can fall at
        different points rather than belonging to one of two fixed groups.
      </p>

      <div className="mt-7 space-y-7">
        {[
          { left: "Lower", middle: "Moderate", right: "Higher", marker: "35%" },
          { left: "Lower", middle: "Moderate", right: "Higher", marker: "65%" },
        ].map((item, index) => (
          <div key={index}>
            <div className="mb-3 flex justify-between text-xs font-bold text-slate-500">
              <span>{item.left}</span>
              <span>{item.middle}</span>
              <span>{item.right}</span>
            </div>
            <div className="relative h-3 rounded-full bg-gradient-to-r from-blue-400 via-violet-400 to-emerald-400">
              <div
                className="absolute -top-1.5 h-6 w-6 rounded-full border-4 border-white bg-slate-900 shadow-md"
                style={{ left: item.marker, transform: "translateX(-50%)" }}
              />
            </div>
            <p className="mt-2 text-xs text-slate-500">
              Example {index + 1}: Different positions on a trait
            </p>
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-xl bg-indigo-50 p-4">
        <p className="text-sm leading-7 text-slate-700">
          <strong>For example:</strong> One person may be highly extraverted
          but moderately conscientious. Another may be less extraverted but
          highly conscientious. Both profiles are possible.
        </p>
      </div>
    </div>
  );
}

export default function BigFivePersonalityPage() {
  return (
    <main className="mx-auto w-full max-w-6xl space-y-16 px-4 pb-20 sm:px-6 lg:px-8 m-4">

      {/* Hero */}
      <section className="overflow-hidden rounded-3xl border border-indigo-100 bg-gradient-to-br from-indigo-50 via-white to-blue-50 p-6 sm:p-10 lg:p-12">
        <div className="max-w-4xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white px-4 py-2 text-sm font-bold text-indigo-700">
            <Brain size={17} />
            Personality Psychology
          </span>

          <h1 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            Big Five Personality Traits: Understanding the OCEAN Model
          </h1>

          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
            Why are some people naturally curious, while others prefer
            familiar routines? Why do some enjoy social gatherings, while
            others feel more comfortable in quieter environments? The Big
            Five Personality Model helps explain these differences through
            five broad dimensions of human personality.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="#five-traits"
              className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 font-bold text-white transition hover:bg-indigo-700"
            >
              Explore the Five Traits <ArrowRight size={18} />
            </a>
            <a
              href="#real-life-examples"
              className="rounded-xl border border-indigo-200 bg-white px-5 py-3 font-bold text-indigo-700 transition hover:bg-indigo-50"
            >
              See Everyday Examples
            </a>
          </div>

          <div className="mt-9 grid grid-cols-2 gap-3 sm:grid-cols-5">
            {traits.map((trait) => {
              const Icon = trait.icon;
              return (
                <div
                  key={trait.letter}
                  className="rounded-2xl border border-indigo-100 bg-white p-4"
                >
                  <Icon size={22} className={trait.text} />
                  <p className="mt-3 text-2xl font-bold text-slate-950">
                    {trait.letter}
                  </p>
                  <p className="mt-1 text-xs font-bold text-slate-600">
                    {trait.name}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section>
        <SectionHeading
          eyebrow="Understanding Personality"
          title="What Is the Big Five Personality Model?"
          description="The Big Five is a widely researched psychological framework that describes personality through five broad dimensions. It helps researchers understand how individuals differ in their characteristic patterns of thinking, feeling and behaving."
          icon={Brain}
        />

        <div className="space-y-5 text-base leading-8 text-slate-700">
          <p>
            Consider five people in the same classroom. One enjoys exploring
            unfamiliar ideas, another carefully organizes every assignment,
            a third actively participates in discussions, a fourth is always
            willing to help classmates, and a fifth becomes particularly
            worried before examinations.
          </p>
          <p>
            These differences are not necessarily signs of intelligence,
            ability or character. They may reflect different personality
            tendencies.
          </p>
          <p>
            The Big Five Model organizes these tendencies into five broad
            dimensions: Openness, Conscientiousness, Extraversion,
            Agreeableness and Neuroticism.
          </p>
        </div>

        <div className="mt-7 grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl border border-indigo-100 bg-indigo-50 p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-indigo-700">
                <Scale size={23} />
              </div>
              <h3 className="font-bold text-slate-950">
                Personality as a Spectrum
              </h3>
            </div>
            <p className="mt-4 text-sm leading-7 text-slate-700">
              The Big Five does not divide everyone into five personality
              types. Each dimension is measured along a continuum, allowing
              individuals to show lower, moderate or higher levels.
            </p>
          </div>

          <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-blue-700">
                <Network size={23} />
              </div>
              <h3 className="font-bold text-slate-950">
                Five Dimensions Together
              </h3>
            </div>
            <p className="mt-4 text-sm leading-7 text-slate-700">
              A person can be highly organized, moderately outgoing, very
              cooperative and emotionally sensitive at the same time. No
              single trait represents the complete personality.
            </p>
          </div>
        </div>
      </section>
<AdSlot />
      {/* OCEAN */}
      <section>
        <SectionHeading
          eyebrow="The OCEAN Framework"
          title="What Does OCEAN Stand For?"
          description="OCEAN is a simple memory aid for the five major personality dimensions. Each letter represents a different aspect of human personality."
          icon={BookOpen}
        />

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {traits.map((trait) => {
            const Icon = trait.icon;
            return (
              <div
                key={trait.letter}
                className={`rounded-2xl border ${trait.border} ${trait.light} p-5`}
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white">
                  <Icon size={24} className={trait.text} />
                </div>
                <p className={`mt-4 text-3xl font-bold ${trait.text}`}>
                  {trait.letter}
                </p>
                <h3 className="mt-2 font-bold text-slate-950">
                  {trait.name}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {trait.short}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6">
          <h3 className="font-bold text-slate-950">
            Visual Summary of the OCEAN Model
          </h3>
          <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:items-stretch">
            {traits.map((trait, index) => (
              <div
                key={trait.letter}
                className={`flex flex-1 items-center gap-3 rounded-xl ${trait.light} p-3`}
              >
                <span className={`text-2xl font-bold ${trait.text}`}>
                  {trait.letter}
                </span>
                <span className="text-xs font-bold leading-5 text-slate-700">
                  {trait.name}
                </span>
                {index !== 4 && (
                  <ArrowRight className="ml-auto hidden shrink-0 text-slate-400 sm:block" size={15} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Spectrum */}
      <section>
        <SectionHeading
          eyebrow="An Important Concept"
          title="Personality Is Not a Set of Fixed Categories"
          description="A common misunderstanding is that people must belong to either one side or the other. The Big Five instead measures the degree to which a person tends to display a particular trait."
          icon={Scale}
        />

        <div className="grid gap-6 lg:grid-cols-2">
          <SpectrumDiagram />

          <div className="space-y-5">
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="font-bold text-slate-950">
                Example: Social Preferences
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Imagine three students. One enjoys almost every social
                gathering, another likes meeting friends but also enjoys
                quiet time, and the third prefers small groups and
                independent activities.
              </p>
              <div className="mt-5 space-y-3">
                {[
                  { label: "Student A", value: "Higher Extraversion", width: "90%", color: "bg-amber-500" },
                  { label: "Student B", value: "Moderate Extraversion", width: "55%", color: "bg-amber-400" },
                  { label: "Student C", value: "Lower Extraversion", width: "20%", color: "bg-amber-300" },
                ].map((item) => (
                  <div key={item.label}>
                    <div className="mb-2 flex flex-wrap justify-between gap-2 text-xs font-bold text-slate-600">
                      <span>{item.label}</span>
                      <span>{item.value}</span>
                    </div>
                    <div className="h-2.5 overflow-hidden rounded-full bg-slate-100">
                      <div className={`h-full rounded-full ${item.color}`} style={{ width: item.width }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
              <p className="flex items-center gap-2 font-bold text-amber-900">
                <Lightbulb size={19} />
                What Should You Understand?
              </p>
              <p className="mt-2 text-sm leading-7 text-slate-700">
                These positions are illustrative, not actual test scores.
                A person can also behave differently depending on the
                environment and situation.
              </p>
            </div>
          </div>
        </div>
      </section>
<AdSlot />
      {/* Five Traits */}
      <section id="five-traits" className="scroll-mt-8">
        <SectionHeading
          eyebrow="Detailed Explanation"
          title="The Five Major Personality Traits"
          description="Explore each dimension separately to understand what it measures, how higher and lower levels may appear, and how it influences everyday life."
          icon={Puzzle}
        />

        <div className="space-y-8">
          {traits.map((trait, index) => (
            <TraitCard key={trait.letter} trait={trait} index={index} />
          ))}
        </div>
      </section>

      {/* Everyday examples */}
      <section id="real-life-examples" className="scroll-mt-8">
        <SectionHeading
          eyebrow="Personality in Everyday Life"
          title="How Do the Big Five Traits Influence Daily Behaviour?"
          description="Personality becomes easier to understand when we connect psychological concepts with familiar situations. Consider these examples from student life, family interactions and everyday decisions."
          icon={Eye}
        />

        <div className="space-y-4">
          {examples.map((item, index) => {
            const Icon = item.icon;
            const colors = {
              violet: "bg-violet-100 text-violet-700",
              blue: "bg-blue-100 text-blue-700",
              amber: "bg-amber-100 text-amber-700",
              rose: "bg-rose-100 text-rose-700",
              orange: "bg-orange-100 text-orange-700",
            };

            return (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6"
              >
                <div className="flex items-center gap-3">
                  <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${colors[item.color]}`}>
                    <Icon size={22} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-950">
                      {item.title}
                    </h3>
                    <p className="text-xs font-bold text-indigo-600">
                      Related Trait: {item.trait}
                    </p>
                  </div>
                </div>

                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl bg-slate-50 p-4">
                    <p className="mb-2 text-sm font-bold text-slate-900">
                      Possible Behaviour A
                    </p>
                    <p className="text-sm leading-7 text-slate-600">
                      {item.high}
                    </p>
                  </div>
                  <div className="rounded-xl bg-indigo-50 p-4">
                    <p className="mb-2 text-sm font-bold text-indigo-900">
                      Possible Behaviour B
                    </p>
                    <p className="text-sm leading-7 text-slate-600">
                      {item.low}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <p className="mt-5 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm leading-7 text-slate-700">
          <strong>Important:</strong> These are illustrative examples, not
          rules that predict everyone's behaviour. Personality is one
          influence among many, and individual actions also depend on
          circumstances, experiences and personal choices.
        </p>
      </section>
<AdSlot />
      {/* Trait combinations */}
      <section>
        <SectionHeading
          eyebrow="Personality Profiles"
          title="How Do the Five Traits Work Together?"
          description="A person's personality is not defined by one dimension alone. The combination of all five traits provides a more complete picture of individual differences."
          icon={Network}
        />

        <div className="space-y-5">
          <article className="rounded-2xl border border-blue-200 bg-blue-50 p-6">
            <h3 className="text-lg font-bold text-slate-950">
              Example 1: The Organized Explorer
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-700">
              Imagine a student who loves exploring new subjects, trying
              unfamiliar learning methods and discovering new ideas. At
              the same time, the student plans carefully, completes
              assignments on time and keeps study materials organized.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="rounded-full bg-white px-3 py-2 text-sm font-bold text-violet-700">High Openness</span>
              <span className="rounded-full bg-white px-3 py-2 text-sm font-bold text-blue-700">High Conscientiousness</span>
            </div>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              This combination may support creative exploration alongside
              organized execution.
            </p>
          </article>

          <article className="rounded-2xl border border-rose-200 bg-rose-50 p-6">
            <h3 className="text-lg font-bold text-slate-950">
              Example 2: The Social Supporter
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-700">
              Consider someone who enjoys meeting people, starting
              conversations, helping others and making newcomers feel
              welcome during group activities.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="rounded-full bg-white px-3 py-2 text-sm font-bold text-amber-700">High Extraversion</span>
              <span className="rounded-full bg-white px-3 py-2 text-sm font-bold text-rose-700">High Agreeableness</span>
            </div>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              These tendencies may support social engagement and
              cooperative relationships.
            </p>
          </article>

          <article className="rounded-2xl border border-orange-200 bg-orange-50 p-6">
            <h3 className="text-lg font-bold text-slate-950">
              Example 3: The Emotionally Sensitive Planner
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-700">
              A person may carefully organize every task, prepare well in
              advance and meet deadlines, but still experience considerable
              worry before an important examination or presentation.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="rounded-full bg-white px-3 py-2 text-sm font-bold text-blue-700">High Conscientiousness</span>
              <span className="rounded-full bg-white px-3 py-2 text-sm font-bold text-orange-700">High Neuroticism</span>
            </div>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Being responsible and experiencing worry can exist together.
              Personality dimensions are not mutually exclusive.
            </p>
          </article>

          <article className="rounded-2xl border border-violet-200 bg-violet-50 p-6">
            <h3 className="text-lg font-bold text-slate-950">
              Example 4: The Quiet Problem-Solver
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-700">
              Someone may prefer working independently, focus on practical
              solutions, complete responsibilities carefully and avoid
              unnecessary social attention.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="rounded-full bg-white px-3 py-2 text-sm font-bold text-amber-700">Lower Extraversion</span>
              <span className="rounded-full bg-white px-3 py-2 text-sm font-bold text-blue-700">High Conscientiousness</span>
            </div>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Being quiet does not prevent someone from being confident,
              capable or effective.
            </p>
          </article>
        </div>
      </section>

      {/* History */}
      <section>
        <SectionHeading
          eyebrow="Background and Development"
          title="History of the Big Five Personality Model"
          description="The Big Five developed through decades of research involving language, personality descriptions and statistical analysis. It was not invented by one psychologist in a single experiment."
          icon={BookOpen}
        />

        <div className="space-y-5">
          {[
            {
              title: "Early Lexical Research",
              description:
                "Researchers explored how everyday language describes personality. The lexical hypothesis proposed that important individual differences are reflected in the words people use to describe themselves and others.",
            },
            {
              title: "Raymond Cattell and Factor Analysis",
              description:
                "Raymond Cattell used statistical techniques, including factor analysis, to organize personality descriptions into broader factors. This helped establish the foundation for later trait research.",
            },
            {
              title: "Tupes, Christal and Goldberg",
              description:
                "Research by Ernest Tupes and Raymond Christal helped identify a recurring five-factor structure. Lewis Goldberg later contributed significantly to the development and wider recognition of the Big Five framework.",
            },
            {
              title: "Costa and McCrae",
              description:
                "Paul Costa and Robert McCrae made major contributions to the measurement and development of the Five-Factor Model, including the NEO personality inventories.",
            },
            {
              title: "Modern Personality Research",
              description:
                "Today, the five-factor framework is widely used in personality research across areas such as education, employment, relationships, well-being and individual differences.",
            },
          ].map((item, index) => (
            <div key={item.title} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-100 text-sm font-bold text-indigo-700">
                  {index + 1}
                </div>
                {index !== 4 && <div className="mt-2 w-px flex-1 bg-indigo-200" />}
              </div>
              <div className="pb-5">
                <h3 className="font-bold text-slate-950">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Applications */}
      <section>
        <SectionHeading
          eyebrow="Practical Importance"
          title="Applications of the Big Five Personality Model"
          description="The model helps researchers and professionals understand how personality differences may relate to learning, work, relationships and personal development."
          icon={Target}
        />

        <div className="grid gap-5 md:grid-cols-2">
          {applications.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-6"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-100 text-indigo-700">
                    <Icon size={23} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-950">
                    {item.title}
                  </h3>
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>
                <div className="mt-4 rounded-xl bg-indigo-50 p-4">
                  <p className="text-xs font-bold uppercase tracking-wide text-indigo-700">
                    Practical Example
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-700">
                    {item.example}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </section>
<AdSlot />
      {/* Assessment */}
      <section>
        <SectionHeading
          eyebrow="Psychological Assessment"
          title="How Are the Big Five Personality Traits Measured?"
          description="Psychologists generally use structured questionnaires to estimate how strongly individuals display different personality tendencies."
          icon={ClipboardList}
        />

        <div className="space-y-5 text-sm leading-7 text-slate-700">
          <p>
            A typical personality questionnaire contains statements about
            everyday thoughts, feelings and behaviours. The person
            completing the questionnaire indicates how accurately each
            statement describes them.
          </p>
          <p>
            For example, a questionnaire might ask whether someone enjoys
            exploring unfamiliar ideas, completes tasks carefully, enjoys
            social interaction or frequently worries about possible
            problems.
          </p>
        </div>

        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6">
          <h3 className="font-bold text-slate-950">
            Examples of Personality Assessment Statements
          </h3>
          <div className="mt-5 space-y-3">
            {[
              { statement: "I enjoy exploring unfamiliar ideas.", trait: "Openness", icon: Lightbulb },
              { statement: "I complete tasks carefully and on time.", trait: "Conscientiousness", icon: Target },
              { statement: "I enjoy being around other people.", trait: "Extraversion", icon: Users },
              { statement: "I try to understand other people's feelings.", trait: "Agreeableness", icon: Heart },
              { statement: "I often worry about things that might go wrong.", trait: "Neuroticism", icon: Activity },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={item.statement} className="flex items-start gap-3 rounded-xl bg-slate-50 p-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white text-indigo-700">
                    <Icon size={19} />
                  </div>
                  <div>
                    <p className="font-bold text-slate-800">
                      {index + 1}. {item.statement}
                    </p>
                    <p className="mt-1 text-xs font-bold text-indigo-600">
                      Measures: {item.trait}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <p className="mt-4 text-xs leading-6 text-slate-500">
            These are illustrative statements for explaining the assessment
            process, not a validated personality questionnaire.
          </p>
        </div>

        <div className="mt-6 rounded-2xl border border-indigo-100 bg-indigo-50 p-6">
          <h3 className="text-lg font-bold text-slate-950">
            Common Scientific Assessment Instruments
          </h3>
          <div className="mt-5 space-y-5">
            <div>
              <h4 className="font-bold text-indigo-800">
                NEO Personality Inventory
              </h4>
              <p className="mt-2 text-sm leading-7 text-slate-700">
                Developed through the work of Costa and McCrae, the NEO
                inventories assess the five major personality domains.
                Some versions also measure narrower facets within each
                domain.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-indigo-800">
                Big Five Inventory (BFI)
              </h4>
              <p className="mt-2 text-sm leading-7 text-slate-700">
                The BFI is a widely used questionnaire designed to measure
                the five broad personality dimensions.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-indigo-800">
                Big Five Inventory-2 (BFI-2)
              </h4>
              <p className="mt-2 text-sm leading-7 text-slate-700">
                The BFI-2 measures five domains and provides additional
                detail through three facets within each domain.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5">
          <h3 className="flex items-center gap-2 font-bold text-amber-900">
            <AlertTriangle size={19} />
            Important Assessment Note
          </h3>
          <p className="mt-2 text-sm leading-7 text-slate-700">
            Personality questionnaires provide estimates based on
            responses. Results may be influenced by self-awareness,
            interpretation of questions, response style and assessment
            conditions. A questionnaire should not be treated as a complete
            description of a person.
          </p>
        </div>
      </section>

      {/* Comparison */}
      <section>
        <SectionHeading
          eyebrow="Comparing Personality Frameworks"
          title="Big Five vs MBTI: What Is the Difference?"
          description="Both frameworks explore personality, but they organize and measure individual differences in different ways."
          icon={Scale}
        />

        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-2xl bg-indigo-600 p-5 text-white">
              <Brain size={25} />
              <h3 className="mt-3 text-lg font-bold">Big Five</h3>
              <p className="mt-2 text-sm leading-6 text-indigo-100">
                Five continuous personality dimensions.
              </p>
            </div>
            <div className="rounded-2xl bg-slate-900 p-5 text-white">
              <Users size={25} />
              <h3 className="mt-3 text-lg font-bold">MBTI</h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Sixteen preference combinations.
              </p>
            </div>
          </div>

          {[
            {
              label: "Approach",
              big: "Measures five broad personality traits.",
              mbti: "Uses four pairs of preferences.",
            },
            {
              label: "Results",
              big: "Places individuals along different trait spectrums.",
              mbti: "Assigns a four-letter personality type, such as INFP or ESTJ.",
            },
            {
              label: "Research",
              big: "Has extensive support in modern personality research.",
              mbti: "Has more limitations in reliability and predictive validity as a psychological assessment.",
            },
            {
              label: "Common Use",
              big: "Widely used in scientific personality research.",
              mbti: "Often used for self-reflection and personality discussions.",
            },
            {
              label: "Categories",
              big: "Does not divide people into fixed personality types.",
              mbti: "Places individuals into one category for each preference pair.",
            },
          ].map((item) => (
            <div key={item.label} className="rounded-xl border border-slate-200 bg-white p-4">
              <p className="mb-3 text-xs font-bold uppercase tracking-wide text-indigo-600">
                {item.label}
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                <p className="text-sm leading-7 text-slate-700">
                  {item.big}
                </p>
                <p className="border-t border-slate-100 pt-3 text-sm leading-7 text-slate-700 sm:border-l sm:border-t-0 sm:pl-4 sm:pt-0">
                  {item.mbti}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-5 text-sm leading-7 text-slate-600">
          <strong>In simple terms:</strong> The Big Five describes how much
          of certain personality tendencies a person may show. MBTI
          describes personality through combinations of preferences. They
          should not be treated as interchangeable measurements.
        </p>
      </section>

      {/* Benefits */}
      <section>
        <SectionHeading
          eyebrow="Why It Matters"
          title="Advantages of the Big Five Personality Model"
          description="The model provides a structured way to understand individual differences and has become an important framework in modern personality research."
          icon={ShieldCheck}
        />

        <div className="space-y-4">
          {[
            {
              title: "Strong Research Foundation",
              description:
                "The five-factor structure has been supported by a large body of personality research across different populations and assessment methods.",
            },
            {
              title: "Detailed Personality Description",
              description:
                "Five separate dimensions provide a more nuanced description than placing someone into one broad personality category.",
            },
            {
              title: "Useful Across Different Fields",
              description:
                "The framework can help researchers understand patterns related to education, work, relationships and individual differences.",
            },
            {
              title: "Recognizes Individual Complexity",
              description:
                "It allows people to have different combinations of personality traits instead of assuming everyone belongs to one fixed type.",
            },
          ].map((item) => (
            <div key={item.title} className="flex gap-4 rounded-2xl border border-emerald-100 bg-emerald-50/60 p-5">
              <CheckCircle2 className="mt-1 shrink-0 text-emerald-700" size={22} />
              <div>
                <h3 className="font-bold text-slate-950">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Limitations */}
      <section>
        <SectionHeading
          eyebrow="Critical Understanding"
          title="Limitations of the Big Five Personality Model"
          description="Although the model is widely researched, it cannot explain every aspect of personality or predict every individual action."
          icon={AlertTriangle}
        />

        <div className="space-y-4">
          {[
            {
              title: "It Does Not Explain Everything",
              description:
                "Personality traits are only one influence on behaviour. Situations, culture, upbringing, relationships and personal experiences also matter.",
            },
            {
              title: "It Relies on Assessment Methods",
              description:
                "Many questionnaires depend on self-reported answers. People may misunderstand questions, present themselves positively or have limited awareness of their own behaviour.",
            },
            {
              title: "It Does Not Provide Fixed Personality Labels",
              description:
                "The model measures broad dimensions, not complete personality identities. A score should not be treated as a permanent label.",
            },
            {
              title: "Cultural and Language Differences Matter",
              description:
                "Personality descriptions and questionnaire responses can vary across cultures and languages. Assessment tools need appropriate validation for the population in which they are used.",
            },
            {
              title: "It Does Not Diagnose Mental Health Conditions",
              description:
                "The Big Five is a personality framework, not a clinical diagnostic tool. It cannot independently establish whether someone has a psychological disorder.",
            },
          ].map((item) => (
            <article key={item.title} className="rounded-2xl border border-amber-200 bg-amber-50/60 p-5">
              <h3 className="flex items-center gap-2 font-bold text-slate-950">
                <AlertTriangle size={19} className="shrink-0 text-amber-700" />
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-700">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Misconceptions */}
      <section>
        <SectionHeading
          eyebrow="Common Misunderstandings"
          title="Myths and Facts About the Big Five"
          description="Understanding these distinctions helps avoid common mistakes when interpreting personality traits and assessment results."
          icon={Eye}
        />

        <div className="space-y-4">
          {[
            {
              myth: "The Big Five divides people into five personality types.",
              fact: "It measures five continuous personality dimensions. A person can have a different score on each dimension.",
            },
            {
              myth: "A high score is always better than a low score.",
              fact: "Neither high nor low scores are universally better. Their usefulness depends on the situation, goals and environment.",
            },
            {
              myth: "Personality never changes.",
              fact: "Personality traits are relatively stable, but they can change gradually through life experiences, development and changing circumstances.",
            },
            {
              myth: "Neuroticism means mental illness.",
              fact: "Neuroticism is a personality dimension involving emotional sensitivity and negative emotional experiences. It is not a diagnosis.",
            },
            {
              myth: "A person's personality explains every action.",
              fact: "Behaviour is influenced by personality as well as the situation, culture, social expectations, experiences and current circumstances.",
            },
          ].map((item, index) => (
            <article key={item.myth} className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
              <p className="flex items-start gap-3 font-bold text-rose-700">
                <AlertTriangle size={18} className="mt-1 shrink-0" />
                <span>Myth {index + 1}: {item.myth}</span>
              </p>
              <p className="mt-3 flex items-start gap-3 text-sm leading-7 text-slate-700">
                <CheckCircle2 size={18} className="mt-1 shrink-0 text-emerald-700" />
                <span><strong>Fact:</strong> {item.fact}</span>
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Conclusion */}
      <section className="rounded-3xl bg-slate-950 p-6 sm:p-9">
        <p className="text-sm font-bold uppercase tracking-wider text-indigo-300">
          Key Takeaway
        </p>
        <div className="mt-3 flex items-start gap-3">
          <Brain className="mt-1 shrink-0 text-indigo-300" size={27} />
          <div>
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Understanding Personality Beyond Labels
            </h2>
            <p className="mt-4 max-w-4xl text-sm leading-8 text-slate-300 sm:text-base">
              The Big Five provides a useful framework for understanding
              how people differ in their thoughts, feelings and behaviour.
              It reminds us that personality is complex and cannot be
              explained by a single characteristic.
            </p>
          </div>
        </div>

        <div className="mt-7 grid gap-3 sm:grid-cols-5">
          {traits.map((trait) => (
            <div key={trait.letter} className="rounded-xl border border-slate-700 bg-slate-900 p-4">
              <p className="text-2xl font-bold text-indigo-300">{trait.letter}</p>
              <p className="mt-2 text-xs font-bold leading-5 text-white">
                {trait.name}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-7 max-w-4xl text-sm leading-8 text-slate-300">
          Someone can be creative yet organized, quiet yet confident,
          cooperative yet assertive, or emotionally sensitive yet highly
          responsible. Understanding the combination of traits offers a
          more balanced view of human personality.
        </p>
      </section>

      {/* FAQs */}
      <section>
        <SectionHeading
          eyebrow="Frequently Asked Questions"
          title="Big Five Personality – FAQs"
          description="Common questions about the OCEAN model, its five dimensions and personality assessment."
          icon={MessageCircle}
        />

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <details
              key={faq.question}
              className="group rounded-2xl border border-slate-200 bg-white p-5 open:border-indigo-200 open:bg-indigo-50/40"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-slate-900">
                <span>{index + 1}. {faq.question}</span>
                <span className="text-xl text-indigo-600 transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 border-t border-slate-200 pt-4 text-sm leading-7 text-slate-600">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* Further Learning */}
      <section className="rounded-2xl border border-indigo-100 bg-indigo-50 p-6 sm:p-8">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-indigo-700">
            <BookOpen size={25} />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-950">
              Continue Learning Psychology
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Personality psychology explores how individuals differ in
              their characteristic patterns of thinking, feeling and
              behaving. The Big Five is one important approach to
              understanding these differences.
            </p>
          </div>
        </div>
      </section>

    </main>
  );
}
