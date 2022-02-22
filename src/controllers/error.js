const path = require("path");
const error = (req, res) => {
  res.status(404).sendFile(path.join(__dirname, '..', '..','public','html','404.html'));
};
const serverError = (err, req, res, next) => {
  res.status(500).sendFile(path.join(__dirname,'..', '..','public','html','500.html'));
}
module.exports = { error, serverError };