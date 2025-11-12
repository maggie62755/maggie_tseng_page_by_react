import React, { useState } from "react";
import "./Navigation.css";

interface NavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeTab, onTabChange }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const tabs = [
    { id: "home", label: "Home" },
    { id: "resume", label: "Resume" },
    { id: "projects", label: "Projects" },
    { id: "life", label: "Life" },
    { id: "contact", label: "Contact" },
  ];

  const handleTabChange = (e: React.MouseEvent<HTMLAnchorElement>, tab: string) => {
    e.preventDefault(); // Prevent default anchor behavior
    
    // Scroll to top immediately
    window.scrollTo(0, 0);
    
    onTabChange(tab);
    setIsMobileMenuOpen(false); // Close mobile menu when tab is selected
  };

  return (
    <nav className="navigation">
      <div className="nav-container">
        <a 
          href="#home" 
          className="nav-logo"
          onClick={(e) => handleTabChange(e, 'home')}
        >
          <img src="images/logo/logo_by_germini.png" alt="Maggie" className="nav-logo-image" />
        </a>

        <button
          className={`mobile-menu-toggle ${isMobileMenuOpen ? "open" : ""}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-list ${isMobileMenuOpen ? "mobile-open" : ""}`}>
          {tabs.map((tab) => (
            <li key={tab.id} className="nav-item">
              <a
                href={`#${tab.id}`}
                className={`nav-button ${activeTab === tab.id ? "active" : ""}`}
                onClick={(e) => handleTabChange(e, tab.id)}
              >
                {tab.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
