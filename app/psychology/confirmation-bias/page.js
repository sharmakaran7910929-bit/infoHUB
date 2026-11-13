
import {
  Brain,
  Eye,
  Search,
  MessageCircle,
  Smartphone,
  ShoppingCart,
  TrendingUp,
  Users,
  Lightbulb,
  ShieldCheck,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  ArrowRight,
  RefreshCw,
  BookOpen,
  Target,
  Scale,
  HelpCircle,
  GraduationCap,
  BriefcaseBusiness,
  Filter,
  ScanEye,
  CircleCheck,
  CircleX,
  GitBranch,
  Lightbulb as Idea,
} from "lucide-react";
import AdSlot from "../../../components/AdSlot";

export const metadata = {
  title: "Confirmation Bias | Meaning, Examples and How It Affects Thinking | PriceTag HUB",
  description:
    "Understand confirmation bias through everyday examples, visual diagrams, and practical situations. Learn why people favour information that supports existing beliefs and how to think more objectively.",
};

const examples = [
  {
    icon: Smartphone,
    title: "Social Media and WhatsApp",
    situation:
      "You believe a particular health claim is true. You notice posts supporting it, share those posts, and ignore information that challenges it.",
    lesson:
      "Repeatedly seeing the same opinion can make it feel more convincing, even when the evidence is weak.",
  },
  {
    icon: MessageCircle,
    title: "Arguments and Relationships",
    situation:
      "You think someone is always rude to you. When they speak briefly, you interpret it as another sign of disrespect, but overlook the times they behave kindly.",
    lesson:
      "An existing belief can influence how you interpret another person's behaviour.",
  },
  {
    icon: ShoppingCart,
    title: "Shopping Decisions",
    situation:
      "You have decided to buy a particular phone. You search for positive reviews, focus on its advantages, and dismiss negative reviews as exaggerated.",
    lesson:
      "Sometimes we search for reasons to justify a decision we have already made.",
  },
  {
    icon: TrendingUp,
    title: "Investing and Trading",
    situation:
      "You buy a share because you expect its price to rise. You pay attention to positive news but ignore falling sales, weak financial results, or warning signs.",
    lesson:
      "Confirmation bias can make investors hold onto an opinion even when new evidence suggests they should reconsider it.",
  },
];

const strategies = [
  {
    icon: Search,
    title: "Look for opposing evidence",
    description:
      "Ask what evidence could prove your opinion wrong instead of searching only for reasons you are right.",
  },
  {
    icon: Scale,
    title: "Compare both sides",
    description:
      "Give supporting and opposing information a fair chance before reaching a conclusion.",
  },
  {
    icon: ShieldCheck,
    title: "Check information quality",
    description:
      "Examine the original source, evidence, date, and reliability instead of judging information by whether it agrees with you.",
  },
  {
    icon: Users,
    title: "Listen to different viewpoints",
    description:
      "Try to understand people with different perspectives before rejecting their reasoning.",
  },
  {
    icon: RefreshCw,
    title: "Be willing to change your mind",
    description:
      "Changing your opinion when stronger evidence appears is a sign of learning, not weakness.",
  },
];

const faqs = [
  {
    question: "What is confirmation bias in simple words?",
    answer:
      "Confirmation bias is the tendency to favour information that supports what we already believe while giving less attention to information that challenges those beliefs.",
  },
  {
    question: "Why do people experience confirmation bias?",
    answer:
      "Existing beliefs and expectations can influence how people notice, interpret, and remember new information. Supporting information may feel more familiar or convincing than conflicting information.",
  },
  {
    question: "Is confirmation bias always intentional?",
    answer:
      "No. It often happens unconsciously. A person may genuinely believe they are evaluating information fairly while overlooking evidence that challenges their opinion.",
  },
  {
    question: "Can intelligent people experience confirmation bias?",
    answer:
      "Yes. Intelligence, education, and experience do not automatically prevent confirmation bias. Anyone can favour information that supports an existing belief.",
  },
  {
    question: "How can I reduce confirmation bias?",
    answer:
      "Look for opposing evidence, compare reliable sources, consider alternative explanations, and remain willing to revise your conclusion when the evidence changes.",
  },
  {
    question: "What is an example of confirmation bias in investing?",
    answer:
      "An investor may focus on positive news about a company they own while ignoring negative financial results or risks. This can lead to decisions based on selective information.",
  },
];

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mb-6 max-w-3xl text-left">
      {eyebrow && (
        <p className="mb-2 text-xs font-bold uppercase tracking-wider text-blue-700">
          {eyebrow}
        </p>
      )}
      <h2 className="text-xl font-bold leading-snug tracking-tight text-slate-900 sm:text-2xl">
        {title}
      </h2>
      {description && (
        <p className="mt-2 text-sm leading-7 text-slate-600 sm:text-base">
          {description}
        </p>
      )}
    </div>
  );
}

