
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BatteryCharging,
  Camera,
  CheckCircle2,
  CircleDollarSign,
  Gamepad2,
  Search,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Wallet,
  Zap,
} from "lucide-react";

export const metadata = {
  title: "Find Your Next Smartphone | PriceTag HUB",
  description:
    "Looking for your next smartphone? Explore phone recommendations by budget, camera, battery, gaming and everyday needs. Start with the best phones under ₹20,000.",
  keywords: [
    "smartphones",
    "best smartphones in India",
    "best phone under 20000",
    "smartphone buying guide",
    "best camera phone",
    "best battery phone",
    "budget smartphones",
  ],
  alternates: {
    canonical: "/smartphone",
  },
  openGraph: {
    title: "Find Your Next Smartphone | PriceTag HUB",
    description:
      "Find phones that fit your budget, priorities and everyday needs. Explore smartphone buying guides on PriceTag HUB.",
    url: "/smartphone",
    type: "website",
  },
};

const phoneGuides = [
  {
    title: "Best Phones Under ₹20,000",
    subtitle: "Smart upgrades without stretching your budget",
    description:
      "Explore smartphones for everyday use, photography, battery life, entertainment and more within a ₹20,000 budget.",
    href: "/smartphone/best-phone-under-20000",
    tag: "START HERE",
    icon: Wallet,
    theme: "blue",
    featured: true,
  },
];

const priorities = [
  {
    title: "Camera & Photography",
    description:
      "Find phones worth comparing for photos, portraits and everyday memories.",
    icon: Camera,
    theme: "purple",
  },
  {
    title: "Battery & Charging",
    description:
      "Explore options for long days, heavy use and fewer charging breaks.",
    icon: BatteryCharging,
    theme: "emerald",
  },
  {
    title: "Gaming & Performance",
    description:
      "Focus on processing power, smooth displays and sustained performance.",
    icon: Gamepad2,
    theme: "orange",
  },
  {
    title: "Everyday Reliability",
    description:
      "Prioritize a balanced experience for calls, apps, browsing and streaming.",
    icon: ShieldCheck,
    theme: "sky",
  },
];

const themes = {
  blue: {
    card: "border-blue-200 bg-gradient-to-br from-blue-50 via-white to-indigo-100",
    icon: "bg-blue-100 text-blue-800",
    label: "text-blue-800",
    button: "bg-blue-700 hover:bg-blue-800",
    soft: "bg-blue-100 text-blue-900",
  },
  purple: {
    card: "border-purple-200 bg-gradient-to-br from-purple-50 to-white",
    icon: "bg-purple-100 text-purple-800",
    label: "text-purple-800",
    button: "bg-purple-700 hover:bg-purple-800",
    soft: "bg-purple-100 text-purple-900",
  },
  emerald: {
    card: "border-emerald-200 bg-gradient-to-br from-emerald-50 to-white",
    icon: "bg-emerald-100 text-emerald-800",
    label: "text-emerald-800",
    button: "bg-emerald-700 hover:bg-emerald-800",
    soft: "bg-emerald-100 text-emerald-900",
  },
  orange: {
    card: "border-orange-200 bg-gradient-to-br from-orange-50 to-white",
    icon: "bg-orange-100 text-orange-800",
    label: "text-orange-800",
    button: "bg-orange-700 hover:bg-orange-800",
    soft: "bg-orange-100 text-orange-900",
  },
  sky: {
    card: "border-sky-200 bg-gradient-to-br from-sky-50 to-white",
    icon: "bg-sky-100 text-sky-800",
    label: "text-sky-800",
    button: "bg-sky-700 hover:bg-sky-800",
    soft: "bg-sky-100 text-sky-900",
  },
};

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mb-9 max-w-3xl">
      <p className="text-sm font-bold uppercase tracking-widest text-blue-700">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
        {description}
      </p>
    </div>
  );
}

