// Smaller projects, listed after MOSA in section 2.
// MOSA itself is written out in components/Mosa.tsx because it has a figure and a table.
export interface Project {
  title: string
  description: string
  tools: string
  code: string
}

export const projects: Project[] = [
  {
    title: 'Orbital mechanics',
    description:
      'A Newtonian simulation of planetary motion that compares forward Euler with symplectic Euler over long runs. It builds from a fixed Sun to a moving two-body system, and ends with a Sun–Earth–Jupiter slingshot in which a spacecraft gains enough energy to escape.',
    tools: 'Python, Matplotlib',
    code: 'https://github.com/Addes4/orbital_simulation',
  },
  {
    title: 'Spectral filtering of an ECG signal',
    description:
      'A simulated ECG-like waveform with Gaussian noise and 50 Hz mains interference. The FFT gives the heart rate and the interference frequency; the interference is removed in the frequency domain and the signal is rebuilt with an inverse transform.',
    tools: 'MATLAB',
    code: 'https://github.com/Addes4/Fast_Fourier_Transform',
  },
]
