
import Link from "next/link";
import {
  Camera,
  Heart,
  Mic,
  Moon,
  ShieldCheck,
  Wifi,
  Bell,
  CheckCircle2,
  CircleHelp,
  Dog,
  Cat,
  Smartphone,
  Eye,
  Volume2,
  ArrowRight,
  AlertTriangle,
  Home,
  Video,
} from "lucide-react";

import AdSlot from "@/components/AdSlot";

export const metadata = {
  title: "Best Pet Camera for Home: Features, Setup & Buying Guide",
  description:
    "Find the best pet camera for home monitoring. Compare indoor Wi-Fi cameras, two-way audio, night vision, motion alerts, storage options and essential buying tips.",
  keywords: [
    "best pet camera for home",
    "pet camera for home",
    "dog camera India",
    "cat camera for home",
    "pet camera with two way audio",
    "indoor pet monitoring camera",
    "pet camera with night vision",
  ],
  alternates: {
    canonical: "/cctv-problem/best-pet-camera-for-home",
  },
  openGraph: {
    title: "Best Pet Camera for Home",
    description:
      "Learn how to choose an indoor camera to check on your dog or cat while you are away.",
    type: "article",
  },
};

const features = [
  {
    icon: Mic,
    title: "Two-way audio",
    text: "Listen to your pet and speak through the camera using your phone, if the model supports two-way communication.",
    color: "bg-sky-100 text-sky-700",
  },
  {
    icon: Eye,
    title: "Clear live video",
    text: "Choose a resolution that lets you see your pet clearly. Better resolution can help identify details in a room.",
    color: "bg-violet-100 text-violet-700",
  },
  {
    icon: Moon,
    title: "Night vision",
    text: "Useful for checking pets in dim rooms or at night. Check the camera's actual low-light performance.",
    color: "bg-indigo-100 text-indigo-700",
  },
  {
    icon: Bell,
    title: "Motion alerts",
    text: "Receive notifications when movement is detected. Check whether alerts can be adjusted to reduce unnecessary notifications.",
    color: "bg-amber-100 text-amber-700",
  },
  {
    icon: Video,
    title: "Video recording",
    text: "Check whether recordings require a microSD card, cloud subscription, or another paid service.",
    color: "bg-rose-100 text-rose-700",
  },
  {
    icon: Wifi,
    title: "Reliable connection",
    text: "Check Wi-Fi band compatibility, router coverage and whether remote viewing requires an internet connection.",
    color: "bg-emerald-100 text-emerald-700",
  },
];

const cameraTypes = [
  {
    title: "Basic indoor Wi-Fi camera",
    label: "Budget-friendly",
    icon: Camera,
    color: "border-blue-200 bg-blue-50",
    description:
      "A practical starting point for checking whether your pet is sleeping, moving around or staying in its usual place.",
    benefits: [
      "Live viewing through a phone app",
      "Potentially includes night vision",
      "Some models offer two-way audio",
    ],
    suitable: "First-time pet owners and small rooms",
  },
  {
    title: "Pan-and-tilt pet camera",
    label: "Wider room coverage",
    icon: Eye,
    color: "border-violet-200 bg-violet-50",
    description:
      "A rotating camera can cover more of a room than a fixed camera, depending on placement and viewing angle.",
    benefits: [
      "Remote camera movement on supported models",
      "Can follow activity across a room manually",
      "Useful for larger open indoor spaces",
    ],
    suitable: "Pets that move between different areas",
  },
  {
    title: "Pet-focused smart camera",
    label: "Specialised features",
    icon: Heart,
    color: "border-rose-200 bg-rose-50",
    description:
      "Some models are designed specifically for pets and may add pet activity detection, treat dispensing or other specialised features.",
    benefits: [
      "Pet-oriented features on selected models",
      "May offer activity or sound notifications",
      "Some include interactive functions",
    ],
    suitable: "Owners wanting more than basic monitoring",
  },
];

