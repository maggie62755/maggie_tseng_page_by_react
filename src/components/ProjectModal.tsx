import React from 'react';
import Modal from './Modal';
import './ProjectModal.css';
import type { Project, ProjectContent } from '../data/projects_data';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  if (!project) return null;

  const renderContent = (content: ProjectContent, index: number) => {
    switch (content.type) {
      case 'paragraph':
        return <p key={index} className="modal-paragraph">{content.content}</p>;
      
      case 'heading':
        return <h3 key={index} className="modal-heading">{content.content}</h3>;
      
      case 'list':
        return (
          <ul key={index} className="modal-list">
            {content.items?.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        );
      
      case 'image':
        return (
          <div key={index} className="modal-content-image-wrapper">
            <img 
              src={content.src} 
              alt={content.alt || 'Project image'}
              className="modal-content-image"
              onError={(e) => {
                e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDYwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI2MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRjNGM0YzIi8+CjxyZWN0IHg9IjI1MCIgeT0iMTI1IiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjUwIiByeD0iNSIgZmlsbD0iIzQyODFBNCIvPgo8dGV4dCB4PSIzMDAiIHk9IjE1NSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+SW1hZ2U8L3RleHQ+Cjwvc3ZnPgo=';
              }}
            />
            {content.alt && <p className="modal-image-caption">{content.alt}</p>}
          </div>
        );
      

      case 'link':
        // 支援單一或多個連結，每個 link 一行
        if (content.links && Array.isArray(content.links)) {
          return (
            <div key={index} className="modal-link-wrapper">
              {content.links.map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="modal-link"
                >
                  {link.text || link.url}
                </a>
              ))}
            </div>
          );
        } else if (content.url) {
          return (
            <div key={index} className="modal-link-wrapper">
              <a
                href={content.url}
                target="_blank"
                rel="noopener noreferrer"
                className="modal-link"
              >
                {content.text || content.url}
              </a>
            </div>
          );
        } else {
          return null;
        }
      
      default:
        return null;
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={project.title}
    >
      <img 
        src={project.image} 
        alt={project.title}
        className="modal-project-image"
        onError={(e) => {
          e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzExIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDcxMSA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI3MTEiIGhlaWdodD0iNDAwIiBmaWxsPSIjRjNGM0YzIi8+CjxyZWN0IHg9IjMwNSIgeT0iMTc1IiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjUwIiByeD0iNSIgZmlsbD0iIzQyODFBNCIvPgo8dGV4dCB4PSIzNTUiIHk9IjIwNSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+SW1hZ2U8L3RleHQ+Cjwvc3ZnPgo=';
        }}
      />
      
      <div className="modal-project-meta">
        <div className="modal-meta-item">
          <span className="modal-meta-label">Status</span>
          <span className={`modal-meta-value status-badge ${project.status.toLowerCase().replace(' ', '-')}`}>
            {project.status}
          </span>
        </div>
        <div className="modal-meta-item">
          <span className="modal-meta-label">Technologies</span>
          <div className="modal-technologies">
            {project.technologies.map((tech, index) => (
              <span key={index} className="modal-tech-tag">{tech}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="modal-description">
        {project.detailedContent ? (
          project.detailedContent.map((content, index) => renderContent(content, index))
        ) : (
          <p className="modal-paragraph">{project.description}</p>
        )}
      </div>

      <div className="modal-actions">
        <a href={project.link} className="modal-action-button primary">
          View Project
        </a>
        {project.sourceCode && (
          <a href={project.sourceCode} className="modal-action-button secondary">
            Source Code
          </a>
        )}
      </div>
    </Modal>
  );
};

export default ProjectModal;
