
import {
  ArrowRight,
  ArrowUpRight,
  BellRing,
  CheckCircle2,
  Eye,
  Heart,
  Info,
  MessageCircle,
  Moon,
  ShieldCheck,
  Smartphone,
  Video,
} from "lucide-react";

export const metadata = {
  title:
    "Are You Looking to Monitor Your Animals at Home? | PriceTag HUB",
  description:
    "Are you looking to monitor your animals at home while you are away? Compare 5 pet monitoring cameras with remote viewing, night vision, two-way audio, motion alerts and storage options.",
  alternates: {
    canonical: "/cctv-problem/pet-monitoring-cameras",
  },
  openGraph: {
    title: "Are You Looking to Monitor Your Animals at Home?",
    description:
      "Check on your pets while you are away. Compare five indoor cameras and their remote viewing, audio, night vision, motion alerts and storage features.",
    type: "article",
  },
};

const cameras = [
  {
    id: 1,
    brand: "Grousale",
    name: "4MP Dual-Lens Indoor Wi-Fi Camera",
    label: "Dual-angle monitoring",
    image: "/pet-camera/pet-camera-1.jpg",
    alt: "Grousale 4MP dual-lens indoor Wi-Fi camera for monitoring animals at home",
    resolution: "4MP dual lenses",
    vision: "Full-colour night vision advertised",
    audio: "Two-way audio",
    movement: "360° PTZ advertised",
    storage: "Up to 128GB microSD and cloud support",
    connection: "Wi-Fi",
    bestFor:
      "Checking a larger room from two viewing angles.",
    features: [
      "Two lenses provide simultaneous views from different angles.",
      "Colour night vision helps view activity in low-light conditions.",
      "Listen and speak through the camera using a compatible phone app.",
      "Motion alerts and V380Pro app support are advertised.",
    ],
    limitation:
      "Confirm the dual-view layout, actual night performance and cloud storage terms. Pet-specific detection is not established by the supplied listing.",
    link: "https://www.amazon.in/dp/B0G6LNHM1K?psc=1&pf_rd_p=cebd979a-4e06-4bc9-ba7d-b9887a34ed18&pf_rd_r=2TGZZXE53YJEEP7M9CK2&pd_rd_wg=5uPeE&pd_rd_w=Gv6Wn&content-id=amzn1.sym.cebd979a-4e06-4bc9-ba7d-b9887a34ed18&pd_rd_r=77b78389-1081-4393-90d3-baaadd085173&aref=KmiZpwOPbA&sp_csd=d2lkZ2V0TmFtZT1zcF9kZXRhaWxfdGhlbWF0aWM&linkCode=ll2&tag=pricetaghub-21&linkId=f6ad26b026bce40328a98d3f5485b650&ref_=as_li_ss_tl",
  },
  {
    id: 2,
    brand: "CP PLUS",
    name: "Ezykam 2MP Wi-Fi Camera — Pack of 2",
    label: "Monitor two locations",
    image: "/pet-camera/pet-camera-2.jpg",
    alt: "CP PLUS Ezykam indoor Wi-Fi cameras two-pack for checking pets in different rooms",
    resolution: "2MP Full HD 1080p",
    vision: "Infrared night vision",
    audio: "Two-way audio",
    movement: "355° pan and 59° tilt advertised",
    storage: "Cloud and microSD support; listing mentions up to 256GB",
    connection: "Wi-Fi",
    bestFor:
      "Checking on animals in separate rooms with a two-camera setup.",
    features: [
      "Two cameras can help cover different rooms or viewing angles.",
      "Remote live viewing and two-way talk are advertised.",
      "Human detection, sound detection and motion tracking are listed.",
      "Alexa and Google Assistant compatibility is advertised.",
    ],
    limitation:
      "Human detection does not necessarily detect pets. Confirm the exact model's storage limit, app requirements and smart-home compatibility.",
    link: "https://www.amazon.in/CP-PLUS-Detection-CP-E25Q-Pack/dp/B0FNRQ2CJZ?pd_rd_w=gZp2H&content-id=amzn1.sym.7ccbe032-5929-4c88-ab39-4923842061df&pf_rd_p=7ccbe032-5929-4c88-ab39-4923842061df&pf_rd_r=68XZ6BSARYSHJ9T301QJ&pd_rd_wg=l4RzC&pd_rd_r=4caf1ad2-5951-4795-9964-5aadc388443b&pd_rd_i=B0FNRQ2CJZ&psc=1&linkCode=ll2&tag=pricetaghub-21&linkId=20c297d4f0aec9c400b5b763d037a226&ref_=as_li_ss_tl",
  },
  {
    id: 3,
    brand: "Trueview",
    name: "3MP Mini Pan-Tilt Wi-Fi Camera",
    label: "Adjustable viewing",
    image: "/pet-camera/pet-camera-3.jpg",
    alt: "Trueview 3MP mini pan-tilt Wi-Fi camera with colour night vision for pet monitoring",
    resolution: "3MP",
    vision: "All-time colour night vision advertised",
    audio: "Two-way audio",
    movement: "360° pan-tilt monitoring advertised",
    storage: "Up to 256GB microSD and cloud support",
    connection: "Wi-Fi; verify the exact model's requirements",
    bestFor:
      "Watching different parts of a room using remote camera movement.",
    features: [
      "Adjust the camera's viewing direction using a compatible app.",
      "Human detection, movement tracking and instant alerts are advertised.",
      "Two-way audio lets you listen and speak remotely.",
      "Local memory-card recording and cloud backup are advertised.",
    ],
    limitation:
      "Human tracking may not follow a dog or cat. Verify Wi-Fi requirements, cloud terms and pet-specific tracking before buying.",
    link: "https://www.amazon.in/Trueview-Pan-Tilt-Security-Intruder-Surveillance/dp/B0BM9K7ZKF?pd_rd_w=oWWT2&content-id=amzn1.sym.7ccbe032-5929-4c88-ab39-4923842061df&pf_rd_p=7ccbe032-5929-4c88-ab39-4923842061df&pf_rd_r=8G0BX679TW6W09GNW8FA&pd_rd_wg=eLv73&pd_rd_r=5b7eb1d4-bd05-4b83-97fb-9f22556814ea&pd_rd_i=B0BM9K7ZKF&psc=1&linkCode=ll2&tag=pricetaghub-21&linkId=e3f9079a197cb08af67160d6e621efd0&ref_=as_li_ss_tl",
  },
  {
    id: 4,
    brand: "Godrej Security Solutions",
    name: "EVE Pro 3 Smart Wi-Fi Camera",
    label: "Local storage option",
    image: "/pet-camera/pet-camera-4.jpg",
    alt: "Godrej EVE Pro 3 3MP indoor Wi-Fi camera for remotely monitoring pets at home",
    resolution: "3MP",
    vision: "Infrared night vision",
    audio: "Two-way audio",
    movement: "360° view and human tracking advertised",
    storage: "Up to 256GB microSD",
    connection: "Wi-Fi; Godrej Secure Hub app",
    bestFor:
      "Owners who want indoor monitoring and local memory-card recording.",
    features: [
      "Remote live viewing through the compatible mobile app.",
      "Two-way talk for listening and speaking through the camera.",
      "Local memory-card recording is supported.",
      "Motion detection and human tracking are advertised.",
    ],
    limitation:
      "Check app features, recording settings and alert options. Human detection is not the same as pet detection.",
    link: "https://www.amazon.in/Godrej-Camera-Tracking-Detection-Support/dp/B0GXYYQJ2M?crid=1KCN3VD15IYU0&dib=eyJ2IjoiMSJ9.OUp09R-TPS40KgS5OTLPfXIF8yRwciRDLucsVArRi6hFZAGsOaRXMxhMs-I299G1juA5EFEiRbNi7NRtMdSmhafrMjWU4xmbZSudfDuMMvDMIWL9g8abx5WypxQygexxPPg6nLM_QisOnwD92GTOhpTeuBjZv-lfGQTIcKUiOh8G6oEufTTQYDccN7NqEbxeJVHc5NiGHVNpf-y68MIyVUd0GDmxNaXNm54rgtJ21IY.qnl_f6uqIWaHy56YOJrCnsHy6VWfOA0q1KUfvRXKGwo&dib_tag=se&keywords=BEST+CCTV+CAMERA+FOR+dog&qid=1792729921&sprefix=best+cctv+camera+for+do%2Caps%2C298&sr=8-9-spons&aref=1swLXTm0Pt&sp_csd=d2lkZ2V0TmFtZT1zcF9tdGY&psc=1&linkCode=ll2&tag=pricetaghub-21&linkId=3e2fee79589a7b4d788271657a638290&ref_=as_li_ss_tl",
  },
  {
    id: 5,
    brand: "GARYVIZ",
    name: "Mini Magnetic Wi-Fi Camera",
    label: "Compact monitoring",
    image: "/pet-camera/pet-camera-5.jpg",
    alt: "GARYVIZ compact magnetic 1080p Wi-Fi camera for monitoring an indoor pet area",
    resolution: "1080p Full HD advertised",
    vision: "Night-vision performance needs verification",
    audio: "Verify live two-way audio",
    movement: "Fixed 81° viewing angle advertised",
    storage: "Up to 128GB microSD",
    connection: "2.4GHz Wi-Fi; local recording advertised",
    bestFor:
      "Monitoring a small, specific area where a compact camera is useful.",
    features: [
      "Small design with a built-in magnet.",
      "Flexible semi-rigid USB cable helps position the camera.",
      "Memory-card recording without Wi-Fi is advertised.",
      "A fixed viewing angle may suit a pet bed or feeding area.",
    ],
    limitation:
      "The listing advertises around four hours of continuous battery recording. Verify audio, night vision, power arrangements and app functionality.",
    link: "https://www.amazon.in/GARYVIZ-Security-Magnetic-Wireless-Maagneen/dp/B0HHB522HL?crid=1AGPUPUH64PZG&dib=eyJ2IjoiMSJ9.e8b-MmvbtnfCWMERE5oeMekP6mCwJuxLwpnmWLhO5C7mITA--3CQzAqk5S91hcqnfPJGsz1h4HzYtyGuL44yGIDtASEmwZ2l-wHaKBF6-p1TuJag_BeA2-paC5lM7d68qukkbRVnA6gzYhRM1PQJHLTFet2sLX9A2lZTWkg99PrOQpEVycd8no_QsKeb6S5LLs9siHbj8OENFi5_UO_D2FLUMq2Za4rT0SjbPCW3S2I.kOTPLibzyN2yZ1931ND1nNhTCi5d5z3KqNT7ECRRXbk&dib_tag=se&keywords=BEST+CCTV+CAMERA+FOR+PET&qid=1792729659&sprefix=best+cctv+camera+for+pet%2Caps%2C281&sr=8-17&linkCode=ll2&tag=pricetaghub-21&linkId=2f3209ce82da7da933f2fc360b5167d9&ref_=as_li_ss_tl",
  },
];

