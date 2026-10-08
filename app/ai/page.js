const categories = [
  {
    title: "AI Basics",
    description:
      "Start with the fundamentals of artificial intelligence and understand the concepts behind modern AI.",
    href: "/ai/basics",
    articles: "Beginner guides",
    icon: "01",
  },
  {
    title: "Generative AI",
    description:
      "Learn how AI systems generate text, images, code, audio, and other types of content.",
    href: "/ai/generative-ai",
    articles: "Generative AI",
    icon: "02",
  },
  {
    title: "Machine Learning",
    description:
      "Understand machine learning, how models learn from data, and how it connects with AI.",
    href: "/ai/machine-learning",
    articles: "Machine learning",
    icon: "03",
  },
  {
    title: "AI Tools",
    description:
      "Explore AI tools, assistants, platforms, and software used for work, study, creativity, and business.",
    href: "/ai/ai-tools",
    articles: "AI tools",
    icon: "04",
  },
  {
    title: "AI Applications",
    description:
      "Discover how artificial intelligence is being used in healthcare, finance, education, business, and more.",
    href: "/ai/applications",
    articles: "Real-world AI",
    icon: "05",
  },
  {
    title: "AI & Business",
    description:
      "Learn how organizations use AI for automation, marketing, analytics, customer service, and decision-making.",
    href: "/ai/business",
    articles: "Business AI",
    icon: "06",
  },
];

const featuredArticles = [
  {
    number: "01",
    title: "What Is Artificial Intelligence?",
    description:
      "A simple explanation of AI, how it works, its major types, applications, benefits, and limitations.",
    href: "/ai/basics/what-is-artificial-intelligence",
    tag: "AI Basics",
  },
  {
    number: "02",
    title: "Uses of Artificial Intelligence",
    description:
      "Explore how AI is used in everyday life and across healthcare, education, business, finance, transportation, and more.",
    href: "/ai/basics/uses-of-artificial-intelligence",
    tag: "AI Applications",
  },
  {
    number: "03",
    title: "Examples of Artificial Intelligence",
    description:
      "Discover practical examples of AI that people interact with in everyday products, services, and technologies.",
    href: "/ai/basics/examples-of-artificial-intelligence",
    tag: "AI Basics",
  },
];

