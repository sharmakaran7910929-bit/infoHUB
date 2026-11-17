
export const metadata = {
  title: "Educational Psychology – Meaning, Theories, Learning & Applications | PriceTag HUB",
  description:
    "Understand educational psychology, learning theories, student motivation, memory, individual differences and practical applications in teaching with relatable examples.",
};

import {
  Brain,
  BookOpen,
  Users,
  Target,
  Lightbulb,
  GraduationCap,
  Heart,
  Eye,
  Puzzle,
  MessageCircle,
  ClipboardCheck,
  BarChart3,
  RefreshCw,
  UserRound,
  School,
  CheckCircle2,
  ArrowRight,
  BrainCircuit,
  Sparkles,
} from "lucide-react";
import AdSlot from "../../../components/AdSlot";

function SectionHeading({ icon: Icon, eyebrow, title, description }) {
  return (
    <div className="mb-5 text-left">
      <div className="mb-2 flex items-center gap-2 text-sm font-bold text-blue-700">
        <Icon size={17} />
        <span>{eyebrow}</span>
      </div>
      <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
        {title}
      </h2>
      {description && (
        <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
          {description}
        </p>
      )}
    </div>
  );
}

function InfoCard({ icon: Icon, title, children, color = "blue" }) {
  const styles = {
    blue: "bg-blue-50 text-blue-700",
    violet: "bg-violet-50 text-violet-700",
    cyan: "bg-cyan-50 text-cyan-700",
    amber: "bg-amber-50 text-amber-700",
    emerald: "bg-emerald-50 text-emerald-700",
    rose: "bg-rose-50 text-rose-700",
  };

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm text-left">
      <div className={`mb-3 flex h-10 w-10 items-center justify-center rounded-xl ${styles[color]}`}>
        <Icon size={20} />
      </div>
      <h3 className="mb-2 font-bold text-slate-900">{title}</h3>
      <div className="text-sm leading-6 text-slate-600">{children}</div>
    </div>
  );
}

function ExampleBox({ children }) {
  return (
    <div className="mt-4 rounded-xl border border-blue-100 bg-blue-50/70 p-4 text-left">
      <div className="mb-2 flex items-center gap-2 text-sm font-bold text-blue-800">
        <Lightbulb size={16} />
        Real-life example
      </div>
      <p className="text-sm leading-6 text-slate-700">{children}</p>
    </div>
  );
}

function LearningStep({ number, icon: Icon, title, children }) {
  return (
    <div className="flex gap-3 text-left">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
        <Icon size={19} />
      </div>
      <div className="min-w-0 flex-1 pb-5">
        <div className="mb-1 flex flex-wrap items-center gap-2">
          <span className="text-xs font-bold text-blue-600">STEP {number}</span>
          <h3 className="font-bold text-slate-900">{title}</h3>
        </div>
        <p className="text-sm leading-6 text-slate-600">{children}</p>
      </div>
    </div>
  );
}

