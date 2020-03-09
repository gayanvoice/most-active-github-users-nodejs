const proxy = require("http-proxy-middleware");

module.exports = app => {
    app.use(proxy(["/contributions/*", ], {target: "http://localhost:4000/"}));
    app.use(proxy("/set/*/*", {target: "http://localhost:4000/"}));
    app.use(proxy("/get/*/*", {target: "http://localhost:4000/"}));
};