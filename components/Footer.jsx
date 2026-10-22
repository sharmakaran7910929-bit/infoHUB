
export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">

          {/* Brand - Left */}
          <div className="max-w-md">
            <a href="/" className="inline-flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-sm font-medium text-white">
                IH
              </div>

              <div>
                <div className="text-lg font-medium tracking-tight text-slate-950">
                  PriceTag HUB by K2S INFOTECH
                </div>

                <div className="text-xs text-slate-400">
                  Knowledge, organized.
                </div>
              </div>
            </a>

            <p className="mt-5 max-w-md text-sm leading-7 text-slate-500">
              A growing knowledge resource covering technology, artificial
              intelligence, business, education, and the ideas shaping the
              modern world.
            </p>
          </div>

          {/* Navigation - Right */}
          <nav className="md:ml-auto">
            <h3 className="text-sm font-medium text-slate-950 md:text-right">
              Explore
            </h3>

            <div className="mt-4 flex flex-col gap-3 text-sm text-slate-500 md:items-end">
              <a href="/" className="transition hover:text-blue-600">
                Home
              </a>

              <a href="/ai" className="transition hover:text-blue-600">
                Artificial Intelligence
              </a>

              <a href="/networking" className="transition hover:text-blue-600">
                Networking
              </a>

              <a href="/economics" className="transition hover:text-blue-600">
                Economics
              </a>

              <a href="/share-market" className="transition hover:text-blue-600">
                Share Market
              </a>
            </div>
          </nav>
        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col gap-3 border-t border-slate-100 pt-6 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 PriceTag HUB. All rights reserved.</span>
          <span>Knowledge, organized.</span>
        </div>
      </div>
    </footer>
  );
}
