
import RelatedTopics from "../../../../components/ContinueReading";
import {
  Activity,
  ArrowRight,
  CheckCircle2,
  CircleAlert,
  Code2,
  Globe,
  Laptop,
  Network,
  Search,
  ShieldCheck,
  Terminal,
  Wifi,
} from "lucide-react";
import AdSlot from "../../../../components/AdSlot";
const pageUrl = "https://pricetag.co.in/networking/network-tools/nmap";

export const metadata = {
  title: "Nmap Tutorial: Commands, Port Scanning & Practice",
  description:
    "Learn Nmap from beginner to intermediate level with practical commands for host discovery, port scanning, service detection, scan interpretation, and authorized network security testing.",
  alternates: {
    canonical: '/networking/network-tools/nmap',
  },
 
};

const basics = [
  {
    icon: Network,
    title: "Host discovery",
    description:
      "Discover which devices may be reachable on a local network.",
    color: "bg-blue-100 text-blue-700",
  },
  {
    icon: Search,
    title: "Port scanning",
    description:
      "Identify TCP ports that appear open, closed, or filtered.",
    color: "bg-violet-100 text-violet-700",
  },
  {
    icon: Activity,
    title: "Service detection",
    description:
      "Collect information about services listening on accessible ports.",
    color: "bg-emerald-100 text-emerald-700",
  },
  {
    icon: ShieldCheck,
    title: "Security assessment",
    description:
      "Use scan results to understand exposed services and investigate unnecessary network access.",
    color: "bg-amber-100 text-amber-700",
  },
];

const commands = [
  {
    level: "Beginner",
    title: "1. Check the Nmap installation",
    command: "nmap --version",
    explanation:
      "Displays the installed Nmap version and build information. If the command is not recognized, check whether Nmap is installed and available in your system PATH.",
    color: "border-blue-200 bg-blue-50",
  },
  {
    level: "Beginner",
    title: "2. Scan your own computer",
    command: "nmap 127.0.0.1",
    explanation:
      "Scans the local loopback address for commonly scanned TCP ports. Results describe services reachable through that local address, not every service or every port.",
    color: "border-blue-200 bg-blue-50",
  },
  {
    level: "Beginner",
    title: "3. Scan an authorized lab host",
    command: "nmap 192.168.1.10",
    explanation:
      "Scans the default set of commonly scanned TCP ports on the specified host. Replace the example IP with a device you own or have permission to test.",
    color: "border-blue-200 bg-blue-50",
  },
  {
    level: "Beginner",
    title: "4. Scan selected ports",
    command: "nmap -p 22,80,443 192.168.1.10",
    explanation:
      "Checks TCP ports 22, 80, and 443. These are commonly associated with SSH, HTTP, and HTTPS, although the actual service can differ.",
    color: "border-blue-200 bg-blue-50",
  },
  {
    level: "Beginner",
    title: "5. Scan a specific port range",
    command: "nmap -p 1-1000 192.168.1.10",
    explanation:
      "Scans TCP ports 1 through 1000. Larger ranges take longer and may generate more network traffic.",
    color: "border-blue-200 bg-blue-50",
  },
  {
    level: "Intermediate",
    title: "6. Detect service versions",
    command: "nmap -sV 192.168.1.10",
    explanation:
      "Probes open ports to identify the services and possible version information they expose. Identification is not always exact.",
    color: "border-violet-200 bg-violet-50",
  },
  {
    level: "Intermediate",
    title: "7. Discover live hosts",
    command: "nmap -sn 192.168.1.0/24",
    explanation:
      "Performs host discovery across a typical /24 subnet without doing a port scan. This covers addresses from 192.168.1.0 through 192.168.1.255, but the number of reachable hosts depends on the network.",
    color: "border-violet-200 bg-violet-50",
  },
  {
    level: "Intermediate",
    title: "8. Skip host discovery",
    command: "nmap -Pn 192.168.1.10",
    explanation:
      "Treats the target as online and proceeds with the requested scan even if host discovery would not identify it as reachable. This does not bypass a firewall or guarantee that the host responds.",
    color: "border-violet-200 bg-violet-50",
  },
  {
    level: "Intermediate",
    title: "9. Run a TCP connect scan",
    command: "nmap -sT -p 1-1000 192.168.1.10",
    explanation:
      "Uses the operating system's TCP connect mechanism to test the selected ports. It is useful when a SYN scan is unavailable, although it may establish complete TCP connections.",
    color: "border-violet-200 bg-violet-50",
  },
  {
    level: "Intermediate",
    title: "10. Save the results",
    command: "nmap -sV -oN scan-results.txt 192.168.1.10",
    explanation:
      "Performs service detection and saves a readable report to scan-results.txt in the current working directory.",
    color: "border-violet-200 bg-violet-50",
  },
];

