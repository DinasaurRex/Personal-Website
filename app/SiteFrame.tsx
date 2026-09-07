import type { ReactNode } from 'react';
import { ArrowUpRight } from 'lucide-react';

const navItems = [
  { key: 'home', label: 'Home', href: '/' },
  { key: 'about', label: 'About', href: '/about' },
  { key: 'resume', label: 'Resume', href: '/resume' },
  { key: 'directory', label: 'Directory', href: '/directory' },
];

const externalItems = [
  { label: 'BuildWith', href: 'https://buildwith.littlerayofdina.com' },
  { label: 'McGillTrack', href: 'https://tracker.littlerayofdina.com/' },
  { label: 'GitHub', href: 'https://github.com/DinasaurRex' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/dinasaab/' },
];

export function SiteFrame({
  children,
  current,
}: {
  children: ReactNode;
  current: 'home' | 'about' | 'resume' | 'directory';
}) {
  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="/" aria-label="Dina Saab home">
          <span className="brand-mark">D</span>
          <span>
            <strong>Dina Saab</strong>
            <small>Electrical engineering</small>
          </span>
        </a>

        <nav className="site-tabs" aria-label="Site pages">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              aria-current={current === item.key ? 'page' : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <nav className="external-tabs" aria-label="External links">
          {externalItems.map((item) => (
            <a key={item.href} href={item.href} target="_blank" rel="noreferrer">
              {item.label}
              <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5" />
            </a>
          ))}
        </nav>
      </header>

      {children}

      <footer className="site-footer">
        <span>Dina Saab</span>
        <span>Hardware, embedded systems, and useful web tools.</span>
      </footer>
    </div>
  );
}
