import { Github, Linkedin, Mail } from 'lucide-react'

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
    handle: 'Adrian Sohrabi',
    href: 'https://linkedin.com/in/adrian-sohrabi/',
    external: true,
  },
  {
    icon: Mail,
    label: 'Email',
    handle: 'asohrabi@kth.se',
    href: 'mailto:asohrabi@kth.se',
    external: false,
  },
]

export default function Contact() {
  return (
    <section id="contact" className="section-shell">
      <div className="section-inner">
        <h2 className="section-title mb-4">Contact</h2>
        <p className="section-copy mb-10 max-w-xl">
          I&apos;m open to internships, full-time opportunities, and relevant collaborations. Email is usually the fastest way to reach me.
        </p>

        <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
          {socials.map(({ icon: Icon, label, handle, href, external }) => (
            <a
              key={label}
              href={href}
              target={external ? '_blank' : undefined}
              rel={external ? 'noopener noreferrer' : undefined}
              className="flex items-center gap-3 text-sm text-[color:var(--muted)] hover:text-[color:var(--foreground)]"
            >
              <Icon size={16} />
              <span className="font-medium text-[color:var(--foreground)]">{label}</span>
              <span>{handle}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
