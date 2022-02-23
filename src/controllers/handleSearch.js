const fetch = require('node-fetch');
const handleSearch = (req, res) => {
 fetch(`https://newsapi.org/v2/everything?q=${req.body.keyword}&apiKey=${process.env.apiKey}`)
 .then((data) => data.json())
 .then((result) => res.json(result))
};

module.exports = handleSearch;