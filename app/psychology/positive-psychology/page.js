
import {
  Brain,
  Heart,
  Smile,
  Sun,
  Sprout,
  Star,
  ShieldCheck,
  Users,
  GraduationCap,
  BriefcaseBusiness,
  HandHeart,
  Target,
  Lightbulb,
  BookOpen,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Activity,
  Compass,
  Mountain,
  TrendingUp,
  Flower2,
  Award,
  Scale,
  HeartHandshake,
  Coffee,
  Shield,
  MessageCircleHeart,
} from "lucide-react";
import AdSlot from "../../../components/AdSlot";

export const metadata = {
  title: "Positive Psychology - Meaning, PERMA Model, Benefits and Examples | PriceTag HUB",
  description:
    "Learn positive psychology, its meaning, principles, PERMA model, happiness, gratitude, optimism, resilience, character strengths and practical applications with relatable examples.",
};

const permaElements = [
  {
    letter: "P",
    title: "Positive Emotions",
    icon: Smile,
    color: "amber",
    description:
      "Experiencing emotions such as joy, gratitude, hope, interest and contentment. Positive emotions can broaden attention and support constructive thinking.",
    example:
      "A student feels proud and happy after understanding a difficult topic.",
  },
  {
    letter: "E",
    title: "Engagement",
    icon: Activity,
    color: "blue",
    description:
      "Becoming deeply involved in an activity that uses your abilities and captures your attention. This may involve a state called flow.",
    example:
      "A person becomes so absorbed in painting that they lose track of time.",
  },
  {
    letter: "R",
    title: "Relationships",
    icon: HeartHandshake,
    color: "rose",
    description:
      "Developing supportive, respectful and meaningful connections with other people. Positive relationships provide belonging and social support.",
    example:
      "Friends encourage each other during difficult periods instead of judging one another.",
  },
  {
    letter: "M",
    title: "Meaning",
    icon: Compass,
    color: "violet",
    description:
      "Feeling that your activities contribute to something valuable beyond your immediate personal interests.",
    example:
      "A teacher finds purpose in helping students develop their abilities.",
  },
  {
    letter: "A",
    title: "Accomplishment",
    icon: Target,
    color: "emerald",
    description:
      "Working towards goals, developing skills and experiencing satisfaction from progress and achievement.",
    example:
      "A learner practises mathematics regularly and gradually improves their results.",
  },
];

const characterStrengths = [
  {
    icon: Lightbulb,
    title: "Wisdom and Knowledge",
    description:
      "Curiosity, creativity, open-mindedness, love of learning and the ability to think critically.",
    example:
      "A student explores different solutions to a problem instead of memorising only one method.",
  },
  {
    icon: Heart,
    title: "Humanity",
    description:
      "Kindness, love and social intelligence that help people understand and care for others.",
    example:
      "A person notices that a friend is struggling and offers genuine support.",
  },
  {
    icon: ShieldCheck,
    title: "Courage",
    description:
      "Bravery, persistence, honesty and enthusiasm when facing challenges.",
    example:
      "Someone continues learning a difficult skill despite making repeated mistakes.",
  },
  {
    icon: Scale,
    title: "Justice",
    description:
      "Fairness, teamwork and leadership that contribute to healthy communities.",
    example:
      "A team leader gives every member a fair opportunity to contribute.",
  },
  {
    icon: Sprout,
    title: "Temperance",
    description:
      "Forgiveness, humility, prudence and self-regulation that help people manage their behaviour.",
    example:
      "A person controls an impulsive purchase and considers their financial priorities.",
  },
  {
    icon: Sun,
    title: "Transcendence",
    description:
      "Gratitude, hope, humour and appreciation of beauty that connect people with something beyond everyday concerns.",
    example:
      "Someone appreciates nature, feels grateful for support and remains hopeful during a difficult period.",
  },
];

