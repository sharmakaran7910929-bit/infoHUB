
import {
  Brain,
  Lightbulb,
  Eye,
  Target,
  TrendingUp,
  TrendingDown,
  Search,
  MessageCircle,
  GraduationCap,
  BriefcaseBusiness,
  Users,
  ShieldCheck,
  AlertCircle,
  CheckCircle2,
  XCircle,
  RefreshCw,
  BookOpen,
  HelpCircle,
  ChevronRight,
  Check,
  ArrowRight,
  Scale,
  ClipboardCheck,
  UserSearch,
} from "lucide-react";
import AdSlot from "../../../components/AdSlot";

export const metadata = {
  title:
    "Dunning-Kruger Effect | Meaning, Examples and Psychology | PriceTag HUB",
  description:
    "Understand the Dunning-Kruger effect, why people sometimes overestimate their abilities, real-life examples, common misconceptions, and ways to develop better self-awareness.",
};

const everydayExamples = [
  {
    icon: GraduationCap,
    title: "A Student Who Stops Learning Too Early",
    situation:
      "A student watches a few online videos about a difficult subject and believes they have mastered it.",
    reaction:
      "They become highly confident, stop studying, and assume that further learning is unnecessary.",
    reality:
      "When they attempt a more challenging examination, they discover that the subject involves concepts they have not yet understood.",
    lesson:
      "Knowing a few basic concepts is not the same as understanding an entire subject.",
  },
  {
    icon: BriefcaseBusiness,
    title: "A Beginner Who Thinks They Know Everything",
    situation:
      "Someone learns a few basic programming concepts and starts building small projects.",
    reaction:
      "They believe they can develop any complex application because the basics now seem easy.",
    reality:
      "As the projects become more advanced, they encounter architecture, security, performance, and debugging challenges.",
    lesson:
      "Practical experience often reveals how much more there is to learn.",
  },
  {
    icon: MessageCircle,
    title: "A Person Who Is Always Certain in Arguments",
    situation:
      "Someone reads a short social media post about economics, politics, or psychology.",
    reaction:
      "They confidently argue with others and dismiss people who have studied the subject in greater depth.",
    reality:
      "They may not recognize the missing context, limitations, or alternative explanations behind the topic.",
    lesson:
      "Confidence in an opinion does not establish the accuracy of that opinion.",
  },
  {
    icon: Users,
    title: "A Beginner in a New Skill",
    situation:
      "A person starts learning photography, cooking, investing, or a sport.",
    reaction:
      "After a few early successes, they assume they are already very good.",
    reality:
      "With more experience, they discover advanced techniques, difficult situations, and mistakes they previously could not recognize.",
    lesson:
      "Learning more can sometimes make you more aware of what you do not know.",
  },
];

const commonMisconceptions = [
  {
    wrong: "It means people with low intelligence think they are intelligent.",
    correct:
      "The effect concerns how people judge their own competence in particular areas. It is not a general intelligence label.",
  },
  {
    wrong: "Every confident person is experiencing the Dunning-Kruger effect.",
    correct:
      "Confidence can be justified. The important issue is whether a person's self-assessment matches their actual ability.",
  },
  {
    wrong: "Experts are always less confident than beginners.",
    correct:
      "Experts can be highly confident when their knowledge and evidence justify it. Confidence alone does not reveal expertise.",
  },
  {
    wrong: "The effect proves that beginners cannot recognize their mistakes.",
    correct:
      "Limited knowledge can make some mistakes harder to recognize, but people differ in their self-awareness and ability to evaluate performance.",
  },
];

const improvementSteps = [
  {
    number: "01",
    title: "Recognize What You Do Not Know",
    description:
      "Accept that your current understanding may be incomplete. Being aware of knowledge gaps creates room for learning.",
    icon: Eye,
  },
  {
    number: "02",
    title: "Seek Honest Feedback",
    description:
      "Ask knowledgeable people to evaluate your work. Specific feedback can reveal weaknesses that are difficult to notice yourself.",
    icon: MessageCircle,
  },
  {
    number: "03",
    title: "Test Your Actual Ability",
    description:
      "Use practical exercises, challenging questions, projects, or real-world tasks instead of relying only on how confident you feel.",
    icon: Target,
  },
  {
    number: "04",
    title: "Keep Learning and Reassessing",
    description:
      "Compare what you believed earlier with what you understand now. Update your judgment when new evidence becomes available.",
    icon: RefreshCw,
  },
];

