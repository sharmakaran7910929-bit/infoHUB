
import Breadcrumbs from "../../components/Breadcrumb";
import RelatedTopics from "../../components/ContinueReading";

export default function PsychologyLayout({ children }) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">

      {/* Psychology Section Banner */}
      <section className="relative overflow-hidden border-b border-slate-200 bg-white">

        {/* Background Decoration */}
        <div className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-purple-100/60 blur-3xl" />

        <div className="pointer-events-none absolute -right-24 top-10 h-64 w-64 rounded-full bg-blue-100/50 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

            {/* Section Information */}
            <div>
              <div className="mb-2 flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-purple-600">
                <span className="h-2 w-2 rounded-full bg-purple-600" />
                PriceTag HUB / Psychology
              </div>

              <h1 className="text-2xl font-medium tracking-tight text-slate-950 sm:text-3xl">
                Psychology
              </h1>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
                Explore human behaviour, cognitive processes, memory,
                emotions, personality, learning, motivation and mental
                development through practical explanations and
                evidence-based psychology guides.
              </p>
            </div>

            {/* Knowledge Hub Card */}
            <div className="hidden rounded-2xl border border-purple-100 bg-purple-50 px-5 py-4 sm:block">
              <div className="text-xs font-medium uppercase tracking-widest text-purple-500">
                Knowledge Hub
              </div>

              <div className="mt-1 text-sm font-medium text-purple-900">
                Understand the human mind and behaviour
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="mx-auto w-full max-w-7xl px-4 pt-5 sm:px-6 lg:px-8">
        <Breadcrumbs />
      </div>

      {/* Page Content */}
      <div className="relative">
        {children}
      </div>

      {/* Related Psychology Topics */}
      <RelatedTopics
        title="Explore More About Psychology"
        links={[
          { href: "/psychology/what-is-psychology", label: "What Is Psychology" },
          { href: "/psychology/branches-of-psychology", label: "Branches of Psychology" },
          { href: "/psychology/cognitive-psychology", label: "Cognitive Psychology" },
          { href: "/psychology/critical-thinking", label: "Critical Thinking" },
          { href: "/psychology/dunning-kruger-effect", label: "Dunning-Kruger Effect" },
          { href: "/psychology/confirmation-bias", label: "Confirmation Bias" },

          { href: "/psychology/types-of-memory", label: "Types of Memory" },
          { href: "/psychology/learning-theories", label: "Learning Theories" },
          { href: "/psychology/working-memory", label: "Working Memory" },

          { href: "/psychology/introversion", label: "Introversion" },
          { href: "/psychology/mbti-test", label: "MBTI Personality Test" },
          { href: "/psychology/big-five-personality", label: "Big Five Personality" },

          { href: "/psychology/social-learning-theory", label: "Social Learning Theory" },
          { href: "/psychology/habit-formation", label: "Habit Formation" },

          { href: "/psychology/emotional-intelligence", label: "Emotional Intelligence" },
          { href: "/psychology/intrinsic-motivation", label: "Intrinsic Motivation" },
          { href: "/psychology/human-emotions", label: "Human Emotions" },

          { href: "/psychology/piaget-stages", label: "Piaget Stages of Cognitive Development" },
          { href: "/psychology/cognitive-neuroscience", label: "Cognitive Neuroscience" },
          { href: "/psychology/cognitive-behavioural-therapy", label: "Cognitive Behavioural Therapy" },

          { href: "/psychology/educational-psychology", label: "Educational Psychology" },
          { href: "/psychology/stress-psychology", label: "Stress Psychology" },
          { href: "/psychology/sports-psychology", label: "Sports Psychology" },
          { href: "/psychology/consumer-psychology", label: "Consumer Psychology" },
          { href: "/psychology/positive-psychology", label: "Positive Psychology" },
        ]}
      />

    </div>
  );
}
