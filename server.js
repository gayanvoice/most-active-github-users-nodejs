const express = require("express");
const GraphQuery = require('./GraphQuery');
var mongo = require('mongodb').MongoClient;
const assert = require('assert');
const path = require('path');
const http = require("http");
const RateLimit = require('express-rate-limit');
const fs = require('fs');
const template = fs.readFileSync(path.resolve('temp.svg'), 'utf8');
const HEAD = require('./headers'); // stackoverflow.com/a/2068407/1148249

// mongo auth
const keys = ['', ' '];
const url = "mongodb+srv://:@cluster0-vdt7y.mongodb.net/test?retryWrites=true&w=majority";
const records = [10, 100];

const country = [
    {city: ["Albania", "Tirana", "durres", "vlore", "Elbasan", "Shkoder"]},
    {city: ["Algeria", "Algiers"]},
    {city: ["Argentina", "BuenosAires", "Cordoba", "Rosario", "Mendoza", "Tucuman"]},
    {city: ["Australia", "Sydney", "Melbourne", "Brisbane", "Perth", "Adelaide", "Canberra"]},
    {city: ["Austria", "Vienna", "Wien", "Linz", "Salzburg", "Graz", "Innsbruck"]},
    {city: ["Bangladesh", "Dhaka", "Chittagong", "Khulna", "Rajshahi", "Barisal"]},
    {city: ["Belgium", "Antwerp", "Ghent", "Charleroi", "Liege", "Brussels", "Belgique"]},
    {city: ["Brazil", "Brasil", "SaoPaulo", "Salvador", "Fortaleza", "Recife"]},
    {city: ["Bulgaria", "Sofia", "Plovdiv", "Varna", "Burgas", "Ruse", "Veliko Tarnovo"]},
    {city: ["Canada", "Ottawa", "Winnipeg", "Vancouver", "Toronto", "Quebec"]},
    {city: ["China", "Chengdu", "Shenzen", "Tianjin", "Guangzhou", "Shanghai", "Beijing", "Hangzhou"]},
    {city: ["Croatia", "Hrvatska", "Zagreb", "Split", "Rijeka", "Osijek", "Zadar", "Pula"]},
    {city: ["Czech_Republic", "CzechRepublic", "Czechia", "Prague", "Brno", "Olomouc", "Plzeň", "Ostrava", "Liberec"]},
    {city: ["Denmark", "Copenhagen", "Aarhus", "Odense", "Aalborg"]},
    {city: ["Estonia", "Eesti", "Tallinn", "Tartu", "Narva"]},
    {city: ["Finland", "Suomi", "Helsinki", "Tampere", "Oulu", "Espoo", "Vantaa", "Turku"]},
    {city: ["France", "Paris", "Marseille", "Lyon", "Toulouse", "Nice", "Lille"]},
    {city: ["Germany", "Berlin", "Frankfurt", "Munich", "Hamburg", "Cologne"]},
    {city: ["Greece", "Athens", "Thessaloniki", "Patras", "Heraklion", "Larissa", "Crete"]},
    {city: ["Hong_Kong", "HongKong", "Hong+Kong", "Kowloon"]},
    {city: ["India", "Bangalore", "Mumbai", "Delhi", "Kolkata", "Chennai"]},
    {city: ["Indonesia", "Jakarta", "Surabaya", "Bandung", "Medan"]},
    {city: ["Ireland", "Dublin", "Galway", "Cork", "Limerick", "Belfast", "Waterford", "Londonderry", "Drogheda"]},
    {city: ["Israel", "TelAviv", "Jerusalem", "Beersheva", "Netanya", "Haifa", "Herzliya", "Rishon"]},
    {city: ["Italy", "Italia", "Rome", "Milan", "Naples", "Napoli", "Turin", "Torino", "Palermo", "Genoa", "Genova", "Bologna", "Florence", "Firenze", "Bari", "Catania", "Venice", "Verona"]},
    {city: ["Japan", "Tokyo", "Yokohama", "Osaka", "Nagoya", "Kyoto", "Hiroshima"]},
    {city: ["Latvia", "Latvija", "Riga", "Kuldiga", "Ventspils", "Liepaja"]},
    {city: ["Luxembourg", "Eifferdange", "Dudelange", "Ettelbruck"]},
    {city: ["Macedonia", "Skopje", "Veles", "Ohrid", "Bitola", "Kumanovo", "Strumica", "Tetovo", "Gostivar", "Struga", "Kichevo", "Kavadarci", "Berovo"]},
    {city: ["Malaysia", "KualaLumpur", "Kajang", "Klang", "Subang", "Penang", "Johor"]},
    {city: ["Mexico", "Guadalajara", "Puebla", "Tijuana", "Mexicali", "Monterrey", "Hermosillo"]},
    {city: ["Mongolia", "Mongolia", "Ulaanbaatar", "Erdenet", "Darkhan", "Choibalsan"]},
    {city: ["Morocco", "Morocco", "Casablanca", "Rabat", "Marrakesh", "Agadir"]},
    {city: ["Myanmar", "Yangon", "Mandalay", "Taunggyi"]},
    {city: ["Nepal", "Kathmandu", "Pokhara", "Lalitpur", "Bhaktapur", "Birgunj"]},
    {city: ["Netherlands", "Amsterdam", "Rotterdam", "Hague", "Utrecht", "Holland", "Delft"]},
    {city: ["New_Zealand", "NewZealand", "Auckland", "Wellington", "ChristChurch", "Hamilton", "Tauranga", "Dunedin", "Rotorua"]},
    {city: ["Norway", "Norge", "Oslo", "Bergen"]},
    {city: ["Nigeria", "Lagos", "Abuja", "Ondo", "Oyo", "Ogun"]},
    {city: ["Pakistan", "Karachi", "Lahore", "Faisalabad", "Rawalpindi", "Islamabad"]},
    {city: ["Philippines", "Quezon", "Manila", "Davao", "Caloocan", "Cebu"]},
    {city: ["Poland", "warsaw", "Kraków", "Wrocław", "Gdańsk", "Poznań", "Katowice", "Łódź", "Lublin"]},
    {city: ["Portugal", "Lisbon", "Lisboa", "Braga", "Madeira"]},
    {city: ["Romania", "Bucharest", "Cluj", "Iasi", "Timisoara", "Craiova"]},
    {city: ["Russia", "Moscow", "SaintPetersburg", "Novosibirsk", "Yekaterinburg", "Omsk", "Kazan", "Volgograd"]},
    {city: ["Rwanda", "Kigali"]},
    {city: ["Serbia", "Srbija", "Србија", "Beograd", "NoviSad", "Nis", "Niš", "Kragujevac", "Užice", "Čačak", "Београд", "НовиСад", "Ниш", "Крагујевац", "Ужице", "Чачак"]},
    {city: ["Singapore"]},
    {city: ["South_Korea", "SouthKorea", "Korea", "Seoul", "Busan", "Incheon", "Daegu", "Gwangju", "Suwon", "Ulsan", "Daejeon", "Changwon", "Goyang-si", "Hwaseong", "Bucheon", "Cheongju"]},
    {city: ["Spain", "Madrid", "Barcelona", "Valencia", "Seville", "Sevilla", "Zaragoza", "Malaga"]},
    {city: ["Sri_Lanka", "SriLanka", "Colombo", "Kandy", "Gampaha", "Galle", "Jaffna", "Matara"]},
    {city: ["Sweden", "Sverige", "Stockholm", "Malmo", "Uppsala", "Guteborg", "Gothenburg"]},
    {city: ["Taiwan", "Taipei"]},
    {city: ["Thailand", "bangkok", "Nonthaburi", "Nakhon", "Phuket", "Pattaya"]},
    {city: ["Tunisia", "Tunis"]},
    {city: ["Ukraine", "Kiev", "Kyiv", "Kharkiv", "Dnipro", "Odesa", "Donetsk", "Zaporizhia"]},
    {city: ["United_Arab_Emirates", "UnitedArabEmirates", "UAE", "AbuDhabi", "Dubai", "Sharjah", "Ajman", "Fujairah"]},
    {city: ["United_Kingdom", "UnitedKingdom", "London", "Birmingham", "Glasgow"]},
    {city: ["United_States", "UnitedStates", "PaloAlto", "NewYork", "California", "SanFrancisco"]},
    {city: ["Vietnam", "HoChiMinh", "Hanoi", "Saigon", "DaNang", "NhaTrang", "HaiPhong"]},
];
let start = true;
const app = express();

