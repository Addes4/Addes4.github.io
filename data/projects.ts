export interface Project {
  title: string
  description: string
  tech: string[]
  github?: string
  live?: string
}

export const projects: Project[] = [
  {
    title: 'Simulation of orbital mechanics',
    description:
      'Built a Python-based orbital mechanics simulation project that models planetary motion with Newtonian gravity, compares forward Euler vs. symplectic Euler integration, and visualizes long-term orbit stability. The project progresses from a fixed-Sun orbit model to a moving two-bodysystem, then to a Sun–Earth–Jupiter gravitational slingshot scenario where a spacecraft gains enough energy to escape, with energy/convergence analysis and matplotlib plots throughout.',
    tech: ['Python', 'Math', 'Matplotlib'],
    github: 'https://github.com/Addes4/orbital_simulation',
  },
  {
    title: 'Graph Comparison',
    description:
      'I built a Python benchmarking project that compares adjacency matrix and adjacency list graph representations by measuring runtime, memory usage, and estimated CO2 emissions. The script generates random undirected graphs with different sizes and densities, then benchmarks core operations like has_edge, get_neighbors, and BFS traversal. It highlights the practical trade-offs between theoretical complexity and real resource usage when choosing data structures.',
    tech: ['Python', 'CodeCarbon', 'tracemalloc'],
    github: 'https://github.com/Addes4/graph-comparison',
  },
  {
    title: 'Pyramid Solitaire',
    description:
      'Another cool project. Keep descriptions concise but informative about your contributions.',
    tech: ['C++', 'MATLAB'],
    github: 'https://github.com/Addes4/third-project',
  },
]
