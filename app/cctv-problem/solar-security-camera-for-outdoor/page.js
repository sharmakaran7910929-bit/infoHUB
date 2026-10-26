
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
  BatteryCharging,
  Signal,
  PackageCheck,
  ChevronDown,
} from "lucide-react";

export const metadata = {
  title:
    "Solar Security Camera for Outdoor Use | XUGA 4G CCTV | PriceTag HUB",
  description:
    "Explore the XUGA Cybernautt X10T-S solar 4G outdoor CCTV camera. Compare features, SIM compatibility, storage, night vision, specifications and buying considerations.",
  alternates: {
    canonical:
      "https://www.pricetag.co.in/cctv-problem/solar-security-camera-for-outdoor",
  },
};

const amazonUrl =
  "https://www.amazon.in/gp/aw/d/B0FWXWR6FY?pd_rd_plhdr=t&hsa_cr_id=0&qid=1793001549&sr=1-1-941ebe59-d25b-49d0-b214-12cc5b66c90f&i=aps&aref=nav_ya_signin&_encoding=UTF8&pd_rd_w=RKcCF&content-id=amzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1%3Aamzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_p=7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_r=BFH16HFXWZYHHJ03KP6R&pd_rd_wg=9gLZX&pd_rd_r=f1cfc659-68b2-4f1c-aa9e-be2338d6f034&linkCode=ll2&tag=pricetaghub-21&linkId=800d4600a32ccf3c30c79b48c289f5bc&ref_=as_li_ss_tl";

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
  ["Memory card", "Not included, according to the listing"],
  ["Power", "Solar panel; electrical power details need checking"],
  ["Mounting", "Wall mount"],
  ["Listed weight", "1.8 kg"],
  ["Warranty", "1 year, as supplied in the product details"],
];

const features = [
  {
    icon: Sun,
    title: "Solar-Assisted Power",
    text: "Designed for outdoor locations where running power cables may be inconvenient. Actual operation depends on sunlight, battery capacity and charging conditions.",
  },
  {
    icon: Signal,
    title: "4G SIM Connectivity",
    text: "Uses cellular connectivity instead of depending exclusively on a home Wi-Fi router. Verify supported SIM operators and signal strength before buying.",
  },
  {
    icon: RotateCw,
    title: "Pan-and-Tilt Viewing",
    text: "Remote camera movement can help you inspect different directions through the mobile application rather than relying on a single fixed angle.",
  },
  {
    icon: Camera,
    title: "Multiple Viewing Lenses",
    text: "The product is advertised as a triple-lens camera. Confirm the purpose of each lens and the actual resolution it produces.",
  },
  {
    icon: Moon,
    title: "Night Monitoring",
    text: "The listing mentions colour night vision and a 20-metre range. Actual visibility depends on illumination, installation and surroundings.",
  },
  {
    icon: Mic,
    title: "Two-Way Audio",
    text: "The advertised microphone and speaker allow listening and speaking through the supported mobile application.",
  },
  {
    icon: ShieldCheck,
    title: "Outdoor Protection",
    text: "The listing claims IP66 protection. Proper mounting, sealed connections and suitable positioning are still important.",
  },
  {
    icon: HardDrive,
    title: "Memory Card Storage",
    text: "The specification lists MicroSD/TF card support up to 128GB. Check recording modes, card compatibility and automatic overwrite settings.",
  },
];

const imageSlots = [
  {
    src: "/solar-camera/solar-camera-2.jfif",
    alt: "XUGA Cybernautt X10T-S outdoor solar CCTV camera product view",
    caption: "Camera design and construction",
  },
  {
    src: "/solar-camera/solar-camera-3.jfif",
    alt: "XUGA solar-assisted 4G CCTV camera showing product features",
    caption: "Product features and camera lenses",
  },
  {
    src: "/solar-camera/solar-camera-4.jfif",
    alt: "XUGA outdoor security camera and solar panel product image",
    caption: "Solar panel and installation details",
  },
  {
    src: "/solar-camera/solar-camera-5.jfif",
    alt: "XUGA Cybernautt outdoor CCTV camera product information",
    caption: "Additional product details",
  },
];

