
const express = require("express");
const bodyParser = require('body-parser');

const GraphQuery = require('./GraphQuery');


var lka = ["srilanka", "colombo", "kandy", "gampaha", "galle", "jaffna"];
var ind = ["india", "bangalore", "mumbai", "delhi", "kolkata", "chennai"];

var srilanka = 'sri_lanka', india = 'india';
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/data/sri_lanka', (req, res) => {
    const data = require('./client/src/data/sri_lanka');
    res.send({ express: data });
});

let query = new GraphQuery(india, ind);
query.request();



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
