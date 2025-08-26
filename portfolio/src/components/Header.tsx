import React, { useState } from 'react';
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
        const [menuOpen, setMenuOpen] = useState(false);

        const handleToggle = () => setMenuOpen(open => !open);
        const handleNavClick = () => setMenuOpen(false);

        return (
                <header className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm mb-4 animate__animated animate__fadeInDown animate__faster">
                        <div className="container custom-navbar-container d-flex align-items-center justify-content-between" style={{ maxWidth: 1514 }}>
                                <span className="navbar-brand nav-title">
                                                                        <span className="nav-icon"></span>
                                                                        <span className="nav-name">Amit Rathore</span>
                                                                        <span className="nav-divider d-none d-lg-inline">/</span>
                                                                        <span className="nav-role d-none d-lg-inline">SOFTWARE ENGINEER</span>
                                                                </span>
                                <button
                                        className="navbar-toggler"
                                        type="button"
                                        aria-controls="navbarNav"
                                        aria-expanded={menuOpen}
                                        aria-label="Toggle navigation"
                                        onClick={handleToggle}
                                >
                                        <span className="navbar-toggler-icon"></span>
                                </button>
                                <nav className={`collapse navbar-collapse${menuOpen ? ' show' : ''}`} id="navbarNav">
                                        <ul className="navbar-nav flex-lg-row gap-3">
                                                                                                {navLinks.map(link => (
                                                                                                        <li className="nav-item" key={link.to}>
                                                                                                                <Link
                                                                                                                        className={`nav-link${link.to === '/contact' ? ' text-black' : ' text-white'}${location.pathname === link.to ? ' fw-bold' : ''}`}
                                                                                                                        to={link.to}
                                                                                                                        onClick={handleNavClick}
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