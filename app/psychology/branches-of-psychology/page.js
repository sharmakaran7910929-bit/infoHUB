
import Link from "next/link";
import {
  Brain,
  BrainCircuit,
  Heart,
  Users,
  GraduationCap,
  Microscope,
  BriefcaseBusiness,
  Activity,
  ShoppingBag,
  Scale,
  Sparkles,
  Dumbbell,
  Lightbulb,
  BookOpen,
  ArrowRight,
  Network,
  Stethoscope,
  Eye,
  Target,
  ShieldCheck,
} from "lucide-react";

import RelatedTopics from "../../../components/ContinueReading";
import AdSlot from "../../../components/AdSlot";

export const metadata = {
  title: "Branches of Psychology | Types, Examples & Applications",
  description:
    "Explore the major branches of psychology, what each branch studies, how it influences human behaviour, real-life examples and related psychology topics.",
};

const pageUrl =
  "https://www.pricetag.co.in/psychology/branches-of-psychology";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Branches of Psychology | Types, Examples and Applications",
      description:
        "An overview of the major branches of psychology, their areas of study, influence on human behaviour and practical examples.",
      mainEntityOfPage: pageUrl,
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
    },
  ],
};

const researchBranches = [
  {
    title: "Cognitive Psychology",
    subtitle: "How the mind processes information",
    icon: BrainCircuit,
    color: "blue",
    description:
      "Cognitive psychology studies mental processes such as thinking, memory, attention, perception, language, reasoning and decision-making.",
    influence:
      "It helps explain how people understand information, solve problems, remember experiences and make choices.",
    example:
      "A student uses spaced repetition to remember information before an examination. Cognitive psychology helps explain how memory and learning work.",
    topic: "Memory, Thinking & Decision-Making",
    href: "/psychology/cognitive-psychology",
  },
  {
    title: "Biological Psychology",
    subtitle: "How the brain and body influence behaviour",
    icon: Microscope,
    color: "indigo",
    description:
      "Biological psychology examines the relationship between brain structures, the nervous system, hormones, genetics and human behaviour.",
    influence:
      "It helps explain how biological processes influence emotions, sleep, motivation, memory and responses to the environment.",
    example:
      "Changes in sleep patterns can affect concentration, memory and emotional responses. Biological psychology investigates the mechanisms involved.",
    topic: "Brain, Nervous System & Cognition",
    href: "/psychology/cognitive-neuroscience",
  },
  {
    title: "Developmental Psychology",
    subtitle: "How people change throughout life",
    icon: Activity,
    color: "violet",
    description:
      "Developmental psychology studies physical, cognitive, emotional and social development from infancy through childhood, adolescence, adulthood and old age.",
    influence:
      "It helps explain how experiences, learning, relationships and biological changes influence people at different life stages.",
    example:
      "A young child gradually develops language, reasoning and problem-solving abilities. Developmental psychology examines how these abilities change with age.",
    topic: "Piaget's Stages of Cognitive Development",
    href: "/psychology/piaget-stages",
  },
  {
    title: "Social Psychology",
    subtitle: "How society influences individuals",
    icon: Users,
    color: "sky",
    description:
      "Social psychology examines how people think, feel and behave in the presence of others, including the influence of groups, relationships and social situations.",
    influence:
      "It helps explain conformity, social pressure, group behaviour, persuasion, prejudice and interpersonal relationships.",
    example:
      "A person changes their opinion because most members of a group support a different viewpoint. This can be studied through social influence and conformity.",
    topic: "Social Learning Theory",
    href: "/psychology/social-learning-theory",
  },
  {
    title: "Personality Psychology",
    subtitle: "Why individuals behave differently",
    icon: Brain,
    color: "pink",
    description:
      "Personality psychology studies relatively enduring patterns of thoughts, feelings and behaviours that make individuals different from one another.",
    influence:
      "It helps explain differences in sociability, emotional responses, decision-making, preferences and individual behaviour.",
    example:
      "One person enjoys social gatherings while another prefers quiet environments. Personality psychology explores individual differences without assuming that either preference is better.",
    topic: "Big Five Personality Traits",
    href: "/psychology/big-five-personality",
  },
];