const useCases = [
  {
    icon: ShieldCheck,
    title: "Main Gate or Entrance",
    text: "Check visitors and activity around a gate, driveway or outdoor entrance from your phone.",
  },
  {
    icon: Sun,
    title: "Farm or Agricultural Land",
    text: "Consider monitoring remote areas where mains power or fixed broadband is difficult to arrange.",
  },
  {
    icon: Eye,
    title: "Vacant Property",
    text: "Review activity around a plot, building or property that is not occupied throughout the day.",
  },
  {
    icon: Camera,
    title: "Outdoor Work Area",
    text: "Monitor a suitable worksite or storage area, provided the camera has adequate cellular signal and sunlight.",
  },
  {
    icon: Smartphone,
    title: "Remote Monitoring",
    text: "Check the camera through its supported app, subject to connectivity, power and app functionality.",
  },
  {
    icon: CloudSun,
    title: "Locations With Limited Cabling",
    text: "Solar charging may reduce dependence on continuous mains-power cabling, but does not guarantee uninterrupted operation.",
  },
];

const simChecklist = [
  "Confirm the supported mobile operator in your area.",
  "Check whether the SIM needs activation and a data plan.",
  "Test 4G signal strength at the exact mounting location.",
  "Confirm V380Pro app compatibility and required features.",
  "Ask the seller about SIM size and setup instructions.",
];

const buyingChecklist = [
  "4G SIM operator and local signal compatibility",
  "Solar panel output and internal battery capacity",
  "Actual video resolution and lens behaviour",
  "Memory card support and recording options",
  "App features, notifications and remote viewing",
  "IP66 rating and installation requirements",
  "Warranty, returns and seller support",
  "Current price and included accessories",
];

const faqs = [
  {
    q: "Does this solar security camera need Wi-Fi?",
    a: "The product is advertised as a 4G SIM-based camera, so it is intended to use cellular connectivity rather than requiring a home Wi-Fi router. It still needs compatible mobile service and data for remote access.",
  },
  {
    q: "Will it work with a Jio SIM?",
    a: "The supplied listing details say Airtel 4G is supported and Jio is not recommended. Confirm compatibility with the seller before purchasing, as network compatibility can depend on the device configuration.",
  },
  {
    q: "Does solar power guarantee continuous operation?",
    a: "No. Operation depends on battery capacity, solar charging, weather, sunlight, camera activity and the manufacturer's design. Ask the seller about realistic backup expectations.",
  },
  {
    q: "Does it record true 12MP video?",
    a: "The model name includes 12MP, but the supplied technical table specifies 1080p video. Verify the actual recorded resolution before relying on the 12MP claim.",
  },
  {
    q: "Is a memory card included?",
    a: "The supplied product details list MicroSD/TF card support up to 128GB, but the card is not included. Confirm the current package contents.",
  },
  {
    q: "Can I watch the camera on my phone?",
    a: "The supplied details identify the V380Pro app and smartphone compatibility. Check app setup requirements, supported features and connectivity needs before buying.",
  },
  {
    q: "Is this camera suitable for every outdoor location?",
    a: "Not necessarily. Assess cellular signal, sunlight, mounting position, weather exposure and whether the camera's viewing range suits your property.",
  },
];

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mb-6 sm:mb-8">
      <p className="mb-2 text-xs font-bold uppercase tracking-[0.14em] text-blue-700 sm:text-sm">
        {eyebrow}
      </p>

      <h2 className="text-2xl font-bold leading-tight tracking-tight text-slate-950 sm:text-3xl lg:text-4xl">
        {title}
      </h2>

      {description && (
        <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
          {description}
        </p>
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
      className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-orange-500 px-5 py-3 text-center text-sm font-bold text-white transition-colors hover:bg-orange-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 sm:w-auto sm:text-base"
    >
      {children}
      <ArrowUpRight size={18} aria-hidden="true" />
    </a>
  );
}

function ProductImage({ src, alt, priority = false, className = "" }) {
  return (
    <div
      className={`flex w-full items-center justify-center overflow-hidden bg-white ${className}`}
    >
      <img
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        decoding="async"
        className="block h-auto max-h-[460px] w-full max-w-full object-contain"
      />
    </div>
  );
}

