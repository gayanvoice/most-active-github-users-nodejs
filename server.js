const express = require("express");
const GraphQuery = require('./GraphQuery');
const fs = require('fs');
const util = require('./util');

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
    {city: ["croatia", "Hrvatska", "Zagreb", "Split", "Rijeka", "Osijek", "Zadar", "Pula"]},
    {city: ["CzechRepublic", "Czechia", "Prague", "Brno", "Olomouc", "Plzeň", "Ostrava", "Liberec"]},
    {city: ["Denmark", "Copenhagen", "Aarhus", "Odense", "Aalborg"]},
    {city: ["Estonia", "Eesti", "Tallinn", "Tartu", "Narva"]},
    {city: ["Finland", "Suomi", "Helsinki", "Tampere", "Oulu", "Espoo", "Vantaa", "Turku"]},
    {city: ["France", "Paris", "Marseille", "Lyon", "Toulouse", "Nice", "Nantes", "Strasbourg", "Montpellier", "Bordeaux", "Lille", "Rennes", "Reims"]},
    {city: ["Germany", "Deutschland", "Berlin", "Frankfurt", "Munich", "München", "Hamburg", "Cologne"]},
    {city: ["Greece", "Athens", "Thessaloniki", "Patras", "Heraklion", "Larissa", "Crete"]},
    {city: ["HongKong"]},




];

(async() => {
  const delay = 15000;
  /*
    Rate limit https://developer.github.com/v4/guides/resource-limitations/
   */
  const fx = ({city}) =>
      new Promise(resolve => setTimeout(resolve, delay, city))
          .then(data => new GraphQuery(data).request());
  for (let {city} of country) {
    await fx({city});
  }
})();


