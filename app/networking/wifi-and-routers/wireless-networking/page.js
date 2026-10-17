
import {
  Wifi,
  Radio,
  Router,
  Signal,
  ShieldCheck,
  ShieldAlert,
  Smartphone,
  Laptop,
  Gauge,
  Waves,
  Home,
  Building2,
  Settings,
  CheckCircle2,
  CircleHelp,
  ArrowRight,
  Cable,
  RefreshCw,
  Network,
  LockKeyhole,
  Search,
} from "lucide-react";

import RelatedTopics from "../../../../components/ContinueReading";
import AdSlot from "../../../../components/AdSlot";
export const metadata = {
  title: "Wireless Networking | Wi-Fi Bands, Speed & Security",
  description:
    "Learn how wireless networking works, compare 2.4 GHz, 5 GHz, and 6 GHz Wi-Fi bands, improve signal strength, reduce interference, choose network equipment, and secure wireless connections.",
  alternates: {
    canonical:
      "https://www.pricetag.co.in/networking/wifi-and-routers/wireless-networking",
  },
};

const colorStyles = {
  emerald: {
    card: "border-emerald-200 bg-emerald-50/70",
    icon: "bg-emerald-100 text-emerald-800",
    title: "text-emerald-900",
    label: "bg-emerald-100 text-emerald-900",
  },
  blue: {
    card: "border-blue-200 bg-blue-50/70",
    icon: "bg-blue-100 text-blue-800",
    title: "text-blue-900",
    label: "bg-blue-100 text-blue-900",
  },
  violet: {
    card: "border-violet-200 bg-violet-50/70",
    icon: "bg-violet-100 text-violet-800",
    title: "text-violet-900",
    label: "bg-violet-100 text-violet-900",
  },
  cyan: {
    card: "border-cyan-200 bg-cyan-50/70",
    icon: "bg-cyan-100 text-cyan-800",
    title: "text-cyan-900",
    label: "bg-cyan-100 text-cyan-900",
  },
  amber: {
    card: "border-amber-200 bg-amber-50/70",
    icon: "bg-amber-100 text-amber-800",
    title: "text-amber-900",
    label: "bg-amber-100 text-amber-900",
  },
  rose: {
    card: "border-rose-200 bg-rose-50/70",
    icon: "bg-rose-100 text-rose-800",
    title: "text-rose-900",
    label: "bg-rose-100 text-rose-900",
  },
};
const bands = [
  {
    name: "2.4 GHz",
    subtitle: "Better reach",
    color: "emerald",
    icon: Signal,
    bestFor: "Longer range, smart-home devices, and basic browsing.",
    advantages: [
      "Generally travels farther through obstacles.",
      "Supported by many older and smart-home devices.",
    ],
    limitations: [
      "Often more crowded because many devices use this band.",
      "Usually offers less available capacity than 5 GHz or 6 GHz.",
    ],
  },
  {
    name: "5 GHz",
    subtitle: "Balanced speed",
    color: "blue",
    icon: Gauge,
    bestFor: "Video streaming, gaming, video calls, and everyday fast Wi-Fi.",
    advantages: [
      "Often provides higher speeds than 2.4 GHz.",
      "Offers more channel options in many regions.",
    ],
    limitations: [
      "Usually has less range through walls than 2.4 GHz.",
      "Available channels and power limits depend on local regulations.",
    ],
  },
  {
    name: "6 GHz",
    subtitle: "Modern Wi-Fi",
    color: "violet",
    icon: Radio,
    bestFor: "Compatible devices needing high capacity in a suitable environment.",
    advantages: [
      "Provides additional spectrum for supported Wi-Fi 6E and Wi-Fi 7 devices.",
      "Can offer less congestion from older Wi-Fi devices.",
    ],
    limitations: [
      "Requires compatible devices and an appropriate router.",
      "Coverage can be more limited through walls and at longer distances.",
    ],
  },
];