function InfoCard({ icon: Icon, title, text }) {
  return (
    <article className="h-full rounded-2xl border border-slate-200 bg-white p-4 transition-shadow hover:shadow-sm sm:p-5">
      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-700 sm:h-11 sm:w-11">
        <Icon size={22} aria-hidden="true" />
      </div>

      <h3 className="text-base font-bold leading-snug text-slate-950 sm:text-lg">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
    </article>
  );
}

export default function SolarSecurityCameraPage() {
  return (
    <main className="min-h-screen overflow-x-clip bg-white text-slate-900">
      {/* HERO */}
      <section className="bg-gradient-to-br from-sky-50 via-white to-blue-50">
        <div className="mx-auto grid max-w-7xl items-start gap-7 px-4 py-7 sm:px-6 sm:py-10 lg:grid-cols-2 lg:items-center lg:gap-12 lg:px-8 lg:py-14">
          <div className="min-w-0">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.13em] text-blue-700 sm:text-sm">
              PriceTag HUB · Outdoor Security
            </p>

            <h1 className="text-3xl font-bold leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Solar Security Camera for Outdoor Use: XUGA 4G CCTV
            </h1>

            <p className="mt-4 text-sm leading-7 text-slate-600 sm:mt-5 sm:text-base lg:text-lg">
              Need to monitor a gate, farm, outdoor entrance or property where
              Wi-Fi is unavailable? Explore this solar-assisted 4G security
              camera and understand its features, limitations and buying
              considerations before ordering.
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {["Solar-Assisted", "4G SIM", "PTZ Viewing", "Night Vision"].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-full border border-blue-100 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 sm:text-sm"
                  >
                    {item}
                  </span>
                )
              )}
            </div>

            <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:mt-7 sm:p-5">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold text-slate-500 sm:text-sm">
                    Previously supplied listing price
                  </p>
                  <p className="mt-1 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                    ₹8,949
                  </p>
                </div>

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
                  <PackageCheck size={24} aria-hidden="true" />
                </div>
              </div>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                This is not a verified live price. Check the current Amazon
                listing for price, delivery availability, warranty and return
                terms.
              </p>

              <div className="mt-4">
                <BuyButton />
              </div>
            </div>

            
          </div>

          {/* MAIN PRODUCT IMAGE */}
          <div className="min-w-0 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <ProductImage
              src="/solar-camera/solar-camera-1.jpg"
              alt="XUGA Cybernautt X10T-S solar-assisted 4G outdoor CCTV camera"
              priority
              className="min-h-[240px] px-2 py-3 sm:min-h-[360px] sm:px-5 sm:py-5 lg:min-h-[430px]"
            />

            <div className="border-t border-slate-100 p-4 sm:p-5">
              <h2 className="text-base font-bold text-slate-950 sm:text-lg">
                XUGA Cybernautt Series X10T-S
              </h2>

              <p className="mt-1 text-sm leading-6 text-slate-600">
                Advertised as a triple-lens, solar-assisted outdoor camera
                with cellular connectivity.
              </p>

              <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
                {[
                  { icon: Sun, label: "Solar" },
                  { icon: Signal, label: "4G SIM" },
                  { icon: RotateCw, label: "PTZ" },
                  { icon: Moon, label: "Night vision" },
                ].map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-2 rounded-lg bg-slate-50 px-2 py-2.5 text-xs font-semibold text-slate-700 sm:justify-center"
                  >
                    <Icon
                      size={16}
                      className="shrink-0 text-blue-700"
                      aria-hidden="true"
                    />
                    {label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK OVERVIEW */}
      <section className="mx-auto max-w-7xl px-4 py-9 sm:px-6 sm:py-12 lg:px-8">
        <SectionHeading
          eyebrow="01 · At a glance"
          title="What Does This Outdoor 4G Camera Offer?"
          description="The XUGA X10T-S is marketed for outdoor monitoring with solar charging, cellular connectivity and remote camera control."
        />

        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {[
            {
              icon: Sun,
              value: "Solar",
              label: "Solar-assisted power",
            },
            {
              icon: Camera,
              value: "PTZ",
              label: "Remote camera movement",
            },
            {
              icon: Smartphone,
              value: "4G SIM",
              label: "Cellular connection",
            },
            {
              icon: Moon,
              value: "Night",
              label: "Night-monitoring features",
            },
          ].map(({ icon: Icon, value, label }) => (
            <div
              key={value}
              className="rounded-2xl border border-slate-200 p-3.5 transition-shadow hover:shadow-sm sm:p-5"
            >
              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-700 sm:mb-4 sm:h-11 sm:w-11">
                <Icon size={21} aria-hidden="true" />
              </div>

              <h3 className="text-lg font-bold sm:text-xl">{value}</h3>

              <p className="mt-1 text-xs leading-5 text-slate-600 sm:text-sm sm:leading-6">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* USE CASES */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-9 sm:px-6 sm:py-12 lg:px-8">
          <SectionHeading
            eyebrow="02 · Where it may help"
            title="Is This Solar Security Camera Suitable for Your Property?"
            description="It may be worth considering if you need remote outdoor monitoring and have reliable cellular coverage and sufficient sunlight."
          />

          <div className="grid gap-3 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
            {useCases.map((item) => (
              <InfoCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="mx-auto max-w-7xl px-4 py-9 sm:px-6 sm:py-12 lg:px-8">
        <SectionHeading
          eyebrow="03 · Features explained"
          title="Important Features Before You Buy"
          description="Product listings can use broad marketing terms. Understand what each feature means in everyday use and confirm the exact capability with the seller."
        />

        <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
          {features.map((item) => (
            <article
              key={item.title}
              className="flex h-full gap-3 rounded-2xl border border-slate-200 p-4 sm:gap-4 sm:p-5"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700 sm:h-11 sm:w-11">
                <item.icon size={21} aria-hidden="true" />
              </div>

              <div className="min-w-0">
                <h3 className="text-sm font-bold leading-6 text-slate-950 sm:text-base">
                  {item.title}
                </h3>

                <p className="mt-1.5 text-sm leading-6 text-slate-600">
                  {item.text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* RESPONSIVE PRODUCT GALLERY */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-9 sm:px-6 sm:py-12 lg:px-8">
          <SectionHeading
            eyebrow="04 · Product gallery"
            title="Explore the Camera from Different Angles"
            description="Review the available product photographs to understand the camera's design, advertised features and installation components."
          />

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
            {imageSlots.map((item, index) => (
              <figure
                key={item.src}
                className="min-w-0 overflow-hidden rounded-2xl border border-slate-200 bg-white transition-shadow hover:shadow-md"
              >
                <ProductImage
                  src={item.src}
                  alt={item.alt}
                  className="aspect-[4/3] p-2 sm:p-3"
                />

                <figcaption className="border-t border-slate-100 p-4">
                  <p className="text-xs font-bold uppercase tracking-wider text-blue-700">
                    Product Image {index + 2}
                  </p>

                  <p className="mt-1 text-sm font-bold leading-6 text-slate-800">
                    {item.caption}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>

          <p className="mt-4 text-xs leading-5 text-slate-500">
            Product images are provided for reference. Check the current
            seller listing to confirm exactly which accessories are included.
          </p>
        </div>
      </section>

      {/* SIM AND CONNECTIVITY */}
      <section className="mx-auto max-w-7xl px-4 py-9 sm:px-6 sm:py-12 lg:px-8">
        <SectionHeading
          eyebrow="05 · Connectivity"
          title="Check 4G SIM Compatibility Before Ordering"
          description="A SIM-based camera can work without a home Wi-Fi router, but remote access still depends on cellular service and a suitable data plan."
        />

        <div className="grid gap-4 lg:grid-cols-2 lg:gap-6">
          <div className="rounded-2xl border border-slate-200 p-4 sm:p-6">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                <Smartphone size={22} aria-hidden="true" />
              </div>

              <h3 className="text-base font-bold sm:text-lg">
                Before Inserting a SIM
              </h3>
            </div>

            <ul className="space-y-3">
              {simChecklist.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-sm leading-6 text-slate-700"
                >
                  <CheckCircle2
                    className="mt-1 shrink-0 text-emerald-600"
                    size={17}
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4 sm:p-6">
            <div className="mb-3 flex items-center gap-2 text-amber-900">
              <AlertTriangle size={23} aria-hidden="true" />
              <h3 className="text-base font-bold sm:text-lg">
                Important SIM Warning
              </h3>
            </div>

            <p className="text-sm leading-7 text-slate-700">
              The supplied Amazon listing details indicate Airtel 4G support
              and say Jio is not recommended. Treat this as a compatibility
              point to verify with the seller before purchasing. Do not assume
              every 4G SIM will work with the camera.
            </p>

            <div className="mt-5">
              <BuyButton>Check SIM Compatibility</BuyButton>
            </div>
          </div>
        </div>
      </section>

      {/* SOLAR POWER */}
      <section className="bg-gradient-to-br from-blue-50 to-white">
        <div className="mx-auto max-w-7xl px-4 py-9 sm:px-6 sm:py-12 lg:px-8">
          <SectionHeading
            eyebrow="06 · Solar power"
            title="Will a Solar CCTV Camera Work Every Day?"
            description="Performance depends on the battery, panel output, daily sunlight, camera activity and weather conditions."
          />

          <div className="grid gap-3 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
            <InfoCard
              icon={Sun}
              title="Sunlight Exposure"
              text="Choose a position with adequate direct sunlight. Check whether nearby trees, walls or buildings shade the panel."
            />

            <InfoCard
              icon={BatteryCharging}
              title="Battery and Charging"
              text="Ask the seller for battery capacity, charging details and expected backup during cloudy weather."
            />

            <InfoCard
              icon={CloudSun}
              title="Real-World Conditions"
              text="Frequent motion events, night illumination and weak cellular signals may affect power consumption and reliability."
            />
          </div>

          <div className="mt-5 flex items-start gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-4 sm:mt-6 sm:p-5">
            <AlertTriangle
              className="mt-0.5 shrink-0 text-amber-700"
              size={22}
              aria-hidden="true"
            />

            <p className="text-sm leading-7 text-slate-700">
              <strong>Power specification to verify:</strong> The product is
              marketed as solar-powered, but the supplied details also list
              corded electric power. Confirm whether the solar panel charges
              an internal battery, whether an adapter is required and what
              backup time is realistic. Solar-assisted does not automatically
              mean maintenance-free or uninterrupted operation.
            </p>
          </div>
        </div>
      </section>

      {/* SPECIFICATIONS */}
      <section className="mx-auto max-w-7xl px-4 py-9 sm:px-6 sm:py-12 lg:px-8">
        <SectionHeading
          eyebrow="07 · Specifications"
          title="XUGA Cybernautt X10T-S Specifications"
          description="These details are based on the product information supplied for this page. Verify conflicting or unclear specifications on the current listing before buying."
        />

        <div className="overflow-hidden rounded-2xl border border-slate-200">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[340px] border-collapse text-left text-sm">
              <thead className="bg-slate-900 text-white">
                <tr>
                  <th scope="col" className="w-[40%] px-3 py-3.5 font-bold sm:px-5 sm:py-4">
                    Specification
                  </th>
                  <th scope="col" className="px-3 py-3.5 font-bold sm:px-5 sm:py-4">
                    Listed Details
                  </th>
                </tr>
              </thead>

              <tbody>
                {specifications.map(([label, value], index) => (
                  <tr
                    key={label}
                    className={
                      index % 2 === 0 ? "bg-white" : "bg-slate-50"
                    }
                  >
                    <th
                      scope="row"
                      className="px-3 py-3 text-left align-top font-semibold leading-6 text-slate-800 sm:px-5"
                    >
                      {label}
                    </th>

                    <td className="px-3 py-3 align-top leading-6 text-slate-600 sm:px-5">
                      {value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-4 flex items-start gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-4 sm:mt-5 sm:p-5">
          <CircleHelp
            className="mt-0.5 shrink-0 text-amber-700"
            size={22}
            aria-hidden="true"
          />

          <p className="text-sm leading-7 text-slate-700">
            <strong>Resolution and zoom clarification:</strong> The model name
            includes 12MP, while the supplied technical table says 1080p video
            and 10X digital zoom. These details do not establish true 12MP
            recorded video or 10X optical zoom. Confirm the actual recording
            resolution and zoom type with the seller.
          </p>
        </div>
      </section>

      {/* BUYING CHECKLIST */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-9 sm:px-6 sm:py-12 lg:px-8">
          <SectionHeading
            eyebrow="08 · Buying checklist"
            title="What Should You Check Before Buying?"
            description="Use this checklist to compare the product details before placing an order."
          />

          <div className="grid gap-3 sm:grid-cols-2">
            {buyingChecklist.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-3.5 sm:p-4"
              >
                <CheckCircle2
                  className="mt-0.5 shrink-0 text-emerald-600"
                  size={20}
                  aria-hidden="true"
                />

                <span className="text-sm leading-6 text-slate-700">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-4 py-9 sm:px-6 sm:py-12 lg:px-8">
        <SectionHeading
          eyebrow="09 · Common questions"
          title="Frequently Asked Questions"
          description="Answers to common questions about installation, connectivity and the advertised specifications."
        />

        <div className="space-y-3">
          {faqs.map(({ q, a }) => (
            <details
              key={q}
              className="group rounded-xl border border-slate-200 bg-white open:border-blue-200"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-4 text-sm font-bold leading-6 text-slate-900 marker:hidden sm:p-5 sm:text-base [&::-webkit-details-marker]:hidden">
                <span>{q}</span>

                <ChevronDown
                  size={20}
                  className="shrink-0 text-blue-700 transition-transform group-open:rotate-180"
                  aria-hidden="true"
                />
              </summary>

              <div className="px-4 pb-4 sm:px-5 sm:pb-5">
                <p className="text-sm leading-7 text-slate-600">{a}</p>
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-4 pb-10 sm:px-6 sm:pb-14 lg:px-8">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl bg-slate-950 px-5 py-7 text-white sm:rounded-3xl sm:px-9 sm:py-10 lg:px-10 lg:py-12">
          <div className="grid items-center gap-6 md:grid-cols-[1fr_auto] md:gap-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-sky-300 sm:text-sm">
                Check the latest listing
              </p>

              <h2 className="mt-3 text-2xl font-bold leading-tight sm:text-3xl">
                Considering the XUGA Solar 4G CCTV Camera?
              </h2>

              <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-base">
                Review the current price, delivery options, supported SIM
                operators, warranty and product details before making your
                decision.
              </p>
            </div>

            <div className="w-full md:w-auto">
              <BuyButton>View on Amazon</BuyButton>

              <p className="mt-3 text-center text-xs leading-5 text-slate-400">
                Price and availability may change.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED GUIDES */}
      <section className="border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 py-7 sm:px-6 sm:py-9 lg:px-8">
          <h2 className="text-lg font-bold text-slate-950 sm:text-xl">
            Explore Related CCTV Guides
          </h2>

          <div className="mt-4 grid gap-3 sm:grid-cols-2 sm:gap-4">
            <Link
              href="/cctv-problem/best-4g-sim-cctv-camera-without-wifi"
              className="group flex min-h-24 items-start justify-between gap-3 rounded-xl border border-slate-200 p-4 transition-colors hover:border-blue-300 hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              <div>
                <h3 className="text-sm font-bold leading-6 text-blue-700 sm:text-base">
                  Best 4G SIM CCTV Camera Without Wi-Fi
                </h3>

                <p className="mt-1 text-sm leading-6 text-slate-600">
                  Understand cellular cameras for locations without Wi-Fi.
                </p>
              </div>

              <ArrowUpRight
                size={19}
                className="mt-1 shrink-0 text-blue-700 transition-transform group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>

            <Link
              href="/cctv-problem/best-indoor-security-camera-for-home"
              className="group flex min-h-24 items-start justify-between gap-3 rounded-xl border border-slate-200 p-4 transition-colors hover:border-blue-300 hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              <div>
                <h3 className="text-sm font-bold leading-6 text-blue-700 sm:text-base">
                  Best Indoor Security Camera for Home
                </h3>

                <p className="mt-1 text-sm leading-6 text-slate-600">
                  Explore cameras designed for indoor monitoring.
                </p>
              </div>

              <ArrowUpRight
                size={19}
                className="mt-1 shrink-0 text-blue-700 transition-transform group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
