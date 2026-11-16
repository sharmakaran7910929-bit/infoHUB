
import {
  Brain,
  Baby,
  Eye,
  Puzzle,
  Lightbulb,
  Blocks,
  Shapes,
  Search,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  BookOpen,
  GraduationCap,UserRound ,TrendingUp,
  Users,
  Target,
  RefreshCw,
  MessageCircle,
  Clock,
  Microscope,
  Network,
  Layers,
  Scale,
  Compass,
  HelpCircle,
  Sparkles,
  Puzzle as PuzzleIcon,
  BrainCircuit,
  Boxes,
  Hand,
  FlaskConical,
  Heart,
  ChevronRight,
} from "lucide-react";
import AdSlot from "../../../components/AdSlot";

export const metadata = {
  title:
    "Piaget's Stages of Cognitive Development | Four Stages, Examples and Theory | PriceTag HUB",
  description:
    "Understand Jean Piaget's four stages of cognitive development, including sensorimotor, preoperational, concrete operational and formal operational thinking, with examples, experiments, limitations and educational applications.",
};

const stages = [
  {
    number: "01",
    age: "Birth to around 2 years",
    name: "Sensorimotor Stage",
    subtitle: "Learning through senses and actions",
    icon: Baby,
    color: "border-rose-200 bg-rose-50 text-rose-700",
    description:
      "Infants learn about the world through sensory experiences and physical actions such as looking, touching, sucking, listening, grasping and moving. Gradually, they begin to understand that objects and people continue to exist even when they cannot see them.",
    milestones: [
      "Exploring the environment through senses and movement.",
      "Developing coordination between seeing and reaching.",
      "Repeating actions that produce interesting results.",
      "Developing object permanence.",
      "Beginning to use simple mental representations towards the end of the stage.",
    ],
    example:
      "A baby searches for a toy after watching someone hide it under a blanket.",
    keywords: ["Senses", "Movement", "Object permanence", "Exploration"],
  },
  {
    number: "02",
    age: "Around 2 to 7 years",
    name: "Preoperational Stage",
    subtitle: "Developing language and symbolic thinking",
    icon: Shapes,
    color: "border-amber-200 bg-amber-50 text-amber-700",
    description:
      "Children increasingly use words, images, symbols and pretend play to represent the world. Their thinking becomes more imaginative, but they may struggle with logical operations, conservation and understanding perspectives different from their own.",
    milestones: [
      "Rapid development of language and vocabulary.",
      "Using objects and symbols to represent other things.",
      "Engaging in imaginative and pretend play.",
      "Showing egocentric thinking in some situations.",
      "Often focusing on one noticeable feature of a situation.",
    ],
    example:
      "A child may believe a taller glass contains more water than a shorter, wider glass, even when both contain the same amount.",
    keywords: ["Language", "Symbols", "Pretend play", "Egocentrism"],
  },
  {
    number: "03",
    age: "Around 7 to 11 years",
    name: "Concrete Operational Stage",
    subtitle: "Logical thinking about concrete situations",
    icon: Blocks,
    color: "border-emerald-200 bg-emerald-50 text-emerald-700",
    description:
      "Children become more capable of logical reasoning about objects and situations they can observe or imagine concretely. They develop an understanding of conservation, classification, reversibility and relationships between quantities.",
    milestones: [
      "Understanding conservation of number, mass and volume.",
      "Recognizing that actions can be mentally reversed.",
      "Classifying objects into groups and subgroups.",
      "Ordering objects according to size or other properties.",
      "Considering more than one aspect of a concrete problem.",
    ],
    example:
      "A child understands that pouring water into a differently shaped glass does not change the amount of water.",
    keywords: ["Logic", "Conservation", "Classification", "Reversibility"],
  },
  {
    number: "04",
    age: "Around 11 years and onwards",
    name: "Formal Operational Stage",
    subtitle: "Abstract and hypothetical reasoning",
    icon: BrainCircuit,
    color: "border-violet-200 bg-violet-50 text-violet-700",
    description:
      "Adolescents become increasingly capable of reasoning about abstract concepts, possibilities and hypothetical situations. They can formulate and test hypotheses, consider multiple possible outcomes and reason about ideas that are not directly observable.",
    milestones: [
      "Thinking about abstract concepts such as justice and freedom.",
      "Considering hypothetical situations and possible outcomes.",
      "Developing systematic problem-solving approaches.",
      "Testing ideas through logical reasoning.",
      "Thinking about future possibilities and complex relationships.",
    ],
    example:
      "A student considers several possible explanations for a scientific result and plans an experiment to test each one.",
    keywords: ["Abstract thought", "Hypotheses", "Possibilities", "Reasoning"],
  },
];

const keyConcepts = [
  {
    icon: Brain,
    title: "Schema",
    description:
      "A schema is a mental framework or organized pattern of knowledge that helps a person understand and respond to experiences.",
    example:
      "A young child may have a schema for dogs based on seeing a family pet.",
  },
  {
    icon: RefreshCw,
    title: "Assimilation",
    description:
      "Assimilation happens when a person understands a new experience using an existing schema.",
    example:
      "A child who knows dogs may initially call a wolf a dog because it looks similar.",
  },
  {
    icon: Puzzle,
    title: "Accommodation",
    description:
      "Accommodation happens when a person changes an existing schema or creates a new one to understand information that does not fit.",
    example:
      "After learning the difference, the child develops separate ideas about dogs and wolves.",
  },
  {
    icon: Scale,
    title: "Equilibration",
    description:
      "Equilibration is the process of balancing assimilation and accommodation as people adjust their understanding when new experiences challenge existing ideas.",
    example:
      "A child updates their understanding after discovering that not every four-legged animal is a dog.",
  },
];

