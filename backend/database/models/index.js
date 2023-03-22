const User = require("./user");
const Workout = require("./workout");
const Exercise = require("./exercise");
User.hasMany(Workout);
Workout.belongsTo(User);
Exercise.belongsToMany(Workout, { through: "workout_exercise" });
Workout.belongsToMany(Exercise, { through: "workout_exercise" });

module.exports = { User, Workout, Exercise };
