const sequelize = require("../database/db");
const { User } = require("../database/models");
//const User = require("../database/models/user");
//desc: Create User
//route: POST /api/users
//access: private
const setUser = async (req, res, next) => {
  try {
    const newUser = await User.create(req.body);
    res.json(newUser);
  } catch (error) {
    next(error);
  }
};

module.exports = { setUser };
