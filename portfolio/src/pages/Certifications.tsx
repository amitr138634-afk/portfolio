import React from 'react';
const certifications = [
  { name: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services' },
  { name: 'Certified Scrum Master', issuer: 'Scrum Alliance' },
  { name: 'React Developer Certification', issuer: 'Udemy' },
];

const Certifications: React.FC = () => (
  <section id="certifications" className="mb-5 p-4 bg-white rounded shadow-sm animate__animated animate__fadeInUp">
    <h2>Certifications</h2>
    <div className="table-responsive">
      <table className="table table-bordered align-middle">
        <thead className="table-light">
          <tr>
            <th>Certification Name</th>
            <th>Issuer</th>
          </tr>
        </thead>
        <tbody>
          {certifications.map((cert, idx) => (
            <tr key={idx}>
              <td>{cert.name}</td>
              <td>{cert.issuer}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </section>
);



export default Certifications;
