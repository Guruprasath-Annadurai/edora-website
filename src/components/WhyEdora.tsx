import { CircleCheck } from 'lucide-react';

const REASONS = [
  {
    title: 'Free to get started',
    description:
      'The core app — AI tutor, quizzes, flashcards, mock tests — is free. No trial that quietly expires before you finish a chapter.',
  },
  {
    title: 'Built specifically for JEE, NEET, and CBSE',
    description:
      'Not a general-purpose study app with exam content bolted on — the AI, question generation, and mock tests are built around these exams from the ground up.',
  },
  {
    title: 'Works without a connection',
    description:
      "Offline mode means a train ride or a signal dead zone doesn't have to be a lost study session.",
  },
  {
    title: 'An AI tutor, not just an AI chatbot',
    description:
      'Novo adapts to weak topics over time instead of answering each question in isolation.',
  },
];

export default function WhyEdora() {
  return (
    <section id="why-edora" className="bg-black py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-tight text-white/60 sm:text-sm">
            Why Edora
          </p>
          <h2
            className="mt-4 font-medium tracking-tighter text-white"
            style={{ lineHeight: 0.95 }}
          >
            <span className="block text-4xl sm:text-5xl lg:text-6xl">
              We're early —
            </span>
            <span className="block text-4xl sm:text-5xl lg:text-6xl">
              here's why that's fine.
            </span>
          </h2>
          <p className="mt-6 max-w-lg text-sm text-white/70 sm:text-base">
            Edora is a young app, so you won't find a wall of reviews here
            yet. Here's what we've actually built instead.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {REASONS.map((reason) => (
            <div key={reason.title} className="flex gap-4">
              <CircleCheck
                className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#64CEFB]"
                strokeWidth={1.5}
              />
              <div>
                <h3 className="text-base font-medium text-white">
                  {reason.title}
                </h3>
                <p className="mt-1 text-sm text-white/70">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
