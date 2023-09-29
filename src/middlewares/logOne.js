const logOne = (req, res, next) => {
  console.log(`Log #1`);
  next();
};

module.exports = logOne;
