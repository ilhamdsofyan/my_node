// impor kebutuhan modul bawaan
const fs   = require("fs");
const url   = require("url");

/**
 * Fungsi untuk merender file, dalam hal ini berupa html
 * @param {*} req <request>
 * @param {*} res <response>
 */
function renderFile(file_name, res) {
    res.writeHead(200, {"Content-Type": "text/html"});
    
    fs.readFile(file_name, null, (error, file) => {
        if (error) {
            res.writeHead(404);
            res.write("File Not Found");
        } else {
            res.write(file);
        }
        
        res.end();
    });
}

module.exports = {
    handleRequest : function(req, res) {
        res.writeHead(200, {"Content-Type": "text/html"});
        var path = url.parse(req.url).pathname;
        
        switch (path) {
            case "/":
                renderFile("./index.html", res);
                break;
            case "/users":
                renderFile("./user.html", res);
                break;
            
            default:
                res.writeHead(404);
                renderFile("./404.html", res);
                break;
        }
    }
}
