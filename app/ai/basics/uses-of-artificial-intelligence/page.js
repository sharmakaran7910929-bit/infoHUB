import Breadcrumbs from "@/components/Breadcrumb";
import AdSlot from "../../../../components/AdSlot";

export const metadata = {
  title: "Uses of Artificial Intelligence: How AI Is Used in Everyday Life",
  description:
    "Explore the uses of artificial intelligence in everyday life, healthcare, education, business, finance, transportation, cybersecurity, entertainment, and more.",
};

const sections = [
  { id: "everyday-life", label: "Everyday Life" },
  { id: "healthcare", label: "Healthcare" },
  { id: "education", label: "Education" },
  { id: "business", label: "Business" },
  { id: "finance", label: "Finance" },
  { id: "transportation", label: "Transportation" },
  { id: "cybersecurity", label: "Cybersecurity" },
  { id: "entertainment", label: "Entertainment" },
  { id: "manufacturing", label: "Manufacturing" },
  { id: "agriculture", label: "Agriculture" },
  { id: "customer-service", label: "Customer Service" },
  { id: "benefits", label: "Benefits" },
  { id: "limitations", label: "Limitations" },
  { id: "future", label: "Future" },
  { id: "faq", label: "FAQ" },
];

export default function UsesOfArtificialIntelligencePage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* Breadcrumb */}
    <Breadcrumbs />

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 pb-16 pt-10">
        <div className="grid items-center gap-10 lg:grid-cols-[1.35fr_0.65fr]">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-blue-700">
              Artificial Intelligence · Basics
            </div>

            <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Uses of Artificial Intelligence: How AI Is Used in the Real
              World
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              Artificial intelligence is no longer limited to research
              laboratories. AI is being used to recommend videos, detect
              fraud, assist doctors, personalize education, automate
              businesses, improve transportation, and solve many everyday
              problems.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <span className="rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-sm ring-1 ring-slate-200">
                Beginner friendly
              </span>

              <span className="rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-sm ring-1 ring-slate-200">
                Real-world examples
              </span>

              <span className="rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-sm ring-1 ring-slate-200">
                Updated guide
              </span>
            </div>
          </div>

          {/* AI Visual */}
          <div className="relative">
            <div className="absolute -inset-6 rounded-[3rem] bg-blue-100/50 blur-3xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-6 shadow-2xl shadow-slate-200/70">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-widest text-blue-600">
                    AI in action
                  </div>

                  <div className="mt-1 text-xl font-semibold text-slate-950">
                    One technology
                  </div>
                </div>

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-xl text-white">
                  AI
                </div>
              </div>

              <div className="space-y-3">
                {[
                  ["Healthcare", "Diagnosis & research"],
                  ["Education", "Personalized learning"],
                  ["Finance", "Fraud detection"],
                  ["Business", "Automation & analysis"],
                  ["Transport", "Navigation & prediction"],
                ].map(([title, description]) => (
                  <div
                    key={title}
                    className="flex items-center justify-between rounded-2xl bg-slate-50 p-4"
                  >
                    <div>
                      <div className="font-medium text-slate-900">
                        {title}
                      </div>

                      <div className="text-xs text-slate-500">
                        {description}
                      </div>
                    </div>

                    <div className="h-2 w-2 rounded-full bg-blue-500" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="mx-auto grid max-w-7xl gap-10 px-6 pb-20 lg:grid-cols-[minmax(0,1fr)_280px]">
        <article className="min-w-0">
          {/* Introduction */}
          <section className="rounded-3xl border border-blue-100 bg-blue-50/70 p-7 sm:p-9">
            <div className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-600">
              Quick answer
            </div>

            <h2 className="text-2xl font-semibold text-slate-950">
              What are the uses of artificial intelligence?
            </h2>

            <p className="mt-4 leading-8 text-slate-700">
              Artificial intelligence is used to analyze information,
              recognize patterns, make predictions, understand language,
              generate content, automate repetitive tasks, and support
              decision-making. Its applications range from simple features
              such as smartphone recommendations to complex systems used in
              medicine, finance, transportation, manufacturing, and scientific
              research.
            </p>

            <p className="mt-4 leading-8 text-slate-700">
              The exact role of AI depends on the problem being solved. In some
              situations AI assists people, while in others it can automate
              parts of a process and handle large amounts of information much
              faster than a person could manually.
            </p>
          </section>

          {/* Ad Slot */}
          <AdSlot />

          {/* Everyday Life */}
          <section id="everyday-life" className="scroll-mt-28 pt-14">
            <SectionHeading
              number="01"
              title="Uses of AI in Everyday Life"
              description="Many people interact with artificial intelligence every day without thinking of the technology as AI."
            />

            <p className="mt-6 leading-8 text-slate-700">
              Modern smartphones, search engines, streaming services, maps,
              shopping platforms, and digital assistants use AI in different
              ways. These systems can learn from patterns in data and provide
              predictions or recommendations based on context.
            </p>

            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              <InfoCard
                title="Search"
                text="Search systems use AI to understand queries and provide more relevant results."
              />

              <InfoCard
                title="Recommendations"
                text="Streaming and shopping platforms use AI to recommend content or products."
              />

              <InfoCard
                title="Smartphones"
                text="AI can improve photography, speech recognition, translation, and device features."
              />

              <InfoCard
                title="Navigation"
                text="Map applications use data and predictive systems to estimate routes and travel conditions."
              />
            </div>
          </section>

          {/* Healthcare */}
          <section id="healthcare" className="scroll-mt-28 pt-14">
            <SectionHeading
              number="02"
              title="Uses of AI in Healthcare"
              description="Healthcare is one of the most important areas where AI is being researched and applied."
            />

            <p className="mt-6 leading-8 text-slate-700">
              AI can help healthcare professionals process large amounts of
              information, identify patterns in medical data, support research,
              and improve administrative workflows. It is generally used as a
              tool to assist professionals rather than as a replacement for
              clinical judgment.
            </p>

            <div className="mt-7 space-y-3">
              <ListItem text="Analyzing medical images and scans" />
              <ListItem text="Supporting disease research and drug discovery" />
              <ListItem text="Helping identify patterns in patient data" />
              <ListItem text="Predicting certain healthcare risks" />
              <ListItem text="Automating administrative and documentation tasks" />
              <ListItem text="Supporting personalized treatment research" />
            </div>
          </section>

          {/* Education */}
          <section id="education" className="scroll-mt-28 pt-14">
            <SectionHeading
              number="03"
              title="Uses of AI in Education"
              description="AI can help make learning more personalized and provide students and educators with useful tools."
            />

            <p className="mt-6 leading-8 text-slate-700">
              Educational platforms can use AI to adapt content to different
              learning levels, provide explanations, generate practice
              questions, and identify areas where a learner may need additional
              support.
            </p>

            <div className="mt-7 grid gap-4 sm:grid-cols-3">
              <MiniCard title="Personalized Learning" />
              <MiniCard title="AI Tutors" />
              <MiniCard title="Language Learning" />
              <MiniCard title="Practice Questions" />
              <MiniCard title="Writing Assistance" />
              <MiniCard title="Teacher Support" />
            </div>
          </section>

        

          {/* Business */}
          <section id="business" className="scroll-mt-28 pt-14">
            <SectionHeading
              number="04"
              title="Uses of AI in Business"
              description="Businesses use AI to analyze information, automate workflows, understand customers, and support decisions."
            />

            <p className="mt-6 leading-8 text-slate-700">
              AI can process large datasets and identify patterns that may be
              difficult to detect manually. This makes it useful across sales,
              marketing, customer service, operations, finance, and management.
            </p>

            <div className="mt-7 overflow-hidden rounded-3xl border border-slate-200 bg-white">
              {[
                [
                  "Marketing",
                  "Customer insights, content assistance, targeting",
                ],
                ["Sales", "Lead analysis, forecasting, recommendations"],
                [
                  "Customer Service",
                  "Chatbots, classification, support assistance",
                ],
                [
                  "Operations",
                  "Automation, forecasting, process optimization",
                ],
                ["Management", "Data analysis and decision support"],
              ].map(([area, uses], index) => (
                <div
                  key={area}
                  className={`grid gap-2 p-5 sm:grid-cols-[180px_1fr] ${
                    index !== 4 ? "border-b border-slate-100" : ""
                  }`}
                >
                  <div className="font-medium text-slate-950">{area}</div>

                  <div className="text-slate-600">{uses}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Finance */}
          <section id="finance" className="scroll-mt-28 pt-14">
            <SectionHeading
              number="05"
              title="Uses of AI in Finance"
              description="Financial institutions use AI to analyze transactions, detect unusual activity, assess risk, and improve customer services."
            />

            <p className="mt-6 leading-8 text-slate-700">
              Finance generates enormous amounts of structured and unstructured
              data. AI systems can analyze this information quickly and help
              identify patterns that may indicate fraud, risk, or changing
              market conditions.
            </p>

            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              <InfoCard
                title="Fraud Detection"
                text="AI can identify unusual transaction patterns and flag potentially suspicious activity."
              />

              <InfoCard
                title="Risk Analysis"
                text="Machine learning models can help analyze financial and customer data for risk assessment."
              />

              <InfoCard
                title="Customer Support"
                text="AI assistants can answer common questions and help customers find information."
              />

              <InfoCard
                title="Financial Analysis"
                text="AI can process large datasets and assist analysts with research and pattern detection."
              />
            </div>
          </section>

          {/* Transportation */}
          <section id="transportation" className="scroll-mt-28 pt-14">
            <SectionHeading
              number="06"
              title="Uses of AI in Transportation"
              description="AI helps transportation systems understand traffic, optimize routes, and improve operations."
            />

            <p className="mt-6 leading-8 text-slate-700">
              Navigation applications are a familiar example. They analyze
              information about roads and traffic to estimate travel times and
              suggest routes. AI is also being researched and used in areas
              such as driver assistance, logistics, fleet management, and
              autonomous systems.
            </p>
          </section>

          {/* Cybersecurity */}
          <section id="cybersecurity" className="scroll-mt-28 pt-14">
            <SectionHeading
              number="07"
              title="Uses of AI in Cybersecurity"
              description="AI can help security teams analyze large volumes of activity and identify suspicious patterns."
            />

            <p className="mt-6 leading-8 text-slate-700">
              Modern networks can generate enormous amounts of security data.
              AI can assist analysts by detecting unusual behavior, classifying
              alerts, identifying potential threats, and helping prioritize
              security events.
            </p>

            <div className="mt-7 rounded-3xl border border-slate-200 bg-white p-7">
              <div className="grid gap-5 sm:grid-cols-3">
                <StatCard value="01" label="Threat Detection" />
                <StatCard value="02" label="Anomaly Detection" />
                <StatCard value="03" label="Security Analysis" />
              </div>
            </div>
          </section>

          {/* Entertainment */}
          <section id="entertainment" className="scroll-mt-28 pt-14">
            <SectionHeading
              number="08"
              title="Uses of AI in Entertainment"
              description="AI has become part of how people discover, create, and interact with digital entertainment."
            />

            <p className="mt-6 leading-8 text-slate-700">
              Streaming services can recommend movies, shows, songs, or videos
              based on viewing and listening patterns. AI is also used in
              content creation, game development, visual effects, music
              applications, and recommendation systems.
            </p>
          </section>

          {/* Ad Slot */}
          <AdSlot />

          {/* Manufacturing */}
          <section id="manufacturing" className="scroll-mt-28 pt-14">
            <SectionHeading
              number="09"
              title="Uses of AI in Manufacturing"
              description="Manufacturers use AI to improve production, identify defects, predict equipment problems, and optimize processes."
            />

            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              <InfoCard
                title="Quality Inspection"
                text="Computer vision systems can inspect products for visible defects."
              />

              <InfoCard
                title="Predictive Maintenance"
                text="AI can analyze machine data to identify signs that equipment may require attention."
              />

              <InfoCard
                title="Production Planning"
                text="AI can help businesses forecast demand and optimize production schedules."
              />

              <InfoCard
                title="Robotics"
                text="AI can help robots perceive environments and perform increasingly complex tasks."
              />
            </div>
          </section>

          {/* Agriculture */}
          <section id="agriculture" className="scroll-mt-28 pt-14">
            <SectionHeading
              number="10"
              title="Uses of AI in Agriculture"
              description="AI can help farmers and agricultural businesses make better decisions using data."
            />

            <p className="mt-6 leading-8 text-slate-700">
              AI can be combined with satellite imagery, sensors, weather
              information, cameras, and other agricultural data. Possible uses
              include monitoring crops, detecting plant problems, forecasting
              conditions, and improving resource management.
            </p>
          </section>

          {/* Customer Service */}
          <section id="customer-service" className="scroll-mt-28 pt-14">
            <SectionHeading
              number="11"
              title="Uses of AI in Customer Service"
              description="AI-powered systems can help organizations respond to customers more quickly and manage large numbers of requests."
            />

            <p className="mt-6 leading-8 text-slate-700">
              Chatbots and AI assistants can answer common questions, guide
              users through processes, summarize conversations, classify
              support requests, and help human agents find relevant
              information.
            </p>
          </section>

          {/* Benefits */}
          <section id="benefits" className="scroll-mt-28 pt-14">
            <SectionHeading
              number="12"
              title="Why Is AI Useful?"
              description="The value of AI comes from its ability to work with large amounts of information and perform certain tasks at scale."
            />

            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              <BenefitCard
                title="Speed"
                text="AI can process certain types of information much faster than manual methods."
              />

              <BenefitCard
                title="Automation"
                text="Repetitive processes can sometimes be automated, reducing manual work."
              />

              <BenefitCard
                title="Pattern Recognition"
                text="AI can identify patterns across large datasets."
              />

              <BenefitCard
                title="Personalization"
                text="AI systems can adapt recommendations and experiences to individual users."
              />

              <BenefitCard
                title="Scalability"
                text="AI can help organizations handle large volumes of tasks and information."
              />

              <BenefitCard
                title="Decision Support"
                text="AI can provide analysis that helps people make informed decisions."
              />
            </div>
          </section>

          {/* Limitations */}
          <section id="limitations" className="scroll-mt-28 pt-14">
            <SectionHeading
              number="13"
              title="Limitations of Using AI"
              description="AI can be powerful, but it is not perfect and should be used responsibly."
            />

            <div className="mt-7 space-y-3">
              <ListItem text="AI systems can produce incorrect or misleading results." />
              <ListItem text="AI models depend heavily on the quality of their training data." />
              <ListItem text="Some AI systems can reproduce biases present in their data." />
              <ListItem text="Privacy can become a concern when sensitive information is processed." />
              <ListItem text="Important decisions may still require human judgment and oversight." />
              <ListItem text="Developing and operating advanced AI systems can require significant resources." />
            </div>
          </section>

          {/* Future */}
          <section id="future" className="scroll-mt-28 pt-14">
            <SectionHeading
              number="14"
              title="What Will AI Be Used for in the Future?"
              description="The role of AI is likely to expand as models, hardware, data systems, and software continue to improve."
            />

            <p className="mt-6 leading-8 text-slate-700">
              Future AI applications may become more deeply integrated into
              healthcare, education, scientific research, business software,
              robotics, transportation, cybersecurity, and personal
              productivity tools.
            </p>

            <p className="mt-4 leading-8 text-slate-700">
              However, the most useful future of AI may not be about replacing
              every human task. In many areas, AI will likely work alongside
              people by handling information-heavy or repetitive tasks while
              humans provide judgment, creativity, responsibility, and
              decision-making.
            </p>
          </section>

          {/* Summary */}
          <section className="mt-14 rounded-3xl bg-slate-950 p-8 text-white sm:p-10">
            <div className="text-sm font-semibold uppercase tracking-widest text-blue-400">
              In summary
            </div>

            <h2 className="mt-3 text-3xl font-semibold">
              AI is becoming a general-purpose technology
            </h2>

            <p className="mt-5 max-w-3xl leading-8 text-slate-300">
              Artificial intelligence is being applied across many industries
              because it can analyze information, recognize patterns, generate
              content, make predictions, and automate parts of complex
              workflows. Its impact will depend not only on what AI can do, but
              also on how responsibly people and organizations use it.
            </p>
          </section>

        
          {/* FAQ */}
          <section id="faq" className="scroll-mt-28 pt-14">
            <SectionHeading
              number="15"
              title="Frequently Asked Questions"
              description="Common questions about the applications of artificial intelligence."
            />

            <div className="mt-7 space-y-4">
              <Faq
                question="What is the most common use of artificial intelligence?"
                answer="AI is used in many common applications, including search, recommendations, digital assistants, navigation, content generation, fraud detection, customer service, and data analysis."
              />

              <Faq
                question="How is AI used in daily life?"
                answer="People encounter AI in smartphones, search engines, maps, streaming services, online shopping, voice assistants, cameras, translation tools, and many other digital products."
              />

              <Faq
                question="How is AI used in business?"
                answer="Businesses use AI for customer service, marketing, sales analysis, forecasting, automation, fraud detection, data analysis, and decision support."
              />

              <Faq
                question="How is AI used in healthcare?"
                answer="AI can support medical image analysis, research, patient-data analysis, drug discovery, administrative work, and other healthcare processes. Professional oversight remains important."
              />

              <Faq
                question="Can AI replace humans?"
                answer="AI can automate some tasks, but whether it can replace a particular job depends on the tasks involved. Many applications are designed to assist people rather than completely replace them."
              />

              <Faq
                question="Why is artificial intelligence important?"
                answer="AI is important because it can process large amounts of information, automate certain tasks, identify patterns, generate content, and support decisions across many industries."
              />
            </div>
          </section>

          {/* Related Articles */}
          <section className="mt-16 border-t border-slate-200 pt-12">
            <div className="text-sm font-semibold uppercase tracking-widest text-blue-600">
              Continue learning
            </div>

            <h2 className="mt-2 text-3xl font-semibold text-slate-950">
              Related Artificial Intelligence Guides
            </h2>

            <div className="mt-7 grid gap-5 sm:grid-cols-2">
              <RelatedCard
                href="/ai/basics/what-is-artificial-intelligence"
                title="What Is Artificial Intelligence?"
                text="Understand the basics of AI, how it works, and why it matters."
              />

              <RelatedCard
                href="/ai/basics/types-of-artificial-intelligence"
                title="Types of Artificial Intelligence"
                text="Explore types of AI in everyday life and different industries."
              />
            </div>
          </section>
        </article>

        {/* Sidebar */}
        <aside className="hidden lg:block">
          <div className="sticky top-28">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="text-xs font-semibold uppercase tracking-widest text-blue-600">
                On this page
              </div>

              <nav className="mt-5 space-y-3">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="block text-sm font-medium leading-5 text-slate-500 transition hover:text-blue-600"
                  >
                    {section.label}
                  </a>
                ))}
              </nav>
            </div>

            
          </div>
        </aside>
      </div>
    </main>
  );
}

