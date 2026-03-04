const facts = [
  { label: 'University', value: 'KTH Royal Institute of Technology' },
  { label: 'Program', value: 'Engineering Mathematics' },
  { label: 'Location', value: 'Stockholm, Sweden' },
  { label: 'Interests', value: 'Math, Software, Music' }, // TODO: customize
]

export default function About() {
  return (
    <section id="about" className="py-28 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          {/* Text */}
          <div>
            <span className="text-indigo-400 text-xs font-semibold tracking-[0.2em] uppercase">
              About Me
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-6">
              Who I Am
            </h2>
            <p className="text-neutral-400 leading-relaxed mb-4">
              I&apos;m an Engineering Mathematics student at KTH Royal
              Institute of Technology in Stockholm, Sweden. I&apos;m deeply interested in
              mathematics, problem solving, machine learning and finance. I&apos;m
              an active member in multiple student associations and clubs.
            </p>
            <p className="text-neutral-400 leading-relaxed mb-10">
              Outside of lectures and problem sets, I enjoy hiking, music, football, tennis,
              reading and mountaineering.
            </p>

            {/* Quick facts grid */}
            <div className="grid grid-cols-2 gap-3">
              {facts.map((fact) => (
                <div
                  key={fact.label}
                  className="bg-[#111] rounded-xl p-4 border border-white/5"
                >
                  <p className="text-[10px] text-neutral-500 uppercase tracking-widest mb-1">
                    {fact.label}
                  </p>
                  <p className="text-sm text-neutral-200 font-medium">
                    {fact.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
