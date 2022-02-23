const path = require('path');

const handleCategoryPage = (req, res) => {
  res.sendFile(path.join(__dirname, '..', '..', 'public', 'html', 'category.html'));
};

module.exports = handleCategoryPage;
