import React from 'react';
import './Header.css';
import { useTheme } from '../../hooks/useTheme';

const Header: React.FC = () => {
  const { theme } = useTheme();

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`app-header ${theme === 'dark' ? 'dark-theme' : 'light-theme'}`}>
      <nav className="header-nav">
        <a onClick={() => scrollToSection('hero')} className="nav-link">Home</a>
        <a onClick={() => scrollToSection('about')} className="nav-link">About</a>
        <a onClick={() => scrollToSection('education')} className="nav-link">Education</a>
        <a onClick={() => scrollToSection('experience')} className="nav-link">Experience</a>
        <a onClick={() => scrollToSection('contact')} className="nav-link">Contact</a>
      </nav>
    </header>
  );
};

export default Header;