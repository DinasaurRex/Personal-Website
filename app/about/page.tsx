import { Code2, Cpu, HeartHandshake, Wrench } from 'lucide-react';
import { SiteFrame } from '../SiteFrame';

const notes = [
  {
    title: 'Embedded systems',
    body: 'Motors, sensors, ESP32 boards, Arduino logic, and the satisfying moment when the physical thing finally responds.',
    icon: Cpu,
  },
  {
    title: 'Useful web tools',
    body: 'Full-stack apps with clear data models, real users, and enough polish that people can trust them.',
    icon: Code2,
  },
  {
    title: 'Hands-on support',
    body: 'Technical leadership, tutorials, troubleshooting, and making unfamiliar tools feel less intimidating.',
    icon: HeartHandshake,
  },
];

export default function AboutPage() {
  return (
    <SiteFrame current="about">
      <main className="subpage">
        <section className="page-hero about-hero">
          <div>
            <p className="kicker">About</p>
            <h1>Builder of small systems with a lot of care inside.</h1>
          </div>
          <p>
            I am Costandina Saab, though most people know me as Dina. I study
            electrical engineering at McGill and keep gravitating toward projects
            where hardware, software, and practical usefulness meet.
          </p>
        </section>

        <section className="about-story">
          <div className="story-copy">
            <Wrench aria-hidden="true" className="h-6 w-6 text-[var(--violet)]" />
            <h2>What I tend to build</h2>
            <p>
              My work has moved from classroom tech support to independent web
              development, embedded prototypes, and student tools. I like owning
              the messy middle: translating a need into a system, figuring out
              the parts, testing what breaks, and making the result easier for
              someone else to use.
            </p>
            <p>
              That shows up in projects like Henry Jr., a four-wheel ESP32 robot;
              a self-sustainable Arduino garden; and BuildWith, a platform for
              students looking for projects and teammates.
            </p>
          </div>
          <img
            src="/images/pixel-shelter.png"
            alt="Warm pixel-art shelter surrounded by trees."
            width="966"
            height="680"
          />
        </section>

        <section className="section-wrap tight" aria-labelledby="focus-title">
          <div className="section-heading">
            <p className="kicker">Focus</p>
            <h2 id="focus-title">The parts I keep coming back to.</h2>
          </div>
          <div className="feature-grid">
            {notes.map((note) => {
              const Icon = note.icon;
              return (
                <article className="project-card" key={note.title}>
                  <Icon aria-hidden="true" className="h-6 w-6" />
                  <h3>{note.title}</h3>
                  <span>{note.body}</span>
                </article>
              );
            })}
          </div>
        </section>
      </main>
    </SiteFrame>
  );
}
