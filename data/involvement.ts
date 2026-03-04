export interface InvolvementEntry {
  date: string
  organization: string
  role: string
  description: string
  tags?: string[]
}

export const involvement: InvolvementEntry[] = [
  {
    date: '2024 – Present',
    organization: 'Student Association Name', // TODO: Fill in
    role: 'Role / Position Title',
    description:
      'Describe what you did, what events you organized, what you accomplished, and the impact you made within this association.',
    tags: ['Leadership', 'Event Planning'],
  },
  {
    date: '2024',
    organization: 'Another Student Organization', // TODO: Fill in
    role: 'Member / Volunteer',
    description:
      'Describe the project, event, or initiative you were part of and your specific contributions.',
    tags: ['Community', 'Tech'],
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
