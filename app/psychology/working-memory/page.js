
import {
  Brain,
  BookOpen,
  Clock,
  Eye,
  Ear,
  RefreshCw,
  Layers,
  Lightbulb,
  Target,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  GraduationCap,
  MessageSquare,
  Calculator,
  ClipboardList,
  Zap,
  Network,
} from "lucide-react";
import AdSlot from "../../../components/AdSlot";

export const metadata = {
  title: "Working Memory - Meaning, Model, Capacity and Examples | PriceTag HUB",
  description:
    "Understand working memory in psychology, including Baddeley and Hitch's model, its four components, capacity, duration, examples and importance in learning.",
};

const SectionHeading = ({ eyebrow, title, description, dark = false }) => (
  <div className="mb-6">
    {eyebrow && (
      <p
        className={`mb-2 text-xs font-bold uppercase tracking-wider ${
          dark ? "text-blue-300" : "text-blue-700"
        }`}
      >
        {eyebrow}
      </p>
    )}
    <h2
      className={`text-2xl sm:text-3xl font-bold tracking-tight ${
        dark ? "text-white" : "text-slate-900"
      }`}
    >
      {title}
    </h2>
    {description && (
      <p
        className={`mt-3 max-w-3xl text-sm sm:text-base leading-7 ${
          dark ? "text-slate-300" : "text-slate-600"
        }`}
      >
        {description}
      </p>
    )}
  </div>
);

const InfoCard = ({ icon: Icon, title, children, color = "blue" }) => {
  const styles = {
    blue: "bg-blue-50 border-blue-100 text-blue-700",
    violet: "bg-violet-50 border-violet-100 text-violet-700",
    amber: "bg-amber-50 border-amber-100 text-amber-700",
    emerald: "bg-emerald-50 border-emerald-100 text-emerald-700",
    rose: "bg-rose-50 border-rose-100 text-rose-700",
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div
        className={`mb-3 flex h-10 w-10 items-center justify-center rounded-xl border ${styles[color]}`}
      >
        <Icon size={20} />
      </div>
      <h3 className="font-bold text-slate-900">{title}</h3>
      <div className="mt-2 text-sm leading-6 text-slate-600">{children}</div>
    </div>
  );
};

const ComponentCard = ({ number, title, subtitle, icon: Icon, color, children }) => (
  <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
    <div className={`flex items-center gap-3 border-b border-slate-100 p-4 ${color}`}>
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/80">
        <Icon size={21} className="text-slate-800" />
      </div>
      <div>
        <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
          Component {number}
        </p>
        <h3 className="font-bold text-slate-900">{title}</h3>
        <p className="text-xs text-slate-600">{subtitle}</p>
      </div>
    </div>
    <div className="p-5 text-sm leading-6 text-slate-600">{children}</div>
  </div>
);

