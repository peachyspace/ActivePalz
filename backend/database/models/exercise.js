const { DataTypes } = require("sequelize");
const db = require("../db");

const Exercise = db.define("exercises", {
  workout_id: {
    type: DataTypes.INTEGER,
    allowsNull: false,
  },
  name: {
    type: DataTypes.TEXT,
    allowsNull: false,
  },
  number_of_sets: {
    type: DataTypes.INTEGER,
    allowsNull: false,
  },
  number_of_reps: {
    type: DataTypes.INTEGER,
    allowsNull: false,
  },
  note: {
    type: DataTypes.TEXT,
  },
  link_1: {
    type: DataTypes.TEXT,
  },
  link_2: {
    type: DataTypes.TEXT,
  },
});

module.exports = Exercise;
