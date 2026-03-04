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
    title: 'Productivity Planner',
    description:
      'Productivity Planner is a local-first web app I built to turn weekly goals into a realistic schedule. Users set priorities, session lengths, preferred times, and constraints (like sleep windows, travel buffers, and allowed weekdays), and the app auto-generates calendar blocks around existing commitments. It supports drag-and-drop rescheduling, recurring events with single-instance edits, .ics import, optional Google Calendar sync through an OAuth proxy, and weekly outcome reporting.',
    tech: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
    github: 'https://github.com/Addes4/productivity_planner',
  },
  {
    title: 'Clinical Food Log',
    description:
      'A privacy-first full-stack web app I built to help IBS/IBD patients and clinicians track patterns between food, symptoms, and daily context. It supports role-based workflows (patient, clinician, admin) with strict access controls and data isolation, plus structured logging for meals, symptoms, hydration, medication adherence, and reminders. I implemented bilingual (Swedish/English) food normalization with confidence scoring and typo-tolerant matching, then added clinician-facing analytics for trend summaries and possible food-symptom associations (explicitly correlation, not causation). The platform also includes shared care plans, goal tracking with smart nudges, and de-identified research export tooling.',
    tech: ['Next.js 14', 'TypeScript', 'Prisma', 'NextAuth v4'],
    github: 'https://github.com/Addes4/clinical-food-log',
  },
  {
    title: 'Workflow Orchestrator',
    description:
      'A lead operations workspace designed for outreach teams that need speed without losing human control. It centralizes lead ownership, stage tracking, internal notes, and inbound/outbound email history so handoffs stay clean and the full relationship context is always visible. The product is intentionally human-in-the-loop: instead of sending emails automatically, it generates AI-assisted draft suggestions for the next message and keeps final decisions with the team. I also structured it with an extensible, feature-gated automation foundation for future workflow execution use cases. The result is a practical decision-support tool that improves pipeline clarity, collaboration, and follow-up quality.',
    tech: ['React', 'Node.js/Express', 'SQLite', 'Tailwind CSS'],
    github: 'https://github.com/Addes4/Workflow-orchestrator',
  },
]
