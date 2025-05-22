export interface Degree {
  institution: string;
  degree: string;
  field: string;
  year: string;
  dissertationTitle?: string; // Optional for PhD
  honors?: string; // Optional
  relevantCoursework?: string[]; // Optional
}

export const educationData: Degree[] = [
  {
    institution: "[Your PhD Granting Institution]",
    degree: "Doctor of Philosophy (PhD)",
    field: "[Your Field of Study, e.g., Artificial Intelligence, Computer Science]",
    year: "[Year of Graduation, e.g., 2020 - 2024]",
    dissertationTitle: "[Your Dissertation Title - e.g., Advanced Deep Learning Models for Real-time Anomaly Detection]",
    relevantCoursework: [
      "Advanced Machine Learning",
      "Deep Neural Networks",
      "Natural Language Processing with Transformers",
      "Computer Vision and Image Analysis"
    ]
  },
  {
    institution: "[Your Master's Granting Institution]",
    degree: "Master of Science (M.S.)",
    field: "[Your Field of Study]",
    year: "[Year of Graduation, e.g., 2018 - 2020]",
    honors: "[e.g., Graduated with Distinction, Summa Cum Laude]",
    relevantCoursework: [
      "Probabilistic Graphical Models",
      "Reinforcement Learning",
      "Big Data Technologies"
    ]
  },
  {
    institution: "[Your Bachelor's Granting Institution]",
    degree: "Bachelor of Science (B.S.)",
    field: "[Your Field of Study]",
    year: "[Year of Graduation, e.g., 2014 - 2018]",
    honors: "[e.g., Dean's List, First Class Honors]"
  }
];
