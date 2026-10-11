
import Link from "next/link";
import RelatedTopics from "../../components/ContinueReading";
import AdSlot from "../../components/AdSlot";

export const metadata = {
  title: "Computer Networking: Types, Basics, Tools and Security",
  description:
    "Learn computer networking, network types, topology, IP addressing, Wi-Fi, routers, protocols, troubleshooting, and network security with practical guides.",
  alternates: {
    canonical: "/networking",
  },
};

const categories = [
  {
    number: "01",
    title: "Networking Fundamentals",
    description:
      "Start with the foundations of computer networking. Understand how networks work, how devices communicate, and how network structures differ.",
    topics: [
      "Types of Computer Networks",
      "Network Topology Types",
      "Computer Network Architecture",
    ],
    href: "/networking/fundamentals",
    icon: "01",
  },
  {
    number: "02",
    title: "Wi-Fi and Routers",
    description:
      "Learn how wireless networks operate, how routers and access points work, and how to investigate common internet connection problems.",
    topics: [
      "Wi-Fi Connected but No Internet",
      "Router vs Modem",
      "Wireless Access Points",
    ],
    href: "/networking/wifi-and-routers",
    icon: "02",
  },
  {
    number: "03",
    title: "IP Addressing and Subnetting",
    description:
      "Explore how devices are addressed on networks. Learn about IP addresses, subnet masks, IPv4, IPv6, and dividing networks into subnets.",
    topics: [
      "Subnetting Explained",
      "IPv4 vs IPv6",
      "Private vs Public IP Addresses",
    ],
    href: "/networking/ip-addressing",
    icon: "03",
  },
  {
    number: "04",
    title: "Network Security",
    description:
      "Discover defensive networking concepts, including firewalls, wireless security, intrusion detection, intrusion prevention, and traffic monitoring.",
    topics: [
      "Intrusion Detection Systems",
      "Intrusion Prevention Systems",
      "Wireless Network Security",
    ],
    href: "/networking/network-security",
    icon: "04",
  },
  {
    number: "05",
    title: "Networking Tools",
    description:
      "Understand the tools used to diagnose connectivity, inspect network traffic, discover authorized hosts, and investigate network problems.",
    topics: [
      "Nmap for Beginners",
      "Wireshark Tutorial",
      "Ping and Traceroute",
    ],
    href: "/networking/network-tools",
    icon: "05",
  },
  {
    number: "06",
    title: "Network Devices",
    description:
      "Learn the roles of routers, switches, modems, firewalls, and wireless access points, and understand how these devices work together.",
    topics: [
      "What Is a Router?",
      "What Is a Network Switch?",
      "What Is a Firewall?",
    ],
    href: "/networking/network-devices",
    icon: "06",
  },
  {
    number: "07",
    title: "Protocols and Architecture",
    description:
      "Understand the rules and models that enable communication across networks, from TCP/IP and DNS to DHCP, HTTP, and the OSI model.",
    topics: [
      "Common Network Protocols",
      "The OSI Model Explained",
      "TCP vs UDP",
    ],
    href: "/networking/protocols-and-architecture",
    icon: "07",
  },
];

const learningSteps = [
  {
    number: "01",
    title: "Understand the basics",
    description:
      "Learn what a computer network is, why networks are used, and how devices exchange information.",
  },
  {
    number: "02",
    title: "Learn addressing and communication",
    description:
      "Study IP addresses, subnetting, network protocols, and the way data travels between devices.",
  },
  {
    number: "03",
    title: "Practise troubleshooting",
    description:
      "Build practical skills by investigating connectivity problems and learning to interpret diagnostic results.",
  },
  {
    number: "04",
    title: "Explore network defense",
    description:
      "Study secure configurations, traffic monitoring, intrusion detection, and authorized security testing.",
  },
];

