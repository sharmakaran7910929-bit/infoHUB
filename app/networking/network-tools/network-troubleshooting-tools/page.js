
import Link from "next/link";
import {
  Activity,
  AlertTriangle,
  ArrowDown,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ChevronRight,
  CircleHelp,
  Clock,
  Copy,
  Globe,
  HardDrive,
  Laptop,
  Lightbulb,
  Network,
  Router,
  Search,
  ShieldCheck,
  Terminal,
  Wifi,
  Wrench,
  Zap,
} from "lucide-react";

import RelatedTopics from "../../../../components/ContinueReading";
import AdSlot from "../../../../components/AdSlot";

const pageUrl =
  "https://pricetag.co.in/networking/network-tools/network-troubleshooting-tools";

export const metadata = {
  title: "Network Troubleshooting Tools & Commands | PriceTag Hub",
  description:
    "Diagnose Common Network Problems with Practical Windows commands, step-by-step fixes, DNS troubleshooting, Wi-Fi diagnostics, ping tests, traceroute, and network troubleshooting guides.",
  alternates: {
    canonical: "/networking/network-tools/network-troubleshooting-tools",
  },
  
};

const problems = [
  {
    number: "01",
    title: "Connected to Wi-Fi but no internet",
    icon: Wifi,
    color: "blue",
    symptoms: "Wi-Fi shows connected, but websites do not load.",
    causes: [
      "Router has lost its internet connection.",
      "Device has an invalid IP configuration.",
      "DNS resolution is failing.",
      "The ISP is experiencing an outage.",
    ],
    commands: [
      {
        command: "ipconfig",
        purpose: "Inspect the device's IP address, gateway, and adapter configuration.",
      },
      {
        command: "ping 192.168.1.1",
        purpose: "Test connectivity to your router. Replace the address with your actual default gateway.",
      },
      {
        command: "ping 1.1.1.1",
        purpose: "Test connectivity to a public IP address.",
      },
      {
        command: "nslookup example.com",
        purpose: "Check whether a DNS server can resolve a domain name.",
      },
    ],
    fixes: [
      "Check whether other devices can access the internet.",
      "Restart the router if you are authorized to manage it.",
      "Run ipconfig /all and check the default gateway and DNS server.",
      "If the gateway is unreachable, investigate Wi-Fi connectivity, the adapter, or router.",
      "If public IP connectivity works but domain names fail, investigate DNS settings.",
    ],
  },
  {
    number: "02",
    title: "Slow internet or slow Wi-Fi",
    icon: Activity,
    color: "violet",
    symptoms: "Pages take a long time to open, downloads are slow, or video buffers.",
    causes: [
      "Weak Wi-Fi signal or radio interference.",
      "Network congestion or heavy background downloads.",
      "An overloaded router or access point.",
      "ISP congestion or a slow internet plan.",
    ],
    commands: [
      {
        command: "ping -n 20 1.1.1.1",
        purpose: "Measure response times and packet loss over 20 probes on Windows.",
      },
      {
        command: "tracert 1.1.1.1",
        purpose: "Inspect the route toward a public IP address.",
      },
      {
        command: "netstat -e",
        purpose: "Display Ethernet statistics, including received and transmitted errors.",
      },
    ],
    fixes: [
      "Run a speed test near the router and compare it with a wired connection.",
      "Move closer to the access point and reduce physical obstructions.",
      "Pause large downloads and check whether performance improves.",
      "Repeat the test at different times to identify congestion.",
      "Contact your ISP if repeated tests show a problem beyond your local network.",
    ],
  },
  {
    number: "03",
    title: "DNS server not responding",
    icon: Globe,
    color: "cyan",
    symptoms: "Websites fail to resolve by name, even though the network appears connected.",
    causes: [
      "DNS server is unavailable or unreachable.",
      "Incorrect DNS configuration.",
      "Temporary resolver or DNS cache problems.",
      "Firewall or network policy interference.",
    ],
    commands: [
      {
        command: "nslookup example.com",
        purpose: "Test domain resolution using the configured DNS server.",
      },
      {
        command: "ipconfig /all",
        purpose: "Identify the DNS servers configured for the adapter.",
      },
      {
        command: "ipconfig /flushdns",
        purpose: "Clear the local Windows DNS resolver cache.",
      },
    ],
    fixes: [
      "Check whether the configured DNS server is reachable.",
      "Try resolving more than one domain to determine whether the failure is widespread.",
      "Flush the DNS cache if stale local records are suspected.",
      "If appropriate, use a trusted DNS resolver approved by your network administrator.",
      "On managed networks, do not replace internal DNS settings without authorization.",
    ],
  },
  {
    number: "04",
    title: "IP address conflict or invalid IP",
    icon: Network,
    color: "amber",
    symptoms: "Windows reports an IP conflict, or the device cannot communicate with local systems.",
    causes: [
      "Two devices are using the same manually configured IP address.",
      "DHCP server is unavailable.",
      "Incorrect subnet mask, gateway, or static configuration.",
      "The adapter has received an APIPA address beginning with 169.254.",
    ],
    commands: [
      {
        command: "ipconfig /all",
        purpose: "Inspect IPv4, subnet mask, DHCP status, and default gateway.",
      },
      {
        command: "ipconfig /release",
        purpose: "Release the current DHCP-assigned IPv4 lease.",
      },
      {
        command: "ipconfig /renew",
        purpose: "Request a new DHCP lease.",
      },
      {
        command: "arp -a",
        purpose: "Inspect the local ARP cache for IPv4-to-MAC address mappings.",
      },
    ],
    fixes: [
      "Check whether the adapter has a valid address for the local subnet.",
      "Confirm that DHCP is enabled if the network uses automatic addressing.",
      "Use ipconfig /release and ipconfig /renew only on a suitable DHCP-configured adapter.",
      "Ask the network administrator to investigate duplicate static addresses or DHCP scope exhaustion.",
    ],
  },
  {
    number: "05",
    title: "Packet loss or unstable connection",
    icon: Zap,
    color: "rose",
    symptoms: "Video calls freeze, games disconnect, or connections repeatedly time out.",
    causes: [
      "Weak wireless signal or interference.",
      "Faulty Ethernet cable or network adapter.",
      "Congested network equipment.",
      "Problems along the route to a remote destination.",
    ],
    commands: [
      {
        command: "ping -n 50 192.168.1.1",
        purpose: "Test packet loss and latency to your actual local gateway.",
      },
      {
        command: "ping -n 50 1.1.1.1",
        purpose: "Compare local connectivity with a public destination.",
      },
      {
        command: "pathping 1.1.1.1",
        purpose: "Analyze latency and packet loss across a route. Results may take several minutes.",
      },
    ],
    fixes: [
      "Compare local gateway tests with remote destination tests.",
      "If loss occurs to the gateway, investigate the local Wi-Fi or wired link.",
      "Repeat tests at different times and against more than one destination.",
      "Use a known-good cable or wired connection to isolate wireless issues.",
      "Do not conclude that a single intermediate router is faulty just because it does not answer probes.",
    ],
  },
  {
    number: "06",
    title: "Websites or services are unreachable",
    icon: Globe,
    color: "indigo",
    symptoms: "Some websites or servers fail while other internet services continue working.",
    causes: [
      "DNS resolution failure.",
      "Remote service outage.",
      "Routing problems.",
      "Firewall, proxy, or port restrictions.",
    ],
    commands: [
      {
        command: "nslookup example.com",
        purpose: "Check whether the destination hostname resolves.",
      },
      {
        command: "tracert example.com",
        purpose: "Inspect the network path toward the destination.",
      },
      {
        command: "Test-NetConnection example.com -Port 443",
        purpose: "Test TCP connectivity to HTTPS on Windows PowerShell.",
      },
      {
        command: "netstat -ano",
        purpose: "Inspect active connections and listening ports on the local computer.",
      },
    ],
    fixes: [
      "Determine whether the issue affects one domain or many domains.",
      "Check the service status using its official status page when available.",
      "Test the relevant TCP port using PowerShell.",
      "Review proxy and firewall settings if a connection is blocked.",
      "Escalate suspected remote routing or ISP issues with timestamps and diagnostic results.",
    ],
  },
  {
    number: "07",
    title: "Wi-Fi keeps disconnecting",
    icon: Router,
    color: "emerald",
    symptoms: "The wireless connection drops repeatedly or reconnects by itself.",
    causes: [
      "Weak signal, interference, or channel congestion.",
      "Outdated or unstable wireless drivers.",
      "Router firmware or access-point problems.",
      "Power-saving behavior or roaming between access points.",
    ],
    commands: [
      {
        command: "netsh wlan show interfaces",
        purpose: "Inspect wireless state, SSID, signal information, and radio details.",
      },
      {
        command: "netsh wlan show drivers",
        purpose: "Display wireless adapter and driver information.",
      },
      {
        command: "netsh wlan show wlanreport",
        purpose: "Generate a Windows wireless troubleshooting report.",
      },
    ],
    fixes: [
      "Check signal strength and test near the router.",
      "Update the wireless driver using the computer manufacturer's official source.",
      "Install router firmware updates according to the manufacturer's instructions.",
      "Inspect the Windows WLAN report for disconnect times and recorded errors.",
      "Test another access point to distinguish device problems from router problems.",
    ],
  },
  {
    number: "08",
    title: "High latency or connection timeouts",
    icon: Clock,
    color: "orange",
    symptoms: "Remote desktop sessions lag, calls are delayed, or applications time out.",
    causes: [
      "Network congestion or overloaded uplinks.",
      "Long physical distance to the remote service.",
      "Wi-Fi interference.",
      "A slow or overloaded destination service.",
    ],
    commands: [
      {
        command: "ping -n 20 1.1.1.1",
        purpose: "Measure round-trip response times and packet loss.",
      },
      {
        command: "tracert 1.1.1.1",
        purpose: "Examine the route and approximate hop-by-hop response times.",
      },
      {
        command: "pathping 1.1.1.1",
        purpose: "Collect route and packet-loss information over time.",
      },
    ],
    fixes: [
      "Compare idle network performance with performance during heavy usage.",
      "Test using Ethernet to isolate wireless issues.",
      "Compare results with another public destination.",
      "Record repeated measurements before reporting a suspected network problem.",
      "Remember that high latency at a single hop can reflect rate limiting rather than actual forwarding delay.",
    ],
  },
];

