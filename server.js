//import express from "express"
const express = require("express");
//dotenv file config
const dotenv = require('dotenv').config()
// console.log(express)
const cors = require('cors');
//invoke express
const app = express();
// console.log(app)
//error middleware
const {errorHandler} = require('./middleware/errorMiddleware')
const PORT = process.env.PORT || 8001;
//name used in database for project
const DB = "goals"


//-- MIDDLEWARE---
// make sure these lines are above any app.get or app.post code blocks
app.use(cors(), express.json(), express.urlencoded({ extended: false })); // This is new








// Connect to database using mongoose
require("./config/mongoose.config")(DB);


// // //modularize routes
// require("./routes/goals.routes")(app);
app.use('/api/goals', require('./routes/goalRoutes'))

app.use('/api/users', require('./routes/userRoutes'))

app.use(errorHandler)


// ! starts the server
//always at the bottom of our app

app.listen(PORT, () => console.log(`>> SERVER is up on port ${PORT} and is listening