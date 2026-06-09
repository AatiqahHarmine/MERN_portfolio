import React from 'react';
import { motion } from 'framer-motion';
import './CaseFile.css';

const educationData = [
  {
    id: 1,
    title: 'B.Tech — Computer Science Engineering',
    institution: 'SR University',
    location: 'Warangal, India',
    period: 'July 2023 – May 2027',
    cgpa: '9.70 / 10',
    status: 'ONGOING',
  },
  {
    id: 2,
    title: 'Intermediate (BIPC)',
    institution: 'Suvidyaa Junior College',
    location: 'Warangal, India',
    period: 'June 2021 – April 2023',
    cgpa: 'Completed',
    status: 'CLOSED',
  },
];

const Education = () => (
  <div className="casefile-page">
    <motion.div
      className="casefile-container"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="casefile-header">
        <span className="case-tag">CASE FILE 2</span>
        <h1 className="casefile-title">EDUCATION RECORDS</h1>
        <p className="casefile-sub">RECOVERED ACADEMIC DOCUMENTS</p>
      </div>

      <div className="edu-docs">
        {educationData.map((edu, i) => (
          <motion.div
            key={edu.id}
            className="edu-doc"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 * i, duration: 0.5 }}
          >
            <div className={edu.status === 'CLOSED' ? 'stamp-closed' : ''} style={edu.status === 'ONGOING' ? {
              position: 'absolute', top: '1.2rem', right: '1.5rem',
              border: '3px solid rgba(192,57,43,0.7)', color: 'rgba(192,57,43,0.7)',
              padding: '4px 10px', fontFamily: 'Special Elite, cursive', fontSize: '0.75rem',
              letterSpacing: '3px', transform: 'rotate(-5deg)'
            } : { position: 'absolute', top: '1.2rem', right: '1.5rem' }}>
              {edu.status}
            </div>

            <div className="doc-header">
              <div>
                <div className="doc-title">{edu.title}</div>
              </div>
              <div className="doc-date">{edu.period}</div>
            </div>

            <div className="doc-body">
              <div className="doc-field">
                <strong>INSTITUTION:</strong> {edu.institution}
              </div>
              <div className="doc-field">
                <strong>LOCATION:</strong> {edu.location}
              </div>
              <div className="doc-field">
                <strong>RESULT:</strong>
                <span className="cgpa-badge">{edu.cgpa}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </div>
);

export default Education;
