const User = require("./user");
const Workout = require("./workout");
const Exercise = require("./exercise");

Workout.belongsTo(User);
//Exercise.belongsToMany

module.exports = { User, Workout };
