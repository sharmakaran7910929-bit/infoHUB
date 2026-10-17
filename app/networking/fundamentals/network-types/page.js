import Link from "next/link";
import RelatedTopics from "../../../../components/ContinueReading";
import AdSlot from "../../../../components/AdSlot";

export const metadata = {
  title: "Types of Computer Networks | PAN, LAN, WLAN, MAN, WAN and VPN",
  description:
    "Learn the Main Types of Computer Networks, including PAN, LAN, WLAN, CAN, MAN, WAN, SAN, and VPN, with practical examples and a comparison table.",
  alternates: {
    canonical: "/networking/fundamentals/network-types",
  },
};

const networkTypes = [
  {
    name: "PAN",
    fullName: "Personal Area Network",
    range: "Around an individual",
    example: "A phone connected to wireless earbuds",
    description:
      "A Personal Area Network connects personal devices over a short distance. Bluetooth is a common way to connect a phone, smartwatch, headphones, or keyboard. Some PAN connections use USB or other short-range technologies.",
    useCase:
      "Connecting personal devices and exchanging data over a short distance.",
  },
  {
    name: "LAN",
    fullName: "Local Area Network",
    range: "A room, home, office, or building",
    example: "Office computers connected to a network switch",
    description:
      "A Local Area Network connects devices within a limited area. Ethernet and Wi-Fi are common technologies used in LANs. A LAN can support file sharing, printers, internal applications, and internet access when connected to a router.",
    useCase:
      "Connecting devices and sharing resources within a home, school, or business.",
  },
  {
    name: "WLAN",
    fullName: "Wireless Local Area Network",
    range: "A local area covered by wireless access points",
    example: "Laptops and phones connected to office Wi-Fi",
    description:
      "A Wireless Local Area Network is a LAN that uses wireless communication, commonly Wi-Fi, to connect devices. Wireless access points provide connectivity, while the wider network may also include switches, routers, and wired links.",
    useCase:
      "Providing local network access without requiring an Ethernet cable for every device.",
  },
  {
    name: "CAN",
    fullName: "Campus Area Network",
    range: "Multiple buildings within a campus or site",
    example: "A university connecting its library, labs, and administration buildings",
    description:
      "A Campus Area Network connects multiple local networks across a relatively concentrated site, such as a university, hospital campus, or business complex. The buildings may be connected using fiber-optic links or other network infrastructure.",
    useCase:
      "Sharing network services and connecting departments across a campus.",
  },
  {
    name: "MAN",
    fullName: "Metropolitan Area Network",
    range: "A city or metropolitan region",
    example: "A network connecting offices in different parts of a city",
    description:
      "A Metropolitan Area Network connects networks across a city or a large urban area. It may use provider-operated fiber infrastructure, Ethernet services, or other telecommunications links to connect sites that are farther apart than a typical campus.",
    useCase:
      "Connecting branches, institutions, or infrastructure across a metropolitan area.",
  },
  {
    name: "WAN",
    fullName: "Wide Area Network",
    range: "Large geographic areas, including countries",
    example: "A company connecting offices in India and other countries",
    description:
      "A Wide Area Network connects networks over large geographic distances. It can use leased circuits, provider networks, internet-based connections, and other technologies. The internet is the most familiar example of a global interconnection of networks, though a private WAN may be limited to one organization.",
    useCase:
      "Connecting geographically separated offices, data centers, and remote locations.",
  },
  {
    name: "SAN",
    fullName: "Storage Area Network",
    range: "Usually a data center or enterprise environment",
    example: "Servers accessing shared storage systems",
    description:
      "A Storage Area Network is a specialized network that provides servers with access to shared storage. Technologies can include Fibre Channel and storage protocols carried over Ethernet or IP. A SAN is classified by its purpose rather than simply by geographic coverage.",
    useCase:
      "Supporting centralized storage for servers, databases, and enterprise applications.",
  },
];

const comparisonRows = [
  ["PAN", "Personal devices", "Bluetooth or USB", "Phone connected to earbuds"],
  ["LAN", "Local site", "Ethernet or Wi-Fi", "Home or office network"],
  ["WLAN", "Local wireless coverage", "Wi-Fi", "Wireless office network"],
  ["CAN", "Campus or site", "Fiber or Ethernet links", "University buildings"],
  ["MAN", "Metropolitan area", "Provider or metro links", "City-wide branch network"],
  ["WAN", "Large geographic area", "Multiple WAN technologies", "National company network"],
  ["SAN", "Storage infrastructure", "Fibre Channel or IP-based storage", "Data-center storage"],
];

