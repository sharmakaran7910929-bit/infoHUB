import Link from "next/link";
import Breadcrumbs from "../../../../components/Breadcrumb";
import AdSlot from "../../../../components/AdSlot";

const applications = [
  {
    number: "01",
    title: "Healthcare",
    description:
      "Machine learning helps analyze medical images, identify patterns in patient data, support disease risk prediction, and assist healthcare professionals with clinical decisions. Its results require appropriate validation and professional oversight.",
    examples:
      "Medical image analysis, patient risk assessment, and health research.",
  },
  {
    number: "02",
    title: "Banking and Finance",
    description:
      "Financial institutions use machine learning to examine transaction patterns, identify potentially suspicious activity, assess certain financial risks, and support automated analysis. Models can help flag unusual transactions for further investigation.",
    examples:
      "Fraud detection, risk analysis, and transaction monitoring.",
  },
  {
    number: "03",
    title: "Education",
    description:
      "Educational platforms can use machine learning to analyze learning progress, recommend relevant study materials, and adapt some learning activities to individual needs. Teachers can use these insights to help identify areas where students may need additional support.",
    examples:
      "Personalized learning recommendations, learning analytics, and educational content suggestions.",
  },
  {
    number: "04",
    title: "E-Commerce and Online Shopping",
    description:
      "Online stores can analyze product views, purchases, searches, and other available signals to understand shopping patterns. Machine learning models can use these patterns to recommend products and help businesses forecast customer demand.",
    examples:
      "Product recommendations, demand forecasting, and product search ranking.",
  },
  {
    number: "05",
    title: "Transportation",
    description:
      "Transportation systems can use machine learning to estimate travel times, forecast traffic patterns, identify vehicle maintenance needs, and support route planning. These applications can help improve operational efficiency when their predictions are reliable.",
    examples:
      "Traffic prediction, route optimization, and predictive vehicle maintenance.",
  },
  {
    number: "06",
    title: "Cybersecurity",
    description:
      "Security systems can use machine learning to analyze network activity, identify unusual behavior, classify suspicious files, and help prioritize alerts. These models support security teams, but they can produce false alarms and should work alongside other defensive controls.",
    examples:
      "Anomaly detection, suspicious activity analysis, and malware classification.",
  },
  {
    number: "07",
    title: "Entertainment and Streaming",
    description:
      "Streaming services can analyze viewing history, preferences, and interactions to recommend videos, music, films, or other content. Recommendation models help organize large content libraries around the interests of individual users.",
    examples:
      "Video recommendations, music suggestions, and personalized content discovery.",
  },
  {
    number: "08",
    title: "Manufacturing",
    description:
      "Manufacturers use machine learning to analyze sensor readings, inspect products, forecast equipment failures, and identify patterns in production processes. These applications can help reduce unplanned downtime and improve quality control.",
    examples:
      "Predictive maintenance, automated defect detection, and production monitoring.",
  },
  {
    number: "09",
    title: "Agriculture",
    description:
      "Machine learning can help analyze weather information, soil measurements, crop images, and other agricultural data. Depending on the available data and local conditions, these systems can support crop monitoring and more informed farm management.",
    examples:
      "Crop disease identification, yield estimation, and irrigation planning.",
  },
  {
    number: "10",
    title: "Business and Marketing",
    description:
      "Businesses can use machine learning to identify customer patterns, estimate demand, forecast sales, and organize customer feedback. These insights can help teams make better-informed decisions about operations, services, and marketing activities.",
    examples:
      "Sales forecasting, customer segmentation, and demand analysis.",
  },
];

