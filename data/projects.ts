export interface Project {
  title: string
  description: string
  tech: string[]
  github?: string
  live?: string
}

export const projects: Project[] = [
  {
    title: 'Simulation of orbital mechanics', // TODO: Replace with your project
    description:
      'Built a Python-based orbital mechanics simulation project that models planetary motion with Newtonian gravity, compares forward Euler vs. symplectic Euler integration, and visualizes long-term orbit stability. The project progresses from a fixed-Sun orbit model to a moving two-bodysystem, then to a Sun–Earth–Jupiter gravitational slingshot scenario where a spacecraft gains enough energy to escape, with energy/convergence analysis and matplotlib plots throughout.',
    tech: ['Python', 'NumPy', 'Matplotlib'],
    github: 'https://github.com/Addes4/orbital-mechanics-simulation',
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
