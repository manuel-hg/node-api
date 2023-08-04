const express = require('express');
//const v1Router = require('./v1/routes');
const v1WoroutRoutes = require('./v1/routes/workoutRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

/*app.get('/', (req, res) => {  // sin versionado de rutas
    res.send("<h1>Hello world</h1>");
});*/

//app.use("/api/v1",v1Router);

app.use('/api/v1/workouts', v1WoroutRoutes);



app.listen(PORT, () => {
    console.log(`🚀 Server listening on port ${PORT}`);
});