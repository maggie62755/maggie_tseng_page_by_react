import React, { useState } from 'react';
import './Projects.css';
import '../styles/shared.css';

const Projects: React.FC = () => {
  const [expandedProjects, setExpandedProjects] = useState<Set<number>>(new Set());

  const toggleExpanded = (projectId: number) => {
    const newExpanded = new Set(expandedProjects);
    if (newExpanded.has(projectId)) {
      newExpanded.delete(projectId);
    } else {
      newExpanded.add(projectId);
    }
    setExpandedProjects(newExpanded);
  };
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A full-stack e-commerce web application built with React, Node.js, and MongoDB. Features include user authentication, product catalog, shopping cart, and payment integration with Stripe. This project demonstrates modern web development practices including responsive design, secure authentication, and seamless payment processing.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
      status: "Completed",
      image: "/api/placeholder/711/400", // 16:9 ratio placeholder
      link: "#",
      sourceCode: "#"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A responsive task management application with real-time updates. Users can create, edit, and organize tasks with drag-and-drop functionality. Built with TypeScript for better code maintainability.",
      technologies: ["TypeScript", "React", "Firebase", "Material-UI"],
      status: "In Progress",
      image: "/api/placeholder/711/400", // 16:9 ratio placeholder
      link: "#"
      // No sourceCode property - won't show source code button
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A beautiful weather dashboard that displays current weather conditions and forecasts for multiple cities using OpenWeatherMap API. Features include interactive charts, geolocation support, and responsive design.",
      technologies: ["JavaScript", "CSS3", "Weather API", "Chart.js"],
      status: "Completed",
      image: "/api/placeholder/711/400", // 16:9 ratio placeholder
      link: "#",
      sourceCode: "#"
    }
  ];

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>My Projects</h1>
        <p>A showcase of my development work and technical skills</p>
      </div>
      
      <div className="projects-grid">
        {projects.map(project => (
          <div key={project.id} className="project-card">
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
              <div className={`project-description-container ${expandedProjects.has(project.id) ? 'expanded' : ''}`}>
                <p className="project-description">
                  {expandedProjects.has(project.id) 
                    ? project.description 
                    : project.description
                  }
                </p>
                {project.description.length > 120 && (
                  <button 
                    className="expand-button"
                    onClick={() => toggleExpanded(project.id)}
                  >
                    {expandedProjects.has(project.id) ? 'Show Less' : 'Read More'}
                  </button>
                )}
              </div>
              
              <div className="project-technologies">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
              
              <div className="project-actions">
                <a href={project.link} className="project-link">View Project</a>
                {project.sourceCode && (
                  <a href={project.sourceCode} className="project-link secondary">Source Code</a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="projects-footer">
        <p>More projects coming soon! Check my GitHub for additional work.</p>
        <a href="#" className="github-link">Visit My GitHub</a>
      </div>
    </div>
  );
};

export default Projects;
