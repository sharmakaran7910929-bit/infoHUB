import Breadcrumbs from "../../../../components/Breadcrumb";
import AdSlot from "../../../../components/AdSlot";

export const metadata = {
  title: "Types of Artificial Intelligence: A Complete Guide",
  description:
    "Learn about the different types of artificial intelligence, including narrow AI, general AI, super AI, reactive machines, limited memory, theory of mind, and self-aware AI.",
};

export default function Page() {
  return (
    <>
      <Breadcrumbs />

      <article className="mx-auto max-w-7xl px-6 pb-20">
        {/* Hero */}
        <header className="pt-10 pb-12">
          <div className="max-w-4xl">
            <div className="mb-4 inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
              AI Basics
            </div>

            <h1 className="text-4xl leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Types of Artificial Intelligence
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              Artificial intelligence can be classified in different ways.
              Some classifications focus on how capable an AI system is, while
              others focus on how the system works and uses information.
            </p>

            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-500">
              In this guide, we explain the main types of artificial
              intelligence, their characteristics, examples, current status,
              and how the different classifications fit together.
            </p>
          </div>
        </header>

        {/* Main layout */}
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_300px]">
          <main className="min-w-0">
            {/* Quick Answer */}
            <section className="rounded-2xl border border-blue-100 bg-blue-50/60 p-6 sm:p-8">
              <h2 className="text-2xl font-semibold text-slate-900">
                Quick Answer
              </h2>

              <p className="mt-4 leading-7 text-slate-700">
                There are several ways to classify artificial intelligence.
                The most commonly discussed classifications divide AI by
                <strong> capabilities</strong> and by
                <strong> functionality</strong>.
              </p>

              <ul className="mt-5 space-y-3 text-slate-700">
                <li>
                  <strong>Narrow AI:</strong> Designed to perform specific
                  tasks. This is the main form of AI available today.
                </li>

                <li>
                  <strong>General AI:</strong> A theoretical form of AI that
                  could perform a wide range of intellectual tasks at a
                  human-like level.
                </li>

                <li>
                  <strong>Super AI:</strong> A hypothetical form of AI that
                  would exceed human intelligence across a broad range of
                  abilities.
                </li>

                <li>
                  <strong>Reactive Machines:</strong> AI systems that respond
                  to current inputs without using stored experiences to inform
                  future decisions.
                </li>

                <li>
                  <strong>Limited Memory:</strong> AI systems that can use
                  previously collected information or experience when making
                  decisions.
                </li>

                <li>
                  <strong>Theory of Mind:</strong> A proposed type of AI that
                  would understand human emotions, intentions, beliefs, and
                  other mental states.
                </li>

                <li>
                  <strong>Self-Aware AI:</strong> A hypothetical AI with
                  consciousness or awareness of itself.
                </li>
              </ul>
            </section>

            <AdSlot />

            {/* What does types mean */}
            <section className="mt-14">
              <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
                What Are the Types of Artificial Intelligence?
              </h2>

              <p className="mt-5 leading-8 text-slate-700">
                The phrase “types of artificial intelligence” can mean
                different things depending on how AI is being classified.
                There is no single list that covers every possible way of
                grouping AI systems.
              </p>

              <p className="mt-4 leading-8 text-slate-700">
                Two classification approaches are especially common in
                introductory discussions. The first looks at the
                <strong> capabilities</strong> of an AI system. The second
                looks at its <strong>functionality</strong>, or how it
                operates and responds to information.
              </p>

              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 bg-white p-6">
                  <div className="text-sm font-medium text-blue-600">
                    Classification 01
                  </div>

                  <h3 className="mt-2 text-xl font-semibold text-slate-900">
                    Based on Capabilities
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    This classification considers how broadly an AI system can
                    perform intellectual tasks.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-6">
                  <div className="text-sm font-medium text-blue-600">
                    Classification 02
                  </div>

                  <h3 className="mt-2 text-xl font-semibold text-slate-900">
                    Based on Functionality
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    This classification considers how an AI system processes
                    information, remembers previous information, and responds
                    to its environment.
                  </p>
                </div>
              </div>
            </section>

            {/* Capabilities */}
            <section className="mt-16">
              <div className="max-w-3xl">
                <div className="text-sm font-medium text-blue-600">
                  Classification by capabilities
                </div>

                <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">
                  Types of AI Based on Capabilities
                </h2>

                <p className="mt-5 leading-8 text-slate-700">
                  When AI is classified by capability, the focus is on how
                  broadly the system can perform intellectual tasks. This
                  commonly results in three categories: Narrow AI, General AI,
                  and Super AI.
                </p>
              </div>

              {/* Narrow AI */}
              <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
                    Type 1
                  </span>

                  <span className="text-sm text-slate-400">
                    Artificial Narrow Intelligence
                  </span>
                </div>

                <h3 className="mt-4 text-2xl font-semibold text-slate-900">
                  1. Narrow AI
                </h3>

                <p className="mt-4 leading-8 text-slate-700">
                  Narrow AI, also called Artificial Narrow Intelligence or ANI,
                  is AI designed to perform specific tasks or a limited range
                  of tasks.
                </p>

                <p className="mt-4 leading-8 text-slate-700">
                  Most AI systems people interact with today fall into this
                  broad category. A system may be extremely capable at a
                  particular task without having general human-like
                  intelligence.
                </p>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl bg-slate-50 p-5">
                    <h4 className="font-semibold text-slate-900">
                      Common characteristics
                    </h4>

                    <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-600">
                      <li>• Focused on specific tasks</li>
                      <li>• Designed for defined objectives</li>
                      <li>• Can be highly capable in its domain</li>
                      <li>• Does not have general human intelligence</li>
                    </ul>
                  </div>

                  <div className="rounded-xl bg-slate-50 p-5">
                    <h4 className="font-semibold text-slate-900">
                      Examples
                    </h4>

                    <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-600">
                      <li>• Recommendation systems</li>
                      <li>• Voice assistants</li>
                      <li>• Spam detection</li>
                      <li>• Image recognition systems</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* General AI */}
              <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
                    Type 2
                  </span>

                  <span className="text-sm text-slate-400">
                    Artificial General Intelligence
                  </span>
                </div>

                <h3 className="mt-4 text-2xl font-semibold text-slate-900">
                  2. General AI
                </h3>

                <p className="mt-4 leading-8 text-slate-700">
                  Artificial General Intelligence, commonly called AGI, refers
                  to a theoretical form of AI capable of understanding and
                  performing a broad range of intellectual tasks rather than
                  being limited to one specific task.
                </p>

                <p className="mt-4 leading-8 text-slate-700">
                  A true general AI system would need to transfer knowledge
                  between different types of problems and adapt to unfamiliar
                  situations much more broadly than today's task-specific AI
                  systems.
                </p>

                <div className="mt-6 rounded-xl border border-amber-100 bg-amber-50 p-5">
                  <h4 className="font-semibold text-slate-900">
                    Current status
                  </h4>

                  <p className="mt-2 text-sm leading-7 text-slate-700">
                    AGI remains a concept and research goal. It should not be
                    treated as the same thing as today's widely deployed
                    task-specific AI systems.
                  </p>
                </div>
              </div>

              {/* Super AI */}
              <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
                    Type 3
                  </span>

                  <span className="text-sm text-slate-400">
                    Artificial Superintelligence
                  </span>
                </div>

                <h3 className="mt-4 text-2xl font-semibold text-slate-900">
                  3. Super AI
                </h3>

                <p className="mt-4 leading-8 text-slate-700">
                  Artificial Superintelligence, often called ASI, describes a
                  hypothetical form of AI whose intellectual capabilities
                  would exceed those of humans across a broad range of areas.
                </p>

                <p className="mt-4 leading-8 text-slate-700">
                  Discussions about superintelligence often involve questions
                  about scientific discovery, decision-making, automation,
                  safety, control, and the long-term relationship between
                  humans and highly capable AI systems.
                </p>

                <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-5">
                  <h4 className="font-semibold text-slate-900">
                    Current status
                  </h4>

                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    Artificial Superintelligence is hypothetical. It is not a
                    currently established category of deployed AI.
                  </p>
                </div>
              </div>
            </section>

            

            {/* Capability comparison */}
            <section className="mt-16">
              <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
                Narrow AI vs General AI vs Super AI
              </h2>

              <p className="mt-5 leading-8 text-slate-700">
                The main difference between these three categories is the
                breadth of intelligence they describe.
              </p>

              <div className="mt-8 overflow-x-auto rounded-2xl border border-slate-200">
                <table className="w-full min-w-[700px] border-collapse text-left">
                  <thead>
                    <tr className="border-b border-slate-200 bg-slate-50">
                      <th className="px-5 py-4 text-sm font-semibold text-slate-900">
                        Type
                      </th>
                      <th className="px-5 py-4 text-sm font-semibold text-slate-900">
                        Main idea
                      </th>
                      <th className="px-5 py-4 text-sm font-semibold text-slate-900">
                        Status
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr className="border-b border-slate-100">
                      <td className="px-5 py-4 font-medium text-slate-900">
                        Narrow AI
                      </td>
                      <td className="px-5 py-4 text-slate-600">
                        Performs specific or limited tasks
                      </td>
                      <td className="px-5 py-4 text-slate-600">
                        Widely used today
                      </td>
                    </tr>

                    <tr className="border-b border-slate-100">
                      <td className="px-5 py-4 font-medium text-slate-900">
                        General AI
                      </td>
                      <td className="px-5 py-4 text-slate-600">
                        Broad, general-purpose human-like intelligence
                      </td>
                      <td className="px-5 py-4 text-slate-600">
                        Theoretical / research goal
                      </td>
                    </tr>

                    <tr>
                      <td className="px-5 py-4 font-medium text-slate-900">
                        Super AI
                      </td>
                      <td className="px-5 py-4 text-slate-600">
                        Intelligence exceeding humans broadly
                      </td>
                      <td className="px-5 py-4 text-slate-600">
                        Hypothetical
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Functionality */}
            <section className="mt-16">
              <div className="max-w-3xl">
                <div className="text-sm font-medium text-blue-600">
                  Classification by functionality
                </div>

                <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">
                  Types of AI Based on Functionality
                </h2>

                <p className="mt-5 leading-8 text-slate-700">
                  Another common way to describe AI is by looking at how a
                  system processes information and interacts with its
                  environment. This classification includes reactive machines,
                  limited-memory systems, theory-of-mind AI, and self-aware AI.
                </p>
              </div>

              {/* Reactive */}
              <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
                <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700">
                  Type 1
                </span>

                <h3 className="mt-4 text-2xl font-semibold text-slate-900">
                  1. Reactive Machines
                </h3>

                <p className="mt-4 leading-8 text-slate-700">
                  Reactive machines are designed to respond to current inputs.
                  They do not maintain a memory of past experiences that can be
                  used to change future decisions.
                </p>

                <p className="mt-4 leading-8 text-slate-700">
                  A classic example often used in discussions of reactive AI is
                  IBM's Deep Blue chess system, which evaluated chess positions
                  and selected moves without functioning like a human memory
                  system.
                </p>
              </div>

              {/* Limited memory */}
              <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
                <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700">
                  Type 2
                </span>

                <h3 className="mt-4 text-2xl font-semibold text-slate-900">
                  2. Limited Memory AI
                </h3>

                <p className="mt-4 leading-8 text-slate-700">
                  Limited-memory AI systems can use previously collected
                  information or observations as part of their decision
                  process.
                </p>

                <p className="mt-4 leading-8 text-slate-700">
                  Many modern AI applications are commonly discussed under this
                  category because their behavior can depend on data and
                  previous observations rather than only the immediate input.
                </p>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl bg-slate-50 p-5">
                    <h4 className="font-semibold text-slate-900">
                      Possible examples
                    </h4>

                    <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-600">
                      <li>• Recommendation systems</li>
                      <li>• Fraud detection systems</li>
                      <li>• Autonomous driving systems</li>
                      <li>• Predictive applications</li>
                    </ul>
                  </div>

                  <div className="rounded-xl bg-slate-50 p-5">
                    <h4 className="font-semibold text-slate-900">
                      Key idea
                    </h4>

                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      Information from previous observations can influence
                      decisions or predictions.
                    </p>
                  </div>
                </div>
              </div>

              {/* Theory of mind */}
              <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
                <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700">
                  Type 3
                </span>

                <h3 className="mt-4 text-2xl font-semibold text-slate-900">
                  3. Theory of Mind AI
                </h3>

                <p className="mt-4 leading-8 text-slate-700">
                  Theory of Mind AI describes a proposed class of systems that
                  could understand aspects of human mental states, such as
                  beliefs, intentions, emotions, and expectations.
                </p>

                <p className="mt-4 leading-8 text-slate-700">
                  Such an AI could potentially adapt its interaction based not
                  only on what a person says, but also on what the system
                  understands about that person's situation or intentions.
                </p>

                <div className="mt-6 rounded-xl border border-amber-100 bg-amber-50 p-5">
                  <h4 className="font-semibold text-slate-900">
                    Current status
                  </h4>

                  <p className="mt-2 text-sm leading-7 text-slate-700">
                    This remains a commonly discussed research concept rather
                    than a standard, fully realized category of deployed AI.
                  </p>
                </div>
              </div>

              {/* Self aware */}
              <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
                <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700">
                  Type 4
                </span>

                <h3 className="mt-4 text-2xl font-semibold text-slate-900">
                  4. Self-Aware AI
                </h3>

                <p className="mt-4 leading-8 text-slate-700">
                  Self-aware AI is a hypothetical concept involving an AI
                  system that would possess a form of consciousness or
                  awareness of itself.
                </p>

                <p className="mt-4 leading-8 text-slate-700">
                  This idea goes beyond systems that can process information or
                  communicate convincingly. It raises deeper questions about
                  consciousness, subjective experience, identity, and whether a
                  machine could genuinely be aware of its own existence.
                </p>

                <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-5">
                  <h4 className="font-semibold text-slate-900">
                    Current status
                  </h4>

                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    Self-aware AI is hypothetical. There is no established
                    evidence that today's AI systems possess human-like
                    consciousness or self-awareness.
                  </p>
                </div>
              </div>
            </section>

            <AdSlot />

            {/* Functionality comparison */}
            <section className="mt-16">
              <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
                Reactive Machines vs Limited Memory vs Future AI
              </h2>

              <p className="mt-5 leading-8 text-slate-700">
                The functionality-based classification helps illustrate how
                different AI systems are described according to memory,
                interaction, and understanding.
              </p>

              <div className="mt-8 overflow-x-auto rounded-2xl border border-slate-200">
                <table className="w-full min-w-[800px] border-collapse text-left">
                  <thead>
                    <tr className="border-b border-slate-200 bg-slate-50">
                      <th className="px-5 py-4 text-sm font-semibold text-slate-900">
                        Type
                      </th>
                      <th className="px-5 py-4 text-sm font-semibold text-slate-900">
                        Memory / awareness
                      </th>
                      <th className="px-5 py-4 text-sm font-semibold text-slate-900">
                        General status
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr className="border-b border-slate-100">
                      <td className="px-5 py-4 font-medium text-slate-900">
                        Reactive Machines
                      </td>
                      <td className="px-5 py-4 text-slate-600">
                        No experience-based memory
                      </td>
                      <td className="px-5 py-4 text-slate-600">
                        Exists
                      </td>
                    </tr>

                    <tr className="border-b border-slate-100">
                      <td className="px-5 py-4 font-medium text-slate-900">
                        Limited Memory
                      </td>
                      <td className="px-5 py-4 text-slate-600">
                        Uses relevant previous information
                      </td>
                      <td className="px-5 py-4 text-slate-600">
                        Widely used
                      </td>
                    </tr>

                    <tr className="border-b border-slate-100">
                      <td className="px-5 py-4 font-medium text-slate-900">
                        Theory of Mind
                      </td>
                      <td className="px-5 py-4 text-slate-600">
                        Would understand mental states
                      </td>
                      <td className="px-5 py-4 text-slate-600">
                        Concept / research
                      </td>
                    </tr>

                    <tr>
                      <td className="px-5 py-4 font-medium text-slate-900">
                        Self-Aware AI
                      </td>
                      <td className="px-5 py-4 text-slate-600">
                        Would have self-awareness
                      </td>
                      <td className="px-5 py-4 text-slate-600">
                        Hypothetical
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* How many types */}
            <section className="mt-16">
              <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
                How Many Types of AI Are There?
              </h2>

              <p className="mt-5 leading-8 text-slate-700">
                There is no single universally accepted number of AI types.
                The answer depends on the classification system being used.
              </p>

              <p className="mt-4 leading-8 text-slate-700">
                A common capability-based explanation discusses three broad
                categories: Narrow AI, General AI, and Super AI. A
                functionality-based explanation commonly discusses four:
                Reactive Machines, Limited Memory, Theory of Mind, and
                Self-Aware AI.
              </p>

              <p className="mt-4 leading-8 text-slate-700">
                This is why searches such as “3 types of AI,” “4 types of AI,”
                “5 types of AI,” or “7 types of AI” can produce different
                answers. Some lists combine different classification methods,
                while others introduce additional categories for particular
                educational or technical purposes.
              </p>
            </section>

            {/* Important distinction */}
            <section className="mt-16 rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
              <h2 className="text-2xl font-semibold text-slate-900">
                An Important Distinction
              </h2>

              <p className="mt-4 leading-8 text-slate-700">
                AI classification is different from AI techniques or fields.
                For example, machine learning, deep learning, natural language
                processing, and computer vision describe methods or areas of AI
                rather than simply being additional entries in the capability
                and functionality lists above.
              </p>

              <p className="mt-4 leading-8 text-slate-700">
                Keeping these concepts separate makes it easier to understand
                what an AI system is, what it can do, and what technology may
                be used to build it.
              </p>
            </section>

            <AdSlot />

            {/* Examples */}
            <section className="mt-16">
              <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
                Examples of Different Types of AI
              </h2>

              <p className="mt-5 leading-8 text-slate-700">
                Looking at practical examples can make the classifications
                easier to understand.
              </p>

              <div className="mt-8 grid gap-5 md:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 bg-white p-6">
                  <h3 className="text-xl font-semibold text-slate-900">
                    Recommendation systems
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    Systems that recommend videos, products, music, or other
                    content are examples of task-focused AI applications.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-6">
                  <h3 className="text-xl font-semibold text-slate-900">
                    Voice assistants
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    Voice-based systems can process speech and respond to
                    particular requests using several AI technologies.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-6">
                  <h3 className="text-xl font-semibold text-slate-900">
                    Fraud detection
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    AI can analyze transaction patterns and identify activity
                    that may require additional review.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-6">
                  <h3 className="text-xl font-semibold text-slate-900">
                    Autonomous systems
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    Autonomous applications can use information from their
                    environment to make predictions or decisions.
                  </p>
                </div>
              </div>
            </section>

            {/* Summary */}
            <section className="mt-16">
              <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
                Summary
              </h2>

              <p className="mt-5 leading-8 text-slate-700">
                Artificial intelligence can be classified in several ways, and
                different classifications answer different questions.
              </p>

              <div className="mt-6 space-y-3">
                <div className="flex gap-3 rounded-xl border border-slate-200 bg-white p-4">
                  <span className="font-semibold text-blue-600">01</span>
                  <p className="leading-7 text-slate-700">
                    <strong>Narrow AI</strong> focuses on specific tasks and
                    represents the main category of AI used today.
                  </p>
                </div>

                <div className="flex gap-3 rounded-xl border border-slate-200 bg-white p-4">
                  <span className="font-semibold text-blue-600">02</span>
                  <p className="leading-7 text-slate-700">
                    <strong>General AI</strong> describes a theoretical system
                    with much broader intellectual abilities.
                  </p>
                </div>

                <div className="flex gap-3 rounded-xl border border-slate-200 bg-white p-4">
                  <span className="font-semibold text-blue-600">03</span>
                  <p className="leading-7 text-slate-700">
                    <strong>Super AI</strong> describes a hypothetical system
                    whose intelligence would exceed human abilities broadly.
                  </p>
                </div>

                <div className="flex gap-3 rounded-xl border border-slate-200 bg-white p-4">
                  <span className="font-semibold text-blue-600">04</span>
                  <p className="leading-7 text-slate-700">
                    <strong>Reactive Machines</strong> and{" "}
                    <strong>Limited Memory</strong> describe functionality
                    approaches associated with AI systems.
                  </p>
                </div>

                <div className="flex gap-3 rounded-xl border border-slate-200 bg-white p-4">
                  <span className="font-semibold text-blue-600">05</span>
                  <p className="leading-7 text-slate-700">
                    <strong>Theory of Mind</strong> and{" "}
                    <strong>Self-Aware AI</strong> describe more advanced
                    hypothetical concepts.
                  </p>
                </div>
              </div>
            </section>

           

            {/* Next reading */}
            <section className="mt-16 rounded-2xl border border-blue-100 bg-blue-50 p-6 sm:p-8">
              <div className="max-w-2xl">
                <div className="text-sm font-medium text-blue-700">
                  Continue learning
                </div>

                <h2 className="mt-2 text-2xl font-semibold text-slate-900">
                  Explore More AI Basics
                </h2>

                <p className="mt-3 leading-7 text-slate-600">
                  Continue exploring the fundamentals of artificial
                  intelligence before moving into more specialized AI topics.
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="/ai/basics"
                  className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-700"
                >
                  AI Basics
                </a>

                <a
                  href="/ai/basics/what-is-artificial-intelligence"
                  className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition hover:border-blue-200 hover:text-blue-600"
                >
                  What Is AI?
                </a>

                <a
                  href="/ai/basics/uses-of-artificial-intelligence"
                  className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition hover:border-blue-200 hover:text-blue-600"
                >
                  Uses of AI
                </a>
              </div>
            </section>
          </main>

          {/* Sidebar */}
          <aside className="lg:pt-2">
            <div className="sticky top-24">
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h2 className="text-lg font-semibold text-slate-900">
                  On this page
                </h2>

                <nav className="mt-5">
                  <ul className="space-y-3 text-sm">
                    <li>
                      <a
                        href="#"
                        className="text-slate-500 transition hover:text-blue-600"
                      >
                        Quick Answer
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="text-slate-500 transition hover:text-blue-600"
                      >
                        Types of AI
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="text-slate-500 transition hover:text-blue-600"
                      >
                        AI by Capabilities
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="text-slate-500 transition hover:text-blue-600"
                      >
                        AI by Functionality
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="text-slate-500 transition hover:text-blue-600"
                      >
                        How Many Types?
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="text-slate-500 transition hover:text-blue-600"
                      >
                        Examples
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="text-slate-500 transition hover:text-blue-600"
                      >
                        Summary
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>

              <AdSlot />
            </div>
          </aside>
        </div>
      </article>
    </>
  );
}