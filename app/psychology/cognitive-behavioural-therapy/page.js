
import Link from "next/link";
import {
  Brain,
  Heart,
  Repeat2,
  Lightbulb,
  MessageCircle,
  Target,
  BookOpen,
  ShieldCheck,
  Activity,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Eye,
  Footprints,
  ClipboardList,
  Sparkles,
} from "lucide-react";

import AdSlot from "../../../components/AdSlot";
import RelatedTopics from "../../../components/ContinueReading";

export const metadata = {
  title: "Cognitive Behavioural Therapy (CBT) | Meaning, Techniques & Examples",
  description:
    "Understand cognitive behavioural therapy (CBT), how thoughts, feelings and behaviours are connected, common CBT techniques, real-life examples and applications.",
};

const relatedTopics = [
  {
    title: "What Is Psychology",
    href: "/psychology/what-is-psychology",
  },
  {
    title: "Cognitive Psychology",
    href: "/psychology/cognitive-psychology",
  },
  {
    title: "Critical Thinking",
    href: "/psychology/critical-thinking",
  },
  {
    title: "Confirmation Bias",
    href: "/psychology/confirmation-bias",
  },
  {
    title: "Human Emotions",
    href: "/psychology/human-emotions",
  },
  {
    title: "Emotional Intelligence",
    href: "/psychology/emotional-intelligence",
  },
  {
    title: "Habit Formation",
    href: "/psychology/habit-formation",
  },
  {
    title: "Stress Psychology",
    href: "/psychology/stress-psychology",
  },
];

const techniques = [
  {
    number: "01",
    icon: Eye,
    title: "Identifying Automatic Thoughts",
    description:
      "Recognising quick thoughts that appear in response to situations, especially thoughts that influence emotions or behaviour.",
    example:
      "Instead of immediately thinking, “I always fail,” a person learns to notice that thought and examine what actually happened.",
  },
  {
    number: "02",
    icon: Brain,
    title: "Cognitive Restructuring",
    description:
      "Examining the evidence behind unhelpful thoughts and developing more balanced interpretations.",
    example:
      "Replacing “One mistake means I am incapable” with “I made a mistake in one task, and I can learn from it.”",
  },
  {
    number: "03",
    icon: Footprints,
    title: "Behavioural Activation",
    description:
      "Gradually increasing meaningful or rewarding activities when avoidance or low motivation reduces everyday participation.",
    example:
      "Planning a short walk, completing a small task or reconnecting with a friend instead of remaining inactive all day.",
  },
  {
    number: "04",
    icon: Target,
    title: "Gradual Exposure",
    description:
      "In appropriate situations, gradually facing feared situations in a planned and supportive way instead of continually avoiding them.",
    example:
      "Someone afraid of speaking in public may practise first with a trusted person before gradually attempting a larger audience.",
  },
  {
    number: "05",
    icon: ClipboardList,
    title: "Thought Records",
    description:
      "Writing down a situation, the thoughts it triggered, the emotions experienced and alternative explanations.",
    example:
      "Recording what happened after receiving critical feedback can help separate the actual feedback from assumptions about personal ability.",
  },
  {
    number: "06",
    icon: Activity,
    title: "Problem-Solving Skills",
    description:
      "Breaking difficult situations into manageable steps, evaluating possible solutions and reviewing the outcome.",
    example:
      "A person overwhelmed by a large assignment divides it into smaller tasks and creates a realistic schedule.",
  },
];

const applications = [
  {
    title: "Anxiety and Excessive Worry",
    description:
      "CBT can help people recognise patterns of worry, examine threatening interpretations and gradually change avoidance behaviours.",
  },
  {
    title: "Depression and Low Mood",
    description:
      "It may help identify unhelpful thinking patterns and increase participation in meaningful daily activities.",
  },
  {
    title: "Phobias and Avoidance",
    description:
      "Some CBT approaches use carefully planned exposure to help people respond differently to feared situations.",
  },
  {
    title: "Stress Management",
    description:
      "People can learn to recognise stressful interpretations, improve problem-solving and practise more useful coping responses.",
  },
  {
    title: "Sleep Difficulties",
    description:
      "Specific CBT-based approaches, such as CBT for insomnia, address thoughts and behaviours that interfere with sleep.",
  },
  {
    title: "Everyday Challenges",
    description:
      "CBT principles can also support practical skills such as managing difficult conversations, handling setbacks and setting achievable goals.",
  },
];

