
export default function Home() {
  const topics = [
    {
      name: "Artificial Intelligence",
      description: "Understand AI, tools, applications, and the technology shaping the future.",
      href: "/ai",
    },
    {
      name: "SEO",
      description: "Learn search optimization, keyword research, content strategy, and more.",
      href: "/seo",
    },
    {
      name: "Health",
      description: "Explore practical information about health, fitness, nutrition, and wellbeing.",
      href: "/health",
    },
    {
      name: "Technology",
      description: "Clear explanations of apps, devices, software, internet, and technology.",
      href: "/technology",
    },
    {
      name: "Business",
      description: "Useful knowledge for businesses, entrepreneurs, marketing, and growth.",
      href: "/business",
    },
    {
      name: "Education",
      description: "Guides, concepts, learning resources, careers, and practical knowledge.",
      href: "/education",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-zinc-900">
      {/* Header */}
     

      {/* Hero */}
      <section className="border-b border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-5xl px-6 py-20 text-center lg:py-28">
          <div className="mb-5 inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-700">
            Knowledge, organized.
          </div>

          <h1 className="mx-auto max-w-4xl text-5xl font-bold tracking-tight text-zinc-950 sm:text-6xl lg:text-7xl">
            Find useful information.
            <span className="block text-blue-600">Understand it better.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-600">
            INFO HUB brings together clear, practical, and useful information
            across technology, AI, health, business, education, and more.
          </p>

          {/* Search */}
          <div className="mx-auto mt-10 flex max-w-2xl rounded-2xl border border-zinc-300 bg-white p-2 shadow-sm focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-100">
            <input
              type="text"
              placeholder="What do you want to know?"
              className="min-w-0 flex-1 bg-transparent px-4 py-3 text-base outline-none placeholder:text-zinc-400"
            />
            <button className="rounded-xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700">
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Topics */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              Explore
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight">
              Explore topics
            </h2>
            <p className="mt-2 text-zinc-600">
              Discover information organized by subject.
            </p>
          </div>

          <a
            href="/topics"
            className="hidden text-sm font-semibold text-blue-600 hover:text-blue-700 sm:block"
          >
            View all topics →
          </a>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {topics.map((topic) => (
            <a
              key={topic.name}
              href={topic.href}
              className="group rounded-2xl border border-zinc-200 bg-white p-6 transition duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
            >
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-sm font-bold text-blue-600">
                {topic.name.slice(0, 2).toUpperCase()}
              </div>

              <h3 className="text-xl font-semibold group-hover:text-blue-600">
                {topic.name}
              </h3>

              <p className="mt-2 text-sm leading-6 text-zinc-600">
                {topic.description}
              </p>

              <div className="mt-5 text-sm font-medium text-blue-600">
                Explore topic →
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Featured knowledge */}
      <section className="border-y border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Featured
          </p>

          <h2 className="mt-2 text-3xl font-bold tracking-tight">
            Start learning
          </h2>

          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            <article className="rounded-2xl border border-zinc-200 bg-white p-7">
              <span className="text-sm font-medium text-blue-600">
                Artificial Intelligence
              </span>
              <h3 className="mt-3 text-xl font-semibold">
                What Is Artificial Intelligence?
              </h3>
              <p className="mt-3 text-sm leading-6 text-zinc-600">
                A simple guide to understanding AI, how it works, and where it
                is used in everyday life.
              </p>
              <a
                href="/ai/basics/what-is-artificial-intelligence"
                className="mt-6 inline-block text-sm font-semibold text-blue-600"
              >
                Read guide →
              </a>
            </article>

            <article className="rounded-2xl border border-zinc-200 bg-white p-7">
              <span className="text-sm font-medium text-blue-600">
                Artificial Intelligence
              </span>
              <h3 className="mt-3 text-xl font-semibold">
                Uses of Artificial Intelligence
              </h3>
              <p className="mt-3 text-sm leading-6 text-zinc-600">
                Explore how AI is being used across healthcare, business,
                education, finance, technology, and everyday life.
              </p>
              <a
                href="/ai/basics/uses-of-artificial-intelligence"
                className="mt-6 inline-block text-sm font-semibold text-blue-600"
              >
                Read guide →
              </a>
            </article>

            <article className="rounded-2xl border border-zinc-200 bg-white p-7">
              <span className="text-sm font-medium text-blue-600">
                Artificial Intelligence
              </span>
              <h3 className="mt-3 text-xl font-semibold">
                AI vs Machine Learning
              </h3>
              <p className="mt-3 text-sm leading-6 text-zinc-600">
                Understand the difference between artificial intelligence,
                machine learning, and related technologies.
              </p>
              <a
                href="/ai/machine-learning/ai-vs-machine-learning"
                className="mt-6 inline-block text-sm font-semibold text-blue-600"
              >
                Read guide →
              </a>
            </article>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="mx-auto max-w-4xl px-6 py-20 text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          There is always something new to understand.
        </h2>

        <p className="mx-auto mt-4 max-w-2xl leading-7 text-zinc-600">
          Explore thousands of useful guides, explanations, and resources as
          INFO HUB continues to grow.
        </p>

        <a
          href="/topics"
          className="mt-7 inline-flex rounded-xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
        >
          Explore INFO HUB
        </a>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-200">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <div>
            <span className="font-semibold text-zinc-900">INFO HUB</span>
            <span className="ml-2">Knowledge, organized.</span>
          </div>

          <div className="flex gap-6">
            <a href="/about" className="hover:text-zinc-900">
              About
            </a>
            <a href="/contact" className="hover:text-zinc-900">
              Contact
            </a>
            <a href="/privacy" className="hover:text-zinc-900">
              Privacy
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
