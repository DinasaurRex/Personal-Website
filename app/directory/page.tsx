import { ArrowUpRight } from 'lucide-react';
import { SiteFrame } from '../SiteFrame';
import { directorySites } from '../site-content';

export default function DirectoryPage() {
  return (
    <SiteFrame current="directory">
      <main className="page">
        <section className="page-header">
          <p className="eyebrow">Directory</p>
          <h1>Websites and project homes.</h1>
          <p>
            A simple index for the tools I have built, the places where they
            live, and the code shelf behind the work.
          </p>
        </section>

        <section className="site-list" aria-label="Website directory">
          {directorySites.map((site) => {
            const Icon = site.icon;
            return (
              <article className="site-row" key={site.href}>
                <div className="site-row-icon">
                  <Icon aria-hidden="true" className="h-5 w-5" />
                </div>
                <div className="site-row-main">
                  <div className="site-row-title">
                    <h2>{site.name}</h2>
                    <span>{site.status}</span>
                  </div>
                  <p>{site.label}</p>
                  <span>{site.description}</span>
                </div>
                <a href={site.href} target="_blank" rel="noreferrer">
                  Open
                  <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                </a>
              </article>
            );
          })}
        </section>
      </main>
    </SiteFrame>
  );
}
