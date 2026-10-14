
import Link from "next/link";
import Image from "next/image";
import {
  BrainCircuit,
  BookOpen,
  Sparkles,
  Network,
  ArrowRight,
  CheckCircle2,
  Router,
  ShieldCheck,
  Cable,
  Terminal,
  Wifi,
  Globe,
  Workflow,
} from "lucide-react";

const aiTopics = [
  {
    name: "AI Basics",
    description:
      "Build a foundation in artificial intelligence, how it works, and how it is used in everyday life.",
    href: "/ai/basics",
    icon: BookOpen,
    label: "Start with the fundamentals",
    color: "blue",
  },
  {
    name: "Machine Learning",
    description:
      "Understand how computers learn from data and explore practical machine learning applications.",
    href: "/ai/machine-learning",
    icon: Network,
    label: "Learn how machines learn",
    color: "violet",
  },
  {
    name: "Generative AI",
    description:
      "Explore AI systems that generate text, images, code, and other types of content.",
    href: "/ai/generative-ai",
    icon: Sparkles,
    label: "Explore generative technology",
    color: "cyan",
  },
];

const networkingTopics = [
  {
    name: "Networking Fundamentals",
    description:
      "Learn how computer networks work, how devices communicate, and how data travels.",
    href: "/networking/fundamentals",
    icon: Network,
    label: "Build your foundation",
    color: "blue",
  },
  {
    name: "IP Addressing",
    description:
      "Understand IPv4, IPv6, subnet masks, gateways, and the basics of network addressing.",
    href: "/networking/ip-addressing",
    icon: Globe,
    label: "Understand network addresses",
    color: "violet",
  },
  {
    name: "Network Devices",
    description:
      "Discover how routers, switches, access points, modems, and other network devices work.",
    href: "/networking/network-devices",
    icon: Router,
    label: "Explore network hardware",
    color: "cyan",
  },
  {
    name: "Network Security",
    description:
      "Learn about network threats, secure configurations, access controls, and defensive practices.",
    href: "/networking/network-security",
    icon: ShieldCheck,
    label: "Learn defensive security",
    color: "emerald",
  },
  {
    name: "Network Tools",
    description:
      "Explore practical tools and commands for diagnosing connectivity and investigating networks.",
    href: "/networking/network-tools",
    icon: Terminal,
    label: "Practice useful commands",
    color: "amber",
  },
  {
    name: "Protocols & Architecture",
    description:
      "Understand TCP/IP, DNS, HTTP, ports, network layers, and how protocols work together.",
    href: "/networking/protocols-and-architecture",
    icon: Workflow,
    label: "See how communication works",
    color: "rose",
  },
  {
    name: "Wi-Fi & Routers",
    description:
      "Learn wireless networking, router configuration, Wi-Fi security, and troubleshooting.",
    href: "/networking/wifi-and-routers",
    icon: Wifi,
    label: "Improve wireless networking",
    color: "indigo",
  },
];

const featuredGuides = [
  {
    category: "Networking Fundamentals",
    title: "Computer Networking Basics",
    description:
      "Start learning how devices connect, exchange data, and communicate across networks.",
    href: "/networking/fundamentals",
    icon: Network,
    color: "blue",
  },
  {
    category: "Network Tools",
    title: "Network Troubleshooting Tools",
    description:
      "Learn how to investigate connection problems using practical networking tools and commands.",
    href: "/networking/network-tools",
    icon: Terminal,
    color: "emerald",
  },
  {
    category: "Wi-Fi & Routers",
    title: "Wireless Networking Guide",
    description:
      "Understand Wi-Fi signals, wireless security, router settings, and common connection issues.",
    href: "/networking/wifi-and-routers",
    icon: Router,
    color: "violet",
  },
  {
    category: "Network Security",
    title: "Network Security Basics",
    description:
      "Explore network protection, common threats, secure configurations, and defensive practices.",
    href: "/networking/network-security",
    icon: ShieldCheck,
    color: "rose",
  },
  {
    category: "AI Basics",
    title: "What Is Artificial Intelligence?",
    description:
      "Learn what artificial intelligence means, how AI systems work, and where they are used.",
    href: "/ai/basics/what-is-artificial-intelligence",
    icon: BrainCircuit,
    color: "blue",
  },
  {
    category: "Machine Learning",
    title: "AI vs Machine Learning",
    description:
      "Understand the relationship between artificial intelligence and machine learning.",
    href: "/ai/machine-learning/ai-vs-machine-learning",
    icon: Sparkles,
    color: "violet",
  },
];

