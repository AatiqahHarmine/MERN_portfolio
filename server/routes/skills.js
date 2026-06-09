const express = require('express');
const router = express.Router();

// Skills are static for now — extend with a Skill model for dynamic management
router.get('/', (req, res) => {
  res.json({ message: 'Skills endpoint — extend with Skill model for dynamic data' });
});

module.exports = router;
