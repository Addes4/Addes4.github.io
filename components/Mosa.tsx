import { Ref, Row, Subsection } from '@/components/paper'
import { packings, type Packing } from '@/data/records'

const round = (v: number) => Math.round(v * 1e5) / 1e5

// Loose squares often sit a few thousandths of a degree off axis. They are drawn at their exact
// angle but only shaded as tilted when the tilt is visible.
const VISIBLE_TILT = 0.5

function PackingDrawing({ packing, label }: { packing: Packing; label: string }) {
  const { n, side, squares } = packing
  const pad = side * 0.012
  const box = round(side + 2 * pad)
  return (
    <figure className="packing">
      <svg
        viewBox={`${round(-pad)} ${round(-pad)} ${box} ${box}`}
        role="img"
        aria-label={`${n} unit squares packed in a square of side ${side.toFixed(6)}`}
      >
        <rect className="packing-frame" x={0} y={0} width={round(side)} height={round(side)} />
        {squares.map(([x, y, deg], i) => (
          <rect
            key={i}
            className={Math.abs(deg) < VISIBLE_TILT ? 'sq' : 'sq sq-tilted'}
            x={round(x - 0.5)}
            y={round(y - 0.5)}
            width={1}
            height={1}
            transform={deg === 0 ? undefined : `rotate(${deg} ${x} ${y})`}
          />
        ))}
      </svg>
      <figcaption>
        ({label}) <i>n</i> = {n}
      </figcaption>
    </figure>
  )
}

/** Improvement as mantissa × 10^exponent, e.g. 1.41 × 10⁻³. */
function Improvement({ previous, side }: { previous: number; side: number }) {
  const diff = previous - side
  const exponent = Math.floor(Math.log10(diff))
  const mantissa = (diff / 10 ** exponent).toFixed(2)
  return (
    <>
      {mantissa} × 10<sup>−{Math.abs(exponent)}</sup>
    </>
  )
}

export default function Mosa() {
  const [first, ...rest] = packings
  return (
    <Subsection n="2.1" title="MOSA">
      <Row note="More than 1,000 applications and 200 participants. Sponsors included Modal, Hugging Face, Anthropic, Google DeepMind and Cognition.">
        <p>
          At the AI x Science Hackathon in London in October 2026, our team built a research
          framework in which language models propose search strategies, every run is sandboxed on
          Modal, and nothing counts until it has been verified independently.
          <Ref /> Its first result was a bin-packing rule that beats published AI-designed rules,
          including Google DeepMind’s FunSearch.
        </p>
      </Row>

      <Row note="Each packing was checked for overlap at zero tolerance and audited at 80 and 160 digits, and has been submitted to the squares-in-squares catalogue.">
        <p>
          We then extended it into{' '}
          <a href="https://github.com/swedishScienceMafia/swedishScienceMafia">MOSA</a>, which tests
          strategies in parallel on about 500 cores. On the problem of packing <i>n</i> unit squares
          into the smallest possible square, studied since 1979, it found five new best-known
          packings (Figure 1, Table 1).
          <Ref />
        </p>
      </Row>

      <Row
        className="row-end"
        margin={
          <p id="figure-1">
            <b>Figure 1.</b> The five new best-known packings found by MOSA. Shaded squares are
            tilted. Side lengths are in Table 1.
          </p>
        }
      >
        <div className="packing-figure" role="group" aria-labelledby="figure-1">
          <div className="packing-lg">
            <PackingDrawing packing={first} label="a" />
          </div>
          <div className="packing-grid">
            {rest.map((packing, i) => (
              <PackingDrawing key={packing.n} packing={packing} label={'bcde'[i]} />
            ))}
          </div>
        </div>
      </Row>

      <Row>
        <div className="table-wrap">
          <table className="records">
            <caption>
              <b>Table 1.</b> Side length of the smallest known square that holds <i>n</i> unit
              squares. Lower is better.
            </caption>
            <thead>
              <tr>
                <th scope="col">
                  <i>n</i>
                </th>
                <th scope="col">Previous best</th>
                <th scope="col">MOSA</th>
                <th scope="col">Improvement</th>
              </tr>
            </thead>
            <tbody>
              {packings.map((p) => (
                <tr key={p.n}>
                  <td>{p.n}</td>
                  <td>{p.previous.toFixed(6)}</td>
                  <td className="best">{p.side.toFixed(6)}</td>
                  <td>
                    <Improvement previous={p.previous} side={p.side} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Row>
    </Subsection>
  )
}
