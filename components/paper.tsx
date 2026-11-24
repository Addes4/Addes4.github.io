import type { ReactNode } from 'react'
import type { Entry } from '@/data/experience'

/**
 * One line of the page: running text on the left, margin material on the right.
 * On narrow screens the margin drops below the text.
 *
 * `note` is a numbered sidenote: put <Ref /> where its number belongs in the text.
 * Numbers come from a CSS counter in page order, so a Row holds at most one note.
 * `margin` is unnumbered margin material, such as a figure caption.
 */
export function Row({
  children,
  note,
  margin,
  className,
}: {
  children: ReactNode
  note?: ReactNode
  margin?: ReactNode
  className?: string
}) {
  const side = note ? <p className="note">{note}</p> : margin
  return (
    <div className={className ? `row ${className}` : 'row'}>
      <div className="row-main">{children}</div>
      {side ? <aside className="row-margin">{side}</aside> : null}
    </div>
  )
}

/** Superscript reference to the note in the same Row. */
export function Ref() {
  return <sup className="ref" />
}

export function Section({ n, title, children }: { n: string; title: string; children: ReactNode }) {
  const id = title.toLowerCase().replace(/[^a-z0-9]+/g, '-')
  return (
    <section className="section" aria-labelledby={id}>
      <h2 id={id} className="section-title">
        <span className="num">{n}</span>
        <span>{title}</span>
      </h2>
      {children}
    </section>
  )
}

export function Subsection({ n, title, children }: { n: string; title: string; children: ReactNode }) {
  return (
    <div className="subsection">
      <h3 className="subsection-title">
        <span className="num">{n}</span>
        <span>{title}</span>
      </h3>
      {children}
    </div>
  )
}

/** Dated list in the style of a CV: year on the left, organisation and description on the right. */
export function Entries({ entries }: { entries: Entry[] }) {
  return (
    <div className="entries">
      {entries.map((entry) => (
        <Row key={entry.organization} note={entry.note}>
          <p className="entry">
            <span className="entry-date">{entry.date}</span>
            <span>
              <b>{entry.organization}.</b> {entry.description}
              {entry.note ? <Ref /> : null}
            </span>
          </p>
        </Row>
      ))}
    </div>
  )
}