const experiments = [
  {
    title: "Object Permanence",
    stage: "Sensorimotor",
    question: "Does an object continue to exist when it is out of sight?",
    procedure:
      "A researcher hides an interesting toy under a cloth while an infant watches.",
    finding:
      "Searching for the hidden toy suggests that the infant has developed an understanding that the object still exists.",
    significance:
      "Object permanence is an important milestone in Piaget's account of early cognitive development.",
  },
  {
    title: "Three Mountains Task",
    stage: "Preoperational",
    question: "Can a child understand another person's visual perspective?",
    procedure:
      "A child views a model of three mountains and is asked what a doll positioned elsewhere can see.",
    finding:
      "Piaget found that younger children often selected the view matching their own perspective.",
    significance:
      "The task was used to investigate egocentric thinking, although later research showed that task difficulty and presentation can affect performance.",
  },
  {
    title: "Conservation of Liquid",
    stage: "Preoperational to Concrete Operational",
    question: "Does the amount of liquid change when its container changes shape?",
    procedure:
      "Equal amounts of liquid are placed in two identical glasses. One is then poured into a taller, narrower glass.",
    finding:
      "Younger children may focus on the height of the liquid, while children with an understanding of conservation recognize that the amount remains the same.",
    significance:
      "The task illustrates how children develop the ability to consider multiple dimensions of a situation.",
  },
  {
    title: "Pendulum Problem",
    stage: "Formal Operational",
    question: "Can a person systematically identify what affects a pendulum's swinging time?",
    procedure:
      "A learner investigates variables such as string length, weight and release height.",
    finding:
      "Systematically testing one variable at a time demonstrates a form of controlled hypothetical reasoning.",
    significance:
      "Piaget used this type of problem to examine the development of scientific and formal reasoning.",
  },
];

