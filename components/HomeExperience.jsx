"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BrainCircuit,
  BookOpen,
  Sparkles,
  Network,
  Router,
  ShieldCheck,
  Globe,
  Wifi,
  Terminal,
  Workflow,
  TrendingUp,
  Smartphone,
  Camera,
  GraduationCap,
  Search,
  Lightbulb,
} from "lucide-react";

const categories = [
  {
    id: "ai",
    name: "Artificial Intelligence",
    short: "AI",
    description:
      "Understand artificial intelligence, machine learning and generative technologies.",
    href: "/ai",
    icon: BrainCircuit,
    color: "violet",
    guides: [
      ["What Is Artificial Intelligence?", "/ai/basics/what-is-artificial-intelligence"],
      ["Types of Artificial Intelligence", "/ai/basics/types-of-artificial-intelligence"],
      ["Uses of Artificial Intelligence", "/ai/basics/uses-of-artificial-intelligence"],
      ["What Is Machine Learning?", "/ai/machine-learning/what-is-machine-learning"],
      ["Types of Machine Learning", "/ai/machine-learning/types-of-machine-learning"],
      ["What Is Generative AI?", "/ai/generative-ai/what-is-generative-ai"],
      ["Types of Generative AI", "/ai/generative-ai/types-of-generative-ai"],
      ["Uses of Generative AI", "/ai/generative-ai/uses-of-generative-ai"],
    ],
  },
  {
    id: "economics",
    name: "Economics",
    short: "Economics",
    description:
      "Explore economic concepts, inflation, GDP, fiscal policy and monetary policy.",
    href: "/economics",
    icon: TrendingUp,
    color: "blue",
    guides: [
      ["What Is Economics?", "/economics/basics/what-is-economics"],
      ["Law of Demand", "/economics/basics/law-of-demand"],
      ["Law of Supply", "/economics/basics/law-of-supply"],
      ["Opportunity Cost", "/economics/basics/opportunity-cost"],
      ["What Is GDP?", "/economics/gdp-and-economic-growth/what-is-gdp"],
      ["GDP of India", "/economics/gdp-and-economic-growth/gdp-of-india"],
      ["Real vs Nominal GDP", "/economics/gdp-and-economic-growth/real-vs-nominal-gdp"],
      ["What Is Inflation?", "/economics/inflation/what-is-inflation"],
      ["Types of Inflation", "/economics/inflation/types-of-inflation"],
      ["Effects of Inflation", "/economics/inflation/effects-of-inflation"],
      ["What Is Fiscal Policy?", "/economics/fiscal-policy/what-is-fiscal-policy"],
      ["What Is Monetary Policy?", "/economics/monetary-policy/what-is-monetary-policy"],
      ["What Is Repo Rate?", "/economics/monetary-policy/what-is-repo-rate"],
      ["Types of Unemployment", "/economics/unemployment/types-of-unemployment"],
      ["Structural Unemployment", "/economics/unemployment/structural-unemployment"],
      ["Cyclical Unemployment", "/economics/unemployment/cyclical-unemployment"],
    ],
  },
  {
    id: "networking",
    name: "Computer Networking",
    short: "Networking",
    description:
      "Learn how networks operate, how devices communicate and how to troubleshoot connections.",
    href: "/networking",
    icon: Network,
    color: "cyan",
    guides: [
      ["Network Architecture", "/networking/fundamentals/network-architecture"],
      ["Network Topology", "/networking/fundamentals/network-topology"],
      ["Types of Networks", "/networking/fundamentals/network-types"],
      ["IP Address Basics", "/networking/ip-addressing/ip-address-basics"],
      ["IPv4 and IPv6", "/networking/ip-addressing/ipv4-and-ipv6"],
      ["Subnetting", "/networking/ip-addressing/subnetting"],
      ["Network Devices", "/networking/network-devices"],
      ["Firewalls and IPS", "/networking/network-security/firewalls-and-ips"],
      ["Intrusion Detection", "/networking/network-security/intrusion-detection"],
      ["Network Monitoring", "/networking/network-security/network-monitoring"],
      ["Nmap", "/networking/network-tools/nmap"],
      ["Wireshark", "/networking/network-tools/wireshark"],
      ["Wi-Fi Troubleshooting", "/networking/wifi-and-routers/wifi-troubleshooting"],
      ["Wireless Networking", "/networking/wifi-and-routers/wireless-networking"],
    ],
  },
  {
    id: "cctv",
    name: "CCTV & Security Cameras",
    short: "CCTV",
    description:
      "Find practical information about home security cameras, outdoor cameras and camera connectivity.",
    href: "/cctv-problem",
    icon: Camera,
    color: "emerald",
    guides: [
      ["Best 4G SIM CCTV Camera Without Wi-Fi", "/cctv-problem/best-4g-sim-cctv-camera-without-wifi"],
      ["Best Indoor Security Camera for Home", "/cctv-problem/best-indoor-security-camera-for-home"],
      ["Best Pet Camera for Home", "/cctv-problem/best-pet-camera-for-home"],
      ["Solar Security Camera for Outdoor", "/cctv-problem/solar-security-camera-for-outdoor"],
    ],
  },
  {
    id: "share-market",
    name: "Share Market",
    short: "Share Market",
    description:
      "Explore share market topics, company developments and investment-related information.",
    href: "/share-market",
    icon: TrendingUp,
    color: "amber",
    guides: [
      ["Jio IPO", "/share-market/jio-ipo"],
    ],
  },
  {
    id: "smartphone",
    name: "Smartphones",
    short: "Smartphones",
    description:
      "Explore smartphone guides and product recommendations for different needs and budgets.",
    href: "/smartphone",
    icon: Smartphone,
    color: "rose",
    guides: [
      ["Best Phone Under ₹20,000", "/smartphone/best-phone-under-20000"],
    ],
  },
];

