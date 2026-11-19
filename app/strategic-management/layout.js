import Breadcrumbs from "../../components/Breadcrumb";
import RelatedTopics from "../../components/ContinueReading";

export default function StrategicManagementLayout({ children }) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">

      {/* Strategic Management Section Banner */}
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
                PriceTag HUB / Strategic Management
              </div>

              <h1 className="text-2xl font-medium tracking-tight text-slate-950 sm:text-3xl">
                Strategic Management
              </h1>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
                Explore strategic planning, business analysis, organizational
                decision-making, competitive positioning, and the frameworks
                businesses use to evaluate their environment and achieve
                long-term objectives.
              </p>
            </div>

            {/* Knowledge Hub Card */}
            <div className="hidden rounded-2xl border border-blue-100 bg-blue-50 px-5 py-4 sm:block">
              <div className="text-xs font-medium uppercase tracking-widest text-blue-500">
                Knowledge Hub
              </div>

              <div className="mt-1 text-sm font-medium text-blue-900">
                Understand strategy. Analyze business. Plan ahead.
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

      {/* Related Strategic Management Topics */}
      <RelatedTopics
        title="Explore More About Strategic Management"
        links={[
          {
            href: "/strategic-management/what-is-strategic-management",
            label: "What Is Strategic Management",
          },
          {
            href: "/strategic-management/swot-analysis",
            label: "SWOT Analysis",
          },
          {
            href: "/strategic-management/pestel-analysis",
            label: "PESTEL Analysis",
          },
        ]}
      />

    </div>
  );
}