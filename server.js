const express = require("express");
const GraphQuery = require('./GraphQuery');
const mongo = require('mongodb').MongoClient;
const assert = require('assert');
const path = require('path');
const http = require("http");
const RateLimit = require('express-rate-limit');
const country = require('./country');

// mongo auth
const keys = ['', ''];
const url = "mongodb+srv://:@.mongodb.net/test?retryWrites=true&w=majority";
const records = [10, 100];

let start = true;
const app = express();

const limiter = new RateLimit({
    windowMs: 60*1000, // 1 minute
    max: 15
});


// app keep alive
setInterval(function() {
    http.get("http://githubstats-com.herokuapp.com/home");
    process.stdout.write('.');
}, 300000);

app.get('/admin/start', (req, res) => {
    try {
        if(start){
            start = false;
            (async () => {
                let delay = 5000, increment = 0, key = keys[0];
                // Rate limit https://developer.github.com/v4/guides/resource-limitations/

                const fx = ({city}) =>
                    new Promise(resolve => setTimeout(resolve, delay, city)).then(data =>
                        new GraphQuery(data, key, records, url).request());

                for (let {city} of country) {
                    await fx({city});
                    if(increment<(country.length/2)){
                        key = keys[0];

                    } else {
                        key = keys[1];
                    }
                    increment = increment + 1;
                    delay = 600000;
                }
                start = true;
            })();
            res.send('server.js Process is already working');
        } else {
            res.send('server.js Process is not working');
        }

        //res.send('server.js STARTED REFRESH');
        //console.log("server.js STARTED REFRESH");
    } catch (e) {
        res.send("server.js ERROR IN ASYNC");
    }
});


app.get('/contributions/:country', (req, res) => {
        try {
            let filter = req.params.country;
            console.log(filter);
            if(filter === 'all'){
                res.send(country);
            } else {
                mongo.connect(url, {useUnifiedTopology: true}, function (err, client) {
                    assert.equal(null, err);
                    const collection = client.db("database").collection("countries");
                    collection.find({
                        "country": {$regex: filter}
                    }).toArray(function (error, doc) {
                        res.send(doc);
                    });
                    client.close();
                });
            }
        } catch (e) {
            console.log(e);
            // res.send(e.toString());
        }
});

app.use(limiter, express.static(path.join(__dirname, 'client/build')));
app.get('*', function(req, res) {
    try{
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    } catch (e) {
        console.log(e);
    }

});
const API_PORT = process.env.PORT || 4000;
app.listen(API_PORT, () => console.log(`PORT ${API_PORT}`));
