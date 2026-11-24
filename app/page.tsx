import { Entries, Ref, Row, Section, Subsection } from '@/components/paper'
import Mosa from '@/components/Mosa'
import { experience, service } from '@/data/experience'
import { profile } from '@/data/profile'
import { projects } from '@/data/projects'

// Static export: this is the build date, so it moves forward with every deploy.
const updated = new Date().toLocaleDateString('en-GB', { month: 'long', year: 'numeric' })

export default function Home() {
  return (
    <main className="page">
      <article className="paper">
        <Row margin={<p className="updated">Last updated {updated}</p>}>
          <header className="title-block">
            <h1>
              {profile.name}
              <sup>{profile.affiliations.map((a) => a.mark).join(',')}</sup>
            </h1>
            <p className="affiliations">
              <span>
                {profile.affiliations.map((a, i) => (
                  <span key={a.mark}>
                    {i > 0 ? ' · ' : null}
                    <sup>{a.mark}</sup>
                    {a.name}
                  </span>
                ))}
              </span>
              <span>{profile.location}</span>
            </p>
            <a className="title-email" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
          </header>
        </Row>

        <Row>
          <section className="abstract" aria-labelledby="abstract">
            <h2 id="abstract">Abstract</h2>
            <p>{profile.abstract}</p>
            <p className="keywords">
              <i>Keywords:</i> {profile.keywords.join(', ')}.
            </p>
          </section>
        </Row>

        <Section n="1" title="Research">
          <Row
            note={
              <>
                The project, ASTRID, is still in progress. Code at{' '}
                <a href="https://github.com/jhausserlab/astrid">github.com/jhausserlab/astrid</a>.
              </>
            }
          >
            <p>
              Since July 2026 I have been a visiting student researcher in Jean Hausser’s group for
              Quantitative Tumor Immune Control, in the Department of Cell and Molecular Biology at
              Karolinska Institutet. The work uses data science, mathematical modelling and machine
              learning to look for quantitative principles in tumour biology.
              <Ref />
            </p>
          </Row>
        </Section>

        <Section n="2" title="Projects">
          <Mosa />
          {projects.map((project, i) => (
            <Subsection key={project.title} n={`2.${i + 2}`} title={project.title}>
              <Row
                margin={
                  <p>
                    {project.tools}. <a href={project.code}>Code</a>
                  </p>
                }
              >
                <p>{project.description}</p>
              </Row>
            </Subsection>
          ))}
        </Section>

        <Section n="3" title="Experience">
          <Entries entries={experience} />
        </Section>

        <Section n="4" title="Service">
          <Entries entries={service} />
        </Section>

        <Row>
          <footer className="correspondence">
            <span>
              Correspondence: <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </span>
            <a href={profile.github.href}>{profile.github.label}</a>
            <a href={profile.linkedin.href}>{profile.linkedin.label}</a>
          </footer>
        </Row>
      </article>
    </main>
  )
}
