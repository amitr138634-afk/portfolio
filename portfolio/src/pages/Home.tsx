
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
    return (
        <div>
                <div className="home-container">
                    <div className="profile-card">
                        <div className="profile-img-wrapper">
                            <img
                                src={require("../image/me.jpg")}
                                alt="Profile"
                                className="profile-img"
                            />
                        </div>
                        <div className="profile-name">Amit<br/>Rathore</div>
                        <div className="profile-underline"></div>
                        <div className="profile-title">Full Stack Developer</div>
                        <div className="profile-title">5 Years Experience</div>
                        <div className="profile-socials">
                            <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
                            <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                            <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                    <div className="intro-section">
                        <h1 className="intro-title">Hello</h1>
                        <h2 className="intro-subtitle">Here's who I am & what I do</h2>
                        <div className="intro-buttons">
                                                        <a
                                                            href={require("../resume/Amit-Rathore-Resume-React.pdf")}
                                                            className="btn btn-primary"
                                                            download
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                        >
                                                            RESUME
                                                        </a>
                            <Link to="/contact" className="btn btn-outline">Contact Me!</Link>
                        </div>
                        <p className="intro-text">
                            Innovative Full Stack Developer passionate about creating intuitive, user-centric digital solutions. Experienced in front-end development with Angular/React and back-end systems with Node.js and .NET Core. Strong background in database design, RESTful APIs, and CI/CD pipelines. Recognized for translating complex requirements into elegant technical solutions while ensuring performance, scalability, and maintainability..
                        </p>
                    </div>
                </div>
        </div>
    );
};

export default Home;
                                                      