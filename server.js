const express = require("express");
const GraphQuery = require('./GraphQuery');

var srilanka = ["srilanka", "colombo", "kandy", "gampaha", "galle", "jaffna"];
var india = ["india", "bangalore", "mumbai", "delhi", "kolkata", "chennai"];
var china = ["china", "chengdu", "shenzen", "tianjin", "guangzhou", "shanghai", "beijing", "hangzhou"];
var albania = ["albania", "tirana", "durres", "vlore", "elbasan", "shkoder"];
var algeria = ["algeria", "algiers", "oran", "constantine", "annaba", "blida", "batna", "djelfa", "setif", "biskra", "tiaret", "relizane", "mostaganem", "tlemcen", "chlef", "jijel"];
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
var croatia =  ["croatia", "hrvatska", "zagreb", "split", "rijeka", "osijek", "zadar", "pula"];
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
var singapore  = ["singapore"];
var latvia = ["latvia", "latvija", "riga", "kuldiga", "ventspils", "liepaja", "liep%C4%81ja", "daugavpils", "jelgava", "jurmala"];
var romania = ["romania", "bucharest", "cluj", "iasi", "timisoara", "craiova", "brasov", "sibiu", "constanta", "oradea", "galati", "ploesti", "pitesti", "arad", "bacau"];
var malaysia = ["malaysia", "kualalumpur", "kajang", "klang", "subang", "penang", "ipoh", "selangor", "melaka", "johor", "sabah"];
var bangladesh  = ["bangladesh", "dhaka", "chittagong", "khulna", "rajshahi", "barisal", "sylhet", "rangpur", "comilla", "gazipur"];
var thailand = ["thailand", "bangkok", "nonthaburi", "nakhon", "phuket", "pattaya"];

const app = express();

var seconds = 1000;
setInterval(function() {
    seconds = seconds + 1000;
    console.log(seconds);
    if(seconds === (5000)){
        let query = new GraphQuery('china', china);
        query.request();
    } else if(seconds === (10000)){
        let query = new GraphQuery('india', india);
        query.request();
    } else if(seconds === (15000)){
        let query = new GraphQuery('srilanka', srilanka);
        query.request();
    } else if(seconds === (25000)){
        let query = new GraphQuery('albania', albania);
        query.request();
    } else if(seconds === (30000)){
        let query = new GraphQuery('algeria', algeria);
        query.request();
    } else if(seconds === (40000)){
        let query = new GraphQuery('argentina', argentina);
        query.request();
    } else if(seconds === (45000)){
        let query = new GraphQuery('australia', australia);
        query.request();
    } else if(seconds === (50000)){
        let query = new GraphQuery('austria', austria);
        query.request();
    } else if(seconds === (55000)){
        let query = new GraphQuery('finland', finland);
        query.request();
    } else if(seconds === (60000)){
        let query = new GraphQuery('sweden', sweden);
        query.request();
    } else if(seconds === (65000)){
        let query = new GraphQuery('norway', norway);
        query.request();
    } else if(seconds === (70000)){
        let query = new GraphQuery('germany', germany);
        query.request();
    } else if(seconds === (75000)){
        let query = new GraphQuery('netherlands', netherlands);
        query.request();
    } else if(seconds === (80000)){
        let query = new GraphQuery('ukraine', ukraine);
        query.request();
    } else if(seconds === (85000)){
        let query = new GraphQuery('japan', japan);
        query.request();
    } else if(seconds === (90000)){
        let query = new GraphQuery('russia', russia);
        query.request();
    } else if(seconds === (95000)){
        let query = new GraphQuery('estonia', estonia);
        query.request();
    } else if(seconds === (100000)){
        let query = new GraphQuery('denmark', denmark);
        query.request();
    } else if(seconds === (105000)){
        let query = new GraphQuery('portugal', portugal);
        query.request();
    } else if(seconds === (110000)){
        let query = new GraphQuery('france', france);
        query.request();
    } else if(seconds === (115000)){
        let query = new GraphQuery('spain', spain);
        query.request();
    } else if(seconds === (120000)){
        let query = new GraphQuery('italy', italy);
        query.request();
    } else if(seconds === (125000)){
        let query = new GraphQuery('unitedkingdom', unitedkingdom);
        query.request();
    } else if(seconds === (130000)){
        let query = new GraphQuery('croatia', croatia);
        query.request();
    } else if(seconds === (135000)){
        let query = new GraphQuery('israel', israel);
        query.request();
    } else if(seconds === (140000)){
        let query = new GraphQuery('indonesia', indonesia);
        query.request();
    } else if(seconds === (145000)){
        let query = new GraphQuery('pakistan', pakistan);
        query.request();
    } else if(seconds === (150000)){
        let query = new GraphQuery('brazil', brazil);
        query.request();
    } else if(seconds === (155000)){
        let query = new GraphQuery('mexico', mexico);
        query.request();
    } else if(seconds === (160000)){
        let query = new GraphQuery('philippines', philippines);
        query.request();
    } else if(seconds === (165000)){
        let query = new GraphQuery('luxembourg', luxembourg);
        query.request();
    } else if(seconds === (170000)){
        let query = new GraphQuery('canada', canada);
        query.request();
    } else if(seconds === (175000)){
        let query = new GraphQuery('newzealand', newzealand);
        query.request();
    } else if(seconds === (180000)){
        let query = new GraphQuery('belgium', belgium);
        query.request();
    } else if(seconds === (185000)){
        let query = new GraphQuery('greece', greece);
        query.request();
    } else if(seconds === (190000)){
        let query = new GraphQuery('singapore', singapore);
        query.request();
    } else if(seconds === (195000)){
        let query = new GraphQuery('latvia', latvia);
        query.request();
    } else if(seconds === (200000)){
        let query = new GraphQuery('romania', romania);
        query.request();
    } else if(seconds === (205000)){
        let query = new GraphQuery('malaysia', malaysia);
        query.request();
    } else if(seconds === (210000)){
        let query = new GraphQuery('bangladesh', bangladesh);
        query.request();
    } else if(seconds === (215000)){
        let query = new GraphQuery('thailand', thailand);
        query.request();
    } else if(seconds === (220000)){
        seconds = 1000;
    }
}, seconds);

const API_PORT = process.env.PORT || 4000;
app.listen(API_PORT, () => console.log(`PORT ${API_PORT}`));
