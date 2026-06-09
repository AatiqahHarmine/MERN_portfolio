import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import './EvidenceBoard.css';

const nodes = [
  { id: 'profile', label: 'SUSPECT PROFILE', icon: '👤', path: '/profile', x: 50, y: 20, color: '#d4890a' },
  { id: 'skills', label: 'SKILLS DATABASE', icon: '⚡', path: '/skills', x: 15, y: 45, color: '#c0392b' },
  { id: 'education', label: 'EDUCATION RECORDS', icon: '📋', path: '/education', x: 85, y: 45, color: '#2980b9' },
  { id: 'projects', label: 'PROJECT EVIDENCE', icon: '🗂️', path: '/projects', x: 30, y: 70, color: '#27ae60' },
  { id: 'experience', label: 'INVESTIGATION TIMELINE', icon: '📌', path: '/experience', x: 70, y: 70, color: '#8e44ad' },
  { id: 'achievements', label: 'ACHIEVEMENT VAULT', icon: '🏆', path: '/achievements', x: 50, y: 88, color: '#f39c12' },
];

const strings = [
  ['profile', 'skills'],
  ['profile', 'education'],
  ['profile', 'projects'],
  ['profile', 'experience'],
  ['skills', 'projects'],
  ['education', 'experience'],
  ['projects', 'achievements'],
  ['experience', 'achievements'],
];

const EvidenceBoard = () => {
  const navigate = useNavigate();
  const [hoveredNode, setHoveredNode] = useState(null);
  const [solved, setSolved] = useState([]);

  const handleNodeClick = (node) => {
    if (!solved.includes(node.id)) {
      setSolved(prev => [...prev, node.id]);
    }
    navigate(node.path);
  };

  return (
    <div className="evidence-board-page">
      <div className="board-header">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="board-label">INVESTIGATION BOARD — CLASSIFIED</p>
          <h1 className="board-title">CASE #2026: UNKNOWN ENGINEER</h1>
          <p className="board-subtitle">Connect the evidence. Solve the case.</p>
        </motion.div>
      </div>

      <div className="board-container">
        {/* Cork board */}
        <div className="cork-board">
          {/* SVG strings */}
          <svg className="strings-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
            {strings.map(([fromId, toId], i) => {
              const from = nodes.find(n => n.id === fromId);
              const to = nodes.find(n => n.id === toId);
              const isHighlighted = hoveredNode === fromId || hoveredNode === toId;
              return (
                <line
                  key={i}
                  x1={from.x} y1={from.y}
                  x2={to.x} y2={to.y}
                  stroke={isHighlighted ? '#c0392b' : 'rgba(192,57,43,0.35)'}
                  strokeWidth={isHighlighted ? '0.4' : '0.2'}
                  style={{ transition: 'all 0.3s' }}
                />
              );
            })}
          </svg>

          {/* Evidence nodes */}
          {nodes.map((node, i) => (
            <motion.div
              key={node.id}
              className={`evidence-node ${solved.includes(node.id) ? 'solved' : ''}`}
              style={{ left: `${node.x}%`, top: `${node.y}%`, '--node-color': node.color }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              onClick={() => handleNodeClick(node)}
              onMouseEnter={() => setHoveredNode(node.id)}
              onMouseLeave={() => setHoveredNode(null)}
              whileHover={{ scale: 1.1, zIndex: 20 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="node-pin" style={{ background: node.color }} />
              <div className="node-card">
                <div className="node-icon">{node.icon}</div>
                <div className="node-label">{node.label}</div>
                {solved.includes(node.id) && (
                  <div className="node-solved">✓ INVESTIGATED</div>
                )}
              </div>
            </motion.div>
          ))}

          {/* Center photo placeholder */}
          <div className="center-photo">
            <div className="photo-frame">
              <div className="photo-placeholder">A.H.</div>
              <div className="photo-label">SUSPECT</div>
            </div>
            <div className="photo-pin" />
          </div>
        </div>

        {/* Progress */}
        <motion.div
          className="investigation-progress"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <p className="progress-label">INVESTIGATION PROGRESS</p>
          <div className="progress-bar-bg">
            <div
              className="progress-bar-fill"
              style={{ width: `${(solved.length / nodes.length) * 100}%` }}
            />
          </div>
          <p className="progress-text">{solved.length}/{nodes.length} EVIDENCE FILES REVIEWED</p>
          {solved.length === nodes.length && (
            <motion.p
              className="case-solved"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              🔍 CASE SOLVED — IDENTITY CONFIRMED
            </motion.p>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default EvidenceBoard;