const limiter = new RateLimit({
    windowMs: 60 * 1000, // 1 minute
    max: 15
});


// app keep alive
setInterval(function () {
    http.get("http://githubstats-com.herokuapp.com/home");
    process.stdout.write('.');
}, 300000);

app.get('/admin/start', (req, res) => {
    try {
        if (start) {
            start = false;
            (async () => {
                var delay = 5000, increment = 0, key = keys[0];
                // Rate limit https://developer.github.com/v4/guides/resource-limitations/

                const fx = ({city}) =>
                    new Promise(resolve => setTimeout(resolve, delay, city)).then(data =>
                        new GraphQuery(data, key, records, url).request());

                for (let {city} of country) {
                    await fx({city});
                    if (increment < (country.length / 2)) {
                        key = keys[0];

                    } else {
                        key = keys[1];
                    }
                    increment = increment + 1;
                    delay = 600000;
                }
                start = true;
            })();
            res.send('true');
        } else {
            res.send('false');
        }

        //res.send('server.js STARTED REFRESH');
        //console.log("server.js STARTED REFRESH");
    } catch (e) {
        res.send("error");
    }
});


app.get('/contributions/:country', (req, res) => {
    try {
        var filter = req.params.country;
        console.log(filter);
        if (filter === 'all') {
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

app.get('/get/:user/:repository', (req, res) => {
    try {
        const user = req.params.user;
        const repository = req.params.repository;

        mongo.connect(url, {useUnifiedTopology: true}, function (err, client) {
            assert.equal(null, err);
            const collection = client.db("database").collection("repositories");
            collection.findOneAndUpdate(
                {
                    "user": user,
                    "repository": repository
                },
                { "$inc": { data : 1 }},
                { new: true, setDefaultsOnInsert: true },
                function(err, userUpdate) {
                    if (err) {
                        res.send("error");
                    } else if (typeof userUpdate == null) {
                        res.send("null");
                    }  else if (typeof userUpdate != null) {
                        if( userUpdate.value.data === undefined){
                            res.writeHead(200, HEAD);
                            res.end(makeSvg(0));
                        } else {
                            res.writeHead(200, HEAD);
                            res.end(makeSvg(userUpdate.value.data));
                        }




                        //
                        // res.send(userUpdate.value);
                    }
                }
            );
            client.close();
        });
    } catch (e) {
        console.log(e);
    }
});

const makeSvg = (count) => {
    return template.replace('{count}', count);
};

app.get('/set/:user/:repository', (req, res) => {
    try {
        const user = req.params.user;
        const repository = req.params.repository;
        console.log(user, repository);
        const data = {
            user: user,
            repository: repository,
        };
        const response = {
            status: true
        };
        mongo.connect(url, {useUnifiedTopology: true}, function (err, client, upserted) {
            assert.equal(null, err);
            const collection = client.db("database").collection("repositories");
            collection.updateOne(
                {user: user, repository: repository},
                {$set: data},
                {upsert: true})
                .then(function () {
                    res.send(response);
                });
            client.close();
        });

    } catch (e) {
        console.log(e);
    }
});


app.use(limiter, express.static(path.join(__dirname, 'client/build')));
app.get('*', function (req, res) {
    try {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    } catch (e) {
        console.log(e);
    }

});
const API_PORT = process.env.PORT || 4000;
app.listen(API_PORT, () => console.log(`PORT ${API_PORT}`));
