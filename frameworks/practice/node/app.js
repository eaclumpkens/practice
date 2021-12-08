const { log } = require('./logger');

const sayHello = name => {
    log(`Hello ${name}`);

    log(global); // Object presenting global scopes
    global.console.log('Redundant'); // redundant

        // belong to global object
        // setTimeout() // call delay
        // clearTimeout() 

        // setInterval() // call function after given delay
        // clearInterval() // stop from being called repetetively

        global.message = 'Hello World!!';
        log(`Global Message: ${global.message}`);
        log(module); // Object

        /* 
            Module {
            id: '.',
            path: '/Users/eaclumpkens/Documents/Dev/practice/frameworks/practice/node',
            exports: {},
            filename: '/Users/eaclumpkens/Documents/Dev/practice/frameworks/practice/node/app.js',
            loaded: false,
            children: [
                Module {
                id: '/Users/eaclumpkens/Documents/Dev/practice/frameworks/practice/node/logger.js',
                path: '/Users/eaclumpkens/Documents/Dev/practice/frameworks/practice/node',
                exports: [Object],
                filename: '/Users/eaclumpkens/Documents/Dev/practice/frameworks/practice/node/logger.js',
                loaded: true,
                children: [],
                paths: [Array]
                }
            ],
            paths: [
                '/Users/eaclumpkens/Documents/Dev/practice/frameworks/practice/node/node_modules',
                '/Users/eaclumpkens/Documents/Dev/practice/frameworks/practice/node_modules',
                '/Users/eaclumpkens/Documents/Dev/practice/frameworks/node_modules',
                '/Users/eaclumpkens/Documents/Dev/practice/node_modules',
                '/Users/eaclumpkens/Documents/Dev/node_modules',
                '/Users/eaclumpkens/Documents/node_modules',
                '/Users/eaclumpkens/node_modules',
                '/Users/node_modules',
                '/node_modules'
            ]
            }
        */
};

sayHello('Elisabeth');