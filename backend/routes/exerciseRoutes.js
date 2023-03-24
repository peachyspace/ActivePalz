const express = require("express");
const router = express.Router();
const {
  setExercise,
  getExercise,
  getExercisesOfAWorkout,
} = require("../controllers/exerciseController");

router.post("/create", setExercise);
router.get("/:id", getExercise);
router.get("/workout/:workoutId", getExercisesOfAWorkout);
module.exports = router;
