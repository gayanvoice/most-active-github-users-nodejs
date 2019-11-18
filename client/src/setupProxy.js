const proxy = require("http-proxy-middleware");

module.exports = app => {
    app.use(proxy("/contributions/*", { target: "http://localhost:4000/" }));
    //app.use(proxy("/country/*", { target: "http://104.198.135.184:4000" }));
    //app.use(proxy("/user/*", { target: "http://localhost:4000/" }));
};

// http://104.198.135.184:4000/
