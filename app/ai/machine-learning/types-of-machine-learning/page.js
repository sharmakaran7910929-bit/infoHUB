import Link from "next/link";
import Breadcrumbs from "../../../../components/Breadcrumb";
import AdSlot from "../../../../components/AdSlot";

const learningTypes = [
  {
    number: "01",
    title: "Supervised Learning",
    description:
      "Supervised learning trains a model using labeled examples, where the input data is paired with a known answer. The model learns relationships between inputs and outputs to make predictions on new data.",
    examples:
      "Email spam detection, house price prediction, and image classification.",
    methods:
      "Classification and regression.",
  },
  {
    number: "02",
    title: "Unsupervised Learning",
    description:
      "Unsupervised learning works with data that does not have predefined labels. Models identify patterns, similarities, groups, or underlying structures that may be useful for understanding the data.",
    examples:
      "Customer segmentation, grouping similar documents, and discovering patterns in purchasing behavior.",
    methods:
      "Clustering and dimensionality reduction.",
  },
  {
    number: "03",
    title: "Semi-Supervised Learning",
    description:
      "Semi-supervised learning combines a smaller amount of labeled data with a larger amount of unlabeled data. It can be useful when labeling examples requires significant time, effort, or expert knowledge.",
    examples:
      "Image classification and document categorization when only a portion of the available examples has labels.",
    methods:
      "Training approaches that use both labeled and unlabeled data.",
  },
  {
    number: "04",
    title: "Reinforcement Learning",
    description:
      "Reinforcement learning trains an agent to make decisions by interacting with an environment. The agent receives rewards or penalties based on its actions and learns a strategy that aims to maximize long-term reward.",
    examples:
      "Game-playing systems, robotics, and decision-making in simulated environments.",
    methods:
      "Reward-based learning and policy optimization.",
  },
];

