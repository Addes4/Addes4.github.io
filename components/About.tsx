const facts = [
  { label: 'University', value: 'KTH Royal Institute of Technology' },
  { label: 'Program', value: 'Engineering Mathematics' },
  { label: 'Location', value: 'Stockholm, Sweden' },
  { label: 'Interests', value: 'Sports, Outdoor activities, Music, Reading' },
]

export default function About() {
  return (
    <section id="about" className="section-shell">
      <div className="section-inner grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <h2 className="section-title mb-6">About</h2>
          <p className="section-copy">
            I&apos;m an Engineering Mathematics student at KTH Royal Institute of Technology in Stockholm, Sweden. I'm deeply interested in mathematics, problem solving and their applications across various fields. I'm an active member in multiple student associations and clubs.
          </p>
          <p className="section-copy mt-4">
            Outside of lectures and problem sets, I enjoy hiking, music, football, tennis, volleyball, reading and mountaineering.
          </p>
        </div>

        <div className="grid content-start gap-4 sm:grid-cols-2">
          {facts.map((fact) => (
            <div key={fact.label} className="border-t border-[color:var(--line)] pt-4">
              <p className="text-xs text-[color:var(--muted)] mb-1">{fact.label}</p>
              <p className="text-sm font-medium text-[color:var(--foreground)]">{fact.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
