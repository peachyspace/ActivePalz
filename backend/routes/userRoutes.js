const express = require("express");
const router = express.Router(); //allows us to create a router for a specific route
const { setUser } = require("../controllers/userController");

router.post("/", setUser);

module.exports = router;
