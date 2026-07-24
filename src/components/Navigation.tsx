import React, { useState } from "react";
import { FiHome, FiBriefcase, FiFileText, FiCamera, FiMail } from "react-icons/fi";
import "./Navigation.css";

interface NavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: "home", label: "Home", icon: <FiHome /> },
    { id: "projects", label: "Projects", icon: <FiBriefcase /> },
    { id: "resume", label: "Resume", icon: <FiFileText /> },
    { id: "life", label: "Life", icon: <FiCamera /> },
    { id: "contact", label: "Contact", icon: <FiMail /> },
  ];

  const handleTabChange = (e: React.MouseEvent<HTMLAnchorElement>, tab: string) => {
    e.preventDefault();
    onTabChange(tab);
  };

  return (
    <nav className="navigation">
      <div className="nav-container">
        <a 
          href="#home" 
          className="nav-logo"
          onClick={(e) => handleTabChange(e, 'home')}
        >
          <img src={`${import.meta.env.BASE_URL}images/logo/logo_by_germini.png`} alt="Maggie" className="nav-logo-image" />
        </a>

        <ul className="nav-list">
          {tabs.map((tab) => (
            <li key={tab.id} className="nav-item">
              <a
                href={`#${tab.id}`}
                className={`nav-button ${activeTab === tab.id ? "active" : ""}`}
                onClick={(e) => handleTabChange(e, tab.id)}
              >
                <span className="nav-icon">{tab.icon}</span>
                <span className="nav-label">{tab.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
