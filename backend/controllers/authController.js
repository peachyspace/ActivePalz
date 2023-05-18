const { User } = require("../database/models");

//desc. login user
//route: POST /auth/user/:email
//access: private
const loginUser = async (req, res, next) => {
  try {
    const user = await User.findOne({ where: { email: req.body.email } });
    if (!user) {
      console.log("User not found,:", req.body.email);
      res.status(401).send("Wrong username");
    } else {
      console.log("user found", user.first_name);
      res.json(user);
    }
  } catch (error) {
    next(error);
  }
};

module.exports = { loginUser };
