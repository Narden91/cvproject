import { useState, useEffect } from 'react';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import EducationSection from './components/sections/EducationSection';
import ExperienceSection from './components/sections/ExperienceSection'; 
import ThemeToggleButton from './components/ui/ThemeToggleButton';
import InteractiveAiBackground from './components/ui/InteractiveAiBackground';
import Header from './components/common/Header'; // Import the Header component
import './App.css'; // Import App-specific styles

/**
 * Main App component featuring an interactive AI/Evolutionary Algorithm background.
 * The background visualizes concepts from evolutionary algorithms:
 * - Particles represent individuals in a population
 * - Neural connections between particles show relationships
 * - Visual elements for selection, crossover, and mutation appear over time
 * - Clicking in the background creates new particles and evolves the network
 * - Colored particles represent different generations
 */
function App() {
  const [showInfo, setShowInfo] = useState(true);

  // Hide the info badge after 10 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowInfo(false);
    }, 10000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app">
      <InteractiveAiBackground /> {/* Interactive AI/Evolutionary Algorithm background */}
      <Header /> {/* Add the Header component */}
      <ThemeToggleButton /> {/* Moved ThemeToggleButton outside content-wrapper for fixed positioning potentially */}
      <div className="content-wrapper">
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
      
      {/* Info badge about the interactive background */}
      {showInfo && (
        <div className="interactive-info">
          Click anywhere on the background to interact with the evolutionary AI visualization
        </div>
      )}
    </div>
  );
}

export default App;
