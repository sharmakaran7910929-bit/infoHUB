
import {
  Brain,
  Heart,
  Eye,
  ShieldCheck,
  Target,
  Users,
  Lightbulb,
  Activity,
  MessageCircle,
  Briefcase,
  GraduationCap,
  HeartHandshake,
  CheckCircle2,
  AlertCircle,
  Sparkles,ArrowRight ,
  BookOpen,
  Scale,
  RefreshCw,
  HelpCircle,
  TrendingUp,
  HandHeart,
  Ad,
} from "lucide-react";
import AdSlot from "../../../components/AdSlot";

export const metadata = {
  title: "Emotional Intelligence (EQ) | Meaning, Components and Examples | PriceTag HUB",
  description:
    "Learn what emotional intelligence is, its five components, major psychological theories, importance, real-life examples, benefits, limitations, and ways to improve EQ.",
};

const components = [
  {
    title: "Self-Awareness",
    icon: Eye,
    description:
      "Self-awareness is the ability to recognize and understand your own emotions, thoughts, strengths, weaknesses, and emotional reactions.",
    example:
      "A student realizes that anxiety, rather than a lack of preparation, is making them nervous before an examination.",
    points: [
      "Identify and name your emotions.",
      "Recognize situations that trigger particular feelings.",
      "Understand how emotions influence your decisions.",
    ],
  },
  {
    title: "Self-Regulation",
    icon: ShieldCheck,
    description:
      "Self-regulation means managing emotional reactions and choosing appropriate responses instead of acting immediately on impulses.",
    example:
      "An employee receives criticism from a manager but takes time to understand the feedback instead of responding angrily.",
    points: [
      "Pause before reacting to difficult situations.",
      "Use breathing techniques to manage intense emotions.",
      "Think about the consequences of your response.",
    ],
  },
  {
    title: "Self-Motivation",
    icon: Target,
    description:
      "Self-motivation is the ability to use personal goals, values, and internal drive to continue working toward objectives, even when difficulties arise.",
    example:
      "A student who fails a competitive examination studies their mistakes and continues preparing instead of giving up.",
    points: [
      "Set realistic and meaningful goals.",
      "Break large tasks into smaller steps.",
      "Focus on progress rather than immediate results.",
    ],
  },
  {
    title: "Empathy",
    icon: HeartHandshake,
    description:
      "Empathy is the ability to understand or appreciate another person's feelings, thoughts, and perspective.",
    example:
      "A friend notices that someone is unusually quiet and listens patiently instead of assuming that the person is being rude.",
    points: [
      "Listen without interrupting.",
      "Consider situations from another person's perspective.",
      "Avoid making quick judgments about people's feelings.",
    ],
  },
  {
    title: "Social Skills",
    icon: Users,
    description:
      "Social skills involve communicating effectively, building relationships, cooperating with others, resolving disagreements, and handling interpersonal situations.",
    example:
      "A team leader resolves a disagreement between two employees by listening to both sides and helping them find a practical solution.",
    points: [
      "Communicate clearly and respectfully.",
      "Handle disagreements constructively.",
      "Build cooperation and trust in relationships.",
    ],
  },
];

const importance = [
  {
    title: "Better Decision-Making",
    icon: Brain,
    text: "Understanding emotions helps people recognize emotional influences on their choices and consider situations more thoughtfully.",
  },
  {
    title: "Healthier Relationships",
    icon: Heart,
    text: "Empathy, listening, and emotional awareness help people communicate, understand one another, and manage disagreements.",
  },
  {
    title: "Stress Management",
    icon: Activity,
    text: "Recognizing emotional triggers and managing reactions can help people respond more effectively to stressful situations.",
  },
  {
    title: "Improved Communication",
    icon: MessageCircle,
    text: "Emotional awareness helps people express their feelings, understand others, and communicate more appropriately.",
  },
  {
    title: "Workplace Effectiveness",
    icon: Briefcase,
    text: "Emotional skills can support teamwork, professional relationships, conflict resolution, and leadership.",
  },
  {
    title: "Personal Development",
    icon: TrendingUp,
    text: "Understanding emotional patterns can help people identify areas for improvement and develop healthier responses.",
  },
];