/* ---------- Reusable Components ---------- */

function SectionHeading({ number, title, description }) {
  return (
    <div>
      <div className="mb-3 flex items-center gap-3">
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-xs font-semibold text-blue-600">
          {number}
        </span>

        <span className="text-xs font-semibold uppercase tracking-widest text-slate-400">
          Artificial Intelligence
        </span>
      </div>

      <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
        {title}
      </h2>

      <p className="mt-3 max-w-3xl leading-7 text-slate-500">
        {description}
      </p>
    </div>
  );
}

function InfoCard({ title, text }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <h3 className="font-semibold text-slate-950">{title}</h3>

      <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
    </div>
  );
}

function MiniCard({ title }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm">
      <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-sm font-semibold text-blue-600">
        AI
      </div>

      <div className="text-sm font-medium text-slate-900">{title}</div>
    </div>
  );
}

function ListItem({ text }) {
  return (
    <div className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-50 text-xs font-semibold text-blue-600">
        ✓
      </div>

      <p className="leading-7 text-slate-700">{text}</p>
    </div>
  );
}

function BenefitCard({ title, text }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-slate-950">{title}</h3>

      <p className="mt-2 leading-7 text-slate-600">{text}</p>
    </div>
  );
}

function StatCard({ value, label }) {
  return (
    <div className="rounded-2xl bg-slate-50 p-5">
      <div className="text-2xl font-semibold text-blue-600">{value}</div>

      <div className="mt-2 text-sm font-medium text-slate-800">{label}</div>
    </div>
  );
}

function Faq({ question, answer }) {
  return (
    <details className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <summary className="cursor-pointer list-none pr-6 font-medium text-slate-950">
        <div className="flex items-center justify-between gap-4">
          <span>{question}</span>

          <span className="text-xl text-slate-400 transition group-open:rotate-45">
            +
          </span>
        </div>
      </summary>

      <p className="mt-4 max-w-3xl leading-7 text-slate-600">{answer}</p>
    </details>
  );
}

function RelatedCard({ href, title, text }) {
  return (
    <a
      href={href}
      className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
    >
      <div className="text-lg font-semibold text-slate-950 transition group-hover:text-blue-600">
        {title}
      </div>

      <p className="mt-2 text-sm leading-6 text-slate-500">{text}</p>

      <div className="mt-5 text-sm font-medium text-blue-600">
        Read article →
      </div>
    </a>
  );
}