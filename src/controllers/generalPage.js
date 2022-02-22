const fetch = require("node-fetch");

const generalPage = (req, res, next) => {
  const { category } = req; //need modify
  fetch(
    `https://newsapi.org/v2/top-headlines?category=${category}&apiKey=9c974a740f55477fb7c99c9f4376ad43`
  )
    .then((resp) => resp.json())
    .then((data) => res.json(data))
    .catch((err) => serverError(err, req, res, next));
};
module.exports = generalPage;