const examples = [
  {
    situation: "Receiving Criticism",
    low: "Immediately becoming defensive and blaming others.",
    high: "Listening to the feedback, managing the initial reaction, and considering whether improvements are needed.",
  },
  {
    situation: "Disagreement With a Friend",
    low: "Shouting, making personal comments, or refusing to listen.",
    high: "Expressing your viewpoint calmly while trying to understand the other person's perspective.",
  },
  {
    situation: "Failing an Examination",
    low: "Giving up because of disappointment or feeling like a complete failure.",
    high: "Acknowledging disappointment, examining mistakes, and developing a better preparation strategy.",
  },
  {
    situation: "A Colleague Is Upset",
    low: "Ignoring their feelings or immediately judging their behaviour.",
    high: "Listening patiently, recognizing their emotional state, and offering appropriate support.",
  },
  {
    situation: "Facing Workplace Pressure",
    low: "Reacting impulsively, becoming overwhelmed, or taking frustration out on others.",
    high: "Recognizing stress, prioritizing tasks, and communicating difficulties constructively.",
  },
];

const improvementSteps = [
  {
    title: "Recognize and Name Your Emotions",
    text: "Instead of simply saying that you feel bad, identify whether you are disappointed, anxious, frustrated, embarrassed, or worried. Naming an emotion can make it easier to understand what is happening.",
  },
  {
    title: "Understand Your Emotional Triggers",
    text: "Observe which situations, people, or experiences produce strong emotional reactions. Recognizing recurring patterns helps you prepare for difficult situations.",
  },
  {
    title: "Pause Before Reacting",
    text: "When you feel angry or upset, take a short pause. Breathe slowly, consider the situation, and choose a response rather than acting on your first impulse.",
  },
  {
    title: "Practice Active Listening",
    text: "Give people your attention, avoid interrupting, and try to understand what they are communicating. Listening is an important part of empathy and social skills.",
  },
  {
    title: "Consider Other Perspectives",
    text: "Before judging someone's behaviour, consider what they might be experiencing. You do not need to agree with someone to understand their perspective.",
  },
  {
    title: "Accept Constructive Feedback",
    text: "Separate feedback about your actions from your overall self-worth. Evaluate useful suggestions without treating every criticism as a personal attack.",
  },
  {
    title: "Reflect on Daily Experiences",
    text: "At the end of the day, think about situations in which you handled your emotions well and situations where you could have responded differently.",
  },
  {
    title: "Develop Healthy Coping Habits",
    text: "Regular physical activity, sufficient sleep, relaxation, and healthy social connections can support emotional well-being and your ability to manage everyday challenges.",
  },
];

const myths = [
  {
    myth: "Emotionally intelligent people never get angry.",
    reality:
      "They can experience anger like anyone else. Their emotional skills influence how they recognize and respond to it.",
  },
  {
    myth: "Emotional intelligence means hiding emotions.",
    reality:
      "It involves understanding and managing emotions, not denying, suppressing, or pretending they do not exist.",
  },
  {
    myth: "People with high EQ always agree with others.",
    reality:
      "Understanding another person's perspective does not require agreeing with their opinions or accepting inappropriate behaviour.",
  },
  {
    myth: "EQ is more important than IQ in every situation.",
    reality:
      "Different situations require different abilities. Cognitive and emotional skills can complement each other.",
  },
  {
    myth: "Emotional intelligence is only about being kind.",
    reality:
      "It also involves emotional awareness, regulation, clear communication, appropriate boundaries, and handling difficult conversations.",
  },
  {
    myth: "Emotional intelligence cannot change.",
    reality:
      "Many related abilities and competencies can improve through practice, experience, and feedback.",
  },
];

