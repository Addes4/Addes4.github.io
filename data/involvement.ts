export interface InvolvementEntry {
  date: string
  organization: string
  role: string
  description: string
  tags?: string[]
}

export const involvement: InvolvementEntry[] = [
  {
    date: 'April 2025 - Present',
    organization: 'KTH AI Society',
    role: 'Business Development Associate',
    description:
      'Held and judged 4 major hackathons, multiple workshops and seminars, and other events. Companies that I have partnered with include::',
    tags: ['Jane Street', 'Y-Combinator', 'McKinsey Quantumblack', 'HackEurope', 'Lovable', 'Open AI', 'Google', 'Microsoft', 'Stripe', 'Listen Labs', 'Susquehanna International Group'],
  },
  {
    date: 'January 2026 - Present',
    organization: 'F1RST at KTH',
    role: 'Board Member and Head of Events',
    description:
      'Helping unprivledged students get access to the best resources and opportunities in the industry. Companies that I have partnered with include:',
    tags: ['Spotify', 'Lovable', "Lynx Asset Management"],
  },
]
