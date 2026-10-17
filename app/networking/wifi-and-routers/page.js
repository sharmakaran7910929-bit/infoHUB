
import {
  Wifi,
  Router,
  ShieldCheck,
  Smartphone,
  Network,
  LockKeyhole,
  Radio,
  Settings,
  Search,
  Activity,
  ArrowRight,
  CheckCircle2,
  Globe,
} from "lucide-react";

import RelatedTopics from "../../../components/ContinueReading";
import AdSlot from "../../../components/AdSlot";

export const metadata = {
  title: "Wi-Fi and Routers: Setup, Security & Troubleshooting",
  description:
    "Learn how Wi-Fi works, understand router settings and frequency bands, secure your wireless network, and troubleshoot slow connections, disconnections, and internet access problems.",
  alternates: {
    canonical:
      "https://www.pricetag.co.in/networking/wifi-and-routers",
  },
};

const learningPath = [
  {
    number: "01",
    icon: Radio,
    title: "Understand Wi-Fi signals",
    description:
      "Wi-Fi uses radio signals to connect phones, laptops, and other devices to a wireless access point without an Ethernet cable.",
  },
  {
    number: "02",
    icon: Smartphone,
    title: "Connect a device",
    description:
      "A device selects a network name, authenticates with the network, and may obtain its IP configuration automatically through DHCP.",
  },
  {
    number: "03",
    icon: Router,
    title: "Understand the router",
    description:
      "The access point carries wireless traffic to the local network. The router forwards traffic between networks so devices can reach internet services.",
  },
  {
    number: "04",
    icon: ShieldCheck,
    title: "Secure your network",
    description:
      "Strong passwords, modern Wi-Fi encryption, updated firmware, and secure administration help protect your wireless network.",
  },
  {
    number: "05",
    icon: Activity,
    title: "Troubleshoot problems",
    description:
      "Check signal strength, wireless authentication, IP settings, gateway connectivity, DNS, and internet access to locate connection failures.",
  },
];

const securityChecks = [
  {
    title: "Use modern Wi-Fi encryption",
    description:
      "Prefer WPA3-Personal when supported. WPA2-AES is a practical alternative for compatible devices. Avoid obsolete WEP and WPA configurations.",
  },
  {
    title: "Choose a strong Wi-Fi password",
    description:
      "Use a long, unique passphrase that is not reused for your other accounts.",
  },
  {
    title: "Protect router administration",
    description:
      "Change the default administrator password and disable remote administration if you do not need it.",
  },
  {
    title: "Update router firmware",
    description:
      "Install security updates from the manufacturer. Consider replacing equipment that no longer receives security support.",
  },
  {
    title: "Review connected devices",
    description:
      "Check your router's client list periodically. Investigate unfamiliar devices before concluding they are unauthorized.",
  },
];

const troubleshooting = [
  {
    problem: "The Wi-Fi network is not visible",
    solution:
      "Check whether the router is powered on, wireless broadcasting is enabled, and your device supports the configured frequency band.",
  },
  {
    problem: "Connected to Wi-Fi, but no internet",
    solution:
      "Check the device's IP address, default gateway, DNS settings, and whether other devices can access the internet.",
  },
  {
    problem: "Wi-Fi is slow",
    solution:
      "Test closer to the router, check signal strength and interference, and compare Wi-Fi performance with your internet connection speed.",
  },
  {
    problem: "Wi-Fi disconnects frequently",
    solution:
      "Check signal quality, router placement, firmware updates, power stability, and whether the issue affects one device or the entire network.",
  },
];

