export interface ExperienceEntry {
  date: string
  company: string
  role: string
  description: string
  tags?: string[]
}

export const experience: ExperienceEntry[] = [
  {
    date: 'June 2025 - August 2025',
    company: 'Silex Microsystems',
    role: 'Summer Intern',
    description: 'Worked as a summer intern in process operations for Silex Microsystems. Semiconductor manufacturing and optical physics were the main topics of the internship.',
    tags: ['Production', 'Optical physics', 'Semiconductor fabrication', 'Excel'],
  },
]