export default function EducationalPsychologyPage() {
  return (
    <main className="mx-auto w-full max-w-5xl space-y-10 px-4 py-6 text-left sm:px-6 lg:px-8">

      {/* HERO */}
      <section className="rounded-2xl border border-blue-100 bg-gradient-to-br from-white via-blue-50 to-indigo-100 p-5 sm:p-7">
        <div className="grid items-center gap-6 md:grid-cols-[1.5fr_0.5fr]">
          <div className="text-left">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-3 py-1.5 text-xs font-bold text-blue-700">
              <GraduationCap size={15} />
              Psychology of Learning and Education
            </div>

            <h1 className="text-3xl font-bold leading-tight tracking-tight text-slate-950 sm:text-4xl">
              Educational Psychology
            </h1>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-700 sm:text-base">
              Why do some students understand a lesson immediately while
              others need more time? Why does encouragement improve learning?
              Educational psychology explores these questions by studying how
              people learn, think, develop and behave in educational settings.
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {["Learning", "Memory", "Motivation", "Student Development"].map((item) => (
                <span key={item} className="rounded-full border border-blue-200 bg-white px-3 py-1.5 text-xs font-bold text-blue-800">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="hidden justify-center md:flex">
            <div className="relative flex h-44 w-44 items-center justify-center rounded-full border border-blue-200 bg-white/70">
              <div className="absolute inset-4 rounded-full border-2 border-dashed border-blue-200" />
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-lg">
                <Brain size={42} />
              </div>
              <BookOpen className="absolute left-2 top-5 rounded-lg bg-white p-1 text-blue-700" size={30} />
              <Lightbulb className="absolute right-2 top-5 rounded-lg bg-white p-1 text-amber-600" size={30} />
              <Users className="absolute bottom-3 left-5 rounded-lg bg-white p-1 text-cyan-700" size={30} />
              <Target className="absolute bottom-3 right-5 rounded-lg bg-white p-1 text-emerald-700" size={30} />
            </div>
          </div>
        </div>
      </section>

      {/* MEANING */}
      <section>
        <SectionHeading
          icon={BookOpen}
          eyebrow="01 — BASIC UNDERSTANDING"
          title="What Is Educational Psychology?"
          description="Educational psychology is a branch of psychology that studies how people learn and how psychological principles can improve teaching and educational experiences."
        />

        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <p className="text-sm leading-7 text-slate-700">
            It examines the mental processes, emotions, abilities, behaviour
            and social experiences that influence learning. It also helps
            teachers understand why students learn differently and how
            teaching methods can be adapted to support them.
          </p>
          <ExampleBox>
            Imagine a teacher explaining fractions to a class. Some students
            understand through numbers, while others understand better when
            the teacher uses pictures of pizzas divided into equal pieces.
            Educational psychology helps explain these differences and guides
            the teacher in choosing effective teaching approaches.
          </ExampleBox>
        </div>
      </section>
<AdSlot />
      {/* LEARNING PROCESS DIAGRAM */}
      <section>
        <SectionHeading
          icon={BrainCircuit}
          eyebrow="02 — HOW LEARNING HAPPENS"
          title="The Educational Learning Process"
          description="Students receive information, process it, connect it with existing knowledge and use it in new situations."
        />

        <div className="rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-5">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-5 sm:items-start">
            {[
              { icon: Eye, title: "Attention", desc: "Focus on information", color: "text-blue-700", bg: "bg-blue-100" },
              { icon: Brain, title: "Understanding", desc: "Process new ideas", color: "text-violet-700", bg: "bg-violet-100" },
              { icon: RefreshCw, title: "Memory", desc: "Store and retain", color: "text-cyan-700", bg: "bg-cyan-100" },
              { icon: Puzzle, title: "Practice", desc: "Apply knowledge", color: "text-amber-700", bg: "bg-amber-100" },
              { icon: CheckCircle2, title: "Learning", desc: "Build competence", color: "text-emerald-700", bg: "bg-emerald-100" },
            ].map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.title} className="flex items-center gap-3 sm:flex-col sm:text-center">
                  <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${step.bg} ${step.color}`}>
                    <Icon size={23} />
                  </div>
                  <div className="text-left sm:text-center">
                    <h3 className="text-sm font-bold text-slate-900">{step.title}</h3>
                    <p className="text-xs text-slate-600">{step.desc}</p>
                  </div>
                  {index !== 4 && (
                    <ArrowRight className="ml-auto rotate-90 text-blue-400 sm:hidden" size={18} />
                  )}
                </div>
              );
            })}
          </div>
          <p className="mt-5 rounded-lg bg-white p-3 text-sm leading-6 text-slate-700">
            <strong className="text-blue-800">Remember:</strong> Learning is
            not always a straight sequence. Students may revisit information,
            practise repeatedly and correct misunderstandings before mastering
            a concept.
          </p>
        </div>
      </section>

      {/* OBJECTIVES */}
      <section>
        <SectionHeading
          icon={Target}
          eyebrow="03 — PURPOSE"
          title="Objectives of Educational Psychology"
          description="Its main purpose is to make learning more effective by understanding the learner and improving the educational environment."
        />

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <InfoCard icon={UserRound} title="Understand Learners">
            Study students' abilities, interests, needs and individual differences.
          </InfoCard>
          <InfoCard icon={Lightbulb} title="Improve Teaching" color="amber">
            Help teachers select suitable explanations, activities and teaching methods.
          </InfoCard>
          <InfoCard icon={Brain} title="Understand Learning" color="violet">
            Explain how attention, memory, thinking and experience influence learning.
          </InfoCard>
          <InfoCard icon={Heart} title="Support Motivation" color="rose">
            Understand what encourages students to participate and continue learning.
          </InfoCard>
          <InfoCard icon={ClipboardCheck} title="Evaluate Progress" color="emerald">
            Use assessments and feedback to identify strengths and learning difficulties.
          </InfoCard>
          <InfoCard icon={Users} title="Improve Classrooms" color="cyan">
            Encourage positive relationships, cooperation and a supportive learning environment.
          </InfoCard>
        </div>
      </section>
<AdSlot />
      {/* LEARNING THEORIES */}
      <section>
        <SectionHeading
          icon={Brain}
          eyebrow="04 — IMPORTANT THEORIES"
          title="Major Learning Theories"
          description="Learning theories explain how people acquire knowledge, develop skills and change their behaviour."
        />

        <div className="space-y-4">
          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <div className="flex items-start gap-3">
              <div className="rounded-xl bg-blue-100 p-3 text-blue-700"><RefreshCw size={22} /></div>
              <div>
                <h3 className="font-bold text-slate-900">1. Behaviourism</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Behaviourism focuses on observable behaviour and how it is
                  influenced by rewards, consequences and repeated experiences.
                </p>
              </div>
            </div>
            <ExampleBox>
              A teacher praises a student for completing homework regularly.
              This positive reinforcement may encourage the student to repeat
              that behaviour.
            </ExampleBox>
            <p className="mt-3 text-xs text-slate-500">
              Important psychologists: <strong>B. F. Skinner</strong> and <strong>John B. Watson</strong>.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <div className="flex items-start gap-3">
              <div className="rounded-xl bg-violet-100 p-3 text-violet-700"><Brain size={22} /></div>
              <div>
                <h3 className="font-bold text-slate-900">2. Cognitive Learning Theory</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  This theory focuses on mental processes such as attention,
                  perception, memory, reasoning and problem-solving.
                </p>
              </div>
            </div>
            <ExampleBox>
              A student remembers the planets by organizing their names into
              a meaningful sequence rather than memorizing unrelated words.
            </ExampleBox>
            <p className="mt-3 text-xs text-slate-500">
              Important contributor: <strong>Jean Piaget</strong>.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <div className="flex items-start gap-3">
              <div className="rounded-xl bg-emerald-100 p-3 text-emerald-700"><Puzzle size={22} /></div>
              <div>
                <h3 className="font-bold text-slate-900">3. Constructivism</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Constructivism suggests that learners actively build
                  knowledge by connecting new information with their existing
                  understanding and experiences.
                </p>
              </div>
            </div>
            <ExampleBox>
              Instead of simply telling students how plants grow, a teacher
              asks them to grow seeds, observe the changes and explain what
              they discover.
            </ExampleBox>
            <p className="mt-3 text-xs text-slate-500">
              Important contributors: <strong>Jean Piaget</strong> and <strong>Lev Vygotsky</strong>.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <div className="flex items-start gap-3">
              <div className="rounded-xl bg-amber-100 p-3 text-amber-700"><Users size={22} /></div>
              <div>
                <h3 className="font-bold text-slate-900">4. Social Learning Theory</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Albert Bandura explained that people can learn by observing
                  others, imitating their actions and noticing the consequences
                  of their behaviour.
                </p>
              </div>
            </div>
            <ExampleBox>
              A child watches an older student solve a mathematics problem.
              The child observes the steps and tries the same method independently.
            </ExampleBox>
            <p className="mt-3 text-xs text-slate-500">
              Important psychologist: <strong>Albert Bandura</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* INDIVIDUAL DIFFERENCES */}
      <section>
        <SectionHeading
          icon={Users}
          eyebrow="05 — UNDERSTANDING STUDENTS"
          title="Individual Differences in Learning"
          description="Students differ in their abilities, prior knowledge, interests, learning pace and educational needs."
        />

        <div className="grid gap-3 sm:grid-cols-2">
          <InfoCard icon={Brain} title="Cognitive Abilities">
            Students differ in reasoning, memory, attention and problem-solving abilities.
          </InfoCard>
          <InfoCard icon={Heart} title="Interests and Motivation" color="rose">
            Personal interests, goals and confidence influence how actively students participate.
          </InfoCard>
          <InfoCard icon={RefreshCw} title="Learning Pace" color="cyan">
            Some students understand quickly, while others benefit from repetition and additional practice.
          </InfoCard>
          <InfoCard icon={BookOpen} title="Prior Knowledge" color="amber">
            Students understand new ideas differently depending on their existing knowledge and experiences.
          </InfoCard>
        </div>

        <ExampleBox>
          In a science lesson about electricity, one student may understand
          through a circuit diagram, another through a practical experiment,
          and another through a step-by-step explanation. A teacher can combine
          these approaches to make the lesson more accessible.
        </ExampleBox>

        <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-900">
          <strong>Remember:</strong> Students should not be permanently labelled
          as one type of learner. Effective teaching often combines explanations,
          visual material, discussion and hands-on activities.
        </div>
      </section>

      {/* MOTIVATION */}
      <section>
        <SectionHeading
          icon={Target}
          eyebrow="06 — WHY STUDENTS LEARN"
          title="Motivation in Education"
          description="Motivation is an internal or external influence that encourages a student to begin, continue or complete a learning activity."
        />

        <div className="grid gap-3 md:grid-cols-2">
          <div className="rounded-xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-5">
            <h3 className="flex items-center gap-2 font-bold text-slate-900">
              <Brain className="text-blue-700" size={21} />
              Intrinsic Motivation
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Learning because of personal interest, enjoyment, curiosity or
              the satisfaction of understanding something.
            </p>
            <ExampleBox>
              A student reads about space because they genuinely enjoy
              discovering how planets and stars work.
            </ExampleBox>
          </div>

          <div className="rounded-xl border border-violet-100 bg-gradient-to-br from-violet-50 to-white p-5">
            <h3 className="flex items-center gap-2 font-bold text-slate-900">
              <GraduationCap className="text-violet-700" size={21} />
              Extrinsic Motivation
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Learning to achieve an external reward or avoid an unwanted consequence.
            </p>
            <ExampleBox>
              A student studies for an examination to earn good marks or
              qualify for a scholarship.
            </ExampleBox>
          </div>
        </div>

        <div className="mt-4 rounded-xl border border-slate-200 bg-white p-5">
          <h3 className="mb-3 font-bold text-slate-900">Factors That Influence Motivation</h3>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              ["Clear goals", Target],
              ["Encouragement", Heart],
              ["Interest", Lightbulb],
              ["Useful feedback", MessageCircle],
            ].map(([label, Icon]) => (
              <div key={label} className="flex items-center gap-2 rounded-lg bg-slate-50 p-3">
                <Icon className="shrink-0 text-blue-700" size={19} />
                <span className="text-xs font-bold text-slate-700">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
<AdSlot />
      {/* TEACHING APPLICATION */}
      <section>
        <SectionHeading
          icon={GraduationCap}
          eyebrow="07 — PRACTICAL APPLICATION"
          title="Role of Educational Psychology in Teaching"
          description="It helps teachers make informed decisions about lesson planning, classroom interaction, student support and assessment."
        />

        <div className="rounded-2xl border border-blue-100 bg-gradient-to-br from-white via-blue-50 to-indigo-50 p-5">
          <div className="space-y-1">
            <LearningStep number="01" icon={BookOpen} title="Understand the Students">
              Identify what students already know and where they need additional explanation.
            </LearningStep>
            <LearningStep number="02" icon={Lightbulb} title="Choose Suitable Teaching Methods">
              Combine explanations, examples, demonstrations, questions and activities.
            </LearningStep>
            <LearningStep number="03" icon={Users} title="Create a Supportive Classroom">
              Encourage participation, respect differences and make students comfortable asking questions.
            </LearningStep>
            <LearningStep number="04" icon={ClipboardCheck} title="Check Understanding">
              Use questions, assignments and short activities to identify misunderstandings.
            </LearningStep>
            <LearningStep number="05" icon={RefreshCw} title="Provide Feedback and Improve">
              Explain mistakes, reinforce progress and adjust teaching when students need more support.
            </LearningStep>
          </div>
        </div>
      </section>

      {/* ASSESSMENT */}
      <section>
        <SectionHeading
          icon={BarChart3}
          eyebrow="08 — MEASURING LEARNING"
          title="Educational Assessment and Evaluation"
          description="Assessment helps teachers understand what students have learned, while evaluation involves judging learning outcomes or the effectiveness of educational methods."
        />

        <div className="grid gap-3 sm:grid-cols-2">
          <InfoCard icon={RefreshCw} title="Formative Assessment" color="cyan">
            Takes place during learning. It identifies difficulties and gives students feedback while there is still time to improve.
            <ExampleBox>
              A teacher gives a short quiz after explaining a chapter to find
              out which concepts need revision.
            </ExampleBox>
          </InfoCard>
          <InfoCard icon={ClipboardCheck} title="Summative Assessment" color="violet">
            Usually takes place at the end of a unit, course or learning period to measure overall achievement.
            <ExampleBox>
              A final examination measures what a student has learned across
              an entire subject.
            </ExampleBox>
          </InfoCard>
        </div>
      </section>

      {/* APPLICATIONS */}
      <section>
        <SectionHeading
          icon={School}
          eyebrow="09 — REAL-WORLD IMPORTANCE"
          title="Applications of Educational Psychology"
          description="Its principles are useful beyond ordinary classroom teaching and can support different stages of education."
        />

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <InfoCard icon={BookOpen} title="Curriculum Planning">
            Helps educators organize learning material according to students' developmental needs and learning goals.
          </InfoCard>
          <InfoCard icon={Heart} title="Student Well-being" color="rose">
            Supports understanding of confidence, stress, emotions and classroom relationships.
          </InfoCard>
          <InfoCard icon={Puzzle} title="Learning Difficulties" color="violet">
            Helps identify learning challenges and plan appropriate educational support or referrals.
          </InfoCard>
          <InfoCard icon={Users} title="Inclusive Education" color="emerald">
            Encourages environments that accommodate diverse abilities and learning needs.
          </InfoCard>
          <InfoCard icon={MessageCircle} title="Classroom Management" color="cyan">
            Helps teachers understand behaviour, communication and ways to establish positive classroom routines.
          </InfoCard>
          <InfoCard icon={BarChart3} title="Educational Research" color="amber">
            Helps evaluate teaching strategies, learning outcomes and educational programmes.
          </InfoCard>
        </div>
      </section>
<AdSlot />
      {/* COMPARISON */}
      <section>
        <SectionHeading
          icon={BrainCircuit}
          eyebrow="10 — RELATED CONCEPTS"
          title="Educational Psychology vs General Psychology"
          description="Both study human behaviour and mental processes, but they differ in their main focus and application."
        />

        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
          <div className="grid grid-cols-2 bg-gradient-to-r from-blue-50 to-indigo-50">
            <div className="p-3 text-sm font-bold text-slate-900 sm:p-4">Educational Psychology</div>
            <div className="border-l border-slate-200 p-3 text-sm font-bold text-slate-900 sm:p-4">General Psychology</div>
          </div>
          {[
            ["Focuses on learning and education", "Studies behaviour and mental processes broadly"],
            ["Examines students and teaching", "Examines people across different contexts"],
            ["Improves educational experiences", "Explains a wide range of human experiences"],
            ["Applied in schools and learning settings", "Applied in many fields and settings"],
          ].map(([a, b]) => (
            <div key={a} className="grid grid-cols-2 border-t border-slate-100 text-sm leading-6">
              <div className="p-3 text-slate-700 sm:p-4">{a}</div>
              <div className="border-l border-slate-100 p-3 text-slate-700 sm:p-4">{b}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SUMMARY */}
      <section className="rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-700 to-indigo-800 p-5 text-white sm:p-7">
        <div className="mb-3 flex items-center gap-2 text-blue-100">
          <CheckCircle2 size={20} />
          <span className="text-sm font-bold">KEY TAKEAWAYS</span>
        </div>
        <h2 className="text-2xl font-bold">What Should You Remember?</h2>
        <ul className="mt-4 space-y-3 text-sm leading-6 text-blue-50">
          {[
            "Educational psychology studies how people learn and develop in educational settings.",
            "Learning is influenced by memory, attention, motivation, experience and individual differences.",
            "Behaviourism, cognitive theory, constructivism and social learning theory offer different explanations of learning.",
            "Teachers use psychological principles to improve teaching, classroom environments and student support.",
            "Assessment and feedback help identify learning progress and areas that need improvement.",
          ].map((item) => (
            <li key={item} className="flex gap-2">
              <CheckCircle2 className="mt-0.5 shrink-0 text-cyan-200" size={17} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

   

    </main>
  );
}
