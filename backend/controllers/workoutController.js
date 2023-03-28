const { Workout, Exercise } = require("../database/models");

//desc:   set workout
//route:  POST /api/workouts
//access: private
const setWorkout = async (req, res, next) => {
  try {
    const newWorkout = await Workout.create(req.body);
    res.json(newWorkout);
  } catch (error) {
    next(error);
  }
};
//desc:    Get workouts
//route:   GET /api/workouts/all/:userId
//access:  private
const getWorkouts = async (req, res) => {};
//desc:    Get workouts
//route:   GET /api/workouts/exercises/:workoutId
//access:  private
const getWorkout = async (req, res, next) => {
  try {
    const workout = Workout.findByPk(req.params.workoutId);
    const relatedExercises = workout.getExercises();
    res.json(relatedExercises);
  } catch (error) {
    next(error);
  }
};

//desc: get all the exercises that are part of a workout
//route: GET /api/workout/exercises/:workoutId
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

//desc:    Update workouts
//route:   PUT /api/workouts/:id
//access:  private
const updateWorkout = async (req, res) => {
  res.status(200).json({ message: `Update workout ${req.params.id}` });
};

//desc:    Delete workouts
//route:   DELETE /api/workouts/:id
//access:  private
const deleteWorkout = async (req, res) => {
  res.status(200).json({ message: `Delete workout ${req.params.id}` });
};

module.exports = {
  setWorkout,
  getWorkout,
  getExercisesOfAWorkout,
  getWorkouts,
  updateWorkout,
  deleteWorkout,
};
