
import Link from "next/link";
import {
  Brain,
  Target,
  Trophy,
  Heart,
  Activity,
  Users,
  ShieldCheck,
  Eye,
  Lightbulb,
  ArrowRight,
  CheckCircle2,
  Zap,
  Mountain,
  Timer,
  Sparkles,
  RefreshCw,
  Flag,
  Goal,
  Dumbbell,
  BookOpen,
  CircleHelp,
  Footprints,
  TrendingUp,
} from "lucide-react";
import AdSlot from "../../../components/AdSlot";

export const metadata = {
  title: "Sports Psychology | Meaning, Principles, Techniques and Applications",
  description:
    "Understand sports psychology, its principles, motivation, mental toughness, concentration, competition anxiety, team dynamics and psychological techniques used to improve athletic performance.",
};

const areas = [
  {
    icon: Target,
    title: "Motivation",
    color: "blue",
    description:
      "Understanding what drives athletes to practise, compete, improve and continue working towards their goals.",
    example:
      "A runner follows a training schedule because they want to improve their personal best, not just win a medal.",
  },
  {
    icon: ShieldCheck,
    title: "Confidence",
    color: "indigo",
    description:
      "Developing belief in one's abilities and preparing mentally to handle difficult sporting situations.",
    example:
      "A batter trusts their preparation even after losing their wicket in previous matches.",
  },
  {
    icon: Eye,
    title: "Concentration",
    color: "cyan",
    description:
      "Maintaining attention on relevant information while ignoring distractions during performance.",
    example:
      "A basketball player focuses on the basket rather than the noise of the crowd.",
  },
  {
    icon: Heart,
    title: "Emotional Control",
    color: "rose",
    description:
      "Recognising and managing emotions such as frustration, excitement, disappointment and anger.",
    example:
      "A tennis player remains composed after losing an important point.",
  },
  {
    icon: Activity,
    title: "Anxiety Management",
    color: "amber",
    description:
      "Understanding competitive nervousness and learning to manage physical and mental stress.",
    example:
      "A gymnast uses controlled breathing before beginning a competition routine.",
  },
  {
    icon: Users,
    title: "Team Dynamics",
    color: "violet",
    description:
      "Improving communication, trust, cooperation, leadership and relationships between team members.",
    example:
      "A football team coordinates its movements through communication and shared responsibilities.",
  },
];

const techniques = [
  {
    number: "01",
    title: "Goal Setting",
    description:
      "Establishing clear, measurable and realistic performance targets.",
    example:
      "A swimmer aims to reduce their 100-metre time by two seconds over a training period.",
  },
  {
    number: "02",
    title: "Visualization",
    description:
      "Mentally rehearsing a sporting action or performance before carrying it out.",
    example:
      "A high jumper mentally rehearses the approach, take-off and landing before attempting a jump.",
  },
  {
    number: "03",
    title: "Positive Self-Talk",
    description:
      "Using constructive internal statements to maintain confidence and direct attention.",
    example:
      "A player tells themselves, 'Stay focused and follow the technique' before a penalty kick.",
  },
  {
    number: "04",
    title: "Controlled Breathing",
    description:
      "Using deliberate breathing patterns to manage arousal and physical tension.",
    example:
      "A shooter takes slow, controlled breaths before aiming.",
  },
  {
    number: "05",
    title: "Pre-Performance Routine",
    description:
      "Following a consistent sequence of mental and physical actions before performing.",
    example:
      "A basketball player follows the same routine before every free throw.",
  },
  {
    number: "06",
    title: "Reflection and Review",
    description:
      "Reviewing performance to identify strengths, mistakes and areas for improvement.",
    example:
      "A cricketer analyses shot selection after a match to improve future decisions.",
  },
];

