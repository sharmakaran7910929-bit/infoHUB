
"use client";

import { useMemo, useState } from "react";
import {
  BatteryCharging,
  Camera,
  CheckCircle2,
  ChevronRight,
  HardDrive,
  ShieldCheck,
  Smartphone,
  Trophy,
  RotateCcw,
} from "lucide-react";

const phones = [
  {
    id: 1,
    name: "Motorola Moto g37 Power 5G",
    price: 17854,
    image: "/mobile-20000/mobile-20000-1.jpg",
    ram: "4GB",
    storage: "128GB",
    display: '6.67" HD+',
    refresh: "120Hz",
    camera: "50MP rear",
    battery: "6000mAh listed in detailed specs",
    charging: "30W listed in title",
    processor: "Dimensity 6400 (as listed in title)",
    rating: "3.8/5",
    reviews: "64 reviews",
    bestFor: ["battery", "everyday"],
    summary:
      "A large-battery option for everyday browsing, calls and general use. Verify the battery capacity and charging specifications on the seller listing before buying.",
    color: "from-green-50 to-white",
    amazon: "https://www.amazon.in/Motorola-Impenetrable-6-67-inch-Dimensity-Charging/dp/B0H2X5SRQX?crid=2W3Q5LC2FX8Q&dib=eyJ2IjoiMSJ9.j85yny7dWPLPEP6NPWvVeU7CUAyEsi5g_jyOcWCWd3eVNV-FTaHFAN18QO99VddEaDtJ3xPtHVYxPGWBCc3DARKGiUUSUj_ECds9xj0AbrrQfNV7W1BnKDnuwe9a7Zw3_vRzD5PtM-9YgD63m-zlSgTiR3P4FR24-xfjXO3iqmRzNNdwZU_4Ex2WZatFVbpPZ0KhGSrut1vDCGCMzUE9fIxuGbY3mjhXfM-1sae2FoQ.M5V2UPckoV0WqXxxEzZ0Kb7yB_nZhf4SGy3KZzTYMS4&dib_tag=se&keywords=smartphone+under+20000+5g+mobile&qid=1792814601&sprefix=smartphone+under+20000%2Caps%2C307&sr=8-21&linkCode=ll2&tag=pricetaghub-21&linkId=0fe0db3fcb0c14b4a7fd32bc8aa960ba&ref_=as_li_ss_tl",
  },
  {
    id: 2,
    name: "OPPO K14x 5G",
    price: 18880,
    image: "/mobile-20000/mobile-20000-2.jpg",
    ram: "4GB",
    storage: "128GB",
    display: '6.7" HD+',
    refresh: "90Hz listed in detailed specs",
    camera: "50MP rear",
    battery: "6500mAh",
    charging: "45W SUPERVOOC",
    processor: "MediaTek Dimensity 6300",
    rating: "4.1/5",
    reviews: "145 reviews",
    bestFor: ["battery", "charging", "camera"],
    summary:
      "A balanced choice if you want a large battery, fast charging and a 50MP main camera.",
    color: "from-purple-50 to-white",
    amazon: "https://www.amazon.in/OPPO-Smartphone-Prism-Violet-Storage/dp/B0GPDK4MMN?crid=2W3Q5LC2FX8Q&dib=eyJ2IjoiMSJ9.j85yny7dWPLPEP6NPWvVeU7CUAyEsi5g_jyOcWCWd3eVNV-FTaHFAN18QO99VddEaDtJ3xPtHVYxPGWBCc3DARKGiUUSUj_ECds9xj0AbrrQfNV7W1BnKDnuwe9a7Zw3_vRzD5PtM-9YgD63m-zlSgTiR3P4FR24-xfjXO3iqmRzNNdwZU_4Ex2WZatFVbpPZ0KhGSrut1vDCGCMzUE9fIxuGbY3mjhXfM-1sae2FoQ.M5V2UPckoV0WqXxxEzZ0Kb7yB_nZhf4SGy3KZzTYMS4&dib_tag=se&keywords=smartphone+under+20000+5g+mobile&qid=1792814601&sprefix=smartphone+under+20000%2Caps%2C307&sr=8-17&linkCode=ll2&tag=pricetaghub-21&linkId=22e7911c11a139cda3f1aa82769d46b8&ref_=as_li_ss_tl",
  },
  {
    id: 3,
    name: "Samsung Galaxy M17e 5G",
    price: 16498,
    image: "/mobile-20000/mobile-20000-3.jpg",
    ram: "4GB",
    storage: "128GB",
    display: '6.7" HD+ LCD',
    refresh: "90Hz",
    camera: "50MP + 2MP rear",
    battery: "6000mAh",
    charging: "Check seller listing",
    processor: "MediaTek Dimensity 6300",
    rating: "3.8/5",
    reviews: "1,271 reviews",
    bestFor: ["software", "everyday", "camera"],
    color: "from-blue-50 to-white",
    amazon: "https://www.amazon.in/Samsung-Storage-Smoothest-Refresh-Upgrades/dp/B0GN24SV22?crid=2W3Q5LC2FX8Q&dib=eyJ2IjoiMSJ9.j85yny7dWPLPEP6NPWvVeU7CUAyEsi5g_jyOcWCWd3eVNV-FTaHFAN18QO99VddEaDtJ3xPtHVYxPGWBCc3DARKGiUUSUj_ECds9xj0AbrrQfNV7W1BnKDnuwe9a7Zw3_vRzD5PtM-9YgD63m-zlSgTiR3P4FR24-xfjXO3iqmRzNNdwZU_4Ex2WZatFVbpPZ0KhGSrut1vDCGCMzUE9fIxuGbY3mjhXfM-1sae2FoQ.M5V2UPckoV0WqXxxEzZ0Kb7yB_nZhf4SGy3KZzTYMS4&dib_tag=se&keywords=smartphone+under+20000+5g+mobile&qid=1792814601&sprefix=smartphone+under+20000%2Caps%2C307&sr=8-13&linkCode=ll2&tag=pricetaghub-21&linkId=a7eb226258ebd3ece5ebdb1b1a4a3d11&ref_=as_li_ss_tl",
    summary:
      "A lower-priced option with a 50MP main camera and Samsung software-support claims that are worth checking against the official listing.",
  },
  {
    id: 4,
    name: "OnePlus N6x",
    price: 18499,
    image: "/mobile-20000/mobile-20000-4.jpg",
    ram: "4GB",
    storage: "64GB",
    display: '6.8" HD+ LCD',
    refresh: "120Hz",
    camera: "13MP rear",
    battery: "7000mAh",
    charging: "Check seller listing",
    processor: "Verify exact processor on listing",
    rating: "3.6/5",
    reviews: "176 reviews",
    bestFor: ["battery", "display"],
    color: "from-orange-50 to-white",
    amazon: "https://www.amazon.in/OnePlus-36-Months-Smoothness-Military-Grade-Durability/dp/B0H7SB1JH7?crid=2W3Q5LC2FX8Q&dib=eyJ2IjoiMSJ9.j85yny7dWPLPEP6NPWvVeU7CUAyEsi5g_jyOcWCWd3eVNV-FTaHFAN18QO99VddEaDtJ3xPtHVYxPGWBCc3DARKGiUUSUj_ECds9xj0AbrrQfNV7W1BnKDnuwe9a7Zw3_vRzD5PtM-9YgD63m-zlSgTiR3P4FR24-xfjXO3iqmRzNNdwZU_4Ex2WZatFVbpPZ0KhGSrut1vDCGCMzUE9fIxuGbY3mjhXfM-1sae2FoQ.M5V2UPckoV0WqXxxEzZ0Kb7yB_nZhf4SGy3KZzTYMS4&dib_tag=se&keywords=smartphone+under+20000+5g+mobile&qid=1792814601&sprefix=smartphone+under+20000%2Caps%2C307&sr=8-11&linkCode=ll2&tag=pricetaghub-21&linkId=78617781aff3e9149e9d687fa4e77a06&ref_=as_li_ss_tl",
    summary:
      "A battery-focused option with a high-refresh-rate display, but its 64GB storage and 13MP camera may not suit everyone.",
  },
  {
    id: 5,
    name: "Redmi 15C 5G Prime Edition",
    price: 17999,
    image: "/mobile-20000/mobile-20000-5.jpg",
    ram: "6GB",
    storage: "128GB",
    display: '6.9" HD+ LCD',
    refresh: "Up to 120Hz",
    camera: "50MP rear",
    battery: "6000mAh",
    charging: "33W",
    processor: "MediaTek Dimensity 6300",
    rating: "Not provided",
    reviews: "802 reviews",
    bestFor: ["storage", "multitasking", "display", "camera"],
    color: "from-red-50 to-white",
    amazon: "https://www.amazon.in/15C-Moonlight-Segments-MediaTek-Dimensity/dp/B0G2B251KD?crid=2W3Q5LC2FX8Q&dib=eyJ2IjoiMSJ9.j85yny7dWPLPEP6NPWvVeU7CUAyEsi5g_jyOcWCWd3eVNV-FTaHFAN18QO99VddEaDtJ3xPtHVYxPGWBCc3DARKGiUUSUj_ECds9xj0AbrrQfNV7W1BnKDnuwe9a7Zw3_vRzD5PtM-9YgD63m-zlSgTiR3P4FR24-xfjXO3iqmRzNNdwZU_4Ex2WZatFVbpPZ0KhGSrut1vDCGCMzUE9fIxuGbY3mjhXfM-1sae2FoQ.M5V2UPckoV0WqXxxEzZ0Kb7yB_nZhf4SGy3KZzTYMS4&dib_tag=se&keywords=smartphone+under+20000+5g+mobile&qid=1792814601&sprefix=smartphone+under+20000%2Caps%2C307&sr=8-3&linkCode=ll2&tag=pricetaghub-21&linkId=5d7f3d4ae471d9786f0023a7c62bae75&ref_=as_li_ss_tl",
    summary:
      "A useful option if you want 6GB RAM, 128GB storage, a large display and a 50MP camera in this price range.",
  },
];

