import Link from "next/link";
import Breadcrumbs from "../../../components/Breadcrumb";
import AdSlot from "../../../components/AdSlot";

const articles = [
  {
    title: "What Is Machine Learning?",
    description:
      "Understand what machine learning means, how computers learn from data, and how trained models identify patterns to make predictions and support decisions.",
    href: "/ai/machine-learning/what-is-machine-learning",
    number: "01",
  },
  {
    title: "Uses of Machine Learning",
    description:
      "Explore how machine learning is used in healthcare, banking, education, business, cybersecurity, recommendation systems, and everyday technology.",
    href: "/ai/machine-learning/uses-of-machine-learning",
    number: "02",
  },
  {
    title: "Types of Machine Learning",
    description:
      "Learn about supervised, unsupervised, semi-supervised, and reinforcement learning, including how these approaches work and where they are applied.",
    href: "/ai/machine-learning/types-of-machine-learning",
    number: "03",
  },
];

const learningTopics = [
  "What machine learning means",
  "How machines learn from data",
  "Common real-world applications",
  "Types of machine learning",
  "Training data, models, and predictions",
  "How machine learning relates to AI",
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
                Artificial Intelligence · Machine Learning
              </div>

              <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                Machine Learning
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-500">
                Discover how computers learn from data, recognize patterns,
                make predictions, and support intelligent applications across
                different industries and everyday life.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/ai/machine-learning/what-is-machine-learning"
                  className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-700"
                >
                  Start Learning
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

      {/* Ad Slot 1 */}
      <AdSlot />

      {/* Introduction */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="grid gap-8 lg:grid-cols-[1.4fr_0.6fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-9">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
              Understanding Machine Learning
            </p>

            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              How machines learn from data
            </h2>

            <div className="mt-5 space-y-4 text-base leading-7 text-slate-600">
              <p>
                Machine learning is a branch of artificial intelligence that
                allows computer systems to learn patterns from data rather
                than depending entirely on manually written rules. Developers
                train machine learning models using examples so that the
                models can recognize relationships and produce useful
                predictions or classifications.
              </p>

              <p>
                For example, an email service can learn to identify spam,
                an online store can recommend products based on user activity,
                and a financial system can detect unusual transactions.
                These applications use different kinds of data and learning
                techniques to solve specific problems.
              </p>

              <p>
                Machine learning is not a single technique. It includes
                different approaches for learning from labeled examples,
                discovering patterns in unlabeled data, or learning through
                feedback. Understanding these approaches helps explain how
                machine learning systems are developed and where they are
                useful.
              </p>
            </div>
          </div>

          {/* Quick Facts */}
          <div className="rounded-3xl border border-slate-200 bg-slate-900 p-7 text-white shadow-sm sm:p-9">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-300">
              Quick Overview
            </p>

            <h2 className="mt-3 text-2xl font-semibold">
              What should you know first?
            </h2>

            <div className="mt-7 space-y-5">
              <div>
                <div className="text-3xl font-semibold">01</div>
                <p className="mt-1 text-sm leading-6 text-slate-300">
                  Machine learning is a major area of artificial intelligence.
                </p>
              </div>

              <div>
                <div className="text-3xl font-semibold">02</div>
                <p className="mt-1 text-sm leading-6 text-slate-300">
                  Data helps models identify patterns and make predictions.
                </p>
              </div>

              <div>
                <div className="text-3xl font-semibold">03</div>
                <p className="mt-1 text-sm leading-6 text-slate-300">
                  Different learning methods solve different kinds of problems.
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
            Explore Machine Learning Step by Step
          </h2>

          <p className="mt-3 max-w-2xl text-slate-500">
            Start with the meaning of machine learning, discover its
            applications, and understand the different methods used to train
            machine learning models.
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
              What You Will Learn
            </h2>

            <p className="mt-4 leading-7 text-slate-500">
              Build a foundation in machine learning before exploring more
              advanced topics, practical tools, and industry applications.
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

      {/* Ad Slot 2 */}
      <AdSlot />

      {/* Continue Learning */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="rounded-3xl bg-blue-600 px-7 py-10 text-white sm:px-10">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-100">
              Continue Learning
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              Explore More Artificial Intelligence Topics
            </h2>

            <p className="mt-4 leading-7 text-blue-100">
              Machine learning is one part of the wider AI landscape.
              Continue exploring generative AI, foundational AI concepts,
              and other technologies to understand how intelligent systems
              are developed and used.
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
              href="/ai/basics"
              className="rounded-xl border border-blue-400 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-500"
            >
              AI Basics
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