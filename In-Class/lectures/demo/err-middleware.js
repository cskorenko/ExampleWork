module.exports = function (err, req, res, next) {
  res.status(401).send(`Unable to connect to application err: ${err}`);
};