function GuideCard({ guide }) {
  const Icon = guide.icon;
  const theme = themes[guide.theme];

  return (
    <article
      className={`group flex h-full flex-col overflow-hidden rounded-3xl border ${theme.card} transition duration-300 hover:-translate-y-1 hover:shadow-xl`}
    >
      <div className="flex flex-1 flex-col p-6 sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <div className={`rounded-2xl p-3 ${theme.icon}`}>
            <Icon className="h-7 w-7" />
          </div>
          <span
            className={`rounded-full px-3 py-1.5 text-xs font-bold tracking-wide ${theme.soft}`}
          >
            {guide.tag}
          </span>
        </div>

        <h3 className="mt-7 text-2xl font-bold leading-tight text-slate-950 sm:text-3xl">
          {guide.title}
        </h3>

        <p className={`mt-3 font-bold ${theme.label}`}>
          {guide.subtitle}
        </p>

        <p className="mt-4 flex-1 leading-7 text-slate-600">
          {guide.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {["Compare options", "Explore features", "Check your budget"].map(
            (item) => (
              <span
                key={item}
                className="rounded-full border border-white bg-white/80 px-3 py-1.5 text-xs font-bold text-slate-600"
              >
                {item}
              </span>
            )
          )}
        </div>

        <Link
          href={guide.href}
          className={`mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl px-5 py-3 font-bold text-white transition ${theme.button}`}
        >
          Explore Phone Recommendations
          <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  );
}

function PriorityCard({ item }) {
  const Icon = item.icon;
  const theme = themes[item.theme];

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-blue-300 hover:shadow-md sm:p-6">
      <div className={`inline-flex rounded-xl p-3 ${theme.icon}`}>
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mt-4 text-lg font-bold text-slate-950">
        {item.title}
      </h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">
        {item.description}
      </p>
    </div>
  );
}

