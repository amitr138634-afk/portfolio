import React from 'react';

const Education: React.FC = () => (
  <section id="education" className="mb-5 p-4 bg-white rounded shadow-sm animate__animated animate__fadeInUp">
    <h2>Education</h2>
    <div className="mb-3">
      <h5 className="mb-1">B.E. in Computer Science and Engineering</h5>
      <div className="text-muted mb-1">Sathyabama Institute of Science and Technology, Chennai, India</div>
      <div>June 2016 – June 2020</div>
      <div>CGPA: 8.2</div>
    </div>
    <div className="mb-3">
      <h5 className="mb-1">12th Intermediate</h5>
      <div className="text-muted mb-1">Green Field Sen. Sec. School, Kangra, India</div>
      <div>April 2015 – March 2016</div>
      <div>Secured 62%</div>
    </div>
  </section>
);

export default Education;
