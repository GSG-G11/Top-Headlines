const router = require('express').Router();
const category = require('./category');
const { handleSearch } = require('../controllers');

router.use('/category', category);
router.post('/search', handleSearch);

module.exports = router;
