
"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  ArrowLeft,
  BrainCircuit,
  BookOpen,
  Sparkles,
  Network,
  TrendingUp,
  Smartphone,
  Camera,
  GraduationCap,
  Search,
  Lightbulb,
  Globe,
  ShieldCheck,
  Target,
  Scale,
  Cpu,
  Brain,
  ChartNoAxesCombined,
  Landmark,
  Activity,
  BriefcaseBusiness,
  Database,
  Layers3,
  Settings2,
  ScanSearch,
  Calculator,
  CircleDollarSign,
  Factory,
  Users,
  Fingerprint,
  Workflow,
  Eye,
  GitBranch,
  ArrowDownUp,
  Coins,
  Building2,
  Wallet,
  RefreshCw,
  HandCoins,
  Clock,
  Router,
  Radio,
  LockKeyhole,
  Heart,
  BarChart3,
} from "lucide-react";

/* -------------------------------------------------------
   CATEGORY DATA
------------------------------------------------------- */

const categories = [
  {
    id: "ai",
    name: "Artificial Intelligence",
    short: "AI",
    description:
      "Understand artificial intelligence, machine learning and generative technologies shaping the future.",
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
      "Explore how economies work through concepts such as inflation, GDP, demand, supply and economic policies.",
    href: "/economics",
    icon: TrendingUp,
    color: "blue",
    guides: [
      ["What Is Economics?", "/economics/basics/what-is-economics"],
      ["Law of Demand", "/economics/basics/law-of-demand"],
      ["Law of Supply", "/economics/basics/law-of-supply"],
      ["Opportunity Cost", "/economics/basics/opportunity-cost"],
      ["Factors of Production", "/economics/basics/factors-of-production"],
      ["Market Equilibrium", "/economics/basics/market-equilibrium"],
      ["What Is GDP?", "/economics/gdp-and-economic-growth/what-is-gdp"],
      ["GDP of India", "/economics/gdp-and-economic-growth/gdp-of-india"],
      ["Real vs Nominal GDP", "/economics/gdp-and-economic-growth/real-vs-nominal-gdp"],
      ["GDP Per Capita", "/economics/gdp-and-economic-growth/gdp-per-capita"],
      ["What Is Inflation?", "/economics/inflation/what-is-inflation"],
      ["Types of Inflation", "/economics/inflation/types-of-inflation"],
      ["Effects of Inflation", "/economics/inflation/effects-of-inflation"],
      ["Demand-Pull Inflation", "/economics/inflation/demand-pull-inflation"],
      ["Cost-Push Inflation", "/economics/inflation/cost-push-inflation"],
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
      "Learn how computer networks operate, how devices communicate and how network security works.",
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
    id: "psychology",
    name: "Psychology",
    short: "Psychology",
    description:
      "Explore human behaviour, thinking, emotions, personality, learning and the science of the mind.",
    href: "/psychology",
    icon: Brain,
    color: "rose",
    guides: [
      ["What Is Psychology?", "/psychology/what-is-psychology"],
      ["Branches of Psychology", "/psychology/branches-of-psychology"],
      ["Cognitive Psychology", "/psychology/cognitive-psychology"],
      ["Consumer Psychology", "/psychology/consumer-psychology"],
      ["Critical Thinking", "/psychology/critical-thinking"],
      ["Emotional Intelligence", "/psychology/emotional-intelligence"],
      ["Human Emotions", "/psychology/human-emotions"],
      ["Introversion", "/psychology/introversion"],
      ["Big Five Personality", "/psychology/big-five-personality"],
      ["Confirmation Bias", "/psychology/confirmation-bias"],
      ["Dunning-Kruger Effect", "/psychology/dunning-kruger-effect"],
      ["Habit Formation", "/psychology/habit-formation"],
      ["Learning Theories", "/psychology/learning-theories"],
      ["Working Memory", "/psychology/working-memory"],
      ["Cognitive Behavioural Therapy", "/psychology/cognitive-behavioural-therapy"],
    ],
  },
  {
    id: "strategic-management",
    name: "Strategic Management",
    short: "Management",
    description:
      "Understand how organisations analyse situations, make strategic decisions and achieve long-term goals.",
    href: "/strategic-management",
    icon: Target,
    color: "indigo",
    guides: [
      ["What Is Strategic Management?", "/strategic-management/what-is-strategic-management"],
      ["SWOT Analysis", "/strategic-management/swot-analysis"],
      ["PESTEL Analysis", "/strategic-management/pestel-analysis"],
    ],
  },
  {
    id: "cctv",
    name: "CCTV & Security Cameras",
    short: "CCTV",
    description:
      "Explore home security cameras, outdoor surveillance, camera connectivity and practical buying guides.",
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
      "Explore stock market developments, company updates and investment-related information.",
    href: "/share-market",
    icon: ChartNoAxesCombined,
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
      "Discover smartphone guides, product recommendations and buying information for different budgets.",
    href: "/smartphone",
    icon: Smartphone,
    color: "orange",
    guides: [
      ["Best Phone Under ₹20,000", "/smartphone/best-phone-under-20000"],
    ],
  },
];

/* -------------------------------------------------------
   FEATURED TOPIC SLIDER
   Questions and content rotate together.
------------------------------------------------------- */



// Each entry represents an actual child article from the sitemap.
// Format: [title, URL, icon]

const topicGroups = [
  {
    category: "Artificial Intelligence",
    color: "violet",
    icon: BrainCircuit,
    topics: [
      ["What Is Artificial Intelligence?", "/ai/basics/what-is-artificial-intelligence", BrainCircuit],
      ["Types of Artificial Intelligence", "/ai/basics/types-of-artificial-intelligence", Workflow],
      ["Uses of Artificial Intelligence", "/ai/basics/uses-of-artificial-intelligence", Sparkles],
      ["What Is Machine Learning?", "/ai/machine-learning/what-is-machine-learning", Cpu],
      ["Types of Machine Learning", "/ai/machine-learning/types-of-machine-learning", GitBranch],
      ["Uses of Machine Learning", "/ai/machine-learning/uses-of-machine-learning", Database],
      ["What Is Generative AI?", "/ai/generative-ai/what-is-generative-ai", Sparkles],
      ["Types of Generative AI", "/ai/generative-ai/types-of-generative-ai", Layers3],
      ["Uses of Generative AI", "/ai/generative-ai/uses-of-generative-ai", Lightbulb],
    ],
  },
  {
    category: "Economics",
    color: "blue",
    icon: TrendingUp,
    topics: [
      ["What Is Economics?", "/economics/basics/what-is-economics", BookOpen],
      ["Law of Demand", "/economics/basics/law-of-demand", TrendingUp],
      ["Law of Supply", "/economics/basics/law-of-supply", ArrowDownUp],
      ["Opportunity Cost", "/economics/basics/opportunity-cost", Scale],
      ["Factors of Production", "/economics/basics/factors-of-production", Factory],
      ["Law of Diminishing Marginal Utility", "/economics/basics/law-of-diminishing-marginal-utility", ChartNoAxesCombined],
      ["Law of Marginal Utility", "/economics/basics/law-of-marginal-utility", Calculator],
      ["Marginal Cost", "/economics/basics/marginal-cost", Coins],
      ["Market Equilibrium", "/economics/basics/market-equilibrium", Scale],
      ["Microeconomics vs Macroeconomics", "/economics/basics/microeconomics-vs-macroeconomics", BarChart3],
      ["Mixed Economy", "/economics/basics/mixed-economy", Building2],
      ["Price Elasticity of Demand", "/economics/basics/price-elasticity-of-demand", Activity],
      ["Scarcity in Economics", "/economics/basics/scarcity-in-economics", Wallet],

      ["What Is GDP?", "/economics/gdp-and-economic-growth/what-is-gdp", Landmark],
      ["GDP of India", "/economics/gdp-and-economic-growth/gdp-of-india", ChartNoAxesCombined],
      ["Real vs Nominal GDP", "/economics/gdp-and-economic-growth/real-vs-nominal-gdp", ArrowDownUp],
      ["GDP Per Capita", "/economics/gdp-and-economic-growth/gdp-per-capita", Users],
      ["GDP vs GNP", "/economics/gdp-and-economic-growth/gdp-vs-gnp", Scale],
      ["Economic Growth", "/economics/gdp-and-economic-growth/economic-growth", TrendingUp],
      ["Business Cycle", "/economics/gdp-and-economic-growth/business-cycle", RefreshCw],

      ["What Is Inflation?", "/economics/inflation/what-is-inflation", TrendingUp],
      ["Types of Inflation", "/economics/inflation/types-of-inflation", Layers3],
      ["Effects of Inflation", "/economics/inflation/effects-of-inflation", Activity],
      ["Inflation Rate Formula", "/economics/inflation/inflation-rate-formula", Calculator],
      ["Inflation vs Deflation", "/economics/inflation/inflation-vs-deflation", ArrowDownUp],
      ["Cost-Push Inflation", "/economics/inflation/cost-push-inflation", Factory],
      ["Demand-Pull Inflation", "/economics/inflation/demand-pull-inflation", HandCoins],
      ["Hyperinflation", "/economics/inflation/hyperinflation", ChartNoAxesCombined],
      ["Stagflation", "/economics/inflation/stagflation", Activity],
      ["Consumer Price Index", "/economics/inflation/consumer-price-index", Calculator],
      ["CPI vs WPI", "/economics/inflation/cpi-vs-wpi", Scale],
      ["Core vs Headline Inflation", "/economics/inflation/core-vs-headline-inflation", BarChart3],
      ["Purchasing Power and Inflation", "/economics/inflation/purchasing-power-and-inflation", Wallet],
      ["Wholesale Price Index India", "/economics/inflation/wholesale-price-index-india", Landmark],

      ["What Is Fiscal Policy?", "/economics/fiscal-policy/what-is-fiscal-policy", Landmark],
      ["Tools of Fiscal Policy", "/economics/fiscal-policy/tools-of-fiscal-policy", BriefcaseBusiness],
      ["Expansionary Fiscal Policy", "/economics/fiscal-policy/expansionary-fiscal-policy", TrendingUp],
      ["Contractionary Fiscal Policy", "/economics/fiscal-policy/contractionary-fiscal-policy", TrendingUp],

      ["What Is Monetary Policy?", "/economics/monetary-policy/what-is-monetary-policy", Landmark],
      ["Monetary Policy Tools", "/economics/monetary-policy/monetary-policy-tools", Settings2],
      ["What Is Repo Rate?", "/economics/monetary-policy/what-is-repo-rate", CircleDollarSign],
      ["Repo Rate vs Reverse Repo Rate", "/economics/monetary-policy/repo-rate-vs-reverse-repo-rate", ArrowDownUp],
      ["Expansionary Monetary Policy", "/economics/monetary-policy/expansionary-monetary-policy", TrendingUp],
      ["Contractionary Monetary Policy", "/economics/monetary-policy/contractionary-monetary-policy", Activity],
      ["Fiscal Policy vs Monetary Policy", "/economics/monetary-policy/fiscal-policy-vs-monetary-policy", Scale],

      ["What Is Unemployment?", "/economics/unemployment/what-is-unemployment", Users],
      ["Types of Unemployment", "/economics/unemployment/types-of-unemployment", Layers3],
      ["Causes of Unemployment", "/economics/unemployment/causes-of-unemployment", Search],
      ["Effects of Unemployment", "/economics/unemployment/effects-of-unemployment", Activity],
      ["Unemployment Rate", "/economics/unemployment/unemployment-rate", ChartNoAxesCombined],
      ["Labour Force Participation Rate", "/economics/unemployment/labour-force-participation-rate", Users],
      ["Frictional Unemployment", "/economics/unemployment/frictional-unemployment", RefreshCw],
      ["Structural Unemployment", "/economics/unemployment/structural-unemployment", GitBranch],
      ["Cyclical Unemployment", "/economics/unemployment/cyclical-unemployment", Activity],
      ["Seasonal Unemployment", "/economics/unemployment/seasonal-unemployment", Clock],

      ["Budget Deficit", "/economics/budget-deficit", Wallet],
      ["Fiscal Deficit", "/economics/budget-deficit/fiscal-deficit", Landmark],
      ["Revenue Deficit", "/economics/budget-deficit/revenue-deficit", CircleDollarSign],
      ["Primary Deficit", "/economics/budget-deficit/primary-deficit", Calculator],
      ["Budget Deficit vs Fiscal Deficit", "/economics/budget-deficit/budget-deficit-vs-fiscal-deficit", Scale],
      ["Fiscal Deficit vs Revenue Deficit", "/economics/budget-deficit/fiscal-deficit-vs-revenue-deficit", ArrowDownUp],
    ],
  },
  {
    category: "Computer Networking",
    color: "cyan",
    icon: Network,
    topics: [
      ["Network Architecture", "/networking/fundamentals/network-architecture", Network],
      ["Network Topology", "/networking/fundamentals/network-topology", GitBranch],
      ["Types of Computer Networks", "/networking/fundamentals/network-types", Layers3],
      ["IP Address Basics", "/networking/ip-addressing/ip-address-basics", Globe],
      ["IPv4 and IPv6", "/networking/ip-addressing/ipv4-and-ipv6", Database],
      ["Subnetting", "/networking/ip-addressing/subnetting", Calculator],
      ["Network Devices", "/networking/network-devices", Router],
      ["Firewalls and IPS", "/networking/network-security/firewalls-and-ips", ShieldCheck],
      ["Intrusion Detection", "/networking/network-security/intrusion-detection", Eye],
      ["Network Monitoring", "/networking/network-security/network-monitoring", Activity],
      ["Wireless Security", "/networking/network-security/wireless-security", LockKeyhole],
      ["Network Troubleshooting Tools", "/networking/network-tools/network-troubleshooting-tools", Search],
      ["Nmap", "/networking/network-tools/nmap", ScanSearch],
      ["Wireshark", "/networking/network-tools/wireshark", Eye],
      ["Router Guides", "/networking/wifi-and-routers/router-guides", Router],
      ["WiFi Troubleshooting", "/networking/wifi-and-routers/wifi-troubleshooting", Radio],
      ["Wireless Networking", "/networking/wifi-and-routers/wireless-networking", Radio],
    ],
  },
  {
    category: "Psychology",
    color: "rose",
    icon: Brain,
    topics: [
      ["What Is Psychology?", "/psychology/what-is-psychology", Brain],
      ["Branches of Psychology", "/psychology/branches-of-psychology", GitBranch],
      ["Cognitive Psychology", "/psychology/cognitive-psychology", BrainCircuit],
      ["Cognitive Neuroscience", "/psychology/cognitive-neuroscience", Activity],
      ["Cognitive Behavioural Therapy", "/psychology/cognitive-behavioural-therapy", Heart],
      ["Big Five Personality", "/psychology/big-five-personality", Users],
      ["MBTI Test", "/psychology/mbti-test", Fingerprint],
      ["Introversion", "/psychology/introversion", Brain],
      ["Critical Thinking", "/psychology/critical-thinking", Lightbulb],
      ["Confirmation Bias", "/psychology/confirmation-bias", Eye],
      ["Dunning-Kruger Effect", "/psychology/dunning-kruger-effect", Brain],
      ["Consumer Psychology", "/psychology/consumer-psychology", Wallet],
      ["Educational Psychology", "/psychology/educational-psychology", GraduationCap],
      ["Emotional Intelligence", "/psychology/emotional-intelligence", Heart],
      ["Habit Formation", "/psychology/habit-formation", RefreshCw],
      ["Human Emotions", "/psychology/human-emotions", Heart],
      ["Intrinsic Motivation", "/psychology/intrinsic-motivation", Target],
      ["Learning Theories", "/psychology/learning-theories", BookOpen],
      ["Piaget Stages", "/psychology/piaget-stages", Brain],
      ["Positive Psychology", "/psychology/positive-psychology", Sparkles],
      ["Social Learning Theory", "/psychology/social-learning-theory", Users],
      ["Sports Psychology", "/psychology/sports-psychology", Activity],
      ["Stress Psychology", "/psychology/stress-psychology", Heart],
      ["Types of Memory", "/psychology/types-of-memory", Layers3],
      ["Working Memory", "/psychology/working-memory", BrainCircuit],
    ],
  },
  {
    category: "Strategic Management",
    color: "indigo",
    icon: Target,
    topics: [
      ["What Is Strategic Management?", "/strategic-management/what-is-strategic-management", Target],
      ["SWOT Analysis", "/strategic-management/swot-analysis", ChartNoAxesCombined],
      ["PESTEL Analysis", "/strategic-management/pestel-analysis", Globe],
    ],
  },
];

// Flatten every child article into one rotating spotlight list.
const featuredTopics = topicGroups.flatMap((group) =>
  group.topics.map(([title, href, icon]) => ({
    title,
    href,
    icon,
    category: group.category,
    color: group.color,
    question: `Have you ever wondered about ${title.replace(/\?$/, "")}?`,
    description: `Explore ${title.replace(/\?$/, "")} through a clear explanation, important concepts and practical examples. Build your understanding of this topic with PriceTag HUB.`,
    points: [
      "Understand the core concept",
      "Explore important principles",
      "Learn why it matters",
    ],
  }))
);

/* -------------------------------------------------------
   COLOR STYLES
------------------------------------------------------- */

const colorStyles = {
  violet: {
    icon: "bg-violet-100 text-violet-700",
    border: "hover:border-violet-300",
    text: "text-violet-700",
    soft: "from-violet-50 to-white",
    accent: "bg-violet-600",
  },
  blue: {
    icon: "bg-blue-100 text-blue-700",
    border: "hover:border-blue-300",
    text: "text-blue-700",
    soft: "from-blue-50 to-white",
    accent: "bg-blue-600",
  },
  cyan: {
    icon: "bg-cyan-100 text-cyan-700",
    border: "hover:border-cyan-300",
    text: "text-cyan-700",
    soft: "from-cyan-50 to-white",
    accent: "bg-cyan-600",
  },
  emerald: {
    icon: "bg-emerald-100 text-emerald-700",
    border: "hover:border-emerald-300",
    text: "text-emerald-700",
    soft: "from-emerald-50 to-white",
    accent: "bg-emerald-600",
  },
  amber: {
    icon: "bg-amber-100 text-amber-700",
    border: "hover:border-amber-300",
    text: "text-amber-700",
    soft: "from-amber-50 to-white",
    accent: "bg-amber-600",
  },
  rose: {
    icon: "bg-rose-100 text-rose-700",
    border: "hover:border-rose-300",
    text: "text-rose-700",
    soft: "from-rose-50 to-white",
    accent: "bg-rose-600",
  },
  indigo: {
    icon: "bg-indigo-100 text-indigo-700",
    border: "hover:border-indigo-300",
    text: "text-indigo-700",
    soft: "from-indigo-50 to-white",
    accent: "bg-indigo-600",
  },
  orange: {
    icon: "bg-orange-100 text-orange-700",
    border: "hover:border-orange-300",
    text: "text-orange-700",
    soft: "from-orange-50 to-white",
    accent: "bg-orange-600",
  },
};

/* -------------------------------------------------------
   ANIMATION SETTINGS
------------------------------------------------------- */

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
    },
  },
};

