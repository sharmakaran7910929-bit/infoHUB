
import {
  Brain,
  Eye,
  Focus,
  MemoryStick,
  Lightbulb,
  Puzzle,
  Scale,
  BookOpen,
  HeartPulse,
  Monitor,
  ShoppingBag,
  ArrowRight,
  CheckCircle2,
  Search,
  MessageSquare,
  Layers,
  Network,
  GraduationCap,
  Workflow,
  ClipboardList,
  BrainCircuit,
  ScanEye,
  Target,
  Repeat,
  LightbulbIcon,
} from "lucide-react";
import AdSlot from "../../../components/AdSlot";

export const metadata = {
  title: "Cognitive Psychology | Meaning, Processes, Theories and Examples | PriceTag HUB",
  description:
    "Learn what cognitive psychology means, how the mind processes information, and how memory, attention, perception, thinking and decision-making influence everyday life.",
};

const cognitiveProcesses = [
  {
    icon: Eye,
    title: "Perception",
    description:
      "Perception is the process of organizing and interpreting sensory information to understand the environment.",
    example:
      "Recognizing a familiar face in a crowded place involves interpreting visual information and comparing it with stored knowledge.",
    color: "blue",
  },
  {
    icon: Focus,
    title: "Attention",
    description:
      "Attention allows the mind to concentrate on selected information while reducing the influence of competing distractions.",
    example:
      "A student listens to a teacher while ignoring conversations happening outside the classroom.",
    color: "violet",
  },
  {
    icon: MemoryStick,
    title: "Memory",
    description:
      "Memory involves encoding, retaining and retrieving information, experiences and learned knowledge.",
    example:
      "Remembering a formula during an examination requires retrieving previously learned information.",
    color: "emerald",
  },
  {
    icon: Lightbulb,
    title: "Thinking and Reasoning",
    description:
      "Thinking involves working with information, forming ideas, making connections and drawing conclusions.",
    example:
      "Comparing evidence before deciding whether a news report is reliable.",
    color: "amber",
  },
  {
    icon: Puzzle,
    title: "Problem-Solving",
    description:
      "Problem-solving involves identifying a challenge, considering possible approaches and evaluating solutions.",
    example:
      "Finding another route when a road is blocked by traffic.",
    color: "rose",
  },
  {
    icon: Scale,
    title: "Decision-Making",
    description:
      "Decision-making is the process of evaluating available alternatives and selecting an option.",
    example:
      "Comparing the price, quality and features of two products before purchasing one.",
    color: "cyan",
  },
];

const processingStages = [
  {
    number: "01",
    title: "Input",
    description:
      "Information enters through the senses, such as seeing, hearing or touching something.",
    example: "Seeing a question on an examination paper.",
    icon: ScanEye,
  },
  {
    number: "02",
    title: "Attention and Interpretation",
    description:
      "The mind selects relevant information and interprets what it means.",
    example: "Focusing on the question and understanding its wording.",
    icon: Focus,
  },
  {
    number: "03",
    title: "Memory and Thinking",
    description:
      "Relevant knowledge may be retrieved, connected with new information and used to reason.",
    example: "Recalling a concept and working out the answer.",
    icon: BrainCircuit,
  },
  {
    number: "04",
    title: "Response",
    description:
      "The person uses the processed information to make a decision or perform an action.",
    example: "Writing the answer on the examination paper.",
    icon: MessageSquare,
  },
];

const applications = [
  {
    icon: GraduationCap,
    title: "Education and Learning",
    description:
      "Teachers can use knowledge of attention, memory and learning to organize lessons, use practice activities and help students understand difficult concepts.",
    example:
      "Dividing a complex chapter into smaller sections and revisiting important ideas helps learners process and retain information.",
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
    description:
      "Cognitive research contributes to understanding changes in memory, attention, language and other mental abilities.",
    example:
      "Cognitive assessments can help professionals examine difficulties with memory or attention.",
  },
  {
    icon: Monitor,
    title: "Technology and User Experience",
    description:
      "Knowledge of perception, attention and memory helps designers create interfaces that people can understand and use more easily.",
    example:
      "Clear navigation and familiar icons reduce the effort required to find information on a website.",
  },
  {
    icon: ShoppingBag,
    title: "Business and Marketing",
    description:
      "Cognitive psychology helps explain how people notice information, compare alternatives and make purchasing decisions.",
    example:
      "A customer may compare product reviews, prices and features before choosing a particular product.",
  },
];

