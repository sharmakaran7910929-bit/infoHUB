
import RelatedTopics from "../../../../components/ContinueReading";
import {
  Activity,
  BookOpen,
  CheckCircle2,
  Clipboard,
  Download,
  Filter,
  Network,
  Play,
  Search,
  ShieldCheck,
  Terminal,
  Waves,
} from "lucide-react";
import AdSlot from "../../../../components/AdSlot";

const filters = [
  {
    name: "DNS",
    filter: "dns",
    description: "Find domain name lookup requests and responses.",
  },
  {
    name: "TCP",
    filter: "tcp",
    description: "Inspect TCP connections and communication.",
  },
  {
    name: "HTTP",
    filter: "http",
    description: "Find HTTP traffic when it is present and dissected.",
  },
  {
    name: "TLS",
    filter: "tls",
    description: "Identify encrypted TLS connections and handshake details.",
  },
  {
    name: "ICMP",
    filter: "icmp",
    description: "Inspect ping requests and replies.",
  },
  {
    name: "DNS errors",
    filter: "dns.flags.rcode != 0",
    description: "Find DNS responses containing an error code.",
  },
  {
    name: "TCP retransmissions",
    filter: "tcp.analysis.retransmission",
    description: "Identify packets Wireshark marks as TCP retransmissions.",
  },
  {
    name: "Specific IP",
    filter: "ip.addr == 192.168.1.10",
    description: "Replace the sample address with an IP in your own lab.",
  },
];

const exercises = [
  {
    title: "Capture your first packets",
    level: "Beginner",
    steps: [
      "Open Wireshark and select your active network interface.",
      "Start capturing packets.",
      "Open a website or run a ping in another terminal.",
      "Stop the capture and inspect the Protocol and Info columns.",
    ],
    goal: "Recognize how normal network activity appears in a capture.",
  },
  {
    title: "Explore DNS lookups",
    level: "Beginner",
    steps: [
      "Start a capture on your active interface.",
      "Generate a DNS lookup for a domain you are allowed to test.",
      "Apply the display filter: dns",
      "Select a packet and expand Domain Name System in the details pane.",
    ],
    goal: "Identify DNS queries, response records, and returned addresses.",
  },
  {
    title: "Understand TCP connections",
    level: "Intermediate",
    steps: [
      "Apply the filter: tcp",
      "Select a packet and inspect source and destination ports.",
      "Look for SYN, SYN-ACK, and ACK flags.",
      "Use Statistics → Conversations → TCP to explore communication pairs.",
    ],
    goal: "Understand how TCP connections are established and which endpoints communicate.",
  },
  {
    title: "Investigate network delays",
    level: "Intermediate",
    steps: [
      "Capture traffic while reproducing a connection problem.",
      "Try the filter: tcp.analysis.retransmission",
      "Inspect packet timestamps and the affected TCP stream.",
      "Compare findings with application errors, latency tests, and router logs.",
    ],
    goal: "Collect evidence that may help diagnose loss or connection problems.",
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
      <code className="overflow-x-auto text-sm text-green-300">
        {children}
      </code>
     
    </div>
  );
}

export default function WiresharkPage() {
  return (
    <main className="mx-auto max-w-5xl space-y-6 px-4 py-8 text-slate-700 sm:px-6">
      <header className="rounded-2xl border border-blue-100 bg-blue-50 p-6 sm:p-8">
        <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-blue-700">
          <Waves className="h-5 w-5" />
          NETWORKING / PACKET ANALYSIS
        </div>

        <h1 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
          Wireshark: Meaning, Commands & Practical Guide
        </h1>

        <p className="mt-4 max-w-3xl leading-7 text-slate-600">
          Learn how to capture network packets, filter traffic, inspect
          protocols, investigate connection problems, and practice network
          analysis in your own lab.
        </p>

        <div className="mt-5 flex flex-wrap gap-3">
          <a
            href="#practice"
            className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 font-semibold text-white hover:bg-blue-700"
          >
            <Play className="h-4 w-4" />
            Start Practice
          </a>

          <a
            href="https://www.wireshark.org/download.html"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-blue-200 bg-white px-4 py-2.5 font-semibold text-blue-700 hover:bg-blue-100"
          >
            <Download className="h-4 w-4" />
            Download Wireshark
          </a>
        </div>
      </header>

      <Section icon={BookOpen} title="1. What is Wireshark?">
        <p className="leading-7">
          Wireshark is a free, open-source network protocol analyzer. It
          captures packets from supported network interfaces and displays
          their protocol details so you can investigate how devices communicate.
        </p>

        <p className="mt-3 leading-7">
          A packet capture is a recorded view of network traffic available to
          your capture interface. It does not automatically reveal every
          packet on a Wi-Fi network or decrypt encrypted communication.
        </p>
      </Section>

      <Section icon={Network} title="2. What is Wireshark used for?">
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            ["Network troubleshooting", "Investigate DNS failures, retransmissions, and connection issues."],
            ["Protocol learning", "Understand DNS, TCP, UDP, ICMP, HTTP, and TLS."],
            ["Security monitoring", "Examine suspicious connections and unexpected traffic patterns."],
            ["Performance analysis", "Inspect packet timing, TCP behavior, and communication flows."],
            ["Application debugging", "Observe network exchanges when an application behaves unexpectedly."],
            ["Training and research", "Practice packet analysis using sample captures and lab traffic."],
          ].map(([title, description]) => (
            <div key={title} className="rounded-lg border border-slate-200 p-4">
              <h3 className="font-semibold text-slate-900">{title}</h3>
              <p className="mt-1 text-sm leading-6">{description}</p>
            </div>
          ))}
        </div>
      </Section>
