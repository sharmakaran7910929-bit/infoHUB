
import Link from "next/link";
import {
  Camera,
  Wifi,
  Smartphone,
  Moon,
  Mic,
  HardDrive,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Home,
  Eye,
  Wallet,
  LockKeyhole,
  AlertTriangle,
  Rotate3D,
  CircleHelp,
  Dog,
  Baby,
  Cloud,
} from "lucide-react";
import ProductCard from "../../../components/ProductCard";

export const metadata = {
  title:
    "Best Indoor Security Camera for Home: Easy Setup & Storage | PriceTag HUB",
  description:
    "Learn how to choose the best indoor security camera for home. Compare Wi-Fi setup, night vision, mobile viewing, two-way audio, local storage, and subscription costs.",
  alternates: {
    canonical:
      "https://www.pricetag.co.in/cctv-problem/best-indoor-security-camera-for-home",
  },
};

const features = [
  {
    icon: Wifi,
    title: "Easy Wi-Fi setup",
    text: "Choose a camera compatible with your home Wi-Fi and phone. Check whether it requires a 2.4 GHz network.",
    color: "border-blue-200 bg-blue-50 text-blue-800",
    iconBg: "bg-blue-100 text-blue-700",
  },
  {
    icon: Moon,
    title: "Night vision",
    text: "Infrared night vision can help you monitor a room in darkness. Check the stated range and low-light performance.",
    color: "border-violet-200 bg-violet-50 text-violet-900",
    iconBg: "bg-violet-100 text-violet-700",
  },
  {
    icon: Smartphone,
    title: "Mobile app access",
    text: "Look for live viewing, playback, useful notifications, and an app that supports your phone.",
    color: "border-cyan-200 bg-cyan-50 text-cyan-900",
    iconBg: "bg-cyan-100 text-cyan-700",
  },
  {
    icon: Mic,
    title: "Two-way audio",
    text: "A built-in microphone and speaker may let you listen and talk through the camera app.",
    color: "border-rose-200 bg-rose-50 text-rose-900",
    iconBg: "bg-rose-100 text-rose-700",
  },
  {
    icon: HardDrive,
    title: "Recording and storage",
    text: "Check microSD card support, recording modes, playback, and any cloud-storage fees.",
    color: "border-emerald-200 bg-emerald-50 text-emerald-950",
    iconBg: "bg-emerald-100 text-emerald-700",
  },
  {
    icon: Rotate3D,
    title: "Pan and tilt",
    text: "A rotating camera can cover more of a room than a fixed-view model, depending on its movement range.",
    color: "border-amber-200 bg-amber-50 text-amber-950",
    iconBg: "bg-amber-100 text-amber-700",
  },
];

const useCases = [
  {
    icon: Home,
    title: "Monitor your living room",
    text: "Check an entrance or shared indoor space while you are away.",
    color: "bg-blue-100 text-blue-700",
  },
  {
    icon: Dog,
    title: "Keep an eye on pets",
    text: "Look for two-way audio, pet detection, and useful motion alerts.",
    color: "bg-orange-100 text-orange-700",
  },
  {
    icon: Baby,
    title: "Check a child's room",
    text: "Consider low-light performance, audio features, privacy controls, and secure access.",
    color: "bg-purple-100 text-purple-700",
  },
];

const faqs = [
  {
    q: "Which indoor CCTV camera is best for home?",
    a: "The best choice depends on your room, budget, Wi-Fi connection, viewing needs, and preferred recording method. Compare these features before choosing a particular brand or model.",
  },
  {
    q: "Can I install an indoor Wi-Fi camera myself?",
    a: "Many consumer indoor cameras are designed for self-installation. Usually, you position the camera, connect its power, install the manufacturer's app, and follow the setup instructions. Requirements vary by model.",
  },
  {
    q: "Can an indoor security camera work without the internet?",
    a: "Some cameras can record locally to a compatible memory card when the internet connection is unavailable. However, remote live viewing and app notifications generally require connectivity. Check the exact model's offline recording capabilities.",
  },
  {
    q: "Does an indoor CCTV camera need a monthly subscription?",
    a: "Not always. Some models support local microSD recording without a cloud subscription. Certain cloud features, extended video history, or advanced detections may require a paid plan.",
  },
  {
    q: "Is a 360-degree camera always better?",
    a: "Not necessarily. A pan-and-tilt camera may cover more of a room, but a fixed camera can be sufficient for a doorway or a specific area. Placement and image detail matter as well.",
  },
  {
    q: "Can I use an indoor camera outside my house?",
    a: "Only if the specific model is rated for outdoor use and the installation conditions. Indoor-only cameras should not be exposed to rain, dust, or unsuitable temperatures.",
  },
];

