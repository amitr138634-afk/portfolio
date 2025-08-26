import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
        { to: '/', label: 'Home' },
        { to: '/education', label: 'Education' }, // Added Education
        { to: '/projects', label: 'Projects' },
        { to: '/experience', label: 'Experience' },
        { to: '/skills', label: 'Skills' },
        { to: '/languages', label: 'Languages' },
        { to: '/certifications', label: 'Certifications' },
        { to: '/contact', label: 'Contact' },
];

const Header: React.FC = () => {
        const location = useLocation();
        return (
                <header className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm mb-4 animate__animated animate__fadeInDown animate__faster">
                        <div className="container-fluid">
                                                                <span className="navbar-brand nav-title">
                                                                        <span className="nav-icon"></span>
                                                                        <span className="nav-name">Amit Rathore</span>
                                                                        <span className="nav-divider">/</span>
                                                                        <span className="nav-role">SOFTWARE ENGINEER</span>
                                                                </span>
                                <nav className="ms-auto">
                                        <ul className="navbar-nav flex-row gap-3">
                                                                                                {navLinks.map(link => (
                                                                                                        <li className="nav-item" key={link.to}>
                                                                                                                <Link
                                                                                                                        className={`nav-link${link.to === '/contact' ? ' text-black' : ' text-white'}${location.pathname === link.to ? ' fw-bold' : ''}`}
                                                                                                                        to={link.to}
                                                                                                                >
                                                                                                                        {link.label}
                                                                                                                </Link>
                                                                                                        </li>
                                                                                                ))}
                                        </ul>
                                </nav>
                        </div>
                </header>
        );
};

export default Header;