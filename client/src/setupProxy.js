const proxy = require("http-proxy-middleware");

module.exports = app => {
    app.use(proxy("/contributions/*", {target: "http://localhost:4000/"}));
};