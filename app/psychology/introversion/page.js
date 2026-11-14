
import {
  Brain,
  BookOpen,
  Users,
  User,
  MessageCircle,
  Lightbulb,
  Eye,
  Heart,
  Battery,
  Coffee,
  Target,
  GraduationCap,
  CheckCircle2,
  AlertCircle,
  Compass,
  Network,
  Volume2,
  Clock,
  Sparkles,
  ArrowLeftRight,
} from "lucide-react";
import AdSlot from "../../../components/AdSlot";

export const metadata = {
  title: "Introversion - Meaning, Characteristics and Psychology | PriceTag HUB",
  description:
    "Understand introversion in psychology, its characteristics, Jung's theory, the Big Five personality model, introversion versus shyness and common misconceptions.",
};

const SectionHeading = ({ eyebrow, title, description, dark = false }) => (
  <div className="mb-6">
    {eyebrow && (
      <p
        className={`mb-2 text-xs font-bold uppercase tracking-wider ${
          dark ? "text-blue-300" : "text-blue-700"
        }`}
      >
        {eyebrow}
      </p>
    )}
    <h2
      className={`text-2xl font-bold tracking-tight sm:text-3xl ${
        dark ? "text-white" : "text-slate-900"
      }`}
    >
      {title}
    </h2>
    {description && (
      <p
        className={`mt-3 max-w-3xl text-sm leading-7 sm:text-base ${
          dark ? "text-slate-300" : "text-slate-600"
        }`}
      >
        {description}
      </p>
    )}
  </div>
);

const InfoCard = ({ icon: Icon, title, children, color = "blue" }) => {
  const styles = {
    blue: "bg-blue-50 text-blue-700 border-blue-100",
    violet: "bg-violet-50 text-violet-700 border-violet-100",
    amber: "bg-amber-50 text-amber-700 border-amber-100",
    emerald: "bg-emerald-50 text-emerald-700 border-emerald-100",
    rose: "bg-rose-50 text-rose-700 border-rose-100",
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div
        className={`mb-3 flex h-10 w-10 items-center justify-center rounded-xl border ${styles[color]}`}
      >
        <Icon size={20} />
      </div>
      <h3 className="font-bold text-slate-900">{title}</h3>
      <div className="mt-2 text-sm leading-6 text-slate-600">{children}</div>
    </div>
  );
};

