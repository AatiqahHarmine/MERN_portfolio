const express = require('express');
const router = express.Router();
const Visitor = require('../models/Visitor');

// Upsert visitor progress
router.post('/track', async (req, res) => {
  try {
    const { visitorId, casesSolved, achievementsUnlocked, timeSpent } = req.body;
    const visitor = await Visitor.findOneAndUpdate(
      { visitorId },
      { $set: { casesSolved, achievementsUnlocked, timeSpent, lastSeen: new Date() } },
      { upsert: true, new: true }
    );
    res.json(visitor);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// GET leaderboard — top detectives by cases solved
router.get('/leaderboard', async (req, res) => {
  try {
    const top = await Visitor.find()
      .sort({ casesSolved: -1, achievementsUnlocked: -1 })
      .limit(10)
      .select('visitorId casesSolved achievementsUnlocked');
    res.json(top);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
