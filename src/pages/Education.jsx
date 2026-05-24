import React from 'react';

const Education = () => {
  // Your academic credentials arranged in descending chronological order
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
    <div>
      <div className="page-header">
        <h1>Educational Timeline</h1>
        <p>My academic trajectory organized in descending order.</p>
      </div>
      <div className="timeline">
        {qualifications.map((item, index) => (
          <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
            <div className="timeline-content">
              <div className="timeline-date">{item.year}</div>
              <h3>{item.degree}</h3>
              <h4>{item.school}</h4>
              <p style={{ color: '#94a3b8', marginTop: '0.5rem' }}>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;