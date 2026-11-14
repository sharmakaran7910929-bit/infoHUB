
import Link from "next/link";
import {
  Brain,
  BrainCircuit,
  Eye,
  Ear,
  Hand,
  Clock,
  Database,
  Search,
  BookOpen,
  Lightbulb,
  Repeat,
  GraduationCap,
  Music,
  Camera,
  MessageCircle,
  Calculator,
  MapPin,
  UserRound,
  Layers,
  Activity,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  Target,
  Puzzle,
  Zap,
  Footprints,
  Bookmark,
  RefreshCw,
  Network,
  Timer,
} from "lucide-react";
import AdSlot from "../../../components/AdSlot";

export const metadata = {
  title:
    "Types of Memory in Psychology | Sensory, Short-Term & Long-Term Memory | PriceTag HUB",
  description:
    "Learn the types of memory in psychology, including sensory, short-term, working and long-term memory. Understand iconic, echoic, episodic, semantic and procedural memory with real-life examples.",
};

const SectionHeading = ({ eyebrow, title, description, dark = false }) => (
  <div className="mb-8">
    {eyebrow && (
      <p
        className={`mb-2 text-xs sm:text-sm font-bold uppercase tracking-wider ${
          dark ? "text-blue-300" : "text-blue-600"
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
        className={`mt-3 text-sm sm:text-base leading-7 max-w-3xl ${
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

const ExampleBox = ({ title = "Real-life example", children }) => (
  <div className="mt-4 rounded-xl border border-blue-100 bg-blue-50/70 p-4">
    <p className="mb-1 flex items-center gap-2 text-sm font-bold text-blue-800">
      <Lightbulb size={16} />
      {title}
    </p>
    <p className="text-sm leading-7 text-slate-700">{children}</p>
  </div>
);

const MemoryTypeCard = ({
  number,
  title,
  subtitle,
  description,
  example,
  icon: Icon,
  color = "blue",
}) => {
  const colors = {
    blue: "bg-blue-100 text-blue-700",
    purple: "bg-purple-100 text-purple-700",
    green: "bg-emerald-100 text-emerald-700",
    orange: "bg-orange-100 text-orange-700",
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start gap-4">
        <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${colors[color]}`}>
          <Icon size={23} />
        </div>
        <div className="min-w-0">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
            {number}
          </p>
          <h3 className="text-lg font-bold text-slate-900">{title}</h3>
          <p className="mt-1 text-sm font-medium text-blue-700">{subtitle}</p>
        </div>
      </div>
      <p className="mt-4 text-sm leading-7 text-slate-600">{description}</p>
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

export default function TypesOfMemoryPage() {
  return (
    <main className="min-h-screen bg-white text-slate-800">
      <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8 sm:py-12">

        <div className="mx-auto max-w-5xl">

          {/* HERO */}
          <section className="relative overflow-hidden rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-6 sm:p-10">
            <div className="relative z-10 max-w-3xl">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-3 py-1.5 text-xs font-bold text-blue-700">
                <Brain size={15} />
                Psychology / Cognitive Psychology
              </div>

              <h1 className="text-3xl font-bold leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
                Types of Memory in Psychology
              </h1>

              <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
                Why do you remember your childhood birthday but sometimes
                forget where you placed your phone just a few minutes ago?
                Human memory is not a single storage system. It involves
                different processes and systems that help us receive,
                temporarily hold, organize and retrieve information.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {["Sensory Memory", "Short-Term Memory", "Working Memory", "Long-Term Memory"].map((item) => (
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
                <BrainCircuit size={95} className="text-blue-600" strokeWidth={1.2} />
              </div>
            </div>
          </section>

          {/* INTRODUCTION */}
          <section className="mt-12">
            <SectionHeading
              eyebrow="Understanding memory"
              title="What Is Memory in Psychology?"
              description="Memory is a cognitive process that allows people to encode, retain and later retrieve information and experiences."
            />

            <p className="text-sm leading-8 text-slate-600">
              Memory makes learning, communication, decision-making and
              everyday activities possible. Without memory, we would have
              difficulty recognizing familiar faces, understanding language,
              remembering instructions or learning from past experiences.
            </p>

            <p className="mt-4 text-sm leading-8 text-slate-600">
              In psychology, memory is studied as a collection of connected
              processes rather than one simple ability. Information first
              enters through our senses, may be held temporarily, and can
              sometimes become part of long-term knowledge.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <InfoCard icon={Layers} title="Encoding" color="blue">
                Converting incoming information into a form that the brain
                can process and remember.
              </InfoCard>
              <InfoCard icon={Database} title="Storage" color="purple">
                Retaining information over time, from brief moments to
                potentially many years.
              </InfoCard>
              <InfoCard icon={Search} title="Retrieval" color="green">
                Accessing previously stored information when it is needed.
              </InfoCard>
            </div>

            <ExampleBox title="Understand the three processes">
              Imagine learning a friend's new phone number. You pay attention
              to the digits (encoding), keep them in mind or save them
              (storage), and recall them later when making a call (retrieval).
            </ExampleBox>
          </section>
<AdSlot />
          {/* MEMORY PROCESS DIAGRAM */}
          <section className="mt-14">
            <SectionHeading
              eyebrow="Visual explanation"
              title="How Does Memory Work?"
              description="A simplified information-processing model shows how information can move through different memory systems."
            />

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-7">
              <div className="grid gap-3 sm:grid-cols-3">
                <div className="rounded-xl border border-blue-200 bg-blue-50 p-4 text-center">
                  <Eye className="mx-auto text-blue-600" size={25} />
                  <h3 className="mt-2 font-bold text-slate-900">Information</h3>
                  <p className="mt-1 text-xs leading-6 text-slate-600">
                    Sights, sounds, touch and experiences
                  </p>
                </div>

                <div className="hidden items-center justify-center sm:flex">
                  <ArrowRight className="text-slate-400" size={24} />
                </div>

                <div className="rounded-xl border border-purple-200 bg-purple-50 p-4 text-center">
                  <Brain className="mx-auto text-purple-600" size={25} />
                  <h3 className="mt-2 font-bold text-slate-900">Encoding</h3>
                  <p className="mt-1 text-xs leading-6 text-slate-600">
                    Attention and processing
                  </p>
                </div>
              </div>

              <div className="my-3 flex justify-center sm:hidden">
                <ArrowRight className="rotate-90 text-slate-400" />
              </div>

              <div className="my-5 flex justify-center">
                <ArrowRight className="rotate-90 text-slate-400 sm:rotate-90" />
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                <div className="rounded-xl border border-blue-200 bg-white p-4 text-center">
                  <Clock className="mx-auto text-blue-600" size={25} />
                  <h3 className="mt-2 font-bold text-slate-900">Sensory Memory</h3>
                  <p className="mt-1 text-xs leading-6 text-slate-600">
                    Very brief sensory information
                  </p>
                </div>
                <div className="rounded-xl border border-orange-200 bg-white p-4 text-center">
                  <Activity className="mx-auto text-orange-600" size={25} />
                  <h3 className="mt-2 font-bold text-slate-900">
                    Short-Term / Working Memory
                  </h3>
                  <p className="mt-1 text-xs leading-6 text-slate-600">
                    Temporary holding and active processing
                  </p>
                </div>
                <div className="rounded-xl border border-emerald-200 bg-white p-4 text-center">
                  <Database className="mx-auto text-emerald-600" size={25} />
                  <h3 className="mt-2 font-bold text-slate-900">Long-Term Memory</h3>
                  <p className="mt-1 text-xs leading-6 text-slate-600">
                    Extended retention of information
                  </p>
                </div>
              </div>

              <div className="mt-5 rounded-xl border border-indigo-200 bg-indigo-50 p-4 text-center">
                <RefreshCw className="mx-auto text-indigo-600" size={23} />
                <h3 className="mt-2 font-bold text-slate-900">
                  Retrieval
                </h3>
                <p className="mt-1 text-xs leading-6 text-slate-600">
                  Previously learned information can be brought back into
                  awareness when needed.
                </p>
              </div>
            </div>

            <p className="mt-3 text-xs leading-6 text-slate-500">
              Note: This is a simplified teaching model, not a literal
              diagram of separate physical storage areas in the brain.
              Modern research recognizes that memory systems interact.
            </p>
          </section>

          {/* FOUR MAIN SYSTEMS */}
          <section className="mt-14">
            <SectionHeading
              eyebrow="Main memory systems"
              title="Four Important Types of Memory"
              description="These terms describe different aspects of memory. Sensory, short-term and long-term memory are commonly explained through the information-processing model, while working memory describes active temporary processing."
            />

            <div className="grid gap-5 sm:grid-cols-2">
              <MemoryTypeCard
                number="01"
                title="Sensory Memory"
                subtitle="Brief retention of sensory information"
                icon={Eye}
                color="blue"
                description="Sensory memory briefly preserves information received through the senses. It allows the brain to register what we see, hear or feel before that information disappears or receives further attention."
                example="You see a moving car pass in front of you. For a very brief moment, its visual appearance remains available even after it has moved out of sight."
              />

              <MemoryTypeCard
                number="02"
                title="Short-Term Memory"
                subtitle="Temporary holding of information"
                icon={Clock}
                color="orange"
                description="Short-term memory holds a limited amount of information for a brief period. Without rehearsal or further processing, much of this information may quickly be lost."
                example="Someone tells you a six-digit verification code. You keep the digits in mind long enough to enter them into an app."
              />

              <MemoryTypeCard
                number="03"
                title="Working Memory"
                subtitle="Holding and mentally manipulating information"
                icon={BrainCircuit}
                color="purple"
                description="Working memory is the mental workspace used to temporarily maintain and work with information. It supports reasoning, comprehension, mental calculations and following instructions."
                example="You calculate ₹450 minus ₹175 in your head while remembering the original amount and the subtraction you are performing."
              />

              <MemoryTypeCard
                number="04"
                title="Long-Term Memory"
                subtitle="Retention over extended periods"
                icon={Database}
                color="green"
                description="Long-term memory allows information and experiences to be retained for extended periods, potentially for a lifetime. Its contents include facts, personal experiences, skills and learned associations."
                example="You remember your school name, recognize a childhood friend or know how to ride a bicycle even after many years."
              />
            </div>
          </section>
<AdSlot />
          {/* SENSORY MEMORY */}
          <section className="mt-14">
            <SectionHeading
              eyebrow="Type 1"
              title="Sensory Memory and Its Types"
              description="Sensory memory is the initial, very brief retention of information received through sensory organs. Different sensory systems preserve different kinds of information."
            />

            <div className="grid gap-4 sm:grid-cols-3">
              <InfoCard icon={Eye} title="Iconic Memory" color="blue">
                Iconic memory is the brief visual sensory memory of images
                and visual information.
                <ExampleBox>
                  After looking at a bright camera flash, you may briefly
                  experience a visual impression even after the flash has
                  disappeared.
                </ExampleBox>
              </InfoCard>

              <InfoCard icon={Ear} title="Echoic Memory" color="purple">
                Echoic memory is the brief auditory sensory memory of sounds.
                <ExampleBox>
                  Someone says something while you are distracted. You
                  initially ask them to repeat it, but a moment later you
                  realize what they said.
                </ExampleBox>
              </InfoCard>

              <InfoCard icon={Hand} title="Haptic Memory" color="green">
                Haptic memory briefly retains information about touch and
                tactile sensations.
                <ExampleBox>
                  After touching a cold metal surface, you may briefly
                  retain the sensation of its temperature and texture.
                </ExampleBox>
              </InfoCard>
            </div>

            <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200">
              <div className="bg-slate-900 px-5 py-4">
                <h3 className="font-bold text-white">
                  Characteristics of Sensory Memory
                </h3>
              </div>
              <div className="grid gap-0 divide-y divide-slate-200 sm:grid-cols-2 sm:divide-x sm:divide-y-0">
                <div className="p-5">
                  <p className="text-sm font-bold text-slate-900">
                    Extremely brief duration
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    Visual iconic memory may last only a fraction of a
                    second. Echoic memory generally lasts longer, often
                    several seconds.
                  </p>
                </div>
                <div className="p-5">
                  <p className="text-sm font-bold text-slate-900">
                    Large initial sensory capacity
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    A substantial amount of sensory information is briefly
                    registered, but only some receives attention and further
                    processing.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* SHORT TERM VS WORKING */}
          <section className="mt-14">
            <SectionHeading
              eyebrow="Important distinction"
              title="Short-Term Memory vs Working Memory"
              description="These two concepts are related, but psychology does not treat them as exactly the same thing."
            />

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="rounded-2xl border border-orange-200 bg-orange-50/60 p-5">
                <div className="flex items-center gap-3">
                  <Clock className="text-orange-600" size={25} />
                  <h3 className="text-lg font-bold text-slate-900">
                    Short-Term Memory
                  </h3>
                </div>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  Primarily concerns temporarily maintaining information
                  for immediate use.
                </p>
                <ExampleBox>
                  Remembering a one-time password long enough to type it.
                </ExampleBox>
              </div>

              <div className="rounded-2xl border border-purple-200 bg-purple-50/60 p-5">
                <div className="flex items-center gap-3">
                  <BrainCircuit className="text-purple-600" size={25} />
                  <h3 className="text-lg font-bold text-slate-900">
                    Working Memory
                  </h3>
                </div>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  Involves temporarily maintaining information while also
                  processing, organizing or manipulating it.
                </p>
                <ExampleBox>
                  Remembering several prices while comparing them and
                  calculating which product is cheaper.
                </ExampleBox>
              </div>
            </div>

            <div className="mt-5 overflow-x-auto rounded-2xl border border-slate-200">
              <table className="w-full min-w-[480px] text-left text-sm">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="p-4 font-bold text-slate-800">Feature</th>
                    <th className="p-4 font-bold text-slate-800">Short-Term</th>
                    <th className="p-4 font-bold text-slate-800">Working</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-600">
                  <tr>
                    <td className="p-4 font-semibold text-slate-800">Main role</td>
                    <td className="p-4">Temporary retention</td>
                    <td className="p-4">Retention and processing</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-slate-800">Example</td>
                    <td className="p-4">Remembering a code</td>
                    <td className="p-4">Mental calculation</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-slate-800">Relationship</td>
                    <td className="p-4">Related concept</td>
                    <td className="p-4">Broader active processing system</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* WORKING MEMORY MODEL */}
          <section className="mt-14">
            <SectionHeading
              eyebrow="Cognitive psychology"
              title="Baddeley's Working Memory Model"
              description="Psychologist Alan Baddeley and Graham Hitch proposed an influential model in 1974. Baddeley later added the episodic buffer to the model."
            />

            <div className="rounded-2xl border border-purple-200 bg-gradient-to-br from-purple-50 to-blue-50 p-5 sm:p-7">
              <div className="mx-auto max-w-sm rounded-xl border border-purple-300 bg-white p-4 text-center shadow-sm">
                <BrainCircuit className="mx-auto text-purple-600" size={28} />
                <h3 className="mt-2 font-bold text-slate-900">
                  Central Executive
                </h3>
                <p className="mt-1 text-xs leading-6 text-slate-600">
                  Directs attention and coordinates the other components.
                </p>
              </div>

              <div className="mx-auto my-4 h-7 w-px bg-purple-300" />

              <div className="grid gap-3 sm:grid-cols-3">
                <div className="rounded-xl border border-blue-200 bg-white p-4 text-center">
                  <MessageCircle className="mx-auto text-blue-600" size={25} />
                  <h4 className="mt-2 font-bold text-slate-900">
                    Phonological Loop
                  </h4>
                  <p className="mt-2 text-xs leading-6 text-slate-600">
                    Maintains speech and sound-based information.
                  </p>
                  <p className="mt-3 rounded-lg bg-blue-50 p-2 text-xs font-medium text-blue-800">
                    Example: Repeating a phone number silently.
                  </p>
                </div>

                <div className="rounded-xl border border-orange-200 bg-white p-4 text-center">
                  <Eye className="mx-auto text-orange-600" size={25} />
                  <h4 className="mt-2 font-bold text-slate-900">
                    Visuospatial Sketchpad
                  </h4>
                  <p className="mt-2 text-xs leading-6 text-slate-600">
                    Maintains and manipulates visual and spatial information.
                  </p>
                  <p className="mt-3 rounded-lg bg-orange-50 p-2 text-xs font-medium text-orange-800">
                    Example: Mentally picturing a route.
                  </p>
                </div>

                <div className="rounded-xl border border-emerald-200 bg-white p-4 text-center">
                  <Layers className="mx-auto text-emerald-600" size={25} />
                  <h4 className="mt-2 font-bold text-slate-900">
                    Episodic Buffer
                  </h4>
                  <p className="mt-2 text-xs leading-6 text-slate-600">
                    Integrates information from different sources into
                    connected episodes.
                  </p>
                  <p className="mt-3 rounded-lg bg-emerald-50 p-2 text-xs font-medium text-emerald-800">
                    Example: Connecting words, images and past knowledge.
                  </p>
                </div>
              </div>
            </div>

            <p className="mt-4 text-sm leading-7 text-slate-600">
              These components work together. For example, when listening to
              a teacher explain a diagram, you may process spoken words,
              mentally examine the diagram and use your attention to
              understand how the information fits together.
            </p>
          </section>

          {/* LONG TERM MEMORY */}
          <section className="mt-14">
            <SectionHeading
              eyebrow="Type 4"
              title="Types of Long-Term Memory"
              description="Long-term memory is commonly divided into two major categories: explicit (declarative) memory and implicit (non-declarative) memory."
            />

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="rounded-2xl border border-blue-200 bg-blue-50/60 p-5">
                <div className="flex items-center gap-3">
                  <BookOpen className="text-blue-700" size={26} />
                  <div>
                    <h3 className="font-bold text-slate-900">
                      Explicit Memory
                    </h3>
                    <p className="text-xs font-semibold text-blue-700">
                      Declarative Memory
                    </p>
                  </div>
                </div>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Explicit memory involves consciously remembering facts,
                  information and personal experiences that can generally be
                  described or recalled intentionally.
                </p>

                <div className="mt-4 space-y-3">
                  <div className="rounded-xl border border-blue-100 bg-white p-4">
                    <h4 className="font-bold text-slate-900">
                      Episodic Memory
                    </h4>
                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      Memory of personally experienced events, including
                      their time, place and surrounding circumstances.
                    </p>
                    <ExampleBox>
                      Remembering your first day at college, your last
                      birthday celebration or a family holiday.
                    </ExampleBox>
                  </div>

                  <div className="rounded-xl border border-blue-100 bg-white p-4">
                    <h4 className="font-bold text-slate-900">
                      Semantic Memory
                    </h4>
                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      General knowledge, facts, meanings and concepts that
                      are not necessarily tied to the personal experience
                      of learning them.
                    </p>
                    <ExampleBox>
                      Knowing that New Delhi is the capital of India or
                      that water is composed of hydrogen and oxygen.
                    </ExampleBox>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-emerald-200 bg-emerald-50/60 p-5">
                <div className="flex items-center gap-3">
                  <Footprints className="text-emerald-700" size={26} />
                  <div>
                    <h3 className="font-bold text-slate-900">
                      Implicit Memory
                    </h3>
                    <p className="text-xs font-semibold text-emerald-700">
                      Non-Declarative Memory
                    </p>
                  </div>
                </div>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Implicit memory influences behaviour and performance
                  without requiring conscious recollection of the original
                  learning experience.
                </p>

                <div className="mt-4 space-y-3">
                  <div className="rounded-xl border border-emerald-100 bg-white p-4">
                    <h4 className="font-bold text-slate-900">
                      Procedural Memory
                    </h4>
                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      Memory for learned skills and actions, often performed
                      with little conscious effort after practice.
                    </p>
                    <ExampleBox>
                      Riding a bicycle, typing on a keyboard or tying
                      shoelaces.
                    </ExampleBox>
                  </div>

                  <div className="rounded-xl border border-emerald-100 bg-white p-4">
                    <h4 className="font-bold text-slate-900">
                      Priming and Conditioning
                    </h4>
                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      Previous exposure can influence later responses.
                      Learned associations can also shape automatic
                      reactions.
                    </p>
                    <ExampleBox>
                      Seeing the word "doctor" may make related words such
                      as "hospital" easier to recognize. This is an example
                      of priming.
                    </ExampleBox>
                  </div>
                </div>
              </div>
            </div>
          </section>
<AdSlot />
          {/* EPISODIC VS SEMANTIC */}
          <section className="mt-14">
            <SectionHeading
              eyebrow="Understand the difference"
              title="Episodic vs Semantic Memory"
              description="Both are forms of explicit long-term memory, but they preserve different kinds of information."
            />

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-indigo-200 bg-indigo-50 p-5">
                <div className="flex items-center gap-2">
                  <Bookmark className="text-indigo-600" size={22} />
                  <h3 className="font-bold text-slate-900">
                    Episodic = Personal Experiences
                  </h3>
                </div>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  You remember visiting the Taj Mahal with your family.
                  You may recall the people who were there, the journey and
                  how you felt.
                </p>
              </div>

              <div className="rounded-2xl border border-blue-200 bg-blue-50 p-5">
                <div className="flex items-center gap-2">
                  <BookOpen className="text-blue-600" size={22} />
                  <h3 className="font-bold text-slate-900">
                    Semantic = General Knowledge
                  </h3>
                </div>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  You know that the Taj Mahal is located in Agra and is
                  a famous historical monument, even if you have never
                  visited it.
                </p>
              </div>
            </div>
          </section>

          {/* COMPARISON TABLE */}
          <section className="mt-14">
            <SectionHeading
              eyebrow="Quick revision"
              title="Comparison of Different Types of Memory"
              description="Use this table to distinguish the major memory systems and their examples."
            />

            <div className="overflow-x-auto rounded-2xl border border-slate-200">
              <table className="w-full min-w-[600px] text-left text-sm">
                <thead className="bg-slate-900 text-white">
                  <tr>
                    <th className="p-4">Memory Type</th>
                    <th className="p-4">Main Function</th>
                    <th className="p-4">Everyday Example</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-600">
                  <tr>
                    <td className="p-4 font-bold text-slate-900">Sensory</td>
                    <td className="p-4">Brief sensory retention</td>
                    <td className="p-4">Brief image after a flash</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-slate-900">Short-Term</td>
                    <td className="p-4">Temporary information holding</td>
                    <td className="p-4">Remembering an OTP</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-slate-900">Working</td>
                    <td className="p-4">Active mental processing</td>
                    <td className="p-4">Calculating mentally</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-slate-900">Episodic</td>
                    <td className="p-4">Personal experiences</td>
                    <td className="p-4">Remembering a birthday</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-slate-900">Semantic</td>
                    <td className="p-4">Facts and general knowledge</td>
                    <td className="p-4">Knowing India's capital</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-slate-900">Procedural</td>
                    <td className="p-4">Learned skills and actions</td>
                    <td className="p-4">Riding a bicycle</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* CAPACITY AND DURATION */}
          <section className="mt-14">
            <SectionHeading
              eyebrow="Memory limitations"
              title="How Much Information Can We Remember?"
              description="Different memory systems have different capacities and durations. These are useful general patterns, not fixed limits for every individual."
            />

            <div className="grid gap-4 sm:grid-cols-2">
              <InfoCard icon={Timer} title="Sensory Memory" color="blue">
                Lasts for a very short time. Iconic memory may last around
                a fraction of a second, while echoic memory can last several
                seconds.
              </InfoCard>

              <InfoCard icon={Clock} title="Short-Term Memory" color="orange">
                Without rehearsal, information is often lost within roughly
                15–30 seconds. Its capacity is limited and depends on the
                nature of the information.
              </InfoCard>

              <InfoCard icon={BrainCircuit} title="Working Memory" color="purple">
                Has limited capacity and is affected by task difficulty,
                attention, familiarity and individual differences.
              </InfoCard>

              <InfoCard icon={Database} title="Long-Term Memory" color="green">
                Can retain information for years or even a lifetime.
                However, stored information is not always accessible or
                perfectly accurate.
              </InfoCard>
            </div>

            <div className="mt-5 rounded-2xl border border-amber-200 bg-amber-50 p-5">
              <div className="flex items-start gap-3">
                <AlertCircle className="mt-1 shrink-0 text-amber-700" size={21} />
                <div>
                  <h3 className="font-bold text-slate-900">
                    What about the famous 7±2 rule?
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-700">
                    Psychologist George A. Miller proposed that immediate
                    memory capacity is often around seven items, plus or
                    minus two, in his influential 1956 paper. Later research
                    suggests that the capacity of working memory is often
                    closer to around four meaningful chunks under controlled
                    conditions. Actual performance varies with the task,
                    attention and chunking strategies.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* EVERYDAY APPLICATIONS */}
          <section className="mt-14">
            <SectionHeading
              eyebrow="Everyday psychology"
              title="How Different Types of Memory Work Together"
              description="In real life, several memory systems often contribute to a single activity."
            />

            <div className="space-y-4">
              {[
                {
                  icon: GraduationCap,
                  title: "Studying for an Examination",
                  color: "blue",
                  points: [
                    "Sensory memory briefly registers the teacher's voice and written notes.",
                    "Working memory helps you understand and organize the explanation.",
                    "Semantic memory stores facts and concepts you learn.",
                    "Episodic memory may preserve your experience of a particular lesson.",
                  ],
                },
                {
                  icon: MapPin,
                  title: "Learning a New Route",
                  color: "purple",
                  points: [
                    "Sensory memory registers road signs and surrounding sights.",
                    "Working memory helps you follow directions and make decisions.",
                    "Long-term memory stores knowledge of familiar roads.",
                    "Procedural learning helps develop automatic navigation habits.",
                  ],
                },
                {
                  icon: Music,
                  title: "Learning to Play an Instrument",
                  color: "green",
                  points: [
                    "Sensory memory registers musical sounds.",
                    "Working memory helps coordinate notes and timing.",
                    "Procedural memory develops through repeated practice.",
                    "Semantic memory helps you understand musical concepts.",
                  ],
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100">
                      <item.icon size={23} className="text-blue-700" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900">
                      {item.title}
                    </h3>
                  </div>
                  <ul className="mt-4 space-y-3">
                    {item.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2 text-sm leading-7 text-slate-600"
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
              ))}
            </div>
          </section>

          {/* IMPROVE MEMORY */}
          <section className="mt-14">
            <SectionHeading
              eyebrow="Practical applications"
              title="How Can You Improve Your Memory?"
              description="Memory can often be improved through effective learning strategies, attention and regular practice."
            />

            <div className="grid gap-4 sm:grid-cols-2">
              <InfoCard icon={Repeat} title="Spaced Repetition" color="blue">
                Review information at increasing intervals instead of trying
                to learn everything in one session.
                <ExampleBox>
                  Review a topic today, tomorrow, after three days and
                  again after a week.
                </ExampleBox>
              </InfoCard>

              <InfoCard icon={Target} title="Active Recall" color="purple">
                Try retrieving information from memory without looking
                at your notes.
                <ExampleBox>
                  Close your textbook and explain the main points in your
                  own words.
                </ExampleBox>
              </InfoCard>

              <InfoCard icon={Puzzle} title="Chunking" color="green">
                Organize separate pieces of information into meaningful
                groups to make them easier to remember.
                <ExampleBox>
                  Remembering a phone number in groups rather than as
                  one long sequence of digits.
                </ExampleBox>
              </InfoCard>

              <InfoCard icon={Network} title="Meaningful Connections" color="orange">
                Connect new information with knowledge you already have.
                <ExampleBox>
                  Remembering a psychological concept by relating it to
                  a real situation in your daily life.
                </ExampleBox>
              </InfoCard>
            </div>
          </section>
<AdSlot />
          {/* COMMON MISCONCEPTIONS */}
          <section className="mt-14">
            <SectionHeading
              eyebrow="Concept clarification"
              title="Common Misconceptions About Memory"
              description="Understanding these differences prevents common mistakes when studying psychology."
            />

            <div className="space-y-3">
              {[
                [
                  "Short-term memory and working memory are identical.",
                  "They are related but different. Short-term memory emphasizes temporary retention, while working memory also involves active processing."
                ],
                [
                  "Everything we see automatically becomes a long-term memory.",
                  "Most incoming information is not retained permanently. Attention, encoding and other factors influence what is remembered."
                ],
                [
                  "Long-term memory is always accurate.",
                  "Memory can change over time. Recall may be incomplete, influenced by expectations or affected by later information."
                ],
                [
                  "People have only one type of memory.",
                  "Human memory involves several interacting systems that support different tasks and experiences."
                ],
              ].map(([question, answer]) => (
                <div
                  key={question}
                  className="rounded-xl border border-slate-200 bg-white p-5"
                >
                  <div className="flex items-start gap-3">
                    <AlertCircle className="mt-1 shrink-0 text-blue-600" size={19} />
                    <div>
                      <h3 className="font-bold text-slate-900">{question}</h3>
                      <p className="mt-2 text-sm leading-7 text-slate-600">
                        {answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="mt-14">
            <SectionHeading
              eyebrow="Frequently asked questions"
              title="FAQs About Types of Memory in Psychology"
            />

            <div className="rounded-2xl border border-slate-200 bg-white px-5">
              <FAQ question="What are the four main types of memory in psychology?">
                Sensory memory, short-term memory, working memory and
                long-term memory are four important concepts used to
                understand memory. They are not all separate categories
                within one universally accepted classification.
              </FAQ>

              <FAQ question="What are the three main types of long-term memory?">
                Three commonly discussed forms are episodic memory,
                semantic memory and procedural memory. More broadly,
                long-term memory is divided into explicit and implicit
                memory, with these forms belonging to those larger
                categories.
              </FAQ>

              <FAQ question="What is the difference between episodic and semantic memory?">
                Episodic memory stores personal experiences, such as
                remembering a holiday. Semantic memory stores general
                knowledge, such as knowing the capital of a country.
              </FAQ>

              <FAQ question="What is an example of procedural memory?">
                Riding a bicycle, swimming, typing and tying shoelaces
                are examples of procedural memory because they involve
                learned skills.
              </FAQ>

              <FAQ question="Which type of memory lasts the longest?">
                Long-term memory can preserve information for years or
                even a lifetime. However, the duration and accuracy of
                individual memories vary.
              </FAQ>

              <FAQ question="Can short-term memory become long-term memory?">
                Information maintained in short-term or working memory
                can be encoded into long-term memory through processes
                such as rehearsal, elaboration and meaningful learning.
                This does not mean every temporarily held item is
                automatically stored permanently.
              </FAQ>

              <FAQ question="What is iconic and echoic memory?">
                Iconic memory is brief visual sensory memory, whereas
                echoic memory is brief auditory sensory memory.
              </FAQ>

              <FAQ question="Who developed the multi-store model of memory?">
                Richard Atkinson and Richard Shiffrin proposed the
                influential multi-store model of memory in 1968. It
                describes sensory memory, short-term memory and
                long-term memory.
              </FAQ>
            </div>
          </section>

          {/* CONCLUSION */}
          <section className="mt-14 rounded-3xl border border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50 p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <Brain className="text-blue-700" size={28} />
              <h2 className="text-xl font-bold text-slate-900">
                Understanding Human Memory
              </h2>
            </div>

            <p className="mt-4 text-sm leading-8 text-slate-700">
              Human memory is a complex collection of systems that allows
              us to process sensory information, temporarily maintain
              information, perform mental activities and preserve knowledge
              and experiences over time. Sensory, short-term, working and
              long-term memory each contribute to how we learn and interact
              with the world.
            </p>

            <p className="mt-3 text-sm leading-8 text-slate-700">
              Understanding these systems also helps explain why we forget
              certain information, remember some experiences for years and
              develop skills through repeated practice.
            </p>

            <div className="mt-6 border-t border-blue-200 pt-5">
              <p className="text-xs font-bold uppercase tracking-wider text-blue-700">
                Continue learning psychology
              </p>
              <div className="mt-3 flex flex-wrap gap-3">
                <Link
                  href="/psychology/confirmation-bias"
                  className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-3 text-sm font-semibold text-blue-700 shadow-sm transition hover:bg-blue-100"
                >
                  Confirmation Bias <ArrowRight size={15} />
                </Link>
                <Link
                  href="/psychology/dunning-kruger-effect"
                  className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-3 text-sm font-semibold text-blue-700 shadow-sm transition hover:bg-blue-100"
                >
                  Dunning-Kruger Effect <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </section>

          {/* LEARNING NOTE */}
          <div className="mt-8 flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4">
            <GraduationCap className="mt-1 shrink-0 text-slate-500" size={21} />
            <p className="text-xs leading-6 text-slate-500">
              Educational note: This article introduces established
              concepts from cognitive psychology, including the
              Atkinson-Shiffrin multi-store model and Baddeley and Hitch's
              working memory model. Memory research continues to develop,
              and simplified models do not capture every aspect of human
              memory.
            </p>
          </div>

        </div>
      </div>
    </main>
  );
}
