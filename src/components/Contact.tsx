import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const SUPPORT_EMAIL = 'hello@edora.study';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Message from ${name || 'the Edora website'}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${SUPPORT_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="bg-black py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-xs uppercase tracking-tight text-white/60 sm:text-sm">
              Contact
            </p>
            <h2
              className="mt-4 font-medium tracking-tighter text-white"
              style={{ lineHeight: 0.95 }}
            >
              <span className="block text-4xl sm:text-5xl lg:text-6xl">
                Questions?
              </span>
              <span className="block text-4xl sm:text-5xl lg:text-6xl">
                Talk to us.
              </span>
            </h2>
            <p className="mt-6 max-w-md text-sm text-white/70 sm:text-base">
              Whether it's a bug, a feature request, or a question about
              Edora for your school — reach out and a real person will
              read it.
            </p>
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className="mt-6 inline-block text-sm text-white/80 underline decoration-gray-700 underline-offset-4 transition-colors hover:text-white sm:text-base"
            >
              {SUPPORT_EMAIL}
            </a>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label
                htmlFor="name"
                className="mb-1.5 block text-xs text-white/60"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-xl border border-gray-700 bg-transparent px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/30 focus:border-white/60"
                placeholder="Your name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="mb-1.5 block text-xs text-white/60"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-xl border border-gray-700 bg-transparent px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/30 focus:border-white/60"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="mb-1.5 block text-xs text-white/60"
              >
                Message
              </label>
              <textarea
                id="message"
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full resize-none rounded-xl border border-gray-700 bg-transparent px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/30 focus:border-white/60"
                placeholder="How can we help?"
              />
            </div>
            <button
              type="submit"
              className="group mt-2 inline-flex w-fit items-center gap-2 rounded-full bg-black border border-white/20 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-900"
            >
              Send Message
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