/*
var albania = ["Albania", "Tirana", "durres", "vlore", "Elbasan", "Shkoder"];
var argentina = ["Argentina", "BuenosAires", "Cordoba", "Rosario", "Mendoza", "Tucuman"];
var australia = ["Australia", "Sydney", "Melbourne", "Brisbane", "Perth", "Adelaide", "Canberra"];
var austria = ["Austria", "Vienna", "Wien", "Linz", "Salzburg", "Graz", "Innsbruck"];
var bangladesh = ["Bangladesh", "Dhaka", "Chittagong", "Khulna", "Rajshahi", "Barisal"];
var belgium = ["Belgium", "Antwerp", "Ghent", "Charleroi", "Liege", "Brussels", "Belgique"];
var brazil = ["Brazil", "Brasil", "SaoPaulo", "Salvador", "Fortaleza", "Recife"];
var canada = ["Canada", "Ottawa", "Edmonton", "Winnipeg", "Vancouver", "Toronto", "Quebec", "Montreal", "Mississauga", "Calgary"];
var china = ["China", "Chengdu", "Shenzen", "Tianjin", "Guangzhou", "Shanghai", "Beijing", "Hangzhou"];
var croatia = ["croatia", "Hrvatska", "Zagreb", "Split", "Rijeka", "Osijek", "Zadar", "Pula"];
var czechrepublic = ["CzechRepublic", "Czechia", "Prague", "Brno", "Olomouc", "Plzeň", "Ostrava", "Liberec"];
var denmark = ["Denmark", "Copenhagen", "Aarhus", "Odense", "Aalborg"];
var estonia = ["Estonia", "Eesti", "Tallinn", "Tartu", "Narva"];
var finland = ["Finland", "Suomi", "Helsinki", "Tampere", "Oulu", "Espoo", "Vantaa", "Turku"];
var france = ["France", "Paris", "Marseille", "Lyon", "Toulouse", "Nice", "Nantes", "Strasbourg", "Montpellier", "Bordeaux", "Lille", "Rennes", "Reims"];
var germany = ["Germany", "Deutschland", "Berlin", "Frankfurt", "Munich", "München", "Hamburg", "Cologne"];
var greece = ["Greece", "Athens", "Thessaloniki", "Patras", "Heraklion", "Larissa", "Crete"];
var hongkong = ["HongKong"];
var india = ["India", "Bangalore", "Mumbai", "Delhi", "Kolkata", "Chennai"];
var indonesia = ["Indonesia", "Jakarta", "Surabaya", "Bandung", "Medan"];
var ireland = ["Ireland", "Dublin", "Galway", "Cork", "Limerick", "Belfast", "Waterford", "Londonderry", "Drogheda"];
var israel = ["Israel", "TelAviv", "Jerusalem", "Beersheva", "Netanya", "Haifa", "Herzliya", "Rishon"];
var italy = ["Italy", "Italia", "Rome", "Milan", "Naples", "Napoli", "Turin", "Torino", "Palermo", "Genoa", "Genova", "Bologna", "Florence", "Firenze", "Bari", "Catania", "Venice", "Verona"];
var japan = ["Japan", "Tokyo", "Yokohama", "Osaka", "Nagoya", "Sapporo", "Kobe", "Kyoto", "Fukuoka", "Kawasaki", "Saitama", "Hiroshima", "Sendai"];
var latvia = ["Latvia", "Latvija", "Riga", "Kuldiga", "Ventspils", "Liepaja"];
var luxembourg = ["Luxembourg", "Eifferdange", "Dudelange", "Ettelbruck"];
var macedonia = ["Macedonia", "Skopje", "Veles", "Ohrid", "Bitola", "Kumanovo", "Strumica", "Tetovo", "Gostivar", "Struga", "Kichevo", "Kavadarci", "Berovo"];
var malaysia = ["Malaysia", "KualaLumpur", "Kajang", "Klang", "Subang", "Penang", "Johor"];
var mexico = ["Mexico", "Guadalajara", "Puebla", "Tijuana", "Mexicali", "Monterrey", "Hermosillo"];
var nepal = ["Nepal", "Kathmandu", "Pokhara", "Lalitpur", "Bhaktapur", "Birgunj"];
var netherlands = ["Netherlands", "Amsterdam", "Rotterdam", "Hague", "Utrecht", "Holland", "Delft"];
var newzealand = ["NewZealand", "Auckland", "Wellington", "ChristChurch", "Hamilton", "Tauranga", "Dunedin", "Rotorua"];
var norway = ["Norway", "Norge", "Oslo", "Bergen"];
var pakistan = ["Pakistan", "Karachi", "Lahore", "Faisalabad", "Rawalpindi", "Islamabad"];
var philippines = ["Philippines", "Quezon", "Manila", "Davao", "Caloocan", "Cebu"];
var poland = ["Poland", "warsaw", "Kraków", "Wrocław", "Gdańsk", "Poznań", "Katowice", "Łódź", "Lublin"];
var portugal = ["Portugal", "Lisbon", "Lisboa", "Braga", "Porto", "Madeira"];
var romania = ["Romania", "Bucharest", "Cluj", "Iasi", "Timisoara", "Craiova"];
var russia = ["Russia", "Moscow", "SaintPetersburg", "Novosibirsk", "Yekaterinburg", "Omsk", "Kazan", "Volgograd"];
var serbia = ["Serbia", "Srbija", "Србија", "Beograd", "NoviSad", "Nis", "Niš", "Kragujevac", "Užice", "Čačak", "Београд", "НовиСад", "Ниш", "Крагујевац", "Ужице", "Чачак"];
var singapore = ["Singapore"];
var southkorea = ["Korea", "SouthKorea", "Seoul", "Busan", "Incheon", "Daegu", "Gwangju", "Suwon", "Ulsan", "Daejeon", "Changwon", "Goyang-si", "Hwaseong", "Bucheon", "Cheongju"];
var spain = ["Spain", "Madrid", "Barcelona", "Valencia", "Seville", "Sevilla", "Zaragoza", "Malaga"];
var srilanka = ["SriLanka", "Colombo", "Kandy", "Gampaha", "Galle", "Jaffna", "Matara"];
var sweden = ["Sweden", "Sverige", "Stockholm", "Malmo", "Uppsala", "Guteborg", "Gothenburg"];
var taiwan = ["Taiwan", "Taipei"];
var thailand = ["Thailand", "bangkok", "Nonthaburi", "Nakhon", "Phuket", "Pattaya"];
var ukraine = ["Ukraine", "Kiev", "Kyiv", "Kharkiv", "Dnipro", "Odesa", "Donetsk", "Zaporizhia"];
var unitedarabemirates = ["UAE", "UnitedArabEmirates", "AbuDhabi", "Dubai", "Sharjah", "Ajman", "Fujairah"];
var unitedkingdom = ["UnitedKingdom", "UK", "London", "Birmingham", "Leeds", "Glasgow", "Sheffield", "Bradford", "Manchester", "Edinburgh", "Liverpool", "Bristol", "Cardiff", "Belfast", "Leicester", "Wakefield", "Coventry", "Nottingham", "NewCastle"];
var unitedstates = ["UnitedStates", "USA", "PaloAlto", "NewYork", "NY", "California", "Ca", "LasVegas", "SanFrancisco", "Massachusetts", "Boston", "Illinois", "SunnyVale", "SanJose", "Texas", "LosAngeles", "LA", "Georgia", "Carolina", "SantaClara"];
*/
const app = express();

