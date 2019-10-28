const express = require("express");
const GraphQuery = require('./GraphQuery');
const fs = require('fs');

var srilanka = ["srilanka", "colombo", "kandy", "gampaha", "galle", "jaffna", "matara"];
var india = ["india", "bangalore", "mumbai", "delhi", "kolkata", "chennai"];
var china = ["china", "chengdu", "shenzen", "tianjin", "guangzhou", "shanghai", "beijing", "hangzhou"];
var hongkong = ["hongkong"];
var taiwan = ["taiwan", "taipei"];
var albania = ["albania", "tirana", "durres", "vlore", "elbasan", "shkoder"];
var unitedstates = ["paloalto", "newyork", "california", "lasvegas", "sanfrancisco", "massachusetts", "boston", "illinois", "sunnyvale", "sanjose", "texas", "losangeles", "nyc", "georgia", "carolina", "santaclara"];
var argentina = ["argentina", "buenosaires", "cordoba", "rosario", "mendoza", "la%2Bplata", "tucuman", "salta", "resistencia"];
var australia = ["australia", "sydney", "melbourne", "brisbane", "perth", "adelaide", "canberra", "hobart"];
var austria = ["austria", "%C3%B6sterreich", "vienna", "wien", "linz", "salzburg", "graz", "innsbruck", "klagenfurt", "wels", "dornbirn"];
var finland = ["finland", "suomi", "helsinki", "tampere", "oulu", "espoo", "vantaa", "turku"];
var sweden = ["sweden", "sverige", "stockholm", "malmo", "uppsala", "guteborg", "gothenburg"];
var norway = ["norway", "norge", "oslo", "bergen"];
var germany = ["germany", "deutschland", "berlin", "frankfurt", "munich", "m%C3%BCnchen", "hamburg", "cologne"];
var netherlands = ["netherlands", "nederland", "amsterdam", "rotterdam", "hague", "utrecht", "holland", "delft"];
var ukraine = ["ukraine", "kiev", "kyiv", "kharkiv", "dnipro", "odesa", "donetsk", "zaporizhia"];
var japan = ["japan", "tokyo", "yokohama", "osaka", "nagoya", "sapporo", "kobe", "kyoto", "fukuoka", "kawasaki", "saitama", "hiroshima", "sendai"];
var russia = ["russia", "moscow", "saint%2Bpetersburg", "novosibirsk", "yekaterinburg", "nizhny%2Bnovgorod", "samara", "omsk", "kazan", "chelyabinsk", "rostov-on-don", "ufa", "volgograd"];
var estonia = ["estonia", "eesti", "tallinn", "tartu", "narva"];
var denmark = ["denmark", "danmark", "copenhagen", "aarhus", "odense", "aalborg"];
var portugal = ["portugal", "lisbon", "lisboa", "braga", "porto", "aveiro", "coimbra", "funchal", "madeira"];
var france = ["france", "paris", "marseille", "lyon", "toulouse", "nice", "nantes", "strasbourg", "montpellier", "bordeaux", "lille", "rennes", "reims"];
var spain = ["spain", "madrid", "barcelona", "valencia", "seville", "sevilla", "zaragoza", "malaga", "murcia", "palma", "bilbao", "alicante", "cordoba"];
var italy = ["italy", "italia", "rome", "roma", "milan", "naples", "napoli", "turin", "torino", "palermo", "genoa", "genova", "bologna", "florence", "firenze", "bari", "catania", "venice", "verona"];
var unitedkingdom = ["uk", "london", "birmingham", "leeds", "glasgow", "sheffield", "bradford", "manchester", "edinburgh", "liverpool", "bristol", "cardiff", "belfast", "leicester", "wakefield", "coventry", "nottingham", "newcastle"];
var croatia = ["croatia", "hrvatska", "zagreb", "split", "rijeka", "osijek", "zadar", "pula"];
var israel = ["israel", "telaviv", "jerusalem", "beersheva", "netanya", "haifa", "herzliya", "rishon"];
var indonesia = ["indonesia", "jakarta", "surabaya", "bandung", "medan", "bekasi", "semarang", "tangerang", "depok", "makassar", "palembang"];
var pakistan = ["pakistan", "karachi", "lahore", "faisalabad", "rawalpindi", "peshawar", "islamabad"];
var brazil = ["brazil", "brasil", "saopaulo", "salvador", "fortaleza", "manaus", "curitiba", "recife"];
var mexico = ["mexico", "mexico%20city", "guadalajara", "puebla", "tijuana", "mexicali", "monterrey", "hermosillo", "zapopan", "ciudad%20juarez", "chihuahua", "aguascalientes", "mx"];
var philippines = ["philippines", "pilipinas", "quezon", "manila", "davao", "caloocan", "cebu", "zamboanga", "bohol", "pasig", "bacolod", "makati", "baguio"];
var luxembourg = ["luxembourg", "esch-sur-alzette", "differdange", "dudelange", "ettelbruck", "diekirch", "wiltz", "echternach", "rumelange", "grevenmacher", "bertrange", "mamer", "capellen", "strassen", "diekirch"];
var canada = ["canada", "ottawa", "edmonton", "winnipeg", "vancouver", "toronto", "quebec", "montreal", "mississauga", "calgary"];
var newzealand = ["new%20zealand", "auckland", "wellington", "christchurch", "hamilton", "tauranga", "napier-hastings", "dunedin", "palmerston%2Bnorth", "nelson", "rotorua", "whangarei", "new%2Bplymouth", "invercargill", "whanganui", "gisborne"];
var belgium = ["belgium", "antwerp", "ghent", "charleroi", "liege", "brussels", "belgique"];
var greece = ["greece", "athens", "thessaloniki", "patras", "heraklion", "larissa", "volos", "rhodes", "ioannina", "chania", "crete"];
var singapore = ["singapore"];
var latvia = ["latvia", "latvija", "riga", "kuldiga", "ventspils", "liepaja", "liep%C4%81ja", "daugavpils", "jelgava", "jurmala"];
var romania = ["romania", "bucharest", "cluj", "iasi", "timisoara", "craiova", "brasov", "sibiu", "constanta", "oradea", "galati", "ploesti", "pitesti", "arad", "bacau"];
var malaysia = ["malaysia", "kualalumpur", "kajang", "klang", "subang", "penang", "ipoh", "selangor", "melaka", "johor", "sabah"];
var bangladesh = ["bangladesh", "dhaka", "chittagong", "khulna", "rajshahi", "barisal", "sylhet", "rangpur", "comilla", "gazipur"];
var thailand = ["thailand", "bangkok", "nonthaburi", "nakhon", "phuket", "pattaya"];
var nepal = ["Nepal", "kathmandu", "pokhara", "lalitpur", "bhaktapur", "birgunj", "bharatpur", "janakpur", "hetauda"];
var poland = ["Poland", "warsaw", "Kraków", "Wrocław", "Gdańsk", "Poznań", "Katowice", "Łódź", "Lublin"];
var bulgaria = ["Sofia", "Plovdiv", "Varna", "Burgas", "Ruse", "Pleven", "StaraZagora", "Dobrich", "Sandanski"];
var ireland = ["Ireland", "Dublin", "Galway", "Cork", "Limerick", "Belfast", "Waterford", "Londonderry", "Drogheda"];
var czechrepublic = ["CzechRepublic", "Czechia", "Prague", "Brno", "Olomouc", "Plzeň", "Ostrava", "Liberec", "CeskeBudejovice"];
var hungary = ["Hungary", "Budapest", "Pécs", "Debrecen", "Szeged", "Miskolc", "Győr", "Eger", "Székesfehérvár"];
var malta = ["Malta", "Valletta", "SaintPaul'sBay", "Mdina", "Birgu"];
var cyprus = ["Cyprus", "Nicosia", "Limassol", "Larnaca", "Farmagusta", "Paphos", "Kyrenia"];
var lithuania = ["Lithuania", "Vilnius", "Kaunas", "Klaipėda", "Šiauliai", "Panevėžys", "Alytus", "Tauragė", "Telšiai", "Visaginas"];
var slovenia = ["Slovenia", "Ljubljana", "Maribor", "Koper", "Kranj", "NovoMesto", "Velenje", "Celje", "Ptuj", "Izola"];
var slovakia = ["Slovakia", "Bratislava", "Košice", "Prešov", "Žilina", "BanskáBystrica", "Trnava", "Martin", "Nitra", "Trenčín"];
var afghanistan = ["Afghanistan", "Kabul", "Herat", "Jalalabad", "Kandahar", "Kunduz", "Ghazni"];
var bhutan = ["Bhutan", "Thimpu", "Phuntsholing", "Punakha"];
var maldives = ["Maldives", "Malé"];
var vietnam = ["Vietnam", "HoChiMinhCity", "Hanoi", "DaNang", "Hue", "HaiPhong", "BuonMaThuot", "HộiAn", "Pleiku", "Vinh"];
var cambodia = ["Cambodia", "PhnomPenh", "Battambang", "SiemReap", "KâmpóngCham"];
var laos = ["Laos", "Vientiane", "Savannakhet", "Pakse", "Thakhek"];
var myanmar = ["Myanmar", "Burma", "Yangon", "Mandalay", "Naypyitaw", "Pyinmana"];
var brunei = ["Brunai", "BandarSeriBegawan", "KualaBelait", "Seria", "Tutong", "Bangar"];
var easttimor = ["EastTimor", "TimorLeste", "Timor", "Dili", "Maliana", "Suai"];
var southkorea = ["Korea", "SouthKorea", "Seoul", "Busan", "Incheon", "Daegu", "Gwangju", "Suwon", "Ulsan", "Daejeon", "Changwon", "Goyang-si", "Hwaseong", "Bucheon", "Cheongju"];
var unitedarabemirates = ["UAE", "UnitedArabEmirates", "AbuDhabi", "Dubai", "Sharjah", "Ajman", "Fujairah"];
var saudiarabia = ["SaudiArabia", "Riyadh", "Jeddah", "Mecca", "Medina", "Dammam", "Dhahran"];
var iraq = ["Iraq", "Baghdad", "Basrah", "Mosul", "Erbil"];
var qatar = ["Qatar", "Doha"];
var kuwait = ["Kuwait", "AlJahra"];
var macedonia = ["Macedonia", "Skopje", "Veles", "Ohrid", "Bitola", "Kumanovo", "Strumica", "Tetovo", "Gostivar", "Struga", "Kichevo", "Kavadarci", "Berovo"];