const dailyPractices = [
  {
    icon: Heart,
    title: "Practise Gratitude",
    description:
      "Notice and appreciate the useful, meaningful and positive things in everyday life.",
    example:
      "Before sleeping, write down three things that went well during the day.",
    color: "amber",
  },
  {
    icon: Sprout,
    title: "Develop Personal Strengths",
    description:
      "Identify abilities such as creativity, curiosity, patience and kindness, and use them regularly.",
    example:
      "Someone who enjoys explaining things helps classmates understand difficult subjects.",
    color: "emerald",
  },
  {
    icon: Mountain,
    title: "Build Resilience",
    description:
      "Learn to recover from setbacks, adapt to challenges and take constructive next steps.",
    example:
      "After failing an examination, a student identifies weak areas and changes their study plan.",
    color: "blue",
  },
  {
    icon: Sun,
    title: "Practise Realistic Optimism",
    description:
      "Look for possible solutions while recognising genuine difficulties and limitations.",
    example:
      "A job seeker prepares for the next interview after receiving a rejection.",
    color: "amber",
  },
  {
    icon: Users,
    title: "Strengthen Relationships",
    description:
      "Give attention to people, listen carefully and maintain supportive connections.",
    example:
      "A person regularly checks on a friend who is going through a difficult time.",
    color: "rose",
  },
  {
    icon: Target,
    title: "Set Meaningful Goals",
    description:
      "Choose goals that reflect personal values and break them into manageable actions.",
    example:
      "Someone sets a goal to learn a useful skill and help others with it.",
    color: "violet",
  },
];

const applications = [
  {
    icon: GraduationCap,
    title: "Education",
    description:
      "Teachers can recognise students' strengths, encourage curiosity, develop confidence and create supportive learning environments.",
    example:
      "A teacher appreciates a student's improvement in problem-solving rather than focusing only on examination marks.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Workplace",
    description:
      "Organisations can support employee well-being, meaningful work, positive relationships and opportunities for growth.",
    example:
      "A manager recognises good work, provides constructive feedback and gives employees opportunities to develop.",
  },
  {
    icon: Heart,
    title: "Personal Life",
    description:
      "People can use positive psychology principles to improve daily habits, relationships, self-awareness and life satisfaction.",
    example:
      "A person balances work with hobbies, exercise, rest and time with family.",
  },
  {
    icon: HandHeart,
    title: "Community",
    description:
      "Communities can encourage cooperation, kindness, belonging and activities that improve collective well-being.",
    example:
      "Residents organise a neighbourhood learning group where people share skills and help children study.",
  },
];

const misconceptions = [
  {
    myth: "Positive psychology means staying happy all the time.",
    reality:
      "It recognises the full range of human emotions. Sadness, fear, anger and grief are normal experiences, not personal failures.",
  },
  {
    myth: "Positive thinking can solve every problem.",
    reality:
      "Optimism can support constructive action, but it cannot remove every practical, financial, social or health-related difficulty.",
  },
  {
    myth: "Positive psychology ignores mental illness.",
    reality:
      "It studies well-being and human strengths alongside other areas of psychology. It does not replace professional mental-health care.",
  },
  {
    myth: "Happiness depends only on individual attitude.",
    reality:
      "Well-being is influenced by relationships, financial conditions, health, safety, opportunities and the wider environment.",
  },
];