const buyingChecks = [
  {
    icon: Smartphone,
    title: "Want to check your pet from work?",
    description:
      "Look for remote live viewing through a compatible phone app and a reliable home internet connection.",
  },
  {
    icon: MessageCircle,
    title: "Want to hear or talk to your pet?",
    description:
      "Choose a camera with a built-in microphone and speaker if two-way audio is important to you.",
  },
  {
    icon: Moon,
    title: "Is your pet active at night?",
    description:
      "Compare infrared and colour night vision according to the lighting in your home.",
  },
  {
    icon: BellRing,
    title: "Want alerts when your pet moves?",
    description:
      "Check which motion alerts are available. Human detection may not recognise animals reliably.",
  },
  {
    icon: Eye,
    title: "Need to see the whole room?",
    description:
      "Pan-tilt cameras and dual-lens models offer different coverage from fixed-angle cameras.",
  },
  {
    icon: ShieldCheck,
    title: "Want to save recordings privately?",
    description:
      "Check memory-card limits, cloud charges, account security and recording controls before buying.",
  },
];

function ProductImage({ camera }) {
  return (
    <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-slate-100">
      <img
        src={camera.image}
        alt={camera.alt}
        loading="lazy"
        className="h-full w-full object-contain p-3"
      />
      <span className="absolute bottom-3 left-3 rounded-full border border-slate-200 bg-white/95 px-3 py-1 text-xs font-bold text-slate-600">
        Camera {camera.id}
      </span>
    </div>
  );
}

