import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import './CaseFile.css';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/contact', form);
      setSent(true);
      setForm({ name: '', email: '', message: '' });
    } catch {
      setError('TRANSMISSION FAILED. TRY AGAIN.');
    }
  };

  return (
    <div className="casefile-page">
      <motion.div
        className="casefile-container"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="casefile-header">
          <span className="case-tag">SECURE CHANNEL</span>
          <h1 className="casefile-title">SEND A MESSAGE</h1>
          <p className="casefile-sub">ENCRYPTED TRANSMISSION — DETECTIVE HQ</p>
        </div>

        <div className="contact-terminal">
          <div className="terminal-line">
            <span className="terminal-prompt">$</span>
            <span className="terminal-cmd">initiate_secure_contact.sh</span>
          </div>
          <div className="terminal-line" style={{ color: '#8a7a5a', fontSize: '0.75rem' }}>
            <span>▸ Establishing encrypted channel...</span>
          </div>
          <div className="terminal-line" style={{ color: '#8a7a5a', fontSize: '0.75rem' }}>
            <span>▸ Target: aatiqahharmine27@gmail.com</span>
          </div>
          <div className="terminal-line" style={{ color: '#8a7a5a', fontSize: '0.75rem' }}>
            <span>▸ Awaiting input...</span>
          </div>

          {sent ? (
            <motion.div
              className="success-msg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              style={{ marginTop: '1.5rem' }}
            >
              ✓ TRANSMISSION SUCCESSFUL — MESSAGE DELIVERED
            </motion.div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div>
                <div style={{ color: '#8a7a5a', fontSize: '0.7rem', marginBottom: '0.3rem', letterSpacing: '2px' }}>AGENT IDENTITY:</div>
                <input
                  className="contact-input"
                  placeholder="Your name..."
                  value={form.name}
                  onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                  required
                />
              </div>
              <div>
                <div style={{ color: '#8a7a5a', fontSize: '0.7rem', marginBottom: '0.3rem', letterSpacing: '2px' }}>RETURN CHANNEL:</div>
                <input
                  className="contact-input"
                  type="email"
                  placeholder="Your email..."
                  value={form.email}
                  onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                  required
                />
              </div>
              <div>
                <div style={{ color: '#8a7a5a', fontSize: '0.7rem', marginBottom: '0.3rem', letterSpacing: '2px' }}>ENCRYPTED MESSAGE:</div>
                <textarea
                  className="contact-textarea"
                  placeholder="Your message..."
                  value={form.message}
                  onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  required
                />
              </div>
              {error && <div style={{ color: '#c0392b', fontFamily: 'Courier Prime', fontSize: '0.8rem' }}>{error}</div>}
              <button type="submit" className="terminal-submit">▶ TRANSMIT MESSAGE</button>
            </form>
          )}

          <div style={{ marginTop: '2rem', borderTop: '1px solid #1a3a1a', paddingTop: '1.5rem' }}>
            <div style={{ color: '#8a7a5a', fontSize: '0.7rem', letterSpacing: '2px', marginBottom: '0.8rem' }}>DIRECT CHANNELS:</div>
            {[
              { label: 'EMAIL', val: 'aatiqahharmine27@gmail.com', href: 'mailto:aatiqahharmine27@gmail.com' },
              { label: 'GITHUB', val: 'github.com/AatiqahHarmine', href: 'https://github.com/AatiqahHarmine' },
              { label: 'LINKEDIN', val: 'linkedin.com/in/aatiqah-harmine-bb2249296', href: 'https://linkedin.com/in/aatiqah-harmine-bb2249296' },
            ].map(c => (
              <div key={c.label} className="terminal-line" style={{ marginBottom: '0.5rem' }}>
                <span style={{ color: '#d4890a', minWidth: '80px', fontSize: '0.75rem', letterSpacing: '1px' }}>{c.label}:</span>
                <a href={c.href} target="_blank" rel="noreferrer" style={{ color: '#39ff14', fontSize: '0.75rem', textDecoration: 'none' }}>
                  {c.val}
                </a>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
