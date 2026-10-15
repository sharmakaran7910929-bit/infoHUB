
import Link from "next/link";
import {
  Camera,
  ShieldCheck,
  Wifi,
  Radio,
  Heart,
  Home,
  ArrowRight,
  CheckCircle2,
  Search,
  Moon,
  Mic,
  Video,
  LockKeyhole,
  Smartphone,
  Eye,
  Settings,
} from "lucide-react";

export const metadata = {
  title: "Home Security Cameras: Buying Guides and Comparisons | PriceTag HUB",
  description:
    "Explore practical home security camera guides, including indoor cameras, pet cameras, and 4G SIM CCTV cameras that work without Wi-Fi.",
  alternates: {
    canonical: "https://www.pricetag.co.in/cctv-problem/home-security-cameras",
  },
};

const guides = [
  {
    title: "Best 4G SIM CCTV Camera Without Wi-Fi",
    description:
      "Understand how SIM-based security cameras use mobile networks to monitor locations without a regular Wi-Fi connection.",
    href: "/cctv-problem/best-4g-sim-cctv-camera-without-wifi",
    label: "For locations without Wi-Fi",
    icon: Radio,
    iconColor: "text-blue-700",
    iconBg: "bg-blue-100",
  },
  {
    title: "Best Indoor Security Camera for Home",
    description:
      "Compare important indoor camera features such as video quality, night vision, motion alerts, and two-way audio.",
    href: "/cctv-problem/best-indoor-security-camera-for-home",
    label: "For indoor monitoring",
    icon: Home,
    iconColor: "text-sky-700",
    iconBg: "bg-sky-100",
  },
  {
    title: "Best Pet Camera for Home",
    description:
      "Learn which features help you check on pets, watch live video, communicate remotely, and receive activity alerts.",
    href: "/cctv-problem/best-pet-camera-for-home",
    label: "For pets and families",
    icon: Heart,
    iconColor: "text-indigo-700",
    iconBg: "bg-indigo-100",
  },
];

const features = [
  {
    title: "Video quality",
    description:
      "Compare resolution, image clarity, field of view, and performance in different lighting conditions.",
    icon: Video,
  },
  {
    title: "Connectivity",
    description:
      "Check whether a camera needs Wi-Fi, supports a SIM card, or offers another supported connection.",
    icon: Wifi,
  },
  {
    title: "Night vision",
    description:
      "Look for useful low-light performance and night vision suitable for the area you want to monitor.",
    icon: Moon,
  },
  {
    title: "Motion alerts",
    description:
      "Understand motion detection settings, notification controls, and options for reducing unnecessary alerts.",
    icon: Eye,
  },
  {
    title: "Two-way audio",
    description:
      "Check microphone and speaker quality if you want to communicate through the camera.",
    icon: Mic,
  },
  {
    title: "Privacy and storage",
    description:
      "Review recording options, local or cloud storage, account security, and access permissions.",
    icon: LockKeyhole,
  },
];

const useCases = [
  {
    title: "Monitor rooms inside your home",
    description:
      "An indoor security camera can help you check rooms, entrances, or other areas while you are away.",
    href: "/cctv-problem/best-indoor-security-camera-for-home",
    linkText: "Explore indoor cameras",
    icon: Home,
  },
  {
    title: "Check on pets remotely",
    description:
      "Pet cameras can help you watch your pets and, on supported models, speak to them through two-way audio.",
    href: "/cctv-problem/best-pet-camera-for-home",
    linkText: "Explore pet cameras",
    icon: Heart,
  },
  {
    title: "Monitor a location without Wi-Fi",
    description:
      "A compatible 4G SIM camera may be suitable where mobile coverage is available but fixed broadband or Wi-Fi is not.",
    href: "/cctv-problem/best-4g-sim-cctv-camera-without-wifi",
    linkText: "Explore 4G SIM cameras",
    icon: Radio,
  },
];

