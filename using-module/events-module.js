// const eventsEmitter = require("events");
// const emitter = new eventsEmitter;
const Logger = require("./ClassLogger");
const logger = new Logger;

// register listener
logger.on("messageLogged", function(arg){
    console.log("Listener Called", arg);
});

// Raise an event
logger.log("message");
