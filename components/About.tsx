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
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Photo */}
          <div className="flex justify-center">
            <div className="relative w-72 h-72">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-500 to-violet-600 opacity-15 blur-2xl" />
              <div className="relative w-full h-full rounded-3xl border border-white/8 bg-[#111] flex items-center justify-center overflow-hidden">
                {/*
                  TODO: Add your photo.
                  1. Place your image in /public/photo.jpg
                  2. Replace this div with:
                  <Image src="/photo.jpg" alt="Adrian Sohrabi" fill className="object-cover rounded-3xl" />
                  (add `import Image from 'next/image'` at the top)
                */}
                <div className="text-center px-6">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-2xl">AS</span>
                  </div>
                  <p className="text-neutral-600 text-xs">
                    Place your photo in{' '}
                    <code className="text-indigo-500">/public/photo.jpg</code>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Text */}
          <div>
            <span className="text-indigo-400 text-xs font-semibold tracking-[0.2em] uppercase">
              About Me
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-6">
              Who I Am
            </h2>
            <p className="text-neutral-400 leading-relaxed mb-4">
              {/* TODO: Write your bio (first paragraph) */}
              I&apos;m Adrian, an Engineering Mathematics student at KTH Royal
              Institute of Technology in Stockholm, Sweden. I&apos;m drawn to
              the intersection of rigorous mathematics and practical software
              engineering.
            </p>
            <p className="text-neutral-400 leading-relaxed mb-10">
              {/* TODO: Write your bio (second paragraph) */}
              Outside of lectures and problem sets, I&apos;m active in student
              associations, working on personal projects, and constantly looking
              for ways to apply mathematical thinking to real-world problems.
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
