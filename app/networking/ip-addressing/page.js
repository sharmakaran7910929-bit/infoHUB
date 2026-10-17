
import Link from "next/link";
import RelatedTopics from '../../../components/ContinueReading'
import AdSlot from '../../../components/AdSlot'
export const metadata = {
  title: "IP Addressing Explaine | IPv4, IPv6 & Subnetting",
  description:
    "Learn IP addressing from the basics, including IPv4 and IPv6, public and private IP addresses, subnetting, CIDR notation, and network communication.",
  alternates: {
    canonical: "/networking/ip-addressing",
  },
 
};

const topics = [
  {
    title: "IP Address Basics",
    description:
      "Understand what an IP address is, why networks need addresses, and how devices communicate using public and private IP addresses.",
    href: "/networking/ip-addressing/ip-address-basics",
    level: "Beginner",
    number: "01",
  },
  {
    title: "Subnetting Explained",
    description:
      "Learn subnet masks, CIDR notation, network IDs, host ranges, broadcast addresses, and how to calculate IPv4 subnets.",
    href: "/networking/ip-addressing/subnetting",
    level: "Beginner to Intermediate",
    number: "02",
  },
  {
    title: "IPv4 to IPv6",
    description:
      "Compare IPv4 and IPv6 addressing, understand hexadecimal notation, and explore why networks are transitioning to IPv6.",
    href: "/networking/ip-addressing/ipv4-and-ipv6",
    level: "Beginner",
    number: "03",
  },
];

const faqs = [
  {
    question: "What is IP addressing?",
    answer:
      "IP addressing is the system used to assign logical addresses to network interfaces so that devices can identify communication destinations and exchange data using the Internet Protocol.",
  },
  {
    question: "What are IPv4 and IPv6?",
    answer:
      "IPv4 uses 32-bit addresses, commonly written as four decimal numbers separated by dots. IPv6 uses 128-bit addresses, written in hexadecimal groups separated by colons.",
  },
  {
    question: "What is subnetting?",
    answer:
      "Subnetting divides an IP network into smaller logical networks. It helps organize devices, manage address allocation, and control network boundaries.",
  },
  {
    question: "What is the difference between a public and a private IP address?",
    answer:
      "Public IP addresses are globally routable on the internet. Private IPv4 addresses are reserved for use within private networks and typically access the internet through a router using network address translation.",
  },
  {
    question: "Why is IP addressing important in cybersecurity?",
    answer:
      "IP addresses help security professionals understand network traffic, investigate connections, configure firewall rules, identify communication paths, and analyze suspicious activity. An IP address alone does not reliably identify a person or prove malicious activity.",
  },
];

