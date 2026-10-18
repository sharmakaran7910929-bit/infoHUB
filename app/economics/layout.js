
import Breadcrumbs from "../../components/Breadcrumb";
import RelatedTopics from "../../components/ContinueReading";
export default function EconomicsLayout({ children }) {
  return (
    <div className="min-h-screen w-full bg-slate-50 text-slate-900">
      {/* Economics Section Banner */}
      <section className="relative overflow-hidden border-b border-slate-200 bg-white">
        {/* Background Decoration */}
        <div className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-emerald-100/60 blur-3xl" />

        <div className="pointer-events-none absolute -right-24 top-10 h-64 w-64 rounded-full bg-teal-100/50 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            {/* Section Information */}
            <div>
              <div className="mb-2 flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-emerald-600">
                <span className="h-2 w-2 rounded-full bg-emerald-600" />
                PriceTag HUB / Economics
              </div>

              <h1 className="text-2xl font-medium tracking-tight text-slate-950 sm:text-3xl">
                Economics Learning Hub
              </h1>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
                Understand economic concepts, supply and demand, inflation,
                GDP, financial decisions, economic policies, and markets
                through clear explanations and practical examples.
              </p>
            </div>

            {/* Knowledge Hub Card */}
            <div className="hidden rounded-2xl border border-emerald-100 bg-emerald-50 px-5 py-4 sm:block">
              <div className="text-xs font-medium uppercase tracking-widest text-emerald-600">
                Knowledge Hub
              </div>

              <div className="mt-1 text-sm font-medium text-emerald-900">
                Learn economics step by step
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
      <div className="relative w-full">
        {children}
      </div>

     
    </div>
  );
}
