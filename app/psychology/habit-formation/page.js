
import {
  Brain,
  ArrowRight,
  Repeat,
  Target,
  Eye,
  Lightbulb,
  Clock,
  CheckCircle2,
  AlertCircle,
  CalendarDays,
  RefreshCw,
  Footprints,
  Heart,
  BookOpen,
  Sparkles,
  ShieldCheck,
  Smartphone,
  Bell,
  BookMarked,
  Coffee,
  Dumbbell,
  Sun,
  Moon,
  Settings,
  Leaf,
  Zap,
} from "lucide-react";
import AdSlot from "../../../components/AdSlot";

export const metadata = {
  title: "Habit Formation | How Habits Develop and Change | PriceTag HUB",
  description:
    "Understand habit formation, the habit loop, automatic behaviour, repetition and practical ways to build good habits and change unwanted habits with relatable examples.",
};

const habitFactors = [
  {
    icon: Repeat,
    title: "Repetition",
    description:
      "Repeating an action in a similar situation helps strengthen the association between the situation and the behaviour.",
  },
  {
    icon: CalendarDays,
    title: "Consistency",
    description:
      "A regular routine makes it easier to remember and repeat a behaviour.",
  },
  {
    icon: Heart,
    title: "Reward",
    description:
      "Pleasant or useful outcomes can encourage a person to repeat an action.",
  },
  {
    icon: ShieldCheck,
    title: "Environment",
    description:
      "Surroundings can make a behaviour easier or harder to perform.",
  },
];

const buildingSteps = [
  {
    title: "Choose one specific behaviour",
    description:
      "Decide exactly what you want to do. For example, read two pages every evening rather than simply deciding to read more.",
  },
  {
    title: "Connect it to an existing routine",
    description:
      "Choose a familiar cue, such as reading after dinner or walking after reaching home from work.",
  },
  {
    title: "Make it easy to begin",
    description:
      "Keep your book, shoes or other necessary materials ready. Reduce unnecessary effort.",
  },
  {
    title: "Repeat and observe your progress",
    description:
      "Practise regularly and use a simple tracker to notice your progress without expecting perfection.",
  },
];

