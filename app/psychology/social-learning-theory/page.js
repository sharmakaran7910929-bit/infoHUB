
import {
  Brain,
  Eye,
  Users,
  Lightbulb,
  BookOpen,
  GraduationCap,
  Heart,
  MessageCircle,
  Repeat,
  Target,
  ShieldCheck,
  AlertTriangle,
  CheckCircle2,
  ArrowRight,
  UserRound,
  Play,
  ClipboardList,
  Home,
  BriefcaseBusiness,
  Network,
  Sparkles,TrendingUp ,
  Search,
  Scale,
  Lightbulb as Idea,
} from "lucide-react";
import AdSlot from "../../../components/AdSlot";

export const metadata = {
  title: "Social Learning Theory – Albert Bandura Explained | PriceTag HUB",
  description:
    "Understand Albert Bandura's Social Learning Theory, observational learning, modelling, imitation, reinforcement and the Bobo doll experiment with relatable everyday examples and applications.",
};

const learningSteps = [
  {
    number: "01",
    title: "Attention",
    subtitle: "Noticing the behaviour",
    icon: Eye,
    color: "text-blue-700",
    bg: "bg-blue-100",
    description:
      "A person must first pay attention to the behaviour being demonstrated. People are more likely to notice behaviours performed by individuals they admire, trust, respect or consider important.",
    example:
      "A student watches a teacher carefully demonstrate how to solve a mathematics problem because the student wants to learn the method.",
  },
  {
    number: "02",
    title: "Retention",
    subtitle: "Remembering what was observed",
    icon: Brain,
    color: "text-violet-700",
    bg: "bg-violet-100",
    description:
      "The observed behaviour must be remembered. People may store what they see in the form of mental images, verbal descriptions or an understanding of the steps involved.",
    example:
      "After watching the teacher, the student remembers the order of the steps used to solve the problem.",
  },
  {
    number: "03",
    title: "Reproduction",
    subtitle: "Being able to perform the behaviour",
    icon: Repeat,
    color: "text-emerald-700",
    bg: "bg-emerald-100",
    description:
      "The learner must have the physical or mental ability to reproduce the observed behaviour. Remembering an action does not automatically mean someone can perform it successfully.",
    example:
      "The student tries to solve a similar mathematics problem using the remembered method.",
  },
  {
    number: "04",
    title: "Motivation",
    subtitle: "Having a reason to perform it",
    icon: Target,
    color: "text-amber-700",
    bg: "bg-amber-100",
    description:
      "The learner needs a reason or motivation to perform the behaviour. Expected rewards, personal goals, observed consequences and interest can influence whether the behaviour is demonstrated.",
    example:
      "When the student sees that practising the method improves their results, they become more motivated to use it again.",
  },
];

const influences = [
  {
    title: "Attention and Visibility",
    icon: Eye,
    description:
      "People are more likely to observe behaviours that attract their attention. A behaviour may be noticed because it is interesting, unusual, repeated or demonstrated clearly.",
    example:
      "A child notices how an older sibling speaks politely to guests because the interaction attracts their attention.",
  },
  {
    title: "Characteristics of the Model",
    icon: UserRound,
    description:
      "The person being observed is called a model. People may be more likely to learn from models they admire, identify with, trust or consider knowledgeable.",
    example:
      "A student may adopt the study habits of a senior student who performs well academically.",
  },
  {
    title: "Expected Consequences",
    icon: Scale,
    description:
      "People consider what might happen if they perform a particular behaviour. Expected rewards or negative consequences can influence their motivation.",
    example:
      "An employee may follow a colleague's professional communication style after seeing that it helps build positive relationships at work.",
  },
  {
    title: "Personal Ability",
    icon: Target,
    description:
      "A learner's existing skills and physical or mental abilities influence whether they can reproduce an observed action.",
    example:
      "Watching someone play a musical instrument may teach a beginner what to do, but developing the ability requires practice.",
  },
];

const examples = [
  {
    title: "Learning Manners at Home",
    icon: Home,
    context: "Family and Childhood",
    description:
      "A young child regularly observes parents greeting relatives politely, saying thank you and helping guests. Over time, the child may begin using similar expressions and behaviours.",
    concept: "Observational Learning and Modelling",
    color: "bg-rose-50 border-rose-200 text-rose-700",
  },
  {
    title: "Developing Study Habits",
    icon: GraduationCap,
    context: "Student Life",
    description:
      "A student notices that a classmate prepares notes, revises regularly and completes assignments before deadlines. The student starts following a similar routine after seeing its benefits.",
    concept: "Modelling and Vicarious Reinforcement",
    color: "bg-blue-50 border-blue-200 text-blue-700",
  },
  {
    title: "Learning Communication Skills",
    icon: MessageCircle,
    context: "Friendships",
    description:
      "Someone observes a friend handling disagreements calmly, listening without interrupting and expressing opinions respectfully. They may begin using the same communication approach.",
    concept: "Observational Learning",
    color: "bg-violet-50 border-violet-200 text-violet-700",
  },
  {
    title: "Learning Workplace Behaviour",
    icon: BriefcaseBusiness,
    context: "Professional Life",
    description:
      "A new employee watches experienced colleagues communicate with customers, manage responsibilities and handle difficult situations. The employee gradually adopts effective workplace practices.",
    concept: "Modelling",
    color: "bg-emerald-50 border-emerald-200 text-emerald-700",
  },
  {
    title: "Copying Behaviour on Social Media",
    icon: Play,
    context: "Digital Environment",
    description:
      "A teenager repeatedly watches online creators demonstrating a particular fashion style, language or behaviour. They may imitate these actions because they admire the creators or see others responding positively.",
    concept: "Media Modelling and Observational Learning",
    color: "bg-amber-50 border-amber-200 text-amber-700",
  },
  {
    title: "Learning Through Sports",
    icon: Target,
    context: "Sports and Activities",
    description:
      "A beginner watches an experienced player demonstrate the correct way to hold a racket, position their feet and hit a ball. They then practise those movements.",
    concept: "Attention, Retention and Reproduction",
    color: "bg-orange-50 border-orange-200 text-orange-700",
  },
];

