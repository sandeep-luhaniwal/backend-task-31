const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/register', register);
router.post('/login', login);
router.get('/protected', authMiddleware, (req, res) => {
  res.json({ message: `Hello ${req.userId}, this is a protected route!` });
});

module.exports = router;