export default function WorkingMemoryPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12">

        {/* Hero */}
        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-900 p-6 text-white sm:p-10">
          <div className="relative z-10 max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-300/30 bg-blue-400/10 px-3 py-1.5 text-xs font-bold text-blue-200">
              <Brain size={14} />
              Psychology · Cognitive Psychology
            </div>

            <h1 className="max-w-2xl text-3xl font-bold leading-tight sm:text-4xl">
              Working Memory
            </h1>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-blue-100 sm:text-base">
              The mental workspace that allows us to temporarily hold
              information and work with it while thinking, learning,
              understanding and solving problems.
            </p>

            <div className="mt-6 flex flex-wrap gap-3 text-xs font-bold">
              <span className="rounded-lg bg-white/10 px-3 py-2">
                Temporary information processing
              </span>
              <span className="rounded-lg bg-white/10 px-3 py-2">
                Attention and reasoning
              </span>
              <span className="rounded-lg bg-white/10 px-3 py-2">
                Learning and comprehension
              </span>
            </div>
          </div>
          <div className="pointer-events-none absolute -right-10 -top-12 hidden h-64 w-64 rounded-full border border-blue-300/20 sm:block" />
          <div className="pointer-events-none absolute -right-2 top-0 hidden h-48 w-48 rounded-full border border-blue-300/20 sm:block" />
          <Brain className="pointer-events-none absolute bottom-5 right-8 hidden h-32 w-32 text-blue-300/10 sm:block" />
        </section>

        {/* Introduction */}
        <section className="mt-12">
          <SectionHeading
            eyebrow="01 · Basic understanding"
            title="What Is Working Memory?"
            description="Working memory is a cognitive system responsible for temporarily holding information and actively manipulating it to complete mental tasks."
          />

          <div className="grid gap-6 md:grid-cols-[1.35fr_0.65fr]">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
              <p className="text-sm leading-7 text-slate-600">
                Imagine someone tells you a phone number. You repeat the
                digits in your mind while opening the dialer. You are not
                simply storing the number; you are keeping it available
                and using it to perform an action.
              </p>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                This temporary mental workspace is called <strong>working
                memory</strong>. It helps us follow instructions, understand
                sentences, calculate mentally, compare ideas and make
                decisions.
              </p>
              <div className="mt-5 rounded-xl border border-blue-100 bg-blue-50 p-4">
                <p className="text-sm font-bold text-blue-900">
                  Remember this distinction
                </p>
                <p className="mt-1 text-sm leading-6 text-blue-800">
                  Working memory is not just about remembering information.
                  It also involves actively processing and using that
                  information.
                </p>
              </div>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-indigo-600 to-blue-700 p-5 text-white">
              <Brain className="mb-4 h-9 w-9 text-blue-100" />
              <p className="text-xs font-bold uppercase tracking-wider text-blue-200">
                Simple definition
              </p>
              <p className="mt-3 text-xl font-bold leading-8">
                Working memory is the mind's temporary workspace for holding
                and manipulating information.
              </p>
            </div>
          </div>
        </section>
