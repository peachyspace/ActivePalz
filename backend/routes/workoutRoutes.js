const express = require("express");
const router = express.Router();
const {
  setWorkout,
  getWorkout,
  getExercisesOfAWorkout,
  getWorkouts,
  updateWorkout,
  deleteWorkout,
} = require("../controllers/workoutController");
router.post("/create", setWorkout);
router.get("/:workoutId", getWorkout);
router.get("/exercises/:workoutId", getExercisesOfAWorkout);
router.get("/all/:userId", getWorkouts);
router.put("/:id", updateWorkout);
router.delete("/:workoutId", deleteWorkout);

module.exports = router;