const app = express();

var seconds = 1000;
setInterval(function () {
  seconds = seconds + 1000;
  if (seconds === (5 * 1000)) {
    let query = new GraphQuery('southkorea', southkorea);
    query.request();
  } else if (seconds === (5 * 60 * 1000)) {
    let query = new GraphQuery('poland', poland);
    query.request();
  } else if (seconds === (10 * 60 * 1000)) {
    let query = new GraphQuery('taiwan', taiwan);
    query.request();
  } else if (seconds === (15 * 60 * 1000)) {
    let query = new GraphQuery('unitedstates', unitedstates);
    query.request();
  } else if (seconds === (20 * 60 * 1000)) {
    let query = new GraphQuery('india', india);
    query.request();
  } else if (seconds === (25 * 60 * 1000)) {
    let query = new GraphQuery('srilanka', srilanka);
    query.request();
  } else if (seconds === (30 * 60 * 1000)) {
    let query = new GraphQuery('albania', albania);
    query.request();
  } else if (seconds === (35 * 60 * 1000)) {
    let query = new GraphQuery('argentina', argentina);
    query.request();
  } else if (seconds === (40 * 60 * 1000)) {
    let query = new GraphQuery('australia', australia);
    query.request();
  } else if (seconds === (45 * 60 * 1000)) {
    let query = new GraphQuery('austria', austria);
    query.request();
  } else if (seconds === (50 * 60 * 1000)) {
    let query = new GraphQuery('finland', finland);
    query.request();
  } else if (seconds === (55 * 60 * 1000)) {
    let query = new GraphQuery('sweden', sweden);
    query.request();
  } else if (seconds === (60 * 60 * 1000)) {
    let query = new GraphQuery('norway', norway);
    query.request();
  } else if (seconds === (65 * 60 * 1000)) {
    let query = new GraphQuery('germany', germany);
    query.request();
  } else if (seconds === (70 * 60 * 1000)) {
    let query = new GraphQuery('netherlands', netherlands);
    query.request();
  } else if (seconds === (75 * 60 * 1000)) {
    let query = new GraphQuery('ukraine', ukraine);
    query.request();
  } else if (seconds === (80 * 60 * 1000)) {
    let query = new GraphQuery('japan', japan);
    query.request();
  } else if (seconds === (85 * 60 * 1000)) {
    let query = new GraphQuery('russia', russia);
    query.request();
  } else if (seconds === (90 * 60 * 1000)) {
    let query = new GraphQuery('estonia', estonia);
    query.request();
  } else if (seconds === (95 * 60 * 1000)) {
    let query = new GraphQuery('denmark', denmark);
    query.request();
  } else if (seconds === (100 * 60 * 1000)) {
    let query = new GraphQuery('portugal', portugal);
    query.request();
  } else if (seconds === (105 * 60 * 1000)) {
    let query = new GraphQuery('france', france);
    query.request();
  } else if (seconds === (110 * 60 * 1000)) {
    let query = new GraphQuery('spain', spain);
    query.request();
  } else if (seconds === (115 * 60 * 1000)) {
    let query = new GraphQuery('italy', italy);
    query.request();
  } else if (seconds === (120 * 60 * 1000)) {
    let query = new GraphQuery('unitedkingdom', unitedkingdom);
    query.request();
  } else if (seconds === (125 * 60 * 1000)) {
    let query = new GraphQuery('croatia', croatia);
    query.request();
  } else if (seconds === (130 * 60 * 1000)) {
    let query = new GraphQuery('israel', israel);
    query.request();
  } else if (seconds === (135 * 60 * 1000)) {
    let query = new GraphQuery('indonesia', indonesia);
    query.request();
  } else if (seconds === (140 * 60 * 1000)) {
    let query = new GraphQuery('pakistan', pakistan);
    query.request();
  } else if (seconds === (145 * 60 * 1000)) {
    let query = new GraphQuery('brazil', brazil);
    query.request();
  } else if (seconds === (150 * 60 * 1000)) {
    let query = new GraphQuery('mexico', mexico);
    query.request();
  } else if (seconds === (155 * 60 * 1000)) {
    let query = new GraphQuery('philippines', philippines);
    query.request();
  } else if (seconds === (160 * 60 * 1000)) {
    let query = new GraphQuery('luxembourg', luxembourg);
    query.request();
  } else if (seconds === (165 * 60 * 1000)) {
    let query = new GraphQuery('canada', canada);
    query.request();
  } else if (seconds === (170 * 60 * 1000)) {
    let query = new GraphQuery('newzealand', newzealand);
    query.request();
  } else if (seconds === (175 * 60 * 1000)) {
    let query = new GraphQuery('belgium', belgium);
    query.request();
  } else if (seconds === (180 * 60 * 1000)) {
    let query = new GraphQuery('greece', greece);
    query.request();
  } else if (seconds === (185 * 60 * 1000)) {
    let query = new GraphQuery('singapore', singapore);
    query.request();
  } else if (seconds === (190 * 60 * 1000)) {
    let query = new GraphQuery('latvia', latvia);
    query.request();
  } else if (seconds === (195 * 60 * 1000)) {
    let query = new GraphQuery('romania', romania);
    query.request();
  } else if (seconds === (200 * 60 * 1000)) {
    let query = new GraphQuery('malaysia', malaysia);
    query.request();
  } else if (seconds === (205 * 60 * 1000)) {
    let query = new GraphQuery('bangladesh', bangladesh);
    query.request();
  } else if (seconds === (210 * 60 * 1000)) {
    let query = new GraphQuery('thailand', thailand);
    query.request();
  }
  else if (seconds === (215 * 60 * 1000)) {
    let query = new GraphQuery('china', china);
    query.request();
  } else if (seconds === (220 * 60 * 1000)) {
    let query = new GraphQuery('hongkong', hongkong);
    query.request();
  } else if (seconds === (225 * 60 * 1000)) {
    let query = new GraphQuery('bulgaria', bulgaria);
    query.request();
  } else if (seconds === (230 * 60 * 1000)) {
    let query = new GraphQuery('ireland', ireland);
    query.request();
  } else if (seconds === (235 * 60 * 1000)) {
    let query = new GraphQuery('czechrepublic', czechrepublic);
    query.request();
  } else if (seconds === (240 * 60 * 1000)) {
    let query = new GraphQuery('hungary', hungary);
    query.request();
  } else if (seconds === (245 * 60 * 1000)) {
    let query = new GraphQuery('malta', malta);
    query.request();
  } else if (seconds === (250 * 60 * 1000)) {
    let query = new GraphQuery('cyprus', cyprus);
    query.request();
  } else if (seconds === (255 * 60 * 1000)) {
    let query = new GraphQuery('lithuania', lithuania);
    query.request();
  } else if (seconds === (260 * 60 * 1000)) {
    let query = new GraphQuery('slovenia', slovenia);
    query.request();
  } else if (seconds === (265 * 60 * 1000)) {
    let query = new GraphQuery('slovakia', slovakia);
    query.request();
  } else if (seconds === (270 * 60 * 1000)) {
    let query = new GraphQuery('afghanistan', afghanistan);
    query.request();
  } else if (seconds === (275 * 60 * 1000)) {
    let query = new GraphQuery('bhutan', bhutan);
    query.request();
  } else if (seconds === (280 * 60 * 1000)) {
    let query = new GraphQuery('maldives', maldives);
    query.request();
  } else if (seconds === (285 * 60 * 1000)) {
    let query = new GraphQuery('vietnam', vietnam);
    query.request();
  } else if (seconds === (290 * 60 * 1000)) {
    let query = new GraphQuery('cambodia', cambodia);
    query.request();
  } else if (seconds === (295 * 60 * 1000)) {
    let query = new GraphQuery('laos', laos);
    query.request();
  } else if (seconds === (300 * 60 * 1000)) {
    let query = new GraphQuery('myanmar', myanmar);
    query.request();
  } else if (seconds === (305 * 60 * 1000)) {
    let query = new GraphQuery('brunei', brunei);
    query.request();
  } else if (seconds === (310 * 60 * 1000)) {
    let query = new GraphQuery('easttimor', easttimor);
    query.request();
  } else if (seconds === (315 * 60 * 1000)) {
    let query = new GraphQuery('nepal', nepal);
    query.request();
  } else if (seconds === (320 * 60 * 1000)) {
    let query = new GraphQuery('unitedarabemirates', unitedarabemirates);
    query.request();
  } else if (seconds === (325 * 60 * 1000)) {
    let query = new GraphQuery('saudiarabia', saudiarabia);
    query.request();
  } else if (seconds === (330 * 60 * 1000)) {
    let query = new GraphQuery('iraq', iraq);
    query.request();
  } else if (seconds === (335 * 60 * 1000)) {
    let query = new GraphQuery('qatar', qatar);
    query.request();
  } else if (seconds === (340 * 60 * 1000)) {
    let query = new GraphQuery('kuwait', kuwait);
    query.request();
  } else if (seconds === (350 * 60 * 1000)) {
    let query = new GraphQuery('macedonia', macedonia);
    query.request();
  }

  else if (seconds === (24 * 60 * 60 * 1000)) {
    seconds = 1000;
  }
}, seconds);

app.get('/api/:country', (req, res) => {
  res.send(fs.readFileSync('./data/' + req.params.country + '.json'));
});

const API_PORT = process.env.PORT || 4000;
app.listen(API_PORT, () => console.log(`PORT ${API_PORT}`));