export default function HabitFormationPage() {
  return (
    <main className="mx-auto w-full max-w-6xl space-y-16 px-4 pb-20 sm:px-6 lg:px-8 m-4">

      {/* HERO */}
      <section className="overflow-hidden rounded-3xl border border-indigo-100 bg-gradient-to-br from-indigo-50 via-white to-blue-50 p-6 sm:p-10 lg:p-12">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,1fr)_280px]">

          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white px-4 py-2 text-sm font-bold text-indigo-700">
              <Brain size={17} />
              Learning Psychology
            </span>

            <h1 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Habit Formation: How Everyday Behaviours Become Automatic
            </h1>

            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
              Why do you automatically brush your teeth every morning,
              check your phone when it lights up or reach for a cup of
              tea at a familiar time? These behaviours may seem simple,
              but they illustrate how habits influence everyday life.
            </p>

            <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">
              Habit formation is the psychological process through which
              repeated behaviours become increasingly automatic in
              familiar situations.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#habit-loop"
                className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 font-bold text-white transition hover:bg-indigo-700"
              >
                Understand Habit Formation <ArrowRight size={18} />
              </a>
              <a
                href="#building-habits"
                className="rounded-xl border border-indigo-200 bg-white px-5 py-3 font-bold text-indigo-700 transition hover:bg-indigo-50"
              >
                Build Better Habits
              </a>
            </div>
          </div>

          {/* Hero icon diagram */}
          <div className="relative mx-auto flex aspect-square w-full max-w-[270px] items-center justify-center">
            <div className="absolute h-60 w-60 rounded-full bg-indigo-200/40 blur-3xl" />
            <div className="absolute h-56 w-56 rounded-full border border-indigo-200/70" />
            <div className="absolute h-40 w-40 rounded-full border border-dashed border-violet-300" />

            <div className="relative z-10 flex h-32 w-32 items-center justify-center rounded-[2rem] bg-gradient-to-br from-indigo-500 to-violet-600 text-white shadow-xl shadow-indigo-300/50">
              <Brain size={68} strokeWidth={1.5} />
            </div>

            <div className="absolute left-0 top-8 flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-100 bg-white text-blue-600 shadow-lg">
              <Repeat size={27} />
            </div>

            <div className="absolute right-0 top-8 flex h-14 w-14 items-center justify-center rounded-2xl border border-violet-100 bg-white text-violet-600 shadow-lg">
              <Clock size={27} />
            </div>

            <div className="absolute bottom-9 left-0 flex h-14 w-14 items-center justify-center rounded-2xl border border-pink-100 bg-white text-pink-600 shadow-lg">
              <Target size={27} />
            </div>

            <div className="absolute bottom-9 right-0 flex h-14 w-14 items-center justify-center rounded-2xl border border-amber-100 bg-white text-amber-600 shadow-lg">
              <CheckCircle2 size={27} />
            </div>

            <Sparkles className="absolute right-10 top-0 text-violet-400" size={20} />

            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-indigo-100 bg-white px-4 py-2 text-xs font-bold text-indigo-700 shadow-sm">
              Small Actions, Repeated Over Time
            </div>
          </div>
        </div>
      </section>

      {/* WHAT IS HABIT FORMATION */}
      <section className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-indigo-100 p-3 text-indigo-700">
            <BookOpen size={23} />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            What Is Habit Formation?
          </h2>
        </div>

        <p className="leading-8 text-slate-700">
          Habit formation is the process through which a behaviour becomes
          more automatic after being repeated in a consistent context.
          Initially, an action may require conscious thought and effort.
          With repetition, familiar situations can begin to trigger the
          action with less deliberate decision-making.
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-blue-100 bg-blue-50/70 p-5">
            <div className="flex items-center gap-2 text-blue-700">
              <Brain size={21} />
              <h3 className="font-bold">Before habit formation</h3>
            </div>
            <p className="mt-3 leading-7 text-slate-700">
              A student has to remind themselves every evening to open
              their books, decide when to study and make an effort to
              begin.
            </p>
            <p className="mt-3 text-sm font-bold text-blue-800">
              Conscious decision and effort
            </p>
          </div>

          <div className="rounded-2xl border border-emerald-100 bg-emerald-50/70 p-5">
            <div className="flex items-center gap-2 text-emerald-700">
              <CheckCircle2 size={21} />
              <h3 className="font-bold">After habit formation</h3>
            </div>
            <p className="mt-3 leading-7 text-slate-700">
              Sitting at the study desk after dinner may naturally
              prompt the student to open their books and begin revising.
            </p>
            <p className="mt-3 text-sm font-bold text-emerald-800">
              More automatic behaviour
            </p>
          </div>
        </div>

        <p className="leading-8 text-slate-700">
          The key difference is automaticity: the behaviour becomes
          easier to initiate in a familiar situation and requires
          relatively less conscious effort.
        </p>
      </section>
