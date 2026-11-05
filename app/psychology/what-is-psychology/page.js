
import Link from "next/link";
import {
  Brain,
  BrainCircuit,
  Heart,
  Lightbulb,
  Users,
  Eye,
  BookOpen,
  GraduationCap,
  BriefcaseBusiness,
  Activity,
  Microscope,
  Target,
  MessageCircle,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  CircleHelp,
  Network,
  Fingerprint,
  Clock,ChevronDown,
  FlaskConical,
} from "lucide-react";

import AdSlot from "../../../components/AdSlot";

export const metadata = {
  title: "What Is Psychology? Meaning, Branches, Scope & Examples | PriceTag HUB",
  description:
    "Learn what psychology is, its meaning, scientific foundations, major branches, research methods, real-life applications and practical examples of human behaviour.",
};

const pageUrl =
  "https://www.pricetag.co.in/psychology/what-is-psychology";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "What Is Psychology? Meaning, Branches, Scope and Examples",
      description:
        "A comprehensive introduction to psychology, including its scientific foundations, major branches, research methods and applications in everyday life.",
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
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is psychology in simple words?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Psychology is the scientific study of the mind and behaviour. It examines how people think, feel, learn, remember, make decisions and interact with others.",
          },
        },
        {
          "@type": "Question",
          name: "Is psychology a science?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Psychology is a scientific discipline that uses systematic observation, experiments, surveys and other research methods to study mental processes and behaviour.",
          },
        },
        {
          "@type": "Question",
          name: "What are the main branches of psychology?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Major branches include cognitive, developmental, social, clinical, educational, biological, personality, industrial-organizational and health psychology.",
          },
        },
        {
          "@type": "Question",
          name: "What is the difference between psychology and psychiatry?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Psychology is the scientific discipline concerned with the mind and behaviour. Psychiatry is a medical specialty focused on diagnosing and treating mental health conditions. Psychiatrists are medical doctors.",
          },
        },
        {
          "@type": "Question",
          name: "Why is psychology important in everyday life?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Psychology helps people understand emotions, improve communication, develop learning strategies, recognize thinking biases, build habits and understand social behaviour.",
          },
        },
      ],
    },
  ],
};

const branches = [
  {
    title: "Cognitive Psychology",
    description:
      "Studies thinking, memory, attention, perception, language and decision-making.",
    href: "/psychology/cognitive-psychology",
    icon: BrainCircuit,
  },
  {
    title: "Developmental Psychology",
    description:
      "Explores how people change physically, mentally, emotionally and socially throughout life.",
    href: "/psychology/piaget-stages",
    icon: Activity,
  },
  {
    title: "Social Psychology",
    description:
      "Examines how other people, groups and social situations influence behaviour.",
    href: "/psychology/social-learning-theory",
    icon: Users,
  },
  {
    title: "Personality Psychology",
    description:
      "Studies individual differences in personality, traits, preferences and behaviour.",
    href: "/psychology/big-five-personality",
    icon: Fingerprint,
  },
  {
    title: "Clinical Psychology",
    description:
      "Focuses on the assessment and psychological treatment of mental, emotional and behavioural difficulties.",
    href: "/psychology/cognitive-behavioural-therapy",
    icon: Heart,
  },
  {
    title: "Educational Psychology",
    description:
      "Studies how people learn and how teaching environments can support learning.",
    href: "/psychology/educational-psychology",
    icon: GraduationCap,
  },
  {
    title: "Biological Psychology",
    description:
      "Investigates how the brain, nervous system, hormones and biological processes influence behaviour.",
    href: "/psychology/cognitive-neuroscience",
    icon: Microscope,
  },
  {
    title: "Positive Psychology",
    description:
      "Explores well-being, strengths, resilience, positive emotions and meaningful living.",
    href: "/psychology/positive-psychology",
    icon: Sparkles,
  },
];

