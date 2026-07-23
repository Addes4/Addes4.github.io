export interface Project {
  title: string
  description: string
  tech: string[]
  github?: string
  live?: string
}

export const projects: Project[] = [
  {
    title: 'Single-cell RNA sequence classification',
    description:
      'My research at Karolinska Institutet. More info TBA.',
    tech: ['Python', 'R', 'Cancer Research','Computational Biology', 'Jupyter Notebook'],
    github: 'https://github.com/Addes4/astrid',
  },
  {
    title: 'Simulation of orbital mechanics',
    description:
      'Built a Python-based orbital mechanics simulation project that models planetary motion with Newtonian gravity, compares forward Euler vs. symplectic Euler integration, and visualizes long-term orbit stability. The project progresses from a fixed-Sun orbit model to a moving two-bodysystem, then to a Sun–Earth–Jupiter gravitational slingshot scenario where a spacecraft gains enough energy to escape, with energy/convergence analysis and matplotlib plots throughout.',
    tech: ['Python', 'Math', 'Matplotlib'],
    github: 'https://github.com/Addes4/orbital_simulation',
  },
  {
    title: 'Fast Fourier Transform ECG Filtering',
    description:
      'I built a MATLAB signal-processing project that simulates an ECG-like waveform, adds Gaussian noise and 50 Hz power-line interference, and uses the Fast Fourier Transform to detect both the heart-rate peak and the disturbance frequency. The script estimates BPM from the spectrum, removes the narrow-band interference directly in the frequency domain, reconstructs the cleaned signal with an inverse FFT, and exports plots comparing the raw, spectral, and filtered results.',
    tech: ['MATLAB', 'Signal Processing', 'FFT'],
    github: 'https://github.com/Addes4/Fast_Fourier_Transform',
  },
  {
    title: 'Graph Comparison',
    description:
      'I built a Python benchmarking project that compares adjacency matrix and adjacency list graph representations by measuring runtime, memory usage, and estimated CO2 emissions. The script generates random undirected graphs with different sizes and densities, then benchmarks core operations like has_edge, get_neighbors, and BFS traversal. It highlights the practical trade-offs between theoretical complexity and real resource usage when choosing data structures.',
    tech: ['Python', 'CodeCarbon', 'tracemalloc'],
    github: 'https://github.com/Addes4/graph-comparison',
  },
]
