const http = require('http');
const port = 4000;

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Hello World')
        res.end()
    }

    if (req.url === '/api/courses') {
        res.write(JSON.stringify([1, 2, 3]));
        res.end();
    }


    if (req.url === '/userData') {
        http.get('http://jsonplaceholder.typicode.com/users', async response => {
            // console.log('StatusCode', res.statusCode)
            // console.log('Content Type', res.headers['content-type'])
            
            response.on('data', data => { // ClientRequest class response
                res.write(data.toString()) // process stream output
            })
        })
    } 


}); // EventEmitter; server.emit(), .on() etc. valid

server.on('connection', () => {
    console.log('New Connection...')
})

server.listen(port);
console.log('Listening on port:', port);