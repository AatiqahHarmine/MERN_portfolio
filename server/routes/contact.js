const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');
const auth = require('../middleware/auth');

// POST contact form (public)
router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ message: 'All fields required' });
    }
    const contact = new Contact({ name, email, message });
    await contact.save();
    res.status(201).json({ message: 'Message received. Transmission successful.' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// GET all messages (admin only)
router.get('/', auth, async (req, res) => {
  try {
    const messages = await Contact.find().sort({ receivedAt: -1 });
    res.json(messages);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