const wirelessProblems = [
  {
    title: "Weak signal in one room",
    cause:
      "Walls, floors, distance, and the router's position can weaken the radio signal.",
    solution:
      "Place the router in a central, elevated, open location. If coverage is still poor, consider a mesh system or a properly positioned access point.",
    color: "blue",
  },
  {
    title: "Fast near the router, slow farther away",
    cause:
      "Signal strength and connection quality decrease with distance and obstacles.",
    solution:
      "Test from different locations. Try 2.4 GHz for reach or 5 GHz for speed when the signal is strong. Improve coverage instead of expecting a band change to fix every problem.",
    color: "cyan",
  },
  {
    title: "Wi-Fi slows down at busy times",
    cause:
      "Nearby networks, active devices, streaming, and downloads can compete for wireless airtime or internet bandwidth.",
    solution:
      "Check whether the slowdown affects local Wi-Fi or the internet service. Use a less congested supported channel, move capable devices to 5 or 6 GHz, and check for heavy downloads.",
    color: "amber",
  },
  {
    title: "Frequent disconnections",
    cause:
      "Interference, weak signal, router faults, outdated drivers, or roaming between access points can interrupt the connection.",
    solution:
      "Test near the router, check whether multiple devices disconnect, update device and router software, and inspect mesh or roaming settings if applicable.",
    color: "violet",
  },
  {
    title: "A device cannot find or join Wi-Fi",
    cause:
      "The device may not support the selected band or security mode, or the saved password and network settings may be incorrect.",
    solution:
      "Check device compatibility, confirm the password, forget and rejoin the network, and review the router's security settings. Keep a compatible band enabled for older devices.",
    color: "rose",
  },
];

const palette = {
  emerald: {
    card: "border-emerald-200 bg-emerald-50/70",
    icon: "bg-emerald-100 text-emerald-800",
    title: "text-emerald-900",
    label: "bg-emerald-100 text-emerald-900",
  },
  blue: {
    card: "border-blue-200 bg-blue-50/70",
    icon: "bg-blue-100 text-blue-800",
    title: "text-blue-900",
    label: "bg-blue-100 text-blue-900",
  },
  violet: {
    card: "border-violet-200 bg-violet-50/70",
    icon: "bg-violet-100 text-violet-800",
    title: "text-violet-900",
    label: "bg-violet-100 text-violet-900",
  },
  cyan: {
    card: "border-cyan-200 bg-cyan-50/70",
    icon: "bg-cyan-100 text-cyan-800",
    title: "text-cyan-900",
    label: "bg-cyan-100 text-cyan-900",
  },
  amber: {
    card: "border-amber-200 bg-amber-50/70",
    icon: "bg-amber-100 text-amber-800",
    title: "text-amber-900",
    label: "bg-amber-100 text-amber-900",
  },
  rose: {
    card: "border-rose-200 bg-rose-50/70",
    icon: "bg-rose-100 text-rose-800",
    title: "text-rose-900",
    label: "bg-rose-100 text-rose-900",
  },
};

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mb-6">
      <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-blue-700">
        {eyebrow}
      </p>
      <h2 className="text-2xl font-bold tracking-tight text-slate-800 sm:text-3xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 max-w-3xl leading-7 text-slate-600">
          {description}
        </p>
      )}
    </div>
  );
}

