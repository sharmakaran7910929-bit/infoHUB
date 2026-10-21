
import Link from "next/link";
import RelatedTopics from "../../../../components/ContinueReading";
import AdSlot from "../../../../components/AdSlot";

export const metadata = {
  title: "IP Subnetting Explained | Examples, Subnet Masks & More",
  description:
    "Learn IP subnetting with simple examples, subnet masks, network and host portions, subnet ranges, and step-by-step calculations for beginners.",
  alternates: {
    canonical: "/networking/ip-addressing/subnetting",
  },
};

const faqs = [
  {
    question: "What is subnetting in networking?",
    answer:
      "Subnetting is the process of dividing an IP network into smaller logical networks called subnets. It helps organize addressing, manage network traffic, and apply network policies.",
  },
  {
    question: "What is a subnet mask?",
    answer:
      "A subnet mask identifies the network portion and host portion of an IPv4 address. For example, 255.255.255.0 corresponds to the /24 prefix.",
  },
  {
    question: "What does /24 mean in an IP address?",
    answer:
      "The /24 prefix means that the first 24 bits of the IPv4 address identify the network prefix, leaving 8 bits for the remaining address space.",
  },
  {
    question: "How many usable hosts are in a /24 subnet?",
    answer:
      "A conventional IPv4 /24 subnet contains 256 total addresses. Typically, 254 are usable host addresses because the network and broadcast addresses are reserved.",
  },
  {
    question: "What is the difference between a network address and a broadcast address?",
    answer:
      "The network address identifies the subnet itself. The IPv4 broadcast address is used to send traffic to eligible hosts on that subnet.",
  },
  {
    question: "Why is subnetting important for cybersecurity?",
    answer:
      "Subnetting helps network defenders separate systems, organize firewall rules, monitor traffic between network segments, and limit unnecessary access when combined with appropriate security controls.",
  },
];

const examples = [
  {
    prefix: "/24",
    mask: "255.255.255.0",
    addresses: "256",
    hosts: "254",
    use: "Common small LAN",
  },
  {
    prefix: "/25",
    mask: "255.255.255.128",
    addresses: "128",
    hosts: "126",
    use: "Smaller network segment",
  },
  {
    prefix: "/26",
    mask: "255.255.255.192",
    addresses: "64",
    hosts: "62",
    use: "Small device group",
  },
  {
    prefix: "/27",
    mask: "255.255.255.224",
    addresses: "32",
    hosts: "30",
    use: "Small subnet",
  },
  {
    prefix: "/28",
    mask: "255.255.255.240",
    addresses: "16",
    hosts: "14",
    use: "Very small subnet",
  },
];