const faqs = [
  {
    q: "What is emotional intelligence in simple words?",
    a: "Emotional intelligence is the ability to recognize, understand, and manage your own emotions while also recognizing and understanding the emotions of other people.",
  },
  {
    q: "What are the five components of emotional intelligence?",
    a: "A widely used five-component framework associated with Daniel Goleman includes self-awareness, self-regulation, motivation, empathy, and social skills.",
  },
  {
    q: "What is the difference between emotional intelligence and IQ?",
    a: "IQ generally refers to cognitive abilities such as reasoning, memory, and problem-solving. Emotional intelligence refers to abilities related to understanding and managing emotions and navigating social interactions. They describe different aspects of human abilities.",
  },
  {
    q: "Can emotional intelligence be learned?",
    a: "Yes. Many emotional skills can be developed through practice, reflection, feedback, active listening, and learning healthier ways to respond to emotional situations. Improvement may take time.",
  },
  {
    q: "Is emotional intelligence more important than IQ?",
    a: "Neither is universally more important. Cognitive abilities and emotional skills contribute differently depending on the task, environment, and situation. Both can be valuable in education, work, and everyday life.",
  },
  {
    q: "Does emotional intelligence mean controlling every emotion?",
    a: "No. Emotional intelligence does not mean suppressing or eliminating emotions. It means recognizing emotions, understanding their causes, and responding to them appropriately.",
  },
  {
    q: "Can someone have high IQ but low emotional intelligence?",
    a: "Yes. A person may have strong reasoning and academic abilities but find it difficult to understand emotions, regulate emotional reactions, or manage interpersonal relationships.",
  },
  {
    q: "How can I recognize emotional intelligence in everyday life?",
    a: "It may be visible when someone listens carefully, recognizes their emotional reactions, handles disagreements constructively, accepts feedback, and considers other people's perspectives.",
  },
];

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      {eyebrow && (
        <p className="mb-3 text-sm font-bold uppercase tracking-widest text-blue-700">
          {eyebrow}
        </p>
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

function InfoCard({ icon: Icon, title, text }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
        <Icon size={24} />
      </div>
      <h3 className="text-lg font-bold text-slate-900">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
    </div>
  );
}

export default function EmotionalIntelligencePage() {
  return (
    <main className="overflow-hidden bg-white text-slate-800">

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
          Emotional Intelligence
        </h1>

        <p className="mt-5 text-lg font-bold text-blue-800 sm:text-xl">
          Understand Emotions. Respond Wisely.
        </p>

        <p className="mt-6 text-base leading-8 text-slate-600">
          Why do some people handle difficult situations calmly, understand
          others deeply, and maintain healthy relationships? Emotional
          intelligence explains how we recognize, understand, and manage
          emotions in everyday life.
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
            href="#components"
            className="rounded-xl border border-blue-200 bg-white px-6 py-3 font-bold text-blue-800 transition hover:bg-blue-50"
          >
            Five Components
          </a>
        </div>

        <div className="mt-9 flex flex-wrap justify-center gap-x-7 gap-y-3 text-sm font-bold text-slate-600 lg:justify-start">
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
        <div className="rounded-3xl border border-blue-100 bg-white/80 p-6 shadow-sm sm:p-8">
          <div className="mb-7 text-center">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">
              <Brain size={42} strokeWidth={1.7} />
            </div>
            <h2 className="mt-4 text-xl font-bold text-slate-900">
              Understanding Emotions
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-500">
              Four connected abilities that support emotionally intelligent behaviour.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {[
              {
                icon: Eye,
                title: "Recognize",
                desc: "Identify emotions",
              },
              {
                icon: Lightbulb,
                title: "Understand",
                desc: "Know their causes",
              },
              {
                icon: ShieldCheck,
                title: "Manage",
                desc: "Respond thoughtfully",
              },
              {
                icon: HeartHandshake,
                title: "Relate",
                desc: "Understand others",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-4 text-center"
                >
                  <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-white text-blue-600 shadow-sm">
                    <Icon size={22} />
                  </div>
                  <h3 className="mt-3 font-bold text-slate-800">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-5 rounded-xl bg-blue-50 px-4 py-3 text-center">
            <p className="text-sm font-bold text-blue-800">
              Awareness → Understanding → Wise Response
            </p>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

      {/* MEANING */}
      <section id="meaning" className="scroll-mt-24 px-5 py-16">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Understanding the Concept"
            title="What Is Emotional Intelligence?"
            description="Emotional intelligence is an important concept in psychology that explains how people process and respond to emotional information."
          />

          <div className="grid gap-8 lg:grid-cols-5">
            <div className="space-y-5 lg:col-span-3">
              <p className="text-base leading-8 text-slate-700">
                <strong className="text-slate-900">
                  Emotional Intelligence (EI),
                </strong>{" "}
                also commonly called{" "}
                <strong className="text-slate-900">
                  Emotional Quotient (EQ),
                </strong>{" "}
                refers to the ability to perceive, understand, use, and manage
                emotions in oneself and, in relevant situations, recognize and
                understand emotions in others.
              </p>

              <p className="text-base leading-8 text-slate-700">
                Emotions influence how people think, make decisions, communicate,
                build relationships, and respond to challenges. Emotional
                intelligence helps individuals understand these emotional
                influences and choose more appropriate responses.
              </p>

              <p className="text-base leading-8 text-slate-700">
                For example, imagine that a person receives an unexpected
                negative comment. Their first reaction may be anger or
                disappointment. A person with developed emotional skills may
                recognize that reaction, understand why it occurred, and decide
                how to respond without unnecessarily escalating the situation.
              </p>

              <p className="text-base leading-8 text-slate-700">
                Emotional intelligence does not mean never feeling angry,
                disappointed, jealous, or afraid. It means understanding these
                feelings and handling them in a constructive way.
              </p>
            </div>

            <div className="lg:col-span-2">
              <div className="h-full rounded-2xl border border-blue-100 bg-blue-50 p-7">
                <Lightbulb size={30} className="text-blue-700" />
                <h3 className="mt-4 text-xl font-bold text-slate-900">
                  A Simple Example
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  Two people receive the same criticism.
                </p>

                <div className="mt-5 space-y-4">
                  <div className="rounded-xl border border-red-100 bg-white p-4">
                    <p className="font-bold text-red-700">
                      Immediate Reaction
                    </p>
                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      Feels attacked, becomes angry, and responds without
                      considering the feedback.
                    </p>
                  </div>

                  <div className="rounded-xl border border-emerald-100 bg-white p-4">
                    <p className="font-bold text-emerald-700">
                      Emotionally Aware Response
                    </p>
                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      Recognizes the frustration, listens, and evaluates
                      whether the feedback is useful.
                    </p>
                  </div>
                </div>

                <p className="mt-5 text-sm font-bold leading-6 text-blue-900">
                  The difference is not the absence of emotion, but how a
                  person understands and responds to it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
<AdSlot />
      {/* IQ COMPARISON */}
      <section className="bg-slate-50 px-5 py-16">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Understanding the Difference"
            title="Emotional Intelligence vs IQ"
            description="Both emotional and cognitive abilities influence human behaviour, but they describe different aspects of how people function."
          />

          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[600px] text-left">
                <thead>
                  <tr className="bg-blue-50">
                    <th className="p-4 font-bold text-slate-900">Aspect</th>
                    <th className="p-4 font-bold text-blue-800">IQ</th>
                    <th className="p-4 font-bold text-indigo-800">EQ / EI</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-sm leading-7">
                  <tr>
                    <td className="p-4 font-bold text-slate-900">Meaning</td>
                    <td className="p-4 text-slate-600">Cognitive intelligence</td>
                    <td className="p-4 text-slate-600">Emotional intelligence</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-slate-900">Main Focus</td>
                    <td className="p-4 text-slate-600">Reasoning and problem-solving</td>
                    <td className="p-4 text-slate-600">Understanding and managing emotions</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-slate-900">Abilities</td>
                    <td className="p-4 text-slate-600">Memory, logic, learning, reasoning</td>
                    <td className="p-4 text-slate-600">Self-awareness, empathy, emotional regulation</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-slate-900">Application</td>
                    <td className="p-4 text-slate-600">Academic and analytical tasks</td>
                    <td className="p-4 text-slate-600">Relationships and emotional situations</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-slate-900">Assessment</td>
                    <td className="p-4 text-slate-600">Standardized intelligence tests</td>
                    <td className="p-4 text-slate-600">Ability tests and other EI assessments</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="border-t border-blue-100 bg-blue-50 p-5">
              <p className="text-sm font-bold leading-7 text-blue-950">
                IQ and EI are not competing measures. A person can have strong
                cognitive abilities and also develop strong emotional skills.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COMPONENTS */}
      <section id="components" className="scroll-mt-24 px-5 py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Core Framework"
            title="Five Major Components of Emotional Intelligence"
            description="Daniel Goleman popularized a five-component framework that explains important emotional and social competencies."
          />

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {components.map((item, index) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                      <Icon size={25} />
                    </div>
                    <span className="text-sm font-bold text-blue-600">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>

                  <div className="mt-5 rounded-xl bg-blue-50 p-4">
                    <p className="text-xs font-bold uppercase tracking-wider text-blue-800">
                      Real-Life Example
                    </p>
                    <p className="mt-2 text-sm leading-7 text-slate-700">
                      {item.example}
                    </p>
                  </div>

                  <div className="mt-5">
                    <p className="mb-3 text-sm font-bold text-slate-900">
                      How to Develop It
                    </p>
                    <ul className="space-y-2">
                      {item.points.map((point) => (
                        <li
                          key={point}
                          className="flex gap-2 text-sm leading-6 text-slate-600"
                        >
                          <CheckCircle2
                            size={17}
                            className="mt-1 shrink-0 text-emerald-600"
                          />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-8 rounded-2xl border border-indigo-100 bg-indigo-50 p-6">
            <h3 className="font-bold text-indigo-950">
              Understanding the Five-Component Model
            </h3>
            <p className="mt-3 text-sm leading-7 text-indigo-900">
              These five components are commonly used to explain emotional
              intelligence in applied psychology and leadership. They are not
              the only scientific model of emotional intelligence. Different
              researchers organize and define emotional intelligence in
              different ways.
            </p>
          </div>
        </div>
      </section>
<AdSlot />
      {/* THEORIES */}
      <section className="bg-slate-50 px-5 py-16">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Psychological Perspectives"
            title="Major Theories and Models of Emotional Intelligence"
            description="Researchers have proposed different approaches to explain what emotional intelligence involves and how it can be studied."
          />

          <div className="grid gap-6 md:grid-cols-2">
            <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                <Brain size={26} />
              </div>

              <h3 className="mt-5 text-xl font-bold text-slate-900">
                Mayer and Salovey's Ability Model
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Psychologists Peter Salovey and John D. Mayer developed an
                ability-based approach to emotional intelligence. It focuses
                on how people process emotional information.
              </p>

              <h4 className="mt-5 font-bold text-slate-900">
                Four Main Abilities
              </h4>

              <ul className="mt-3 space-y-3 text-sm leading-7 text-slate-600">
                <li>• Perceiving emotions accurately.</li>
                <li>• Using emotions to facilitate thought.</li>
                <li>• Understanding emotional meanings and changes.</li>
                <li>• Managing emotions in oneself and others.</li>
              </ul>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-700">
                <Users size={26} />
              </div>

              <h3 className="mt-5 text-xl font-bold text-slate-900">
                Daniel Goleman's Mixed Model
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Daniel Goleman helped popularize emotional intelligence through
                his work on emotional competencies, particularly in workplace
                and leadership settings.
              </p>

              <h4 className="mt-5 font-bold text-slate-900">
                Five Main Components
              </h4>

              <ul className="mt-3 space-y-3 text-sm leading-7 text-slate-600">
                <li>• Self-awareness.</li>
                <li>• Self-regulation.</li>
                <li>• Motivation.</li>
                <li>• Empathy.</li>
                <li>• Social skills.</li>
              </ul>
            </article>
          </div>

          <div className="mt-7 rounded-2xl border border-blue-100 bg-blue-50 p-6">
            <h3 className="font-bold text-blue-950">
              Why Are There Different Models?
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-700">
              The ability model focuses more narrowly on emotional abilities
              that can be assessed as forms of intelligence. Mixed and
              competency-based models also include broader personal and social
              competencies. Therefore, different models may describe emotional
              intelligence differently.
            </p>
          </div>
        </div>
      </section>

      {/* IMPORTANCE */}
      <section className="px-5 py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Why It Matters"
            title="Importance of Emotional Intelligence"
            description="Emotional intelligence can influence how people approach challenges, communicate, maintain relationships, and function in different environments."
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {importance.map((item) => (
              <InfoCard
                key={item.title}
                icon={item.icon}
                title={item.title}
                text={item.text}
              />
            ))}
          </div>
        </div>
      </section>

      {/* REAL LIFE EXAMPLES */}
      <section className="bg-blue-50 px-5 py-16">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Everyday Psychology"
            title="Emotional Intelligence Examples in Real Life"
            description="The following situations show how emotional awareness and emotional regulation can influence everyday responses."
          />

          <div className="overflow-hidden rounded-2xl border border-blue-100 bg-white">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[650px] text-left">
                <thead>
                  <tr className="bg-blue-100">
                    <th className="p-4 font-bold text-slate-900">Situation</th>
                    <th className="p-4 font-bold text-red-800">Unhelpful Response</th>
                    <th className="p-4 font-bold text-emerald-800">Emotionally Aware Response</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-sm leading-7">
                  {examples.map((item) => (
                    <tr key={item.situation}>
                      <td className="p-4 font-bold text-slate-900">
                        {item.situation}
                      </td>
                      <td className="p-4 text-slate-600">{item.low}</td>
                      <td className="p-4 text-slate-600">{item.high}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <p className="mt-5 text-sm leading-7 text-slate-600">
            These examples illustrate different response patterns rather than
            diagnosing a person's emotional intelligence. A single emotional
            reaction does not establish whether someone has high or low EQ.
          </p>
        </div>
      </section>

      {/* IMPROVEMENT */}
      <section id="improve" className="scroll-mt-24 px-5 py-16">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Practical Development"
            title="How to Improve Emotional Intelligence"
            description="Emotional skills can be developed through consistent practice, self-reflection, feedback, and meaningful interactions with others."
          />

          <div className="grid gap-5 sm:grid-cols-2">
            {improvementSteps.map((item, index) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-sm font-bold text-blue-700">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="font-bold text-slate-900">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {item.text}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
<AdSlot />
      {/* APPLICATIONS */}
      <section className="bg-slate-50 px-5 py-16">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Where It Is Useful"
            title="Applications of Emotional Intelligence"
            description="Emotional intelligence has practical relevance across different stages and areas of life."
          />

          <div className="grid gap-5 md:grid-cols-2">
            <InfoCard
              icon={GraduationCap}
              title="Education and Student Life"
              text="Students can use emotional awareness to handle examination pressure, respond to feedback, cooperate with classmates, and manage frustration during learning."
            />
            <InfoCard
              icon={Briefcase}
              title="Workplace and Professional Life"
              text="Emotional competencies can help employees communicate, collaborate, manage disagreements, and respond constructively to workplace challenges."
            />
            <InfoCard
              icon={HeartHandshake}
              title="Personal Relationships"
              text="Recognizing feelings, listening carefully, and understanding different perspectives can support trust and healthier communication."
            />
            <InfoCard
              icon={Users}
              title="Leadership and Management"
              text="Leaders can use emotional awareness, empathy, and communication skills to understand team concerns, handle conflicts, and support cooperation."
            />
          </div>
        </div>
      </section>

      {/* MISCONCEPTIONS */}
      <section className="px-5 py-16">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Clearing Confusion"
            title="Common Myths About Emotional Intelligence"
            description="Emotional intelligence is often misunderstood. These distinctions help explain what it does and does not mean."
          />

          <div className="grid gap-5 md:grid-cols-2">
            {myths.map((item) => (
              <article
                key={item.myth}
                className="rounded-2xl border border-slate-200 bg-white p-6"
              >
                <div className="flex gap-3">
                  <AlertCircle
                    size={21}
                    className="mt-1 shrink-0 text-amber-600"
                  />
                  <div>
                    <h3 className="font-bold text-slate-900">
                      Myth: {item.myth}
                    </h3>
                    <div className="mt-4 flex gap-3">
                      <CheckCircle2
                        size={20}
                        className="mt-1 shrink-0 text-emerald-600"
                      />
                      <p className="text-sm leading-7 text-slate-600">
                        <strong className="text-slate-900">Reality:</strong>{" "}
                        {item.reality}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* LIMITATIONS */}
      <section className="bg-amber-50 px-5 py-16">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="A Balanced Perspective"
            title="Limitations of Emotional Intelligence"
            description="Emotional intelligence is useful, but it should not be treated as a complete explanation of human behaviour or success."
          />

          <div className="grid gap-5 md:grid-cols-2">
            <InfoCard
              icon={Scale}
              title="Different Definitions and Models"
              text="Researchers do not use one universally accepted definition or measurement method. Ability-based and mixed models assess different aspects of emotional functioning."
            />
            <InfoCard
              icon={Activity}
              title="Measurement Challenges"
              text="Some assessments use ability-based tasks, while others rely on self-reported behaviour. These methods can produce different results and have different limitations."
            />
            <InfoCard
              icon={Users}
              title="Context Matters"
              text="Emotional expressions and appropriate social responses can vary across cultures, relationships, and situations. The same behaviour may be interpreted differently in different contexts."
            />
            <InfoCard
              icon={RefreshCw}
              title="Not a Guarantee of Success"
              text="Emotional intelligence alone cannot guarantee professional success, healthy relationships, or good decisions. Knowledge, skills, opportunities, circumstances, and other personal qualities also matter."
            />
          </div>
        </div>
      </section>
<AdSlot />
      {/* KEY TAKEAWAY */}
      <section className="px-5 py-16">
        <div className="mx-auto max-w-5xl rounded-3xl border border-blue-100 bg-gradient-to-br from-white via-blue-50 to-indigo-100 p-8 sm:p-12">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
            <Sparkles size={27} />
          </div>

          <h2 className="mt-5 text-2xl font-bold text-slate-900 sm:text-3xl">
            The Central Idea of Emotional Intelligence
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-700">
            Emotional intelligence is not about eliminating emotions or
            controlling every situation. It is about developing a better
            understanding of emotional experiences, recognizing how feelings
            influence behaviour, and responding thoughtfully to yourself and
            others.
          </p>

          <p className="mt-4 text-base font-bold leading-8 text-blue-900">
            Understand yourself, manage your responses, and try to understand
            other people. These are the foundations of emotional intelligence.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50 px-5 py-16">
        <div className="mx-auto max-w-4xl">
          <SectionHeading
            eyebrow="Frequently Asked Questions"
            title="Emotional Intelligence FAQs"
            description="Answers to common questions about emotional intelligence, EQ, and emotional development."
          />

          <div className="space-y-4">
            {faqs.map((item) => (
              <details
                key={item.q}
                className="group rounded-2xl border border-slate-200 bg-white p-5 open:border-blue-200 open:shadow-sm"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-slate-900 [&::-webkit-details-marker]:hidden">
                  <span className="flex items-center gap-3">
                    <HelpCircle
                      size={20}
                      className="shrink-0 text-blue-600"
                    />
                    {item.q}
                  </span>
                  <span className="shrink-0 text-xl text-blue-600 transition group-open:rotate-45">
                    +
                  </span>
                </summary>

                <p className="mt-4 border-t border-slate-100 pt-4 pl-8 text-sm leading-7 text-slate-600">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CONCLUSION */}
      <section className="px-5 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">
            <HandHeart size={30} />
          </div>

          <h2 className="mt-5 text-2xl font-bold text-slate-900">
            Understanding Emotions Is a Skill Worth Developing
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-8 text-slate-600">
            Emotional intelligence helps us understand an important part of
            human psychology: the relationship between feelings, thoughts,
            decisions, and behaviour. Developing emotional awareness can
            support better communication, more thoughtful responses, and
            stronger interpersonal relationships.
          </p>
        </div>
      </section>
    </main>
  );
}
