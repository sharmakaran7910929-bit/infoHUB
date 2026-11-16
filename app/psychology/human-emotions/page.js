
import {
  Brain,
  Heart,
  Activity,
  Eye,
  Lightbulb,
  ShieldCheck,
  Users,
  MessageCircle,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Zap,
  Compass,
  HeartHandshake,
  Cloud,
  Sun,
  Flame,
  Waves,
  Target,
  RefreshCw,
  Microscope,
  Bot,
  UserRound,
  Network,
  Puzzle,
  BookOpen,
  Globe,
  Clock,
  Scale,
  HandHeart,
  HelpCircle,
  TrendingUp,
} from "lucide-react";
import AdSlot from "../../../components/AdSlot";

export const metadata = {
  title: "Human Emotions | Types, Psychology, Brain and AI Comparison | PriceTag HUB",
  description:
    "Explore human emotions, their psychological and biological foundations, primary and complex emotions, emotional conflicts, emotional regulation, and how human emotions differ from AI.",
};

const primaryEmotions = [
  {
    name: "Happiness",
    icon: Sun,
    color: "bg-amber-50 text-amber-700 border-amber-100",
    description:
      "A positive emotional experience associated with pleasure, satisfaction, joy or a sense of well-being.",
    example:
      "Feeling happy after achieving a personal goal or spending time with people you care about.",
  },
  {
    name: "Sadness",
    icon: Cloud,
    color: "bg-blue-50 text-blue-700 border-blue-100",
    description:
      "An emotion often associated with loss, disappointment, separation or unmet expectations.",
    example:
      "Feeling sad after losing an opportunity or saying goodbye to someone important.",
  },
  {
    name: "Fear",
    icon: ShieldCheck,
    color: "bg-violet-50 text-violet-700 border-violet-100",
    description:
      "An emotional response to a perceived threat or danger that can prepare the body to protect itself.",
    example:
      "Feeling afraid when you notice a possible danger while walking alone at night.",
  },
  {
    name: "Anger",
    icon: Flame,
    color: "bg-rose-50 text-rose-700 border-rose-100",
    description:
      "An emotion that can arise when someone experiences unfairness, frustration, obstruction or a perceived threat.",
    example:
      "Feeling angry when someone deliberately treats you unfairly.",
  },
  {
    name: "Disgust",
    icon: Waves,
    color: "bg-emerald-50 text-emerald-700 border-emerald-100",
    description:
      "An emotion associated with strong aversion or rejection, often in response to something considered contaminating, unpleasant or offensive.",
    example:
      "Feeling disgust when encountering spoiled food or something deeply offensive.",
  },
  {
    name: "Surprise",
    icon: Zap,
    color: "bg-orange-50 text-orange-700 border-orange-100",
    description:
      "A brief response to an unexpected event that directs attention towards new information.",
    example:
      "Feeling surprised when a friend suddenly appears after a long absence.",
  },
];

const emotionalComponents = [
  {
    icon: Brain,
    title: "Subjective experience",
    description:
      "The personal feeling of an emotion. Two people can experience the same event differently because of their memories, expectations and interpretations.",
    example: "One person feels excited about a new job; another feels anxious.",
  },
  {
    icon: Activity,
    title: "Physiological response",
    description:
      "Changes in the body that can accompany emotions, including heart rate, breathing, muscle tension, sweating and hormonal activity.",
    example: "Fear may be accompanied by a faster heartbeat and increased alertness.",
  },
  {
    icon: Eye,
    title: "Expressive behaviour",
    description:
      "The ways emotions may appear through facial expressions, voice, posture, gestures and other forms of communication.",
    example: "A person may smile when pleased or speak more loudly when angry.",
  },
  {
    icon: Target,
    title: "Action tendency",
    description:
      "The impulse or readiness to respond in a particular way, such as approaching, avoiding, protecting, communicating or solving a problem.",
    example: "Fear may encourage someone to move away from a possible threat.",
  },
];

const complexEmotions = [
  {
    title: "Guilt",
    description:
      "A feeling that may arise when someone believes they have done something wrong or violated their own standards.",
    example: "Feeling guilty after breaking a promise.",
  },
  {
    title: "Shame",
    description:
      "A painful self-conscious emotion involving a negative evaluation of oneself or one's identity.",
    example: "Feeling ashamed after believing that a personal failure defines you.",
  },
  {
    title: "Pride",
    description:
      "A self-conscious emotion that can arise from achievement, effort, personal values or a sense of accomplishment.",
    example: "Feeling proud after completing a difficult project.",
  },
  {
    title: "Jealousy",
    description:
      "An emotional response involving the perceived threat of losing an important relationship or valued connection to another person.",
    example: "Feeling jealous when someone fears their partner may become closer to another person.",
  },
  {
    title: "Envy",
    description:
      "A feeling that may arise when another person possesses something desirable that one wishes to have.",
    example: "Feeling envious of a colleague's professional achievement.",
  },
  {
    title: "Embarrassment",
    description:
      "A self-conscious emotion that can occur when someone feels socially exposed or believes they have made an awkward mistake.",
    example: "Feeling embarrassed after forgetting someone's name in public.",
  },
  {
    title: "Gratitude",
    description:
      "A positive emotion associated with recognizing and appreciating help, kindness or something beneficial received.",
    example: "Feeling grateful when someone supports you during a difficult period.",
  },
  {
    title: "Nostalgia",
    description:
      "A sentimental emotion involving memories of the past, often combining warmth, longing and sometimes sadness.",
    example: "Feeling nostalgic when hearing a song from childhood.",
  },
];

