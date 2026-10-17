
import Link from "next/link";
import RelatedTopics from "../../../../components/ContinueReading";
import AdSlot from "../../../../components/AdSlot";
export const metadata = {
  title: "IP Address Basics | Types, Examples & How IPs Work",
  description:
    "Learn IP address basics, IPv4 structure, public and private IP addresses, static and dynamic IPs, loopback, APIPA, and how to find your IP address on Windows.",
  alternates: {
    canonical: "/networking/ip-addressing/ip-address-basics",
  },

};

const faqs = [
  {
    question: "What is an IP address in simple words?",
    answer:
      "An IP address is a logical address associated with a network interface. It helps devices and routers identify the source and destination of IP packets.",
  },
  {
    question: "Is an IP address the same as a MAC address?",
    answer:
      "No. An IP address is used for communication at the Internet Protocol layer, while a MAC address is used for delivery on a local network link. They serve different purposes.",
  },
  {
    question: "What is the difference between a public IP and a private IP?",
    answer:
      "A public IP address is globally routable on the internet. Private IPv4 addresses are reserved for internal networks and are not directly routed across the public internet.",
  },
  {
    question: "Does my IP address always stay the same?",
    answer:
      "No. A dynamically assigned address may change over time. A static address is intended to remain consistent, although the exact behavior depends on how the network is configured.",
  },
  {
    question: "What is the 127.0.0.1 IP address?",
    answer:
      "127.0.0.1 is the commonly used IPv4 loopback address. It lets a computer communicate with its own local network stack without sending that traffic to another device on the network.",
  },
  {
    question: "What is an APIPA address?",
    answer:
      "APIPA refers to IPv4 link-local addressing in the 169.254.0.0/16 range. Windows commonly uses such an address when automatic IPv4 configuration through DHCP is unsuccessful and no other configuration takes precedence.",
  },
];

const concepts = [
  {
    number: "01",
    title: "IPv4 Address Structure",
    description:
      "Understand 32-bit addressing, four decimal octets, and how an address such as 192.168.1.10 is represented.",
  },
  {
    number: "02",
    title: "Public and Private IP Addresses",
    description:
      "Learn where private IPv4 ranges are used, how public addresses work, and how routers commonly use NAT.",
  },
  {
    number: "03",
    title: "Static and Dynamic IP Addresses",
    description:
      "Compare manually configured or reserved addresses with dynamically assigned addresses, commonly provided by DHCP.",
  },
  {
    number: "04",
    title: "Special IPv4 Addresses",
    description:
      "Explore loopback, link-local APIPA, and other special-purpose address ranges.",
  },
];

