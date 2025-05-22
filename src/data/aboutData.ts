export interface AboutData {
  summary: string[]; // Array of paragraphs
  expertise: string[];
  currentRole: string;
  researchFocus: string;
}

export const aboutData: AboutData = {
  summary: [
    "A highly motivated and results-oriented PhD and AI Engineer with a passion for developing innovative solutions to complex problems. Expertise in deep learning, natural language processing, and computer vision, with a proven track record of delivering impactful research and development projects.",
    "Seeking to leverage advanced AI skills and academic background to contribute to cutting-edge advancements in [Target Industry/Field]."
  ],
  expertise: [
    "Deep Learning (TensorFlow, PyTorch)",
    "Natural Language Processing (NLP)",
    "Computer Vision (CV)",
    "Machine Learning Model Deployment",
    "Big Data Analytics",
    "Algorithm Design & Optimization"
  ],
  currentRole: "AI Research Scientist at [Current Company/Institution]",
  researchFocus: "Developing next-generation AI models for [Specific Area of Research], focusing on scalability and ethical considerations."
};
