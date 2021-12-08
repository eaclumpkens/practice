// PATH Module ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const path = require('path');

var pathObj = path.parse(__filename);
console.log(`Path Object:`, pathObj);
/* 
    {
        root: '/',
        dir: '/Users/eaclumpkens/Documents/Dev/practice/frameworks/practice/node',
        base: 'path.js',
        ext: '.js',
        name: 'path'
    }
*/

/// OS Module ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const os = require('os')

var totalMemory = os.totalmem();
var freeMemory = os.freemem();

console.log(`Total Memory:`, totalMemory);
console.log(`Free Memory:`, freeMemory);

// FILE SYSTEM Module ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const fs = require('fs');

const files = fs.readdirSync('./'); // returns string array of files and folders in current directory
console.log(`Sync Files:`, files);

fs.readdir('../', (err, files) => { // allows for callback function arg
    if (err) console.log('Error:', err);
    else console.log('Result:', files);
});

// EVENTS  Module ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Class:EventEmitter
const EventEmitter = require('events'); // Pascal Case indicates EventEmitter is a Class containing methods
// const emitter = new EventEmitter(); // Object

// Raise an Event
// emitter.emit('messageLogged', { id: 1, url: 'http://' }) // signalling an event has occurred

const Logger = require('./logger');
const logger = new Logger(); // replaces emitter as extended

// Register a Listener
logger.on('messageLogged', arg => {
    console.log('Listener Called:', arg)
}); // callback message called when event is raised 

logger.log('Testing with Logger Class...');


