import React from 'react';
import './Resume.css';
import '../styles/shared.css';

const Resume: React.FC = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>My Resume</h1>
        <p>Professional Experience & Education</p>
      </div>
      
      <div className="resume-content">

        <section className="resume-section">
          <h2>Work Experience</h2>
          <div className="timeline-item">
            <div className="timeline-date">2023 - Present</div>
            <div className="timeline-content">
              <h3>Software Engineer</h3>
              <p>Genix Networks 美商正思網路股份有限公司</p>
              <ul>
                <li>負責開發與維護企業級網路管理系統</li>
                <li>優化系統性能與使用者體驗</li>
                <li>參與系統架構設計與技術決策</li>
              </ul>
            </div>
          </div>
          
          <div className="timeline-item">
            <div className="timeline-date">2021 - 2023</div>
            <div className="timeline-content">
              <h3>Software Engineer</h3>
              <p>Gentek Networks 正文科技股份有限公司</p>
              <ul>
                <li>參與網路設備管理平台的開發</li>
                <li>實現關鍵功能模組與系統整合</li>
                <li>協助團隊進行技術研發與產品優化</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="resume-section">
          <h2>Education</h2>
          <div className="timeline-item">
            <div className="timeline-date">2019 - 2021</div>
            <div className="timeline-content">
              <h3>Master's Degree in Computer Science and Information Engineering</h3>
              <p>National Taiwan Normal University</p>
              <p>專注於網路技術與系統開發研究</p>
            </div>
          </div>
          
          <div className="timeline-item">
            <div className="timeline-date">2015 - 2019</div>
            <div className="timeline-content">
              <h3>Bachelor's Degree in Computer Science and Information Engineering</h3>
              <p>National University of Tainan</p>
              <p>奠定紮實的程式設計基礎</p>
            </div>
          </div>
        </section>

        <section className="resume-section">
          <h2>Skills</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Frontend</h3>
              <div className="skills-list">
                <span className="skill-tag">React</span>
                <span className="skill-tag">TypeScript</span>
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">HTML/CSS</span>
                <span className="skill-tag">Vue.js</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>Backend</h3>
              <div className="skills-list">
                <span className="skill-tag">Node.js</span>
                <span className="skill-tag">Python</span>
                <span className="skill-tag">Java</span>
                <span className="skill-tag">C++</span>
                <span className="skill-tag">Database</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>Network & Systems</h3>
              <div className="skills-list">
                <span className="skill-tag">Network Management</span>
                <span className="skill-tag">System Integration</span>
                <span className="skill-tag">Performance Optimization</span>
                <span className="skill-tag">Linux</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>Tools & Others</h3>
              <div className="skills-list">
                <span className="skill-tag">Git</span>
                <span className="skill-tag">Docker</span>
                <span className="skill-tag">AWS</span>
                <span className="skill-tag">Agile Development</span>
              </div>
            </div>
          </div>
        </section>

        <section className="resume-section">
          <h2>Achievements</h2>
          <div className="achievements-list">
            <div className="achievement-item">
              <h3>Enterprise Network Management System</h3>
              <p>主導開發企業級網路管理系統，提升系統效能並改善使用者體驗</p>
            </div>
            <div className="achievement-item">
              <h3>Network Platform Integration</h3>
              <p>成功整合多個網路設備管理平台，實現關鍵功能模組</p>
            </div>
            <div className="achievement-item">
              <h3>Research & Development</h3>
              <p>碩士期間專注於網路技術研究，為後續職業發展奠定堅實基礎</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Resume;