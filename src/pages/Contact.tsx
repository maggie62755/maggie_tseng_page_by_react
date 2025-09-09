import React from "react";
import "./Contact.css";
import "../styles/shared.css";

const Contact: React.FC = () => {
  const contactMethods = [
    {
      type: "Email",
      value: "maggie62755@gmail.com",
      link: "mailto:maggie62755@gmail.com",
      icon: "✉️",
    },
    {
      type: "LinkedIn",
      value: "linkedin.com/in/maggie62755",
      link: "https://linkedin.com/in/maggie62755",
      icon: "💼",
    },
    {
      type: "GitHub",
      value: "github.com/maggie62755",
      link: "https://github.com/maggie62755",
      icon: "⚡",
    },
  ];

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Get in Touch</h1>
        <p>
          Feel free to reach out for collaborations, opportunities, or just to
          say hello.
        </p>
      </div>
      <div className="contact-content">
        <div className="contact-methods">
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.link}
              className="contact-method"
              target={method.type !== "Email" ? "_blank" : undefined}
              rel={method.type !== "Email" ? "noopener noreferrer" : undefined}
            >
              <span className="contact-icon">{method.icon}</span>
              <div className="contact-info">
                <span className="contact-type">{method.type}</span>
                <span className="contact-value">{method.value}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