const faqs = [
  {
    q: "Which camera is best for watching pets at home?",
    a: "For many households, a reliable indoor Wi-Fi camera with clear video, night vision, two-way audio and motion alerts is a sensible starting point. A pan-and-tilt model may be more useful if your pet moves around a large room. The best choice depends on your budget and required features.",
  },
  {
    q: "Can I watch my pet from outside my home?",
    a: "Yes, many connected indoor cameras allow remote viewing through a phone app. Usually, the camera needs power and an internet connection at home, while your phone needs internet access. Check the manufacturer's remote-access requirements.",
  },
  {
    q: "Does a pet camera work without Wi-Fi?",
    a: "Most smart pet cameras rely on Wi-Fi for live remote viewing and app notifications. Some devices support local recording, but this does not necessarily provide remote access. Check the exact model's connectivity and recording features before buying.",
  },
  {
    q: "Do pet cameras need a monthly subscription?",
    a: "Not always. Some cameras offer live viewing and local microSD recording without a cloud plan, while cloud video history or advanced detection may require a subscription. Check the current plan terms before purchasing.",
  },
  {
    q: "Is a normal CCTV camera suitable for pets?",
    a: "Yes. A regular indoor security camera can work well if it provides the features you need, especially two-way audio, night vision, remote viewing and suitable room coverage. A pet-specific product is not essential for basic monitoring.",
  },
  {
    q: "Where should I place a pet camera?",
    a: "Choose a stable position that covers your pet's usual resting or play area. Keep the device, cables and mounting hardware out of reach, and avoid pointing the camera into private areas. Do not place it where it could fall or become a chewing hazard.",
  },
];

