import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Landing from './pages/Landing';
import EvidenceBoard from './pages/EvidenceBoard';
import Profile from './pages/Profile';
import Education from './pages/Education';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Achievements from './pages/Achievements';
import Contact from './pages/Contact';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import Navbar from './components/Navbar';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/board" element={<><Navbar /><EvidenceBoard /></>} />
            <Route path="/profile" element={<><Navbar /><Profile /></>} />
            <Route path="/education" element={<><Navbar /><Education /></>} />
            <Route path="/skills" element={<><Navbar /><Skills /></>} />
            <Route path="/projects" element={<><Navbar /><Projects /></>} />
            <Route path="/experience" element={<><Navbar /><Experience /></>} />
            <Route path="/achievements" element={<><Navbar /><Achievements /></>} />
            <Route path="/contact" element={<><Navbar /><Contact /></>} />
            <Route path="/admin" element={<AdminLogin />} />
            <Route path="/admin/dashboard" element={
              <ProtectedRoute>
                <Navbar />
                <AdminDashboard />
              </ProtectedRoute>
            } />
          </Routes>
        </AnimatePresence>
      </Router>
    </AuthProvider>
  );
}

export default App;