const appliedBranches = [
  {
    title: "Clinical Psychology",
    subtitle: "Mental health and psychological difficulties",
    icon: Heart,
    color: "rose",
    description:
      "Clinical psychology focuses on understanding, assessing and treating mental, emotional and behavioural difficulties through psychological knowledge and evidence-based interventions.",
    influence:
      "It contributes to mental healthcare, emotional well-being, psychological assessment and the treatment of psychological conditions.",
    example:
      "A qualified clinical psychologist may use cognitive behavioural therapy to help someone identify and change unhelpful patterns of thinking and behaviour.",
    topic: "Cognitive Behavioural Therapy",
    href: "/psychology/cognitive-behavioural-therapy",
  },
  {
    title: "Educational Psychology",
    subtitle: "How people learn and develop knowledge",
    icon: GraduationCap,
    color: "blue",
    description:
      "Educational psychology studies learning, teaching, motivation, memory, classroom behaviour and the factors that influence educational development.",
    influence:
      "It helps educators understand learning difficulties, improve teaching approaches and create environments that support students.",
    example:
      "A teacher introduces visual explanations, practice exercises and feedback to help students understand a difficult subject.",
    topic: "Educational Psychology",
    href: "/psychology/educational-psychology",
  },
  {
    title: "Health Psychology",
    subtitle: "The relationship between behaviour and health",
    icon: Stethoscope,
    color: "emerald",
    description:
      "Health psychology studies how psychological, behavioural, social and biological factors influence physical health, illness and healthcare decisions.",
    influence:
      "It helps explain stress, health-related habits, treatment adherence, lifestyle choices and the psychological aspects of managing illness.",
    example:
      "A person develops a healthier daily routine by understanding how stress, motivation and habits influence exercise and sleep.",
    topic: "Stress Psychology",
    href: "/psychology/stress-psychology",
  },
  {
    title: "Industrial and Organizational Psychology",
    subtitle: "Human behaviour in the workplace",
    icon: BriefcaseBusiness,
    color: "amber",
    description:
      "Industrial and organizational psychology applies psychological principles to workplaces, including employee selection, training, leadership, motivation and organizational culture.",
    influence:
      "It helps organizations improve employee well-being, teamwork, productivity, leadership and workplace relationships.",
    example:
      "A company redesigns its employee feedback system to improve communication, motivation and job satisfaction.",
    topic: "Habit Formation",
    href: "/psychology/habit-formation",
  },
  {
    title: "Sports Psychology",
    subtitle: "Mental factors behind sports performance",
    icon: Dumbbell,
    color: "orange",
    description:
      "Sports psychology examines how mental and emotional factors affect athletic performance, physical activity and participation in sports.",
    influence:
      "It helps athletes develop concentration, confidence, motivation, emotional control and strategies for managing performance pressure.",
    example:
      "A player uses visualization and concentration techniques to prepare mentally before an important competition.",
    topic: "Sports Psychology",
    href: "/psychology/sports-psychology",
  },
  {
    title: "Consumer Psychology",
    subtitle: "Why people buy products and services",
    icon: ShoppingBag,
    color: "purple",
    description:
      "Consumer psychology studies the mental processes, emotions, preferences and social influences that affect purchasing decisions and consumer behaviour.",
    influence:
      "It helps explain brand preferences, advertising responses, buying habits, product perception and consumer decision-making.",
    example:
      "A customer chooses one product over another because of brand familiarity, product reviews, packaging or perceived value.",
    topic: "Consumer Psychology",
    href: "/psychology/consumer-psychology",
  },
  {
    title: "Positive Psychology",
    subtitle: "Well-being, strengths and personal growth",
    icon: Sparkles,
    color: "emerald",
    description:
      "Positive psychology studies positive emotions, personal strengths, resilience, meaningful experiences and the factors that support human well-being.",
    influence:
      "It contributes to understanding life satisfaction, personal development, optimism, resilience and positive relationships.",
    example:
      "A person regularly reflects on meaningful achievements and practices gratitude to develop greater awareness of positive experiences.",
    topic: "Positive Psychology",
    href: "/psychology/positive-psychology",
  },
  {
    title: "Forensic Psychology",
    subtitle: "Psychology and the legal system",
    icon: Scale,
    color: "slate",
    description:
      "Forensic psychology applies psychological knowledge to legal and judicial settings, including assessments, eyewitness research and issues involving behaviour and the law.",
    influence:
      "It helps legal professionals understand relevant psychological evidence, human behaviour, memory and decision-making in legal contexts.",
    example:
      "A forensic psychologist may evaluate a person's psychological functioning when asked to provide a professional assessment for a legal proceeding.",
    topic: "Critical Thinking",
    href: "/psychology/critical-thinking",
  },
];

