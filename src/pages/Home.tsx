import React from 'react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <div className="profile-section">
        <div className="avatar-container reveal">
          <img
            src="images/maggie.jpeg"
            alt="Maggie Tseng"
            className="avatar-image"
          />
        </div>
        <div className="intro-section">
          <h1 className="name reveal" style={{ transitionDelay: '0.1s' }}>MAGGIE TSENG</h1>
          <h2 className="title reveal" style={{ transitionDelay: '0.2s' }}>曾翊瑄 Yi-Hsuan Tseng</h2>
          <div className="description reveal" style={{ transitionDelay: '0.3s' }}>
            <p>
              Welcome to my personal website! I'm a passionate full stack developer
              with experience in modern web technologies. I love creating innovative
              solutions and bringing ideas to life through code.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies,
              reading tech blogs, or enjoying life's simple pleasures.
            </p>
          </div>
          <div className="quick-links reveal" style={{ transitionDelay: '0.4s' }}>
            <a href="#resume" className="quick-link">View Resume</a>
            <a href="#projects" className="quick-link">See Projects</a>
            <a href="#contact" className="quick-link">Get in Touch</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