const commandGroups = [
  {
    title: "IP configuration",
    description: "Inspect or refresh network addressing.",
    icon: Network,
    commands: [
      ["ipconfig", "Show basic IP configuration."],
      ["ipconfig /all", "Show detailed adapter, DHCP, DNS, and gateway information."],
      ["ipconfig /flushdns", "Clear the Windows DNS resolver cache."],
      ["ipconfig /renew", "Request a DHCP lease renewal."],
    ],
  },
  {
    title: "Connectivity tests",
    description: "Check reachability and routing.",
    icon: Activity,
    commands: [
      ["ping 192.168.1.1", "Test your actual local gateway."],
      ["ping -n 20 1.1.1.1", "Send 20 probes to a public IP address."],
      ["tracert example.com", "Inspect the route to a hostname."],
      ["pathping example.com", "Analyze route latency and packet loss."],
    ],
  },
  {
    title: "DNS and ports",
    description: "Investigate name resolution and TCP connectivity.",
    icon: Globe,
    commands: [
      ["nslookup example.com", "Query DNS for a domain."],
      [
        "Test-NetConnection example.com -Port 443",
        "Test TCP connectivity to HTTPS in PowerShell.",
      ],
      ["netstat -ano", "Show connections, listening ports, and associated process IDs."],
      ["arp -a", "Show cached local IP-to-MAC mappings."],
    ],
  },
  {
    title: "Wireless diagnostics",
    description: "Collect Wi-Fi state and driver information.",
    icon: Wifi,
    commands: [
      ["netsh wlan show interfaces", "Inspect the current wireless connection."],
      ["netsh wlan show drivers", "Inspect wireless driver capabilities."],
      ["netsh wlan show networks", "List visible wireless networks."],
      ["netsh wlan show wlanreport", "Generate a wireless diagnostic report."],
    ],
  },
];

