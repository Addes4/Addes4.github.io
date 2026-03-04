import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
      {/* Background: dot grid */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            'radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* Radial glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] opacity-25 blur-3xl pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center, #6366f1 0%, transparent 65%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 pt-24 pb-20">
        <p className="text-indigo-400 text-xs font-semibold tracking-[0.25em] uppercase mb-5 animate-fade-in">
          Welcome to my portfolio
        </p>

        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-5 leading-[1.1] animate-slide-up">
          <span className="bg-gradient-to-br from-white via-neutral-200 to-indigo-300 bg-clip-text text-transparent">
            Adrian Sohrabi
          </span>
        </h1>

        <p className="text-base md:text-lg text-neutral-400 mb-3 animate-slide-up [animation-delay:100ms] opacity-0 [animation-fill-mode:forwards]">
          Engineering Mathematics @ KTH Royal Institute of Technology
        </p>

        <p className="text-neutral-500 max-w-xl mx-auto mb-10 animate-slide-up [animation-delay:200ms] opacity-0 [animation-fill-mode:forwards]">
          {/* TODO: Add your personal tagline */}
          Passionate about mathematics, software engineering, and building
          things that matter.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-14 animate-slide-up [animation-delay:300ms] opacity-0 [animation-fill-mode:forwards]">
          <a
            href="#projects"
            className="px-6 py-3 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium transition-all duration-200 hover:shadow-lg hover:shadow-indigo-500/30"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-full border border-white/10 hover:border-white/25 text-neutral-300 hover:text-white text-sm font-medium transition-all duration-200"
          >
            Get in Touch
          </a>
        </div>

        {/* Social links */}
        <div className="flex items-center justify-center gap-6 animate-fade-in [animation-delay:500ms] opacity-0 [animation-fill-mode:forwards]">
          <a
            href="https://github.com/Addes4"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-neutral-500 hover:text-white transition-colors duration-200"
          >
            <Github size={20} />
          </a>
          <a
            href="#" // TODO: Replace with your LinkedIn URL
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-neutral-500 hover:text-white transition-colors duration-200"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:your@email.com" // TODO: Replace with your email
            aria-label="Email"
            className="text-neutral-500 hover:text-white transition-colors duration-200"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-neutral-600 hover:text-neutral-400 transition-colors animate-bounce"
        aria-label="Scroll to About"
      >
        <ArrowDown size={18} />
      </a>
    </section>
  )
}
