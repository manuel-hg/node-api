const express = require('express');
const router = express.Router();
const workoutController = require('../../controllers/workoutController');


router.get('/', workoutController.getAllWorkouts)
      .get('/:workoutId', workoutController.getOneWorkout)
      .post('/:workoutId', workoutController.createWorkout)
     .patch('/:workoutId', workoutController.updateWorkout)
     .delete('/:workout', workoutController.deleteWorkout);

module.exports = router;

/*router
    .get('/', (req, res) => {
        res.send('Get All workouts');
    })
    .get('/:workoutId', (req, res) =>{
        res.send(`Get Workout ${req.params.workoutId}`);
    })

    .post('/:workoutId', (req, res) =>{
        res.send(`Create Workout ${req.params.workoutId}`);
    })

    .patch('/:workoutId', (req, res) => {
        res.send(`Update workout ${req.params.workoutId}`);
    })

    .delete('/:workoutId', (req, res) => {
        res.send(`Delete workout ${req.params.workoutId}`);
    })*/