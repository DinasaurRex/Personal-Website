import { ArrowRight, Sparkles } from 'lucide-react';
import { SiteFrame } from './SiteFrame';
import { artImages, featureProjects, profileLinks } from './site-content';

export default function Home() {
  return (
    <SiteFrame current="home">
      <main>
        <section className="hero">
          <img
            src="/images/moon-clouds.png"
            alt=""
            aria-hidden="true"
            className="hero-art"
            width="736"
            height="414"
          />
          <div className="hero-shade" aria-hidden="true" />
          <div className="hero-content">
            <p className="kicker">Little Ray of Dina</p>
            <h1>Dina Saab</h1>
            <p className="hero-lead">
              Electrical engineering student building warm, practical things at
              the edge of hardware and software.
            </p>
            <div className="hero-actions" aria-label="Primary links">
              <a className="primary-action" href="/about">
                About me
                <ArrowRight aria-hidden="true" className="h-5 w-5" />
              </a>
              <a className="secondary-action" href="/resume">
                Resume
              </a>
              <a className="secondary-action" href="/directory">
                Websites
              </a>
            </div>
          </div>
        </section>

        <section className="intro-band" aria-label="Profile summary">
          <div>
            <Sparkles aria-hidden="true" className="h-5 w-5 text-[var(--sun)]" />
            <p>
              I like projects that become real in your hands: a robot that moves,
              a garden that waters itself, a site that helps someone find their
              next team.
            </p>
          </div>
          <div className="profile-links">
            {profileLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a key={link.href} href={link.href}>
                  <Icon aria-hidden="true" className="h-4 w-4" />
                  {link.label}
                </a>
              );
            })}
          </div>
        </section>

        <section className="section-wrap" aria-labelledby="selected-work">
          <div className="section-heading">
            <p className="kicker">Selected work</p>
            <h2 id="selected-work">Hardware roots, software reach.</h2>
          </div>
          <div className="feature-grid">
            {featureProjects.map((project) => {
              const Icon = project.icon;
              return (
                <article className="project-card" key={project.name}>
                  <Icon aria-hidden="true" className="h-6 w-6" />
                  <p>{project.type}</p>
                  <h3>{project.name}</h3>
                  <span>{project.description}</span>
                </article>
              );
            })}
          </div>
        </section>

        <section className="art-gallery" aria-labelledby="visual-world">
          <div className="section-heading">
            <p className="kicker">Visual world</p>
            <h2 id="visual-world">Calm pixels, blue hour, small sparks.</h2>
          </div>
          <div className="image-mosaic">
            {artImages.map((image) => (
              <figure className={`mosaic-item ${image.size}`} key={image.src}>
                <img src={image.src} alt={image.alt} />
                <figcaption>{image.title}</figcaption>
              </figure>
            ))}
          </div>
        </section>
      </main>
    </SiteFrame>
  );
}
