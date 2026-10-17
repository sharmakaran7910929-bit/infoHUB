
import {
  Wifi,
  WifiOff,
  Router,
  Globe,
  ShieldCheck,
  ShieldAlert,
  Signal,
  CircleHelp,
  CheckCircle2,
  Search,
  Gauge,
  RefreshCw,
  Laptop,
  Settings,
  Bug,
  Terminal,
  Network,
  ArrowRight,
  Cable,
} from "lucide-react";

import RelatedTopics from "../../../../components/ContinueReading";
import AdSlot from "../../../../components/AdSlot";
export const metadata = {
  title: "Wi-Fi Troubleshooting: Common Problems and Fixes",
  description:
    "Learn how to fix common Wi-Fi problems, including slow speeds, disconnections, missing networks, and no internet access. Follow practical troubleshooting steps and Windows network diagnostic commands.",
  alternates: {
    canonical:
      "https://www.pricetag.co.in/networking/wifi-and-routers/wifi-troubleshooting",
  },
};
const problems = [
  {
    title: "Connected to Wi-Fi, but no internet",
    icon: Globe,
    color: "blue",
    cause:
      "Your device can reach the router, but the router may have lost its internet connection. Incorrect IP or DNS settings can also cause this.",
    steps: [
      "Check whether other devices can access the internet.",
      "If all devices fail, check the router's WAN indicator and ISP connection.",
      "If only one device fails, reconnect its Wi-Fi.",
      "Check the device's IP address, gateway, and DNS settings if the problem continues.",
    ],
  },
  {
    title: "Wi-Fi keeps disconnecting",
    icon: WifiOff,
    color: "violet",
    cause:
      "Weak signal, interference, outdated Wi-Fi drivers, router faults, or power problems can interrupt the connection.",
    steps: [
      "Move closer to the router and test again.",
      "Check whether one device or every device disconnects.",
      "Restart the router if multiple devices are affected.",
      "Update the Wi-Fi driver if the issue affects only one computer.",
    ],
  },
  {
    title: "Wi-Fi is too slow",
    icon: Gauge,
    color: "amber",
    cause:
      "Congestion, weak signal, background downloads, too many active devices, or a slow internet plan may reduce performance.",
    steps: [
      "Run a speed test near the router.",
      "Pause large downloads and check active devices.",
      "Compare with a wired connection if possible.",
      "Try another supported Wi-Fi band or a less congested channel.",
    ],
  },
  {
    title: "Wi-Fi network is not showing",
    icon: Signal,
    color: "cyan",
    cause:
      "The router's wireless radio may be disabled, the network name may be hidden, or your device may not support the configured frequency band.",
    steps: [
      "Confirm that Wi-Fi is enabled on your device.",
      "Turn Wi-Fi off and on again.",
      "Check whether wireless broadcasting is enabled in the router settings.",
      "Confirm that the device supports the router's Wi-Fi band.",
    ],
  },
  {
    title: "Some websites will not open",
    icon: Search,
    color: "rose",
    cause:
      "DNS resolution, browser settings, proxy configuration, a firewall, or a website outage may be responsible.",
    steps: [
      "Try opening a different website.",
      "Test the same website on another device.",
      "Use nslookup to check whether the domain resolves.",
      "If DNS appears to be the issue, inspect the configured DNS server.",
    ],
  },
  {
    title: "Cannot connect to the Wi-Fi network",
    icon: Laptop,
    color: "emerald",
    cause:
      "An incorrect password, security-mode mismatch, device limits, access controls, or IP address assignment problems can prevent a connection.",
    steps: [
      "Check the network name and password.",
      "Forget the saved network and reconnect.",
      "Check whether other devices can connect.",
      "Review the router's access-control and DHCP settings if needed.",
    ],
  },
];

const commands = [
  {
    command: "ipconfig",
    title: "Inspect your network settings",
    description:
      "View your computer's IP address, default gateway, and network configuration.",
    color: "blue",
  },
  {
    command: "ping <gateway-IP>",
    title: "Test the local router",
    description:
      "Replace <gateway-IP> with the default gateway shown by ipconfig.",
    color: "violet",
  },
  {
    command: "ping 1.1.1.1",
    title: "Test external IP connectivity",
    description:
      "Checks whether an external IP address responds. A failed reply alone does not prove the internet is down.",
    color: "emerald",
  },
  {
    command: "nslookup example.com",
    title: "Check DNS resolution",
    description:
      "Find out whether a DNS server can resolve a domain name to an IP address.",
    color: "amber",
  },
  {
    command: "tracert example.com",
    title: "Inspect the network route",
    description:
      "Shows the route toward a destination on Windows. Some network devices may not respond to every probe.",
    color: "cyan",
  },
];

