
"use client";

import { useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Brain,
  CheckCircle2,
  RotateCcw,
  Sparkles,
  Target,
  TrendingUp,
} from "lucide-react";

const questions = [
  // Extraversion / Introversion
  {
    dimension: "E / I",
    label: "Social Energy",
    question: "After a long and tiring week, what would you naturally prefer?",
    a: "Meeting friends or spending time with a group.",
    b: "Having quiet time alone or with a few close people.",
    aType: "E",
    bType: "I",
  },
  {
    dimension: "E / I",
    label: "Communication",
    question: "When you have an interesting new idea, what do you usually do?",
    a: "Discuss it with someone to develop my thoughts.",
    b: "Think about it privately before sharing it.",
    aType: "E",
    bType: "I",
  },
  {
    dimension: "E / I",
    label: "Social Situations",
    question: "At a gathering where you know very few people, what feels more natural?",
    a: "Starting conversations and meeting new people.",
    b: "Observing first and talking when I feel comfortable.",
    aType: "E",
    bType: "I",
  },
  {
    dimension: "E / I",
    label: "Working Style",
    question: "Which working environment would you generally prefer?",
    a: "A collaborative environment with frequent interaction.",
    b: "A quieter environment with time for independent work.",
    aType: "E",
    bType: "I",
  },

  // Sensing / Intuition
  {
    dimension: "S / N",
    label: "Information",
    question: "When learning something new, what helps you more?",
    a: "Practical examples, facts and step-by-step instructions.",
    b: "Understanding concepts, patterns and the bigger picture.",
    aType: "S",
    bType: "N",
  },
  {
    dimension: "S / N",
    label: "Attention",
    question: "When describing an event, what do you tend to remember?",
    a: "Specific details and what actually happened.",
    b: "The overall meaning, connections and possibilities.",
    aType: "S",
    bType: "N",
  },
  {
    dimension: "S / N",
    label: "Problem Solving",
    question: "When facing an unfamiliar problem, where do you usually begin?",
    a: "With available facts and methods that have worked before.",
    b: "By exploring new ideas and possible explanations.",
    aType: "S",
    bType: "N",
  },
  {
    dimension: "S / N",
    label: "Interests",
    question: "Which type of discussion usually attracts your attention?",
    a: "Practical matters, real experiences and useful information.",
    b: "Theories, future possibilities and abstract ideas.",
    aType: "S",
    bType: "N",
  },

  // Thinking / Feeling
  {
    dimension: "T / F",
    label: "Decision Making",
    question: "When making an important decision, what do you generally prioritize?",
    a: "Logic, consistency and objective evidence.",
    b: "Personal values and how the decision affects people.",
    aType: "T",
    bType: "F",
  },
  {
    dimension: "T / F",
    label: "Disagreement",
    question: "When someone disagrees with your opinion, what is your natural approach?",
    a: "Examine the arguments and determine which reasoning is stronger.",
    b: "Understand their feelings and the personal reasons behind their view.",
    aType: "T",
    bType: "F",
  },
  {
    dimension: "T / F",
    label: "Feedback",
    question: "When giving feedback, what do you tend to emphasize?",
    a: "Directness, accuracy and areas that need improvement.",
    b: "Encouragement, sensitivity and the person's feelings.",
    aType: "T",
    bType: "F",
  },
  {
    dimension: "T / F",
    label: "Fairness",
    question: "Which approach to fairness feels more natural to you?",
    a: "Applying consistent rules and standards to everyone.",
    b: "Considering individual circumstances and personal needs.",
    aType: "T",
    bType: "F",
  },

  // Judging / Perceiving
  {
    dimension: "J / P",
    label: "Planning",
    question: "How do you generally approach an upcoming holiday?",
    a: "Plan the schedule and important activities in advance.",
    b: "Keep plans flexible and decide as things develop.",
    aType: "J",
    bType: "P",
  },
  {
    dimension: "J / P",
    label: "Deadlines",
    question: "When completing an assignment, what feels more natural?",
    a: "Finish it early and avoid leaving things until the last moment.",
    b: "Explore different possibilities and complete it closer to the deadline.",
    aType: "J",
    bType: "P",
  },
  {
    dimension: "J / P",
    label: "Daily Routine",
    question: "Which daily routine would you generally prefer?",
    a: "A structured schedule with clearly defined tasks.",
    b: "A flexible routine that can change throughout the day.",
    aType: "J",
    bType: "P",
  },
  {
    dimension: "J / P",
    label: "Decision Making",
    question: "When you have several options available, what do you prefer?",
    a: "Evaluate them and settle on a decision.",
    b: "Keep exploring because a better option may appear.",
    aType: "J",
    bType: "P",
  },
];

