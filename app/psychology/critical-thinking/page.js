
import {
  Brain,
  Lightbulb,
  MessageCircle,
  Search,
  ShieldCheck,
  Scale,
  Target,
  CheckCircle2,
  AlertCircle,
  Eye,
  BookOpen,
  Wallet,
  ShoppingCart,
  Users,
  RefreshCw,
  HelpCircle,
  ChevronRight,
  XCircle,
  Check,
  ArrowRight,
} from "lucide-react";
import AdSlot from "../../../components/AdSlot";

export const metadata = {
  title:
    "Critical Thinking | Meaning, Examples and Everyday Applications | PriceTag HUB",
  description:
    "Understand what critical thinking means, how it works, and how to use it in everyday decisions, relationships, education, shopping, and financial choices.",
};

const thinkingSteps = [
  {
    number: "01",
    title: "Question the Information",
    description:
      "Do not accept a statement immediately. Ask what it means, why someone is saying it, and whether the claim makes sense.",
    question: "What exactly is being claimed?",
    icon: HelpCircle,
  },
  {
    number: "02",
    title: "Examine the Evidence",
    description:
      "Look for facts, reliable sources, examples, and supporting information. Separate what is proven from what is merely assumed.",
    question: "What evidence supports this claim?",
    icon: Search,
  },
  {
    number: "03",
    title: "Consider Other Possibilities",
    description:
      "Think about alternative explanations. A situation may have more than one possible interpretation.",
    question: "Could there be another explanation?",
    icon: Scale,
  },
  {
    number: "04",
    title: "Reach a Reasoned Conclusion",
    description:
      "Use the available evidence to make a decision. Be willing to change your conclusion when better information appears.",
    question: "What conclusion does the evidence support?",
    icon: CheckCircle2,
  },
];

const everydayExamples = [
  {
    icon: MessageCircle,
    title: "When You Receive a WhatsApp Message",
    situation:
      "A message says that a particular government scheme will give every citizen ₹50,000.",
    ordinary:
      "You believe it immediately and forward it to your friends and family.",
    critical:
      "You check whether the scheme exists, look for an official government source, and verify the conditions before sharing it.",
    lesson:
      "Do not confuse a widely shared message with verified information.",
  },
  {
    icon: ShoppingCart,
    title: "When You See a Huge Discount",
    situation:
      "An online store displays a product with a 70% discount and a countdown timer.",
    ordinary:
      "You feel that the offer may disappear soon, so you purchase it quickly.",
    critical:
      "You compare the actual selling price, check other sellers, read reviews, and ask whether you need the product.",
    lesson: "A discount does not automatically mean a good deal.",
  },
  {
    icon: Users,
    title: "When Someone Disagrees With You",
    situation:
      "A friend disagrees with your opinion and gives reasons for their position.",
    ordinary:
      "You focus on defending your opinion and proving that the other person is wrong.",
    critical:
      "You listen to their reasoning, examine both positions, and consider whether any part of their argument is valid.",
    lesson:
      "Understanding another viewpoint does not mean abandoning your own.",
  },
  {
    icon: Wallet,
    title: "When You Make a Financial Decision",
    situation:
      "Someone tells you that a particular share will definitely increase in price.",
    ordinary:
      "You invest because you trust the person's confidence.",
    critical:
      "You research the company, examine the risks, consider possible losses, and decide whether the investment suits your situation.",
    lesson:
      "Confidence is not evidence, and every investment involves risk.",
  },
];

const thinkingHabits = [
  {
    title: "Accepting Information Without Checking",
    description:
      "Believing something simply because a friend, influencer, or popular source said it.",
    icon: AlertCircle,
  },
  {
    title: "Making Decisions in a Hurry",
    description:
      "Choosing immediately because of fear, excitement, pressure, or a limited-time offer.",
    icon: RefreshCw,
  },
  {
    title: "Looking Only for Supporting Evidence",
    description:
      "Noticing information that agrees with your opinion while ignoring evidence that challenges it.",
    icon: Eye,
  },
  {
    title: "Confusing Opinions With Facts",
    description:
      "Treating someone's personal belief or interpretation as if it were an established fact.",
    icon: MessageCircle,
  },
];

const checklist = [
  "Have I clearly understood the information?",
  "Is this a fact, an opinion, or an assumption?",
  "Where did this information come from?",
  "Is there reliable evidence to support it?",
  "Have I considered another possible explanation?",
  "Am I making this decision because of pressure or emotion?",
  "Would I change my opinion if new evidence appeared?",
];