const colorStyles = {
  blue: {
    icon: "bg-blue-50 text-blue-700",
    border: "hover:border-blue-200",
    label: "text-blue-700",
    line: "bg-blue-100",
  },
  indigo: {
    icon: "bg-indigo-50 text-indigo-700",
    border: "hover:border-indigo-200",
    label: "text-indigo-700",
    line: "bg-indigo-100",
  },
  violet: {
    icon: "bg-violet-50 text-violet-700",
    border: "hover:border-violet-200",
    label: "text-violet-700",
    line: "bg-violet-100",
  },
  sky: {
    icon: "bg-sky-50 text-sky-700",
    border: "hover:border-sky-200",
    label: "text-sky-700",
    line: "bg-sky-100",
  },
  pink: {
    icon: "bg-pink-50 text-pink-700",
    border: "hover:border-pink-200",
    label: "text-pink-700",
    line: "bg-pink-100",
  },
  rose: {
    icon: "bg-rose-50 text-rose-700",
    border: "hover:border-rose-200",
    label: "text-rose-700",
    line: "bg-rose-100",
  },
  emerald: {
    icon: "bg-emerald-50 text-emerald-700",
    border: "hover:border-emerald-200",
    label: "text-emerald-700",
    line: "bg-emerald-100",
  },
  amber: {
    icon: "bg-amber-50 text-amber-700",
    border: "hover:border-amber-200",
    label: "text-amber-700",
    line: "bg-amber-100",
  },
  orange: {
    icon: "bg-orange-50 text-orange-700",
    border: "hover:border-orange-200",
    label: "text-orange-700",
    line: "bg-orange-100",
  },
  purple: {
    icon: "bg-purple-50 text-purple-700",
    border: "hover:border-purple-200",
    label: "text-purple-700",
    line: "bg-purple-100",
  },
  slate: {
    icon: "bg-slate-100 text-slate-700",
    border: "hover:border-slate-300",
    label: "text-slate-700",
    line: "bg-slate-200",
  },
};

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mb-9 max-w-3xl">
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
        {eyebrow}
      </p>
      <h2 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-base leading-7 text-slate-600">
          {description}
        </p>
      )}
    </div>
  );
}

function BranchCard({ branch, index }) {
  const Icon = branch.icon;
  const styles = colorStyles[branch.color];

  return (
    <article
      id={branch.href.split("/").pop()}
      className={`scroll-mt-28 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-900/5 ${styles.border}`}
    >
      <div className="flex items-start justify-between gap-3">
        <div
          className={`flex h-12 w-12 items-center justify-center rounded-xl ${styles.icon}`}
        >
          <Icon size={24} />
        </div>

        <span className="text-xs font-bold text-slate-300">
          {String(index).padStart(2, "0")}
        </span>
      </div>

      <h3 className="mt-5 text-xl font-bold text-slate-950">
        {branch.title}
      </h3>

      <p className={`mt-1 text-xs font-bold ${styles.label}`}>
        {branch.subtitle}
      </p>

      <p className="mt-4 text-sm leading-7 text-slate-600">
        {branch.description}
      </p>

      <div className={`my-5 h-px ${styles.line}`} />

      <div>
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-800">
          <Network size={15} className={styles.label} />
          How It Influences People
        </div>

        <p className="mt-2 text-sm leading-7 text-slate-600">
          {branch.influence}
        </p>
      </div>

      <div className="mt-5 rounded-xl bg-slate-50 p-4">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-700">
          <Lightbulb size={15} className="text-amber-500" />
          Real-Life Example
        </div>

        <p className="mt-2 text-sm leading-6 text-slate-600">
          {branch.example}
        </p>
      </div>

      <Link
        href={branch.href}
        className="mt-5 flex items-center justify-between gap-3 rounded-xl border border-blue-100 bg-blue-50/70 px-4 py-3 transition hover:border-blue-300 hover:bg-blue-50"
      >
        <div className="min-w-0">
          <span className="block text-[10px] font-bold uppercase tracking-wider text-blue-600">
            Explore Related Topic
          </span>
          <span className="mt-1 block text-sm font-bold text-blue-900">
            {branch.topic}
          </span>
        </div>

        <ArrowRight
          size={18}
          className="shrink-0 text-blue-700 transition group-hover:translate-x-1"
        />
      </Link>
    </article>
  );
}

