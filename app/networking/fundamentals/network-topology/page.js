import Link from "next/link";
import RelatedTopics from "../../../../components/ContinueReading";
import AdSlot from "../../../../components/AdSlot";

export const metadata = {
  title: "Network Topology Explained: Star, Bus, Ring, Mesh and Tree",
  description:
    "Learn network topology types, including star, bus, ring, mesh, tree, and hybrid topologies, with diagrams, real-world examples, advantages, disadvantages, and security considerations.",
  alternates: {
    canonical: "/networking/fundamentals/network-topology",
  },
};

const topologies = [
  {
    id: "star",
    name: "Star Topology",
    summary: "Devices connect to a central device.",
    example: "Computers connected to a central network switch",
    structure:
      "Every connected device has its own link to a central switch or access point. The central device coordinates connectivity between devices on the network.",
    advantages: [
      "A failed cable usually affects only the device connected through that cable.",
      "Individual connections are relatively easy to troubleshoot.",
      "Adding another device is generally straightforward when ports and capacity are available.",
    ],
    disadvantages: [
      "Failure of the central device can disrupt many or all connected devices.",
      "The central device needs enough ports and capacity for the network.",
      "More individual cable runs may be needed than in some simpler layouts.",
    ],
  },
  {
    id: "bus",
    name: "Bus Topology",
    summary: "Devices share a common communication backbone.",
    example: "Legacy Ethernet networks using a shared coaxial cable",
    structure:
      "Devices attach to a shared transmission medium. In traditional bus networks, signals travel along the common cable, and proper termination helps prevent signal reflections.",
    advantages: [
      "Historically, it could use less cable than some alternative layouts.",
      "Its shared-medium structure is relatively simple to understand.",
    ],
    disadvantages: [
      "A backbone cable fault can disrupt communication for multiple devices.",
      "Shared-medium communication can become less efficient as traffic increases.",
      "Fault isolation and expansion can be difficult compared with modern switched networks.",
    ],
  },
  {
    id: "ring",
    name: "Ring Topology",
    summary: "Devices form a closed loop.",
    example: "A ring-based network using a ring access protocol",
    structure:
      "Each node connects to neighboring nodes in a logical or physical loop. Depending on the technology, data may travel in one direction, both directions, or through a protocol that manages access to the ring.",
    advantages: [
      "Some ring protocols provide predictable access to the communication medium.",
      "A well-designed dual-ring system can provide an alternative path after certain failures.",
    ],
    disadvantages: [
      "A break or failed node can disrupt a basic single ring if no recovery mechanism exists.",
      "Troubleshooting can require understanding the ring protocol and its recovery behavior.",
      "Adding or removing devices may affect the ring, depending on its implementation.",
    ],
  },
  {
    id: "mesh",
    name: "Mesh Topology",
    summary: "Nodes have multiple paths between them.",
    example: "Routers interconnected to provide alternative network paths",
    structure:
      "In a full mesh, every node has a direct link to every other node. In a partial mesh, only selected nodes have multiple direct connections. Networks can also provide multiple paths through intermediate routers without forming a full physical mesh.",
    advantages: [
      "Alternative paths can keep communication working when a link fails.",
      "Multiple paths can improve resilience and support traffic distribution.",
      "It can suit environments where connectivity is particularly important.",
    ],
    disadvantages: [
      "A full mesh becomes expensive and complex as the number of nodes increases.",
      "Routing, monitoring, and maintaining many connections can require more effort.",
      "Multiple paths do not automatically provide security or prevent every outage.",
    ],
  },
  {
    id: "tree",
    name: "Tree Topology",
    summary: "Devices and network segments are organized hierarchically.",
    example: "An organization with core, distribution, and access switches",
    structure:
      "A tree uses parent-child relationships between network segments or devices. Larger networks commonly use hierarchical designs to connect access-layer equipment to distribution and core layers.",
    advantages: [
      "The hierarchical design can make a large network easier to organize.",
      "Departments or buildings can be managed as separate network segments.",
      "Capacity can be expanded by adding suitable branches and equipment.",
    ],
    disadvantages: [
      "Failures near the top of the hierarchy can affect many downstream devices.",
      "Poorly designed uplinks can create bottlenecks.",
      "Redundancy and careful configuration are needed to reduce single points of failure.",
    ],
  },
  {
    id: "hybrid",
    name: "Hybrid Topology",
    summary: "Two or more topology patterns are combined.",
    example: "Office floors using star layouts, connected through redundant backbone links",
    structure:
      "A hybrid network combines different physical or logical layouts to meet practical requirements. For example, individual office floors may use star layouts while distribution switches connect the floors using redundant links.",
    advantages: [
      "The design can match the needs of different buildings, teams, or applications.",
      "Redundancy can be added to the parts of the network that need it most.",
      "The network can grow without forcing every area to use an identical layout.",
    ],
    disadvantages: [
      "Design and documentation can become more complicated.",
      "Interconnected components may require different configuration and troubleshooting skills.",
      "Poor planning can create hidden dependencies or unexpected failure points.",
    ],
  },
];

