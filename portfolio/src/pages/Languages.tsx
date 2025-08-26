import React from 'react';

const Languages: React.FC = () => (
  <section id="languages" className="mb-5 p-4 bg-white rounded shadow-sm animate__animated animate__fadeInUp">
    <h2>Languages</h2>
    <div className="table-responsive">
      <table className="table table-bordered align-middle">
        <thead className="table-light">
          <tr>
            <th>Language</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>English</td>
            <td>
              <span className="text-warning">★★★★★</span>
            </td>
          </tr>
          <tr>
            <td>Hindi</td>
            <td>
              <span className="text-warning">★★★★☆</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
);

export default Languages;
