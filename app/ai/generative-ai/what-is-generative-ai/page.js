import Link from "next/link";
import Breadcrumbs from "../../../../components/Breadcrumb";
import AdSlot from "../../../../components/AdSlot";

export default function WhatIsGenerativeAIPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Breadcrumbs />

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <section className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-10">
          <span className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-700">
            Generative AI Basics
          </span>

          <h1 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            What Is Generative AI? Meaning, How It Works and Examples
          </h1>

          <p className="mt-5 max-w-4xl text-base leading-8 text-slate-600 sm:text-lg">
            Generative AI is a type of artificial intelligence that can create
            new content, such as text, images, music, videos, and computer
            code. It learns patterns and relationships from training data and
            uses what it has learned to generate outputs in response to
            instructions or other inputs. For example, a person can ask an AI
            assistant to explain a scientific concept, create an image from a
            description, or help write a computer program.
          </p>

          <p className="mt-4 max-w-4xl leading-7 text-slate-600">
            Unlike systems designed mainly to classify information or predict
            outcomes, generative AI focuses on producing content. However, it
            does not guarantee that everything it generates is accurate,
            original, or suitable for a particular purpose. Understanding how
            it works helps people use it responsibly.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="#how-generative-ai-works"
              className="rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700"
            >
              How It Works
            </Link>

            <Link
              href="#examples"
              className="rounded-xl border border-slate-300 px-5 py-3 font-semibold text-slate-700 hover:bg-slate-50"
            >
              Explore Examples
            </Link>
          </div>
        </section>

        <AdSlot />

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            Generative AI at a Glance
          </h2>

          <p className="mt-3 max-w-3xl leading-7 text-slate-600">
            Generative AI systems use trained models to produce different
            kinds of output. The exact process depends on the model and the
            type of content being generated.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Main purpose",
                value: "Create content",
                description: "Produces new outputs from learned patterns.",
              },
              {
                title: "Input",
                value: "Prompts or data",
                description: "May accept text, images, audio, or other inputs.",
              },
              {
                title: "Output",
                value: "Digital content",
                description: "Can generate text, images, audio, video, or code.",
              },
              {
                title: "Key limitation",
                value: "Errors are possible",
                description: "Generated answers may contain mistakes or bias.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-5"
              >
                <p className="text-sm font-medium text-slate-500">
                  {item.title}
                </p>
                <h3 className="mt-2 text-lg font-bold text-slate-900">
                  {item.value}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section id="how-generative-ai-works" className="mt-12">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            How Does Generative AI Work?
          </h2>

          <p className="mt-3 max-w-4xl leading-7 text-slate-600">
            Generative AI models are trained using data relevant to the tasks
            they are designed to perform. During training, they learn patterns
            that help them generate likely or useful outputs. When a user
            provides a prompt, the model processes the input and generates a
            response according to its learned behavior and design.
          </p>

          <div className="mt-7 rounded-3xl bg-slate-950 p-5 text-white sm:p-8">
            <h3 className="text-xl font-bold">
              Generative AI Workflow
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              A simplified view of how a trained generative AI system responds
              to a request.
            </p>

            <div className="mt-7 grid gap-3 md:grid-cols-5 md:items-stretch">
              {[
                {
                  number: "01",
                  title: "Training Data",
                  description:
                    "The model learns patterns from a large collection of relevant examples.",
                },
                {
                  number: "02",
                  title: "Trained Model",
                  description:
                    "Training produces a model with learned parameters.",
                },
                {
                  number: "03",
                  title: "User Prompt",
                  description:
                    "A person enters an instruction, question, or other input.",
                },
                {
                  number: "04",
                  title: "Generation",
                  description:
                    "The model processes the input and generates an output.",
                },
                {
                  number: "05",
                  title: "Review",
                  description:
                    "The result can be checked, refined, or corrected by the user.",
                },
              ].map((step, index) => (
                <div key={step.number} className="flex flex-col">
                  <div className="flex-1 rounded-2xl border border-slate-700 bg-slate-900 p-4">
                    <span className="text-sm font-bold text-blue-300">
                      STEP {step.number}
                    </span>
                    <h4 className="mt-3 font-bold">{step.title}</h4>
                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      {step.description}
                    </p>
                  </div>

                  {index < 4 && (
                    <div className="py-2 text-center text-2xl text-blue-300 md:hidden">
                      ↓
                    </div>
                  )}
                  {index < 4 && (
                    <div className="hidden py-2 text-center text-2xl text-blue-300 md:block">
                      →
                    </div>
                  )}
                </div>
              ))}
            </div>

            <p className="mt-5 text-xs leading-6 text-slate-400">
              Note: Training and content generation are separate stages in
              many deployed systems. Some applications also use retrieval,
              tools, or additional processing steps.
            </p>
          </div>
        </section>

        <section id="examples" className="mt-12">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            Examples of Generative AI
          </h2>

          <p className="mt-3 max-w-3xl leading-7 text-slate-600">
            Generative AI is used in many everyday tools. Different models
            specialize in different outputs, and some can work across multiple
            formats.
          </p>

          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: "✍️",
                title: "Text Generation",
                description:
                  "An AI assistant can draft emails, explain concepts, summarize documents, and help organize ideas.",
              },
              {
                icon: "🎨",
                title: "Image Generation",
                description:
                  "An image model can turn a written description into an illustration, design concept, or visual scene.",
              },
              {
                icon: "💻",
                title: "Code Generation",
                description:
                  "Coding assistants can suggest functions, explain code, generate tests, and help identify possible errors.",
              },
              {
                icon: "🎵",
                title: "Audio Generation",
                description:
                  "Audio models can produce speech, music, or sound effects based on instructions or other inputs.",
              },
              {
                icon: "🎬",
                title: "Video Generation",
                description:
                  "Video models can create or extend clips from prompts, images, and other supported inputs.",
              },
              {
                icon: "📚",
                title: "Learning Support",
                description:
                  "Generative tools can prepare practice questions, offer alternative explanations, and help create study materials.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-2xl">
                  {item.icon}
                </div>
                <h3 className="mt-4 text-lg font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <AdSlot />

        <section className="mt-12 rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-slate-900">
            Generative AI vs. Traditional AI
          </h2>

          <p className="mt-3 leading-7 text-slate-600">
            Traditional AI is a broad term that includes systems designed to
            classify, detect, recommend, or predict. Generative AI is designed
            to create content. These capabilities can overlap within the same
            product or workflow.
          </p>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[520px] border-collapse text-left">
              <thead>
                <tr className="bg-slate-100">
                  <th className="rounded-tl-xl p-4 text-sm font-semibold text-slate-700">
                    Aspect
                  </th>
                  <th className="p-4 text-sm font-semibold text-slate-700">
                    Predictive AI
                  </th>
                  <th className="rounded-tr-xl p-4 text-sm font-semibold text-slate-700">
                    Generative AI
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr>
                  <td className="p-4 font-medium text-slate-800">Goal</td>
                  <td className="p-4 text-sm leading-6 text-slate-600">
                    Estimate, classify, or predict
                  </td>
                  <td className="p-4 text-sm leading-6 text-slate-600">
                    Generate new content
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-slate-800">Example</td>
                  <td className="p-4 text-sm leading-6 text-slate-600">
                    Predicting future product demand
                  </td>
                  <td className="p-4 text-sm leading-6 text-slate-600">
                    Drafting a product description
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-slate-800">Output</td>
                  <td className="p-4 text-sm leading-6 text-slate-600">
                    Scores, categories, or forecasts
                  </td>
                  <td className="p-4 text-sm leading-6 text-slate-600">
                    Text, images, audio, or other content
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            Benefits and Limitations
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-emerald-200 bg-white p-6">
              <h3 className="text-lg font-bold text-emerald-800">
                Benefits
              </h3>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
                <li>• Helps speed up drafting and content creation.</li>
                <li>• Supports brainstorming and creative exploration.</li>
                <li>• Can explain topics in different ways.</li>
                <li>• Assists with coding and repetitive writing tasks.</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-amber-200 bg-white p-6">
              <h3 className="text-lg font-bold text-amber-800">
                Limitations
              </h3>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
                <li>• May produce incorrect or fabricated information.</li>
                <li>• Can reproduce biases found in training data.</li>
                <li>• Output quality depends on the task and input.</li>
                <li>• Privacy and copyright require careful consideration.</li>
              </ul>
            </div>
          </div>
        </section>

      

         {/* Related Topics */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="rounded-3xl bg-blue-600 px-7 py-10 text-white sm:px-10">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-100">
              Continue Learning
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              Explore More About Generative AI
            </h2>

            <p className="mt-4 leading-7 text-blue-100">
              Now that you understand the meaning of Generative AI,
              explore its practical applications and the different learning
              methods used to develop models.
            </p>
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/ai/generative-ai/uses-of-generative-ai"
              className="rounded-xl bg-white px-5 py-3 text-sm font-medium text-blue-600 transition hover:bg-blue-50"
            >
              Uses of Generative AI
            </Link>

            <Link
              href="/ai/generative-ai/types-of-generative-ai"
              className="rounded-xl border border-blue-400 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-500"
            >
              Types of Generative AI
            </Link>

            <Link
              href="/ai/generative-ai"
              className="rounded-xl border border-blue-400 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-500"
            >
              Generative AI Main Page
            </Link>
          </div>
        </div>
      </section>
      </main>
    </div>
  );
}