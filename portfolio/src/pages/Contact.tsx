import React from 'react';

const Contact: React.FC = () => (
  <section id="contact" className="mb-5 p-4 bg-white rounded shadow-sm animate__animated animate__fadeInUp">
    <a
      href={require("../resume/Amit-Rathore-Resume-React.pdf")}
      download
      className="btn btn-primary mb-3"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className="bi bi-download me-2"></i>Download Resume
    </a>
    <h2>Contact</h2>
    <ul className="list-unstyled mb-4 fs-5 d-flex flex-row align-items-center flex-wrap gap-4">
      <li className="d-flex align-items-center">
        <span style={{display: 'inline-block', width: 28}}>
          <i className="bi bi-geo-alt-fill text-primary"></i>
        </span>
        <span className="ms-2">Current Address: Bengaluru, India</span>
      </li>
      <li className="d-flex align-items-center">
        <span style={{display: 'inline-block', width: 28}}>
          <i className="bi bi-house-door-fill text-primary"></i>
        </span>
        <span className="ms-2">VPO kiarwan, Palampur, HP, India</span>
      </li>
      <li className="d-flex align-items-center">
        <span style={{display: 'inline-block', width: 28}}>
          <i className="bi bi-envelope-fill text-primary"></i>
        </span>
        <a href="mailto:amit.r138634@gmail.com" className="text-decoration-none text-dark ms-2">amit.r138634@gmail.com</a>
      </li>
      <li className="d-flex align-items-center">
        <span style={{display: 'inline-block', width: 28}}>
          <i className="bi bi-telephone-fill text-primary"></i>
        </span>
        <a href="tel:+1234567890" className="text-decoration-none text-dark ms-2">+91 9003261982</a>
      </li>
      <li className="d-flex align-items-center">
        <span style={{display: 'inline-block', width: 28}}>
          <i className="bi bi-linkedin text-primary"></i>
        </span>
        <a href="https://www.linkedin.com/in/amit-rathore-741156159/" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-dark ms-2">linkedin.com/in/amit-rathore</a>
      </li>
      <li className="d-flex align-items-center">
        <span style={{display: 'inline-block', width: 28}}>
          <i className="bi bi-github text-primary"></i>
        </span>
        <a href="https://github.com/ar95314" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-dark ms-2">github.com/amitrathore</a>
      </li>
    </ul>
    <form
      className="mb-3"
      action="mailto:amit.rathore@email.com"
      method="POST"
      encType="text/plain"
    >
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Name</label>
        <input type="text" className="form-control" id="name" name="name" required />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email</label>
        <input type="email" className="form-control" id="email" name="email" required />
      </div>
      <div className="mb-3">
        <label htmlFor="subject" className="form-label">Subject</label>
        <input type="text" className="form-control" id="subject" name="subject" required />
      </div>
      <div className="mb-3">
        <label htmlFor="message" className="form-label">Message</label>
        <textarea className="form-control" id="message" name="message" rows={4} required></textarea>
      </div>
      <button type="submit" className="btn btn-primary">Send</button>
    </form>
  </section>
);

export default Contact;
