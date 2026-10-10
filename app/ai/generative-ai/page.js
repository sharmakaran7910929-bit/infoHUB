import Link from "next/link";
import Breadcrumbs from "../../../components/Breadcrumb";
import AdSlot from "../../../components/AdSlot";

const topics = [
  {
    title: "What Is Generative AI?",
    description:
      "Understand what generative AI means, how it learns patterns from training data, and how it creates new text, images, audio, video, and other content.",
    href: "/ai/generative-ai/what-is-generative-ai",
    label: "Beginner Guide",
  },
  {
    title: "Uses of Generative AI",
    description:
      "Explore how generative AI supports writing, software development, education, design, business communication, research, and creative work.",
    href: "/ai/generative-ai/uses-of-generative-ai",
    label: "Real-World Applications",
  },
  {
    title: "Types of Generative AI",
    description:
      "Learn about text generators, image generators, audio and video generation, code generation, and the models used to produce different outputs.",
    href: "/ai/generative-ai/types-of-generative-ai",
    label: "Explore the Types",
  },
];

const outputTypes = [
  {
    icon: "✍️",
    title: "Text",
    description: "Articles, summaries, explanations, and conversations.",
  },
  {
    icon: "🎨",
    title: "Images",
    description: "Illustrations, product concepts, and visual designs.",
  },
  {
    icon: "🎵",
    title: "Audio",
    description: "Speech, music, sound effects, and voice generation.",
  },
  {
    icon: "🎬",
    title: "Video",
    description: "Short clips, animated scenes, and visual storytelling.",
  },
  {
    icon: "💻",
    title: "Code",
    description: "Code suggestions, examples, tests, and explanations.",
  },
  {
    icon: "🧊",
    title: "3D Content",
    description: "Three-dimensional objects and digital assets.",
  },
];

