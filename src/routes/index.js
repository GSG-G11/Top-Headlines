const router = require('express').Router();
const category = require('./category');
const { handleSearch } = require('../controllers');

router.get('/category', category);
router.post('/serach', handleSearch);

module.exports = router;
