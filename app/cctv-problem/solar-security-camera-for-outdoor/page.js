import Link from "next/link";
import {
  Sun,
  Wifi,
  ShieldCheck,
  RotateCw,
  Eye,
  Moon,
  Smartphone,
  Mic,
  CloudSun,
  HardDrive,
  CheckCircle2,
  AlertTriangle,
  ArrowUpRight,
  Camera,
  Zap,
  CircleHelp,
} from "lucide-react";

export const metadata = {
  title:
    "Solar Security Camera for Outdoor Use| XUGA 4G CCTV | PriceTag HUB",
  description:
    "Explore the XUGA Cybernautt X10T-S solar 4G outdoor CCTV camera, its features, specifications, SIM compatibility, storage, and buying considerations.",
  alternates: {
    canonical:
      "https://www.pricetag.co.in/cctv-problem/solar-security-camera-for-outdoor",
  },
};

const amazonUrl =
"https://www.amazon.in/gp/aw/d/B0FWXWR6FY?pd_rd_plhdr=t&hsa_cr_id=0&qid=1793001549&sr=1-1-941ebe59-d25b-49d0-b214-12cc5b66c90f&i=aps&aref=nav_ya_signin&_encoding=UTF8&pd_rd_w=RKcCF&content-id=amzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1%3Aamzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_p=7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_r=BFH16HFXWZYHHJ03KP6R&pd_rd_wg=9gLZX&pd_rd_r=f1cfc659-68b2-4f1c-aa9e-be2338d6f034&linkCode=ll2&tag=pricetaghub-21&linkId=800d4600a32ccf3c30c79b48c289f5bc&ref_=as_li_ss_tl"

const specifications = [
  ["Brand / Model", "XUGA Cybernautt X10T-S"],
  ["Camera type", "Outdoor solar-assisted 4G PTZ CCTV"],
  ["Advertised camera resolution", "12MP product name; verify actual output"],
  ["Video resolution in specification table", "1080p"],
  ["Viewing coverage", "Advertised 360° coverage"],
  ["Pan and tilt", "355° pan / 90° tilt, as listed"],
  ["Zoom", "10X digital zoom in the specification table"],
  ["Connectivity", "Cellular 4G SIM"],
  ["Mobile application", "V380Pro"],
  ["Night vision", "Colour night vision; listed range 20 metres"],
  ["Audio", "Two-way audio"],
  ["Detection", "Motion and human detection listed"],
  ["Weather protection", "IP66 rating claimed in the listing"],
  ["Storage", "MicroSD / TF card, up to 128GB listed"],
  ["Memory card", "Not included, according to the product listing"],
  ["Power", "Solar panel and electrical power details need checking"],
  ["Mounting", "Wall mount"],
  ["Listed weight", "1.8 kg"],
  ["Warranty", "1 year, as supplied in the product details"],
];

const features = [
  {
    icon: Sun,
    title: "Solar-assisted outdoor monitoring",
    text: "Designed for locations where running a power cable may be inconvenient. Actual operation depends on sunlight, battery design and charging conditions.",
  },
  {
    icon: Wifi,
    title: "4G SIM connectivity",
    text: "Uses cellular connectivity rather than relying exclusively on a home Wi-Fi router. Confirm supported SIM operators before buying.",
  },
  {
    icon: RotateCw,
    title: "Pan-and-tilt viewing",
    text: "Remote camera movement can help you check different directions from the app instead of viewing only one fixed angle.",
  },
  {
    icon: Eye,
    title: "Multiple viewing lenses",
    text: "The product is advertised as a triple-lens camera. Confirm how each lens works and what resolution each produces.",
  },
  {
    icon: Moon,
    title: "Night monitoring",
    text: "The listing mentions colour night vision and a 20-metre night-vision range. Results depend on the surroundings and available illumination.",
  },
  {
    icon: Mic,
    title: "Two-way audio",
    text: "A built-in microphone and speaker are advertised for listening and speaking through the mobile application.",
  },
  {
    icon: ShieldCheck,
    title: "Outdoor-rated enclosure",
    text: "The listing claims IP66 protection. Correct installation, sealed cable connections and suitable positioning remain important.",
  },
  {
    icon: HardDrive,
    title: "Local memory-card storage",
    text: "The specification lists MicroSD/TF card storage up to 128GB. Check recording modes, card compatibility and overwrite behaviour.",
  },
];

