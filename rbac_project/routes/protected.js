const express = require('express');
const router = express.Router();
const { getProtectedData } = require('../controllers/protectedController');
const authMiddleware = require('../middlewares/authMiddleware');
const roleMiddleware = require('../middlewares/roleMiddleware');

router.get('/', authMiddleware, roleMiddleware(['admin', 'moderator']), getProtectedData);

module.exports = router;
