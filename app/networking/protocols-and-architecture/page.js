
import RelatedTopics from "../../../components/ContinueReading";
import AdSlot from "../../../components/AdSlot";
import {
  Network,
  Layers,
  GitBranch,
  Terminal,
  ShieldCheck,
  BookOpen,
  Activity,
  ArrowDownUp,
  Server,
  Search,
} from "lucide-react";

export const metadata = {
  title: "Network Protocols & Architecture: OSI, TCP/IP and Ports",
  description:
    "Learn network protocols, the 7 OSI layers, TCP/IP architecture, common port numbers, network devices, encapsulation, troubleshooting commands, and security fundamentals.",
  alternates: {
    canonical:
      "https://www.pricetag.co.in/networking/protocols-and-architecture",
  },
 
};

const osiLayers = [
  {
    number: 7,
    name: "Application",
    protocols: "HTTP, HTTPS, DNS, SMTP",
    purpose: "Provides network services to applications.",
    example: "Opening a website or resolving a domain.",
  },
  {
    number: 6,
    name: "Presentation",
    protocols: "TLS-related presentation functions, data formats",
    purpose: "Represents, encodes, or transforms application data.",
    example: "Character encoding and data serialization.",
  },
  {
    number: 5,
    name: "Session",
    protocols: "Session-management concepts",
    purpose: "Describes the establishment and management of communication sessions.",
    example: "Maintaining a logical dialog between applications.",
  },
  {
    number: 4,
    name: "Transport",
    protocols: "TCP, UDP",
    purpose: "Provides transport between application endpoints.",
    example: "Reliable delivery with TCP or datagrams with UDP.",
  },
  {
    number: 3,
    name: "Network",
    protocols: "IPv4, IPv6, ICMP",
    purpose: "Handles logical addressing and routing between networks.",
    example: "A router forwarding an IP packet.",
  },
  {
    number: 2,
    name: "Data Link",
    protocols: "Ethernet, Wi-Fi MAC, ARP",
    purpose: "Handles local-link frames and hardware addressing.",
    example: "A frame traveling across a local Ethernet network.",
  },
  {
    number: 1,
    name: "Physical",
    protocols: "Ethernet physical media, radio, fiber",
    purpose: "Carries signals across a physical medium.",
    example: "Electrical, optical, or wireless signals.",
  },
];

const tcpLayers = [
  {
    name: "Application",
    maps: "OSI layers 5–7 (approximately)",
    protocols: "HTTP, HTTPS, DNS, SSH, SMTP",
    data: "Application data",
  },
  {
    name: "Transport",
    maps: "OSI layer 4",
    protocols: "TCP, UDP",
    data: "TCP segment / UDP datagram",
  },
  {
    name: "Internet",
    maps: "OSI layer 3",
    protocols: "IPv4, IPv6, ICMP",
    data: "IP packet",
  },
  {
    name: "Network Access",
    maps: "OSI layers 1–2 (approximately)",
    protocols: "Ethernet, Wi-Fi",
    data: "Frame and physical signals",
  },
];

const protocols = [
  ["HTTP", "80/TCP", "Transfers web content; unencrypted by itself."],
  ["HTTPS", "443/TCP", "HTTP protected by TLS, usually over TCP."],
  ["DNS", "53/UDP, TCP", "Resolves domain names; TCP is also used in several cases."],
  ["DHCPv4", "67/UDP, 68/UDP", "Assigns IPv4 configuration to clients."],
  ["SSH", "22/TCP", "Secure remote shell and administration."],
  ["FTP", "21/TCP control", "File transfer protocol; standard FTP is not encrypted."],
  ["SFTP", "22/TCP typically", "File transfer over SSH."],
  ["SMTP", "25/TCP commonly", "Mail transfer between mail servers."],
  ["IMAP", "143/TCP", "Accesses and manages email; TLS can be added."],
  ["IMAPS", "993/TCP", "IMAP over TLS."],
  ["POP3", "110/TCP", "Retrieves email; TLS can be added."],
  ["POP3S", "995/TCP", "POP3 over TLS."],
  ["NTP", "123/UDP", "Synchronizes system clocks."],
  ["SNMP", "161/UDP commonly", "Monitors and manages network devices."],
  ["RDP", "3389/TCP, UDP", "Remote Desktop services; configurations vary."],
  ["SMB", "445/TCP", "File and printer sharing, commonly on Windows networks."],
  ["LDAP", "389/TCP, UDP", "Directory access; TCP is common for LDAP queries."],
  ["LDAPS", "636/TCP", "LDAP protected by TLS."],
  ["ICMP", "No TCP/UDP port", "Carries diagnostic and network-control messages."],
  ["ARP", "No TCP/UDP port", "Maps IPv4 addresses to link-layer addresses on a local link."],
];

