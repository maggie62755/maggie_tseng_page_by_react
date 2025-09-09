import { useState } from 'react'
import './App.css'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import Resume from './pages/Resume'
import Projects from './pages/Projects'
import Life from './pages/Life'
import Contact from './pages/Contact'

function App() {
  const [activeTab, setActiveTab] = useState('home')

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
      <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
      <main className="main-content">
        {renderContent()}
      </main>
    </div>
  )
}

export default App
