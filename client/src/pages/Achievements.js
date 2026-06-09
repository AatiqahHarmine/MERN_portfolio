import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './CaseFile.css';

const achievementsData = [
  { id: 'A-01', icon: '🏅', title: 'Microsoft Azure AI-900', desc: 'Azure AI Fundamentals Certification — Verified by Microsoft', cat: 'CERTIFICATION' },
  { id: 'A-02', icon: '🤖', title: 'Infosys: Gen AI & Prompt Engineering', desc: 'Certified in Generative AI and advanced prompting techniques', cat: 'CERTIFICATION' },
  { id: 'A-03', icon: '☁️', title: 'AWS Cloud Foundations', desc: 'AWS Academy Cloud Foundations & Cloud Developing — Verified', cat: 'CERTIFICATION' },
  { id: 'A-04', icon: '🌐', title: 'Cisco Data Analytics Essentials', desc: 'Data Analytics Essentials + Networking Basics — Cisco Verified', cat: 'CERTIFICATION' },
  { id: 'A-05', icon: '💼', title: 'Forage: Accenture Dev Simulation', desc: 'Accenture Developer & Tata Data Visualization job simulation', cat: 'CERTIFICATION' },
  { id: 'A-06', icon: '🧠', title: '150+ LeetCode / HackerRank Problems', desc: 'Solved 150+ DSA problems — arrays, hashing, problem-solving patterns', cat: 'ACHIEVEMENT' },
  { id: 'A-07', icon: '🏆', title: 'Smart India Hackathon Participant', desc: 'Participated in SIH — national-level innovation hackathon', cat: 'ACHIEVEMENT' },
  { id: 'A-08', icon: '⚡', title: 'Tata Elxsi Tech Event', desc: 'Competed in Tata Elxsi technical challenge event', cat: 'ACHIEVEMENT' },
  { id: 'A-09', icon: '🗂️', title: '6+ Full-Stack Projects Built', desc: 'Built 6+ projects using JavaScript and full-stack technologies', cat: 'ACHIEVEMENT' },
  { id: 'A-10', icon: '📊', title: 'Power BI Dashboards Deployed', desc: 'Built multiple interactive dashboards for business insights', cat: 'ACHIEVEMENT' },
];

const Achievements = () => {
  const [unlocked, setUnlocked] = useState([]);

  const handleUnlock = (id) => {
    if (!unlocked.includes(id)) setUnlocked(prev => [...prev, id]);
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
          <span className="case-tag">ACHIEVEMENT VAULT</span>
          <h1 className="casefile-title">EVIDENCE COLLECTION</h1>
          <p className="casefile-sub">CERTIFICATIONS & ACHIEVEMENTS — CLICK TO UNLOCK</p>
        </div>

        <div style={{ marginBottom: '1rem', textAlign: 'center' }}>
          <span style={{ fontFamily: 'Courier Prime, monospace', fontSize: '0.7rem', color: '#8a7a5a', letterSpacing: '2px' }}>
            {unlocked.length}/{achievementsData.length} EVIDENCE ITEMS UNLOCKED
          </span>
        </div>

        <div className="vault-grid">
          {achievementsData.map((item, i) => (
            <motion.div
              key={item.id}
              className="vault-item"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.08 * i, duration: 0.4 }}
              onClick={() => handleUnlock(item.id)}
              style={{ borderColor: unlocked.includes(item.id) ? '#d4890a' : '#4a3f2f' }}
            >
              <div className="vault-id">{item.id}</div>
              <div className="vault-icon">
                {unlocked.includes(item.id) ? item.icon : '🔒'}
              </div>
              <div style={{ fontFamily: 'Courier Prime, monospace', fontSize: '0.6rem', color: '#c0392b', letterSpacing: '2px', marginBottom: '0.3rem' }}>
                {item.cat}
              </div>
              <div className="vault-title">{item.title}</div>
              {unlocked.includes(item.id) && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="vault-desc">{item.desc}</div>
                  <div className="vault-verified">✓ VERIFIED</div>
                </motion.div>
              )}
              {!unlocked.includes(item.id) && (
                <div className="vault-desc" style={{ color: '#4a3f2f' }}>[ CLICK TO UNLOCK ]</div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Achievements;