const workflow = [
  {
    step: "01",
    title: "Check the physical connection",
    description:
      "Verify power, cables, Wi-Fi signal, adapter status, and router indicators.",
    icon: HardDrive,
  },
  {
    step: "02",
    title: "Inspect IP configuration",
    description:
      "Run ipconfig /all and identify the device address, default gateway, and DNS server.",
    icon: Terminal,
  },
  {
    step: "03",
    title: "Test the local gateway",
    description:
      "Ping your default gateway. If this fails, investigate the local link or gateway.",
    icon: Router,
  },
  {
    step: "04",
    title: "Test external connectivity",
    description:
      "Ping a public IP address and compare results with your local gateway test.",
    icon: Globe,
  },
  {
    step: "05",
    title: "Check DNS and routing",
    description:
      "Use nslookup, tracert, or Test-NetConnection according to the observed failure.",
    icon: Search,
  },
  {
    step: "06",
    title: "Document and resolve",
    description:
      "Record timestamps, error messages, and test results before changing configurations.",
    icon: CheckCircle2,
  },
];

const faqs = [
  {
    question: "What is the first command to run when the internet stops working?",
    answer:
      "On Windows, start with ipconfig /all to inspect the network adapter, IP address, default gateway, and DNS configuration. Then test the local gateway with ping using the actual gateway address shown by ipconfig.",
  },
  {
    question: "What is the difference between ping and tracert?",
    answer:
      "Ping tests whether a destination responds to ICMP echo requests and reports round-trip times and packet loss. Tracert attempts to show the route toward a destination by using increasing IP time-to-live values.",
  },
  {
    question: "Why can ping fail even when the internet works?",
    answer:
      "A destination or firewall may block or rate-limit ICMP traffic. A failed ping alone does not prove that the destination or internet connection is unavailable. Test the actual service or TCP port as well.",
  },
  {
    question: "How can I diagnose a DNS problem?",
    answer:
      "Run nslookup example.com and inspect the DNS server being used. Compare resolution of more than one hostname. If name resolution fails but other IP connectivity tests succeed, investigate DNS configuration and reachability.",
  },
  {
    question: "Are these network commands safe to run?",
    answer:
      "Most commands shown here are diagnostic and do not intentionally change network configuration. Commands such as ipconfig /release, ipconfig /renew, and ipconfig /flushdns do change local network state or cache contents. Use administrative access only when needed and follow organizational policy.",
  },
  {
    question: "Can these commands identify every network problem?",
    answer:
      "No. Command-line diagnostics provide evidence, not a complete diagnosis. Some issues require router logs, firewall logs, packet captures, switch telemetry, ISP investigation, or application-level tests.",
  },
];