const faqItems = [
  {
    question: "Who developed the stages of cognitive development?",
    answer:
      "The theory was developed by Swiss psychologist Jean Piaget. He studied how children's thinking and understanding develop as they interact with their environment.",
  },
  {
    question: "What are Piaget's four stages of cognitive development?",
    answer:
      "The four stages are sensorimotor, preoperational, concrete operational and formal operational. They describe broad changes in children's ways of thinking and reasoning.",
  },
  {
    question: "At what age does the sensorimotor stage occur?",
    answer:
      "Piaget placed the sensorimotor stage from birth to approximately two years of age. During this period, infants learn through their senses and physical actions.",
  },
  {
    question: "What is object permanence?",
    answer:
      "Object permanence is the understanding that an object continues to exist even when it is no longer visible or directly accessible. Piaget considered its development an important achievement of the sensorimotor stage.",
  },
  {
    question: "What is egocentrism in Piaget's theory?",
    answer:
      "Egocentrism refers to difficulty taking another person's perspective. In Piaget's account, young children in the preoperational stage may assume that others see or understand a situation as they do.",
  },
  {
    question: "What is conservation in cognitive development?",
    answer:
      "Conservation is the understanding that certain properties, such as number, mass or volume, remain unchanged even when the appearance or arrangement of objects changes.",
  },
  {
    question: "What is the difference between assimilation and accommodation?",
    answer:
      "Assimilation uses an existing mental schema to understand new information. Accommodation changes an existing schema or creates a new one when the information does not fit.",
  },
  {
    question: "Why is the concrete operational stage important?",
    answer:
      "It marks the development of more reliable logical reasoning about concrete objects and situations. Children become better at conservation, classification, ordering and reversing mental operations.",
  },
  {
    question: "What is formal operational thinking?",
    answer:
      "Formal operational thinking involves the ability to reason about abstract ideas, hypothetical situations and possible outcomes. Piaget associated its emergence with adolescence, although its use varies across people and contexts.",
  },
  {
    question: "Are Piaget's age ranges exact?",
    answer:
      "No. The ages are approximate. Children's development varies, and later research has shown that some abilities can appear earlier or develop differently depending on the task, experience and context.",
  },
  {
    question: "What are the limitations of Piaget's theory?",
    answer:
      "Critics argue that Piaget sometimes underestimated young children's abilities, placed too much emphasis on individual discovery, and described development as more stage-like and universal than later research supports.",
  },
  {
    question: "Is Piaget's theory still useful today?",
    answer:
      "Yes. Although many details have been revised, the theory remains influential in developmental psychology and education. It helped establish the importance of studying how children's thinking changes with development.",
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

function StageCard({ stage }) {
  const Icon = stage.icon;

  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <span className="text-sm font-bold text-blue-700">
          STAGE {stage.number}
        </span>
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">
          {stage.age}
        </span>
      </div>

      <div className="mt-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
        <Icon size={29} />
      </div>

      <h3 className="mt-5 text-2xl font-bold text-slate-950">
        {stage.name}
      </h3>
      <p className="mt-2 font-bold text-blue-700">{stage.subtitle}</p>

      <p className="mt-4 text-sm leading-7 text-slate-600">
        {stage.description}
      </p>

      <div className="mt-6">
        <h4 className="font-bold text-slate-900">Major developments</h4>
        <ul className="mt-3 space-y-3">
          {stage.milestones.map((item) => (
            <li key={item} className="flex gap-2 text-sm leading-6 text-slate-600">
              <CheckCircle2 className="mt-1 shrink-0 text-blue-600" size={16} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6 rounded-xl border border-blue-100 bg-blue-50 p-4">
        <p className="text-xs font-bold uppercase tracking-wide text-blue-700">
          Real-life example
        </p>
        <p className="mt-2 text-sm leading-6 text-slate-700">
          {stage.example}
        </p>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {stage.keywords.map((keyword) => (
          <span
            key={keyword}
            className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-bold text-slate-600"
          >
            {keyword}
          </span>
        ))}
      </div>
    </article>
  );
}

export default function PiagetCognitiveDevelopmentPage() {
  return (
    <main className="min-h-screen bg-white text-slate-800">

      {/* HERO */}
      <section className="px-5 pb-12 pt-10 sm:pb-16 sm:pt-14">
        <div className="mx-auto max-w-6xl rounded-3xl border border-blue-100 bg-gradient-to-br from-white via-blue-50 to-indigo-100 px-6 py-10 shadow-sm sm:px-12 sm:py-14">
          <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">

            {/* LEFT CONTENT */}
            <div className="text-center lg:text-left">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-sm font-bold text-blue-800">
                <Brain size={17} />
                Developmental Psychology
              </div>

              <h1 className="text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-6xl">
                Piaget's Stages of Cognitive Development
              </h1>

              <p className="mt-5 text-lg font-bold text-blue-800 sm:text-xl">
                How Children's Thinking Changes as They Grow
              </p>

              <p className="mt-6 text-base leading-8 text-slate-600">
                Why does a baby search for a hidden toy, why might a young
                child misunderstand another person's perspective, and how
                does an older child begin to think logically? Jean Piaget's
                theory explains how children's ways of understanding the
                world develop through four major stages.
              </p>

              <div className="mt-9 flex flex-wrap justify-center gap-3 lg:justify-start">
                <a
                  href="#four-stages"
                  className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-bold text-white transition hover:bg-blue-700"
                >
                  Explore Four Stages
                  <ArrowRight size={18} />
                </a>
                <a
                  href="#experiments"
                  className="rounded-xl border border-blue-200 bg-white px-6 py-3 font-bold text-blue-800 transition hover:bg-blue-50"
                >
                  Famous Experiments
                </a>
              </div>

              <div className="mt-9 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm font-bold text-slate-600 lg:justify-start">
                <span className="flex items-center gap-2">
                  <CheckCircle2 size={17} className="text-blue-600" />
                  Four Developmental Stages
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 size={17} className="text-blue-600" />
                  Real-Life Examples
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 size={17} className="text-blue-600" />
                  Famous Experiments
                </span>
              </div>
            </div>

            {/* RIGHT-SIDE STAGE VISUAL */}
            <div className="mx-auto w-full max-w-md">
              <div className="rounded-3xl border border-blue-100 bg-white/90 p-6 shadow-sm sm:p-7">
                <div className="text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">
                    <Brain size={34} />
                  </div>
                  <h2 className="mt-4 text-xl font-bold text-slate-900">
                    Four Stages of Thinking
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    A simplified view of cognitive development
                  </p>
                </div>

                <div className="mt-7 space-y-3">
                  {stages.map((stage, index) => {
                    const Icon = stage.icon;
                    return (
                      <div key={stage.number}>
                        <div className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-4">
                          <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${stage.color}`}>
                            <Icon size={23} />
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="text-xs font-bold text-blue-700">
                              STAGE {stage.number} · {stage.age}
                            </p>
                            <p className="mt-1 font-bold text-slate-900">
                              {stage.name}
                            </p>
                            <p className="mt-1 text-xs text-slate-500">
                              {stage.subtitle}
                            </p>
                          </div>
                        </div>
                        {index !== stages.length - 1 && (
                          <div className="flex justify-center py-1">
                            <ArrowRight
                              size={17}
                              className="rotate-90 text-blue-400"
                            />
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                <p className="mt-5 text-center text-xs leading-5 text-slate-500">
                  Ages are approximate and individual development varies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section id="meaning" className="px-5 py-14 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <SectionHeading
            eyebrow="The Foundational Theory"
            title="What Is Piaget's Theory of Cognitive Development?"
            description="Piaget proposed that children actively construct knowledge as they interact with their surroundings."
          />

          <div className="rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-7 sm:p-10">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-600 text-white">
                <Brain size={29} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  Definition
                </h3>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Piaget's theory of cognitive development explains how
                  children's thinking, reasoning and understanding change
                  as they grow. According to the theory, children are active
                  learners who build knowledge through interaction with
                  people, objects and experiences in their environment.
                  Piaget described four broad stages of cognitive
                  development, each associated with different ways of
                  thinking and understanding the world.
                </p>
                <p className="mt-4 text-sm font-bold text-blue-800">
                  Simple meaning: Children do not simply know less than
                  adults; their way of thinking can be fundamentally
                  different at different stages of development.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <InfoCard icon={UserRound} title="Children are active learners">
              Children explore, experiment, observe and interact with their
              surroundings. They develop knowledge rather than simply
              receiving information from adults.
            </InfoCard>
            <InfoCard icon={TrendingUp} title="Thinking develops over time">
              Piaget described broad changes in reasoning abilities, from
              learning through physical actions to thinking about abstract
              and hypothetical possibilities.
            </InfoCard>
          </div>

          <div className="mt-7 rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="text-lg font-bold text-slate-900">
              Who was Jean Piaget?
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              <strong>Jean Piaget (1896–1980)</strong> was a Swiss
              psychologist known for his influential work in developmental
              psychology. He studied how children reason, solve problems
              and develop knowledge. His observations and experiments
              helped establish cognitive development as a major area of
              psychological research.
            </p>
          </div>
        </div>
      </section>
<AdSlot />
      {/* FOUR STAGES */}
      <section id="four-stages" className="bg-slate-50 px-5 py-14 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="The Main Framework"
            title="The Four Stages of Cognitive Development"
            description="Piaget divided cognitive development into four major stages. Each stage describes a broad pattern of thinking that becomes increasingly complex."
          />

          <div className="mb-9 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
            <table className="w-full min-w-[620px] text-left text-sm">
              <thead className="bg-blue-50 text-slate-900">
                <tr>
                  <th className="p-4 font-bold">Stage</th>
                  <th className="p-4 font-bold">Approximate age</th>
                  <th className="p-4 font-bold">Main ability</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-600">
                <tr>
                  <td className="p-4 font-bold text-slate-900">Sensorimotor</td>
                  <td className="p-4">Birth–2 years</td>
                  <td className="p-4">Learning through senses and actions</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-slate-900">Preoperational</td>
                  <td className="p-4">2–7 years</td>
                  <td className="p-4">Symbolic thought and language</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-slate-900">Concrete Operational</td>
                  <td className="p-4">7–11 years</td>
                  <td className="p-4">Logical thinking about concrete situations</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-slate-900">Formal Operational</td>
                  <td className="p-4">Around 11 years onwards</td>
                  <td className="p-4">Abstract and hypothetical reasoning</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {stages.map((stage) => (
              <StageCard key={stage.number} stage={stage} />
            ))}
          </div>

          <p className="mt-6 text-sm leading-7 text-slate-500">
            <strong>Age note:</strong> These age ranges represent Piaget's
            traditional framework. They are approximate, not strict
            developmental deadlines. Children's performance can vary with
            experience, education, task design and individual differences.
          </p>
        </div>
      </section>

      {/* SENSORIMOTOR DETAIL */}
      <section className="px-5 py-14 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Stage 1 in Detail"
            title="Sensorimotor Stage: Learning Through Action"
            description="During infancy, children gradually build an understanding of the world through what they see, hear, touch and do."
          />

          <div className="grid items-center gap-8 md:grid-cols-2">
            <div className="rounded-3xl border border-rose-100 bg-rose-50 p-7">
              <div className="flex items-center gap-3">
                <Baby size={30} className="text-rose-700" />
                <h3 className="text-xl font-bold text-slate-900">
                  The Hidden Toy Example
                </h3>
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-700">
                Imagine a baby playing with a colourful toy. An adult hides
                the toy under a blanket while the baby watches. At first,
                the baby may not search for it. With development, the baby
                begins to lift the blanket and look for the hidden object.
              </p>
              <div className="mt-6 rounded-2xl border border-rose-100 bg-white p-5">
                <p className="text-sm font-bold text-rose-800">
                  What does this demonstrate?
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  The developing understanding that objects continue to
                  exist even when they are temporarily out of sight.
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900">
                Object Permanence
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Object permanence is one of the best-known concepts from
                Piaget's sensorimotor stage.
              </p>

              <div className="mt-6 space-y-4">
                <div className="flex gap-4 rounded-xl bg-slate-50 p-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-rose-100 text-rose-700">
                    <Eye size={23} />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">Toy is visible</p>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      The baby can see and reach the toy.
                    </p>
                  </div>
                </div>

                <div className="flex justify-center">
                  <ArrowRight className="rotate-90 text-rose-400" size={20} />
                </div>

                <div className="flex gap-4 rounded-xl bg-slate-50 p-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-rose-100 text-rose-700">
                    <Boxes size={23} />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">Toy is hidden</p>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      The toy disappears from the baby's view.
                    </p>
                  </div>
                </div>

                <div className="flex justify-center">
                  <ArrowRight className="rotate-90 text-rose-400" size={20} />
                </div>

                <div className="flex gap-4 rounded-xl bg-emerald-50 p-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                    <Search size={23} />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">Baby searches</p>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      The baby looks under the blanket for the toy.
                    </p>
                  </div>
                </div>
              </div>

              <p className="mt-4 text-xs leading-6 text-slate-500">
                This is a simplified illustration. Research suggests that
                some forms of object knowledge may appear earlier than
                Piaget's original behavioural tests indicated.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PREOPERATIONAL */}
      <section className="bg-amber-50/40 px-5 py-14 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Stage 2 in Detail"
            title="Preoperational Stage: The Growth of Symbolic Thinking"
            description="Children begin to use language, imagination and symbols, but their reasoning is not yet consistently logical."
          />

          <div className="grid gap-5 md:grid-cols-2">
            <InfoCard icon={MessageCircle} title="Language development">
              Children use words and sentences to represent objects, people,
              actions and experiences. Language becomes an important tool
              for communicating and thinking.
            </InfoCard>
            <InfoCard icon={Shapes} title="Symbolic thinking">
              A child can use one object to represent another. For example,
              a stick may become a magic wand during pretend play.
            </InfoCard>
            <InfoCard icon={Eye} title="Egocentrism">
              In Piaget's theory, young children may find it difficult to
              imagine how a situation looks from another person's
              perspective.
            </InfoCard>
            <InfoCard icon={Target} title="Centration">
              Children may focus on one noticeable feature of a situation
              while overlooking other relevant features, such as the height
              and width of a container.
            </InfoCard>
          </div>

          <div className="mt-8 rounded-3xl border border-amber-100 bg-white p-7 shadow-sm sm:p-9">
            <h3 className="text-xl font-bold text-slate-900">
              Understanding Egocentrism: The Three Mountains Task
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Piaget and his collaborators used a model of three mountains
              to investigate whether children could understand another
              person's visual perspective.
            </p>

            <div className="mt-7 grid gap-5 md:grid-cols-2">
              <div className="rounded-2xl border border-amber-100 bg-amber-50 p-5">
                <h4 className="font-bold text-slate-900">
                  Child's own viewpoint
                </h4>
                <div className="mt-4 flex h-36 items-end justify-center gap-2">
                  <div className="h-20 w-20 rounded-t-full bg-emerald-400" />
                  <div className="h-32 w-24 rounded-t-full bg-emerald-600" />
                  <div className="h-16 w-16 rounded-t-full bg-emerald-300" />
                </div>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  The child sees the model from their own position.
                </p>
              </div>

              <div className="rounded-2xl border border-blue-100 bg-blue-50 p-5">
                <h4 className="font-bold text-slate-900">
                  Another person's viewpoint
                </h4>
                <div className="mt-4 flex h-36 items-end justify-center gap-2">
                  <div className="h-16 w-16 rounded-t-full bg-emerald-300" />
                  <div className="h-32 w-24 rounded-t-full bg-emerald-600" />
                  <div className="h-20 w-20 rounded-t-full bg-emerald-400" />
                </div>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  The person on the opposite side sees a different
                  arrangement.
                </p>
              </div>
            </div>

            <p className="mt-5 text-sm leading-7 text-slate-600">
              Younger children in Piaget's original studies often found it
              difficult to select the view matching another person's
              position. However, later researchers found that changing the
              task's complexity and wording can improve young children's
              performance.
            </p>
          </div>
        </div>
      </section>

      {/* CONSERVATION */}
      <section className="px-5 py-14 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="A Famous Developmental Concept"
            title="Conservation: Why Appearance Can Be Misleading"
            description="Conservation is the understanding that certain quantities remain the same even when their appearance or arrangement changes."
          />

          <div className="rounded-3xl border border-emerald-100 bg-emerald-50/60 p-7 sm:p-9">
            <h3 className="text-xl font-bold text-slate-900">
              The Water Glass Experiment
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Two identical glasses contain equal amounts of water. The
              water from one glass is poured into a taller, narrower
              container. Has the amount of water changed?
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <h4 className="text-center font-bold text-slate-900">
                  Before pouring
                </h4>
                <div className="mt-5 flex h-48 items-end justify-center gap-8">
                  {[1, 2].map((item) => (
                    <div
                      key={item}
                      className="relative flex h-36 w-16 items-end justify-center overflow-hidden rounded-b-xl border-2 border-slate-400 bg-white"
                    >
                      <div className="h-1/2 w-full bg-sky-300" />
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-center text-sm text-slate-600">
                  Both glasses contain equal amounts.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <h4 className="text-center font-bold text-slate-900">
                  After pouring
                </h4>
                <div className="mt-5 flex h-48 items-end justify-center gap-8">
                  <div className="relative flex h-36 w-16 items-end justify-center overflow-hidden rounded-b-xl border-2 border-slate-400 bg-white">
                    <div className="h-1/2 w-full bg-sky-300" />
                  </div>
                  <div className="relative flex h-44 w-12 items-end justify-center overflow-hidden rounded-b-xl border-2 border-slate-400 bg-white">
                    <div className="h-[62%] w-full bg-sky-300" />
                  </div>
                </div>
                <p className="mt-4 text-center text-sm text-slate-600">
                  The shape changes, but the amount remains equal.
                </p>
              </div>
            </div>

            <div className="mt-7 grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-amber-100 bg-amber-50 p-5">
                <p className="font-bold text-amber-900">
                  A younger child's possible answer
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-700">
                  "The taller glass has more water because the water level
                  is higher."
                </p>
                <p className="mt-2 text-xs font-bold text-amber-800">
                  Focuses mainly on height.
                </p>
              </div>
              <div className="rounded-xl border border-emerald-100 bg-emerald-50 p-5">
                <p className="font-bold text-emerald-900">
                  A conservation-based answer
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-700">
                  "Both glasses have the same amount because none of the
                  water was added or removed."
                </p>
                <p className="mt-2 text-xs font-bold text-emerald-800">
                  Considers the transformation and quantity.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <InfoCard icon={Scale} title="Conservation of number">
              Rearranging a row of objects does not change how many objects
              are present.
            </InfoCard>
            <InfoCard icon={Boxes} title="Conservation of mass">
              Changing the shape of a piece of clay does not change the
              amount of material.
            </InfoCard>
            <InfoCard icon={FlaskConical} title="Conservation of volume">
              Pouring liquid into a differently shaped container does not
              change the amount of liquid.
            </InfoCard>
          </div>
        </div>
      </section>

      {/* CONCRETE OPERATIONAL */}
      <section className="bg-emerald-50/40 px-5 py-14 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Stage 3 in Detail"
            title="Concrete Operational Stage: Logical Thinking Develops"
            description="Children become better at reasoning logically about things they can see, handle or represent through concrete examples."
          />

          <div className="grid gap-5 md:grid-cols-2">
            <InfoCard icon={RefreshCw} title="Reversibility">
              Children understand that some actions can be mentally reversed.
              For example, if water is poured into another glass, it can be
              poured back into the original glass.
            </InfoCard>
            <InfoCard icon={Layers} title="Classification">
              Children become better at grouping objects according to shared
              features and understanding relationships between categories
              and subcategories.
            </InfoCard>
            <InfoCard icon={TrendingUp} title="Seriation">
              Children can arrange objects according to an ordered property,
              such as shortest to tallest or lightest to heaviest.
            </InfoCard>
            <InfoCard icon={Scale} title="Decentration">
              Children become more capable of considering multiple features
              of a situation instead of focusing on only one.
            </InfoCard>
          </div>

          <div className="mt-8 rounded-3xl border border-emerald-100 bg-white p-7 sm:p-9">
            <h3 className="text-xl font-bold text-slate-900">
              Example: Classification and Logical Grouping
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Imagine a child has several objects: red balls, blue balls,
              red blocks and blue blocks. The child can begin grouping
              objects by colour, shape or both, and understand that a group
              can contain smaller categories.
            </p>

            <div className="mt-7 grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl border border-emerald-100 bg-emerald-50 p-5 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-rose-200 text-rose-700">
                  <div className="h-5 w-5 rounded-full bg-rose-500" />
                </div>
                <p className="mt-3 font-bold text-slate-900">Colour group</p>
                <p className="mt-2 text-sm text-slate-600">
                  Red objects and blue objects
                </p>
              </div>
              <div className="rounded-xl border border-emerald-100 bg-emerald-50 p-5 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                  <Shapes size={27} />
                </div>
                <p className="mt-3 font-bold text-slate-900">Shape group</p>
                <p className="mt-2 text-sm text-slate-600">
                  Balls and blocks
                </p>
              </div>
              <div className="rounded-xl border border-emerald-100 bg-emerald-50 p-5 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100 text-indigo-700">
                  <Network size={27} />
                </div>
                <p className="mt-3 font-bold text-slate-900">Subcategories</p>
                <p className="mt-2 text-sm text-slate-600">
                  Red balls, blue balls and other combinations
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FORMAL OPERATIONAL */}
      <section className="px-5 py-14 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Stage 4 in Detail"
            title="Formal Operational Stage: Thinking Beyond What Is Visible"
            description="Adolescents become increasingly capable of reasoning about abstract ideas, hypotheses and possible situations."
          />

          <div className="grid gap-5 md:grid-cols-2">
            <InfoCard icon={Lightbulb} title="Abstract thinking">
              People can reason about concepts that cannot be directly
              observed, such as justice, freedom, morality and equality.
            </InfoCard>
            <InfoCard icon={FlaskConical} title="Hypothetical reasoning">
              They can consider "what if" situations and think through
              outcomes that have not actually happened.
            </InfoCard>
            <InfoCard icon={Target} title="Systematic problem-solving">
              They can develop possible explanations, test alternatives
              and approach complex problems more systematically.
            </InfoCard>
            <InfoCard icon={Compass} title="Future-oriented thinking">
              They can consider long-term possibilities, make plans and
              evaluate different potential outcomes.
            </InfoCard>
          </div>

          <div className="mt-8 rounded-3xl border border-violet-100 bg-violet-50/60 p-7 sm:p-9">
            <h3 className="text-xl font-bold text-slate-900">
              Example: Solving a Scientific Problem
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Suppose a student wants to discover what determines how
              quickly a pendulum swings. Several factors might matter:
              string length, the weight attached to it and the angle from
              which it is released.
            </p>

            <div className="mt-7 grid gap-4 sm:grid-cols-3">
              {[
                ["Possible factors", "String length, weight and release angle."],
                ["Testing", "Change one factor while keeping the others constant."],
                ["Conclusion", "Compare results to identify which factor matters."],
              ].map(([title, description], index) => (
                <div key={title} className="rounded-xl border border-violet-100 bg-white p-5">
                  <p className="text-xs font-bold text-violet-700">
                    STEP {index + 1}
                  </p>
                  <h4 className="mt-2 font-bold text-slate-900">{title}</h4>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {description}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-5 text-sm leading-7 text-slate-600">
              This kind of systematic hypothesis testing is associated
              with formal operational reasoning in Piaget's framework.
              However, not every adolescent or adult uses this reasoning
              consistently in every context.
            </p>
          </div>
        </div>
      </section>
<AdSlot />
      {/* KEY CONCEPTS */}
      <section className="bg-blue-50/50 px-5 py-14 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="How Learning Happens"
            title="Four Important Concepts in Piaget's Theory"
            description="Piaget explained cognitive development through the way people organize, use and adjust their knowledge."
          />

          <div className="grid gap-5 md:grid-cols-2">
            {keyConcepts.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                      <Icon size={24} />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
                        Concept {index + 1}
                      </p>
                      <h3 className="text-xl font-bold text-slate-900">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>
                  <div className="mt-4 rounded-xl bg-blue-50 p-4">
                    <p className="text-xs font-bold uppercase tracking-wide text-blue-700">
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

          <div className="mt-8 rounded-3xl border border-blue-100 bg-white p-7 shadow-sm sm:p-9">
            <h3 className="text-xl font-bold text-slate-900">
              How Assimilation and Accommodation Work Together
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Imagine a child who knows what a dog looks like. One day,
              the child sees a wolf for the first time.
            </p>

            <div className="mt-7 grid gap-4 md:grid-cols-3">
              <div className="rounded-xl border border-blue-100 bg-blue-50 p-5">
                <p className="text-xs font-bold text-blue-700">FIRST</p>
                <h4 className="mt-2 font-bold text-slate-900">
                  Existing schema
                </h4>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  The child already has a mental category for dogs.
                </p>
              </div>
              <div className="rounded-xl border border-amber-100 bg-amber-50 p-5">
                <p className="text-xs font-bold text-amber-700">NEXT</p>
                <h4 className="mt-2 font-bold text-slate-900">
                  Assimilation
                </h4>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  The child may initially call the wolf a dog because it
                  resembles the familiar animal.
                </p>
              </div>
              <div className="rounded-xl border border-emerald-100 bg-emerald-50 p-5">
                <p className="text-xs font-bold text-emerald-700">THEN</p>
                <h4 className="mt-2 font-bold text-slate-900">
                  Accommodation
                </h4>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  The child learns the difference and adjusts their mental
                  categories.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIMENTS */}
      <section id="experiments" className="px-5 py-14 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Research and Evidence"
            title="Famous Experiments in Piaget's Theory"
            description="Piaget used carefully designed tasks to investigate how children understand objects, perspectives, quantities and logical relationships."
          />

          <div className="space-y-5">
            {experiments.map((item, index) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <p className="text-xs font-bold uppercase tracking-wider text-blue-700">
                    Experiment {index + 1}
                  </p>
                  <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-800">
                    {item.stage}
                  </span>
                </div>
                <h3 className="mt-3 text-xl font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm font-bold text-slate-800">
                  Research question: {item.question}
                </p>
                <div className="mt-5 grid gap-4 md:grid-cols-3">
                  <div className="rounded-xl bg-slate-50 p-4">
                    <p className="font-bold text-slate-900">Procedure</p>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {item.procedure}
                    </p>
                  </div>
                  <div className="rounded-xl bg-slate-50 p-4">
                    <p className="font-bold text-slate-900">Observation</p>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {item.finding}
                    </p>
                  </div>
                  <div className="rounded-xl bg-blue-50 p-4">
                    <p className="font-bold text-blue-900">Significance</p>
                    <p className="mt-2 text-sm leading-6 text-slate-700">
                      {item.significance}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
<AdSlot />
      {/* EDUCATIONAL APPLICATIONS */}
      <section className="bg-slate-50 px-5 py-14 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Practical Applications"
            title="How Piaget's Theory Influences Education"
            description="The theory has influenced teaching approaches by emphasizing the importance of development, active learning and age-appropriate experiences."
          />

          <div className="grid gap-5 md:grid-cols-2">
            <InfoCard icon={Hand} title="Learning through experience">
              Children benefit from opportunities to explore, handle
              materials, experiment and discover relationships rather than
              relying only on verbal explanations.
            </InfoCard>
            <InfoCard icon={BookOpen} title="Age-appropriate teaching">
              Teachers can use concrete examples, objects and activities
              when learners are developing logical reasoning about
              observable situations.
            </InfoCard>
            <InfoCard icon={Puzzle} title="Problem-solving activities">
              Activities that encourage comparison, classification,
              experimentation and questioning can support cognitive
              development.
            </InfoCard>
            <InfoCard icon={Users} title="Respecting individual differences">
              Teachers should recognize that children do not all learn
              at exactly the same pace and may need different forms of
              explanation and support.
            </InfoCard>
          </div>

          <div className="mt-8 rounded-2xl border border-blue-100 bg-blue-50 p-6">
            <h3 className="text-lg font-bold text-slate-900">
              Example: Teaching fractions
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-700">
              Instead of beginning with abstract fraction symbols alone,
              a teacher can use a paper circle or a piece of fruit divided
              into equal parts. Learners can see and compare halves,
              quarters and other fractions. Concrete experiences can help
              connect a mathematical idea with something familiar.
            </p>
          </div>
        </div>
      </section>

      {/* LIMITATIONS */}
      <section className="px-5 py-14 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <SectionHeading
            eyebrow="Critical Evaluation"
            title="Limitations and Criticism of Piaget's Theory"
            description="Piaget's work transformed developmental psychology, but later research has revised several aspects of his original account."
          />

          <div className="space-y-4">
            {[
              {
                title: "Children may develop some abilities earlier",
                description:
                  "Later studies suggest that infants and young children can demonstrate certain forms of knowledge earlier than Piaget's original tasks indicated.",
              },
              {
                title: "Development may not follow rigid stages",
                description:
                  "Children may show advanced reasoning in one area but struggle with another. Cognitive development can be more gradual and uneven than a strict stage model suggests.",
              },
              {
                title: "Task design can affect performance",
                description:
                  "A child's answer may depend on how a question is worded, how familiar the materials are and how demanding the task is, not only on their underlying ability.",
              },
              {
                title: "Social and cultural influences received less emphasis",
                description:
                  "Piaget emphasized children's interaction with their environment and independent discovery. Other approaches, particularly Vygotsky's, give greater attention to social interaction, language and cultural learning.",
              },
              {
                title: "Not everyone consistently uses formal reasoning",
                description:
                  "The ability to think hypothetically does not mean that every adolescent or adult applies abstract, scientific reasoning in every situation. Education, experience and context matter.",
              },
            ].map((item, index) => (
              <div
                key={item.title}
                className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 sm:p-6"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-700">
                  <AlertCircle size={21} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">
                    {index + 1}. {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-7 rounded-2xl border border-emerald-100 bg-emerald-50 p-6">
            <h3 className="font-bold text-emerald-950">
              Does criticism make Piaget's theory irrelevant?
            </h3>
            <p className="mt-3 text-sm leading-7 text-emerald-950">
              No. Piaget's theory remains historically and scientifically
              influential. Its lasting contribution is the idea that
              children's thinking changes in important ways during
              development and that children actively construct knowledge.
              Modern developmental psychology builds on, tests and revises
              these ideas.
            </p>
          </div>
        </div>
      </section>

      {/* PIAGET VS VYGOTSKY */}
      <section className="bg-indigo-50/50 px-5 py-14 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Related Developmental Theory"
            title="Piaget vs Vygotsky"
            description="Both psychologists made major contributions to understanding children's cognitive development, but they emphasized different influences on learning."
          />

          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white">
            <table className="w-full min-w-[650px] text-left text-sm">
              <thead className="bg-indigo-50 text-slate-900">
                <tr>
                  <th className="p-4 font-bold">Comparison</th>
                  <th className="p-4 font-bold">Jean Piaget</th>
                  <th className="p-4 font-bold">Lev Vygotsky</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-600">
                <tr>
                  <td className="p-4 font-bold text-slate-900">Main emphasis</td>
                  <td className="p-4">Individual construction of knowledge</td>
                  <td className="p-4">Social and cultural influences on learning</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-slate-900">Development</td>
                  <td className="p-4">Four broad cognitive stages</td>
                  <td className="p-4">Learning through socially supported development</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-slate-900">Role of language</td>
                  <td className="p-4">Develops alongside cognitive abilities</td>
                  <td className="p-4">A major tool for thinking and learning</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-slate-900">Learning support</td>
                  <td className="p-4">Exploration and discovery</td>
                  <td className="p-4">Guidance, interaction and scaffolding</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-slate-900">Key concept</td>
                  <td className="p-4">Assimilation and accommodation</td>
                  <td className="p-4">Zone of proximal development</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-5 text-sm leading-7 text-slate-600">
            These are broad differences, not complete descriptions of
            either theory. Both approaches recognize that children actively
            participate in learning and development.
          </p>
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
            Jean Piaget's theory explains cognitive development through
            four broad stages: sensorimotor, preoperational, concrete
            operational and formal operational. Each stage describes
            important changes in how children understand objects, use
            symbols, reason logically and think about abstract possibilities.
          </p>
          <p className="mt-4 text-base leading-8 text-slate-700">
            Concepts such as object permanence, egocentrism, conservation,
            assimilation and accommodation help explain these changes.
            Although later research has challenged some of Piaget's age
            estimates and stage boundaries, his work remains a foundation
            of developmental psychology and educational theory.
          </p>
        </div>
      </section>
<AdSlot />
      {/* FAQ */}
      <section className="bg-slate-50 px-5 py-14 sm:py-20">
        <div className="mx-auto max-w-4xl">
          <SectionHeading
            eyebrow="Frequently Asked Questions"
            title="Piaget's Cognitive Development FAQs"
            description="Important questions about the four stages, key concepts, experiments and limitations of the theory."
          />

          <div className="space-y-3">
            {faqItems.map((item) => (
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
            Understanding How Children's Minds Develop
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-600">
            Piaget's theory changed how psychologists and educators think
            about childhood. It reminds us that learning is not simply
            about collecting facts. It is also about developing new ways
            to understand, organize and reason about the world.
          </p>
        </div>
      </section>
    </main>
  );
}
