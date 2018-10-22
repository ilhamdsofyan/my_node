const EventEmitter = require("events");

class ClassLogger extends EventEmitter
{
    log(message) {
        console.log(message);

        this.emit("messageLogged", {id:1, url:"http://"});
    }
}

module.exports = ClassLogger;