const imageSlots = [
  {
    src: "/solar-camera/solar-camera-2.jfif",
    alt: "",
    caption: "",
  },
  {
    src: "/solar-camera/solar-camera-3.jfif",
    alt: "",
    caption: "",
  },
  {
    src: "/solar-camera/solar-camera-4.jfif",
    alt: "",
    caption: "",
  },
  {
    src: "/solar-camera/solar-camera-5.jfif",
    alt: "",
    caption: "",
  },
  
];

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mb-8 max-w-3xl">
      <p className="mb-2 text-sm font-bold uppercase tracking-wider text-blue-700">
        {eyebrow}
      </p>
      <h2 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 leading-7 text-slate-600">{description}</p>
      )}
    </div>
  );
}

function BuyButton({ children = "Check Price on Amazon" }) {
  return (
    <a
      href={amazonUrl}
      target="_blank"
      rel="sponsored nofollow noopener noreferrer"
      className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-orange-500 px-5 py-3 text-center font-bold text-white transition hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
    >
      {children}
      <ArrowUpRight size={18} />
    </a>
  );
}


function ProductImage({ src, alt, priority = false }) {
  return (
    <div className="relative w-full overflow-hidden bg-white">
      <img
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        className="block h-auto w-full max-w-full object-contain"
      />
    </div>
  );
}


