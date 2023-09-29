const getUsers = (req, res) => {
  // Get All Users
};

const getUser = (req, res) => {
  const { user_id } = req.params;
  res.writeHead(200);
  res.end(`User id ${user_id}`);
};

const regUser = (req, res) => {
  res.status(201);
  res.send(req.body);
};

const logUser = (req, res) => {
  // Login user
};

const updateUser = (req, res) => {
  //Update user info
};

module.exports = {
  getUsers,
  getUser,
  regUser,
  logUser,
  updateUser,
};
