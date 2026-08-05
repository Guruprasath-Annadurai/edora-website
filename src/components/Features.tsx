import {
  MessageCircleHeart,
  Brain,
  Layers,
  ClipboardCheck,
  Timer,
  Swords,
  LineChart,
  WifiOff,
} from 'lucide-react';

const FEATURES = [
  {
    icon: MessageCircleHeart,
    title: 'Novo, Your AI Tutor',
    description:
      'A personal AI tutor that answers questions, explains concepts, and adapts to how you learn — available whenever you need it.',
  },
  {
    icon: Brain,
    title: 'Adaptive AI Quiz',
    description:
      'Instant quiz generation on any topic, tuned to your weak areas instead of a fixed question bank.',
  },
  {
    icon: Layers,
    title: 'AI Flashcards',
    description:
      'Spaced-repetition flashcards with AI-generated cards from any topic, so review time goes where it matters most.',
  },
  {
    icon: ClipboardCheck,
    title: 'Full Mock Tests',
    description:
      'Timed JEE Main, JEE Advanced, and NEET simulations that mirror real exam conditions.',
  },
  {
    icon: Timer,
    title: 'Study Sprint',
    description:
      'Focused solo or group study sessions with built-in timers, so momentum is easy to build and easy to keep.',
  },
  {
    icon: Swords,
    title: '1v1 Battle',
    description:
      'Real-time quiz battles against other students across Physics, Chemistry, Maths, and Biology.',
  },
  {
    icon: LineChart,
    title: 'Analytics Dashboard',
    description:
      'A clear view of study patterns and weak topics, so the next study session has a clear starting point.',
  },
  {
    icon: WifiOff,
    title: 'Offline Mode',
    description:
      'Study sessions and flashcard reviews keep working without a connection, syncing automatically once you’re back online.',
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-black py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-tight text-white/60 sm:text-sm">
            Features
          </p>
          <h2
            className="mt-4 font-medium tracking-tighter text-white"
            style={{ lineHeight: 0.95 }}
          >
            <span className="block text-4xl sm:text-5xl lg:text-6xl">
              Built for how
            </span>
            <span className="block text-4xl sm:text-5xl lg:text-6xl">
              you actually study.
            </span>
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-gray-800 bg-gray-800 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map(({ icon: Icon, title, description }) => (
            <div key={title} className="bg-black p-6">
              <Icon className="h-6 w-6 text-white" strokeWidth={1.5} />
              <h3 className="mt-4 text-base font-medium text-white">
                {title}
              </h3>
              <p className="mt-2 text-sm text-white/70">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