export default function WifiAndRoutersPage() {
  return (
    <main className="mx-auto max-w-6xl bg-white px-4 py-10 text-black">
      <header className="mb-10">
        <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-blue-700">
          <Wifi size={18} />
          Networking Guide
        </div>

        <h1 className="max-w-4xl text-3xl font-bold tracking-tight text-black md:text-5xl">
          Wi-Fi and Routers: Setup, Security, and Troubleshooting
        </h1>

        <p className="mt-5 max-w-3xl text-lg leading-8 text-gray-800">
          Learn how wireless networks connect devices, how routers provide
          internet access, how to protect your Wi-Fi, and how to diagnose
          common network problems with practical checks and commands.
        </p>
      </header>

      <section className="mb-12 rounded-xl border border-gray-300 bg-gray-50 p-5 md:p-7">
        <div className="flex items-start gap-3">
          <Network className="mt-1 shrink-0 text-blue-700" size={24} />

          <div>
            <h2 className="text-xl font-bold text-black">
              How does your device connect to the internet?
            </h2>

            <p className="mt-2 leading-7 text-gray-800">
              When your phone connects to Wi-Fi and opens a website, data moves
              between your device, a wireless access point, your router, and
              the destination server. Understanding this path makes network
              configuration, security, and troubleshooting easier.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-black md:text-3xl">
          How Wi-Fi and routers work together
        </h2>

        <p className="mt-3 max-w-3xl leading-7 text-gray-800">
          Wi-Fi provides the wireless connection between your device and an
          access point. A home router commonly combines this access point with
          routing, switching, DHCP, and firewall functions. In larger networks,
          these functions may use separate devices.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: Smartphone,
              title: "Your device",
              description:
                "A phone, laptop, or tablet searches for and joins a wireless network.",
            },
            {
              icon: Wifi,
              title: "Wi-Fi access point",
              description:
                "Wireless signals carry data between your device and the local network.",
            },
            {
              icon: Router,
              title: "Router",
              description:
                "Routes IP traffic between your local network and other networks.",
            },
            {
              icon: Globe,
              title: "Internet",
              description:
                "Remote servers respond to requests from your connected device.",
            },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="rounded-xl border border-gray-300 bg-white p-5"
              >
                <Icon className="mb-3 text-blue-700" size={25} />

                <h3 className="font-bold text-black">{item.title}</h3>

                <p className="mt-2 text-sm leading-6 text-gray-800">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>

        <div className="mt-5 rounded-xl border border-gray-300 bg-white p-5">
          <h3 className="font-bold text-black">Follow the connection</h3>

          <div className="mt-4 flex flex-wrap items-center gap-2 text-sm font-semibold text-black">
            <span className="rounded-lg border border-gray-300 px-3 py-2">
              Phone or laptop
            </span>
            <ArrowRight size={16} className="text-blue-700" />
            <span className="rounded-lg border border-gray-300 px-3 py-2">
              Wi-Fi access point
            </span>
            <ArrowRight size={16} className="text-blue-700" />
            <span className="rounded-lg border border-gray-300 px-3 py-2">
              Router
            </span>
            <ArrowRight size={16} className="text-blue-700" />
            <span className="rounded-lg border border-gray-300 px-3 py-2">
              Internet
            </span>
          </div>

          <p className="mt-3 text-sm leading-6 text-gray-700">
            Many home routers combine the access point, router, and switch in
            one device. Other networks use separate components.
          </p>
        </div>
      </section>

      <AdSlot />

      <section className="my-12">
        <h2 className="text-2xl font-bold text-black md:text-3xl">
          The five stages of a wireless connection
        </h2>

        <p className="mt-3 max-w-3xl leading-7 text-gray-800">
          A working wireless connection requires more than a strong signal.
          These stages explain how a device progresses from discovering Wi-Fi
          to accessing online services.
        </p>

        <div className="mt-6 space-y-4">
          {learningPath.map((step) => {
            const Icon = step.icon;

            return (
              <article
                key={step.number}
                className="flex gap-4 rounded-xl border border-gray-300 bg-white p-5"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-700">
                  <Icon size={22} />
                </div>

                <div>
                  <p className="text-sm font-bold text-blue-700">
                    STAGE {step.number}
                  </p>

                  <h3 className="mt-1 text-lg font-bold text-black">
                    {step.title}
                  </h3>

                  <p className="mt-2 leading-7 text-gray-800">
                    {step.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="my-12">
        <h2 className="text-2xl font-bold text-black md:text-3xl">
          Wi-Fi frequency bands and signal quality
        </h2>

        <p className="mt-3 max-w-3xl leading-7 text-gray-800">
          Wi-Fi performance depends on distance, walls, interference, channel
          conditions, device capabilities, and internet speed. A stronger
          wireless signal does not automatically mean a faster internet
          connection.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[
            {
              title: "2.4 GHz",
              description:
                "Often offers wider coverage and better obstacle penetration, but may experience more interference and congestion.",
            },
            {
              title: "5 GHz",
              description:
                "Often offers higher speeds and more channel options, but may have less range through obstacles.",
            },
            {
              title: "6 GHz",
              description:
                "Available with compatible Wi-Fi equipment and regulatory support. It offers additional spectrum but may require closer access-point placement.",
            },
          ].map((item) => (
            <article
              key={item.title}
              className="rounded-xl border border-gray-300 bg-white p-5"
            >
              <Radio className="mb-3 text-blue-700" size={24} />

              <h3 className="font-bold text-black">{item.title}</h3>

              <p className="mt-2 text-sm leading-6 text-gray-800">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="my-12">
        <div className="flex items-center gap-3">
          <ShieldCheck className="text-blue-700" size={27} />

          <h2 className="text-2xl font-bold text-black md:text-3xl">
            Secure your Wi-Fi network
          </h2>
        </div>

        <p className="mt-3 max-w-3xl leading-7 text-gray-800">
          Secure wireless networking helps prevent unauthorized access and
          reduces the risk of attackers changing router settings or misusing
          your local network.
        </p>

        <div className="mt-6 space-y-3">
          {securityChecks.map((item) => (
            <article
              key={item.title}
              className="flex gap-3 rounded-xl border border-gray-300 bg-white p-4"
            >
              <CheckCircle2
                className="mt-1 shrink-0 text-green-700"
                size={20}
              />

              <div>
                <h3 className="font-bold text-black">{item.title}</h3>

                <p className="mt-1 text-sm leading-6 text-gray-800">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-5 flex items-start gap-3 rounded-xl border border-amber-300 bg-amber-50 p-4">
          <LockKeyhole className="mt-1 shrink-0 text-amber-800" size={21} />

          <p className="text-sm leading-6 text-gray-900">
            <strong>Security tip:</strong> Review WPS, guest-network, and
            remote-administration settings. Disable features you do not need,
            and avoid exposing the router's administration panel directly to
            the public internet.
          </p>
        </div>
      </section>

      <AdSlot />

      <section className="my-12">
        <h2 className="text-2xl font-bold text-black md:text-3xl">
          Troubleshoot common Wi-Fi problems
        </h2>

        <p className="mt-3 max-w-3xl leading-7 text-gray-800">
          Start by checking whether the problem affects one device or the whole
          network. Then investigate the wireless link, IP configuration, DNS,
          and internet connection.
        </p>

        <div className="mt-6 space-y-3">
          {troubleshooting.map((item) => (
            <article
              key={item.problem}
              className="rounded-xl border border-gray-300 bg-white p-5"
            >
              <div className="flex items-start gap-3">
                <Search
                  className="mt-1 shrink-0 text-blue-700"
                  size={20}
                />

                <div>
                  <h3 className="font-bold text-black">{item.problem}</h3>

                  <p className="mt-2 text-sm leading-6 text-gray-800">
                    {item.solution}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-6 rounded-xl border border-gray-800 bg-gray-950 p-5 text-white">
          <div className="flex items-center gap-2">
            <Settings size={21} className="text-blue-300" />

            <h3 className="text-lg font-bold text-white">
              Quick Windows network checks
            </h3>
          </div>

          <div className="mt-4 space-y-4">
            {[
              {
                command: "ipconfig",
                description:
                  "Check your IP address, subnet mask, and default gateway.",
              },
              {
                command: "ipconfig /all",
                description:
                  "Inspect detailed network, DHCP, and DNS configuration.",
              },
              {
                command: "ping <default-gateway-IP>",
                description:
                  "Test IP reachability to your gateway. Replace the placeholder with the gateway address shown by ipconfig.",
              },
              {
                command: "nslookup example.com",
                description:
                  "Check whether DNS can resolve a domain name.",
              },
            ].map((item) => (
              <div key={item.command}>
                <code className="block overflow-x-auto rounded-lg bg-gray-900 px-3 py-2 text-sm text-green-300">
                  {item.command}
                </code>

                <p className="mt-2 text-sm leading-6 text-gray-200">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-4 text-sm leading-6 text-gray-300">
            A failed ping does not always mean a device is offline. Firewalls
            may block ICMP traffic, so compare several diagnostic checks.
          </p>
        </div>
      </section>

      <section className="my-12 rounded-xl border border-gray-300 bg-gray-50 p-5 md:p-7">
        <h2 className="text-2xl font-bold text-black">
          Continue learning about Wi-Fi and routers
        </h2>

        <p className="mt-3 leading-7 text-gray-800">
          Once you understand how wireless devices connect and communicate,
          move into practical router configuration, Wi-Fi troubleshooting, and
          wireless networking fundamentals.
        </p>
      </section>

      <RelatedTopics
        eyebrow="Related topics"
        title="Explore Wi-Fi and routers"
        description="Continue with focused guides for router settings, connection problems, and wireless networking fundamentals."
        links={[
          {
            label: "Router Guides",
            href: "/networking/wifi-and-routers/router-guides",
          },
          {
            label: "Wi-Fi Troubleshooting",
            href: "/networking/wifi-and-routers/wifi-troubleshooting",
          },
          {
            label: "Wireless Networking",
            href: "/networking/wifi-and-routers/wireless-networking",
          },
        ]}
      />
    </main>
  );
}
