const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const User = sequelize.define("users", {
  first_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  sex: {
    type: DataTypes.STRING,
  },
  overall_workouts_completed: {
    type: DataTypes.INTEGER,
  },
  workouts_completed_this_week: {
    type: DataTypes.INTEGER,
  },
});

sequelize
  .sync()
  .then(() => {
    console.log("user table created succesfully");
  })
  .catch((error) => {
    console.error("Unable to create table", error);
  });

module.exports = User;