const devices = [
  {
    name: "Repeater",
    layer: "Physical",
    role: "Regenerates or repeats signals.",
  },
  {
    name: "Hub",
    layer: "Physical",
    role: "Repeats incoming bits to other ports; generally obsolete.",
  },
  {
    name: "Switch",
    layer: "Data Link",
    role: "Forwards Ethernet frames using MAC address information.",
  },
  {
    name: "Router",
    layer: "Network",
    role: "Forwards IP packets between networks.",
  },
  {
    name: "Firewall",
    layer: "Multiple layers",
    role: "Enforces traffic policies using addresses, ports, connections, or application data.",
  },
  {
    name: "Access Point",
    layer: "Network access",
    role: "Connects wireless clients to a network.",
  },
  {
    name: "Proxy",
    layer: "Application (commonly)",
    role: "Relays requests on behalf of clients or servers.",
  },
  {
    name: "Load Balancer",
    layer: "Multiple layers",
    role: "Distributes traffic across backend servers.",
  },
];

function Section({ icon: Icon, title, children }) {
  return (
    <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-4 flex items-center gap-2">
        <Icon className="h-5 w-5 text-blue-600" />
        <h2 className="text-xl font-bold text-slate-900">{title}</h2>
      </div>
      {children}
    </section>
  );
}

function CodeBlock({ children }) {
  return (
    <div className="flex items-center justify-between gap-3 rounded-lg bg-slate-950 px-4 py-3">
      <code className="overflow-x-auto whitespace-pre-wrap text-sm text-green-300">
        {children}
      </code>
      
    </div>
  );
}

