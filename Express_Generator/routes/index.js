var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', subtitle: 'hello iman' });
});

router.get('/angular', function(req, res, next) {
  var myname=req.query.name
  res.render('index', { title: 'Express', subtitle: 'name :'+myname });
});

module.exports = router;