<AdSlot />
        {/* Everyday examples */}
        <section className="mt-14">
          <SectionHeading
            eyebrow="02 · Everyday examples"
            title="How Does Working Memory Work in Daily Life?"
            description="Working memory is involved in many ordinary activities. It often operates so quickly that we do not notice it."
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <InfoCard icon={Calculator} title="Mental calculation" color="blue">
              Solving 25 × 4 in your head requires keeping numbers and
              intermediate results available while calculating.
            </InfoCard>
            <InfoCard icon={MessageSquare} title="Understanding language" color="violet">
              You retain the beginning of a sentence while processing its
              remaining words to understand the complete meaning.
            </InfoCard>
            <InfoCard icon={ClipboardList} title="Following instructions" color="amber">
              Remembering a sequence such as collecting a document,
              signing it and submitting it.
            </InfoCard>
            <InfoCard icon={BookOpen} title="Reading and learning" color="emerald">
              Connecting a newly read idea with information from the
              previous paragraph.
            </InfoCard>
          </div>
        </section>

        {/* Model */}
        <section className="mt-14">
          <SectionHeading
            eyebrow="03 · Major psychological model"
            title="Baddeley and Hitch's Working Memory Model"
            description="In 1974, psychologists Alan Baddeley and Graham Hitch proposed a model that challenged the idea of short-term memory as a single, simple storage system."
          />

          <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-7">
            <p className="mb-6 text-sm leading-7 text-slate-600">
              Their model describes working memory as a system with multiple
              interacting components. The original model included three
              components. Baddeley later added the episodic buffer.
            </p>

            <div className="mx-auto max-w-3xl">
              <div className="mx-auto max-w-sm rounded-2xl border-2 border-indigo-200 bg-indigo-50 p-4 text-center">
                <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-100 text-indigo-700">
                  <Target size={21} />
                </div>
                <h3 className="font-bold text-indigo-950">Central Executive</h3>
                <p className="mt-1 text-xs text-indigo-800">
                  Directs attention and coordinates the system
                </p>
              </div>

              <div className="mx-auto h-8 w-px bg-slate-300" />
              <div className="mx-auto h-px w-4/5 bg-slate-300" />
              <div className="grid grid-cols-3">
                {["bg-blue-100", "bg-violet-100", "bg-emerald-100"].map((color, index) => (
                  <div key={index} className="flex justify-center">
                    <div className="h-6 w-px bg-slate-300" />
                  </div>
                ))}
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                <div className="rounded-xl border border-blue-200 bg-blue-50 p-3 text-center">
                  <Ear className="mx-auto mb-2 text-blue-700" size={22} />
                  <p className="text-sm font-bold text-blue-950">Phonological Loop</p>
                  <p className="mt-1 text-xs text-blue-800">
                    Speech and sound information
                  </p>
                </div>
                <div className="rounded-xl border border-violet-200 bg-violet-50 p-3 text-center">
                  <Eye className="mx-auto mb-2 text-violet-700" size={22} />
                  <p className="text-sm font-bold text-violet-950">
                    Visuospatial Sketchpad
                  </p>
                  <p className="mt-1 text-xs text-violet-800">
                    Visual and spatial information
                  </p>
                </div>
                <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-3 text-center">
                  <Layers className="mx-auto mb-2 text-emerald-700" size={22} />
                  <p className="text-sm font-bold text-emerald-950">Episodic Buffer</p>
                  <p className="mt-1 text-xs text-emerald-800">
                    Integrated information
                  </p>
                </div>
              </div>
            </div>

            <p className="mt-6 text-center text-xs text-slate-500">
              Simplified representation of the multicomponent working memory model
            </p>
          </div>
        </section>

        {/* Four components */}
        <section className="mt-14">
          <SectionHeading
            eyebrow="04 · Four components"
            title="The Four Components Explained"
            description="Each component performs a different role in temporarily maintaining and processing information."
          />

          <div className="grid gap-4 md:grid-cols-2">
            <ComponentCard
              number="01"
              title="Central Executive"
              subtitle="Attention and control"
              icon={Target}
              color="bg-indigo-50"
            >
              The central executive directs attention, coordinates the other
              components and helps select which information deserves mental
              effort. It is involved in switching between tasks, focusing
              attention and managing competing demands.

              <div className="mt-4 rounded-xl bg-indigo-50 p-3 text-indigo-900">
                <strong>Example:</strong> Listening to a teacher while
                ignoring nearby conversations.
              </div>
            </ComponentCard>

            <ComponentCard
              number="02"
              title="Phonological Loop"
              subtitle="Speech and sound information"
              icon={Ear}
              color="bg-blue-50"
            >
              The phonological loop temporarily maintains verbal and
              sound-based information. It is commonly explained through
              two parts: a phonological store that holds speech-like
              information briefly, and an articulatory rehearsal process
              that refreshes it through repetition.

              <div className="mt-4 rounded-xl bg-blue-50 p-3 text-blue-900">
                <strong>Example:</strong> Repeating a new telephone number
                silently until you can write it down.
              </div>
            </ComponentCard>

            <ComponentCard
              number="03"
              title="Visuospatial Sketchpad"
              subtitle="Visual and spatial information"
              icon={Eye}
              color="bg-violet-50"
            >
              This component temporarily maintains and manipulates visual
              and spatial information. It helps us picture objects,
              understand layouts and mentally rotate shapes.

              <div className="mt-4 rounded-xl bg-violet-50 p-3 text-violet-900">
                <strong>Example:</strong> Imagining how a piece of furniture
                will fit into a room before moving it.
              </div>
            </ComponentCard>

            <ComponentCard
              number="04"
              title="Episodic Buffer"
              subtitle="Combining different information"
              icon={Layers}
              color="bg-emerald-50"
            >
              Added by Baddeley in 2000, the episodic buffer integrates
              information from different sources into a temporary,
              coherent representation. It can combine information from
              the other working memory components with relevant
              information from long-term memory.

              <div className="mt-4 rounded-xl bg-emerald-50 p-3 text-emerald-900">
                <strong>Example:</strong> Remembering a story by connecting
                its words, images and your existing knowledge.
              </div>
            </ComponentCard>
          </div>
        </section>

        {/* Working memory process */}
        <section className="mt-14">
          <SectionHeading
            eyebrow="05 · Information processing"
            title="How Information Moves Through Working Memory"
            description="Working memory involves receiving information, directing attention, temporarily maintaining it and using it to complete a task."
          />

          <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-7">
            <div className="grid gap-3 sm:grid-cols-4">
              {[
                {
                  icon: Eye,
                  title: "Information arrives",
                  detail: "You see, hear or receive information.",
                  color: "bg-blue-50 text-blue-700",
                },
                {
                  icon: Target,
                  title: "Attention is directed",
                  detail: "Relevant information receives mental focus.",
                  color: "bg-indigo-50 text-indigo-700",
                },
                {
                  icon: RefreshCw,
                  title: "Information is maintained",
                  detail: "The mind temporarily holds and organizes it.",
                  color: "bg-violet-50 text-violet-700",
                },
                {
                  icon: Lightbulb,
                  title: "Information is used",
                  detail: "You reason, decide, respond or solve a problem.",
                  color: "bg-emerald-50 text-emerald-700",
                },
              ].map((step, index) => (
                <div key={step.title} className="relative rounded-xl border border-slate-200 p-4">
                  <div className={`mb-3 flex h-10 w-10 items-center justify-center rounded-xl ${step.color}`}>
                    <step.icon size={21} />
                  </div>
                  <p className="text-xs font-bold text-slate-400">STEP {index + 1}</p>
                  <h3 className="mt-1 font-bold text-slate-900">{step.title}</h3>
                  <p className="mt-2 text-xs leading-5 text-slate-600">{step.detail}</p>
                  {index < 3 && (
                    <ArrowRight className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 text-slate-400 sm:block" size={19} />
                  )}
                </div>
              ))}
            </div>
            <p className="mt-5 text-xs leading-5 text-slate-500">
              This is a simplified learning illustration, not a rigid sequence.
              Working memory processes can overlap and interact.
            </p>
          </div>
        </section>