export default function IPAddressingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: "IP Addressing Explained: IPv4, IPv6 and Subnetting",
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
      "@id": "/networking/ip-addressing",
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
        <section className="mt-6 rounded-2xl border border-blue-100 bg-white p-6 shadow-sm sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-700">
            Networking Fundamentals
          </p>

          <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            IP Addressing: A Complete Beginner&apos;s Guide
          </h1>

          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">
            Every time a device communicates across an IP network, addressing
            helps identify where data should be delivered. IP addressing is a
            fundamental networking concept used in home Wi-Fi, business
            networks, data centers, cloud infrastructure, and cybersecurity.
          </p>

          <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">
            This guide introduces the fundamentals before moving into IPv4,
            IPv6, and subnetting. Whether you are learning computer networking
            or preparing for a network security role, understanding IP
            addressing will help you make sense of how networks operate.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/networking/ip-addressing/ip-address-basics"
              className="inline-flex items-center rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Start with the basics
              <span className="ml-2" aria-hidden="true">
                →
              </span>
            </Link>

            <Link
              href="/networking/ip-addressing/subnetting"
              className="inline-flex items-center rounded-lg border border-blue-200 bg-blue-50 px-5 py-3 font-semibold text-blue-800 transition hover:bg-blue-100"
            >
              Explore subnetting
            </Link>
          </div>
        </section>

        {/* Core concept */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-slate-950">
            What Is IP Addressing?
          </h2>

          <p className="mt-4 leading-8 text-slate-700">
            IP stands for Internet Protocol. An IP address is a logical address
            assigned to a network interface. It helps IP networks deliver
            packets toward their intended destinations. Routers examine
            destination IP addresses to make forwarding decisions.
          </p>

          <p className="mt-4 leading-8 text-slate-700">
            An IP address is not the same as a device&apos;s physical MAC
            address. IP addressing supports communication across networks,
            while MAC addresses are used for delivery on local network links
            such as Ethernet and Wi-Fi.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-slate-200 bg-white p-5">
              <h3 className="font-bold text-slate-900">
                Example IPv4 address
              </h3>
              <p className="mt-3 font-mono text-2xl font-bold text-blue-700">
                192.168.1.10
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                A familiar private IPv4 address commonly used in local
                networks.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-5">
              <h3 className="font-bold text-slate-900">
                Example IPv6 address
              </h3>
              <p className="mt-3 break-all font-mono text-xl font-bold text-blue-700">
                2001:db8::1
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                An example using the documentation-only IPv6 prefix 2001:db8::/32.
              </p>
            </div>
          </div>
        </section>
<AdSlot />
        {/* Main topics */}
        <section className="mt-12">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold text-slate-950">
              Explore IP Addressing Topics
            </h2>
            <p className="mt-3 leading-7 text-slate-600">
              Follow these guides in order to build your knowledge from
              foundational concepts to practical network calculations.
            </p>
          </div>

          <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {topics.map((topic) => (
              <article
                key={topic.href}
                className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-6 transition hover:border-blue-300 hover:shadow-md"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-blue-700">
                    GUIDE {topic.number}
                  </span>
                  <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-800">
                    {topic.level}
                  </span>
                </div>

                <h3 className="mt-4 text-xl font-bold text-slate-900">
                  {topic.title}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">
                  {topic.description}
                </p>

                <Link
                  href={topic.href}
                  className="mt-5 inline-flex items-center font-semibold text-blue-700 hover:text-blue-900"
                >
                  Read the guide
                  <span className="ml-2" aria-hidden="true">
                    →
                  </span>
                </Link>
              </article>
            ))}
          </div>
        </section>

        {/* IPv4 vs IPv6 */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-slate-950">
            IPv4 vs. IPv6 at a Glance
          </h2>

          <p className="mt-3 leading-7 text-slate-600">
            Both protocols provide IP addressing, but they use different
            address lengths and notation.
          </p>

          <div className="mt-5 overflow-x-auto rounded-xl border border-slate-200 bg-white">
            <table className="w-full min-w-[520px] border-collapse text-left text-sm">
              <thead className="bg-blue-50 text-slate-900">
                <tr>
                  <th className="p-4 font-semibold">Feature</th>
                  <th className="p-4 font-semibold">IPv4</th>
                  <th className="p-4 font-semibold">IPv6</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="p-4 font-medium">Address length</td>
                  <td className="p-4">32 bits</td>
                  <td className="p-4">128 bits</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Notation</td>
                  <td className="p-4">Decimal, separated by dots</td>
                  <td className="p-4">Hexadecimal, separated by colons</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Example</td>
                  <td className="p-4 font-mono">192.168.1.10</td>
                  <td className="p-4 font-mono">2001:db8::1</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Address capacity</td>
                  <td className="p-4">About 4.3 billion bit patterns</td>
                  <td className="p-4">About 3.4 × 10³⁸ bit patterns</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Broadcasting</td>
                  <td className="p-4">Supports broadcast</td>
                  <td className="p-4">
                    Uses multicast and anycast; no broadcast
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4 leading-7 text-slate-600">
            IPv6 provides a vastly larger address space. IPv4 and IPv6 can
            operate together using approaches such as dual-stack networking.
            IPv6 is not simply an expanded IPv4 address; the protocols have
            important technical differences.
          </p>

          <Link
            href="/networking/ip-addressing/ipv4-and-ipv6"
            className="mt-3 inline-flex font-semibold text-blue-700 hover:text-blue-900"
          >
            Learn more about IPv4 and IPv6 →
          </Link>
        </section>

        {/* Learning path */}
        <section className="mt-12 rounded-2xl border border-blue-100 bg-blue-50 p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-slate-950">
            Why Learn IP Addressing for Network Security?
          </h2>

          <p className="mt-4 leading-8 text-slate-700">
            Network defenders use addressing knowledge to interpret traffic
            captures, understand firewall rules, investigate suspicious
            connections, identify network boundaries, and troubleshoot
            connectivity problems.
          </p>

          <ul className="mt-5 space-y-3 text-slate-700">
            <li>
              <span className="mr-2 font-bold text-blue-700">✓</span>
              Understand source and destination IP addresses in packet captures.
            </li>
            <li>
              <span className="mr-2 font-bold text-blue-700">✓</span>
              Recognize private address ranges and public-facing systems.
            </li>
            <li>
              <span className="mr-2 font-bold text-blue-700">✓</span>
              Use subnet masks and CIDR ranges to interpret network boundaries.
            </li>
            <li>
              <span className="mr-2 font-bold text-blue-700">✓</span>
              Build a foundation for firewalls, routing, and network monitoring.
            </li>
          </ul>

          <p className="mt-4 text-sm leading-6 text-slate-600">
            Remember: IP addresses can be shared, dynamically assigned, or
            changed. Investigations should use additional evidence rather than
            treating an address alone as proof of a person&apos;s identity or
            malicious intent.
          </p>
        </section>
<AdSlot />
        {/* FAQs */}
        <section className="mt-12">
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

        {/* Final CTA */}
       {/* Related Topics */}
<RelatedTopics
  eyebrow="IP Addressing Learning Path"
  title="Continue Learning About IP Addressing"
  description="Build your networking knowledge step by step. Start with IP address fundamentals, practise subnetting, and understand the transition from IPv4 to IPv6."
  links={[
    {
      label: "IP Address Basics",
      href: "/networking/ip-addressing/ip-address-basics",
    },
    {
      label: "Learn Subnetting",
      href: "/networking/ip-addressing/subnetting",
    },
    {
      label: "IPv4 to IPv6",
      href: "/networking/ip-addressing/ipv4-and-ipv6",
    },
  ]}
/>
      </div>
    </main>
  );
}
