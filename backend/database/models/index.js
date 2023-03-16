const User = require("./user");
const Workout = require("./workout");

Workout.belongsTo(User);

module.exports = { User, Workout };