const popularGuides = [
  {
    title: "Types of Computer Networks",
    description:
      "Compare LAN, WAN, MAN, PAN, and other network types, including their characteristics and common uses.",
    href: "/networking/fundamentals/network-types",
    category: "Fundamentals",
  },
  {
    title: "Network Topology Types",
    description:
      "Explore star, bus, ring, mesh, and hybrid network topologies and their practical differences.",
    href: "/networking/fundamentals/network-topology",
    category: "Fundamentals",
  },
  {
    title: "Subnetting Explained",
    description:
      "Learn how subnet masks and CIDR notation help divide IP address ranges into smaller networks.",
    href: "/networking/ip-addressing/subnetting",
    category: "IP Addressing",
  },
  {
    title: "Wi-Fi Connected but No Internet",
    description:
      "Understand common reasons a device connects to Wi-Fi without reaching the internet and how to troubleshoot safely.",
    href: "/networking/wifi-and-routers/wifi-troubleshooting",
    category: "Troubleshooting",
  },
  {
    title: "Intrusion Detection Systems",
    description:
      "Learn how IDS technologies examine activity and identify indicators of potentially suspicious network behavior.",
    href: "/networking/network-security/intrusion-detection",
    category: "Security",
  },
  {
    title: "Nmap for Beginners",
    description:
      "Understand network discovery and basic scanning concepts for systems you own or are authorized to assess.",
    href: "/networking/network-tools/nmap",
    category: "Tools",
  },
];

