import { involvement, events } from '@/data/involvement'

export default function Involvement() {
  return (
    <section id="involvement" className="section-shell">
      <div className="section-inner">
        <div className="mb-16 max-w-2xl">
          <span className="section-kicker">Extracurriculars</span>
          <h2 className="section-title mt-4">Involvement</h2>
          <p className="section-copy mt-5">
            Student organizations, events, and community work at KTH.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h3 className="mb-8 text-[11px] font-semibold uppercase tracking-[0.28em] text-[color:var(--accent)]">
              Associations
            </h3>
            <div className="relative">
              {involvement.map((entry, i) => (
                <div key={i} className="relative pl-10 pb-10 last:pb-0">
                  {i < involvement.length - 1 && (
                    <div className="timeline-line absolute left-[5px] top-[26px] bottom-0 w-px" />
                  )}
                  <div className="timeline-dot absolute left-0 top-5 h-[11px] w-[11px] rounded-full" />
                  <span className="mb-2 block text-xs font-semibold tracking-wide text-[color:var(--accent)]">
                    {entry.date}
                  </span>
                  <div className="timeline-card">
                    <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-[color:var(--muted)]">
                      {entry.organization}
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
          </div>

          <div>
            <h3 className="mb-8 text-[11px] font-semibold uppercase tracking-[0.28em] text-[color:var(--accent)]">
              Events Hosted
            </h3>
            {events.length === 0 ? (
              <p className="text-sm text-[color:var(--muted)]">No events added yet.</p>
            ) : (
              <div className="relative">
                {events.map((event, i) => (
                  <div key={i} className="relative pl-10 pb-10 last:pb-0">
                    {i < events.length - 1 && (
                      <div className="timeline-line absolute left-[5px] top-[26px] bottom-0 w-px" />
                    )}
                    <div className="timeline-dot absolute left-0 top-5 h-[11px] w-[11px] rounded-full" />
                    <span className="mb-2 block text-xs font-semibold tracking-wide text-[color:var(--accent)]">
                      {event.date}
                    </span>
                    <div className="timeline-card">
                      <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-[color:var(--muted)]">
                        {event.organization}
                      </p>
                      <h3 className="text-[1.25rem] font-semibold leading-tight text-[color:var(--foreground)]">
                        {event.name}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">
                        {event.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