const applications = [
  {
    title: "Education",
    description:
      "Understanding learning styles, memory, attention and motivation helps improve teaching and learning strategies.",
    icon: GraduationCap,
  },
  {
    title: "Healthcare",
    description:
      "Psychological knowledge supports mental well-being, behaviour change, stress management and patient care.",
    icon: Heart,
  },
  {
    title: "Business",
    description:
      "Businesses use psychology to understand consumer decisions, employee motivation, leadership and teamwork.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Relationships",
    description:
      "Understanding emotions, communication and social behaviour can improve personal and professional relationships.",
    icon: MessageCircle,
  },
  {
    title: "Sports",
    description:
      "Sports psychology examines concentration, confidence, motivation and performance under pressure.",
    icon: Target,
  },
  {
    title: "Everyday Decisions",
    description:
      "Knowledge of cognitive biases and decision-making can help people evaluate information more carefully.",
    icon: Lightbulb,
  },
];

const researchMethods = [
  {
    title: "Observation",
    description:
      "Researchers systematically observe behaviour in natural or controlled settings.",
  },
  {
    title: "Experiments",
    description:
      "Researchers manipulate variables under controlled conditions to investigate cause-and-effect relationships.",
  },
  {
    title: "Surveys and Questionnaires",
    description:
      "Participants answer structured questions to collect information about attitudes, experiences and behaviour.",
  },
  {
    title: "Case Studies",
    description:
      "Researchers examine an individual, group or situation in considerable detail.",
  },
  {
    title: "Correlational Research",
    description:
      "Researchers examine whether two or more variables are associated, without assuming that one causes the other.",
  },
  {
    title: "Interviews",
    description:
      "Researchers ask participants questions to understand their experiences, opinions and perspectives.",
  },
];

const relatedLinks = [
  { href: "/psychology/branches-of-psychology", label: "Branches of Psychology" },
  { href: "/psychology/cognitive-psychology", label: "Cognitive Psychology" },
  { href: "/psychology/critical-thinking", label: "Critical Thinking" },
  { href: "/psychology/dunning-kruger-effect", label: "Dunning-Kruger Effect" },
  { href: "/psychology/confirmation-bias", label: "Confirmation Bias" },
  { href: "/psychology/types-of-memory", label: "Types of Memory" },
  { href: "/psychology/learning-theories", label: "Learning Theories" },
  { href: "/psychology/working-memory", label: "Working Memory" },
  { href: "/psychology/introversion", label: "Introversion" },
  { href: "/psychology/mbti-test", label: "MBTI Personality Test" },
  { href: "/psychology/big-five-personality", label: "Big Five Personality" },
  { href: "/psychology/social-learning-theory", label: "Social Learning Theory" },
  { href: "/psychology/habit-formation", label: "Habit Formation" },
  { href: "/psychology/emotional-intelligence", label: "Emotional Intelligence" },
  { href: "/psychology/intrinsic-motivation", label: "Intrinsic Motivation" },
  { href: "/psychology/human-emotions", label: "Human Emotions" },
  { href: "/psychology/piaget-stages", label: "Piaget Stages of Cognitive Development" },
  { href: "/psychology/cognitive-neuroscience", label: "Cognitive Neuroscience" },
  { href: "/psychology/cognitive-behavioural-therapy", label: "Cognitive Behavioural Therapy" },
  { href: "/psychology/educational-psychology", label: "Educational Psychology" },
  { href: "/psychology/stress-psychology", label: "Stress Psychology" },
  { href: "/psychology/sports-psychology", label: "Sports Psychology" },
  { href: "/psychology/consumer-psychology", label: "Consumer Psychology" },
  { href: "/psychology/positive-psychology", label: "Positive Psychology" },
];

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mb-8 max-w-3xl">
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

function InfoCard({ icon: Icon, title, description }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-900/5">
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
        <Icon size={21} />
      </div>
      <h3 className="text-base font-bold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
    </div>
  );
}

