
import Breadcrumbs from "../../components/Breadcrumb";
import RelatedTopics from "../../components/ContinueReading";

export default function MarketingLayout({ children }) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">

      {/* Marketing Section Banner */}
      <section className="relative overflow-hidden border-b border-slate-200 bg-white">

        {/* Background Decoration */}
        <div className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-blue-100/60 blur-3xl" />

        <div className="pointer-events-none absolute -right-24 top-10 h-64 w-64 rounded-full bg-indigo-100/50 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

            {/* Section Information */}
            <div>
              <div className="mb-2 flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-blue-600">
                <span className="h-2 w-2 rounded-full bg-blue-600" />
                PriceTag HUB / Marketing
              </div>

              <h1 className="text-2xl font-medium tracking-tight text-slate-950 sm:text-3xl">
                Marketing
              </h1>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
                Explore marketing fundamentals, customer behavior, branding,
                advertising, pricing, distribution, and digital strategies.
                Understand how businesses identify markets, create value,
                communicate with customers, and build sustainable growth.
              </p>
            </div>

            {/* Knowledge Hub Card */}
            <div className="hidden rounded-2xl border border-blue-100 bg-blue-50 px-5 py-4 sm:block">
              <div className="text-xs font-medium uppercase tracking-widest text-blue-500">
                Knowledge Hub
              </div>

              <div className="mt-1 text-sm font-medium text-blue-900">
                Understand markets. Reach customers. Create value.
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="mx-auto w-full max-w-7xl px-4 pt-5 sm:px-6 lg:px-8">
        <Breadcrumbs />
      </div>

      {/* Page Content */}
      <div className="relative">
        {children}
      </div>

      {/* Related Marketing Topics - All 22 Pages */}
      <RelatedTopics
        title="Explore Marketing Topics"
        links={[
          {
            href: "/marketing/what-is-marketing",
            label: "What Is Marketing",
          },
          {
            href: "/marketing/marketing-management",
            label: "Marketing Management",
          },
          {
            href: "/marketing/marketing-mix",
            label: "Marketing Mix",
          },
          {
            href: "/marketing/market-segmentation",
            label: "Market Segmentation",
          },
          {
            href: "/marketing/segmentation-targeting-positioning",
            label: "Segmentation, Targeting & Positioning",
          },
          {
            href: "/marketing/branding",
            label: "Branding",
          },
          {
            href: "/marketing/advertising",
            label: "Advertising",
          },
          {
            href: "/marketing/promotional-mix",
            label: "Promotional Mix",
          },
          {
            href: "/marketing/sales-and-marketing",
            label: "Sales & Marketing",
          },
          {
            href: "/marketing/content-marketing",
            label: "Content Marketing",
          },
          {
            href: "/marketing/what-is-digital-marketing",
            label: "What Is Digital Marketing",
          },
          {
            href: "/marketing/types-of-digital-marketing",
            label: "Types of Digital Marketing",
          },
          {
            href: "/marketing/search-engine-marketing",
            label: "Search Engine Marketing",
          },
          {
            href: "/marketing/search-engine-optimization",
            label: "Search Engine Optimization",
          },
          {
            href: "/marketing/ppc-advertising",
            label: "PPC Advertising",
          },
          {
            href: "/marketing/performance-marketing",
            label: "Performance Marketing",
          },
          {
            href: "/marketing/social-media-marketing",
            label: "Social Media Marketing",
          },
          {
            href: "/marketing/influencer-marketing",
            label: "Influencer Marketing",
          },
          {
            href: "/marketing/affiliate-marketing",
            label: "Affiliate Marketing",
          },
          {
            href: "/marketing/network-marketing",
            label: "Network Marketing",
          },
          {
            href: "/marketing/distribution-channels",
            label: "Distribution Channels",
          },
          {
            href: "/marketing/pricing-strategies",
            label: "Pricing Strategies",
          },
        ]}
      />

    </div>
  );
}
