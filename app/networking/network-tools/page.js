
import Link from "next/link";
import AdSlot from "../../../components/AdSlot";
import RelatedTopics from "../../../components/ContinueReading";
import {
  Terminal,
  ScanSearch,
  Activity,
  Globe,
  Server,
  ShieldCheck,
  Zap,
  Network,
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  Wrench,
  Search,
  Route,
  BookOpen,
  LockKeyhole,
  CircleHelp,
} from "lucide-react";

const pageUrl = "https://pricetag.co.in/networking/network-tools";

export const metadata = {
  title: "Network Tools: Troubleshooting, Nmap & Wireshark | PriceTag Hub",
  description:
    "Learn network troubleshooting, Nmap, Wireshark, ping, traceroute, DNS tools, and practical network diagnostics.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Network Tools: A Practical Guide",
    description:
      "Explore network troubleshooting, device discovery, and packet analysis with practical guides for beginners.",
    url: pageUrl,
    siteName: "PriceTag Hub",
    type: "article",
  },
};

const topics = [
  {
    title: "Network Troubleshooting Tools",
    description:
      "Check connectivity, diagnose DNS issues, and investigate slow or unreliable network connections.",
    href: "/networking/network-tools/network-troubleshooting-tools",
    icon: Wrench,
    color: "text-sky-700",
    background: "bg-sky-100",
    border: "hover:border-sky-300",
    tags: ["ping", "traceroute", "nslookup"],
  },
  {
    title: "Nmap",
    description:
      "Discover hosts and examine open ports and services on networks you are authorized to test.",
    href: "/networking/network-tools/nmap",
    icon: ScanSearch,
    color: "text-violet-700",
    background: "bg-violet-100",
    border: "hover:border-violet-300",
    tags: ["Host discovery", "Port scanning"],
  },
  {
    title: "Wireshark",
    description:
      "Capture and inspect packets to understand network communication and investigate connection problems.",
    href: "/networking/network-tools/wireshark",
    icon: Activity,
    color: "text-emerald-700",
    background: "bg-emerald-100",
    border: "hover:border-emerald-300",
    tags: ["Packet capture", "Protocol analysis"],
  },
];

const useCases = [
  {
    title: "Connectivity checks",
    description:
      "Test whether devices respond and investigate connection failures.",
    icon: Globe,
    color: "bg-sky-100 text-sky-700",
  },
  {
    title: "Security assessments",
    description:
      "Review exposed services and investigate unexpected network activity.",
    icon: ShieldCheck,
    color: "bg-violet-100 text-violet-700",
  },
  {
    title: "Traffic analysis",
    description:
      "Inspect packet exchanges to understand how applications communicate.",
    icon: Activity,
    color: "bg-emerald-100 text-emerald-700",
  },
  {
    title: "Server diagnostics",
    description:
      "Investigate network access between computers, servers, and routers.",
    icon: Server,
    color: "bg-amber-100 text-amber-700",
  },
];

const faqs = [
  {
    question: "What are network tools?",
    answer:
      "Network tools are utilities used to test connectivity, troubleshoot faults, discover devices, inspect traffic, and investigate performance. Common examples include ping, traceroute, Nmap, and Wireshark.",
  },
  {
    question: "Which network tools should beginners learn?",
    answer:
      "Start with ping, ipconfig or ip, nslookup, and traceroute or tracert. These help you understand connectivity, IP configuration, DNS, and network routes.",
  },
  {
    question: "What is the difference between Nmap and Wireshark?",
    answer:
      "Nmap helps discover hosts and inspect ports and services on authorized systems. Wireshark captures and analyzes packets to show how network communication occurs.",
  },
  {
    question: "Can network tools help with cybersecurity?",
    answer:
      "Yes. Administrators can use them to review exposed services, investigate suspicious traffic, and diagnose security-related network issues. They work best alongside patching, secure configurations, and monitoring.",
  },
  {
    question: "Are network tools available on Windows and Linux?",
    answer:
      "Many are available on both platforms, although commands can differ. For example, Windows commonly uses ipconfig and tracert, while Linux commonly uses ip and traceroute.",
  },
  {
    question: "Can I scan any network with Nmap?",
    answer:
      "Only scan systems you own or have explicit permission to assess. Unauthorized scanning may violate policies or applicable laws.",
  },
];

const relatedLinks = [
  {
    title: "Firewalls and IPS",
    href: "/networking/network-security/firewalls-and-ips",
  },
  {
    title: "Intrusion Detection",
    href: "/networking/network-security/intrusion-detection",
  },
  {
    title: "Network Monitoring",
    href: "/networking/network-security/network-monitoring",
  },
  {
    title: "Wireless Security",
    href: "/networking/network-security/wireless-security",
  },
];

