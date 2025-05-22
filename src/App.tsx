import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import EducationSection from './components/sections/EducationSection';
import ExperienceSection from './components/sections/ExperienceSection'; 
import ThemeToggleButton from './components/ui/ThemeToggleButton';
import InteractiveAiBackground from './components/ui/InteractiveAiBackground';
import './App.css'; // Import App-specific styles

function App() {
  return (
    <div className="app">
      <InteractiveAiBackground /> {/* Render background first */}
      <div className="content-wrapper">
        <ThemeToggleButton />
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <ExperienceSection />
        {/* Other sections will be added here */}
        <section id="contact" className="contact-placeholder">
          <div className="container">
            <h2 className="section-title">Contact Section (Placeholder)</h2>
            <p>A contact form will be implemented here.</p>
          </div>
        </section>
        <footer className="footer">
          <div className="container">
            <p>&copy; {new Date().getFullYear()} Dr. [Your Name]. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
