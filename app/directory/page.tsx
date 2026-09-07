import { ArrowUpRight } from 'lucide-react';
import { SiteFrame } from '../SiteFrame';
import { directorySites } from '../site-content';

export default function DirectoryPage() {
  return (
    <SiteFrame current="directory">
      <main className="subpage">
        <section className="page-hero directory-hero">
          <div>
            <p className="kicker">Directory</p>
            <h1>Other websites and project homes.</h1>
          </div>
          <p>
            A small index for the things I have built, the tools I am shaping,
            and the work that is easiest to understand by opening it.
          </p>
        </section>

        <section className="directory-grid" aria-label="Website directory">
          {directorySites.map((site) => {
            const Icon = site.icon;
            return (
              <article className="directory-card" key={site.href}>
                <img src={site.image} alt="" aria-hidden="true" />
                <div>
                  <span className="status-pill">{site.status}</span>
                  <p>{site.label}</p>
                  <h2>{site.name}</h2>
                  <span>{site.description}</span>
                  <a href={site.href}>
                    <Icon aria-hidden="true" className="h-4 w-4" />
                    Open
                    <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                  </a>
                </div>
              </article>
            );
          })}
        </section>
      </main>
    </SiteFrame>
  );
}
