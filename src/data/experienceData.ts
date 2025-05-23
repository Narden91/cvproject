export interface ExperienceEntry {
  company: string;
  role: string;
  duration: string;
  location?: string;
  responsibilities: string[];
  achievements?: string[];
  technologies?: string[];
  supervisors?: string[];
}

export const experienceData: ExperienceEntry[] = [
  {
    company: "University of Cassino and Southern Lazio",
    role: "PhD Researcher & Teaching Assistant",
    duration: "2021 - Present",
    location: "Cassino, Italy",
    responsibilities: [
      "Conducting cutting-edge research in AI-driven medical diagnostics using handwriting analysis",
      "Developing machine learning models for early detection of neurodegenerative diseases and learning disorders",
      "Teaching artificial intelligence concepts to Master's degree students in Computer Engineering",
      "Supervising undergraduate and graduate students in AI and machine learning projects",
      "Collaborating with medical institutions on real-world diagnostic applications"
    ],
    achievements: [
      "Published 10+ peer-reviewed papers in top-tier conferences and journals",
      "Developed innovative handwriting analysis pipeline for Alzheimer's disease detection",
      "Created multi-modal classification system using genetic programming",
      "Successfully defended PhD research progress with excellent evaluations",
      "Received recognition as Adjunct Instructor for AI coursework delivery"
    ],
    technologies: ["Python", "TensorFlow", "PyTorch", "scikit-learn", "pandas", "numpy", "C#", "WPF", "SHAP", "Transformers", "CNNs"],
    supervisors: ["Prof. Francesco Fontanella", "Prof. Claudio De Stefano"]
  },
  {
    company: "University of Cassino and Southern Lazio",
    role: "Fellowship Researcher - Application Development",
    duration: "2022 - Present",
    location: "Cassino, Italy",
    responsibilities: [
      "Developing C# WPF applications for handwriting data acquisition from Wacom devices",
      "Creating user-friendly interfaces for medical data collection in clinical settings",
      "Integrating real-time data processing capabilities for handwriting analysis",
      "Collaborating with medical professionals to ensure application usability and effectiveness"
    ],
    achievements: [
      "Successfully developed and deployed handwriting acquisition system for PRIN2022 project",
      "Created specialized data collection tools for Alzheimer's disease research",
      "Implemented robust data validation and quality control mechanisms",
      "Reduced data collection time by 40% through interface optimization"
    ],
    technologies: ["C#", "WPF", ".NET Framework", "Wacom SDK", "Windows API", "SQL Server"],
    supervisors: ["Prof. Claudio De Stefano", "Prof. Francesco Fontanella"]
  },
  {
    company: "University of Cassino and Southern Lazio",
    role: "Fellowship Researcher - Machine Learning",
    duration: "2021 - 2022",
    location: "Cassino, Italy",
    responsibilities: [
      "Developing machine learning techniques for predicting cognitive deficits through handwriting analysis",
      "Implementing feature extraction and selection algorithms for biomarker identification",
      "Creating robust data preprocessing pipelines for multi-modal medical data",
      "Conducting statistical analysis and validation of machine learning models"
    ],
    achievements: [
      "Developed novel stroke-based feature extraction methodology",
      "Achieved 85%+ accuracy in early Alzheimer's disease detection using handwriting data",
      "Implemented Bayesian network approaches for uncertainty quantification",
      "Created comprehensive evaluation framework for medical AI systems"
    ],
    technologies: ["Python", "scikit-learn", "pandas", "numpy", "matplotlib", "seaborn", "Jupyter", "Git"],
    supervisors: ["Prof. Claudio De Stefano", "Prof. Francesco Fontanella"]
  },
  {
    company: "University of Cassino and Southern Lazio - CyberChallenge.IT",
    role: "Cybersecurity Instructor",
    duration: "June 2023",
    location: "Cassino, Italy",
    responsibilities: [
      "Delivering hands-on cybersecurity training to university students",
      "Creating interactive learning environments for cybersecurity skill development",
      "Developing practical exercises and challenges for participants",
      "Mentoring students in cybersecurity best practices and methodologies"
    ],
    achievements: [
      "Successfully trained 25+ students in cybersecurity fundamentals",
      "Created engaging hands-on learning experiences with 95% satisfaction rate",
      "Contributed to national cybersecurity education initiative",
      "Developed innovative teaching methodologies for technical skill transfer"
    ],
    technologies: ["Linux", "Network Security", "Penetration Testing", "Cryptography", "Python", "Bash Scripting"]
  },
  {
    company: "University of Cassino and Southern Lazio - ISESS 2023",
    role: "Conference Organizer & Session Chairman",
    duration: "October 2023",
    location: "Cassino, Italy",
    responsibilities: [
      "Serving as member of Organization Committee for International PhD Symposium",
      "Moderating oral presentation sessions on Engineering and Sport Sciences",
      "Coordinating with international speakers and researchers",
      "Managing conference logistics and academic program coordination"
    ],
    achievements: [
      "Successfully organized first edition of International PhD Symposium",
      "Facilitated knowledge exchange between 50+ international PhD students",
      "Managed multi-disciplinary session covering AI applications in sports science",
      "Received positive feedback from participants and academic community"
    ],
    technologies: ["Conference Management Systems", "Academic Presentation Tools", "Microsoft Office Suite"]
  }
];