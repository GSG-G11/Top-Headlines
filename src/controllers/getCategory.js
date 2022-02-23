const fetch = require('node-fetch');
const { serverError } = require('./error');
const apiKey = process.env.apiKey;
const getCategory = (category) => (req, res, next) => {
  fetch(
    `https://newsapi.org/v2/top-headlines?category=${category}&apiKey=${process.env.apiKey}`,
  )
    .then((resp) => resp.json())
    .then((data) => res.json(data))
    .catch((err) => serverError(err, req, res, next));
};
module.exports = getCategory;