export default function WhatIsPsychologyPage() {
  return (
    <main className="overflow-hidden bg-white text-slate-800">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />

      {/* Hero Section */}
      <section className="relative border-b border-blue-100 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:px-10 lg:py-24">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-2 text-xs font-bold text-blue-700 shadow-sm">
              <Brain size={15} />
              PSYCHOLOGY FUNDAMENTALS
            </div>

            <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              What Is Psychology?
              <span className="mt-2 block bg-gradient-to-r from-blue-700 to-indigo-600 bg-clip-text text-transparent">
                Understanding the Human Mind and Behaviour
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              Why do people think differently, experience emotions, develop
              habits and make decisions? Psychology helps answer these
              questions through the scientific study of the mind and human
              behaviour.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/psychology/branches-of-psychology"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-700 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-blue-700/20 transition hover:bg-blue-800"
              >
                Explore Psychology Branches
                <ArrowRight size={17} />
              </Link>

              <Link
                href="/psychology/cognitive-psychology"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-700 transition hover:border-blue-300 hover:text-blue-700"
              >
                Explore How We Think
              </Link>
            </div>

            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-xs font-medium text-slate-500">
              <span className="flex items-center gap-2">
                <CheckCircle2 size={15} className="text-blue-600" />
                Scientific approach
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={15} className="text-blue-600" />
                Real-life examples
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={15} className="text-blue-600" />
                Practical applications
              </span>
            </div>
          </div>

          {/* Psychology Concept Illustration */}
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute inset-8 rounded-full bg-blue-200/40 blur-3xl" />

            <div className="relative rounded-[2rem] border border-blue-100 bg-white p-6 shadow-2xl shadow-blue-900/10 sm:p-8">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
                  The Human Mind
                </span>
                <Sparkles size={19} className="text-blue-500" />
              </div>

              <div className="my-8 flex justify-center">
                <div className="relative flex h-48 w-48 items-center justify-center rounded-full bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100">
                  <div className="absolute inset-4 rounded-full border border-blue-200" />
                  <div className="absolute inset-8 rounded-full border border-indigo-200" />
                  <Brain className="relative text-blue-700" size={105} strokeWidth={1.3} />
                  <div className="absolute -right-2 top-8 rounded-xl bg-white p-3 shadow-lg">
                    <Lightbulb className="text-amber-500" size={23} />
                  </div>
                  <div className="absolute -bottom-2 left-0 rounded-xl bg-white p-3 shadow-lg">
                    <Heart className="text-rose-500" size={23} />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: "Thinking", icon: BrainCircuit },
                  { label: "Emotions", icon: Heart },
                  { label: "Behaviour", icon: Activity },
                  { label: "Learning", icon: BookOpen },
                ].map(({ label, icon: Icon }) => (
                  <div
                    key={label}
                    className="flex items-center gap-2 rounded-xl bg-slate-50 p-3"
                  >
                    <Icon size={17} className="text-blue-600" />
                    <span className="text-xs font-bold text-slate-700">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow="Introduction"
          title="What Does Psychology Mean?"
          description="Understand the meaning of psychology and what makes it a scientific field of study."
        />

        <div className="grid gap-8 lg:grid-cols-[1.5fr_0.8fr]">
          <div className="space-y-5 text-base leading-8 text-slate-600">
            <p>
              <strong className="text-slate-900">Psychology</strong> is the
              scientific study of the mind and behaviour. It explores how
              individuals think, feel, learn, remember, communicate and act
              in different situations.
            </p>

            <p>
              The mind includes mental processes such as perception, memory,
              reasoning, attention, imagination and decision-making. Behaviour
              refers to observable actions and responses, including speaking,
              learning, working, interacting and reacting to the environment.
            </p>

            <p>
              Psychology does not simply rely on personal opinions or
              assumptions about people. Psychologists use research,
              observation, experiments and evidence to understand patterns
              in human behaviour and mental processes.
            </p>

            <p>
              For example, when a student struggles to concentrate, psychology
              can help investigate possible influences such as sleep,
              motivation, distractions, stress, attention and learning
              strategies.
            </p>

            <p>
              Psychology also studies similarities and differences between
              individuals. It examines how biological factors, personal
              experiences, social environments and culture influence the way
              people develop and behave.
            </p>
          </div>

          <div className="rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-white text-blue-700 shadow-sm">
              <BookOpen size={24} />
            </div>

            <h3 className="text-lg font-bold text-slate-950">
              Psychology at a Glance
            </h3>

            <div className="mt-5 space-y-4">
              {[
                ["Field", "Scientific discipline"],
                ["Main focus", "Mind and behaviour"],
                ["Approach", "Evidence-based research"],
                ["Scope", "Individual and group behaviour"],
                ["Purpose", "Understand and explain behaviour"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="flex flex-col gap-1 border-b border-blue-100 pb-3 last:border-0 last:pb-0"
                >
                  <span className="text-xs font-medium text-slate-500">
                    {label}
                  </span>
                  <span className="text-sm font-bold text-slate-800">
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <AdSlot />

      {/* Etymology */}
      <section className="border-y border-slate-100 bg-slate-50/70">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="Origin and Meaning"
            title="Where Does the Word Psychology Come From?"
            description="The term psychology has its roots in ancient Greek language."
          />

          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-blue-100 bg-white p-7 shadow-sm">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
                Greek origin
              </span>
              <h3 className="mt-3 text-3xl font-bold text-slate-950">
                Psyche
              </h3>
              <p className="mt-2 leading-7 text-slate-600">
                Traditionally associated with the soul, mind or spirit.
              </p>
            </div>

            <div className="rounded-2xl border border-indigo-100 bg-white p-7 shadow-sm">
              <span className="text-xs font-bold uppercase tracking-widest text-indigo-600">
                Greek origin
              </span>
              <h3 className="mt-3 text-3xl font-bold text-slate-950">
                Logos
              </h3>
              <p className="mt-2 leading-7 text-slate-600">
                Associated with study, explanation or systematic knowledge.
              </p>
            </div>
          </div>

          <div className="mt-5 rounded-2xl bg-gradient-to-r from-blue-700 to-indigo-700 p-7 text-white">
            <p className="text-xs font-bold uppercase tracking-widest text-blue-100">
              Modern understanding
            </p>
            <p className="mt-3 text-xl font-bold sm:text-2xl">
              Psychology = Scientific Study of the Mind and Behaviour
            </p>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-blue-100">
              Although the historical roots of the word refer to the soul
              and mind, modern psychology is an empirical discipline that
              studies mental processes and behaviour using scientific methods.
            </p>
          </div>
        </div>
      </section>

      {/* Mind and Behaviour */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow="Core Concepts"
          title="The Two Main Areas Psychology Studies"
          description="Psychology examines both internal mental processes and observable actions."
        />

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-7">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">
              <BrainCircuit size={29} />
            </div>

            <h3 className="text-xl font-bold text-slate-950">
              1. The Mind and Mental Processes
            </h3>

            <p className="mt-3 leading-7 text-slate-600">
              Mental processes are internal activities that help people
              understand information, process experiences and make decisions.
              They cannot always be directly observed, so researchers study
              them through behaviour, experiments and other measurements.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-3">
              {[
                "Memory",
                "Thinking",
                "Attention",
                "Perception",
                "Reasoning",
                "Imagination",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-lg bg-white px-3 py-2 text-sm font-bold text-blue-800 shadow-sm"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-indigo-100 bg-gradient-to-br from-indigo-50 to-white p-7">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-700">
              <Activity size={29} />
            </div>

            <h3 className="text-xl font-bold text-slate-950">
              2. Human Behaviour
            </h3>

            <p className="mt-3 leading-7 text-slate-600">
              Behaviour includes actions and responses that individuals
              demonstrate in different environments. It can be influenced
              by thoughts, emotions, biological factors, learning and social
              experiences.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-3">
              {[
                "Communication",
                "Learning",
                "Social interaction",
                "Habits",
                "Reactions",
                "Decision-making",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-lg bg-white px-3 py-2 text-sm font-bold text-indigo-800 shadow-sm"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Examples */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="Practical Examples"
            title="How Does Psychology Explain Everyday Behaviour?"
            description="Everyday situations provide useful examples of psychological concepts in action."
          />

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            <InfoCard
              icon={BookOpen}
              title="Remembering Information"
              description="A student uses repetition and practice to remember information before an examination. This relates to memory and learning."
            />
            <InfoCard
              icon={Heart}
              title="Managing Emotions"
              description="A person recognizes frustration and takes a break before responding. This illustrates emotional awareness and regulation."
            />
            <InfoCard
              icon={Users}
              title="Group Influence"
              description="Someone changes an opinion because most members of a group support another view. This relates to conformity and social influence."
            />
            <InfoCard
              icon={Clock}
              title="Building Habits"
              description="A person develops a regular exercise routine through repeated actions and environmental cues. This relates to habit formation."
            />
            <InfoCard
              icon={Eye}
              title="Perception"
              description="Two people interpret the same situation differently because of their experiences and expectations."
            />
            <InfoCard
              icon={Target}
              title="Motivation"
              description="An individual studies to achieve a personal goal or to receive a reward. These can represent different forms of motivation."
            />
          </div>
        </div>
      </section>

      <AdSlot />

      {/* Major Branches */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow="Areas of Study"
          title="What Are the Major Branches of Psychology?"
          description="Psychology includes several specialized areas, each examining different aspects of the mind and behaviour."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {branches.map(({ title, description, href, icon: Icon }, index) => (
            <Link
              href={href}
              key={title}
              className="group rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700 transition group-hover:bg-blue-700 group-hover:text-white">
                  <Icon size={23} />
                </div>
                <span className="text-xs font-bold text-slate-300">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <h3 className="mt-5 text-lg font-bold text-slate-900">
                {title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                {description}
              </p>

              <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-blue-700">
                Explore Topic
                <ArrowRight
                  size={16}
                  className="transition group-hover:translate-x-1"
                />
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-7 rounded-2xl border border-blue-100 bg-blue-50/70 p-6">
          <p className="text-sm leading-7 text-slate-700">
            These branches are interconnected rather than completely
            separate. For example, educational psychology may use findings
            from cognitive psychology to understand memory, attention and
            learning.
          </p>
          
        </div>
      </section>

      {/* Scientific Nature */}
      <section className="border-y border-slate-100 bg-slate-50/70">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="Scientific Foundation"
            title="Why Is Psychology Considered a Science?"
            description="Psychology uses systematic research and evidence to investigate questions about the mind and behaviour."
          />

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="space-y-5 text-base leading-8 text-slate-600">
              <p>
                Psychology is considered a science because it applies
                systematic methods to study questions, develop explanations
                and evaluate evidence.
              </p>

              <p>
                Psychologists formulate research questions, identify variables,
                collect data, analyze results and assess whether their findings
                support an explanation.
              </p>

              <p>
                Scientific research also requires careful consideration of
                bias, measurement accuracy, ethical standards and the
                limitations of a study.
              </p>

              <p>
                Unlike casual assumptions about human behaviour, psychological
                explanations should be evaluated using evidence that can be
                examined and tested.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                  <FlaskConical size={23} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">
                    Psychological Research Process
                  </h3>
                  <p className="text-xs text-slate-500">
                    A simplified research workflow
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                {[
                  ["01", "Identify a research question"],
                  ["02", "Develop a hypothesis"],
                  ["03", "Choose a research method"],
                  ["04", "Collect relevant data"],
                  ["05", "Analyze the findings"],
                  ["06", "Draw conclusions"],
                ].map(([number, label], index) => (
                  <div key={number}>
                    <div className="flex items-center gap-3 rounded-xl bg-blue-50/70 p-3">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-700 text-xs font-bold text-white">
                        {number}
                      </span>
                      <span className="text-sm font-bold text-slate-800">
                        {label}
                      </span>
                    </div>
                    {index !== 5 && (
                      <div className="ml-7 h-3 w-px bg-blue-200" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <h3 className="mb-5 mt-12 text-xl font-bold text-slate-950">
            Common Research Methods in Psychology
          </h3>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {researchMethods.map((method) => (
              <div
                key={method.title}
                className="rounded-xl border border-slate-200 bg-white p-5"
              >
                <h4 className="font-bold text-slate-900">
                  {method.title}
                </h4>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {method.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-5">
            <p className="text-sm leading-7 text-amber-900">
              <strong>Important distinction:</strong> Correlation does not
              establish causation. If two variables are related, it does not
              automatically mean that one variable causes the other.
            </p>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow="Real-World Importance"
          title="Where Is Psychology Used in Everyday Life?"
          description="Psychological knowledge has practical applications across education, healthcare, workplaces and personal relationships."
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {applications.map(({ title, description, icon: Icon }) => (
            <InfoCard
              key={title}
              icon={Icon}
              title={title}
              description={description}
            />
          ))}
        </div>
      </section>

      <AdSlot />

      {/* Psychology vs Psychiatry */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="Understanding the Difference"
            title="Psychology vs Psychiatry"
            description="Both fields contribute to understanding and addressing mental health, but their training and professional roles differ."
          />

          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full min-w-[620px] border-collapse text-left">
              <thead>
                <tr className="bg-blue-700 text-white">
                  <th className="px-5 py-4 text-sm font-bold">Basis</th>
                  <th className="px-5 py-4 text-sm font-bold">Psychology</th>
                  <th className="px-5 py-4 text-sm font-bold">Psychiatry</th>
                </tr>
              </thead>
              <tbody className="text-sm text-slate-600">
                {[
                  ["Field", "Scientific discipline", "Medical specialty"],
                  [
                    "Main focus",
                    "Mind and behaviour",
                    "Mental health conditions and their treatment",
                  ],
                  [
                    "Professional",
                    "Psychologist",
                    "Psychiatrist",
                  ],
                  [
                    "Education",
                    "Psychology qualifications",
                    "Medical degree and psychiatric specialization",
                  ],
                  [
                    "Treatment",
                    "Psychological assessment and therapies, depending on qualifications",
                    "Medical treatment and other psychiatric interventions",
                  ],
                  [
                    "Medication",
                    "Generally not prescribed by psychologists in India",
                    "Can prescribe medication",
                  ],
                ].map(([basis, psychology, psychiatry]) => (
                  <tr
                    key={basis}
                    className="border-t border-slate-100 even:bg-slate-50/70"
                  >
                    <td className="px-5 py-4 font-bold text-slate-900">
                      {basis}
                    </td>
                    <td className="px-5 py-4">{psychology}</td>
                    <td className="px-5 py-4">{psychiatry}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-5 text-sm leading-7 text-slate-600">
            Note: Professional scope and prescribing authority depend on
            applicable laws and qualifications. In India, psychiatrists
            are medical doctors, while clinical psychologists follow
            specialized professional training and registration requirements.
          </p>
        </div>
      </section>

      {/* Goals */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow="Purpose of Psychology"
          title="What Are the Main Goals of Psychology?"
          description="Psychology traditionally identifies four broad goals for understanding and working with behaviour."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              number: "01",
              title: "Describe",
              description:
                "Observe and accurately describe what people do and how they think or feel.",
              color: "bg-blue-50 text-blue-700",
            },
            {
              number: "02",
              title: "Explain",
              description:
                "Understand why particular behaviours and mental processes occur.",
              color: "bg-indigo-50 text-indigo-700",
            },
            {
              number: "03",
              title: "Predict",
              description:
                "Identify patterns that may help anticipate behaviour in certain situations.",
              color: "bg-violet-50 text-violet-700",
            },
            {
              number: "04",
              title: "Influence",
              description:
                "Apply psychological knowledge to encourage beneficial changes in behaviour.",
              color: "bg-sky-50 text-sky-700",
            },
          ].map((goal) => (
            <div
              key={goal.number}
              className="rounded-2xl border border-slate-200 bg-white p-6"
            >
              <span
                className={`inline-flex rounded-lg px-3 py-2 text-xs font-bold ${goal.color}`}
              >
                {goal.number}
              </span>
              <h3 className="mt-5 text-xl font-bold text-slate-950">
                {goal.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                {goal.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Factors Influencing Behaviour */}
      <section className="border-y border-slate-100 bg-slate-50/70">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="Human Behaviour"
            title="What Influences Human Behaviour?"
            description="Human behaviour usually develops through the interaction of several biological, psychological and environmental influences."
          />

          <div className="grid gap-5 md:grid-cols-3">
            <InfoCard
              icon={Brain}
              title="Biological Factors"
              description="Genetics, brain activity, hormones, nervous system functioning and physical health can influence behaviour."
            />
            <InfoCard
              icon={Fingerprint}
              title="Individual Factors"
              description="Personality, beliefs, memories, emotions, experiences and personal goals contribute to individual differences."
            />
            <InfoCard
              icon={Network}
              title="Environmental Factors"
              description="Family, education, culture, society, relationships and surroundings influence how people behave."
            />
          </div>

          <div className="mt-7 rounded-2xl border border-blue-100 bg-white p-6">
            <h3 className="text-lg font-bold text-slate-950">
              Example: Why Do Two Students Perform Differently?
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Two students may receive the same lesson but achieve different
              results. Their performance may be influenced by prior
              knowledge, sleep, attention, motivation, study habits,
              emotional state and learning environment. Psychology examines
              how these factors interact rather than assuming that one
              explanation fits everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Common Misconceptions */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow="Clear Understanding"
          title="Common Misconceptions About Psychology"
          description="Psychology is often misunderstood because everyday opinions about people are confused with scientific psychological knowledge."
        />

        <div className="space-y-4">
          {[
            [
              "Psychology is only about mental illness.",
              "Psychology also studies memory, learning, personality, emotions, relationships, motivation, development and decision-making.",
            ],
            [
              "Psychologists can read people's minds.",
              "Psychologists study thoughts and mental processes through research, behaviour, assessments and reported experiences. They cannot directly read minds.",
            ],
            [
              "Psychology is just common sense.",
              "Scientific psychology tests assumptions using systematic research. Findings can challenge beliefs that seem obvious.",
            ],
            [
              "Everyone behaves in exactly the same way.",
              "Behaviour varies across individuals and situations because of differences in biological, psychological and environmental factors.",
            ],
            [
              "Every psychological finding applies to everyone.",
              "Research findings have limitations. Results depend on the participants, methods, context and strength of the evidence.",
            ],
          ].map(([myth, fact], index) => (
            <div
              key={myth}
              className="grid gap-4 rounded-2xl border border-slate-200 bg-white p-5 md:grid-cols-[0.8fr_1.2fr] md:p-6"
            >
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-rose-600">
                  Misconception {index + 1}
                </span>
                <p className="mt-2 font-bold text-slate-900">{myth}</p>
              </div>
              <div className="border-t border-slate-100 pt-4 md:border-l md:border-t-0 md:pl-5 md:pt-0">
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">
                  Scientific understanding
                </span>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  {fact}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="mx-auto max-w-4xl px-5 py-16 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="Frequently Asked Questions"
            title="Psychology FAQs"
            description="Answers to common questions about the meaning, scope and importance of psychology."
          />

          <div className="space-y-4">
            {[
              {
                q: "What is psychology in simple words?",
                a: "Psychology is the scientific study of the mind and behaviour. It explains how people think, feel, learn, remember, make decisions and interact with others.",
              },
              {
                q: "Is psychology a science?",
                a: "Yes. Psychology is a scientific discipline that uses observation, experiments, surveys, statistical analysis and other systematic research methods to study mental processes and behaviour.",
              },
              {
                q: "What are the main branches of psychology?",
                a: "Major branches include cognitive, developmental, social, clinical, educational, biological, personality, industrial-organizational and health psychology.",
              },
              {
                q: "Who is known as the father of modern psychology?",
                a: "Wilhelm Wundt is widely regarded as the father of experimental psychology. He established a psychology laboratory at the University of Leipzig in 1879, an important milestone in psychology's development as an experimental discipline.",
              },
              {
                q: "What is the difference between psychology and psychiatry?",
                a: "Psychology is the scientific discipline concerned with the mind and behaviour. Psychiatry is a medical specialty focused on mental health conditions, diagnosis and treatment. Psychiatrists are medical doctors.",
              },
              {
                q: "Why is psychology important in everyday life?",
                a: "Psychology helps people understand emotions, improve communication, develop learning strategies, recognize thinking biases, build habits and understand social behaviour.",
              },
              {
                q: "Can psychology help improve memory?",
                a: "Yes. Psychological research on memory and learning helps explain techniques such as retrieval practice, spaced repetition and meaningful organization of information.",
              },
              {
                q: "What is the scope of psychology?",
                a: "Psychology covers mental processes, behaviour, personality, learning, development, emotions, social interactions, mental health and applications in education, healthcare, sports and business.",
              },
            ].map((faq) => (
              <details
                key={faq.q}
                className="group rounded-xl border border-blue-100 bg-white p-5 open:border-blue-200 open:shadow-sm"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-slate-900">
                  <span>{faq.q}</span>
                  <ChevronDown
                    size={19}
                    className="shrink-0 text-blue-600 transition-transform group-open:rotate-180"
                  />
                </summary>
                <p className="mt-4 border-t border-slate-100 pt-4 text-sm leading-7 text-slate-600">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      
      {/* Related Topics */}
     
    </main>
  );
}