const benefits = [
  "Analyzing large amounts of data efficiently",
  "Identifying patterns that may be difficult to notice manually",
  "Supporting predictions and data-driven decisions",
  "Automating selected classification and detection tasks",
  "Personalizing services and recommendations",
  "Helping organizations identify unusual activity",
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
                Uses of Machine Learning
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-500">
                Discover how machine learning is used in healthcare, finance,
                education, cybersecurity, business, transportation, and
                everyday digital services to analyze data, recognize patterns,
                and support decisions.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="#applications"
                  className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-700"
                >
                  Explore Applications
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
              Machine Learning in Practice
            </p>

            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              How is machine learning used in the real world?
            </h2>

            <div className="mt-5 space-y-4 text-base leading-7 text-slate-600">
              <p>
                Machine learning is used wherever data can help a computer
                identify patterns, make predictions, classify information,
                or recommend possible actions. Instead of relying only on
                manually written rules, trained models can learn relationships
                from examples and apply them to new information.
              </p>

              <p>
                Many familiar digital services use machine learning behind the
                scenes. Email platforms can filter spam, shopping websites can
                recommend products, banks can flag unusual transactions, and
                streaming applications can suggest content based on user
                activity. Each application uses data and models designed for
                a particular purpose.
              </p>

              <p>
                Machine learning is also useful beyond consumer technology.
                Healthcare organizations can analyze medical information,
                manufacturers can monitor equipment, farmers can examine crop
                conditions, and cybersecurity teams can investigate unusual
                network activity. The value of these applications depends on
                data quality, appropriate testing, and how their results are
                used.
              </p>
            </div>
          </article>

          {/* Quick Facts */}
          <aside className="rounded-3xl border border-slate-200 bg-slate-900 p-7 text-white shadow-sm sm:p-9">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-300">
              Quick Overview
            </p>

            <h2 className="mt-3 text-2xl font-semibold">
              What Can It Help With?
            </h2>

            <div className="mt-7 space-y-5">
              <div>
                <div className="text-3xl font-semibold">01</div>
                <p className="mt-1 text-sm leading-6 text-slate-300">
                  Finding patterns in large datasets.
                </p>
              </div>

              <div>
                <div className="text-3xl font-semibold">02</div>
                <p className="mt-1 text-sm leading-6 text-slate-300">
                  Predicting outcomes and identifying unusual activity.
                </p>
              </div>

              <div>
                <div className="text-3xl font-semibold">03</div>
                <p className="mt-1 text-sm leading-6 text-slate-300">
                  Supporting recommendations and operational decisions.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Applications */}
      <section
        id="applications"
        className="mx-auto max-w-7xl px-6 pb-16"
      >
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            Real-World Applications
          </p>

          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">
            10 Important Uses of Machine Learning
          </h2>

          <p className="mt-3 max-w-2xl leading-7 text-slate-500">
            Explore common applications across industries and see examples of
            the tasks machine learning models can support.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {applications.map((application) => (
            <article
              key={application.number}
              className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-md"
            >
              <div className="text-sm font-semibold text-blue-600">
                {application.number}
              </div>

              <h3 className="mt-4 text-xl font-semibold text-slate-900">
                {application.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                {application.description}
              </p>

              <div className="mt-5 border-t border-slate-100 pt-4">
                <p className="text-sm font-semibold text-slate-800">
                  Examples
                </p>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {application.examples}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-9">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            Key Benefits
          </p>

          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            Why Do Organizations Use Machine Learning?
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-slate-500">
            Machine learning can help organizations process information,
            identify useful patterns, and support specific tasks. Its benefits
            depend on whether the model is appropriate for the problem and
            performs reliably in real-world conditions.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, index) => (
              <div
                key={benefit}
                className="rounded-2xl border border-slate-100 bg-slate-50 p-5"
              >
                <div className="text-sm font-semibold text-blue-600">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <p className="mt-3 text-sm font-medium leading-6 text-slate-700">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ad Slot 2 */}
      <AdSlot />

      {/* Limitations */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-9">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            Important Considerations
          </p>

          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            Limitations of Machine Learning Applications
          </h2>

          <div className="mt-5 space-y-4 text-base leading-7 text-slate-600">
            <p>
              Machine learning does not guarantee accurate predictions.
              Incomplete, outdated, or biased data can affect model performance,
              and a model that works well in one environment may perform
              differently when conditions change.
            </p>

            <p>
              Organizations must also consider privacy, security, fairness,
              operating costs, and the consequences of incorrect results.
              Applications involving healthcare, financial decisions, or
              security may require additional validation and human oversight.
            </p>

            <p>
              Machine learning is most useful when it addresses a clearly
              defined problem and its performance is regularly evaluated
              against appropriate standards.
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
              Learn More About Machine Learning
            </h2>

            <p className="mt-4 leading-7 text-blue-100">
              Explore the fundamentals of machine learning and understand the
              different approaches used to train models for real-world tasks.
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