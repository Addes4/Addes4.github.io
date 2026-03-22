import { experience } from '@/data/experience'

export default function Experience() {
  return (
    <section id="experience" className="section-shell">
      <div className="section-inner">
        <div className="mx-auto max-w-4xl">
          <h2 className="section-title mb-10">Experience</h2>

          {experience.length === 0 ? (
            <p className="text-sm text-[color:var(--muted)]">No experience added yet.</p>
          ) : (
            <div className="space-y-8">
              {experience.map((entry, i) => (
                <div key={i} className="border-t border-[color:var(--line)] pt-6">
                  <p className="text-xs text-[color:var(--muted)] mb-1">{entry.date}</p>
                  <p className="text-xs text-[color:var(--muted)] mb-2">{entry.company}</p>
                  <h3 className="text-base font-semibold text-[color:var(--foreground)] mb-2">{entry.role}</h3>
                  <p className="text-sm leading-7 text-[color:var(--muted)] mb-3">{entry.description}</p>
                  {entry.tags && (
                    <div className="flex flex-wrap gap-2">
                      {entry.tags.map((tag) => (
                        <span key={tag} className="tag">{tag}</span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