const resultStates = [
  {
    name: "open",
    color: "bg-emerald-100 text-emerald-800",
    meaning:
      "An application is accepting connections on the scanned port.",
    next:
      "Identify the service and confirm whether it should be accessible.",
  },
  {
    name: "closed",
    color: "bg-slate-200 text-slate-800",
    meaning:
      "The target is reachable, but no application is listening on that port at the time of the scan.",
    next:
      "Check whether the service is expected to be running.",
  },
  {
    name: "filtered",
    color: "bg-amber-100 text-amber-800",
    meaning:
      "Nmap cannot determine whether the port is open because packet filtering or another network condition prevents a clear response.",
    next:
      "Review authorized firewall rules and network reachability.",
  },
];

const practiceSteps = [
  {
    number: "01",
    title: "Prepare a safe lab",
    description:
      "Use your own computer, a local virtual machine, or a deliberately vulnerable training machine in an isolated lab.",
    command: "nmap --version",
  },
  {
    number: "02",
    title: "Perform your first scan",
    description:
      "Start with the loopback address. This lets you learn the output without scanning another device.",
    command: "nmap 127.0.0.1",
  },
  {
    number: "03",
    title: "Explore port states",
    description:
      "Choose a lab service that you control. Compare results before and after starting or stopping that service.",
    command: "nmap -p 8080 127.0.0.1",
  },
  {
    number: "04",
    title: "Identify a service",
    description:
      "If your lab has an HTTP service on port 8080, use service detection to collect additional information.",
    command: "nmap -sV -p 8080 127.0.0.1",
  },
  {
    number: "05",
    title: "Save and review",
    description:
      "Save the report, note the detected port states, and write down which results changed after your lab configuration changed.",
    command: "nmap -sV -oN lab-report.txt 127.0.0.1",
  },
];

const faqs = [
  {
    question: "What is Nmap used for?",
    answer:
      "Nmap is an open-source network exploration and security auditing tool. It can discover hosts, scan ports, identify services, and gather other information about systems on networks you are authorized to assess.",
  },
  {
    question: "Is Nmap free to use?",
    answer:
      "Yes. Nmap is available as free, open-source software. Download it from the official Nmap website at nmap.org.",
  },
  {
    question: "Can Nmap tell me whether a computer has been hacked?",
    answer:
      "No. Nmap can identify exposed ports and gather service information, but a port scan alone cannot determine whether a system has been compromised. Investigate system logs, endpoint security alerts, processes, and other evidence as appropriate.",
  },
  {
    question: "Why does Nmap show no open ports?",
    answer:
      "The scanned ports may genuinely be closed, filtered, or unavailable. The host could also be offline or the scan could be affected by routing or firewall rules. Check the target address and scan scope before drawing conclusions.",
  },
  {
    question: "Does service detection identify every software version correctly?",
    answer:
      "No. Nmap service detection uses probes and response fingerprints. Proxies, customized services, filtering, and incomplete responses can cause uncertain or inaccurate identification.",
  },
  {
    question: "Can I scan any public IP address?",
    answer:
      "Do not assume a publicly reachable address is available for testing. Obtain permission from the system owner and follow applicable laws, organizational rules, and the owner's testing scope.",
  },
];

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mb-8 max-w-3xl">
      <p className="mb-2 text-sm font-medium uppercase tracking-wider text-blue-700">
        {eyebrow}
      </p>
      <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 leading-7 text-slate-600">{description}</p>
      )}
    </div>
  );
}

function CodeExample({ command }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-slate-950 p-4">
      <div className="mb-2 flex items-center gap-2 text-xs text-slate-400">
        <Terminal className="h-4 w-4" />
        Terminal command
      </div>
      <code className="block overflow-x-auto whitespace-pre-wrap break-all font-mono text-sm leading-6 text-emerald-300">
        {command}
      </code>
    </div>
  );
}

