const { Sequelize } = require("sequelize");
const pkg = require("../../package.json");

const databaseName =
  pkg.name + (process.env.NODE_ENV === "test" ? "-test" : "");

//Sequelize instance
const db = new Sequelize(
  process.env.DATABASE_URL || `postgres://localhost:5432/${databaseName}`,
  {
    logging: false,
  }
);
/*create a Sequelize instance by passing mandatory arguments 
(database name, database superuser, database superuser's password and additional configuration) to the 
constructor.
Connection URI will be used to connect and authenticate to a PostgreSQL database
- username and password are optional
*/

/*
Testing the connection:
- You can use the .authenticate() function to test if the  connection is OK:

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database: ", error);
  });
*/

module.exports = db;
