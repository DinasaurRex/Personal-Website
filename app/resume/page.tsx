import { Download, FileText } from 'lucide-react';
import { SiteFrame } from '../SiteFrame';
import { resumeSections, skills } from '../site-content';

export default function ResumePage() {
  return (
    <SiteFrame current="resume">
      <main className="page">
        <section className="page-header split-header">
          <div>
            <p className="eyebrow">Resume</p>
            <h1>Electrical engineering, web development, and embedded systems.</h1>
            <p>
              A readable overview of my education, technical experience, projects,
              and skills.
            </p>
          </div>
          <a className="primary-action" href="/resume/dina-saab-resume.pdf">
            <Download aria-hidden="true" className="h-4 w-4" />
            Download PDF
          </a>
        </section>

        <section className="resume-layout" aria-label="Resume details">
          <div className="resume-main">
            {resumeSections.map((section) => {
              const Icon = section.icon;
              return (
                <section className="content-panel resume-section" key={section.heading}>
                  <div className="panel-heading">
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

          <aside className="content-panel skills-panel">
            <div className="panel-heading">
              <FileText aria-hidden="true" className="h-5 w-5" />
              <h2>Skills</h2>
            </div>
            <div className="skill-list">
              {skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </aside>
        </section>
      </main>
    </SiteFrame>
  );
}
