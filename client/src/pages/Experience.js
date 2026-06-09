import React from 'react';
import { motion } from 'framer-motion';
import './CaseFile.css';

const timelineData = [
  {
    year: '2023',
    title: 'Began B.Tech CSE',
    org: 'SR University, Warangal',
    bullets: ['Commenced Computer Science degree', 'Started DSA journey — arrays, hashing, problem-solving patterns'],
  },
  {
    year: 'Jul–Sep 2024',
    title: 'AI-ML Virtual Internship',
    org: 'Google for Developers – AICTE EduSkills',
    bullets: [
      '10-week virtual internship on Artificial Intelligence & ML',
      'Worked on ML concepts, model development, and AI applications',
    ],
  },
  {
    year: 'Jun 2025',
    title: 'Generative AI Internship',
    org: 'Prodigy InfoTech',
    bullets: [
      'Applied Generative AI concepts and tools',
      'Developed practical AI-based solutions to real-world problems',
    ],
  },
  {
    year: '2025',
    title: 'Full-Stack Projects',
    org: 'Independent Development',
    bullets: [
      'Built Smart Food Inventory Management System (MERN)',
      'Developed Personal Finance Dashboard using FastAPI + PostgreSQL',
      'Created Healthcare & OLA Analytics Dashboards in Power BI',
    ],
  },
  {
    year: 'Nov 2025 – Jan 2026',
    title: 'Infosys Springboard Internship 6.0',
    org: 'AI Image Object Isolation Tool',
    bullets: [
      'Developed AI-based image processing solution to isolate objects',
      'Completed project assignments demonstrating practical AI skills',
    ],
  },
  {
    year: 'Jan–Mar 2026',
    title: 'Python Full Stack Internship',
    org: 'EduSkills Academy',
    bullets: [
      'Developed skills in HTML, CSS, JavaScript, Python, Django, SQL',
      'Built and deployed full-stack web applications',
    ],
  },
];

const Experience = () => (
  <div className="casefile-page">
    <motion.div
      className="casefile-container"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="casefile-header">
        <span className="case-tag">CASE FILE 5</span>
        <h1 className="casefile-title">INVESTIGATION TIMELINE</h1>
        <p className="casefile-sub">SUBJECT ACTIVITY LOG — CHRONOLOGICAL</p>
      </div>

      <div className="timeline">
        {timelineData.map((item, i) => (
          <motion.div
            key={i}
            className="timeline-item"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15 * i, duration: 0.5 }}
          >
            <div className="timeline-dot" />
            <div className="timeline-year">{item.year}</div>
            <div className="timeline-title">{item.title}</div>
            <div className="timeline-org">{item.org}</div>
            <ul className="timeline-bullets">
              {item.bullets.map((b, bi) => <li key={bi}>{b}</li>)}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </div>
);

export default Experience;