const relatedLinks = [
  {
    href: "/psychology/what-is-psychology",
    label: "What Is Psychology",
  },
  {
    href: "/psychology/cognitive-psychology",
    label: "Cognitive Psychology",
  },
  {
    href: "/psychology/cognitive-neuroscience",
    label: "Cognitive Neuroscience",
  },
  {
    href: "/psychology/piaget-stages",
    label: "Piaget Stages of Cognitive Development",
  },
  {
    href: "/psychology/social-learning-theory",
    label: "Social Learning Theory",
  },
  {
    href: "/psychology/big-five-personality",
    label: "Big Five Personality",
  },
  {
    href: "/psychology/cognitive-behavioural-therapy",
    label: "Cognitive Behavioural Therapy",
  },
  {
    href: "/psychology/educational-psychology",
    label: "Educational Psychology",
  },
  {
    href: "/psychology/stress-psychology",
    label: "Stress Psychology",
  },
  {
    href: "/psychology/sports-psychology",
    label: "Sports Psychology",
  },
  {
    href: "/psychology/consumer-psychology",
    label: "Consumer Psychology",
  },
  {
    href: "/psychology/positive-psychology",
    label: "Positive Psychology",
  },
  {
    href: "/psychology/critical-thinking",
    label: "Critical Thinking",
  },
  {
    href: "/psychology/habit-formation",
    label: "Habit Formation",
  },
];

