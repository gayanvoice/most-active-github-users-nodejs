const proxy = require("http-proxy-middleware");

module.exports = app => {
    app.use(proxy("/api/*", { target: "http://104.198.135.184:4000/" }));
};
