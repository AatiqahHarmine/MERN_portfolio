const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  caseNumber: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  techStack: [String],
  features: [String],
  github: String,
  liveDemo: String,
  status: { type: String, enum: ['CLOSED', 'ONGOING'], default: 'CLOSED' },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Project', projectSchema);
