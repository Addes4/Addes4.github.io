export interface ExperienceEntry {
  date: string
  company: string
  role: string
  description: string
  tags?: string[]
}

export const experience: ExperienceEntry[] = [
  {
    date: 'July 2026 - Present',
    company: 'Karolinska Institutet',
    role: 'Research Intern',
    description: 'Undergradute research internship in Quantitative Tumor Immune Control at Jean Hausser Lab, department of cellular and molecular biology. Basically researching quantitative principles in tumour biology. Read more about my work under the "projects" section.',
    tags: ['Data Science', 'Machine Learning', 'Computational Biology','Mathematical Modelling', 'Linux'],
  },
  {
    date: 'June 2026 - Present',
    company: 'P Capital Partners',
    role: 'Intern',
    description: 'Helping the team implement AI strategies, automate workflows and prototype fullstack AI agent tools. High exposure to the finance industry and how to navigate technical initiatives within it.',
    tags: ['Agentic Engineering', 'AI Tools', 'Finance', 'Excel', 'Powerpoint'],
  },
  {
    date: 'June 2025 - August 2025',
    company: 'Silex Microsystems',
    role: 'Summer Intern',
    description: 'Worked as a summer intern in process operations for Silex Microsystems. Semiconductor manufacturing and optical physics were the main topics of the internship.',
    tags: ['Production', 'Optical physics', 'Semiconductor Fabrication', 'Excel'],
  },
  {
    date: 'July 2022 - May 2025',
    company: 'Apoteket AB',
    role: 'Pharmaceutical Advisor',
    description: 'Worked as a pharmaceutical advisor at Apoteket AB. I helped customers with their health and wellbeing by providing them with information about their medications and health conditions.',
    tags: ['Customer service', 'Sales', 'Medicine'],
  },
]
