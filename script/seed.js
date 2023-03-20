//'use strict'

const db = require("../backend/database");
const { User, Workout } = require("../backend/database/models");
async function seed() {
  // Create database tables based on the models we've defined
  // Drops existing tables if there are any
  await db.sync({ force: true });
  console.log("sequelize synced ");
  const users = await Promise.all([
    User.create({
      first_name: "Maria",
      last_name: "Campos",
      email: "campos@email.com",
      password: "1234",
      sex: "female",
    }),
    User.create({
      first_name: "Lucas",
      last_name: "Perez",
      email: "perez@email.com",
      password: "1234",
      sex: "male",
    }),
    User.create({
      first_name: "Thea",
      last_name: "Smith",
      email: "smith@email.com",
      password: "1234",
      sex: "female",
    }),
    User.create({
      first_name: "Adam",
      last_name: "Lopez",
      email: "lopez@email.com",
      password: "1234",
      sex: "male",
    }),
    User.create({
      first_name: "Jess",
      last_name: "Lee",
      email: "lee@email.com",
      password: "1234",
      sex: "female",
    }),
  ]);
  console.log(`seeded ${users.length} users`);
  console.log("seeded successfully");
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
    await db.close();
    console.log("db connection closed");
  }
}
//We opened a connection to our database and then closed it.

if (require.main === module) {
  runSeed();
}
