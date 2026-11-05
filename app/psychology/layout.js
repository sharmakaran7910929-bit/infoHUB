import RelatedTopics from "../../components/ContinueReading";


export default function BasicsLayout({ children }) {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        {children}
      </div>
       {/* Related topics */}
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