const comparison = [
  {
    type: "Supervised",
    data: "Labeled data",
    goal: "Predict known outcomes",
  },
  {
    type: "Unsupervised",
    data: "Unlabeled data",
    goal: "Discover patterns",
  },
  {
    type: "Semi-supervised",
    data: "Labeled and unlabeled data",
    goal: "Learn with limited labels",
  },
  {
    type: "Reinforcement",
    data: "Rewards and interaction",
    goal: "Learn effective actions",
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
                Types of Machine Learning
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-500">
                Explore the main types of machine learning, understand how
                each approach learns from data or feedback, and discover
                examples of where these methods are used in real-world
                applications.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="#learning-types"
                  className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-700"
                >
                  Explore the Types
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

      {/* Introduction */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="grid gap-8 lg:grid-cols-[1.4fr_0.6fr]">
          <article className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-9">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
              Understanding Learning Methods
            </p>

            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              How is machine learning classified?
            </h2>

            <div className="mt-5 space-y-4 text-base leading-7 text-slate-600">
              <p>
                Machine learning includes different approaches for teaching
                computer models to learn patterns and solve problems. These
                approaches differ in the kind of data they use, the feedback
                available during learning, and the objectives they are designed
                to achieve.
              </p>

              <p>
                Supervised learning uses examples with known answers, while
                unsupervised learning searches for patterns in data without
                predefined labels. Semi-supervised learning combines labeled
                and unlabeled examples, whereas reinforcement learning focuses
                on actions, interaction, and rewards.
              </p>

              <p>
                Each approach is suitable for different situations. The right
                choice depends on the problem, the available data, the expected
                result, and the resources needed to train and evaluate a model.
                Understanding these differences makes it easier to see how
                machine learning is applied across industries.
              </p>
            </div>
          </article>

          {/* Quick Facts */}
          <aside className="rounded-3xl border border-slate-200 bg-slate-900 p-7 text-white shadow-sm sm:p-9">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-300">
              Quick Overview
            </p>

            <h2 className="mt-3 text-2xl font-semibold">
              Four Common Approaches
            </h2>

            <div className="mt-7 space-y-5">
              {learningTypes.map((type) => (
                <div key={type.number}>
                  <div className="text-sm font-semibold text-blue-300">
                    {type.number}
                  </div>

                  <p className="mt-1 text-sm leading-6 text-slate-300">
                    {type.title}
                  </p>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      {/* Learning Types */}
      <section
        id="learning-types"
        className="mx-auto max-w-7xl px-6 pb-16"
      >
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            Main Categories
          </p>

          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">
            Four Types of Machine Learning
          </h2>

          <p className="mt-3 max-w-2xl leading-7 text-slate-500">
            Learn how each approach works, what kind of information it uses,
            and which real-world problems it can help solve.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {learningTypes.map((type) => (
            <article
              key={type.number}
              className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-md sm:p-8"
            >
              <div className="text-sm font-semibold text-blue-600">
                {type.number}
              </div>

              <h3 className="mt-4 text-xl font-semibold text-slate-900">
                {type.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                {type.description}
              </p>

              <div className="mt-5 border-t border-slate-100 pt-5">
                <p className="text-sm font-semibold text-slate-800">
                  Examples
                </p>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {type.examples}
                </p>

                <p className="mt-4 text-sm font-semibold text-slate-800">
                  Common methods
                </p>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {type.methods}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Comparison Table */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-9">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            Quick Comparison
          </p>

          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            Difference Between Machine Learning Types
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-slate-500">
            The key difference is how each approach receives information
            during learning and what it tries to achieve.
          </p>

          <div className="mt-7 overflow-x-auto">
            <table className="w-full min-w-[600px] text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200 text-slate-900">
                  <th className="px-4 py-4 font-semibold">Type</th>
                  <th className="px-4 py-4 font-semibold">Learning Input</th>
                  <th className="px-4 py-4 font-semibold">Main Goal</th>
                </tr>
              </thead>

              <tbody>
                {comparison.map((item) => (
                  <tr
                    key={item.type}
                    className="border-b border-slate-100 last:border-0"
                  >
                    <td className="px-4 py-4 font-medium text-slate-800">
                      {item.type}
                    </td>

                    <td className="px-4 py-4 leading-6 text-slate-600">
                      {item.data}
                    </td>

                    <td className="px-4 py-4 leading-6 text-slate-600">
                      {item.goal}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Ad Slot 2 */}
      <AdSlot />

      {/* Choosing an Approach */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-9">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            Choosing the Right Method
          </p>

          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            Which Type of Machine Learning Should You Use?
          </h2>

          <div className="mt-5 space-y-4 text-base leading-7 text-slate-600">
            <p>
              The most suitable approach depends on the problem you want to
              solve. If you have examples with known answers and want to
              predict outcomes for new cases, supervised learning may be
              appropriate. If you want to discover groups or relationships
              without predefined labels, unsupervised learning may be useful.
            </p>

            <p>
              Semi-supervised learning can help when only some of your data
              has labels. Reinforcement learning is worth considering when an
              agent must learn a sequence of decisions through interaction
              and feedback from its environment.
            </p>

            <p>
              These categories are useful starting points, not rigid rules
              for every project. Real-world systems may combine multiple
              techniques depending on their requirements, data, and design.
            </p>
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
              Understand the fundamentals and discover how different learning
              methods are applied to real-world problems.
            </p>
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/ai/machine-learning/what-is-machine-learning"
              className="rounded-xl bg-white px-5 py-3 text-sm font-medium text-blue-600 transition hover:bg-blue-50"
            >
              What Is Machine Learning?
            </Link>

            <Link
              href="/ai/machine-learning/uses-of-machine-learning"
              className="rounded-xl border border-blue-400 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-500"
            >
              Uses of Machine Learning
            </Link>

            <Link
              href="/ai/machine-learning"
              className="rounded-xl border border-blue-400 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-500"
            >
              Machine Learning Main Page
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