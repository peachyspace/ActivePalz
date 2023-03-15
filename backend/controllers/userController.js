//desc: Create User
//route: POST /api/users
//access: private
const setUser = (req, res) => {
  res.status(200).json({ message: "creating user" });
};

module.exports = { setUser };
