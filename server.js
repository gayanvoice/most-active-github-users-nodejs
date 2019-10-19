const express = require("express");
const GraphQuery = require('./GraphQuery');

var srilanka = ["srilanka", "colombo", "kandy", "gampaha", "galle", "jaffna"];
var india = ["india", "bangalore", "mumbai", "delhi", "kolkata", "chennai"];
var china = ["china", "chengdu", "shenzen", "tianjin", "guangzhou", "shanghai", "beijing", "hangzhou"];
var afghansitan = ["afghanistan", "kabul", "kandahar", "herat", "mazar-e-sharif", "jalalabad", "ghazni", "nangarhar"];
var albania = ["albania", "tirana", "durres", "vlore", "elbasan", "shkoder"];
var algeria = ["algeria", "algiers", "oran", "constantine", "annaba", "blida", "batna", "djelfa", "setif", "biskra", "tiaret", "relizane", "mostaganem", "tlemcen", "chlef", "jijel"];
var angola = ["angola", "luanda", "huambo", "lobito", "benguela"];
var argentina = ["argentina", "buenosaires", "cordoba", "rosario", "mendoza", "la%2Bplata", "tucuman", "salta", "resistencia"];
var australia = ["australia", "sydney", "melbourne", "brisbane", "perth", "adelaide", "canberra", "hobart"];
var austria = ["austria", "%C3%B6sterreich", "vienna", "wien", "linz", "salzburg", "graz", "innsbruck", "klagenfurt", "wels", "dornbirn"];

const app = express();

var seconds = 1000;
setInterval(function() {
    seconds = seconds + 1000;
    console.log(seconds);
    if(seconds === (5000)){
        let query = new GraphQuery('china', china);
        query.request();
    } else if(seconds === (30000)){
        let query = new GraphQuery('india', india);
        query.request();
    } else if(seconds === (60000)){
        let query = new GraphQuery('srilanka', srilanka);
        query.request();
    } else if(seconds === (90000)){
        let query = new GraphQuery('afghanistan', afghansitan);
        query.request();
    } else if(seconds === (120000)){
        let query = new GraphQuery('albania', albania);
        query.request();
    } else if(seconds === (150000)){
        let query = new GraphQuery('algeria', algeria);
        query.request();
    } else if(seconds === (180000)){
        let query = new GraphQuery('angola', angola);
        query.request();
    } else if(seconds === (210000)){
        let query = new GraphQuery('argentina', argentina);
        query.request();
    } else if(seconds === (240000)){
        let query = new GraphQuery('australia', australia);
        query.request();
    } else if(seconds === (270000)){
        let query = new GraphQuery('austria', austria);
        query.request();
    } else if(seconds === (300000)){
        seconds = 1000;
    }
}, seconds);

const API_PORT = process.env.PORT || 4000;
app.listen(API_PORT, () => console.log(`PORT ${API_PORT}`));
