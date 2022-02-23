const path = require('path');

const handleSearchPage = (req, res) => {
  res.sendFile(path.join(__dirname, '..', '..', 'public', 'html', 'Search.html'));
};

module.exports = handleSearchPage;
