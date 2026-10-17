import Link from "next/link";
import RelatedTopics from "../../../../components/ContinueReading";
import AdSlot from "../../../../components/AdSlot";

const pageUrl =
  "https://pricetag.co.in/networking/ip-addressing/ipv4-and-ipv6";

export const metadata = {
  title: "IPv4 vs IPv6: Differences, Examples and Uses",
  description:
    "Learn IPv4 and IPv6 addresses, their formats, key differences, examples, advantages, and cybersecurity considerations.",
  alternates: {
    canonical: "/networking/ip-addressing/ipv4-and-ipv6",
  },
  
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "TechArticle",
  headline: "IPv4 vs IPv6: Differences, Examples and Uses",
  description:
    "A guide to IPv4 and IPv6 address formats, differences, and network security.",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": pageUrl,
  },
  author: {
    "@type": "Organization",
    name: "Info Hub",
  },
  publisher: {
    "@type": "Organization",
    name: "Info Hub",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the main difference between IPv4 and IPv6?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "IPv4 uses 32-bit addresses written as four decimal numbers separated by dots. IPv6 uses 128-bit addresses written in hexadecimal groups separated by colons.",
      },
    },
    {
      "@type": "Question",
      name: "Why was IPv6 introduced?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "IPv6 was developed mainly to provide a much larger address space as the number of internet-connected devices increased.",
      },
    },
    {
      "@type": "Question",
      name: "Can IPv4 and IPv6 work together?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Dual-stack networks can run IPv4 and IPv6 together. Tunneling and translation are other transition techniques.",
      },
    },
    {
      "@type": "Question",
      name: "Is IPv6 automatically more secure than IPv4?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Both protocols require appropriate firewall rules, secure configuration, monitoring, and access controls.",
      },
    },
    {
      "@type": "Question",
      name: "How can I check my IPv4 and IPv6 addresses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "On Windows, open Command Prompt and run ipconfig. Check the address fields under your active network adapter.",
      },
    },
  ],
};

const differences = [
  ["Address size", "32 bits", "128 bits"],
  ["Format", "Decimal numbers", "Hexadecimal groups"],
  ["Example", "192.168.1.10", "2001:db8::10"],
  ["Address space", "About 4.3 billion possible addresses", "About 3.4 × 10³⁸ possible addresses"],
  ["Notation", "Four octets separated by dots", "Eight groups separated by colons"],
  ["Broadcast", "Supports broadcast", "Uses multicast and anycast instead of broadcast"],
  ["Configuration", "Manual, DHCP, and other methods", "Manual, SLAAC, DHCPv6, and other methods"],
  ["Base header size", "Variable, normally 20–60 bytes", "Fixed at 40 bytes"],
  ["Neighbor resolution", "ARP on Ethernet networks", "Neighbor Discovery using ICMPv6"],
];

