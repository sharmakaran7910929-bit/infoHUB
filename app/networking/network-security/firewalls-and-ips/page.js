
import Link from "next/link";
import RelatedTopics from "../../../../components/ContinueReading";
import AdSlot from "../../../../components/AdSlot";

const pageUrl =
  "https://pricetag.co.in/networking/network-security/firewalls-and-ips";

export const metadata = {
  title: "Firewalls and IPS Explained | Types, Uses and Security",
  description:
    "Learn How Firewalls and Intrusion Prevention Systems Work, Compare Firewall Types, Understand IPS Protection, and Explore Practical Network Security.",
  alternates: {
    canonical: "/networking/network-security/firewalls-and-ips",
  },
  
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "TechArticle",
  headline: "Firewalls and IPS Explained: Types, Uses and Security",
  description:
    "A practical guide to firewalls, intrusion prevention systems, deployment methods, and network security best practices.",
  mainEntityOfPage: pageUrl,
  author: {
    "@type": "Organization",
    name: "Info Hub",
  },
  publisher: {
    "@type": "Organization",
    name: "Info Hub",
  },
};

const faqs = [
  {
    question: "What is a firewall in networking?",
    answer:
      "A firewall monitors and controls network traffic according to configured security rules. It can allow legitimate connections and block traffic that violates those rules.",
  },
  {
    question: "What is an intrusion prevention system (IPS)?",
    answer:
      "An IPS inspects network activity for suspicious patterns and can block traffic that matches configured prevention rules.",
  },
  {
    question: "What is the difference between a firewall and an IPS?",
    answer:
      "A firewall primarily controls permitted network traffic. An IPS focuses on detecting and preventing suspicious activity within the traffic it can inspect.",
  },
  {
    question: "Can a firewall stop every cyberattack?",
    answer:
      "No. A firewall cannot prevent every phishing attempt, compromised account, malicious file, or threat using permitted connections.",
  },
  {
    question: "Is an IPS the same as an IDS?",
    answer:
      "No. An intrusion detection system (IDS) detects and alerts on suspicious activity, while an intrusion prevention system (IPS) can actively block detected traffic.",
  },
  {
    question: "Do small businesses need firewalls?",
    answer:
      "A properly configured firewall is an important security control for small businesses. It should be combined with software updates, strong authentication, backups, and monitoring.",
  },
];

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

const topics = [
  {
    label: "Network security",
    href: "/networking/network-security",
    description: "Understand the wider principles of network defense.",
  },
  {
    label: "Intrusion detection",
    href: "/networking/network-security/intrusion-detection",
    description: "Learn how security systems identify suspicious activity.",
  },
  {
    label: "Network monitoring",
    href: "/networking/network-security/network-monitoring",
    description: "Explore traffic analysis, logs, and network visibility.",
  },
  {
    label: "Wireless security",
    href: "/networking/network-security/wireless-security",
    description: "Learn how to protect Wi-Fi networks and wireless devices.",
  },
];

function FlowArrow() {
  return (
    <div className="flex justify-center py-2" aria-hidden="true">
      <span className="text-2xl leading-none text-slate-400">↓</span>
    </div>
  );
}

function DiagramNode({ title, description, color = "blue" }) {
  const colors = {
    blue: "border-blue-200 bg-blue-50 text-blue-950",
    violet: "border-violet-200 bg-violet-50 text-violet-950",
    green: "border-emerald-200 bg-emerald-50 text-emerald-950",
    amber: "border-amber-200 bg-amber-50 text-amber-950",
    slate: "border-slate-200 bg-slate-50 text-slate-900",
  };

  return (
    <div className={`rounded-xl border p-4 text-center ${colors[color]}`}>
      <p className="font-semibold">{title}</p>
      <p className="mt-1 text-sm leading-6 text-slate-600">{description}</p>
    </div>
  );
}