export default function SubnettingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: "Subnetting Explained: Subnet Masks, CIDR and Examples",
    description: metadata.description,
    author: {
      "@type": "Organization",
      name: "Info Hub",
    },
    publisher: {
      "@type": "Organization",
      name: "Info Hub",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "/networking/ip-addressing/subnetting",
    },
  };

  const faqJsonLd = {
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
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
       

        {/* Introduction */}
        <header className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-700">
            Networking Fundamentals · Beginner Guide
          </p>

          <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Subnetting Explained: A Beginner&apos;s Guide
          </h1>

          <p className="mt-5 max-w-3xl leading-8 text-slate-600">
            Subnetting is an essential networking skill used to divide a larger
            IP network into smaller logical networks. It helps administrators
            organize devices, plan IP addresses, and control how systems
            communicate.
          </p>

          <p className="mt-4 max-w-3xl leading-8 text-slate-600">
            This guide explains subnet masks, CIDR notation, network addresses,
            broadcast addresses, and usable host ranges with practical IPv4
            examples. You will also learn why subnetting matters when defending
            a network.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#subnetting-basics"
              className="inline-flex items-center rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Learn subnetting basics →
            </a>

            <a
              href="#worked-example"
              className="inline-flex items-center rounded-lg border border-blue-200 bg-blue-50 px-5 py-3 font-semibold text-blue-800 transition hover:bg-blue-100"
            >
              See a worked example
            </a>
          </div>
        </header>

        {/* Table of contents */}
        <nav
          aria-label="On this page"
          className="mt-8 rounded-xl border border-slate-200 bg-white p-5 sm:p-6"
        >
          <h2 className="text-lg font-bold text-slate-900">On This Page</h2>

          <ul className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
            {[
              ["#subnetting-basics", "What is subnetting?"],
              ["#why-subnetting", "Why subnetting is used"],
              ["#subnet-mask", "Understanding subnet masks"],
              ["#cidr", "CIDR notation explained"],
              ["#network-broadcast", "Network and broadcast addresses"],
              ["#worked-example", "Step-by-step subnetting example"],
              ["#subnet-table", "Common subnet prefixes"],
              ["#calculate-subnet", "How to calculate a subnet"],
              ["#cybersecurity", "Subnetting in cybersecurity"],
              ["#faqs", "Frequently asked questions"],
            ].map(([href, label]) => (
              <li key={href}>
                <a
                  href={href}
                  className="font-medium text-blue-700 hover:text-blue-900 hover:underline"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <AdSlot />

        {/* Subnetting basics */}
        <section id="subnetting-basics" className="mt-12 scroll-mt-8">
          <h2 className="text-2xl font-bold text-slate-950">
            What Is Subnetting?
          </h2>

          <p className="mt-4 leading-8 text-slate-700">
            Subnetting is the process of dividing an IP network into smaller
            networks called subnets. Each subnet has its own network prefix
            and address range.
          </p>

          <p className="mt-4 leading-8 text-slate-700">
            For example, a company may have separate networks for office
            computers, servers, guest Wi-Fi, and security cameras. Rather than
            treating every device as part of one large network, an administrator
            can allocate different subnets to these groups.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <article className="rounded-xl border border-slate-200 bg-white p-5">
              <p className="text-sm font-semibold text-blue-700">
                Example 1
              </p>
              <h3 className="mt-2 font-bold text-slate-900">
                Office computers
              </h3>
              <p className="mt-2 font-mono text-blue-700">192.168.1.0/24</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                A possible subnet for employee devices.
              </p>
            </article>

            <article className="rounded-xl border border-slate-200 bg-white p-5">
              <p className="text-sm font-semibold text-blue-700">
                Example 2
              </p>
              <h3 className="mt-2 font-bold text-slate-900">
                Security cameras
              </h3>
              <p className="mt-2 font-mono text-blue-700">192.168.2.0/24</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                A separate address range for camera devices.
              </p>
            </article>

            <article className="rounded-xl border border-slate-200 bg-white p-5">
              <p className="text-sm font-semibold text-blue-700">
                Example 3
              </p>
              <h3 className="mt-2 font-bold text-slate-900">
                Guest Wi-Fi
              </h3>
              <p className="mt-2 font-mono text-blue-700">192.168.3.0/24</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                A separate subnet that can have restricted access.
              </p>
            </article>
          </div>

          <p className="mt-5 leading-8 text-slate-700">
            These are illustrative private IPv4 networks. Creating separate
            address ranges alone does not isolate devices; routers, VLANs,
            firewall rules, and other network configurations determine how
            traffic can move between them.
          </p>
        </section>

        {/* Why subnetting */}
        <section id="why-subnetting" className="mt-12 scroll-mt-8">
          <h2 className="text-2xl font-bold text-slate-950">
            Why Is Subnetting Used?
          </h2>

          <p className="mt-4 leading-8 text-slate-700">
            Subnetting helps network administrators plan address allocation
            and organize infrastructure. The exact benefits depend on the
            network design and how the subnets are configured.
          </p>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {[
              {
                title: "Better address management",
                description:
                  "Allocate suitable address ranges to different departments, sites, and device groups.",
              },
              {
                title: "Network organization",
                description:
                  "Separate logical groups such as servers, employee devices, printers, and guest systems.",
              },
              {
                title: "Traffic management",
                description:
                  "Use routing and network design to control communication between different subnets.",
              },
              {
                title: "Security policy enforcement",
                description:
                  "Apply access-control lists and firewall policies to limit unnecessary communication between network segments.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-xl border border-slate-200 bg-white p-5"
              >
                <h3 className="font-bold text-slate-900">{item.title}</h3>
                <p className="mt-2 leading-7 text-slate-600">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <AdSlot />

        {/* Subnet mask */}
        <section id="subnet-mask" className="mt-12 scroll-mt-8">
          <h2 className="text-2xl font-bold text-slate-950">
            Understanding Subnet Masks
          </h2>

          <p className="mt-4 leading-8 text-slate-700">
            An IPv4 subnet mask identifies which bits of an address belong to
            the network prefix and which bits remain for addresses within that
            subnet.
          </p>

          <p className="mt-4 leading-8 text-slate-700">
            Consider the following IPv4 configuration:
          </p>

          <div className="mt-5 overflow-x-auto rounded-xl border border-slate-200 bg-white">
            <table className="w-full min-w-[420px] text-left text-sm">
              <thead className="bg-blue-50">
                <tr>
                  <th className="p-4 font-semibold">Setting</th>
                  <th className="p-4 font-semibold">Example</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="p-4 font-medium">IP address</td>
                  <td className="p-4 font-mono">192.168.1.10</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Subnet mask</td>
                  <td className="p-4 font-mono">255.255.255.0</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">CIDR prefix</td>
                  <td className="p-4 font-mono">/24</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Network address</td>
                  <td className="p-4 font-mono">192.168.1.0</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Broadcast address</td>
                  <td className="p-4 font-mono">192.168.1.255</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Typical usable range</td>
                  <td className="p-4 font-mono">192.168.1.1–192.168.1.254</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="mt-7 text-xl font-bold text-slate-900">
            How does 255.255.255.0 work?
          </h3>

          <p className="mt-3 leading-8 text-slate-700">
            In binary, the mask 255.255.255.0 is represented by 24 consecutive
            ones followed by 8 zeros. The 24 ones identify the network prefix,
            while the remaining 8 bits provide the subnet&apos;s address space.
          </p>

          <div className="mt-5 rounded-xl border border-blue-100 bg-blue-50 p-5">
            <p className="font-semibold text-slate-900">
              Remember this relationship
            </p>
            <p className="mt-2 font-mono text-sm leading-7 text-blue-800">
              255.255.255.0 = /24 = 24 network-prefix bits
            </p>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              This is one of the most common IPv4 subnet configurations used
              in learning examples and small networks.
            </p>
          </div>
        </section>

        {/* CIDR */}
        <section id="cidr" className="mt-12 scroll-mt-8">
          <h2 className="text-2xl font-bold text-slate-950">
            What Is CIDR Notation?
          </h2>

          <p className="mt-4 leading-8 text-slate-700">
            CIDR stands for Classless Inter-Domain Routing. CIDR notation
            represents an IP network by writing its address followed by a
            slash and the number of bits in its network prefix.
          </p>

          <p className="mt-4 leading-8 text-slate-700">
            For example, <code className="rounded bg-slate-200 px-2 py-1">192.168.1.0/24</code>{" "}
            identifies a network with a 24-bit IPv4 prefix. IPv4 addresses
            contain 32 bits in total, so this prefix leaves 8 bits in the
            address for the remaining portion.
          </p>

          <div className="mt-5 overflow-x-auto rounded-xl border border-slate-200 bg-white">
            <table className="w-full min-w-[460px] text-left text-sm">
              <thead className="bg-blue-50">
                <tr>
                  <th className="p-4 font-semibold">CIDR</th>
                  <th className="p-4 font-semibold">Subnet mask</th>
                  <th className="p-4 font-semibold">Host bits</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="p-4 font-mono">/24</td>
                  <td className="p-4 font-mono">255.255.255.0</td>
                  <td className="p-4">8</td>
                </tr>
                <tr>
                  <td className="p-4 font-mono">/25</td>
                  <td className="p-4 font-mono">255.255.255.128</td>
                  <td className="p-4">7</td>
                </tr>
                <tr>
                  <td className="p-4 font-mono">/26</td>
                  <td className="p-4 font-mono">255.255.255.192</td>
                  <td className="p-4">6</td>
                </tr>
                <tr>
                  <td className="p-4 font-mono">/27</td>
                  <td className="p-4 font-mono">255.255.255.224</td>
                  <td className="p-4">5</td>
                </tr>
                <tr>
                  <td className="p-4 font-mono">/28</td>
                  <td className="p-4 font-mono">255.255.255.240</td>
                  <td className="p-4">4</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4 leading-8 text-slate-700">
            As the prefix number increases, fewer host bits remain and the
            subnet becomes smaller. As the prefix number decreases, more host
            bits remain and the subnet contains a larger address range.
          </p>
        </section>

        {/* Network and broadcast */}
        <section id="network-broadcast" className="mt-12 scroll-mt-8">
          <h2 className="text-2xl font-bold text-slate-950">
            Network Address, Broadcast Address, and Host Range
          </h2>

          <p className="mt-4 leading-8 text-slate-700">
            In a conventional IPv4 subnet, three concepts are especially
            important: the network address, the broadcast address, and the
            usable host addresses between them.
          </p>

          <div className="mt-5 space-y-4">
            <article className="rounded-xl border border-slate-200 bg-white p-5">
              <h3 className="font-bold text-slate-900">1. Network address</h3>
              <p className="mt-2 font-mono text-blue-700">192.168.1.0</p>
              <p className="mt-2 leading-7 text-slate-600">
                For the example network 192.168.1.0/24, this address identifies
                the subnet itself and is not normally assigned to a host.
              </p>
            </article>

            <article className="rounded-xl border border-slate-200 bg-white p-5">
              <h3 className="font-bold text-slate-900">2. Usable host range</h3>
              <p className="mt-2 font-mono text-blue-700">
                192.168.1.1–192.168.1.254
              </p>
              <p className="mt-2 leading-7 text-slate-600">
                These are the conventional host addresses available within
                this /24 subnet, subject to the network&apos;s configuration
                and address allocation.
              </p>
            </article>

            <article className="rounded-xl border border-slate-200 bg-white p-5">
              <h3 className="font-bold text-slate-900">3. Broadcast address</h3>
              <p className="mt-2 font-mono text-blue-700">192.168.1.255</p>
              <p className="mt-2 leading-7 text-slate-600">
                This is the subnet-directed broadcast address for the /24
                network. It is used to address eligible hosts on that subnet.
              </p>
            </article>
          </div>

          <div className="mt-5 rounded-xl border border-amber-200 bg-amber-50 p-5">
            <h3 className="font-bold text-amber-950">
              Important exception
            </h3>
            <p className="mt-2 leading-7 text-amber-900">
              The familiar formula that excludes the network and broadcast
              addresses applies to conventional IPv4 subnets such as /24,
              /25, and /26. Special cases, including /31 point-to-point links
              and /32 host routes, follow different rules.
            </p>
          </div>
        </section>

        <AdSlot />

        {/* Worked example */}
        <section id="worked-example" className="mt-12 scroll-mt-8">
          <h2 className="text-2xl font-bold text-slate-950">
            Step-by-Step Subnetting Example
          </h2>

          <p className="mt-4 leading-8 text-slate-700">
            Suppose a computer has the following configuration:
          </p>

          <div className="mt-5 rounded-xl border border-slate-200 bg-white p-5 sm:p-7">
            <p className="text-sm font-semibold text-slate-500">
              Given configuration
            </p>

            <p className="mt-3 font-mono text-lg font-bold text-blue-800">
              192.168.10.25/26
            </p>

            <p className="mt-2 leading-7 text-slate-600">
              Our task is to find the subnet mask, network address, broadcast
              address, and conventional usable host range.
            </p>

            <div className="mt-5 space-y-5">
              <div>
                <h3 className="font-bold text-slate-900">
                  Step 1: Find the subnet mask
                </h3>
                <p className="mt-2 leading-7 text-slate-600">
                  A /26 prefix means 26 network bits and 6 remaining bits.
                  The corresponding subnet mask is:
                </p>
                <p className="mt-2 rounded-lg bg-blue-50 p-3 font-mono text-blue-800">
                  255.255.255.192
                </p>
              </div>

              <div>
                <h3 className="font-bold text-slate-900">
                  Step 2: Calculate the address block size
                </h3>
                <p className="mt-2 leading-7 text-slate-600">
                  In the last octet, subtract the mask value from 256:
                </p>
                <p className="mt-2 rounded-lg bg-blue-50 p-3 font-mono text-blue-800">
                  256 − 192 = 64
                </p>
                <p className="mt-2 leading-7 text-slate-600">
                  Therefore, the subnet ranges in the last octet start at
                  0, 64, 128, and 192.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-slate-900">
                  Step 3: Identify the subnet
                </h3>
                <p className="mt-2 leading-7 text-slate-600">
                  The address ends in 25, which falls in the range from 0
                  through 63. Therefore, it belongs to the first subnet.
                </p>
                <p className="mt-2 rounded-lg bg-blue-50 p-3 font-mono text-blue-800">
                  Network address: 192.168.10.0
                </p>
              </div>

              <div>
                <h3 className="font-bold text-slate-900">
                  Step 4: Find the broadcast address
                </h3>
                <p className="mt-2 leading-7 text-slate-600">
                  The subnet ends at the address immediately before the next
                  block begins.
                </p>
                <p className="mt-2 rounded-lg bg-blue-50 p-3 font-mono text-blue-800">
                  Broadcast: 192.168.10.63
                </p>
              </div>

              <div>
                <h3 className="font-bold text-slate-900">
                  Step 5: Find the usable host range
                </h3>
                <p className="mt-2 leading-7 text-slate-600">
                  For this conventional /26 subnet, the usable host addresses
                  are between the network and broadcast addresses.
                </p>
                <p className="mt-2 rounded-lg bg-blue-50 p-3 font-mono text-blue-800">
                  192.168.10.1–192.168.10.62
                </p>
              </div>
            </div>
          </div>

          <div className="mt-5 rounded-xl border border-blue-100 bg-blue-50 p-5">
            <h3 className="font-bold text-slate-900">Final answer</h3>
            <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
              <li>
                <strong>IP address:</strong> 192.168.10.25
              </li>
              <li>
                <strong>Subnet mask:</strong> 255.255.255.192
              </li>
              <li>
                <strong>Network:</strong> 192.168.10.0/26
              </li>
              <li>
                <strong>Broadcast:</strong> 192.168.10.63
              </li>
              <li>
                <strong>Usable hosts:</strong> 62
              </li>
              <li>
                <strong>Usable range:</strong> 192.168.10.1–192.168.10.62
              </li>
            </ul>
          </div>
        </section>

        {/* Common subnet table */}
        <section id="subnet-table" className="mt-12 scroll-mt-8">
          <h2 className="text-2xl font-bold text-slate-950">
            Common IPv4 Subnet Masks and Host Counts
          </h2>

          <p className="mt-4 leading-8 text-slate-700">
            This reference table shows common conventional IPv4 subnet sizes.
            The usable host counts exclude the network and broadcast addresses.
          </p>

          <div className="mt-5 overflow-x-auto rounded-xl border border-slate-200 bg-white">
            <table className="w-full min-w-[600px] text-left text-sm">
              <thead className="bg-blue-50">
                <tr>
                  <th className="p-4 font-semibold">Prefix</th>
                  <th className="p-4 font-semibold">Subnet mask</th>
                  <th className="p-4 font-semibold">Total addresses</th>
                  <th className="p-4 font-semibold">Usable hosts</th>
                  <th className="p-4 font-semibold">Typical example</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {examples.map((item) => (
                  <tr key={item.prefix}>
                    <td className="p-4 font-mono font-semibold">
                      {item.prefix}
                    </td>
                    <td className="p-4 font-mono">{item.mask}</td>
                    <td className="p-4">{item.addresses}</td>
                    <td className="p-4">{item.hosts}</td>
                    <td className="p-4">{item.use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-4 leading-8 text-slate-700">
            A conventional IPv4 subnet&apos;s total address count can be
            calculated as 2 raised to the number of host bits. For example,
            a /26 prefix leaves 6 host bits, so 2⁶ = 64 total addresses and
            typically 62 usable host addresses.
          </p>
        </section>

        {/* Calculation method */}
        <section id="calculate-subnet" className="mt-12 scroll-mt-8">
          <h2 className="text-2xl font-bold text-slate-950">
            How to Calculate a Subnet
          </h2>

          <p className="mt-4 leading-8 text-slate-700">
            When solving a subnetting problem, follow a consistent process
            rather than trying to memorize every possible address range.
          </p>

          <ol className="mt-5 list-decimal space-y-4 pl-6 leading-7 text-slate-700">
            <li>
              <strong>Identify the prefix.</strong> For example, /26 means
              26 network bits.
            </li>
            <li>
              <strong>Calculate host bits.</strong> For IPv4, subtract the
              prefix length from 32. A /26 leaves 6 host bits.
            </li>
            <li>
              <strong>Find the subnet mask.</strong> Convert the prefix to
              its dotted-decimal mask, such as 255.255.255.192 for /26.
            </li>
            <li>
              <strong>Find the block size.</strong> In the relevant octet,
              subtract the mask value from 256.
            </li>
            <li>
              <strong>Find the network boundary.</strong> Identify the block
              containing the given IP address.
            </li>
            <li>
              <strong>Determine the broadcast and host range.</strong> Find
              the final address in the block, then determine which addresses
              can be assigned to hosts under the subnet&apos;s rules.
            </li>
          </ol>

          <div className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
            <h3 className="font-bold text-slate-900">
              Practice question
            </h3>
            <p className="mt-2 leading-7 text-slate-600">
              Given 192.168.5.70/26, calculate the subnet mask, network
              address, broadcast address, and usable host range.
            </p>

            <div className="mt-4 border-t border-slate-200 pt-4">
              <p className="font-semibold text-blue-800">Answer</p>
              <ul className="mt-2 space-y-2 text-sm leading-6 text-slate-700">
                <li>
                  <strong>Subnet mask:</strong> 255.255.255.192
                </li>
                <li>
                  <strong>Network:</strong> 192.168.5.64/26
                </li>
                <li>
                  <strong>Broadcast:</strong> 192.168.5.127
                </li>
                <li>
                  <strong>Usable range:</strong> 192.168.5.65–192.168.5.126
                </li>
                <li>
                  <strong>Usable hosts:</strong> 62
                </li>
              </ul>
            </div>
          </div>
        </section>

        <AdSlot />

        {/* Cybersecurity */}
        <section id="cybersecurity" className="mt-12 scroll-mt-8">
          <h2 className="text-2xl font-bold text-slate-950">
            Why Subnetting Matters in Cybersecurity
          </h2>

          <p className="mt-4 leading-8 text-slate-700">
            Network defenders need to understand which devices belong to
            which subnets and how traffic moves between them. Subnetting
            knowledge is useful when investigating alerts, configuring
            firewalls, and reviewing network traffic.
          </p>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {[
              {
                title: "Network segmentation",
                description:
                  "Separate groups of devices into logical network segments and restrict communication where appropriate.",
              },
              {
                title: "Firewall configuration",
                description:
                  "Interpret CIDR ranges and create rules for permitted or denied source and destination networks.",
              },
              {
                title: "Log analysis",
                description:
                  "Recognize whether an IP address belongs to an internal subnet, a known server network, or another address range.",
              },
              {
                title: "Incident investigation",
                description:
                  "Use subnet information alongside timestamps, ports, device records, and traffic evidence to investigate unusual activity.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-xl border border-slate-200 bg-white p-5"
              >
                <h3 className="font-bold text-slate-900">{item.title}</h3>
                <p className="mt-2 leading-7 text-slate-600">
                  {item.description}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-5 rounded-xl border border-amber-200 bg-amber-50 p-5">
            <h3 className="font-bold text-amber-950">
              Subnetting is not a firewall
            </h3>
            <p className="mt-2 leading-7 text-amber-900">
              Different IP subnets do not automatically guarantee security.
              Effective segmentation requires appropriate network architecture,
              routing controls, firewall policies, and monitoring. A defender
              should verify which traffic is actually permitted between
              segments.
            </p>
          </div>
        </section>

        {/* Next learning steps */}
        <section className="mt-12 rounded-2xl border border-blue-100 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-slate-950">
            What Should You Learn Next?
          </h2>

          <p className="mt-3 leading-7 text-slate-600">
            Once you understand IPv4 subnetting, compare IPv4 with IPv6 to
            learn how modern networks handle addressing and larger address
            spaces.
          </p>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <Link
              href="/networking/ip-addressing"
              className="rounded-xl border border-slate-200 p-5 transition hover:border-blue-300 hover:bg-blue-50"
            >
              <h3 className="font-bold text-blue-800">
                IP Addressing Overview →
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Review IP address fundamentals, address types, and how
                devices communicate.
              </p>
            </Link>

            <Link
              href="/networking/ip-addressing/ip-address-basics"
              className="rounded-xl border border-slate-200 p-5 transition hover:border-blue-300 hover:bg-blue-50"
            >
              <h3 className="font-bold text-blue-800">
                IP Address Basics →
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Revisit IPv4 structure, private addresses, and network
                configuration.
              </p>
            </Link>

            <Link
              href="/networking/ip-addressing/ipv4-and-ipv6"
              className="rounded-xl border border-slate-200 p-5 transition hover:border-blue-300 hover:bg-blue-50 sm:col-span-2"
            >
              <h3 className="font-bold text-blue-800">
                IPv4 and IPv6 Explained →
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Understand address formats, differences, and the role of
                IPv6 in modern networking.
              </p>
            </Link>
          </div>
        </section>

        {/* FAQs */}
        <section id="faqs" className="mt-12 scroll-mt-8">
          <h2 className="text-2xl font-bold text-slate-950">
            Frequently Asked Questions
          </h2>

          <div className="mt-5 space-y-4">
            {faqs.map((faq) => (
              <article
                key={faq.question}
                className="rounded-xl border border-slate-200 bg-white p-5"
              >
                <h3 className="font-bold text-slate-900">{faq.question}</h3>
                <p className="mt-2 leading-7 text-slate-600">
                  {faq.answer}
                </p>
              </article>
            ))}
          </div>
        </section>
      </div>

      {/* Reusable related-reading component */}
      <RelatedTopics
        eyebrow="IP Addressing Learning Path"
        title="Continue Learning About Networking"
        description="Build your networking knowledge step by step, from IP addressing fundamentals to subnet calculations and IPv4/IPv6."
        links={[
          {
            label: "IP Addressing Overview",
            href: "/networking/ip-addressing",
          },
          {
            label: "IP Address Basics",
            href: "/networking/ip-addressing/ip-address-basics",
          },
          {
            label: "IPv4 and IPv6",
            href: "/networking/ip-addressing/ipv4-and-ipv6",
          },
        ]}
      />
    </main>
  );
}
