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
                        <div
                                className="container navbar-limited-width"
                                style={{
                                        maxWidth: '100%',
                                        width: '100%',
                                        paddingLeft: 16,
                                        paddingRight: 16,
                                        boxSizing: 'border-box',
                                        margin: '0 auto',
                                        // Limit width on larger screens
                                        // 900px is just an example, adjust as needed
                                        ...(window.innerWidth >= 992 ? { maxWidth: 900 } : {})
                                }}
                        >
                                <span className="navbar-brand nav-title">
                                                                        <span className="nav-icon"></span>
                                                                        <span className="nav-name">Amit Rathore</span>
                                                                        <span className="nav-divider d-none d-lg-inline">/</span>
                                                                        <span className="nav-role d-none d-lg-inline">SOFTWARE ENGINEER</span>
                                                                </span>
                                {/* Navbar Toggler */}
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
                                <nav className={`collapse navbar-collapse ms-auto${menuOpen ? ' show' : ''}`} id="navbarNav">
                                        <ul className="navbar-nav ms-auto flex-lg-row gap-3">
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