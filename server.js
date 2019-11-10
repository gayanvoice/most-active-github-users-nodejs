const express = require("express");
const GraphQuery = require('./GraphQuery');
const fs = require('fs');
const util = require('./util');
var mongo = require('mongodb').MongoClient;
const assert = require('assert');
const url = "mongodb+srv://root:Fib1eHYE1HJa6yPz@cluster0-vdt7y.mongodb.net/test?retryWrites=true&w=majority";

var country = [
    {city: ["Albania", "Tirana", "durres", "vlore", "Elbasan", "Shkoder"]},
    {city: ["Argentina", "BuenosAires", "Cordoba", "Rosario", "Mendoza", "Tucuman"]},
    {city: ["Australia", "Sydney", "Melbourne", "Brisbane", "Perth", "Adelaide", "Canberra"]},
    {city: ["Austria", "Vienna", "Wien", "Linz", "Salzburg", "Graz", "Innsbruck"]},
    {city: ["Austria", "Vienna", "Wien", "Linz", "Salzburg", "Graz", "Innsbruck"]},
    {city: ["Bangladesh", "Dhaka", "Chittagong", "Khulna", "Rajshahi", "Barisal"]},
    {city: ["Belgium", "Antwerp", "Ghent", "Charleroi", "Liege", "Brussels", "Belgique"]},
    {city: ["Brazil", "Brasil", "SaoPaulo", "Salvador", "Fortaleza", "Recife"]},
    {city: ["Canada", "Ottawa", "Edmonton", "Winnipeg", "Vancouver", "Toronto", "Quebec", "Montreal", "Mississauga", "Calgary"]},
    {city: ["China", "Chengdu", "Shenzen", "Tianjin", "Guangzhou", "Shanghai", "Beijing", "Hangzhou"]},
    {city: ["Croatia", "Hrvatska", "Zagreb", "Split", "Rijeka", "Osijek", "Zadar", "Pula"]},
    {city: ["Czech_Republic", "CzechRepublic", "Czechia", "Prague", "Brno", "Olomouc", "Plzeň", "Ostrava", "Liberec"]},
    {city: ["Denmark", "Copenhagen", "Aarhus", "Odense", "Aalborg"]},
    {city: ["Estonia", "Eesti", "Tallinn", "Tartu", "Narva"]},
    {city: ["Finland", "Suomi", "Helsinki", "Tampere", "Oulu", "Espoo", "Vantaa", "Turku"]},
    {city: ["France", "Paris", "Marseille", "Lyon", "Toulouse", "Nice", "Nantes", "Strasbourg", "Montpellier", "Bordeaux", "Lille", "Rennes", "Reims"]},
    {city: ["Germany", "Deutschland", "Berlin", "Frankfurt", "Munich", "München", "Hamburg", "Cologne"]},
    {city: ["Greece", "Athens", "Thessaloniki", "Patras", "Heraklion", "Larissa", "Crete"]},
    {city: ["Hong_Kong", "HongKong"]},
    {city: ["India", "Bangalore", "Mumbai", "Delhi", "Kolkata", "Chennai"]},
    {city: ["Indonesia", "Jakarta", "Surabaya", "Bandung", "Medan"]},
    {city: ["Ireland", "Dublin", "Galway", "Cork", "Limerick", "Belfast", "Waterford", "Londonderry", "Drogheda"]},
    {city: ["Israel", "TelAviv", "Jerusalem", "Beersheva", "Netanya", "Haifa", "Herzliya", "Rishon"]},
    {city: ["Italy", "Italia", "Rome", "Milan", "Naples", "Napoli", "Turin", "Torino", "Palermo", "Genoa", "Genova", "Bologna", "Florence", "Firenze", "Bari", "Catania", "Venice", "Verona"]},
    {city: ["Japan", "Tokyo", "Yokohama", "Osaka", "Nagoya", "Sapporo", "Kobe", "Kyoto", "Fukuoka", "Kawasaki", "Saitama", "Hiroshima", "Sendai"]},
    {city: ["Latvia", "Latvija", "Riga", "Kuldiga", "Ventspils", "Liepaja"]},
    {city: ["Luxembourg", "Eifferdange", "Dudelange", "Ettelbruck"]},
    {city: ["Macedonia", "Skopje", "Veles", "Ohrid", "Bitola", "Kumanovo", "Strumica", "Tetovo", "Gostivar", "Struga", "Kichevo", "Kavadarci", "Berovo"]},
    {city: ["Malaysia", "KualaLumpur", "Kajang", "Klang", "Subang", "Penang", "Johor"]},
    {city: ["Mexico", "Guadalajara", "Puebla", "Tijuana", "Mexicali", "Monterrey", "Hermosillo"]},
    {city: ["Nepal", "Kathmandu", "Pokhara", "Lalitpur", "Bhaktapur", "Birgunj"]},
    {city: ["Netherlands", "Amsterdam", "Rotterdam", "Hague", "Utrecht", "Holland", "Delft"]},
    {city: ["New_Zealand", "NewZealand", "Auckland", "Wellington", "ChristChurch", "Hamilton", "Tauranga", "Dunedin", "Rotorua"]},
    {city: ["Norway", "Norge", "Oslo", "Bergen"]},
    {city: ["Pakistan", "Karachi", "Lahore", "Faisalabad", "Rawalpindi", "Islamabad"]},
    {city: ["Philippines", "Quezon", "Manila", "Davao", "Caloocan", "Cebu"]},
    {city: ["Poland", "warsaw", "Kraków", "Wrocław", "Gdańsk", "Poznań", "Katowice", "Łódź", "Lublin"]},
    {city: ["Portugal", "Lisbon", "Lisboa", "Braga", "Porto", "Madeira"]},
    {city: ["Romania", "Bucharest", "Cluj", "Iasi", "Timisoara", "Craiova"]},
    {city: ["Russia", "Moscow", "SaintPetersburg", "Novosibirsk", "Yekaterinburg", "Omsk", "Kazan", "Volgograd"]},
    {city: ["Serbia", "Srbija", "Србија", "Beograd", "NoviSad", "Nis", "Niš", "Kragujevac", "Užice", "Čačak", "Београд", "НовиСад", "Ниш", "Крагујевац", "Ужице", "Чачак"]},
    {city: ["Singapore"]},
    {city: ["South_Korea", "SouthKorea", "Korea", "Seoul", "Busan", "Incheon", "Daegu", "Gwangju", "Suwon", "Ulsan", "Daejeon", "Changwon", "Goyang-si", "Hwaseong", "Bucheon", "Cheongju"]},
    {city: ["Spain", "Madrid", "Barcelona", "Valencia", "Seville", "Sevilla", "Zaragoza", "Malaga"]},
    {city: ["Sri_Lanka", "SriLanka", "Colombo", "Kandy", "Gampaha", "Galle", "Jaffna", "Matara"]},
    {city: ["Sweden", "Sverige", "Stockholm", "Malmo", "Uppsala", "Guteborg", "Gothenburg"]},
    {city: ["Taiwan", "Taipei"]},
    {city: ["Thailand", "bangkok", "Nonthaburi", "Nakhon", "Phuket", "Pattaya"]},
    {city: ["Ukraine", "Kiev", "Kyiv", "Kharkiv", "Dnipro", "Odesa", "Donetsk", "Zaporizhia"]},
    {city: ["United_Arab_Emirates", "UnitedArabEmirates", "UAE", "AbuDhabi", "Dubai", "Sharjah", "Ajman", "Fujairah"]},
    {city: ["United_Kingdom", "UnitedKingdom", "UK", "London", "Birmingham", "Leeds", "Glasgow", "Sheffield", "Bradford", "Manchester", "Edinburgh", "Liverpool", "Bristol", "Cardiff", "Belfast", "Leicester", "Wakefield", "Coventry", "Nottingham", "NewCastle"]},
    {city: ["United_States", "UnitedStates", "USA", "PaloAlto", "NewYork", "NY", "California", "Ca", "LasVegas", "SanFrancisco", "Massachusetts", "Boston", "Illinois", "SunnyVale", "SanJose", "Texas", "LosAngeles", "LA", "Georgia", "Carolina", "SantaClara"]}
];

