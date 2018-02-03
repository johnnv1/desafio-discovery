const router = require('express').Router();
router.post('/discovery/upload', require('./discovery'));

module.exports = router;
