//desc:   set workout
//route:  POST /api/workouts
//access: private
const setWorkout = async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a name");
  }
  res.status(200).json({ message: "Set workout !!" });
};

//desc:    Get workouts
//route:   GET /api/workouts
//access:  private
const getWorkouts = async (req, res) => {
  res.status(200).json({ message: "Get workouts!!! : ) " });
};

//desc:    Update workouts
//route:   PUT /api/workouts/:id
//access:  private
const updateWorkout = async (req, res) => {
  res.status(200).json({ message: `Update workout ${req.params.id}` });
};

//desc:    Delete workouts
//route:   DELETE /api/workouts/:id
//access:  private
const deleteWorkout = async (req, res) => {
  res.status(200).json({ message: `Delete workout ${req.params.id}` });
};

module.exports = {
  setWorkout,
  getWorkouts,
  updateWorkout,
  deleteWorkout,
};
