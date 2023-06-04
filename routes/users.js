var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('GET HTTP method on user resource');
});

router.post('/', function(req, res, next) {
  res.send('POST HTTP method on user resource');
});

router.put('/:userID', function(req, res, next) {
  res.send(`PUT HTTP method on user/${req.params.userID} resource`);
});

router.delete('/:userID', function(req, res, next) {
  res.send(`DELETE HTTP method on user/${req.params.userID} resource`);
});

module.exports = router;
