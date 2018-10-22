var error;
var url = "http://mylogger.io/log";

function log(message) {
    // send log
    console.log(message);
}

/**
 * module = module declaration
 * export = the attributes of module
 *  which can change func or var into
 *  global
 * naming
 */
module.exports.log = log;
module.exports.url = url;