const applications = [
  {
    title: "Education",
    icon: GraduationCap,
    description:
      "Teachers can demonstrate problem-solving methods, communication skills and positive classroom behaviour. Students can learn by observing demonstrations, classmates and other role models.",
    example:
      "A teacher demonstrates how to solve a science problem step by step before asking students to complete a similar problem independently.",
  },
  {
    title: "Parenting and Family",
    icon: Home,
    description:
      "Children observe and learn from the everyday behaviour of parents, siblings and other family members. Adults can encourage positive habits by demonstrating them consistently.",
    example:
      "Parents who regularly read books may encourage children to develop an interest in reading through everyday modelling.",
  },
  {
    title: "Workplace Training",
    icon: BriefcaseBusiness,
    description:
      "New employees can learn professional skills by observing experienced workers, watching demonstrations and practising the behaviours they have seen.",
    example:
      "A new customer-service employee watches an experienced colleague handle a customer complaint before practising the same process.",
  },
  {
    title: "Media and Advertising",
    icon: Play,
    description:
      "Television, films, online videos and social media expose people to different behaviours, lifestyles and social expectations. These can influence what people notice, imitate or consider desirable.",
    example:
      "An advertisement may show a person using a product in a particular situation, encouraging viewers to associate that behaviour with a desired outcome.",
  },
  {
    title: "Health and Behaviour",
    icon: Heart,
    description:
      "Observing others can influence habits related to exercise, eating, personal safety and other health behaviours.",
    example:
      "Someone may become interested in regular exercise after observing a friend follow a consistent fitness routine.",
  },
  {
    title: "Social Skills Development",
    icon: Users,
    description:
      "People can learn cooperation, empathy, conflict resolution and other social behaviours by observing interactions and practising similar responses.",
    example:
      "A child learns to take turns during group activities after watching other children share materials and cooperate.",
  },
];

const misconceptions = [
  {
    myth: "Social Learning Theory means people simply copy everything they see.",
    fact:
      "People do not automatically imitate every observed behaviour. Attention, memory, ability, motivation and expected consequences all influence whether a behaviour is reproduced.",
  },
  {
    myth: "Learning and imitation are exactly the same.",
    fact:
      "Imitation is one way learning can occur. A person may also learn something by observing and remembering it without immediately performing the behaviour.",
  },
  {
    myth: "Rewards are necessary for all learning.",
    fact:
      "People can learn by observing others even when they do not receive a direct reward themselves. However, consequences can influence whether they perform what they have learned.",
  },
  {
    myth: "Children are the only people who learn through observation.",
    fact:
      "Observational learning occurs throughout life. Adults also learn professional skills, social behaviours and practical activities by watching others.",
  },
  {
    myth: "Social Learning Theory says the environment completely controls behaviour.",
    fact:
      "Bandura emphasized the interaction between personal factors, behaviour and the environment. People are not simply passive products of their surroundings.",
  },
];

const faqs = [
  {
    question: "What is Social Learning Theory?",
    answer:
      "Social Learning Theory explains that people can learn behaviours, skills and attitudes by observing others and the consequences of their actions. It is especially associated with psychologist Albert Bandura.",
  },
  {
    question: "Who developed Social Learning Theory?",
    answer:
      "Psychologist Albert Bandura developed Social Learning Theory through research on observational learning, modelling and imitation. His work became particularly influential during the 1960s and 1970s.",
  },
  {
    question: "What are the four processes of observational learning?",
    answer:
      "The four processes are attention, retention, reproduction and motivation. They explain how a person notices a behaviour, remembers it, develops the ability to perform it and becomes motivated to reproduce it.",
  },
  {
    question: "What is observational learning?",
    answer:
      "Observational learning occurs when someone learns by watching another person's behaviour and its consequences. The learner may remember the behaviour without immediately performing it.",
  },
  {
    question: "What is modelling in psychology?",
    answer:
      "Modelling is the process through which a person demonstrates a behaviour that another individual can observe and potentially learn. The person demonstrating the behaviour is called a model.",
  },
  {
    question: "What was the Bobo doll experiment?",
    answer:
      "The Bobo doll experiment was a series of studies led by Albert Bandura and colleagues. Children who observed an adult behaving aggressively towards an inflatable doll were more likely to demonstrate similar aggressive actions in a later play situation.",
  },
  {
    question: "What is vicarious reinforcement?",
    answer:
      "Vicarious reinforcement occurs when someone observes another person receiving a reward for a behaviour. Seeing the positive consequence can increase the observer's motivation to perform a similar behaviour.",
  },
  {
    question: "What is the difference between Social Learning Theory and Operant Conditioning?",
    answer:
      "Operant conditioning focuses on how direct consequences such as reinforcement and punishment influence behaviour. Social Learning Theory also emphasizes learning through observing other people and the consequences they experience.",
  },
  {
    question: "Can people learn without performing a behaviour?",
    answer:
      "Yes. A person may observe, understand and remember a behaviour without immediately demonstrating it. Learning and performance are related but are not identical.",
  },
  {
    question: "Is Social Learning Theory still relevant?",
    answer:
      "Yes. Its ideas remain relevant to education, parenting, workplace training, social behaviour and media influence. The theory is also an important foundation for understanding how people learn from digital environments.",
  },
];

