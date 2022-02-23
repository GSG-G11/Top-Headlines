const handleSearch = (req, res, next) => {
  console.log(req.body);
  res.send(req.body);
  next();
};

module.exports = handleSearch;
