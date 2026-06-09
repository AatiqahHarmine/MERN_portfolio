const mongoose = require('mongoose');

const visitorSchema = new mongoose.Schema({
  visitorId: { type: String, required: true, unique: true },
  casesSolved: { type: Number, default: 0 },
  timeSpent: { type: Number, default: 0 },
  achievementsUnlocked: { type: Number, default: 0 },
  lastSeen: { type: Date, default: Date.now },
  firstVisit: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Visitor', visitorSchema);
