const express = require("express");
const { errorHandler } = require("./middleware/errorMiddleware");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;
const app = express();
const db = require("./database");

const createApp = () => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: "false" }));
  app.use("/api", require("./routes")); //mount a router on a path
  app.use("/auth", require("./auth"));
  app.use(errorHandler); //overwrites the defult express error handler
};

const startListening = () => {
  app.listen(port, () => console.log(`Sever started on port ${port}`));
};
const syncDb = () => {
  db.sync(); //automatically synchronize all models
};

async function bootApp() {
  await syncDb();
  await createApp();
  await startListening();
}

if (require.main === module) {
  bootApp(); //this module was run directly from the command line as in node xxx.js
} else {
  createApp(); // this module was not run directly from the command line and probably loaded by something else
}

// const express = require("express");
// const { errorHandler } = require("./middleware/errorMiddleware");
// const dotenv = require("dotenv").config();
// const port = process.env.PORT || 5000;
// const app = express();

// app.use(express.json());
// app.use(express.urlencoded({ extended: "false" }));
// app.use("/api/workouts", require("./routes/workoutRoutes"));
// app.use("/api/users", require("./routes/userRoutes")); //mount a router on a path
// app.use(errorHandler); //overwrites the defult express error handler

// app.listen(port, () => console.log(`Sever started on port ${port}`));
