const getCategory = require('./getCategory');
const { notFoundError, serverError } = require('./error');
const handleSearch = require('./handleSearch');
const handleCategoryPage = require('./handleCategoryPage');
const handleSearchPage = require('./handleSearchPage');

module.exports = {
  getCategory,
  notFoundError,
  serverError,
  handleSearch,
  handleCategoryPage,
  handleSearchPage,
};
