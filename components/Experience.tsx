import { experience } from '@/data/experience'

export default function Experience() {
  return (
    <section id="experience" className="section-shell bg-[rgba(255,255,255,0.22)]">
      <div className="section-inner">
        <div className="mx-auto max-w-4xl">
          <div className="mb-16 max-w-2xl">
            <span className="section-kicker">Career</span>
            <h2 className="section-title mt-4">Experience</h2>
            <p className="section-copy mt-5">
              Professional experience across internships and technical work.
            </p>
          </div>

          {experience.length === 0 ? (
            <p className="text-sm text-[color:var(--muted)]">No experience added yet.</p>
          ) : (
            <div className="relative">
              {experience.map((entry, i) => (
                <div key={i} className="relative pl-10 pb-10 last:pb-0">
                  {i < experience.length - 1 && (
                    <div className="timeline-line absolute left-[5px] top-[26px] bottom-0 w-px" />
                  )}
                  <div className="timeline-dot absolute left-0 top-5 h-[11px] w-[11px] rounded-full" />
                  <span className="mb-2 block text-xs font-semibold tracking-wide text-[color:var(--accent)]">
                    {entry.date}
                  </span>
                  <div className="timeline-card">
                    <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-[color:var(--muted)]">
                      {entry.company}
                    </p>
                    <h3 className="text-[1.25rem] font-semibold leading-tight text-[color:var(--foreground)]">
                      {entry.role}
                    </h3>
                    <p className="mb-4 mt-3 text-sm leading-7 text-[color:var(--muted)]">
                      {entry.description}
                    </p>
                    {entry.tags && (
                      <div className="flex flex-wrap gap-2">
                        {entry.tags.map((tag) => (
                          <span key={tag} className="tag">
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
      </div>
    </section>
  )
}
