import { Code2, Cpu, HeartHandshake, Wrench } from 'lucide-react';
import { SiteFrame } from '../SiteFrame';

const focusAreas = [
  {
    title: 'Embedded systems',
    body: 'I like physical systems that prove the code is real: motors, sensors, boards, wiring, and iterative testing.',
    icon: Cpu,
  },
  {
    title: 'Full-stack tools',
    body: 'I build web apps with practical structure: usable interfaces, typed code, databases, auth, and maintainable flows.',
    icon: Code2,
  },
  {
    title: 'Technical support',
    body: 'I care about making technology less confusing for people, whether through troubleshooting, tutorials, or team leadership.',
    icon: HeartHandshake,
  },
];

export default function AboutPage() {
  return (
    <SiteFrame current="about">
      <main className="page">
        <section className="page-header">
          <p className="eyebrow">About</p>
          <h1>Builder of small systems with a lot of care inside.</h1>
          <p>
            I am Costandina Saab, though most people know me as Dina. I study
            electrical engineering at McGill and keep coming back to projects
            where hardware, software, and practical usefulness meet.
          </p>
        </section>

        <section className="content-panel story-panel">
          <div className="panel-heading">
            <Wrench aria-hidden="true" className="h-5 w-5" />
            <h2>How I think about building</h2>
          </div>
          <p>
            My work has moved from classroom tech support to independent web
            development, embedded prototypes, and student tools. I like owning
            the middle of a project: understanding the need, choosing the parts,
            testing what breaks, and making the final thing easier for someone
            else to use.
          </p>
          <p>
            That shows up in projects like Henry Jr., a four-wheel ESP32 robot;
            a self-sustainable Arduino garden; and BuildWith, a platform for
            students looking for projects and teammates.
          </p>
        </section>

        <section className="strength-grid" aria-label="Focus areas">
          {focusAreas.map((area) => {
            const Icon = area.icon;
            return (
              <article className="metric-card" key={area.title}>
                <Icon aria-hidden="true" className="h-5 w-5" />
                <div>
                  <h2>{area.title}</h2>
                  <p>{area.body}</p>
                </div>
              </article>
            );
          })}
        </section>
      </main>
    </SiteFrame>
  );
}