const questions = [
  {
    id: "priority",
    title: "What matters most to you?",
    description: "Choose your main reason for buying a phone.",
    options: [
      { value: "battery", label: "Long battery life", icon: BatteryCharging },
      { value: "camera", label: "Camera quality", icon: Camera },
      { value: "storage", label: "More RAM and storage", icon: HardDrive },
      { value: "software", label: "Software and updates", icon: ShieldCheck },
      { value: "display", label: "Large, smooth display", icon: Smartphone },
    ],
  },
  {
    id: "budget",
    title: "What is your preferred budget?",
    description: "All five phones are listed below ₹20,000.",
    options: [
      { value: "16500", label: "Around ₹16,500" },
      { value: "18000", label: "₹17,000–₹18,000" },
      { value: "19000", label: "Up to ₹19,000" },
    ],
  },
  {
    id: "usage",
    title: "How will you use your phone?",
    description: "Choose the closest match.",
    options: [
      { value: "everyday", label: "Calls, browsing and daily apps" },
      { value: "multitasking", label: "Many apps open together" },
      { value: "media", label: "Videos and entertainment" },
    ],
  },
];

function formatPrice(price) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(price);
}

function PhoneImage({ phone }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="flex h-full min-h-56 flex-col items-center justify-center gap-3 text-slate-500">
        <Smartphone size={44} strokeWidth={1.5} />
        <span className="text-sm">Add product image</span>
        <span className="px-3 text-center text-xs">{phone.image}</span>
      </div>
    );
  }

  return (
    <img
      src={phone.image}
      alt={phone.name}
      className="h-full min-h-56 w-full object-contain p-5"
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}

