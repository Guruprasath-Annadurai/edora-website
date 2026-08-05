import { ArrowRight } from 'lucide-react';

const POSTS = [
  {
    title: 'Why Spaced Repetition Beats Re-Reading Your Notes',
    excerpt:
      'The science behind why reviewing a flashcard right before you forget it works better than rereading a chapter five times.',
    date: 'Aug 2026',
    readTime: '4 min read',
  },
  {
    title: 'Building a Revision Timetable That Survives Week Two',
    excerpt:
      'Most study schedules fall apart within days. Here’s how to build one that accounts for the days you don’t stick to it.',
    date: 'Jul 2026',
    readTime: '5 min read',
  },
  {
    title: 'What Actually Changes Between JEE Main and JEE Advanced',
    excerpt:
      'A practical breakdown of how the question style, time pressure, and negative marking differ — and how to prep for both.',
    date: 'Jul 2026',
    readTime: '6 min read',
  },
];

export default function Blog() {
  return (
    <section id="blog" className="bg-black py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-tight text-white/60 sm:text-sm">
              From the Blog
            </p>
            <h2
              className="mt-4 font-medium tracking-tighter text-white"
              style={{ lineHeight: 0.95 }}
            >
              <span className="block text-4xl sm:text-5xl lg:text-6xl">
                Notes on studying
              </span>
              <span className="block text-4xl sm:text-5xl lg:text-6xl">
                smarter.
              </span>
            </h2>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {POSTS.map((post) => (
            <a
              key={post.title}
              href="#"
              className="group flex flex-col rounded-2xl border border-gray-800 p-6 transition-colors hover:border-gray-600"
            >
              <div className="flex items-center gap-2 text-xs text-white/50">
                <span>{post.date}</span>
                <span>·</span>
                <span>{post.readTime}</span>
              </div>
              <h3 className="mt-4 text-lg font-medium text-white">
                {post.title}
              </h3>
              <p className="mt-2 flex-1 text-sm text-white/70">
                {post.excerpt}
              </p>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm text-white/80 transition-colors group-hover:text-white">
                Read article
                <ArrowRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
