import React from 'react';
// Import your image matching your exact file string: img.jpg.jpeg
import profilePic from '../assets/img.jpg.jpeg';

const Home = () => {
  return (
    <div className="home-container">
      <div className="page-header">
        <h1>Welcome to My World, I'm Eesha</h1>
        <p>Computer Science Student & Creative Builder</p>
      </div>
      
      <div className="bio-card">
        {/* Profile photo bound dynamically to your custom styling */}
        <img 
          src={profilePic} 
          alt="Eesha's Profile Pic" 
          className="profile-img" 
        />
        
        <p>
          Hello! I'm Eesha, a passionate Computer Science student dedicated to constructing fast, 
          accessible, and beautiful interactive web applications. I love transforming complex programming 
          logic into clean, modular frontend structures. When I'm not coding or studying engineering concepts, 
          you'll find me exploring modern UI/UX design trends or experimenting with new development stacks.
        </p>
      </div>
    </div>
  );
};

export default Home;