const colorStyles = {
  violet: {
    icon: "bg-violet-100 text-violet-700",
    border: "hover:border-violet-300",
    text: "text-violet-700",
    soft: "bg-violet-50",
  },
  blue: {
    icon: "bg-blue-100 text-blue-700",
    border: "hover:border-blue-300",
    text: "text-blue-700",
    soft: "bg-blue-50",
  },
  cyan: {
    icon: "bg-cyan-100 text-cyan-700",
    border: "hover:border-cyan-300",
    text: "text-cyan-700",
    soft: "bg-cyan-50",
  },
  emerald: {
    icon: "bg-emerald-100 text-emerald-700",
    border: "hover:border-emerald-300",
    text: "text-emerald-700",
    soft: "bg-emerald-50",
  },
  amber: {
    icon: "bg-amber-100 text-amber-700",
    border: "hover:border-amber-300",
    text: "text-amber-700",
    soft: "bg-amber-50",
  },
  rose: {
    icon: "bg-rose-100 text-rose-700",
    border: "hover:border-rose-300",
    text: "text-rose-700",
    soft: "bg-rose-50",
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

function Reveal({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mb-9 max-w-2xl">
      <p className="text-sm font-bold uppercase tracking-wider text-blue-600">
        {eyebrow}
      </p>
      <h2 className="mt-2 text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
        {title}
      </h2>
      <p className="mt-3 leading-7 text-zinc-600">{description}</p>
    </div>
  );
}

export default function HomeExperience() {
  const [activeCategory, setActiveCategory] = useState("all");

  const recommendations = useMemo(() => {
    if (activeCategory === "all") {
      return categories.flatMap((category) =>
        category.guides.slice(0, 2).map(([title, href]) => ({
          title,
          href,
          category: category.name,
          color: category.color,
        }))
      ).slice(0, 6);
    }

    const selected = categories.find(
      (category) => category.id === activeCategory
    );

    return selected
      ? selected.guides.map(([title, href]) => ({
          title,
          href,
          category: selected.name,
          color: selected.color,
        }))
      : [];
  }, [activeCategory]);

  return (
    <main className="min-h-screen overflow-hidden bg-white text-zinc-900">
      {/* HERO */}
      <section className="relative border-b border-blue-100 bg-gradient-to-b from-blue-50 via-white to-white">
        <div className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-blue-100/50 blur-3xl" />
        <div className="pointer-events-none absolute -left-24 bottom-0 h-64 w-64 rounded-full bg-violet-100/40 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 text-center sm:py-24 lg:py-28">
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="mb-7 flex justify-center"
          >
            <Image
              src="/main.png"
              alt="PriceTag HUB"
              width={100}
              height={100}
              priority
              className="h-20 w-20 rounded-2xl object-contain shadow-lg shadow-blue-900/10"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-bold text-blue-700"
          >
            <Sparkles size={16} />
            Knowledge, organized.
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mx-auto max-w-4xl text-4xl font-bold tracking-tight text-zinc-950 sm:text-6xl"
          >
            Find useful information.
            <span className="mt-2 block bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
              Understand it better.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mx-auto mt-6 max-w-2xl text-base leading-8 text-zinc-600 sm:text-lg"
          >
            Discover practical guides, clear explanations and useful
            information across technology, economics, business and everyday
            decisions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-9 flex flex-wrap justify-center gap-3"
          >
            <a
              href="#discover"
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-bold text-white transition hover:bg-blue-700"
            >
              Explore Topics
              <ArrowRight size={18} />
            </a>
            <Link
              href="/economics"
              className="inline-flex items-center gap-2 rounded-xl border border-zinc-300 bg-white px-6 py-3 font-bold text-zinc-800 transition hover:border-blue-300 hover:text-blue-700"
            >
              Browse Knowledge
            </Link>
          </motion.div>

          <div className="mx-auto mt-12 flex max-w-3xl flex-wrap justify-center gap-x-7 gap-y-4 text-sm text-zinc-500">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <span
                  key={category.id}
                  className="inline-flex items-center gap-2"
                >
                  <Icon size={16} className={colorStyles[category.color].text} />
                  {category.short}
                </span>
              );
            })}
          </div>
        </div>

        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-zinc-400">
          <motion.div
            animate={{ y: [0, 7, 0] }}
            transition={{ duration: 1.8, repeat: Infinity }}
          >
            <ArrowRight className="rotate-90" size={20} />
          </motion.div>
        </div>
      </section>

      {/* TOPIC DISCOVERY */}
      <section
        id="discover"
        className="scroll-mt-16 mx-auto max-w-7xl px-6 py-20 lg:px-8"
      >
        <Reveal>
          <SectionHeading
            eyebrow="Explore the knowledge hub"
            title="What would you like to explore?"
            description="Choose an area of interest and discover organised guides, useful explanations and related topics."
          />
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, index) => {
            const Icon = category.icon;
            const colors = colorStyles[category.color];

            return (
              <Reveal key={category.id} delay={index * 0.06}>
                <Link
                  href={category.href}
                  className={`group flex h-full flex-col rounded-2xl border border-zinc-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg ${colors.border}`}
                >
                  <div className="flex items-center justify-between">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-xl ${colors.icon}`}
                    >
                      <Icon size={24} strokeWidth={1.8} />
                    </div>
                    <span className="text-xs font-bold text-zinc-400">
                      {category.guides.length} GUIDES
                    </span>
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-zinc-900 transition group-hover:text-blue-700">
                    {category.name}
                  </h3>

                  <p className="mt-3 flex-1 text-sm leading-7 text-zinc-600">
                    {category.description}
                  </p>

                  <div className="mt-5 flex items-center gap-2 border-t border-zinc-100 pt-4 text-sm font-bold text-blue-700">
                    Explore this topic
                    <ArrowRight
                      size={17}
                      className="transition group-hover:translate-x-1"
                    />
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* AUTOMATIC RECOMMENDATIONS */}
      <section className="border-y border-blue-100 bg-gradient-to-b from-blue-50/70 to-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <Reveal>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <SectionHeading
                eyebrow="Discover something useful"
                title="Recommended guides"
                description="Choose a subject to see related guides from the PriceTag HUB library."
              />
              <div className="mb-9 flex items-center gap-2 text-sm text-zinc-500">
                <Lightbulb size={17} className="text-amber-500" />
                Topic-based recommendations
              </div>
            </div>
          </Reveal>

          <div className="mb-7 flex flex-wrap gap-2">
            <button
              onClick={() => setActiveCategory("all")}
              className={`rounded-full px-4 py-2 text-sm font-bold transition ${
                activeCategory === "all"
                  ? "bg-blue-600 text-white"
                  : "border border-zinc-200 bg-white text-zinc-600 hover:border-blue-300"
              }`}
            >
              All topics
            </button>

            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`rounded-full px-4 py-2 text-sm font-bold transition ${
                  activeCategory === category.id
                    ? "bg-blue-600 text-white"
                    : "border border-zinc-200 bg-white text-zinc-600 hover:border-blue-300"
                }`}
              >
                {category.short}
              </button>
            ))}
          </div>

          <motion.div
            layout
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {recommendations.map((guide) => {
              const colors = colorStyles[guide.color];

              return (
                <motion.div
                  layout
                  key={guide.href}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                >
                  <Link
                    href={guide.href}
                    className="group flex h-full items-start gap-4 rounded-xl border border-zinc-200 bg-white p-5 transition hover:border-blue-300 hover:shadow-md"
                  >
                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${colors.icon}`}
                    >
                      <BookOpen size={19} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className={`text-xs font-bold ${colors.text}`}>
                        {guide.category}
                      </p>
                      <h3 className="mt-1 font-bold leading-6 text-zinc-900 group-hover:text-blue-700">
                        {guide.title}
                      </h3>
                      <span className="mt-3 inline-flex items-center gap-1 text-sm font-bold text-blue-700">
                        Read guide <ArrowRight size={15} />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* HOW TO EXPLORE */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="A simple way to learn"
            title="Explore one concept at a time"
            description="Start with a broad subject, understand the fundamentals, and continue into more specific guides."
          />
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              number: "01",
              title: "Choose a subject",
              description:
                "Start with an area that interests you, from AI and networking to economics.",
              icon: Search,
            },
            {
              number: "02",
              title: "Understand the basics",
              description:
                "Build your understanding through clear explanations and practical examples.",
              icon: BookOpen,
            },
            {
              number: "03",
              title: "Explore related guides",
              description:
                "Move into connected topics and discover more specific information.",
              icon: GraduationCap,
            },
          ].map((step, index) => {
            const Icon = step.icon;

            return (
              <Reveal key={step.number} delay={index * 0.1}>
                <div className="relative h-full rounded-2xl border border-zinc-200 bg-white p-7">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-blue-100">
                      {step.number}
                    </span>
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                      <Icon size={22} />
                    </div>
                  </div>
                  <h3 className="mt-6 text-xl font-bold">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-zinc-600">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="border-t border-zinc-200 bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-950 text-white">
        <div className="mx-auto max-w-5xl px-6 py-20 text-center">
          <Reveal>
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
              <Sparkles size={27} />
            </div>
            <h2 className="mt-7 text-3xl font-bold tracking-tight sm:text-4xl">
              Knowledge grows when you explore.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl leading-8 text-blue-100">
              Discover new subjects, understand useful concepts and explore
              practical information with PriceTag HUB.
            </p>
            <Link
              href="/economics"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-bold text-blue-900 transition hover:bg-blue-50"
            >
              Start exploring
              <ArrowRight size={18} />
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}