const os = require("os");

var total_memory = os.totalmem;
var free_memory = os.freemem;

console.log(`Total Memory: ${total_memory}`);
console.log(`Free Memory: ${free_memory}`);
