import AdSlot from '../../../../components/AdSlot'
import Breadcrumbs from '../../../../components/Breadcrumb'
const sections = [
  { id: "simple", label: "AI in simple words" },
  { id: "how-it-works", label: "How AI works" },
  { id: "types", label: "Types of AI" },
  { id: "machine-learning", label: "Machine learning" },
  { id: "generative-ai", label: "Generative AI" },
  { id: "uses", label: "Where AI is used" },
  { id: "benefits", label: "Benefits" },
  { id: "limitations", label: "Limitations" },
  { id: "future", label: "The future of AI" },
  { id: "faq", label: "Frequently asked questions" },
];

export default function ArtificialIntelligencePage() {
  return (
    <main className="min-h-screen bg-[#f8fafc] text-slate-900">

  {/* Breadcrumb */}
     <Breadcrumbs />
     

     

      {/* Hero */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8 lg:py-20">

          <div className="grid gap-12 lg:grid-cols-[1fr_360px] lg:items-center">

            <div>
              <div className="mb-5 flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-blue-700">
                  Artificial Intelligence
                </span>

                <span className="text-sm text-slate-500">
                  Beginner Guide
                </span>
              </div>

              <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl lg:leading-[1.08]">
                What Is Artificial Intelligence?
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
                Artificial intelligence enables computers and machines to
                perform tasks that normally require human intelligence,
                including understanding language, recognizing patterns,
                solving problems, making predictions, and generating content.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-slate-500">
                <span>Updated October 2026</span>
                <span className="hidden h-1 w-1 rounded-full bg-slate-300 sm:block" />
                <span>Beginner friendly</span>
                <span className="hidden h-1 w-1 rounded-full bg-slate-300 sm:block" />
                <span>12 min read</span>
              </div>
            </div>

            {/* Hero visual */}
            <div className="relative overflow-hidden rounded-3xl bg-slate-950 p-7 shadow-xl">
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-blue-500/20 blur-2xl" />
              <div className="absolute -bottom-20 -left-10 h-40 w-40 rounded-full bg-cyan-400/10 blur-2xl" />

              <div className="relative">
                <div className="mb-7 flex items-center justify-between">
                  <span className="text-sm font-semibold text-white">
                    AI
                  </span>

                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-400">
                    Knowledge Map
                  </span>
                </div>

                <div className="flex items-center justify-center py-7">
                  <div className="flex h-28 w-28 items-center justify-center rounded-full border border-blue-400/30 bg-blue-500/10 shadow-[0_0_60px_rgba(59,130,246,0.15)]">
                    <div className="text-3xl font-bold text-blue-400">
                      AI
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {["Data", "Learning", "Reasoning", "Prediction"].map(
                    (item) => (
                      <div
                        key={item}
                        className="rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-center text-xs font-medium text-slate-300"
                      >
                        {item}
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Main content */}
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 lg:grid-cols-[230px_minmax(0,760px)_1fr] lg:px-8">

        {/* Table of contents */}
        <aside className="hidden lg:block">
          <div className="sticky top-24">
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-slate-400">
              On this page
            </p>

            <nav className="space-y-1 border-l border-slate-200">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="block border-l-2 border-transparent py-1.5 pl-4 text-sm text-slate-500 transition hover:border-blue-500 hover:text-blue-600"
                >
                  {section.label}
                </a>
              ))}
            </nav>
          </div>
        </aside>

        {/* Article */}
        <article className="min-w-0">

          {/* Intro card */}
          <div className="mb-10 rounded-2xl border border-blue-100 bg-blue-50/70 p-6 sm:p-7">
            <p className="text-lg font-medium leading-8 text-slate-800">
              <strong>In simple terms:</strong> Artificial intelligence is
              technology that allows computers to perform tasks associated
              with human intelligence. Modern AI can recognize patterns,
              understand language, analyze information, make predictions,
              and generate new content.
            </p>
          </div>

          <section id="simple" className="scroll-mt-24">
            <h2 className="text-3xl font-bold tracking-tight">
              AI in simple words
            </h2>

            <p className="mt-5 text-[17px] leading-8 text-slate-600">
              A traditional computer program usually follows instructions
              explicitly written by a developer. Many modern AI systems work
              differently. They can learn patterns from examples and use
              those patterns to produce useful results when they encounter
              new information.
            </p>

            <p className="mt-5 text-[17px] leading-8 text-slate-600">
              For example, an image recognition system can be trained using
              many examples of photographs. After learning patterns from
              those examples, it can analyze a new image and estimate what
              objects or features are present.
            </p>

            <div className="my-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                Simple definition
              </p>

              <p className="mt-3 text-xl font-semibold leading-8 text-slate-900">
                AI is the use of computer systems to perform tasks that
                involve abilities we normally associate with human
                intelligence.
              </p>
            </div>
          </section>
         <AdSlot />
          <section id="how-it-works" className="mt-16 scroll-mt-24">
            <h2 className="text-3xl font-bold tracking-tight">
              How does artificial intelligence work?
            </h2>

            <p className="mt-5 text-[17px] leading-8 text-slate-600">
              AI is not one single technology. Different systems use
              different algorithms, models, data, and computing techniques.
              A simplified view of many AI systems looks like this:
            </p>

            <div className="my-8 grid gap-3 sm:grid-cols-4">
              {["Data", "Processing", "Model", "Output"].map(
                (item, index) => (
                  <div key={item} className="relative">
                    <div className="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm">
                      <div className="mx-auto mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-blue-50 text-sm font-bold text-blue-600">
                        {index + 1}
                      </div>

                      <p className="font-semibold">{item}</p>
                    </div>

                    {index < 3 && (
                      <span className="absolute -right-2 top-1/2 z-10 hidden -translate-y-1/2 text-slate-300 sm:block">
                        →
                      </span>
                    )}
                  </div>
                )
              )}
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold">Data</h3>
                <p className="mt-2 text-[17px] leading-8 text-slate-600">
                  AI systems may work with text, images, audio, video,
                  numbers, sensor information, or other forms of data.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">Algorithms</h3>
                <p className="mt-2 text-[17px] leading-8 text-slate-600">
                  Algorithms provide computational methods for processing
                  information, identifying patterns, making predictions, or
                  solving problems.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">Models</h3>
                <p className="mt-2 text-[17px] leading-8 text-slate-600">
                  In machine learning, models are trained using data so they
                  can process new information and produce an output.
                </p>
              </div>
            </div>
          </section>

          <section id="types" className="mt-16 scroll-mt-24">
            <h2 className="text-3xl font-bold tracking-tight">
              Types of artificial intelligence
            </h2>

            <p className="mt-5 text-[17px] leading-8 text-slate-600">
              AI can be classified in several ways. One common approach
              considers how broadly a system can perform tasks.
            </p>

            <div className="mt-8 grid gap-5">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-semibold">Narrow AI</h3>
                  <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                    Common today
                  </span>
                </div>

                <p className="mt-3 leading-7 text-slate-600">
                  AI designed to perform specific tasks or a limited range
                  of tasks. Most AI systems people use today fall into this
                  category.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-semibold">
                  Artificial General Intelligence
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  AGI describes a hypothetical AI capable of performing a
                  broad range of intellectual tasks at a level comparable to
                  humans rather than being restricted to a particular task.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-semibold">
                  Artificial Superintelligence
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  A hypothetical form of AI that would exceed human
                  intellectual capabilities across a very broad range of
                  areas.
                </p>
              </div>
            </div>
          </section>
          <AdSlot />
          <section id="machine-learning" className="mt-16 scroll-mt-24">
            <h2 className="text-3xl font-bold tracking-tight">
              What is machine learning?
            </h2>

            <p className="mt-5 text-[17px] leading-8 text-slate-600">
              Machine learning is one of the major approaches used in modern
              artificial intelligence. Instead of manually programming every
              possible rule, machine-learning systems can learn patterns from
              examples or data.
            </p>

            <div className="my-8 rounded-2xl bg-slate-950 p-6 text-center text-white">
              <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
                <span className="rounded-xl bg-blue-500/20 px-5 py-3 font-semibold text-blue-300">
                  Artificial Intelligence
                </span>

                <span className="text-slate-500">→</span>

                <span className="rounded-xl bg-white/10 px-5 py-3 font-semibold">
                  Machine Learning
                </span>

                <span className="text-slate-500">→</span>

                <span className="rounded-xl bg-white/10 px-5 py-3 font-semibold">
                  Deep Learning
                </span>
              </div>
            </div>
          </section>

          <section id="generative-ai" className="mt-16 scroll-mt-24">
            <h2 className="text-3xl font-bold tracking-tight">
              What is generative AI?
            </h2>

            <p className="mt-5 text-[17px] leading-8 text-slate-600">
              Generative AI refers to AI systems capable of producing new
              content based on patterns learned from data.
            </p>

            <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {["Text", "Images", "Audio", "Code"].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-white p-5 text-center font-semibold shadow-sm"
                >
                  {item}
                </div>
              ))}
            </div>
          </section>

          <section id="uses" className="mt-16 scroll-mt-24">
            <h2 className="text-3xl font-bold tracking-tight">
              Where is artificial intelligence used?
            </h2>

            <p className="mt-5 text-[17px] leading-8 text-slate-600">
              AI is now used across a wide range of industries and everyday
              technologies.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                ["Healthcare", "Medical research, image analysis, and decision support."],
                ["Finance", "Fraud detection, risk analysis, and transaction monitoring."],
                ["Education", "Learning tools, language assistance, and educational content."],
                ["Business", "Customer support, analysis, forecasting, and automation."],
                ["Transportation", "Route optimization, traffic prediction, and driver assistance."],
                ["Cybersecurity", "Pattern analysis and detection of suspicious activity."],
              ].map(([title, description]) => (
                <div
                  key={title}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <h3 className="font-semibold">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section id="benefits" className="mt-16 scroll-mt-24">
            <h2 className="text-3xl font-bold tracking-tight">
              Benefits of artificial intelligence
            </h2>

            <div className="mt-7 space-y-4">
              {[
                ["Large-scale processing", "AI can process very large amounts of information quickly."],
                ["Automation", "AI can automate repetitive or complex tasks."],
                ["Pattern detection", "AI can identify patterns in data that may be difficult to spot manually."],
                ["Personalization", "AI can help create more personalized digital experiences."],
              ].map(([title, description]) => (
                <div
                  key={title}
                  className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5"
                >
                  <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-xs font-bold text-emerald-600">
                    ✓
                  </div>

                  <div>
                    <h3 className="font-semibold">{title}</h3>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="limitations" className="mt-16 scroll-mt-24">
            <h2 className="text-3xl font-bold tracking-tight">
              Limitations of AI
            </h2>

            <p className="mt-5 text-[17px] leading-8 text-slate-600">
              AI can be extremely useful, but it is not infallible. Systems
              can produce incorrect, incomplete, biased, or misleading
              results.
            </p>

            <div className="mt-7 rounded-2xl border border-amber-200 bg-amber-50 p-6">
              <p className="font-semibold text-amber-900">
                Important:
              </p>

              <p className="mt-2 leading-7 text-amber-800">
                A confident AI response is not automatically a correct
                response. Important information should be verified using
                appropriate sources.
              </p>
            </div>
          </section>

          <section id="future" className="mt-16 scroll-mt-24">
            <h2 className="text-3xl font-bold tracking-tight">
              What does the future of AI look like?
            </h2>

            <p className="mt-5 text-[17px] leading-8 text-slate-600">
              AI is likely to continue influencing software, healthcare,
              education, business, science, manufacturing, entertainment,
              and many other fields.
            </p>

            <p className="mt-5 text-[17px] leading-8 text-slate-600">
              At the same time, questions around privacy, security,
              misinformation, employment, regulation, bias, and human
              oversight will become increasingly important.
            </p>
          </section>

          <section id="faq" className="mt-16 scroll-mt-24">
            <h2 className="text-3xl font-bold tracking-tight">
              Frequently asked questions
            </h2>

            <div className="mt-7 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
              {[
                [
                  "Is AI the same as ChatGPT?",
                  "No. ChatGPT is an AI application based on generative AI technology. Artificial intelligence is the much broader field containing many different technologies and applications.",
                ],
                [
                  "Is machine learning a type of AI?",
                  "Yes. Machine learning is one of the major approaches used to build artificial intelligence systems.",
                ],
                [
                  "Can AI think like a human?",
                  "AI can perform tasks that appear to involve reasoning and problem-solving, but this does not mean current AI systems think in exactly the same way humans do.",
                ],
                [
                  "Is AI always accurate?",
                  "No. AI systems can produce incorrect or misleading results, so important information should be independently verified.",
                ],
              ].map(([question, answer]) => (
                <details key={question} className="group p-6">
                  <summary className="cursor-pointer list-none font-semibold text-slate-900">
                    <div className="flex items-center justify-between gap-5">
                      <span>{question}</span>
                      <span className="text-xl text-slate-400 transition group-open:rotate-45">
                        +
                      </span>
                    </div>
                  </summary>

                  <p className="mt-4 max-w-3xl leading-7 text-slate-600">
                    {answer}
                  </p>
                </details>
              ))}
            </div>
          </section>

          {/* Related articles */}
          <section className="mt-16 border-t border-slate-200 pt-10">
            <p className="text-xs font-bold uppercase tracking-widest text-blue-600">
              Continue exploring
            </p>

            <h2 className="mt-2 text-2xl font-bold">
              More about artificial intelligence
            </h2>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <a
                href="/ai/basics/uses-of-artificial-intelligence"
                className="group rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-md"
              >
                <p className="font-semibold group-hover:text-blue-600">
                  Uses of Artificial Intelligence
                </p>
                <p className="mt-2 text-sm text-slate-500">
                  Explore practical applications of AI across different
                  industries.
                </p>
              </a>

              <a
                href="/ai/basics/examples-of-artificial-intelligence"
                className="group rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-md"
              >
                <p className="font-semibold group-hover:text-blue-600">
                  Examples of Artificial Intelligence
                </p>
                <p className="mt-2 text-sm text-slate-500">
                  Discover examples of AI you may already use every day.
                </p>
              </a>
            </div>
          </section>

        </article>

        

      </div>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <div>
            <span className="font-bold text-slate-900">INFO HUB</span>
            <span className="ml-2">
              Knowledge, organized.
            </span>
          </div>

          <div className="flex gap-6">
            <a href="/about" className="hover:text-blue-600">
              About
            </a>

            <a href="/contact" className="hover:text-blue-600">
              Contact
            </a>

            <a href="/privacy" className="hover:text-blue-600">
              Privacy
            </a>
          </div>
        </div>
      </footer>

    </main>
  );
}
