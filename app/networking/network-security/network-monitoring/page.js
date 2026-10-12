
import Link from "next/link";
import RelatedTopics from "../../../../components/ContinueReading";
import AdSlot from "../../../../components/AdSlot";

const pageUrl =
  "https://pricetag.co.in/networking/network-security/network-monitoring";

export const metadata = {
  title: "Network Monitoring: Tools, Methods and Security Explained",
  description:
    "Learn how network monitoring works, what traffic, logs and performance metrics reveal, how security analysts investigate suspicious activity, and which monitoring practices help protect networks.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Network Monitoring: A Practical Guide",
    description:
      "Understand network traffic monitoring, logs, performance metrics, security alerts and defensive monitoring practices.",
    url: pageUrl,
    type: "article",
  },
};

const faqs = [
  {
    question: "What is network monitoring?",
    answer:
      "Network monitoring is the process of observing network devices, connections, traffic, availability and performance to understand how a network is operating and identify problems or suspicious activity.",
  },
  {
    question: "Why is network monitoring important for cybersecurity?",
    answer:
      "Network monitoring can help defenders identify unexpected connections, unusual traffic volumes, repeated connection failures, service disruptions and other signs that deserve investigation. It supports security operations but does not guarantee that every attack will be detected.",
  },
  {
    question: "What is the difference between network monitoring and an IDS?",
    answer:
      "Network monitoring is a broad practice that includes availability, performance, traffic analysis and security observation. An intrusion detection system focuses specifically on identifying potentially malicious or unauthorized activity and generating alerts.",
  },
  {
    question: "What is SNMP used for in network monitoring?",
    answer:
      "Simple Network Management Protocol (SNMP) allows monitoring systems to collect information from supported network devices, such as interface status, traffic counters and device health. SNMP monitoring is useful for operational visibility but is not, by itself, a complete security monitoring solution.",
  },
  {
    question: "Can network monitoring reveal encrypted traffic?",
    answer:
      "Monitoring can often reveal metadata such as connection endpoints, ports, timing, traffic volume and protocol information. Encryption generally protects the contents of communications, so monitoring metadata does not automatically reveal the messages or files being transferred.",
  },
  {
    question: "Which tools can beginners use to learn network monitoring?",
    answer:
      "Beginners can learn with Wireshark for packet analysis, Zeek for network activity logs, and Zabbix or Prometheus-based monitoring setups for supported operational metrics. Use a personal lab or a network you are explicitly authorized to monitor.",
  },
  {
    question: "Does network monitoring automatically block attackers?",
    answer:
      "No. Monitoring generally observes activity and reports findings. Blocking usually requires an appropriately configured firewall, intrusion prevention system, access control, or another response mechanism.",
  },
];

const relatedTopics = [
  {
    label: "Network Security",
    href: "/networking/network-security",
    description:
      "Explore the principles and controls used to protect networks.",
  },
  {
    label: "Firewalls and IPS",
    href: "/networking/network-security/firewalls-and-ips",
    description:
      "Learn how network traffic is filtered and potentially malicious traffic is prevented.",
  },
  {
    label: "Intrusion Detection",
    href: "/networking/network-security/intrusion-detection",
    description:
      "Understand how IDS tools identify suspicious activity and generate alerts.",
  },
  {
    label: "Wireless Security",
    href: "/networking/network-security/wireless-security",
    description:
      "Learn about Wi-Fi risks and the controls used to protect wireless networks.",
  },
];

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mb-7 max-w-3xl">
      {eyebrow && (
        <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-blue-700">
          {eyebrow}
        </p>
      )}

      <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
        {title}
      </h2>

      {description && (
        <p className="mt-3 leading-7 text-slate-600">{description}</p>
      )}
    </div>
  );
}

function DiagramNode({ color = "blue", label, title, description }) {
  const colors = {
    blue: "border-blue-200 bg-blue-50 text-blue-950",
    violet: "border-violet-200 bg-violet-50 text-violet-950",
    green: "border-emerald-200 bg-emerald-50 text-emerald-950",
    amber: "border-amber-200 bg-amber-50 text-amber-950",
    red: "border-rose-200 bg-rose-50 text-rose-950",
    slate: "border-slate-200 bg-white text-slate-900",
  };

  return (
    <div
      className={`rounded-2xl border p-4 text-center shadow-sm ${
        colors[color] || colors.blue
      }`}
    >
      {label && (
        <p className="mb-1 text-xs font-bold uppercase tracking-wide opacity-70">
          {label}
        </p>
      )}

      <h3 className="font-bold">{title}</h3>

      {description && (
        <p className="mt-1 text-sm leading-6 opacity-80">{description}</p>
      )}
    </div>
  );
}