const typeInfo = {
  ISTJ: ["The Logistician", "Practical, dependable and organized. Often appreciates clear responsibilities and established methods."],
  ISFJ: ["The Defender", "Considerate, supportive and attentive to the needs of others."],
  INFJ: ["The Advocate", "Reflective, insightful and often motivated by personal values and meaningful goals."],
  INTJ: ["The Architect", "Strategic, independent and interested in complex problems and long-term possibilities."],
  ISTP: ["The Virtuoso", "Observant, practical and often enjoys understanding how things work."],
  ISFP: ["The Adventurer", "Flexible, sensitive and often appreciates creativity and personal expression."],
  INFP: ["The Mediator", "Imaginative, reflective and often guided by personal values and ideals."],
  INTP: ["The Logician", "Analytical, curious and interested in exploring ideas and theoretical problems."],
  ESTP: ["The Entrepreneur", "Action-oriented, adaptable and often enjoys solving immediate practical challenges."],
  ESFP: ["The Entertainer", "Expressive, sociable and often enjoys active experiences and social engagement."],
  ENFP: ["The Campaigner", "Enthusiastic, imaginative and interested in exploring new possibilities."],
  ENTP: ["The Debater", "Inventive, intellectually curious and often enjoys examining different viewpoints."],
  ESTJ: ["The Executive", "Organized, decisive and often values efficiency and clear responsibilities."],
  ESFJ: ["The Consul", "Cooperative, considerate and often interested in supporting a community."],
  ENFJ: ["The Protagonist", "Encouraging, people-oriented and often interested in helping others develop."],
  ENTJ: ["The Commander", "Strategic, assertive and often focused on organizing people and achieving goals."],
};

const dimensionInfo = {
  E: ["Extraversion", "You selected more responses associated with external interaction and social engagement."],
  I: ["Introversion", "You selected more responses associated with reflection and quieter environments."],
  S: ["Sensing", "You selected more responses associated with facts, practical details and observable information."],
  N: ["Intuition", "You selected more responses associated with patterns, ideas and possibilities."],
  T: ["Thinking", "You selected more responses associated with logical analysis and objective criteria."],
  F: ["Feeling", "You selected more responses associated with personal values and the impact of decisions on people."],
  J: ["Judging", "You selected more responses associated with structure, planning and settled decisions."],
  P: ["Perceiving", "You selected more responses associated with flexibility, adaptability and open options."],
};

const dimensionGroups = [
  ["E", "I"],
  ["S", "N"],
  ["T", "F"],
  ["J", "P"],
];

