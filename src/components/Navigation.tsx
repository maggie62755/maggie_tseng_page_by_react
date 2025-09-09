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

  const handleTabChange = (tab: string) => {
    onTabChange(tab);
    setIsMobileMenuOpen(false); // Close mobile menu when tab is selected
  };

  return (
    <nav className="navigation">
      <div className="nav-container">
        <a href="#" className="nav-logo">
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
              <button
                className={`nav-button ${activeTab === tab.id ? "active" : ""}`}
                onClick={() => handleTabChange(tab.id)}
              >
                {tab.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
