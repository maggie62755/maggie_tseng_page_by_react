import React from 'react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <div className="profile-section">
        <div className="avatar-container">
          <img 
            src="images/maggie.jpeg" 
            alt="Maggie Tseng" 
            className="avatar-image"
          />
        </div>
        <div className="intro-section">
          <h1 className="name">MAGGIE TSENG</h1>
          <h2 className="title">曾翊瑄 Yi-Hsuan Tseng</h2>
          <p className="description">
            Welcome to my personal website! I'm a passionate full stack developer 
            with experience in modern web technologies. I love creating innovative 
            solutions and bringing ideas to life through code.
          </p>
          <p className="description">
            When I'm not coding, you can find me exploring new technologies, 
            reading tech blogs, or enjoying life's simple pleasures.
          </p>
          <div className="quick-links">
            <a href="#" className="quick-link">View Resume</a>
            <a href="#" className="quick-link">See Projects</a>
            <a href="#" className="quick-link">Get in Touch</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