function PhoneCard({ phone, rank, recommended = false }) {
  return (
    <article
      className={`overflow-hidden rounded-3xl border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg ${
        recommended ? "border-blue-500 ring-2 ring-blue-100" : "border-slate-200"
      }`}
    >
      <div className={`relative bg-gradient-to-br ${phone.color}`}>
        {recommended && (
          <span className="absolute left-4 top-4 z-10 inline-flex items-center gap-1 rounded-full bg-blue-700 px-3 py-1.5 text-xs font-bold text-white">
            <Trophy size={14} /> Your Match
          </span>
        )}
        <span className="absolute right-4 top-4 z-10 rounded-full border border-white bg-white/90 px-3 py-1.5 text-xs font-bold text-slate-700">
          #{rank}
        </span>
        <div className="h-64">
          <PhoneImage phone={phone} />
        </div>
      </div>

      <div className="p-5 sm:p-6">
        <h3 className="text-xl font-bold leading-snug text-slate-950">
          {phone.name}
        </h3>

        <p className="mt-2 text-sm leading-6 text-slate-600">
          {phone.summary}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {[phone.ram + " RAM", phone.storage, phone.refresh].map((item) => (
            <span
              key={item}
              className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-bold text-slate-700"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-5 rounded-2xl bg-slate-50 p-4">
          <p className="text-sm text-slate-500">Listed price</p>
          <p className="mt-1 text-3xl font-bold text-slate-950">
            {formatPrice(phone.price)}
          </p>
          <p className="mt-2 text-xs text-slate-500">
            Price and availability can change on Amazon.
          </p>
        </div>

        <dl className="mt-5 space-y-3 text-sm">
          <div className="flex justify-between gap-4">
            <dt className="text-slate-500">Rear camera</dt>
            <dd className="text-right font-bold text-slate-900">{phone.camera}</dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt className="text-slate-500">Battery</dt>
            <dd className="text-right font-bold text-slate-900">{phone.battery}</dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt className="text-slate-500">Charging</dt>
            <dd className="text-right font-bold text-slate-900">{phone.charging}</dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt className="text-slate-500">Processor</dt>
            <dd className="max-w-[60%] text-right font-bold text-slate-900">
              {phone.processor}
            </dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt className="text-slate-500">Amazon rating</dt>
            <dd className="text-right font-bold text-slate-900">
              {phone.rating}
            </dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt className="text-slate-500">Reviews</dt>
            <dd className="text-right font-bold text-slate-900">
              {phone.reviews}
            </dd>
          </div>
        </dl>

        <a
          href={phone.amazon}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-700 px-5 py-3.5 text-center font-bold text-white transition hover:bg-blue-800"
        >
          Check Price on Amazon <ChevronRight size={18} />
        </a>
      </div>
    </article>
  );
}

function PhoneFinder() {
  const [answers, setAnswers] = useState({});
  const [step, setStep] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const question = questions[step];

  const recommendation = useMemo(() => {
    if (!showResult) return null;

    const priority = answers.priority || "everyday";
    const budget = Number(answers.budget || 19000);
    const usage = answers.usage || "everyday";

    const ranked = phones
      .filter((phone) => phone.price <= budget + 100)
      .map((phone) => {
        let score = 0;

        if (phone.bestFor.includes(priority)) score += 5;
        if (phone.bestFor.includes(usage)) score += 3;

        if (priority === "storage" && phone.ram === "6GB") score += 4;
        if (priority === "software" && phone.id === 3) score += 3;
        if (priority === "camera" && phone.camera.startsWith("50MP")) score += 2;
        if (priority === "battery" && phone.battery.startsWith("7000")) score += 3;
        if (priority === "battery" && phone.battery.startsWith("6500")) score += 2;
        if (priority === "display" && phone.refresh.includes("120Hz")) score += 3;
        if (usage === "multitasking" && phone.ram === "6GB") score += 4;
        if (usage === "media" && phone.display.startsWith('6.9')) score += 3;

        return { phone, score };
      })
      .sort((a, b) => b.score - a.score || a.phone.price - b.phone.price);

    return ranked[0]?.phone || phones.reduce((a, b) =>
      a.price < b.price ? a : b
    );
  }, [answers, showResult]);

  function choose(value) {
    setAnswers((previous) => ({ ...previous, [question.id]: value }));

    if (step < questions.length - 1) {
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
      className="rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-5 shadow-sm sm:p-8"
    >
      <div className="mx-auto max-w-2xl">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-blue-100 px-3 py-1.5 text-xs font-bold text-blue-800">
          <CheckCircle2 size={15} /> Interactive Phone Finder
        </div>

        {!showResult ? (
          <>
            <div className="mb-6 flex items-center justify-between gap-3">
              <div>
                <h2 className="text-2xl font-bold text-slate-950 sm:text-3xl">
                  Find the Right Phone for You
                </h2>
                <p className="mt-2 text-sm text-slate-600">
                  Answer three quick questions for a personalised match.
                </p>
              </div>
              <span className="shrink-0 text-sm font-bold text-blue-700">
                {step + 1}/{questions.length}
              </span>
            </div>

            <div className="mb-6 h-2 overflow-hidden rounded-full bg-blue-100">
              <div
                className="h-full rounded-full bg-blue-700 transition-all"
                style={{
                  width: `${((step + 1) / questions.length) * 100}%`,
                }}
              />
            </div>

            <h3 className="text-xl font-bold text-slate-900">
              {question.title}
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              {question.description}
            </p>

            <div className="mt-5 grid gap-3">
              {question.options.map((option) => {
                const OptionIcon = option.icon;

                return (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => choose(option.value)}
                    className="flex w-full items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-4 text-left transition hover:border-blue-500 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <span className="flex items-center gap-3 font-bold text-slate-800">
                      {OptionIcon && (
                        <span className="rounded-xl bg-blue-50 p-2 text-blue-700">
                          <OptionIcon size={20} />
                        </span>
                      )}
                      {option.label}
                    </span>
                    <ChevronRight className="shrink-0 text-slate-400" size={20} />
                  </button>
                );
              })}
            </div>

            {step > 0 && (
              <button
                type="button"
                onClick={() => setStep((current) => current - 1)}
                className="mt-5 text-sm font-bold text-blue-700 hover:underline"
              >
                Go Back
              </button>
            )}
          </>
        ) : (
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-blue-700">
              Your suggested match
            </p>
            <h2 className="mt-2 text-2xl font-bold text-slate-950 sm:text-3xl">
              {recommendation?.name}
            </h2>
            <p className="mt-3 text-slate-600">
              Based on your answers, this phone is a starting point for your
              shortlist. Compare the complete specifications and current price
              before purchasing.
            </p>

            {recommendation && (
              <div className="mt-5 flex flex-col gap-4 rounded-2xl border border-blue-100 bg-white p-4 sm:flex-row sm:items-center">
                <div className="h-36 w-full shrink-0 sm:w-36">
                  <PhoneImage phone={recommendation} />
                </div>
                <div>
                  <p className="text-2xl font-bold text-slate-950">
                    {formatPrice(recommendation.price)}
                  </p>
                  <p className="mt-2 text-sm text-slate-600">
                    {recommendation.ram} RAM · {recommendation.storage} ·{" "}
                    {recommendation.battery}
                  </p>
                  <a
                    href={recommendation.amazon}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className="mt-4 inline-flex items-center gap-2 rounded-xl bg-blue-700 px-4 py-3 font-bold text-white hover:bg-blue-800"
                  >
                    View Phone <ChevronRight size={18} />
                  </a>
                </div>
              </div>
            )}

            <button
              type="button"
              onClick={reset}
              className="mt-5 inline-flex items-center gap-2 rounded-xl border border-slate-300 px-4 py-3 font-bold text-slate-700 hover:bg-white"
            >
              <RotateCcw size={16} /> Start Again
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="mb-8 max-w-3xl">
      <p className="text-sm font-bold uppercase tracking-wider text-blue-700">
        {eyebrow}
      </p>
      <h2 className="mt-2 text-2xl font-bold leading-tight text-slate-950 sm:text-3xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 leading-7 text-slate-600">{description}</p>
      )}
    </div>
  );
}

export default function PhoneGuide() {
  const [sortBy, setSortBy] = useState("recommended");

  const sortedPhones = useMemo(() => {
    const list = [...phones];

    if (sortBy === "price-low") {
      return list.sort((a, b) => a.price - b.price);
    }

    if (sortBy === "battery") {
      const batteryValue = (phone) =>
        Number(phone.battery.match(/\d+/)?.[0] || 0);
      return list.sort((a, b) => batteryValue(b) - batteryValue(a));
    }

    if (sortBy === "ram") {
      return list.sort(
        (a, b) => parseInt(b.ram, 10) - parseInt(a.ram, 10)
      );
    }

    return list;
  }, [sortBy]);

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-blue-800 text-white">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <p className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-bold text-blue-100">
                PriceTag HUB · Smartphone Buying Guide
              </p>
              <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                Top 5 Best Smartphone Under Rs 20000
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-blue-100 sm:text-lg">
                Looking for a new 5G phone without crossing ₹20,000? Compare
                battery capacity, cameras, memory and displays, then use our
                quick finder to narrow your options.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#phone-finder"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-4 font-bold text-blue-950 transition hover:bg-blue-50"
                >
                  Find My Phone <ChevronRight size={19} />
                </a>
                <a
                  href="#phone-comparison"
                  className="inline-flex items-center justify-center rounded-xl border border-white/30 px-6 py-4 font-bold text-white transition hover:bg-white/10"
                >
                  Compare All 5
                </a>
              </div>

              <div className="mt-8 grid max-w-lg grid-cols-3 gap-3">
                {[
                  ["5", "Phones compared"],
                  ["₹20K", "Budget limit"],
                  ["3", "Quick questions"],
                ].map(([value, label]) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-white/15 bg-white/10 p-3"
                  >
                    <p className="text-2xl font-bold">{value}</p>
                    <p className="mt-1 text-xs text-blue-100">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-white/15 bg-white/10 p-5 backdrop-blur-sm sm:p-7">
              <div className="mb-5 flex items-center gap-3">
                <div className="rounded-2xl bg-white/15 p-3">
                  <Smartphone size={28} />
                </div>
                <div>
                  <h2 className="text-xl font-bold">Choose What Matters</h2>
                  <p className="text-sm text-blue-100">
                    Not just the lowest price
                  </p>
                </div>
              </div>
              {[
                ["Battery", "For fewer charging breaks"],
                ["Camera", "For everyday photos"],
                ["Memory", "For apps and stored files"],
                ["Display", "For reading and videos"],
              ].map(([title, detail]) => (
                <div
                  key={title}
                  className="flex items-center gap-3 border-t border-white/15 py-4"
                >
                  <CheckCircle2 className="shrink-0 text-blue-200" size={21} />
                  <div>
                    <p className="font-bold">{title}</p>
                    <p className="text-sm text-blue-100">{detail}</p>
                  </div>
                </div>
              ))}
              <p className="mt-2 text-xs leading-5 text-blue-100">
                Specifications and prices are based on the supplied product
                information and should be verified before buying.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl space-y-16 px-5 py-12 sm:px-8 sm:py-16">
        <PhoneFinder />

        <section id="phone-comparison">
          <SectionTitle
            eyebrow="Compare Before You Buy"
            title="5 Smartphones Under ₹20,000"
            description="Compare the listed prices and main features. The order below can be changed to help you shortlist a phone."
          />

          <div className="mb-7 flex flex-col gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:flex-row sm:items-center sm:justify-between">
            <label
              htmlFor="phone-sort"
              className="font-bold text-slate-800"
            >
              Sort phones by
            </label>
            <select
              id="phone-sort"
              value={sortBy}
              onChange={(event) => setSortBy(event.target.value)}
              className="rounded-xl border border-slate-300 bg-white px-4 py-3 font-bold text-slate-800 outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="recommended">Original comparison order</option>
              <option value="price-low">Price: Low to High</option>
              <option value="battery">Battery capacity: High to Low</option>
              <option value="ram">RAM: High to Low</option>
            </select>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {sortedPhones.map((phone) => (
              <PhoneCard
                key={phone.id}
                phone={phone}
                rank={sortedPhones.findIndex((item) => item.id === phone.id) + 1}
              />
            ))}
          </div>
        </section>
 <section className="flex justify-center py-2">
          <a
            href="https://www.amazon.in/s?k=smartphone+under+20000+5g+mobile&crid=2BCBWO68CMN5Z&sprefix=smartp%2Caps%2C639&linkCode=ll2&tag=pricetaghub-21&linkId=4283e0d35493af1f580b98c11786b2f1&ref_=as_li_ss_tl"
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="inline-flex w-full max-w-md items-center justify-center gap-2 rounded-xl bg-blue-700 px-6 py-4 text-center font-bold text-white shadow-md transition hover:bg-blue-800"
          >
            Find More Smartphones Under ₹20,000
            <ChevronRight size={20} />
          </a>
        </section>
        <section>
          <SectionTitle
            eyebrow="Buying Advice"
            title="What Should You Check Before Buying?"
            description="A phone's headline specifications do not tell the whole story. Check the exact model and seller details before placing an order."
          />

          <div className="grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Battery and charging",
                body: "Compare battery capacity in mAh and the supported charging wattage. A larger battery can help with endurance, but actual battery life depends on usage.",
              },
              {
                title: "RAM and storage",
                body: "More RAM can help with multitasking. Choose enough storage for your apps, photos and videos; the OnePlus listing here has 64GB, while the others list 128GB.",
              },
              {
                title: "Camera quality",
                body: "Megapixels alone do not guarantee better photos. Check sample images, low-light performance and video features when available.",
              },
              {
                title: "Updates and warranty",
                body: "Check the manufacturer's official software-update policy, warranty terms, return eligibility and the seller's product details.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-200 p-6"
              >
                <h3 className="text-lg font-bold text-slate-950">
                  {item.title}
                </h3>
                <p className="mt-3 leading-7 text-slate-600">{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-amber-200 bg-amber-50 p-5 sm:p-7">
          <h2 className="text-xl font-bold text-slate-950">
            Important Price and Specification Note
          </h2>
          <p className="mt-3 leading-7 text-slate-700">
            Prices, availability, ratings and specifications may change.
            Some supplied product details conflict, including refresh rates and
            battery capacities. Confirm the exact model, specifications and
            current price on the product page before purchasing. This guide is
            for comparison and does not guarantee that one phone is best for
            every buyer.
          </p>
        </section>
      </div>
    </main>
  );
}
