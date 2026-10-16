import Link from "next/link";
import {
  Camera,
  Wifi,
  Smartphone,
  Moon,
  Mic,
  HardDrive,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Home,
  Eye,
  Wallet,
  LockKeyhole,
  AlertTriangle,
  Rotate3D,
  CircleHelp,
  Dog,
  Baby,
  Cloud,
} from "lucide-react";
import ProductCard from "../../../components/ProductCard";

export const metadata = {
  title:
    "Top 5 Best Indoor CCTV Cameras for Home | PriceTag HUB",
  description:
    "Compare 5 indoor CCTV cameras for home, including Trueview, Qubo, Imou, MANOMAY and DDLC. Explore night vision, motion tracking, storage, privacy and buying recommendations.",
  alternates: {
    canonical:
      "https://www.pricetag.co.in/cctv-problem/best-indoor-security-camera-for-home",
  },
};

const products = [
  {
    categoryHeading: "1. Best All-Rounder",
    title: "Trueview 3MP WiFi Robot Security Camera",
    description:
      "A versatile option for home and office monitoring. Its advertised features include 360° pan-and-tilt coverage, AI auto tracking, two-way audio, color night vision and microSD support up to 256GB. The supplied listing mentions STQC certification; verify the exact model and certificate before purchasing.",
    image: "/indoor-camera/indoor-camera-1.jpeg",
    imageAlt: "Trueview 3MP WiFi indoor security camera",
    badge: "Best All-Rounder",
    link: "https://www.amazon.in/Trueview-3MP-WiFi-Robot-Compatible/dp/B09WDTVG8C?crid=3IO7MYZL0K9BF&dib=eyJ2IjoiMSJ9.BtPxSvLCws-9g7dQkrrV8Lm4ldzJrIZ1aiKQdMnXnm5KWIyI5V6lO4LlxewBy5fPDcIgkSbDnSa-R14O4hp3uGWRQKjWVfht9m5MKjBBFCJqIEtD7V7eAud9vTBmzLmDWraNyUaYolwtcplMQw01UNnPSmDcuqVyvxAMq02bZEe1ZfUxPCLyrJcBQKiQviHHqR5B9kR5pPi3F4po1L1iJ-cpUe88z2ZvIpemi0-VFV8.rJh-b1HavONu1f6srwEo8fe9Mr96o5mQYUAr5csYm9A&dib_tag=se&keywords=Fixed-View%2BIndoor%2BWi-Fi%2BCCTV%2BCamera&qid=1792065575&refinements=p_n_g-1003353956111%3A28897555031&rnid=28897540031&sprefix=fixed-view%2Bindoor%2Bwi-fi%2Bcctv%2Bcamera%2Caps%2C304&sr=8-1-spons&aref=Wu8fQ1eYdL&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1&linkCode=ll2&tag=pricetaghub-21&linkId=fd3e3b70f1cda7d83e3804df02d38d5c&ref_=as_li_ss_tl",
    features: [
      "3MP advertised resolution",
      "360° pan and tilt",
      "AI auto tracking and two-way audio",
      "Color night vision",
      "Alexa compatibility",
      "Up to 256GB memory card support",
      "STQC certification claimed in supplied listing",
    ],
  },
  {
    categoryHeading: "2. Best for Smart Security Features",
    title: "Qubo Smart Cam 360° 3MP",
    description:
      "Worth considering if you want smart alerts and additional security features. The supplied listing describes AI person detection, an intruder alarm, night vision, two-way talk and cloud recording without an SD card. Check subscription costs, recording retention and the exact model's STQC certification before buying.",
    image: "/indoor-camera/indoor-camera-2.jpeg",
    imageAlt: "Qubo Smart Cam 360 degree indoor camera",
    badge: "Smart Security",
    link: "https://www.amazon.in/Qubo-Certified-Detection-Intruder-Directly/dp/B0G64G64YL?dib=eyJ2IjoiMSJ9.DMLiENBfUGOPdv9JAsGRpdannAWa6cYFNdOGITBUx26PxYhS1-AOIFC-BmSNrc1qmg_3sUUSHUXLJdSuHqyS75EsGeb2aNp5JPHbl59siAvWmAuM_SUkLY3AxevlaCE_WeKbhMHpZ0zQpPr64O9stwaw46c4b1vu8UP4CZNt3RwQsDFWFqiMTAf5MsmFOEDcHgECWaQ0BUZz6YosiWk80A0FZAACn4zxxJeAW-aDJUQ.XVvsfsTJmvwC6ukcc5UAmGpyzwuYjqulK4599gN2dLQ&dib_tag=se&keywords=Fixed-View%2BIndoor%2BWi-Fi%2BCCTV%2BCamera&qid=1792066446&refinements=p_n_g-1003353956111%3A28897565031&rnid=28897540031&sr=8-1-spons&aref=hYgdaMiVXz&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1&linkCode=ll2&tag=pricetaghub-21&linkId=093b388c7f61518cce683a999b564314&ref_=as_li_ss_tl",
    features: [
      "3MP advertised resolution",
      "AI person detection",
      "Intruder alarm",
      "Night vision",
      "Two-way talk",
      "Cloud recording option",
      "STQC certification claimed in supplied listing",
    ],
  },
  {
    categoryHeading: "3. Best for Tracking and Coverage",
    title: "Imou Ranger S2 3MP WiFi Security Camera",
    description:
      "A feature-focused indoor camera for monitoring rooms and following movement. Its supplied specifications include pan-and-tilt movement, human detection, smart tracking, two-way audio, night vision and memory card support up to 256GB. Confirm the precise variant and supported features before ordering.",
    image: "/indoor-camera/indoor-camera-3.jpg",
    imageAlt: "Imou Ranger S2 3MP WiFi security camera",
    badge: "Smart Tracking",
    link: "https://www.amazon.in/Imou-Security-Detection-Tracking-Assistant/dp/B0DB7RNKDW?crid=1LK23S377LQFL&dib=eyJ2IjoiMSJ9.F38JU8OKD1Kmi_3jIJV_ajzO03ckPNwMMmVrNWe4qjU.DGox-EwXAf-dJyl0GlPu8LUkr6X-Y4BF0Fg7VjcbNIc&dib_tag=se&keywords=.+IMOU+Cue+2C&qid=1792139903&sprefix=imou+cue+2c%2Caps%2C395&sr=8-3&linkCode=ll2&tag=pricetaghub-21&linkId=f0838b150ed3b17c499c32051500e65d&ref_=as_li_ss_tl",
    features: [
      "3MP advertised resolution",
      "Pan and tilt",
      "Human detection",
      "Smart tracking",
      "Two-way audio",
      "Night vision",
      "Up to 256GB memory card support",
    ],
  },
  {
    categoryHeading: "4. Best Alternative for Smart Home Monitoring",
    title: "MANOMAY Protect Bot 3MP Wi-Fi Pan-Tilt Camera",
    description:
      "An alternative to compare for rotating indoor coverage, AI human tracking, color night vision and voice-control features. The supplied listing mentions STQC certification and memory card support up to 256GB. Verify the model number, certificate, app requirements and recording options before purchasing.",
    image: "/indoor-camera/indoor-camera-4.jpg",
    imageAlt: "MANOMAY Protect Bot 3MP pan tilt camera",
    badge: "Smart Home",
    link: "https://www.amazon.in/MANOMAY-Pan-Tilt-Certified-Tracking-M1078S/dp/B0D8BSGBCN?crid=3J96Z4OHHMWJ0&dib=eyJ2IjoiMSJ9.UMYkkBoZJmGqFNv7_6idIotzTA40R9WYUcCNMlPGTRmRllzYnc5XeIEGwUW_Fip6242PIbURQ2AHGlqT3qe8-mbHL4hy89Xzx4siosT44v6XMHZ87LSkpDKuUBNBhRq5_2PIAYxtJ9OdrjsDXsZne5OsSWFWbrSQKCzvRPQ4iWJZU6BCM9Ri4Xt1mr7Io4VoNWvKqDrzV3zqRj7ONhq_yZUww8DKiI3LD1VkJPR-MD8.YD3kJK9i7N2AhcEa3yQfgOlidCrrNe4SzwmUuwlCoag&dib_tag=se&keywords=TP-Link%2BTapo%2BC210&qid=1792140105&sprefix=tp-link%2Btapo%2Bc210%2Caps%2C319&sr=8-5-spons&aref=o2s3QSHNNB&sp_csd=d2lkZ2V0TmFtZT1zcF9tdGY&th=1&linkCode=ll2&tag=pricetaghub-21&linkId=7cda05e7b46b9009697b4df3708866ad&ref_=as_li_ss_tl",
    features: [
      "3MP advertised resolution",
      "360° smart home monitoring",
      "AI human tracking",
      "Color night vision",
      "Alexa voice control",
      "Up to 256GB memory card support",
      "STQC certification claimed in supplied listing",
    ],
  },
  {
    categoryHeading: "5. Best Bulb-Style Camera to Compare",
    title: "DDLC 4MP WiFi Light Bulb Camera",
    description:
      "A different camera design for buyers considering a bulb-style installation. The supplied listing advertises 360° rotation, color night vision, motion detection, two-way audio and the V380 Pro mobile app. Check the socket and power requirements, Wi-Fi compatibility, privacy protections and recording features before buying.",
    image: "/indoor-camera/indoor-camera-5.jpg",
    imageAlt: "DDLC 4MP WiFi bulb-style indoor camera",
    badge: "Bulb-Style Design",
    link: "https://www.amazon.in/DDLC-Rotation-Detection-Wireless-Security/dp/B0HJMFXZP2?content-id=amzn1.sym.6e35d58e-d276-4d9c-918a-3d084949b530%3Aamzn1.sym.6e35d58e-d276-4d9c-918a-3d084949b530&crid=2B7486692H661&cv_ct_cx=magic%2Bcctv%2Bcamera&keywords=magic%2Bcctv%2Bcamera&pd_rd_i=B0HJMFXZP2&pd_rd_r=dd910c94-f8fc-4bf1-8d6d-c203964483e4&pd_rd_w=gETTb&pd_rd_wg=8I1wZ&pf_rd_p=6e35d58e-d276-4d9c-918a-3d084949b530&pf_rd_r=HFSAMH46J4AWJK8JN7T9&qid=1792140748&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=magic%2Bcctv%2Bcamera%2Caps%2C437&sr=1-3-66673dcf-083f-43ba-b782-d4a436cc5cfb-spons&aref=sFVQ2ntsXy&sp_csd=d2lkZ2V0TmFtZT1zcF9zZWFyY2hfdGhlbWF0aWM&th=1&linkCode=ll2&tag=pricetaghub-21&linkId=7f079128315b9c1a60a5a680daf063af&ref_=as_li_ss_tl",
    features: [
      "4MP advertised resolution",
      "360° rotation",
      "Color night vision",
      "Motion detection",
      "Two-way audio",
      "V380 Pro mobile app",
    ],
  },
];

