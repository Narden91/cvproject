import React from 'react';
import { heroData } from '../../data/heroData';
import './HeroSection.css';

const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="hero-section">
      <img 
        src={"https://via.placeholder.com/150"} // Reverted to placeholder
        alt="Professional Headshot" 
        className="hero-headshot" 
      />
      <h1 className="hero-title">{heroData.name}</h1>
      <h2 className="hero-subtitle">{heroData.title}</h2>
      <p className="hero-tagline">{heroData.tagline}</p>
      <div className="hero-links">
        <a href={`mailto:${heroData.email}`}>Email</a>
        <a href={heroData.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href={heroData.github} target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
      <div className="hero-cta-container">
        <a 
          href={heroData.cvLink}
          onClick={(e) => { e.preventDefault(); alert('CV download/preview to be implemented'); }}
          className="hero-cta-button"
        >
          Download CV
        </a>
        <a 
          href="#contact" 
          onClick={(e) => { 
            e.preventDefault(); 
            const contactSection = document.getElementById('contact');
            if (contactSection) {
              contactSection.scrollIntoView({ behavior: 'smooth' });
            } else {
              alert('Contact section not found. Ensure it has id="contact"');
            }
          }}
          className="hero-cta-button secondary" // Added secondary class for different styling if needed
        >
          Contact Me
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