function SectionHeading({ eyebrow, title, description, dark = false }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <p
        className={`mb-3 text-sm font-bold uppercase tracking-[0.18em] ${
          dark ? "text-blue-300" : "text-blue-600"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`text-3xl font-bold tracking-tight md:text-4xl ${
          dark ? "text-white" : "text-slate-900"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base leading-7 ${
            dark ? "text-slate-300" : "text-slate-600"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

function CycleCard({ icon: Icon, title, description, number }) {
  return (
    <div className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
          <Icon size={23} />
        </div>
        <span className="text-sm font-bold text-blue-300">{number}</span>
      </div>
      <h3 className="text-lg font-bold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
    </div>
  );
}

function TechniqueCard({ item }) {
  const Icon = item.icon;

  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-blue-200 hover:shadow-md">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
          <Icon size={23} />
        </div>
        <span className="text-sm font-bold text-blue-300">{item.number}</span>
      </div>

      <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>

      <p className="mt-3 text-sm leading-7 text-slate-600">
        {item.description}
      </p>

      <div className="mt-5 rounded-xl bg-blue-50 p-4">
        <p className="text-xs font-bold uppercase tracking-wide text-blue-700">
          Example
        </p>
        <p className="mt-2 text-sm leading-6 text-slate-700">
          {item.example}
        </p>
      </div>
    </article>
  );
}

function ArrowConnector() {
  return (
    <div className="flex items-center justify-center py-1 text-blue-400">
      <ArrowRight className="rotate-90 md:rotate-0" size={23} />
    </div>
  );
}

export default function CognitiveBehaviouralTherapyPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Cognitive Behavioural Therapy (CBT)",
    description:
      "An educational guide to cognitive behavioural therapy, its principles, techniques, examples and applications.",
    mainEntityOfPage:
      "https://www.pricetag.co.in/psychology/cognitive-behavioural-therapy",
    author: {
      "@type": "Organization",
      name: "PriceTag HUB",
      url: "https://k2sinfotech.pricetag.co.in",
    },
    publisher: {
      "@type": "Organization",
      name: "PriceTag HUB",
      url: "https://www.pricetag.co.in",
    },
  };

  return (
    <main className="overflow-hidden bg-white text-slate-800">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-indigo-50 px-5 py-20 md:py-28">
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-blue-100/50 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-indigo-100/50 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-bold text-blue-700 shadow-sm">
              <Brain size={17} />
              Psychology and Mental Processes
            </div>

            <h1 className="text-4xl font-bold leading-tight tracking-tight text-slate-950 md:text-6xl">
              Cognitive Behavioural Therapy
              <span className="mt-2 block text-blue-700">(CBT)</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Understand how thoughts, emotions and actions influence one
              another, and how structured psychological techniques can help
              people develop healthier ways of responding to everyday
              challenges.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-bold text-blue-800">
                Thoughts
              </span>
              <span className="rounded-full bg-indigo-100 px-4 py-2 text-sm font-bold text-indigo-800">
                Feelings
              </span>
              <span className="rounded-full bg-sky-100 px-4 py-2 text-sm font-bold text-sky-800">
                Behaviours
              </span>
            </div>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="#how-cbt-works"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-700 px-6 py-3 font-bold text-white transition hover:bg-blue-800"
              >
                Explore CBT <ArrowRight size={18} />
              </Link>
              <Link
                href="#real-life-example"
                className="inline-flex items-center gap-2 rounded-xl border border-blue-200 bg-white px-6 py-3 font-bold text-blue-800 transition hover:bg-blue-50"
              >
                See an Example
              </Link>
            </div>
          </div>

          {/* Hero visual */}
          <div className="relative mx-auto w-full max-w-lg">
            <div className="rounded-3xl border border-blue-100 bg-white p-6 shadow-xl shadow-blue-100/70 md:p-8">
              <div className="mb-7 flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold text-blue-700">
                    The CBT Connection
                  </p>
                  <p className="mt-1 text-sm text-slate-500">
                    Three connected elements
                  </p>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                  <Repeat2 size={25} />
                </div>
              </div>

              <div className="space-y-3">
                {[
                  {
                    icon: Brain,
                    title: "Thoughts",
                    detail: "What am I thinking?",
                    color: "bg-blue-50 text-blue-700 border-blue-100",
                  },
                  {
                    icon: Heart,
                    title: "Feelings",
                    detail: "What am I feeling?",
                    color: "bg-indigo-50 text-indigo-700 border-indigo-100",
                  },
                  {
                    icon: Activity,
                    title: "Behaviours",
                    detail: "What am I doing?",
                    color: "bg-sky-50 text-sky-700 border-sky-100",
                  },
                ].map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div key={item.title}>
                      <div
                        className={`flex items-center gap-4 rounded-2xl border p-4 ${item.color}`}
                      >
                        <Icon size={26} />
                        <div>
                          <p className="font-bold">{item.title}</p>
                          <p className="mt-1 text-sm opacity-80">
                            {item.detail}
                          </p>
                        </div>
                      </div>
                      {index !== 2 && (
                        <div className="flex justify-center py-1 text-blue-400">
                          <ArrowRight className="rotate-90" size={19} />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="mt-5 rounded-xl bg-gradient-to-r from-blue-700 to-indigo-700 p-4 text-center text-white">
                <p className="text-sm font-bold">A connected cycle</p>
                <p className="mt-1 text-xs text-blue-100">
                  Each element can influence the others
                </p>
              </div>
            </div>

            <div className="absolute -right-3 -top-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-700 text-white shadow-lg">
              <Sparkles size={25} />
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="px-5 py-16 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.4fr_0.8fr]">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-blue-600">
              Understanding the Concept
            </p>
            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
              What Is Cognitive Behavioural Therapy?
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              Cognitive Behavioural Therapy, commonly called CBT, is a
              structured form of psychological treatment that focuses on the
              relationship between a person's thoughts, feelings and
              behaviours.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              It is based on the idea that the way people interpret a
              situation can influence their emotional response and what they
              do next. By recognising unhelpful thinking patterns and
              behaviours, people can learn alternative ways of responding.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              CBT is generally focused on present-day difficulties and
              practical goals. It combines cognitive approaches, which
              examine thinking, with behavioural approaches, which focus on
              actions and learned responses.
            </p>
          </div>

          <div className="rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 to-indigo-50 p-7">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-blue-700 shadow-sm">
              <Lightbulb size={28} />
            </div>
            <h3 className="mt-5 text-xl font-bold text-slate-900">
              The Central Idea
            </h3>
            <p className="mt-3 leading-7 text-slate-700">
              A situation does not always determine how someone feels or
              responds. Their interpretation of that situation can also
              influence their reaction.
            </p>
            <div className="mt-6 rounded-xl border border-blue-100 bg-white p-4">
              <p className="text-sm font-bold text-blue-800">
                Important distinction
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                CBT does not mean forcing positive thoughts or pretending
                problems do not exist. It involves examining thoughts
                realistically and practising more useful responses.
              </p>
            </div>
          </div>
        </div>
      </section>

      <AdSlot />

      {/* How CBT works */}
      <section
        id="how-cbt-works"
        className="bg-slate-50 px-5 py-16 md:py-20"
      >
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="The CBT Model"
            title="How Thoughts, Feelings and Behaviours Work Together"
            description="These three elements interact continuously. A change in one area can influence the others."
          />

          <div className="grid items-stretch gap-4 md:grid-cols-3">
            <CycleCard
              number="01"
              icon={Brain}
              title="Thoughts"
              description="Interpretations, beliefs, assumptions and mental responses to situations."
            />
            <CycleCard
              number="02"
              icon={Heart}
              title="Feelings"
              description="Emotional experiences such as fear, sadness, frustration, confidence or relief."
            />
            <CycleCard
              number="03"
              icon={Activity}
              title="Behaviours"
              description="Actions and responses such as avoiding, communicating, practising or withdrawing."
            />
          </div>

          <div className="mt-8 rounded-3xl border border-blue-100 bg-white p-6 md:p-9">
            <h3 className="text-center text-xl font-bold text-slate-900">
              The CBT Feedback Cycle
            </h3>

            <div className="mt-8 grid items-center gap-3 md:grid-cols-[1fr_auto_1fr_auto_1fr]">
              <div className="rounded-2xl bg-blue-50 p-5 text-center">
                <Brain className="mx-auto text-blue-700" size={29} />
                <p className="mt-3 font-bold text-blue-900">Thought</p>
                <p className="mt-2 text-sm text-slate-600">
                  "I might make a mistake."
                </p>
              </div>

              <ArrowConnector />

              <div className="rounded-2xl bg-indigo-50 p-5 text-center">
                <Heart className="mx-auto text-indigo-700" size={29} />
                <p className="mt-3 font-bold text-indigo-900">Feeling</p>
                <p className="mt-2 text-sm text-slate-600">
                  Anxiety or nervousness
                </p>
              </div>

              <ArrowConnector />

              <div className="rounded-2xl bg-sky-50 p-5 text-center">
                <Activity className="mx-auto text-sky-700" size={29} />
                <p className="mt-3 font-bold text-sky-900">Behaviour</p>
                <p className="mt-2 text-sm text-slate-600">
                  Avoiding the situation
                </p>
              </div>
            </div>

            <div className="mx-auto mt-6 max-w-2xl rounded-xl border border-dashed border-blue-300 bg-blue-50/70 p-5 text-center">
              <Repeat2 className="mx-auto text-blue-700" size={25} />
              <p className="mt-2 font-bold text-slate-900">
                The cycle may reinforce the original thought
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Avoiding a situation can prevent someone from discovering
                whether their feared prediction would actually happen.
                This may strengthen the fear over time.
              </p>
            </div>

            <div className="mt-7 rounded-2xl bg-gradient-to-r from-blue-700 to-indigo-700 p-6 text-white">
              <div className="flex items-start gap-4">
                <Sparkles className="mt-1 shrink-0" size={25} />
                <div>
                  <h4 className="font-bold">Where CBT Can Help</h4>
                  <p className="mt-2 text-sm leading-7 text-blue-100">
                    With appropriate guidance, a person can examine the
                    original thought, develop a balanced interpretation and
                    practise a different behaviour. The aim is to create a
                    more helpful response rather than simply suppressing an
                    emotion.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Example */}
      <section id="real-life-example" className="px-5 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Practical Application"
            title="A Real-Life Example of the CBT Approach"
            description="Consider a student who receives a lower examination score than expected."
          />

          <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-sm">
            <div className="bg-gradient-to-r from-blue-700 to-indigo-700 p-6 text-white md:p-8">
              <div className="flex items-center gap-3">
                <BookOpen size={27} />
                <div>
                  <p className="text-sm font-bold text-blue-100">
                    Example Situation
                  </p>
                  <h3 className="text-xl font-bold">
                    A Student Receives a Low Exam Score
                  </h3>
                </div>
              </div>
              <p className="mt-4 max-w-3xl leading-7 text-blue-100">
                The student thinks the result proves they are not capable of
                succeeding. This interpretation may influence their mood
                and future study behaviour.
              </p>
            </div>

            <div className="grid gap-px bg-slate-200 md:grid-cols-3">
              <div className="bg-white p-6">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                  <Brain size={23} />
                </div>
                <p className="text-sm font-bold uppercase tracking-wide text-blue-700">
                  Step 1 · Thought
                </p>
                <h4 className="mt-3 font-bold text-slate-900">
                  "I am not good at studying."
                </h4>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  The student interprets one disappointing result as proof
                  of a permanent inability.
                </p>
              </div>

              <div className="bg-white p-6">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-700">
                  <Heart size={23} />
                </div>
                <p className="text-sm font-bold uppercase tracking-wide text-indigo-700">
                  Step 2 · Feeling
                </p>
                <h4 className="mt-3 font-bold text-slate-900">
                  Disappointment and anxiety
                </h4>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  The thought contributes to negative emotions and reduces
                  the student's confidence.
                </p>
              </div>

              <div className="bg-white p-6">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-sky-50 text-sky-700">
                  <Activity size={23} />
                </div>
                <p className="text-sm font-bold uppercase tracking-wide text-sky-700">
                  Step 3 · Behaviour
                </p>
                <h4 className="mt-3 font-bold text-slate-900">
                  Avoiding further study
                </h4>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  The student may delay studying or avoid asking for help,
                  making improvement more difficult.
                </p>
              </div>
            </div>

            <div className="bg-blue-50 p-6 md:p-8">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-blue-700" size={25} />
                <h4 className="text-lg font-bold text-slate-900">
                  A More Balanced Response
                </h4>
              </div>

              <div className="mt-5 grid gap-4 md:grid-cols-2">
                <div className="rounded-xl bg-white p-5">
                  <p className="text-sm font-bold text-slate-500">
                    Unhelpful interpretation
                  </p>
                  <p className="mt-2 font-bold text-slate-800">
                    "I failed once, so I will always fail."
                  </p>
                </div>

                <div className="rounded-xl bg-white p-5">
                  <p className="text-sm font-bold text-blue-700">
                    Balanced interpretation
                  </p>
                  <p className="mt-2 font-bold text-slate-800">
                    "This result shows that some topics need more practice."
                  </p>
                </div>
              </div>

              <p className="mt-5 text-sm leading-7 text-slate-700">
                The student can then identify difficult subjects, create a
                realistic study plan and seek help where needed. This does
                not guarantee a particular result, but it offers a more
                constructive way to respond.
              </p>
            </div>
          </div>
        </div>
      </section>

      <AdSlot />

      {/* Techniques */}
      <section className="bg-gradient-to-b from-blue-50/70 to-white px-5 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Practical Methods"
            title="Common Cognitive Behavioural Therapy Techniques"
            description="CBT practitioners select techniques according to the person's needs, goals and circumstances. Not every technique is appropriate for every person."
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {techniques.map((item) => (
              <TechniqueCard key={item.number} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="px-5 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Where It Is Used"
            title="Applications of CBT"
            description="CBT and specific CBT-based approaches have been studied and used for a range of psychological and everyday difficulties."
          />

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {applications.map((item, index) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-blue-200 hover:shadow-md"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 font-bold text-blue-700">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
<AdSlot />
      {/* Benefits and limitations */}
      <section className="bg-slate-950 px-5 py-16 text-white md:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="A Balanced Perspective"
            title="Benefits and Limitations of CBT"
            description="CBT can be useful, but it is not a universal solution. Its suitability depends on the individual and the difficulty being addressed."
            dark
          />

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-6 md:p-8">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-emerald-300" size={26} />
                <h3 className="text-xl font-bold">Potential Benefits</h3>
              </div>

              <ul className="mt-6 space-y-4 text-sm leading-7 text-slate-200">
                <li>• Encourages awareness of thoughts and behaviour patterns.</li>
                <li>• Provides practical skills that can be practised outside sessions.</li>
                <li>• Uses structured goals and progress review.</li>
                <li>• Has evidence supporting its use for several conditions.</li>
                <li>• Can be delivered individually, in groups or through guided formats.</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-amber-400/20 bg-amber-400/10 p-6 md:p-8">
              <div className="flex items-center gap-3">
                <AlertCircle className="text-amber-300" size={26} />
                <h3 className="text-xl font-bold">Important Limitations</h3>
              </div>

              <ul className="mt-6 space-y-4 text-sm leading-7 text-slate-200">
                <li>• It requires participation and practice.</li>
                <li>• Progress and outcomes differ between individuals.</li>
                <li>• Some people may need a different or combined treatment approach.</li>
                <li>• It is not an instant solution to complex difficulties.</li>
                <li>• A qualified professional should assess treatment needs.</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="flex items-start gap-4">
              <ShieldCheck className="mt-1 shrink-0 text-blue-300" size={27} />
              <div>
                <h3 className="font-bold">Educational Information, Not a Diagnosis</h3>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  Learning about CBT does not replace an assessment or
                  treatment from a qualified mental health professional.
                  People experiencing persistent distress or difficulties
                  in daily life should consider seeking professional support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How sessions work */}
      <section className="px-5 py-16 md:py-20">
        <div className="mx-auto max-w-5xl">
          <SectionHeading
            eyebrow="The Treatment Process"
            title="What Happens During CBT?"
            description="A typical CBT process involves understanding the difficulty, agreeing on goals, practising strategies and reviewing progress."
          />

          <div className="space-y-4">
            {[
              {
                title: "Initial Assessment",
                description:
                  "The therapist discusses the person's difficulties, circumstances, symptoms and treatment goals.",
                icon: MessageCircle,
              },
              {
                title: "Understanding Patterns",
                description:
                  "The therapist and individual explore how thoughts, feelings and behaviours may be connected.",
                icon: Brain,
              },
              {
                title: "Learning New Strategies",
                description:
                  "They work on relevant techniques, such as examining thoughts, problem-solving or changing avoidance patterns.",
                icon: Lightbulb,
              },
              {
                title: "Practice Between Sessions",
                description:
                  "The person may practise skills through activities, worksheets or observations in everyday life.",
                icon: ClipboardList,
              },
              {
                title: "Reviewing Progress",
                description:
                  "The therapist and individual review what is working and adjust the approach when needed.",
                icon: Target,
              },
            ].map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.title}
                  className="flex gap-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <div className="flex shrink-0 flex-col items-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                      <Icon size={23} />
                    </div>
                    {index !== 4 && (
                      <div className="mt-2 h-full min-h-5 w-px bg-blue-200" />
                    )}
                  </div>

                  <div className="pb-2">
                    <p className="text-xs font-bold uppercase tracking-wide text-blue-600">
                      Step {index + 1}
                    </p>
                    <h3 className="mt-1 text-lg font-bold text-slate-900">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CBT vs positive thinking */}
      <section className="bg-blue-50 px-5 py-16 md:py-20">
        <div className="mx-auto max-w-5xl">
          <SectionHeading
            eyebrow="Clear Understanding"
            title="CBT Is Not Simply Positive Thinking"
            description="The purpose is not to replace every negative thought with a positive one. It is to develop a more balanced and evidence-based response."
          />

          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <p className="text-sm font-bold uppercase tracking-wide text-slate-500">
                Forced Positive Thinking
              </p>
              <h3 className="mt-3 text-xl font-bold text-slate-900">
                "Everything will be perfect."
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                This statement may ignore real difficulties and does not
                necessarily help someone understand or solve a problem.
              </p>
            </div>

            <div className="rounded-2xl border border-blue-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-wide text-blue-700">
                Balanced CBT Thinking
              </p>
              <h3 className="mt-3 text-xl font-bold text-slate-900">
                "This is difficult, but I can identify what I can do next."
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                This recognises the challenge while making room for realistic
                options and constructive action.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="px-5 py-16 md:py-20">
        <div className="mx-auto max-w-4xl rounded-3xl border border-blue-100 bg-gradient-to-br from-white to-blue-50 p-8 text-center shadow-sm md:p-12">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">
            <Brain size={29} />
          </div>

          <h2 className="mt-6 text-3xl font-bold text-slate-900">
            Understanding the Connection Can Change the Response
          </h2>

          <p className="mt-5 leading-8 text-slate-600">
            Cognitive Behavioural Therapy explains how thoughts, emotions and
            actions interact. By identifying unhelpful patterns and
            practising alternative responses, people may develop more
            effective ways to manage particular psychological difficulties.
            Its real value lies in structured learning, practical skills and
            an approach suited to the individual's needs.
          </p>

          <Link
            href="/psychology/branches-of-psychology"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-blue-700 px-6 py-3 font-bold text-white transition hover:bg-blue-800"
          >
            Explore Branches of Psychology <ArrowRight size={18} />
          </Link>
        </div>
      </section>

     
    </main>
  );
}
