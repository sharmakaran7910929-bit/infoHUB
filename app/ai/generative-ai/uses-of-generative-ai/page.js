import Link from "next/link";
import Breadcrumbs from "../../../../components/Breadcrumb";
import AdSlot from "../../../../components/AdSlot";

const applications = [
  {
    icon: "✍️",
    title: "Content Writing",
    description:
      "Generative AI can help draft articles, emails, product descriptions, social media posts, summaries, and other written materials. Writers can use it to organize ideas, explore different writing styles, and improve early drafts, while reviewing the final content for accuracy and originality.",
    example: "Example: Drafting an outline for an educational article.",
  },
  {
    icon: "🎨",
    title: "Image and Graphic Design",
    description:
      "Image-generation models can turn text descriptions into illustrations, concept art, backgrounds, and design ideas. Designers can use these tools to explore visual directions more quickly, although professional projects may still require editing, quality checks, and appropriate usage rights.",
    example: "Example: Creating an initial concept for a product advertisement.",
  },
  {
    icon: "💻",
    title: "Software Development",
    description:
      "Generative AI coding assistants can suggest code, explain unfamiliar functions, create test examples, and help developers investigate errors. They can support development work, but generated code must be reviewed and tested for correctness, security, performance, and compatibility.",
    example: "Example: Generating a starting point for a JavaScript function.",
  },
  {
    icon: "🎓",
    title: "Education and Learning",
    description:
      "Generative AI can explain difficult subjects, create practice questions, summarize study material, and provide alternative explanations for learners. Teachers can also use it to prepare lesson ideas and learning activities. Its answers should be checked against reliable educational resources.",
    example: "Example: Creating practice questions about machine learning.",
  },
  {
    icon: "🏢",
    title: "Business and Marketing",
    description:
      "Businesses can use generative AI to prepare campaign drafts, brainstorm product names, create customer communication templates, and summarize business documents. Human review remains important to ensure that the content reflects the company's actual products, policies, and promises.",
    example: "Example: Preparing several versions of a product introduction.",
  },
  {
    icon: "💬",
    title: "Customer Support",
    description:
      "Generative AI can power conversational assistants that respond to common questions, explain procedures, and summarize support conversations. When connected to approved business information, these systems can help customers find answers. Sensitive cases and uncertain answers may need escalation to a human.",
    example: "Example: An assistant explaining a company's return policy.",
  },
  {
    icon: "🎬",
    title: "Video and Audio Production",
    description:
      "Generative models can create or assist with video clips, synthetic speech, music, sound effects, and narration. These tools can support presentations, learning materials, and creative projects. Users should consider consent, impersonation risks, licensing, and disclosure where appropriate.",
    example: "Example: Generating narration for a training presentation.",
  },
  {
    icon: "🔬",
    title: "Research and Data Exploration",
    description:
      "Generative AI can help researchers summarize documents, organize notes, propose possible research questions, and explain technical material. Some systems can also assist with generating code for analysis. Important findings still require verification using original sources, valid methods, and appropriate expert judgment.",
    example: "Example: Summarizing a collection of research papers for review.",
  },
  {
    icon: "🛍️",
    title: "E-commerce",
    description:
      "Online stores can use generative AI to draft product descriptions, create shopping guides, develop promotional ideas, and assist with customer questions. Content should accurately reflect real product specifications and availability instead of inventing features, guarantees, or customer experiences.",
    example: "Example: Drafting a clear description from verified product details.",
  },
  {
    icon: "🩺",
    title: "Healthcare Support",
    description:
      "Generative AI can assist with administrative writing, patient-friendly explanations, and summaries of healthcare documents in appropriate workflows. Medical information must be handled carefully because generated content can be incomplete or incorrect. Clinical decisions require qualified healthcare professionals and reliable evidence.",
    example: "Example: Rewriting approved medical instructions in simpler language.",
  },
  {
    icon: "🛡️",
    title: "Cybersecurity",
    description:
      "Security teams can use generative AI to explain security alerts, summarize incident reports, draft detection rules, and help analyze code. Its output must be validated because it can miss important indicators or suggest unsafe changes. Sensitive logs and system details should only be shared with appropriately authorized tools.",
    example: "Example: Summarizing an alert for a security analyst to investigate.",
  },
  {
    icon: "📐",
    title: "Product and Creative Design",
    description:
      "Generative AI can help teams explore product concepts, generate interface ideas, draft user flows, and create early visual prototypes. These outputs can support brainstorming, but usability testing, engineering constraints, accessibility, and real user needs must guide the final design.",
    example: "Example: Exploring different layouts for a mobile app screen.",
  },
];

