import { experience } from '@/data/experience'

export default function Experience() {
  return (
    <section id="experience" className="py-28 bg-[#0d0d0d]">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-indigo-400 text-xs font-semibold tracking-[0.2em] uppercase">
            Career
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4">
            Work Experience
          </h2>
          <p className="text-neutral-500 max-w-lg mx-auto text-sm leading-relaxed">
            My professional experience across internships and full-time roles.
          </p>
        </div>

        {experience.length === 0 ? (
          <p className="text-neutral-600 text-sm text-center">No experience added yet.</p>
        ) : (
          <div className="relative">
            {experience.map((entry, i) => (
              <div key={i} className="relative pl-10 pb-10 last:pb-0">
                {i < experience.length - 1 && (
                  <div className="absolute left-[5px] top-[26px] bottom-0 w-px bg-gradient-to-b from-indigo-500/40 via-indigo-500/10 to-transparent" />
                )}
                <div className="absolute left-0 top-5 w-[11px] h-[11px] rounded-full bg-indigo-500 ring-4 ring-[#0d0d0d] shadow-[0_0_12px_rgba(99,102,241,0.6)]" />
                <span className="block text-xs font-semibold text-indigo-400 mb-2 tracking-wide">
                  {entry.date}
                </span>
                <div className="bg-[#111] rounded-2xl border border-white/5 p-6 hover:border-indigo-500/20 transition-colors duration-200">
                  <p className="text-[10px] text-neutral-500 uppercase tracking-widest mb-1">
                    {entry.company}
                  </p>
                  <h3 className="text-base font-semibold text-white mb-2">
                    {entry.role}
                  </h3>
                  <p className="text-sm text-neutral-400 leading-relaxed mb-4">
                    {entry.description}
                  </p>
                  {entry.tags && (
                    <div className="flex flex-wrap gap-2">
                      {entry.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2.5 py-0.5 rounded-full bg-white/5 text-neutral-400 border border-white/8"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
