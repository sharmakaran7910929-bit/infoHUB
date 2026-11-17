
export const metadata = {
  title: "Stress Psychology – Meaning, Types, Causes, Effects & Management | PriceTag HUB",
  description:
    "Understand stress psychology, its types, causes, symptoms and effects on mental and physical health. Explore psychological theories and practical ways to reduce and manage stress.",
};

import {
  Brain,
  Heart,
  Activity,
  AlertCircle,GraduationCap ,WalletIcon,
  Clock,
  Briefcase,
  Users,
  CloudRain,
  Lightbulb,
  ShieldCheck,
  Wind,
  Moon,
  Footprints,
  MessageCircle,
  BookOpen,
  Target,
  CheckCircle2,
  ArrowRight,
  Coffee,
  Dumbbell,
  Leaf,
  Eye,
  RefreshCw,
  CalendarCheck,
  Scale,
  Zap,
  HandHeart,
  CircleHelp,
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

function TipCard({ icon: Icon, title, children, color = "blue" }) {
  const styles = {
    blue: "bg-blue-100 text-blue-700",
    violet: "bg-violet-100 text-violet-700",
    cyan: "bg-cyan-100 text-cyan-700",
    emerald: "bg-emerald-100 text-emerald-700",
    amber: "bg-amber-100 text-amber-700",
    rose: "bg-rose-100 text-rose-700",
  };

  return (
    <div className="flex gap-3 rounded-xl border border-slate-200 bg-white p-4 text-left">
      <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${styles[color]}`}>
        <Icon size={20} />
      </div>
      <div>
        <h3 className="font-bold text-slate-900">{title}</h3>
        <p className="mt-1 text-sm leading-6 text-slate-600">{children}</p>
      </div>
    </div>
  );
}

export default function StressPsychologyPage() {
  return (
    <main className="mx-auto w-full max-w-5xl space-y-10 px-4 py-6 text-left sm:px-6 lg:px-8">

      {/* HERO */}
      <section className="rounded-2xl border border-blue-100 bg-gradient-to-br from-white via-blue-50 to-indigo-100 p-5 sm:p-7">
        <div className="grid items-center gap-6 md:grid-cols-[1.5fr_0.5fr]">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-3 py-1.5 text-xs font-bold text-blue-700">
              <Brain size={15} />
              Understanding Human Stress and Behaviour
            </div>

            <h1 className="text-3xl font-bold leading-tight tracking-tight text-slate-950 sm:text-4xl">
              Stress Psychology
            </h1>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-700 sm:text-base">
              Why does an upcoming examination make someone nervous? Why can
              work pressure affect sleep, concentration and mood? Stress
              psychology explores how people respond to challenging or
              demanding situations and how these responses affect the mind,
              body and behaviour.
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {["Stress Response", "Mental Health", "Coping Strategies", "Stress Management"].map((item) => (
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
              <CloudRain className="absolute left-2 top-5 rounded-lg bg-white p-1 text-blue-700" size={30} />
              <Heart className="absolute right-2 top-5 rounded-lg bg-white p-1 text-rose-600" size={30} />
              <Wind className="absolute bottom-3 left-5 rounded-lg bg-white p-1 text-cyan-700" size={30} />
              <ShieldCheck className="absolute bottom-3 right-5 rounded-lg bg-white p-1 text-emerald-700" size={30} />
            </div>
          </div>
        </div>
      </section>

      {/* MEANING */}
      <section>
        <SectionHeading
          icon={BookOpen}
          eyebrow="01 — BASIC UNDERSTANDING"
          title="What Is Stress in Psychology?"
          description="Stress is a psychological and physiological response that occurs when a person perceives that demands or challenges may exceed their available resources to cope."
        />

        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <p className="text-sm leading-7 text-slate-700">
            Stress is not simply a feeling of worry. It involves the way the
            brain interprets a situation and activates responses that prepare
            the body to deal with a perceived challenge or threat. These
            responses can affect emotions, thoughts, physical functioning
            and everyday behaviour.
          </p>

          <ExampleBox>
            Imagine a student who has an important examination tomorrow.
            Thinking about the examination may cause nervousness, a faster
            heartbeat and difficulty concentrating. These changes are part of
            the body's stress response.
          </ExampleBox>

          <div className="mt-4 rounded-xl border border-emerald-100 bg-emerald-50 p-4">
            <p className="text-sm leading-6 text-emerald-900">
              <strong>Important:</strong> Stress is not always harmful.
              Short-term stress can increase alertness and help someone
              respond to a challenge. Problems are more likely when stress
              becomes intense, frequent or prolonged.
            </p>
          </div>
        </div>
      </section>
<AdSlot />
      {/* STRESS PROCESS */}
      <section>
        <SectionHeading
          icon={Brain}
          eyebrow="02 — HOW STRESS WORKS"
          title="How Does the Stress Response Happen?"
          description="The brain evaluates a situation and coordinates responses that prepare the body to handle a challenge."
        />

        <div className="rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-5">
          <div className="space-y-3">
            {[
              {
                number: "01",
                icon: Eye,
                title: "A Situation Occurs",
                desc: "A person encounters a challenge, pressure or possible threat.",
                color: "bg-blue-100 text-blue-700",
              },
              {
                number: "02",
                icon: Brain,
                title: "The Brain Evaluates It",
                desc: "The brain interprets the situation and assesses its possible demands.",
                color: "bg-violet-100 text-violet-700",
              },
              {
                number: "03",
                icon: Zap,
                title: "The Body Responds",
                desc: "Stress systems activate, changing heart rate, breathing and alertness.",
                color: "bg-amber-100 text-amber-700",
              },
              {
                number: "04",
                icon: Activity,
                title: "A Person Takes Action",
                desc: "The person may solve the problem, avoid it, seek help or use coping strategies.",
                color: "bg-emerald-100 text-emerald-700",
              },
            ].map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.number}>
                  <div className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4">
                    <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${step.color}`}>
                      <Icon size={21} />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-blue-600">STEP {step.number}</span>
                      <h3 className="font-bold text-slate-900">{step.title}</h3>
                      <p className="mt-1 text-sm leading-6 text-slate-600">{step.desc}</p>
                    </div>
                  </div>
                  {index !== 3 && (
                    <div className="flex justify-center py-1">
                      <ArrowRight className="rotate-90 text-blue-500" size={18} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <p className="mt-4 text-xs leading-5 text-slate-500">
            Simplified explanation: actual stress responses involve several
            interacting brain regions, nervous-system pathways and hormones.
          </p>
        </div>
      </section>

      {/* TYPES */}
      <section>
        <SectionHeading
          icon={Scale}
          eyebrow="03 — TYPES OF STRESS"
          title="Different Types of Stress"
          description="Stress can be classified by how long it lasts, how frequently it occurs and how it affects a person's life."
        />

        <div className="grid gap-3 sm:grid-cols-2">
          <InfoCard icon={Zap} title="Acute Stress" color="amber">
            Short-term stress that occurs in response to an immediate
            challenge. It usually reduces after the situation passes.
            <ExampleBox>
              Feeling nervous before giving a presentation or taking a driving test.
            </ExampleBox>
          </InfoCard>

          <InfoCard icon={RefreshCw} title="Episodic Acute Stress" color="violet">
            Occurs when a person experiences acute stress repeatedly,
            often because of recurring pressures or a pattern of stressful situations.
            <ExampleBox>
              Someone who regularly takes on too many tasks and frequently
              feels overwhelmed by deadlines.
            </ExampleBox>
          </InfoCard>

          <InfoCard icon={Clock} title="Chronic Stress" color="rose">
            Long-lasting stress that continues because of ongoing difficulties
            or persistent pressure.
            <ExampleBox>
              Living with prolonged financial difficulties, ongoing family
              conflict or an unhealthy work environment.
            </ExampleBox>
          </InfoCard>

          <InfoCard icon={Heart} title="Eustress and Distress" color="emerald">
            Eustress describes stress experienced as motivating or manageable,
            while distress describes stress experienced as unpleasant or overwhelming.
            <ExampleBox>
              Preparing for a competition may feel exciting and motivating,
              but constant fear of failure may become distressing.
            </ExampleBox>
          </InfoCard>
        </div>
      </section>
<AdSlot />
      {/* CAUSES */}
      <section>
        <SectionHeading
          icon={CloudRain}
          eyebrow="04 — CAUSES AND TRIGGERS"
          title="Common Causes of Psychological Stress"
          description="Stress can arise from external circumstances, personal expectations, relationships and major life changes."
        />

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <InfoCard icon={GraduationCap} title="Academic Pressure">
            Examinations, competition, assignments, expectations and fear of poor results.
          </InfoCard>
          <InfoCard icon={Briefcase} title="Work and Career">
            Heavy workloads, job insecurity, workplace conflict and demanding deadlines.
          </InfoCard>
          <InfoCard icon={WalletIcon} title="Financial Problems" color="amber">
            Debt, insufficient income, unexpected expenses and uncertainty about the future.
          </InfoCard>
          <InfoCard icon={Users} title="Relationship Problems" color="rose">
            Family conflict, misunderstandings, loneliness and difficulties with friendships.
          </InfoCard>
          <InfoCard icon={Activity} title="Health Challenges" color="cyan">
            Illness, physical discomfort, caring responsibilities and health-related uncertainty.
          </InfoCard>
          <InfoCard icon={RefreshCw} title="Major Life Changes" color="violet">
            Moving to a new place, changing jobs, separation or adjusting to a new responsibility.
          </InfoCard>
        </div>

        <ExampleBox>
          A person who has recently started a new job may experience stress
          because they are learning unfamiliar tasks, adjusting to new
          colleagues and trying to meet performance expectations at the same time.
        </ExampleBox>
      </section>

      {/* SYMPTOMS */}
      <section>
        <SectionHeading
          icon={AlertCircle}
          eyebrow="05 — RECOGNIZING STRESS"
          title="Signs and Symptoms of Stress"
          description="Stress can appear in physical sensations, emotions, thinking patterns and everyday behaviour. Different people experience it differently."
        />

        <div className="grid gap-3 sm:grid-cols-2">
          <InfoCard icon={Activity} title="Physical Symptoms" color="rose">
            <ul className="list-disc space-y-1 pl-5">
              <li>Headaches and muscle tension</li>
              <li>Fast heartbeat or sweating</li>
              <li>Stomach discomfort</li>
              <li>Sleep difficulties and fatigue</li>
            </ul>
          </InfoCard>

          <InfoCard icon={Heart} title="Emotional Symptoms" color="violet">
            <ul className="list-disc space-y-1 pl-5">
              <li>Irritability or frustration</li>
              <li>Anxiety or nervousness</li>
              <li>Feeling overwhelmed</li>
              <li>Low mood or restlessness</li>
            </ul>
          </InfoCard>

          <InfoCard icon={Brain} title="Cognitive Symptoms" color="blue">
            <ul className="list-disc space-y-1 pl-5">
              <li>Difficulty concentrating</li>
              <li>Frequent worrying</li>
              <li>Forgetfulness</li>
              <li>Difficulty making decisions</li>
            </ul>
          </InfoCard>

          <InfoCard icon={RefreshCw} title="Behavioural Symptoms" color="amber">
            <ul className="list-disc space-y-1 pl-5">
              <li>Avoiding responsibilities</li>
              <li>Changes in eating habits</li>
              <li>Social withdrawal</li>
              <li>Increased restlessness or unhealthy coping habits</li>
            </ul>
          </InfoCard>
        </div>

        <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-4">
          <p className="text-sm leading-6 text-amber-900">
            <strong>Note:</strong> These symptoms are not proof that someone
            has a stress-related disorder. They can also occur with other
            physical or mental health conditions. Persistent or severe symptoms
            deserve professional assessment.
          </p>
        </div>
      </section>

      {/* BRAIN AND BODY */}
      <section>
        <SectionHeading
          icon={Brain}
          eyebrow="06 — EFFECTS ON THE BODY"
          title="How Stress Affects the Brain and Body"
          description="The stress response involves the nervous system and hormonal systems. These help the body respond to challenges, but prolonged activation can affect health."
        />

        <div className="grid gap-3 sm:grid-cols-2">
          <InfoCard icon={Brain} title="Brain and Concentration">
            Stress can interfere with attention, working memory and decision-making,
            particularly when it is intense or prolonged.
          </InfoCard>
          <InfoCard icon={Heart} title="Heart and Circulation" color="rose">
            Stress can temporarily increase heart rate and blood pressure as the
            body prepares for action.
          </InfoCard>
          <InfoCard icon={Moon} title="Sleep" color="violet">
            Persistent worry and physiological arousal can make it harder to
            fall asleep or maintain restful sleep.
          </InfoCard>
          <InfoCard icon={ShieldCheck} title="Immune Function" color="emerald">
            Long-term stress can influence immune-system functioning and may
            affect the body's ability to respond to illness.
          </InfoCard>
          <InfoCard icon={Activity} title="Muscles and Digestion" color="cyan">
            Stress can contribute to muscle tension and digestive discomfort.
          </InfoCard>
          <InfoCard icon={Heart} title="Emotional Well-being" color="amber">
            Prolonged stress can contribute to irritability, emotional exhaustion
            and difficulties managing everyday challenges.
          </InfoCard>
        </div>
      </section>
<AdSlot />
      {/* THEORIES */}
      <section>
        <SectionHeading
          icon={BookOpen}
          eyebrow="07 — IMPORTANT PSYCHOLOGICAL THEORIES"
          title="Major Theories of Stress"
          description="Psychologists have developed different explanations for how stress develops and how people respond to it."
        />

        <div className="space-y-4">
          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <h3 className="font-bold text-slate-900">
              1. General Adaptation Syndrome (Hans Selye)
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Hans Selye described a general pattern of physiological responses
              to prolonged stress, known as General Adaptation Syndrome (GAS).
            </p>

            <div className="mt-4 grid gap-2 sm:grid-cols-3">
              {[
                ["Alarm", "The body activates its immediate stress response.", "bg-rose-50 border-rose-100"],
                ["Resistance", "The body attempts to adapt while the stressor continues.", "bg-amber-50 border-amber-100"],
                ["Exhaustion", "Prolonged demands may deplete the ability to cope effectively.", "bg-violet-50 border-violet-100"],
              ].map(([title, desc, style], index) => (
                <div key={title} className={`rounded-xl border p-3 ${style}`}>
                  <span className="text-xs font-bold text-slate-500">STAGE 0{index + 1}</span>
                  <h4 className="mt-1 font-bold text-slate-900">{title}</h4>
                  <p className="mt-2 text-xs leading-5 text-slate-600">{desc}</p>
                </div>
              ))}
            </div>

            <ExampleBox>
              Consider a person facing a demanding work project. Initially,
              the person becomes alert and energized. They then try to manage
              the workload over time. If pressure continues without adequate
              recovery, exhaustion may develop.
            </ExampleBox>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <h3 className="font-bold text-slate-900">
              2. Transactional Model of Stress (Lazarus and Folkman)
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              This model explains that stress depends partly on how a person
              evaluates a situation and their ability to cope with it.
            </p>

            <div className="mt-4 space-y-2">
              <div className="rounded-lg bg-blue-50 p-3">
                <p className="text-sm font-bold text-blue-900">Primary appraisal</p>
                <p className="mt-1 text-xs leading-5 text-slate-600">
                  Is this situation irrelevant, positive or potentially stressful?
                </p>
              </div>
              <div className="flex justify-center">
                <ArrowRight className="rotate-90 text-blue-500" size={18} />
              </div>
              <div className="rounded-lg bg-violet-50 p-3">
                <p className="text-sm font-bold text-violet-900">Secondary appraisal</p>
                <p className="mt-1 text-xs leading-5 text-slate-600">
                  What resources, skills or support do I have to handle it?
                </p>
              </div>
              <div className="flex justify-center">
                <ArrowRight className="rotate-90 text-blue-500" size={18} />
              </div>
              <div className="rounded-lg bg-emerald-50 p-3">
                <p className="text-sm font-bold text-emerald-900">Coping response</p>
                <p className="mt-1 text-xs leading-5 text-slate-600">
                  Decide how to respond, solve the problem or manage emotions.
                </p>
              </div>
            </div>

            <ExampleBox>
              Two students face the same examination. One sees it as a threat
              and feels unprepared. The other feels confident because they
              have revised and have a study plan. Their appraisals and coping
              resources can influence how stressful the examination feels.
            </ExampleBox>
          </div>
        </div>
      </section>

      {/* STRESS REDUCTION */}
      <section>
        <SectionHeading
          icon={ShieldCheck}
          eyebrow="08 — PRACTICAL STRESS MANAGEMENT"
          title="Different Ways to Reduce Stress"
          description="Stress management involves reducing avoidable pressures, improving coping skills and supporting physical and emotional well-being. No single method works equally well for everyone."
        />

        <div className="space-y-4">
          <TipCard icon={Wind} title="1. Practise Slow Breathing" color="cyan">
            Breathe gently and slowly, allowing the exhale to be comfortable
            and unforced. Spend a few minutes focusing on your breathing.
            This can help settle physical tension and bring attention back
            to the present.
          </TipCard>

          <TipCard icon={Footprints} title="2. Exercise and Walk Regularly" color="emerald">
            Walking, cycling, swimming or other enjoyable physical activities
            can support mood, sleep and general health. Start with a manageable
            amount and build a regular routine.
          </TipCard>

          <TipCard icon={Moon} title="3. Improve Sleep Habits" color="violet">
            Maintain a consistent sleep schedule, create a relaxing bedtime
            routine and reduce stimulating activities close to bedtime.
            Adequate sleep supports emotional regulation and concentration.
          </TipCard>

          <TipCard icon={CalendarCheck} title="4. Manage Time and Priorities">
            Break large tasks into smaller steps, make a realistic schedule
            and focus on the most important task first. Avoid trying to
            complete everything at once.
          </TipCard>

          <TipCard icon={MessageCircle} title="5. Talk to Someone You Trust" color="rose">
            Sharing concerns with a friend, family member, teacher or
            counsellor can provide emotional support and help you see
            problems from another perspective.
          </TipCard>

          <TipCard icon={Eye} title="6. Practise Mindfulness" color="cyan">
            Pay attention to the present moment without immediately judging
            your thoughts. Mindfulness exercises may include observing your
            breathing, body sensations or sounds around you.
          </TipCard>

          <TipCard icon={Leaf} title="7. Spend Time in Relaxing Environments" color="emerald">
            Spending time outdoors, enjoying nature or engaging in a peaceful
            activity can provide a break from everyday demands.
          </TipCard>

          <TipCard icon={Coffee} title="8. Reduce Excessive Caffeine">
            Too much caffeine, particularly later in the day, can worsen
            restlessness or interfere with sleep in some people. Notice how
            your body responds and adjust your intake if needed.
          </TipCard>

          <TipCard icon={Target} title="9. Set Realistic Expectations" color="amber">
            Avoid expecting perfection in every task. Set achievable goals,
            recognize your progress and allow yourself time to rest.
          </TipCard>

          <TipCard icon={HandHeart} title="10. Seek Professional Support" color="violet">
            If stress is persistent, overwhelming or interfering with daily
            life, a qualified mental health professional can help identify
            contributing factors and develop suitable coping strategies.
          </TipCard>
        </div>
      </section>

      {/* COPING METHODS */}
      <section>
        <SectionHeading
          icon={Target}
          eyebrow="09 — COPING STRATEGIES"
          title="Problem-Focused vs Emotion-Focused Coping"
          description="People can respond to stress by addressing the source of the problem or by managing the emotional response it creates."
        />

        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-5">
            <div className="mb-3 flex items-center gap-2">
              <Target className="text-blue-700" size={22} />
              <h3 className="font-bold text-slate-900">Problem-Focused Coping</h3>
            </div>
            <p className="text-sm leading-6 text-slate-600">
              Focuses on changing or solving the situation that causes stress.
            </p>
            <ExampleBox>
              A student who feels stressed about examinations creates a
              revision timetable, asks a teacher for help and practises
              difficult questions.
            </ExampleBox>
          </div>

          <div className="rounded-xl border border-violet-100 bg-gradient-to-br from-violet-50 to-white p-5">
            <div className="mb-3 flex items-center gap-2">
              <Heart className="text-violet-700" size={22} />
              <h3 className="font-bold text-slate-900">Emotion-Focused Coping</h3>
            </div>
            <p className="text-sm leading-6 text-slate-600">
              Focuses on managing emotional distress associated with a situation.
            </p>
            <ExampleBox>
              The same student practises slow breathing, talks to a trusted
              person and takes short breaks to manage examination anxiety.
            </ExampleBox>
          </div>
        </div>

        <div className="mt-4 rounded-xl border border-slate-200 bg-white p-4">
          <p className="text-sm leading-6 text-slate-700">
            <strong className="text-blue-800">Which is better?</strong> Neither
            is always better. When a problem can be changed, problem-focused
            coping may be useful. When a situation cannot immediately be
            changed, emotion-focused coping can help manage the distress.
            People often use both approaches together.
          </p>
        </div>
      </section>
<AdSlot />
      {/* STUDENT EXAMPLE */}
      <section>
        <SectionHeading
          icon={GraduationCap}
          eyebrow="10 — APPLYING THE CONCEPT"
          title="Example: Managing Examination Stress"
          description="Consider how a student can use different stress-management methods when preparing for an important examination."
        />

        <div className="rounded-2xl border border-blue-100 bg-gradient-to-br from-white via-blue-50 to-indigo-50 p-5">
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
              <BookOpen size={22} />
            </div>
            <div>
              <h3 className="font-bold text-slate-900">The Situation</h3>
              <p className="text-sm text-slate-600">
                A student has three subjects to revise within one week.
              </p>
            </div>
          </div>

          <div className="space-y-3">
            {[
              ["Identify the problem", "List the chapters that need attention and identify difficult topics."],
              ["Create a study plan", "Divide the available time into realistic daily study sessions."],
              ["Take short breaks", "Rest between sessions to avoid continuous mental fatigue."],
              ["Practise relaxation", "Use gentle breathing or a short walk when feeling overwhelmed."],
              ["Get enough sleep", "Avoid sacrificing sleep to study throughout the night."],
              ["Ask for support", "Discuss difficult topics with teachers, friends or family."],
            ].map(([title, desc], index) => (
              <div key={title} className="flex gap-3 rounded-xl border border-slate-200 bg-white p-3">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-xs font-bold text-blue-700">
                  {index + 1}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">{title}</h4>
                  <p className="mt-1 text-xs leading-5 text-slate-600">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-4 rounded-lg bg-white p-3 text-sm leading-6 text-slate-700">
            <strong className="text-blue-800">Lesson:</strong> Stress may not
            disappear completely, but practical planning, healthy routines
            and social support can make a challenging situation more manageable.
          </p>
        </div>
      </section>

      {/* WHEN TO SEEK HELP */}
      <section>
        <SectionHeading
          icon={HandHeart}
          eyebrow="11 — GETTING SUPPORT"
          title="When Should Someone Seek Professional Help?"
          description="Some stress can be managed through everyday coping strategies, but ongoing or severe distress may require professional support."
        />

        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <p className="text-sm leading-7 text-slate-700">
            Consider speaking with a qualified psychologist, counsellor or
            healthcare professional when stress:
          </p>

          <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-600">
            {[
              "Continues for a long time or feels increasingly difficult to manage.",
              "Regularly interferes with sleep, work, education or relationships.",
              "Causes persistent anxiety, low mood or emotional exhaustion.",
              "Leads to avoiding everyday responsibilities or activities.",
              "Is accompanied by physical symptoms that need medical evaluation.",
            ].map((item) => (
              <li key={item} className="flex gap-2">
                <CheckCircle2 className="mt-0.5 shrink-0 text-blue-600" size={17} />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-4 rounded-xl border border-rose-200 bg-rose-50 p-4">
            <p className="text-sm leading-6 text-rose-900">
              <strong>Important:</strong> If someone feels at risk of harming
              themselves or cannot stay safe, they should seek immediate
              help from local emergency services or a trusted person and
              obtain urgent professional support.
            </p>
          </div>
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
            "Stress is a psychological and physiological response to perceived demands or challenges.",
            "Stress can be acute, episodic or chronic, and it can be experienced as motivating or distressing.",
            "Its effects may involve emotions, concentration, behaviour, sleep and physical health.",
            "Theories by Hans Selye and Lazarus and Folkman help explain stress responses and coping.",
            "Exercise, sleep, breathing techniques, time management and social support can help manage stress.",
            "Professional help is important when stress becomes persistent, severe or disruptive.",
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
