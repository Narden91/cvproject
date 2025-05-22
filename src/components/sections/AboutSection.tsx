import React from 'react';
import { aboutData } from '../../data/aboutData';
import './AboutSection.css'; // Make sure this CSS file exists and is styled

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="about-section section"> {/* Added "section" for global styles */}
      <div className="container"> {/* Added "container" for global styles */}
        <h2 className="section-title">About Me</h2> {/* Generic title class */}
        
        <div className="about-summary">
          {aboutData.summary.map((paragraph, index) => (
            <p key={index} className="summary-paragraph">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="about-details-grid">
          <div className="about-expertise">
            <h3 className="subsection-title">Key Expertise</h3>
            <ul className="expertise-list">
              {aboutData.expertise.map((item, index) => (
                <li key={index} className="expertise-item">{item}</li>
              ))}
            </ul>
          </div>
          
          <div className="about-current-focus">
            <h3 className="subsection-title">Current Focus</h3>
            <p><strong>Role:</strong> {aboutData.currentRole}</p>
            <p><strong>Research:</strong> {aboutData.researchFocus}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
