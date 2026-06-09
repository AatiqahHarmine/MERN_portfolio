import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import './CaseFile.css';

const AdminLogin = () => {
  const [creds, setCreds] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/auth/login', creds);
      login(res.data.token);
      navigate('/admin/dashboard');
    } catch {
      setError('ACCESS DENIED — INVALID CREDENTIALS');
    }
  };

  return (
    <div className="casefile-page" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
      <motion.div
        style={{ width: '100%', maxWidth: '420px' }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="casefile-header">
          <span className="case-tag">RESTRICTED</span>
          <h1 className="casefile-title" style={{ fontSize: '1.8rem' }}>ADMIN ACCESS</h1>
          <p className="casefile-sub">CLEARANCE LEVEL: DELTA</p>
        </div>

        <div className="contact-terminal">
          <div className="terminal-line">
            <span className="terminal-prompt">$</span>
            <span className="terminal-cmd">sudo admin_login.sh</span>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div>
              <div style={{ color: '#8a7a5a', fontSize: '0.7rem', marginBottom: '0.3rem', letterSpacing: '2px' }}>USERNAME:</div>
              <input
                className="contact-input"
                placeholder="Enter username..."
                value={creds.username}
                onChange={e => setCreds(c => ({ ...c, username: e.target.value }))}
                required
              />
            </div>
            <div>
              <div style={{ color: '#8a7a5a', fontSize: '0.7rem', marginBottom: '0.3rem', letterSpacing: '2px' }}>PASSWORD:</div>
              <input
                className="contact-input"
                type="password"
                placeholder="Enter password..."
                value={creds.password}
                onChange={e => setCreds(c => ({ ...c, password: e.target.value }))}
                required
              />
            </div>
            {error && (
              <div style={{ color: '#c0392b', fontFamily: 'Courier Prime', fontSize: '0.8rem', letterSpacing: '1px' }}>
                ✗ {error}
              </div>
            )}
            <button type="submit" className="terminal-submit">▶ REQUEST ACCESS</button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default AdminLogin;
