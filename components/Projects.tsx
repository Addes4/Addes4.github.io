import { Github, ExternalLink } from 'lucide-react'
import { projects } from '@/data/projects'

export default function Projects() {
  return (
    <section id="projects" className="section-shell bg-[rgba(255,255,255,0.35)]">
      <div className="section-inner">
        <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="section-kicker">Projects</span>
            <h2 className="section-title mt-4">Projects</h2>
            <p className="section-copy mt-5">
              Selected work across software, mathematical modeling, and
              productivity tooling.
            </p>
          </div>

          <a
            href="https://github.com/Addes4"
            target="_blank"
            rel="noopener noreferrer"
            className="link-inline text-sm"
          >
            <Github size={16} />
            See more on GitHub
          </a>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="project-card flex h-full flex-col bg-white"
            >
              <div className="mb-6 flex items-center justify-between gap-4">
                <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[color:var(--muted)]">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="tag">{project.tech[0]}</span>
              </div>

              <div className="flex flex-1 flex-col">
                <h3 className="text-[1.35rem] font-semibold leading-tight text-[color:var(--foreground)]">
                  {project.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-7 text-[color:var(--muted)]">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.slice(1).map((tech) => (
                    <span key={tech} className="tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-7 flex items-center gap-5">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-inline text-sm"
                  >
                    <Github size={14} />
                    Code
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-inline text-sm"
                  >
                    <ExternalLink size={14} />
                    Live Demo
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
