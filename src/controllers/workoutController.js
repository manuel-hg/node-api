const workoutService = require('../services/workoutService');

const getAllWorkouts = (req, res) => {
    const allWorkouts = workoutService.getAllWorkouts();
    //res.send('Get All Workouts');
    res.send({status: 200, data: allWorkouts});
};

const getOneWorkout = (req, res) => {
    const workout = workoutService.getOneWorkout(req.params.workoutId);
    res.send({status: 200, data: workout});
};

const createWorkout = (req, res) => {
    const {body} = req;
    if(
        !body.name ||
        !body.mode ||
        !body.equipment ||
        !body.exercises ||
        !body.trainerTips
    ){
        return;
    }

    const newWorkout = {
        name: body.name,
        mode: body.mode,
        equipment: body.equipment,
        exercises: body.exercises,
        trainerTips: body.trainerTips
    };

    const creatework = workoutService.createNewWorkout(newWorkout);
    res.send({status: (creatework ? 201 : 401), data: (creatework ? creatework : "Ya existe un usuario con ese nombre")});
    /*res.send(`Create workout ${body}`);*/
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