<AdSlot />
      {/* HABIT LOOP */}
      <section id="habit-loop" className="scroll-mt-24 space-y-6">
        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-violet-100 p-3 text-violet-700">
            <RefreshCw size={23} />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            The Habit Loop: How Habits Work
          </h2>
        </div>

        <p className="leading-8 text-slate-700">
          A popular way to understand habits is through the habit loop.
          It describes three connected elements: a cue, a routine and
          a reward.
        </p>

        {/* Main diagram */}
        <div className="rounded-3xl border border-slate-200 bg-white p-5 sm:p-7">
          <div className="grid gap-4 md:grid-cols-3">

            <div className="rounded-2xl border border-blue-200 bg-blue-50 p-5 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">
                <Eye size={30} />
              </div>
              <h3 className="mt-4 text-lg font-bold text-blue-950">
                1. Cue
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                A signal or situation that prompts a behaviour.
              </p>
              <p className="mt-3 rounded-xl bg-white p-3 text-sm font-bold text-blue-800">
                Something triggers the action
              </p>
            </div>

            <div className="rounded-2xl border border-violet-200 bg-violet-50 p-5 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-100 text-violet-700">
                <Repeat size={30} />
              </div>
              <h3 className="mt-4 text-lg font-bold text-violet-950">
                2. Routine
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                The actual behaviour performed in response to the cue.
              </p>
              <p className="mt-3 rounded-xl bg-white p-3 text-sm font-bold text-violet-800">
                The person performs an action
              </p>
            </div>

            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-100 text-amber-700">
                <Heart size={30} />
              </div>
              <h3 className="mt-4 text-lg font-bold text-amber-950">
                3. Reward
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                A satisfying outcome that can encourage repetition.
              </p>
              <p className="mt-3 rounded-xl bg-white p-3 text-sm font-bold text-amber-800">
                The outcome reinforces behaviour
              </p>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-2 text-sm font-bold text-slate-500">
            <span>Cue</span>
            <ArrowRight size={17} />
            <span>Routine</span>
            <ArrowRight size={17} />
            <span>Reward</span>
            <RefreshCw size={17} className="ml-1 text-indigo-500" />
            <span className="text-indigo-700">Repeated over time</span>
          </div>
        </div>

        {/* Real example */}
        <div className="rounded-2xl border border-indigo-100 bg-indigo-50/60 p-5 sm:p-6">
          <div className="flex items-center gap-2">
            <Smartphone className="text-indigo-700" size={22} />
            <h3 className="font-bold text-indigo-950">
              Real-life example: Checking your phone
            </h3>
          </div>

          <div className="mt-5 space-y-3">
            <div className="flex items-center gap-3 rounded-xl bg-white p-3">
              <Bell className="shrink-0 text-blue-600" size={22} />
              <div>
                <p className="font-bold text-slate-900">Cue</p>
                <p className="text-sm text-slate-600">
                  A notification appears on the screen.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-xl bg-white p-3">
              <Smartphone className="shrink-0 text-violet-600" size={22} />
              <div>
                <p className="font-bold text-slate-900">Routine</p>
                <p className="text-sm text-slate-600">
                  You pick up your phone and open the app.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-xl bg-white p-3">
              <Heart className="shrink-0 text-amber-600" size={22} />
              <div>
                <p className="font-bold text-slate-900">Reward</p>
                <p className="text-sm text-slate-600">
                  You find an interesting message or update.
                </p>
              </div>
            </div>
          </div>

          <p className="mt-4 text-sm leading-7 text-slate-600">
            When this pattern is repeated, notifications may increasingly
            trigger the automatic response of checking the phone.
          </p>
        </div>
      </section>

      {/* REPETITION AND AUTOMATICITY */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-emerald-100 p-3 text-emerald-700">
            <Repeat size={23} />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            How Repetition Makes Behaviour Automatic
          </h2>
        </div>

        <p className="leading-8 text-slate-700">
          Repetition helps the brain learn associations between
          situations and actions. When a person performs a behaviour
          repeatedly in a similar context, that context can become a
          stronger trigger for the behaviour.
        </p>

        {/* Conceptual diagram */}
        <div className="rounded-3xl border border-emerald-100 bg-gradient-to-br from-emerald-50 to-white p-5 sm:p-7">
          <h3 className="font-bold text-emerald-950">
            From conscious effort to automatic behaviour
          </h3>

          <div className="mt-6 grid gap-3 sm:grid-cols-[1fr_auto_1fr_auto_1fr] sm:items-center">
            <div className="rounded-2xl border border-blue-200 bg-white p-4 text-center">
              <Brain className="mx-auto text-blue-600" size={30} />
              <p className="mt-3 font-bold text-slate-900">New action</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                Requires conscious attention
              </p>
            </div>

            <ArrowRight className="mx-auto hidden text-emerald-500 sm:block" size={23} />
            <ArrowRight className="mx-auto rotate-90 text-emerald-500 sm:hidden" size={23} />

            <div className="rounded-2xl border border-violet-200 bg-white p-4 text-center">
              <RefreshCw className="mx-auto text-violet-600" size={30} />
              <p className="mt-3 font-bold text-slate-900">Repetition</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                Behaviour is practised in a familiar context
              </p>
            </div>

            <ArrowRight className="mx-auto hidden text-emerald-500 sm:block" size={23} />
            <ArrowRight className="mx-auto rotate-90 text-emerald-500 sm:hidden" size={23} />

            <div className="rounded-2xl border border-emerald-200 bg-white p-4 text-center">
              <Zap className="mx-auto text-emerald-600" size={30} />
              <p className="mt-3 font-bold text-slate-900">More automatic</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                Requires less deliberate effort
              </p>
            </div>
          </div>

          <p className="mt-5 text-sm leading-7 text-slate-600">
            This is a simplified illustration of habit development.
            Automaticity develops gradually and does not happen at the
            same speed for every behaviour.
          </p>
        </div>

        <h3 className="text-xl font-bold text-slate-900">
          What Is Automaticity?
        </h3>

        <p className="leading-8 text-slate-700">
          Automaticity is the ability to perform a behaviour with
          relatively little conscious thought or deliberate effort.
          It is an important characteristic of established habits.
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 p-5">
            <div className="flex items-center gap-2 text-indigo-700">
              <BookMarked size={22} />
              <h3 className="font-bold text-slate-900">Learning to type</h3>
            </div>
            <p className="mt-3 leading-7 text-slate-600">
              A beginner looks at the keyboard and searches for each
              letter. An experienced typist can type familiar words
              without consciously locating every key.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 p-5">
            <div className="flex items-center gap-2 text-emerald-700">
              <Footprints size={22} />
              <h3 className="font-bold text-slate-900">Walking a familiar route</h3>
            </div>
            <p className="mt-3 leading-7 text-slate-600">
              A person walking a familiar route may not need to
              consciously plan every step or turn.
            </p>
          </div>
        </div>
      </section>
<AdSlot />
      {/* FACTORS */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-amber-100 p-3 text-amber-700">
            <Target size={23} />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            Factors That Influence Habit Formation
          </h2>
        </div>

        <p className="leading-8 text-slate-700">
          Habits do not develop at the same speed or in the same way
          for everyone. Several factors influence how easily a behaviour
          becomes established.
        </p>

        <div className="grid gap-4 sm:grid-cols-2">
          {habitFactors.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-700">
                  <Icon size={22} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="rounded-2xl border border-blue-100 bg-blue-50/70 p-5">
          <h3 className="font-bold text-blue-950">
            Example: Making exercise a regular habit
          </h3>
          <p className="mt-3 leading-7 text-slate-700">
            Someone who keeps their walking shoes near the front door,
            chooses a regular walking time and begins with a short
            distance may find it easier to repeat the activity. The
            routine and supportive environment reduce the effort
            needed to get started.
          </p>
        </div>
      </section>

      {/* HOW LONG */}
      <section className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-blue-100 p-3 text-blue-700">
            <Clock size={23} />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            How Long Does It Take to Form a Habit?
          </h2>
        </div>

        <p className="leading-8 text-slate-700">
          There is no fixed number of days required to form a habit.
          The time depends on the behaviour, the individual, the
          environment and how consistently the action is repeated.
        </p>

        <div className="rounded-2xl border border-blue-100 bg-blue-50/70 p-5 sm:p-6">
          <h3 className="font-bold text-blue-950">
            What does research suggest?
          </h3>
          <p className="mt-3 leading-8 text-slate-700">
            A well-known 2010 study by Phillippa Lally and colleagues
            examined how everyday behaviours became automatic. The
            estimated median time was around 66 days, but individual
            estimates varied considerably.
          </p>

          <div className="mt-5 rounded-xl bg-white p-4">
            <p className="text-sm font-bold text-blue-800">
              Important research finding
            </p>
            <p className="mt-2 text-3xl font-bold text-slate-950">
              Around 66 days
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Median estimate in that particular study, not a universal
              deadline for everyone.
            </p>
          </div>
        </div>

        <p className="leading-8 text-slate-700">
          For example, remembering to drink water after waking up may
          become familiar more quickly than developing a demanding
          daily exercise routine. The complexity of the behaviour
          matters.
        </p>
      </section>

      {/* BUILDING HABITS */}
      <section id="building-habits" className="scroll-mt-24 space-y-6">
        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-emerald-100 p-3 text-emerald-700">
            <Footprints size={23} />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            How to Build Good Habits
          </h2>
        </div>

        <p className="leading-8 text-slate-700">
          A useful way to build a habit is to choose a small action,
          connect it to an existing routine and make it easy to repeat.
        </p>

        <div className="space-y-4">
          {buildingSteps.map((item, index) => (
            <div
              key={item.title}
              className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-sm font-bold text-emerald-800">
                {index + 1}
              </div>
              <div>
                <h3 className="font-bold text-slate-900">{item.title}</h3>
                <p className="mt-2 leading-7 text-slate-600">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Practical habit plan diagram */}
        <div className="rounded-3xl border border-emerald-100 bg-gradient-to-br from-emerald-50 to-white p-5 sm:p-7">
          <div className="flex items-center gap-2">
            <BookMarked className="text-emerald-700" size={22} />
            <h3 className="font-bold text-emerald-950">
              Example: Developing a reading habit
            </h3>
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl bg-white p-4 text-center shadow-sm">
              <Coffee className="mx-auto text-amber-600" size={28} />
              <p className="mt-3 text-xs font-bold uppercase tracking-wide text-slate-500">
                Existing routine
              </p>
              <p className="mt-1 font-bold text-slate-900">
                After dinner
              </p>
            </div>

            <div className="rounded-2xl bg-white p-4 text-center shadow-sm">
              <BookOpen className="mx-auto text-blue-600" size={28} />
              <p className="mt-3 text-xs font-bold uppercase tracking-wide text-slate-500">
                New action
              </p>
              <p className="mt-1 font-bold text-slate-900">
                Read two pages
              </p>
            </div>

            <div className="rounded-2xl bg-white p-4 text-center shadow-sm">
              <CheckCircle2 className="mx-auto text-emerald-600" size={28} />
              <p className="mt-3 text-xs font-bold uppercase tracking-wide text-slate-500">
                Immediate outcome
              </p>
              <p className="mt-1 font-bold text-slate-900">
                Track progress
              </p>
            </div>
          </div>

          <p className="mt-4 text-sm leading-7 text-slate-600">
            By connecting reading with an existing routine, the person
            creates a predictable opportunity to repeat the behaviour.
            Starting with two pages also makes the action manageable.
          </p>
        </div>
      </section>
<AdSlot />
      {/* CHANGING UNWANTED HABITS */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-rose-100 p-3 text-rose-700">
            <RefreshCw size={23} />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            How Can Unwanted Habits Be Changed?
          </h2>
        </div>

        <p className="leading-8 text-slate-700">
          Changing an unwanted habit often requires understanding what
          triggers the behaviour and making an alternative response
          easier to perform.
        </p>

        {/* Before and after diagram */}
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-rose-200 bg-rose-50/70 p-5">
            <h3 className="font-bold text-rose-900">
              Unwanted pattern
            </h3>

            <div className="mt-4 space-y-2">
              <div className="rounded-xl bg-white p-3 text-sm font-bold text-slate-800">
                Feeling bored while studying
              </div>
              <div className="flex justify-center">
                <ArrowRight className="rotate-90 text-rose-400" size={19} />
              </div>
              <div className="rounded-xl bg-white p-3 text-sm font-bold text-slate-800">
                Pick up the phone
              </div>
              <div className="flex justify-center">
                <ArrowRight className="rotate-90 text-rose-400" size={19} />
              </div>
              <div className="rounded-xl bg-white p-3 text-sm font-bold text-slate-800">
                Spend time scrolling
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-emerald-200 bg-emerald-50/70 p-5">
            <h3 className="font-bold text-emerald-900">
              Alternative pattern
            </h3>

            <div className="mt-4 space-y-2">
              <div className="rounded-xl bg-white p-3 text-sm font-bold text-slate-800">
                Feeling bored while studying
              </div>
              <div className="flex justify-center">
                <ArrowRight className="rotate-90 text-emerald-400" size={19} />
              </div>
              <div className="rounded-xl bg-white p-3 text-sm font-bold text-slate-800">
                Take a short movement break
              </div>
              <div className="flex justify-center">
                <ArrowRight className="rotate-90 text-emerald-400" size={19} />
              </div>
              <div className="rounded-xl bg-white p-3 text-sm font-bold text-slate-800">
                Return to studying
              </div>
            </div>
          </div>
        </div>

        <p className="leading-8 text-slate-700">
          For example, someone who repeatedly checks social media while
          studying can keep their phone out of reach and take a short
          planned break instead. This changes the environment and
          provides another response to the same situation.
        </p>

        <div className="rounded-2xl border border-indigo-100 bg-indigo-50/60 p-5">
          <h3 className="font-bold text-indigo-950">
            Four useful behaviour-change strategies
          </h3>
          <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-700">
            <li>• Identify the situations that trigger the unwanted behaviour.</li>
            <li>• Reduce reminders and temptations in the environment.</li>
            <li>• Choose a realistic alternative behaviour.</li>
            <li>• Practise the alternative response consistently.</li>
          </ul>
        </div>
      </section>

      {/* MISSING A DAY */}
      <section className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-amber-100 p-3 text-amber-700">
            <AlertCircle size={23} />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            Does Missing One Day Break a Habit?
          </h2>
        </div>

        <p className="leading-8 text-slate-700">
          No. Missing one planned repetition does not automatically
          erase a developing habit. Habit formation is gradual, and
          occasional interruptions are a normal part of everyday life.
        </p>

        <div className="rounded-2xl border border-amber-100 bg-amber-50 p-5 sm:p-6">
          <h3 className="font-bold text-amber-950">
            Example: Your daily walking routine
          </h3>
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <span className="rounded-lg bg-white px-3 py-2 text-sm font-bold text-emerald-700">
              Monday: Walk
            </span>
            <span className="rounded-lg bg-white px-3 py-2 text-sm font-bold text-emerald-700">
              Tuesday: Walk
            </span>
            <span className="rounded-lg bg-white px-3 py-2 text-sm font-bold text-rose-600">
              Wednesday: Missed
            </span>
            <span className="rounded-lg bg-white px-3 py-2 text-sm font-bold text-emerald-700">
              Thursday: Resume
            </span>
          </div>
          <p className="mt-4 leading-7 text-slate-700">
            If bad weather prevents a walk on Wednesday, resuming on
            Thursday is more useful than abandoning the routine because
            of one missed day.
          </p>
        </div>
      </section>

      {/* IMPORTANCE */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-indigo-100 p-3 text-indigo-700">
            <Sparkles size={23} />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            Why Is Habit Formation Important?
          </h2>
        </div>

        <p className="leading-8 text-slate-700">
          Habits influence how people use their time, respond to everyday
          situations and carry out regular activities. Once behaviours
          become more automatic, they can reduce the need to make the
          same decisions repeatedly.
        </p>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 p-5">
            <BookOpen className="text-blue-600" size={25} />
            <h3 className="mt-3 font-bold text-slate-900">For students</h3>
            <p className="mt-2 leading-7 text-slate-600">
              Regular revision can support learning and reduce dependence
              on last-minute preparation.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 p-5">
            <Dumbbell className="text-emerald-600" size={25} />
            <h3 className="mt-3 font-bold text-slate-900">For health</h3>
            <p className="mt-2 leading-7 text-slate-600">
              Regular physical activity and a consistent sleep routine
              can support healthy living.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 p-5">
            <Settings className="text-violet-600" size={25} />
            <h3 className="mt-3 font-bold text-slate-900">At work</h3>
            <p className="mt-2 leading-7 text-slate-600">
              Organising tasks at the beginning of the day can make
              routine responsibilities easier to manage.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 p-5">
            <Sun className="text-amber-600" size={25} />
            <h3 className="mt-3 font-bold text-slate-900">In daily life</h3>
            <p className="mt-2 leading-7 text-slate-600">
              Preparing belongings the night before can make the next
              morning more organised.
            </p>
          </div>
        </div>
      </section>

      {/* MISCONCEPTIONS */}
      <section className="space-y-5">
        <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
          Common Misconceptions About Habits
        </h2>

        <div className="space-y-3">
          {[
            {
              wrong: "Every habit takes 21 days to form.",
              correct:
                "There is no universal timeline. The time varies with the behaviour, person and circumstances.",
            },
            {
              wrong: "Repetition always makes an action a habit.",
              correct:
                "Repetition helps, but automaticity also depends on context, learning and the nature of the behaviour.",
            },
            {
              wrong: "You must always feel motivated.",
              correct:
                "Motivation can help people begin, but a stable routine and supportive environment can make repetition easier.",
            },
            {
              wrong: "Missing one day means starting from zero.",
              correct:
                "An occasional interruption does not automatically undo progress. Returning to the behaviour is important.",
            },
          ].map((item) => (
            <div
              key={item.wrong}
              className="rounded-2xl border border-slate-200 bg-white p-5"
            >
              <p className="font-bold text-rose-700">{item.wrong}</p>
              <p className="mt-2 leading-7 text-slate-600">
                {item.correct}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CONCLUSION */}
      <section className="rounded-3xl border border-indigo-100 bg-gradient-to-br from-indigo-50 to-blue-50 p-6 sm:p-9">
        <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
          Understanding Habit Formation
        </h2>
        <p className="mt-4 leading-8 text-slate-700">
          Habit formation explains how repeated behaviours become
          increasingly automatic in familiar situations. Cues, routines,
          rewards, repetition and the surrounding environment all
          influence this process.
        </p>
        <p className="mt-3 leading-8 text-slate-700">
          Understanding how habits develop helps us build useful routines,
          recognise unwanted patterns and make realistic changes to
          everyday behaviour. Small actions, repeated consistently,
          can gradually become an important part of daily life.
        </p>
      </section>
<AdSlot />
      {/* FAQ */}
      <section className="space-y-5">
        <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {[
            {
              q: "What is habit formation in psychology?",
              a: "Habit formation is the process through which repeated behaviours become increasingly automatic in response to familiar cues or situations.",
            },
            {
              q: "What are the three parts of a habit loop?",
              a: "A commonly used model describes three parts: cue, routine and reward. The cue prompts the behaviour, the routine is the action, and the reward is the outcome that may encourage repetition.",
            },
            {
              q: "How many days does it take to form a habit?",
              a: "There is no fixed number. Research has found considerable variation depending on the person, behaviour and circumstances.",
            },
            {
              q: "Can unwanted habits be changed?",
              a: "Yes. Identifying triggers, changing the environment and practising an alternative response can help people change unwanted behavioural patterns.",
            },
            {
              q: "Does missing a day break a habit?",
              a: "No. Missing one repetition does not automatically erase a habit. Returning to the behaviour and maintaining consistency over time are more important.",
            },
          ].map((item) => (
            <details
              key={item.q}
              className="group rounded-2xl border border-slate-200 bg-white p-5"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-slate-900">
                {item.q}
                <span className="text-indigo-600 transition group-open:rotate-180">
                  <ArrowRight className="rotate-90" size={19} />
                </span>
              </summary>
              <p className="mt-4 leading-7 text-slate-600">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
}
