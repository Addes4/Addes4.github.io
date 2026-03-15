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
  {
    date: 'July 2022 - May 2025',
    company: 'Apoteket AB',
    role: 'Pharmaceutical Advisor',
    description: 'Worked as a pharmaceutical advisor at Apoteket AB. I helped customers with their health and wellbeing by providing them with information about their medications and health conditions.',
    tags: ['Customer service', 'Sales', 'Medicine'],
  },
]