export default function HomeSecurityCamerasPage() {
  return (
<main className="min-h-screen w-full bg-white text-blue-950">
<div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8">

<section className="relative overflow-hidden rounded-3xl border border-blue-100 bg-white bg-gradient-to-br from-white via-sky-50 to-blue-100 p-6 shadow-sm sm:p-10 lg:p-12">
        <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-sky-200/40 blur-3xl" />
        <div className="absolute -bottom-20 -left-12 h-56 w-56 rounded-full bg-blue-200/40 blur-3xl" />

        <div className="relative grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/90 px-4 py-2 text-sm font-medium text-blue-800 shadow-sm">
              <ShieldCheck size={17} />
              Home Security Camera Guides
            </div>

            <h1 className="max-w-3xl text-3xl font-bold leading-tight tracking-tight text-blue-950 sm:text-4xl lg:text-5xl">
              Find the Right Security Camera for Your Home
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-700 sm:text-lg">
              Learn how different home security cameras work, compare their
              features, and explore practical guides for indoor monitoring,
              pet care, and locations without Wi-Fi.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#camera-guides"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-700 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-800"
              >
                Explore camera guides
                <ArrowRight size={17} />
              </a>

              <a
                href="#choose-camera"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-blue-200 bg-white px-5 py-3 text-sm font-semibold text-blue-800 transition hover:bg-blue-50"
              >
                How to choose
                <CheckCircle2 size={17} />
              </a>
            </div>

            <div className="mt-7 flex flex-wrap gap-x-5 gap-y-3 text-sm text-slate-600">
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 size={16} className="text-blue-600" />
                Practical buying guidance
              </span>
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 size={16} className="text-blue-600" />
                Feature comparisons
              </span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className="rounded-3xl border border-blue-100 bg-white/90 p-5 shadow-lg shadow-blue-100/60 backdrop-blur-sm sm:p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-500">
                    Security camera basics
                  </p>
                  <h2 className="mt-1 text-xl font-bold text-blue-950">
                    Choose by your needs
                  </h2>
                </div>
                <div className="rounded-2xl bg-blue-100 p-3 text-blue-700">
                  <Camera size={27} />
                </div>
              </div>

              <div className="mt-5 space-y-3">
                <div className="flex items-center gap-3 rounded-2xl border border-blue-100 bg-gradient-to-r from-white to-sky-50 p-4">
                  <div className="rounded-xl bg-sky-100 p-3 text-sky-700">
                    <Home size={21} />
                  </div>
                  <div>
                    <p className="font-semibold text-blue-950">
                      Indoor monitoring
                    </p>
                    <p className="text-sm text-slate-600">
                      Rooms and entrances
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-2xl border border-blue-100 bg-gradient-to-r from-white to-indigo-50 p-4">
                  <div className="rounded-xl bg-indigo-100 p-3 text-indigo-700">
                    <Heart size={21} />
                  </div>
                  <div>
                    <p className="font-semibold text-blue-950">
                      Pet monitoring
                    </p>
                    <p className="text-sm text-slate-600">
                      Check on pets remotely
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-2xl border border-blue-100 bg-gradient-to-r from-white to-blue-50 p-4">
                  <div className="rounded-xl bg-blue-100 p-3 text-blue-700">
                    <Radio size={21} />
                  </div>
                  <div>
                    <p className="font-semibold text-blue-950">
                      4G SIM connectivity
                    </p>
                    <p className="text-sm text-slate-600">
                      For supported mobile-network locations
                    </p>
                  </div>
                </div>
              </div>

              <p className="mt-4 rounded-xl bg-blue-50 px-4 py-3 text-sm leading-6 text-blue-800">
                The right camera depends on your location, connectivity,
                monitoring needs, and recording preferences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Camera guides */}
      <section id="camera-guides" className="mt-14 scroll-mt-24">
        <div className="mb-7 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-700">
            Explore our guides
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-blue-950 sm:text-3xl">
            Home Security Camera Guides
          </h2>
          <p className="mt-3 leading-7 text-slate-600">
            Start with the type of camera that matches your situation. Each
            guide explains important features and considerations before you
            choose a product.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {guides.map((guide) => {
            const Icon = guide.icon;

            return (
              <article
                key={guide.href}
                className="group flex h-full flex-col rounded-2xl border border-blue-100 bg-gradient-to-br from-white to-sky-50/70 p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-100/60 sm:p-6"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className={`rounded-2xl p-3 ${guide.iconBg} ${guide.iconColor}`}>
                    <Icon size={25} />
                  </div>
                  <span className="rounded-full border border-blue-100 bg-white px-3 py-1.5 text-xs font-medium text-blue-700">
                    Buying guide
                  </span>
                </div>

                <p className="mt-5 text-xs font-semibold uppercase tracking-wide text-blue-600">
                  {guide.label}
                </p>

                <h3 className="mt-2 text-xl font-bold leading-snug text-blue-950">
                  {guide.title}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">
                  {guide.description}
                </p>

                <Link
                  href={guide.href}
                  className="mt-6 inline-flex items-center gap-2 self-start rounded-xl border border-blue-200 bg-white px-4 py-2.5 text-sm font-semibold text-blue-800 transition hover:border-blue-400 hover:bg-blue-50"
                >
                  Read the guide
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </article>
            );
          })}
        </div>
      </section>

      {/* Find a camera by use case */}
      <section className="mt-14">
        <div className="mb-7 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-700">
            Start with your needs
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-blue-950 sm:text-3xl">
            What Do You Want to Monitor?
          </h2>
          <p className="mt-3 leading-7 text-slate-600">
            The best starting point is the place you want to monitor and the
            type of connection available there.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {useCases.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.href}
                className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm transition hover:border-blue-200 hover:shadow-md"
              >
                <div className="mb-4 inline-flex rounded-xl bg-blue-50 p-3 text-blue-700">
                  <Icon size={23} />
                </div>

                <h3 className="text-lg font-bold text-blue-950">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {item.description}
                </p>

                <Link
                  href={item.href}
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-900"
                >
                  {item.linkText}
                  <ArrowRight size={16} />
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      {/* Features to compare */}
      <section className="mt-14">
        <div className="mb-7 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-700">
            Before you buy
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-blue-950 sm:text-3xl">
            Important Security Camera Features
          </h2>
          <p className="mt-3 leading-7 text-slate-600">
            Specifications alone do not tell the whole story. Consider how a
            camera will work in your home, how you will access recordings, and
            what features you will actually use.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <article
                key={feature.title}
                className="rounded-2xl border border-blue-100 bg-gradient-to-br from-white to-sky-50/60 p-5 transition hover:border-blue-200 hover:shadow-md hover:shadow-blue-100/50"
              >
                <div className="mb-4 inline-flex rounded-xl bg-blue-100 p-3 text-blue-700">
                  <Icon size={22} />
                </div>

                <h3 className="text-lg font-bold text-blue-950">
                  {feature.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {feature.description}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      {/* Choosing guide */}
      <section
        id="choose-camera"
        className="mt-14 scroll-mt-24 overflow-hidden rounded-3xl border border-blue-100 bg-gradient-to-br from-white via-sky-50 to-blue-100 p-6 sm:p-9"
      >
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <div className="inline-flex rounded-2xl border border-blue-100 bg-white p-3 text-blue-700 shadow-sm">
              <Search size={27} />
            </div>

            <h2 className="mt-4 text-2xl font-bold tracking-tight text-blue-950 sm:text-3xl">
              How to Choose the Right Camera
            </h2>

            <p className="mt-3 leading-7 text-slate-600">
              Define your requirements first. This helps you avoid paying for
              features that do not solve your actual monitoring needs.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {[
              {
                title: "1. Choose the location",
                text: "Decide whether you need indoor, outdoor, pet, or remote-site monitoring.",
              },
              {
                title: "2. Check connectivity",
                text: "Confirm whether Wi-Fi is available or a supported 4G SIM camera is needed.",
              },
              {
                title: "3. Compare features",
                text: "Review image quality, night vision, alerts, audio, and recording options.",
              },
              {
                title: "4. Review ongoing costs",
                text: "Check storage fees, SIM data requirements, subscriptions, and warranty terms.",
              },
            ].map((step) => (
              <div
                key={step.title}
                className="rounded-2xl border border-blue-100 bg-white/90 p-4 shadow-sm"
              >
                <h3 className="font-semibold text-blue-950">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy and responsible use */}
      <section className="mt-10 rounded-2xl border border-blue-100 bg-blue-50/70 p-5 sm:p-6">
        <div className="flex items-start gap-4">
          <div className="shrink-0 rounded-xl bg-white p-3 text-blue-700 shadow-sm">
            <ShieldCheck size={23} />
          </div>

          <div>
            <h2 className="text-lg font-bold text-blue-950">
              Remember Privacy and Security
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              Use strong, unique passwords, enable available security
              protections, keep camera software updated, and limit access to
              trusted people. Review recording and cloud-storage policies
              before purchasing. Place cameras respectfully and follow
              applicable privacy laws.
            </p>
          </div>
        </div>
      </section>
</div>
   
    </main>
  );
}