function FlowArrow({ label = "Information flows" }) {
  return (
    <div className="flex flex-col items-center justify-center py-2">
      <span className="text-xs font-medium text-slate-500">{label}</span>
      <span aria-hidden="true" className="text-2xl font-bold text-blue-500">
        ↓
      </span>
    </div>
  );
}

function InfoCard({ title, description, color = "blue" }) {
  const colors = {
    blue: "border-t-blue-500",
    violet: "border-t-violet-500",
    green: "border-t-emerald-500",
    amber: "border-t-amber-500",
  };

  return (
    <div
      className={`rounded-2xl border border-slate-200 border-t-4 ${
        colors[color] || colors.blue
      } bg-white p-5 shadow-sm`}
    >
      <h3 className="text-lg font-bold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm leading-7 text-slate-600">{description}</p>
    </div>
  );
}

export default function NetworkMonitoringPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: "Network Monitoring: Tools, Methods and Security Explained",
    description: metadata.description,
    url: pageUrl,
    author: {
      "@type": "Organization",
      name: "K2S INFOTECH",
    },
    publisher: {
      "@type": "Organization",
      name: "K2S INFOTECH",
    },
    mainEntityOfPage: pageUrl,
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
    <>
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

      <main className="min-h-screen bg-slate-50 text-slate-800">
        {/* Introduction */}
        <section className="border-b border-blue-100 bg-gradient-to-br from-blue-50 via-white to-violet-50">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <p className="mb-4 inline-flex rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-semibold text-blue-700">
                Network Security · Visibility and Analysis
              </p>

              <h1 className="max-w-3xl text-3xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl">
                Network Monitoring: How to Observe, Understand and Protect a
                Network
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                Network monitoring helps administrators understand whether
                devices are available, connections are working correctly, and
                traffic is behaving as expected. For security defenders, it
                also provides evidence that can help uncover suspicious
                activity and investigate incidents.
              </p>

              <div className="mt-7 flex flex-wrap gap-3 text-sm">
                <span className="rounded-lg bg-blue-100 px-3 py-2 font-medium text-blue-800">
                  Traffic analysis
                </span>
                <span className="rounded-lg bg-violet-100 px-3 py-2 font-medium text-violet-800">
                  Performance
                </span>
                <span className="rounded-lg bg-emerald-100 px-3 py-2 font-medium text-emerald-800">
                  Security visibility
                </span>
              </div>
            </div>

            {/* Decorative monitoring illustration */}
            <div className="rounded-3xl border border-blue-100 bg-white p-5 shadow-lg shadow-blue-100/60 sm:p-7">
              <div className="flex items-center justify-between">
                <h2 className="font-bold text-slate-900">
                  Network overview
                </h2>
                <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-800">
                  Concept diagram
                </span>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-blue-50 p-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-xl text-white">
                    ↔
                  </div>
                  <p className="mt-3 text-sm font-bold text-blue-950">
                    Network traffic
                  </p>
                  <p className="mt-1 text-xs leading-5 text-blue-900">
                    Connections and data flows
                  </p>
                </div>

                <div className="rounded-xl bg-violet-50 p-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-600 text-xl text-white">
                    ◉
                  </div>
                  <p className="mt-3 text-sm font-bold text-violet-950">
                    Device health
                  </p>
                  <p className="mt-1 text-xs leading-5 text-violet-900">
                    Availability and performance
                  </p>
                </div>
              </div>

              <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-800">
                  Example metrics
                </p>

                <div className="mt-4 space-y-4">
                  <div>
                    <div className="mb-1 flex justify-between text-xs text-slate-600">
                      <span>Bandwidth usage</span>
                      <span>Illustrative</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-slate-200">
                      <div className="h-full w-3/4 rounded-full bg-blue-500" />
                    </div>
                  </div>

                  <div>
                    <div className="mb-1 flex justify-between text-xs text-slate-600">
                      <span>Latency</span>
                      <span>Illustrative</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-slate-200">
                      <div className="h-full w-2/5 rounded-full bg-violet-500" />
                    </div>
                  </div>

                  <div>
                    <div className="mb-1 flex justify-between text-xs text-slate-600">
                      <span>Device availability</span>
                      <span>Illustrative</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-slate-200">
                      <div className="h-full w-5/6 rounded-full bg-emerald-500" />
                    </div>
                  </div>
                </div>
              </div>

              <p className="mt-4 text-sm leading-6 text-slate-500">
                These graphics are illustrative only. They do not display live
                network measurements.
              </p>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
          {/* Contents */}
          <nav
            aria-label="On this page"
            className="mb-12 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7"
          >
            <h2 className="text-lg font-bold text-slate-900">On this page</h2>

            <div className="mt-4 grid gap-3 text-sm sm:grid-cols-2 lg:grid-cols-3">
              {[
                ["#basics", "What is network monitoring?"],
                ["#workflow", "How monitoring works"],
                ["#metrics", "Important network metrics"],
                ["#security", "Monitoring for cybersecurity"],
                ["#tools", "Common monitoring tools"],
                ["#logs", "Understanding network logs"],
                ["#investigation", "Investigating unusual activity"],
                ["#best-practices", "Monitoring best practices"],
                ["#faqs", "Frequently asked questions"],
              ].map(([href, label]) => (
                <a
                  key={href}
                  href={href}
                  className="rounded-lg bg-slate-50 px-3 py-3 text-slate-700 transition hover:bg-blue-50 hover:text-blue-800"
                >
                  {label} →
                </a>
              ))}
            </div>
          </nav>

          {/* 1. Fundamentals */}
          <section id="basics" className="mb-14 scroll-mt-24">
            <SectionHeading
              eyebrow="01 · Fundamentals"
              title="What is network monitoring?"
              description="Network monitoring is the ongoing observation of network devices, connections, traffic and services. It helps teams identify outages, performance problems and activity that needs closer inspection."
            />

            <div className="grid gap-5 md:grid-cols-3">
              <InfoCard
                title="Availability monitoring"
                description="Checks whether routers, switches, servers and other important devices or services are reachable and operating."
                color="blue"
              />

              <InfoCard
                title="Performance monitoring"
                description="Measures bandwidth, latency, packet loss, interface utilization and other indicators that affect network quality."
                color="violet"
              />

              <InfoCard
                title="Security monitoring"
                description="Examines relevant traffic, logs and events for unusual patterns, unauthorized connections or other potential warning signs."
                color="green"
              />
            </div>

            <div className="mt-6 rounded-2xl border border-blue-100 bg-blue-50 p-5 leading-7 text-blue-950">
              <span className="font-bold">Practical example:</span> if a
              business application becomes slow, monitoring data may reveal
              packet loss, a saturated network link, a failed service or
              another contributing issue. The measurements help narrow the
              investigation; they do not always identify the root cause by
              themselves.
            </div>
          </section>

          {/* Diagram 1 */}
          <section className="mb-14">
            <div className="overflow-hidden rounded-3xl border border-blue-100 bg-white shadow-sm">
              <div className="bg-gradient-to-r from-blue-700 to-violet-700 px-6 py-5 text-white sm:px-8">
                <p className="text-sm font-semibold text-blue-100">
                  VISUAL DIAGRAM 01
                </p>
                <h2 className="mt-1 text-xl font-bold sm:text-2xl">
                  How network monitoring works
                </h2>
                <p className="mt-2 text-sm leading-6 text-blue-100">
                  Monitoring systems collect observations, organize them and
                  help people identify problems.
                </p>
              </div>

              <div className="p-5 sm:p-8">
                <div className="grid gap-3 md:grid-cols-3 md:items-center">
                  <DiagramNode
                    color="blue"
                    label="Step 1"
                    title="Network devices"
                    description="Routers, switches, servers, endpoints and connections"
                  />

                  <div className="flex justify-center text-3xl font-bold text-blue-500">
                    <span className="md:hidden">↓</span>
                    <span className="hidden md:inline">→</span>
                  </div>

                  <DiagramNode
                    color="violet"
                    label="Step 2"
                    title="Data collection"
                    description="Metrics, logs, flow records or selected packet captures"
                  />
                </div>

                <div className="mx-auto max-w-3xl">
                  <FlowArrow label="Collected information is processed" />

                  <DiagramNode
                    color="amber"
                    label="Step 3"
                    title="Monitoring dashboard and alerts"
                    description="Measurements, trends, events and configured thresholds"
                  />

                  <FlowArrow label="Findings need interpretation" />

                  <DiagramNode
                    color="green"
                    label="Step 4"
                    title="Administrator or security analyst"
                    description="Investigates the evidence and takes appropriate action"
                  />
                </div>

                <p className="mt-5 text-sm leading-6 text-slate-500">
                  Monitoring architectures vary. Some systems collect metrics
                  using SNMP, others process logs or flow records, and packet
                  analysis tools inspect traffic that is available to them.
                </p>
              </div>
            </div>
          </section>

          <AdSlot />

          {/* 2. Workflow */}
          <section id="workflow" className="mb-14 scroll-mt-24">
            <SectionHeading
              eyebrow="02 · The process"
              title="The main stages of network monitoring"
              description="Effective monitoring requires more than installing a dashboard. Teams need useful data, sensible thresholds, context and a process for responding to findings."
            />

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <InfoCard
                title="Collect"
                description="Gather supported device metrics, logs, flow records or packets from approved monitoring points."
                color="blue"
              />

              <InfoCard
                title="Analyze"
                description="Compare current measurements with expected behavior, baselines and relevant historical data."
                color="violet"
              />

              <InfoCard
                title="Alert"
                description="Notify the right people when a configured condition or important event requires attention."
                color="amber"
              />

              <InfoCard
                title="Respond"
                description="Investigate the cause, document findings and apply an appropriate operational or security response."
                color="green"
              />
            </div>

            <div className="mt-7 rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="text-lg font-bold text-slate-900">
                Example: a network link becomes overloaded
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                A monitoring system observes that a network interface is
                experiencing sustained high utilization. The administrator
                checks traffic patterns, recent configuration changes and
                whether a scheduled backup or legitimate workload explains
                the increase. If the traffic is unexpected, the investigation
                can move into security analysis.
              </p>

              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                <div className="rounded-xl bg-blue-50 p-4">
                  <p className="font-semibold text-blue-900">Measurement</p>
                  <p className="mt-2 text-sm leading-6 text-blue-950">
                    Interface utilization rises
                  </p>
                </div>

                <div className="rounded-xl bg-amber-50 p-4">
                  <p className="font-semibold text-amber-900">Investigation</p>
                  <p className="mt-2 text-sm leading-6 text-amber-950">
                    Review traffic and related events
                  </p>
                </div>

                <div className="rounded-xl bg-emerald-50 p-4">
                  <p className="font-semibold text-emerald-900">Resolution</p>
                  <p className="mt-2 text-sm leading-6 text-emerald-950">
                    Address the verified cause
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 3. Metrics */}
          <section id="metrics" className="mb-14 scroll-mt-24">
            <SectionHeading
              eyebrow="03 · Measurements"
              title="Important network monitoring metrics"
              description="Different measurements answer different questions. The right combination depends on the network, services and risks being monitored."
            />

            <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
              <table className="w-full min-w-[620px] border-collapse text-left text-sm">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="p-4 font-semibold">Metric</th>
                    <th className="p-4 font-semibold">What it tells you</th>
                    <th className="p-4 font-semibold">Why it matters</th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-slate-100">
                  <tr>
                    <td className="p-4 font-semibold text-slate-900">
                      Bandwidth utilization
                    </td>
                    <td className="p-4 text-slate-600">
                      How much link capacity is being used
                    </td>
                    <td className="p-4 text-slate-600">
                      Helps identify congestion or unusual traffic volume
                    </td>
                  </tr>

                  <tr>
                    <td className="p-4 font-semibold text-slate-900">
                      Latency
                    </td>
                    <td className="p-4 text-slate-600">
                      Time taken for data to travel between endpoints
                    </td>
                    <td className="p-4 text-slate-600">
                      Helps investigate slow applications and connections
                    </td>
                  </tr>

                  <tr>
                    <td className="p-4 font-semibold text-slate-900">
                      Packet loss
                    </td>
                    <td className="p-4 text-slate-600">
                      Packets that fail to reach their destination
                    </td>
                    <td className="p-4 text-slate-600">
                      Can indicate congestion, link issues or other faults
                    </td>
                  </tr>

                  <tr>
                    <td className="p-4 font-semibold text-slate-900">
                      Availability
                    </td>
                    <td className="p-4 text-slate-600">
                      Whether a monitored device or service is reachable
                    </td>
                    <td className="p-4 text-slate-600">
                      Helps identify outages and service interruptions
                    </td>
                  </tr>

                  <tr>
                    <td className="p-4 font-semibold text-slate-900">
                      Connection patterns
                    </td>
                    <td className="p-4 text-slate-600">
                      Observed endpoints, ports, protocols and connection rates
                    </td>
                    <td className="p-4 text-slate-600">
                      May help reveal unexpected communication
                    </td>
                  </tr>

                  <tr>
                    <td className="p-4 font-semibold text-slate-900">
                      Device and system logs
                    </td>
                    <td className="p-4 text-slate-600">
                      Events recorded by devices, services and applications
                    </td>
                    <td className="p-4 text-slate-600">
                      Supports troubleshooting and security investigations
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5 leading-7 text-amber-950">
              <span className="font-bold">Important:</span> an unusual metric
              is a clue, not proof of an attack. High bandwidth may be caused
              by a legitimate backup, and latency may result from congestion
              rather than malicious activity. Check context before drawing
              conclusions.
            </div>
          </section>

          {/* 4. Security */}
          <section id="security" className="mb-14 scroll-mt-24">
            <SectionHeading
              eyebrow="04 · Defensive security"
              title="How network monitoring helps cybersecurity"
              description="Monitoring gives defenders visibility into activity that may otherwise be difficult to understand. Its value depends on what data is collected and how findings are investigated."
            />

            <div className="grid gap-5 md:grid-cols-2">
              <InfoCard
                title="Unexpected outbound traffic"
                description="A workstation begins sending substantially more data than expected. A defender checks the destination, application, user activity and available endpoint evidence."
                color="blue"
              />

              <InfoCard
                title="Repeated connection attempts"
                description="Logs show repeated attempts to connect to a service or multiple ports. The analyst checks whether the behavior is expected and whether the source is authorized."
                color="violet"
              />

              <InfoCard
                title="Unexpected device communication"
                description="A device communicates with a server or external destination that is unusual for its role. The finding may justify further investigation."
                color="amber"
              />

              <InfoCard
                title="Changes outside normal hours"
                description="A sensitive device or service generates events at an unusual time. The team compares them with maintenance schedules and approved activity."
                color="green"
              />
            </div>

            {/* Colorful security diagram */}
            <div className="mt-7 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              <div className="bg-gradient-to-r from-violet-700 to-blue-700 p-6 text-white sm:p-8">
                <p className="text-sm font-semibold text-violet-100">
                  VISUAL DIAGRAM 02
                </p>
                <h3 className="mt-1 text-xl font-bold sm:text-2xl">
                  From unusual activity to a security decision
                </h3>
                <p className="mt-2 leading-7 text-blue-100">
                  Monitoring helps surface evidence. Investigation determines
                  what that evidence means.
                </p>
              </div>

              <div className="p-5 sm:p-8">
                <DiagramNode
                  color="blue"
                  title="Observed network activity"
                  description="Traffic records, device metrics or system events"
                />

                <FlowArrow />

                <DiagramNode
                  color="violet"
                  title="Monitoring rule or analysis"
                  description="An unusual pattern or configured threshold is identified"
                />

                <FlowArrow label="A finding requires context" />

                <div className="grid gap-3 sm:grid-cols-2">
                  <DiagramNode
                    color="green"
                    title="Expected activity"
                    description="Document the finding and adjust monitoring if appropriate"
                  />

                  <DiagramNode
                    color="amber"
                    title="Potential security concern"
                    description="Gather more evidence and follow incident-response procedures"
                  />
                </div>

                <p className="mt-5 text-sm leading-6 text-slate-500">
                  This is a simplified workflow. Monitoring alerts may be
                  benign, operational, security-related or inconclusive.
                </p>
              </div>
            </div>

            <p className="mt-5 leading-7 text-slate-600">
              To understand a more specialized detection system, read{" "}
              <Link
                href="/networking/network-security/intrusion-detection"
                className="font-semibold text-blue-700 underline underline-offset-4 hover:text-blue-900"
              >
                Intrusion Detection Systems (IDS)
              </Link>
              .
            </p>
          </section>

          <AdSlot />

          {/* 5. Tools */}
          <section id="tools" className="mb-14 scroll-mt-24">
            <SectionHeading
              eyebrow="05 · Tools and technologies"
              title="Common network monitoring tools"
              description="Different tools serve different purposes. Packet analysis, network telemetry, logs and performance monitoring are complementary capabilities, not interchangeable products."
            />

            <div className="grid gap-5 md:grid-cols-2">
              <div className="rounded-2xl border border-blue-200 bg-white p-6 shadow-sm">
                <div className="mb-4 inline-flex rounded-lg bg-blue-100 px-3 py-2 text-sm font-bold text-blue-800">
                  Packet analysis
                </div>

                <h3 className="text-xl font-bold text-slate-900">
                  <a
                    href="https://www.wireshark.org/"
                    target="_blank"
                    rel="noreferrer"
                    className="underline decoration-blue-300 underline-offset-4 hover:text-blue-700"
                  >
                    Wireshark
                  </a>
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  Wireshark lets users inspect captured packets and examine
                  protocol details. It is useful for learning how network
                  communication works and troubleshooting problems.
                </p>

                <p className="mt-4 text-sm leading-7 text-slate-500">
                  Best suited for: detailed packet inspection and protocol
                  troubleshooting.
                </p>
              </div>

              <div className="rounded-2xl border border-violet-200 bg-white p-6 shadow-sm">
                <div className="mb-4 inline-flex rounded-lg bg-violet-100 px-3 py-2 text-sm font-bold text-violet-800">
                  Network analysis
                </div>

                <h3 className="text-xl font-bold text-slate-900">
                  <a
                    href="https://zeek.org/"
                    target="_blank"
                    rel="noreferrer"
                    className="underline decoration-violet-300 underline-offset-4 hover:text-violet-700"
                  >
                    Zeek
                  </a>
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  Zeek is a network security monitoring platform that
                  generates structured records about observed network
                  activity. Analysts can use those records to investigate
                  connections and communication patterns.
                </p>

                <p className="mt-4 text-sm leading-7 text-slate-500">
                  Best suited for: network activity analysis and security
                  monitoring workflows.
                </p>
              </div>

              <div className="rounded-2xl border border-emerald-200 bg-white p-6 shadow-sm">
                <div className="mb-4 inline-flex rounded-lg bg-emerald-100 px-3 py-2 text-sm font-bold text-emerald-800">
                  Infrastructure monitoring
                </div>

                <h3 className="text-xl font-bold text-slate-900">
                  <a
                    href="https://www.zabbix.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="underline decoration-emerald-300 underline-offset-4 hover:text-emerald-700"
                  >
                    Zabbix
                  </a>
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  Zabbix monitors supported infrastructure and services,
                  collecting metrics and generating alerts based on
                  configured conditions.
                </p>

                <p className="mt-4 text-sm leading-7 text-slate-500">
                  Best suited for: device health, availability, performance
                  metrics and operational alerting.
                </p>
              </div>

              <div className="rounded-2xl border border-amber-200 bg-white p-6 shadow-sm">
                <div className="mb-4 inline-flex rounded-lg bg-amber-100 px-3 py-2 text-sm font-bold text-amber-800">
                  Metrics and dashboards
                </div>

                <h3 className="text-xl font-bold text-slate-900">
                  <a
                    href="https://prometheus.io/"
                    target="_blank"
                    rel="noreferrer"
                    className="underline decoration-amber-300 underline-offset-4 hover:text-amber-700"
                  >
                    Prometheus
                  </a>
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  Prometheus collects and stores time-series metrics from
                  configured targets. It is commonly used for infrastructure
                  and application monitoring with compatible exporters and
                  alerting integrations.
                </p>

                <p className="mt-4 text-sm leading-7 text-slate-500">
                  Best suited for: numeric metrics, trends and alerting
                  integrations.
                </p>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-100 p-5">
              <h3 className="font-bold text-slate-900">
                Which tool should a beginner learn first?
              </h3>
              <p className="mt-2 leading-7 text-slate-600">
                Start with Wireshark to understand packets, protocols, source
                and destination addresses, and ports. Then explore device
                metrics and logs. Later, try a dedicated monitoring system in
                a lab so you can understand how individual observations become
                dashboards and alerts.
              </p>
            </div>
          </section>

          {/* 6. Logs */}
          <section id="logs" className="mb-14 scroll-mt-24">
            <SectionHeading
              eyebrow="06 · Evidence"
              title="Understanding network logs and traffic records"
              description="Logs and flow records help explain what happened, when it happened, and which systems were involved. Their detail depends on the source and how it is configured."
            />

            <div className="grid gap-5 md:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="text-lg font-bold text-slate-900">
                  Device and service logs
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  Routers, firewalls, servers and applications may record
                  events such as interface changes, connection decisions,
                  authentication failures, service errors and administrative
                  changes.
                </p>

                <ul className="mt-4 space-y-2 text-sm leading-7 text-slate-600">
                  <li>• Timestamp and event type</li>
                  <li>• Device or service that generated the event</li>
                  <li>• Relevant addresses or account identifiers</li>
                  <li>• Action taken or result, when recorded</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="text-lg font-bold text-slate-900">
                  Network flow records
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  Flow records summarize observed communication. Depending
                  on the format and configuration, they may include source
                  and destination addresses, ports, protocol, packet counts,
                  byte counts and timing information.
                </p>

                <ul className="mt-4 space-y-2 text-sm leading-7 text-slate-600">
                  <li>• Which endpoints communicated</li>
                  <li>• Which protocol or ports were involved</li>
                  <li>• Approximate traffic volume</li>
                  <li>• When the communication was observed</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 overflow-hidden rounded-2xl border border-slate-700 bg-slate-950">
              <div className="border-b border-slate-700 px-5 py-3">
                <p className="text-sm font-semibold text-emerald-300">
                  Illustrative log example
                </p>
              </div>

              <div className="overflow-x-auto p-5">
                <pre className="text-sm leading-7 text-slate-200">
                  <code>{`timestamp: 2026-10-12 10:15:00
device: example-firewall
source: 192.168.1.25
destination: 192.168.1.10
protocol: TCP
destination_port: 443
action: allowed
bytes: illustrative-value`}</code>
                </pre>
              </div>

              <div className="border-t border-slate-700 bg-slate-900 px-5 py-4">
                <p className="text-sm leading-6 text-slate-300">
                  This is a fictional, simplified example—not a real device
                  log or a universal log format. A single allowed connection
                  does not prove that the traffic is safe or malicious.
                </p>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5 leading-7 text-amber-950">
              <span className="font-bold">Privacy and encryption:</span>{" "}
              monitoring may expose sensitive metadata or logs containing
              user information. Limit access, establish appropriate retention
              periods, protect stored records, and follow applicable privacy
              and organizational policies. Encrypted traffic contents are not
              automatically visible to ordinary network monitoring tools.
            </div>
          </section>

          <AdSlot />

          {/* 7. Investigation */}
          <section id="investigation" className="mb-14 scroll-mt-24">
            <SectionHeading
              eyebrow="07 · Investigation"
              title="How to investigate unusual network activity"
              description="A useful investigation starts with a specific observation and builds a timeline from multiple sources of evidence."
            />

            <div className="space-y-4">
              {[
                {
                  number: "01",
                  color: "bg-blue-600",
                  title: "Define the observation",
                  description:
                    "Record the event, affected device, timestamp, relevant addresses and why the activity appears unusual.",
                },
                {
                  number: "02",
                  color: "bg-violet-600",
                  title: "Check normal behavior",
                  description:
                    "Compare the observation with known services, scheduled jobs, maintenance windows and historical activity.",
                },
                {
                  number: "03",
                  color: "bg-amber-500",
                  title: "Correlate other evidence",
                  description:
                    "Review relevant firewall logs, endpoint events, DNS records, authentication logs and available flow information.",
                },
                {
                  number: "04",
                  color: "bg-emerald-600",
                  title: "Document and respond",
                  description:
                    "Record what the evidence supports, note uncertainty, and follow authorized incident-response procedures when needed.",
                },
              ].map((step) => (
                <div
                  key={step.number}
                  className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <div
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-sm font-bold text-white ${step.color}`}
                  >
                    {step.number}
                  </div>

                  <div>
                    <h3 className="font-bold text-slate-900">{step.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-5">
              <h3 className="font-bold text-blue-950">
                A good analyst asks questions before making conclusions
              </h3>

              <ul className="mt-3 space-y-2 text-sm leading-7 text-blue-950/80">
                <li>• Is this communication expected for the device?</li>
                <li>• Is the destination known and authorized?</li>
                <li>• Do other records support the same explanation?</li>
                <li>• Is there evidence of impact or continued suspicious activity?</li>
                <li>• What additional information would confirm or disprove the concern?</li>
              </ul>
            </div>
          </section>

          {/* 8. Best practices */}
          <section id="best-practices" className="mb-14 scroll-mt-24">
            <SectionHeading
              eyebrow="08 · Operational practices"
              title="Network monitoring best practices"
              description="A reliable monitoring setup should provide useful visibility without overwhelming people with noise or exposing monitoring data unnecessarily."
            />

            <div className="grid gap-4 md:grid-cols-2">
              {[
                {
                  title: "Know what you monitor",
                  description:
                    "Maintain an inventory of important devices, services, network segments and responsible owners.",
                  color: "border-blue-300 bg-blue-50",
                },
                {
                  title: "Choose useful thresholds",
                  description:
                    "Use sensible alert conditions based on service requirements and observed normal behavior.",
                  color: "border-violet-300 bg-violet-50",
                },
                {
                  title: "Protect management access",
                  description:
                    "Use strong authentication, least privilege, secure management protocols and timely updates.",
                  color: "border-emerald-300 bg-emerald-50",
                },
                {
                  title: "Synchronize system clocks",
                  description:
                    "Consistent time settings help correlate events from firewalls, servers and monitoring sensors.",
                  color: "border-amber-300 bg-amber-50",
                },
                {
                  title: "Secure logs and records",
                  description:
                    "Restrict access, protect data in transit and at rest, and establish appropriate retention practices.",
                  color: "border-sky-300 bg-sky-50",
                },
                {
                  title: "Test the response process",
                  description:
                    "Use authorized exercises to verify that alerts reach the right people and documented procedures work.",
                  color: "border-rose-300 bg-rose-50",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className={`rounded-2xl border p-5 ${item.color}`}
                >
                  <h3 className="font-bold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-700">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* 9. FAQs */}
          <section id="faqs" className="mb-14 scroll-mt-24">
            <SectionHeading
              eyebrow="Common questions"
              title="Network monitoring FAQs"
              description="Answers to common questions about monitoring methods, metrics and network security."
            />

            <div className="space-y-4">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-2xl border border-slate-200 bg-white p-5 open:border-blue-200 open:bg-blue-50/40"
                >
                  <summary className="cursor-pointer list-none pr-6 font-semibold leading-7 text-slate-900 marker:hidden">
                    <span className="flex items-center justify-between gap-4">
                      {faq.question}
                      <span className="shrink-0 text-xl text-blue-600 transition group-open:rotate-45">
                        +
                      </span>
                    </span>
                  </summary>

                  <p className="mt-4 leading-7 text-slate-600">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </section>

          {/* Related topics */}
          <section className="border-t border-slate-200 pt-10">
            <SectionHeading
              eyebrow="Continue learning"
              title="Explore more network security topics"
              description="Learn how monitoring, traffic filtering and threat detection work together to support a safer network."
            />

            <RelatedTopics
              eyebrow="Related network security guides"
              title="Continue your learning"
              description="Explore these related topics to build a stronger understanding of network defense."
              links={relatedTopics}
            />

            <div className="mt-8 rounded-3xl bg-gradient-to-r from-blue-700 to-violet-700 p-6 text-white sm:p-8">
              <h2 className="text-2xl font-bold">
                Build your network defense knowledge
              </h2>

              <p className="mt-3 max-w-2xl leading-7 text-blue-100">
                Start with network fundamentals, understand how devices
                communicate, and then learn how defenders observe activity
                and investigate potential threats.
              </p>

              <Link
                href="/networking/network-security"
                className="mt-5 inline-flex rounded-xl bg-white px-5 py-3 font-semibold text-blue-800 transition hover:bg-blue-50"
              >
                Explore Network Security →
              </Link>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
