// testing with node

const sayHello = name => {
    console.log(`Hello ${name}`);

    console.log(global) // Object presenting global scopes
    global.console.log('Redundant') // redundant

        // belong to global object
        // setTimeout() // call delay
        // clearTimeout() 

        // setInterval() // call function after given delay
        // clearInterval() // stop from being called repetetively

        global.message = 'Hello World!!';
        console.log('Global Message:', global.message)
};

sayHello('Elisabeth');