
import {
  Brain,
  Network,
  Eye,
  Activity,
  Lightbulb,
  Microscope,
  HeartPulse,
  ScanEye,
  Zap,
  MessageCircle,
  Puzzle,
  BookOpen,
  ArrowRight,
  CheckCircle2,
  Workflow,
  Target,
  Layers,
} from "lucide-react";
import AdSlot from '../../../components/AdSlot'
import Link from "next/link";

export const metadata = {
  title: "Cognitive Neuroscience – Meaning, Brain Functions & Research Methods | PriceTag HUB",
  description:
    "Understand cognitive neuroscience, how the brain supports thinking, memory, attention, emotions and decision-making, and the methods used to study brain activity.",
};
const brainFunctions = [
  {
    icon: Eye,
    title: "Perception",
    description:
      "How the brain receives and interprets information from the senses, helping us recognize objects, sounds, faces, and surroundings.",
  },
  {
    icon: Lightbulb,
    title: "Attention",
    description:
      "How the brain selects important information while filtering out distractions. It helps us concentrate on a conversation or task.",
  },
  {
    icon: Brain,
    title: "Memory",
    description:
      "How information is encoded, stored, and retrieved. Memory allows us to learn from experiences and remember previously acquired knowledge.",
  },
  {
    icon: MessageCircle,
    title: "Language",
    description:
      "How the brain processes words, understands speech, and produces meaningful communication.",
  },
  {
    icon: Puzzle,
    title: "Decision-Making",
    description:
      "How the brain evaluates information, considers possible outcomes, and chooses between different actions.",
  },
  {
    icon: Activity,
    title: "Emotion",
    description:
      "How neural systems contribute to emotional experiences, emotional regulation, and responses to situations.",
  },
];

const brainRegions = [
  {
    name: "Prefrontal Cortex",
    function: "Planning, reasoning, attention, and decision-making.",
    example: "Planning how to prepare for an examination.",
    icon: Target,
  },
  {
    name: "Hippocampus",
    function: "Important for forming and organizing new memories.",
    example: "Remembering a newly learned concept.",
    icon: BookOpen,
  },
  {
    name: "Amygdala",
    function: "Processes emotional significance, particularly fear and threat.",
    example: "Responding emotionally to a sudden loud noise.",
    icon: HeartPulse,
  },
  {
    name: "Occipital Lobe",
    function: "Primarily processes visual information.",
    example: "Recognizing the shape and color of an object.",
    icon: ScanEye,
  },
  {
    name: "Temporal Lobe",
    function: "Supports auditory processing, language, and aspects of memory.",
    example: "Understanding spoken words.",
    icon: MessageCircle,
  },
  {
    name: "Parietal Lobe",
    function: "Processes sensory information and supports spatial awareness.",
    example: "Knowing where your hand is without looking at it.",
    icon: Layers,
  },
];

const researchMethods = [
  {
    title: "Functional MRI (fMRI)",
    description:
      "Measures changes in blood oxygenation associated with brain activity. Researchers use it to investigate which brain networks are involved in particular tasks.",
    example: "Studying brain activity while a person recognizes faces.",
  },
  {
    title: "EEG",
    description:
      "Electroencephalography records electrical activity from the scalp using electrodes. It is especially useful for studying the timing of brain responses.",
    example: "Measuring how quickly the brain responds to a sound.",
  },
  {
    title: "Lesion Studies",
    description:
      "Researchers examine how damage to particular brain areas affects cognitive abilities. This can provide evidence about the functions supported by those areas.",
    example: "Studying memory difficulties following hippocampal damage.",
  },
  {
    title: "Neuropsychological Testing",
    description:
      "Uses structured tasks to assess memory, attention, language, reasoning, and other cognitive abilities.",
    example: "Testing whether a person has difficulty remembering new information.",
  },
];

const applications = [
  {
    title: "Understanding Learning",
    description:
      "Explains how attention, memory, and neural plasticity contribute to acquiring new knowledge and skills.",
    icon: BookOpen,
  },
  {
    title: "Mental Health Research",
    description:
      "Helps researchers investigate the brain mechanisms associated with conditions such as depression, anxiety, and schizophrenia.",
    icon: HeartPulse,
  },
  {
    title: "Brain Injury Rehabilitation",
    description:
      "Supports the assessment and rehabilitation of cognitive difficulties following brain injuries.",
    icon: Activity,
  },
  {
    title: "Human Behaviour",
    description:
      "Helps explain how brain processes influence emotions, decisions, social interactions, and everyday behaviour.",
    icon: Network,
  },
];

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      {eyebrow && (
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-blue-600">
          {eyebrow}
        </p>
      )}
      <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
        {title}
      </h2>
      {description && (
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
          {description}
        </p>
      )}
    </div>
  );
}

