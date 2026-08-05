import { Link } from 'react-router-dom';

const LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Features', href: '#features' },
  { label: 'Why Edora', href: '#why-edora' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-800 bg-black py-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="flex items-center gap-2">
          <img
            src="/favicon-512x512.png"
            alt="Edora"
            className="h-6 w-6 invert"
          />
          <span className="text-sm font-semibold text-white">Edora</span>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-2">
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-white/60 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <Link
            to="/privacy"
            className="text-sm text-white/60 transition-colors hover:text-white"
          >
            Privacy Policy
          </Link>
        </nav>

        <p className="text-xs text-white/40">
          © {year} Edora. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
