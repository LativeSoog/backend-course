const router = require("express").Router();

const { getUser, getUsers, regUser, logUser, updateUser } = require("../controllers/users");

router.get("/users", getUsers);
router.get("/users/:user_id", getUser);
router.post("/users/sign-up", regUser);
router.post("/users/login", logUser);
router.patch("/users/:user_id", updateUser);

module.exports = router;