function NetworkDiagram() {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-950 p-5 sm:p-7">
      <div className="mb-6 flex items-center justify-between gap-3">
        <div>
          <p className="text-sm text-sky-300">Network overview</p>
          <p className="mt-1 text-sm text-slate-400">
            A simplified connection
          </p>
        </div>

        <div className="flex items-center gap-2 rounded-full bg-emerald-400/10 px-3 py-1.5 text-xs text-emerald-300">
          <CheckCircle2 size={15} />
          Diagnostic view
        </div>
      </div>

      <div className="grid grid-cols-3 items-center gap-2 sm:gap-4">
        <div className="flex min-w-0 flex-col items-center rounded-xl border border-sky-400/20 bg-sky-400/10 p-3 text-center sm:p-4">
          <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-sky-400/15 text-sky-300">
            <Terminal size={24} />
          </div>
          <p className="text-sm text-white">Your device</p>
          <p className="mt-1 text-xs text-slate-400">Client</p>
        </div>

        <div className="flex min-w-0 flex-col items-center">
          <div className="mb-3 flex items-center text-sky-300">
            <span className="h-px w-2 bg-sky-400 sm:w-5" />
            <ArrowRight size={18} />
            <span className="h-px w-2 bg-sky-400 sm:w-5" />
          </div>
          <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-violet-400/20 bg-violet-400/10 text-violet-300">
            <Network size={24} />
          </div>
          <p className="mt-2 text-sm text-white">Router</p>
          <p className="mt-1 text-xs text-slate-400">Gateway</p>
        </div>

        <div className="flex min-w-0 flex-col items-center rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-3 text-center sm:p-4">
          <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-400/15 text-emerald-300">
            <Globe size={24} />
          </div>
          <p className="text-sm text-white">Destination</p>
          <p className="mt-1 text-xs text-slate-400">Remote host</p>
        </div>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-3">
        {[
          { label: "Test connectivity", icon: CheckCircle2 },
          { label: "Trace routes", icon: Route },
          { label: "Inspect traffic", icon: Search },
        ].map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.label}
              className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 p-3 text-sm text-slate-300"
            >
              <Icon size={17} className="shrink-0 text-sky-300" />
              {item.label}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function TopicCard({ topic }) {
  const Icon = topic.icon;

  return (
    <article
      className={`flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:shadow-md sm:p-6 ${topic.border}`}
    >
      <div
        className={`flex h-12 w-12 items-center justify-center rounded-xl ${topic.background} ${topic.color}`}
      >
        <Icon size={24} />
      </div>

      <h3 className="mt-5 text-lg text-slate-900">{topic.title}</h3>

      <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">
        {topic.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {topic.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md bg-slate-100 px-2.5 py-1 text-xs text-slate-600"
          >
            {tag}
          </span>
        ))}
      </div>

      <Link
        href={topic.href}
        className={`mt-6 inline-flex items-center gap-2 text-sm ${topic.color}`}
      >
        Explore guide
        <ArrowRight size={17} />
      </Link>
    </article>
  );
}