export default function NetworkTypesPage() {
  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      {/* Introduction */}
      <section className="max-w-4xl">
        <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
          Networking Fundamentals
        </p>

        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
          Types of Computer Networks
        </h2>

        <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
          A smartwatch communicating with a phone, computers sharing files in
          an office, and company branches exchanging information across
          countries all rely on networking. However, these networks do not
          serve the same purpose or cover the same distance. Understanding
          network types helps explain how devices connect, how organizations
          design their infrastructure, and which technologies may be suitable
          for different situations.
        </p>

        <p className="mt-4 leading-7 text-slate-600">
          Computer networks are commonly classified by their geographic
          coverage, such as PAN, LAN, CAN, MAN, and WAN. Other terms describe
          the connection method or purpose: WLAN refers to wireless local
          networking, while SAN refers to specialized storage networking.
          VPN describes a different concept: a virtual private connection
          built over an existing network.
        </p>
      </section>

      {/* Quick overview */}
      <section className="mt-8 rounded-2xl border border-blue-100 bg-blue-50/70 p-5 sm:p-7">
        <h3 className="text-lg font-semibold text-slate-950">
          Quick overview
        </h3>

        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {[
            ["PAN", "Connects personal devices"],
            ["LAN", "Connects devices at a local site"],
            ["WLAN", "Connects a LAN wirelessly"],
            ["CAN", "Connects networks across a campus"],
            ["MAN", "Connects networks across a city"],
            ["WAN", "Connects networks over long distances"],
          ].map(([name, description]) => (
            <div
              key={name}
              className="rounded-xl border border-blue-100 bg-white p-4"
            >
              <div className="font-semibold text-blue-700">{name}</div>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                {description}
              </p>
            </div>
          ))}
        </div>
      </section>
  <AdSlot />
      {/* Main network types */}
      <section id="network-types-explained" className="mt-14 scroll-mt-24">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
          Seven Network Types Explained
        </h2>

        <p className="mt-4 max-w-4xl leading-7 text-slate-600">
          The following categories illustrate common networking concepts.
          Their coverage ranges are approximate descriptions, not fixed
          technical limits. Actual network size depends on the technology,
          design, and environment.
        </p>

        <div className="mt-7 space-y-5">
          {networkTypes.map((network, index) => (
            <article
              key={network.name}
              id={`network-${network.name.toLowerCase()}`}
              className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-5 sm:p-7"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:gap-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-lg font-bold text-blue-700">
                  {network.name}
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                    Network type {index + 1}
                  </p>

                  <h3 className="mt-1 text-xl font-semibold tracking-tight text-slate-950 sm:text-2xl">
                    {network.fullName}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {network.description}
                  </p>

                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-xl bg-slate-50 p-4">
                      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                        Typical coverage
                      </p>
                      <p className="mt-2 text-sm leading-6 text-slate-800">
                        {network.range}
                      </p>
                    </div>

                    <div className="rounded-xl bg-slate-50 p-4">
                      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                        Real-world example
                      </p>
                      <p className="mt-2 text-sm leading-6 text-slate-800">
                        {network.example}
                      </p>
                    </div>
                  </div>

                  <p className="mt-4 text-sm leading-6 text-slate-600">
                    <strong className="text-slate-900">Common use:</strong>{" "}
                    {network.useCase}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* VPN section */}
      <section id="vpn-networking" className="mt-14 scroll-mt-24">
        <div className="rounded-2xl border border-blue-100 bg-blue-50/60 p-5 sm:p-7">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-700">
            An important distinction
          </p>

          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
            What Is a VPN?
          </h2>

          <p className="mt-4 leading-7 text-slate-700">
            A Virtual Private Network creates a logical private connection
            across an underlying network, often the public internet. A VPN can
            encrypt traffic between a device and a VPN endpoint, or between
            two networks, depending on its configuration and protocol.
          </p>

          <p className="mt-4 leading-7 text-slate-700">
            For example, an employee working from home might use a company VPN
            to access internal business systems. A site-to-site VPN can connect
            two office networks securely across an internet connection.
          </p>

          <p className="mt-4 leading-7 text-slate-700">
            A VPN is not a guarantee of complete anonymity or protection from
            every cyber threat. The protection it provides depends on the
            implementation, endpoint security, routing configuration, and
            which traffic passes through the VPN.
          </p>

          <p className="mt-4 text-sm leading-6 text-slate-600">
            Unlike LAN or WAN, VPN describes a virtual private networking
            mechanism rather than a geographic coverage category. A VPN can
            operate across a LAN, a WAN, or the internet.
          </p>
        </div>
      </section>
<AdSlot />
      {/* Comparison table */}
      <section id="network-types-comparison" className="mt-14 scroll-mt-24">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
          Network Types Comparison Table
        </h2>

        <p className="mt-4 max-w-4xl leading-7 text-slate-600">
          Use this table as a quick reference. The categories overlap in some
          cases because they describe different aspects of networking.
        </p>

        <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
          <table className="w-full min-w-[680px] border-collapse text-left text-sm">
            <thead className="bg-slate-100 text-slate-700">
              <tr>
                <th className="px-4 py-4 font-semibold">Type</th>
                <th className="px-4 py-4 font-semibold">Typical scope</th>
                <th className="px-4 py-4 font-semibold">Common technology</th>
                <th className="px-4 py-4 font-semibold">Example</th>
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

        <p className="mt-3 text-sm leading-6 text-slate-500">
          Note: Technologies listed are examples, not requirements. Network
          implementations can use different technologies depending on their
          needs.
        </p>
      </section>

      {/* Choosing a network */}
      <section id="choosing-network-types" className="mt-14 scroll-mt-24">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
          How Do You Choose the Right Network?
        </h2>

        <p className="mt-4 max-w-4xl leading-7 text-slate-600">
          Network selection depends on more than distance. The number of
          devices, performance requirements, security needs, budget, and
          management responsibilities all matter.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {[
            {
              title: "For a home",
              description:
                "A LAN with Wi-Fi and Ethernet is usually enough to connect personal devices, televisions, printers, and smart-home equipment. A suitable router and properly configured wireless security are important.",
            },
            {
              title: "For an office",
              description:
                "A business may use wired LAN connections for fixed workstations, WLAN for mobile devices, and managed switches and access points. Guest access and internal business systems may need separate security controls.",
            },
            {
              title: "For multiple buildings",
              description:
                "A campus network or WAN design may connect separate local networks. Fiber links, routing, redundancy, and access policies help determine reliability and performance.",
            },
            {
              title: "For remote access",
              description:
                "A VPN can provide protected connectivity to approved company resources. Strong authentication, access restrictions, endpoint protection, and monitoring remain necessary.",
            },
          ].map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-white p-5"
            >
              <h3 className="font-semibold text-slate-950">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Security considerations */}
      <section id="network-security-basics" className="mt-14 scroll-mt-24">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
          Why Network Types Matter for Security
        </h2>

        <p className="mt-4 max-w-4xl leading-7 text-slate-600">
          Network design influences where security controls should be applied.
          A home WLAN, a corporate LAN, a campus network, and a remote-access
          VPN can have different risks and administrative requirements.
          Understanding the environment helps defenders choose appropriate
          controls instead of assuming one solution fits every network.
        </p>

        <ul className="mt-5 space-y-3">
          {[
            "Use strong Wi-Fi security and change default administrative credentials on network equipment.",
            "Separate guest devices from sensitive business systems when the environment requires it.",
            "Limit access to services and devices according to business needs.",
            "Monitor relevant network activity and investigate unusual connections rather than treating every unfamiliar connection as malicious.",
            "Keep routers, access points, switches, and other network equipment updated and securely configured.",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-700">
                ✓
              </span>
              <span className="text-sm leading-7 text-slate-600 sm:text-base">
                {item}
              </span>
            </li>
          ))}
        </ul>

        <Link
          href="/networking/network-security"
          className="mt-6 inline-flex min-h-11 items-center justify-center rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
        >
          Continue to Network Security
          <span className="ml-2" aria-hidden="true">→</span>
        </Link>
      </section>
 <AdSlot />
      {/* FAQs */}
      <section id="network-types-faq" className="mt-14 scroll-mt-24">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
          Frequently Asked Questions
        </h2>

        <div className="mt-6 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white px-5 sm:px-6">
          <article className="py-5">
            <h3 className="font-semibold text-slate-950">
              What are the main types of computer networks?
            </h3>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              Common categories include PAN, LAN, WLAN, CAN, MAN, and WAN.
              SAN is used for specialized storage networking, while VPN refers
              to a virtual private connection that can operate over an
              existing network.
            </p>
          </article>

          <article className="py-5">
            <h3 className="font-semibold text-slate-950">
              Is Wi-Fi the same as a LAN?
            </h3>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              No. Wi-Fi is a wireless networking technology. A WLAN is a
              wireless local area network. A LAN can use wired Ethernet,
              wireless connections, or both.
            </p>
          </article>

          <article className="py-5">
            <h3 className="font-semibold text-slate-950">
              What is the difference between LAN and WAN?
            </h3>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              A LAN typically connects devices within a local site, while a
              WAN connects networks over larger geographic distances. Their
              technologies and ownership arrangements can vary.
            </p>
          </article>

          <article className="py-5">
            <h3 className="font-semibold text-slate-950">
              Is the internet a WAN?
            </h3>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              The internet spans global distances and interconnects many
              networks, so it is often discussed when learning about WANs.
              More precisely, it is a global network of interconnected
              autonomous networks rather than one centrally operated private
              WAN.
            </p>
          </article>

          <article className="py-5">
            <h3 className="font-semibold text-slate-950">
              Which network type is best for a business?
            </h3>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              There is no single best type for every business. A company may
              combine a LAN, WLAN, WAN, and VPN to serve different needs.
              The right design depends on its sites, users, applications,
              security requirements, and budget.
            </p>
          </article>
        </div>
      </section>

      {/* Related topics */}
      <div className="mt-14">
        <RelatedTopics
          eyebrow="Continue Learning"
          title="Explore More Networking Fundamentals"
          description="Now that you understand network types, learn how devices are arranged and how network components work together to provide communication."
          links={[
            {
              href: "/networking/fundamentals",
              label: "Networking Fundamentals",
            },
            {
              href: "/networking/fundamentals/network-topology",
              label: "Network Topology",
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
