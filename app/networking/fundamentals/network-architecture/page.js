import Link from "next/link";
import RelatedTopics from "../../../../components/ContinueReading";
import AdSlot from "../../../../components/AdSlot";

export const metadata = {
  title: "Network Architecture Explained: Client-Server, P2P and Three-Tier Design",
  description:
    "Learn network architecture, client-server and peer-to-peer models, network layers, three-tier design, and security considerations with practical examples.",
  alternates: {
    canonical: "/networking/fundamentals/network-architecture",
  },
};

const architectures = [
  {
    id: "client-server",
    title: "Client-Server Architecture",
    summary: "Clients request resources or services from servers that provide them.",
    example:
      "A browser requests a web page from a web server, which returns the page or its data.",
    structure:
      "Clients initiate requests, while servers provide services such as web pages, files, authentication, or database access. A server can support many clients when appropriately designed and maintained.",
    advantages: [
      "Centralized administration and access control.",
      "Shared data and backups are easier to manage centrally.",
      "Can support many users when capacity is planned appropriately.",
    ],
    disadvantages: [
      "Server failure can interrupt dependent services.",
      "Servers require maintenance, monitoring, and sufficient capacity.",
      "Centralized services can become bottlenecks without suitable design.",
    ],
  },
  {
    id: "peer-to-peer",
    title: "Peer-to-Peer (P2P) Architecture",
    summary:
      "Devices communicate and share resources directly, with each peer potentially acting as both a client and a provider.",
    example:
      "Two computers share files directly over a local network without relying on a dedicated file server.",
    structure:
      "Peers can provide resources directly to one another. Some peer-to-peer systems are limited to a local network, while others coordinate communication across the internet.",
    advantages: [
      "Can be inexpensive to set up for small groups.",
      "Resources can be shared directly between participating devices.",
      "Does not always require a dedicated central server.",
    ],
    disadvantages: [
      "Access control and backups can be harder to manage consistently.",
      "Resource availability may depend on participating peers.",
      "Poor configuration can expose shared files or other resources.",
    ],
  },
  {
    id: "hybrid",
    title: "Hybrid Architecture",
    summary:
      "Combines centralized services with direct communication or distributed components where appropriate.",
    example:
      "An organization uses centralized identity management and file servers while allowing approved devices to communicate directly for specific tasks.",
    structure:
      "Different services use different architectural approaches according to their needs. Centralized control can coexist with distributed processing, direct communication, or cloud-based services.",
    advantages: [
      "Can balance centralized control and flexibility.",
      "Allows different services to use suitable designs.",
      "Can adapt to different business and operational requirements.",
    ],
    disadvantages: [
      "May require more planning and administration.",
      "Security policies must work across different components.",
      "Troubleshooting can involve several interconnected systems.",
    ],
  },
];

const designLayers = [
  {
    title: "Access Layer",
    description:
      "Connects user devices such as computers, phones, printers, and wireless clients. Switches and Wi-Fi access points commonly provide connectivity at this layer.",
  },
  {
    title: "Distribution Layer",
    description:
      "Aggregates access networks and applies policies such as routing, segmentation, and traffic control where the network design requires them.",
  },
  {
    title: "Core Layer",
    description:
      "Provides fast, resilient connectivity between major parts of a larger network. Smaller networks may combine core and distribution functions instead of using a separate core.",
  },
];

const comparisonRows = [
  [
    "Client-server",
    "Clients request services from servers",
    "Centralized management and shared services",
    "Web applications and business systems",
  ],
  [
    "Peer-to-peer",
    "Peers share resources directly",
    "Distributed management and resource availability",
    "Direct file sharing",
  ],
  [
    "Hybrid",
    "Combines multiple approaches",
    "Depends on the components and their dependencies",
    "Organizations using cloud and local services",
  ],
];

const tcpIpLayers = [
  {
    name: "Application",
    responsibility: "Provides network services to applications.",
    examples: "HTTP, DNS, SMTP",
  },
  {
    name: "Transport",
    responsibility: "Provides communication between application endpoints.",
    examples: "TCP, UDP",
  },
  {
    name: "Internet",
    responsibility: "Handles IP addressing and routing between networks.",
    examples: "IPv4, IPv6, ICMP",
  },
  {
    name: "Network Access",
    responsibility: "Handles local-link communication and access to the transmission medium.",
    examples: "Ethernet, Wi-Fi",
  },
];

