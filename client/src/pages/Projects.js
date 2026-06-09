import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import './CaseFile.css';

const defaultProjects = [
  {
    _id: '1',
    caseNumber: 'CASE #001',
    title: 'Smart Food Inventory Management System',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB'],
    description: 'Full-stack inventory system with real-time tracking, expiry alerts, and secure REST APIs.',
    features: [
      'Real-time inventory tracking using MERN stack',
      'Expiry alert system reducing manual tracking by ~30%',
      'REST APIs with secure authentication and efficient data flow',
      'Concurrent update handling for data consistency',
    ],
    github: 'https://github.com/AatiqahHarmine/smart-fridge-mern',
    liveDemo: '',
    status: 'CLOSED',
  },
  {
    _id: '2',
    caseNumber: 'CASE #002',
    title: 'Personal Finance Management Dashboard',
    techStack: ['FastAPI', 'PostgreSQL', 'Chart.js', 'Python'],
    description: 'Financial data processing system analyzing spending patterns and generating actionable insights.',
    features: [
      'Interactive data visualizations using Chart.js',
      'Expense categorization improving tracking accuracy by 25%',
      'SQL queries for efficient financial data storage and retrieval',
      'Data validation and consistency across backend workflows',
    ],
    github: 'https://github.com/AatiqahHarmine/Quantivue/tree/main',
    liveDemo: '',
    status: 'CLOSED',
  },
  {
    _id: '3',
    caseNumber: 'CASE #003',
    title: 'Healthcare Analytics Dashboard',
    techStack: ['Power BI', 'DAX', 'Data Analytics'],
    description: 'Interactive dashboard monitoring patient admissions, billing, diagnosis trends, and bed occupancy.',
    features: [
      'KPI-based visualizations and dynamic filters',
      'Diagnosis-wise patient trend analysis',
      'Insurance comparison and resource utilization patterns',
      'Bed occupancy and billing metric monitoring',
    ],
    github: 'https://github.com/AatiqahHarmine/Data-analytics',
    liveDemo: '',
    status: 'CLOSED',
  },
  {
    _id: '4',
    caseNumber: 'CASE #004',
    title: 'Ride Booking Data Visualization Dashboard',
    techStack: ['Power BI', 'DAX', 'Excel'],
    description: 'Interactive Power BI dashboard analyzing ride booking data, volume, cancellations, and revenue.',
    features: [
      'Dynamic filters and interactive visualizations',
      'Volume, cancellation, and revenue KPI tracking',
      'Customer trend and operational performance monitoring',
    ],
    github: 'https://github.com/AatiqahHarmine/Data-analytics',
    liveDemo: '',
    status: 'CLOSED',
  },
];

const Projects = () => {
  const [projects, setProjects] = useState(defaultProjects);

  useEffect(() => {
    axios.get('/api/projects')
      .then(res => { if (res.data.length) setProjects(res.data); })
      .catch(() => {});
  }, []);

  return (
    <div className="casefile-page">
      <motion.div
        className="casefile-container"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="casefile-header">
          <span className="case-tag">CASE FILE 4</span>
          <h1 className="casefile-title">PROJECT EVIDENCE</h1>
          <p className="casefile-sub">SOLVED CASES — EVIDENCE ARCHIVE</p>
        </div>

        <div className="projects-grid">
          {projects.map((project, i) => (
            <motion.div
              key={project._id}
              className="project-case"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 * i, duration: 0.5 }}
            >
              <div className="project-case-number">{project.caseNumber || `CASE #00${i + 1}`}</div>
              <h2 className="project-title">{project.title}</h2>

              <div className="project-status">
                <span className={project.status === 'CLOSED' ? 'stamp-closed' : 'stamp-ongoing'}>
                  {project.status === 'CLOSED' ? 'CASE CLOSED' : 'UNDER INVESTIGATION'}
                </span>
              </div>

              <div className="project-meta">
                <div className="project-meta-row">
                  <span className="meta-label">EVIDENCE:</span>
                  <span style={{ flex: 1, fontFamily: 'Courier Prime, monospace', fontSize: '0.8rem', color: '#c4b088' }}>
                    {project.description}
                  </span>
                </div>

                <div className="project-meta-row">
                  <span className="meta-label">TECH STACK:</span>
                  <div>
                    {project.techStack.map(t => (
                      <span key={t} className="tech-tag">{t}</span>
                    ))}
                  </div>
                </div>

                {project.features && (
                  <div>
                    <span className="meta-label">KEY FINDINGS:</span>
                    <ul className="bullet-list" style={{ marginTop: '0.5rem' }}>
                      {project.features.map((f, fi) => <li key={fi}>{f}</li>)}
                    </ul>
                  </div>
                )}

                <div className="project-links">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer" className="project-link">
                      ▸ GitHub Repository
                    </a>
                  )}
                  {project.liveDemo && (
                    <a href={project.liveDemo} target="_blank" rel="noreferrer" className="project-link">
                      ▸ Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;
