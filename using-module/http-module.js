const http = require("http");
const fs = require("fs");

const server = http.createServer((request, response) => {
    response.writeHead(200, {"Content-Type": "text/html"});

    if (request.url === "/") {
        response.write("Hell o World");
        response.end();
    }

    if (request.url === "/test") {
        fs.readFile("../test.html", null, (error, file) => {
            if (error) {
                response.writeHead(404);
                response.write("File Not Found");
            } else {
                response.write(file);
            }

            response.end();
        });
    }
});

// server.on("connection", (socket) => {
//     console.log("New connection...");
// });

server.listen(3000);

console.log("Listening on port 3000...");