const features = [
  {
    icon: Wifi,
    title: "Wi-Fi compatibility",
    text: "Check whether the camera needs 2.4GHz Wi-Fi, supports your router, and requires an internet connection for remote viewing.",
    color: "border-blue-200 bg-blue-50 text-blue-800",
    iconBg: "bg-blue-100 text-blue-700",
  },
  {
    icon: Moon,
    title: "Night vision",
    text: "Compare low-light performance, infrared or color night vision, and the manufacturer's stated night-vision range.",
    color: "border-violet-200 bg-violet-50 text-violet-900",
    iconBg: "bg-violet-100 text-violet-700",
  },
  {
    icon: Smartphone,
    title: "Mobile app access",
    text: "Look for live viewing, playback, useful notifications, app compatibility, and secure account controls.",
    color: "border-cyan-200 bg-cyan-50 text-cyan-900",
    iconBg: "bg-cyan-100 text-cyan-700",
  },
  {
    icon: Mic,
    title: "Two-way audio",
    text: "A built-in microphone and speaker may let you listen and talk through the camera app.",
    color: "border-rose-200 bg-rose-50 text-rose-900",
    iconBg: "bg-rose-100 text-rose-700",
  },
  {
    icon: HardDrive,
    title: "Recording and storage",
    text: "Check microSD card support, recording modes, playback, cloud plans, and video-retention limits.",
    color: "border-emerald-200 bg-emerald-50 text-emerald-950",
    iconBg: "bg-emerald-100 text-emerald-700",
  },
  {
    icon: Rotate3D,
    title: "Pan and tilt",
    text: "A rotating camera can cover more of a room than a fixed-view model, depending on its movement range and placement.",
    color: "border-amber-200 bg-amber-50 text-amber-950",
    iconBg: "bg-amber-100 text-amber-700",
  },
];

