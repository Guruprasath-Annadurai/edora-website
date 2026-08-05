import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import {
  PRIVACY_EFFECTIVE,
  PRIVACY_UPDATED,
  PRIVACY_INTRO,
  PRIVACY_SECTIONS,
} from '../content/privacy';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-black">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-sm text-white/60 transition-colors hover:text-white"
        >
          <ArrowLeft size={14} />
          Back to home
        </Link>

        <h1
          className="mt-8 font-medium tracking-tighter text-white"
          style={{ lineHeight: 1.05 }}
        >
          <span className="block text-3xl sm:text-4xl lg:text-5xl">
            Privacy Policy
          </span>
        </h1>
        <p className="mt-3 text-sm text-white/50">
          Edora · Effective date: {PRIVACY_EFFECTIVE} · Last updated:{' '}
          {PRIVACY_UPDATED}
        </p>

        <div className="mt-10 flex flex-col gap-4">
          {PRIVACY_INTRO.map((p, i) => (
            <p key={i} className="text-base leading-relaxed text-white/80">
              {p}
            </p>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-10">
          {PRIVACY_SECTIONS.map((section) => (
            <div key={section.heading}>
              <h2 className="border-b border-gray-800 pb-2 text-lg font-medium text-white">
                {section.heading}
              </h2>
              <div className="mt-4 flex flex-col gap-4">
                {section.paragraphs.map((p, i) => (
                  <p
                    key={i}
                    className="text-base leading-relaxed text-white/80"
                  >
                    {p}
                  </p>
                ))}
                {section.list && (
                  <ul className="ml-5 list-disc space-y-2">
                    {section.list.map((item, i) => (
                      <li
                        key={i}
                        className="text-base leading-relaxed text-white/80"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 border-t border-gray-800 pt-8">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-sm text-white/60 transition-colors hover:text-white"
          >
            <ArrowLeft size={14} />
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}
