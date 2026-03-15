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
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="paper-card paper-card-strong p-8 md:p-10">
            <span className="section-kicker">Contact</span>
            <h2 className="section-title mt-4">Contact</h2>
            <p className="section-copy mt-5">
              I&apos;m open to internships, full-time opportunities, and relevant
              collaborations.
            </p>
            <p className="mt-8 text-sm leading-7 text-[color:var(--muted)]">
              Email is usually the fastest way to reach me. LinkedIn and GitHub
              are also available below.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {socials.map(({ icon: Icon, label, handle, href, external }) => (
              <a
                key={label}
                href={href}
                target={external ? '_blank' : undefined}
                rel={external ? 'noopener noreferrer' : undefined}
                className="contact-card flex flex-col justify-between gap-8 bg-white"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[color:var(--line)] bg-white/60 text-[color:var(--accent)]">
                  <Icon size={20} />
                </div>
                <div>
                  <p className="text-[1.25rem] font-semibold leading-tight text-[color:var(--foreground)]">
                    {label}
                  </p>
                  <p className="mt-2 text-sm text-[color:var(--muted)]">{handle}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
