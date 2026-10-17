import Link from "next/link";
import RelatedTopics from "../../../components/ContinueReading";
import AdSlot from "../../../components/AdSlot";

const pageUrl =
  "https://pricetag.co.in/networking/network-devices";

export const metadata = {
  title: "Network Devices | Types, Uses, Examples and Functions",
  description:
    "Learn about Network Devices, including Routers, Switches, Hubs, Bridges, Gateways, Modems, Access points, Firewalls, Repeaters, NICs, proxies, and Load balancers.",
  alternates: {
    canonical: "/networking/network-devices",
  },

};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "TechArticle",
  headline: "Network Devices: Types, Uses, Examples and Functions",
  description:
    "An educational guide to common network devices, their functions, applications, and security considerations.",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": pageUrl,
  },
  author: {
    "@type": "Organization",
    name: "PriceTag HUB",
  },
  publisher: {
    "@type": "Organization",
    name: "PriceTag HUB",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is a network device?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A network device is hardware or a system that connects devices, forwards traffic, provides network access, or protects and manages network communication.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between a router and a switch?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A router forwards IP packets between networks, while a network switch typically forwards Ethernet frames between devices on a local network using MAC addresses.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between a hub and a switch?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A hub repeats incoming signals to its other ports, while a switch learns MAC addresses and normally forwards Ethernet frames only to the relevant destination port.",
      },
    },
    {
      "@type": "Question",
      name: "What is the purpose of a firewall?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A firewall applies security rules to network traffic to allow, block, or inspect communications according to its configuration and capabilities.",
      },
    },
    {
      "@type": "Question",
      name: "Can a router also work as a switch and wireless access point?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Many home routers combine routing, Ethernet switching, wireless access, firewall features, and DHCP services in one device.",
      },
    },
    {
      "@type": "Question",
      name: "Which network devices are important for cybersecurity?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Firewalls, managed switches, routers, wireless access points, intrusion detection systems, intrusion prevention systems, and network monitoring appliances can all support network security.",
      },
    },
    {
      "@type": "Question",
      name: "What is a network interface card?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A network interface card, or NIC, provides a computer or other device with a network connection, such as Ethernet or Wi-Fi.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between an IDS and an IPS?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An intrusion detection system detects and alerts on suspicious activity. An intrusion prevention system can also block or prevent certain detected activity when configured to do so.",
      },
    },
  ],
};

const devices = [
  {
    name: "Router",
    layer: "Layer 3",
    function: "Forwards IP packets between different networks.",
    example: "Connecting a home network to the internet.",
  },
  {
    name: "Network switch",
    layer: "Usually Layer 2",
    function: "Forwards Ethernet frames using MAC address information.",
    example: "Connecting office computers, printers, and servers.",
  },
  {
    name: "Hub",
    layer: "Layer 1",
    function: "Repeats incoming signals to other ports.",
    example: "Legacy Ethernet networks and networking demonstrations.",
  },
  {
    name: "Bridge",
    layer: "Layer 2",
    function: "Connects LAN segments and filters frames using MAC addresses.",
    example: "Connecting two Ethernet segments.",
  },
  {
    name: "Repeater",
    layer: "Layer 1",
    function: "Regenerates or repeats signals to extend a connection.",
    example: "Extending a suitable wired or wireless signal.",
  },
  {
    name: "Gateway",
    layer: "Depends on function",
    function: "Connects systems or networks using different protocols or interfaces.",
    example: "A protocol gateway connecting different industrial systems.",
  },
  {
    name: "Modem",
    layer: "Depends on technology",
    function: "Modulates and demodulates signals or performs equivalent functions in access technologies.",
    example: "Providing a cable or DSL internet connection.",
  },
  {
    name: "Wireless access point",
    layer: "Usually Layer 2",
    function: "Provides Wi-Fi access to a wired network.",
    example: "Wireless connectivity in an office.",
  },
  {
    name: "Firewall",
    layer: "Depends on capabilities",
    function: "Allows, blocks, or inspects traffic according to security policies.",
    example: "Restricting unwanted connections to a server.",
  },
  {
    name: "Network interface card",
    layer: "Physical and data-link functions",
    function: "Provides a device with a network interface.",
    example: "An Ethernet port or Wi-Fi adapter on a laptop.",
  },
  {
    name: "Load balancer",
    layer: "Depends on implementation",
    function: "Distributes requests or connections across multiple servers.",
    example: "Distributing website traffic between application servers.",
  },
  {
    name: "Proxy server",
    layer: "Depends on proxy type",
    function: "Handles requests on behalf of clients or servers.",
    example: "A forward proxy used to manage web access.",
  },
  {
    name: "IDS",
    layer: "Depends on deployment",
    function: "Detects suspicious activity and generates alerts.",
    example: "Monitoring network traffic for attack indicators.",
  },
  {
    name: "IPS",
    layer: "Depends on deployment",
    function: "Detects suspicious activity and can block traffic.",
    example: "Blocking traffic that matches configured threat rules.",
  },
];

