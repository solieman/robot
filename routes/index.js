const express = require('express');
const router = express.Router();

// define the home page route
router.get('/', function (req, res) {
//   res.render('robot',{title:'Robots home page'});
    res.send('Home Page Robots');
});

// define the about route
router.get('/about', function (req, res) {
  res.send('About Robots');
});

module.exports = router;