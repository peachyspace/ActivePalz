const { DataTypes } = require("sequelize");
const db = require("../db"); //access to datbase instance exported from db.js

const Workout = db.define("workouts", {
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

module.exports = Workout;