<AdSlot />
      <Section icon={Terminal} title="3. Basic setup and capture">
        <ol className="list-decimal space-y-2 pl-5 leading-7">
          <li>Download Wireshark from its official website.</li>
          <li>Install it and approve the required packet-capture component when prompted.</li>
          <li>Open Wireshark and identify your active Wi-Fi or Ethernet interface.</li>
          <li>Double-click the interface to begin capturing packets.</li>
          <li>Generate some normal traffic, such as opening a website you use.</li>
          <li>Stop the capture and save it as a PCAPNG file if you need it later.</li>
        </ol>

        <div className="mt-4 rounded-lg bg-amber-50 p-4 text-sm leading-6 text-amber-900">
          <strong>Important:</strong> Capture only traffic you own or have
          explicit permission to analyze. Packet captures may contain private
          metadata, internal addresses, or sensitive application information.
          Keep capture files private.
        </div>
      </Section>

      <Section icon={Filter} title="4. Useful Wireshark display filters">
        <p className="mb-4 text-sm leading-6">
          Enter these expressions in the display-filter bar. Display filters
          change which captured packets are shown; they do not limit what was
          originally captured.
        </p>

        <div className="space-y-3">
          {filters.map((item) => (
            <div key={item.name} className="rounded-lg border border-slate-200 p-3">
              <div className="mb-2">
                <h3 className="font-semibold text-slate-900">{item.name}</h3>
                <p className="text-sm">{item.description}</p>
              </div>
              <CodeBlock>{item.filter}</CodeBlock>
            </div>
          ))}
        </div>
      </Section>

      <Section icon={Terminal} title="5. Command-line tools">
        <p className="mb-4 leading-7">
          Wireshark includes command-line utilities. Open PowerShell or a
          terminal where these programs are installed and available in PATH.
        </p>

        <div className="space-y-4">
          <div>
            <h3 className="mb-2 font-semibold text-slate-900">
              Check TShark installation
            </h3>
            <CodeBlock>tshark --version</CodeBlock>
          </div>

          <div>
            <h3 className="mb-2 font-semibold text-slate-900">
              List capture interfaces
            </h3>
            <CodeBlock>tshark -D</CodeBlock>
          </div>

          <div>
            <h3 className="mb-2 font-semibold text-slate-900">
              Read a saved capture
            </h3>
            <CodeBlock>tshark -r sample.pcapng</CodeBlock>
          </div>

          <div>
            <h3 className="mb-2 font-semibold text-slate-900">
              Read only DNS packets from a saved capture
            </h3>
            <CodeBlock>tshark -r sample.pcapng -Y "dns"</CodeBlock>
          </div>

          <div>
            <h3 className="mb-2 font-semibold text-slate-900">
              Show selected fields
            </h3>
            <CodeBlock>
              tshark -r sample.pcapng -T fields -e frame.number -e ip.src -e ip.dst -e _ws.col.Protocol
            </CodeBlock>
          </div>
        </div>

        <p className="mt-4 text-sm leading-6 text-slate-500">
          Replace sample.pcapng with your capture filename. Interface names,
          permissions, and installation paths vary by operating system.
        </p>
      </Section>