export default function GenerativeAIPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Breadcrumbs />

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white">
          <div className="grid gap-8 p-6 sm:p-10 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-700">
                Artificial Intelligence
              </span>

              <h1 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                Generative AI: Meaning, Types, Uses and Examples
              </h1>

              <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
                Generative AI is a branch of artificial intelligence that
                creates new content by learning patterns from existing data.
                It can generate text, images, music, videos, computer code, and
                other digital outputs based on instructions, examples, or
                other inputs provided by a user.
              </p>

              <p className="mt-4 leading-7 text-slate-600">
                From answering questions and helping programmers to creating
                visual concepts and summarizing documents, generative AI is
                changing how people work with information and digital tools.
                Understanding its capabilities and limitations helps people
                use it more effectively.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="/ai/generative-ai/what-is-generative-ai"
                  className="rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
                >
                  Start Learning
                </Link>

                <Link
                  href="/ai/generative-ai/uses-of-generative-ai"
                  className="rounded-xl border border-slate-300 px-5 py-3 font-semibold text-slate-700 transition hover:bg-slate-50"
                >
                  Explore Its Uses
                </Link>
              </div>
            </div>

            <div className="rounded-2xl bg-slate-950 p-5 text-white sm:p-7">
              <p className="text-sm font-semibold uppercase tracking-widest text-blue-300">
                How Generative AI Works
              </p>

              <div className="mt-6 space-y-3">
                <div className="rounded-xl border border-slate-700 bg-slate-900 p-4 text-center">
                  <div className="text-2xl">💬</div>
                  <h2 className="mt-2 font-semibold">1. User Input</h2>
                  <p className="mt-1 text-sm text-slate-400">
                    A prompt, question, image, or other input
                  </p>
                </div>

                <div className="text-center text-2xl text-blue-300">↓</div>

                <div className="rounded-xl border border-blue-400/40 bg-blue-500/10 p-4 text-center">
                  <div className="text-2xl">⚙️</div>
                  <h2 className="mt-2 font-semibold">2. AI Model</h2>
                  <p className="mt-1 text-sm text-slate-300">
                    Processes the input using learned patterns
                  </p>
                </div>

                <div className="text-center text-2xl text-blue-300">↓</div>

                <div className="rounded-xl border border-emerald-400/30 bg-emerald-500/10 p-4 text-center">
                  <div className="text-2xl">✨</div>
                  <h2 className="mt-2 font-semibold">3. Generated Output</h2>
                  <p className="mt-1 text-sm text-slate-300">
                    New text, an image, code, audio, or other content
                  </p>
                </div>
              </div>

              <p className="mt-5 text-xs leading-6 text-slate-400">
                Simplified overview: actual generation methods differ between
                model architectures and content types.
              </p>
            </div>
          </div>
        </section>

        <AdSlot />

        <section className="mt-12">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              What Can Generative AI Create?
            </h2>
            <p className="mt-3 leading-7 text-slate-600">
              Generative AI is not limited to chatbots. Different models are
              designed to generate different kinds of content, and some
              systems can work with several types of input and output.
            </p>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {outputTypes.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-blue-300 hover:shadow-sm"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-2xl">
                  {item.icon}
                </div>
                <h3 className="mt-4 text-lg font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12 rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-slate-900">
            Generative AI vs. Traditional AI
          </h2>
          <p className="mt-3 max-w-3xl leading-7 text-slate-600">
            AI systems can be designed for different goals. Some primarily
            classify information or make predictions, while generative systems
            are designed to produce new content. These categories can overlap:
            a single application may combine both approaches.
          </p>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[520px] border-collapse text-left">
              <thead>
                <tr className="bg-slate-100">
                  <th className="rounded-tl-xl p-4 text-sm font-semibold text-slate-700">
                    Feature
                  </th>
                  <th className="p-4 text-sm font-semibold text-slate-700">
                    Predictive or Analytical AI
                  </th>
                  <th className="rounded-tr-xl p-4 text-sm font-semibold text-slate-700">
                    Generative AI
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr>
                  <td className="p-4 font-medium text-slate-800">Main goal</td>
                  <td className="p-4 text-sm leading-6 text-slate-600">
                    Classify, estimate, detect, or predict
                  </td>
                  <td className="p-4 text-sm leading-6 text-slate-600">
                    Generate new content
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-slate-800">Example</td>
                  <td className="p-4 text-sm leading-6 text-slate-600">
                    Flagging a potentially fraudulent transaction
                  </td>
                  <td className="p-4 text-sm leading-6 text-slate-600">
                    Drafting a customer email
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-slate-800">Typical output</td>
                  <td className="p-4 text-sm leading-6 text-slate-600">
                    A category, score, forecast, or alert
                  </td>
                  <td className="p-4 text-sm leading-6 text-slate-600">
                    Text, images, audio, code, or other content
                  </td>
                </tr>
                <tr>
                  <td className="rounded-bl-xl p-4 font-medium text-slate-800">
                    Common task
                  </td>
                  <td className="p-4 text-sm leading-6 text-slate-600">
                    Predicting demand from historical sales
                  </td>
                  <td className="rounded-br-xl p-4 text-sm leading-6 text-slate-600">
                    Creating a draft marketing campaign
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 rounded-xl bg-blue-50 p-4">
            <p className="text-sm leading-6 text-blue-900">
              <strong>Important:</strong> This is a comparison of common
              purposes, not a strict separation. Generative AI can also
              perform analysis, and other AI systems can be part of a
              generative application.
            </p>
          </div>
        </section>

        <AdSlot />

        <section className="mt-12">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              Learn Generative AI Step by Step
            </h2>
            <p className="mt-3 leading-7 text-slate-600">
              Start with the basic definition, explore real-world applications,
              and then learn about the main types of generative systems.
              Each guide focuses on a specific question to make the subject
              easier to understand.
            </p>
          </div>

          <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {topics.map((topic, index) => (
              <article
                key={topic.href}
                className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-md"
              >
                <span className="text-sm font-semibold text-blue-600">
                  {topic.label}
                </span>
                <h3 className="mt-3 text-xl font-bold text-slate-900">
                  {topic.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">
                  {topic.description}
                </p>
                <Link
                  href={topic.href}
                  className="mt-5 inline-flex items-center gap-2 font-semibold text-blue-700 hover:text-blue-900"
                >
                  Read the guide <span aria-hidden="true">→</span>
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-12 rounded-3xl bg-slate-900 p-6 text-white sm:p-8">
          <h2 className="text-2xl font-bold">
            Benefits and Limitations of Generative AI
          </h2>

          <div className="mt-6 grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-lg font-semibold text-emerald-300">
                Potential Benefits
              </h3>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-300">
                <li>• Helps create and revise content more quickly.</li>
                <li>• Explains concepts and supports learning.</li>
                <li>• Assists with coding, brainstorming, and design.</li>
                <li>• Can adapt outputs to different tasks and formats.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-amber-300">
                Important Limitations
              </h3>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-300">
                <li>• May generate incorrect or misleading information.</li>
                <li>• Can reflect bias present in training data.</li>
                <li>• May raise privacy, copyright, or security concerns.</li>
                <li>• Important outputs need human review and verification.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mt-12 rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
          <h2 className="text-xl font-bold text-slate-900">
            Explore More AI Topics
          </h2>
          <p className="mt-2 leading-7 text-slate-600">
            Generative AI is one area of the wider field of artificial
            intelligence. Continue learning about machine learning and the
            fundamentals of AI.
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/ai"
              className="rounded-xl border border-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50"
            >
              AI Basics
            </Link>
            <Link
              href="/ai/machine-learning"
              className="rounded-xl border border-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50"
            >
              Machine Learning
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}