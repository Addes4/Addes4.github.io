export interface Project {
  title: string
  description: string
  tech: string[]
  github?: string
  live?: string
}

export const projects: Project[] = [
  {
    title: 'ASTRID',
    description:
      'My research at Karolinska Institutet. More info TBA.',
    tech: ['Python', 'R', 'Cancer Research','Computational Biology', 'Jupyter Notebook'],
    github: 'https://github.com/Addes4/astrid',
  },
    {
    title: 'MOSA',
    description:
      'At the AI x Science Hackathon in London (Oct 2026), our team built a self-checking AI research framework where LLMs design algorithms, with each run sandboxed on Modal. It produced a bin-packing rule that beats published AI-designed rules, including Google DeepMind’s FunSearch algorithm. Extended it into MOSA, which tests LLM-designed strategies in parallel on ~500 Modal cores. It found 5 new best-known square packings (n=88, 123, 126, 129, 130), a benchmark studied since 1979. 1,000+ applications, 200+ participants. Sponsors include Modal, Hugging Face, Anthropic, Google DeepMind and Cognition.',
    tech: ['Autoresearch', 'Claude Code', 'Codex', 'Hugging Face', 'Modal'],
    github: 'https://github.com/swedishScienceMafia/swedishScienceMafia',
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
]
