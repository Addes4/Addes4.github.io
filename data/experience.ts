export interface Entry {
  date: string
  organization: string
  description: string
  /** Optional margin note, shown beside the entry and numbered automatically. */
  note?: string
}

export const experience: Entry[] = [
  {
    date: '2026',
    organization: 'P Capital Partners',
    description: 'Summer intern. Prototyped AI strategies and full-stack AI agent tools.',
  },
  {
    date: '2025',
    organization: 'Silex Microsystems',
    description: 'Summer intern in process operations: semiconductor fabrication and optical physics.',
  },
  {
    date: '2022–2025',
    organization: 'Apoteket',
    description: 'Pharmaceutical advisor.',
  },
]

export const service: Entry[] = [
  {
    date: '2025–',
    organization: 'KTH AI Society',
    description:
      'Board member and head of business development: partnerships, data analytics and strategy. Organised and judged hackathons, workshops and seminars.',
    note: 'Partners include Jane Street, Y Combinator, OpenAI, Google, Microsoft, Stripe, SIG and McKinsey QuantumBlack.',
  },
  {
    date: '2026–',
    organization: 'F1RST at KTH',
    description:
      'Board member and head of events, helping students from less privileged backgrounds reach industry.',
    note: 'Partners include Spotify, Lovable and Lynx Asset Management.',
  },
  {
    date: '2021',
    organization: 'Tullinge Gymnasium',
    description: 'Teaching assistant in mathematics.',
  },
]