const keyCharacteristics = [
  "Studies mental processes such as attention, memory, perception and reasoning.",
  "Investigates how people acquire, organize, interpret and use information.",
  "Examines the influence of previous experiences and existing knowledge.",
  "Uses scientific research methods, including controlled experiments and cognitive tasks.",
  "Explores the relationship between mental processes and observable behaviour.",
  "Connects findings from psychology with areas such as education, healthcare and technology.",
];

const majorConcepts = [
  {
    title: "Information Processing",
    description:
      "The mind can be studied in terms of how information is received, processed, stored and used.",
    icon: Workflow,
  },
  {
    title: "Mental Representation",
    description:
      "People use internal representations, such as concepts, images and knowledge structures, to understand the world.",
    icon: Layers,
  },
  {
    title: "Schemas",
    description:
      "Schemas are organized structures of knowledge that help people interpret new experiences using what they already know.",
    icon: Network,
  },
  {
    title: "Cognitive Processes",
    description:
      "Mental activities such as remembering, comparing, reasoning and planning work together during everyday tasks.",
    icon: Brain,
  },
];

const exampleScenarios = [
  {
    title: "Studying for an Examination",
    steps: [
      "Attention helps the student concentrate on the lesson.",
      "Perception helps interpret words, diagrams and explanations.",
      "Memory helps retain and retrieve learned concepts.",
      "Reasoning helps apply knowledge to unfamiliar questions.",
    ],
    result:
      "Successful learning involves several connected cognitive processes rather than memorization alone.",
  },
  {
    title: "Choosing a Smartphone",
    steps: [
      "The buyer notices different smartphone models.",
      "Attention focuses on relevant features such as price and battery life.",
      "Memory brings back knowledge of previous products and experiences.",
      "Decision-making helps compare alternatives and select a product.",
    ],
    result:
      "The purchase decision is influenced by information, previous experience and the way alternatives are evaluated.",
  },
];

const faqs = [
  {
    question: "What is cognitive psychology in simple words?",
    answer:
      "Cognitive psychology is the scientific study of how people think, learn, remember, pay attention, understand information and make decisions.",
  },
  {
    question: "What are the main processes studied in cognitive psychology?",
    answer:
      "Major processes include perception, attention, memory, language, thinking, reasoning, problem-solving and decision-making.",
  },
  {
    question: "Why is cognitive psychology important?",
    answer:
      "It helps explain how people understand information and use knowledge. Its findings are useful in education, healthcare, technology, workplace design and many everyday activities.",
  },
  {
    question: "What is the difference between cognitive and behavioural psychology?",
    answer:
      "Cognitive psychology focuses on mental processes such as thinking and memory. Behavioural psychology traditionally emphasizes observable behaviour and how it is learned or influenced by the environment. Both approaches contribute to understanding human behaviour.",
  },
  {
    question: "Is cognitive psychology related to neuroscience?",
    answer:
      "Yes. Cognitive psychology studies mental processes, while cognitive neuroscience investigates how brain activity and neural systems support those processes. The two fields are closely related but are not identical.",
  },
];

