import type { ReactNode } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { profileLinks } from './site-content';

const navItems = [
  { key: 'home', label: 'Home', href: '/' },
  { key: 'about', label: 'About', href: '/about' },
  { key: 'resume', label: 'Resume', href: '/resume' },
  { key: 'directory', label: 'Directory', href: '/directory' },
];

export function SiteFrame({
  children,
  current,
}: {
  children: ReactNode;
  current: 'home' | 'about' | 'resume' | 'directory';
}) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="site-header">
        <a className="brand-mark" href="/" aria-label="Dina Saab home">
          <span>D</span>
        </a>
        <nav className="site-nav" aria-label="Primary navigation">
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
        <a className="header-link" href="https://github.com/DinasaurRex">
          GitHub
          <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
        </a>
      </header>
      {children}
      <footer className="site-footer">
        <div>
          <p>Dina Saab</p>
          <span>Electrical engineering, embedded systems, and useful web tools.</span>
        </div>
        <div className="footer-links">
          {profileLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a key={link.href} href={link.href} aria-label={link.label}>
                <Icon aria-hidden="true" className="h-4 w-4" />
                {link.label}
              </a>
            );
          })}
        </div>
      </footer>
    </div>
  );
}
