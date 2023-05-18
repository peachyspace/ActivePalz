const { DataTypes } = require("sequelize");
const db = require("../db");

const User = db.define("users", {
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
    /* the getter allows us to hide the password 
    when serializing the users data to JSON
   */
    get() {
      return () => this.getDataValues("password");
    },
    allowNull: false,
  },
  sex: {
    type: DataTypes.STRING,
  },
  total_workouts_completed: {
    type: DataTypes.INTEGER,
  },
  workouts_completed_this_week: {
    type: DataTypes.INTEGER,
  },
});

module.exports = User;
