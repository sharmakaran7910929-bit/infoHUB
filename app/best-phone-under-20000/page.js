
"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  BatteryCharging,
  Camera,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  HardDrive,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Zap,
  ArrowRight,
  RotateCcw,
  Star,
} from "lucide-react";

const phones = [
  {
    id: "motorola",
    rank: 1,
    name: "Motorola Moto g37 Power 5G",
    price: 17854,
    image: "/mobile-20000/mobile-20000-1.jpg",
    ram: "4GB",
    storage: "128GB",
    display: '6.67-inch HD+ LCD',
    refresh: "120Hz",
    battery: "7000mAh listed in title",
    charging: "30W",
    processor: "MediaTek Dimensity 6400 (as listed)",
    camera: "50MP rear, 8MP front",
    rating: "3.8/5",
    reviews: 64,
    highlights: [
      "Large battery for extended use",
      "120Hz display",
      "3.5mm headphone jack",
    ],
    bestFor: ["battery", "display", "everyday"],
    note: "Confirm the battery capacity and processor on the seller's current listing before purchasing.",
  },
  {
    id: "oppo",
    rank: 2,
    name: "OPPO K14x 5G",
    price: 18880,
    image: "/mobile-20000/mobile-20000-2.jpg",
    ram: "4GB",
    storage: "128GB",
    display: '6.7-inch LCD',
    refresh: "90Hz in detailed specifications",
    battery: "6500mAh",
    charging: "45W SUPERVOOC",
    processor: "MediaTek Dimensity 6300",
    camera: "50MP main camera",
    rating: "4.1/5",
    reviews: 145,
    highlights: [
      "45W fast charging",
      "6500mAh battery",
      "128GB storage",
    ],
    bestFor: ["charging", "battery", "everyday"],
    note: "The listing has conflicting display refresh-rate details. Verify the final specifications before ordering.",
  },
  {
    id: "samsung",
    rank: 3,
    name: "Samsung Galaxy M17e 5G",
    price: 16498,
    image: "/mobile-20000/mobile-20000-3.jpg",
    ram: "4GB",
    storage: "128GB",
    display: '6.7-inch HD+ LCD',
    refresh: "90Hz",
    battery: "6000mAh",
    charging: "Check seller listing",
    processor: "MediaTek Dimensity 6300",
    camera: "50MP main + 2MP secondary, 8MP front",
    rating: "3.8/5",
    reviews: 1271,
    highlights: [
      "Lowest listed price",
      "Six generations of OS upgrades claimed in title",
      "Knox security",
    ],
    bestFor: ["budget", "updates", "security", "everyday"],
    note: "Check the exact software-update policy and charging specifications for this model and variant.",
  },
  {
    id: "oneplus",
    rank: 4,
    name: "OnePlus N6x",
    price: 18499,
    image: "/mobile-20000/mobile-20000-4.jpg",
    ram: "4GB",
    storage: "64GB",
    display: '6.8-inch HD+ LCD',
    refresh: "120Hz",
    battery: "7000mAh",
    charging: "Check seller listing",
    processor: "2.4GHz processor (model not specified)",
    camera: "13MP rear, 5MP front",
    rating: "3.6/5",
    reviews: 176,
    highlights: [
      "7000mAh battery",
      "Large 120Hz display",
      "Lower 64GB storage",
    ],
    bestFor: ["battery", "display"],
    note: "The supplied listing does not identify the processor model. Check the exact model and storage needs before buying.",
  },
  {
    id: "redmi",
    rank: 5,
    name: "Redmi 15C 5G Prime Edition",
    price: 17999,
    image: "/mobile-20000/mobile-20000-5.jpg",
    ram: "6GB",
    storage: "128GB",
    display: '6.9-inch HD+ LCD',
    refresh: "Up to 120Hz",
    battery: "6000mAh",
    charging: "33W",
    processor: "MediaTek Dimensity 6300",
    camera: "50MP rear camera",
    rating: "Not provided",
    reviews: 802,
    highlights: [
      "6GB RAM",
      "128GB storage",
      "Large 6.9-inch display",
    ],
    bestFor: ["storage", "multitasking", "display", "everyday"],
    note: "The supplied listing has no overall star rating. Check the current price and ratings before ordering.",
  },
];

