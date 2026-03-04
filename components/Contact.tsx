import { Github, Linkedin, Mail } from 'lucide-react'

// TODO: Fill in your real LinkedIn URL and email
const socials = [
  {
    icon: Github,
    label: 'GitHub',
    handle: '@Addes4',
    href: 'https://github.com/Addes4',
    external: true,
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    handle: 'Adrian Sohrabi', // TODO: Update handle
    href: 'https://linkedin.com/in/your-profile', // TODO: Update URL
    external: true,
  },
  {
    icon: Mail,
    label: 'Email',
    handle: 'your@email.com', // TODO: Replace with your email
    href: 'mailto:your@email.com',
    external: false,
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-28 bg-[#0a0a0a]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-indigo-400 text-xs font-semibold tracking-[0.2em] uppercase">
            Let&apos;s Talk
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4">
            Get in Touch
          </h2>
          <p className="text-neutral-500 max-w-md mx-auto text-sm leading-relaxed">
            I&apos;m always open to new opportunities, collaborations, or just a
            good conversation. Don&apos;t hesitate to reach out.
          </p>
        </div>

        {/* Social cards */}
        <div className="grid sm:grid-cols-3 gap-5 max-w-2xl mx-auto">
          {socials.map(({ icon: Icon, label, handle, href, external }) => (
            <a
              key={label}
              href={href}
              target={external ? '_blank' : undefined}
              rel={external ? 'noopener noreferrer' : undefined}
              className="group flex flex-col items-center gap-4 p-8 bg-[#111] rounded-2xl border border-white/5 hover:border-indigo-500/30 transition-all duration-200 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center group-hover:bg-indigo-500/20 transition-colors duration-200">
                <Icon size={20} className="text-indigo-400" />
              </div>
              <div className="text-center">
                <p className="text-sm font-semibold text-white">{label}</p>
                <p className="text-xs text-neutral-500 mt-0.5">{handle}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
