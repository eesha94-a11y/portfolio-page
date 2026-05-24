import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import profilePic from './assets/img.jpg.jpeg'; 

// ==========================================
// 1. HOME COMPONENT
// ==========================================
const Home = () => {
  return (
    <div className="home-container">
      <div className="page-header">
        <h1>Welcome to My World, I'm Eesha</h1>
        <p className="hero-subtitle">Computer Science Student & Creative Builder</p>
      </div>
      
      <div className="bio-card">
        <img 
          src={profilePic} 
          alt="Eesha's Profile Pic" 
          className="profile-img" 
        />
        <p className="hero-description">
          Hello! I'm Eesha, a passionate Computer Science student dedicated to constructing fast, 
          accessible, and beautiful interactive web applications. I love transforming complex programming 
          logic into clean, modular frontend structures. When I'm not coding or studying engineering concepts, 
          you'll find me exploring modern UI/UX design trends or experimenting with new development stacks.
        </p>
      </div>
    </div>
  );
};

// ==========================================
// 2. EDUCATION COMPONENT
// ==========================================
const Education = () => {
  const qualifications = [
    { 
      year: '2024 - 2028', 
      degree: 'B.Tech in Computer Science', 
      school: 'Dhemaji Engineering College', 
      desc: 'Focusing on core computing principles, algorithms, and software engineering methodologies.' 
    },
    { 
      year: '2021 - 2023', 
      degree: 'Higher Secondary Education', 
      school: 'Salt Brook Academy', 
      desc: 'Completed advanced coursework with a focus on core sciences and mathematics.' 
    },
    { 
      year: '2021', 
      degree: 'High School Matriculation', 
      school: 'DJV', 
      desc: 'Successfully completed general secondary education foundations.' 
    }
  ];

  return (
    <div className="education-page">
      <div className="page-header" style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ fontSize: '2.5rem', color: '#4ea8de', marginBottom: '10px' }}>Educational Timeline</h1>
        <p style={{ color: '#94a3b8' }}>My academic trajectory organized in descending order.</p>
      </div>
      
      <div className="timeline">
        {qualifications.map((item, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <div className="timeline-date">{item.year}</div>
              <h3>{item.degree}</h3>
              <h4>{item.school}</h4>
              <p className="timeline-desc">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// ==========================================
// 3. SKILLS COMPONENT
// ==========================================
const Skills = () => {
  const techStack = [
    { category: 'Frontend', items: ['React', 'JavaScript', 'HTML5', 'CSS3'] },
    { category: 'Backend & Tools', items: ['Node.js', 'Git & GitHub', 'VS Code', 'Vite'] },
    { category: 'Design & Concepts', items: ['UI/UX Logic', 'Responsive Design', 'Accessibility'] }
  ];

  return (
    <div className="skills-page">
      <div className="page-header" style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ fontSize: '2.5rem', color: '#4ea8de', marginBottom: '10px' }}>Technical Arsenal</h1>
        <p style={{ color: '#94a3b8' }}>Languages, frameworks, and workflow utilities I build with.</p>
      </div>

      <div className="skills-category-grid">
        {techStack.map((stack, i) => (
          <div key={i} className="skill-category-card">
            <h3>{stack.category}</h3>
            <div className="skills-badge-flex">
              {stack.items.map((skill, j) => (
                <span key={j} className="skill-badge">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// ==========================================
// 4. WEATHER DASHBOARD COMPONENT
// ==========================================
function Weather() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState({
    
  });

  const handleSearch = (e) => {
    e.preventDefault();
    if (!city.trim()) return;
    
    if (city.toLowerCase() === 'london') {
      setWeatherData({ name: 'London', temp: '14°C', condition: 'Raining', humidity: '85%', wind: '22 km/h', icon: '🌧️' });
    } else if (city.toLowerCase() === 'new york') {
      setWeatherData({ name: 'New York', temp: '20°C', condition: 'Sunny', humidity: '45%', wind: '8 km/h', icon: '☀️' });
    } else {
      setWeatherData({
        name: city.charAt(0).toUpperCase() + city.slice(1),
        temp: `${Math.floor(Math.random() * 15) + 18}°C`,
        condition: 'Clear Sky',
        humidity: `${Math.floor(Math.random() * 30) + 50}%`,
        wind: `${Math.floor(Math.random() * 15) + 5} km/h`,
        icon: '☀️'
      });
    }
    setCity('');
  };

  return (
    <section className="weather-container">
      <div className="weather-header">
        <h2>Live Weather Hub</h2>
        <p>Stay updated with instant weather conditions across the globe.</p>
      </div>

      <form onSubmit={handleSearch} className="weather-search-bar">
        <input 
          type="text" 
          placeholder="Enter city name... (Try 'London' or 'New York')" 
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      <div className="weather-card">
        <div className="weather-main-info">
          <span className="weather-big-icon">{weatherData.icon}</span>
          <div>
            <h3 className="weather-city">{weatherData.name}</h3>
            <p className="weather-condition">{weatherData.condition}</p>
          </div>
          <h1 className="weather-temp">{weatherData.temp}</h1>
        </div>

        <div className="weather-details-grid">
          <div className="weather-detail-item">
            <span className="detail-label">💧 Humidity</span>
            <span className="detail-value">{weatherData.humidity}</span>
          </div>
          <div className="weather-detail-item">
            <span className="detail-label">🍃 Wind Speed</span>
            <span className="detail-value">{weatherData.wind}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

// ==========================================
// 5. CONTACT COMPONENT
// ==========================================
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

// ==========================================
// MAIN APP COMPONENT
// ==========================================
function App() {
  return (
    <Router>
      <div className="app-container">
        
        <nav className="navbar">
          <div className="logo">Eesha<span style={{ color: '#4ea8de' }}>.dev</span></div>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/education">Education</Link></li>
            <li><Link to="/skills">Skills</Link></li>
            <li><Link to="/weather">Weather</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>

        {/* This wrapper ensures content handles layout spacing nicely */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/education" element={<Education />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/weather" element={<Weather />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <footer className="footer">
          <p>&copy; {new Date().getFullYear()} Eesha. Built with React & Pure CSS. All Rights Reserved.</p>
        </footer>

      </div>
    </Router>
  );
}

export default App;