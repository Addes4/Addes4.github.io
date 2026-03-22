import { involvement, events } from '@/data/involvement'

export default function Involvement() {
  return (
    <section id="involvement" className="section-shell">
      <div className="section-inner">
        <h2 className="section-title mb-10">Involvement</h2>

        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h3 className="text-xs text-[color:var(--muted)] uppercase tracking-widest mb-6">Associations</h3>
            <div className="space-y-8">
              {involvement.map((entry, i) => (
                <div key={i} className="border-t border-[color:var(--line)] pt-6">
                  <p className="text-xs text-[color:var(--muted)] mb-1">{entry.date}</p>
                  <p className="text-xs text-[color:var(--muted)] mb-2">{entry.organization}</p>
                  <h4 className="text-base font-semibold text-[color:var(--foreground)] mb-2">{entry.role}</h4>
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
          </div>

          <div>
            <h3 className="text-xs text-[color:var(--muted)] uppercase tracking-widest mb-6">Events Hosted</h3>
            {events.length === 0 ? (
              <p className="text-sm text-[color:var(--muted)]">No events added yet.</p>
            ) : (
              <div className="space-y-8">
                {events.map((event, i) => (
                  <div key={i} className="border-t border-[color:var(--line)] pt-6">
                    <p className="text-xs text-[color:var(--muted)] mb-1">{event.date}</p>
                    <p className="text-xs text-[color:var(--muted)] mb-2">{event.organization}</p>
                    <h4 className="text-base font-semibold text-[color:var(--foreground)] mb-2">{event.name}</h4>
                    <p className="text-sm leading-7 text-[color:var(--muted)]">{event.description}</p>
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
