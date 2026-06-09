import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './CaseFile.css';

const skillCategories = [
  {
    title: 'LANGUAGES',
    icon: '💻',
    skills: [
      { name: 'Python', level: 88, threat: 'HIGH', color: '#3498db' },
      { name: 'JavaScript', level: 85, threat: 'HIGH', color: '#f39c12' },
      { name: 'SQL', level: 78, threat: 'MEDIUM', color: '#27ae60' },
    ],
  },
  {
    title: 'FRONTEND',
    icon: '🎨',
    skills: [
      { name: 'React.js', level: 85, threat: 'HIGH', color: '#61dafb' },
      { name: 'HTML/CSS', level: 90, threat: 'HIGH', color: '#e34c26' },
    ],
  },
  {
    title: 'BACKEND',
    icon: '⚙️',
    skills: [
      { name: 'Node.js', level: 82, threat: 'HIGH', color: '#68a063' },
      { name: 'Express.js', level: 80, threat: 'MEDIUM', color: '#8a7a5a' },
      { name: 'FastAPI', level: 75, threat: 'MEDIUM', color: '#009688' },
    ],
  },
  {
    title: 'DATABASES',
    icon: '🗄️',
    skills: [
      { name: 'MongoDB', level: 80, threat: 'HIGH', color: '#4db33d' },
      { name: 'PostgreSQL', level: 72, threat: 'MEDIUM', color: '#336791' },
    ],
  },
  {
    title: 'TOOLS & ANALYTICS',
    icon: '🛠️',
    skills: [
      { name: 'Power BI', level: 80, threat: 'HIGH', color: '#f2c811' },
      { name: 'Git / GitHub', level: 85, threat: 'HIGH', color: '#f0563a' },
      { name: 'Figma', level: 65, threat: 'MEDIUM', color: '#a259ff' },
    ],
  },
];

const SkillBar = ({ skill, delay }) => {
  const barRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (barRef.current) {
        barRef.current.style.width = `${skill.level}%`;
        barRef.current.style.background = skill.color;
        barRef.current.style.setProperty('--bar-color', skill.color);
      }
    }, delay);
    return () => clearTimeout(timer);
  }, [skill, delay]);

  const threatColor = skill.threat === 'HIGH' ? '#c0392b' : skill.threat === 'MEDIUM' ? '#d4890a' : '#27ae60';

  return (
    <div className="skill-item">
      <div className="skill-name">{skill.name}</div>
      <div className="skill-bar-bg">
        <div ref={barRef} className="skill-bar-fill" style={{ width: 0, '--bar-color': skill.color }} />
      </div>
      <div className="skill-level" style={{ color: threatColor }}>
        {skill.threat}
      </div>
    </div>
  );
};

const Skills = () => (
  <div className="casefile-page">
    <motion.div
      className="casefile-container"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="casefile-header">
        <span className="case-tag">CASE FILE 3</span>
        <h1 className="casefile-title">SKILLS DATABASE</h1>
        <p className="casefile-sub">SKILL ANALYSIS REPORT — THREAT ASSESSMENT</p>
      </div>

      <div className="skills-grid">
        {skillCategories.map((cat, ci) => (
          <motion.div
            key={cat.title}
            className="skill-category"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15 * ci, duration: 0.5 }}
          >
            <div className="skill-cat-title">
              <span>{cat.icon}</span>
              {cat.title}
            </div>
            <div className="skill-items">
              {cat.skills.map((skill, si) => (
                <SkillBar key={skill.name} skill={skill} delay={(ci * 200) + (si * 100) + 400} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </div>
);

export default Skills;