export default function SmartphonePage() {
  return (
    <main className="min-h-screen bg-white text-slate-800">
      {/* HERO */}
      <section className="relative isolate overflow-hidden border-b border-blue-100 bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-900 text-white">
        <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 left-1/4 h-72 w-72 rounded-full bg-indigo-400/20 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-bold text-blue-100 backdrop-blur">
              <Sparkles className="h-4 w-4" />
              Smartphone Buying Guides
            </div>

            <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Your Next Phone
              <span className="mt-2 block text-blue-300">
                Starts Here.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-200">
              Better choices. Smarter comparisons. A phone that fits your
              budget and the way you actually use it.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/smartphone/best-phone-under-20000"
                className="inline-flex min-h-14 items-center justify-center gap-3 rounded-xl bg-white px-6 py-4 font-bold text-blue-950 shadow-lg transition hover:bg-blue-50"
              >
                <Search className="h-5 w-5" />
                Find Phones Under ₹20,000
                <ArrowUpRight className="h-5 w-5" />
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-bold text-slate-300">
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-300" />
                Budget-focused guides
              </span>
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-300" />
                Practical comparisons
              </span>
            </div>
          </div>

          {/* CSS PHONE VISUAL */}
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute inset-8 rounded-full bg-blue-400/20 blur-3xl" />

            <div className="relative mx-auto w-56 rotate-[-7deg] rounded-[2.8rem] border-[6px] border-slate-600 bg-slate-950 p-2 shadow-2xl sm:w-64">
              <div className="relative flex aspect-[9/19] flex-col overflow-hidden rounded-[2.2rem] bg-gradient-to-br from-indigo-500 via-blue-600 to-cyan-400 p-5">
                <div className="mx-auto h-5 w-20 rounded-full bg-slate-950" />

                <div className="mt-9">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-100">
                    Make It Yours
                  </p>
                  <p className="mt-2 text-3xl font-bold leading-tight text-white">
                    Find Your Perfect Fit.
                  </p>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl border border-white/30 bg-white/15 p-3 backdrop-blur">
                    <Camera className="h-6 w-6 text-white" />
                    <p className="mt-3 text-xs font-bold text-white">
                      Camera
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/30 bg-white/15 p-3 backdrop-blur">
                    <BatteryCharging className="h-6 w-6 text-white" />
                    <p className="mt-3 text-xs font-bold text-white">
                      Battery
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/30 bg-white/15 p-3 backdrop-blur">
                    <Zap className="h-6 w-6 text-white" />
                    <p className="mt-3 text-xs font-bold text-white">
                      Performance
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/30 bg-white/15 p-3 backdrop-blur">
                    <CircleDollarSign className="h-6 w-6 text-white" />
                    <p className="mt-3 text-xs font-bold text-white">
                      Budget
                    </p>
                  </div>
                </div>

                <div className="mt-auto rounded-2xl bg-white p-3 text-center">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Start Exploring
                  </p>
                  <p className="mt-1 text-lg font-bold text-blue-900">
                    Under ₹20,000
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -left-1 top-16 rounded-2xl border border-white/20 bg-white p-4 text-slate-900 shadow-xl sm:-left-6">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-emerald-100 p-2 text-emerald-800">
                  <Wallet className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500">
                    Your Budget
                  </p>
                  <p className="font-bold">Your Choice</p>
                </div>
              </div>
            </div>

            <div className="absolute -right-1 bottom-16 rounded-2xl border border-white/20 bg-white p-4 text-slate-900 shadow-xl sm:-right-5">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-purple-100 p-2 text-purple-800">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500">
                    Buy Smarter
                  </p>
                  <p className="font-bold">Compare First</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED BUYING GUIDE */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Your First Stop"
            title="Find a Phone That Fits Your Budget"
            description="Start with a budget, compare the features that matter to you, and narrow down your options before buying."
          />

          <div className="grid gap-6 md:grid-cols-2">
            {phoneGuides.map((guide) => (
              <GuideCard key={guide.href} guide={guide} />
            ))}

            <div className="flex flex-col justify-between rounded-3xl border border-dashed border-slate-300 bg-slate-50 p-6 sm:p-8">
              <div>
                <div className="inline-flex rounded-2xl bg-slate-200 p-3 text-slate-700">
                  <Smartphone className="h-7 w-7" />
                </div>
                <h3 className="mt-6 text-2xl font-bold text-slate-950">
                  More Phone Guides Coming Into Focus
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  Explore the available guide now. Additional budget ranges and
                  specialized buying guides can be added as PriceTag HUB grows.
                </p>
              </div>
              <Link
                href="/smartphone/best-phone-under-20000"
                className="mt-8 inline-flex items-center gap-2 font-bold text-blue-800 hover:underline"
              >
                Explore the current guide
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SHOP BY PRIORITY */}
      <section className="border-y border-slate-200 bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="What Matters Most to You?"
            title="Choose by the Features You Care About"
            description="The lowest price is not the only thing that matters. Think about how you will use your phone before comparing your options."
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {priorities.map((item) => (
              <PriorityCard key={item.title} item={item} />
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50 p-5 sm:p-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-lg font-bold text-slate-950">
                  Ready to compare phones?
                </h3>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  Begin with our current under-₹20,000 buying guide.
                </p>
              </div>
              <Link
                href="/smartphone/best-phone-under-20000"
                className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-xl bg-blue-700 px-5 py-3 font-bold text-white transition hover:bg-blue-800"
              >
                Explore Phones
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* BUYING APPROACH */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="A Smarter Buying Journey"
            title="Three Steps to a Better Phone Choice"
            description="A simple way to avoid choosing a phone based only on a discount or a single specification."
          />

          <div className="grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-lg font-bold text-blue-800">
                01
              </div>
              <h3 className="mt-5 text-xl font-bold text-slate-950">
                Set Your Budget
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Decide how much you want to spend before comparing individual
                models.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-100 text-lg font-bold text-purple-800">
                02
              </div>
              <h3 className="mt-5 text-xl font-bold text-slate-950">
                Compare What Matters
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Balance camera performance, battery life, software support,
                display quality and everyday speed.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-lg font-bold text-emerald-800">
                03
              </div>
              <h3 className="mt-5 text-xl font-bold text-slate-950">
                Check the Deal
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Check the final price, storage variant, seller details,
                warranty and return conditions before purchasing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-gradient-to-r from-blue-800 via-blue-700 to-indigo-800 py-14 text-white sm:py-16">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-7 px-5 sm:px-8 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-200">
              Make Your Next Upgrade Count
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Your Next Smartphone Is Waiting to Be Discovered.
            </h2>
            <p className="mt-4 leading-7 text-blue-100">
              Start comparing phones under ₹20,000 and explore options that
              match your priorities.
            </p>
          </div>

          <Link
            href="/smartphone/best-phone-under-20000"
            className="inline-flex min-h-14 shrink-0 items-center justify-center gap-3 rounded-xl bg-white px-6 py-4 font-bold text-blue-900 shadow-lg transition hover:bg-blue-50"
          >
            Explore the Buying Guide
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
