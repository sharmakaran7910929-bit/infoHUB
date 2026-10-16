
import Link from "next/link";
import {
  Signal,
  WifiOff,
  Smartphone,
  MapPin,
  ShieldCheck,
  HardDrive,
  BatteryCharging,
  Sun,
  Radio,
  CheckCircle2,
  XCircle,
  ArrowRight,
  Camera,
  CircleHelp,
  House,
  Tractor,
  Store,
  AlertTriangle,
  CreditCard,
  Cloud,
  Zap,
} from "lucide-react";

const problems = [
  {
    icon: WifiOff,
    title: "No Wi-Fi at the location",
    description:
      "A farm, storage shed, or remote building may not have a broadband connection. A compatible 4G camera can use a cellular network instead.",
    color: "bg-orange-100 text-orange-700",
  },
  {
    icon: MapPin,
    title: "Need to monitor a distant place",
    description:
      "Check a property from your phone while you are somewhere else, provided the camera and your phone have internet access.",
    color: "bg-blue-100 text-blue-700",
  },
  {
    icon: Smartphone,
    title: "Want to view footage on your phone",
    description:
      "Compatible cameras offer an app for live viewing and may support motion alerts and playback, depending on the model.",
    color: "bg-purple-100 text-purple-700",
  },
];

const checks = [
  {
    icon: Signal,
    title: "4G network compatibility",
    description:
      "Check supported LTE bands, SIM requirements, carrier compatibility, and actual signal strength at the installation site.",
    color: "bg-blue-50 border-blue-200 text-blue-700",
  },
  {
    icon: CreditCard,
    title: "SIM and data costs",
    description:
      "The camera may need a separate data plan. Live streaming and frequent remote viewing can consume substantial data.",
    color: "bg-amber-50 border-amber-200 text-amber-700",
  },
  {
    icon: HardDrive,
    title: "Recording and storage",
    description:
      "Check microSD support, maximum card capacity, playback features, and whether cloud recording requires a subscription.",
    color: "bg-violet-50 border-violet-200 text-violet-700",
  },
  {
    icon: BatteryCharging,
    title: "Power supply",
    description:
      "Confirm whether the camera needs a continuous power connection, uses a rechargeable battery, or supports solar charging.",
    color: "bg-emerald-50 border-emerald-200 text-emerald-700",
  },
  {
    icon: Camera,
    title: "Night vision and alerts",
    description:
      "Look for suitable night vision, motion detection, notification settings, and the field of view you need.",
    color: "bg-rose-50 border-rose-200 text-rose-700",
  },
  {
    icon: ShieldCheck,
    title: "Outdoor protection",
    description:
      "For exposed locations, check the IP weather-resistance rating, operating temperature, mounting options, and warranty.",
    color: "bg-cyan-50 border-cyan-200 text-cyan-700",
  },
];

const faqs = [
  {
    question: "Can a 4G CCTV camera work without Wi-Fi?",
    answer:
      "Yes. A compatible 4G camera can connect through a supported cellular network instead of Wi-Fi. You still need adequate mobile coverage, a suitable SIM and data plan, and power.",
  },
  {
    question: "Does a SIM CCTV camera need internet?",
    answer:
      "Remote live viewing and app notifications generally require the camera to have internet access through its cellular connection. Some cameras can record locally even when the connection is unavailable, depending on their features and settings.",
  },
  {
    question: "Does a 4G camera need a monthly subscription?",
    answer:
      "Not necessarily for the camera itself, but cellular data usually has a cost. Local microSD recording may avoid a separate cloud-storage subscription if the model supports it. Check the complete cost before buying.",
  },
  {
    question: "Can I use a 4G camera on a farm?",
    answer:
      "Yes, if the chosen camera supports the local cellular network, receives a reliable signal at the mounting location, and has a suitable power source and outdoor protection.",
  },
  {
    question: "Can a solar 4G camera work continuously?",
    answer:
      "Solar-assisted cameras depend on sunlight, battery capacity, weather, and recording activity. Check the manufacturer's specifications rather than assuming a solar panel guarantees uninterrupted operation.",
  },
];

