export interface HeroData {
  name: string;
  title: string;
  tagline: string;
  email: string;
  linkedin: string;
  github: string;
  cvLink: string;
}

export const heroData: HeroData = {
  name: "Dr. [Your Name]",
  title: "PhD, AI Engineer",
  tagline: "Innovating at the intersection of AI and [Your Specialization]",
  email: "your.email@example.com",
  linkedin: "https://linkedin.com/in/yourprofile",
  github: "https://github.com/yourusername",
  cvLink: "/path/to/your/cv.pdf", // Replace with actual link or handle download
};
