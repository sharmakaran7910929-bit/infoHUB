
import Link from "next/link";
import {
  Brain,
  BrainCircuit,
  Lightbulb,
  BookOpen,
  Clock,
  UserRound,
  Fingerprint,
  UsersRound,
  Activity,
  HeartPulse,
  GraduationCap,
  Microscope,
  Target,
  Dumbbell,
  Sparkles,
  ArrowRight,
  Search,
} from "lucide-react";

export const metadata = {
  title: "Psychology | Understand the Human Mind and Behaviour",
  description:
    "Explore psychology through practical explanations of cognitive processes, memory, personality, behaviour, emotions, learning and psychological theories.",
};

const articles = [
  {
    title: "What Is Psychology?",
    slug: "what-is-psychology",
    description:
      "Understand the scientific study of the human mind and behaviour, including its goals, methods and real-world applications.",
    icon: Brain,
    color: "blue",
  },
  {
    title: "Branches of Psychology",
    slug: "branches-of-psychology",
    description:
      "Explore the major branches of psychology and understand how each field studies a different aspect of the mind and behaviour.",
    icon: BookOpen,
    color: "indigo",
  },
  {
    title: "Cognitive Psychology",
    slug: "cognitive-psychology",
    description:
      "Learn how people think, perceive, process information, remember, solve problems and make decisions.",
    icon: BrainCircuit,
    color: "violet",
  },
  {
    title: "Critical Thinking",
    slug: "critical-thinking",
    description:
      "Understand how to evaluate information, question assumptions, examine evidence and reach logical conclusions.",
    icon: Lightbulb,
    color: "amber",
  },
  {
    title: "Dunning-Kruger Effect",
    slug: "dunning-kruger-effect",
    description:
      "Discover why people with limited knowledge or skill may overestimate their abilities and how this cognitive bias works.",
    icon: Brain,
    color: "rose",
  },
  {
    title: "Confirmation Bias",
    slug: "confirmation-bias",
    description:
      "Understand why people favour information that supports their existing beliefs and overlook contradictory evidence.",
    icon: Search,
    color: "cyan",
  },
  {
    title: "Types of Memory",
    slug: "types-of-memory",
    description:
      "Explore sensory, short-term and long-term memory and understand how information is encoded, stored and retrieved.",
    icon: BookOpen,
    color: "blue",
  },
  {
    title: "Learning Theories",
    slug: "learning-theories",
    description:
      "Understand major explanations of how people learn, including behavioural, cognitive and observational learning.",
    icon: GraduationCap,
    color: "emerald",
  },
  {
    title: "Working Memory",
    slug: "working-memory",
    description:
      "Learn how the mind temporarily holds and processes information while performing tasks such as reasoning and problem-solving.",
    icon: BrainCircuit,
    color: "indigo",
  },
  {
    title: "Introversion",
    slug: "introversion",
    description:
      "Understand introversion as a personality dimension, including social preferences, attention and differences between introversion and shyness.",
    icon: UserRound,
    color: "violet",
  },
  {
    title: "MBTI Personality Test",
    slug: "mbti-test",
    description:
      "Explore the Myers-Briggs Type Indicator, its 16 personality types, four preference dimensions and limitations.",
    icon: Fingerprint,
    color: "cyan",
  },
  {
    title: "Big Five Personality",
    slug: "big-five-personality",
    description:
      "Discover the five major personality dimensions: openness, conscientiousness, extraversion, agreeableness and neuroticism.",
    icon: UserRound,
    color: "blue",
  },
  {
    title: "Social Learning Theory",
    slug: "social-learning-theory",
    description:
      "Learn how people acquire behaviours by observing others, imitating actions and experiencing consequences.",
    icon: UsersRound,
    color: "sky",
  },
  {
    title: "Habit Formation",
    slug: "habit-formation",
    description:
      "Understand how habits develop through repetition, cues, routines and rewards, and how behaviour patterns can change.",
    icon: Activity,
    color: "emerald",
  },
  {
    title: "Emotional Intelligence",
    slug: "emotional-intelligence",
    description:
      "Explore the ability to recognize, understand and manage emotions in yourself and in interactions with other people.",
    icon: HeartPulse,
    color: "rose",
  },
  {
    title: "Intrinsic Motivation",
    slug: "intrinsic-motivation",
    description:
      "Understand why people engage in activities for personal interest, enjoyment, curiosity and internal satisfaction.",
    icon: Target,
    color: "amber",
  },
  {
    title: "Human Emotions",
    slug: "human-emotions",
    description:
      "Explore the nature, types and functions of emotions and how feelings influence thoughts, decisions and behaviour.",
    icon: HeartPulse,
    color: "rose",
  },
  {
    title: "Piaget Stages of Cognitive Development",
    slug: "piaget-stages",
    description:
      "Understand Jean Piaget's four stages of cognitive development and how children's thinking changes as they grow.",
    icon: GraduationCap,
    color: "indigo",
  },
  {
    title: "Cognitive Neuroscience",
    slug: "cognitive-neuroscience",
    description:
      "Discover how brain structures and neural processes support memory, attention, language, perception and decision-making.",
    icon: Microscope,
    color: "cyan",
  },
  {
    title: "Cognitive Behavioural Therapy",
    slug: "cognitive-behavioural-therapy",
    description:
      "Learn how cognitive behavioural therapy examines connections between thoughts, feelings and behaviours.",
    icon: Brain,
    color: "blue",
  },
  {
    title: "Educational Psychology",
    slug: "educational-psychology",
    description:
      "Explore how psychological principles help explain learning, teaching, student development and educational outcomes.",
    icon: GraduationCap,
    color: "emerald",
  },
  {
    title: "Stress Psychology",
    slug: "stress-psychology",
    description:
      "Understand the psychological causes and effects of stress, common stress responses and ways people cope with pressure.",
    icon: HeartPulse,
    color: "rose",
  },
  {
    title: "Sports Psychology",
    slug: "sports-psychology",
    description:
      "Discover how confidence, motivation, concentration and mental preparation influence sports performance.",
    icon: Dumbbell,
    color: "amber",
  },
  {
    title: "Consumer Psychology",
    slug: "consumer-psychology",
    description:
      "Understand how perceptions, emotions, preferences and psychological influences shape consumer decisions and buying behaviour.",
    icon: Target,
    color: "violet",
  },
  {
    title: "Positive Psychology",
    slug: "positive-psychology",
    description:
      "Explore the scientific study of well-being, personal strengths, resilience, optimism and human flourishing.",
    icon: Sparkles,
    color: "cyan",
  },
];

