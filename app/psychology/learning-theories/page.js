
import Link from "next/link";
import {
  Brain,
  BrainCircuit,
  Lightbulb,
  BookOpen,
  GraduationCap,
  Eye,
  Repeat,
  Target,
  Award,
  Bell,
  Dog,
  Puzzle,
  Users,Activity ,Database,
  MessageCircle,
  CheckCircle2,
  ArrowRight,
  ArrowDown,
  AlertCircle,
  Sparkles,
  Network,
  Clock,
  Heart,
  Footprints,
  Lightbulb as Idea,
  Microscope,
  RefreshCw,
  Layers,
  Search,
  Zap,
  ClipboardList,
  Trophy,
} from "lucide-react";
import AdSlot from "../../../components/AdSlot";

export const metadata = {
  title:
    "Learning Theories in Psychology | Classical, Operant & Social Learning | PriceTag HUB",
  description:
    "Understand major learning theories in psychology, including Pavlov's classical conditioning, Skinner's operant conditioning, Bandura's social learning, cognitive learning, insight learning and constructivism with relatable examples.",
};

const SectionHeading = ({ eyebrow, title, description, dark = false }) => (
  <div className="mb-8">
    {eyebrow && (
      <p
        className={`mb-2 text-xs font-bold uppercase tracking-wider ${
          dark ? "text-blue-300" : "text-blue-600"
        }`}
      >
        {eyebrow}
      </p>
    )}
    <h2
      className={`text-2xl font-bold tracking-tight sm:text-3xl ${
        dark ? "text-white" : "text-slate-900"
      }`}
    >
      {title}
    </h2>
    {description && (
      <p
        className={`mt-3 max-w-3xl text-sm leading-7 sm:text-base ${
          dark ? "text-slate-300" : "text-slate-600"
        }`}
      >
        {description}
      </p>
    )}
  </div>
);

const InfoCard = ({ icon: Icon, title, children, color = "blue" }) => {
  const colors = {
    blue: "bg-blue-50 text-blue-700 border-blue-100",
    purple: "bg-purple-50 text-purple-700 border-purple-100",
    green: "bg-emerald-50 text-emerald-700 border-emerald-100",
    orange: "bg-orange-50 text-orange-700 border-orange-100",
    indigo: "bg-indigo-50 text-indigo-700 border-indigo-100",
    pink: "bg-pink-50 text-pink-700 border-pink-100",
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div
        className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl border ${colors[color]}`}
      >
        <Icon size={21} />
      </div>
      <h3 className="text-lg font-bold text-slate-900">{title}</h3>
      <div className="mt-2 text-sm leading-7 text-slate-600">
        {children}
      </div>
    </div>
  );
};

const ExampleBox = ({ children, title = "Everyday example" }) => (
  <div className="mt-4 rounded-xl border border-blue-100 bg-blue-50/70 p-4">
    <p className="mb-1 flex items-center gap-2 text-sm font-bold text-blue-800">
      <Lightbulb size={16} />
      {title}
    </p>
    <p className="text-sm leading-7 text-slate-700">{children}</p>
  </div>
);

const TheoryCard = ({
  number,
  title,
  psychologist,
  principle,
  example,
  icon: Icon,
  color = "blue",
}) => {
  const colors = {
    blue: "bg-blue-100 text-blue-700",
    purple: "bg-purple-100 text-purple-700",
    green: "bg-emerald-100 text-emerald-700",
    orange: "bg-orange-100 text-orange-700",
    indigo: "bg-indigo-100 text-indigo-700",
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start gap-4">
        <div
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${colors[color]}`}
        >
          <Icon size={23} />
        </div>
        <div className="min-w-0">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Theory {number}
          </p>
          <h3 className="text-lg font-bold text-slate-900">{title}</h3>
          <p className="mt-1 text-sm font-semibold text-blue-700">
            {psychologist}
          </p>
        </div>
      </div>

      <p className="mt-4 text-sm leading-7 text-slate-600">
        {principle}
      </p>

      <ExampleBox>{example}</ExampleBox>
    </div>
  );
};

const FAQ = ({ question, children }) => (
  <div className="border-b border-slate-200 py-5 last:border-0">
    <h3 className="font-bold text-slate-900">{question}</h3>
    <p className="mt-2 text-sm leading-7 text-slate-600">{children}</p>
  </div>
);

