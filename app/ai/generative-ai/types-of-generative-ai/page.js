import Link from "next/link";
import {
  Image,
  FileText,
  Music,
  Video,
  Code2,
  Box,
  Brain,
  MessageSquare,
  Sparkles,
  Workflow,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";

import Breadcrumbs from "../../../../components/Breadcrumb";
import AdSlot from "../../../../components/AdSlot";

const generativeAITypes = [
  {
    title: "Text Generation",
    description:
      "Text generation models create human-like text from instructions, questions, or other input. They can produce articles, summaries, explanations, stories, product descriptions, and conversational responses.",
    icon: FileText,
    examples: "Articles, summaries, chat responses, and reports",
  },
  {
    title: "Image Generation",
    description:
      "Image generation models create new images from written prompts, reference images, or a combination of inputs. They are used in illustration, advertising, concept design, educational materials, and creative projects.",
    icon: Image,
    examples: "Digital art, illustrations, product concepts, and posters",
  },
  {
    title: "Audio Generation",
    description:
      "Audio generation models produce speech, music, sound effects, and other audio content. Depending on the model, users can generate spoken narration, create musical arrangements, or transform text into natural-sounding speech.",
    icon: Music,
    examples: "Voiceovers, music, narration, and sound effects",
  },
  {
    title: "Video Generation",
    description:
      "Video generation models create or modify video clips using text descriptions, images, or existing footage. They can help creators develop visual scenes, promotional clips, animations, and early versions of video projects.",
    icon: Video,
    examples: "Short clips, animations, advertisements, and visual scenes",
  },
  {
    title: "Code Generation",
    description:
      "Code generation models produce programming code based on instructions and examples. They can help developers write functions, explain unfamiliar code, create tests, and explore possible solutions, although generated code still requires review and testing.",
    icon: Code2,
    examples: "Functions, test cases, scripts, and code explanations",
  },
  {
    title: "3D Content Generation",
    description:
      "Three-dimensional content generation models create or assist with the creation of 3D objects, shapes, textures, and digital assets. These capabilities can support game development, animation, product visualization, and virtual environments.",
    icon: Box,
    examples: "3D objects, game assets, models, and virtual scenes",
  },
  {
    title: "Conversational AI",
    description:
      "Conversational AI models generate responses based on a user's messages and the available conversation context. They can support learning, customer service, brainstorming, information retrieval, and interactive digital assistants.",
    icon: MessageSquare,
    examples: "AI assistants, tutoring tools, and customer support",
  },
  {
    title: "Multimodal Generation",
    description:
      "Multimodal generative AI works with multiple content formats, such as text, images, audio, and video. Depending on its capabilities, a model may interpret one type of input and generate another, enabling more flexible interactions.",
    icon: Brain,
    examples: "Text-to-image, speech-to-text, and image understanding",
  },
];

const generationSteps = [
  {
    number: "01",
    title: "Provide an input",
    description:
      "A user enters a prompt, uploads an image, provides audio, or supplies another supported input.",
  },
  {
    number: "02",
    title: "The model processes it",
    description:
      "The model uses patterns learned during training to interpret the input and determine an appropriate output.",
  },
  {
    number: "03",
    title: "New content is generated",
    description:
      "The model produces content in a supported format, such as text, an image, audio, video, or code.",
  },
  {
    number: "04",
    title: "Review the result",
    description:
      "The user checks the generated result for accuracy, quality, safety, and suitability before using it.",
  },
];

const importantPoints = [
  "Different generative AI models are designed for different content formats and tasks.",
  "Some models specialize in one format, while multimodal models can work across several formats.",
  "Generated content can contain errors, biases, or misleading details, so human review remains important.",
  "The quality of results depends on the model, the input, the available context, and the task.",
];

export default function TypesOfGenerativeAIPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Breadcrumbs />

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white">
          <div className="grid gap-10 px-6 py-10 sm:px-10 sm:py-14 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
                <Sparkles size={16} aria-hidden="true" />
                Artificial Intelligence
              </div>

              <h1 className="mt-6 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
                Types of Generative AI
              </h1>

              <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
                Generative AI includes different kinds of models that can
                create text, images, audio, video, computer code, and other
                digital content. Each type serves different purposes, from
                helping people write and design to supporting software
                development and creative production.
              </p>

              <p className="mt-4 max-w-3xl leading-7 text-slate-600">
                Understanding these categories makes it easier to identify
                which generative AI technology is suitable for a particular
                task, what it can produce, and where its limitations need to
                be considered.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/ai/generative-ai/what-is-generative-ai"
                  className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
                >
                  <FileText size={18} aria-hidden="true" />
                  What Is Generative AI?
                </Link>

                <Link
                  href="/ai/generative-ai/uses-of-generative-ai"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-blue-300 hover:bg-blue-50"
                >
                  Explore Its Uses
                </Link>
              </div>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-100 p-6 sm:p-8">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: FileText, label: "Text" },
                  { icon: Image, label: "Images" },
                  { icon: Music, label: "Audio" },
                  { icon: Video, label: "Video" },
                  { icon: Code2, label: "Code" },
                  { icon: Box, label: "3D Content" },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.label}
                      className="flex flex-col items-center justify-center rounded-2xl border border-white bg-white/90 px-3 py-5 text-center shadow-sm"
                    >
                      <Icon
                        size={28}
                        strokeWidth={1.8}
                        className="text-blue-600"
                        aria-hidden="true"
                      />
                      <span className="mt-3 text-sm font-semibold text-slate-800">
                        {item.label}
                      </span>
                    </div>
                  );
                })}
              </div>

              <p className="mt-5 text-center text-sm leading-6 text-slate-600">
                Different content formats, powered by generative AI models.
              </p>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="mt-12">
          <div className="max-w-4xl">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              What Are the Main Types of Generative AI?
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Generative AI is commonly classified according to the kind of
              content a model creates or the types of information it can
              process. Text, image, audio, video, code, and 3D generation are
              important categories. Conversational and multimodal AI describe
              additional capabilities that may overlap with these categories.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              These categories are not always completely separate. For
              example, a conversational AI assistant may generate text, analyze
              images, and work with audio. A multimodal model may combine
              several capabilities in a single system.
            </p>
          </div>
        </section>

        {/* First Ad Slot */}
        <div className="my-10">
          <AdSlot />
        </div>

        {/* Types Grid */}
        <section className="mt-12">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              8 Important Types of Generative AI
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Explore the major categories, how they work at a high level,
              and the kinds of tasks they can help people perform.
            </p>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {generativeAITypes.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6 transition duration-200 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <Icon
                      size={24}
                      strokeWidth={1.8}
                      aria-hidden="true"
                    />
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>

                  <div className="mt-5 border-t border-slate-100 pt-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-blue-700">
                      Examples
                    </p>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {item.examples}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* Text Generation */}
        <section className="mt-16 grid gap-8 lg:grid-cols-2 lg:items-start">
          <div>
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
              <FileText size={23} aria-hidden="true" />
            </div>

            <h2 className="mt-5 text-2xl font-bold text-slate-900">
              Text and Conversational Generation
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              Text generation models learn patterns in language and use them
              to generate relevant sequences of words. They can help with
              writing, summarizing, translating, explaining concepts, and
              producing structured text. Their output depends on the prompt,
              the model's training, and the context available.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              Conversational AI applies these capabilities to interactive
              exchanges. It can use previous messages as context to respond to
              follow-up questions, clarify a topic, or assist with a task.
              However, fluent responses are not proof that every statement is
              factually correct.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
            <h3 className="text-lg font-bold text-slate-900">
              Common applications
            </h3>

            <ul className="mt-5 space-y-4">
              {[
                "Drafting articles, emails, and reports",
                "Summarizing long documents",
                "Explaining educational topics",
                "Answering questions in conversational interfaces",
                "Generating ideas and organizing information",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    size={20}
                    className="mt-0.5 shrink-0 text-blue-600"
                    aria-hidden="true"
                  />
                  <span className="leading-7 text-slate-600">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Image, Audio and Video */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Generating Visual and Audio Content
          </h2>

          <p className="mt-4 max-w-4xl leading-8 text-slate-600">
            Generative AI is also used to create visual and audio material.
            These systems can help people move from a written idea to a visual
            concept, an audio recording, or a video sequence. The exact
            capabilities vary across tools and models.
          </p>

          <div className="mt-7 grid gap-6 md:grid-cols-3">
            <article className="rounded-2xl border border-slate-200 bg-white p-6">
              <Image
                size={28}
                className="text-blue-600"
                aria-hidden="true"
              />
              <h3 className="mt-4 text-lg font-bold text-slate-900">
                Image Generation
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                A user describes a scene, style, or subject, and the model
                generates an image that attempts to match the request. These
                tools are useful for concept art, illustrations, and design
                exploration.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white p-6">
              <Music
                size={28}
                className="text-blue-600"
                aria-hidden="true"
              />
              <h3 className="mt-4 text-lg font-bold text-slate-900">
                Audio Generation
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Audio models can generate speech, music, and sound effects.
                They may also support voice synthesis or audio transformation
                depending on the system and its intended use.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white p-6">
              <Video
                size={28}
                className="text-blue-600"
                aria-hidden="true"
              />
              <h3 className="mt-4 text-lg font-bold text-slate-900">
                Video Generation
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Video models generate sequences of frames to represent motion
                and scenes. They can support creative experimentation,
                storyboarding, and the production of short visual clips.
              </p>
            </article>
          </div>
        </section>

        {/* Code and 3D */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Code and Three-Dimensional Content Generation
          </h2>

          <p className="mt-4 max-w-4xl leading-8 text-slate-600">
            Some generative AI systems are designed to support technical and
            spatial tasks. Code generation focuses on programming languages
            and software development, while 3D content generation focuses on
            digital objects and environments.
          </p>

          <div className="mt-7 grid gap-6 md:grid-cols-2">
            <article className="rounded-2xl border border-slate-200 bg-white p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <Code2 size={25} aria-hidden="true" />
              </div>

              <h3 className="mt-5 text-xl font-bold text-slate-900">
                Code Generation
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Code generation models assist with programming by producing
                code from natural-language instructions or existing examples.
                Developers can use them to explore implementation approaches,
                create repetitive code, understand unfamiliar functions, and
                develop tests.
              </p>

              <p className="mt-3 leading-7 text-slate-600">
                Generated code may contain bugs, security weaknesses, or
                incorrect assumptions. It should be reviewed, tested, and
                checked against the requirements before being used.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <Box size={25} aria-hidden="true" />
              </div>

              <h3 className="mt-5 text-xl font-bold text-slate-900">
                3D Content Generation
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                3D generation models can help produce digital objects, shapes,
                textures, and other assets. They can reduce the effort needed
                to explore design ideas and create initial assets for games,
                animation, simulations, and product visualization.
              </p>

              <p className="mt-3 leading-7 text-slate-600">
                The generated result may still need editing, optimization,
                and technical checks before it can be used in a production
                environment.
              </p>
            </article>
          </div>
        </section>

        {/* Second Ad Slot */}
        <div className="my-12">
          <AdSlot />
        </div>

        {/* How It Works */}
        <section className="mt-12">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              How Does Generative AI Create Different Types of Content?
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              Although the technical details vary, generative AI systems
              generally learn patterns from training data and use those
              patterns to produce new outputs. A text model, for example,
              generates language, while an image model generates visual
              content. Some systems combine multiple capabilities.
            </p>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {generationSteps.map((step) => (
              <article
                key={step.number}
                className="rounded-2xl border border-slate-200 bg-white p-6"
              >
                <span className="text-sm font-bold tracking-widest text-blue-600">
                  STEP {step.number}
                </span>

                <h3 className="mt-4 text-lg font-bold text-slate-900">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* Choosing the Right Type */}
        <section className="mt-16">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-9">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <Workflow size={25} aria-hidden="true" />
              </div>

              <div>
                <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                  How to Choose the Right Type of Generative AI
                </h2>

                <p className="mt-4 leading-8 text-slate-600">
                  The most suitable type depends on the content you want to
                  create and the problem you want to solve. A writing task
                  generally calls for text generation, while visual design
                  may require image generation. A task involving several
                  formats may benefit from a multimodal system.
                </p>
              </div>
            </div>

            <div className="mt-8 overflow-x-auto">
              <table className="w-full min-w-[560px] border-collapse text-left">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50">
                    <th className="px-4 py-4 text-sm font-bold text-slate-900">
                      Your goal
                    </th>
                    <th className="px-4 py-4 text-sm font-bold text-slate-900">
                      Relevant type
                    </th>
                    <th className="px-4 py-4 text-sm font-bold text-slate-900">
                      Example task
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-slate-100">
                  {[
                    [
                      "Write or summarize information",
                      "Text generation",
                      "Drafting an article",
                    ],
                    [
                      "Create a visual",
                      "Image generation",
                      "Producing an illustration",
                    ],
                    [
                      "Generate speech or music",
                      "Audio generation",
                      "Creating a voiceover",
                    ],
                    [
                      "Create a moving scene",
                      "Video generation",
                      "Making a short video clip",
                    ],
                    [
                      "Assist with programming",
                      "Code generation",
                      "Writing a code function",
                    ],
                    [
                      "Work across formats",
                      "Multimodal generation",
                      "Combining image and text input",
                    ],
                  ].map(([goal, type, example]) => (
                    <tr key={goal}>
                      <td className="px-4 py-4 text-sm leading-6 text-slate-700">
                        {goal}
                      </td>
                      <td className="px-4 py-4 text-sm font-semibold text-blue-700">
                        {type}
                      </td>
                      <td className="px-4 py-4 text-sm leading-6 text-slate-600">
                        {example}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Important Considerations */}
        <section className="mt-16">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <ShieldCheck size={26} aria-hidden="true" />
              </div>

              <h2 className="mt-5 text-2xl font-bold tracking-tight text-slate-900">
                Limitations and Responsible Use
              </h2>

              <p className="mt-4 leading-8 text-slate-600">
                Generative AI can make content creation faster, but its
                outputs are not automatically accurate, original, secure, or
                suitable for every purpose. Important information should be
                verified, sensitive data handled carefully, and generated
                material reviewed before publication or deployment.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
              <ul className="space-y-5">
                {importantPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <CheckCircle2
                      size={21}
                      className="mt-1 shrink-0 text-blue-600"
                      aria-hidden="true"
                    />
                    <p className="leading-7 text-slate-600">{point}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Related Topics */}
        <section className="mx-auto mt-16 max-w-7xl pb-12">
          <div className="rounded-3xl bg-blue-600 px-7 py-10 text-white sm:px-10">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-widest text-blue-100">
                Continue Learning
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight">
                Explore More About Generative AI
              </h2>

              <p className="mt-4 leading-7 text-blue-100">
                Learn what Generative AI means, discover its practical
                applications, and understand how this technology is changing
                content creation, software development, and digital work.
              </p>
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/ai/generative-ai/what-is-generative-ai"
                className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-blue-600 transition hover:bg-blue-50"
              >
                What Is Generative AI?
              </Link>

              <Link
                href="/ai/generative-ai/uses-of-generative-ai"
                className="rounded-xl border border-blue-400 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
              >
                Uses of Generative AI
              </Link>

              <Link
                href="/ai/generative-ai"
                className="rounded-xl border border-blue-400 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
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