function InfoCard({ icon: Icon, title, description }) {
  return (
    <div className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md sm:p-6">
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-md shadow-blue-200">
        <Icon size={21} />
      </div>
      <h3 className="font-bold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">
        {description}
      </p>
    </div>
  );
}

export default function CognitiveNeurosciencePage() {
  return (
    <main className="overflow-hidden bg-white text-slate-800">

      {/* INTRODUCTION */}
      <section className="px-4 pb-12 pt-10 sm:px-6 sm:pt-14">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-9 lg:grid-cols-2">

            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-bold text-blue-700">
                <Brain size={15} />
                PSYCHOLOGY · BRAIN & MIND
              </div>

              <h1 className="text-3xl font-bold leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
                Cognitive Neuroscience:
                <span className="mt-2 block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Understanding the Brain and Mind
                </span>
              </h1>

              <p className="mt-6 text-sm leading-7 text-slate-600 sm:text-base">
                Cognitive neuroscience is the scientific study of how
                the brain supports mental processes such as thinking,
                learning, memory, attention, language, and decision-making.
                It connects psychology with neuroscience to explain how
                physical activity in the brain contributes to our thoughts
                and behaviour.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <span className="rounded-lg bg-blue-50 px-3 py-2 text-xs font-semibold text-blue-700">
                  Brain Function
                </span>
                <span className="rounded-lg bg-indigo-50 px-3 py-2 text-xs font-semibold text-indigo-700">
                  Mental Processes
                </span>
                <span className="rounded-lg bg-sky-50 px-3 py-2 text-xs font-semibold text-sky-700">
                  Human Behaviour
                </span>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-indigo-100 p-5 sm:p-8">
              <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-blue-300/20 blur-3xl" />

              <div className="relative">
                <div className="mx-auto flex max-w-xs flex-col items-center">
                  <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-xl shadow-blue-200 sm:h-28 sm:w-28">
                    <Brain size={57} strokeWidth={1.5} />
                  </div>

                  <p className="mt-4 text-sm font-bold text-slate-900">
                    Human Brain
                  </p>
                  <span className="text-xs text-slate-500">
                    Biological foundation of cognition
                  </span>

                  <div className="my-5 h-8 w-px bg-blue-300" />

                  <div className="grid w-full grid-cols-2 gap-3">
                    {[
                      { icon: Eye, label: "Perception" },
                      { icon: BookOpen, label: "Memory" },
                      { icon: Lightbulb, label: "Thinking" },
                      { icon: MessageCircle, label: "Language" },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="flex items-center gap-2 rounded-xl border border-blue-100 bg-white p-3 shadow-sm"
                      >
                        <item.icon size={17} className="shrink-0 text-blue-600" />
                        <span className="text-xs font-bold text-slate-700">
                          {item.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* MEANING */}
      <section className="bg-slate-50 px-4 py-14 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <SectionHeading
            eyebrow="Basic Concept"
            title="What Does Cognitive Neuroscience Mean?"
            description="The subject combines two important areas of science to understand the relationship between the brain and mental activity."
          />

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-blue-100 bg-white p-6 text-center shadow-sm">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">
                <Brain size={27} />
              </div>
              <h3 className="mt-4 font-bold text-slate-900">Cognitive Science</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Studies mental processes such as memory, attention,
                language, and reasoning.
              </p>
            </div>

            <div className="flex items-center justify-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-lg">
                <ArrowRight size={22} />
              </div>
            </div>

            <div className="rounded-2xl border border-indigo-100 bg-white p-6 text-center shadow-sm">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-700">
                <Network size={27} />
              </div>
              <h3 className="mt-4 font-bold text-slate-900">Neuroscience</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Studies the nervous system, including the structure
                and functioning of the brain.
              </p>
            </div>
          </div>

          <div className="mt-6 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-center text-white shadow-lg shadow-blue-200 sm:p-8">
            <Brain className="mx-auto mb-3" size={30} />
            <h3 className="text-lg font-bold sm:text-xl">
              Cognitive Neuroscience
            </h3>
            <p className="mx-auto mt-2 max-w-2xl text-sm leading-6 text-blue-50">
              Explores how brain structures, neural networks, and
              biological processes make mental activities possible.
            </p>
          </div>
        </div>
      </section>
<AdSlot />
      {/* COGNITIVE FUNCTIONS */}
      <section className="px-4 py-14 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Mental Processes"
            title="What Does Cognitive Neuroscience Study?"
            description="Researchers investigate different mental abilities and the brain systems involved in producing them."
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {brainFunctions.map((item) => (
              <InfoCard
                key={item.title}
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-indigo-50 p-5 sm:p-7">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white">
                <Lightbulb size={22} />
              </div>
              <div>
                <h3 className="font-bold text-slate-900">
                  Everyday Example: Learning a New Skill
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  Imagine learning to ride a bicycle. Your attention
                  helps you concentrate, perception helps you maintain
                  balance, memory helps you remember movements, and
                  decision-making helps you respond to changes.
                  Several brain systems work together to support this
                  seemingly simple activity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BRAIN REGIONS */}
      <section className="bg-slate-50 px-4 py-14 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Brain Structure"
            title="Important Brain Regions and Their Functions"
            description="Different brain regions contribute to different abilities. However, most complex mental activities depend on communication between multiple regions rather than one isolated area."
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {brainRegions.map((region) => (
              <div
                key={region.name}
                className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white">
                    <region.icon size={21} />
                  </div>
                  <h3 className="font-bold text-slate-900">
                    {region.name}
                  </h3>
                </div>

                <p className="mt-4 text-sm leading-6 text-slate-600">
                  {region.function}
                </p>

                <div className="mt-4 rounded-xl bg-blue-50 p-3">
                  <p className="text-[11px] font-bold uppercase tracking-wide text-blue-700">
                    Everyday Example
                  </p>
                  <p className="mt-1 text-xs leading-5 text-slate-700">
                    {region.example}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-7 rounded-2xl border border-blue-100 bg-white p-5 sm:p-7">
            <div className="flex items-center gap-3">
              <Workflow className="text-blue-600" size={24} />
              <h3 className="font-bold text-slate-900">
                How Brain Regions Work Together
              </h3>
            </div>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Consider reading and understanding a sentence. Visual
              areas process the written words, language-related networks
              help interpret their meaning, memory connects them with
              existing knowledge, and attention keeps you focused.
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
              {[
                "Visual Processing",
                "Language",
                "Memory",
                "Understanding",
              ].map((step, index) => (
                <div key={step} className="flex items-center gap-2">
                  <span className="rounded-xl border border-blue-100 bg-blue-50 px-3 py-3 text-center text-xs font-bold text-blue-800">
                    {step}
                  </span>
                  {index !== 3 && (
                    <ArrowRight size={15} className="text-blue-500" />
                  )}
                </div>
              ))}
            </div>
            <p className="mt-4 text-center text-xs text-slate-500">
              A simplified illustration of cooperating brain processes.
            </p>
          </div>
        </div>
      </section>

      {/* NEURAL COMMUNICATION */}
      <section className="px-4 py-14 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-blue-600">
                Neural Communication
              </p>
              <h2 className="text-2xl font-bold leading-tight text-slate-900 sm:text-3xl">
                How Do Brain Cells Communicate?
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                The brain contains billions of neurons, specialized
                cells that transmit and process information. Neurons
                communicate through electrical signals within cells
                and chemical signals across most synapses.
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Chemical messengers called neurotransmitters help
                transfer information between neurons. These
                communication processes support everything from
                movement and sensation to memory and emotion.
              </p>
            </div>

            <div className="rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 to-indigo-100 p-5 sm:p-7">
              <h3 className="mb-6 text-center font-bold text-slate-900">
                Simplified Neural Communication
              </h3>

              <div className="flex flex-col items-center gap-3">
                <div className="flex w-full items-center gap-3 rounded-xl border border-blue-200 bg-white p-4">
                  <Brain className="shrink-0 text-blue-600" size={23} />
                  <div>
                    <p className="text-sm font-bold text-slate-900">
                      Sending Neuron
                    </p>
                    <p className="text-xs text-slate-500">
                      An electrical signal travels along the neuron.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-center text-blue-600">
                  <ArrowRight className="rotate-90" size={19} />
                  <span className="rounded-full bg-blue-600 px-4 py-2 text-xs font-bold text-white">
                    Neurotransmitters
                  </span>
                  <ArrowRight className="rotate-90" size={19} />
                </div>

                <div className="w-full rounded-xl border border-indigo-200 bg-white p-4">
                  <div className="flex items-center gap-3">
                    <Zap className="shrink-0 text-indigo-600" size={23} />
                    <div>
                      <p className="text-sm font-bold text-slate-900">
                        Receiving Neuron
                      </p>
                      <p className="text-xs text-slate-500">
                        Chemical signals bind to receptors and can
                        influence electrical activity.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <p className="mt-5 text-center text-xs leading-5 text-slate-500">
                The diagram represents a simplified chemical synapse.
              </p>
            </div>
          </div>
        </div>
      </section>
<AdSlot />
      {/* RESEARCH METHODS */}
      <section className="bg-slate-50 px-4 py-14 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Scientific Research"
            title="How Do Scientists Study the Brain?"
            description="Researchers use different techniques to investigate brain structure, activity, and the relationship between neural processes and cognitive abilities."
          />

          <div className="grid gap-4 md:grid-cols-2">
            {researchMethods.map((method, index) => (
              <div
                key={method.title}
                className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm sm:p-6"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-sm font-bold text-white">
                    {index + 1}
                  </span>
                  <h3 className="font-bold text-slate-900">
                    {method.title}
                  </h3>
                </div>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {method.description}
                </p>

                <div className="mt-4 rounded-xl bg-indigo-50 p-3">
                  <p className="text-[11px] font-bold uppercase text-indigo-700">
                    Research Example
                  </p>
                  <p className="mt-1 text-xs leading-5 text-slate-700">
                    {method.example}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPLICATIONS */}
      <section className="px-4 py-14 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Real-World Importance"
            title="Applications of Cognitive Neuroscience"
            description="Understanding the brain is useful not only for scientific research but also for education, healthcare, and improving our understanding of human behaviour."
          />

          <div className="grid gap-4 sm:grid-cols-2">
            {applications.map((item) => (
              <InfoCard
                key={item.title}
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* DIFFERENCE */}
      <section className="bg-slate-50 px-4 py-14 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <SectionHeading
            eyebrow="Related Disciplines"
            title="Cognitive Neuroscience vs Cognitive Psychology"
            description="Both fields investigate mental processes, but they approach these processes from different perspectives."
          />

          <div className="overflow-hidden rounded-2xl border border-blue-100 bg-white shadow-sm">
            <div className="grid grid-cols-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
              <div className="p-4 text-sm font-bold sm:p-5">
                Cognitive Neuroscience
              </div>
              <div className="border-l border-white/20 p-4 text-sm font-bold sm:p-5">
                Cognitive Psychology
              </div>
            </div>

            {[
              [
                "Studies how the brain supports mental processes.",
                "Studies how people think, learn, remember, and reason.",
              ],
              [
                "Focuses on neural structures and brain activity.",
                "Focuses on mental processes and behaviour.",
              ],
              [
                "Often uses brain imaging and neural measurements.",
                "Often uses experiments and behavioural tests.",
              ],
              [
                "Connects cognition with biological mechanisms.",
                "Develops explanations of how cognitive processes work.",
              ],
            ].map((row, index) => (
              <div
                key={index}
                className="grid grid-cols-2 border-t border-slate-100"
              >
                <p className="p-4 text-xs leading-6 text-slate-700 sm:p-5 sm:text-sm">
                  {row[0]}
                </p>
                <p className="border-l border-slate-100 p-4 text-xs leading-6 text-slate-700 sm:p-5 sm:text-sm">
                  {row[1]}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-4 text-sm leading-7 text-slate-600">
            These disciplines are closely related and often complement
            one another. Cognitive neuroscience frequently uses
            psychological theories and behavioural experiments to
            interpret brain findings.
          </p>
        </div>
      </section>
<AdSlot />
      {/* SUMMARY */}
      <section className="px-4 py-14 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-3xl bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-700 p-6 text-white shadow-xl shadow-blue-200 sm:p-9">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/15">
                <Microscope size={25} />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-blue-200">
                  Key Takeaway
                </p>
                <h2 className="text-xl font-bold sm:text-2xl">
                  Understanding the Brain Behind the Mind
                </h2>
              </div>
            </div>

            <p className="mt-5 text-sm leading-7 text-blue-50 sm:text-base">
              Cognitive neuroscience explains how brain structures,
              neurons, and neural networks contribute to our mental
              abilities. By connecting biological processes with
              psychological functions, it helps us understand how
              humans perceive, remember, learn, think, and behave.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {[
                "Brain structures support cognition.",
                "Neural communication enables information processing.",
                "Mental abilities depend on interacting brain networks.",
              ].map((point) => (
                <div
                  key={point}
                  className="flex items-start gap-2 rounded-xl border border-white/15 bg-white/10 p-3"
                >
                  <CheckCircle2 className="mt-0.5 shrink-0 text-blue-200" size={17} />
                  <p className="text-xs leading-5 text-white">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

  
    </main>
  );
}
