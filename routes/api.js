const express = require('express');

const router = express.Router();

const { health, twitter, sales } = require('../controller/api');
const auth = require('../middleware/auth');

/* GET home page. */
router.get('/health', health);
router.get('/twitter', auth, twitter);
router.get('/sales', auth, sales);

module.exports = router;
