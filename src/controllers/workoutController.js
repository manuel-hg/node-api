const workoutService = require('../services/workoutService');

const getAllWorkouts = (req, res) => {
    const allWorkouts = workoutService.getAllWorkouts();
    //res.send('Get All Workouts');
    res.send({status: 200, data: allWorkouts});
};

const getOneWorkout = (req, res) => {
    const workout = workoutService.getOneWorkout;
    res.send(`Get Workout ${req.params.workoutId}`);
};

const createWorkout = (req, res) => {
    const createork = workoutService.createNewWorkout(req.params.workoutId);
    res.send(`Create workout ${req.params.workoutId}`);
};

const updateWorkout = (req, res) => {
    const updatedWorkout = workoutService.updateOneWorkout(req.params, req.params.workoutId);
    res.send(`Update workout ${req.params.workoutId}`);
};

const deleteWorkout = (req, res) => {
    const updatedWorkout = workoutService.deleteOneWorkout(req.params, req.params.workoutId);
    res.send(`Delete workoute ${req.parans,workoutId}`);
};

module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createWorkout,
    updateWorkout,
    deleteWorkout
}