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
    github: 'https://github.com/Addes4/orbital-simulation',
  },
  {
    title: 'Graph Comparison',
    description:
      'I built a Python benchmarking project that compares two core graph representations, adjacency matrix and adjacency list, in terms of runtime, memory usage, and estimated CO2 emissions. The project generates random undirected graphs at multiple scales (100-1000 nodes) and densities (sparse to dense), then benchmarks key operations (has_edge, get_neighbors, and BFS). I used time.perf_counter for execution timing, tracemalloc for peak memory tracking, and codecarbon (offline mode) for emissions estimates. This project demonstrates practical trade-offs between algorithmic complexity and real-world resource usage in data structure design..',
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