const applications = [
  {
    sport: "Cricket",
    icon: Trophy,
    challenge: "Handling pressure during the final overs.",
    application:
      "Concentration, decision-making, confidence and emotional control help players execute their plans under pressure.",
  },
  {
    sport: "Football",
    icon: Footprints,
    challenge: "Maintaining coordination and focus throughout a match.",
    application:
      "Communication, teamwork, tactical awareness and recovery from mistakes support collective performance.",
  },
  {
    sport: "Tennis",
    icon: Target,
    challenge: "Competing individually and recovering after losing points.",
    application:
      "Self-confidence, concentration, emotional regulation and consistent routines help maintain performance.",
  },
  {
    sport: "Athletics",
    icon: Activity,
    challenge: "Achieving consistent results in physically demanding events.",
    application:
      "Goal setting, motivation, mental rehearsal and attention control support training and competition.",
  },
  {
    sport: "Basketball",
    icon: Zap,
    challenge: "Making quick decisions in a constantly changing game.",
    application:
      "Attention, confidence, communication and rapid decision-making help players respond effectively.",
  },
  {
    sport: "Swimming",
    icon: Timer,
    challenge: "Maintaining discipline during repetitive training.",
    application:
      "Intrinsic motivation, performance goals and mental preparation help swimmers remain consistent.",
  },
];

const faqs = [
  {
    q: "What is the main purpose of sports psychology?",
    a: "Its main purpose is to understand and improve the psychological factors associated with sports participation and performance, while also supporting athletes' psychological well-being.",
  },
  {
    q: "Is sports psychology only for professional athletes?",
    a: "No. Amateur athletes, school students, fitness enthusiasts, coaches and recreational sports participants can all benefit from psychological principles.",
  },
  {
    q: "Does sports psychology improve physical strength?",
    a: "It does not directly increase muscular strength. However, psychological skills can help athletes train consistently, maintain motivation and use their physical abilities more effectively.",
  },
  {
    q: "What is mental toughness in sports?",
    a: "Mental toughness generally refers to psychological qualities that help athletes remain committed, focused and resilient when facing pressure, setbacks and challenges.",
  },
  {
    q: "What is the difference between sports psychology and exercise psychology?",
    a: "Sports psychology often examines psychological factors in sporting performance and participation. Exercise psychology focuses more broadly on the psychological aspects of physical activity, exercise behaviour and well-being.",
  },
  {
    q: "Can sports psychology reduce competition anxiety?",
    a: "Psychological techniques such as controlled breathing, preparation routines, cognitive strategies and mental rehearsal can help athletes manage competition anxiety.",
  },
];

