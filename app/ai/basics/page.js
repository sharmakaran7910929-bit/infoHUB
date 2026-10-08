import Link from "next/link";
import Breadcrumbs from '../../../components/Breadcrumb'
import AdSlot from "../../../components/AdSlot";

const articles = [
  {
    title: "What Is Artificial Intelligence?",
    description:
      "Understand what artificial intelligence is, how it works, and why it has become an important part of modern technology.",
    href: "/ai/basics/what-is-artificial-intelligence",
    number: "01",
  },
  {
    title: "Uses of Artificial Intelligence",
    description:
      "Explore how AI is being used in everyday life, healthcare, education, business, finance, transportation, and more.",
    href: "/ai/basics/uses-of-artificial-intelligence",
    number: "02",
  },
  {
    title: "Types of Artificial Intelligence",
   description:
  "Learn about the different types of artificial intelligence, including narrow AI, general AI, super AI, reactive machines, limited memory, theory of mind, and self-aware AI.",   href: "/ai/basics/types-of-artificial-intelligence",
    number: "03",
  },
];

const learningTopics = [
  "What artificial intelligence means",
  "How AI systems work at a basic level",
  "Common uses of AI",
  
  "AI terminology and concepts",
  "How AI differs from related technologies",
];

export default function Page() {
  return (
    <div className="min-h-screen bg-slate-50">

      {/* Breadcrumb */}
      <Breadcrumbs />

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 pb-16 pt-10">
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <div className="px-6 py-12 sm:px-10 lg:px-14 lg:py-16">

            <div className="max-w-3xl">
              <div className="mb-5 inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-600">
                Artificial Intelligence · Basics
              </div>

              <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                AI Basics
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-500">
                A simple starting point for understanding artificial
                intelligence, its uses, real-world examples, and the ideas
                behind modern AI systems.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/ai/basics/what-is-artificial-intelligence"
                  className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-700"
                >
                  Start with AI Basics
                </Link>

                <Link
                  href="/ai"
                  className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-600 transition hover:border-blue-200 hover:text-blue-600"
                >
                  Explore All AI Topics
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Ad */}
      <AdSlot />

      {/* Introduction */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="grid gap-8 lg:grid-cols-[1.4fr_0.6fr]">

          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-9">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
              Understanding AI
            </p>

            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              Start with the fundamentals
            </h2>

            <div className="mt-5 space-y-4 text-base leading-7 text-slate-600">
              <p>
                Artificial intelligence can seem complicated because it covers
                many different technologies, applications, and ideas. The
                easiest way to understand it is to begin with the fundamentals.
              </p>

              <p>
                This section explains AI in simple language and connects the
                basic concepts with examples you can recognize in everyday
                life.
              </p>

              <p>
                Once you understand these foundations, you can move on to
                more specialized areas such as generative AI, machine
                learning, AI tools, automation, and industry applications.
              </p>
            </div>
          </div>

          {/* Quick facts */}
          <div className="rounded-3xl border border-slate-200 bg-slate-900 p-7 text-white shadow-sm sm:p-9">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-300">
              AI Basics
            </p>

            <h2 className="mt-3 text-2xl font-semibold">
              What should you learn first?
            </h2>

            <div className="mt-7 space-y-5">
              <div>
                <div className="text-3xl font-semibold">01</div>
                <p className="mt-1 text-sm leading-6 text-slate-300">
                  Understand what AI actually means.
                </p>
              </div>

              <div>
                <div className="text-3xl font-semibold">02</div>
                <p className="mt-1 text-sm leading-6 text-slate-300">
                  Learn where AI is being used.
                </p>
              </div>

              
            </div>
          </div>

        </div>
      </section>

      {/* Articles */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            Beginner Guides
          </p>

          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">
            Learn AI step by step
          </h2>

          <p className="mt-3 max-w-2xl text-slate-500">
            Start with the basic concepts and gradually build a clearer
            understanding of artificial intelligence.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {articles.map((article) => (
            <Link
              key={article.href}
              href={article.href}
              className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-blue-600">
                  {article.number}
                </span>

                <span className="text-slate-300 transition group-hover:text-blue-500">
                  →
                </span>
              </div>

              <h3 className="mt-7 text-xl font-semibold leading-7 text-slate-900">
                {article.title}
              </h3>

              <p className="mt-4 text-sm leading-6 text-slate-500">
                {article.description}
              </p>

              <div className="mt-7 text-sm font-medium text-blue-600">
                Read guide →
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Learning Path */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-10">

          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
              Learning Path
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900">
              What you’ll learn in AI Basics
            </h2>

            <p className="mt-4 leading-7 text-slate-500">
              These fundamentals provide a foundation for exploring the wider
              world of artificial intelligence.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {learningTopics.map((topic, index) => (
              <div
                key={topic}
                className="rounded-2xl border border-slate-100 bg-slate-50 p-5"
              >
                <div className="text-sm font-semibold text-blue-600">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <p className="mt-3 text-sm font-medium leading-6 text-slate-700">
                  {topic}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Ad */}
      <AdSlot />

      {/* Next Topics */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="rounded-3xl bg-blue-600 px-7 py-10 text-white sm:px-10">

          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-100">
              Continue Learning
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              Ready to explore deeper AI topics?
            </h2>

            <p className="mt-4 leading-7 text-blue-100">
              Once you understand the basics, explore generative AI, machine
              learning, AI tools, and other areas of artificial intelligence.
            </p>
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/ai/generative-ai"
              className="rounded-xl bg-white px-5 py-3 text-sm font-medium text-blue-600 transition hover:bg-blue-50"
            >
              Generative AI
            </Link>

            <Link
              href="/ai/machine-learning"
              className="rounded-xl border border-blue-400 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-500"
            >
              Machine Learning
            </Link>

            <Link
              href="/ai"
              className="rounded-xl border border-blue-400 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-500"
            >
              All AI Topics
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}