const selfCheckQuestions = [
  "Do I have enough experience to judge my ability accurately?",
  "Can I explain this subject beyond its basic concepts?",
  "Have I tested my knowledge through practical work?",
  "Can I identify weaknesses in my own understanding?",
  "Have I received feedback from someone more experienced?",
  "Am I willing to change my opinion when new evidence appears?",
  "Do I understand the limits of what I currently know?",
];

const faqs = [
  {
    question: "What is the Dunning-Kruger effect in simple words?",
    answer:
      "The Dunning-Kruger effect describes a tendency in which people with limited knowledge or skill in a particular area may overestimate their ability. It highlights the difficulty of accurately judging your own competence when you lack the knowledge needed to recognize your mistakes.",
  },
  {
    question: "Who introduced the Dunning-Kruger effect?",
    answer:
      "The concept was introduced by psychologists David Dunning and Justin Kruger in a 1999 research paper examining how people evaluate their own abilities in areas such as humor, grammar, and logical reasoning.",
  },
  {
    question: "Why does the Dunning-Kruger effect happen?",
    answer:
      "One proposed explanation is that the knowledge needed to perform a task can also help someone recognize mistakes in that task. When knowledge is limited, a person may lack some of the skills required to evaluate their own performance accurately.",
  },
  {
    question: "Does the Dunning-Kruger effect happen to everyone?",
    answer:
      "It should not be treated as a universal rule. Self-assessment varies across people, skills, and situations. Research on the exact size and interpretation of the effect has also generated scientific discussion.",
  },
  {
    question: "Can intelligent people experience the Dunning-Kruger effect?",
    answer:
      "Yes. It is about self-assessment in a particular area, not a fixed intelligence category. A highly capable person can still have limited knowledge in a new field and misjudge their ability there.",
  },
  {
    question: "How can someone avoid the Dunning-Kruger effect?",
    answer:
      "Developing self-awareness, testing your actual performance, seeking constructive feedback, learning from experienced people, and remaining open to correction can improve the accuracy of self-assessment.",
  },
  {
    question: "Is the Dunning-Kruger effect the same as overconfidence?",
    answer:
      "They are related but not identical. Overconfidence is a broader tendency to be more confident than the evidence supports. The Dunning-Kruger effect specifically concerns the relationship between competence and the accuracy of self-evaluation.",
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

      <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
        {title}
      </h2>

      {description && (
        <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}

function ExampleCard({ example, index }) {
  const Icon = example.icon;

  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="mb-5 flex items-center gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
          <Icon size={23} />
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
            Everyday example {index + 1}
          </p>

          <h3 className="mt-1 text-lg font-bold text-slate-900">
            {example.title}
          </h3>
        </div>
      </div>

      <div className="rounded-xl bg-slate-50 p-4">
        <p className="text-sm font-bold text-slate-700">
          The situation
        </p>

        <p className="mt-2 text-sm leading-7 text-slate-600">
          {example.situation}
        </p>
      </div>

      <div className="mt-4 grid gap-3">
        <div className="rounded-xl border border-amber-100 bg-amber-50/70 p-4">
          <p className="text-sm font-bold text-amber-800">
            Initial reaction
          </p>

          <p className="mt-2 text-sm leading-7 text-slate-700">
            {example.reaction}
          </p>
        </div>

        <div className="rounded-xl border border-blue-100 bg-blue-50/70 p-4">
          <p className="text-sm font-bold text-blue-800">
            What becomes clear later
          </p>

          <p className="mt-2 text-sm leading-7 text-slate-700">
            {example.reality}
          </p>
        </div>
      </div>

      <div className="mt-4 flex items-start gap-2 rounded-lg bg-emerald-50 px-4 py-3">
        <Lightbulb
          className="mt-0.5 shrink-0 text-emerald-700"
          size={17}
        />

        <p className="text-sm leading-6 text-emerald-950">
          <span className="font-bold">The lesson: </span>
          {example.lesson}
        </p>
      </div>
    </article>
  );
}

export default function DunningKrugerEffectPage() {
  return (
    <main className="overflow-hidden bg-white text-slate-800">

      {/* MAIN LEARNING OVERVIEW */}
      <section className="relative overflow-hidden border-b border-blue-100 bg-gradient-to-br from-white via-blue-50 to-indigo-50">
        <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-indigo-200/30 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-sm font-bold text-blue-700">
                <Brain size={17} />
                Psychology · Cognitive Biases
              </div>

              <h2 className="max-w-2xl text-3xl font-bold leading-tight tracking-tight text-slate-950 sm:text-4xl">
                Why Do Some People Think They Know More Than They Actually Do?
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
                Explore the Dunning-Kruger effect and discover why
                limited experience can sometimes lead to inaccurate
                self-confidence. Understand how people judge their own
                abilities, why learning can change that judgment, and
                how to develop better self-awareness.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                {[
                  "Meaning and psychology",
                  "Real-life examples",
                  "Confidence and competence",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-semibold text-blue-800"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-blue-100 bg-white/90 p-6 shadow-lg shadow-blue-900/5 sm:p-7">
              <h3 className="text-lg font-bold text-slate-900">
                What You Will Learn
              </h3>

              <div className="mt-5 space-y-4">
                {[
                  "What the Dunning-Kruger effect means",
                  "Why people sometimes overestimate their abilities",
                  "How confidence and actual competence can differ",
                  "How the effect appears in everyday situations",
                  "Common misconceptions about the effect",
                  "How to develop more accurate self-awareness",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                      <Check size={14} />
                    </span>

                    <p className="text-sm leading-6 text-slate-700">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 border-t border-slate-100 pt-5">
                <p className="text-sm font-semibold text-blue-800">
                  Understand your confidence. Recognize your limits.
                  Keep learning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT IS THE DUNNING-KRUGER EFFECT? */}
      <section className="border-b border-blue-100 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-bold text-blue-700 shadow-sm">
              <Brain size={17} />
              Understanding Human Psychology
            </div>

            <h1 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-3xl">
              What Is the Dunning-Kruger Effect?
            </h1>

            <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-slate-700 sm:text-xl">
              The Dunning-Kruger effect is a psychological phenomenon
              in which people with limited knowledge or ability in a
              particular area may overestimate how well they perform.
              Their limited understanding can also make it difficult
              for them to recognize their own mistakes.
            </p>

            <div className="mx-auto mt-9 max-w-3xl rounded-2xl border border-blue-200 bg-white p-6 text-left shadow-sm sm:p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                  <Lightbulb size={25} />
                </div>

                <div>
                  <h2 className="text-xl font-bold text-slate-900">
                    The Central Idea
                  </h2>

                  <p className="mt-2 leading-8 text-slate-600">
                    Sometimes, the less someone understands about a
                    subject, the harder it may be for them to recognize
                    what they do not know. As their knowledge grows,
                    they may become more aware of the complexity of
                    that subject and reassess their abilities.
                  </p>
                </div>
              </div>
            </div>

            <p className="mt-7 text-sm leading-7 text-slate-500">
              The effect concerns self-assessment in a particular area.
              It does not mean that every beginner is overconfident or
              that every expert lacks confidence.
            </p>
          </div>
        </div>
      </section>
<AdSlot />
      {/* CONNECT TO EVERYDAY LIFE */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Recognize the pattern"
          title="Have You Ever Seen Someone Who Knows a Little but Acts Like an Expert?"
          description="Think about situations where someone learns a few basic things and suddenly feels completely certain. The Dunning-Kruger effect helps us examine how limited knowledge can affect self-evaluation."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {everydayExamples.map((example, index) => (
            <ExampleCard
              key={example.title}
              example={example}
              index={index}
            />
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-indigo-100 bg-indigo-50/70 p-6 sm:p-8">
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-indigo-700 shadow-sm">
              <UserSearch size={22} />
            </div>

            <div>
              <h3 className="text-lg font-bold text-indigo-950">
                A Question Worth Asking Yourself
              </h3>

              <p className="mt-2 leading-8 text-indigo-900">
                Have you ever felt that you completely understood
                something, only to discover later that the subject was
                much more complicated than you first imagined?
              </p>

              <p className="mt-3 text-sm leading-7 text-indigo-800">
                This experience can be a useful reminder that our
                confidence and actual knowledge do not always grow
                together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY IT HAPPENS */}
      <section className="bg-gradient-to-b from-blue-50/80 to-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="The psychology behind it"
            title="Why Can Limited Knowledge Lead to Overconfidence?"
            description="One important explanation involves a person's ability to evaluate their own performance. Understanding a subject and recognizing mistakes in that subject can require overlapping skills."
          />

          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                icon: BookOpen,
                title: "Limited Knowledge",
                text:
                  "A person has learned a few basic ideas but has not yet encountered the deeper principles, exceptions, or challenges involved.",
              },
              {
                icon: Eye,
                title: "Difficulty Recognizing Mistakes",
                text:
                  "Because their understanding is incomplete, they may not have enough knowledge to identify weaknesses in their own reasoning.",
              },
              {
                icon: TrendingUp,
                title: "Inaccurate Self-Evaluation",
                text:
                  "Their judgment of their own ability may be higher than their actual performance justifies.",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                    <Icon size={23} />
                  </div>

                  <h3 className="text-lg font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {item.text}
                  </p>
                </article>
              );
            })}
          </div>

          <div className="mt-8 rounded-2xl border border-blue-200 bg-white p-6 shadow-sm sm:p-8">
            <h3 className="text-xl font-bold text-slate-900">
              The Key Psychological Explanation
            </h3>

            <p className="mt-3 leading-8 text-slate-600">
              Imagine trying to judge the quality of your own work
              without understanding what good work actually requires.
              You might overlook mistakes because you do not yet know
              what to look for.
            </p>

            <p className="mt-3 leading-8 text-slate-600">
              This is why feedback, practice, and deeper learning are
              important. They help people develop both their abilities
              and their capacity to evaluate those abilities.
            </p>
          </div>
        </div>
      </section>
<AdSlot />
      {/* CONFIDENCE AND COMPETENCE */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Understand the difference"
          title="Confidence Is Not the Same as Competence"
          description="Confidence describes how strongly someone believes in their ability. Competence describes what they can actually do. These two things can differ."
        />

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-amber-200 bg-amber-50/60 p-6 sm:p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-amber-700 shadow-sm">
              <TrendingUp size={24} />
            </div>

            <h3 className="mt-5 text-xl font-bold text-slate-900">
              Perceived Ability
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-700">
              How capable a person believes they are. This judgment
              can be influenced by experience, expectations, emotions,
              and how much they understand about the task.
            </p>

            <div className="mt-6 rounded-xl bg-white p-4">
              <p className="text-sm font-bold text-amber-800">
                Example
              </p>

              <p className="mt-2 text-sm leading-7 text-slate-600">
                "I have learned the basics, so I am certain I can
                handle any advanced problem."
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-blue-200 bg-blue-50/60 p-6 sm:p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-blue-700 shadow-sm">
              <Target size={24} />
            </div>

            <h3 className="mt-5 text-xl font-bold text-slate-900">
              Actual Competence
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-700">
              What a person can demonstrate through knowledge,
              performance, practical experience, and the ability
              to solve relevant problems.
            </p>

            <div className="mt-6 rounded-xl bg-white p-4">
              <p className="text-sm font-bold text-blue-800">
                Example
              </p>

              <p className="mt-2 text-sm leading-7 text-slate-600">
                The person attempts an advanced task and discovers
                which skills they have not yet developed.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <h3 className="text-lg font-bold text-slate-900">
            A Simple Illustration
          </h3>

          <p className="mt-2 text-sm leading-7 text-slate-600">
            The following examples show how someone's confidence
            might compare with their demonstrated ability. They are
            illustrative situations, not measured psychological data.
          </p>

          <div className="mt-6 space-y-5">
            {[
              {
                title: "Beginner with limited experience",
                confidence: "High",
                competence: "Developing",
                width: "85%",
                color: "bg-amber-400",
              },
              {
                title: "Learner gaining experience",
                confidence: "Moderate",
                competence: "Improving",
                width: "58%",
                color: "bg-blue-500",
              },
              {
                title: "Experienced and well-calibrated learner",
                confidence: "Appropriate to evidence",
                competence: "Advanced",
                width: "76%",
                color: "bg-emerald-500",
              },
            ].map((item) => (
              <div key={item.title}>
                <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                  <p className="text-sm font-bold text-slate-800">
                    {item.title}
                  </p>

                  <span className="text-xs font-semibold text-slate-500">
                    Confidence: {item.confidence}
                  </span>
                </div>

                <div className="h-3 overflow-hidden rounded-full bg-slate-100">
                  <div
                    className={`h-full rounded-full ${item.color}`}
                    style={{ width: item.width }}
                  />
                </div>

                <p className="mt-1 text-xs text-slate-500">
                  Demonstrated ability: {item.competence}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-6 rounded-xl bg-blue-50 p-4 text-sm leading-7 text-blue-900">
            <span className="font-bold">Important: </span>
            There is no universal confidence curve that accurately
            describes every person. Actual self-assessment depends
            on the skill, task, individual, and measurement method.
          </p>
        </div>
      </section>

      {/* COMMON MISCONCEPTIONS */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Think accurately"
            title="Common Misconceptions About the Dunning-Kruger Effect"
            description="The concept is often simplified or used as an insult. Understanding what it actually describes helps avoid misusing it."
          />

          <div className="space-y-4">
            {commonMisconceptions.map((item, index) => (
              <div
                key={item.wrong}
                className="grid gap-4 rounded-2xl border border-slate-200 bg-white p-6 md:grid-cols-2"
              >
                <div>
                  <p className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-700">
                    <XCircle size={16} />
                    Misconception {index + 1}
                  </p>

                  <p className="font-semibold leading-7 text-slate-800">
                    {item.wrong}
                  </p>
                </div>

                <div className="rounded-xl bg-emerald-50/70 p-4">
                  <p className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800">
                    <CheckCircle2 size={16} />
                    More accurate understanding
                  </p>

                  <p className="text-sm leading-7 text-slate-700">
                    {item.correct}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW TO IMPROVE SELF-AWARENESS */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Personal development"
          title="How Can You Reduce the Risk of Overestimating Your Abilities?"
          description="The goal is not to become less confident. It is to develop confidence that is better supported by knowledge, experience, and honest self-evaluation."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {improvementSteps.map((step) => {
            const Icon = step.icon;

            return (
              <article
                key={step.number}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                    <Icon size={23} />
                  </div>

                  <span className="text-3xl font-bold text-blue-100">
                    {step.number}
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-bold text-slate-900">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {step.description}
                </p>
              </article>
            );
          })}
        </div>

        <div className="mt-8 rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-6 sm:p-8">
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-blue-700 shadow-sm">
              <ShieldCheck size={22} />
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-900">
                The Goal Is Accurate Confidence
              </h3>

              <p className="mt-2 leading-8 text-slate-600">
                You do not need to doubt every ability you have.
                Instead, learn to distinguish what you know, what
                you can demonstrate, and what you still need to
                understand. Healthy confidence grows when it is
                supported by real competence.
              </p>
            </div>
          </div>
        </div>
      </section>
<AdSlot />
      {/* INTERACTIVE SCENARIO */}
      <section className="bg-gradient-to-br from-indigo-50 via-blue-50 to-white py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">
              <Brain size={27} />
            </div>

            <p className="text-sm font-bold uppercase tracking-wider text-blue-700">
              Apply what you learned
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-950 sm:text-4xl">
              Can You Recognize the Effect?
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              Imagine a person who has recently learned the basics
              of investing. After making two profitable trades, they
              believe they understand the stock market completely.
              They dismiss experienced investors and stop researching
              before making decisions.
            </p>
          </div>

          <div className="rounded-2xl border border-blue-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="rounded-xl bg-amber-50 p-5">
              <p className="text-sm font-bold uppercase tracking-wider text-amber-800">
                The situation
              </p>

              <p className="mt-2 text-lg font-bold leading-8 text-slate-900">
                "I made money twice. I now understand the market better
                than most people. I do not need anyone else's advice."
              </p>
            </div>

            <h3 className="mt-7 text-lg font-bold text-slate-900">
              Which response best explains the situation?
            </h3>

            <div className="mt-4 space-y-3">
              {[
                {
                  title:
                    "The person has definitely become an expert because they made profits.",
                  correct: false,
                  explanation:
                    "A small number of successful outcomes does not establish expertise. Results can be influenced by market conditions, chance, and risk.",
                },
                {
                  title:
                    "The person may be overestimating their competence because of limited experience.",
                  correct: true,
                  explanation:
                    "This is consistent with the Dunning-Kruger effect. The person may be judging their ability using limited experience without recognizing the complexity of investing.",
                },
                {
                  title:
                    "Every beginner who makes a profit experiences this effect.",
                  correct: false,
                  explanation:
                    "The effect is not universal. Some beginners accurately recognize their limitations and remain open to learning.",
                },
                {
                  title:
                    "The person should never trust their own decisions.",
                  correct: false,
                  explanation:
                    "The goal is not to eliminate confidence. It is to evaluate ability using evidence, experience, and realistic self-assessment.",
                },
              ].map((option, index) => (
                <details
                  key={option.title}
                  className="group rounded-xl border border-slate-200 bg-white open:border-blue-300 open:bg-blue-50/50"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-3 p-4">
                    <span className="flex items-start gap-3 text-sm font-semibold leading-6 text-slate-800">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-xs font-bold text-slate-600">
                        {String.fromCharCode(65 + index)}
                      </span>

                      {option.title}
                    </span>

                    <ChevronRight
                      size={18}
                      className="shrink-0 text-slate-400 transition group-open:rotate-90"
                    />
                  </summary>

                  <div className="border-t border-slate-200 px-4 py-4">
                    {option.correct ? (
                      <div className="flex items-start gap-3">
                        <CheckCircle2
                          className="mt-0.5 shrink-0 text-emerald-600"
                          size={19}
                        />

                        <p className="text-sm leading-7 text-slate-700">
                          <span className="font-bold text-emerald-700">
                            Correct interpretation.{" "}
                          </span>
                          {option.explanation}
                        </p>
                      </div>
                    ) : (
                      <div className="flex items-start gap-3">
                        <AlertCircle
                          className="mt-0.5 shrink-0 text-amber-600"
                          size={19}
                        />

                        <p className="text-sm leading-7 text-slate-700">
                          {option.explanation}
                        </p>
                      </div>
                    )}
                  </div>
                </details>
              ))}
            </div>

            <p className="mt-6 text-sm leading-7 text-slate-500">
              The point is not to label someone. It is to recognize
              that confidence should be evaluated against actual
              knowledge and performance.
            </p>
          </div>
        </div>
      </section>

      {/* SELF-REFLECTION CHECKLIST */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Personal reflection"
            title="Are You Evaluating Your Own Abilities Accurately?"
            description="Use these questions to reflect on how you judge your knowledge and skills. They are prompts for self-awareness, not a psychological diagnosis or test."
          />

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="space-y-4">
              {selfCheckQuestions.map((question, index) => (
                <label
                  key={question}
                  className="flex cursor-pointer items-start gap-3 rounded-xl border border-slate-100 p-4 transition hover:bg-blue-50"
                >
                  <input
                    type="checkbox"
                    className="mt-1 h-4 w-4 shrink-0 accent-blue-600"
                  />

                  <span className="text-sm leading-7 text-slate-700">
                    <span className="mr-2 font-bold text-blue-700">
                      {index + 1}.
                    </span>
                    {question}
                  </span>
                </label>
              ))}
            </div>

            <p className="mt-6 text-sm leading-7 text-slate-500">
              The purpose is not to count your answers. It is to
              recognize where you may need more practice, feedback,
              or information.
            </p>
          </div>
        </div>
      </section>

      {/* CONCLUSION */}
      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-blue-200 bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-7 sm:p-10">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
              <Brain size={25} />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-950">
                The Real Lesson of the Dunning-Kruger Effect
              </h2>

              <p className="mt-4 leading-8 text-slate-700">
                We often judge our abilities using what we currently
                understand. But sometimes, we do not yet know enough
                to recognize the gaps in our own knowledge.
              </p>

              <p className="mt-3 leading-8 text-slate-700">
                The Dunning-Kruger effect reminds us to examine our
                confidence, seek feedback, test our abilities, and
                remain open to learning. It is not a reason to judge
                others or underestimate ourselves.
              </p>

              <p className="mt-4 font-bold text-blue-900">
                Real understanding includes recognizing what you
                still have to learn.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-4 pb-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Common questions"
          title="Frequently Asked Questions"
          description="Quick answers to common questions about the Dunning-Kruger effect."
        />

        <div className="space-y-3">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-xl border border-slate-200 bg-white p-5 open:border-blue-200 open:bg-blue-50/40"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-slate-900">
                {faq.question}

                <ChevronRight
                  size={19}
                  className="shrink-0 text-blue-600 transition group-open:rotate-90"
                />
              </summary>

              <p className="mt-4 border-t border-slate-200 pt-4 text-sm leading-7 text-slate-600">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
}
