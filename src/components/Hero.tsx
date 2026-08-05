import { ArrowRight, Menu } from 'lucide-react';
import { useState } from 'react';
import ShinyText from './ShinyText';

const VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_105406_16f4600d-7a92-4292-b96e-b19156c7830a.mp4';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Features', href: '#features' },
  { label: 'Why Edora', href: '#why-edora' },
  { label: 'Blog', href: '#blog' },
];

function Logo() {
  return (
    <div className="flex items-center gap-2">
      <img
        src="/favicon-512x512.png"
        alt="Edora"
        className="h-7 w-7 invert"
      />
      <span className="text-white font-semibold text-base">Edora</span>
    </div>
  );
}

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-6 sm:px-6 lg:px-8">
        <Logo />

        {/* Desktop nav pill */}
        <div className="hidden items-center gap-1 rounded-full border border-gray-700 px-2 py-1.5 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="rounded-full px-4 py-1.5 text-sm text-white/80 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="flex items-center gap-1.5 rounded-full px-4 py-1.5 text-sm text-white/80 transition-colors hover:text-white"
          >
            Contact us
            <ArrowRight size={14} />
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((v) => !v)}
          className="text-white lg:hidden"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="mx-4 mb-4 flex flex-col gap-1 rounded-2xl border border-gray-700 bg-black/60 p-3 backdrop-blur lg:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-full px-4 py-2 text-sm text-white/80 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-1.5 rounded-full px-4 py-2 text-sm text-white/80 transition-colors hover:text-white"
          >
            Contact us
            <ArrowRight size={14} />
          </a>
        </div>
      )}
    </nav>
  );
}

function TopBlurb() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-4 pt-4 lg:flex-row lg:items-start lg:justify-between lg:gap-8">
        <p className="max-w-md text-sm text-white/80 sm:text-base">
          We deliver an AI-powered personal tutor that empowers every student
          with adaptive practice and real exam simulations to crack JEE, NEET,
          and CBSE.
        </p>
        <p className="max-w-md text-sm text-white/80 sm:text-base lg:text-right">
          Free to Get Started, for Every Student.
        </p>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen w-full overflow-hidden bg-black"
    >
      {/* Video background */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={VIDEO_URL}
        autoPlay
        loop
        muted
        playsInline
      />
      {/* Dark overlay for text contrast */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col">
        <Nav />
        <TopBlurb />

        <div className="flex flex-1 flex-col items-center justify-center px-4 text-center">
          <p className="mb-4 text-xs uppercase tracking-tight text-white/80 sm:text-sm">
            AI-Powered Exam Prep, Free to Start
          </p>

          <h1
            className="font-medium tracking-tighter text-white"
            style={{ lineHeight: 0.85 }}
          >
            <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
              Become
            </span>
            <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
              <ShinyText text="Exam Ready." />
            </span>
          </h1>

          <a
            href="https://play.google.com/store"
            target="_blank"
            rel="noreferrer"
            className="group mt-10 inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-900 md:px-8 md:py-4 md:text-base"
          >
            Download on Play Store
            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
