const express = require("express");
const router = express.Router();

router.use("/users", require("./userRoutes"));
router.use("/workouts", require("./workoutRoutes"));
module.exports = router;
