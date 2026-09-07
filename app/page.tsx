import { ArrowRight, Code2, Cpu, GraduationCap, Leaf } from 'lucide-react';
import { SiteFrame } from './SiteFrame';

const strengths = [
  {
    label: 'Embedded systems',
    value: 'ESP32, Arduino, sensors, motor control',
    icon: Cpu,
  },
  {
    label: 'Web development',
    value: 'Next.js, React, TypeScript, Supabase',
    icon: Code2,
  },
  {
    label: 'Engineering path',
    value: 'McGill electrical engineering',
    icon: GraduationCap,
  },
];

const highlights = [
  'Built a full-stack production website for MCommercial and increased traffic by 35%.',
  'Designed Henry Jr., a four-wheel ESP32 remote-controlled companion robot.',
  'Created a 1 x 3 m Arduino-powered self-sustainable garden.',
  'Built BuildWith to help students find projects, competitions, and teammates.',
];

export default function Home() {
  return (
    <SiteFrame current="home">
      <main className="page">
        <section className="home-hero">
          <div className="hero-copy">
            <p className="eyebrow">Little Ray of Dina</p>
            <h1>Dina Saab</h1>
            <p>
              Electrical engineering student building practical tools across
              hardware, embedded systems, and full-stack web development.
            </p>
            <div className="action-row">
              <a className="primary-action" href="/about">
                About
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </a>
              <a className="secondary-action" href="/resume">
                Resume
              </a>
              <a className="secondary-action" href="/directory">
                Directory
              </a>
            </div>
          </div>

          <aside className="focus-panel" aria-labelledby="current-focus">
            <div className="panel-heading">
              <Leaf aria-hidden="true" className="h-5 w-5" />
              <h2 id="current-focus">Current Focus</h2>
            </div>
            <p>
              Learning electrical engineering at McGill while turning ideas into
              working systems: robots, automations, student platforms, and clear
              tools people can actually use.
            </p>
          </aside>
        </section>

        <section className="strength-grid" aria-label="Core strengths">
          {strengths.map((item) => {
            const Icon = item.icon;
            return (
              <article className="metric-card" key={item.label}>
                <Icon aria-hidden="true" className="h-5 w-5" />
                <div>
                  <h2>{item.label}</h2>
                  <p>{item.value}</p>
                </div>
              </article>
            );
          })}
        </section>

        <section className="content-grid">
          <section className="content-panel" aria-labelledby="highlights">
            <div className="section-heading">
              <p className="eyebrow">Highlights</p>
              <h2 id="highlights">What I have been building</h2>
            </div>
            <ul className="plain-list">
              {highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="content-panel" aria-labelledby="next-places">
            <div className="section-heading">
              <p className="eyebrow">Start here</p>
              <h2 id="next-places">Useful places to open</h2>
            </div>
            <div className="link-list">
              <a href="/about">
                Learn about me
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </a>
              <a href="/resume">
                Read my resume
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </a>
              <a href="/directory">
                Visit my websites
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </a>
            </div>
          </section>
        </section>
      </main>
    </SiteFrame>
  );
}