const workflow = [
  {
    number: "01",
    title: "Provide Input",
    description:
      "Give the AI a prompt, instructions, reference material, or another supported input.",
  },
  {
    number: "02",
    title: "Generate Content",
    description:
      "The model uses learned patterns to produce a draft or other requested output.",
  },
  {
    number: "03",
    title: "Review the Result",
    description:
      "Check accuracy, relevance, safety, and whether the output meets your needs.",
  },
  {
    number: "04",
    title: "Refine and Use",
    description:
      "Improve the output and use it in an appropriate workflow.",
  },
];

export default function UsesOfGenerativeAIPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Breadcrumbs />

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white">
          <div className="grid gap-8 p-6 sm:p-10 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-700">
                Generative AI Applications
              </span>

              <h1 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                Uses of Generative AI: Applications, Examples and Benefits
              </h1>

              <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
                Generative AI is used to create and transform digital content,
                including text, images, audio, video, and computer code. It
                can help people draft documents, explore creative ideas,
                develop software, prepare learning materials, and support
                business communication.
              </p>

              <p className="mt-4 leading-7 text-slate-600">
                Its practical value depends on the task, the quality of the
                input, the capabilities of the model, and how carefully the
                results are reviewed. Generative AI is most useful when it
                supports human work rather than replacing necessary
                verification and judgment.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="#applications"
                  className="rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
                >
                  Explore Applications
                </Link>

                <Link
                  href="#workflow"
                  className="rounded-xl border border-slate-300 px-5 py-3 font-semibold text-slate-700 transition hover:bg-slate-50"
                >
                  See How It Is Used
                </Link>
              </div>
            </div>

            <div className="rounded-2xl bg-slate-950 p-6 text-white sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-widest text-blue-300">
                One Technology, Many Uses
              </p>

              <div className="mt-6 grid grid-cols-2 gap-3">
                {[
                  { icon: "✍️", title: "Writing" },
                  { icon: "🎨", title: "Image Design" },
                  { icon: "💻", title: "Coding" },
                  { icon: "🎓", title: "Education" },
                  { icon: "🎬", title: "Media Creation" },
                  { icon: "🏢", title: "Business Tasks" },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-xl border border-slate-700 bg-slate-900 p-4"
                  >
                    <div className="text-2xl">{item.icon}</div>
                    <p className="mt-2 text-sm font-semibold">{item.title}</p>
                  </div>
                ))}
              </div>

              <p className="mt-5 text-sm leading-6 text-slate-400">
                Different generative models support different types of tasks.
                Some tools can handle more than one content format.
              </p>
            </div>
          </div>
        </section>

        <AdSlot />

        <section id="workflow" className="mt-12">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            How Generative AI Is Used in Practice
          </h2>

          <p className="mt-3 max-w-4xl leading-7 text-slate-600">
            A common workflow begins with a human request and ends with a
            reviewed result. The model may generate a first draft, while the
            user checks facts, improves the instructions, and refines the
            output before using it.
          </p>

          <div className="mt-6 rounded-3xl bg-slate-950 p-5 text-white sm:p-8">
            <div className="grid gap-4 md:grid-cols-4">
              {workflow.map((step, index) => (
                <div key={step.number} className="relative">
                  <div className="h-full rounded-2xl border border-slate-700 bg-slate-900 p-5">
                    <span className="text-sm font-bold text-blue-300">
                      STEP {step.number}
                    </span>
                    <h3 className="mt-3 text-lg font-bold">{step.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      {step.description}
                    </p>
                  </div>

                  {index < workflow.length - 1 && (
                    <div className="py-2 text-center text-2xl text-blue-300 md:hidden">
                      ↓
                    </div>
                  )}
                  {index < workflow.length - 1 && (
                    <div className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 text-xl text-blue-300 md:block">
                      →
                    </div>
                  )}
                </div>
              ))}
            </div>

            <p className="mt-5 text-sm leading-6 text-slate-400">
              Example: A writer provides a topic, receives an article outline,
              checks the facts, and edits the draft before publishing.
            </p>
          </div>
        </section>

        <section id="applications" className="mt-12">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            12 Important Uses of Generative AI
          </h2>

          <p className="mt-3 max-w-4xl leading-7 text-slate-600">
            Generative AI has applications across creative, technical,
            educational, and professional work. The following examples
            illustrate common ways it can assist people and organizations.
            Availability and suitability depend on the tool and the task.
          </p>

          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {applications.map((item) => (
              <article
                key={item.title}
                className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-2xl">
                  {item.icon}
                </div>

                <h3 className="mt-4 text-lg font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>

                <div className="mt-4 rounded-xl bg-slate-50 p-3">
                  <p className="text-sm leading-6 text-slate-700">
                    <strong>{item.example.split(":")[0]}:</strong>
                    {item.example.substring(item.example.indexOf(":") + 1)}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <AdSlot />

        <section className="mt-12 rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-slate-900">
            Benefits of Using Generative AI
          </h2>

          <p className="mt-3 max-w-4xl leading-7 text-slate-600">
            When used appropriately, generative AI can help reduce the effort
            required for some routine tasks and provide a starting point for
            more complex work. Its benefits depend on the quality of the
            system and the person's ability to review and use the output.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Faster First Drafts",
                description:
                  "Generate an initial outline, email, summary, or concept that a person can review and improve.",
              },
              {
                title: "Creative Exploration",
                description:
                  "Compare alternative ideas, writing approaches, design concepts, or possible solutions.",
              },
              {
                title: "Learning Assistance",
                description:
                  "Request simpler explanations, examples, and practice questions when studying unfamiliar topics.",
              },
              {
                title: "Development Support",
                description:
                  "Get coding suggestions, code explanations, and starting points for tests or documentation.",
              },
              {
                title: "Flexible Content",
                description:
                  "Adapt drafts for different audiences, lengths, formats, and communication needs.",
              },
              {
                title: "Routine Task Support",
                description:
                  "Assist with repetitive drafting and organization so people can focus on work requiring judgment.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 p-5"
              >
                <h3 className="font-bold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12 rounded-3xl border border-amber-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-slate-900">
            Limitations and Responsible Use
          </h2>

          <p className="mt-3 leading-7 text-slate-600">
            Generative AI can produce convincing content that is incorrect,
            incomplete, outdated, or biased. It may also create privacy,
            copyright, security, or impersonation risks when used carelessly.
            For medical, legal, financial, security, and other high-impact
            tasks, its output requires suitable expert review and reliable
            evidence.
          </p>

          <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-600">
            <li>
              <strong>Verify important facts:</strong> Check claims against
              trustworthy sources instead of assuming a confident answer is
              correct.
            </li>
            <li>
              <strong>Protect private information:</strong> Follow the
              organization's data policies before entering sensitive
              information into an AI tool.
            </li>
            <li>
              <strong>Review generated work:</strong> Check code, designs,
              written content, and other outputs before relying on or
              publishing them.
            </li>
            <li>
              <strong>Respect rights and consent:</strong> Consider licensing,
              attribution, privacy, and permission when generating or using
              content.
            </li>
          </ul>
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