export default function LearningTheoriesPage() {
  return (
    <main className="min-h-screen bg-white text-slate-800">
      <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8 sm:py-12">
        <div className="mx-auto max-w-5xl">

          {/* HERO */}
          <section className="relative overflow-hidden rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-6 sm:p-10">
            <div className="relative z-10 max-w-3xl">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-3 py-1.5 text-xs font-bold text-blue-700">
                <Brain size={15} />
                Psychology / Learning & Cognition
              </div>

              <h1 className="text-3xl font-bold leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
                Learning Theories in Psychology
              </h1>

              <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
                Why does a child repeat something after receiving praise?
                Why do we become afraid of certain sounds after a bad
                experience? And how can someone learn a new skill simply
                by watching another person?
              </p>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Learning theories explain how people acquire knowledge,
                develop skills, form habits and change their behaviour
                through experience, observation, thinking and interaction
                with their environment.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "Classical Conditioning",
                  "Operant Conditioning",
                  "Social Learning",
                  "Cognitive Learning",
                  "Constructivism",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-lg border border-blue-100 bg-white px-3 py-2 text-xs font-semibold text-slate-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="pointer-events-none absolute -right-10 -top-10 hidden h-64 w-64 items-center justify-center rounded-full bg-blue-100/50 sm:flex">
              <div className="flex h-40 w-40 items-center justify-center rounded-full bg-blue-200/60">
                <BrainCircuit
                  size={95}
                  className="text-blue-600"
                  strokeWidth={1.2}
                />
              </div>
            </div>
          </section>

          {/* INTRODUCTION */}
          <section className="mt-12">
            <SectionHeading
              eyebrow="Understanding learning"
              title="What Is Learning in Psychology?"
              description="Learning is a process through which experience and practice produce relatively lasting changes in knowledge, skills, behaviour or the ability to respond."
            />

            <p className="text-sm leading-8 text-slate-600">
              Learning is not limited to classrooms, textbooks or formal
              education. It happens whenever we acquire something new
              through experience. A child learns to speak by interacting
              with others, a student learns mathematics through practice,
              and an employee learns to operate new software through
              instruction and experimentation.
            </p>

            <p className="mt-4 text-sm leading-8 text-slate-600">
              Psychologists have developed different theories to explain
              these processes. Some focus on observable behaviour, while
              others emphasize mental activities, observation, social
              interaction and the construction of knowledge.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <InfoCard icon={Brain} title="Knowledge" color="blue">
                Acquiring facts, concepts and information that help us
                understand the world.
              </InfoCard>

              <InfoCard icon={Footprints} title="Skills" color="green">
                Developing abilities through instruction, practice and
                experience.
              </InfoCard>

              <InfoCard icon={RefreshCw} title="Behaviour" color="purple">
                Changing or developing responses and habits through
                learning experiences.
              </InfoCard>
            </div>

            <ExampleBox title="A simple example">
              Imagine someone learning to drive. Initially, they may
              struggle with steering, braking and observing traffic.
              Through instruction, practice and feedback, these actions
              gradually become more familiar and coordinated.
            </ExampleBox>
          </section>
<AdSlot />
          {/* MAIN APPROACHES */}
          <section className="mt-14">
            <SectionHeading
              eyebrow="Big picture"
              title="Major Perspectives on Learning"
              description="Learning theories can be understood through several broad perspectives. Each emphasizes a different explanation of how learning happens."
            />

            <div className="grid gap-4 sm:grid-cols-2">
              <InfoCard icon={Activity} title="Behaviourism" color="blue">
                Learning is understood through observable behaviour and
                how environmental stimuli and consequences influence
                responses.
              </InfoCard>

              <InfoCard icon={BrainCircuit} title="Cognitivism" color="purple">
                Learning involves internal mental processes such as
                attention, memory, understanding, reasoning and
                problem-solving.
              </InfoCard>

              <InfoCard icon={Eye} title="Social Learning" color="green">
                People can learn by observing others, remembering their
                actions and considering the consequences.
              </InfoCard>

              <InfoCard icon={Puzzle} title="Constructivism" color="orange">
                Learners actively build knowledge by connecting new
                information with previous understanding and experiences.
              </InfoCard>
            </div>
          </section>

          {/* OVERVIEW DIAGRAM */}
          <section className="mt-14">
            <SectionHeading
              eyebrow="Visual learning guide"
              title="How Do Different Learning Theories Explain Learning?"
              description="Consider a student learning to solve a difficult mathematics problem. Different theories explain the same learning experience in different ways."
            />

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-7">
              <div className="mx-auto max-w-sm rounded-xl border border-blue-200 bg-white p-4 text-center shadow-sm">
                <GraduationCap className="mx-auto text-blue-600" size={29} />
                <h3 className="mt-2 font-bold text-slate-900">
                  Student Learns Mathematics
                </h3>
                <p className="mt-1 text-xs text-slate-500">
                  One learning situation
                </p>
              </div>

              <div className="my-4 flex justify-center">
                <ArrowDown className="text-slate-400" size={23} />
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  {
                    title: "Behaviourism",
                    description: "Practises problems and receives feedback or rewards.",
                    color: "border-blue-200 bg-blue-50",
                  },
                  {
                    title: "Cognitivism",
                    description: "Understands formulas and mentally processes information.",
                    color: "border-purple-200 bg-purple-50",
                  },
                  {
                    title: "Social Learning",
                    description: "Watches a teacher demonstrate how to solve a problem.",
                    color: "border-emerald-200 bg-emerald-50",
                  },
                  {
                    title: "Constructivism",
                    description: "Connects the new problem to previous knowledge and discoveries.",
                    color: "border-orange-200 bg-orange-50",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className={`rounded-xl border p-4 ${item.color}`}
                  >
                    <h3 className="font-bold text-slate-900">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <p className="mt-3 text-xs leading-6 text-slate-500">
              These perspectives are complementary explanations, not
              mutually exclusive descriptions of every learning event.
            </p>
          </section>

          
           
          {/* OPERANT CONDITIONING */}
          <section className="mt-14">
            <SectionHeading
              eyebrow="Theory 01 / Behaviourism"
              title="Operant Conditioning Theory"
              description="Operant conditioning explains how the consequences of voluntary behaviour influence the likelihood that the behaviour will happen again."
            />

            <div className="rounded-2xl border border-purple-200 bg-purple-50/50 p-5 sm:p-7">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 text-purple-700">
                  <BrainCircuit size={26} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    B. F. Skinner
                  </h3>
                  <p className="text-sm text-purple-700">
                    Psychologist associated with operant conditioning
                  </p>
                </div>
              </div>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                Skinner studied how consequences shape behaviour. He
                demonstrated that behaviour can become more or less
                frequent depending on what happens after an action.
              </p>

              <ExampleBox title="A familiar example">
                A student studies regularly and receives praise and
                recognition for good performance. The positive
                consequence may increase the likelihood of studying
                regularly again.
              </ExampleBox>
            </div>

            <div className="mt-8">
              <SectionHeading
                eyebrow="Core concept"
                title="Reinforcement and Punishment"
                description="The two important dimensions are whether a consequence increases or decreases behaviour, and whether something is added or removed."
              />

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-emerald-200 bg-emerald-50/60 p-5">
                  <h3 className="text-lg font-bold text-emerald-800">
                    Reinforcement
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    Reinforcement increases the likelihood of a behaviour
                    occurring again.
                  </p>

                  <div className="mt-4 rounded-xl border border-emerald-100 bg-white p-4">
                    <h4 className="font-bold text-slate-900">
                      Positive Reinforcement
                    </h4>
                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      Adding a desirable consequence to increase a
                      behaviour.
                    </p>
                    <ExampleBox>
                      A child receives a reward for completing homework.
                    </ExampleBox>
                  </div>

                  <div className="mt-4 rounded-xl border border-emerald-100 bg-white p-4">
                    <h4 className="font-bold text-slate-900">
                      Negative Reinforcement
                    </h4>
                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      Removing an unpleasant condition to increase a
                      behaviour.
                    </p>
                    <ExampleBox>
                      A driver fastens a seat belt to stop the car's
                      warning beep. This can strengthen the habit of
                      fastening the seat belt.
                    </ExampleBox>
                  </div>
                </div>

                <div className="rounded-2xl border border-red-200 bg-red-50/60 p-5">
                  <h3 className="text-lg font-bold text-red-800">
                    Punishment
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    Punishment decreases the likelihood of a behaviour
                    occurring again.
                  </p>

                  <div className="mt-4 rounded-xl border border-red-100 bg-white p-4">
                    <h4 className="font-bold text-slate-900">
                      Positive Punishment
                    </h4>
                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      Adding an unpleasant consequence to reduce a
                      behaviour.
                    </p>
                    <ExampleBox>
                      A student receives an additional disciplinary
                      assignment after repeatedly breaking a classroom
                      rule.
                    </ExampleBox>
                  </div>

                  <div className="mt-4 rounded-xl border border-red-100 bg-white p-4">
                    <h4 className="font-bold text-slate-900">
                      Negative Punishment
                    </h4>
                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      Removing a desirable privilege or stimulus to
                      reduce a behaviour.
                    </p>
                    <ExampleBox>
                      A teenager temporarily loses gaming privileges
                      after repeatedly breaking an agreed household rule.
                    </ExampleBox>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-7 rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <h3 className="font-bold text-slate-900">
                Remember the Difference
              </h3>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl bg-white p-4">
                  <p className="text-sm font-bold text-emerald-700">
                    Reinforcement = Behaviour increases
                  </p>
                  <p className="mt-2 text-sm text-slate-600">
                    Positive = Something added
                  </p>
                  <p className="text-sm text-slate-600">
                    Negative = Something removed
                  </p>
                </div>
                <div className="rounded-xl bg-white p-4">
                  <p className="text-sm font-bold text-red-700">
                    Punishment = Behaviour decreases
                  </p>
                  <p className="mt-2 text-sm text-slate-600">
                    Positive = Something added
                  </p>
                  <p className="text-sm text-slate-600">
                    Negative = Something removed
                  </p>
                </div>
              </div>
              <div className="mt-4 flex items-start gap-2 text-sm leading-7 text-slate-600">
                <AlertCircle className="mt-1 shrink-0 text-amber-600" size={18} />
                <p>
                  Important: In psychology, positive does not automatically
                  mean good, and negative does not mean bad. These words
                  describe adding or removing a consequence.
                </p>
              </div>
            </div>
          </section>
<AdSlot />
          {/* SOCIAL LEARNING */}
          <section className="mt-14">
            <SectionHeading
              eyebrow="Theory 02 / Social and Cognitive Psychology"
              title="Social Learning Theory"
              description="Social learning theory explains that people can acquire new behaviours and knowledge by observing other people, even without directly experiencing the consequences themselves."
            />

            <div className="rounded-2xl border border-emerald-200 bg-emerald-50/50 p-5 sm:p-7">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                  <Eye size={26} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    Albert Bandura
                  </h3>
                  <p className="text-sm text-emerald-700">
                    Psychologist associated with Social Learning Theory
                  </p>
                </div>
              </div>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                Bandura demonstrated that learning does not always require
                direct rewards or punishments. People can learn by watching
                the actions of others and observing what happens to them.
              </p>

              <div className="mt-5 rounded-xl border border-emerald-100 bg-white p-4">
                <h4 className="font-bold text-slate-900">
                  The Bobo Doll Experiment
                </h4>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  In a famous series of experiments, children observed
                  adults behaving aggressively or non-aggressively toward
                  an inflatable Bobo doll. Children who observed aggressive
                  models were more likely to imitate some of those
                  behaviours.
                </p>
                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  <div className="rounded-xl bg-slate-50 p-3 text-center">
                    <Users className="mx-auto text-blue-600" size={24} />
                    <p className="mt-2 text-sm font-bold text-slate-900">
                      Observe
                    </p>
                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      Child watches an adult.
                    </p>
                  </div>
                  <div className="rounded-xl bg-slate-50 p-3 text-center">
                    <Brain className="mx-auto text-purple-600" size={24} />
                    <p className="mt-2 text-sm font-bold text-slate-900">
                      Remember
                    </p>
                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      Child retains the behaviour.
                    </p>
                  </div>
                  <div className="rounded-xl bg-slate-50 p-3 text-center">
                    <Repeat className="mx-auto text-emerald-600" size={24} />
                    <p className="mt-2 text-sm font-bold text-slate-900">
                      Imitate
                    </p>
                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      Child may reproduce it.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-7">
              <h3 className="mb-4 text-lg font-bold text-slate-900">
                Four Processes of Observational Learning
              </h3>

              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  {
                    title: "1. Attention",
                    icon: Eye,
                    color: "blue",
                    text: "The learner must pay attention to the person and their behaviour.",
                    example: "A student carefully watches a teacher demonstrate a science experiment.",
                  },
                  {
                    title: "2. Retention",
                    icon: Brain,
                    color: "purple",
                    text: "The learner must remember what was observed.",
                    example: "The student remembers the steps of the experiment.",
                  },
                  {
                    title: "3. Reproduction",
                    icon: Repeat,
                    color: "green",
                    text: "The learner must be able to reproduce the observed action.",
                    example: "The student attempts the same experiment.",
                  },
                  {
                    title: "4. Motivation",
                    icon: Target,
                    color: "orange",
                    text: "The learner needs a reason or motivation to perform the behaviour.",
                    example: "The student practises because they want to develop the skill.",
                  },
                ].map((item) => (
                  <InfoCard
                    key={item.title}
                    icon={item.icon}
                    title={item.title}
                    color={item.color}
                  >
                    {item.text}
                    <ExampleBox>{item.example}</ExampleBox>
                  </InfoCard>
                ))}
              </div>
            </div>

            <ExampleBox title="Relatable example">
              A child watches their parents speak politely to shopkeepers.
              Over time, the child may begin using similar language and
              manners when interacting with other people.
            </ExampleBox>

            <div className="mt-6 rounded-2xl border border-indigo-200 bg-indigo-50 p-5">
              <h3 className="font-bold text-slate-900">
                Vicarious Reinforcement
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                This occurs when a person becomes more likely to imitate
                a behaviour after observing someone else being rewarded
                for it.
              </p>
              <ExampleBox>
                An employee sees a colleague receive recognition for
                helping customers. The employee may become more interested
                in helping customers as well.
              </ExampleBox>
            </div>
          </section>

          {/* COGNITIVE LEARNING */}
          <section className="mt-14">
            <SectionHeading
              eyebrow="Theory 03 / Cognitive Psychology"
              title="Cognitive Learning Theory"
              description="Cognitive approaches explain learning through internal mental activities such as attention, understanding, memory, reasoning and problem-solving."
            />

            <div className="rounded-2xl border border-purple-200 bg-purple-50/50 p-5 sm:p-7">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 text-purple-700">
                  <BrainCircuit size={26} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    Cognitive Perspective
                  </h3>
                  <p className="text-sm text-purple-700">
                    Learning through mental processing
                  </p>
                </div>
              </div>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                Cognitive learning approaches view learners as active
                thinkers rather than simply people who react to external
                rewards and punishments. They emphasize how people
                understand, organize and remember information.
              </p>

              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                <div className="rounded-xl border border-purple-100 bg-white p-4 text-center">
                  <Search className="mx-auto text-purple-600" size={24} />
                  <h4 className="mt-2 font-bold text-slate-900">Understand</h4>
                  <p className="mt-1 text-xs leading-6 text-slate-500">
                    Process new information.
                  </p>
                </div>
                <div className="rounded-xl border border-purple-100 bg-white p-4 text-center">
                  <Database className="mx-auto text-purple-600" size={24} />
                  <h4 className="mt-2 font-bold text-slate-900">Organize</h4>
                  <p className="mt-1 text-xs leading-6 text-slate-500">
                    Connect it with existing knowledge.
                  </p>
                </div>
                <div className="rounded-xl border border-purple-100 bg-white p-4 text-center">
                  <Lightbulb className="mx-auto text-purple-600" size={24} />
                  <h4 className="mt-2 font-bold text-slate-900">Apply</h4>
                  <p className="mt-1 text-xs leading-6 text-slate-500">
                    Use knowledge to solve problems.
                  </p>
                </div>
              </div>
            </div>

            <ExampleBox title="Relatable example">
              Two students attend the same mathematics class. One
              memorizes a formula without understanding it. The other
              understands why the formula works and how to apply it.
              The second student may be better prepared to solve unfamiliar
              problems because learning involved meaningful mental
              processing.
            </ExampleBox>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <InfoCard icon={BookOpen} title="Meaningful Learning" color="blue">
                New information is connected with existing knowledge,
                making it easier to understand and apply.
                <ExampleBox>
                  Understanding percentages by connecting them with
                  shopping discounts.
                </ExampleBox>
              </InfoCard>

              <InfoCard icon={Network} title="Cognitive Maps" color="purple">
                Edward Tolman studied how organisms develop internal
                representations of their surroundings.
                <ExampleBox>
                  A person develops a mental map of a neighbourhood
                  and can find a route without following someone else's
                  directions every time.
                </ExampleBox>
              </InfoCard>
            </div>

            <div className="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-5">
              <h3 className="font-bold text-slate-900">
                Latent Learning – Edward Tolman
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Latent learning refers to learning that occurs without
                immediate obvious reinforcement or performance. The
                knowledge may become visible when there is a reason
                or opportunity to use it.
              </p>
              <ExampleBox>
                Someone regularly travels with a friend and becomes
                familiar with the route. Later, when asked to travel
                independently, they may successfully navigate the same
                route even though they were not deliberately practising it.
              </ExampleBox>
            </div>
          </section>
<AdSlot />
          {/* INSIGHT LEARNING */}
          <section className="mt-14">
            <SectionHeading
              eyebrow="Theory 04 / Gestalt Psychology"
              title="Insight Learning Theory"
              description="Insight learning explains how a solution can emerge through understanding the relationships between different parts of a problem, rather than only through repeated trial and error."
            />

            <div className="rounded-2xl border border-orange-200 bg-orange-50/50 p-5 sm:p-7">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-orange-700">
                  <Lightbulb size={26} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    Wolfgang Köhler
                  </h3>
                  <p className="text-sm text-orange-700">
                    Psychologist associated with insight learning
                  </p>
                </div>
              </div>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                Köhler studied problem-solving in chimpanzees. In one
                well-known experiment, a chimpanzee named Sultan used
                objects such as sticks to reach food that was otherwise
                out of reach. Köhler interpreted such behaviour as
                evidence of insight.
              </p>

              <div className="mt-5 rounded-xl border border-orange-100 bg-white p-4">
                <h4 className="font-bold text-slate-900">
                  Understanding the process
                </h4>

                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  <div className="rounded-xl bg-slate-50 p-4 text-center">
                    <Puzzle className="mx-auto text-orange-600" size={25} />
                    <h4 className="mt-2 font-bold text-slate-900">
                      Problem
                    </h4>
                    <p className="mt-1 text-xs leading-6 text-slate-500">
                      Food is out of reach.
                    </p>
                  </div>
                  <div className="rounded-xl bg-slate-50 p-4 text-center">
                    <Brain className="mx-auto text-purple-600" size={25} />
                    <h4 className="mt-2 font-bold text-slate-900">
                      Insight
                    </h4>
                    <p className="mt-1 text-xs leading-6 text-slate-500">
                      Recognizes how objects can be used together.
                    </p>
                  </div>
                  <div className="rounded-xl bg-slate-50 p-4 text-center">
                    <CheckCircle2 className="mx-auto text-emerald-600" size={25} />
                    <h4 className="mt-2 font-bold text-slate-900">
                      Solution
                    </h4>
                    <p className="mt-1 text-xs leading-6 text-slate-500">
                      Uses a stick to reach the food.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <ExampleBox title="Relatable example">
              You spend several minutes trying to understand a difficult
              mathematics problem. After looking at the relationship
              between the numbers, suddenly you realize the correct
              method. That sudden understanding is an example of
              insight learning.
            </ExampleBox>

            <div className="mt-5 rounded-xl border border-slate-200 bg-white p-5">
              <h3 className="font-bold text-slate-900">
                Key Characteristic
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Insight learning emphasizes understanding the structure
                of a problem and recognizing relationships. It is different
                from simply repeating actions until one produces a reward.
              </p>
            </div>
          </section>

          {/* CONSTRUCTIVISM */}
          <section className="mt-14">
            <SectionHeading
              eyebrow="Theory 05 / Constructivism"
              title="Constructivist Learning Theory"
              description="Constructivism proposes that learners actively build knowledge by connecting new experiences and information with what they already know."
            />

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-blue-200 bg-blue-50/50 p-5">
                <div className="flex items-center gap-3">
                  <Brain className="text-blue-700" size={26} />
                  <div>
                    <h3 className="font-bold text-slate-900">
                      Jean Piaget
                    </h3>
                    <p className="text-xs font-semibold text-blue-700">
                      Cognitive Constructivism
                    </p>
                  </div>
                </div>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Piaget emphasized how children actively construct
                  knowledge through interaction with their environment
                  and changes in their thinking.
                </p>

                <ExampleBox>
                  A child initially believes that all large objects are
                  heavy. After handling large but lightweight objects,
                  the child adjusts their understanding.
                </ExampleBox>
              </div>

              <div className="rounded-2xl border border-purple-200 bg-purple-50/50 p-5">
                <div className="flex items-center gap-3">
                  <Users className="text-purple-700" size={26} />
                  <div>
                    <h3 className="font-bold text-slate-900">
                      Lev Vygotsky
                    </h3>
                    <p className="text-xs font-semibold text-purple-700">
                      Social Constructivism
                    </p>
                  </div>
                </div>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Vygotsky emphasized the importance of social interaction,
                  language, culture and guidance from more knowledgeable
                  people in learning.
                </p>

                <ExampleBox>
                  A student cannot solve a difficult problem alone, but
                  understands it with guidance from a teacher. Gradually,
                  the student becomes able to solve similar problems
                  independently.
                </ExampleBox>
              </div>
            </div>

            <div className="mt-7">
              <h3 className="mb-4 text-lg font-bold text-slate-900">
                Important Concepts in Constructivism
              </h3>

              <div className="grid gap-4 sm:grid-cols-2">
                <InfoCard icon={Layers} title="Assimilation" color="blue">
                  Incorporating new information into an existing mental
                  framework without fundamentally changing that framework.
                  <ExampleBox>
                    A child who knows about dogs sees another breed and
                    identifies it as a dog using existing knowledge.
                  </ExampleBox>
                </InfoCard>

                <InfoCard icon={RefreshCw} title="Accommodation" color="purple">
                  Modifying an existing mental framework or developing
                  a new one when new information does not fit.
                  <ExampleBox>
                    A child learns that a whale is a mammal, not a fish,
                    and changes their earlier understanding.
                  </ExampleBox>
                </InfoCard>

                <InfoCard icon={Target} title="Zone of Proximal Development" color="green">
                  Vygotsky's concept describing the difference between
                  what a learner can do independently and what they
                  can achieve with guidance.
                  <ExampleBox>
                    A student can solve basic equations alone but needs
                    teacher guidance for more advanced equations.
                  </ExampleBox>
                </InfoCard>

                <InfoCard icon={Users} title="Scaffolding" color="orange">
                  Temporary support provided to help a learner complete
                  a task, with assistance gradually reduced as competence
                  develops.
                  <ExampleBox>
                    A teacher first demonstrates a task, then guides the
                    student, and finally allows the student to perform
                    it independently.
                  </ExampleBox>
                </InfoCard>
              </div>
            </div>
          </section>

          {/* THORNDIKE */}
          <section className="mt-14">
            <SectionHeading
              eyebrow="Additional important theory"
              title="Trial and Error Learning – Edward Thorndike"
              description="Thorndike explained learning through repeated attempts and the consequences of those attempts."
            />

            <div className="rounded-2xl border border-indigo-200 bg-indigo-50/50 p-5 sm:p-7">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100 text-indigo-700">
                  <Microscope size={25} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">
                    Edward L. Thorndike
                  </h3>
                  <p className="text-sm text-indigo-700">
                    Connectionism and trial-and-error learning
                  </p>
                </div>
              </div>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                Thorndike conducted experiments in which cats were placed
                in puzzle boxes. The cats initially made different
                movements before discovering how to escape and reach food.
                With repeated trials, they generally escaped more quickly.
              </p>

              <ExampleBox>
                Imagine learning to use a new mobile application. You
                try different buttons and menus. Some attempts do not
                work, but eventually you discover the correct steps.
                Repeated practice makes the process easier.
              </ExampleBox>

              <div className="mt-5 rounded-xl border border-indigo-100 bg-white p-4">
                <h3 className="font-bold text-slate-900">
                  Thorndike's Important Laws of Learning
                </h3>

                <div className="mt-4 space-y-4">
                  <div>
                    <h4 className="font-bold text-indigo-800">
                      1. Law of Effect
                    </h4>
                    <p className="mt-1 text-sm leading-7 text-slate-600">
                      Responses followed by satisfying consequences
                      tend to become more likely, while responses
                      followed by uncomfortable consequences tend
                      to become less likely.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-indigo-800">
                      2. Law of Exercise
                    </h4>
                    <p className="mt-1 text-sm leading-7 text-slate-600">
                      Practice and repetition can strengthen learned
                      connections, although repetition alone does not
                      guarantee learning.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-indigo-800">
                      3. Law of Readiness
                    </h4>
                    <p className="mt-1 text-sm leading-7 text-slate-600">
                      Learning is influenced by a learner's readiness
                      and preparation to perform an activity.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
<AdSlot />
          {/* COMPARISON */}
          <section className="mt-14">
            <SectionHeading
              eyebrow="Quick revision"
              title="Comparison of Major Learning Theories"
              description="The following table summarizes the central ideas and important psychologists associated with each theory."
            />

            <div className="overflow-x-auto rounded-2xl border border-slate-200">
              <table className="w-full min-w-[650px] text-left text-sm">
                <thead className="bg-slate-900 text-white">
                  <tr>
                    <th className="p-4">Theory</th>
                    <th className="p-4">Psychologist</th>
                    <th className="p-4">Main Idea</th>
                    <th className="p-4">Example</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-600">
                 
                  <tr>
                    <td className="p-4 font-bold text-slate-900">Operant Conditioning</td>
                    <td className="p-4">B. F. Skinner</td>
                    <td className="p-4">Consequences shape behaviour</td>
                    <td className="p-4">Reward for studying</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-slate-900">Social Learning</td>
                    <td className="p-4">Albert Bandura</td>
                    <td className="p-4">Learning through observation</td>
                    <td className="p-4">Imitating a teacher</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-slate-900">Cognitive Learning</td>
                    <td className="p-4">Edward Tolman and others</td>
                    <td className="p-4">Mental processing and understanding</td>
                    <td className="p-4">Developing a mental map</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-slate-900">Insight Learning</td>
                    <td className="p-4">Wolfgang Köhler</td>
                    <td className="p-4">Sudden problem understanding</td>
                    <td className="p-4">Finding a new solution</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-slate-900">Constructivism</td>
                    <td className="p-4">Piaget and Vygotsky</td>
                    <td className="p-4">Active construction of knowledge</td>
                    <td className="p-4">Learning through guided discovery</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-slate-900">Trial and Error</td>
                    <td className="p-4">Edward Thorndike</td>
                    <td className="p-4">Learning through attempts and consequences</td>
                    <td className="p-4">Learning a new application</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* APPLICATIONS */}
          <section className="mt-14">
            <SectionHeading
              eyebrow="Real-world applications"
              title="Where Are Learning Theories Used?"
              description="These theories are useful beyond psychology textbooks. They help explain learning in education, parenting, workplaces and everyday situations."
            />

            <div className="grid gap-4 sm:grid-cols-2">
              <InfoCard icon={GraduationCap} title="Education" color="blue">
                Teachers use reinforcement, demonstrations, active
                problem-solving and guided learning to support students.
              </InfoCard>

              <InfoCard icon={Heart} title="Parenting" color="pink">
                Children learn through observing parents, receiving
                feedback and developing habits through everyday
                experiences.
              </InfoCard>

              <InfoCard icon={Users} title="Workplaces" color="purple">
                Employees learn through training, demonstrations,
                feedback, collaboration and practical experience.
              </InfoCard>

              <InfoCard icon={Activity} title="Behaviour Development" color="green">
                Learning principles help explain how habits, emotional
                responses and patterns of behaviour can develop.
              </InfoCard>
            </div>
          </section>

          {/* MISCONCEPTIONS */}
          <section className="mt-14">
            <SectionHeading
              eyebrow="Concept clarification"
              title="Common Misconceptions About Learning"
              description="These distinctions are especially useful for understanding the theories accurately."
            />

            <div className="space-y-3">
              {[
                [
                  "Negative reinforcement means punishment.",
                  "Incorrect. Negative reinforcement increases a behaviour by removing an unpleasant condition. Punishment aims to decrease behaviour."
                ],
                [
                  "Learning only happens when someone receives a reward.",
                  "Incorrect. Learning can happen through observation, understanding, experience, practice and social interaction without an immediate reward."
                ],
                [
                  "Classical and operant conditioning are identical.",
                  "Incorrect. Classical conditioning involves associations between stimuli, while operant conditioning focuses on consequences following behaviour."
                ],
                [
                  "Observational learning always requires copying behaviour immediately.",
                  "Incorrect. Someone may learn by observing and remembering a behaviour but demonstrate it only later when motivated."
                ],
                [
                  "All learning theories explain learning in the same way.",
                  "Incorrect. Different theories emphasize behaviour, mental processing, social observation, experience and knowledge construction."
                ],
              ].map(([question, answer]) => (
                <div
                  key={question}
                  className="rounded-xl border border-slate-200 bg-white p-5"
                >
                  <div className="flex items-start gap-3">
                    <AlertCircle
                      className="mt-1 shrink-0 text-blue-600"
                      size={19}
                    />
                    <div>
                      <h3 className="font-bold text-slate-900">
                        {question}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-slate-600">
                        {answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
<AdSlot />
          {/* FAQ */}
          <section className="mt-14">
            <SectionHeading
              eyebrow="Frequently asked questions"
              title="FAQs About Learning Theories in Psychology"
            />

            <div className="rounded-2xl border border-slate-200 bg-white px-5">
              <FAQ question="What are the main learning theories in psychology?">
                Major approaches include behaviourism, classical
                conditioning, operant conditioning, social learning,
                cognitive learning, insight learning and constructivism.
                Trial-and-error learning is another important historical
                theory.
              </FAQ>

              <FAQ question="Who is known as the father of classical conditioning?">
                Ivan Pavlov is widely associated with classical
                conditioning because of his experiments on learned
                associations between stimuli.
              </FAQ>

              <FAQ question="Who developed operant conditioning theory?">
                B. F. Skinner developed the influential theory of
                operant conditioning, building on earlier work such
                as Edward Thorndike's law of effect.
              </FAQ>

              <FAQ question="What is the difference between classical and operant conditioning?">
                Classical conditioning involves learning an association
                between stimuli. Operant conditioning involves learning
                through the consequences of behaviour.
              </FAQ>

              <FAQ question="What is observational learning?">
                Observational learning occurs when someone acquires
                information or behaviour by watching another person
                and potentially imitating their actions.
              </FAQ>

              <FAQ question="What is the Bobo Doll Experiment?">
                It was a famous experiment associated with Albert
                Bandura that demonstrated how children could imitate
                aggressive behaviours after observing adult models.
              </FAQ>

              <FAQ question="What is insight learning?">
                Insight learning is a form of problem-solving in which
                the relationships within a problem are understood,
                allowing a solution to emerge.
              </FAQ>

              <FAQ question="What is the difference between Piaget and Vygotsky?">
                Piaget emphasized individual cognitive development and
                how children construct knowledge. Vygotsky emphasized
                the importance of social interaction, language and
                cultural guidance in learning.
              </FAQ>

              <FAQ question="Which learning theory is best?">
                No single theory explains every kind of learning.
                Behavioural approaches can explain habit formation,
                social learning explains observational influences,
                and cognitive and constructivist approaches help explain
                understanding and problem-solving.
              </FAQ>

              <FAQ question="Why are learning theories important in psychology?">
                They help psychologists and educators understand how
                knowledge, skills and behaviours develop and how
                learning environments can be improved.
              </FAQ>
            </div>
          </section>

          {/* CONCLUSION */}
          <section className="mt-14 rounded-3xl border border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50 p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <Brain className="text-blue-700" size={28} />
              <h2 className="text-xl font-bold text-slate-900">
                Understanding How People Learn
              </h2>
            </div>

            <p className="mt-4 text-sm leading-8 text-slate-700">
              Learning is a complex psychological process that involves
              more than memorizing information or repeating actions.
              Behavioural theories explain how associations and
              consequences influence behaviour, social learning
              emphasizes observation, and cognitive and constructivist
              approaches explain how people process information and
              build understanding.
            </p>

            <p className="mt-3 text-sm leading-8 text-slate-700">
              Together, these theories provide different perspectives
              on how humans develop knowledge, acquire skills and adapt
              to their surroundings.
            </p>

            
          </section>

          {/* EDUCATIONAL NOTE */}
          <div className="mt-8 flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4">
            <GraduationCap
              className="mt-1 shrink-0 text-slate-500"
              size={21}
            />
            <p className="text-xs leading-6 text-slate-500">
              Educational note: This article introduces established
              perspectives and historical experiments in psychology.
              Learning theories are explanatory frameworks, and no
              single theory fully explains every form of human learning.
            </p>
          </div>

        </div>
      </div>
    </main>
  );
}
