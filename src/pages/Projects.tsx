import React, { useState } from 'react';
import './Projects.css';
import '../styles/shared.css';
import ProjectModal from '../components/ProjectModal';
import { projectsData } from '../data/project-index';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const openModal = (projectId: number) => {
    setSelectedProject(projectId);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>My Projects</h1>
        <p>A showcase of my development work and technical skills</p>
      </div>
      
      <div className="projects-grid">
        {projectsData.map(project => (
          <div 
            key={project.id} 
            className="project-card"
            onClick={() => openModal(project.id)}
            title={project.title}
          >
            <div className="project-image-container">
              <img 
                src={project.image} 
                alt={project.title}
                className="project-image"
                onError={(e) => {
                  e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzExIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDcxMSA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI3MTEiIGhlaWdodD0iNDAwIiBmaWxsPSIjRjNGM0YzIi8+CjxyZWN0IHg9IjMwNSIgeT0iMTc1IiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjUwIiByeD0iNSIgZmlsbD0iIzQyODFBNCIvPgo8dGV4dCB4PSIzNTUiIHk9IjIwNSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+SW1hZ2U8L3RleHQ+Cjwvc3ZnPgo=';
                }}
              />
              <div className="project-status">
                <span className={`status-badge ${project.status.toLowerCase().replace(' ', '-')}`}>
                  {project.status}
                </span>
              </div>
            </div>
            
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
                <div className="project-date">{project.date && (project.date)}</div>
              <div className="project-description-container">
                <p className="project-description">
                  {project.description.length > 150 
                    ? `${project.description.substring(0, 150)}...` 
                    : project.description
                  }
                </p>
              </div>
              
              <div className="project-technologies">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="projects-footer">
        <p>More projects coming soon! Check my GitHub for additional work.</p>
        <a href="https://github.com/maggie62755" className="github-link">Visit My GitHub</a>
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject !== null ? projectsData.find(p => p.id === selectedProject) || null : null}
        isOpen={selectedProject !== null}
        onClose={closeModal}
      />
    </div>
  );
};

export default Projects;