const useCases = [
  {
    icon: Home,
    title: "Living room",
    text: "Look for a wide field of view, useful motion alerts, and recording options.",
    color: "bg-blue-100 text-blue-700",
  },
  {
    icon: Dog,
    title: "Pet monitoring",
    text: "Two-way audio, remote viewing, and suitable motion detection may be useful.",
    color: "bg-orange-100 text-orange-700",
  },
  {
    icon: Baby,
    title: "Child's room",
    text: "Prioritise secure access, privacy controls, reliable night vision, and audio features.",
    color: "bg-purple-100 text-purple-700",
  },
];

const faqs = [
  {
    q: "Which indoor CCTV camera is best for home?",
    a: "The best option depends on your budget, room size, connectivity, storage preference and security needs. Compare the five cameras above, then check current prices, recent reviews and exact specifications.",
  },
  {
    q: "Can I install an indoor Wi-Fi camera myself?",
    a: "Many consumer indoor cameras are designed for self-installation. Usually, you connect the power, install the manufacturer's app, pair the device and configure recording and alerts. Follow the instructions for the specific model.",
  },
  {
    q: "Can an indoor camera record without the internet?",
    a: "Some models support local recording to a compatible memory card during an internet outage. Remote live viewing and notifications generally require connectivity. Check the individual camera's offline capabilities.",
  },
  {
    q: "Does an indoor CCTV camera need a monthly subscription?",
    a: "Not always. Some cameras support local memory-card recording without a cloud subscription, while cloud recording, extended video history or advanced features may require a paid plan.",
  },
  {
    q: "Is a 360-degree camera always better?",
    a: "Not necessarily. Pan-and-tilt cameras can cover a wider room, but a fixed camera may be sufficient for a doorway or a specific area. Placement, image detail and the actual field of view also matter.",
  },
  {
    q: "How do I check whether a camera is STQC certified?",
    a: "Do not rely only on a product title or a general brand claim. Ask the manufacturer or seller for the applicable certificate and verify that its model, scope and validity match the camera you intend to purchase.",
  },
];

