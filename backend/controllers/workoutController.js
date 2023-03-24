const { Workout, Exercise } = require("../database/models");
// const Workout = require("../database/models/workout");
//desc:   set workout
//route:  POST /api/workouts
//access: private
// const setWorkout = async (req, res) => {
//   if (!req.body.text) {
//     res.status(400);
//     throw new Error("Please add a name");
//   }
//   res.status(200).json({ message: "Set workout !!" });
// };
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
const getWorkouts = async (req, res) => {
  res.status(200).json({ message: `Get ALL workouts ${req.params.userId}` });
};
//desc:    Get workouts
//route:   GET /api/workouts
//access:  private
const getWorkout = async (req, res, next) => {
  try {
    const workout = await Workout.findByPk(req.params.workoutId);
    //const isEmpty = await workout.hasExercise();

    res.json(workout);
  } catch (error) {
    next(error);
  }
};

//desc: get all the exercises that are part of a workout
//route: GET /api/workout/exercises/:workoutId
//access: private
// const getExercisesOfAWorkout = async (req, res, next) => {
//   try {
//     const exercisesOfWorkout = await Exercise.findAll({
//       where: { workout_id: req.params.workoutId },
//     });
//     res.json(exercisesOfWorkout);
//   } catch (error) {
//     next(error);
//   }
// };

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
  // getExercisesOfAWorkout,
  getWorkouts,
  updateWorkout,
  deleteWorkout,
};