const faqs = [
  {
    question: "What is positive psychology in simple words?",
    answer:
      "Positive psychology is the scientific study of what helps people live meaningful, satisfying and fulfilling lives. It explores happiness, strengths, positive emotions, relationships, resilience and personal growth.",
  },
  {
    question: "Who is known as the father of positive psychology?",
    answer:
      "Martin E. P. Seligman is widely recognised as a leading founder of the modern positive psychology movement. He helped establish it as a major area of psychological research during his presidency of the American Psychological Association in 1998.",
  },
  {
    question: "What is the PERMA model?",
    answer:
      "The PERMA model is a well-being framework associated with Martin Seligman. Its five elements are Positive Emotion, Engagement, Relationships, Meaning and Accomplishment.",
  },
  {
    question: "Is positive psychology the same as positive thinking?",
    answer:
      "No. Positive thinking generally refers to maintaining an optimistic outlook. Positive psychology is a broader scientific field that investigates well-being, human strengths, relationships, meaning and other factors that contribute to flourishing.",
  },
  {
    question: "Can positive psychology improve mental health?",
    answer:
      "Positive psychology practices may support well-being, coping and life satisfaction. However, they are not a substitute for diagnosis or treatment when someone has a mental-health condition.",
  },
  {
    question: "Can positive psychology be applied in education?",
    answer:
      "Yes. It can help educators encourage students' strengths, motivation, supportive relationships, engagement and confidence while maintaining appropriate academic expectations.",
  },
];

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      {eyebrow && (
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-widest text-blue-700">
          <Sparkles size={14} />
          {eyebrow}
        </div>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
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

function ExampleBox({ children }) {
  return (
    <div className="mt-4 rounded-xl border border-blue-100 bg-gradient-to-r from-blue-50 to-white p-4">
      <p className="mb-1 text-xs font-bold uppercase tracking-wider text-blue-700">
        Real-life example
      </p>
      <p className="text-sm leading-6 text-slate-700">{children}</p>
    </div>
  );
}

function InfoCard({ icon: Icon, title, description, example, color = "blue" }) {
  const colors = {
    blue: "bg-blue-100 text-blue-700",
    amber: "bg-amber-100 text-amber-700",
    rose: "bg-rose-100 text-rose-700",
    violet: "bg-violet-100 text-violet-700",
    emerald: "bg-emerald-100 text-emerald-700",
  };

  return (
    <div className="group rounded-2xl border border-blue-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg">
      <div
        className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl ${colors[color]}`}
      >
        <Icon size={24} />
      </div>
      <h3 className="text-lg font-bold text-slate-900">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
      {example && <ExampleBox>{example}</ExampleBox>}
    </div>
  );
}

function PermaCard({ item, index }) {
  const Icon = item.icon;

  const colors = {
    amber: "bg-amber-100 text-amber-700",
    blue: "bg-blue-100 text-blue-700",
    rose: "bg-rose-100 text-rose-700",
    violet: "bg-violet-100 text-violet-700",
    emerald: "bg-emerald-100 text-emerald-700",
  };

  return (
    <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="mb-5 flex items-center justify-between">
        <div
          className={`flex h-12 w-12 items-center justify-center rounded-xl ${colors[item.color]}`}
        >
          <Icon size={24} />
        </div>
        <span className="text-3xl font-bold text-blue-100">
          {item.letter}
        </span>
      </div>
      <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">
        {item.description}
      </p>
      <ExampleBox>{item.example}</ExampleBox>
    </div>
  );
}

export default function PositivePsychologyPage() {
  return (
    <main className="overflow-hidden bg-white text-slate-800">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-white via-blue-50 to-blue-100 px-5 py-20 sm:py-28">
        <div className="absolute -right-20 -top-24 h-80 w-80 rounded-full bg-blue-200/50 blur-3xl" />
        <div className="absolute -bottom-28 -left-16 h-80 w-80 rounded-full bg-indigo-100/70 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-sm font-bold text-blue-700 shadow-sm">
              <Brain size={16} />
              Psychology
            </div>

            <h1 className="text-4xl font-bold leading-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Positive Psychology
              <span className="mt-3 block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Understanding What Helps People Flourish
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Psychology does not only study problems, stress and mental
              difficulties. It also explores human strengths, happiness,
              meaningful relationships and the conditions that help people
              develop and live fulfilling lives.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {["Happiness", "Character Strengths", "Well-being", "Resilience"].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-bold text-blue-700 shadow-sm"
                  >
                    {item}
                  </span>
                )
              )}
            </div>
          </div>

          <div className="rounded-3xl border border-blue-100 bg-gradient-to-br from-white via-blue-50 to-indigo-100 p-7 shadow-xl sm:p-9">
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-lg">
                <Flower2 size={30} />
              </div>
              <div>
                <p className="text-sm font-bold text-blue-600">
                  The central idea
                </p>
                <h2 className="text-xl font-bold text-slate-900">
                  Human Flourishing
                </h2>
              </div>
            </div>

            <p className="text-base leading-8 text-slate-700">
              Human flourishing means living well and functioning effectively.
              It involves more than temporary happiness. It includes positive
              emotions, personal development, meaningful activities, supportive
              relationships and a sense of achievement.
            </p>

            <div className="mt-7 grid grid-cols-2 gap-3">
              {[
                ["Strengths", "Recognise abilities", Lightbulb],
                ["Purpose", "Find meaningful direction", Compass],
                ["Growth", "Develop over time", Sprout],
                ["Connection", "Build relationships", Users],
              ].map(([title, description, Icon]) => (
                <div
                  key={title}
                  className="rounded-xl border border-blue-100 bg-white/90 p-4"
                >
                  <Icon size={20} className="mb-2 text-blue-600" />
                  <p className="font-bold text-slate-900">{title}</p>
                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <SectionHeading
            eyebrow="Understanding the concept"
            title="What Is Positive Psychology?"
            description="A scientific approach to understanding the positive aspects of human experience and the factors that support well-being."
          />

          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-blue-100 bg-white p-7 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-100 to-blue-200 text-blue-700">
                <Brain size={25} />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Definition</h3>
              <p className="mt-3 leading-8 text-slate-600">
                Positive psychology is the scientific study of positive
                emotions, individual strengths, positive relationships,
                meaningful experiences and the conditions that help individuals
                and communities flourish.
              </p>
            </div>

            <div className="rounded-2xl border border-indigo-100 bg-gradient-to-br from-blue-50 to-indigo-50 p-7">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white text-indigo-700 shadow-sm">
                <Lightbulb size={25} />
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                In Simple Language
              </h3>
              <p className="mt-3 leading-8 text-slate-600">
                It studies what makes life go well, how people can use their
                strengths, how relationships contribute to happiness and how
                individuals can build a meaningful life.
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-blue-100 bg-gradient-to-r from-blue-50 to-white p-6">
            <p className="font-bold text-blue-900">An important distinction</p>
            <p className="mt-2 leading-7 text-slate-600">
              Traditional psychological approaches often focus on
              understanding and treating psychological difficulties. Positive
              psychology adds another area of investigation: understanding
              strengths, well-being and the factors that help people thrive.
              These approaches complement each other.
            </p>
          </div>
        </div>
      </section>
<AdSlot />
      {/* History */}
      <section className="bg-gradient-to-b from-blue-50/80 to-white px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <SectionHeading
            eyebrow="Background"
            title="Origin and Development of Positive Psychology"
            description="The modern positive psychology movement brought greater scientific attention to happiness, strengths and human flourishing."
          />

          <div className="relative space-y-6">
            <div className="absolute bottom-8 left-5 top-8 hidden w-0.5 bg-blue-200 sm:block" />

            {[
              {
                year: "Before the modern movement",
                title: "Earlier Ideas About a Good Life",
                description:
                  "Philosophers and psychologists had long explored happiness, virtue, purpose, character and human potential. These ideas provided important foundations.",
              },
              {
                year: "1998",
                title: "Martin Seligman's Leadership",
                description:
                  "Martin E. P. Seligman, as president of the American Psychological Association, helped promote positive psychology as a distinct research movement.",
              },
              {
                year: "2000",
                title: "Scientific Research Gains Momentum",
                description:
                  "Seligman and Mihaly Csikszentmihalyi published an influential introduction to positive psychology in the American Psychologist journal.",
              },
              {
                year: "Following years",
                title: "Broader Research and Applications",
                description:
                  "Research expanded into character strengths, positive emotions, resilience, education, workplaces, relationships and well-being.",
              },
            ].map((item, index) => (
              <div key={item.year} className="relative flex gap-5 sm:gap-8">
                <div className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-4 border-white bg-gradient-to-br from-blue-500 to-indigo-600 text-sm font-bold text-white shadow">
                  {index + 1}
                </div>
                <div className="flex-1 rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
                  <p className="text-sm font-bold text-blue-600">{item.year}</p>
                  <h3 className="mt-1 text-lg font-bold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-blue-100 bg-gradient-to-r from-blue-50 to-indigo-50 p-7">
            <div className="flex items-start gap-4">
              <Award className="mt-1 shrink-0 text-blue-600" size={30} />
              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  Important Contributors
                </h3>
                <p className="mt-2 leading-7 text-slate-600">
                  Martin Seligman is widely recognised as a leading founder of
                  modern positive psychology. Mihaly Csikszentmihalyi also made
                  major contributions, particularly through his research on
                  flow, the state of deep involvement in an activity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PERMA Model */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Core framework"
            title="The PERMA Model of Well-being"
            description="Martin Seligman's PERMA model describes five important elements that contribute to well-being and human flourishing."
          />

          <div className="mb-10 flex flex-wrap justify-center gap-3">
            {permaElements.map((item) => (
              <div
                key={item.letter}
                className="flex h-16 w-16 flex-col items-center justify-center rounded-2xl border border-blue-100 bg-gradient-to-br from-white to-blue-100 shadow-sm"
              >
                <span className="text-2xl font-bold text-blue-700">
                  {item.letter}
                </span>
              </div>
            ))}
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {permaElements.map((item, index) => (
              <PermaCard key={item.letter} item={item} index={index} />
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-blue-100 bg-gradient-to-r from-blue-50 to-indigo-50 p-6">
            <h3 className="font-bold text-blue-950">
              How Do the Five Elements Work Together?
            </h3>
            <p className="mt-2 leading-7 text-slate-700">
              Imagine a student who enjoys learning, becomes deeply engaged in
              studying, has supportive friends, believes education gives life
              meaning and works towards academic goals. These experiences
              contribute to different dimensions of well-being together.
              Someone does not need to score highly in every dimension every
              day; the model helps identify different areas of a fulfilling
              life.
            </p>
          </div>
        </div>
      </section>

      {/* Character strengths */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Personal development"
            title="Character Strengths in Positive Psychology"
            description="Character strengths are positive qualities that influence how people think, feel and behave."
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {characterStrengths.map((item) => (
              <InfoCard
                key={item.title}
                icon={item.icon}
                title={item.title}
                description={item.description}
                example={item.example}
                color="blue"
              />
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
            <h3 className="font-bold text-slate-900">
              The VIA Classification
            </h3>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              These six broad virtue categories come from the VIA
              classification of character strengths. Each category includes
              several more specific strengths, such as creativity, kindness,
              bravery and gratitude.
            </p>
          </div>
        </div>
      </section>
<AdSlot />
      {/* Key concepts */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Important concepts"
            title="Key Ideas Studied in Positive Psychology"
            description="Positive psychology examines several connected experiences and abilities that contribute to well-being."
          />

          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                icon: Smile,
                title: "Happiness and Life Satisfaction",
                description:
                  "Happiness can involve positive feelings in the moment, while life satisfaction refers to a person's overall evaluation of their life.",
                example:
                  "Enjoying a family celebration may create temporary happiness, while feeling satisfied with one's relationships and progress reflects broader life satisfaction.",
              },
              {
                icon: Heart,
                title: "Gratitude",
                description:
                  "Gratitude involves recognising and appreciating the good things, support and opportunities present in life.",
                example:
                  "A person appreciates a colleague who helped them complete a difficult task instead of treating the support as automatic.",
              },
              {
                icon: Sun,
                title: "Optimism",
                description:
                  "Optimism is the tendency to expect that positive outcomes are possible. Realistic optimism also recognises challenges and uncertainty.",
                example:
                  "After a business setback, an entrepreneur studies what went wrong and develops a more practical plan.",
              },
              {
                icon: ShieldCheck,
                title: "Resilience",
                description:
                  "Resilience is the ability to adapt to adversity, recover from difficulties and continue functioning or growing.",
                example:
                  "A person who loses a job seeks support, improves their skills and explores new employment opportunities.",
              },
              {
                icon: Activity,
                title: "Flow",
                description:
                  "Flow is a state of deep concentration and involvement in an activity, often when the challenge is well matched to a person's skills.",
                example:
                  "A programmer becomes fully absorbed in solving a complex coding problem and barely notices the passage of time.",
              },
              {
                icon: Compass,
                title: "Meaning and Purpose",
                description:
                  "Meaning involves feeling that life and activities are valuable and connected to something important.",
                example:
                  "Someone volunteers to teach children because helping others gives them a sense of purpose.",
              },
            ].map((item) => (
              <InfoCard
                key={item.title}
                icon={item.icon}
                title={item.title}
                description={item.description}
                example={item.example}
                color="blue"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Daily practices */}
      <section className="bg-gradient-to-b from-blue-50 to-white px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Practical application"
            title="How to Apply Positive Psychology in Daily Life"
            description="Small, consistent actions can help people recognise their strengths, develop healthy habits and build more meaningful experiences."
          />

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {dailyPractices.map((item) => (
              <InfoCard
                key={item.title}
                icon={item.icon}
                title={item.title}
                description={item.description}
                example={item.example}
                color={item.color}
              />
            ))}
          </div>
        </div>
      </section>
<AdSlot />
      {/* Applications */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Beyond the individual"
            title="Applications of Positive Psychology"
            description="Its principles can be used in different environments to support individual and collective well-being."
          />

          <div className="grid gap-6 sm:grid-cols-2">
            {applications.map((item) => (
              <InfoCard
                key={item.title}
                icon={item.icon}
                title={item.title}
                description={item.description}
                example={item.example}
                color="blue"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Practical scenario */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <SectionHeading
            eyebrow="Putting it together"
            title="A Practical Example: Two Students Facing Failure"
            description="The same difficult experience can lead to different responses. Positive psychology helps us understand the strengths and resources that support constructive responses."
          />

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-blue-100 bg-white p-7 shadow-sm">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-blue-100 to-indigo-100 text-blue-700">
                <BookOpen size={27} />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Student A</h3>
              <p className="mt-4 leading-7 text-slate-600">
                Student A fails an examination and believes that one failure
                proves they are incapable of learning. They stop practising and
                avoid asking for help.
              </p>
              <div className="mt-5 rounded-xl bg-blue-50 p-4">
                <p className="text-sm font-bold text-blue-800">
                  Possible Response
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  The student becomes discouraged and misses opportunities to
                  understand and improve weak areas.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-blue-200 bg-white p-7 shadow-sm">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white">
                <TrendingUp size={27} />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Student B</h3>
              <p className="mt-4 leading-7 text-slate-600">
                Student B also fails but treats the result as feedback. They
                identify difficult subjects, ask a teacher for guidance and
                prepare a realistic study schedule.
              </p>
              <div className="mt-5 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 p-4">
                <p className="text-sm font-bold text-blue-800">
                  Possible Response
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  The student uses resilience, realistic optimism, support and
                  goal-setting to work towards improvement.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-7 rounded-2xl border border-blue-100 bg-gradient-to-r from-blue-100 to-indigo-100 p-7">
            <h3 className="text-lg font-bold text-blue-950">
              What Does This Example Teach?
            </h3>
            <p className="mt-3 leading-8 text-slate-700">
              Positive psychology does not promise that Student B will
              automatically pass the next examination. It helps explain how
              strengths, supportive relationships, realistic goals and
              constructive responses can improve the way a person deals with
              difficulties.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits and limitations */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Balanced understanding"
            title="Benefits and Limitations of Positive Psychology"
            description="Positive psychology offers useful ideas, but it should be understood realistically rather than treated as a solution to every difficulty."
          />

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-7">
              <h3 className="mb-5 flex items-center gap-3 text-xl font-bold text-blue-950">
                <CheckCircle2 size={24} className="text-blue-600" />
                Potential Benefits
              </h3>
              <ul className="space-y-4 text-sm leading-7 text-slate-700">
                {[
                  "Encourages awareness and use of personal strengths.",
                  "Supports positive relationships and social connection.",
                  "Can help people develop constructive coping strategies.",
                  "Encourages meaningful goals and personal development.",
                  "Promotes attention to well-being alongside problem-solving.",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <CheckCircle2
                      className="mt-1 shrink-0 text-blue-600"
                      size={17}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-indigo-100 bg-gradient-to-br from-indigo-50 to-white p-7">
              <h3 className="mb-5 flex items-center gap-3 text-xl font-bold text-indigo-950">
                <Shield size={24} className="text-indigo-600" />
                Important Limitations
              </h3>
              <ul className="space-y-4 text-sm leading-7 text-slate-700">
                {[
                  "Positive emotions cannot remove every life difficulty.",
                  "Well-being is also influenced by social and economic conditions.",
                  "Not every practice works equally well for every person.",
                  "Research findings should be evaluated for quality and context.",
                  "It does not replace professional treatment for mental-health conditions.",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <ArrowRight
                      className="mt-1 shrink-0 text-indigo-600"
                      size={17}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
<AdSlot />
      {/* Misconceptions */}
      <section className="bg-gradient-to-b from-blue-50 to-white px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <SectionHeading
            eyebrow="Clear the confusion"
            title="Common Misconceptions About Positive Psychology"
            description="Understanding what positive psychology does not mean is just as important as understanding its principles."
          />

          <div className="space-y-4">
            {misconceptions.map((item, index) => (
              <div
                key={item.myth}
                className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm"
              >
                <p className="font-bold text-slate-900">
                  <span className="mr-2 text-blue-600">{index + 1}.</span>
                  {item.myth}
                </p>
                <p className="mt-3 border-l-2 border-blue-400 pl-4 text-sm leading-7 text-slate-600">
                  {item.reality}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-4xl">
          <SectionHeading
            eyebrow="Frequently asked questions"
            title="Positive Psychology FAQs"
            description="Answers to common questions about the meaning, principles and practical use of positive psychology."
          />

          <div className="space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-xl border border-blue-100 bg-white p-5 shadow-sm open:border-blue-300 open:bg-blue-50/50"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-slate-900">
                  <span>{faq.question}</span>
                  <span className="text-xl text-blue-600 transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 border-t border-blue-100 pt-4 text-sm leading-7 text-slate-600">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="bg-gradient-to-br from-white via-blue-50 to-blue-100 px-5 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-lg">
            <Flower2 size={34} />
          </div>

          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-blue-600">
            Key Takeaway
          </p>

          <h2 className="text-3xl font-bold text-slate-950 sm:text-4xl">
            A Good Life Is About More Than Feeling Happy
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Positive psychology helps us understand how positive emotions,
            personal strengths, supportive relationships, meaningful goals and
            a sense of accomplishment contribute to human well-being. Its
            central message is not to ignore life's difficulties, but to
            recognise and develop the resources that help people live and
            function well.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-3">
            {[
              "Well-being",
              "Strengths",
              "Relationships",
              "Meaning",
              "Growth",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-bold text-blue-700 shadow-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
