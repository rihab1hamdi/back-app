const express = require('express')
const bodyParser = require('body-parser')
const db_connection= require ('./db.config')
const mongoose = require('mongoose')
const expRoute = require('./routes/experienceRoute')
const resRoute = require('./routes/resumeRoute')
const langRoute= require('./routes/languageRoute')


mongoose.Promise = global.Promise;

mongoose.connect(db_connection.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

app=express();

app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())
  
/*Routers*/
app.use('/experience',expRoute)
app.use('/resume',resRoute)
app.use('/language',langRoute)
/** End Ruters */

app.listen(3000, () => console.log("Server is listening on port 3000"))