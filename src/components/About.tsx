const PLATFORMS = [
  { label: 'Android', status: 'Live on Google Play' },
  { label: 'iOS', status: 'Coming soon to the App Store' },
];

export default function About() {
  return (
    <section id="about" className="bg-black py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-xs uppercase tracking-tight text-white/60 sm:text-sm">
              About Edora
            </p>
            <h2
              className="mt-4 font-medium tracking-tighter text-white"
              style={{ lineHeight: 0.95 }}
            >
              <span className="block text-4xl sm:text-5xl lg:text-6xl">
                Where Learning
              </span>
              <span className="block text-4xl sm:text-5xl lg:text-6xl">
                Evolves.
              </span>
            </h2>
          </div>

          <div className="flex flex-col justify-center gap-6">
            <p className="max-w-lg text-sm text-white/80 sm:text-base">
              Edora is an AI-powered study app built for students preparing
              for JEE, NEET, and CBSE. At its center is Novo, a personal AI
              tutor that adapts to how each student learns — pairing that
              with adaptive practice, full-length mock tests, and
              spaced-repetition flashcards so studying stays focused on
              what actually moves the needle.
            </p>
            <p className="max-w-lg text-sm text-white/80 sm:text-base">
              The core app is free to get started, with an optional Pro
              tier for students who want more. No paywall between a
              student and their first study session.
            </p>

            <div className="mt-2 flex flex-wrap gap-3">
              {PLATFORMS.map((p) => (
                <div
                  key={p.label}
                  className="rounded-full border border-gray-700 px-4 py-2 text-xs text-white/80 sm:text-sm"
                >
                  <span className="font-medium text-white">{p.label}</span>
                  <span className="mx-2 text-white/40">·</span>
                  {p.status}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