const app = express();

try {
    (async () => {
        const delay = 15000;
        // Rate limit https://developer.github.com/v4/guides/resource-limitations/
        const fx = ({city}) =>
            new Promise(resolve => setTimeout(resolve, delay, city))
                .then(data => new GraphQuery(data).request());
        for (let {city} of country) {
            await fx({city});
        }
    })();
} catch (e) {
    console.log("Error in Async");
}

// http://localhost:4000/get/China
app.get('/get/:country', (req, res) => {
    try{
        var country =  req.params.country;
        mongo.connect(url, {useUnifiedTopology: true}, function(err, client) {
            assert.equal(null, err);
            const collection = client.db("database").collection("countries");
            collection.find({
                "country": { $regex: country }
            }).toArray(function(error, doc) {
                res.send(doc);
            });
            client.close();
        });
    } catch (e) {
        console.log(e);
        // res.send(e.toString());
    }
});

app.get('/admin/delete/all', (req, res) => {
    try{
        var country =  req.params.country;
        mongo.connect(url, {useUnifiedTopology: true}, function(err, client) {
            assert.equal(null, err);
            const collection = client.db("database").collection("countries");
            collection.deleteMany();
            res.send("deleted all the records");
            client.close();
        });
    } catch (e) {
        console.log(e);
    }
});


/*
mongo.connect(url, function(err, client) {
    assert.equal(null, err);
    const collection = client.db("database").collection("countries");
    collection.insertOne({
        country: "Albania",
        dataset: "data"
    }).then(function(result) {
        // process result
        client.close();
    });
});
*/



const API_PORT = process.env.PORT || 4000;
app.listen(API_PORT, () => console.log(`PORT ${API_PORT}`));
