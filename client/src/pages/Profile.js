import React from 'react';
import { motion } from 'framer-motion';
import './CaseFile.css';

const profileData = {
  name: 'AATIQAH HARMIN',
  age: '21',
  status: 'Final Year Computer Science Student',
  specialization: 'Full-Stack Developer | MERN + FastAPI',
  location: 'Warangal, India',
  email: 'aatiqahharmine27@gmail.com',
  github: 'github.com/AatiqahHarmine',
  linkedin: 'linkedin.com/in/aatiqah-harmine-bb2249296',
  mobile: '+91 9701966916',
  objective:
    'A driven Full-Stack Developer with a passion for building scalable web applications, solving complex backend challenges, and creating user-centric digital experiences using MERN and Python-based stacks.',
};

const field = (label, value) => (
  <div className="profile-field" key={label}>
    <span className="field-label">{label}:</span>
    <span className="field-value">{value}</span>
  </div>
);

const Profile = () => (
  <div className="casefile-page">
    <motion.div
      className="casefile-container"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="casefile-header">
        <span className="case-tag">CASE FILE 1</span>
        <h1 className="casefile-title">SUSPECT PROFILE</h1>
        <p className="casefile-sub">CLASSIFIED — DETECTIVE EYES ONLY</p>
      </div>

      <div className="profile-card worn-paper">
        <div className="folder-stamp top-right">VERIFIED</div>
        <div className="dossier-photo">
          <div className="dossier-initials">A.H.</div>
          <div className="dossier-id">ID: ENG-2026-001</div>
        </div>

        <div className="profile-fields">
          {field('NAME', profileData.name)}
          {field('STATUS', profileData.status)}
          {field('SPECIALIZATION', profileData.specialization)}
          {field('LOCATION', profileData.location)}
          {field('EMAIL', profileData.email)}
          {field('GITHUB', profileData.github)}
          {field('LINKEDIN', profileData.linkedin)}
          {field('MOBILE', profileData.mobile)}
        </div>

        <div className="objective-section">
          <h3 className="obj-label">INVESTIGATOR'S NOTE</h3>
          <p className="obj-text">{profileData.objective}</p>
        </div>
      </div>
    </motion.div>
  </div>
);

export default Profile;
