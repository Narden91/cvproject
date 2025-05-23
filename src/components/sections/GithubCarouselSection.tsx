import React from 'react';
import Slider from 'react-slick';
import { githubRepoData } from '../../data/githubData';
import type { GithubRepo } from '../../data/githubData';
import './GithubCarouselSection.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const GithubCarouselSection: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section id="github-projects" className="github-carousel-section section">
      <div className="container">
        <div className="section-header">
          <div className="section-number">0X</div> {/* Update section number as needed */}
          <h2 className="display-2 section-title">My GitHub Projects</h2>
          <p className="section-description">
            A selection of my open-source projects and contributions.
          </p>
        </div>
        <Slider {...settings}>
          {githubRepoData.map((repo: GithubRepo) => (
            <div key={repo.id} className="repo-slide">
              <div className="repo-card">
                {repo.imageUrl && (
                  <img src={repo.imageUrl} alt={`${repo.name} preview`} className="repo-image" />
                )}
                <div className="repo-info">
                  <h3 className="repo-name">{repo.name}</h3>
                  <p className="repo-description">{repo.description}</p>
                  <div className="repo-stats">
                    <span className="repo-language">{repo.language}</span>
                    <span className="repo-stars">⭐ {repo.stars}</span>
                    <span className="repo-forks"> Forks: {repo.forks}</span>
                  </div>
                  <a href={repo.url} target="_blank" rel="noopener noreferrer" className="repo-link">
                    View on GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default GithubCarouselSection;
