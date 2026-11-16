
import {
  Brain,
  Lightbulb,
  Target,
  Heart,
  BookOpen,
  Briefcase,
  GraduationCap,
  Dumbbell,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Compass,
  Trophy,
  Users,
  ShieldCheck,
  RefreshCw,
  AlertCircle,
  TrendingUp,
  Eye,
  Zap,
  HelpCircle,
  Clock,
  HeartHandshake,
  Layers,
  Star,
} from "lucide-react";
import AdSlot from "../../../components/AdSlot";

export const metadata = {
  title: "Intrinsic Motivation | Meaning, Examples and Psychology | PriceTag HUB",
  description:
    "Understand intrinsic motivation, its psychological meaning, Self-Determination Theory, autonomy, competence, relatedness, real-life examples, benefits and practical ways to develop it.",
};

const components = [
  {
    icon: Compass,
    title: "Autonomy",
    subtitle: "A sense of choice",
    description:
      "Feeling that you have control over your actions and are choosing to do something willingly rather than acting only because someone forces you.",
    example:
      "A student chooses to learn programming because they genuinely enjoy solving problems.",
  },
  {
    icon: Trophy,
    title: "Competence",
    subtitle: "A sense of progress",
    description:
      "Feeling capable of completing a task, improving your abilities and overcoming challenges through learning and practice.",
    example:
      "A beginner continues practising a musical instrument because they enjoy noticing their improvement.",
  },
  {
    icon: Users,
    title: "Relatedness",
    subtitle: "A sense of connection",
    description:
      "Feeling connected to other people and experiencing acceptance, belonging and meaningful relationships.",
    example:
      "A person participates in a community project because they enjoy contributing alongside others.",
  },
];

const examples = [
  {
    icon: BookOpen,
    title: "Learning",
    situation: "Reading a book out of curiosity.",
    motivation:
      "The person enjoys discovering new ideas, even when there is no examination or reward.",
  },
  {
    icon: Dumbbell,
    title: "Fitness",
    situation: "Exercising because physical activity feels enjoyable.",
    motivation:
      "The satisfaction comes from the activity itself, rather than only from appearance or prizes.",
  },
  {
    icon: Lightbulb,
    title: "Creativity",
    situation: "Painting, writing or making music for personal enjoyment.",
    motivation:
      "The creative process itself provides interest and satisfaction.",
  },
  {
    icon: Briefcase,
    title: "Work",
    situation: "Solving a challenging problem because the work is interesting.",
    motivation:
      "The person finds the task intellectually engaging, beyond salary or promotion.",
  },
  {
    icon: HeartHandshake,
    title: "Helping others",
    situation: "Volunteering because helping people feels meaningful.",
    motivation:
      "The activity is personally satisfying, rather than being performed only for recognition.",
  },
  {
    icon: Brain,
    title: "Problem-solving",
    situation: "Solving puzzles or exploring difficult questions.",
    motivation:
      "The enjoyment comes from curiosity, discovery and the challenge itself.",
  },
];

const strategies = [
  {
    number: "01",
    title: "Choose personally meaningful goals",
    description:
      "Connect activities with interests, values and things you genuinely want to understand or accomplish. A meaningful reason can make it easier to stay engaged.",
  },
  {
    number: "02",
    title: "Give yourself some control",
    description:
      "Whenever possible, choose how, when or in what order you complete a task. Having meaningful choices can support a sense of autonomy.",
  },
  {
    number: "03",
    title: "Break challenges into manageable steps",
    description:
      "Set achievable milestones that allow you to experience progress while still providing enough challenge to maintain interest.",
  },
  {
    number: "04",
    title: "Develop skills through practice",
    description:
      "Focus on learning and improvement instead of expecting immediate perfection. Recognizing progress can strengthen your sense of competence.",
  },
  {
    number: "05",
    title: "Explore what genuinely interests you",
    description:
      "Experiment with different subjects, activities and methods. Curiosity often develops when you have opportunities to discover what you enjoy.",
  },
  {
    number: "06",
    title: "Focus on the experience, not only the result",
    description:
      "Notice what you enjoy about the process of learning, creating or practising. This helps prevent every activity from becoming dependent on an external outcome.",
  },
];

