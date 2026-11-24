import raw from './mosa-packings.json'

export interface Packing {
  n: number
  /** Side of the enclosing square found by MOSA. */
  side: number
  /** Best known side before MOSA, as listed in MOSA.md. */
  previous: number
  /** [x, y, degrees] per unit square, centred on (x, y), y pointing down. */
  squares: number[][]
}

export const packings: Packing[] = raw.packings
