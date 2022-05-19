/*********************************************************************************
* WEB322 – Assignment 1
* I declare that this assignment is my own work in accordance with Seneca Academic Policy.
* No part of this assignment has been copied manually or electronically from any other source
* (including web sites) or distributed to other students.
*
* Name: Usama Sidat   Student ID: 131034217   Date: 16th May 2022
*
* Online (Heroku) URL:  https://agile-tor-19049.herokuapp.com/
*
********************************************************************************/ 
var HTTP_PORT = process.env.PORT || 8080;
var express = require("express");
var app = express();

// setup a 'route' to listen on the default url path
app.get("/", (req, res) => {
    res.send("Name: Usama Sidat, ID: 131034217");
});

// setup http server to listen on HTTP_PORT
app.listen(HTTP_PORT);