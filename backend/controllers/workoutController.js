const { Workout } = require("../database/models");
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
//route:   GET /api/workouts/:userId
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
    const exercises = await workout.getExercises();
    console.log(exercises);
    res.json(workout);
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
  getWorkouts,
  updateWorkout,
  deleteWorkout,
};
