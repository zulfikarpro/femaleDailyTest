const express = require('express');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'Express' });
});

// router.get('/', (req, res) => {
//   res.render('table', { title: 'Tes' });
// });

module.exports = router;
