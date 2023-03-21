const express = require("express");
const router = express.Router();
const {
  setWorkout,
  getWorkouts,
  updateWorkout,
  deleteWorkout,
} = require("../controllers/workoutController");
router.post("/create", setWorkout);
router.get("/", getWorkouts);
router.put("/:id", updateWorkout);
router.delete("/:id", deleteWorkout);

module.exports = router;