export default function IPv4AndIPv6Page() {
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
            Networking / IP Addressing
          </p>

          <h1 className="text-3xl font-bold text-slate-900">
            IPv4 and IPv6: Differences, Examples and Uses
          </h1>

          <p className="mt-4 leading-7 text-slate-700">
            IPv4 and IPv6 are two versions of the Internet Protocol. They
            provide addresses that help devices communicate across local
            networks and the internet. This guide explains their formats,
            differences, uses, and security considerations.
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
            <li><a href="#introduction" className="text-blue-700 hover:underline">Introduction</a></li>
            <li><a href="#ipv4" className="text-blue-700 hover:underline">What is IPv4?</a></li>
            <li><a href="#ipv6" className="text-blue-700 hover:underline">What is IPv6?</a></li>
            <li><a href="#differences" className="text-blue-700 hover:underline">Key differences</a></li>
            <li><a href="#coexistence" className="text-blue-700 hover:underline">How they work together</a></li>
            <li><a href="#security" className="text-blue-700 hover:underline">Cybersecurity</a></li>
            <li><a href="#find-address" className="text-blue-700 hover:underline">Check your IP address</a></li>
            <li><a href="#faqs" className="text-blue-700 hover:underline">FAQs</a></li>
          </ul>
        </nav>

        <article className="space-y-8 leading-7">
          <section id="introduction" className="scroll-mt-6">
            <h2 className="mb-3 text-2xl font-semibold text-slate-900">
              What are IPv4 and IPv6?
            </h2>

            <p>
              Internet Protocol (IP) helps route packets between devices and
              networks. IPv4 is the older version and remains widely used.
              IPv6 was developed mainly to provide a much larger address space
              for the growing number of connected devices.
            </p>

            <p className="mt-3">
              Both protocols perform network-layer addressing, but they use
              different address formats and packet headers.
            </p>

            <div className="mt-4 space-y-3 rounded-lg border border-slate-200 p-4">
              <p>
                <span className="font-semibold">IPv4 example:</span>{" "}
                <code>192.168.1.10</code>
              </p>
              <p>
                <span className="font-semibold">IPv6 example:</span>{" "}
                <code>2001:db8::10</code>
              </p>
            </div>
          </section>

          <AdSlot />

          <section id="ipv4" className="scroll-mt-6">
            <h2 className="mb-3 text-2xl font-semibold text-slate-900">
              What is IPv4?
            </h2>

            <p>
              IPv4 stands for Internet Protocol version 4. It uses 32-bit
              addresses, allowing 2³² possible bit patterns, or approximately
              4.3 billion addresses before accounting for reserved ranges and
              allocation rules.
            </p>

            <h3 className="mb-2 mt-4 text-lg font-semibold text-slate-900">
              IPv4 address format
            </h3>

            <p>
              An IPv4 address has four decimal numbers called octets. Each
              octet represents eight bits and ranges from 0 to 255. Dots
              separate the octets.
            </p>

            <div className="my-4 rounded-lg bg-slate-50 p-4">
              <p className="font-mono text-lg">192.168.1.10</p>
              <p className="mt-2 text-sm text-slate-600">
                Four octets × eight bits = 32 bits.
              </p>
            </div>

            <h3 className="mb-2 mt-4 text-lg font-semibold text-slate-900">
              Where is IPv4 used?
            </h3>

            <ul className="list-inside list-disc space-y-2">
              <li>Home routers and Wi-Fi networks.</li>
              <li>Office computers, printers, and servers.</li>
              <li>Web servers and internet services.</li>
              <li>Private networks that use Network Address Translation (NAT).</li>
            </ul>

            <p className="mt-3">
              Addresses such as <code>192.168.1.10</code> are commonly used
              inside private networks. An IP address alone does not determine
              whether a device is secure.
            </p>
          </section>

          <section id="ipv6" className="scroll-mt-6">
            <h2 className="mb-3 text-2xl font-semibold text-slate-900">
              What is IPv6?
            </h2>

            <p>
              IPv6 stands for Internet Protocol version 6. It uses 128-bit
              addresses, providing 2¹²⁸ possible address combinations. Its
              larger address space helps support the continued growth of
              internet-connected devices.
            </p>

            <h3 className="mb-2 mt-4 text-lg font-semibold text-slate-900">
              IPv6 address format
            </h3>

            <p>
              IPv6 uses hexadecimal digits from 0 to 9 and A to F. A full
              address contains eight groups separated by colons.
            </p>

            <div className="my-4 rounded-lg bg-slate-50 p-4">
              <p className="break-all font-mono">
                2001:0db8:0000:0000:0000:0000:0000:0010
              </p>

              <p className="my-2">The shortened form is:</p>

              <p className="font-mono">2001:db8::10</p>
            </div>

            <p>
              Leading zeros in a group can be omitted. One consecutive sequence
              of all-zero groups can be replaced with <code>::</code>. This
              double-colon notation can appear only once in an address.
            </p>

            <h3 className="mb-2 mt-4 text-lg font-semibold text-slate-900">
              Common IPv6 address types
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-300">
                    <th className="px-3 py-2">Type</th>
                    <th className="px-3 py-2">Purpose</th>
                    <th className="px-3 py-2">Example</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-200">
                    <td className="px-3 py-2">Global unicast</td>
                    <td className="px-3 py-2">Globally routable addressing</td>
                    <td className="px-3 py-2 font-mono">2001:4860::1</td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <td className="px-3 py-2">Link-local</td>
                    <td className="px-3 py-2">Communication on the local link</td>
                    <td className="px-3 py-2 font-mono">fe80::1</td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <td className="px-3 py-2">Loopback</td>
                    <td className="px-3 py-2">The local device itself</td>
                    <td className="px-3 py-2 font-mono">::1</td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <td className="px-3 py-2">Unique local</td>
                    <td className="px-3 py-2">Private internal networks</td>
                    <td className="px-3 py-2 font-mono">fd12::1</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mt-3 text-sm text-slate-600">
              Note: These are illustrative examples. The range 2001:db8::/32
              is reserved for documentation and should not be used as a real
              public address allocation.
            </p>
          </section>

          <AdSlot />

          <section id="differences" className="scroll-mt-6">
            <h2 className="mb-3 text-2xl font-semibold text-slate-900">
              IPv4 vs IPv6: Key differences
            </h2>

            <p className="mb-4">
              Address size is the main difference, but the protocols also
              differ in header structure, broadcast behavior, and address
              configuration.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-300">
                    <th className="px-3 py-2">Feature</th>
                    <th className="px-3 py-2">IPv4</th>
                    <th className="px-3 py-2">IPv6</th>
                  </tr>
                </thead>
                <tbody>
                  {differences.map(([feature, ipv4, ipv6]) => (
                    <tr key={feature} className="border-b border-slate-200">
                      <td className="px-3 py-2 font-medium">{feature}</td>
                      <td className="px-3 py-2">{ipv4}</td>
                      <td className="px-3 py-2">{ipv6}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section id="coexistence" className="scroll-mt-6">
            <h2 className="mb-3 text-2xl font-semibold text-slate-900">
              Can IPv4 and IPv6 work together?
            </h2>

            <p>
              Yes. Networks can support both protocols while transitioning to
              IPv6. Common approaches include:
            </p>

            <ul className="mt-3 list-inside list-disc space-y-3">
              <li>
                <span className="font-semibold">Dual stack:</span> Devices
                and networks run IPv4 and IPv6 at the same time.
              </li>
              <li>
                <span className="font-semibold">Tunneling:</span> One protocol
                is carried inside another across part of a network.
              </li>
              <li>
                <span className="font-semibold">Translation:</span> Specific
                mechanisms allow IPv4-only and IPv6-only systems to
                communicate across protocol boundaries.
              </li>
            </ul>
          </section>

          <section id="security" className="scroll-mt-6">
            <h2 className="mb-3 text-2xl font-semibold text-slate-900">
              Why IPv4 and IPv6 matter in cybersecurity
            </h2>

            <p>
              Network defenders need to understand both protocols because
              devices and services may use either one. Securing IPv4 while
              overlooking enabled IPv6 can leave network traffic outside the
              intended security controls.
            </p>

            <h3 className="mb-2 mt-4 text-lg font-semibold text-slate-900">
              Security practices
            </h3>

            <ul className="list-inside list-disc space-y-2">
              <li>Configure firewall rules for both protocols where enabled.</li>
              <li>Maintain an inventory of devices and network addresses.</li>
              <li>Monitor traffic and investigate unexpected connections.</li>
              <li>Review IPv6 router advertisements and address configuration.</li>
              <li>Restrict management access and disable unnecessary services.</li>
              <li>Test security controls only on networks you are authorized to assess.</li>
            </ul>

            <p className="mt-3">
              IPv6 is not automatically more secure than IPv4. Both require
              secure configuration, monitoring, patching, and appropriate
              access controls.
            </p>
          </section>

          <AdSlot />

          <section id="find-address" className="scroll-mt-6">
            <h2 className="mb-3 text-2xl font-semibold text-slate-900">
              How to check your IPv4 and IPv6 addresses
            </h2>

            <p>
              On Windows, you can use Command Prompt to inspect the addresses
              configured on your network interfaces.
            </p>

            <ol className="mt-3 list-inside list-decimal space-y-2">
              <li>Press Windows + R.</li>
              <li>Type <code>cmd</code> and press Enter.</li>
              <li>Run this command:</li>
            </ol>

            <pre className="my-4 overflow-x-auto rounded-lg bg-slate-100 p-4 text-sm">
              <code>ipconfig</code>
            </pre>

            <p>
              Look for the IPv4 Address and IPv6 Address fields under your
              active Wi-Fi or Ethernet adapter. Some adapters may display
              several IPv6 addresses.
            </p>

            <p className="mt-3">
              These results show addresses configured on your computer. They
              do not necessarily show every address used by your router or the
              public address seen by websites.
            </p>
          </section>

          <section id="faqs" className="scroll-mt-6">
            <h2 className="mb-4 text-2xl font-semibold text-slate-900">
              Frequently asked questions
            </h2>

            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-slate-900">
                  1. What is the main difference between IPv4 and IPv6?
                </h3>
                <p className="mt-1">
                  IPv4 uses 32-bit addresses with dots between decimal
                  numbers. IPv6 uses 128-bit addresses with colons between
                  hexadecimal groups.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-slate-900">
                  2. Why was IPv6 introduced?
                </h3>
                <p className="mt-1">
                  It provides a much larger address space to support the
                  growing number of connected devices.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-slate-900">
                  3. Can a device have both IPv4 and IPv6 addresses?
                </h3>
                <p className="mt-1">
                  Yes. A device on a dual-stack network can use both protocols.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-slate-900">
                  4. Is IPv6 automatically more secure?
                </h3>
                <p className="mt-1">
                  No. Security depends on correct configuration, firewall
                  policies, monitoring, patching, and access controls.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-slate-900">
                  5. How do I check my IP address on Windows?
                </h3>
                <p className="mt-1">
                  Open Command Prompt, run <code>ipconfig</code>, and check
                  the addresses under your active network adapter.
                </p>
              </div>
            </div>
          </section>

          <section className="border-t border-slate-200 pt-6">
            <RelatedTopics
              eyebrow="Continue reading"
              title="Explore IP addressing"
              description="Continue learning about IP addresses and network design."
              links={[
                {
                  label: "IP Address Basics",
                  href: "/networking/ip-addressing/ip-address-basics",
                },
                {
                  label: "Subnetting Explained",
                  href: "/networking/ip-addressing/subnetting",
                },
                {
                  label: "IP Addressing Overview",
                  href: "/networking/ip-addressing",
                },
                {
                  label: "Networking Fundamentals",
                  href: "/networking",
                },
              ]}
            />
          </section>
        </article>
      </div>
    </main>
  );
}