function SectionHeading({ eyebrow, title, description, icon: Icon }) {
  return (
    <div className="mb-8">
      {eyebrow && (
        <p className="mb-2 text-sm font-bold uppercase tracking-wider text-indigo-600">
          {eyebrow}
        </p>
      )}
      <div className="flex items-start gap-3">
        {Icon && (
          <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-100 text-indigo-700">
            <Icon size={21} />
          </div>
        )}
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
            {title}
          </h2>
          {description && (
            <p className="mt-3 max-w-4xl text-base leading-8 text-slate-600">
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

function ProcessCard({ item }) {
  const Icon = item.icon;

  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between gap-3">
        <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${item.bg} ${item.color}`}>
          <Icon size={24} />
        </div>
        <span className="text-2xl font-bold text-slate-200">
          {item.number}
        </span>
      </div>

      <h3 className="mt-5 text-lg font-bold text-slate-950">
        {item.title}
      </h3>
      <p className="mt-1 text-sm font-bold text-indigo-600">
        {item.subtitle}
      </p>
      <p className="mt-4 text-sm leading-7 text-slate-600">
        {item.description}
      </p>

      <div className="mt-4 rounded-xl bg-slate-50 p-4">
        <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
          Example
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700">
          {item.example}
        </p>
      </div>
    </article>
  );
}

export default function SocialLearningTheoryPage() {
  return (
    <main className="mx-auto w-full max-w-6xl space-y-16 px-4 pb-20 sm:px-6 lg:px-8 m-4">

      {/* Hero */}
    <section className="overflow-hidden rounded-3xl border border-indigo-100 bg-gradient-to-br from-indigo-50 via-white to-blue-50 p-6 sm:p-10 lg:p-12">
  <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,1fr)_300px]">

    {/* Hero Content */}
    <div className="max-w-4xl">
      <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white px-4 py-2 text-sm font-bold text-indigo-700">
        <Brain size={17} />
        Learning Psychology
      </span>

      <h1 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
        Social Learning Theory: How People Learn by Observing Others
      </h1>

      <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
        Have you ever learned a new skill by watching someone else?
        Perhaps you picked up a habit from your parents, learned a
        classroom technique from a classmate or adopted a communication
        style after observing a friend. These are examples of how people
        can learn by observing others.
      </p>

      <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">
        Developed by psychologist Albert Bandura, Social Learning Theory
        explains how observation, imitation, modelling and the
        consequences experienced by others influence learning and
        behaviour.
      </p>

      <div className="mt-7 flex flex-wrap gap-3">
        <a
          href="#how-it-works"
          className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 font-bold text-white transition hover:bg-indigo-700"
        >
          Understand the Theory <ArrowRight size={18} />
        </a>

        <a
          href="#bobo-experiment"
          className="rounded-xl border border-indigo-200 bg-white px-5 py-3 font-bold text-indigo-700 transition hover:bg-indigo-50"
        >
          Explore the Experiment
        </a>
      </div>

      <div className="mt-9 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {[
          { icon: Eye, title: "Observation" },
          { icon: UserRound, title: "Modelling" },
          { icon: Repeat, title: "Imitation" },
          { icon: Target, title: "Motivation" },
        ].map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              className="rounded-2xl border border-indigo-100 bg-white p-4"
            >
              <Icon size={23} className="text-indigo-700" />
              <p className="mt-3 text-sm font-bold text-slate-800">
                {item.title}
              </p>
            </div>
          );
        })}
      </div>
    </div>

    {/* Simple Icon-Based Visual */}
    <div className="relative mx-auto flex aspect-square w-full max-w-[280px] items-center justify-center">

      <div className="absolute h-64 w-64 rounded-full bg-indigo-200/40 blur-3xl" />

      <div className="absolute h-60 w-60 rounded-full border border-indigo-200/70" />
      <div className="absolute h-44 w-44 rounded-full border border-dashed border-violet-300" />

      {/* Central Brain */}
      <div className="relative z-10 flex h-32 w-32 items-center justify-center rounded-[2rem] bg-gradient-to-br from-indigo-500 to-violet-600 text-white shadow-xl shadow-indigo-300/50">
        <Brain size={68} strokeWidth={1.5} />
      </div>

      {/* Surrounding Icons */}
      <div className="absolute left-0 top-9 flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-100 bg-white text-blue-600 shadow-lg">
        <Eye size={27} />
      </div>

      <div className="absolute right-0 top-9 flex h-14 w-14 items-center justify-center rounded-2xl border border-violet-100 bg-white text-violet-600 shadow-lg">
        <Users size={27} />
      </div>

      <div className="absolute bottom-10 left-1 flex h-14 w-14 items-center justify-center rounded-2xl border border-pink-100 bg-white text-pink-600 shadow-lg">
        <MessageCircle size={26} />
      </div>

      <div className="absolute bottom-10 right-1 flex h-14 w-14 items-center justify-center rounded-2xl border border-amber-100 bg-white text-amber-600 shadow-lg">
        <Lightbulb size={27} />
      </div>

      {/* Decorative Details */}
      <Sparkles className="absolute right-10 top-0 text-violet-400" size={20} />
      <span className="absolute bottom-3 left-16 h-2.5 w-2.5 rounded-full bg-indigo-300" />
      <span className="absolute right-12 bottom-1 h-2 w-2 rounded-full bg-pink-300" />

      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-indigo-100 bg-white px-4 py-2 text-xs font-bold text-indigo-700 shadow-sm">
        Learning Through Observation
      </div>
    </div>

  </div>
</section>
      {/* Introduction */}
      <section>
        <SectionHeading
          eyebrow="Understanding the Concept"
          title="What Is Social Learning Theory?"
          description="Social Learning Theory is a psychological explanation of how people acquire new behaviours, skills and attitudes by observing other individuals and the consequences of their actions."
          icon={Brain}
        />

        <div className="space-y-5 text-base leading-8 text-slate-700">
          <p>
            Traditional explanations of learning often focus on what happens
            when an individual personally performs an action and experiences
            a reward or punishment. However, people can also learn without
            directly experiencing every consequence themselves.
          </p>

          <p>
            Imagine a child watching an older sibling ride a bicycle. The
            child observes how the sibling balances, holds the handlebar,
            pedals and turns. After watching several times, the child may
            attempt to perform the same actions.
          </p>

          <p>
            The child has learned partly through observation. The sibling
            acts as a model, and the child uses the observed behaviour as a
            guide for their own actions.
          </p>
        </div>

        <div className="mt-7 grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl border border-indigo-100 bg-indigo-50 p-6">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-indigo-700">
              <Eye size={23} />
            </div>
            <h3 className="mt-4 font-bold text-slate-950">
              Learning Through Observation
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-700">
              People watch how others behave, notice what happens afterwards
              and may learn from those experiences.
            </p>
          </div>

          <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-blue-700">
              <Users size={23} />
            </div>
            <h3 className="mt-4 font-bold text-slate-950">
              Learning Through Social Interaction
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-700">
              Parents, teachers, friends, colleagues, public figures and
              online creators can all act as models whose behaviour others
              may observe.
            </p>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5">
          <p className="flex items-center gap-2 font-bold text-amber-900">
            <Lightbulb size={19} />
            The Central Idea
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700">
            People do not always need to experience a reward or punishment
            directly to learn. They can also learn by observing what happens
            to other people.
          </p>
        </div>
      </section>
<AdSlot />
      {/* How it works */}
      <section id="how-it-works" className="scroll-mt-8">
        <SectionHeading
          eyebrow="Core Learning Process"
          title="How Does Social Learning Take Place?"
          description="Bandura explained observational learning through four important processes: attention, retention, reproduction and motivation. Together, they describe how observed behaviour can become something a learner understands and eventually performs."
          icon={Network}
        />

        <div className="grid gap-5 sm:grid-cols-2">
          {learningSteps.map((item) => (
            <ProcessCard key={item.number} item={item} />
          ))}
        </div>

        <div className="mt-7 rounded-3xl border border-indigo-100 bg-indigo-50 p-6 sm:p-8">
          <h3 className="text-lg font-bold text-slate-950">
            Visual Flow of Observational Learning
          </h3>
          <p className="mt-2 text-sm leading-7 text-slate-600">
            A learner moves through several mental and behavioural processes
            before reproducing an observed action.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-4">
            {learningSteps.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={item.number} className="relative">
                  <div className="rounded-2xl border border-white bg-white p-4 text-center shadow-sm">
                    <div className={`mx-auto flex h-12 w-12 items-center justify-center rounded-xl ${item.bg} ${item.color}`}>
                      <Icon size={24} />
                    </div>
                    <p className="mt-3 font-bold text-slate-950">
                      {item.title}
                    </p>
                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      {item.subtitle}
                    </p>
                  </div>
                  {index !== 3 && (
                    <ArrowRight
                      size={19}
                      className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 text-indigo-500 sm:block"
                    />
                  )}
                </div>
              );
            })}
          </div>

          <p className="mt-5 text-sm leading-7 text-slate-600">
            <strong>Remember:</strong> These processes are a useful way to
            understand observational learning. They do not mean that every
            real-life learning experience follows a perfectly fixed sequence.
          </p>
        </div>
      </section>

      {/* Modelling */}
      <section>
        <SectionHeading
          eyebrow="A Key Concept"
          title="What Is Modelling in Social Learning Theory?"
          description="Modelling occurs when one person demonstrates a behaviour that another person can observe and potentially learn. The individual demonstrating the behaviour is called a model."
          icon={UserRound}
        />

        <div className="space-y-5 text-base leading-8 text-slate-700">
          <p>
            A model can be a parent, teacher, friend, classmate, colleague,
            athlete, public figure or even a character shown in a film or
            online video.
          </p>

          <p>
            For example, when a teacher demonstrates how to conduct a
            laboratory experiment, students can observe the correct
            procedure and later try to perform it themselves.
          </p>

          <p>
            Modelling can involve positive behaviours, such as kindness,
            cooperation and responsible habits. It can also involve
            undesirable behaviours, such as aggression, dishonesty or
            disrespectful communication.
          </p>
        </div>

        <div className="mt-7 grid gap-5 md:grid-cols-2">
          <article className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-emerald-700">
              <CheckCircle2 size={23} />
            </div>
            <h3 className="mt-4 font-bold text-slate-950">
              Positive Modelling
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-700">
              A child observes a parent apologizing after making a mistake.
              The child may learn that accepting responsibility and
              apologizing are appropriate ways to handle mistakes.
            </p>
          </article>

          <article className="rounded-2xl border border-rose-200 bg-rose-50 p-6">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-rose-700">
              <AlertTriangle size={23} />
            </div>
            <h3 className="mt-4 font-bold text-slate-950">
              Negative Modelling
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-700">
              A child regularly observes someone responding to disagreements
              with shouting and insults. The child may begin using similar
              responses when facing conflict.
            </p>
          </article>
        </div>

        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6">
          <h3 className="font-bold text-slate-950">
            Types of Models
          </h3>

          <div className="mt-5 space-y-4">
            {[
              {
                title: "Live Model",
                description:
                  "A real person demonstrates a behaviour directly in front of the learner.",
                example:
                  "A teacher demonstrates how to use a microscope.",
              },
              {
                title: "Verbal Model",
                description:
                  "A person describes or explains how to perform a behaviour or activity.",
                example:
                  "A coach explains the steps involved in performing a particular exercise.",
              },
              {
                title: "Symbolic Model",
                description:
                  "A character or person represented through media demonstrates a behaviour.",
                example:
                  "A child watches a character in a television programme helping someone in need.",
              },
            ].map((item, index) => (
              <div key={item.title} className="flex gap-4 rounded-xl bg-slate-50 p-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-indigo-100 text-sm font-bold text-indigo-700">
                  {index + 1}
                </div>
                <div>
                  <h4 className="font-bold text-slate-950">{item.title}</h4>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-700">
                    <strong>Example:</strong> {item.example}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vicarious reinforcement */}
      <section>
        <SectionHeading
          eyebrow="Learning from Others' Experiences"
          title="What Is Vicarious Reinforcement?"
          description="Vicarious reinforcement occurs when an individual observes another person receiving a reward or positive consequence for a behaviour. Seeing this outcome may increase the observer's motivation to perform similar behaviour."
          icon={TrendingUp}
        />

        <div className="space-y-5 text-base leading-8 text-slate-700">
          <p>
            In ordinary reinforcement, a person experiences a consequence
            after performing a behaviour. In vicarious reinforcement, the
            person observes someone else experiencing the consequence.
          </p>

          <p>
            Imagine a student who notices that a classmate receives
            appreciation for helping the teacher organize classroom
            materials. The student may become more willing to help because
            they have observed the positive outcome.
          </p>
        </div>

        <div className="mt-6 grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
            <h3 className="flex items-center gap-2 font-bold text-emerald-900">
              <CheckCircle2 size={20} />
              Vicarious Reinforcement
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-700">
              A student sees another student being appreciated for
              participating in a classroom discussion. The observer may
              become more interested in participating.
            </p>
            <p className="mt-3 text-sm font-bold text-emerald-800">
              Observed consequence: Positive outcome
            </p>
          </div>

          <div className="rounded-2xl border border-rose-200 bg-rose-50 p-6">
            <h3 className="flex items-center gap-2 font-bold text-rose-900">
              <AlertTriangle size={20} />
              Vicarious Punishment
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-700">
              A student sees another student being reprimanded for
              disrupting a class. The observer may become less likely to
              engage in similar disruptive behaviour.
            </p>
            <p className="mt-3 text-sm font-bold text-rose-800">
              Observed consequence: Negative outcome
            </p>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-indigo-100 bg-indigo-50 p-5">
          <p className="font-bold text-slate-950">
            Learning and Performance Are Different
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700">
            A person may learn a behaviour by observing someone else but
            choose not to perform it. The expected consequences can
            influence whether the learned behaviour is demonstrated.
          </p>
        </div>
      </section>

      {/* Bobo doll experiment */}
      <section id="bobo-experiment" className="scroll-mt-8">
        <SectionHeading
          eyebrow="Famous Psychological Research"
          title="The Bobo Doll Experiment by Albert Bandura"
          description="One of the most influential demonstrations of observational learning was the Bobo doll experiment, conducted by Albert Bandura and his colleagues in the early 1960s."
          icon={Search}
        />

        <div className="space-y-5 text-base leading-8 text-slate-700">
          <p>
            Before Bandura's work, many explanations of learning focused
            heavily on direct experience, rewards and punishments. Bandura
            wanted to investigate whether children could learn aggressive
            behaviour simply by observing another person.
          </p>

          <p>
            The researchers used an inflatable clown-like toy called a
            Bobo doll. In the experiment, children observed an adult
            demonstrating particular behaviours towards the doll. The
            children were later placed in a situation where they had an
            opportunity to play with toys, including the Bobo doll.
          </p>
        </div>

        <div className="mt-7 rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
          <h3 className="text-lg font-bold text-slate-950">
            How the Experiment Was Conducted
          </h3>

          <div className="mt-6 space-y-5">
            {[
              {
                title: "Children Observe an Adult",
                description:
                  "Some children watched an adult behave aggressively towards the Bobo doll. Other children observed a non-aggressive model or were assigned to a comparison condition.",
                icon: Eye,
              },
              {
                title: "Children Enter a Play Situation",
                description:
                  "After observing the model, the children were taken to another room where they encountered toys, including a Bobo doll.",
                icon: Users,
              },
              {
                title: "Researchers Observe Behaviour",
                description:
                  "Researchers recorded how the children behaved, including whether they reproduced actions similar to those demonstrated by the adult model.",
                icon: Search,
              },
              {
                title: "Behavioural Differences Are Examined",
                description:
                  "The researchers compared the children's behaviour across the experimental conditions to investigate the influence of observed models.",
                icon: ClipboardList,
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-100 text-indigo-700">
                      <Icon size={21} />
                    </div>
                    {index !== 3 && (
                      <div className="mt-2 w-px flex-1 bg-indigo-200" />
                    )}
                  </div>
                  <div className="pb-5">
                    <h4 className="font-bold text-slate-950">
                      {index + 1}. {item.title}
                    </h4>
                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
          <h3 className="flex items-center gap-2 font-bold text-emerald-900">
            <CheckCircle2 size={21} />
            Major Findings
          </h3>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-700">
            <li className="flex gap-3">
              <CheckCircle2 size={17} className="mt-1 shrink-0 text-emerald-700" />
              Children who observed aggressive adult models were more likely
              to demonstrate similar aggressive actions.
            </li>
            <li className="flex gap-3">
              <CheckCircle2 size={17} className="mt-1 shrink-0 text-emerald-700" />
              Children could reproduce behaviours they had observed without
              the researcher directly teaching them those actions.
            </li>
            <li className="flex gap-3">
              <CheckCircle2 size={17} className="mt-1 shrink-0 text-emerald-700" />
              The study provided important evidence that behaviour can be
              learned through observation and modelling.
            </li>
          </ul>
        </div>

        <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-6">
          <h3 className="flex items-center gap-2 font-bold text-amber-900">
            <Lightbulb size={20} />
            Why Was This Experiment Important?
          </h3>
          <p className="mt-3 text-sm leading-7 text-slate-700">
            The experiment helped demonstrate that children can acquire
            new behaviours by observing others. It challenged the idea
            that direct reinforcement is always necessary for learning
            to occur.
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-700">
            However, the findings should not be interpreted as proof that
            watching aggression will always make a child aggressive in
            everyday life. Real-world behaviour is influenced by many
            factors, including family environment, social relationships,
            individual differences and the situation.
          </p>
        </div>

        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6">
          <h3 className="font-bold text-slate-950">
            Limitations and Ethical Considerations
          </h3>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
            <li>
              <strong>Artificial setting:</strong> Playing with a Bobo doll
              in a laboratory is not the same as behaving aggressively
              towards real people in everyday life.
            </li>
            <li>
              <strong>Generalization:</strong> The behaviour observed in
              the experiment does not establish that every child will
              imitate aggression in every situation.
            </li>
            <li>
              <strong>Historical research standards:</strong> Modern
              research involving children must follow strict ethical
              standards, including appropriate parental consent and
              protection from harm.
            </li>
            <li>
              <strong>Interpretation:</strong> The experiment demonstrates
              observational learning under particular conditions; it
              cannot explain every cause of aggressive behaviour.
            </li>
          </ul>
        </div>
      </section>
<AdSlot />
      {/* Reciprocal determinism */}
      <section>
        <SectionHeading
          eyebrow="A Broader Explanation"
          title="What Is Reciprocal Determinism?"
          description="Bandura later developed Social Cognitive Theory, which gives a broader explanation of how personal factors, behaviour and the environment influence one another."
          icon={Network}
        />

        <div className="space-y-5 text-base leading-8 text-slate-700">
          <p>
            Reciprocal determinism means that behaviour is not influenced
            by the environment alone. Personal factors, actions and
            environmental conditions interact with and influence one
            another.
          </p>

          <p>
            For example, a student who believes they can improve in
            mathematics may practise more regularly. Their improved
            performance may increase their confidence, while encouragement
            from a teacher may further support their learning.
          </p>
        </div>

        <div className="mt-7 rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
          <h3 className="text-lg font-bold text-slate-950">
            The Three Interacting Factors
          </h3>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-violet-200 bg-violet-50 p-5">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-violet-700">
                <Brain size={23} />
              </div>
              <h4 className="mt-4 font-bold text-slate-950">
                Personal Factors
              </h4>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Thoughts, beliefs, expectations, emotions and personal
                characteristics.
              </p>
              <p className="mt-3 text-xs font-bold text-violet-700">
                Example: "I can improve my marks."
              </p>
            </div>

            <div className="rounded-2xl border border-blue-200 bg-blue-50 p-5">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-blue-700">
                <Repeat size={23} />
              </div>
              <h4 className="mt-4 font-bold text-slate-950">
                Behaviour
              </h4>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Actions and responses performed by the individual.
              </p>
              <p className="mt-3 text-xs font-bold text-blue-700">
                Example: Practising mathematics daily.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-emerald-700">
                <Users size={23} />
              </div>
              <h4 className="mt-4 font-bold text-slate-950">
                Environment
              </h4>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Surroundings, social relationships, opportunities and
                external conditions.
              </p>
              <p className="mt-3 text-xs font-bold text-emerald-700">
                Example: Supportive teacher and study resources.
              </p>
            </div>
          </div>

          <div className="mt-5 rounded-xl bg-slate-50 p-5">
            <p className="text-sm font-bold text-slate-950">
              How They Influence One Another
            </p>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              A student's confidence may influence how much they study.
              Studying may improve performance, and improved performance
              may strengthen confidence. A supportive classroom environment
              can influence all three.
            </p>
          </div>
        </div>

        <p className="mt-5 text-sm leading-7 text-slate-600">
          <strong>Important distinction:</strong> Reciprocal determinism
          is especially associated with Bandura's broader Social Cognitive
          Theory. It expands the explanation beyond the basic process of
          learning by observing a model.
        </p>
      </section>

      {/* Self efficacy */}
      <section>
        <SectionHeading
          eyebrow="Another Important Concept"
          title="What Is Self-Efficacy?"
          description="Self-efficacy refers to a person's belief in their ability to organize and carry out the actions needed to achieve a particular goal or handle a particular situation."
          icon={Target}
        />

        <div className="space-y-5 text-base leading-8 text-slate-700">
          <p>
            Self-efficacy is an important concept in Bandura's broader
            Social Cognitive Theory. It influences how people approach
            challenges, how much effort they invest and how they respond
            when difficulties arise.
          </p>

          <p>
            Imagine two students who have to give a presentation. One
            believes they can prepare and deliver it successfully, even
            though they feel nervous. The other believes they cannot do it
            and avoids preparing.
          </p>

          <p>
            Their beliefs about their own abilities may influence how they
            approach the task.
          </p>
        </div>

        <div className="mt-6 grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
            <h3 className="font-bold text-emerald-900">
              Stronger Self-Efficacy
            </h3>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-700">
              <li>May be more willing to attempt challenging tasks.</li>
              <li>Often shows persistence when facing difficulties.</li>
              <li>May view mistakes as opportunities to improve.</li>
              <li>Is more likely to keep working towards a goal.</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-orange-200 bg-orange-50 p-6">
            <h3 className="font-bold text-orange-900">
              Weaker Self-Efficacy
            </h3>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-700">
              <li>May hesitate before attempting difficult tasks.</li>
              <li>Can become discouraged by early setbacks.</li>
              <li>May underestimate their ability to improve.</li>
              <li>Can avoid situations they believe are beyond their ability.</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-indigo-100 bg-indigo-50 p-6">
          <h3 className="font-bold text-slate-950">
            How Can Self-Efficacy Develop?
          </h3>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {[
              {
                title: "Personal Success",
                description:
                  "Successfully completing a task can strengthen confidence in one's ability to perform similar tasks.",
              },
              {
                title: "Observing Others",
                description:
                  "Seeing someone with similar abilities succeed can increase the belief that one may also succeed.",
              },
              {
                title: "Encouragement",
                description:
                  "Supportive feedback and realistic encouragement can help individuals believe in their ability to improve.",
              },
              {
                title: "Emotional and Physical States",
                description:
                  "Stress, fatigue, excitement and other feelings can influence how capable a person believes they are in a situation.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-xl bg-white p-4">
                <h4 className="font-bold text-indigo-800">
                  {item.title}
                </h4>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Factors */}
      <section>
        <SectionHeading
          eyebrow="What Influences Learning?"
          title="Factors That Affect Observational Learning"
          description="Not every person imitates every behaviour they observe. Several factors influence whether someone pays attention to a model, remembers an action and decides to perform it."
          icon={Idea}
        />

        <div className="grid gap-5 md:grid-cols-2">
          {influences.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title} className="rounded-2xl border border-slate-200 bg-white p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-100 text-indigo-700">
                    <Icon size={22} />
                  </div>
                  <h3 className="font-bold text-slate-950">
                    {item.title}
                  </h3>
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>
                <div className="mt-4 rounded-xl bg-slate-50 p-4">
                  <p className="text-xs font-bold uppercase tracking-wide text-indigo-700">
                    Example
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-700">
                    {item.example}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </section>
<AdSlot />
      {/* Everyday examples */}
      <section>
        <SectionHeading
          eyebrow="Real-Life Connections"
          title="Examples of Social Learning in Everyday Life"
          description="Social learning is not limited to classrooms or childhood. People observe and learn from others in families, friendships, workplaces, sports and digital environments."
          icon={Users}
        />

        <div className="space-y-4">
          {examples.map((item, index) => {
            const Icon = item.icon;
            return (
              <article key={item.title} className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-100 text-indigo-700">
                    <Icon size={22} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-950">
                      {index + 1}. {item.title}
                    </h3>
                    <p className="text-xs font-bold text-indigo-600">
                      {item.context}
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>

                <div className={`mt-4 rounded-xl border p-4 ${item.color}`}>
                  <p className="text-xs font-bold uppercase tracking-wide">
                    Related Concept
                  </p>
                  <p className="mt-2 text-sm font-bold">
                    {item.concept}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Applications */}
      <section>
        <SectionHeading
          eyebrow="Practical Importance"
          title="Applications of Social Learning Theory"
          description="The theory helps explain how behaviours, skills and social habits can spread through observation. Its principles can be applied in education, parenting, professional development and many other settings."
          icon={BookOpen}
        />

        <div className="grid gap-5 md:grid-cols-2">
          {applications.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title} className="rounded-2xl border border-slate-200 bg-white p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-100 text-indigo-700">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-950">
                    {item.title}
                  </h3>
                </div>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>

                <div className="mt-4 rounded-xl bg-indigo-50 p-4">
                  <p className="text-xs font-bold uppercase tracking-wide text-indigo-700">
                    Practical Example
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-700">
                    {item.example}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Comparison */}
      <section>
        <SectionHeading
          eyebrow="Comparing Learning Theories"
          title="Social Learning Theory vs Other Learning Theories"
          description="Different psychological theories explain learning from different perspectives. Comparing them helps us understand what makes Bandura's approach distinctive."
          icon={Scale}
        />

        <div className="space-y-4">
          <div className="rounded-2xl bg-indigo-600 p-6 text-white">
            <h3 className="text-xl font-bold">
              Social Learning Theory
            </h3>
            <p className="mt-2 text-sm leading-7 text-indigo-100">
              People can learn by observing others, remembering their
              behaviour and considering the consequences they experience.
            </p>
          </div>

          {[
            {
              title: "Classical Conditioning",
              explanation:
                "Learning occurs through associations between stimuli. A previously neutral stimulus becomes associated with another stimulus and may eventually produce a learned response.",
              example:
                "A student begins feeling nervous when hearing an examination bell after repeatedly associating it with stressful examination situations.",
            },
            {
              title: "Operant Conditioning",
              explanation:
                "Learning occurs through the consequences of one's own behaviour. Reinforcement can increase behaviour, while punishment can decrease it.",
              example:
                "A student studies regularly because receiving good marks and appreciation encourages the behaviour.",
            },
            {
              title: "Social Learning Theory",
              explanation:
                "Learning can also occur through observing other people and the consequences of their behaviour, without requiring the learner to experience those consequences directly.",
              example:
                "A student begins studying regularly after observing a classmate's effective study habits and positive results.",
            },
          ].map((item) => (
            <article key={item.title} className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="font-bold text-slate-950">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                {item.explanation}
              </p>
              <div className="mt-4 rounded-xl bg-slate-50 p-4">
                <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
                  Example
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-700">
                  {item.example}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white">
          <div className="border-b border-slate-200 bg-slate-50 p-5">
            <h3 className="font-bold text-slate-950">
              Quick Comparison
            </h3>
          </div>
          <div className="divide-y divide-slate-100">
            {[
              {
                theory: "Classical Conditioning",
                focus: "Learning through associations",
              },
              {
                theory: "Operant Conditioning",
                focus: "Learning through direct consequences",
              },
              {
                theory: "Social Learning Theory",
                focus: "Learning through observation and modelling",
              },
            ].map((item) => (
              <div key={item.theory} className="grid gap-2 p-4 sm:grid-cols-2">
                <p className="text-sm font-bold text-slate-900">
                  {item.theory}
                </p>
                <p className="text-sm leading-6 text-slate-600">
                  {item.focus}
                </p>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-5 text-sm leading-7 text-slate-600">
          These theories are not necessarily mutually exclusive. Different
          learning processes can operate together in real-life situations.
        </p>
      </section>
<AdSlot />
      {/* Strengths */}
      <section>
        <SectionHeading
          eyebrow="Critical Evaluation"
          title="Strengths of Social Learning Theory"
          description="Bandura's work made an important contribution to psychology by explaining how social environments and observation influence learning."
          icon={ShieldCheck}
        />

        <div className="space-y-4">
          {[
            {
              title: "Explains Learning Without Direct Experience",
              description:
                "The theory explains how individuals can acquire information and behaviours by watching others, even without personally experiencing every consequence.",
            },
            {
              title: "Connects Behaviour with Social Environments",
              description:
                "It recognizes the influence of parents, teachers, friends, colleagues and media on the learning process.",
            },
            {
              title: "Useful in Everyday Life",
              description:
                "Its concepts can help explain learning in classrooms, families, workplaces, sports and social settings.",
            },
            {
              title: "Recognizes Mental Processes",
              description:
                "Attention, memory, motivation and the ability to reproduce an action are important parts of observational learning.",
            },
            {
              title: "Supports Positive Behaviour Modelling",
              description:
                "The theory suggests that demonstrating positive behaviours can provide useful examples for others to observe and learn from.",
            },
          ].map((item) => (
            <div key={item.title} className="flex gap-4 rounded-2xl border border-emerald-100 bg-emerald-50/60 p-5">
              <CheckCircle2 size={22} className="mt-1 shrink-0 text-emerald-700" />
              <div>
                <h3 className="font-bold text-slate-950">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Limitations */}
      <section>
        <SectionHeading
          eyebrow="Limitations"
          title="Limitations of Social Learning Theory"
          description="Although observational learning is an important explanation of behaviour, it cannot explain every form of learning or every reason behind human actions."
          icon={AlertTriangle}
        />

        <div className="space-y-4">
          {[
            {
              title: "Not Every Observed Behaviour Is Imitated",
              description:
                "People may observe and remember behaviour without reproducing it. Motivation, personal beliefs, ability and expected consequences influence performance.",
            },
            {
              title: "Other Learning Processes Also Matter",
              description:
                "Some learning involves direct practice, biological processes, personal discovery and conditioning. Observation alone cannot explain all learning.",
            },
            {
              title: "Complex Human Behaviour Has Many Causes",
              description:
                "Aggression, cooperation and other behaviours can be influenced by personality, family circumstances, culture, emotions and social conditions.",
            },
            {
              title: "Observational Research Has Limitations",
              description:
                "Laboratory experiments may not fully represent the complexity of everyday social environments. Results must be interpreted within the conditions of the research.",
            },
            {
              title: "Individual Differences Matter",
              description:
                "People may respond differently to the same model because of differences in experience, abilities, interests, beliefs and personal circumstances.",
            },
          ].map((item) => (
            <article key={item.title} className="rounded-2xl border border-amber-200 bg-amber-50/60 p-5">
              <h3 className="flex items-center gap-2 font-bold text-slate-950">
                <AlertTriangle size={19} className="shrink-0 text-amber-700" />
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-700">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Misconceptions */}
      <section>
        <SectionHeading
          eyebrow="Common Misunderstandings"
          title="Myths and Facts About Social Learning Theory"
          description="These distinctions help prevent common misunderstandings about observation, imitation and the learning process."
          icon={Lightbulb}
        />

        <div className="space-y-4">
          {misconceptions.map((item, index) => (
            <article key={item.myth} className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
              <p className="flex items-start gap-3 font-bold text-rose-700">
                <AlertTriangle size={19} className="mt-1 shrink-0" />
                <span>Myth {index + 1}: {item.myth}</span>
              </p>
              <p className="mt-4 flex items-start gap-3 text-sm leading-7 text-slate-700">
                <CheckCircle2 size={19} className="mt-1 shrink-0 text-emerald-700" />
                <span>
                  <strong>Fact:</strong> {item.fact}
                </span>
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Conclusion */}
      <section className="rounded-3xl bg-slate-950 p-6 sm:p-9">
        <p className="text-sm font-bold uppercase tracking-wider text-indigo-300">
          Key Takeaway
        </p>

        <div className="mt-3 flex items-start gap-3">
          <Brain size={28} className="mt-1 shrink-0 text-indigo-300" />
          <div>
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Learning Does Not Always Require Direct Experience
            </h2>
            <p className="mt-4 max-w-4xl text-sm leading-8 text-slate-300 sm:text-base">
              Social Learning Theory explains that people can acquire
              behaviours, skills and attitudes by observing others. Through
              attention, retention, reproduction and motivation, an
              observed behaviour may become part of a person's own actions.
            </p>
            <p className="mt-4 max-w-4xl text-sm leading-8 text-slate-300 sm:text-base">
              From children learning manners at home to employees
              developing professional skills, observation plays an
              important role in everyday learning. The theory also reminds
              us that the people we learn from can influence the behaviours
              we develop.
            </p>
          </div>
        </div>

        <div className="mt-7 grid gap-3 sm:grid-cols-4">
          {learningSteps.map((item) => (
            <div key={item.number} className="rounded-xl border border-slate-700 bg-slate-900 p-4">
              <p className="text-xl font-bold text-indigo-300">
                {item.number}
              </p>
              <p className="mt-2 text-sm font-bold text-white">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </section>
<AdSlot />
      {/* FAQs */}
      <section>
        <SectionHeading
          eyebrow="Frequently Asked Questions"
          title="Social Learning Theory – FAQs"
          description="Common questions about Albert Bandura's theory, observational learning, modelling and its applications."
          icon={MessageCircle}
        />

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <details
              key={faq.question}
              className="group rounded-2xl border border-slate-200 bg-white p-5 open:border-indigo-200 open:bg-indigo-50/40"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-slate-900">
                <span>{index + 1}. {faq.question}</span>
                <span className="text-xl text-indigo-600 transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 border-t border-slate-200 pt-4 text-sm leading-7 text-slate-600">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* Further Learning */}
      <section className="rounded-2xl border border-indigo-100 bg-indigo-50 p-6 sm:p-8">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-indigo-700">
            <BookOpen size={25} />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-950">
              Continue Learning Psychology
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Social Learning Theory explains how people learn from others.
              To understand the broader field of learning psychology,
              explore how classical conditioning, operant conditioning
              and other learning approaches explain the development of
              behaviour.
            </p>
          </div>
        </div>
      </section>

    </main>
  );
}