const comparisonRows = [
  ["Star", "Central switch or access point", "Central device or its uplink", "Modern office LANs"],
  ["Bus", "Shared backbone cable", "Backbone cable or termination fault", "Legacy shared Ethernet"],
  ["Ring", "Closed loop", "A break in a basic ring without recovery", "Some specialized ring networks"],
  ["Mesh", "Multiple interconnections", "Depends on remaining paths and routing", "Resilient routed networks"],
  ["Tree", "Hierarchical branches", "A failed upstream component can affect a branch", "Campus and enterprise networks"],
  ["Hybrid", "Combination of layouts", "Depends on design and redundancy", "Multi-floor business networks"],
];

export default function NetworkTopologyPage() {
  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      {/* Introduction */}
      <section className="max-w-4xl">
        <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
          Networking Fundamentals
        </p>

        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
          Network Topology Explained
        </h2>

        <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
          A network can contain fast computers, modern switches, and reliable
          cables yet still suffer from outages if its connections are poorly
          designed. Network topology helps explain how devices are connected,
          how communication paths are arranged, and which parts of the network
          may be affected when something fails.
        </p>

        <p className="mt-4 leading-7 text-slate-600">
          From a small home network to a university campus or enterprise
          infrastructure, topology influences fault isolation, expansion,
          performance, and resilience. Learning the major topologies gives you
          a practical foundation for network design, troubleshooting, and
          defensive security.
        </p>
      </section>

      {/* Key distinction */}
      <section className="mt-8 grid gap-4 md:grid-cols-2">
        <article className="rounded-2xl border border-blue-100 bg-blue-50/70 p-5 sm:p-6">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-700">
            Physical topology
          </p>
          <h3 className="mt-2 text-lg font-semibold text-slate-950">
            How equipment is connected
          </h3>
          <p className="mt-3 text-sm leading-7 text-slate-700">
            Describes the actual cables, ports, access points, switches, and
            other physical connections. It helps answer questions such as
            which switch a computer connects to and where a cable fault may
            occur.
          </p>
        </article>

        <article className="rounded-2xl border border-indigo-100 bg-indigo-50/60 p-5 sm:p-6">
          <p className="text-sm font-semibold uppercase tracking-wider text-indigo-700">
            Logical topology
          </p>
          <h3 className="mt-2 text-lg font-semibold text-slate-950">
            How communication behaves
          </h3>
          <p className="mt-3 text-sm leading-7 text-slate-700">
            Describes how data flows between devices and how communication is
            organized. Logical traffic paths do not always match the physical
            layout. Switching, routing, VLANs, and wireless protocols influence
            how communication behaves.
          </p>
        </article>
      </section>

      {/* At a glance */}
      <section className="mt-14">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
          The Main Types of Network Topology
        </h2>

        <p className="mt-4 max-w-4xl leading-7 text-slate-600">
          These are the classic topology patterns used to explain network
          layouts. Real networks often combine them or use logical arrangements
          that are more complex than a single diagram.
        </p>

        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {topologies.map((topology) => (
            <a
              key={topology.id}
              href={`#${topology.id}-topology`}
              className="group rounded-xl border border-slate-200 bg-white p-4 transition-colors hover:border-blue-300 hover:bg-blue-50/40"
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className="font-semibold text-slate-950">
                  {topology.name}
                </h3>
                <span className="text-blue-600 transition-transform group-hover:translate-x-1">
                  →
                </span>
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {topology.summary}
              </p>
            </a>
          ))}
        </div>
      </section>
      <AdSlot />

      {/* Topology explanations */}
      <section className="mt-14">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
          How Each Topology Works
        </h2>

        <div className="mt-7 space-y-5">
          {topologies.map((topology, index) => (
            <article
              key={topology.id}
              id={`${topology.id}-topology`}
              className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-5 sm:p-7"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-sm font-bold text-blue-700">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="text-xl font-semibold tracking-tight text-slate-950 sm:text-2xl">
                    {topology.name}
                  </h3>

                  <p className="mt-2 font-medium text-blue-700">
                    {topology.summary}
                  </p>

                  <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                    {topology.structure}
                  </p>

                  <div className="mt-5 rounded-xl bg-slate-50 p-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Practical example
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-700">
                      {topology.example}
                    </p>
                  </div>

                  <div className="mt-5 grid gap-5 md:grid-cols-2">
                    <div>
                      <h4 className="font-semibold text-slate-950">
                        Advantages
                      </h4>
                      <ul className="mt-3 space-y-2">
                        {topology.advantages.map((item) => (
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
                      <h4 className="font-semibold text-slate-950">
                        Limitations
                      </h4>
                      <ul className="mt-3 space-y-2">
                        {topology.disadvantages.map((item) => (
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
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Comparison table */}
      <section id="topology-comparison" className="mt-14 scroll-mt-24">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
          Network Topology Comparison
        </h2>

        <p className="mt-4 max-w-4xl leading-7 text-slate-600">
          The impact of a failure depends on the actual implementation.
          Redundant links, backup devices, protocols, and configuration can
          change how a network responds.
        </p>

        <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
          <table className="w-full min-w-[700px] border-collapse text-left text-sm">
            <thead className="bg-slate-100 text-slate-700">
              <tr>
                <th className="px-4 py-4 font-semibold">Topology</th>
                <th className="px-4 py-4 font-semibold">Basic structure</th>
                <th className="px-4 py-4 font-semibold">Possible failure impact</th>
                <th className="px-4 py-4 font-semibold">Example use</th>
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
      <AdSlot />

      {/* Practical example */}
      <section id="office-network-example" className="mt-14 scroll-mt-24">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
          Example: Designing an Office Network
        </h2>

        <p className="mt-4 max-w-4xl leading-7 text-slate-600">
          Imagine a business with three floors, employee laptops, desktop
          computers, printers, and a server room. Instead of choosing one
          topology for every connection, the network engineer can combine
          several patterns.
        </p>

        <div className="mt-6 space-y-3">
          {[
            {
              title: "Within each floor",
              description:
                "Computers and printers connect to access switches in a star-like layout. Wireless access points provide Wi-Fi for mobile devices.",
            },
            {
              title: "Between floors",
              description:
                "Uplinks connect floor switches to distribution or core equipment. Redundant uplinks may be included where justified by availability requirements.",
            },
            {
              title: "To other locations",
              description:
                "Routers and WAN services connect the office to remote branches or cloud services. VPNs may protect selected traffic across untrusted networks.",
            },
            {
              title: "For reliability",
              description:
                "Engineers identify critical devices and links, consider backup paths, and test whether the network can recover from expected failures.",
            },
          ].map((item, index) => (
            <div
              key={item.title}
              className="flex gap-4 rounded-xl border border-slate-200 bg-white p-4 sm:p-5"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-sm font-semibold text-blue-700">
                {index + 1}
              </span>
              <div>
                <h3 className="font-semibold text-slate-950">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-5 text-sm leading-7 text-slate-600">
          This is a hybrid design: local star layouts are combined with a
          hierarchical network and potentially redundant connections. The
          result is more realistic than forcing an entire modern office into
          one classic topology.
        </p>
      </section>

      {/* Security and troubleshooting */}
      <section id="topology-security" className="mt-14 scroll-mt-24">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
          Why Network Topology Matters for Security
        </h2>

        <p className="mt-4 max-w-4xl leading-7 text-slate-600">
          Understanding the network layout helps defenders know which devices
          communicate, where traffic passes, and which systems could be
          affected by a compromised device or failed connection. Topology is
          not a security control by itself, but it influences where controls
          and monitoring should be placed.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <article className="rounded-2xl border border-slate-200 bg-white p-5">
            <h3 className="font-semibold text-slate-950">
              Map important connections
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Maintain an accurate inventory of routers, switches, access
              points, servers, and critical links. Documentation makes it
              easier to investigate unexpected traffic and diagnose outages.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-5">
            <h3 className="font-semibold text-slate-950">
              Reduce unnecessary access
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Use appropriate network segmentation, firewall rules, and access
              policies so that devices do not automatically receive access to
              every other system just because they share an infrastructure.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-5">
            <h3 className="font-semibold text-slate-950">
              Monitor critical paths
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Monitor important network links and equipment for outages,
              unusual traffic patterns, and configuration changes. Select
              monitoring points based on the actual network design.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-5">
            <h3 className="font-semibold text-slate-950">
              Test resilience
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Verify that backup links and failover mechanisms work as
              intended. A diagram showing two paths does not guarantee
              redundancy if both depend on the same power source, cable route,
              or upstream device.
            </p>
          </article>
        </div>

        <Link
          href="/networking/network-security"
          className="mt-6 inline-flex min-h-11 items-center justify-center rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
        >
          Explore Network Security
          <span className="ml-2" aria-hidden="true">→</span>
        </Link>
      </section>
 <AdSlot />
      {/* FAQs */}
      <section id="topology-faq" className="mt-14 scroll-mt-24">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
          Frequently Asked Questions
        </h2>

        <div className="mt-6 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white px-5 sm:px-6">
          <article className="py-5">
            <h3 className="font-semibold text-slate-950">
              What is network topology in simple terms?
            </h3>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              Network topology describes how network devices and connections
              are arranged, or how data logically travels through them. It
              helps explain the structure, performance characteristics, and
              possible failure points of a network.
            </p>
          </article>

          <article className="py-5">
            <h3 className="font-semibold text-slate-950">
              Which network topology is most common today?
            </h3>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              Star-like layouts are common in modern Ethernet LANs and Wi-Fi
              networks. Larger networks often use hierarchical or hybrid
              designs rather than a single topology throughout.
            </p>
          </article>

          <article className="py-5">
            <h3 className="font-semibold text-slate-950">
              What is the difference between physical and logical topology?
            </h3>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              Physical topology describes actual equipment connections and
              cabling. Logical topology describes communication paths and
              behavior, which can differ from the physical arrangement.
            </p>
          </article>

          <article className="py-5">
            <h3 className="font-semibold text-slate-950">
              Which topology is best for reliability?
            </h3>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              A topology with well-designed redundant paths can improve
              resilience, but no layout guarantees reliability by itself.
              Equipment redundancy, power, routing, configuration, monitoring,
              and recovery testing all matter.
            </p>
          </article>

          <article className="py-5">
            <h3 className="font-semibold text-slate-950">
              Is topology important for cybersecurity?
            </h3>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              Yes. Knowing how systems connect helps security teams understand
              traffic flows, plan segmentation, place monitoring controls, and
              estimate which systems might be affected by a compromise.
            </p>
          </article>
        </div>
      </section>

      {/* Related topics */}
      <div className="mt-14">
        <RelatedTopics
          eyebrow="Continue Learning"
          title="Explore More Networking Fundamentals"
          description="Understand the types of networks you may encounter and how their components are organized into a complete network design."
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
              href: "/networking/fundamentals/network-architecture",
              label: "Network Architecture",
            },
          ]}
        />
      </div>
    </main>
  );
}