const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'Experience endpoint — extend with Experience model for dynamic data' });
});

module.exports = router;
