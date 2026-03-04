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
    organization: 'KTH AI Society', // TODO: Fill in
    role: 'Business Development Associate',
    description:
      'Held and judged 4 major hackathons, multiple workshops and seminars, and other events. Companies that I have partnered with include::',
    tags: ['Jane Street', 'Y-Combinator', 'McKinsey Quantumblack', 'HackEurope', 'Lovable', 'Open AI', 'Google'],
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
    date: '2023',
    organization: 'Hackathon / Competition Name', // TODO: Fill in
    role: 'Participant',
    description:
      'What you built, who your team was, and what you achieved. Any awards or notable results.',
    tags: ['Hackathon'],
  },
  {
    date: '2023',
    organization: 'Student Chapter / Club', // TODO: Fill in
    role: 'Board Member / Officer',
    description:
      'Your responsibilities and accomplishments in this role. What did you change or contribute?',
    tags: ['Leadership', 'Strategy'],
  },
]