export default function BranchesOfPsychologyPage() {
  return (
    <main className="overflow-hidden bg-white text-slate-800">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />

      {/* Hero */}
      <section className="relative border-b border-blue-100 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-10">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-2 text-xs font-bold text-blue-700 shadow-sm">
              <Brain size={15} />
              PSYCHOLOGY KNOWLEDGE GUIDE
            </div>

            <h1 className="text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Branches of
              <span className="block bg-gradient-to-r from-blue-700 to-indigo-600 bg-clip-text text-transparent">
                Psychology
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              Psychology is a broad field that explores the human mind,
              emotions and behaviour. Its different branches examine how
              people think, develop, interact, learn and respond to the world
              around them.
            </p>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500">
              Discover the major areas of psychology, understand their
              influence on everyday life and explore practical examples
              from each branch.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#research-branches"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-700 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-blue-700/20 transition hover:bg-blue-800"
              >
                Explore the Branches
                <ArrowRight size={17} />
              </a>

              <Link
                href="/psychology/what-is-psychology"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-700 transition hover:border-blue-300 hover:text-blue-700"
              >
                Psychology Basics
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-5 text-xs font-bold text-slate-500">
              <span className="flex items-center gap-2">
                <CheckCircleIcon />
                Major fields
              </span>
              <span className="flex items-center gap-2">
                <CheckCircleIcon />
                Practical examples
              </span>
              <span className="flex items-center gap-2">
                <CheckCircleIcon />
                Related topics
              </span>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute inset-10 rounded-full bg-blue-200/40 blur-3xl" />

            <div className="relative rounded-[2rem] border border-blue-100 bg-white p-6 shadow-2xl shadow-blue-900/10">
              <div className="text-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-lg shadow-blue-700/20">
                  <Brain size={42} />
                </div>

                <h2 className="mt-4 text-xl font-bold text-slate-950">
                  Psychology
                </h2>
                <p className="mt-1 text-xs text-slate-500">
                  Understanding the human experience
                </p>
              </div>

              <div className="my-5 flex justify-center">
                <div className="h-7 w-px bg-blue-200" />
              </div>

              <div className="grid grid-cols-2 gap-3">
                {[
                  {
                    title: "Cognitive",
                    icon: BrainCircuit,
                  },
                  {
                    title: "Biological",
                    icon: Microscope,
                  },
                  {
                    title: "Developmental",
                    icon: Activity,
                  },
                  {
                    title: "Social",
                    icon: Users,
                  },
                  {
                    title: "Personality",
                    icon: FingerprintIcon,
                  },
                  {
                    title: "Applied",
                    icon: Target,
                  },
                ].map(({ title, icon: Icon }) => (
                  <div
                    key={title}
                    className="flex items-center gap-2 rounded-xl border border-blue-100 bg-blue-50/70 p-3"
                  >
                    <Icon size={18} className="shrink-0 text-blue-700" />
                    <span className="text-xs font-bold text-slate-700">
                      {title}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-4 rounded-xl bg-gradient-to-r from-blue-700 to-indigo-700 p-4 text-center text-sm font-bold text-white">
                Multiple Perspectives, One Human Experience
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Broad Meaning */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow="Understanding the Field"
          title="What Are the Branches of Psychology?"
          description="Each branch investigates a different dimension of human experience, while contributing to a wider understanding of the mind and behaviour."
        />

        <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="space-y-5 text-base leading-8 text-slate-600">
            <p>
              The branches of psychology are specialized areas within
              psychology that focus on particular aspects of mental processes,
              human behaviour and individual development.
            </p>

            <p>
              For example, cognitive psychology examines how people think
              and remember, developmental psychology studies changes
              throughout life, and social psychology explores how other
              people influence individual behaviour.
            </p>

            <p>
              Some branches primarily develop scientific knowledge through
              research, while others apply psychological principles to
              practical situations such as education, healthcare, sports,
              business and the legal system.
            </p>

            <p>
              These branches are connected. Understanding a person's
              behaviour may require examining biological processes,
              personality, past experiences, social surroundings and
              current circumstances together.
            </p>
          </div>

          <div className="rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-blue-700 shadow-sm">
              <Network size={25} />
            </div>

            <h3 className="mt-5 text-lg font-bold text-slate-950">
              Why Are There Different Branches?
            </h3>

            <ul className="mt-4 space-y-3">
              {[
                "To study different aspects of human behaviour.",
                "To understand the influence of biological and social factors.",
                "To develop specialized research and knowledge.",
                "To apply psychology to real-world challenges.",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm leading-6 text-slate-600"
                >
                  <span className="mt-1 text-blue-600">●</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <AdSlot />

      {/* Visual Classification Diagram */}
      <section className="border-y border-blue-100 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="Visual Classification"
            title="How Is Psychology Divided Into Different Areas?"
            description="A simplified diagram showing research-oriented areas and practical applications of psychology."
          />

          <div className="mx-auto max-w-4xl">
            <div className="mx-auto max-w-xs rounded-2xl bg-gradient-to-r from-blue-700 to-indigo-700 p-5 text-center text-white shadow-lg shadow-blue-700/20">
              <Brain size={32} className="mx-auto" />
              <h3 className="mt-2 text-xl font-bold">PSYCHOLOGY</h3>
              <p className="mt-1 text-xs text-blue-100">
                Study of mind and behaviour
              </p>
            </div>

            <div className="mx-auto h-9 w-px bg-blue-300" />
            <div className="mx-auto h-px w-[75%] bg-blue-300" />

            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col items-center">
                <div className="h-7 w-px bg-blue-300" />
                <div className="w-full rounded-2xl border border-blue-200 bg-white p-4 text-center shadow-sm sm:p-6">
                  <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                    <Microscope size={23} />
                  </div>
                  <h3 className="mt-3 text-sm font-bold text-slate-900 sm:text-base">
                    Research & Understanding
                  </h3>
                  <p className="mt-2 text-xs leading-5 text-slate-500">
                    Exploring mental processes, development and behaviour
                  </p>
                </div>

                <div className="mt-4 grid w-full grid-cols-1 gap-2 sm:grid-cols-2">
                  {[
                    "Cognitive",
                    "Biological",
                    "Developmental",
                    "Social",
                    "Personality",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-lg border border-blue-100 bg-white px-2 py-3 text-center text-xs font-bold text-blue-800"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col items-center">
                <div className="h-7 w-px bg-indigo-300" />
                <div className="w-full rounded-2xl border border-indigo-200 bg-white p-4 text-center shadow-sm sm:p-6">
                  <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-700">
                    <Target size={23} />
                  </div>
                  <h3 className="mt-3 text-sm font-bold text-slate-900 sm:text-base">
                    Practical Applications
                  </h3>
                  <p className="mt-2 text-xs leading-5 text-slate-500">
                    Applying psychological knowledge to real-world settings
                  </p>
                </div>

                <div className="mt-4 grid w-full grid-cols-1 gap-2 sm:grid-cols-2">
                  {[
                    "Clinical",
                    "Educational",
                    "Health",
                    "Workplace",
                    "Sports",
                    "Consumer",
                    "Forensic",
                    "Positive",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-lg border border-indigo-100 bg-white px-2 py-3 text-center text-xs font-bold text-indigo-800"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-xl border border-blue-100 bg-white p-5 text-center">
              <p className="text-sm font-bold text-slate-900">
                Important: These categories overlap.
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                A single topic can belong to multiple branches. For example,
                memory can be studied through cognitive psychology,
                developmental psychology and biological psychology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Research Branches */}
      <section
        id="research-branches"
        className="mx-auto max-w-7xl scroll-mt-24 px-5 py-16 sm:px-8 lg:px-10"
      >
        <SectionHeading
          eyebrow="Research-Oriented Branches"
          title="Major Branches That Study the Human Mind and Behaviour"
          description="These fields investigate how people think, develop, interact and differ from one another."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {researchBranches.map((branch, index) => (
            <BranchCard
              key={branch.title}
              branch={branch}
              index={index + 1}
            />
          ))}
        </div>
      </section>

      {/* Applied Branches */}
      <section className="border-y border-slate-100 bg-slate-50/70">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="Applied Branches"
            title="Branches That Apply Psychology to Everyday Life"
            description="Applied psychology connects scientific knowledge with practical challenges in healthcare, education, workplaces, sports and society."
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {appliedBranches.map((branch, index) => (
              <BranchCard
                key={branch.title}
                branch={branch}
                index={researchBranches.length + index + 1}
              />
            ))}
          </div>
        </div>
      </section>

      <AdSlot />

      {/* How Branches Work Together */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow="Connected Knowledge"
          title="How Do Different Branches of Psychology Work Together?"
          description="A single real-life situation can be understood through several psychological perspectives."
        />

        <div className="rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-6 sm:p-9">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-700 text-white shadow-lg">
              <GraduationCap size={28} />
            </div>

            <h3 className="mt-4 text-xl font-bold text-slate-950">
              Example: A Student Preparing for an Examination
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              Consider a student who struggles with concentration,
              experiences examination stress and wants to improve academic
              performance. Different branches can explain different parts
              of this situation.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Cognitive Psychology",
                description:
                  "Explains attention, memory and information processing.",
                icon: BrainCircuit,
              },
              {
                title: "Biological Psychology",
                description:
                  "Examines how sleep, brain activity and physiological factors affect concentration.",
                icon: Microscope,
              },
              {
                title: "Developmental Psychology",
                description:
                  "Considers how age and cognitive development influence learning.",
                icon: Activity,
              },
              {
                title: "Social Psychology",
                description:
                  "Examines peer influence, classroom environment and social pressure.",
                icon: Users,
              },
              {
                title: "Educational Psychology",
                description:
                  "Explores teaching methods, study strategies and learning environments.",
                icon: BookOpen,
              },
              {
                title: "Health Psychology",
                description:
                  "Examines stress, sleep, physical health and healthy routines.",
                icon: Heart,
              },
            ].map(({ title, description, icon: Icon }) => (
              <div
                key={title}
                className="rounded-xl border border-blue-100 bg-white p-5"
              >
                <Icon size={23} className="text-blue-700" />
                <h4 className="mt-3 text-sm font-bold text-slate-900">
                  {title}
                </h4>
                <p className="mt-2 text-xs leading-6 text-slate-600">
                  {description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-xl bg-gradient-to-r from-blue-700 to-indigo-700 p-5 text-center text-white">
            <p className="font-bold">
              One Situation, Multiple Psychological Perspectives
            </p>
            <p className="mt-2 text-xs leading-6 text-blue-100">
              Combining different branches provides a broader understanding
              of human behaviour than examining a situation from only one
              perspective.
            </p>
          </div>
        </div>
      </section>

      {/* Why Important */}
      <section className="border-y border-slate-100 bg-slate-50/70">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="Practical Importance"
            title="Why Are the Branches of Psychology Important?"
            description="Specialized areas of psychology contribute to different aspects of individual, organizational and social development."
          />

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Better Self-Understanding",
                description:
                  "Understand personality, emotions, motivations and personal behaviour.",
                icon: Eye,
              },
              {
                title: "Improved Learning",
                description:
                  "Apply knowledge about memory, attention and learning to educational activities.",
                icon: GraduationCap,
              },
              {
                title: "Health and Well-Being",
                description:
                  "Understand psychological influences on health, stress and lifestyle.",
                icon: Heart,
              },
              {
                title: "Better Relationships",
                description:
                  "Understand communication, group behaviour and social influence.",
                icon: Users,
              },
              {
                title: "Workplace Development",
                description:
                  "Apply psychology to teamwork, employee motivation and leadership.",
                icon: BriefcaseBusiness,
              },
              {
                title: "Consumer Understanding",
                description:
                  "Explore why people develop preferences and make purchasing decisions.",
                icon: ShoppingBag,
              },
              {
                title: "Sports Performance",
                description:
                  "Understand confidence, focus, motivation and performance pressure.",
                icon: Dumbbell,
              },
              {
                title: "Scientific Knowledge",
                description:
                  "Develop evidence-based explanations of mental processes and behaviour.",
                icon: Microscope,
              },
            ].map(({ title, description, icon: Icon }) => (
              <div
                key={title}
                className="rounded-2xl border border-slate-200 bg-white p-5"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                  <Icon size={22} />
                </div>
                <h3 className="mt-4 text-sm font-bold text-slate-900">
                  {title}
                </h3>
                <p className="mt-2 text-xs leading-6 text-slate-600">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
        <div className="rounded-3xl bg-gradient-to-br from-blue-800 via-blue-700 to-indigo-800 p-8 text-white sm:p-12">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/15">
            <Brain size={27} />
          </div>

          <h2 className="mt-6 text-2xl font-bold sm:text-3xl">
            Psychology Is a Field With Many Connected Perspectives
          </h2>

          <p className="mt-5 max-w-3xl text-sm leading-8 text-blue-100 sm:text-base">
            The branches of psychology provide different ways to understand
            the human mind and behaviour. From cognitive and biological
            psychology to clinical, educational, social and consumer
            psychology, each field contributes specialized knowledge.
            Together, they help explain how people think, feel, learn,
            develop and interact with the world.
          </p>

          <Link
            href="/psychology/cognitive-psychology"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-blue-800 transition hover:bg-blue-50"
          >
            Start Exploring Cognitive Psychology
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>

      {/* Related Topics */}
      <section className="border-t border-slate-100 py-12">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <RelatedTopics
            title="Explore More About Psychology"
            links={relatedLinks}
          />
        </div>
      </section>
    </main>
  );
}

function CheckCircleIcon() {
  return (
    <span className="flex h-4 w-4 items-center justify-center rounded-full bg-blue-100 text-blue-700">
      <span className="text-[10px]">✓</span>
    </span>
  );
}

function FingerprintIcon() {
  return <BrainCircuit size={18} className="shrink-0 text-blue-700" />;
}
