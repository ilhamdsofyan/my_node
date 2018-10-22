const http = require("http");
const routes = require("./route");

http.createServer(routes.handleRequest).listen(3000);
