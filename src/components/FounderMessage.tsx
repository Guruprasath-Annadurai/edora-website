export default function FounderMessage() {
  return (
    <section
      id="founder"
      className="border-t border-gray-800 bg-black py-24 sm:py-32"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <p className="text-xs uppercase tracking-tight text-white/60 sm:text-sm">
          A Note From Our Founder
        </p>

        <div className="mt-8 flex flex-col gap-6">
          <p className="text-base leading-relaxed text-white/80 sm:text-lg">
            Every year, millions of students across India spend lakhs of
            rupees on coaching and tuition just to get a fair shot at their
            entrance exams — not because they lack the ability to get in,
            but because they lack access to the kind of one-on-one guidance
            that's usually reserved for whoever can afford it.
          </p>
          <p className="text-base leading-relaxed text-white/80 sm:text-lg">
            I built Edora because I don't think that's fair. A student
            preparing for JEE, NEET, or their board exams shouldn't need a
            tuition budget to get an AI tutor that actually adapts to how
            they learn, remembers where they're struggling, and helps them
            spend their study time on what matters.
          </p>
          <p className="text-base leading-relaxed text-white/80 sm:text-lg">
            That's the whole idea behind Edora: a genuinely personal AI
            tutor in every student's pocket, free to get started, with no
            gatekeeping at the door. If it saves you time, catches a weak
            topic before it costs you marks, or just makes studying feel a
            little less lonely — it's doing its job.
          </p>
          <p className="text-base leading-relaxed text-white/80 sm:text-lg">
            Thank you for trying it. If something isn't working, or if
            there's something Edora should be doing that it isn't yet, I'd
            genuinely like to hear about it — reach out anytime.
          </p>
        </div>

        <div className="mt-10">
          <p className="text-base font-medium text-white">
            Guruprasath Annadurai
          </p>
          <p className="mt-1 text-sm text-white/60">Founder, Edora</p>
        </div>
      </div>
    </section>
  );
}