export default function BestPetCameraForHomePage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-8 text-gray-800 sm:px-6 lg:px-8">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-50 via-sky-50 to-violet-100 p-6 sm:p-10">
        <div className="grid items-center gap-8 md:grid-cols-[1.2fr_0.8fr]">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/80 px-3 py-1.5 text-sm font-medium text-emerald-800">
              <Heart size={16} />
              Smart home guide
            </div>

            <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-950 sm:text-5xl">
              Best Pet Camera for Home: Keep an Eye on Your Pets
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
              Wondering what your dog or cat does when you leave home? An
              indoor pet camera can help you check live video, hear what is
              happening and receive activity alerts from your phone.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#compare-camera-types"
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-700 px-5 py-3 font-semibold text-white transition hover:bg-emerald-800"
              >
                Compare camera types
                <ArrowRight size={18} />
              </a>
              <a
                href="#buying-checklist"
                className="inline-flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-5 py-3 font-semibold text-gray-800 transition hover:bg-gray-50"
              >
                Buying checklist
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-sm">
            <div className="rounded-3xl border border-white bg-white/80 p-5 shadow-lg">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-gray-700">
                  Home pet monitoring
                </span>
                <span className="flex items-center gap-1 text-xs font-medium text-emerald-700">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  Example setup
                </span>
              </div>

              <div className="mt-5 flex h-40 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-100 to-violet-100">
                <div className="relative flex h-24 w-24 items-center justify-center rounded-3xl bg-white shadow-md">
                  <Camera size={46} className="text-violet-700" />
                  <Heart
                    size={20}
                    className="absolute -right-2 -top-2 rounded-full bg-rose-100 p-1 text-rose-600"
                  />
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-sky-50 p-3">
                  <Smartphone className="mb-2 text-sky-700" size={21} />
                  <p className="text-sm font-semibold">Phone viewing</p>
                  <p className="mt-1 text-xs text-gray-600">
                    Check in remotely
                  </p>
                </div>
                <div className="rounded-xl bg-emerald-50 p-3">
                  <Volume2 className="mb-2 text-emerald-700" size={21} />
                  <p className="text-sm font-semibold">Two-way audio</p>
                  <p className="mt-1 text-xs text-gray-600">
                    On supported models
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="mt-10">
        <h2 className="text-2xl font-bold text-gray-950 sm:text-3xl">
          Why use a pet camera at home?
        </h2>
        <p className="mt-3 max-w-4xl leading-7 text-gray-600">
          Work, shopping and daily travel can leave pets home alone for
          several hours. A connected camera helps you check their environment
          without returning home. It can also help you understand activity
          patterns, although a camera cannot replace regular care, exercise
          or a veterinary assessment when needed.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl border border-sky-100 bg-sky-50 p-5">
            <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-white text-sky-700">
              <Dog size={24} />
            </div>
            <h3 className="font-semibold text-gray-950">
              Check your dog's activity
            </h3>
            <p className="mt-2 text-sm leading-6 text-gray-600">
              See whether your dog is resting, moving around or waiting near
              the door.
            </p>
          </div>

          <div className="rounded-2xl border border-rose-100 bg-rose-50 p-5">
            <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-white text-rose-700">
              <Cat size={24} />
            </div>
            <h3 className="font-semibold text-gray-950">
              Observe your cat indoors
            </h3>
            <p className="mt-2 text-sm leading-6 text-gray-600">
              Check favourite sleeping spots, feeding areas and other
              accessible parts of the room.
            </p>
          </div>

          <div className="rounded-2xl border border-violet-100 bg-violet-50 p-5 sm:col-span-2 lg:col-span-1">
            <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-white text-violet-700">
              <Bell size={24} />
            </div>
            <h3 className="font-semibold text-gray-950">
              Receive useful alerts
            </h3>
            <p className="mt-2 text-sm leading-6 text-gray-600">
              Supported cameras can notify you about detected movement or
              sound, depending on their settings.
            </p>
          </div>
        </div>
      </section>

      <AdSlot />

      {/* Compare */}
      <section id="compare-camera-types" className="mt-12 scroll-mt-24">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-violet-700">
            Choose by need
          </p>
          <h2 className="mt-2 text-2xl font-bold text-gray-950 sm:text-3xl">
            Types of pet cameras for home
          </h2>
          <p className="mt-3 leading-7 text-gray-600">
            Not every household needs an expensive pet-specific device.
            Start with the features you will actually use, then compare
            compatible models and their total costs.
          </p>
        </div>

        <div className="mt-6 grid gap-5 lg:grid-cols-3">
          {cameraTypes.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className={`flex flex-col rounded-2xl border p-5 ${item.color}`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-sm">
                    <Icon size={25} className="text-gray-800" />
                  </div>
                  <span className="rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-gray-700">
                    {item.label}
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-bold text-gray-950">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-gray-600">
                  {item.description}
                </p>

                <ul className="mt-5 space-y-3">
                  {item.benefits.map((benefit) => (
                    <li
                      key={benefit}
                      className="flex items-start gap-2 text-sm leading-5 text-gray-700"
                    >
                      <CheckCircle2
                        size={17}
                        className="mt-0.5 shrink-0 text-emerald-700"
                      />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-5">
                  <div className="rounded-xl bg-white/80 p-3">
                    <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
                      Suitable for
                    </p>
                    <p className="mt-1 text-sm font-semibold text-gray-800">
                      {item.suitable}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Features */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-950 sm:text-3xl">
          Features to look for in a pet monitoring camera
        </h2>
        <p className="mt-3 max-w-3xl leading-7 text-gray-600">
          Use this feature guide to compare product specifications rather
          than choosing by resolution or marketing claims alone.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <article
                key={feature.title}
                className="rounded-2xl border border-gray-200 bg-white p-5 transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <div
                  className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${feature.color}`}
                >
                  <Icon size={24} />
                </div>
                <h3 className="text-lg font-semibold text-gray-950">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  {feature.text}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      <AdSlot />

      {/* Checklist */}
      <section
        id="buying-checklist"
        className="mt-12 scroll-mt-24 rounded-3xl border border-emerald-100 bg-gradient-to-br from-emerald-50 to-teal-50 p-6 sm:p-8"
      >
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-emerald-700 shadow-sm">
            <ShieldCheck size={27} />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-950">
              Pet camera buying checklist
            </h2>
            <p className="mt-2 leading-7 text-gray-600">
              Before placing an order, confirm these points on the exact
              product listing and manufacturer's documentation.
            </p>
          </div>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {[
            "Works with your home's available Wi-Fi band",
            "Supports remote live viewing on your phone",
            "Offers night vision if you need it",
            "Includes a microphone and speaker if you want two-way audio",
            "Has suitable viewing angles for the room",
            "Explains microSD and cloud storage costs clearly",
            "Provides security updates and account protection",
            "Has a suitable power adapter and safe mounting options",
            "Has clear warranty and after-sales support in India",
            "Has no unexpected subscription requirement for essential features",
          ].map((item) => (
            <div
              key={item}
              className="flex items-start gap-3 rounded-xl border border-white bg-white/80 p-3"
            >
              <CheckCircle2
                size={19}
                className="mt-0.5 shrink-0 text-emerald-700"
              />
              <span className="text-sm leading-6 text-gray-700">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Setup */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-950 sm:text-3xl">
          How to set up a pet camera at home
        </h2>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {[
            {
              number: "01",
              title: "Choose the viewing area",
              text: "Start with a room where your pet spends time. Position the camera to cover the main area without filming unnecessary private spaces.",
              color: "bg-sky-100 text-sky-800",
            },
            {
              number: "02",
              title: "Connect the camera securely",
              text: "Follow the manufacturer's setup instructions, use a strong unique password and enable available security protections.",
              color: "bg-violet-100 text-violet-800",
            },
            {
              number: "03",
              title: "Test video and audio",
              text: "Check daytime viewing, night vision, speaker volume and notifications before relying on the camera when you are away.",
              color: "bg-amber-100 text-amber-800",
            },
            {
              number: "04",
              title: "Keep your pet safe",
              text: "Secure cables and mounts, keep devices out of chewing reach and ensure the camera cannot fall onto your pet.",
              color: "bg-emerald-100 text-emerald-800",
            },
          ].map((step) => (
            <article
              key={step.number}
              className="flex gap-4 rounded-2xl border border-gray-200 bg-white p-5"
            >
              <div
                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl font-bold ${step.color}`}
              >
                {step.number}
              </div>
              <div>
                <h3 className="font-semibold text-gray-950">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  {step.text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Privacy */}
      <section className="mt-10 rounded-2xl border border-amber-200 bg-amber-50 p-5 sm:p-6">
        <div className="flex items-start gap-3">
          <AlertTriangle
            size={24}
            className="mt-0.5 shrink-0 text-amber-700"
          />
          <div>
            <h2 className="text-lg font-bold text-gray-950">
              Do not overlook camera privacy
            </h2>
            <p className="mt-2 text-sm leading-7 text-gray-700">
              A connected camera can capture activity inside your home.
              Choose a reputable manufacturer, use a unique password, keep
              firmware updated and review who can access the footage. Check
              where recordings are stored, how long they are retained and
              whether the camera supports a privacy mode.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mt-12">
        <div className="flex items-center gap-3">
          <CircleHelp size={27} className="text-violet-700" />
          <h2 className="text-2xl font-bold text-gray-950 sm:text-3xl">
            Frequently asked questions
          </h2>
        </div>

        <div className="mt-6 space-y-3">
          {faqs.map((faq) => (
            <details
              key={faq.q}
              className="group rounded-xl border border-gray-200 bg-white p-4 open:border-violet-200 open:bg-violet-50/40 sm:p-5"
            >
              <summary className="cursor-pointer list-none font-semibold text-gray-900">
                <span className="flex items-center justify-between gap-4">
                  {faq.q}
                  <span className="text-xl text-violet-700 transition group-open:rotate-45">
                    +
                  </span>
                </span>
              </summary>
              <p className="mt-3 text-sm leading-7 text-gray-600">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </section>

      <AdSlot />

      {/* Related reading */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-950">
          Continue reading
        </h2>
        <p className="mt-2 text-gray-600">
          Explore more guides before choosing a camera for your home.
        </p>

        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          <Link
            href="/cctv-problem/best-indoor-security-camera-for-home"
            className="group flex items-center justify-between gap-3 rounded-2xl border border-sky-200 bg-sky-50 p-5 transition hover:border-sky-400 hover:shadow-sm"
          >
            <div>
              <div className="flex items-center gap-2 text-sm font-medium text-sky-800">
                <Home size={17} />
                Indoor security
              </div>
              <h3 className="mt-2 font-semibold text-gray-950">
                Best Indoor Security Camera for Home
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                Compare indoor monitoring features for everyday home use.
              </p>
            </div>
            <ArrowRight
              size={20}
              className="shrink-0 text-sky-700 transition group-hover:translate-x-1"
            />
          </Link>

          <Link
            href="/cctv-problem/best-4g-sim-cctv-camera-without-wifi"
            className="group flex items-center justify-between gap-3 rounded-2xl border border-violet-200 bg-violet-50 p-5 transition hover:border-violet-400 hover:shadow-sm"
          >
            <div>
              <div className="flex items-center gap-2 text-sm font-medium text-violet-800">
                <Wifi size={17} />
                Connectivity guide
              </div>
              <h3 className="mt-2 font-semibold text-gray-950">
                Best 4G SIM CCTV Camera Without Wi-Fi
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                Understand cellular cameras and their connectivity needs.
              </p>
            </div>
            <ArrowRight
              size={20}
              className="shrink-0 text-violet-700 transition group-hover:translate-x-1"
            />
          </Link>
        </div>
      </section>

      <footer className="mt-10 border-t border-gray-200 pt-5">
        <p className="text-sm leading-6 text-gray-500">
          PriceTag HUB provides educational buying guidance. Features,
          compatibility, prices, warranties and subscription terms can vary
          by model and change over time. Verify current specifications with
          the manufacturer or seller before purchasing.
        </p>
      </footer>
    </main>
  );
}