export default function NetworkProtocolsArchitecturePage() {
  return (
    <main className="mx-auto max-w-5xl space-y-6 px-4 py-8 text-slate-700 sm:px-6">
      <header className="rounded-2xl border border-blue-100 bg-blue-50 p-6 sm:p-8">
        <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-blue-700">
          <Network className="h-5 w-5" />
          NETWORKING FUNDAMENTALS
        </div>

        <h1 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
          Network Protocols & Architecture
        </h1>

        <p className="mt-4 max-w-3xl leading-7 text-slate-600">
          Understand how devices communicate, how network layers work,
          which protocols use common ports, and how to troubleshoot real
          connections using practical commands.
        </p>

        <div className="mt-5 flex flex-wrap gap-3">
          <a
            href="#osi-model"
            className="rounded-lg bg-blue-600 px-4 py-2.5 font-semibold text-white hover:bg-blue-700"
          >
            Explore OSI Model
          </a>
          <a
            href="#practice"
            className="rounded-lg border border-blue-200 bg-white px-4 py-2.5 font-semibold text-blue-700 hover:bg-blue-100"
          >
            Start Practice
          </a>
        </div>
      </header>

      <Section icon={BookOpen} title="1. What is a network protocol?">
        <p className="leading-7">
          A network protocol is a set of rules that defines how devices
          exchange information. Protocols specify details such as message
          formats, addressing, connection behavior, error handling, and
          communication procedures.
        </p>

        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          {[
            ["HTTP / HTTPS", "Web communication"],
            ["TCP / UDP", "Transport of application data"],
            ["IP", "Addressing and routing"],
          ].map(([name, description]) => (
            <div key={name} className="rounded-lg bg-slate-50 p-4">
              <h3 className="font-semibold text-slate-900">{name}</h3>
              <p className="mt-1 text-sm">{description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section icon={GitBranch} title="2. What is network architecture?">
        <p className="leading-7">
          Network architecture describes how devices, network services,
          communication protocols, and infrastructure are organized to work
          together.
        </p>

        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <div className="rounded-lg border border-slate-200 p-4">
            <h3 className="font-semibold text-slate-900">
              Client–Server
            </h3>
            <p className="mt-1 text-sm leading-6">
              A client requests a service, and a server processes the
              request. Browsers and web servers are a common example.
            </p>
          </div>

          <div className="rounded-lg border border-slate-200 p-4">
            <h3 className="font-semibold text-slate-900">
              Peer-to-Peer
            </h3>
            <p className="mt-1 text-sm leading-6">
              Devices can communicate or share resources directly without
              relying on one central server for every exchange.
            </p>
          </div>

          <div className="rounded-lg border border-slate-200 p-4">
            <h3 className="font-semibold text-slate-900">
              Three-Tier Architecture
            </h3>
            <p className="mt-1 text-sm leading-6">
              Applications may separate presentation, application logic,
              and data storage into distinct tiers.
            </p>
          </div>

          <div className="rounded-lg border border-slate-200 p-4">
            <h3 className="font-semibold text-slate-900">
              Network Topology
            </h3>
            <p className="mt-1 text-sm leading-6">
              Describes how devices and links are arranged, such as star,
              mesh, bus, or ring.
            </p>
          </div>
        </div>
      </Section>
<AdSlot />
      <section id="osi-model" className="scroll-mt-6">
        <div className="mb-4">
          <h2 className="text-2xl font-bold text-slate-950">
            3. OSI Model: All 7 Layers
          </h2>
          <p className="mt-2 leading-7 text-slate-600">
            The OSI model is a reference model used to understand and
            troubleshoot communication. Real protocols do not always fit
            neatly into a single layer.
          </p>
        </div>

        <div className="space-y-3">
          {osiLayers.map((layer) => (
            <article
              key={layer.number}
              className="rounded-xl border border-slate-200 bg-white p-4"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-lg font-bold text-blue-700">
                  {layer.number}
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-bold text-slate-900">
                    Layer {layer.number}: {layer.name}
                  </h3>
                  <p className="mt-1 text-sm leading-6">
                    {layer.purpose}
                  </p>
                  <p className="mt-2 text-sm">
                    <strong>Examples:</strong> {layer.protocols}
                  </p>
                  <p className="mt-1 text-sm text-slate-500">
                    {layer.example}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-4 rounded-xl bg-blue-50 p-4">
          <h3 className="font-semibold text-slate-900">
            Remember the order
          </h3>
          <p className="mt-2 text-sm leading-6">
            Top to bottom: Application → Presentation → Session → Transport
            → Network → Data Link → Physical.
          </p>
        </div>
      </section>

      <Section icon={Layers} title="4. TCP/IP Model">
        <p className="mb-4 leading-7">
          The TCP/IP model describes the layers commonly used by Internet
          communication. It is usually represented using four layers.
        </p>

        <div className="space-y-3">
          {tcpLayers.map((layer, index) => (
            <div
              key={layer.name}
              className="rounded-lg border border-slate-200 p-4"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="font-bold text-slate-900">
                  {4 - index}. {layer.name}
                </h3>
                <span className="text-xs text-slate-500">{layer.maps}</span>
              </div>
              <p className="mt-2 text-sm">
                <strong>Protocols:</strong> {layer.protocols}
              </p>
              <p className="mt-1 text-sm">
                <strong>Data unit:</strong> {layer.data}
              </p>
            </div>
          ))}
        </div>
      </Section>
 <AdSlot />
      <Section icon={ArrowDownUp} title="5. How data travels across a network">
        <p className="leading-7">
          When you open a website, multiple protocols cooperate to establish
          communication and deliver the requested content.
        </p>

        <ol className="mt-4 list-decimal space-y-3 pl-5 leading-7">
          <li>
            <strong>DNS lookup:</strong> The client resolves the website's
            hostname to an IP address when a suitable cached answer is not
            already available.
          </li>
          <li>
            <strong>Local delivery:</strong> The device uses its routing
            table and, when necessary, ARP or IPv6 Neighbor Discovery to
            determine how to send traffic on the local link.
          </li>
          <li>
            <strong>Transport:</strong> The application communicates using
            TCP or UDP, depending on the protocol and connection.
          </li>
          <li>
            <strong>Security:</strong> HTTPS commonly uses TLS to protect
            HTTP communication. HTTP/3 uses QUIC over UDP.
          </li>
          <li>
            <strong>Routing:</strong> Routers forward IP packets toward
            the destination network.
          </li>
          <li>
            <strong>Response:</strong> The server sends a response that
            returns through the network to the client.
          </li>
        </ol>
      </Section>

      <Section icon={Activity} title="6. Encapsulation and data units">
        <p className="leading-7">
          Encapsulation occurs when each network layer adds information
          needed to deliver or process data. The receiving device processes
          the layers in reverse through decapsulation.
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-2">
          {["Application data", "TCP segment", "IP packet", "Link frame", "Signals"].map(
            (item, index) => (
              <div key={item} className="flex items-center gap-2">
                <div className="rounded-lg border border-blue-200 bg-blue-50 px-3 py-2 text-sm font-medium text-blue-900">
                  {item}
                </div>
                {index < 4 && (
                  <span className="text-slate-400">→</span>
                )}
              </div>
            )
          )}
        </div>

        <p className="mt-4 text-sm leading-6 text-slate-500">
          This is a simplified TCP-based example. UDP uses a UDP datagram,
          and actual encapsulation depends on the protocols involved.
        </p>
      </Section>

      <Section icon={Server} title="7. Common network protocols and ports">
        <p className="mb-4 text-sm leading-6">
          These are common default port assignments. Actual services can
          use different ports, and some protocols do not use TCP or UDP ports.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[540px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="p-3 font-semibold text-slate-900">Protocol</th>
                <th className="p-3 font-semibold text-slate-900">Port</th>
                <th className="p-3 font-semibold text-slate-900">Purpose</th>
              </tr>
            </thead>
            <tbody>
              {protocols.map(([name, port, purpose]) => (
                <tr key={name} className="border-b border-slate-100">
                  <td className="p-3 font-semibold text-slate-900">{name}</td>
                  <td className="p-3 whitespace-nowrap">{port}</td>
                  <td className="p-3">{purpose}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section icon={Network} title="8. Network devices and their roles">
        <div className="space-y-3">
          {devices.map((device) => (
            <div
              key={device.name}
              className="flex flex-col gap-1 rounded-lg border border-slate-200 p-4 sm:flex-row sm:items-start sm:justify-between"
            >
              <div>
                <h3 className="font-semibold text-slate-900">
                  {device.name}
                </h3>
                <p className="mt-1 text-sm leading-6">{device.role}</p>
              </div>
              <span className="shrink-0 text-xs font-medium text-blue-700">
                {device.layer}
              </span>
            </div>
          ))}
        </div>
      </Section>
<AdSlot />
      <Section icon={ShieldCheck} title="9. Connection-oriented vs connectionless">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-slate-200 p-4">
            <h3 className="font-bold text-slate-900">TCP</h3>
            <ul className="mt-2 list-disc space-y-2 pl-5 text-sm leading-6">
              <li>Connection-oriented transport.</li>
              <li>Provides ordered, reliable byte-stream delivery.</li>
              <li>Uses acknowledgements and retransmission mechanisms.</li>
              <li>Common for HTTPS over HTTP/1.1 or HTTP/2.</li>
            </ul>
          </div>

          <div className="rounded-lg border border-slate-200 p-4">
            <h3 className="font-bold text-slate-900">UDP</h3>
            <ul className="mt-2 list-disc space-y-2 pl-5 text-sm leading-6">
              <li>Connectionless transport.</li>
              <li>Does not guarantee delivery or ordering.</li>
              <li>Has a smaller transport header.</li>
              <li>Common for DNS queries, voice, and real-time traffic.</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section icon={Terminal} title="10. Practical networking commands">
        <div className="space-y-4">
          <div>
            <h3 className="mb-2 font-semibold text-slate-900">
              Check IP configuration (Windows)
            </h3>
            <CodeBlock>ipconfig /all</CodeBlock>
          </div>

          <div>
            <h3 className="mb-2 font-semibold text-slate-900">
              Check IP configuration (Linux)
            </h3>
            <CodeBlock>ip addr</CodeBlock>
          </div>

          <div>
            <h3 className="mb-2 font-semibold text-slate-900">
              Display the routing table
            </h3>
            <CodeBlock>ip route</CodeBlock>
          </div>

          <div>
            <h3 className="mb-2 font-semibold text-slate-900">
              Test connectivity
            </h3>
            <CodeBlock>ping 1.1.1.1</CodeBlock>
          </div>

          <div>
            <h3 className="mb-2 font-semibold text-slate-900">
              Trace the route (Windows)
            </h3>
            <CodeBlock>tracert example.com</CodeBlock>
          </div>

          <div>
            <h3 className="mb-2 font-semibold text-slate-900">
              Trace the route (Linux)
            </h3>
            <CodeBlock>tracepath example.com</CodeBlock>
          </div>

          <div>
            <h3 className="mb-2 font-semibold text-slate-900">
              Inspect DNS resolution
            </h3>
            <CodeBlock>nslookup example.com</CodeBlock>
          </div>

          <div>
            <h3 className="mb-2 font-semibold text-slate-900">
              Inspect a TCP connection (Linux)
            </h3>
            <CodeBlock>ss -tun</CodeBlock>
          </div>

          <div>
            <h3 className="mb-2 font-semibold text-slate-900">
              Test a TCP port (PowerShell)
            </h3>
            <CodeBlock>Test-NetConnection example.com -Port 443</CodeBlock>
          </div>
        </div>

        <p className="mt-4 text-sm leading-6 text-slate-500">
          Use systems and services you own or are authorized to test.
          Command availability differs between Windows and Linux.
        </p>
      </Section>

      <section id="practice" className="scroll-mt-6 space-y-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-950">
            11. Hands-on practice
          </h2>
          <p className="mt-2 text-slate-600">
            Use these exercises to connect networking theory with real output.
          </p>
        </div>

        <article className="rounded-xl border border-slate-200 bg-white p-5">
          <h3 className="font-bold text-slate-900">
            Practice 1: Find your network configuration
          </h3>
          <CodeBlock>ipconfig /all</CodeBlock>
          <p className="mt-3 leading-7">
            On Windows, identify the IPv4 address, subnet mask, default
            gateway, and DNS servers. Compare these values with your router's
            local network configuration.
          </p>
        </article>

        <article className="rounded-xl border border-slate-200 bg-white p-5">
          <h3 className="font-bold text-slate-900">
            Practice 2: Follow a DNS lookup
          </h3>
          <CodeBlock>nslookup example.com</CodeBlock>
          <p className="mt-3 leading-7">
            Record the DNS server and the returned addresses. Run the
            command again and compare the results. Cached answers and
            load-balanced destinations can affect what you see.
          </p>
        </article>

        <article className="rounded-xl border border-slate-200 bg-white p-5">
          <h3 className="font-bold text-slate-900">
            Practice 3: Test HTTPS connectivity
          </h3>
          <CodeBlock>
            Test-NetConnection example.com -Port 443
          </CodeBlock>
          <p className="mt-3 leading-7">
            Examine the DNS result, remote address, and TcpTestSucceeded
            field. A successful TCP connection does not by itself prove
            that TLS negotiation or the website will succeed.
          </p>
        </article>

        <article className="rounded-xl border border-slate-200 bg-white p-5">
          <h3 className="font-bold text-slate-900">
            Practice 4: Observe packets in Wireshark
          </h3>
          <ol className="mt-3 list-decimal space-y-2 pl-5 leading-7">
            <li>Start a capture on your active network interface.</li>
            <li>Run a DNS lookup and visit a website you are allowed to access.</li>
            <li>Apply the display filter <code>dns</code>.</li>
            <li>Inspect the DNS query and response, then try <code>tcp</code> or <code>tls</code>.</li>
            <li>Compare the observed protocols with the OSI and TCP/IP models.</li>
          </ol>
        </article>
      </section>

      <Section icon={Search} title="12. Troubleshooting by layer">
        <div className="space-y-3">
          {[
            ["Physical", "Check power, cables, Wi-Fi signal, and link status."],
            ["Data Link", "Check Wi-Fi association, VLAN configuration, and local-link reachability."],
            ["Network", "Check IP settings, subnet masks, gateways, and routes."],
            ["Transport", "Check whether the required TCP port is reachable and whether a firewall blocks it."],
            ["Application", "Check DNS, TLS certificates, server responses, and application logs."],
          ].map(([layer, description]) => (
            <div key={layer} className="rounded-lg bg-slate-50 p-4">
              <h3 className="font-semibold text-slate-900">{layer} layer</h3>
              <p className="mt-1 text-sm leading-6">{description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section icon={ShieldCheck} title="13. Network security fundamentals">
        <ul className="list-disc space-y-2 pl-5 leading-7">
          <li>Prefer encrypted protocols such as HTTPS, SSH, and secure file-transfer services.</li>
          <li>Use firewalls to restrict unnecessary inbound and outbound connections.</li>
          <li>Keep routers, switches, operating systems, and network services updated.</li>
          <li>Segment networks so sensitive systems are not exposed unnecessarily.</li>
          <li>Use packet captures and logs together when investigating suspicious activity.</li>
          <li>Never assume an open port alone proves that a service is vulnerable.</li>
        </ul>
      </Section>

      <Section icon={BookOpen} title="14. Recommended learning order">
        <ol className="list-decimal space-y-2 pl-5 leading-7">
          <li>Learn IPv4, IPv6, subnet masks, and private IP addresses.</li>
          <li>Understand Ethernet, MAC addresses, ARP, and switching.</li>
          <li>Study TCP, UDP, ports, and the TCP handshake.</li>
          <li>Learn DNS, DHCP, HTTP, HTTPS, and TLS basics.</li>
          <li>Practice ping, route tracing, DNS lookup, and port testing.</li>
          <li>Use Wireshark to inspect the traffic generated by those exercises.</li>
          <li>Study firewalls, network segmentation, and defensive monitoring.</li>
        </ol>
      </Section>

      <section className="rounded-xl border border-blue-100 bg-blue-50 p-5">
        <h2 className="text-xl font-bold text-slate-950">
          Build your networking foundation
        </h2>
        <p className="mt-2 leading-7 text-slate-600">
          Learn what each protocol does, identify its place in the
          communication process, and verify your understanding using
          terminal commands and packet captures. These fundamentals support
          network administration, troubleshooting, and defensive security.
        </p>
      </section>

      {/* Related Topics */}
            <RelatedTopics
              eyebrow="Continue Learning"
              title="Explore More About Networking"
              description="Build your networking knowledge with focused guides on network types, IP addressing, Wi-Fi troubleshooting, and defensive network security."
              links={[
                {
                  label: "Fundamentals",
                  href: "/networking/fundamentals",
                },
                {
                  label: "IP Addressing",
                  href: "/networking/ip-addressing",
                },
                {
                  label: "Network Devices",
                  href: "/networking/network-devices",
                },
                {
                  label: "Network Security",
                  href: "/networking/network-security",
                },
                {
                  label: "Network Tools",
                  href: "/networking/network-tools",
                },
                {
                  label: "Protocals and Architecture",
                  href: "/networking/protocols-and-architecture",
                },
                {
                  label: "Wifi and Routers",
                  href: "/networking/wifi-and-routers",
                },
              ]}
            />
      
    </main>
  );
}
