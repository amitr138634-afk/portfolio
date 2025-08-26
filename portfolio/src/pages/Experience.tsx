import React from 'react';

const Experience: React.FC = () => (
  <section id="experience" className="mb-5 p-4 bg-white rounded shadow-sm animate__animated animate__fadeInUp">
    <h2>Experience</h2>
    {/* Neudesic (IBM) */}
    <div className="mb-4">
      <h4 className="mb-1">Neudesic (IBM)</h4>
      <div className="text-muted mb-1">Software Consultant | May 2024 – Present | Bangalore, India</div>
      <div className="mb-1"><b>Responsibilities:</b>
        <ul>
          <li>Developed a web service application to process loan data for Title and Escrow services, ensuring accuracy and compliance with industry standards.</li>
          <li>Designed and implemented backend code to integrate the User Interface (UI) with the Fast Application, optimizing data flow and reducing processing time.</li>
          <li>Collaborated closely with cross-functional teams to define requirements, troubleshoot issues, and improve system performance.</li>
          <li>Utilized RESTful APIs to streamline communication between the front-end and back-end systems.</li>
          <li>Enhanced data validation and security measures to protect sensitive financial information during the loan processing lifecycle.</li>
          <li>Taken the responsibility of Product migration to UAT and Production environments.</li>
          <li>Worked on existing and newly reported bugs/defects and maintained a bug tracker for future reference.</li>
          <li>Requirement Analysis and Design Approaches (Prepare design specification and impact analysis).</li>
          <li>Docker Containerizing the applications for deployment on Azure.</li>
        </ul>
      </div>
      <div><b>Skills Used:</b> C#, .NET Core, MVC, React, REST API, CRUD Operations, JSON, SQL, Docker, Azure</div>
    </div>
    {/* Infosys Pvt Ltd */}
    <div className="mb-4">
      <h4 className="mb-1">Infosys Pvt Ltd</h4>
      <div className="text-muted mb-1">Associate Software Analyst | May 2022 – May 2024 | Chandigarh, India</div>
      <div className="mb-1"><b>Responsibilities:</b>
        <ul>
          <li>Designed and developed complex solutions for an AI-based application and IoT Edge applications.</li>
          <li>Developed Web Frontend applications using JavaScript, Angular, jQuery, and MySQL.</li>
          <li>Fixing the bugs raised in QA, UAT, and Production Environments.</li>
          <li>Coordinated with internal and external entities like Product Owners, QA, Product Support, and Clients.</li>
          <li>Managed the entire process for project workflows, solution designs, and requirement gathering.</li>
        </ul>
      </div>
      <div><b>Skills Used:</b> C#, C++, .NET Core, MVC, React, Python, Numpy, pandas, PySpark, REST API, CRUD Operations, JSON, JavaScript, Angular, jQuery, MySQL</div>
    </div>
    {/* Flipkart Internet Pvt Ltd */}
    <div className="mb-4">
      <h4 className="mb-1">Flipkart Internet Pvt Ltd</h4>
      <div className="text-muted mb-1">Software Support Engineer | Feb 2021 – May 2022 | Bangalore, India</div>
      <div className="mb-1"><b>Responsibilities:</b>
        <ul>
          <li>Designed, developed, and installed software solutions and developed high-quality software design and architecture as per vendor requirements.</li>
          <li>Collaborated with stakeholders and peers during the entire SDLC process to ensure timely delivery of release cycles.</li>
          <li>Developed, customized, and enhanced Spring Boot applications, reports, PL/SQL procedures, triggers, and functions.</li>
          <li>Collaborated with vendors and cross-functional teams to fix and improve product problem definition and requirements.</li>
        </ul>
      </div>
      <div><b>Skills Used:</b> C++, MQTT, Python, PySpark, MySQL, C#, .NET Core, React, Spring Boot, PL/SQL</div>
    </div>
    <a href="../resume/Amit-Rathore-Resume-React.pdf" className="btn btn-outline-primary mt-2" target="_blank" rel="noopener noreferrer">View Full Resume (PDF)</a>
  </section>
);

export default Experience;
