import React from 'react';

const Projects: React.FC = () => (
  <section id="projects" className="mb-5 p-4 bg-white rounded shadow-sm animate__animated animate__fadeInUp">
    <h2>Projects</h2>
    {/* Project 1: LEFI – Lender-Encompass Fee Integration */}
    <div className="mb-4">
      <h5 className="mb-1">LEFI – Lender-Encompass Fee Integration</h5>
      <div className="text-muted mb-1">May 2024 – January 2025</div>
      <div>
        Integrated LEFI with LVIS (Lender Vendor Integration System) to streamline the calculation and processing of Title and Escrow service fees based on loan data. LEFI provided an interactive fee calculator UI built in React, which was seamlessly embedded within the Encompass loan origination system using an iframe. The backend, developed using .NET Core, exposed secure RESTful APIs to communicate with LVIS for real-time fee computation, order submission, and data exchange.
        <ul className="mt-2">
          <li>Developed a dynamic React-based fee calculator interface for Title and Escrow services.</li>
          <li>Embedded the LEFI UI into the Encompass portal, ensuring compatibility and responsiveness.</li>
          <li>Designed and implemented .NET Core APIs to interact with LVIS and process loan-related requests.</li>
          <li>Worked closely with business analysts and vendor teams to ensure accurate mapping of data fields and fee logic.</li>
        </ul>
        <strong>Technologies Used:</strong> React, Asp.Net Core, SQS, S3, DynamoDB, MsTest, OpenTelemetry
      </div>
    </div>
    {/* Agora-glk-Emulsion, choke-vfm, pipesim edge */}
    <div className="mb-4">
      <h5 className="mb-1">Agora-glk-Emulsion, Agora-choke-vfm, Agora-pipesim edge</h5>
      <div className="text-muted mb-1">Project</div>
      <div>
        Migrated three applications (Agora-glk-Emulsion, Agora-choke-vfm, Agora-pipesim edge) from Python to Java, preserving existing features and introducing new functionalities.
        <ul className="mt-2">
          <li>MQTT broker connection for telemetry data successfully migrated to C++ for efficient IoT device communication.</li>
          <li>Developed a robust REST API in C# to process and transmit data seamlessly to the Nimbus Cloud.</li>
          <li>Implemented a user-friendly front-end application for intuitive interaction and visualization of telemetry data.</li>
        </ul>
        <strong>Technologies Used:</strong> C#, .NET Core & MVC, Docker, MSTest, MQTT, MySQL, JSON
      </div>
    </div>
    {/* Witsml Client and Server */}
    <div className="mb-4">
      <h5 className="mb-1">Witsml Client and Server</h5>
      <div className="text-muted mb-1">Project</div>
      <div>
        Integration of Console Application for Real-time WITSML Data Extraction and Routing through Gateways to Web Application.
        <ul className="mt-2">
          <li>Created an end-to-end application using MQTT to replicate well/wellbore data in JSON format with specific unit values.</li>
          <li>Developed a frontend user interface for streaming live oil and gas production data from well/wellbores.</li>
          <li>Established communication between console application and well/wellbore devices to extract live WITSML-formatted information.</li>
          <li>Implemented data redirection through various gateways to a web application for further interaction and processing.</li>
        </ul>
        <strong>Technologies Used:</strong> C#, Angular, .NET Core, Entity Framework, SQL, REST APIs
      </div>
    </div>
  </section>
);

export default Projects;
