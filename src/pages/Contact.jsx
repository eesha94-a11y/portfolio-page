import React from 'react';
import './Contact.css'; // We will create this specific styling file next

function Contact() {
  return (
    <section className="contact-container">
      <div className="contact-header">
        <h2>Get In Touch</h2>
        <p>I'm always open to discussing new projects, creative ideas, or opportunities in the tech space.</p>
      </div>

      <div className="social-links-card">
        <h3>Social Ecosystem</h3>
        <p className="card-subtitle">Let's connect across the web!</p>
        
        <div className="links-grid">
          <a 
            href="https://www.instagram.com/_eshhhaa_?igsh=d3hsdGYwdHNyazE3" 
            target="_blank" 
            rel="noreferrer"
            className="social-link-item instagram"
          >
            <span className="icon">📸</span>
            <div className="link-text">
              <span className="platform">Instagram</span>
              <span className="handle">@_eshhhaa_</span>
            </div>
          </a>

          <a 
            href="https://github.com/eesha94-a11y" 
            target="_blank" 
            rel="noreferrer"
            className="social-link-item github"
          >
            <span className="icon">💻</span>
            <div className="link-text">
              <span className="platform">GitHub</span>
              <span className="handle">eesha94-a11y</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;