function SectionHeading({ eyebrow, title, description, dark = false }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      {eyebrow && (
        <p className={`mb-3 text-sm font-bold uppercase tracking-[0.18em] ${
          dark ? "text-blue-300" : "text-blue-600"
        }`}>
          {eyebrow}
        </p>
      )}
      <h2 className={`text-3xl font-bold tracking-tight sm:text-4xl ${
        dark ? "text-white" : "text-slate-900"
      }`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-base leading-8 ${
          dark ? "text-blue-100/80" : "text-slate-600"
        }`}>
          {description}
        </p>
      )}
    </div>
  );
}

function InfoCard({ icon: Icon, title, children }) {
  return (
    <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
        <Icon size={24} />
      </div>
      <h3 className="mb-3 text-lg font-bold text-slate-900">{title}</h3>
      <div className="text-sm leading-7 text-slate-600">{children}</div>
    </div>
  );
}

function ExampleBox({ children }) {
  return (
    <div className="mt-4 rounded-xl border border-blue-100 bg-blue-50/70 p-4">
      <p className="mb-1 text-xs font-bold uppercase tracking-wider text-blue-700">
        Practical example
      </p>
      <p className="text-sm leading-7 text-slate-700">{children}</p>
    </div>
  );
}

export default function SportsPsychologyPage() {
  return (
    <main className="overflow-hidden bg-white text-slate-800">

      {/* HERO */}
      <section className="relative bg-gradient-to-br from-white via-blue-50 to-blue-100/80">
        <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-blue-200/40 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-sky-200/40 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:py-28">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-sm font-bold text-blue-700 shadow-sm">
              <Brain size={17} />
              Psychology · Performance · Human Behaviour
            </div>

            <h1 className="text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Sports Psychology
              <span className="mt-2 block text-blue-600">
                The Science of the Athletic Mind
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600">
              Physical ability is only one part of sporting performance.
              Motivation, concentration, confidence and emotional control
              also influence how athletes train, compete and respond to
              challenges.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#understanding"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-bold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
              >
                Explore the Topic <ArrowRight size={18} />
              </a>
              <a
                href="#techniques"
                className="rounded-xl border border-blue-200 bg-white px-6 py-3 font-bold text-blue-700 transition hover:bg-blue-50"
              >
                Learn Techniques
              </a>
            </div>
          </div>

          {/* CSS-BASED HERO VISUAL */}
          <div className="relative mx-auto w-full max-w-lg">
            <div className="rounded-[2rem] border border-blue-100 bg-white/90 p-5 shadow-2xl shadow-blue-200/50 sm:p-8">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-blue-600">
                    Performance model
                  </p>
                  <p className="mt-1 text-xl font-bold text-slate-900">
                    Mind + Body
                  </p>
                </div>
                <div className="rounded-xl bg-blue-50 p-3 text-blue-600">
                  <Brain size={30} />
                </div>
              </div>

              <div className="rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 p-6 text-center text-white">
                <Brain className="mx-auto mb-3" size={42} />
                <h3 className="text-2xl font-bold">Mental Skills</h3>
                <p className="mt-2 text-sm text-blue-100">
                  Focus · Confidence · Motivation
                </p>
              </div>

              <div className="mx-auto h-8 w-0.5 bg-blue-300" />

              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-blue-100 bg-blue-50 p-4 text-center">
                  <Activity className="mx-auto mb-2 text-blue-600" />
                  <p className="font-bold text-slate-800">Physical Ability</p>
                  <p className="mt-1 text-xs text-slate-500">
                    Strength · Skill
                  </p>
                </div>
                <div className="rounded-xl border border-blue-100 bg-blue-50 p-4 text-center">
                  <Heart className="mx-auto mb-2 text-blue-600" />
                  <p className="font-bold text-slate-800">Emotional Control</p>
                  <p className="mt-1 text-xs text-slate-500">
                    Calmness · Resilience
                  </p>
                </div>
              </div>

              <div className="mx-auto h-8 w-0.5 bg-blue-300" />

              <div className="rounded-xl border border-blue-200 bg-gradient-to-r from-sky-50 to-blue-100 p-4 text-center">
                <Trophy className="mx-auto mb-2 text-blue-700" size={30} />
                <p className="font-bold text-blue-900">
                  Sporting Performance
                </p>
                <p className="mt-1 text-xs text-blue-700">
                  Effective use of physical and psychological abilities
                </p>
              </div>
            </div>
            <div className="absolute -right-4 top-16 rounded-xl border border-blue-100 bg-white p-3 shadow-lg sm:-right-7">
              <Target className="text-blue-600" size={27} />
            </div>
            <div className="absolute -bottom-5 -left-4 rounded-xl border border-blue-100 bg-white p-3 shadow-lg sm:-left-7">
              <Zap className="text-blue-600" size={27} />
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section id="understanding" className="px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <SectionHeading
            eyebrow="Understanding the subject"
            title="What Is Sports Psychology?"
            description="Sports psychology is a branch of psychology that examines how psychological factors influence sports participation, athletic performance and the experiences of people involved in physical activity."
          />

          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl bg-gradient-to-br from-blue-50 to-white p-7">
              <h3 className="mb-4 text-xl font-bold text-slate-900">
                The psychological side of sports
              </h3>
              <p className="leading-8 text-slate-600">
                Two athletes may have similar physical strength, technical
                ability and training. However, they may respond very
                differently when faced with pressure, setbacks or important
                decisions.
              </p>
              <p className="mt-4 leading-8 text-slate-600">
                One athlete may remain focused after making a mistake,
                while another may become frustrated and lose concentration.
                Sports psychology studies these differences and develops
                ways to support better psychological functioning.
              </p>
            </div>

            <div className="rounded-2xl border border-blue-100 bg-white p-7 shadow-sm">
              <h3 className="mb-4 text-xl font-bold text-slate-900">
                What does it study?
              </h3>
              <ul className="space-y-4">
                {[
                  "Why athletes participate and remain motivated.",
                  "How confidence influences performance.",
                  "Why pressure can affect concentration.",
                  "How emotions influence decisions.",
                  "How teams develop trust and cooperation.",
                  "How psychological skills support recovery from setbacks.",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-7 text-slate-600">
                    <CheckCircle2 className="mt-1 shrink-0 text-blue-600" size={19} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border-l-4 border-blue-600 bg-blue-50 p-6">
            <p className="font-bold text-blue-900">Important understanding</p>
            <p className="mt-2 leading-8 text-slate-700">
              Sports psychology does not replace physical training,
              nutrition, technical coaching or medical care. It complements
              these areas by addressing psychological factors that influence
              performance and well-being.
            </p>
          </div>
        </div>
      </section>
<AdSlot />
      {/* PERFORMANCE DIAGRAM */}
      <section className="bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-950 px-5 py-20 text-white sm:px-8">
        <div className="mx-auto max-w-5xl">
          <SectionHeading
            dark
            eyebrow="Conceptual diagram"
            title="How Does Sports Psychology Influence Performance?"
            description="Psychological skills interact with physical preparation and the demands of competition. They do not operate independently."
          />

          <div className="mx-auto max-w-3xl rounded-3xl border border-white/20 bg-white/10 p-5 backdrop-blur-sm sm:p-8">
            <div className="rounded-2xl bg-white p-5 text-center text-slate-900">
              <Brain className="mx-auto mb-2 text-blue-600" size={34} />
              <p className="font-bold">Psychological Factors</p>
              <p className="mt-1 text-sm text-slate-500">
                Motivation · Confidence · Focus · Emotional regulation
              </p>
            </div>

            <div className="mx-auto h-9 w-0.5 bg-blue-200" />

            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-white/20 bg-blue-500/30 p-4 text-center">
                <Activity className="mx-auto mb-2" size={25} />
                <p className="font-bold">Physical Preparation</p>
                <p className="mt-2 text-xs text-blue-100">
                  Fitness · Strength · Skills
                </p>
              </div>
              <div className="rounded-xl border border-white/20 bg-blue-500/30 p-4 text-center">
                <Flag className="mx-auto mb-2" size={25} />
                <p className="font-bold">Competition Demands</p>
                <p className="mt-2 text-xs text-blue-100">
                  Pressure · Opponents · Decisions
                </p>
              </div>
            </div>

            <div className="mx-auto h-9 w-0.5 bg-blue-200" />

            <div className="rounded-2xl border border-blue-200 bg-gradient-to-r from-sky-400 to-blue-400 p-5 text-center text-blue-950">
              <Target className="mx-auto mb-2" size={32} />
              <p className="text-lg font-bold">Performance During Sport</p>
              <p className="mt-1 text-sm">
                How effectively an athlete uses their abilities in a given situation
              </p>
            </div>

            <div className="mx-auto h-9 w-0.5 bg-blue-200" />

            <div className="rounded-2xl bg-white p-5 text-center text-slate-900">
              <TrendingUp className="mx-auto mb-2 text-blue-600" size={30} />
              <p className="font-bold">Learning and Improvement</p>
              <p className="mt-1 text-sm text-slate-500">
                Feedback · Reflection · Future preparation
              </p>
            </div>
          </div>

          <p className="mx-auto mt-6 max-w-3xl text-center text-sm leading-7 text-blue-100">
            This is a simplified conceptual model. Actual sporting performance
            is influenced by many interacting personal, environmental and
            physical factors.
          </p>
        </div>
      </section>

      {/* MAJOR AREAS */}
      <section className="px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Core dimensions"
            title="Major Areas of Sports Psychology"
            description="Sports psychology covers several connected areas that influence how athletes think, feel, behave and perform."
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {areas.map((area) => (
              <InfoCard key={area.title} icon={area.icon} title={area.title}>
                <p>{area.description}</p>
                <ExampleBox>{area.example}</ExampleBox>
              </InfoCard>
            ))}
          </div>
        </div>
      </section>

      {/* MOTIVATION */}
      <section className="bg-gradient-to-br from-white via-blue-50/70 to-white px-5 py-20 sm:px-8">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-blue-600">
              01 · The driving force
            </p>
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Motivation in Sports
            </h2>
            <p className="mt-5 leading-8 text-slate-600">
              Motivation is the force that initiates, directs and sustains
              an athlete's effort. It influences whether someone begins
              training, maintains discipline and continues working when
              improvement becomes difficult.
            </p>

            <h3 className="mt-7 text-xl font-bold text-slate-900">
              Two important types of motivation
            </h3>

            <div className="mt-5 space-y-4">
              <div className="rounded-xl border border-blue-100 bg-white p-5 shadow-sm">
                <h4 className="font-bold text-blue-700">
                  Intrinsic Motivation
                </h4>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  Participating because the activity itself is enjoyable,
                  interesting or personally satisfying.
                </p>
                <ExampleBox>
                  A person plays badminton because they genuinely enjoy
                  learning and improving the game.
                </ExampleBox>
              </div>

              <div className="rounded-xl border border-blue-100 bg-white p-5 shadow-sm">
                <h4 className="font-bold text-indigo-700">
                  Extrinsic Motivation
                </h4>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  Participating to achieve an external reward, recognition,
                  qualification or other outcome.
                </p>
                <ExampleBox>
                  An athlete trains to win a championship medal or receive
                  a scholarship.
                </ExampleBox>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-blue-100 bg-white p-7 shadow-xl shadow-blue-100/50">
            <h3 className="mb-6 text-center text-xl font-bold text-slate-900">
              What Keeps an Athlete Motivated?
            </h3>
            <div className="space-y-3">
              {[
                ["Personal Interest", "Enjoyment and curiosity"],
                ["Clear Goals", "A meaningful direction"],
                ["Progress", "Visible improvement"],
                ["Support", "Encouragement and belonging"],
                ["Recognition", "Acknowledgement of achievement"],
              ].map(([title, desc], index) => (
                <div key={title} className="flex items-center gap-4 rounded-xl bg-blue-50 p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
                    {index + 1}
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">{title}</p>
                    <p className="text-sm text-slate-500">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-5 text-center text-xs leading-6 text-slate-500">
              These factors can work together. Motivation is not necessarily
              driven by one source alone.
            </p>
          </div>
        </div>
      </section>

      {/* CONFIDENCE AND TOUGHNESS */}
      <section className="px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Psychological resilience"
            title="Confidence and Mental Toughness"
            description="Athletes encounter mistakes, difficult opponents, injuries, setbacks and pressure. Their psychological responses influence how they deal with these challenges."
          />

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-7">
              <ShieldCheck className="mb-5 text-blue-600" size={38} />
              <h3 className="text-2xl font-bold text-slate-900">
                Self-Confidence
              </h3>
              <p className="mt-4 leading-8 text-slate-600">
                Self-confidence is an athlete's belief in their ability
                to perform a particular task or meet a sporting challenge.
              </p>
              <ExampleBox>
                A football player confidently attempts a penalty because
                they have practised the technique and trust their preparation.
              </ExampleBox>
            </div>

            <div className="rounded-3xl border border-blue-100 bg-gradient-to-br from-indigo-50 to-white p-7">
              <Mountain className="mb-5 text-indigo-600" size={38} />
              <h3 className="text-2xl font-bold text-slate-900">
                Mental Toughness
              </h3>
              <p className="mt-4 leading-8 text-slate-600">
                Mental toughness describes psychological qualities associated
                with maintaining effort, commitment and effective responses
                when facing sporting difficulties.
              </p>
              <ExampleBox>
                A marathon runner maintains a realistic race strategy even
                when fatigue and discomfort increase.
              </ExampleBox>
            </div>
          </div>

          <div className="mt-8 overflow-hidden rounded-2xl border border-blue-100">
            <div className="grid md:grid-cols-2">
              <div className="bg-blue-600 p-6 text-white">
                <p className="text-sm font-bold uppercase tracking-widest text-blue-100">
                  Confidence
                </p>
                <h3 className="mt-2 text-xl font-bold">
                  Belief in Ability
                </h3>
                <p className="mt-3 text-sm leading-7 text-blue-50">
                  Can I perform this skill or meet this challenge?
                </p>
              </div>
              <div className="bg-indigo-50 p-6">
                <p className="text-sm font-bold uppercase tracking-widest text-indigo-600">
                  Mental Toughness
                </p>
                <h3 className="mt-2 text-xl font-bold text-slate-900">
                  Response to Difficulty
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  How do I respond when the situation becomes difficult?
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
<AdSlot />
      {/* ANXIETY */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-sky-50 px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Pressure and performance"
            title="Competition Anxiety and Stress Management"
            description="Important competitions can create nervousness, worry and physical tension. Understanding these responses helps athletes prepare for demanding situations."
          />

          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h3 className="mb-5 text-xl font-bold text-slate-900">
                How anxiety may appear
              </h3>
              <div className="space-y-3">
                {[
                  ["Physical Symptoms", "Increased heart rate, sweating, muscle tension and rapid breathing."],
                  ["Mental Symptoms", "Worry, negative thoughts, fear of failure and difficulty concentrating."],
                  ["Behavioural Effects", "Hesitation, rushed decisions or changes in normal performance routines."],
                ].map(([title, desc]) => (
                  <div key={title} className="rounded-xl border border-blue-100 bg-white p-5">
                    <h4 className="font-bold text-slate-900">{title}</h4>
                    <p className="mt-2 text-sm leading-7 text-slate-600">{desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl bg-gradient-to-br from-blue-700 to-indigo-950 p-7 text-white">
              <h3 className="text-2xl font-bold">
                Managing Competition Anxiety
              </h3>
              <div className="mt-7 space-y-5">
                {[
                  ["Controlled Breathing", "Use steady breathing to reduce excessive physical tension."],
                  ["Mental Preparation", "Rehearse the task and prepare for possible situations."],
                  ["Positive Self-Talk", "Replace unhelpful thoughts with realistic and constructive instructions."],
                  ["Consistent Routines", "Follow familiar preparation steps before performing."],
                  ["Focus on the Process", "Concentrate on controllable actions rather than only the final result."],
                ].map(([title, desc]) => (
                  <div key={title} className="flex gap-4">
                    <CheckCircle2 className="mt-1 shrink-0 text-blue-300" size={21} />
                    <div>
                      <h4 className="font-bold">{title}</h4>
                      <p className="mt-1 text-sm leading-7 text-blue-100">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-blue-200 bg-white p-6">
            <h3 className="font-bold text-slate-900">
              Important: Is all anxiety harmful?
            </h3>
            <p className="mt-2 leading-8 text-slate-600">
              No. Some athletes experience nervousness as excitement or
              readiness. The effect of anxiety depends on its intensity,
              interpretation, individual characteristics and the sporting
              situation. The objective is not necessarily to eliminate
              nervousness but to manage it effectively.
            </p>
          </div>
        </div>
      </section>

      {/* CONCENTRATION */}
      <section className="px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Attention and awareness"
            title="Concentration in Sports"
            description="Concentration is the ability to direct and maintain attention on information that is important for a sporting task."
          />

          <div className="grid items-center gap-10 md:grid-cols-2">
            <div className="rounded-3xl border border-blue-100 bg-blue-50 p-7">
              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <Eye className="mx-auto text-blue-600" size={42} />
                <h3 className="mt-4 text-center text-xl font-bold text-slate-900">
                  Attention Filter
                </h3>
                <div className="mt-6 space-y-3">
                  <div className="rounded-xl border border-green-200 bg-green-50 p-4">
                    <p className="font-bold text-green-800">Relevant Information</p>
                    <p className="mt-1 text-sm text-green-700">
                      Ball movement, opponent position, timing and technique.
                    </p>
                  </div>
                  <div className="rounded-xl border border-red-100 bg-red-50 p-4">
                    <p className="font-bold text-red-800">Potential Distractions</p>
                    <p className="mt-1 text-sm text-red-700">
                      Crowd noise, unrelated thoughts and previous mistakes.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-900">
                Why concentration matters
              </h3>
              <p className="mt-4 leading-8 text-slate-600">
                Many sports require athletes to process information quickly.
                A small lapse in attention can affect timing, accuracy,
                tactical decisions and coordination.
              </p>
              <div className="mt-6 space-y-4">
                <div className="flex gap-3">
                  <CheckCircle2 className="mt-1 shrink-0 text-blue-600" />
                  <p className="text-sm leading-7 text-slate-600">
                    Helps athletes respond to changing situations.
                  </p>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="mt-1 shrink-0 text-blue-600" />
                  <p className="text-sm leading-7 text-slate-600">
                    Supports accurate execution of technical skills.
                  </p>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="mt-1 shrink-0 text-blue-600" />
                  <p className="text-sm leading-7 text-slate-600">
                    Helps reduce errors caused by irrelevant distractions.
                  </p>
                </div>
              </div>
              <ExampleBox>
                A goalkeeper must focus on the ball, the striker's movement
                and the developing situation rather than being distracted
                by the crowd.
              </ExampleBox>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM PSYCHOLOGY */}
      <section className="bg-gradient-to-br from-white via-blue-50 to-white px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Collective performance"
            title="Team Sports Psychology"
            description="In team sports, performance depends not only on individual ability but also on how players communicate, cooperate and coordinate their efforts."
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <InfoCard icon={Users} title="Team Cohesion">
              The sense of unity and connection that helps team members work
              towards shared objectives.
            </InfoCard>
            <InfoCard icon={Heart} title="Trust">
              Confidence in teammates' abilities, intentions and reliability.
            </InfoCard>
            <InfoCard icon={Lightbulb} title="Communication">
              Sharing information, instructions and feedback during training
              and competition.
            </InfoCard>
            <InfoCard icon={Flag} title="Leadership">
              Guiding, motivating and supporting team members towards common goals.
            </InfoCard>
            <InfoCard icon={RefreshCw} title="Conflict Management">
              Addressing disagreements constructively without damaging team relationships.
            </InfoCard>
            <InfoCard icon={Target} title="Shared Goals">
              Creating a common understanding of the team's priorities and responsibilities.
            </InfoCard>
          </div>

          <div className="mt-8 rounded-2xl border border-blue-100 bg-white p-7 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900">
              Example: Why teamwork matters in football
            </h3>
            <p className="mt-3 leading-8 text-slate-600">
              A football team may have several technically gifted players.
              However, if players do not communicate, trust one another or
              understand their roles, the team may struggle to perform
              effectively. Team psychology helps explain these collective
              behaviours.
            </p>
          </div>
        </div>
      </section>
<AdSlot />
      {/* GOAL SETTING */}
      <section className="px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Planning improvement"
            title="Goal Setting in Sports"
            description="Goals give athletes direction, help organise training and provide a way to evaluate progress."
          />

          <div className="grid gap-6 md:grid-cols-3">
            <InfoCard icon={Trophy} title="Outcome Goals">
              Focus on the final result, such as winning a tournament or
              finishing first in a race.
            </InfoCard>
            <InfoCard icon={TrendingUp} title="Performance Goals">
              Focus on personal standards, such as improving running time
              or increasing shooting accuracy.
            </InfoCard>
            <InfoCard icon={Dumbbell} title="Process Goals">
              Focus on specific actions and behaviours, such as maintaining
              correct technique during training.
            </InfoCard>
          </div>

          <div className="mt-8 rounded-3xl bg-gradient-to-br from-blue-700 to-indigo-950 p-7 text-white">
            <h3 className="text-2xl font-bold">Example: A swimmer's goal plan</h3>
            <div className="mt-7 grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl bg-white/10 p-5">
                <p className="text-sm font-bold text-blue-200">Outcome</p>
                <p className="mt-3 font-bold">Win a swimming event</p>
              </div>
              <div className="rounded-xl bg-white/10 p-5">
                <p className="text-sm font-bold text-blue-200">Performance</p>
                <p className="mt-3 font-bold">Improve personal race time</p>
              </div>
              <div className="rounded-xl bg-white/10 p-5">
                <p className="text-sm font-bold text-blue-200">Process</p>
                <p className="mt-3 font-bold">Practise technique consistently</p>
              </div>
            </div>
            <p className="mt-6 text-sm leading-7 text-blue-100">
              Process and performance goals are especially useful because
              they direct attention towards actions an athlete can influence.
              Outcome goals can still provide an important long-term direction.
            </p>
          </div>
        </div>
      </section>

      {/* TECHNIQUES */}
      <section id="techniques" className="bg-gradient-to-br from-blue-50 via-white to-blue-50 px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Practical sports psychology"
            title="Psychological Techniques Used by Athletes"
            description="Sports psychologists and coaches use different psychological strategies to help athletes prepare, manage challenges and develop effective performance habits."
          />

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {techniques.map((item) => (
              <div key={item.number} className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
                <p className="text-3xl font-bold text-blue-200">{item.number}</p>
                <h3 className="mt-3 text-xl font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>
                <ExampleBox>{item.example}</ExampleBox>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPORTS APPLICATIONS */}
      <section className="px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Real-world applications"
            title="Sports Psychology Across Different Sports"
            description="The psychological demands of each sport differ. The skills required depend on the nature of the activity, competition format and individual responsibilities."
          />

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {applications.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.sport} className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="rounded-xl bg-blue-50 p-3 text-blue-600">
                      <Icon size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">
                      {item.sport}
                    </h3>
                  </div>
                  <p className="text-sm font-bold text-blue-700">
                    Psychological challenge
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    {item.challenge}
                  </p>
                  <div className="mt-4 border-t border-blue-100 pt-4">
                    <p className="text-sm font-bold text-slate-900">
                      Psychological application
                    </p>
                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      {item.application}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
<AdSlot />
      {/* MISCONCEPTIONS */}
      <section className="bg-gradient-to-br from-blue-50 to-white px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <SectionHeading
            eyebrow="Understanding correctly"
            title="Common Misconceptions About Sports Psychology"
            description="Sports psychology is often misunderstood as simply thinking positively or motivating athletes. Its actual scope is much broader."
          />

          <div className="space-y-4">
            {[
              ["It is only about winning.", "It also examines participation, learning, well-being, motivation and the quality of sporting experiences."],
              ["Only weak athletes need psychological support.", "Athletes at every level can benefit from psychological skills and professional support."],
              ["Mental toughness means never showing emotions.", "It involves responding constructively to challenges, not suppressing every emotion."],
              ["Positive thinking guarantees success.", "Psychological skills support preparation and performance but cannot guarantee a particular result."],
              ["Sports psychology replaces physical training.", "It complements physical conditioning, technical development, nutrition and coaching."],
            ].map(([wrong, correct]) => (
              <div key={wrong} className="grid gap-3 rounded-2xl border border-blue-100 bg-white p-5 md:grid-cols-2">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-red-600">
                    Misconception
                  </p>
                  <p className="mt-2 font-bold text-slate-900">{wrong}</p>
                </div>
                <div className="md:border-l md:border-blue-100 md:pl-6">
                  <p className="text-xs font-bold uppercase tracking-widest text-green-700">
                    Correct understanding
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{correct}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-4xl">
          <SectionHeading
            eyebrow="Common questions"
            title="Frequently Asked Questions"
            description="Quick answers to important questions about sports psychology."
          />

          <div className="space-y-4">
            {faqs.map((item) => (
              <details key={item.q} className="group rounded-2xl border border-blue-100 bg-white p-5 shadow-sm open:bg-blue-50/40">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-slate-900">
                  {item.q}
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700 transition group-open:rotate-45">
                    <span className="text-xl">+</span>
                  </span>
                </summary>
                <p className="mt-4 border-t border-blue-100 pt-4 text-sm leading-8 text-slate-600">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* TAKEAWAYS */}
      <section className="bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-950 px-5 py-20 text-white sm:px-8">
        <div className="mx-auto max-w-5xl">
          <SectionHeading
            dark
            eyebrow="What to remember"
            title="Key Takeaways"
            description="The essential ideas to understand about sports psychology."
          />

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Sports psychology studies the relationship between psychological factors, sports participation and athletic performance.",
              "Motivation influences an athlete's willingness to begin and maintain effort.",
              "Confidence and mental toughness help athletes respond to challenges and setbacks.",
              "Concentration helps athletes focus on information relevant to performance.",
              "Anxiety management and emotional regulation support effective responses under pressure.",
              "Team cohesion, communication and trust influence collective sporting performance.",
              "Goal setting, visualization, self-talk and breathing are useful psychological techniques.",
              "Psychological preparation complements physical training and technical development.",
            ].map((item) => (
              <div key={item} className="flex gap-3 rounded-xl border border-white/15 bg-white/10 p-5">
                <CheckCircle2 className="mt-1 shrink-0 text-blue-300" size={20} />
                <p className="text-sm leading-7 text-blue-50">{item}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-white/20 bg-white/10 p-7 text-center">
            <Sparkles className="mx-auto mb-4 text-blue-200" size={30} />
            <h3 className="text-2xl font-bold">
              Performance Is More Than Physical Ability
            </h3>
            <p className="mx-auto mt-3 max-w-2xl leading-8 text-blue-100">
              Understanding the mind helps explain why athletes respond
              differently to the same challenges and how psychological
              preparation can support their development.
            </p>
          </div>
        </div>
      </section>

    
<AdSlot />
    </main>
  );
}