const colorStyles = {
  blue: {
    icon: "bg-blue-100 text-blue-700",
    border: "border-blue-200",
    pill: "bg-blue-50 text-blue-700",
    accent: "text-blue-700",
  },
  violet: {
    icon: "bg-violet-100 text-violet-700",
    border: "border-violet-200",
    pill: "bg-violet-50 text-violet-700",
    accent: "text-violet-700",
  },
  cyan: {
    icon: "bg-cyan-100 text-cyan-700",
    border: "border-cyan-200",
    pill: "bg-cyan-50 text-cyan-700",
    accent: "text-cyan-700",
  },
  amber: {
    icon: "bg-amber-100 text-amber-700",
    border: "border-amber-200",
    pill: "bg-amber-50 text-amber-700",
    accent: "text-amber-700",
  },
  rose: {
    icon: "bg-rose-100 text-rose-700",
    border: "border-rose-200",
    pill: "bg-rose-50 text-rose-700",
    accent: "text-rose-700",
  },
  indigo: {
    icon: "bg-indigo-100 text-indigo-700",
    border: "border-indigo-200",
    pill: "bg-indigo-50 text-indigo-700",
    accent: "text-indigo-700",
  },
  emerald: {
    icon: "bg-emerald-100 text-emerald-700",
    border: "border-emerald-200",
    pill: "bg-emerald-50 text-emerald-700",
    accent: "text-emerald-700",
  },
  orange: {
    icon: "bg-orange-100 text-orange-700",
    border: "border-orange-200",
    pill: "bg-orange-50 text-orange-700",
    accent: "text-orange-700",
  },
};

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mb-8 max-w-3xl">
      <p className="mb-2 text-sm font-bold uppercase tracking-[0.16em] text-blue-700">
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