export default function FirewallsAndIPSPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <main className="mx-auto max-w-5xl px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <article>
          <header className="mb-8 border-b border-slate-200 pb-7">
            <p className="mb-3 text-sm font-medium text-blue-700">
              Networking / Network Security
            </p>

            <h1 className="mb-4 text-3xl font-bold leading-tight tracking-tight text-slate-950 sm:text-4xl">
              Firewalls and Intrusion Prevention Systems (IPS)
            </h1>

            <p className="max-w-3xl text-base leading-7 text-slate-600">
              Learn how firewalls control network traffic, how intrusion
              prevention systems detect suspicious activity, and how these
              technologies help protect computers, servers, and business
              networks.
            </p>
          </header>

          <nav
            aria-label="On this page"
            className="mb-8 rounded-lg border border-slate-200 bg-slate-50 p-5"
          >
            <h2 className="mb-3 text-lg font-semibold text-slate-900">
              On this page
            </h2>

            <ul className="grid gap-2 text-sm sm:grid-cols-2">
              {[
                ["Firewall basics", "#firewall-basics"],
                ["How firewalls work", "#how-firewalls-work"],
                ["Types of firewalls", "#firewall-types"],
                ["Understanding IPS", "#understanding-ips"],
                ["Firewall vs IPS", "#firewall-vs-ips"],
                ["Deployment methods", "#deployment"],
                ["Security limitations", "#limitations"],
                ["Best practices", "#best-practices"],
                ["Frequently asked questions", "#faqs"],
              ].map(([label, href]) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-blue-700 hover:text-blue-900 hover:underline"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <section id="firewall-basics" className="mb-10">
            <h2 className="mb-3 text-2xl font-bold text-slate-900">
              What is a firewall?
            </h2>

            <p className="mb-4 leading-7">
              A firewall is a security control that monitors and filters
              network traffic according to a set of rules. It can help control
              communication between a trusted network and an untrusted network,
              such as the public internet.
            </p>

            <p className="mb-5 leading-7">
              Firewalls can be implemented in hardware, software, cloud
              infrastructure, or a combination of these. Home routers commonly
              include firewall functionality, while organizations may use
              dedicated firewalls to protect offices, data centers, and cloud
              environments.
            </p>

            <div className="rounded-lg border border-blue-100 bg-blue-50 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">
                A simple example
              </h3>
              <p className="leading-7">
                Imagine an office network with employee computers and a
                business server. A firewall can allow approved connections to
                the server while blocking unsolicited connections from the
                internet. The protection depends on its rules and configuration.
              </p>
            </div>

            {/* Small visual diagram 1 */}
            <div className="my-7 rounded-xl border border-slate-200 bg-white p-5 sm:p-6">
              <h3 className="mb-1 text-lg font-semibold text-slate-900">
                A firewall in a network
              </h3>
              <p className="mb-5 text-sm text-slate-600">
                A simplified view of traffic entering a protected network.
              </p>

              <div className="mx-auto max-w-md">
                <DiagramNode
                  title="Internet"
                  description="Incoming and outgoing connections"
                  color="slate"
                />
                <FlowArrow />
                <DiagramNode
                  title="Firewall"
                  description="Checks traffic against security rules"
                  color="blue"
                />
                <FlowArrow />
                <DiagramNode
                  title="Protected network"
                  description="Computers, servers and business devices"
                  color="green"
                />
              </div>

              <p className="mt-4 text-xs leading-5 text-slate-500">
                Diagram: conceptual example. Actual network designs vary.
              </p>
            </div>
          </section>

          <AdSlot />

          <section id="how-firewalls-work" className="mb-10">
            <h2 className="mb-3 text-2xl font-bold text-slate-900">
              How does a firewall work?
            </h2>

            <p className="mb-4 leading-7">
              When traffic reaches a firewall, the device evaluates it against
              configured policies. Depending on the firewall type, it may
              examine IP addresses, ports, connection state, application
              information, or other traffic characteristics.
            </p>

            <ol className="ml-5 list-decimal space-y-3 leading-7">
              <li>
                <strong>Traffic arrives:</strong> A device attempts to send or
                receive network traffic.
              </li>
              <li>
                <strong>Rules are checked:</strong> The firewall evaluates the
                relevant policy and connection information.
              </li>
              <li>
                <strong>A decision is made:</strong> Traffic may be allowed,
                blocked, rejected, or logged.
              </li>
              <li>
                <strong>Events can be recorded:</strong> Logs help administrators
                investigate unexpected connections and policy violations.
              </li>
            </ol>

            <h3 className="mb-2 mt-6 text-lg font-semibold text-slate-900">
              IP addresses, ports, and protocols
            </h3>

            <p className="mb-4 leading-7">
              Firewall rules can use source and destination IP addresses,
              protocol types, and port numbers. For example, a policy may
              permit HTTPS traffic to a public web server while denying
              unsolicited access to an internal administrative service.
            </p>

            {/* Small visual diagram 2 */}
            <div className="my-7 rounded-xl border border-slate-200 bg-slate-50 p-5">
              <h3 className="mb-4 text-lg font-semibold text-slate-900">
                How a firewall evaluates traffic
              </h3>

              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-lg border border-slate-200 bg-white p-4">
                  <p className="font-semibold text-slate-900">
                    Approved traffic
                  </p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    Matches an allow rule and is permitted by the policy.
                  </p>
                  <div className="mt-3 rounded-md bg-emerald-50 px-3 py-2 text-sm font-medium text-emerald-800">
                    Allowed
                  </div>
                </div>

                <div className="rounded-lg border border-slate-200 bg-white p-4">
                  <p className="font-semibold text-slate-900">
                    Denied traffic
                  </p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    Violates a blocking rule or is not permitted by the policy.
                  </p>
                  <div className="mt-3 rounded-md bg-rose-50 px-3 py-2 text-sm font-medium text-rose-800">
                    Blocked or rejected
                  </div>
                </div>
              </div>

              <p className="mt-3 text-xs leading-5 text-slate-500">
                The result depends on rule order, policy configuration, and
                the firewall's behavior.
              </p>
            </div>

            <p className="leading-7">
              To understand firewall rules more clearly, read our guides to{" "}
              <Link
                href="/networking/ip-addressing/ip-address-basics"
                className="font-medium text-blue-700 hover:underline"
              >
                IP addresses
              </Link>{" "}
              and{" "}
              <Link
                href="/networking/ip-addressing/subnetting"
                className="font-medium text-blue-700 hover:underline"
              >
                subnetting
              </Link>
              .
            </p>
          </section>

          <section id="firewall-types" className="mb-10">
            <h2 className="mb-3 text-2xl font-bold text-slate-900">
              Types of firewalls
            </h2>

            <p className="mb-5 leading-7">
              Different firewalls inspect traffic in different ways. Modern
              products may combine several capabilities in one device or service.
            </p>

            <div className="space-y-4">
              <div className="rounded-lg border border-slate-200 p-5">
                <h3 className="mb-2 text-lg font-semibold text-slate-900">
                  1. Packet-filtering firewall
                </h3>
                <p className="leading-7">
                  Evaluates information such as source and destination IP
                  addresses, protocols, and ports. It is useful for enforcing
                  straightforward network access policies.
                </p>
              </div>

              <div className="rounded-lg border border-slate-200 p-5">
                <h3 className="mb-2 text-lg font-semibold text-slate-900">
                  2. Stateful firewall
                </h3>
                <p className="leading-7">
                  Tracks active network connections and evaluates packets in
                  the context of those connections, helping distinguish
                  expected response traffic from unrelated traffic.
                </p>
              </div>

              <div className="rounded-lg border border-slate-200 p-5">
                <h3 className="mb-2 text-lg font-semibold text-slate-900">
                  3. Proxy or application-layer firewall
                </h3>
                <p className="leading-7">
                  Can act as an intermediary between clients and servers.
                  Application-layer inspection can apply policies based on
                  higher-level protocols and application behavior.
                </p>
              </div>

              <div className="rounded-lg border border-slate-200 p-5">
                <h3 className="mb-2 text-lg font-semibold text-slate-900">
                  4. Next-generation firewall (NGFW)
                </h3>
                <p className="leading-7">
                  Combines traditional traffic controls with additional
                  capabilities, which may include application awareness,
                  intrusion prevention, and advanced traffic inspection.
                </p>
              </div>

              <div className="rounded-lg border border-slate-200 p-5">
                <h3 className="mb-2 text-lg font-semibold text-slate-900">
                  5. Host-based firewall
                </h3>
                <p className="leading-7">
                  Runs on an individual computer or server and controls traffic
                  entering or leaving that device. It provides an additional
                  layer of protection outside the office network as well.
                </p>
              </div>

              <div className="rounded-lg border border-slate-200 p-5">
                <h3 className="mb-2 text-lg font-semibold text-slate-900">
                  6. Cloud firewall
                </h3>
                <p className="leading-7">
                  Provides traffic filtering for cloud resources, applications,
                  or network environments using cloud-based security controls.
                </p>
              </div>
            </div>
          </section>

          <AdSlot />

          <section id="understanding-ips" className="mb-10">
            <h2 className="mb-3 text-2xl font-bold text-slate-900">
              What is an intrusion prevention system (IPS)?
            </h2>

            <p className="mb-4 leading-7">
              An intrusion prevention system inspects network activity for
              patterns associated with attacks or policy violations. When it
              identifies activity that matches its detection and prevention
              rules, it can take action, such as dropping packets or blocking
              a connection.
            </p>

            <p className="mb-4 leading-7">
              An IPS may use signatures, protocol analysis, behavioral
              detection, or combinations of these techniques. Its effectiveness
              depends on detection rules, inspection coverage, configuration,
              and maintenance.
            </p>

            {/* Small visual diagram 3 */}
            <div className="my-7 rounded-xl border border-violet-200 bg-violet-50/50 p-5 sm:p-6">
              <h3 className="mb-1 text-lg font-semibold text-slate-900">
                How an IPS responds to suspicious traffic
              </h3>
              <p className="mb-5 text-sm text-slate-600">
                Detection and prevention depend on the traffic being inspected
                and the active security policy.
              </p>

              <div className="mx-auto max-w-md">
                <DiagramNode
                  title="Network traffic"
                  description="Traffic visible to the IPS"
                  color="slate"
                />
                <FlowArrow />
                <DiagramNode
                  title="IPS inspection"
                  description="Checks signatures, rules and suspicious patterns"
                  color="violet"
                />

                <div className="my-4 grid grid-cols-2 gap-3">
                  <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-3 text-center">
                    <p className="font-semibold text-emerald-900">
                      No match
                    </p>
                    <p className="mt-1 text-xs leading-5 text-slate-600">
                      Traffic continues according to policy.
                    </p>
                  </div>

                  <div className="rounded-lg border border-rose-200 bg-rose-50 p-3 text-center">
                    <p className="font-semibold text-rose-900">
                      Threat match
                    </p>
                    <p className="mt-1 text-xs leading-5 text-slate-600">
                      Traffic may be blocked and an alert recorded.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-xs leading-5 text-slate-500">
                A detection is not proof that every attack will be identified.
                IPS products can miss threats or generate false positives.
              </p>
            </div>

            <h3 className="mb-2 text-lg font-semibold text-slate-900">
              How an IPS detects suspicious traffic
            </h3>

            <ol className="ml-5 list-decimal space-y-3 leading-7">
              <li>It inspects traffic visible to the sensor or appliance.</li>
              <li>
                It compares activity with signatures, rules, or behavioral
                indicators.
              </li>
              <li>It evaluates whether the activity matches a detection rule.</li>
              <li>
                If prevention is enabled, it may block the traffic and generate
                an alert.
              </li>
            </ol>

            <p className="mt-4 leading-7">
              For example, an IPS may identify traffic matching a known exploit
              signature and block the connection. It cannot guarantee that
              every exploit or previously unknown attack will be detected.
            </p>
          </section>

          <section id="firewall-vs-ips" className="mb-10">
            <h2 className="mb-3 text-2xl font-bold text-slate-900">
              Firewall vs IPS: What is the difference?
            </h2>

            <p className="mb-4 leading-7">
              A firewall enforces traffic access policies, while an IPS focuses
              on identifying and preventing suspicious activity within the
              traffic it can inspect. Their capabilities can overlap in modern
              security products.
            </p>

            <div className="overflow-x-auto rounded-lg border border-slate-200">
              <table className="w-full min-w-[560px] border-collapse text-left text-sm">
                <thead className="bg-slate-100 text-slate-900">
                  <tr>
                    <th className="border-b border-slate-200 p-3">Feature</th>
                    <th className="border-b border-slate-200 p-3">Firewall</th>
                    <th className="border-b border-slate-200 p-3">IPS</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    [
                      "Primary role",
                      "Control permitted network traffic",
                      "Detect and prevent suspicious activity",
                    ],
                    [
                      "Common inspection",
                      "Addresses, ports, connections and applications",
                      "Attack signatures and suspicious patterns",
                    ],
                    [
                      "Typical action",
                      "Allow, block, reject or log",
                      "Alert, drop packets or block matching activity",
                    ],
                    [
                      "Main limitation",
                      "Permitted traffic may still be malicious",
                      "Can miss threats or produce false positives",
                    ],
                    [
                      "Works well with",
                      "IPS, endpoint protection and secure configuration",
                      "Firewalls, monitoring and incident response",
                    ],
                  ].map(([feature, firewall, ips]) => (
                    <tr key={feature} className="align-top">
                      <th className="border-b border-slate-200 p-3 font-medium text-slate-800">
                        {feature}
                      </th>
                      <td className="border-b border-slate-200 p-3 leading-6">
                        {firewall}
                      </td>
                      <td className="border-b border-slate-200 p-3 leading-6">
                        {ips}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="mt-4 leading-7">
              Many next-generation firewalls include IPS features, so
              organizations do not always deploy them as separate devices.
              Administrators should verify which features are enabled and
              which traffic is actually inspected.
            </p>
          </section>

          <section id="deployment" className="mb-10">
            <h2 className="mb-3 text-2xl font-bold text-slate-900">
              Where are firewalls and IPS deployed?
            </h2>

            <p className="mb-4 leading-7">
              Their placement determines which traffic they can protect and
              inspect. Common locations include:
            </p>

            <ul className="ml-5 list-disc space-y-3 leading-7">
              <li>
                <strong>Network perimeter:</strong> Between an organization's
                internal network and external networks.
              </li>
              <li>
                <strong>Internal network segments:</strong> Between departments,
                servers, or groups of devices to limit unnecessary access.
              </li>
              <li>
                <strong>Data centers:</strong> In front of important systems
                and applications that require restricted access.
              </li>
              <li>
                <strong>Cloud environments:</strong> Around cloud networks,
                workloads, and services.
              </li>
              <li>
                <strong>Individual endpoints:</strong> On laptops, desktops,
                and servers.
              </li>
            </ul>

            <p className="mt-4 leading-7">
              An IPS may operate inline, where traffic passes through it and
              can be blocked, or in a monitoring arrangement. An IDS generally
              detects and alerts rather than directly blocking traffic.
            </p>
          </section>

          <AdSlot />

          <section id="limitations" className="mb-10">
            <h2 className="mb-3 text-2xl font-bold text-slate-900">
              What firewalls and IPS cannot guarantee
            </h2>

            <p className="mb-4 leading-7">
              These systems are important security controls, but they are not
              complete security solutions. A network can remain vulnerable
              when policies are too permissive, software is outdated, or
              attackers use compromised accounts and permitted connections.
            </p>

            <ul className="ml-5 list-disc space-y-3 leading-7">
              <li>Phishing can trick users into revealing credentials.</li>
              <li>
                Stolen credentials may allow attackers to use legitimate
                access paths.
              </li>
              <li>
                Encrypted traffic may limit inspection without suitable
                inspection capabilities.
              </li>
              <li>
                Poorly maintained rules can unintentionally expose services.
              </li>
              <li>
                Incorrect IPS rules can miss attacks or block legitimate
                business traffic.
              </li>
              <li>
                Threats inside allowed connections may require endpoint
                protection, identity controls, and additional monitoring.
              </li>
            </ul>

            <p className="mt-4 leading-7">
              Firewalls and IPS should be part of a layered defense strategy,
              alongside backups, patching, secure authentication, endpoint
              protection, and incident response.
            </p>
          </section>

          <section id="best-practices" className="mb-10">
            <h2 className="mb-3 text-2xl font-bold text-slate-900">
              Firewall and IPS security best practices
            </h2>

            <ol className="ml-5 list-decimal space-y-3 leading-7">
              <li>
                <strong>Use least privilege:</strong> Allow only the traffic
                required for a service or business function.
              </li>
              <li>
                <strong>Review firewall rules:</strong> Remove obsolete or
                unnecessarily broad rules after validating their dependencies.
              </li>
              <li>
                <strong>Restrict administration:</strong> Limit management
                access to approved devices and trusted administrative networks.
              </li>
              <li>
                <strong>Keep systems updated:</strong> Install security updates
                for firewalls, IPS appliances, operating systems, and related
                software.
              </li>
              <li>
                <strong>Maintain detection rules:</strong> Keep IPS signatures
                and threat intelligence current where supported.
              </li>
              <li>
                <strong>Monitor logs and alerts:</strong> Investigate repeated
                blocks, unexpected connections, and significant policy changes.
              </li>
              <li>
                <strong>Test changes carefully:</strong> Validate new rules and
                IPS policies to reduce accidental service disruption.
              </li>
              <li>
                <strong>Back up configurations:</strong> Maintain protected
                backups and a recovery procedure.
              </li>
              <li>
                <strong>Segment the network:</strong> Restrict unnecessary
                communication between users, servers, and sensitive systems.
              </li>
              <li>
                <strong>Prepare for incidents:</strong> Define who investigates
                alerts, isolates affected systems, and documents findings.
              </li>
            </ol>
          </section>

          <section className="mb-10 rounded-xl border border-slate-200 bg-slate-50 p-5 sm:p-6">
            <h2 className="mb-3 text-xl font-bold text-slate-900">
              Practical learning exercise
            </h2>

            <p className="mb-3 leading-7">
              If you are learning network defense, start with a home lab or
              another network you are authorized to administer.
            </p>

            <ol className="ml-5 list-decimal space-y-2 leading-7">
              <li>Identify the firewall on your router or test environment.</li>
              <li>Review available inbound and outbound security settings.</li>
              <li>
                Examine logs and learn how permitted and blocked traffic is
                recorded.
              </li>
              <li>
                Study IPS detection using an isolated lab and authorized test
                traffic.
              </li>
              <li>
                Document policy changes and verify that normal connectivity
                still works.
              </li>
            </ol>

            <p className="mt-3 leading-7">
              Do not expose administrative interfaces to the public internet
              or disable protections on a production network to experiment.
            </p>
          </section>

          <section id="faqs" className="mb-10">
            <h2 className="mb-5 text-2xl font-bold text-slate-900">
              Frequently asked questions
            </h2>

            <div className="space-y-5">
              {faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="border-b border-slate-200 pb-5"
                >
                  <h3 className="mb-2 text-lg font-semibold text-slate-900">
                    {faq.question}
                  </h3>
                  <p className="leading-7 text-slate-700">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-3 text-2xl font-bold text-slate-900">
              Continue learning network security
            </h2>

            <p className="mb-5 leading-7">
              Explore intrusion detection, network monitoring, and wireless
              security to build a broader understanding of network defense.
            </p>

            <RelatedTopics
              eyebrow="Related networking guides"
              title="Explore related topics"
              description="Continue learning about network security and practical defense."
              links={topics}
            />
          </section>

          <footer className="border-t border-slate-200 pt-5">
            <p className="text-sm leading-6 text-slate-500">
              This guide is for educational purposes. Firewall and IPS
              capabilities vary by product, configuration, and deployment.
              Always test security changes in an authorized environment.
            </p>
          </footer>
        </article>
      </main>
    </>
  );
}