export const metadata = {
  title:
    "Best 4G SIM CCTV Camera Without Wi-Fi: Buying Guide | PriceTag HUB",
  description:
    "Learn how to choose a 4G SIM CCTV camera without Wi-Fi. Compare network coverage, data costs, power, storage, night vision, and outdoor features.",
  alternates: {
    canonical: "/cctv-problem/best-4g-sim-cctv-camera-without-wifi",
  },
};

export default function Best4gSimCctvCameraPage() {
  return (
    <main className="min-h-screen bg-white text-slate-800">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-900 px-5 py-16 text-white sm:py-20">
        <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-cyan-400/15 blur-3xl" />
        <div className="absolute -bottom-20 left-1/4 h-64 w-64 rounded-full bg-purple-500/20 blur-3xl" />

        <div className="relative mx-auto max-w-5xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-cyan-100">
            <Radio size={16} />
            Practical CCTV buying guide
          </div>

          <h1 className="max-w-4xl text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
            Best 4G SIM CCTV Camera Without Wi-Fi: What to Check Before Buying
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-8 text-blue-100 sm:text-lg">
            Need to monitor a farm, shop, gate, or remote property where Wi-Fi
            is unavailable? A 4G SIM CCTV camera may help you view your property
            remotely. First, understand network coverage, data costs, power,
            and recording options.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 text-sm">
            <span className="rounded-lg bg-white/10 px-3 py-2">
              <Signal className="mr-2 inline" size={16} />
              Cellular connectivity
            </span>
            <span className="rounded-lg bg-white/10 px-3 py-2">
              <Smartphone className="mr-2 inline" size={16} />
              Mobile viewing
            </span>
            <span className="rounded-lg bg-white/10 px-3 py-2">
              <ShieldCheck className="mr-2 inline" size={16} />
              Buying checklist
            </span>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-5xl space-y-14 px-5 py-10 sm:py-14">
        {/* Introduction */}
        <section>
          <p className="text-lg leading-8 text-slate-600">
            Imagine owning a field outside town, a small shop that closes at
            night, or a storage building far from your home. You want to check
            what is happening there, but installing broadband is inconvenient
            or expensive. This is where a cellular security camera can be useful.
          </p>

          <div className="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-5 sm:p-6">
            <div className="flex items-start gap-3">
              <div className="rounded-xl bg-blue-600 p-2 text-white">
                <CircleHelp size={22} />
              </div>
              <div>
                <h2 className="text-lg font-bold text-blue-950">
                  First, understand the difference
                </h2>
                <p className="mt-2 leading-7 text-blue-900">
                  A 4G SIM camera uses a compatible cellular network for
                  connectivity. A regular Wi-Fi camera normally connects
                  through a Wi-Fi router. Both can offer remote viewing, but
                  their connectivity requirements differ.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Problems and use cases */}
        <section>
          <div className="mb-6">
            <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
              Start with your problem
            </p>
            <h2 className="mt-2 text-2xl font-bold text-slate-950 sm:text-3xl">
              When is a 4G SIM CCTV camera useful?
            </h2>
            <p className="mt-3 leading-7 text-slate-600">
              The right camera depends on where you will install it and what
              you want to monitor.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {problems.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                  <div className={`mb-4 inline-flex rounded-xl p-3 ${item.color}`}>
                    <Icon size={25} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>

          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl bg-emerald-50 p-5">
              <Tractor className="mb-3 text-emerald-700" size={27} />
              <h3 className="font-bold text-emerald-950">Farm or field</h3>
              <p className="mt-2 text-sm leading-6 text-emerald-900">
                Check cellular signal over the exact area where the camera
                will be mounted.
              </p>
            </div>
            <div className="rounded-2xl bg-orange-50 p-5">
              <Store className="mb-3 text-orange-700" size={27} />
              <h3 className="font-bold text-orange-950">Shop or warehouse</h3>
              <p className="mt-2 text-sm leading-6 text-orange-900">
                Consider coverage, viewing needs, storage capacity, and
                whether continuous recording is required.
              </p>
            </div>
            <div className="rounded-2xl bg-violet-50 p-5">
              <House className="mb-3 text-violet-700" size={27} />
              <h3 className="font-bold text-violet-950">Remote property</h3>
              <p className="mt-2 text-sm leading-6 text-violet-900">
                Choose a suitable power source and weather protection for
                the installation.
              </p>
            </div>
          </div>
        </section>

        {/* Buying checklist */}
        <section>
          <div className="mb-6">
            <p className="text-sm font-semibold uppercase tracking-wider text-cyan-700">
              Before you spend money
            </p>
            <h2 className="mt-2 text-2xl font-bold text-slate-950 sm:text-3xl">
              6 things to check before buying
            </h2>
            <p className="mt-3 leading-7 text-slate-600">
              A low advertised price does not tell you the total ownership
              cost. Check these features against your actual needs.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {checks.map((item, index) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className={`rounded-2xl border p-5 ${item.color}`}
                >
                  <div className="flex items-start gap-4">
                    <div className="rounded-xl bg-white/80 p-3">
                      <Icon size={24} />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider opacity-70">
                        Check {index + 1}
                      </p>
                      <h3 className="mt-1 text-lg font-bold">{item.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-slate-700">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* How it works */}
        <section className="rounded-3xl bg-slate-950 p-6 text-white sm:p-8">
          <h2 className="text-2xl font-bold sm:text-3xl">
            How does a 4G SIM camera work?
          </h2>
          <p className="mt-3 max-w-3xl leading-7 text-slate-300">
            The exact setup varies by model, but the typical process looks
            like this.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                number: "01",
                title: "Insert a compatible SIM",
                text: "Follow the manufacturer's SIM and activation instructions.",
              },
              {
                number: "02",
                title: "Check the signal",
                text: "Confirm reliable cellular coverage at the installation point.",
              },
              {
                number: "03",
                title: "Power and configure",
                text: "Connect power, install the official app, and complete setup.",
              },
              {
                number: "04",
                title: "Choose recording",
                text: "Configure supported local storage or cloud recording.",
              },
            ].map((step) => (
              <div
                key={step.number}
                className="rounded-2xl border border-white/10 bg-white/5 p-5"
              >
                <span className="text-3xl font-bold text-cyan-300">
                  {step.number}
                </span>
                <h3 className="mt-4 font-bold">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Solar option */}
        <section className="grid items-center gap-6 md:grid-cols-2">
          <div className="rounded-3xl bg-amber-50 p-6 sm:p-8">
            <Sun className="text-amber-600" size={38} />
            <h2 className="mt-4 text-2xl font-bold text-amber-950">
              What if there is no nearby power outlet?
            </h2>
            <p className="mt-3 leading-7 text-amber-950">
              A battery-powered or solar-assisted 4G camera may suit some
              remote installations. However, sunlight, battery size, weather,
              and recording activity affect how long it can operate.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-950">
              Solar is not automatically the best choice
            </h3>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
              <li className="flex gap-2">
                <CheckCircle2 className="mt-1 shrink-0 text-emerald-600" size={18} />
                Check whether the solar panel is included.
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="mt-1 shrink-0 text-emerald-600" size={18} />
                Review battery capacity and charging requirements.
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="mt-1 shrink-0 text-emerald-600" size={18} />
                Check performance during cloudy periods and at night.
              </li>
              <li className="flex gap-2">
                <XCircle className="mt-1 shrink-0 text-rose-600" size={18} />
                Do not assume every 4G camera supports solar power.
              </li>
            </ul>
          </div>
        </section>

        {/* Cost breakdown */}
        <section>
          <h2 className="text-2xl font-bold text-slate-950 sm:text-3xl">
            Calculate the real cost, not just the camera price
          </h2>
          <p className="mt-3 leading-7 text-slate-600">
            Before choosing a model, account for the costs that may arise
            after purchase.
          </p>

          <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200">
            {[
              {
                icon: Camera,
                title: "Camera",
                text: "The purchase price of the device.",
                color: "text-blue-600",
              },
              {
                icon: CreditCard,
                title: "SIM and data plan",
                text: "Recurring mobile data charges, depending on usage and plan.",
                color: "text-amber-600",
              },
              {
                icon: HardDrive,
                title: "Storage",
                text: "A compatible memory card or optional cloud-storage plan.",
                color: "text-violet-600",
              },
              {
                icon: Zap,
                title: "Power and installation",
                text: "Possible mounting, wiring, battery, or solar accessories.",
                color: "text-emerald-600",
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className={`flex items-start gap-4 p-5 ${
                    index !== 3 ? "border-b border-slate-200" : ""
                  }`}
                >
                  <Icon className={item.color} size={25} />
                  <div>
                    <h3 className="font-bold text-slate-900">{item.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      {item.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <p className="mt-4 text-sm leading-6 text-slate-500">
            Tip: Ask whether the advertised package includes a SIM, data,
            memory card, solar panel, and any required mounting accessories.
            Inclusions differ by seller and model.
          </p>
        </section>

        {/* Avoid mistakes */}
        <section>
          <div className="rounded-3xl border border-rose-200 bg-rose-50 p-6 sm:p-8">
            <div className="flex items-start gap-3">
              <AlertTriangle className="mt-1 shrink-0 text-rose-700" size={27} />
              <div>
                <h2 className="text-2xl font-bold text-rose-950">
                  Mistakes to avoid
                </h2>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-rose-950">
                  <li>• Buying before checking cellular coverage at the exact site.</li>
                  <li>• Assuming every SIM or mobile carrier is supported.</li>
                  <li>• Forgetting ongoing data and optional cloud-storage costs.</li>
                  <li>• Assuming motion detection means continuous recording.</li>
                  <li>• Installing an indoor-rated camera in an exposed outdoor location.</li>
                  <li>• Expecting remote viewing to work when the camera has no power or connection.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section>
          <h2 className="text-2xl font-bold text-slate-950 sm:text-3xl">
            Frequently asked questions
          </h2>
          <div className="mt-6 space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-slate-200 bg-white p-5 open:border-indigo-200 open:bg-indigo-50/40"
              >
                <summary className="cursor-pointer list-none pr-5 font-semibold text-slate-900 marker:hidden">
                  <span className="flex items-center justify-between gap-4">
                    {faq.question}
                    <ArrowRight
                      className="shrink-0 text-indigo-600 transition group-open:rotate-90"
                      size={18}
                    />
                  </span>
                </summary>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* Related reading */}
        <section className="rounded-3xl bg-gradient-to-br from-indigo-50 via-blue-50 to-cyan-50 p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-slate-950">
            Explore related security camera guides
          </h2>
          <p className="mt-3 leading-7 text-slate-600">
            Choose the type of camera that matches your situation.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <Link
              href="/best-indoor-security-camera-for-home"
              className="group rounded-2xl border border-white bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex items-center justify-between gap-3">
                <Camera className="text-blue-600" size={27} />
                <ArrowRight
                  className="text-slate-400 transition group-hover:translate-x-1 group-hover:text-blue-600"
                  size={20}
                />
              </div>
              <h3 className="mt-4 font-bold text-slate-900">
                Best Indoor Security Camera for Home
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Explore Wi-Fi cameras, easy setup, recording, and storage.
              </p>
            </Link>

            <Link
              href="/best-pet-camera-for-home"
              className="group rounded-2xl border border-white bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex items-center justify-between gap-3">
                <Smartphone className="text-purple-600" size={27} />
                <ArrowRight
                  className="text-slate-400 transition group-hover:translate-x-1 group-hover:text-purple-600"
                  size={20}
                />
              </div>
              <h3 className="mt-4 font-bold text-slate-900">
                Best Pet Camera for Home
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Learn about remote pet monitoring, audio, and useful app features.
              </p>
            </Link>
          </div>
        </section>

        {/* Editorial note */}
        <p className="border-t border-slate-200 pt-5 text-sm leading-6 text-slate-500">
          PriceTag HUB aims to explain practical buying decisions clearly.
          Check the manufacturer's current specifications, network compatibility,
          warranty, and total running costs before purchasing a security camera.
        </p>
      </div>
    </main>
  );
}
