const express = require('express');

const router = express.Router();

const {
  health, twitter, sales, salesdetail,
} = require('../controller/api');
// const auth = require('../middleware/auth');

router.get('/health', health);
router.get('/twitter', twitter);
router.get('/sales', sales);
router.get('/salesdetail', salesdetail);

module.exports = router;
