import { Download, FileText } from 'lucide-react';
import { SiteFrame } from '../SiteFrame';
import { resumeSections, skills } from '../site-content';

export default function ResumePage() {
  return (
    <SiteFrame current="resume">
      <main className="subpage">
        <section className="page-hero resume-hero">
          <div>
            <p className="kicker">Resume</p>
            <h1>Electrical engineering, web development, and embedded systems.</h1>
          </div>
          <a className="primary-action" href="/resume/dina-saab-resume.pdf">
            <Download aria-hidden="true" className="h-5 w-5" />
            Download PDF
          </a>
        </section>

        <section className="resume-layout" aria-label="Resume details">
          <div className="resume-main">
            {resumeSections.map((section) => {
              const Icon = section.icon;
              return (
                <section className="resume-section" key={section.heading}>
                  <div className="resume-section-title">
                    <Icon aria-hidden="true" className="h-5 w-5" />
                    <h2>{section.heading}</h2>
                  </div>
                  {section.items.map((item) => (
                    <article
                      className="resume-item"
                      key={`${section.heading}-${item.title}`}
                    >
                      <h3>{item.title}</h3>
                      <p>{item.meta}</p>
                      <span>{item.body}</span>
                    </article>
                  ))}
                </section>
              );
            })}
          </div>
          <aside className="skills-panel">
            <FileText aria-hidden="true" className="h-6 w-6 text-[var(--sun)]" />
            <h2>Technical Skills</h2>
            <div className="skill-list">
              {skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </aside>
        </section>

        <section className="pdf-preview" aria-labelledby="resume-pdf">
          <div className="section-heading">
            <p className="kicker">Original</p>
            <h2 id="resume-pdf">Resume PDF</h2>
          </div>
          <iframe title="Dina Saab resume PDF" src="/resume/dina-saab-resume.pdf" />
        </section>
      </main>
    </SiteFrame>
  );
}