export default function BestIndoorSecurityCameraPage() {
  return (
    <main className="min-h-screen w-full bg-white text-slate-800">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-blue-100 bg-gradient-to-br from-white via-sky-50 to-blue-100 px-5 py-12 sm:py-16">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-sky-200/50 blur-3xl" />
        <div className="absolute -bottom-24 left-1/4 h-72 w-72 rounded-full bg-blue-200/50 blur-3xl" />

        <div className="relative mx-auto max-w-5xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/90 px-4 py-2 text-sm font-medium text-blue-800 shadow-sm">
            <ShieldCheck size={17} />
            Practical home security guide
          </div>

          <h1 className="max-w-4xl text-3xl font-bold leading-tight tracking-tight text-blue-950 sm:text-5xl">
            Best Indoor Security Camera for Home: Easy Setup and Storage Options
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
            Want to check your home while you are away, see what happens at
            night, or receive alerts when movement is detected? Learn which
            indoor CCTV camera features are useful and how to avoid paying for
            features you do not need.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 text-sm">
            <span className="inline-flex items-center gap-2 rounded-xl border border-blue-100 bg-white/90 px-4 py-3 font-medium text-blue-800 shadow-sm">
              <Wifi size={17} className="text-blue-600" />
              Wi-Fi cameras
            </span>
            <span className="inline-flex items-center gap-2 rounded-xl border border-blue-100 bg-white/90 px-4 py-3 font-medium text-blue-800 shadow-sm">
              <Moon size={17} className="text-indigo-600" />
              Night vision
            </span>
            <span className="inline-flex items-center gap-2 rounded-xl border border-blue-100 bg-white/90 px-4 py-3 font-medium text-blue-800 shadow-sm">
              <HardDrive size={17} className="text-cyan-700" />
              Storage choices
            </span>
          </div>
        </div>
      </section>

      {/* Centered page content */}
      <div className="mx-auto w-full max-w-5xl space-y-14 px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        {/* Relatable problem */}
        <section>
          <p className="text-lg leading-8 text-slate-600">
            Imagine leaving home for work and wondering whether everything is
            fine inside. Perhaps you want to check the living room, monitor a
            pet, or see what happened while you were away. An indoor security
            camera can help you check remotely, but choosing the right one
            means understanding how it connects, records, and protects your
            footage.
          </p>

          <div className="mt-6 rounded-2xl border border-blue-200 bg-gradient-to-r from-white to-blue-50 p-5 shadow-sm sm:p-6">
            <div className="flex items-start gap-3">
              <div className="rounded-xl bg-blue-100 p-3 text-blue-700">
                <CircleHelp size={23} />
              </div>
              <div>
                <h2 className="text-lg font-bold text-blue-950">
                  Start with one simple question
                </h2>
                <p className="mt-2 leading-7 text-slate-600">
                  What exactly do you need to monitor? A single doorway may
                  need a fixed camera, while a larger room may benefit from a
                  pan-and-tilt model. Your answer helps narrow down the options
                  before you compare prices.
                </p>
              </div>
            </div>
          </div>
        </section>
 <ProductCard
 categoryHeading='All Rounder Camera for Home and Office'
 image={'/indoor-camera/indoor-camera-1.jpeg'}
link='https://www.amazon.in/Trueview-3MP-WiFi-Robot-Compatible/dp/B09WDTVG8C?crid=3IO7MYZL0K9BF&dib=eyJ2IjoiMSJ9.BtPxSvLCws-9g7dQkrrV8Lm4ldzJrIZ1aiKQdMnXnm5KWIyI5V6lO4LlxewBy5fPDcIgkSbDnSa-R14O4hp3uGWRQKjWVfht9m5MKjBBFCJqIEtD7V7eAud9vTBmzLmDWraNyUaYolwtcplMQw01UNnPSmDcuqVyvxAMq02bZEe1ZfUxPCLyrJcBQKiQviHHqR5B9kR5pPi3F4po1L1iJ-cpUe88z2ZvIpemi0-VFV8.rJh-b1HavONu1f6srwEo8fe9Mr96o5mQYUAr5csYm9A&dib_tag=se&keywords=Fixed-View%2BIndoor%2BWi-Fi%2BCCTV%2BCamera&qid=1792065575&refinements=p_n_g-1003353956111%3A28897555031&rnid=28897540031&sprefix=fixed-view%2Bindoor%2Bwi-fi%2Bcctv%2Bcamera%2Caps%2C304&sr=8-1-spons&aref=Wu8fQ1eYdL&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1&linkCode=ll2&tag=pricetaghub-21&linkId=fd3e3b70f1cda7d83e3804df02d38d5c&ref_=as_li_ss_tl'
 title='Trueview 3MP WiFi Robot Security Camera'
  features={[
   '360° Pan Tilt','All-Time Color Night Vision',
   'AI Auto Tracking & 2-Way Audio',
   'Alexa Compatible',
   'Supports 256GB Memory Card',
   'STQC Certified for Privacy'
  ]}
 />
        {/* Common use cases */}
        <section>
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-700">
            Match the camera to your needs
          </p>
          <h2 className="mt-2 text-2xl font-bold text-blue-950 sm:text-3xl">
            Which indoor camera suits your situation?
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {useCases.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-md"
                >
                  <div
                    className={`mb-4 inline-flex rounded-xl p-3 ${item.color}`}
                  >
                    <Icon size={26} />
                  </div>
                  <h3 className="text-lg font-bold text-blue-950">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {item.text}
                  </p>
                </article>
              );
            })}
          </div>
        </section>
 <ProductCard
 categoryHeading='Security Camera for Home and Office, with Alarm'
 image={'/indoor-camera/indoor-camera-2.jpeg'}