const applications = [
  {
    icon: BookOpen,
    title: "Education",
    text:
      "Understand concepts deeply, evaluate arguments, and solve problems instead of relying only on memorization.",
  },
  {
    icon: Wallet,
    title: "Financial Decisions",
    text:
      "Examine risks, compare alternatives, and avoid decisions based only on promises or market excitement.",
  },
  {
    icon: Users,
    title: "Relationships",
    text:
      "Understand different perspectives, question assumptions, and respond more thoughtfully during disagreements.",
  },
  {
    icon: Search,
    title: "Digital Information",
    text:
      "Recognize misleading claims, check sources, and distinguish reliable information from unsupported statements.",
  },
];

const faqs = [
  {
    question: "What is critical thinking in simple words?",
    answer:
      "Critical thinking is the ability to examine information carefully, question assumptions, evaluate evidence, and reach a logical conclusion instead of accepting everything immediately.",
  },
  {
    question: "Why is critical thinking important?",
    answer:
      "It helps people make informed decisions, recognize misleading information, solve problems, understand different viewpoints, and avoid mistakes caused by assumptions or emotional reactions.",
  },
  {
    question: "Is critical thinking the same as criticizing?",
    answer:
      "No. Criticizing often means pointing out faults. Critical thinking means examining information objectively, including its strengths, weaknesses, evidence, and possible explanations.",
  },
  {
    question: "Can critical thinking be learned?",
    answer:
      "Yes. It can be developed through regular practice, asking useful questions, checking evidence, considering different perspectives, and reflecting on decisions.",
  },
  {
    question: "Does critical thinking mean doubting everything?",
    answer:
      "No. It does not mean rejecting every statement. It means deciding how much confidence to place in information based on the quality of the evidence.",
  },
  {
    question: "Where can we use critical thinking?",
    answer:
      "It can be used in education, work, relationships, shopping, financial decisions, online information, problem-solving, and almost every situation where a person needs to make a judgment.",
  },
];

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      {eyebrow && (
        <p className="mb-3 text-sm font-bold uppercase tracking-wider text-blue-700">
          {eyebrow}
        </p>
      )}

      <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
        {title}
      </h2>

      {description && (
        <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}

function ExampleCard({ example, index }) {
  const Icon = example.icon;

  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="mb-5 flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
          <Icon size={23} />
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
            Everyday example {index + 1}
          </p>

          <h3 className="mt-1 text-lg font-bold text-slate-900">
            {example.title}
          </h3>
        </div>
      </div>

      <div className="rounded-xl bg-slate-50 p-4">
        <p className="text-sm font-bold text-slate-700">The situation</p>

        <p className="mt-2 text-sm leading-7 text-slate-600">
          {example.situation}
        </p>
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <div className="rounded-xl border border-rose-100 bg-rose-50/70 p-4">
          <div className="mb-2 flex items-center gap-2 text-sm font-bold text-rose-700">
            <XCircle size={17} />
            Without critical thinking
          </div>

          <p className="text-sm leading-7 text-slate-700">
            {example.ordinary}
          </p>
        </div>

        <div className="rounded-xl border border-emerald-100 bg-emerald-50/70 p-4">
          <div className="mb-2 flex items-center gap-2 text-sm font-bold text-emerald-700">
            <CheckCircle2 size={17} />
            With critical thinking
          </div>

          <p className="text-sm leading-7 text-slate-700">
            {example.critical}
          </p>
        </div>
      </div>

      <div className="mt-4 flex items-start gap-2 rounded-lg bg-blue-50 px-4 py-3">
        <Lightbulb
          className="mt-0.5 shrink-0 text-blue-700"
          size={17}
        />

        <p className="text-sm leading-6 text-blue-900">
          <span className="font-bold">The lesson: </span>
          {example.lesson}
        </p>
      </div>
    </article>
  );
}

