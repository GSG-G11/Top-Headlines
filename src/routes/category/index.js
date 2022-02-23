const category = require('express').Router();
const {
  handleBusiness, handleEntertainment, handleGeneral,
  handleHealth, handleScience, handleSports, handleTechnology,
} = require('../../controllers');

category.get('/business', handleBusiness);
category.get('/entertainment', handleEntertainment);
category.get('/general', handleGeneral);
category.get('/health', handleHealth);
category.get('/science', handleScience);
category.get('/sports', handleSports);
category.get('/technology', handleTechnology);

module.exports = category;