export default function WirelessNetworkingPage() {
  return (
    <main className="min-h-screen bg-white text-slate-700">
      <article className="mx-auto max-w-5xl px-5 py-8 sm:px-8 sm:py-12">

        {/* Hero */}
        <header className="relative mb-10 overflow-hidden rounded-3xl border border-cyan-100 bg-gradient-to-br from-cyan-50 via-blue-50 to-violet-50 p-6 sm:p-10">
          <div className="absolute -right-8 -top-8 h-48 w-48 rounded-full bg-blue-200/40 blur-3xl" />

          <div className="relative">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-white/90 px-3 py-2 text-sm font-semibold text-cyan-800">
              <Radio size={17} />
              Wireless Networking Guide
            </div>

            <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-slate-800 sm:text-5xl">
              Understand Wireless Networking
              <span className="mt-2 block text-blue-700">
                Better Signal. Better Speed. Safer Connections.
              </span>
            </h1>

            <p className="mt-5 max-w-2xl leading-7 text-slate-600 sm:text-lg">
              Learn how Wi-Fi carries data through radio waves, choose the
              right frequency band, improve coverage, reduce interference,
              and protect your wireless network.
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              <span className="rounded-lg bg-white px-3 py-2 text-sm font-semibold text-blue-800 shadow-sm">
                Wi-Fi bands
              </span>
              <span className="rounded-lg bg-white px-3 py-2 text-sm font-semibold text-emerald-800 shadow-sm">
                Signal and speed
              </span>
              <span className="rounded-lg bg-white px-3 py-2 text-sm font-semibold text-violet-800 shadow-sm">
                Wireless security
              </span>
            </div>
          </div>
        </header>

        <AdSlot />

        {/* What is wireless networking */}
        <section className="my-12">
          <SectionHeading
            eyebrow="Start here"
            title="What Is Wireless Networking?"
            description="Wireless networking lets devices exchange data without needing a physical network cable for every connection."
          />

          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-blue-200 bg-blue-50/70 p-5">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-800">
                <Laptop size={25} />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-blue-950">
                Your Device
              </h3>
              <p className="text-sm leading-6">
                A phone, laptop, television, or other compatible device sends
                and receives wireless data.
              </p>
            </div>

            <div className="rounded-2xl border border-cyan-200 bg-cyan-50/70 p-5">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-100 text-cyan-800">
                <Radio size={25} />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-cyan-950">
                Radio Signals
              </h3>
              <p className="text-sm leading-6">
                The wireless adapter converts data into radio signals and
                receives signals from other network equipment.
              </p>
            </div>

            <div className="rounded-2xl border border-violet-200 bg-violet-50/70 p-5">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-violet-100 text-violet-800">
                <Router size={25} />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-violet-950">
                Access Point or Router
              </h3>
              <p className="text-sm leading-6">
                An access point connects wireless devices to a local network.
                A home wireless router commonly combines this function with
                routing and other network services.
              </p>
            </div>
          </div>

          <div className="mt-5 rounded-xl border border-slate-200 bg-slate-50 p-5">
            <p className="leading-7">
              <span className="font-semibold text-slate-800">
                Example:
              </span>{" "}
              When you open a website on your phone, the phone sends wireless
              data to your access point. The network forwards the request
              toward the internet, and the returned data travels back to your
              phone over the connection.
            </p>
          </div>
        </section>

        {/* Wi-Fi vs wireless */}
        <section className="my-12">
          <SectionHeading
            eyebrow="Know the difference"
            title="Wireless Networking vs Wi-Fi"
            description="The terms are related, but they do not mean exactly the same thing."
          />

          <div className="overflow-hidden rounded-2xl border border-blue-100">
            <div className="grid bg-blue-50 sm:grid-cols-2">
              <div className="border-b border-blue-100 p-5 sm:border-b-0 sm:border-r">
                <h3 className="mb-2 text-lg font-semibold text-blue-900">
                  Wireless networking
                </h3>
                <p className="text-sm leading-6">
                  The broad idea of connecting or exchanging data without a
                  direct physical cable. It includes Wi-Fi, Bluetooth, cellular
                  networks, and other radio technologies.
                </p>
              </div>
              <div className="p-5">
                <h3 className="mb-2 text-lg font-semibold text-cyan-900">
                  Wi-Fi
                </h3>
                <p className="text-sm leading-6">
                  A family of wireless local-area networking technologies
                  commonly used to connect phones, laptops, and smart devices
                  to a home or office network.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="my-12">
          <SectionHeading
            eyebrow="Follow the data"
            title="How Does Wi-Fi Work?"
            description="A wireless connection involves more than simply sending a signal. Your device must join the network, exchange data, and reach the service you want to use."
          />

          <div className="grid gap-3 sm:grid-cols-2">
            {[
              {
                number: "01",
                title: "Find the network",
                text: "Your device scans for available wireless networks and displays their names, known as SSIDs.",
                color: "border-blue-200 bg-blue-50",
              },
              {
                number: "02",
                title: "Connect securely",
                text: "The device joins the selected network using its configured authentication and security method.",
                color: "border-violet-200 bg-violet-50",
              },
              {
                number: "03",
                title: "Receive network settings",
                text: "The device usually obtains an IP address, gateway, and DNS settings through DHCP.",
                color: "border-cyan-200 bg-cyan-50",
              },
              {
                number: "04",
                title: "Send and receive data",
                text: "The access point carries wireless traffic into the local network. The router forwards traffic to other networks when needed.",
                color: "border-emerald-200 bg-emerald-50",
              },
            ].map((step) => (
              <div
                key={step.number}
                className={`rounded-xl border p-5 ${step.color}`}
              >
                <p className="mb-2 text-sm font-bold text-slate-500">
                  STEP {step.number}
                </p>
                <h3 className="mb-2 text-lg font-semibold text-slate-800">
                  {step.title}
                </h3>
                <p className="text-sm leading-6">{step.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Frequency bands */}
        <section className="my-12">
          <SectionHeading
            eyebrow="Choose the right band"
            title="2.4 GHz vs 5 GHz vs 6 GHz"
            description="These Wi-Fi bands trade off coverage, available capacity, and compatibility. The best choice depends on your device, router, surroundings, and local regulations."
          />

          <div className="space-y-4">
            {bands.map((band) => {
              const Icon = band.icon;
              const colors = colorStyles[band.color];

              return (
                <div
                  key={band.name}
                  className={`rounded-2xl border p-5 sm:p-6 ${colors.card}`}
                >
                  <div className="mb-4 flex items-start gap-4">
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${colors.icon}`}
                    >
                      <Icon size={25} />
                    </div>
                    <div>
                      <h3 className={`text-xl font-bold ${colors.title}`}>
                        {band.name}
                      </h3>
                      <p className="text-sm text-slate-600">{band.subtitle}</p>
                    </div>
                  </div>

                  <p className="mb-4 text-sm leading-6">
                    <span className="font-semibold text-slate-800">
                      Best for:
                    </span>{" "}
                    {band.bestFor}
                  </p>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-xl border border-emerald-200 bg-white/80 p-4">
                      <h4 className="mb-2 flex items-center gap-2 font-semibold text-emerald-900">
                        <CheckCircle2 size={18} />
                        Advantages
                      </h4>
                      <ul className="space-y-2 text-sm leading-6">
                        {band.advantages.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="rounded-xl border border-amber-200 bg-white/80 p-4">
                      <h4 className="mb-2 flex items-center gap-2 font-semibold text-amber-900">
                        <CircleHelp size={18} />
                        Limitations
                      </h4>
                      <ul className="space-y-2 text-sm leading-6">
                        {band.limitations.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-5 rounded-xl border border-blue-200 bg-blue-50 p-5">
            <h3 className="mb-2 font-semibold text-blue-950">
              Which band should you use?
            </h3>
            <p className="text-sm leading-6">
              Start with 2.4 GHz when you need more reach or support for older
              devices. Prefer 5 GHz for many nearby high-speed devices. Use
              6 GHz when both your router and client support it and its coverage
              suits your space. Many routers can select bands automatically.
            </p>
          </div>
        </section>

        <AdSlot />

        {/* Improve signal */}
        <section className="my-12">
          <SectionHeading
            eyebrow="Improve your connection"
            title="How to Get Better Wi-Fi Signal"
            description="Before buying new equipment, improve the placement and configuration of the router you already have."
          />

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                icon: Home,
                title: "Place the router well",
                text: "Choose a central, elevated, open location. Avoid hiding it inside a cabinet or behind large objects.",
                color: "blue",
              },
              {
                icon: Waves,
                title: "Reduce interference",
                text: "Keep the router away from common sources of interference and test alternative locations when performance is inconsistent.",
                color: "cyan",
              },
              {
                icon: Network,
                title: "Choose suitable channels",
                text: "In crowded areas, use your router's channel analysis or automatic channel selection. Change channels only when testing suggests congestion.",
                color: "violet",
              },
              {
                icon: Building2,
                title: "Improve coverage",
                text: "For large homes or offices, a well-placed access point or mesh system can work better than simply increasing router power.",
                color: "emerald",
              },
            ].map((item) => {
              const Icon = item.icon;
              const colors = colorStyles[item.color];

              return (
                <div
                  key={item.title}
                  className={`rounded-2xl border p-5 ${colors.card}`}
                >
                  <div
                    className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl ${colors.icon}`}
                  >
                    <Icon size={23} />
                  </div>
                  <h3 className={`mb-2 text-lg font-semibold ${colors.title}`}>
                    {item.title}
                  </h3>
                  <p className="text-sm leading-6">{item.text}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Channels */}
        <section className="my-12">
          <SectionHeading
            eyebrow="Understand interference"
            title="What Is a Wi-Fi Channel?"
            description="A channel is a portion of a frequency band used for wireless communication. Networks sharing airtime or overlapping channels can affect performance."
          />

          <div className="rounded-2xl border border-violet-200 bg-gradient-to-r from-violet-50 to-blue-50 p-5 sm:p-6">
            <h3 className="mb-3 text-lg font-semibold text-violet-950">
              When should you change a channel?
            </h3>
            <ul className="space-y-3 text-sm leading-6">
              <li className="flex gap-3">
                <CheckCircle2 className="mt-0.5 shrink-0 text-violet-700" size={19} />
                <span>
                  Your Wi-Fi is slow or unstable even when the signal is strong.
                </span>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="mt-0.5 shrink-0 text-violet-700" size={19} />
                <span>
                  Nearby networks heavily use the same or overlapping channels.
                </span>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="mt-0.5 shrink-0 text-violet-700" size={19} />
                <span>
                  A channel comparison or Wi-Fi analysis suggests a less
                  congested supported option.
                </span>
              </li>
            </ul>

            <p className="mt-4 text-sm leading-6 text-slate-600">
              For 2.4 GHz, channels 1, 6, and 11 are commonly used as
              non-overlapping 20 MHz choices in regions that permit them.
              Channel availability and recommended settings vary by country
              and router. Wider channels are not always faster in crowded
              environments.
            </p>
          </div>
        </section>

        {/* Wireless security */}
        <section className="my-12 overflow-hidden rounded-2xl border border-emerald-200">
          <div className="flex items-center gap-3 bg-emerald-100 p-5">
            <ShieldCheck className="shrink-0 text-emerald-800" size={27} />
            <h2 className="text-xl font-bold text-emerald-950 sm:text-2xl">
              How to Secure a Wireless Network
            </h2>
          </div>

          <div className="p-5 sm:p-6">
            <p className="mb-5 leading-7">
              Wireless signals extend beyond the walls of a home or office.
              Strong authentication and sensible router configuration help
              prevent unauthorized people from joining your network.
            </p>

            <div className="grid gap-3 sm:grid-cols-2">
              {[
                "Use WPA3-Personal where supported, or WPA2-AES when needed for compatibility.",
                "Choose a long, unique Wi-Fi password.",
                "Change the router's default administrator password.",
                "Keep router firmware updated.",
                "Disable WPS or remote administration if you do not need them.",
                "Use a guest network for visitors and suitable isolated devices.",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-emerald-100 bg-emerald-50/60 p-4"
                >
                  <LockKeyhole
                    className="mt-0.5 shrink-0 text-emerald-800"
                    size={19}
                  />
                  <p className="text-sm leading-6">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-xl border border-amber-200 bg-amber-50 p-4">
              <p className="flex items-start gap-2 text-sm leading-6 text-amber-950">
                <ShieldAlert className="mt-0.5 shrink-0" size={19} />
                <span>
                  A hidden network name is not a substitute for encryption and
                  a strong password. Avoid relying on SSID hiding as your main
                  security measure.
                </span>
              </p>
            </div>
          </div>
        </section>

        {/* Problems and solutions */}
        <section className="my-12">
          <SectionHeading
            eyebrow="Practical fixes"
            title="Common Wireless Problems and Solutions"
            description="Use the symptom to decide what to test first. If possible, compare more than one device and location before changing settings."
          />

          <div className="space-y-4">
            {wirelessProblems.map((problem, index) => {
              const colors = colorStyles[problem.color];

              return (
                <div
                  key={problem.title}
                  className={`rounded-2xl border p-5 sm:p-6 ${colors.card}`}
                >
                  <div className="mb-3 flex items-start gap-3">
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-sm font-bold ${colors.icon}`}
                    >
                      {index + 1}
                    </span>
                    <h3 className={`pt-1 text-lg font-bold ${colors.title}`}>
                      {problem.title}
                    </h3>
                  </div>

                  <p className="mb-3 text-sm leading-6">
                    <span className="font-semibold text-slate-800">
                      Possible cause:
                    </span>{" "}
                    {problem.cause}
                  </p>

                  <div className="rounded-xl border border-white/80 bg-white/80 p-4">
                    <p className="mb-1 flex items-center gap-2 font-semibold text-emerald-900">
                      <CheckCircle2 size={18} />
                      What to try
                    </p>
                    <p className="text-sm leading-6">{problem.solution}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Equipment */}
        <section className="my-12">
          <SectionHeading
            eyebrow="Choose the right setup"
            title="Router, Access Point, Repeater, or Mesh?"
            description="The right equipment depends on whether you need routing, more wireless coverage, or a better connection between rooms."
          />

          <div className="space-y-3">
            {[
              {
                name: "Wireless router",
                description:
                  "Connects your local network to other networks and usually includes Wi-Fi, DHCP, and basic firewall features.",
                color: "bg-blue-100 text-blue-800",
              },
              {
                name: "Access point",
                description:
                  "Adds Wi-Fi coverage to an existing network. It is useful when you can connect it to the main network by Ethernet.",
                color: "bg-cyan-100 text-cyan-800",
              },
              {
                name: "Repeater or extender",
                description:
                  "Relays wireless coverage into another area. Performance can be limited by the quality of the link back to the main network.",
                color: "bg-amber-100 text-amber-800",
              },
              {
                name: "Mesh Wi-Fi",
                description:
                  "Uses multiple coordinated nodes to cover a larger area. Placement and the backhaul connection still affect performance.",
                color: "bg-violet-100 text-violet-800",
              },
            ].map((item) => (
              <div
                key={item.name}
                className="flex gap-4 rounded-xl border border-slate-200 p-4 sm:p-5"
              >
                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${item.color}`}
                >
                  <Wifi size={21} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800">{item.name}</h3>
                  <p className="mt-1 text-sm leading-6">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <AdSlot />

        {/* FAQs */}
        <section className="my-12">
          <SectionHeading
            eyebrow="Quick answers"
            title="Frequently Asked Questions"
            description="Short answers to common wireless networking questions."
          />

          <div className="space-y-3">
            {[
              {
                question: "Does a higher Wi-Fi frequency always mean faster internet?",
                answer:
                  "No. Higher bands can provide more capacity, but performance also depends on signal strength, interference, channel width, device capabilities, and your internet connection.",
              },
              {
                question: "Will a stronger router solve every Wi-Fi problem?",
                answer:
                  "No. A better router may improve coverage or capacity, but it cannot fix an ISP outage, every source of interference, or a poorly placed access point.",
              },
              {
                question: "Is Wi-Fi 6 the same as 6 GHz?",
                answer:
                  "No. Wi-Fi 6 refers to the 802.11ax generation and commonly operates on 2.4 and 5 GHz. Wi-Fi 6E extends that technology into the 6 GHz band where permitted. Wi-Fi 7 can also use 6 GHz on compatible equipment and in supported regions.",
              },
              {
                question: "Should I use the same network name for every band?",
                answer:
                  "Many home routers use one network name and select a band for compatible devices. Separate names can help with testing or specific compatibility problems, but they are not required for every setup.",
              },
              {
                question: "Can my neighbor's Wi-Fi affect my connection?",
                answer:
                  "Yes. Nearby networks can compete for wireless airtime, especially on crowded channels. The effect depends on signal strength, channel use, band, and local conditions.",
              },
              {
                question: "Does wireless networking require internet access?",
                answer:
                  "No. Devices can communicate over a local wireless network without internet access, provided the local network and required services are working.",
              },
            ].map((faq, index) => (
              <details
                key={faq.question}
                className="group rounded-xl border border-slate-200 open:border-blue-200 open:bg-blue-50/40"
              >
                <summary className="flex cursor-pointer list-none items-center gap-3 p-4 font-semibold text-slate-800 sm:p-5">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-sm font-bold text-blue-800">
                    {index + 1}
                  </span>
                  <span className="flex-1">{faq.question}</span>
                  <CircleHelp
                    className="shrink-0 text-blue-700"
                    size={20}
                  />
                </summary>
                <div className="px-5 pb-5 pl-[3.75rem] text-sm leading-7 text-slate-600">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* Related topics */}
        <div className="mt-14">
          <RelatedTopics
            eyebrow="Continue learning"
            title="Explore Related Networking Topics"
            description="Continue from wireless fundamentals to router setup and practical troubleshooting."
            links={[
              {
                label: "Wi-Fi and Routers",
                href: "/networking/wifi-and-routers",
              },
              {
                label: "Router Guides",
                href: "/networking/wifi-and-routers/router-guides",
              },
              {
                label: "Wi-Fi Troubleshooting",
                href: "/networking/wifi-and-routers/wifi-troubleshooting",
              },
              {
                label: "Network Protocols and Architecture",
                href: "/networking/protocols-and-architecture",
              },
            ]}
          />
        </div>
      </article>
    </main>
  );
}
