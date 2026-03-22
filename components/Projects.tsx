import { Github, ExternalLink } from 'lucide-react'
import { projects } from '@/data/projects'

export default function Projects() {
  return (
    <section id="projects" className="section-shell">
      <div className="section-inner">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <h2 className="section-title">Projects</h2>
          <a
            href="https://github.com/Addes4"
            target="_blank"
            rel="noopener noreferrer"
            className="link-inline"
          >
            <Github size={14} />
            See more on GitHub
          </a>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <article key={project.title} className="border-t border-[color:var(--line)] pt-6">
              <h3 className="text-base font-semibold text-[color:var(--foreground)] mb-2">
                {project.title}
              </h3>
              <p className="text-sm leading-7 text-[color:var(--muted)] mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.map((tech) => (
                  <span key={tech} className="tag">{tech}</span>
                ))}
              </div>
              <div className="flex items-center gap-5">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-inline"
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
                    className="link-inline"
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
