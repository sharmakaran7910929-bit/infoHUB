export default function AILayout({ children }) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">



      {/* AI Section Banner */}
      <section className="relative overflow-hidden border-b border-slate-200 bg-white">

        {/* Background Decoration */}
        <div className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-blue-100/60 blur-3xl" />

        <div className="pointer-events-none absolute -right-24 top-10 h-64 w-64 rounded-full bg-indigo-100/50 blur-3xl" />


        <div className="relative mx-auto max-w-7xl px-6 py-8">

          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

            {/* Section Information */}
            <div>

              <div className="mb-2 flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-blue-600">

                <span className="h-2 w-2 rounded-full bg-blue-600" />

                INFO HUB / AI

              </div>


              <h1 className="text-2xl font-medium tracking-tight text-slate-950 sm:text-3xl">
                Artificial Intelligence
              </h1>


              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
                Understand artificial intelligence, its applications,
                technologies, tools, and impact on the world.
              </p>

            </div>


            {/* Knowledge Hub Card */}
            <div className="hidden rounded-2xl border border-blue-100 bg-blue-50 px-5 py-4 sm:block">

              <div className="text-xs font-medium uppercase tracking-widest text-blue-500">
                Knowledge Hub
              </div>

              <div className="mt-1 text-sm font-medium text-blue-900">
                Learn AI step by step
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* Page Content */}
      <div className="relative">
        {children}
      </div>


      

    </div>
  );
}