const quizQuestions = [
  {
    title: "What matters most to you?",
    subtitle: "Choose your main reason for buying a phone.",
    key: "priority",
    options: [
      { label: "Long battery life", value: "battery", icon: BatteryCharging },
      { label: "Camera for photos", value: "camera", icon: Camera },
      { label: "Smooth, large display", value: "display", icon: Smartphone },
      { label: "More storage and RAM", value: "storage", icon: HardDrive },
      { label: "Software updates and security", value: "updates", icon: ShieldCheck },
      { label: "Lowest price", value: "budget", icon: Star },
    ],
  },
  {
    title: "How do you use your phone?",
    subtitle: "Pick the closest match.",
    key: "usage",
    options: [
      { label: "Calls, WhatsApp and browsing", value: "everyday" },
      { label: "Social media and multitasking", value: "multitasking" },
      { label: "Videos and entertainment", value: "display" },
      { label: "Photos and video recording", value: "camera" },
    ],
  },
  {
    title: "How much storage do you need?",
    subtitle: "Think about photos, videos and apps.",
    key: "storage",
    options: [
      { label: "Basic use is enough", value: "basic" },
      { label: "128GB is preferable", value: "128" },
      { label: "I install many apps and keep lots of photos", value: "lots" },
    ],
  },
  {
    title: "What is your budget preference?",
    subtitle: "All five phones were supplied as options below ₹20,000.",
    key: "budget",
    options: [
      { label: "Keep the price as low as possible", value: "low" },
      { label: "Balance features and price", value: "balanced" },
      { label: "I can spend close to ₹19,000", value: "high" },
    ],
  },
];

function formatPrice(price) {
  return `₹${price.toLocaleString("en-IN")}`;
}

function getRecommendation(answers) {
  const scored = phones.map((phone) => {
    let score = 0;

    if (answers.priority && phone.bestFor.includes(answers.priority)) {
      score += 5;
    }

    if (answers.usage && phone.bestFor.includes(answers.usage)) {
      score += 3;
    }

    if (
      answers.storage === "128" &&
      phone.storage === "128GB"
    ) {
      score += 3;
    }

    if (
      answers.storage === "lots" &&
      phone.ram === "6GB" &&
      phone.storage === "128GB"
    ) {
      score += 5;
    }

    if (answers.storage === "basic" && phone.storage === "64GB") {
      score += 1;
    }

    if (answers.budget === "low") {
      score += Math.max(0, 5 - Math.floor(phone.price / 5000));
    }

    if (answers.budget === "balanced" && phone.price < 18500) {
      score += 2;
    }

    if (answers.budget === "high" && phone.price >= 18000) {
      score += 1;
    }

    return { ...phone, score };
  });

  scored.sort((a, b) => b.score - a.score || a.price - b.price);
  return scored[0];
}

function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="mx-auto mb-9 max-w-2xl text-center">
      <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-base leading-7 text-slate-600">
          {description}
        </p>
      )}
    </div>
  );
}

function PhoneImage({ phone }) {
  return (
    <div className="relative flex h-56 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 p-4">
      <Image
        src={phone.image}
        alt={`${phone.name} smartphone`}
        width={420}
        height={420}
        className="h-full w-full object-contain transition duration-300 group-hover:scale-105"
      />
      <span className="absolute left-3 top-3 rounded-full border border-white bg-white/90 px-3 py-1 text-xs font-bold text-slate-800 shadow-sm">
        #{phone.rank} PICK
      </span>
    </div>
  );
}

