import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'

const highlights = [
  {
    label: 'Education',
    value: 'Engineering Mathematics at KTH Royal Institute of Technology.',
  },
  {
    label: 'Focus Areas',
    value: 'Problem solving, mathematical modeling, machine learning, quantitative methods for finance and software development.',
  },
  {
    label: 'Current Work',
    value: 'Coursework, student organizations, events, and personal projects.',
  },
]

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-0 pb-24 pt-32 md:pb-28 md:pt-40">
      <div className="section-inner">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_0.9fr] lg:items-start">
          <div className="max-w-3xl">
            <p className="section-kicker mb-6 animate-fade-in">Stockholm, Sweden</p>
            <h1 className="section-title hero-title animate-slide-up">
              Engineering Mathematics student interested in problem solving and mathematical applications.
            </h1>

            <div className="mt-10 flex flex-wrap gap-4 animate-slide-up [animation-delay:200ms] opacity-0 [animation-fill-mode:forwards]">
              <a href="#projects" className="primary-button">
                View Projects
              </a>
              <a href="#contact" className="secondary-button">
                Get in Touch
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-3 animate-fade-in [animation-delay:350ms] opacity-0 [animation-fill-mode:forwards]">
              <a
                href="https://github.com/Addes4"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="social-pill"
              >
                <Github size={16} />
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/adrian-sohrabi/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="social-pill"
              >
                <Linkedin size={16} />
                LinkedIn
              </a>
              <a
                href="mailto:asohrabi@kth.se"
                aria-label="Email"
                className="social-pill"
              >
                <Mail size={16} />
                Email
              </a>
            </div>
          </div>

          <div>
            <div className="paper-card paper-card-strong p-7 md:p-8">
              <p className="section-kicker mb-6">Overview</p>
              <div className="space-y-6">
                {highlights.map((item, index) => (
                  <div
                    key={item.label}
                    className={
                      index > 0 ? 'border-t border-[color:var(--line)] pt-6' : ''
                    }
                  >
                    <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[color:var(--muted)]">
                      {item.label}
                    </p>
                    <p className="mt-2 text-base leading-7 text-[color:var(--foreground)]">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <a
          href="#about"
          className="link-inline mt-16 inline-flex text-sm animate-fade-in [animation-delay:450ms] opacity-0 [animation-fill-mode:forwards]"
        >
          Learn more
          <ArrowDown size={16} />
        </a>
      </div>
    </section>
  )
}
