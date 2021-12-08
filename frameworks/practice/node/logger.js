const EventEmitter = require('events'); // Pascal Case indicates EventEmitter is a Class containing methods

var url = 'http://mylogger.io/log';

class Logger extends EventEmitter { /// contains all EventEmitter functionality
    log(message) {
        // Send HTTP request
        console.log(message)
    
        // Raise an Event with extended EventEmitter
        this.emit('messageLogged', { id: 1, url: 'http://' }) // signalling an event has occurred
    };

}

module.exports = Logger;

/* 
    -- OR --
    module.exports.log = log;
    module.exports.logger = log // renamed 
    exports.log = log;
    NOT exports = log;
*/
