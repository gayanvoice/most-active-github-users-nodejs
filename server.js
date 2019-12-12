const express = require("express"),
path = require('path'),
http = require("http"),
RateLimit = require('express-rate-limit'),
router = require('./server/api/api');




const app = express();

var limiter = new RateLimit({
    windowMs: 60*1000, // 1 minute
    max: 15
});


// app keep alive
setInterval(function() {
    http.get("http://githubstats-com.herokuapp.com/home");
    process.stdout.write('.');
}, 300000);



app.use('/',router);



app.use(limiter, express.static(path.join(__dirname, 'client/build')));


/* app.get('*', function(req, res) {
    try{
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    } catch (e) {
        console.log(e);
    }

}); */
const API_PORT = process.env.PORT || 4000;
app.listen(API_PORT, () => console.log(`PORT ${API_PORT}`));
