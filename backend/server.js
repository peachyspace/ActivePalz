const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;
const app = express();

app.use("/api/workouts", require("./routes/workoutRoutes"));
app.listen(port, () => console.log(`Sever started on port ${port}`));