const realLifeExamples = [
  {
    title: "Fear before an examination",
    situation:
      "A student feels nervous before an important examination.",
    explanation:
      "The emotion may reflect the importance of the result and uncertainty about performance. It can encourage preparation, although excessive anxiety may interfere with concentration.",
  },
  {
    title: "Anger during an argument",
    situation:
      "Someone becomes angry when they feel misunderstood.",
    explanation:
      "Anger may signal that the person believes an important need, boundary or expectation has been ignored. Recognizing the feeling can help them respond more thoughtfully.",
  },
  {
    title: "Happiness mixed with sadness",
    situation:
      "A person feels happy at a friend's wedding but sad about moving away.",
    explanation:
      "Different emotions can occur at the same time because one event can have several personal meanings.",
  },
  {
    title: "Guilt after a mistake",
    situation:
      "An employee feels guilty after making an error that affects a colleague.",
    explanation:
      "Guilt may encourage responsibility, an apology and an attempt to correct the mistake.",
  },
  {
    title: "Relief after uncertainty",
    situation:
      "Someone feels relieved after receiving reassuring medical or examination results.",
    explanation:
      "Relief can follow the reduction or removal of a perceived threat or uncertainty.",
  },
  {
    title: "Jealousy in a relationship",
    situation:
      "A person feels insecure when their partner spends time with someone else.",
    explanation:
      "The emotion may involve fear of losing an important connection. It is useful to understand the underlying concern rather than treating jealousy as proof of betrayal.",
  },
];

const regulationStrategies = [
  {
    title: "Recognize the emotion",
    description:
      "Pause and identify what you are feeling. Naming an emotion can help distinguish the feeling from the situation that triggered it.",
  },
  {
    title: "Identify the trigger",
    description:
      "Ask what happened immediately before the emotion appeared. Consider whether the response relates to the present situation or an earlier experience.",
  },
  {
    title: "Notice body signals",
    description:
      "Pay attention to changes such as tense muscles, faster breathing or a racing heartbeat. Physical signals can help you notice emotional activation.",
  },
  {
    title: "Reconsider your interpretation",
    description:
      "Explore whether there are other possible explanations for what happened. An initial interpretation is not always the only accurate one.",
  },
  {
    title: "Choose a suitable response",
    description:
      "Decide what action is useful and consistent with your values. You can acknowledge anger without acting aggressively, for example.",
  },
  {
    title: "Reflect after the situation",
    description:
      "Think about what helped, what made the situation harder and what you might try differently next time.",
  },
];

