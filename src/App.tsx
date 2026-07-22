import { useState, useEffect } from 'react'
import './App.css'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import Resume from './pages/Resume'
import Projects from './pages/Projects'
import Life from './pages/Life'
import Contact from './pages/Contact'

function App() {
  const [activeTab, setActiveTab] = useState('home');

  // Handle section click navigation with smooth scroll
  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    const element = document.getElementById(tabId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // ScrollSpy: Update active tab based on scroll position
  useEffect(() => {
    const sections = ['home', 'projects', 'resume', 'life', 'contact'];
    
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -40% 0px', // Active section when it enters viewport center
      threshold: 0.1
    };

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          setActiveTab(id);
        }
      });
    }, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) sectionObserver.observe(el);
    });

    return () => sectionObserver.disconnect();
  }, []);

  // Scroll Reveal Logic for .reveal elements
  useEffect(() => {
    const observerOptions = {
      threshold: 0.05,
      rootMargin: "0px 0px -30px 0px"
    };

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.reveal');
    elements.forEach(el => revealObserver.observe(el));

    return () => revealObserver.disconnect();
  }, []);

  return (
    <div className="app">
      <Navigation activeTab={activeTab} onTabChange={handleTabChange} />
      <main className="main-content">
        <section id="home" className="section-block">
          <Home />
        </section>
        <section id="projects" className="section-block">
          <Projects />
        </section>
        <section id="resume" className="section-block">
          <Resume />
        </section>
        <section id="life" className="section-block">
          <Life />
        </section>
        <section id="contact" className="section-block">
          <Contact />
        </section>
      </main>
    </div>
  )
}

export default App