const securityPractices = [
  {
    title: "Network Segmentation",
    description:
      "Separate systems into appropriate network segments or VLANs and control traffic between them. Segmentation can limit lateral movement when supported by effective access rules.",
  },
  {
    title: "Firewalls and Access Rules",
    description:
      "Allow necessary connections and restrict unwanted traffic. Review rules regularly and ensure they reflect current business and security requirements.",
  },
  {
    title: "Monitoring and Detection",
    description:
      "Collect relevant logs and monitor for unusual connections, unexpected services, and possible signs of compromise. Monitoring supports detection but does not replace prevention and response.",
  },
  {
    title: "Resilience and Recovery",
    description:
      "Identify single points of failure, protect configuration backups, maintain recovery procedures, and test whether critical services can be restored.",
  },
];

const learningSteps = [
  {
    title: "Learn the Basics",
    description:
      "Understand IP addresses, switches, routers, DNS, DHCP, and common network protocols.",
  },
  {
    title: "Map a Home Network",
    description:
      "Identify the router, connected devices, Wi-Fi access, and how internet traffic leaves the local network.",
  },
  {
    title: "Practice in a Lab",
    description:
      "Use a network simulator or your own authorized lab to experiment with addressing, routing, and segmentation.",
  },
  {
    title: "Add Defensive Controls",
    description:
      "Learn firewall rules, secure Wi-Fi settings, network monitoring, and how to review logs.",
  },
];