export default function MBTITest() {
  const [started, setStarted] = useState(false);
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const [finished, setFinished] = useState(false);

  const question = questions[current];
  const selected = answers[current];
  const progress = (Object.keys(answers).length / questions.length) * 100;

  const result = useMemo(() => {
    const scores = {
      E: 0, I: 0,
      S: 0, N: 0,
      T: 0, F: 0,
      J: 0, P: 0,
    };

    Object.entries(answers).forEach(([index, choice]) => {
      const item = questions[Number(index)];
      if (item && choice) scores[choice === "A" ? item.aType : item.bType]++;
    });

    const code = dimensionGroups
      .map(([first, second]) => scores[first] >= scores[second] ? first : second)
      .join("");

    return { scores, code };
  }, [answers]);

  const selectAnswer = (choice) => {
    setAnswers((previous) => ({
      ...previous,
      [current]: choice,
    }));
  };

  const nextQuestion = () => {
    if (!selected) return;

    if (current === questions.length - 1) {
      setFinished(true);
    } else {
      setCurrent((previous) => previous + 1);
    }
  };

  const previousQuestion = () => {
    if (current > 0) {
      setCurrent((previous) => previous - 1);
    }
  };

  const restart = () => {
    setStarted(false);
    setCurrent(0);
    setAnswers({});
    setFinished(false);
  };

  if (!started) {
    return (
      <div className="overflow-hidden rounded-3xl border border-indigo-100 bg-white shadow-sm">
        <div className="bg-gradient-to-br from-indigo-600 to-blue-700 p-6 text-white sm:p-9">
          <div className="flex size-14 items-center justify-center rounded-2xl bg-white/15">
            <Brain size={30} />
          </div>
          <h3 className="mt-5 text-2xl font-bold sm:text-3xl">
            Explore Your Personality Preferences
          </h3>
          <p className="mt-3 max-w-2xl leading-7 text-indigo-100">
            Answer 16 everyday questions to explore your preferences across
            the four MBTI dimensions and discover a possible four-letter type.
          </p>
        </div>

        <div className="p-6 sm:p-8">
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl bg-indigo-50 p-4">
              <Target className="text-indigo-600" size={22} />
              <p className="mt-3 font-bold text-slate-900">16 Questions</p>
              <p className="mt-1 text-sm text-slate-600">Four questions per dimension.</p>
            </div>
            <div className="rounded-xl bg-blue-50 p-4">
              <TrendingUp className="text-blue-600" size={22} />
              <p className="mt-3 font-bold text-slate-900">Progress Tracking</p>
              <p className="mt-1 text-sm text-slate-600">Complete one question at a time.</p>
            </div>
            <div className="rounded-xl bg-violet-50 p-4">
              <Sparkles className="text-violet-600" size={22} />
              <p className="mt-3 font-bold text-slate-900">Personal Result</p>
              <p className="mt-1 text-sm text-slate-600">Explore your four-letter preference code.</p>
            </div>
          </div>

          <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-4">
            <p className="text-sm leading-6 text-amber-900">
              <strong>Before you begin:</strong> There are no right or wrong
              answers. Select what generally describes you, rather than what
              you think is ideal. This is an educational self-reflection tool,
              not an official MBTI assessment or clinical evaluation.
            </p>
          </div>

          <button
            onClick={() => setStarted(true)}
            className="mt-7 flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-4 font-bold text-white transition hover:bg-indigo-700 sm:w-auto"
          >
            Start Personality Test <ArrowRight size={19} />
          </button>
        </div>
      </div>
    );
  }

  if (finished) {
    const [typeName, typeDescription] = typeInfo[result.code];

    return (
      <div className="overflow-hidden rounded-3xl border border-indigo-100 bg-white shadow-sm">
        <div className="bg-gradient-to-br from-indigo-600 to-blue-700 px-6 py-9 text-center text-white sm:px-10">
          <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-white/15">
            <Sparkles size={28} />
          </div>
          <p className="mt-5 text-sm font-bold uppercase tracking-widest text-indigo-100">
            Your MBTI-style result
          </p>
          <h3 className="mt-3 text-5xl font-bold tracking-[0.18em] sm:text-6xl">
            {result.code}
          </h3>
          <p className="mt-4 text-xl font-bold">{typeName}</p>
          <p className="mx-auto mt-3 max-w-xl leading-7 text-indigo-100">
            {typeDescription}
          </p>
        </div>

        <div className="p-5 sm:p-8">
          <h4 className="text-xl font-bold text-slate-900">
            Your Four Personality Preferences
          </h4>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            The following percentages show the distribution of your answers
            within each pair. They are not scientifically calibrated
            personality scores.
          </p>

          <div className="mt-6 space-y-6">
            {dimensionGroups.map(([first, second]) => {
              const total = result.scores[first] + result.scores[second];
              const firstPercent = Math.round((result.scores[first] / total) * 100);
              const secondPercent = 100 - firstPercent;
              const winner = firstPercent >= 50 ? first : second;
              const [winnerName, explanation] = dimensionInfo[winner];

              return (
                <div key={first} className="rounded-xl border border-slate-200 p-4 sm:p-5">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="font-bold text-slate-900">
                      {first} vs. {second}
                    </p>
                    <p className="text-sm font-bold text-indigo-700">
                      {winnerName} preference
                    </p>
                  </div>

                  <div className="mt-4 flex h-3 overflow-hidden rounded-full bg-slate-100">
                    <div
                      className="bg-indigo-600 transition-all"
                      style={{ width: `${firstPercent}%` }}
                    />
                    <div
                      className="bg-blue-300 transition-all"
                      style={{ width: `${secondPercent}%` }}
                    />
                  </div>

                  <div className="mt-3 flex justify-between gap-3 text-xs font-bold text-slate-600">
                    <span>{first}: {firstPercent}%</span>
                    <span>{second}: {secondPercent}%</span>
                  </div>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {explanation}
                  </p>

                  {firstPercent === 50 && (
                    <p className="mt-2 text-xs text-amber-700">
                      Your answers were evenly divided on this dimension.
                    </p>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-7 rounded-xl bg-indigo-50 p-5">
            <h4 className="font-bold text-indigo-950">How should you interpret this result?</h4>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              Your result represents the preferences selected in this
              particular exercise. It does not mean you always behave this
              way. People can use both sides of every dimension, and their
              responses may change with circumstances and experience.
            </p>
          </div>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <button
              onClick={restart}
              className="flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 font-bold text-white hover:bg-indigo-700"
            >
              <RotateCcw size={18} /> Retake Assessment
            </button>
          
          </div>

          <p className="mt-5 text-xs leading-6 text-slate-500">
            This result is not an official MBTI result, psychological diagnosis
            or validated personality measurement. It should not be used for
            employment, educational selection or other high-stakes decisions.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      <div className="border-b border-slate-100 p-5 sm:p-7">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="rounded-full bg-indigo-50 px-3 py-1.5 text-sm font-bold text-indigo-700">
            Question {current + 1} of {questions.length}
          </span>
          <span className="text-sm font-bold text-slate-500">
            {Math.round(progress)}% completed
          </span>
        </div>

        <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-100">
          <div
            className="h-full rounded-full bg-indigo-600 transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>

        <p className="mt-5 text-xs font-bold uppercase tracking-wider text-indigo-600">
          {question.dimension} · {question.label}
        </p>

        <h3 className="mt-3 text-xl font-bold leading-8 text-slate-900 sm:text-2xl">
          {question.question}
        </h3>

        <p className="mt-2 text-sm text-slate-500">
          Choose the response that feels more natural to you.
        </p>
      </div>

      <div className="space-y-3 p-5 sm:p-7">
        {[
          { value: "A", text: question.a },
          { value: "B", text: question.b },
        ].map((option) => {
          const isSelected = selected === option.value;

          return (
            <button
              key={option.value}
              onClick={() => selectAnswer(option.value)}
              aria-pressed={isSelected}
              className={`flex w-full items-start gap-4 rounded-xl border p-5 text-left transition ${
                isSelected
                  ? "border-indigo-500 bg-indigo-50 ring-1 ring-indigo-500"
                  : "border-slate-200 bg-white hover:border-indigo-300 hover:bg-slate-50"
              }`}
            >
              <span
                className={`flex size-8 shrink-0 items-center justify-center rounded-lg text-sm font-bold ${
                  isSelected
                    ? "bg-indigo-600 text-white"
                    : "bg-slate-100 text-slate-600"
                }`}
              >
                {option.value}
              </span>
              <span className="flex-1 pt-1 text-sm font-bold leading-6 text-slate-800 sm:text-base">
                {option.text}
              </span>
              {isSelected && (
                <CheckCircle2 className="mt-1 shrink-0 text-indigo-600" size={20} />
              )}
            </button>
          );
        })}
      </div>

      <div className="flex items-center justify-between gap-3 border-t border-slate-100 p-5 sm:px-7">
        <button
          onClick={previousQuestion}
          disabled={current === 0}
          className="flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-3 text-sm font-bold text-slate-700 hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
        >
          <ArrowLeft size={17} /> Previous
        </button>

        <button
          onClick={nextQuestion}
          disabled={!selected}
          className="flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-bold text-white hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-40"
        >
          {current === questions.length - 1 ? "See My Result" : "Next Question"}
          <ArrowRight size={17} />
        </button>
      </div>
    </div>
  );
}