export default function SolarSecurityCameraPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* HERO */}
      <section className="bg-gradient-to-br from-sky-50 via-white to-blue-50">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-10 sm:px-6 sm:py-14 lg:grid-cols-2 lg:gap-12 lg:px-8">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-wider text-blue-700">
              PriceTag HUB · Outdoor Security
            </p>

            <h1 className="text-3xl font-bold leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Solar Security Camera for Outdoor Use: XUGA 4G CCTV
            </h1>

            <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
              Looking to monitor a gate, outdoor entrance, farm or property
              where Wi-Fi is unavailable? Explore this solar-assisted 4G
              security camera and understand its features and limitations
              before buying.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {["Solar-assisted", "4G SIM", "PTZ viewing", "Night vision"].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-full border border-blue-100 bg-white px-3 py-1.5 text-sm font-semibold text-slate-700"
                  >
                    {item}
                  </span>
                )
              )}
            </div>

            <div className="mt-7 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-sm text-slate-500">
                Listed price supplied for this guide
              </p>
              <div className="mt-1 flex flex-wrap items-baseline gap-3">
                <span className="text-3xl font-bold text-slate-950">
                  ₹8,949
                </span>
                <span className="text-sm text-slate-500">
                  Amazon price may change
                </span>
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Check the current price, delivery availability, warranty and
                return terms on the seller's listing before ordering.
              </p>
              <div className="mt-4">
                <BuyButton />
              </div>
            </div>

            
          </div>

          {/* MAIN IMAGE: solar-camera-1 */}
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <ProductImage
              src="/solar-camera/solar-camera-1.jpg"
              alt="XUGA Cybernautt X10T-S solar-assisted 4G outdoor CCTV camera"
              priority
            />
            <div className="p-4 sm:p-5">
              <p className="font-bold text-slate-950">
                XUGA Cybernautt Series X10T-S
              </p>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                Triple-lens, solar-assisted outdoor camera with cellular
                connectivity advertised by the seller.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK OVERVIEW */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="01 · At a glance"
          title="What Does This Outdoor 4G Camera Offer?"
          description="The XUGA X10T-S is marketed for outdoor monitoring with solar charging, cellular connectivity and remote camera control. Here are the main features to assess."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Sun, value: "Solar", label: "Solar-assisted power" },
            { icon: Camera, value: "PTZ", label: "Remote camera movement" },
            { icon: Smartphone, value: "4G SIM", label: "Cellular connection" },
            { icon: Moon, value: "Night", label: "Night-monitoring features" },
          ].map(({ icon: Icon, value, label }) => (
            <div
              key={value}
              className="rounded-2xl border border-slate-200 p-5 transition hover:border-blue-200 hover:shadow-sm"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                <Icon size={23} />
              </div>
              <h3 className="text-xl font-bold">{value}</h3>
              <p className="mt-1 text-sm leading-6 text-slate-600">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* USE CASES */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="02 · Where it may help"
            title="Is This Solar Security Camera Suitable for Your Property?"
            description="It may be worth considering if you need remote viewing in an outdoor location and can provide reliable cellular coverage."
          />

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: ShieldCheck,
                title: "Main gate or entrance",
                text: "Check visitors and activity near a gate, driveway or entrance from your phone.",
              },
              {
                icon: Sun,
                title: "Farm or agricultural land",
                text: "Consider monitoring a remote area where mains power or a fixed broadband connection is difficult to arrange.",
              },
              {
                icon: Eye,
                title: "Vacant property",
                text: "Review activity around a plot, building or property that is not occupied throughout the day.",
              },
              {
                icon: Camera,
                title: "Outdoor work area",
                text: "Monitor a suitable worksite or storage area, provided the camera has adequate signal and sunlight.",
              },
              {
                icon: Smartphone,
                title: "Remote checking",
                text: "Use the supported app to check the camera remotely, subject to working connectivity and the app's features.",
              },
              {
                icon: CloudSun,
                title: "Places with limited cabling",
                text: "Solar charging may reduce dependence on continuous mains-power cabling, but it does not guarantee uninterrupted operation.",
              },
            ].map(({ icon: Icon, title, text }) => (
              <article
                key={title}
                className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6"
              >
                <Icon className="mb-4 text-blue-700" size={27} />
                <h3 className="text-lg font-bold text-slate-950">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="03 · Features explained"
          title="Important Features Before You Buy"
          description="Product listings can use broad marketing terms. Understand what each feature means for everyday use, and confirm the exact capability with the seller."
        />

        <div className="grid gap-4 md:grid-cols-2">
          {features.map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              className="flex gap-4 rounded-2xl border border-slate-200 p-5"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                <Icon size={22} />
              </div>
              <div>
                <h3 className="font-bold text-slate-950">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* PRODUCT IMAGES 2–6 */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="04 · Product gallery"
            title="Explore the Camera from Different Angles"
            description="Add the original product photographs to these six image slots. Each gallery image uses the full available width, a consistent responsive height and object-cover cropping."
          />

          <div className="space-y-6">
            {imageSlots.map((item, index) => (
              <figure
                key={item.src}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white"
              >
                <ProductImage src={item.src} alt={item.alt} />
                <figcaption className="p-4 text-sm font-semibold text-slate-700 sm:p-5">
                  Image {index + 2}: {item.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* SIM AND CONNECTIVITY */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="05 · Connectivity"
          title="Check 4G SIM Compatibility Before Ordering"
          description="A SIM-based camera can work without a home Wi-Fi router, but remote access still depends on cellular service and an appropriate data plan."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 p-5 sm:p-6">
            <div className="mb-4 flex items-center gap-3">
              <Smartphone className="text-blue-700" size={26} />
              <h3 className="text-lg font-bold">Before inserting a SIM</h3>
            </div>
            <ul className="space-y-3 text-sm leading-6 text-slate-700">
              {[
                "Confirm the supported mobile operator for your location.",
                "Check whether the SIM must be activated and have a data plan.",
                "Test 4G signal strength at the exact mounting location.",
                "Confirm whether the V380Pro app supports all the advertised features.",
                "Ask whether the camera requires a specific SIM size or setup process.",
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <CheckCircle2
                    className="mt-1 shrink-0 text-emerald-600"
                    size={17}
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5 sm:p-6">
            <div className="mb-3 flex items-center gap-2 text-amber-900">
              <AlertTriangle size={24} />
              <h3 className="text-lg font-bold">Important SIM warning</h3>
            </div>
            <p className="text-sm leading-7 text-slate-700">
              The supplied Amazon listing details indicate Airtel 4G support
              and say Jio is not recommended. Treat this as a compatibility
              point to verify with the seller before purchasing. Do not assume
              every 4G SIM will work just because the camera is cellular-based.
            </p>
            <div className="mt-5">
              <BuyButton>Check Listing and Seller Details</BuyButton>
            </div>
          </div>
        </div>
      </section>

      {/* POWER */}
      <section className="bg-gradient-to-br from-blue-50 to-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="06 · Solar power"
            title="Will a Solar CCTV Camera Work Every Day?"
            description="Solar power is useful for outdoor installation, but performance depends on the actual battery capacity, panel output, daily sunlight, camera activity and weather."
          />

          <div className="grid gap-5 md:grid-cols-3">
            <article className="rounded-2xl border border-blue-100 bg-white p-5">
              <Sun className="mb-4 text-amber-500" size={28} />
              <h3 className="font-bold">Sunlight exposure</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Choose a position with adequate direct sunlight and check
                whether nearby trees, walls or buildings shade the panel.
              </p>
            </article>

            <article className="rounded-2xl border border-blue-100 bg-white p-5">
              <Zap className="mb-4 text-blue-700" size={28} />
              <h3 className="font-bold">Battery and charging</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Ask the seller for battery capacity, charging details and
                expected backup during cloudy weather.
              </p>
            </article>

            <article className="rounded-2xl border border-blue-100 bg-white p-5">
              <CloudSun className="mb-4 text-blue-700" size={28} />
              <h3 className="font-bold">Real-world conditions</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Frequent motion events, night illumination and weak cellular
                signals may affect power consumption and reliability.
              </p>
            </article>
          </div>

          <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5">
            <p className="text-sm leading-7 text-slate-700">
              <strong>Power specification to verify:</strong> The product is
              marketed as solar-powered, but the supplied details also list
              “corded electric” as its power source. Confirm whether the solar
              panel charges an internal battery, whether an adapter is required,
              and what backup time is realistic. Solar-assisted does not
              automatically mean maintenance-free or uninterrupted operation.
            </p>
          </div>
        </div>
      </section>

      {/* SPECIFICATIONS */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="07 · Specifications"
          title="XUGA Cybernautt X10T-S Specifications"
          description="These details are based on the product information supplied for this page. Verify conflicting or unclear specifications on the current listing before buying."
        />

        <div className="overflow-hidden rounded-2xl border border-slate-200">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[320px] border-collapse text-left text-sm">
              <thead className="bg-slate-900 text-white">
                <tr>
                  <th className="px-4 py-4 font-bold sm:px-5">Specification</th>
                  <th className="px-4 py-4 font-bold sm:px-5">Listed details</th>
                </tr>
              </thead>
              <tbody>
                {specifications.map(([label, value], index) => (
                  <tr
                    key={label}
                    className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}
                  >
                    <th className="w-2/5 px-4 py-3 font-semibold text-slate-800 sm:px-5">
                      {label}
                    </th>
                    <td className="px-4 py-3 leading-6 text-slate-600 sm:px-5">
                      {value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-5 flex gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4">
          <CircleHelp
            className="mt-0.5 shrink-0 text-amber-700"
            size={22}
          />
          <p className="text-sm leading-6 text-slate-700">
            <strong>Resolution and zoom clarification:</strong> The model name
            includes “12MP,” while the supplied technical table says 1080p
            video and 10X digital zoom. These details do not establish true
            12MP recorded video or 10X optical zoom. Confirm actual recording
            resolution and zoom type with the seller.
          </p>
        </div>
      </section>

      {/* BUYING CHECKLIST */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="08 · Buying checklist"
            title="What Should You Check Before Buying?"
            description="A short checklist can help prevent surprises after installation."
          />

          <div className="grid gap-3 sm:grid-cols-2">
            {[
              "4G SIM operator and local signal compatibility",
              "Solar panel output and internal battery capacity",
              "Actual video resolution and lens behaviour",
              "Memory card support and recording options",
              "App features, notifications and remote viewing",
              "IP66 rating and installation requirements",
              "Warranty, returns and seller support",
              "Current price and included accessories",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4"
              >
                <CheckCircle2
                  className="mt-0.5 shrink-0 text-emerald-600"
                  size={20}
                />
                <span className="text-sm leading-6 text-slate-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="09 · Common questions"
          title="Frequently Asked Questions"
        />

        <div className="space-y-3">
          {[
            {
              q: "Does this solar security camera need Wi-Fi?",
              a: "The product is advertised as a 4G SIM-based camera, so it is intended to use cellular connectivity rather than requiring a home Wi-Fi router. It still needs compatible mobile service and data for remote access.",
            },
            {
              q: "Will it work with a Jio SIM?",
              a: "The supplied listing details say Airtel 4G is supported and Jio is not recommended. Confirm compatibility with the seller before purchasing.",
            },
            {
              q: "Does solar power guarantee continuous operation?",
              a: "No. Operation depends on battery capacity, solar charging, weather, sunlight, camera activity and the manufacturer's design. Ask the seller for realistic backup expectations.",
            },
            {
              q: "Does it record true 12MP video?",
              a: "The model name includes 12MP, but the supplied technical table specifies 1080p video. Verify the actual recorded resolution before relying on the 12MP claim.",
            },
            {
              q: "Is a memory card included?",
              a: "The supplied product details say a MicroSD/TF card is supported up to 128GB, but the card is not included. Confirm the current package contents.",
            },
            {
              q: "Can I watch the camera on my phone?",
              a: "The supplied details identify the V380Pro app and smartphone compatibility. Check app setup requirements, supported features and connectivity needs before buying.",
            },
            {
              q: "Is this camera suitable for every outdoor location?",
              a: "Not necessarily. Assess cellular signal, sunlight, mounting position, exposure to weather and whether the camera's field of view suits your property.",
            },
          ].map(({ q, a }) => (
            <details
              key={q}
              className="group rounded-xl border border-slate-200 bg-white p-4 open:border-blue-200 sm:p-5"
            >
              <summary className="cursor-pointer list-none font-bold text-slate-900">
                <span className="flex items-center justify-between gap-4">
                  {q}
                  <span className="text-xl text-blue-700 transition group-open:rotate-45">
                    +
                  </span>
                </span>
              </summary>
              <p className="mt-3 text-sm leading-7 text-slate-600">{a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-4 pb-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl bg-slate-950 px-5 py-9 text-white sm:px-9 sm:py-12">
          <div className="grid items-center gap-7 md:grid-cols-[1fr_auto]">
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-sky-300">
                Check the latest listing
              </p>
              <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
                Considering the XUGA Solar 4G CCTV Camera?
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300">
                Review the latest price, delivery options, supported SIM
                operators, warranty and product details before making your
                decision.
              </p>
            </div>
            <div>
              <BuyButton>View on Amazon</BuyButton>
              <p className="mt-3 text-xs text-slate-400">
                Price and availability may change.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED GUIDE */}
      <section className="border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <h2 className="text-lg font-bold">Explore Related CCTV Guides</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <Link
              href="/cctv-problem/best-4g-sim-cctv-camera-without-wifi"
              className="rounded-xl border border-slate-200 p-4 font-semibold text-blue-700 transition hover:border-blue-300 hover:bg-blue-50"
            >
              Best 4G SIM CCTV Camera Without Wi-Fi
              <span className="mt-1 block text-sm font-normal text-slate-600">
                Understand cellular cameras for places without Wi-Fi.
              </span>
            </Link>
            <Link
              href="/cctv-problem/best-indoor-security-camera-for-home"
              className="rounded-xl border border-slate-200 p-4 font-semibold text-blue-700 transition hover:border-blue-300 hover:bg-blue-50"
            >
              Best Indoor Security Camera for Home
              <span className="mt-1 block text-sm font-normal text-slate-600">
                Explore cameras for indoor monitoring.
              </span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
