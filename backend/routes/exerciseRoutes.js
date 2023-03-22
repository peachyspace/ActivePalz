const express = require("express");
const router = express.Router();
const { setExercise } = require("../controllers/exerciseController");

router.post("/create", setExercise);
module.exports = router;
