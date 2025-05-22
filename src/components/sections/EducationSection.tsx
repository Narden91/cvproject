import React from 'react';
import { educationData } from '../../data/educationData';
import './EducationSection.css'; // Import the CSS file

const EducationSection: React.FC = () => {
  return (
    <section id="education" className="education-section">
      <div className="education-container">
        <h2 className="education-title">Education</h2>
        <div className="education-timeline">
          {educationData.map((edu, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot"></div>
              
              <h3 className="timeline-degree">{edu.degree}</h3>
              <p className="timeline-institution">{edu.institution}</p>
              <p className="timeline-details">{edu.year} | {edu.field}</p>
              
              {edu.dissertationTitle && (
                <p className="timeline-dissertation">
                  Dissertation: "{edu.dissertationTitle}"
                </p>
              )}
              
              {edu.honors && (
                <p className="timeline-honors">{edu.honors}</p>
              )}
              
              {edu.relevantCoursework && edu.relevantCoursework.length > 0 && (
                <div>
                  <h4 className="timeline-coursework-title">Relevant Coursework:</h4>
                  <ul className="timeline-coursework-list">
                    {edu.relevantCoursework.map((course, idx) => (
                      <li key={idx}>{course}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