function SectionHeading({ eyebrow, title, description, centered = false }) {
  return (
    <div className={`mb-10 max-w-3xl ${centered ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <p className="mb-3 text-sm font-bold uppercase tracking-wider text-blue-700">
          {eyebrow}
        </p>
      )}

      <h2 className="text-2xl font-bold leading-tight text-slate-900 sm:text-3xl">
        {title}
      </h2>

      {description && (
        <p className="mt-4 leading-8 text-slate-600">
          {description}
        </p>
      )}
    </div>
  );
}

function ProcessCard({ item }) {
  const Icon = item.icon;

  const colorStyles = {
    blue: "bg-blue-100 text-blue-700",
    violet: "bg-violet-100 text-violet-700",
    emerald: "bg-emerald-100 text-emerald-700",
    amber: "bg-amber-100 text-amber-700",
    rose: "bg-rose-100 text-rose-700",
    cyan: "bg-cyan-100 text-cyan-700",
  };

  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-6 transition-shadow hover:shadow-lg">
      <div
        className={`flex h-12 w-12 items-center justify-center rounded-xl ${colorStyles[item.color]}`}
      >
        <Icon size={24} />
      </div>

      <h3 className="mt-5 text-lg font-bold text-slate-900">
        {item.title}
      </h3>

      <p className="mt-3 text-sm leading-7 text-slate-600">
        {item.description}
      </p>

      <div className="mt-5 rounded-xl bg-slate-50 p-4">
        <p className="text-xs font-bold uppercase tracking-wide text-blue-700">
          Everyday Example
        </p>
        <p className="mt-2 text-sm leading-6 text-slate-700">
          {item.example}
        </p>
      </div>
    </article>
  );
}

function StageCard({ stage }) {
  const Icon = stage.icon;

  return (
    <article className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <span className="text-3xl font-bold text-blue-200">
          {stage.number}
        </span>
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
          <Icon size={22} />
        </div>
      </div>

      <h3 className="mt-5 font-bold text-slate-900">
        {stage.title}
      </h3>

      <p className="mt-3 text-sm leading-7 text-slate-600">
        {stage.description}
      </p>

      <div className="mt-4 border-t border-slate-100 pt-4">
        <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
          Example
        </p>
        <p className="mt-2 text-sm leading-6 text-slate-700">
          {stage.example}
        </p>
      </div>
    </article>
  );
}

function ApplicationCard({ item }) {
  const Icon = item.icon;

  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
        <Icon size={24} />
      </div>

      <h3 className="mt-5 text-lg font-bold text-slate-900">
        {item.title}
      </h3>

      <p className="mt-3 text-sm leading-7 text-slate-600">
        {item.description}
      </p>

      <div className="mt-5 rounded-xl bg-blue-50 p-4">
        <p className="text-xs font-bold uppercase tracking-wide text-blue-700">
          Practical Example
        </p>
        <p className="mt-2 text-sm leading-6 text-slate-700">
          {item.example}
        </p>
      </div>
    </article>
  );
}

function ExampleScenario({ scenario, index }) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 font-bold text-blue-800">
          0{index + 1}
        </span>
        <h3 className="text-xl font-bold text-slate-900">
          {scenario.title}
        </h3>
      </div>

      <ol className="mt-6 space-y-4">
        {scenario.steps.map((step, stepIndex) => (
          <li key={stepIndex} className="flex items-start gap-3">
            <CheckCircle2
              size={19}
              className="mt-1 shrink-0 text-blue-600"
            />
            <span className="text-sm leading-7 text-slate-700">
              {step}
            </span>
          </li>
        ))}
      </ol>

      <div className="mt-6 rounded-xl bg-blue-50 p-4">
        <p className="text-xs font-bold uppercase tracking-wide text-blue-700">
          What This Demonstrates
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700">
          {scenario.result}
        </p>
      </div>
    </article>
  );
}

export default function CognitivePsychologyPage() {
  return (
    <main className="min-h-screen bg-white text-slate-800">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-blue-200/40 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-indigo-200/40 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.2fr_0.8fr] lg:py-24">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-bold text-blue-800 shadow-sm">
              <Brain size={17} />
              A Branch of Psychology
            </div>

            <h1 className="mt-7 text-4xl font-bold leading-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Cognitive Psychology
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Discover how the human mind receives information, pays
              attention, remembers experiences, solves problems and makes
              decisions. Understand the mental processes behind everyday
              thinking and behaviour.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#cognitive-processes"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-700 px-6 py-3 font-bold text-white transition hover:bg-blue-800"
              >
                Explore Cognitive Processes
                <ArrowRight size={18} />
              </a>

              <a
                href="#real-life-examples"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3 font-bold text-slate-800 transition hover:border-blue-400 hover:text-blue-700"
              >
                See Real-Life Examples
              </a>
            </div>

            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-slate-600">
              <span className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-blue-600" />
                Mental Processes
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-blue-600" />
                Scientific Research
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-blue-600" />
                Everyday Applications
              </span>
            </div>
          </div>

          {/* Hero concept visual */}
          <div className="relative mx-auto w-full max-w-md">
            <div className="rounded-3xl border border-blue-100 bg-white p-6 shadow-xl shadow-blue-100/60 sm:p-8">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-100 to-indigo-100 text-blue-800">
                <Brain size={43} />
              </div>

              <h2 className="mt-5 text-center text-xl font-bold text-slate-900">
                How the Mind Works
              </h2>

              <p className="mt-2 text-center text-sm leading-6 text-slate-600">
                Different cognitive processes work together to help us
                understand and respond to the world.
              </p>

              <div className="mt-7 space-y-3">
                {[
                  ["Perception", Eye],
                  ["Attention", Target],
                  ["Memory", MemoryStick],
                  ["Thinking", Lightbulb],
                ].map(([label, Icon]) => (
                  <div
                    key={label}
                    className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 px-4 py-3"
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-100 text-blue-700">
                      <Icon size={19} />
                    </div>
                    <span className="font-bold text-slate-800">
                      {label}
                    </span>
                    <ArrowRight size={16} className="ml-auto text-blue-500" />
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute -right-3 -top-4 rounded-xl border border-blue-100 bg-white px-4 py-3 shadow-lg sm:-right-6">
              <p className="text-xs font-bold text-blue-700">
                Understanding
              </p>
              <p className="text-sm font-bold text-slate-900">
                The Human Mind
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Definition */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
        <div className="grid items-start gap-10 lg:grid-cols-[1.25fr_0.75fr]">
          <div>
            <SectionHeading
              eyebrow="Meaning and Definition"
              title="What Is Cognitive Psychology?"
              description="Cognitive psychology is the scientific study of mental processes involved in acquiring, processing, storing and using information."
            />

            <div className="space-y-5 leading-8 text-slate-600">
              <p>
                Cognitive psychology is a branch of psychology that
                investigates how people think, learn, remember, understand
                language, pay attention and make decisions. It focuses on
                the mental activities that take place when individuals
                receive information, interpret it and use it to guide their
                actions.
              </p>

              <p>
                The word <strong className="text-slate-900">cognitive</strong>{" "}
                relates to knowing and understanding. Cognitive processes
                help people recognize objects, remember past experiences,
                solve problems, form judgments and learn new skills.
              </p>

              <p>
                For example, when a person reads a question, the mind must
                recognize the words, understand their meaning, retrieve
                relevant knowledge, think about the answer and communicate
                a response. Cognitive psychology examines these connected
                mental activities.
              </p>
            </div>
          </div>

          <aside className="rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 to-indigo-50 p-7 sm:p-8">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-blue-700 shadow-sm">
              <BrainCircuit size={30} />
            </div>

            <h3 className="mt-6 text-xl font-bold text-slate-900">
              The Central Idea
            </h3>

            <p className="mt-3 leading-7 text-slate-700">
              People do not simply react to information. They interpret it,
              connect it with existing knowledge, remember relevant
              experiences and use it to decide how to respond.
            </p>

            <div className="mt-6 border-t border-blue-200 pt-5">
              <p className="text-sm font-bold text-blue-800">
                Key Areas of Study
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {[
                  "Memory",
                  "Attention",
                  "Perception",
                  "Language",
                  "Reasoning",
                  "Learning",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-lg border border-blue-100 bg-white px-3 py-2 text-sm font-bold text-blue-800"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>
<AdSlot />
      {/* Information processing model */}
      <section className="bg-slate-50 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Information Processing"
            title="How Does the Mind Process Information?"
            description="One useful way to understand cognitive activity is to examine how information enters the system, receives attention, connects with memory and leads to a response."
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {processingStages.map((stage) => (
              <StageCard key={stage.number} stage={stage} />
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-blue-100 bg-white p-6 sm:p-8">
            <p className="text-sm font-bold uppercase tracking-wider text-blue-700">
              Simplified Information-Processing Model
            </p>

            <div className="mt-6 grid items-center gap-3 sm:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr]">
              {[
                ["Input", "Receive information"],
                ["Attention", "Select relevant details"],
                ["Memory", "Use stored knowledge"],
                ["Response", "Think or act"],
              ].map(([title, description], index) => (
                <div key={title} className="contents">
                  <div className="rounded-xl bg-blue-50 p-4 text-center">
                    <p className="font-bold text-blue-900">{title}</p>
                    <p className="mt-1 text-xs leading-5 text-slate-600">
                      {description}
                    </p>
                  </div>

                  {index !== 3 && (
                    <ArrowRight
                      size={21}
                      className="mx-auto rotate-90 text-blue-500 sm:rotate-0"
                    />
                  )}
                </div>
              ))}
            </div>

            <p className="mt-6 text-sm leading-7 text-slate-600">
              This is a simplified teaching model, not a rigid sequence.
              Cognitive processes can interact, overlap and influence one
              another. For example, existing knowledge can affect what a
              person notices and how new information is interpreted.
            </p>
          </div>
        </div>
      </section>

      {/* Cognitive processes */}
      <section
        id="cognitive-processes"
        className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20"
      >
        <SectionHeading
          eyebrow="Core Areas"
          title="Major Cognitive Processes"
          description="The mind uses several connected processes to understand information, learn from experiences and respond to different situations."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cognitiveProcesses.map((item) => (
            <ProcessCard key={item.title} item={item} />
          ))}
        </div>
      </section>
<AdSlot />
      {/* Major concepts */}
      <section className="bg-indigo-50/60 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Important Ideas"
            title="Key Concepts in Cognitive Psychology"
            description="Researchers use several concepts to explain how people represent knowledge, interpret experiences and process information."
          />

          <div className="grid gap-5 sm:grid-cols-2">
            {majorConcepts.map((concept) => {
              const Icon = concept.icon;

              return (
                <article
                  key={concept.title}
                  className="flex gap-5 rounded-2xl border border-indigo-100 bg-white p-6"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-100 text-indigo-700">
                    <Icon size={24} />
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-slate-900">
                      {concept.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {concept.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-8 rounded-2xl border border-indigo-100 bg-white p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                <Search size={22} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  Example: How a Schema Influences Understanding
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  Imagine entering a restaurant for the first time. Your
                  previous knowledge of restaurants may lead you to expect
                  a menu, tables, a cashier and food service. This organized
                  knowledge helps you understand the unfamiliar environment
                  without learning every detail from the beginning.
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  This illustrates how existing mental structures can help
                  people interpret new experiences. Such structures are
                  commonly called schemas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Characteristics */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Key Features"
              title="Characteristics of Cognitive Psychology"
              description="Cognitive psychology uses systematic investigation to understand mental activities and their relationship with behaviour."
            />

            <div className="space-y-4">
              {keyCharacteristics.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    size={21}
                    className="mt-1 shrink-0 text-blue-600"
                  />
                  <p className="leading-7 text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-7 sm:p-9">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-blue-700 shadow-sm">
              <Network size={30} />
            </div>

            <h3 className="mt-6 text-2xl font-bold text-slate-900">
              Why Do Two People Interpret the Same Situation Differently?
            </h3>

            <p className="mt-4 leading-7 text-slate-600">
              People can interpret the same event differently because
              their previous experiences, expectations, attention and
              existing knowledge may not be the same.
            </p>

            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-blue-100 bg-white p-5">
                <p className="font-bold text-blue-900">Person A</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Interprets a difficult task as an opportunity to learn.
                </p>
              </div>

              <div className="rounded-xl border border-indigo-100 bg-white p-5">
                <p className="font-bold text-indigo-900">Person B</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Interprets the same task as a possible source of failure.
                </p>
              </div>
            </div>

            <p className="mt-5 text-sm leading-7 text-slate-600">
              Their interpretations may influence their emotional
              responses and subsequent behaviour.
            </p>
          </div>
        </div>
      </section>

      {/* Real-life examples */}
      <section
        id="real-life-examples"
        className="bg-slate-50 py-16 lg:py-20"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Psychology in Everyday Life"
            title="Real-Life Examples of Cognitive Psychology"
            description="Cognitive processes are involved in ordinary activities. The following examples show how multiple mental processes work together."
          />

          <div className="grid gap-6 lg:grid-cols-2">
            {exampleScenarios.map((scenario, index) => (
              <ExampleScenario
                key={scenario.title}
                scenario={scenario}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
<AdSlot />
      {/* Applications */}
      <section
        id="applications"
        className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20"
      >
        <SectionHeading
          eyebrow="Practical Importance"
          title="Applications of Cognitive Psychology"
          description="Understanding mental processes has practical value in many fields where people learn, communicate, make decisions and interact with technology."
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {applications.map((item) => (
            <ApplicationCard key={item.title} item={item} />
          ))}
        </div>
      </section>

      {/* Cognitive vs behavioural psychology */}
      <section className="bg-blue-50/70 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Understand the Difference"
            title="Cognitive Psychology vs Behavioural Psychology"
            description="Both approaches help explain human behaviour, but they traditionally emphasize different aspects of psychological experience."
          />

          <div className="overflow-hidden rounded-2xl border border-blue-100 bg-white">
            <div className="grid md:grid-cols-2">
              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-3">
                  <Brain className="text-blue-700" size={25} />
                  <h3 className="text-xl font-bold text-slate-900">
                    Cognitive Psychology
                  </h3>
                </div>

                <p className="mt-4 leading-7 text-slate-600">
                  Focuses on internal mental processes and how people
                  receive, interpret, store and use information.
                </p>

                <p className="mt-4 text-sm font-bold text-blue-800">
                  Example
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  Studying how a person remembers information and uses it
                  to solve a problem.
                </p>
              </div>

              <div className="border-t border-blue-100 bg-slate-50 p-6 sm:border-l sm:border-t-0 sm:p-8">
                <div className="flex items-center gap-3">
                  <Repeat className="text-indigo-700" size={25} />
                  <h3 className="text-xl font-bold text-slate-900">
                    Behavioural Psychology
                  </h3>
                </div>

                <p className="mt-4 leading-7 text-slate-600">
                  Traditionally emphasizes observable behaviour and how
                  learning, reinforcement and environmental conditions
                  influence actions.
                </p>

                <p className="mt-4 text-sm font-bold text-indigo-800">
                  Example
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  Studying how rewards or consequences influence whether
                  a person repeats an action.
                </p>
              </div>
            </div>
          </div>

          <p className="mt-5 text-sm leading-7 text-slate-600">
            These are broad distinctions. Modern psychological approaches
            can combine insights about mental processes, learning,
            environment and observable behaviour.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
        <SectionHeading
          eyebrow="Common Questions"
          title="Frequently Asked Questions About Cognitive Psychology"
          description="Quick answers to common questions about the study of human thinking and mental processes."
        />

        <div className="max-w-4xl space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={faq.question}
              className="group rounded-2xl border border-slate-200 bg-white p-5 open:border-blue-200 open:bg-blue-50/40 sm:p-6"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-slate-900">
                <span>{faq.question}</span>
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700 transition-transform group-open:rotate-45">
                  <span className="text-xl leading-none">+</span>
                </span>
              </summary>

              <p className="mt-4 border-t border-slate-100 pt-4 text-sm leading-7 text-slate-600">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </section>
<AdSlot />
      {/* Summary */}
      <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-8 lg:pb-20">
        <div className="rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-7 sm:p-10">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-blue-700 shadow-sm">
              <ClipboardList size={25} />
            </div>
            <p className="text-sm font-bold uppercase tracking-wider text-blue-700">
              Key Takeaways
            </p>
          </div>

          <h2 className="mt-5 text-2xl font-bold text-slate-900 sm:text-3xl">
            Why Is Cognitive Psychology Important?
          </h2>

          <p className="mt-5 max-w-4xl leading-8 text-slate-700">
            Cognitive psychology provides a scientific understanding of
            how people think, learn, remember, interpret information and
            make decisions. It explains the mental processes involved in
            everyday activities and helps researchers understand how
            knowledge and experience influence behaviour.
          </p>

          <p className="mt-4 max-w-4xl leading-8 text-slate-700">
            Its applications extend to education, healthcare, technology,
            business and many other fields. By understanding how the mind
            processes information, we can better understand how people
            learn, solve problems and interact with the world.
          </p>

          <div className="mt-7 flex flex-wrap gap-2">
            {[
              "Perception",
              "Attention",
              "Memory",
              "Thinking",
              "Reasoning",
              "Decision-Making",
            ].map((item) => (
              <span
                key={item}
                className="rounded-lg border border-blue-100 bg-white px-3 py-2 text-sm font-bold text-blue-800"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