<AdSlot />
        {/* Capacity and duration */}
        <section className="mt-14">
          <SectionHeading
            eyebrow="06 · Capacity and duration"
            title="How Much Information Can Working Memory Hold?"
            description="Working memory is limited. The amount of information we can actively maintain depends on factors such as attention, task complexity and how information is grouped."
          />

          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
              <div className="mb-4 flex items-center gap-3">
                <Layers className="text-blue-700" size={23} />
                <h3 className="font-bold text-slate-900">Capacity</h3>
              </div>
              <p className="text-sm leading-7 text-slate-600">
                Working memory has a limited capacity. A widely cited
                estimate from Nelson Cowan suggests that the focus of
                attention can hold around four chunks of information
                under certain conditions.
              </p>
              <div className="mt-5 rounded-xl bg-blue-50 p-4">
                <p className="text-sm font-bold text-blue-950">What is a chunk?</p>
                <p className="mt-2 text-sm leading-6 text-blue-900">
                  A chunk is a meaningful unit of information. For example,
                  the digits 1, 9, 4 and 7 can be grouped as the year 1947,
                  making them easier to handle as one meaningful unit.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
              <div className="mb-4 flex items-center gap-3">
                <Clock className="text-violet-700" size={23} />
                <h3 className="font-bold text-slate-900">Duration</h3>
              </div>
              <p className="text-sm leading-7 text-slate-600">
                Information in working memory is temporary. It may be lost
                when attention shifts or when new information interferes.
                Rehearsal and active use can help maintain information.
              </p>
              <div className="mt-5 rounded-xl bg-violet-50 p-4">
                <p className="text-sm font-bold text-violet-950">
                  Important distinction
                </p>
                <p className="mt-2 text-sm leading-6 text-violet-900">
                  There is no single fixed duration that applies to all
                  working memory tasks. The time information remains
                  available depends on the task and whether it is actively
                  maintained.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Capacity example */}
        <section className="mt-14">
          <SectionHeading
            eyebrow="07 · Understand through an example"
            title="Why Grouping Information Helps"
            description="Chunking organizes separate pieces of information into meaningful groups, making them easier to maintain and use."
          />

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-rose-200 bg-white p-5">
              <p className="text-xs font-bold uppercase tracking-wide text-rose-700">
                Without grouping
              </p>
              <div className="my-5 flex flex-wrap gap-2">
                {"1 9 4 7 2 0 2 6".split(" ").map((digit, index) => (
                  <div key={index} className="flex h-11 w-10 items-center justify-center rounded-lg border border-rose-200 bg-rose-50 font-bold text-rose-800">
                    {digit}
                  </div>
                ))}
              </div>
              <p className="text-sm leading-6 text-slate-600">
                Each digit is treated as a separate piece of information.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-200 bg-white p-5">
              <p className="text-xs font-bold uppercase tracking-wide text-emerald-700">
                With meaningful grouping
              </p>
              <div className="my-5 flex flex-wrap gap-2">
                {["1947", "2026"].map((group) => (
                  <div key={group} className="flex h-11 items-center justify-center rounded-lg border border-emerald-200 bg-emerald-50 px-4 font-bold text-emerald-800">
                    {group}
                  </div>
                ))}
              </div>
              <p className="text-sm leading-6 text-slate-600">
                The digits are grouped into two meaningful year-like units.
              </p>
            </div>
          </div>
          <p className="mt-3 text-xs leading-5 text-slate-500">
            Illustration only: chunking can make information easier to
            process, but the benefit depends on familiarity and meaning.
          </p>
        </section>

        {/* Working memory vs short term memory */}
        <section className="mt-14">
          <SectionHeading
            eyebrow="08 · Important distinction"
            title="Working Memory vs Short-Term Memory"
            description="These terms are related, but they are not always used to describe exactly the same thing."
          />

          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[540px] text-left text-sm">
                <thead className="bg-slate-100 text-slate-800">
                  <tr>
                    <th className="p-4 font-bold">Basis</th>
                    <th className="p-4 font-bold">Short-Term Memory</th>
                    <th className="p-4 font-bold">Working Memory</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-600">
                  <tr>
                    <td className="p-4 font-bold text-slate-800">Main idea</td>
                    <td className="p-4">Temporary storage of information.</td>
                    <td className="p-4">Temporary storage plus active processing.</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-slate-800">Focus</td>
                    <td className="p-4">Maintaining information briefly.</td>
                    <td className="p-4">Maintaining and manipulating information.</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-slate-800">Example</td>
                    <td className="p-4">Remembering a number briefly.</td>
                    <td className="p-4">Using that number to perform a calculation.</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-slate-800">Relationship</td>
                    <td className="p-4">A narrower concept in many theories.</td>
                    <td className="p-4">A broader system that includes active processing.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-4">
            <p className="text-sm leading-6 text-amber-900">
              <strong>Exam point:</strong> Short-term memory is often
              described mainly in terms of temporary storage, whereas
              working memory emphasizes both storage and manipulation.
              Some researchers use the terms differently, so context matters.
            </p>
          </div>
        </section>

        {/* Importance */}
        <section className="mt-14">
          <SectionHeading
            eyebrow="09 · Importance"
            title="Why Is Working Memory Important?"
            description="Working memory supports the mental activities required for learning, reasoning and everyday functioning."
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <InfoCard icon={GraduationCap} title="Academic learning" color="blue">
              Helps students follow lessons, understand explanations,
              connect concepts and solve multi-step questions.
            </InfoCard>
            <InfoCard icon={Calculator} title="Problem solving" color="violet">
              Allows us to keep relevant facts and intermediate results
              available while working toward a solution.
            </InfoCard>
            <InfoCard icon={MessageSquare} title="Communication" color="emerald">
              Supports understanding sentences, following conversations
              and remembering what someone said moments earlier.
            </InfoCard>
            <InfoCard icon={Target} title="Attention control" color="amber">
              Helps maintain task-relevant information while filtering
              out distractions and competing demands.
            </InfoCard>
            <InfoCard icon={Network} title="Reasoning" color="rose">
              Supports comparing alternatives, identifying relationships
              and drawing conclusions from available information.
            </InfoCard>
            <InfoCard icon={ClipboardList} title="Planning" color="blue">
              Helps keep goals, steps and relevant details in mind
              while carrying out a sequence of actions.
            </InfoCard>
          </div>
        </section>