function Feature({ children }) {
  return (
    <li className="flex items-start gap-2 text-sm leading-6 text-slate-700">
      <CheckCircle2
        size={17}
        className="mt-1 shrink-0 text-blue-600"
        aria-hidden="true"
      />
      <span>{children}</span>
    </li>
  );
}

export default function PetMonitoringCamerasPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-slate-900">
      {/* HERO: START WITH THE READER'S PROBLEM */}
      <section className="relative isolate border-b border-blue-100 bg-gradient-to-br from-blue-50 via-white to-sky-100">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-20 h-96 w-96 rounded-full bg-blue-200/40 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-sky-200/40 blur-3xl"
        />

        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
          <div className="max-w-5xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/90 px-4 py-2 text-sm font-bold text-blue-700 shadow-sm">
              <Heart size={17} aria-hidden="true" />
              A PRACTICAL GUIDE FOR PET OWNERS
            </div>

            <h1 className="mt-7 max-w-5xl text-4xl font-bold leading-[1.12] tracking-tight text-slate-950 sm:text-5xl md:text-6xl lg:text-7xl">
              Are You Looking to Monitor Your Animals at Home?
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-700 sm:text-xl sm:leading-9">
              Do you leave your dog, cat or other companion alone when you
              go to work, shopping or travel? Do you wonder whether your pet
              is sleeping, moving around or getting into trouble while
              you&apos;re away?
            </p>

            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">
              An indoor monitoring camera can help you check live footage
              from your phone. Depending on the model, you may also be able
              to listen, talk through the camera, receive activity alerts
              and review recordings.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                { icon: Smartphone, text: "Check remotely" },
                { icon: MessageCircle, text: "Listen and talk" },
                { icon: Moon, text: "Night monitoring" },
                { icon: BellRing, text: "Activity alerts" },
              ].map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="inline-flex items-center gap-2 rounded-xl border border-blue-100 bg-white px-4 py-3 text-sm font-bold text-slate-700 shadow-sm"
                >
                  <Icon
                    size={18}
                    className="text-blue-600"
                    aria-hidden="true"
                  />
                  {text}
                </div>
              ))}
            </div>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#compare-cameras"
                className="inline-flex min-h-14 items-center justify-center gap-2 rounded-xl bg-blue-600 px-7 py-4 font-bold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200"
              >
                Compare 5 Pet Monitoring Cameras
                <ArrowRight size={19} aria-hidden="true" />
              </a>
              <a
                href="#choose-camera"
                className="inline-flex min-h-14 items-center justify-center rounded-xl border border-blue-200 bg-white px-7 py-4 font-bold text-blue-800 transition hover:bg-blue-50"
              >
                What Features Do I Need?
              </a>
            </div>

            <p className="mt-5 max-w-2xl text-xs leading-5 text-slate-500">
              This guide compares the features supplied in the product
              listings. Always confirm the exact model specifications
              before purchasing.
            </p>
          </div>
        </div>
      </section>

      {/* EXPLAIN THE PROBLEM BEFORE SHOWING PRODUCTS */}
      <section
        id="choose-camera"
        className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8"
      >
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-wider text-blue-600">
            Start with your needs
          </p>
          <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            What Do You Want to Know About Your Pet When You&apos;re Away?
          </h2>
          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            Not every camera solves the same problem. Think about your
            pet&apos;s routine, the area you want to monitor and which
            features would genuinely help you.
          </p>
        </div>

        <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {buyingChecks.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="group rounded-2xl border border-slate-200 bg-white p-6 transition duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                <Icon size={23} aria-hidden="true" />
              </div>
              <h3 className="mt-5 text-lg font-bold leading-snug text-slate-900">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                {description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* FIVE CAMERA OPTIONS */}
      <section
        id="compare-cameras"
        className="scroll-mt-6 border-y border-blue-100 bg-gradient-to-b from-blue-50/80 via-white to-white"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-wider text-blue-600">
              Explore your options
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              5 Cameras to Help You Monitor Animals at Home
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
              Compare viewing coverage, night vision, audio, alerts and
              recording options. Choose based on what you need to monitor,
              rather than on the number of features alone.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {cameras.map((camera) => (
              <article
                key={camera.id}
                id={`product-${camera.id}`}
                className="scroll-mt-6 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-200 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5"
              >
                <div className="p-4 sm:p-6">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <span className="rounded-full bg-blue-50 px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-blue-700">
                      Option {camera.id}
                    </span>
                    <span className="rounded-full border border-slate-200 px-3 py-1.5 text-xs font-bold text-slate-600">
                      {camera.label}
                    </span>
                  </div>

                  <div className="mt-5 grid gap-5 sm:grid-cols-[0.9fr_1.1fr]">
                    <ProductImage camera={camera} />

                    <div className="min-w-0">
                      <p className="text-sm font-bold text-blue-600">
                        {camera.brand}
                      </p>
                      <h3 className="mt-2 text-xl font-bold leading-snug tracking-tight text-slate-950 sm:text-2xl">
                        {camera.name}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-slate-600">
                        {camera.bestFor}
                      </p>

                      <a
                        href={camera.link}
                        aria-label={`Check details for ${camera.brand} ${camera.name}`}
                        className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-bold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200 sm:w-auto"
                      >
                        Check Product Details
                        <ArrowUpRight size={17} aria-hidden="true" />
                      </a>
                    </div>
                  </div>

                  <div className="mt-7">
                    <h4 className="text-base font-bold text-slate-900">
                      Features That May Help You
                    </h4>
                    <ul className="mt-4 space-y-3">
                      {camera.features.map((feature) => (
                        <Feature key={feature}>{feature}</Feature>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-7">
                    <h4 className="text-base font-bold text-slate-900">
                      Check the Specifications
                    </h4>
                    <dl className="mt-3 grid gap-3 sm:grid-cols-2">
                      {[
                        ["Resolution", camera.resolution],
                        ["Night vision", camera.vision],
                        ["Audio", camera.audio],
                        ["Viewing movement", camera.movement],
                        ["Recording storage", camera.storage],
                        ["Connectivity", camera.connection],
                      ].map(([label, value]) => (
                        <div
                          key={label}
                          className="rounded-xl border border-slate-100 bg-slate-50 p-3.5"
                        >
                          <dt className="text-xs font-bold uppercase tracking-wide text-slate-500">
                            {label}
                          </dt>
                          <dd className="mt-1.5 text-sm leading-6 text-slate-800">
                            {value}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </div>

                  <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-4">
                    <div className="flex items-start gap-3">
                      <Info
                        size={19}
                        className="mt-0.5 shrink-0 text-amber-700"
                        aria-hidden="true"
                      />
                      <div>
                        <h4 className="font-bold text-amber-950">
                          What Should You Check Before Buying?
                        </h4>
                        <p className="mt-2 text-sm leading-6 text-amber-950/90">
                          {camera.limitation}
                        </p>
                      </div>
                    </div>
                  </div>

                  <a
                    href={camera.link}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-blue-700 hover:text-blue-900"
                  >
                    View camera details
                    <ArrowRight size={16} aria-hidden="true" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-wider text-blue-600">
            Compare before choosing
          </p>
          <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            Which Camera Fits Your Monitoring Needs?
          </h2>
          <p className="mt-4 leading-7 text-slate-600">
            Use this table to compare the main features at a glance. Confirm
            the exact specifications for the model you intend to purchase.
          </p>
        </div>

        <div className="mt-8 overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
          <table className="w-full min-w-[850px] border-collapse text-left text-sm">
            <thead className="bg-blue-50">
              <tr>
                <th className="p-4 font-bold text-slate-900">Camera</th>
                <th className="p-4 font-bold text-slate-900">Resolution</th>
                <th className="p-4 font-bold text-slate-900">Night vision</th>
                <th className="p-4 font-bold text-slate-900">Audio</th>
                <th className="p-4 font-bold text-slate-900">Storage</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {cameras.map((camera) => (
                <tr
                  key={camera.id}
                  className="align-top transition hover:bg-blue-50/40"
                >
                  <td className="p-4">
                    <a
                      href={camera.link}
                      className="font-bold text-blue-700 hover:underline"
                    >
                      {camera.brand}
                    </a>
                    <span className="mt-1 block max-w-xs leading-6 text-slate-600">
                      {camera.name}
                    </span>
                  </td>
                  <td className="p-4 leading-6 text-slate-700">
                    {camera.resolution}
                  </td>
                  <td className="p-4 leading-6 text-slate-700">
                    {camera.vision}
                  </td>
                  <td className="p-4 leading-6 text-slate-700">
                    {camera.audio}
                  </td>
                  <td className="p-4 leading-6 text-slate-700">
                    {camera.storage}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs leading-5 text-slate-500">
          On phones, swipe horizontally to view the remaining columns.
        </p>
      </section>

      {/* PROBLEM-FOCUSED FAQ */}
      <section className="border-y border-slate-100 bg-slate-50/70">
        <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-wider text-blue-600">
            Common questions
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Before You Choose a Pet Monitoring Camera
          </h2>

          <div className="mt-8 space-y-4">
            {[
              {
                q: "Can I monitor my pet when I am away from home?",
                a: "A compatible Wi-Fi camera and mobile app can let you view live footage remotely when the camera, internet connection and app are working properly.",
              },
              {
                q: "Can a camera tell me when my dog or cat moves?",
                a: "Many cameras offer motion alerts, but human detection is not the same as pet detection. Check whether the specific model can reliably detect the animals you want to monitor.",
              },
              {
                q: "Can I talk to my pet through a camera?",
                a: "Models with two-way audio typically include a microphone and speaker that let you listen and speak through a compatible app. Audio quality and app features vary.",
              },
              {
                q: "Do pet monitoring cameras work at night?",
                a: "Some cameras offer infrared night vision, while others advertise colour night vision. Check the manufacturer's specifications and consider the lighting in your room.",
              },
              {
                q: "Do I need a memory card or cloud subscription?",
                a: "It depends on the camera and how you want to save footage. Some support local memory cards, cloud storage or both. Verify capacity limits and any subscription charges.",
              },
            ].map((item) => (
              <details
                key={item.q}
                className="group rounded-2xl border border-slate-200 bg-white p-5 open:border-blue-200 open:shadow-sm"
              >
                <summary className="cursor-pointer list-none font-bold leading-7 text-slate-900 marker:hidden">
                  <span className="flex items-start justify-between gap-4">
                    {item.q}
                    <span className="text-xl font-normal text-blue-600 transition group-open:rotate-45">
                      +
                    </span>
                  </span>
                </summary>
                <p className="mt-3 pr-5 text-sm leading-7 text-slate-600">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CALL TO ACTION */}
      <section className="px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 px-6 py-10 text-white shadow-xl shadow-blue-900/10 sm:px-10 sm:py-14 lg:px-14 lg:py-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl"
          />

          <div className="relative max-w-3xl">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15">
              <Heart size={25} aria-hidden="true" />
            </div>

            <h2 className="mt-6 text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Want to Keep an Eye on Your Pet While You&apos;re Away?
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-blue-50 sm:text-lg">
              Compare more cameras, review the features that matter to you
              and choose a monitoring setup that suits your home and your
              animal&apos;s routine.
            </p>

            <a
              href="/pet-monitoring-cameras/more"
              className="mt-8 inline-flex min-h-14 items-center justify-center gap-2 rounded-xl bg-white px-6 py-4 font-bold text-blue-800 transition hover:bg-blue-50 focus:outline-none focus:ring-4 focus:ring-white/40"
            >
              Check More Pet Monitoring Cameras
              <ArrowRight size={19} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      {/* TRUST AND EXPECTATIONS */}
      <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        <div className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-5">
          <ShieldCheck
            size={21}
            className="mt-0.5 shrink-0 text-blue-600"
            aria-hidden="true"
          />
          <p className="text-sm leading-7 text-slate-600">
            Product information is based on the supplied listings and is
            intended to help you compare options. Specifications, apps,
            storage limits and features may vary by model. Verify details
            with the seller. A monitoring camera can help you observe your
            pet, but it does not replace proper supervision and care.
          </p>
        </div>
      </section>
    </main>
  );
}
