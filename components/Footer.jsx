export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">

      <div className="mx-auto max-w-7xl px-6 py-12">

        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr]">

          {/* Brand */}
          <div>

            <a
              href="/"
              className="inline-flex items-center gap-3"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-sm font-medium text-white">
                IH
              </div>

              <div>
                <div className="text-lg font-medium tracking-tight text-slate-950">
                  INFO HUB by K2S INFOTECH
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


          {/* Explore */}
          <div>

            <h3 className="text-sm font-medium text-slate-950">
              Explore
            </h3>

            <div className="mt-4 space-y-3 text-sm text-slate-500">

              <a
                href="/"
                className="block transition hover:text-blue-600"
              >
                Home
              </a>

              <a
                href="/ai"
                className="block transition hover:text-blue-600"
              >
                Artificial Intelligence
              </a>

              <a
                href="/technology"
                className="block transition hover:text-blue-600"
              >
                Technology
              </a>

              <a
                href="/business"
                className="block transition hover:text-blue-600"
              >
                Business
              </a>

            </div>

          </div>


          {/* Topics */}
          <div>

            <h3 className="text-sm font-medium text-slate-950">
              Topics
            </h3>

            <div className="mt-4 space-y-3 text-sm text-slate-500">

              <a
                href="/education"
                className="block transition hover:text-blue-600"
              >
                Education
              </a>

              <a
                href="/health"
                className="block transition hover:text-blue-600"
              >
                Health
              </a>

              <a
                href="/finance"
                className="block transition hover:text-blue-600"
              >
                Finance
              </a>

              <a
                href="/career"
                className="block transition hover:text-blue-600"
              >
                Career
              </a>

            </div>

          </div>


          {/* Information */}
          <div>

            <h3 className="text-sm font-medium text-slate-950">
              Information
            </h3>

            <div className="mt-4 space-y-3 text-sm text-slate-500">

              <a
                href="/about"
                className="block transition hover:text-blue-600"
              >
                About INFO HUB
              </a>

              <a
                href="/contact"
                className="block transition hover:text-blue-600"
              >
                Contact
              </a>

              <a
                href="/privacy"
                className="block transition hover:text-blue-600"
              >
                Privacy Policy
              </a>

              <a
                href="/terms"
                className="block transition hover:text-blue-600"
              >
                Terms of Use
              </a>

            </div>

          </div>

        </div>


        {/* Bottom */}
        <div className="mt-10 flex flex-col gap-3 border-t border-slate-100 pt-6 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">

          <span>
            © 2026 INFO HUB. All rights reserved.
          </span>

          <span>
            Knowledge, organized.
          </span>

        </div>

      </div>

    </footer>
  );
}