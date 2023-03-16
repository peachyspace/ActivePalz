//'use strict'

const sequelize = require("../backend/database/db");
const { User, Workout } = require("../backend/database/models");
async function seed() {
  await sequelize.sync({ force: true });
  console.log("sequelize synced ");
}
async function runSeed() {
  console.log("seeding...");
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log("closing db connection");
    await sequelize.close();
    console.log("db connection closed");
  }
}

if (require.main === module) {
  runSeed();
}