const faqs = [
  {
    question: "What are human emotions?",
    answer:
      "Human emotions are complex psychological and physiological responses to events, thoughts, memories and interactions. They involve subjective feelings, bodily changes, expressive behaviour and tendencies to act.",
  },
  {
    question: "What are the six basic human emotions?",
    answer:
      "A widely known model associated with psychologist Paul Ekman identifies happiness, sadness, fear, anger, disgust and surprise as six basic emotions. However, researchers do not universally agree on one fixed list of basic emotions.",
  },
  {
    question: "What is the difference between emotions and feelings?",
    answer:
      "Emotions are broader response processes involving subjective experience, bodily changes and action tendencies. Feelings usually refer to the conscious experience or interpretation of those emotional states. The terms are sometimes used differently across psychological theories.",
  },
  {
    question: "Can humans experience two emotions at once?",
    answer:
      "Yes. People can experience mixed emotions, such as happiness and sadness together. This can happen when a situation has several meanings or affects different parts of a person's life.",
  },
  {
    question: "Where do emotions come from in the brain?",
    answer:
      "Emotions involve networks of brain regions rather than one single emotional centre. The amygdala, insula, prefrontal cortex, hippocampus and other areas contribute to different aspects of emotional processing.",
  },
  {
    question: "Can AI experience human emotions?",
    answer:
      "Today's AI systems can identify emotional patterns, generate emotionally appropriate language and simulate emotional expressions. These abilities do not establish that an AI system has subjective feelings or conscious emotional experiences like humans.",
  },
  {
    question: "Are all emotions useful?",
    answer:
      "Emotions can provide information and influence behaviour, but their usefulness depends on the situation, intensity and response. An emotion may be understandable without every action it encourages being appropriate.",
  },
  {
    question: "Can people control their emotions?",
    answer:
      "People can often influence how they interpret, express and respond to emotions. However, they cannot always choose which emotion appears or immediately make it disappear. Emotional regulation is different from suppressing every feeling.",
  },
  {
    question: "Are facial expressions the same across every culture?",
    answer:
      "Some facial expressions and emotional signals show similarities across populations, but culture, social rules and context influence how emotions are displayed and interpreted. A facial expression alone does not always reveal exactly what someone feels.",
  },
  {
    question: "What is emotional intelligence?",
    answer:
      "Emotional intelligence refers to abilities or competencies related to recognizing, understanding and managing emotions in oneself and others. It is related to emotional experience but is not the same thing as having emotions.",
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

export default function HumanEmotionsPage() {
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
                Human Emotions
              </h1>

              <p className="mt-5 text-lg font-bold text-blue-800 sm:text-xl">
                Why We Feel, React and Connect
              </p>

              <p className="mt-6 text-base leading-8 text-slate-600">
                Why can a single memory make us smile, a small comment make us
                angry, or an unexpected event leave us speechless? Human
                emotions influence how we think, make decisions, communicate
                and build relationships. Understanding them reveals an
                important part of what makes human behaviour so complex.
              </p>

              <div className="mt-9 flex flex-wrap justify-center gap-3 lg:justify-start">
                <a
                  href="#meaning"
                  className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-bold text-white transition hover:bg-blue-700"
                >
                  Explore Emotions
                  <ArrowRight size={18} />
                </a>
                <a
                  href="#ai-vs-human"
                  className="rounded-xl border border-blue-200 bg-white px-6 py-3 font-bold text-blue-800 transition hover:bg-blue-50"
                >
                  Human vs AI
                </a>
              </div>

              <div className="mt-9 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm font-bold text-slate-600 lg:justify-start">
                <span className="flex items-center gap-2">
                  <CheckCircle2 size={17} className="text-blue-600" />
                  Psychology
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 size={17} className="text-blue-600" />
                  Brain & Body
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 size={17} className="text-blue-600" />
                  Human vs AI
                </span>
              </div>
            </div>

            {/* RIGHT-SIDE EMOTION DIAGRAM */}
            <div className="mx-auto w-full max-w-md">
              <div className="rounded-3xl border border-blue-100 bg-white/90 p-6 shadow-sm sm:p-7">
                <div className="text-center">
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">
                    <Heart size={40} strokeWidth={1.7} />
                  </div>
                  <h2 className="mt-4 text-xl font-bold text-slate-900">
                    How Emotions Work
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    An event can influence the mind, body and behaviour.
                  </p>
                </div>

                <div className="mt-7 rounded-xl border border-blue-100 bg-blue-50 p-4 text-center">
                  <p className="text-xs font-bold uppercase tracking-wider text-blue-700">
                    A situation or experience
                  </p>
                  <p className="mt-1 font-bold text-slate-900">
                    Something happens
                  </p>
                </div>

                <div className="flex justify-center py-2">
                  <ArrowRight className="rotate-90 text-blue-400" size={20} />
                </div>

                <div className="rounded-xl border border-indigo-100 bg-indigo-50 p-4 text-center">
                  <Brain className="mx-auto text-indigo-700" size={25} />
                  <p className="mt-2 font-bold text-slate-900">
                    Emotional processing
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    Interpretation, memory and context
                  </p>
                </div>

                <div className="flex justify-center py-2">
                  <ArrowRight className="rotate-90 text-blue-400" size={20} />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-xl border border-rose-100 bg-rose-50 p-3 text-center">
                    <Heart className="mx-auto text-rose-600" size={22} />
                    <p className="mt-2 text-sm font-bold text-slate-800">
                      Feeling
                    </p>
                    <p className="mt-1 text-xs text-slate-500">
                      Personal experience
                    </p>
                  </div>
                  <div className="rounded-xl border border-emerald-100 bg-emerald-50 p-3 text-center">
                    <Activity className="mx-auto text-emerald-700" size={22} />
                    <p className="mt-2 text-sm font-bold text-slate-800">
                      Body response
                    </p>
                    <p className="mt-1 text-xs text-slate-500">
                      Physical changes
                    </p>
                  </div>
                </div>

                <div className="flex justify-center py-2">
                  <ArrowRight className="rotate-90 text-blue-400" size={20} />
                </div>

                <div className="rounded-xl border border-amber-100 bg-amber-50 p-4 text-center">
                  <MessageCircle className="mx-auto text-amber-700" size={23} />
                  <p className="mt-2 font-bold text-slate-900">
                    Expression and response
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    What we say or do
                  </p>
                </div>

                <p className="mt-5 text-center text-xs leading-5 text-slate-500">
                  A simplified model: emotional processes interact and do not
                  always happen in a fixed order.
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
            title="What Are Human Emotions?"
            description="Emotions are more than facial expressions or temporary feelings. They involve coordinated responses across the mind and body."
          />

          <div className="rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-7 sm:p-10">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-600 text-white">
                <Brain size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  Definition of Human Emotions
                </h3>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Human emotions are complex psychological and physiological
                  responses to internal or external events. They involve
                  subjective experiences, changes in the body, expressive
                  behaviours and tendencies to act. Emotions influence how
                  people interpret situations, make decisions and interact
                  with the world around them.
                </p>
                <p className="mt-4 text-sm font-bold text-blue-800">
                  Simple meaning: Emotions are responses that help us
                  experience and react to what happens in our lives.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <InfoCard icon={Heart} title="Emotions are personal">
              The same situation can produce different emotions in different
              people. Personal memories, expectations, beliefs and current
              circumstances influence how an event is experienced.
            </InfoCard>
            <InfoCard icon={RefreshCw} title="Emotions can change">
              Emotional experiences are not fixed. A person's feelings can
              change as new information appears, circumstances develop or
              the person interprets a situation differently.
            </InfoCard>
          </div>
        </div>
      </section>
<AdSlot />
      {/* EMOTIONS VS FEELINGS */}
      <section className="bg-slate-50 px-5 py-14 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Important Distinction"
            title="Emotions vs Feelings vs Moods"
            description="These words are often used interchangeably in everyday conversation, but psychology can distinguish between them."
          />

          <div className="grid gap-5 md:grid-cols-3">
            <InfoCard icon={Zap} title="Emotion">
              <p>
                A broader response involving subjective experience, bodily
                changes, interpretation and action tendencies. Emotions are
                often linked to a particular event or situation.
              </p>
              <p className="mt-3 font-bold text-slate-800">
                Example: Fear after hearing a sudden threatening noise.
              </p>
            </InfoCard>

            <InfoCard icon={Heart} title="Feeling">
              <p>
                The consciously experienced or interpreted aspect of an
                emotional state. It describes what the emotion feels like
                to the person experiencing it.
              </p>
              <p className="mt-3 font-bold text-slate-800">
                Example: Recognizing that you feel frightened.
              </p>
            </InfoCard>

            <InfoCard icon={Waves} title="Mood">
              <p>
                A more general emotional state that may last longer and may
                not have one clearly identifiable trigger. Moods can
                influence how people experience several situations.
              </p>
              <p className="mt-3 font-bold text-slate-800">
                Example: Feeling low or cheerful throughout much of a day.
              </p>
            </InfoCard>
          </div>

          <div className="mt-7 overflow-x-auto rounded-2xl border border-slate-200">
            <table className="w-full min-w-[620px] text-left text-sm">
              <thead className="bg-slate-100 text-slate-900">
                <tr>
                  <th className="p-4 font-bold">Feature</th>
                  <th className="p-4 font-bold">Emotion</th>
                  <th className="p-4 font-bold">Feeling</th>
                  <th className="p-4 font-bold">Mood</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white text-slate-600">
                <tr>
                  <td className="p-4 font-bold text-slate-800">Meaning</td>
                  <td className="p-4">Broader response process</td>
                  <td className="p-4">Conscious experience</td>
                  <td className="p-4">General emotional state</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-slate-800">Trigger</td>
                  <td className="p-4">Often linked to an event</td>
                  <td className="p-4">Part of an experienced state</td>
                  <td className="p-4">May have no clear trigger</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-slate-800">Duration</td>
                  <td className="p-4">Often relatively brief</td>
                  <td className="p-4">Varies</td>
                  <td className="p-4">Often lasts longer</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-slate-800">Example</td>
                  <td className="p-4">Fear response</td>
                  <td className="p-4">Feeling frightened</td>
                  <td className="p-4">A generally anxious mood</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-5 text-sm leading-7 text-slate-600">
            <strong>Note:</strong> These distinctions are useful, but
            psychological theories do not all define the terms in exactly
            the same way.
          </p>
        </div>
      </section>

      {/* COMPONENTS */}
      <section className="px-5 py-14 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Inside an Emotional Experience"
            title="Four Important Components of Emotion"
            description="An emotional experience can involve several connected processes. It is not simply a feeling inside the mind."
          />

          <div className="grid gap-5 md:grid-cols-2">
            {emotionalComponents.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                      <Icon size={24} />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
                        Component {index + 1}
                      </p>
                      <h3 className="text-lg font-bold text-slate-900">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>
                  <div className="mt-4 rounded-xl bg-slate-50 p-4">
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
      </section>

      {/* BASIC EMOTIONS */}
      <section className="bg-blue-50/50 px-5 py-14 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Recognizing Emotions"
            title="Six Commonly Identified Basic Emotions"
            description="Psychologist Paul Ekman's influential research helped popularize a group of six basic emotions. This is a widely taught framework, not a universally accepted final list of every human emotion."
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {primaryEmotions.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.name}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl border ${item.color}`}>
                    <Icon size={25} />
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-slate-900">
                    {item.name}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>
                  <div className="mt-4 rounded-xl bg-slate-50 p-4">
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
      </section>
<AdSlot />
      {/* COMPLEX EMOTIONS */}
      <section className="px-5 py-14 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Beyond Basic Emotions"
            title="Complex Human Emotions"
            description="Human emotional life includes many experiences that involve self-awareness, social relationships, personal values and memories."
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {complexEmotions.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <h3 className="text-lg font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>
                <p className="mt-3 rounded-xl bg-blue-50 p-3 text-xs leading-6 text-blue-900">
                  <strong>Example:</strong> {item.example}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-7 rounded-2xl border border-indigo-100 bg-indigo-50 p-6">
            <h3 className="text-lg font-bold text-slate-900">
              Why are complex emotions different?
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-700">
              Many complex emotions involve self-evaluation or an
              understanding of relationships and social expectations. For
              example, guilt involves evaluating one's own actions, while
              gratitude involves recognizing something beneficial received
              from another person. These experiences can depend on memory,
              personal values and social understanding.
            </p>
          </div>
        </div>
      </section>

      {/* BRAIN AND BODY */}
      <section className="bg-slate-50 px-5 py-14 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Biological Foundations"
            title="How the Brain and Body Process Emotions"
            description="Emotions involve networks of brain regions and communication between the brain, nervous system and body."
          />

          <div className="grid gap-5 md:grid-cols-2">
            <InfoCard icon={Brain} title="Amygdala">
              The amygdala is involved in detecting and learning about
              emotionally significant information, including potential
              threats. It contributes to emotional learning but is not a
              single-purpose fear centre.
            </InfoCard>

            <InfoCard icon={Network} title="Prefrontal Cortex">
              Different regions of the prefrontal cortex contribute to
              evaluating situations, planning, decision-making and
              regulating emotional responses.
            </InfoCard>

            <InfoCard icon={Microscope} title="Hippocampus">
              The hippocampus supports memory and contextual processing.
              Past experiences and the context in which an event occurs can
              influence emotional responses.
            </InfoCard>

            <InfoCard icon={Activity} title="Autonomic Nervous System">
              This system helps regulate automatic bodily functions.
              Emotional situations can be accompanied by changes in heart
              rate, breathing, sweating and other physical responses.
            </InfoCard>
          </div>

          <div className="mt-8 rounded-3xl border border-blue-100 bg-white p-7 sm:p-9">
            <h3 className="text-xl font-bold text-slate-900">
              Example: What happens when you suddenly feel afraid?
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Imagine hearing a sudden loud noise in a dark room. Your brain
              rapidly processes the sound and its context. Networks involved
              in threat detection and bodily regulation may become active.
              You might notice a faster heartbeat, increased alertness and
              an urge to investigate or move away.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-4">
              {[
                ["01", "Unexpected sound", "A sudden event attracts attention."],
                ["02", "Brain processing", "The event is evaluated in context."],
                ["03", "Body response", "Alertness and physical changes may occur."],
                ["04", "Behaviour", "You investigate, pause or move away."],
              ].map(([number, title, description], index) => (
                <div key={number} className="rounded-xl border border-blue-100 bg-blue-50/60 p-4">
                  <p className="text-xs font-bold text-blue-600">{number}</p>
                  <h4 className="mt-2 font-bold text-slate-900">{title}</h4>
                  <p className="mt-2 text-xs leading-6 text-slate-600">
                    {description}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-5 text-xs leading-6 text-slate-500">
              This is a simplified explanation. Emotional processing is
              distributed across interacting brain and body systems, not
              a rigid four-step sequence.
            </p>
          </div>
        </div>
      </section>

      {/* WHY EMOTIONS EXIST */}
      <section className="px-5 py-14 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Purpose and Function"
            title="Why Do Humans Have Emotions?"
            description="Emotions can influence attention, decisions, communication and responses to important situations."
          />

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            <InfoCard icon={ShieldCheck} title="Protection and survival">
              Fear and other defensive responses can help people notice
              potential danger and prepare to protect themselves.
            </InfoCard>

            <InfoCard icon={Compass} title="Guiding decisions">
              Emotions can provide information about what matters to us.
              They influence how we evaluate choices, risks and possible
              outcomes.
            </InfoCard>

            <InfoCard icon={MessageCircle} title="Communication">
              Facial expressions, voice and other emotional signals can
              communicate needs, reactions and intentions to other people.
            </InfoCard>

            <InfoCard icon={HeartHandshake} title="Social connection">
              Emotions such as affection, empathy and gratitude can
              contribute to relationships, cooperation and social bonding.
            </InfoCard>

            <InfoCard icon={Target} title="Motivating action">
              Emotional states can encourage people to approach opportunities,
              avoid danger, resolve problems or seek support.
            </InfoCard>

            <InfoCard icon={BookOpen} title="Learning from experience">
              Emotionally significant experiences can influence attention
              and memory, helping people learn what may be important in
              future situations.
            </InfoCard>
          </div>

          <p className="mt-6 rounded-2xl border border-blue-100 bg-blue-50 p-5 text-sm leading-7 text-blue-950">
            <strong>Important:</strong> Emotions do not always produce
            accurate judgments or helpful behaviour. They can guide us, but
            they can also be influenced by incomplete information, past
            experiences and mistaken interpretations.
          </p>
        </div>
      </section>
<AdSlot />
      {/* EMOTIONAL CONFLICT */}
      <section className="bg-indigo-50/50 px-5 py-14 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Interesting Psychology"
            title="Why Do We Sometimes Feel Conflicting Emotions?"
            description="Human beings do not always experience one clear emotion at a time. The same event can create emotional reactions that seem to contradict one another."
          />

          <div className="rounded-3xl border border-indigo-100 bg-white p-7 shadow-sm sm:p-9">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-6">
                <div className="flex items-center gap-3">
                  <Sun className="text-emerald-700" size={27} />
                  <h3 className="text-lg font-bold text-slate-900">
                    Happiness
                  </h3>
                </div>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  You are excited because you have received an opportunity
                  to work in another city.
                </p>
              </div>

              <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6">
                <div className="flex items-center gap-3">
                  <Cloud className="text-blue-700" size={27} />
                  <h3 className="text-lg font-bold text-slate-900">
                    Sadness
                  </h3>
                </div>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  At the same time, you feel sad because you will be leaving
                  your family and friends.
                </p>
              </div>
            </div>

            <div className="my-6 flex justify-center">
              <ArrowRight className="rotate-90 text-indigo-500" size={24} />
            </div>

            <div className="rounded-2xl border border-indigo-200 bg-indigo-50 p-6 text-center">
              <h3 className="text-xl font-bold text-indigo-950">
                Mixed Emotional Experience
              </h3>
              <p className="mt-3 text-sm leading-7 text-indigo-900">
                You can feel happy about the opportunity and sad about the
                separation at the same time. Both emotions reflect different
                aspects of the same life event.
              </p>
            </div>
          </div>

          <div className="mt-7 grid gap-5 md:grid-cols-2">
            <InfoCard icon={Puzzle} title="Approach-avoidance conflict">
              A person may want something because it offers benefits but
              also hesitate because it involves risks or costs. For example,
              accepting a promotion may bring career growth but require
              relocating away from home.
            </InfoCard>

            <InfoCard icon={Scale} title="Conflicting priorities">
              Someone may want to help a friend but also need to protect
              their own time and responsibilities. The resulting emotional
              conflict can reflect two important needs competing with
              one another.
            </InfoCard>
          </div>

          <div className="mt-7 rounded-2xl border border-indigo-100 bg-white p-6">
            <h3 className="font-bold text-slate-900">
              Does feeling two emotions mean something is wrong?
            </h3>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              No. Mixed emotions are part of ordinary human experience.
              People can feel love and frustration, pride and nervousness,
              or relief and sadness together. Recognizing this complexity
              can help people understand themselves more accurately.
            </p>
          </div>
        </div>
      </section>

      {/* HUMAN VS AI */}
      <section id="ai-vs-human" className="px-5 py-14 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Human Psychology Meets Artificial Intelligence"
            title="Human Emotions vs AI: Can Artificial Intelligence Feel?"
            description="AI can recognize emotional patterns and produce emotionally convincing responses. But does that mean it actually experiences happiness, fear, sadness or love?"
          />

          <div className="rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-7 sm:p-9">
            <div className="grid items-center gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-blue-100 bg-white p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">
                    <UserRound size={30} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">
                      Human
                    </h3>
                    <p className="text-sm font-bold text-blue-700">
                      Biological experience
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  Humans experience emotions through complex interactions
                  involving the brain, body, conscious experience, memories,
                  biological processes and personal relationships.
                </p>
              </div>

              <div className="rounded-2xl border border-violet-100 bg-white p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-100 text-violet-700">
                    <Bot size={30} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">
                      Artificial Intelligence
                    </h3>
                    <p className="text-sm font-bold text-violet-700">
                      Computational processing
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  AI systems process information using computational models.
                  They can classify emotional signals and generate language
                  that appears empathetic without that behaviour proving a
                  subjective emotional experience.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-9">
            <h3 className="mb-5 text-center text-2xl font-bold text-slate-950">
              The Important Differences
            </h3>

            <div className="overflow-x-auto rounded-2xl border border-slate-200">
              <table className="w-full min-w-[680px] text-left text-sm">
                <thead className="bg-slate-100 text-slate-900">
                  <tr>
                    <th className="p-4 font-bold">Feature</th>
                    <th className="p-4 font-bold">Human Emotions</th>
                    <th className="p-4 font-bold">Current AI Systems</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white text-slate-600">
                  <tr>
                    <td className="p-4 font-bold text-slate-800">
                      Emotional experience
                    </td>
                    <td className="p-4">
                      Humans report subjective emotional experiences.
                    </td>
                    <td className="p-4">
                      Emotional language generation does not establish
                      subjective feeling.
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-slate-800">
                      Biological body
                    </td>
                    <td className="p-4">
                      Emotions can involve bodily and nervous-system changes.
                    </td>
                    <td className="p-4">
                      Software systems do not have human biological
                      physiology.
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-slate-800">
                      Emotional recognition
                    </td>
                    <td className="p-4">
                      Humans interpret emotional signals using experience
                      and context.
                    </td>
                    <td className="p-4">
                      AI can infer likely emotional patterns from data.
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-slate-800">
                      Expression
                    </td>
                    <td className="p-4">
                      Emotions may influence voice, facial expression and
                      behaviour.
                    </td>
                    <td className="p-4">
                      AI can generate emotional text, speech or simulated
                      expressions.
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-slate-800">
                      Personal history
                    </td>
                    <td className="p-4">
                      Memories and lived experiences shape emotional life.
                    </td>
                    <td className="p-4">
                      Systems use available data and computational context;
                      this is not equivalent to human lived experience.
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-slate-800">
                      Empathy
                    </td>
                    <td className="p-4">
                      Humans may emotionally resonate with another person's
                      experience.
                    </td>
                    <td className="p-4">
                      AI can produce supportive responses, but this does
                      not prove that it feels another person's emotions.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-9 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-6">
              <h3 className="flex items-center gap-2 text-lg font-bold text-slate-900">
                <CheckCircle2 className="text-emerald-700" size={22} />
                What AI can do
              </h3>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-700">
                <li>• Detect emotional patterns in text or speech.</li>
                <li>• Classify expressions or sentiment from input data.</li>
                <li>• Generate supportive or emotionally appropriate language.</li>
                <li>• Simulate emotional characters in games and virtual environments.</li>
                <li>• Adjust responses according to conversational context.</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-rose-100 bg-rose-50 p-6">
              <h3 className="flex items-center gap-2 text-lg font-bold text-slate-900">
                <AlertCircle className="text-rose-700" size={22} />
                What this does not prove
              </h3>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-700">
                <li>• That AI feels happiness or sadness.</li>
                <li>• That it experiences pain or pleasure.</li>
                <li>• That it has human-like emotional awareness.</li>
                <li>• That empathetic language is the same as emotional empathy.</li>
                <li>• That simulated emotional behaviour proves consciousness.</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-indigo-200 bg-indigo-50 p-6 sm:p-7">
            <h3 className="text-xl font-bold text-indigo-950">
              The Interesting Question: What If AI Says "I Am Sad"?
            </h3>
            <p className="mt-3 text-sm leading-7 text-indigo-950">
              An AI system may generate the sentence "I am sad" because
              that response fits the conversation, its instructions or
              patterns learned during training. The sentence alone is not
              evidence that the system experiences sadness. A convincing
              description of an emotion and the actual experience of that
              emotion are two different questions.
            </p>
            <p className="mt-4 text-sm leading-7 text-indigo-950">
              Whether an artificial system could ever have subjective
              experiences is a debated scientific and philosophical question.
              There is currently no established basis for treating ordinary
              AI emotional expressions as proof of human-like feelings.
            </p>
          </div>

          <div className="mt-7 rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="text-lg font-bold text-slate-900">
              Emotional AI is not the same as emotional experience
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              The term affective computing describes technologies designed
              to recognize, interpret or respond to aspects of human emotion.
              It can make digital systems more responsive to people, but
              detecting or modelling emotions is different from establishing
              that a machine has feelings of its own.
            </p>
          </div>
        </div>
      </section>

      {/* CULTURE */}
      <section className="bg-slate-50 px-5 py-14 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Society and Behaviour"
            title="How Culture Influences Human Emotions"
            description="Human beings share many emotional experiences, but the way emotions are expressed, understood and managed can vary across cultures and social environments."
          />

          <div className="grid gap-5 md:grid-cols-2">
            <InfoCard icon={Globe} title="Cultural expectations">
              Different societies may have different expectations about
              when and how people should express emotions. Some environments
              encourage open emotional expression, while others place greater
              value on restraint in particular situations.
            </InfoCard>

            <InfoCard icon={Users} title="Social rules">
              People often learn emotional display rules from family,
              communities and social groups. These rules can influence
              whether someone openly expresses anger, sadness or happiness.
            </InfoCard>

            <InfoCard icon={MessageCircle} title="Language and meaning">
              Words used to describe emotions do not always map perfectly
              between languages. Culture and language can influence how
              people categorize and communicate emotional experiences.
            </InfoCard>

            <InfoCard icon={HeartHandshake} title="Relationships">
              Family structures, friendships and community relationships
              can influence which emotional expressions are encouraged,
              discouraged or considered appropriate.
            </InfoCard>
          </div>

          <div className="mt-7 rounded-2xl border border-blue-100 bg-blue-50 p-6">
            <h3 className="font-bold text-slate-900">
              Does everyone express emotions in the same way?
            </h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              No. A smile, silence, eye contact or a particular tone of voice
              can have different meanings depending on the person and
              situation. It is risky to assume that one visible expression
              always reveals exactly what someone feels.
            </p>
          </div>
        </div>
      </section>
<AdSlot />
      {/* REAL LIFE */}
      <section className="px-5 py-14 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Everyday Psychology"
            title="Human Emotions in Real-Life Situations"
            description="Understanding the reason behind an emotion can help explain why people respond differently to similar experiences."
          />

          <div className="grid gap-5 md:grid-cols-2">
            {realLifeExamples.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm font-bold leading-6 text-blue-800">
                  {item.situation}
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.explanation}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REGULATION */}
      <section className="bg-blue-50/50 px-5 py-14 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <SectionHeading
            eyebrow="Practical Psychology"
            title="How to Understand and Manage Emotions"
            description="Emotional regulation is not about eliminating emotions. It is about recognizing emotional experiences and choosing how to respond."
          />

          <div className="space-y-4">
            {regulationStrategies.map((item, index) => (
              <div
                key={item.title}
                className="flex gap-5 rounded-2xl border border-blue-100 bg-white p-5 shadow-sm sm:p-6"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-sm font-bold text-blue-800">
                  {String(index + 1).padStart(2, "0")}
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

          <div className="mt-7 rounded-2xl border border-blue-200 bg-blue-100/60 p-6">
            <h3 className="font-bold text-slate-900">
              A practical example: Responding to anger
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-700">
              Suppose someone makes a comment that feels insulting. Instead
              of immediately reacting, you can notice your anger, identify
              why the comment affected you, consider whether you understood
              the situation correctly and decide whether to explain your
              feelings, set a boundary or step away. The emotion is
              acknowledged, but it does not have to dictate the response.
            </p>
          </div>
        </div>
      </section>

      {/* MISCONCEPTIONS */}
      <section className="px-5 py-14 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <SectionHeading
            eyebrow="Clear the Confusion"
            title="Common Misconceptions About Human Emotions"
            description="Emotional experiences are complex. These common assumptions can lead to misunderstandings."
          />

          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            {[
              {
                wrong: "Emotions make people irrational.",
                correct:
                  "Emotions can influence judgment, but they can also provide useful information about risks, relationships and personal priorities.",
              },
              {
                wrong: "Strong people never show sadness or fear.",
                correct:
                  "Experiencing or expressing difficult emotions is a normal part of being human. Strength can include recognizing emotions and responding constructively.",
              },
              {
                wrong: "Every emotion must have a positive purpose.",
                correct:
                  "Emotions can be informative, but they are not always accurate or helpful in every context. Their intensity and consequences matter.",
              },
              {
                wrong: "A facial expression always reveals what someone feels.",
                correct:
                  "Expressions are influenced by culture, context and individual differences. The same visible expression can have different meanings.",
              },
              {
                wrong: "Humans experience only one emotion at a time.",
                correct:
                  "People can experience mixed or conflicting emotions, even in response to a single event.",
              },
              {
                wrong: "AI that talks about emotions must feel them.",
                correct:
                  "Generating emotional language or recognizing emotional patterns does not establish that an AI system has subjective emotional experiences.",
              },
            ].map((item, index) => (
              <div
                key={item.wrong}
                className={`p-6 ${index !== 5 ? "border-b border-slate-200" : ""}`}
              >
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
            Human emotions are complex responses involving the mind, brain,
            body and social environment. They influence how people interpret
            events, make decisions, communicate and build relationships.
            Happiness, sadness, fear and anger are only part of a much wider
            emotional world that also includes mixed and complex experiences.
          </p>
          <p className="mt-4 text-base leading-8 text-slate-700">
            Understanding emotions does not mean allowing every feeling to
            control behaviour. It means recognizing what we experience,
            understanding its possible causes and choosing thoughtful
            responses. And while AI can increasingly recognize and simulate
            emotional expressions, that capability should not be confused
            with evidence of human-like emotional experience.
          </p>
        </div>
      </section>
<AdSlot />
      {/* FAQ */}
      <section className="bg-slate-50 px-5 py-14 sm:py-20">
        <div className="mx-auto max-w-4xl">
          <SectionHeading
            eyebrow="Frequently Asked Questions"
            title="Human Emotions FAQs"
            description="Answers to common questions about emotional experiences, psychology, the brain and artificial intelligence."
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
            <Heart size={28} />
          </div>
          <h2 className="mt-5 text-2xl font-bold text-slate-950 sm:text-3xl">
            Understanding the Human Emotional Experience
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-600">
            Emotions are not simply reactions that make us happy or unhappy.
            They are part of how we experience the world, understand
            ourselves and connect with others. Learning about them helps us
            better understand human behaviour—and recognize what makes
            emotional experience different from artificial simulation.
          </p>
        </div>
      </section>

    </main>
  );
}
