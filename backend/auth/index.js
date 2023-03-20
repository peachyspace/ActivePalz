const router = require("express").Router();
const { loginUser } = require("../controllers/authController");

router.get("/login", loginUser);
module.exports = router;