export default function CriticalThinkingPage() {
  return (
    <main className="overflow-hidden bg-white text-slate-800">

      {/* MAIN LEARNING OVERVIEW */}
      <section className="relative overflow-hidden border-b border-blue-100 bg-gradient-to-br from-white via-blue-50 to-indigo-50">
        <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-indigo-200/30 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-sm font-bold text-blue-700">
                <Brain size={17} />
                Psychology · Thinking and Reasoning
              </div>

              <h2 className="max-w-2xl text-3xl font-bold leading-tight tracking-tight text-slate-950 sm:text-4xl">
                Understand How Critical Thinking Helps You Make Better Decisions
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
                Discover what critical thinking really means, how your
                mind evaluates information, and how you can use better
                reasoning in everyday situations. From online information
                and shopping to relationships and financial decisions,
                learn to think beyond first impressions.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                {[
                  "Meaning and principles",
                  "Real-life examples",
                  "Practical thinking skills",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-semibold text-blue-800"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-blue-100 bg-white/90 p-6 shadow-lg shadow-blue-900/5 sm:p-7">
              <h3 className="text-lg font-bold text-slate-900">
                What You Will Learn
              </h3>

              <div className="mt-5 space-y-4">
                {[
                  "What critical thinking means and why it matters",
                  "How to distinguish facts, opinions, and assumptions",
                  "How to examine evidence and question information",
                  "How critical thinking applies to everyday decisions",
                  "How to develop better reasoning habits",
                  "How to practice critical thinking through real situations",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                      <Check size={14} />
                    </span>

                    <p className="text-sm leading-6 text-slate-700">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 border-t border-slate-100 pt-5">
                <p className="text-sm font-semibold text-blue-800">
                  Learn the concept. Connect it with real life. Apply it
                  in your decisions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION: MEANING FIRST */}
      <section className="relative border-b border-blue-100 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-bold text-blue-700 shadow-sm">
              <Brain size={17} />
              Understanding Human Thinking
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              What Is Critical Thinking?
            </h1>

            <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-slate-700 sm:text-xl">
              Critical thinking is the ability to carefully examine
              information, question assumptions, evaluate evidence, and
              make reasoned decisions rather than accepting everything
              at face value.
            </p>

            <div className="mx-auto mt-9 max-w-3xl rounded-2xl border border-blue-200 bg-white p-6 text-left shadow-sm sm:p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                  <Lightbulb size={25} />
                </div>

                <div>
                  <h2 className="text-xl font-bold text-slate-900">
                    The Central Idea
                  </h2>

                  <p className="mt-2 leading-8 text-slate-600">
                    Instead of asking only, "What do I think about this?",
                    critical thinking encourages you to ask, "Why do I
                    think this, what evidence supports it, and could
                    there be another explanation?"
                  </p>
                </div>
              </div>
            </div>

            <p className="mt-7 text-sm leading-7 text-slate-500">
              Critical thinking is not about finding faults in everything.
              It is about understanding information before forming a
              judgment.
            </p>
          </div>
        </div>
      </section>

      {/* UNDERSTANDING THE CONCEPT */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Understand the concept"
          title="What Does Critical Thinking Actually Involve?"
          description="It is a combination of mental abilities that help you understand information, examine its reliability, and decide what conclusion is justified."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: Search,
              title: "Analysis",
              text:
                "Breaking information into smaller parts to understand how the ideas, facts, and arguments are connected.",
            },
            {
              icon: ShieldCheck,
              title: "Evaluation",
              text:
                "Checking whether information, evidence, and sources are reliable enough to support a conclusion.",
            },
            {
              icon: HelpCircle,
              title: "Questioning",
              text:
                "Asking meaningful questions instead of accepting assumptions or statements without examination.",
            },
            {
              icon: Scale,
              title: "Open-mindedness",
              text:
                "Considering different viewpoints and being willing to reconsider your position.",
            },
            {
              icon: Target,
              title: "Reasoning",
              text:
                "Connecting evidence and ideas logically to reach a conclusion that makes sense.",
            },
            {
              icon: CheckCircle2,
              title: "Self-correction",
              text:
                "Recognizing when your own thinking may be incomplete and changing your view when necessary.",
            },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                  <Icon size={22} />
                </div>

                <h3 className="text-lg font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </section>
<AdSlot />
      {/* EVERYDAY LIFE EXAMPLES */}
      <section className="bg-gradient-to-b from-blue-50/80 to-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="See it in everyday life"
            title="You Use Critical Thinking More Often Than You Realize"
            description="Think about the decisions you make every day. The difference is not whether you think, but whether you examine the information behind your thoughts."
          />

          <div className="grid gap-6 lg:grid-cols-2">
            {everydayExamples.map((example, index) => (
              <ExampleCard
                key={example.title}
                example={example}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ORDINARY THINKING VS CRITICAL THINKING */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="A useful distinction"
          title="Ordinary Thinking vs Critical Thinking"
          description="Both involve thinking, but they differ in how information is examined before a person reaches a conclusion."
        />

        <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
          <div className="grid md:grid-cols-2">
            <div className="bg-slate-50 p-6 sm:p-8">
              <h3 className="text-xl font-bold text-slate-900">
                Accepting Without Examination
              </h3>

              <p className="mt-2 text-sm leading-7 text-slate-600">
                A person may form a judgment quickly using familiar
                beliefs, first impressions, emotions, or incomplete
                information.
              </p>

              <ul className="mt-6 space-y-4">
                {[
                  "Accepts a claim because it sounds convincing.",
                  "Relies heavily on first impressions.",
                  "May overlook information that disagrees.",
                  "Makes decisions without checking alternatives.",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm leading-6 text-slate-700"
                  >
                    <XCircle
                      className="mt-0.5 shrink-0 text-rose-500"
                      size={18}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-blue-50/70 p-6 sm:p-8">
              <h3 className="text-xl font-bold text-blue-950">
                Critical Thinking
              </h3>

              <p className="mt-2 text-sm leading-7 text-slate-700">
                A person examines the available information, considers
                evidence, and makes a judgment based on reasoned
                evaluation.
              </p>

              <ul className="mt-6 space-y-4">
                {[
                  "Asks what evidence supports the claim.",
                  "Checks the reliability of information.",
                  "Considers different viewpoints.",
                  "Makes decisions after evaluating alternatives.",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm leading-6 text-slate-700"
                  >
                    <CheckCircle2
                      className="mt-0.5 shrink-0 text-emerald-600"
                      size={18}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* THINKING HABITS */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Recognize your thinking"
            title="Four Habits That Can Affect Your Judgment"
            description="Sometimes the biggest obstacle to good reasoning is not a lack of intelligence, but an automatic habit that goes unnoticed."
          />

          <div className="grid gap-5 sm:grid-cols-2">
            {thinkingHabits.map((habit, index) => {
              const Icon = habit.icon;

              return (
                <div
                  key={habit.title}
                  className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-6"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-700">
                    <Icon size={21} />
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Habit {index + 1}
                    </p>

                    <h3 className="mt-1 font-bold text-slate-900">
                      {habit.title}
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      {habit.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
<AdSlot />
      {/* FOUR-STEP PROCESS */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="A practical method"
          title="How to Apply Critical Thinking"
          description="You do not need a complicated formula. These four steps can help you examine almost any claim, problem, or decision."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {thinkingSteps.map((step) => {
            const Icon = step.icon;

            return (
              <article
                key={step.number}
                className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                    <Icon size={23} />
                  </div>

                  <span className="text-3xl font-bold text-blue-100">
                    {step.number}
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-bold text-slate-900">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {step.description}
                </p>

                <div className="mt-5 rounded-xl bg-blue-50 px-4 py-3">
                  <p className="text-xs font-bold uppercase tracking-wider text-blue-700">
                    Ask yourself
                  </p>

                  <p className="mt-1 font-bold text-blue-950">
                    {step.question}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-2 text-sm font-bold text-blue-800">
          <span className="rounded-lg bg-blue-100 px-3 py-2">
            Question
          </span>

          <ArrowRight size={16} />

          <span className="rounded-lg bg-blue-100 px-3 py-2">
            Evidence
          </span>

          <ArrowRight size={16} />

          <span className="rounded-lg bg-blue-100 px-3 py-2">
            Alternatives
          </span>

          <ArrowRight size={16} />

          <span className="rounded-lg bg-blue-100 px-3 py-2">
            Conclusion
          </span>
        </div>
      </section>

      {/* INTERACTIVE SCENARIO */}
      <section className="bg-gradient-to-br from-indigo-50 via-blue-50 to-white py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">
              <Brain size={27} />
            </div>

            <p className="text-sm font-bold uppercase tracking-wider text-blue-700">
              Try it yourself
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-950 sm:text-4xl">
              Would You Believe This Claim?
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              Imagine someone tells you that a particular share is
              guaranteed to rise by 20% next month. They say they have
              inside information and encourage you to invest immediately.
            </p>
          </div>

          <div className="rounded-2xl border border-blue-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="rounded-xl bg-amber-50 p-5">
              <p className="text-sm font-bold uppercase tracking-wider text-amber-800">
                The claim
              </p>

              <p className="mt-2 text-lg font-bold leading-8 text-slate-900">
                "This share will definitely increase by 20% next month.
                You should buy it now before the opportunity disappears."
              </p>
            </div>

            <h3 className="mt-7 text-lg font-bold text-slate-900">
              What would a critical thinker do?
            </h3>

            <div className="mt-4 space-y-3">
              {[
                {
                  title:
                    "Invest immediately because the person sounds confident.",
                  correct: false,
                },
                {
                  title:
                    "Ask for evidence and independently research the claim.",
                  correct: true,
                },
                {
                  title:
                    "Invest because other people are also buying the share.",
                  correct: false,
                },
                {
                  title:
                    "Ignore every investment opportunity without examination.",
                  correct: false,
                },
              ].map((option, index) => (
                <details
                  key={option.title}
                  className="group rounded-xl border border-slate-200 bg-white open:border-blue-300 open:bg-blue-50/50"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-3 p-4">
                    <span className="flex items-start gap-3 text-sm font-semibold leading-6 text-slate-800">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-xs font-bold text-slate-600">
                        {String.fromCharCode(65 + index)}
                      </span>

                      {option.title}
                    </span>

                    <ChevronRight
                      size={18}
                      className="shrink-0 text-slate-400 transition group-open:rotate-90"
                    />
                  </summary>

                  <div className="border-t border-slate-200 px-4 py-4">
                    {option.correct ? (
                      <div className="flex items-start gap-3">
                        <CheckCircle2
                          className="mt-0.5 shrink-0 text-emerald-600"
                          size={19}
                        />

                        <p className="text-sm leading-7 text-slate-700">
                          <span className="font-bold text-emerald-700">
                            Best approach.{" "}
                          </span>
                          A critical thinker looks for reliable evidence,
                          examines the company's performance and risks,
                          and does not treat a prediction as a guarantee.
                        </p>
                      </div>
                    ) : (
                      <div className="flex items-start gap-3">
                        <AlertCircle
                          className="mt-0.5 shrink-0 text-amber-600"
                          size={19}
                        />

                        <p className="text-sm leading-7 text-slate-700">
                          This response does not properly evaluate the
                          claim. Confidence, popularity, and fear of
                          missing out are not substitutes for evidence.
                          Rejecting everything automatically is also
                          not critical thinking.
                        </p>
                      </div>
                    )}
                  </div>
                </details>
              ))}
            </div>

            <p className="mt-6 text-sm leading-7 text-slate-500">
              Remember: critical thinking does not guarantee that every
              decision will be correct. It helps you make decisions using
              better reasoning and available evidence.
            </p>
          </div>
        </div>
      </section>

      {/* APPLICATIONS */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Where it matters"
          title="Why Is Critical Thinking Important?"
          description="Critical thinking is useful wherever people need to understand information, solve problems, or make decisions."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {applications.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-700">
                  <Icon size={22} />
                </div>

                <h3 className="font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </section>
<AdSlot />
      {/* SELF-CHECK CHECKLIST */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Personal reflection"
            title="A Simple Critical Thinking Checklist"
            description="Before accepting information or making an important decision, use these questions to examine your own thinking."
          />

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="space-y-4">
              {checklist.map((item, index) => (
                <label
                  key={item}
                  className="flex cursor-pointer items-start gap-3 rounded-xl border border-slate-100 p-4 transition hover:bg-blue-50"
                >
                  <input
                    type="checkbox"
                    className="mt-1 h-4 w-4 shrink-0 accent-blue-600"
                  />

                  <span className="text-sm leading-7 text-slate-700">
                    <span className="mr-2 font-bold text-blue-700">
                      {index + 1}.
                    </span>
                    {item}
                  </span>
                </label>
              ))}
            </div>

            <p className="mt-6 text-sm leading-7 text-slate-500">
              You do not need to have every answer immediately. The purpose
              is to slow down, examine your reasoning, and make a more
              informed judgment.
            </p>
          </div>
        </div>
      </section>

      {/* CONCLUSION */}
      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-blue-200 bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-7 sm:p-10">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
              <Brain size={25} />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-950">
                The Real Value of Critical Thinking
              </h2>

              <p className="mt-4 leading-8 text-slate-700">
                Every day, we encounter information, opinions, promises,
                advertisements, and decisions. We cannot control everything
                we hear or experience, but we can improve how we respond
                to it.
              </p>

              <p className="mt-3 leading-8 text-slate-700">
                Critical thinking helps us move beyond immediate reactions.
                It encourages us to question, investigate, understand
                different possibilities, and make decisions based on
                reason rather than assumption alone.
              </p>

              <p className="mt-4 font-bold text-blue-900">
                Think carefully. Examine the evidence. Be willing to
                reconsider.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-4 pb-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Common questions"
          title="Frequently Asked Questions"
          description="Quick answers to common questions about critical thinking."
        />

        <div className="space-y-3">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-xl border border-slate-200 bg-white p-5 open:border-blue-200 open:bg-blue-50/40"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-slate-900">
                {faq.question}

                <ChevronRight
                  size={19}
                  className="shrink-0 text-blue-600 transition group-open:rotate-90"
                />
              </summary>

              <p className="mt-4 border-t border-slate-200 pt-4 text-sm leading-7 text-slate-600">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
}
