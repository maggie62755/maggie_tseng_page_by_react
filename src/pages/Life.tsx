import React, { useState } from 'react';
import './Life.css';
import '../styles/shared.css';
import { lifeItems } from '../data/lifeData';

const Life: React.FC = () => {
  const [expandedExperiences, setExpandedExperiences] = useState<Set<number>>(new Set());

  const toggleExperienceExpanded = (experienceId: number) => {
    const newExpanded = new Set(expandedExperiences);
    if (newExpanded.has(experienceId)) {
      newExpanded.delete(experienceId);
    } else {
      newExpanded.add(experienceId);
    }
    setExpandedExperiences(newExpanded);
  };

  const experiences = [
    {
      id: 1,
      title: "同樂管樂團音樂會",
      date: "July 2023",
      description: "從高中畢業後，因為大學不在台北，因而斷了好幾年的管樂演出。這次的音樂會讓我重新找回了對音樂的熱情，也讓我了解到音樂對我來說的力量。重新再拾起樂器的過程很艱辛，枯燥乏味的練習與挫折讓我很想放棄。但最後台上演出時的感動是會讓人記一輩子的",
      image: "/images/life/2023DTWBperformance.jpg",
      tags: ["Music", "Performance", "Growth"]
    },
    {
      id: 2,
      title: "Backpacking Through Japan",
      date: "Summer 2023",
      description: "Three weeks exploring Japan taught me so much about minimalism, attention to detail, and finding beauty in simplicity. From Tokyo's bustling streets to Kyoto's serene temples, every moment was a lesson in mindfulness.",
      image: "/images/life/2024Tokoyo.jpg",
      tags: ["Travel", "Culture", "Adventure"]
    },
    {
      id: 3,
      title: "Volleyball Championship Win",
      date: "October 2023",
      description: "Our team's journey to winning the regional championship was filled with ups and downs. What I learned most was the power of persistence and how individual skills mean nothing without team chemistry.",
      image: "/images/life/volleyball.jpg",
      tags: ["Sports", "Teamwork", "Achievement"]
    }
  ];

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>My Life</h1>
        <p>Beyond coding - the things that inspire and energize me</p>
      </div>
      
      <div className="life-grid">
        {lifeItems.map(item => (
          <div key={item.id} className="life-card">
            <div className="life-icon">{item.icon}</div>
            <h3 className="life-title">{item.title}</h3>
            <p className="life-description">{item.description}</p>
          </div>
        ))}
      </div>
      
      <div className="life-experiences">
        <h2>Experiences</h2>
        <p className="experiences-subtitle">
          Stories and insights from my journey of growth and discovery
        </p>
        
        <div className="experiences-grid">
          {experiences.map(experience => (
            <div key={experience.id} className="experience-card">
              <div className="experience-image">
                <img 
                  src={experience.image} 
                  alt={experience.title}
                  onError={(e) => {
                    e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRjNGM0YzIi8+CjxyZWN0IHg9IjE1MCIgeT0iMTI1IiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjUwIiByeD0iNSIgZmlsbD0iIzQyODFBNCIvPgo8dGV4dCB4PSIyMDAiIHk9IjE1NSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+SW1hZ2U8L3RleHQ+Cjwvc3ZnPgo=';
                  }}
                />
                <div className="experience-date">{experience.date}</div>
              </div>
              
              <div className="experience-content">
                <h3 className="experience-title">{experience.title}</h3>
                <div className={`experience-description-container ${expandedExperiences.has(experience.id) ? 'expanded' : ''}`}>
                  <p className="experience-description">
                    {experience.description}
                  </p>
                  {experience.description.length > 120 && (
                    <button 
                      className="experience-expand-button"
                      onClick={() => toggleExperienceExpanded(experience.id)}
                    >
                      {expandedExperiences.has(experience.id) ? 'Show Less' : 'Read More'}
                    </button>
                  )}
                </div>
                
                <div className="experience-tags">
                  {experience.tags.map((tag, index) => (
                    <span key={index} className="experience-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="life-gallery">
        <h2>Life in Pictures</h2>
        <div className="gallery-grid">
          <div className="gallery-item">
            <div className="gallery-placeholder">
              <span>Euphonium Performance</span>
            </div>
          </div>
          <div className="gallery-item">
            <div className="gallery-placeholder">
              <span>Volleyball Match</span>
            </div>
          </div>
          <div className="gallery-item">
            <div className="gallery-placeholder">
              <span>Travel Memories</span>
            </div>
          </div>
          <div className="gallery-item">
            <div className="gallery-placeholder">
              <span>Concert Hall</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Life;
