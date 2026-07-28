import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Modal from './Modal';
import './ProjectModal.css';
import type { Project } from '../data/project-index';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";


interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  const [lightboxImage, setLightboxImage] = useState<{ src: string; alt: string } | null>(null);


  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && lightboxImage) {
        setLightboxImage(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxImage]);

  if (!project) return null;

  return createPortal(
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        title={project.title}
      >
        <img 
          src={project.image} 
          alt={project.title}
          className="modal-project-image zoomable-image"
          onClick={() => setLightboxImage({ src: project.image, alt: project.title })}
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
          {project.content ? (
            <ReactMarkdown 
              remarkPlugins={[remarkGfm]}
              components={{
                img: ({node, ...props}) => (
                  <img 
                    {...props} 
                    className="zoomable-image" 
                    onClick={() => {
                      if (props.src) {
                        setLightboxImage({ src: props.src, alt: props.alt || '' });
                      }
                    }} 
                  />
                )
              }}
            >
              {project.content}
            </ReactMarkdown>
          ) : (
            <p className="modal-paragraph">{project.description}</p>
          )}
        </div>

        <div className="modal-actions">
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="modal-action-button primary">
            View Project
          </a>
          {project.sourceCode && (
            <a href={project.sourceCode} target="_blank" rel="noopener noreferrer" className="modal-action-button secondary">
              Source Code
            </a>
          )}
        </div>
      </Modal>

      {/* Image Lightbox Overlay */}
      {lightboxImage && (
        <div className="lightbox-overlay" onClick={() => setLightboxImage(null)}>
          <button className="lightbox-close" onClick={() => setLightboxImage(null)}>
            &times;
          </button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <TransformWrapper
              initialScale={1}
              maxScale={500}
              minScale={0.5}
              wheel={{ step: 0.1 }}
              doubleClick={{ step: 2 }}
              panning={{ disabled: false }}
            >
              {({ zoomIn, zoomOut, resetTransform }) => (
                <>
                  <div className="lightbox-controls">
                    <button className="zoom-btn" onClick={() => zoomIn()}>+</button>
                    <button className="zoom-btn" onClick={() => zoomOut()}>-</button>
                    <button className="zoom-btn" onClick={() => resetTransform()}>⟲</button>
                  </div>
                  <TransformComponent wrapperClass="lightbox-transform-wrapper">
                    <img 
                      src={lightboxImage.src} 
                      alt={lightboxImage.alt} 
                      className="lightbox-image"
                      style={{ cursor: 'grab' }}
                      onMouseDown={(e) => e.currentTarget.style.cursor = 'grabbing'}
                      onMouseUp={(e) => e.currentTarget.style.cursor = 'grab'}
                      onMouseLeave={(e) => e.currentTarget.style.cursor = 'grab'}
                    />
                  </TransformComponent>
                </>
              )}
            </TransformWrapper>
            {lightboxImage.alt && <p className="lightbox-caption">{lightboxImage.alt}</p>}
          </div>
        </div>
      )}
    </>,
    document.body
  );
};

export default ProjectModal;
