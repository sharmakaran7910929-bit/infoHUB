import Link from "next/link";
import RelatedTopics from "../../../../components/ContinueReading";
import AdSlot from "../../../../components/AdSlot";

const pageUrl =
  "https://pricetag.co.in/networking/network-security/intrusion-detection";

export const metadata = {
  title: "Intrusion Detection Systems (IDS): How Network Threats Are Detected",
  description:
    "Learn how intrusion detection systems (IDS) monitor network traffic, detect suspicious activity, generate alerts, and help security analysts investigate threats.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Intrusion Detection Systems (IDS) Explained",
    description:
      "Understand IDS detection methods, network monitoring, security alerts, and the difference between IDS and IPS.",
    url: pageUrl,
    type: "article",
  },
};

const faqs = [
  {
    question: "What is an intrusion detection system (IDS)?",
    answer:
      "An intrusion detection system monitors network traffic or activity on a device for signs of suspicious behavior, policy violations, or known threats. It generates alerts that help security teams investigate potential incidents.",
  },
  {
    question: "Does an IDS block hackers automatically?",
    answer:
      "A traditional IDS primarily detects and alerts. It does not automatically block traffic by default. An intrusion prevention system (IPS) can be configured to block or reject detected malicious traffic.",
  },
  {
    question: "What is the difference between NIDS and HIDS?",
    answer:
      "A network-based intrusion detection system (NIDS) monitors traffic moving through a network or selected network segments. A host-based intrusion detection system (HIDS) monitors activity on an individual device, such as system logs, file changes, and local events.",
  },
  {
    question: "What is signature-based detection?",
    answer:
      "Signature-based detection compares observed activity with known patterns of attacks or suspicious behavior. It can identify recognized threats efficiently, but may miss new threats for which suitable signatures are not available.",
  },
  {
    question: "What is anomaly-based detection?",
    answer:
      "Anomaly-based detection looks for behavior that differs from an established baseline or expected pattern. It may help identify unfamiliar threats, but unusual legitimate activity can also trigger false alerts.",
  },
  {
    question: "Can an IDS detect every cyberattack?",
    answer:
      "No. Detection depends on sensor placement, visibility, configuration, detection rules, encryption, and the type of attack. IDS should be part of a broader defense that includes patching, access controls, endpoint protection, logging, and incident response.",
  },
];