<AdSlot />
        {/* Limitations */}
        <section className="mt-14">
          <SectionHeading
            eyebrow="10 · Limitations and difficulties"
            title="What Can Affect Working Memory?"
            description="Working memory performance can vary across situations. A demanding task or competing information can make it harder to maintain and use information."
          />

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <div className="mb-3 flex items-center gap-2">
                <AlertCircle className="text-amber-600" size={21} />
                <h3 className="font-bold text-slate-900">Common challenges</h3>
              </div>
              <ul className="space-y-3 text-sm leading-6 text-slate-600">
                <li className="flex gap-2">
                  <span className="mt-1 text-amber-600">•</span>
                  <span><strong>Distraction:</strong> Competing sounds or notifications can interrupt attention.</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 text-amber-600">•</span>
                  <span><strong>Information overload:</strong> Too many simultaneous demands can exceed available capacity.</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 text-amber-600">•</span>
                  <span><strong>Complex instructions:</strong> Multiple steps may be difficult to maintain without notes or repetition.</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 text-amber-600">•</span>
                  <span><strong>Interference:</strong> Similar or competing information can make retrieval and maintenance harder.</span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <div className="mb-3 flex items-center gap-2">
                <Zap className="text-emerald-600" size={21} />
                <h3 className="font-bold text-slate-900">Practical ways to reduce demands</h3>
              </div>
              <ul className="space-y-3 text-sm leading-6 text-slate-600">
                <li className="flex gap-2">
                  <CheckCircle2 className="mt-1 shrink-0 text-emerald-600" size={16} />
                  Break complex tasks into smaller steps.
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="mt-1 shrink-0 text-emerald-600" size={16} />
                  Write down instructions and important details.
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="mt-1 shrink-0 text-emerald-600" size={16} />
                  Use diagrams, examples and meaningful groups.
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="mt-1 shrink-0 text-emerald-600" size={16} />
                  Reduce unnecessary distractions during demanding work.
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="mt-1 shrink-0 text-emerald-600" size={16} />
                  Connect new information with knowledge already learned.
                </li>
              </ul>
            </div>
          </div>
          <p className="mt-4 text-xs leading-5 text-slate-500">
            These strategies reduce the mental demands of tasks. They should
            not be interpreted as a guaranteed way to permanently increase
            working memory capacity.
          </p>
        </section>

        {/* Misconceptions */}
        <section className="mt-14">
          <SectionHeading
            eyebrow="11 · Clear the confusion"
            title="Common Misconceptions About Working Memory"
            description="A few distinctions help prevent common errors in psychology examinations and everyday discussions."
          />

          <div className="space-y-3">
            {[
              {
                wrong: "Working memory and long-term memory are the same.",
                correct: "Working memory temporarily maintains and processes information. Long-term memory stores information over much longer periods.",
              },
              {
                wrong: "Working memory only stores information.",
                correct: "It also manipulates information, supports attention and helps perform mental tasks.",
              },
              {
                wrong: "Everyone can hold exactly four items.",
                correct: "Capacity estimates depend on how information is grouped, the task and the conditions under which memory is tested.",
              },
              {
                wrong: "Working memory is a permanent storage location.",
                correct: "It is a temporary and limited mental workspace, not a permanent store of memories.",
              },
              {
                wrong: "Working memory capacity can be increased without limits through brain exercises.",
                correct: "Practice may improve performance on particular tasks, but broad and lasting increases in general working memory capacity should not be assumed.",
              },
            ].map((item, index) => (
              <div key={index} className="rounded-xl border border-slate-200 bg-white p-4">
                <p className="text-sm font-bold text-rose-800">
                  <span className="mr-2">✕</span>{item.wrong}
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  <span className="mr-2 font-bold text-emerald-700">✓</span>
                  {item.correct}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Exam focus */}
        <section className="mt-14 rounded-3xl bg-slate-950 p-6 text-white sm:p-8">
          <SectionHeading
            eyebrow="12 · Competitive examination focus"
            title="Important Points to Remember"
            description="These are useful facts and conceptual distinctions for psychology, education and general competitive examinations."
            dark
          />

          <div className="grid gap-3 sm:grid-cols-2">
            {[
              ["1974", "Baddeley and Hitch proposed the multicomponent working memory model."],
              ["Central Executive", "Directs attention and coordinates the working memory system."],
              ["Phonological Loop", "Temporarily maintains verbal and sound-based information."],
              ["Visuospatial Sketchpad", "Maintains visual and spatial information."],
              ["2000", "Baddeley added the episodic buffer to the model."],
              ["Episodic Buffer", "Integrates information from different sources into a coherent representation."],
              ["Nelson Cowan", "Associated with an estimate of about four chunks in the focus of attention."],
              ["Key distinction", "Working memory emphasizes both temporary storage and active processing."],
            ].map(([term, detail]) => (
              <div key={term} className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="font-bold text-blue-300">{term}</p>
                <p className="mt-1 text-sm leading-6 text-slate-300">{detail}</p>
              </div>
            ))}
          </div>
        </section>

  
<AdSlot />
        {/* FAQs */}
        <section className="mt-14">
          <SectionHeading
            eyebrow="14 · Frequently asked questions"
            title="Working Memory FAQs"
          />

          <div className="space-y-3">
            {[
              [
                "What is working memory in simple words?",
                "Working memory is the mind's temporary workspace. It allows us to hold information briefly and use it while performing a task.",
              ],
              [
                "Who developed the working memory model?",
                "Alan Baddeley and Graham Hitch proposed the multicomponent working memory model in 1974.",
              ],
              [
                "What are the four components of working memory?",
                "The four components are the central executive, phonological loop, visuospatial sketchpad and episodic buffer.",
              ],
              [
                "What is the difference between working memory and short-term memory?",
                "Short-term memory is commonly described as temporary storage, while working memory emphasizes both temporary storage and active manipulation of information.",
              ],
              [
                "Why is working memory important for students?",
                "It helps students follow explanations, understand reading material, perform calculations, connect concepts and complete multi-step tasks.",
              ],
              [
                "Does working memory have a limited capacity?",
                "Yes. It is limited, but the amount of information that can be maintained depends on factors such as chunking, task complexity and attention.",
              ],
            ].map(([question, answer]) => (
              <details key={question} className="group rounded-xl border border-slate-200 bg-white p-4">
                <summary className="cursor-pointer list-none pr-6 font-bold text-slate-900 marker:hidden">
                  <span className="flex items-center justify-between gap-3">
                    {question}
                    <span className="text-blue-700 transition-transform group-open:rotate-180">
                      <ArrowRight className="rotate-90" size={18} />
                    </span>
                  </span>
                </summary>
                <p className="mt-3 border-t border-slate-100 pt-3 text-sm leading-7 text-slate-600">
                  {answer}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* Conclusion and references */}
        <section className="mt-14">
          <div className="rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-indigo-50 p-6 sm:p-8">
            <div className="flex items-center gap-2 text-blue-800">
              <Lightbulb size={22} />
              <h2 className="text-xl font-bold">Conclusion</h2>
            </div>
            <p className="mt-4 text-sm leading-7 text-slate-700">
              Working memory is an essential part of human cognition. It
              allows us to temporarily maintain information while using
              it for reasoning, understanding, learning and decision-making.
              Baddeley and Hitch's model explains this process through
              interacting components: the central executive, phonological
              loop, visuospatial sketchpad and episodic buffer. Understanding
              these components helps explain how people process information
              and why complex mental tasks can become difficult.
            </p>
          </div>

          <div className="mt-8">
            <h2 className="text-lg font-bold text-slate-900">
              Further Reading and References
            </h2>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
              <li>
                <strong>Baddeley, A. D., & Hitch, G. (1974).</strong>{" "}
                Working Memory. In G. A. Bower (Ed.), The Psychology of Learning and Motivation.
              </li>
              <li>
                <strong>Baddeley, A. (2000).</strong>{" "}
                The episodic buffer: a new component of working memory? Trends in Cognitive Sciences.
              </li>
              <li>
                <strong>Cowan, N. (2001).</strong>{" "}
                The magical number 4 in short-term memory: A reconsideration of mental storage capacity. Behavioral and Brain Sciences.
              </li>
              <li>
                <strong>OpenStax Psychology 2e.</strong>{" "}
                <a
                  href="https://openstax.org/details/books/psychology-2e"
                  target="_blank"
                  rel="noreferrer"
                  className="font-bold text-blue-700 underline underline-offset-2"
                >
                  Psychology 2e textbook
                </a>
              </li>
            </ul>
          </div>
        </section>

      </div>
    </main>
  );
}