export default function NetworkToolsPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: "Network Tools: Troubleshooting, Nmap and Wireshark",
    description: metadata.description,
    mainEntityOfPage: pageUrl,
    author: {
      "@type": "Organization",
      name: "PriceTag Hub",
    },
    publisher: {
      "@type": "Organization",
      name: "PriceTag Hub",
      url: "https://pricetag.co.in",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 p-5">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema).replace(/</g, "\\u003c"),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
        }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-9 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-2 lg:items-center lg:gap-12 lg:px-8">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-300/20 bg-sky-300/10 px-3 py-1.5 text-sm text-sky-200">
              <Network size={16} />
              Networking Learning Hub
            </div>

            <h1 className="mt-6 text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">
              Network Tools: A Practical Guide
            </h1>

            <p className="mt-5 max-w-xl text-base leading-8 text-slate-300">
              Learn how to troubleshoot connections, discover network
              devices, and inspect traffic using commonly used networking
              tools.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/networking/network-tools/network-troubleshooting-tools"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-sky-400 px-5 py-3 text-sm text-slate-950 transition hover:bg-sky-300"
              >
                Start learning
                <ArrowRight size={18} />
              </Link>

              <a
                href="#explore-tools"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 px-5 py-3 text-sm text-white hover:bg-white/10"
              >
                Explore tools
                <ArrowRight size={18} />
              </a>
            </div>

            <div className="mt-7 flex flex-wrap gap-x-5 gap-y-3 text-sm text-slate-300">
              <span className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-emerald-300" />
                Beginner-friendly
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-emerald-300" />
                Practical examples
              </span>
            </div>
          </div>

          <NetworkDiagram />
        </div>
      </section>

      {/* Introduction */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
        <div className="grid gap-7 lg:grid-cols-[1.4fr_0.8fr]">
          <div>
            <div className="flex items-center gap-2 text-sm text-blue-700">
              <BookOpen size={17} />
              Introduction
            </div>

            <h2 className="mt-3 text-2xl text-slate-900 sm:text-3xl">
              What are network tools?
            </h2>

            <p className="mt-4 text-sm leading-8 text-slate-600 sm:text-base">
              Network tools are programs that help you understand how
              computers and other devices communicate. They can test
              connectivity, check DNS, trace routes, discover services, and
              examine network packets.
            </p>

            <p className="mt-3 text-sm leading-8 text-slate-600 sm:text-base">
              Each tool answers a different question. Choosing the right one
              helps you find problems faster and understand what is happening
              across a network.
            </p>
          </div>

          <aside className="rounded-2xl border border-blue-100 bg-blue-50 p-5 sm:p-6">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
              <Zap size={22} />
            </div>
            <h3 className="mt-4 text-lg text-slate-900">
              Start with the problem
            </h3>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              Check reachability first, then investigate DNS, routing, open
              services, or packet traffic as needed.
            </p>
          </aside>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AdSlot />
      </div>

      {/* Tool cards */}
      <section
        id="explore-tools"
        className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8"
      >
        <div className="max-w-2xl">
          <p className="text-sm text-blue-700">Explore the guides</p>
          <h2 className="mt-2 text-2xl text-slate-900 sm:text-3xl">
            Essential network tools
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
            Choose a topic to learn how the tools work and when to use them.
          </p>
        </div>

        <div className="mt-7 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {topics.map((topic) => (
            <TopicCard key={topic.href} topic={topic} />
          ))}
        </div>
      </section>

      {/* Applications */}
      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm text-blue-700">Practical applications</p>
            <h2 className="mt-2 text-2xl text-slate-900 sm:text-3xl">
              Where are these tools used?
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
              These tools support everyday IT work, network administration,
              and defensive security.
            </p>
          </div>

          <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {useCases.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:border-blue-200 hover:bg-white hover:shadow-sm"
                >
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-xl ${item.color}`}
                  >
                    <Icon size={22} />
                  </div>
                  <h3 className="mt-4 text-base text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
        <h2 className="text-2xl text-slate-900 sm:text-3xl text-bold">
          Quick comparison of network tools
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
          Use this table to identify a useful starting point for common
          networking questions.
        </p>

        <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px] text-left text-sm">
              <thead className="bg-slate-900 text-white">
                <tr>
                  <th className="px-5 py-4">Tool</th>
                  <th className="px-5 py-4">Purpose</th>
                  <th className="px-5 py-4">Example question</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="px-5 py-4 text-sky-700">ping</td>
                  <td className="px-5 py-4 text-slate-600">
                    Test reachability
                  </td>
                  <td className="px-5 py-4 text-slate-600">
                    Does the host respond?
                  </td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-5 py-4 text-sky-700">
                    traceroute / tracert
                  </td>
                  <td className="px-5 py-4 text-slate-600">
                    Examine the network path
                  </td>
                  <td className="px-5 py-4 text-slate-600">
                    Where might the route be failing?
                  </td>
                </tr>
                <tr>
                  <td className="px-5 py-4 text-violet-700">Nmap</td>
                  <td className="px-5 py-4 text-slate-600">
                    Discover hosts and services
                  </td>
                  <td className="px-5 py-4 text-slate-600">
                    Which services are exposed?
                  </td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-5 py-4 text-emerald-700">Wireshark</td>
                  <td className="px-5 py-4 text-slate-600">
                    Capture and analyze packets
                  </td>
                  <td className="px-5 py-4 text-slate-600">
                    What is happening in this connection?
                  </td>
                </tr>
                <tr>
                  <td className="px-5 py-4 text-amber-700">nslookup</td>
                  <td className="px-5 py-4 text-slate-600">
                    Check DNS resolution
                  </td>
                  <td className="px-5 py-4 text-slate-600">
                    Does this domain resolve?
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <p className="mt-3 text-xs leading-6 text-slate-500">
          A failed ping does not always mean a device is offline. A firewall
          may block ping while other services remain available.
        </p>
      </section>

      {/* Learning path */}
      <section className="bg-gradient-to-br from-blue-950 to-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-400/15 text-sky-300">
                <BookOpen size={23} />
              </div>
              <h2 className="mt-4 text-2xl text-white sm:text-3xl">
                Suggested learning path
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-base">
                Build your skills step by step, from basic commands to packet
                analysis.
              </p>
            </div>

            <div className="space-y-3">
              {[
                {
                  title: "Learn IP and DNS",
                  description:
                    "Understand addresses, gateways, and domain resolution.",
                  icon: Globe,
                },
                {
                  title: "Practice troubleshooting",
                  description:
                    "Use ping, ipconfig, nslookup, and route tracing.",
                  icon: Terminal,
                },
                {
                  title: "Explore Nmap",
                  description:
                    "Practice host discovery and service checks in an authorized lab.",
                  icon: ScanSearch,
                },
                {
                  title: "Learn Wireshark",
                  description:
                    "Inspect DNS queries, TCP handshakes, and packet exchanges.",
                  icon: Activity,
                },
              ].map((step, index) => {
                const Icon = step.icon;

                return (
                  <div
                    key={step.title}
                    className="flex gap-4 rounded-xl border border-white/10 bg-white/5 p-4"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10 text-sky-300">
                      <Icon size={21} />
                    </div>
                    <div>
                      <p className="text-sm text-sky-300">
                        Step {index + 1}
                      </p>
                      <h3 className="mt-1 text-base text-white">
                        {step.title}
                      </h3>
                      <p className="mt-1 text-sm leading-6 text-slate-300">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Official resources */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
        <h2 className="text-2xl text-slate-900 sm:text-3xl">
          Official learning resources
        </h2>
        <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
          Consult the official documentation for accurate instructions and
          tool options.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
          {[
            {
              title: "Nmap documentation",
              description:
                "Read about scanning options and network discovery.",
              href: "https://nmap.org/book/man.html",
              icon: ScanSearch,
              color: "bg-violet-100 text-violet-700",
            },
            {
              title: "Wireshark documentation",
              description:
                "Learn packet capture and display filters.",
              href: "https://www.wireshark.org/docs/",
              icon: Activity,
              color: "bg-emerald-100 text-emerald-700",
            },
            {
              title: "Windows commands",
              description:
                "Explore Windows command-line utilities.",
              href: "https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/windows-commands",
              icon: Terminal,
              color: "bg-sky-100 text-sky-700",
            },
          ].map((resource) => {
            const Icon = resource.icon;

            return (
              <a
                key={resource.href}
                href={resource.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-blue-300 hover:shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-xl ${resource.color}`}
                  >
                    <Icon size={22} />
                  </div>
                  <ExternalLink
                    size={17}
                    className="text-slate-400 group-hover:text-blue-700"
                  />
                </div>
                <h3 className="mt-4 text-base text-slate-900">
                  {resource.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  {resource.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm text-blue-700">
                  Open resource
                  <ArrowRight size={16} />
                </span>
              </a>
            );
          })}
        </div>
      </section>

      {/* FAQs */}
      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
          <div className="text-center">
            <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
              <CircleHelp size={23} />
            </div>
            <h2 className="mt-4 text-2xl text-slate-900 sm:text-3xl">
              Frequently asked questions
            </h2>
          </div>

          <div className="mt-7 space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-xl border border-slate-200 bg-slate-50 p-4 open:border-blue-200 open:bg-blue-50/50 sm:p-5"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm text-slate-900 [&::-webkit-details-marker]:hidden">
                  <span>{faq.question}</span>
                  <ArrowRight
                    size={17}
                    className="shrink-0 text-blue-700 transition-transform group-open:rotate-90"
                  />
                </summary>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Related topics */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
        <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-100 to-blue-50 p-5 sm:p-7">
          <div className="flex items-start gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
              <LockKeyhole size={22} />
            </div>
            <div>
              <h2 className="text-xl text-slate-900 sm:text-2xl">
                Continue learning about network security
              </h2>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Explore related topics in monitoring and network protection.
              </p>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {relatedLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-700 transition hover:border-blue-300 hover:text-blue-700"
              >
                {item.title}
                <ArrowRight size={17} className="shrink-0" />
              </Link>
            ))}
          </div>
        </div>
      </section>

   <RelatedTopics title='Explore More About Networking Tools'
   links={[
    {href:'/networking/network-tools/network-troubleshooting-tools',label:'TroubleShooting'},
    {href:'/networking/network-tools/nmap',label:'Nmap'},
    {href:'/networking/network-tools/wireshark',label:'WireShark'}
   ]}
   />
    </main>
  );
}
