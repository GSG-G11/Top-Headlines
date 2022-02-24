const router = require('express').Router();
const {
  handleSearch, handleSearchPage, notFoundError, serverError, getCategory,handleCategoryPage
} = require('../controllers');

router.get('/category', handleCategoryPage);
router.get('/category/:category', getCategory);
router.post('/search', handleSearch);
router.get('/search', handleSearchPage);
router.use(notFoundError);
router.use(serverError);

module.exports = router;
