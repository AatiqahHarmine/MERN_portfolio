import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const { isAdmin, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { path: '/board', label: 'Board' },
    { path: '/profile', label: 'Profile' },
    { path: '/skills', label: 'Skills' },
    { path: '/projects', label: 'Cases' },
    { path: '/experience', label: 'Timeline' },
    { path: '/achievements', label: 'Vault' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="navbar">
      <Link to="/board" className="navbar-brand">
        🔍 CASE FILE #2026
      </Link>
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? '✕' : '☰'}
      </button>
      <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
        {navLinks.map(link => (
          <Link
            key={link.path}
            to={link.path}
            className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </Link>
        ))}
        {isAdmin ? (
          <>
            <Link to="/admin/dashboard" className="nav-link admin-link">Admin</Link>
            <button onClick={logout} className="nav-link logout-btn">Logout</button>
          </>
        ) : (
          <Link to="/admin" className="nav-link" onClick={() => setMenuOpen(false)}>Admin</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
