import Link from "next/link";
import Breadcrumbs from "../../../../components/Breadcrumb";
import AdSlot from "../../../../components/AdSlot";

const concepts = [
  {
    title: "Learning from Data",
    description:
      "Machine learning systems use examples and datasets to identify patterns and relationships that can help solve a particular problem.",
    number: "01",
  },
  {
    title: "Training a Model",
    description:
      "During training, an algorithm processes data and adjusts a model's internal parameters to learn useful patterns from the examples provided.",
    number: "02",
  },
  {
    title: "Making Predictions",
    description:
      "After training, a model can process new information to classify data, estimate outcomes, recognize patterns, or generate recommendations.",
    number: "03",
  },
];

const examples = [
  {
    title: "Email Spam Detection",
    description:
      "A model learns from examples of spam and legitimate messages to estimate whether a new email should be classified as spam.",
  },
  {
    title: "Product Recommendations",
    description:
      "Online shopping platforms can use browsing activity, purchases, and other available signals to recommend products that may interest customers.",
  },
  {
    title: "Fraud Detection",
    description:
      "Financial systems can analyze transaction patterns and flag unusual activity for further review.",
  },
  {
    title: "Image Recognition",
    description:
      "Trained models can identify objects, animals, or other patterns in images when they have been developed for those tasks.",
  },
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
                What Is Machine Learning?
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-500">
                Learn what machine learning means, how computers learn from
                data, and how trained models recognize patterns to make
                predictions and solve real-world problems.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="#how-it-works"
                  className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-700"
                >
                  How It Works
                </Link>

                <Link
                  href="/ai/machine-learning"
                  className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-600 transition hover:border-blue-200 hover:text-blue-600"
                >
                  Machine Learning Guide
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ad Slot 1 */}
      <AdSlot />

      {/* Main Explanation */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="grid gap-8 lg:grid-cols-[1.4fr_0.6fr]">
          <article className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-9">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
              Machine Learning Explained
            </p>

            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              Understanding the meaning of machine learning
            </h2>

            <div className="mt-5 space-y-4 text-base leading-7 text-slate-600">
              <p>
                Machine learning is a branch of artificial intelligence (AI)
                that enables computers to learn patterns from data and use
                those patterns to make predictions, classifications, or
                recommendations. Instead of requiring a programmer to write
                an explicit rule for every possible situation, a machine
                learning system is trained using examples relevant to its
                task.
              </p>

              <p>
                For example, imagine an email service that needs to identify
                unwanted messages. Developers can train a machine learning
                model using examples of spam and legitimate emails. During
                training, the model learns patterns that help distinguish
                between the two categories. When a new email arrives, the
                model can use what it learned to estimate whether the message
                is spam.
              </p>

              <p>
                Machine learning does not mean that a computer thinks or
                understands everything like a human. A model learns
                statistical patterns from the data and training process used
                to develop it. Its results depend on factors such as data
                quality, model design, and how well it handles information
                it has not encountered before.
              </p>

              <p>
                Machine learning is used in many fields, including healthcare,
                finance, transportation, education, cybersecurity, and online
                services. Different methods are suitable for different tasks,
                which is why understanding how machine learning works is a
                useful starting point for exploring modern AI technology.
              </p>
            </div>
          </article>

          {/* Quick Facts */}
          <aside className="rounded-3xl border border-slate-200 bg-slate-900 p-7 text-white shadow-sm sm:p-9">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-300">
              Quick Facts
            </p>

            <h2 className="mt-3 text-2xl font-semibold">
              Machine Learning at a Glance
            </h2>

            <div className="mt-7 space-y-6">
              <div>
                <p className="text-sm font-medium text-blue-300">
                  Field
                </p>
                <p className="mt-1 text-sm leading-6 text-slate-300">
                  A branch of artificial intelligence
                </p>
              </div>

              <div>
                <p className="text-sm font-medium text-blue-300">
                  Main Resource
                </p>
                <p className="mt-1 text-sm leading-6 text-slate-300">
                  Data used to train and evaluate models
                </p>
              </div>

              <div>
                <p className="text-sm font-medium text-blue-300">
                  Common Results
                </p>
                <p className="mt-1 text-sm leading-6 text-slate-300">
                  Predictions, classifications, and recommendations
                </p>
              </div>

              <div>
                <p className="text-sm font-medium text-blue-300">
                  Important Limitation
                </p>
                <p className="mt-1 text-sm leading-6 text-slate-300">
                  Models can make mistakes when data or conditions are
                  unsuitable.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* How It Works */}
      <section
        id="how-it-works"
        className="mx-auto max-w-7xl px-6 pb-16"
      >
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            The Basic Process
          </p>

          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">
            How Does Machine Learning Work?
          </h2>

          <p className="mt-3 max-w-2xl leading-7 text-slate-500">
            A typical machine learning workflow uses data to train a model,
            evaluates how well it performs, and then applies the model to
            relevant new information.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {concepts.map((concept) => (
            <div
              key={concept.number}
              className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="text-sm font-semibold text-blue-600">
                {concept.number}
              </div>

              <h3 className="mt-5 text-xl font-semibold text-slate-900">
                {concept.title}
              </h3>

              <p className="mt-4 text-sm leading-6 text-slate-500">
                {concept.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Practical Examples */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            Real-World Applications
          </p>

          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">
            Examples of Machine Learning
          </h2>

          <p className="mt-3 max-w-2xl leading-7 text-slate-500">
            Machine learning supports many familiar digital services. These
            examples show how models can use data to help with specific tasks.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {examples.map((example) => (
            <article
              key={example.title}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-slate-900">
                {example.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                {example.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Ad Slot 2 */}
      <AdSlot />

      {/* Benefits and Limitations */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-9">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
              Benefits
            </p>

            <h2 className="mt-3 text-2xl font-semibold text-slate-900">
              Why Is Machine Learning Useful?
            </h2>

            <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-600">
              <li>
                • Identifies patterns in large datasets.
              </li>
              <li>
                • Helps automate certain prediction and classification tasks.
              </li>
              <li>
                • Supports personalized recommendations and data-driven decisions.
              </li>
              <li>
                • Can improve when models are retrained with suitable data and
                evaluated carefully.
              </li>
            </ul>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-9">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
              Limitations
            </p>

            <h2 className="mt-3 text-2xl font-semibold text-slate-900">
              What Are Its Challenges?
            </h2>

            <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-600">
              <li>
                • Poor-quality or biased data can produce unreliable results.
              </li>
              <li>
                • Training some models requires substantial computing resources.
              </li>
              <li>
                • Models may perform poorly on unfamiliar situations.
              </li>
              <li>
                • Important applications may require human oversight,
                privacy safeguards, and ongoing evaluation.
              </li>
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
              Explore More About Machine Learning
            </h2>

            <p className="mt-4 leading-7 text-blue-100">
              Now that you understand the meaning of machine learning,
              explore its practical applications and the different learning
              methods used to develop models.
            </p>
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/ai/machine-learning/uses-of-machine-learning"
              className="rounded-xl bg-white px-5 py-3 text-sm font-medium text-blue-600 transition hover:bg-blue-50"
            >
              Uses of Machine Learning
            </Link>

            <Link
              href="/ai/machine-learning/types-of-machine-learning"
              className="rounded-xl border border-blue-400 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-500"
            >
              Types of Machine Learning
            </Link>

            <Link
              href="/ai/machine-learning"
              className="rounded-xl border border-blue-400 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-500"
            >
              Machine Learning Main Page
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}