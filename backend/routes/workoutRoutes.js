const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  res.status(200).json({ message: "Set goal" });
});
router.get("/", (req, res) => {
  res.status(200).json({ message: "Get workouts!!" });
});
router.put("/:id", (req, res) => {
  res.status(200).json({ message: `Update workout ${req.params.id}` });
});
router.delete("/:id", (req, res) => {
  res.status(200).json({ message: `Delete workout ${req.params.id}` });
});

module.exports = router;