export default function BestIndoorSecurityCameraPage() {
  return (
    <main className="min-h-screen w-full bg-white text-slate-800">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-blue-100 bg-gradient-to-br from-white via-sky-50 to-blue-100 px-5 py-12 sm:py-16">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-sky-200/50 blur-3xl" />
        <div className="absolute -bottom-24 left-1/4 h-72 w-72 rounded-full bg-blue-200/50 blur-3xl" />

        <div className="relative mx-auto max-w-5xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/90 px-4 py-2 text-sm font-medium text-blue-800 shadow-sm">
            <ShieldCheck size={17} />
            Practical home security guide
          </div>

          <h1 className="max-w-4xl text-3xl font-bold leading-tight tracking-tight text-blue-950 sm:text-5xl">
            Top 5 Best Indoor CCTV Cameras for Home
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
            Looking for an indoor camera to monitor your home, check on pets,
            or view a room while you are away? Compare five cameras by their
            advertised features, recording options, night vision and privacy
            considerations before deciding which one suits your needs.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 text-sm">
            <span className="inline-flex items-center gap-2 rounded-xl border border-blue-100 bg-white/90 px-4 py-3 font-medium text-blue-800 shadow-sm">
              <Wifi size={17} className="text-blue-600" />
              Wi-Fi cameras
            </span>
            <span className="inline-flex items-center gap-2 rounded-xl border border-blue-100 bg-white/90 px-4 py-3 font-medium text-blue-800 shadow-sm">
              <Moon size={17} className="text-indigo-600" />
              Night vision
            </span>
            <span className="inline-flex items-center gap-2 rounded-xl border border-blue-100 bg-white/90 px-4 py-3 font-medium text-blue-800 shadow-sm">
              <HardDrive size={17} className="text-cyan-700" />
              Storage choices
            </span>
          </div>
        </div>
      </section>

      <div className="mx-auto w-full max-w-5xl space-y-14 px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        {/* Introduction */}
        <section>
          <p className="text-lg leading-8 text-slate-600">
            An indoor CCTV camera can help you check what is happening at home
            while you are away. However, the right choice depends on what you
            need to monitor, how you want to store recordings, and whether you
            need features such as motion tracking, two-way audio or cloud access.
          </p>

          <div className="mt-6 rounded-2xl border border-blue-200 bg-gradient-to-r from-white to-blue-50 p-5 shadow-sm sm:p-6">
            <div className="flex items-start gap-3">
              <div className="rounded-xl bg-blue-100 p-3 text-blue-700">
                <CircleHelp size={23} />
              </div>
              <div>
                <h2 className="text-lg font-bold text-blue-950">
                  How these five cameras are presented
                </h2>
                <p className="mt-2 leading-7 text-slate-600">
                  The list is organised by intended use and the features in
                  the supplied product information. It is not an independently
                  tested performance ranking. Check current listings and exact
                  model specifications before making a purchase.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Top five products */}
        <section>
          <div className="mb-6">
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-700">
              Compare your options
            </p>
            <h2 className="mt-2 text-2xl font-bold text-blue-950 sm:text-3xl">
              Top 5 Indoor CCTV Cameras
            </h2>
            <p className="mt-3 leading-7 text-slate-600">
              Review the key advertised features of each camera and use the
              product links to check current prices, availability and details.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {products.map((product) => (
              <ProductCard key={product.title} {...product} />
            ))}
          </div>

          <p className="mt-5 text-xs leading-6 text-slate-500">
            PriceTag HUB may earn a commission from qualifying purchases made
            through affiliate links, at no additional cost to you. Product
            details and certification claims should be verified with the seller
            or manufacturer.
          </p>
        </section>

        {/* Use cases */}
        <section>
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-700">
            Match the camera to your needs
          </p>
          <h2 className="mt-2 text-2xl font-bold text-blue-950 sm:text-3xl">
            Which indoor camera suits your situation?
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {useCases.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-md"
                >
                  <div
                    className={`mb-4 inline-flex rounded-xl p-3 ${item.color}`}
                  >
                    <Icon size={26} />
                  </div>
                  <h3 className="text-lg font-bold text-blue-950">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {item.text}
                  </p>
                </article>
              );
            })}
          </div>
        </section>

        {/* Buying features */}
        <section>
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-700">
            Features that matter
          </p>
          <h2 className="mt-2 text-2xl font-bold text-blue-950 sm:text-3xl">
            6 things to check before buying
          </h2>
          <p className="mt-3 leading-7 text-slate-600">
            More advertised features do not automatically mean a better camera.
            Focus on the features that solve your particular problem.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {features.map((item, index) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className={`rounded-2xl border p-5 shadow-sm transition hover:shadow-md ${item.color}`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`rounded-xl p-3 ${item.iconBg}`}>
                      <Icon size={24} />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider opacity-70">
                        Feature {index + 1}
                      </p>
                      <h3 className="mt-1 text-lg font-bold">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-slate-700">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* Resolution */}
        <section className="overflow-hidden rounded-3xl border border-blue-100 bg-gradient-to-br from-white via-sky-50 to-blue-100 p-6 shadow-sm sm:p-8">
          <div className="flex items-start gap-4">
            <Eye className="mt-1 shrink-0 text-blue-700" size={32} />
            <div>
              <h2 className="text-2xl font-bold text-blue-950 sm:text-3xl">
                Is a higher-resolution camera always better?
              </h2>
              <p className="mt-4 leading-7 text-slate-600">
                Resolution affects the amount of detail a camera captures, but
                image quality also depends on the sensor, lens, lighting,
                compression and placement. Higher-resolution footage can use
                more storage and network bandwidth.
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-blue-100 bg-white/90 p-5">
              <h3 className="font-bold text-blue-800">
                For basic monitoring
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                A suitable HD camera may be sufficient for general movement
                and monitoring a small room.
              </p>
            </div>
            <div className="rounded-2xl border border-indigo-100 bg-white/90 p-5">
              <h3 className="font-bold text-indigo-800">
                For more visual detail
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Compare higher-resolution options when detail matters, while
                also checking lighting, placement and storage capacity.
              </p>
            </div>
          </div>
        </section>

        {/* Installation */}
        <section>
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-700">
            Simple installation
          </p>
          <h2 className="mt-2 text-2xl font-bold text-blue-950 sm:text-3xl">
            How to set up an indoor Wi-Fi camera
          </h2>
          <p className="mt-3 leading-7 text-slate-600">
            Many consumer indoor cameras are designed for self-installation.
            Follow the instructions for your specific model.
          </p>

          <div className="mt-6 space-y-4">
            {[
              {
                n: "01",
                title: "Choose a suitable position",
                text: "Place the camera where it can monitor the intended area without unnecessarily recording private spaces.",
                color: "bg-blue-100 text-blue-800",
              },
              {
                n: "02",
                title: "Connect the power",
                text: "Check the power requirements, cable length and placement before installation.",
                color: "bg-indigo-100 text-indigo-800",
              },
              {
                n: "03",
                title: "Install the official app",
                text: "Download the manufacturer's official app and follow the device-pairing instructions.",
                color: "bg-cyan-100 text-cyan-800",
              },
              {
                n: "04",
                title: "Configure recording and alerts",
                text: "Set up supported storage, motion notifications, account security and privacy settings.",
                color: "bg-emerald-100 text-emerald-800",
              },
            ].map((step) => (
              <div
                key={step.n}
                className="flex gap-4 rounded-2xl border border-blue-100 bg-white p-5 shadow-sm"
              >
                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl font-bold ${step.color}`}
                >
                  {step.n}
                </div>
                <div>
                  <h3 className="font-bold text-blue-950">{step.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    {step.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Storage */}
        <section>
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-700">
            Recording options
          </p>
          <h2 className="mt-2 text-2xl font-bold text-blue-950 sm:text-3xl">
            Local storage vs cloud storage
          </h2>
          <p className="mt-3 leading-7 text-slate-600">
            Where recordings are stored affects ongoing costs, privacy and
            access to footage.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <article className="rounded-2xl border border-emerald-200 bg-gradient-to-br from-white to-emerald-50 p-6">
              <div className="inline-flex rounded-xl bg-emerald-100 p-3 text-emerald-700">
                <HardDrive size={27} />
              </div>
              <h3 className="mt-4 text-xl font-bold text-emerald-950">
                Local storage
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Compatible cameras can save footage to a microSD card. This
                may reduce recurring storage costs, but capacity, recording
                modes and protection against camera theft vary.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-emerald-950">
                <li className="flex gap-2">
                  <CheckCircle2
                    size={17}
                    className="shrink-0 text-emerald-700"
                  />
                  May avoid cloud subscription fees
                </li>
                <li className="flex gap-2">
                  <CheckCircle2
                    size={17}
                    className="shrink-0 text-emerald-700"
                  />
                  Check card capacity and recording settings
                </li>
              </ul>
            </article>

            <article className="rounded-2xl border border-blue-200 bg-gradient-to-br from-white to-blue-50 p-6">
              <div className="inline-flex rounded-xl bg-blue-100 p-3 text-blue-700">
                <Cloud size={27} />
              </div>
              <h3 className="mt-4 text-xl font-bold text-blue-950">
                Cloud storage
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Supported footage is uploaded to an online service. Depending
                on the plan, cloud storage may offer remote playback and access
                to recordings if the camera is damaged or stolen.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-blue-950">
                <li className="flex gap-2">
                  <CheckCircle2
                    size={17}
                    className="shrink-0 text-blue-700"
                  />
                  Check subscription fees and retention
                </li>
                <li className="flex gap-2">
                  <CheckCircle2
                    size={17}
                    className="shrink-0 text-blue-700"
                  />
                  Uploads require connectivity
                </li>
              </ul>
            </article>
          </div>

          <div className="mt-5 flex items-start gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-5">
            <Wallet className="mt-1 shrink-0 text-amber-700" size={23} />
            <p className="text-sm leading-7 text-amber-950">
              <strong>Buying tip:</strong> Calculate the total cost of the
              camera, memory card and any cloud plan before deciding. A lower
              purchase price does not always mean a lower long-term cost.
            </p>
          </div>
        </section>

        {/* Privacy */}
        <section className="rounded-3xl border border-violet-200 bg-gradient-to-br from-white to-violet-50 p-6 sm:p-8">
          <div className="flex items-start gap-4">
            <div className="shrink-0 rounded-xl bg-violet-100 p-3 text-violet-700">
              <LockKeyhole size={25} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-violet-950">
                Check privacy and account security
              </h2>
              <p className="mt-3 leading-7 text-slate-600">
                Indoor cameras can capture sensitive moments. Use a strong,
                unique password, install firmware updates, enable two-factor
                authentication if available, and restrict access to trusted
                users.
              </p>
              <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-600">
                <li>• Review who can access live feeds and recordings.</li>
                <li>• Check privacy controls and account recovery options.</li>
                <li>• Avoid recording areas where privacy would be invaded.</li>
                <li>• Verify the exact model's security and certification claims.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Common mistakes */}
        <section className="rounded-3xl border border-rose-200 bg-gradient-to-br from-white to-rose-50 p-6 sm:p-8">
          <div className="flex items-start gap-3">
            <div className="shrink-0 rounded-xl bg-rose-100 p-3 text-rose-700">
              <AlertTriangle size={25} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-rose-950">
                Common mistakes when buying an indoor camera
              </h2>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
                <li>• Buying without checking Wi-Fi compatibility.</li>
                <li>• Assuming every feature is available without a subscription.</li>
                <li>• Ignoring memory card and cloud-storage costs.</li>
                <li>• Choosing based on resolution alone.</li>
                <li>• Overlooking account security and privacy controls.</li>
                <li>• Treating an unverified STQC claim as confirmed certification.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section>
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-700">
            Common questions
          </p>
          <h2 className="mt-2 text-2xl font-bold text-blue-950 sm:text-3xl">
            Frequently asked questions
          </h2>

          <div className="mt-6 space-y-3">
            {faqs.map((item) => (
              <details
                key={item.q}
                className="group rounded-2xl border border-blue-100 bg-white p-5 shadow-sm transition open:border-blue-200 open:bg-blue-50/50"
              >
                <summary className="cursor-pointer list-none font-semibold text-blue-950">
                  <span className="flex items-center justify-between gap-4">
                    {item.q}
                    <ArrowRight
                      className="shrink-0 text-blue-600 transition group-open:rotate-90"
                      size={19}
                    />
                  </span>
                </summary>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* Final recommendation */}
        <section className="rounded-3xl border border-blue-200 bg-gradient-to-br from-white via-sky-50 to-indigo-50 p-6 sm:p-8">
          <div className="flex items-start gap-3">
            <div className="rounded-xl bg-blue-100 p-3 text-blue-700">
              <CheckCircle2 size={25} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-blue-950">
                Our Recommendations: Which CCTV Camera Should You Buy?
              </h2>
              <p className="mt-3 leading-7 text-slate-600">
                The right camera depends on the features you value most. Use
                these recommendations as a starting point, then compare current
                prices, reviews, warranties and model specifications.
              </p>
            </div>
          </div>

          <div className="mt-6 space-y-4">
            <div className="rounded-2xl border border-blue-100 bg-white p-5">
              <h3 className="font-bold text-blue-950">
                For all-round home monitoring
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Start by comparing the Trueview and Imou models for pan-and-tilt
                coverage, tracking, night vision and local recording.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-100 bg-white p-5">
              <h3 className="font-bold text-emerald-950">
                For smart alerts and cloud recording
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Consider the Qubo model if its detection and alarm features
                match your needs. Check subscription costs and cloud-retention
                terms first.
              </p>
            </div>

            <div className="rounded-2xl border border-violet-100 bg-white p-5">
              <h3 className="font-bold text-violet-950">
                If STQC certification matters to you
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Verify the exact model and applicable certificate with the
                manufacturer or seller before purchase. We have not
                independently verified certification for these five listings.
              </p>
            </div>

            <div className="rounded-2xl border border-amber-100 bg-white p-5">
              <h3 className="font-bold text-amber-950">
                For a bulb-style installation
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Compare the DDLC camera's socket, power requirements, app,
                recording options and security details with your installation
                needs.
              </p>
            </div>
          </div>

          <p className="mt-6 text-sm leading-7 text-slate-600">
            These recommendations are based on the supplied advertised
            features, not independent product testing. Prices, availability
            and specifications may change.
          </p>

          <a
            href="https://www.amazon.in/s?k=indoor+cctv+camera+for+home&crid=I0SDWUQ38MML&sprefix=indoor+cctv+camer%2Caps%2C564&linkCode=ll2&tag=pricetaghub-21&linkId=029eb57d13794e7fa15897225b18c3b6&ref_=as_li_ss_tl"
            target="_blank"
            rel="sponsored nofollow noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-blue-700 px-5 py-3 font-semibold text-white transition hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
          >
            Explore More Indoor CCTV Cameras
            <ArrowRight size={18} />
          </a>
        </section>

        {/* Related guides */}
        <section className="rounded-3xl border border-blue-100 bg-gradient-to-br from-white via-sky-50 to-indigo-50 p-6 sm:p-8">
          <div className="inline-flex rounded-xl bg-blue-100 p-3 text-blue-700">
            <Camera size={26} />
          </div>
          <h2 className="mt-4 text-2xl font-bold text-blue-950">
            Explore Related Camera Guides
          </h2>
          <p className="mt-3 leading-7 text-slate-600">
            Find a camera guide that better matches your connectivity and
            monitoring requirements.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <Link
              href="/cctv-problem/best-pet-camera-for-home"
              className="group rounded-2xl border border-blue-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-md"
            >
              <Dog className="text-orange-600" size={28} />
              <div className="mt-4 flex items-center justify-between gap-3">
                <h3 className="font-bold text-blue-950">
                  Best Pet Camera for Home
                </h3>
                <ArrowRight
                  className="shrink-0 text-slate-400 transition group-hover:translate-x-1 group-hover:text-blue-700"
                  size={20}
                />
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Explore cameras for monitoring pets remotely.
              </p>
            </Link>

            <Link
              href="/cctv-problem/best-4g-sim-cctv-camera-without-wifi"
              className="group rounded-2xl border border-blue-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-md"
            >
              <Wifi className="text-indigo-600" size={28} />
              <div className="mt-4 flex items-center justify-between gap-3">
                <h3 className="font-bold text-blue-950">
                  Best 4G SIM CCTV Camera Without Wi-Fi
                </h3>
                <ArrowRight
                  className="shrink-0 text-slate-400 transition group-hover:translate-x-1 group-hover:text-indigo-700"
                  size={20}
                />
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Understand cellular cameras for locations without broadband.
              </p>
            </Link>
          </div>
        </section>

        
      </div>
    </main>
  );
}