const relatedTopics = [
  {
    label: "Network Security",
    href: "/networking/network-security",
    description:
      "Explore the core principles and practices used to protect networks.",
  },
  {
    label: "Firewalls and IPS",
    href: "/networking/network-security/firewalls-and-ips",
    description:
      "Understand traffic filtering, prevention systems, and network boundaries.",
  },
  {
    label: "Network Monitoring",
    href: "/networking/network-security/network-monitoring",
    description:
      "Learn how defenders observe traffic, logs, and network performance.",
  },
  {
    label: "Wireless Security",
    href: "/networking/network-security/wireless-security",
    description:
      "Explore Wi-Fi threats and ways to protect wireless networks.",
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

function FlowArrow({ label = "Traffic continues" }) {
  return (
    <div className="flex flex-col items-center justify-center py-2">
      <span className="text-xs font-medium text-slate-500">{label}</span>
      <span aria-hidden="true" className="text-2xl font-bold text-blue-500">
        ↓
      </span>
    </div>
  );
}

function DiagramNode({ color, label, title, description }) {
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
        colors[color] || colors.slate
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

function InfoCard({ number, title, description, color = "blue" }) {
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
      {number && (
        <p className="mb-3 text-sm font-bold text-blue-700">{number}</p>
      )}

      <h3 className="text-lg font-bold text-slate-900">{title}</h3>

      <p className="mt-2 text-sm leading-7 text-slate-600">{description}</p>
    </div>
  );
}

export default function IntrusionDetectionPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: "Intrusion Detection Systems (IDS): How Network Threats Are Detected",
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
        {/* Page introduction */}
        <section className="border-b border-blue-100 bg-gradient-to-br from-blue-50 via-white to-violet-50">
          <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
            <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
              <div>
                <p className="mb-4 inline-flex rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-semibold text-blue-700">
                  Network Security · Threat Detection
                </p>

                <h1 className="max-w-3xl text-3xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl">
                  Intrusion Detection Systems (IDS): How Networks Detect
                  Suspicious Activity
                </h1>

                <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                  A network can carry thousands of legitimate connections
                  alongside traffic that deserves closer attention. An
                  intrusion detection system helps defenders identify unusual
                  patterns, recognize known attack indicators, and investigate
                  potential security incidents.
                </p>

                <div className="mt-7 flex flex-wrap gap-3 text-sm">
                  <span className="rounded-lg bg-blue-100 px-3 py-2 font-medium text-blue-800">
                    Network monitoring
                  </span>
                  <span className="rounded-lg bg-violet-100 px-3 py-2 font-medium text-violet-800">
                    Threat detection
                  </span>
                  <span className="rounded-lg bg-emerald-100 px-3 py-2 font-medium text-emerald-800">
                    Defensive security
                  </span>
                </div>
              </div>

              {/* Decorative detection illustration */}
              <div
                aria-label="Illustration showing network traffic being inspected by an intrusion detection system"
                className="rounded-3xl border border-blue-100 bg-white p-5 shadow-lg shadow-blue-100/60 sm:p-7"
              >
                <div className="mb-5 flex items-center justify-between">
                  <p className="font-bold text-slate-900">Detection overview</p>
                  <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-800">
                    Monitor
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  <div className="rounded-xl bg-blue-50 p-3 text-center">
                    <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-xl text-white">
                      ↗
                    </div>
                    <p className="mt-2 text-xs font-bold text-blue-950">
                      Traffic
                    </p>
                  </div>

                  <div className="rounded-xl bg-violet-50 p-3 text-center">
                    <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-violet-600 text-xl text-white">
                      ◎
                    </div>
                    <p className="mt-2 text-xs font-bold text-violet-950">
                      Inspect
                    </p>
                  </div>

                  <div className="rounded-xl bg-amber-50 p-3 text-center">
                    <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500 text-xl text-white">
                      !
                    </div>
                    <p className="mt-2 text-xs font-bold text-amber-950">
                      Alert
                    </p>
                  </div>
                </div>

                <div className="my-4 rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <div className="mb-3 flex items-center justify-between text-sm">
                    <span className="font-medium text-slate-700">
                      Detection activity
                    </span>
                    <span className="text-slate-500">Illustration</span>
                  </div>

                  <div className="space-y-3">
                    <div className="h-2 overflow-hidden rounded-full bg-slate-200">
                      <div className="h-full w-4/5 rounded-full bg-blue-500" />
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-slate-200">
                      <div className="h-full w-3/5 rounded-full bg-violet-500" />
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-slate-200">
                      <div className="h-full w-2/5 rounded-full bg-amber-500" />
                    </div>
                  </div>
                </div>

                <p className="text-sm leading-6 text-slate-500">
                  An IDS observes activity and produces evidence for
                  investigation. This illustration does not represent live
                  network data or real detection results.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
          {/* Table of contents */}
          <nav
            aria-label="On this page"
            className="mb-12 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7"
          >
            <h2 className="text-lg font-bold text-slate-900">
              On this page
            </h2>

            <div className="mt-4 grid gap-3 text-sm sm:grid-cols-2 lg:grid-cols-3">
              {[
                ["#ids-basics", "What is an IDS?"],
                ["#how-it-works", "How detection works"],
                ["#ids-types", "Types of IDS"],
                ["#detection-methods", "Detection methods"],
                ["#ids-vs-ips", "IDS vs IPS"],
                ["#investigation", "Investigating alerts"],
                ["#best-practices", "Defender best practices"],
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

          {/* Section 1 */}
          <section id="ids-basics" className="mb-14 scroll-mt-24">
            <SectionHeading
              eyebrow="01 · Fundamentals"
              title="What is an intrusion detection system?"
              description="An IDS is a security tool that looks for signs of potentially malicious or unauthorized activity and reports findings to an administrator or security team."
            />

            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="text-lg font-bold text-slate-900">
                  What an IDS can do
                </h3>

                <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
                  <li>• Identify traffic matching known attack signatures.</li>
                  <li>• Flag suspicious connection patterns or behavior.</li>
                  <li>• Detect certain policy violations.</li>
                  <li>• Record events and send alerts for investigation.</li>
                  <li>• Help analysts understand a possible security incident.</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
                <h3 className="text-lg font-bold text-amber-950">
                  What an IDS cannot guarantee
                </h3>

                <ul className="mt-4 space-y-3 text-sm leading-7 text-amber-950/80">
                  <li>• Detecting every new or unknown attack.</li>
                  <li>• Understanding all encrypted traffic contents.</li>
                  <li>• Proving that every alert is a real attack.</li>
                  <li>• Blocking threats without a prevention mechanism.</li>
                  <li>• Protecting systems that it cannot adequately observe.</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-blue-100 bg-blue-50 p-5 leading-7 text-blue-950">
              <span className="font-bold">Remember:</span> detection is not
              the same as prevention. An alert identifies activity that needs
              attention; an analyst or an appropriately configured security
              control determines what action should follow.
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
                  How an IDS fits into a network
                </h2>
                <p className="mt-2 text-sm leading-6 text-blue-100">
                  A network sensor observes a traffic feed and forwards
                  suspicious findings for investigation.
                </p>
              </div>

              <div className="p-5 sm:p-8">
                <div className="grid gap-3 sm:grid-cols-3 sm:items-center">
                  <DiagramNode
                    color="blue"
                    label="Step 1"
                    title="Network traffic"
                    description="Connections between devices, servers, and the internet"
                  />

                  <div className="flex items-center justify-center text-3xl font-bold text-blue-500">
                    <span className="sm:hidden">↓</span>
                    <span className="hidden sm:inline">→</span>
                  </div>

                  <DiagramNode
                    color="violet"
                    label="Step 2"
                    title="IDS sensor"
                    description="Examines the traffic it can observe"
                  />
                </div>

                <div className="mx-auto flex max-w-3xl flex-col items-center">
                  <FlowArrow label="Potential match or suspicious behavior" />
                  <div className="grid w-full gap-3 sm:grid-cols-2">
                    <DiagramNode
                      color="amber"
                      label="Step 3A"
                      title="Security alert"
                      description="A detection rule or behavior model raises a finding"
                    />
                    <DiagramNode
                      color="green"
                      label="Step 3B"
                      title="Analyst investigation"
                      description="The alert is checked against logs, context, and other evidence"
                    />
                  </div>
                </div>

                <p className="mt-5 text-sm leading-6 text-slate-500">
                  Simplified example: actual sensor placement and alert
                  handling depend on the network design and IDS product.
                </p>
              </div>
            </div>
          </section>

          <AdSlot />

          {/* Section 2 */}
          <section id="how-it-works" className="mb-14 scroll-mt-24">
            <SectionHeading
              eyebrow="02 · Detection workflow"
              title="How does intrusion detection work?"
              description="The detection process usually combines visibility, inspection, rules or behavioral analysis, event recording, and human review."
            />

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <InfoCard
                number="STEP 01"
                title="Collect observations"
                description="A sensor receives traffic or reads activity from a monitored host, depending on the IDS type."
                color="blue"
              />
              <InfoCard
                number="STEP 02"
                title="Inspect activity"
                description="The system analyzes available data using signatures, protocol rules, or behavioral baselines."
                color="violet"
              />
              <InfoCard
                number="STEP 03"
                title="Generate findings"
                description="Activity that matches a detection condition may create an event or alert with supporting details."
                color="amber"
              />
              <InfoCard
                number="STEP 04"
                title="Investigate"
                description="A defender validates the alert, checks related evidence, and decides whether a response is needed."
                color="green"
              />
            </div>

            <div className="mt-7 rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="text-lg font-bold text-slate-900">
                Example: repeated login failures
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Imagine that a server records many failed login attempts
                against one account within a short period. Depending on the
                configured rules and available logs, an IDS or related
                detection system may flag the pattern for review. The
                analyst can then check the source addresses, timing, affected
                accounts, and successful logins that followed.
              </p>

              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                <div className="rounded-xl bg-blue-50 p-4">
                  <p className="text-sm font-semibold text-blue-800">
                    Observation
                  </p>
                  <p className="mt-1 text-sm leading-6 text-blue-950">
                    Repeated failed authentication events
                  </p>
                </div>

                <div className="rounded-xl bg-amber-50 p-4">
                  <p className="text-sm font-semibold text-amber-800">
                    Detection
                  </p>
                  <p className="mt-1 text-sm leading-6 text-amber-950">
                    A rule flags the unusual pattern
                  </p>
                </div>

                <div className="rounded-xl bg-emerald-50 p-4">
                  <p className="text-sm font-semibold text-emerald-800">
                    Investigation
                  </p>
                  <p className="mt-1 text-sm leading-6 text-emerald-950">
                    Review evidence before deciding on a response
                  </p>
                </div>
              </div>

              <p className="mt-4 text-sm leading-6 text-slate-500">
                This is a simplified example. Failed logins alone do not prove
                that an account has been compromised.
              </p>
            </div>
          </section>

          {/* Section 3 */}
          <section id="ids-types" className="mb-14 scroll-mt-24">
            <SectionHeading
              eyebrow="03 · Deployment"
              title="Types of intrusion detection systems"
              description="The main distinction is where the system observes activity. A network sensor and a host sensor can provide different, complementary evidence."
            />

            <div className="grid gap-5 md:grid-cols-2">
              <div className="overflow-hidden rounded-2xl border border-blue-200 bg-white shadow-sm">
                <div className="bg-blue-600 p-5 text-white">
                  <p className="text-sm font-semibold text-blue-100">
                    NIDS
                  </p>
                  <h3 className="mt-1 text-xl font-bold">
                    Network-based IDS
                  </h3>
                </div>

                <div className="p-5">
                  <p className="leading-7 text-slate-600">
                    A network-based IDS monitors traffic at a chosen network
                    location, such as a network tap, mirror port, or supported
                    sensor interface.
                  </p>

                  <div className="my-5 rounded-xl bg-blue-50 p-4">
                    <div className="flex items-center justify-between gap-2">
                      <span className="rounded-lg bg-white px-3 py-2 text-sm font-semibold text-blue-900">
                        Devices
                      </span>
                      <span className="text-xl text-blue-600">→</span>
                      <span className="rounded-lg bg-blue-200 px-3 py-2 text-sm font-semibold text-blue-950">
                        Sensor
                      </span>
                      <span className="text-xl text-blue-600">→</span>
                      <span className="rounded-lg bg-white px-3 py-2 text-sm font-semibold text-blue-900">
                        Alerts
                      </span>
                    </div>
                  </div>

                  <p className="text-sm leading-7 text-slate-600">
                    Useful for: suspicious traffic patterns, network scans,
                    and attacks visible at the sensor location.
                  </p>
                </div>
              </div>

              <div className="overflow-hidden rounded-2xl border border-violet-200 bg-white shadow-sm">
                <div className="bg-violet-600 p-5 text-white">
                  <p className="text-sm font-semibold text-violet-100">
                    HIDS
                  </p>
                  <h3 className="mt-1 text-xl font-bold">
                    Host-based IDS
                  </h3>
                </div>

                <div className="p-5">
                  <p className="leading-7 text-slate-600">
                    A host-based IDS monitors activity on a particular
                    computer or server. Depending on the tool, this can
                    include system logs, file changes, and local security
                    events.
                  </p>

                  <div className="my-5 rounded-xl bg-violet-50 p-4">
                    <div className="flex items-center justify-between gap-2">
                      <span className="rounded-lg bg-white px-3 py-2 text-sm font-semibold text-violet-900">
                        Server
                      </span>
                      <span className="text-xl text-violet-600">→</span>
                      <span className="rounded-lg bg-violet-200 px-3 py-2 text-sm font-semibold text-violet-950">
                        Host agent
                      </span>
                      <span className="text-xl text-violet-600">→</span>
                      <span className="rounded-lg bg-white px-3 py-2 text-sm font-semibold text-violet-900">
                        Events
                      </span>
                    </div>
                  </div>

                  <p className="text-sm leading-7 text-slate-600">
                    Useful for: selected file-integrity changes, suspicious
                    host activity, and system-level events.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-5 leading-7 text-emerald-950">
              <p className="font-bold">Can they work together?</p>
              Yes. Network monitoring may show suspicious connections, while
              host monitoring may reveal what happened on an affected server.
              Combining both sources can give defenders a clearer picture.
            </div>
          </section>

          <AdSlot />

          {/* Section 4 */}
          <section id="detection-methods" className="mb-14 scroll-mt-24">
            <SectionHeading
              eyebrow="04 · Detection logic"
              title="Signature-based vs anomaly-based detection"
              description="Different detection approaches have different strengths. Many security tools combine multiple techniques rather than relying on only one."
            />

            <div className="grid gap-5 md:grid-cols-2">
              <div className="rounded-2xl border border-blue-200 bg-white p-6 shadow-sm">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-2xl text-blue-800">
                  #
                </div>

                <h3 className="text-xl font-bold text-slate-900">
                  Signature-based detection
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  The system compares observed activity with known indicators
                  or patterns. These may include recognizable malicious
                  payloads, protocol patterns, or other rule-defined
                  conditions.
                </p>

                <div className="mt-5 rounded-xl bg-blue-50 p-4">
                  <p className="text-sm font-bold text-blue-900">
                    Simple example
                  </p>
                  <p className="mt-2 text-sm leading-6 text-blue-950">
                    A traffic pattern matches a known detection signature, so
                    the IDS generates an alert.
                  </p>
                </div>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  Strength: effective for recognized patterns when suitable
                  signatures are maintained.
                </p>

                <p className="mt-2 text-sm leading-7 text-slate-600">
                  Limitation: new or modified attacks may not match existing
                  signatures.
                </p>
              </div>

              <div className="rounded-2xl border border-violet-200 bg-white p-6 shadow-sm">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-violet-100 text-2xl text-violet-800">
                  ≋
                </div>

                <h3 className="text-xl font-bold text-slate-900">
                  Anomaly-based detection
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  The system compares observed activity with an expected
                  baseline or behavioral model. A substantial deviation may
                  be flagged for investigation.
                </p>

                <div className="mt-5 rounded-xl bg-violet-50 p-4">
                  <p className="text-sm font-bold text-violet-900">
                    Simple example
                  </p>
                  <p className="mt-2 text-sm leading-6 text-violet-950">
                    A server begins sending far more outbound traffic than
                    expected, prompting a defender to investigate.
                  </p>
                </div>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  Strength: may reveal previously unseen or unexpected
                  activity.
                </p>

                <p className="mt-2 text-sm leading-7 text-slate-600">
                  Limitation: legitimate changes in behavior can also trigger
                  alerts.
                </p>
              </div>
            </div>

            {/* Colorful comparison diagram */}
            <div className="mt-7 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-wider text-violet-700">
                VISUAL DIAGRAM 02
              </p>

              <h3 className="mt-2 text-xl font-bold text-slate-900">
                Two ways to spot suspicious activity
              </h3>

              <div className="mt-6 grid gap-5 md:grid-cols-2">
                <div className="rounded-2xl bg-blue-50 p-5">
                  <div className="mb-4 inline-flex rounded-lg bg-blue-600 px-3 py-2 text-sm font-bold text-white">
                    Known pattern
                  </div>

                  <div className="space-y-2">
                    <div className="rounded-lg border border-blue-200 bg-white p-3 text-sm text-blue-950">
                      Observed traffic
                    </div>
                    <div className="text-center text-xl text-blue-600">↓</div>
                    <div className="rounded-lg border border-blue-200 bg-blue-100 p-3 text-sm font-semibold text-blue-950">
                      Compare with signature
                    </div>
                    <div className="text-center text-xl text-blue-600">↓</div>
                    <div className="rounded-lg border border-amber-200 bg-amber-100 p-3 text-sm font-semibold text-amber-950">
                      Match? Raise alert
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl bg-violet-50 p-5">
                  <div className="mb-4 inline-flex rounded-lg bg-violet-600 px-3 py-2 text-sm font-bold text-white">
                    Unexpected behavior
                  </div>

                  <div className="space-y-2">
                    <div className="rounded-lg border border-violet-200 bg-white p-3 text-sm text-violet-950">
                      Observed activity
                    </div>
                    <div className="text-center text-xl text-violet-600">
                      ↓
                    </div>
                    <div className="rounded-lg border border-violet-200 bg-violet-100 p-3 text-sm font-semibold text-violet-950">
                      Compare with baseline
                    </div>
                    <div className="text-center text-xl text-violet-600">
                      ↓
                    </div>
                    <div className="rounded-lg border border-amber-200 bg-amber-100 p-3 text-sm font-semibold text-amber-950">
                      Unusual? Investigate
                    </div>
                  </div>
                </div>
              </div>

              <p className="mt-5 text-sm leading-6 text-slate-500">
                Simplified illustrations of common approaches. Real products
                may use additional rules, statistical techniques, protocol
                analysis, and other detection methods.
              </p>
            </div>
          </section>

          {/* Section 5 */}
          <section id="ids-vs-ips" className="mb-14 scroll-mt-24">
            <SectionHeading
              eyebrow="05 · Important distinction"
              title="IDS vs IPS: what is the difference?"
              description="Both technologies can inspect activity for threats, but their typical roles in a network are different."
            />

            <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
              <table className="w-full min-w-[600px] border-collapse text-left text-sm">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="p-4 font-semibold">Feature</th>
                    <th className="p-4 font-semibold">IDS</th>
                    <th className="p-4 font-semibold">IPS</th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-slate-100">
                  <tr>
                    <td className="p-4 font-semibold text-slate-900">
                      Main role
                    </td>
                    <td className="p-4 text-slate-600">
                      Detect and alert
                    </td>
                    <td className="p-4 text-slate-600">
                      Detect and potentially prevent
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-slate-900">
                      Typical placement
                    </td>
                    <td className="p-4 text-slate-600">
                      Often monitors a copy of network traffic
                    </td>
                    <td className="p-4 text-slate-600">
                      Often placed inline with traffic
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-slate-900">
                      Automatic blocking
                    </td>
                    <td className="p-4 text-slate-600">
                      Not its usual default role
                    </td>
                    <td className="p-4 text-slate-600">
                      Can block or reject matching traffic
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-slate-900">
                      Operational concern
                    </td>
                    <td className="p-4 text-slate-600">
                      Alert quality and investigation workload
                    </td>
                    <td className="p-4 text-slate-600">
                      False positives may disrupt legitimate traffic
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-7 rounded-3xl border border-slate-200 bg-white p-5 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-wider text-blue-700">
                VISUAL DIAGRAM 03
              </p>

              <h3 className="mt-2 text-xl font-bold text-slate-900">
                Alerting versus blocking
              </h3>

              <div className="mt-6 grid gap-6 md:grid-cols-2">
                <div className="rounded-2xl border border-blue-200 bg-blue-50 p-5">
                  <h4 className="font-bold text-blue-950">
                    IDS: detect and report
                  </h4>

                  <div className="mt-4 space-y-2">
                    <DiagramNode
                      color="blue"
                      title="Traffic"
                      description="Activity enters the monitored network"
                    />
                    <FlowArrow />
                    <DiagramNode
                      color="violet"
                      title="IDS"
                      description="Checks observed activity"
                    />
                    <FlowArrow label="Suspicious match" />
                    <DiagramNode
                      color="amber"
                      title="Alert sent"
                      description="Defender reviews the evidence"
                    />
                  </div>
                </div>

                <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
                  <h4 className="font-bold text-emerald-950">
                    IPS: detect and prevent
                  </h4>

                  <div className="mt-4 space-y-2">
                    <DiagramNode
                      color="blue"
                      title="Traffic"
                      description="Activity passes through an inline control"
                    />
                    <FlowArrow />
                    <DiagramNode
                      color="violet"
                      title="IPS inspection"
                      description="Evaluates traffic against configured rules"
                    />
                    <FlowArrow label="Threat rule matches" />
                    <DiagramNode
                      color="red"
                      title="Traffic blocked"
                      description="When prevention is enabled and the rule permits blocking"
                    />
                  </div>
                </div>
              </div>
            </div>

            <p className="mt-5 leading-7 text-slate-600">
              Read more in{" "}
              <Link
                href="/networking/network-security/firewalls-and-ips"
                className="font-semibold text-blue-700 underline underline-offset-4 hover:text-blue-900"
              >
                Firewalls and IPS
              </Link>
              , which explains how traffic filtering and intrusion prevention
              fit into a wider defense strategy.
            </p>
          </section>

          <AdSlot />

          {/* Section 6 */}
          <section id="investigation" className="mb-14 scroll-mt-24">
            <SectionHeading
              eyebrow="06 · Security operations"
              title="How a security analyst investigates an IDS alert"
              description="An alert is a starting point, not a final verdict. Analysts use context and evidence to decide whether an event is benign, suspicious, or part of a real incident."
            />

            <div className="relative space-y-4">
              {[
                {
                  n: "01",
                  title: "Read the alert",
                  color: "bg-blue-600",
                  text: "Check the detection rule, timestamp, source and destination addresses, ports, protocol, and severity.",
                },
                {
                  n: "02",
                  title: "Validate the context",
                  color: "bg-violet-600",
                  text: "Determine which systems were involved and whether the activity matches an approved service or expected behavior.",
                },
                {
                  n: "03",
                  title: "Correlate evidence",
                  color: "bg-amber-500",
                  text: "Review relevant firewall logs, authentication events, DNS records, endpoint alerts, and other available telemetry.",
                },
                {
                  n: "04",
                  title: "Decide on a response",
                  color: "bg-emerald-600",
                  text: "Follow the incident-response procedure. Escalate confirmed concerns and apply authorized containment measures when needed.",
                },
              ].map((step) => (
                <div
                  key={step.n}
                  className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <div
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-sm font-bold text-white ${step.color}`}
                  >
                    {step.n}
                  </div>

                  <div>
                    <h3 className="font-bold text-slate-900">{step.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      {step.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5">
              <h3 className="font-bold text-amber-950">
                Why false positives matter
              </h3>
              <p className="mt-2 leading-7 text-amber-950/80">
                A false positive occurs when legitimate activity is flagged
                as suspicious. Too many poorly tuned alerts can hide important
                events in the workload. Defenders should tune rules carefully
                without blindly suppressing unfamiliar or high-risk activity.
              </p>
            </div>
          </section>

          {/* Section 7 */}
          <section id="best-practices" className="mb-14 scroll-mt-24">
            <SectionHeading
              eyebrow="07 · Practical defense"
              title="IDS best practices for network defenders"
              description="An IDS is most useful when it has suitable visibility, maintained rules, reliable logs, and a clear process for handling alerts."
            />

            <div className="grid gap-4 md:grid-cols-2">
              {[
                {
                  title: "Place sensors thoughtfully",
                  text: "Choose monitoring points that provide useful visibility into the network segments and assets you want to protect.",
                  color: "border-blue-300 bg-blue-50",
                },
                {
                  title: "Keep detection rules updated",
                  text: "Use maintained signatures and review rule changes. Outdated rules can reduce detection coverage.",
                  color: "border-violet-300 bg-violet-50",
                },
                {
                  title: "Protect the monitoring system",
                  text: "Restrict administrative access, patch the sensor, secure management interfaces, and control access to logs.",
                  color: "border-emerald-300 bg-emerald-50",
                },
                {
                  title: "Monitor alert quality",
                  text: "Review false positives, alert volume, missed visibility, and the usefulness of the information available to analysts.",
                  color: "border-amber-300 bg-amber-50",
                },
                {
                  title: "Use multiple security layers",
                  text: "Combine IDS with firewalls, endpoint monitoring, secure configuration, access controls, and incident response.",
                  color: "border-sky-300 bg-sky-50",
                },
                {
                  title: "Test only with authorization",
                  text: "Use a lab or an explicitly authorized environment to learn how detections work. Never scan or test systems without permission.",
                  color: "border-rose-300 bg-rose-50",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className={`rounded-2xl border p-5 ${item.color}`}
                >
                  <h3 className="font-bold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-700">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 8 */}
          <section className="mb-14">
            <SectionHeading
              eyebrow="08 · Learning exercise"
              title="A safe IDS learning exercise"
              description="Start by learning how defenders interpret events rather than trying to attack a real network."
            />

            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              <div className="bg-slate-900 p-6 text-white sm:p-8">
                <p className="text-sm font-semibold text-emerald-300">
                  DEFENDER PRACTICE
                </p>
                <h3 className="mt-2 text-2xl font-bold">
                  Investigate a fictional security alert
                </h3>
                <p className="mt-3 max-w-2xl leading-7 text-slate-300">
                  Suppose an IDS reports unusual connection attempts against a
                  lab server. What should you check before deciding whether
                  it is an incident?
                </p>
              </div>

              <div className="grid gap-0 md:grid-cols-2">
                <div className="border-b border-slate-200 p-6 md:border-b-0 md:border-r">
                  <h4 className="font-bold text-slate-900">
                    Review these details
                  </h4>

                  <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
                    <li>• The alert timestamp and detection rule.</li>
                    <li>• The source and destination systems.</li>
                    <li>• Whether the activity is expected for that service.</li>
                    <li>• Related firewall and server logs.</li>
                    <li>• Whether any suspicious activity continued.</li>
                  </ul>
                </div>

                <div className="bg-emerald-50 p-6">
                  <h4 className="font-bold text-emerald-950">
                    Your objective
                  </h4>

                  <p className="mt-3 text-sm leading-7 text-emerald-950/80">
                    Write down what the evidence supports, what remains
                    uncertain, and what additional information you need. Do
                    not label an event a confirmed attack based on one alert
                    alone.
                  </p>

                  <div className="mt-5 rounded-xl border border-emerald-200 bg-white p-4">
                    <p className="text-sm font-bold text-emerald-900">
                      Key lesson
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-700">
                      Good detection is not just generating alerts. It is
                      producing useful evidence that supports a sound
                      security decision.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FAQs */}
          <section id="faqs" className="mb-14 scroll-mt-24">
            <SectionHeading
              eyebrow="Common questions"
              title="Intrusion detection FAQs"
              description="Short answers to common questions about IDS technology and its role in network defense."
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

          {/* Related pages */}
          <section className="border-t border-slate-200 pt-10">
            <SectionHeading
              eyebrow="Continue learning"
              title="Explore more network security topics"
              description="Build your understanding step by step, from basic network controls to monitoring and threat detection."
            />

            <RelatedTopics
              eyebrow="Related network security guides"
              title="Continue your learning"
              description="Explore related concepts that help explain how network defenses work together."
              links={relatedTopics}
            />

            <div className="mt-8 rounded-3xl bg-gradient-to-r from-blue-700 to-violet-700 p-6 text-white sm:p-8">
              <h2 className="text-2xl font-bold">
                Learn network defense one concept at a time
              </h2>

              <p className="mt-3 max-w-2xl leading-7 text-blue-100">
                Understand how traffic moves, how security controls observe
                it, and how defenders use evidence to respond to suspicious
                activity.
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