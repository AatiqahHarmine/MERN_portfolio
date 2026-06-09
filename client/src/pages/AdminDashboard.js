import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import './AdminDashboard.css';

const tabs = ['PROJECTS', 'SKILLS', 'EXPERIENCE'];

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('PROJECTS');
  const [projects, setProjects] = useState([]);
  const [projectForm, setProjectForm] = useState({
    caseNumber: '', title: '', techStack: '', description: '', features: '', github: '', liveDemo: '', status: 'CLOSED',
  });
  const [msg, setMsg] = useState('');

  const token = localStorage.getItem('adminToken');
  const headers = { Authorization: `Bearer ${token}` };

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const res = await axios.get('/api/projects');
      setProjects(res.data);
    } catch {}
  };

  const handleAddProject = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        ...projectForm,
        techStack: projectForm.techStack.split(',').map(t => t.trim()),
        features: projectForm.features.split('\n').filter(Boolean),
      };
      await axios.post('/api/projects', payload, { headers });
      setMsg('✓ PROJECT ADDED SUCCESSFULLY');
      setProjectForm({ caseNumber: '', title: '', techStack: '', description: '', features: '', github: '', liveDemo: '', status: 'CLOSED' });
      fetchProjects();
    } catch {
      setMsg('✗ FAILED TO ADD PROJECT');
    }
  };

  const handleDeleteProject = async (id) => {
    try {
      await axios.delete(`/api/projects/${id}`, { headers });
      setMsg('✓ PROJECT DELETED');
      fetchProjects();
    } catch {
      setMsg('✗ DELETE FAILED');
    }
  };

  return (
    <div className="admin-page">
      <motion.div
        className="admin-container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="admin-header">
          <span className="case-tag">ADMIN PANEL</span>
          <h1 className="admin-title">CASE MANAGEMENT SYSTEM</h1>
          <p className="admin-sub">UPDATE PORTFOLIO WITHOUT CHANGING CODE</p>
        </div>

        <div className="admin-tabs">
          {tabs.map(tab => (
            <button
              key={tab}
              className={`admin-tab ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {msg && (
          <div className={`admin-msg ${msg.startsWith('✓') ? 'success' : 'error'}`}>
            {msg}
          </div>
        )}

        {activeTab === 'PROJECTS' && (
          <div className="admin-section">
            <h2 className="admin-section-title">ADD NEW CASE (PROJECT)</h2>
            <form className="admin-form" onSubmit={handleAddProject}>
              {[
                { key: 'caseNumber', label: 'CASE NUMBER', placeholder: 'e.g. CASE #005' },
                { key: 'title', label: 'PROJECT TITLE', placeholder: 'Project name' },
                { key: 'techStack', label: 'TECH STACK (comma-separated)', placeholder: 'React, Node.js, MongoDB' },
                { key: 'description', label: 'DESCRIPTION', placeholder: 'Brief description' },
                { key: 'github', label: 'GITHUB URL', placeholder: 'https://github.com/...' },
                { key: 'liveDemo', label: 'LIVE DEMO URL (optional)', placeholder: 'https://...' },
              ].map(field => (
                <div key={field.key} className="admin-field">
                  <label className="admin-label">{field.label}</label>
                  <input
                    className="admin-input"
                    placeholder={field.placeholder}
                    value={projectForm[field.key]}
                    onChange={e => setProjectForm(f => ({ ...f, [field.key]: e.target.value }))}
                    required={field.key !== 'liveDemo'}
                  />
                </div>
              ))}
              <div className="admin-field">
                <label className="admin-label">KEY FEATURES (one per line)</label>
                <textarea
                  className="admin-input"
                  style={{ minHeight: '100px', resize: 'vertical' }}
                  placeholder="Feature 1&#10;Feature 2&#10;Feature 3"
                  value={projectForm.features}
                  onChange={e => setProjectForm(f => ({ ...f, features: e.target.value }))}
                />
              </div>
              <div className="admin-field">
                <label className="admin-label">STATUS</label>
                <select
                  className="admin-input"
                  value={projectForm.status}
                  onChange={e => setProjectForm(f => ({ ...f, status: e.target.value }))}
                >
                  <option value="CLOSED">CASE CLOSED (Completed)</option>
                  <option value="ONGOING">UNDER INVESTIGATION (Ongoing)</option>
                </select>
              </div>
              <button type="submit" className="admin-submit">▶ ADD PROJECT</button>
            </form>

            <h2 className="admin-section-title" style={{ marginTop: '2rem' }}>EXISTING CASES</h2>
            <div className="admin-list">
              {projects.map(p => (
                <div key={p._id} className="admin-list-item">
                  <div>
                    <div className="admin-item-title">{p.title}</div>
                    <div className="admin-item-meta">{p.techStack?.join(', ')}</div>
                  </div>
                  <button
                    className="admin-delete"
                    onClick={() => handleDeleteProject(p._id)}
                  >
                    DELETE
                  </button>
                </div>
              ))}
              {projects.length === 0 && (
                <div style={{ color: '#8a7a5a', fontFamily: 'Courier Prime', fontSize: '0.8rem', padding: '1rem' }}>
                  No projects in database. Using default static data.
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === 'SKILLS' && (
          <div className="admin-section">
            <p style={{ color: '#8a7a5a', fontFamily: 'Courier Prime', fontSize: '0.85rem', lineHeight: 1.7 }}>
              Skills are currently managed via static data in the frontend.<br />
              To add dynamic skill management, extend the /api/skills route and update the Skills page to fetch from API.
            </p>
          </div>
        )}

        {activeTab === 'EXPERIENCE' && (
          <div className="admin-section">
            <p style={{ color: '#8a7a5a', fontFamily: 'Courier Prime', fontSize: '0.85rem', lineHeight: 1.7 }}>
              Experience/Timeline is currently managed via static data.<br />
              To add dynamic management, extend the /api/experience route and update the Experience page to fetch from API.
            </p>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default AdminDashboard;