export default function NetworkingPage() {
  return (
    <main className="min-w-0 overflow-hidden bg-white text-slate-900">
      {/* Hero */}
      <section className="relative isolate overflow-hidden border-b border-slate-100 bg-gradient-to-br from-blue-50 via-white to-sky-50">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-14 sm:px-6 sm:py-20 lg:grid-cols-2 lg:gap-14 lg:px-8 lg:py-24">
          <div>
            <p className="inline-flex items-center rounded-full border border-blue-100 bg-white px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-700 sm:text-sm">
              Networking Knowledge Hub
            </p>

            <h1 className="mt-6 max-w-3xl text-3xl font-bold leading-tight tracking-tight text-slate-950 sm:text-4xl md:text-5xl lg:text-6xl">
              Computer Networking: From the Basics to Network Security
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              Learn how computer networks work, how devices communicate,
              how to troubleshoot Wi-Fi and connectivity issues, and how
              network professionals monitor and defend networks.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="/networking/fundamentals"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-blue-600 px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-blue-700 sm:w-auto"
              >
                Start with the fundamentals
                <span className="ml-2" aria-hidden="true">
                  →
                </span>
              </Link>

              <Link
                href="/networking/network-security"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-xl border border-slate-300 bg-white px-5 py-3 text-center text-sm font-semibold text-slate-700 transition hover:border-blue-300 hover:text-blue-700 sm:w-auto"
              >
                Explore network security
              </Link>
            </div>
          </div>

          <div className="mx-auto w-full max-w-lg lg:max-w-none">
            <div className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm sm:rounded-3xl sm:p-7">
              <div className="flex items-center justify-between gap-3 border-b border-slate-100 pb-4">
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    How a Network Connects
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    A simplified network overview
                  </p>
                </div>
                <span className="rounded-lg bg-blue-50 px-3 py-2 text-xs font-semibold text-blue-700">
                  NETWORK
                </span>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-4">
                <div className="rounded-xl border border-slate-200 p-3 text-center sm:p-4">
                  <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      aria-hidden="true"
                    >
                      <rect x="3" y="4" width="18" height="13" rx="2" />
                      <path d="M8 21h8M12 17v4" />
                    </svg>
                  </span>
                  <p className="mt-3 text-sm font-semibold">Devices</p>
                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    Computers and phones
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200 p-3 text-center sm:p-4">
                  <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50 text-sky-700">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      aria-hidden="true"
                    >
                      <rect x="3" y="10" width="18" height="10" rx="2" />
                      <path d="M7 14h.01M11 14h.01M15 14h.01M7 6a7 7 0 0 1 10 0M9.5 8.5a3.5 3.5 0 0 1 5 0" />
                    </svg>
                  </span>
                  <p className="mt-3 text-sm font-semibold">Network Devices</p>
                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    Routers and switches
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200 p-3 text-center sm:p-4">
                  <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-700">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="9" />
                      <path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" />
                    </svg>
                  </span>
                  <p className="mt-3 text-sm font-semibold">Protocols</p>
                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    Rules for communication
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200 p-3 text-center sm:p-4">
                  <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      aria-hidden="true"
                    >
                      <path d="M12 3 20 6v5c0 5-3.4 8-8 10-4.6-2-8-5-8-10V6l8-3Z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </span>
                  <p className="mt-3 text-sm font-semibold">Security</p>
                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    Monitoring and defense
                  </p>
                </div>
              </div>

              <p className="mt-5 text-xs leading-5 text-slate-500">
                These concepts work together to support communication,
                connectivity, and secure network operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-14">
          <article className="min-w-0 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-700">
              Networking Explained
            </p>

            <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
              What Is Computer Networking?
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              Computer networking is the practice of connecting two or more
              computing devices so they can exchange data and share resources.
              These devices may communicate over wired connections, wireless
              links, or a combination of both.
            </p>

            <p className="mt-4 leading-7 text-slate-600">
              Networks support many everyday activities, including browsing
              websites, sending messages, accessing cloud services, sharing
              files, making video calls, and connecting business systems.
              The internet itself is a vast collection of interconnected
              networks.
            </p>

            <p className="mt-4 leading-7 text-slate-600">
              To communicate successfully, devices rely on networking
              hardware, addressing systems, and protocols. Routers help move
              packets between networks, switches connect devices within many
              local networks, and protocols define how information is
              transmitted and interpreted.
            </p>

            <h3 className="mt-8 text-xl font-semibold text-slate-900">
              Why Is Networking Important?
            </h3>

            <p className="mt-3 leading-7 text-slate-600">
              Understanding networking helps people troubleshoot connection
              problems, manage business infrastructure, configure home
              networks, and develop skills for IT support, network
              administration, and cybersecurity.
            </p>

            <ul className="mt-5 space-y-3">
              {[
                "Communication between computers, phones, and servers.",
                "Sharing resources such as files, printers, and applications.",
                "Accessing websites, cloud platforms, and online services.",
                "Monitoring connectivity and investigating technical problems.",
                "Supporting defensive security measures and network visibility.",
              ].map((item) => (
                <li key={item} className="flex gap-3 leading-6 text-slate-600">
                  <span
                    className="mt-0.5 font-bold text-blue-600"
                    aria-hidden="true"
                  >
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <aside className="h-fit rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-6 lg:sticky lg:top-8">
            <h2 className="text-lg font-semibold text-slate-900">
              On This Page
            </h2>

            <nav aria-label="On this page" className="mt-4">
              <ul className="space-y-3 text-sm">
                {[
                  ["What Is Computer Networking?", "#what-is-networking"],
                  ["Networking Categories", "#networking-categories"],
                  ["Popular Guides", "#popular-guides"],
                  ["Learning Path", "#learning-path"],
                  ["Common Questions", "#networking-faq"],
                ].map(([label, href]) => (
                  <li key={href}>
                    <a
                      href={href}
                      className="text-slate-600 transition hover:text-blue-700"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="mt-6 rounded-xl bg-blue-50 p-4">
              <p className="text-sm font-semibold text-blue-900">
                New to networking?
              </p>
              <p className="mt-2 text-sm leading-6 text-blue-800">
                Begin with network types and basic communication concepts
                before moving into subnetting and security.
              </p>
              <Link
                href="/networking/fundamentals"
                className="mt-3 inline-flex font-semibold text-blue-700 hover:text-blue-900"
              >
                Start learning →
              </Link>
            </div>
          </aside>
        </div>
      </section>

      {/* Categories */}
      <AdSlot />
      <section
        id="networking-categories"
        className="scroll-mt-8 border-y border-slate-100 bg-slate-50"
      >
        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-700">
              Explore by Category
            </p>

            <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
              Explore the Main Areas of Networking
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Networking covers several connected disciplines. Choose a
              category to explore its concepts, practical applications, and
              more focused guides.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 sm:gap-5 xl:grid-cols-3">
            {categories.map((category) => (
              <article
                key={category.href}
                className="flex min-w-0 flex-col rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-blue-200 hover:shadow-sm sm:p-6"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-sm font-bold text-blue-700">
                    {category.number}
                  </span>
                  <span className="text-xs font-medium text-slate-400">
                    Topic Guide
                  </span>
                </div>

                <h3 className="mt-5 text-lg font-semibold leading-snug text-slate-900">
                  {category.title}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">
                  {category.description}
                </p>

                <div className="mt-5 border-t border-slate-100 pt-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Topics covered
                  </p>

                  <ul className="mt-3 space-y-2">
                    {category.topics.map((topic) => (
                      <li
                        key={topic}
                        className="flex gap-2 text-sm leading-5 text-slate-600"
                      >
                        <span className="text-blue-600" aria-hidden="true">
                          →
                        </span>
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={category.href}
                    className="mt-5 inline-flex min-h-10 items-center font-semibold text-blue-700 hover:text-blue-900"
                  >
                    Explore category
                    <span className="ml-2" aria-hidden="true">
                      →
                    </span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Guides */}
      <section
        id="popular-guides"
        className="scroll-mt-8 mx-auto max-w-7xl px-5 py-12 sm:px-6 sm:py-16 lg:px-8"
      >
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-700">
              Recommended Reading
            </p>

            <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
              Popular Networking Topics to Explore
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Start with useful foundational concepts and common practical
              questions. These topics can lead you toward more detailed
              networking guides.
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {popularGuides.map((guide) => (
            <article
              key={guide.href}
              className="flex min-w-0 flex-col rounded-2xl border border-slate-200 p-5 transition hover:border-blue-200 hover:shadow-sm sm:p-6"
            >
              <span className="w-fit rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                {guide.category}
              </span>

              <h3 className="mt-4 text-lg font-semibold leading-snug text-slate-900">
                {guide.title}
              </h3>

              <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">
                {guide.description}
              </p>

              <Link
                href={guide.href}
                className="mt-5 inline-flex min-h-10 items-center font-semibold text-blue-700 hover:text-blue-900"
              >
                Read the guide
                <span className="ml-2" aria-hidden="true">
                  →
                </span>
              </Link>
            </article>
          ))}
        </div>

        <p className="mt-5 text-sm leading-6 text-slate-500">
          These links are planned article destinations. Publish the
          corresponding guides before promoting them as available articles.
        </p>
      </section>

      {/* Learning Path */}
      <AdSlot />
      <section
        id="learning-path"
        className="scroll-mt-8 border-y border-slate-100 bg-slate-50"
      >
        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-700">
              A Practical Roadmap
            </p>

            <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
              How to Learn Computer Networking Step by Step
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              A structured approach makes networking easier to understand.
              Build foundational knowledge first, then practise and gradually
              move toward more advanced topics.
            </p>
          </div>

          <ol className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {learningSteps.map((step) => (
              <li
                key={step.number}
                className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6"
              >
                <span className="text-sm font-bold tracking-wider text-blue-700">
                  STEP {step.number}
                </span>

                <h3 className="mt-4 text-lg font-semibold text-slate-900">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section
        id="networking-faq"
        className="scroll-mt-8 mx-auto max-w-4xl px-5 py-12 sm:px-6 sm:py-16"
      >
        <p className="text-sm font-semibold uppercase tracking-widest text-blue-700">
          Frequently Asked Questions
        </p>

        <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
          Common Questions About Networking
        </h2>

        <div className="mt-7 divide-y divide-slate-200 border-y border-slate-200">
          <article className="py-5">
            <h3 className="text-base font-semibold text-slate-900 sm:text-lg">
              What are the main types of computer networks?
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
              Common categories include Personal Area Networks (PANs), Local
              Area Networks (LANs), Metropolitan Area Networks (MANs), and
              Wide Area Networks (WANs). They differ in their typical
              coverage, purpose, and deployment.
            </p>
          </article>

          <article className="py-5">
            <h3 className="text-base font-semibold text-slate-900 sm:text-lg">
              What should a beginner learn first?
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
              Start with basic network concepts, common network devices,
              network types, and communication protocols. Then study IP
              addressing, subnetting, and basic troubleshooting.
            </p>
          </article>

          <article className="py-5">
            <h3 className="text-base font-semibold text-slate-900 sm:text-lg">
              What is the difference between a router and a switch?
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
              A router forwards packets between different networks. A
              network switch typically connects devices within a local
              network and forwards Ethernet frames based on MAC addresses.
            </p>
          </article>

          <article className="py-5">
            <h3 className="text-base font-semibold text-slate-900 sm:text-lg">
              How does networking relate to cybersecurity?
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
              Network security uses concepts such as traffic analysis,
              access control, firewalls, secure configurations, and intrusion
              detection to help protect networked systems and identify
              suspicious activity.
            </p>
          </article>

          <article className="py-5">
            <h3 className="text-base font-semibold text-slate-900 sm:text-lg">
              Can I practise networking at home?
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
              Yes. You can study your home router settings, inspect your
              device's network configuration, practise connectivity
              diagnostics, and use packet-analysis tools on traffic you are
              authorized to inspect.
            </p>
          </article>
        </div>
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