function PhoneCard({ phone }) {
  return (
    <article className="group flex flex-col rounded-3xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-xl sm:p-5">
      <PhoneImage phone={phone} />

      <div className="flex flex-1 flex-col pt-5">
        <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-blue-700">
          <CheckCircle2 size={15} />
          Under ₹20,000
        </div>

        <h3 className="text-xl font-bold leading-snug text-slate-950">
          {phone.name}
        </h3>

        <div className="mt-3 flex items-baseline gap-2">
          <span className="text-2xl font-bold text-slate-950">
            {formatPrice(phone.price)}
          </span>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-2">
          <div className="rounded-xl bg-slate-50 p-3">
            <p className="text-xs text-slate-500">RAM</p>
            <p className="mt-1 font-bold text-slate-900">{phone.ram}</p>
          </div>
          <div className="rounded-xl bg-slate-50 p-3">
            <p className="text-xs text-slate-500">Storage</p>
            <p className="mt-1 font-bold text-slate-900">{phone.storage}</p>
          </div>
          <div className="rounded-xl bg-slate-50 p-3">
            <p className="text-xs text-slate-500">Battery</p>
            <p className="mt-1 text-sm font-bold text-slate-900">
              {phone.battery}
            </p>
          </div>
          <div className="rounded-xl bg-slate-50 p-3">
            <p className="text-xs text-slate-500">Display</p>
            <p className="mt-1 text-sm font-bold text-slate-900">
              {phone.refresh}
            </p>
          </div>
        </div>

        <ul className="mt-4 space-y-2">
          {phone.highlights.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2 text-sm leading-6 text-slate-700"
            >
              <CheckCircle2
                size={16}
                className="mt-1 shrink-0 text-emerald-600"
              />
              {item}
            </li>
          ))}
        </ul>

        <details className="mt-4 rounded-xl border border-slate-200 p-3">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-2 text-sm font-bold text-slate-800">
            Full specifications
            <ChevronDown size={17} />
          </summary>
          <dl className="mt-3 space-y-3 text-sm">
            {[
              ["Processor", phone.processor],
              ["Camera", phone.camera],
              ["Charging", phone.charging],
              ["Customer rating", phone.rating],
              ["Reviews shown in listing", phone.reviews.toLocaleString("en-IN")],
            ].map(([label, value]) => (
              <div key={label}>
                <dt className="font-semibold text-slate-700">{label}</dt>
                <dd className="mt-0.5 text-slate-600">{value}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-3 border-t border-slate-100 pt-3 text-xs leading-5 text-amber-800">
            {phone.note}
          </p>
        </details>

        <a
          href={`https://www.amazon.in/dp/${
            {
              motorola: "B0H2X5SRQX",
              oppo: "B0GPDK4MMN",
              samsung: "B0GN24SV22",
              oneplus: "B0H7SB1JH7",
              redmi: "B0G2B251KD",
            }[phone.id]
          }?tag=pricetaghub-21`}
          target="_blank"
          rel="nofollow sponsored noopener noreferrer"
          className="mt-5 flex items-center justify-center gap-2 rounded-xl bg-slate-950 px-4 py-3 font-bold text-white transition hover:bg-blue-700"
        >
          Check Price on Amazon
          <ArrowRight size={17} />
        </a>
      </div>
    </article>
  );
}

function PhoneFinder() {
  const [answers, setAnswers] = useState({});
  const [step, setStep] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const question = quizQuestions[step];
  const recommendation = useMemo(
    () => getRecommendation(answers),
    [answers]
  );

  function choose(value) {
    setAnswers((current) => ({
      ...current,
      [question.key]: value,
    }));
  }

  function next() {
    if (!answers[question.key]) return;

    if (step < quizQuestions.length - 1) {
      setStep((current) => current + 1);
    } else {
      setShowResult(true);
    }
  }

  function reset() {
    setAnswers({});
    setStep(0);
    setShowResult(false);
  }

  return (
    <section
      id="phone-finder"
      className="overflow-hidden rounded-[2rem] border border-blue-100 bg-white shadow-xl"
    >
      <div className="bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-900 px-6 py-8 text-white sm:px-10 sm:py-10">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
          <Sparkles size={25} />
        </div>
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-200">
          Interactive phone finder
        </p>
        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
          Which phone is right for you?
        </h2>
        <p className="mt-3 max-w-xl leading-7 text-blue-100">
          Answer four quick questions to find the closest match for your
          priorities, storage needs and budget.
        </p>
      </div>

      <div className="p-6 sm:p-10">
        {!showResult ? (
          <>
            <div className="mb-8 flex items-center justify-between gap-4">
              <p className="text-sm font-bold text-slate-700">
                Question {step + 1} of {quizQuestions.length}
              </p>
              <p className="text-sm text-slate-500">
                {Math.round(((step + 1) / quizQuestions.length) * 100)}% complete
              </p>
            </div>

            <div className="mb-8 h-2 overflow-hidden rounded-full bg-slate-100">
              <div
                className="h-full rounded-full bg-blue-600 transition-all"
                style={{
                  width: `${((step + 1) / quizQuestions.length) * 100}%`,
                }}
              />
            </div>

            <h3 className="text-2xl font-bold text-slate-950">
              {question.title}
            </h3>
            <p className="mt-2 text-slate-600">{question.subtitle}</p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {question.options.map((option) => {
                const Icon = option.icon;
                const selected = answers[question.key] === option.value;

                return (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => choose(option.value)}
                    aria-pressed={selected}
                    className={`flex min-h-16 items-center gap-3 rounded-2xl border p-4 text-left transition ${
                      selected
                        ? "border-blue-600 bg-blue-50 ring-2 ring-blue-100"
                        : "border-slate-200 bg-white hover:border-blue-300 hover:bg-slate-50"
                    }`}
                  >
                    {Icon && (
                      <Icon
                        size={21}
                        className={selected ? "text-blue-700" : "text-slate-500"}
                      />
                    )}
                    <span className="flex-1 font-semibold text-slate-800">
                      {option.label}
                    </span>
                    <span
                      className={`flex h-5 w-5 items-center justify-center rounded-full border ${
                        selected
                          ? "border-blue-600 bg-blue-600 text-white"
                          : "border-slate-300"
                      }`}
                    >
                      {selected && <CheckCircle2 size={15} />}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => setStep((current) => Math.max(0, current - 1))}
                disabled={step === 0}
                className="rounded-xl border border-slate-200 px-5 py-3 font-bold text-slate-700 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
              >
                Previous
              </button>
              <button
                type="button"
                onClick={next}
                disabled={!answers[question.key]}
                className="flex items-center gap-2 rounded-xl bg-blue-700 px-6 py-3 font-bold text-white transition hover:bg-blue-800 disabled:cursor-not-allowed disabled:opacity-40"
              >
                {step === quizQuestions.length - 1
                  ? "Find My Phone"
                  : "Next Question"}
                <ChevronRight size={18} />
              </button>
            </div>
          </>
        ) : (
          <div className="text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-700">
              <CheckCircle2 size={34} />
            </div>
            <p className="mt-4 text-sm font-bold uppercase tracking-widest text-emerald-700">
              Your closest match
            </p>
            <h3 className="mt-2 text-3xl font-bold text-slate-950">
              {recommendation.name}
            </h3>
            <p className="mt-3 text-2xl font-bold text-blue-700">
              {formatPrice(recommendation.price)}
            </p>

            <div className="mx-auto mt-6 max-w-sm rounded-2xl bg-slate-50 p-4 text-left">
              <p className="font-bold text-slate-900">Why it matched</p>
              <ul className="mt-3 space-y-2">
                {recommendation.highlights.map((item) => (
                  <li
                    key={item}
                    className="flex gap-2 text-sm text-slate-700"
                  >
                    <CheckCircle2
                      size={16}
                      className="mt-0.5 shrink-0 text-emerald-600"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <p className="mt-5 text-sm leading-6 text-slate-600">
              This recommendation is based on your answers and the supplied
              specifications, not an independent performance test.
            </p>

            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <a
                href={`#phone-${recommendation.id}`}
                onClick={() => {
                  document
                    .getElementById(`phone-${recommendation.id}`)
                    ?.scrollIntoView({ behavior: "smooth", block: "center" });
                }}
                className="rounded-xl bg-blue-700 px-5 py-3 font-bold text-white hover:bg-blue-800"
              >
                View Recommended Phone
              </a>
              <button
                type="button"
                onClick={reset}
                className="flex items-center gap-2 rounded-xl border border-slate-200 px-5 py-3 font-bold text-slate-700 hover:bg-slate-50"
              >
                <RotateCcw size={16} />
                Start Again
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export const metadata = {
  title: "Top 5 Best Smartphone Under Rs 20000 | PriceTag HUB",
  description:
    "Compare 5 smartphones under Rs 20,000 by price, battery, camera, RAM, storage and display. Use our interactive phone finder to choose the right phone.",
};

export default function BestPhoneUnder20000Page() {
  const cheapestPhone = [...phones].sort((a, b) => a.price - b.price)[0];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-900 text-white">
        <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 left-0 h-72 w-72 rounded-full bg-indigo-400/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-blue-100">
              <Zap size={16} />
              Smartphone Buying Guide
            </div>

            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
              Top 5 Best Smartphone Under Rs 20000
            </h1>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-blue-100">
              Looking for a phone with a strong battery, a good camera,
              useful storage or a smooth display? Compare five options and
              discover which one fits your everyday needs.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#phone-finder"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 font-bold text-slate-950 transition hover:bg-blue-50"
              >
                Find My Phone
                <ArrowRight size={18} />
              </a>
              <a
                href="#top-phones"
                className="rounded-xl border border-white/30 px-6 py-3.5 font-bold text-white transition hover:bg-white/10"
              >
                Compare All 5
              </a>
            </div>

            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm text-blue-100">
              <span className="flex items-center gap-2">
                <CheckCircle2 size={17} /> Five phones compared
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={17} /> Interactive recommendations
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={17} /> Prices in Indian rupees
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8">
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
              <BatteryCharging size={23} />
            </div>
            <h2 className="font-bold text-slate-950">Battery Life</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Compare listed battery capacities from 6000mAh to 7000mAh.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-violet-50 text-violet-700">
              <Camera size={23} />
            </div>
            <h2 className="font-bold text-slate-950">Camera Needs</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Compare the supplied camera specifications before you decide.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
              <HardDrive size={23} />
            </div>
            <h2 className="font-bold text-slate-950">Storage and RAM</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              See which models offer 128GB storage and which offer more RAM.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-14 sm:px-8">
        <PhoneFinder />
      </section>

      <section
        id="top-phones"
        className="mx-auto max-w-7xl scroll-mt-8 px-5 py-12 sm:px-8"
      >
        <SectionTitle
          eyebrow="Compare Your Options"
          title="5 Smartphones Under ₹20,000"
          description="Compare prices, battery capacity, display, memory and the features that matter to you."
        />

        <div className="mb-7 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-blue-100 bg-blue-50 p-4">
          <div>
            <p className="font-bold text-slate-950">
              Lowest supplied price: {formatPrice(cheapestPhone.price)}
            </p>
            <p className="mt-1 text-sm text-slate-600">
              {cheapestPhone.name}
            </p>
          </div>
          <a
            href="#phone-finder"
            className="inline-flex items-center gap-2 font-bold text-blue-800 hover:text-blue-950"
          >
            Get a recommendation <ArrowRight size={16} />
          </a>
        </div>

        <div className="grid items-stretch gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {phones.map((phone) => (
            <div key={phone.id} id={`phone-${phone.id}`} className="scroll-mt-8">
              <PhoneCard phone={phone} />
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-12 sm:px-8">
        <SectionTitle
          eyebrow="Before You Buy"
          title="What Should You Check?"
          description="A phone's headline specifications do not tell the whole story."
        />

        <div className="space-y-4">
          {[
            {
              title: "Battery capacity and charging",
              text: "A larger mAh figure can be useful, but real battery life also depends on software, screen brightness, network coverage and your usage.",
            },
            {
              title: "Camera quality",
              text: "Megapixels alone do not determine photo quality. Look for sample photos, low-light results, autofocus and video performance.",
            },
            {
              title: "RAM and storage",
              text: "Choose 128GB if you keep many photos, videos or apps. More RAM can help multitasking, but software optimisation also matters.",
            },
            {
              title: "Software updates and durability",
              text: "Confirm the exact model's update commitment, warranty, water-resistance rating and service availability before purchasing.",
            },
            {
              title: "Final price and specifications",
              text: "Online prices and variants can change. Check the seller's current price, selected RAM/storage variant and complete specifications before placing an order.",
            },
          ].map((item) => (
            <details
              key={item.title}
              className="group rounded-2xl border border-slate-200 bg-white p-5"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-slate-950">
                {item.title}
                <ChevronDown
                  size={19}
                  className="shrink-0 transition group-open:rotate-180"
                />
              </summary>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">
                {item.text}
              </p>
            </details>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-blue-700 to-indigo-700 px-6 py-10 text-white sm:px-10 sm:py-12">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-100">
              Make a confident choice
            </p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Still unsure which phone to buy?
            </h2>
            <p className="mt-3 leading-7 text-blue-100">
              Answer a few simple questions and compare your recommended
              option with the other phones on this page.
            </p>
            <a
              href="#phone-finder"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-bold text-blue-900 transition hover:bg-blue-50"
            >
              Try Phone Finder <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