const ComparisonCard = ({ title, subtitle, icon: Icon, color, points }) => (
  <div className="rounded-2xl border border-slate-200 bg-white p-5">
    <div className="flex items-center gap-3">
      <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${color}`}>
        <Icon size={22} />
      </div>
      <div>
        <h3 className="font-bold text-slate-900">{title}</h3>
        <p className="text-xs text-slate-500">{subtitle}</p>
      </div>
    </div>
    <ul className="mt-5 space-y-3">
      {points.map((point) => (
        <li key={point} className="flex gap-2 text-sm leading-6 text-slate-600">
          <CheckCircle2 size={16} className="mt-1 shrink-0 text-emerald-600" />
          {point}
        </li>
      ))}
    </ul>
  </div>
);

export default function IntroversionPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12">

        {/* Hero */}
        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-950 via-indigo-950 to-blue-900 p-6 text-white sm:p-10">
          <div className="relative z-10 max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-300/30 bg-blue-400/10 px-3 py-1.5 text-xs font-bold text-blue-200">
              <Brain size={14} />
              Psychology · Personality Psychology
            </div>

            <h1 className="text-3xl font-bold leading-tight sm:text-4xl">
              Introversion
            </h1>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-blue-100 sm:text-base">
              A personality orientation commonly associated with a preference
              for quieter environments, reflection and less externally
              stimulating activities. Introversion describes a tendency,
              not a limitation on someone's abilities or social skills.
            </p>

            <div className="mt-6 flex flex-wrap gap-3 text-xs font-bold">
              <span className="rounded-lg bg-white/10 px-3 py-2">
                Personality Trait
              </span>
              <span className="rounded-lg bg-white/10 px-3 py-2">
                Individual Differences
              </span>
              <span className="rounded-lg bg-white/10 px-3 py-2">
                Big Five Personality Model
              </span>
            </div>
          </div>
          <Brain className="pointer-events-none absolute bottom-4 right-8 hidden h-36 w-36 text-blue-200/10 sm:block" />
          <div className="pointer-events-none absolute -right-12 -top-16 hidden h-64 w-64 rounded-full border border-blue-300/20 sm:block" />
        </section>

        {/* Definition */}
        <section className="mt-12">
          <SectionHeading
            eyebrow="01 · Basic understanding"
            title="What Is Introversion?"
            description="Introversion is a personality orientation associated with how a person tends to direct attention, respond to stimulation and prefer social interaction."
          />

          <div className="grid gap-5 md:grid-cols-[1.3fr_0.7fr]">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
              <p className="text-sm leading-7 text-slate-600">
                An introverted person may prefer spending time alone,
                thinking deeply, engaging in meaningful conversations or
                participating in smaller social gatherings rather than
                constantly seeking large and highly stimulating social
                environments.
              </p>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                This does not mean that introverts dislike people or cannot
                enjoy social activities. Many introverted individuals have
                close friendships, communicate confidently, lead teams and
                participate actively in public life.
              </p>
              <div className="mt-5 rounded-xl border border-blue-100 bg-blue-50 p-4">
                <p className="font-bold text-blue-950">Key idea</p>
                <p className="mt-1 text-sm leading-6 text-blue-900">
                  Introversion is about a person's general personality
                  orientation, not a rule that determines how they must
                  behave in every situation.
                </p>
              </div>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-indigo-600 to-blue-700 p-5 text-white">
              <User size={34} className="mb-4 text-blue-100" />
              <p className="text-xs font-bold uppercase tracking-wider text-blue-200">
                Simple definition
              </p>
              <p className="mt-3 text-xl font-bold leading-8">
                Introversion is a personality tendency toward inward
                reflection and relatively lower preference for external
                stimulation.
              </p>
            </div>
          </div>
        </section>
<AdSlot />
        {/* Example */}
        <section className="mt-14">
          <SectionHeading
            eyebrow="02 · Everyday example"
            title="Understanding Introversion Through a Situation"
            description="Consider two people attending the same social event. They may both enjoy meeting others but experience the event differently."
          />

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-blue-200 bg-white p-5">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                  <User size={23} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Person A</h3>
                  <p className="text-xs text-blue-700">More introverted tendency</p>
                </div>
              </div>
              <p className="text-sm leading-7 text-slate-600">
                Person A enjoys talking with a few close friends, prefers
                meaningful conversations and may choose a quiet evening
                afterward to relax.
              </p>
              <div className="mt-4 rounded-xl bg-blue-50 p-3 text-sm text-blue-900">
                May prefer a smaller gathering and quieter surroundings.
              </div>
            </div>

            <div className="rounded-2xl border border-amber-200 bg-white p-5">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
                  <Users size={23} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Person B</h3>
                  <p className="text-xs text-amber-700">More extraverted tendency</p>
                </div>
              </div>
              <p className="text-sm leading-7 text-slate-600">
                Person B enjoys meeting many people, participating in group
                conversations and attending another social activity soon
                afterward.
              </p>
              <div className="mt-4 rounded-xl bg-amber-50 p-3 text-sm text-amber-900">
                May enjoy larger gatherings and higher levels of social activity.
              </div>
            </div>
          </div>

          <p className="mt-4 text-sm leading-6 text-slate-500">
            Both patterns are normal. These examples describe broad
            tendencies, not fixed rules or judgments about personality.
          </p>
        </section>

        {/* Characteristics */}
        <section className="mt-14">
          <SectionHeading
            eyebrow="03 · Common characteristics"
            title="Characteristics Often Associated With Introversion"
            description="People with stronger introverted tendencies may display some of the following preferences. Not every introvert shares all of them."
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <InfoCard icon={Lightbulb} title="Reflective thinking" color="blue">
              May prefer thinking through ideas before expressing an opinion
              or making a decision.
            </InfoCard>
            <InfoCard icon={Coffee} title="Preference for quiet" color="violet">
              May feel more comfortable working, reading or relaxing in
              calmer environments.
            </InfoCard>
            <InfoCard icon={Users} title="Smaller social circles" color="emerald">
              May prefer a few close relationships over maintaining a
              large number of casual connections.
            </InfoCard>
            <InfoCard icon={MessageCircle} title="Meaningful conversations" color="amber">
              May enjoy deeper discussions rather than frequent small talk.
            </InfoCard>
            <InfoCard icon={Eye} title="Observational approach" color="rose">
              May prefer observing a situation before joining a conversation
              or group activity.
            </InfoCard>
            <InfoCard icon={Battery} title="Time for solitude" color="blue">
              May value time alone after demanding social activities to
              relax and recover their preferred level of stimulation.
            </InfoCard>
          </div>
        </section>

        {/* Jung theory */}
        <section className="mt-14">
          <SectionHeading
            eyebrow="04 · Historical perspective"
            title="Carl Jung's Theory of Introversion and Extraversion"
            description="Swiss psychiatrist Carl Gustav Jung played an important role in introducing introversion and extraversion as psychological orientations."
          />

          <div className="grid gap-5 md:grid-cols-[0.75fr_1.25fr]">
            <div className="rounded-2xl bg-gradient-to-br from-violet-700 to-indigo-900 p-6 text-white">
              <Brain size={34} className="mb-4 text-violet-200" />
              <p className="text-xs font-bold uppercase tracking-wider text-violet-200">
                Associated psychologist
              </p>
              <h3 className="mt-2 text-2xl font-bold">Carl Gustav Jung</h3>
              <p className="mt-3 text-sm leading-6 text-violet-100">
                Jung described introversion and extraversion as different
                orientations of psychological energy and interest.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
              <h3 className="font-bold text-slate-900">
                Jung's basic distinction
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                In Jung's framework, introversion is associated with a
                greater orientation toward the subjective inner world,
                while extraversion is associated with a greater orientation
                toward the external world of people and objects.
              </p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl bg-violet-50 p-4">
                  <p className="font-bold text-violet-950">Introversion</p>
                  <p className="mt-2 text-sm leading-6 text-violet-900">
                    Greater emphasis on inner thoughts, reflection and
                    subjective experience.
                  </p>
                </div>
                <div className="rounded-xl bg-amber-50 p-4">
                  <p className="font-bold text-amber-950">Extraversion</p>
                  <p className="mt-2 text-sm leading-6 text-amber-900">
                    Greater emphasis on external activities, people and
                    environmental experiences.
                  </p>
                </div>
              </div>
              <p className="mt-4 text-xs leading-5 text-slate-500">
                Jung's original psychological theory is a historical
                foundation. Modern personality psychology also studies
                introversion and extraversion using empirical trait models.
              </p>
            </div>
          </div>
        </section>

        {/* Big five */}
        <section className="mt-14">
          <SectionHeading
            eyebrow="05 · Modern personality psychology"
            title="Introversion in the Big Five Personality Model"
            description="The Big Five is a widely researched framework that describes personality through five broad dimensions. Introversion is generally understood as the lower end of the extraversion dimension."
          />

          <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-7">
            <h3 className="font-bold text-slate-900">
              The Five Major Personality Dimensions
            </h3>
            <div className="mt-5 space-y-4">
              {[
                {
                  letter: "O",
                  title: "Openness to Experience",
                  detail: "Imagination, curiosity and interest in new ideas.",
                  color: "bg-violet-500",
                },
                {
                  letter: "C",
                  title: "Conscientiousness",
                  detail: "Organization, responsibility and self-discipline.",
                  color: "bg-blue-500",
                },
                {
                  letter: "E",
                  title: "Extraversion",
                  detail: "Sociability, assertiveness and positive social engagement.",
                  color: "bg-amber-500",
                  highlight: true,
                },
                {
                  letter: "A",
                  title: "Agreeableness",
                  detail: "Cooperation, compassion and consideration for others.",
                  color: "bg-emerald-500",
                },
                {
                  letter: "N",
                  title: "Neuroticism",
                  detail: "Tendency to experience negative emotions such as worry.",
                  color: "bg-rose-500",
                },
              ].map((trait) => (
                <div
                  key={trait.letter}
                  className={`flex gap-3 rounded-xl p-3 ${
                    trait.highlight
                      ? "border border-amber-200 bg-amber-50"
                      : "bg-slate-50"
                  }`}
                >
                  <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${trait.color} font-bold text-white`}>
                    {trait.letter}
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">{trait.title}</p>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      {trait.detail}
                    </p>
                    {trait.highlight && (
                      <p className="mt-2 text-xs font-bold text-amber-800">
Introversion represents the opposite end of this dimension.                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-5 rounded-xl bg-blue-50 p-4">
              <p className="text-sm leading-6 text-blue-950">
                <strong>Important:</strong> A person can be introverted and
                still score high in openness, conscientiousness or
                agreeableness. Introversion does not determine every other
                aspect of personality.
              </p>
            </div>
          </div>
        </section>
<AdSlot />
        {/* Spectrum */}
        <section className="mt-14">
          <SectionHeading
            eyebrow="06 · Personality continuum"
            title="Introversion and Extraversion Are Not Strict Categories"
            description="People do not always fit into two completely separate personality groups. Introversion and extraversion are generally understood as a continuum."
          />

          <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-7">
            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="rounded-xl bg-indigo-50 p-3">
                <User className="mx-auto mb-2 text-indigo-700" size={24} />
                <p className="text-sm font-bold text-indigo-950">Introversion</p>
                <p className="mt-1 text-xs text-indigo-800">Lower extraversion</p>
              </div>
              <div className="rounded-xl bg-slate-100 p-3">
                <ArrowLeftRight className="mx-auto mb-2 text-slate-700" size={24} />
                <p className="text-sm font-bold text-slate-950">Middle range</p>
                <p className="mt-1 text-xs text-slate-600">Mixed tendencies</p>
              </div>
              <div className="rounded-xl bg-amber-50 p-3">
                <Users className="mx-auto mb-2 text-amber-700" size={24} />
                <p className="text-sm font-bold text-amber-950">Extraversion</p>
                <p className="mt-1 text-xs text-amber-800">Higher extraversion</p>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-1">
              <div className="h-3 flex-1 rounded-l-full bg-indigo-500" />
              <div className="h-3 flex-1 bg-indigo-300" />
              <div className="h-3 flex-1 bg-slate-300" />
              <div className="h-3 flex-1 bg-amber-300" />
              <div className="h-3 flex-1 rounded-r-full bg-amber-500" />
            </div>
            <div className="mt-3 flex justify-between text-xs font-bold text-slate-500">
              <span>More introverted</span>
              <span>More extraverted</span>
            </div>

            <p className="mt-5 text-sm leading-7 text-slate-600">
              A person may show different behaviours depending on the
              environment, responsibilities and people involved. Personality
              tendencies are relatively stable patterns, but behaviour can
              change from one situation to another.
            </p>
          </div>
        </section>

        {/* Ambiversion */}
        <section className="mt-14">
          <SectionHeading
            eyebrow="07 · Related concept"
            title="What Is Ambiversion?"
            description="Ambiversion describes a pattern of personality that includes both introverted and extraverted tendencies."
          />

          <div className="grid gap-5 md:grid-cols-[0.8fr_1.2fr]">
            <div className="rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-800 p-6 text-white">
              <ArrowLeftRight size={34} className="mb-4 text-emerald-100" />
              <p className="text-xs font-bold uppercase tracking-wider text-emerald-100">
                Related personality term
              </p>
              <h3 className="mt-2 text-2xl font-bold">Ambiversion</h3>
              <p className="mt-3 text-sm leading-6 text-emerald-50">
                A combination of introverted and extraverted tendencies,
                rather than an extreme preference for either end.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
              <h3 className="font-bold text-slate-900">Example of an ambivert</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Someone may enjoy meeting new people and participating in
                group discussions at work, but prefer quiet weekends,
                individual hobbies and time alone.
              </p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl bg-emerald-50 p-4">
                  <p className="font-bold text-emerald-950">Social situations</p>
                  <p className="mt-2 text-sm leading-6 text-emerald-900">
                    Comfortable participating in group activities.
                  </p>
                </div>
                <div className="rounded-xl bg-teal-50 p-4">
                  <p className="font-bold text-teal-950">Personal time</p>
                  <p className="mt-2 text-sm leading-6 text-teal-900">
                    Also values solitude and independent activities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Introversion vs shyness */}
        <section className="mt-14">
          <SectionHeading
            eyebrow="08 · Important distinction"
            title="Introversion vs. Shyness"
            description="These concepts are frequently confused, but they describe different psychological characteristics."
          />

          <div className="grid gap-4 md:grid-cols-2">
            <ComparisonCard
              title="Introversion"
              subtitle="Personality orientation"
              icon={Brain}
              color="bg-indigo-100 text-indigo-700"
              points={[
                "A tendency toward lower preference for external stimulation.",
                "May enjoy solitude and quieter social settings.",
                "Does not necessarily involve fear of social judgment.",
                "Can be socially confident and comfortable speaking publicly.",
              ]}
            />
            <ComparisonCard
              title="Shyness"
              subtitle="Social discomfort or inhibition"
              icon={Users}
              color="bg-amber-100 text-amber-700"
              points={[
                "Often involves hesitation or discomfort in social situations.",
                "May involve concern about how others will evaluate you.",
                "Can make initiating conversations difficult.",
                "Can occur in both introverted and extraverted people.",
              ]}
            />
          </div>

          <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-4">
            <p className="text-sm leading-6 text-amber-950">
              <strong>Example:</strong> An introverted person may confidently
              deliver a presentation but prefer not to attend a large social
              gathering afterward. A shy person may want to participate in
              the gathering but hesitate because of nervousness or fear of
              judgment.
            </p>
          </div>
        </section>

        {/* Social anxiety */}
        <section className="mt-14">
          <SectionHeading
            eyebrow="09 · Another important distinction"
            title="Introversion vs. Social Anxiety"
            description="Introversion is a personality trait, whereas social anxiety involves significant fear or anxiety related to social situations."
          />

          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <div className="grid md:grid-cols-2">
              <div className="border-b border-slate-200 p-5 md:border-b-0 md:border-r sm:p-6">
                <div className="mb-3 flex items-center gap-2">
                  <Brain className="text-indigo-700" size={22} />
                  <h3 className="font-bold text-slate-900">Introversion</h3>
                </div>
                <p className="text-sm leading-7 text-slate-600">
                  A normal personality trait. An introverted person may
                  choose solitude because it suits their preferences.
                  This does not automatically indicate distress or a
                  psychological disorder.
                </p>
              </div>
              <div className="p-5 sm:p-6">
                <div className="mb-3 flex items-center gap-2">
                  <AlertCircle className="text-rose-700" size={22} />
                  <h3 className="font-bold text-slate-900">Social Anxiety</h3>
                </div>
                <p className="text-sm leading-7 text-slate-600">
                  A mental health condition involving marked fear of
                  social situations where a person may be scrutinized
                  or judged. It can interfere with everyday functioning.
                </p>
              </div>
            </div>
          </div>
          <p className="mt-4 text-sm leading-6 text-slate-500">
            A person can be introverted without having social anxiety.
            Introversion itself is not a mental health disorder.
          </p>
        </section>
<AdSlot />
        {/* Strengths */}
        <section className="mt-14">
          <SectionHeading
            eyebrow="10 · Possible strengths"
            title="Potential Strengths Associated With Introversion"
            description="Some preferences commonly associated with introversion can be useful in particular situations. These are possibilities, not guaranteed abilities shared by every introvert."
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <InfoCard icon={Lightbulb} title="Reflective thinking" color="blue">
              Taking time to consider information and examine different
              perspectives before responding.
            </InfoCard>
            <InfoCard icon={Eye} title="Careful observation" color="violet">
              Paying attention to details, conversations and environmental
              information.
            </InfoCard>
            <InfoCard icon={Heart} title="Close relationships" color="rose">
              Investing time in a smaller number of meaningful personal
              relationships.
            </InfoCard>
            <InfoCard icon={Target} title="Independent work" color="emerald">
              Being comfortable with tasks that involve individual focus
              and self-directed effort.
            </InfoCard>
            <InfoCard icon={BookOpen} title="Deep engagement" color="amber">
              Enjoying extended periods of reading, research or focused
              learning.
            </InfoCard>
            <InfoCard icon={MessageCircle} title="Thoughtful communication" color="blue">
              Preferring to consider ideas carefully before contributing
              to a discussion.
            </InfoCard>
          </div>
        </section>

        {/* Challenges */}
        <section className="mt-14">
          <SectionHeading
            eyebrow="11 · Possible challenges"
            title="Challenges Introverted People May Experience"
            description="Difficulties often arise when personal preferences conflict with environmental or social expectations."
          />

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <h3 className="font-bold text-slate-900">Situational challenges</h3>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
                <li className="flex gap-2">
                  <AlertCircle className="mt-1 shrink-0 text-amber-600" size={16} />
                  <span>Feeling uncomfortable in highly stimulating environments.</span>
                </li>
                <li className="flex gap-2">
                  <AlertCircle className="mt-1 shrink-0 text-amber-600" size={16} />
                  <span>Finding frequent networking activities tiring or less enjoyable.</span>
                </li>
                <li className="flex gap-2">
                  <AlertCircle className="mt-1 shrink-0 text-amber-600" size={16} />
                  <span>Being overlooked in workplaces that reward frequent verbal participation.</span>
                </li>
                <li className="flex gap-2">
                  <AlertCircle className="mt-1 shrink-0 text-amber-600" size={16} />
                  <span>Needing more personal time after demanding social schedules.</span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <h3 className="font-bold text-slate-900">Helpful approaches</h3>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
                <li className="flex gap-2">
                  <CheckCircle2 className="mt-1 shrink-0 text-emerald-600" size={16} />
                  Prepare key points before meetings or presentations.
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="mt-1 shrink-0 text-emerald-600" size={16} />
                  Use one-to-one conversations to build professional relationships.
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="mt-1 shrink-0 text-emerald-600" size={16} />
                  Communicate ideas through writing when appropriate.
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="mt-1 shrink-0 text-emerald-600" size={16} />
                  Balance social responsibilities with adequate personal time.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Misconceptions */}
        <section className="mt-14">
          <SectionHeading
            eyebrow="12 · Clear the confusion"
            title="Common Misconceptions About Introversion"
            description="Introversion is often misunderstood because people assume that quiet behaviour reveals everything about someone's personality."
          />

          <div className="space-y-3">
            {[
              {
                wrong: "All introverts are shy.",
                correct: "Introversion and shyness are different. Introverts can be socially confident and comfortable communicating.",
              },
              {
                wrong: "Introverts dislike people.",
                correct: "Introverts can enjoy friendships, relationships and social activities. They may simply prefer different social settings.",
              },
              {
                wrong: "Introverts cannot become leaders.",
                correct: "Leadership depends on many skills, including decision-making, communication, responsibility and judgment. Introversion does not prevent leadership.",
              },
              {
                wrong: "Introverts are always quiet.",
                correct: "An introverted person may be highly expressive and talkative around familiar people or when discussing an area of interest.",
              },
              {
                wrong: "Introversion is a weakness that needs to be corrected.",
                correct: "Introversion is a normal personality tendency, not a defect or disorder.",
              },
              {
                wrong: "Introverts cannot enjoy public speaking.",
                correct: "Many introverted individuals speak confidently in public. Their preference for social stimulation does not determine their speaking ability.",
              },
            ].map((item) => (
              <div key={item.wrong} className="rounded-xl border border-slate-200 bg-white p-4">
                <p className="text-sm font-bold text-rose-800">
                  <span className="mr-2">✕</span>
                  {item.wrong}
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  <span className="mr-2 font-bold text-emerald-700">✓</span>
                  {item.correct}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Workplace and education */}
        <section className="mt-14">
          <SectionHeading
            eyebrow="13 · Practical applications"
            title="Introversion in Education and the Workplace"
            description="Understanding personality differences can help create environments where people with different social preferences can contribute effectively."
          />

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
              <div className="mb-3 flex items-center gap-2">
                <GraduationCap className="text-blue-700" size={23} />
                <h3 className="font-bold text-slate-900">In education</h3>
              </div>
              <ul className="space-y-3 text-sm leading-6 text-slate-600">
                <li>Provide opportunities for individual reflection and written responses.</li>
                <li>Allow students to prepare before group discussions.</li>
                <li>Use a balance of individual and collaborative activities.</li>
                <li>Evaluate understanding rather than judging students only by how often they speak.</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
              <div className="mb-3 flex items-center gap-2">
                <Target className="text-violet-700" size={23} />
                <h3 className="font-bold text-slate-900">In the workplace</h3>
              </div>
              <ul className="space-y-3 text-sm leading-6 text-slate-600">
                <li>Provide clear agendas before important meetings.</li>
                <li>Allow employees to contribute through speaking or writing.</li>
                <li>Recognize different communication and collaboration styles.</li>
                <li>Assess employees through actual performance and skills rather than sociability alone.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Exam focus */}
        <section className="mt-14 rounded-3xl bg-slate-950 p-6 text-white sm:p-8">
          <SectionHeading
            eyebrow="14 · Competitive examination focus"
            title="Important Points to Remember"
            description="Revise these concepts for psychology, education and general competitive examinations."
            dark
          />

          <div className="grid gap-3 sm:grid-cols-2">
            {[
              ["Carl Gustav Jung", "Associated with the psychological concepts of introversion and extraversion."],
              ["Introversion", "A personality orientation emphasizing the inner or subjective world in Jung's framework."],
              ["Extraversion", "An orientation toward the external world in Jung's framework."],
              ["Big Five", "Introversion is generally associated with the lower end of the extraversion dimension."],
              ["Ambiversion", "Describes a mixture of introverted and extraverted tendencies."],
              ["Shyness", "Social hesitation or discomfort; it is not the same as introversion."],
              ["Social Anxiety", "A mental health condition involving significant fear or anxiety in social situations."],
              ["Key distinction", "Introversion is a normal personality trait, not a psychological disorder."],
            ].map(([term, detail]) => (
              <div key={term} className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="font-bold text-blue-300">{term}</p>
                <p className="mt-1 text-sm leading-6 text-slate-300">{detail}</p>
              </div>
            ))}
          </div>
        </section>
<AdSlot />
        {/* Practice */}
        <section className="mt-14">
          <SectionHeading
            eyebrow="15 · Test your understanding"
            title="Practice Questions"
            description="Try these questions to check your understanding of the important concepts."
          />

          <div className="space-y-4">
            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <p className="text-xs font-bold uppercase tracking-wide text-blue-700">Question 1</p>
              <h3 className="mt-2 font-bold text-slate-900">
                Which psychologist is strongly associated with the concepts of introversion and extraversion?
              </h3>
              <div className="mt-3 space-y-2 text-sm text-slate-600">
                <p>A. B. F. Skinner</p>
                <p>B. Carl Gustav Jung</p>
                <p>C. Ivan Pavlov</p>
                <p>D. Jean Piaget</p>
              </div>
              <details className="mt-4 rounded-xl bg-emerald-50 p-3">
                <summary className="cursor-pointer text-sm font-bold text-emerald-900">Reveal answer</summary>
                <p className="mt-2 text-sm leading-6 text-emerald-900">
                  <strong>B. Carl Gustav Jung.</strong> Jung described
                  introversion and extraversion as different psychological
                  orientations.
                </p>
              </details>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <p className="text-xs font-bold uppercase tracking-wide text-blue-700">Question 2</p>
              <h3 className="mt-2 font-bold text-slate-900">
                Introversion is generally associated with which dimension of the Big Five model?
              </h3>
              <div className="mt-3 space-y-2 text-sm text-slate-600">
                <p>A. Agreeableness</p>
                <p>B. Openness</p>
                <p>C. Extraversion</p>
                <p>D. Conscientiousness</p>
              </div>
              <details className="mt-4 rounded-xl bg-emerald-50 p-3">
                <summary className="cursor-pointer text-sm font-bold text-emerald-900">Reveal answer</summary>
                <p className="mt-2 text-sm leading-6 text-emerald-900">
                  <strong>C. Extraversion.</strong> Introversion is generally
                  understood as the lower end of the extraversion dimension.
                </p>
              </details>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <p className="text-xs font-bold uppercase tracking-wide text-blue-700">Question 3</p>
              <h3 className="mt-2 font-bold text-slate-900">
                Which statement about introversion is correct?
              </h3>
              <div className="mt-3 space-y-2 text-sm text-slate-600">
                <p>A. All introverts are shy.</p>
                <p>B. Introversion is a mental disorder.</p>
                <p>C. Introverts cannot become leaders.</p>
                <p>D. Introversion is a normal personality tendency.</p>
              </div>
              <details className="mt-4 rounded-xl bg-emerald-50 p-3">
                <summary className="cursor-pointer text-sm font-bold text-emerald-900">Reveal answer</summary>
                <p className="mt-2 text-sm leading-6 text-emerald-900">
                  <strong>D. Introversion is a normal personality tendency.</strong>
                  It does not automatically indicate shyness, anxiety or
                  a limitation in ability.
                </p>
              </details>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <p className="text-xs font-bold uppercase tracking-wide text-blue-700">Question 4</p>
              <h3 className="mt-2 font-bold text-slate-900">
                What does ambiversion describe?
              </h3>
              <div className="mt-3 space-y-2 text-sm text-slate-600">
                <p>A. Only extreme introversion</p>
                <p>B. A combination of introverted and extraverted tendencies</p>
                <p>C. A type of social anxiety</p>
                <p>D. A memory disorder</p>
              </div>
              <details className="mt-4 rounded-xl bg-emerald-50 p-3">
                <summary className="cursor-pointer text-sm font-bold text-emerald-900">Reveal answer</summary>
                <p className="mt-2 text-sm leading-6 text-emerald-900">
                  <strong>B. A combination of introverted and extraverted tendencies.</strong>
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="mt-14">
          <SectionHeading
            eyebrow="16 · Frequently asked questions"
            title="Introversion FAQs"
          />

          <div className="space-y-3">
            {[
              [
                "What is introversion in simple words?",
                "Introversion is a personality tendency associated with a preference for quieter environments, reflection and relatively lower external stimulation.",
              ],
              [
                "Who introduced the concept of introversion?",
                "Carl Gustav Jung is strongly associated with introducing introversion and extraversion as psychological orientations in personality theory.",
              ],
              [
                "Are introverts shy?",
                "Not necessarily. Introversion is a personality orientation, whereas shyness involves social hesitation or discomfort.",
              ],
              [
                "Can an introvert become a good leader?",
                "Yes. Leadership depends on abilities such as communication, judgment, decision-making and responsibility. Introversion does not prevent effective leadership.",
              ],
              [
                "What is the difference between introversion and extraversion?",
                "Introversion is generally associated with a greater preference for inward reflection and lower stimulation, while extraversion is associated with greater engagement with external social and environmental stimulation.",
              ],
              [
                "What is an ambivert?",
                "An ambivert displays a combination of introverted and extraverted tendencies rather than a strong preference for only one end.",
              ],
              [
                "Is introversion a psychological disorder?",
                "No. Introversion is a normal personality trait and should not be confused with a mental health condition.",
              ],
            ].map(([question, answer]) => (
              <details
                key={question}
                className="group rounded-xl border border-slate-200 bg-white p-4"
              >
                <summary className="cursor-pointer list-none font-bold text-slate-900">
                  <span className="flex items-center justify-between gap-3">
                    {question}
                    <span className="text-blue-700 transition-transform group-open:rotate-180">
                      <ArrowLeftRight size={17} />
                    </span>
                  </span>
                </summary>
                <p className="mt-3 border-t border-slate-100 pt-3 text-sm leading-7 text-slate-600">
                  {answer}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* Conclusion */}
        <section className="mt-14">
          <div className="rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-indigo-50 p-6 sm:p-8">
            <div className="flex items-center gap-2 text-blue-800">
              <Lightbulb size={22} />
              <h2 className="text-xl font-bold">Conclusion</h2>
            </div>
            <p className="mt-4 text-sm leading-7 text-slate-700">
              Introversion is a normal personality orientation associated
              with inward reflection and a relatively lower preference for
              external stimulation. Carl Gustav Jung helped establish the
              concepts of introversion and extraversion in personality
              psychology, while modern personality research places
              introversion toward the lower end of the Big Five extraversion
              dimension. It is important to distinguish introversion from
              shyness and social anxiety. Understanding this trait helps
              explain individual differences without treating one personality
              style as better than another.
            </p>
          </div>
        </section>

        {/* References */}
        <section className="mt-10">
          <h2 className="text-lg font-bold text-slate-900">
            Further Reading and References
          </h2>
          <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
            <li>
              <strong>Jung, C. G. (1921).</strong>{" "}
              <em>Psychological Types.</em> A foundational work discussing
              psychological attitudes, including introversion and extraversion.
            </li>
            <li>
              <strong>McCrae, R. R., & Costa, P. T. Jr.</strong>{" "}
              Research on the Five-Factor Model of personality.
            </li>
            <li>
              <strong>American Psychological Association.</strong>{" "}
              <a
                href="https://dictionary.apa.org/"
                target="_blank"
                rel="noreferrer"
                className="font-bold text-blue-700 underline underline-offset-2"
              >
                APA Dictionary of Psychology
              </a>
            </li>
            <li>
              <strong>OpenStax Psychology 2e.</strong>{" "}
              <a
                href="https://openstax.org/details/books/psychology-2e"
                target="_blank"
                rel="noreferrer"
                className="font-bold text-blue-700 underline underline-offset-2"
              >
                Psychology 2e textbook
              </a>
            </li>
          </ul>
        </section>

      </div>
    </main>
  );
}