function CommandBlock({ command, purpose }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-slate-950 p-4">
      <div className="flex items-start gap-3">
        <Terminal className="mt-1 h-4 w-4 shrink-0 text-emerald-400" />
        <div className="min-w-0">
          <code className="block break-all font-mono text-sm font-semibold text-emerald-300">
            {command}
          </code>
          <p className="mt-2 text-sm leading-6 text-slate-300">{purpose}</p>
        </div>
      </div>
    </div>
  );
}

export default function NetworkTroubleshootingToolsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TechArticle",
        headline: "Network Troubleshooting Tools and Commands",
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
            name: "Network Troubleshooting Tools",
            item: pageUrl,
          },
        ],
      },
    ],
  };

  return (
    <main className="min-h-screen bg-white text-slate-800 p-5">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-blue-100 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20">
          <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-semibold text-blue-800 shadow-sm">
                <Wrench className="h-4 w-4" />
                Practical Network Troubleshooting
              </div>

              <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Network Troubleshooting Tools &amp; Commands
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                Internet not working? Wi-Fi disconnecting? DNS errors or
                packet loss? Find the likely causes, run the right diagnostic
                commands, and follow practical steps to investigate your
                network problem.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#common-problems"
                  className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-bold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
                >
                  Find Your Problem
                  <ArrowRight className="h-4 w-4" />
                </a>

                <a
                  href="#command-reference"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 font-bold text-slate-800 transition hover:border-blue-400 hover:text-blue-700"
                >
                  <Terminal className="h-4 w-4" />
                  View Commands
                </a>
              </div>

              <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-600">
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                  Beginner-friendly explanations
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                  Windows diagnostic commands
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                  Step-by-step investigation
                </span>
              </div>
            </div>

            {/* Visual diagnostic panel */}
            <div className="rounded-3xl border border-blue-100 bg-white p-5 shadow-xl shadow-blue-900/5 sm:p-7">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold text-slate-500">
                    NETWORK DIAGNOSTICS
                  </p>
                  <h2 className="mt-1 text-xl font-semibold text-slate-900">
                    Follow the connection
                  </h2>
                </div>
                <div className="rounded-xl bg-blue-100 p-3 text-blue-700">
                  <Network className="h-6 w-6" />
                </div>
              </div>

              <div className="mt-7 space-y-0">
                {[
                  {
                    label: "Your device",
                    detail: "IP address and adapter",
                    icon: Laptop,
                    color: "bg-blue-100 text-blue-700",
                  },
                  {
                    label: "Wi-Fi / Router",
                    detail: "Local gateway reachability",
                    icon: Router,
                    color: "bg-violet-100 text-violet-700",
                  },
                  {
                    label: "DNS resolver",
                    detail: "Domain name resolution",
                    icon: Search,
                    color: "bg-cyan-100 text-cyan-700",
                  },
                  {
                    label: "Internet service",
                    detail: "Remote host and application",
                    icon: Globe,
                    color: "bg-emerald-100 text-emerald-700",
                  },
                ].map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div key={item.label}>
                      <div className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-4">
                        <div
                          className={`rounded-xl p-3 ${item.color}`}
                        >
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="font-bold text-slate-900">
                            {item.label}
                          </p>
                          <p className="mt-1 text-sm text-slate-500">
                            {item.detail}
                          </p>
                        </div>
                        <ChevronRight className="ml-auto h-4 w-4 text-slate-400" />
                      </div>
                      {index < 3 && (
                        <div className="flex justify-center py-1.5">
                          <ArrowDown className="h-4 w-4 text-blue-500" />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="mt-5 flex gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4">
                <Lightbulb className="h-5 w-5 shrink-0 text-amber-600" />
                <p className="text-sm leading-6 text-amber-900">
                  <strong>Diagnostic tip:</strong> Start with your local
                  gateway, then test an external IP address and DNS. Compare
                  results instead of guessing at the cause.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="py-6">
          <AdSlot />
        </div>
      </div>

      {/* QUICK NAVIGATION */}
      <section className="mx-auto max-w-7xl px-5 py-10 sm:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              href: "#common-problems",
              title: "Common problems",
              detail: "Symptoms, causes, and solutions",
              icon: CircleHelp,
              color: "text-blue-700 bg-blue-50",
            },
            {
              href: "#troubleshooting-process",
              title: "Troubleshooting steps",
              detail: "Follow a logical diagnostic process",
              icon: Search,
              color: "text-violet-700 bg-violet-50",
            },
            {
              href: "#command-reference",
              title: "Command reference",
              detail: "Useful commands and explanations",
              icon: Terminal,
              color: "text-emerald-700 bg-emerald-50",
            },
            {
              href: "#safety-notes",
              title: "Safety notes",
              detail: "Understand commands before using them",
              icon: ShieldCheck,
              color: "text-amber-700 bg-amber-50",
            },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <a
                key={item.href}
                href={item.href}
                className="group rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-900/5"
              >
                <div className={`mb-4 inline-flex rounded-xl p-3 ${item.color}`}>
                  <Icon className="h-5 w-5" />
                </div>
                <h2 className="font-semibold text-slate-900 group-hover:text-blue-700">
                  {item.title}
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {item.detail}
                </p>
              </a>
            );
          })}
        </div>
      </section>

      {/* COMMON PROBLEMS */}
      <section
        id="common-problems"
        className="scroll-mt-20 bg-slate-50 py-16 sm:py-20"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Problem-solving library"
            title="What network problem are you facing?"
            description="Choose the symptom that best matches your situation. Each guide explains common causes, commands to run, and practical next steps. These checks help narrow down the cause; they do not guarantee a single diagnosis."
          />

          <div className="grid gap-6 lg:grid-cols-2">
            {problems.map((problem) => {
              const Icon = problem.icon;
              const colors = colorStyles[problem.color];

              return (
                <article
                  key={problem.number}
                  className={`overflow-hidden rounded-3xl border ${colors.border} bg-white shadow-sm transition hover:shadow-lg hover:shadow-slate-900/5`}
                >
                  <div className="border-b border-slate-100 p-6 sm:p-7">
                    <div className="flex items-start gap-4">
                      <div className={`rounded-2xl p-3 ${colors.icon}`}>
                        <Icon className="h-6 w-6" />
                      </div>

                      <div className="min-w-0 flex-1">
                        <p
                          className={`text-xs font-semibold tracking-[0.16em] ${colors.accent}`}
                        >
                          PROBLEM {problem.number}
                        </p>
                        <h3 className="mt-2 text-xl font-semibold leading-snug text-slate-900">
                          {problem.title}
                        </h3>
                        <p className="mt-3 leading-7 text-slate-600">
                          {problem.symptoms}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-7 p-6 sm:p-7">
                    <div>
                      <h4 className="mb-3 flex items-center gap-2 font-bold text-slate-900">
                        <AlertTriangle className="h-4 w-4 text-amber-500" />
                        Possible causes
                      </h4>
                      <ul className="space-y-2.5">
                        {problem.causes.map((cause) => (
                          <li
                            key={cause}
                            className="flex items-start gap-3 text-sm leading-6 text-slate-600"
                          >
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
                            {cause}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="mb-3 flex items-center gap-2 font-bold text-slate-900">
                        <Terminal className="h-4 w-4 text-blue-600" />
                        Commands to investigate
                      </h4>
                      <div className="space-y-3">
                        {problem.commands.map((item) => (
                          <CommandBlock
                            key={item.command}
                            command={item.command}
                            purpose={item.purpose}
                          />
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="mb-3 flex items-center gap-2 font-bold text-slate-900">
                        <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                        Step-by-step solutions
                      </h4>
                      <ol className="space-y-3">
                        {problem.fixes.map((fix, index) => (
                          <li
                            key={fix}
                            className="flex items-start gap-3 text-sm leading-6 text-slate-600"
                          >
                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-xs font-semibold text-emerald-700">
                              {index + 1}
                            </span>
                            <span>{fix}</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="py-6">
          <AdSlot />
        </div>
      </div>

      {/* TROUBLESHOOTING PROCESS */}
      <section
        id="troubleshooting-process"
        className="scroll-mt-20 py-16 sm:py-20"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="A repeatable method"
            title="How to troubleshoot a network systematically"
            description="Work from the device outward. Testing each layer helps you avoid changing router, DNS, or firewall settings before you have evidence of the actual problem."
          />

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {workflow.map((item, index) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.step}
                  className="relative rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-blue-300 hover:shadow-lg hover:shadow-blue-900/5"
                >
                  <div className="mb-5 flex items-center justify-between">
                    <span className="text-3xl font-bold text-100">
                      {item.step}
                    </span>
                    <div className="rounded-xl bg-blue-50 p-3 text-blue-700">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>

                  {index < workflow.length - 1 && (
                    <div className="mt-5 flex items-center gap-2 text-xs font-semibold text-blue-700">
                      <ArrowRight className="h-4 w-4" />
                      Continue to next check
                    </div>
                  )}
                </article>
              );
            })}
          </div>

          <div className="mt-8 rounded-2xl border border-blue-200 bg-blue-50 p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-white p-3 text-blue-700 shadow-sm">
                <Lightbulb className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  Example: identify where connectivity fails
                </h3>
                <p className="mt-2 leading-7 text-slate-700">
                  If the device cannot reach its default gateway, investigate
                  the local network first. If the gateway responds but an
                  external IP does not, investigate routing or internet access.
                  If the external IP responds but a hostname fails to resolve,
                  investigate DNS. These are diagnostic clues, not absolute
                  rules: ICMP filtering and remote service policies can affect
                  the results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMMAND REFERENCE */}
      <section
        id="command-reference"
        className="scroll-mt-20 bg-slate-950 py-16 text-white sm:py-20"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mb-10 max-w-3xl">
            <p className="mb-2 text-sm font-bold uppercase tracking-[0.16em] text-cyan-400">
              Windows command reference
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Essential network diagnostic commands
            </h2>
            <p className="mt-4 leading-7 text-slate-300">
              Open Command Prompt or PowerShell, enter a command, and read its
              output. The examples use Windows syntax unless specifically
              stated. Replace example domains and gateway addresses with
              appropriate values for your network.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {commandGroups.map((group) => {
              const Icon = group.icon;

              return (
                <article
                  key={group.title}
                  className="rounded-2xl border border-slate-700 bg-slate-900 p-5 sm:p-6"
                >
                  <div className="mb-5 flex items-center gap-3">
                    <div className="rounded-xl bg-blue-500/15 p-3 text-blue-300">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">
                        {group.title}
                      </h3>
                      <p className="mt-1 text-sm text-slate-400">
                        {group.description}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {group.commands.map(([command, description]) => (
                      <div
                        key={command}
                        className="rounded-xl border border-slate-800 bg-black/30 p-4"
                      >
                        <code className="block break-all font-mono text-sm font-semibold text-emerald-300">
                          {command}
                        </code>
                        <p className="mt-2 text-sm leading-6 text-slate-400">
                          {description}
                        </p>
                      </div>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>

          <div
            id="safety-notes"
            className="mt-8 scroll-mt-20 rounded-2xl border border-amber-400/30 bg-amber-400/10 p-5 sm:p-6"
          >
            <div className="flex items-start gap-3">
              <ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-amber-300" />
              <div>
                <h3 className="font-semibold text-amber-200">
                  Before running network commands
                </h3>
                <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-300">
                  <li>
                    • Use your actual gateway address; 192.168.1.1 is only an
                    example.
                  </li>
                  <li>
                    • Run Test-NetConnection in PowerShell, not the standard
                    Command Prompt.
                  </li>
                  <li>
                    • Avoid resetting the entire network stack or changing
                    firewall settings before collecting diagnostic evidence.
                  </li>
                  <li>
                    • Commands that release a DHCP lease may temporarily
                    interrupt connectivity.
                  </li>
                  <li>
                    • Run tests only on systems and networks you own or are
                    authorized to troubleshoot.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LEARNING SECTION */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Build your networking knowledge"
            title="Learn the concepts behind the commands"
            description="Troubleshooting becomes easier when you understand how addressing, DNS, routing, and network security work together."
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <Link
              href="/networking/ip-addressing"
              className="group rounded-2xl border border-slate-200 p-6 transition hover:border-blue-300 hover:shadow-lg"
            >
              <Network className="h-7 w-7 text-blue-600" />
              <h3 className="mt-4 font-semibold text-slate-900 group-hover:text-blue-700">
                IP Addressing
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Understand IP addresses, subnets, gateways, and DHCP.
              </p>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-blue-700">
                Explore topic <ArrowRight className="h-4 w-4" />
              </span>
            </Link>

            <Link
              href="/networking/network-security/firewalls-and-ips"
              className="group rounded-2xl border border-slate-200 p-6 transition hover:border-blue-300 hover:shadow-lg"
            >
              <ShieldCheck className="h-7 w-7 text-emerald-600" />
              <h3 className="mt-4 font-semibold text-slate-900 group-hover:text-blue-700">
                Firewalls and IPS
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Learn how traffic filtering and intrusion prevention affect
                network connections.
              </p>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-blue-700">
                Explore topic <ArrowRight className="h-4 w-4" />
              </span>
            </Link>

            <Link
              href="/networking/network-security/intrusion-detection"
              className="group rounded-2xl border border-slate-200 p-6 transition hover:border-blue-300 hover:shadow-lg"
            >
              <Activity className="h-7 w-7 text-violet-600" />
              <h3 className="mt-4 font-semibold text-slate-900 group-hover:text-blue-700">
                Intrusion Detection
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Discover how monitoring systems identify suspicious network
                activity.
              </p>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-blue-700">
                Explore topic <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          </div>

          
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-slate-200 bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Frequently asked questions"
            title="Network troubleshooting FAQs"
            description="Quick answers to common questions about diagnostic commands and network problems."
          />

          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-slate-200 bg-white p-5 open:border-blue-200 open:shadow-sm sm:p-6"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-slate-900">
                  <span>{faq.question}</span>
                  <ChevronRight className="h-5 w-5 shrink-0 text-blue-600 transition group-open:rotate-90" />
                </summary>
                <p className="mt-4 border-t border-slate-100 pt-4 text-sm leading-7 text-slate-600">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

    

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="pb-8">
          <AdSlot />
        </div>
      </div>

      <div className="mt-8">
            <RelatedTopics title='Explore More About Networking Tools' 
            links={[
                {href:'/networking/network-tools',label:'Network Tools'},
                {href:'/networking/network-tools/nmap',label:'Nmap'},
                {href:'/networking/network-tools/wireshark',label:'WireShark'},
            ]}
            />
          </div>
    </main>
  );
}