link='https://www.amazon.in/Qubo-Certified-Detection-Intruder-Directly/dp/B0G64G64YL?dib=eyJ2IjoiMSJ9.DMLiENBfUGOPdv9JAsGRpdannAWa6cYFNdOGITBUx26PxYhS1-AOIFC-BmSNrc1qmg_3sUUSHUXLJdSuHqyS75EsGeb2aNp5JPHbl59siAvWmAuM_SUkLY3AxevlaCE_WeKbhMHpZ0zQpPr64O9stwaw46c4b1vu8UP4CZNt3RwQsDFWFqiMTAf5MsmFOEDcHgECWaQ0BUZz6YosiWk80A0FZAACn4zxxJeAW-aDJUQ.XVvsfsTJmvwC6ukcc5UAmGpyzwuYjqulK4599gN2dLQ&dib_tag=se&keywords=Fixed-View%2BIndoor%2BWi-Fi%2BCCTV%2BCamera&qid=1792066446&refinements=p_n_g-1003353956111%3A28897565031&rnid=28897540031&sr=8-1-spons&aref=hYgdaMiVXz&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1&linkCode=ll2&tag=pricetaghub-21&linkId=093b388c7f61518cce683a999b564314&ref_=as_li_ss_tl' title='Qubo Smart Cam 360° 3MP'
  features={[
   'No SD Card Required, Records Directly on Cloud',
   '2026 Edition - by Hero Group',
   'STQC Certified',
   'AI Person Detection',
   'Intruder Alarm',
   'Night Vision',
   'Two-Way Talk'

  ]}
 />
        {/* Features */}
        <section>
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-700">
            Features that matter
          </p>
          <h2 className="mt-2 text-2xl font-bold text-blue-950 sm:text-3xl">
            6 things to check before buying an indoor CCTV camera
          </h2>
          <p className="mt-3 leading-7 text-slate-600">
            A camera with more specifications is not necessarily the best
            camera for your home. Focus on the features that solve your
            particular problem.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {features.map((item, index) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className={`rounded-2xl border p-5 shadow-sm transition hover:shadow-md ${item.color}`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`rounded-xl p-3 ${item.iconBg}`}>
                      <Icon size={24} />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider opacity-70">
                        Feature {index + 1}
                      </p>
                      <h3 className="mt-1 text-lg font-bold">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-slate-700">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* Resolution */}
        <section className="overflow-hidden rounded-3xl border border-blue-100 bg-gradient-to-br from-white via-sky-50 to-blue-100 p-6 shadow-sm sm:p-8">
          <div className="flex items-start gap-4">
            <Eye className="mt-1 shrink-0 text-blue-700" size={32} />
            <div>
              <h2 className="text-2xl font-bold text-blue-950 sm:text-3xl">
                Is a higher-resolution camera always better?
              </h2>
              <p className="mt-4 leading-7 text-slate-600">
                Resolution affects how much visual detail a camera captures,
                but image quality also depends on lighting, the sensor, lens,
                compression, and placement. Higher-resolution footage can also
                consume more storage and network bandwidth.
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-blue-100 bg-white/90 p-5">
              <h3 className="font-bold text-blue-800">
                When basic HD may be enough
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Monitoring a small room or checking general movement where
                extreme detail is not essential.
              </p>
            </div>
            <div className="rounded-2xl border border-indigo-100 bg-white/90 p-5">
              <h3 className="font-bold text-indigo-800">
                When extra detail may help
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Monitoring a larger area or needing clearer details, provided
                lighting, placement, and storage are adequate.
              </p>
            </div>
          </div>
        </section>

        {/* Installation */}
        <section>
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-700">
            Simple installation
          </p>
          <h2 className="mt-2 text-2xl font-bold text-blue-950 sm:text-3xl">
            How to set up an indoor Wi-Fi camera
          </h2>
          <p className="mt-3 leading-7 text-slate-600">
            Many consumer cameras are designed for straightforward
            self-installation. Follow the instructions for your particular
            model.
          </p>

          <div className="mt-6 space-y-4">
            {[
              {
                n: "01",
                title: "Choose a suitable position",
                text: "Place the camera where it can see the area you want to monitor without unnecessarily recording private spaces.",
                color: "bg-blue-100 text-blue-800",
              },
              {
                n: "02",
                title: "Connect the power",
                text: "Most plug-in indoor cameras need a suitable power outlet. Check cable length and placement.",
                color: "bg-indigo-100 text-indigo-800",
              },
              {
                n: "03",
                title: "Install the official app",
                text: "Use the manufacturer's app and follow its device-pairing instructions.",
                color: "bg-cyan-100 text-cyan-800",
              },
              {
                n: "04",
                title: "Configure recording and alerts",
                text: "Set up supported storage, motion notifications, access permissions, and privacy settings.",
                color: "bg-emerald-100 text-emerald-800",
              },
            ].map((step) => (
              <div
                key={step.n}
                className="flex gap-4 rounded-2xl border border-blue-100 bg-white p-5 shadow-sm"
              >
                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl font-bold ${step.color}`}
                >
                  {step.n}
                </div>
                <div>
                  <h3 className="font-bold text-blue-950">{step.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    {step.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Storage comparison */}
        <section>
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-700">
            Recording options
          </p>
          <h2 className="mt-2 text-2xl font-bold text-blue-950 sm:text-3xl">
            Local storage vs cloud storage
          </h2>
          <p className="mt-3 leading-7 text-slate-600">
            Where your recordings are stored can affect privacy, ongoing costs,
            and how easily you can retrieve important footage.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <article className="rounded-2xl border border-emerald-200 bg-gradient-to-br from-white to-emerald-50 p-6">
              <div className="inline-flex rounded-xl bg-emerald-100 p-3 text-emerald-700">
                <HardDrive size={27} />
              </div>
              <h3 className="mt-4 text-xl font-bold text-emerald-950">
                Local storage
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Compatible cameras can save footage to a microSD card. This
                may reduce recurring storage costs, but card support,
                capacity, recording modes, and protection against camera theft
                vary.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-emerald-950">
                <li className="flex gap-2">
                  <CheckCircle2 size={17} className="shrink-0 text-emerald-700" />
                  May avoid a cloud subscription
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 size={17} className="shrink-0 text-emerald-700" />
                  Check card capacity and recording settings
                </li>
              </ul>
            </article>

            <article className="rounded-2xl border border-blue-200 bg-gradient-to-br from-white to-blue-50 p-6">
              <div className="inline-flex rounded-xl bg-blue-100 p-3 text-blue-700">
                <Cloud size={27} />
              </div>
              <h3 className="mt-4 text-xl font-bold text-blue-950">
                Cloud storage
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Supported footage is uploaded to an online service. Depending
                on the plan, cloud storage may offer remote playback and
                access to recordings even if the camera is damaged or stolen.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-blue-950">
                <li className="flex gap-2">
                  <CheckCircle2 size={17} className="shrink-0 text-blue-700" />
                  Check subscription fees and retention period
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 size={17} className="shrink-0 text-blue-700" />
                  Requires connectivity for uploads
                </li>
              </ul>
            </article>
          </div>

          <div className="mt-5 flex items-start gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-5">
            <Wallet className="mt-1 shrink-0 text-amber-700" size={23} />
            <p className="text-sm leading-7 text-amber-950">
              <strong>Buying tip:</strong> Check the full cost of the camera,
              memory card, and optional cloud plan. A low initial price may
              not represent the lowest long-term cost.
            </p>
          </div>
        </section>

        {/* Privacy */}
        <section className="rounded-3xl border border-violet-200 bg-gradient-to-br from-white to-violet-50 p-6 sm:p-8">
          <div className="flex items-start gap-4">
            <div className="shrink-0 rounded-xl bg-violet-100 p-3 text-violet-700">
              <LockKeyhole size={25} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-violet-950">
                Do not overlook privacy and account security
              </h2>
              <p className="mt-3 leading-7 text-slate-600">
                An indoor camera may capture sensitive moments inside your
                home. Choose a reputable manufacturer, install firmware
                updates, use a strong unique password, enable two-factor
                authentication if available, and limit access to trusted users.
              </p>
              <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-600">
                <li>• Review who can access live feeds and recordings.</li>
                <li>• Check encryption, privacy modes, and account recovery options.</li>
                <li>• Avoid positioning cameras where recording would invade personal privacy.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Common mistakes */}
        <section className="rounded-3xl border border-rose-200 bg-gradient-to-br from-white to-rose-50 p-6 sm:p-8">
          <div className="flex items-start gap-3">
            <div className="shrink-0 rounded-xl bg-rose-100 p-3 text-rose-700">
              <AlertTriangle size={25} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-rose-950">
                Common mistakes when buying an indoor camera
              </h2>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
                <li>• Buying without checking Wi-Fi compatibility.</li>
                <li>• Assuming every feature is available without a subscription.</li>
                <li>• Ignoring the cost of a memory card or cloud plan.</li>
                <li>• Expecting clear night footage without checking night-vision performance.</li>
                <li>• Choosing a fixed camera when the required viewing area is much wider.</li>
                <li>• Using an indoor-only camera in an exposed outdoor location.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section>
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-700">
            Common questions
          </p>
          <h2 className="mt-2 text-2xl font-bold text-blue-950 sm:text-3xl">
            Frequently asked questions
          </h2>
          <div className="mt-6 space-y-3">
            {faqs.map((item) => (
              <details
                key={item.q}
                className="group rounded-2xl border border-blue-100 bg-white p-5 shadow-sm transition open:border-blue-200 open:bg-blue-50/50"
              >
                <summary className="cursor-pointer list-none font-semibold text-blue-950">
                  <span className="flex items-center justify-between gap-4">
                    {item.q}
                    <ArrowRight
                      className="shrink-0 text-blue-600 transition group-open:rotate-90"
                      size={19}
                    />
                  </span>
                </summary>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* Related pages */}
        <section className="rounded-3xl border border-blue-100 bg-gradient-to-br from-white via-sky-50 to-indigo-50 p-6 sm:p-8">
          <div className="inline-flex rounded-xl bg-blue-100 p-3 text-blue-700">
            <Camera size={26} />
          </div>
          <h2 className="mt-4 text-2xl font-bold text-blue-950">
            Explore related camera guides
          </h2>
          <p className="mt-3 leading-7 text-slate-600">
            Different locations need different connectivity and camera
            features. Explore the guide that matches your situation.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <Link
              href="/best-pet-camera-for-home"
              className="group rounded-2xl border border-blue-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-md"
            >
              <Dog className="text-orange-600" size={28} />
              <div className="mt-4 flex items-center justify-between gap-3">
                <h3 className="font-bold text-blue-950">
                  Best Pet Camera for Home
                </h3>
                <ArrowRight
                  className="shrink-0 text-slate-400 transition group-hover:translate-x-1 group-hover:text-blue-700"
                  size={20}
                />
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Explore cameras for monitoring pets remotely.
              </p>
            </Link>

            <Link
              href="/best-4g-sim-cctv-camera-without-wifi"
              className="group rounded-2xl border border-blue-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-md"
            >
              <Wifi className="text-indigo-600" size={28} />
              <div className="mt-4 flex items-center justify-between gap-3">
                <h3 className="font-bold text-blue-950">
                  Best 4G SIM CCTV Camera Without Wi-Fi
                </h3>
                <ArrowRight
                  className="shrink-0 text-slate-400 transition group-hover:translate-x-1 group-hover:text-indigo-700"
                  size={20}
                />
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Understand cellular cameras for locations without broadband.
              </p>
            </Link>
          </div>
        </section>

        <footer className="border-t border-blue-100 pt-5 text-sm leading-6 text-slate-500">
          PriceTag HUB provides practical educational buying guidance. Check
          the manufacturer's current specifications, warranty, compatibility,
          storage requirements, and total cost before purchasing a camera.
        </footer>
      </div>
    </main>
  );
}
