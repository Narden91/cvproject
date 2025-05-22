import React from 'react';
import { experienceData } from '../../data/experienceData';
import './ExperienceSection.css';

const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="experience-container">
        <h2 className="experience-title">Professional Experience</h2>
        <div className="experience-timeline">
          {experienceData.map((exp, index) => (
            <div key={index} className="timeline-item-experience">
              <div className="timeline-dot-experience"></div>
              
              <h3 className="experience-role">{exp.role}</h3>
              <p className="experience-company">{exp.company}</p>
              <p className="experience-duration-location">
                {exp.duration}
                {exp.location && ` | ${exp.location}`}
              </p>
              
              {exp.responsibilities && exp.responsibilities.length > 0 && (
                <div>
                  <h4 className="experience-subtitle">Responsibilities:</h4>
                  <ul className="experience-list">
                    {exp.responsibilities.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}

              {exp.achievements && exp.achievements.length > 0 && (
                <div>
                  <h4 className="experience-subtitle">Key Achievements:</h4>
                  <ul className="experience-list">
                    {exp.achievements.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}

              {exp.technologies && exp.technologies.length > 0 && (
                <div className="experience-technologies">
                  <h5 className="experience-technologies-title">Technologies Used:</h5>
                  <div className="technologies-list">
                    {exp.technologies.map((tech, idx) => (
                      <span key={idx} className="technology-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
