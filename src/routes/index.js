const router = require('express').Router();
const category = require('./category');
const { handleSearch, handleSearchPage,notFoundError,serverError} = require('../controllers');

router.use('/category', category);
router.post('/search', handleSearch);
router.get('/search', handleSearchPage);
router.use(notFoundError)
router.use(serverError)

module.exports = router;
