import { Github, Linkedin, Mail } from 'lucide-react'

export default function Hero() {
  return (
    <section className="px-0 pb-20 pt-24">
      <div className="section-inner max-w-3xl">
        <p className="text-sm text-[color:var(--muted)] mb-4">Stockholm, Sweden</p>
        <h1 className="text-3xl md:text-4xl font-semibold leading-snug tracking-tight text-[color:var(--foreground)] mb-6">
          Engineering Mathematics student interested in problem solving and mathematical applications.
        </h1>

        <div className="flex flex-wrap gap-3 mb-8">
          <a href="#projects" className="primary-button">View Projects</a>
          <a href="#contact" className="secondary-button">Get in Touch</a>
        </div>

        <div className="flex flex-wrap gap-5">
          <a
            href="https://github.com/Addes4"
            target="_blank"
            rel="noopener noreferrer"
            className="social-pill"
          >
            <Github size={15} />
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/adrian-sohrabi/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-pill"
          >
            <Linkedin size={15} />
            LinkedIn
          </a>
          <a href="mailto:asohrabi@kth.se" className="social-pill">
            <Mail size={15} />
            Email
          </a>
        </div>
      </div>
    </section>
  )
}