function ExampleCard({ icon: Icon, title, situation, lesson }) {
  return (
    <article className="min-w-0 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
      <div className="mb-3 flex items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
          <Icon size={20} />
        </div>
        <h3 className="text-base font-bold leading-snug text-slate-900">
          {title}
        </h3>
      </div>

      <p className="text-sm leading-7 text-slate-600">{situation}</p>

      <div className="mt-4 rounded-xl bg-blue-50 p-3">
        <p className="text-xs font-bold uppercase tracking-wide text-blue-800">
          What is happening?
        </p>
        <p className="mt-1 text-sm leading-6 text-slate-700">{lesson}</p>
      </div>
    </article>
  );
}

function StrategyCard({ icon: Icon, title, description }) {
  return (
    <article className="flex min-w-0 gap-3 rounded-xl border border-slate-200 bg-white p-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-700">
        <Icon size={19} />
      </div>
      <div className="min-w-0">
        <h3 className="text-sm font-bold text-slate-900 sm:text-base">
          {title}
        </h3>
        <p className="mt-1 text-sm leading-6 text-slate-600">{description}</p>
      </div>
    </article>
  );
}

function ProcessStep({ icon: Icon, number, title, description }) {
  return (
    <div className="relative flex min-w-0 gap-3 rounded-xl border border-blue-100 bg-white p-4 sm:flex-col sm:items-start">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-800">
        <Icon size={21} />
      </div>
      <div className="min-w-0">
        <p className="text-xs font-bold text-blue-700">STEP {number}</p>
        <h3 className="mt-1 text-sm font-bold leading-snug text-slate-900">
          {title}
        </h3>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function ConfirmationBiasPage() {
  return (
    <main className="mx-auto w-full max-w-5xl space-y-12 px-4 pb-12 text-left sm:space-y-16 sm:px-6 lg:px-8 m-4">

      {/* Main learning overview */}
      <section className="w-full overflow-hidden rounded-2xl border border-blue-100 bg-gradient-to-br from-white via-blue-50 to-indigo-100 p-5 sm:p-7 lg:p-8">
        <div className="max-w-3xl">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-3 py-1 text-xs font-bold text-blue-800">
            <Brain size={14} />
            Psychology
          </div>

          <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-950 sm:text-3xl">
            Confirmation Bias
          </h1>

          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            Why do we notice information that agrees with us but sometimes
            ignore information that challenges us? Explore how our existing
            beliefs influence what we notice, trust, and remember.
          </p>

          <div className="mt-6">
            <h2 className="text-sm font-bold text-slate-900">
              What You Will Learn
            </h2>
            <ul className="mt-3 grid gap-2 text-sm text-slate-700 sm:grid-cols-2">
              {[
                "What confirmation bias means",
                "How it influences everyday thinking",
                "Examples from social media, shopping, and investing",
                "Why we overlook contradictory evidence",
                "Practical ways to think more objectively",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle2
                    size={17}
                    className="mt-0.5 shrink-0 text-blue-700"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Definition */}
      <section>
        <SectionHeading
          eyebrow="Understanding the concept"
          title="What Is Confirmation Bias?"
          description="The meaning of confirmation bias and how it affects the way we evaluate information."
        />

        <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
          <p className="text-sm leading-8 text-slate-700 sm:text-base">
            <strong className="text-slate-950">Confirmation bias</strong> is
            the tendency to search for, notice, interpret, and remember
            information in ways that support our existing beliefs or
            expectations, while giving less attention to information that
            contradicts them.
          </p>

          {/* Supporting vs contradictory information diagram */}
          <div className="mt-6 rounded-2xl bg-slate-50 p-4 sm:p-5">
            <h3 className="text-sm font-bold text-slate-900">
              Two ways we may respond to information
            </h3>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-green-200 bg-green-50 p-4">
                <div className="flex items-center gap-2">
                  <CircleCheck size={20} className="text-green-700" />
                  <h4 className="text-sm font-bold text-green-900">
                    Supporting information
                  </h4>
                </div>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  You notice, trust, or remember information that agrees with
                  your existing opinion.
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="rounded-full bg-white px-2 py-1 text-xs text-green-800">
                    Notice
                  </span>
                  <span className="rounded-full bg-white px-2 py-1 text-xs text-green-800">
                    Accept
                  </span>
                  <span className="rounded-full bg-white px-2 py-1 text-xs text-green-800">
                    Remember
                  </span>
                </div>
              </div>

              <div className="rounded-xl border border-orange-200 bg-orange-50 p-4">
                <div className="flex items-center gap-2">
                  <CircleX size={20} className="text-orange-700" />
                  <h4 className="text-sm font-bold text-orange-900">
                    Contradictory information
                  </h4>
                </div>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  You may overlook, question, or dismiss information that
                  challenges your existing opinion.
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="rounded-full bg-white px-2 py-1 text-xs text-orange-800">
                    Overlook
                  </span>
                  <span className="rounded-full bg-white px-2 py-1 text-xs text-orange-800">
                    Question
                  </span>
                  <span className="rounded-full bg-white px-2 py-1 text-xs text-orange-800">
                    Dismiss
                  </span>
                </div>
              </div>
            </div>
          </div>

          <p className="mt-5 text-sm leading-7 text-slate-600">
            Confirmation bias does not mean someone is deliberately lying or
            refusing to learn. It can influence thinking without the person
            being aware of it.
          </p>
        </div>
      </section>
<AdSlot />
      {/* Everyday examples */}
      <section>
        <SectionHeading
          eyebrow="Recognise it in daily life"
          title="How Does Confirmation Bias Appear in Everyday Life?"
          description="It can influence small daily choices as well as important decisions. Here are some familiar situations."
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {examples.map((example) => (
            <ExampleCard key={example.title} {...example} />
          ))}
        </div>
      </section>

      {/* Process diagram */}
      <section>
        <SectionHeading
          eyebrow="How the thinking pattern develops"
          title="How Does Confirmation Bias Work?"
          description="An existing belief can influence which information we notice and how we interpret it."
        />

        <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-blue-50/70 to-white p-4 sm:p-6">
          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-100 text-indigo-800">
              <GitBranch size={22} />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900">
                The confirmation bias cycle
              </h3>
              <p className="text-xs leading-5 text-slate-500">
                A simplified illustration of how the pattern can develop
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <ProcessStep
              number="01"
              icon={Brain}
              title="Existing belief"
              description="You begin with an opinion, expectation, or assumption."
            />
            <ProcessStep
              number="02"
              icon={Search}
              title="Selective search"
              description="You notice or search for information that supports it."
            />
            <ProcessStep
              number="03"
              icon={Filter}
              title="Selective evaluation"
              description="Contradictory information may receive less attention."
            />
            <ProcessStep
              number="04"
              icon={Target}
              title="Increased confidence"
              description="Your belief may become stronger after considering mostly supporting information."
            />
          </div>

          <div className="my-4 hidden items-center justify-center gap-2 text-xs font-semibold text-blue-700 lg:flex">
            <ArrowRight size={15} />
            The cycle can repeat when new information appears
          </div>

          <div className="rounded-xl border border-indigo-100 bg-white p-4">
            <div className="flex items-start gap-3">
              <RefreshCw size={20} className="mt-0.5 shrink-0 text-indigo-700" />
              <p className="text-sm leading-6 text-slate-700">
                <strong className="text-slate-900">The result:</strong> A
                person may become increasingly confident in an opinion
                because the information they considered was mostly
                supportive, not because they examined all available evidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why it happens */}
      <section>
        <SectionHeading
          eyebrow="The psychology behind it"
          title="Why Do We Experience Confirmation Bias?"
          description="Our existing beliefs, expectations, and habits can influence how we process new information."
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <ExampleCard
            icon={Brain}
            title="Existing beliefs"
            situation="Previous experiences and opinions can shape how we understand new information. We may interpret uncertain evidence in a way that fits what we already believe."
            lesson="Our existing beliefs can act as a filter when we evaluate new information."
          />
          <ExampleCard
            icon={Eye}
            title="Selective attention"
            situation="We cannot give equal attention to every piece of information. Our expectations can influence which details stand out."
            lesson="What we notice may not represent all the evidence available."
          />
          <ExampleCard
            icon={Target}
            title="Desire to be correct"
            situation="People may prefer information that supports their conclusions. Accepting contradictory evidence can mean reconsidering a decision."
            lesson="A strong attachment to an opinion can make it harder to evaluate alternatives."
          />
          <ExampleCard
            icon={Users}
            title="Social influence"
            situation="Friends, communities, and online groups can reinforce shared opinions. Repeated agreement may make an idea feel convincing."
            lesson="Agreement from others is not a substitute for checking evidence independently."
          />
        </div>
      </section>
<AdSlot />
      {/* Consequences */}
      <section>
        <SectionHeading
          eyebrow="Why it matters"
          title="How Can Confirmation Bias Affect Our Decisions?"
          description="When we consider only part of the available evidence, our conclusions and decisions can become less reliable."
        />

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {[
            {
              icon: GraduationCap,
              title: "Education",
              text: "A student may focus only on explanations that match their existing understanding instead of examining where their reasoning is incorrect.",
            },
            {
              icon: BriefcaseBusiness,
              title: "Work and Business",
              text: "A business owner may focus on positive customer feedback while overlooking repeated complaints or warning signs.",
            },
            {
              icon: TrendingUp,
              title: "Financial Decisions",
              text: "An investor may give more importance to favourable news about an investment while ignoring evidence of risk.",
            },
            {
              icon: Users,
              title: "Relationships",
              text: "A person may interpret someone's actions according to an existing impression instead of considering the full situation.",
            },
          ].map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              className="flex min-w-0 gap-3 rounded-xl border border-slate-200 bg-white p-4 sm:p-5"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                <Icon size={20} />
              </div>
              <div className="min-w-0">
                <h3 className="text-sm font-bold text-slate-900 sm:text-base">
                  {title}
                </h3>
                <p className="mt-1 text-sm leading-6 text-slate-600">{text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Misconceptions */}
      <section>
        <SectionHeading
          eyebrow="Clear up the confusion"
          title="Common Misunderstandings About Confirmation Bias"
          description="Understanding what confirmation bias does and does not mean helps us recognise it accurately."
        />

        <div className="space-y-3">
          {[
            {
              wrong: "Only uneducated people experience confirmation bias.",
              correct:
                "People of every education level and background can experience it.",
            },
            {
              wrong: "It happens only when someone intentionally ignores facts.",
              correct:
                "It can occur unconsciously, even when someone genuinely wants to be objective.",
            },
            {
              wrong: "Every disagreement is confirmation bias.",
              correct:
                "People can disagree because they have different evidence, experiences, or interpretations. Disagreement alone does not prove bias.",
            },
            {
              wrong: "Avoiding confirmation bias means never trusting your own opinion.",
              correct:
                "It means evaluating your opinion fairly and remaining open to better evidence.",
            },
          ].map((item) => (
            <div
              key={item.wrong}
              className="rounded-xl border border-slate-200 bg-white p-4 sm:p-5"
            >
              <div className="flex items-start gap-2">
                <XCircle size={18} className="mt-0.5 shrink-0 text-red-600" />
                <p className="text-sm font-semibold leading-6 text-slate-800">
                  {item.wrong}
                </p>
              </div>
              <div className="mt-3 flex items-start gap-2">
                <CheckCircle2
                  size={18}
                  className="mt-0.5 shrink-0 text-green-700"
                />
                <p className="text-sm leading-6 text-slate-600">
                  {item.correct}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Strategies */}
      <section>
        <SectionHeading
          eyebrow="Build better thinking habits"
          title="How Can You Reduce Confirmation Bias?"
          description="You may not eliminate every bias, but you can build habits that help you examine information more fairly."
        />

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {strategies.map((strategy) => (
            <StrategyCard key={strategy.title} {...strategy} />
          ))}
        </div>

        <div className="mt-4 rounded-2xl border border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50 p-5 sm:p-6">
          <div className="flex items-start gap-3">
            <Lightbulb size={23} className="mt-0.5 shrink-0 text-blue-700" />
            <div>
              <h3 className="text-base font-bold text-slate-900">
                A useful question to ask yourself
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-700">
                "If I did not already believe this, would I still find the
                evidence convincing?"
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                This question encourages you to evaluate the evidence
                separately from your existing opinion.
              </p>
            </div>
          </div>
        </div>
      </section>
<AdSlot />
      {/* Interactive scenario */}
      <section>
        <SectionHeading
          eyebrow="Test your understanding"
          title="Can You Recognise Confirmation Bias?"
          description="Read this situation and consider which response demonstrates confirmation bias."
        />

        <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-700">
              <TrendingUp size={20} />
            </div>
            <h3 className="text-base font-bold text-slate-900">
              The Investment Situation
            </h3>
          </div>

          <p className="text-sm leading-7 text-slate-700">
            Ravi buys shares in a company because he believes it has a strong
            future. Later, the company reports falling sales and increasing
            debt. However, Ravi continues reading positive online opinions
            about the company and dismisses the financial results.
          </p>

          <div className="mt-5 space-y-3">
            <details className="group rounded-xl border border-slate-200 p-4">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-3 text-sm font-semibold text-slate-800">
                <span>A. Ravi compares positive and negative financial evidence.</span>
                <span className="shrink-0 text-blue-700">+</span>
              </summary>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                This is a more balanced approach. He is considering
                information that supports and challenges his belief.
              </p>
            </details>

            <details className="group rounded-xl border border-blue-200 bg-blue-50/60 p-4">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-3 text-sm font-semibold text-slate-900">
                <span>B. Ravi focuses on positive opinions and dismisses negative financial results.</span>
                <span className="shrink-0 text-blue-700">+</span>
              </summary>
              <div className="mt-3 flex items-start gap-2">
                <CheckCircle2
                  size={18}
                  className="mt-0.5 shrink-0 text-green-700"
                />
                <p className="text-sm leading-6 text-slate-700">
                  <strong>Correct: This demonstrates confirmation bias.</strong>{" "}
                  Ravi gives more attention to information that supports his
                  existing belief and less attention to contradictory evidence.
                </p>
              </div>
            </details>

            <details className="group rounded-xl border border-slate-200 p-4">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-3 text-sm font-semibold text-slate-800">
                <span>C. Ravi reviews the company's performance and changes his opinion if necessary.</span>
                <span className="shrink-0 text-blue-700">+</span>
              </summary>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                This demonstrates openness to new evidence rather than
                confirmation bias.
              </p>
            </details>
          </div>

          <p className="mt-4 text-xs leading-5 text-slate-500">
            This is an educational example, not investment advice.
          </p>
        </div>
      </section>

      {/* Self reflection */}
      <section>
        <SectionHeading
          eyebrow="Apply it to yourself"
          title="A Quick Self-Reflection"
          description="Think about your own information habits. These questions can help you notice when an existing opinion may be influencing your judgement."
        />

        <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
          <div className="space-y-4">
            {[
              "Do I search for information that supports what I already believe?",
              "Do I dismiss opposing opinions without examining their evidence?",
              "Do I trust a source more when it agrees with my viewpoint?",
              "Can I accept that my earlier conclusion might be incorrect?",
              "Do I check multiple reliable sources before making an important decision?",
            ].map((question) => (
              <label
                key={question}
                className="flex cursor-pointer items-start gap-3"
              >
                <input
                  type="checkbox"
                  className="mt-1 h-4 w-4 shrink-0 accent-blue-700"
                />
                <span className="text-sm leading-6 text-slate-700">
                  {question}
                </span>
              </label>
            ))}
          </div>

          <div className="mt-5 rounded-xl bg-blue-50 p-4">
            <p className="text-sm leading-6 text-slate-700">
              <strong className="text-slate-900">Remember:</strong> This is
              not a psychological test or diagnosis. It is an opportunity
              to reflect on your thinking habits.
            </p>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-5 sm:p-7">
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-800">
            <BookOpen size={21} />
          </div>
          <div className="min-w-0">
            <h2 className="text-lg font-bold leading-snug text-slate-900 sm:text-xl">
              The Key Takeaway
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700">
              Confirmation bias reminds us that what we believe can influence
              what we notice and how we interpret information. We may feel
              confident in a conclusion without having considered all sides
              of the evidence.
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-700">
              Better thinking does not mean always being right. It means
              remaining curious, questioning assumptions, and being willing
              to change our minds when stronger evidence appears.
            </p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section>
        <SectionHeading
          eyebrow="Frequently asked questions"
          title="Confirmation Bias FAQs"
          description="Quick answers to common questions about confirmation bias."
        />

        <div className="space-y-3">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-xl border border-slate-200 bg-white p-4 sm:p-5"
            >
              <summary className="flex cursor-pointer list-none items-start justify-between gap-3 text-sm font-bold leading-6 text-slate-900">
                <span>{faq.question}</span>
                <HelpCircle
                  size={18}
                  className="mt-0.5 shrink-0 text-blue-700"
                />
              </summary>
              <p className="mt-3 border-t border-slate-100 pt-3 text-sm leading-7 text-slate-600">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
}
