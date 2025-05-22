export interface ExperienceEntry {
  company: string;
  role: string;
  duration: string;
  location?: string; // Optional
  responsibilities: string[];
  achievements?: string[]; // Optional
  technologies?: string[]; // Optional
}

export const experienceData: ExperienceEntry[] = [
  {
    company: "[Previous Company Name / Current Company if applicable]",
    role: "[Your Role, e.g., Senior AI Engineer]",
    duration: "[Dates, e.g., Jan 2022 - Present]",
    location: "[City, Country - Optional]",
    responsibilities: [
      "Led the design and development of machine learning models for [specific application].",
      "Collaborated with cross-functional teams to integrate AI solutions into products.",
      "Mentored junior engineers and contributed to team knowledge sharing.",
      "Stayed abreast of the latest advancements in AI and machine learning."
    ],
    achievements: [
      "Successfully developed and deployed a [specific model/system] resulting in [quantifiable impact, e.g., 15% improvement in X].",
      "Published [Number] research papers/patents based on work at the company.",
      "Received [Award/Recognition] for contributions to [Project/Team]."
    ],
    technologies: ["Python", "PyTorch", "TensorFlow", "AWS SageMaker", "Docker", "Kubernetes"]
  },
  {
    company: "[Another Previous Company Name]",
    role: "[Your Role, e.g., AI Research Intern]",
    duration: "[Dates, e.g., Jun 2021 - Dec 2021]",
    location: "[City, Country - Optional]",
    responsibilities: [
      "Assisted senior researchers in developing and testing new AI algorithms.",
      "Conducted literature reviews and summarized findings on [specific AI topic].",
      "Contributed to the development of a prototype for [specific project]."
    ],
    achievements: [
      "Co-authored a workshop paper on [topic].",
      "Gained hands-on experience with [specific tools/techniques]."
    ],
    technologies: ["Python", "Scikit-learn", "Pandas", "Jupyter Notebooks"]
  },
  // Add more entries as needed
];
