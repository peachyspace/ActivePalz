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

//desc:    Get workout
//route:   GET /api/workouts/exercises/:workoutId
//access:  private
const getWorkout = async (req, res, next) => {
  try {
    const workout = await Workout.findByPk(req.params.workoutId);
    res.json(workout);
  } catch (error) {
    next(error);
  }
};

//desc:    Get workouts of a user
//route:   GET /api/workouts/all/:userId
//access:  private
const getWorkouts = async (req, res, next) => {
  try {
    const workouts = await Workout.findAll({
      where: { userId: req.params.userId },
    });
    res.json(workouts);
  } catch (error) {
    next(error);
  }
};

//desc: get all the exercises that are part of a workout
//route: GET /api/workouts/exercises/:workoutId
//access: private
const getExercisesOfAWorkout = async (req, res, next) => {
  try {
    const workout = await Workout.findByPk(req.params.workoutId);
    const relatedExercises = await workout.getExercises();
    const completeWorkoutData = {};
    completeWorkoutData.mainInfo = workout;
    completeWorkoutData.allExercises = relatedExercises;
    res.json(completeWorkoutData);
  } catch (error) {
    next(error);
  }
};

//desc:    Update workouts
//route:   PUT /api/workouts/:id
//access:  private
const updateWorkout = async (req, res, next) => {
  try {
    const workout = await Workout.findByPk(req.params.id);
    await workout.update(req.body);
    res.json(workout);
  } catch (error) {
    next(error);
  }
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