function Reveal({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
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

/* -------------------------------------------------------
   AUTOMATIC KNOWLEDGE SPOTLIGHT
------------------------------------------------------- */


function KnowledgeSpotlight() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const current = featuredTopics[activeIndex];
  const Icon = current.icon;

  const nextTopic = () => {
    setActiveIndex((prev) => (prev + 1) % featuredTopics.length);
  };

  const previousTopic = () => {
    setActiveIndex(
      (prev) => (prev - 1 + featuredTopics.length) % featuredTopics.length
    );
  };

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % featuredTopics.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section className="relative overflow-hidden border-y border-blue-100 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-indigo-200/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="mb-9 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-bold text-blue-700 shadow-sm">
              <Sparkles size={16} />
              Discover something new
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              One question. A new idea.
            </h2>

            <p className="mt-3 max-w-xl leading-7 text-slate-600">
              Explore individual concepts across technology, economics,
              psychology, business and more.
            </p>
          </div>

          <div className="text-sm font-bold text-slate-500">
            {featuredTopics.length} topics to explore
          </div>
        </div>

        <div
          className="overflow-hidden rounded-3xl border border-blue-100 bg-white shadow-xl shadow-blue-900/5"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current.href}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4 }}
              className="grid min-h-[390px] lg:grid-cols-5"
            >
              {/* Main spotlight */}
              <div className="relative flex flex-col justify-center overflow-hidden bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-950 p-8 text-white sm:p-10 lg:col-span-3 lg:p-14">
                <div className="pointer-events-none absolute -right-12 -top-12 h-64 w-64 rounded-full border border-white/10" />
                <div className="pointer-events-none absolute -right-5 -top-5 h-48 w-48 rounded-full border border-white/10" />

                <div className="relative">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-blue-100">
                    <Icon size={15} />
                    {current.category}
                  </div>

                  <p className="mt-7 text-lg font-bold leading-8 text-blue-100 sm:text-xl">
                    {current.question}
                  </p>

                  <h3 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                    {current.title}
                  </h3>

                  <p className="mt-5 max-w-xl leading-8 text-blue-100">
                    {current.description}
                  </p>

                  <Link
                    href={current.href}
                    className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-bold text-blue-900 transition hover:-translate-y-0.5 hover:bg-blue-50"
                  >
                    Explore this topic
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>

              {/* Topic details */}
              <div className="flex flex-col justify-center p-8 sm:p-10 lg:col-span-2 lg:p-12">
                <motion.div
                  key={current.href + "-icon"}
                  initial={{ opacity: 0, scale: 0.8, rotate: -8 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ duration: 0.4 }}
                  className="flex h-20 w-20 items-center justify-center rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-indigo-100 text-blue-700 shadow-sm"
                >
                  <Icon size={39} strokeWidth={1.6} />
                </motion.div>

                <p className="mt-7 text-sm font-bold uppercase tracking-wider text-blue-600">
                  What you will understand
                </p>

                <div className="mt-5 space-y-4">
                  {current.points.map((point, index) => (
                    <motion.div
                      key={point}
                      initial={{ opacity: 0, x: 12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.12 + index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-sm font-bold text-blue-700">
                        0{index + 1}
                      </span>

                      <span className="text-sm font-bold text-slate-700">
                        {point}
                      </span>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-9 border-t border-slate-100 pt-6">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Currently featured
                  </p>

                  <p className="mt-1 text-sm text-slate-500">
                    Topic {activeIndex + 1} of {featuredTopics.length}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-slate-100 bg-slate-50/80 px-6 py-4 sm:px-8">
            <div className="flex max-w-full items-center gap-1.5 overflow-hidden">
              {featuredTopics.map((topic, index) => (
                <button
                  key={topic.href}
                  type="button"
                  aria-label={`Show ${topic.title}`}
                  aria-current={activeIndex === index ? "true" : undefined}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2.5 shrink-0 rounded-full transition-all duration-300 ${
                    activeIndex === index
                      ? "w-8 bg-blue-600"
                      : "w-2.5 bg-slate-300 hover:bg-blue-300"
                  }`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={previousTopic}
                aria-label="Previous topic"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 transition hover:border-blue-300 hover:text-blue-700"
              >
                <ArrowLeft size={18} />
              </button>

              <button
                type="button"
                onClick={nextTopic}
                aria-label="Next topic"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 transition hover:border-blue-300 hover:text-blue-700"
              >
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


/* -------------------------------------------------------
   CATEGORY CARD
------------------------------------------------------- */

function CategoryCard({ category, index }) {
  const Icon = category.icon;
  const colors = colorStyles[category.color];

  return (
    <motion.div
      variants={fadeUp}
      transition={{ duration: 0.45, delay: index * 0.04 }}
      whileHover={{ y: -5 }}
      className="h-full"
    >
      <Link
        href={category.href}
        className={`group flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-gradient-to-br ${colors.soft} p-6 transition duration-300 hover:shadow-xl hover:shadow-blue-900/5 ${colors.border}`}
      >
        <div className="flex items-center justify-between">
          <div
            className={`flex h-14 w-14 items-center justify-center rounded-2xl ${colors.icon} transition duration-300 group-hover:scale-110`}
          >
            <Icon size={27} strokeWidth={1.8} />
          </div>

          <span className="rounded-full border border-zinc-200 bg-white/80 px-3 py-1 text-xs font-bold text-zinc-500">
            {category.guides.length} guides
          </span>
        </div>

        <h3 className="mt-6 text-xl font-bold text-zinc-900 transition group-hover:text-blue-700">
          {category.name}
        </h3>

        <p className="mt-3 flex-1 text-sm leading-7 text-zinc-600">
          {category.description}
        </p>

        <div className="mt-6 flex items-center justify-between border-t border-zinc-200/70 pt-4">
          <span className={`text-sm font-bold ${colors.text}`}>
            Explore category
          </span>
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-blue-700 transition group-hover:translate-x-1">
            <ArrowRight size={17} />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}

/* -------------------------------------------------------
   MAIN HOME PAGE
------------------------------------------------------- */

export default function HomeExperience() {
  const [activeCategory, setActiveCategory] = useState("all");

  const recommendations = useMemo(() => {
    const selectedCategories =
      activeCategory === "all"
        ? categories
        : categories.filter((category) => category.id === activeCategory);

    return selectedCategories.flatMap((category) =>
      category.guides.map(([title, href], index) => ({
        title,
        href,
        category: category.name,
        color: category.color,
        icon: category.icon,
        index,
      }))
    );
  }, [activeCategory]);

  return (
    <main className="min-h-screen overflow-hidden bg-white text-zinc-900">
      {/* HERO */}

      <section className="relative border-b border-blue-100 bg-gradient-to-b from-blue-50 via-white to-white">
        <div className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-blue-100/50 blur-3xl" />
        <div className="pointer-events-none absolute -left-24 bottom-0 h-64 w-64 rounded-full bg-violet-100/40 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 text-center sm:py-24 lg:py-28">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.65 }}
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
            className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-bold text-blue-700 shadow-sm"
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
            information across technology, economics, business, psychology
            and everyday decisions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-9 flex flex-wrap justify-center gap-3"
          >
            <a
              href="#discover"
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-bold text-white transition hover:-translate-y-0.5 hover:bg-blue-700"
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

          <div className="mx-auto mt-12 flex max-w-4xl flex-wrap justify-center gap-x-7 gap-y-4 text-sm text-zinc-500">
            {categories.map((category) => {
              const Icon = category.icon;

              return (
                <span
                  key={category.id}
                  className="inline-flex items-center gap-2"
                >
                  <Icon
                    size={16}
                    className={colorStyles[category.color].text}
                  />
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

      {/* DYNAMIC KNOWLEDGE SPOTLIGHT */}

      <KnowledgeSpotlight />

      {/* CATEGORY DISCOVERY */}

      <section
        id="discover"
        className="scroll-mt-16 mx-auto max-w-7xl px-6 py-20 lg:px-8"
      >
        <Reveal>
          <SectionHeading
            eyebrow="Explore the knowledge hub"
            title="What would you like to explore?"
            description="Choose an area of interest and discover organised guides, useful explanations and connected topics."
          />
        </Reveal>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {categories.map((category, index) => (
            <CategoryCard
              key={category.id}
              category={category}
              index={index}
            />
          ))}
        </motion.div>
      </section>

      {/* RECOMMENDED GUIDES */}

      <section className="border-y border-blue-100 bg-gradient-to-b from-blue-50/70 to-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <Reveal>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <SectionHeading
                eyebrow="Explore something useful"
                title="Knowledge library"
                description="Browse individual guides across different subjects. Select a category to discover its available topics."
              />

              <div className="mb-9 flex items-center gap-2 text-sm text-zinc-500">
                <Lightbulb size={17} className="text-amber-500" />
                Explore one concept at a time
              </div>
            </div>
          </Reveal>

          <div className="mb-8 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setActiveCategory("all")}
              className={`rounded-full px-4 py-2 text-sm font-bold transition ${
                activeCategory === "all"
                  ? "bg-blue-600 text-white shadow-md shadow-blue-600/20"
                  : "border border-zinc-200 bg-white text-zinc-600 hover:border-blue-300 hover:text-blue-700"
              }`}
            >
              All topics
            </button>

            {categories.map((category) => (
              <button
                key={category.id}
                type="button"
                onClick={() => setActiveCategory(category.id)}
                className={`rounded-full px-4 py-2 text-sm font-bold transition ${
                  activeCategory === category.id
                    ? "bg-blue-600 text-white shadow-md shadow-blue-600/20"
                    : "border border-zinc-200 bg-white text-zinc-600 hover:border-blue-300 hover:text-blue-700"
                }`}
              >
                {category.short}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: 10 }}
              className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
            >
              {recommendations.map((guide, index) => {
                const Icon = guide.icon;
                const colors = colorStyles[guide.color];

                return (
                  <motion.div
                    key={guide.href}
                    variants={fadeUp}
                    transition={{
                      duration: 0.35,
                      delay: Math.min(index * 0.025, 0.2),
                    }}
                  >
                    <Link
                      href={guide.href}
                      className="group flex h-full min-h-[125px] items-start gap-4 rounded-xl border border-zinc-200 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg"
                    >
                      <div
                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${colors.icon}`}
                      >
                        <Icon size={21} strokeWidth={1.8} />
                      </div>

                      <div className="min-w-0 flex-1">
                        <p className={`text-xs font-bold ${colors.text}`}>
                          {guide.category}
                        </p>

                        <h3 className="mt-1 font-bold leading-6 text-zinc-900 group-hover:text-blue-700">
                          {guide.title}
                        </h3>

                        <span className="mt-3 inline-flex items-center gap-1 text-sm font-bold text-blue-700">
                          Read guide
                          <ArrowRight
                            size={15}
                            className="transition group-hover:translate-x-1"
                          />
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>

          {activeCategory !== "all" && (
            <div className="mt-8 text-center">
              <Link
                href={
                  categories.find((item) => item.id === activeCategory)?.href ||
                  "/"
                }
                className="inline-flex items-center gap-2 rounded-xl border border-blue-200 bg-white px-5 py-3 text-sm font-bold text-blue-700 transition hover:bg-blue-50"
              >
                Explore complete category
                <ArrowRight size={17} />
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* HOW TO EXPLORE */}

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="A simple way to learn"
            title="Explore one concept at a time"
            description="Start with a subject, understand its fundamentals and continue into more specific guides."
          />
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              number: "01",
              title: "Choose a subject",
              description:
                "Start with an area that interests you, from AI and networking to economics and psychology.",
              icon: Search,
            },
            {
              number: "02",
              title: "Understand the concept",
              description:
                "Build your understanding through clear explanations, useful examples and visual learning.",
              icon: BookOpen,
            },
            {
              number: "03",
              title: "Explore connected topics",
              description:
                "Move into related guides and discover more specific information at your own pace.",
              icon: GraduationCap,
            },
          ].map((step, index) => {
            const Icon = step.icon;

            return (
              <Reveal key={step.number} delay={index * 0.1}>
                <div className="relative h-full rounded-2xl border border-zinc-200 bg-gradient-to-br from-blue-50/70 to-white p-7 transition hover:border-blue-200 hover:shadow-lg">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-blue-200">
                      {step.number}
                    </span>

                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                      <Icon size={23} />
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

      <section className="relative overflow-hidden border-t border-blue-900 bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-950 text-white">
        <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full border border-white/10" />
        <div className="pointer-events-none absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-5xl px-6 py-20 text-center">
          <Reveal>
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/10">
              <Sparkles size={29} />
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
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-bold text-blue-900 transition hover:-translate-y-0.5 hover:bg-blue-50"
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
