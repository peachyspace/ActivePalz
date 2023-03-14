const { DataTypes } = require("sequelize");
const sequelize = require("../db"); //access to sequelize instance exported from db.js

const Workout = sequelize.define("workouts", {
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  executed_on: {
    type: DataTypes.DATEONLY,
  },
  completed_on: {
    type: DataTypes.DATEONLY,
  },
});
sequelize
  .sync()
  .then(() => {
    console.log("Workout table created successfully!");
  })
  .catch((error) => {
    console.error("Unable to create table : ", error);
  });
module.exports = Workout;
