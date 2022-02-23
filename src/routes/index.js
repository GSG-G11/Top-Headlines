const router = require('express').Router();
const category = require('./category');
const { handleSearch, handleSearchPage } = require('../controllers');

router.use('/category', category);
router.post('/search', handleSearch);
router.get('/search', handleSearchPage);

module.exports = router;
