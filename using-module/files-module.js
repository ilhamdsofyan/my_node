const fs = require("fs");

// synchronous
// const files = fs.readdirSync("./");
// console.log(files);

// asynchronous
fs.readdir("./", function(err, files){
    if (err) {
        console.log("Error", err);
    } else {
        console.log("File", files);
    }
})
