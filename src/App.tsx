import { useState, useEffect, useRef } from 'react'
import './App.css'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import Resume from './pages/Resume'
import Projects from './pages/Projects'
import Life from './pages/Life'
import Contact from './pages/Contact'

function App() {
  const [activeTab, setActiveTab] = useState('home')
  const mainRef = useRef<HTMLElement>(null);

  // Initialize from URL hash on mount
  useEffect(() => {
    const hash = window.location.hash.slice(1) || 'home';
    const validTabs = ['home', 'resume', 'projects', 'life', 'contact'];
    if (validTabs.includes(hash)) {
      setActiveTab(hash);
    }
  }, []);

  // Handle browser back/forward buttons
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1) || 'home';
      const validTabs = ['home', 'resume', 'projects', 'life', 'contact'];
      if (validTabs.includes(hash)) {
        setActiveTab(hash);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    window.location.hash = tab;
    // 捲動 main-content 區塊到頂部
    if (mainRef.current) {
      mainRef.current.scrollTop = 0;
    }
    // 同時也捲動 window 到頂部（保險）
    window.scrollTo(0, 0);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <Home />
      case 'resume':
        return <Resume />
      case 'projects':
        return <Projects />
      case 'life':
        return <Life />
      case 'contact':
        return <Contact />
      default:
        return <Home />
    }
  }

  return (
    <div className="app">
      <Navigation activeTab={activeTab} onTabChange={handleTabChange} />
      <main className="main-content" ref={mainRef}>
        {renderContent()}
      </main>
    </div>
  )
}

export default App
