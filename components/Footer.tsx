import { Github } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-[color:var(--line)] py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <p className="text-sm text-[color:var(--muted)]">
          © {year} Adrian Sohrabi. All rights reserved.
        </p>
        <a
          href="https://github.com/Addes4"
          target="_blank"
          rel="noopener noreferrer"
          className="link-inline text-sm"
        >
          <Github size={13} />
          Addes4
        </a>
      </div>
    </footer>
  )
}
