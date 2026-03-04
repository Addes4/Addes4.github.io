export interface Project {
  title: string
  description: string
  tech: string[]
  github?: string
  live?: string
}

export const projects: Project[] = [
  {
    title: 'Project Name', // TODO: Replace with your project
    description:
      'A brief description of what this project does and the problem it solves. Highlight any interesting technical challenges.',
    tech: ['Python', 'NumPy', 'Matplotlib'],
    github: 'https://github.com/Addes4/project-name',
  },
  {
    title: 'Another Project', // TODO: Replace with your project
    description:
      'Describe the project — what it is, what you built, and what technologies you used.',
    tech: ['TypeScript', 'Next.js', 'Tailwind'],
    github: 'https://github.com/Addes4/another-project',
    live: 'https://example.com',
  },
  {
    title: 'Third Project', // TODO: Replace with your project
    description:
      'Another cool project. Keep descriptions concise but informative about your contributions.',
    tech: ['C++', 'MATLAB'],
    github: 'https://github.com/Addes4/third-project',
  },
]