const colorStyles = {
  blue: {
    icon: "bg-blue-50 text-blue-700 group-hover:bg-blue-100",
    category: "text-blue-700",
  },
  violet: {
    icon: "bg-violet-50 text-violet-700 group-hover:bg-violet-100",
    category: "text-violet-700",
  },
  cyan: {
    icon: "bg-cyan-50 text-cyan-700 group-hover:bg-cyan-100",
    category: "text-cyan-700",
  },
  emerald: {
    icon: "bg-emerald-50 text-emerald-700 group-hover:bg-emerald-100",
    category: "text-emerald-700",
  },
  amber: {
    icon: "bg-amber-50 text-amber-700 group-hover:bg-amber-100",
    category: "text-amber-700",
  },
  rose: {
    icon: "bg-rose-50 text-rose-700 group-hover:bg-rose-100",
    category: "text-rose-700",
  },
  indigo: {
    icon: "bg-indigo-50 text-indigo-700 group-hover:bg-indigo-100",
    category: "text-indigo-700",
  },
};

function TopicGrid({ topics }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {topics.map((topic) => {
        const Icon = topic.icon;
        const colors = colorStyles[topic.color] || colorStyles.blue;

        return (
          <Link
            key={topic.href}
            href={topic.href}
            className="group flex h-full flex-col rounded-2xl border border-zinc-200 bg-white p-6 transition duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
          >
            <div
              className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl transition ${colors.icon}`}
            >
              <Icon size={24} strokeWidth={1.8} />
            </div>

            <h3 className="text-lg font-semibold text-zinc-900 transition group-hover:text-blue-700">
              {topic.name}
            </h3>

            <p className="mt-3 flex-1 text-sm leading-7 text-zinc-600">
              {topic.description}
            </p>

            <div className="mt-5 flex items-center justify-between gap-3 border-t border-zinc-100 pt-4">
              <span className="text-sm text-zinc-500">{topic.label}</span>
              <ArrowRight
                size={18}
                className="shrink-0 text-blue-600 transition group-hover:translate-x-1"
              />
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      {/* Hero */}
      <section className="border-b border-zinc-200 bg-gradient-to-b from-blue-50/70 to-white">
        <div className="mx-auto max-w-5xl px-6 py-16 text-center sm:py-20 lg:py-24">
          <div className="mb-6 flex justify-center">
            <Image
              src="/main.png"
              alt="PriceTag HUB — Information, Guides and Knowledge"
              width={200}
              height={200}
              priority
              className="h-20 w-20 rounded-2xl object-contain shadow-lg shadow-blue-950/15 sm:h-[88px] sm:w-[88px]"
            />
          </div>

          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-1.5 text-sm font-medium text-blue-700">
            <BrainCircuit size={16} />
            Knowledge, organized.
          </div>

          <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight text-zinc-950 sm:text-6xl">
            Find useful information.
            <span className="mt-2 block text-blue-600">
              Understand it better.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-zinc-600 sm:text-lg">
            Explore clear explanations, practical guides, and learning
            resources about networking, cybersecurity, artificial intelligence,
            and the technologies shaping our world.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Link
              href="/networking"
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Explore Networking
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/ai"
              className="inline-flex items-center gap-2 rounded-xl border border-zinc-300 bg-white px-6 py-3 font-semibold text-zinc-800 transition hover:border-blue-300 hover:text-blue-700"
            >
              Explore AI
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-zinc-500">
            <span className="inline-flex items-center gap-2">
              <Network size={16} className="text-blue-600" />
              Networking
            </span>
            <span className="inline-flex items-center gap-2">
              <ShieldCheck size={16} className="text-emerald-600" />
              Cybersecurity
            </span>
            <span className="inline-flex items-center gap-2">
              <BrainCircuit size={16} className="text-violet-600" />
              Artificial Intelligence
            </span>
          </div>
        </div>
      </section>

      {/* Networking Topics */}
      <section
        id="networking"
        className="mx-auto max-w-7xl scroll-mt-20 px-6 py-16 lg:px-8 lg:py-20"
      >
        <div className="mb-9 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              Learn networking
            </p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              Computer Networking
            </h2>

            <p className="mt-3 max-w-2xl leading-7 text-zinc-600">
              Start with the fundamentals, understand network communication,
              and develop practical troubleshooting and security skills.
            </p>
          </div>

          <Link
            href="/networking"
            className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-800"
          >
            View all networking topics
            <ArrowRight size={16} />
          </Link>
        </div>

        <TopicGrid topics={networkingTopics} />
      </section>

      {/* Featured Guides */}
      <section className="border-y border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                Practical learning
              </p>

              <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                Explore Featured Guides
              </h2>

              <p className="mt-3 max-w-2xl leading-7 text-zinc-600">
                Explore networking, troubleshooting, security, and AI guides
                designed to help you learn one concept at a time.
              </p>
            </div>

            <Link
              href="/networking"
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-800"
            >
              Browse networking
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featuredGuides.map((guide) => {
              const Icon = guide.icon;
              const colors = colorStyles[guide.color] || colorStyles.blue;

              return (
                <article
                  key={guide.href}
                  className="group flex flex-col rounded-2xl border border-zinc-200 bg-white p-6 transition hover:border-blue-200 hover:shadow-md"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${colors.icon}`}
                    >
                      <Icon size={20} />
                    </div>

                    <span className={`text-sm font-medium ${colors.category}`}>
                      {guide.category}
                    </span>
                  </div>

                  <h3 className="mt-5 text-lg font-semibold leading-snug text-zinc-900 group-hover:text-blue-700">
                    {guide.title}
                  </h3>

                  <p className="mt-3 flex-1 text-sm leading-7 text-zinc-600">
                    {guide.description}
                  </p>

                  <Link
                    href={guide.href}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-800"
                  >
                    Read guide
                    <ArrowRight
                      size={16}
                      className="transition group-hover:translate-x-1"
                    />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* AI Topics */}
      <section
        id="artificial-intelligence"
        className="mx-auto max-w-7xl scroll-mt-20 px-6 py-16 lg:px-8 lg:py-20"
      >
        <div className="mb-9 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-violet-600">
              Explore artificial intelligence
            </p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              Artificial Intelligence
            </h2>

            <p className="mt-3 max-w-2xl leading-7 text-zinc-600">
              Understand AI fundamentals, machine learning, and generative
              technologies through approachable explanations.
            </p>
          </div>

          <Link
            href="/ai"
            className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-800"
          >
            View all AI topics
            <ArrowRight size={16} />
          </Link>
        </div>

        <TopicGrid topics={aiTopics} />
      </section>

      {/* Learning Path */}
      <section className="mx-auto max-w-5xl px-6 py-4 pb-16 lg:pb-20">
        <div className="rounded-3xl border border-blue-100 bg-blue-50/60 p-7 sm:p-10">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-blue-600 shadow-sm">
            <CheckCircle2 size={26} />
          </div>

          <h2 className="mt-6 text-2xl font-bold tracking-tight sm:text-3xl">
            Build your knowledge step by step
          </h2>

          <p className="mt-3 max-w-2xl leading-7 text-zinc-600">
            New to networking? Follow a simple path from basic concepts to
            practical tools and network defense.
          </p>

          <ol className="mt-7 space-y-3">
            {[
              {
                title: "Start with networking fundamentals",
                description:
                  "Learn how devices connect and exchange information.",
                href: "/networking/fundamentals",
              },
              {
                title: "Understand IP addresses and protocols",
                description:
                  "Discover how devices are addressed and how data travels.",
                href: "/networking/ip-addressing",
              },
              {
                title: "Practice with network tools",
                description:
                  "Use practical commands to investigate connectivity problems.",
                href: "/networking/network-tools",
              },
              {
                title: "Explore network security",
                description:
                  "Learn how to protect networks and investigate common risks.",
                href: "/networking/network-security",
              },
            ].map((step, index) => (
              <li key={step.href}>
                <Link
                  href={step.href}
                  className="flex items-start gap-4 rounded-xl border border-blue-100 bg-white p-4 transition hover:border-blue-300"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-700">
                    {index + 1}
                  </span>

                  <span className="flex-1">
                    <span className="block font-semibold text-zinc-900">
                      {step.title}
                    </span>
                    <span className="mt-1 block text-sm leading-6 text-zinc-600">
                      {step.description}
                    </span>
                  </span>

                  <ArrowRight
                    size={18}
                    className="mt-1 shrink-0 text-blue-600"
                  />
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-zinc-200">
        <div className="mx-auto max-w-4xl px-6 py-16 text-center sm:py-20">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Keep learning, one concept at a time.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-zinc-600">
            Explore practical guides, build your technical knowledge, and
            return as PriceTag HUB grows with more useful learning resources.
          </p>

          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link
              href="/networking"
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Browse Networking
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/ai"
              className="inline-flex items-center gap-2 rounded-xl border border-zinc-300 bg-white px-6 py-3 font-semibold text-zinc-800 transition hover:border-blue-300 hover:text-blue-700"
            >
              Browse AI Guides
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