// NEEDS SOME MODIFICATION OVER HERE REPLACE THE INTERVAL

/*
  GITHUB GRAPHQL API ONLY TAKES 5K REQUESTS IN ONE HOUR
  TO CALCUALTE THE CONTRIBUTION WE NEED ATLEAST TOP 1000 USERS
  TO GET THE LIST SCRIPT SENDS 100 REQUESTS WITH 10 USERS IT TAKES 3 MINUTES IN THE SERVER
  IF WE INCREASE THE NUMBER OF USERS IT CRASHES WITH 500 SERVER ERROR
  
  REPLACE THE BELOW BAD CODE IF ELSE (I KNOW, I IMPLEMENTED THIS AS TEMPERARY)
  MACHINE CLOCK CAN NOT BE TRUSTED AND THE BELOW METHOD IS NOT RELIABLE
*/


/*
var seconds = 1000;
setInterval(function () {
  seconds = seconds + 1000;
  if (seconds === (5 * 1000)) {
    let query = new GraphQuery('albania', albania);
    query.request();
  } else if (seconds === (5 * 60 * 1000)) {
    let query = new GraphQuery('argentina', argentina);
    query.request();
  } else if (seconds === (10 * 60 * 1000)) {
    let query = new GraphQuery('australia', australia);
    query.request();
  } else if (seconds === (15 * 60 * 1000)) {
    let query = new GraphQuery('austria', austria);
    query.request();
  } else if (seconds === (20 * 60 * 1000)) {
    let query = new GraphQuery('bangladesh', bangladesh);
    query.request();
  } else if (seconds === (25 * 60 * 1000)) {
    let query = new GraphQuery('belgium', belgium);
    query.request();
  } else if (seconds === (30 * 60 * 1000)) {
    let query = new GraphQuery('brazil', brazil);
    query.request();
  } else if (seconds === (35 * 60 * 1000)) {
    let query = new GraphQuery('canada', canada);
    query.request();
  } else if (seconds === (40 * 60 * 1000)) {
    let query = new GraphQuery('china', china);
    query.request();
  } else if (seconds === (45 * 60 * 1000)) {
    let query = new GraphQuery('croatia', croatia);
    query.request();
  } else if (seconds === (50 * 60 * 1000)) {
    let query = new GraphQuery('czechrepublic', czechrepublic);
    query.request();
  } else if (seconds === (55 * 60 * 1000)) {
    let query = new GraphQuery('denmark', denmark);
    query.request();
  } else if (seconds === (60 * 60 * 1000)) {
    let query = new GraphQuery('estonia', estonia);
    query.request();
  } else if (seconds === (65 * 60 * 1000)) {
    let query = new GraphQuery('finland', finland);
    query.request();
  } else if (seconds === (70 * 60 * 1000)) {
    let query = new GraphQuery('france', france);
    query.request();
  } else if (seconds === (75 * 60 * 1000)) {
    let query = new GraphQuery('germany', germany);
    query.request();
  } else if (seconds === (80 * 60 * 1000)) {
    let query = new GraphQuery('greece', greece);
    query.request();
  } else if (seconds === (85 * 60 * 1000)) {
    let query = new GraphQuery('hongkong', hongkong);
    query.request();
  } else if (seconds === (90 * 60 * 1000)) {
    let query = new GraphQuery('india', india);
    query.request();
  } else if (seconds === (95 * 60 * 1000)) {
    let query = new GraphQuery('indonesia', indonesia);
    query.request();
  } else if (seconds === (100 * 60 * 1000)) {
    let query = new GraphQuery('ireland', ireland);
    query.request();
  } else if (seconds === (105 * 60 * 1000)) {
    let query = new GraphQuery('israel', israel);
    query.request();
  } else if (seconds === (110 * 60 * 1000)) {
    let query = new GraphQuery('italy', italy);
    query.request();
  } else if (seconds === (115 * 60 * 1000)) {
    let query = new GraphQuery('japan', japan);
    query.request();
  } else if (seconds === (120 * 60 * 1000)) {
    let query = new GraphQuery('latvia', latvia);
    query.request();
  } else if (seconds === (125 * 60 * 1000)) {
    let query = new GraphQuery('luxembourg', luxembourg);
    query.request();
  } else if (seconds === (130 * 60 * 1000)) {
    let query = new GraphQuery('macedonia', macedonia);
    query.request();
  } else if (seconds === (135 * 60 * 1000)) {
    let query = new GraphQuery('malaysia', malaysia);
    query.request();
  } else if (seconds === (140 * 60 * 1000)) {
    let query = new GraphQuery('mexico', mexico);
    query.request();
  } else if (seconds === (145 * 60 * 1000)) {
    let query = new GraphQuery('nepal', nepal);
    query.request();
  } else if (seconds === (150 * 60 * 1000)) {
    let query = new GraphQuery('netherlands', netherlands);
    query.request();
  } else if (seconds === (155 * 60 * 1000)) {
    let query = new GraphQuery('newzealand', newzealand);
    query.request();
  }  else if (seconds === (160 * 60 * 1000)) {
    let query = new GraphQuery('norway', norway);
    query.request();
  } else if (seconds === (165 * 60 * 1000)) {
    let query = new GraphQuery('pakistan', pakistan);
    query.request();
  } else if (seconds === (170 * 60 * 1000)) {
    let query = new GraphQuery('philippines', philippines);
    query.request();
  } else if (seconds === (175 * 60 * 1000)) {
    let query = new GraphQuery('poland', poland);
    query.request();
  } else if (seconds === (180 * 60 * 1000)) {
    let query = new GraphQuery('portugal', portugal);
    query.request();
  } else if (seconds === (185 * 60 * 1000)) {
    let query = new GraphQuery('romania', romania);
    query.request();
  } else if (seconds === (190 * 60 * 1000)) {
    let query = new GraphQuery('russia', russia);
    query.request();
  } else if (seconds === (195 * 60 * 1000)) {
    let query = new GraphQuery('serbia', serbia);
    query.request();
  } else if (seconds === (200 * 60 * 1000)) {
    let query = new GraphQuery('singapore', singapore);
    query.request();
  } else if (seconds === (205 * 60 * 1000)) {
    let query = new GraphQuery('southkorea', southkorea);
    query.request();
  } else if (seconds === (210 * 60 * 1000)) {
    let query = new GraphQuery('spain', spain);
    query.request();
  } else if (seconds === (215 * 60 * 1000)) {
    let query = new GraphQuery('srilanka', srilanka);
    query.request();
  } else if (seconds === (220 * 60 * 1000)) {
    let query = new GraphQuery('sweden', sweden);
    query.request();
  } else if (seconds === (225 * 60 * 1000)) {
    let query = new GraphQuery('taiwan', taiwan);
    query.request();
  } else if (seconds === (230 * 60 * 1000)) {
    let query = new GraphQuery('thailand', thailand);
    query.request();
  } else if (seconds === (235 * 60 * 1000)) {
    let query = new GraphQuery('ukraine', ukraine);
    query.request();
  } else if (seconds === (240 * 60 * 1000)) {
    let query = new GraphQuery('unitedarabemirates', unitedarabemirates);
    query.request();
  } else if (seconds === (245 * 60 * 1000)) {
    let query = new GraphQuery('unitedkingdom', unitedkingdom);
    query.request();
  } else if (seconds === (250 * 60 * 1000)) {
    let query = new GraphQuery('unitedstates', unitedstates);
    query.request();
  }

  else if (seconds === (24 * 60 * 60 * 1000)) {
    seconds = 1000;
  }
}, seconds);
*/
app.get('/api/:country', (req, res) => {
    try{
        res.send(fs.readFileSync('./data/' + req.params.country + '.json'));
    } catch (e) {
        console.log(util.getDateTime(), req.params.country, "does not exist");
    }

});

const API_PORT = process.env.PORT || 4000;
app.listen(API_PORT, () => console.log(`PORT ${API_PORT}`));
