const log = (req, res, next) => {
  console.log(`Request to: ${req.originalUrl}`);
  next();
};

module.exports = log;
