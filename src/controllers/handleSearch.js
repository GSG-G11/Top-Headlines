const fetch = require('node-fetch');

const handleSearch = (req, res) => {
 fetch(`https://newsapi.org/v2/everything?q=${req.body.keyword}&apiKey=9c974a740f55477fb7c99c9f4376ad43`)
 .then((data) => data.json())
 .then((result) => res.json(result))
};

module.exports = handleSearch;