const colorStyles = {
  blue: {
    icon: "bg-blue-100 text-blue-700",
    border: "border-blue-200",
    heading: "text-blue-950",
    label: "bg-blue-50 text-blue-800",
  },
  violet: {
    icon: "bg-violet-100 text-violet-700",
    border: "border-violet-200",
    heading: "text-violet-950",
    label: "bg-violet-50 text-violet-800",
  },
  amber: {
    icon: "bg-amber-100 text-amber-700",
    border: "border-amber-200",
    heading: "text-amber-950",
    label: "bg-amber-50 text-amber-800",
  },
  cyan: {
    icon: "bg-cyan-100 text-cyan-700",
    border: "border-cyan-200",
    heading: "text-cyan-950",
    label: "bg-cyan-50 text-cyan-800",
  },
  rose: {
    icon: "bg-rose-100 text-rose-700",
    border: "border-rose-200",
    heading: "text-rose-950",
    label: "bg-rose-50 text-rose-800",
  },
  emerald: {
    icon: "bg-emerald-100 text-emerald-700",
    border: "border-emerald-200",
    heading: "text-emerald-950",
    label: "bg-emerald-50 text-emerald-800",
  },
};

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mb-6">
      {eyebrow && (
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-blue-700">
          {eyebrow}
        </p>
      )}
      <h2 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 max-w-3xl text-base leading-7 text-slate-600">
          {description}
        </p>
      )}
    </div>
  );
}

