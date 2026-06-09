import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Landing.css';

const RainCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const drops = Array.from({ length: 120 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      speed: 3 + Math.random() * 5,
      length: 15 + Math.random() * 25,
      opacity: 0.1 + Math.random() * 0.3,
    }));

    let animId;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drops.forEach(drop => {
        ctx.beginPath();
        ctx.strokeStyle = `rgba(180, 160, 120, ${drop.opacity})`;
        ctx.lineWidth = 0.5;
        ctx.moveTo(drop.x, drop.y);
        ctx.lineTo(drop.x - 3, drop.y + drop.length);
        ctx.stroke();
        drop.y += drop.speed;
        drop.x -= 1.5;
        if (drop.y > canvas.height) {
          drop.y = -drop.length;
          drop.x = Math.random() * canvas.width;
        }
      });
      animId = requestAnimationFrame(draw);
    };
    draw();

    const onResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', onResize);
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', onResize); };
  }, []);

  return <canvas ref={canvasRef} className="rain-canvas" />;
};

const TypewriterText = ({ text, delay = 0, speed = 60 }) => {
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setDisplayed(text.slice(0, i + 1));
        i++;
        if (i >= text.length) { clearInterval(interval); setDone(true); }
      }, speed);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timer);
  }, [text, delay, speed]);

  return <span>{displayed}{!done && <span className="cursor">_</span>}</span>;
};

const Landing = () => {
  const navigate = useNavigate();
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 500);
    const t2 = setTimeout(() => setPhase(2), 2500);
    const t3 = setTimeout(() => setPhase(3), 5000);
    const t4 = setTimeout(() => setPhase(4), 7500);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); };
  }, []);

  return (
    <div className="landing">
      <RainCanvas />
      <div className="office-overlay" />

      {/* Lamp glow */}
      <div className="desk-lamp">
        <div className="lamp-glow" />
      </div>

      <div className="landing-content">
        {/* CONFIDENTIAL folder */}
        <motion.div
          className="case-folder"
          initial={{ opacity: 0, y: 40, rotateX: 15 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className="folder-tab">CONFIDENTIAL</div>
          <div className="folder-body">
            <div className="folder-stamp">TOP SECRET</div>

            <div className="case-header">
              <span className="case-number">CASE FILE #2026</span>
            </div>

            <div className="case-content">
              {phase >= 1 && (
                <p className="case-line">
                  <TypewriterText text="SUBJECT: Unknown Software Engineer" delay={0} />
                </p>
              )}
              {phase >= 2 && (
                <p className="case-line">
                  <TypewriterText text="STATUS: Active — Operating in Tech World" delay={0} />
                </p>
              )}
              {phase >= 3 && (
                <p className="case-line mission">
                  <TypewriterText
                    text="MISSION: Investigate the suspect and uncover the truth."
                    delay={0}
                    speed={45}
                  />
                </p>
              )}
            </div>

            {phase >= 4 && (
              <motion.div
                className="folder-actions"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                <button className="open-case-btn" onClick={() => navigate('/board')}>
                  ▶ OPEN CASE FILE
                </button>
                <p className="clearance-note">[ DETECTIVE CLEARANCE REQUIRED ]</p>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Scattered papers effect */}
        <div className="paper-pile paper-1" />
        <div className="paper-pile paper-2" />
        <div className="paper-pile paper-3" />
      </div>

      {/* Window with rain */}
      <div className="office-window">
        <div className="window-frame">
          <div className="window-cross-h" />
          <div className="window-cross-v" />
        </div>
      </div>

      {/* Coffee mug */}
      <div className="coffee-mug">
        <div className="mug-body">☕</div>
        <div className="steam">∿∿∿</div>
      </div>
    </div>
  );
};

export default Landing;
