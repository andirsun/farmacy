require('./config/config');
const express = require('express');
const app = express();
const bodyParser = require('body-parser'); //for read the body petitions in api 
const mongoose = require('mongoose');
































////Port configuration
app.listen(process.env.PORT,()=>{
    console.log('Running in the port number : ',3000);
});