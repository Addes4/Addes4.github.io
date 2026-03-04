import { Github, ExternalLink } from 'lucide-react'
import { projects } from '@/data/projects'

export default function Projects() {
  return (
    <section id="projects" className="py-28 bg-[#0d0d0d]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-indigo-400 text-xs font-semibold tracking-[0.2em] uppercase">
            My Work
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4">
            Projects
          </h2>
          <p className="text-neutral-500 max-w-lg mx-auto text-sm leading-relaxed">
            A selection of things I&apos;ve built, from things that've bugged me,
            and sudden ideas that popped into my head, to mathematical tools.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative bg-[#111] rounded-2xl border border-white/5 p-6 hover:border-indigo-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/30"
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  background:
                    'radial-gradient(circle at 30% 20%, rgba(99,102,241,0.07), transparent 60%)',
                }}
              />

              <div className="relative flex flex-col h-full">
                <h3 className="text-base font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-0.5 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-5">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs text-neutral-500 hover:text-white transition-colors"
                    >
                      <Github size={13} />
                      Code
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs text-neutral-500 hover:text-white transition-colors"
                    >
                      <ExternalLink size={13} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/Addes4"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-white transition-colors duration-200"
          >
            <Github size={15} />
            See more on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
