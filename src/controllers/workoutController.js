const workoutService = require('../services/workoutService');

const getAllWorkouts = (req, res) => {
    const allWorkouts = workoutService.getAllWorkouts;
    res.send('Get All Workouts');
};

const getOneWorkout = (req, res) => {
    const oneWorkout = workoutService.getOneWorkout;
    res.send(`Get Workout ${req.params.workoutId}`);
};

const createWorkout = (req, res) => {
    const createdwork workoutService.createdwork(req,.params.workoutId);
    res.send(`Create workout ${req.params.workoutId}`);
};

const updateWorkout = (req, res) => {
    res.send(`Update workout ${req.params.workoutId}`);
};

const deleteWorkout = (req, res) => {
    res.send(`Delete workoute ${req.parans,workoutId}`);
};

module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createWorkout,
    updateWorkout,
    deleteWorkout
}