export default function NmapPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TechArticle",
        headline: "Nmap Tutorial: Commands, Port Scanning and Practice",
        description: metadata.description,
        url: pageUrl,
        mainEntityOfPage: pageUrl,
        author: {
          "@type": "Organization",
          name: "K2S INFOTECH",
        },
        publisher: {
          "@type": "Organization",
          name: "K2S INFOTECH",
          url: "https://k2sinfotech.pricetag.co.in",
        },
        datePublished: "2026-10-13",
        dateModified: "2026-10-13",
        proficiencyLevel: "Beginner to Intermediate",
        inLanguage: "en-IN",
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://pricetag.co.in",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Networking",
            item: "https://pricetag.co.in/networking",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Network Security",
            item: "https://pricetag.co.in/networking/network-security",
          },
          {
            "@type": "ListItem",
            position: 4,
            name: "Nmap Tutorial",
            item: pageUrl,
          },
        ],
      },
    ],
  };

  return (
    <main className="min-h-screen bg-white text-slate-800 p-7">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO */}
      <section className="border-b border-blue-100 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-14 sm:px-8 sm:py-16 lg:grid-cols-2">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-3 py-2 text-sm text-blue-800">
              <Terminal className="h-4 w-4" />
              Practical Network Security
            </div>

            <h1 className="text-3xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-4xl">
              Nmap Tutorial: Learn Network Scanning Step by Step
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
              Learn how Nmap discovers devices, checks network ports, identifies
              services, and helps security learners understand exposed network
              services. Start with simple commands and build your skills
              through practical, authorized lab exercises.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#first-commands"
                className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-sm font-medium text-white hover:bg-blue-700"
              >
                Learn the commands
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#direct-practice"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-800 hover:border-blue-400"
              >
                <Code2 className="h-4 w-4" />
                Start practice
              </a>
            </div>

            <p className="mt-5 text-sm text-slate-500">
              Beginner-friendly · Command-line learning · Authorized lab use
            </p>
          </div>

          <div className="rounded-2xl border border-blue-100 bg-white p-5 shadow-lg shadow-blue-900/5 sm:p-7">
            <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
              <div className="rounded-xl bg-blue-100 p-3 text-blue-700">
                <Network className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-slate-900">
                  What does Nmap do?
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  A simplified view of a network scan
                </p>
              </div>
            </div>

            <div className="mt-5 space-y-3">
              {[
                {
                  label: "Target host",
                  detail: "192.168.1.10",
                  icon: Laptop,
                  color: "bg-blue-100 text-blue-700",
                },
                {
                  label: "Port scan",
                  detail: "Check selected TCP ports",
                  icon: Search,
                  color: "bg-violet-100 text-violet-700",
                },
                {
                  label: "Service detection",
                  detail: "Collect service information",
                  icon: Activity,
                  color: "bg-cyan-100 text-cyan-700",
                },
              ].map((item, index) => {
                const Icon = item.icon;

                return (
                  <div key={item.label}>
                    <div className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 p-4">
                      <div className={`rounded-lg p-2 ${item.color}`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-slate-900">
                          {item.label}
                        </p>
                        <p className="mt-1 text-sm text-slate-500">
                          {item.detail}
                        </p>
                      </div>
                    </div>
                    {index < 2 && (
                      <div className="py-1 text-center text-blue-500">↓</div>
                    )}
                  </div>
                );
              })}
            </div>

            <p className="mt-4 rounded-lg bg-amber-50 p-3 text-sm leading-6 text-amber-900">
              The example address is illustrative. Scan only systems within
              your authorization.
            </p>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <SectionHeading
          eyebrow="Understanding Nmap"
          title="What is Nmap?"
          description="Nmap, short for Network Mapper, is an open-source tool used for network discovery and security auditing. Administrators and security professionals use it to understand which hosts are reachable and which network services may be exposed."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {basics.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="rounded-xl border border-slate-200 p-5 transition hover:border-blue-300 hover:shadow-md"
              >
                <div className={`mb-4 inline-flex rounded-xl p-3 ${item.color}`}>
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>

        <div className="mt-8 rounded-xl border border-slate-200 bg-slate-50 p-5 sm:p-6">
          <h3 className="text-lg font-medium text-slate-900">
            Install Nmap before starting
          </h3>
          <p className="mt-2 leading-7 text-slate-600">
            Download Nmap from its official website. Windows users can use the
            official installer; Linux users can use their distribution's
            package manager. macOS users can use the official macOS
            distribution or a trusted package manager.
          </p>
          <a
            href="https://nmap.org/download.html"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-blue-700 hover:text-blue-900"
          >
            Nmap official download page
            <ArrowRight className="h-4 w-4" />
          </a>
          <div className="mt-5">
            <CodeExample command="nmap --version" />
          </div>
        </div>
      </section>
<AdSlot />
      {/* COMMANDS */}
      <section
        id="first-commands"
        className="scroll-mt-20 bg-slate-50 py-14 sm:py-16"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Command reference"
            title="Nmap commands from beginner to intermediate"
            description="Run these examples in a terminal where Nmap is installed. Replace sample IP addresses with authorized lab targets. On some systems, advanced scan techniques may require elevated privileges."
          />

          <div className="mb-6 flex flex-wrap gap-3 text-sm">
            <span className="rounded-full bg-blue-100 px-3 py-1.5 text-blue-800">
              Beginner: installation and basic scans
            </span>
            <span className="rounded-full bg-violet-100 px-3 py-1.5 text-violet-800">
              Intermediate: discovery and service details
            </span>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            {commands.map((item) => (
              <article
                key={item.command}
                className={`rounded-xl border ${item.color} p-5`}
              >
                <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                  <span className="text-xs font-medium uppercase tracking-wide text-slate-500">
                    {item.level}
                  </span>
                  <span className="rounded-full bg-white/80 px-2.5 py-1 text-xs text-slate-600">
                    Nmap command
                  </span>
                </div>

                <h3 className="text-base font-semibold text-slate-900">
                  {item.title}
                </h3>

                <div className="mt-4">
                  <CodeExample command={item.command} />
                </div>

                <p className="mt-4 text-sm leading-7 text-slate-700">
                  {item.explanation}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
<AdSlot />
      {/* DIRECT PRACTICE */}
      <section
        id="direct-practice"
        className="scroll-mt-20 py-14 sm:py-16"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Guided lab"
            title="Direct practice: your first Nmap exercises"
            description="Work through these exercises in order. They are designed to help you understand scan output rather than simply memorize commands."
          />

          <div className="mb-8 rounded-xl border border-emerald-200 bg-emerald-50 p-5">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-emerald-700" />
              <div>
                <h3 className="font-medium text-emerald-900">
                  Practice safely on localhost
                </h3>
                <p className="mt-2 text-sm leading-7 text-emerald-900">
                  The loopback address 127.0.0.1 refers to your own computer.
                  It is a good starting point for learning. A port will appear
                  open only if a suitable service is listening and reachable
                  through that address.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-5">
            {practiceSteps.map((item) => (
              <article
                key={item.number}
                className="grid gap-4 rounded-xl border border-slate-200 p-5 sm:grid-cols-[70px_1fr] sm:p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-base font-semibold text-blue-800">
                  {item.number}
                </div>
                <div>
                  <h3 className="text-lg font-medium text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>
                  <div className="mt-4">
                    <CodeExample command={item.command} />
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 rounded-xl border border-blue-200 bg-blue-50 p-5 sm:p-6">
            <h3 className="text-lg font-medium text-slate-900">
              Practice challenge
            </h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              Run a basic localhost scan, then scan only the port you selected
              for your lab service. Compare the two reports. Which ports appear
              open? Did the service-detection scan identify an application?
              Can you explain why the results differ?
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-700">
              If you do not have a listening service on port 8080, the example
              may report it as closed. That is a valid result, not an error in
              Nmap.
            </p>
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section className="bg-slate-50 py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Understand scan output"
            title="What do Nmap port states mean?"
            description="A port state describes what Nmap can determine about a port from the probes and responses it receives. It does not, by itself, prove that a machine is secure or compromised."
          />

          <div className="grid gap-5 md:grid-cols-3">
            {resultStates.map((item) => (
              <article
                key={item.name}
                className="rounded-xl border border-slate-200 bg-white p-5"
              >
                <span
                  className={`inline-flex rounded-full px-3 py-1.5 text-sm font-medium ${item.color}`}
                >
                  {item.name}
                </span>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {item.meaning}
                </p>
                <div className="mt-4 border-t border-slate-100 pt-4">
                  <p className="text-sm font-medium text-slate-900">
                    What to investigate
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    {item.next}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-6 flex items-start gap-3 rounded-xl border border-amber-200 bg-amber-50 p-5">
            <CircleAlert className="mt-1 h-5 w-5 shrink-0 text-amber-700" />
            <p className="text-sm leading-7 text-amber-900">
              Nmap can report other states, including open|filtered and
              closed|filtered in certain scan types. Results depend on the
              scan method, target behavior, routing, and filtering rules.
            </p>
          </div>
        </div>
      </section>
      <AdSlot />

      {/* INTERMEDIATE KNOWLEDGE */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Intermediate knowledge"
            title="How to think like a network defender"
            description="The value of scanning is not the number of ports found. It is understanding which services are exposed and whether that exposure is appropriate."
          />

          <div className="grid gap-5 md:grid-cols-2">
            <article className="rounded-xl border border-slate-200 p-5">
              <div className="mb-3 inline-flex rounded-lg bg-blue-100 p-2.5 text-blue-700">
                <Globe className="h-5 w-5" />
              </div>
              <h3 className="font-medium text-slate-900">
                Identify exposed services
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Use service detection to understand what may be listening.
                Confirm the result through system configuration and service
                documentation.
              </p>
            </article>

            <article className="rounded-xl border border-slate-200 p-5">
              <div className="mb-3 inline-flex rounded-lg bg-violet-100 p-2.5 text-violet-700">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h3 className="font-medium text-slate-900">
                Review unnecessary access
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Compare scan results with the intended network design. A
                service that should not be reachable may need a firewall rule
                review or service configuration change.
              </p>
            </article>

            <article className="rounded-xl border border-slate-200 p-5">
              <div className="mb-3 inline-flex rounded-lg bg-emerald-100 p-2.5 text-emerald-700">
                <Activity className="h-5 w-5" />
              </div>
              <h3 className="font-medium text-slate-900">
                Compare scans over time
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Save reports and compare them after authorized configuration
                changes. Unexpected changes can be a reason to investigate,
                but are not proof of malicious activity.
              </p>
            </article>

            <article className="rounded-xl border border-slate-200 p-5">
              <div className="mb-3 inline-flex rounded-lg bg-amber-100 p-2.5 text-amber-700">
                <Wifi className="h-5 w-5" />
              </div>
              <h3 className="font-medium text-slate-900">
                Understand network limitations
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Firewalls, host-based filters, virtual networks, and routing
                can change scan results. An incomplete response is not the
                same as proof that a system is offline.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* SAFETY */}
      <section className="bg-slate-950 py-12 text-white sm:py-14">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex items-start gap-4">
            <div className="rounded-xl bg-emerald-400/15 p-3 text-emerald-300">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <div>
              <h2 className="text-xl font-semibold">
                Responsible Nmap practice
              </h2>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300">
                Scan your own systems, isolated labs, or networks where you
                have explicit permission. Confirm the authorized IP ranges,
                ports, timing, and testing window before scanning a production
                network. Even ordinary scans can generate logs or trigger
                security alerts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Common questions"
            title="Nmap FAQs"
            description="Quick answers to common beginner questions."
          />

          <div className="space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-xl border border-slate-200 p-5 open:border-blue-200"
              >
                <summary className="cursor-pointer text-base font-medium text-slate-900">
                  {faq.question}
                </summary>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED TOPICS */}
      <section className="border-t border-slate-200 bg-slate-50 py-12">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Continue learning"
            title="Explore related networking topics"
            description="Build on your understanding of network discovery, traffic control, and defensive monitoring."
          />
          <RelatedTopics links={[
            {
              href:'/networking/network-tools',
              label:'Network Tools'
            },{
              href:'/networking/network-tools/wireshark',
              label:'WireShark'
            },{
              href:'/networking/fundamentals',
              label:'Fundamentals'
            }
          ]} />
        </div>
      </section>
    </main>
  );
}
