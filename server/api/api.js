const express = require("express"),
mongo = require('mongodb').MongoClient,
assert = require('assert'),
router = express.Router(),
GraphQuery = require('../graphql/GraphQuery'),
countries = require('../countriesData/countries');




const keys = ['', ''];
const url = "mongodb+srv://:@cluster0-vdt7y.mongodb.net/test?retryWrites=true&w=majority";
var start = true;
const records = [10, 100];

router.get('/', function(req, res) {
    res.send('Hello Gtihub');  
})


router.get('/admin/start', (req, res) => {

    try {
        if(start){
            start = false;
            (async () => {
                var delay = 5000, increment = 0, key = keys[0];
                // Rate limit https://developer.github.com/v4/guides/resource-limitations/

                const fx = ({city}) =>
                    new Promise(resolve => setTimeout(resolve, delay, city)).then(data =>
                        new GraphQuery(data, key, records, url).request());

                for (let {city} of countries) {
                    await fx({city});
                    if(increment<(countries.length/2)){
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
        res.send("server.js ERROR IN ASYNC"+e);
    }
});


router.get('/contributions/:country', (req, res) => {
        try {
            var filter = req.params.country;
            console.log(filter);
            if(filter === 'all'){
                res.send(countries);
            } else {
                mongo.connect(url, {useUnifiedTopology: true}, function (err, client) {
                    assert.equal(null, err);
                    const collection = client.db("database").collection("countries");
               
                    collection.find({
                    "country": {$regex: filter}
                    }).toArray(function (error, docs) {
                        console.log('doc country'+ JSON.stringify(docs));
                        if(docs)
                        {
                            res.status(200).json(docs)
                        }else{
                            res.json([])
                        }

                      
                    });
                    client.close();
                });
            }
        } catch (e) {
            console.log(e);
             res.status(500).send(e.toString());
        }
});

module.exports =router;