const colorStyles = {
  blue: "bg-blue-50 text-blue-700 border-blue-100",
  indigo: "bg-indigo-50 text-indigo-700 border-indigo-100",
  violet: "bg-violet-50 text-violet-700 border-violet-100",
  amber: "bg-amber-50 text-amber-700 border-amber-100",
  rose: "bg-rose-50 text-rose-700 border-rose-100",
  cyan: "bg-cyan-50 text-cyan-700 border-cyan-100",
  emerald: "bg-emerald-50 text-emerald-700 border-emerald-100",
  sky: "bg-sky-50 text-sky-700 border-sky-100",
};

export default function PsychologyPage() {
  return (
    <main className="min-h-screen bg-white text-slate-800">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-blue-100 bg-gradient-to-br from-white via-blue-50 to-indigo-100">
        <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-blue-200/30 blur-3xl" />
        <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-indigo-200/30 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-sm font-bold text-blue-700">
              <Brain size={17} />
              Psychology Knowledge Hub
            </div>

            <h1 className="text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Psychology
              <span className="mt-2 block bg-gradient-to-r from-blue-700 to-indigo-600 bg-clip-text text-transparent">
                Understanding the Human Mind
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Explore the science of the human mind and behaviour. Understand
              how people think, learn, remember, feel, develop personalities
              and interact with the world around them.
            </p>

            <a
              href="#psychology-articles"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-blue-700 px-6 py-3 font-bold text-white shadow-lg shadow-blue-700/20 transition hover:bg-blue-800"
            >
              Explore Psychology Topics
              <ArrowRight size={18} />
            </a>

            <div className="mt-10 flex flex-wrap gap-10">
              <div>
                <p className="text-3xl font-bold text-blue-800">
                  {articles.length}
                </p>
                <p className="mt-1 text-sm text-slate-500">
                  Individual Topics
                </p>
              </div>
              <div>
                <p className="text-3xl font-bold text-blue-800">01</p>
                <p className="mt-1 text-sm text-slate-500">
                  Organized Collection
                </p>
              </div>
            </div>
          </div>

          <div className="relative mx-auto flex aspect-square w-full max-w-lg items-center justify-center rounded-[3rem] border border-white/80 bg-white/70 shadow-2xl shadow-blue-900/10 backdrop-blur-sm">
            <div className="absolute inset-5 rounded-[2.5rem] border border-blue-100" />

            <div className="relative flex flex-col items-center">
              <div className="flex h-40 w-40 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-xl shadow-blue-700/30">
                <Brain size={100} strokeWidth={1.3} />
              </div>

              <div className="my-4 h-8 w-px bg-blue-300" />

              <div className="flex h-24 w-24 items-center justify-center rounded-full border-4 border-white bg-gradient-to-br from-cyan-100 to-blue-200 text-blue-800 shadow-lg">
                <UserRound size={62} strokeWidth={1.4} />
              </div>

              <p className="mt-4 text-sm font-bold tracking-wide text-blue-800">
                MIND · BEHAVIOUR · HUMANITY
              </p>
            </div>

            <div className="absolute left-5 top-10 rounded-2xl border border-blue-100 bg-white p-3 text-blue-700 shadow-lg">
              <Lightbulb size={25} />
            </div>
            <div className="absolute right-5 top-20 rounded-2xl border border-indigo-100 bg-white p-3 text-indigo-700 shadow-lg">
              <HeartPulse size={25} />
            </div>
            <div className="absolute bottom-12 left-6 rounded-2xl border border-cyan-100 bg-white p-3 text-cyan-700 shadow-lg">
              <UsersRound size={25} />
            </div>
            <div className="absolute bottom-12 right-6 rounded-2xl border border-violet-100 bg-white p-3 text-violet-700 shadow-lg">
              <Activity size={25} />
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr]">
          <div>
            <div className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-blue-700">
              <BrainCircuit size={18} />
              Explore Psychology
            </div>

            <h2 className="text-3xl font-bold text-slate-900">
              What Does Psychology Study?
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Psychology is the scientific study of the mind and behaviour.
              It examines how people think, perceive, learn, remember, feel,
              make decisions and interact with others. It also investigates
              how biological processes, personal experiences and social
              environments influence human behaviour.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              Its concepts are useful in everyday life, education, workplaces,
              relationships, health and understanding individual differences.
              Explore each topic below to understand a specific psychological
              concept in depth.
            </p>
          </div>

          <div className="rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 to-indigo-50 p-7">
            <h3 className="text-xl font-bold text-slate-900">
              Understand the Human Mind
            </h3>

            <div className="mt-6 space-y-5">
              {[
                [Brain, "Thinking", "How people process information"],
                [BookOpen, "Learning", "How knowledge and skills develop"],
                [HeartPulse, "Emotions", "How feelings influence behaviour"],
                [UserRound, "Personality", "Why individuals differ"],
              ].map(([Icon, title, description]) => (
                <div key={title} className="flex items-center gap-4">
                  <div className="rounded-xl bg-white p-3 text-blue-700 shadow-sm">
                    <Icon size={23} />
                  </div>
                  <div>
                    <p className="font-bold text-slate-800">{title}</p>
                    <p className="text-sm text-slate-500">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Individual Article Cards */}
      <section
        id="psychology-articles"
        className="border-y border-blue-100 bg-gradient-to-b from-blue-50/70 to-white py-16"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-bold text-blue-700">
              <BookOpen size={16} />
              Psychology Articles
            </span>

            <h2 className="mt-5 text-3xl font-bold text-slate-900 sm:text-4xl">
              Explore Individual Psychology Topics
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Each card covers one distinct concept, theory or application.
              Select a topic to explore its dedicated article.
            </p>
          </div>

          <div className="mb-8 flex items-center justify-between gap-3">
            <p className="font-bold text-slate-700">
              All Psychology Topics
            </p>
            <p className="text-sm text-slate-500">
              {articles.length} Articles
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((article, index) => {
              const Icon = article.icon;

              return (
                <Link
                  key={article.slug}
                  href={`/psychology/${article.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-blue-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-900/5"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div
                      className={`rounded-2xl border p-3 ${colorStyles[article.color]}`}
                    >
                      <Icon size={26} strokeWidth={1.8} />
                    </div>

                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-500">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-slate-900 transition group-hover:text-blue-700">
                    {article.title}
                  </h3>

                  <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">
                    {article.description}
                  </p>

                  <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4 text-sm font-bold text-blue-700">
                    <span>Explore Topic</span>
                    <ArrowRight
                      size={17}
                      className="transition group-hover:translate-x-1"
                    />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-800 via-blue-700 to-indigo-800 px-7 py-12 text-center text-white sm:px-12">
          <div className="absolute -right-12 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-12 h-64 w-64 rounded-full bg-cyan-300/10 blur-3xl" />

          <div className="relative">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15">
              <Brain size={35} />
            </div>

            <h2 className="mt-6 text-3xl font-bold">
              Understand the Mind. Understand Human Behaviour.
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-blue-100">
              Explore meaningful psychological concepts and discover the
              science behind how people think, feel, learn and act.
            </p>

            <a
              href="#psychology-articles"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-bold text-blue-800 transition hover:bg-blue-50"
            >
              Browse All Topics
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
