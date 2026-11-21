
import {
  ArrowRight,
  Award,
  BadgeCheck,
  BarChart3,
  Brain,
  Building2,
  Check,
  ChevronRight,
  CircleDollarSign,
  Compass,
  Eye,
  Heart,
  Layers3,
  Lightbulb,
  MessageCircle,
  Package,
  Palette,
  Repeat2,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Star,
  Target,
  TrendingUp,
  Users,
  X,
} from "lucide-react";
import AdSlot from "../../../components/AdSlot";

export const metadata = {
  title: "Branding | Meaning, Importance, Strategy & Real Examples",
  description:
    "Understand branding, how businesses build recognition and trust, what makes a strong brand, and how branding influences customer decisions with practical examples.",
};

export default function BrandingPage() {
  const understandItems = [
    {
      icon: Eye,
      title: "Recognition",
      text: "Help people identify and remember your business among alternatives.",
    },
    {
      icon: ShieldCheck,
      title: "Trust",
      text: "Create expectations customers feel confident relying on.",
    },
    {
      icon: Heart,
      title: "Connection",
      text: "Build an emotional relationship beyond a single purchase.",
    },
    {
      icon: Target,
      title: "Preference",
      text: "Give customers meaningful reasons to choose you over competitors.",
    },
  ];

  const brandingElements = [
    {
      icon: BadgeCheck,
      title: "Name",
      text: "A memorable name that is easy to recognize, pronounce, and associate with the business.",
    },
    {
      icon: Palette,
      title: "Visual Identity",
      text: "Logo, colors, typography, design style, and visual consistency.",
    },
    {
      icon: MessageCircle,
      title: "Brand Voice",
      text: "The way the business speaks, writes, explains, and communicates with people.",
    },
    {
      icon: Target,
      title: "Positioning",
      text: "The place the business wants to occupy in the customer's mind compared with alternatives.",
    },
    {
      icon: Award,
      title: "Values & Promise",
      text: "The principles and expectations that guide what the brand promises to deliver.",
    },
    {
      icon: ShoppingBag,
      title: "Customer Experience",
      text: "What people experience while browsing, buying, using, contacting, and returning.",
    },
  ];

  const brandingSteps = [
    {
      number: "01",
      icon: Users,
      title: "Understand Customers",
      text: "Learn who your customers are, what they need, what frustrates them, and what matters when they make decisions.",
    },
    {
      number: "02",
      icon: Target,
      title: "Define Your Position",
      text: "Decide what you want to be known for and why customers should choose you instead of another option.",
    },
    {
      number: "03",
      icon: Palette,
      title: "Create Your Identity",
      text: "Build a recognizable visual style, message, voice, and experience that supports your positioning.",
    },
    {
      number: "04",
      icon: Repeat2,
      title: "Deliver Consistently",
      text: "Keep the promise across your product, service, marketing, customer support, and everyday interactions.",
    },
  ];

  const positioningExamples = [
    {
      name: "Coffee A",
      position: "Affordable everyday coffee",
      color: "bg-blue-500",
    },
    {
      name: "Coffee B",
      position: "Premium handcrafted experience",
      color: "bg-violet-500",
    },
    {
      name: "Coffee C",
      position: "Fast coffee for busy commuters",
      color: "bg-sky-500",
    },
  ];

  const smallBusinessSteps = [
    ["Identity", "A consistent name, logo, colors, and packaging"],
    ["Positioning", "Freshly made products for the local community"],
    ["Communication", "Clear menus, prices, product photos, and updates"],
    ["Experience", "Clean shop, reliable quality, friendly service"],
    ["Consistency", "Delivering the same standards on every visit"],
  ];

  const benefits = [
    {
      icon: Eye,
      title: "Better Recognition",
      text: "Distinctive visual and communication elements make the business easier to remember.",
    },
    {
      icon: ShieldCheck,
      title: "Trust & Credibility",
      text: "Consistent delivery can reduce uncertainty and increase customer confidence.",
    },
    {
      icon: Star,
      title: "Customer Preference",
      text: "A meaningful brand gives customers reasons to select it over alternatives.",
    },
    {
      icon: Repeat2,
      title: "Customer Loyalty",
      text: "Positive experiences and familiar associations can encourage repeat purchases.",
    },
    {
      icon: CircleDollarSign,
      title: "Pricing Strength",
      text: "Strong perceived value may reduce the need to compete on price alone.",
    },
    {
      icon: BarChart3,
      title: "Long-Term Growth",
      text: "Brand recognition and reputation can support expansion into new markets and products.",
    },
  ];

  const mistakes = [
    {
      title: "Thinking Branding Is Just a Logo",
      text: "A logo cannot compensate for unclear positioning, inconsistent communication, or poor customer experience.",
    },
    {
      title: "Copying Competitors",
      text: "Copying another brand can make the business look less distinctive and harder to remember.",
    },
    {
      title: "Changing Identity Too Frequently",
      text: "Frequent unnecessary changes can weaken recognition and confuse existing customers.",
    },
    {
      title: "Making Promises You Cannot Deliver",
      text: "A brand promise that does not match the actual experience damages credibility.",
    },
    {
      title: "Trying to Attract Everyone",
      text: "A brand with no clear target customer or positioning can struggle to communicate its value.",
    },
    {
      title: "Ignoring Customer Experience",
      text: "Advertising may create expectations, but the product, service, and support ultimately shape perception.",
    },
  ];

  const checklist = [
    "Can people clearly understand what my business offers?",
    "Do I know exactly which customers I want to reach?",
    "Can I explain why someone should choose my business?",
    "Do my name, colors, logo, and communication look consistent?",
    "Does my product or service deliver what I promise?",
    "Is the customer experience reliable?",
    "Can customers easily remember and find my business again?",
  ];

  const faqs = [
    {
      question: "What Is Branding in Simple Words?",
      answer:
        "Branding is the process of shaping how people recognize, understand, remember, and feel about a business, product, or organization. It includes identity, communication, positioning, values, and customer experience.",
    },
    {
      question: "What Is the Difference Between a Brand and Branding?",
      answer:
        "A brand is the perception people hold about a business. Branding is the work a business does to influence and shape that perception over time.",
    },
    {
      question: "Is Branding Only About a Logo?",
      answer:
        "No. A logo is one part of brand identity. Branding also includes positioning, communication, reputation, customer experience, values, and the expectations a business creates.",
    },
    {
      question: "Why Is Branding Important?",
      answer:
        "Branding can help businesses become recognizable, communicate their value, build trust, differentiate from competitors, encourage repeat customers, and create a stronger customer preference.",
    },
    {
      question: "Can a Small Business Build a Brand?",
      answer:
        "Yes. Small businesses can build brands by having a clear identity, understanding their target customers, communicating consistently, offering dependable quality, and delivering a good experience. Large budgets are not a requirement for brand clarity.",
    },
    {
      question: "How Long Does It Take to Build a Brand?",
      answer:
        "Branding is an ongoing process. Recognition and trust usually develop through repeated exposure, consistent communication, customer experiences, and time. There is no fixed timeline that applies to every business.",
    },
    {
      question: "Does Branding Increase Sales?",
      answer:
        "Branding can contribute to sales by increasing recognition, trust, preference, and customer loyalty. However, sales also depend on product quality, pricing, distribution, competition, demand, and other factors.",
    },
    {
      question: "What Are the Main Elements of Branding?",
      answer:
        "Common elements include brand name, logo, colors, typography, visual identity, brand voice, positioning, values, messaging, product quality, and customer experience.",
    },
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-white text-slate-800">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50 to-sky-100">
        <div className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-blue-200/30 blur-3xl" />
        <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-sky-300/30 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 py-16 sm:px-8 md:py-24 lg:grid-cols-2 lg:px-10">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-sm text-blue-700">
              <Sparkles size={16} />
              Business & Marketing
            </div>

            <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Branding: How Businesses Become{" "}
              <span className="text-blue-600">Recognizable</span> and Trusted
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Why do people choose one company over another—even when both offer
              similar products? Branding shapes what customers recognize, feel,
              remember, and expect from a business.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#understand"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 font-bold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
              >
                Understand Branding
                <ArrowRight size={18} />
              </a>
              <a
                href="#examples"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 font-bold text-slate-700 transition hover:border-blue-300 hover:text-blue-700"
              >
                Real-World Examples
              </a>
            </div>

            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <Check size={16} className="text-blue-600" />
                Customer-focused
              </div>
              <div className="flex items-center gap-2">
                <Check size={16} className="text-blue-600" />
                Practical examples
              </div>
              <div className="flex items-center gap-2">
                <Check size={16} className="text-blue-600" />
                Business perspective
              </div>
            </div>
          </div>

          {/* HERO DIAGRAM */}
          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute inset-4 rounded-[2.5rem] bg-blue-300/30 blur-2xl" />

            <div className="relative rounded-[2rem] border border-white/80 bg-white/80 p-5 shadow-2xl shadow-blue-900/10 backdrop-blur-xl sm:p-7">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold text-slate-500">
                    How a brand connects
                  </p>
                  <h2 className="mt-1 text-xl font-bold text-slate-900">
                    From Business to Perception
                  </h2>
                </div>
                <div className="rounded-2xl bg-blue-100 p-3 text-blue-700">
                  <Brain size={24} />
                </div>
              </div>

              <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-sky-500 p-5 text-white">
                <div className="flex items-center gap-4">
                  <div className="rounded-xl bg-white/20 p-3">
                    <Building2 size={26} />
                  </div>
                  <div>
                    <p className="text-sm text-blue-100">The Business</p>
                    <p className="font-bold">What You Offer</p>
                  </div>
                </div>
              </div>

              <div className="flex justify-center py-3">
                <div className="flex flex-col items-center text-blue-500">
                  <div className="h-5 w-px bg-blue-300" />
                  <ChevronRight size={18} className="rotate-90" />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2">
                <div className="rounded-2xl border border-blue-100 bg-blue-50 p-3 text-center">
                  <Palette size={21} className="mx-auto text-blue-600" />
                  <p className="mt-2 text-xs font-bold text-slate-800">
                    Visual Identity
                  </p>
                </div>
                <div className="rounded-2xl border border-blue-100 bg-blue-50 p-3 text-center">
                  <MessageCircle size={21} className="mx-auto text-blue-600" />
                  <p className="mt-2 text-xs font-bold text-slate-800">
                    Communication
                  </p>
                </div>
                <div className="rounded-2xl border border-blue-100 bg-blue-50 p-3 text-center">
                  <Heart size={21} className="mx-auto text-blue-600" />
                  <p className="mt-2 text-xs font-bold text-slate-800">
                    Experience
                  </p>
                </div>
              </div>

              <div className="my-4 flex justify-center">
                <div className="flex flex-col items-center text-blue-500">
                  <div className="h-4 w-px bg-blue-300" />
                  <ChevronRight size={18} className="rotate-90" />
                </div>
              </div>

              <div className="rounded-2xl border border-sky-100 bg-gradient-to-r from-sky-50 to-blue-50 p-5">
                <div className="flex items-center gap-4">
                  <div className="rounded-xl bg-blue-100 p-3 text-blue-700">
                    <Brain size={26} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">
                      The Customer&apos;s Mind
                    </p>
                    <p className="font-bold text-slate-900">
                      Recognition · Trust · Preference
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-5 flex items-center justify-center gap-2 text-sm font-bold text-blue-700">
                <Repeat2 size={16} />
                Consistency Builds Familiarity
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT YOU WILL UNDERSTAND */}
      <section
        id="understand"
        className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10"
      >
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-wider text-blue-600">
            What You Will Understand
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Branding Is More Than a Name or a Logo
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            A logo may help people identify a business, but a brand is the
            overall impression people develop through their experiences,
            communication, reputation, and expectations.
          </p>
        </div>

        <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {understandItems.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
            >
              <div className="inline-flex rounded-xl bg-blue-50 p-3 text-blue-600">
                <item.icon size={23} />
              </div>
              <h3 className="mt-4 text-lg font-bold text-slate-900">
                {item.title}
              </h3>
              <p className="mt-2 leading-7 text-slate-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY BRANDING MATTERS */}
      <section className="bg-slate-50">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:px-10">
          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-blue-600">
              The Business Problem
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              What Happens When a Business Has No Clear Brand?
            </h2>
            <p className="mt-5 leading-8 text-slate-600">
              Imagine two shops selling the same product at almost the same
              price. One looks familiar, communicates clearly, and has a
              reputation for reliability. The other is unknown and gives
              customers no reason to feel confident.
            </p>
            <p className="mt-4 leading-8 text-slate-600">
              Customers often choose the familiar option—not necessarily
              because its product is better, but because they have a clearer
              idea of what to expect.
            </p>
          </div>

          <div className="grid gap-4">
            <div className="rounded-2xl border border-red-100 bg-white p-5 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-red-50 p-3 text-red-500">
                  <X size={22} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">
                    Without Clear Branding
                  </h3>
                  <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-600">
                    <li>• Customers struggle to remember the business.</li>
                    <li>• The business looks similar to its competitors.</li>
                    <li>• Every sale may depend heavily on price.</li>
                    <li>• Customers have little reason to return.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-emerald-100 bg-white p-5 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-emerald-50 p-3 text-emerald-600">
                  <Check size={22} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">
                    With Clear Branding
                  </h3>
                  <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-600">
                    <li>• Customers can recognize the business more easily.</li>
                    <li>• A distinct identity sets it apart.</li>
                    <li>• Trust can grow through consistent experiences.</li>
                    <li>• Customers may return and recommend it.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AdSlot />

      {/* BRAND VS BRANDING VS IDENTITY */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-wider text-blue-600">
            Clear the Confusion
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Brand, Branding, and Brand Identity Are Not the Same
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            These terms are often used interchangeably, but each describes a
            different part of how a business is perceived and presented.
          </p>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 p-6">
            <div className="w-fit rounded-xl bg-blue-50 p-3 text-blue-600">
              <Brain size={24} />
            </div>
            <h3 className="mt-4 text-xl font-bold text-slate-900">Brand</h3>
            <p className="mt-3 leading-7 text-slate-600">
              The perception, reputation, associations, and expectations that
              people hold about a business, product, or organization.
            </p>
            <div className="mt-5 rounded-xl bg-slate-50 p-4 text-sm text-slate-600">
              <span className="font-bold text-slate-900">In simple terms:</span>{" "}
              What people think and feel about you.
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 p-6">
            <div className="w-fit rounded-xl bg-sky-50 p-3 text-sky-600">
              <Compass size={24} />
            </div>
            <h3 className="mt-4 text-xl font-bold text-slate-900">Branding</h3>
            <p className="mt-3 leading-7 text-slate-600">
              The strategic work of shaping that perception through
              positioning, identity, communication, values, and customer
              experience.
            </p>
            <div className="mt-5 rounded-xl bg-slate-50 p-4 text-sm text-slate-600">
              <span className="font-bold text-slate-900">In simple terms:</span>{" "}
              What you do to shape how people perceive you.
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 p-6">
            <div className="w-fit rounded-xl bg-indigo-50 p-3 text-indigo-600">
              <Layers3 size={24} />
            </div>
            <h3 className="mt-4 text-xl font-bold text-slate-900">
              Brand Identity
            </h3>
            <p className="mt-3 leading-7 text-slate-600">
              The visible and recognizable elements used to represent the
              brand, such as its logo, colors, typography, packaging, and
              design style.
            </p>
            <div className="mt-5 rounded-xl bg-slate-50 p-4 text-sm text-slate-600">
              <span className="font-bold text-slate-900">In simple terms:</span>{" "}
              How people visually recognize you.
            </div>
          </div>
        </div>
      </section>

      {/* ELEMENTS OF BRANDING */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-sky-50">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-wider text-blue-600">
              The Building Blocks
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              What Makes a Brand Recognizable?
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Branding is created through several connected elements. A
              business does not need to be famous or large to use them—it needs
              to use them intentionally and consistently.
            </p>
          </div>

          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {brandingElements.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white bg-white p-5 shadow-sm transition hover:shadow-md"
              >
                <div className="w-fit rounded-xl bg-blue-50 p-3 text-blue-600">
                  <item.icon size={23} />
                </div>
                <h3 className="mt-4 text-lg font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2 leading-7 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW BRANDING WORKS */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-wider text-blue-600">
            The Process
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            How Branding Actually Works
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Branding is not just a design exercise. It is a continuous process
            of deciding how a business wants to be known, communicating that
            idea, delivering on it, and building familiarity over time.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {brandingSteps.map((item) => (
            <div
              key={item.number}
              className="relative rounded-2xl border border-slate-200 bg-white p-5"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-blue-600">
                  STEP {item.number}
                </span>
                <item.icon size={23} className="text-blue-500" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-slate-900">
                {item.title}
              </h3>
              <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <AdSlot />

      {/* BRAND POSITIONING */}
      <section className="bg-slate-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:px-10">
          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-blue-300">
              Strategic Branding
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Why Brand Positioning Matters
            </h2>
            <p className="mt-5 leading-8 text-slate-300">
              A business cannot be everything to everyone. Positioning helps it
              decide which customers it wants to serve, what value it wants to
              emphasize, and how it should be different from competitors.
            </p>
            <p className="mt-4 leading-8 text-slate-300">
              Without clear positioning, marketing can become inconsistent:
              different advertisements communicate different ideas, and
              customers struggle to understand what the business stands for.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-6 sm:p-8">
            <h3 className="text-xl font-bold">A Positioning Example</h3>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              Three coffee businesses can sell coffee but focus on different
              customer reasons to choose them.
            </p>

            <div className="mt-6 space-y-3">
              {positioningExamples.map((item) => (
                <div
                  key={item.name}
                  className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.04] p-4"
                >
                  <div className={`h-11 w-2 rounded-full ${item.color}`} />
                  <div>
                    <p className="font-bold">{item.name}</p>
                    <p className="mt-1 text-sm text-slate-300">
                      {item.position}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-xl bg-blue-500/10 p-4 text-sm leading-6 text-blue-200">
              The products may be similar, but the branding creates different
              expectations and attracts different customer preferences.
            </div>
          </div>
        </div>
      </section>

      {/* REAL-WORLD EXAMPLES */}
      <section
        id="examples"
        className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10"
      >
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-wider text-blue-600">
            Branding in the Real World
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            How Successful Brands Create Meaning
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Looking at familiar businesses makes branding easier to
            understand. Their strength is not only what they sell, but also
            the associations customers have developed with them.
          </p>
        </div>

        <div className="mt-10 space-y-5">
          {/* APPLE */}
          <div className="grid overflow-hidden rounded-3xl border border-slate-200 md:grid-cols-[220px_1fr]">
            <div className="flex flex-col justify-center bg-gradient-to-br from-slate-900 to-slate-700 p-7 text-white">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
                <Package size={28} />
              </div>
              <h3 className="text-2xl font-bold">Apple</h3>
              <p className="mt-2 text-sm text-slate-300">
                Design & Ecosystem
              </p>
            </div>
            <div className="p-6 sm:p-8">
              <h4 className="text-lg font-bold text-slate-900">
                More Than Selling Devices
              </h4>
              <p className="mt-3 leading-7 text-slate-600">
                Apple is widely associated with product design, a simplified
                experience, a connected ecosystem, and premium positioning.
                Consistent product design, stores, packaging, advertising, and
                software experiences reinforce these associations.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {["Design", "Premium perception", "Ecosystem", "Consistency"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-bold text-slate-700"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>

          {/* NIKE */}
          <div className="grid overflow-hidden rounded-3xl border border-slate-200 md:grid-cols-[220px_1fr]">
            <div className="flex flex-col justify-center bg-gradient-to-br from-orange-600 to-red-500 p-7 text-white">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15">
                <TrendingUp size={28} />
              </div>
              <h3 className="text-2xl font-bold">Nike</h3>
              <p className="mt-2 text-sm text-orange-100">
                Sport & Motivation
              </p>
            </div>
            <div className="p-6 sm:p-8">
              <h4 className="text-lg font-bold text-slate-900">
                Selling a Feeling, Not Just Footwear
              </h4>
              <p className="mt-3 leading-7 text-slate-600">
                Nike&apos;s branding connects products with athletic
                achievement, motivation, effort, identity, and sport. Its
                communications often encourage people to see themselves as
                capable of doing more.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {["Motivation", "Athletic identity", "Emotion", "Performance"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-orange-50 px-3 py-1.5 text-xs font-bold text-orange-700"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>

          {/* AMUL */}
          <div className="grid overflow-hidden rounded-3xl border border-slate-200 md:grid-cols-[220px_1fr]">
            <div className="flex flex-col justify-center bg-gradient-to-br from-blue-700 to-blue-500 p-7 text-white">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15">
                <Award size={28} />
              </div>
              <h3 className="text-2xl font-bold">Amul</h3>
              <p className="mt-2 text-sm text-blue-100">
                Familiarity & Trust
              </p>
            </div>
            <div className="p-6 sm:p-8">
              <h4 className="text-lg font-bold text-slate-900">
                Building a Familiar Indian Identity
              </h4>
              <p className="mt-3 leading-7 text-slate-600">
                Amul is recognized through its product packaging, dairy
                associations, distribution presence, and long-running topical
                advertising. Familiarity across generations helps keep the
                brand recognizable in everyday consumer decisions.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {["Familiarity", "Consistency", "Indian identity", "Trust"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-blue-50 px-3 py-1.5 text-xs font-bold text-blue-700"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>

          {/* COCA-COLA */}
          <div className="grid overflow-hidden rounded-3xl border border-slate-200 md:grid-cols-[220px_1fr]">
            <div className="flex flex-col justify-center bg-gradient-to-br from-red-700 to-rose-500 p-7 text-white">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15">
                <Heart size={28} />
              </div>
              <h3 className="text-2xl font-bold">Coca-Cola</h3>
              <p className="mt-2 text-sm text-red-100">
                Emotion & Connection
              </p>
            </div>
            <div className="p-6 sm:p-8">
              <h4 className="text-lg font-bold text-slate-900">
                Linking a Product With Shared Moments
              </h4>
              <p className="mt-3 leading-7 text-slate-600">
                Coca-Cola has repeatedly connected its branding with
                happiness, celebration, sharing, friendship, and social
                moments. Its recognizable visual elements and broad marketing
                reinforce these emotional associations.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {["Emotion", "Shared moments", "Visual recognition", "Memory"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-red-50 px-3 py-1.5 text-xs font-bold text-red-700"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SMALL BUSINESS APPLICATION */}
      <section className="bg-blue-50">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:px-10">
          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-blue-600">
              For Small Businesses
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Branding Is Not Only for Big Companies
            </h2>
            <p className="mt-5 leading-8 text-slate-600">
              A local bakery, freelancer, repair shop, online seller, or small
              startup can benefit from clear branding. The goal is not to spend
              heavily on advertising or design. It is to create a clear
              identity and a dependable customer experience.
            </p>
            <p className="mt-4 leading-8 text-slate-600">
              Customers should be able to understand what you offer, who you
              serve, why you are worth choosing, and what they can expect when
              they deal with you.
            </p>
          </div>

          <div className="rounded-3xl border border-blue-100 bg-white p-6 shadow-sm sm:p-8">
            <h3 className="text-xl font-bold text-slate-900">
              Example: A Local Bakery
            </h3>
            <p className="mt-3 leading-7 text-slate-600">
              Instead of trying to look like every bakery, it could build its
              identity around fresh products, local ingredients, and friendly
              service.
            </p>

            <div className="mt-6 space-y-4">
              {smallBusinessSteps.map(([label, value]) => (
                <div key={label} className="flex gap-3">
                  <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                    <Check size={15} />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">{label}</p>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      {value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <AdSlot />

      {/* BENEFITS */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-wider text-blue-600">
            Business Impact
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            What Good Branding Can Help a Business Achieve
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Strong branding does not guarantee success, but it can support
            growth by making the business easier to recognize, understand,
            trust, and choose.
          </p>
        </div>

        <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-white p-5"
            >
              <div className="w-fit rounded-xl bg-blue-50 p-3 text-blue-600">
                <item.icon size={23} />
              </div>
              <h3 className="mt-4 text-lg font-bold text-slate-900">
                {item.title}
              </h3>
              <p className="mt-2 leading-7 text-slate-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* COMMON MISTAKES */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-wider text-blue-600">
              Common Mistakes
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Branding Mistakes Businesses Should Avoid
            </h2>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {mistakes.map((item) => (
              <div
                key={item.title}
                className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                  <Lightbulb size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">{item.title}</h3>
                  <p className="mt-2 leading-7 text-slate-600">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BRANDING CHECKLIST */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
        <div className="rounded-3xl bg-gradient-to-br from-blue-700 via-blue-600 to-sky-500 p-7 text-white shadow-xl shadow-blue-600/10 sm:p-10">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="inline-flex rounded-xl bg-white/15 p-3">
                <BadgeCheck size={26} />
              </div>
              <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
                A Simple Branding Checklist
              </h2>
              <p className="mt-4 leading-8 text-blue-100">
                If you are building a brand, start by answering these
                questions. You do not need a perfect brand on day one—but you
                do need clarity and consistency.
              </p>
            </div>

            <div className="space-y-3">
              {checklist.map((question) => (
                <div
                  key={question}
                  className="flex items-start gap-3 rounded-xl border border-white/15 bg-white/10 p-4"
                >
                  <div className="mt-0.5 rounded-full bg-white/20 p-1">
                    <Check size={15} />
                  </div>
                  <p className="text-sm leading-6 text-white">{question}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-wider text-blue-600">
              Frequently Asked Questions
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Branding FAQs
            </h2>
          </div>

          <div className="mt-8 space-y-4">
            {faqs.map((item) => (
              <details
                key={item.question}
                className="group rounded-2xl border border-slate-200 bg-white p-5 open:border-blue-200 open:shadow-sm"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-slate-900 [&::-webkit-details-marker]:hidden">
                  {item.question}
                  <ChevronRight
                    size={18}
                    className="shrink-0 text-blue-600 transition group-open:rotate-90"
                  />
                </summary>
                <p className="mt-4 border-t border-slate-100 pt-4 leading-7 text-slate-600">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL TAKEAWAY */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
        <div className="rounded-3xl border border-blue-100 bg-gradient-to-br from-white via-blue-50 to-sky-100 p-7 sm:p-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
            <div className="rounded-2xl bg-blue-600 p-4 text-white shadow-lg shadow-blue-600/20">
              <Sparkles size={28} />
            </div>
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                The Real Meaning of Branding
              </h2>
              <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
                Branding is about creating a clear and consistent impression
                that helps people recognize your business, understand what it
                stands for, trust what it offers, and remember it when they
                need to make a choice.
              </p>
              <p className="mt-4 max-w-3xl font-bold leading-8 text-slate-800">
                A business creates a brand not just through what it says—but
                through what customers repeatedly see, experience, and believe.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
