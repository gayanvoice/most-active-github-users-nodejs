
const express = require("express");
const bodyParser = require('body-parser');
const GraphQuery = require('./GraphQuery');

var srilanka = ["srilanka", "colombo", "kandy", "gampaha", "galle", "jaffna"];
var india = ["india", "bangalore", "mumbai", "delhi", "kolkata", "chennai"];
var china = ["china", "chengdu", "shenzen", "tianjin", "guangzhou", "shanghai", "beijing", "hangzhou"];
var afghansitan = ["afghanistan", "kabul", "kandahar", "herat", "mazar-e-sharif", "jalalabad", "ghazni", "nangarhar"];
var albania = ["albania", "tirana", "durres", "vlore", "elbasan", "shkoder"];

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var seconds = 1000;
setInterval(function() {
    seconds = seconds + 1000;
    console.log(seconds);
    if(seconds === (5000)){
        let query = new GraphQuery('china', china);
        query.request();
    } else if(seconds === (60000)){
        let query = new GraphQuery('india', india);
        query.request();
    } else if(seconds === (120000)){
        let query = new GraphQuery('srilanka', srilanka);
        query.request();
    } else if(seconds === (180000)){
        let query = new GraphQuery('afghanistan', afghansitan);
        query.request();
    } else if(seconds === (180000)){
        let query = new GraphQuery('albania', albania);
        query.request();
    }  else if(seconds === (240000)){
        seconds = 1000;
    }
}, seconds);



/*

var the_interval_check = 20 * 1000;
setInterval(function() {
    console.log("Check " + (the_interval_check/1000) + " seconds");
}, the_interval_check);

var the_interval_git = 24 * 60 * 60 * 1000;
setInterval(function() {
    jsonAr=[];
    b={};
    re = 0;
    next = true;
    console.log("Refresh lists");
    get(null, re);
}, the_interval_git);

*/

const API_PORT = process.env.PORT || 4000;
app.listen(API_PORT, () => console.log(`PORT ${API_PORT}`));
