const getCategory = require('./getCategory');
const { notFoundError, serverError } = require('./error');
const handleSearch = require('./handleSearch');
const handleBusiness = require('./handleBusiness');
const handleEntertainment = require('./handleEntertainment');
const handleGeneral = require('./handleGeneral');
const handleHealth = require('./handleHealth');
const handleScience = require('./handleScience');
const handleSports = require('./handleSports');
const handleTechnology = require('./handleTechnology');
const handleCategoryPage = require('./handleCategoryPage');
const handleSearchPage = require('./handleSearchPage');

module.exports = {
  getCategory,
  notFoundError,
  serverError,
  handleSearch,
  handleBusiness,
  handleEntertainment,
  handleGeneral,
  handleHealth,
  handleScience,
  handleSports,
  handleTechnology,
  handleCategoryPage,
  handleSearchPage,
};
