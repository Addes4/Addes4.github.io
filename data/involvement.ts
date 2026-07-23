export interface InvolvementEntry {
  date: string
  organization: string
  role: string
  description: string
  tags?: string[]
}

export interface EventEntry {
  date: string
  name: string
  organization: string
  description: string
}

export const involvement: InvolvementEntry[] = [
  {
    date: 'April 2025 - Present',
    organization: 'KTH AI Society',
    role: 'Board Member and Head of Business Development',
    description:
      'Responsible for partnerships, data analytics and organizational strategy. Held and judged multiple major hackathons, countless of workshops and seminars, and other events. Companies that I have partnered with include:',
    tags: ['Jane Street', 'Y-Combinator', 'McKinsey QuantumBlack', 'Susquehanna International Group', 'HackEurope', 'Lovable', 'Open AI', 'Google', 'Microsoft', 'Stripe', 'Listen Labs', 'Legora'],
  },
  {
    date: 'January 2026 - Present',
    organization: 'F1RST at KTH',
    role: 'Board Member and Head of Events',
    description:
      'Helping unprivledged students get access to the best resources and opportunities in the industry. Companies that I have partnered with include:',
    tags: ['Spotify', 'Lovable', "Lynx Asset Management"],
  },
  {
    date: 'February 2021',
    organization: 'Tullinge Gymnasium',
    role: 'Teaching Assistant in Mathematics',
    description:
      'Worked as a teaching assistant in my first year of upper secondary school where i taught mathematics to peers.',
    tags: ['Spotify', 'Lovable', "Lynx Asset Management"],
  },
]
