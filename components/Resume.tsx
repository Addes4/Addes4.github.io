import { Download, FileText } from 'lucide-react'

// TODO: Update these highlights with your real info
const highlights = [
  {
    title: 'Education',
    items: [
      'Engineering Mathematics, KTH',
      'Expected graduation: 2027', // TODO: Update year
      'Relevant courses: Analysis, Linear Algebra, Optimization',
    ],
  },
  {
    title: 'Skills',
    items: [
      'Python, MATLAB, C/C++',
      'Machine Learning, Numerical Methods',
      'TypeScript, React, Next.js',
    ],
  },
  {
    title: 'Languages',
    items: [
      'Swedish (Proficient)',
      'English (Fluent)',
      'Persian (Native)', // TODO: Update as needed
    ],
  },
]

export default function Resume() {
  return (
    <section id="resume" className="py-28 bg-[#0d0d0d]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-indigo-400 text-xs font-semibold tracking-[0.2em] uppercase">
            My CV
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4">
            Resume
          </h2>
          <p className="text-neutral-500 max-w-md mx-auto text-sm leading-relaxed">
            Download my resume for a full overview of my education, experience,
            and skills.
          </p>
        </div>

        {/* Download buttons */}
        {/* TODO: Add your resume PDF to /public/resume.pdf */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium transition-all duration-200 hover:shadow-lg hover:shadow-indigo-500/30"
          >
            <Download size={15} />
            Download PDF
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full border border-white/10 hover:border-white/25 text-neutral-300 hover:text-white text-sm font-medium transition-all duration-200"
          >
            <FileText size={15} />
            View Online
          </a>
        </div>

        {/* Highlights grid */}
        <div className="grid sm:grid-cols-3 gap-5">
          {highlights.map((col) => (
            <div
              key={col.title}
              className="bg-[#111] rounded-2xl border border-white/5 p-6"
            >
              <h3 className="text-xs font-semibold text-white uppercase tracking-widest mb-4">
                {col.title}
              </h3>
              <ul className="space-y-2.5">
                {col.items.map((item) => (
                  <li
                    key={item}
                    className="text-sm text-neutral-400 flex items-start gap-2 leading-relaxed"
                  >
                    <span className="text-indigo-500 mt-0.5 flex-shrink-0">
                      ›
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