export default function WifiTroubleshootingPage() {
  return (
    <main className="min-h-screen bg-white text-slate-700">
      <article className="mx-auto max-w-5xl px-5 py-8 sm:px-8 sm:py-12">
        {/* Hero */}
        <header className="relative mb-10 overflow-hidden rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-cyan-50 p-6 sm:p-10">
          <div className="absolute -right-10 -top-10 h-44 w-44 rounded-full bg-cyan-100/60 blur-3xl" />

          <div className="relative">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/90 px-3 py-2 text-sm font-semibold text-blue-800">
              <Wifi size={17} />
              Networking Learning Guide
            </div>

            <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl">
              Wi-Fi Troubleshooting
              <span className="mt-2 block text-blue-700">
                Find the Problem. Fix the Connection.
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              Understand why Wi-Fi fails, diagnose common network problems,
              and learn practical ways to restore your connection.
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              <span className="rounded-lg bg-blue-100 px-3 py-2 text-sm font-semibold text-blue-900">
                Common problems
              </span>
              <span className="rounded-lg bg-emerald-100 px-3 py-2 text-sm font-semibold text-emerald-900">
                Practical solutions
              </span>
              <span className="rounded-lg bg-violet-100 px-3 py-2 text-sm font-semibold text-violet-900">
                Security awareness
              </span>
            </div>
          </div>
        </header>

        <AdSlot />

        {/* What is troubleshooting */}
        <section className="my-12">
          <SectionHeading
            eyebrow="Start with the basics"
            title="What Is Troubleshooting?"
            description="Troubleshooting is a systematic way to identify a fault, test possible causes, and find a solution."
          />

          <div className="grid gap-4 sm:grid-cols-3">
            {[
              {
                number: "01",
                title: "Identify",
                text: "Describe the symptom. Is Wi-Fi missing, slow, or connected without internet?",
                color: "border-blue-300 bg-blue-50",
                numberColor: "text-blue-700",
              },
              {
                number: "02",
                title: "Investigate",
                text: "Test the device, router, signal, and internet connection to narrow down the cause.",
                color: "border-violet-300 bg-violet-50",
                numberColor: "text-violet-700",
              },
              {
                number: "03",
                title: "Resolve",
                text: "Apply one suitable fix, then test again to see whether the problem is gone.",
                color: "border-emerald-300 bg-emerald-50",
                numberColor: "text-emerald-700",
              },
            ].map((item) => (
              <div
                key={item.number}
                className={`rounded-2xl border p-5 ${item.color}`}
              >
                <p className={`mb-3 text-sm font-bold ${item.numberColor}`}>
                  STEP {item.number}
                </p>
                <h3 className="mb-2 text-xl font-bold text-slate-950">
                  {item.title}
                </h3>
                <p className="text-sm leading-6 text-slate-700">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why problems happen */}
        <section className="my-12">
          <SectionHeading
            eyebrow="Understand the cause"
            title="Why Do Wi-Fi Problems Happen?"
            description="Your connection depends on several parts working together. The first step is identifying which part is failing."
          />

          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-cyan-200 bg-cyan-50/70 p-5">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-100 text-cyan-800">
                <Signal size={25} />
              </div>
              <h3 className="mb-2 text-lg font-bold text-slate-950">
                Wireless Signal
              </h3>
              <p className="text-sm leading-6">
                Distance, walls, interference, and Wi-Fi band selection affect
                communication between your device and router.
              </p>
            </div>

            <div className="rounded-2xl border border-violet-200 bg-violet-50/70 p-5">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-violet-100 text-violet-800">
                <Router size={25} />
              </div>
              <h3 className="mb-2 text-lg font-bold text-slate-950">
                Local Network
              </h3>
              <p className="text-sm leading-6">
                Router configuration, IP addressing, DHCP, and device
                compatibility can prevent local communication.
              </p>
            </div>

            <div className="rounded-2xl border border-blue-200 bg-blue-50/70 p-5">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-800">
                <Globe size={25} />
              </div>
              <h3 className="mb-2 text-lg font-bold text-slate-950">
                Internet Service
              </h3>
              <p className="text-sm leading-6">
                An ISP outage, WAN connection fault, DNS issue, or remote
                website problem can interrupt internet access.
              </p>
            </div>
          </div>
        </section>

        {/* Attack clarification */}
        <section className="my-12 overflow-hidden rounded-2xl border border-amber-200">
          <div className="flex items-center gap-3 bg-amber-100 px-5 py-4">
            <ShieldAlert className="shrink-0 text-amber-800" size={27} />
            <h2 className="text-xl font-bold text-amber-950 sm:text-2xl">
              Does a Wi-Fi Problem Mean a Cyberattack?
            </h2>
          </div>

          <div className="p-5 sm:p-6">
            <p className="mb-5 leading-7">
              No. Slow internet or sudden disconnections do not automatically
              mean someone is attacking your network. Common technical faults
              should be checked first. Security investigation becomes more
              relevant when there is additional evidence of unauthorized
              access or unexpected configuration changes.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
                <h3 className="mb-3 flex items-center gap-2 font-bold text-emerald-950">
                  <CheckCircle2 size={20} />
                  Common technical causes
                </h3>
                <ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-slate-700">
                  <li>Weak signal or radio interference</li>
                  <li>Router faults or ISP outages</li>
                  <li>Congestion or background downloads</li>
                  <li>Incorrect network settings</li>
                </ul>
              </div>

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
                <h3 className="mb-3 flex items-center gap-2 font-bold text-amber-950">
                  <ShieldAlert size={20} />
                  Signs to investigate
                </h3>
                <ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-slate-700">
                  <li>Unrecognized devices on the network</li>
                  <li>Unexpected router configuration changes</li>
                  <li>Unfamiliar administrator access</li>
                  <li>DNS settings changed without explanation</li>
                </ul>
              </div>
            </div>

            <p className="mt-4 rounded-lg bg-slate-50 p-4 text-sm leading-6 text-slate-600">
              These signs do not prove an attack on their own. Review router
              records if available, change administrator credentials if
              necessary, and keep the router firmware updated.
            </p>
          </div>
        </section>

        {/* Basic method */}
        <section className="my-12">
          <SectionHeading
            eyebrow="Your first response"
            title="Four Checks Before Changing Settings"
            description="Follow this order to avoid unnecessary resets or changes that make the original fault harder to identify."
          />

          <div className="space-y-4">
            {[
              {
                icon: Laptop,
                title: "Check another device",
                text: "If all devices fail, inspect the router or ISP. If only one fails, investigate that device first.",
                color: "bg-blue-100 text-blue-800",
              },
              {
                icon: Cable,
                title: "Inspect the signal and cables",
                text: "Move closer to the router and check the power and WAN cables and status indicators.",
                color: "bg-cyan-100 text-cyan-800",
              },
              {
                icon: Search,
                title: "Test the connection in stages",
                text: "Check the local router, external IP connectivity, and DNS resolution separately.",
                color: "bg-violet-100 text-violet-800",
              },
              {
                icon: RefreshCw,
                title: "Apply one change at a time",
                text: "Reconnect or restart equipment when appropriate, then test the result before making another change.",
                color: "bg-emerald-100 text-emerald-800",
              },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="flex gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5"
                >
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${item.color}`}
                  >
                    <Icon size={23} />
                  </div>
                  <div>
                    <p className="mb-1 text-xs font-bold uppercase tracking-wider text-slate-500">
                      Check {index + 1}
                    </p>
                    <h3 className="text-lg font-bold text-slate-950">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm leading-6">{item.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <AdSlot />

        {/* Problem cards */}
        <section className="my-12">
          <SectionHeading
            eyebrow="Symptoms and solutions"
            title="Common Wi-Fi Problems and How to Fix Them"
            description="Choose the symptom that matches your situation. Start with the simplest checks and move to technical settings only when necessary."
          />

          <div className="space-y-5">
            {problems.map((problem, index) => {
              const Icon = problem.icon;
              const colors = colorStyles[problem.color];

              return (
                <div
                  key={problem.title}
                  className={`overflow-hidden rounded-2xl border ${colors.border} bg-white shadow-sm`}
                >
                  <div className="flex items-start gap-4 p-5 sm:p-6">
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${colors.icon}`}
                    >
                      <Icon size={24} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p
                        className={`mb-2 inline-block rounded-md px-2 py-1 text-xs font-bold uppercase tracking-wider ${colors.label}`}
                      >
                        Problem {String(index + 1).padStart(2, "0")}
                      </p>
                      <h3
                        className={`text-xl font-bold tracking-tight sm:text-2xl ${colors.heading}`}
                      >
                        {problem.title}
                      </h3>

                      <div className="mt-4 rounded-lg bg-slate-50 p-4">
                        <p className="mb-1 text-sm font-bold text-slate-950">
                          Why it happens
                        </p>
                        <p className="text-sm leading-6">{problem.cause}</p>
                      </div>

                      <h4 className="mb-3 mt-5 flex items-center gap-2 font-bold text-slate-950">
                        <CheckCircle2 className="text-emerald-600" size={19} />
                        Steps to fix it
                      </h4>

                      <ol className="space-y-3">
                        {problem.steps.map((step, stepIndex) => (
                          <li
                            key={step}
                            className="flex items-start gap-3 text-sm leading-6"
                          >
                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-xs font-bold text-emerald-800">
                              {stepIndex + 1}
                            </span>
                            <span>{step}</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Commands */}
        <section className="my-12">
          <SectionHeading
            eyebrow="Learn by testing"
            title="Windows Network Troubleshooting Commands"
            description="Open Command Prompt and run these commands to inspect your connection. Replace example values with the actual details from your network."
          />

          <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 p-5 sm:p-7">
            <div className="mb-5 flex items-center gap-3 border-b border-slate-700 pb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-400/15 text-emerald-300">
                <Terminal size={23} />
              </div>
              <div>
                <h3 className="font-bold text-white">Command Prompt</h3>
                <p className="text-sm text-slate-400">
                  Basic network diagnostics
                </p>
              </div>
            </div>

            <div className="space-y-5">
              {commands.map((item, index) => {
                const colors = colorStyles[item.color];

                return (
                  <div
                    key={item.command}
                    className="border-b border-slate-800 pb-5 last:border-0 last:pb-0"
                  >
                    <div className="mb-2 flex flex-wrap items-center gap-2">
                      <span className="text-xs font-bold text-slate-500">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <code className="break-all rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 font-mono text-sm font-semibold text-emerald-300">
                        {item.command}
                      </code>
                    </div>
                    <h4 className="mb-1 font-bold text-white">
                      {item.title}
                    </h4>
                    <p className="text-sm leading-6 text-slate-400">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-5 rounded-xl border border-blue-200 bg-blue-50 p-5">
            <h3 className="mb-2 font-bold text-blue-950">
              Example: locating the failure
            </h3>
            <p className="text-sm leading-6 text-slate-700">
              If your computer can reach the router but cannot reach an
              external IP address, investigate the router's internet
              connection or the ISP. If external IP connectivity works but
              domain names fail to resolve, investigate DNS. These results
              narrow down the possibilities but do not prove a single cause
              on their own.
            </p>
          </div>
        </section>

        {/* Security checklist */}
        <section className="my-12 overflow-hidden rounded-2xl border border-violet-200">
          <div className="flex items-center gap-3 bg-violet-100 px-5 py-4 sm:px-6">
            <ShieldCheck className="text-violet-800" size={26} />
            <h2 className="text-xl font-bold text-violet-950 sm:text-2xl">
              When Should You Check Network Security?
            </h2>
          </div>

          <div className="p-5 sm:p-6">
            <p className="mb-5 leading-7">
              If ordinary troubleshooting does not explain the issue, inspect
              your router's connected-device list, security settings, DNS
              configuration, and available logs.
            </p>

            <div className="grid gap-3 sm:grid-cols-2">
              {[
                "Use WPA2-AES or WPA3 where supported.",
                "Change default administrator credentials.",
                "Install firmware updates from the manufacturer.",
                "Disable WPS or remote administration if unnecessary.",
                "Review unfamiliar devices before blocking them.",
                "Save relevant logs if unauthorized access is suspected.",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-violet-100 bg-violet-50/60 p-4"
                >
                  <CheckCircle2
                    className="mt-0.5 shrink-0 text-violet-700"
                    size={19}
                  />
                  <p className="text-sm leading-6 text-slate-700">{item}</p>
                </div>
              ))}
            </div>

            <p className="mt-5 text-sm leading-6 text-slate-600">
              For business networks, involve the network administrator before
              changing production equipment or resetting a router.
            </p>
          </div>
        </section>

        {/* Factory reset */}
        <section className="my-12 rounded-2xl border border-rose-200 bg-rose-50/70 p-5 sm:p-6">
          <div className="mb-3 flex items-center gap-3">
            <Settings className="text-rose-700" size={25} />
            <h2 className="text-xl font-bold text-rose-950 sm:text-2xl">
              Should You Factory-Reset the Router?
            </h2>
          </div>

          <p className="leading-7">
            Not as your first step. A factory reset erases custom settings and
            may remove the ISP configuration needed to reconnect. Try simpler
            checks first. If a reset becomes necessary, make sure you have the
            details needed to configure the router again.
          </p>
        </section>

        {/* FAQs */}
        <section className="my-12">
          <SectionHeading
            eyebrow="Quick answers"
            title="Frequently Asked Questions"
            description="Short answers to common Wi-Fi troubleshooting questions."
          />

          <div className="space-y-3">
            {[
              {
                question: "Can someone hack my Wi-Fi by making it slow?",
                answer:
                  "Slowness alone is not evidence of hacking. Interference, congestion, and ISP problems are common explanations. Investigate security records and configuration changes if other evidence suggests unauthorized activity.",
              },
              {
                question: "Why does restarting the router sometimes work?",
                answer:
                  "Restarting can clear temporary faults and re-establish connections. It cannot fix every underlying problem, such as a damaged cable, ongoing ISP outage, or incorrect settings.",
              },
              {
                question: "What is the difference between Wi-Fi and internet?",
                answer:
                  "Wi-Fi connects your device to a local wireless network. Internet access also requires a working connection through the router and ISP to the destination service.",
              },
              {
                question: "Are network troubleshooting commands safe?",
                answer:
                  "The diagnostic commands on this page are commonly used to inspect connectivity. Use them on devices and networks you own or are authorized to troubleshoot.",
              },
              {
                question: "When should I contact my ISP?",
                answer:
                  "Contact your ISP when multiple devices lose internet access, the router cannot establish its WAN connection, or an outage appears to affect the service outside your home or office.",
              },
            ].map((faq, index) => (
              <details
                key={faq.question}
                className="group rounded-xl border border-slate-200 bg-white open:border-blue-200 open:bg-blue-50/40"
              >
                <summary className="flex cursor-pointer list-none items-center gap-3 p-4 font-bold text-slate-950 sm:p-5">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-sm font-bold text-blue-800">
                    {index + 1}
                  </span>
                  <span className="flex-1">{faq.question}</span>
                  <CircleHelp
                    className="shrink-0 text-blue-700 transition-transform group-open:rotate-12"
                    size={20}
                  />
                </summary>
                <div className="px-5 pb-5 pl-[3.75rem] text-sm leading-7 text-slate-700">
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
            description="Move from fixing connection problems to understanding the network behind them."
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
                label: "Wireless Networking",
                href: "/networking/wifi-and-routers/wireless-networking",
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