<AdSlot />
      <section id="practice" className="scroll-mt-6 space-y-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-950">
            6. Hands-on Wireshark practice
          </h2>
          <p className="mt-2 text-slate-600">
            Work through these exercises in order. Each one builds a practical
            packet-analysis skill.
          </p>
        </div>

        {exercises.map((exercise, index) => (
          <article
            key={exercise.title}
            className="rounded-xl border border-slate-200 bg-white p-5"
          >
            <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
              <h3 className="text-lg font-bold text-slate-900">
                {index + 1}. {exercise.title}
              </h3>
              <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                {exercise.level}
              </span>
            </div>

            <ol className="list-decimal space-y-2 pl-5 leading-6">
              {exercise.steps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>

            <div className="mt-4 flex items-start gap-2 rounded-lg bg-slate-50 p-3 text-sm">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
              <p>
                <strong>Goal:</strong> {exercise.goal}
              </p>
            </div>
          </article>
        ))}
      </section>

      <Section icon={Search} title="7. Explore packets in detail">
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-slate-900">
              Packet details pane
            </h3>
            <p className="mt-1 leading-7">
              Select a packet and expand its protocol layers. Examine the
              Ethernet, IP, TCP or UDP, and application protocol fields that
              are available in that packet.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900">
              Follow a TCP stream
            </h3>
            <p className="mt-1 leading-7">
              Right-click a TCP packet and select Follow → TCP Stream. This
              groups related stream data when Wireshark can reconstruct it.
              Encrypted TLS application data generally remains encrypted.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900">
              Statistics and conversations
            </h3>
            <p className="mt-1 leading-7">
              Explore Statistics → Protocol Hierarchy, Conversations, and
              Endpoints to understand which protocols and devices appear in
              your capture.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900">
              Sample capture files
            </h3>
            <p className="mt-1 leading-7">
              Practice without recording live traffic using the official
              Wireshark sample captures.
            </p>
            <a
              href="https://wiki.wireshark.org/SampleCaptures"
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex font-semibold text-blue-700 hover:underline"
            >
              Browse sample captures →
            </a>
          </div>
        </div>
      </Section>

      <Section icon={ShieldCheck} title="8. Wireshark for network defense">
        <ul className="list-disc space-y-2 pl-5 leading-7">
          <li>Identify unexpected outbound connections on an authorized device.</li>
          <li>Investigate repeated DNS failures and unusual query patterns.</li>
          <li>Look for unexplained communication with unfamiliar destinations.</li>
          <li>Compare normal traffic with a capture taken during a suspected issue.</li>
          <li>Correlate packet evidence with endpoint logs, firewall events, and DNS records.</li>
        </ul>

        <p className="mt-3 text-sm leading-6 text-slate-500">
          An unfamiliar IP address, encrypted connection, or unusual packet
          alone does not prove malware or compromise. Validate findings with
          additional evidence.
        </p>
      </Section>

      <Section icon={BookOpen} title="9. Common beginner mistakes">
        <ul className="list-disc space-y-2 pl-5 leading-7">
          <li>Confusing capture filters with display filters.</li>
          <li>Expecting Wireshark to capture all traffic on a switched or Wi-Fi network.</li>
          <li>Assuming HTTPS content is readable simply because its packets are visible.</li>
          <li>Using a private IP filter without replacing the example address.</li>
          <li>Concluding a network is compromised based on a single suspicious-looking packet.</li>
        </ul>
      </Section>

      <Section icon={Activity} title="10. Your next learning steps">
        <div className="grid gap-3 sm:grid-cols-2">
          <a
            href="https://www.wireshark.org/docs/"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-slate-200 p-4 hover:border-blue-300"
          >
            <h3 className="font-semibold text-slate-900">
              Official documentation
            </h3>
            <p className="mt-1 text-sm">Learn packet analysis and filter syntax.</p>
          </a>

          <a
            href="https://wiki.wireshark.org/"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-slate-200 p-4 hover:border-blue-300"
          >
            <h3 className="font-semibold text-slate-900">
              Wireshark Wiki
            </h3>
            <p className="mt-1 text-sm">Explore protocols, troubleshooting, and examples.</p>
          </a>
        </div>
      </Section>
<AdSlot />
      <section className="rounded-xl border border-blue-100 bg-blue-50 p-5">
        <h2 className="text-xl font-bold text-slate-950">
          Keep practicing
        </h2>
        <p className="mt-2 leading-7 text-slate-600">
          Start with DNS and TCP, learn to read packet details, and then
          investigate retransmissions and connection failures. Regular practice
          with known-good captures will build your network troubleshooting
          skills.
        </p>
      </section>

      <RelatedTopics links={[
                  {
                    href:'/networking/network-tools',
                    label:'Network Tools'
                  },{
                    href:'/networking/network-tools/nmap',
                    label:'Nmap'
                  },{
                    href:'/networking/fundamentals',
                    label:'Fundamentals'
                  }
                ]} />
    </main>
  );
}