const faqs = [
  {
    question: "What is intrinsic motivation in simple words?",
    answer:
      "Intrinsic motivation means doing something because you find the activity itself interesting, enjoyable or personally satisfying, rather than doing it only to receive an external reward or avoid punishment.",
  },
  {
    question: "What is an example of intrinsic motivation?",
    answer:
      "A person learning to play the guitar because they enjoy music and the process of practising is an example of intrinsic motivation.",
  },
  {
    question: "What are the three basic psychological needs in Self-Determination Theory?",
    answer:
      "Self-Determination Theory identifies autonomy, competence and relatedness as three basic psychological needs. Supporting these needs can encourage more self-determined motivation and well-being.",
  },
  {
    question: "What is the difference between intrinsic and extrinsic motivation?",
    answer:
      "Intrinsic motivation comes from interest or satisfaction in the activity itself. Extrinsic motivation involves doing an activity to obtain a separate outcome, such as money, grades, praise or avoiding punishment.",
  },
  {
    question: "Can intrinsic motivation be developed?",
    answer:
      "Yes. It can be supported by exploring interests, providing meaningful choices, developing skills, setting suitable challenges and connecting activities with personal values. However, not every activity will become intrinsically enjoyable.",
  },
  {
    question: "Is intrinsic motivation always better than extrinsic motivation?",
    answer:
      "No. Both can be useful. External incentives may help initiate or support certain tasks, while intrinsic motivation can make an activity personally rewarding. Their usefulness depends on the person, activity and circumstances.",
  },
  {
    question: "Can rewards reduce intrinsic motivation?",
    answer:
      "Some expected, controlling rewards can reduce intrinsic interest in certain circumstances, particularly when people feel their freedom of choice is being undermined. However, rewards do not automatically reduce motivation; their effects depend on how they are experienced and the context.",
  },
  {
    question: "Does intrinsic motivation mean working without goals?",
    answer:
      "No. Intrinsically motivated people can have clear goals. The important distinction is that their interest or satisfaction comes from the activity itself, not only from reaching an external outcome.",
  },
];

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      {eyebrow && (
        <p className="mb-3 text-sm font-bold uppercase tracking-wider text-blue-700">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
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

function InfoCard({ icon: Icon, title, children }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
        <Icon size={24} />
      </div>
      <h3 className="text-lg font-bold text-slate-900">{title}</h3>
      <div className="mt-3 text-sm leading-7 text-slate-600">{children}</div>
    </div>
  );
}

export default function IntrinsicMotivationPage() {
  return (
    <main className="min-h-screen bg-white text-slate-800">

      {/* HERO */}
      <section className="px-5 pb-12 pt-10 sm:pb-16 sm:pt-14">
        <div className="mx-auto max-w-6xl rounded-3xl border border-blue-100 bg-gradient-to-br from-white via-blue-50 to-indigo-100 px-6 py-10 shadow-sm sm:px-12 sm:py-14">
          <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">

            {/* LEFT CONTENT */}
            <div className="text-center lg:text-left">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-sm font-bold text-blue-800">
                <Brain size={17} />
                Psychology & Human Behaviour
              </div>

              <h1 className="text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-6xl">
                Intrinsic Motivation
              </h1>

              <p className="mt-5 text-lg font-bold text-blue-800 sm:text-xl">
                The Drive to Do Something Because You Enjoy It
              </p>

              <p className="mt-6 text-base leading-8 text-slate-600">
                Why do people spend hours learning a skill, solving a difficult
                problem or creating something without expecting a reward?
                Intrinsic motivation explains the internal interest and
                satisfaction that encourage people to engage in activities
                for their own sake.
              </p>

              <div className="mt-9 flex flex-wrap justify-center gap-3 lg:justify-start">
                <a
                  href="#meaning"
                  className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-bold text-white transition hover:bg-blue-700"
                >
                  Explore the Topic
                  <ArrowRight size={18} />
                </a>
                <a
                  href="#theory"
                  className="rounded-xl border border-blue-200 bg-white px-6 py-3 font-bold text-blue-800 transition hover:bg-blue-50"
                >
                  Understand the Theory
                </a>
              </div>

              <div className="mt-9 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm font-bold text-slate-600 lg:justify-start">
                <span className="flex items-center gap-2">
                  <CheckCircle2 size={17} className="text-blue-600" />
                  Psychology Concepts
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 size={17} className="text-blue-600" />
                  Real-Life Examples
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 size={17} className="text-blue-600" />
                  Practical Strategies
                </span>
              </div>
            </div>

            {/* RIGHT-SIDE VISUAL */}
            <div className="mx-auto w-full max-w-md">
              <div className="rounded-3xl border border-blue-100 bg-white/90 p-6 shadow-sm sm:p-7">
                <div className="text-center">
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">
                    <Lightbulb size={42} strokeWidth={1.7} />
                  </div>
                  <h2 className="mt-4 text-xl font-bold text-slate-900">
                    What Drives You?
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    Motivation can grow when an activity provides personal
                    interest and satisfaction.
                  </p>
                </div>

                <div className="mt-7 space-y-3">
                  <div className="flex items-center gap-3 rounded-xl border border-blue-100 bg-blue-50 p-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white text-blue-700">
                      <Eye size={21} />
                    </div>
                    <div>
                      <p className="font-bold text-slate-800">Interest</p>
                      <p className="text-xs text-slate-500">
                        Something catches your attention
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <ArrowRight className="rotate-90 text-blue-400" size={20} />
                  </div>

                  <div className="flex items-center gap-3 rounded-xl border border-indigo-100 bg-indigo-50 p-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white text-indigo-700">
                      <Brain size={21} />
                    </div>
                    <div>
                      <p className="font-bold text-slate-800">
                        Engagement
                      </p>
                      <p className="text-xs text-slate-500">
                        You willingly take part in the activity
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <ArrowRight className="rotate-90 text-blue-400" size={20} />
                  </div>

                  <div className="flex items-center gap-3 rounded-xl border border-emerald-100 bg-emerald-50 p-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white text-emerald-700">
                      <Star size={21} />
                    </div>
                    <div>
                      <p className="font-bold text-slate-800">
                        Satisfaction
                      </p>
                      <p className="text-xs text-slate-500">
                        The experience itself feels rewarding
                      </p>
                    </div>
                  </div>
                </div>

                <p className="mt-5 rounded-xl bg-slate-50 px-4 py-3 text-center text-sm font-bold text-blue-800">
                  Enjoyment in the activity itself
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MEANING */}
      <section id="meaning" className="px-5 py-14 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <SectionHeading
            eyebrow="Basic Concept"
            title="What Is Intrinsic Motivation?"
            description="Understand the internal source of motivation and why people sometimes do things simply because they find them rewarding."
          />

          <div className="rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-7 sm:p-10">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-600 text-white">
                <Brain size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  Definition of Intrinsic Motivation
                </h3>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Intrinsic motivation is the desire to engage in an activity
                  because the activity itself is interesting, enjoyable or
                  personally satisfying. The individual participates because
                  they find value or enjoyment in doing it, rather than acting
                  only to obtain a separate external reward or avoid
                  punishment.
                </p>
                <p className="mt-4 text-sm font-bold text-blue-800">
                  Simple meaning: Doing something because you genuinely want
                  to do it.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <InfoCard icon={Lightbulb} title="An everyday example">
              Imagine someone who spends an evening learning a new language
              because they enjoy discovering new words and understanding
              another culture. They are not studying for an examination or
              financial reward. Their interest in learning is the main
              motivation.
            </InfoCard>
            <InfoCard icon={Target} title="What makes it intrinsic?">
              The satisfaction comes from the activity itself. Learning,
              exploring, practising or creating provides an internal reason
              to participate, even when no immediate external reward is
              offered.
            </InfoCard>
          </div>
        </div>
      </section>
<AdSlot />
      {/* HOW IT WORKS */}
      <section className="bg-slate-50 px-5 py-14 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Psychological Process"
            title="How Does Intrinsic Motivation Work?"
            description="Interest can encourage participation, while the experience of learning, progress and enjoyment can make an activity personally rewarding."
          />

          <div className="grid gap-4 md:grid-cols-4">
            {[
              {
                icon: Eye,
                title: "Curiosity",
                description:
                  "Something attracts your attention and makes you want to explore it.",
              },
              {
                icon: Zap,
                title: "Participation",
                description:
                  "You willingly begin the activity because you find it interesting.",
              },
              {
                icon: TrendingUp,
                title: "Progress",
                description:
                  "You learn, practise, solve problems or develop new abilities.",
              },
              {
                icon: Heart,
                title: "Satisfaction",
                description:
                  "The activity provides enjoyment or a sense of personal fulfilment.",
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                    <Icon size={24} />
                  </div>
                  <p className="mb-2 text-xs font-bold uppercase tracking-wider text-blue-600">
                    Step {index + 1}
                  </p>
                  <h3 className="text-lg font-bold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

          <p className="mt-6 rounded-2xl border border-blue-100 bg-blue-50 p-5 text-sm leading-7 text-blue-900">
            <strong>Important:</strong> This is a simplified way to understand
            the experience, not a fixed sequence that every person follows.
            Motivation can change depending on the activity, environment,
            interests and individual circumstances.
          </p>
        </div>
      </section>

      {/* INTRINSIC VS EXTRINSIC */}
      <section className="px-5 py-14 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Types of Motivation"
            title="Intrinsic vs Extrinsic Motivation"
            description="Both forms can encourage people to act, but they differ in the reason behind the behaviour."
          />

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-blue-200 bg-blue-50/60 p-7">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white">
                  <Heart size={25} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    Intrinsic Motivation
                  </h3>
                  <p className="text-sm font-bold text-blue-700">
                    Internal interest
                  </p>
                </div>
              </div>
              <p className="leading-7 text-slate-700">
                A person performs an activity because it is enjoyable,
                interesting or personally satisfying.
              </p>
              <div className="mt-5 rounded-xl bg-white p-4">
                <p className="text-sm font-bold text-slate-900">
                  Example
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  A person learns photography because they enjoy capturing
                  and understanding images.
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-orange-200 bg-orange-50/60 p-7">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500 text-white">
                  <Trophy size={25} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    Extrinsic Motivation
                  </h3>
                  <p className="text-sm font-bold text-orange-700">
                    External outcome
                  </p>
                </div>
              </div>
              <p className="leading-7 text-slate-700">
                A person performs an activity to obtain a separate outcome,
                such as money, grades, recognition or avoiding punishment.
              </p>
              <div className="mt-5 rounded-xl bg-white p-4">
                <p className="text-sm font-bold text-slate-900">
                  Example
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  A student studies mainly to receive high marks and earn a
                  scholarship.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 overflow-x-auto rounded-2xl border border-slate-200">
            <table className="w-full min-w-[600px] text-left text-sm">
              <thead className="bg-slate-100 text-slate-900">
                <tr>
                  <th className="p-4 font-bold">Basis</th>
                  <th className="p-4 font-bold">Intrinsic Motivation</th>
                  <th className="p-4 font-bold">Extrinsic Motivation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white text-slate-600">
                <tr>
                  <td className="p-4 font-bold text-slate-800">Main reason</td>
                  <td className="p-4">Interest or enjoyment</td>
                  <td className="p-4">A separate outcome</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-slate-800">Reward</td>
                  <td className="p-4">The activity itself is rewarding</td>
                  <td className="p-4">An external consequence or outcome</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-slate-800">Example</td>
                  <td className="p-4">Reading out of curiosity</td>
                  <td className="p-4">Reading to pass an examination</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-slate-800">Focus</td>
                  <td className="p-4">The experience of doing the task</td>
                  <td className="p-4">What the task helps achieve</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-5 text-sm leading-7 text-slate-600">
            <strong>Remember:</strong> The same activity can involve both
            forms of motivation. A student may enjoy learning mathematics
            while also wanting to achieve good examination results.
          </p>
        </div>
      </section>

      {/* SELF DETERMINATION THEORY */}
      <section id="theory" className="bg-blue-50/60 px-5 py-14 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Important Psychological Theory"
            title="Self-Determination Theory (SDT)"
            description="A major psychological framework for understanding human motivation, developed by Edward L. Deci and Richard M. Ryan."
          />

          <div className="rounded-3xl border border-blue-100 bg-white p-7 shadow-sm sm:p-9">
            <p className="text-base leading-8 text-slate-700">
              Self-Determination Theory explains how social environments and
              personal experiences influence motivation and psychological
              well-being. It identifies three basic psychological needs:
              autonomy, competence and relatedness. When these needs are
              supported, people are more likely to experience self-determined
              forms of motivation.
            </p>

            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {components.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-blue-700 shadow-sm">
                      <Icon size={25} />
                    </div>
                    <h3 className="mt-4 text-xl font-bold text-slate-900">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm font-bold text-blue-700">
                      {item.subtitle}
                    </p>
                    <p className="mt-4 text-sm leading-7 text-slate-600">
                      {item.description}
                    </p>
                    <div className="mt-4 rounded-xl bg-white p-4">
                      <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
                        Example
                      </p>
                      <p className="mt-2 text-sm leading-6 text-slate-700">
                        {item.example}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-indigo-100 bg-white p-6">
            <h3 className="text-lg font-bold text-slate-900">
              How the three needs work together
            </h3>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              Consider a person learning to play the piano. They can choose
              the songs they practise (autonomy), notice that their playing
              is improving (competence), and enjoy learning with a supportive
              teacher or group (relatedness). These experiences can support
              their motivation and continued participation.
            </p>
          </div>

          <div className="mt-6 rounded-2xl border border-blue-200 bg-blue-100/60 p-5">
            <p className="text-sm leading-7 text-blue-950">
              <strong>Psychological distinction:</strong> Self-Determination
              Theory covers more than intrinsic motivation. It also explains
              different forms of extrinsic motivation and how external reasons
              for acting can become more personally accepted and
              self-directed.
            </p>
          </div>
        </div>
      </section>
<AdSlot />
      {/* REAL LIFE EXAMPLES */}
      <section className="px-5 py-14 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Everyday Applications"
            title="Examples of Intrinsic Motivation in Real Life"
            description="Intrinsic motivation can appear in education, careers, hobbies, relationships and everyday problem-solving."
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {examples.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                    <Icon size={24} />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm font-bold leading-6 text-slate-700">
                    {item.situation}
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    {item.motivation}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* IMPORTANCE */}
      <section className="bg-slate-50 px-5 py-14 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Why It Matters"
            title="Importance of Intrinsic Motivation"
            description="Interest in an activity can influence how people approach learning, challenges, personal development and everyday tasks."
          />

          <div className="grid gap-5 md:grid-cols-2">
            <InfoCard icon={BookOpen} title="Supports meaningful learning">
              When learners are interested in a subject, they may explore it
              beyond the minimum requirements. Curiosity can encourage
              questioning, experimentation and deeper understanding.
            </InfoCard>

            <InfoCard icon={RefreshCw} title="Encourages continued engagement">
              Enjoyment in an activity can provide a reason to return to it.
              This may help people continue practising or exploring even
              without frequent external rewards.
            </InfoCard>

            <InfoCard icon={Lightbulb} title="Supports creativity">
              Interest and freedom to explore can encourage experimentation,
              original ideas and different approaches to solving problems.
            </InfoCard>

            <InfoCard icon={ShieldCheck} title="Supports personal development">
              Activities pursued out of interest can create opportunities
              to develop skills, discover strengths and understand personal
              preferences.
            </InfoCard>

            <InfoCard icon={Heart} title="Can improve enjoyment">
              When people find an activity personally rewarding, the
              experience itself can contribute to satisfaction and
              enjoyment.
            </InfoCard>

            <InfoCard icon={Target} title="Encourages self-directed action">
              Intrinsic interest can help people take initiative, explore
              opportunities and make progress without depending entirely
              on external instructions.
            </InfoCard>
          </div>
        </div>
      </section>

      {/* HOW TO DEVELOP */}
      <section className="px-5 py-14 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <SectionHeading
            eyebrow="Practical Psychology"
            title="How to Develop Intrinsic Motivation"
            description="You cannot force yourself to enjoy every activity, but you can create conditions that make interest, engagement and personal satisfaction more likely."
          />

          <div className="space-y-4">
            {strategies.map((item) => (
              <div key={item.number} className="flex gap-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-sm font-bold text-blue-800">
                  {item.number}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
<AdSlot />
      {/* APPLICATIONS */}
      <section className="bg-blue-50/60 px-5 py-14 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Where It Is Used"
            title="Applications of Intrinsic Motivation"
            description="Understanding internal motivation can help educators, employers, parents and individuals create environments that encourage genuine engagement."
          />

          <div className="grid gap-5 md:grid-cols-2">
            <InfoCard icon={GraduationCap} title="In Education">
              Teachers can support students by offering meaningful choices,
              connecting lessons to students' interests, encouraging
              questions and providing suitable challenges instead of
              depending only on grades and prizes.
            </InfoCard>

            <InfoCard icon={Briefcase} title="In the Workplace">
              Employees may feel more engaged when their work provides
              opportunities for learning, problem-solving, responsibility
              and meaningful contribution. Supportive management can help
              create these conditions.
            </InfoCard>

            <InfoCard icon={HeartHandshake} title="In Parenting">
              Parents can encourage curiosity and exploration by allowing
              children to make age-appropriate choices, learn from mistakes
              and develop skills without making every activity dependent
              on rewards.
            </InfoCard>

            <InfoCard icon={Dumbbell} title="In Sports and Fitness">
              Enjoyment, skill development and personal progress can help
              people stay involved in physical activities. Winning and
              recognition can matter too, but they need not be the only
              reasons to participate.
            </InfoCard>
          </div>
        </div>
      </section>

      {/* LIMITATIONS */}
      <section className="px-5 py-14 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <SectionHeading
            eyebrow="A Balanced Understanding"
            title="Limitations and Challenges"
            description="Intrinsic motivation is valuable, but it is not a universal solution for every task or situation."
          />

          <div className="space-y-5">
            <div className="flex gap-4 rounded-2xl border border-amber-200 bg-amber-50 p-6">
              <AlertCircle className="mt-1 shrink-0 text-amber-700" size={23} />
              <div>
                <h3 className="font-bold text-slate-900">
                  Not every task is enjoyable
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-700">
                  Necessary activities such as routine administration,
                  household responsibilities or difficult work may not
                  naturally generate interest. External structure and
                  incentives can still be useful.
                </p>
              </div>
            </div>

            <div className="flex gap-4 rounded-2xl border border-amber-200 bg-amber-50 p-6">
              <AlertCircle className="mt-1 shrink-0 text-amber-700" size={23} />
              <div>
                <h3 className="font-bold text-slate-900">
                  Interest can change over time
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-700">
                  An activity that once felt exciting may become repetitive
                  or less interesting. Motivation can fluctuate with
                  experience, environment, energy and changing priorities.
                </p>
              </div>
            </div>

            <div className="flex gap-4 rounded-2xl border border-amber-200 bg-amber-50 p-6">
              <AlertCircle className="mt-1 shrink-0 text-amber-700" size={23} />
              <div>
                <h3 className="font-bold text-slate-900">
                  External responsibilities still matter
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-700">
                  People sometimes need to complete tasks because of
                  responsibilities, deadlines or practical needs, even when
                  they do not enjoy them. Intrinsic motivation is only one
                  part of human motivation.
                </p>
              </div>
            </div>

            <div className="flex gap-4 rounded-2xl border border-amber-200 bg-amber-50 p-6">
              <AlertCircle className="mt-1 shrink-0 text-amber-700" size={23} />
              <div>
                <h3 className="font-bold text-slate-900">
                  Too much pressure can reduce enjoyment
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-700">
                  When an enjoyable activity becomes excessively controlled,
                  evaluated or pressured, some people may experience less
                  freedom and interest. The effect depends on the situation
                  and how the person experiences that pressure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMMON MISCONCEPTIONS */}
      <section className="bg-slate-50 px-5 py-14 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <SectionHeading
            eyebrow="Clear the Confusion"
            title="Common Misconceptions About Intrinsic Motivation"
            description="These distinctions help prevent common misunderstandings about internal motivation."
          />

          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            {[
              {
                wrong: "Intrinsic motivation means never accepting rewards.",
                correct:
                  "A person can enjoy an activity and still receive external rewards. The important point is the reason they engage in it.",
              },
              {
                wrong: "Only hobbies can be intrinsically motivating.",
                correct:
                  "Learning, professional work, creative projects and problem-solving can also be intrinsically motivating.",
              },
              {
                wrong: "Intrinsic motivation is always stronger.",
                correct:
                  "Motivation depends on the individual, task and circumstances. External incentives can be useful for many activities.",
              },
              {
                wrong: "People are either intrinsically or extrinsically motivated.",
                correct:
                  "Both forms can exist together. A person may enjoy an activity while also pursuing an external goal.",
              },
            ].map((item, index) => (
              <div key={item.wrong} className={`p-6 ${index !== 3 ? "border-b border-slate-200" : ""}`}>
                <div className="flex gap-3">
                  <AlertCircle className="mt-1 shrink-0 text-rose-500" size={19} />
                  <p className="font-bold text-slate-800">{item.wrong}</p>
                </div>
                <div className="mt-3 flex gap-3">
                  <CheckCircle2 className="mt-1 shrink-0 text-emerald-600" size={19} />
                  <p className="text-sm leading-7 text-slate-600">
                    {item.correct}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KEY TAKEAWAY */}
      <section className="px-5 py-14 sm:py-20">
        <div className="mx-auto max-w-5xl rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-7 sm:p-10">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-white">
            <Sparkles size={28} />
          </div>
          <h2 className="mt-5 text-2xl font-bold text-slate-950 sm:text-3xl">
            Key Takeaway
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-700">
            Intrinsic motivation is the internal desire to participate in an
            activity because it is interesting, enjoyable or personally
            satisfying. It helps explain why people learn, create, explore
            and develop skills even when no separate reward is promised.
          </p>
          <p className="mt-4 text-base leading-8 text-slate-700">
            Self-Determination Theory highlights autonomy, competence and
            relatedness as important psychological needs that support
            self-determined motivation. Understanding these needs can help
            create better conditions for learning, work and personal growth.
          </p>
        </div>
      </section>
<AdSlot />
      {/* FAQ */}
      <section className="bg-slate-50 px-5 py-14 sm:py-20">
        <div className="mx-auto max-w-4xl">
          <SectionHeading
            eyebrow="Frequently Asked Questions"
            title="Intrinsic Motivation FAQs"
            description="Quick answers to common questions about intrinsic motivation and its role in everyday life."
          />

          <div className="space-y-3">
            {faqs.map((item) => (
              <details
                key={item.question}
                className="group rounded-2xl border border-slate-200 bg-white p-5 open:border-blue-200 open:bg-blue-50/40"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-slate-900">
                  {item.question}
                  <HelpCircle
                    size={20}
                    className="shrink-0 text-blue-600 transition group-open:rotate-180"
                  />
                </summary>
                <p className="mt-4 border-t border-slate-200 pt-4 text-sm leading-7 text-slate-600">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CONCLUSION */}
      <section className="px-5 pb-16 pt-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">
            <Brain size={28} />
          </div>
          <h2 className="mt-5 text-2xl font-bold text-slate-950 sm:text-3xl">
            Understanding What Drives Human Behaviour
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-600">
            Intrinsic motivation reminds us that human behaviour is not
            driven only by money, rewards or recognition. Curiosity,
            enjoyment, personal interests and the satisfaction of learning
            can also be powerful reasons to take action.
          </p>
        </div>
      </section>

    </main>
  );
}
