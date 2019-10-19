
const express = require("express");
const bodyParser = require('body-parser');
const GraphQuery = require('./GraphQuery');

var lka = ["srilanka", "colombo", "kandy", "gampaha", "galle", "jaffna"];
var ind = ["india", "bangalore", "mumbai", "delhi", "kolkata", "chennai"];
var chn = ["china", "beijing", "shanghai", "delhi", "kolkata", "chennai"];

var china = 'china', srilanka = 'sri_lanka', india = 'india';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var seconds = 1000;
setInterval(function() {
    seconds = seconds + 1000;
    console.log(seconds);
    if(seconds === (5000)){
        let query = new GraphQuery(china, chn);
        query.request();
    } else if(seconds === (60000)){
        let query = new GraphQuery(india, ind);
        query.request();
    } else if(seconds === (120000)){
        let query = new GraphQuery(srilanka, lka);
        query.request();
    }  else if(seconds === (180000)){
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
