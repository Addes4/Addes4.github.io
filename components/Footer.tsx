import { Github } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="py-8 bg-[#0a0a0a] border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-neutral-600">
          © {year} Adrian Sohrabi. All rights reserved.
        </p>
        <a
          href="https://github.com/Addes4"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-neutral-600 hover:text-neutral-400 transition-colors duration-200"
        >
          <Github size={13} />
          Addes4
        </a>
      </div>
    </footer>
  )
}
