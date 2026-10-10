
import Link from "next/link";
import {
  BrainCircuit,
  BookOpen,
  Sparkles,
  Network,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import Image from "next/image";
const topics = [
  {
    name: "AI Basics",
    description:
      "Build a foundation in artificial intelligence, how it works, and how it is used in everyday life.",
    href: "/ai/basics",
    icon: BookOpen,
    label: "Start with the fundamentals",
  },
  {
    name: "Machine Learning",
    description:
      "Understand how computers learn from data, explore machine learning types, and discover practical uses.",
    href: "/ai/machine-learning",
    icon: Network,
    label: "Learn how machines learn",
  },
  {
    name: "Generative AI",
    description:
      "Explore AI systems that generate text, images, code, and other types of content.",
    href: "/ai/generative-ai",
    icon: Sparkles,
    label: "Explore generative technology",
  },
];

const featuredGuides = [
  {
    category: "AI Basics",
    title: "What Is Artificial Intelligence?",
    description:
      "Learn what artificial intelligence means, how AI systems work, and where they are used in everyday life.",
    href: "/ai/basics/what-is-artificial-intelligence",
  },
  {
    category: "AI Basics",
    title: "Uses of Artificial Intelligence",
    description:
      "Discover practical applications of AI across healthcare, education, business, finance, and technology.",
    href: "/ai/basics/uses-of-artificial-intelligence",
  },
  {
    category: "Machine Learning",
    title: "AI vs Machine Learning",
    description:
      "Understand the relationship between artificial intelligence and machine learning, and how the two differ.",
    href: "/ai/machine-learning/ai-vs-machine-learning",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      {/* Hero */}
      <section className="border-b border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-5xl px-6 py-20 text-center lg:py-28">
           <div className="mb-6 flex justify-center">
  <Image
    src="/main.png"
    alt="PriceTag HUB — Information, Guides and Knowledge"
    width={200}
    height={200}
    priority
    className="h-20 w-20 rounded-2xl object-contain shadow-lg shadow-blue-950/15 sm:h-[88px] sm:w-[88px]"
  />
</div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-700">
            <BrainCircuit size={16} />
            Knowledge, organized.
          </div>

          <h1 className="mx-auto max-w-4xl text-5xl font-bold tracking-tight text-zinc-950 sm:text-6xl lg:text-7xl">
            Find useful information.
            <span className="block text-blue-600">
              Understand it better.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-600">
            Explore clear explanations and practical guides about artificial
            intelligence, machine learning, generative AI, and the technologies
            shaping our world.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Link
              href="/ai"
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Explore AI topics
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/ai/basics"
              className="inline-flex items-center gap-2 rounded-xl border border-zinc-300 bg-white px-6 py-3 font-semibold text-zinc-800 transition hover:border-blue-300 hover:text-blue-700"
            >
              Start learning
            </Link>
          </div>
        </div>
       
      </section>

      {/* Available Topics */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Explore
          </p>

          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Explore AI topics
          </h2>

          <p className="mt-3 max-w-2xl leading-7 text-zinc-600">
            Start with the fundamentals, learn how machine learning works,
            and discover the possibilities of generative AI.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {topics.map((topic) => {
            const Icon = topic.icon;

            return (
              <Link
                key={topic.name}
                href={topic.href}
                className="group flex h-full flex-col rounded-2xl border border-zinc-200 bg-white p-6 transition duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-100">
                  <Icon size={24} strokeWidth={1.8} />
                </div>

                <h3 className="text-xl font-semibold transition group-hover:text-blue-600">
                  {topic.name}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-7 text-zinc-600">
                  {topic.description}
                </p>

                <div className="mt-6 flex items-center justify-between border-t border-zinc-100 pt-4">
                  <span className="text-sm text-zinc-500">
                    {topic.label}
                  </span>

                  <ArrowRight
                    size={18}
                    className="text-blue-600 transition group-hover:translate-x-1"
                  />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Featured Guides */}
      <section className="border-y border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                Reading guides
              </p>

              <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                Start learning
              </h2>

              <p className="mt-3 max-w-2xl leading-7 text-zinc-600">
                Read approachable guides designed to help you understand
                important AI concepts.
              </p>
            </div>

            <Link
              href="/ai"
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700"
            >
              Explore AI
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {featuredGuides.map((guide) => (
              <article
                key={guide.href}
                className="flex flex-col rounded-2xl border border-zinc-200 bg-white p-7 transition hover:border-blue-200 hover:shadow-md"
              >
                <span className="text-sm font-medium text-blue-600">
                  {guide.category}
                </span>

                <h3 className="mt-3 text-xl font-semibold leading-snug">
                  {guide.title}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-7 text-zinc-600">
                  {guide.description}
                </p>

                <Link
                  href={guide.href}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700"
                >
                  Read guide
                  <ArrowRight size={16} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Path */}
      <section className="mx-auto max-w-5xl px-6 py-16 lg:py-20">
        <div className="rounded-3xl border border-blue-100 bg-blue-50/60 p-8 sm:p-10">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-blue-600 shadow-sm">
            <CheckCircle2 size={26} />
          </div>

          <h2 className="mt-6 text-2xl font-bold tracking-tight sm:text-3xl">
            A simple path to understanding AI
          </h2>

          <p className="mt-3 max-w-2xl leading-7 text-zinc-600">
            New to artificial intelligence? Follow a structured learning path
            from foundational concepts to more specialized technologies.
          </p>

          <ol className="mt-7 space-y-4">
            {[
              {
                title: "Begin with AI basics",
                description: "Learn the key concepts and terminology.",
                href: "/ai/basics",
              },
              {
                title: "Continue with machine learning",
                description: "Understand how systems learn from data.",
                href: "/ai/machine-learning",
              },
              {
                title: "Explore generative AI",
                description: "Discover how AI creates new content.",
                href: "/ai/generative-ai",
              },
            ].map((step, index) => (
              <li key={step.href}>
                <Link
                  href={step.href}
                  className="flex items-start gap-4 rounded-xl border border-blue-100 bg-white p-4 transition hover:border-blue-300"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-700">
                    {index + 1}
                  </span>

                  <span className="flex-1">
                    <span className="block font-semibold">{step.title}</span>
                    <span className="mt-1 block text-sm leading-6 text-zinc-600">
                      {step.description}
                    </span>
                  </span>

                  <ArrowRight
                    size={18}
                    className="mt-1 shrink-0 text-blue-600"
                  />
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-zinc-200">
        <div className="mx-auto max-w-4xl px-6 py-16 text-center sm:py-20">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Keep learning, one concept at a time.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-zinc-600">
            Explore the available AI guides and build your understanding
            step by step as PriceTag HUB grows.
          </p>

          <Link
            href="/ai"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Browse AI guides
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