export default function NetworkDevicesPage() {
  return (
    <main className="min-h-screen bg-white text-slate-800">
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

      <div className="mx-auto max-w-5xl px-4 py-8">
       
        <header className="mb-8 border-b border-slate-200 pb-6">
          <p className="mb-2 text-sm text-blue-700">
            Networking Fundamentals
          </p>

          <h1 className="text-3xl font-bold text-slate-900">
            Network Devices: Types, Uses, Examples and Functions
          </h1>

          <p className="mt-4 leading-7 text-slate-700">
            Network devices allow computers, mobile phones, servers, printers,
            and other equipment to communicate. Some devices connect networks,
            some forward traffic within a local network, and others provide
            wireless access, inspect traffic, or protect systems against
            unauthorized communication.
          </p>

          <p className="mt-3 leading-7 text-slate-700">
            This guide explains the major types of network devices, how they
            work, where they are used, how they differ, and why understanding
            them is important for network administration and cybersecurity.
          </p>
        </header>

        <nav
          aria-label="Table of contents"
          className="mb-8 rounded-lg border border-slate-200 bg-slate-50 p-4"
        >
          <p className="mb-3 font-semibold text-slate-900">
            On this page
          </p>

          <ul className="list-inside list-disc space-y-2 text-sm">
            <li>
              <a href="#what-are-network-devices" className="text-blue-700 hover:underline">
                What are network devices?
              </a>
            </li>
            <li>
              <a href="#types" className="text-blue-700 hover:underline">
                Types of network devices
              </a>
            </li>
            <li>
              <a href="#router" className="text-blue-700 hover:underline">
                Router
              </a>
            </li>
            <li>
              <a href="#switch" className="text-blue-700 hover:underline">
                Switch
              </a>
            </li>
            <li>
              <a href="#hub-bridge-repeater" className="text-blue-700 hover:underline">
                Hub, bridge and repeater
              </a>
            </li>
            <li>
              <a href="#gateway-modem" className="text-blue-700 hover:underline">
                Gateway and modem
              </a>
            </li>
            <li>
              <a href="#wireless-devices" className="text-blue-700 hover:underline">
                Wireless access points
              </a>
            </li>
            <li>
              <a href="#security-devices" className="text-blue-700 hover:underline">
                Network security devices
              </a>
            </li>
            <li>
              <a href="#other-devices" className="text-blue-700 hover:underline">
                Other network devices
              </a>
            </li>
            <li>
              <a href="#comparison" className="text-blue-700 hover:underline">
                Comparison table
              </a>
            </li>
            <li>
              <a href="#home-network" className="text-blue-700 hover:underline">
                Home network example
              </a>
            </li>
            <li>
              <a href="#enterprise-network" className="text-blue-700 hover:underline">
                Business network example
              </a>
            </li>
            <li>
              <a href="#security-practices" className="text-blue-700 hover:underline">
                Security practices
              </a>
            </li>
            <li>
              <a href="#faqs" className="text-blue-700 hover:underline">
                Frequently asked questions
              </a>
            </li>
          </ul>
        </nav>

        <article className="space-y-8 leading-7">
          <section id="what-are-network-devices" className="scroll-mt-6">
            <h2 className="mb-3 text-2xl font-semibold text-slate-900">
              What are network devices?
            </h2>

            <p>
              A network device is a physical device or specialized system that
              helps establish, manage, forward, monitor, or secure network
              communications. Examples include routers, switches, wireless
              access points, firewalls, and network interface cards.
            </p>

            <p className="mt-3">
              Different devices perform different jobs. A switch connects
              devices within a local area network (LAN), while a router
              forwards packets between IP networks. A firewall applies traffic
              security policies, and a wireless access point allows Wi-Fi
              devices to connect to a network.
            </p>

            <p className="mt-3">
              Some functions can be combined in a single physical product.
              For example, a home router often includes a router, an Ethernet
              switch, a wireless access point, firewall features, and a DHCP
              server.
            </p>
          </section>

          <AdSlot />

          <section id="types" className="scroll-mt-6">
            <h2 className="mb-3 text-2xl font-semibold text-slate-900">
              Types of network devices
            </h2>

            <p className="mb-4">
              The following table summarizes common network devices and their
              primary purposes.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-300 bg-slate-50">
                    <th className="px-3 py-3">Device</th>
                    <th className="px-3 py-3">Main function</th>
                    <th className="px-3 py-3">Common use</th>
                  </tr>
                </thead>
                <tbody>
                  {devices.map((device) => (
                    <tr
                      key={device.name}
                      className="border-b border-slate-200 align-top"
                    >
                      <td className="px-3 py-3 font-medium">
                        {device.name}
                      </td>
                      <td className="px-3 py-3">
                        {device.function}
                      </td>
                      <td className="px-3 py-3">
                        {device.example}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section id="router" className="scroll-mt-6">
            <h2 className="mb-3 text-2xl font-semibold text-slate-900">
              1. Router
            </h2>

            <p>
              A router connects different IP networks and forwards packets
              toward their destinations. It examines network-layer information,
              particularly destination IP addresses, and uses its routing
              table to choose an appropriate next hop or outgoing interface.
            </p>

            <h3 className="mb-2 mt-4 text-lg font-semibold text-slate-900">
              How does a router work?
            </h3>

            <ol className="list-inside list-decimal space-y-2">
              <li>A device sends an IP packet toward a destination.</li>
              <li>The router receives the packet on an interface.</li>
              <li>It examines the destination IP address.</li>
              <li>
                It checks its routing table and selects an appropriate route.
              </li>
              <li>
                It forwards the packet through the selected interface, subject
                to applicable policies and processing.
              </li>
            </ol>

            <h3 className="mb-2 mt-4 text-lg font-semibold text-slate-900">
              Types of routers
            </h3>

            <ul className="list-inside list-disc space-y-2">
              <li>
                <span className="font-medium">Home router:</span> Connects
                household devices to a local network and internet connection.
              </li>
              <li>
                <span className="font-medium">Enterprise router:</span>{" "}
                Connects larger networks, offices, or sites.
              </li>
              <li>
                <span className="font-medium">Core router:</span> Forwards
                traffic within the backbone of a large network.
              </li>
              <li>
                <span className="font-medium">Virtual router:</span> Provides
                routing functionality through software.
              </li>
            </ul>

            <p className="mt-3">
              Routers may also support Network Address Translation (NAT),
              DHCP, VPN connections, and firewall functions. These features
              depend on the product and configuration.
            </p>

            <p className="mt-3">
              For example, when a laptop on a home network opens a website, its
              traffic usually passes through the local router toward the
              internet. The router does not necessarily inspect the contents
              of every application message.
            </p>
          </section>

          <section id="switch" className="scroll-mt-6">
            <h2 className="mb-3 text-2xl font-semibold text-slate-900">
              2. Network switch
            </h2>

            <p>
              A network switch connects devices within a local area network.
              A typical Ethernet switch learns which MAC addresses are
              reachable through its ports and uses that information to forward
              Ethernet frames.
            </p>

            <h3 className="mb-2 mt-4 text-lg font-semibold text-slate-900">
              How does a switch work?
            </h3>

            <ol className="list-inside list-decimal space-y-2">
              <li>A device sends an Ethernet frame into a switch port.</li>
              <li>
                The switch learns the source MAC address and the port where it
                was observed.
              </li>
              <li>
                It checks the destination MAC address against its forwarding
                table.
              </li>
              <li>
                If the destination is known, it forwards the frame through the
                appropriate port, subject to VLAN and other rules.
              </li>
              <li>
                If the destination is unknown, the switch may flood the frame
                within the relevant VLAN, excluding the incoming port.
              </li>
            </ol>

            <h3 className="mb-2 mt-4 text-lg font-semibold text-slate-900">
              Types of switches
            </h3>

            <ul className="list-inside list-disc space-y-2">
              <li>
                <span className="font-medium">Unmanaged switch:</span> Offers
                basic connectivity with limited configuration.
              </li>
              <li>
                <span className="font-medium">Managed switch:</span> Supports
                configuration and monitoring features such as VLANs, port
                controls, and traffic statistics.
              </li>
              <li>
                <span className="font-medium">Layer 2 switch:</span> Primarily
                forwards Ethernet frames using MAC addresses.
              </li>
              <li>
                <span className="font-medium">Layer 3 switch:</span> Can also
                route IP traffic between networks or VLANs.
              </li>
              <li>
                <span className="font-medium">PoE switch:</span> Can provide
                electrical power to compatible devices through Ethernet.
              </li>
            </ul>

            <p className="mt-3">
              Managed switches are particularly useful in business networks
              because they can support network segmentation, access controls,
              and monitoring. A switch alone does not automatically prevent
              every attack occurring on the connected network.
            </p>
          </section>

          <AdSlot />

          <section id="hub-bridge-repeater" className="scroll-mt-6">
            <h2 className="mb-3 text-2xl font-semibold text-slate-900">
              3. Hub, bridge and repeater
            </h2>

            <h3 className="mb-2 mt-4 text-lg font-semibold text-slate-900">
              Hub
            </h3>

            <p>
              A hub is a basic Ethernet device that repeats incoming signals
              to its other ports. It does not learn MAC addresses or selectively
              forward frames to individual destinations.
            </p>

            <p className="mt-3">
              Traditional Ethernet hubs create a shared collision domain and
              are largely obsolete in modern switched networks. A hub should
              not be confused with an Ethernet switch.
            </p>

            <h3 className="mb-2 mt-5 text-lg font-semibold text-slate-900">
              Bridge
            </h3>

            <p>
              A network bridge connects LAN segments and forwards or filters
              frames using MAC address information. A bridge can reduce
              unnecessary traffic between segments, depending on its
              configuration and forwarding behavior.
            </p>

            <p className="mt-3">
              Ethernet switches are commonly understood as multiport bridges.
              Modern switching networks use bridging concepts to forward
              traffic within a LAN.
            </p>

            <h3 className="mb-2 mt-5 text-lg font-semibold text-slate-900">
              Repeater
            </h3>

            <p>
              A repeater regenerates or repeats signals to help extend a
              connection. It operates primarily at the physical layer and does
              not make forwarding decisions based on IP addresses.
            </p>

            <p className="mt-3">
              Wireless repeaters and extenders can help extend Wi-Fi coverage.
              However, actual performance depends on placement, signal quality,
              interference, and the technology used.
            </p>
          </section>

          <section id="gateway-modem" className="scroll-mt-6">
            <h2 className="mb-3 text-2xl font-semibold text-slate-900">
              4. Gateway and modem
            </h2>

            <h3 className="mb-2 mt-4 text-lg font-semibold text-slate-900">
              Gateway
            </h3>

            <p>
              A gateway connects systems or networks and may translate
              between different protocols, data formats, or communication
              interfaces. The term has several meanings depending on the
              networking context.
            </p>

            <p className="mt-3">
              In everyday home networking, the default gateway is usually the
              router address a device uses to reach destinations outside its
              local IP network. In other systems, a gateway may perform
              application or protocol translation.
            </p>

            <h3 className="mb-2 mt-5 text-lg font-semibold text-slate-900">
              Modem
            </h3>

            <p>
              A modem is a device that performs modulation and demodulation,
              or related signal conversion functions required by an access
              technology. The exact implementation depends on the connection
              type.
            </p>

            <p className="mt-3">
              Cable and DSL connections commonly use modems. Fiber internet
              installations may use an optical network terminal (ONT), which
              performs a different role in the optical access network.
            </p>

            <p className="mt-3">
              A modem or ONT is not necessarily a router. Some products combine
              access equipment, routing, Wi-Fi, and switching in one device.
            </p>
          </section>

          <AdSlot />

          <section id="wireless-devices" className="scroll-mt-6">
            <h2 className="mb-3 text-2xl font-semibold text-slate-900">
              5. Wireless access point
            </h2>

            <p>
              A wireless access point (AP) allows wireless clients to connect
              to a network using Wi-Fi. It usually bridges wireless traffic
              into a wired LAN.
            </p>

            <p className="mt-3">
              Access points are used in homes, offices, schools, hospitals,
              warehouses, and public venues. Multiple access points can work
              together to provide coverage across a larger building.
            </p>

            <h3 className="mb-2 mt-4 text-lg font-semibold text-slate-900">
              Access point vs wireless router
            </h3>

            <p>
              A standalone access point primarily provides wireless network
              access. A wireless router commonly combines Wi-Fi, routing,
              Ethernet switching, and other functions.
            </p>

            <p className="mt-3">
              A wireless access point is not the same as a wireless repeater.
              An access point typically connects clients to a LAN, often over
              Ethernet. A repeater or extender retransmits wireless traffic to
              extend coverage, depending on its design.
            </p>

            <h3 className="mb-2 mt-4 text-lg font-semibold text-slate-900">
              Wireless security
            </h3>

            <ul className="list-inside list-disc space-y-2">
              <li>Use WPA3 where supported, or an appropriate secure alternative.</li>
              <li>Use strong, unique Wi-Fi credentials.</li>
              <li>Keep access point firmware updated.</li>
              <li>Disable unnecessary management services.</li>
              <li>Use separate guest networks where appropriate.</li>
              <li>Review connected clients and wireless configuration.</li>
            </ul>
          </section>

          <section id="security-devices" className="scroll-mt-6">
            <h2 className="mb-3 text-2xl font-semibold text-slate-900">
              6. Network security devices
            </h2>

            <p>
              Network security devices help organizations enforce access
              policies, inspect communications, detect threats, and reduce
              exposure to attacks. Their effectiveness depends on deployment,
              configuration, updates, and monitoring.
            </p>

            <h3 className="mb-2 mt-5 text-lg font-semibold text-slate-900">
              Firewall
            </h3>

            <p>
              A firewall applies rules to network traffic. Depending on its
              capabilities, it may filter traffic by addresses, ports,
              connection state, applications, or other characteristics.
            </p>

            <p className="mt-3">
              Firewalls can be implemented in dedicated appliances, routers,
              operating systems, cloud environments, and other platforms.
              They may protect network boundaries or individual hosts.
            </p>

            <h3 className="mb-2 mt-5 text-lg font-semibold text-slate-900">
              Intrusion detection system (IDS)
            </h3>

            <p>
              An IDS monitors activity for signs of suspicious or malicious
              behavior. It may analyze network traffic, host events, or logs
              and generate alerts for investigation.
            </p>

            <p className="mt-3">
              An IDS is generally designed to detect and report activity rather
              than automatically block every suspected threat.
            </p>

            <h3 className="mb-2 mt-5 text-lg font-semibold text-slate-900">
              Intrusion prevention system (IPS)
            </h3>

            <p>
              An IPS can inspect traffic and actively block or prevent activity
              that matches configured detection and prevention rules. Depending
              on the deployment, it may operate inline with network traffic.
            </p>

            <p className="mt-3">
              Incorrect rules can block legitimate traffic, so prevention
              policies should be tested and monitored.
            </p>

            <h3 className="mb-2 mt-5 text-lg font-semibold text-slate-900">
              Web application firewall (WAF)
            </h3>

            <p>
              A WAF focuses on HTTP and HTTPS traffic to web applications. It
              can help detect and block certain application-layer attacks,
              such as requests matching known malicious patterns.
            </p>

            <p className="mt-3">
              A WAF does not replace secure application development, software
              updates, authentication controls, or server hardening.
            </p>

            <h3 className="mb-2 mt-5 text-lg font-semibold text-slate-900">
              VPN gateway
            </h3>

            <p>
              A VPN gateway terminates or manages virtual private network
              connections. It can provide encrypted connections between remote
              users, offices, or networks, depending on the VPN technology.
            </p>

            <p className="mt-3">
              VPN access should use strong authentication, current protocols,
              appropriate authorization, and regular security reviews.
            </p>
          </section>

          <AdSlot />

          <section id="other-devices" className="scroll-mt-6">
            <h2 className="mb-3 text-2xl font-semibold text-slate-900">
              7. Other important network devices
            </h2>

            <h3 className="mb-2 mt-5 text-lg font-semibold text-slate-900">
              Network interface card (NIC)
            </h3>

            <p>
              A network interface card provides a device with a network
              connection. It may be an Ethernet adapter, a Wi-Fi adapter, or
              another supported network interface.
            </p>

            <p className="mt-3">
              A NIC implements physical and data-link functions needed for its
              network technology. The operating system uses drivers and
              network configuration to communicate through it.
            </p>

            <h3 className="mb-2 mt-5 text-lg font-semibold text-slate-900">
              Load balancer
            </h3>

            <p>
              A load balancer distributes incoming connections or application
              requests across multiple servers. It can improve scalability and
              availability when correctly configured.
            </p>

            <p className="mt-3">
              Layer 4 load balancers make decisions using transport-layer
              information, while Layer 7 load balancers can use application
              information such as HTTP request details.
            </p>

            <h3 className="mb-2 mt-5 text-lg font-semibold text-slate-900">
              Proxy server
            </h3>

            <p>
              A proxy handles requests on behalf of another system. A forward
              proxy commonly acts for clients, while a reverse proxy receives
              requests on behalf of servers.
            </p>

            <p className="mt-3">
              Depending on configuration, proxies can support access control,
              logging, caching, traffic routing, or application protection.
              A proxy does not automatically make every connection private or
              secure.
            </p>

            <h3 className="mb-2 mt-5 text-lg font-semibold text-slate-900">
              Network monitoring appliance
            </h3>

            <p>
              Network monitoring systems collect and analyze information such
              as traffic flows, device status, interface utilization, errors,
              and logs. They help administrators identify outages, performance
              problems, and unusual activity.
            </p>

            <p className="mt-3">
              Monitoring may use protocols and technologies such as SNMP,
              NetFlow or IPFIX, packet capture, system logs, and telemetry.
              What is available depends on the network equipment and monitoring
              platform.
            </p>

            <h3 className="mb-2 mt-5 text-lg font-semibold text-slate-900">
              Power over Ethernet (PoE) equipment
            </h3>

            <p>
              PoE-capable switches and injectors can supply electrical power
              over Ethernet cables to compatible devices, such as access
              points, IP cameras, and VoIP phones. The equipment must support
              suitable power standards and requirements.
            </p>
          </section>

          <section id="comparison" className="scroll-mt-6">
            <h2 className="mb-3 text-2xl font-semibold text-slate-900">
              Router vs switch vs hub vs bridge
            </h2>

            <p className="mb-4">
              These devices are often confused because they can all participate
              in connecting network equipment. Their forwarding behavior is
              different.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-300 bg-slate-50">
                    <th className="px-3 py-3">Device</th>
                    <th className="px-3 py-3">Typical function</th>
                    <th className="px-3 py-3">Main information used</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-200">
                    <td className="px-3 py-3">Router</td>
                    <td className="px-3 py-3">Connects IP networks</td>
                    <td className="px-3 py-3">Destination IP and routing table</td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <td className="px-3 py-3">Switch</td>
                    <td className="px-3 py-3">Connects LAN devices</td>
                    <td className="px-3 py-3">MAC address forwarding table</td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <td className="px-3 py-3">Hub</td>
                    <td className="px-3 py-3">Repeats signals to other ports</td>
                    <td className="px-3 py-3">Does not learn destination addresses</td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <td className="px-3 py-3">Bridge</td>
                    <td className="px-3 py-3">Connects LAN segments</td>
                    <td className="px-3 py-3">MAC address information</td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <td className="px-3 py-3">Repeater</td>
                    <td className="px-3 py-3">Extends a signal</td>
                    <td className="px-3 py-3">Physical signal characteristics</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mt-3">
              The OSI layer descriptions are useful learning guides, but real
              products can combine functions from multiple layers.
            </p>
          </section>

          <section id="home-network" className="scroll-mt-6">
            <h2 className="mb-3 text-2xl font-semibold text-slate-900">
              Example: devices in a home network
            </h2>

            <p>
              A typical home network might contain a router, an internet access
              device, Wi-Fi clients, and wired Ethernet devices.
            </p>

            <div className="my-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="font-medium">Simplified connection flow</p>

              <div className="mt-3 space-y-2 text-center">
                <div className="rounded border border-slate-300 bg-white p-3">
                  Internet service provider
                </div>
                <p aria-hidden="true">↓</p>
                <div className="rounded border border-slate-300 bg-white p-3">
                  Modem or optical network terminal
                </div>
                <p aria-hidden="true">↓</p>
                <div className="rounded border border-blue-200 bg-blue-50 p-3">
                  Home router with Wi-Fi and Ethernet
                </div>
                <p aria-hidden="true">↓</p>
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
                  <div className="rounded border border-slate-300 bg-white p-3">
                    Laptop
                  </div>
                  <div className="rounded border border-slate-300 bg-white p-3">
                    Mobile phone
                  </div>
                  <div className="rounded border border-slate-300 bg-white p-3">
                    Smart TV
                  </div>
                </div>
              </div>
            </div>

            <p>
              In this example, the modem or ONT provides the access connection,
              while the router directs traffic between the home network and
              other IP networks. The router's Wi-Fi function allows wireless
              devices to connect.
            </p>

            <p className="mt-3">
              Some internet providers supply a combined gateway device, so a
              separate modem, router, and access point may not be necessary.
            </p>
          </section>

          <AdSlot />

          <section id="enterprise-network" className="scroll-mt-6">
            <h2 className="mb-3 text-2xl font-semibold text-slate-900">
              Example: devices in a business network
            </h2>

            <p>
              A business network may use several types of equipment to connect
              employees, servers, wireless devices, and external services.
            </p>

            <ul className="list-inside list-disc space-y-3">
              <li>
                <span className="font-medium">Edge router:</span> Connects the
                organization to an external network or internet provider.
              </li>
              <li>
                <span className="font-medium">Firewall:</span> Enforces
                security policies between selected network zones.
              </li>
              <li>
                <span className="font-medium">Managed switches:</span> Connect
                computers and servers and can separate traffic using VLANs.
              </li>
              <li>
                <span className="font-medium">Wireless access points:</span>{" "}
                Provide Wi-Fi access for authorized staff and guests.
              </li>
              <li>
                <span className="font-medium">Load balancer:</span> Distributes
                requests across application servers when needed.
              </li>
              <li>
                <span className="font-medium">IDS or IPS:</span> Detects
                suspicious traffic or blocks activity covered by prevention
                rules.
              </li>
              <li>
                <span className="font-medium">Monitoring system:</span> Helps
                administrators observe availability, performance, and security
                events.
              </li>
            </ul>

            <p className="mt-3">
              The actual design depends on the organization's size, services,
              availability requirements, budget, and security needs. Not every
              network requires every device.
            </p>
          </section>

          <section id="security-practices" className="scroll-mt-6">
            <h2 className="mb-3 text-2xl font-semibold text-slate-900">
              Network device security practices
            </h2>

            <p>
              Network devices are important security boundaries and can also
              become targets if their management interfaces, software, or
              configurations are exposed. Securing them is an important part
              of defending a network.
            </p>

            <h3 className="mb-2 mt-4 text-lg font-semibold text-slate-900">
              1. Change default credentials
            </h3>

            <p>
              Replace default administrative passwords with strong, unique
              credentials. Use multi-factor authentication where supported,
              particularly for remote management.
            </p>

            <h3 className="mb-2 mt-4 text-lg font-semibold text-slate-900">
              2. Update firmware and software
            </h3>

            <p>
              Apply vendor security updates according to a maintenance plan.
              Unsupported devices should be reviewed for replacement or
              isolation because they may no longer receive security fixes.
            </p>

            <h3 className="mb-2 mt-4 text-lg font-semibold text-slate-900">
              3. Restrict management access
            </h3>

            <p>
              Allow administration only from approved devices or management
              networks. Disable unnecessary services and avoid exposing
              management interfaces directly to the internet.
            </p>

            <h3 className="mb-2 mt-4 text-lg font-semibold text-slate-900">
              4. Segment the network
            </h3>

            <p>
              Use VLANs, routing policies, and firewalls to separate systems
              with different security needs. For example, guest Wi-Fi should
              generally be separated from internal administrative systems.
            </p>

            <h3 className="mb-2 mt-4 text-lg font-semibold text-slate-900">
              5. Monitor network activity
            </h3>

            <p>
              Review device logs, interface errors, unusual traffic, unexpected
              configuration changes, and authentication events. Centralized
              monitoring can make suspicious activity easier to investigate.
            </p>

            <h3 className="mb-2 mt-4 text-lg font-semibold text-slate-900">
              6. Secure wireless access
            </h3>

            <p>
              Use appropriate wireless encryption, remove unauthorized
              access, keep access point software updated, and review guest
              network settings.
            </p>

            <h3 className="mb-2 mt-4 text-lg font-semibold text-slate-900">
              7. Back up configurations
            </h3>

            <p>
              Maintain protected backups of important router, firewall, and
              switch configurations. Test recovery procedures so that a device
              failure or configuration mistake does not create prolonged
              downtime.
            </p>
          </section>

          <section id="faqs" className="scroll-mt-6">
            <h2 className="mb-4 text-2xl font-semibold text-slate-900">
              Frequently asked questions
            </h2>

            <div className="space-y-5">
              <div>
                <h3 className="font-semibold text-slate-900">
                  1. What is a network device?
                </h3>
                <p className="mt-1">
                  A network device connects systems, forwards traffic, provides
                  network access, or helps manage and secure communications.
                  Routers, switches, and firewalls are common examples.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-slate-900">
                  2. What is the difference between a router and a switch?
                </h3>
                <p className="mt-1">
                  A router forwards IP packets between networks. A typical
                  Layer 2 switch forwards Ethernet frames between devices on
                  the same LAN using MAC address information.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-slate-900">
                  3. What is the difference between a hub and a switch?
                </h3>
                <p className="mt-1">
                  A hub repeats signals to its other ports. A switch learns
                  MAC addresses and normally forwards frames to the appropriate
                  destination port.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-slate-900">
                  4. Can a router also work as a switch and access point?
                </h3>
                <p className="mt-1">
                  Yes. Many home routers combine routing, Ethernet switching,
                  Wi-Fi access, firewall features, and DHCP services.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-slate-900">
                  5. What is the purpose of a firewall?
                </h3>
                <p className="mt-1">
                  A firewall enforces security rules by allowing, blocking, or
                  inspecting network traffic according to its capabilities and
                  configuration.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-slate-900">
                  6. What is the difference between an IDS and an IPS?
                </h3>
                <p className="mt-1">
                  An IDS detects suspicious activity and generates alerts. An
                  IPS can also block traffic when configured with suitable
                  prevention rules.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-slate-900">
                  7. What is a network interface card?
                </h3>
                <p className="mt-1">
                  A NIC provides a device with a network interface, such as an
                  Ethernet port or a Wi-Fi adapter.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-slate-900">
                  8. Which network devices are important for cybersecurity?
                </h3>
                <p className="mt-1">
                  Firewalls, managed switches, routers, wireless access points,
                  IDS/IPS systems, and monitoring tools can all contribute to
                  network security when properly configured.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-slate-900">
                  9. Are hubs still used in modern networks?
                </h3>
                <p className="mt-1">
                  Traditional Ethernet hubs are largely obsolete. Switches
                  provide more efficient connectivity and are standard in
                  modern Ethernet LANs.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-slate-900">
                  10. Can network devices be hacked?
                </h3>
                <p className="mt-1">
                  Yes. Vulnerabilities, weak credentials, outdated firmware,
                  exposed management services, and configuration errors can
                  put devices at risk. Regular updates, access restrictions,
                  monitoring, and secure configuration help reduce that risk.
                </p>
              </div>
            </div>
          </section>

          <section className="border-t border-slate-200 pt-6">
            <RelatedTopics
              eyebrow="Continue reading"
              title="Explore Networking"
              description="Continue learning about IP addressing and network fundamentals."
              links={[
                {
                  label: "Networking Fundamentals",
                  href: "/networking",
                },
                {
                  label: "IP Addressing",
                  href: "/networking/ip-addressing",
                },
                {
                  label: "IP Address Basics",
                  href: "/networking/ip-addressing/ip-address-basics",
                },
                {
                  label: "Subnetting Explained",
                  href: "/networking/ip-addressing/subnetting",
                },
                {
                  label: "IPv4 and IPv6",
                  href: "/networking/ip-addressing/ipv4-and-ipv6",
                },
              ]}
            />
          </section>
        </article>
      </div>
    </main>
  );
}
