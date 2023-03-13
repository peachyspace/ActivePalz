const Sequelize = require("sequelize");
const pkg = require("../../package.json");

const databaseName =
  pkg.name + (process.env.NODE_ENV === "test" ? "-test" : "");

//Sequelize instance
const sequelize = new Sequelize(
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

module.exports = db;
