const express = require("express");
const router = express.Router();
const {
  setWorkout,
  getWorkout,
  getWorkouts,
  updateWorkout,
  deleteWorkout,
} = require("../controllers/workoutController");
router.post("/create", setWorkout);
router.get("/:workoutId", getWorkout);
router.get("/:userId", getWorkouts);
router.put("/:id", updateWorkout);
router.delete("/:id", deleteWorkout);

module.exports = router;