export default function NetworkArchitecturePage() {
  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      {/* Introduction */}
      <section className="max-w-4xl">
        <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
          Networking Fundamentals
        </p>

        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
          Network Architecture Explained
        </h2>

        <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
          Network architecture describes how devices, network services,
          communication rules, and security controls work together to provide
          reliable connectivity. Understanding the architecture helps you
          troubleshoot problems, plan networks, and identify where security
          protections belong.
        </p>

        <p className="mt-4 leading-7 text-slate-600">
          From a small home network to a large enterprise, architecture
          influences how devices communicate, how services are delivered, how
          access is controlled, and how the network handles failures and growth.
          Learning these principles provides a foundation for network
          administration and defensive cybersecurity.
        </p>
      </section>

      {/* Architecture, topology, and network types */}
      <section className="mt-8 grid gap-4 md:grid-cols-3">
        <article className="rounded-2xl border border-blue-100 bg-blue-50/70 p-5 sm:p-6">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-700">
            Architecture
          </p>
          <h3 className="mt-2 text-lg font-semibold text-slate-950">
            How the network works as a system
          </h3>
          <p className="mt-3 text-sm leading-7 text-slate-700">
            Describes the components, roles, services, communication rules,
            and policies that form the overall network design.
          </p>
        </article>

        <article className="rounded-2xl border border-indigo-100 bg-indigo-50/60 p-5 sm:p-6">
          <p className="text-sm font-semibold uppercase tracking-wider text-indigo-700">
            Topology
          </p>
          <h3 className="mt-2 text-lg font-semibold text-slate-950">
            How network connections are arranged
          </h3>
          <p className="mt-3 text-sm leading-7 text-slate-700">
            Describes the physical or logical connections between devices,
            including star, mesh, tree, and hybrid layouts.
          </p>
        </article>

        <article className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
          <p className="text-sm font-semibold uppercase tracking-wider text-slate-600">
            Network Type
          </p>
          <h3 className="mt-2 text-lg font-semibold text-slate-950">
            What kind of network it is
          </h3>
          <p className="mt-3 text-sm leading-7 text-slate-700">
            Classifies networks by characteristics such as coverage or purpose,
            including LAN, WAN, WLAN, and SAN.
          </p>
        </article>
      </section>

      {/* Architecture models overview */}
      <section className="mt-14">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
          Common Network Architecture Models
        </h2>

        <p className="mt-4 max-w-4xl leading-7 text-slate-600">
          Different models suit different requirements. The right choice
          depends on the number of users, the services being provided, the
          required level of control, available resources, and security needs.
        </p>

        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {architectures.map((architecture) => (
            <a
              key={architecture.id}
              href={`#${architecture.id}`}
              className="group rounded-xl border border-slate-200 bg-white p-4 transition-colors hover:border-blue-300 hover:bg-blue-50/40"
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className="font-semibold text-slate-950">
                  {architecture.title}
                </h3>
                <span
                  className="text-blue-600 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  →
                </span>
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {architecture.summary}
              </p>
            </a>
          ))}
        </div>
      </section>

      <AdSlot />

      {/* Detailed architecture models */}
      <section className="mt-14">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
          How Each Architecture Works
        </h2>

        <p className="mt-4 max-w-4xl leading-7 text-slate-600">
          These models describe how services and resources are organized.
          Real-world systems may combine approaches depending on their
          technical and operational requirements.
        </p>

        <div className="mt-7 grid gap-5 lg:grid-cols-2 2xl:grid-cols-3">
          {architectures.map((architecture, index) => (
            <article
              key={architecture.id}
              id={architecture.id}
              className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-5 sm:p-7"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-sm font-bold text-blue-700">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="text-xl font-semibold tracking-tight text-slate-950">
                    {architecture.title}
                  </h3>

                  <p className="mt-2 font-medium text-blue-700">
                    {architecture.summary}
                  </p>
                </div>
              </div>

              <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                {architecture.structure}
              </p>

              <div className="mt-5 rounded-xl bg-slate-50 p-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Practical Example
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  {architecture.example}
                </p>
              </div>

              <div className="mt-5 grid gap-5 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold text-slate-950">Advantages</h4>
                  <ul className="mt-3 space-y-2">
                    {architecture.advantages.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm leading-6 text-slate-600"
                      >
                        <span className="mt-0.5 text-blue-600">+</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-950">Limitations</h4>
                  <ul className="mt-3 space-y-2">
                    {architecture.disadvantages.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm leading-6 text-slate-600"
                      >
                        <span className="mt-0.5 text-slate-500">−</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Three-tier design */}
      <section id="three-tier-design" className="mt-14 scroll-mt-24">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
          The Three-Tier Network Design
        </h2>

        <p className="mt-4 max-w-4xl leading-7 text-slate-600">
          Larger campus and enterprise networks sometimes use a hierarchical
          design with access, distribution, and core layers. Separating these
          responsibilities can make a network easier to scale, manage, and
          troubleshoot. Smaller networks may combine some of these functions.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {designLayers.map((layer, index) => (
            <article
              key={layer.title}
              className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 font-bold text-blue-700">
                {index + 1}
              </div>

              <h3 className="mt-4 text-lg font-semibold text-slate-950">
                {layer.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                {layer.description}
              </p>
            </article>
          ))}
        </div>

        <p className="mt-5 text-sm leading-7 text-slate-600">
          In smaller networks, two-tier or collapsed-core designs can combine
          distribution and core functions. The best design meets the network&apos;s
          actual needs without unnecessary complexity.
        </p>
      </section>

      {/* TCP/IP layers */}
      <section id="tcp-ip-layers" className="mt-14 scroll-mt-24">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
          How Network Layers Help Communication
        </h2>

        <p className="mt-4 max-w-4xl leading-7 text-slate-600">
          Network architecture also includes the protocols and layers that let
          different systems communicate. The TCP/IP model is a useful practical
          reference for understanding how data moves through a network.
        </p>

        <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
          <table className="w-full min-w-[650px] border-collapse text-left text-sm">
            <thead className="bg-slate-100 text-slate-700">
              <tr>
                <th className="px-4 py-4 font-semibold">TCP/IP Layer</th>
                <th className="px-4 py-4 font-semibold">Main Responsibility</th>
                <th className="px-4 py-4 font-semibold">Examples</th>
              </tr>
            </thead>
            <tbody>
              {tcpIpLayers.map((layer, index) => (
                <tr
                  key={layer.name}
                  className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}
                >
                  <td className="border-t border-slate-200 px-4 py-4 font-semibold text-slate-900">
                    {layer.name}
                  </td>
                  <td className="border-t border-slate-200 px-4 py-4 leading-6 text-slate-600">
                    {layer.responsibility}
                  </td>
                  <td className="border-t border-slate-200 px-4 py-4 leading-6 text-slate-600">
                    {layer.examples}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 rounded-2xl border border-blue-100 bg-blue-50/60 p-5 sm:p-6">
          <h3 className="font-semibold text-slate-950">
            Example: What happens when you open a website?
          </h3>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            DNS may resolve the website&apos;s domain name to an IP address. IP
            routing moves packets toward the destination, TCP may provide
            reliable transport, and HTTPS uses HTTP with TLS protection. Each
            protocol has a different responsibility, but they work together to
            deliver the service.
          </p>
        </div>
      </section>

      <AdSlot />

      {/* Security */}
      <section id="architecture-security" className="mt-14 scroll-mt-24">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
          Network Architecture and Security
        </h2>

        <p className="mt-4 max-w-4xl leading-7 text-slate-600">
          A well-planned architecture makes it easier to control access,
          monitor traffic, isolate problems, and reduce the impact of a
          compromised device. Security should be built into the design rather
          than added only after a problem occurs.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {securityPractices.map((practice) => (
            <article
              key={practice.title}
              className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6"
            >
              <h3 className="font-semibold text-slate-950">
                {practice.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                {practice.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-6 rounded-2xl border border-blue-100 bg-blue-50/60 p-5 sm:p-6">
          <h3 className="font-semibold text-slate-950">
            Practical example: Protecting a business network
          </h3>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            A business can place employee computers, guest Wi-Fi, and critical
            servers in separate network segments. Carefully configured firewall
            rules can prevent guest devices from reaching internal systems
            while still allowing approved internet access. The effectiveness
            depends on correct configuration and ongoing monitoring.
          </p>
        </div>

        <Link
          href="/networking/network-security"
          className="mt-6 inline-flex min-h-11 items-center justify-center rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
        >
          Explore Network Security
          <span className="ml-2" aria-hidden="true">
            →
          </span>
        </Link>
      </section>

      {/* Comparison */}
      <section id="architecture-comparison" className="mt-14 scroll-mt-24">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
          Network Architecture Comparison
        </h2>

        <p className="mt-4 max-w-4xl leading-7 text-slate-600">
          Each model has different strengths. The right choice depends on the
          services required, management needs, availability expectations, and
          the security risks that must be addressed.
        </p>

        <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
          <table className="w-full min-w-[700px] border-collapse text-left text-sm">
            <thead className="bg-slate-100 text-slate-700">
              <tr>
                <th className="px-4 py-4 font-semibold">Model</th>
                <th className="px-4 py-4 font-semibold">Basic Structure</th>
                <th className="px-4 py-4 font-semibold">Main Consideration</th>
                <th className="px-4 py-4 font-semibold">Example Use</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row, index) => (
                <tr
                  key={row[0]}
                  className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}
                >
                  {row.map((cell, cellIndex) => (
                    <td
                      key={cellIndex}
                      className="border-t border-slate-200 px-4 py-4 leading-6 text-slate-600"
                    >
                      {cellIndex === 0 ? (
                        <strong className="text-slate-900">{cell}</strong>
                      ) : (
                        cell
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Learning path */}
      <section id="learning-network-architecture" className="mt-14 scroll-mt-24">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
          How to Start Learning Network Architecture
        </h2>

        <p className="mt-4 max-w-4xl leading-7 text-slate-600">
          Build your understanding step by step, then practice in a simulator
          or on a network you own or are authorized to manage.
        </p>

        <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {learningSteps.map((step, index) => (
            <article
              key={step.title}
              className="rounded-2xl border border-slate-200 bg-white p-5"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-sm font-bold text-blue-700">
                {index + 1}
              </span>
              <h3 className="mt-4 font-semibold text-slate-950">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <AdSlot />

      {/* FAQs */}
      <section id="architecture-faq" className="mt-14 scroll-mt-24">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
          Frequently Asked Questions
        </h2>

        <div className="mt-6 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white px-5 sm:px-6">
          <article className="py-5">
            <h3 className="font-semibold text-slate-950">
              What is network architecture in simple terms?
            </h3>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              Network architecture is the overall plan for how devices,
              connections, services, protocols, and security controls work
              together to provide communication.
            </p>
          </article>

          <article className="py-5">
            <h3 className="font-semibold text-slate-950">
              Is network architecture the same as network design?
            </h3>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              They are closely related. Architecture describes the overall
              structure and guiding principles, while network design often
              covers the detailed decisions and implementation used to build
              the network.
            </p>
          </article>

          <article className="py-5">
            <h3 className="font-semibold text-slate-950">
              Is client-server always better than peer-to-peer?
            </h3>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              No. Client-server can simplify centralized administration and
              shared services. Peer-to-peer can be useful for limited direct
              sharing. The appropriate choice depends on requirements,
              resources, and risk.
            </p>
          </article>

          <article className="py-5">
            <h3 className="font-semibold text-slate-950">
              Should every network use a three-tier design?
            </h3>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              No. Small networks often work well with simpler designs. A
              separate access, distribution, and core structure is more useful
              when scale, performance, resilience, and operational needs justify
              the added complexity.
            </p>
          </article>

          <article className="py-5">
            <h3 className="font-semibold text-slate-950">
              Does secure architecture guarantee that a network cannot be attacked?
            </h3>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              No. Good architecture can reduce risk, but security also requires
              timely updates, secure configuration, identity protection,
              monitoring, backups, and an incident response plan.
            </p>
          </article>
        </div>
      </section>

      {/* Related topics */}
      <div className="mt-14">
        <RelatedTopics
          eyebrow="Continue Learning"
          title="Explore More Networking Fundamentals"
          description="Understand the types of networks you may encounter and how network topology and architecture work together."
          links={[
            {
              href: "/networking/fundamentals",
              label: "Networking Fundamentals",
            },
            {
              href: "/networking/fundamentals/network-types",
              label: "Network Types",
            },
            {
              href: "/networking/fundamentals/network-topology",
              label: "Network Topology",
            },
          ]}
        />
      </div>
    </main>
  );
}
