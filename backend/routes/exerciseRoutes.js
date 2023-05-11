const express = require("express");
const router = express.Router();
const {
  setExercise,
  getExercise,
  getExercisesOfAWorkout,
  updateExercise,
  deleteExercise,
} = require("../controllers/exerciseController");

router.post("/create", setExercise);
router.get("/:id", getExercise);
router.get("/workout/:workoutId", getExercisesOfAWorkout);
router.put("/:id", updateExercise);
router.delete("/:id", deleteExercise);
module.exports = router;