export default function IPAddressBasicsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: "IP Address Basics: Types, Examples and How IPs Work",
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
      "@id": "/networking/ip-addressing/ip-address-basics",
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
            IP Address Basics: A Beginner&apos;s Guide
          </h1>

          <p className="mt-5 max-w-3xl leading-8 text-slate-600">
            Every computer, phone, server, or other device communicating
            through an IP network needs a way to identify communication
            endpoints. IP addressing provides logical addresses that help
            network devices deliver data to the appropriate destinations.
          </p>

          <p className="mt-4 max-w-3xl leading-8 text-slate-600">
            In this guide, you will learn how IP addresses work, the difference
            between IPv4 and IPv6, public and private addressing, static and
            dynamic IPs, and several special IPv4 address ranges. You will
            also learn how to check your IP configuration on Windows.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#ipv4-basics"
              className="inline-flex items-center rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Learn IPv4 basics →
            </a>

            <a
              href="#find-ip"
              className="inline-flex items-center rounded-lg border border-blue-200 bg-blue-50 px-5 py-3 font-semibold text-blue-800 transition hover:bg-blue-100"
            >
              Find your IP address
            </a>
          </div>
        </header>

        {/* Table of contents */}
        <nav
          aria-label="On this page"
          className="mt-8 rounded-xl border border-slate-200 bg-white p-5 sm:p-6"
        >
          <h2 className="text-lg font-bold text-slate-900">
            On This Page
          </h2>

          <ul className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
            {[
              ["#what-is-ip", "What is an IP address?"],
              ["#ipv4-basics", "IPv4 address structure"],
              ["#ip-vs-mac", "IP address vs. MAC address"],
              ["#public-private", "Public vs. private IP"],
              ["#static-dynamic", "Static vs. dynamic IP"],
              ["#special-addresses", "Loopback and APIPA"],
              ["#find-ip", "Find your IP on Windows"],
              ["#cybersecurity", "IP addresses in cybersecurity"],
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
        {/* What is an IP address */}
        <section id="what-is-ip" className="mt-12 scroll-mt-8">
          <h2 className="text-2xl font-bold text-slate-950">
            What Is an IP Address?
          </h2>

          <p className="mt-4 leading-8 text-slate-700">
            IP stands for Internet Protocol. An IP address is a logical
            address associated with a network interface. IP packets carry
            source and destination addresses, allowing network systems to
            forward data toward its intended destination.
          </p>

          <p className="mt-4 leading-8 text-slate-700">
            For example, your laptop might have a private IP address assigned
            by your home router. When it communicates with a website, packets
            travel through your local network and usually through a router
            before reaching the wider internet.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-slate-200 bg-white p-5">
              <div className="text-sm font-semibold text-blue-700">
                Example 1
              </div>
              <h3 className="mt-2 font-bold text-slate-900">
                Laptop
              </h3>
              <p className="mt-2 font-mono text-lg text-blue-700">
                192.168.1.10
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                A possible private IPv4 address on a home network.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-5">
              <div className="text-sm font-semibold text-blue-700">
                Example 2
              </div>
              <h3 className="mt-2 font-bold text-slate-900">
                Router LAN interface
              </h3>
              <p className="mt-2 font-mono text-lg text-blue-700">
                192.168.1.1
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                A common router address, though actual configurations vary.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-5">
              <div className="text-sm font-semibold text-blue-700">
                Example 3
              </div>
              <h3 className="mt-2 font-bold text-slate-900">
                Web server
              </h3>
              <p className="mt-2 font-mono text-lg text-blue-700">
                Public IP
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                A globally routable address may be used to reach a public
                service.
              </p>
            </div>
          </div>

          <p className="mt-5 leading-8 text-slate-700">
            These examples are illustrative. Real networks can use different
            private ranges, multiple interfaces, IPv6 addresses, proxies, and
            network address translation.
          </p>
        </section>

        {/* IPv4 basics */}
        <section id="ipv4-basics" className="mt-12 scroll-mt-8">
          <h2 className="text-2xl font-bold text-slate-950">
            Understanding IPv4 Address Structure
          </h2>

          <p className="mt-4 leading-8 text-slate-700">
            IPv4 uses a 32-bit address. It is commonly written as four decimal
            numbers separated by dots. Each number represents an 8-bit group
            called an octet and ranges from 0 to 255.
          </p>

          <div className="mt-6 rounded-xl border border-blue-100 bg-white p-5 sm:p-7">
            <p className="text-sm font-semibold text-slate-600">
              Example IPv4 address
            </p>

            <div className="mt-4 grid grid-cols-4 gap-2 text-center">
              {["192", "168", "1", "10"].map((octet, index) => (
                <div
                  key={octet + index}
                  className="rounded-lg border border-blue-100 bg-blue-50 px-1 py-4 sm:px-3 sm:py-5"
                >
                  <div className="font-mono text-xl font-bold text-blue-800 sm:text-2xl">
                    {octet}
                  </div>
                  <div className="mt-2 text-xs text-slate-600">
                    Octet {index + 1}
                  </div>
                  <div className="mt-1 text-xs text-slate-500">
                    8 bits
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-4 text-sm leading-7 text-slate-600">
              Four octets × 8 bits = 32 bits. Each octet represents a binary
              value from 00000000 to 11111111, corresponding to decimal values
              from 0 to 255.
            </p>
          </div>

          <h3 className="mt-7 text-xl font-bold text-slate-900">
            How many IPv4 addresses are possible?
          </h3>

          <p className="mt-3 leading-8 text-slate-700">
            Each of the 32 bits can have a value of 0 or 1. Therefore, the
            total number of possible bit patterns is 2³², which equals
            4,294,967,296.
          </p>

          <p className="mt-3 leading-8 text-slate-700">
            Not all of these addresses are available for ordinary public host
            assignment. Some ranges are reserved for private networks,
            multicast, loopback, documentation, and other special purposes.
          </p>

          <div className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
            <h3 className="font-bold text-slate-900">
              Where does the network portion end?
            </h3>
            <p className="mt-3 leading-7 text-slate-600">
              The address alone does not tell you the full network boundary.
              A prefix length or subnet mask identifies which bits belong to
              the network prefix. For example, 192.168.1.10/24 indicates a
              24-bit prefix.
            </p>
            <Link
              href="/networking/ip-addressing/subnetting"
              className="mt-3 inline-flex font-semibold text-blue-700 hover:underline"
            >
              Learn subnet masks and CIDR notation →
            </Link>
          </div>
        </section>
<AdSlot />
        {/* IP vs MAC */}
        <section id="ip-vs-mac" className="mt-12 scroll-mt-8">
          <h2 className="text-2xl font-bold text-slate-950">
            IP Address vs. MAC Address
          </h2>

          <p className="mt-4 leading-8 text-slate-700">
            IP addresses and MAC addresses perform different jobs. An IP
            address is used by the Internet Protocol to identify packet
            endpoints. A MAC address is used by a link-layer technology for
            delivery on a local network segment.
          </p>

          <div className="mt-5 overflow-x-auto rounded-xl border border-slate-200 bg-white">
            <table className="w-full min-w-[500px] text-left text-sm">
              <thead className="bg-blue-50">
                <tr>
                  <th className="p-4 font-semibold">Feature</th>
                  <th className="p-4 font-semibold">IP Address</th>
                  <th className="p-4 font-semibold">MAC Address</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="p-4 font-medium">Purpose</td>
                  <td className="p-4">Logical network addressing</td>
                  <td className="p-4">Local link-layer delivery</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Common format</td>
                  <td className="p-4 font-mono">192.168.1.10</td>
                  <td className="p-4 font-mono">00:1A:2B:3C:4D:5E</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Can change?</td>
                  <td className="p-4">
                    Yes, depending on configuration
                  </td>
                  <td className="p-4">
                    Hardware addresses may be overridden or randomized
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Used by</td>
                  <td className="p-4">Routers and IP systems</td>
                  <td className="p-4">Local network interfaces and switches</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4 leading-8 text-slate-700">
            For example, when your laptop sends traffic to a remote website,
            the IP destination can remain the website&apos;s address as the
            packet travels across networks. The link-layer frame is rebuilt
            for each network hop, using the appropriate local link addresses.
          </p>
        </section>

        {/* Public vs private */}
        <section id="public-private" className="mt-12 scroll-mt-8">
          <h2 className="text-2xl font-bold text-slate-950">
            Public vs. Private IP Addresses
          </h2>

          <p className="mt-4 leading-8 text-slate-700">
            Public and private IPv4 addresses serve different roles. Private
            IPv4 ranges are intended for internal networks and are not routed
            across the public internet. Public addresses are globally
            routable, subject to routing and network policies.
          </p>

          <h3 className="mt-6 text-xl font-bold text-slate-900">
            Private IPv4 ranges
          </h3>

          <div className="mt-4 overflow-x-auto rounded-xl border border-slate-200 bg-white">
            <table className="w-full min-w-[480px] text-left text-sm">
              <thead className="bg-blue-50">
                <tr>
                  <th className="p-4 font-semibold">Private range</th>
                  <th className="p-4 font-semibold">CIDR</th>
                  <th className="p-4 font-semibold">Typical use</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="p-4 font-mono">10.0.0.0–10.255.255.255</td>
                  <td className="p-4 font-mono">10.0.0.0/8</td>
                  <td className="p-4">Large internal networks</td>
                </tr>
                <tr>
                  <td className="p-4 font-mono">172.16.0.0–172.31.255.255</td>
                  <td className="p-4 font-mono">172.16.0.0/12</td>
                  <td className="p-4">Business and private networks</td>
                </tr>
                <tr>
                  <td className="p-4 font-mono">192.168.0.0–192.168.255.255</td>
                  <td className="p-4 font-mono">192.168.0.0/16</td>
                  <td className="p-4">Home and small-office networks</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4 leading-8 text-slate-700">
            A home router often uses a private address on its local network
            interface and a separate ISP-assigned address on its internet
            interface. Network address translation (NAT) commonly allows
            multiple private IPv4 devices to share an external IPv4 address.
          </p>

          <div className="mt-5 rounded-xl border border-amber-200 bg-amber-50 p-5">
            <h3 className="font-bold text-amber-950">
              Important: Private does not automatically mean secure
            </h3>
            <p className="mt-2 leading-7 text-amber-900">
              Private addressing does not replace firewalls, access controls,
              updates, or secure configuration. Devices on the same local
              network can still pose risks to one another.
            </p>
          </div>
        </section>

        {/* Static vs dynamic */}
        <section id="static-dynamic" className="mt-12 scroll-mt-8">
          <h2 className="text-2xl font-bold text-slate-950">
            Static vs. Dynamic IP Addresses
          </h2>

          <p className="mt-4 leading-8 text-slate-700">
            IP addresses can be configured manually or assigned
            automatically. On IPv4 networks, DHCP is commonly used to provide
            devices with addresses and other network configuration details.
          </p>

          <div className="mt-5 grid gap-5 md:grid-cols-2">
            <article className="rounded-xl border border-slate-200 bg-white p-6">
              <h3 className="text-xl font-bold text-slate-900">
                Static IP Address
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                A static address is configured to remain consistent. It may
                be manually configured or maintained through a DHCP
                reservation.
              </p>
              <p className="mt-4 text-sm font-semibold text-blue-700">
                Often useful for
              </p>
              <ul className="mt-2 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-600">
                <li>Servers and network infrastructure</li>
                <li>Devices that need predictable addressing</li>
                <li>Specific firewall and monitoring configurations</li>
              </ul>
            </article>

            <article className="rounded-xl border border-slate-200 bg-white p-6">
              <h3 className="text-xl font-bold text-slate-900">
                Dynamic IP Address
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                A dynamic address is assigned automatically, commonly through
                DHCP. It can change when a lease expires or the network
                configuration changes.
              </p>
              <p className="mt-4 text-sm font-semibold text-blue-700">
                Often useful for
              </p>
              <ul className="mt-2 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-600">
                <li>Laptops, phones, and everyday client devices</li>
                <li>Networks with many devices joining and leaving</li>
                <li>Simplifying routine address management</li>
              </ul>
            </article>
          </div>

          <p className="mt-4 leading-8 text-slate-700">
            Dynamic does not necessarily mean the address changes every day,
            and static does not guarantee that an address can never change.
            Actual behavior depends on the administrator, provider, and
            configuration.
          </p>
        </section>
 <AdSlot />
        {/* Special addresses */}
        <section id="special-addresses" className="mt-12 scroll-mt-8">
          <h2 className="text-2xl font-bold text-slate-950">
            Loopback, APIPA, and Other Special IPv4 Addresses
          </h2>

          <p className="mt-4 leading-8 text-slate-700">
            Some IPv4 ranges have special purposes. Recognizing them helps
            when troubleshooting networks and interpreting security logs.
          </p>

          <div className="mt-5 space-y-4">
            <article className="rounded-xl border border-slate-200 bg-white p-5">
              <h3 className="font-bold text-slate-900">
                1. Loopback: 127.0.0.1
              </h3>
              <p className="mt-2 leading-7 text-slate-600">
                The 127.0.0.0/8 range is reserved for loopback. The address
                127.0.0.1 is commonly called localhost and is used to test
                services on the same computer without sending traffic to a
                remote network.
              </p>
            </article>

            <article className="rounded-xl border border-slate-200 bg-white p-5">
              <h3 className="font-bold text-slate-900">
                2. APIPA / IPv4 link-local: 169.254.0.0/16
              </h3>
              <p className="mt-2 leading-7 text-slate-600">
                A Windows device may self-assign a link-local IPv4 address
                when DHCP is unavailable and no other address configuration
                takes precedence. This can help with communication on the
                same link, but it usually does not provide ordinary internet
                connectivity through the failed DHCP configuration.
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                If you see a 169.254.x.x address unexpectedly, check the
                network connection, DHCP server or router, and adapter
                configuration.
              </p>
            </article>

            <article className="rounded-xl border border-slate-200 bg-white p-5">
              <h3 className="font-bold text-slate-900">
                3. Unspecified address: 0.0.0.0
              </h3>
              <p className="mt-2 leading-7 text-slate-600">
                Depending on context, 0.0.0.0 can represent an unspecified
                IPv4 address or be used in routing and service-binding
                configurations. It is not an ordinary address for reaching a
                remote host.
              </p>
            </article>

            <article className="rounded-xl border border-slate-200 bg-white p-5">
              <h3 className="font-bold text-slate-900">
                4. Limited broadcast: 255.255.255.255
              </h3>
              <p className="mt-2 leading-7 text-slate-600">
                This is the IPv4 limited broadcast address, used to reach
                eligible hosts on the local network segment. Routers do not
                forward this limited broadcast as ordinary traffic to remote
                networks.
              </p>
            </article>
          </div>
        </section>

        {/* Find IP on Windows */}
        <section id="find-ip" className="mt-12 scroll-mt-8">
          <h2 className="text-2xl font-bold text-slate-950">
            How to Find Your IP Address on Windows
          </h2>

          <p className="mt-4 leading-8 text-slate-700">
            You can check the addresses configured on your Windows network
            adapters using Command Prompt or Windows Settings.
          </p>

          <h3 className="mt-6 text-xl font-bold text-slate-900">
            Method 1: Use Command Prompt
          </h3>

          <ol className="mt-4 list-decimal space-y-3 pl-6 leading-7 text-slate-700">
            <li>Press Windows + R to open the Run dialog.</li>
            <li>Type <code className="rounded bg-slate-200 px-2 py-1">cmd</code> and press Enter.</li>
            <li>Run the following command:</li>
            
<div className="mt-4 overflow-x-auto rounded-xl bg-slate-950 p-5 text-white">
  <code className="font-mono text-sm">ipconfig</code>
  <p className="mt-2 text-xs text-slate-400">
    Run this command in Windows Command Prompt to view your IP configuration.
  </p>
</div>

          </ol>

          

          <p className="mt-4 leading-8 text-slate-700">
            Find the active Wi-Fi or Ethernet adapter. Look for the IPv4
            Address, Subnet Mask, and Default Gateway fields. The IPv4 address
            shown here is usually the address configured on your computer&apos;s
            local network interface.
          </p>

          <h3 className="mt-7 text-xl font-bold text-slate-900">
            Method 2: Use Windows Settings
          </h3>

          <ol className="mt-4 list-decimal space-y-3 pl-6 leading-7 text-slate-700">
            <li>Open Settings.</li>
            <li>Select Network &amp; internet.</li>
            <li>Choose Wi-Fi or Ethernet, depending on your connection.</li>
            <li>Open the connected network&apos;s properties to view its IP details.</li>
          </ol>

          <div className="mt-6 rounded-xl border border-blue-100 bg-blue-50 p-5">
            <h3 className="font-bold text-slate-900">
              Local IP vs. public IP
            </h3>
            <p className="mt-2 leading-7 text-slate-700">
              The address shown by ipconfig is normally your local interface
              address. It may differ from the public address seen by a website
              because your router or provider may use NAT. VPNs and proxy
              services can also affect which public address a service sees.
            </p>
          </div>
        </section>

        {/* Cybersecurity relevance */}
        <section id="cybersecurity" className="mt-12 scroll-mt-8">
          <h2 className="text-2xl font-bold text-slate-950">
            Why IP Address Knowledge Matters in Cybersecurity
          </h2>

          <p className="mt-4 leading-8 text-slate-700">
            Network defenders frequently examine IP addresses when reviewing
            firewall logs, investigating unusual connections, monitoring
            servers, or troubleshooting network incidents.
          </p>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {[
              {
                title: "Traffic analysis",
                description:
                  "Distinguish source and destination addresses when examining packet captures and connection logs.",
              },
              {
                title: "Firewall rules",
                description:
                  "Understand which IP addresses or CIDR ranges a rule permits or blocks.",
              },
              {
                title: "Network troubleshooting",
                description:
                  "Check whether an interface has a suitable address, subnet mask, and default gateway.",
              },
              {
                title: "Incident investigation",
                description:
                  "Correlate IP addresses with timestamps, ports, DNS records, device logs, and other evidence.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-xl border border-slate-200 bg-white p-5"
              >
                <h3 className="font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2 leading-7 text-slate-600">
                  {item.description}
                </p>
              </article>
            ))}
          </div>

          <p className="mt-5 leading-8 text-slate-700">
            An IP address alone does not prove who used a device or whether
            activity was malicious. Addresses may be shared, reassigned, or
            obscured by NAT, VPNs, or proxies. Defenders must evaluate
            supporting evidence and context.
          </p>
        </section>

        {/* Next learning steps */}
        <section className="mt-12 rounded-2xl border border-blue-100 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-slate-950">
            What Should You Learn Next?
          </h2>

          <p className="mt-3 leading-7 text-slate-600">
            Once you understand individual IP addresses, the next step is to
            learn how addresses are grouped into networks and how IPv4 differs
            from IPv6.
          </p>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <Link
              href="/networking/ip-addressing/subnetting"
              className="rounded-xl border border-slate-200 p-5 transition hover:border-blue-300 hover:bg-blue-50"
            >
              <h3 className="font-bold text-blue-800">
                Subnetting Explained →
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Learn subnet masks, CIDR prefixes, network addresses, and host
                ranges.
              </p>
            </Link>

            <Link
              href="/networking/ip-addressing/ipv4-and-ipv6"
              className="rounded-xl border border-slate-200 p-5 transition hover:border-blue-300 hover:bg-blue-50"
            >
              <h3 className="font-bold text-blue-800">
                IPv4 and IPv6 →
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Compare the two IP versions and understand their addressing
                formats.
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
                <h3 className="font-bold text-slate-900">
                  {faq.question}
                </h3>
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
        description="Move from IP address fundamentals to subnet calculations and IPv4/IPv6 networking. Build each concept step by step."
        links={[
          {
            label: "IP Addressing Overview",
            href: "/networking/ip-addressing",
          },
          {
            label: "Learn Subnetting",
            href: "/networking/ip-addressing/subnetting",
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
