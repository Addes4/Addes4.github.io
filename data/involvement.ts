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

export const events: EventEntry[] = [
  {
    date: 'February 2026',
    name: 'Hackeurope 2026',
    organization: 'KTH AI Society',
    description: 'Was a judge and organizer for a 24-hour hackathon with 300+ participants. We partnered with HackEurope, Susquehanna International Group and Founders House to host the hackathon.',
  },
  {
    date: 'February 2026',
    name: 'KTH AIS x Jane Street Partnership',
    organization: 'KTH AI Society',
    description: 'I initiated a partnership with Jane Street to get our students access to the best resources and opportunities in the industry. We are now hosting a series of events with Jane Street.',
  },
  {
    date: 'February 2026',
    name: 'KTH AIS x Lovable x Florent Venture Partners x Google x Microsoft x Listen Labs x Qualia x Specific AI Hackathon',
    organization: 'KTH AI Society',
    description: 'A 24-hour hackathon with 50+ participants. The goal was to build a multi-agent system that could help with a variety of tasks.',
  },
  {
    date: 'January 2026',
    name: 'KTH AIS x Y-Combinator Panel Discussion and Coffee Chats',
    organization: 'KTH AI Society',
    description: 'A panel discussion and coffee chats with Y-Combinator and Vesence. Our students had the opportunity to pitch their ideas to Y-Combinator and get feedback from 2 YC partners.',
  },
  {
    date: 'December 2025',
    name: 'KTH AIS x Mannheimer Swartling Workshop',
    organization: 'KTH AI Society',
    description: 'A workshop with 60+ participants. We partnered with Mannheimer Swartling, the nordics biggest law firm,  to hear more about AI legislation and regulations.',
  },
  {
    date: 'November 2025',
    name: 'KTH AIS x Open AI x Stripe Hackathon',
    organization: 'KTH AI Society',
    description: 'A 24-hour hackathon with 60+ participants. We partnered with Open AI, Stripe and Founders House to host the hackathon.',
  },
  {
    date: 'October 2025',
    name: 'KTH AIS x ',
    organization: 'KTH AI Society',
    description: 'A workshop with 60+ participants. We partnered with Jane Street, the largest investment bank in the world, to hear more about AI in finance.',
  },
  {
    date: 'April 2025',
    name: 'KTH AIS x Microsoft x SSE Business Lab Hackathon',
    organization: 'KTH AI Society',
    description: 'A 2 week long hackathon with 50+ participants. We partnered with Microsoft and SSE Business Lab to host the hackathon.',
  },
]

export const involvement: InvolvementEntry[] = [
  {
    date: 'April 2025 - Present',
    organization: 'KTH AI Society',
    role: 'Business Development Associate',
    description:
      'Held and judged 4 major hackathons, multiple workshops and seminars, and other events. Companies that I have partnered with include::',
    tags: ['Jane Street', 'Y-Combinator', 'McKinsey Quantumblack', 'Susquehanna International Group', 'HackEurope', 'Lovable', 'Open AI', 'Google', 'Microsoft', 'Stripe', 'Listen Labs', 'Legora'],
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
