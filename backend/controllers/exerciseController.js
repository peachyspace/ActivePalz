const { Exercise, Workout } = require("../database/models");

//desc: Create exercise
//route: POST /api/exercise/create
//access: private
const setExercise = async (req, res, next) => {
  try {
    const newExercise = await Exercise.create(req.body);
    await newExercise.setWorkout(req.body.workout_id);
    res.json(newExercise);
  } catch (error) {
    next(error);
  }
};

//desc: retrive a specific exercise
//route: GET /api/exercise/:id
//access: private
const getExercise = async (req, res, next) => {
  try {
    const exercise = await Exercise.findByPk(req.params.id);

    res.json(exercise);
  } catch (error) {
    next(error);
  }
};

//desc: get all the exercises that are part of a workout
//route: GET /api/exercise/workout/:workoutId
//access: private
const getExercisesOfAWorkout = async (req, res, next) => {
  try {
    const exercisesOfWorkout = await Exercise.findAll({
      where: { workout_id: req.params.workoutId },
    });
    res.json(exercisesOfWorkout);
  } catch (error) {
    next(error);
  }
};

//desc: update am exercise
//route: GET /api/exercise/:id
//access: private
const updateExercise = async (req, res, next) => {
  try {
    const exercise = await Exercise.findByPk(req.params.id);
    await exercise.update(req.body);
    res.json(exercise);
  } catch (error) {
    next(error);
  }
};
module.exports = {
  setExercise,
  getExercise,
  getExercisesOfAWorkout,
  updateExercise,
};
