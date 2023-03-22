const { Exercise } = require("../database/models");

//desc: Create exercise
//route: POST /api/exercise/create
//access: private
const setExercise = async (req, res, next) => {
  try {
    const newExercise = await Exercise.create(req.body);
    res.json(newExercise);
  } catch (error) {
    next(error);
  }
};

module.exports = { setExercise };
