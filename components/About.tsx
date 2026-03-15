const facts = [
  { label: 'University', value: 'KTH Royal Institute of Technology' },
  { label: 'Program', value: 'Engineering Mathematics' },
  { label: 'Location', value: 'Stockholm, Sweden' },
  { label: 'Interests', value: 'Sports, Outdoor activities, Music, Reading' },
]

export default function About() {
  return (
    <section id="about" className="section-shell">
      <div className="section-inner grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="paper-card paper-card-strong p-8 md:p-10">
          <span className="section-kicker">About Me</span>
          <h2 className="section-title mt-4">About</h2>
          <p className="section-copy mt-6">
            I&apos;m an Engineering Mathematics student at KTH Royal Institute of Technology in Stockholm, Sweden. I'm deeply interested in mathematics, problem solving and their applications across various fields. I'm an active member in multiple student associations and clubs.
          </p>
          <p className="section-copy mt-5">
          Outside of lectures and problem sets, I enjoy hiking, music, football, tennis, volleyball, reading and mountaineering.
          </p>
        </div>

        <div className="grid content-start gap-4 sm:grid-cols-2">
          {facts.map((fact) => (
            <div key={fact.label} className="fact-card bg-white">
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[color:var(--muted)]">
                {fact.label}
              </p>
              <p className="mt-3 text-base font-medium leading-7 text-[color:var(--foreground)]">
                {fact.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