export default function AIPage() {
  return (
    <main className="bg-white text-slate-900">

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-slate-200">

        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-blue-50 blur-3xl" />
        <div className="absolute -right-32 top-20 h-96 w-96 rounded-full bg-indigo-50 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:py-28">

          <div className="grid items-center gap-14 lg:grid-cols-2">

            {/* Hero text */}
            <div>

              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-medium uppercase tracking-wider text-blue-600">
                <span className="h-2 w-2 rounded-full bg-blue-600" />
                Artificial Intelligence
              </div>

              <h1 className="max-w-3xl text-5xl font-medium leading-tight tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
                Understand AI.
                <span className="block text-blue-600">
                  One concept at a time.
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">
                Explore artificial intelligence from the basics to modern
                technologies, real-world applications, and practical AI tools.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">

                <a
                  href="/ai/basics"
                  className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-medium text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
                >
                  Start with AI Basics
                  <span className="ml-2">→</span>
                </a>

                <a
                  href="#topics"
                  className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-medium text-slate-700 transition hover:border-blue-200 hover:text-blue-600"
                >
                  Explore AI Topics
                </a>

              </div>

              <div className="mt-10 flex flex-wrap gap-8 border-t border-slate-100 pt-7">

                <Stat
                  value="6+"
                  label="AI topic areas"
                />

                <Stat
                  value="Beginner"
                  label="Friendly explanations"
                />

                <Stat
                  value="Growing"
                  label="Knowledge library"
                />

              </div>

            </div>

            {/* AI visual */}
            <div className="relative mx-auto w-full max-w-lg">

              <div className="absolute inset-10 rounded-full bg-blue-100/70 blur-3xl" />

              <div className="relative rounded-3xl border border-slate-200 bg-white p-6 shadow-xl">

                <div className="flex items-center justify-between border-b border-slate-100 pb-5">

                  <div className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
                    <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
                    <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
                  </div>

                  <span className="text-xs text-slate-400">
                    AI Knowledge Hub
                  </span>

                </div>

                <div className="py-10 text-center">

                  <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-3xl bg-blue-600 text-3xl font-medium text-white shadow-lg shadow-blue-600/20">
                    AI
                  </div>

                  <h2 className="mt-6 text-xl font-medium text-slate-950">
                    Artificial Intelligence
                  </h2>

                  <p className="mx-auto mt-2 max-w-xs text-sm leading-6 text-slate-500">
                    Concepts, technologies, applications, and ideas.
                  </p>

                </div>

                <div className="grid grid-cols-2 gap-3">

                  <VisualCard title="Machine Learning" />
                  <VisualCard title="Generative AI" />
                  <VisualCard title="AI Tools" />
                  <VisualCard title="Applications" />

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* Introduction */}
      <section className="border-b border-slate-200 bg-slate-50">

        <div className="mx-auto max-w-4xl px-6 py-16 text-center">

          <div className="text-xs font-medium uppercase tracking-wider text-blue-600">
            The AI Knowledge Hub
          </div>

          <h2 className="mt-3 text-3xl font-medium tracking-tight text-slate-950 sm:text-4xl">
            AI is bigger than chatbots
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
            Artificial intelligence includes a wide range of technologies
            used to recognize patterns, understand information, generate
            content, make predictions, automate tasks, and assist people with
            complex problems.
          </p>

          <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">
            INFO HUB organizes these ideas into clear topic areas so you can
            learn progressively instead of jumping between disconnected
            explanations.
          </p>

        </div>

      </section>


      {/* Topics */}
      <section
        id="topics"
        className="scroll-mt-24 bg-white"
      >

        <div className="mx-auto max-w-7xl px-6 py-20 lg:py-24">

          <div className="max-w-2xl">

            <div className="text-xs font-medium uppercase tracking-wider text-blue-600">
              Explore the library
            </div>

            <h2 className="mt-3 text-3xl font-medium tracking-tight text-slate-950 sm:text-4xl">
              Explore artificial intelligence by topic
            </h2>

            <p className="mt-4 leading-7 text-slate-500">
              Start with the area that matches what you want to understand.
              More topics and detailed guides can be added as the knowledge
              library grows.
            </p>

          </div>


          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

            {categories.map((category) => (

              <a
                key={category.title}
                href={category.href}
                className="group rounded-3xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
              >

                <div className="flex items-start justify-between">

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-xs font-medium text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                    {category.icon}
                  </div>

                  <span className="text-xl text-slate-300 transition group-hover:translate-x-1 group-hover:text-blue-600">
                    →
                  </span>

                </div>

                <h3 className="mt-7 text-xl font-medium text-slate-950">
                  {category.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-500">
                  {category.description}
                </p>

                <div className="mt-6 text-xs font-medium uppercase tracking-wider text-slate-400">
                  {category.articles}
                </div>

              </a>

            ))}

          </div>

        </div>

      </section>


      {/* Featured Articles */}
      <section className="bg-slate-50">

        <div className="mx-auto max-w-7xl px-6 py-20 lg:py-24">

          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">

            <div>

              <div className="text-xs font-medium uppercase tracking-wider text-blue-600">
                Start reading
              </div>

              <h2 className="mt-3 text-3xl font-medium tracking-tight text-slate-950 sm:text-4xl">
                Featured AI guides
              </h2>

            </div>

            <a
              href="/ai/basics"
              className="text-sm font-medium text-blue-600 hover:text-blue-700"
            >
              Browse AI Basics →
            </a>

          </div>


          <div className="mt-10 grid gap-5 lg:grid-cols-3">

            {featuredArticles.map((article) => (

              <a
                key={article.title}
                href={article.href}
                className="group rounded-3xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:shadow-lg"
              >

                <div className="flex items-center justify-between">

                  <span className="text-xs font-medium text-blue-600">
                    {article.number}
                  </span>

                  <span className="rounded-full bg-slate-50 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-slate-500">
                    {article.tag}
                  </span>

                </div>

                <h3 className="mt-7 text-xl font-medium leading-snug text-slate-950 transition group-hover:text-blue-600">
                  {article.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-500">
                  {article.description}
                </p>

                <div className="mt-7 text-sm font-medium text-blue-600">
                  Read guide →
                </div>

              </a>

            ))}

          </div>

        </div>

      </section>


      {/* Learning Path */}
      <section className="bg-white">

        <div className="mx-auto max-w-7xl px-6 py-20 lg:py-24">

          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

            <div>

              <div className="text-xs font-medium uppercase tracking-wider text-blue-600">
                Recommended path
              </div>

              <h2 className="mt-3 text-3xl font-medium tracking-tight text-slate-950 sm:text-4xl">
                Learn AI step by step
              </h2>

              <p className="mt-5 leading-7 text-slate-500">
                If you are completely new to artificial intelligence, start
                with the fundamentals before moving into specialized areas.
              </p>

              <a
                href="/ai/basics"
                className="mt-7 inline-flex rounded-xl bg-slate-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-600"
              >
                Begin learning →
              </a>

            </div>


            <div className="space-y-3">

              <LearningStep
                number="01"
                title="Understand AI"
                text="Learn what artificial intelligence is and how it works."
              />

              <LearningStep
                number="02"
                title="Explore AI Applications"
                text="See how AI is used in everyday life and different industries."
              />

              <LearningStep
                number="03"
                title="Learn Machine Learning"
                text="Understand one of the major technologies behind modern AI."
              />

              <LearningStep
                number="04"
                title="Explore Generative AI"
                text="Learn how modern systems generate text, images, code, and more."
              />

              <LearningStep
                number="05"
                title="Discover AI Tools"
                text="Move from concepts to practical AI products and workflows."
              />

            </div>

          </div>

        </div>

      </section>


      {/* Future Resource */}
      <section className="bg-slate-50">

        <div className="mx-auto max-w-7xl px-6 py-16">

          <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-8 sm:p-10">

            <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">

              <div>

                <div className="text-xs font-medium uppercase tracking-wider text-slate-400">
                  Featured resource
                </div>

                <h2 className="mt-3 text-2xl font-medium text-slate-950">
                  Useful AI resources coming here
                </h2>

                <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-500">
                  This space can later feature useful AI tools, resources,
                  newsletters, products, partnerships, or other relevant
                  recommendations.
                </p>

              </div>

              <div className="rounded-xl border border-slate-200 bg-slate-50 px-5 py-4 text-center">

                <div className="text-xs font-medium uppercase tracking-wider text-slate-400">
                  Reserved
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* Bottom CTA */}
      <section className="bg-slate-950">

        <div className="mx-auto max-w-4xl px-6 py-20 text-center">

          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-lg font-medium text-white">
            AI
          </div>

          <h2 className="mt-6 text-3xl font-medium tracking-tight text-white sm:text-4xl">
            Start with the fundamentals.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-400">
            Build your understanding step by step, then explore the
            technologies and applications shaping artificial intelligence.
          </p>

          <a
            href="/ai/basics"
            className="mt-8 inline-flex rounded-xl bg-white px-6 py-3.5 text-sm font-medium text-slate-950 transition hover:bg-blue-50"
          >
            Explore AI Basics →
          </a>

        </div>

      </section>

    </main>
  );
}


/* ---------------- Components ---------------- */

function Stat({ value, label }) {
  return (
    <div>
      <div className="text-lg font-medium text-slate-950">
        {value}
      </div>

      <div className="mt-0.5 text-xs text-slate-400">
        {label}
      </div>
    </div>
  );
}


function VisualCard({ title }) {
  return (
    <div className="rounded-xl border border-slate-100 bg-slate-50 p-3">

      <div className="text-[11px] font-medium text-slate-700">
        {title}
      </div>

      <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-slate-200">
        <div className="h-full w-2/3 rounded-full bg-blue-500" />
      </div>

    </div>
  );
}


function LearningStep({ number, title, text }) {
  return (
    <div className="group flex gap-5 rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-blue-200 hover:shadow-md">

      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-xs font-medium text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
        {number}
      </div>

      <div>

        <h3 className="font-medium text-slate-950">
          {title}
        </h3>

        <p className="mt-1 text-sm leading-6 text-slate-500">
          {text}
        </p>

      </div>

    </div>
  );
}